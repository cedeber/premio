<script setup lang="ts">
import { reactive } from "vue";
import HelloWorld from "./HelloWorld.vue";

const state = reactive({
	msg: "Hello world",
});
</script>

<template>
	<Story>
		<Variant title="Default">
			<HelloWorld :msg="state.msg" />

			<template #controls>
				<HstText v-model="state.msg" title="Message" />
			</template>
		</Variant>
	</Story>
</template>

<docs lang="md">
# My documentation

Checkout this [cool video](https://www.youtube.com/watch?v=dQw4w9WgXcQ)!
</docs>
