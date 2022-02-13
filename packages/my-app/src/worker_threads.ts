import init, { initThreadPool, sum, par_sum } from "wasm_sum";

async function main() {
	await init();
	await initThreadPool(navigator.hardwareConcurrency ?? 4);

	let start = new Date();
	let res = sum();
	let stop = new Date();

	console.log("single threaded", res, `${stop - start}ms`);

	start = new Date();
	let res2 = await par_sum();
	stop = new Date();

	console.log("multi threaded", res2, `${stop - start}ms`);
}

main();
