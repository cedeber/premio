import init, {
    add,
    async_add,
    async_request,
    error,
    async_error,
    panic,
    try_catch_rust,
    async_try_catch_rust,
} from "../pkg/primio";
import MyWorker from "./worker?worker";
import "./styles.scss";
import * as extern from "./extern";

/* --- Extern --- */
// These functions will be called from Rust/Wasm
window.__extern__ = extern;

/* --- Wasm in the main thread --- */
async function main() {
    // init is main();
    await init(); // Accept a path as param if the .wasm file is not package_bg.wasm

    // Will do i32 casting: "3.2" => 3, 3.98 => 3
    const res = add("3.2", 3.98);
    console.log("result:", res);

    // -- Synchronous --
    const syncEl = document.getElementById("sync");
    syncEl!.innerHTML = String(add(3, 2));

    // -- Async: Request --
    const requestEl = document.getElementById("request");
    requestEl!.innerHTML = await async_request();

    // -- Asynchronous: Promise <-> Futures --
    const asyncEl = document.getElementById("async");
    asyncEl!.innerHTML = String(await async_add(3, 2));

    try {
        // Function that returns a Result/Err from Rust
        error();
    } catch (e) {
        console.warn("Rust/Wasm failure:", e);
    }

    // Async function that returns a Result/Err from Rust
    async_error().catch((e) => console.warn("Async Rust/Wasm failure:", e));

    try {
        // Function that returns a Result/Err from Rust
        try_catch_rust();
    } catch (e) {
        console.warn("JS failure in Rust/Wasm:", e);
    }

    // Should panic. Neither catch() not try/catch will work?
    async_try_catch_rust().catch((e) => {
        console.warn("Async JS failure in Rust/Wasm:", e);
    });

    // Function that panic from Rust. Will reject this Promise. Otherwise use try/catch.
    // See the main() call.
    panic();
}

/* --- Wasm in the worker thread --- */
function worker() {
    const workerEl = document.getElementById("worker");
    // const worker = new Worker("./worker.js", { type: "module" });
    const worker = new MyWorker();

    worker.addEventListener("message", (event) => {
        workerEl!.innerHTML = event.data;
    });

    worker.postMessage({ a: 3, b: 2 });
}

// -> Launch
main().catch((e) => {
    console.warn("Err/panic:", e);
});
worker();
