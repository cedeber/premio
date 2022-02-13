use wasm_bindgen::prelude::*;
pub use wasm_bindgen_rayon::init_thread_pool;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen(start)]
pub fn main_wasm() -> Result<(), JsValue> {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
    Ok(())
}

#[wasm_bindgen]
pub fn sum() -> u32 {
    sum::sum()
}

#[wasm_bindgen]
pub async fn par_sum() -> u32 {
    sum::par_sum()
}

#[cfg(test)]
mod tests {
    use super::*;
    use wasm_bindgen_test::wasm_bindgen_test_configure;
    use wasm_bindgen_test::*;

    wasm_bindgen_test_configure!(run_in_browser);

    #[wasm_bindgen_test]
    fn it_works() {
        assert_eq!(433494435, sum::sum());
        assert_eq!(433494435, sum::par_sum());
    }
}
