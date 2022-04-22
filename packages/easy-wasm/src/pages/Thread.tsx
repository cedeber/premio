import { FC, useEffect, useRef, useState } from "react";
import { simd, threads } from "wasm-feature-detect";
import { Button } from "../components/Button";
import { CheckIcon, XIcon } from "@heroicons/react/outline";

const Thread: FC = () => {
	const [hasThreads, setThreads] = useState(false);
	const [hasSimd, setSimd] = useState(false);
	const t0 = useRef<number>();
	const worker = useRef<Worker>();
	const [perfMono, setPerfMono] = useState<number>();
	const [perfMulti, setPerfMulti] = useState<number>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		async function sw() {
			// no SharedArrayBuffer -> no Threads
			const hasThreads = await threads();
			const hasSimd = await simd();

			setThreads(hasThreads);
			setSimd(hasSimd);

			const _worker = new Worker(new URL("../worker_threads.ts", import.meta.url), {
				type: "module",
			});
			_worker.onmessage = (
				event: MessageEvent<{ result: number; multi: boolean; error: string }>,
			) => {
				if (event.data?.error) {
					setError(event.data.error);
				} else {
					const t1 = performance.now();
					if (event.data?.multi) {
						setPerfMulti(t1 - (t0.current ?? t1));
					} else {
						setPerfMono(t1 - (t0.current ?? t1));
					}
				}
			};
			worker.current = _worker;
		}

		void sw();
	}, []);

	return (
		<div className="mb-10">
			<h2 className="mb-2 text-2xl">Threads</h2>
			<p>
				SharedArrayBuffer:{" "}
				{window.SharedArrayBuffer ? (
					<CheckIcon className="inline-block h-5 w-5 align-text-top text-emerald-700" />
				) : (
					<XIcon className="inline-block h-5 w-5 align-text-top text-red-600" />
				)}
			</p>
			<p>
				Threads:{" "}
				{hasThreads ? (
					<CheckIcon className="inline-block h-5 w-5 align-text-top text-emerald-700" />
				) : (
					<XIcon className="inline-block h-5 w-5 align-text-top text-red-600" />
				)}
				{navigator.hardwareConcurrency ?? 4}
			</p>
			<p>
				SIMD:{" "}
				{hasSimd ? (
					<CheckIcon className="inline-block h-5 w-5 align-text-top text-emerald-700" />
				) : (
					<XIcon className="inline-block h-5 w-5 align-text-top text-red-600" />
				)}
			</p>
			{error && (
				<p className="mb-2 border-l-4 border-red-500 bg-red-100 px-3 py-2 text-red-800">
					{error}
				</p>
			)}
			<Button
				onClick={() => {
					setError(undefined);
					setPerfMono(undefined);
					t0.current = performance.now();
					worker.current?.postMessage(false);
				}}
				className="mr-3 mt-4"
			>
				Mono threaded: Fib([1..=40])
			</Button>
			<p className="mt-2 mb-2">Performance 〉Mono threaded → {perfMono?.toFixed(0)}ms</p>
			<Button
				onClick={() => {
					setError(undefined);
					setPerfMulti(undefined);
					t0.current = performance.now();
					worker.current?.postMessage(true);
				}}
				className="mr-3"
			>
				Multi threaded: Fib([1..=40])
			</Button>
			<p className="mt-2">Performance 〉Multi threaded → {perfMulti?.toFixed(0)}ms</p>
			{error}
		</div>
	);
};

export { Thread };
