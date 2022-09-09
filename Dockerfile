FROM rust:alpine as builder
RUN apk add --update --no-cache build-base musl-dev libc-dev openssl-dev binaryen curl nodejs npm just
RUN rustup toolchain install nightly-2022-01-20
RUN rustup component add rust-src --toolchain nightly-2022-01-20
RUN rustup target add wasm32-unknown-unknown
RUN cargo install wasm-bindgen-cli
WORKDIR app
COPY . .
RUN npm clean-install
RUN just build

FROM alpine:latest
WORKDIR app
#COPY --from=builder /usr/local/cargo/bin/server /usr/local/bin/premio
COPY --from=builder /app/target/release/server /app/server
COPY --from=builder /app/dist /app/
#COPY --from=builder ./db.sqlite /usr/local/bin/dev.db
#CMD ["/app/server", "/app/dist"]
