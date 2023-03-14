<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { count, doubleCount } = storeToRefs(store);
const { increment } = store;
</script>

<template>
	<button @click="increment">{{ count }}</button>
	{{ doubleCount }}
</template>

<style scoped></style>
