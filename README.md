# Premio

Web startup with WebAssembly.

```
npm run dev -w my-app
RUST_LOG=trace cargo run -p server
```

Currently, for React 18, install Nodejs modules with `npm install --legacy-peer-deps`
in order to bypass the peerDependencies from react-aria.

## Languages

-   [Rust](https://www.rust-lang.org) ([Book](https://doc.rust-lang.org/stable/book/))
-   [TypeScript](https://www.typescriptlang.org)
-   [SCSS](https://sass-lang.com)

## Rust & WebAssembly

-   [Rust and Wasm Book](https://rustwasm.github.io/docs/book/)
-   [wasm-bindgen Guide](https://rustwasm.github.io/docs/wasm-bindgen/) (+ futures, js-sys & web-sys)

### Tools

`wasm-pack` and `wasm-bindgen` are mandatory to ease our life to compile and communicate between Rust/WabAssembly and
JavaScript.

-   [Wasm pack](https://rustwasm.github.io/wasm-pack/) - Build Rust to WebAssembly.
-   [Cargo watch](https://crates.io/crates/cargo-watch) - Watches over your Cargo project’s source.
-   [Cargo audit](https://rustsec.org) Audit Cargo.lock files for crates with security vulnerabilities.

### Libraries

#### Web

-   [wasm-bindgen](https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen/index.html)
-   [wasm-bindgen-futures](https://rustwasm.github.io/wasm-bindgen/api/wasm_bindgen_futures/index.html)
-   [wasm-bindgen-test](https://rustwasm.github.io/docs/wasm-bindgen/wasm-bindgen-test/index.html)
-   [wasm-bindgen-rayon](https://github.com/GoogleChromeLabs/wasm-bindgen-rayon)

These libraries bellow help you to call the JavaScript world into WebAssembly. For instance you could call `fetch()`
instead of using `reqwest`. Or do some DOM manipulation, draw on a `canvas` with the canvas API
or [`piet`](https://github.com/linebender/piet), etc.

-   [js-sys](https://rustwasm.github.io/wasm-bindgen/api/js_sys/index.html)
-   [dom-sys](https://rustwasm.github.io/wasm-bindgen/api/web_sys/index.html)

#### Memory

-   [wee_alloc](https://docs.rs/wee_alloc/) - A slower but smaller Memory allocator designed for WebAssembly. Replaces the
    Rust's one.

#### Browser console

Allow to report any errors and panics into the browser console. Also allow to log properly from Rust to the console.

-   [console_error_panic_hook](https://github.com/rustwasm/console_error_panic_hook)
-   [console_log](https://docs.rs/console_log)
-   [log](https://docs.rs/log)

#### Other

-   [serde](https://serde.rs) - Serialization
-   [reqwest](https://docs.rs/reqwest) - Web request

## TypeScript & React

### Tools

Everything you need to bundle, lint, test and format code of you web application.

-   [Parcel](https://parceljs.org) - Frontend Tooling and Bundler.
-   [Eslint](https://eslint.org) - TypeScript/JavaScript linter.
-   [Prettier](https://prettier.io) - Code Formatter.

### Libraries

-   [React](https://reactjs.org)
-   [React Aria](https://react-spectrum.adobe.com/react-aria/index.html) - A library of React Hooks that provides
    accessible UI primitives for your design system.
-   [Frontafino](https://www.npmjs.com/package/@cedeber/frontafino) - JavaScript Utilities and React Hooks.
-   [Ramda](https://ramdajs.com) - A practical functional library. Also used in Frontafino.
-   [Fuse.js](https://fusejs.io) - Powerful and lightweight fuzzy-search library


## For later

- Next.JS
- React Query
- Zustand
- React Hook Form
