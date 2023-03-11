# Developement
watch-server:
	DEV_MODE=1 RUST_LOG=trace PORT=3000 BASE_URL=/app cargo watch --watch ./crates/server --exec "run --bin server -- ./dist"

watch-app:
	npx vite

watch-scss:
	npx typed-scss-modules "packages/*/src/**/*.module.scss" --watch

# Generated during development. Keep the files in the repository.
codegen-graphql:
	cd packages/games/ && npx graphql-codegen --config schema.codegen.yml

# Production
clean:
	rm -rf packages/wasm_* dist

sqlx:
	sqlx database create
	sqlx migrate run

wasm:
	just crates/wasm_async/release
	just crates/wasm_threads/release

vite:
	VITE_BASE_URL=app npm run build-app -w main

build: wasm vite
	cargo build --release --package server

# Run
start: build
	cargo run --release --package server
