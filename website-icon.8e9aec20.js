(()=>{function e(a,b,c,d){Object.defineProperty(a,b,{get:c,set:d,enumerable:!0,configurable:!0})}var b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},f={},g={},a=b.parcelRequire2398;null==a&&((a=function(a){if(a in f)return f[a].exports;if(a in g){var d=g[a];delete g[a];var b={id:a,exports:{}};return f[a]=b,d.call(b.exports,b,b.exports),b.exports}var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(a,b){g[a]=b},b.parcelRequire2398=a),a.register("89wqa",function(b,j){"use strict";e(b.exports,"Fragment",()=>d,a=>d=a),e(b.exports,"jsx",()=>f,a=>f=a),e(b.exports,"jsxs",()=>g,a=>g=a);var d,f,g,h=a("8NFma"),k=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,m=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function c(c,a,f){var b,d={},e=null,g=null;for(b in void 0!==f&&(e=""+f),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(g=a.ref),a)l.call(a,b)&&!n.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:g,props:d,_owner:m.current}}d=i,f=c,g=c}),a.register("8NFma",function(b,c){"use strict";b.exports=a("j1rj6")}),a.register("j1rj6",function(a,$){"use strict";e(a.exports,"Children",()=>g,a=>g=a),e(a.exports,"Component",()=>h,a=>h=a),e(a.exports,"Fragment",()=>i,a=>i=a),e(a.exports,"Profiler",()=>j,a=>j=a),e(a.exports,"PureComponent",()=>k,a=>k=a),e(a.exports,"StrictMode",()=>l,a=>l=a),e(a.exports,"Suspense",()=>m,a=>m=a),e(a.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>n,a=>n=a),e(a.exports,"cloneElement",()=>o,a=>o=a),e(a.exports,"createContext",()=>p,a=>p=a),e(a.exports,"createElement",()=>q,a=>q=a),e(a.exports,"createFactory",()=>r,a=>r=a),e(a.exports,"createRef",()=>s,a=>s=a),e(a.exports,"forwardRef",()=>t,a=>t=a),e(a.exports,"isValidElement",()=>u,a=>u=a),e(a.exports,"lazy",()=>v,a=>v=a),e(a.exports,"memo",()=>w,a=>w=a),e(a.exports,"startTransition",()=>x,a=>x=a),e(a.exports,"unstable_act",()=>y,a=>y=a),e(a.exports,"useCallback",()=>z,a=>z=a),e(a.exports,"useContext",()=>A,a=>A=a),e(a.exports,"useDebugValue",()=>B,a=>B=a),e(a.exports,"useDeferredValue",()=>C,a=>C=a),e(a.exports,"useEffect",()=>D,a=>D=a),e(a.exports,"useId",()=>E,a=>E=a),e(a.exports,"useImperativeHandle",()=>F,a=>F=a),e(a.exports,"useInsertionEffect",()=>G,a=>G=a),e(a.exports,"useLayoutEffect",()=>H,a=>H=a),e(a.exports,"useMemo",()=>I,a=>I=a),e(a.exports,"useReducer",()=>J,a=>J=a),e(a.exports,"useRef",()=>K,a=>K=a),e(a.exports,"useState",()=>L,a=>L=a),e(a.exports,"useSyncExternalStore",()=>M,a=>M=a),e(a.exports,"useTransition",()=>N,a=>N=a),e(a.exports,"version",()=>O,a=>O=a);var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,_=Symbol.for("react.element"),aa=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),ab=Symbol.for("react.provider"),ac=Symbol.for("react.context"),ad=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),ae=Symbol.for("react.memo"),af=Symbol.for("react.lazy"),ag=Symbol.iterator,ah={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,ai={};function b(a,b,c){this.props=a,this.context=b,this.refs=ai,this.updater=c||ah}function f(){}function c(a,b,c){this.props=a,this.context=b,this.refs=ai,this.updater=c||ah}b.prototype.isReactComponent={},b.prototype.setState=function(a,b){if("object"!=typeof a&&"function"!=typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")},b.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")},f.prototype=b.prototype;var d=c.prototype=new f;d.constructor=c,T(d,b.prototype),d.isPureReactComponent=!0;var aj=Array.isArray,ak=Object.prototype.hasOwnProperty,U={current:null},al={key:!0,ref:!0,__self:!0,__source:!0};function V(e,b,j){var a,c={},g=null,h=null;if(null!=b)for(a in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)ak.call(b,a)&&!al.hasOwnProperty(a)&&(c[a]=b[a]);var d=arguments.length-2;if(1===d)c.children=j;else if(1<d){for(var i=Array(d),f=0;f<d;f++)i[f]=arguments[f+2];c.children=i}if(e&&e.defaultProps)for(a in d=e.defaultProps)void 0===c[a]&&(c[a]=d[a]);return{$$typeof:_,type:e,key:g,ref:h,props:c,_owner:U.current}}function W(a){return"object"==typeof a&&null!==a&&a.$$typeof===_}var am=/\/+/g;function an(a,c){var b,d;return"object"==typeof a&&null!==a&&null!=a.key?(b=""+a.key,d={"=":"=0",":":"=2"},"$"+b.replace(/[=:]/g,function(a){return d[a]})):c.toString(36)}function ao(a,f,g,e,b){var j,l,h,d=typeof a;("undefined"===d||"boolean"===d)&&(a=null);var c=!1;if(null===a)c=!0;else switch(d){case"string":case"number":c=!0;break;case"object":switch(a.$$typeof){case _:case aa:c=!0}}if(c)return b=b(c=a),a=""===e?"."+an(c,0):e,aj(b)?(g="",null!=a&&(g=a.replace(am,"$&/")+"/"),ao(b,f,g,"",function(a){return a})):null!=b&&(W(b)&&(b=(j=b,l=g+(!b.key||c&&c.key===b.key?"":(""+b.key).replace(am,"$&/")+"/")+a,{$$typeof:_,type:j.type,key:l,ref:j.ref,props:j.props,_owner:j._owner})),f.push(b)),1;if(c=0,e=""===e?".":e+":",aj(a))for(var i=0;i<a.length;i++){var k=e+an(d=a[i],i);c+=ao(d,f,g,k,b)}else if("function"==typeof(k=null===(h=a)||"object"!=typeof h?null:"function"==typeof(h=ag&&h[ag]||h["@@iterator"])?h:null))for(a=k.call(a),i=0;!(d=a.next()).done;)k=e+an(d=d.value,i++),c+=ao(d,f,g,k,b);else if("object"===d)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(f=String(a))?"object with keys {"+Object.keys(a).join(", ")+"}":f)+"). If you meant to render a collection of children, use an array instead.");return c}function X(a,c,d){if(null==a)return a;var b=[],e=0;return ao(a,b,"","",function(a){return c.call(d,a,e++)}),b}function ap(a){if(-1===a._status){var b=a._result;(b=b()).then(function(b){(0===a._status|| -1===a._status)&&(a._status=1,a._result=b)},function(b){(0===a._status|| -1===a._status)&&(a._status=2,a._result=b)}),-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result}var Y={current:null},Z={transition:null};g={map:X,forEach:function(a,c,b){X(a,function(){c.apply(this,arguments)},b)},count:function(a){var b=0;return X(a,function(){b++}),b},toArray:function(a){return X(a,function(a){return a})||[]},only:function(a){if(!W(a))throw Error("React.Children.only expected to receive a single React element child.");return a}},h=b,i=P,j=R,k=c,l=Q,m=S,n={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:Z,ReactCurrentOwner:U},o=function(a,b,j){if(null==a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=T({},a.props),g=a.key,h=a.ref,i=a._owner;if(null!=b){if(void 0!==b.ref&&(h=b.ref,i=U.current),void 0!==b.key&&(g=""+b.key),a.type&&a.type.defaultProps)var c=a.type.defaultProps;for(e in b)ak.call(b,e)&&!al.hasOwnProperty(e)&&(d[e]=void 0===b[e]&& void 0!==c?c[e]:b[e])}var e=arguments.length-2;if(1===e)d.children=j;else if(1<e){c=Array(e);for(var f=0;f<e;f++)c[f]=arguments[f+2];d.children=c}return{$$typeof:_,type:a.type,key:g,ref:h,props:d,_owner:i}},p=function(a){return(a={$$typeof:ac,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:ab,_context:a},a.Consumer=a},q=V,r=function(a){var b=V.bind(null,a);return b.type=a,b},s=function(){return{current:null}},t=function(a){return{$$typeof:ad,render:a}},u=W,v=function(a){return{$$typeof:af,_payload:{_status:-1,_result:a},_init:ap}},w=function(b,a){return{$$typeof:ae,type:b,compare:void 0===a?null:a}},x=function(a){var b=Z.transition;Z.transition={};try{a()}finally{Z.transition=b}},y=function(){throw Error("act(...) is not supported in production builds of React.")},z=function(a,b){return Y.current.useCallback(a,b)},A=function(a){return Y.current.useContext(a)},B=function(){},C=function(a){return Y.current.useDeferredValue(a)},D=function(a,b){return Y.current.useEffect(a,b)},E=function(){return Y.current.useId()},F=function(a,b,c){return Y.current.useImperativeHandle(a,b,c)},G=function(a,b){return Y.current.useInsertionEffect(a,b)},H=function(a,b){return Y.current.useLayoutEffect(a,b)},I=function(a,b){return Y.current.useMemo(a,b)},J=function(a,b,c){return Y.current.useReducer(a,b,c)},K=function(a){return Y.current.useRef(a)},L=function(a){return Y.current.useState(a)},M=function(a,b,c){return Y.current.useSyncExternalStore(a,b,c)},N=function(){return Y.current.useTransition()},O="18.0.0-fc46dba67-20220329"});var c={};"use strict";c=a("89wqa"),a("8NFma");let d=a=>c.jsx("svg",{width:64,height:64,fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 58.875c14.843 0 26.875-12.032 26.875-26.875S46.843 5.125 32 5.125 5.125 17.157 5.125 32 17.157 58.875 32 58.875Zm4.073-11.676c8.394-2.249 13.376-10.877 11.126-19.272-2.249-8.394-10.877-13.375-19.272-11.126-8.394 2.249-13.375 10.877-11.126 19.272 2.249 8.394 10.877 13.376 19.272 11.126Z",fill:"#000"})});var h=d})()
//# sourceMappingURL=website-icon.8e9aec20.js.map
