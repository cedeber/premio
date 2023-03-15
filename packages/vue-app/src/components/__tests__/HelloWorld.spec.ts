import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { render } from "@testing-library/vue";

import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
	it("renders properly with @vue/test-utils", () => {
		const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
		expect(wrapper.text()).toContain("Hello Vitest");
	});

	it("renders properly with @testing-library/vue", () => {
		const { getByText } = render(HelloWorld, { props: { msg: "Hello Vitest" } });
		getByText("Hello Vitest");
	});
});
