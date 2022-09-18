# Developement
watch-server:
	DEV_MODE=1 RUST_LOG=trace cargo watch --watch ./crates/server --exec "run --bin server"

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
	npx vite build

build: wasm vite
	cargo build --release --package server

# Run
start: build
	cargo run --release --package server
