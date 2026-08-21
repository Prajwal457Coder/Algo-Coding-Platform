var K2=Object.defineProperty;var W2=(e,t,r)=>t in e?K2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ek=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Of=(e,t,r)=>W2(e,typeof t!="symbol"?t+"":t,r);var jO=ek(($O,eo)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function mh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zf={exports:{}},fs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function tk(){if(P0)return fs;P0=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(i,s,o){var c=null;if(o!==void 0&&(c=""+o),s.key!==void 0&&(c=""+s.key),"key"in s){o={};for(var d in s)d!=="key"&&(o[d]=s[d])}else o=s;return s=o.ref,{$$typeof:e,type:i,key:c,ref:s!==void 0?s:null,props:o}}return fs.Fragment=t,fs.jsx=r,fs.jsxs=r,fs}var H0;function nk(){return H0||(H0=1,zf.exports=tk()),zf.exports}var f=nk(),Df={exports:{}},Ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function rk(){if(q0)return Ie;q0=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function v(x){return x===null||typeof x!="object"?null:(x=b&&x[b]||x["@@iterator"],typeof x=="function"?x:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,A={};function C(x,j,$){this.props=x,this.context=j,this.refs=A,this.updater=$||_}C.prototype.isReactComponent={},C.prototype.setState=function(x,j){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,j,"setState")},C.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function E(){}E.prototype=C.prototype;function T(x,j,$){this.props=x,this.context=j,this.refs=A,this.updater=$||_}var R=T.prototype=new E;R.constructor=T,k(R,C.prototype),R.isPureReactComponent=!0;var Z=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},M=Object.prototype.hasOwnProperty;function P(x,j,$,S,X,ue){return $=ue.ref,{$$typeof:e,type:x,key:j,ref:$!==void 0?$:null,props:ue}}function ae(x,j){return P(x.type,j,void 0,void 0,void 0,x.props)}function K(x){return typeof x=="object"&&x!==null&&x.$$typeof===e}function z(x){var j={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function($){return j[$]})}var le=/\/+/g;function q(x,j){return typeof x=="object"&&x!==null&&x.key!=null?z(""+x.key):j.toString(36)}function se(){}function de(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(se,se):(x.status="pending",x.then(function(j){x.status==="pending"&&(x.status="fulfilled",x.value=j)},function(j){x.status==="pending"&&(x.status="rejected",x.reason=j)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function Y(x,j,$,S,X){var ue=typeof x;(ue==="undefined"||ue==="boolean")&&(x=null);var ne=!1;if(x===null)ne=!0;else switch(ue){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(x.$$typeof){case e:case t:ne=!0;break;case y:return ne=x._init,Y(ne(x._payload),j,$,S,X)}}if(ne)return X=X(x),ne=S===""?"."+q(x,0):S,Z(X)?($="",ne!=null&&($=ne.replace(le,"$&/")+"/"),Y(X,j,$,"",function(Ae){return Ae})):X!=null&&(K(X)&&(X=ae(X,$+(X.key==null||x&&x.key===X.key?"":(""+X.key).replace(le,"$&/")+"/")+ne)),j.push(X)),1;ne=0;var pe=S===""?".":S+":";if(Z(x))for(var ge=0;ge<x.length;ge++)S=x[ge],ue=pe+q(S,ge),ne+=Y(S,j,$,ue,X);else if(ge=v(x),typeof ge=="function")for(x=ge.call(x),ge=0;!(S=x.next()).done;)S=S.value,ue=pe+q(S,ge++),ne+=Y(S,j,$,ue,X);else if(ue==="object"){if(typeof x.then=="function")return Y(de(x),j,$,S,X);throw j=String(x),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ne}function U(x,j,$){if(x==null)return x;var S=[],X=0;return Y(x,S,"","",function(ue){return j.call($,ue,X++)}),S}function F(x){if(x._status===-1){var j=x._result;j=j(),j.then(function($){(x._status===0||x._status===-1)&&(x._status=1,x._result=$)},function($){(x._status===0||x._status===-1)&&(x._status=2,x._result=$)}),x._status===-1&&(x._status=0,x._result=j)}if(x._status===1)return x._result.default;throw x._result}var te=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ve(){}return Ie.Children={map:U,forEach:function(x,j,$){U(x,function(){j.apply(this,arguments)},$)},count:function(x){var j=0;return U(x,function(){j++}),j},toArray:function(x){return U(x,function(j){return j})||[]},only:function(x){if(!K(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ie.Component=C,Ie.Fragment=r,Ie.Profiler=s,Ie.PureComponent=T,Ie.StrictMode=i,Ie.Suspense=p,Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Ie.__COMPILER_RUNTIME={__proto__:null,c:function(x){return D.H.useMemoCache(x)}},Ie.cache=function(x){return function(){return x.apply(null,arguments)}},Ie.cloneElement=function(x,j,$){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var S=k({},x.props),X=x.key,ue=void 0;if(j!=null)for(ne in j.ref!==void 0&&(ue=void 0),j.key!==void 0&&(X=""+j.key),j)!M.call(j,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&j.ref===void 0||(S[ne]=j[ne]);var ne=arguments.length-2;if(ne===1)S.children=$;else if(1<ne){for(var pe=Array(ne),ge=0;ge<ne;ge++)pe[ge]=arguments[ge+2];S.children=pe}return P(x.type,X,void 0,void 0,ue,S)},Ie.createContext=function(x){return x={$$typeof:c,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:o,_context:x},x},Ie.createElement=function(x,j,$){var S,X={},ue=null;if(j!=null)for(S in j.key!==void 0&&(ue=""+j.key),j)M.call(j,S)&&S!=="key"&&S!=="__self"&&S!=="__source"&&(X[S]=j[S]);var ne=arguments.length-2;if(ne===1)X.children=$;else if(1<ne){for(var pe=Array(ne),ge=0;ge<ne;ge++)pe[ge]=arguments[ge+2];X.children=pe}if(x&&x.defaultProps)for(S in ne=x.defaultProps,ne)X[S]===void 0&&(X[S]=ne[S]);return P(x,ue,void 0,void 0,null,X)},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(x){return{$$typeof:d,render:x}},Ie.isValidElement=K,Ie.lazy=function(x){return{$$typeof:y,_payload:{_status:-1,_result:x},_init:F}},Ie.memo=function(x,j){return{$$typeof:h,type:x,compare:j===void 0?null:j}},Ie.startTransition=function(x){var j=D.T,$={};D.T=$;try{var S=x(),X=D.S;X!==null&&X($,S),typeof S=="object"&&S!==null&&typeof S.then=="function"&&S.then(ve,te)}catch(ue){te(ue)}finally{D.T=j}},Ie.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Ie.use=function(x){return D.H.use(x)},Ie.useActionState=function(x,j,$){return D.H.useActionState(x,j,$)},Ie.useCallback=function(x,j){return D.H.useCallback(x,j)},Ie.useContext=function(x){return D.H.useContext(x)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(x,j){return D.H.useDeferredValue(x,j)},Ie.useEffect=function(x,j,$){var S=D.H;if(typeof $=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return S.useEffect(x,j)},Ie.useId=function(){return D.H.useId()},Ie.useImperativeHandle=function(x,j,$){return D.H.useImperativeHandle(x,j,$)},Ie.useInsertionEffect=function(x,j){return D.H.useInsertionEffect(x,j)},Ie.useLayoutEffect=function(x,j){return D.H.useLayoutEffect(x,j)},Ie.useMemo=function(x,j){return D.H.useMemo(x,j)},Ie.useOptimistic=function(x,j){return D.H.useOptimistic(x,j)},Ie.useReducer=function(x,j,$){return D.H.useReducer(x,j,$)},Ie.useRef=function(x){return D.H.useRef(x)},Ie.useState=function(x){return D.H.useState(x)},Ie.useSyncExternalStore=function(x,j,$){return D.H.useSyncExternalStore(x,j,$)},Ie.useTransition=function(){return D.H.useTransition()},Ie.version="19.1.0",Ie}var I0;function ec(){return I0||(I0=1,Df.exports=rk()),Df.exports}var O=ec();const Ke=mh(O);var Lf={exports:{}},ms={},Bf={exports:{}},Uf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function ak(){return $0||($0=1,function(e){function t(U,F){var te=U.length;U.push(F);e:for(;0<te;){var ve=te-1>>>1,x=U[ve];if(0<s(x,F))U[ve]=F,U[te]=x,te=ve;else break e}}function r(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var F=U[0],te=U.pop();if(te!==F){U[0]=te;e:for(var ve=0,x=U.length,j=x>>>1;ve<j;){var $=2*(ve+1)-1,S=U[$],X=$+1,ue=U[X];if(0>s(S,te))X<x&&0>s(ue,S)?(U[ve]=ue,U[X]=te,ve=X):(U[ve]=S,U[$]=te,ve=$);else if(X<x&&0>s(ue,te))U[ve]=ue,U[X]=te,ve=X;else break e}}return F}function s(U,F){var te=U.sortIndex-F.sortIndex;return te!==0?te:U.id-F.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var c=Date,d=c.now();e.unstable_now=function(){return c.now()-d}}var p=[],h=[],y=1,b=null,v=3,_=!1,k=!1,A=!1,C=!1,E=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function Z(U){for(var F=r(h);F!==null;){if(F.callback===null)i(h);else if(F.startTime<=U)i(h),F.sortIndex=F.expirationTime,t(p,F);else break;F=r(h)}}function D(U){if(A=!1,Z(U),!k)if(r(p)!==null)k=!0,M||(M=!0,q());else{var F=r(h);F!==null&&Y(D,F.startTime-U)}}var M=!1,P=-1,ae=5,K=-1;function z(){return C?!0:!(e.unstable_now()-K<ae)}function le(){if(C=!1,M){var U=e.unstable_now();K=U;var F=!0;try{e:{k=!1,A&&(A=!1,T(P),P=-1),_=!0;var te=v;try{t:{for(Z(U),b=r(p);b!==null&&!(b.expirationTime>U&&z());){var ve=b.callback;if(typeof ve=="function"){b.callback=null,v=b.priorityLevel;var x=ve(b.expirationTime<=U);if(U=e.unstable_now(),typeof x=="function"){b.callback=x,Z(U),F=!0;break t}b===r(p)&&i(p),Z(U)}else i(p);b=r(p)}if(b!==null)F=!0;else{var j=r(h);j!==null&&Y(D,j.startTime-U),F=!1}}break e}finally{b=null,v=te,_=!1}F=void 0}}finally{F?q():M=!1}}}var q;if(typeof R=="function")q=function(){R(le)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,de=se.port2;se.port1.onmessage=le,q=function(){de.postMessage(null)}}else q=function(){E(le,0)};function Y(U,F){P=E(function(){U(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(U){switch(v){case 1:case 2:case 3:var F=3;break;default:F=v}var te=v;v=F;try{return U()}finally{v=te}},e.unstable_requestPaint=function(){C=!0},e.unstable_runWithPriority=function(U,F){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var te=v;v=U;try{return F()}finally{v=te}},e.unstable_scheduleCallback=function(U,F,te){var ve=e.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ve+te:ve):te=ve,U){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=te+x,U={id:y++,callback:F,priorityLevel:U,startTime:te,expirationTime:x,sortIndex:-1},te>ve?(U.sortIndex=te,t(h,U),r(p)===null&&U===r(h)&&(A?(T(P),P=-1):A=!0,Y(D,te-ve))):(U.sortIndex=x,t(p,U),k||_||(k=!0,M||(M=!0,q()))),U},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(U){var F=v;return function(){var te=v;v=F;try{return U.apply(this,arguments)}finally{v=te}}}}(Uf)),Uf}var Y0;function ik(){return Y0||(Y0=1,Bf.exports=ak()),Bf.exports}var Ff={exports:{}},tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function lk(){if(Z0)return tn;Z0=1;var e=ec();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var i={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function o(p,h,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:b==null?null:""+b,children:p,containerInfo:h,implementation:y}}var c=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,tn.createPortal=function(p,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return o(p,h,null,y)},tn.flushSync=function(p){var h=c.T,y=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=h,i.p=y,i.d.f()}},tn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(p,h))},tn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},tn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var y=h.as,b=d(y,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,_=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?i.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:_}):y==="script"&&i.d.X(p,{crossOrigin:b,integrity:v,fetchPriority:_,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},tn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=d(h.as,h.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(p)},tn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,b=d(y,h.crossOrigin);i.d.L(p,y,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},tn.preloadModule=function(p,h){if(typeof p=="string")if(h){var y=d(h.as,h.crossOrigin);i.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(p)},tn.requestFormReset=function(p){i.d.r(p)},tn.unstable_batchedUpdates=function(p,h){return p(h)},tn.useFormState=function(p,h,y){return c.H.useFormState(p,h,y)},tn.useFormStatus=function(){return c.H.useHostTransitionStatus()},tn.version="19.1.0",tn}var G0;function sk(){if(G0)return Ff.exports;G0=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Ff.exports=lk(),Ff.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function ok(){if(J0)return ms;J0=1;var e=ik(),t=ec(),r=sk();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function o(n){var a=n,l=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(l=a.return),n=a.return;while(n)}return a.tag===3?l:null}function c(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(o(n)!==n)throw Error(i(188))}function p(n){var a=n.alternate;if(!a){if(a=o(n),a===null)throw Error(i(188));return a!==n?null:n}for(var l=n,u=a;;){var m=l.return;if(m===null)break;var g=m.alternate;if(g===null){if(u=m.return,u!==null){l=u;continue}break}if(m.child===g.child){for(g=m.child;g;){if(g===l)return d(m),n;if(g===u)return d(m),a;g=g.sibling}throw Error(i(188))}if(l.return!==u.return)l=m,u=g;else{for(var w=!1,N=m.child;N;){if(N===l){w=!0,l=m,u=g;break}if(N===u){w=!0,u=m,l=g;break}N=N.sibling}if(!w){for(N=g.child;N;){if(N===l){w=!0,l=g,u=m;break}if(N===u){w=!0,u=g,l=m;break}N=N.sibling}if(!w)throw Error(i(189))}}if(l.alternate!==u)throw Error(i(190))}if(l.tag!==3)throw Error(i(188));return l.stateNode.current===l?n:a}function h(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=h(n),a!==null)return a;n=n.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),R=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),z=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=le&&n[le]||n["@@iterator"],typeof n=="function"?n:null)}var se=Symbol.for("react.client.reference");function de(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===se?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case C:return"Profiler";case A:return"StrictMode";case D:return"Suspense";case M:return"SuspenseList";case K:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case _:return"Portal";case R:return(n.displayName||"Context")+".Provider";case T:return(n._context.displayName||"Context")+".Consumer";case Z:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case P:return a=n.displayName||null,a!==null?a:de(n.type)||"Memo";case ae:a=n._payload,n=n._init;try{return de(n(a))}catch{}}return null}var Y=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ve=[],x=-1;function j(n){return{current:n}}function $(n){0>x||(n.current=ve[x],ve[x]=null,x--)}function S(n,a){x++,ve[x]=n.current,n.current=a}var X=j(null),ue=j(null),ne=j(null),pe=j(null);function ge(n,a){switch(S(ne,a),S(ue,n),S(X,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?p0(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=p0(a),n=g0(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}$(X),S(X,n)}function Ae(){$(X),$(ue),$(ne)}function De(n){n.memoizedState!==null&&S(pe,n);var a=X.current,l=g0(a,n.type);a!==l&&(S(ue,n),S(X,l))}function ke(n){ue.current===n&&($(X),$(ue)),pe.current===n&&($(pe),ss._currentValue=te)}var Me=Object.prototype.hasOwnProperty,Ue=e.unstable_scheduleCallback,Ce=e.unstable_cancelCallback,xt=e.unstable_shouldYield,At=e.unstable_requestPaint,it=e.unstable_now,Gt=e.unstable_getCurrentPriorityLevel,Pt=e.unstable_ImmediatePriority,B=e.unstable_UserBlockingPriority,Q=e.unstable_NormalPriority,oe=e.unstable_LowPriority,we=e.unstable_IdlePriority,xe=e.log,ye=e.unstable_setDisableYieldValue,H=null,ie=null;function _e(n){if(typeof xe=="function"&&ye(n),ie&&typeof ie.setStrictMode=="function")try{ie.setStrictMode(H,n)}catch{}}var Ne=Math.clz32?Math.clz32:jn,Ge=Math.log,gt=Math.LN2;function jn(n){return n>>>=0,n===0?32:31-(Ge(n)/gt|0)|0}var zt=256,fn=4194304;function sn(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Tt(n,a,l){var u=n.pendingLanes;if(u===0)return 0;var m=0,g=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var N=u&134217727;return N!==0?(u=N&~g,u!==0?m=sn(u):(w&=N,w!==0?m=sn(w):l||(l=N&~n,l!==0&&(m=sn(l))))):(N=u&~g,N!==0?m=sn(N):w!==0?m=sn(w):l||(l=u&~n,l!==0&&(m=sn(l)))),m===0?0:a!==0&&a!==m&&(a&g)===0&&(g=m&-m,l=a&-a,g>=l||g===32&&(l&4194048)!==0)?a:m}function mn(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function hn(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kh(){var n=zt;return zt<<=1,(zt&4194048)===0&&(zt=256),n}function Wh(){var n=fn;return fn<<=1,(fn&62914560)===0&&(fn=4194304),n}function _c(n){for(var a=[],l=0;31>l;l++)a.push(n);return a}function yl(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function V_(n,a,l,u,m,g){var w=n.pendingLanes;n.pendingLanes=l,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=l,n.entangledLanes&=l,n.errorRecoveryDisabledLanes&=l,n.shellSuspendCounter=0;var N=n.entanglements,L=n.expirationTimes,J=n.hiddenUpdates;for(l=w&~l;0<l;){var ce=31-Ne(l),me=1<<ce;N[ce]=0,L[ce]=-1;var W=J[ce];if(W!==null)for(J[ce]=null,ce=0;ce<W.length;ce++){var ee=W[ce];ee!==null&&(ee.lane&=-536870913)}l&=~me}u!==0&&ep(n,u,0),g!==0&&m===0&&n.tag!==0&&(n.suspendedLanes|=g&~(w&~a))}function ep(n,a,l){n.pendingLanes|=a,n.suspendedLanes&=~a;var u=31-Ne(a);n.entangledLanes|=a,n.entanglements[u]=n.entanglements[u]|1073741824|l&4194090}function tp(n,a){var l=n.entangledLanes|=a;for(n=n.entanglements;l;){var u=31-Ne(l),m=1<<u;m&a|n[u]&a&&(n[u]|=a),l&=~m}}function wc(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function kc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function np(){var n=F.p;return n!==0?n:(n=window.event,n===void 0?32:D0(n.type))}function P_(n,a){var l=F.p;try{return F.p=n,a()}finally{F.p=l}}var Zr=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Zr,pn="__reactProps$"+Zr,di="__reactContainer$"+Zr,Sc="__reactEvents$"+Zr,H_="__reactListeners$"+Zr,q_="__reactHandles$"+Zr,rp="__reactResources$"+Zr,bl="__reactMarker$"+Zr;function jc(n){delete n[Wt],delete n[pn],delete n[Sc],delete n[H_],delete n[q_]}function fi(n){var a=n[Wt];if(a)return a;for(var l=n.parentNode;l;){if(a=l[di]||l[Wt]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(n=v0(n);n!==null;){if(l=n[Wt])return l;n=v0(n)}return a}n=l,l=n.parentNode}return null}function mi(n){if(n=n[Wt]||n[di]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function xl(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function hi(n){var a=n[rp];return a||(a=n[rp]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function It(n){n[bl]=!0}var ap=new Set,ip={};function Oa(n,a){pi(n,a),pi(n+"Capture",a)}function pi(n,a){for(ip[n]=a,n=0;n<a.length;n++)ap.add(a[n])}var I_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lp={},sp={};function $_(n){return Me.call(sp,n)?!0:Me.call(lp,n)?!1:I_.test(n)?sp[n]=!0:(lp[n]=!0,!1)}function to(n,a,l){if($_(a))if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+l)}}function no(n,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+l)}}function kr(n,a,l,u){if(u===null)n.removeAttribute(l);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(l);return}n.setAttributeNS(a,l,""+u)}}var Nc,op;function gi(n){if(Nc===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);Nc=a&&a[1]||"",op=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nc+n+op}var Ec=!1;function Cc(n,a){if(!n||Ec)return"";Ec=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(ee){var W=ee}Reflect.construct(n,[],me)}else{try{me.call()}catch(ee){W=ee}n.call(me.prototype)}}else{try{throw Error()}catch(ee){W=ee}(me=n())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(ee){if(ee&&W&&typeof ee.stack=="string")return[ee.stack,W.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var m=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");m&&m.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),w=g[0],N=g[1];if(w&&N){var L=w.split(`
`),J=N.split(`
`);for(m=u=0;u<L.length&&!L[u].includes("DetermineComponentFrameRoot");)u++;for(;m<J.length&&!J[m].includes("DetermineComponentFrameRoot");)m++;if(u===L.length||m===J.length)for(u=L.length-1,m=J.length-1;1<=u&&0<=m&&L[u]!==J[m];)m--;for(;1<=u&&0<=m;u--,m--)if(L[u]!==J[m]){if(u!==1||m!==1)do if(u--,m--,0>m||L[u]!==J[m]){var ce=`
`+L[u].replace(" at new "," at ");return n.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",n.displayName)),ce}while(1<=u&&0<=m);break}}}finally{Ec=!1,Error.prepareStackTrace=l}return(l=n?n.displayName||n.name:"")?gi(l):""}function Y_(n){switch(n.tag){case 26:case 27:case 5:return gi(n.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 15:return Cc(n.type,!1);case 11:return Cc(n.type.render,!1);case 1:return Cc(n.type,!0);case 31:return gi("Activity");default:return""}}function up(n){try{var a="";do a+=Y_(n),n=n.return;while(n);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Pn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function cp(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Z_(n){var a=cp(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),u=""+n[a];if(!n.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,g=l.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return m.call(this)},set:function(w){u=""+w,g.call(this,w)}}),Object.defineProperty(n,a,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function ro(n){n._valueTracker||(n._valueTracker=Z_(n))}function dp(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var l=a.getValue(),u="";return n&&(u=cp(n)?n.checked?"true":"false":n.value),n=u,n!==l?(a.setValue(n),!0):!1}function ao(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var G_=/[\n"\\]/g;function Hn(n){return n.replace(G_,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ac(n,a,l,u,m,g,w,N){n.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.type=w:n.removeAttribute("type"),a!=null?w==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+Pn(a)):n.value!==""+Pn(a)&&(n.value=""+Pn(a)):w!=="submit"&&w!=="reset"||n.removeAttribute("value"),a!=null?Tc(n,w,Pn(a)):l!=null?Tc(n,w,Pn(l)):u!=null&&n.removeAttribute("value"),m==null&&g!=null&&(n.defaultChecked=!!g),m!=null&&(n.checked=m&&typeof m!="function"&&typeof m!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?n.name=""+Pn(N):n.removeAttribute("name")}function fp(n,a,l,u,m,g,w,N){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;l=l!=null?""+Pn(l):"",a=a!=null?""+Pn(a):l,N||a===n.value||(n.value=a),n.defaultValue=a}u=u??m,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=N?n.checked:!!u,n.defaultChecked=!!u,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.name=w)}function Tc(n,a,l){a==="number"&&ao(n.ownerDocument)===n||n.defaultValue===""+l||(n.defaultValue=""+l)}function yi(n,a,l,u){if(n=n.options,a){a={};for(var m=0;m<l.length;m++)a["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=a.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&u&&(n[l].defaultSelected=!0)}else{for(l=""+Pn(l),a=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,u&&(n[m].defaultSelected=!0);return}a!==null||n[m].disabled||(a=n[m])}a!==null&&(a.selected=!0)}}function mp(n,a,l){if(a!=null&&(a=""+Pn(a),a!==n.value&&(n.value=a),l==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=l!=null?""+Pn(l):""}function hp(n,a,l,u){if(a==null){if(u!=null){if(l!=null)throw Error(i(92));if(Y(u)){if(1<u.length)throw Error(i(93));u=u[0]}l=u}l==null&&(l=""),a=l}l=Pn(a),n.defaultValue=l,u=n.textContent,u===l&&u!==""&&u!==null&&(n.value=u)}function bi(n,a){if(a){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=a;return}}n.textContent=a}var J_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pp(n,a,l){var u=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?u?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":u?n.setProperty(a,l):typeof l!="number"||l===0||J_.has(a)?a==="float"?n.cssFloat=l:n[a]=(""+l).trim():n[a]=l+"px"}function gp(n,a,l){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,l!=null){for(var u in l)!l.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var m in a)u=a[m],a.hasOwnProperty(m)&&l[m]!==u&&pp(n,m,u)}else for(var g in a)a.hasOwnProperty(g)&&pp(n,g,a[g])}function Mc(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Q_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function io(n){return Q_.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Rc=null;function Oc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xi=null,vi=null;function yp(n){var a=mi(n);if(a&&(n=a.stateNode)){var l=n[pn]||null;e:switch(n=a.stateNode,a.type){case"input":if(Ac(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Hn(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var u=l[a];if(u!==n&&u.form===n.form){var m=u[pn]||null;if(!m)throw Error(i(90));Ac(u,m.value,m.defaultValue,m.defaultValue,m.checked,m.defaultChecked,m.type,m.name)}}for(a=0;a<l.length;a++)u=l[a],u.form===n.form&&dp(u)}break e;case"textarea":mp(n,l.value,l.defaultValue);break e;case"select":a=l.value,a!=null&&yi(n,!!l.multiple,a,!1)}}}var zc=!1;function bp(n,a,l){if(zc)return n(a,l);zc=!0;try{var u=n(a);return u}finally{if(zc=!1,(xi!==null||vi!==null)&&($o(),xi&&(a=xi,n=vi,vi=xi=null,yp(a),n)))for(a=0;a<n.length;a++)yp(n[a])}}function vl(n,a){var l=n.stateNode;if(l===null)return null;var u=l[pn]||null;if(u===null)return null;l=u[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(i(231,a,typeof l));return l}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=!1;if(Sr)try{var _l={};Object.defineProperty(_l,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",_l,_l),window.removeEventListener("test",_l,_l)}catch{Dc=!1}var Gr=null,Lc=null,lo=null;function xp(){if(lo)return lo;var n,a=Lc,l=a.length,u,m="value"in Gr?Gr.value:Gr.textContent,g=m.length;for(n=0;n<l&&a[n]===m[n];n++);var w=l-n;for(u=1;u<=w&&a[l-u]===m[g-u];u++);return lo=m.slice(n,1<u?1-u:void 0)}function so(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function oo(){return!0}function vp(){return!1}function gn(n){function a(l,u,m,g,w){this._reactName=l,this._targetInst=m,this.type=u,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(l=n[N],this[N]=l?l(g):g[N]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?oo:vp,this.isPropagationStopped=vp,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),a}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=gn(za),wl=y({},za,{view:0,detail:0}),K_=gn(wl),Bc,Uc,kl,co=y({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==kl&&(kl&&n.type==="mousemove"?(Bc=n.screenX-kl.screenX,Uc=n.screenY-kl.screenY):Uc=Bc=0,kl=n),Bc)},movementY:function(n){return"movementY"in n?n.movementY:Uc}}),_p=gn(co),W_=y({},co,{dataTransfer:0}),ew=gn(W_),tw=y({},wl,{relatedTarget:0}),Fc=gn(tw),nw=y({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),rw=gn(nw),aw=y({},za,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),iw=gn(aw),lw=y({},za,{data:0}),wp=gn(lw),sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ow={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cw(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=uw[n])?!!a[n]:!1}function Vc(){return cw}var dw=y({},wl,{key:function(n){if(n.key){var a=sw[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=so(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ow[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(n){return n.type==="keypress"?so(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?so(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fw=gn(dw),mw=y({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=gn(mw),hw=y({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),pw=gn(hw),gw=y({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),yw=gn(gw),bw=y({},co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xw=gn(bw),vw=y({},za,{newState:0,oldState:0}),_w=gn(vw),ww=[9,13,27,32],Pc=Sr&&"CompositionEvent"in window,Sl=null;Sr&&"documentMode"in document&&(Sl=document.documentMode);var kw=Sr&&"TextEvent"in window&&!Sl,Sp=Sr&&(!Pc||Sl&&8<Sl&&11>=Sl),jp=" ",Np=!1;function Ep(n,a){switch(n){case"keyup":return ww.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _i=!1;function Sw(n,a){switch(n){case"compositionend":return Cp(a);case"keypress":return a.which!==32?null:(Np=!0,jp);case"textInput":return n=a.data,n===jp&&Np?null:n;default:return null}}function jw(n,a){if(_i)return n==="compositionend"||!Pc&&Ep(n,a)?(n=xp(),lo=Lc=Gr=null,_i=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Sp&&a.locale!=="ko"?null:a.data;default:return null}}var Nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!Nw[n.type]:a==="textarea"}function Tp(n,a,l,u){xi?vi?vi.push(u):vi=[u]:xi=u,a=Qo(a,"onChange"),0<a.length&&(l=new uo("onChange","change",null,l,u),n.push({event:l,listeners:a}))}var jl=null,Nl=null;function Ew(n){c0(n,0)}function fo(n){var a=xl(n);if(dp(a))return n}function Mp(n,a){if(n==="change")return a}var Rp=!1;if(Sr){var Hc;if(Sr){var qc="oninput"in document;if(!qc){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),qc=typeof Op.oninput=="function"}Hc=qc}else Hc=!1;Rp=Hc&&(!document.documentMode||9<document.documentMode)}function zp(){jl&&(jl.detachEvent("onpropertychange",Dp),Nl=jl=null)}function Dp(n){if(n.propertyName==="value"&&fo(Nl)){var a=[];Tp(a,Nl,n,Oc(n)),bp(Ew,a)}}function Cw(n,a,l){n==="focusin"?(zp(),jl=a,Nl=l,jl.attachEvent("onpropertychange",Dp)):n==="focusout"&&zp()}function Aw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fo(Nl)}function Tw(n,a){if(n==="click")return fo(a)}function Mw(n,a){if(n==="input"||n==="change")return fo(a)}function Rw(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var Nn=typeof Object.is=="function"?Object.is:Rw;function El(n,a){if(Nn(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var l=Object.keys(n),u=Object.keys(a);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var m=l[u];if(!Me.call(a,m)||!Nn(n[m],a[m]))return!1}return!0}function Lp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Bp(n,a){var l=Lp(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=a&&u>=a)return{node:l,offset:a-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Lp(l)}}function Up(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?Up(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function Fp(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=ao(n.document);a instanceof n.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)n=a.contentWindow;else break;a=ao(n.document)}return a}function Ic(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var Ow=Sr&&"documentMode"in document&&11>=document.documentMode,wi=null,$c=null,Cl=null,Yc=!1;function Vp(n,a,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Yc||wi==null||wi!==ao(u)||(u=wi,"selectionStart"in u&&Ic(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Cl&&El(Cl,u)||(Cl=u,u=Qo($c,"onSelect"),0<u.length&&(a=new uo("onSelect","select",null,a,l),n.push({event:a,listeners:u}),a.target=wi)))}function Da(n,a){var l={};return l[n.toLowerCase()]=a.toLowerCase(),l["Webkit"+n]="webkit"+a,l["Moz"+n]="moz"+a,l}var ki={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Zc={},Pp={};Sr&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function La(n){if(Zc[n])return Zc[n];if(!ki[n])return n;var a=ki[n],l;for(l in a)if(a.hasOwnProperty(l)&&l in Pp)return Zc[n]=a[l];return n}var Hp=La("animationend"),qp=La("animationiteration"),Ip=La("animationstart"),zw=La("transitionrun"),Dw=La("transitionstart"),Lw=La("transitioncancel"),$p=La("transitionend"),Yp=new Map,Gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gc.push("scrollEnd");function er(n,a){Yp.set(n,a),Oa(a,[n])}var Zp=new WeakMap;function qn(n,a){if(typeof n=="object"&&n!==null){var l=Zp.get(n);return l!==void 0?l:(a={value:n,source:a,stack:up(a)},Zp.set(n,a),a)}return{value:n,source:a,stack:up(a)}}var In=[],Si=0,Jc=0;function mo(){for(var n=Si,a=Jc=Si=0;a<n;){var l=In[a];In[a++]=null;var u=In[a];In[a++]=null;var m=In[a];In[a++]=null;var g=In[a];if(In[a++]=null,u!==null&&m!==null){var w=u.pending;w===null?m.next=m:(m.next=w.next,w.next=m),u.pending=m}g!==0&&Gp(l,m,g)}}function ho(n,a,l,u){In[Si++]=n,In[Si++]=a,In[Si++]=l,In[Si++]=u,Jc|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Xc(n,a,l,u){return ho(n,a,l,u),po(n)}function ji(n,a){return ho(n,null,null,a),po(n)}function Gp(n,a,l){n.lanes|=l;var u=n.alternate;u!==null&&(u.lanes|=l);for(var m=!1,g=n.return;g!==null;)g.childLanes|=l,u=g.alternate,u!==null&&(u.childLanes|=l),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(m=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,m&&a!==null&&(m=31-Ne(l),n=g.hiddenUpdates,u=n[m],u===null?n[m]=[a]:u.push(a),a.lane=l|536870912),g):null}function po(n){if(50<Wl)throw Wl=0,nf=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Ni={};function Bw(n,a,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(n,a,l,u){return new Bw(n,a,l,u)}function Qc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jr(n,a){var l=n.alternate;return l===null?(l=En(n.tag,a,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=a,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&65011712,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,a=n.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l.refCleanup=n.refCleanup,l}function Jp(n,a){n.flags&=65011714;var l=n.alternate;return l===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=l.childLanes,n.lanes=l.lanes,n.child=l.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=l.memoizedProps,n.memoizedState=l.memoizedState,n.updateQueue=l.updateQueue,n.type=l.type,a=l.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function go(n,a,l,u,m,g){var w=0;if(u=n,typeof n=="function")Qc(n)&&(w=1);else if(typeof n=="string")w=F2(n,l,X.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case K:return n=En(31,l,a,m),n.elementType=K,n.lanes=g,n;case k:return Ba(l.children,m,g,a);case A:w=8,m|=24;break;case C:return n=En(12,l,a,m|2),n.elementType=C,n.lanes=g,n;case D:return n=En(13,l,a,m),n.elementType=D,n.lanes=g,n;case M:return n=En(19,l,a,m),n.elementType=M,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case E:case R:w=10;break e;case T:w=9;break e;case Z:w=11;break e;case P:w=14;break e;case ae:w=16,u=null;break e}w=29,l=Error(i(130,n===null?"null":typeof n,"")),u=null}return a=En(w,l,a,m),a.elementType=n,a.type=u,a.lanes=g,a}function Ba(n,a,l,u){return n=En(7,n,u,a),n.lanes=l,n}function Kc(n,a,l){return n=En(6,n,null,a),n.lanes=l,n}function Wc(n,a,l){return a=En(4,n.children!==null?n.children:[],n.key,a),a.lanes=l,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Ei=[],Ci=0,yo=null,bo=0,$n=[],Yn=0,Ua=null,Nr=1,Er="";function Fa(n,a){Ei[Ci++]=bo,Ei[Ci++]=yo,yo=n,bo=a}function Xp(n,a,l){$n[Yn++]=Nr,$n[Yn++]=Er,$n[Yn++]=Ua,Ua=n;var u=Nr;n=Er;var m=32-Ne(u)-1;u&=~(1<<m),l+=1;var g=32-Ne(a)+m;if(30<g){var w=m-m%5;g=(u&(1<<w)-1).toString(32),u>>=w,m-=w,Nr=1<<32-Ne(a)+m|l<<m|u,Er=g+n}else Nr=1<<g|l<<m|u,Er=n}function ed(n){n.return!==null&&(Fa(n,1),Xp(n,1,0))}function td(n){for(;n===yo;)yo=Ei[--Ci],Ei[Ci]=null,bo=Ei[--Ci],Ei[Ci]=null;for(;n===Ua;)Ua=$n[--Yn],$n[Yn]=null,Er=$n[--Yn],$n[Yn]=null,Nr=$n[--Yn],$n[Yn]=null}var on=null,jt=null,at=!1,Va=null,cr=!1,nd=Error(i(519));function Pa(n){var a=Error(i(418,""));throw Ml(qn(a,n)),nd}function Qp(n){var a=n.stateNode,l=n.type,u=n.memoizedProps;switch(a[Wt]=n,a[pn]=u,l){case"dialog":Xe("cancel",a),Xe("close",a);break;case"iframe":case"object":case"embed":Xe("load",a);break;case"video":case"audio":for(l=0;l<ts.length;l++)Xe(ts[l],a);break;case"source":Xe("error",a);break;case"img":case"image":case"link":Xe("error",a),Xe("load",a);break;case"details":Xe("toggle",a);break;case"input":Xe("invalid",a),fp(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ro(a);break;case"select":Xe("invalid",a);break;case"textarea":Xe("invalid",a),hp(a,u.value,u.defaultValue,u.children),ro(a)}l=u.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||u.suppressHydrationWarning===!0||h0(a.textContent,l)?(u.popover!=null&&(Xe("beforetoggle",a),Xe("toggle",a)),u.onScroll!=null&&Xe("scroll",a),u.onScrollEnd!=null&&Xe("scrollend",a),u.onClick!=null&&(a.onclick=Ko),a=!0):a=!1,a||Pa(n)}function Kp(n){for(on=n.return;on;)switch(on.tag){case 5:case 13:cr=!1;return;case 27:case 3:cr=!0;return;default:on=on.return}}function Al(n){if(n!==on)return!1;if(!at)return Kp(n),at=!0,!1;var a=n.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=n.type,l=!(l!=="form"&&l!=="button")||xf(n.type,n.memoizedProps)),l=!l),l&&jt&&Pa(n),Kp(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(l=n.data,l==="/$"){if(a===0){jt=nr(n.nextSibling);break e}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++;n=n.nextSibling}jt=null}}else a===27?(a=jt,ca(n.type)?(n=kf,kf=null,jt=n):jt=a):jt=on?nr(n.stateNode.nextSibling):null;return!0}function Tl(){jt=on=null,at=!1}function Wp(){var n=Va;return n!==null&&(xn===null?xn=n:xn.push.apply(xn,n),Va=null),n}function Ml(n){Va===null?Va=[n]:Va.push(n)}var rd=j(null),Ha=null,Cr=null;function Jr(n,a,l){S(rd,a._currentValue),a._currentValue=l}function Ar(n){n._currentValue=rd.current,$(rd)}function ad(n,a,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),n===l)break;n=n.return}}function id(n,a,l,u){var m=n.child;for(m!==null&&(m.return=n);m!==null;){var g=m.dependencies;if(g!==null){var w=m.child;g=g.firstContext;e:for(;g!==null;){var N=g;g=m;for(var L=0;L<a.length;L++)if(N.context===a[L]){g.lanes|=l,N=g.alternate,N!==null&&(N.lanes|=l),ad(g.return,l,n),u||(w=null);break e}g=N.next}}else if(m.tag===18){if(w=m.return,w===null)throw Error(i(341));w.lanes|=l,g=w.alternate,g!==null&&(g.lanes|=l),ad(w,l,n),w=null}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===n){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}}function Rl(n,a,l,u){n=null;for(var m=a,g=!1;m!==null;){if(!g){if((m.flags&524288)!==0)g=!0;else if((m.flags&262144)!==0)break}if(m.tag===10){var w=m.alternate;if(w===null)throw Error(i(387));if(w=w.memoizedProps,w!==null){var N=m.type;Nn(m.pendingProps.value,w.value)||(n!==null?n.push(N):n=[N])}}else if(m===pe.current){if(w=m.alternate,w===null)throw Error(i(387));w.memoizedState.memoizedState!==m.memoizedState.memoizedState&&(n!==null?n.push(ss):n=[ss])}m=m.return}n!==null&&id(a,n,l,u),a.flags|=262144}function xo(n){for(n=n.firstContext;n!==null;){if(!Nn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function qa(n){Ha=n,Cr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function en(n){return eg(Ha,n)}function vo(n,a){return Ha===null&&qa(n),eg(n,a)}function eg(n,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},Cr===null){if(n===null)throw Error(i(308));Cr=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Cr=Cr.next=a;return l}var Uw=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(l,u){n.push(u)}};this.abort=function(){a.aborted=!0,n.forEach(function(l){return l()})}},Fw=e.unstable_scheduleCallback,Vw=e.unstable_NormalPriority,Ht={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ld(){return{controller:new Uw,data:new Map,refCount:0}}function Ol(n){n.refCount--,n.refCount===0&&Fw(Vw,function(){n.controller.abort()})}var zl=null,sd=0,Ai=0,Ti=null;function Pw(n,a){if(zl===null){var l=zl=[];sd=0,Ai=cf(),Ti={status:"pending",value:void 0,then:function(u){l.push(u)}}}return sd++,a.then(tg,tg),a}function tg(){if(--sd===0&&zl!==null){Ti!==null&&(Ti.status="fulfilled");var n=zl;zl=null,Ai=0,Ti=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function Hw(n,a){var l=[],u={status:"pending",value:null,reason:null,then:function(m){l.push(m)}};return n.then(function(){u.status="fulfilled",u.value=a;for(var m=0;m<l.length;m++)(0,l[m])(a)},function(m){for(u.status="rejected",u.reason=m,m=0;m<l.length;m++)(0,l[m])(void 0)}),u}var ng=U.S;U.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&Pw(n,a),ng!==null&&ng(n,a)};var Ia=j(null);function od(){var n=Ia.current;return n!==null?n:yt.pooledCache}function _o(n,a){a===null?S(Ia,Ia.current):S(Ia,a.pool)}function rg(){var n=od();return n===null?null:{parent:Ht._currentValue,pool:n}}var Dl=Error(i(460)),ag=Error(i(474)),wo=Error(i(542)),ud={then:function(){}};function ig(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ko(){}function lg(n,a,l){switch(l=n[l],l===void 0?n.push(a):l!==a&&(a.then(ko,ko),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,og(n),n;default:if(typeof a.status=="string")a.then(ko,ko);else{if(n=yt,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(u){if(a.status==="pending"){var m=a;m.status="fulfilled",m.value=u}},function(u){if(a.status==="pending"){var m=a;m.status="rejected",m.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,og(n),n}throw Ll=a,Dl}}var Ll=null;function sg(){if(Ll===null)throw Error(i(459));var n=Ll;return Ll=null,n}function og(n){if(n===Dl||n===wo)throw Error(i(483))}var Xr=!1;function cd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dd(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Qr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Kr(n,a,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(st&2)!==0){var m=u.pending;return m===null?a.next=a:(a.next=m.next,m.next=a),u.pending=a,a=po(n),Gp(n,null,l),a}return ho(n,u,a,l),po(n)}function Bl(n,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var u=a.lanes;u&=n.pendingLanes,l|=u,a.lanes=l,tp(n,l)}}function fd(n,a){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var m=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var w={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?m=g=w:g=g.next=w,l=l.next}while(l!==null);g===null?m=g=a:g=g.next=a}else m=g=a;l={baseState:u.baseState,firstBaseUpdate:m,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=a:n.next=a,l.lastBaseUpdate=a}var md=!1;function Ul(){if(md){var n=Ti;if(n!==null)throw n}}function Fl(n,a,l,u){md=!1;var m=n.updateQueue;Xr=!1;var g=m.firstBaseUpdate,w=m.lastBaseUpdate,N=m.shared.pending;if(N!==null){m.shared.pending=null;var L=N,J=L.next;L.next=null,w===null?g=J:w.next=J,w=L;var ce=n.alternate;ce!==null&&(ce=ce.updateQueue,N=ce.lastBaseUpdate,N!==w&&(N===null?ce.firstBaseUpdate=J:N.next=J,ce.lastBaseUpdate=L))}if(g!==null){var me=m.baseState;w=0,ce=J=L=null,N=g;do{var W=N.lane&-536870913,ee=W!==N.lane;if(ee?(We&W)===W:(u&W)===W){W!==0&&W===Ai&&(md=!0),ce!==null&&(ce=ce.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Fe=n,Le=N;W=a;var dt=l;switch(Le.tag){case 1:if(Fe=Le.payload,typeof Fe=="function"){me=Fe.call(dt,me,W);break e}me=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=Le.payload,W=typeof Fe=="function"?Fe.call(dt,me,W):Fe,W==null)break e;me=y({},me,W);break e;case 2:Xr=!0}}W=N.callback,W!==null&&(n.flags|=64,ee&&(n.flags|=8192),ee=m.callbacks,ee===null?m.callbacks=[W]:ee.push(W))}else ee={lane:W,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ce===null?(J=ce=ee,L=me):ce=ce.next=ee,w|=W;if(N=N.next,N===null){if(N=m.shared.pending,N===null)break;ee=N,N=ee.next,ee.next=null,m.lastBaseUpdate=ee,m.shared.pending=null}}while(!0);ce===null&&(L=me),m.baseState=L,m.firstBaseUpdate=J,m.lastBaseUpdate=ce,g===null&&(m.shared.lanes=0),la|=w,n.lanes=w,n.memoizedState=me}}function ug(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function cg(n,a){var l=n.callbacks;if(l!==null)for(n.callbacks=null,n=0;n<l.length;n++)ug(l[n],a)}var Mi=j(null),So=j(0);function dg(n,a){n=Lr,S(So,n),S(Mi,a),Lr=n|a.baseLanes}function hd(){S(So,Lr),S(Mi,Mi.current)}function pd(){Lr=So.current,$(Mi),$(So)}var Wr=0,$e=null,ut=null,Dt=null,jo=!1,Ri=!1,$a=!1,No=0,Vl=0,Oi=null,qw=0;function Mt(){throw Error(i(321))}function gd(n,a){if(a===null)return!1;for(var l=0;l<a.length&&l<n.length;l++)if(!Nn(n[l],a[l]))return!1;return!0}function yd(n,a,l,u,m,g){return Wr=g,$e=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,U.H=n===null||n.memoizedState===null?Gg:Jg,$a=!1,g=l(u,m),$a=!1,Ri&&(g=mg(a,l,u,m)),fg(n),g}function fg(n){U.H=Ro;var a=ut!==null&&ut.next!==null;if(Wr=0,Dt=ut=$e=null,jo=!1,Vl=0,Oi=null,a)throw Error(i(300));n===null||$t||(n=n.dependencies,n!==null&&xo(n)&&($t=!0))}function mg(n,a,l,u){$e=n;var m=0;do{if(Ri&&(Oi=null),Vl=0,Ri=!1,25<=m)throw Error(i(301));if(m+=1,Dt=ut=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}U.H=Xw,g=a(l,u)}while(Ri);return g}function Iw(){var n=U.H,a=n.useState()[0];return a=typeof a.then=="function"?Pl(a):a,n=n.useState()[0],(ut!==null?ut.memoizedState:null)!==n&&($e.flags|=1024),a}function bd(){var n=No!==0;return No=0,n}function xd(n,a,l){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~l}function vd(n){if(jo){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}jo=!1}Wr=0,Dt=ut=$e=null,Ri=!1,Vl=No=0,Oi=null}function yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?$e.memoizedState=Dt=n:Dt=Dt.next=n,Dt}function Lt(){if(ut===null){var n=$e.alternate;n=n!==null?n.memoizedState:null}else n=ut.next;var a=Dt===null?$e.memoizedState:Dt.next;if(a!==null)Dt=a,ut=n;else{if(n===null)throw $e.alternate===null?Error(i(467)):Error(i(310));ut=n,n={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},Dt===null?$e.memoizedState=Dt=n:Dt=Dt.next=n}return Dt}function _d(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(n){var a=Vl;return Vl+=1,Oi===null&&(Oi=[]),n=lg(Oi,n,a),a=$e,(Dt===null?a.memoizedState:Dt.next)===null&&(a=a.alternate,U.H=a===null||a.memoizedState===null?Gg:Jg),n}function Eo(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Pl(n);if(n.$$typeof===R)return en(n)}throw Error(i(438,String(n)))}function wd(n){var a=null,l=$e.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var u=$e.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(m){return m.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=_d(),$e.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(n),u=0;u<n;u++)l[u]=z;return a.index++,l}function Tr(n,a){return typeof a=="function"?a(n):a}function Co(n){var a=Lt();return kd(a,ut,n)}function kd(n,a,l){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=l;var m=n.baseQueue,g=u.pending;if(g!==null){if(m!==null){var w=m.next;m.next=g.next,g.next=w}a.baseQueue=m=g,u.pending=null}if(g=n.baseState,m===null)n.memoizedState=g;else{a=m.next;var N=w=null,L=null,J=a,ce=!1;do{var me=J.lane&-536870913;if(me!==J.lane?(We&me)===me:(Wr&me)===me){var W=J.revertLane;if(W===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),me===Ai&&(ce=!0);else if((Wr&W)===W){J=J.next,W===Ai&&(ce=!0);continue}else me={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},L===null?(N=L=me,w=g):L=L.next=me,$e.lanes|=W,la|=W;me=J.action,$a&&l(g,me),g=J.hasEagerState?J.eagerState:l(g,me)}else W={lane:me,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},L===null?(N=L=W,w=g):L=L.next=W,$e.lanes|=me,la|=me;J=J.next}while(J!==null&&J!==a);if(L===null?w=g:L.next=N,!Nn(g,n.memoizedState)&&($t=!0,ce&&(l=Ti,l!==null)))throw l;n.memoizedState=g,n.baseState=w,n.baseQueue=L,u.lastRenderedState=g}return m===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Sd(n){var a=Lt(),l=a.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=n;var u=l.dispatch,m=l.pending,g=a.memoizedState;if(m!==null){l.pending=null;var w=m=m.next;do g=n(g,w.action),w=w.next;while(w!==m);Nn(g,a.memoizedState)||($t=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),l.lastRenderedState=g}return[g,u]}function hg(n,a,l){var u=$e,m=Lt(),g=at;if(g){if(l===void 0)throw Error(i(407));l=l()}else l=a();var w=!Nn((ut||m).memoizedState,l);w&&(m.memoizedState=l,$t=!0),m=m.queue;var N=yg.bind(null,u,m,n);if(Hl(2048,8,N,[n]),m.getSnapshot!==a||w||Dt!==null&&Dt.memoizedState.tag&1){if(u.flags|=2048,zi(9,Ao(),gg.bind(null,u,m,l,a),null),yt===null)throw Error(i(349));g||(Wr&124)!==0||pg(u,a,l)}return l}function pg(n,a,l){n.flags|=16384,n={getSnapshot:a,value:l},a=$e.updateQueue,a===null?(a=_d(),$e.updateQueue=a,a.stores=[n]):(l=a.stores,l===null?a.stores=[n]:l.push(n))}function gg(n,a,l,u){a.value=l,a.getSnapshot=u,bg(a)&&xg(n)}function yg(n,a,l){return l(function(){bg(a)&&xg(n)})}function bg(n){var a=n.getSnapshot;n=n.value;try{var l=a();return!Nn(n,l)}catch{return!0}}function xg(n){var a=ji(n,2);a!==null&&Rn(a,n,2)}function jd(n){var a=yn();if(typeof n=="function"){var l=n;if(n=l(),$a){_e(!0);try{l()}finally{_e(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:n},a}function vg(n,a,l,u){return n.baseState=l,kd(n,ut,typeof u=="function"?u:Tr)}function $w(n,a,l,u,m){if(Mo(n))throw Error(i(485));if(n=a.action,n!==null){var g={payload:m,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){g.listeners.push(w)}};U.T!==null?l(!0):g.isTransition=!1,u(g),l=a.pending,l===null?(g.next=a.pending=g,_g(a,g)):(g.next=l.next,a.pending=l.next=g)}}function _g(n,a){var l=a.action,u=a.payload,m=n.state;if(a.isTransition){var g=U.T,w={};U.T=w;try{var N=l(m,u),L=U.S;L!==null&&L(w,N),wg(n,a,N)}catch(J){Nd(n,a,J)}finally{U.T=g}}else try{g=l(m,u),wg(n,a,g)}catch(J){Nd(n,a,J)}}function wg(n,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(u){kg(n,a,u)},function(u){return Nd(n,a,u)}):kg(n,a,l)}function kg(n,a,l){a.status="fulfilled",a.value=l,Sg(a),n.state=l,a=n.pending,a!==null&&(l=a.next,l===a?n.pending=null:(l=l.next,a.next=l,_g(n,l)))}function Nd(n,a,l){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=l,Sg(a),a=a.next;while(a!==u)}n.action=null}function Sg(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function jg(n,a){return a}function Ng(n,a){if(at){var l=yt.formState;if(l!==null){e:{var u=$e;if(at){if(jt){t:{for(var m=jt,g=cr;m.nodeType!==8;){if(!g){m=null;break t}if(m=nr(m.nextSibling),m===null){m=null;break t}}g=m.data,m=g==="F!"||g==="F"?m:null}if(m){jt=nr(m.nextSibling),u=m.data==="F!";break e}}Pa(u)}u=!1}u&&(a=l[0])}}return l=yn(),l.memoizedState=l.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jg,lastRenderedState:a},l.queue=u,l=$g.bind(null,$e,u),u.dispatch=l,u=jd(!1),g=Md.bind(null,$e,!1,u.queue),u=yn(),m={state:a,dispatch:null,action:n,pending:null},u.queue=m,l=$w.bind(null,$e,m,g,l),m.dispatch=l,u.memoizedState=n,[a,l,!1]}function Eg(n){var a=Lt();return Cg(a,ut,n)}function Cg(n,a,l){if(a=kd(n,a,jg)[0],n=Co(Tr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=Pl(a)}catch(w){throw w===Dl?wo:w}else u=a;a=Lt();var m=a.queue,g=m.dispatch;return l!==a.memoizedState&&($e.flags|=2048,zi(9,Ao(),Yw.bind(null,m,l),null)),[u,g,n]}function Yw(n,a){n.action=a}function Ag(n){var a=Lt(),l=ut;if(l!==null)return Cg(a,l,n);Lt(),a=a.memoizedState,l=Lt();var u=l.queue.dispatch;return l.memoizedState=n,[a,u,!1]}function zi(n,a,l,u){return n={tag:n,create:l,deps:u,inst:a,next:null},a=$e.updateQueue,a===null&&(a=_d(),$e.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,a.lastEffect=n),n}function Ao(){return{destroy:void 0,resource:void 0}}function Tg(){return Lt().memoizedState}function To(n,a,l,u){var m=yn();u=u===void 0?null:u,$e.flags|=n,m.memoizedState=zi(1|a,Ao(),l,u)}function Hl(n,a,l,u){var m=Lt();u=u===void 0?null:u;var g=m.memoizedState.inst;ut!==null&&u!==null&&gd(u,ut.memoizedState.deps)?m.memoizedState=zi(a,g,l,u):($e.flags|=n,m.memoizedState=zi(1|a,g,l,u))}function Mg(n,a){To(8390656,8,n,a)}function Rg(n,a){Hl(2048,8,n,a)}function Og(n,a){return Hl(4,2,n,a)}function zg(n,a){return Hl(4,4,n,a)}function Dg(n,a){if(typeof a=="function"){n=n();var l=a(n);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function Lg(n,a,l){l=l!=null?l.concat([n]):null,Hl(4,4,Dg.bind(null,a,n),l)}function Ed(){}function Bg(n,a){var l=Lt();a=a===void 0?null:a;var u=l.memoizedState;return a!==null&&gd(a,u[1])?u[0]:(l.memoizedState=[n,a],n)}function Ug(n,a){var l=Lt();a=a===void 0?null:a;var u=l.memoizedState;if(a!==null&&gd(a,u[1]))return u[0];if(u=n(),$a){_e(!0);try{n()}finally{_e(!1)}}return l.memoizedState=[u,a],u}function Cd(n,a,l){return l===void 0||(Wr&1073741824)!==0?n.memoizedState=a:(n.memoizedState=l,n=Py(),$e.lanes|=n,la|=n,l)}function Fg(n,a,l,u){return Nn(l,a)?l:Mi.current!==null?(n=Cd(n,l,u),Nn(n,a)||($t=!0),n):(Wr&42)===0?($t=!0,n.memoizedState=l):(n=Py(),$e.lanes|=n,la|=n,a)}function Vg(n,a,l,u,m){var g=F.p;F.p=g!==0&&8>g?g:8;var w=U.T,N={};U.T=N,Md(n,!1,a,l);try{var L=m(),J=U.S;if(J!==null&&J(N,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ce=Hw(L,u);ql(n,a,ce,Mn(n))}else ql(n,a,u,Mn(n))}catch(me){ql(n,a,{then:function(){},status:"rejected",reason:me},Mn())}finally{F.p=g,U.T=w}}function Zw(){}function Ad(n,a,l,u){if(n.tag!==5)throw Error(i(476));var m=Pg(n).queue;Vg(n,m,a,te,l===null?Zw:function(){return Hg(n),l(u)})}function Pg(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:te},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:l},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Hg(n){var a=Pg(n).next.queue;ql(n,a,{},Mn())}function Td(){return en(ss)}function qg(){return Lt().memoizedState}function Ig(){return Lt().memoizedState}function Gw(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var l=Mn();n=Qr(l);var u=Kr(a,n,l);u!==null&&(Rn(u,a,l),Bl(u,a,l)),a={cache:ld()},n.payload=a;return}a=a.return}}function Jw(n,a,l){var u=Mn();l={lane:u,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Mo(n)?Yg(a,l):(l=Xc(n,a,l,u),l!==null&&(Rn(l,n,u),Zg(l,a,u)))}function $g(n,a,l){var u=Mn();ql(n,a,l,u)}function ql(n,a,l,u){var m={lane:u,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Mo(n))Yg(a,m);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var w=a.lastRenderedState,N=g(w,l);if(m.hasEagerState=!0,m.eagerState=N,Nn(N,w))return ho(n,a,m,0),yt===null&&mo(),!1}catch{}finally{}if(l=Xc(n,a,m,u),l!==null)return Rn(l,n,u),Zg(l,a,u),!0}return!1}function Md(n,a,l,u){if(u={lane:2,revertLane:cf(),action:u,hasEagerState:!1,eagerState:null,next:null},Mo(n)){if(a)throw Error(i(479))}else a=Xc(n,l,u,2),a!==null&&Rn(a,n,2)}function Mo(n){var a=n.alternate;return n===$e||a!==null&&a===$e}function Yg(n,a){Ri=jo=!0;var l=n.pending;l===null?a.next=a:(a.next=l.next,l.next=a),n.pending=a}function Zg(n,a,l){if((l&4194048)!==0){var u=a.lanes;u&=n.pendingLanes,l|=u,a.lanes=l,tp(n,l)}}var Ro={readContext:en,use:Eo,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt},Gg={readContext:en,use:Eo,useCallback:function(n,a){return yn().memoizedState=[n,a===void 0?null:a],n},useContext:en,useEffect:Mg,useImperativeHandle:function(n,a,l){l=l!=null?l.concat([n]):null,To(4194308,4,Dg.bind(null,a,n),l)},useLayoutEffect:function(n,a){return To(4194308,4,n,a)},useInsertionEffect:function(n,a){To(4,2,n,a)},useMemo:function(n,a){var l=yn();a=a===void 0?null:a;var u=n();if($a){_e(!0);try{n()}finally{_e(!1)}}return l.memoizedState=[u,a],u},useReducer:function(n,a,l){var u=yn();if(l!==void 0){var m=l(a);if($a){_e(!0);try{l(a)}finally{_e(!1)}}}else m=a;return u.memoizedState=u.baseState=m,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:m},u.queue=n,n=n.dispatch=Jw.bind(null,$e,n),[u.memoizedState,n]},useRef:function(n){var a=yn();return n={current:n},a.memoizedState=n},useState:function(n){n=jd(n);var a=n.queue,l=$g.bind(null,$e,a);return a.dispatch=l,[n.memoizedState,l]},useDebugValue:Ed,useDeferredValue:function(n,a){var l=yn();return Cd(l,n,a)},useTransition:function(){var n=jd(!1);return n=Vg.bind(null,$e,n.queue,!0,!1),yn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,l){var u=$e,m=yn();if(at){if(l===void 0)throw Error(i(407));l=l()}else{if(l=a(),yt===null)throw Error(i(349));(We&124)!==0||pg(u,a,l)}m.memoizedState=l;var g={value:l,getSnapshot:a};return m.queue=g,Mg(yg.bind(null,u,g,n),[n]),u.flags|=2048,zi(9,Ao(),gg.bind(null,u,g,l,a),null),l},useId:function(){var n=yn(),a=yt.identifierPrefix;if(at){var l=Er,u=Nr;l=(u&~(1<<32-Ne(u)-1)).toString(32)+l,a="«"+a+"R"+l,l=No++,0<l&&(a+="H"+l.toString(32)),a+="»"}else l=qw++,a="«"+a+"r"+l.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:Td,useFormState:Ng,useActionState:Ng,useOptimistic:function(n){var a=yn();a.memoizedState=a.baseState=n;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=Md.bind(null,$e,!0,l),l.dispatch=a,[n,a]},useMemoCache:wd,useCacheRefresh:function(){return yn().memoizedState=Gw.bind(null,$e)}},Jg={readContext:en,use:Eo,useCallback:Bg,useContext:en,useEffect:Rg,useImperativeHandle:Lg,useInsertionEffect:Og,useLayoutEffect:zg,useMemo:Ug,useReducer:Co,useRef:Tg,useState:function(){return Co(Tr)},useDebugValue:Ed,useDeferredValue:function(n,a){var l=Lt();return Fg(l,ut.memoizedState,n,a)},useTransition:function(){var n=Co(Tr)[0],a=Lt().memoizedState;return[typeof n=="boolean"?n:Pl(n),a]},useSyncExternalStore:hg,useId:qg,useHostTransitionStatus:Td,useFormState:Eg,useActionState:Eg,useOptimistic:function(n,a){var l=Lt();return vg(l,ut,n,a)},useMemoCache:wd,useCacheRefresh:Ig},Xw={readContext:en,use:Eo,useCallback:Bg,useContext:en,useEffect:Rg,useImperativeHandle:Lg,useInsertionEffect:Og,useLayoutEffect:zg,useMemo:Ug,useReducer:Sd,useRef:Tg,useState:function(){return Sd(Tr)},useDebugValue:Ed,useDeferredValue:function(n,a){var l=Lt();return ut===null?Cd(l,n,a):Fg(l,ut.memoizedState,n,a)},useTransition:function(){var n=Sd(Tr)[0],a=Lt().memoizedState;return[typeof n=="boolean"?n:Pl(n),a]},useSyncExternalStore:hg,useId:qg,useHostTransitionStatus:Td,useFormState:Ag,useActionState:Ag,useOptimistic:function(n,a){var l=Lt();return ut!==null?vg(l,ut,n,a):(l.baseState=n,[n,l.queue.dispatch])},useMemoCache:wd,useCacheRefresh:Ig},Di=null,Il=0;function Oo(n){var a=Il;return Il+=1,Di===null&&(Di=[]),lg(Di,n,a)}function $l(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function zo(n,a){throw a.$$typeof===b?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function Xg(n){var a=n._init;return a(n._payload)}function Qg(n){function a(I,V){if(n){var G=I.deletions;G===null?(I.deletions=[V],I.flags|=16):G.push(V)}}function l(I,V){if(!n)return null;for(;V!==null;)a(I,V),V=V.sibling;return null}function u(I){for(var V=new Map;I!==null;)I.key!==null?V.set(I.key,I):V.set(I.index,I),I=I.sibling;return V}function m(I,V){return I=jr(I,V),I.index=0,I.sibling=null,I}function g(I,V,G){return I.index=G,n?(G=I.alternate,G!==null?(G=G.index,G<V?(I.flags|=67108866,V):G):(I.flags|=67108866,V)):(I.flags|=1048576,V)}function w(I){return n&&I.alternate===null&&(I.flags|=67108866),I}function N(I,V,G,fe){return V===null||V.tag!==6?(V=Kc(G,I.mode,fe),V.return=I,V):(V=m(V,G),V.return=I,V)}function L(I,V,G,fe){var Ee=G.type;return Ee===k?ce(I,V,G.props.children,fe,G.key):V!==null&&(V.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===ae&&Xg(Ee)===V.type)?(V=m(V,G.props),$l(V,G),V.return=I,V):(V=go(G.type,G.key,G.props,null,I.mode,fe),$l(V,G),V.return=I,V)}function J(I,V,G,fe){return V===null||V.tag!==4||V.stateNode.containerInfo!==G.containerInfo||V.stateNode.implementation!==G.implementation?(V=Wc(G,I.mode,fe),V.return=I,V):(V=m(V,G.children||[]),V.return=I,V)}function ce(I,V,G,fe,Ee){return V===null||V.tag!==7?(V=Ba(G,I.mode,fe,Ee),V.return=I,V):(V=m(V,G),V.return=I,V)}function me(I,V,G){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Kc(""+V,I.mode,G),V.return=I,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return G=go(V.type,V.key,V.props,null,I.mode,G),$l(G,V),G.return=I,G;case _:return V=Wc(V,I.mode,G),V.return=I,V;case ae:var fe=V._init;return V=fe(V._payload),me(I,V,G)}if(Y(V)||q(V))return V=Ba(V,I.mode,G,null),V.return=I,V;if(typeof V.then=="function")return me(I,Oo(V),G);if(V.$$typeof===R)return me(I,vo(I,V),G);zo(I,V)}return null}function W(I,V,G,fe){var Ee=V!==null?V.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return Ee!==null?null:N(I,V,""+G,fe);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return G.key===Ee?L(I,V,G,fe):null;case _:return G.key===Ee?J(I,V,G,fe):null;case ae:return Ee=G._init,G=Ee(G._payload),W(I,V,G,fe)}if(Y(G)||q(G))return Ee!==null?null:ce(I,V,G,fe,null);if(typeof G.then=="function")return W(I,V,Oo(G),fe);if(G.$$typeof===R)return W(I,V,vo(I,G),fe);zo(I,G)}return null}function ee(I,V,G,fe,Ee){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return I=I.get(G)||null,N(V,I,""+fe,Ee);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case v:return I=I.get(fe.key===null?G:fe.key)||null,L(V,I,fe,Ee);case _:return I=I.get(fe.key===null?G:fe.key)||null,J(V,I,fe,Ee);case ae:var Ye=fe._init;return fe=Ye(fe._payload),ee(I,V,G,fe,Ee)}if(Y(fe)||q(fe))return I=I.get(G)||null,ce(V,I,fe,Ee,null);if(typeof fe.then=="function")return ee(I,V,G,Oo(fe),Ee);if(fe.$$typeof===R)return ee(I,V,G,vo(V,fe),Ee);zo(V,fe)}return null}function Fe(I,V,G,fe){for(var Ee=null,Ye=null,Oe=V,Be=V=0,Zt=null;Oe!==null&&Be<G.length;Be++){Oe.index>Be?(Zt=Oe,Oe=null):Zt=Oe.sibling;var nt=W(I,Oe,G[Be],fe);if(nt===null){Oe===null&&(Oe=Zt);break}n&&Oe&&nt.alternate===null&&a(I,Oe),V=g(nt,V,Be),Ye===null?Ee=nt:Ye.sibling=nt,Ye=nt,Oe=Zt}if(Be===G.length)return l(I,Oe),at&&Fa(I,Be),Ee;if(Oe===null){for(;Be<G.length;Be++)Oe=me(I,G[Be],fe),Oe!==null&&(V=g(Oe,V,Be),Ye===null?Ee=Oe:Ye.sibling=Oe,Ye=Oe);return at&&Fa(I,Be),Ee}for(Oe=u(Oe);Be<G.length;Be++)Zt=ee(Oe,I,Be,G[Be],fe),Zt!==null&&(n&&Zt.alternate!==null&&Oe.delete(Zt.key===null?Be:Zt.key),V=g(Zt,V,Be),Ye===null?Ee=Zt:Ye.sibling=Zt,Ye=Zt);return n&&Oe.forEach(function(pa){return a(I,pa)}),at&&Fa(I,Be),Ee}function Le(I,V,G,fe){if(G==null)throw Error(i(151));for(var Ee=null,Ye=null,Oe=V,Be=V=0,Zt=null,nt=G.next();Oe!==null&&!nt.done;Be++,nt=G.next()){Oe.index>Be?(Zt=Oe,Oe=null):Zt=Oe.sibling;var pa=W(I,Oe,nt.value,fe);if(pa===null){Oe===null&&(Oe=Zt);break}n&&Oe&&pa.alternate===null&&a(I,Oe),V=g(pa,V,Be),Ye===null?Ee=pa:Ye.sibling=pa,Ye=pa,Oe=Zt}if(nt.done)return l(I,Oe),at&&Fa(I,Be),Ee;if(Oe===null){for(;!nt.done;Be++,nt=G.next())nt=me(I,nt.value,fe),nt!==null&&(V=g(nt,V,Be),Ye===null?Ee=nt:Ye.sibling=nt,Ye=nt);return at&&Fa(I,Be),Ee}for(Oe=u(Oe);!nt.done;Be++,nt=G.next())nt=ee(Oe,I,Be,nt.value,fe),nt!==null&&(n&&nt.alternate!==null&&Oe.delete(nt.key===null?Be:nt.key),V=g(nt,V,Be),Ye===null?Ee=nt:Ye.sibling=nt,Ye=nt);return n&&Oe.forEach(function(Q2){return a(I,Q2)}),at&&Fa(I,Be),Ee}function dt(I,V,G,fe){if(typeof G=="object"&&G!==null&&G.type===k&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case v:e:{for(var Ee=G.key;V!==null;){if(V.key===Ee){if(Ee=G.type,Ee===k){if(V.tag===7){l(I,V.sibling),fe=m(V,G.props.children),fe.return=I,I=fe;break e}}else if(V.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===ae&&Xg(Ee)===V.type){l(I,V.sibling),fe=m(V,G.props),$l(fe,G),fe.return=I,I=fe;break e}l(I,V);break}else a(I,V);V=V.sibling}G.type===k?(fe=Ba(G.props.children,I.mode,fe,G.key),fe.return=I,I=fe):(fe=go(G.type,G.key,G.props,null,I.mode,fe),$l(fe,G),fe.return=I,I=fe)}return w(I);case _:e:{for(Ee=G.key;V!==null;){if(V.key===Ee)if(V.tag===4&&V.stateNode.containerInfo===G.containerInfo&&V.stateNode.implementation===G.implementation){l(I,V.sibling),fe=m(V,G.children||[]),fe.return=I,I=fe;break e}else{l(I,V);break}else a(I,V);V=V.sibling}fe=Wc(G,I.mode,fe),fe.return=I,I=fe}return w(I);case ae:return Ee=G._init,G=Ee(G._payload),dt(I,V,G,fe)}if(Y(G))return Fe(I,V,G,fe);if(q(G)){if(Ee=q(G),typeof Ee!="function")throw Error(i(150));return G=Ee.call(G),Le(I,V,G,fe)}if(typeof G.then=="function")return dt(I,V,Oo(G),fe);if(G.$$typeof===R)return dt(I,V,vo(I,G),fe);zo(I,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,V!==null&&V.tag===6?(l(I,V.sibling),fe=m(V,G),fe.return=I,I=fe):(l(I,V),fe=Kc(G,I.mode,fe),fe.return=I,I=fe),w(I)):l(I,V)}return function(I,V,G,fe){try{Il=0;var Ee=dt(I,V,G,fe);return Di=null,Ee}catch(Oe){if(Oe===Dl||Oe===wo)throw Oe;var Ye=En(29,Oe,null,I.mode);return Ye.lanes=fe,Ye.return=I,Ye}finally{}}}var Li=Qg(!0),Kg=Qg(!1),Zn=j(null),dr=null;function ea(n){var a=n.alternate;S(qt,qt.current&1),S(Zn,n),dr===null&&(a===null||Mi.current!==null||a.memoizedState!==null)&&(dr=n)}function Wg(n){if(n.tag===22){if(S(qt,qt.current),S(Zn,n),dr===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(dr=n)}}else ta()}function ta(){S(qt,qt.current),S(Zn,Zn.current)}function Mr(n){$(Zn),dr===n&&(dr=null),$(qt)}var qt=j(0);function Do(n){for(var a=n;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||wf(l)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Rd(n,a,l,u){a=n.memoizedState,l=l(u,a),l=l==null?a:y({},a,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Od={enqueueSetState:function(n,a,l){n=n._reactInternals;var u=Mn(),m=Qr(u);m.payload=a,l!=null&&(m.callback=l),a=Kr(n,m,u),a!==null&&(Rn(a,n,u),Bl(a,n,u))},enqueueReplaceState:function(n,a,l){n=n._reactInternals;var u=Mn(),m=Qr(u);m.tag=1,m.payload=a,l!=null&&(m.callback=l),a=Kr(n,m,u),a!==null&&(Rn(a,n,u),Bl(a,n,u))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var l=Mn(),u=Qr(l);u.tag=2,a!=null&&(u.callback=a),a=Kr(n,u,l),a!==null&&(Rn(a,n,l),Bl(a,n,l))}};function ey(n,a,l,u,m,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,w):a.prototype&&a.prototype.isPureReactComponent?!El(l,u)||!El(m,g):!0}function ty(n,a,l,u){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,u),a.state!==n&&Od.enqueueReplaceState(a,a.state,null)}function Ya(n,a){var l=a;if("ref"in a){l={};for(var u in a)u!=="ref"&&(l[u]=a[u])}if(n=n.defaultProps){l===a&&(l=y({},l));for(var m in n)l[m]===void 0&&(l[m]=n[m])}return l}var Lo=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function ny(n){Lo(n)}function ry(n){console.error(n)}function ay(n){Lo(n)}function Bo(n,a){try{var l=n.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function iy(n,a,l){try{var u=n.onCaughtError;u(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(m){setTimeout(function(){throw m})}}function zd(n,a,l){return l=Qr(l),l.tag=3,l.payload={element:null},l.callback=function(){Bo(n,a)},l}function ly(n){return n=Qr(n),n.tag=3,n}function sy(n,a,l,u){var m=l.type.getDerivedStateFromError;if(typeof m=="function"){var g=u.value;n.payload=function(){return m(g)},n.callback=function(){iy(a,l,u)}}var w=l.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){iy(a,l,u),typeof m!="function"&&(sa===null?sa=new Set([this]):sa.add(this));var N=u.stack;this.componentDidCatch(u.value,{componentStack:N!==null?N:""})})}function Qw(n,a,l,u,m){if(l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=l.alternate,a!==null&&Rl(a,l,m,!0),l=Zn.current,l!==null){switch(l.tag){case 13:return dr===null?af():l.alternate===null&&Nt===0&&(Nt=3),l.flags&=-257,l.flags|=65536,l.lanes=m,u===ud?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([u]):a.add(u),sf(n,u,m)),!1;case 22:return l.flags|=65536,u===ud?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([u]):l.add(u)),sf(n,u,m)),!1}throw Error(i(435,l.tag))}return sf(n,u,m),af(),!1}if(at)return a=Zn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=m,u!==nd&&(n=Error(i(422),{cause:u}),Ml(qn(n,l)))):(u!==nd&&(a=Error(i(423),{cause:u}),Ml(qn(a,l))),n=n.current.alternate,n.flags|=65536,m&=-m,n.lanes|=m,u=qn(u,l),m=zd(n.stateNode,u,m),fd(n,m),Nt!==4&&(Nt=2)),!1;var g=Error(i(520),{cause:u});if(g=qn(g,l),Kl===null?Kl=[g]:Kl.push(g),Nt!==4&&(Nt=2),a===null)return!0;u=qn(u,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,n=m&-m,l.lanes|=n,n=zd(l.stateNode,u,n),fd(l,n),!1;case 1:if(a=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(sa===null||!sa.has(g))))return l.flags|=65536,m&=-m,l.lanes|=m,m=ly(m),sy(m,n,l,u),fd(l,m),!1}l=l.return}while(l!==null);return!1}var oy=Error(i(461)),$t=!1;function Jt(n,a,l,u){a.child=n===null?Kg(a,null,l,u):Li(a,n.child,l,u)}function uy(n,a,l,u,m){l=l.render;var g=a.ref;if("ref"in u){var w={};for(var N in u)N!=="ref"&&(w[N]=u[N])}else w=u;return qa(a),u=yd(n,a,l,w,g,m),N=bd(),n!==null&&!$t?(xd(n,a,m),Rr(n,a,m)):(at&&N&&ed(a),a.flags|=1,Jt(n,a,u,m),a.child)}function cy(n,a,l,u,m){if(n===null){var g=l.type;return typeof g=="function"&&!Qc(g)&&g.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=g,dy(n,a,g,u,m)):(n=go(l.type,null,u,a,a.mode,m),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!Hd(n,m)){var w=g.memoizedProps;if(l=l.compare,l=l!==null?l:El,l(w,u)&&n.ref===a.ref)return Rr(n,a,m)}return a.flags|=1,n=jr(g,u),n.ref=a.ref,n.return=a,a.child=n}function dy(n,a,l,u,m){if(n!==null){var g=n.memoizedProps;if(El(g,u)&&n.ref===a.ref)if($t=!1,a.pendingProps=u=g,Hd(n,m))(n.flags&131072)!==0&&($t=!0);else return a.lanes=n.lanes,Rr(n,a,m)}return Dd(n,a,l,u,m)}function fy(n,a,l){var u=a.pendingProps,m=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((a.flags&128)!==0){if(u=g!==null?g.baseLanes|l:l,n!==null){for(m=a.child=n.child,g=0;m!==null;)g=g|m.lanes|m.childLanes,m=m.sibling;a.childLanes=g&~u}else a.childLanes=0,a.child=null;return my(n,a,u,l)}if((l&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&_o(a,g!==null?g.cachePool:null),g!==null?dg(a,g):hd(),Wg(a);else return a.lanes=a.childLanes=536870912,my(n,a,g!==null?g.baseLanes|l:l,l)}else g!==null?(_o(a,g.cachePool),dg(a,g),ta(),a.memoizedState=null):(n!==null&&_o(a,null),hd(),ta());return Jt(n,a,m,l),a.child}function my(n,a,l,u){var m=od();return m=m===null?null:{parent:Ht._currentValue,pool:m},a.memoizedState={baseLanes:l,cachePool:m},n!==null&&_o(a,null),hd(),Wg(a),n!==null&&Rl(n,a,u,!0),null}function Uo(n,a){var l=a.ref;if(l===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(i(284));(n===null||n.ref!==l)&&(a.flags|=4194816)}}function Dd(n,a,l,u,m){return qa(a),l=yd(n,a,l,u,void 0,m),u=bd(),n!==null&&!$t?(xd(n,a,m),Rr(n,a,m)):(at&&u&&ed(a),a.flags|=1,Jt(n,a,l,m),a.child)}function hy(n,a,l,u,m,g){return qa(a),a.updateQueue=null,l=mg(a,u,l,m),fg(n),u=bd(),n!==null&&!$t?(xd(n,a,g),Rr(n,a,g)):(at&&u&&ed(a),a.flags|=1,Jt(n,a,l,g),a.child)}function py(n,a,l,u,m){if(qa(a),a.stateNode===null){var g=Ni,w=l.contextType;typeof w=="object"&&w!==null&&(g=en(w)),g=new l(u,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Od,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=u,g.state=a.memoizedState,g.refs={},cd(a),w=l.contextType,g.context=typeof w=="object"&&w!==null?en(w):Ni,g.state=a.memoizedState,w=l.getDerivedStateFromProps,typeof w=="function"&&(Rd(a,l,w,u),g.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(w=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),w!==g.state&&Od.enqueueReplaceState(g,g.state,null),Fl(a,u,g,m),Ul(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(n===null){g=a.stateNode;var N=a.memoizedProps,L=Ya(l,N);g.props=L;var J=g.context,ce=l.contextType;w=Ni,typeof ce=="object"&&ce!==null&&(w=en(ce));var me=l.getDerivedStateFromProps;ce=typeof me=="function"||typeof g.getSnapshotBeforeUpdate=="function",N=a.pendingProps!==N,ce||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(N||J!==w)&&ty(a,g,u,w),Xr=!1;var W=a.memoizedState;g.state=W,Fl(a,u,g,m),Ul(),J=a.memoizedState,N||W!==J||Xr?(typeof me=="function"&&(Rd(a,l,me,u),J=a.memoizedState),(L=Xr||ey(a,l,L,u,W,J,w))?(ce||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=J),g.props=u,g.state=J,g.context=w,u=L):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{g=a.stateNode,dd(n,a),w=a.memoizedProps,ce=Ya(l,w),g.props=ce,me=a.pendingProps,W=g.context,J=l.contextType,L=Ni,typeof J=="object"&&J!==null&&(L=en(J)),N=l.getDerivedStateFromProps,(J=typeof N=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==me||W!==L)&&ty(a,g,u,L),Xr=!1,W=a.memoizedState,g.state=W,Fl(a,u,g,m),Ul();var ee=a.memoizedState;w!==me||W!==ee||Xr||n!==null&&n.dependencies!==null&&xo(n.dependencies)?(typeof N=="function"&&(Rd(a,l,N,u),ee=a.memoizedState),(ce=Xr||ey(a,l,ce,u,W,ee,L)||n!==null&&n.dependencies!==null&&xo(n.dependencies))?(J||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,ee,L),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,ee,L)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&W===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&W===n.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=ee),g.props=u,g.state=ee,g.context=L,u=ce):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&W===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&W===n.memoizedState||(a.flags|=1024),u=!1)}return g=u,Uo(n,a),u=(a.flags&128)!==0,g||u?(g=a.stateNode,l=u&&typeof l.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&u?(a.child=Li(a,n.child,null,m),a.child=Li(a,null,l,m)):Jt(n,a,l,m),a.memoizedState=g.state,n=a.child):n=Rr(n,a,m),n}function gy(n,a,l,u){return Tl(),a.flags|=256,Jt(n,a,l,u),a.child}var Ld={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bd(n){return{baseLanes:n,cachePool:rg()}}function Ud(n,a,l){return n=n!==null?n.childLanes&~l:0,a&&(n|=Gn),n}function yy(n,a,l){var u=a.pendingProps,m=!1,g=(a.flags&128)!==0,w;if((w=g)||(w=n!==null&&n.memoizedState===null?!1:(qt.current&2)!==0),w&&(m=!0,a.flags&=-129),w=(a.flags&32)!==0,a.flags&=-33,n===null){if(at){if(m?ea(a):ta(),at){var N=jt,L;if(L=N){e:{for(L=N,N=cr;L.nodeType!==8;){if(!N){N=null;break e}if(L=nr(L.nextSibling),L===null){N=null;break e}}N=L}N!==null?(a.memoizedState={dehydrated:N,treeContext:Ua!==null?{id:Nr,overflow:Er}:null,retryLane:536870912,hydrationErrors:null},L=En(18,null,null,0),L.stateNode=N,L.return=a,a.child=L,on=a,jt=null,L=!0):L=!1}L||Pa(a)}if(N=a.memoizedState,N!==null&&(N=N.dehydrated,N!==null))return wf(N)?a.lanes=32:a.lanes=536870912,null;Mr(a)}return N=u.children,u=u.fallback,m?(ta(),m=a.mode,N=Fo({mode:"hidden",children:N},m),u=Ba(u,m,l,null),N.return=a,u.return=a,N.sibling=u,a.child=N,m=a.child,m.memoizedState=Bd(l),m.childLanes=Ud(n,w,l),a.memoizedState=Ld,u):(ea(a),Fd(a,N))}if(L=n.memoizedState,L!==null&&(N=L.dehydrated,N!==null)){if(g)a.flags&256?(ea(a),a.flags&=-257,a=Vd(n,a,l)):a.memoizedState!==null?(ta(),a.child=n.child,a.flags|=128,a=null):(ta(),m=u.fallback,N=a.mode,u=Fo({mode:"visible",children:u.children},N),m=Ba(m,N,l,null),m.flags|=2,u.return=a,m.return=a,u.sibling=m,a.child=u,Li(a,n.child,null,l),u=a.child,u.memoizedState=Bd(l),u.childLanes=Ud(n,w,l),a.memoizedState=Ld,a=m);else if(ea(a),wf(N)){if(w=N.nextSibling&&N.nextSibling.dataset,w)var J=w.dgst;w=J,u=Error(i(419)),u.stack="",u.digest=w,Ml({value:u,source:null,stack:null}),a=Vd(n,a,l)}else if($t||Rl(n,a,l,!1),w=(l&n.childLanes)!==0,$t||w){if(w=yt,w!==null&&(u=l&-l,u=(u&42)!==0?1:wc(u),u=(u&(w.suspendedLanes|l))!==0?0:u,u!==0&&u!==L.retryLane))throw L.retryLane=u,ji(n,u),Rn(w,n,u),oy;N.data==="$?"||af(),a=Vd(n,a,l)}else N.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=L.treeContext,jt=nr(N.nextSibling),on=a,at=!0,Va=null,cr=!1,n!==null&&($n[Yn++]=Nr,$n[Yn++]=Er,$n[Yn++]=Ua,Nr=n.id,Er=n.overflow,Ua=a),a=Fd(a,u.children),a.flags|=4096);return a}return m?(ta(),m=u.fallback,N=a.mode,L=n.child,J=L.sibling,u=jr(L,{mode:"hidden",children:u.children}),u.subtreeFlags=L.subtreeFlags&65011712,J!==null?m=jr(J,m):(m=Ba(m,N,l,null),m.flags|=2),m.return=a,u.return=a,u.sibling=m,a.child=u,u=m,m=a.child,N=n.child.memoizedState,N===null?N=Bd(l):(L=N.cachePool,L!==null?(J=Ht._currentValue,L=L.parent!==J?{parent:J,pool:J}:L):L=rg(),N={baseLanes:N.baseLanes|l,cachePool:L}),m.memoizedState=N,m.childLanes=Ud(n,w,l),a.memoizedState=Ld,u):(ea(a),l=n.child,n=l.sibling,l=jr(l,{mode:"visible",children:u.children}),l.return=a,l.sibling=null,n!==null&&(w=a.deletions,w===null?(a.deletions=[n],a.flags|=16):w.push(n)),a.child=l,a.memoizedState=null,l)}function Fd(n,a){return a=Fo({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Fo(n,a){return n=En(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Vd(n,a,l){return Li(a,n.child,null,l),n=Fd(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function by(n,a,l){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a),ad(n.return,a,l)}function Pd(n,a,l,u,m){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:m}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=l,g.tailMode=m)}function xy(n,a,l){var u=a.pendingProps,m=u.revealOrder,g=u.tail;if(Jt(n,a,u.children,l),u=qt.current,(u&2)!==0)u=u&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&by(n,l,a);else if(n.tag===19)by(n,l,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(S(qt,u),m){case"forwards":for(l=a.child,m=null;l!==null;)n=l.alternate,n!==null&&Do(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=a.child,a.child=null):(m=l.sibling,l.sibling=null),Pd(a,!1,m,l,g);break;case"backwards":for(l=null,m=a.child,a.child=null;m!==null;){if(n=m.alternate,n!==null&&Do(n)===null){a.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Pd(a,!0,l,null,g);break;case"together":Pd(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Rr(n,a,l){if(n!==null&&(a.dependencies=n.dependencies),la|=a.lanes,(l&a.childLanes)===0)if(n!==null){if(Rl(n,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,l=jr(n,n.pendingProps),a.child=l,l.return=a;n.sibling!==null;)n=n.sibling,l=l.sibling=jr(n,n.pendingProps),l.return=a;l.sibling=null}return a.child}function Hd(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&xo(n)))}function Kw(n,a,l){switch(a.tag){case 3:ge(a,a.stateNode.containerInfo),Jr(a,Ht,n.memoizedState.cache),Tl();break;case 27:case 5:De(a);break;case 4:ge(a,a.stateNode.containerInfo);break;case 10:Jr(a,a.type,a.memoizedProps.value);break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(ea(a),a.flags|=128,null):(l&a.child.childLanes)!==0?yy(n,a,l):(ea(a),n=Rr(n,a,l),n!==null?n.sibling:null);ea(a);break;case 19:var m=(n.flags&128)!==0;if(u=(l&a.childLanes)!==0,u||(Rl(n,a,l,!1),u=(l&a.childLanes)!==0),m){if(u)return xy(n,a,l);a.flags|=128}if(m=a.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),S(qt,qt.current),u)break;return null;case 22:case 23:return a.lanes=0,fy(n,a,l);case 24:Jr(a,Ht,n.memoizedState.cache)}return Rr(n,a,l)}function vy(n,a,l){if(n!==null)if(n.memoizedProps!==a.pendingProps)$t=!0;else{if(!Hd(n,l)&&(a.flags&128)===0)return $t=!1,Kw(n,a,l);$t=(n.flags&131072)!==0}else $t=!1,at&&(a.flags&1048576)!==0&&Xp(a,bo,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var u=a.elementType,m=u._init;if(u=m(u._payload),a.type=u,typeof u=="function")Qc(u)?(n=Ya(u,n),a.tag=1,a=py(null,a,u,n,l)):(a.tag=0,a=Dd(null,a,u,n,l));else{if(u!=null){if(m=u.$$typeof,m===Z){a.tag=11,a=uy(null,a,u,n,l);break e}else if(m===P){a.tag=14,a=cy(null,a,u,n,l);break e}}throw a=de(u)||u,Error(i(306,a,""))}}return a;case 0:return Dd(n,a,a.type,a.pendingProps,l);case 1:return u=a.type,m=Ya(u,a.pendingProps),py(n,a,u,m,l);case 3:e:{if(ge(a,a.stateNode.containerInfo),n===null)throw Error(i(387));u=a.pendingProps;var g=a.memoizedState;m=g.element,dd(n,a),Fl(a,u,null,l);var w=a.memoizedState;if(u=w.cache,Jr(a,Ht,u),u!==g.cache&&id(a,[Ht],l,!0),Ul(),u=w.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:w.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=gy(n,a,u,l);break e}else if(u!==m){m=qn(Error(i(424)),a),Ml(m),a=gy(n,a,u,l);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(jt=nr(n.firstChild),on=a,at=!0,Va=null,cr=!0,l=Kg(a,null,u,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Tl(),u===m){a=Rr(n,a,l);break e}Jt(n,a,u,l)}a=a.child}return a;case 26:return Uo(n,a),n===null?(l=S0(a.type,null,a.pendingProps,null))?a.memoizedState=l:at||(l=a.type,n=a.pendingProps,u=Wo(ne.current).createElement(l),u[Wt]=a,u[pn]=n,Qt(u,l,n),It(u),a.stateNode=u):a.memoizedState=S0(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return De(a),n===null&&at&&(u=a.stateNode=_0(a.type,a.pendingProps,ne.current),on=a,cr=!0,m=jt,ca(a.type)?(kf=m,jt=nr(u.firstChild)):jt=m),Jt(n,a,a.pendingProps.children,l),Uo(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&at&&((m=u=jt)&&(u=N2(u,a.type,a.pendingProps,cr),u!==null?(a.stateNode=u,on=a,jt=nr(u.firstChild),cr=!1,m=!0):m=!1),m||Pa(a)),De(a),m=a.type,g=a.pendingProps,w=n!==null?n.memoizedProps:null,u=g.children,xf(m,g)?u=null:w!==null&&xf(m,w)&&(a.flags|=32),a.memoizedState!==null&&(m=yd(n,a,Iw,null,null,l),ss._currentValue=m),Uo(n,a),Jt(n,a,u,l),a.child;case 6:return n===null&&at&&((n=l=jt)&&(l=E2(l,a.pendingProps,cr),l!==null?(a.stateNode=l,on=a,jt=null,n=!0):n=!1),n||Pa(a)),null;case 13:return yy(n,a,l);case 4:return ge(a,a.stateNode.containerInfo),u=a.pendingProps,n===null?a.child=Li(a,null,u,l):Jt(n,a,u,l),a.child;case 11:return uy(n,a,a.type,a.pendingProps,l);case 7:return Jt(n,a,a.pendingProps,l),a.child;case 8:return Jt(n,a,a.pendingProps.children,l),a.child;case 12:return Jt(n,a,a.pendingProps.children,l),a.child;case 10:return u=a.pendingProps,Jr(a,a.type,u.value),Jt(n,a,u.children,l),a.child;case 9:return m=a.type._context,u=a.pendingProps.children,qa(a),m=en(m),u=u(m),a.flags|=1,Jt(n,a,u,l),a.child;case 14:return cy(n,a,a.type,a.pendingProps,l);case 15:return dy(n,a,a.type,a.pendingProps,l);case 19:return xy(n,a,l);case 31:return u=a.pendingProps,l=a.mode,u={mode:u.mode,children:u.children},n===null?(l=Fo(u,l),l.ref=a.ref,a.child=l,l.return=a,a=l):(l=jr(n.child,u),l.ref=a.ref,a.child=l,l.return=a,a=l),a;case 22:return fy(n,a,l);case 24:return qa(a),u=en(Ht),n===null?(m=od(),m===null&&(m=yt,g=ld(),m.pooledCache=g,g.refCount++,g!==null&&(m.pooledCacheLanes|=l),m=g),a.memoizedState={parent:u,cache:m},cd(a),Jr(a,Ht,m)):((n.lanes&l)!==0&&(dd(n,a),Fl(a,null,null,l),Ul()),m=n.memoizedState,g=a.memoizedState,m.parent!==u?(m={parent:u,cache:u},a.memoizedState=m,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=m),Jr(a,Ht,u)):(u=g.cache,Jr(a,Ht,u),u!==m.cache&&id(a,[Ht],l,!0))),Jt(n,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Or(n){n.flags|=4}function _y(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!A0(a)){if(a=Zn.current,a!==null&&((We&4194048)===We?dr!==null:(We&62914560)!==We&&(We&536870912)===0||a!==dr))throw Ll=ud,ag;n.flags|=8192}}function Vo(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Wh():536870912,n.lanes|=a,Vi|=a)}function Yl(n,a){if(!at)switch(n.tailMode){case"hidden":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function St(n){var a=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(a)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,u|=m.subtreeFlags&65011712,u|=m.flags&65011712,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,u|=m.subtreeFlags,u|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=u,n.childLanes=l,a}function Ww(n,a,l){var u=a.pendingProps;switch(td(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(a),null;case 1:return St(a),null;case 3:return l=a.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),Ar(Ht),Ae(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(n===null||n.child===null)&&(Al(a)?Or(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Wp())),St(a),null;case 26:return l=a.memoizedState,n===null?(Or(a),l!==null?(St(a),_y(a,l)):(St(a),a.flags&=-16777217)):l?l!==n.memoizedState?(Or(a),St(a),_y(a,l)):(St(a),a.flags&=-16777217):(n.memoizedProps!==u&&Or(a),St(a),a.flags&=-16777217),null;case 27:ke(a),l=ne.current;var m=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Or(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return St(a),null}n=X.current,Al(a)?Qp(a):(n=_0(m,u,l),a.stateNode=n,Or(a))}return St(a),null;case 5:if(ke(a),l=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Or(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return St(a),null}if(n=X.current,Al(a))Qp(a);else{switch(m=Wo(ne.current),n){case 1:n=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:n=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":n=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":n=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":n=m.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?m.createElement("select",{is:u.is}):m.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?m.createElement(l,{is:u.is}):m.createElement(l)}}n[Wt]=a,n[pn]=u;e:for(m=a.child;m!==null;){if(m.tag===5||m.tag===6)n.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===a)break e;for(;m.sibling===null;){if(m.return===null||m.return===a)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}a.stateNode=n;e:switch(Qt(n,l,u),l){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Or(a)}}return St(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==u&&Or(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(i(166));if(n=ne.current,Al(a)){if(n=a.stateNode,l=a.memoizedProps,u=null,m=on,m!==null)switch(m.tag){case 27:case 5:u=m.memoizedProps}n[Wt]=a,n=!!(n.nodeValue===l||u!==null&&u.suppressHydrationWarning===!0||h0(n.nodeValue,l)),n||Pa(a)}else n=Wo(n).createTextNode(u),n[Wt]=a,a.stateNode=n}return St(a),null;case 13:if(u=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(m=Al(a),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(i(318));if(m=a.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(i(317));m[Wt]=a}else Tl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;St(a),m=!1}else m=Wp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=m),m=!0;if(!m)return a.flags&256?(Mr(a),a):(Mr(a),null)}if(Mr(a),(a.flags&128)!==0)return a.lanes=l,a;if(l=u!==null,n=n!==null&&n.memoizedState!==null,l){u=a.child,m=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(m=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==m&&(u.flags|=2048)}return l!==n&&l&&(a.child.flags|=8192),Vo(a,a.updateQueue),St(a),null;case 4:return Ae(),n===null&&hf(a.stateNode.containerInfo),St(a),null;case 10:return Ar(a.type),St(a),null;case 19:if($(qt),m=a.memoizedState,m===null)return St(a),null;if(u=(a.flags&128)!==0,g=m.rendering,g===null)if(u)Yl(m,!1);else{if(Nt!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=Do(n),g!==null){for(a.flags|=128,Yl(m,!1),n=g.updateQueue,a.updateQueue=n,Vo(a,n),a.subtreeFlags=0,n=l,l=a.child;l!==null;)Jp(l,n),l=l.sibling;return S(qt,qt.current&1|2),a.child}n=n.sibling}m.tail!==null&&it()>qo&&(a.flags|=128,u=!0,Yl(m,!1),a.lanes=4194304)}else{if(!u)if(n=Do(g),n!==null){if(a.flags|=128,u=!0,n=n.updateQueue,a.updateQueue=n,Vo(a,n),Yl(m,!0),m.tail===null&&m.tailMode==="hidden"&&!g.alternate&&!at)return St(a),null}else 2*it()-m.renderingStartTime>qo&&l!==536870912&&(a.flags|=128,u=!0,Yl(m,!1),a.lanes=4194304);m.isBackwards?(g.sibling=a.child,a.child=g):(n=m.last,n!==null?n.sibling=g:a.child=g,m.last=g)}return m.tail!==null?(a=m.tail,m.rendering=a,m.tail=a.sibling,m.renderingStartTime=it(),a.sibling=null,n=qt.current,S(qt,u?n&1|2:n&1),a):(St(a),null);case 22:case 23:return Mr(a),pd(),u=a.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(l&536870912)!==0&&(a.flags&128)===0&&(St(a),a.subtreeFlags&6&&(a.flags|=8192)):St(a),l=a.updateQueue,l!==null&&Vo(a,l.retryQueue),l=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==l&&(a.flags|=2048),n!==null&&$(Ia),null;case 24:return l=null,n!==null&&(l=n.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Ar(Ht),St(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function e2(n,a){switch(td(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Ar(Ht),Ae(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return ke(a),null;case 13:if(Mr(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Tl()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return $(qt),null;case 4:return Ae(),null;case 10:return Ar(a.type),null;case 22:case 23:return Mr(a),pd(),n!==null&&$(Ia),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Ar(Ht),null;case 25:return null;default:return null}}function wy(n,a){switch(td(a),a.tag){case 3:Ar(Ht),Ae();break;case 26:case 27:case 5:ke(a);break;case 4:Ae();break;case 13:Mr(a);break;case 19:$(qt);break;case 10:Ar(a.type);break;case 22:case 23:Mr(a),pd(),n!==null&&$(Ia);break;case 24:Ar(Ht)}}function Zl(n,a){try{var l=a.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var m=u.next;l=m;do{if((l.tag&n)===n){u=void 0;var g=l.create,w=l.inst;u=g(),w.destroy=u}l=l.next}while(l!==m)}}catch(N){mt(a,a.return,N)}}function na(n,a,l){try{var u=a.updateQueue,m=u!==null?u.lastEffect:null;if(m!==null){var g=m.next;u=g;do{if((u.tag&n)===n){var w=u.inst,N=w.destroy;if(N!==void 0){w.destroy=void 0,m=a;var L=l,J=N;try{J()}catch(ce){mt(m,L,ce)}}}u=u.next}while(u!==g)}}catch(ce){mt(a,a.return,ce)}}function ky(n){var a=n.updateQueue;if(a!==null){var l=n.stateNode;try{cg(a,l)}catch(u){mt(n,n.return,u)}}}function Sy(n,a,l){l.props=Ya(n.type,n.memoizedProps),l.state=n.memoizedState;try{l.componentWillUnmount()}catch(u){mt(n,a,u)}}function Gl(n,a){try{var l=n.ref;if(l!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof l=="function"?n.refCleanup=l(u):l.current=u}}catch(m){mt(n,a,m)}}function fr(n,a){var l=n.ref,u=n.refCleanup;if(l!==null)if(typeof u=="function")try{u()}catch(m){mt(n,a,m)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(m){mt(n,a,m)}else l.current=null}function jy(n){var a=n.type,l=n.memoizedProps,u=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&u.focus();break e;case"img":l.src?u.src=l.src:l.srcSet&&(u.srcset=l.srcSet)}}catch(m){mt(n,n.return,m)}}function qd(n,a,l){try{var u=n.stateNode;_2(u,n.type,l,a),u[pn]=a}catch(m){mt(n,n.return,m)}}function Ny(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ca(n.type)||n.tag===4}function Id(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ny(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ca(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $d(n,a,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(n,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(n),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=Ko));else if(u!==4&&(u===27&&ca(n.type)&&(l=n.stateNode,a=null),n=n.child,n!==null))for($d(n,a,l),n=n.sibling;n!==null;)$d(n,a,l),n=n.sibling}function Po(n,a,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?l.insertBefore(n,a):l.appendChild(n);else if(u!==4&&(u===27&&ca(n.type)&&(l=n.stateNode),n=n.child,n!==null))for(Po(n,a,l),n=n.sibling;n!==null;)Po(n,a,l),n=n.sibling}function Ey(n){var a=n.stateNode,l=n.memoizedProps;try{for(var u=n.type,m=a.attributes;m.length;)a.removeAttributeNode(m[0]);Qt(a,u,l),a[Wt]=n,a[pn]=l}catch(g){mt(n,n.return,g)}}var zr=!1,Rt=!1,Yd=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,Yt=null;function t2(n,a){if(n=n.containerInfo,yf=iu,n=Fp(n),Ic(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var m=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var w=0,N=-1,L=-1,J=0,ce=0,me=n,W=null;t:for(;;){for(var ee;me!==l||m!==0&&me.nodeType!==3||(N=w+m),me!==g||u!==0&&me.nodeType!==3||(L=w+u),me.nodeType===3&&(w+=me.nodeValue.length),(ee=me.firstChild)!==null;)W=me,me=ee;for(;;){if(me===n)break t;if(W===l&&++J===m&&(N=w),W===g&&++ce===u&&(L=w),(ee=me.nextSibling)!==null)break;me=W,W=me.parentNode}me=ee}l=N===-1||L===-1?null:{start:N,end:L}}else l=null}l=l||{start:0,end:0}}else l=null;for(bf={focusedElem:n,selectionRange:l},iu=!1,Yt=a;Yt!==null;)if(a=Yt,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,Yt=n;else for(;Yt!==null;){switch(a=Yt,g=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,l=a,m=g.memoizedProps,g=g.memoizedState,u=l.stateNode;try{var Fe=Ya(l.type,m,l.elementType===l.type);n=u.getSnapshotBeforeUpdate(Fe,g),u.__reactInternalSnapshotBeforeUpdate=n}catch(Le){mt(l,l.return,Le)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,l=n.nodeType,l===9)_f(n);else if(l===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":_f(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Yt=n;break}Yt=a.return}}function Ay(n,a,l){var u=l.flags;switch(l.tag){case 0:case 11:case 15:ra(n,l),u&4&&Zl(5,l);break;case 1:if(ra(n,l),u&4)if(n=l.stateNode,a===null)try{n.componentDidMount()}catch(w){mt(l,l.return,w)}else{var m=Ya(l.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(m,a,n.__reactInternalSnapshotBeforeUpdate)}catch(w){mt(l,l.return,w)}}u&64&&ky(l),u&512&&Gl(l,l.return);break;case 3:if(ra(n,l),u&64&&(n=l.updateQueue,n!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{cg(n,a)}catch(w){mt(l,l.return,w)}}break;case 27:a===null&&u&4&&Ey(l);case 26:case 5:ra(n,l),a===null&&u&4&&jy(l),u&512&&Gl(l,l.return);break;case 12:ra(n,l);break;case 13:ra(n,l),u&4&&Ry(n,l),u&64&&(n=l.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(l=c2.bind(null,l),C2(n,l))));break;case 22:if(u=l.memoizedState!==null||zr,!u){a=a!==null&&a.memoizedState!==null||Rt,m=zr;var g=Rt;zr=u,(Rt=a)&&!g?aa(n,l,(l.subtreeFlags&8772)!==0):ra(n,l),zr=m,Rt=g}break;case 30:break;default:ra(n,l)}}function Ty(n){var a=n.alternate;a!==null&&(n.alternate=null,Ty(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&jc(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var vt=null,bn=!1;function Dr(n,a,l){for(l=l.child;l!==null;)My(n,a,l),l=l.sibling}function My(n,a,l){if(ie&&typeof ie.onCommitFiberUnmount=="function")try{ie.onCommitFiberUnmount(H,l)}catch{}switch(l.tag){case 26:Rt||fr(l,a),Dr(n,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Rt||fr(l,a);var u=vt,m=bn;ca(l.type)&&(vt=l.stateNode,bn=!1),Dr(n,a,l),rs(l.stateNode),vt=u,bn=m;break;case 5:Rt||fr(l,a);case 6:if(u=vt,m=bn,vt=null,Dr(n,a,l),vt=u,bn=m,vt!==null)if(bn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(l.stateNode)}catch(g){mt(l,a,g)}else try{vt.removeChild(l.stateNode)}catch(g){mt(l,a,g)}break;case 18:vt!==null&&(bn?(n=vt,x0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,l.stateNode),ds(n)):x0(vt,l.stateNode));break;case 4:u=vt,m=bn,vt=l.stateNode.containerInfo,bn=!0,Dr(n,a,l),vt=u,bn=m;break;case 0:case 11:case 14:case 15:Rt||na(2,l,a),Rt||na(4,l,a),Dr(n,a,l);break;case 1:Rt||(fr(l,a),u=l.stateNode,typeof u.componentWillUnmount=="function"&&Sy(l,a,u)),Dr(n,a,l);break;case 21:Dr(n,a,l);break;case 22:Rt=(u=Rt)||l.memoizedState!==null,Dr(n,a,l),Rt=u;break;default:Dr(n,a,l)}}function Ry(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ds(n)}catch(l){mt(a,a.return,l)}}function n2(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Cy),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Cy),a;default:throw Error(i(435,n.tag))}}function Zd(n,a){var l=n2(n);a.forEach(function(u){var m=d2.bind(null,n,u);l.has(u)||(l.add(u),u.then(m,m))})}function Cn(n,a){var l=a.deletions;if(l!==null)for(var u=0;u<l.length;u++){var m=l[u],g=n,w=a,N=w;e:for(;N!==null;){switch(N.tag){case 27:if(ca(N.type)){vt=N.stateNode,bn=!1;break e}break;case 5:vt=N.stateNode,bn=!1;break e;case 3:case 4:vt=N.stateNode.containerInfo,bn=!0;break e}N=N.return}if(vt===null)throw Error(i(160));My(g,w,m),vt=null,bn=!1,g=m.alternate,g!==null&&(g.return=null),m.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Oy(a,n),a=a.sibling}var tr=null;function Oy(n,a){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Cn(a,n),An(n),u&4&&(na(3,n,n.return),Zl(3,n),na(5,n,n.return));break;case 1:Cn(a,n),An(n),u&512&&(Rt||l===null||fr(l,l.return)),u&64&&zr&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(l=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=l===null?u:l.concat(u))));break;case 26:var m=tr;if(Cn(a,n),An(n),u&512&&(Rt||l===null||fr(l,l.return)),u&4){var g=l!==null?l.memoizedState:null;if(u=n.memoizedState,l===null)if(u===null)if(n.stateNode===null){e:{u=n.type,l=n.memoizedProps,m=m.ownerDocument||m;t:switch(u){case"title":g=m.getElementsByTagName("title")[0],(!g||g[bl]||g[Wt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=m.createElement(u),m.head.insertBefore(g,m.querySelector("head > title"))),Qt(g,u,l),g[Wt]=n,It(g),u=g;break e;case"link":var w=E0("link","href",m).get(u+(l.href||""));if(w){for(var N=0;N<w.length;N++)if(g=w[N],g.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){w.splice(N,1);break t}}g=m.createElement(u),Qt(g,u,l),m.head.appendChild(g);break;case"meta":if(w=E0("meta","content",m).get(u+(l.content||""))){for(N=0;N<w.length;N++)if(g=w[N],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){w.splice(N,1);break t}}g=m.createElement(u),Qt(g,u,l),m.head.appendChild(g);break;default:throw Error(i(468,u))}g[Wt]=n,It(g),u=g}n.stateNode=u}else C0(m,n.type,n.stateNode);else n.stateNode=N0(m,u,n.memoizedProps);else g!==u?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,u===null?C0(m,n.type,n.stateNode):N0(m,u,n.memoizedProps)):u===null&&n.stateNode!==null&&qd(n,n.memoizedProps,l.memoizedProps)}break;case 27:Cn(a,n),An(n),u&512&&(Rt||l===null||fr(l,l.return)),l!==null&&u&4&&qd(n,n.memoizedProps,l.memoizedProps);break;case 5:if(Cn(a,n),An(n),u&512&&(Rt||l===null||fr(l,l.return)),n.flags&32){m=n.stateNode;try{bi(m,"")}catch(ee){mt(n,n.return,ee)}}u&4&&n.stateNode!=null&&(m=n.memoizedProps,qd(n,m,l!==null?l.memoizedProps:m)),u&1024&&(Yd=!0);break;case 6:if(Cn(a,n),An(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,l=n.stateNode;try{l.nodeValue=u}catch(ee){mt(n,n.return,ee)}}break;case 3:if(nu=null,m=tr,tr=eu(a.containerInfo),Cn(a,n),tr=m,An(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{ds(a.containerInfo)}catch(ee){mt(n,n.return,ee)}Yd&&(Yd=!1,zy(n));break;case 4:u=tr,tr=eu(n.stateNode.containerInfo),Cn(a,n),An(n),tr=u;break;case 12:Cn(a,n),An(n);break;case 13:Cn(a,n),An(n),n.child.flags&8192&&n.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Wd=it()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Zd(n,u)));break;case 22:m=n.memoizedState!==null;var L=l!==null&&l.memoizedState!==null,J=zr,ce=Rt;if(zr=J||m,Rt=ce||L,Cn(a,n),Rt=ce,zr=J,An(n),u&8192)e:for(a=n.stateNode,a._visibility=m?a._visibility&-2:a._visibility|1,m&&(l===null||L||zr||Rt||Za(n)),l=null,a=n;;){if(a.tag===5||a.tag===26){if(l===null){L=l=a;try{if(g=L.stateNode,m)w=g.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{N=L.stateNode;var me=L.memoizedProps.style,W=me!=null&&me.hasOwnProperty("display")?me.display:null;N.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(ee){mt(L,L.return,ee)}}}else if(a.tag===6){if(l===null){L=a;try{L.stateNode.nodeValue=m?"":L.memoizedProps}catch(ee){mt(L,L.return,ee)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=n.updateQueue,u!==null&&(l=u.retryQueue,l!==null&&(u.retryQueue=null,Zd(n,l))));break;case 19:Cn(a,n),An(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Zd(n,u)));break;case 30:break;case 21:break;default:Cn(a,n),An(n)}}function An(n){var a=n.flags;if(a&2){try{for(var l,u=n.return;u!==null;){if(Ny(u)){l=u;break}u=u.return}if(l==null)throw Error(i(160));switch(l.tag){case 27:var m=l.stateNode,g=Id(n);Po(n,g,m);break;case 5:var w=l.stateNode;l.flags&32&&(bi(w,""),l.flags&=-33);var N=Id(n);Po(n,N,w);break;case 3:case 4:var L=l.stateNode.containerInfo,J=Id(n);$d(n,J,L);break;default:throw Error(i(161))}}catch(ce){mt(n,n.return,ce)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function zy(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;zy(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function ra(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Ay(n,a.alternate,a),a=a.sibling}function Za(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:na(4,a,a.return),Za(a);break;case 1:fr(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Sy(a,a.return,l),Za(a);break;case 27:rs(a.stateNode);case 26:case 5:fr(a,a.return),Za(a);break;case 22:a.memoizedState===null&&Za(a);break;case 30:Za(a);break;default:Za(a)}n=n.sibling}}function aa(n,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,m=n,g=a,w=g.flags;switch(g.tag){case 0:case 11:case 15:aa(m,g,l),Zl(4,g);break;case 1:if(aa(m,g,l),u=g,m=u.stateNode,typeof m.componentDidMount=="function")try{m.componentDidMount()}catch(J){mt(u,u.return,J)}if(u=g,m=u.updateQueue,m!==null){var N=u.stateNode;try{var L=m.shared.hiddenCallbacks;if(L!==null)for(m.shared.hiddenCallbacks=null,m=0;m<L.length;m++)ug(L[m],N)}catch(J){mt(u,u.return,J)}}l&&w&64&&ky(g),Gl(g,g.return);break;case 27:Ey(g);case 26:case 5:aa(m,g,l),l&&u===null&&w&4&&jy(g),Gl(g,g.return);break;case 12:aa(m,g,l);break;case 13:aa(m,g,l),l&&w&4&&Ry(m,g);break;case 22:g.memoizedState===null&&aa(m,g,l),Gl(g,g.return);break;case 30:break;default:aa(m,g,l)}a=a.sibling}}function Gd(n,a){var l=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==l&&(n!=null&&n.refCount++,l!=null&&Ol(l))}function Jd(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Ol(n))}function mr(n,a,l,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Dy(n,a,l,u),a=a.sibling}function Dy(n,a,l,u){var m=a.flags;switch(a.tag){case 0:case 11:case 15:mr(n,a,l,u),m&2048&&Zl(9,a);break;case 1:mr(n,a,l,u);break;case 3:mr(n,a,l,u),m&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Ol(n)));break;case 12:if(m&2048){mr(n,a,l,u),n=a.stateNode;try{var g=a.memoizedProps,w=g.id,N=g.onPostCommit;typeof N=="function"&&N(w,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(L){mt(a,a.return,L)}}else mr(n,a,l,u);break;case 13:mr(n,a,l,u);break;case 23:break;case 22:g=a.stateNode,w=a.alternate,a.memoizedState!==null?g._visibility&2?mr(n,a,l,u):Jl(n,a):g._visibility&2?mr(n,a,l,u):(g._visibility|=2,Bi(n,a,l,u,(a.subtreeFlags&10256)!==0)),m&2048&&Gd(w,a);break;case 24:mr(n,a,l,u),m&2048&&Jd(a.alternate,a);break;default:mr(n,a,l,u)}}function Bi(n,a,l,u,m){for(m=m&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=n,w=a,N=l,L=u,J=w.flags;switch(w.tag){case 0:case 11:case 15:Bi(g,w,N,L,m),Zl(8,w);break;case 23:break;case 22:var ce=w.stateNode;w.memoizedState!==null?ce._visibility&2?Bi(g,w,N,L,m):Jl(g,w):(ce._visibility|=2,Bi(g,w,N,L,m)),m&&J&2048&&Gd(w.alternate,w);break;case 24:Bi(g,w,N,L,m),m&&J&2048&&Jd(w.alternate,w);break;default:Bi(g,w,N,L,m)}a=a.sibling}}function Jl(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=n,u=a,m=u.flags;switch(u.tag){case 22:Jl(l,u),m&2048&&Gd(u.alternate,u);break;case 24:Jl(l,u),m&2048&&Jd(u.alternate,u);break;default:Jl(l,u)}a=a.sibling}}var Xl=8192;function Ui(n){if(n.subtreeFlags&Xl)for(n=n.child;n!==null;)Ly(n),n=n.sibling}function Ly(n){switch(n.tag){case 26:Ui(n),n.flags&Xl&&n.memoizedState!==null&&P2(tr,n.memoizedState,n.memoizedProps);break;case 5:Ui(n);break;case 3:case 4:var a=tr;tr=eu(n.stateNode.containerInfo),Ui(n),tr=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Xl,Xl=16777216,Ui(n),Xl=a):Ui(n));break;default:Ui(n)}}function By(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Ql(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];Yt=u,Fy(u,n)}By(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Uy(n),n=n.sibling}function Uy(n){switch(n.tag){case 0:case 11:case 15:Ql(n),n.flags&2048&&na(9,n,n.return);break;case 3:Ql(n);break;case 12:Ql(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,Ho(n)):Ql(n);break;default:Ql(n)}}function Ho(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];Yt=u,Fy(u,n)}By(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:na(8,a,a.return),Ho(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,Ho(a));break;default:Ho(a)}n=n.sibling}}function Fy(n,a){for(;Yt!==null;){var l=Yt;switch(l.tag){case 0:case 11:case 15:na(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var u=l.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Ol(l.memoizedState.cache)}if(u=l.child,u!==null)u.return=l,Yt=u;else e:for(l=n;Yt!==null;){u=Yt;var m=u.sibling,g=u.return;if(Ty(u),u===l){Yt=null;break e}if(m!==null){m.return=g,Yt=m;break e}Yt=g}}}var r2={getCacheForType:function(n){var a=en(Ht),l=a.data.get(n);return l===void 0&&(l=n(),a.data.set(n,l)),l}},a2=typeof WeakMap=="function"?WeakMap:Map,st=0,yt=null,Je=null,We=0,ot=0,Tn=null,ia=!1,Fi=!1,Xd=!1,Lr=0,Nt=0,la=0,Ga=0,Qd=0,Gn=0,Vi=0,Kl=null,xn=null,Kd=!1,Wd=0,qo=1/0,Io=null,sa=null,Xt=0,oa=null,Pi=null,Hi=0,ef=0,tf=null,Vy=null,Wl=0,nf=null;function Mn(){if((st&2)!==0&&We!==0)return We&-We;if(U.T!==null){var n=Ai;return n!==0?n:cf()}return np()}function Py(){Gn===0&&(Gn=(We&536870912)===0||at?Kh():536870912);var n=Zn.current;return n!==null&&(n.flags|=32),Gn}function Rn(n,a,l){(n===yt&&(ot===2||ot===9)||n.cancelPendingCommit!==null)&&(qi(n,0),ua(n,We,Gn,!1)),yl(n,l),((st&2)===0||n!==yt)&&(n===yt&&((st&2)===0&&(Ga|=l),Nt===4&&ua(n,We,Gn,!1)),hr(n))}function Hy(n,a,l){if((st&6)!==0)throw Error(i(327));var u=!l&&(a&124)===0&&(a&n.expiredLanes)===0||mn(n,a),m=u?s2(n,a):lf(n,a,!0),g=u;do{if(m===0){Fi&&!u&&ua(n,a,0,!1);break}else{if(l=n.current.alternate,g&&!i2(l)){m=lf(n,a,!1),g=!1;continue}if(m===2){if(g=a,n.errorRecoveryDisabledLanes&g)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){a=w;e:{var N=n;m=Kl;var L=N.current.memoizedState.isDehydrated;if(L&&(qi(N,w).flags|=256),w=lf(N,w,!1),w!==2){if(Xd&&!L){N.errorRecoveryDisabledLanes|=g,Ga|=g,m=4;break e}g=xn,xn=m,g!==null&&(xn===null?xn=g:xn.push.apply(xn,g))}m=w}if(g=!1,m!==2)continue}}if(m===1){qi(n,0),ua(n,a,0,!0);break}e:{switch(u=n,g=m,g){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:ua(u,a,Gn,!ia);break e;case 2:xn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(m=Wd+300-it(),10<m)){if(ua(u,a,Gn,!ia),Tt(u,0,!0)!==0)break e;u.timeoutHandle=y0(qy.bind(null,u,l,xn,Io,Kd,a,Gn,Ga,Vi,ia,g,2,-0,0),m);break e}qy(u,l,xn,Io,Kd,a,Gn,Ga,Vi,ia,g,0,-0,0)}}break}while(!0);hr(n)}function qy(n,a,l,u,m,g,w,N,L,J,ce,me,W,ee){if(n.timeoutHandle=-1,me=a.subtreeFlags,(me&8192||(me&16785408)===16785408)&&(ls={stylesheets:null,count:0,unsuspend:V2},Ly(a),me=H2(),me!==null)){n.cancelPendingCommit=me(Xy.bind(null,n,a,g,l,u,m,w,N,L,ce,1,W,ee)),ua(n,g,w,!J);return}Xy(n,a,g,l,u,m,w,N,L)}function i2(n){for(var a=n;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var u=0;u<l.length;u++){var m=l[u],g=m.getSnapshot;m=m.value;try{if(!Nn(g(),m))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ua(n,a,l,u){a&=~Qd,a&=~Ga,n.suspendedLanes|=a,n.pingedLanes&=~a,u&&(n.warmLanes|=a),u=n.expirationTimes;for(var m=a;0<m;){var g=31-Ne(m),w=1<<g;u[g]=-1,m&=~w}l!==0&&ep(n,l,a)}function $o(){return(st&6)===0?(es(0),!1):!0}function rf(){if(Je!==null){if(ot===0)var n=Je.return;else n=Je,Cr=Ha=null,vd(n),Di=null,Il=0,n=Je;for(;n!==null;)wy(n.alternate,n),n=n.return;Je=null}}function qi(n,a){var l=n.timeoutHandle;l!==-1&&(n.timeoutHandle=-1,k2(l)),l=n.cancelPendingCommit,l!==null&&(n.cancelPendingCommit=null,l()),rf(),yt=n,Je=l=jr(n.current,null),We=a,ot=0,Tn=null,ia=!1,Fi=mn(n,a),Xd=!1,Vi=Gn=Qd=Ga=la=Nt=0,xn=Kl=null,Kd=!1,(a&8)!==0&&(a|=a&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=a;0<u;){var m=31-Ne(u),g=1<<m;a|=n[m],u&=~g}return Lr=a,mo(),l}function Iy(n,a){$e=null,U.H=Ro,a===Dl||a===wo?(a=sg(),ot=3):a===ag?(a=sg(),ot=4):ot=a===oy?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Tn=a,Je===null&&(Nt=1,Bo(n,qn(a,n.current)))}function $y(){var n=U.H;return U.H=Ro,n===null?Ro:n}function Yy(){var n=U.A;return U.A=r2,n}function af(){Nt=4,ia||(We&4194048)!==We&&Zn.current!==null||(Fi=!0),(la&134217727)===0&&(Ga&134217727)===0||yt===null||ua(yt,We,Gn,!1)}function lf(n,a,l){var u=st;st|=2;var m=$y(),g=Yy();(yt!==n||We!==a)&&(Io=null,qi(n,a)),a=!1;var w=Nt;e:do try{if(ot!==0&&Je!==null){var N=Je,L=Tn;switch(ot){case 8:rf(),w=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(a=!0);var J=ot;if(ot=0,Tn=null,Ii(n,N,L,J),l&&Fi){w=0;break e}break;default:J=ot,ot=0,Tn=null,Ii(n,N,L,J)}}l2(),w=Nt;break}catch(ce){Iy(n,ce)}while(!0);return a&&n.shellSuspendCounter++,Cr=Ha=null,st=u,U.H=m,U.A=g,Je===null&&(yt=null,We=0,mo()),w}function l2(){for(;Je!==null;)Zy(Je)}function s2(n,a){var l=st;st|=2;var u=$y(),m=Yy();yt!==n||We!==a?(Io=null,qo=it()+500,qi(n,a)):Fi=mn(n,a);e:do try{if(ot!==0&&Je!==null){a=Je;var g=Tn;t:switch(ot){case 1:ot=0,Tn=null,Ii(n,a,g,1);break;case 2:case 9:if(ig(g)){ot=0,Tn=null,Gy(a);break}a=function(){ot!==2&&ot!==9||yt!==n||(ot=7),hr(n)},g.then(a,a);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:ig(g)?(ot=0,Tn=null,Gy(a)):(ot=0,Tn=null,Ii(n,a,g,7));break;case 5:var w=null;switch(Je.tag){case 26:w=Je.memoizedState;case 5:case 27:var N=Je;if(!w||A0(w)){ot=0,Tn=null;var L=N.sibling;if(L!==null)Je=L;else{var J=N.return;J!==null?(Je=J,Yo(J)):Je=null}break t}}ot=0,Tn=null,Ii(n,a,g,5);break;case 6:ot=0,Tn=null,Ii(n,a,g,6);break;case 8:rf(),Nt=6;break e;default:throw Error(i(462))}}o2();break}catch(ce){Iy(n,ce)}while(!0);return Cr=Ha=null,U.H=u,U.A=m,st=l,Je!==null?0:(yt=null,We=0,mo(),Nt)}function o2(){for(;Je!==null&&!xt();)Zy(Je)}function Zy(n){var a=vy(n.alternate,n,Lr);n.memoizedProps=n.pendingProps,a===null?Yo(n):Je=a}function Gy(n){var a=n,l=a.alternate;switch(a.tag){case 15:case 0:a=hy(l,a,a.pendingProps,a.type,void 0,We);break;case 11:a=hy(l,a,a.pendingProps,a.type.render,a.ref,We);break;case 5:vd(a);default:wy(l,a),a=Je=Jp(a,Lr),a=vy(l,a,Lr)}n.memoizedProps=n.pendingProps,a===null?Yo(n):Je=a}function Ii(n,a,l,u){Cr=Ha=null,vd(a),Di=null,Il=0;var m=a.return;try{if(Qw(n,m,a,l,We)){Nt=1,Bo(n,qn(l,n.current)),Je=null;return}}catch(g){if(m!==null)throw Je=m,g;Nt=1,Bo(n,qn(l,n.current)),Je=null;return}a.flags&32768?(at||u===1?n=!0:Fi||(We&536870912)!==0?n=!1:(ia=n=!0,(u===2||u===9||u===3||u===6)&&(u=Zn.current,u!==null&&u.tag===13&&(u.flags|=16384))),Jy(a,n)):Yo(a)}function Yo(n){var a=n;do{if((a.flags&32768)!==0){Jy(a,ia);return}n=a.return;var l=Ww(a.alternate,a,Lr);if(l!==null){Je=l;return}if(a=a.sibling,a!==null){Je=a;return}Je=a=n}while(a!==null);Nt===0&&(Nt=5)}function Jy(n,a){do{var l=e2(n.alternate,n);if(l!==null){l.flags&=32767,Je=l;return}if(l=n.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(n=n.sibling,n!==null)){Je=n;return}Je=n=l}while(n!==null);Nt=6,Je=null}function Xy(n,a,l,u,m,g,w,N,L){n.cancelPendingCommit=null;do Zo();while(Xt!==0);if((st&6)!==0)throw Error(i(327));if(a!==null){if(a===n.current)throw Error(i(177));if(g=a.lanes|a.childLanes,g|=Jc,V_(n,l,g,w,N,L),n===yt&&(Je=yt=null,We=0),Pi=a,oa=n,Hi=l,ef=g,tf=m,Vy=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,f2(Q,function(){return t0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=U.T,U.T=null,m=F.p,F.p=2,w=st,st|=4;try{t2(n,a,l)}finally{st=w,F.p=m,U.T=u}}Xt=1,Qy(),Ky(),Wy()}}function Qy(){if(Xt===1){Xt=0;var n=oa,a=Pi,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=U.T,U.T=null;var u=F.p;F.p=2;var m=st;st|=4;try{Oy(a,n);var g=bf,w=Fp(n.containerInfo),N=g.focusedElem,L=g.selectionRange;if(w!==N&&N&&N.ownerDocument&&Up(N.ownerDocument.documentElement,N)){if(L!==null&&Ic(N)){var J=L.start,ce=L.end;if(ce===void 0&&(ce=J),"selectionStart"in N)N.selectionStart=J,N.selectionEnd=Math.min(ce,N.value.length);else{var me=N.ownerDocument||document,W=me&&me.defaultView||window;if(W.getSelection){var ee=W.getSelection(),Fe=N.textContent.length,Le=Math.min(L.start,Fe),dt=L.end===void 0?Le:Math.min(L.end,Fe);!ee.extend&&Le>dt&&(w=dt,dt=Le,Le=w);var I=Bp(N,Le),V=Bp(N,dt);if(I&&V&&(ee.rangeCount!==1||ee.anchorNode!==I.node||ee.anchorOffset!==I.offset||ee.focusNode!==V.node||ee.focusOffset!==V.offset)){var G=me.createRange();G.setStart(I.node,I.offset),ee.removeAllRanges(),Le>dt?(ee.addRange(G),ee.extend(V.node,V.offset)):(G.setEnd(V.node,V.offset),ee.addRange(G))}}}}for(me=[],ee=N;ee=ee.parentNode;)ee.nodeType===1&&me.push({element:ee,left:ee.scrollLeft,top:ee.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<me.length;N++){var fe=me[N];fe.element.scrollLeft=fe.left,fe.element.scrollTop=fe.top}}iu=!!yf,bf=yf=null}finally{st=m,F.p=u,U.T=l}}n.current=a,Xt=2}}function Ky(){if(Xt===2){Xt=0;var n=oa,a=Pi,l=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||l){l=U.T,U.T=null;var u=F.p;F.p=2;var m=st;st|=4;try{Ay(n,a.alternate,a)}finally{st=m,F.p=u,U.T=l}}Xt=3}}function Wy(){if(Xt===4||Xt===3){Xt=0,At();var n=oa,a=Pi,l=Hi,u=Vy;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Xt=5:(Xt=0,Pi=oa=null,e0(n,n.pendingLanes));var m=n.pendingLanes;if(m===0&&(sa=null),kc(l),a=a.stateNode,ie&&typeof ie.onCommitFiberRoot=="function")try{ie.onCommitFiberRoot(H,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=U.T,m=F.p,F.p=2,U.T=null;try{for(var g=n.onRecoverableError,w=0;w<u.length;w++){var N=u[w];g(N.value,{componentStack:N.stack})}}finally{U.T=a,F.p=m}}(Hi&3)!==0&&Zo(),hr(n),m=n.pendingLanes,(l&4194090)!==0&&(m&42)!==0?n===nf?Wl++:(Wl=0,nf=n):Wl=0,es(0)}}function e0(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Ol(a)))}function Zo(n){return Qy(),Ky(),Wy(),t0()}function t0(){if(Xt!==5)return!1;var n=oa,a=ef;ef=0;var l=kc(Hi),u=U.T,m=F.p;try{F.p=32>l?32:l,U.T=null,l=tf,tf=null;var g=oa,w=Hi;if(Xt=0,Pi=oa=null,Hi=0,(st&6)!==0)throw Error(i(331));var N=st;if(st|=4,Uy(g.current),Dy(g,g.current,w,l),st=N,es(0,!1),ie&&typeof ie.onPostCommitFiberRoot=="function")try{ie.onPostCommitFiberRoot(H,g)}catch{}return!0}finally{F.p=m,U.T=u,e0(n,a)}}function n0(n,a,l){a=qn(l,a),a=zd(n.stateNode,a,2),n=Kr(n,a,2),n!==null&&(yl(n,2),hr(n))}function mt(n,a,l){if(n.tag===3)n0(n,n,l);else for(;a!==null;){if(a.tag===3){n0(a,n,l);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(sa===null||!sa.has(u))){n=qn(l,n),l=ly(2),u=Kr(a,l,2),u!==null&&(sy(l,u,a,n),yl(u,2),hr(u));break}}a=a.return}}function sf(n,a,l){var u=n.pingCache;if(u===null){u=n.pingCache=new a2;var m=new Set;u.set(a,m)}else m=u.get(a),m===void 0&&(m=new Set,u.set(a,m));m.has(l)||(Xd=!0,m.add(l),n=u2.bind(null,n,a,l),a.then(n,n))}function u2(n,a,l){var u=n.pingCache;u!==null&&u.delete(a),n.pingedLanes|=n.suspendedLanes&l,n.warmLanes&=~l,yt===n&&(We&l)===l&&(Nt===4||Nt===3&&(We&62914560)===We&&300>it()-Wd?(st&2)===0&&qi(n,0):Qd|=l,Vi===We&&(Vi=0)),hr(n)}function r0(n,a){a===0&&(a=Wh()),n=ji(n,a),n!==null&&(yl(n,a),hr(n))}function c2(n){var a=n.memoizedState,l=0;a!==null&&(l=a.retryLane),r0(n,l)}function d2(n,a){var l=0;switch(n.tag){case 13:var u=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(a),r0(n,l)}function f2(n,a){return Ue(n,a)}var Go=null,$i=null,of=!1,Jo=!1,uf=!1,Ja=0;function hr(n){n!==$i&&n.next===null&&($i===null?Go=$i=n:$i=$i.next=n),Jo=!0,of||(of=!0,h2())}function es(n,a){if(!uf&&Jo){uf=!0;do for(var l=!1,u=Go;u!==null;){if(n!==0){var m=u.pendingLanes;if(m===0)var g=0;else{var w=u.suspendedLanes,N=u.pingedLanes;g=(1<<31-Ne(42|n)+1)-1,g&=m&~(w&~N),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(l=!0,s0(u,g))}else g=We,g=Tt(u,u===yt?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||mn(u,g)||(l=!0,s0(u,g));u=u.next}while(l);uf=!1}}function m2(){a0()}function a0(){Jo=of=!1;var n=0;Ja!==0&&(w2()&&(n=Ja),Ja=0);for(var a=it(),l=null,u=Go;u!==null;){var m=u.next,g=i0(u,a);g===0?(u.next=null,l===null?Go=m:l.next=m,m===null&&($i=l)):(l=u,(n!==0||(g&3)!==0)&&(Jo=!0)),u=m}es(n)}function i0(n,a){for(var l=n.suspendedLanes,u=n.pingedLanes,m=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var w=31-Ne(g),N=1<<w,L=m[w];L===-1?((N&l)===0||(N&u)!==0)&&(m[w]=hn(N,a)):L<=a&&(n.expiredLanes|=N),g&=~N}if(a=yt,l=We,l=Tt(n,n===a?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,l===0||n===a&&(ot===2||ot===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Ce(u),n.callbackNode=null,n.callbackPriority=0;if((l&3)===0||mn(n,l)){if(a=l&-l,a===n.callbackPriority)return a;switch(u!==null&&Ce(u),kc(l)){case 2:case 8:l=B;break;case 32:l=Q;break;case 268435456:l=we;break;default:l=Q}return u=l0.bind(null,n),l=Ue(l,u),n.callbackPriority=a,n.callbackNode=l,a}return u!==null&&u!==null&&Ce(u),n.callbackPriority=2,n.callbackNode=null,2}function l0(n,a){if(Xt!==0&&Xt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var l=n.callbackNode;if(Zo()&&n.callbackNode!==l)return null;var u=We;return u=Tt(n,n===yt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(Hy(n,u,a),i0(n,it()),n.callbackNode!=null&&n.callbackNode===l?l0.bind(null,n):null)}function s0(n,a){if(Zo())return null;Hy(n,a,!0)}function h2(){S2(function(){(st&6)!==0?Ue(Pt,m2):a0()})}function cf(){return Ja===0&&(Ja=Kh()),Ja}function o0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:io(""+n)}function u0(n,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,n.id&&l.setAttribute("form",n.id),a.parentNode.insertBefore(l,a),n=new FormData(n),l.parentNode.removeChild(l),n}function p2(n,a,l,u,m){if(a==="submit"&&l&&l.stateNode===m){var g=o0((m[pn]||null).action),w=u.submitter;w&&(a=(a=w[pn]||null)?o0(a.formAction):w.getAttribute("formAction"),a!==null&&(g=a,w=null));var N=new uo("action","action",null,u,m);n.push({event:N,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ja!==0){var L=w?u0(m,w):new FormData(m);Ad(l,{pending:!0,data:L,method:m.method,action:g},null,L)}}else typeof g=="function"&&(N.preventDefault(),L=w?u0(m,w):new FormData(m),Ad(l,{pending:!0,data:L,method:m.method,action:g},g,L))},currentTarget:m}]})}}for(var df=0;df<Gc.length;df++){var ff=Gc[df],g2=ff.toLowerCase(),y2=ff[0].toUpperCase()+ff.slice(1);er(g2,"on"+y2)}er(Hp,"onAnimationEnd"),er(qp,"onAnimationIteration"),er(Ip,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(zw,"onTransitionRun"),er(Dw,"onTransitionStart"),er(Lw,"onTransitionCancel"),er($p,"onTransitionEnd"),pi("onMouseEnter",["mouseout","mouseover"]),pi("onMouseLeave",["mouseout","mouseover"]),pi("onPointerEnter",["pointerout","pointerover"]),pi("onPointerLeave",["pointerout","pointerover"]),Oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ts));function c0(n,a){a=(a&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],m=u.event;u=u.listeners;e:{var g=void 0;if(a)for(var w=u.length-1;0<=w;w--){var N=u[w],L=N.instance,J=N.currentTarget;if(N=N.listener,L!==g&&m.isPropagationStopped())break e;g=N,m.currentTarget=J;try{g(m)}catch(ce){Lo(ce)}m.currentTarget=null,g=L}else for(w=0;w<u.length;w++){if(N=u[w],L=N.instance,J=N.currentTarget,N=N.listener,L!==g&&m.isPropagationStopped())break e;g=N,m.currentTarget=J;try{g(m)}catch(ce){Lo(ce)}m.currentTarget=null,g=L}}}}function Xe(n,a){var l=a[Sc];l===void 0&&(l=a[Sc]=new Set);var u=n+"__bubble";l.has(u)||(d0(a,n,2,!1),l.add(u))}function mf(n,a,l){var u=0;a&&(u|=4),d0(l,n,u,a)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function hf(n){if(!n[Xo]){n[Xo]=!0,ap.forEach(function(l){l!=="selectionchange"&&(b2.has(l)||mf(l,!1,n),mf(l,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Xo]||(a[Xo]=!0,mf("selectionchange",!1,a))}}function d0(n,a,l,u){switch(D0(a)){case 2:var m=$2;break;case 8:m=Y2;break;default:m=Cf}l=m.bind(null,a,l,n),m=void 0,!Dc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(m=!0),u?m!==void 0?n.addEventListener(a,l,{capture:!0,passive:m}):n.addEventListener(a,l,!0):m!==void 0?n.addEventListener(a,l,{passive:m}):n.addEventListener(a,l,!1)}function pf(n,a,l,u,m){var g=u;if((a&1)===0&&(a&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var N=u.stateNode.containerInfo;if(N===m)break;if(w===4)for(w=u.return;w!==null;){var L=w.tag;if((L===3||L===4)&&w.stateNode.containerInfo===m)return;w=w.return}for(;N!==null;){if(w=fi(N),w===null)return;if(L=w.tag,L===5||L===6||L===26||L===27){u=g=w;continue e}N=N.parentNode}}u=u.return}bp(function(){var J=g,ce=Oc(l),me=[];e:{var W=Yp.get(n);if(W!==void 0){var ee=uo,Fe=n;switch(n){case"keypress":if(so(l)===0)break e;case"keydown":case"keyup":ee=fw;break;case"focusin":Fe="focus",ee=Fc;break;case"focusout":Fe="blur",ee=Fc;break;case"beforeblur":case"afterblur":ee=Fc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=ew;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=pw;break;case Hp:case qp:case Ip:ee=rw;break;case $p:ee=yw;break;case"scroll":case"scrollend":ee=K_;break;case"wheel":ee=xw;break;case"copy":case"cut":case"paste":ee=iw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=kp;break;case"toggle":case"beforetoggle":ee=_w}var Le=(a&4)!==0,dt=!Le&&(n==="scroll"||n==="scrollend"),I=Le?W!==null?W+"Capture":null:W;Le=[];for(var V=J,G;V!==null;){var fe=V;if(G=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||G===null||I===null||(fe=vl(V,I),fe!=null&&Le.push(ns(V,fe,G))),dt)break;V=V.return}0<Le.length&&(W=new ee(W,Fe,null,l,ce),me.push({event:W,listeners:Le}))}}if((a&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",W&&l!==Rc&&(Fe=l.relatedTarget||l.fromElement)&&(fi(Fe)||Fe[di]))break e;if((ee||W)&&(W=ce.window===ce?ce:(W=ce.ownerDocument)?W.defaultView||W.parentWindow:window,ee?(Fe=l.relatedTarget||l.toElement,ee=J,Fe=Fe?fi(Fe):null,Fe!==null&&(dt=o(Fe),Le=Fe.tag,Fe!==dt||Le!==5&&Le!==27&&Le!==6)&&(Fe=null)):(ee=null,Fe=J),ee!==Fe)){if(Le=_p,fe="onMouseLeave",I="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Le=kp,fe="onPointerLeave",I="onPointerEnter",V="pointer"),dt=ee==null?W:xl(ee),G=Fe==null?W:xl(Fe),W=new Le(fe,V+"leave",ee,l,ce),W.target=dt,W.relatedTarget=G,fe=null,fi(ce)===J&&(Le=new Le(I,V+"enter",Fe,l,ce),Le.target=G,Le.relatedTarget=dt,fe=Le),dt=fe,ee&&Fe)t:{for(Le=ee,I=Fe,V=0,G=Le;G;G=Yi(G))V++;for(G=0,fe=I;fe;fe=Yi(fe))G++;for(;0<V-G;)Le=Yi(Le),V--;for(;0<G-V;)I=Yi(I),G--;for(;V--;){if(Le===I||I!==null&&Le===I.alternate)break t;Le=Yi(Le),I=Yi(I)}Le=null}else Le=null;ee!==null&&f0(me,W,ee,Le,!1),Fe!==null&&dt!==null&&f0(me,dt,Fe,Le,!0)}}e:{if(W=J?xl(J):window,ee=W.nodeName&&W.nodeName.toLowerCase(),ee==="select"||ee==="input"&&W.type==="file")var Ee=Mp;else if(Ap(W))if(Rp)Ee=Mw;else{Ee=Aw;var Ye=Cw}else ee=W.nodeName,!ee||ee.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?J&&Mc(J.elementType)&&(Ee=Mp):Ee=Tw;if(Ee&&(Ee=Ee(n,J))){Tp(me,Ee,l,ce);break e}Ye&&Ye(n,W,J),n==="focusout"&&J&&W.type==="number"&&J.memoizedProps.value!=null&&Tc(W,"number",W.value)}switch(Ye=J?xl(J):window,n){case"focusin":(Ap(Ye)||Ye.contentEditable==="true")&&(wi=Ye,$c=J,Cl=null);break;case"focusout":Cl=$c=wi=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,Vp(me,l,ce);break;case"selectionchange":if(Ow)break;case"keydown":case"keyup":Vp(me,l,ce)}var Oe;if(Pc)e:{switch(n){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else _i?Ep(n,l)&&(Be="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(Be="onCompositionStart");Be&&(Sp&&l.locale!=="ko"&&(_i||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&_i&&(Oe=xp()):(Gr=ce,Lc="value"in Gr?Gr.value:Gr.textContent,_i=!0)),Ye=Qo(J,Be),0<Ye.length&&(Be=new wp(Be,n,null,l,ce),me.push({event:Be,listeners:Ye}),Oe?Be.data=Oe:(Oe=Cp(l),Oe!==null&&(Be.data=Oe)))),(Oe=kw?Sw(n,l):jw(n,l))&&(Be=Qo(J,"onBeforeInput"),0<Be.length&&(Ye=new wp("onBeforeInput","beforeinput",null,l,ce),me.push({event:Ye,listeners:Be}),Ye.data=Oe)),p2(me,n,J,l,ce)}c0(me,a)})}function ns(n,a,l){return{instance:n,listener:a,currentTarget:l}}function Qo(n,a){for(var l=a+"Capture",u=[];n!==null;){var m=n,g=m.stateNode;if(m=m.tag,m!==5&&m!==26&&m!==27||g===null||(m=vl(n,l),m!=null&&u.unshift(ns(n,m,g)),m=vl(n,a),m!=null&&u.push(ns(n,m,g))),n.tag===3)return u;n=n.return}return[]}function Yi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function f0(n,a,l,u,m){for(var g=a._reactName,w=[];l!==null&&l!==u;){var N=l,L=N.alternate,J=N.stateNode;if(N=N.tag,L!==null&&L===u)break;N!==5&&N!==26&&N!==27||J===null||(L=J,m?(J=vl(l,g),J!=null&&w.unshift(ns(l,J,L))):m||(J=vl(l,g),J!=null&&w.push(ns(l,J,L)))),l=l.return}w.length!==0&&n.push({event:a,listeners:w})}var x2=/\r\n?/g,v2=/\u0000|\uFFFD/g;function m0(n){return(typeof n=="string"?n:""+n).replace(x2,`
`).replace(v2,"")}function h0(n,a){return a=m0(a),m0(n)===a}function Ko(){}function ct(n,a,l,u,m,g){switch(l){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||bi(n,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&bi(n,""+u);break;case"className":no(n,"class",u);break;case"tabIndex":no(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":no(n,l,u);break;case"style":gp(n,u,g);break;case"data":if(a!=="object"){no(n,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||l!=="href")){n.removeAttribute(l);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(l);break}u=io(""+u),n.setAttribute(l,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(a!=="input"&&ct(n,a,"name",m.name,m,null),ct(n,a,"formEncType",m.formEncType,m,null),ct(n,a,"formMethod",m.formMethod,m,null),ct(n,a,"formTarget",m.formTarget,m,null)):(ct(n,a,"encType",m.encType,m,null),ct(n,a,"method",m.method,m,null),ct(n,a,"target",m.target,m,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(l);break}u=io(""+u),n.setAttribute(l,u);break;case"onClick":u!=null&&(n.onclick=Ko);break;case"onScroll":u!=null&&Xe("scroll",n);break;case"onScrollEnd":u!=null&&Xe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(l=u.__html,l!=null){if(m.children!=null)throw Error(i(60));n.innerHTML=l}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}l=io(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(l,""+u):n.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(l,""):n.removeAttribute(l);break;case"capture":case"download":u===!0?n.setAttribute(l,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(l,u):n.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(l,u):n.removeAttribute(l);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(l):n.setAttribute(l,u);break;case"popover":Xe("beforetoggle",n),Xe("toggle",n),to(n,"popover",u);break;case"xlinkActuate":kr(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":kr(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":kr(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":kr(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":kr(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":kr(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":kr(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":kr(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":kr(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":to(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=X_.get(l)||l,to(n,l,u))}}function gf(n,a,l,u,m,g){switch(l){case"style":gp(n,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(l=u.__html,l!=null){if(m.children!=null)throw Error(i(60));n.innerHTML=l}}break;case"children":typeof u=="string"?bi(n,u):(typeof u=="number"||typeof u=="bigint")&&bi(n,""+u);break;case"onScroll":u!=null&&Xe("scroll",n);break;case"onScrollEnd":u!=null&&Xe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Ko);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ip.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(m=l.endsWith("Capture"),a=l.slice(2,m?l.length-7:void 0),g=n[pn]||null,g=g!=null?g[l]:null,typeof g=="function"&&n.removeEventListener(a,g,m),typeof u=="function")){typeof g!="function"&&g!==null&&(l in n?n[l]=null:n.hasAttribute(l)&&n.removeAttribute(l)),n.addEventListener(a,u,m);break e}l in n?n[l]=u:u===!0?n.setAttribute(l,""):to(n,l,u)}}}function Qt(n,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xe("error",n),Xe("load",n);var u=!1,m=!1,g;for(g in l)if(l.hasOwnProperty(g)){var w=l[g];if(w!=null)switch(g){case"src":u=!0;break;case"srcSet":m=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:ct(n,a,g,w,l,null)}}m&&ct(n,a,"srcSet",l.srcSet,l,null),u&&ct(n,a,"src",l.src,l,null);return;case"input":Xe("invalid",n);var N=g=w=m=null,L=null,J=null;for(u in l)if(l.hasOwnProperty(u)){var ce=l[u];if(ce!=null)switch(u){case"name":m=ce;break;case"type":w=ce;break;case"checked":L=ce;break;case"defaultChecked":J=ce;break;case"value":g=ce;break;case"defaultValue":N=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(i(137,a));break;default:ct(n,a,u,ce,l,null)}}fp(n,g,N,L,J,w,m,!1),ro(n);return;case"select":Xe("invalid",n),u=w=g=null;for(m in l)if(l.hasOwnProperty(m)&&(N=l[m],N!=null))switch(m){case"value":g=N;break;case"defaultValue":w=N;break;case"multiple":u=N;default:ct(n,a,m,N,l,null)}a=g,l=w,n.multiple=!!u,a!=null?yi(n,!!u,a,!1):l!=null&&yi(n,!!u,l,!0);return;case"textarea":Xe("invalid",n),g=m=u=null;for(w in l)if(l.hasOwnProperty(w)&&(N=l[w],N!=null))switch(w){case"value":u=N;break;case"defaultValue":m=N;break;case"children":g=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(i(91));break;default:ct(n,a,w,N,l,null)}hp(n,u,m,g),ro(n);return;case"option":for(L in l)if(l.hasOwnProperty(L)&&(u=l[L],u!=null))switch(L){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ct(n,a,L,u,l,null)}return;case"dialog":Xe("beforetoggle",n),Xe("toggle",n),Xe("cancel",n),Xe("close",n);break;case"iframe":case"object":Xe("load",n);break;case"video":case"audio":for(u=0;u<ts.length;u++)Xe(ts[u],n);break;case"image":Xe("error",n),Xe("load",n);break;case"details":Xe("toggle",n);break;case"embed":case"source":case"link":Xe("error",n),Xe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in l)if(l.hasOwnProperty(J)&&(u=l[J],u!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:ct(n,a,J,u,l,null)}return;default:if(Mc(a)){for(ce in l)l.hasOwnProperty(ce)&&(u=l[ce],u!==void 0&&gf(n,a,ce,u,l,void 0));return}}for(N in l)l.hasOwnProperty(N)&&(u=l[N],u!=null&&ct(n,a,N,u,l,null))}function _2(n,a,l,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var m=null,g=null,w=null,N=null,L=null,J=null,ce=null;for(ee in l){var me=l[ee];if(l.hasOwnProperty(ee)&&me!=null)switch(ee){case"checked":break;case"value":break;case"defaultValue":L=me;default:u.hasOwnProperty(ee)||ct(n,a,ee,null,u,me)}}for(var W in u){var ee=u[W];if(me=l[W],u.hasOwnProperty(W)&&(ee!=null||me!=null))switch(W){case"type":g=ee;break;case"name":m=ee;break;case"checked":J=ee;break;case"defaultChecked":ce=ee;break;case"value":w=ee;break;case"defaultValue":N=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(i(137,a));break;default:ee!==me&&ct(n,a,W,ee,u,me)}}Ac(n,w,N,L,J,ce,g,m);return;case"select":ee=w=N=W=null;for(g in l)if(L=l[g],l.hasOwnProperty(g)&&L!=null)switch(g){case"value":break;case"multiple":ee=L;default:u.hasOwnProperty(g)||ct(n,a,g,null,u,L)}for(m in u)if(g=u[m],L=l[m],u.hasOwnProperty(m)&&(g!=null||L!=null))switch(m){case"value":W=g;break;case"defaultValue":N=g;break;case"multiple":w=g;default:g!==L&&ct(n,a,m,g,u,L)}a=N,l=w,u=ee,W!=null?yi(n,!!l,W,!1):!!u!=!!l&&(a!=null?yi(n,!!l,a,!0):yi(n,!!l,l?[]:"",!1));return;case"textarea":ee=W=null;for(N in l)if(m=l[N],l.hasOwnProperty(N)&&m!=null&&!u.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:ct(n,a,N,null,u,m)}for(w in u)if(m=u[w],g=l[w],u.hasOwnProperty(w)&&(m!=null||g!=null))switch(w){case"value":W=m;break;case"defaultValue":ee=m;break;case"children":break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(i(91));break;default:m!==g&&ct(n,a,w,m,u,g)}mp(n,W,ee);return;case"option":for(var Fe in l)if(W=l[Fe],l.hasOwnProperty(Fe)&&W!=null&&!u.hasOwnProperty(Fe))switch(Fe){case"selected":n.selected=!1;break;default:ct(n,a,Fe,null,u,W)}for(L in u)if(W=u[L],ee=l[L],u.hasOwnProperty(L)&&W!==ee&&(W!=null||ee!=null))switch(L){case"selected":n.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:ct(n,a,L,W,u,ee)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Le in l)W=l[Le],l.hasOwnProperty(Le)&&W!=null&&!u.hasOwnProperty(Le)&&ct(n,a,Le,null,u,W);for(J in u)if(W=u[J],ee=l[J],u.hasOwnProperty(J)&&W!==ee&&(W!=null||ee!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,a));break;default:ct(n,a,J,W,u,ee)}return;default:if(Mc(a)){for(var dt in l)W=l[dt],l.hasOwnProperty(dt)&&W!==void 0&&!u.hasOwnProperty(dt)&&gf(n,a,dt,void 0,u,W);for(ce in u)W=u[ce],ee=l[ce],!u.hasOwnProperty(ce)||W===ee||W===void 0&&ee===void 0||gf(n,a,ce,W,u,ee);return}}for(var I in l)W=l[I],l.hasOwnProperty(I)&&W!=null&&!u.hasOwnProperty(I)&&ct(n,a,I,null,u,W);for(me in u)W=u[me],ee=l[me],!u.hasOwnProperty(me)||W===ee||W==null&&ee==null||ct(n,a,me,W,u,ee)}var yf=null,bf=null;function Wo(n){return n.nodeType===9?n:n.ownerDocument}function p0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g0(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function xf(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var vf=null;function w2(){var n=window.event;return n&&n.type==="popstate"?n===vf?!1:(vf=n,!0):(vf=null,!1)}var y0=typeof setTimeout=="function"?setTimeout:void 0,k2=typeof clearTimeout=="function"?clearTimeout:void 0,b0=typeof Promise=="function"?Promise:void 0,S2=typeof queueMicrotask=="function"?queueMicrotask:typeof b0<"u"?function(n){return b0.resolve(null).then(n).catch(j2)}:y0;function j2(n){setTimeout(function(){throw n})}function ca(n){return n==="head"}function x0(n,a){var l=a,u=0,m=0;do{var g=l.nextSibling;if(n.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(0<u&&8>u){l=u;var w=n.ownerDocument;if(l&1&&rs(w.documentElement),l&2&&rs(w.body),l&4)for(l=w.head,rs(l),w=l.firstChild;w;){var N=w.nextSibling,L=w.nodeName;w[bl]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&w.rel.toLowerCase()==="stylesheet"||l.removeChild(w),w=N}}if(m===0){n.removeChild(g),ds(a);return}m--}else l==="$"||l==="$?"||l==="$!"?m++:u=l.charCodeAt(0)-48;else u=0;l=g}while(l);ds(a)}function _f(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":_f(l),jc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}n.removeChild(l)}}function N2(n,a,l,u){for(;n.nodeType===1;){var m=l;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[bl])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==m.rel||n.getAttribute("href")!==(m.href==null||m.href===""?null:m.href)||n.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin)||n.getAttribute("title")!==(m.title==null?null:m.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(m.src==null?null:m.src)||n.getAttribute("type")!==(m.type==null?null:m.type)||n.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=m.name==null?null:""+m.name;if(m.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=nr(n.nextSibling),n===null)break}return null}function E2(n,a,l){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!l||(n=nr(n.nextSibling),n===null))return null;return n}function wf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function C2(n,a){var l=n.ownerDocument;if(n.data!=="$?"||l.readyState==="complete")a();else{var u=function(){a(),l.removeEventListener("DOMContentLoaded",u)};l.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function nr(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var kf=null;function v0(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return n;a--}else l==="/$"&&a++}n=n.previousSibling}return null}function _0(n,a,l){switch(a=Wo(l),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function rs(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);jc(n)}var Jn=new Map,w0=new Set;function eu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Br=F.d;F.d={f:A2,r:T2,D:M2,C:R2,L:O2,m:z2,X:L2,S:D2,M:B2};function A2(){var n=Br.f(),a=$o();return n||a}function T2(n){var a=mi(n);a!==null&&a.tag===5&&a.type==="form"?Hg(a):Br.r(n)}var Zi=typeof document>"u"?null:document;function k0(n,a,l){var u=Zi;if(u&&typeof a=="string"&&a){var m=Hn(a);m='link[rel="'+n+'"][href="'+m+'"]',typeof l=="string"&&(m+='[crossorigin="'+l+'"]'),w0.has(m)||(w0.add(m),n={rel:n,crossOrigin:l,href:a},u.querySelector(m)===null&&(a=u.createElement("link"),Qt(a,"link",n),It(a),u.head.appendChild(a)))}}function M2(n){Br.D(n),k0("dns-prefetch",n,null)}function R2(n,a){Br.C(n,a),k0("preconnect",n,a)}function O2(n,a,l){Br.L(n,a,l);var u=Zi;if(u&&n&&a){var m='link[rel="preload"][as="'+Hn(a)+'"]';a==="image"&&l&&l.imageSrcSet?(m+='[imagesrcset="'+Hn(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(m+='[imagesizes="'+Hn(l.imageSizes)+'"]')):m+='[href="'+Hn(n)+'"]';var g=m;switch(a){case"style":g=Gi(n);break;case"script":g=Ji(n)}Jn.has(g)||(n=y({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:n,as:a},l),Jn.set(g,n),u.querySelector(m)!==null||a==="style"&&u.querySelector(as(g))||a==="script"&&u.querySelector(is(g))||(a=u.createElement("link"),Qt(a,"link",n),It(a),u.head.appendChild(a)))}}function z2(n,a){Br.m(n,a);var l=Zi;if(l&&n){var u=a&&typeof a.as=="string"?a.as:"script",m='link[rel="modulepreload"][as="'+Hn(u)+'"][href="'+Hn(n)+'"]',g=m;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Ji(n)}if(!Jn.has(g)&&(n=y({rel:"modulepreload",href:n},a),Jn.set(g,n),l.querySelector(m)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(is(g)))return}u=l.createElement("link"),Qt(u,"link",n),It(u),l.head.appendChild(u)}}}function D2(n,a,l){Br.S(n,a,l);var u=Zi;if(u&&n){var m=hi(u).hoistableStyles,g=Gi(n);a=a||"default";var w=m.get(g);if(!w){var N={loading:0,preload:null};if(w=u.querySelector(as(g)))N.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":a},l),(l=Jn.get(g))&&Sf(n,l);var L=w=u.createElement("link");It(L),Qt(L,"link",n),L._p=new Promise(function(J,ce){L.onload=J,L.onerror=ce}),L.addEventListener("load",function(){N.loading|=1}),L.addEventListener("error",function(){N.loading|=2}),N.loading|=4,tu(w,a,u)}w={type:"stylesheet",instance:w,count:1,state:N},m.set(g,w)}}}function L2(n,a){Br.X(n,a);var l=Zi;if(l&&n){var u=hi(l).hoistableScripts,m=Ji(n),g=u.get(m);g||(g=l.querySelector(is(m)),g||(n=y({src:n,async:!0},a),(a=Jn.get(m))&&jf(n,a),g=l.createElement("script"),It(g),Qt(g,"link",n),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(m,g))}}function B2(n,a){Br.M(n,a);var l=Zi;if(l&&n){var u=hi(l).hoistableScripts,m=Ji(n),g=u.get(m);g||(g=l.querySelector(is(m)),g||(n=y({src:n,async:!0,type:"module"},a),(a=Jn.get(m))&&jf(n,a),g=l.createElement("script"),It(g),Qt(g,"link",n),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(m,g))}}function S0(n,a,l,u){var m=(m=ne.current)?eu(m):null;if(!m)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=Gi(l.href),l=hi(m).hoistableStyles,u=l.get(a),u||(u={type:"style",instance:null,count:0,state:null},l.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){n=Gi(l.href);var g=hi(m).hoistableStyles,w=g.get(n);if(w||(m=m.ownerDocument||m,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,w),(g=m.querySelector(as(n)))&&!g._p&&(w.instance=g,w.state.loading=5),Jn.has(n)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Jn.set(n,l),g||U2(m,n,l,w.state))),a&&u===null)throw Error(i(528,""));return w}if(a&&u!==null)throw Error(i(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Ji(l),l=hi(m).hoistableScripts,u=l.get(a),u||(u={type:"script",instance:null,count:0,state:null},l.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Gi(n){return'href="'+Hn(n)+'"'}function as(n){return'link[rel="stylesheet"]['+n+"]"}function j0(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function U2(n,a,l,u){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=n.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),Qt(a,"link",l),It(a),n.head.appendChild(a))}function Ji(n){return'[src="'+Hn(n)+'"]'}function is(n){return"script[async]"+n}function N0(n,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var u=n.querySelector('style[data-href~="'+Hn(l.href)+'"]');if(u)return a.instance=u,It(u),u;var m=y({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),It(u),Qt(u,"style",m),tu(u,l.precedence,n),a.instance=u;case"stylesheet":m=Gi(l.href);var g=n.querySelector(as(m));if(g)return a.state.loading|=4,a.instance=g,It(g),g;u=j0(l),(m=Jn.get(m))&&Sf(u,m),g=(n.ownerDocument||n).createElement("link"),It(g);var w=g;return w._p=new Promise(function(N,L){w.onload=N,w.onerror=L}),Qt(g,"link",u),a.state.loading|=4,tu(g,l.precedence,n),a.instance=g;case"script":return g=Ji(l.src),(m=n.querySelector(is(g)))?(a.instance=m,It(m),m):(u=l,(m=Jn.get(g))&&(u=y({},l),jf(u,m)),n=n.ownerDocument||n,m=n.createElement("script"),It(m),Qt(m,"link",u),n.head.appendChild(m),a.instance=m);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,tu(u,l.precedence,n));return a.instance}function tu(n,a,l){for(var u=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),m=u.length?u[u.length-1]:null,g=m,w=0;w<u.length;w++){var N=u[w];if(N.dataset.precedence===a)g=N;else if(g!==m)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(n,a.firstChild))}function Sf(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function jf(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var nu=null;function E0(n,a,l){if(nu===null){var u=new Map,m=nu=new Map;m.set(l,u)}else m=nu,u=m.get(l),u||(u=new Map,m.set(l,u));if(u.has(n))return u;for(u.set(n,null),l=l.getElementsByTagName(n),m=0;m<l.length;m++){var g=l[m];if(!(g[bl]||g[Wt]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var w=g.getAttribute(a)||"";w=n+w;var N=u.get(w);N?N.push(g):u.set(w,[g])}}return u}function C0(n,a,l){n=n.ownerDocument||n,n.head.insertBefore(l,a==="title"?n.querySelector("head > title"):null)}function F2(n,a,l){if(l===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function A0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ls=null;function V2(){}function P2(n,a,l){if(ls===null)throw Error(i(475));var u=ls;if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var m=Gi(l.href),g=n.querySelector(as(m));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=ru.bind(u),n.then(u,u)),a.state.loading|=4,a.instance=g,It(g);return}g=n.ownerDocument||n,l=j0(l),(m=Jn.get(m))&&Sf(l,m),g=g.createElement("link"),It(g);var w=g;w._p=new Promise(function(N,L){w.onload=N,w.onerror=L}),Qt(g,"link",l),a.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(u.count++,a=ru.bind(u),n.addEventListener("load",a),n.addEventListener("error",a))}}function H2(){if(ls===null)throw Error(i(475));var n=ls;return n.stylesheets&&n.count===0&&Nf(n,n.stylesheets),0<n.count?function(a){var l=setTimeout(function(){if(n.stylesheets&&Nf(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(l)}}:null}function ru(){if(this.count--,this.count===0){if(this.stylesheets)Nf(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var au=null;function Nf(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,au=new Map,a.forEach(q2,n),au=null,ru.call(n))}function q2(n,a){if(!(a.state.loading&4)){var l=au.get(n);if(l)var u=l.get(null);else{l=new Map,au.set(n,l);for(var m=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<m.length;g++){var w=m[g];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(l.set(w.dataset.precedence,w),u=w)}u&&l.set(null,u)}m=a.instance,w=m.getAttribute("data-precedence"),g=l.get(w)||u,g===u&&l.set(null,m),l.set(w,m),this.count++,u=ru.bind(this),m.addEventListener("load",u),m.addEventListener("error",u),g?g.parentNode.insertBefore(m,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(m,n.firstChild)),a.state.loading|=4}}var ss={$$typeof:R,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function I2(n,a,l,u,m,g,w,N){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_c(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.hiddenUpdates=_c(null),this.identifierPrefix=u,this.onUncaughtError=m,this.onCaughtError=g,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function T0(n,a,l,u,m,g,w,N,L,J,ce,me){return n=new I2(n,a,l,w,N,L,J,me),a=1,g===!0&&(a|=24),g=En(3,null,null,a),n.current=g,g.stateNode=n,a=ld(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:u,isDehydrated:l,cache:a},cd(g),n}function M0(n){return n?(n=Ni,n):Ni}function R0(n,a,l,u,m,g){m=M0(m),u.context===null?u.context=m:u.pendingContext=m,u=Qr(a),u.payload={element:l},g=g===void 0?null:g,g!==null&&(u.callback=g),l=Kr(n,u,a),l!==null&&(Rn(l,n,a),Bl(l,n,a))}function O0(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<a?l:a}}function Ef(n,a){O0(n,a),(n=n.alternate)&&O0(n,a)}function z0(n){if(n.tag===13){var a=ji(n,67108864);a!==null&&Rn(a,n,67108864),Ef(n,67108864)}}var iu=!0;function $2(n,a,l,u){var m=U.T;U.T=null;var g=F.p;try{F.p=2,Cf(n,a,l,u)}finally{F.p=g,U.T=m}}function Y2(n,a,l,u){var m=U.T;U.T=null;var g=F.p;try{F.p=8,Cf(n,a,l,u)}finally{F.p=g,U.T=m}}function Cf(n,a,l,u){if(iu){var m=Af(u);if(m===null)pf(n,a,u,lu,l),L0(n,u);else if(G2(m,n,a,l,u))u.stopPropagation();else if(L0(n,u),a&4&&-1<Z2.indexOf(n)){for(;m!==null;){var g=mi(m);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var w=sn(g.pendingLanes);if(w!==0){var N=g;for(N.pendingLanes|=2,N.entangledLanes|=2;w;){var L=1<<31-Ne(w);N.entanglements[1]|=L,w&=~L}hr(g),(st&6)===0&&(qo=it()+500,es(0))}}break;case 13:N=ji(g,2),N!==null&&Rn(N,g,2),$o(),Ef(g,2)}if(g=Af(u),g===null&&pf(n,a,u,lu,l),g===m)break;m=g}m!==null&&u.stopPropagation()}else pf(n,a,u,null,l)}}function Af(n){return n=Oc(n),Tf(n)}var lu=null;function Tf(n){if(lu=null,n=fi(n),n!==null){var a=o(n);if(a===null)n=null;else{var l=a.tag;if(l===13){if(n=c(a),n!==null)return n;n=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return lu=n,null}function D0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case Pt:return 2;case B:return 8;case Q:case oe:return 32;case we:return 268435456;default:return 32}default:return 32}}var Mf=!1,da=null,fa=null,ma=null,os=new Map,us=new Map,ha=[],Z2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L0(n,a){switch(n){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":fa=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":os.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(a.pointerId)}}function cs(n,a,l,u,m,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:l,eventSystemFlags:u,nativeEvent:g,targetContainers:[m]},a!==null&&(a=mi(a),a!==null&&z0(a)),n):(n.eventSystemFlags|=u,a=n.targetContainers,m!==null&&a.indexOf(m)===-1&&a.push(m),n)}function G2(n,a,l,u,m){switch(a){case"focusin":return da=cs(da,n,a,l,u,m),!0;case"dragenter":return fa=cs(fa,n,a,l,u,m),!0;case"mouseover":return ma=cs(ma,n,a,l,u,m),!0;case"pointerover":var g=m.pointerId;return os.set(g,cs(os.get(g)||null,n,a,l,u,m)),!0;case"gotpointercapture":return g=m.pointerId,us.set(g,cs(us.get(g)||null,n,a,l,u,m)),!0}return!1}function B0(n){var a=fi(n.target);if(a!==null){var l=o(a);if(l!==null){if(a=l.tag,a===13){if(a=c(l),a!==null){n.blockedOn=a,P_(n.priority,function(){if(l.tag===13){var u=Mn();u=wc(u);var m=ji(l,u);m!==null&&Rn(m,l,u),Ef(l,u)}});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function su(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var l=Af(n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);Rc=u,l.target.dispatchEvent(u),Rc=null}else return a=mi(l),a!==null&&z0(a),n.blockedOn=l,!1;a.shift()}return!0}function U0(n,a,l){su(n)&&l.delete(a)}function J2(){Mf=!1,da!==null&&su(da)&&(da=null),fa!==null&&su(fa)&&(fa=null),ma!==null&&su(ma)&&(ma=null),os.forEach(U0),us.forEach(U0)}function ou(n,a){n.blockedOn===a&&(n.blockedOn=null,Mf||(Mf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,J2)))}var uu=null;function F0(n){uu!==n&&(uu=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){uu===n&&(uu=null);for(var a=0;a<n.length;a+=3){var l=n[a],u=n[a+1],m=n[a+2];if(typeof u!="function"){if(Tf(u||l)===null)continue;break}var g=mi(l);g!==null&&(n.splice(a,3),a-=3,Ad(g,{pending:!0,data:m,method:l.method,action:u},u,m))}}))}function ds(n){function a(L){return ou(L,n)}da!==null&&ou(da,n),fa!==null&&ou(fa,n),ma!==null&&ou(ma,n),os.forEach(a),us.forEach(a);for(var l=0;l<ha.length;l++){var u=ha[l];u.blockedOn===n&&(u.blockedOn=null)}for(;0<ha.length&&(l=ha[0],l.blockedOn===null);)B0(l),l.blockedOn===null&&ha.shift();if(l=(n.ownerDocument||n).$$reactFormReplay,l!=null)for(u=0;u<l.length;u+=3){var m=l[u],g=l[u+1],w=m[pn]||null;if(typeof g=="function")w||F0(l);else if(w){var N=null;if(g&&g.hasAttribute("formAction")){if(m=g,w=g[pn]||null)N=w.formAction;else if(Tf(m)!==null)continue}else N=w.action;typeof N=="function"?l[u+1]=N:(l.splice(u,3),u-=3),F0(l)}}}function Rf(n){this._internalRoot=n}cu.prototype.render=Rf.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var l=a.current,u=Mn();R0(l,u,n,a,null,null)},cu.prototype.unmount=Rf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;R0(n.current,2,null,n,null,null),$o(),a[di]=null}};function cu(n){this._internalRoot=n}cu.prototype.unstable_scheduleHydration=function(n){if(n){var a=np();n={blockedOn:null,target:n,priority:a};for(var l=0;l<ha.length&&a!==0&&a<ha[l].priority;l++);ha.splice(l,0,n),l===0&&B0(n)}};var V0=t.version;if(V0!=="19.1.0")throw Error(i(527,V0,"19.1.0"));F.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=p(a),n=n!==null?h(n):null,n=n===null?null:n.stateNode,n};var X2={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{H=du.inject(X2),ie=du}catch{}}return ms.createRoot=function(n,a){if(!s(n))throw Error(i(299));var l=!1,u="",m=ny,g=ry,w=ay,N=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks)),a=T0(n,1,!1,null,null,l,u,m,g,w,N,null),n[di]=a.current,hf(n),new Rf(a)},ms.hydrateRoot=function(n,a,l){if(!s(n))throw Error(i(299));var u=!1,m="",g=ny,w=ry,N=ay,L=null,J=null;return l!=null&&(l.unstable_strictMode===!0&&(u=!0),l.identifierPrefix!==void 0&&(m=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(w=l.onCaughtError),l.onRecoverableError!==void 0&&(N=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(L=l.unstable_transitionCallbacks),l.formState!==void 0&&(J=l.formState)),a=T0(n,1,!0,a,l??null,u,m,g,w,N,L,J),a.context=M0(null),l=a.current,u=Mn(),u=wc(u),m=Qr(u),m.callback=null,Kr(l,m,u),l=u,a.current.lanes=l,yl(a,l),hr(a),n[di]=a.current,hf(n),new cu(a)},ms.version="19.1.0",ms}var X0;function uk(){if(X0)return Lf.exports;X0=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Lf.exports=ok(),Lf.exports}var ck=uk(),hs={},Q0;function dk(){if(Q0)return hs;Q0=1,Object.defineProperty(hs,"__esModule",{value:!0}),hs.parse=c,hs.serialize=h;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,o=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function c(v,_){const k=new o,A=v.length;if(A<2)return k;const C=(_==null?void 0:_.decode)||y;let E=0;do{const T=v.indexOf("=",E);if(T===-1)break;const R=v.indexOf(";",E),Z=R===-1?A:R;if(T>Z){E=v.lastIndexOf(";",T-1)+1;continue}const D=d(v,E,T),M=p(v,T,D),P=v.slice(D,M);if(k[P]===void 0){let ae=d(v,T+1,Z),K=p(v,Z,ae);const z=C(v.slice(ae,K));k[P]=z}E=Z+1}while(E<A);return k}function d(v,_,k){do{const A=v.charCodeAt(_);if(A!==32&&A!==9)return _}while(++_<k);return k}function p(v,_,k){for(;_>k;){const A=v.charCodeAt(--_);if(A!==32&&A!==9)return _+1}return k}function h(v,_,k){const A=(k==null?void 0:k.encode)||encodeURIComponent;if(!e.test(v))throw new TypeError(`argument name is invalid: ${v}`);const C=A(_);if(!t.test(C))throw new TypeError(`argument val is invalid: ${_}`);let E=v+"="+C;if(!k)return E;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);E+="; Max-Age="+k.maxAge}if(k.domain){if(!r.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);E+="; Domain="+k.domain}if(k.path){if(!i.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);E+="; Path="+k.path}if(k.expires){if(!b(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);E+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(E+="; HttpOnly"),k.secure&&(E+="; Secure"),k.partitioned&&(E+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return E}function y(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function b(v){return s.call(v)==="[object Date]"}return hs}dk();var K0="popstate";function fk(e={}){function t(i,s){let{pathname:o,search:c,hash:d}=i.location;return Om("",{pathname:o,search:c,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){return typeof s=="string"?s:Os(s)}return hk(t,r,null,e)}function wt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function lr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function mk(){return Math.random().toString(36).substring(2,10)}function W0(e,t){return{usr:e.state,key:e.key,idx:t}}function Om(e,t,r=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?cl(t):t,state:r,key:t&&t.key||i||mk()}}function Os({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function cl(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function hk(e,t,r,i={}){let{window:s=document.defaultView,v5Compat:o=!1}=i,c=s.history,d="POP",p=null,h=y();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function y(){return(c.state||{idx:null}).idx}function b(){d="POP";let C=y(),E=C==null?null:C-h;h=C,p&&p({action:d,location:A.location,delta:E})}function v(C,E){d="PUSH";let T=Om(A.location,C,E);h=y()+1;let R=W0(T,h),Z=A.createHref(T);try{c.pushState(R,"",Z)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;s.location.assign(Z)}o&&p&&p({action:d,location:A.location,delta:1})}function _(C,E){d="REPLACE";let T=Om(A.location,C,E);h=y();let R=W0(T,h),Z=A.createHref(T);c.replaceState(R,"",Z),o&&p&&p({action:d,location:A.location,delta:0})}function k(C){return pk(C)}let A={get action(){return d},get location(){return e(s,c)},listen(C){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(K0,b),p=C,()=>{s.removeEventListener(K0,b),p=null}},createHref(C){return t(s,C)},createURL:k,encodeLocation(C){let E=k(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:v,replace:_,go(C){return c.go(C)}};return A}function pk(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),wt(r,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:Os(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=r+i),new URL(i,r)}function lv(e,t,r="/"){return gk(e,t,r,!1)}function gk(e,t,r,i){let s=typeof t=="string"?cl(t):t,o=Pr(s.pathname||"/",r);if(o==null)return null;let c=sv(e);yk(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let h=Ck(o);d=Nk(c[p],h,i)}return d}function sv(e,t=[],r=[],i=""){let s=(o,c,d)=>{let p={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};p.relativePath.startsWith("/")&&(wt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let h=Fr([i,p.relativePath]),y=r.concat(p);o.children&&o.children.length>0&&(wt(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),sv(o.children,t,y,h)),!(o.path==null&&!o.index)&&t.push({path:h,score:Sk(h,o.index),routesMeta:y})};return e.forEach((o,c)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))s(o,c);else for(let p of ov(o.path))s(o,c,p)}),t}function ov(e){let t=e.split("/");if(t.length===0)return[];let[r,...i]=t,s=r.endsWith("?"),o=r.replace(/\?$/,"");if(i.length===0)return s?[o,""]:[o];let c=ov(i.join("/")),d=[];return d.push(...c.map(p=>p===""?o:[o,p].join("/"))),s&&d.push(...c),d.map(p=>e.startsWith("/")&&p===""?"/":p)}function yk(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:jk(t.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}var bk=/^:[\w-]+$/,xk=3,vk=2,_k=1,wk=10,kk=-2,eb=e=>e==="*";function Sk(e,t){let r=e.split("/"),i=r.length;return r.some(eb)&&(i+=kk),t&&(i+=vk),r.filter(s=>!eb(s)).reduce((s,o)=>s+(bk.test(o)?xk:o===""?_k:wk),i)}function jk(e,t){return e.length===t.length&&e.slice(0,-1).every((i,s)=>i===t[s])?e[e.length-1]-t[t.length-1]:0}function Nk(e,t,r=!1){let{routesMeta:i}=e,s={},o="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],h=d===i.length-1,y=o==="/"?t:t.slice(o.length)||"/",b=Mu({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},y),v=p.route;if(!b&&h&&r&&!i[i.length-1].route.index&&(b=Mu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!b)return null;Object.assign(s,b.params),c.push({params:s,pathname:Fr([o,b.pathname]),pathnameBase:Rk(Fr([o,b.pathnameBase])),route:v}),b.pathnameBase!=="/"&&(o=Fr([o,b.pathnameBase]))}return c}function Mu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=Ek(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let o=s[0],c=o.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:i.reduce((h,{paramName:y,isOptional:b},v)=>{if(y==="*"){let k=d[v]||"";c=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}const _=d[v];return b&&!_?h[y]=void 0:h[y]=(_||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:c,pattern:e}}function Ek(e,t=!1,r=!0){lr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),i]}function Ck(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return lr(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Pr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}function Ak(e,t="/"){let{pathname:r,search:i="",hash:s=""}=typeof e=="string"?cl(e):e;return{pathname:r?r.startsWith("/")?r:Tk(r,t):t,search:Ok(i),hash:zk(s)}}function Tk(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Vf(e,t,r,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mk(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function hh(e){let t=Mk(e);return t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase)}function ph(e,t,r,i=!1){let s;typeof e=="string"?s=cl(e):(s={...e},wt(!s.pathname||!s.pathname.includes("?"),Vf("?","pathname","search",s)),wt(!s.pathname||!s.pathname.includes("#"),Vf("#","pathname","hash",s)),wt(!s.search||!s.search.includes("#"),Vf("#","search","hash",s)));let o=e===""||s.pathname==="",c=o?"/":s.pathname,d;if(c==null)d=r;else{let b=t.length-1;if(!i&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),b-=1;s.pathname=v.join("/")}d=b>=0?t[b]:"/"}let p=Ak(s,d),h=c&&c!=="/"&&c.endsWith("/"),y=(o||c===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(h||y)&&(p.pathname+="/"),p}var Fr=e=>e.join("/").replace(/\/\/+/g,"/"),Rk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ok=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var uv=["POST","PUT","PATCH","DELETE"];new Set(uv);var Lk=["GET",...uv];new Set(Lk);var dl=O.createContext(null);dl.displayName="DataRouter";var tc=O.createContext(null);tc.displayName="DataRouterState";var cv=O.createContext({isTransitioning:!1});cv.displayName="ViewTransition";var Bk=O.createContext(new Map);Bk.displayName="Fetchers";var Uk=O.createContext(null);Uk.displayName="Await";var sr=O.createContext(null);sr.displayName="Navigation";var Is=O.createContext(null);Is.displayName="Location";var or=O.createContext({outlet:null,matches:[],isDataRoute:!1});or.displayName="Route";var gh=O.createContext(null);gh.displayName="RouteError";function Fk(e,{relative:t}={}){wt(fl(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=O.useContext(sr),{hash:s,pathname:o,search:c}=$s(e,{relative:t}),d=o;return r!=="/"&&(d=o==="/"?r:Fr([r,o])),i.createHref({pathname:d,search:c,hash:s})}function fl(){return O.useContext(Is)!=null}function Aa(){return wt(fl(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Is).location}var dv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fv(e){O.useContext(sr).static||O.useLayoutEffect(e)}function ui(){let{isDataRoute:e}=O.useContext(or);return e?Kk():Vk()}function Vk(){wt(fl(),"useNavigate() may be used only in the context of a <Router> component.");let e=O.useContext(dl),{basename:t,navigator:r}=O.useContext(sr),{matches:i}=O.useContext(or),{pathname:s}=Aa(),o=JSON.stringify(hh(i)),c=O.useRef(!1);return fv(()=>{c.current=!0}),O.useCallback((p,h={})=>{if(lr(c.current,dv),!c.current)return;if(typeof p=="number"){r.go(p);return}let y=ph(p,JSON.parse(o),s,h.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:Fr([t,y.pathname])),(h.replace?r.replace:r.push)(y,h.state,h)},[t,r,o,s,e])}O.createContext(null);function yh(){let{matches:e}=O.useContext(or),t=e[e.length-1];return t?t.params:{}}function $s(e,{relative:t}={}){let{matches:r}=O.useContext(or),{pathname:i}=Aa(),s=JSON.stringify(hh(r));return O.useMemo(()=>ph(e,JSON.parse(s),i,t==="path"),[e,s,i,t])}function Pk(e,t){return mv(e,t)}function mv(e,t,r,i){var T;wt(fl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:o}=O.useContext(sr),{matches:c}=O.useContext(or),d=c[c.length-1],p=d?d.params:{},h=d?d.pathname:"/",y=d?d.pathnameBase:"/",b=d&&d.route;{let R=b&&b.path||"";hv(h,!b||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=Aa(),_;if(t){let R=typeof t=="string"?cl(t):t;wt(y==="/"||((T=R.pathname)==null?void 0:T.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${R.pathname}" was given in the \`location\` prop.`),_=R}else _=v;let k=_.pathname||"/",A=k;if(y!=="/"){let R=y.replace(/^\//,"").split("/");A="/"+k.replace(/^\//,"").split("/").slice(R.length).join("/")}let C=!o&&r&&r.matches&&r.matches.length>0?r.matches:lv(e,{pathname:A});lr(b||C!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),lr(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=Yk(C&&C.map(R=>Object.assign({},R,{params:Object.assign({},p,R.params),pathname:Fr([y,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?y:Fr([y,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),c,r,i);return t&&E?O.createElement(Is.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},E):E}function Hk(){let e=Qk(),t=Dk(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:o},"ErrorBoundary")," or"," ",O.createElement("code",{style:o},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),r?O.createElement("pre",{style:s},r):null,c)}var qk=O.createElement(Hk,null),Ik=class extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?O.createElement(or.Provider,{value:this.props.routeContext},O.createElement(gh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $k({routeContext:e,match:t,children:r}){let i=O.useContext(dl);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),O.createElement(or.Provider,{value:e},r)}function Yk(e,t=[],r=null,i=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,o=r==null?void 0:r.errors;if(o!=null){let p=s.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);wt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(r)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=p),h.route.id){let{loaderData:y,errors:b}=r,v=h.route.loader&&!y.hasOwnProperty(h.route.id)&&(!b||b[h.route.id]===void 0);if(h.route.lazy||v){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,h,y)=>{let b,v=!1,_=null,k=null;r&&(b=o&&h.route.id?o[h.route.id]:void 0,_=h.route.errorElement||qk,c&&(d<0&&y===0?(hv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,k=null):d===y&&(v=!0,k=h.route.hydrateFallbackElement||null)));let A=t.concat(s.slice(0,y+1)),C=()=>{let E;return b?E=_:v?E=k:h.route.Component?E=O.createElement(h.route.Component,null):h.route.element?E=h.route.element:E=p,O.createElement($k,{match:h,routeContext:{outlet:p,matches:A,isDataRoute:r!=null},children:E})};return r&&(h.route.ErrorBoundary||h.route.errorElement||y===0)?O.createElement(Ik,{location:r.location,revalidation:r.revalidation,component:_,error:b,children:C(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):C()},null)}function bh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zk(e){let t=O.useContext(dl);return wt(t,bh(e)),t}function Gk(e){let t=O.useContext(tc);return wt(t,bh(e)),t}function Jk(e){let t=O.useContext(or);return wt(t,bh(e)),t}function xh(e){let t=Jk(e),r=t.matches[t.matches.length-1];return wt(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Xk(){return xh("useRouteId")}function Qk(){var i;let e=O.useContext(gh),t=Gk("useRouteError"),r=xh("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[r]}function Kk(){let{router:e}=Zk("useNavigate"),t=xh("useNavigate"),r=O.useRef(!1);return fv(()=>{r.current=!0}),O.useCallback(async(s,o={})=>{lr(r.current,dv),r.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:t,...o}))},[e,t])}var tb={};function hv(e,t,r){!t&&!tb[e]&&(tb[e]=!0,lr(!1,r))}O.memo(Wk);function Wk({routes:e,future:t,state:r}){return mv(e,void 0,r,t)}function pr({to:e,replace:t,state:r,relative:i}){wt(fl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=O.useContext(sr);lr(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=O.useContext(or),{pathname:c}=Aa(),d=ui(),p=ph(e,hh(o),c,i==="path"),h=JSON.stringify(p);return O.useEffect(()=>{d(JSON.parse(h),{replace:t,state:r,relative:i})},[d,h,i,t,r]),null}function Xn(e){wt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function eS({basename:e="/",children:t=null,location:r,navigationType:i="POP",navigator:s,static:o=!1}){wt(!fl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),d=O.useMemo(()=>({basename:c,navigator:s,static:o,future:{}}),[c,s,o]);typeof r=="string"&&(r=cl(r));let{pathname:p="/",search:h="",hash:y="",state:b=null,key:v="default"}=r,_=O.useMemo(()=>{let k=Pr(p,c);return k==null?null:{location:{pathname:k,search:h,hash:y,state:b,key:v},navigationType:i}},[c,p,h,y,b,v,i]);return lr(_!=null,`<Router basename="${c}"> is not able to match the URL "${p}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:O.createElement(sr.Provider,{value:d},O.createElement(Is.Provider,{children:t,value:_}))}function tS({children:e,location:t}){return Pk(zm(e),t)}function zm(e,t=[]){let r=[];return O.Children.forEach(e,(i,s)=>{if(!O.isValidElement(i))return;let o=[...t,s];if(i.type===O.Fragment){r.push.apply(r,zm(i.props.children,o));return}wt(i.type===Xn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),wt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=zm(i.props.children,o)),r.push(c)}),r}var _u="get",wu="application/x-www-form-urlencoded";function nc(e){return e!=null&&typeof e.tagName=="string"}function nS(e){return nc(e)&&e.tagName.toLowerCase()==="button"}function rS(e){return nc(e)&&e.tagName.toLowerCase()==="form"}function aS(e){return nc(e)&&e.tagName.toLowerCase()==="input"}function iS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function lS(e,t){return e.button===0&&(!t||t==="_self")&&!iS(e)}var fu=null;function sS(){if(fu===null)try{new FormData(document.createElement("form"),0),fu=!1}catch{fu=!0}return fu}var oS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pf(e){return e!=null&&!oS.has(e)?(lr(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wu}"`),null):e}function uS(e,t){let r,i,s,o,c;if(rS(e)){let d=e.getAttribute("action");i=d?Pr(d,t):null,r=e.getAttribute("method")||_u,s=Pf(e.getAttribute("enctype"))||wu,o=new FormData(e)}else if(nS(e)||aS(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||d.getAttribute("action");if(i=p?Pr(p,t):null,r=e.getAttribute("formmethod")||d.getAttribute("method")||_u,s=Pf(e.getAttribute("formenctype"))||Pf(d.getAttribute("enctype"))||wu,o=new FormData(d,e),!sS()){let{name:h,type:y,value:b}=e;if(y==="image"){let v=h?`${h}.`:"";o.append(`${v}x`,"0"),o.append(`${v}y`,"0")}else h&&o.append(h,b)}}else{if(nc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=_u,i=null,s=wu,c=e}return o&&s==="text/plain"&&(c=o,o=void 0),{action:i,method:r.toLowerCase(),encType:s,formData:o,body:c}}function vh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function cS(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dS(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function fS(e,t,r){let i=await Promise.all(e.map(async s=>{let o=t.routes[s.route.id];if(o){let c=await cS(o,r);return c.links?c.links():[]}return[]}));return gS(i.flat(1).filter(dS).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function nb(e,t,r,i,s,o){let c=(p,h)=>r[h]?p.route.id!==r[h].route.id:!0,d=(p,h)=>{var y;return r[h].pathname!==p.pathname||((y=r[h].route.path)==null?void 0:y.endsWith("*"))&&r[h].params["*"]!==p.params["*"]};return o==="assets"?t.filter((p,h)=>c(p,h)||d(p,h)):o==="data"?t.filter((p,h)=>{var b;let y=i.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,h)||d(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((b=r[0])==null?void 0:b.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function mS(e,t,{includeHydrateFallback:r}={}){return hS(e.map(i=>{let s=t.routes[i.route.id];if(!s)return[];let o=[s.module];return s.clientActionModule&&(o=o.concat(s.clientActionModule)),s.clientLoaderModule&&(o=o.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(o=o.concat(s.hydrateFallbackModule)),s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function hS(e){return[...new Set(e)]}function pS(e){let t={},r=Object.keys(e).sort();for(let i of r)t[i]=e[i];return t}function gS(e,t){let r=new Set;return new Set(t),e.reduce((i,s)=>{let o=JSON.stringify(pS(s));return r.has(o)||(r.add(o),i.push({key:o,link:s})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yS=new Set([100,101,204,205]);function bS(e,t){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":t&&Pr(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function pv(){let e=O.useContext(dl);return vh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function xS(){let e=O.useContext(tc);return vh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var _h=O.createContext(void 0);_h.displayName="FrameworkContext";function gv(){let e=O.useContext(_h);return vh(e,"You must render this element inside a <HydratedRouter> element"),e}function vS(e,t){let r=O.useContext(_h),[i,s]=O.useState(!1),[o,c]=O.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:h,onMouseLeave:y,onTouchStart:b}=t,v=O.useRef(null);O.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let A=E=>{E.forEach(T=>{c(T.isIntersecting)})},C=new IntersectionObserver(A,{threshold:.5});return v.current&&C.observe(v.current),()=>{C.disconnect()}}},[e]),O.useEffect(()=>{if(i){let A=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(A)}}},[i]);let _=()=>{s(!0)},k=()=>{s(!1),c(!1)};return r?e!=="intent"?[o,v,{}]:[o,v,{onFocus:ps(d,_),onBlur:ps(p,k),onMouseEnter:ps(h,_),onMouseLeave:ps(y,k),onTouchStart:ps(b,_)}]:[!1,v,{}]}function ps(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function _S({page:e,...t}){let{router:r}=pv(),i=O.useMemo(()=>lv(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?O.createElement(kS,{page:e,matches:i,...t}):null}function wS(e){let{manifest:t,routeModules:r}=gv(),[i,s]=O.useState([]);return O.useEffect(()=>{let o=!1;return fS(e,t,r).then(c=>{o||s(c)}),()=>{o=!0}},[e,t,r]),i}function kS({page:e,matches:t,...r}){let i=Aa(),{manifest:s,routeModules:o}=gv(),{basename:c}=pv(),{loaderData:d,matches:p}=xS(),h=O.useMemo(()=>nb(e,t,p,s,i,"data"),[e,t,p,s,i]),y=O.useMemo(()=>nb(e,t,p,s,i,"assets"),[e,t,p,s,i]),b=O.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let k=new Set,A=!1;if(t.forEach(E=>{var R;let T=s.routes[E.route.id];!T||!T.hasLoader||(!h.some(Z=>Z.route.id===E.route.id)&&E.route.id in d&&((R=o[E.route.id])!=null&&R.shouldRevalidate)||T.hasClientLoader?A=!0:k.add(E.route.id))}),k.size===0)return[];let C=bS(e,c);return A&&k.size>0&&C.searchParams.set("_routes",t.filter(E=>k.has(E.route.id)).map(E=>E.route.id).join(",")),[C.pathname+C.search]},[c,d,i,s,h,t,e,o]),v=O.useMemo(()=>mS(y,s),[y,s]),_=wS(y);return O.createElement(O.Fragment,null,b.map(k=>O.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...r})),v.map(k=>O.createElement("link",{key:k,rel:"modulepreload",href:k,...r})),_.map(({key:k,link:A})=>O.createElement("link",{key:k,...A})))}function SS(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yv&&(window.__reactRouterVersion="7.6.0")}catch{}function jS({basename:e,children:t,window:r}){let i=O.useRef();i.current==null&&(i.current=fk({window:r,v5Compat:!0}));let s=i.current,[o,c]=O.useState({action:s.action,location:s.location}),d=O.useCallback(p=>{O.startTransition(()=>c(p))},[c]);return O.useLayoutEffect(()=>s.listen(d),[s,d]),O.createElement(eS,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:s})}var bv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xv=O.forwardRef(function({onClick:t,discover:r="render",prefetch:i="none",relative:s,reloadDocument:o,replace:c,state:d,target:p,to:h,preventScrollReset:y,viewTransition:b,...v},_){let{basename:k}=O.useContext(sr),A=typeof h=="string"&&bv.test(h),C,E=!1;if(typeof h=="string"&&A&&(C=h,yv))try{let K=new URL(window.location.href),z=h.startsWith("//")?new URL(K.protocol+h):new URL(h),le=Pr(z.pathname,k);z.origin===K.origin&&le!=null?h=le+z.search+z.hash:E=!0}catch{lr(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let T=Fk(h,{relative:s}),[R,Z,D]=vS(i,v),M=CS(h,{replace:c,state:d,target:p,preventScrollReset:y,relative:s,viewTransition:b});function P(K){t&&t(K),K.defaultPrevented||M(K)}let ae=O.createElement("a",{...v,...D,href:C||T,onClick:E||o?t:P,ref:SS(_,Z),target:p,"data-discover":!A&&r==="render"?"true":void 0});return R&&!A?O.createElement(O.Fragment,null,ae,O.createElement(_S,{page:T})):ae});xv.displayName="Link";var Vt=O.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:i="",end:s=!1,style:o,to:c,viewTransition:d,children:p,...h},y){let b=$s(c,{relative:h.relative}),v=Aa(),_=O.useContext(tc),{navigator:k,basename:A}=O.useContext(sr),C=_!=null&&OS(b)&&d===!0,E=k.encodeLocation?k.encodeLocation(b).pathname:b.pathname,T=v.pathname,R=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(T=T.toLowerCase(),R=R?R.toLowerCase():null,E=E.toLowerCase()),R&&A&&(R=Pr(R,A)||R);const Z=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let D=T===E||!s&&T.startsWith(E)&&T.charAt(Z)==="/",M=R!=null&&(R===E||!s&&R.startsWith(E)&&R.charAt(E.length)==="/"),P={isActive:D,isPending:M,isTransitioning:C},ae=D?t:void 0,K;typeof i=="function"?K=i(P):K=[i,D?"active":null,M?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let z=typeof o=="function"?o(P):o;return O.createElement(xv,{...h,"aria-current":ae,className:K,ref:y,style:z,to:c,viewTransition:d},typeof p=="function"?p(P):p)});Vt.displayName="NavLink";var NS=O.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:i,replace:s,state:o,method:c=_u,action:d,onSubmit:p,relative:h,preventScrollReset:y,viewTransition:b,...v},_)=>{let k=MS(),A=RS(d,{relative:h}),C=c.toLowerCase()==="get"?"get":"post",E=typeof d=="string"&&bv.test(d),T=R=>{if(p&&p(R),R.defaultPrevented)return;R.preventDefault();let Z=R.nativeEvent.submitter,D=(Z==null?void 0:Z.getAttribute("formmethod"))||c;k(Z||R.currentTarget,{fetcherKey:t,method:D,navigate:r,replace:s,state:o,relative:h,preventScrollReset:y,viewTransition:b})};return O.createElement("form",{ref:_,method:C,action:A,onSubmit:i?p:T,...v,"data-discover":!E&&e==="render"?"true":void 0})});NS.displayName="Form";function ES(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vv(e){let t=O.useContext(dl);return wt(t,ES(e)),t}function CS(e,{target:t,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:c}={}){let d=ui(),p=Aa(),h=$s(e,{relative:o});return O.useCallback(y=>{if(lS(y,t)){y.preventDefault();let b=r!==void 0?r:Os(p)===Os(h);d(e,{replace:b,state:i,preventScrollReset:s,relative:o,viewTransition:c})}},[p,d,h,r,i,t,e,s,o,c])}var AS=0,TS=()=>`__${String(++AS)}__`;function MS(){let{router:e}=vv("useSubmit"),{basename:t}=O.useContext(sr),r=Xk();return O.useCallback(async(i,s={})=>{let{action:o,method:c,encType:d,formData:p,body:h}=uS(i,t);if(s.navigate===!1){let y=s.fetcherKey||TS();await e.fetch(y,r,s.action||o,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||c,formEncType:s.encType||d,flushSync:s.flushSync})}else await e.navigate(s.action||o,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||c,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:r,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,t,r])}function RS(e,{relative:t}={}){let{basename:r}=O.useContext(sr),i=O.useContext(or);wt(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),o={...$s(e||".",{relative:t})},c=Aa();if(e==null){o.search=c.search;let d=new URLSearchParams(o.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(b=>b).forEach(b=>d.append("index",b));let y=d.toString();o.search=y?`?${y}`:""}}return(!e||e===".")&&s.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:Fr([r,o.pathname])),Os(o)}function OS(e,t={}){let r=O.useContext(cv);wt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=vv("useViewTransitionState"),s=$s(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Pr(r.currentLocation.pathname,i)||r.currentLocation.pathname,c=Pr(r.nextLocation.pathname,i)||r.nextLocation.pathname;return Mu(s.pathname,c)!=null||Mu(s.pathname,o)!=null}[...yS];var Ys=e=>e.type==="checkbox",Wa=e=>e instanceof Date,un=e=>e==null;const _v=e=>typeof e=="object";var Ot=e=>!un(e)&&!Array.isArray(e)&&_v(e)&&!Wa(e),zS=e=>Ot(e)&&e.target?Ys(e.target)?e.target.checked:e.target.value:e,DS=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,LS=(e,t)=>e.has(DS(t)),BS=e=>{const t=e.constructor&&e.constructor.prototype;return Ot(t)&&t.hasOwnProperty("isPrototypeOf")},wh=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Et(e){let t;const r=Array.isArray(e),i=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(wh&&(e instanceof Blob||i))&&(r||Ot(e)))if(t=r?[]:{},!r&&!BS(e))t=e;else for(const s in e)e.hasOwnProperty(s)&&(t[s]=Et(e[s]));else return e;return t}var Zs=e=>Array.isArray(e)?e.filter(Boolean):[],_t=e=>e===void 0,Se=(e,t,r)=>{if(!t||!Ot(e))return r;const i=Zs(t.split(/[,[\].]+?/)).reduce((s,o)=>un(s)?s:s[o],e);return _t(i)||i===e?_t(e[t])?r:e[t]:i},br=e=>typeof e=="boolean",kh=e=>/^\w*$/.test(e),wv=e=>Zs(e.replace(/["|']|\]/g,"").split(/\.|\[/)),lt=(e,t,r)=>{let i=-1;const s=kh(t)?[t]:wv(t),o=s.length,c=o-1;for(;++i<o;){const d=s[i];let p=r;if(i!==c){const h=e[d];p=Ot(h)||Array.isArray(h)?h:isNaN(+s[i+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;e[d]=p,e=e[d]}};const rb={BLUR:"blur",FOCUS_OUT:"focusout"},Kn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Ur={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},US=Ke.createContext(null),FS=()=>Ke.useContext(US);var VS=(e,t,r,i=!0)=>{const s={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(s,o,{get:()=>{const c=o;return t._proxyFormState[c]!==Kn.all&&(t._proxyFormState[c]=!i||Kn.all),e[c]}});return s};const PS=typeof window<"u"?O.useLayoutEffect:O.useEffect;var xr=e=>typeof e=="string",HS=(e,t,r,i,s)=>xr(e)?(i&&t.watch.add(e),Se(r,e,s)):Array.isArray(e)?e.map(o=>(i&&t.watch.add(o),Se(r,o))):(i&&(t.watchAll=!0),r),kv=(e,t,r,i,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[i]:s||!0}}:{},_n=e=>Array.isArray(e)?e:[e],ab=()=>{let e=[];return{get observers(){return e},next:s=>{for(const o of e)o.next&&o.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(o=>o!==s)}}),unsubscribe:()=>{e=[]}}},Dm=e=>un(e)||!_v(e);function xa(e,t){if(Dm(e)||Dm(t))return e===t;if(Wa(e)&&Wa(t))return e.getTime()===t.getTime();const r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(const s of r){const o=e[s];if(!i.includes(s))return!1;if(s!=="ref"){const c=t[s];if(Wa(o)&&Wa(c)||Ot(o)&&Ot(c)||Array.isArray(o)&&Array.isArray(c)?!xa(o,c):o!==c)return!1}}return!0}var nn=e=>Ot(e)&&!Object.keys(e).length,Sh=e=>e.type==="file",rr=e=>typeof e=="function",Ru=e=>{if(!wh)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Sv=e=>e.type==="select-multiple",jh=e=>e.type==="radio",qS=e=>jh(e)||Ys(e),Hf=e=>Ru(e)&&e.isConnected;function IS(e,t){const r=t.slice(0,-1).length;let i=0;for(;i<r;)e=_t(e)?i++:e[t[i++]];return e}function $S(e){for(const t in e)if(e.hasOwnProperty(t)&&!_t(e[t]))return!1;return!0}function Bt(e,t){const r=Array.isArray(t)?t:kh(t)?[t]:wv(t),i=r.length===1?e:IS(e,r),s=r.length-1,o=r[s];return i&&delete i[o],s!==0&&(Ot(i)&&nn(i)||Array.isArray(i)&&$S(i))&&Bt(e,r.slice(0,-1)),e}var jv=e=>{for(const t in e)if(rr(e[t]))return!0;return!1};function Ou(e,t={}){const r=Array.isArray(e);if(Ot(e)||r)for(const i in e)Array.isArray(e[i])||Ot(e[i])&&!jv(e[i])?(t[i]=Array.isArray(e[i])?[]:{},Ou(e[i],t[i])):un(e[i])||(t[i]=!0);return t}function Nv(e,t,r){const i=Array.isArray(e);if(Ot(e)||i)for(const s in e)Array.isArray(e[s])||Ot(e[s])&&!jv(e[s])?_t(t)||Dm(r[s])?r[s]=Array.isArray(e[s])?Ou(e[s],[]):{...Ou(e[s])}:Nv(e[s],un(t)?{}:t[s],r[s]):r[s]=!xa(e[s],t[s]);return r}var gs=(e,t)=>Nv(e,t,Ou(t));const ib={value:!1,isValid:!1},lb={value:!0,isValid:!0};var Ev=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!_t(e[0].attributes.value)?_t(e[0].value)||e[0].value===""?lb:{value:e[0].value,isValid:!0}:lb:ib}return ib},Cv=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:i})=>_t(e)?e:t?e===""?NaN:e&&+e:r&&xr(e)?new Date(e):i?i(e):e;const sb={isValid:!1,value:null};var Av=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,sb):sb;function ob(e){const t=e.ref;return Sh(t)?t.files:jh(t)?Av(e.refs).value:Sv(t)?[...t.selectedOptions].map(({value:r})=>r):Ys(t)?Ev(e.refs).value:Cv(_t(t.value)?e.ref.value:t.value,e)}var YS=(e,t,r,i)=>{const s={};for(const o of e){const c=Se(t,o);c&&lt(s,o,c._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:i}},zu=e=>e instanceof RegExp,ys=e=>_t(e)?e:zu(e)?e.source:Ot(e)?zu(e.value)?e.value.source:e.value:e,tl=e=>({isOnSubmit:!e||e===Kn.onSubmit,isOnBlur:e===Kn.onBlur,isOnChange:e===Kn.onChange,isOnAll:e===Kn.all,isOnTouch:e===Kn.onTouched});const ub="AsyncFunction";var ZS=e=>!!e&&!!e.validate&&!!(rr(e.validate)&&e.validate.constructor.name===ub||Ot(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===ub)),GS=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Lm=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(i=>e.startsWith(i)&&/^\.\w+/.test(e.slice(i.length))));const rl=(e,t,r,i)=>{for(const s of r||Object.keys(e)){const o=Se(e,s);if(o){const{_f:c,...d}=o;if(c){if(c.refs&&c.refs[0]&&t(c.refs[0],s)&&!i)return!0;if(c.ref&&t(c.ref,c.name)&&!i)return!0;if(rl(d,t))break}else if(Ot(d)&&rl(d,t))break}}};function cb(e,t,r){const i=Se(e,r);if(i||kh(r))return{error:i,name:r};const s=r.split(".");for(;s.length;){const o=s.join("."),c=Se(t,o),d=Se(e,o);if(c&&!Array.isArray(c)&&r!==o)return{name:r};if(d&&d.type)return{name:o,error:d};s.pop()}return{name:r}}var JS=(e,t,r,i)=>{r(e);const{name:s,...o}=e;return nn(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(c=>t[c]===(!i||Kn.all))},XS=(e,t,r)=>!e||!t||e===t||_n(e).some(i=>i&&(r?i===t:i.startsWith(t)||t.startsWith(i))),QS=(e,t,r,i,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(t||e):(r?i.isOnBlur:s.isOnBlur)?!e:(r?i.isOnChange:s.isOnChange)?e:!0,KS=(e,t)=>!Zs(Se(e,t)).length&&Bt(e,t),Tv=(e,t,r)=>{const i=_n(Se(e,r));return lt(i,"root",t[r]),lt(e,r,i),e},ku=e=>xr(e);function db(e,t,r="validate"){if(ku(e)||Array.isArray(e)&&e.every(ku)||br(e)&&!e)return{type:r,message:ku(e)?e:"",ref:t}}var Xi=e=>Ot(e)&&!zu(e)?e:{value:e,message:""},Bm=async(e,t,r,i,s,o)=>{const{ref:c,refs:d,required:p,maxLength:h,minLength:y,min:b,max:v,pattern:_,validate:k,name:A,valueAsNumber:C,mount:E}=e._f,T=Se(r,A);if(!E||t.has(A))return{};const R=d?d[0]:c,Z=q=>{s&&R.reportValidity&&(R.setCustomValidity(br(q)?"":q||""),R.reportValidity())},D={},M=jh(c),P=Ys(c),ae=M||P,K=(C||Sh(c))&&_t(c.value)&&_t(T)||Ru(c)&&c.value===""||T===""||Array.isArray(T)&&!T.length,z=kv.bind(null,A,i,D),le=(q,se,de,Y=Ur.maxLength,U=Ur.minLength)=>{const F=q?se:de;D[A]={type:q?Y:U,message:F,ref:c,...z(q?Y:U,F)}};if(o?!Array.isArray(T)||!T.length:p&&(!ae&&(K||un(T))||br(T)&&!T||P&&!Ev(d).isValid||M&&!Av(d).isValid)){const{value:q,message:se}=ku(p)?{value:!!p,message:p}:Xi(p);if(q&&(D[A]={type:Ur.required,message:se,ref:R,...z(Ur.required,se)},!i))return Z(se),D}if(!K&&(!un(b)||!un(v))){let q,se;const de=Xi(v),Y=Xi(b);if(!un(T)&&!isNaN(T)){const U=c.valueAsNumber||T&&+T;un(de.value)||(q=U>de.value),un(Y.value)||(se=U<Y.value)}else{const U=c.valueAsDate||new Date(T),F=x=>new Date(new Date().toDateString()+" "+x),te=c.type=="time",ve=c.type=="week";xr(de.value)&&T&&(q=te?F(T)>F(de.value):ve?T>de.value:U>new Date(de.value)),xr(Y.value)&&T&&(se=te?F(T)<F(Y.value):ve?T<Y.value:U<new Date(Y.value))}if((q||se)&&(le(!!q,de.message,Y.message,Ur.max,Ur.min),!i))return Z(D[A].message),D}if((h||y)&&!K&&(xr(T)||o&&Array.isArray(T))){const q=Xi(h),se=Xi(y),de=!un(q.value)&&T.length>+q.value,Y=!un(se.value)&&T.length<+se.value;if((de||Y)&&(le(de,q.message,se.message),!i))return Z(D[A].message),D}if(_&&!K&&xr(T)){const{value:q,message:se}=Xi(_);if(zu(q)&&!T.match(q)&&(D[A]={type:Ur.pattern,message:se,ref:c,...z(Ur.pattern,se)},!i))return Z(se),D}if(k){if(rr(k)){const q=await k(T,r),se=db(q,R);if(se&&(D[A]={...se,...z(Ur.validate,se.message)},!i))return Z(se.message),D}else if(Ot(k)){let q={};for(const se in k){if(!nn(q)&&!i)break;const de=db(await k[se](T,r),R,se);de&&(q={...de,...z(se,de.message)},Z(de.message),i&&(D[A]=q))}if(!nn(q)&&(D[A]={ref:R,...q},!i))return D}}return Z(!0),D};const WS={mode:Kn.onSubmit,reValidateMode:Kn.onChange,shouldFocusError:!0};function ej(e={}){let t={...WS,...e},r={submitCount:0,isDirty:!1,isReady:!1,isLoading:rr(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1};const i={};let s=Ot(t.defaultValues)||Ot(t.values)?Et(t.defaultValues||t.values)||{}:{},o=t.shouldUnregister?{}:Et(s),c={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},p,h=0;const y={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let b={...y};const v={array:ab(),state:ab()},_=t.criteriaMode===Kn.all,k=B=>Q=>{clearTimeout(h),h=setTimeout(B,Q)},A=async B=>{if(!t.disabled&&(y.isValid||b.isValid||B)){const Q=t.resolver?nn((await P()).errors):await K(i,!0);Q!==r.isValid&&v.state.next({isValid:Q})}},C=(B,Q)=>{!t.disabled&&(y.isValidating||y.validatingFields||b.isValidating||b.validatingFields)&&((B||Array.from(d.mount)).forEach(oe=>{oe&&(Q?lt(r.validatingFields,oe,Q):Bt(r.validatingFields,oe))}),v.state.next({validatingFields:r.validatingFields,isValidating:!nn(r.validatingFields)}))},E=(B,Q=[],oe,we,xe=!0,ye=!0)=>{if(we&&oe&&!t.disabled){if(c.action=!0,ye&&Array.isArray(Se(i,B))){const H=oe(Se(i,B),we.argA,we.argB);xe&&lt(i,B,H)}if(ye&&Array.isArray(Se(r.errors,B))){const H=oe(Se(r.errors,B),we.argA,we.argB);xe&&lt(r.errors,B,H),KS(r.errors,B)}if((y.touchedFields||b.touchedFields)&&ye&&Array.isArray(Se(r.touchedFields,B))){const H=oe(Se(r.touchedFields,B),we.argA,we.argB);xe&&lt(r.touchedFields,B,H)}(y.dirtyFields||b.dirtyFields)&&(r.dirtyFields=gs(s,o)),v.state.next({name:B,isDirty:le(B,Q),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else lt(o,B,Q)},T=(B,Q)=>{lt(r.errors,B,Q),v.state.next({errors:r.errors})},R=B=>{r.errors=B,v.state.next({errors:r.errors,isValid:!1})},Z=(B,Q,oe,we)=>{const xe=Se(i,B);if(xe){const ye=Se(o,B,_t(oe)?Se(s,B):oe);_t(ye)||we&&we.defaultChecked||Q?lt(o,B,Q?ye:ob(xe._f)):de(B,ye),c.mount&&A()}},D=(B,Q,oe,we,xe)=>{let ye=!1,H=!1;const ie={name:B};if(!t.disabled){if(!oe||we){(y.isDirty||b.isDirty)&&(H=r.isDirty,r.isDirty=ie.isDirty=le(),ye=H!==ie.isDirty);const _e=xa(Se(s,B),Q);H=!!Se(r.dirtyFields,B),_e?Bt(r.dirtyFields,B):lt(r.dirtyFields,B,!0),ie.dirtyFields=r.dirtyFields,ye=ye||(y.dirtyFields||b.dirtyFields)&&H!==!_e}if(oe){const _e=Se(r.touchedFields,B);_e||(lt(r.touchedFields,B,oe),ie.touchedFields=r.touchedFields,ye=ye||(y.touchedFields||b.touchedFields)&&_e!==oe)}ye&&xe&&v.state.next(ie)}return ye?ie:{}},M=(B,Q,oe,we)=>{const xe=Se(r.errors,B),ye=(y.isValid||b.isValid)&&br(Q)&&r.isValid!==Q;if(t.delayError&&oe?(p=k(()=>T(B,oe)),p(t.delayError)):(clearTimeout(h),p=null,oe?lt(r.errors,B,oe):Bt(r.errors,B)),(oe?!xa(xe,oe):xe)||!nn(we)||ye){const H={...we,...ye&&br(Q)?{isValid:Q}:{},errors:r.errors,name:B};r={...r,...H},v.state.next(H)}},P=async B=>{C(B,!0);const Q=await t.resolver(o,t.context,YS(B||d.mount,i,t.criteriaMode,t.shouldUseNativeValidation));return C(B),Q},ae=async B=>{const{errors:Q}=await P(B);if(B)for(const oe of B){const we=Se(Q,oe);we?lt(r.errors,oe,we):Bt(r.errors,oe)}else r.errors=Q;return Q},K=async(B,Q,oe={valid:!0})=>{for(const we in B){const xe=B[we];if(xe){const{_f:ye,...H}=xe;if(ye){const ie=d.array.has(ye.name),_e=xe._f&&ZS(xe._f);_e&&y.validatingFields&&C([we],!0);const Ne=await Bm(xe,d.disabled,o,_,t.shouldUseNativeValidation&&!Q,ie);if(_e&&y.validatingFields&&C([we]),Ne[ye.name]&&(oe.valid=!1,Q))break;!Q&&(Se(Ne,ye.name)?ie?Tv(r.errors,Ne,ye.name):lt(r.errors,ye.name,Ne[ye.name]):Bt(r.errors,ye.name))}!nn(H)&&await K(H,Q,oe)}}return oe.valid},z=()=>{for(const B of d.unMount){const Q=Se(i,B);Q&&(Q._f.refs?Q._f.refs.every(oe=>!Hf(oe)):!Hf(Q._f.ref))&&pe(B)}d.unMount=new Set},le=(B,Q)=>!t.disabled&&(B&&Q&&lt(o,B,Q),!xa(x(),s)),q=(B,Q,oe)=>HS(B,d,{...c.mount?o:_t(Q)?s:xr(B)?{[B]:Q}:Q},oe,Q),se=B=>Zs(Se(c.mount?o:s,B,t.shouldUnregister?Se(s,B,[]):[])),de=(B,Q,oe={})=>{const we=Se(i,B);let xe=Q;if(we){const ye=we._f;ye&&(!ye.disabled&&lt(o,B,Cv(Q,ye)),xe=Ru(ye.ref)&&un(Q)?"":Q,Sv(ye.ref)?[...ye.ref.options].forEach(H=>H.selected=xe.includes(H.value)):ye.refs?Ys(ye.ref)?ye.refs.forEach(H=>{(!H.defaultChecked||!H.disabled)&&(Array.isArray(xe)?H.checked=!!xe.find(ie=>ie===H.value):H.checked=xe===H.value||!!xe)}):ye.refs.forEach(H=>H.checked=H.value===xe):Sh(ye.ref)?ye.ref.value="":(ye.ref.value=xe,ye.ref.type||v.state.next({name:B,values:Et(o)})))}(oe.shouldDirty||oe.shouldTouch)&&D(B,xe,oe.shouldTouch,oe.shouldDirty,!0),oe.shouldValidate&&ve(B)},Y=(B,Q,oe)=>{for(const we in Q){if(!Q.hasOwnProperty(we))return;const xe=Q[we],ye=`${B}.${we}`,H=Se(i,ye);(d.array.has(B)||Ot(xe)||H&&!H._f)&&!Wa(xe)?Y(ye,xe,oe):de(ye,xe,oe)}},U=(B,Q,oe={})=>{const we=Se(i,B),xe=d.array.has(B),ye=Et(Q);lt(o,B,ye),xe?(v.array.next({name:B,values:Et(o)}),(y.isDirty||y.dirtyFields||b.isDirty||b.dirtyFields)&&oe.shouldDirty&&v.state.next({name:B,dirtyFields:gs(s,o),isDirty:le(B,ye)})):we&&!we._f&&!un(ye)?Y(B,ye,oe):de(B,ye,oe),Lm(B,d)&&v.state.next({...r}),v.state.next({name:c.mount?B:void 0,values:Et(o)})},F=async B=>{c.mount=!0;const Q=B.target;let oe=Q.name,we=!0;const xe=Se(i,oe),ye=_e=>{we=Number.isNaN(_e)||Wa(_e)&&isNaN(_e.getTime())||xa(_e,Se(o,oe,_e))},H=tl(t.mode),ie=tl(t.reValidateMode);if(xe){let _e,Ne;const Ge=Q.type?ob(xe._f):zS(B),gt=B.type===rb.BLUR||B.type===rb.FOCUS_OUT,jn=!GS(xe._f)&&!t.resolver&&!Se(r.errors,oe)&&!xe._f.deps||QS(gt,Se(r.touchedFields,oe),r.isSubmitted,ie,H),zt=Lm(oe,d,gt);lt(o,oe,Ge),gt?(xe._f.onBlur&&xe._f.onBlur(B),p&&p(0)):xe._f.onChange&&xe._f.onChange(B);const fn=D(oe,Ge,gt),sn=!nn(fn)||zt;if(!gt&&v.state.next({name:oe,type:B.type,values:Et(o)}),jn)return(y.isValid||b.isValid)&&(t.mode==="onBlur"?gt&&A():gt||A()),sn&&v.state.next({name:oe,...zt?{}:fn});if(!gt&&zt&&v.state.next({...r}),t.resolver){const{errors:Tt}=await P([oe]);if(ye(Ge),we){const mn=cb(r.errors,i,oe),hn=cb(Tt,i,mn.name||oe);_e=hn.error,oe=hn.name,Ne=nn(Tt)}}else C([oe],!0),_e=(await Bm(xe,d.disabled,o,_,t.shouldUseNativeValidation))[oe],C([oe]),ye(Ge),we&&(_e?Ne=!1:(y.isValid||b.isValid)&&(Ne=await K(i,!0)));we&&(xe._f.deps&&ve(xe._f.deps),M(oe,Ne,_e,fn))}},te=(B,Q)=>{if(Se(r.errors,Q)&&B.focus)return B.focus(),1},ve=async(B,Q={})=>{let oe,we;const xe=_n(B);if(t.resolver){const ye=await ae(_t(B)?B:xe);oe=nn(ye),we=B?!xe.some(H=>Se(ye,H)):oe}else B?(we=(await Promise.all(xe.map(async ye=>{const H=Se(i,ye);return await K(H&&H._f?{[ye]:H}:H)}))).every(Boolean),!(!we&&!r.isValid)&&A()):we=oe=await K(i);return v.state.next({...!xr(B)||(y.isValid||b.isValid)&&oe!==r.isValid?{}:{name:B},...t.resolver||!B?{isValid:oe}:{},errors:r.errors}),Q.shouldFocus&&!we&&rl(i,te,B?xe:d.mount),we},x=B=>{const Q={...c.mount?o:s};return _t(B)?Q:xr(B)?Se(Q,B):B.map(oe=>Se(Q,oe))},j=(B,Q)=>({invalid:!!Se((Q||r).errors,B),isDirty:!!Se((Q||r).dirtyFields,B),error:Se((Q||r).errors,B),isValidating:!!Se(r.validatingFields,B),isTouched:!!Se((Q||r).touchedFields,B)}),$=B=>{B&&_n(B).forEach(Q=>Bt(r.errors,Q)),v.state.next({errors:B?r.errors:{}})},S=(B,Q,oe)=>{const we=(Se(i,B,{_f:{}})._f||{}).ref,xe=Se(r.errors,B)||{},{ref:ye,message:H,type:ie,..._e}=xe;lt(r.errors,B,{..._e,...Q,ref:we}),v.state.next({name:B,errors:r.errors,isValid:!1}),oe&&oe.shouldFocus&&we&&we.focus&&we.focus()},X=(B,Q)=>rr(B)?v.state.subscribe({next:oe=>B(q(void 0,Q),oe)}):q(B,Q,!0),ue=B=>v.state.subscribe({next:Q=>{XS(B.name,Q.name,B.exact)&&JS(Q,B.formState||y,it,B.reRenderRoot)&&B.callback({values:{...o},...r,...Q})}}).unsubscribe,ne=B=>(c.mount=!0,b={...b,...B.formState},ue({...B,formState:b})),pe=(B,Q={})=>{for(const oe of B?_n(B):d.mount)d.mount.delete(oe),d.array.delete(oe),Q.keepValue||(Bt(i,oe),Bt(o,oe)),!Q.keepError&&Bt(r.errors,oe),!Q.keepDirty&&Bt(r.dirtyFields,oe),!Q.keepTouched&&Bt(r.touchedFields,oe),!Q.keepIsValidating&&Bt(r.validatingFields,oe),!t.shouldUnregister&&!Q.keepDefaultValue&&Bt(s,oe);v.state.next({values:Et(o)}),v.state.next({...r,...Q.keepDirty?{isDirty:le()}:{}}),!Q.keepIsValid&&A()},ge=({disabled:B,name:Q})=>{(br(B)&&c.mount||B||d.disabled.has(Q))&&(B?d.disabled.add(Q):d.disabled.delete(Q))},Ae=(B,Q={})=>{let oe=Se(i,B);const we=br(Q.disabled)||br(t.disabled);return lt(i,B,{...oe||{},_f:{...oe&&oe._f?oe._f:{ref:{name:B}},name:B,mount:!0,...Q}}),d.mount.add(B),oe?ge({disabled:br(Q.disabled)?Q.disabled:t.disabled,name:B}):Z(B,!0,Q.value),{...we?{disabled:Q.disabled||t.disabled}:{},...t.progressive?{required:!!Q.required,min:ys(Q.min),max:ys(Q.max),minLength:ys(Q.minLength),maxLength:ys(Q.maxLength),pattern:ys(Q.pattern)}:{},name:B,onChange:F,onBlur:F,ref:xe=>{if(xe){Ae(B,Q),oe=Se(i,B);const ye=_t(xe.value)&&xe.querySelectorAll&&xe.querySelectorAll("input,select,textarea")[0]||xe,H=qS(ye),ie=oe._f.refs||[];if(H?ie.find(_e=>_e===ye):ye===oe._f.ref)return;lt(i,B,{_f:{...oe._f,...H?{refs:[...ie.filter(Hf),ye,...Array.isArray(Se(s,B))?[{}]:[]],ref:{type:ye.type,name:B}}:{ref:ye}}}),Z(B,!1,void 0,ye)}else oe=Se(i,B,{}),oe._f&&(oe._f.mount=!1),(t.shouldUnregister||Q.shouldUnregister)&&!(LS(d.array,B)&&c.action)&&d.unMount.add(B)}}},De=()=>t.shouldFocusError&&rl(i,te,d.mount),ke=B=>{br(B)&&(v.state.next({disabled:B}),rl(i,(Q,oe)=>{const we=Se(i,oe);we&&(Q.disabled=we._f.disabled||B,Array.isArray(we._f.refs)&&we._f.refs.forEach(xe=>{xe.disabled=we._f.disabled||B}))},0,!1))},Me=(B,Q)=>async oe=>{let we;oe&&(oe.preventDefault&&oe.preventDefault(),oe.persist&&oe.persist());let xe=Et(o);if(v.state.next({isSubmitting:!0}),t.resolver){const{errors:ye,values:H}=await P();r.errors=ye,xe=H}else await K(i);if(d.disabled.size)for(const ye of d.disabled)lt(xe,ye,void 0);if(Bt(r.errors,"root"),nn(r.errors)){v.state.next({errors:{}});try{await B(xe,oe)}catch(ye){we=ye}}else Q&&await Q({...r.errors},oe),De(),setTimeout(De);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:nn(r.errors)&&!we,submitCount:r.submitCount+1,errors:r.errors}),we)throw we},Ue=(B,Q={})=>{Se(i,B)&&(_t(Q.defaultValue)?U(B,Et(Se(s,B))):(U(B,Q.defaultValue),lt(s,B,Et(Q.defaultValue))),Q.keepTouched||Bt(r.touchedFields,B),Q.keepDirty||(Bt(r.dirtyFields,B),r.isDirty=Q.defaultValue?le(B,Et(Se(s,B))):le()),Q.keepError||(Bt(r.errors,B),y.isValid&&A()),v.state.next({...r}))},Ce=(B,Q={})=>{const oe=B?Et(B):s,we=Et(oe),xe=nn(B),ye=xe?s:we;if(Q.keepDefaultValues||(s=oe),!Q.keepValues){if(Q.keepDirtyValues){const H=new Set([...d.mount,...Object.keys(gs(s,o))]);for(const ie of Array.from(H))Se(r.dirtyFields,ie)?lt(ye,ie,Se(o,ie)):U(ie,Se(ye,ie))}else{if(wh&&_t(B))for(const H of d.mount){const ie=Se(i,H);if(ie&&ie._f){const _e=Array.isArray(ie._f.refs)?ie._f.refs[0]:ie._f.ref;if(Ru(_e)){const Ne=_e.closest("form");if(Ne){Ne.reset();break}}}}for(const H of d.mount)U(H,Se(ye,H))}o=Et(ye),v.array.next({values:{...ye}}),v.state.next({values:{...ye}})}d={mount:Q.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},c.mount=!y.isValid||!!Q.keepIsValid||!!Q.keepDirtyValues,c.watch=!!t.shouldUnregister,v.state.next({submitCount:Q.keepSubmitCount?r.submitCount:0,isDirty:xe?!1:Q.keepDirty?r.isDirty:!!(Q.keepDefaultValues&&!xa(B,s)),isSubmitted:Q.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:xe?{}:Q.keepDirtyValues?Q.keepDefaultValues&&o?gs(s,o):r.dirtyFields:Q.keepDefaultValues&&B?gs(s,B):Q.keepDirty?r.dirtyFields:{},touchedFields:Q.keepTouched?r.touchedFields:{},errors:Q.keepErrors?r.errors:{},isSubmitSuccessful:Q.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},xt=(B,Q)=>Ce(rr(B)?B(o):B,Q),At=(B,Q={})=>{const oe=Se(i,B),we=oe&&oe._f;if(we){const xe=we.refs?we.refs[0]:we.ref;xe.focus&&(xe.focus(),Q.shouldSelect&&rr(xe.select)&&xe.select())}},it=B=>{r={...r,...B}},Pt={control:{register:Ae,unregister:pe,getFieldState:j,handleSubmit:Me,setError:S,_subscribe:ue,_runSchema:P,_getWatch:q,_getDirty:le,_setValid:A,_setFieldArray:E,_setDisabledField:ge,_setErrors:R,_getFieldArray:se,_reset:Ce,_resetDefaultValues:()=>rr(t.defaultValues)&&t.defaultValues().then(B=>{xt(B,t.resetOptions),v.state.next({isLoading:!1})}),_removeUnmounted:z,_disableForm:ke,_subjects:v,_proxyFormState:y,get _fields(){return i},get _formValues(){return o},get _state(){return c},set _state(B){c=B},get _defaultValues(){return s},get _names(){return d},set _names(B){d=B},get _formState(){return r},get _options(){return t},set _options(B){t={...t,...B}}},subscribe:ne,trigger:ve,register:Ae,handleSubmit:Me,watch:X,setValue:U,getValues:x,reset:xt,resetField:Ue,clearErrors:$,unregister:pe,setError:S,setFocus:At,getFieldState:j};return{...Pt,formControl:Pt}}var ga=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(Math.random()*16+e)%16|0;return(t=="x"?r:r&3|8).toString(16)})},qf=(e,t,r={})=>r.shouldFocus||_t(r.shouldFocus)?r.focusName||`${e}.${_t(r.focusIndex)?t:r.focusIndex}.`:"",If=(e,t)=>[...e,..._n(t)],$f=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Yf(e,t,r){return[...e.slice(0,t),..._n(r),...e.slice(t)]}var Zf=(e,t,r)=>Array.isArray(e)?(_t(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[],Gf=(e,t)=>[..._n(t),..._n(e)];function tj(e,t){let r=0;const i=[...e];for(const s of t)i.splice(s-r,1),r++;return Zs(i).length?i:[]}var Jf=(e,t)=>_t(t)?[]:tj(e,_n(t).sort((r,i)=>r-i)),Xf=(e,t,r)=>{[e[t],e[r]]=[e[r],e[t]]},fb=(e,t,r)=>(e[t]=r,e);function Du(e){const t=FS(),{control:r=t.control,name:i,keyName:s="id",shouldUnregister:o,rules:c}=e,[d,p]=Ke.useState(r._getFieldArray(i)),h=Ke.useRef(r._getFieldArray(i).map(ga)),y=Ke.useRef(d),b=Ke.useRef(i),v=Ke.useRef(!1);b.current=i,y.current=d,r._names.array.add(i),c&&r.register(i,c),Ke.useEffect(()=>r._subjects.array.subscribe({next:({values:M,name:P})=>{if(P===b.current||!P){const ae=Se(M,b.current);Array.isArray(ae)&&(p(ae),h.current=ae.map(ga))}}}).unsubscribe,[r]);const _=Ke.useCallback(M=>{v.current=!0,r._setFieldArray(i,M)},[r,i]),k=(M,P)=>{const ae=_n(Et(M)),K=If(r._getFieldArray(i),ae);r._names.focus=qf(i,K.length-1,P),h.current=If(h.current,ae.map(ga)),_(K),p(K),r._setFieldArray(i,K,If,{argA:$f(M)})},A=(M,P)=>{const ae=_n(Et(M)),K=Gf(r._getFieldArray(i),ae);r._names.focus=qf(i,0,P),h.current=Gf(h.current,ae.map(ga)),_(K),p(K),r._setFieldArray(i,K,Gf,{argA:$f(M)})},C=M=>{const P=Jf(r._getFieldArray(i),M);h.current=Jf(h.current,M),_(P),p(P),!Array.isArray(Se(r._fields,i))&&lt(r._fields,i,void 0),r._setFieldArray(i,P,Jf,{argA:M})},E=(M,P,ae)=>{const K=_n(Et(P)),z=Yf(r._getFieldArray(i),M,K);r._names.focus=qf(i,M,ae),h.current=Yf(h.current,M,K.map(ga)),_(z),p(z),r._setFieldArray(i,z,Yf,{argA:M,argB:$f(P)})},T=(M,P)=>{const ae=r._getFieldArray(i);Xf(ae,M,P),Xf(h.current,M,P),_(ae),p(ae),r._setFieldArray(i,ae,Xf,{argA:M,argB:P},!1)},R=(M,P)=>{const ae=r._getFieldArray(i);Zf(ae,M,P),Zf(h.current,M,P),_(ae),p(ae),r._setFieldArray(i,ae,Zf,{argA:M,argB:P},!1)},Z=(M,P)=>{const ae=Et(P),K=fb(r._getFieldArray(i),M,ae);h.current=[...K].map((z,le)=>!z||le===M?ga():h.current[le]),_(K),p([...K]),r._setFieldArray(i,K,fb,{argA:M,argB:ae},!0,!1)},D=M=>{const P=_n(Et(M));h.current=P.map(ga),_([...P]),p([...P]),r._setFieldArray(i,[...P],ae=>ae,{},!0,!1)};return Ke.useEffect(()=>{if(r._state.action=!1,Lm(i,r._names)&&r._subjects.state.next({...r._formState}),v.current&&(!tl(r._options.mode).isOnSubmit||r._formState.isSubmitted)&&!tl(r._options.reValidateMode).isOnSubmit)if(r._options.resolver)r._runSchema([i]).then(M=>{const P=Se(M.errors,i),ae=Se(r._formState.errors,i);(ae?!P&&ae.type||P&&(ae.type!==P.type||ae.message!==P.message):P&&P.type)&&(P?lt(r._formState.errors,i,P):Bt(r._formState.errors,i),r._subjects.state.next({errors:r._formState.errors}))});else{const M=Se(r._fields,i);M&&M._f&&!(tl(r._options.reValidateMode).isOnSubmit&&tl(r._options.mode).isOnSubmit)&&Bm(M,r._names.disabled,r._formValues,r._options.criteriaMode===Kn.all,r._options.shouldUseNativeValidation,!0).then(P=>!nn(P)&&r._subjects.state.next({errors:Tv(r._formState.errors,P,i)}))}r._subjects.state.next({name:i,values:Et(r._formValues)}),r._names.focus&&rl(r._fields,(M,P)=>{if(r._names.focus&&P.startsWith(r._names.focus)&&M.focus)return M.focus(),1}),r._names.focus="",r._setValid(),v.current=!1},[d,i,r]),Ke.useEffect(()=>(!Se(r._formValues,i)&&r._setFieldArray(i),()=>{const M=(P,ae)=>{const K=Se(r._fields,P);K&&K._f&&(K._f.mount=ae)};r._options.shouldUnregister||o?r.unregister(i):M(i,!1)}),[i,r,s,o]),{swap:Ke.useCallback(T,[_,i,r]),move:Ke.useCallback(R,[_,i,r]),prepend:Ke.useCallback(A,[_,i,r]),append:Ke.useCallback(k,[_,i,r]),remove:Ke.useCallback(C,[_,i,r]),insert:Ke.useCallback(E,[_,i,r]),update:Ke.useCallback(Z,[_,i,r]),replace:Ke.useCallback(D,[_,i,r]),fields:Ke.useMemo(()=>d.map((M,P)=>({...M,[s]:h.current[P]||ga()})),[d,s])}}function vr(e={}){const t=Ke.useRef(void 0),r=Ke.useRef(void 0),[i,s]=Ke.useState({isDirty:!1,isValidating:!1,isLoading:rr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:rr(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...e.formControl?e.formControl:ej(e),formState:i},e.formControl&&e.defaultValues&&!rr(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions));const o=t.current.control;return o._options=e,PS(()=>{const c=o._subscribe({formState:o._proxyFormState,callback:()=>s({...o._formState}),reRenderRoot:!0});return s(d=>({...d,isReady:!0})),o._formState.isReady=!0,c},[o]),Ke.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),Ke.useEffect(()=>{e.mode&&(o._options.mode=e.mode),e.reValidateMode&&(o._options.reValidateMode=e.reValidateMode),e.errors&&!nn(e.errors)&&o._setErrors(e.errors)},[o,e.errors,e.mode,e.reValidateMode]),Ke.useEffect(()=>{e.shouldUnregister&&o._subjects.state.next({values:o._getWatch()})},[o,e.shouldUnregister]),Ke.useEffect(()=>{if(o._proxyFormState.isDirty){const c=o._getDirty();c!==i.isDirty&&o._subjects.state.next({isDirty:c})}},[o,i.isDirty]),Ke.useEffect(()=>{e.values&&!xa(e.values,r.current)?(o._reset(e.values,o._options.resetOptions),r.current=e.values,s(c=>({...c}))):o._resetDefaultValues()},[o,e.values]),Ke.useEffect(()=>{o._state.mount||(o._setValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=VS(i,o),t.current}const mb=(e,t,r)=>{if(e&&"reportValidity"in e){const i=Se(r,t);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},Mv=(e,t)=>{for(const r in t.fields){const i=t.fields[r];i&&i.ref&&"reportValidity"in i.ref?mb(i.ref,r,e):i&&i.refs&&i.refs.forEach(s=>mb(s,r,e))}},nj=(e,t)=>{t.shouldUseNativeValidation&&Mv(e,t);const r={};for(const i in e){const s=Se(t.fields,i),o=Object.assign(e[i]||{},{ref:s&&s.ref});if(rj(t.names||Object.keys(e),i)){const c=Object.assign({},Se(r,i));lt(c,"root",o),lt(r,i,c)}else lt(r,i,o)}return r},rj=(e,t)=>{const r=hb(t);return e.some(i=>hb(i).match(`^${r}\\.\\d+`))};function hb(e){return e.replace(/\]|\[/g,"")}function aj(e,t){for(var r={};e.length;){var i=e[0],s=i.code,o=i.message,c=i.path.join(".");if(!r[c])if("unionErrors"in i){var d=i.unionErrors[0].errors[0];r[c]={message:d.message,type:d.code}}else r[c]={message:o,type:s};if("unionErrors"in i&&i.unionErrors.forEach(function(y){return y.errors.forEach(function(b){return e.push(b)})}),t){var p=r[c].types,h=p&&p[i.code];r[c]=kv(c,t,r,s,h?[].concat(h,i.message):i.message)}e.shift()}return r}function ei(e,t,r){return r===void 0&&(r={}),function(i,s,o){try{return Promise.resolve(function(c,d){try{var p=Promise.resolve(e[r.mode==="sync"?"parse":"parseAsync"](i,t)).then(function(h){return o.shouldUseNativeValidation&&Mv({},o),{errors:{},values:r.raw?Object.assign({},i):h}})}catch(h){return d(h)}return p&&p.then?p.then(void 0,d):p}(0,function(c){if(function(d){return Array.isArray(d==null?void 0:d.errors)}(c))return{values:{},errors:nj(aj(c.errors,!o.shouldUseNativeValidation&&o.criteriaMode==="all"),o)};throw c}))}catch(c){return Promise.reject(c)}}}var rt;(function(e){e.assertEqual=s=>{};function t(s){}e.assertIs=t;function r(s){throw new Error}e.assertNever=r,e.arrayToEnum=s=>{const o={};for(const c of s)o[c]=c;return o},e.getValidEnumValues=s=>{const o=e.objectKeys(s).filter(d=>typeof s[s[d]]!="number"),c={};for(const d of o)c[d]=s[d];return e.objectValues(c)},e.objectValues=s=>e.objectKeys(s).map(function(o){return s[o]}),e.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const o=[];for(const c in s)Object.prototype.hasOwnProperty.call(s,c)&&o.push(c);return o},e.find=(s,o)=>{for(const c of s)if(o(c))return c},e.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&Number.isFinite(s)&&Math.floor(s)===s;function i(s,o=" | "){return s.map(c=>typeof c=="string"?`'${c}'`:c).join(o)}e.joinValues=i,e.jsonStringifyReplacer=(s,o)=>typeof o=="bigint"?o.toString():o})(rt||(rt={}));var pb;(function(e){e.mergeShapes=(t,r)=>({...t,...r})})(pb||(pb={}));const Te=rt.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ba=e=>{switch(typeof e){case"undefined":return Te.undefined;case"string":return Te.string;case"number":return Number.isNaN(e)?Te.nan:Te.number;case"boolean":return Te.boolean;case"function":return Te.function;case"bigint":return Te.bigint;case"symbol":return Te.symbol;case"object":return Array.isArray(e)?Te.array:e===null?Te.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?Te.promise:typeof Map<"u"&&e instanceof Map?Te.map:typeof Set<"u"&&e instanceof Set?Te.set:typeof Date<"u"&&e instanceof Date?Te.date:Te.object;default:return Te.unknown}},be=rt.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class Hr extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=t}format(t){const r=t||function(o){return o.message},i={_errors:[]},s=o=>{for(const c of o.issues)if(c.code==="invalid_union")c.unionErrors.map(s);else if(c.code==="invalid_return_type")s(c.returnTypeError);else if(c.code==="invalid_arguments")s(c.argumentsError);else if(c.path.length===0)i._errors.push(r(c));else{let d=i,p=0;for(;p<c.path.length;){const h=c.path[p];p===c.path.length-1?(d[h]=d[h]||{_errors:[]},d[h]._errors.push(r(c))):d[h]=d[h]||{_errors:[]},d=d[h],p++}}};return s(this),i}static assert(t){if(!(t instanceof Hr))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,rt.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=r=>r.message){const r={},i=[];for(const s of this.issues)s.path.length>0?(r[s.path[0]]=r[s.path[0]]||[],r[s.path[0]].push(t(s))):i.push(t(s));return{formErrors:i,fieldErrors:r}}get formErrors(){return this.flatten()}}Hr.create=e=>new Hr(e);const Um=(e,t)=>{let r;switch(e.code){case be.invalid_type:e.received===Te.undefined?r="Required":r=`Expected ${e.expected}, received ${e.received}`;break;case be.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,rt.jsonStringifyReplacer)}`;break;case be.unrecognized_keys:r=`Unrecognized key(s) in object: ${rt.joinValues(e.keys,", ")}`;break;case be.invalid_union:r="Invalid input";break;case be.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${rt.joinValues(e.options)}`;break;case be.invalid_enum_value:r=`Invalid enum value. Expected ${rt.joinValues(e.options)}, received '${e.received}'`;break;case be.invalid_arguments:r="Invalid function arguments";break;case be.invalid_return_type:r="Invalid function return type";break;case be.invalid_date:r="Invalid date";break;case be.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:rt.assertNever(e.validation):e.validation!=="regex"?r=`Invalid ${e.validation}`:r="Invalid";break;case be.too_small:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:r="Invalid input";break;case be.too_big:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?r=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:r="Invalid input";break;case be.custom:r="Invalid input";break;case be.invalid_intersection_types:r="Intersection results could not be merged";break;case be.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case be.not_finite:r="Number must be finite";break;default:r=t.defaultError,rt.assertNever(e)}return{message:r}};let ij=Um;function lj(){return ij}const sj=e=>{const{data:t,path:r,errorMaps:i,issueData:s}=e,o=[...r,...s.path||[]],c={...s,path:o};if(s.message!==void 0)return{...s,path:o,message:s.message};let d="";const p=i.filter(h=>!!h).slice().reverse();for(const h of p)d=h(c,{data:t,defaultError:d}).message;return{...s,path:o,message:d}};function je(e,t){const r=lj(),i=sj({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,r,r===Um?void 0:Um].filter(s=>!!s)});e.common.issues.push(i)}class Un{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,r){const i=[];for(const s of r){if(s.status==="aborted")return qe;s.status==="dirty"&&t.dirty(),i.push(s.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,r){const i=[];for(const s of r){const o=await s.key,c=await s.value;i.push({key:o,value:c})}return Un.mergeObjectSync(t,i)}static mergeObjectSync(t,r){const i={};for(const s of r){const{key:o,value:c}=s;if(o.status==="aborted"||c.status==="aborted")return qe;o.status==="dirty"&&t.dirty(),c.status==="dirty"&&t.dirty(),o.value!=="__proto__"&&(typeof c.value<"u"||s.alwaysSet)&&(i[o.value]=c.value)}return{status:t.value,value:i}}}const qe=Object.freeze({status:"aborted"}),ks=e=>({status:"dirty",value:e}),Wn=e=>({status:"valid",value:e}),gb=e=>e.status==="aborted",yb=e=>e.status==="dirty",al=e=>e.status==="valid",Lu=e=>typeof Promise<"u"&&e instanceof Promise;var Re;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(Re||(Re={}));var Bu=function(e,t,r,i){if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?i:r==="a"?i.call(e):i?i.value:t.get(e)},Rv=function(e,t,r,i,s){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?s.call(e,r):s?s.value=r:t.set(e,r),r},Ss,js;class Na{constructor(t,r,i,s){this._cachedPath=[],this.parent=t,this.data=r,this._path=i,this._key=s}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const bb=(e,t)=>{if(al(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new Hr(e.common.issues);return this._error=r,this._error}}};function Ze(e){if(!e)return{};const{errorMap:t,invalid_type_error:r,required_error:i,description:s}=e;if(t&&(r||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:s}:{errorMap:(c,d)=>{const{message:p}=e;return c.code==="invalid_enum_value"?{message:p??d.defaultError}:typeof d.data>"u"?{message:p??i??d.defaultError}:c.code!=="invalid_type"?{message:d.defaultError}:{message:p??r??d.defaultError}},description:s}}class tt{get description(){return this._def.description}_getType(t){return ba(t.data)}_getOrReturnCtx(t,r){return r||{common:t.parent.common,data:t.data,parsedType:ba(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Un,ctx:{common:t.parent.common,data:t.data,parsedType:ba(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const r=this._parse(t);if(Lu(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(t){const r=this._parse(t);return Promise.resolve(r)}parse(t,r){const i=this.safeParse(t,r);if(i.success)return i.data;throw i.error}safeParse(t,r){const i={common:{issues:[],async:(r==null?void 0:r.async)??!1,contextualErrorMap:r==null?void 0:r.errorMap},path:(r==null?void 0:r.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:ba(t)},s=this._parseSync({data:t,path:i.path,parent:i});return bb(i,s)}"~validate"(t){var i,s;const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:ba(t)};if(!this["~standard"].async)try{const o=this._parseSync({data:t,path:[],parent:r});return al(o)?{value:o.value}:{issues:r.common.issues}}catch(o){(s=(i=o==null?void 0:o.message)==null?void 0:i.toLowerCase())!=null&&s.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:t,path:[],parent:r}).then(o=>al(o)?{value:o.value}:{issues:r.common.issues})}async parseAsync(t,r){const i=await this.safeParseAsync(t,r);if(i.success)return i.data;throw i.error}async safeParseAsync(t,r){const i={common:{issues:[],contextualErrorMap:r==null?void 0:r.errorMap,async:!0},path:(r==null?void 0:r.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:ba(t)},s=this._parse({data:t,path:i.path,parent:i}),o=await(Lu(s)?s:Promise.resolve(s));return bb(i,o)}refine(t,r){const i=s=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(s):r;return this._refinement((s,o)=>{const c=t(s),d=()=>o.addIssue({code:be.custom,...i(s)});return typeof Promise<"u"&&c instanceof Promise?c.then(p=>p?!0:(d(),!1)):c?!0:(d(),!1)})}refinement(t,r){return this._refinement((i,s)=>t(i)?!0:(s.addIssue(typeof r=="function"?r(i,s):r),!1))}_refinement(t){return new ll({schema:this,typeName:Pe.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:r=>this["~validate"](r)}}optional(){return ka.create(this,this._def)}nullable(){return sl.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return _r.create(this)}promise(){return Pu.create(this,this._def)}or(t){return Fu.create([this,t],this._def)}and(t){return Vu.create(this,t,this._def)}transform(t){return new ll({...Ze(this._def),schema:this,typeName:Pe.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const r=typeof t=="function"?t:()=>t;return new Vm({...Ze(this._def),innerType:this,defaultValue:r,typeName:Pe.ZodDefault})}brand(){return new Tj({typeName:Pe.ZodBranded,type:this,...Ze(this._def)})}catch(t){const r=typeof t=="function"?t:()=>t;return new Pm({...Ze(this._def),innerType:this,catchValue:r,typeName:Pe.ZodCatch})}describe(t){const r=this.constructor;return new r({...this._def,description:t})}pipe(t){return Nh.create(this,t)}readonly(){return Hm.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const oj=/^c[^\s-]{8,}$/i,uj=/^[0-9a-z]+$/,cj=/^[0-9A-HJKMNP-TV-Z]{26}$/i,dj=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,fj=/^[a-z0-9_-]{21}$/i,mj=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,hj=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,pj=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,gj="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Qf;const yj=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,bj=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,xj=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,vj=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,_j=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,wj=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Ov="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",kj=new RegExp(`^${Ov}$`);function zv(e){let t="[0-5]\\d";e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`);const r=e.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`}function Sj(e){return new RegExp(`^${zv(e)}$`)}function jj(e){let t=`${Ov}T${zv(e)}`;const r=[];return r.push(e.local?"Z?":"Z"),e.offset&&r.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${r.join("|")})`,new RegExp(`^${t}$`)}function Nj(e,t){return!!((t==="v4"||!t)&&yj.test(e)||(t==="v6"||!t)&&xj.test(e))}function Ej(e,t){if(!mj.test(e))return!1;try{const[r]=e.split("."),i=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),s=JSON.parse(atob(i));return!(typeof s!="object"||s===null||"typ"in s&&(s==null?void 0:s.typ)!=="JWT"||!s.alg||t&&s.alg!==t)}catch{return!1}}function Cj(e,t){return!!((t==="v4"||!t)&&bj.test(e)||(t==="v6"||!t)&&vj.test(e))}class va extends tt{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==Te.string){const o=this._getOrReturnCtx(t);return je(o,{code:be.invalid_type,expected:Te.string,received:o.parsedType}),qe}const i=new Un;let s;for(const o of this._def.checks)if(o.kind==="min")t.data.length<o.value&&(s=this._getOrReturnCtx(t,s),je(s,{code:be.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),i.dirty());else if(o.kind==="max")t.data.length>o.value&&(s=this._getOrReturnCtx(t,s),je(s,{code:be.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),i.dirty());else if(o.kind==="length"){const c=t.data.length>o.value,d=t.data.length<o.value;(c||d)&&(s=this._getOrReturnCtx(t,s),c?je(s,{code:be.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):d&&je(s,{code:be.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),i.dirty())}else if(o.kind==="email")pj.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"email",code:be.invalid_string,message:o.message}),i.dirty());else if(o.kind==="emoji")Qf||(Qf=new RegExp(gj,"u")),Qf.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"emoji",code:be.invalid_string,message:o.message}),i.dirty());else if(o.kind==="uuid")dj.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"uuid",code:be.invalid_string,message:o.message}),i.dirty());else if(o.kind==="nanoid")fj.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"nanoid",code:be.invalid_string,message:o.message}),i.dirty());else if(o.kind==="cuid")oj.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"cuid",code:be.invalid_string,message:o.message}),i.dirty());else if(o.kind==="cuid2")uj.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"cuid2",code:be.invalid_string,message:o.message}),i.dirty());else if(o.kind==="ulid")cj.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"ulid",code:be.invalid_string,message:o.message}),i.dirty());else if(o.kind==="url")try{new URL(t.data)}catch{s=this._getOrReturnCtx(t,s),je(s,{validation:"url",code:be.invalid_string,message:o.message}),i.dirty()}else o.kind==="regex"?(o.regex.lastIndex=0,o.regex.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"regex",code:be.invalid_string,message:o.message}),i.dirty())):o.kind==="trim"?t.data=t.data.trim():o.kind==="includes"?t.data.includes(o.value,o.position)||(s=this._getOrReturnCtx(t,s),je(s,{code:be.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),i.dirty()):o.kind==="toLowerCase"?t.data=t.data.toLowerCase():o.kind==="toUpperCase"?t.data=t.data.toUpperCase():o.kind==="startsWith"?t.data.startsWith(o.value)||(s=this._getOrReturnCtx(t,s),je(s,{code:be.invalid_string,validation:{startsWith:o.value},message:o.message}),i.dirty()):o.kind==="endsWith"?t.data.endsWith(o.value)||(s=this._getOrReturnCtx(t,s),je(s,{code:be.invalid_string,validation:{endsWith:o.value},message:o.message}),i.dirty()):o.kind==="datetime"?jj(o).test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{code:be.invalid_string,validation:"datetime",message:o.message}),i.dirty()):o.kind==="date"?kj.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{code:be.invalid_string,validation:"date",message:o.message}),i.dirty()):o.kind==="time"?Sj(o).test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{code:be.invalid_string,validation:"time",message:o.message}),i.dirty()):o.kind==="duration"?hj.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"duration",code:be.invalid_string,message:o.message}),i.dirty()):o.kind==="ip"?Nj(t.data,o.version)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"ip",code:be.invalid_string,message:o.message}),i.dirty()):o.kind==="jwt"?Ej(t.data,o.alg)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"jwt",code:be.invalid_string,message:o.message}),i.dirty()):o.kind==="cidr"?Cj(t.data,o.version)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"cidr",code:be.invalid_string,message:o.message}),i.dirty()):o.kind==="base64"?_j.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"base64",code:be.invalid_string,message:o.message}),i.dirty()):o.kind==="base64url"?wj.test(t.data)||(s=this._getOrReturnCtx(t,s),je(s,{validation:"base64url",code:be.invalid_string,message:o.message}),i.dirty()):rt.assertNever(o);return{status:i.value,value:t.data}}_regex(t,r,i){return this.refinement(s=>t.test(s),{validation:r,code:be.invalid_string,...Re.errToObj(i)})}_addCheck(t){return new va({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...Re.errToObj(t)})}url(t){return this._addCheck({kind:"url",...Re.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...Re.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...Re.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...Re.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...Re.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...Re.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...Re.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...Re.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...Re.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...Re.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...Re.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...Re.errToObj(t)})}datetime(t){return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(t==null?void 0:t.offset)??!1,local:(t==null?void 0:t.local)??!1,...Re.errToObj(t==null?void 0:t.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,...Re.errToObj(t==null?void 0:t.message)})}duration(t){return this._addCheck({kind:"duration",...Re.errToObj(t)})}regex(t,r){return this._addCheck({kind:"regex",regex:t,...Re.errToObj(r)})}includes(t,r){return this._addCheck({kind:"includes",value:t,position:r==null?void 0:r.position,...Re.errToObj(r==null?void 0:r.message)})}startsWith(t,r){return this._addCheck({kind:"startsWith",value:t,...Re.errToObj(r)})}endsWith(t,r){return this._addCheck({kind:"endsWith",value:t,...Re.errToObj(r)})}min(t,r){return this._addCheck({kind:"min",value:t,...Re.errToObj(r)})}max(t,r){return this._addCheck({kind:"max",value:t,...Re.errToObj(r)})}length(t,r){return this._addCheck({kind:"length",value:t,...Re.errToObj(r)})}nonempty(t){return this.min(1,Re.errToObj(t))}trim(){return new va({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new va({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new va({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxLength(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}}va.create=e=>new va({checks:[],typeName:Pe.ZodString,coerce:(e==null?void 0:e.coerce)??!1,...Ze(e)});function Aj(e,t){const r=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,s=r>i?r:i,o=Number.parseInt(e.toFixed(s).replace(".","")),c=Number.parseInt(t.toFixed(s).replace(".",""));return o%c/10**s}class zs extends tt{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==Te.number){const o=this._getOrReturnCtx(t);return je(o,{code:be.invalid_type,expected:Te.number,received:o.parsedType}),qe}let i;const s=new Un;for(const o of this._def.checks)o.kind==="int"?rt.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),je(i,{code:be.invalid_type,expected:"integer",received:"float",message:o.message}),s.dirty()):o.kind==="min"?(o.inclusive?t.data<o.value:t.data<=o.value)&&(i=this._getOrReturnCtx(t,i),je(i,{code:be.too_small,minimum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),s.dirty()):o.kind==="max"?(o.inclusive?t.data>o.value:t.data>=o.value)&&(i=this._getOrReturnCtx(t,i),je(i,{code:be.too_big,maximum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),s.dirty()):o.kind==="multipleOf"?Aj(t.data,o.value)!==0&&(i=this._getOrReturnCtx(t,i),je(i,{code:be.not_multiple_of,multipleOf:o.value,message:o.message}),s.dirty()):o.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),je(i,{code:be.not_finite,message:o.message}),s.dirty()):rt.assertNever(o);return{status:s.value,value:t.data}}gte(t,r){return this.setLimit("min",t,!0,Re.toString(r))}gt(t,r){return this.setLimit("min",t,!1,Re.toString(r))}lte(t,r){return this.setLimit("max",t,!0,Re.toString(r))}lt(t,r){return this.setLimit("max",t,!1,Re.toString(r))}setLimit(t,r,i,s){return new zs({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:i,message:Re.toString(s)}]})}_addCheck(t){return new zs({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:Re.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Re.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Re.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Re.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Re.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:Re.toString(r)})}finite(t){return this._addCheck({kind:"finite",message:Re.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Re.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Re.toString(t)})}get minValue(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&rt.isInteger(t.value))}get isFinite(){let t=null,r=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(r===null||i.value>r)&&(r=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(r)&&Number.isFinite(t)}}zs.create=e=>new zs({checks:[],typeName:Pe.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...Ze(e)});class Ds extends tt{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==Te.bigint)return this._getInvalidInput(t);let i;const s=new Un;for(const o of this._def.checks)o.kind==="min"?(o.inclusive?t.data<o.value:t.data<=o.value)&&(i=this._getOrReturnCtx(t,i),je(i,{code:be.too_small,type:"bigint",minimum:o.value,inclusive:o.inclusive,message:o.message}),s.dirty()):o.kind==="max"?(o.inclusive?t.data>o.value:t.data>=o.value)&&(i=this._getOrReturnCtx(t,i),je(i,{code:be.too_big,type:"bigint",maximum:o.value,inclusive:o.inclusive,message:o.message}),s.dirty()):o.kind==="multipleOf"?t.data%o.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),je(i,{code:be.not_multiple_of,multipleOf:o.value,message:o.message}),s.dirty()):rt.assertNever(o);return{status:s.value,value:t.data}}_getInvalidInput(t){const r=this._getOrReturnCtx(t);return je(r,{code:be.invalid_type,expected:Te.bigint,received:r.parsedType}),qe}gte(t,r){return this.setLimit("min",t,!0,Re.toString(r))}gt(t,r){return this.setLimit("min",t,!1,Re.toString(r))}lte(t,r){return this.setLimit("max",t,!0,Re.toString(r))}lt(t,r){return this.setLimit("max",t,!1,Re.toString(r))}setLimit(t,r,i,s){return new Ds({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:i,message:Re.toString(s)}]})}_addCheck(t){return new Ds({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Re.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Re.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Re.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Re.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:Re.toString(r)})}get minValue(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}}Ds.create=e=>new Ds({checks:[],typeName:Pe.ZodBigInt,coerce:(e==null?void 0:e.coerce)??!1,...Ze(e)});class xb extends tt{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==Te.boolean){const i=this._getOrReturnCtx(t);return je(i,{code:be.invalid_type,expected:Te.boolean,received:i.parsedType}),qe}return Wn(t.data)}}xb.create=e=>new xb({typeName:Pe.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...Ze(e)});class Uu extends tt{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==Te.date){const o=this._getOrReturnCtx(t);return je(o,{code:be.invalid_type,expected:Te.date,received:o.parsedType}),qe}if(Number.isNaN(t.data.getTime())){const o=this._getOrReturnCtx(t);return je(o,{code:be.invalid_date}),qe}const i=new Un;let s;for(const o of this._def.checks)o.kind==="min"?t.data.getTime()<o.value&&(s=this._getOrReturnCtx(t,s),je(s,{code:be.too_small,message:o.message,inclusive:!0,exact:!1,minimum:o.value,type:"date"}),i.dirty()):o.kind==="max"?t.data.getTime()>o.value&&(s=this._getOrReturnCtx(t,s),je(s,{code:be.too_big,message:o.message,inclusive:!0,exact:!1,maximum:o.value,type:"date"}),i.dirty()):rt.assertNever(o);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new Uu({...this._def,checks:[...this._def.checks,t]})}min(t,r){return this._addCheck({kind:"min",value:t.getTime(),message:Re.toString(r)})}max(t,r){return this._addCheck({kind:"max",value:t.getTime(),message:Re.toString(r)})}get minDate(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t!=null?new Date(t):null}}Uu.create=e=>new Uu({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:Pe.ZodDate,...Ze(e)});class vb extends tt{_parse(t){if(this._getType(t)!==Te.symbol){const i=this._getOrReturnCtx(t);return je(i,{code:be.invalid_type,expected:Te.symbol,received:i.parsedType}),qe}return Wn(t.data)}}vb.create=e=>new vb({typeName:Pe.ZodSymbol,...Ze(e)});class _b extends tt{_parse(t){if(this._getType(t)!==Te.undefined){const i=this._getOrReturnCtx(t);return je(i,{code:be.invalid_type,expected:Te.undefined,received:i.parsedType}),qe}return Wn(t.data)}}_b.create=e=>new _b({typeName:Pe.ZodUndefined,...Ze(e)});class wb extends tt{_parse(t){if(this._getType(t)!==Te.null){const i=this._getOrReturnCtx(t);return je(i,{code:be.invalid_type,expected:Te.null,received:i.parsedType}),qe}return Wn(t.data)}}wb.create=e=>new wb({typeName:Pe.ZodNull,...Ze(e)});class kb extends tt{constructor(){super(...arguments),this._any=!0}_parse(t){return Wn(t.data)}}kb.create=e=>new kb({typeName:Pe.ZodAny,...Ze(e)});class Sb extends tt{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Wn(t.data)}}Sb.create=e=>new Sb({typeName:Pe.ZodUnknown,...Ze(e)});class Ea extends tt{_parse(t){const r=this._getOrReturnCtx(t);return je(r,{code:be.invalid_type,expected:Te.never,received:r.parsedType}),qe}}Ea.create=e=>new Ea({typeName:Pe.ZodNever,...Ze(e)});class jb extends tt{_parse(t){if(this._getType(t)!==Te.undefined){const i=this._getOrReturnCtx(t);return je(i,{code:be.invalid_type,expected:Te.void,received:i.parsedType}),qe}return Wn(t.data)}}jb.create=e=>new jb({typeName:Pe.ZodVoid,...Ze(e)});class _r extends tt{_parse(t){const{ctx:r,status:i}=this._processInputParams(t),s=this._def;if(r.parsedType!==Te.array)return je(r,{code:be.invalid_type,expected:Te.array,received:r.parsedType}),qe;if(s.exactLength!==null){const c=r.data.length>s.exactLength.value,d=r.data.length<s.exactLength.value;(c||d)&&(je(r,{code:c?be.too_big:be.too_small,minimum:d?s.exactLength.value:void 0,maximum:c?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),i.dirty())}if(s.minLength!==null&&r.data.length<s.minLength.value&&(je(r,{code:be.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),i.dirty()),s.maxLength!==null&&r.data.length>s.maxLength.value&&(je(r,{code:be.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),i.dirty()),r.common.async)return Promise.all([...r.data].map((c,d)=>s.type._parseAsync(new Na(r,c,r.path,d)))).then(c=>Un.mergeArray(i,c));const o=[...r.data].map((c,d)=>s.type._parseSync(new Na(r,c,r.path,d)));return Un.mergeArray(i,o)}get element(){return this._def.type}min(t,r){return new _r({...this._def,minLength:{value:t,message:Re.toString(r)}})}max(t,r){return new _r({...this._def,maxLength:{value:t,message:Re.toString(r)}})}length(t,r){return new _r({...this._def,exactLength:{value:t,message:Re.toString(r)}})}nonempty(t){return this.min(1,t)}}_r.create=(e,t)=>new _r({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Pe.ZodArray,...Ze(t)});function Wi(e){if(e instanceof Ft){const t={};for(const r in e.shape){const i=e.shape[r];t[r]=ka.create(Wi(i))}return new Ft({...e._def,shape:()=>t})}else return e instanceof _r?new _r({...e._def,type:Wi(e.element)}):e instanceof ka?ka.create(Wi(e.unwrap())):e instanceof sl?sl.create(Wi(e.unwrap())):e instanceof ai?ai.create(e.items.map(t=>Wi(t))):e}class Ft extends tt{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),r=rt.objectKeys(t);return this._cached={shape:t,keys:r},this._cached}_parse(t){if(this._getType(t)!==Te.object){const h=this._getOrReturnCtx(t);return je(h,{code:be.invalid_type,expected:Te.object,received:h.parsedType}),qe}const{status:i,ctx:s}=this._processInputParams(t),{shape:o,keys:c}=this._getCached(),d=[];if(!(this._def.catchall instanceof Ea&&this._def.unknownKeys==="strip"))for(const h in s.data)c.includes(h)||d.push(h);const p=[];for(const h of c){const y=o[h],b=s.data[h];p.push({key:{status:"valid",value:h},value:y._parse(new Na(s,b,s.path,h)),alwaysSet:h in s.data})}if(this._def.catchall instanceof Ea){const h=this._def.unknownKeys;if(h==="passthrough")for(const y of d)p.push({key:{status:"valid",value:y},value:{status:"valid",value:s.data[y]}});else if(h==="strict")d.length>0&&(je(s,{code:be.unrecognized_keys,keys:d}),i.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const y of d){const b=s.data[y];p.push({key:{status:"valid",value:y},value:h._parse(new Na(s,b,s.path,y)),alwaysSet:y in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const h=[];for(const y of p){const b=await y.key,v=await y.value;h.push({key:b,value:v,alwaysSet:y.alwaysSet})}return h}).then(h=>Un.mergeObjectSync(i,h)):Un.mergeObjectSync(i,p)}get shape(){return this._def.shape()}strict(t){return Re.errToObj,new Ft({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(r,i)=>{var o,c;const s=((c=(o=this._def).errorMap)==null?void 0:c.call(o,r,i).message)??i.defaultError;return r.code==="unrecognized_keys"?{message:Re.errToObj(t).message??s}:{message:s}}}:{}})}strip(){return new Ft({...this._def,unknownKeys:"strip"})}passthrough(){return new Ft({...this._def,unknownKeys:"passthrough"})}extend(t){return new Ft({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new Ft({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:Pe.ZodObject})}setKey(t,r){return this.augment({[t]:r})}catchall(t){return new Ft({...this._def,catchall:t})}pick(t){const r={};for(const i of rt.objectKeys(t))t[i]&&this.shape[i]&&(r[i]=this.shape[i]);return new Ft({...this._def,shape:()=>r})}omit(t){const r={};for(const i of rt.objectKeys(this.shape))t[i]||(r[i]=this.shape[i]);return new Ft({...this._def,shape:()=>r})}deepPartial(){return Wi(this)}partial(t){const r={};for(const i of rt.objectKeys(this.shape)){const s=this.shape[i];t&&!t[i]?r[i]=s:r[i]=s.optional()}return new Ft({...this._def,shape:()=>r})}required(t){const r={};for(const i of rt.objectKeys(this.shape))if(t&&!t[i])r[i]=this.shape[i];else{let o=this.shape[i];for(;o instanceof ka;)o=o._def.innerType;r[i]=o}return new Ft({...this._def,shape:()=>r})}keyof(){return Dv(rt.objectKeys(this.shape))}}Ft.create=(e,t)=>new Ft({shape:()=>e,unknownKeys:"strip",catchall:Ea.create(),typeName:Pe.ZodObject,...Ze(t)});Ft.strictCreate=(e,t)=>new Ft({shape:()=>e,unknownKeys:"strict",catchall:Ea.create(),typeName:Pe.ZodObject,...Ze(t)});Ft.lazycreate=(e,t)=>new Ft({shape:e,unknownKeys:"strip",catchall:Ea.create(),typeName:Pe.ZodObject,...Ze(t)});class Fu extends tt{_parse(t){const{ctx:r}=this._processInputParams(t),i=this._def.options;function s(o){for(const d of o)if(d.result.status==="valid")return d.result;for(const d of o)if(d.result.status==="dirty")return r.common.issues.push(...d.ctx.common.issues),d.result;const c=o.map(d=>new Hr(d.ctx.common.issues));return je(r,{code:be.invalid_union,unionErrors:c}),qe}if(r.common.async)return Promise.all(i.map(async o=>{const c={...r,common:{...r.common,issues:[]},parent:null};return{result:await o._parseAsync({data:r.data,path:r.path,parent:c}),ctx:c}})).then(s);{let o;const c=[];for(const p of i){const h={...r,common:{...r.common,issues:[]},parent:null},y=p._parseSync({data:r.data,path:r.path,parent:h});if(y.status==="valid")return y;y.status==="dirty"&&!o&&(o={result:y,ctx:h}),h.common.issues.length&&c.push(h.common.issues)}if(o)return r.common.issues.push(...o.ctx.common.issues),o.result;const d=c.map(p=>new Hr(p));return je(r,{code:be.invalid_union,unionErrors:d}),qe}}get options(){return this._def.options}}Fu.create=(e,t)=>new Fu({options:e,typeName:Pe.ZodUnion,...Ze(t)});function Fm(e,t){const r=ba(e),i=ba(t);if(e===t)return{valid:!0,data:e};if(r===Te.object&&i===Te.object){const s=rt.objectKeys(t),o=rt.objectKeys(e).filter(d=>s.indexOf(d)!==-1),c={...e,...t};for(const d of o){const p=Fm(e[d],t[d]);if(!p.valid)return{valid:!1};c[d]=p.data}return{valid:!0,data:c}}else if(r===Te.array&&i===Te.array){if(e.length!==t.length)return{valid:!1};const s=[];for(let o=0;o<e.length;o++){const c=e[o],d=t[o],p=Fm(c,d);if(!p.valid)return{valid:!1};s.push(p.data)}return{valid:!0,data:s}}else return r===Te.date&&i===Te.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class Vu extends tt{_parse(t){const{status:r,ctx:i}=this._processInputParams(t),s=(o,c)=>{if(gb(o)||gb(c))return qe;const d=Fm(o.value,c.value);return d.valid?((yb(o)||yb(c))&&r.dirty(),{status:r.value,value:d.data}):(je(i,{code:be.invalid_intersection_types}),qe)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([o,c])=>s(o,c)):s(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Vu.create=(e,t,r)=>new Vu({left:e,right:t,typeName:Pe.ZodIntersection,...Ze(r)});class ai extends tt{_parse(t){const{status:r,ctx:i}=this._processInputParams(t);if(i.parsedType!==Te.array)return je(i,{code:be.invalid_type,expected:Te.array,received:i.parsedType}),qe;if(i.data.length<this._def.items.length)return je(i,{code:be.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),qe;!this._def.rest&&i.data.length>this._def.items.length&&(je(i,{code:be.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const o=[...i.data].map((c,d)=>{const p=this._def.items[d]||this._def.rest;return p?p._parse(new Na(i,c,i.path,d)):null}).filter(c=>!!c);return i.common.async?Promise.all(o).then(c=>Un.mergeArray(r,c)):Un.mergeArray(r,o)}get items(){return this._def.items}rest(t){return new ai({...this._def,rest:t})}}ai.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new ai({items:e,typeName:Pe.ZodTuple,rest:null,...Ze(t)})};class Nb extends tt{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:r,ctx:i}=this._processInputParams(t);if(i.parsedType!==Te.map)return je(i,{code:be.invalid_type,expected:Te.map,received:i.parsedType}),qe;const s=this._def.keyType,o=this._def.valueType,c=[...i.data.entries()].map(([d,p],h)=>({key:s._parse(new Na(i,d,i.path,[h,"key"])),value:o._parse(new Na(i,p,i.path,[h,"value"]))}));if(i.common.async){const d=new Map;return Promise.resolve().then(async()=>{for(const p of c){const h=await p.key,y=await p.value;if(h.status==="aborted"||y.status==="aborted")return qe;(h.status==="dirty"||y.status==="dirty")&&r.dirty(),d.set(h.value,y.value)}return{status:r.value,value:d}})}else{const d=new Map;for(const p of c){const h=p.key,y=p.value;if(h.status==="aborted"||y.status==="aborted")return qe;(h.status==="dirty"||y.status==="dirty")&&r.dirty(),d.set(h.value,y.value)}return{status:r.value,value:d}}}}Nb.create=(e,t,r)=>new Nb({valueType:t,keyType:e,typeName:Pe.ZodMap,...Ze(r)});class Ls extends tt{_parse(t){const{status:r,ctx:i}=this._processInputParams(t);if(i.parsedType!==Te.set)return je(i,{code:be.invalid_type,expected:Te.set,received:i.parsedType}),qe;const s=this._def;s.minSize!==null&&i.data.size<s.minSize.value&&(je(i,{code:be.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),r.dirty()),s.maxSize!==null&&i.data.size>s.maxSize.value&&(je(i,{code:be.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),r.dirty());const o=this._def.valueType;function c(p){const h=new Set;for(const y of p){if(y.status==="aborted")return qe;y.status==="dirty"&&r.dirty(),h.add(y.value)}return{status:r.value,value:h}}const d=[...i.data.values()].map((p,h)=>o._parse(new Na(i,p,i.path,h)));return i.common.async?Promise.all(d).then(p=>c(p)):c(d)}min(t,r){return new Ls({...this._def,minSize:{value:t,message:Re.toString(r)}})}max(t,r){return new Ls({...this._def,maxSize:{value:t,message:Re.toString(r)}})}size(t,r){return this.min(t,r).max(t,r)}nonempty(t){return this.min(1,t)}}Ls.create=(e,t)=>new Ls({valueType:e,minSize:null,maxSize:null,typeName:Pe.ZodSet,...Ze(t)});class Eb extends tt{get schema(){return this._def.getter()}_parse(t){const{ctx:r}=this._processInputParams(t);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}Eb.create=(e,t)=>new Eb({getter:e,typeName:Pe.ZodLazy,...Ze(t)});class Cb extends tt{_parse(t){if(t.data!==this._def.value){const r=this._getOrReturnCtx(t);return je(r,{received:r.data,code:be.invalid_literal,expected:this._def.value}),qe}return{status:"valid",value:t.data}}get value(){return this._def.value}}Cb.create=(e,t)=>new Cb({value:e,typeName:Pe.ZodLiteral,...Ze(t)});function Dv(e,t){return new il({values:e,typeName:Pe.ZodEnum,...Ze(t)})}class il extends tt{constructor(){super(...arguments),Ss.set(this,void 0)}_parse(t){if(typeof t.data!="string"){const r=this._getOrReturnCtx(t),i=this._def.values;return je(r,{expected:rt.joinValues(i),received:r.parsedType,code:be.invalid_type}),qe}if(Bu(this,Ss,"f")||Rv(this,Ss,new Set(this._def.values),"f"),!Bu(this,Ss,"f").has(t.data)){const r=this._getOrReturnCtx(t),i=this._def.values;return je(r,{received:r.data,code:be.invalid_enum_value,options:i}),qe}return Wn(t.data)}get options(){return this._def.values}get enum(){const t={};for(const r of this._def.values)t[r]=r;return t}get Values(){const t={};for(const r of this._def.values)t[r]=r;return t}get Enum(){const t={};for(const r of this._def.values)t[r]=r;return t}extract(t,r=this._def){return il.create(t,{...this._def,...r})}exclude(t,r=this._def){return il.create(this.options.filter(i=>!t.includes(i)),{...this._def,...r})}}Ss=new WeakMap;il.create=Dv;class Ab extends tt{constructor(){super(...arguments),js.set(this,void 0)}_parse(t){const r=rt.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==Te.string&&i.parsedType!==Te.number){const s=rt.objectValues(r);return je(i,{expected:rt.joinValues(s),received:i.parsedType,code:be.invalid_type}),qe}if(Bu(this,js,"f")||Rv(this,js,new Set(rt.getValidEnumValues(this._def.values)),"f"),!Bu(this,js,"f").has(t.data)){const s=rt.objectValues(r);return je(i,{received:i.data,code:be.invalid_enum_value,options:s}),qe}return Wn(t.data)}get enum(){return this._def.values}}js=new WeakMap;Ab.create=(e,t)=>new Ab({values:e,typeName:Pe.ZodNativeEnum,...Ze(t)});class Pu extends tt{unwrap(){return this._def.type}_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==Te.promise&&r.common.async===!1)return je(r,{code:be.invalid_type,expected:Te.promise,received:r.parsedType}),qe;const i=r.parsedType===Te.promise?r.data:Promise.resolve(r.data);return Wn(i.then(s=>this._def.type.parseAsync(s,{path:r.path,errorMap:r.common.contextualErrorMap})))}}Pu.create=(e,t)=>new Pu({type:e,typeName:Pe.ZodPromise,...Ze(t)});class ll extends tt{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Pe.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:r,ctx:i}=this._processInputParams(t),s=this._def.effect||null,o={addIssue:c=>{je(i,c),c.fatal?r.abort():r.dirty()},get path(){return i.path}};if(o.addIssue=o.addIssue.bind(o),s.type==="preprocess"){const c=s.transform(i.data,o);if(i.common.async)return Promise.resolve(c).then(async d=>{if(r.value==="aborted")return qe;const p=await this._def.schema._parseAsync({data:d,path:i.path,parent:i});return p.status==="aborted"?qe:p.status==="dirty"||r.value==="dirty"?ks(p.value):p});{if(r.value==="aborted")return qe;const d=this._def.schema._parseSync({data:c,path:i.path,parent:i});return d.status==="aborted"?qe:d.status==="dirty"||r.value==="dirty"?ks(d.value):d}}if(s.type==="refinement"){const c=d=>{const p=s.refinement(d,o);if(i.common.async)return Promise.resolve(p);if(p instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return d};if(i.common.async===!1){const d=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return d.status==="aborted"?qe:(d.status==="dirty"&&r.dirty(),c(d.value),{status:r.value,value:d.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(d=>d.status==="aborted"?qe:(d.status==="dirty"&&r.dirty(),c(d.value).then(()=>({status:r.value,value:d.value}))))}if(s.type==="transform")if(i.common.async===!1){const c=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!al(c))return c;const d=s.transform(c.value,o);if(d instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:d}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(c=>al(c)?Promise.resolve(s.transform(c.value,o)).then(d=>({status:r.value,value:d})):c);rt.assertNever(s)}}ll.create=(e,t,r)=>new ll({schema:e,typeName:Pe.ZodEffects,effect:t,...Ze(r)});ll.createWithPreprocess=(e,t,r)=>new ll({schema:t,effect:{type:"preprocess",transform:e},typeName:Pe.ZodEffects,...Ze(r)});class ka extends tt{_parse(t){return this._getType(t)===Te.undefined?Wn(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}ka.create=(e,t)=>new ka({innerType:e,typeName:Pe.ZodOptional,...Ze(t)});class sl extends tt{_parse(t){return this._getType(t)===Te.null?Wn(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}sl.create=(e,t)=>new sl({innerType:e,typeName:Pe.ZodNullable,...Ze(t)});class Vm extends tt{_parse(t){const{ctx:r}=this._processInputParams(t);let i=r.data;return r.parsedType===Te.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}Vm.create=(e,t)=>new Vm({innerType:e,typeName:Pe.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Ze(t)});class Pm extends tt{_parse(t){const{ctx:r}=this._processInputParams(t),i={...r,common:{...r.common,issues:[]}},s=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Lu(s)?s.then(o=>({status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Hr(i.common.issues)},input:i.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Hr(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Pm.create=(e,t)=>new Pm({innerType:e,typeName:Pe.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Ze(t)});class Tb extends tt{_parse(t){if(this._getType(t)!==Te.nan){const i=this._getOrReturnCtx(t);return je(i,{code:be.invalid_type,expected:Te.nan,received:i.parsedType}),qe}return{status:"valid",value:t.data}}}Tb.create=e=>new Tb({typeName:Pe.ZodNaN,...Ze(e)});class Tj extends tt{_parse(t){const{ctx:r}=this._processInputParams(t),i=r.data;return this._def.type._parse({data:i,path:r.path,parent:r})}unwrap(){return this._def.type}}class Nh extends tt{_parse(t){const{status:r,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const o=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?qe:o.status==="dirty"?(r.dirty(),ks(o.value)):this._def.out._parseAsync({data:o.value,path:i.path,parent:i})})();{const s=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?qe:s.status==="dirty"?(r.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:i.path,parent:i})}}static create(t,r){return new Nh({in:t,out:r,typeName:Pe.ZodPipeline})}}class Hm extends tt{_parse(t){const r=this._def.innerType._parse(t),i=s=>(al(s)&&(s.value=Object.freeze(s.value)),s);return Lu(r)?r.then(s=>i(s)):i(r)}unwrap(){return this._def.innerType}}Hm.create=(e,t)=>new Hm({innerType:e,typeName:Pe.ZodReadonly,...Ze(t)});var Pe;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(Pe||(Pe={}));const ft=va.create;Ea.create;const _a=_r.create,cn=Ft.create;Fu.create;Vu.create;ai.create;const wa=il.create;Pu.create;ka.create;sl.create;var Kf={exports:{}},Wf={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function Mj(){if(Mb)return Wf;Mb=1;var e=ec();function t(p,h){return p===h&&(p!==0||1/p===1/h)||p!==p&&h!==h}var r=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,s=e.useRef,o=e.useEffect,c=e.useMemo,d=e.useDebugValue;return Wf.useSyncExternalStoreWithSelector=function(p,h,y,b,v){var _=s(null);if(_.current===null){var k={hasValue:!1,value:null};_.current=k}else k=_.current;_=c(function(){function C(D){if(!E){if(E=!0,T=D,D=b(D),v!==void 0&&k.hasValue){var M=k.value;if(v(M,D))return R=M}return R=D}if(M=R,r(T,D))return M;var P=b(D);return v!==void 0&&v(M,P)?(T=D,M):(T=D,R=P)}var E=!1,T,R,Z=y===void 0?null:y;return[function(){return C(h())},Z===null?void 0:function(){return C(Z())}]},[h,y,b,v]);var A=i(p,_[0],_[1]);return o(function(){k.hasValue=!0,k.value=A},[A]),d(A),A},Wf}var Rb;function Rj(){return Rb||(Rb=1,Kf.exports=Mj()),Kf.exports}var Oj=Rj();function zj(e){e()}function Dj(){let e=null,t=null;return{clear(){e=null,t=null},notify(){zj(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0;const s=t={callback:r,next:null,prev:t};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:t=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}var Ob={notify(){},get:()=>[]};function Lj(e,t){let r,i=Ob,s=0,o=!1;function c(A){y();const C=i.subscribe(A);let E=!1;return()=>{E||(E=!0,C(),b())}}function d(){i.notify()}function p(){k.onStateChange&&k.onStateChange()}function h(){return o}function y(){s++,r||(r=e.subscribe(p),i=Dj())}function b(){s--,r&&s===0&&(r(),r=void 0,i.clear(),i=Ob)}function v(){o||(o=!0,y())}function _(){o&&(o=!1,b())}const k={addNestedSub:c,notifyNestedSubs:d,handleChangeWrapper:p,isSubscribed:h,trySubscribe:v,tryUnsubscribe:_,getListeners:()=>i};return k}var Bj=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uj=Bj(),Fj=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Vj=Fj(),Pj=()=>Uj||Vj?O.useLayoutEffect:O.useEffect,Hj=Pj(),em=Symbol.for("react-redux-context"),tm=typeof globalThis<"u"?globalThis:{};function qj(){if(!O.createContext)return{};const e=tm[em]??(tm[em]=new Map);let t=e.get(O.createContext);return t||(t=O.createContext(null),e.set(O.createContext,t)),t}var Ca=qj();function Ij(e){const{children:t,context:r,serverState:i,store:s}=e,o=O.useMemo(()=>{const p=Lj(s);return{store:s,subscription:p,getServerState:i?()=>i:void 0}},[s,i]),c=O.useMemo(()=>s.getState(),[s]);Hj(()=>{const{subscription:p}=o;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),c!==s.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[o,c]);const d=r||Ca;return O.createElement(d.Provider,{value:o},t)}var $j=Ij;function Eh(e=Ca){return function(){return O.useContext(e)}}var Lv=Eh();function Bv(e=Ca){const t=e===Ca?Lv:Eh(e),r=()=>{const{store:i}=t();return i};return Object.assign(r,{withTypes:()=>r}),r}var Yj=Bv();function Zj(e=Ca){const t=e===Ca?Yj:Bv(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var Ta=Zj(),Gj=(e,t)=>e===t;function Jj(e=Ca){const t=e===Ca?Lv:Eh(e),r=(i,s={})=>{const{equalityFn:o=Gj}=typeof s=="function"?{equalityFn:s}:s,c=t(),{store:d,subscription:p,getServerState:h}=c;O.useRef(!0);const y=O.useCallback({[i.name](v){return i(v)}}[i.name],[i]),b=Oj.useSyncExternalStoreWithSelector(p.addNestedSub,d.getState,h||d.getState,y,o);return O.useDebugValue(b),b};return Object.assign(r,{withTypes:()=>r}),r}var Ma=Jj();function Kt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Xj=typeof Symbol=="function"&&Symbol.observable||"@@observable",zb=Xj,nm=()=>Math.random().toString(36).substring(7).split("").join("."),Qj={INIT:`@@redux/INIT${nm()}`,REPLACE:`@@redux/REPLACE${nm()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${nm()}`},Hu=Qj;function Ch(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Uv(e,t,r){if(typeof e!="function")throw new Error(Kt(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(Kt(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(Kt(1));return r(Uv)(e,t)}let i=e,s=t,o=new Map,c=o,d=0,p=!1;function h(){c===o&&(c=new Map,o.forEach((C,E)=>{c.set(E,C)}))}function y(){if(p)throw new Error(Kt(3));return s}function b(C){if(typeof C!="function")throw new Error(Kt(4));if(p)throw new Error(Kt(5));let E=!0;h();const T=d++;return c.set(T,C),function(){if(E){if(p)throw new Error(Kt(6));E=!1,h(),c.delete(T),o=null}}}function v(C){if(!Ch(C))throw new Error(Kt(7));if(typeof C.type>"u")throw new Error(Kt(8));if(typeof C.type!="string")throw new Error(Kt(17));if(p)throw new Error(Kt(9));try{p=!0,s=i(s,C)}finally{p=!1}return(o=c).forEach(T=>{T()}),C}function _(C){if(typeof C!="function")throw new Error(Kt(10));i=C,v({type:Hu.REPLACE})}function k(){const C=b;return{subscribe(E){if(typeof E!="object"||E===null)throw new Error(Kt(11));function T(){const Z=E;Z.next&&Z.next(y())}return T(),{unsubscribe:C(T)}},[zb](){return this}}}return v({type:Hu.INIT}),{dispatch:v,subscribe:b,getState:y,replaceReducer:_,[zb]:k}}function Kj(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Hu.INIT})>"u")throw new Error(Kt(12));if(typeof r(void 0,{type:Hu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Kt(13))})}function Wj(e){const t=Object.keys(e),r={};for(let o=0;o<t.length;o++){const c=t[o];typeof e[c]=="function"&&(r[c]=e[c])}const i=Object.keys(r);let s;try{Kj(r)}catch(o){s=o}return function(c={},d){if(s)throw s;let p=!1;const h={};for(let y=0;y<i.length;y++){const b=i[y],v=r[b],_=c[b],k=v(_,d);if(typeof k>"u")throw d&&d.type,new Error(Kt(14));h[b]=k,p=p||k!==_}return p=p||i.length!==Object.keys(c).length,p?h:c}}function qu(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...i)=>t(r(...i)))}function e5(...e){return t=>(r,i)=>{const s=t(r,i);let o=()=>{throw new Error(Kt(15))};const c={getState:s.getState,dispatch:(p,...h)=>o(p,...h)},d=e.map(p=>p(c));return o=qu(...d)(s.dispatch),{...s,dispatch:o}}}function t5(e){return Ch(e)&&"type"in e&&typeof e.type=="string"}var Fv=Symbol.for("immer-nothing"),Db=Symbol.for("immer-draftable"),Fn=Symbol.for("immer-state");function ar(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ol=Object.getPrototypeOf;function ii(e){return!!e&&!!e[Fn]}function qr(e){var t;return e?Vv(e)||Array.isArray(e)||!!e[Db]||!!((t=e.constructor)!=null&&t[Db])||ac(e)||ic(e):!1}var n5=Object.prototype.constructor.toString();function Vv(e){if(!e||typeof e!="object")return!1;const t=ol(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===n5}function Iu(e,t){rc(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,i)=>t(i,r,e))}function rc(e){const t=e[Fn];return t?t.type_:Array.isArray(e)?1:ac(e)?2:ic(e)?3:0}function qm(e,t){return rc(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Pv(e,t,r){const i=rc(e);i===2?e.set(t,r):i===3?e.add(r):e[t]=r}function r5(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ac(e){return e instanceof Map}function ic(e){return e instanceof Set}function Qa(e){return e.copy_||e.base_}function Im(e,t){if(ac(e))return new Map(e);if(ic(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Vv(e);if(t===!0||t==="class_only"&&!r){const i=Object.getOwnPropertyDescriptors(e);delete i[Fn];let s=Reflect.ownKeys(i);for(let o=0;o<s.length;o++){const c=s[o],d=i[c];d.writable===!1&&(d.writable=!0,d.configurable=!0),(d.get||d.set)&&(i[c]={configurable:!0,writable:!0,enumerable:d.enumerable,value:e[c]})}return Object.create(ol(e),i)}else{const i=ol(e);if(i!==null&&r)return{...e};const s=Object.create(i);return Object.assign(s,e)}}function Ah(e,t=!1){return lc(e)||ii(e)||!qr(e)||(rc(e)>1&&(e.set=e.add=e.clear=e.delete=a5),Object.freeze(e),t&&Object.entries(e).forEach(([r,i])=>Ah(i,!0))),e}function a5(){ar(2)}function lc(e){return Object.isFrozen(e)}var i5={};function li(e){const t=i5[e];return t||ar(0,e),t}var Bs;function Hv(){return Bs}function l5(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Lb(e,t){t&&(li("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function $m(e){Ym(e),e.drafts_.forEach(s5),e.drafts_=null}function Ym(e){e===Bs&&(Bs=e.parent_)}function Bb(e){return Bs=l5(Bs,e)}function s5(e){const t=e[Fn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Ub(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[Fn].modified_&&($m(t),ar(4)),qr(e)&&(e=$u(t,e),t.parent_||Yu(t,e)),t.patches_&&li("Patches").generateReplacementPatches_(r[Fn].base_,e,t.patches_,t.inversePatches_)):e=$u(t,r,[]),$m(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Fv?e:void 0}function $u(e,t,r){if(lc(t))return t;const i=t[Fn];if(!i)return Iu(t,(s,o)=>Fb(e,i,t,s,o,r)),t;if(i.scope_!==e)return t;if(!i.modified_)return Yu(e,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const s=i.copy_;let o=s,c=!1;i.type_===3&&(o=new Set(s),s.clear(),c=!0),Iu(o,(d,p)=>Fb(e,i,s,d,p,r,c)),Yu(e,s,!1),r&&e.patches_&&li("Patches").generatePatches_(i,r,e.patches_,e.inversePatches_)}return i.copy_}function Fb(e,t,r,i,s,o,c){if(ii(s)){const d=o&&t&&t.type_!==3&&!qm(t.assigned_,i)?o.concat(i):void 0,p=$u(e,s,d);if(Pv(r,i,p),ii(p))e.canAutoFreeze_=!1;else return}else c&&r.add(s);if(qr(s)&&!lc(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;$u(e,s),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,i)&&Yu(e,s)}}function Yu(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ah(t,r)}function o5(e,t){const r=Array.isArray(e),i={type_:r?1:0,scope_:t?t.scope_:Hv(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=i,o=Th;r&&(s=[i],o=Us);const{revoke:c,proxy:d}=Proxy.revocable(s,o);return i.draft_=d,i.revoke_=c,d}var Th={get(e,t){if(t===Fn)return e;const r=Qa(e);if(!qm(r,t))return u5(e,r,t);const i=r[t];return e.finalized_||!qr(i)?i:i===rm(e.base_,t)?(am(e),e.copy_[t]=Gm(i,e)):i},has(e,t){return t in Qa(e)},ownKeys(e){return Reflect.ownKeys(Qa(e))},set(e,t,r){const i=qv(Qa(e),t);if(i!=null&&i.set)return i.set.call(e.draft_,r),!0;if(!e.modified_){const s=rm(Qa(e),t),o=s==null?void 0:s[Fn];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(r5(r,s)&&(r!==void 0||qm(e.base_,t)))return!0;am(e),Zm(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return rm(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,am(e),Zm(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=Qa(e),i=Reflect.getOwnPropertyDescriptor(r,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:r[t]}},defineProperty(){ar(11)},getPrototypeOf(e){return ol(e.base_)},setPrototypeOf(){ar(12)}},Us={};Iu(Th,(e,t)=>{Us[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Us.deleteProperty=function(e,t){return Us.set.call(this,e,t,void 0)};Us.set=function(e,t,r){return Th.set.call(this,e[0],t,r,e[0])};function rm(e,t){const r=e[Fn];return(r?Qa(r):e)[t]}function u5(e,t,r){var s;const i=qv(t,r);return i?"value"in i?i.value:(s=i.get)==null?void 0:s.call(e.draft_):void 0}function qv(e,t){if(!(t in e))return;let r=ol(e);for(;r;){const i=Object.getOwnPropertyDescriptor(r,t);if(i)return i;r=ol(r)}}function Zm(e){e.modified_||(e.modified_=!0,e.parent_&&Zm(e.parent_))}function am(e){e.copy_||(e.copy_=Im(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var c5=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,i)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const c=this;return function(p=o,...h){return c.produce(p,y=>r.call(this,y,...h))}}typeof r!="function"&&ar(6),i!==void 0&&typeof i!="function"&&ar(7);let s;if(qr(t)){const o=Bb(this),c=Gm(t,void 0);let d=!0;try{s=r(c),d=!1}finally{d?$m(o):Ym(o)}return Lb(o,i),Ub(s,o)}else if(!t||typeof t!="object"){if(s=r(t),s===void 0&&(s=t),s===Fv&&(s=void 0),this.autoFreeze_&&Ah(s,!0),i){const o=[],c=[];li("Patches").generateReplacementPatches_(t,s,o,c),i(o,c)}return s}else ar(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(c,...d)=>this.produceWithPatches(c,p=>t(p,...d));let i,s;return[this.produce(t,r,(c,d)=>{i=c,s=d}),i,s]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){qr(e)||ar(8),ii(e)&&(e=d5(e));const t=Bb(this),r=Gm(e,void 0);return r[Fn].isManual_=!0,Ym(t),r}finishDraft(e,t){const r=e&&e[Fn];(!r||!r.isManual_)&&ar(9);const{scope_:i}=r;return Lb(i,t),Ub(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const s=t[r];if(s.path.length===0&&s.op==="replace"){e=s.value;break}}r>-1&&(t=t.slice(r+1));const i=li("Patches").applyPatches_;return ii(e)?i(e,t):this.produce(e,s=>i(s,t))}};function Gm(e,t){const r=ac(e)?li("MapSet").proxyMap_(e,t):ic(e)?li("MapSet").proxySet_(e,t):o5(e,t);return(t?t.scope_:Hv()).drafts_.push(r),r}function d5(e){return ii(e)||ar(10,e),Iv(e)}function Iv(e){if(!qr(e)||lc(e))return e;const t=e[Fn];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Im(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Im(e,!0);return Iu(r,(i,s)=>{Pv(r,i,Iv(s))}),t&&(t.finalized_=!1),r}var Vn=new c5,$v=Vn.produce;Vn.produceWithPatches.bind(Vn);Vn.setAutoFreeze.bind(Vn);Vn.setUseStrictShallowCopy.bind(Vn);Vn.applyPatches.bind(Vn);Vn.createDraft.bind(Vn);Vn.finishDraft.bind(Vn);function Yv(e){return({dispatch:r,getState:i})=>s=>o=>typeof o=="function"?o(r,i,e):s(o)}var f5=Yv(),m5=Yv,h5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?qu:qu.apply(null,arguments)},p5=e=>e&&typeof e.match=="function";function Cs(e,t){function r(...i){if(t){let s=t(...i);if(!s)throw new Error(Vr(0));return{type:e,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:e,payload:i[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=i=>t5(i)&&i.type===e,r}var Zv=class Ns extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ns.prototype)}static get[Symbol.species](){return Ns}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ns(...t[0].concat(this)):new Ns(...t.concat(this))}};function Vb(e){return qr(e)?$v(e,()=>{}):e}function mu(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function g5(e){return typeof e=="boolean"}var y5=()=>function(t){const{thunk:r=!0,immutableCheck:i=!0,serializableCheck:s=!0,actionCreatorCheck:o=!0}=t??{};let c=new Zv;return r&&(g5(r)?c.push(f5):c.push(m5(r.extraArgument))),c},b5="RTK_autoBatch",Pb=e=>t=>{setTimeout(t,e)},x5=(e={type:"raf"})=>t=>(...r)=>{const i=t(...r);let s=!0,o=!1,c=!1;const d=new Set,p=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Pb(10):e.type==="callback"?e.queueNotification:Pb(e.timeout),h=()=>{c=!1,o&&(o=!1,d.forEach(y=>y()))};return Object.assign({},i,{subscribe(y){const b=()=>s&&y(),v=i.subscribe(b);return d.add(y),()=>{v(),d.delete(y)}},dispatch(y){var b;try{return s=!((b=y==null?void 0:y.meta)!=null&&b[b5]),o=!s,o&&(c||(c=!0,p(h))),i.dispatch(y)}finally{s=!0}}})},v5=e=>function(r){const{autoBatch:i=!0}=r??{};let s=new Zv(e);return i&&s.push(x5(typeof i=="object"?i:void 0)),s};function _5(e){const t=y5(),{reducer:r=void 0,middleware:i,devTools:s=!0,preloadedState:o=void 0,enhancers:c=void 0}=e||{};let d;if(typeof r=="function")d=r;else if(Ch(r))d=Wj(r);else throw new Error(Vr(1));let p;typeof i=="function"?p=i(t):p=t();let h=qu;s&&(h=h5({trace:!1,...typeof s=="object"&&s}));const y=e5(...p),b=v5(y);let v=typeof c=="function"?c(b):b();const _=h(...v);return Uv(d,o,_)}function Gv(e){const t={},r=[];let i;const s={addCase(o,c){const d=typeof o=="string"?o:o.type;if(!d)throw new Error(Vr(28));if(d in t)throw new Error(Vr(29));return t[d]=c,s},addMatcher(o,c){return r.push({matcher:o,reducer:c}),s},addDefaultCase(o){return i=o,s}};return e(s),[t,r,i]}function w5(e){return typeof e=="function"}function k5(e,t){let[r,i,s]=Gv(t),o;if(w5(e))o=()=>Vb(e());else{const d=Vb(e);o=()=>d}function c(d=o(),p){let h=[r[p.type],...i.filter(({matcher:y})=>y(p)).map(({reducer:y})=>y)];return h.filter(y=>!!y).length===0&&(h=[s]),h.reduce((y,b)=>{if(b)if(ii(y)){const _=b(y,p);return _===void 0?y:_}else{if(qr(y))return $v(y,v=>b(v,p));{const v=b(y,p);if(v===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return y},d)}return c.getInitialState=o,c}var S5=(e,t)=>p5(e)?e.match(t):e(t);function j5(...e){return t=>e.some(r=>S5(r,t))}var N5="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",E5=(e=21)=>{let t="",r=e;for(;r--;)t+=N5[Math.random()*64|0];return t},C5=["name","message","stack","code"],im=class{constructor(e,t){Of(this,"_type");this.payload=e,this.meta=t}},Hb=class{constructor(e,t){Of(this,"_type");this.payload=e,this.meta=t}},A5=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of C5)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},qb="External signal was aborted",sc=(()=>{function e(t,r,i){const s=Cs(t+"/fulfilled",(p,h,y,b)=>({payload:p,meta:{...b||{},arg:y,requestId:h,requestStatus:"fulfilled"}})),o=Cs(t+"/pending",(p,h,y)=>({payload:void 0,meta:{...y||{},arg:h,requestId:p,requestStatus:"pending"}})),c=Cs(t+"/rejected",(p,h,y,b,v)=>({payload:b,error:(i&&i.serializeError||A5)(p||"Rejected"),meta:{...v||{},arg:y,requestId:h,rejectedWithValue:!!b,requestStatus:"rejected",aborted:(p==null?void 0:p.name)==="AbortError",condition:(p==null?void 0:p.name)==="ConditionError"}}));function d(p,{signal:h}={}){return(y,b,v)=>{const _=i!=null&&i.idGenerator?i.idGenerator(p):E5(),k=new AbortController;let A,C;function E(R){C=R,k.abort()}h&&(h.aborted?E(qb):h.addEventListener("abort",()=>E(qb),{once:!0}));const T=async function(){var D,M;let R;try{let P=(D=i==null?void 0:i.condition)==null?void 0:D.call(i,p,{getState:b,extra:v});if(M5(P)&&(P=await P),P===!1||k.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const ae=new Promise((K,z)=>{A=()=>{z({name:"AbortError",message:C||"Aborted"})},k.signal.addEventListener("abort",A)});y(o(_,p,(M=i==null?void 0:i.getPendingMeta)==null?void 0:M.call(i,{requestId:_,arg:p},{getState:b,extra:v}))),R=await Promise.race([ae,Promise.resolve(r(p,{dispatch:y,getState:b,extra:v,requestId:_,signal:k.signal,abort:E,rejectWithValue:(K,z)=>new im(K,z),fulfillWithValue:(K,z)=>new Hb(K,z)})).then(K=>{if(K instanceof im)throw K;return K instanceof Hb?s(K.payload,_,p,K.meta):s(K,_,p)})])}catch(P){R=P instanceof im?c(null,_,p,P.payload,P.meta):c(P,_,p)}finally{A&&k.signal.removeEventListener("abort",A)}return i&&!i.dispatchConditionRejection&&c.match(R)&&R.meta.condition||y(R),R}();return Object.assign(T,{abort:E,requestId:_,arg:p,unwrap(){return T.then(T5)}})}}return Object.assign(d,{pending:o,rejected:c,fulfilled:s,settled:j5(c,s),typePrefix:t})}return e.withTypes=()=>e,e})();function T5(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function M5(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var R5=Symbol.for("rtk-slice-createasyncthunk");function O5(e,t){return`${e}/${t}`}function z5({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[R5];return function(s){const{name:o,reducerPath:c=o}=s;if(!o)throw new Error(Vr(11));const d=(typeof s.reducers=="function"?s.reducers(B5()):s.reducers)||{},p=Object.keys(d),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},y={addCase(Z,D){const M=typeof Z=="string"?Z:Z.type;if(!M)throw new Error(Vr(12));if(M in h.sliceCaseReducersByType)throw new Error(Vr(13));return h.sliceCaseReducersByType[M]=D,y},addMatcher(Z,D){return h.sliceMatchers.push({matcher:Z,reducer:D}),y},exposeAction(Z,D){return h.actionCreators[Z]=D,y},exposeCaseReducer(Z,D){return h.sliceCaseReducersByName[Z]=D,y}};p.forEach(Z=>{const D=d[Z],M={reducerName:Z,type:O5(o,Z),createNotation:typeof s.reducers=="function"};F5(D)?P5(M,D,y,t):U5(M,D,y)});function b(){const[Z={},D=[],M=void 0]=typeof s.extraReducers=="function"?Gv(s.extraReducers):[s.extraReducers],P={...Z,...h.sliceCaseReducersByType};return k5(s.initialState,ae=>{for(let K in P)ae.addCase(K,P[K]);for(let K of h.sliceMatchers)ae.addMatcher(K.matcher,K.reducer);for(let K of D)ae.addMatcher(K.matcher,K.reducer);M&&ae.addDefaultCase(M)})}const v=Z=>Z,_=new Map,k=new WeakMap;let A;function C(Z,D){return A||(A=b()),A(Z,D)}function E(){return A||(A=b()),A.getInitialState()}function T(Z,D=!1){function M(ae){let K=ae[Z];return typeof K>"u"&&D&&(K=mu(k,M,E)),K}function P(ae=v){const K=mu(_,D,()=>new WeakMap);return mu(K,ae,()=>{const z={};for(const[le,q]of Object.entries(s.selectors??{}))z[le]=D5(q,ae,()=>mu(k,ae,E),D);return z})}return{reducerPath:Z,getSelectors:P,get selectors(){return P(M)},selectSlice:M}}const R={name:o,reducer:C,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:E,...T(c),injectInto(Z,{reducerPath:D,...M}={}){const P=D??c;return Z.inject({reducerPath:P,reducer:C},M),{...R,...T(P,!0)}}};return R}}function D5(e,t,r,i){function s(o,...c){let d=t(o);return typeof d>"u"&&i&&(d=r()),e(d,...c)}return s.unwrapped=e,s}var L5=z5();function B5(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function U5({type:e,reducerName:t,createNotation:r},i,s){let o,c;if("reducer"in i){if(r&&!V5(i))throw new Error(Vr(17));o=i.reducer,c=i.prepare}else o=i;s.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,c?Cs(e,c):Cs(e))}function F5(e){return e._reducerDefinitionType==="asyncThunk"}function V5(e){return e._reducerDefinitionType==="reducerWithPrepare"}function P5({type:e,reducerName:t},r,i,s){if(!s)throw new Error(Vr(18));const{payloadCreator:o,fulfilled:c,pending:d,rejected:p,settled:h,options:y}=r,b=s(e,o,y);i.exposeAction(t,b),c&&i.addCase(b.fulfilled,c),d&&i.addCase(b.pending,d),p&&i.addCase(b.rejected,p),h&&i.addMatcher(b.settled,h),i.exposeCaseReducer(t,{fulfilled:c||hu,pending:d||hu,rejected:p||hu,settled:h||hu})}function hu(){}function Vr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}function Jv(e,t){return function(){return e.apply(t,arguments)}}const{toString:H5}=Object.prototype,{getPrototypeOf:Mh}=Object,{iterator:oc,toStringTag:Xv}=Symbol,uc=(e=>t=>{const r=H5.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),ur=e=>(e=e.toLowerCase(),t=>uc(t)===e),cc=e=>t=>typeof t===e,{isArray:ml}=Array,Fs=cc("undefined");function q5(e){return e!==null&&!Fs(e)&&e.constructor!==null&&!Fs(e.constructor)&&wn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Qv=ur("ArrayBuffer");function I5(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Qv(e.buffer),t}const $5=cc("string"),wn=cc("function"),Kv=cc("number"),dc=e=>e!==null&&typeof e=="object",Y5=e=>e===!0||e===!1,Su=e=>{if(uc(e)!=="object")return!1;const t=Mh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Xv in e)&&!(oc in e)},Z5=ur("Date"),G5=ur("File"),J5=ur("Blob"),X5=ur("FileList"),Q5=e=>dc(e)&&wn(e.pipe),K5=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||wn(e.append)&&((t=uc(e))==="formdata"||t==="object"&&wn(e.toString)&&e.toString()==="[object FormData]"))},W5=ur("URLSearchParams"),[eN,tN,nN,rN]=["ReadableStream","Request","Response","Headers"].map(ur),aN=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Gs(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let i,s;if(typeof e!="object"&&(e=[e]),ml(e))for(i=0,s=e.length;i<s;i++)t.call(null,e[i],i,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),c=o.length;let d;for(i=0;i<c;i++)d=o[i],t.call(null,e[d],d,e)}}function Wv(e,t){t=t.toLowerCase();const r=Object.keys(e);let i=r.length,s;for(;i-- >0;)if(s=r[i],t===s.toLowerCase())return s;return null}const ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,e1=e=>!Fs(e)&&e!==ti;function Jm(){const{caseless:e}=e1(this)&&this||{},t={},r=(i,s)=>{const o=e&&Wv(t,s)||s;Su(t[o])&&Su(i)?t[o]=Jm(t[o],i):Su(i)?t[o]=Jm({},i):ml(i)?t[o]=i.slice():t[o]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Gs(arguments[i],r);return t}const iN=(e,t,r,{allOwnKeys:i}={})=>(Gs(t,(s,o)=>{r&&wn(s)?e[o]=Jv(s,r):e[o]=s},{allOwnKeys:i}),e),lN=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),sN=(e,t,r,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},oN=(e,t,r,i)=>{let s,o,c;const d={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)c=s[o],(!i||i(c,e,t))&&!d[c]&&(t[c]=e[c],d[c]=!0);e=r!==!1&&Mh(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},uN=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const i=e.indexOf(t,r);return i!==-1&&i===r},cN=e=>{if(!e)return null;if(ml(e))return e;let t=e.length;if(!Kv(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},dN=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Mh(Uint8Array)),fN=(e,t)=>{const i=(e&&e[oc]).call(e);let s;for(;(s=i.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},mN=(e,t)=>{let r;const i=[];for(;(r=e.exec(t))!==null;)i.push(r);return i},hN=ur("HTMLFormElement"),pN=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,i,s){return i.toUpperCase()+s}),Ib=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),gN=ur("RegExp"),t1=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),i={};Gs(r,(s,o)=>{let c;(c=t(s,o,e))!==!1&&(i[o]=c||s)}),Object.defineProperties(e,i)},yN=e=>{t1(e,(t,r)=>{if(wn(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const i=e[r];if(wn(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},bN=(e,t)=>{const r={},i=s=>{s.forEach(o=>{r[o]=!0})};return ml(e)?i(e):i(String(e).split(t)),r},xN=()=>{},vN=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function _N(e){return!!(e&&wn(e.append)&&e[Xv]==="FormData"&&e[oc])}const wN=e=>{const t=new Array(10),r=(i,s)=>{if(dc(i)){if(t.indexOf(i)>=0)return;if(!("toJSON"in i)){t[s]=i;const o=ml(i)?[]:{};return Gs(i,(c,d)=>{const p=r(c,s+1);!Fs(p)&&(o[d]=p)}),t[s]=void 0,o}}return i};return r(e,0)},kN=ur("AsyncFunction"),SN=e=>e&&(dc(e)||wn(e))&&wn(e.then)&&wn(e.catch),n1=((e,t)=>e?setImmediate:t?((r,i)=>(ti.addEventListener("message",({source:s,data:o})=>{s===ti&&o===r&&i.length&&i.shift()()},!1),s=>{i.push(s),ti.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",wn(ti.postMessage)),jN=typeof queueMicrotask<"u"?queueMicrotask.bind(ti):typeof process<"u"&&process.nextTick||n1,NN=e=>e!=null&&wn(e[oc]),re={isArray:ml,isArrayBuffer:Qv,isBuffer:q5,isFormData:K5,isArrayBufferView:I5,isString:$5,isNumber:Kv,isBoolean:Y5,isObject:dc,isPlainObject:Su,isReadableStream:eN,isRequest:tN,isResponse:nN,isHeaders:rN,isUndefined:Fs,isDate:Z5,isFile:G5,isBlob:J5,isRegExp:gN,isFunction:wn,isStream:Q5,isURLSearchParams:W5,isTypedArray:dN,isFileList:X5,forEach:Gs,merge:Jm,extend:iN,trim:aN,stripBOM:lN,inherits:sN,toFlatObject:oN,kindOf:uc,kindOfTest:ur,endsWith:uN,toArray:cN,forEachEntry:fN,matchAll:mN,isHTMLForm:hN,hasOwnProperty:Ib,hasOwnProp:Ib,reduceDescriptors:t1,freezeMethods:yN,toObjectSet:bN,toCamelCase:pN,noop:xN,toFiniteNumber:vN,findKey:Wv,global:ti,isContextDefined:e1,isSpecCompliantForm:_N,toJSONObject:wN,isAsyncFn:kN,isThenable:SN,setImmediate:n1,asap:jN,isIterable:NN};function He(e,t,r,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),i&&(this.request=i),s&&(this.response=s,this.status=s.status?s.status:null)}re.inherits(He,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:re.toJSONObject(this.config),code:this.code,status:this.status}}});const r1=He.prototype,a1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{a1[e]={value:e}});Object.defineProperties(He,a1);Object.defineProperty(r1,"isAxiosError",{value:!0});He.from=(e,t,r,i,s,o)=>{const c=Object.create(r1);return re.toFlatObject(e,c,function(p){return p!==Error.prototype},d=>d!=="isAxiosError"),He.call(c,e.message,t,r,i,s),c.cause=e,c.name=e.name,o&&Object.assign(c,o),c};const EN=null;function Xm(e){return re.isPlainObject(e)||re.isArray(e)}function i1(e){return re.endsWith(e,"[]")?e.slice(0,-2):e}function $b(e,t,r){return e?e.concat(t).map(function(s,o){return s=i1(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function CN(e){return re.isArray(e)&&!e.some(Xm)}const AN=re.toFlatObject(re,{},null,function(t){return/^is[A-Z]/.test(t)});function fc(e,t,r){if(!re.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=re.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(A,C){return!re.isUndefined(C[A])});const i=r.metaTokens,s=r.visitor||y,o=r.dots,c=r.indexes,p=(r.Blob||typeof Blob<"u"&&Blob)&&re.isSpecCompliantForm(t);if(!re.isFunction(s))throw new TypeError("visitor must be a function");function h(k){if(k===null)return"";if(re.isDate(k))return k.toISOString();if(!p&&re.isBlob(k))throw new He("Blob is not supported. Use a Buffer instead.");return re.isArrayBuffer(k)||re.isTypedArray(k)?p&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function y(k,A,C){let E=k;if(k&&!C&&typeof k=="object"){if(re.endsWith(A,"{}"))A=i?A:A.slice(0,-2),k=JSON.stringify(k);else if(re.isArray(k)&&CN(k)||(re.isFileList(k)||re.endsWith(A,"[]"))&&(E=re.toArray(k)))return A=i1(A),E.forEach(function(R,Z){!(re.isUndefined(R)||R===null)&&t.append(c===!0?$b([A],Z,o):c===null?A:A+"[]",h(R))}),!1}return Xm(k)?!0:(t.append($b(C,A,o),h(k)),!1)}const b=[],v=Object.assign(AN,{defaultVisitor:y,convertValue:h,isVisitable:Xm});function _(k,A){if(!re.isUndefined(k)){if(b.indexOf(k)!==-1)throw Error("Circular reference detected in "+A.join("."));b.push(k),re.forEach(k,function(E,T){(!(re.isUndefined(E)||E===null)&&s.call(t,E,re.isString(T)?T.trim():T,A,v))===!0&&_(E,A?A.concat(T):[T])}),b.pop()}}if(!re.isObject(e))throw new TypeError("data must be an object");return _(e),t}function Yb(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return t[i]})}function Rh(e,t){this._pairs=[],e&&fc(e,this,t)}const l1=Rh.prototype;l1.append=function(t,r){this._pairs.push([t,r])};l1.toString=function(t){const r=t?function(i){return t.call(this,i,Yb)}:Yb;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function TN(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s1(e,t,r){if(!t)return e;const i=r&&r.encode||TN;re.isFunction(r)&&(r={serialize:r});const s=r&&r.serialize;let o;if(s?o=s(t,r):o=re.isURLSearchParams(t)?t.toString():new Rh(t,r).toString(i),o){const c=e.indexOf("#");c!==-1&&(e=e.slice(0,c)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Zb{constructor(){this.handlers=[]}use(t,r,i){return this.handlers.push({fulfilled:t,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){re.forEach(this.handlers,function(i){i!==null&&t(i)})}}const o1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},MN=typeof URLSearchParams<"u"?URLSearchParams:Rh,RN=typeof FormData<"u"?FormData:null,ON=typeof Blob<"u"?Blob:null,zN={isBrowser:!0,classes:{URLSearchParams:MN,FormData:RN,Blob:ON},protocols:["http","https","file","blob","url","data"]},Oh=typeof window<"u"&&typeof document<"u",Qm=typeof navigator=="object"&&navigator||void 0,DN=Oh&&(!Qm||["ReactNative","NativeScript","NS"].indexOf(Qm.product)<0),LN=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",BN=Oh&&window.location.href||"http://localhost",UN=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Oh,hasStandardBrowserEnv:DN,hasStandardBrowserWebWorkerEnv:LN,navigator:Qm,origin:BN},Symbol.toStringTag,{value:"Module"})),rn={...UN,...zN};function FN(e,t){return fc(e,new rn.classes.URLSearchParams,Object.assign({visitor:function(r,i,s,o){return rn.isNode&&re.isBuffer(r)?(this.append(i,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function VN(e){return re.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function PN(e){const t={},r=Object.keys(e);let i;const s=r.length;let o;for(i=0;i<s;i++)o=r[i],t[o]=e[o];return t}function u1(e){function t(r,i,s,o){let c=r[o++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),p=o>=r.length;return c=!c&&re.isArray(s)?s.length:c,p?(re.hasOwnProp(s,c)?s[c]=[s[c],i]:s[c]=i,!d):((!s[c]||!re.isObject(s[c]))&&(s[c]=[]),t(r,i,s[c],o)&&re.isArray(s[c])&&(s[c]=PN(s[c])),!d)}if(re.isFormData(e)&&re.isFunction(e.entries)){const r={};return re.forEachEntry(e,(i,s)=>{t(VN(i),s,r,0)}),r}return null}function HN(e,t,r){if(re.isString(e))try{return(t||JSON.parse)(e),re.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(e)}const Js={transitional:o1,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const i=r.getContentType()||"",s=i.indexOf("application/json")>-1,o=re.isObject(t);if(o&&re.isHTMLForm(t)&&(t=new FormData(t)),re.isFormData(t))return s?JSON.stringify(u1(t)):t;if(re.isArrayBuffer(t)||re.isBuffer(t)||re.isStream(t)||re.isFile(t)||re.isBlob(t)||re.isReadableStream(t))return t;if(re.isArrayBufferView(t))return t.buffer;if(re.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let d;if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return FN(t,this.formSerializer).toString();if((d=re.isFileList(t))||i.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return fc(d?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),HN(t)):t}],transformResponse:[function(t){const r=this.transitional||Js.transitional,i=r&&r.forcedJSONParsing,s=this.responseType==="json";if(re.isResponse(t)||re.isReadableStream(t))return t;if(t&&re.isString(t)&&(i&&!this.responseType||s)){const c=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(d){if(c)throw d.name==="SyntaxError"?He.from(d,He.ERR_BAD_RESPONSE,this,null,this.response):d}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rn.classes.FormData,Blob:rn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};re.forEach(["delete","get","head","post","put","patch"],e=>{Js.headers[e]={}});const qN=re.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),IN=e=>{const t={};let r,i,s;return e&&e.split(`
`).forEach(function(c){s=c.indexOf(":"),r=c.substring(0,s).trim().toLowerCase(),i=c.substring(s+1).trim(),!(!r||t[r]&&qN[r])&&(r==="set-cookie"?t[r]?t[r].push(i):t[r]=[i]:t[r]=t[r]?t[r]+", "+i:i)}),t},Gb=Symbol("internals");function bs(e){return e&&String(e).trim().toLowerCase()}function ju(e){return e===!1||e==null?e:re.isArray(e)?e.map(ju):String(e)}function $N(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=r.exec(e);)t[i[1]]=i[2];return t}const YN=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function lm(e,t,r,i,s){if(re.isFunction(i))return i.call(this,t,r);if(s&&(t=r),!!re.isString(t)){if(re.isString(i))return t.indexOf(i)!==-1;if(re.isRegExp(i))return i.test(t)}}function ZN(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,i)=>r.toUpperCase()+i)}function GN(e,t){const r=re.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+r,{value:function(s,o,c){return this[i].call(this,t,s,o,c)},configurable:!0})})}let kn=class{constructor(t){t&&this.set(t)}set(t,r,i){const s=this;function o(d,p,h){const y=bs(p);if(!y)throw new Error("header name must be a non-empty string");const b=re.findKey(s,y);(!b||s[b]===void 0||h===!0||h===void 0&&s[b]!==!1)&&(s[b||p]=ju(d))}const c=(d,p)=>re.forEach(d,(h,y)=>o(h,y,p));if(re.isPlainObject(t)||t instanceof this.constructor)c(t,r);else if(re.isString(t)&&(t=t.trim())&&!YN(t))c(IN(t),r);else if(re.isObject(t)&&re.isIterable(t)){let d={},p,h;for(const y of t){if(!re.isArray(y))throw TypeError("Object iterator must return a key-value pair");d[h=y[0]]=(p=d[h])?re.isArray(p)?[...p,y[1]]:[p,y[1]]:y[1]}c(d,r)}else t!=null&&o(r,t,i);return this}get(t,r){if(t=bs(t),t){const i=re.findKey(this,t);if(i){const s=this[i];if(!r)return s;if(r===!0)return $N(s);if(re.isFunction(r))return r.call(this,s,i);if(re.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=bs(t),t){const i=re.findKey(this,t);return!!(i&&this[i]!==void 0&&(!r||lm(this,this[i],i,r)))}return!1}delete(t,r){const i=this;let s=!1;function o(c){if(c=bs(c),c){const d=re.findKey(i,c);d&&(!r||lm(i,i[d],d,r))&&(delete i[d],s=!0)}}return re.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let i=r.length,s=!1;for(;i--;){const o=r[i];(!t||lm(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,i={};return re.forEach(this,(s,o)=>{const c=re.findKey(i,o);if(c){r[c]=ju(s),delete r[o];return}const d=t?ZN(o):String(o).trim();d!==o&&delete r[o],r[d]=ju(s),i[d]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return re.forEach(this,(i,s)=>{i!=null&&i!==!1&&(r[s]=t&&re.isArray(i)?i.join(", "):i)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const i=new this(t);return r.forEach(s=>i.set(s)),i}static accessor(t){const i=(this[Gb]=this[Gb]={accessors:{}}).accessors,s=this.prototype;function o(c){const d=bs(c);i[d]||(GN(s,c),i[d]=!0)}return re.isArray(t)?t.forEach(o):o(t),this}};kn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);re.reduceDescriptors(kn.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[r]=i}}});re.freezeMethods(kn);function sm(e,t){const r=this||Js,i=t||r,s=kn.from(i.headers);let o=i.data;return re.forEach(e,function(d){o=d.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function c1(e){return!!(e&&e.__CANCEL__)}function hl(e,t,r){He.call(this,e??"canceled",He.ERR_CANCELED,t,r),this.name="CanceledError"}re.inherits(hl,He,{__CANCEL__:!0});function d1(e,t,r){const i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):t(new He("Request failed with status code "+r.status,[He.ERR_BAD_REQUEST,He.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function JN(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function XN(e,t){e=e||10;const r=new Array(e),i=new Array(e);let s=0,o=0,c;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),y=i[o];c||(c=h),r[s]=p,i[s]=h;let b=o,v=0;for(;b!==s;)v+=r[b++],b=b%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-c<t)return;const _=y&&h-y;return _?Math.round(v*1e3/_):void 0}}function QN(e,t){let r=0,i=1e3/t,s,o;const c=(h,y=Date.now())=>{r=y,s=null,o&&(clearTimeout(o),o=null),e.apply(null,h)};return[(...h)=>{const y=Date.now(),b=y-r;b>=i?c(h,y):(s=h,o||(o=setTimeout(()=>{o=null,c(s)},i-b)))},()=>s&&c(s)]}const Zu=(e,t,r=3)=>{let i=0;const s=XN(50,250);return QN(o=>{const c=o.loaded,d=o.lengthComputable?o.total:void 0,p=c-i,h=s(p),y=c<=d;i=c;const b={loaded:c,total:d,progress:d?c/d:void 0,bytes:p,rate:h||void 0,estimated:h&&d&&y?(d-c)/h:void 0,event:o,lengthComputable:d!=null,[t?"download":"upload"]:!0};e(b)},r)},Jb=(e,t)=>{const r=e!=null;return[i=>t[0]({lengthComputable:r,total:e,loaded:i}),t[1]]},Xb=e=>(...t)=>re.asap(()=>e(...t)),KN=rn.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,rn.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(rn.origin),rn.navigator&&/(msie|trident)/i.test(rn.navigator.userAgent)):()=>!0,WN=rn.hasStandardBrowserEnv?{write(e,t,r,i,s,o){const c=[e+"="+encodeURIComponent(t)];re.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),re.isString(i)&&c.push("path="+i),re.isString(s)&&c.push("domain="+s),o===!0&&c.push("secure"),document.cookie=c.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function eE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function tE(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function f1(e,t,r){let i=!eE(t);return e&&(i||r==!1)?tE(e,t):t}const Qb=e=>e instanceof kn?{...e}:e;function si(e,t){t=t||{};const r={};function i(h,y,b,v){return re.isPlainObject(h)&&re.isPlainObject(y)?re.merge.call({caseless:v},h,y):re.isPlainObject(y)?re.merge({},y):re.isArray(y)?y.slice():y}function s(h,y,b,v){if(re.isUndefined(y)){if(!re.isUndefined(h))return i(void 0,h,b,v)}else return i(h,y,b,v)}function o(h,y){if(!re.isUndefined(y))return i(void 0,y)}function c(h,y){if(re.isUndefined(y)){if(!re.isUndefined(h))return i(void 0,h)}else return i(void 0,y)}function d(h,y,b){if(b in t)return i(h,y);if(b in e)return i(void 0,h)}const p={url:o,method:o,data:o,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:d,headers:(h,y,b)=>s(Qb(h),Qb(y),b,!0)};return re.forEach(Object.keys(Object.assign({},e,t)),function(y){const b=p[y]||s,v=b(e[y],t[y],y);re.isUndefined(v)&&b!==d||(r[y]=v)}),r}const m1=e=>{const t=si({},e);let{data:r,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:o,headers:c,auth:d}=t;t.headers=c=kn.from(c),t.url=s1(f1(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),d&&c.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let p;if(re.isFormData(r)){if(rn.hasStandardBrowserEnv||rn.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((p=c.getContentType())!==!1){const[h,...y]=p?p.split(";").map(b=>b.trim()).filter(Boolean):[];c.setContentType([h||"multipart/form-data",...y].join("; "))}}if(rn.hasStandardBrowserEnv&&(i&&re.isFunction(i)&&(i=i(t)),i||i!==!1&&KN(t.url))){const h=s&&o&&WN.read(o);h&&c.set(s,h)}return t},nE=typeof XMLHttpRequest<"u",rE=nE&&function(e){return new Promise(function(r,i){const s=m1(e);let o=s.data;const c=kn.from(s.headers).normalize();let{responseType:d,onUploadProgress:p,onDownloadProgress:h}=s,y,b,v,_,k;function A(){_&&_(),k&&k(),s.cancelToken&&s.cancelToken.unsubscribe(y),s.signal&&s.signal.removeEventListener("abort",y)}let C=new XMLHttpRequest;C.open(s.method.toUpperCase(),s.url,!0),C.timeout=s.timeout;function E(){if(!C)return;const R=kn.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),D={data:!d||d==="text"||d==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:R,config:e,request:C};d1(function(P){r(P),A()},function(P){i(P),A()},D),C=null}"onloadend"in C?C.onloadend=E:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(E)},C.onabort=function(){C&&(i(new He("Request aborted",He.ECONNABORTED,e,C)),C=null)},C.onerror=function(){i(new He("Network Error",He.ERR_NETWORK,e,C)),C=null},C.ontimeout=function(){let Z=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const D=s.transitional||o1;s.timeoutErrorMessage&&(Z=s.timeoutErrorMessage),i(new He(Z,D.clarifyTimeoutError?He.ETIMEDOUT:He.ECONNABORTED,e,C)),C=null},o===void 0&&c.setContentType(null),"setRequestHeader"in C&&re.forEach(c.toJSON(),function(Z,D){C.setRequestHeader(D,Z)}),re.isUndefined(s.withCredentials)||(C.withCredentials=!!s.withCredentials),d&&d!=="json"&&(C.responseType=s.responseType),h&&([v,k]=Zu(h,!0),C.addEventListener("progress",v)),p&&C.upload&&([b,_]=Zu(p),C.upload.addEventListener("progress",b),C.upload.addEventListener("loadend",_)),(s.cancelToken||s.signal)&&(y=R=>{C&&(i(!R||R.type?new hl(null,e,C):R),C.abort(),C=null)},s.cancelToken&&s.cancelToken.subscribe(y),s.signal&&(s.signal.aborted?y():s.signal.addEventListener("abort",y)));const T=JN(s.url);if(T&&rn.protocols.indexOf(T)===-1){i(new He("Unsupported protocol "+T+":",He.ERR_BAD_REQUEST,e));return}C.send(o||null)})},aE=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let i=new AbortController,s;const o=function(h){if(!s){s=!0,d();const y=h instanceof Error?h:this.reason;i.abort(y instanceof He?y:new hl(y instanceof Error?y.message:y))}};let c=t&&setTimeout(()=>{c=null,o(new He(`timeout ${t} of ms exceeded`,He.ETIMEDOUT))},t);const d=()=>{e&&(c&&clearTimeout(c),c=null,e.forEach(h=>{h.unsubscribe?h.unsubscribe(o):h.removeEventListener("abort",o)}),e=null)};e.forEach(h=>h.addEventListener("abort",o));const{signal:p}=i;return p.unsubscribe=()=>re.asap(d),p}},iE=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let i=0,s;for(;i<r;)s=i+t,yield e.slice(i,s),i=s},lE=async function*(e,t){for await(const r of sE(e))yield*iE(r,t)},sE=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:i}=await t.read();if(r)break;yield i}}finally{await t.cancel()}},Kb=(e,t,r,i)=>{const s=lE(e,t);let o=0,c,d=p=>{c||(c=!0,i&&i(p))};return new ReadableStream({async pull(p){try{const{done:h,value:y}=await s.next();if(h){d(),p.close();return}let b=y.byteLength;if(r){let v=o+=b;r(v)}p.enqueue(new Uint8Array(y))}catch(h){throw d(h),h}},cancel(p){return d(p),s.return()}},{highWaterMark:2})},mc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",h1=mc&&typeof ReadableStream=="function",oE=mc&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),p1=(e,...t)=>{try{return!!e(...t)}catch{return!1}},uE=h1&&p1(()=>{let e=!1;const t=new Request(rn.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Wb=64*1024,Km=h1&&p1(()=>re.isReadableStream(new Response("").body)),Gu={stream:Km&&(e=>e.body)};mc&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Gu[t]&&(Gu[t]=re.isFunction(e[t])?r=>r[t]():(r,i)=>{throw new He(`Response type '${t}' is not supported`,He.ERR_NOT_SUPPORT,i)})})})(new Response);const cE=async e=>{if(e==null)return 0;if(re.isBlob(e))return e.size;if(re.isSpecCompliantForm(e))return(await new Request(rn.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(re.isArrayBufferView(e)||re.isArrayBuffer(e))return e.byteLength;if(re.isURLSearchParams(e)&&(e=e+""),re.isString(e))return(await oE(e)).byteLength},dE=async(e,t)=>{const r=re.toFiniteNumber(e.getContentLength());return r??cE(t)},fE=mc&&(async e=>{let{url:t,method:r,data:i,signal:s,cancelToken:o,timeout:c,onDownloadProgress:d,onUploadProgress:p,responseType:h,headers:y,withCredentials:b="same-origin",fetchOptions:v}=m1(e);h=h?(h+"").toLowerCase():"text";let _=aE([s,o&&o.toAbortSignal()],c),k;const A=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let C;try{if(p&&uE&&r!=="get"&&r!=="head"&&(C=await dE(y,i))!==0){let D=new Request(t,{method:"POST",body:i,duplex:"half"}),M;if(re.isFormData(i)&&(M=D.headers.get("content-type"))&&y.setContentType(M),D.body){const[P,ae]=Jb(C,Zu(Xb(p)));i=Kb(D.body,Wb,P,ae)}}re.isString(b)||(b=b?"include":"omit");const E="credentials"in Request.prototype;k=new Request(t,{...v,signal:_,method:r.toUpperCase(),headers:y.normalize().toJSON(),body:i,duplex:"half",credentials:E?b:void 0});let T=await fetch(k);const R=Km&&(h==="stream"||h==="response");if(Km&&(d||R&&A)){const D={};["status","statusText","headers"].forEach(K=>{D[K]=T[K]});const M=re.toFiniteNumber(T.headers.get("content-length")),[P,ae]=d&&Jb(M,Zu(Xb(d),!0))||[];T=new Response(Kb(T.body,Wb,P,()=>{ae&&ae(),A&&A()}),D)}h=h||"text";let Z=await Gu[re.findKey(Gu,h)||"text"](T,e);return!R&&A&&A(),await new Promise((D,M)=>{d1(D,M,{data:Z,headers:kn.from(T.headers),status:T.status,statusText:T.statusText,config:e,request:k})})}catch(E){throw A&&A(),E&&E.name==="TypeError"&&/Load failed|fetch/i.test(E.message)?Object.assign(new He("Network Error",He.ERR_NETWORK,e,k),{cause:E.cause||E}):He.from(E,E&&E.code,e,k)}}),Wm={http:EN,xhr:rE,fetch:fE};re.forEach(Wm,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ex=e=>`- ${e}`,mE=e=>re.isFunction(e)||e===null||e===!1,g1={getAdapter:e=>{e=re.isArray(e)?e:[e];const{length:t}=e;let r,i;const s={};for(let o=0;o<t;o++){r=e[o];let c;if(i=r,!mE(r)&&(i=Wm[(c=String(r)).toLowerCase()],i===void 0))throw new He(`Unknown adapter '${c}'`);if(i)break;s[c||"#"+o]=i}if(!i){const o=Object.entries(s).map(([d,p])=>`adapter ${d} `+(p===!1?"is not supported by the environment":"is not available in the build"));let c=t?o.length>1?`since :
`+o.map(ex).join(`
`):" "+ex(o[0]):"as no adapter specified";throw new He("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return i},adapters:Wm};function om(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new hl(null,e)}function tx(e){return om(e),e.headers=kn.from(e.headers),e.data=sm.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),g1.getAdapter(e.adapter||Js.adapter)(e).then(function(i){return om(e),i.data=sm.call(e,e.transformResponse,i),i.headers=kn.from(i.headers),i},function(i){return c1(i)||(om(e),i&&i.response&&(i.response.data=sm.call(e,e.transformResponse,i.response),i.response.headers=kn.from(i.response.headers))),Promise.reject(i)})}const y1="1.9.0",hc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{hc[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const nx={};hc.transitional=function(t,r,i){function s(o,c){return"[Axios v"+y1+"] Transitional option '"+o+"'"+c+(i?". "+i:"")}return(o,c,d)=>{if(t===!1)throw new He(s(c," has been removed"+(r?" in "+r:"")),He.ERR_DEPRECATED);return r&&!nx[c]&&(nx[c]=!0,console.warn(s(c," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,c,d):!0}};hc.spelling=function(t){return(r,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function hE(e,t,r){if(typeof e!="object")throw new He("options must be an object",He.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let s=i.length;for(;s-- >0;){const o=i[s],c=t[o];if(c){const d=e[o],p=d===void 0||c(d,o,e);if(p!==!0)throw new He("option "+o+" must be "+p,He.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new He("Unknown option "+o,He.ERR_BAD_OPTION)}}const Nu={assertOptions:hE,validators:hc},gr=Nu.validators;let ni=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Zb,response:new Zb}}async request(t,r){try{return await this._request(t,r)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?o&&!String(i.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+o):i.stack=o}catch{}}throw i}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=si(this.defaults,r);const{transitional:i,paramsSerializer:s,headers:o}=r;i!==void 0&&Nu.assertOptions(i,{silentJSONParsing:gr.transitional(gr.boolean),forcedJSONParsing:gr.transitional(gr.boolean),clarifyTimeoutError:gr.transitional(gr.boolean)},!1),s!=null&&(re.isFunction(s)?r.paramsSerializer={serialize:s}:Nu.assertOptions(s,{encode:gr.function,serialize:gr.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Nu.assertOptions(r,{baseUrl:gr.spelling("baseURL"),withXsrfToken:gr.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let c=o&&re.merge(o.common,o[r.method]);o&&re.forEach(["delete","get","head","post","put","patch","common"],k=>{delete o[k]}),r.headers=kn.concat(c,o);const d=[];let p=!0;this.interceptors.request.forEach(function(A){typeof A.runWhen=="function"&&A.runWhen(r)===!1||(p=p&&A.synchronous,d.unshift(A.fulfilled,A.rejected))});const h=[];this.interceptors.response.forEach(function(A){h.push(A.fulfilled,A.rejected)});let y,b=0,v;if(!p){const k=[tx.bind(this),void 0];for(k.unshift.apply(k,d),k.push.apply(k,h),v=k.length,y=Promise.resolve(r);b<v;)y=y.then(k[b++],k[b++]);return y}v=d.length;let _=r;for(b=0;b<v;){const k=d[b++],A=d[b++];try{_=k(_)}catch(C){A.call(this,C);break}}try{y=tx.call(this,_)}catch(k){return Promise.reject(k)}for(b=0,v=h.length;b<v;)y=y.then(h[b++],h[b++]);return y}getUri(t){t=si(this.defaults,t);const r=f1(t.baseURL,t.url,t.allowAbsoluteUrls);return s1(r,t.params,t.paramsSerializer)}};re.forEach(["delete","get","head","options"],function(t){ni.prototype[t]=function(r,i){return this.request(si(i||{},{method:t,url:r,data:(i||{}).data}))}});re.forEach(["post","put","patch"],function(t){function r(i){return function(o,c,d){return this.request(si(d||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:c}))}}ni.prototype[t]=r(),ni.prototype[t+"Form"]=r(!0)});let pE=class b1{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const i=this;this.promise.then(s=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](s);i._listeners=null}),this.promise.then=s=>{let o;const c=new Promise(d=>{i.subscribe(d),o=d}).then(s);return c.cancel=function(){i.unsubscribe(o)},c},t(function(o,c,d){i.reason||(i.reason=new hl(o,c,d),r(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=i=>{t.abort(i)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new b1(function(s){t=s}),cancel:t}}};function gE(e){return function(r){return e.apply(null,r)}}function yE(e){return re.isObject(e)&&e.isAxiosError===!0}const eh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eh).forEach(([e,t])=>{eh[t]=e});function x1(e){const t=new ni(e),r=Jv(ni.prototype.request,t);return re.extend(r,ni.prototype,t,{allOwnKeys:!0}),re.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return x1(si(e,s))},r}const Ct=x1(Js);Ct.Axios=ni;Ct.CanceledError=hl;Ct.CancelToken=pE;Ct.isCancel=c1;Ct.VERSION=y1;Ct.toFormData=fc;Ct.AxiosError=He;Ct.Cancel=Ct.CanceledError;Ct.all=function(t){return Promise.all(t)};Ct.spread=gE;Ct.isAxiosError=yE;Ct.mergeConfig=si;Ct.AxiosHeaders=kn;Ct.formToJSON=e=>u1(re.isHTMLForm(e)?new FormData(e):e);Ct.getAdapter=g1.getAdapter;Ct.HttpStatusCode=eh;Ct.default=Ct;const{Axios:AO,AxiosError:TO,CanceledError:MO,isCancel:RO,CancelToken:OO,VERSION:zO,all:DO,Cancel:LO,isAxiosError:BO,spread:UO,toFormData:FO,AxiosHeaders:VO,HttpStatusCode:PO,formToJSON:HO,getAdapter:qO,mergeConfig:IO}=Ct,kt=Ct.create({baseURL:"/api",withCredentials:!0,headers:{"Content-Type":"application/json"}}),Eu=sc("auth/register",async(e,{rejectWithValue:t})=>{try{return(await kt.post("/user/register",e)).data.user}catch(r){return t(r)}}),Cu=sc("auth/login",async(e,{rejectWithValue:t})=>{var r;try{return(await kt.post("/user/login",e)).data.user}catch(i){return t((r=i==null?void 0:i.response)==null?void 0:r.data)}}),Au=sc("auth/check",async(e,{rejectWithValue:t})=>{var r;try{const{data:i}=await kt.get("/user/check");return i.user}catch(i){return((r=i.response)==null?void 0:r.status)===401?t(null):t(i)}}),Sa=sc("auth/logout",async(e,{rejectWithValue:t})=>{try{return await kt.post("/user/logout"),null}catch(r){return t(r)}}),bE=L5({name:"auth",initialState:{user:null,isAuthenticated:!1,loading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(Eu.pending,t=>{t.loading=!0,t.error=null}).addCase(Eu.fulfilled,(t,r)=>{t.loading=!1,t.isAuthenticated=!!r.payload,t.user=r.payload}).addCase(Eu.rejected,(t,r)=>{var i;t.loading=!1,t.error=((i=r.payload)==null?void 0:i.message)||"Something went wrong",t.isAuthenticated=!1,t.user=null}).addCase(Cu.pending,t=>{t.loading=!0,t.error=null}).addCase(Cu.fulfilled,(t,r)=>{t.loading=!1,t.isAuthenticated=!!r.payload,t.user=r.payload}).addCase(Cu.rejected,(t,r)=>{var i;t.loading=!1,t.error=((i=r.payload)==null?void 0:i.message)||"Something went wrong",t.isAuthenticated=!1,t.user=null}).addCase(Au.pending,t=>{t.loading=!0,t.error=null}).addCase(Au.fulfilled,(t,r)=>{t.loading=!1,t.isAuthenticated=!!r.payload,t.user=r.payload}).addCase(Au.rejected,(t,r)=>{var i;t.loading=!1,t.error=((i=r.payload)==null?void 0:i.message)||"Something went wrong",t.isAuthenticated=!1,t.user=null}).addCase(Sa.pending,t=>{t.loading=!0,t.error=null}).addCase(Sa.fulfilled,t=>{t.loading=!1,t.user=null,t.isAuthenticated=!1,t.error=null}).addCase(Sa.rejected,(t,r)=>{var i;t.loading=!1,t.error=((i=r.payload)==null?void 0:i.message)||"Something went wrong",t.isAuthenticated=!1,t.user=null})}}),xE=bE.reducer,vE=cn({emailId:ft().email("Invalid Email"),password:ft().min(8,"Password is too weak")}),_E=cn({emailId:ft().email("Invalid Email")}),wE=cn({otp:ft().min(4,"Enter a valid OTP")}),kE=cn({newPassword:ft().min(8,"Password is too weak"),confirmPassword:ft().min(8,"Password is too weak")}).refine(e=>e.newPassword===e.confirmPassword,{message:"Passwords do not match",path:["confirmPassword"]}),rx=["email","otp","reset"],um="> auth --login --platform=algo";function SE(){const[e,t]=O.useState(!1),[r,i]=O.useState(""),s=Ta(),o=ui(),{isAuthenticated:c,loading:d,error:p}=Ma(ke=>ke.auth),{register:h,handleSubmit:y,formState:{errors:b}}=vr({resolver:ei(vE)}),[v,_]=O.useState(null),[k,A]=O.useState(""),[C,E]=O.useState(""),[T,R]=O.useState(!1),[Z,D]=O.useState(""),[M,P]=O.useState(""),[ae,K]=O.useState(!1),[z,le]=O.useState(!1),{register:q,handleSubmit:se,reset:de,formState:{errors:Y}}=vr({resolver:ei(_E)}),{register:U,handleSubmit:F,reset:te,formState:{errors:ve}}=vr({resolver:ei(wE)}),{register:x,handleSubmit:j,reset:$,formState:{errors:S}}=vr({resolver:ei(kE)});O.useEffect(()=>{c&&o("/")},[c,o]),O.useEffect(()=>{var Ce;if((Ce=window.matchMedia)==null?void 0:Ce.call(window,"(prefers-reduced-motion: reduce)").matches){i(um);return}let Me=0;const Ue=setInterval(()=>{Me++,i(um.slice(0,Me)),Me>=um.length&&clearInterval(Ue)},28);return()=>clearInterval(Ue)},[]);const X=ke=>{s(Cu(ke))},ue=async ke=>{var Me,Ue;D(""),R(!0);try{await kt.post("/user/sendOtp",{emailId:ke.emailId}),A(ke.emailId),_("otp")}catch(Ce){D(((Ue=(Me=Ce==null?void 0:Ce.response)==null?void 0:Me.data)==null?void 0:Ue.message)||"Failed to send OTP. Try again.")}finally{R(!1)}},ne=async ke=>{var Me,Ue;D(""),R(!0);try{await kt.post("/user/verifyOtp",{emailId:k,otp:ke.otp}),E(ke.otp),_("reset")}catch(Ce){D(((Ue=(Me=Ce==null?void 0:Ce.response)==null?void 0:Me.data)==null?void 0:Ue.msg)||"Invalid or expired OTP.")}finally{R(!1)}},pe=async ke=>{var Me,Ue;D(""),R(!0);try{await kt.post("/user/changePassword",{emailId:k,otp:C,newPassword:ke.newPassword}),P("Password reset successful. You can log in now."),setTimeout(()=>{Ae()},1500)}catch(Ce){D(((Ue=(Me=Ce==null?void 0:Ce.response)==null?void 0:Me.data)==null?void 0:Ue.msg)||"Failed to reset password.")}finally{R(!1)}},ge=()=>{D(""),v==="otp"?_("email"):v==="reset"&&_("otp")},Ae=()=>{_(null),A(""),E(""),D(""),P(""),K(!1),le(!1),de(),te(),$()},De=v?rx.indexOf(v):-1;return f.jsxs("div",{className:"algo-auth",children:[f.jsx("style",{children:`
        .algo-auth {
          --void: #0a0e14;
          --surface: #121826;
          --surface-2: #1a2233;
          --border: #232d40;
          --border-focus: #ffb86b;
          --text-primary: #e8edf4;
          --text-muted: #7a8699;
          --accent: #ffb86b;
          --accent-dim: #ffb86b33;
          --secondary: #6c8eef;
          --danger: #ff6b6b;
          --danger-dim: #ff6b6b22;
          --green: #5ce6a6;
          --green-dim: #5ce6a622;

          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 80% 15%, #101828 0%, var(--void) 55%);
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          position: relative;
          overflow: hidden;
          padding: 2rem 1rem;
        }

        .algo-auth__glyphs {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .algo-auth__glyph {
          position: absolute;
          color: var(--border);
          font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          font-size: 1.4rem;
          opacity: 0.35;
          animation: algo-drift linear infinite;
          user-select: none;
        }

        @keyframes algo-drift {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(-40px) rotate(-6deg); }
        }

        @keyframes algo-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes algo-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes algo-blink {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes algo-pulse-ring {
          0% { box-shadow: 0 0 0 0 var(--accent-dim); }
          70% { box-shadow: 0 0 0 10px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }

        @keyframes algo-backdrop-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes algo-modal-in {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-auth__glyph { animation: none; }
          .algo-auth__card, .algo-modal__backdrop, .algo-modal__box, .algo-modal__step {
            animation: none !important;
          }
          .algo-auth__cursor { animation: none; }
        }

        .algo-auth__card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 26rem;
          background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 2.25rem 2rem 1.75rem;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02) inset;
          backdrop-filter: blur(6px);
          animation: algo-fade-up 0.6s ease-out both;
        }

        .algo-auth__eyebrow {
          font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          font-size: 0.8rem;
          color: var(--accent);
          letter-spacing: 0.02em;
          margin-bottom: 0.9rem;
          min-height: 1.2em;
          white-space: pre;
        }

        .algo-auth__cursor {
          display: inline-block;
          width: 0.55em;
          background: var(--accent);
          margin-left: 1px;
          animation: algo-blink 1s step-start infinite;
        }

        .algo-auth__title {
          font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin: 0 0 0.35rem;
        }

        .algo-auth__title span {
          color: var(--accent);
        }

        .algo-auth__subtitle {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin: 0 0 1.75rem;
        }

        .algo-field {
          margin-top: 1.1rem;
        }

        .algo-field label {
          display: block;
          font-size: 0.75rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
          letter-spacing: 0.03em;
        }

        .algo-field__input-wrap {
          position: relative;
        }

        .algo-field input {
          width: 100%;
          background: #0d1320;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.95rem;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }

        .algo-field input::placeholder {
          color: #4a5568;
        }

        .algo-field input:focus {
          border-color: var(--border-focus);
          background: #0f1523;
          box-shadow: 0 0 0 3px var(--accent-dim);
        }

        .algo-field input.algo-field--error {
          border-color: var(--danger);
        }

        .algo-field input.algo-field--error:focus {
          box-shadow: 0 0 0 3px rgba(255,107,107,0.2);
        }

        .algo-field__error {
          display: block;
          font-size: 0.78rem;
          color: var(--danger);
          margin-top: 0.35rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-field__toggle {
          position: absolute;
          top: 50%;
          right: 0.7rem;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          padding: 0.15rem;
          transition: color 0.15s ease;
        }

        .algo-field__toggle:hover {
          color: var(--text-primary);
        }

        .algo-forgot {
          text-align: right;
          margin-top: 0.5rem;
        }

        .algo-forgot button {
          background: none;
          border: none;
          font-size: 0.8rem;
          color: var(--text-muted);
          cursor: pointer;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          transition: color 0.15s ease;
        }

        .algo-forgot button:hover {
          color: var(--accent);
        }

        .algo-submit {
          width: 100%;
          margin-top: 1.6rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: none;
          background: var(--accent);
          color: #1a1206;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: transform 0.12s ease, box-shadow 0.2s ease, filter 0.15s ease;
          animation: algo-pulse-ring 2.4s ease-out infinite;
        }

        .algo-submit:hover:not(:disabled) {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }

        .algo-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .algo-submit:disabled {
          opacity: 0.75;
          cursor: not-allowed;
          animation: none;
        }

        .algo-submit--ghost {
          background: var(--secondary);
          color: #0c1526;
          animation: none;
        }

        .algo-submit__dots span {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: currentColor;
          margin-left: 3px;
          animation: algo-blink 1.1s ease-in-out infinite;
        }
        .algo-submit__dots span:nth-child(2) { animation-delay: 0.15s; }
        .algo-submit__dots span:nth-child(3) { animation-delay: 0.3s; }

        .algo-auth__footer {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .algo-auth__footer a {
          color: var(--secondary);
          text-decoration: none;
          font-weight: 600;
        }

        .algo-auth__footer a:hover {
          text-decoration: underline;
        }

        .algo-auth__error-banner {
          margin-top: 0.6rem;
          font-size: 0.8rem;
          color: var(--danger);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        /* ---- Modal ---- */
        .algo-modal__backdrop {
          position: fixed;
          inset: 0;
          background: rgba(6, 9, 15, 0.72);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 1rem;
          animation: algo-backdrop-in 0.2s ease-out both;
        }

        .algo-modal__box {
          position: relative;
          width: 100%;
          max-width: 26rem;
          background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 1.75rem 1.75rem 1.5rem;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.7);
          animation: algo-modal-in 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .algo-modal__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }

        .algo-modal__title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .algo-modal__title {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .algo-modal__icon-btn {
          background: none;
          border: 1px solid var(--border);
          border-radius: 0.4rem;
          color: var(--text-muted);
          width: 1.9rem;
          height: 1.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.9rem;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .algo-modal__icon-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent);
        }

        .algo-modal__steps {
          display: flex;
          gap: 6px;
          margin-bottom: 1.4rem;
        }

        .algo-modal__step-dot {
          flex: 1;
          height: 3px;
          border-radius: 2px;
          background: var(--border);
          transition: background 0.25s ease;
        }

        .algo-modal__step-dot.is-done {
          background: var(--green);
        }

        .algo-modal__step-dot.is-active {
          background: var(--accent);
        }

        .algo-modal__step {
          animation: algo-fade-in 0.25s ease-out both;
        }

        .algo-modal__hint {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0.9rem;
        }

        .algo-modal__hint span {
          color: var(--text-primary);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-alert {
          border-radius: 0.5rem;
          padding: 0.55rem 0.75rem;
          font-size: 0.82rem;
          margin-bottom: 1rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-alert--error {
          background: var(--danger-dim);
          border: 1px solid rgba(255,107,107,0.4);
          color: #ffb3b3;
        }

        .algo-alert--success {
          background: var(--green-dim);
          border: 1px solid rgba(92,230,166,0.4);
          color: #a9f2d2;
        }

        .algo-otp-input {
          letter-spacing: 0.5em;
          text-align: center;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 1.1rem !important;
        }

        .algo-resend {
          text-align: center;
          margin-top: 0.8rem;
        }

        .algo-resend button {
          background: none;
          border: none;
          font-size: 0.75rem;
          color: var(--text-muted);
          cursor: pointer;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-resend button:hover:not(:disabled) {
          color: var(--accent);
        }
      `}),f.jsx("div",{className:"algo-auth__glyphs","aria-hidden":"true",children:[{t:"{ }",top:"10%",left:"85%",size:"1.6rem",dur:"15s",delay:"0s"},{t:"O(1)",top:"75%",left:"90%",size:"1.1rem",dur:"19s",delay:"1.5s"},{t:"[ ]",top:"22%",left:"8%",size:"1.4rem",dur:"17s",delay:"0.8s"},{t:"10",top:"85%",left:"5%",size:"1.2rem",dur:"21s",delay:"2.8s"},{t:"( )",top:"48%",left:"4%",size:"1.3rem",dur:"16s",delay:"0.4s"},{t:"n²",top:"58%",left:"94%",size:"1rem",dur:"18s",delay:"2s"}].map((ke,Me)=>f.jsx("span",{className:"algo-auth__glyph",style:{top:ke.top,left:ke.left,fontSize:ke.size,animationDuration:ke.dur,animationDelay:ke.delay},children:ke.t},Me))}),f.jsxs("div",{className:"algo-auth__card",children:[f.jsxs("div",{className:"algo-auth__eyebrow",children:[r,f.jsx("span",{className:"algo-auth__cursor",children:" "})]}),f.jsxs("h2",{className:"algo-auth__title",children:["Algo",f.jsx("span",{children:"Coding"})," Platform"]}),f.jsx("p",{className:"algo-auth__subtitle",children:"Welcome back. Pick up where you left off."}),f.jsxs("form",{onSubmit:y(X),noValidate:!0,children:[f.jsxs("div",{className:"algo-field",children:[f.jsx("label",{htmlFor:"emailId",children:"email"}),f.jsx("input",{id:"emailId",type:"email",placeholder:"john@example.com",className:b.emailId?"algo-field--error":"",...h("emailId")}),b.emailId&&f.jsxs("span",{className:"algo-field__error",children:[" ",b.emailId.message]})]}),f.jsxs("div",{className:"algo-field",children:[f.jsx("label",{htmlFor:"password",children:"password"}),f.jsxs("div",{className:"algo-field__input-wrap",children:[f.jsx("input",{id:"password",type:e?"text":"password",placeholder:"••••••••",className:b.password?"algo-field--error":"",...h("password")}),f.jsx("button",{type:"button",className:"algo-field__toggle",onClick:()=>t(!e),"aria-label":e?"Hide password":"Show password",children:e?f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}):f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})]}),b.password&&f.jsxs("span",{className:"algo-field__error",children:[" ",b.password.message]}),p&&f.jsxs("span",{className:"algo-auth__error-banner",children:[" ",p]}),f.jsx("div",{className:"algo-forgot",children:f.jsx("button",{type:"button",onClick:()=>_("email"),children:"forgot_password?"})})]}),f.jsx("button",{type:"submit",className:"algo-submit",disabled:d,children:d?f.jsxs(f.Fragment,{children:["verifying",f.jsxs("span",{className:"algo-submit__dots",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]}):"Login"})]}),f.jsxs("div",{className:"algo-auth__footer",children:["Don't have an account?"," ",f.jsx(Vt,{to:"/signup",children:"Sign Up"})]})]}),v&&f.jsx("div",{className:"algo-modal__backdrop",onClick:Ae,children:f.jsxs("div",{className:"algo-modal__box",onClick:ke=>ke.stopPropagation(),children:[f.jsxs("div",{className:"algo-modal__header",children:[f.jsxs("div",{className:"algo-modal__title-row",children:[v!=="email"&&!M&&f.jsx("button",{type:"button",className:"algo-modal__icon-btn",onClick:ge,"aria-label":"Go back",children:"←"}),f.jsx("span",{className:"algo-modal__title",children:"reset_password()"})]}),f.jsx("button",{type:"button",className:"algo-modal__icon-btn",onClick:Ae,"aria-label":"Close",children:"✕"})]}),f.jsx("div",{className:"algo-modal__steps","aria-hidden":"true",children:rx.map((ke,Me)=>f.jsx("div",{className:`algo-modal__step-dot ${Me<De||M?"is-done":Me===De?"is-active":""}`},ke))}),Z&&f.jsx("div",{className:"algo-alert algo-alert--error",children:Z}),M&&f.jsx("div",{className:"algo-alert algo-alert--success",children:M}),v==="email"&&!M&&f.jsxs("div",{className:"algo-modal__step",children:[f.jsx("p",{className:"algo-modal__hint",children:"Step 1/3 — we'll send a one-time code to your inbox."}),f.jsxs("form",{onSubmit:se(ue),noValidate:!0,children:[f.jsxs("div",{className:"algo-field",style:{marginTop:0},children:[f.jsx("input",{type:"text",placeholder:"john@example.com",className:Y.emailId?"algo-field--error":"",...q("emailId")}),Y.emailId&&f.jsxs("span",{className:"algo-field__error",children:[" ",Y.emailId.message]})]}),f.jsx("button",{type:"submit",className:"algo-submit",disabled:T,children:T?f.jsxs(f.Fragment,{children:["sending",f.jsxs("span",{className:"algo-submit__dots",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]}):"send_otp"})]})]},"step-email"),v==="otp"&&!M&&f.jsxs("div",{className:"algo-modal__step",children:[f.jsxs("p",{className:"algo-modal__hint",children:["Step 2/3 — code sent to ",f.jsx("span",{children:k})]}),f.jsxs("form",{onSubmit:F(ne),noValidate:!0,children:[f.jsxs("div",{className:"algo-field",style:{marginTop:0},children:[f.jsx("input",{type:"text",placeholder:"0 0 0 0",className:`algo-otp-input ${ve.otp?"algo-field--error":""}`,...U("otp")}),ve.otp&&f.jsxs("span",{className:"algo-field__error",children:["// ",ve.otp.message]})]}),f.jsx("button",{type:"submit",className:"algo-submit",disabled:T,children:T?f.jsxs(f.Fragment,{children:["verifying",f.jsxs("span",{className:"algo-submit__dots",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]}):"verify_otp"}),f.jsx("div",{className:"algo-resend",children:f.jsx("button",{type:"button",onClick:se(ue),disabled:T,children:"resend_otp()"})})]})]},"step-otp"),v==="reset"&&f.jsxs("div",{className:"algo-modal__step",children:[f.jsx("p",{className:"algo-modal__hint",children:"Step 3/3 — choose a new password."}),f.jsxs("form",{onSubmit:j(pe),noValidate:!0,children:[f.jsxs("div",{className:"algo-field",style:{marginTop:0},children:[f.jsx("label",{htmlFor:"newPassword",children:"new_password"}),f.jsxs("div",{className:"algo-field__input-wrap",children:[f.jsx("input",{id:"newPassword",type:ae?"text":"password",placeholder:"••••••••",className:S.newPassword?"algo-field--error":"",disabled:!!M,...x("newPassword")}),f.jsx("button",{type:"button",className:"algo-field__toggle",onClick:()=>K(!ae),"aria-label":ae?"Hide password":"Show password",children:ae?f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}):f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})]}),S.newPassword&&f.jsxs("span",{className:"algo-field__error",children:[" ",S.newPassword.message]})]}),f.jsxs("div",{className:"algo-field",children:[f.jsx("label",{htmlFor:"confirmPassword",children:"confirm_password"}),f.jsxs("div",{className:"algo-field__input-wrap",children:[f.jsx("input",{id:"confirmPassword",type:z?"text":"password",placeholder:"••••••••",className:S.confirmPassword?"algo-field--error":"",disabled:!!M,...x("confirmPassword")}),f.jsx("button",{type:"button",className:"algo-field__toggle",onClick:()=>le(!z),"aria-label":z?"Hide password":"Show password",children:z?f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}):f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})]}),S.confirmPassword&&f.jsxs("span",{className:"algo-field__error",children:[" ",S.confirmPassword.message]})]}),f.jsx("button",{type:"submit",className:"algo-submit",disabled:T||!!M,children:T?f.jsxs(f.Fragment,{children:["updating",f.jsxs("span",{className:"algo-submit__dots",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]}):"update_password()"})]})]},"step-reset")]})})]})}const jE=cn({firstName:ft().min(3,"Minimum character should be 3"),emailId:ft().email("Invalid Email"),password:ft().min(8,"Password is too weak"),confirmPassword:ft().min(8,"Confirm Password is required")}).refine(e=>e.password===e.confirmPassword,{message:"Passwords do not match",path:["confirmPassword"]});function NE(e=""){if(!e)return{score:0,label:"O(1)",tone:"empty",hint:"Start typing…"};let t=0;return e.length>=8&&t++,e.length>=12&&t++,/[A-Z]/.test(e)&&/[a-z]/.test(e)&&t++,/[0-9]/.test(e)&&t++,/[^A-Za-z0-9]/.test(e)&&t++,t<=1?{score:1,label:"O(n²)",tone:"weak",hint:"Brute force — add length & symbols"}:t===2?{score:2,label:"O(n log n)",tone:"fair",hint:"Getting better — mix in numbers"}:t===3||t===4?{score:3,label:"O(n)",tone:"good",hint:"Solid — one more trick and it is optimal"}:{score:4,label:"O(log n)",tone:"strong",hint:"Optimal solution"}}const cm="> init --new-account --platform=algo";function EE(){const[e,t]=O.useState(!1),[r,i]=O.useState(!1),[s,o]=O.useState(""),c=Ta(),d=ui(),{isAuthenticated:p,loading:h}=Ma(E=>E.auth),{register:y,handleSubmit:b,watch:v,formState:{errors:_}}=vr({resolver:ei(jE)}),k=v("password",""),A=O.useMemo(()=>NE(k),[k]);O.useEffect(()=>{p&&d("/")},[p,d]),O.useEffect(()=>{var Z;if((Z=window.matchMedia)==null?void 0:Z.call(window,"(prefers-reduced-motion: reduce)").matches){o(cm);return}let T=0;const R=setInterval(()=>{T++,o(cm.slice(0,T)),T>=cm.length&&clearInterval(R)},28);return()=>clearInterval(R)},[]);const C=E=>{const{confirmPassword:T,...R}=E;c(Eu(R))};return f.jsxs("div",{className:"algo-signup",children:[f.jsx("style",{children:`
        .algo-signup {
          --void: #0a0e14;
          --surface: #121826;
          --surface-2: #1a2233;
          --border: #232d40;
          --border-focus: #ffb86b;
          --text-primary: #e8edf4;
          --text-muted: #7a8699;
          --accent: #ffb86b;
          --accent-dim: #ffb86b33;
          --secondary: #6c8eef;
          --danger: #ff6b6b;
          --amber: #ffb86b;
          --blue: #6c8eef;
          --green: #5ce6a6;

          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 20% 20%, #101828 0%, var(--void) 55%);
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          position: relative;
          overflow: hidden;
          padding: 2rem 1rem;
        }

        .algo-signup__glyphs {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .algo-signup__glyph {
          position: absolute;
          color: var(--border);
          font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          font-size: 1.4rem;
          opacity: 0.35;
          animation: algo-drift linear infinite;
          user-select: none;
        }

        @keyframes algo-drift {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(-40px) rotate(6deg); }
        }

        @keyframes algo-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes algo-blink {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes algo-pulse-ring {
          0% { box-shadow: 0 0 0 0 var(--accent-dim); }
          70% { box-shadow: 0 0 0 10px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-signup__glyph { animation: none; }
          .algo-signup__card { animation: none !important; }
          .algo-signup__cursor { animation: none; }
        }

        .algo-signup__card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 26rem;
          background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 2.25rem 2rem 1.75rem;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02) inset;
          backdrop-filter: blur(6px);
          animation: algo-fade-up 0.6s ease-out both;
        }

        .algo-signup__eyebrow {
          font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          font-size: 0.8rem;
          color: var(--accent);
          letter-spacing: 0.02em;
          margin-bottom: 0.9rem;
          min-height: 1.2em;
          white-space: pre;
        }

        .algo-signup__cursor {
          display: inline-block;
          width: 0.55em;
          background: var(--accent);
          margin-left: 1px;
          animation: algo-blink 1s step-start infinite;
        }

        .algo-signup__title {
          font-family: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin: 0 0 0.35rem;
        }

        .algo-signup__title span {
          color: var(--accent);
        }

        .algo-signup__subtitle {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin: 0 0 1.75rem;
        }

        .algo-field {
          margin-top: 1.1rem;
        }

        .algo-field label {
          display: block;
          font-size: 0.75rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
          letter-spacing: 0.03em;
        }

        .algo-field__input-wrap {
          position: relative;
        }

        .algo-field input {
          width: 100%;
          background: #0d1320;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.95rem;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }

        .algo-field input::placeholder {
          color: #4a5568;
        }

        .algo-field input:focus {
          border-color: var(--border-focus);
          background: #0f1523;
          box-shadow: 0 0 0 3px var(--accent-dim);
        }

        .algo-field input.algo-field--error {
          border-color: var(--danger);
        }

        .algo-field input.algo-field--error:focus {
          box-shadow: 0 0 0 3px rgba(255,107,107,0.2);
        }

        .algo-field__error {
          display: block;
          font-size: 0.78rem;
          color: var(--danger);
          margin-top: 0.35rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-field__toggle {
          position: absolute;
          top: 50%;
          right: 0.7rem;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          padding: 0.15rem;
          transition: color 0.15s ease;
        }

        .algo-field__toggle:hover {
          color: var(--text-primary);
        }

        .algo-strength {
          margin-top: 0.55rem;
        }

        .algo-strength__track {
          display: flex;
          gap: 4px;
          height: 4px;
          margin-bottom: 0.4rem;
        }

        .algo-strength__seg {
          flex: 1;
          border-radius: 2px;
          background: var(--border);
          transition: background 0.25s ease;
        }

        .algo-strength__seg.is-filled--weak { background: var(--danger); }
        .algo-strength__seg.is-filled--fair { background: var(--amber); }
        .algo-strength__seg.is-filled--good { background: var(--blue); }
        .algo-strength__seg.is-filled--strong { background: var(--green); }

        .algo-strength__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.72rem;
        }

        .algo-strength__label {
          font-weight: 700;
        }
        .algo-strength__label--weak { color: var(--danger); }
        .algo-strength__label--fair { color: var(--amber); }
        .algo-strength__label--good { color: var(--blue); }
        .algo-strength__label--strong { color: var(--green); }
        .algo-strength__label--empty { color: var(--text-muted); }

        .algo-strength__hint {
          color: var(--text-muted);
        }

        .algo-submit {
          width: 100%;
          margin-top: 1.6rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: none;
          background: var(--accent);
          color: #1a1206;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: transform 0.12s ease, box-shadow 0.2s ease, filter 0.15s ease;
          animation: algo-pulse-ring 2.4s ease-out infinite;
        }

        .algo-submit:hover:not(:disabled) {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }

        .algo-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .algo-submit:disabled {
          opacity: 0.75;
          cursor: not-allowed;
          animation: none;
        }

        .algo-submit__dots span {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #1a1206;
          margin-left: 3px;
          animation: algo-blink 1.1s ease-in-out infinite;
        }
        .algo-submit__dots span:nth-child(2) { animation-delay: 0.15s; }
        .algo-submit__dots span:nth-child(3) { animation-delay: 0.3s; }

        .algo-signup__footer {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .algo-signup__footer a {
          color: var(--secondary);
          text-decoration: none;
          font-weight: 600;
        }

        .algo-signup__footer a:hover {
          text-decoration: underline;
        }
      `}),f.jsx("div",{className:"algo-signup__glyphs","aria-hidden":"true",children:[{t:"{ }",top:"8%",left:"10%",size:"1.6rem",dur:"14s",delay:"0s"},{t:"O(n)",top:"70%",left:"6%",size:"1.1rem",dur:"18s",delay:"2s"},{t:"[ ]",top:"20%",left:"85%",size:"1.4rem",dur:"16s",delay:"1s"},{t:"01",top:"82%",left:"88%",size:"1.2rem",dur:"20s",delay:"3s"},{t:"( )",top:"45%",left:"92%",size:"1.3rem",dur:"15s",delay:"0.5s"},{t:"log n",top:"55%",left:"3%",size:"1rem",dur:"19s",delay:"2.5s"}].map((E,T)=>f.jsx("span",{className:"algo-signup__glyph",style:{top:E.top,left:E.left,fontSize:E.size,animationDuration:E.dur,animationDelay:E.delay},children:E.t},T))}),f.jsxs("div",{className:"algo-signup__card",children:[f.jsxs("div",{className:"algo-signup__eyebrow",children:[s,f.jsx("span",{className:"algo-signup__cursor",children:" "})]}),f.jsxs("h2",{className:"algo-signup__title",children:["Algo",f.jsx("span",{children:"Coding"})," Platform"]}),f.jsx("p",{className:"algo-signup__subtitle",children:"Create an account and start solving."}),f.jsxs("form",{onSubmit:b(C),noValidate:!0,children:[f.jsxs("div",{className:"algo-field",children:[f.jsx("label",{htmlFor:"firstName",children:"first_name"}),f.jsx("input",{id:"firstName",type:"text",placeholder:"John",className:_.firstName?"algo-field--error":"",...y("firstName")}),_.firstName&&f.jsxs("span",{className:"algo-field__error",children:[" ",_.firstName.message]})]}),f.jsxs("div",{className:"algo-field",children:[f.jsx("label",{htmlFor:"emailId",children:"email"}),f.jsx("input",{id:"emailId",type:"email",placeholder:"john@example.com",className:_.emailId?"algo-field--error":"",...y("emailId")}),_.emailId&&f.jsxs("span",{className:"algo-field__error",children:[" ",_.emailId.message]})]}),f.jsxs("div",{className:"algo-field",children:[f.jsx("label",{htmlFor:"password",children:"password"}),f.jsxs("div",{className:"algo-field__input-wrap",children:[f.jsx("input",{id:"password",type:e?"text":"password",placeholder:"••••••••",className:_.password?"algo-field--error":"",...y("password")}),f.jsx("button",{type:"button",className:"algo-field__toggle",onClick:()=>t(E=>!E),"aria-label":e?"Hide password":"Show password",children:e?f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}):f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})]}),f.jsxs("div",{className:"algo-strength","aria-live":"polite",children:[f.jsx("div",{className:"algo-strength__track",children:[0,1,2,3].map(E=>f.jsx("div",{className:`algo-strength__seg ${E<A.score?`is-filled--${A.tone}`:""}`},E))}),f.jsxs("div",{className:"algo-strength__row",children:[f.jsx("span",{className:`algo-strength__label algo-strength__label--${A.tone}`,children:A.label}),f.jsx("span",{className:"algo-strength__hint",children:A.hint})]})]}),_.password&&f.jsxs("span",{className:"algo-field__error",children:[" ",_.password.message]})]}),f.jsxs("div",{className:"algo-field",children:[f.jsx("label",{htmlFor:"confirmPassword",children:"confirm_password"}),f.jsxs("div",{className:"algo-field__input-wrap",children:[f.jsx("input",{id:"confirmPassword",type:r?"text":"password",placeholder:"••••••••",className:_.confirmPassword?"algo-field--error":"",...y("confirmPassword")}),f.jsx("button",{type:"button",className:"algo-field__toggle",onClick:()=>i(E=>!E),"aria-label":r?"Hide password":"Show password",children:r?f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})}):f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})]}),_.confirmPassword&&f.jsxs("span",{className:"algo-field__error",children:[" ",_.confirmPassword.message]})]}),f.jsx("button",{type:"submit",className:"algo-submit",disabled:h,children:h?f.jsxs(f.Fragment,{children:["compiling",f.jsxs("span",{className:"algo-submit__dots",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]}):"create_account"})]}),f.jsxs("div",{className:"algo-signup__footer",children:["Already have an account?"," ",f.jsx(Vt,{to:"/login",children:"Login"})]})]})]})}function CE(){const e=Ta(),{user:t}=Ma(q=>q.auth),[r,i]=O.useState([]),[s,o]=O.useState([]),[c,d]=O.useState({difficulty:"all",tag:"all",status:"all"}),[p,h]=O.useState(""),[y,b]=O.useState(!1),[v,_]=O.useState(!1),[k,A]=O.useState(0),C=O.useRef(null);O.useEffect(()=>{const q=async()=>{try{const{data:de}=await kt.get("/problem/getAllProblem");i(Array.isArray(de)?de:[])}catch(de){console.error("Error fetching problems:",de)}},se=async()=>{try{const{data:de}=await kt.get("/problem/problemSolvedByUser");o(Array.isArray(de)?de:[])}catch(de){console.error("Error fetching solved problems:",de)}};q(),t&&se()},[t]),O.useEffect(()=>{const q=()=>{_(!0),A(se=>se+1),window.setTimeout(()=>{_(!1)},3600)};return window.addEventListener("algo:accepted",q),()=>window.removeEventListener("algo:accepted",q)},[]),O.useEffect(()=>{const q=se=>{C.current&&!C.current.contains(se.target)&&b(!1)};return document.addEventListener("mousedown",q),()=>document.removeEventListener("mousedown",q)},[]);const E=()=>{e(Sa()),o([]),b(!1)},T=O.useMemo(()=>{const q=p.trim().toLowerCase();return r.filter(se=>{var ve,x,j,$;const de=c.difficulty==="all"||((ve=se.difficulty)==null?void 0:ve.toLowerCase())===c.difficulty,Y=c.tag==="all"||((x=se.tags)==null?void 0:x.toLowerCase())===c.tag.toLowerCase(),U=s.some(S=>S._id===se._id),F=c.status==="all"||c.status==="solved"&&U||c.status==="unsolved"&&!U,te=!q||((j=se.title)==null?void 0:j.toLowerCase().includes(q))||(($=se.tags)==null?void 0:$.toLowerCase().includes(q));return de&&Y&&F&&te})},[r,s,c,p]),R=s.length,Z=r.length,D=Z>0?Math.round(R/Z*100):0,M=O.useMemo(()=>((t==null?void 0:t.firstName)||"C").charAt(0).toUpperCase(),[t]),P=O.useMemo(()=>`> coding_session::start user="${(t==null?void 0:t.firstName)||"guest"}" status=ready`,[t]),ae=r.filter(q=>{var se;return((se=q.difficulty)==null?void 0:se.toLowerCase())==="easy"}).length,K=r.filter(q=>{var se;return((se=q.difficulty)==null?void 0:se.toLowerCase())==="medium"}).length,z=r.filter(q=>{var se;return((se=q.difficulty)==null?void 0:se.toLowerCase())==="hard"}).length,le=()=>{var q;(q=document.getElementById("problems"))==null||q.scrollIntoView({behavior:"smooth",block:"start"})};return f.jsxs("div",{className:"algo-home",children:[f.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        :root {
          color-scheme: dark;
        }

        .algo-home {
          --void: #070b12;
          --void-2: #0a101a;
          --surface: rgba(15, 22, 35, 0.86);
          --surface-solid: #101827;
          --surface-2: #151f31;
          --surface-3: #1b273b;
          --border: rgba(148, 163, 184, 0.15);
          --border-strong: rgba(148, 163, 184, 0.28);
          --text-primary: #edf4ff;
          --text-secondary: #aab6c8;
          --text-muted: #6e7c91;
          --accent: #ffb86b;
          --accent-2: #ff8f5b;
          --blue: #6c8eef;
          --cyan: #4de1ff;
          --green: #5ce6a6;
          --red: #ff6b7a;
          --purple: #a78bfa;
          --shadow: 0 24px 70px rgba(0, 0, 0, 0.38);

          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow-x: hidden;
          color: var(--text-primary);
          background:
            radial-gradient(circle at 15% 0%, rgba(108,142,239,.12), transparent 30rem),
            radial-gradient(circle at 88% 12%, rgba(255,184,107,.09), transparent 28rem),
            linear-gradient(180deg, var(--void-2), var(--void));
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .algo-home::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(148,163,184,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black, transparent 78%);
          animation: gridMove 30s linear infinite;
        }

        .algo-home::after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background:
            radial-gradient(circle at 20% 25%, rgba(77,225,255,.05), transparent 16rem),
            radial-gradient(circle at 78% 55%, rgba(167,139,250,.045), transparent 20rem);
        }

        @keyframes gridMove {
          from { background-position: 0 0, 0 0; }
          to { background-position: 420px 420px, 420px 420px; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -16px, 0) rotate(2deg); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(20px, -12px, 0); }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: .8; transform: scale(1.08); }
        }

        @keyframes scan {
          from { transform: translateY(-20vh); opacity: 0; }
          15% { opacity: .25; }
          85% { opacity: .25; }
          to { transform: translateY(120vh); opacity: 0; }
        }

        @keyframes blink {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes typing {
          from { width: 0; }
          to { width: var(--typing-width); }
        }

        @keyframes codeLine {
          from { width: 0; opacity: .1; }
          to { width: var(--line-width); opacity: 1; }
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          from { transform: translateX(-120%); }
          to { transform: translateX(220%); }
        }

        @keyframes acceptedPop {
          0% { opacity: 0; transform: translate(-50%, -46%) scale(.82); }
          55% { opacity: 1; transform: translate(-50%, -50%) scale(1.04); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes acceptedOut {
          0%, 72% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -56%) scale(.97); }
        }

        @keyframes checkDraw {
          from { stroke-dashoffset: 60; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes confettiFall {
          0% {
            opacity: 1;
            transform: translate3d(0, -15vh, 0) rotate(0deg) scale(1);
          }
          100% {
            opacity: 0;
            transform:
              translate3d(var(--x), 110vh, 0)
              rotate(var(--r))
              scale(.72);
          }
        }

        @keyframes terminalGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(77,225,255,0); }
          50% { box-shadow: 0 0 45px rgba(77,225,255,.08); }
        }

        @keyframes progressShine {
          from { left: -50%; }
          to { left: 120%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-home *,
          .algo-home::before {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }

        /* NAVBAR */
        .algo-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          min-height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5vw;
          background: rgba(7, 11, 18, .78);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--border);
        }

        .algo-nav__brand {
          color: var(--text-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
          font: 700 1.05rem/1 "JetBrains Mono", ui-monospace, monospace;
          letter-spacing: -.02em;
        }

        .algo-nav__brand span {
          color: var(--accent);
        }

        .algo-nav__cursor {
          animation: blink 1.1s step-end infinite;
        }

        .algo-nav__right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .algo-nav__status {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 11px;
          border: 1px solid rgba(92,230,166,.2);
          background: rgba(92,230,166,.05);
          border-radius: 999px;
          color: var(--green);
          font: 700 .7rem "JetBrains Mono", monospace;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 12px var(--green);
        }

        .algo-user {
          position: relative;
        }

        .algo-user__trigger {
          display: flex;
          align-items: center;
          gap: 9px;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 5px 12px 5px 5px;
          background: var(--surface-2);
          color: var(--text-primary);
          cursor: pointer;
          transition: .2s ease;
        }

        .algo-user__trigger:hover,
        .algo-user__trigger.is-open {
          border-color: rgba(255,184,107,.55);
          box-shadow: 0 0 0 4px rgba(255,184,107,.07);
          transform: translateY(-1px);
        }

        .algo-user__avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #161008;
          font: 800 .8rem "JetBrains Mono", monospace;
          background: conic-gradient(from 180deg, var(--accent), var(--purple), var(--cyan), var(--accent));
        }

        .algo-user__name {
          font-size: .86rem;
          font-weight: 600;
        }

        .algo-user__caret {
          color: var(--text-muted);
          font-size: .55rem;
        }

        .algo-user__menu {
          position: absolute;
          right: 0;
          top: calc(100% + 10px);
          width: 190px;
          padding: 7px;
          border: 1px solid var(--border-strong);
          border-radius: 14px;
          background: rgba(16,24,39,.96);
          box-shadow: var(--shadow);
          animation: fadeUp .18s ease both;
        }

        .algo-user__menu-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 11px;
          border: 0;
          border-radius: 9px;
          background: transparent;
          color: var(--text-secondary);
          text-decoration: none;
          font: 700 .75rem "JetBrains Mono", monospace;
          cursor: pointer;
          text-align: left;
        }

        .algo-user__menu-item:hover {
          background: rgba(255,255,255,.05);
          color: var(--text-primary);
        }

        .algo-user__menu-item--danger { color: var(--red); }
        .algo-user__menu-item--admin { color: var(--blue); }

        .algo-user__divider {
          height: 1px;
          margin: 5px 0;
          background: var(--border);
        }

        /* HERO */
        .algo-hero {
          position: relative;
          z-index: 1;
          overflow: hidden;
          padding: 76px 5vw 65px;
          border-bottom: 1px solid var(--border);
        }

        .algo-hero__scan {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 150px;
          background: linear-gradient(to bottom, transparent, rgba(77,225,255,.07), transparent);
          animation: scan 9s ease-in-out infinite;
          pointer-events: none;
        }

        .algo-hero__glow {
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          top: -220px;
          right: -90px;
          background: radial-gradient(circle, rgba(255,184,107,.12), transparent 68%);
          animation: pulseGlow 8s ease-in-out infinite;
          pointer-events: none;
        }

        .algo-hero__glow--blue {
          width: 360px;
          height: 360px;
          top: 90px;
          left: -180px;
          background: radial-gradient(circle, rgba(108,142,239,.13), transparent 68%);
          animation: floatSlow 13s ease-in-out infinite;
        }

        .algo-hero__inner {
          position: relative;
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, .8fr);
          gap: 58px;
          align-items: center;
        }

        .algo-hero__copy {
          animation: fadeUp .7s ease both;
        }

        .algo-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 18px;
          color: var(--accent);
          font: 700 .75rem "JetBrains Mono", monospace;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .algo-hero__eyebrow::before {
          content: ">";
          color: var(--green);
        }

        .algo-hero__title {
          max-width: 760px;
          margin: 0;
          font: 800 clamp(2.7rem, 6vw, 5.6rem)/.98 "JetBrains Mono", ui-monospace, monospace;
          letter-spacing: -.065em;
        }

        .algo-hero__title .highlight {
          color: transparent;
          background: linear-gradient(100deg, var(--accent), #ffd69d 45%, var(--cyan));
          -webkit-background-clip: text;
          background-clip: text;
        }

        .algo-hero__subtitle {
          max-width: 650px;
          margin: 23px 0 0;
          color: var(--text-secondary);
          font-size: 1.03rem;
          line-height: 1.75;
        }

        .algo-hero__boot {
          display: inline-block;
          margin-top: 22px;
          max-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid var(--green);
          color: var(--green);
          font: 700 .74rem "JetBrains Mono", monospace;
          animation: typing 1.3s steps(36, end) both;
          width: var(--typing-width);
        }

        .algo-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 28px;
        }

        .algo-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 17px;
          border-radius: 10px;
          border: 1px solid var(--border-strong);
          text-decoration: none;
          cursor: pointer;
          font: 800 .78rem "JetBrains Mono", monospace;
          transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
        }

        .algo-btn:hover {
          transform: translateY(-2px);
        }

        .algo-btn--primary {
          color: #171006;
          border-color: transparent;
          background: linear-gradient(135deg, var(--accent), #ffd69d);
          box-shadow: 0 12px 30px rgba(255,184,107,.16);
        }

        .algo-btn--primary:hover {
          box-shadow: 0 16px 36px rgba(255,184,107,.25);
        }

        .algo-btn--ghost {
          color: var(--text-primary);
          background: rgba(255,255,255,.035);
        }

        .algo-btn--ghost:hover {
          border-color: rgba(108,142,239,.55);
          background: rgba(108,142,239,.07);
        }

        /* CODE VISUAL */
        .algo-terminal {
          position: relative;
          min-height: 360px;
          border: 1px solid var(--border-strong);
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(18,28,45,.95), rgba(9,14,23,.94));
          box-shadow: var(--shadow);
          overflow: hidden;
          animation: fadeUp .75s .12s ease both, terminalGlow 7s ease-in-out infinite;
        }

        .algo-terminal::before {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          right: -80px;
          top: -100px;
          background: radial-gradient(circle, rgba(77,225,255,.14), transparent 70%);
        }

        .algo-terminal__top {
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 15px;
          border-bottom: 1px solid var(--border);
          background: rgba(255,255,255,.025);
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .terminal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--text-muted);
        }

        .terminal-title {
          color: var(--text-muted);
          font: 700 .65rem "JetBrains Mono", monospace;
        }

        .algo-terminal__body {
          position: relative;
          padding: 24px 24px 28px;
          min-height: 317px;
          font: 700 .76rem/1.85 "JetBrains Mono", monospace;
        }

        .code-line {
          display: flex;
          gap: 13px;
          white-space: nowrap;
          animation: codeLine .65s ease both;
        }

        .code-line:nth-child(1) { --line-width: 95%; animation-delay: .25s; }
        .code-line:nth-child(2) { --line-width: 88%; animation-delay: .38s; }
        .code-line:nth-child(3) { --line-width: 72%; animation-delay: .51s; }
        .code-line:nth-child(4) { --line-width: 91%; animation-delay: .64s; }
        .code-line:nth-child(5) { --line-width: 62%; animation-delay: .77s; }
        .code-line:nth-child(6) { --line-width: 84%; animation-delay: .90s; }
        .code-line:nth-child(7) { --line-width: 70%; animation-delay: 1.03s; }
        .code-line:nth-child(8) { --line-width: 52%; animation-delay: 1.16s; }

        .line-no {
          width: 18px;
          flex: 0 0 18px;
          color: #3f4e63;
          user-select: none;
          text-align: right;
        }

        .syntax-key { color: #c792ea; }
        .syntax-fn { color: #82aaff; }
        .syntax-str { color: #c3e88d; }
        .syntax-num { color: #f78c6c; }
        .syntax-comment { color: #53647a; }

        .terminal-cursor {
          display: inline-block;
          width: 7px;
          height: 14px;
          margin-left: 4px;
          vertical-align: -2px;
          background: var(--cyan);
          animation: blink 1s step-end infinite;
        }

        .floating-bracket {
          position: absolute;
          color: rgba(77,225,255,.24);
          font: 800 7rem/1 "JetBrains Mono", monospace;
          pointer-events: none;
          animation: float 7s ease-in-out infinite;
        }

        .floating-bracket--left { left: -30px; bottom: -45px; }
        .floating-bracket--right { right: -24px; top: 52px; animation-delay: -2s; color: rgba(255,184,107,.2); }

        /* STATS */
        .algo-stats {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: -28px auto 0;
          padding: 0 5vw;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .algo-stat-card {
          min-height: 88px;
          padding: 17px 18px;
          border: 1px solid var(--border);
          border-radius: 13px;
          background: rgba(15,22,35,.86);
          backdrop-filter: blur(14px);
          box-shadow: 0 15px 35px rgba(0,0,0,.18);
          animation: fadeUp .55s ease both;
        }

        .algo-stat-card:nth-child(2) { animation-delay: .05s; }
        .algo-stat-card:nth-child(3) { animation-delay: .1s; }
        .algo-stat-card:nth-child(4) { animation-delay: .15s; }

        .algo-stat-card__label {
          color: var(--text-muted);
          font: 700 .68rem "JetBrains Mono", monospace;
        }

        .algo-stat-card__value {
          margin-top: 7px;
          font: 800 1.45rem "JetBrains Mono", monospace;
        }

        .value-green { color: var(--green); }
        .value-orange { color: var(--accent); }
        .value-red { color: var(--red); }
        .value-blue { color: var(--blue); }

        /* CONTENT */
        .algo-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 62px 5vw 90px;
        }

        .algo-section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          margin-bottom: 22px;
        }

        .algo-section-kicker {
          margin: 0 0 7px;
          color: var(--accent);
          font: 700 .7rem "JetBrains Mono", monospace;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .algo-section-title {
          margin: 0;
          font: 800 clamp(1.45rem, 3vw, 2rem) "JetBrains Mono", monospace;
          letter-spacing: -.04em;
        }

        .algo-section-subtitle {
          margin: 8px 0 0;
          color: var(--text-muted);
          font-size: .88rem;
        }

        .algo-filters {
          display: grid;
          grid-template-columns: minmax(180px, 1.5fr) repeat(3, minmax(150px, .75fr));
          gap: 9px;
          margin-bottom: 18px;
        }

        .algo-search {
          width: 100%;
          min-height: 44px;
          padding: 0 14px 0 42px;
          color: var(--text-primary);
          background: rgba(15,22,35,.88);
          border: 1px solid var(--border);
          border-radius: 10px;
          outline: none;
          font: 600 .76rem "JetBrains Mono", monospace;
          transition: .2s ease;
        }

        .algo-search-wrap {
          position: relative;
        }

        .algo-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }

        .algo-search:focus {
          border-color: rgba(77,225,255,.5);
          box-shadow: 0 0 0 4px rgba(77,225,255,.06);
        }

        .algo-select {
          appearance: none;
          width: 100%;
          min-height: 44px;
          padding: 0 35px 0 13px;
          color: var(--text-secondary);
          background:
            linear-gradient(45deg, transparent 50%, #66758b 50%) calc(100% - 17px) 19px / 5px 5px no-repeat,
            linear-gradient(135deg, #66758b 50%, transparent 50%) calc(100% - 13px) 19px / 5px 5px no-repeat,
            rgba(15,22,35,.88);
          border: 1px solid var(--border);
          border-radius: 10px;
          outline: none;
          font: 600 .74rem "JetBrains Mono", monospace;
          cursor: pointer;
          transition: .2s ease;
        }

        .algo-select:hover,
        .algo-select:focus {
          border-color: rgba(255,184,107,.45);
        }

        .algo-select option {
          background: #101827;
          color: #edf4ff;
        }

        /* PROGRESS */
        .algo-progress-panel {
          margin-bottom: 24px;
          padding: 18px;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: rgba(15,22,35,.58);
        }

        .algo-progress-panel__row {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 9px;
          font: 700 .7rem "JetBrains Mono", monospace;
        }

        .algo-progress-panel__row span:first-child {
          color: var(--text-muted);
        }

        .algo-progress-panel__row span:last-child {
          color: var(--green);
        }

        .algo-progress-track {
          position: relative;
          height: 7px;
          overflow: hidden;
          border-radius: 99px;
          background: #0a1019;
          border: 1px solid var(--border);
        }

        .algo-progress-fill {
          position: relative;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, var(--green), var(--cyan), var(--accent));
          transition: width .8s cubic-bezier(.16,1,.3,1);
        }

        .algo-progress-fill::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 35%;
          left: -50%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.6), transparent);
          animation: progressShine 2.5s linear infinite;
        }

        /* PROBLEM CARDS */
        .algo-list {
          display: grid;
          gap: 11px;
        }

        .algo-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          min-height: 86px;
          padding: 15px 17px 15px 20px;
          overflow: hidden;
          border: 1px solid var(--border);
          border-left: 3px solid var(--card-accent, var(--border));
          border-radius: 13px;
          background: linear-gradient(135deg, rgba(16,24,39,.94), rgba(11,17,28,.92));
          animation: cardIn .45s ease both;
          transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
        }

        .algo-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,.035) 50%, transparent 75%);
          transform: translateX(-120%);
          pointer-events: none;
        }

        .algo-card:hover {
          transform: translateY(-3px);
          border-color: var(--card-accent);
          box-shadow: 0 18px 45px rgba(0,0,0,.25), 0 0 0 1px color-mix(in srgb, var(--card-accent) 35%, transparent);
        }

        .algo-card:hover::before {
          animation: shimmer .9s ease;
        }

        .algo-card__main {
          min-width: 0;
        }

        .algo-card__number {
          display: inline-block;
          margin-right: 9px;
          color: var(--text-muted);
          font: 700 .66rem "JetBrains Mono", monospace;
        }

        .algo-card__title {
          color: var(--text-primary);
          text-decoration: none;
          font-size: .95rem;
          font-weight: 750;
          transition: color .18s ease;
        }

        .algo-card__title:hover {
          color: var(--accent);
        }

        .algo-card__badges {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 8px;
        }

        .algo-pill {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          border-radius: 999px;
          font: 700 .64rem "JetBrains Mono", monospace;
          border: 1px solid transparent;
          text-transform: capitalize;
        }

        .algo-pill--easy {
          color: var(--green);
          background: rgba(92,230,166,.07);
          border-color: rgba(92,230,166,.25);
        }

        .algo-pill--medium {
          color: var(--accent);
          background: rgba(255,184,107,.07);
          border-color: rgba(255,184,107,.25);
        }

        .algo-pill--hard {
          color: var(--red);
          background: rgba(255,107,122,.07);
          border-color: rgba(255,107,122,.25);
        }

        .algo-pill--neutral {
          color: var(--text-muted);
          background: rgba(255,255,255,.035);
          border-color: var(--border);
        }

        .algo-pill--tag {
          color: var(--blue);
          background: rgba(108,142,239,.07);
          border-color: rgba(108,142,239,.24);
        }

        .algo-card__solved {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 10px;
          border: 1px solid rgba(92,230,166,.3);
          border-radius: 999px;
          color: var(--green);
          background: rgba(92,230,166,.065);
          font: 800 .65rem "JetBrains Mono", monospace;
        }

        .algo-card__solved svg {
          width: 14px;
          height: 14px;
        }

        .algo-empty {
          padding: 60px 20px;
          text-align: center;
          border: 1px dashed var(--border-strong);
          border-radius: 14px;
          color: var(--text-muted);
          font: 700 .78rem "JetBrains Mono", monospace;
        }

        /* CELEBRATION */
        .algo-celebration {
          position: fixed;
          inset: 0;
          z-index: 100;
          pointer-events: none;
        }

        .algo-celebration__backdrop {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(92,230,166,.08), transparent 40%);
          animation: fadeIn .25s ease both;
        }

        .algo-celebration__card {
          position: absolute;
          left: 50%;
          top: 43%;
          width: min(390px, calc(100vw - 32px));
          padding: 26px 24px;
          text-align: center;
          border: 1px solid rgba(92,230,166,.38);
          border-radius: 20px;
          background: rgba(10,17,27,.94);
          box-shadow: 0 30px 100px rgba(0,0,0,.55), 0 0 80px rgba(92,230,166,.12);
          backdrop-filter: blur(18px);
          animation: acceptedPop 3.6s ease both;
        }

        .algo-celebration__icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 15px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--green);
          background: rgba(92,230,166,.09);
          border: 1px solid rgba(92,230,166,.28);
          box-shadow: 0 0 35px rgba(92,230,166,.13);
        }

        .algo-celebration__icon svg {
          width: 36px;
          height: 36px;
        }

        .algo-celebration__icon path {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: checkDraw .65s .2s ease forwards;
        }

        .algo-celebration__title {
          margin: 0;
          font: 800 1.45rem "JetBrains Mono", monospace;
        }

        .algo-celebration__text {
          margin: 9px 0 0;
          color: var(--text-secondary);
          font-size: .84rem;
        }

        .algo-celebration__code {
          display: inline-block;
          margin-top: 15px;
          padding: 7px 10px;
          border-radius: 8px;
          color: var(--green);
          background: rgba(92,230,166,.06);
          border: 1px solid rgba(92,230,166,.17);
          font: 700 .68rem "JetBrains Mono", monospace;
        }

        .confetti {
          position: absolute;
          left: var(--left);
          top: 0;
          width: var(--size);
          height: calc(var(--size) * 1.8);
          border-radius: 2px;
          background: var(--confetti);
          animation: confettiFall var(--duration) cubic-bezier(.2,.7,.3,1) var(--delay) both;
        }

        /* FOOTER */
        .algo-footer {
          position: relative;
          z-index: 2;
          padding: 25px 5vw 35px;
          border-top: 1px solid var(--border);
          color: var(--text-muted);
          text-align: center;
          font: 600 .66rem "JetBrains Mono", monospace;
        }

        @media (max-width: 900px) {
          .algo-hero__inner {
            grid-template-columns: 1fr;
          }

          .algo-terminal {
            max-width: 680px;
          }

          .algo-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .algo-filters {
            grid-template-columns: 1fr 1fr;
          }

          .algo-search-wrap {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 620px) {
          .algo-nav {
            padding: 0 16px;
          }

          .algo-nav__status {
            display: none;
          }

          .algo-user__name {
            display: none;
          }

          .algo-hero {
            padding: 55px 18px 50px;
          }

          .algo-hero__title {
            font-size: 2.55rem;
          }

          .algo-hero__subtitle {
            font-size: .9rem;
          }

          .algo-terminal {
            min-height: 300px;
          }

          .algo-terminal__body {
            overflow-x: auto;
            font-size: .67rem;
          }

          .algo-stats {
            padding: 0 18px;
            grid-template-columns: 1fr 1fr;
          }

          .algo-content {
            padding: 48px 18px 70px;
          }

          .algo-filters {
            grid-template-columns: 1fr;
          }

          .algo-search-wrap {
            grid-column: auto;
          }

          .algo-section-head {
            align-items: start;
            flex-direction: column;
          }

          .algo-card {
            align-items: flex-start;
          }

          .algo-card__solved {
            padding: 6px 8px;
          }

          .algo-card__solved span {
            display: none;
          }
        }
      `}),v&&f.jsxs("div",{className:"algo-celebration","aria-live":"polite",children:[f.jsx("div",{className:"algo-celebration__backdrop"}),Array.from({length:44}).map((q,se)=>f.jsx("span",{className:"confetti",style:{"--left":`${se*37%101}%`,"--size":`${5+se%4}px`,"--x":`${se*73%260-130}px`,"--r":`${(se%2?1:-1)*(180+se%5*120)}deg`,"--duration":`${2.2+se%8*.16}s`,"--delay":`${se%10*.035}s`,"--confetti":["#5ce6a6","#4de1ff","#ffb86b","#a78bfa","#ff6b7a","#ffffff"][se%6]}},se)),f.jsxs("div",{className:"algo-celebration__card",children:[f.jsx("div",{className:"algo-celebration__icon",children:f.jsx("svg",{viewBox:"0 0 48 48",fill:"none","aria-hidden":"true",children:f.jsx("path",{d:"M10 25L19 34L38 13",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})})}),f.jsx("h2",{className:"algo-celebration__title",children:"Problem Solved! 🎉"}),f.jsx("p",{className:"algo-celebration__text",children:"All test cases passed. Keep building your streak."}),f.jsx("span",{className:"algo-celebration__code",children:"> submission::accepted"})]})]},k),f.jsxs("nav",{className:"algo-nav",children:[f.jsxs(Vt,{to:"/",className:"algo-nav__brand",children:["Algo",f.jsx("span",{children:"Coding"})," Platform",f.jsx("span",{className:"algo-nav__cursor",children:"_"})]}),f.jsxs("div",{className:"algo-nav__right",children:[f.jsxs("div",{className:"algo-nav__status",children:[f.jsx("span",{className:"status-dot"}),"SYSTEM ONLINE"]}),f.jsxs("div",{className:"algo-user",ref:C,children:[f.jsxs("button",{type:"button",className:`algo-user__trigger ${y?"is-open":""}`,onClick:()=>b(q=>!q),children:[f.jsx("span",{className:"algo-user__avatar",children:M}),f.jsx("span",{className:"algo-user__name",children:(t==null?void 0:t.firstName)||"Coder"}),f.jsx("span",{className:"algo-user__caret",children:"▼"})]}),y&&f.jsxs("div",{className:"algo-user__menu",children:[(t==null?void 0:t.role)==="admin"&&f.jsxs(f.Fragment,{children:[f.jsx(Vt,{to:"/admin",className:"algo-user__menu-item algo-user__menu-item--admin",onClick:()=>b(!1),children:"⚙ Admin_panel"}),f.jsx("div",{className:"algo-user__divider"})]}),f.jsx("button",{className:"algo-user__menu-item algo-user__menu-item--danger",onClick:E,children:"⏻ logout"})]})]})]})]}),f.jsxs("header",{className:"algo-hero",children:[f.jsx("div",{className:"algo-hero__scan","aria-hidden":"true"}),f.jsx("div",{className:"algo-hero__glow","aria-hidden":"true"}),f.jsx("div",{className:"algo-hero__glow algo-hero__glow--blue","aria-hidden":"true"}),f.jsxs("div",{className:"algo-hero__inner",children:[f.jsxs("div",{className:"algo-hero__copy",children:[f.jsx("p",{className:"algo-hero__eyebrow",children:"Developer workspace"}),f.jsxs("h1",{className:"algo-hero__title",children:[(t==null?void 0:t.firstName)||"Coder"," ready to"," ",f.jsx("span",{className:"highlight",children:"solve?"})]}),f.jsx("p",{className:"algo-hero__subtitle",children:"Sharpen your problem-solving skills, master algorithms, and build consistency one accepted solution at a time."}),f.jsx("span",{className:"algo-hero__boot",style:{"--typing-width":`${Math.min(P.length,52)}ch`},children:P}),f.jsxs("div",{className:"algo-hero__actions",children:[f.jsx("button",{className:"algo-btn algo-btn--primary",onClick:le,children:"Start Solving →"}),f.jsx("button",{className:"algo-btn algo-btn--ghost",onClick:()=>{d({difficulty:"all",tag:"all",status:"unsolved"}),h(""),le()},children:"Continue Practice"})]})]}),f.jsxs("div",{className:"algo-terminal","aria-label":"Animated code preview",children:[f.jsxs("div",{className:"algo-terminal__top",children:[f.jsxs("div",{className:"terminal-dots",children:[f.jsx("span",{className:"terminal-dot"}),f.jsx("span",{className:"terminal-dot"}),f.jsx("span",{className:"terminal-dot"})]}),f.jsx("span",{className:"terminal-title",children:"solution.cpp — Algo IDE"}),f.jsx("span",{className:"terminal-title",children:"● LIVE"})]}),f.jsxs("div",{className:"algo-terminal__body",children:[f.jsxs("div",{className:"code-line",children:[f.jsx("span",{className:"line-no",children:"01"}),f.jsxs("span",{children:[f.jsx("span",{className:"syntax-key",children:"#include"})," ",f.jsx("span",{className:"syntax-str",children:"<bits/stdc++.h>"})]})]}),f.jsxs("div",{className:"code-line",children:[f.jsx("span",{className:"line-no",children:"02"}),f.jsxs("span",{children:[f.jsx("span",{className:"syntax-key",children:"using namespace"})," ","std;"]})]}),f.jsxs("div",{className:"code-line",children:[f.jsx("span",{className:"line-no",children:"03"}),f.jsxs("span",{children:[f.jsx("span",{className:"syntax-key",children:"int"})," ",f.jsx("span",{className:"syntax-fn",children:"solve"}),"() ","{"]})]}),f.jsxs("div",{className:"code-line",children:[f.jsx("span",{className:"line-no",children:"04"}),f.jsxs("span",{children:["  ",f.jsx("span",{className:"syntax-key",children:"int"})," ans ="," ",f.jsx("span",{className:"syntax-num",children:"0"}),";"]})]}),f.jsxs("div",{className:"code-line",children:[f.jsx("span",{className:"line-no",children:"05"}),f.jsxs("span",{children:["  ",f.jsx("span",{className:"syntax-key",children:"for"})," (",f.jsx("span",{className:"syntax-key",children:"int"})," x : nums)"]})]}),f.jsxs("div",{className:"code-line",children:[f.jsx("span",{className:"line-no",children:"06"}),f.jsx("span",{children:"    ans += x;"})]}),f.jsxs("div",{className:"code-line",children:[f.jsx("span",{className:"line-no",children:"07"}),f.jsxs("span",{children:["  ",f.jsx("span",{className:"syntax-key",children:"return"})," ans;"]})]}),f.jsxs("div",{className:"code-line",children:[f.jsx("span",{className:"line-no",children:"08"}),f.jsxs("span",{children:["}"," ",f.jsx("span",{className:"terminal-cursor"})]})]}),f.jsx("span",{className:"floating-bracket floating-bracket--left",children:"{"}),f.jsx("span",{className:"floating-bracket floating-bracket--right",children:"}"})]})]})]})]}),f.jsxs("section",{className:"algo-stats","aria-label":"Problem statistics",children:[f.jsxs("div",{className:"algo-stat-card",children:[f.jsx("div",{className:"algo-stat-card__label",children:"SOLVED"}),f.jsx("div",{className:"algo-stat-card__value value-green",children:R})]}),f.jsxs("div",{className:"algo-stat-card",children:[f.jsx("div",{className:"algo-stat-card__label",children:"EASY"}),f.jsx("div",{className:"algo-stat-card__value value-green",children:ae})]}),f.jsxs("div",{className:"algo-stat-card",children:[f.jsx("div",{className:"algo-stat-card__label",children:"MEDIUM"}),f.jsx("div",{className:"algo-stat-card__value value-orange",children:K})]}),f.jsxs("div",{className:"algo-stat-card",children:[f.jsx("div",{className:"algo-stat-card__label",children:"HARD"}),f.jsx("div",{className:"algo-stat-card__value value-red",children:z})]})]}),f.jsxs("main",{className:"algo-content",id:"problems",children:[f.jsxs("div",{className:"algo-section-head",children:[f.jsxs("div",{children:[f.jsx("p",{className:"algo-section-kicker",children:"Problem library"}),f.jsx("h2",{className:"algo-section-title",children:"Choose your next challenge"}),f.jsx("p",{className:"algo-section-subtitle",children:"Practice deliberately. Submit confidently. Improve consistently."})]}),f.jsxs("span",{className:"algo-pill algo-pill--tag",children:[T.length," challenges"]})]}),f.jsxs("div",{className:"algo-progress-panel",children:[f.jsxs("div",{className:"algo-progress-panel__row",children:[f.jsx("span",{children:"solved_progress"}),f.jsxs("span",{children:[R,"/",Z," · ",D,"%"]})]}),f.jsx("div",{className:"algo-progress-track",children:f.jsx("div",{className:"algo-progress-fill",style:{width:`${D}%`}})})]}),f.jsxs("div",{className:"algo-filters",children:[f.jsxs("div",{className:"algo-search-wrap",children:[f.jsx("span",{className:"algo-search-icon",children:"⌕"}),f.jsx("input",{className:"algo-search",type:"text",placeholder:"Search problems...",value:p,onChange:q=>h(q.target.value)})]}),f.jsxs("select",{className:"algo-select",value:c.status,onChange:q=>d({...c,status:q.target.value}),children:[f.jsx("option",{value:"all",children:"All Problems"}),f.jsx("option",{value:"solved",children:"Solved Problems"}),f.jsx("option",{value:"unsolved",children:"Unsolved Problems"})]}),f.jsxs("select",{className:"algo-select",value:c.difficulty,onChange:q=>d({...c,difficulty:q.target.value}),children:[f.jsx("option",{value:"all",children:"All Difficulties"}),f.jsx("option",{value:"easy",children:"Easy"}),f.jsx("option",{value:"medium",children:"Medium"}),f.jsx("option",{value:"hard",children:"Hard"})]}),f.jsxs("select",{className:"algo-select",value:c.tag,onChange:q=>d({...c,tag:q.target.value}),children:[f.jsx("option",{value:"all",children:"All Tags"}),f.jsx("option",{value:"array",children:"Array"}),f.jsx("option",{value:"linkedlist",children:"Linked List"}),f.jsx("option",{value:"graph",children:"Graph"}),f.jsx("option",{value:"dp",children:"DP"})]})]}),T.length>0?f.jsx("div",{className:"algo-list",children:T.map((q,se)=>{var F;const de=s.some(te=>te._id===q._id),Y=(F=q.difficulty)==null?void 0:F.toLowerCase(),U=Y==="easy"?"var(--green)":Y==="medium"?"var(--accent)":Y==="hard"?"var(--red)":"var(--border)";return f.jsxs("article",{className:"algo-card",style:{"--card-accent":U,animationDelay:`${Math.min(se,10)*.045}s`},children:[f.jsxs("div",{className:"algo-card__main",children:[f.jsxs("div",{children:[f.jsxs("span",{className:"algo-card__number",children:["#",String(se+1).padStart(2,"0")]}),f.jsx(Vt,{to:`/problem/${q._id}`,className:"algo-card__title",children:q.title})]}),f.jsxs("div",{className:"algo-card__badges",children:[f.jsx("span",{className:`algo-pill ${AE(q.difficulty)}`,children:q.difficulty||"Unknown"}),f.jsx("span",{className:"algo-pill algo-pill--tag",children:q.tags||"General"})]})]}),de&&f.jsxs("div",{className:"algo-card__solved",children:[f.jsx("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:f.jsx("path",{d:"M4 10.5L8 14.5L16 5.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),f.jsx("span",{children:"solved"})]})]},q._id)})}):f.jsx("div",{className:"algo-empty",children:"No problems match these filters_"})]}),f.jsx("footer",{className:"algo-footer",children:"> AlgoCoding Platform · practice → submit → improve"})]})}const AE=e=>{switch(e==null?void 0:e.toLowerCase()){case"easy":return"algo-pill--easy";case"medium":return"algo-pill--medium";case"hard":return"algo-pill--hard";default:return"algo-pill--neutral"}};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ME=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,i)=>i?i.toUpperCase():r.toLowerCase()),ax=e=>{const t=ME(e);return t.charAt(0).toUpperCase()+t.slice(1)},v1=(...e)=>e.filter((t,r,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===r).join(" ").trim(),RE=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=O.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:s="",children:o,iconNode:c,...d},p)=>O.createElement("svg",{ref:p,...OE,width:t,height:t,stroke:e,strokeWidth:i?Number(r)*24/Number(t):r,className:v1("lucide",s),...!o&&!RE(d)&&{"aria-hidden":"true"},...d},[...c.map(([h,y])=>O.createElement(h,y)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(e,t)=>{const r=O.forwardRef(({className:i,...s},o)=>O.createElement(zE,{ref:o,iconNode:t,className:v1(`lucide-${TE(ax(e))}`,`lucide-${e}`,i),...s}));return r.displayName=ax(e),r};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],LE=bt("bot",DE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],_1=bt("braces",BE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],FE=bt("check",UE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ir=bt("circle-alert",VE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],HE=bt("circle-check",PE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],th=bt("cloud-upload",qE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],w1=bt("code-xml",IE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],YE=bt("copy",$E);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],k1=bt("eye-off",ZE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],S1=bt("eye",GE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],j1=bt("file-text",JE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]],QE=bt("file-video",XE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],N1=bt("list-checks",KE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],eC=bt("loader-circle",WE);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],nC=bt("pause",tC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],aC=bt("pencil",rC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],lC=bt("play",iC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Vs=bt("plus",sC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],uC=bt("rocket",oC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],dC=bt("save",cC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],mC=bt("send",fC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],pC=bt("square-pen",hC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],$r=bt("trash-2",gC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],bC=bt("user",yC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],vC=bt("video-off",xC);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],wC=bt("video",_C),kC=cn({title:ft().min(1,"Title is required"),description:ft().min(1,"Description is required"),difficulty:wa(["easy","medium","hard"]),tags:wa(["array","linkedList","graph","dp"]),visibleTestCases:_a(cn({input:ft().min(1,"Input is required"),output:ft().min(1,"Output is required"),explanation:ft().min(1,"Explanation is required")})).min(1,"At least one visible test case required"),hiddenTestCases:_a(cn({input:ft().min(1,"Input is required"),output:ft().min(1,"Output is required")})).min(1,"At least one hidden test case required"),startCode:_a(cn({language:wa(["C++","Java","JavaScript"]),initialCode:ft().min(1,"Initial code is required")})).length(3,"All three languages required"),referenceSolution:_a(cn({language:wa(["C++","Java","JavaScript"]),completeCode:ft().min(1,"Complete code is required")})).length(3,"All three languages required")}),SC={easy:"badge-success",medium:"badge-warning",hard:"badge-error"},ix={0:{name:"C++",dot:"bg-sky-500"},1:{name:"Java",dot:"bg-orange-500"},2:{name:"JavaScript",dot:"bg-yellow-400"}},jC={primary:"bg-primary/10 text-primary",secondary:"bg-secondary/10 text-secondary",accent:"bg-accent/10 text-accent"};function dm({id:e,icon:t,title:r,subtitle:i,accent:s="primary",children:o}){return f.jsx("section",{id:e,className:"card bg-base-100 border border-base-200 shadow-sm scroll-mt-24",children:f.jsxs("div",{className:"card-body gap-6",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:`grid place-items-center w-10 h-10 rounded-xl ${jC[s]}`,children:f.jsx(t,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-lg font-semibold leading-tight",children:r}),i&&f.jsx("p",{className:"text-sm text-base-content/60",children:i})]})]}),o]})})}function On({message:e}){return e?f.jsxs("span",{className:"label-text-alt flex items-center gap-1 text-error mt-1",children:[f.jsx(Ir,{className:"w-3.5 h-3.5"}),e]}):null}function NC(){var E,T,R,Z,D,M,P,ae,K,z,le,q,se,de,Y,U;const e=ui(),[t,r]=O.useState(0),{register:i,control:s,handleSubmit:o,watch:c,formState:{errors:d,isSubmitting:p}}=vr({resolver:ei(kC),defaultValues:{startCode:[{language:"C++",initialCode:""},{language:"Java",initialCode:""},{language:"JavaScript",initialCode:""}],referenceSolution:[{language:"C++",completeCode:""},{language:"Java",completeCode:""},{language:"JavaScript",completeCode:""}]}}),{fields:h,append:y,remove:b}=Du({control:s,name:"visibleTestCases"}),{fields:v,append:_,remove:k}=Du({control:s,name:"hiddenTestCases"}),A=c("difficulty"),C=async F=>{var te,ve;try{await kt.post("/problem/create",F),alert("Problem created successfully!"),e("/")}catch(x){alert(`Error: ${((ve=(te=x.response)==null?void 0:te.data)==null?void 0:ve.message)||x.message}`)}};return f.jsxs("div",{className:"min-h-screen bg-base-200/40",children:[f.jsx("div",{className:"sticky top-0 z-20 border-b border-base-200 bg-base-100/80 backdrop-blur",children:f.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-5 flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"grid place-items-center w-11 h-11 rounded-xl bg-primary text-primary-content",children:f.jsx(_1,{className:"w-6 h-6"})}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-xl font-bold leading-tight",children:"Create New Problem"}),f.jsx("p",{className:"text-sm text-base-content/60",children:"Fill in every section below to publish a new coding problem."})]})]}),f.jsxs("ul",{className:"steps hidden md:flex text-xs",children:[f.jsx("li",{className:"step step-primary",children:"Details"}),f.jsx("li",{className:`step ${h.length||v.length?"step-primary":""}`,children:"Test Cases"}),f.jsx("li",{className:"step",children:"Code"})]})]})}),f.jsxs("form",{onSubmit:o(C),className:"max-w-4xl mx-auto px-6 py-8 space-y-6",children:[f.jsx(dm,{id:"details",icon:j1,title:"Basic Information",subtitle:"The title, prompt, and classification shown to solvers.",accent:"primary",children:f.jsxs("div",{className:"space-y-5",children:[f.jsxs("div",{className:"form-control",children:[f.jsx("label",{className:"label",children:f.jsx("span",{className:"label-text font-medium",children:"Title"})}),f.jsx("input",{...i("title"),placeholder:"e.g. Merge Two Sorted Linked Lists",className:`input input-bordered w-full focus:input-primary ${d.title?"input-error":""}`}),f.jsx(On,{message:(E=d.title)==null?void 0:E.message})]}),f.jsxs("div",{className:"form-control",children:[f.jsx("label",{className:"label",children:f.jsx("span",{className:"label-text font-medium",children:"Description"})}),f.jsx("textarea",{...i("description"),placeholder:"Describe the problem statement, constraints, and examples...",className:`textarea textarea-bordered w-full h-36 leading-relaxed focus:textarea-primary ${d.description?"textarea-error":""}`}),f.jsx(On,{message:(T=d.description)==null?void 0:T.message})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[f.jsxs("div",{className:"form-control",children:[f.jsxs("label",{className:"label",children:[f.jsx("span",{className:"label-text font-medium",children:"Difficulty"}),A&&f.jsx("span",{className:`badge badge-sm ${SC[A]}`,children:A})]}),f.jsxs("select",{...i("difficulty"),defaultValue:"",className:`select select-bordered w-full ${d.difficulty?"select-error":""}`,children:[f.jsx("option",{value:"",disabled:!0,children:"Select difficulty"}),f.jsx("option",{value:"easy",children:"Easy"}),f.jsx("option",{value:"medium",children:"Medium"}),f.jsx("option",{value:"hard",children:"Hard"})]}),f.jsx(On,{message:(R=d.difficulty)==null?void 0:R.message})]}),f.jsxs("div",{className:"form-control",children:[f.jsx("label",{className:"label",children:f.jsx("span",{className:"label-text font-medium",children:"Tag"})}),f.jsxs("select",{...i("tags"),defaultValue:"",className:`select select-bordered w-full ${d.tags?"select-error":""}`,children:[f.jsx("option",{value:"",disabled:!0,children:"Select tag"}),f.jsx("option",{value:"array",children:"Array"}),f.jsx("option",{value:"linkedList",children:"Linked List"}),f.jsx("option",{value:"graph",children:"Graph"}),f.jsx("option",{value:"dp",children:"Dynamic Programming"})]}),f.jsx(On,{message:(Z=d.tags)==null?void 0:Z.message})]})]})]})}),f.jsx(dm,{id:"test-cases",icon:N1,title:"Test Cases",subtitle:"Visible cases teach the solver; hidden cases grade the submission.",accent:"secondary",children:f.jsxs("div",{className:"space-y-8",children:[f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(S1,{className:"w-4 h-4 text-info"}),f.jsx("h3",{className:"font-semibold text-sm",children:"Visible Test Cases"}),f.jsx("span",{className:"badge badge-sm badge-ghost",children:h.length})]}),f.jsxs("button",{type:"button",onClick:()=>y({input:"",output:"",explanation:""}),className:"btn btn-sm btn-outline btn-info gap-1",children:[f.jsx(Vs,{className:"w-4 h-4"})," Add case"]})]}),(M=(D=d.visibleTestCases)==null?void 0:D.root)!=null&&M.message||(P=d.visibleTestCases)!=null&&P.message?f.jsx(On,{message:((K=(ae=d.visibleTestCases)==null?void 0:ae.root)==null?void 0:K.message)||((z=d.visibleTestCases)==null?void 0:z.message)}):null,f.jsxs("div",{className:"space-y-3",children:[h.map((F,te)=>{var ve,x,j,$,S,X,ue,ne,pe,ge,Ae,De,ke,Me,Ue;return f.jsxs("div",{className:"rounded-xl border border-info/20 bg-info/5 p-4 space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("span",{className:"badge badge-info badge-outline",children:["Case ",te+1]}),f.jsxs("button",{type:"button",onClick:()=>b(te),className:"btn btn-xs btn-ghost text-error gap-1",children:[f.jsx($r,{className:"w-3.5 h-3.5"})," Remove"]})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[f.jsxs("div",{className:"form-control",children:[f.jsx("input",{...i(`visibleTestCases.${te}.input`),placeholder:"Input",className:`input input-bordered input-sm w-full font-mono ${(x=(ve=d.visibleTestCases)==null?void 0:ve[te])!=null&&x.input?"input-error":""}`}),f.jsx(On,{message:(S=($=(j=d.visibleTestCases)==null?void 0:j[te])==null?void 0:$.input)==null?void 0:S.message})]}),f.jsxs("div",{className:"form-control",children:[f.jsx("input",{...i(`visibleTestCases.${te}.output`),placeholder:"Output",className:`input input-bordered input-sm w-full font-mono ${(ue=(X=d.visibleTestCases)==null?void 0:X[te])!=null&&ue.output?"input-error":""}`}),f.jsx(On,{message:(ge=(pe=(ne=d.visibleTestCases)==null?void 0:ne[te])==null?void 0:pe.output)==null?void 0:ge.message})]})]}),f.jsxs("div",{className:"form-control",children:[f.jsx("textarea",{...i(`visibleTestCases.${te}.explanation`),placeholder:"Explanation shown to the solver",className:`textarea textarea-bordered textarea-sm w-full ${(De=(Ae=d.visibleTestCases)==null?void 0:Ae[te])!=null&&De.explanation?"textarea-error":""}`}),f.jsx(On,{message:(Ue=(Me=(ke=d.visibleTestCases)==null?void 0:ke[te])==null?void 0:Me.explanation)==null?void 0:Ue.message})]})]},F.id)}),h.length===0&&f.jsx("p",{className:"text-sm text-base-content/50 italic px-1",children:"No visible test cases yet — add at least one."})]})]}),f.jsx("div",{className:"divider my-0"}),f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(k1,{className:"w-4 h-4 text-warning"}),f.jsx("h3",{className:"font-semibold text-sm",children:"Hidden Test Cases"}),f.jsx("span",{className:"badge badge-sm badge-ghost",children:v.length})]}),f.jsxs("button",{type:"button",onClick:()=>_({input:"",output:""}),className:"btn btn-sm btn-outline btn-warning gap-1",children:[f.jsx(Vs,{className:"w-4 h-4"})," Add case"]})]}),(q=(le=d.hiddenTestCases)==null?void 0:le.root)!=null&&q.message||(se=d.hiddenTestCases)!=null&&se.message?f.jsx(On,{message:((Y=(de=d.hiddenTestCases)==null?void 0:de.root)==null?void 0:Y.message)||((U=d.hiddenTestCases)==null?void 0:U.message)}):null,f.jsxs("div",{className:"space-y-3",children:[v.map((F,te)=>{var ve,x,j,$,S,X,ue,ne,pe,ge;return f.jsxs("div",{className:"rounded-xl border border-warning/20 bg-warning/5 p-4 space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("span",{className:"badge badge-warning badge-outline",children:["Case ",te+1]}),f.jsxs("button",{type:"button",onClick:()=>k(te),className:"btn btn-xs btn-ghost text-error gap-1",children:[f.jsx($r,{className:"w-3.5 h-3.5"})," Remove"]})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[f.jsxs("div",{className:"form-control",children:[f.jsx("input",{...i(`hiddenTestCases.${te}.input`),placeholder:"Input",className:`input input-bordered input-sm w-full font-mono ${(x=(ve=d.hiddenTestCases)==null?void 0:ve[te])!=null&&x.input?"input-error":""}`}),f.jsx(On,{message:(S=($=(j=d.hiddenTestCases)==null?void 0:j[te])==null?void 0:$.input)==null?void 0:S.message})]}),f.jsxs("div",{className:"form-control",children:[f.jsx("input",{...i(`hiddenTestCases.${te}.output`),placeholder:"Output",className:`input input-bordered input-sm w-full font-mono ${(ue=(X=d.hiddenTestCases)==null?void 0:X[te])!=null&&ue.output?"input-error":""}`}),f.jsx(On,{message:(ge=(pe=(ne=d.hiddenTestCases)==null?void 0:ne[te])==null?void 0:pe.output)==null?void 0:ge.message})]})]})]},F.id)}),v.length===0&&f.jsx("p",{className:"text-sm text-base-content/50 italic px-1",children:"No hidden test cases yet — add at least one."})]})]})]})}),f.jsx(dm,{id:"code",icon:w1,title:"Code Templates",subtitle:"Provide starter code and a working reference solution per language.",accent:"accent",children:f.jsxs("div",{className:"space-y-4",children:[f.jsx("div",{role:"tablist",className:"tabs tabs-boxed w-fit bg-base-200",children:[0,1,2].map(F=>{var te,ve;return f.jsxs("a",{role:"tab",onClick:()=>r(F),className:`tab gap-2 ${t===F?"tab-active":""}`,children:[f.jsx("span",{className:`w-2 h-2 rounded-full ${ix[F].dot}`}),ix[F].name,(((te=d.startCode)==null?void 0:te[F])||((ve=d.referenceSolution)==null?void 0:ve[F]))&&f.jsx(Ir,{className:"w-3.5 h-3.5 text-error"})]},F)})}),[0,1,2].map(F=>{var te,ve,x,j,$,S,X,ue,ne,pe;return f.jsxs("div",{className:`grid grid-cols-1 lg:grid-cols-2 gap-4 ${t===F?"":"hidden"}`,children:[f.jsxs("div",{className:"form-control",children:[f.jsxs("label",{className:"label",children:[f.jsx("span",{className:"label-text font-medium",children:"Initial Code"}),f.jsx("span",{className:"label-text-alt text-base-content/50",children:"Shown to the solver"})]}),f.jsx("textarea",{...i(`startCode.${F}.initialCode`),className:`textarea textarea-bordered w-full font-mono text-sm bg-base-300/60 leading-relaxed ${(ve=(te=d.startCode)==null?void 0:te[F])!=null&&ve.initialCode?"textarea-error":""}`,rows:10,spellCheck:!1}),f.jsx(On,{message:($=(j=(x=d.startCode)==null?void 0:x[F])==null?void 0:j.initialCode)==null?void 0:$.message})]}),f.jsxs("div",{className:"form-control",children:[f.jsxs("label",{className:"label",children:[f.jsx("span",{className:"label-text font-medium",children:"Reference Solution"}),f.jsx("span",{className:"label-text-alt text-base-content/50",children:"Used for grading"})]}),f.jsx("textarea",{...i(`referenceSolution.${F}.completeCode`),className:`textarea textarea-bordered w-full font-mono text-sm bg-base-300/60 leading-relaxed ${(X=(S=d.referenceSolution)==null?void 0:S[F])!=null&&X.completeCode?"textarea-error":""}`,rows:10,spellCheck:!1}),f.jsx(On,{message:(pe=(ne=(ue=d.referenceSolution)==null?void 0:ue[F])==null?void 0:ne.completeCode)==null?void 0:pe.message})]})]},F)})]})}),f.jsx("div",{className:"sticky bottom-0 z-10 -mx-6 px-6 py-4 bg-gradient-to-t from-base-200/40 via-base-200/40 to-transparent backdrop-blur-sm",children:f.jsxs("button",{type:"submit",disabled:p,className:"btn btn-primary w-full gap-2 shadow-md",children:[p?f.jsx("span",{className:"loading loading-spinner loading-sm"}):f.jsx(uC,{className:"w-4 h-4"}),p?"Creating Problem...":"Create Problem"]})})]})]})}function EC(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function lx(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,i)}return r}function sx(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?lx(Object(r),!0).forEach(function(i){EC(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):lx(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function CC(e,t){if(e==null)return{};var r={},i=Object.keys(e),s,o;for(o=0;o<i.length;o++)s=i[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function AC(e,t){if(e==null)return{};var r=CC(e,t),i,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)i=o[s],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function TC(e,t){return MC(e)||RC(e,t)||OC(e,t)||zC()}function MC(e){if(Array.isArray(e))return e}function RC(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],i=!0,s=!1,o=void 0;try{for(var c=e[Symbol.iterator](),d;!(i=(d=c.next()).done)&&(r.push(d.value),!(t&&r.length===t));i=!0);}catch(p){s=!0,o=p}finally{try{!i&&c.return!=null&&c.return()}finally{if(s)throw o}}return r}}function OC(e,t){if(e){if(typeof e=="string")return ox(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ox(e,t)}}function ox(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function zC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DC(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ux(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,i)}return r}function cx(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ux(Object(r),!0).forEach(function(i){DC(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ux(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function LC(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(i){return t.reduceRight(function(s,o){return o(s)},i)}}function Es(e){return function t(){for(var r=this,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return s.length>=e.length?e.apply(this,s):function(){for(var c=arguments.length,d=new Array(c),p=0;p<c;p++)d[p]=arguments[p];return t.apply(r,[].concat(s,d))}}}function Ju(e){return{}.toString.call(e).includes("Object")}function BC(e){return!Object.keys(e).length}function Ps(e){return typeof e=="function"}function UC(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function FC(e,t){return Ju(t)||ja("changeType"),Object.keys(t).some(function(r){return!UC(e,r)})&&ja("changeField"),t}function VC(e){Ps(e)||ja("selectorType")}function PC(e){Ps(e)||Ju(e)||ja("handlerType"),Ju(e)&&Object.values(e).some(function(t){return!Ps(t)})&&ja("handlersType")}function HC(e){e||ja("initialIsRequired"),Ju(e)||ja("initialType"),BC(e)&&ja("initialContent")}function qC(e,t){throw new Error(e[t]||e.default)}var IC={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},ja=Es(qC)(IC),pu={changes:FC,selector:VC,handler:PC,initial:HC};function $C(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};pu.initial(e),pu.handler(t);var r={current:e},i=Es(GC)(r,t),s=Es(ZC)(r),o=Es(pu.changes)(e),c=Es(YC)(r);function d(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(y){return y};return pu.selector(h),h(r.current)}function p(h){LC(i,s,o,c)(h)}return[d,p]}function YC(e,t){return Ps(t)?t(e.current):t}function ZC(e,t){return e.current=cx(cx({},e.current),t),t}function GC(e,t,r){return Ps(t)?t(e.current):Object.keys(r).forEach(function(i){var s;return(s=t[i])===null||s===void 0?void 0:s.call(t,e.current[i])}),r}var JC={create:$C},XC={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function QC(e){return function t(){for(var r=this,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return s.length>=e.length?e.apply(this,s):function(){for(var c=arguments.length,d=new Array(c),p=0;p<c;p++)d[p]=arguments[p];return t.apply(r,[].concat(s,d))}}}function KC(e){return{}.toString.call(e).includes("Object")}function WC(e){return e||dx("configIsRequired"),KC(e)||dx("configType"),e.urls?(e4(),{paths:{vs:e.urls.monacoBase}}):e}function e4(){console.warn(E1.deprecation)}function t4(e,t){throw new Error(e[t]||e.default)}var E1={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},dx=QC(t4)(E1),n4={config:WC},r4=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return function(s){return r.reduceRight(function(o,c){return c(o)},s)}};function C1(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],C1(e[r],t[r]))}),sx(sx({},e),t)}var a4={type:"cancelation",msg:"operation is manually canceled"};function fm(e){var t=!1,r=new Promise(function(i,s){e.then(function(o){return t?s(a4):i(o)}),e.catch(s)});return r.cancel=function(){return t=!0},r}var i4=JC.create({config:XC,isInitialized:!1,resolve:null,reject:null,monaco:null}),A1=TC(i4,2),Xs=A1[0],pc=A1[1];function l4(e){var t=n4.config(e),r=t.monaco,i=AC(t,["monaco"]);pc(function(s){return{config:C1(s.config,i),monaco:r}})}function s4(){var e=Xs(function(t){var r=t.monaco,i=t.isInitialized,s=t.resolve;return{monaco:r,isInitialized:i,resolve:s}});if(!e.isInitialized){if(pc({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),fm(mm);if(window.monaco&&window.monaco.editor)return T1(window.monaco),e.resolve(window.monaco),fm(mm);r4(o4,c4)(d4)}return fm(mm)}function o4(e){return document.body.appendChild(e)}function u4(e){var t=document.createElement("script");return e&&(t.src=e),t}function c4(e){var t=Xs(function(i){var s=i.config,o=i.reject;return{config:s,reject:o}}),r=u4("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function d4(){var e=Xs(function(r){var i=r.config,s=r.resolve,o=r.reject;return{config:i,resolve:s,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){T1(r),e.resolve(r)},function(r){e.reject(r)})}function T1(e){Xs().monaco||pc({monaco:e})}function f4(){return Xs(function(e){var t=e.monaco;return t})}var mm=new Promise(function(e,t){return pc({resolve:e,reject:t})}),M1={config:l4,init:s4,__getMonacoInstance:f4},m4={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},hm=m4,h4={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},p4=h4;function g4({children:e}){return Ke.createElement("div",{style:p4.container},e)}var y4=g4,b4=y4;function x4({width:e,height:t,isEditorReady:r,loading:i,_ref:s,className:o,wrapperProps:c}){return Ke.createElement("section",{style:{...hm.wrapper,width:e,height:t},...c},!r&&Ke.createElement(b4,null,i),Ke.createElement("div",{ref:s,style:{...hm.fullWidth,...!r&&hm.hide},className:o}))}var v4=x4,R1=O.memo(v4);function _4(e){O.useEffect(e,[])}var O1=_4;function w4(e,t,r=!0){let i=O.useRef(!0);O.useEffect(i.current||!r?()=>{i.current=!1}:e,t)}var Ln=w4;function As(){}function nl(e,t,r,i){return k4(e,i)||S4(e,t,r,i)}function k4(e,t){return e.editor.getModel(z1(e,t))}function S4(e,t,r,i){return e.editor.createModel(t,r,i?z1(e,i):void 0)}function z1(e,t){return e.Uri.parse(t)}function j4({original:e,modified:t,language:r,originalLanguage:i,modifiedLanguage:s,originalModelPath:o,modifiedModelPath:c,keepCurrentOriginalModel:d=!1,keepCurrentModifiedModel:p=!1,theme:h="light",loading:y="Loading...",options:b={},height:v="100%",width:_="100%",className:k,wrapperProps:A={},beforeMount:C=As,onMount:E=As}){let[T,R]=O.useState(!1),[Z,D]=O.useState(!0),M=O.useRef(null),P=O.useRef(null),ae=O.useRef(null),K=O.useRef(E),z=O.useRef(C),le=O.useRef(!1);O1(()=>{let Y=M1.init();return Y.then(U=>(P.current=U)&&D(!1)).catch(U=>(U==null?void 0:U.type)!=="cancelation"&&console.error("Monaco initialization: error:",U)),()=>M.current?de():Y.cancel()}),Ln(()=>{if(M.current&&P.current){let Y=M.current.getOriginalEditor(),U=nl(P.current,e||"",i||r||"text",o||"");U!==Y.getModel()&&Y.setModel(U)}},[o],T),Ln(()=>{if(M.current&&P.current){let Y=M.current.getModifiedEditor(),U=nl(P.current,t||"",s||r||"text",c||"");U!==Y.getModel()&&Y.setModel(U)}},[c],T),Ln(()=>{let Y=M.current.getModifiedEditor();Y.getOption(P.current.editor.EditorOption.readOnly)?Y.setValue(t||""):t!==Y.getValue()&&(Y.executeEdits("",[{range:Y.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),Y.pushUndoStop())},[t],T),Ln(()=>{var Y,U;(U=(Y=M.current)==null?void 0:Y.getModel())==null||U.original.setValue(e||"")},[e],T),Ln(()=>{let{original:Y,modified:U}=M.current.getModel();P.current.editor.setModelLanguage(Y,i||r||"text"),P.current.editor.setModelLanguage(U,s||r||"text")},[r,i,s],T),Ln(()=>{var Y;(Y=P.current)==null||Y.editor.setTheme(h)},[h],T),Ln(()=>{var Y;(Y=M.current)==null||Y.updateOptions(b)},[b],T);let q=O.useCallback(()=>{var F;if(!P.current)return;z.current(P.current);let Y=nl(P.current,e||"",i||r||"text",o||""),U=nl(P.current,t||"",s||r||"text",c||"");(F=M.current)==null||F.setModel({original:Y,modified:U})},[r,t,s,e,i,o,c]),se=O.useCallback(()=>{var Y;!le.current&&ae.current&&(M.current=P.current.editor.createDiffEditor(ae.current,{automaticLayout:!0,...b}),q(),(Y=P.current)==null||Y.editor.setTheme(h),R(!0),le.current=!0)},[b,h,q]);O.useEffect(()=>{T&&K.current(M.current,P.current)},[T]),O.useEffect(()=>{!Z&&!T&&se()},[Z,T,se]);function de(){var U,F,te,ve;let Y=(U=M.current)==null?void 0:U.getModel();d||((F=Y==null?void 0:Y.original)==null||F.dispose()),p||((te=Y==null?void 0:Y.modified)==null||te.dispose()),(ve=M.current)==null||ve.dispose()}return Ke.createElement(R1,{width:_,height:v,isEditorReady:T,loading:y,_ref:ae,className:k,wrapperProps:A})}var N4=j4;O.memo(N4);function E4(e){let t=O.useRef();return O.useEffect(()=>{t.current=e},[e]),t.current}var C4=E4,gu=new Map;function A4({defaultValue:e,defaultLanguage:t,defaultPath:r,value:i,language:s,path:o,theme:c="light",line:d,loading:p="Loading...",options:h={},overrideServices:y={},saveViewState:b=!0,keepCurrentModel:v=!1,width:_="100%",height:k="100%",className:A,wrapperProps:C={},beforeMount:E=As,onMount:T=As,onChange:R,onValidate:Z=As}){let[D,M]=O.useState(!1),[P,ae]=O.useState(!0),K=O.useRef(null),z=O.useRef(null),le=O.useRef(null),q=O.useRef(T),se=O.useRef(E),de=O.useRef(),Y=O.useRef(i),U=C4(o),F=O.useRef(!1),te=O.useRef(!1);O1(()=>{let j=M1.init();return j.then($=>(K.current=$)&&ae(!1)).catch($=>($==null?void 0:$.type)!=="cancelation"&&console.error("Monaco initialization: error:",$)),()=>z.current?x():j.cancel()}),Ln(()=>{var $,S,X,ue;let j=nl(K.current,e||i||"",t||s||"",o||r||"");j!==(($=z.current)==null?void 0:$.getModel())&&(b&&gu.set(U,(S=z.current)==null?void 0:S.saveViewState()),(X=z.current)==null||X.setModel(j),b&&((ue=z.current)==null||ue.restoreViewState(gu.get(o))))},[o],D),Ln(()=>{var j;(j=z.current)==null||j.updateOptions(h)},[h],D),Ln(()=>{!z.current||i===void 0||(z.current.getOption(K.current.editor.EditorOption.readOnly)?z.current.setValue(i):i!==z.current.getValue()&&(te.current=!0,z.current.executeEdits("",[{range:z.current.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),z.current.pushUndoStop(),te.current=!1))},[i],D),Ln(()=>{var $,S;let j=($=z.current)==null?void 0:$.getModel();j&&s&&((S=K.current)==null||S.editor.setModelLanguage(j,s))},[s],D),Ln(()=>{var j;d!==void 0&&((j=z.current)==null||j.revealLine(d))},[d],D),Ln(()=>{var j;(j=K.current)==null||j.editor.setTheme(c)},[c],D);let ve=O.useCallback(()=>{var j;if(!(!le.current||!K.current)&&!F.current){se.current(K.current);let $=o||r,S=nl(K.current,i||e||"",t||s||"",$||"");z.current=(j=K.current)==null?void 0:j.editor.create(le.current,{model:S,automaticLayout:!0,...h},y),b&&z.current.restoreViewState(gu.get($)),K.current.editor.setTheme(c),d!==void 0&&z.current.revealLine(d),M(!0),F.current=!0}},[e,t,r,i,s,o,h,y,b,c,d]);O.useEffect(()=>{D&&q.current(z.current,K.current)},[D]),O.useEffect(()=>{!P&&!D&&ve()},[P,D,ve]),Y.current=i,O.useEffect(()=>{var j,$;D&&R&&((j=de.current)==null||j.dispose(),de.current=($=z.current)==null?void 0:$.onDidChangeModelContent(S=>{te.current||R(z.current.getValue(),S)}))},[D,R]),O.useEffect(()=>{if(D){let j=K.current.editor.onDidChangeMarkers($=>{var X;let S=(X=z.current.getModel())==null?void 0:X.uri;if(S&&$.find(ue=>ue.path===S.path)){let ue=K.current.editor.getModelMarkers({resource:S});Z==null||Z(ue)}});return()=>{j==null||j.dispose()}}return()=>{}},[D,Z]);function x(){var j,$;(j=de.current)==null||j.dispose(),v?b&&gu.set(o,z.current.saveViewState()):($=z.current.getModel())==null||$.dispose(),z.current.dispose()}return Ke.createElement(R1,{width:_,height:k,isEditorReady:D,loading:p,_ref:le,className:A,wrapperProps:C})}var T4=A4,M4=O.memo(T4),R4=M4;const O4=({problemId:e})=>{const[t,r]=O.useState([]),[i,s]=O.useState(!0),[o,c]=O.useState(null),[d,p]=O.useState(null);O.useEffect(()=>{(async()=>{try{s(!0);const _=await kt.get(`/problem/submittedProblem/${e}`);r(_.data),c(null)}catch(_){c("Failed to fetch submission history"),console.error(_)}finally{s(!1)}})()},[e]);const h=v=>{switch(v){case"accepted":return"badge-success";case"wrong":return"badge-error";case"error":return"badge-warning";case"pending":return"badge-info";default:return"badge-neutral"}},y=v=>v<1024?`${v} kB`:`${(v/1024).toFixed(2)} MB`,b=v=>new Date(v).toLocaleString();return i?f.jsx("div",{className:"flex justify-center items-center h-64",children:f.jsx("span",{className:"loading loading-spinner loading-lg"})}):o?f.jsx("div",{className:"alert alert-error shadow-lg my-4",children:f.jsxs("div",{children:[f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),f.jsx("span",{children:o})]})}):f.jsxs("div",{className:"container mx-auto p-4",children:[f.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Submission History"}),t.length===0?f.jsx("div",{className:"alert alert-info shadow-lg",children:f.jsxs("div",{children:[f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),f.jsx("span",{children:"No submissions found for this problem"})]})}):f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"table table-zebra w-full",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"#"}),f.jsx("th",{children:"Language"}),f.jsx("th",{children:"Status"}),f.jsx("th",{children:"Runtime"}),f.jsx("th",{children:"Memory"}),f.jsx("th",{children:"Test Cases"}),f.jsx("th",{children:"Submitted"}),f.jsx("th",{children:"Actions"})]})}),f.jsx("tbody",{children:t.map((v,_)=>f.jsxs("tr",{children:[f.jsx("td",{children:_+1}),f.jsx("td",{className:"font-mono",children:v.language}),f.jsx("td",{children:f.jsx("span",{className:`badge ${h(v.status)}`,children:v.status.charAt(0).toUpperCase()+v.status.slice(1)})}),f.jsxs("td",{className:"font-mono",children:[v.runtime,"sec"]}),f.jsx("td",{className:"font-mono",children:y(v.memory)}),f.jsxs("td",{className:"font-mono",children:[v.testCasesPassed,"/",v.testCasesTotal]}),f.jsx("td",{children:b(v.createdAt)}),f.jsx("td",{children:f.jsx("button",{className:"btn btn-s btn-outline",onClick:()=>p(v),children:"Code"})})]},v._id))})]})}),f.jsxs("p",{className:"mt-4 text-sm text-gray-500",children:["Showing ",t.length," submissions"]})]}),d&&f.jsx("div",{className:"modal modal-open",children:f.jsxs("div",{className:"modal-box w-11/12 max-w-5xl",children:[f.jsxs("h3",{className:"font-bold text-lg mb-4",children:["Submission Details: ",d.language]}),f.jsxs("div",{className:"mb-4",children:[f.jsxs("div",{className:"flex flex-wrap gap-2 mb-2",children:[f.jsx("span",{className:`badge ${h(d.status)}`,children:d.status}),f.jsxs("span",{className:"badge badge-outline",children:["Runtime: ",d.runtime,"s"]}),f.jsxs("span",{className:"badge badge-outline",children:["Memory: ",y(d.memory)]}),f.jsxs("span",{className:"badge badge-outline",children:["Passed: ",d.testCasesPassed,"/",d.testCasesTotal]})]}),d.errorMessage&&f.jsx("div",{className:"alert alert-error mt-2",children:f.jsx("div",{children:f.jsx("span",{children:d.errorMessage})})})]}),f.jsx("pre",{className:"p-4 bg-gray-900 text-gray-100 rounded overflow-x-auto",children:f.jsx("code",{children:d.code})}),f.jsx("div",{className:"modal-action",children:f.jsx("button",{className:"btn",onClick:()=>p(null),children:"Close"})})]})})]})};function z4(e,t){const r={};return(e[e.length-1]===""?[...e,""]:e).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const D4=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,L4=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,B4={};function fx(e,t){return(B4.jsx?L4:D4).test(e)}const U4=/[ \t\n\f\r]/g;function F4(e){return typeof e=="object"?e.type==="text"?mx(e.value):!1:mx(e)}function mx(e){return e.replace(U4,"")===""}class Qs{constructor(t,r,i){this.normal=r,this.property=t,i&&(this.space=i)}}Qs.prototype.normal={};Qs.prototype.property={};Qs.prototype.space=void 0;function D1(e,t){const r={},i={};for(const s of e)Object.assign(r,s.property),Object.assign(i,s.normal);return new Qs(r,i,t)}function nh(e){return e.toLowerCase()}class Sn{constructor(t,r){this.attribute=r,this.property=t}}Sn.prototype.attribute="";Sn.prototype.booleanish=!1;Sn.prototype.boolean=!1;Sn.prototype.commaOrSpaceSeparated=!1;Sn.prototype.commaSeparated=!1;Sn.prototype.defined=!1;Sn.prototype.mustUseProperty=!1;Sn.prototype.number=!1;Sn.prototype.overloadedBoolean=!1;Sn.prototype.property="";Sn.prototype.spaceSeparated=!1;Sn.prototype.space=void 0;let V4=0;const Ve=ci(),Ut=ci(),rh=ci(),he=ci(),ht=ci(),ri=ci(),Dn=ci();function ci(){return 2**++V4}const ah=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ve,booleanish:Ut,commaOrSpaceSeparated:Dn,commaSeparated:ri,number:he,overloadedBoolean:rh,spaceSeparated:ht},Symbol.toStringTag,{value:"Module"})),pm=Object.keys(ah);class zh extends Sn{constructor(t,r,i,s){let o=-1;if(super(t,r),hx(this,"space",s),typeof i=="number")for(;++o<pm.length;){const c=pm[o];hx(this,pm[o],(i&ah[c])===ah[c])}}}zh.prototype.defined=!0;function hx(e,t,r){r&&(e[t]=r)}function pl(e){const t={},r={};for(const[i,s]of Object.entries(e.properties)){const o=new zh(i,e.transform(e.attributes||{},i),s,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),t[i]=o,r[nh(i)]=i,r[nh(o.attribute)]=i}return new Qs(t,r,e.space)}const L1=pl({properties:{ariaActiveDescendant:null,ariaAtomic:Ut,ariaAutoComplete:null,ariaBusy:Ut,ariaChecked:Ut,ariaColCount:he,ariaColIndex:he,ariaColSpan:he,ariaControls:ht,ariaCurrent:null,ariaDescribedBy:ht,ariaDetails:null,ariaDisabled:Ut,ariaDropEffect:ht,ariaErrorMessage:null,ariaExpanded:Ut,ariaFlowTo:ht,ariaGrabbed:Ut,ariaHasPopup:null,ariaHidden:Ut,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ht,ariaLevel:he,ariaLive:null,ariaModal:Ut,ariaMultiLine:Ut,ariaMultiSelectable:Ut,ariaOrientation:null,ariaOwns:ht,ariaPlaceholder:null,ariaPosInSet:he,ariaPressed:Ut,ariaReadOnly:Ut,ariaRelevant:null,ariaRequired:Ut,ariaRoleDescription:ht,ariaRowCount:he,ariaRowIndex:he,ariaRowSpan:he,ariaSelected:Ut,ariaSetSize:he,ariaSort:null,ariaValueMax:he,ariaValueMin:he,ariaValueNow:he,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function B1(e,t){return t in e?e[t]:t}function U1(e,t){return B1(e,t.toLowerCase())}const P4=pl({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ri,acceptCharset:ht,accessKey:ht,action:null,allow:null,allowFullScreen:Ve,allowPaymentRequest:Ve,allowUserMedia:Ve,alpha:Ve,alt:null,as:null,async:Ve,autoCapitalize:null,autoComplete:ht,autoFocus:Ve,autoPlay:Ve,blocking:ht,capture:null,charSet:null,checked:Ve,cite:null,className:ht,closedBy:null,colorSpace:null,cols:he,colSpan:he,command:null,commandFor:null,content:null,contentEditable:Ut,controls:Ve,controlsList:ht,coords:he|ri,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ve,defer:Ve,dir:null,dirName:null,disabled:Ve,download:rh,draggable:Ut,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ve,formTarget:null,headers:ht,height:he,hidden:rh,high:he,href:null,hrefLang:null,htmlFor:ht,httpEquiv:ht,id:null,imageSizes:null,imageSrcSet:null,inert:Ve,inputMode:null,integrity:null,is:null,isMap:Ve,itemId:null,itemProp:ht,itemRef:ht,itemScope:Ve,itemType:ht,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ve,low:he,manifest:null,max:null,maxLength:he,media:null,method:null,min:null,minLength:he,multiple:Ve,muted:Ve,name:null,nonce:null,noModule:Ve,noValidate:Ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ve,optimum:he,pattern:null,ping:ht,placeholder:null,playsInline:Ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ve,referrerPolicy:null,rel:ht,required:Ve,reversed:Ve,rows:he,rowSpan:he,sandbox:ht,scope:null,scoped:Ve,seamless:Ve,selected:Ve,shadowRootClonable:Ve,shadowRootCustomElementRegistry:Ve,shadowRootDelegatesFocus:Ve,shadowRootMode:null,shadowRootSerializable:Ve,shape:null,size:he,sizes:null,slot:null,span:he,spellCheck:Ut,src:null,srcDoc:null,srcLang:null,srcSet:null,start:he,step:null,style:null,tabIndex:he,target:null,title:null,translate:null,type:null,typeMustMatch:Ve,useMap:null,value:Ut,width:he,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ht,axis:null,background:null,bgColor:null,border:he,borderColor:null,bottomMargin:he,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ve,declare:Ve,event:null,face:null,frame:null,frameBorder:null,hSpace:he,leftMargin:he,link:null,longDesc:null,lowSrc:null,marginHeight:he,marginWidth:he,noResize:Ve,noHref:Ve,noShade:Ve,noWrap:Ve,object:null,profile:null,prompt:null,rev:null,rightMargin:he,rules:null,scheme:null,scrolling:Ut,standby:null,summary:null,text:null,topMargin:he,valueType:null,version:null,vAlign:null,vLink:null,vSpace:he,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:Ve,disablePictureInPicture:Ve,disableRemotePlayback:Ve,exportParts:ri,part:ht,prefix:null,property:null,results:he,security:null,unselectable:null},space:"html",transform:U1}),H4=pl({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Dn,accentHeight:he,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:he,amplitude:he,arabicForm:null,ascent:he,attributeName:null,attributeType:null,azimuth:he,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:he,by:null,calcMode:null,capHeight:he,className:ht,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:he,diffuseConstant:he,direction:null,display:null,dur:null,divisor:he,dominantBaseline:null,download:Ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:he,enableBackground:null,end:null,event:null,exponent:he,externalResourcesRequired:null,fill:null,fillOpacity:he,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ri,g2:ri,glyphName:ri,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:he,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:he,horizOriginX:he,horizOriginY:he,id:null,ideographic:he,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:he,k:he,k1:he,k2:he,k3:he,k4:he,kernelMatrix:Dn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:he,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:he,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:he,overlineThickness:he,paintOrder:null,panose1:null,path:null,pathLength:he,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ht,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:he,pointsAtY:he,pointsAtZ:he,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Dn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Dn,rev:Dn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Dn,requiredFeatures:Dn,requiredFonts:Dn,requiredFormats:Dn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:he,specularExponent:he,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:he,strikethroughThickness:he,string:null,stroke:null,strokeDashArray:Dn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:he,strokeOpacity:he,strokeWidth:null,style:null,surfaceScale:he,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Dn,tabIndex:he,tableValues:null,target:null,targetX:he,targetY:he,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Dn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:he,underlineThickness:he,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:he,values:null,vAlphabetic:he,vMathematical:he,vectorEffect:null,vHanging:he,vIdeographic:he,version:null,vertAdvY:he,vertOriginX:he,vertOriginY:he,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:he,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:B1}),F1=pl({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),V1=pl({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:U1}),P1=pl({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),q4={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},I4=/[A-Z]/g,px=/-[a-z]/g,$4=/^data[-\w.:]+$/i;function Y4(e,t){const r=nh(t);let i=t,s=Sn;if(r in e.normal)return e.property[e.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&$4.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(px,G4);i="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!px.test(o)){let c=o.replace(I4,Z4);c.charAt(0)!=="-"&&(c="-"+c),t="data"+c}}s=zh}return new s(i,t)}function Z4(e){return"-"+e.toLowerCase()}function G4(e){return e.charAt(1).toUpperCase()}const J4=D1([L1,P4,F1,V1,P1],"html"),Dh=D1([L1,H4,F1,V1,P1],"svg");function X4(e){return e.join(" ").trim()}var Qi={},gm,gx;function Q4(){if(gx)return gm;gx=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,r=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,d=/^\s+|\s+$/g,p=`
`,h="/",y="*",b="",v="comment",_="declaration";function k(C,E){if(typeof C!="string")throw new TypeError("First argument must be a string");if(!C)return[];E=E||{};var T=1,R=1;function Z(de){var Y=de.match(t);Y&&(T+=Y.length);var U=de.lastIndexOf(p);R=~U?de.length-U:R+de.length}function D(){var de={line:T,column:R};return function(Y){return Y.position=new M(de),K(),Y}}function M(de){this.start=de,this.end={line:T,column:R},this.source=E.source}M.prototype.content=C;function P(de){var Y=new Error(E.source+":"+T+":"+R+": "+de);if(Y.reason=de,Y.filename=E.source,Y.line=T,Y.column=R,Y.source=C,!E.silent)throw Y}function ae(de){var Y=de.exec(C);if(Y){var U=Y[0];return Z(U),C=C.slice(U.length),Y}}function K(){ae(r)}function z(de){var Y;for(de=de||[];Y=le();)Y!==!1&&de.push(Y);return de}function le(){var de=D();if(!(h!=C.charAt(0)||y!=C.charAt(1))){for(var Y=2;b!=C.charAt(Y)&&(y!=C.charAt(Y)||h!=C.charAt(Y+1));)++Y;if(Y+=2,b===C.charAt(Y-1))return P("End of comment missing");var U=C.slice(2,Y-2);return R+=2,Z(U),C=C.slice(Y),R+=2,de({type:v,comment:U})}}function q(){var de=D(),Y=ae(i);if(Y){if(le(),!ae(s))return P("property missing ':'");var U=ae(o),F=de({type:_,property:A(Y[0].replace(e,b)),value:U?A(U[0].replace(e,b)):b});return ae(c),F}}function se(){var de=[];z(de);for(var Y;Y=q();)Y!==!1&&(de.push(Y),z(de));return de}return K(),se()}function A(C){return C?C.replace(d,b):b}return gm=k,gm}var yx;function K4(){if(yx)return Qi;yx=1;var e=Qi&&Qi.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Qi,"__esModule",{value:!0}),Qi.default=r;const t=e(Q4());function r(i,s){let o=null;if(!i||typeof i!="string")return o;const c=(0,t.default)(i),d=typeof s=="function";return c.forEach(p=>{if(p.type!=="declaration")return;const{property:h,value:y}=p;d?s(h,y,p):y&&(o=o||{},o[h]=y)}),o}return Qi}var xs={},bx;function W4(){if(bx)return xs;bx=1,Object.defineProperty(xs,"__esModule",{value:!0}),xs.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,o=function(h){return!h||r.test(h)||e.test(h)},c=function(h,y){return y.toUpperCase()},d=function(h,y){return"".concat(y,"-")},p=function(h,y){return y===void 0&&(y={}),o(h)?h:(h=h.toLowerCase(),y.reactCompat?h=h.replace(s,d):h=h.replace(i,d),h.replace(t,c))};return xs.camelCase=p,xs}var vs,xx;function eA(){if(xx)return vs;xx=1;var e=vs&&vs.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},t=e(K4()),r=W4();function i(s,o){var c={};return!s||typeof s!="string"||(0,t.default)(s,function(d,p){d&&p&&(c[(0,r.camelCase)(d,o)]=p)}),c}return i.default=i,vs=i,vs}var tA=eA();const nA=mh(tA),H1=q1("end"),Lh=q1("start");function q1(e){return t;function t(r){const i=r&&r.position&&r.position[e]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function rA(e){const t=Lh(e),r=H1(e);if(t&&r)return{start:t,end:r}}function Ts(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?vx(e.position):"start"in e||"end"in e?vx(e):"line"in e||"column"in e?ih(e):""}function ih(e){return _x(e&&e.line)+":"+_x(e&&e.column)}function vx(e){return ih(e&&e.start)+"-"+ih(e&&e.end)}function _x(e){return e&&typeof e=="number"?e:1}class ln extends Error{constructor(t,r,i){super(),typeof r=="string"&&(i=r,r=void 0);let s="",o={},c=!1;if(r&&("line"in r&&"column"in r?o={place:r}:"start"in r&&"end"in r?o={place:r}:"type"in r?o={ancestors:[r],place:r.position}:o={...r}),typeof t=="string"?s=t:!o.cause&&t&&(c=!0,s=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof i=="string"){const p=i.indexOf(":");p===-1?o.ruleId=i:(o.source=i.slice(0,p),o.ruleId=i.slice(p+1))}if(!o.place&&o.ancestors&&o.ancestors){const p=o.ancestors[o.ancestors.length-1];p&&(o.place=p.position)}const d=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=d?d.line:void 0,this.name=Ts(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=c&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ln.prototype.file="";ln.prototype.name="";ln.prototype.reason="";ln.prototype.message="";ln.prototype.stack="";ln.prototype.column=void 0;ln.prototype.line=void 0;ln.prototype.ancestors=void 0;ln.prototype.cause=void 0;ln.prototype.fatal=void 0;ln.prototype.place=void 0;ln.prototype.ruleId=void 0;ln.prototype.source=void 0;const Bh={}.hasOwnProperty,aA=new Map,iA=/[A-Z]/g,lA=new Set(["table","tbody","thead","tfoot","tr"]),sA=new Set(["td","th"]),I1="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function oA(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=t.filePath||void 0;let i;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=gA(r,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=pA(r,t.jsx,t.jsxs)}const s={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:i,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Dh:J4,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=$1(s,e,void 0);return o&&typeof o!="string"?o:s.create(e,s.Fragment,{children:o||void 0},void 0)}function $1(e,t,r){if(t.type==="element")return uA(e,t,r);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return cA(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return fA(e,t,r);if(t.type==="mdxjsEsm")return dA(e,t);if(t.type==="root")return mA(e,t,r);if(t.type==="text")return hA(e,t)}function uA(e,t,r){const i=e.schema;let s=i;t.tagName.toLowerCase()==="svg"&&i.space==="html"&&(s=Dh,e.schema=s),e.ancestors.push(t);const o=Z1(e,t.tagName,!1),c=yA(e,t);let d=Fh(e,t);return lA.has(t.tagName)&&(d=d.filter(function(p){return typeof p=="string"?!F4(p):!0})),Y1(e,c,o,t),Uh(c,d),e.ancestors.pop(),e.schema=i,e.create(t,o,c,r)}function cA(e,t){if(t.data&&t.data.estree&&e.evaluater){const i=t.data.estree.body[0];return i.type,e.evaluater.evaluateExpression(i.expression)}Hs(e,t.position)}function dA(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Hs(e,t.position)}function fA(e,t,r){const i=e.schema;let s=i;t.name==="svg"&&i.space==="html"&&(s=Dh,e.schema=s),e.ancestors.push(t);const o=t.name===null?e.Fragment:Z1(e,t.name,!0),c=bA(e,t),d=Fh(e,t);return Y1(e,c,o,t),Uh(c,d),e.ancestors.pop(),e.schema=i,e.create(t,o,c,r)}function mA(e,t,r){const i={};return Uh(i,Fh(e,t)),e.create(t,e.Fragment,i,r)}function hA(e,t){return t.value}function Y1(e,t,r,i){typeof r!="string"&&r!==e.Fragment&&e.passNode&&(t.node=i)}function Uh(e,t){if(t.length>0){const r=t.length>1?t:t[0];r&&(e.children=r)}}function pA(e,t,r){return i;function i(s,o,c,d){const h=Array.isArray(c.children)?r:t;return d?h(o,c,d):h(o,c)}}function gA(e,t){return r;function r(i,s,o,c){const d=Array.isArray(o.children),p=Lh(i);return t(s,o,c,d,{columnNumber:p?p.column-1:void 0,fileName:e,lineNumber:p?p.line:void 0},void 0)}}function yA(e,t){const r={};let i,s;for(s in t.properties)if(s!=="children"&&Bh.call(t.properties,s)){const o=xA(e,s,t.properties[s]);if(o){const[c,d]=o;e.tableCellAlignToStyle&&c==="align"&&typeof d=="string"&&sA.has(t.tagName)?i=d:r[c]=d}}if(i){const o=r.style||(r.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return r}function bA(e,t){const r={};for(const i of t.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&e.evaluater){const o=i.data.estree.body[0];o.type;const c=o.expression;c.type;const d=c.properties[0];d.type,Object.assign(r,e.evaluater.evaluateExpression(d.argument))}else Hs(e,t.position);else{const s=i.name;let o;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&e.evaluater){const d=i.value.data.estree.body[0];d.type,o=e.evaluater.evaluateExpression(d.expression)}else Hs(e,t.position);else o=i.value===null?!0:i.value;r[s]=o}return r}function Fh(e,t){const r=[];let i=-1;const s=e.passKeys?new Map:aA;for(;++i<t.children.length;){const o=t.children[i];let c;if(e.passKeys){const p=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(p){const h=s.get(p)||0;c=p+"-"+h,s.set(p,h+1)}}const d=$1(e,o,c);d!==void 0&&r.push(d)}return r}function xA(e,t,r){const i=Y4(e.schema,t);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=i.commaSeparated?z4(r):X4(r)),i.property==="style"){let s=typeof r=="object"?r:vA(e,String(r));return e.stylePropertyNameCase==="css"&&(s=_A(s)),["style",s]}return[e.elementAttributeNameCase==="react"&&i.space?q4[i.property]||i.property:i.attribute,r]}}function vA(e,t){try{return nA(t,{reactCompat:!0})}catch(r){if(e.ignoreInvalidStyle)return{};const i=r,s=new ln("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=e.filePath||void 0,s.url=I1+"#cannot-parse-style-attribute",s}}function Z1(e,t,r){let i;if(!r)i={type:"Literal",value:t};else if(t.includes(".")){const s=t.split(".");let o=-1,c;for(;++o<s.length;){const d=fx(s[o])?{type:"Identifier",name:s[o]}:{type:"Literal",value:s[o]};c=c?{type:"MemberExpression",object:c,property:d,computed:!!(o&&d.type==="Literal"),optional:!1}:d}i=c}else i=fx(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(i.type==="Literal"){const s=i.value;return Bh.call(e.components,s)?e.components[s]:s}if(e.evaluater)return e.evaluater.evaluateExpression(i);Hs(e)}function Hs(e,t){const r=new ln("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=I1+"#cannot-handle-mdx-estrees-without-createevaluater",r}function _A(e){const t={};let r;for(r in e)Bh.call(e,r)&&(t[wA(r)]=e[r]);return t}function wA(e){let t=e.replace(iA,kA);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function kA(e){return"-"+e.toLowerCase()}const ym={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},SA={};function Vh(e,t){const r=SA,i=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,s=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return G1(e,i,s)}function G1(e,t,r){if(jA(e)){if("value"in e)return e.type==="html"&&!r?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return wx(e.children,t,r)}return Array.isArray(e)?wx(e,t,r):""}function wx(e,t,r){const i=[];let s=-1;for(;++s<e.length;)i[s]=G1(e[s],t,r);return i.join("")}function jA(e){return!!(e&&typeof e=="object")}const kx=document.createElement("i");function Ph(e){const t="&"+e+";";kx.innerHTML=t;const r=kx.textContent;return r.charCodeAt(r.length-1)===59&&e!=="semi"||r===t?!1:r}function Bn(e,t,r,i){const s=e.length;let o=0,c;if(t<0?t=-t>s?0:s+t:t=t>s?s:t,r=r>0?r:0,i.length<1e4)c=Array.from(i),c.unshift(t,r),e.splice(...c);else for(r&&e.splice(t,r);o<i.length;)c=i.slice(o,o+1e4),c.unshift(t,0),e.splice(...c),o+=1e4,t+=1e4}function Qn(e,t){return e.length>0?(Bn(e,e.length,0,t),e):t}const Sx={}.hasOwnProperty;function J1(e){const t={};let r=-1;for(;++r<e.length;)NA(t,e[r]);return t}function NA(e,t){let r;for(r in t){const s=(Sx.call(e,r)?e[r]:void 0)||(e[r]={}),o=t[r];let c;if(o)for(c in o){Sx.call(s,c)||(s[c]=[]);const d=o[c];EA(s[c],Array.isArray(d)?d:d?[d]:[])}}}function EA(e,t){let r=-1;const i=[];for(;++r<t.length;)(t[r].add==="after"?e:i).push(t[r]);Bn(e,0,0,i)}function X1(e,t){const r=Number.parseInt(e,t);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function ir(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const dn=Ra(/[A-Za-z]/),an=Ra(/[\dA-Za-z]/),CA=Ra(/[#-'*+\--9=?A-Z^-~]/);function Xu(e){return e!==null&&(e<32||e===127)}const lh=Ra(/\d/),AA=Ra(/[\dA-Fa-f]/),TA=Ra(/[!-/:-@[-`{-~]/);function ze(e){return e!==null&&e<-2}function pt(e){return e!==null&&(e<0||e===32)}function Qe(e){return e===-2||e===-1||e===32}const gc=Ra(new RegExp("\\p{P}|\\p{S}","u")),oi=Ra(/\s/);function Ra(e){return t;function t(r){return r!==null&&r>-1&&e.test(String.fromCharCode(r))}}function gl(e){const t=[];let r=-1,i=0,s=0;for(;++r<e.length;){const o=e.charCodeAt(r);let c="";if(o===37&&an(e.charCodeAt(r+1))&&an(e.charCodeAt(r+2)))s=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(c=String.fromCharCode(o));else if(o>55295&&o<57344){const d=e.charCodeAt(r+1);o<56320&&d>56319&&d<57344?(c=String.fromCharCode(o,d),s=1):c="�"}else c=String.fromCharCode(o);c&&(t.push(e.slice(i,r),encodeURIComponent(c)),i=r+s+1,c=""),s&&(r+=s,s=0)}return t.join("")+e.slice(i)}function et(e,t,r,i){const s=i?i-1:Number.POSITIVE_INFINITY;let o=0;return c;function c(p){return Qe(p)?(e.enter(r),d(p)):t(p)}function d(p){return Qe(p)&&o++<s?(e.consume(p),d):(e.exit(r),t(p))}}const MA={tokenize:RA};function RA(e){const t=e.attempt(this.parser.constructs.contentInitial,i,s);let r;return t;function i(d){if(d===null){e.consume(d);return}return e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),et(e,t,"linePrefix")}function s(d){return e.enter("paragraph"),o(d)}function o(d){const p=e.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=p),r=p,c(d)}function c(d){if(d===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(d);return}return ze(d)?(e.consume(d),e.exit("chunkText"),o):(e.consume(d),c)}}const OA={tokenize:zA},jx={tokenize:DA};function zA(e){const t=this,r=[];let i=0,s,o,c;return d;function d(R){if(i<r.length){const Z=r[i];return t.containerState=Z[1],e.attempt(Z[0].continuation,p,h)(R)}return h(R)}function p(R){if(i++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,s&&T();const Z=t.events.length;let D=Z,M;for(;D--;)if(t.events[D][0]==="exit"&&t.events[D][1].type==="chunkFlow"){M=t.events[D][1].end;break}E(i);let P=Z;for(;P<t.events.length;)t.events[P][1].end={...M},P++;return Bn(t.events,D+1,0,t.events.slice(Z)),t.events.length=P,h(R)}return d(R)}function h(R){if(i===r.length){if(!s)return v(R);if(s.currentConstruct&&s.currentConstruct.concrete)return k(R);t.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(jx,y,b)(R)}function y(R){return s&&T(),E(i),v(R)}function b(R){return t.parser.lazy[t.now().line]=i!==r.length,c=t.now().offset,k(R)}function v(R){return t.containerState={},e.attempt(jx,_,k)(R)}function _(R){return i++,r.push([t.currentConstruct,t.containerState]),v(R)}function k(R){if(R===null){s&&T(),E(0),e.consume(R);return}return s=s||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:o}),A(R)}function A(R){if(R===null){C(e.exit("chunkFlow"),!0),E(0),e.consume(R);return}return ze(R)?(e.consume(R),C(e.exit("chunkFlow")),i=0,t.interrupt=void 0,d):(e.consume(R),A)}function C(R,Z){const D=t.sliceStream(R);if(Z&&D.push(null),R.previous=o,o&&(o.next=R),o=R,s.defineSkip(R.start),s.write(D),t.parser.lazy[R.start.line]){let M=s.events.length;for(;M--;)if(s.events[M][1].start.offset<c&&(!s.events[M][1].end||s.events[M][1].end.offset>c))return;const P=t.events.length;let ae=P,K,z;for(;ae--;)if(t.events[ae][0]==="exit"&&t.events[ae][1].type==="chunkFlow"){if(K){z=t.events[ae][1].end;break}K=!0}for(E(i),M=P;M<t.events.length;)t.events[M][1].end={...z},M++;Bn(t.events,ae+1,0,t.events.slice(P)),t.events.length=M}}function E(R){let Z=r.length;for(;Z-- >R;){const D=r[Z];t.containerState=D[1],D[0].exit.call(t,e)}r.length=R}function T(){s.write([null]),o=void 0,s=void 0,t.containerState._closeFlow=void 0}}function DA(e,t,r){return et(e,e.attempt(this.parser.constructs.document,t,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ul(e){if(e===null||pt(e)||oi(e))return 1;if(gc(e))return 2}function yc(e,t,r){const i=[];let s=-1;for(;++s<e.length;){const o=e[s].resolveAll;o&&!i.includes(o)&&(t=o(t,r),i.push(o))}return t}const sh={name:"attention",resolveAll:LA,tokenize:BA};function LA(e,t){let r=-1,i,s,o,c,d,p,h,y;for(;++r<e.length;)if(e[r][0]==="enter"&&e[r][1].type==="attentionSequence"&&e[r][1]._close){for(i=r;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&t.sliceSerialize(e[i][1]).charCodeAt(0)===t.sliceSerialize(e[r][1]).charCodeAt(0)){if((e[i][1]._close||e[r][1]._open)&&(e[r][1].end.offset-e[r][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[r][1].end.offset-e[r][1].start.offset)%3))continue;p=e[i][1].end.offset-e[i][1].start.offset>1&&e[r][1].end.offset-e[r][1].start.offset>1?2:1;const b={...e[i][1].end},v={...e[r][1].start};Nx(b,-p),Nx(v,p),c={type:p>1?"strongSequence":"emphasisSequence",start:b,end:{...e[i][1].end}},d={type:p>1?"strongSequence":"emphasisSequence",start:{...e[r][1].start},end:v},o={type:p>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[r][1].start}},s={type:p>1?"strong":"emphasis",start:{...c.start},end:{...d.end}},e[i][1].end={...c.start},e[r][1].start={...d.end},h=[],e[i][1].end.offset-e[i][1].start.offset&&(h=Qn(h,[["enter",e[i][1],t],["exit",e[i][1],t]])),h=Qn(h,[["enter",s,t],["enter",c,t],["exit",c,t],["enter",o,t]]),h=Qn(h,yc(t.parser.constructs.insideSpan.null,e.slice(i+1,r),t)),h=Qn(h,[["exit",o,t],["enter",d,t],["exit",d,t],["exit",s,t]]),e[r][1].end.offset-e[r][1].start.offset?(y=2,h=Qn(h,[["enter",e[r][1],t],["exit",e[r][1],t]])):y=0,Bn(e,i-1,r-i+3,h),r=i+h.length-y-2;break}}for(r=-1;++r<e.length;)e[r][1].type==="attentionSequence"&&(e[r][1].type="data");return e}function BA(e,t){const r=this.parser.constructs.attentionMarkers.null,i=this.previous,s=ul(i);let o;return c;function c(p){return o=p,e.enter("attentionSequence"),d(p)}function d(p){if(p===o)return e.consume(p),d;const h=e.exit("attentionSequence"),y=ul(p),b=!y||y===2&&s||r.includes(p),v=!s||s===2&&y||r.includes(i);return h._open=!!(o===42?b:b&&(s||!v)),h._close=!!(o===42?v:v&&(y||!b)),t(p)}}function Nx(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const UA={name:"autolink",tokenize:FA};function FA(e,t,r){let i=0;return s;function s(_){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(_),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(_){return dn(_)?(e.consume(_),c):_===64?r(_):h(_)}function c(_){return _===43||_===45||_===46||an(_)?(i=1,d(_)):h(_)}function d(_){return _===58?(e.consume(_),i=0,p):(_===43||_===45||_===46||an(_))&&i++<32?(e.consume(_),d):(i=0,h(_))}function p(_){return _===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(_),e.exit("autolinkMarker"),e.exit("autolink"),t):_===null||_===32||_===60||Xu(_)?r(_):(e.consume(_),p)}function h(_){return _===64?(e.consume(_),y):CA(_)?(e.consume(_),h):r(_)}function y(_){return an(_)?b(_):r(_)}function b(_){return _===46?(e.consume(_),i=0,y):_===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(_),e.exit("autolinkMarker"),e.exit("autolink"),t):v(_)}function v(_){if((_===45||an(_))&&i++<63){const k=_===45?v:b;return e.consume(_),k}return r(_)}}const Ks={partial:!0,tokenize:VA};function VA(e,t,r){return i;function i(o){return Qe(o)?et(e,s,"linePrefix")(o):s(o)}function s(o){return o===null||ze(o)?t(o):r(o)}}const Q1={continuation:{tokenize:HA},exit:qA,name:"blockQuote",tokenize:PA};function PA(e,t,r){const i=this;return s;function s(c){if(c===62){const d=i.containerState;return d.open||(e.enter("blockQuote",{_container:!0}),d.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(c),e.exit("blockQuoteMarker"),o}return r(c)}function o(c){return Qe(c)?(e.enter("blockQuotePrefixWhitespace"),e.consume(c),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(c))}}function HA(e,t,r){const i=this;return s;function s(c){return Qe(c)?et(e,o,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):o(c)}function o(c){return e.attempt(Q1,t,r)(c)}}function qA(e){e.exit("blockQuote")}const K1={name:"characterEscape",tokenize:IA};function IA(e,t,r){return i;function i(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),s}function s(o){return TA(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):r(o)}}const W1={name:"characterReference",tokenize:$A};function $A(e,t,r){const i=this;let s=0,o,c;return d;function d(b){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(b),e.exit("characterReferenceMarker"),p}function p(b){return b===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(b),e.exit("characterReferenceMarkerNumeric"),h):(e.enter("characterReferenceValue"),o=31,c=an,y(b))}function h(b){return b===88||b===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(b),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,c=AA,y):(e.enter("characterReferenceValue"),o=7,c=lh,y(b))}function y(b){if(b===59&&s){const v=e.exit("characterReferenceValue");return c===an&&!Ph(i.sliceSerialize(v))?r(b):(e.enter("characterReferenceMarker"),e.consume(b),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return c(b)&&s++<o?(e.consume(b),y):r(b)}}const Ex={partial:!0,tokenize:ZA},Cx={concrete:!0,name:"codeFenced",tokenize:YA};function YA(e,t,r){const i=this,s={partial:!0,tokenize:D};let o=0,c=0,d;return p;function p(M){return h(M)}function h(M){const P=i.events[i.events.length-1];return o=P&&P[1].type==="linePrefix"?P[2].sliceSerialize(P[1],!0).length:0,d=M,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),y(M)}function y(M){return M===d?(c++,e.consume(M),y):c<3?r(M):(e.exit("codeFencedFenceSequence"),Qe(M)?et(e,b,"whitespace")(M):b(M))}function b(M){return M===null||ze(M)?(e.exit("codeFencedFence"),i.interrupt?t(M):e.check(Ex,A,Z)(M)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),v(M))}function v(M){return M===null||ze(M)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),b(M)):Qe(M)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),et(e,_,"whitespace")(M)):M===96&&M===d?r(M):(e.consume(M),v)}function _(M){return M===null||ze(M)?b(M):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),k(M))}function k(M){return M===null||ze(M)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),b(M)):M===96&&M===d?r(M):(e.consume(M),k)}function A(M){return e.attempt(s,Z,C)(M)}function C(M){return e.enter("lineEnding"),e.consume(M),e.exit("lineEnding"),E}function E(M){return o>0&&Qe(M)?et(e,T,"linePrefix",o+1)(M):T(M)}function T(M){return M===null||ze(M)?e.check(Ex,A,Z)(M):(e.enter("codeFlowValue"),R(M))}function R(M){return M===null||ze(M)?(e.exit("codeFlowValue"),T(M)):(e.consume(M),R)}function Z(M){return e.exit("codeFenced"),t(M)}function D(M,P,ae){let K=0;return z;function z(Y){return M.enter("lineEnding"),M.consume(Y),M.exit("lineEnding"),le}function le(Y){return M.enter("codeFencedFence"),Qe(Y)?et(M,q,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Y):q(Y)}function q(Y){return Y===d?(M.enter("codeFencedFenceSequence"),se(Y)):ae(Y)}function se(Y){return Y===d?(K++,M.consume(Y),se):K>=c?(M.exit("codeFencedFenceSequence"),Qe(Y)?et(M,de,"whitespace")(Y):de(Y)):ae(Y)}function de(Y){return Y===null||ze(Y)?(M.exit("codeFencedFence"),P(Y)):ae(Y)}}}function ZA(e,t,r){const i=this;return s;function s(c){return c===null?r(c):(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),o)}function o(c){return i.parser.lazy[i.now().line]?r(c):t(c)}}const bm={name:"codeIndented",tokenize:JA},GA={partial:!0,tokenize:XA};function JA(e,t,r){const i=this;return s;function s(h){return e.enter("codeIndented"),et(e,o,"linePrefix",5)(h)}function o(h){const y=i.events[i.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?c(h):r(h)}function c(h){return h===null?p(h):ze(h)?e.attempt(GA,c,p)(h):(e.enter("codeFlowValue"),d(h))}function d(h){return h===null||ze(h)?(e.exit("codeFlowValue"),c(h)):(e.consume(h),d)}function p(h){return e.exit("codeIndented"),t(h)}}function XA(e,t,r){const i=this;return s;function s(c){return i.parser.lazy[i.now().line]?r(c):ze(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),s):et(e,o,"linePrefix",5)(c)}function o(c){const d=i.events[i.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?t(c):ze(c)?s(c):r(c)}}const QA={name:"codeText",previous:WA,resolve:KA,tokenize:eT};function KA(e){let t=e.length-4,r=3,i,s;if((e[r][1].type==="lineEnding"||e[r][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(i=r;++i<t;)if(e[i][1].type==="codeTextData"){e[r][1].type="codeTextPadding",e[t][1].type="codeTextPadding",r+=2,t-=2;break}}for(i=r-1,t++;++i<=t;)s===void 0?i!==t&&e[i][1].type!=="lineEnding"&&(s=i):(i===t||e[i][1].type==="lineEnding")&&(e[s][1].type="codeTextData",i!==s+2&&(e[s][1].end=e[i-1][1].end,e.splice(s+2,i-s-2),t-=i-s-2,i=s+2),s=void 0);return e}function WA(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function eT(e,t,r){let i=0,s,o;return c;function c(b){return e.enter("codeText"),e.enter("codeTextSequence"),d(b)}function d(b){return b===96?(e.consume(b),i++,d):(e.exit("codeTextSequence"),p(b))}function p(b){return b===null?r(b):b===32?(e.enter("space"),e.consume(b),e.exit("space"),p):b===96?(o=e.enter("codeTextSequence"),s=0,y(b)):ze(b)?(e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),p):(e.enter("codeTextData"),h(b))}function h(b){return b===null||b===32||b===96||ze(b)?(e.exit("codeTextData"),p(b)):(e.consume(b),h)}function y(b){return b===96?(e.consume(b),s++,y):s===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(b)):(o.type="codeTextData",h(b))}}class tT{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,r){const i=r??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(t,i):t>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(t,r,i){const s=r||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return i&&_s(this.left,i),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),_s(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),_s(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const r=this.left.splice(t,Number.POSITIVE_INFINITY);_s(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);_s(this.left,r.reverse())}}}function _s(e,t){let r=0;if(t.length<1e4)e.push(...t);else for(;r<t.length;)e.push(...t.slice(r,r+1e4)),r+=1e4}function e_(e){const t={};let r=-1,i,s,o,c,d,p,h;const y=new tT(e);for(;++r<y.length;){for(;r in t;)r=t[r];if(i=y.get(r),r&&i[1].type==="chunkFlow"&&y.get(r-1)[1].type==="listItemPrefix"&&(p=i[1]._tokenizer.events,o=0,o<p.length&&p[o][1].type==="lineEndingBlank"&&(o+=2),o<p.length&&p[o][1].type==="content"))for(;++o<p.length&&p[o][1].type!=="content";)p[o][1].type==="chunkText"&&(p[o][1]._isInFirstContentOfListItem=!0,o++);if(i[0]==="enter")i[1].contentType&&(Object.assign(t,nT(y,r)),r=t[r],h=!0);else if(i[1]._container){for(o=r,s=void 0;o--;)if(c=y.get(o),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(s&&(y.get(s)[1].type="lineEndingBlank"),c[1].type="lineEnding",s=o);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;s&&(i[1].end={...y.get(s)[1].start},d=y.slice(s,r),d.unshift(i),y.splice(s,r-s+1,d))}}return Bn(e,0,Number.POSITIVE_INFINITY,y.slice(0)),!h}function nT(e,t){const r=e.get(t)[1],i=e.get(t)[2];let s=t-1;const o=[];let c=r._tokenizer;c||(c=i.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const d=c.events,p=[],h={};let y,b,v=-1,_=r,k=0,A=0;const C=[A];for(;_;){for(;e.get(++s)[1]!==_;);o.push(s),_._tokenizer||(y=i.sliceStream(_),_.next||y.push(null),b&&c.defineSkip(_.start),_._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(y),_._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),b=_,_=_.next}for(_=r;++v<d.length;)d[v][0]==="exit"&&d[v-1][0]==="enter"&&d[v][1].type===d[v-1][1].type&&d[v][1].start.line!==d[v][1].end.line&&(A=v+1,C.push(A),_._tokenizer=void 0,_.previous=void 0,_=_.next);for(c.events=[],_?(_._tokenizer=void 0,_.previous=void 0):C.pop(),v=C.length;v--;){const E=d.slice(C[v],C[v+1]),T=o.pop();p.push([T,T+E.length-1]),e.splice(T,2,E)}for(p.reverse(),v=-1;++v<p.length;)h[k+p[v][0]]=k+p[v][1],k+=p[v][1]-p[v][0]-1;return h}const rT={resolve:iT,tokenize:lT},aT={partial:!0,tokenize:sT};function iT(e){return e_(e),e}function lT(e,t){let r;return i;function i(d){return e.enter("content"),r=e.enter("chunkContent",{contentType:"content"}),s(d)}function s(d){return d===null?o(d):ze(d)?e.check(aT,c,o)(d):(e.consume(d),s)}function o(d){return e.exit("chunkContent"),e.exit("content"),t(d)}function c(d){return e.consume(d),e.exit("chunkContent"),r.next=e.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,s}}function sT(e,t,r){const i=this;return s;function s(c){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),et(e,o,"linePrefix")}function o(c){if(c===null||ze(c))return r(c);const d=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?t(c):e.interrupt(i.parser.constructs.flow,r,t)(c)}}function t_(e,t,r,i,s,o,c,d,p){const h=p||Number.POSITIVE_INFINITY;let y=0;return b;function b(E){return E===60?(e.enter(i),e.enter(s),e.enter(o),e.consume(E),e.exit(o),v):E===null||E===32||E===41||Xu(E)?r(E):(e.enter(i),e.enter(c),e.enter(d),e.enter("chunkString",{contentType:"string"}),A(E))}function v(E){return E===62?(e.enter(o),e.consume(E),e.exit(o),e.exit(s),e.exit(i),t):(e.enter(d),e.enter("chunkString",{contentType:"string"}),_(E))}function _(E){return E===62?(e.exit("chunkString"),e.exit(d),v(E)):E===null||E===60||ze(E)?r(E):(e.consume(E),E===92?k:_)}function k(E){return E===60||E===62||E===92?(e.consume(E),_):_(E)}function A(E){return!y&&(E===null||E===41||pt(E))?(e.exit("chunkString"),e.exit(d),e.exit(c),e.exit(i),t(E)):y<h&&E===40?(e.consume(E),y++,A):E===41?(e.consume(E),y--,A):E===null||E===32||E===40||Xu(E)?r(E):(e.consume(E),E===92?C:A)}function C(E){return E===40||E===41||E===92?(e.consume(E),A):A(E)}}function n_(e,t,r,i,s,o){const c=this;let d=0,p;return h;function h(_){return e.enter(i),e.enter(s),e.consume(_),e.exit(s),e.enter(o),y}function y(_){return d>999||_===null||_===91||_===93&&!p||_===94&&!d&&"_hiddenFootnoteSupport"in c.parser.constructs?r(_):_===93?(e.exit(o),e.enter(s),e.consume(_),e.exit(s),e.exit(i),t):ze(_)?(e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),y):(e.enter("chunkString",{contentType:"string"}),b(_))}function b(_){return _===null||_===91||_===93||ze(_)||d++>999?(e.exit("chunkString"),y(_)):(e.consume(_),p||(p=!Qe(_)),_===92?v:b)}function v(_){return _===91||_===92||_===93?(e.consume(_),d++,b):b(_)}}function r_(e,t,r,i,s,o){let c;return d;function d(v){return v===34||v===39||v===40?(e.enter(i),e.enter(s),e.consume(v),e.exit(s),c=v===40?41:v,p):r(v)}function p(v){return v===c?(e.enter(s),e.consume(v),e.exit(s),e.exit(i),t):(e.enter(o),h(v))}function h(v){return v===c?(e.exit(o),p(c)):v===null?r(v):ze(v)?(e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),et(e,h,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),y(v))}function y(v){return v===c||v===null||ze(v)?(e.exit("chunkString"),h(v)):(e.consume(v),v===92?b:y)}function b(v){return v===c||v===92?(e.consume(v),y):y(v)}}function Ms(e,t){let r;return i;function i(s){return ze(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),r=!0,i):Qe(s)?et(e,i,r?"linePrefix":"lineSuffix")(s):t(s)}}const oT={name:"definition",tokenize:cT},uT={partial:!0,tokenize:dT};function cT(e,t,r){const i=this;let s;return o;function o(_){return e.enter("definition"),c(_)}function c(_){return n_.call(i,e,d,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(_)}function d(_){return s=ir(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),_===58?(e.enter("definitionMarker"),e.consume(_),e.exit("definitionMarker"),p):r(_)}function p(_){return pt(_)?Ms(e,h)(_):h(_)}function h(_){return t_(e,y,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(_)}function y(_){return e.attempt(uT,b,b)(_)}function b(_){return Qe(_)?et(e,v,"whitespace")(_):v(_)}function v(_){return _===null||ze(_)?(e.exit("definition"),i.parser.defined.push(s),t(_)):r(_)}}function dT(e,t,r){return i;function i(d){return pt(d)?Ms(e,s)(d):r(d)}function s(d){return r_(e,o,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function o(d){return Qe(d)?et(e,c,"whitespace")(d):c(d)}function c(d){return d===null||ze(d)?t(d):r(d)}}const fT={name:"hardBreakEscape",tokenize:mT};function mT(e,t,r){return i;function i(o){return e.enter("hardBreakEscape"),e.consume(o),s}function s(o){return ze(o)?(e.exit("hardBreakEscape"),t(o)):r(o)}}const hT={name:"headingAtx",resolve:pT,tokenize:gT};function pT(e,t){let r=e.length-2,i=3,s,o;return e[i][1].type==="whitespace"&&(i+=2),r-2>i&&e[r][1].type==="whitespace"&&(r-=2),e[r][1].type==="atxHeadingSequence"&&(i===r-1||r-4>i&&e[r-2][1].type==="whitespace")&&(r-=i+1===r?2:4),r>i&&(s={type:"atxHeadingText",start:e[i][1].start,end:e[r][1].end},o={type:"chunkText",start:e[i][1].start,end:e[r][1].end,contentType:"text"},Bn(e,i,r-i+1,[["enter",s,t],["enter",o,t],["exit",o,t],["exit",s,t]])),e}function gT(e,t,r){let i=0;return s;function s(y){return e.enter("atxHeading"),o(y)}function o(y){return e.enter("atxHeadingSequence"),c(y)}function c(y){return y===35&&i++<6?(e.consume(y),c):y===null||pt(y)?(e.exit("atxHeadingSequence"),d(y)):r(y)}function d(y){return y===35?(e.enter("atxHeadingSequence"),p(y)):y===null||ze(y)?(e.exit("atxHeading"),t(y)):Qe(y)?et(e,d,"whitespace")(y):(e.enter("atxHeadingText"),h(y))}function p(y){return y===35?(e.consume(y),p):(e.exit("atxHeadingSequence"),d(y))}function h(y){return y===null||y===35||pt(y)?(e.exit("atxHeadingText"),d(y)):(e.consume(y),h)}}const yT=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ax=["pre","script","style","textarea"],bT={concrete:!0,name:"htmlFlow",resolveTo:_T,tokenize:wT},xT={partial:!0,tokenize:ST},vT={partial:!0,tokenize:kT};function _T(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function wT(e,t,r){const i=this;let s,o,c,d,p;return h;function h(S){return y(S)}function y(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),b}function b(S){return S===33?(e.consume(S),v):S===47?(e.consume(S),o=!0,A):S===63?(e.consume(S),s=3,i.interrupt?t:x):dn(S)?(e.consume(S),c=String.fromCharCode(S),C):r(S)}function v(S){return S===45?(e.consume(S),s=2,_):S===91?(e.consume(S),s=5,d=0,k):dn(S)?(e.consume(S),s=4,i.interrupt?t:x):r(S)}function _(S){return S===45?(e.consume(S),i.interrupt?t:x):r(S)}function k(S){const X="CDATA[";return S===X.charCodeAt(d++)?(e.consume(S),d===X.length?i.interrupt?t:q:k):r(S)}function A(S){return dn(S)?(e.consume(S),c=String.fromCharCode(S),C):r(S)}function C(S){if(S===null||S===47||S===62||pt(S)){const X=S===47,ue=c.toLowerCase();return!X&&!o&&Ax.includes(ue)?(s=1,i.interrupt?t(S):q(S)):yT.includes(c.toLowerCase())?(s=6,X?(e.consume(S),E):i.interrupt?t(S):q(S)):(s=7,i.interrupt&&!i.parser.lazy[i.now().line]?r(S):o?T(S):R(S))}return S===45||an(S)?(e.consume(S),c+=String.fromCharCode(S),C):r(S)}function E(S){return S===62?(e.consume(S),i.interrupt?t:q):r(S)}function T(S){return Qe(S)?(e.consume(S),T):z(S)}function R(S){return S===47?(e.consume(S),z):S===58||S===95||dn(S)?(e.consume(S),Z):Qe(S)?(e.consume(S),R):z(S)}function Z(S){return S===45||S===46||S===58||S===95||an(S)?(e.consume(S),Z):D(S)}function D(S){return S===61?(e.consume(S),M):Qe(S)?(e.consume(S),D):R(S)}function M(S){return S===null||S===60||S===61||S===62||S===96?r(S):S===34||S===39?(e.consume(S),p=S,P):Qe(S)?(e.consume(S),M):ae(S)}function P(S){return S===p?(e.consume(S),p=null,K):S===null||ze(S)?r(S):(e.consume(S),P)}function ae(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||pt(S)?D(S):(e.consume(S),ae)}function K(S){return S===47||S===62||Qe(S)?R(S):r(S)}function z(S){return S===62?(e.consume(S),le):r(S)}function le(S){return S===null||ze(S)?q(S):Qe(S)?(e.consume(S),le):r(S)}function q(S){return S===45&&s===2?(e.consume(S),U):S===60&&s===1?(e.consume(S),F):S===62&&s===4?(e.consume(S),j):S===63&&s===3?(e.consume(S),x):S===93&&s===5?(e.consume(S),ve):ze(S)&&(s===6||s===7)?(e.exit("htmlFlowData"),e.check(xT,$,se)(S)):S===null||ze(S)?(e.exit("htmlFlowData"),se(S)):(e.consume(S),q)}function se(S){return e.check(vT,de,$)(S)}function de(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),Y}function Y(S){return S===null||ze(S)?se(S):(e.enter("htmlFlowData"),q(S))}function U(S){return S===45?(e.consume(S),x):q(S)}function F(S){return S===47?(e.consume(S),c="",te):q(S)}function te(S){if(S===62){const X=c.toLowerCase();return Ax.includes(X)?(e.consume(S),j):q(S)}return dn(S)&&c.length<8?(e.consume(S),c+=String.fromCharCode(S),te):q(S)}function ve(S){return S===93?(e.consume(S),x):q(S)}function x(S){return S===62?(e.consume(S),j):S===45&&s===2?(e.consume(S),x):q(S)}function j(S){return S===null||ze(S)?(e.exit("htmlFlowData"),$(S)):(e.consume(S),j)}function $(S){return e.exit("htmlFlow"),t(S)}}function kT(e,t,r){const i=this;return s;function s(c){return ze(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),o):r(c)}function o(c){return i.parser.lazy[i.now().line]?r(c):t(c)}}function ST(e,t,r){return i;function i(s){return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),e.attempt(Ks,t,r)}}const jT={name:"htmlText",tokenize:NT};function NT(e,t,r){const i=this;let s,o,c;return d;function d(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),p}function p(x){return x===33?(e.consume(x),h):x===47?(e.consume(x),D):x===63?(e.consume(x),R):dn(x)?(e.consume(x),ae):r(x)}function h(x){return x===45?(e.consume(x),y):x===91?(e.consume(x),o=0,k):dn(x)?(e.consume(x),T):r(x)}function y(x){return x===45?(e.consume(x),_):r(x)}function b(x){return x===null?r(x):x===45?(e.consume(x),v):ze(x)?(c=b,F(x)):(e.consume(x),b)}function v(x){return x===45?(e.consume(x),_):b(x)}function _(x){return x===62?U(x):x===45?v(x):b(x)}function k(x){const j="CDATA[";return x===j.charCodeAt(o++)?(e.consume(x),o===j.length?A:k):r(x)}function A(x){return x===null?r(x):x===93?(e.consume(x),C):ze(x)?(c=A,F(x)):(e.consume(x),A)}function C(x){return x===93?(e.consume(x),E):A(x)}function E(x){return x===62?U(x):x===93?(e.consume(x),E):A(x)}function T(x){return x===null||x===62?U(x):ze(x)?(c=T,F(x)):(e.consume(x),T)}function R(x){return x===null?r(x):x===63?(e.consume(x),Z):ze(x)?(c=R,F(x)):(e.consume(x),R)}function Z(x){return x===62?U(x):R(x)}function D(x){return dn(x)?(e.consume(x),M):r(x)}function M(x){return x===45||an(x)?(e.consume(x),M):P(x)}function P(x){return ze(x)?(c=P,F(x)):Qe(x)?(e.consume(x),P):U(x)}function ae(x){return x===45||an(x)?(e.consume(x),ae):x===47||x===62||pt(x)?K(x):r(x)}function K(x){return x===47?(e.consume(x),U):x===58||x===95||dn(x)?(e.consume(x),z):ze(x)?(c=K,F(x)):Qe(x)?(e.consume(x),K):U(x)}function z(x){return x===45||x===46||x===58||x===95||an(x)?(e.consume(x),z):le(x)}function le(x){return x===61?(e.consume(x),q):ze(x)?(c=le,F(x)):Qe(x)?(e.consume(x),le):K(x)}function q(x){return x===null||x===60||x===61||x===62||x===96?r(x):x===34||x===39?(e.consume(x),s=x,se):ze(x)?(c=q,F(x)):Qe(x)?(e.consume(x),q):(e.consume(x),de)}function se(x){return x===s?(e.consume(x),s=void 0,Y):x===null?r(x):ze(x)?(c=se,F(x)):(e.consume(x),se)}function de(x){return x===null||x===34||x===39||x===60||x===61||x===96?r(x):x===47||x===62||pt(x)?K(x):(e.consume(x),de)}function Y(x){return x===47||x===62||pt(x)?K(x):r(x)}function U(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),t):r(x)}function F(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),te}function te(x){return Qe(x)?et(e,ve,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):ve(x)}function ve(x){return e.enter("htmlTextData"),c(x)}}const Hh={name:"labelEnd",resolveAll:TT,resolveTo:MT,tokenize:RT},ET={tokenize:OT},CT={tokenize:zT},AT={tokenize:DT};function TT(e){let t=-1;const r=[];for(;++t<e.length;){const i=e[t][1];if(r.push(e[t]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const s=i.type==="labelImage"?4:2;i.type="data",t+=s}}return e.length!==r.length&&Bn(e,0,e.length,r),e}function MT(e,t){let r=e.length,i=0,s,o,c,d;for(;r--;)if(s=e[r][1],o){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;e[r][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(c){if(e[r][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(o=r,s.type!=="labelLink")){i=2;break}}else s.type==="labelEnd"&&(c=r);const p={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},h={type:"label",start:{...e[o][1].start},end:{...e[c][1].end}},y={type:"labelText",start:{...e[o+i+2][1].end},end:{...e[c-2][1].start}};return d=[["enter",p,t],["enter",h,t]],d=Qn(d,e.slice(o+1,o+i+3)),d=Qn(d,[["enter",y,t]]),d=Qn(d,yc(t.parser.constructs.insideSpan.null,e.slice(o+i+4,c-3),t)),d=Qn(d,[["exit",y,t],e[c-2],e[c-1],["exit",h,t]]),d=Qn(d,e.slice(c+1)),d=Qn(d,[["exit",p,t]]),Bn(e,o,e.length,d),e}function RT(e,t,r){const i=this;let s=i.events.length,o,c;for(;s--;)if((i.events[s][1].type==="labelImage"||i.events[s][1].type==="labelLink")&&!i.events[s][1]._balanced){o=i.events[s][1];break}return d;function d(v){return o?o._inactive?b(v):(c=i.parser.defined.includes(ir(i.sliceSerialize({start:o.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(v),e.exit("labelMarker"),e.exit("labelEnd"),p):r(v)}function p(v){return v===40?e.attempt(ET,y,c?y:b)(v):v===91?e.attempt(CT,y,c?h:b)(v):c?y(v):b(v)}function h(v){return e.attempt(AT,y,b)(v)}function y(v){return t(v)}function b(v){return o._balanced=!0,r(v)}}function OT(e,t,r){return i;function i(b){return e.enter("resource"),e.enter("resourceMarker"),e.consume(b),e.exit("resourceMarker"),s}function s(b){return pt(b)?Ms(e,o)(b):o(b)}function o(b){return b===41?y(b):t_(e,c,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(b)}function c(b){return pt(b)?Ms(e,p)(b):y(b)}function d(b){return r(b)}function p(b){return b===34||b===39||b===40?r_(e,h,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(b):y(b)}function h(b){return pt(b)?Ms(e,y)(b):y(b)}function y(b){return b===41?(e.enter("resourceMarker"),e.consume(b),e.exit("resourceMarker"),e.exit("resource"),t):r(b)}}function zT(e,t,r){const i=this;return s;function s(d){return n_.call(i,e,o,c,"reference","referenceMarker","referenceString")(d)}function o(d){return i.parser.defined.includes(ir(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?t(d):r(d)}function c(d){return r(d)}}function DT(e,t,r){return i;function i(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),s}function s(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):r(o)}}const LT={name:"labelStartImage",resolveAll:Hh.resolveAll,tokenize:BT};function BT(e,t,r){const i=this;return s;function s(d){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(d),e.exit("labelImageMarker"),o}function o(d){return d===91?(e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelImage"),c):r(d)}function c(d){return d===94&&"_hiddenFootnoteSupport"in i.parser.constructs?r(d):t(d)}}const UT={name:"labelStartLink",resolveAll:Hh.resolveAll,tokenize:FT};function FT(e,t,r){const i=this;return s;function s(c){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelLink"),o}function o(c){return c===94&&"_hiddenFootnoteSupport"in i.parser.constructs?r(c):t(c)}}const xm={name:"lineEnding",tokenize:VT};function VT(e,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),et(e,t,"linePrefix")}}const Tu={name:"thematicBreak",tokenize:PT};function PT(e,t,r){let i=0,s;return o;function o(h){return e.enter("thematicBreak"),c(h)}function c(h){return s=h,d(h)}function d(h){return h===s?(e.enter("thematicBreakSequence"),p(h)):i>=3&&(h===null||ze(h))?(e.exit("thematicBreak"),t(h)):r(h)}function p(h){return h===s?(e.consume(h),i++,p):(e.exit("thematicBreakSequence"),Qe(h)?et(e,d,"whitespace")(h):d(h))}}const vn={continuation:{tokenize:$T},exit:ZT,name:"list",tokenize:IT},HT={partial:!0,tokenize:GT},qT={partial:!0,tokenize:YT};function IT(e,t,r){const i=this,s=i.events[i.events.length-1];let o=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,c=0;return d;function d(_){const k=i.containerState.type||(_===42||_===43||_===45?"listUnordered":"listOrdered");if(k==="listUnordered"?!i.containerState.marker||_===i.containerState.marker:lh(_)){if(i.containerState.type||(i.containerState.type=k,e.enter(k,{_container:!0})),k==="listUnordered")return e.enter("listItemPrefix"),_===42||_===45?e.check(Tu,r,h)(_):h(_);if(!i.interrupt||_===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),p(_)}return r(_)}function p(_){return lh(_)&&++c<10?(e.consume(_),p):(!i.interrupt||c<2)&&(i.containerState.marker?_===i.containerState.marker:_===41||_===46)?(e.exit("listItemValue"),h(_)):r(_)}function h(_){return e.enter("listItemMarker"),e.consume(_),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||_,e.check(Ks,i.interrupt?r:y,e.attempt(HT,v,b))}function y(_){return i.containerState.initialBlankLine=!0,o++,v(_)}function b(_){return Qe(_)?(e.enter("listItemPrefixWhitespace"),e.consume(_),e.exit("listItemPrefixWhitespace"),v):r(_)}function v(_){return i.containerState.size=o+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(_)}}function $T(e,t,r){const i=this;return i.containerState._closeFlow=void 0,e.check(Ks,s,o);function s(d){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,et(e,t,"listItemIndent",i.containerState.size+1)(d)}function o(d){return i.containerState.furtherBlankLines||!Qe(d)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,c(d)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(qT,t,c)(d))}function c(d){return i.containerState._closeFlow=!0,i.interrupt=void 0,et(e,e.attempt(vn,t,r),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function YT(e,t,r){const i=this;return et(e,s,"listItemIndent",i.containerState.size+1);function s(o){const c=i.events[i.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===i.containerState.size?t(o):r(o)}}function ZT(e){e.exit(this.containerState.type)}function GT(e,t,r){const i=this;return et(e,s,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(o){const c=i.events[i.events.length-1];return!Qe(o)&&c&&c[1].type==="listItemPrefixWhitespace"?t(o):r(o)}}const Tx={name:"setextUnderline",resolveTo:JT,tokenize:XT};function JT(e,t){let r=e.length,i,s,o;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){i=r;break}e[r][1].type==="paragraph"&&(s=r)}else e[r][1].type==="content"&&e.splice(r,1),!o&&e[r][1].type==="definition"&&(o=r);const c={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",o?(e.splice(s,0,["enter",c,t]),e.splice(o+1,0,["exit",e[i][1],t]),e[i][1].end={...e[o][1].end}):e[i][1]=c,e.push(["exit",c,t]),e}function XT(e,t,r){const i=this;let s;return o;function o(h){let y=i.events.length,b;for(;y--;)if(i.events[y][1].type!=="lineEnding"&&i.events[y][1].type!=="linePrefix"&&i.events[y][1].type!=="content"){b=i.events[y][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||b)?(e.enter("setextHeadingLine"),s=h,c(h)):r(h)}function c(h){return e.enter("setextHeadingLineSequence"),d(h)}function d(h){return h===s?(e.consume(h),d):(e.exit("setextHeadingLineSequence"),Qe(h)?et(e,p,"lineSuffix")(h):p(h))}function p(h){return h===null||ze(h)?(e.exit("setextHeadingLine"),t(h)):r(h)}}const QT={tokenize:KT};function KT(e){const t=this,r=e.attempt(Ks,i,e.attempt(this.parser.constructs.flowInitial,s,et(e,e.attempt(this.parser.constructs.flow,s,e.attempt(rT,s)),"linePrefix")));return r;function i(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,r}function s(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,r}}const WT={resolveAll:i_()},e3=a_("string"),t3=a_("text");function a_(e){return{resolveAll:i_(e==="text"?n3:void 0),tokenize:t};function t(r){const i=this,s=this.parser.constructs[e],o=r.attempt(s,c,d);return c;function c(y){return h(y)?o(y):d(y)}function d(y){if(y===null){r.consume(y);return}return r.enter("data"),r.consume(y),p}function p(y){return h(y)?(r.exit("data"),o(y)):(r.consume(y),p)}function h(y){if(y===null)return!0;const b=s[y];let v=-1;if(b)for(;++v<b.length;){const _=b[v];if(!_.previous||_.previous.call(i,i.previous))return!0}return!1}}}function i_(e){return t;function t(r,i){let s=-1,o;for(;++s<=r.length;)o===void 0?r[s]&&r[s][1].type==="data"&&(o=s,s++):(!r[s]||r[s][1].type!=="data")&&(s!==o+2&&(r[o][1].end=r[s-1][1].end,r.splice(o+2,s-o-2),s=o+2),o=void 0);return e?e(r,i):r}}function n3(e,t){let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const i=e[r-1][1],s=t.sliceStream(i);let o=s.length,c=-1,d=0,p;for(;o--;){const h=s[o];if(typeof h=="string"){for(c=h.length;h.charCodeAt(c-1)===32;)d++,c--;if(c)break;c=-1}else if(h===-2)p=!0,d++;else if(h!==-1){o++;break}}if(t._contentTypeTextTrailing&&r===e.length&&(d=0),d){const h={type:r===e.length||p||d<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?c:i.start._bufferIndex+c,_index:i.start._index+o,line:i.end.line,column:i.end.column-d,offset:i.end.offset-d},end:{...i.end}};i.end={...h.start},i.start.offset===i.end.offset?Object.assign(i,h):(e.splice(r,0,["enter",h,t],["exit",h,t]),r+=2)}r++}return e}const r3={42:vn,43:vn,45:vn,48:vn,49:vn,50:vn,51:vn,52:vn,53:vn,54:vn,55:vn,56:vn,57:vn,62:Q1},a3={91:oT},i3={[-2]:bm,[-1]:bm,32:bm},l3={35:hT,42:Tu,45:[Tx,Tu],60:bT,61:Tx,95:Tu,96:Cx,126:Cx},s3={38:W1,92:K1},o3={[-5]:xm,[-4]:xm,[-3]:xm,33:LT,38:W1,42:sh,60:[UA,jT],91:UT,92:[fT,K1],93:Hh,95:sh,96:QA},u3={null:[sh,WT]},c3={null:[42,95]},d3={null:[]},f3=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:c3,contentInitial:a3,disable:d3,document:r3,flow:l3,flowInitial:i3,insideSpan:u3,string:s3,text:o3},Symbol.toStringTag,{value:"Module"}));function m3(e,t,r){let i={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const s={},o=[];let c=[],d=[];const p={attempt:P(D),check:P(M),consume:T,enter:R,exit:Z,interrupt:P(M,{interrupt:!0})},h={code:null,containerState:{},defineSkip:A,events:[],now:k,parser:e,previous:null,sliceSerialize:v,sliceStream:_,write:b};let y=t.tokenize.call(h,p);return t.resolveAll&&o.push(t),h;function b(le){return c=Qn(c,le),C(),c[c.length-1]!==null?[]:(ae(t,0),h.events=yc(o,h.events,h),h.events)}function v(le,q){return p3(_(le),q)}function _(le){return h3(c,le)}function k(){const{_bufferIndex:le,_index:q,line:se,column:de,offset:Y}=i;return{_bufferIndex:le,_index:q,line:se,column:de,offset:Y}}function A(le){s[le.line]=le.column,z()}function C(){let le;for(;i._index<c.length;){const q=c[i._index];if(typeof q=="string")for(le=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===le&&i._bufferIndex<q.length;)E(q.charCodeAt(i._bufferIndex));else E(q)}}function E(le){y=y(le)}function T(le){ze(le)?(i.line++,i.column=1,i.offset+=le===-3?2:1,z()):le!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===c[i._index].length&&(i._bufferIndex=-1,i._index++)),h.previous=le}function R(le,q){const se=q||{};return se.type=le,se.start=k(),h.events.push(["enter",se,h]),d.push(se),se}function Z(le){const q=d.pop();return q.end=k(),h.events.push(["exit",q,h]),q}function D(le,q){ae(le,q.from)}function M(le,q){q.restore()}function P(le,q){return se;function se(de,Y,U){let F,te,ve,x;return Array.isArray(de)?$(de):"tokenize"in de?$([de]):j(de);function j(ne){return pe;function pe(ge){const Ae=ge!==null&&ne[ge],De=ge!==null&&ne.null,ke=[...Array.isArray(Ae)?Ae:Ae?[Ae]:[],...Array.isArray(De)?De:De?[De]:[]];return $(ke)(ge)}}function $(ne){return F=ne,te=0,ne.length===0?U:S(ne[te])}function S(ne){return pe;function pe(ge){return x=K(),ve=ne,ne.partial||(h.currentConstruct=ne),ne.name&&h.parser.constructs.disable.null.includes(ne.name)?ue():ne.tokenize.call(q?Object.assign(Object.create(h),q):h,p,X,ue)(ge)}}function X(ne){return le(ve,x),Y}function ue(ne){return x.restore(),++te<F.length?S(F[te]):U}}}function ae(le,q){le.resolveAll&&!o.includes(le)&&o.push(le),le.resolve&&Bn(h.events,q,h.events.length-q,le.resolve(h.events.slice(q),h)),le.resolveTo&&(h.events=le.resolveTo(h.events,h))}function K(){const le=k(),q=h.previous,se=h.currentConstruct,de=h.events.length,Y=Array.from(d);return{from:de,restore:U};function U(){i=le,h.previous=q,h.currentConstruct=se,h.events.length=de,d=Y,z()}}function z(){i.line in s&&i.column<2&&(i.column=s[i.line],i.offset+=s[i.line]-1)}}function h3(e,t){const r=t.start._index,i=t.start._bufferIndex,s=t.end._index,o=t.end._bufferIndex;let c;if(r===s)c=[e[r].slice(i,o)];else{if(c=e.slice(r,s),i>-1){const d=c[0];typeof d=="string"?c[0]=d.slice(i):c.shift()}o>0&&c.push(e[s].slice(0,o))}return c}function p3(e,t){let r=-1;const i=[];let s;for(;++r<e.length;){const o=e[r];let c;if(typeof o=="string")c=o;else switch(o){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=t?" ":"	";break}case-1:{if(!t&&s)continue;c=" ";break}default:c=String.fromCharCode(o)}s=o===-2,i.push(c)}return i.join("")}function g3(e){const i={constructs:J1([f3,...(e||{}).extensions||[]]),content:s(MA),defined:[],document:s(OA),flow:s(QT),lazy:{},string:s(e3),text:s(t3)};return i;function s(o){return c;function c(d){return m3(i,o,d)}}}function y3(e){for(;!e_(e););return e}const Mx=/[\0\t\n\r]/g;function b3(){let e=1,t="",r=!0,i;return s;function s(o,c,d){const p=[];let h,y,b,v,_;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(c||void 0).decode(o)),b=0,t="",r&&(o.charCodeAt(0)===65279&&b++,r=void 0);b<o.length;){if(Mx.lastIndex=b,h=Mx.exec(o),v=h&&h.index!==void 0?h.index:o.length,_=o.charCodeAt(v),!h){t=o.slice(b);break}if(_===10&&b===v&&i)p.push(-3),i=void 0;else switch(i&&(p.push(-5),i=void 0),b<v&&(p.push(o.slice(b,v)),e+=v-b),_){case 0:{p.push(65533),e++;break}case 9:{for(y=Math.ceil(e/4)*4,p.push(-2);e++<y;)p.push(-1);break}case 10:{p.push(-4),e=1;break}default:i=!0,e=1}b=v+1}return d&&(i&&p.push(-5),t&&p.push(t),p.push(null)),p}}const x3=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function v3(e){return e.replace(x3,_3)}function _3(e,t,r){if(t)return t;if(r.charCodeAt(0)===35){const s=r.charCodeAt(1),o=s===120||s===88;return X1(r.slice(o?2:1),o?16:10)}return Ph(r)||e}const l_={}.hasOwnProperty;function w3(e,t,r){return t&&typeof t=="object"&&(r=t,t=void 0),k3(r)(y3(g3(r).document().write(b3()(e,t,!0))))}function k3(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Pt),autolinkProtocol:K,autolinkEmail:K,atxHeading:o(xt),blockQuote:o(De),characterEscape:K,characterReference:K,codeFenced:o(ke),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:o(ke,c),codeText:o(Me,c),codeTextData:K,data:K,codeFlowValue:K,definition:o(Ue),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:o(Ce),hardBreakEscape:o(At),hardBreakTrailing:o(At),htmlFlow:o(it,c),htmlFlowData:K,htmlText:o(it,c),htmlTextData:K,image:o(Gt),label:c,link:o(Pt),listItem:o(Q),listItemValue:v,listOrdered:o(B,b),listUnordered:o(B),paragraph:o(oe),reference:S,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:o(xt),strong:o(we),thematicBreak:o(ye)},exit:{atxHeading:p(),atxHeadingSequence:D,autolink:p(),autolinkEmail:Ae,autolinkProtocol:ge,blockQuote:p(),characterEscapeValue:z,characterReferenceMarkerHexadecimal:ue,characterReferenceMarkerNumeric:ue,characterReferenceValue:ne,characterReference:pe,codeFenced:p(C),codeFencedFence:A,codeFencedFenceInfo:_,codeFencedFenceMeta:k,codeFlowValue:z,codeIndented:p(E),codeText:p(Y),codeTextData:z,data:z,definition:p(),definitionDestinationString:Z,definitionLabelString:T,definitionTitleString:R,emphasis:p(),hardBreakEscape:p(q),hardBreakTrailing:p(q),htmlFlow:p(se),htmlFlowData:z,htmlText:p(de),htmlTextData:z,image:p(F),label:ve,labelText:te,lineEnding:le,link:p(U),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:X,resourceDestinationString:x,resourceTitleString:j,resource:$,setextHeading:p(ae),setextHeadingLineSequence:P,setextHeadingText:M,strong:p(),thematicBreak:p()}};s_(t,(e||{}).mdastExtensions||[]);const r={};return i;function i(H){let ie={type:"root",children:[]};const _e={stack:[ie],tokenStack:[],config:t,enter:d,exit:h,buffer:c,resume:y,data:r},Ne=[];let Ge=-1;for(;++Ge<H.length;)if(H[Ge][1].type==="listOrdered"||H[Ge][1].type==="listUnordered")if(H[Ge][0]==="enter")Ne.push(Ge);else{const gt=Ne.pop();Ge=s(H,gt,Ge)}for(Ge=-1;++Ge<H.length;){const gt=t[H[Ge][0]];l_.call(gt,H[Ge][1].type)&&gt[H[Ge][1].type].call(Object.assign({sliceSerialize:H[Ge][2].sliceSerialize},_e),H[Ge][1])}if(_e.tokenStack.length>0){const gt=_e.tokenStack[_e.tokenStack.length-1];(gt[1]||Rx).call(_e,void 0,gt[0])}for(ie.position={start:ya(H.length>0?H[0][1].start:{line:1,column:1,offset:0}),end:ya(H.length>0?H[H.length-2][1].end:{line:1,column:1,offset:0})},Ge=-1;++Ge<t.transforms.length;)ie=t.transforms[Ge](ie)||ie;return ie}function s(H,ie,_e){let Ne=ie-1,Ge=-1,gt=!1,jn,zt,fn,sn;for(;++Ne<=_e;){const Tt=H[Ne];switch(Tt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Tt[0]==="enter"?Ge++:Ge--,sn=void 0;break}case"lineEndingBlank":{Tt[0]==="enter"&&(jn&&!sn&&!Ge&&!fn&&(fn=Ne),sn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:sn=void 0}if(!Ge&&Tt[0]==="enter"&&Tt[1].type==="listItemPrefix"||Ge===-1&&Tt[0]==="exit"&&(Tt[1].type==="listUnordered"||Tt[1].type==="listOrdered")){if(jn){let mn=Ne;for(zt=void 0;mn--;){const hn=H[mn];if(hn[1].type==="lineEnding"||hn[1].type==="lineEndingBlank"){if(hn[0]==="exit")continue;zt&&(H[zt][1].type="lineEndingBlank",gt=!0),hn[1].type="lineEnding",zt=mn}else if(!(hn[1].type==="linePrefix"||hn[1].type==="blockQuotePrefix"||hn[1].type==="blockQuotePrefixWhitespace"||hn[1].type==="blockQuoteMarker"||hn[1].type==="listItemIndent"))break}fn&&(!zt||fn<zt)&&(jn._spread=!0),jn.end=Object.assign({},zt?H[zt][1].start:Tt[1].end),H.splice(zt||Ne,0,["exit",jn,Tt[2]]),Ne++,_e++}if(Tt[1].type==="listItemPrefix"){const mn={type:"listItem",_spread:!1,start:Object.assign({},Tt[1].start),end:void 0};jn=mn,H.splice(Ne,0,["enter",mn,Tt[2]]),Ne++,_e++,fn=void 0,sn=!0}}}return H[ie][1]._spread=gt,_e}function o(H,ie){return _e;function _e(Ne){d.call(this,H(Ne),Ne),ie&&ie.call(this,Ne)}}function c(){this.stack.push({type:"fragment",children:[]})}function d(H,ie,_e){this.stack[this.stack.length-1].children.push(H),this.stack.push(H),this.tokenStack.push([ie,_e||void 0]),H.position={start:ya(ie.start),end:void 0}}function p(H){return ie;function ie(_e){H&&H.call(this,_e),h.call(this,_e)}}function h(H,ie){const _e=this.stack.pop(),Ne=this.tokenStack.pop();if(Ne)Ne[0].type!==H.type&&(ie?ie.call(this,H,Ne[0]):(Ne[1]||Rx).call(this,H,Ne[0]));else throw new Error("Cannot close `"+H.type+"` ("+Ts({start:H.start,end:H.end})+"): it’s not open");_e.position.end=ya(H.end)}function y(){return Vh(this.stack.pop())}function b(){this.data.expectingFirstListItemValue=!0}function v(H){if(this.data.expectingFirstListItemValue){const ie=this.stack[this.stack.length-2];ie.start=Number.parseInt(this.sliceSerialize(H),10),this.data.expectingFirstListItemValue=void 0}}function _(){const H=this.resume(),ie=this.stack[this.stack.length-1];ie.lang=H}function k(){const H=this.resume(),ie=this.stack[this.stack.length-1];ie.meta=H}function A(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const H=this.resume(),ie=this.stack[this.stack.length-1];ie.value=H.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function E(){const H=this.resume(),ie=this.stack[this.stack.length-1];ie.value=H.replace(/(\r?\n|\r)$/g,"")}function T(H){const ie=this.resume(),_e=this.stack[this.stack.length-1];_e.label=ie,_e.identifier=ir(this.sliceSerialize(H)).toLowerCase()}function R(){const H=this.resume(),ie=this.stack[this.stack.length-1];ie.title=H}function Z(){const H=this.resume(),ie=this.stack[this.stack.length-1];ie.url=H}function D(H){const ie=this.stack[this.stack.length-1];if(!ie.depth){const _e=this.sliceSerialize(H).length;ie.depth=_e}}function M(){this.data.setextHeadingSlurpLineEnding=!0}function P(H){const ie=this.stack[this.stack.length-1];ie.depth=this.sliceSerialize(H).codePointAt(0)===61?1:2}function ae(){this.data.setextHeadingSlurpLineEnding=void 0}function K(H){const _e=this.stack[this.stack.length-1].children;let Ne=_e[_e.length-1];(!Ne||Ne.type!=="text")&&(Ne=xe(),Ne.position={start:ya(H.start),end:void 0},_e.push(Ne)),this.stack.push(Ne)}function z(H){const ie=this.stack.pop();ie.value+=this.sliceSerialize(H),ie.position.end=ya(H.end)}function le(H){const ie=this.stack[this.stack.length-1];if(this.data.atHardBreak){const _e=ie.children[ie.children.length-1];_e.position.end=ya(H.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(ie.type)&&(K.call(this,H),z.call(this,H))}function q(){this.data.atHardBreak=!0}function se(){const H=this.resume(),ie=this.stack[this.stack.length-1];ie.value=H}function de(){const H=this.resume(),ie=this.stack[this.stack.length-1];ie.value=H}function Y(){const H=this.resume(),ie=this.stack[this.stack.length-1];ie.value=H}function U(){const H=this.stack[this.stack.length-1];if(this.data.inReference){const ie=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=ie,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function F(){const H=this.stack[this.stack.length-1];if(this.data.inReference){const ie=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=ie,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function te(H){const ie=this.sliceSerialize(H),_e=this.stack[this.stack.length-2];_e.label=v3(ie),_e.identifier=ir(ie).toLowerCase()}function ve(){const H=this.stack[this.stack.length-1],ie=this.resume(),_e=this.stack[this.stack.length-1];if(this.data.inReference=!0,_e.type==="link"){const Ne=H.children;_e.children=Ne}else _e.alt=ie}function x(){const H=this.resume(),ie=this.stack[this.stack.length-1];ie.url=H}function j(){const H=this.resume(),ie=this.stack[this.stack.length-1];ie.title=H}function $(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function X(H){const ie=this.resume(),_e=this.stack[this.stack.length-1];_e.label=ie,_e.identifier=ir(this.sliceSerialize(H)).toLowerCase(),this.data.referenceType="full"}function ue(H){this.data.characterReferenceType=H.type}function ne(H){const ie=this.sliceSerialize(H),_e=this.data.characterReferenceType;let Ne;_e?(Ne=X1(ie,_e==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Ne=Ph(ie);const Ge=this.stack[this.stack.length-1];Ge.value+=Ne}function pe(H){const ie=this.stack.pop();ie.position.end=ya(H.end)}function ge(H){z.call(this,H);const ie=this.stack[this.stack.length-1];ie.url=this.sliceSerialize(H)}function Ae(H){z.call(this,H);const ie=this.stack[this.stack.length-1];ie.url="mailto:"+this.sliceSerialize(H)}function De(){return{type:"blockquote",children:[]}}function ke(){return{type:"code",lang:null,meta:null,value:""}}function Me(){return{type:"inlineCode",value:""}}function Ue(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ce(){return{type:"emphasis",children:[]}}function xt(){return{type:"heading",depth:0,children:[]}}function At(){return{type:"break"}}function it(){return{type:"html",value:""}}function Gt(){return{type:"image",title:null,url:"",alt:null}}function Pt(){return{type:"link",title:null,url:"",children:[]}}function B(H){return{type:"list",ordered:H.type==="listOrdered",start:null,spread:H._spread,children:[]}}function Q(H){return{type:"listItem",spread:H._spread,checked:null,children:[]}}function oe(){return{type:"paragraph",children:[]}}function we(){return{type:"strong",children:[]}}function xe(){return{type:"text",value:""}}function ye(){return{type:"thematicBreak"}}}function ya(e){return{line:e.line,column:e.column,offset:e.offset}}function s_(e,t){let r=-1;for(;++r<t.length;){const i=t[r];Array.isArray(i)?s_(e,i):S3(e,i)}}function S3(e,t){let r;for(r in t)if(l_.call(t,r))switch(r){case"canContainEols":{const i=t[r];i&&e[r].push(...i);break}case"transforms":{const i=t[r];i&&e[r].push(...i);break}case"enter":case"exit":{const i=t[r];i&&Object.assign(e[r],i);break}}}function Rx(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ts({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ts({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ts({start:t.start,end:t.end})+") is still open")}function j3(e){const t=this;t.parser=r;function r(i){return w3(i,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function N3(e,t){const r={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,r),e.applyData(t,r)}function E3(e,t){const r={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,r),[e.applyData(t,r),{type:"text",value:`
`}]}function C3(e,t){const r=t.value?t.value+`
`:"",i={},s=t.lang?t.lang.split(/\s+/):[];s.length>0&&(i.className=["language-"+s[0]]);let o={type:"element",tagName:"code",properties:i,children:[{type:"text",value:r}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function A3(e,t){const r={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function T3(e,t){const r={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function M3(e,t){const r=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=String(t.identifier).toUpperCase(),s=gl(i.toLowerCase()),o=e.footnoteOrder.indexOf(i);let c,d=e.footnoteCounts.get(i);d===void 0?(d=0,e.footnoteOrder.push(i),c=e.footnoteOrder.length):c=o+1,d+=1,e.footnoteCounts.set(i,d);const p={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+s,id:r+"fnref-"+s+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};e.patch(t,p);const h={type:"element",tagName:"sup",properties:{},children:[p]};return e.patch(t,h),e.applyData(t,h)}function R3(e,t){const r={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function O3(e,t){if(e.options.allowDangerousHtml){const r={type:"raw",value:t.value};return e.patch(t,r),e.applyData(t,r)}}function o_(e,t){const r=t.referenceType;let i="]";if(r==="collapsed"?i+="[]":r==="full"&&(i+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+i}];const s=e.all(t),o=s[0];o&&o.type==="text"?o.value="["+o.value:s.unshift({type:"text",value:"["});const c=s[s.length-1];return c&&c.type==="text"?c.value+=i:s.push({type:"text",value:i}),s}function z3(e,t){const r=String(t.identifier).toUpperCase(),i=e.definitionById.get(r);if(!i)return o_(e,t);const s={src:gl(i.url||""),alt:t.alt};i.title!==null&&i.title!==void 0&&(s.title=i.title);const o={type:"element",tagName:"img",properties:s,children:[]};return e.patch(t,o),e.applyData(t,o)}function D3(e,t){const r={src:gl(t.url)};t.alt!==null&&t.alt!==void 0&&(r.alt=t.alt),t.title!==null&&t.title!==void 0&&(r.title=t.title);const i={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,i),e.applyData(t,i)}function L3(e,t){const r={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,r);const i={type:"element",tagName:"code",properties:{},children:[r]};return e.patch(t,i),e.applyData(t,i)}function B3(e,t){const r=String(t.identifier).toUpperCase(),i=e.definitionById.get(r);if(!i)return o_(e,t);const s={href:gl(i.url||"")};i.title!==null&&i.title!==void 0&&(s.title=i.title);const o={type:"element",tagName:"a",properties:s,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function U3(e,t){const r={href:gl(t.url)};t.title!==null&&t.title!==void 0&&(r.title=t.title);const i={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function F3(e,t,r){const i=e.all(t),s=r?V3(r):u_(t),o={},c=[];if(typeof t.checked=="boolean"){const y=i[0];let b;y&&y.type==="element"&&y.tagName==="p"?b=y:(b={type:"element",tagName:"p",properties:{},children:[]},i.unshift(b)),b.children.length>0&&b.children.unshift({type:"text",value:" "}),b.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let d=-1;for(;++d<i.length;){const y=i[d];(s||d!==0||y.type!=="element"||y.tagName!=="p")&&c.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!s?c.push(...y.children):c.push(y)}const p=i[i.length-1];p&&(s||p.type!=="element"||p.tagName!=="p")&&c.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:o,children:c};return e.patch(t,h),e.applyData(t,h)}function V3(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const r=e.children;let i=-1;for(;!t&&++i<r.length;)t=u_(r[i])}return t}function u_(e){const t=e.spread;return t??e.children.length>1}function P3(e,t){const r={},i=e.all(t);let s=-1;for(typeof t.start=="number"&&t.start!==1&&(r.start=t.start);++s<i.length;){const c=i[s];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:r,children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function H3(e,t){const r={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function q3(e,t){const r={type:"root",children:e.wrap(e.all(t))};return e.patch(t,r),e.applyData(t,r)}function I3(e,t){const r={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function $3(e,t){const r=e.all(t),i=r.shift(),s=[];if(i){const c={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(t.children[0],c),s.push(c)}if(r.length>0){const c={type:"element",tagName:"tbody",properties:{},children:e.wrap(r,!0)},d=Lh(t.children[1]),p=H1(t.children[t.children.length-1]);d&&p&&(c.position={start:d,end:p}),s.push(c)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(s,!0)};return e.patch(t,o),e.applyData(t,o)}function Y3(e,t,r){const i=r?r.children:void 0,o=(i?i.indexOf(t):1)===0?"th":"td",c=r&&r.type==="table"?r.align:void 0,d=c?c.length:t.children.length;let p=-1;const h=[];for(;++p<d;){const b=t.children[p],v={},_=c?c[p]:void 0;_&&(v.align=_);let k={type:"element",tagName:o,properties:v,children:[]};b&&(k.children=e.all(b),e.patch(b,k),k=e.applyData(b,k)),h.push(k)}const y={type:"element",tagName:"tr",properties:{},children:e.wrap(h,!0)};return e.patch(t,y),e.applyData(t,y)}function Z3(e,t){const r={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}const Ox=9,zx=32;function G3(e){const t=String(e),r=/\r?\n|\r/g;let i=r.exec(t),s=0;const o=[];for(;i;)o.push(Dx(t.slice(s,i.index),s>0,!0),i[0]),s=i.index+i[0].length,i=r.exec(t);return o.push(Dx(t.slice(s),s>0,!1)),o.join("")}function Dx(e,t,r){let i=0,s=e.length;if(t){let o=e.codePointAt(i);for(;o===Ox||o===zx;)i++,o=e.codePointAt(i)}if(r){let o=e.codePointAt(s-1);for(;o===Ox||o===zx;)s--,o=e.codePointAt(s-1)}return s>i?e.slice(i,s):""}function J3(e,t){const r={type:"text",value:G3(String(t.value))};return e.patch(t,r),e.applyData(t,r)}function X3(e,t){const r={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,r),e.applyData(t,r)}const Q3={blockquote:N3,break:E3,code:C3,delete:A3,emphasis:T3,footnoteReference:M3,heading:R3,html:O3,imageReference:z3,image:D3,inlineCode:L3,linkReference:B3,link:U3,listItem:F3,list:P3,paragraph:H3,root:q3,strong:I3,table:$3,tableCell:Z3,tableRow:Y3,text:J3,thematicBreak:X3,toml:yu,yaml:yu,definition:yu,footnoteDefinition:yu};function yu(){}const c_=-1,bc=0,Rs=1,Qu=2,qh=3,Ih=4,$h=5,Yh=6,d_=7,f_=8,m_=typeof self=="object"?self:globalThis,Lx=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new m_[e](t)},K3=(e,t)=>{const r=(s,o)=>(e.set(o,s),s),i=s=>{if(e.has(s))return e.get(s);const[o,c]=t[s];switch(o){case bc:case c_:return r(c,s);case Rs:{const d=r([],s);for(const p of c)d.push(i(p));return d}case Qu:{const d=r({},s);for(const[p,h]of c)d[i(p)]=i(h);return d}case qh:return r(new Date(c),s);case Ih:{const{source:d,flags:p}=c;return r(new RegExp(d,p),s)}case $h:{const d=r(new Map,s);for(const[p,h]of c)d.set(i(p),i(h));return d}case Yh:{const d=r(new Set,s);for(const p of c)d.add(i(p));return d}case d_:{const{name:d,message:p}=c;return r(typeof m_[d]=="function"?Lx(d,p):new Error(p),s)}case f_:return r(BigInt(c),s);case"BigInt":return r(Object(BigInt(c)),s);case"ArrayBuffer":return r(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:d}=new Uint8Array(c);return r(new DataView(d),c)}}return r(Lx(o,c),s)};return i},Bx=e=>K3(new Map,e)(0),Ka="",{toString:W3}={},{keys:eM}=Object,ws=e=>{const t=typeof e;if(t!=="object"||!e)return[bc,t];const r=W3.call(e).slice(8,-1);switch(r){case"Array":return[Rs,Ka];case"Object":return[Qu,Ka];case"Date":return[qh,Ka];case"RegExp":return[Ih,Ka];case"Map":return[$h,Ka];case"Set":return[Yh,Ka];case"DataView":return[Rs,r]}return r.includes("Array")?[Rs,r]:e instanceof Error?[d_,e.name||"Error"]:[Qu,r]},bu=([e,t])=>e===bc&&(t==="function"||t==="symbol"),tM=(e,t,r,i)=>{const s=(c,d)=>{const p=i.push(c)-1;return r.set(d,p),p},o=c=>{if(r.has(c))return r.get(c);let[d,p]=ws(c);switch(d){case bc:{let y=c;switch(p){case"bigint":d=f_,y=c.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+p);y=null;break;case"undefined":return s([c_],c)}return s([d,y],c)}case Rs:{if(p){let v=c;return p==="DataView"?v=new Uint8Array(c.buffer):p==="ArrayBuffer"&&(v=new Uint8Array(c)),s([p,[...v]],c)}const y=[],b=s([d,y],c);for(const v of c)y.push(o(v));return b}case Qu:{if(p)switch(p){case"BigInt":return s([p,c.toString()],c);case"Boolean":case"Number":case"String":return s([p,c.valueOf()],c)}if(t&&"toJSON"in c)return o(c.toJSON());const y=[],b=s([d,y],c);for(const v of eM(c))(e||!bu(ws(c[v])))&&y.push([o(v),o(c[v])]);return b}case qh:return s([d,isNaN(c.getTime())?Ka:c.toISOString()],c);case Ih:{const{source:y,flags:b}=c;return s([d,{source:y,flags:b}],c)}case $h:{const y=[],b=s([d,y],c);for(const[v,_]of c)(e||!(bu(ws(v))||bu(ws(_))))&&y.push([o(v),o(_)]);return b}case Yh:{const y=[],b=s([d,y],c);for(const v of c)(e||!bu(ws(v)))&&y.push(o(v));return b}}const{message:h}=c;return s([d,{name:p,message:h}],c)};return o},Ux=(e,{json:t,lossy:r}={})=>{const i=[];return tM(!(t||r),!!t,new Map,i)(e),i},Ku=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Bx(Ux(e,t)):structuredClone(e):(e,t)=>Bx(Ux(e,t));function nM(e,t){const r=[{type:"text",value:"↩"}];return t>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),r}function rM(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function aM(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=e.options.footnoteBackContent||nM,i=e.options.footnoteBackLabel||rM,s=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",c=e.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let p=-1;for(;++p<e.footnoteOrder.length;){const h=e.footnoteById.get(e.footnoteOrder[p]);if(!h)continue;const y=e.all(h),b=String(h.identifier).toUpperCase(),v=gl(b.toLowerCase());let _=0;const k=[],A=e.footnoteCounts.get(b);for(;A!==void 0&&++_<=A;){k.length>0&&k.push({type:"text",value:" "});let T=typeof r=="string"?r:r(p,_);typeof T=="string"&&(T={type:"text",value:T}),k.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+v+(_>1?"-"+_:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(p,_),className:["data-footnote-backref"]},children:Array.isArray(T)?T:[T]})}const C=y[y.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const T=C.children[C.children.length-1];T&&T.type==="text"?T.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...k)}else y.push(...k);const E={type:"element",tagName:"li",properties:{id:t+"fn-"+v},children:e.wrap(y,!0)};e.patch(h,E),d.push(E)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Ku(c),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(d,!0)},{type:"text",value:`
`}]}}const xc=function(e){if(e==null)return oM;if(typeof e=="function")return vc(e);if(typeof e=="object")return Array.isArray(e)?iM(e):lM(e);if(typeof e=="string")return sM(e);throw new Error("Expected function, string, or object as test")};function iM(e){const t=[];let r=-1;for(;++r<e.length;)t[r]=xc(e[r]);return vc(i);function i(...s){let o=-1;for(;++o<t.length;)if(t[o].apply(this,s))return!0;return!1}}function lM(e){const t=e;return vc(r);function r(i){const s=i;let o;for(o in e)if(s[o]!==t[o])return!1;return!0}}function sM(e){return vc(t);function t(r){return r&&r.type===e}}function vc(e){return t;function t(r,i,s){return!!(uM(r)&&e.call(this,r,typeof i=="number"?i:void 0,s||void 0))}}function oM(){return!0}function uM(e){return e!==null&&typeof e=="object"&&"type"in e}const h_=[],cM=!0,oh=!1,dM="skip";function p_(e,t,r,i){let s;typeof t=="function"&&typeof r!="function"?(i=r,r=t):s=t;const o=xc(s),c=i?-1:1;d(e,void 0,[])();function d(p,h,y){const b=p&&typeof p=="object"?p:{};if(typeof b.type=="string"){const _=typeof b.tagName=="string"?b.tagName:typeof b.name=="string"?b.name:void 0;Object.defineProperty(v,"name",{value:"node ("+(p.type+(_?"<"+_+">":""))+")"})}return v;function v(){let _=h_,k,A,C;if((!t||o(p,h,y[y.length-1]||void 0))&&(_=fM(r(p,y)),_[0]===oh))return _;if("children"in p&&p.children){const E=p;if(E.children&&_[0]!==dM)for(A=(i?E.children.length:-1)+c,C=y.concat(E);A>-1&&A<E.children.length;){const T=E.children[A];if(k=d(T,A,C)(),k[0]===oh)return k;A=typeof k[1]=="number"?k[1]:A+c}}return _}}}function fM(e){return Array.isArray(e)?e:typeof e=="number"?[cM,e]:e==null?h_:[e]}function Zh(e,t,r,i){let s,o,c;typeof t=="function"?(o=void 0,c=t,s=r):(o=t,c=r,s=i),p_(e,o,d,s);function d(p,h){const y=h[h.length-1],b=y?y.children.indexOf(p):void 0;return c(p,b,y)}}const uh={}.hasOwnProperty,mM={};function hM(e,t){const r=t||mM,i=new Map,s=new Map,o=new Map,c={...Q3,...r.handlers},d={all:h,applyData:gM,definitionById:i,footnoteById:s,footnoteCounts:o,footnoteOrder:[],handlers:c,one:p,options:r,patch:pM,wrap:bM};return Zh(e,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const b=y.type==="definition"?i:s,v=String(y.identifier).toUpperCase();b.has(v)||b.set(v,y)}}),d;function p(y,b){const v=y.type,_=d.handlers[v];if(uh.call(d.handlers,v)&&_)return _(d,y,b);if(d.options.passThrough&&d.options.passThrough.includes(v)){if("children"in y){const{children:A,...C}=y,E=Ku(C);return E.children=d.all(y),E}return Ku(y)}return(d.options.unknownHandler||yM)(d,y,b)}function h(y){const b=[];if("children"in y){const v=y.children;let _=-1;for(;++_<v.length;){const k=d.one(v[_],y);if(k){if(_&&v[_-1].type==="break"&&(!Array.isArray(k)&&k.type==="text"&&(k.value=Fx(k.value)),!Array.isArray(k)&&k.type==="element")){const A=k.children[0];A&&A.type==="text"&&(A.value=Fx(A.value))}Array.isArray(k)?b.push(...k):b.push(k)}}}return b}}function pM(e,t){e.position&&(t.position=rA(e))}function gM(e,t){let r=t;if(e&&e.data){const i=e.data.hName,s=e.data.hChildren,o=e.data.hProperties;if(typeof i=="string")if(r.type==="element")r.tagName=i;else{const c="children"in r?r.children:[r];r={type:"element",tagName:i,properties:{},children:c}}r.type==="element"&&o&&Object.assign(r.properties,Ku(o)),"children"in r&&r.children&&s!==null&&s!==void 0&&(r.children=s)}return r}function yM(e,t){const r=t.data||{},i="value"in t&&!(uh.call(r,"hProperties")||uh.call(r,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function bM(e,t){const r=[];let i=-1;for(t&&r.push({type:"text",value:`
`});++i<e.length;)i&&r.push({type:"text",value:`
`}),r.push(e[i]);return t&&e.length>0&&r.push({type:"text",value:`
`}),r}function Fx(e){let t=0,r=e.charCodeAt(t);for(;r===9||r===32;)t++,r=e.charCodeAt(t);return e.slice(t)}function Vx(e,t){const r=hM(e,t),i=r.one(e,void 0),s=aM(r),o=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return s&&o.children.push({type:"text",value:`
`},s),o}function xM(e,t){return e&&"run"in e?async function(r,i){const s=Vx(r,{file:i,...t});await e.run(s,i)}:function(r,i){return Vx(r,{file:i,...e||t})}}function Px(e){if(e)throw e}var vm,Hx;function vM(){if(Hx)return vm;Hx=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=function(h){return typeof Array.isArray=="function"?Array.isArray(h):t.call(h)==="[object Array]"},o=function(h){if(!h||t.call(h)!=="[object Object]")return!1;var y=e.call(h,"constructor"),b=h.constructor&&h.constructor.prototype&&e.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!y&&!b)return!1;var v;for(v in h);return typeof v>"u"||e.call(h,v)},c=function(h,y){r&&y.name==="__proto__"?r(h,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):h[y.name]=y.newValue},d=function(h,y){if(y==="__proto__")if(e.call(h,y)){if(i)return i(h,y).value}else return;return h[y]};return vm=function p(){var h,y,b,v,_,k,A=arguments[0],C=1,E=arguments.length,T=!1;for(typeof A=="boolean"&&(T=A,A=arguments[1]||{},C=2),(A==null||typeof A!="object"&&typeof A!="function")&&(A={});C<E;++C)if(h=arguments[C],h!=null)for(y in h)b=d(A,y),v=d(h,y),A!==v&&(T&&v&&(o(v)||(_=s(v)))?(_?(_=!1,k=b&&s(b)?b:[]):k=b&&o(b)?b:{},c(A,{name:y,newValue:p(T,k,v)})):typeof v<"u"&&c(A,{name:y,newValue:v}));return A},vm}var _M=vM();const _m=mh(_M);function ch(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function wM(){const e=[],t={run:r,use:i};return t;function r(...s){let o=-1;const c=s.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);d(null,...s);function d(p,...h){const y=e[++o];let b=-1;if(p){c(p);return}for(;++b<s.length;)(h[b]===null||h[b]===void 0)&&(h[b]=s[b]);s=h,y?kM(y,d)(...h):c(null,...h)}}function i(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return e.push(s),t}}function kM(e,t){let r;return i;function i(...c){const d=e.length>c.length;let p;d&&c.push(s);try{p=e.apply(this,c)}catch(h){const y=h;if(d&&r)throw y;return s(y)}d||(p&&p.then&&typeof p.then=="function"?p.then(o,s):p instanceof Error?s(p):o(p))}function s(c,...d){r||(r=!0,t(c,...d))}function o(c){s(null,c)}}const yr={basename:SM,dirname:jM,extname:NM,join:EM,sep:"/"};function SM(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ws(e);let r=0,i=-1,s=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;s--;)if(e.codePointAt(s)===47){if(o){r=s+1;break}}else i<0&&(o=!0,i=s+1);return i<0?"":e.slice(r,i)}if(t===e)return"";let c=-1,d=t.length-1;for(;s--;)if(e.codePointAt(s)===47){if(o){r=s+1;break}}else c<0&&(o=!0,c=s+1),d>-1&&(e.codePointAt(s)===t.codePointAt(d--)?d<0&&(i=s):(d=-1,i=c));return r===i?i=c:i<0&&(i=e.length),e.slice(r,i)}function jM(e){if(Ws(e),e.length===0)return".";let t=-1,r=e.length,i;for(;--r;)if(e.codePointAt(r)===47){if(i){t=r;break}}else i||(i=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function NM(e){Ws(e);let t=e.length,r=-1,i=0,s=-1,o=0,c;for(;t--;){const d=e.codePointAt(t);if(d===47){if(c){i=t+1;break}continue}r<0&&(c=!0,r=t+1),d===46?s<0?s=t:o!==1&&(o=1):s>-1&&(o=-1)}return s<0||r<0||o===0||o===1&&s===r-1&&s===i+1?"":e.slice(s,r)}function EM(...e){let t=-1,r;for(;++t<e.length;)Ws(e[t]),e[t]&&(r=r===void 0?e[t]:r+"/"+e[t]);return r===void 0?".":CM(r)}function CM(e){Ws(e);const t=e.codePointAt(0)===47;let r=AM(e,!t);return r.length===0&&!t&&(r="."),r.length>0&&e.codePointAt(e.length-1)===47&&(r+="/"),t?"/"+r:r}function AM(e,t){let r="",i=0,s=-1,o=0,c=-1,d,p;for(;++c<=e.length;){if(c<e.length)d=e.codePointAt(c);else{if(d===47)break;d=47}if(d===47){if(!(s===c-1||o===1))if(s!==c-1&&o===2){if(r.length<2||i!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(p=r.lastIndexOf("/"),p!==r.length-1){p<0?(r="",i=0):(r=r.slice(0,p),i=r.length-1-r.lastIndexOf("/")),s=c,o=0;continue}}else if(r.length>0){r="",i=0,s=c,o=0;continue}}t&&(r=r.length>0?r+"/..":"..",i=2)}else r.length>0?r+="/"+e.slice(s+1,c):r=e.slice(s+1,c),i=c-s-1;s=c,o=0}else d===46&&o>-1?o++:o=-1}return r}function Ws(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const TM={cwd:MM};function MM(){return"/"}function dh(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function RM(e){if(typeof e=="string")e=new URL(e);else if(!dh(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return OM(e)}function OM(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const t=e.pathname;let r=-1;for(;++r<t.length;)if(t.codePointAt(r)===37&&t.codePointAt(r+1)===50){const i=t.codePointAt(r+2);if(i===70||i===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(t)}const wm=["history","path","basename","stem","extname","dirname"];class g_{constructor(t){let r;t?dh(t)?r={path:t}:typeof t=="string"||zM(t)?r={value:t}:r=t:r={},this.cwd="cwd"in r?"":TM.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<wm.length;){const o=wm[i];o in r&&r[o]!==void 0&&r[o]!==null&&(this[o]=o==="history"?[...r[o]]:r[o])}let s;for(s in r)wm.includes(s)||(this[s]=r[s])}get basename(){return typeof this.path=="string"?yr.basename(this.path):void 0}set basename(t){Sm(t,"basename"),km(t,"basename"),this.path=yr.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?yr.dirname(this.path):void 0}set dirname(t){qx(this.basename,"dirname"),this.path=yr.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?yr.extname(this.path):void 0}set extname(t){if(km(t,"extname"),qx(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=yr.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){dh(t)&&(t=RM(t)),Sm(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?yr.basename(this.path,this.extname):void 0}set stem(t){Sm(t,"stem"),km(t,"stem"),this.path=yr.join(this.dirname||"",t+(this.extname||""))}fail(t,r,i){const s=this.message(t,r,i);throw s.fatal=!0,s}info(t,r,i){const s=this.message(t,r,i);return s.fatal=void 0,s}message(t,r,i){const s=new ln(t,r,i);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function km(e,t){if(e&&e.includes(yr.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+yr.sep+"`")}function Sm(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function qx(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function zM(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const DM=function(e){const i=this.constructor.prototype,s=i[e],o=function(){return s.apply(o,arguments)};return Object.setPrototypeOf(o,i),o},LM={}.hasOwnProperty;class Gh extends DM{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=wM()}copy(){const t=new Gh;let r=-1;for(;++r<this.attachers.length;){const i=this.attachers[r];t.use(...i)}return t.data(_m(!0,{},this.namespace)),t}data(t,r){return typeof t=="string"?arguments.length===2?(Em("data",this.frozen),this.namespace[t]=r,this):LM.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Em("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const s=r.call(t,...i);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const r=xu(t),i=this.parser||this.Parser;return jm("parse",i),i(String(r),r)}process(t,r){const i=this;return this.freeze(),jm("process",this.parser||this.Parser),Nm("process",this.compiler||this.Compiler),r?s(void 0,r):new Promise(s);function s(o,c){const d=xu(t),p=i.parse(d);i.run(p,d,function(y,b,v){if(y||!b||!v)return h(y);const _=b,k=i.stringify(_,v);FM(k)?v.value=k:v.result=k,h(y,v)});function h(y,b){y||!b?c(y):o?o(b):r(void 0,b)}}}processSync(t){let r=!1,i;return this.freeze(),jm("processSync",this.parser||this.Parser),Nm("processSync",this.compiler||this.Compiler),this.process(t,s),$x("processSync","process",r),i;function s(o,c){r=!0,Px(o),i=c}}run(t,r,i){Ix(t),this.freeze();const s=this.transformers;return!i&&typeof r=="function"&&(i=r,r=void 0),i?o(void 0,i):new Promise(o);function o(c,d){const p=xu(r);s.run(t,p,h);function h(y,b,v){const _=b||t;y?d(y):c?c(_):i(void 0,_,v)}}}runSync(t,r){let i=!1,s;return this.run(t,r,o),$x("runSync","run",i),s;function o(c,d){Px(c),s=d,i=!0}}stringify(t,r){this.freeze();const i=xu(r),s=this.compiler||this.Compiler;return Nm("stringify",s),Ix(t),s(t,i)}use(t,...r){const i=this.attachers,s=this.namespace;if(Em("use",this.frozen),t!=null)if(typeof t=="function")p(t,r);else if(typeof t=="object")Array.isArray(t)?d(t):c(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(h){if(typeof h=="function")p(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[y,...b]=h;p(y,b)}else c(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function c(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(h.plugins),h.settings&&(s.settings=_m(!0,s.settings,h.settings))}function d(h){let y=-1;if(h!=null)if(Array.isArray(h))for(;++y<h.length;){const b=h[y];o(b)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function p(h,y){let b=-1,v=-1;for(;++b<i.length;)if(i[b][0]===h){v=b;break}if(v===-1)i.push([h,...y]);else if(y.length>0){let[_,...k]=y;const A=i[v][1];ch(A)&&ch(_)&&(_=_m(!0,A,_)),i[v]=[h,_,...k]}}}}const BM=new Gh().freeze();function jm(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Nm(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Em(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Ix(e){if(!ch(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function $x(e,t,r){if(!r)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function xu(e){return UM(e)?e:new g_(e)}function UM(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function FM(e){return typeof e=="string"||VM(e)}function VM(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const PM="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Yx=[],Zx={allowDangerousHtml:!0},HM=/^(https?|ircs?|mailto|xmpp)$/i,qM=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function IM(e){const t=$M(e),r=YM(e);return ZM(t.runSync(t.parse(r),r),e)}function $M(e){const t=e.rehypePlugins||Yx,r=e.remarkPlugins||Yx,i=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Zx}:Zx;return BM().use(j3).use(r).use(xM,i).use(t)}function YM(e){const t=e.children||"",r=new g_;return typeof t=="string"&&(r.value=t),r}function ZM(e,t){const r=t.allowedElements,i=t.allowElement,s=t.components,o=t.disallowedElements,c=t.skipHtml,d=t.unwrapDisallowed,p=t.urlTransform||GM;for(const y of qM)Object.hasOwn(t,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+PM+y.id,void 0);return Zh(e,h),oA(e,{Fragment:f.Fragment,components:s,ignoreInvalidStyle:!0,jsx:f.jsx,jsxs:f.jsxs,passKeys:!0,passNode:!0});function h(y,b,v){if(y.type==="raw"&&v&&typeof b=="number")return c?v.children.splice(b,1):v.children[b]={type:"text",value:y.value},b;if(y.type==="element"){let _;for(_ in ym)if(Object.hasOwn(ym,_)&&Object.hasOwn(y.properties,_)){const k=y.properties[_],A=ym[_];(A===null||A.includes(y.tagName))&&(y.properties[_]=p(String(k||""),_,y))}}if(y.type==="element"){let _=r?!r.includes(y.tagName):o?o.includes(y.tagName):!1;if(!_&&i&&typeof b=="number"&&(_=!i(y,b,v)),_&&v&&typeof b=="number")return d&&y.children?v.children.splice(b,1,...y.children):v.children.splice(b,1),b}}}function GM(e){const t=e.indexOf(":"),r=e.indexOf("?"),i=e.indexOf("#"),s=e.indexOf("/");return t===-1||s!==-1&&t>s||r!==-1&&t>r||i!==-1&&t>i||HM.test(e.slice(0,t))?e:""}function Gx(e,t){const r=String(e);if(typeof t!="string")throw new TypeError("Expected character");let i=0,s=r.indexOf(t);for(;s!==-1;)i++,s=r.indexOf(t,s+t.length);return i}function JM(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function XM(e,t,r){const s=xc((r||{}).ignore||[]),o=QM(t);let c=-1;for(;++c<o.length;)p_(e,"text",d);function d(h,y){let b=-1,v;for(;++b<y.length;){const _=y[b],k=v?v.children:void 0;if(s(_,k?k.indexOf(_):void 0,v))return;v=_}if(v)return p(h,y)}function p(h,y){const b=y[y.length-1],v=o[c][0],_=o[c][1];let k=0;const C=b.children.indexOf(h);let E=!1,T=[];v.lastIndex=0;let R=v.exec(h.value);for(;R;){const Z=R.index,D={index:R.index,input:R.input,stack:[...y,h]};let M=_(...R,D);if(typeof M=="string"&&(M=M.length>0?{type:"text",value:M}:void 0),M===!1?v.lastIndex=Z+1:(k!==Z&&T.push({type:"text",value:h.value.slice(k,Z)}),Array.isArray(M)?T.push(...M):M&&T.push(M),k=Z+R[0].length,E=!0),!v.global)break;R=v.exec(h.value)}return E?(k<h.value.length&&T.push({type:"text",value:h.value.slice(k)}),b.children.splice(C,1,...T)):T=[h],C+T.length}}function QM(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const r=!e[0]||Array.isArray(e[0])?e:[e];let i=-1;for(;++i<r.length;){const s=r[i];t.push([KM(s[0]),WM(s[1])])}return t}function KM(e){return typeof e=="string"?new RegExp(JM(e),"g"):e}function WM(e){return typeof e=="function"?e:function(){return e}}const Cm="phrasing",Am=["autolink","link","image","label"];function eR(){return{transforms:[sR],enter:{literalAutolink:nR,literalAutolinkEmail:Tm,literalAutolinkHttp:Tm,literalAutolinkWww:Tm},exit:{literalAutolink:lR,literalAutolinkEmail:iR,literalAutolinkHttp:rR,literalAutolinkWww:aR}}}function tR(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Cm,notInConstruct:Am},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Cm,notInConstruct:Am},{character:":",before:"[ps]",after:"\\/",inConstruct:Cm,notInConstruct:Am}]}}function nR(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Tm(e){this.config.enter.autolinkProtocol.call(this,e)}function rR(e){this.config.exit.autolinkProtocol.call(this,e)}function aR(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function iR(e){this.config.exit.autolinkEmail.call(this,e)}function lR(e){this.exit(e)}function sR(e){XM(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,oR],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),uR]],{ignore:["link","linkReference"]})}function oR(e,t,r,i,s){let o="";if(!y_(s)||(/^w/i.test(t)&&(r=t+r,t="",o="http://"),!cR(r)))return!1;const c=dR(r+i);if(!c[0])return!1;const d={type:"link",title:null,url:o+t+c[0],children:[{type:"text",value:t+c[0]}]};return c[1]?[d,{type:"text",value:c[1]}]:d}function uR(e,t,r,i){return!y_(i,!0)||/[-\d_]$/.test(r)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+r,children:[{type:"text",value:t+"@"+r}]}}function cR(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function dR(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let r=t[0],i=r.indexOf(")");const s=Gx(e,"(");let o=Gx(e,")");for(;i!==-1&&s>o;)e+=r.slice(0,i+1),r=r.slice(i+1),i=r.indexOf(")"),o++;return[e,r]}function y_(e,t){const r=e.input.charCodeAt(e.index-1);return(e.index===0||oi(r)||gc(r))&&(!t||r!==47)}b_.peek=vR;function fR(){this.buffer()}function mR(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function hR(){this.buffer()}function pR(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function gR(e){const t=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=ir(this.sliceSerialize(e)).toLowerCase(),r.label=t}function yR(e){this.exit(e)}function bR(e){const t=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=ir(this.sliceSerialize(e)).toLowerCase(),r.label=t}function xR(e){this.exit(e)}function vR(){return"["}function b_(e,t,r,i){const s=r.createTracker(i);let o=s.move("[^");const c=r.enter("footnoteReference"),d=r.enter("reference");return o+=s.move(r.safe(r.associationId(e),{after:"]",before:o})),d(),c(),o+=s.move("]"),o}function _R(){return{enter:{gfmFootnoteCallString:fR,gfmFootnoteCall:mR,gfmFootnoteDefinitionLabelString:hR,gfmFootnoteDefinition:pR},exit:{gfmFootnoteCallString:gR,gfmFootnoteCall:yR,gfmFootnoteDefinitionLabelString:bR,gfmFootnoteDefinition:xR}}}function wR(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:r,footnoteReference:b_},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function r(i,s,o,c){const d=o.createTracker(c);let p=d.move("[^");const h=o.enter("footnoteDefinition"),y=o.enter("label");return p+=d.move(o.safe(o.associationId(i),{before:p,after:"]"})),y(),p+=d.move("]:"),i.children&&i.children.length>0&&(d.shift(4),p+=d.move((t?`
`:" ")+o.indentLines(o.containerFlow(i,d.current()),t?x_:kR))),h(),p}}function kR(e,t,r){return t===0?e:x_(e,t,r)}function x_(e,t,r){return(r?"":"    ")+e}const SR=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];v_.peek=AR;function jR(){return{canContainEols:["delete"],enter:{strikethrough:ER},exit:{strikethrough:CR}}}function NR(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:SR}],handlers:{delete:v_}}}function ER(e){this.enter({type:"delete",children:[]},e)}function CR(e){this.exit(e)}function v_(e,t,r,i){const s=r.createTracker(i),o=r.enter("strikethrough");let c=s.move("~~");return c+=r.containerPhrasing(e,{...s.current(),before:c,after:"~"}),c+=s.move("~~"),o(),c}function AR(){return"~"}function TR(e){return e.length}function MR(e,t){const r=t||{},i=(r.align||[]).concat(),s=r.stringLength||TR,o=[],c=[],d=[],p=[];let h=0,y=-1;for(;++y<e.length;){const A=[],C=[];let E=-1;for(e[y].length>h&&(h=e[y].length);++E<e[y].length;){const T=RR(e[y][E]);if(r.alignDelimiters!==!1){const R=s(T);C[E]=R,(p[E]===void 0||R>p[E])&&(p[E]=R)}A.push(T)}c[y]=A,d[y]=C}let b=-1;if(typeof i=="object"&&"length"in i)for(;++b<h;)o[b]=Jx(i[b]);else{const A=Jx(i);for(;++b<h;)o[b]=A}b=-1;const v=[],_=[];for(;++b<h;){const A=o[b];let C="",E="";A===99?(C=":",E=":"):A===108?C=":":A===114&&(E=":");let T=r.alignDelimiters===!1?1:Math.max(1,p[b]-C.length-E.length);const R=C+"-".repeat(T)+E;r.alignDelimiters!==!1&&(T=C.length+T+E.length,T>p[b]&&(p[b]=T),_[b]=T),v[b]=R}c.splice(1,0,v),d.splice(1,0,_),y=-1;const k=[];for(;++y<c.length;){const A=c[y],C=d[y];b=-1;const E=[];for(;++b<h;){const T=A[b]||"";let R="",Z="";if(r.alignDelimiters!==!1){const D=p[b]-(C[b]||0),M=o[b];M===114?R=" ".repeat(D):M===99?D%2?(R=" ".repeat(D/2+.5),Z=" ".repeat(D/2-.5)):(R=" ".repeat(D/2),Z=R):Z=" ".repeat(D)}r.delimiterStart!==!1&&!b&&E.push("|"),r.padding!==!1&&!(r.alignDelimiters===!1&&T==="")&&(r.delimiterStart!==!1||b)&&E.push(" "),r.alignDelimiters!==!1&&E.push(R),E.push(T),r.alignDelimiters!==!1&&E.push(Z),r.padding!==!1&&E.push(" "),(r.delimiterEnd!==!1||b!==h-1)&&E.push("|")}k.push(r.delimiterEnd===!1?E.join("").replace(/ +$/,""):E.join(""))}return k.join(`
`)}function RR(e){return e==null?"":String(e)}function Jx(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function OR(e,t,r,i){const s=r.enter("blockquote"),o=r.createTracker(i);o.move("> "),o.shift(2);const c=r.indentLines(r.containerFlow(e,o.current()),zR);return s(),c}function zR(e,t,r){return">"+(r?"":" ")+e}function DR(e,t){return Xx(e,t.inConstruct,!0)&&!Xx(e,t.notInConstruct,!1)}function Xx(e,t,r){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return r;let i=-1;for(;++i<t.length;)if(e.includes(t[i]))return!0;return!1}function Qx(e,t,r,i){let s=-1;for(;++s<r.unsafe.length;)if(r.unsafe[s].character===`
`&&DR(r.stack,r.unsafe[s]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function LR(e,t){const r=String(e);let i=r.indexOf(t),s=i,o=0,c=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===s?++o>c&&(c=o):o=1,s=i+t.length,i=r.indexOf(t,s);return c}function BR(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function UR(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function FR(e,t,r,i){const s=UR(r),o=e.value||"",c=s==="`"?"GraveAccent":"Tilde";if(BR(e,r)){const b=r.enter("codeIndented"),v=r.indentLines(o,VR);return b(),v}const d=r.createTracker(i),p=s.repeat(Math.max(LR(o,s)+1,3)),h=r.enter("codeFenced");let y=d.move(p);if(e.lang){const b=r.enter(`codeFencedLang${c}`);y+=d.move(r.safe(e.lang,{before:y,after:" ",encode:["`"],...d.current()})),b()}if(e.lang&&e.meta){const b=r.enter(`codeFencedMeta${c}`);y+=d.move(" "),y+=d.move(r.safe(e.meta,{before:y,after:`
`,encode:["`"],...d.current()})),b()}return y+=d.move(`
`),o&&(y+=d.move(o+`
`)),y+=d.move(p),h(),y}function VR(e,t,r){return(r?"":"    ")+e}function Jh(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function PR(e,t,r,i){const s=Jh(r),o=s==='"'?"Quote":"Apostrophe",c=r.enter("definition");let d=r.enter("label");const p=r.createTracker(i);let h=p.move("[");return h+=p.move(r.safe(r.associationId(e),{before:h,after:"]",...p.current()})),h+=p.move("]: "),d(),!e.url||/[\0- \u007F]/.test(e.url)?(d=r.enter("destinationLiteral"),h+=p.move("<"),h+=p.move(r.safe(e.url,{before:h,after:">",...p.current()})),h+=p.move(">")):(d=r.enter("destinationRaw"),h+=p.move(r.safe(e.url,{before:h,after:e.title?" ":`
`,...p.current()}))),d(),e.title&&(d=r.enter(`title${o}`),h+=p.move(" "+s),h+=p.move(r.safe(e.title,{before:h,after:s,...p.current()})),h+=p.move(s),d()),c(),h}function HR(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function qs(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Wu(e,t,r){const i=ul(e),s=ul(t);return i===void 0?s===void 0?r==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}__.peek=qR;function __(e,t,r,i){const s=HR(r),o=r.enter("emphasis"),c=r.createTracker(i),d=c.move(s);let p=c.move(r.containerPhrasing(e,{after:s,before:d,...c.current()}));const h=p.charCodeAt(0),y=Wu(i.before.charCodeAt(i.before.length-1),h,s);y.inside&&(p=qs(h)+p.slice(1));const b=p.charCodeAt(p.length-1),v=Wu(i.after.charCodeAt(0),b,s);v.inside&&(p=p.slice(0,-1)+qs(b));const _=c.move(s);return o(),r.attentionEncodeSurroundingInfo={after:v.outside,before:y.outside},d+p+_}function qR(e,t,r){return r.options.emphasis||"*"}function IR(e,t){let r=!1;return Zh(e,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return r=!0,oh}),!!((!e.depth||e.depth<3)&&Vh(e)&&(t.options.setext||r))}function $R(e,t,r,i){const s=Math.max(Math.min(6,e.depth||1),1),o=r.createTracker(i);if(IR(e,r)){const y=r.enter("headingSetext"),b=r.enter("phrasing"),v=r.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return b(),y(),v+`
`+(s===1?"=":"-").repeat(v.length-(Math.max(v.lastIndexOf("\r"),v.lastIndexOf(`
`))+1))}const c="#".repeat(s),d=r.enter("headingAtx"),p=r.enter("phrasing");o.move(c+" ");let h=r.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(h)&&(h=qs(h.charCodeAt(0))+h.slice(1)),h=h?c+" "+h:c,r.options.closeAtx&&(h+=" "+c),p(),d(),h}w_.peek=YR;function w_(e){return e.value||""}function YR(){return"<"}k_.peek=ZR;function k_(e,t,r,i){const s=Jh(r),o=s==='"'?"Quote":"Apostrophe",c=r.enter("image");let d=r.enter("label");const p=r.createTracker(i);let h=p.move("![");return h+=p.move(r.safe(e.alt,{before:h,after:"]",...p.current()})),h+=p.move("]("),d(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(d=r.enter("destinationLiteral"),h+=p.move("<"),h+=p.move(r.safe(e.url,{before:h,after:">",...p.current()})),h+=p.move(">")):(d=r.enter("destinationRaw"),h+=p.move(r.safe(e.url,{before:h,after:e.title?" ":")",...p.current()}))),d(),e.title&&(d=r.enter(`title${o}`),h+=p.move(" "+s),h+=p.move(r.safe(e.title,{before:h,after:s,...p.current()})),h+=p.move(s),d()),h+=p.move(")"),c(),h}function ZR(){return"!"}S_.peek=GR;function S_(e,t,r,i){const s=e.referenceType,o=r.enter("imageReference");let c=r.enter("label");const d=r.createTracker(i);let p=d.move("![");const h=r.safe(e.alt,{before:p,after:"]",...d.current()});p+=d.move(h+"]["),c();const y=r.stack;r.stack=[],c=r.enter("reference");const b=r.safe(r.associationId(e),{before:p,after:"]",...d.current()});return c(),r.stack=y,o(),s==="full"||!h||h!==b?p+=d.move(b+"]"):s==="shortcut"?p=p.slice(0,-1):p+=d.move("]"),p}function GR(){return"!"}j_.peek=JR;function j_(e,t,r){let i=e.value||"",s="`",o=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(i);)s+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++o<r.unsafe.length;){const c=r.unsafe[o],d=r.compilePattern(c);let p;if(c.atBreak)for(;p=d.exec(i);){let h=p.index;i.charCodeAt(h)===10&&i.charCodeAt(h-1)===13&&h--,i=i.slice(0,h)+" "+i.slice(p.index+1)}}return s+i+s}function JR(){return"`"}function N_(e,t){const r=Vh(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(r===e.url||"mailto:"+r===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}E_.peek=XR;function E_(e,t,r,i){const s=Jh(r),o=s==='"'?"Quote":"Apostrophe",c=r.createTracker(i);let d,p;if(N_(e,r)){const y=r.stack;r.stack=[],d=r.enter("autolink");let b=c.move("<");return b+=c.move(r.containerPhrasing(e,{before:b,after:">",...c.current()})),b+=c.move(">"),d(),r.stack=y,b}d=r.enter("link"),p=r.enter("label");let h=c.move("[");return h+=c.move(r.containerPhrasing(e,{before:h,after:"](",...c.current()})),h+=c.move("]("),p(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(p=r.enter("destinationLiteral"),h+=c.move("<"),h+=c.move(r.safe(e.url,{before:h,after:">",...c.current()})),h+=c.move(">")):(p=r.enter("destinationRaw"),h+=c.move(r.safe(e.url,{before:h,after:e.title?" ":")",...c.current()}))),p(),e.title&&(p=r.enter(`title${o}`),h+=c.move(" "+s),h+=c.move(r.safe(e.title,{before:h,after:s,...c.current()})),h+=c.move(s),p()),h+=c.move(")"),d(),h}function XR(e,t,r){return N_(e,r)?"<":"["}C_.peek=QR;function C_(e,t,r,i){const s=e.referenceType,o=r.enter("linkReference");let c=r.enter("label");const d=r.createTracker(i);let p=d.move("[");const h=r.containerPhrasing(e,{before:p,after:"]",...d.current()});p+=d.move(h+"]["),c();const y=r.stack;r.stack=[],c=r.enter("reference");const b=r.safe(r.associationId(e),{before:p,after:"]",...d.current()});return c(),r.stack=y,o(),s==="full"||!h||h!==b?p+=d.move(b+"]"):s==="shortcut"?p=p.slice(0,-1):p+=d.move("]"),p}function QR(){return"["}function Xh(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function KR(e){const t=Xh(e),r=e.options.bulletOther;if(!r)return t==="*"?"-":"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(r===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+r+"`) to be different");return r}function WR(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function A_(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function e6(e,t,r,i){const s=r.enter("list"),o=r.bulletCurrent;let c=e.ordered?WR(r):Xh(r);const d=e.ordered?c==="."?")":".":KR(r);let p=t&&r.bulletLastUsed?c===r.bulletLastUsed:!1;if(!e.ordered){const y=e.children?e.children[0]:void 0;if((c==="*"||c==="-")&&y&&(!y.children||!y.children[0])&&r.stack[r.stack.length-1]==="list"&&r.stack[r.stack.length-2]==="listItem"&&r.stack[r.stack.length-3]==="list"&&r.stack[r.stack.length-4]==="listItem"&&r.indexStack[r.indexStack.length-1]===0&&r.indexStack[r.indexStack.length-2]===0&&r.indexStack[r.indexStack.length-3]===0&&(p=!0),A_(r)===c&&y){let b=-1;for(;++b<e.children.length;){const v=e.children[b];if(v&&v.type==="listItem"&&v.children&&v.children[0]&&v.children[0].type==="thematicBreak"){p=!0;break}}}}p&&(c=d),r.bulletCurrent=c;const h=r.containerFlow(e,i);return r.bulletLastUsed=c,r.bulletCurrent=o,s(),h}function t6(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function n6(e,t,r,i){const s=t6(r);let o=r.bulletCurrent||Xh(r);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(r.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let c=o.length+1;(s==="tab"||s==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(c=Math.ceil(c/4)*4);const d=r.createTracker(i);d.move(o+" ".repeat(c-o.length)),d.shift(c);const p=r.enter("listItem"),h=r.indentLines(r.containerFlow(e,d.current()),y);return p(),h;function y(b,v,_){return v?(_?"":" ".repeat(c))+b:(_?o:o+" ".repeat(c-o.length))+b}}function r6(e,t,r,i){const s=r.enter("paragraph"),o=r.enter("phrasing"),c=r.containerPhrasing(e,i);return o(),s(),c}const a6=xc(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function i6(e,t,r,i){return(e.children.some(function(c){return a6(c)})?r.containerPhrasing:r.containerFlow).call(r,e,i)}function l6(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}T_.peek=s6;function T_(e,t,r,i){const s=l6(r),o=r.enter("strong"),c=r.createTracker(i),d=c.move(s+s);let p=c.move(r.containerPhrasing(e,{after:s,before:d,...c.current()}));const h=p.charCodeAt(0),y=Wu(i.before.charCodeAt(i.before.length-1),h,s);y.inside&&(p=qs(h)+p.slice(1));const b=p.charCodeAt(p.length-1),v=Wu(i.after.charCodeAt(0),b,s);v.inside&&(p=p.slice(0,-1)+qs(b));const _=c.move(s+s);return o(),r.attentionEncodeSurroundingInfo={after:v.outside,before:y.outside},d+p+_}function s6(e,t,r){return r.options.strong||"*"}function o6(e,t,r,i){return r.safe(e.value,i)}function u6(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function c6(e,t,r){const i=(A_(r)+(r.options.ruleSpaces?" ":"")).repeat(u6(r));return r.options.ruleSpaces?i.slice(0,-1):i}const M_={blockquote:OR,break:Qx,code:FR,definition:PR,emphasis:__,hardBreak:Qx,heading:$R,html:w_,image:k_,imageReference:S_,inlineCode:j_,link:E_,linkReference:C_,list:e6,listItem:n6,paragraph:r6,root:i6,strong:T_,text:o6,thematicBreak:c6};function d6(){return{enter:{table:f6,tableData:Kx,tableHeader:Kx,tableRow:h6},exit:{codeText:p6,table:m6,tableData:Mm,tableHeader:Mm,tableRow:Mm}}}function f6(e){const t=e._align;this.enter({type:"table",align:t.map(function(r){return r==="none"?null:r}),children:[]},e),this.data.inTable=!0}function m6(e){this.exit(e),this.data.inTable=void 0}function h6(e){this.enter({type:"tableRow",children:[]},e)}function Mm(e){this.exit(e)}function Kx(e){this.enter({type:"tableCell",children:[]},e)}function p6(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,g6));const r=this.stack[this.stack.length-1];r.type,r.value=t,this.exit(e)}function g6(e,t){return t==="|"?t:e}function y6(e){const t=e||{},r=t.tableCellPadding,i=t.tablePipeAlign,s=t.stringLength,o=r?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:v,table:c,tableCell:p,tableRow:d}};function c(_,k,A,C){return h(y(_,A,C),_.align)}function d(_,k,A,C){const E=b(_,A,C),T=h([E]);return T.slice(0,T.indexOf(`
`))}function p(_,k,A,C){const E=A.enter("tableCell"),T=A.enter("phrasing"),R=A.containerPhrasing(_,{...C,before:o,after:o});return T(),E(),R}function h(_,k){return MR(_,{align:k,alignDelimiters:i,padding:r,stringLength:s})}function y(_,k,A){const C=_.children;let E=-1;const T=[],R=k.enter("table");for(;++E<C.length;)T[E]=b(C[E],k,A);return R(),T}function b(_,k,A){const C=_.children;let E=-1;const T=[],R=k.enter("tableRow");for(;++E<C.length;)T[E]=p(C[E],_,k,A);return R(),T}function v(_,k,A){let C=M_.inlineCode(_,k,A);return A.stack.includes("tableCell")&&(C=C.replace(/\|/g,"\\$&")),C}}function b6(){return{exit:{taskListCheckValueChecked:Wx,taskListCheckValueUnchecked:Wx,paragraph:v6}}}function x6(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:_6}}}function Wx(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function v6(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const r=this.stack[this.stack.length-1];r.type;const i=r.children[0];if(i&&i.type==="text"){const s=t.children;let o=-1,c;for(;++o<s.length;){const d=s[o];if(d.type==="paragraph"){c=d;break}}c===r&&(i.value=i.value.slice(1),i.value.length===0?r.children.shift():r.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,r.position.start=Object.assign({},i.position.start)))}}this.exit(e)}function _6(e,t,r,i){const s=e.children[0],o=typeof e.checked=="boolean"&&s&&s.type==="paragraph",c="["+(e.checked?"x":" ")+"] ",d=r.createTracker(i);o&&d.move(c);let p=M_.listItem(e,t,r,{...i,...d.current()});return o&&(p=p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),p;function h(y){return y+c}}function w6(){return[eR(),_R(),jR(),d6(),b6()]}function k6(e){return{extensions:[tR(),wR(e),NR(),y6(e),x6()]}}const S6={tokenize:T6,partial:!0},R_={tokenize:M6,partial:!0},O_={tokenize:R6,partial:!0},z_={tokenize:O6,partial:!0},j6={tokenize:z6,partial:!0},D_={name:"wwwAutolink",tokenize:C6,previous:B_},L_={name:"protocolAutolink",tokenize:A6,previous:U_},Yr={name:"emailAutolink",tokenize:E6,previous:F_},wr={};function N6(){return{text:wr}}let Xa=48;for(;Xa<123;)wr[Xa]=Yr,Xa++,Xa===58?Xa=65:Xa===91&&(Xa=97);wr[43]=Yr;wr[45]=Yr;wr[46]=Yr;wr[95]=Yr;wr[72]=[Yr,L_];wr[104]=[Yr,L_];wr[87]=[Yr,D_];wr[119]=[Yr,D_];function E6(e,t,r){const i=this;let s,o;return c;function c(b){return!fh(b)||!F_.call(i,i.previous)||Qh(i.events)?r(b):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),d(b))}function d(b){return fh(b)?(e.consume(b),d):b===64?(e.consume(b),p):r(b)}function p(b){return b===46?e.check(j6,y,h)(b):b===45||b===95||an(b)?(o=!0,e.consume(b),p):y(b)}function h(b){return e.consume(b),s=!0,p}function y(b){return o&&s&&dn(i.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(b)):r(b)}}function C6(e,t,r){const i=this;return s;function s(c){return c!==87&&c!==119||!B_.call(i,i.previous)||Qh(i.events)?r(c):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(S6,e.attempt(R_,e.attempt(O_,o),r),r)(c))}function o(c){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(c)}}function A6(e,t,r){const i=this;let s="",o=!1;return c;function c(b){return(b===72||b===104)&&U_.call(i,i.previous)&&!Qh(i.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),s+=String.fromCodePoint(b),e.consume(b),d):r(b)}function d(b){if(dn(b)&&s.length<5)return s+=String.fromCodePoint(b),e.consume(b),d;if(b===58){const v=s.toLowerCase();if(v==="http"||v==="https")return e.consume(b),p}return r(b)}function p(b){return b===47?(e.consume(b),o?h:(o=!0,p)):r(b)}function h(b){return b===null||Xu(b)||pt(b)||oi(b)||gc(b)?r(b):e.attempt(R_,e.attempt(O_,y),r)(b)}function y(b){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(b)}}function T6(e,t,r){let i=0;return s;function s(c){return(c===87||c===119)&&i<3?(i++,e.consume(c),s):c===46&&i===3?(e.consume(c),o):r(c)}function o(c){return c===null?r(c):t(c)}}function M6(e,t,r){let i,s,o;return c;function c(h){return h===46||h===95?e.check(z_,p,d)(h):h===null||pt(h)||oi(h)||h!==45&&gc(h)?p(h):(o=!0,e.consume(h),c)}function d(h){return h===95?i=!0:(s=i,i=void 0),e.consume(h),c}function p(h){return s||i||!o?r(h):t(h)}}function R6(e,t){let r=0,i=0;return s;function s(c){return c===40?(r++,e.consume(c),s):c===41&&i<r?o(c):c===33||c===34||c===38||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===60||c===63||c===93||c===95||c===126?e.check(z_,t,o)(c):c===null||pt(c)||oi(c)?t(c):(e.consume(c),s)}function o(c){return c===41&&i++,e.consume(c),s}}function O6(e,t,r){return i;function i(d){return d===33||d===34||d===39||d===41||d===42||d===44||d===46||d===58||d===59||d===63||d===95||d===126?(e.consume(d),i):d===38?(e.consume(d),o):d===93?(e.consume(d),s):d===60||d===null||pt(d)||oi(d)?t(d):r(d)}function s(d){return d===null||d===40||d===91||pt(d)||oi(d)?t(d):i(d)}function o(d){return dn(d)?c(d):r(d)}function c(d){return d===59?(e.consume(d),i):dn(d)?(e.consume(d),c):r(d)}}function z6(e,t,r){return i;function i(o){return e.consume(o),s}function s(o){return an(o)?r(o):t(o)}}function B_(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||pt(e)}function U_(e){return!dn(e)}function F_(e){return!(e===47||fh(e))}function fh(e){return e===43||e===45||e===46||e===95||an(e)}function Qh(e){let t=e.length,r=!1;for(;t--;){const i=e[t][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){r=!0;break}if(i._gfmAutolinkLiteralWalkedInto){r=!1;break}}return e.length>0&&!r&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),r}const D6={tokenize:q6,partial:!0};function L6(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:V6,continuation:{tokenize:P6},exit:H6}},text:{91:{name:"gfmFootnoteCall",tokenize:F6},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:B6,resolveTo:U6}}}}function B6(e,t,r){const i=this;let s=i.events.length;const o=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let c;for(;s--;){const p=i.events[s][1];if(p.type==="labelImage"){c=p;break}if(p.type==="gfmFootnoteCall"||p.type==="labelLink"||p.type==="label"||p.type==="image"||p.type==="link")break}return d;function d(p){if(!c||!c._balanced)return r(p);const h=ir(i.sliceSerialize({start:c.end,end:i.now()}));return h.codePointAt(0)!==94||!o.includes(h.slice(1))?r(p):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(p),e.exit("gfmFootnoteCallLabelMarker"),t(p))}}function U6(e,t){let r=e.length;for(;r--;)if(e[r][1].type==="labelImage"&&e[r][0]==="enter"){e[r][1];break}e[r+1][1].type="data",e[r+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[r+3][1].start),end:Object.assign({},e[e.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},e[r+3][1].end),end:Object.assign({},e[r+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},e[e.length-1][1].start)},c={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},d=[e[r+1],e[r+2],["enter",i,t],e[r+3],e[r+4],["enter",s,t],["exit",s,t],["enter",o,t],["enter",c,t],["exit",c,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(r,e.length-r+1,...d),e}function F6(e,t,r){const i=this,s=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o=0,c;return d;function d(b){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(b),e.exit("gfmFootnoteCallLabelMarker"),p}function p(b){return b!==94?r(b):(e.enter("gfmFootnoteCallMarker"),e.consume(b),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",h)}function h(b){if(o>999||b===93&&!c||b===null||b===91||pt(b))return r(b);if(b===93){e.exit("chunkString");const v=e.exit("gfmFootnoteCallString");return s.includes(ir(i.sliceSerialize(v)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(b),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):r(b)}return pt(b)||(c=!0),o++,e.consume(b),b===92?y:h}function y(b){return b===91||b===92||b===93?(e.consume(b),o++,h):h(b)}}function V6(e,t,r){const i=this,s=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o,c=0,d;return p;function p(k){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(k),e.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(k){return k===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(k),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",y):r(k)}function y(k){if(c>999||k===93&&!d||k===null||k===91||pt(k))return r(k);if(k===93){e.exit("chunkString");const A=e.exit("gfmFootnoteDefinitionLabelString");return o=ir(i.sliceSerialize(A)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(k),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),v}return pt(k)||(d=!0),c++,e.consume(k),k===92?b:y}function b(k){return k===91||k===92||k===93?(e.consume(k),c++,y):y(k)}function v(k){return k===58?(e.enter("definitionMarker"),e.consume(k),e.exit("definitionMarker"),s.includes(o)||s.push(o),et(e,_,"gfmFootnoteDefinitionWhitespace")):r(k)}function _(k){return t(k)}}function P6(e,t,r){return e.check(Ks,t,e.attempt(D6,t,r))}function H6(e){e.exit("gfmFootnoteDefinition")}function q6(e,t,r){const i=this;return et(e,s,"gfmFootnoteDefinitionIndent",5);function s(o){const c=i.events[i.events.length-1];return c&&c[1].type==="gfmFootnoteDefinitionIndent"&&c[2].sliceSerialize(c[1],!0).length===4?t(o):r(o)}}function I6(e){let r=(e||{}).singleTilde;const i={name:"strikethrough",tokenize:o,resolveAll:s};return r==null&&(r=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function s(c,d){let p=-1;for(;++p<c.length;)if(c[p][0]==="enter"&&c[p][1].type==="strikethroughSequenceTemporary"&&c[p][1]._close){let h=p;for(;h--;)if(c[h][0]==="exit"&&c[h][1].type==="strikethroughSequenceTemporary"&&c[h][1]._open&&c[p][1].end.offset-c[p][1].start.offset===c[h][1].end.offset-c[h][1].start.offset){c[p][1].type="strikethroughSequence",c[h][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},c[h][1].start),end:Object.assign({},c[p][1].end)},b={type:"strikethroughText",start:Object.assign({},c[h][1].end),end:Object.assign({},c[p][1].start)},v=[["enter",y,d],["enter",c[h][1],d],["exit",c[h][1],d],["enter",b,d]],_=d.parser.constructs.insideSpan.null;_&&Bn(v,v.length,0,yc(_,c.slice(h+1,p),d)),Bn(v,v.length,0,[["exit",b,d],["enter",c[p][1],d],["exit",c[p][1],d],["exit",y,d]]),Bn(c,h-1,p-h+3,v),p=h+v.length-2;break}}for(p=-1;++p<c.length;)c[p][1].type==="strikethroughSequenceTemporary"&&(c[p][1].type="data");return c}function o(c,d,p){const h=this.previous,y=this.events;let b=0;return v;function v(k){return h===126&&y[y.length-1][1].type!=="characterEscape"?p(k):(c.enter("strikethroughSequenceTemporary"),_(k))}function _(k){const A=ul(h);if(k===126)return b>1?p(k):(c.consume(k),b++,_);if(b<2&&!r)return p(k);const C=c.exit("strikethroughSequenceTemporary"),E=ul(k);return C._open=!E||E===2&&!!A,C._close=!A||A===2&&!!E,d(k)}}}class $6{constructor(){this.map=[]}add(t,r,i){Y6(this,t,r,i)}consume(t){if(this.map.sort(function(o,c){return o[0]-c[0]}),this.map.length===0)return;let r=this.map.length;const i=[];for(;r>0;)r-=1,i.push(t.slice(this.map[r][0]+this.map[r][1]),this.map[r][2]),t.length=this.map[r][0];i.push(t.slice()),t.length=0;let s=i.pop();for(;s;){for(const o of s)t.push(o);s=i.pop()}this.map.length=0}}function Y6(e,t,r,i){let s=0;if(!(r===0&&i.length===0)){for(;s<e.map.length;){if(e.map[s][0]===t){e.map[s][1]+=r,e.map[s][2].push(...i);return}s+=1}e.map.push([t,r,i])}}function Z6(e,t){let r=!1;const i=[];for(;t<e.length;){const s=e[t];if(r){if(s[0]==="enter")s[1].type==="tableContent"&&i.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=i.length-1;i[o]=i[o]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(r=!0);t+=1}return i}function G6(){return{flow:{null:{name:"table",tokenize:J6,resolveAll:X6}}}}function J6(e,t,r){const i=this;let s=0,o=0,c;return d;function d(z){let le=i.events.length-1;for(;le>-1;){const de=i.events[le][1].type;if(de==="lineEnding"||de==="linePrefix")le--;else break}const q=le>-1?i.events[le][1].type:null,se=q==="tableHead"||q==="tableRow"?M:p;return se===M&&i.parser.lazy[i.now().line]?r(z):se(z)}function p(z){return e.enter("tableHead"),e.enter("tableRow"),h(z)}function h(z){return z===124||(c=!0,o+=1),y(z)}function y(z){return z===null?r(z):ze(z)?o>1?(o=0,i.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(z),e.exit("lineEnding"),_):r(z):Qe(z)?et(e,y,"whitespace")(z):(o+=1,c&&(c=!1,s+=1),z===124?(e.enter("tableCellDivider"),e.consume(z),e.exit("tableCellDivider"),c=!0,y):(e.enter("data"),b(z)))}function b(z){return z===null||z===124||pt(z)?(e.exit("data"),y(z)):(e.consume(z),z===92?v:b)}function v(z){return z===92||z===124?(e.consume(z),b):b(z)}function _(z){return i.interrupt=!1,i.parser.lazy[i.now().line]?r(z):(e.enter("tableDelimiterRow"),c=!1,Qe(z)?et(e,k,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(z):k(z))}function k(z){return z===45||z===58?C(z):z===124?(c=!0,e.enter("tableCellDivider"),e.consume(z),e.exit("tableCellDivider"),A):D(z)}function A(z){return Qe(z)?et(e,C,"whitespace")(z):C(z)}function C(z){return z===58?(o+=1,c=!0,e.enter("tableDelimiterMarker"),e.consume(z),e.exit("tableDelimiterMarker"),E):z===45?(o+=1,E(z)):z===null||ze(z)?Z(z):D(z)}function E(z){return z===45?(e.enter("tableDelimiterFiller"),T(z)):D(z)}function T(z){return z===45?(e.consume(z),T):z===58?(c=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(z),e.exit("tableDelimiterMarker"),R):(e.exit("tableDelimiterFiller"),R(z))}function R(z){return Qe(z)?et(e,Z,"whitespace")(z):Z(z)}function Z(z){return z===124?k(z):z===null||ze(z)?!c||s!==o?D(z):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(z)):D(z)}function D(z){return r(z)}function M(z){return e.enter("tableRow"),P(z)}function P(z){return z===124?(e.enter("tableCellDivider"),e.consume(z),e.exit("tableCellDivider"),P):z===null||ze(z)?(e.exit("tableRow"),t(z)):Qe(z)?et(e,P,"whitespace")(z):(e.enter("data"),ae(z))}function ae(z){return z===null||z===124||pt(z)?(e.exit("data"),P(z)):(e.consume(z),z===92?K:ae)}function K(z){return z===92||z===124?(e.consume(z),ae):ae(z)}}function X6(e,t){let r=-1,i=!0,s=0,o=[0,0,0,0],c=[0,0,0,0],d=!1,p=0,h,y,b;const v=new $6;for(;++r<e.length;){const _=e[r],k=_[1];_[0]==="enter"?k.type==="tableHead"?(d=!1,p!==0&&(ev(v,t,p,h,y),y=void 0,p=0),h={type:"table",start:Object.assign({},k.start),end:Object.assign({},k.end)},v.add(r,0,[["enter",h,t]])):k.type==="tableRow"||k.type==="tableDelimiterRow"?(i=!0,b=void 0,o=[0,0,0,0],c=[0,r+1,0,0],d&&(d=!1,y={type:"tableBody",start:Object.assign({},k.start),end:Object.assign({},k.end)},v.add(r,0,[["enter",y,t]])),s=k.type==="tableDelimiterRow"?2:y?3:1):s&&(k.type==="data"||k.type==="tableDelimiterMarker"||k.type==="tableDelimiterFiller")?(i=!1,c[2]===0&&(o[1]!==0&&(c[0]=c[1],b=vu(v,t,o,s,void 0,b),o=[0,0,0,0]),c[2]=r)):k.type==="tableCellDivider"&&(i?i=!1:(o[1]!==0&&(c[0]=c[1],b=vu(v,t,o,s,void 0,b)),o=c,c=[o[1],r,0,0])):k.type==="tableHead"?(d=!0,p=r):k.type==="tableRow"||k.type==="tableDelimiterRow"?(p=r,o[1]!==0?(c[0]=c[1],b=vu(v,t,o,s,r,b)):c[1]!==0&&(b=vu(v,t,c,s,r,b)),s=0):s&&(k.type==="data"||k.type==="tableDelimiterMarker"||k.type==="tableDelimiterFiller")&&(c[3]=r)}for(p!==0&&ev(v,t,p,h,y),v.consume(t.events),r=-1;++r<t.events.length;){const _=t.events[r];_[0]==="enter"&&_[1].type==="table"&&(_[1]._align=Z6(t.events,r))}return e}function vu(e,t,r,i,s,o){const c=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",d="tableContent";r[0]!==0&&(o.end=Object.assign({},el(t.events,r[0])),e.add(r[0],0,[["exit",o,t]]));const p=el(t.events,r[1]);if(o={type:c,start:Object.assign({},p),end:Object.assign({},p)},e.add(r[1],0,[["enter",o,t]]),r[2]!==0){const h=el(t.events,r[2]),y=el(t.events,r[3]),b={type:d,start:Object.assign({},h),end:Object.assign({},y)};if(e.add(r[2],0,[["enter",b,t]]),i!==2){const v=t.events[r[2]],_=t.events[r[3]];if(v[1].end=Object.assign({},_[1].end),v[1].type="chunkText",v[1].contentType="text",r[3]>r[2]+1){const k=r[2]+1,A=r[3]-r[2]-1;e.add(k,A,[])}}e.add(r[3]+1,0,[["exit",b,t]])}return s!==void 0&&(o.end=Object.assign({},el(t.events,s)),e.add(s,0,[["exit",o,t]]),o=void 0),o}function ev(e,t,r,i,s){const o=[],c=el(t.events,r);s&&(s.end=Object.assign({},c),o.push(["exit",s,t])),i.end=Object.assign({},c),o.push(["exit",i,t]),e.add(r+1,0,o)}function el(e,t){const r=e[t],i=r[0]==="enter"?"start":"end";return r[1][i]}const Q6={name:"tasklistCheck",tokenize:W6};function K6(){return{text:{91:Q6}}}function W6(e,t,r){const i=this;return s;function s(p){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?r(p):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(p),e.exit("taskListCheckMarker"),o)}function o(p){return pt(p)?(e.enter("taskListCheckValueUnchecked"),e.consume(p),e.exit("taskListCheckValueUnchecked"),c):p===88||p===120?(e.enter("taskListCheckValueChecked"),e.consume(p),e.exit("taskListCheckValueChecked"),c):r(p)}function c(p){return p===93?(e.enter("taskListCheckMarker"),e.consume(p),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),d):r(p)}function d(p){return ze(p)?t(p):Qe(p)?e.check({tokenize:eO},t,r)(p):r(p)}}function eO(e,t,r){return et(e,i,"whitespace");function i(s){return s===null?r(s):t(s)}}function tO(e){return J1([N6(),L6(),I6(e),G6(),K6()])}const nO={};function rO(e){const t=this,r=e||nO,i=t.data(),s=i.micromarkExtensions||(i.micromarkExtensions=[]),o=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),c=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);s.push(tO(r)),o.push(w6()),c.push(k6(r))}function aO(e){return e.replace(/\n{3,}/g,`

`).trim()}function iO({children:e}){var p;const[t,r]=O.useState(!1),i=e==null?void 0:e.props,s=(i==null?void 0:i.className)||"",o=(p=/language-(\w+)/.exec(s))==null?void 0:p[1],c=String((i==null?void 0:i.children)??"").replace(/\n$/,""),d=async()=>{await navigator.clipboard.writeText(c),r(!0),setTimeout(()=>r(!1),1500)};return f.jsxs("div",{className:"my-2 rounded-xl overflow-hidden border border-base-300 bg-[#0d1117]",children:[f.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-[#161b22] text-xs",children:[f.jsx("span",{className:"text-gray-400 font-mono",children:o||"text"}),f.jsxs("button",{onClick:d,className:"flex items-center gap-1.5 text-gray-400 hover:text-gray-200 transition-colors",type:"button",children:[t?f.jsx(FE,{size:13}):f.jsx(YE,{size:13}),t?"Copied!":"Copy"]})]}),f.jsx("pre",{className:"p-4 overflow-x-auto text-sm leading-relaxed",children:f.jsx("code",{className:"text-gray-200 font-mono",children:c})})]})}function lO({text:e}){return f.jsx("div",{className:"text-sm leading-relaxed [&>*]:mb-2 [&>*:last-child]:mb-0",children:f.jsx(IM,{remarkPlugins:[rO],components:{h1:({children:t})=>f.jsx("h1",{className:"text-lg font-bold",children:t}),h2:({children:t})=>f.jsx("h2",{className:"text-base font-bold",children:t}),h3:({children:t})=>f.jsx("h3",{className:"text-sm font-bold",children:t}),p:({children:t})=>f.jsx("p",{children:t}),ul:({children:t})=>f.jsx("ul",{className:"list-disc pl-5 space-y-1",children:t}),ol:({children:t})=>f.jsx("ol",{className:"list-decimal pl-5 space-y-1",children:t}),li:({children:t})=>f.jsx("li",{className:"pl-1",children:t}),strong:({children:t})=>f.jsx("strong",{className:"font-semibold",children:t}),hr:()=>f.jsx("hr",{className:"border-base-300"}),a:({children:t,href:r})=>f.jsx("a",{href:r,target:"_blank",rel:"noreferrer",className:"text-primary underline",children:t}),table:({children:t})=>f.jsx("div",{className:"overflow-x-auto",children:f.jsx("table",{className:"table table-sm border border-base-300",children:t})}),pre:iO,code:({children:t})=>f.jsx("code",{className:"bg-base-300 px-1.5 py-0.5 rounded text-[0.85em] font-mono",children:t})},children:aO(e)})})}function sO({problem:e}){const[t,r]=O.useState([{type:"model_output",content:[{type:"text",text:"👋 Hi! I'm your coding assistant."}]},{type:"user_input",content:[{type:"text",text:"📖 Explain this problem."}]}]),[i,s]=O.useState(!1),{register:o,handleSubmit:c,reset:d,formState:{errors:p}}=vr(),h=O.useRef(null);O.useEffect(()=>{var b;(b=h.current)==null||b.scrollIntoView({behavior:"smooth"})},[t]);const y=async b=>{const v={type:"user_input",content:[{type:"text",text:b.message}]},_=[...t,v];r([..._,{type:"model_output",content:[{type:"text",text:""}]}]),d(),s(!0);try{const k=await fetch(`${kt.defaults.baseURL}/ai/chat`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({messages:_,title:e.title,description:e.description,testCases:e.visibleTestCases,startCode:e.startCode})});if(!k.ok||!k.body)throw new Error("Stream failed");const A=k.body.getReader(),C=new TextDecoder;let E=!1;for(;!E;){const{value:T,done:R}=await A.read();if(E=R,T){const Z=C.decode(T,{stream:!0});r(D=>{const M=[...D],P=M[M.length-1];return M[M.length-1]={...P,content:[{type:"text",text:P.content[0].text+Z}]},M})}}}catch(k){console.error("API Error:",k),r(A=>{const C=[...A];return C[C.length-1]={type:"model_output",content:[{type:"text",text:"Error from AI Chatbot"}]},C})}finally{s(!1)}};return f.jsxs("div",{className:"flex flex-col h-screen max-h-[80vh] min-h-[500px]",children:[f.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-6 space-y-5",children:[t.map((b,v)=>{const _=b.type==="user_input",k=v===t.length-1,A=b.content[0].text;return f.jsxs("div",{className:`flex gap-3 ${_?"justify-end":"justify-start"}`,children:[!_&&f.jsx("div",{className:"w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5",children:f.jsx(LE,{size:16,className:"text-primary"})}),f.jsx("div",{className:_?"max-w-[80%] bg-primary text-primary-content rounded-2xl rounded-tr-sm px-4 py-2.5":"max-w-[85%]",children:!_&&k&&i&&!A?f.jsxs("span",{className:"inline-flex gap-1",children:[f.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-base-content/40 animate-bounce [animation-delay:-0.3s]"}),f.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-base-content/40 animate-bounce [animation-delay:-0.15s]"}),f.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-base-content/40 animate-bounce"})]}):f.jsx(lO,{text:A})}),_&&f.jsx("div",{className:"w-7 h-7 rounded-full bg-base-300 flex items-center justify-center shrink-0 mt-0.5",children:f.jsx(bC,{size:16,className:"text-base-content/70"})})]},v)}),f.jsx("div",{ref:h})]}),f.jsx("form",{onSubmit:c(y),className:"sticky bottom-0 p-4 bg-base-100 border-t",children:f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("input",{placeholder:"Ask me anything",className:"input input-bordered flex-1 rounded-full",disabled:i,...o("message",{required:!0,minLength:2})}),f.jsx("button",{type:"submit",className:"btn btn-primary btn-circle",disabled:p.message||i,children:f.jsx(mC,{size:18})})]})})]})}const oO=({secureUrl:e,thumbnailUrl:t,duration:r})=>{const i=O.useRef(null),[s,o]=O.useState(!1),[c,d]=O.useState(0),[p,h]=O.useState(!1);O.useEffect(()=>{o(!1),d(0)},[e]);const y=v=>{if(!v||isNaN(v))return"0:00";const _=Math.floor(v/60),k=Math.floor(v%60);return`${_}:${k<10?"0":""}${k}`},b=()=>{i.current&&(s?i.current.pause():i.current.play(),o(!s))};return O.useEffect(()=>{const v=i.current,_=()=>{v&&d(v.currentTime)};if(v)return v.addEventListener("timeupdate",_),()=>v.removeEventListener("timeupdate",_)},[e]),e?f.jsxs("div",{className:"relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[f.jsx("video",{ref:i,src:e,poster:t,onClick:b,className:"w-full aspect-video bg-black cursor-pointer"},e),f.jsxs("div",{className:`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity ${p||!s?"opacity-100":"opacity-0"}`,children:[f.jsx("button",{onClick:b,className:"btn btn-circle btn-primary mr-3","aria-label":s?"Pause":"Play",children:s?f.jsx(nC,{}):f.jsx(lC,{})}),f.jsxs("div",{className:"flex items-center w-full mt-2",children:[f.jsx("span",{className:"text-white text-sm mr-2",children:y(c)}),f.jsx("input",{type:"range",min:"0",max:r||0,value:c,onChange:v=>{i.current&&(i.current.currentTime=Number(v.target.value))},className:"range range-primary range-xs flex-1"}),f.jsx("span",{className:"text-white text-sm ml-2",children:y(r)})]})]})]}):f.jsxs("div",{className:"w-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-2 aspect-video bg-base-200 rounded-xl text-base-content/60",children:[f.jsx(vC,{size:40}),f.jsx("p",{children:"Video is not available for this problem"})]})};var eo={};(function e(t,r,i,s){var o=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),c=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=function(){if(!t.OffscreenCanvas)return!1;try{var x=new OffscreenCanvas(1,1),j=x.getContext("2d");j.fillRect(0,0,1,1);var $=x.transferToImageBitmap();j.createPattern($,"no-repeat")}catch{return!1}return!0}();function p(){}function h(x){var j=r.exports.Promise,$=j!==void 0?j:t.Promise;return typeof $=="function"?new $(x):(x(p,p),null)}var y=function(x,j){return{transform:function($){if(x)return $;if(j.has($))return j.get($);var S=new OffscreenCanvas($.width,$.height),X=S.getContext("2d");return X.drawImage($,0,0),j.set($,S),S},clear:function(){j.clear()}}}(d,new Map),b=function(){var x=Math.floor(16.666666666666668),j,$,S={},X=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(j=function(ue){var ne=Math.random();return S[ne]=requestAnimationFrame(function pe(ge){X===ge||X+x-1<ge?(X=ge,delete S[ne],ue()):S[ne]=requestAnimationFrame(pe)}),ne},$=function(ue){S[ue]&&cancelAnimationFrame(S[ue])}):(j=function(ue){return setTimeout(ue,x)},$=function(ue){return clearTimeout(ue)}),{frame:j,cancel:$}}(),v=function(){var x,j,$={};function S(X){function ue(ne,pe){X.postMessage({options:ne||{},callback:pe})}X.init=function(pe){var ge=pe.transferControlToOffscreen();X.postMessage({canvas:ge},[ge])},X.fire=function(pe,ge,Ae){if(j)return ue(pe,null),j;var De=Math.random().toString(36).slice(2);return j=h(function(ke){function Me(Ue){Ue.data.callback===De&&(delete $[De],X.removeEventListener("message",Me),j=null,y.clear(),Ae(),ke())}X.addEventListener("message",Me),ue(pe,De),$[De]=Me.bind(null,{data:{callback:De}})}),j},X.reset=function(){X.postMessage({reset:!0});for(var pe in $)$[pe](),delete $[pe]}}return function(){if(x)return x;if(!i&&o){var X=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{x=new Worker(URL.createObjectURL(new Blob([X])))}catch(ue){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ue),null}S(x)}return x}}(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function k(x,j){return j?j(x):x}function A(x){return x!=null}function C(x,j,$){return k(x&&A(x[j])?x[j]:_[j],$)}function E(x){return x<0?0:Math.floor(x)}function T(x,j){return Math.floor(Math.random()*(j-x))+x}function R(x){return parseInt(x,16)}function Z(x){return x.map(D)}function D(x){var j=String(x).replace(/[^0-9a-f]/gi,"");return j.length<6&&(j=j[0]+j[0]+j[1]+j[1]+j[2]+j[2]),{r:R(j.substring(0,2)),g:R(j.substring(2,4)),b:R(j.substring(4,6))}}function M(x){var j=C(x,"origin",Object);return j.x=C(j,"x",Number),j.y=C(j,"y",Number),j}function P(x){x.width=document.documentElement.clientWidth,x.height=document.documentElement.clientHeight}function ae(x){var j=x.getBoundingClientRect();x.width=j.width,x.height=j.height}function K(x){var j=document.createElement("canvas");return j.style.position="fixed",j.style.top="0px",j.style.left="0px",j.style.pointerEvents="none",j.style.zIndex=x,j}function z(x,j,$,S,X,ue,ne,pe,ge){x.save(),x.translate(j,$),x.rotate(ue),x.scale(S,X),x.arc(0,0,1,ne,pe,ge),x.restore()}function le(x){var j=x.angle*(Math.PI/180),$=x.spread*(Math.PI/180);return{x:x.x,y:x.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:x.startVelocity*.5+Math.random()*x.startVelocity,angle2D:-j+(.5*$-Math.random()*$),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:x.color,shape:x.shape,tick:0,totalTicks:x.ticks,decay:x.decay,drift:x.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:x.gravity*3,ovalScalar:.6,scalar:x.scalar,flat:x.flat}}function q(x,j){j.x+=Math.cos(j.angle2D)*j.velocity+j.drift,j.y+=Math.sin(j.angle2D)*j.velocity+j.gravity,j.velocity*=j.decay,j.flat?(j.wobble=0,j.wobbleX=j.x+10*j.scalar,j.wobbleY=j.y+10*j.scalar,j.tiltSin=0,j.tiltCos=0,j.random=1):(j.wobble+=j.wobbleSpeed,j.wobbleX=j.x+10*j.scalar*Math.cos(j.wobble),j.wobbleY=j.y+10*j.scalar*Math.sin(j.wobble),j.tiltAngle+=.1,j.tiltSin=Math.sin(j.tiltAngle),j.tiltCos=Math.cos(j.tiltAngle),j.random=Math.random()+2);var $=j.tick++/j.totalTicks,S=j.x+j.random*j.tiltCos,X=j.y+j.random*j.tiltSin,ue=j.wobbleX+j.random*j.tiltCos,ne=j.wobbleY+j.random*j.tiltSin;if(x.fillStyle="rgba("+j.color.r+", "+j.color.g+", "+j.color.b+", "+(1-$)+")",x.beginPath(),c&&j.shape.type==="path"&&typeof j.shape.path=="string"&&Array.isArray(j.shape.matrix))x.fill(F(j.shape.path,j.shape.matrix,j.x,j.y,Math.abs(ue-S)*.1,Math.abs(ne-X)*.1,Math.PI/10*j.wobble));else if(j.shape.type==="bitmap"){var pe=Math.PI/10*j.wobble,ge=Math.abs(ue-S)*.1,Ae=Math.abs(ne-X)*.1,De=j.shape.bitmap.width*j.scalar,ke=j.shape.bitmap.height*j.scalar,Me=new DOMMatrix([Math.cos(pe)*ge,Math.sin(pe)*ge,-Math.sin(pe)*Ae,Math.cos(pe)*Ae,j.x,j.y]);Me.multiplySelf(new DOMMatrix(j.shape.matrix));var Ue=x.createPattern(y.transform(j.shape.bitmap),"no-repeat");Ue.setTransform(Me),x.globalAlpha=1-$,x.fillStyle=Ue,x.fillRect(j.x-De/2,j.y-ke/2,De,ke),x.globalAlpha=1}else if(j.shape==="circle")x.ellipse?x.ellipse(j.x,j.y,Math.abs(ue-S)*j.ovalScalar,Math.abs(ne-X)*j.ovalScalar,Math.PI/10*j.wobble,0,2*Math.PI):z(x,j.x,j.y,Math.abs(ue-S)*j.ovalScalar,Math.abs(ne-X)*j.ovalScalar,Math.PI/10*j.wobble,0,2*Math.PI);else if(j.shape==="star")for(var Ce=Math.PI/2*3,xt=4*j.scalar,At=8*j.scalar,it=j.x,Gt=j.y,Pt=5,B=Math.PI/Pt;Pt--;)it=j.x+Math.cos(Ce)*At,Gt=j.y+Math.sin(Ce)*At,x.lineTo(it,Gt),Ce+=B,it=j.x+Math.cos(Ce)*xt,Gt=j.y+Math.sin(Ce)*xt,x.lineTo(it,Gt),Ce+=B;else x.moveTo(Math.floor(j.x),Math.floor(j.y)),x.lineTo(Math.floor(j.wobbleX),Math.floor(X)),x.lineTo(Math.floor(ue),Math.floor(ne)),x.lineTo(Math.floor(S),Math.floor(j.wobbleY));return x.closePath(),x.fill(),j.tick<j.totalTicks}function se(x,j,$,S,X){var ue=j.slice(),ne=x.getContext("2d"),pe,ge,Ae=h(function(De){function ke(){pe=ge=null,ne.clearRect(0,0,S.width,S.height),y.clear(),X(),De()}function Me(){i&&!(S.width===s.width&&S.height===s.height)&&(S.width=x.width=s.width,S.height=x.height=s.height),!S.width&&!S.height&&($(x),S.width=x.width,S.height=x.height),ne.clearRect(0,0,S.width,S.height),ue=ue.filter(function(Ue){return q(ne,Ue)}),ue.length?pe=b.frame(Me):ke()}pe=b.frame(Me),ge=ke});return{addFettis:function(De){return ue=ue.concat(De),Ae},canvas:x,promise:Ae,reset:function(){pe&&b.cancel(pe),ge&&ge()}}}function de(x,j){var $=!x,S=!!C(j||{},"resize"),X=!1,ue=C(j,"disableForReducedMotion",Boolean),ne=o&&!!C(j||{},"useWorker"),pe=ne?v():null,ge=$?P:ae,Ae=x&&pe?!!x.__confetti_initialized:!1,De=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ke;function Me(Ce,xt,At){for(var it=C(Ce,"particleCount",E),Gt=C(Ce,"angle",Number),Pt=C(Ce,"spread",Number),B=C(Ce,"startVelocity",Number),Q=C(Ce,"decay",Number),oe=C(Ce,"gravity",Number),we=C(Ce,"drift",Number),xe=C(Ce,"colors",Z),ye=C(Ce,"ticks",Number),H=C(Ce,"shapes"),ie=C(Ce,"scalar"),_e=!!C(Ce,"flat"),Ne=M(Ce),Ge=it,gt=[],jn=x.width*Ne.x,zt=x.height*Ne.y;Ge--;)gt.push(le({x:jn,y:zt,angle:Gt,spread:Pt,startVelocity:B,color:xe[Ge%xe.length],shape:H[T(0,H.length)],ticks:ye,decay:Q,gravity:oe,drift:we,scalar:ie,flat:_e}));return ke?ke.addFettis(gt):(ke=se(x,gt,ge,xt,At),ke.promise)}function Ue(Ce){var xt=ue||C(Ce,"disableForReducedMotion",Boolean),At=C(Ce,"zIndex",Number);if(xt&&De)return h(function(B){B()});$&&ke?x=ke.canvas:$&&!x&&(x=K(At),document.body.appendChild(x)),S&&!Ae&&ge(x);var it={width:x.width,height:x.height};pe&&!Ae&&pe.init(x),Ae=!0,pe&&(x.__confetti_initialized=!0);function Gt(){if(pe){var B={getBoundingClientRect:function(){if(!$)return x.getBoundingClientRect()}};ge(B),pe.postMessage({resize:{width:B.width,height:B.height}});return}it.width=it.height=null}function Pt(){ke=null,S&&(X=!1,t.removeEventListener("resize",Gt)),$&&x&&(document.body.contains(x)&&document.body.removeChild(x),x=null,Ae=!1)}return S&&!X&&(X=!0,t.addEventListener("resize",Gt,!1)),pe?pe.fire(Ce,it,Pt):Me(Ce,it,Pt)}return Ue.reset=function(){pe&&pe.reset(),ke&&ke.reset()},Ue}var Y;function U(){return Y||(Y=de(null,{useWorker:!0,resize:!0})),Y}function F(x,j,$,S,X,ue,ne){var pe=new Path2D(x),ge=new Path2D;ge.addPath(pe,new DOMMatrix(j));var Ae=new Path2D;return Ae.addPath(ge,new DOMMatrix([Math.cos(ne)*X,Math.sin(ne)*X,-Math.sin(ne)*ue,Math.cos(ne)*ue,$,S])),Ae}function te(x){if(!c)throw new Error("path confetti are not supported in this browser");var j,$;typeof x=="string"?j=x:(j=x.path,$=x.matrix);var S=new Path2D(j),X=document.createElement("canvas"),ue=X.getContext("2d");if(!$){for(var ne=1e3,pe=ne,ge=ne,Ae=0,De=0,ke,Me,Ue=0;Ue<ne;Ue+=2)for(var Ce=0;Ce<ne;Ce+=2)ue.isPointInPath(S,Ue,Ce,"nonzero")&&(pe=Math.min(pe,Ue),ge=Math.min(ge,Ce),Ae=Math.max(Ae,Ue),De=Math.max(De,Ce));ke=Ae-pe,Me=De-ge;var xt=10,At=Math.min(xt/ke,xt/Me);$=[At,0,0,At,-Math.round(ke/2+pe)*At,-Math.round(Me/2+ge)*At]}return{type:"path",path:j,matrix:$}}function ve(x){var j,$=1,S="#000000",X='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof x=="string"?j=x:(j=x.text,$="scalar"in x?x.scalar:$,X="fontFamily"in x?x.fontFamily:X,S="color"in x?x.color:S);var ue=10*$,ne=""+ue+"px "+X,pe=new OffscreenCanvas(ue,ue),ge=pe.getContext("2d");ge.font=ne;var Ae=ge.measureText(j),De=Math.ceil(Ae.actualBoundingBoxRight+Ae.actualBoundingBoxLeft),ke=Math.ceil(Ae.actualBoundingBoxAscent+Ae.actualBoundingBoxDescent),Me=2,Ue=Ae.actualBoundingBoxLeft+Me,Ce=Ae.actualBoundingBoxAscent+Me;De+=Me+Me,ke+=Me+Me,pe=new OffscreenCanvas(De,ke),ge=pe.getContext("2d"),ge.font=ne,ge.fillStyle=S,ge.fillText(j,Ue,Ce);var xt=1/$;return{type:"bitmap",bitmap:pe.transferToImageBitmap(),matrix:[xt,0,0,xt,-De*xt/2,-ke*xt/2]}}r.exports=function(){return U().apply(this,arguments)},r.exports.reset=function(){U().reset()},r.exports.create=de,r.exports.shapeFromPath=te,r.exports.shapeFromText=ve})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),eo,!1);const Ki=eo.exports;eo.exports.create;const uO=()=>{const e=["#5ce6a6","#4de1ff","#ffb86b","#a78bfa","#ffffff"];Ki({particleCount:140,spread:100,startVelocity:48,decay:.91,gravity:.9,scalar:1.05,ticks:260,origin:{x:.5,y:.58},colors:e,shapes:["square","circle","star"],disableForReducedMotion:!0}),Ki({particleCount:75,angle:55,spread:65,startVelocity:55,decay:.91,gravity:1,origin:{x:0,y:.65},colors:e,shapes:["square","circle"],disableForReducedMotion:!0}),Ki({particleCount:75,angle:125,spread:65,startVelocity:55,decay:.91,gravity:1,origin:{x:1,y:.65},colors:e,shapes:["square","circle"],disableForReducedMotion:!0}),setTimeout(()=>{Ki({particleCount:90,spread:150,startVelocity:32,decay:.92,gravity:.75,scalar:.85,origin:{x:.5,y:.42},colors:["#ffb86b","#ffd166","#ffffff"],shapes:["star","circle"],disableForReducedMotion:!0})},280),setTimeout(()=>{Ki({particleCount:35,angle:70,spread:45,startVelocity:42,origin:{x:.15,y:.45},colors:e,shapes:["star"],scalar:.8,disableForReducedMotion:!0}),Ki({particleCount:35,angle:110,spread:45,startVelocity:42,origin:{x:.85,y:.45},colors:e,shapes:["star"],scalar:.8,disableForReducedMotion:!0})},520)},tv={cpp:"C++",java:"Java",javascript:"JavaScript"},cO=[{key:"description",label:"Description"},{key:"editorial",label:"Editorial"},{key:"solutions",label:"Solutions"},{key:"submissions",label:"Submissions"},{key:"chatAI",label:"ChatAI"}],dO=[{key:"code",label:"Code"},{key:"testcase",label:"Testcase"},{key:"result",label:"Result"}],fO=()=>{var Y,U;const[e,t]=O.useState(null),[r,i]=O.useState("javascript"),[s,o]=O.useState({}),[c,d]=O.useState(!1),[p,h]=O.useState(!1),[y,b]=O.useState(!1),[v,_]=O.useState(null),[k,A]=O.useState(null),[C,E]=O.useState("description"),[T,R]=O.useState("code"),Z=O.useRef(null);let{problemId:D}=yh();const{handleSubmit:M}=vr(),P=s[r]??"";O.useEffect(()=>{(async()=>{d(!0);try{const te=await kt.get(`/problem/problemById/${D}`),ve={};te.data.startCode.forEach(x=>{const j=Object.keys(tv).find($=>tv[$]===x.language);j&&(ve[j]=x.initialCode)}),t(te.data),o(ve),d(!1)}catch(te){console.error("Error fetching problem:",te),d(!1)}})()},[D]);const ae=F=>{o(te=>({...te,[r]:F||""}))},K=(F,te)=>{Z.current=F,te.editor.defineTheme("algoDark",{base:"vs-dark",inherit:!0,rules:[],colors:{"editor.background":"#0d1320","editor.lineHighlightBackground":"#1a223380","editorLineNumber.foreground":"#3a4558","editorLineNumber.activeForeground":"#ffb86b","editorCursor.foreground":"#ffb86b","editor.selectionBackground":"#6c8eef40","editorGutter.background":"#0d1320"}}),te.editor.setTheme("algoDark")},z=F=>{i(F)},le=async()=>{h(!0),_(null);try{const F=await kt.post(`/submission/run/${D}`,{code:P,language:r});_(F.data),R("testcase")}catch(F){console.error("Error running code:",F),_({success:!1,error:"Internal server error"}),R("testcase")}finally{h(!1)}},q=async()=>{b(!0),A(null);try{const F=await kt.post(`/submission/submit/${D}`,{code:P,language:r});A(F.data),R("result"),F.data.accepted===!0&&uO()}catch(F){console.error("Error submitting code:",F),A(null),R("result")}finally{b(!1)}},se=F=>{switch(F){case"javascript":return"javascript";case"java":return"java";case"cpp":return"cpp";default:return"javascript"}},de=F=>{switch(F==null?void 0:F.toLowerCase()){case"easy":return"algo-pill--easy";case"medium":return"algo-pill--medium";case"hard":return"algo-pill--hard";default:return"algo-pill--neutral"}};return c&&!e?f.jsxs("div",{className:"algo-problem algo-problem--loading",children:[f.jsx("style",{children:nv}),f.jsxs("div",{className:"algo-loader",children:[f.jsx("span",{className:"algo-loader__dot"}),f.jsx("span",{className:"algo-loader__dot"}),f.jsx("span",{className:"algo-loader__dot"}),f.jsx("p",{children:"// loading problem"})]})]}):f.jsxs("div",{className:"algo-problem",children:[f.jsx("style",{children:nv}),f.jsxs("div",{className:"algo-panel algo-panel--left",children:[f.jsx("div",{className:"algo-tabs",children:cO.map(F=>f.jsx("button",{className:`algo-tab ${C===F.key?"is-active":""}`,onClick:()=>E(F.key),children:F.label},F.key))}),f.jsx("div",{className:"algo-panel__body",children:e&&f.jsxs(f.Fragment,{children:[C==="description"&&f.jsxs("div",{className:"algo-fade-in",children:[f.jsxs("div",{className:"algo-problem__header",children:[f.jsx("h1",{className:"algo-problem__title",children:e.title}),f.jsxs("div",{className:"algo-card__badges",children:[f.jsx("span",{className:`algo-pill ${de(e.difficulty)}`,children:e.difficulty.charAt(0).toUpperCase()+e.difficulty.slice(1)}),f.jsx("span",{className:"algo-pill algo-pill--tag",children:e.tags})]})]}),f.jsx("div",{className:"algo-prose",children:f.jsx("div",{className:"algo-description",children:e.description})}),f.jsxs("div",{className:"algo-examples",children:[f.jsx("h3",{className:"algo-section-heading",children:"Examples"}),f.jsx("div",{className:"algo-examples__list",children:e.visibleTestCases.map((F,te)=>f.jsxs("div",{className:"algo-example",children:[f.jsxs("h4",{className:"algo-example__title",children:["Example ",te+1]}),f.jsxs("div",{className:"algo-example__rows",children:[f.jsxs("div",{children:[f.jsx("span",{children:"Input"})," ",F.input]}),f.jsxs("div",{children:[f.jsx("span",{children:"Output"})," ",F.output]}),f.jsxs("div",{children:[f.jsx("span",{children:"Explanation"})," ",F.explanation]})]})]},te))})]})]}),C==="editorial"&&f.jsxs("div",{className:"algo-prose algo-fade-in",children:[f.jsx("h2",{className:"algo-section-heading algo-section-heading--lg",children:"Video Solution"}),f.jsx("div",{className:"algo-description",children:f.jsx(oO,{problemId:e._id,secureUrl:e.secureUrl,thumbnailUrl:e.thumbnailUrl,duration:e.duration})})]}),C==="solutions"&&f.jsxs("div",{className:"algo-fade-in",children:[f.jsx("h2",{className:"algo-section-heading algo-section-heading--lg",children:"Solutions"}),f.jsx("div",{className:"algo-solutions",children:((Y=e.referenceSolution)==null?void 0:Y.map((F,te)=>f.jsxs("div",{className:"algo-solution",children:[f.jsxs("div",{className:"algo-solution__header",children:[e==null?void 0:e.title," — ",F==null?void 0:F.language]}),f.jsx("pre",{className:"algo-solution__code",children:f.jsx("code",{children:F==null?void 0:F.completeCode})})]},te)))||f.jsx("p",{className:"algo-muted",children:"Solutions will be available after you solve the problem."})})]}),C==="submissions"&&f.jsxs("div",{className:"algo-fade-in",children:[f.jsx("h2",{className:"algo-section-heading algo-section-heading--lg",children:"My Submissions"}),f.jsx(O4,{problemId:D})]}),f.jsxs("div",{className:`algo-prose algo-fade-in ${C==="chatAI"?"":"algo-hidden"}`,children:[f.jsx("h2",{className:"algo-section-heading algo-section-heading--lg",children:"Chat with AI"}),f.jsx(sO,{problem:e})]})]})})]}),f.jsxs("div",{className:"algo-panel algo-panel--right",children:[f.jsx("div",{className:"algo-tabs",children:dO.map(F=>f.jsx("button",{className:`algo-tab ${T===F.key?"is-active":""}`,onClick:()=>R(F.key),children:F.label},F.key))}),f.jsxs("div",{className:"algo-panel__body algo-panel__body--flush",children:[T==="code"&&f.jsxs("div",{className:"algo-code-view",children:[f.jsx("div",{className:"algo-lang-bar",children:f.jsx("div",{className:"algo-lang-bar__group",children:["javascript","java","cpp"].map(F=>f.jsx("button",{className:`algo-lang-btn ${r===F?"is-active":""}`,onClick:()=>z(F),children:F==="cpp"?"C++":F==="javascript"?"JavaScript":"Java"},F))})}),f.jsx("div",{className:"algo-editor-wrap",children:f.jsx(R4,{height:"100%",language:se(r),value:P,onChange:ae,onMount:K,theme:"vs-dark",path:r,options:{fontSize:14,minimap:{enabled:!1},scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,wordWrap:"on",lineNumbers:"on",glyphMargin:!1,folding:!0,lineDecorationsWidth:10,lineNumbersMinChars:3,renderLineHighlight:"line",selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",mouseWheelZoom:!0}})}),f.jsxs("div",{className:"algo-action-bar",children:[f.jsx("button",{className:"algo-btn algo-btn--ghost",onClick:()=>R("testcase"),children:"Console"}),f.jsxs("div",{className:"algo-action-bar__right",children:[f.jsx("button",{className:"algo-btn algo-btn--outline",onClick:le,disabled:p||y,children:p?f.jsxs(f.Fragment,{children:["running",f.jsxs("span",{className:"algo-dots",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]}):"Run"}),f.jsx("button",{className:"algo-btn algo-btn--primary",onClick:q,disabled:p||y,children:y?f.jsxs(f.Fragment,{children:["submitting",f.jsxs("span",{className:"algo-dots",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]}):"Submit"})]})]})]}),T==="testcase"&&f.jsxs("div",{className:"algo-panel__body algo-fade-in",children:[f.jsx("h3",{className:"algo-section-heading",children:"Test Results"}),v?f.jsx("div",{className:`algo-result-box ${v.success?"is-success":"is-error"}`,children:v.success?f.jsxs("div",{children:[f.jsx("h4",{className:"algo-result-box__title is-success",children:"✅ All test cases passed!"}),f.jsxs("p",{className:"algo-result-box__meta",children:["Runtime: ",v.runtime," sec"]}),f.jsxs("p",{className:"algo-result-box__meta",children:["Memory: ",v.memory," KB"]}),f.jsx("div",{className:"algo-tc-list",children:v.testCases.map((F,te)=>f.jsxs("div",{className:"algo-tc",children:[f.jsxs("div",{className:"algo-tc__header",children:[f.jsxs("span",{children:["Test Case ",te+1]}),f.jsx("span",{className:"algo-pill algo-pill--easy",children:"✓ Passed"})]}),f.jsxs("div",{className:"algo-tc__rows",children:[f.jsxs("div",{children:[f.jsx("span",{children:"Input"}),F.stdin]}),f.jsxs("div",{children:[f.jsx("span",{children:"Expected"}),F.expected_output]}),f.jsxs("div",{children:[f.jsx("span",{children:"Output"}),F.stdout]})]})]},te))})]}):f.jsxs("div",{children:[f.jsx("h4",{className:"algo-result-box__title is-error",children:"❌ Error"}),f.jsx("div",{className:"algo-tc-list",children:(U=v.testCases)==null?void 0:U.map((F,te)=>f.jsxs("div",{className:"algo-tc",children:[f.jsxs("div",{className:"algo-tc__header",children:[f.jsxs("span",{children:["Test Case ",te+1]}),f.jsx("span",{className:`algo-pill ${F.status_id==3?"algo-pill--easy":"algo-pill--hard"}`,children:F.status_id==3?"✓ Passed":"✗ Failed"})]}),f.jsxs("div",{className:"algo-tc__rows",children:[f.jsxs("div",{children:[f.jsx("span",{children:"Input"}),F.stdin]}),f.jsxs("div",{children:[f.jsx("span",{children:"Expected"}),F.expected_output]}),f.jsxs("div",{children:[f.jsx("span",{children:"Output"}),F.stdout]})]})]},te))})]})}):f.jsx("div",{className:"algo-muted",children:'Click "Run" to test your code with the example test cases.'})]}),T==="result"&&f.jsxs("div",{className:"algo-panel__body algo-fade-in",children:[f.jsx("h3",{className:"algo-section-heading",children:"Submission Result"}),k?f.jsx("div",{className:`algo-result-box ${k.accepted?"is-success algo-result-box--celebrate":"is-error"}`,children:k.accepted?f.jsxs("div",{children:[f.jsx("h4",{className:"algo-result-box__title is-success algo-result-box__title--lg",children:"🎉 Accepted"}),f.jsxs("div",{className:"algo-stat-grid",children:[f.jsxs("div",{className:"algo-stat-card",children:[f.jsx("div",{className:"algo-stat-card__label",children:"Test Cases Passed"}),f.jsxs("div",{className:"algo-stat-card__value",children:[k.passedTestCases,"/",k.totalTestCases]})]}),f.jsxs("div",{className:"algo-stat-card",children:[f.jsx("div",{className:"algo-stat-card__label",children:"Runtime"}),f.jsxs("div",{className:"algo-stat-card__value",children:[k.runtime," sec"]})]}),f.jsxs("div",{className:"algo-stat-card",children:[f.jsx("div",{className:"algo-stat-card__label",children:"Memory"}),f.jsxs("div",{className:"algo-stat-card__value",children:[k.memory," KB"]})]})]})]}):f.jsxs("div",{children:[f.jsxs("h4",{className:"algo-result-box__title is-error",children:["❌ ",k.error||"Wrong Answer"]}),f.jsxs("div",{className:"algo-stat-card algo-stat-card--inline",children:[f.jsx("div",{className:"algo-stat-card__label",children:"Test Cases Passed"}),f.jsxs("div",{className:"algo-stat-card__value",children:[k.passedTestCases,"/",k.totalTestCases]})]})]})}):f.jsx("div",{className:"algo-muted",children:'Click "Submit" to submit your solution for evaluation.'})]})]})]})]})},nv=`
  .algo-problem {
    --void: #0a0e14;
    --surface: #121826;
    --surface-2: #1a2233;
    --surface-warm: #161c2c;
    --border: #232d40;
    --text-primary: #e8edf4;
    --text-muted: #7a8699;
    --accent: #ffb86b;
    --accent-dim: #ffb86b22;
    --secondary: #6c8eef;
    --secondary-dim: #6c8eef22;
    --danger: #ff6b6b;
    --danger-dim: #ff6b6b1a;
    --green: #5ce6a6;
    --green-dim: #5ce6a61a;

    height: 100vh;
    display: flex;
    background: var(--void);
    color: var(--text-primary);
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  }

  .algo-problem--loading {
    align-items: center;
    justify-content: center;
  }

  .algo-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    color: var(--text-muted);
    font-size: 0.85rem;
  }

  .algo-loader__dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
    margin: 0 3px;
    animation: algo-bounce 1s ease-in-out infinite;
  }
  .algo-loader__dot:nth-child(2) { animation-delay: 0.15s; }
  .algo-loader__dot:nth-child(3) { animation-delay: 0.3s; }

  @keyframes algo-bounce {
    0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
    30% { transform: translateY(-8px); opacity: 1; }
  }

  @keyframes algo-fade-in {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes algo-blink {
    0%, 45% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  @keyframes algo-pulse-ring {
    0% { box-shadow: 0 0 0 0 var(--accent-dim); }
    70% { box-shadow: 0 0 0 8px transparent; }
    100% { box-shadow: 0 0 0 0 transparent; }
  }

  @keyframes algo-celebrate {
    0% { box-shadow: 0 0 0 0 rgba(92,230,166,0.5); }
    100% { box-shadow: 0 0 0 22px rgba(92,230,166,0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .algo-problem * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
  }

  .algo-fade-in { animation: algo-fade-in 0.3s ease-out both; }

  .algo-panel {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 0;
  }

  .algo-panel--left {
    border-right: 1px solid var(--border);
    background: linear-gradient(180deg, var(--surface-warm) 0%, var(--void) 340px);
  }

  .algo-panel--right {
    background: var(--void);
  }

  .algo-tabs {
    display: flex;
    gap: 0.25rem;
    padding: 0 1rem;
    background: rgba(18, 24, 38, 0.6);
    border-bottom: 1px solid var(--border);
    overflow-x: auto;
  }

  .algo-tab {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-muted);
    padding: 0.85rem 0.9rem;
    font-size: 0.85rem;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    cursor: pointer;
    white-space: nowrap;
    transition: color 0.15s ease, border-color 0.2s ease;
  }

  .algo-tab:hover {
    color: var(--text-primary);
  }

  .algo-tab.is-active {
    color: var(--accent);
    border-bottom-color: var(--accent);
  }

  .algo-panel__body {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
  }

  .algo-panel__body--flush {
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .algo-hidden { display: none; }

  .algo-problem__header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-bottom: 1.5rem;
  }

  .algo-problem__title {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 1.45rem;
    font-weight: 700;
    margin: 0;
  }

  .algo-pill {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.7rem;
    padding: 0.22rem 0.6rem;
    border-radius: 999px;
    border: 1px solid transparent;
    text-transform: capitalize;
  }

  .algo-pill--easy { color: var(--green); background: var(--green-dim); border-color: rgba(92,230,166,0.35); }
  .algo-pill--medium { color: var(--accent); background: var(--accent-dim); border-color: rgba(255,184,108,0.35); }
  .algo-pill--hard { color: var(--danger); background: var(--danger-dim); border-color: rgba(255,107,107,0.35); }
  .algo-pill--neutral { color: var(--text-muted); background: rgba(255,255,255,0.04); border-color: var(--border); }
  .algo-pill--tag { color: var(--secondary); background: var(--secondary-dim); border-color: rgba(108,142,239,0.35); }

  .algo-card__badges {
    display: flex;
    gap: 0.5rem;
  }

  .algo-prose { color: var(--text-primary); }

  .algo-description {
    white-space: pre-wrap;
    font-size: 0.9rem;
    line-height: 1.7;
    color: #c7d0dc;
  }

  .algo-section-heading {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.95rem;
    color: var(--text-primary);
    margin: 0 0 1rem;
    padding-top: 0.25rem;
    border-top: 1px solid var(--border);
    padding-top: 1.25rem;
  }

  .algo-section-heading--lg {
    font-size: 1.15rem;
    border-top: none;
    padding-top: 0;
  }

  .algo-examples { margin-top: 2rem; }

  .algo-examples__list {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .algo-example {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 0.6rem;
    padding: 1rem 1.1rem;
  }

  .algo-example__title {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.82rem;
    color: var(--accent);
    margin: 0 0 0.6rem;
  }

  .algo-example__rows {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.8rem;
  }

  .algo-example__rows span {
    color: var(--text-muted);
    margin-right: 0.5rem;
  }

  .algo-muted {
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  .algo-solutions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .algo-solution {
    border: 1px solid var(--border);
    border-radius: 0.6rem;
    overflow: hidden;
  }

  .algo-solution__header {
    background: var(--surface);
    padding: 0.6rem 1rem;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.85rem;
    border-bottom: 1px solid var(--border);
  }

  .algo-solution__code {
    background: #0d1320;
    padding: 1rem;
    font-size: 0.8rem;
    overflow-x: auto;
    margin: 0;
    color: #c7d0dc;
  }

  /* ---- Right: code view ---- */
  .algo-code-view {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .algo-lang-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--border);
    background: rgba(18,24,38,0.4);
  }

  .algo-lang-bar__group {
    display: flex;
    gap: 0.4rem;
  }

  .algo-lang-btn {
    background: none;
    border: 1px solid var(--border);
    border-radius: 0.4rem;
    color: var(--text-muted);
    font-size: 0.8rem;
    padding: 0.35rem 0.75rem;
    cursor: pointer;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    transition: all 0.15s ease;
  }

  .algo-lang-btn:hover {
    color: var(--text-primary);
    border-color: var(--accent);
  }

  .algo-lang-btn.is-active {
    background: var(--accent-dim);
    color: var(--accent);
    border-color: var(--accent);
  }

  .algo-editor-wrap {
    flex: 1;
    min-height: 0;
  }

  .algo-action-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.85rem 1rem;
    border-top: 1px solid var(--border);
    background: rgba(18,24,38,0.4);
  }

  .algo-action-bar__right {
    display: flex;
    gap: 0.6rem;
  }

  .algo-btn {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.8rem;
    padding: 0.45rem 1rem;
    border-radius: 0.45rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: transform 0.12s ease, filter 0.15s ease, opacity 0.15s ease;
    border: 1px solid transparent;
  }

  .algo-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .algo-btn--ghost {
    background: none;
    border-color: var(--border);
    color: var(--text-muted);
  }

  .algo-btn--ghost:hover:not(:disabled) {
    color: var(--text-primary);
  }

  .algo-btn--outline {
    background: none;
    border-color: var(--secondary);
    color: var(--secondary);
  }

  .algo-btn--outline:hover:not(:disabled) {
    background: var(--secondary-dim);
  }

  .algo-btn--primary {
    background: var(--accent);
    color: #1a1206;
    font-weight: 700;
    border-color: var(--accent);
    animation: algo-pulse-ring 2.4s ease-out infinite;
  }

  .algo-btn--primary:hover:not(:disabled) {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  .algo-btn--primary:disabled {
    animation: none;
  }

  .algo-dots span {
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: currentColor;
    margin-left: 2px;
    animation: algo-blink 1.1s ease-in-out infinite;
  }
  .algo-dots span:nth-child(2) { animation-delay: 0.15s; }
  .algo-dots span:nth-child(3) { animation-delay: 0.3s; }

  /* ---- Result / testcase boxes ---- */
  .algo-result-box {
    border-radius: 0.7rem;
    padding: 1.1rem 1.25rem;
    border: 1px solid;
  }

  .algo-result-box.is-success {
    background: var(--green-dim);
    border-color: rgba(92,230,166,0.4);
  }

  .algo-result-box.is-error {
    background: var(--danger-dim);
    border-color: rgba(255,107,107,0.4);
  }

  .algo-result-box--celebrate {
    animation: algo-celebrate 0.9s ease-out;
  }

  .algo-result-box__title {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 1rem;
    margin: 0 0 0.4rem;
  }

  .algo-result-box__title--lg {
    font-size: 1.3rem;
  }

  .algo-result-box__title.is-success { color: var(--green); }
  .algo-result-box__title.is-error { color: var(--danger); }

  .algo-result-box__meta {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin: 0.15rem 0;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
  }

  .algo-tc-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .algo-tc {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    padding: 0.85rem 1rem;
  }

  .algo-tc__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .algo-tc__rows {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 0.75rem;
    color: #c7d0dc;
  }

  .algo-tc__rows span {
    color: var(--text-muted);
    margin-right: 0.5rem;
  }

  .algo-stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
    gap: 0.7rem;
    margin-top: 1rem;
  }

  .algo-stat-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    padding: 0.7rem 0.9rem;
  }

  .algo-stat-card--inline {
    display: inline-block;
    margin-top: 0.75rem;
  }

  .algo-stat-card__label {
    font-size: 0.7rem;
    color: var(--text-muted);
    font-family: 'JetBrains Mono', ui-monospace, monospace;
  }

  .algo-stat-card__value {
    font-size: 0.95rem;
    font-weight: 700;
    margin-top: 0.2rem;
    color: var(--text-primary);
  }
`,mO=[{id:"create",title:"Create Problem",description:"Add a new coding problem to the platform",icon:Vs,tone:"green",command:"create_problem()",route:"/admin/create"},{id:"update",title:"Update Problem",description:"Edit existing problems and their details",icon:pC,tone:"amber",command:"update_problem()",route:"/admin/update"},{id:"delete",title:"Delete Problem",description:"Remove problems from the Algo Coding Platform",icon:$r,tone:"danger",command:"delete_problem()",route:"/admin/delete"},{id:"video",title:"Video Problem",description:"Upload and delete editorial videos from platform",icon:wC,tone:"blue",command:"manage_video()",route:"/admin/video"}];function hO(){return f.jsxs("div",{className:"algo-admin",children:[f.jsx("style",{children:`
        .algo-admin {
          --void: #0a0e14;
          --surface: #121826;
          --surface-2: #1a2233;
          --border: #232d40;
          --text-primary: #e8edf4;
          --text-muted: #7a8699;
          --accent: #ffb86b;
          --accent-dim: #ffb86b22;
          --secondary: #6c8eef;
          --secondary-dim: #6c8eef22;
          --danger: #ff6b6b;
          --danger-dim: #ff6b6b22;
          --green: #5ce6a6;
          --green-dim: #5ce6a622;

          min-height: 100vh;
          width: 100%;
          background: radial-gradient(circle at 50% 0%, #16203a 0%, var(--void) 55%);
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          color: var(--text-primary);
          position: relative;
          overflow: hidden;
          padding: 3.5rem 1.5rem 4rem;
        }

        .algo-admin__glyphs {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .algo-admin__glyph {
          position: absolute;
          color: var(--border);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 1.5rem;
          opacity: 0.3;
          animation: algo-drift linear infinite;
          user-select: none;
        }

        @keyframes algo-drift {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(-36px) rotate(5deg); }
        }

        @keyframes algo-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes algo-blink {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes algo-pulse-ring {
          0% { box-shadow: 0 0 0 0 var(--ring-color, var(--accent-dim)); }
          70% { box-shadow: 0 0 0 12px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-admin * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }

        .algo-admin__inner {
          position: relative;
          z-index: 1;
          max-width: 72rem;
          margin: 0 auto;
        }

        .algo-admin__header {
          text-align: center;
          margin-bottom: 3.5rem;
          animation: algo-fade-up 0.5s ease-out both;
        }

        .algo-admin__eyebrow {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.8rem;
          color: var(--accent);
          display: inline-flex;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .algo-admin__cursor {
          display: inline-block;
          width: 0.5em;
          background: var(--accent);
          margin-left: 2px;
          animation: algo-blink 1s step-start infinite;
        }

        .algo-admin__title {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 2.1rem;
          font-weight: 700;
          margin: 0 0 0.6rem;
        }

        .algo-admin__title span { color: var(--accent); }

        .algo-admin__subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin: 0;
        }

        .algo-admin__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
          gap: 1.5rem;
        }

        .algo-option {
          --tone-color: var(--accent);
          --tone-dim: var(--accent-dim);
          position: relative;
          background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          animation: algo-fade-up 0.5s ease-out both;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.25s ease;
        }

        .algo-option[data-tone="green"] { --tone-color: var(--green); --tone-dim: var(--green-dim); }
        .algo-option[data-tone="amber"] { --tone-color: var(--accent); --tone-dim: var(--accent-dim); }
        .algo-option[data-tone="danger"] { --tone-color: var(--danger); --tone-dim: var(--danger-dim); }
        .algo-option[data-tone="blue"] { --tone-color: var(--secondary); --tone-dim: var(--secondary-dim); }

        .algo-option:hover {
          transform: translateY(-6px);
          border-color: var(--tone-color);
          box-shadow: 0 20px 40px -20px var(--tone-dim), 0 0 0 1px var(--tone-dim);
        }

        .algo-option__icon {
          width: 3.75rem;
          height: 3.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--tone-dim);
          color: var(--tone-color);
          margin-bottom: 1.25rem;
          animation: algo-pulse-ring 2.6s ease-out infinite;
          animation-delay: inherit;
          --ring-color: var(--tone-dim);
          transition: transform 0.2s ease;
        }

        .algo-option:hover .algo-option__icon {
          transform: scale(1.08) rotate(-4deg);
        }

        .algo-option__title {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
          color: var(--text-primary);
        }

        .algo-option__desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0 0 1.5rem;
          line-height: 1.5;
        }

        .algo-option__cta {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--tone-color);
          background: var(--tone-dim);
          border: 1px solid var(--tone-color);
          border-radius: 0.5rem;
          padding: 0.55rem 1.1rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: background 0.15s ease, transform 0.12s ease;
        }

        .algo-option__cta:hover {
          background: var(--tone-color);
          color: #0a0e14;
          transform: translateY(-1px);
        }

        .algo-option__cta::after {
          content: '→';
          transition: transform 0.15s ease;
        }

        .algo-option__cta:hover::after {
          transform: translateX(3px);
        }
      `}),f.jsx("div",{className:"algo-admin__glyphs","aria-hidden":"true",children:[{t:"{ }",top:"8%",left:"6%",size:"1.6rem",dur:"16s",delay:"0s"},{t:"[ ]",top:"75%",left:"92%",size:"1.4rem",dur:"18s",delay:"1.5s"},{t:"</>",top:"15%",left:"90%",size:"1.3rem",dur:"20s",delay:"0.8s"},{t:"01",top:"85%",left:"10%",size:"1.1rem",dur:"17s",delay:"2.2s"}].map((e,t)=>f.jsx("span",{className:"algo-admin__glyph",style:{top:e.top,left:e.left,fontSize:e.size,animationDuration:e.dur,animationDelay:e.delay},children:e.t},t))}),f.jsxs("div",{className:"algo-admin__inner",children:[f.jsxs("div",{className:"algo-admin__header",children:[f.jsxs("div",{className:"algo-admin__eyebrow",children:["> sudo --access=admin",f.jsx("span",{className:"algo-admin__cursor",children:" "})]}),f.jsxs("h1",{className:"algo-admin__title",children:["Admin",f.jsx("span",{children:"."}),"Panel"]}),f.jsx("p",{className:"algo-admin__subtitle",children:"Manage coding problems on your platform."})]}),f.jsx("div",{className:"algo-admin__grid",children:mO.map((e,t)=>{const r=e.icon;return f.jsxs("div",{className:"algo-option","data-tone":e.tone,style:{animationDelay:`${t*.08}s`},children:[f.jsx("div",{className:"algo-option__icon",style:{animationDelay:`${t*.3}s`},children:f.jsx(r,{size:26,strokeWidth:2.25})}),f.jsx("h2",{className:"algo-option__title",children:e.title}),f.jsx("p",{className:"algo-option__desc",children:e.description}),f.jsx(Vt,{to:e.route,className:"algo-option__cta",children:e.command})]},e.id)})})]})]})}const pO=()=>{const[e,t]=O.useState([]),[r,i]=O.useState(!0),[s,o]=O.useState(null),[c,d]=O.useState(null),[p,h]=O.useState(!1),y=O.useRef(null),b=Ta(),{user:v}=Ma(T=>T.auth);O.useEffect(()=>{A()},[]),O.useEffect(()=>{const T=R=>{y.current&&!y.current.contains(R.target)&&h(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const _=O.useMemo(()=>((v==null?void 0:v.firstName)||"?").charAt(0).toUpperCase(),[v]),k=()=>{b(Sa()),h(!1)},A=async()=>{try{i(!0);const{data:T}=await kt.get("/problem/getAllProblem");t(T),o(null)}catch(T){o("Failed to fetch problems"),console.error(T)}finally{i(!1)}},C=async T=>{if(window.confirm("Are you sure you want to delete this problem?")){d(T);try{await kt.delete(`/problem/delete/${T}`),t(e.filter(R=>R._id!==T))}catch(R){o("Failed to delete problem"),console.error(R)}finally{d(null)}}},E=T=>{switch(T==null?void 0:T.toLowerCase()){case"easy":return"algo-pill--easy";case"medium":return"algo-pill--medium";case"hard":return"algo-pill--hard";default:return"algo-pill--neutral"}};return f.jsxs("div",{className:"algo-delete-page",children:[f.jsx("style",{children:`
        .algo-delete-page {
          --void: #0a0e14;
          --surface: #121826;
          --surface-2: #1a2233;
          --border: #232d40;
          --text-primary: #e8edf4;
          --text-muted: #7a8699;
          --accent: #ffb86b;
          --accent-dim: #ffb86b22;
          --secondary: #6c8eef;
          --secondary-dim: #6c8eef22;
          --danger: #ff6b6b;
          --danger-dim: #ff6b6b1f;
          --green: #5ce6a6;
          --green-dim: #5ce6a61f;

          min-height: 100vh;
          width: 100%;
          background: var(--void);
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          color: var(--text-primary);
        }

        @keyframes algo-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes algo-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes algo-spin { to { transform: rotate(360deg); } }
        @keyframes algo-menu-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes algo-glow-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-25px, -18px); }
        }
        @keyframes algo-row-out {
          to { opacity: 0; transform: translateX(12px) scale(0.98); }
        }
        @keyframes algo-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-delete-page * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }

        /* ---- Nav ---- */
        .algo-nav {
          position: sticky;
          top: 0;
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.5rem;
          background: rgba(18, 24, 38, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }

        .algo-nav__left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .algo-nav__brand {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
          text-decoration: none;
        }

        .algo-nav__brand span { color: var(--accent); }

        .algo-nav__crumb {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.7rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .algo-nav__crumb:hover { color: var(--accent); border-color: var(--accent); }

        .algo-user { position: relative; }

        .algo-user__trigger {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.3rem 0.9rem 0.3rem 0.3rem;
          cursor: pointer;
          transition: border-color 0.15s ease;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .algo-user__trigger:hover { border-color: var(--accent); }

        .algo-user__avatar {
          width: 1.9rem;
          height: 1.9rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-weight: 700;
          font-size: 0.85rem;
          color: #1a1206;
          background: conic-gradient(from 180deg, var(--accent), var(--secondary), var(--accent));
        }

        .algo-user__badge {
          font-size: 0.62rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          color: var(--secondary);
          background: var(--secondary-dim);
          border: 1px solid rgba(108,142,239,0.4);
          padding: 0.1rem 0.4rem;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .algo-user__caret {
          font-size: 0.6rem;
          color: var(--text-muted);
          transition: transform 0.18s ease;
        }

        .algo-user__trigger.is-open .algo-user__caret { transform: rotate(180deg); }

        .algo-user__menu {
          position: absolute;
          right: 0;
          top: calc(100% + 0.5rem);
          width: 12rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 0.65rem;
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.6);
          overflow: hidden;
          animation: algo-menu-in 0.16s ease-out both;
        }

        .algo-user__menu-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.65rem 0.9rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 0.85rem;
          color: var(--text-primary);
          cursor: pointer;
          text-decoration: none;
          transition: background 0.12s ease;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-user__menu-item:hover { background: rgba(255,255,255,0.04); }
        .algo-user__menu-item--danger { color: var(--danger); }
        .algo-user__menu-item--admin { color: var(--secondary); }
        .algo-user__divider { height: 1px; background: var(--border); }

        /* ---- Hero ---- */
        .algo-hero {
          position: relative;
          overflow: hidden;
          padding: 2.25rem 1.5rem 1.75rem;
          background: radial-gradient(circle at 12% 0%, #24151c 0%, var(--void) 60%);
          border-bottom: 1px solid var(--border);
        }

        .algo-hero__glow {
          position: absolute;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          background: radial-gradient(circle, var(--danger-dim) 0%, transparent 70%);
          top: -7rem;
          left: -4rem;
          animation: algo-glow-drift 12s ease-in-out infinite;
          pointer-events: none;
        }

        .algo-hero__inner {
          position: relative;
          z-index: 1;
          max-width: 72rem;
          margin: 0 auto;
          animation: algo-fade-up 0.5s ease-out both;
        }

        .algo-hero__eyebrow {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          color: var(--danger);
          margin: 0 0 0.4rem;
        }

        .algo-hero__title {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0 0 0.3rem;
        }

        .algo-hero__title span { color: var(--danger); }

        .algo-hero__subtitle {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin: 0;
        }

        /* ---- Content ---- */
        .algo-content {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        .algo-list {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .algo-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 3px solid transparent;
          border-radius: 0.65rem;
          padding: 0.9rem 1.1rem;
          animation: algo-fade-up 0.35s ease-out both;
          transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
        }

        .algo-row:hover {
          transform: translateY(-2px);
          border-left-color: var(--danger);
          box-shadow: 0 14px 28px -18px rgba(0,0,0,0.6);
        }

        .algo-row.is-deleting {
          animation: algo-row-out 0.3s ease-in forwards;
          pointer-events: none;
        }

        .algo-row__index {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          color: var(--text-muted);
          width: 1.75rem;
          flex-shrink: 0;
        }

        .algo-row__main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .algo-row__title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .algo-row__badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .algo-pill {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.7rem;
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
          border: 1px solid transparent;
          text-transform: capitalize;
        }

        .algo-pill--easy { color: var(--green); background: var(--green-dim); border-color: rgba(92,230,166,0.35); }
        .algo-pill--medium { color: var(--accent); background: var(--accent-dim); border-color: rgba(255,184,108,0.35); }
        .algo-pill--hard { color: var(--danger); background: var(--danger-dim); border-color: rgba(255,107,107,0.35); }
        .algo-pill--neutral { color: var(--text-muted); background: rgba(255,255,255,0.04); border-color: var(--border); }
        .algo-pill--tag { color: var(--secondary); background: var(--secondary-dim); border-color: rgba(108,142,239,0.35); }

        .algo-btn {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          padding: 0.45rem 0.9rem;
          border-radius: 0.45rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid transparent;
          transition: transform 0.12s ease, filter 0.15s ease, opacity 0.15s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .algo-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .algo-btn--delete {
          background: var(--danger-dim);
          color: var(--danger);
          border-color: rgba(255,107,107,0.4);
        }

        .algo-btn--delete:hover:not(:disabled) { background: var(--danger); color: #250a0a; }

        .algo-spin { animation: algo-spin 0.9s linear infinite; }

        /* ---- Loading / error / empty ---- */
        .algo-skeleton-list {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .algo-skeleton-row {
          height: 3.4rem;
          border-radius: 0.65rem;
          background: linear-gradient(90deg, var(--surface) 25%, var(--surface-2) 50%, var(--surface) 75%);
          background-size: 200% 100%;
          animation: algo-shimmer 1.4s ease-in-out infinite;
          border: 1px solid var(--border);
        }

        .algo-error {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--danger-dim);
          border: 1px solid rgba(255,107,107,0.4);
          color: #ffb3b3;
          border-radius: 0.6rem;
          padding: 0.9rem 1.1rem;
          font-size: 0.85rem;
          animation: algo-fade-in 0.3s ease-out both;
          margin-bottom: 1rem;
        }

        .algo-empty {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--text-muted);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.9rem;
        }
      `}),f.jsxs("nav",{className:"algo-nav",children:[f.jsxs("div",{className:"algo-nav__left",children:[f.jsxs(Vt,{to:"/",className:"algo-nav__brand",children:["Algo",f.jsx("span",{children:"Coding"})]}),f.jsx(Vt,{to:"/admin",className:"algo-nav__crumb",children:"← Admin_panel"})]}),f.jsxs("div",{className:"algo-user",ref:y,children:[f.jsxs("button",{type:"button",className:`algo-user__trigger ${p?"is-open":""}`,onClick:()=>h(T=>!T),children:[f.jsx("span",{className:"algo-user__avatar",children:_}),v==null?void 0:v.firstName,(v==null?void 0:v.role)==="admin"&&f.jsx("span",{className:"algo-user__badge",children:"admin"}),f.jsx("span",{className:"algo-user__caret",children:"▼"})]}),p&&f.jsxs("div",{className:"algo-user__menu",children:[(v==null?void 0:v.role)==="admin"&&f.jsxs(f.Fragment,{children:[f.jsx(Vt,{to:"/admin",className:"algo-user__menu-item algo-user__menu-item--admin",onClick:()=>h(!1),children:"⚙ Admin_panel"}),f.jsx("div",{className:"algo-user__divider"})]}),f.jsx("button",{className:"algo-user__menu-item algo-user__menu-item--danger",onClick:k,children:"⏻ logout"})]})]})]}),f.jsxs("div",{className:"algo-hero",children:[f.jsx("div",{className:"algo-hero__glow","aria-hidden":"true"}),f.jsxs("div",{className:"algo-hero__inner",children:[f.jsx("p",{className:"algo-hero__eyebrow",children:"Destructive action"}),f.jsxs("h1",{className:"algo-hero__title",children:["Delete",f.jsx("span",{children:"_Problem"})]}),f.jsxs("p",{className:"algo-hero__subtitle",children:[e.length," problem",e.length===1?"":"s"," — this action cannot be undone."]})]})]}),f.jsxs("div",{className:"algo-content",children:[s&&f.jsxs("div",{className:"algo-error",children:[f.jsx(Ir,{size:18}),f.jsx("span",{children:s})]}),r?f.jsx("div",{className:"algo-skeleton-list",children:Array.from({length:5}).map((T,R)=>f.jsx("div",{className:"algo-skeleton-row",style:{animationDelay:`${R*.08}s`}},R))}):e.length===0?f.jsx("div",{className:"algo-empty",children:"// no problems found"}):f.jsx("div",{className:"algo-list",children:e.map((T,R)=>f.jsxs("div",{className:`algo-row ${c===T._id?"is-deleting":""}`,style:{animationDelay:`${Math.min(R,8)*.04}s`},children:[f.jsx("span",{className:"algo-row__index",children:String(R+1).padStart(2,"0")}),f.jsxs("div",{className:"algo-row__main",children:[f.jsx("span",{className:"algo-row__title",children:T.title}),f.jsxs("div",{className:"algo-row__badges",children:[f.jsx("span",{className:`algo-pill ${E(T.difficulty)}`,children:T.difficulty}),f.jsx("span",{className:"algo-pill algo-pill--tag",children:T.tags})]})]}),f.jsxs("button",{onClick:()=>C(T._id),className:"algo-btn algo-btn--delete",disabled:c===T._id,children:[c===T._id?f.jsx("span",{className:"algo-spin",children:f.jsx($r,{size:14})}):f.jsx($r,{size:14}),"Delete"]})]},T._id))})]})]})},gO=()=>{const[e,t]=O.useState([]),[r,i]=O.useState(!0),[s,o]=O.useState(null),[c,d]=O.useState(!1),p=O.useRef(null),h=ui(),y=Ta(),{user:b}=Ma(E=>E.auth);O.useEffect(()=>{k()},[]),O.useEffect(()=>{const E=T=>{p.current&&!p.current.contains(T.target)&&d(!1)};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[]);const v=O.useMemo(()=>((b==null?void 0:b.firstName)||"?").charAt(0).toUpperCase(),[b]),_=()=>{y(Sa()),d(!1)},k=async()=>{try{i(!0);const{data:E}=await kt.get("/problem/getAllProblem");t(E),o(null)}catch(E){o("Failed to fetch problems"),console.error(E)}finally{i(!1)}},A=E=>{h(`/admin/update/${E}`)},C=E=>{switch(E==null?void 0:E.toLowerCase()){case"easy":return"algo-pill--easy";case"medium":return"algo-pill--medium";case"hard":return"algo-pill--hard";default:return"algo-pill--neutral"}};return f.jsxs("div",{className:"algo-update-page",children:[f.jsx("style",{children:`
        .algo-update-page {
          --void: #0a0e14;
          --surface: #121826;
          --surface-2: #1a2233;
          --border: #232d40;
          --text-primary: #e8edf4;
          --text-muted: #7a8699;
          --accent: #ffb86b;
          --accent-dim: #ffb86b22;
          --secondary: #6c8eef;
          --secondary-dim: #6c8eef22;
          --danger: #ff6b6b;
          --danger-dim: #ff6b6b1f;
          --green: #5ce6a6;
          --green-dim: #5ce6a61f;

          min-height: 100vh;
          width: 100%;
          background: var(--void);
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          color: var(--text-primary);
        }

        @keyframes algo-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes algo-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes algo-menu-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes algo-glow-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(28px, -20px); }
        }
        @keyframes algo-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-update-page * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }

        /* ---- Nav ---- */
        .algo-nav {
          position: sticky;
          top: 0;
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.5rem;
          background: rgba(18, 24, 38, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }

        .algo-nav__left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .algo-nav__brand {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
          text-decoration: none;
        }

        .algo-nav__brand span { color: var(--accent); }

        .algo-nav__crumb {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.7rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .algo-nav__crumb:hover { color: var(--accent); border-color: var(--accent); }

        .algo-user { position: relative; }

        .algo-user__trigger {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.3rem 0.9rem 0.3rem 0.3rem;
          cursor: pointer;
          transition: border-color 0.15s ease;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .algo-user__trigger:hover { border-color: var(--accent); }

        .algo-user__avatar {
          width: 1.9rem;
          height: 1.9rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-weight: 700;
          font-size: 0.85rem;
          color: #1a1206;
          background: conic-gradient(from 180deg, var(--accent), var(--secondary), var(--accent));
        }

        .algo-user__badge {
          font-size: 0.62rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          color: var(--secondary);
          background: var(--secondary-dim);
          border: 1px solid rgba(108,142,239,0.4);
          padding: 0.1rem 0.4rem;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .algo-user__caret {
          font-size: 0.6rem;
          color: var(--text-muted);
          transition: transform 0.18s ease;
        }

        .algo-user__trigger.is-open .algo-user__caret { transform: rotate(180deg); }

        .algo-user__menu {
          position: absolute;
          right: 0;
          top: calc(100% + 0.5rem);
          width: 12rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 0.65rem;
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.6);
          overflow: hidden;
          animation: algo-menu-in 0.16s ease-out both;
        }

        .algo-user__menu-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.65rem 0.9rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 0.85rem;
          color: var(--text-primary);
          cursor: pointer;
          text-decoration: none;
          transition: background 0.12s ease;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-user__menu-item:hover { background: rgba(255,255,255,0.04); }
        .algo-user__menu-item--danger { color: var(--danger); }
        .algo-user__menu-item--admin { color: var(--secondary); }
        .algo-user__divider { height: 1px; background: var(--border); }

        /* ---- Hero ---- */
        .algo-hero {
          position: relative;
          overflow: hidden;
          padding: 2.25rem 1.5rem 1.75rem;
          background: radial-gradient(circle at 88% 0%, #241c14 0%, var(--void) 60%);
          border-bottom: 1px solid var(--border);
        }

        .algo-hero__glow {
          position: absolute;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-dim) 0%, transparent 70%);
          top: -7rem;
          right: -3rem;
          animation: algo-glow-drift 12s ease-in-out infinite;
          pointer-events: none;
        }

        .algo-hero__inner {
          position: relative;
          z-index: 1;
          max-width: 72rem;
          margin: 0 auto;
          animation: algo-fade-up 0.5s ease-out both;
        }

        .algo-hero__eyebrow {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          color: var(--accent);
          margin: 0 0 0.4rem;
        }

        .algo-hero__title {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0 0 0.3rem;
        }

        .algo-hero__title span { color: var(--accent); }

        .algo-hero__subtitle {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin: 0;
        }

        /* ---- Content ---- */
        .algo-content {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        .algo-list {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .algo-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 3px solid transparent;
          border-radius: 0.65rem;
          padding: 0.9rem 1.1rem;
          cursor: pointer;
          animation: algo-fade-up 0.35s ease-out both;
          transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
        }

        .algo-row:hover {
          transform: translateY(-2px);
          border-left-color: var(--accent);
          box-shadow: 0 14px 28px -18px rgba(0,0,0,0.6);
        }

        .algo-row__index {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          color: var(--text-muted);
          width: 1.75rem;
          flex-shrink: 0;
        }

        .algo-row__main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .algo-row__title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .algo-row__badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .algo-pill {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.7rem;
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
          border: 1px solid transparent;
          text-transform: capitalize;
        }

        .algo-pill--easy { color: var(--green); background: var(--green-dim); border-color: rgba(92,230,166,0.35); }
        .algo-pill--medium { color: var(--accent); background: var(--accent-dim); border-color: rgba(255,184,108,0.35); }
        .algo-pill--hard { color: var(--danger); background: var(--danger-dim); border-color: rgba(255,107,107,0.35); }
        .algo-pill--neutral { color: var(--text-muted); background: rgba(255,255,255,0.04); border-color: var(--border); }
        .algo-pill--tag { color: var(--secondary); background: var(--secondary-dim); border-color: rgba(108,142,239,0.35); }

        .algo-btn {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          padding: 0.45rem 0.9rem;
          border-radius: 0.45rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 1px solid transparent;
          transition: transform 0.12s ease, filter 0.15s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .algo-btn--update {
          background: var(--accent-dim);
          color: var(--accent);
          border-color: rgba(255,184,108,0.4);
        }

        .algo-btn--update:hover {
          background: var(--accent);
          color: #1a1206;
          transform: translateY(-1px);
        }

        /* ---- Loading / error / empty ---- */
        .algo-skeleton-list {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .algo-skeleton-row {
          height: 3.4rem;
          border-radius: 0.65rem;
          background: linear-gradient(90deg, var(--surface) 25%, var(--surface-2) 50%, var(--surface) 75%);
          background-size: 200% 100%;
          animation: algo-shimmer 1.4s ease-in-out infinite;
          border: 1px solid var(--border);
        }

        .algo-error {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--danger-dim);
          border: 1px solid rgba(255,107,107,0.4);
          color: #ffb3b3;
          border-radius: 0.6rem;
          padding: 0.9rem 1.1rem;
          font-size: 0.85rem;
          animation: algo-fade-in 0.3s ease-out both;
          margin-bottom: 1rem;
        }

        .algo-empty {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--text-muted);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.9rem;
        }
      `}),f.jsxs("nav",{className:"algo-nav",children:[f.jsxs("div",{className:"algo-nav__left",children:[f.jsxs(Vt,{to:"/",className:"algo-nav__brand",children:["Algo",f.jsx("span",{children:"Coding"})]}),f.jsx(Vt,{to:"/admin",className:"algo-nav__crumb",children:"← Admin_panel"})]}),f.jsxs("div",{className:"algo-user",ref:p,children:[f.jsxs("button",{type:"button",className:`algo-user__trigger ${c?"is-open":""}`,onClick:()=>d(E=>!E),children:[f.jsx("span",{className:"algo-user__avatar",children:v}),b==null?void 0:b.firstName,(b==null?void 0:b.role)==="admin"&&f.jsx("span",{className:"algo-user__badge",children:"admin"}),f.jsx("span",{className:"algo-user__caret",children:"▼"})]}),c&&f.jsxs("div",{className:"algo-user__menu",children:[(b==null?void 0:b.role)==="admin"&&f.jsxs(f.Fragment,{children:[f.jsx(Vt,{to:"/admin",className:"algo-user__menu-item algo-user__menu-item--admin",onClick:()=>d(!1),children:"⚙ Admin_panel"}),f.jsx("div",{className:"algo-user__divider"})]}),f.jsx("button",{className:"algo-user__menu-item algo-user__menu-item--danger",onClick:_,children:"⏻ logout"})]})]})]}),f.jsxs("div",{className:"algo-hero",children:[f.jsx("div",{className:"algo-hero__glow","aria-hidden":"true"}),f.jsxs("div",{className:"algo-hero__inner",children:[f.jsx("p",{className:"algo-hero__eyebrow",children:"Edit content"}),f.jsxs("h1",{className:"algo-hero__title",children:["Update",f.jsx("span",{children:"_Problem"})]}),f.jsxs("p",{className:"algo-hero__subtitle",children:[e.length," problem",e.length===1?"":"s"," — pick one to edit."]})]})]}),f.jsxs("div",{className:"algo-content",children:[s&&f.jsxs("div",{className:"algo-error",children:[f.jsx(Ir,{size:18}),f.jsx("span",{children:s})]}),r?f.jsx("div",{className:"algo-skeleton-list",children:Array.from({length:5}).map((E,T)=>f.jsx("div",{className:"algo-skeleton-row",style:{animationDelay:`${T*.08}s`}},T))}):e.length===0?f.jsx("div",{className:"algo-empty",children:"// no problems found"}):f.jsx("div",{className:"algo-list",children:e.map((E,T)=>f.jsxs("div",{className:"algo-row",onClick:()=>A(E._id),style:{animationDelay:`${Math.min(T,8)*.04}s`},children:[f.jsx("span",{className:"algo-row__index",children:String(T+1).padStart(2,"0")}),f.jsxs("div",{className:"algo-row__main",children:[f.jsx("span",{className:"algo-row__title",children:E.title}),f.jsxs("div",{className:"algo-row__badges",children:[f.jsx("span",{className:`algo-pill ${C(E.difficulty)}`,children:E.difficulty}),f.jsx("span",{className:"algo-pill algo-pill--tag",children:E.tags})]})]}),f.jsxs("button",{onClick:R=>{R.stopPropagation(),A(E._id)},className:"algo-btn algo-btn--update",children:[f.jsx(aC,{size:14}),"Update"]})]},E._id))})]})]})},yO=()=>{var R,Z;const[e,t]=O.useState([]),[r,i]=O.useState(!0),[s,o]=O.useState(null),[c,d]=O.useState(null),[p,h]=O.useState(!1),y=O.useRef(null),b=Ta(),{user:v}=Ma(D=>D.auth);O.useEffect(()=>{A()},[]),O.useEffect(()=>{const D=M=>{y.current&&!y.current.contains(M.target)&&h(!1)};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[]);const _=O.useMemo(()=>((v==null?void 0:v.firstName)||"?").charAt(0).toUpperCase(),[v]),k=()=>{b(Sa()),h(!1)},A=async()=>{try{i(!0);const{data:D}=await kt.get("/problem/getAllProblem");t(D),o(null)}catch(D){o("Failed to fetch problems"),console.error(D)}finally{i(!1)}},C=async D=>{if(window.confirm("Are you sure you want to delete this problem video?")){d(D);try{await kt.delete(`/video/delete/${D}`),t(e.filter(M=>M._id!==D))}catch(M){o(M),console.log(M)}finally{d(null)}}},E=typeof s=="string"?s:((Z=(R=s==null?void 0:s.response)==null?void 0:R.data)==null?void 0:Z.error)||"Something went wrong. Please try again.",T=D=>{switch(D==null?void 0:D.toLowerCase()){case"easy":return"algo-pill--easy";case"medium":return"algo-pill--medium";case"hard":return"algo-pill--hard";default:return"algo-pill--neutral"}};return f.jsxs("div",{className:"algo-video-page",children:[f.jsx("style",{children:`
        .algo-video-page {
          --void: #0a0e14;
          --surface: #121826;
          --surface-2: #1a2233;
          --border: #232d40;
          --text-primary: #e8edf4;
          --text-muted: #7a8699;
          --accent: #ffb86b;
          --accent-dim: #ffb86b22;
          --secondary: #6c8eef;
          --secondary-dim: #6c8eef22;
          --danger: #ff6b6b;
          --danger-dim: #ff6b6b1f;
          --green: #5ce6a6;
          --green-dim: #5ce6a61f;

          min-height: 100vh;
          width: 100%;
          background: var(--void);
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          color: var(--text-primary);
        }

        @keyframes algo-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes algo-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes algo-blink { 0%,45%{opacity:1} 50%,100%{opacity:0} }
        @keyframes algo-spin { to { transform: rotate(360deg); } }
        @keyframes algo-menu-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes algo-glow-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -20px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .algo-video-page * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }

        /* ---- Nav ---- */
        .algo-nav {
          position: sticky;
          top: 0;
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.5rem;
          background: rgba(18, 24, 38, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }

        .algo-nav__left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .algo-nav__brand {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
          text-decoration: none;
        }

        .algo-nav__brand span { color: var(--accent); }

        .algo-nav__crumb {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.7rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .algo-nav__crumb:hover { color: var(--accent); border-color: var(--accent); }

        .algo-user { position: relative; }

        .algo-user__trigger {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.3rem 0.9rem 0.3rem 0.3rem;
          cursor: pointer;
          transition: border-color 0.15s ease;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .algo-user__trigger:hover { border-color: var(--accent); }

        .algo-user__avatar {
          width: 1.9rem;
          height: 1.9rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-weight: 700;
          font-size: 0.85rem;
          color: #1a1206;
          background: conic-gradient(from 180deg, var(--accent), var(--secondary), var(--accent));
        }

        .algo-user__badge {
          font-size: 0.62rem;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          color: var(--secondary);
          background: var(--secondary-dim);
          border: 1px solid rgba(108,142,239,0.4);
          padding: 0.1rem 0.4rem;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .algo-user__caret {
          font-size: 0.6rem;
          color: var(--text-muted);
          transition: transform 0.18s ease;
        }

        .algo-user__trigger.is-open .algo-user__caret { transform: rotate(180deg); }

        .algo-user__menu {
          position: absolute;
          right: 0;
          top: calc(100% + 0.5rem);
          width: 12rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 0.65rem;
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.6);
          overflow: hidden;
          animation: algo-menu-in 0.16s ease-out both;
        }

        .algo-user__menu-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.65rem 0.9rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 0.85rem;
          color: var(--text-primary);
          cursor: pointer;
          text-decoration: none;
          transition: background 0.12s ease;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .algo-user__menu-item:hover { background: rgba(255,255,255,0.04); }
        .algo-user__menu-item--danger { color: var(--danger); }
        .algo-user__menu-item--admin { color: var(--secondary); }
        .algo-user__divider { height: 1px; background: var(--border); }

        /* ---- Hero ---- */
        .algo-hero {
          position: relative;
          overflow: hidden;
          padding: 2.25rem 1.5rem 1.75rem;
          background: radial-gradient(circle at 85% 0%, #16203a 0%, var(--void) 60%);
          border-bottom: 1px solid var(--border);
        }

        .algo-hero__glow {
          position: absolute;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-dim) 0%, transparent 70%);
          top: -7rem;
          right: -3rem;
          animation: algo-glow-drift 12s ease-in-out infinite;
          pointer-events: none;
        }

        .algo-hero__inner {
          position: relative;
          z-index: 1;
          max-width: 72rem;
          margin: 0 auto;
          animation: algo-fade-up 0.5s ease-out both;
        }

        .algo-hero__eyebrow {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          color: var(--accent);
          margin: 0 0 0.4rem;
        }

        .algo-hero__title {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0 0 0.3rem;
        }

        .algo-hero__title span { color: var(--accent); }

        .algo-hero__subtitle {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin: 0;
        }

        /* ---- Content ---- */
        .algo-content {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        .algo-list {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .algo-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 0.65rem;
          padding: 0.9rem 1.1rem;
          animation: algo-fade-up 0.35s ease-out both;
          transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
        }

        .algo-row:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -18px rgba(0,0,0,0.6);
          border-color: #2d3a54;
        }

        .algo-row__index {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          color: var(--text-muted);
          width: 1.75rem;
          flex-shrink: 0;
        }

        .algo-row__main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .algo-row__title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .algo-row__badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .algo-pill {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.7rem;
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
          border: 1px solid transparent;
          text-transform: capitalize;
        }

        .algo-pill--easy { color: var(--green); background: var(--green-dim); border-color: rgba(92,230,166,0.35); }
        .algo-pill--medium { color: var(--accent); background: var(--accent-dim); border-color: rgba(255,184,108,0.35); }
        .algo-pill--hard { color: var(--danger); background: var(--danger-dim); border-color: rgba(255,107,107,0.35); }
        .algo-pill--neutral { color: var(--text-muted); background: rgba(255,255,255,0.04); border-color: var(--border); }
        .algo-pill--tag { color: var(--secondary); background: var(--secondary-dim); border-color: rgba(108,142,239,0.35); }

        .algo-row__actions {
          display: flex;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .algo-btn {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.78rem;
          padding: 0.45rem 0.9rem;
          border-radius: 0.45rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          text-decoration: none;
          border: 1px solid transparent;
          transition: transform 0.12s ease, filter 0.15s ease, opacity 0.15s ease;
          white-space: nowrap;
        }

        .algo-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .algo-btn--upload {
          background: var(--secondary-dim);
          color: var(--secondary);
          border-color: rgba(108,142,239,0.4);
        }

        .algo-btn--upload:hover { background: var(--secondary); color: #0c1526; }

        .algo-btn--delete {
          background: var(--danger-dim);
          color: var(--danger);
          border-color: rgba(255,107,107,0.4);
        }

        .algo-btn--delete:hover:not(:disabled) { background: var(--danger); color: #250a0a; }

        .algo-spin { animation: algo-spin 0.9s linear infinite; }

        /* ---- Loading / error / empty ---- */
        .algo-skeleton-list {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .algo-skeleton-row {
          height: 3.4rem;
          border-radius: 0.65rem;
          background: linear-gradient(90deg, var(--surface) 25%, var(--surface-2) 50%, var(--surface) 75%);
          background-size: 200% 100%;
          animation: algo-shimmer 1.4s ease-in-out infinite;
          border: 1px solid var(--border);
        }

        @keyframes algo-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .algo-error {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--danger-dim);
          border: 1px solid rgba(255,107,107,0.4);
          color: #ffb3b3;
          border-radius: 0.6rem;
          padding: 0.9rem 1.1rem;
          font-size: 0.85rem;
          animation: algo-fade-in 0.3s ease-out both;
        }

        .algo-empty {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--text-muted);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 0.9rem;
        }
      `}),f.jsxs("nav",{className:"algo-nav",children:[f.jsxs("div",{className:"algo-nav__left",children:[f.jsxs(Vt,{to:"/",className:"algo-nav__brand",children:["Algo",f.jsx("span",{children:"Coding"})]}),f.jsx(Vt,{to:"/admin",className:"algo-nav__crumb",children:"← Admin_panel"})]}),f.jsxs("div",{className:"algo-user",ref:y,children:[f.jsxs("button",{type:"button",className:`algo-user__trigger ${p?"is-open":""}`,onClick:()=>h(D=>!D),children:[f.jsx("span",{className:"algo-user__avatar",children:_}),v==null?void 0:v.firstName,(v==null?void 0:v.role)==="admin"&&f.jsx("span",{className:"algo-user__badge",children:"admin"}),f.jsx("span",{className:"algo-user__caret",children:"▼"})]}),p&&f.jsxs("div",{className:"algo-user__menu",children:[(v==null?void 0:v.role)==="admin"&&f.jsxs(f.Fragment,{children:[f.jsx(Vt,{to:"/admin",className:"algo-user__menu-item algo-user__menu-item--admin",onClick:()=>h(!1),children:"⚙ Admin_panel"}),f.jsx("div",{className:"algo-user__divider"})]}),f.jsx("button",{className:"algo-user__menu-item algo-user__menu-item--danger",onClick:k,children:"⏻ logout"})]})]})]}),f.jsxs("div",{className:"algo-hero",children:[f.jsx("div",{className:"algo-hero__glow","aria-hidden":"true"}),f.jsxs("div",{className:"algo-hero__inner",children:[f.jsx("p",{className:"algo-hero__eyebrow",children:"Video management"}),f.jsxs("h1",{className:"algo-hero__title",children:["manage",f.jsx("span",{children:"_videos"})]}),f.jsxs("p",{className:"algo-hero__subtitle",children:[e.length," problem",e.length===1?"":"s"," — upload or remove editorial videos."]})]})]}),f.jsxs("div",{className:"algo-content",children:[s&&f.jsxs("div",{className:"algo-error",children:[f.jsx(Ir,{size:18}),f.jsx("span",{children:E})]}),r?f.jsx("div",{className:"algo-skeleton-list",style:{marginTop:s?"1rem":0},children:Array.from({length:5}).map((D,M)=>f.jsx("div",{className:"algo-skeleton-row",style:{animationDelay:`${M*.08}s`}},M))}):e.length===0?f.jsx("div",{className:"algo-empty",children:"// no problems found"}):f.jsx("div",{className:"algo-list",style:{marginTop:s?"1rem":0},children:e.map((D,M)=>f.jsxs("div",{className:"algo-row",style:{animationDelay:`${Math.min(M,8)*.04}s`},children:[f.jsx("span",{className:"algo-row__index",children:String(M+1).padStart(2,"0")}),f.jsxs("div",{className:"algo-row__main",children:[f.jsx("span",{className:"algo-row__title",children:D.title}),f.jsxs("div",{className:"algo-row__badges",children:[f.jsx("span",{className:`algo-pill ${T(D.difficulty)}`,children:D.difficulty}),f.jsx("span",{className:"algo-pill algo-pill--tag",children:D.tags})]})]}),f.jsxs("div",{className:"algo-row__actions",children:[f.jsxs(Vt,{to:`/admin/upload/${D._id}`,className:"algo-btn algo-btn--upload",children:[f.jsx(th,{size:14}),"Upload"]}),f.jsxs("button",{onClick:()=>C(D._id),className:"algo-btn algo-btn--delete",disabled:c===D._id,children:[c===D._id?f.jsx("span",{className:"algo-spin",children:f.jsx($r,{size:14})}):f.jsx($r,{size:14}),"Delete"]})]})]},D._id))})]})]})},bO=cn({title:ft().min(1,"Title is required"),description:ft().min(1,"Description is required"),difficulty:wa(["easy","medium","hard"]),tags:wa(["array","linkedList","graph","dp"]),visibleTestCases:_a(cn({input:ft().min(1,"Input is required"),output:ft().min(1,"Output is required"),explanation:ft().min(1,"Explanation is required")})).min(1,"At least one visible test case required"),hiddenTestCases:_a(cn({input:ft().min(1,"Input is required"),output:ft().min(1,"Output is required")})).min(1,"At least one hidden test case required"),startCode:_a(cn({language:wa(["C++","Java","JavaScript"]),initialCode:ft().min(1,"Initial code is required")})).length(3,"All three languages required"),referenceSolution:_a(cn({language:wa(["C++","Java","JavaScript"]),completeCode:ft().min(1,"Complete code is required")})).length(3,"All three languages required")}),xO={easy:"badge-success",medium:"badge-warning",hard:"badge-error"},rv={0:{name:"C++",dot:"bg-sky-500"},1:{name:"Java",dot:"bg-orange-500"},2:{name:"JavaScript",dot:"bg-yellow-400"}},vO={primary:"bg-primary/10 text-primary",secondary:"bg-secondary/10 text-secondary",accent:"bg-accent/10 text-accent"};function Rm({id:e,icon:t,title:r,subtitle:i,accent:s="primary",children:o}){return f.jsx("section",{id:e,className:"card bg-base-100 border border-base-200 shadow-sm scroll-mt-24",children:f.jsxs("div",{className:"card-body gap-6",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:`grid place-items-center w-10 h-10 rounded-xl ${vO[s]}`,children:f.jsx(t,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-lg font-semibold leading-tight",children:r}),i&&f.jsx("p",{className:"text-sm text-base-content/60",children:i})]})]}),o]})})}function zn({message:e}){return e?f.jsxs("span",{className:"label-text-alt flex items-center gap-1 text-error mt-1",children:[f.jsx(Ir,{className:"w-3.5 h-3.5"}),e]}):null}const av=["C++","Java","JavaScript"];function iv(e){return[...e||[]].sort((t,r)=>av.indexOf(t.language)-av.indexOf(r.language))}function _O(){var P,ae,K,z,le,q,se,de,Y,U,F,te,ve,x,j,$;const e=ui(),{id:t}=yh(),[r,i]=O.useState(0),[s,o]=O.useState(!0),[c,d]=O.useState(""),{register:p,control:h,handleSubmit:y,watch:b,reset:v,formState:{errors:_,isSubmitting:k}}=vr({resolver:ei(bO),defaultValues:{title:"",description:"",difficulty:"",tags:"",visibleTestCases:[],hiddenTestCases:[],startCode:[{language:"C++",initialCode:""},{language:"Java",initialCode:""},{language:"JavaScript",initialCode:""}],referenceSolution:[{language:"C++",completeCode:""},{language:"Java",completeCode:""},{language:"JavaScript",completeCode:""}]}}),{fields:A,append:C,remove:E}=Du({control:h,name:"visibleTestCases"}),{fields:T,append:R,remove:Z}=Du({control:h,name:"hiddenTestCases"}),D=b("difficulty");O.useEffect(()=>{t&&(async()=>{var X,ue;o(!0),d("");try{const{data:ne}=await kt.get(`/problem/problemById/${t}`);v({title:ne.title,description:ne.description,difficulty:ne.difficulty,tags:ne.tags,visibleTestCases:ne.visibleTestCases||[],hiddenTestCases:ne.hiddenTestCases||[],startCode:iv(ne.startCode),referenceSolution:iv(ne.referenceSolution)})}catch(ne){d(((ue=(X=ne.response)==null?void 0:X.data)==null?void 0:ue.message)||ne.message||"Failed to load problem")}finally{o(!1)}})()},[t,v]);const M=async S=>{var X,ue;try{await kt.put(`/problem/update/${t}`,S),alert("Problem updated successfully!"),e("/")}catch(ne){alert(`Error: ${((ue=(X=ne.response)==null?void 0:X.data)==null?void 0:ue.message)||ne.message}`)}};return s?f.jsx("div",{className:"min-h-screen grid place-items-center bg-base-200/40",children:f.jsxs("div",{className:"flex flex-col items-center gap-3 text-base-content/60",children:[f.jsx(eC,{className:"w-8 h-8 animate-spin"}),f.jsx("p",{className:"text-sm",children:"Loading problem..."})]})}):c?f.jsx("div",{className:"min-h-screen grid place-items-center bg-base-200/40",children:f.jsxs("div",{className:"alert alert-error max-w-md",children:[f.jsx(Ir,{className:"w-5 h-5"}),f.jsx("span",{children:c})]})}):f.jsxs("div",{className:"min-h-screen bg-base-200/40",children:[f.jsx("div",{className:"sticky top-0 z-20 border-b border-base-200 bg-base-100/80 backdrop-blur",children:f.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-5 flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"grid place-items-center w-11 h-11 rounded-xl bg-primary text-primary-content",children:f.jsx(_1,{className:"w-6 h-6"})}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-xl font-bold leading-tight",children:"Update Problem"}),f.jsx("p",{className:"text-sm text-base-content/60",children:"Edit the fields below and save to update this problem."})]})]}),f.jsxs("ul",{className:"steps hidden md:flex text-xs",children:[f.jsx("li",{className:"step step-primary",children:"Details"}),f.jsx("li",{className:`step ${A.length||T.length?"step-primary":""}`,children:"Test Cases"}),f.jsx("li",{className:"step",children:"Code"})]})]})}),f.jsxs("form",{onSubmit:y(M),className:"max-w-4xl mx-auto px-6 py-8 space-y-6",children:[f.jsx(Rm,{id:"details",icon:j1,title:"Basic Information",subtitle:"The title, prompt, and classification shown to solvers.",accent:"primary",children:f.jsxs("div",{className:"space-y-5",children:[f.jsxs("div",{className:"form-control",children:[f.jsx("label",{className:"label",children:f.jsx("span",{className:"label-text font-medium",children:"Title"})}),f.jsx("input",{...p("title"),placeholder:"e.g. Merge Two Sorted Linked Lists",className:`input input-bordered w-full focus:input-primary ${_.title?"input-error":""}`}),f.jsx(zn,{message:(P=_.title)==null?void 0:P.message})]}),f.jsxs("div",{className:"form-control",children:[f.jsx("label",{className:"label",children:f.jsx("span",{className:"label-text font-medium",children:"Description"})}),f.jsx("textarea",{...p("description"),placeholder:"Describe the problem statement, constraints, and examples...",className:`textarea textarea-bordered w-full h-36 leading-relaxed focus:textarea-primary ${_.description?"textarea-error":""}`}),f.jsx(zn,{message:(ae=_.description)==null?void 0:ae.message})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[f.jsxs("div",{className:"form-control",children:[f.jsxs("label",{className:"label",children:[f.jsx("span",{className:"label-text font-medium",children:"Difficulty"}),D&&f.jsx("span",{className:`badge badge-sm ${xO[D]}`,children:D})]}),f.jsxs("select",{...p("difficulty"),className:`select select-bordered w-full ${_.difficulty?"select-error":""}`,children:[f.jsx("option",{value:"",disabled:!0,children:"Select difficulty"}),f.jsx("option",{value:"easy",children:"Easy"}),f.jsx("option",{value:"medium",children:"Medium"}),f.jsx("option",{value:"hard",children:"Hard"})]}),f.jsx(zn,{message:(K=_.difficulty)==null?void 0:K.message})]}),f.jsxs("div",{className:"form-control",children:[f.jsx("label",{className:"label",children:f.jsx("span",{className:"label-text font-medium",children:"Tag"})}),f.jsxs("select",{...p("tags"),className:`select select-bordered w-full ${_.tags?"select-error":""}`,children:[f.jsx("option",{value:"",disabled:!0,children:"Select tag"}),f.jsx("option",{value:"array",children:"Array"}),f.jsx("option",{value:"linkedList",children:"Linked List"}),f.jsx("option",{value:"graph",children:"Graph"}),f.jsx("option",{value:"dp",children:"Dynamic Programming"})]}),f.jsx(zn,{message:(z=_.tags)==null?void 0:z.message})]})]})]})}),f.jsx(Rm,{id:"test-cases",icon:N1,title:"Test Cases",subtitle:"Visible cases teach the solver; hidden cases grade the submission.",accent:"secondary",children:f.jsxs("div",{className:"space-y-8",children:[f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(S1,{className:"w-4 h-4 text-info"}),f.jsx("h3",{className:"font-semibold text-sm",children:"Visible Test Cases"}),f.jsx("span",{className:"badge badge-sm badge-ghost",children:A.length})]}),f.jsxs("button",{type:"button",onClick:()=>C({input:"",output:"",explanation:""}),className:"btn btn-sm btn-outline btn-info gap-1",children:[f.jsx(Vs,{className:"w-4 h-4"})," Add case"]})]}),(q=(le=_.visibleTestCases)==null?void 0:le.root)!=null&&q.message||(se=_.visibleTestCases)!=null&&se.message?f.jsx(zn,{message:((Y=(de=_.visibleTestCases)==null?void 0:de.root)==null?void 0:Y.message)||((U=_.visibleTestCases)==null?void 0:U.message)}):null,f.jsxs("div",{className:"space-y-3",children:[A.map((S,X)=>{var ue,ne,pe,ge,Ae,De,ke,Me,Ue,Ce,xt,At,it,Gt,Pt;return f.jsxs("div",{className:"rounded-xl border border-info/20 bg-info/5 p-4 space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("span",{className:"badge badge-info badge-outline",children:["Case ",X+1]}),f.jsxs("button",{type:"button",onClick:()=>E(X),className:"btn btn-xs btn-ghost text-error gap-1",children:[f.jsx($r,{className:"w-3.5 h-3.5"})," Remove"]})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[f.jsxs("div",{className:"form-control",children:[f.jsx("input",{...p(`visibleTestCases.${X}.input`),placeholder:"Input",className:`input input-bordered input-sm w-full font-mono ${(ne=(ue=_.visibleTestCases)==null?void 0:ue[X])!=null&&ne.input?"input-error":""}`}),f.jsx(zn,{message:(Ae=(ge=(pe=_.visibleTestCases)==null?void 0:pe[X])==null?void 0:ge.input)==null?void 0:Ae.message})]}),f.jsxs("div",{className:"form-control",children:[f.jsx("input",{...p(`visibleTestCases.${X}.output`),placeholder:"Output",className:`input input-bordered input-sm w-full font-mono ${(ke=(De=_.visibleTestCases)==null?void 0:De[X])!=null&&ke.output?"input-error":""}`}),f.jsx(zn,{message:(Ce=(Ue=(Me=_.visibleTestCases)==null?void 0:Me[X])==null?void 0:Ue.output)==null?void 0:Ce.message})]})]}),f.jsxs("div",{className:"form-control",children:[f.jsx("textarea",{...p(`visibleTestCases.${X}.explanation`),placeholder:"Explanation shown to the solver",className:`textarea textarea-bordered textarea-sm w-full ${(At=(xt=_.visibleTestCases)==null?void 0:xt[X])!=null&&At.explanation?"textarea-error":""}`}),f.jsx(zn,{message:(Pt=(Gt=(it=_.visibleTestCases)==null?void 0:it[X])==null?void 0:Gt.explanation)==null?void 0:Pt.message})]})]},S.id)}),A.length===0&&f.jsx("p",{className:"text-sm text-base-content/50 italic px-1",children:"No visible test cases yet — add at least one."})]})]}),f.jsx("div",{className:"divider my-0"}),f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(k1,{className:"w-4 h-4 text-warning"}),f.jsx("h3",{className:"font-semibold text-sm",children:"Hidden Test Cases"}),f.jsx("span",{className:"badge badge-sm badge-ghost",children:T.length})]}),f.jsxs("button",{type:"button",onClick:()=>R({input:"",output:""}),className:"btn btn-sm btn-outline btn-warning gap-1",children:[f.jsx(Vs,{className:"w-4 h-4"})," Add case"]})]}),(te=(F=_.hiddenTestCases)==null?void 0:F.root)!=null&&te.message||(ve=_.hiddenTestCases)!=null&&ve.message?f.jsx(zn,{message:((j=(x=_.hiddenTestCases)==null?void 0:x.root)==null?void 0:j.message)||(($=_.hiddenTestCases)==null?void 0:$.message)}):null,f.jsxs("div",{className:"space-y-3",children:[T.map((S,X)=>{var ue,ne,pe,ge,Ae,De,ke,Me,Ue,Ce;return f.jsxs("div",{className:"rounded-xl border border-warning/20 bg-warning/5 p-4 space-y-3",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("span",{className:"badge badge-warning badge-outline",children:["Case ",X+1]}),f.jsxs("button",{type:"button",onClick:()=>Z(X),className:"btn btn-xs btn-ghost text-error gap-1",children:[f.jsx($r,{className:"w-3.5 h-3.5"})," Remove"]})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[f.jsxs("div",{className:"form-control",children:[f.jsx("input",{...p(`hiddenTestCases.${X}.input`),placeholder:"Input",className:`input input-bordered input-sm w-full font-mono ${(ne=(ue=_.hiddenTestCases)==null?void 0:ue[X])!=null&&ne.input?"input-error":""}`}),f.jsx(zn,{message:(Ae=(ge=(pe=_.hiddenTestCases)==null?void 0:pe[X])==null?void 0:ge.input)==null?void 0:Ae.message})]}),f.jsxs("div",{className:"form-control",children:[f.jsx("input",{...p(`hiddenTestCases.${X}.output`),placeholder:"Output",className:`input input-bordered input-sm w-full font-mono ${(ke=(De=_.hiddenTestCases)==null?void 0:De[X])!=null&&ke.output?"input-error":""}`}),f.jsx(zn,{message:(Ce=(Ue=(Me=_.hiddenTestCases)==null?void 0:Me[X])==null?void 0:Ue.output)==null?void 0:Ce.message})]})]})]},S.id)}),T.length===0&&f.jsx("p",{className:"text-sm text-base-content/50 italic px-1",children:"No hidden test cases yet — add at least one."})]})]})]})}),f.jsx(Rm,{id:"code",icon:w1,title:"Code Templates",subtitle:"Provide starter code and a working reference solution per language.",accent:"accent",children:f.jsxs("div",{className:"space-y-4",children:[f.jsx("div",{role:"tablist",className:"tabs tabs-boxed w-fit bg-base-200",children:[0,1,2].map(S=>{var X,ue;return f.jsxs("a",{role:"tab",onClick:()=>i(S),className:`tab gap-2 ${r===S?"tab-active":""}`,children:[f.jsx("span",{className:`w-2 h-2 rounded-full ${rv[S].dot}`}),rv[S].name,(((X=_.startCode)==null?void 0:X[S])||((ue=_.referenceSolution)==null?void 0:ue[S]))&&f.jsx(Ir,{className:"w-3.5 h-3.5 text-error"})]},S)})}),[0,1,2].map(S=>{var X,ue,ne,pe,ge,Ae,De,ke,Me,Ue;return f.jsxs("div",{className:`grid grid-cols-1 lg:grid-cols-2 gap-4 ${r===S?"":"hidden"}`,children:[f.jsxs("div",{className:"form-control",children:[f.jsxs("label",{className:"label",children:[f.jsx("span",{className:"label-text font-medium",children:"Initial Code"}),f.jsx("span",{className:"label-text-alt text-base-content/50",children:"Shown to the solver"})]}),f.jsx("textarea",{...p(`startCode.${S}.initialCode`),className:`textarea textarea-bordered w-full font-mono text-sm bg-base-300/60 leading-relaxed ${(ue=(X=_.startCode)==null?void 0:X[S])!=null&&ue.initialCode?"textarea-error":""}`,rows:10,spellCheck:!1}),f.jsx(zn,{message:(ge=(pe=(ne=_.startCode)==null?void 0:ne[S])==null?void 0:pe.initialCode)==null?void 0:ge.message})]}),f.jsxs("div",{className:"form-control",children:[f.jsxs("label",{className:"label",children:[f.jsx("span",{className:"label-text font-medium",children:"Reference Solution"}),f.jsx("span",{className:"label-text-alt text-base-content/50",children:"Used for grading"})]}),f.jsx("textarea",{...p(`referenceSolution.${S}.completeCode`),className:`textarea textarea-bordered w-full font-mono text-sm bg-base-300/60 leading-relaxed ${(De=(Ae=_.referenceSolution)==null?void 0:Ae[S])!=null&&De.completeCode?"textarea-error":""}`,rows:10,spellCheck:!1}),f.jsx(zn,{message:(Ue=(Me=(ke=_.referenceSolution)==null?void 0:ke[S])==null?void 0:Me.completeCode)==null?void 0:Ue.message})]})]},S)})]})}),f.jsx("div",{className:"sticky bottom-0 z-10 -mx-6 px-6 py-4 bg-gradient-to-t from-base-200/40 via-base-200/40 to-transparent backdrop-blur-sm",children:f.jsxs("button",{type:"submit",disabled:k,className:"btn btn-primary w-full gap-2 shadow-md",children:[k?f.jsx("span",{className:"loading loading-spinner loading-sm"}):f.jsx(dC,{className:"w-4 h-4"}),k?"Saving Changes...":"Update Problem"]})})]})]})}function wO(){var K;const{problemId:e}=yh(),t=Ta(),{user:r}=Ma(z=>z.auth),[i,s]=O.useState(!1),[o,c]=O.useState(0),[d,p]=O.useState(null),[h,y]=O.useState(!1),b=O.useRef(null),{register:v,handleSubmit:_,watch:k,formState:{errors:A},reset:C,setError:E,clearErrors:T}=vr(),R=(K=k("videoFile"))==null?void 0:K[0],Z=O.useMemo(()=>((r==null?void 0:r.firstName)||"?").charAt(0).toUpperCase(),[r]);O.useEffect(()=>{const z=le=>{b.current&&!b.current.contains(le.target)&&y(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[]);const D=()=>{t(Sa()),y(!1)},M=async z=>{var q,se;const le=z.videoFile[0];s(!0),c(0),T();try{const de=await kt.get(`/video/create/${e}`),{signature:Y,timestamp:U,public_id:F,api_key:te,cloud_name:ve,upload_url:x}=de.data,j=new FormData;j.append("file",le),j.append("signature",Y),j.append("timestamp",U),j.append("public_id",F),j.append("api_key",te);const S=(await Ct.post(x,j,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:ue=>{const ne=Math.round(ue.loaded*100/ue.total);c(ne)}})).data,X=await kt.post("/video/save",{problemId:e,cloudinaryPublicId:S.public_id,secureUrl:S.secure_url,duration:S.duration});p(X.data.videoSolution),C()}catch(de){console.error("Upload error:",de),E("root",{type:"manual",message:((se=(q=de.response)==null?void 0:q.data)==null?void 0:se.message)||"Upload failed. Please try again."})}finally{s(!1),c(0)}},P=z=>{if(z===0)return"0 Bytes";const le=1024,q=["Bytes","KB","MB","GB"],se=Math.floor(Math.log(z)/Math.log(le));return parseFloat((z/Math.pow(le,se)).toFixed(2))+" "+q[se]},ae=z=>{const le=Math.floor(z/60),q=Math.floor(z%60);return`${le}:${q.toString().padStart(2,"0")}`};return f.jsxs("div",{className:"algo-upload-page",children:[f.jsx("style",{children:`
            .algo-upload-page {
              --void: #0a0e14;
              --surface: #121826;
              --surface-2: #1a2233;
              --border: #232d40;
              --border-focus: #ffb86b;
              --text-primary: #e8edf4;
              --text-muted: #7a8699;
              --accent: #ffb86b;
              --accent-dim: #ffb86b22;
              --secondary: #6c8eef;
              --secondary-dim: #6c8eef22;
              --danger: #ff6b6b;
              --danger-dim: #ff6b6b1f;
              --green: #5ce6a6;
              --green-dim: #5ce6a61f;

              min-height: 100vh;
              width: 100%;
              background: var(--void);
              font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
              color: var(--text-primary);
            }

            @keyframes algo-drift {
              from { transform: translateY(0) rotate(0deg); }
              to { transform: translateY(-34px) rotate(5deg); }
            }
            @keyframes algo-fade-up {
              from { opacity: 0; transform: translateY(16px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes algo-fade-in { from { opacity: 0; } to { opacity: 1; } }
            @keyframes algo-blink { 0%,45%{opacity:1} 50%,100%{opacity:0} }
            @keyframes algo-stripes { from { background-position: 0 0; } to { background-position: 28px 0; } }
            @keyframes algo-pop {
              0% { transform: scale(0.85); opacity: 0; }
              60% { transform: scale(1.03); opacity: 1; }
              100% { transform: scale(1); opacity: 1; }
            }
            @keyframes algo-celebrate {
              0% { box-shadow: 0 0 0 0 rgba(92,230,166,0.5); }
              100% { box-shadow: 0 0 0 20px rgba(92,230,166,0); }
            }
            @keyframes algo-spin { to { transform: rotate(360deg); } }
            @keyframes algo-menu-in {
              from { opacity: 0; transform: translateY(-6px) scale(0.97); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }

            @media (prefers-reduced-motion: reduce) {
              .algo-upload-page * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
            }

            /* ---- Nav ---- */
            .algo-nav {
              position: sticky;
              top: 0;
              z-index: 30;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0.9rem 1.5rem;
              background: rgba(18, 24, 38, 0.85);
              backdrop-filter: blur(10px);
              border-bottom: 1px solid var(--border);
            }

            .algo-nav__left {
              display: flex;
              align-items: center;
              gap: 1.25rem;
            }

            .algo-nav__brand {
              font-family: 'JetBrains Mono', ui-monospace, monospace;
              font-weight: 700;
              font-size: 1.05rem;
              color: var(--text-primary);
              text-decoration: none;
            }

            .algo-nav__brand span { color: var(--accent); }

            .algo-nav__crumb {
              font-family: 'JetBrains Mono', ui-monospace, monospace;
              font-size: 0.8rem;
              color: var(--text-muted);
              text-decoration: none;
              display: flex;
              align-items: center;
              gap: 0.4rem;
              padding: 0.3rem 0.7rem;
              border: 1px solid var(--border);
              border-radius: 999px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }

            .algo-nav__crumb:hover {
              color: var(--accent);
              border-color: var(--accent);
            }

            .algo-user { position: relative; }

            .algo-user__trigger {
              display: flex;
              align-items: center;
              gap: 0.6rem;
              background: var(--surface-2);
              border: 1px solid var(--border);
              border-radius: 999px;
              padding: 0.3rem 0.9rem 0.3rem 0.3rem;
              cursor: pointer;
              transition: border-color 0.15s ease;
              color: var(--text-primary);
              font-size: 0.9rem;
            }

            .algo-user__trigger:hover { border-color: var(--accent); }

            .algo-user__avatar {
              width: 1.9rem;
              height: 1.9rem;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: 'JetBrains Mono', ui-monospace, monospace;
              font-weight: 700;
              font-size: 0.85rem;
              color: #1a1206;
              background: conic-gradient(from 180deg, var(--accent), var(--secondary), var(--accent));
            }

            .algo-user__badge {
              font-size: 0.62rem;
              font-family: 'JetBrains Mono', ui-monospace, monospace;
              color: var(--secondary);
              background: var(--secondary-dim);
              border: 1px solid rgba(108,142,239,0.4);
              padding: 0.1rem 0.4rem;
              border-radius: 999px;
              text-transform: uppercase;
              letter-spacing: 0.04em;
            }

            .algo-user__caret {
              font-size: 0.6rem;
              color: var(--text-muted);
              transition: transform 0.18s ease;
            }

            .algo-user__trigger.is-open .algo-user__caret { transform: rotate(180deg); }

            .algo-user__menu {
              position: absolute;
              right: 0;
              top: calc(100% + 0.5rem);
              width: 12rem;
              background: var(--surface-2);
              border: 1px solid var(--border);
              border-radius: 0.65rem;
              box-shadow: 0 20px 40px -12px rgba(0,0,0,0.6);
              overflow: hidden;
              animation: algo-menu-in 0.16s ease-out both;
            }

            .algo-user__menu-item {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              width: 100%;
              padding: 0.65rem 0.9rem;
              background: none;
              border: none;
              text-align: left;
              font-size: 0.85rem;
              color: var(--text-primary);
              cursor: pointer;
              text-decoration: none;
              transition: background 0.12s ease;
              font-family: 'JetBrains Mono', ui-monospace, monospace;
            }

            .algo-user__menu-item:hover { background: rgba(255,255,255,0.04); }
            .algo-user__menu-item--danger { color: var(--danger); }
            .algo-user__menu-item--admin { color: var(--secondary); }
            .algo-user__divider { height: 1px; background: var(--border); }

            /* ---- Upload card ---- */
            .algo-upload {
              position: relative;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 3rem 1.25rem 4rem;
              background: radial-gradient(circle at 25% 0%, #16203a 0%, var(--void) 55%);
            }

            .algo-upload__glyphs {
              position: absolute;
              inset: 0;
              overflow: hidden;
              pointer-events: none;
            }

            .algo-upload__glyph {
              position: absolute;
              color: var(--border);
              font-family: 'JetBrains Mono', ui-monospace, monospace;
              font-size: 1.4rem;
              opacity: 0.3;
              animation: algo-drift linear infinite;
              user-select: none;
            }

            .algo-upload__card {
              position: relative;
              z-index: 1;
              width: 100%;
              max-width: 30rem;
              background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
              border: 1px solid var(--border);
              border-radius: 1rem;
              padding: 2.25rem 2rem;
              box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
              animation: algo-fade-up 0.5s ease-out both;
            }

            .algo-upload__eyebrow {
              font-family: 'JetBrains Mono', ui-monospace, monospace;
              font-size: 0.78rem;
              color: var(--accent);
              margin-bottom: 0.6rem;
              min-height: 1.1em;
            }

            .algo-upload__cursor {
              display: inline-block;
              width: 0.5em;
              background: var(--accent);
              margin-left: 2px;
              animation: algo-blink 1s step-start infinite;
            }

            .algo-upload__title {
              font-family: 'JetBrains Mono', ui-monospace, monospace;
              font-size: 1.4rem;
              font-weight: 700;
              margin: 0 0 1.6rem;
            }

            .algo-dropzone {
              position: relative;
              border: 1.5px dashed var(--border);
              border-radius: 0.75rem;
              padding: 2rem 1.25rem;
              text-align: center;
              cursor: pointer;
              transition: border-color 0.2s ease, background 0.2s ease;
              background: #0d1320;
              display: block;
            }

            .algo-dropzone:hover { border-color: var(--accent); background: #0f1523; }
            .algo-dropzone.has-error { border-color: var(--danger); }
            .algo-dropzone.is-disabled { opacity: 0.6; cursor: not-allowed; }

            .algo-dropzone__input {
              position: absolute;
              inset: 0;
              opacity: 0;
              cursor: pointer;
              width: 100%;
              height: 100%;
            }

            .algo-dropzone__icon {
              width: 3rem;
              height: 3rem;
              border-radius: 50%;
              background: var(--accent-dim);
              color: var(--accent);
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 0.9rem;
            }

            .algo-dropzone__label { font-size: 0.9rem; color: var(--text-primary); font-weight: 600; margin: 0 0 0.3rem; }
            .algo-dropzone__hint { font-size: 0.75rem; color: var(--text-muted); font-family: 'JetBrains Mono', ui-monospace, monospace; }

            .algo-field__error {
              display: block;
              font-size: 0.78rem;
              color: var(--danger);
              margin-top: 0.5rem;
              font-family: 'JetBrains Mono', ui-monospace, monospace;
            }

            .algo-file-chip {
              display: flex;
              align-items: center;
              gap: 0.75rem;
              background: var(--secondary-dim);
              border: 1px solid rgba(108,142,239,0.35);
              border-radius: 0.6rem;
              padding: 0.75rem 1rem;
              margin-top: 1rem;
              animation: algo-fade-in 0.25s ease-out both;
            }

            .algo-file-chip__icon { color: var(--secondary); flex-shrink: 0; }
            .algo-file-chip__name { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); word-break: break-all; }
            .algo-file-chip__size { font-size: 0.75rem; color: var(--text-muted); font-family: 'JetBrains Mono', ui-monospace, monospace; }

            .algo-progress { margin-top: 1.2rem; animation: algo-fade-in 0.25s ease-out both; }

            .algo-progress__row {
              display: flex;
              justify-content: space-between;
              font-size: 0.78rem;
              color: var(--text-muted);
              margin-bottom: 0.4rem;
              font-family: 'JetBrains Mono', ui-monospace, monospace;
            }

            .algo-progress__row span:last-child { color: var(--accent); font-weight: 700; }

            .algo-progress__track {
              width: 100%;
              height: 8px;
              border-radius: 999px;
              background: var(--surface-2);
              border: 1px solid var(--border);
              overflow: hidden;
            }

            .algo-progress__fill {
              height: 100%;
              border-radius: 999px;
              background-image: repeating-linear-gradient(
                45deg,
                rgba(255,255,255,0.18) 0,
                rgba(255,255,255,0.18) 8px,
                transparent 8px,
                transparent 16px
              ), linear-gradient(90deg, var(--secondary), var(--accent));
              background-size: 28px 28px, 100% 100%;
              animation: algo-stripes 0.7s linear infinite;
              transition: width 0.3s ease;
            }

            .algo-alert {
              display: flex;
              align-items: flex-start;
              gap: 0.6rem;
              border-radius: 0.6rem;
              padding: 0.85rem 1rem;
              margin-top: 1.2rem;
              font-size: 0.85rem;
              animation: algo-fade-in 0.25s ease-out both;
            }

            .algo-alert--error { background: var(--danger-dim); border: 1px solid rgba(255,107,107,0.4); color: #ffb3b3; }
            .algo-alert--success {
              background: var(--green-dim);
              border: 1px solid rgba(92,230,166,0.4);
              color: #a9f2d2;
              animation: algo-pop 0.4s ease-out both, algo-celebrate 0.9s ease-out;
            }

            .algo-alert__title { font-weight: 700; margin: 0 0 0.2rem; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.85rem; }
            .algo-alert__meta { font-size: 0.78rem; margin: 0.1rem 0; font-family: 'JetBrains Mono', ui-monospace, monospace; opacity: 0.9; }

            .algo-submit-row { display: flex; justify-content: flex-end; margin-top: 1.6rem; }

            .algo-submit {
              padding: 0.7rem 1.4rem;
              border-radius: 0.5rem;
              border: none;
              background: var(--accent);
              color: #1a1206;
              font-weight: 700;
              font-size: 0.9rem;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              transition: transform 0.12s ease, filter 0.15s ease;
            }

            .algo-submit:hover:not(:disabled) { filter: brightness(1.08); transform: translateY(-1px); }
            .algo-submit:disabled { opacity: 0.75; cursor: not-allowed; }
            .algo-spin { animation: algo-spin 0.9s linear infinite; }
          `}),f.jsxs("nav",{className:"algo-nav",children:[f.jsxs("div",{className:"algo-nav__left",children:[f.jsxs(Vt,{to:"/",className:"algo-nav__brand",children:["Algo",f.jsx("span",{children:"Coding"})]}),f.jsx(Vt,{to:"/admin",className:"algo-nav__crumb",children:"← Admin_panel"})]}),f.jsxs("div",{className:"algo-user",ref:b,children:[f.jsxs("button",{type:"button",className:`algo-user__trigger ${h?"is-open":""}`,onClick:()=>y(z=>!z),children:[f.jsx("span",{className:"algo-user__avatar",children:Z}),r==null?void 0:r.firstName,(r==null?void 0:r.role)==="admin"&&f.jsx("span",{className:"algo-user__badge",children:"admin"}),f.jsx("span",{className:"algo-user__caret",children:"▼"})]}),h&&f.jsxs("div",{className:"algo-user__menu",children:[(r==null?void 0:r.role)==="admin"&&f.jsxs(f.Fragment,{children:[f.jsx(Vt,{to:"/admin",className:"algo-user__menu-item algo-user__menu-item--admin",onClick:()=>y(!1),children:"⚙ Admin_panel"}),f.jsx("div",{className:"algo-user__divider"})]}),f.jsx("button",{className:"algo-user__menu-item algo-user__menu-item--danger",onClick:D,children:"⏻ logout"})]})]})]}),f.jsxs("div",{className:"algo-upload",children:[f.jsx("div",{className:"algo-upload__glyphs","aria-hidden":"true",children:[{t:"{ }",top:"10%",left:"8%",size:"1.5rem",dur:"15s",delay:"0s"},{t:"▶",top:"78%",left:"88%",size:"1.2rem",dur:"18s",delay:"1s"},{t:"[ ]",top:"20%",left:"88%",size:"1.3rem",dur:"17s",delay:"0.5s"},{t:"01",top:"85%",left:"6%",size:"1.1rem",dur:"20s",delay:"2s"}].map((z,le)=>f.jsx("span",{className:"algo-upload__glyph",style:{top:z.top,left:z.left,fontSize:z.size,animationDuration:z.dur,animationDelay:z.delay},children:z.t},le))}),f.jsxs("div",{className:"algo-upload__card",children:[f.jsxs("div",{className:"algo-upload__eyebrow",children:["> upload --target=editorial",f.jsx("span",{className:"algo-upload__cursor",children:" "})]}),f.jsx("h2",{className:"algo-upload__title",children:"Upload Video"}),f.jsxs("form",{onSubmit:_(M),noValidate:!0,children:[f.jsxs("label",{className:`algo-dropzone ${A.videoFile?"has-error":""} ${i?"is-disabled":""}`,children:[f.jsx("input",{type:"file",accept:"video/*",className:"algo-dropzone__input",...v("videoFile",{required:"Please select a video file",validate:{isVideo:z=>!z||!z[0]?"Please select a video file":z[0].type.startsWith("video/")||"Please select a valid video file",fileSize:z=>{if(!z||!z[0])return!0;const le=z[0],q=100*1024*1024;return le.size<=q||"File size must be less than 100MB"}}}),disabled:i}),f.jsx("div",{className:"algo-dropzone__icon",children:f.jsx(th,{size:22})}),f.jsx("p",{className:"algo-dropzone__label",children:"Click to choose a video file"}),f.jsx("p",{className:"algo-dropzone__hint",children:"MP4, MOV, WEBM — up to 100MB"})]}),A.videoFile&&f.jsxs("span",{className:"algo-field__error",children:["// ",A.videoFile.message]}),R&&f.jsxs("div",{className:"algo-file-chip",children:[f.jsx(QE,{size:20,className:"algo-file-chip__icon"}),f.jsxs("div",{children:[f.jsx("div",{className:"algo-file-chip__name",children:R.name}),f.jsx("div",{className:"algo-file-chip__size",children:P(R.size)})]})]}),i&&f.jsxs("div",{className:"algo-progress",children:[f.jsxs("div",{className:"algo-progress__row",children:[f.jsx("span",{children:"uploading…"}),f.jsxs("span",{children:[o,"%"]})]}),f.jsx("div",{className:"algo-progress__track",children:f.jsx("div",{className:"algo-progress__fill",style:{width:`${o}%`}})})]}),A.root&&f.jsxs("div",{className:"algo-alert algo-alert--error",children:[f.jsx(Ir,{size:18}),f.jsx("span",{children:A.root.message})]}),d&&f.jsxs("div",{className:"algo-alert algo-alert--success",children:[f.jsx(HE,{size:18}),f.jsxs("div",{children:[f.jsx("p",{className:"algo-alert__title",children:"Upload successful"}),f.jsxs("p",{className:"algo-alert__meta",children:["Duration: ",ae(d.duration)]}),f.jsxs("p",{className:"algo-alert__meta",children:["Uploaded: ",new Date(d.uploadedAt).toLocaleString()]})]})]}),f.jsx("div",{className:"algo-submit-row",children:f.jsx("button",{type:"submit",disabled:i,className:"algo-submit",children:i?f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"algo-spin",children:f.jsx(th,{size:16})}),"Uploading…"]}):"Upload Video"})})]})]})]})]})}function kO(){const e=Ta(),{isAuthenticated:t,user:r,loading:i}=Ma(s=>s.auth);return O.useEffect(()=>{e(Au())},[e]),i?f.jsx("div",{className:"min-h-screen flex items-center justify-center",children:f.jsx("span",{className:"loading loading-spinner loading-lg"})}):f.jsx(f.Fragment,{children:f.jsxs(tS,{children:[f.jsx(Xn,{path:"/",element:t?f.jsx(CE,{}):f.jsx(pr,{to:"/signup"})}),f.jsx(Xn,{path:"/login",element:t?f.jsx(pr,{to:"/"}):f.jsx(SE,{})}),f.jsx(Xn,{path:"/signup",element:t?f.jsx(pr,{to:"/"}):f.jsx(EE,{})}),f.jsx(Xn,{path:"/admin",element:t&&(r==null?void 0:r.role)==="admin"?f.jsx(hO,{}):f.jsx(pr,{to:"/"})}),f.jsx(Xn,{path:"/admin/create",element:t&&(r==null?void 0:r.role)==="admin"?f.jsx(NC,{}):f.jsx(pr,{to:"/"})}),f.jsx(Xn,{path:"/admin/delete",element:t&&(r==null?void 0:r.role)==="admin"?f.jsx(pO,{}):f.jsx(pr,{to:"/"})}),f.jsx(Xn,{path:"/admin/update",element:t&&(r==null?void 0:r.role)==="admin"?f.jsx(gO,{}):f.jsx(pr,{to:"/"})}),f.jsx(Xn,{path:"/admin/upload/:problemId",element:t&&(r==null?void 0:r.role)==="admin"?f.jsx(wO,{}):f.jsx(pr,{to:"/"})}),f.jsx(Xn,{path:"/admin/update/:id",element:t&&(r==null?void 0:r.role)==="admin"?f.jsx(_O,{}):f.jsx(pr,{to:"/"})}),f.jsx(Xn,{path:"/problem/:problemId",element:f.jsx(fO,{})}),f.jsx(Xn,{path:"/admin/video",element:t&&(r==null?void 0:r.role)==="admin"?f.jsx(yO,{}):f.jsx(pr,{to:"/"})})]})})}const SO=_5({reducer:{auth:xE}});ck.createRoot(document.getElementById("root")).render(f.jsx(O.StrictMode,{children:f.jsx($j,{store:SO,children:f.jsx(jS,{children:f.jsx(kO,{})})})}))});export default jO();
