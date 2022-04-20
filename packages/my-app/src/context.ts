import { createContext } from "react";

interface GlobalContext {
	swRegistration: ServiceWorkerRegistration | null;
	lang: string;
}

const GlobalContext = createContext<GlobalContext>({
	swRegistration: null,
	lang: "en",
});

export { GlobalContext };
