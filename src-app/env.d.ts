/// <reference types="vite/client" />

interface Extern {
    wasm_cb?: (str: string) => void;
    async_wasm_cb?: (str: string) => Promise<number>;
    try_catch?: () => void;
    async_try_catch?: () => Promise<void>;
}

declare interface Window {
    __extern__: Extern;
}

declare interface Worker {
    __extern__: Extern;
}
