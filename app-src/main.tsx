import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
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
import * as extern from "./extern";
import style from "./main.module.scss";

/* --- Extern --- */
// These functions will be called from Rust/Wasm
window.__extern__ = extern;

/* --- Wasm in the main thread --- */
async function failures() {
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

const App: React.FC = () => {
    const worker = useRef(new MyWorker());

    const [ip, setIp] = useState<string>();
    const [plus, setPlus] = useState<number>();
    const [asyncPlus, setAsyncPlus] = useState<number>();
    const [workr, setWork] = useState<number>();

    useEffect(() => {
        worker.current.addEventListener("message", (event) => {
            setWork(event.data);
        });

        init().then(() => {
            // -- Synchronous --
            // Will do i32 casting: "3.2" => 3, 2.98 => 2
            setPlus(add("3.2", 2.98));

            // -- Asynchronous: Promise <-> Futures --
            async_add(3, 2).then(setAsyncPlus);

            // -- Async: Request --
            async_request()
                .then((res) => JSON.parse(res))
                .then((res) => setIp(res.origin));

            // -- Wasm in the worker thread --
            worker.current.postMessage({ a: 3, b: 2 });

            // -- Test some failures between Wasm <-> JS
            failures().catch((e) => {
                console.warn("Err/panic:", e);
            });
        });
    }, []);

    return (
        <div className={style.container}>
            <table>
                <thead>
                    <tr>
                        <th>Sync</th>
                        <th>Async</th>
                        <th>Worker &times; Async</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{plus ?? <>&mdash;</>}</td>
                        <td>{asyncPlus ?? <>&mdash;</>}</td>
                        <td>{workr ?? <>&mdash;</>}</td>
                    </tr>
                </tbody>
            </table>
            <p>Your IP: {ip}</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
