(()=>{function c(a,b,c,d){Object.defineProperty(a,b,{get:c,set:d,enumerable:!0,configurable:!0})}var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},k={},l={},a=d.parcelRequire2398;null==a&&((a=function(a){if(a in k)return k[a].exports;if(a in l){var d=l[a];delete l[a];var b={id:a,exports:{}};return k[a]=b,d.call(b.exports,b,b.exports),b.exports}var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(a,b){l[a]=b},d.parcelRequire2398=a),a.register("bGWGM",function(a,e){"use strict";c(a.exports,"register",()=>b,a=>b=a),c(a.exports,"resolve",()=>d,a=>d=a);var b,d,f={};b=function(c){for(var b=Object.keys(c),a=0;a<b.length;a++)f[b[a]]=c[b[a]]},d=function(a){var b=f[a];if(null==b)throw new Error("Could not resolve bundle with id "+a);return b}}),a.register("8IoA4",function(a,e){"use strict";c(a.exports,"getBundleURL",()=>b,a=>b=a),c(a.exports,"getOrigin",()=>d,a=>d=a);var b,d,f={};b=function(b){var a=f[b];return a||(a=function(){try{throw new Error}catch(c){var a,b=(""+c.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(b){return a=b[2],(""+a).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}}return"/"}(),f[b]=a),a},d=function(b){var a=(""+b).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);if(!a)throw new Error("Origin not found");return a[0]}});var m={};a("bGWGM").register(JSON.parse('{"lXWX7":"worker.269af199.js","3csu7":"async_bg.32e9fdb0.wasm"}'));var n={};let o,e=new Array(32).fill(void 0);function p(a){return e[a]}e.push(void 0,null,!0,!1);let q=e.length;function r(a){a<36||(e[a]=q,q=a)}function s(a){let b=p(a);return r(a),b}let g=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});g.decode();let t=null;function u(){return(null===t||t.buffer!==o.memory.buffer)&&(t=new Uint8Array(o.memory.buffer)),t}function v(a,b){return g.decode(u().subarray(a,a+b))}function w(b){q===e.length&&e.push(e.length+1);let a=q;return q=e[a],e[a]=b,a}let x=0,h=new TextEncoder("utf-8"),y="function"==typeof h.encodeInto?function(a,b){return h.encodeInto(a,b)}:function(a,c){let b=h.encode(a);return c.set(b),{read:a.length,written:b.length}};function z(b,g,i){if(void 0===i){let e=h.encode(b),f=g(e.length);return u().subarray(f,f+e.length).set(e),x=e.length,f}let c=b.length,d=g(c),k=u(),a=0;for(;a<c;a++){let j=b.charCodeAt(a);if(j>127)break;k[d+a]=j}if(a!==c){0!==a&&(b=b.slice(a)),d=i(d,c,c=a+3*b.length);let l=u().subarray(d+a,d+c),m=y(b,l);a+=m.written}return x=a,d}function A(a){return null==a}let B=null;function C(){return(null===B||B.buffer!==o.memory.buffer)&&(B=new Int32Array(o.memory.buffer)),B}let D=null;function E(){return(null===D||D.buffer!==o.memory.buffer)&&(D=new Float64Array(o.memory.buffer)),D}function F(a){let b=typeof a;if("number"==b||"boolean"==b||null==a)return`${a}`;if("string"==b)return`"${a}"`;if("symbol"==b){let f=a.description;return null==f?"Symbol":`Symbol(${f})`}if("function"==b){let c=a.name;return"string"==typeof c&&c.length>0?`Function(${c})`:"Function"}if(Array.isArray(a)){let g=a.length,d="[";g>0&&(d+=F(a[0]));for(let e=1;e<g;e++)d+=", "+F(a[e]);return d+"]"}let h=/\[object ([^\]]+)\]/.exec(toString.call(a)),i;if(!(h.length>1))return toString.call(a);if("Object"==(i=h[1]))try{return"Object("+JSON.stringify(a)+")"}catch(j){return"Object"}return a instanceof Error?`${a.name}: ${a.message}
${a.stack}`:i}function G(b,c,d,f){let e={a:b,b:c,cnt:1,dtor:d},a=(...b)=>{e.cnt++;let a=e.a;e.a=0;try{return f(a,e.b,...b)}finally{0== --e.cnt?o.__wbindgen_export_2.get(e.dtor)(a,e.b):e.a=a}};return a.original=e,a}function H(a,b,c){o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h27c8f16a84e9bb3f(a,b,w(c))}function I(a,b){try{return a.apply(this,b)}catch(c){o.__wbindgen_exn_store(w(c))}}function J(a){let b=o.fib(a);return b>>>0}function K(a,b,c,d){o.wasm_bindgen__convert__closures__invoke2_mut__h83da388938ac5b05(a,b,w(c),w(d))}async function L(a,b){if("function"==typeof Response&&a instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(a,b)}catch(d){if("application/wasm"!=a.headers.get("Content-Type"))console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",d);else throw d}let e=await a.arrayBuffer();return await WebAssembly.instantiate(e,b)}{let c=await WebAssembly.instantiate(a,b);return c instanceof WebAssembly.Instance?{instance:c,module:a}:c}}var i={};async function j(b){void 0===b&&(b=new URL(i));let a={};a.wbg={},a.wbg.__wbindgen_object_drop_ref=function(a){s(a)},a.wbg.__wbg_asyncaddcb_d0d4638bf9182fb4=function(){return I(function(){let a=__extern__.async_add_cb();return w(a)},arguments)},a.wbg.__wbindgen_string_new=function(a,b){let c=v(a,b);return w(c)},a.wbg.__wbindgen_string_get=function(a,d){let b=p(d),c="string"==typeof b?b:void 0;var e=A(c)?0:z(c,o.__wbindgen_malloc,o.__wbindgen_realloc),f=x;C()[a/4+1]=f,C()[a/4+0]=e},a.wbg.__wbindgen_number_get=function(b,d){let c=p(d),a="number"==typeof c?c:void 0;E()[b/8+1]=A(a)?0:a,C()[b/4+0]=!A(a)},a.wbg.__wbg_asynctrycatch_3a3cc6aae1e171aa=function(){return I(function(){let a=__extern__.async_try_catch();return w(a)},arguments)},a.wbg.__wbindgen_number_new=function(a){return w(a)},a.wbg.__wbg_addcb_13602e9b289e5815=function(a){__extern__.add_cb(a>>>0)},a.wbg.__wbg_trycatch_a2cad961352835c6=function(){return I(function(){__extern__.try_catch()},arguments)},a.wbg.__wbindgen_object_clone_ref=function(a){let b=p(a);return w(b)},a.wbg.__wbg_fetch_811d43d6bdcad5b1=function(a){let b=fetch(p(a));return w(b)},a.wbg.__wbindgen_cb_drop=function(b){let a=s(b).original;return 1==a.cnt--&&(a.a=0,!0)},a.wbg.__wbg_instanceof_Response_ccfeb62399355bcd=function(a){let b=p(a) instanceof Response;return b},a.wbg.__wbg_url_06c0f822d68d195c=function(a,b){let c=p(b).url,d=z(c,o.__wbindgen_malloc,o.__wbindgen_realloc),e=x;C()[a/4+1]=e,C()[a/4+0]=d},a.wbg.__wbg_status_600fd8b881393898=function(a){let b=p(a).status;return b},a.wbg.__wbg_headers_9e7f2c05a9b962ea=function(a){let b=p(a).headers;return w(b)},a.wbg.__wbg_text_2612fbe0b9d32220=function(){return I(function(a){let b=p(a).text();return w(b)},arguments)},a.wbg.__wbg_new_89d7f088c1c45353=function(){return I(function(){let a=new Headers;return w(a)},arguments)},a.wbg.__wbg_append_f4f93bc73c45ee3e=function(){return I(function(a,b,c,d,e){p(a).append(v(b,c),v(d,e))},arguments)},a.wbg.__wbg_newwithstrandinit_fd99688f189f053e=function(){return I(function(a,b,c){let d=new Request(v(a,b),p(c));return w(d)},arguments)},a.wbg.__wbg_debug_36a773d49b063572=function(a,b,c,d){console.debug(p(a),p(b),p(c),p(d))},a.wbg.__wbg_error_2bd80fa6a8a2a2f8=function(a,b,c,d){console.error(p(a),p(b),p(c),p(d))},a.wbg.__wbg_info_db0d129f2154d4c8=function(a,b,c,d){console.info(p(a),p(b),p(c),p(d))},a.wbg.__wbg_log_b0c9d8633cc17060=function(a,b,c,d){console.log(p(a),p(b),p(c),p(d))},a.wbg.__wbg_warn_e797461046a6b725=function(a,b,c,d){console.warn(p(a),p(b),p(c),p(d))},a.wbg.__wbg_fetch_bf56e2a9f0644e3f=function(a,b){let c=p(a).fetch(p(b));return w(c)},a.wbg.__wbindgen_is_function=function(a){let b="function"==typeof p(a);return b},a.wbg.__wbg_newnoargs_e23b458e372830de=function(a,b){let c=new Function(v(a,b));return w(c)},a.wbg.__wbindgen_is_object=function(b){let a=p(b),c="object"==typeof a&&null!==a;return c},a.wbg.__wbg_next_cabb70b365520721=function(a){let b=p(a).next;return w(b)},a.wbg.__wbg_next_bf3d83fc18df496e=function(){return I(function(a){let b=p(a).next();return w(b)},arguments)},a.wbg.__wbg_done_040f966faa9a72b3=function(a){let b=p(a).done;return b},a.wbg.__wbg_value_419afbd9b9574c4c=function(a){let b=p(a).value;return w(b)},a.wbg.__wbg_iterator_4832ef1f15b0382b=function(){let a=Symbol.iterator;return w(a)},a.wbg.__wbg_get_a9cab131e3152c49=function(){return I(function(a,b){let c=Reflect.get(p(a),p(b));return w(c)},arguments)},a.wbg.__wbg_call_ae78342adc33730a=function(){return I(function(a,b){let c=p(a).call(p(b));return w(c)},arguments)},a.wbg.__wbg_new_36359baae5a47e27=function(){let a=new Object;return w(a)},a.wbg.__wbg_call_3ed288a247f13ea5=function(){return I(function(a,b,c){let d=p(a).call(p(b),p(c));return w(d)},arguments)},a.wbg.__wbg_new_37705eed627d5ed9=function(b,c){try{var a={a:b,b:c},d=(c,d)=>{let b=a.a;a.a=0;try{return K(b,a.b,c,d)}finally{a.a=b}};let e=new Promise(d);return w(e)}finally{a.a=a.b=0}},a.wbg.__wbg_resolve_a9a87bdd64e9e62c=function(a){let b=Promise.resolve(p(a));return w(b)},a.wbg.__wbg_then_ce526c837d07b68f=function(a,b){let c=p(a).then(p(b));return w(c)},a.wbg.__wbg_then_842e65b843962f56=function(a,b,c){let d=p(a).then(p(b),p(c));return w(d)},a.wbg.__wbg_self_99737b4dcdf6f0d8=function(){return I(function(){let a=self.self;return w(a)},arguments)},a.wbg.__wbg_window_9b61fbbf3564c4fb=function(){return I(function(){let a=window.window;return w(a)},arguments)},a.wbg.__wbg_globalThis_8e275ef40caea3a3=function(){return I(function(){let a=globalThis.globalThis;return w(a)},arguments)},a.wbg.__wbg_global_5de1e0f82bddcd27=function(){return I(function(){let a=d.global;return w(a)},arguments)},a.wbg.__wbindgen_is_undefined=function(a){let b=void 0===p(a);return b},a.wbg.__wbg_buffer_7af23f65f6c64548=function(a){let b=p(a).buffer;return w(b)},a.wbg.__wbg_newwithbyteoffsetandlength_ce1e75f0ce5f7974=function(a,b,c){let d=new Uint8Array(p(a),b>>>0,c>>>0);return w(d)},a.wbg.__wbg_new_cc9018bd6f283b6f=function(a){let b=new Uint8Array(p(a));return w(b)},a.wbg.__wbg_has_ce995ec88636803d=function(){return I(function(a,b){let c=Reflect.has(p(a),p(b));return c},arguments)},a.wbg.__wbg_set_93b1c87ee2af852e=function(){return I(function(a,b,c){let d=Reflect.set(p(a),p(b),p(c));return d},arguments)},a.wbg.__wbg_stringify_c760003feffcc1f2=function(){return I(function(a){let b=JSON.stringify(p(a));return w(b)},arguments)},a.wbg.__wbg_new_693216e109162396=function(){let a=new Error;return w(a)},a.wbg.__wbg_stack_0ddaca5d1abfb52f=function(a,b){let c=p(b).stack,d=z(c,o.__wbindgen_malloc,o.__wbindgen_realloc),e=x;C()[a/4+1]=e,C()[a/4+0]=d},a.wbg.__wbg_error_09919627ac0992f5=function(a,b){try{console.error(v(a,b))}finally{o.__wbindgen_free(a,b)}},a.wbg.__wbindgen_debug_string=function(a,b){let c=F(p(b)),d=z(c,o.__wbindgen_malloc,o.__wbindgen_realloc),e=x;C()[a/4+1]=e,C()[a/4+0]=d},a.wbg.__wbindgen_throw=function(a,b){throw new Error(v(a,b))},a.wbg.__wbindgen_memory=function(){let a=o.memory;return w(a)},a.wbg.__wbindgen_closure_wrapper669=function(a,b,d){let c=G(a,b,214,H);return w(c)},("string"==typeof b||"function"==typeof Request&&b instanceof Request||"function"==typeof URL&&b instanceof URL)&&(b=fetch(b));let{instance:c,module:e}=await L(await b,a);return o=c.exports,j.__wbindgen_wasm_module=e,o.__wbindgen_start(),o}i=a("8IoA4").getBundleURL("lXWX7")+a("bGWGM").resolve("3csu7");var M=j,b={};c(b,"add_cb",()=>N),c(b,"async_add_cb",()=>O),c(b,"try_catch",()=>P),c(b,"async_try_catch",()=>Q);let N=a=>{console.log("The result is",a)},O=async()=>new Promise(a=>{console.log("Fake a long calculation: result will be 4 in 2s"),setTimeout(()=>{a(4)},2e3)}),P=()=>{throw new Error("This is a JS Error")},Q=async()=>{throw new Error("This is an async JS Error")},f=self;f.__extern__=b,f.addEventListener("message",async a=>{let{a:b}=a.data;await M();let c=J(b);f.postMessage(c)})})()
//# sourceMappingURL=worker.269af199.js.map
