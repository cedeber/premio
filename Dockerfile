FROM rust:alpine as builder
RUN apk add --update --no-cache build-base musl-dev libc-dev openssl-dev binaryen curl nodejs npm just
RUN rustup toolchain install nightly-2022-01-20
RUN rustup component add rust-src --toolchain nightly-2022-01-20
RUN rustup target add wasm32-unknown-unknown
RUN cargo install -f wasm-bindgen-cli
RUN cargo install sqlx-cli --no-default-features --features rustls,sqlite
WORKDIR app
COPY . .
RUN npm clean-install
RUN just sqlx
RUN just build

FROM alpine:latest
RUN apk add --update --no-cache libc6-compat # Because of musl linker
WORKDIR app
COPY --from=builder /app/target/release/server /app/
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/db.sqlite /app/
#COPY --from=builder ./db.sqlite /usr/local/bin/dev.db
CMD ["/app/server", "/app/dist"]
