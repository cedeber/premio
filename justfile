wasm:
	wasm-pack build --target web --out-dir ../../packages/wasm_async --out-name async ./crates/wasm_async
	wasm-pack build --target web --out-dir ../../packages/wasm_sum --out-name sum ./crates/wasm_sum

serve:
	DEV_MODE=1 RUST_LOG=trace cargo watch --watch ./crates/server --exec "run -p server"

dev:
	npx vite

css:
	npx typed-scss-modules packages/src/**/*.module.scss --watch

graphql:
	cd packages/games/ && npx graphql-codegen --config schema.codegen.yml

build: wasm
	npx vite build

github-pages: wasm
	BASE_URL=premio vite build --base /premio/
