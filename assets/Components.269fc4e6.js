import{g as Ke,r as Ze,f as Ee,b as he,d as Fe,e as n,h as Ge,j as Ve,k as ee,o as q,l as qe,n as te,m as re,p as se,t as C,q as Ue,s as w,v as be,w as Ye,x as V,y as je,z as ke,A as Xe,B as Je,C as et,D as tt,E as ge,F as Ie,G as nt,H as rt,I as B,J as lt,K as Oe,L as P,M as Me,N as M,i as o,S as H,O as U,P as le,Q as x,R as p,c as y,a as b,T as ue,U as pe,V as O,W as D,X as Q,Y as _e,Z as xe,_,$ as N,a0 as A,a1 as we,a2 as ot,a3 as ie,a4 as k,a5 as G}from"./index.1176a5db.js";function fe(e){if(Ke()==="virtual"){const r=document.activeElement;Ze(()=>{document.activeElement===r&&document.contains(e)&&Ee(e)})}else Ee(e)}function it(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;const{display:r,visibility:l}=e.style;let d=r!=="none"&&l!=="hidden"&&l!=="collapse";if(d){if(!e.ownerDocument.defaultView)return d;const{getComputedStyle:v}=e.ownerDocument.defaultView,{display:i,visibility:s}=v(e);d=i!=="none"&&s!=="hidden"&&s!=="collapse"}return d}function at(e,r){return!e.hasAttribute("hidden")&&(e.nodeName==="DETAILS"&&r&&r.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function Re(e,r){return e.nodeName!=="#comment"&&it(e)&&at(e,r)&&(!e.parentElement||Re(e.parentElement,e))}const st=C("<span data-focus-scope-start hidden></span>"),ut=C("<span data-focus-scope-end hidden></span>"),ve=Ge();let $=null;const J=new Map;function ct(e){let r,l;const d=Fe(ve),v=Ve(()=>e.children);return ee(()=>{v(),d.parentScope();let s=r==null?void 0:r.nextSibling;const u=[];for(;s&&s!==l;)u.push(s),s=s.nextSibling;d.setScopeRef(u)}),ee(()=>{const s=d.scopeRef(),u=d.parentScope();J.set(s,u),q(()=>{(s===$||ce(s,$))&&(!u||J.has(u))&&($=u),J.delete(s)})}),mt(d.scopeRef,()=>!!e.contain),bt(d.scopeRef,()=>!!e.restoreFocus,()=>!!e.contain),qe(()=>{!e.autofocus||($=d.scopeRef(),requestAnimationFrame(()=>{$&&!F(document.activeElement,$)&&ze(d.scopeRef())}))})(d.scopeRef),[(()=>{const s=st.cloneNode(!0),u=r;return typeof u=="function"?te(u,s):r=s,s})(),re(v),(()=>{const s=ut.cloneNode(!0),u=l;return typeof u=="function"?te(u,s):l=s,s})()]}function Be(e){const[r,l]=he([]),d=Fe(ve),v=()=>{var u;return(u=d==null?void 0:d.scopeRef())!=null?u:null},i=dt(r),s={scopeRef:r,setScopeRef:l,parentScope:v,focusManager:i};return n(ve.Provider,{value:s,get children(){return n(ct,e)}})}function dt(e){return{focusNext(r={}){const l=e(),{from:d,tabbable:v,wrap:i}=r,s=d||document.activeElement,u=l[0].previousElementSibling,c=Y(X(l),{tabbable:v},l);c.currentNode=F(s,l)?s:u;let f=c.nextNode();return!f&&i&&(c.currentNode=u,f=c.nextNode()),f&&W(f,!0),f},focusPrevious(r={}){const l=e(),{from:d,tabbable:v,wrap:i}=r,s=d||document.activeElement,u=l[l.length-1].nextElementSibling,c=Y(X(l),{tabbable:v},l);c.currentNode=F(s,l)?s:u;let f=c.previousNode();return!f&&i&&(c.currentNode=u,f=c.previousNode()),f&&W(f,!0),f},focusFirst(r={}){const l=e(),{tabbable:d}=r,v=Y(X(l),{tabbable:d},l);v.currentNode=l[0].previousElementSibling;const i=v.nextNode();return i&&W(i,!0),i},focusLast(r={}){const l=e(),{tabbable:d}=r,v=Y(X(l),{tabbable:d},l);v.currentNode=l[l.length-1].nextElementSibling;const i=v.previousNode();return i&&W(i,!0),i}}}const Ae=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],gt=Ae.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",ft=[...Ae,'[tabindex]:not([tabindex="-1"]):not([disabled])'],vt=ft.join(':not([hidden]):not([tabindex="-1"]),');function X(e){return e[0].parentElement}function mt(e,r){let l,d;const v=u=>{const c=e();if(u.key!=="Tab"||u.altKey||u.ctrlKey||u.metaKey||c!==$)return;const f=document.activeElement;if(!F(f,c))return;const t=Y(X(c),{tabbable:!0},c);t.currentNode=f;let a=u.shiftKey?t.previousNode():t.nextNode();a||(u.shiftKey?t.currentNode=c[c.length-1].nextElementSibling:t.currentNode=c[0].previousElementSibling,a=u.shiftKey?t.previousNode():t.nextNode()),u.preventDefault(),a&&W(a,!0)},i=u=>{const c=e();!$||ce($,c)?($=c,l=u.target):c===$&&!Se(u.target,c)?l?l.focus():$&&ze($):c===$&&(l=u.target)},s=u=>{const c=e();d=requestAnimationFrame(()=>{c===$&&!Se(document.activeElement,c)&&($=c,l=u.target,l.focus())})};ee(()=>{const u=e();!r()||(document.addEventListener("keydown",v,!1),document.addEventListener("focusin",i,!1),u.forEach(c=>c.addEventListener("focusin",i,!1)),u.forEach(c=>c.addEventListener("focusout",s,!1)),q(()=>{document.removeEventListener("keydown",v,!1),document.removeEventListener("focusin",i,!1),u.forEach(c=>c.removeEventListener("focusin",i,!1)),u.forEach(c=>c.removeEventListener("focusout",s,!1))}))}),q(()=>cancelAnimationFrame(d))}function ht(e){for(const r of J.keys())if(F(e,r))return!0;return!1}function F(e,r){return r.some(l=>l.contains(e))}function Se(e,r){for(const l of J.keys())if((l===r||ce(r,l))&&F(e,l))return!0;return!1}function ce(e,r){if(!r)return!1;const l=J.get(r);return l?l===e?!0:ce(e,l):!1}function W(e,r=!1){if(e!=null&&!r)try{fe(e)}catch{}else if(e!=null)try{e.focus()}catch{}}function ze(e){const r=e[0].previousElementSibling,l=Y(X(e),{tabbable:!0},e);l.currentNode=r,W(l.nextNode())}function bt(e,r,l){const d=se(()=>typeof document<"u"?document.activeElement:null),v=i=>{if(i.key!=="Tab"||i.altKey||i.ctrlKey||i.metaKey)return;const s=document.activeElement;if(!F(s,e()))return;let u=d();const c=Y(document.body,{tabbable:!0});c.currentNode=s;let f=i.shiftKey?c.previousNode():c.nextNode();if((!document.body.contains(u)||u===document.body)&&(u=null),(!f||!F(f,e()))&&u){c.currentNode=u;do f=i.shiftKey?c.previousNode():c.nextNode();while(F(f,e()));i.preventDefault(),i.stopPropagation(),f?W(f,!0):ht(u)?W(u,!0):s.blur()}};ee(()=>{const i=d();!r()||(l()||document.addEventListener("keydown",v,!0),q(()=>{l()||document.removeEventListener("keydown",v,!0),r()&&i&&F(document.activeElement,e())&&requestAnimationFrame(()=>{document.body.contains(i)&&W(i)})}))})}function Y(e,r,l){const d=r!=null&&r.tabbable?vt:gt,v=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(i){var s;return(s=r==null?void 0:r.from)!=null&&s.contains(i)?NodeFilter.FILTER_REJECT:i.matches(d)&&Re(i)&&(!l||F(i,l))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return r!=null&&r.from&&(v.currentNode=r.from),v}function We(e,r){const[l]=Ue(),d=()=>e["aria-label"]?void 0:l(),v=w(se(()=>be(e,{labelable:!0}))),i=w(v,{tabIndex:-1,"aria-modal":!0,get role(){var u;return(u=e.role)!=null?u:"dialog"},get"aria-labelledby"(){return e["aria-labelledby"]||d()}}),s={get id(){return d()}};return Ye(()=>{let u;requestAnimationFrame(()=>{const c=r();c&&!c.contains(document.activeElement)&&(fe(c),u=window.setTimeout(()=>{document.activeElement===c&&(c.blur(),fe(c))},500))}),q(()=>clearTimeout(u))}),{dialogProps:i,titleProps:s}}const z=[];function _t(e,r){ee(()=>{V(e.isOpen)&&z.push(r),q(()=>{const t=z.indexOf(r);t>=0&&z.splice(t,1)})});const l=()=>{var t;z[z.length-1]()===r()&&((t=e.onClose)==null||t.call(e))},d=t=>{(!e.shouldCloseOnInteractOutside||e.shouldCloseOnInteractOutside(t.target))&&z[z.length-1]()===r()&&(t.stopPropagation(),t.preventDefault())},v=t=>{!V(e.isDismissable)||(!e.shouldCloseOnInteractOutside||e.shouldCloseOnInteractOutside(t.target))&&(z[z.length-1]()===r()&&(t.stopPropagation(),t.preventDefault()),l())},i=t=>{t.key==="Escape"&&!V(e.isKeyboardDismissDisabled)&&(t.stopPropagation(),t.preventDefault(),l())};je({onInteractOutside:v,onInteractOutsideStart:d},r);const{focusWithinProps:s}=ke({isDisabled:()=>!V(e.shouldCloseOnBlur),onFocusOut:t=>{var a;(!e.shouldCloseOnInteractOutside||e.shouldCloseOnInteractOutside(t.relatedTarget))&&((a=e.onClose)==null||a.call(e))}}),u=t=>{t.target===t.currentTarget&&t.preventDefault()};return{overlayProps:w({onKeyDown:i},s),underlayProps:{onPointerDown:u}}}function yt(e){const[r,l]=Xe({value:()=>V(e.isOpen),defaultValue:()=>!!V(e.defaultOpen),onChange:s=>{var u;return(u=e.onOpenChange)==null?void 0:u.call(e,s)}});return{isOpen:r,setOpen:l,open:()=>{l(!0)},close:()=>{l(!1)},toggle:()=>{l(!r())}}}function Lt(e,r=yt(e)){const l=Je();return{triggerProps:{get"aria-haspopup"(){switch(V(e.type)){case"menu":return!0;case"listbox":return"listbox";default:return}},get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return r.isOpen()?l:void 0}},overlayProps:{id:l},state:r}}const de=typeof window<"u"&&window.visualViewport,$t=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function He(e={}){ee(et(()=>V(e.isDisabled),r=>{r||(tt?q(Ct()):q(Pt()))}))}function Pt(){return ge([oe(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),oe(document.documentElement,"overflow","hidden")])}function Ct(){let e,r=0;const l=a=>{e=Ie(a.target),!(e===document.documentElement&&e===document.body)&&(r=a.changedTouches[0].pageY)},d=a=>{if(e===document.documentElement||e===document.body){a.preventDefault();return}const g=a.changedTouches[0].pageY,m=e.scrollTop,h=e.scrollHeight-e.clientHeight;(m<=0&&g>r||m>=h&&g<r)&&a.preventDefault(),r=g},v=a=>{const g=a.target;Ne(g)&&g!==document.activeElement&&(a.preventDefault(),g.style.transform="translateY(-2000px)",g.focus(),requestAnimationFrame(()=>{g.style.transform=""}))},i=a=>{const g=a.target;Ne(g)&&(g.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{g.style.transform="",de&&(de.height<window.innerHeight?requestAnimationFrame(()=>{Te(g)}):de.addEventListener("resize",()=>Te(g),{once:!0}))}))},s=()=>{window.scrollTo(0,0)},u=window.pageXOffset,c=window.pageYOffset,f=ge([oe(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),oe(document.documentElement,"overflow","hidden"),oe(document.body,"marginTop",`-${c}px`)]);window.scrollTo(0,0);const t=ge([ne(document,"touchstart",l,{passive:!1,capture:!0}),ne(document,"touchmove",d,{passive:!1,capture:!0}),ne(document,"touchend",v,{passive:!1,capture:!0}),ne(document,"focus",i,!0),ne(window,"scroll",s)]);return()=>{f(),t(),window.scrollTo(u,c)}}function oe(e,r,l){const d=e.style[r];return e.style[r]=l,()=>{e.style[r]=d}}function ne(e,r,l,d){return e.addEventListener(r,l,d),()=>{e.removeEventListener(r,l,d)}}function Te(e){const r=document.scrollingElement||document.documentElement;for(;e&&e!==r;){const l=Ie(e);if(l!==document.documentElement&&l!==document.body&&l!==e){const d=l.getBoundingClientRect().top,v=e.getBoundingClientRect().top;v>d+e.clientHeight&&(l.scrollTop+=v-d)}e=l.parentElement}}function Ne(e){return e instanceof HTMLInputElement&&!$t.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function Et(e={}){const r=se(()=>be(e,{labelable:!0}));return{separatorProps:w(r,{get role(){return e.elementType==="hr"?void 0:"separator"},get"aria-orientation"(){return e.orientation==="horizontal"?void 0:e.orientation}})}}function xt(e,r){e=w({type:"text",inputElementType:"input",isDisabled:!1,isRequired:!1,isReadOnly:!1},e);const{focusableProps:d}=nt(e,r),{labelProps:v,fieldProps:i,descriptionProps:s,errorMessageProps:u}=rt(e),c=w(se(()=>be(e,{labelable:!0}))),f=w({get type(){return e.inputElementType==="input"?e.type:void 0},get pattern(){return e.inputElementType==="input"?e.pattern:void 0},get disabled(){return e.isDisabled},get readOnly(){return e.isReadOnly},get"aria-required"(){return e.isRequired||void 0},get"aria-invalid"(){return e.validationState==="invalid"||void 0},get"aria-errormessage"(){return e["aria-errormessage"]},get"aria-activedescendant"(){return e["aria-activedescendant"]},get"aria-autocomplete"(){return e["aria-autocomplete"]},get"aria-haspopup"(){return e["aria-haspopup"]},get value(){return e.value},get defaultValue(){return e.value?void 0:e.defaultValue},get autocomplete(){return e.autocomplete},get maxLength(){return e.maxLength},get minLength(){return e.minLength},get name(){return e.name},get placeholder(){return e.placeholder},get inputMode(){return e.inputMode},onChange:a=>{var g;return(g=e.onChange)==null?void 0:g.call(e,a.target.value)},onCopy:a=>B(e.onCopy,a),onCut:a=>B(e.onCut,a),onPaste:a=>B(e.onPaste,a),onCompositionEnd:a=>B(e.onCompositionEnd,a),onCompositionStart:a=>B(e.onCompositionStart,a),onCompositionUpdate:a=>B(e.onCompositionUpdate,a),onSelect:a=>B(e.onSelect,a),onBeforeInput:a=>B(e.onBeforeInput,a),onInput:a=>B(e.onInput,a)},d,i),t=lt(c,f);return{labelProps:v,inputProps:t,descriptionProps:s,errorMessageProps:u}}const wt=C("<div><div><div></div><div></div></div><div><div><div></div><div></div></div></div></div>"),St=e=>{let r;const{dialogProps:l,titleProps:d}=We({role:"dialog"},()=>r),{modalProps:v}=Oe();return He(),n(pe,w(()=>{var i;return(i=e.underlayProps)!=null?i:{}},{get class(){return e.underlayProps?P.overlay:void 0},get children(){return n(Be,{contain:!0,restoreFocus:!0,autofocus:!0,get children(){const i=wt.cloneNode(!0),s=i.firstChild,u=s.firstChild,c=u.nextSibling,f=s.nextSibling,t=f.firstChild,a=t.firstChild,g=a.nextSibling,m=Me(h=>r=h,e.ref);return typeof m=="function"&&te(m,i),M(i,()=>w(e.dialogProps,l,v),!1,!0),M(u,d,!1,!0),o(u,()=>e.title),o(c,()=>e.children),o(f,n(H,{get when(){return!!e.errorCallout},get children(){return n(U,{get title(){var h;return(h=e.errorCallout)==null?void 0:h.title},get intent(){var h,S;return(S=(h=e.errorCallout)==null?void 0:h.intent)!=null?S:le.Danger},inline:!0,get children(){var h;return(h=e.errorCallout)==null?void 0:h.message}})}}),t),o(g,n(x,{get label(){var h;return(h=e.cancelButtonLabel)!=null?h:"Cancel"},onPress:()=>{var h;return(h=e.closeFn)==null?void 0:h.call(e)},get intent(){return p.Gray}}),null),o(g,n(x,w({get intent(){return p.Danger}},()=>e.mainButton)),null),y(h=>{const S=P.dialog,R=e.style,K=P.roundedContainer,Z=P.alertTitle,Le=P.alertContent,$e=P.footer,Pe=P.buttons,Ce=P.buttonGroup;return S!==h._v$&&b(i,h._v$=S),h._v$2=ue(i,R,h._v$2),K!==h._v$3&&b(s,h._v$3=K),Z!==h._v$4&&b(u,h._v$4=Z),Le!==h._v$5&&b(c,h._v$5=Le),$e!==h._v$6&&b(f,h._v$6=$e),Pe!==h._v$7&&b(t,h._v$7=Pe),Ce!==h._v$8&&b(g,h._v$8=Ce),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),i}})}}))},Tt=C("<div><div></div></div>"),Nt=C("<div><div><h3></h3></div></div>"),me=C("<div></div>"),ye=e=>{const r=e.icon||e.title||e.subtitle||e.tag;return(()=>{const l=Tt.cloneNode(!0),d=l.firstChild,v=e.ref;return typeof v=="function"?te(v,l):e.ref=l,o(l,r&&(()=>{const i=Nt.cloneNode(!0),s=i.firstChild,u=s.firstChild;return o(i,(()=>{const c=re(()=>!!e.icon,!0);return()=>c()&&(()=>{const f=me.cloneNode(!0);return o(f,()=>e.icon),y(t=>{const a=O.icon,g=typeof e.icon=="string";return a!==t._v$8&&b(f,t._v$8=a),g!==t._v$9&&f.classList.toggle("material-symbols-outlined",t._v$9=g),t},{_v$8:void 0,_v$9:void 0}),f})()})(),s),M(u,()=>e.titleProps,!1,!0),o(u,()=>e.title),o(s,(()=>{const c=re(()=>!!e.subtitle,!0);return()=>c()&&(()=>{const f=me.cloneNode(!0);return o(f,()=>e.subtitle),y(()=>b(f,O.subtitle)),f})()})(),null),o(i,(()=>{const c=re(()=>!!e.tag,!0);return()=>c()&&n(Q,{get label(){return typeof e.tag=="string"?e.tag:e.tag.label},get intentColor(){var f;return typeof e.tag=="string"?D.Outlined:(f=e.tag.intent)!=null?f:D.Secondary}})})(),null),y(c=>{const f=O.left,t=O.titleWrapper,a=O.title;return f!==c._v$5&&b(i,c._v$5=f),t!==c._v$6&&b(s,c._v$6=t),a!==c._v$7&&b(u,c._v$7=a),c},{_v$5:void 0,_v$6:void 0,_v$7:void 0}),i})(),d),o(d,()=>e.actions),y(i=>{const s=`${O.bar} ${e.class}`,u={[O.toolbar]:!r},c=e.style,f=O.actions;return s!==i._v$&&b(l,i._v$=s),i._v$2=_e(l,u,i._v$2),i._v$3=ue(l,c,i._v$3),f!==i._v$4&&b(d,i._v$4=f),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),l})()},I=e=>{const{separatorProps:r}=Et({orientation:"horizontal"});return(()=>{const l=me.cloneNode(!0);return M(l,r,!1,!1),y(d=>{const v=O.divider,i={[O.dividerInvisible]:e.invisible};return v!==d._v$10&&b(l,d._v$10=v),d._v$11=_e(l,i,d._v$11),d},{_v$10:void 0,_v$11:void 0}),l})()},Qt=C("<div><div></div></div>"),L=e=>(()=>{const r=Qt.cloneNode(!0),l=r.firstChild;return o(r,n(H,{get when(){return!!e.title||!!e.actions},get children(){return n(ye,{get title(){return e.title},get subtitle(){return e.subtitle},get tag(){return e.tag},get icon(){return e.icon},get actions(){return e.actions},get class(){return xe.headerBar}})}}),l),o(l,()=>e.children),y(()=>b(r,xe.card)),r})(),Dt=C("<div><div></div><div><div><div></div><div></div></div></div></div>"),Ft=e=>{let r;const{dialogProps:l,titleProps:d}=We({role:"dialog"},()=>r),{modalProps:v}=Oe();return He(),n(pe,w(()=>{var i;return(i=e.underlayProps)!=null?i:{}},{get class(){return e.underlayProps?P.overlay:void 0},get children(){return n(Be,{contain:!0,restoreFocus:!0,autofocus:!0,get children(){const i=Dt.cloneNode(!0),s=i.firstChild,u=s.nextSibling,c=u.firstChild,f=c.firstChild,t=f.nextSibling,a=Me(g=>r=g,e.ref);return typeof a=="function"&&te(a,i),M(i,()=>w(e.dialogProps,l,v),!1,!0),o(s,n(ye,{get icon(){return e.icon},get title(){return e.title},get actions(){var g;return[...(g=e.actions)!=null?g:[],n(I,{}),n(_,{icon:"close",label:"Close",get intent(){return N.Danger},onPress:()=>e.closeFn()})]},get class(){return P.headerBar},titleProps:d}),null),o(s,()=>e.children,null),o(u,n(H,{get when(){return!!e.errorCallout},get children(){return n(U,{get title(){var g;return(g=e.errorCallout)==null?void 0:g.title},get intent(){var g,m;return(m=(g=e.errorCallout)==null?void 0:g.intent)!=null?m:le.Danger},inline:!0,get children(){var g;return(g=e.errorCallout)==null?void 0:g.message}})}}),c),o(f,n(H,{get when(){return!!e.secondaryButton},get children(){return n(x,w({get intent(){return p.Gray}},()=>e.secondaryButton))}})),o(t,n(x,{get label(){var g;return(g=e.cancelButtonLabel)!=null?g:"Cancel"},onPress:()=>{var g;return(g=e.closeFn)==null?void 0:g.call(e)},get intent(){return p.Plain}}),null),o(t,n(x,w({get intent(){return p.Filled}},()=>e.mainButton)),null),y(g=>{const m=P.dialog,h=e.style,S=P.roundedContainer,R=`${P.footer} ${P.footerBar}`,K=P.buttons,Z=P.buttonGroup;return m!==g._v$&&b(i,g._v$=m),g._v$2=ue(i,h,g._v$2),S!==g._v$3&&b(s,g._v$3=S),R!==g._v$4&&b(u,g._v$4=R),K!==g._v$5&&b(c,g._v$5=K),Z!==g._v$6&&b(t,g._v$6=Z),g},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),i}})}}))},kt=C("<div>optional</div>"),Qe=C("<div></div>"),It=C("<div><label></label><input></div>"),j=e=>{let r;const{labelProps:l,inputProps:d,descriptionProps:v,errorMessageProps:i}=xt(e,()=>r),[s,u]=he(!1),{focusWithinProps:c}=ke({onFocusWithinChange:u});return(()=>{const f=It.cloneNode(!0),t=f.firstChild,a=t.nextSibling;M(f,c,!1,!0),o(f,n(H,{get when(){return!e.isRequired},keyed:!0,get children(){const m=kt.cloneNode(!0);return y(()=>b(m,A.optional)),m}}),t),M(t,l,!1,!0),o(t,()=>e.label);const g=r;return typeof g=="function"?te(g,a):r=a,M(a,d,!1,!1),o(f,n(H,{get when(){return e.errorMessage},keyed:!0,get children(){const m=Qe.cloneNode(!0);return M(m,i,!1,!0),o(m,()=>e.errorMessage),y(()=>b(m,A.errorMessage)),m}}),null),o(f,n(H,{get when(){return e.description},keyed:!0,get children(){const m=Qe.cloneNode(!0);return M(m,v,!1,!0),o(m,()=>e.description),y(()=>b(m,A.description)),m}}),null),y(m=>{const h=A.group,S={[A.disabled]:!!e.isDisabled,[A.error]:!!e.errorMessage,[A.focus]:s()},R=e.style,K=A.label,Z=A.input;return h!==m._v$&&b(f,m._v$=h),m._v$2=_e(f,S,m._v$2),m._v$3=ue(f,R,m._v$3),K!==m._v$4&&b(t,m._v$4=K),Z!==m._v$5&&b(a,m._v$5=Z),m},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),f})()},De=(e,r={})=>{const{triggerProps:l,overlayProps:d,state:v}=Lt({type:"dialog"}),{overlayProps:i,underlayProps:s}=_t({onClose:v.close,isOpen:v.isOpen,...r},()=>e);return{triggerProps:l,dialogProps:w(d,i),underlayProps:s,state:v}},Ot="_page_1mx7n_7",Mt="_horizontal_1mx7n_16",pt="_vertical_1mx7n_23",Rt="_header-bar_1mx7n_30",Bt="_title_1mx7n_36",At="_subtitle_1mx7n_43",E={page:Ot,horizontal:Mt,vertical:pt,"header-bar":"_header-bar_1mx7n_30",headerBar:Rt,title:Bt,subtitle:At},T=C("<div></div>"),ae=C("<div>This is the un-styled scrollable content. It's up to the developer to set the padding and the overflow, as needed.</div>"),zt=C("<strong>README.md</strong>"),Wt=C("<div><div></div><div></div></div>"),Ht=C('<div><a href="https://github.com/cedeber/premio"><svg xmlns="http://www.w3.org/2000/svg" width="175.39000000000001" height="35" viewBox="0 0 175.39000000000001 35"><rect class="svg__rect" x="0" y="0" width="83.76" height="35" fill="#C1D72F"></rect><rect class="svg__rect" x="81.76" y="0" width="93.63000000000001" height="35" fill="#5D9741"></rect><path class="svg__text" d="M13.97 18.13L13.97 18.13L13.97 17.46Q13.97 15.53 14.90 14.44Q15.82 13.35 17.48 13.35L17.48 13.35Q18.90 13.35 19.74 14.05Q20.58 14.76 20.75 16.08L20.75 16.08L19.30 16.08Q19.05 14.54 17.51 14.54L17.51 14.54Q16.51 14.54 16.00 15.26Q15.48 15.98 15.46 17.37L15.46 17.37L15.46 18.02Q15.46 19.40 16.04 20.17Q16.63 20.93 17.66 20.93L17.66 20.93Q18.80 20.93 19.28 20.42L19.28 20.42L19.28 18.75L17.52 18.75L17.52 17.62L20.76 17.62L20.76 20.89Q20.29 21.50 19.47 21.81Q18.65 22.12 17.61 22.12L17.61 22.12Q16.54 22.12 15.71 21.63Q14.89 21.14 14.44 20.24Q13.99 19.33 13.97 18.13ZM26.94 22L25.46 22L25.46 13.47L26.94 13.47L26.94 22ZM33.43 14.66L30.79 14.66L30.79 13.47L37.56 13.47L37.56 14.66L34.90 14.66L34.90 22L33.43 22L33.43 14.66ZM42.80 22L41.32 22L41.32 13.47L42.80 13.47L42.80 17.02L46.61 17.02L46.61 13.47L48.09 13.47L48.09 22L46.61 22L46.61 18.21L42.80 18.21L42.80 22ZM52.70 19.16L52.70 19.16L52.70 13.47L54.17 13.47L54.17 19.18Q54.17 20.03 54.61 20.48Q55.04 20.93 55.88 20.93L55.88 20.93Q57.59 20.93 57.59 19.13L57.59 19.13L57.59 13.47L59.07 13.47L59.07 19.17Q59.07 20.53 58.20 21.32Q57.33 22.12 55.88 22.12L55.88 22.12Q54.42 22.12 53.56 21.33Q52.70 20.55 52.70 19.16ZM66.75 22L63.64 22L63.64 13.47L66.56 13.47Q68.01 13.47 68.77 14.05Q69.52 14.63 69.52 15.78L69.52 15.78Q69.52 16.36 69.21 16.83Q68.89 17.30 68.28 17.56L68.28 17.56Q68.97 17.75 69.35 18.26Q69.73 18.78 69.73 19.51L69.73 19.51Q69.73 20.71 68.96 21.36Q68.19 22 66.75 22L66.75 22ZM65.12 18.15L65.12 20.82L66.77 20.82Q67.47 20.82 67.86 20.47Q68.25 20.13 68.25 19.51L68.25 19.51Q68.25 18.18 66.89 18.15L66.89 18.15L65.12 18.15ZM65.12 14.66L65.12 17.06L66.58 17.06Q67.27 17.06 67.66 16.75Q68.05 16.43 68.05 15.86L68.05 15.86Q68.05 15.23 67.69 14.95Q67.33 14.66 66.56 14.66L66.56 14.66L65.12 14.66Z" fill="#252423"></path><path class="svg__text" d="M98.33 22L95.95 22L95.95 13.60L99.79 13.60Q100.93 13.60 101.77 13.98Q102.61 14.35 103.07 15.06Q103.52 15.76 103.52 16.71L103.52 16.71Q103.52 17.66 103.07 18.35Q102.61 19.05 101.77 19.42Q100.93 19.80 99.79 19.80L99.79 19.80L98.33 19.80L98.33 22ZM98.33 15.47L98.33 17.93L99.65 17.93Q100.38 17.93 100.75 17.61Q101.12 17.29 101.12 16.71L101.12 16.71Q101.12 16.12 100.75 15.80Q100.38 15.47 99.65 15.47L99.65 15.47L98.33 15.47ZM110.65 22L108.28 22L108.28 13.60L112.12 13.60Q113.26 13.60 114.10 13.98Q114.94 14.35 115.40 15.06Q115.85 15.76 115.85 16.71L115.85 16.71Q115.85 17.62 115.42 18.30Q115.00 18.98 114.21 19.36L114.21 19.36L116.02 22L113.47 22L111.95 19.77L110.65 19.77L110.65 22ZM110.65 15.47L110.65 17.93L111.97 17.93Q112.71 17.93 113.08 17.61Q113.45 17.29 113.45 16.71L113.45 16.71Q113.45 16.12 113.08 15.79Q112.71 15.47 111.97 15.47L111.97 15.47L110.65 15.47ZM127.38 22L120.64 22L120.64 13.60L127.23 13.60L127.23 15.44L122.99 15.44L122.99 16.85L126.73 16.85L126.73 18.63L122.99 18.63L122.99 20.17L127.38 20.17L127.38 22ZM134.39 22L132.19 22L132.19 13.60L134.15 13.60L137.10 18.45L139.98 13.60L141.93 13.60L141.96 22L139.78 22L139.75 17.55L137.59 21.17L136.54 21.17L134.39 17.67L134.39 22ZM149.50 22L147.12 22L147.12 13.60L149.50 13.60L149.50 22ZM154.24 17.80L154.24 17.80Q154.24 16.55 154.85 15.55Q155.45 14.56 156.51 14.00Q157.58 13.43 158.91 13.43L158.91 13.43Q160.24 13.43 161.30 14.00Q162.36 14.56 162.97 15.55Q163.58 16.55 163.58 17.80L163.58 17.80Q163.58 19.05 162.97 20.04Q162.36 21.04 161.30 21.60Q160.24 22.17 158.91 22.17L158.91 22.17Q157.58 22.17 156.51 21.60Q155.45 21.04 154.85 20.04Q154.24 19.05 154.24 17.80ZM156.64 17.80L156.64 17.80Q156.64 18.51 156.94 19.05Q157.24 19.60 157.76 19.90Q158.27 20.20 158.91 20.20L158.91 20.20Q159.55 20.20 160.06 19.90Q160.58 19.60 160.88 19.05Q161.17 18.51 161.17 17.80L161.17 17.80Q161.17 17.09 160.88 16.54Q160.58 16 160.06 15.70Q159.55 15.40 158.91 15.40L158.91 15.40Q158.27 15.40 157.76 15.70Q157.24 16 156.94 16.54Q156.64 17.09 156.64 17.80Z" fill="#FFFFFF" x="94.76"></path></svg></a><h1>Premio Design System</h1><div>Condensed UI for Web application</div></div>'),Zt=()=>{let e;const r=De(e);let l;const d=De(e),[v,i]=he();return(()=>{const s=Ht.cloneNode(!0),u=s.firstChild,c=u.nextSibling,f=c.nextSibling;return u.style.setProperty("margin","0 auto 10px"),f.style.setProperty("margin-bottom","40px"),o(s,n(L,{title:"Progress Circle",subtitle:"Indeterminate or with percentage",icon:"autorenew",get children(){const t=T.cloneNode(!0);return t.style.setProperty("margin","10px"),o(t,n(we,{size:24}),null),o(t,n(we,{size:24,progress:62}),null),y(()=>b(t,E.horizontal)),t}}),null),o(s,n(L,{title:"Action Button",subtitle:"Will Mutate data",icon:"bolt",get children(){const t=T.cloneNode(!0);return t.style.setProperty("margin","10px"),o(t,n(x,{label:"Filled",onPress:()=>{console.log("click")}}),null),o(t,n(x,{label:"Filled",onPress:()=>{},progress:-1}),null),o(t,n(x,{label:"Tinted",get intent(){return p.Tinted},onPress:()=>{}}),null),o(t,n(x,{label:"Gray",get intent(){return p.Gray},onPress:()=>{}}),null),o(t,n(x,{label:"Outlined",get intent(){return p.Outlined},onPress:()=>{},icon:"arrow_right_alt",get iconPlacement(){return ot.Right}}),null),o(t,n(x,{label:"Plain",get intent(){return p.Plain},onPress:()=>{}}),null),o(t,n(I,{}),null),o(t,n(x,{label:"Danger",get intent(){return p.Danger},onPress:()=>{},icon:"delete"}),null),o(t,n(I,{}),null),o(t,n(x,{label:"Disabled",onPress:()=>{},isDisabled:!0}),null),y(()=>b(t,E.horizontal)),t}}),null),o(s,n(L,{title:"Trigger Button",subtitle:"Open Menus, Popovers, Dialogs...",icon:"menu",get children(){const t=T.cloneNode(!0);return t.style.setProperty("margin","10px"),o(t,n(_,{icon:"save",label:"Hello"}),null),o(t,n(_,{icon:"save",label:"Hello",progress:-1}),null),o(t,n(_,{icon:"save",label:"Hello",get intent(){return N.Tinted}}),null),o(t,n(_,{icon:"save",label:"Hello",get intent(){return N.Outlined}}),null),o(t,n(I,{}),null),o(t,n(_,{icon:"delete",label:"Delete",get intent(){return N.Danger}}),null),o(t,n(I,{}),null),o(t,n(_,{icon:"save",label:"Hello",isDisabled:!0}),null),y(()=>b(t,E.horizontal)),t}}),null),o(s,n(L,{title:"Trigger Button Group",subtitle:"Group Trigger Buttons",icon:"view_column",get children(){const t=T.cloneNode(!0);return t.style.setProperty("margin","10px"),o(t,n(ie,{get children(){return[n(_,{icon:"format_align_left",label:"Left"}),n(_,{icon:"format_align_center",label:"Middle"}),n(_,{icon:"format_align_right",label:"Right"})]}}),null),o(t,n(ie,{get children(){return[n(_,{icon:"format_bold",label:"Bold",get intent(){return N.Tinted}}),n(_,{icon:"format_italic",label:"Italic",get intent(){return N.Tinted}}),n(_,{icon:"format_underlined",label:"Underline"})]}}),null),y(()=>b(t,E.horizontal)),t}}),null),o(s,n(L,{title:"Header Bar",icon:"format_h1",subtitle:"Use me in Dialogs, Pages, Cards...",get children(){const t=T.cloneNode(!0);return t.style.setProperty("margin","10px"),o(t,n(ye,{title:"Lorem Elsass ipsum n\xFCdle bredele",subtitle:"Elsass frei",tag:"fotmi!",icon:"settings",get actions(){return[n(_,{icon:"save",label:"Save"}),n(_,{icon:"input",label:"Export"}),n(I,{}),n(_,{icon:"delete",label:"Delete",get intent(){return N.Danger}})]}})),t}}),null),o(s,n(L,{title:"Card",icon:"dashboard",subtitle:"Inception",get children(){const t=T.cloneNode(!0);return t.style.setProperty("padding","10px"),t.style.setProperty("background-color","#d6d3d1"),o(t,n(L,{title:"Header Bar",subtitle:"A subtitle",tag:"a tag",icon:"settings",get actions(){return[n(_,{icon:"save",label:"Save"}),n(_,{icon:"input",label:"Export"}),n(I,{}),n(_,{icon:"delete",label:"Delete",get intent(){return N.Danger}})]},get children(){const a=ae.cloneNode(!0);return a.style.setProperty("padding","10px"),a.style.setProperty("background-color","#fdf4ff"),a}})),t}}),null),o(s,n(L,{title:"Toolbar",icon:"brush",subtitle:"HeaderBar with actions only",get children(){const t=T.cloneNode(!0);return t.style.setProperty("margin","0"),t.style.setProperty("padding","10px"),t.style.setProperty("background-color","#d6d3d1"),o(t,n(L,{get actions(){return[n(ie,{get children(){return[n(_,{icon:"format_align_left",label:"Left"}),n(_,{icon:"format_align_center",label:"Middle"}),n(_,{icon:"format_align_right",label:"Right"})]}}),n(ie,{get children(){return[n(_,{icon:"format_bold",label:"Bold",get intent(){return N.Tinted}}),n(_,{icon:"format_italic",label:"Italic",get intent(){return N.Tinted}}),n(_,{icon:"format_underlined",label:"Underline"})]}})]},get children(){const a=ae.cloneNode(!0);return a.style.setProperty("padding","10px"),a.style.setProperty("background-color","#fdf4ff"),a}}),null),o(t,n(L,{get actions(){return[n(_,{icon:"format_align_left",label:"Left"}),n(_,{icon:"format_align_center",label:"Middle"}),n(_,{icon:"format_align_right",label:"Right"}),n(I,{}),n(_,{icon:"format_bold",label:"Bold",get intent(){return N.Tinted}}),n(_,{icon:"format_italic",label:"Italic",get intent(){return N.Tinted}}),n(_,{icon:"format_underlined",label:"Underline"})]},get children(){const a=ae.cloneNode(!0);return a.style.setProperty("padding","10px"),a.style.setProperty("background-color","#fdf4ff"),a}}),null),y(()=>b(t,E.horizontal)),t}}),null),o(s,n(L,{title:"Dialog",icon:"quickreply",subtitle:"A Card with Buttons",get children(){const t=T.cloneNode(!0);return t.style.setProperty("margin","10px"),o(t,n(x,{label:"Open Dialog",get onPress(){return d.state.open},get domProps(){return d.triggerProps}}),null),o(t,n(H,{get when(){return d.state.isOpen()},get children(){return n(Ft,{get closeFn(){return d.state.close},get underlayProps(){return d.underlayProps},get dialogProps(){return d.dialogProps},style:{width:"480px"},title:"Sign in to Premio",icon:"face",get actions(){return[n(_,{icon:"install_mobile",label:"Download the application"})]},ref(a){const g=l;typeof g=="function"?g(a):l=a},mainButton:{label:"Sign in",icon:"login"},secondaryButton:{label:"Create an account",icon:"person_add"},get children(){const a=ae.cloneNode(!0);return a.style.setProperty("padding","10px"),a.style.setProperty("background-color","#fdf4ff"),a}})}}),null),t}}),null),o(s,n(L,{title:"Alert Dialog",icon:"exclamation",subtitle:"Show a dangerous Alert",get children(){const t=T.cloneNode(!0);return t.style.setProperty("margin","10px"),o(t,n(x,{label:"Open AlertDialog",get onPress(){return r.state.open},get domProps(){return r.triggerProps}}),null),o(t,n(H,{get when(){return r.state.isOpen()},get children(){return n(St,{title:"Delete file",closeFn:()=>{r.state.close(),i(void 0)},mainButton:{label:"Yes, delete that file",icon:"delete",onPress:()=>i("This file doesn't exist.")},get dialogProps(){return r.dialogProps},get underlayProps(){return r.underlayProps},get errorCallout(){return re(()=>!!v(),!0)()?{title:v()}:void 0},ref(a){const g=e;typeof g=="function"?g(a):e=a},get children(){return["Are you sure you want to delete ",zt.cloneNode(!0),"?"]}})}}),null),t}}),null),o(s,n(L,{title:"Tag",icon:"sell",get children(){const t=T.cloneNode(!0);return t.style.setProperty("margin","10px"),o(t,n(Q,{label:"Primary",get intentColor(){return D.Primary}}),null),o(t,n(Q,{label:"Secondary",get intentColor(){return D.Secondary}}),null),o(t,n(Q,{label:"Success",get intentColor(){return D.Success}}),null),o(t,n(Q,{label:"Warning",get intentColor(){return D.Warning}}),null),o(t,n(Q,{label:"Danger",get intentColor(){return D.Danger}}),null),o(t,n(I,{}),null),o(t,n(Q,{label:"Fuchsia",get intentColor(){return D.Fuchsia}}),null),o(t,n(Q,{label:"Indigo",get intentColor(){return D.Indigo}}),null),o(t,n(Q,{label:"Lime",get intentColor(){return D.Lime}}),null),o(t,n(I,{}),null),o(t,n(Q,{label:"Outlined",get intentColor(){return D.Outlined}}),null),o(t,n(Q,{label:"Personalized",intentColor:"#abcdef"}),null),y(()=>b(t,E.horizontal)),t}}),null),o(s,n(L,{title:"Colored Label",subtitle:"Use in Table",icon:"sell",get children(){const t=Wt.cloneNode(!0),a=t.firstChild,g=a.nextSibling;return t.style.setProperty("margin","10px"),t.style.setProperty("align-items","self-start"),o(a,n(k,{label:"Primary",get intentColor(){return G.Primary}}),null),o(a,n(k,{label:"Secondary",get intentColor(){return G.Secondary}}),null),o(a,n(k,{label:"Success",get intentColor(){return G.Success}}),null),o(a,n(k,{label:"Warning",get intentColor(){return G.Warning}}),null),o(a,n(k,{label:"Danger",get intentColor(){return G.Danger}}),null),o(g,n(k,{label:"Fuchsia",get intentColor(){return G.Fuchsia}}),null),o(g,n(k,{label:"Indigo",get intentColor(){return G.Indigo}}),null),o(g,n(k,{label:"Lime",get intentColor(){return G.Lime}}),null),o(g,n(k,{label:"Personalized",intentColor:"#abcdef"}),null),o(g,n(k,{label:"White",intentColor:"white"}),null),y(m=>{const h=E.horizontal,S=E.vertical,R=E.vertical;return h!==m._v$&&b(t,m._v$=h),S!==m._v$2&&b(a,m._v$2=S),R!==m._v$3&&b(g,m._v$3=R),m},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t}}),null),o(s,n(L,{title:"Callout",icon:"sticky_note_2",subtitle:"Info Messages",get children(){return[(()=>{const t=T.cloneNode(!0);return t.style.setProperty("margin","10px"),o(t,n(U,{title:"Info",style:{"max-width":"320px"},children:"Chulia Roberstau id turpis, habitant knepfle Carola morbi jetz gehts los kuglopf gal non Gal ! yeuh. Pfourtz ! Christkindelsm\xE4rik leo auctor, leo ac geht's sit und Richard Schirmeck vulputate ftomi!"}),null),o(t,n(U,{title:"Success",get intent(){return le.Success},style:{"max-width":"320px"},children:"Chulia Roberstau id turpis, habitant knepfle Carola morbi jetz gehts los kuglopf gal non Gal ! yeuh. Pfourtz ! Christkindelsm\xE4rik leo auctor, leo ac geht's sit und Richard Schirmeck vulputate ftomi!"}),null),o(t,n(U,{title:"Warning",get intent(){return le.Warning},style:{"max-width":"320px"},children:"Chulia Roberstau id turpis, habitant knepfle Carola morbi jetz gehts los kuglopf gal non Gal ! yeuh. Pfourtz ! Christkindelsm\xE4rik leo auctor, leo ac geht's sit und Richard Schirmeck vulputate ftomi!"}),null),o(t,n(U,{title:"Danger",get intent(){return le.Danger},style:{"max-width":"320px"},children:"Chulia Roberstau id turpis, habitant knepfle Carola morbi jetz gehts los kuglopf gal non Gal ! yeuh. Pfourtz ! Christkindelsm\xE4rik leo auctor, leo ac geht's sit und Richard Schirmeck vulputate ftomi!"}),null),y(()=>b(t,E.horizontal)),t})(),(()=>{const t=T.cloneNode(!0);return t.style.setProperty("margin","10px"),o(t,n(U,{title:"Inline Callout.",style:{"max-width":"320px"},inline:!0,children:"Chulia Roberstau id turpis, habitant knepfle Carola morbi jetz gehts los kuglopf gal non Gal ! yeuh. Pfourtz ! Christkindelsm\xE4rik leo auctor, leo ac geht's sit und Richard Schirmeck vulputate ftomi!"})),y(()=>b(t,E.horizontal)),t})()]}}),null),o(s,n(L,{title:"Text Field",icon:"title",subtitle:"Form",get children(){const t=T.cloneNode(!0);return t.style.setProperty("margin","10px auto"),t.style.setProperty("max-width","380px"),o(t,n(j,{label:"Label"}),null),o(t,n(j,{label:"Label",placeholder:"Placeholder"}),null),o(t,n(j,{label:"Label",description:"This is a description of the field."}),null),o(t,n(j,{label:"Label",errorMessage:"This is an error message."}),null),o(t,n(j,{label:"Label",placeholder:"Placeholder",description:"This is a description of the field.",errorMessage:"This is an error message."}),null),o(t,n(j,{label:"Disabled",placeholder:"Placeholder",description:"This is a description of the field.",errorMessage:"This is an error message.",isDisabled:!0}),null),y(()=>b(t,E.vertical)),t}}),null),y(t=>{const a=E.page,g=E.title,m=E.subtitle;return a!==t._v$4&&b(s,t._v$4=a),g!==t._v$5&&b(c,t._v$5=g),m!==t._v$6&&b(f,t._v$6=m),t},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),s})()};export{Zt as default};
