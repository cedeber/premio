<script setup lang="ts">
import CounterButton from "@/components/CounterButton.vue";
</script>

<template>
	<div class="about">
		<h1>This is an about page</h1>
		<CounterButton />
	</div>
</template>

<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>

<style scoped>
.about {
	flex-direction: column;
	gap: 10px;
	justify-content: center;
}
</style>
