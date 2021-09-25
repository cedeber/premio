import React, { FC, useEffect, useRef, useState } from "react";
import MyWorker from "../worker?worker";
import init from "../../pkg";
import style from "./styles/default.module.scss";
import { Tag, TagIntent } from "../components/Tag";

const Worker: FC = () => {
    const worker = useRef(new MyWorker());
    const [workr, setWork] = useState<number>();

    useEffect(() => {
        worker.current.addEventListener("message", (event) => {
            setWork(event.data);
        });

        init().then(() => {
            // -- Wasm in the worker thread --
            worker.current.postMessage({ a: 3, b: 2 });
        });
    }, []);

    return (
        <>
            <h1>Worker</h1>
            <p>Loading Wasm from the Worker is very close to what one does from the main thread.</p>
            <p className={style.result}>
                3 + 2 + 4 = {workr ?? <Tag intent={TagIntent.Error}>Loading...</Tag>}
            </p>
        </>
    );
};

export { Worker };
