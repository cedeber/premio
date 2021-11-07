import { VFC, useEffect, useState } from "react";
import init, {
    async_error as _async_error,
    async_try_catch_rust as _async_try_catch_rust,
    error as _error,
    panic as _panic,
    try_catch_rust as _try_catch_rust,
} from "../../pkg";
import { Tag, TagIntent } from "../components/Tag";
import style from "./styles/default.module.scss";

const Failures: VFC = () => {
    const [error, setError] = useState<typeof _error>();
    const [asyncError, setAsyncError] = useState<typeof _async_error>();
    const [tryCatchRust, setTryCatchRust] = useState<typeof _try_catch_rust>();
    const [asyncTryCatchRust, setAsyncTryCatchRust] = useState<typeof _async_try_catch_rust>();
    const [panic, setPanic] = useState<typeof _panic>();

    const [errorMsg, setErrorMsg] = useState<string>();
    const [asyncErrorMsg, setAsyncErrorMsg] = useState<string>();
    const [tryCatchRustMsg, setTryCatchRustMsg] = useState<string>();
    const [asyncTryCatchRustMsg, setAsyncTryCatchRustMsg] = useState<string>();
    const [panicMsg, setPanicMsg] = useState<string>();

    useEffect(() => {
        init().then(() => {
            // -- Test some failures between Wasm <-> JS
            setError(() => _error);
            setAsyncError(() => _async_error);
            setTryCatchRust(() => _try_catch_rust);
            setAsyncTryCatchRust(() => _async_try_catch_rust);
            setPanic(() => _panic);
        });
    }, []);

    useEffect(() => {
        try {
            // Function that returns a Result/Err from Rust
            error?.();
        } catch (e) {
            setErrorMsg(String(e));
        }
    }, [error]);

    useEffect(() => {
        // Async function that returns a Result/Err from Rust
        asyncError?.().catch((e) => setAsyncErrorMsg(String(e)));
    }, [asyncError]);

    useEffect(() => {
        try {
            // Function that returns a Result/Err from Rust
            panic?.();
        } catch (e) {
            setPanicMsg(String(e));
        }
    }, [panic]);

    useEffect(() => {
        try {
            // Function that returns a Result/Err from Rust, although the crash happened in the JS world.
            // @see extern.ts
            tryCatchRust?.();
        } catch (e) {
            setTryCatchRustMsg(String(e));
        }
    }, [tryCatchRust]);

    useEffect(() => {
        // Async function that returns a Result/Err from Rust, although the crash happened in the JS world.
        // @see extern.ts
        asyncTryCatchRust?.().catch((e) => setAsyncTryCatchRustMsg(String(e)));
    }, [asyncTryCatchRust]);

    return (
        <>
            <h1>Failures</h1>
            <h2>Rust</h2>
            <p>
                Something went wrong in the <Tag intent={TagIntent.Error}>Rust</Tag> side.
                Controlled with <Tag>Result</Tag>, catched in the JavaScript world.
            </p>
            <h3>Synchronous Rust/Wasm failure</h3>
            <p>
                Message returned by <Tag intent={TagIntent.Error}>Rust</Tag>
            </p>
            <p className={style.result}>{errorMsg ?? <>&mdash;</>}</p>
            <h3>Asynchronous Rust/Wasm failure</h3>
            <p>
                One fakes an asynchronous error by returning your IP as{" "}
                <Tag intent={TagIntent.Error}>Err</Tag>
            </p>
            <p className={style.result}>{asyncErrorMsg ?? <>&mdash;</>}</p>
            <h3>Panic</h3>
            <p>
                Panic in Rust is a bad, uncontrolled crash. You also have an automatic error log in
                the <Tag>console</Tag>.
            </p>
            <p className={style.result}>{panicMsg ?? <>&mdash;</>}</p>
            <h2>JavaScript</h2>
            <p>
                A <Tag intent={TagIntent.Warning}>JavaScript</Tag> function, called from Wasm,{" "}
                <Tag>throw an error</Tag> and is returned from Rust as a <Tag>Result</Tag> too.
            </p>
            <h3>JavaScript failure in Rust/Wasm</h3>
            <p className={style.result}>{tryCatchRustMsg ?? <>&mdash;</>}</p>
            <h3>Asynchronous JavaScript failure in Rust/Wasm</h3>
            <p className={style.result}>{asyncTryCatchRustMsg ?? <>&mdash;</>}</p>
        </>
    );
};

export { Failures };
