use log::{info, Level};
use sum::fibonacci;
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen(start)]
pub fn main_wasm() -> Result<(), JsValue> {
	#[cfg(feature = "console_error_panic_hook")]
	console_error_panic_hook::set_once();

	#[cfg(feature = "console_log")]
	console_log::init_with_level(Level::Trace).expect("error initializing log");

	Ok(())
}

// From JavaScript
#[wasm_bindgen]
extern "C" {
	// Need to define catch + Result here for tests.
	// We better consider that every JS function may fail anyways.
	// #[wasm_bindgen(js_namespace = __extern__, catch)]
	// fn wasm_cb(s: &str) -> Result<(), JsValue>;
	#[wasm_bindgen(js_namespace = __extern__)]
	fn add_cb(result: u32);

	// The `async` can be combined with the `catch` attribute to manage errors from the JS promise
	#[wasm_bindgen(js_namespace = __extern__, catch)]
	async fn async_add_cb() -> Result<JsValue, JsValue>;

	#[wasm_bindgen(js_namespace = __extern__, catch)]
	fn try_catch() -> Result<(), JsValue>;

	#[wasm_bindgen(js_namespace = __extern__, catch)]
	async fn async_try_catch() -> Result<(), JsValue>;
}

#[wasm_bindgen]
pub fn fib(a: u32) -> u32 {
	info!("sync fib() called");
	let result = fibonacci(a);
	add_cb(result);
	result
}

#[wasm_bindgen]
pub async fn async_fib(a: u32) -> Result<u32, JsValue> {
	info!("async_fib() called");
	let a = fibonacci(a);
	// Wait from JS
	let b = async_add_cb().await?.as_f64().unwrap() as u32;
	Ok(a + b)
}

#[wasm_bindgen]
pub async fn async_request() -> String {
	let resp = reqwest::get("https://httpbin.org/ip")
		.await
		.unwrap()
		.text()
		.await
		.unwrap();

	resp
}

/// This will throw an error in the JS world. So use try/catch.
#[wasm_bindgen]
pub fn error() -> Result<(), JsValue> {
	Err(JsValue::from("This is an error"))
}

/// This will be a Promise in the JS world. So use Promise.catch().
#[wasm_bindgen]
pub async fn async_error() -> Result<(), JsValue> {
	let resp = reqwest::get("https://httpbin.org/ip")
		.await
		.unwrap()
		.text()
		.await
		.unwrap();

	Err(JsValue::from(resp))
}

#[wasm_bindgen]
pub fn panic() {
	panic!("This is an panic");
}

#[wasm_bindgen]
pub fn try_catch_rust() -> Result<(), JsValue> {
	try_catch()
}

#[wasm_bindgen]
pub async fn async_try_catch_rust() -> Result<(), JsValue> {
	async_try_catch().await
}

#[cfg(test)]
mod tests {
	use super::*;
	use wasm_bindgen_test::*;

	#[wasm_bindgen_test]
	fn it_works() {
		assert_eq!(5, fib(2));
	}
}
