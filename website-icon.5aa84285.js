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
parcelRequire.register("89wqa", function(module, exports) {

$parcel$export(module.exports, "Fragment", () => $5ef850295e0236ca$export$ffb0004e005737fa, (v) => $5ef850295e0236ca$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "jsx", () => $5ef850295e0236ca$export$34b9dba7ce09269b, (v) => $5ef850295e0236ca$export$34b9dba7ce09269b = v);
$parcel$export(module.exports, "jsxs", () => $5ef850295e0236ca$export$25062201e9e25d76, (v) => $5ef850295e0236ca$export$25062201e9e25d76 = v);
var $5ef850295e0236ca$export$ffb0004e005737fa;
var $5ef850295e0236ca$export$34b9dba7ce09269b;
var $5ef850295e0236ca$export$25062201e9e25d76;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';

var $8NFma = parcelRequire("8NFma");
var $5ef850295e0236ca$var$k = Symbol.for("react.element"), $5ef850295e0236ca$var$l = Symbol.for("react.fragment"), $5ef850295e0236ca$var$m = Object.prototype.hasOwnProperty, $5ef850295e0236ca$var$n = $8NFma.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $5ef850295e0236ca$var$p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $5ef850295e0236ca$var$q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)$5ef850295e0236ca$var$m.call(a, b) && !$5ef850295e0236ca$var$p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: $5ef850295e0236ca$var$k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: $5ef850295e0236ca$var$n.current
    };
}
$5ef850295e0236ca$export$ffb0004e005737fa = $5ef850295e0236ca$var$l;
$5ef850295e0236ca$export$34b9dba7ce09269b = $5ef850295e0236ca$var$q;
$5ef850295e0236ca$export$25062201e9e25d76 = $5ef850295e0236ca$var$q;

});
parcelRequire.register("8NFma", function(module, exports) {
'use strict';

module.exports = (parcelRequire("j1rj6"));

});
parcelRequire.register("j1rj6", function(module, exports) {

$parcel$export(module.exports, "Children", () => $dd934af551f44020$export$dca3b0875bd9a954, (v) => $dd934af551f44020$export$dca3b0875bd9a954 = v);
$parcel$export(module.exports, "Component", () => $dd934af551f44020$export$16fa2f45be04daa8, (v) => $dd934af551f44020$export$16fa2f45be04daa8 = v);
$parcel$export(module.exports, "Fragment", () => $dd934af551f44020$export$ffb0004e005737fa, (v) => $dd934af551f44020$export$ffb0004e005737fa = v);
$parcel$export(module.exports, "Profiler", () => $dd934af551f44020$export$e2c29f18771995cb, (v) => $dd934af551f44020$export$e2c29f18771995cb = v);
$parcel$export(module.exports, "PureComponent", () => $dd934af551f44020$export$221d75b3f55bb0bd, (v) => $dd934af551f44020$export$221d75b3f55bb0bd = v);
$parcel$export(module.exports, "StrictMode", () => $dd934af551f44020$export$5f8d39834fd61797, (v) => $dd934af551f44020$export$5f8d39834fd61797 = v);
$parcel$export(module.exports, "Suspense", () => $dd934af551f44020$export$74bf444e3cd11ea5, (v) => $dd934af551f44020$export$74bf444e3cd11ea5 = v);
$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", () => $dd934af551f44020$export$ae55be85d98224ed, (v) => $dd934af551f44020$export$ae55be85d98224ed = v);
$parcel$export(module.exports, "cloneElement", () => $dd934af551f44020$export$e530037191fcd5d7, (v) => $dd934af551f44020$export$e530037191fcd5d7 = v);
$parcel$export(module.exports, "createContext", () => $dd934af551f44020$export$fd42f52fd3ae1109, (v) => $dd934af551f44020$export$fd42f52fd3ae1109 = v);
$parcel$export(module.exports, "createElement", () => $dd934af551f44020$export$c8a8987d4410bf2d, (v) => $dd934af551f44020$export$c8a8987d4410bf2d = v);
$parcel$export(module.exports, "createFactory", () => $dd934af551f44020$export$d38cd72104c1f0e9, (v) => $dd934af551f44020$export$d38cd72104c1f0e9 = v);
$parcel$export(module.exports, "createRef", () => $dd934af551f44020$export$7d1e3a5e95ceca43, (v) => $dd934af551f44020$export$7d1e3a5e95ceca43 = v);
$parcel$export(module.exports, "forwardRef", () => $dd934af551f44020$export$257a8862b851cb5b, (v) => $dd934af551f44020$export$257a8862b851cb5b = v);
$parcel$export(module.exports, "isValidElement", () => $dd934af551f44020$export$a8257692ac88316c, (v) => $dd934af551f44020$export$a8257692ac88316c = v);
$parcel$export(module.exports, "lazy", () => $dd934af551f44020$export$488013bae63b21da, (v) => $dd934af551f44020$export$488013bae63b21da = v);
$parcel$export(module.exports, "memo", () => $dd934af551f44020$export$7c73462e0d25e514, (v) => $dd934af551f44020$export$7c73462e0d25e514 = v);
$parcel$export(module.exports, "startTransition", () => $dd934af551f44020$export$7568632d0d33d16d, (v) => $dd934af551f44020$export$7568632d0d33d16d = v);
$parcel$export(module.exports, "unstable_act", () => $dd934af551f44020$export$88948ce120ea2619, (v) => $dd934af551f44020$export$88948ce120ea2619 = v);
$parcel$export(module.exports, "useCallback", () => $dd934af551f44020$export$35808ee640e87ca7, (v) => $dd934af551f44020$export$35808ee640e87ca7 = v);
$parcel$export(module.exports, "useContext", () => $dd934af551f44020$export$fae74005e78b1a27, (v) => $dd934af551f44020$export$fae74005e78b1a27 = v);
$parcel$export(module.exports, "useDebugValue", () => $dd934af551f44020$export$dc8fbce3eb94dc1e, (v) => $dd934af551f44020$export$dc8fbce3eb94dc1e = v);
$parcel$export(module.exports, "useDeferredValue", () => $dd934af551f44020$export$6a7bc4e911dc01cf, (v) => $dd934af551f44020$export$6a7bc4e911dc01cf = v);
$parcel$export(module.exports, "useEffect", () => $dd934af551f44020$export$6d9c69b0de29b591, (v) => $dd934af551f44020$export$6d9c69b0de29b591 = v);
$parcel$export(module.exports, "useId", () => $dd934af551f44020$export$f680877a34711e37, (v) => $dd934af551f44020$export$f680877a34711e37 = v);
$parcel$export(module.exports, "useImperativeHandle", () => $dd934af551f44020$export$d5a552a76deda3c2, (v) => $dd934af551f44020$export$d5a552a76deda3c2 = v);
$parcel$export(module.exports, "useInsertionEffect", () => $dd934af551f44020$export$aaabe4eda9ed9969, (v) => $dd934af551f44020$export$aaabe4eda9ed9969 = v);
$parcel$export(module.exports, "useLayoutEffect", () => $dd934af551f44020$export$e5c5a5f917a5871c, (v) => $dd934af551f44020$export$e5c5a5f917a5871c = v);
$parcel$export(module.exports, "useMemo", () => $dd934af551f44020$export$1538c33de8887b59, (v) => $dd934af551f44020$export$1538c33de8887b59 = v);
$parcel$export(module.exports, "useReducer", () => $dd934af551f44020$export$13e3392192263954, (v) => $dd934af551f44020$export$13e3392192263954 = v);
$parcel$export(module.exports, "useRef", () => $dd934af551f44020$export$b8f5890fc79d6aca, (v) => $dd934af551f44020$export$b8f5890fc79d6aca = v);
$parcel$export(module.exports, "useState", () => $dd934af551f44020$export$60241385465d0a34, (v) => $dd934af551f44020$export$60241385465d0a34 = v);
$parcel$export(module.exports, "useSyncExternalStore", () => $dd934af551f44020$export$306c0aa65ff9ec16, (v) => $dd934af551f44020$export$306c0aa65ff9ec16 = v);
$parcel$export(module.exports, "useTransition", () => $dd934af551f44020$export$7b286972b8d8ccbf, (v) => $dd934af551f44020$export$7b286972b8d8ccbf = v);
$parcel$export(module.exports, "version", () => $dd934af551f44020$export$83d89fbfd8236492, (v) => $dd934af551f44020$export$83d89fbfd8236492 = v);
var $dd934af551f44020$export$dca3b0875bd9a954;
var $dd934af551f44020$export$16fa2f45be04daa8;
var $dd934af551f44020$export$ffb0004e005737fa;
var $dd934af551f44020$export$e2c29f18771995cb;
var $dd934af551f44020$export$221d75b3f55bb0bd;
var $dd934af551f44020$export$5f8d39834fd61797;
var $dd934af551f44020$export$74bf444e3cd11ea5;
var $dd934af551f44020$export$ae55be85d98224ed;
var $dd934af551f44020$export$e530037191fcd5d7;
var $dd934af551f44020$export$fd42f52fd3ae1109;
var $dd934af551f44020$export$c8a8987d4410bf2d;
var $dd934af551f44020$export$d38cd72104c1f0e9;
var $dd934af551f44020$export$7d1e3a5e95ceca43;
var $dd934af551f44020$export$257a8862b851cb5b;
var $dd934af551f44020$export$a8257692ac88316c;
var $dd934af551f44020$export$488013bae63b21da;
var $dd934af551f44020$export$7c73462e0d25e514;
var $dd934af551f44020$export$7568632d0d33d16d;
var $dd934af551f44020$export$88948ce120ea2619;
var $dd934af551f44020$export$35808ee640e87ca7;
var $dd934af551f44020$export$fae74005e78b1a27;
var $dd934af551f44020$export$dc8fbce3eb94dc1e;
var $dd934af551f44020$export$6a7bc4e911dc01cf;
var $dd934af551f44020$export$6d9c69b0de29b591;
var $dd934af551f44020$export$f680877a34711e37;
var $dd934af551f44020$export$d5a552a76deda3c2;
var $dd934af551f44020$export$aaabe4eda9ed9969;
var $dd934af551f44020$export$e5c5a5f917a5871c;
var $dd934af551f44020$export$1538c33de8887b59;
var $dd934af551f44020$export$13e3392192263954;
var $dd934af551f44020$export$b8f5890fc79d6aca;
var $dd934af551f44020$export$60241385465d0a34;
var $dd934af551f44020$export$306c0aa65ff9ec16;
var $dd934af551f44020$export$7b286972b8d8ccbf;
var $dd934af551f44020$export$83d89fbfd8236492;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var $dd934af551f44020$var$l = Symbol.for("react.element"), $dd934af551f44020$var$n = Symbol.for("react.portal"), $dd934af551f44020$var$p = Symbol.for("react.fragment"), $dd934af551f44020$var$q = Symbol.for("react.strict_mode"), $dd934af551f44020$var$r = Symbol.for("react.profiler"), $dd934af551f44020$var$t = Symbol.for("react.provider"), $dd934af551f44020$var$u = Symbol.for("react.context"), $dd934af551f44020$var$v = Symbol.for("react.forward_ref"), $dd934af551f44020$var$w = Symbol.for("react.suspense"), $dd934af551f44020$var$x = Symbol.for("react.memo"), $dd934af551f44020$var$y = Symbol.for("react.lazy"), $dd934af551f44020$var$z = Symbol.iterator;
function $dd934af551f44020$var$A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $dd934af551f44020$var$z && a[$dd934af551f44020$var$z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $dd934af551f44020$var$B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, $dd934af551f44020$var$C = Object.assign, $dd934af551f44020$var$D = {};
function $dd934af551f44020$var$E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $dd934af551f44020$var$D;
    this.updater = e || $dd934af551f44020$var$B;
}
$dd934af551f44020$var$E.prototype.isReactComponent = {};
$dd934af551f44020$var$E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
$dd934af551f44020$var$E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function $dd934af551f44020$var$F() {}
$dd934af551f44020$var$F.prototype = $dd934af551f44020$var$E.prototype;
function $dd934af551f44020$var$G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $dd934af551f44020$var$D;
    this.updater = e || $dd934af551f44020$var$B;
}
var $dd934af551f44020$var$H = $dd934af551f44020$var$G.prototype = new $dd934af551f44020$var$F;
$dd934af551f44020$var$H.constructor = $dd934af551f44020$var$G;
$dd934af551f44020$var$C($dd934af551f44020$var$H, $dd934af551f44020$var$E.prototype);
$dd934af551f44020$var$H.isPureReactComponent = !0;
var $dd934af551f44020$var$I = Array.isArray, $dd934af551f44020$var$J = Object.prototype.hasOwnProperty, $dd934af551f44020$var$K = {
    current: null
}, $dd934af551f44020$var$L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $dd934af551f44020$var$M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)$dd934af551f44020$var$J.call(b, d) && !$dd934af551f44020$var$L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: $dd934af551f44020$var$l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: $dd934af551f44020$var$K.current
    };
}
function $dd934af551f44020$var$N(a, b) {
    return {
        $$typeof: $dd934af551f44020$var$l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function $dd934af551f44020$var$O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $dd934af551f44020$var$l;
}
function $dd934af551f44020$var$escape(a1) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a1.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var $dd934af551f44020$var$P = /\/+/g;
function $dd934af551f44020$var$Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? $dd934af551f44020$var$escape("" + a.key) : b.toString(36);
}
function $dd934af551f44020$var$R(a2, b, e, d, c) {
    var k = typeof a2;
    if ("undefined" === k || "boolean" === k) a2 = null;
    var h = !1;
    if (null === a2) h = !0;
    else switch(k){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a2.$$typeof){
                case $dd934af551f44020$var$l:
                case $dd934af551f44020$var$n:
                    h = !0;
            }
    }
    if (h) return h = a2, c = c(h), a2 = "" === d ? "." + $dd934af551f44020$var$Q(h, 0) : d, $dd934af551f44020$var$I(c) ? (e = "", null != a2 && (e = a2.replace($dd934af551f44020$var$P, "$&/") + "/"), $dd934af551f44020$var$R(c, b, e, "", function(a) {
        return a;
    })) : null != c && ($dd934af551f44020$var$O(c) && (c = $dd934af551f44020$var$N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace($dd934af551f44020$var$P, "$&/") + "/") + a2)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if ($dd934af551f44020$var$I(a2)) for(var g = 0; g < a2.length; g++){
        k = a2[g];
        var f = d + $dd934af551f44020$var$Q(k, g);
        h += $dd934af551f44020$var$R(k, b, e, f, c);
    }
    else if (f = $dd934af551f44020$var$A(a2), "function" === typeof f) for(a2 = f.call(a2), g = 0; !(k = a2.next()).done;)k = k.value, f = d + $dd934af551f44020$var$Q(k, g++), h += $dd934af551f44020$var$R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function $dd934af551f44020$var$S(a3, b, e) {
    if (null == a3) return a3;
    var d = [], c = 0;
    $dd934af551f44020$var$R(a3, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function $dd934af551f44020$var$T(a) {
    if (-1 === a._status) {
        var b1 = a._result;
        b1 = b1();
        b1.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b1);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var $dd934af551f44020$var$U = {
    current: null
}, $dd934af551f44020$var$V = {
    transition: null
}, $dd934af551f44020$var$W = {
    ReactCurrentDispatcher: $dd934af551f44020$var$U,
    ReactCurrentBatchConfig: $dd934af551f44020$var$V,
    ReactCurrentOwner: $dd934af551f44020$var$K
};
$dd934af551f44020$export$dca3b0875bd9a954 = {
    map: $dd934af551f44020$var$S,
    forEach: function(a, b, e) {
        $dd934af551f44020$var$S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        $dd934af551f44020$var$S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a4) {
        return $dd934af551f44020$var$S(a4, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!$dd934af551f44020$var$O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
$dd934af551f44020$export$16fa2f45be04daa8 = $dd934af551f44020$var$E;
$dd934af551f44020$export$ffb0004e005737fa = $dd934af551f44020$var$p;
$dd934af551f44020$export$e2c29f18771995cb = $dd934af551f44020$var$r;
$dd934af551f44020$export$221d75b3f55bb0bd = $dd934af551f44020$var$G;
$dd934af551f44020$export$5f8d39834fd61797 = $dd934af551f44020$var$q;
$dd934af551f44020$export$74bf444e3cd11ea5 = $dd934af551f44020$var$w;
$dd934af551f44020$export$ae55be85d98224ed = $dd934af551f44020$var$W;
$dd934af551f44020$export$e530037191fcd5d7 = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = $dd934af551f44020$var$C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = $dd934af551f44020$var$K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)$dd934af551f44020$var$J.call(b, f) && !$dd934af551f44020$var$L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: $dd934af551f44020$var$l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
$dd934af551f44020$export$fd42f52fd3ae1109 = function(a) {
    a = {
        $$typeof: $dd934af551f44020$var$u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: $dd934af551f44020$var$t,
        _context: a
    };
    return a.Consumer = a;
};
$dd934af551f44020$export$c8a8987d4410bf2d = $dd934af551f44020$var$M;
$dd934af551f44020$export$d38cd72104c1f0e9 = function(a) {
    var b = $dd934af551f44020$var$M.bind(null, a);
    b.type = a;
    return b;
};
$dd934af551f44020$export$7d1e3a5e95ceca43 = function() {
    return {
        current: null
    };
};
$dd934af551f44020$export$257a8862b851cb5b = function(a) {
    return {
        $$typeof: $dd934af551f44020$var$v,
        render: a
    };
};
$dd934af551f44020$export$a8257692ac88316c = $dd934af551f44020$var$O;
$dd934af551f44020$export$488013bae63b21da = function(a) {
    return {
        $$typeof: $dd934af551f44020$var$y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: $dd934af551f44020$var$T
    };
};
$dd934af551f44020$export$7c73462e0d25e514 = function(a, b) {
    return {
        $$typeof: $dd934af551f44020$var$x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
$dd934af551f44020$export$7568632d0d33d16d = function(a) {
    var b = $dd934af551f44020$var$V.transition;
    $dd934af551f44020$var$V.transition = {};
    try {
        a();
    } finally{
        $dd934af551f44020$var$V.transition = b;
    }
};
$dd934af551f44020$export$88948ce120ea2619 = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
$dd934af551f44020$export$35808ee640e87ca7 = function(a, b) {
    return $dd934af551f44020$var$U.current.useCallback(a, b);
};
$dd934af551f44020$export$fae74005e78b1a27 = function(a) {
    return $dd934af551f44020$var$U.current.useContext(a);
};
$dd934af551f44020$export$dc8fbce3eb94dc1e = function() {};
$dd934af551f44020$export$6a7bc4e911dc01cf = function(a) {
    return $dd934af551f44020$var$U.current.useDeferredValue(a);
};
$dd934af551f44020$export$6d9c69b0de29b591 = function(a, b) {
    return $dd934af551f44020$var$U.current.useEffect(a, b);
};
$dd934af551f44020$export$f680877a34711e37 = function() {
    return $dd934af551f44020$var$U.current.useId();
};
$dd934af551f44020$export$d5a552a76deda3c2 = function(a, b, e) {
    return $dd934af551f44020$var$U.current.useImperativeHandle(a, b, e);
};
$dd934af551f44020$export$aaabe4eda9ed9969 = function(a, b) {
    return $dd934af551f44020$var$U.current.useInsertionEffect(a, b);
};
$dd934af551f44020$export$e5c5a5f917a5871c = function(a, b) {
    return $dd934af551f44020$var$U.current.useLayoutEffect(a, b);
};
$dd934af551f44020$export$1538c33de8887b59 = function(a, b) {
    return $dd934af551f44020$var$U.current.useMemo(a, b);
};
$dd934af551f44020$export$13e3392192263954 = function(a, b, e) {
    return $dd934af551f44020$var$U.current.useReducer(a, b, e);
};
$dd934af551f44020$export$b8f5890fc79d6aca = function(a) {
    return $dd934af551f44020$var$U.current.useRef(a);
};
$dd934af551f44020$export$60241385465d0a34 = function(a) {
    return $dd934af551f44020$var$U.current.useState(a);
};
$dd934af551f44020$export$306c0aa65ff9ec16 = function(a, b, e) {
    return $dd934af551f44020$var$U.current.useSyncExternalStore(a, b, e);
};
$dd934af551f44020$export$7b286972b8d8ccbf = function() {
    return $dd934af551f44020$var$U.current.useTransition();
};
$dd934af551f44020$export$83d89fbfd8236492 = "18.1.0";

});



var $13f4c0370d7de649$exports = {};
'use strict';

$13f4c0370d7de649$exports = (parcelRequire("89wqa"));


parcelRequire("8NFma");
const $3625c1f6b5476aa9$var$SvgWebsiteIcon = (props)=>/*#__PURE__*/ $13f4c0370d7de649$exports.jsx("svg", {
        width: 64,
        height: 64,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ $13f4c0370d7de649$exports.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M32 58.875c14.843 0 26.875-12.032 26.875-26.875S46.843 5.125 32 5.125 5.125 17.157 5.125 32 17.157 58.875 32 58.875Zm4.073-11.676c8.394-2.249 13.376-10.877 11.126-19.272-2.249-8.394-10.877-13.375-19.272-11.126-8.394 2.249-13.375 10.877-11.126 19.272 2.249 8.394 10.877 13.376 19.272 11.126Z",
            fill: "#000"
        })
    })
;
var $3625c1f6b5476aa9$export$2e2bcd8739ae039 = $3625c1f6b5476aa9$var$SvgWebsiteIcon;

})();
//# sourceMappingURL=website-icon.5aa84285.js.map
