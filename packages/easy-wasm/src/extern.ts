const add_cb: Extern["add_cb"] = (result) => {
	console.log("The result is", result);
};

const async_add_cb: Extern["async_add_cb"] = async () =>
	new Promise((resolve) => {
		console.log("Fake a long calculation: result will be 4 in 2s");
		setTimeout(() => {
			resolve(4); // will add 4 to the next async_add() call
		}, 2000);
	});

const try_catch: Extern["try_catch"] = () => {
	throw new Error("This is a JS Error");
};

// eslint-disable-next-line @typescript-eslint/require-await
const async_try_catch: Extern["async_try_catch"] = async () => {
	throw new Error("This is an async JS Error");
};

export { add_cb, async_add_cb, try_catch, async_try_catch };
