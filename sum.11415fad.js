(() => {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire2398"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire2398"] = parcelRequire;
}
parcelRequire.register("8ILa9", function(module, exports) {

$parcel$export(module.exports, "sum", () => $6597045933028731$export$8a63f25cc62965f1);
$parcel$export(module.exports, "par_sum", () => $6597045933028731$export$8abae8adb9580cf5);
$parcel$export(module.exports, "initThreadPool", () => $6597045933028731$export$850bf34b7f8eeae7);
$parcel$export(module.exports, "wbg_rayon_start_worker", () => $6597045933028731$export$ad6f10d028b2dbf6);
$parcel$export(module.exports, "default", () => $6597045933028731$export$2e2bcd8739ae039);

var $j6xqh = parcelRequire("j6xqh");
let $6597045933028731$var$wasm;
const $6597045933028731$var$heap = new Array(32).fill(undefined);
$6597045933028731$var$heap.push(undefined, null, true, false);
let $6597045933028731$var$heap_next = $6597045933028731$var$heap.length;
function $6597045933028731$var$addHeapObject(obj) {
    if ($6597045933028731$var$heap_next === $6597045933028731$var$heap.length) $6597045933028731$var$heap.push($6597045933028731$var$heap.length + 1);
    const idx = $6597045933028731$var$heap_next;
    $6597045933028731$var$heap_next = $6597045933028731$var$heap[idx];
    $6597045933028731$var$heap[idx] = obj;
    return idx;
}
function $6597045933028731$var$getObject(idx) {
    return $6597045933028731$var$heap[idx];
}
function $6597045933028731$var$dropObject(idx) {
    if (idx < 36) return;
    $6597045933028731$var$heap[idx] = $6597045933028731$var$heap_next;
    $6597045933028731$var$heap_next = idx;
}
function $6597045933028731$var$takeObject(idx) {
    const ret = $6597045933028731$var$getObject(idx);
    $6597045933028731$var$dropObject(idx);
    return ret;
}
let $6597045933028731$var$WASM_VECTOR_LEN = 0;
let $6597045933028731$var$cachegetUint8Memory0 = null;
function $6597045933028731$var$getUint8Memory0() {
    if ($6597045933028731$var$cachegetUint8Memory0 === null || $6597045933028731$var$cachegetUint8Memory0.buffer !== $6597045933028731$var$wasm.memory.buffer) $6597045933028731$var$cachegetUint8Memory0 = new Uint8Array($6597045933028731$var$wasm.memory.buffer);
    return $6597045933028731$var$cachegetUint8Memory0;
}
const $6597045933028731$var$cachedTextEncoder = new TextEncoder('utf-8');
const $6597045933028731$var$encodeString = function(arg, view) {
    const buf = $6597045933028731$var$cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
};
function $6597045933028731$var$passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = $6597045933028731$var$cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        $6597045933028731$var$getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        $6597045933028731$var$WASM_VECTOR_LEN = buf.length;
        return ptr;
    }
    let len = arg.length;
    let ptr = malloc(len);
    const mem = $6597045933028731$var$getUint8Memory0();
    let offset = 0;
    for(; offset < len; offset++){
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) arg = arg.slice(offset);
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = $6597045933028731$var$getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = $6597045933028731$var$encodeString(arg, view);
        offset += ret.written;
    }
    $6597045933028731$var$WASM_VECTOR_LEN = offset;
    return ptr;
}
function $6597045933028731$var$isLikeNone(x) {
    return x === undefined || x === null;
}
let $6597045933028731$var$cachegetInt32Memory0 = null;
function $6597045933028731$var$getInt32Memory0() {
    if ($6597045933028731$var$cachegetInt32Memory0 === null || $6597045933028731$var$cachegetInt32Memory0.buffer !== $6597045933028731$var$wasm.memory.buffer) $6597045933028731$var$cachegetInt32Memory0 = new Int32Array($6597045933028731$var$wasm.memory.buffer);
    return $6597045933028731$var$cachegetInt32Memory0;
}
const $6597045933028731$var$cachedTextDecoder = new TextDecoder('utf-8', {
    ignoreBOM: true,
    fatal: true
});
$6597045933028731$var$cachedTextDecoder.decode();
function $6597045933028731$var$getStringFromWasm0(ptr, len) {
    return $6597045933028731$var$cachedTextDecoder.decode($6597045933028731$var$getUint8Memory0().slice(ptr, ptr + len));
}
function $6597045933028731$var$makeMutClosure(arg0, arg1, dtor, f) {
    const state = {
        a: arg0,
        b: arg1,
        cnt: 1,
        dtor: dtor
    };
    const real = (...args)=>{
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally{
            if (--state.cnt === 0) $6597045933028731$var$wasm.__wbindgen_export_3.get(state.dtor)(a, state.b);
            else state.a = a;
        }
    };
    real.original = state;
    return real;
}
function $6597045933028731$var$__wbg_adapter_22(arg0, arg1, arg2) {
    $6597045933028731$var$wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5bd577e5df40d5f3(arg0, arg1, $6597045933028731$var$addHeapObject(arg2));
}
function $6597045933028731$var$__wbg_adapter_25(arg0, arg1, arg2) {
    $6597045933028731$var$wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4f5549b0b9a44a46(arg0, arg1, $6597045933028731$var$addHeapObject(arg2));
}
function $6597045933028731$export$8d1dda558c39915a() {
    $6597045933028731$var$wasm.main_wasm();
}
function $6597045933028731$export$8a63f25cc62965f1() {
    const ret = $6597045933028731$var$wasm.sum();
    return ret >>> 0;
}
function $6597045933028731$export$8abae8adb9580cf5() {
    const ret = $6597045933028731$var$wasm.par_sum();
    return $6597045933028731$var$takeObject(ret);
}
function $6597045933028731$var$handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        $6597045933028731$var$wasm.__wbindgen_exn_store($6597045933028731$var$addHeapObject(e));
    }
}
function $6597045933028731$var$__wbg_adapter_57(arg0, arg1, arg2, arg3) {
    $6597045933028731$var$wasm.wasm_bindgen__convert__closures__invoke2_mut__he2e4a996211ab00a(arg0, arg1, $6597045933028731$var$addHeapObject(arg2), $6597045933028731$var$addHeapObject(arg3));
}
function $6597045933028731$export$850bf34b7f8eeae7(num_threads) {
    const ret = $6597045933028731$var$wasm.initThreadPool(num_threads);
    return $6597045933028731$var$takeObject(ret);
}
function $6597045933028731$export$ad6f10d028b2dbf6(receiver) {
    $6597045933028731$var$wasm.wbg_rayon_start_worker(receiver);
}
class $6597045933028731$export$b4e714242155659 {
    static __wrap(ptr) {
        const obj = Object.create($6597045933028731$export$b4e714242155659.prototype);
        obj.ptr = ptr;
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        $6597045933028731$var$wasm.__wbg_wbg_rayon_poolbuilder_free(ptr);
    }
    /**
    * @returns {number}
    */ numThreads() {
        const ret = $6597045933028731$var$wasm.wbg_rayon_poolbuilder_numThreads(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */ receiver() {
        const ret = $6597045933028731$var$wasm.wbg_rayon_poolbuilder_receiver(this.ptr);
        return ret;
    }
    /**
    */ build() {
        $6597045933028731$var$wasm.wbg_rayon_poolbuilder_build(this.ptr);
    }
}
async function $6597045933028731$var$load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') try {
            return await WebAssembly.instantiateStreaming(module, imports);
        } catch (e) {
            if (module.headers.get('Content-Type') != 'application/wasm') console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
            else throw e;
        }
        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);
        if (instance instanceof WebAssembly.Instance) return {
            instance: instance,
            module: module
        };
        else return instance;
    }
}

async function $6597045933028731$var$init(input, maybe_memory) {
    if (typeof input === 'undefined') input = new URL((parcelRequire("01yN4")));
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        $6597045933028731$var$takeObject(arg0);
    };
    imports.wbg.__wbg_waitAsync_5907fae24f9aa09a = function() {
        const ret = Atomics.waitAsync;
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = $6597045933028731$var$getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbg_waitAsync_67c84a1c78e5fa4e = function(arg0, arg1, arg2) {
        const ret = Atomics.waitAsync($6597045933028731$var$getObject(arg0), arg1, arg2);
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_async_b3aed9fce0e0b073 = function(arg0) {
        const ret = $6597045933028731$var$getObject(arg0).async;
        return ret;
    };
    imports.wbg.__wbg_value_14baa9a2802e5311 = function(arg0) {
        const ret = $6597045933028731$var$getObject(arg0).value;
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = $6597045933028731$var$getObject(arg0);
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = $6597045933028731$var$takeObject(arg0).original;
        if ((obj.cnt--) == 1) {
            obj.a = 0;
            return true;
        }
        const ret = false;
        return ret;
    };
    imports.wbg.__wbg_data_9ccfa9ae4eb71e78 = function(arg0) {
        const ret = $6597045933028731$var$getObject(arg0).data;
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_setonmessage_c5d351beda541fb3 = function(arg0, arg1) {
        $6597045933028731$var$getObject(arg0).onmessage = $6597045933028731$var$getObject(arg1);
    };
    imports.wbg.__wbg_new_0cc1b88a04ca7dfe = function() {
        return $6597045933028731$var$handleError(function(arg0, arg1) {
            const ret = new Worker($6597045933028731$var$getStringFromWasm0(arg0, arg1));
            return $6597045933028731$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_postMessage_d1c36bea184c18f2 = function() {
        return $6597045933028731$var$handleError(function(arg0, arg1) {
            $6597045933028731$var$getObject(arg0).postMessage($6597045933028731$var$getObject(arg1));
        }, arguments);
    };
    imports.wbg.__wbg_new_693216e109162396 = function() {
        const ret = new Error();
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_0ddaca5d1abfb52f = function(arg0, arg1) {
        const ret = $6597045933028731$var$getObject(arg1).stack;
        const ptr0 = $6597045933028731$var$passStringToWasm0(ret, $6597045933028731$var$wasm.__wbindgen_malloc, $6597045933028731$var$wasm.__wbindgen_realloc);
        const len0 = $6597045933028731$var$WASM_VECTOR_LEN;
        $6597045933028731$var$getInt32Memory0()[arg0 / 4 + 1] = len0;
        $6597045933028731$var$getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_error_09919627ac0992f5 = function(arg0, arg1) {
        try {
            console.error($6597045933028731$var$getStringFromWasm0(arg0, arg1));
        } finally{
            $6597045933028731$var$wasm.__wbindgen_free(arg0, arg1);
        }
    };
    imports.wbg.__wbg_encodeURIComponent_7a49218d9d8a2265 = function(arg0, arg1) {
        const ret = encodeURIComponent($6597045933028731$var$getStringFromWasm0(arg0, arg1));
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_of_917b7a7a78de4453 = function(arg0, arg1, arg2) {
        const ret = Array.of($6597045933028731$var$getObject(arg0), $6597045933028731$var$getObject(arg1), $6597045933028731$var$getObject(arg2));
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_call_3ed288a247f13ea5 = function() {
        return $6597045933028731$var$handleError(function(arg0, arg1, arg2) {
            const ret = $6597045933028731$var$getObject(arg0).call($6597045933028731$var$getObject(arg1), $6597045933028731$var$getObject(arg2));
            return $6597045933028731$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_new_37705eed627d5ed9 = function(arg01, arg11) {
        try {
            var state0 = {
                a: arg01,
                b: arg11
            };
            var cb0 = (arg0, arg1)=>{
                const a = state0.a;
                state0.a = 0;
                try {
                    return $6597045933028731$var$__wbg_adapter_57(a, state0.b, arg0, arg1);
                } finally{
                    state0.a = a;
                }
            };
            const ret = new Promise(cb0);
            return $6597045933028731$var$addHeapObject(ret);
        } finally{
            state0.a = state0.b = 0;
        }
    };
    imports.wbg.__wbg_resolve_a9a87bdd64e9e62c = function(arg0) {
        const ret = Promise.resolve($6597045933028731$var$getObject(arg0));
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_then_ce526c837d07b68f = function(arg0, arg1) {
        const ret = $6597045933028731$var$getObject(arg0).then($6597045933028731$var$getObject(arg1));
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_7af23f65f6c64548 = function(arg0) {
        const ret = $6597045933028731$var$getObject(arg0).buffer;
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_new_7fb6d86dfb4bf8c1 = function(arg0) {
        const ret = new Int32Array($6597045933028731$var$getObject(arg0));
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = $6597045933028731$var$getObject(arg1);
        const ret = typeof obj === 'string' ? obj : undefined;
        var ptr0 = $6597045933028731$var$isLikeNone(ret) ? 0 : $6597045933028731$var$passStringToWasm0(ret, $6597045933028731$var$wasm.__wbindgen_malloc, $6597045933028731$var$wasm.__wbindgen_realloc);
        var len0 = $6597045933028731$var$WASM_VECTOR_LEN;
        $6597045933028731$var$getInt32Memory0()[arg0 / 4 + 1] = len0;
        $6597045933028731$var$getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error($6597045933028731$var$getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_rethrow = function(arg0) {
        throw $6597045933028731$var$takeObject(arg0);
    };
    imports.wbg.__wbindgen_module = function() {
        const ret = $6597045933028731$var$init.__wbindgen_wasm_module;
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = $6597045933028731$var$wasm.memory;
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_startWorkers_04f63eca19916b8f = function(arg0, arg1, arg2) {
        const ret = $j6xqh.startWorkers($6597045933028731$var$takeObject(arg0), $6597045933028731$var$takeObject(arg1), $6597045933028731$export$b4e714242155659.__wrap(arg2));
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper113 = function(arg0, arg1, arg2) {
        const ret = $6597045933028731$var$makeMutClosure(arg0, arg1, 31, $6597045933028731$var$__wbg_adapter_22);
        return $6597045933028731$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper114 = function(arg0, arg1, arg2) {
        const ret = $6597045933028731$var$makeMutClosure(arg0, arg1, 29, $6597045933028731$var$__wbg_adapter_25);
        return $6597045933028731$var$addHeapObject(ret);
    };
    if (typeof input === 'string' || typeof Request === 'function' && input instanceof Request || typeof URL === 'function' && input instanceof URL) input = fetch(input);
    imports.wbg.memory = maybe_memory || new WebAssembly.Memory({
        initial: 18,
        maximum: 16384,
        shared: true
    });
    const { instance: instance , module: module  } = await $6597045933028731$var$load(await input, imports);
    $6597045933028731$var$wasm = instance.exports;
    $6597045933028731$var$init.__wbindgen_wasm_module = module;
    $6597045933028731$var$wasm.__wbindgen_start();
    return $6597045933028731$var$wasm;
}
var $6597045933028731$export$2e2bcd8739ae039 = $6597045933028731$var$init;

});
parcelRequire.register("j6xqh", function(module, exports) {

$parcel$export(module.exports, "startWorkers", () => $de8880ecb86e007f$export$6a13f9f53ddacde8);
/**
 * Copyright 2021 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Note: we use `wasm_bindgen_worker_`-prefixed message types to make sure
// we can handle bundling into other files, which might happen to have their
// own `postMessage`/`onmessage` communication channels.
//
// If we didn't take that into the account, we could send much simpler signals
// like just `0` or whatever, but the code would be less resilient.
function $de8880ecb86e007f$var$waitForMsgType(target, type) {
    return new Promise((resolve)=>{
        target.addEventListener('message', function onMsg({ data: data  }) {
            if (data == null || data.type !== type) return;
            target.removeEventListener('message', onMsg);
            resolve(data);
        });
    });
}

$de8880ecb86e007f$var$waitForMsgType(self, 'wasm_bindgen_worker_init').then(async (data)=>{
    // # Note 1
    // Our JS should have been generated in
    // `[out-dir]/snippets/wasm-bindgen-rayon-[hash]/workerHelpers.js`,
    // resolve the main module via `../../..`.
    //
    // This might need updating if the generated structure changes on wasm-bindgen
    // side ever in the future, but works well with bundlers today. The whole
    // point of this crate, after all, is to abstract away unstable features
    // and temporary bugs so that you don't need to deal with them in your code.
    //
    // # Note 2
    // This could be a regular import, but then some bundlers complain about
    // circular deps.
    //
    // Dynamic import could be cheap if this file was inlined into the parent,
    // which would require us just using `../../..` in `new Worker` below,
    // but that doesn't work because wasm-pack unconditionally adds
    // "sideEffects":false (see below).
    //
    // OTOH, even though it can't be inlined, it should be still reasonably
    // cheap since the requested file is already in cache (it was loaded by
    // the main thread).
    const pkg = await Promise.resolve((parcelRequire("8ILa9")));
    await pkg.default(data.module, data.memory);
    postMessage({
        type: 'wasm_bindgen_worker_ready'
    });
    pkg.wbg_rayon_start_worker(data.receiver);
});
// Note: this is never used, but necessary to prevent a bug in Firefox
// (https://bugzilla.mozilla.org/show_bug.cgi?id=1702191) where it collects
// Web Workers that have a shared WebAssembly memory with the main thread,
// but are not explicitly rooted via a `Worker` instance.
//
// By storing them in a variable, we can keep `Worker` objects around and
// prevent them from getting GC-d.
let $de8880ecb86e007f$var$_workers;

async function $de8880ecb86e007f$export$6a13f9f53ddacde8(module, memory, builder) {
    const workerInit = {
        type: 'wasm_bindgen_worker_init',
        module: module,
        memory: memory,
        receiver: builder.receiver()
    };
    $de8880ecb86e007f$var$_workers = await Promise.all(Array.from({
        length: builder.numThreads()
    }, async ()=>{
        // Self-spawn into a new Worker.
        //
        // TODO: while `new URL('...', import.meta.url) becomes a semi-standard
        // way to get asset URLs relative to the module across various bundlers
        // and browser, ideally we should switch to `import.meta.resolve`
        // once it becomes a standard.
        //
        // Note: we could use `../../..` as the URL here to inline workerHelpers.js
        // into the parent entry instead of creating another split point -
        // this would be preferable from optimization perspective -
        // however, Webpack then eliminates all message handler code
        // because wasm-pack produces "sideEffects":false in package.json
        // unconditionally.
        //
        // The only way to work around that is to have side effect code
        // in an entry point such as Worker file itself.
        const worker = new Worker((parcelRequire("6eHCO")));
        worker.postMessage(workerInit);
        await $de8880ecb86e007f$var$waitForMsgType(worker, 'wasm_bindgen_worker_ready');
        return worker;
    }));
    builder.build();
}

});
parcelRequire.register("6eHCO", function(module, exports) {

var $7YDMF = parcelRequire("7YDMF");

var $8IoA4 = parcelRequire("8IoA4");

let $48a5e3e81d56eb68$var$url = $8IoA4.getBundleURL('hj8eV') + (parcelRequire("bGWGM")).resolve("8ExQG");
module.exports = $7YDMF($48a5e3e81d56eb68$var$url, $8IoA4.getOrigin($48a5e3e81d56eb68$var$url), false);

});
parcelRequire.register("7YDMF", function(module, exports) {
"use strict";
module.exports = function(workerUrl, origin, isESM) {
    if (origin === self.location.origin) // If the worker bundle's url is on the same origin as the document,
    // use the worker bundle's own url.
    return workerUrl;
    else {
        // Otherwise, create a blob URL which loads the worker bundle with `importScripts`.
        var source = isESM ? 'import ' + JSON.stringify(workerUrl) + ';' : 'importScripts(' + JSON.stringify(workerUrl) + ');';
        return URL.createObjectURL(new Blob([
            source
        ], {
            type: 'application/javascript'
        }));
    }
};

});

parcelRequire.register("8IoA4", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", () => $01a32f7bf710fe19$export$bdfd709ae4826697, (v) => $01a32f7bf710fe19$export$bdfd709ae4826697 = v);
$parcel$export(module.exports, "getOrigin", () => $01a32f7bf710fe19$export$5a759dc7a1cfb72a, (v) => $01a32f7bf710fe19$export$5a759dc7a1cfb72a = v);
var $01a32f7bf710fe19$export$bdfd709ae4826697;
var $01a32f7bf710fe19$export$c9e73fbda7da57b6;
var $01a32f7bf710fe19$export$5a759dc7a1cfb72a;
"use strict";
var $01a32f7bf710fe19$var$bundleURL = {};
function $01a32f7bf710fe19$var$getBundleURLCached(id) {
    var value = $01a32f7bf710fe19$var$bundleURL[id];
    if (!value) {
        value = $01a32f7bf710fe19$var$getBundleURL();
        $01a32f7bf710fe19$var$bundleURL[id] = value;
    }
    return value;
}
function $01a32f7bf710fe19$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $01a32f7bf710fe19$var$getBaseURL(matches[2]);
    }
    return '/';
}
function $01a32f7bf710fe19$var$getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $01a32f7bf710fe19$var$getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
$01a32f7bf710fe19$export$bdfd709ae4826697 = $01a32f7bf710fe19$var$getBundleURLCached;
$01a32f7bf710fe19$export$c9e73fbda7da57b6 = $01a32f7bf710fe19$var$getBaseURL;
$01a32f7bf710fe19$export$5a759dc7a1cfb72a = $01a32f7bf710fe19$var$getOrigin;

});

parcelRequire.register("bGWGM", function(module, exports) {

$parcel$export(module.exports, "register", () => $8831245f07480bee$export$6503ec6e8aabbaf, (v) => $8831245f07480bee$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $8831245f07480bee$export$f7ad0328861e2f03, (v) => $8831245f07480bee$export$f7ad0328861e2f03 = v);
var $8831245f07480bee$export$6503ec6e8aabbaf;
var $8831245f07480bee$export$f7ad0328861e2f03;
"use strict";
var $8831245f07480bee$var$mapping = {};
function $8831245f07480bee$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$8831245f07480bee$var$mapping[keys[i]] = pairs[keys[i]];
}
function $8831245f07480bee$var$resolve(id) {
    var resolved = $8831245f07480bee$var$mapping[id];
    if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
    return resolved;
}
$8831245f07480bee$export$6503ec6e8aabbaf = $8831245f07480bee$var$register;
$8831245f07480bee$export$f7ad0328861e2f03 = $8831245f07480bee$var$resolve;

});



parcelRequire.register("01yN4", function(module, exports) {


module.exports = (parcelRequire("8IoA4")).getBundleURL('hj8eV') + (parcelRequire("bGWGM")).resolve("7Bnpb");

});



parcelRequire("8ILa9");
})();
//# sourceMappingURL=sum.11415fad.js.map
