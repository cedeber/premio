import React, { useEffect, useState } from "react";
import init, {
    add as _add,
    async_add as _asyncAdd,
    async_request as _asyncRequest,
} from "../../pkg";
import { NumberField } from "../components/NumberField";
import { Tag, TagIntent } from "../components/Tag";
import style from "./styles/default.module.scss";

const Basic: React.FC = () => {
    // Will do i32 casting: "3.2" => 3, 2.98 => 2
    const [a, setA] = useState<number>("3.2");
    const [b, setB] = useState<number>(2.98);

    // Used to store add() from Wasm once initialized
    const [add, setAdd] = useState<typeof _add>();
    const [asyncAdd, setAsyncAdd] = useState<typeof _asyncAdd>();

    const [result, setResult] = useState<number>();
    const [loading, setLoading] = useState(false);
    const [asyncResult, setAsyncResult] = useState<number>();

    const [asyncRequest, setAsyncRequest] = useState<typeof _asyncRequest>();
    const [ip, setIp] = useState<string>();

    useEffect(() => {
        init().then(() => {
            setAdd(() => _add);
            setAsyncAdd(() => _asyncAdd);
            setAsyncRequest(() => _asyncRequest);
        });
    }, []);

    useEffect(() => {
        if (!add) return;
        setResult(add(a, b));
    }, [a, add, b]);

    useEffect(() => {
        if (!asyncAdd) return;
        setLoading(true);
        asyncAdd(a, b).then((result) => {
            setLoading(false);
            setAsyncResult(result);
        });
    }, [a, asyncAdd, b]);

    useEffect(() => {
        asyncRequest?.()
            .then(JSON.parse)
            .then((response) => setIp(response.origin));
    }, [asyncRequest]);

    return (
        <>
            <h1>Basic Wasm</h1>
            <p>
                <Tag intent={TagIntent.Warning}>JavaScript</Tag> →{" "}
                <Tag intent={TagIntent.Error}>Rust</Tag> →{" "}
                <Tag intent={TagIntent.Warning}>JavaScript</Tag>
            </p>
            <p>
                Open the <Tag>devtools</Tag> to see nice logs in the <Tag>console</Tag> from{" "}
                <Tag intent={TagIntent.Error}>Rust</Tag>.
            </p>
            <h2>Synchronous</h2>
            <p>
                Although this example is not very useful, the math is done in WebAssembly,{" "}
                <Tag>synchronously</Tag> and in the <Tag>main thread</Tag>.
            </p>
            <p>⚠️ This way you may block the user interface rendering.</p>
            <NumberField
                label={
                    <>
                        A ・ <Tag intent={TagIntent.Warning}>Number</Tag> →{" "}
                        <Tag intent={TagIntent.Error}>i32</Tag>
                    </>
                }
                isRequired
                defaultValue={3}
                onChange={setA}
            />
            <br />
            <NumberField
                label={
                    <>
                        B ・ <Tag intent={TagIntent.Warning}>Number</Tag> →{" "}
                        <Tag intent={TagIntent.Error}>i32</Tag>
                    </>
                }
                isRequired
                defaultValue={2}
                onChange={setB}
            />
            <h3>Result</h3>
            <p className={style.result}>
                {a}&nbsp;+&nbsp;{b}&nbsp;=&nbsp;{result ?? <>&mdash;</>}
            </p>
            <p>
                <Tag intent={TagIntent.Comment}>
                    <Tag>NaN</Tag>, <Tag>undefined</Tag>, <Tag>null</Tag>, <Tag>strings</Tag> and{" "}
                    <Tag>floats</Tag> are casted into <em>integers</em>.
                </Tag>
            </p>
            <h2>
                Asynchronous: from <Tag intent={TagIntent.Warning}>JavaScript</Tag>
            </h2>
            <p>
                Thanks to the <Tag>wasm-bindgen-futures</Tag> crate you can connect Rust's{" "}
                <Tag intent={TagIntent.Error}>Futures</Tag> to JavaScript's{" "}
                <Tag intent={TagIntent.Warning}>Promises</Tag> and vice-versa.
            </p>
            <h3>Result</h3>
            <p className={style.result}>
                {a}&nbsp;+&nbsp;{b}&nbsp;+&nbsp;4&nbsp;=&nbsp;
                {loading ? (
                    <Tag intent={TagIntent.Error}>Loading...</Tag>
                ) : (
                    asyncResult ?? <>&mdash;</>
                )}
            </p>
            <p>
                <Tag intent={TagIntent.Comment}>
                    A Javascript function is called first from Wasm. It will add <Tag>4</Tag> to the
                    result only after faking a <Tag>2000ms</Tag> wait.
                </Tag>
            </p>
            <h2>
                Asynchronous: from <Tag intent={TagIntent.Error}>Rust</Tag>
            </h2>
            <p>
                One requests asynchronously your ip from <Tag intent={TagIntent.Error}>Wasm</Tag>{" "}
                via <Tag>https://httpbin.org/ip</Tag>.
            </p>
            <h3>Your IP</h3>
            <p className={style.result}>{ip ?? <>&mdash;</>}</p>
        </>
    );
};

export { Basic };
