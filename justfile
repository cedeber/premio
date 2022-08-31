# Developement
watch-server:
	DEV_MODE=1 RUST_LOG=trace cargo watch --watch ./crates/server --exec "run -p server"

watch-app:
	npx vite

watch-scss:
	npx typed-scss-modules packages/*/src/**/*.module.scss --watch

# Generated during development. Keep the files in the repository.
codegen-graphql:
	cd packages/games/ && npx graphql-codegen --config schema.codegen.yml

# Production
wasm:
	wasm-pack build --target web --out-dir ../../packages/wasm_async --out-name async ./crates/wasm_async
	wasm-pack build --target web --out-dir ../../packages/wasm_sum --out-name sum ./crates/wasm_sum

vite:
	npx vite build

build: wasm vite
	cargo build --release -p server

# Run
start: build
	cargo run --release -p server
