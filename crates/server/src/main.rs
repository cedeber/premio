use std::{env, fs, net::SocketAddr};

use async_graphql::http::{playground_source, GraphQLPlaygroundConfig};
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
use clap::Parser;
use tower::ServiceBuilder;
use tower_http::cors::Any;
use tower_http::{
	cors::CorsLayer,
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

	let port: u16 = env::var("PORT")
		.unwrap_or_else(|_| String::from("5000"))
		.trim()
		.parse()
		.unwrap();

	let frontend = tokio::spawn(async move {
		let path_index = frontend_path.join("index.html");
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
			serve(app, port).await
		}
	});

	let schema = build_schema().await;
	let backend = tokio::spawn(async move {
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
		serve(app, port + 1).await
	});

	// Concurrently mode but we spawn each server on its own thread
	if env::var("DEV_MODE").is_ok() {
		tokio::join!(backend).0.unwrap();
	} else {
		tokio::join!(frontend, backend).0.unwrap();
	}
}

/// Run the app with hyper.
// `axum::Server` is a re-export of `hyper::Server`
async fn serve(app: Router, port: u16) {
	// Need 0.0.0.0 instead of 127.0.0.1 for Docker to expose outside of the container
	let addr = SocketAddr::from(([0, 0, 0, 0], port));
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

// async fn graphql_handler(schema: Extension<AppSchema>, req: GraphQLRequest) -> GraphQLResponse {
// 	schema.execute(req.into_inner()).await.into()
// }

async fn graphql_handler(schema: Extension<AppSchema>, req: GraphQLRequest) -> GraphQLResponse {
	schema.execute(req.into_inner()).await.into()
}

async fn graphql_playground() -> impl IntoResponse {
	response::Html(playground_source(GraphQLPlaygroundConfig::new("/graphql")))
}
