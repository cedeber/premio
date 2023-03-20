import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/vue";
import { afterEach, expect } from "vitest";

// extends Vitest's expect method with methods from jest-dom
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
});
