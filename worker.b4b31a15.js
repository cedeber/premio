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

var $8487cd92be1d084c$exports = {};

(parcelRequire("bGWGM")).register(JSON.parse("{\"lXWX7\":\"worker.b4b31a15.js\",\"3csu7\":\"async_bg.be75bbb2.wasm\"}"));

var $66116edf06513a85$exports = {};
let $8713f321c72ab025$var$wasm;
const $8713f321c72ab025$var$heap = new Array(32).fill(undefined);
$8713f321c72ab025$var$heap.push(undefined, null, true, false);
function $8713f321c72ab025$var$getObject(idx) {
    return $8713f321c72ab025$var$heap[idx];
}
let $8713f321c72ab025$var$heap_next = $8713f321c72ab025$var$heap.length;
function $8713f321c72ab025$var$dropObject(idx) {
    if (idx < 36) return;
    $8713f321c72ab025$var$heap[idx] = $8713f321c72ab025$var$heap_next;
    $8713f321c72ab025$var$heap_next = idx;
}
function $8713f321c72ab025$var$takeObject(idx) {
    const ret = $8713f321c72ab025$var$getObject(idx);
    $8713f321c72ab025$var$dropObject(idx);
    return ret;
}
const $8713f321c72ab025$var$cachedTextDecoder = new TextDecoder('utf-8', {
    ignoreBOM: true,
    fatal: true
});
$8713f321c72ab025$var$cachedTextDecoder.decode();
let $8713f321c72ab025$var$cachegetUint8Memory0 = null;
function $8713f321c72ab025$var$getUint8Memory0() {
    if ($8713f321c72ab025$var$cachegetUint8Memory0 === null || $8713f321c72ab025$var$cachegetUint8Memory0.buffer !== $8713f321c72ab025$var$wasm.memory.buffer) $8713f321c72ab025$var$cachegetUint8Memory0 = new Uint8Array($8713f321c72ab025$var$wasm.memory.buffer);
    return $8713f321c72ab025$var$cachegetUint8Memory0;
}
function $8713f321c72ab025$var$getStringFromWasm0(ptr, len) {
    return $8713f321c72ab025$var$cachedTextDecoder.decode($8713f321c72ab025$var$getUint8Memory0().subarray(ptr, ptr + len));
}
function $8713f321c72ab025$var$addHeapObject(obj) {
    if ($8713f321c72ab025$var$heap_next === $8713f321c72ab025$var$heap.length) $8713f321c72ab025$var$heap.push($8713f321c72ab025$var$heap.length + 1);
    const idx = $8713f321c72ab025$var$heap_next;
    $8713f321c72ab025$var$heap_next = $8713f321c72ab025$var$heap[idx];
    $8713f321c72ab025$var$heap[idx] = obj;
    return idx;
}
let $8713f321c72ab025$var$WASM_VECTOR_LEN = 0;
const $8713f321c72ab025$var$cachedTextEncoder = new TextEncoder('utf-8');
const $8713f321c72ab025$var$encodeString = typeof $8713f321c72ab025$var$cachedTextEncoder.encodeInto === 'function' ? function(arg, view) {
    return $8713f321c72ab025$var$cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
    const buf = $8713f321c72ab025$var$cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
};
function $8713f321c72ab025$var$passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = $8713f321c72ab025$var$cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        $8713f321c72ab025$var$getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        $8713f321c72ab025$var$WASM_VECTOR_LEN = buf.length;
        return ptr;
    }
    let len = arg.length;
    let ptr = malloc(len);
    const mem = $8713f321c72ab025$var$getUint8Memory0();
    let offset = 0;
    for(; offset < len; offset++){
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) arg = arg.slice(offset);
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = $8713f321c72ab025$var$getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = $8713f321c72ab025$var$encodeString(arg, view);
        offset += ret.written;
    }
    $8713f321c72ab025$var$WASM_VECTOR_LEN = offset;
    return ptr;
}
function $8713f321c72ab025$var$isLikeNone(x) {
    return x === undefined || x === null;
}
let $8713f321c72ab025$var$cachegetInt32Memory0 = null;
function $8713f321c72ab025$var$getInt32Memory0() {
    if ($8713f321c72ab025$var$cachegetInt32Memory0 === null || $8713f321c72ab025$var$cachegetInt32Memory0.buffer !== $8713f321c72ab025$var$wasm.memory.buffer) $8713f321c72ab025$var$cachegetInt32Memory0 = new Int32Array($8713f321c72ab025$var$wasm.memory.buffer);
    return $8713f321c72ab025$var$cachegetInt32Memory0;
}
let $8713f321c72ab025$var$cachegetFloat64Memory0 = null;
function $8713f321c72ab025$var$getFloat64Memory0() {
    if ($8713f321c72ab025$var$cachegetFloat64Memory0 === null || $8713f321c72ab025$var$cachegetFloat64Memory0.buffer !== $8713f321c72ab025$var$wasm.memory.buffer) $8713f321c72ab025$var$cachegetFloat64Memory0 = new Float64Array($8713f321c72ab025$var$wasm.memory.buffer);
    return $8713f321c72ab025$var$cachegetFloat64Memory0;
}
function $8713f321c72ab025$var$debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) return `${val}`;
    if (type == 'string') return `"${val}"`;
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) return 'Symbol';
        else return `Symbol(${description})`;
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) return `Function(${name})`;
        else return 'Function';
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) debug += $8713f321c72ab025$var$debugString(val[0]);
        for(let i = 1; i < length; i++)debug += ', ' + $8713f321c72ab025$var$debugString(val[i]);
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) className = builtInMatches[1];
    else // Failed to match the standard '[object ClassName]'
    return toString.call(val);
    if (className == 'Object') // we're a user defined class or Object
    // JSON.stringify avoids problems with cycles, and is generally much
    // easier than looping through ownProperties of `val`.
    try {
        return 'Object(' + JSON.stringify(val) + ')';
    } catch (_) {
        return 'Object';
    }
    // errors
    if (val instanceof Error) return `${val.name}: ${val.message}\n${val.stack}`;
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
function $8713f321c72ab025$var$makeMutClosure(arg0, arg1, dtor, f) {
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
            if (--state.cnt === 0) $8713f321c72ab025$var$wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
            else state.a = a;
        }
    };
    real.original = state;
    return real;
}
function $8713f321c72ab025$var$__wbg_adapter_28(arg0, arg1, arg2) {
    $8713f321c72ab025$var$wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9829ff399562fc55(arg0, arg1, $8713f321c72ab025$var$addHeapObject(arg2));
}
function $8713f321c72ab025$export$8d1dda558c39915a() {
    $8713f321c72ab025$var$wasm.main_wasm();
}
function $8713f321c72ab025$var$handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        $8713f321c72ab025$var$wasm.__wbindgen_exn_store($8713f321c72ab025$var$addHeapObject(e));
    }
}
function $8713f321c72ab025$export$b185ccdc2a5f7755(a) {
    const ret = $8713f321c72ab025$var$wasm.fib(a);
    return ret >>> 0;
}
function $8713f321c72ab025$export$6c67ed2f1a0bcf8c(a) {
    const ret = $8713f321c72ab025$var$wasm.async_fib(a);
    return $8713f321c72ab025$var$takeObject(ret);
}
function $8713f321c72ab025$export$5a05a26718990d44() {
    const ret = $8713f321c72ab025$var$wasm.async_request();
    return $8713f321c72ab025$var$takeObject(ret);
}
function $8713f321c72ab025$export$a3bc9b8ed74fc() {
    try {
        const retptr = $8713f321c72ab025$var$wasm.__wbindgen_add_to_stack_pointer(-16);
        $8713f321c72ab025$var$wasm.error(retptr);
        var r0 = $8713f321c72ab025$var$getInt32Memory0()[retptr / 4 + 0];
        var r1 = $8713f321c72ab025$var$getInt32Memory0()[retptr / 4 + 1];
        if (r1) throw $8713f321c72ab025$var$takeObject(r0);
    } finally{
        $8713f321c72ab025$var$wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function $8713f321c72ab025$export$e48184b6f5d3cd9() {
    const ret = $8713f321c72ab025$var$wasm.async_error();
    return $8713f321c72ab025$var$takeObject(ret);
}
function $8713f321c72ab025$export$73d91aecc00f5458() {
    $8713f321c72ab025$var$wasm.panic();
}
function $8713f321c72ab025$export$f70f9c445445e08b() {
    try {
        const retptr = $8713f321c72ab025$var$wasm.__wbindgen_add_to_stack_pointer(-16);
        $8713f321c72ab025$var$wasm.try_catch_rust(retptr);
        var r0 = $8713f321c72ab025$var$getInt32Memory0()[retptr / 4 + 0];
        var r1 = $8713f321c72ab025$var$getInt32Memory0()[retptr / 4 + 1];
        if (r1) throw $8713f321c72ab025$var$takeObject(r0);
    } finally{
        $8713f321c72ab025$var$wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
function $8713f321c72ab025$export$ab05a0896370543b() {
    const ret = $8713f321c72ab025$var$wasm.async_try_catch_rust();
    return $8713f321c72ab025$var$takeObject(ret);
}
function $8713f321c72ab025$var$__wbg_adapter_94(arg0, arg1, arg2, arg3) {
    $8713f321c72ab025$var$wasm.wasm_bindgen__convert__closures__invoke2_mut__hbfb08aacbdf3ad77(arg0, arg1, $8713f321c72ab025$var$addHeapObject(arg2), $8713f321c72ab025$var$addHeapObject(arg3));
}
async function $8713f321c72ab025$var$load(module, imports) {
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
var $45146faf73838b47$exports = {};


$45146faf73838b47$exports = (parcelRequire("8IoA4")).getBundleURL('lXWX7') + (parcelRequire("bGWGM")).resolve("3csu7");


async function $8713f321c72ab025$var$init(input) {
    if (typeof input === 'undefined') input = new URL($45146faf73838b47$exports);
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        $8713f321c72ab025$var$takeObject(arg0);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = $8713f321c72ab025$var$getStringFromWasm0(arg0, arg1);
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_asyncaddcb_d0d4638bf9182fb4 = function() {
        return $8713f321c72ab025$var$handleError(function() {
            const ret = __extern__.async_add_cb();
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = $8713f321c72ab025$var$getObject(arg1);
        const ret = typeof obj === 'string' ? obj : undefined;
        var ptr0 = $8713f321c72ab025$var$isLikeNone(ret) ? 0 : $8713f321c72ab025$var$passStringToWasm0(ret, $8713f321c72ab025$var$wasm.__wbindgen_malloc, $8713f321c72ab025$var$wasm.__wbindgen_realloc);
        var len0 = $8713f321c72ab025$var$WASM_VECTOR_LEN;
        $8713f321c72ab025$var$getInt32Memory0()[arg0 / 4 + 1] = len0;
        $8713f321c72ab025$var$getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = $8713f321c72ab025$var$getObject(arg1);
        const ret = typeof obj === 'number' ? obj : undefined;
        $8713f321c72ab025$var$getFloat64Memory0()[arg0 / 8 + 1] = $8713f321c72ab025$var$isLikeNone(ret) ? 0 : ret;
        $8713f321c72ab025$var$getInt32Memory0()[arg0 / 4 + 0] = !$8713f321c72ab025$var$isLikeNone(ret);
    };
    imports.wbg.__wbg_asynctrycatch_3a3cc6aae1e171aa = function() {
        return $8713f321c72ab025$var$handleError(function() {
            const ret = __extern__.async_try_catch();
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_addcb_13602e9b289e5815 = function(arg0) {
        __extern__.add_cb(arg0 >>> 0);
    };
    imports.wbg.__wbg_trycatch_a2cad961352835c6 = function() {
        return $8713f321c72ab025$var$handleError(function() {
            __extern__.try_catch();
        }, arguments);
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = $8713f321c72ab025$var$getObject(arg0);
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_fetch_811d43d6bdcad5b1 = function(arg0) {
        const ret = fetch($8713f321c72ab025$var$getObject(arg0));
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_cb_drop = function(arg0) {
        const obj = $8713f321c72ab025$var$takeObject(arg0).original;
        if ((obj.cnt--) == 1) {
            obj.a = 0;
            return true;
        }
        const ret = false;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Response_ccfeb62399355bcd = function(arg0) {
        const ret = $8713f321c72ab025$var$getObject(arg0) instanceof Response;
        return ret;
    };
    imports.wbg.__wbg_url_06c0f822d68d195c = function(arg0, arg1) {
        const ret = $8713f321c72ab025$var$getObject(arg1).url;
        const ptr0 = $8713f321c72ab025$var$passStringToWasm0(ret, $8713f321c72ab025$var$wasm.__wbindgen_malloc, $8713f321c72ab025$var$wasm.__wbindgen_realloc);
        const len0 = $8713f321c72ab025$var$WASM_VECTOR_LEN;
        $8713f321c72ab025$var$getInt32Memory0()[arg0 / 4 + 1] = len0;
        $8713f321c72ab025$var$getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_status_600fd8b881393898 = function(arg0) {
        const ret = $8713f321c72ab025$var$getObject(arg0).status;
        return ret;
    };
    imports.wbg.__wbg_headers_9e7f2c05a9b962ea = function(arg0) {
        const ret = $8713f321c72ab025$var$getObject(arg0).headers;
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_text_2612fbe0b9d32220 = function() {
        return $8713f321c72ab025$var$handleError(function(arg0) {
            const ret = $8713f321c72ab025$var$getObject(arg0).text();
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_new_89d7f088c1c45353 = function() {
        return $8713f321c72ab025$var$handleError(function() {
            const ret = new Headers();
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_append_f4f93bc73c45ee3e = function() {
        return $8713f321c72ab025$var$handleError(function(arg0, arg1, arg2, arg3, arg4) {
            $8713f321c72ab025$var$getObject(arg0).append($8713f321c72ab025$var$getStringFromWasm0(arg1, arg2), $8713f321c72ab025$var$getStringFromWasm0(arg3, arg4));
        }, arguments);
    };
    imports.wbg.__wbg_newwithstrandinit_fd99688f189f053e = function() {
        return $8713f321c72ab025$var$handleError(function(arg0, arg1, arg2) {
            const ret = new Request($8713f321c72ab025$var$getStringFromWasm0(arg0, arg1), $8713f321c72ab025$var$getObject(arg2));
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_debug_36a773d49b063572 = function(arg0, arg1, arg2, arg3) {
        console.debug($8713f321c72ab025$var$getObject(arg0), $8713f321c72ab025$var$getObject(arg1), $8713f321c72ab025$var$getObject(arg2), $8713f321c72ab025$var$getObject(arg3));
    };
    imports.wbg.__wbg_error_2bd80fa6a8a2a2f8 = function(arg0, arg1, arg2, arg3) {
        console.error($8713f321c72ab025$var$getObject(arg0), $8713f321c72ab025$var$getObject(arg1), $8713f321c72ab025$var$getObject(arg2), $8713f321c72ab025$var$getObject(arg3));
    };
    imports.wbg.__wbg_info_db0d129f2154d4c8 = function(arg0, arg1, arg2, arg3) {
        console.info($8713f321c72ab025$var$getObject(arg0), $8713f321c72ab025$var$getObject(arg1), $8713f321c72ab025$var$getObject(arg2), $8713f321c72ab025$var$getObject(arg3));
    };
    imports.wbg.__wbg_log_b0c9d8633cc17060 = function(arg0, arg1, arg2, arg3) {
        console.log($8713f321c72ab025$var$getObject(arg0), $8713f321c72ab025$var$getObject(arg1), $8713f321c72ab025$var$getObject(arg2), $8713f321c72ab025$var$getObject(arg3));
    };
    imports.wbg.__wbg_warn_e797461046a6b725 = function(arg0, arg1, arg2, arg3) {
        console.warn($8713f321c72ab025$var$getObject(arg0), $8713f321c72ab025$var$getObject(arg1), $8713f321c72ab025$var$getObject(arg2), $8713f321c72ab025$var$getObject(arg3));
    };
    imports.wbg.__wbg_fetch_bf56e2a9f0644e3f = function(arg0, arg1) {
        const ret = $8713f321c72ab025$var$getObject(arg0).fetch($8713f321c72ab025$var$getObject(arg1));
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_function = function(arg0) {
        const ret = typeof $8713f321c72ab025$var$getObject(arg0) === 'function';
        return ret;
    };
    imports.wbg.__wbg_newnoargs_e23b458e372830de = function(arg0, arg1) {
        const ret = new Function($8713f321c72ab025$var$getStringFromWasm0(arg0, arg1));
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = $8713f321c72ab025$var$getObject(arg0);
        const ret = typeof val === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbg_next_cabb70b365520721 = function(arg0) {
        const ret = $8713f321c72ab025$var$getObject(arg0).next;
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_next_bf3d83fc18df496e = function() {
        return $8713f321c72ab025$var$handleError(function(arg0) {
            const ret = $8713f321c72ab025$var$getObject(arg0).next();
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_done_040f966faa9a72b3 = function(arg0) {
        const ret = $8713f321c72ab025$var$getObject(arg0).done;
        return ret;
    };
    imports.wbg.__wbg_value_419afbd9b9574c4c = function(arg0) {
        const ret = $8713f321c72ab025$var$getObject(arg0).value;
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_iterator_4832ef1f15b0382b = function() {
        const ret = Symbol.iterator;
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_get_a9cab131e3152c49 = function() {
        return $8713f321c72ab025$var$handleError(function(arg0, arg1) {
            const ret = Reflect.get($8713f321c72ab025$var$getObject(arg0), $8713f321c72ab025$var$getObject(arg1));
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_call_ae78342adc33730a = function() {
        return $8713f321c72ab025$var$handleError(function(arg0, arg1) {
            const ret = $8713f321c72ab025$var$getObject(arg0).call($8713f321c72ab025$var$getObject(arg1));
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_new_36359baae5a47e27 = function() {
        const ret = new Object();
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_call_3ed288a247f13ea5 = function() {
        return $8713f321c72ab025$var$handleError(function(arg0, arg1, arg2) {
            const ret = $8713f321c72ab025$var$getObject(arg0).call($8713f321c72ab025$var$getObject(arg1), $8713f321c72ab025$var$getObject(arg2));
            return $8713f321c72ab025$var$addHeapObject(ret);
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
                    return $8713f321c72ab025$var$__wbg_adapter_94(a, state0.b, arg0, arg1);
                } finally{
                    state0.a = a;
                }
            };
            const ret = new Promise(cb0);
            return $8713f321c72ab025$var$addHeapObject(ret);
        } finally{
            state0.a = state0.b = 0;
        }
    };
    imports.wbg.__wbg_resolve_a9a87bdd64e9e62c = function(arg0) {
        const ret = Promise.resolve($8713f321c72ab025$var$getObject(arg0));
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_then_ce526c837d07b68f = function(arg0, arg1) {
        const ret = $8713f321c72ab025$var$getObject(arg0).then($8713f321c72ab025$var$getObject(arg1));
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_then_842e65b843962f56 = function(arg0, arg1, arg2) {
        const ret = $8713f321c72ab025$var$getObject(arg0).then($8713f321c72ab025$var$getObject(arg1), $8713f321c72ab025$var$getObject(arg2));
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_self_99737b4dcdf6f0d8 = function() {
        return $8713f321c72ab025$var$handleError(function() {
            const ret = self.self;
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_window_9b61fbbf3564c4fb = function() {
        return $8713f321c72ab025$var$handleError(function() {
            const ret = window.window;
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_globalThis_8e275ef40caea3a3 = function() {
        return $8713f321c72ab025$var$handleError(function() {
            const ret = globalThis.globalThis;
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_global_5de1e0f82bddcd27 = function() {
        return $8713f321c72ab025$var$handleError(function() {
            const ret = $parcel$global.global;
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = $8713f321c72ab025$var$getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbg_buffer_7af23f65f6c64548 = function(arg0) {
        const ret = $8713f321c72ab025$var$getObject(arg0).buffer;
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_ce1e75f0ce5f7974 = function(arg0, arg1, arg2) {
        const ret = new Uint8Array($8713f321c72ab025$var$getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_new_cc9018bd6f283b6f = function(arg0) {
        const ret = new Uint8Array($8713f321c72ab025$var$getObject(arg0));
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_has_ce995ec88636803d = function() {
        return $8713f321c72ab025$var$handleError(function(arg0, arg1) {
            const ret = Reflect.has($8713f321c72ab025$var$getObject(arg0), $8713f321c72ab025$var$getObject(arg1));
            return ret;
        }, arguments);
    };
    imports.wbg.__wbg_set_93b1c87ee2af852e = function() {
        return $8713f321c72ab025$var$handleError(function(arg0, arg1, arg2) {
            const ret = Reflect.set($8713f321c72ab025$var$getObject(arg0), $8713f321c72ab025$var$getObject(arg1), $8713f321c72ab025$var$getObject(arg2));
            return ret;
        }, arguments);
    };
    imports.wbg.__wbg_stringify_c760003feffcc1f2 = function() {
        return $8713f321c72ab025$var$handleError(function(arg0) {
            const ret = JSON.stringify($8713f321c72ab025$var$getObject(arg0));
            return $8713f321c72ab025$var$addHeapObject(ret);
        }, arguments);
    };
    imports.wbg.__wbg_new_693216e109162396 = function() {
        const ret = new Error();
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_0ddaca5d1abfb52f = function(arg0, arg1) {
        const ret = $8713f321c72ab025$var$getObject(arg1).stack;
        const ptr0 = $8713f321c72ab025$var$passStringToWasm0(ret, $8713f321c72ab025$var$wasm.__wbindgen_malloc, $8713f321c72ab025$var$wasm.__wbindgen_realloc);
        const len0 = $8713f321c72ab025$var$WASM_VECTOR_LEN;
        $8713f321c72ab025$var$getInt32Memory0()[arg0 / 4 + 1] = len0;
        $8713f321c72ab025$var$getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_error_09919627ac0992f5 = function(arg0, arg1) {
        try {
            console.error($8713f321c72ab025$var$getStringFromWasm0(arg0, arg1));
        } finally{
            $8713f321c72ab025$var$wasm.__wbindgen_free(arg0, arg1);
        }
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = $8713f321c72ab025$var$debugString($8713f321c72ab025$var$getObject(arg1));
        const ptr0 = $8713f321c72ab025$var$passStringToWasm0(ret, $8713f321c72ab025$var$wasm.__wbindgen_malloc, $8713f321c72ab025$var$wasm.__wbindgen_realloc);
        const len0 = $8713f321c72ab025$var$WASM_VECTOR_LEN;
        $8713f321c72ab025$var$getInt32Memory0()[arg0 / 4 + 1] = len0;
        $8713f321c72ab025$var$getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error($8713f321c72ab025$var$getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = $8713f321c72ab025$var$wasm.memory;
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    imports.wbg.__wbindgen_closure_wrapper674 = function(arg0, arg1, arg2) {
        const ret = $8713f321c72ab025$var$makeMutClosure(arg0, arg1, 214, $8713f321c72ab025$var$__wbg_adapter_28);
        return $8713f321c72ab025$var$addHeapObject(ret);
    };
    if (typeof input === 'string' || typeof Request === 'function' && input instanceof Request || typeof URL === 'function' && input instanceof URL) input = fetch(input);
    const { instance: instance , module: module  } = await $8713f321c72ab025$var$load(await input, imports);
    $8713f321c72ab025$var$wasm = instance.exports;
    $8713f321c72ab025$var$init.__wbindgen_wasm_module = module;
    $8713f321c72ab025$var$wasm.__wbindgen_start();
    return $8713f321c72ab025$var$wasm;
}
var $8713f321c72ab025$export$2e2bcd8739ae039 = $8713f321c72ab025$var$init;


var $d211b2f33f937910$exports = {};

$parcel$export($d211b2f33f937910$exports, "add_cb", () => $d211b2f33f937910$export$c6c368edf21c19e4);
$parcel$export($d211b2f33f937910$exports, "async_add_cb", () => $d211b2f33f937910$export$16c14477346a9b27);
$parcel$export($d211b2f33f937910$exports, "try_catch", () => $d211b2f33f937910$export$4d510f421251fe7e);
$parcel$export($d211b2f33f937910$exports, "async_try_catch", () => $d211b2f33f937910$export$1799328bda64d575);
const $d211b2f33f937910$export$c6c368edf21c19e4 = (result)=>{
    console.log("The result is", result);
};
const $d211b2f33f937910$export$16c14477346a9b27 = async ()=>new Promise((resolve)=>{
        console.log("Fake a long calculation: result will be 4 in 2s");
        setTimeout(()=>{
            resolve(4); // will add 4 to the next async_add() call
        }, 2000);
    })
;
const $d211b2f33f937910$export$4d510f421251fe7e = ()=>{
    throw new Error("This is a JS Error");
};
// eslint-disable-next-line @typescript-eslint/require-await
const $d211b2f33f937910$export$1799328bda64d575 = async ()=>{
    throw new Error("This is an async JS Error");
};


// Declare ctx as Worker and not as Window
const $66116edf06513a85$var$ctx = self;
/* --- Extern --- */ // These functions will be called from Rust/Wasm
$66116edf06513a85$var$ctx.__extern__ = $d211b2f33f937910$exports;
/* --- Worker --- */ // eslint-disable-next-line @typescript-eslint/no-misused-promises
$66116edf06513a85$var$ctx.addEventListener("message", async (event)=>{
    const { a: a  } = event.data;
    // Unfortunately we need to instantiate the WASM module every time.
    // TODO: Can we do it differently?
    await $8713f321c72ab025$export$2e2bcd8739ae039();
    const result = $8713f321c72ab025$export$b185ccdc2a5f7755(a);
    $66116edf06513a85$var$ctx.postMessage(result);
});

})();
//# sourceMappingURL=worker.b4b31a15.js.map
