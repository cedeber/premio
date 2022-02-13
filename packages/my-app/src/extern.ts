const wasm_cb: Extern["wasm_cb"] = (str) => {
	console.log("(main thread)", str);
};

const async_wasm_cb: Extern["async_wasm_cb"] = async (str) =>
	new Promise((resolve) => {
		setTimeout(() => {
			console.log("(main thread + async)", str);
			resolve(4); // will add 4 to the next async_add() call
		}, 2000);
	});

const try_catch: Extern["try_catch"] = () => {
	throw new Error("This is a JS Error");
};

const async_try_catch: Extern["async_try_catch"] = async () => {
	throw new Error("This is an async JS Error");
};

export { wasm_cb, async_wasm_cb, try_catch, async_try_catch };
