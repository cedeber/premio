import { render } from "@testing-library/vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

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
