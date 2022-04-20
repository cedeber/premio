interface Extern {
	add_cb?: (result: number) => void;
	async_add_cb?: (str: string) => Promise<number>;
	try_catch?: () => void;
	async_try_catch?: () => Promise<void>;
}

declare interface Window {
	__extern__: Extern;
}

declare interface Worker {
	__extern__: Extern;
}
