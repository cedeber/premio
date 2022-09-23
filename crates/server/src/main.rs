use std::{env, fs, net::SocketAddr};

use async_graphql::http::{playground_source, GraphQLPlaygroundConfig};
use async_graphql_axum::{GraphQLRequest, GraphQLResponse};
use axum::response::Redirect;
use axum::{
	http::{
		header::{HeaderName, HeaderValue},
		Method, StatusCode,
	},
	response,
	response::IntoResponse,
	routing::{get, get_service, post},
	Extension, Router, Server,
};
use clap::Parser;
use tower::ServiceBuilder;
use tower_http::{
	cors::{Any, CorsLayer},
	services::{ServeDir, ServeFile},
	trace::TraceLayer,
	ServiceBuilderExt,
};
use tracing::info;

use crate::gqlite::schema::{build_schema, AppSchema};

// use graphql::schema::{build_schema, AppSchema};

// mod graphql;
// mod prisma;
mod gqlite;

/// Simple program to list all board games from a BoardGameGeek user.
#[derive(Parser, Debug)]
#[clap(author, version, about, long_about = None)]
struct Args {
	/// path for the frontend dist folder
	#[clap()]
	path: String,
}

#[tokio::main]
async fn main() {
	// initialize tracing
	tracing_subscriber::fmt::init();

	// parse the CLI arguments
	let args = Args::parse();
	let frontend_path = fs::canonicalize(args.path).expect("Failed to parse path");
	let path_index = frontend_path.join("index.html");

	// env: PORT
	let port: u16 = env::var("PORT")
		.unwrap_or_else(|_| String::from("5000"))
		.trim()
		.parse()
		.unwrap();
	// Need 0.0.0.0 instead of 127.0.0.1 for Docker to expose outside of the container
	let addr = SocketAddr::from(([0, 0, 0, 0], port));

	// GraphQL Schema
	let schema = build_schema().await;

	let server = tokio::task::spawn(async move {
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
			.service(ServeDir::new(frontend_path).fallback(ServeFile::new(path_index)));

		// see https://docs.rs/tower-http/latest/tower_http/cors/index.html
		let cors = CorsLayer::new()
			// allow `GET` and `POST` when accessing the resource
			.allow_methods([Method::GET, Method::POST])
			// allow requests from any origin
			.allow_origin(Any)
			.allow_headers(Any);

		let app = Router::new()
			.route("/graphql", get(graphql_playground).post(graphql_handler))
			.layer(Extension(schema))
			.layer(cors)
			.route("/hello", get(hello))
			.nest(
				"/app",
				get_service(spa_service).handle_error(|error: std::io::Error| async move {
					(
						StatusCode::INTERNAL_SERVER_ERROR,
						format!("Unhandled internal error: {}", error),
					)
				}),
			)
			.route("/", get(|| async { Redirect::permanent("/app") }))
			.layer(TraceLayer::new_for_http());

		// The local webserver will be managed by Parcel in DEV_MODE
		// if env::var("DEV_MODE").is_err() {
		info!("listening on {}", addr);
		Server::bind(&addr)
			.serve(app.into_make_service())
			.await
			.expect("The server crashed");
		// }
	});

	server.await.unwrap();
}

async fn hello() -> impl IntoResponse {
	(
		StatusCode::OK,
		[("X-Foo", "foo")],
		String::from("Hello, World!"),
	)
}

async fn graphql_handler(schema: Extension<AppSchema>, req: GraphQLRequest) -> GraphQLResponse {
	schema.execute(req.into_inner()).await.into()
}

async fn graphql_playground() -> impl IntoResponse {
	response::Html(playground_source(GraphQLPlaygroundConfig::new("/graphql")))
}
