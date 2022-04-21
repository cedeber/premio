import { FC, useEffect, useState } from "react";
import init, { error, try_catch_rust, panic, async_error, async_try_catch_rust } from "wasm_async";
import { Button } from "../components/Button";

const ErrorPage: FC = () => {
	const [errorPanicMsg, setErrorPanicMsg] = useState<string>();
	const [errorMsg, setErrorMsg] = useState<string>();
	const [errorAsyncMsg, setErrorAsyncMsg] = useState<string>();
	const [errorJSMsg, setErrorJSMsg] = useState<string>();
	const [errorRejectMsg, setErrorRejectMsg] = useState<string>();

	useEffect(() => {
		void (async function () {
			await init();
		})();
	}, []);

	return (
		<div className="mb-10">
			<h2 className="mb-2 text-2xl">Regular Function Call</h2>
			<p className="mb-1">This calculation is done from WASM.</p>
			<h3 className="mb-2 mt-2 text-xl">Rust Panic</h3>
			<p className="mb-2 border-l-4 border-blue-500 bg-blue-100 px-3 py-2 text-blue-800">
				You can check the console to see the log of the WASM call because of
				'console_error_panic_hook'
			</p>
			<Button
				onClick={() => {
					try {
						panic();
					} catch (e) {
						setErrorPanicMsg((e as Error).message);
					}
				}}
				className="mr-3"
			>
				Rust/WASM panic → JS:Error
			</Button>
			<p className="mt-2 mb-2 border-l-4 border-red-500 bg-red-100 px-3 py-2 text-red-800">
				{errorPanicMsg ?? "..."}
			</p>
			<h3 className="mb-2 mt-2 text-xl">Synchronous</h3>
			<p className="mb-2">Catch error with JS: 'try/catch'.</p>
			<Button
				onClick={() => {
					try {
						error();
					} catch (e) {
						setErrorMsg(e as string);
					}
				}}
				className="mr-3"
			>
				Call WASM → Rust:Err(String)
			</Button>
			<p className="mt-2 mb-2 border-l-4 border-red-500 bg-red-100 px-3 py-2 text-red-800">
				{errorMsg ?? "..."}
			</p>
			<Button
				onClick={() => {
					try {
						try_catch_rust();
					} catch (e) {
						setErrorJSMsg((e as Error).message);
					}
				}}
				className="mr-3"
			>
				Call WASM → JS:ThrowErr(Error)
			</Button>
			<p className="mt-2 mb-2 border-l-4 border-red-500 bg-red-100 px-3 py-2 text-red-800">
				{errorJSMsg ?? "..."}
			</p>
			<h3 className="mb-2 mt-2 text-xl">Asynchronous</h3>
			<p className="mb-2">
				Catch error with '.catch()' because async in JS is a Promise.
				<br />
				Or you can use try/catch in an async JS function too of course.
			</p>
			<Button
				onClick={
					void (async () => {
						try {
							await async_error();
						} catch (e) {
							const err = JSON.parse(e as string);
							setErrorAsyncMsg(err.origin);
						}
					})
				}
				className="mr-3"
			>
				Call Async WASM → Rust:Err(Struct)
			</Button>
			<p className="mt-2 mb-2 border-l-4 border-red-500 bg-red-100 px-3 py-2 text-red-800">
				{errorAsyncMsg ?? "..."}
			</p>
			<Button
				onClick={() => {
					async_try_catch_rust().catch((e: Error) => setErrorRejectMsg(e.message));
				}}
				className="mr-3"
			>
				Call WASM → JS:Promise.reject(Error)
			</Button>
			<p className="mt-2 mb-2 border-l-4 border-red-500 bg-red-100 px-3 py-2 text-red-800">
				{errorRejectMsg ?? "..."}
			</p>
		</div>
	);
};

export { ErrorPage };