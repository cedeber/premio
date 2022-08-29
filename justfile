wasm:
	wasm-pack build --target web --out-dir ../../packages/wasm_async --out-name async ./crates/wasm_async
	wasm-pack build --target web --out-dir ../../packages/wasm_sum --out-name sum ./crates/wasm_sum
