use log::{info, trace, Level};
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
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    // Need to define catch + Result here for tests.
    // We better consider that every JS function may fail anyways.
    #[wasm_bindgen(js_namespace = __extern__, catch)]
    fn wasm_cb(s: &str) -> Result<(), JsValue>;

    // The `async` can be combined with the `catch` attribute to manage errors from the JS promise
    #[wasm_bindgen(js_namespace = __extern__, catch)]
    async fn async_wasm_cb(s: &str) -> Result<JsValue, JsValue>;

    #[wasm_bindgen(js_namespace = __extern__, catch)]
    fn try_catch() -> Result<(), JsValue>;

    #[wasm_bindgen(js_namespace = __extern__, catch)]
    async fn async_try_catch() -> Result<(), JsValue>;
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    info!("add() called");
    wasm_cb("wasm_cb() called");
    a + b
}

#[wasm_bindgen]
pub async fn async_add(a: i32, b: i32) -> Result<i32, JsValue> {
    info!("async_add() called");
    // Wait from JS
    let c = async_wasm_cb("async_wasm_cb() called")
        .await?
        .as_f64()
        .unwrap() as i32;
    Ok(a + b + c)
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
        assert_eq!(5, add(2, 3));
    }
}
