use axum::{
	body::HttpBody,
	extract::{Form, Json, Path},
	handler::Handler,
	http::{
		header::{self, HeaderName, HeaderValue},
		Method, Response, StatusCode, Uri,
	},
	response::{Headers, Html, IntoResponse, Redirect},
	routing::get_service,
	routing::{get, post},
	Router, Server,
};
use http_body::Full;
use std::{io, str::FromStr};
use std::{net::SocketAddr, time::Instant};
use tokio::{
	fs::File,
	io::{self as tio, AsyncReadExt},
};
use tower::ServiceBuilder;
use tower_http::{
	services::fs::{ServeDir, ServeFileSystemResponseBody},
	set_header::SetResponseHeaderLayer,
	trace::TraceLayer,
	ServiceBuilderExt,
};
use tracing::{debug, info};

#[tokio::main]
async fn main() {
	// initialize tracing
	tracing_subscriber::fmt::init();

	// Weirdly it works from last call to first. So you need to apply the headers first.
	let service = ServiceBuilder::new()
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
		.and_then(
			|response: Response<ServeFileSystemResponseBody>| async move {
				let response = if response.status() == StatusCode::NOT_FOUND {
					// We must send back index.html without redirecting it. This is a Single Page Application.
					let mut f = File::open("./dist/index.html").await?;
					let mut buffer = Vec::new();

					// TODO: We could probably stream the file instead of loading it completely in memory?
					f.read_to_end(&mut buffer).await?;
					let body = Full::from(buffer).map_err(|err| match err {}).boxed();

					Response::builder()
						.status(StatusCode::OK)
						.body(body)
						.unwrap()
				} else {
					response.map(|body| body.boxed())
				};

				Ok::<_, io::Error>(response)
			},
		)
		.service(ServeDir::new("./dist"));

	let fronted_server = Router::new()
		.nest(
			"/",
			get_service(service).handle_error(|error: std::io::Error| async move {
				(
					StatusCode::INTERNAL_SERVER_ERROR,
					format!("Unhandled internal error: {}", error),
				)
			}),
		)
		.layer(TraceLayer::new_for_http());

	serve(fronted_server, 3000).await;
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
		Headers(vec![("X-Foo", "foo")]),
		Html("Hello, World!"),
	)
}
