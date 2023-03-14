<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import MyWorker from "@/workers/worker?worker";
import init, { async_fib } from "@/wasm/async/async";
import * as extern from "@/utils/extern";
import { simd, threads } from "wasm-feature-detect";

const result_worker = ref("loading...");
const result_async_wasm = ref("loading...");
const worker = new MyWorker();

worker.onmessage = (event: MessageEvent<number>) => {
	result_worker.value = String(event.data);
};

onBeforeMount(() => {
	self.__extern__ = extern;
});

onMounted(async () => {
	// If both are true it supports multithreaded WASM.
	console.log("threads?", await threads());
	console.log("simd?", await simd());

	await init();
	worker.postMessage({ a: 40 });
	result_async_wasm.value = String(await async_fib(40));
});
</script>

<template>
	<p>Fib 40 from Worker + WASM = {{ result_worker }}</p>
	<p>Fib 40 from Async WASM = {{ result_async_wasm }}</p>
</template>

<style scoped></style>
