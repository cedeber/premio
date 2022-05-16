use axum::{
	http::{
		header::{HeaderName, HeaderValue},
		Method, StatusCode,
	},
	response::IntoResponse,
	routing::{get, get_service},
	Router, Server,
};
use std::{env, net::SocketAddr};
use tower::ServiceBuilder;
use tower_http::{
	cors::CorsLayer,
	services::{ServeDir, ServeFile},
	trace::TraceLayer,
	ServiceBuilderExt,
};
use tracing::info;

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

	let backend = tokio::spawn(async {
		let allowed_methods = vec![Method::GET];
		// TODO: .nest() for /api + CORS
		let app = Router::new().route("/hello", get(hello)).layer(
			// see https://docs.rs/tower-http/latest/tower_http/cors/index.html
			// for more details
			CorsLayer::new()
				.allow_origin("http://localhost:3000".parse::<HeaderValue>().unwrap())
				.allow_methods(allowed_methods),
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
