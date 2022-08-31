use std::{env, net::SocketAddr};

use async_graphql::{
	http::{playground_source, GraphQLPlaygroundConfig},
	Context, EmptyMutation, EmptySubscription, Object, Schema,
};
use async_graphql_axum::{GraphQLRequest, GraphQLResponse};
use axum::{
	http::{
		header::{HeaderName, HeaderValue},
		Method, StatusCode,
	},
	response,
	response::IntoResponse,
	routing::{get, get_service},
	Extension, Router, Server,
};
use sqlx::{query_as, Pool, Sqlite, SqlitePool};
use tower::ServiceBuilder;
use tower_http::cors::Any;
use tower_http::{
	cors::CorsLayer,
	services::{ServeDir, ServeFile},
	trace::TraceLayer,
	ServiceBuilderExt,
};
use tracing::info;

use server::{db, fetch_collection, BoardGame, User};

#[tokio::main]
async fn main() {
	// initialize tracing
	tracing_subscriber::fmt::init();

	let frontend = tokio::spawn(async {
		let spa_service = ServiceBuilder::new()
			// These Headers are required to activate SharedArrayBuffer and Wasm Threads.
			// Need to be written in lowercase :-/
			.override_response_header(
				HeaderName::from_static("cross-origin-embedder-policy"),
				HeaderValue::from_static("require-corp"),
			)
			.override_response_header(
				HeaderName::from_static("cross-origin-opener-policy"),
				HeaderValue::from_static("same-origin"),
			)
			.service(ServeDir::new("./dist").fallback(ServeFile::new("./dist/index.html")));

		let app = Router::new()
			.nest(
				"/",
				get_service(spa_service).handle_error(|error: std::io::Error| async move {
					(
						StatusCode::INTERNAL_SERVER_ERROR,
						format!("Unhandled internal error: {}", error),
					)
				}),
			)
			.layer(TraceLayer::new_for_http());

		// The local webserver will be managed by Parcel in DEV_MODE
		if env::var("DEV_MODE").is_err() {
			serve(app, 3000).await
		}
	});

	let pool = SqlitePool::connect("sqlite:db.sqlite").await.unwrap();
	let schema = Schema::build(Query::default(), EmptyMutation, EmptySubscription)
		.data(pool)
		.finish();
	let backend = tokio::spawn(async {
		let allowed_methods = vec![Method::GET, Method::POST];
		// let origins = ["http://localhost:3000".parse::<HeaderValue>().unwrap()];

		// TODO: .nest() for /api + CORS
		let app = Router::new()
			.route("/hello", get(hello))
			.route("/graphql", get(graphql_playground).post(graphql_handler))
			.layer(Extension(schema))
			.layer(
				// see https://docs.rs/tower-http/latest/tower_http/cors/index.html
				// for more details
				CorsLayer::new()
					.allow_origin(Any)
					.allow_methods(allowed_methods)
					.allow_headers(Any),
			);
		serve(app, 4000).await
	});

	// Concurrently mode but we spawn each server on its own thread
	if env::var("DEV_MODE").is_ok() {
		tokio::join!(backend);
	} else {
		tokio::join!(frontend, backend);
	}
}

/// Run the app with hyper.
// `axum::Server` is a re-export of `hyper::Server`
async fn serve(app: Router, port: u16) {
	let addr = SocketAddr::from(([127, 0, 0, 1], port));
	info!("listening on {}", addr);
	Server::bind(&addr)
		.serve(app.into_make_service())
		.await
		.unwrap();
}

async fn hello() -> impl IntoResponse {
	(
		StatusCode::OK,
		[("X-Foo", "foo")],
		String::from("Hello, World!"),
	)
}

#[derive(Default)]
struct Query;

#[Object]
impl Query {
	async fn games(
		&self,
		ctx: &Context<'_>,
		username: Option<String>,
	) -> Result<Vec<BoardGame>, String> {
		let pool = match ctx.data::<Pool<Sqlite>>() {
			Ok(pool) => pool,
			_ => return Err(String::from("Cannot access the Database.")),
		};

		match username {
			None => match query_as::<_, BoardGame>(
				// language=SQLite
				r#"
					SELECT gameid as id, title as name, published as year, playing_time as playtime, min_players, max_players
					FROM boardgames ORDER BY title
				"#)
				.fetch_all(pool)
				.await {
				Ok(games) => Ok(games),
				_ => Err(String::from("Error querying the games"))
			},
			Some(username) => {
				// Fetch and save the games into the db.
				let games = fetch_collection(&username).await;
				if let Ok(games) = games {
					db(&username, &games, &pool).await;
				}

				match query_as::<_, BoardGame>(
					// language=SQLite
					r#"
					SELECT gameid as id, title as name, published as year, playing_time as playtime, min_players, max_players
					FROM boardgames
					INNER JOIN boardgames_users on boardgames_users.game_id = boardgames.gameid
					INNER JOIN users on users.id = boardgames_users.user_id
					WHERE username = $1
					ORDER BY title
				"#)
					.bind(username)
					.fetch_all(pool)
					.await {
					Ok(games) => Ok(games),
					_ => Err(String::from("Error getting the games list"))
				}
			}
		}
	}

	async fn users(&self, ctx: &Context<'_>) -> Result<Vec<User>, Box<sqlx::Error>> {
		let pool = ctx.data::<Pool<Sqlite>>().unwrap();
		let users = query_as::<_, User>(
			// language=SQLite
			r#"SELECT id, username FROM users ORDER BY username"#,
		)
		.fetch_all(pool)
		.await?;

		Ok(users)
	}
}

type QuerySchema = Schema<Query, EmptyMutation, EmptySubscription>;

async fn graphql_handler(schema: Extension<QuerySchema>, req: GraphQLRequest) -> GraphQLResponse {
	schema.execute(req.into_inner()).await.into()
}

async fn graphql_playground() -> impl IntoResponse {
	response::Html(playground_source(GraphQLPlaygroundConfig::new("/graphql")))
}
