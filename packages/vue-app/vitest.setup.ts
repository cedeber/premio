import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/vue";
import matchers from "@testing-library/jest-dom/matchers";

// extends Vitest's expect method with methods from jest-dom
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
});
