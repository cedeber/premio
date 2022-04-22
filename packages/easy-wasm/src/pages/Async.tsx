import { FC, useEffect, useState } from "react";
import init, { async_fib, async_request } from "wasm_async";
import { Button } from "../components/Button";

const Async: FC = () => {
	const [addResult, setAddResult] = useState<number>();
	const [response, setResponse] = useState<{ origin: string }>();

	useEffect(() => {
		void (async function () {
			await init();
		})();
	}, []);

	return (
		<div className="mb-10">
			<h2 className="mb-2 text-2xl">Async Function Call</h2>
			<p className="mb-1">This calculation is done from WASM, asynchronously.</p>
			<p className="mb-2 border-l-4 border-blue-500 bg-blue-100 px-3 py-2 text-blue-800">
				You can check the console to see the log of the WASM call.
			</p>
			<Button
				onClick={() => {
					setAddResult(undefined);
					setTimeout(() => {
						async_fib(42).then(setAddResult).catch(console.error);
					}, 100);
				}}
				className="mr-3"
			>
				WASM:AsyncFib(42) + JS:Async(4)
			</Button>
			<p className="mt-2">Result: {addResult}</p>
			<h3 className="mb-2 mt-2 text-xl">Async Web Request from WASM</h3>
			<Button
				onClick={() => {
					setResponse(undefined);
					void async_request().then((response) => {
						setResponse(JSON.parse(response) as { origin: string });
					});
				}}
				className="mr-3"
			>
				Get IP — https://httpbin.org/ip
			</Button>
			<p className="mt-2">Result: {response?.origin}</p>
		</div>
	);
};

export { Async };
