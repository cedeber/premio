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
parcelRequire.register("jdbBp", function(module, exports) {



module.exports = (parcelRequire("qQeMH"))((parcelRequire("8IoA4")).getBundleURL('8ExQG') + (parcelRequire("bGWGM")).resolve("hj8eV")).then(()=>parcelRequire('8ILa9')
);

});
parcelRequire.register("qQeMH", function(module, exports) {
"use strict";

var $90gdW = parcelRequire("90gdW");
module.exports = $90gdW(function(bundle) {
    return new Promise(function(resolve, reject) {
        try {
            importScripts(bundle);
            resolve();
        } catch (e) {
            reject(e);
        }
    });
});

});
parcelRequire.register("90gdW", function(module, exports) {
"use strict";
var $68e0b2e0ca9293f2$var$cachedBundles = {};
var $68e0b2e0ca9293f2$var$cachedPreloads = {};
var $68e0b2e0ca9293f2$var$cachedPrefetches = {};
function $68e0b2e0ca9293f2$var$getCache(type) {
    switch(type){
        case 'preload':
            return $68e0b2e0ca9293f2$var$cachedPreloads;
        case 'prefetch':
            return $68e0b2e0ca9293f2$var$cachedPrefetches;
        default:
            return $68e0b2e0ca9293f2$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $68e0b2e0ca9293f2$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
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


parcelRequire.register("6bE7y", function(module, exports) {

var $7YDMF = parcelRequire("7YDMF");

var $8IoA4 = parcelRequire("8IoA4");

let $4812e44def16bd04$var$url = $8IoA4.getBundleURL('8ExQG') + (parcelRequire("bGWGM")).resolve("8ExQG");
module.exports = $7YDMF($4812e44def16bd04$var$url, $8IoA4.getOrigin($4812e44def16bd04$var$url), false);

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


var $de8880ecb86e007f$exports = {};

$parcel$export($de8880ecb86e007f$exports, "startWorkers", () => $de8880ecb86e007f$export$6a13f9f53ddacde8);
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
    const pkg = await (parcelRequire("jdbBp"));
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
        const worker = new Worker((parcelRequire("6bE7y")));
        worker.postMessage(workerInit);
        await $de8880ecb86e007f$var$waitForMsgType(worker, 'wasm_bindgen_worker_ready');
        return worker;
    }));
    builder.build();
}

})();
//# sourceMappingURL=workerHelpers.a3e9cb86.js.map
