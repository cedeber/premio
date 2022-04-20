import { FC, useEffect, useRef, useState } from "react";
import init, { fib } from "wasm_async";
import { Button } from "../components/Button";
import { fibonacci } from "../utils";

const Regular: FC = () => {
	const [addResult, setAddResult] = useState<number>();
	const [addResultWorker, setAddResultWorker] = useState<number>();
	const [perf1, setPerf1] = useState<number>();
	const [perf2, setPerf2] = useState<number>();
	const [perf3, setPerf3] = useState<number>();
	const t3 = useRef<number>();
	const worker = useRef<Worker>();

	useEffect(() => {
		(async function () {
			await init();
		})();

		const _worker = new Worker(new URL("../worker.ts", import.meta.url), { type: "module" });
		_worker.onmessage = (event) => {
			const t4 = performance.now();
			setPerf3(t4 - (t3.current ?? t4));
			setAddResultWorker(event.data);
		};
		worker.current = _worker;
	}, []);

	return (
		<div className="mb-10">
			<h2 className="text-2xl mb-2">Regular Function Call</h2>
			<p className="mb-1">This calculation is done from WASM.</p>
			<p className="mb-2 bg-blue-100 px-3 py-2 border-l-4 border-blue-500 text-blue-800">
				You can check the console to see the log of the WASM call.
			</p>
			<Button
				onClick={() => {
					setAddResult(undefined);
					setPerf1(undefined);
					setPerf2(undefined);

					setTimeout(() => {
						const t0 = performance.now();
						const val1 = fibonacci(40);
						const t1 = performance.now();
						const val2 = fib(40);
						const t2 = performance.now();

						setPerf1(t1 - t0);
						setPerf2(t2 - t1);
						setAddResult(val1 + val2);
					}, 100);
				}}
				className="mr-3"
			>
				JS:Fib(40) + WASM:Fib(40)
			</Button>
			<p className="mt-2">Result: {addResult}</p>
			<p>
				Performance 〉JavaScript → {perf1?.toFixed(0)}ms ⎮ WebAssembly → {perf2?.toFixed(0)}
				ms
			</p>
			<h3 className="text-xl mb-2 mt-2">In a Worker</h3>
			<Button
				onClick={() => {
					setAddResultWorker(undefined);
					setPerf3(undefined);
					t3.current = performance.now();
					worker.current?.postMessage({ a: 40 });
				}}
				className="mr-3"
			>
				Worker:Fib(40)
			</Button>
			<p className="mt-2">Result: {addResultWorker}</p>
			<p>Performance 〉Worker + WebAssembly → {perf3?.toFixed(0)}ms</p>
		</div>
	);
};

export { Regular };
