import init, { add, async_add } from "../pkg/primio";

// Declare ctx as Worker and not as Window
const ctx = self as unknown as Worker;

/* --- Extern --- */
// These functions will be called from Rust/Wasm
ctx.wasm_cb = (str: string) => {
    console.log("(worker thread)", str);
};

// Could also be async/await
ctx.async_wasm_cb = (str: string) =>
    new Promise((resolve) => {
        ctx.setTimeout(() => {
            console.log("(worker thread + async)", str);
            resolve(4); // will add 4 to the next async_add() call
        }, 2000);
    });

/* --- Worker --- */
ctx.addEventListener("message", async (event) => {
    const { a, b } = event.data;

    await init();

    // Sync
    ctx.postMessage(add(a, b));

    // Async
    const result = await async_add(a, b);
    ctx.postMessage(result);
});
