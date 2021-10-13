import init, { async_add } from "../pkg/premio";
import * as extern from "./extern";

// Declare ctx as Worker and not as Window
const ctx = self as unknown as Worker;

/* --- Extern --- */
// These functions will be called from Rust/Wasm
ctx.__extern__ = extern;

/* --- Worker --- */
ctx.addEventListener("message", async (event) => {
    const { a, b } = event.data;

    // Workaround because the path is relative to the js file (in assets) and not to the root.
    await init();

    // Async
    const result = await async_add(a, b);
    ctx.postMessage(result);
});
