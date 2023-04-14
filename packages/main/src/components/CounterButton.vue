<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { BeakerIcon } from "@heroicons/vue/24/solid";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { count, doubleCount } = storeToRefs(store);
const { increment } = store;
</script>

<template>
	<button
		@click="increment"
		class="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto"
	>
		<BeakerIcon class="h-6 w-6 text-white" />
		{{ count }}
	</button>
	{{ doubleCount }}
</template>

<style scoped></style>
