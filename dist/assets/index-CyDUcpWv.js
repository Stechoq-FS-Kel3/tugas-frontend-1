(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function wi(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const te={},zt=[],Ie=()=>{},kl=()=>!1,mr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ei=e=>e.startsWith("onUpdate:"),me=Object.assign,ki=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Al=Object.prototype.hasOwnProperty,W=(e,t)=>Al.call(e,t),H=Array.isArray,Dt=e=>Cn(e)==="[object Map]",hr=e=>Cn(e)==="[object Set]",oa=e=>Cn(e)==="[object Date]",B=e=>typeof e=="function",le=e=>typeof e=="string",Je=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",To=e=>(ee(e)||B(e))&&B(e.then)&&B(e.catch),Io=Object.prototype.toString,Cn=e=>Io.call(e),Sl=e=>Cn(e).slice(8,-1),No=e=>Cn(e)==="[object Object]",Ai=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,nn=wi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ol=/-(\w)/g,We=pr(e=>e.replace(Ol,(t,n)=>n?n.toUpperCase():"")),Pl=/\B([A-Z])/g,Gt=pr(e=>e.replace(Pl,"-$1").toLowerCase()),gr=pr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ir=pr(e=>e?`on${gr(e)}`:""),pt=(e,t)=>!Object.is(e,t),Xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mo=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Cl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let sa;const Lo=()=>sa||(sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Si(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=le(r)?Nl(r):Si(r);if(i)for(const a in i)t[a]=i[a]}return t}else if(le(e)||ee(e))return e}const Rl=/;(?![^(]*\))/g,Tl=/:([^]+)/,Il=/\/\*[^]*?\*\//g;function Nl(e){const t={};return e.replace(Il,"").split(Rl).forEach(n=>{if(n){const r=n.split(Tl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Oi(e){let t="";if(le(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=Oi(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ml="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ll=wi(Ml);function jo(e){return!!e||e===""}function jl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=vr(e[r],t[r]);return n}function vr(e,t){if(e===t)return!0;let n=oa(e),r=oa(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Je(e),r=Je(t),n||r)return e===t;if(n=H(e),r=H(t),n||r)return n&&r?jl(e,t):!1;if(n=ee(e),r=ee(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,a=Object.keys(t).length;if(i!==a)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!vr(e[o],t[o]))return!1}}return String(e)===String(t)}function Fo(e,t){return e.findIndex(n=>vr(n,t))}const Fl=e=>le(e)?e:e==null?"":H(e)||ee(e)&&(e.toString===Io||!B(e.toString))?JSON.stringify(e,$o,2):String(e),$o=(e,t)=>t&&t.__v_isRef?$o(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],a)=>(n[Nr(r,a)+" =>"]=i,n),{})}:hr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Nr(n))}:Je(t)?Nr(t):ee(t)&&!H(t)&&!No(t)?String(t):t,Nr=(e,t="")=>{var n;return Je(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class $l{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function zl(e,t=Me){t&&t.active&&t.effects.push(e)}function Dl(){return Me}let Pt;class Pi{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,zl(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,yt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Hl(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),_t()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=mt,n=Pt;try{return mt=!0,Pt=this,this._runnings++,la(this),this.fn()}finally{ca(this),this._runnings--,Pt=n,mt=t}}stop(){var t;this.active&&(la(this),ca(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Hl(e){return e.value}function la(e){e._trackId++,e._depsLength=0}function ca(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)zo(e.deps[t],e);e.deps.length=e._depsLength}}function zo(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let mt=!0,qr=0;const Do=[];function yt(){Do.push(mt),mt=!1}function _t(){const e=Do.pop();mt=e===void 0?!0:e}function Ci(){qr++}function Ri(){for(qr--;!qr&&Xr.length;)Xr.shift()()}function Ho(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&zo(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Xr=[];function Uo(e,t,n){Ci();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Xr.push(r.scheduler)))}Ri()}const Bo=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Qr=new WeakMap,Ct=Symbol(""),Jr=Symbol("");function Ae(e,t,n){if(mt&&Pt){let r=Qr.get(e);r||Qr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Bo(()=>r.delete(n))),Ho(Pt,i)}}function Xe(e,t,n,r,i,a){const o=Qr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||!Je(c)&&c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Ai(n)&&s.push(o.get("length")):(s.push(o.get(Ct)),Dt(e)&&s.push(o.get(Jr)));break;case"delete":H(e)||(s.push(o.get(Ct)),Dt(e)&&s.push(o.get(Jr)));break;case"set":Dt(e)&&s.push(o.get(Ct));break}Ci();for(const l of s)l&&Uo(l,4);Ri()}const Ul=wi("__proto__,__v_isRef,__isVue"),Vo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Je)),fa=Bl();function Bl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let a=0,o=this.length;a<o;a++)Ae(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(q)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){yt(),Ci();const r=q(this)[t].apply(this,n);return Ri(),_t(),r}}),e}function Vl(e){Je(e)||(e=String(e));const t=q(this);return Ae(t,"has",e),t.hasOwnProperty(e)}class Ko{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?rc:qo:a?Go:Yo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=H(t);if(!i){if(o&&W(fa,n))return Reflect.get(fa,n,r);if(n==="hasOwnProperty")return Vl}const s=Reflect.get(t,n,r);return(Je(n)?Vo.has(n):Ul(n))||(i||Ae(t,"get",n),a)?s:Se(s)?o&&Ai(n)?s:s.value:ee(s)?i?Qo(s):yr(s):s}}class Wo extends Ko{constructor(t=!1){super(!1,t)}set(t,n,r,i){let a=t[n];if(!this._isShallow){const l=hn(a);if(!ar(r)&&!hn(r)&&(a=q(a),r=q(r)),!H(t)&&Se(a)&&!Se(r))return l?!1:(a.value=r,!0)}const o=H(t)&&Ai(n)?Number(n)<t.length:W(t,n),s=Reflect.set(t,n,r,i);return t===q(i)&&(o?pt(r,a)&&Xe(t,"set",n,r):Xe(t,"add",n,r)),s}deleteProperty(t,n){const r=W(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Xe(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Je(n)||!Vo.has(n))&&Ae(t,"has",n),r}ownKeys(t){return Ae(t,"iterate",H(t)?"length":Ct),Reflect.ownKeys(t)}}class Kl extends Ko{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Wl=new Wo,Yl=new Kl,Gl=new Wo(!0);const Ti=e=>e,br=e=>Reflect.getPrototypeOf(e);function Ln(e,t,n=!1,r=!1){e=e.__v_raw;const i=q(e),a=q(t);n||(pt(t,a)&&Ae(i,"get",t),Ae(i,"get",a));const{has:o}=br(i),s=r?Ti:n?Mi:pn;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function jn(e,t=!1){const n=this.__v_raw,r=q(n),i=q(e);return t||(pt(e,i)&&Ae(r,"has",e),Ae(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Fn(e,t=!1){return e=e.__v_raw,!t&&Ae(q(e),"iterate",Ct),Reflect.get(e,"size",e)}function ua(e){e=q(e);const t=q(this);return br(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function da(e,t){t=q(t);const n=q(this),{has:r,get:i}=br(n);let a=r.call(n,e);a||(e=q(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?pt(t,o)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function ma(e){const t=q(this),{has:n,get:r}=br(t);let i=n.call(t,e);i||(e=q(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&Xe(t,"delete",e,void 0),a}function ha(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function $n(e,t){return function(r,i){const a=this,o=a.__v_raw,s=q(o),l=t?Ti:e?Mi:pn;return!e&&Ae(s,"iterate",Ct),o.forEach((f,c)=>r.call(i,l(f),l(c),a))}}function zn(e,t,n){return function(...r){const i=this.__v_raw,a=q(i),o=Dt(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...r),c=n?Ti:t?Mi:pn;return!t&&Ae(a,"iterate",l?Jr:Ct),{next(){const{value:m,done:h}=f.next();return h?{value:m,done:h}:{value:s?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function ot(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ql(){const e={get(a){return Ln(this,a)},get size(){return Fn(this)},has:jn,add:ua,set:da,delete:ma,clear:ha,forEach:$n(!1,!1)},t={get(a){return Ln(this,a,!1,!0)},get size(){return Fn(this)},has:jn,add:ua,set:da,delete:ma,clear:ha,forEach:$n(!1,!0)},n={get(a){return Ln(this,a,!0)},get size(){return Fn(this,!0)},has(a){return jn.call(this,a,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:$n(!0,!1)},r={get(a){return Ln(this,a,!0,!0)},get size(){return Fn(this,!0)},has(a){return jn.call(this,a,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=zn(a,!1,!1),n[a]=zn(a,!0,!1),t[a]=zn(a,!1,!0),r[a]=zn(a,!0,!0)}),[e,n,t,r]}const[Xl,Ql,Jl,Zl]=ql();function Ii(e,t){const n=t?e?Zl:Jl:e?Ql:Xl;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(W(n,i)&&i in r?n:r,i,a)}const ec={get:Ii(!1,!1)},tc={get:Ii(!1,!0)},nc={get:Ii(!0,!1)};const Yo=new WeakMap,Go=new WeakMap,qo=new WeakMap,rc=new WeakMap;function ic(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ac(e){return e.__v_skip||!Object.isExtensible(e)?0:ic(Sl(e))}function yr(e){return hn(e)?e:Ni(e,!1,Wl,ec,Yo)}function Xo(e){return Ni(e,!1,Gl,tc,Go)}function Qo(e){return Ni(e,!0,Yl,nc,qo)}function Ni(e,t,n,r,i){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=ac(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function rn(e){return hn(e)?rn(e.__v_raw):!!(e&&e.__v_isReactive)}function hn(e){return!!(e&&e.__v_isReadonly)}function ar(e){return!!(e&&e.__v_isShallow)}function Jo(e){return e?!!e.__v_raw:!1}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function oc(e){return Object.isExtensible(e)&&Mo(e,"__v_skip",!0),e}const pn=e=>ee(e)?yr(e):e,Mi=e=>ee(e)?Qo(e):e;class Zo{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Pi(()=>t(this._value),()=>Qn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=q(this);return(!t._cacheable||t.effect.dirty)&&pt(t._value,t._value=t.effect.run())&&Qn(t,4),es(t),t.effect._dirtyLevel>=2&&Qn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function sc(e,t,n=!1){let r,i;const a=B(e);return a?(r=e,i=Ie):(r=e.get,i=e.set),new Zo(r,i,a||!i,n)}function es(e){var t;mt&&Pt&&(e=q(e),Ho(Pt,(t=e.dep)!=null?t:e.dep=Bo(()=>e.dep=void 0,e instanceof Zo?e:void 0)))}function Qn(e,t=4,n){e=q(e);const r=e.dep;r&&Uo(r,t)}function Se(e){return!!(e&&e.__v_isRef===!0)}function ts(e){return ns(e,!1)}function lc(e){return ns(e,!0)}function ns(e,t){return Se(e)?e:new cc(e,t)}class cc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:pn(t)}get value(){return es(this),this._value}set value(t){const n=this.__v_isShallow||ar(t)||hn(t);t=n?t:q(t),pt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:pn(t),Qn(this,4))}}function Re(e){return Se(e)?e.value:e}const fc={get:(e,t,n)=>Re(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Se(i)&&!Se(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function rs(e){return rn(e)?e:new Proxy(e,fc)}/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ht(e,t,n,r){try{return r?e(...r):e()}catch(i){_r(i,t,n)}}function Fe(e,t,n,r){if(B(e)){const i=ht(e,t,n,r);return i&&To(i)&&i.catch(a=>{_r(a,t,n)}),i}if(H(e)){const i=[];for(let a=0;a<e.length;a++)i.push(Fe(e[a],t,n,r));return i}}function _r(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){yt(),ht(l,null,10,[e,o,s]),_t();return}}uc(e,n,i,r)}function uc(e,t,n,r=!0){console.error(e)}let gn=!1,Zr=!1;const be=[];let Ve=0;const Ht=[];let ct=null,kt=0;const is=Promise.resolve();let Li=null;function as(e){const t=Li||is;return e?t.then(this?e.bind(this):e):t}function dc(e){let t=Ve+1,n=be.length;for(;t<n;){const r=t+n>>>1,i=be[r],a=vn(i);a<e||a===e&&i.pre?t=r+1:n=r}return t}function ji(e){(!be.length||!be.includes(e,gn&&e.allowRecurse?Ve+1:Ve))&&(e.id==null?be.push(e):be.splice(dc(e.id),0,e),os())}function os(){!gn&&!Zr&&(Zr=!0,Li=is.then(ls))}function mc(e){const t=be.indexOf(e);t>Ve&&be.splice(t,1)}function hc(e){H(e)?Ht.push(...e):(!ct||!ct.includes(e,e.allowRecurse?kt+1:kt))&&Ht.push(e),os()}function pa(e,t,n=gn?Ve+1:0){for(;n<be.length;n++){const r=be[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;be.splice(n,1),n--,r()}}}function ss(e){if(Ht.length){const t=[...new Set(Ht)].sort((n,r)=>vn(n)-vn(r));if(Ht.length=0,ct){ct.push(...t);return}for(ct=t,kt=0;kt<ct.length;kt++)ct[kt]();ct=null,kt=0}}const vn=e=>e.id==null?1/0:e.id,pc=(e,t)=>{const n=vn(e)-vn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ls(e){Zr=!1,gn=!0,be.sort(pc);try{for(Ve=0;Ve<be.length;Ve++){const t=be[Ve];t&&t.active!==!1&&ht(t,null,14)}}finally{Ve=0,be.length=0,ss(),gn=!1,Li=null,(be.length||Ht.length)&&ls()}}function gc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||te;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[c]||te;h&&(i=n.map(g=>le(g)?g.trim():g)),m&&(i=n.map(Cl))}let s,l=r[s=Ir(t)]||r[s=Ir(We(t))];!l&&a&&(l=r[s=Ir(Gt(t))]),l&&Fe(l,e,6,i);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Fe(f,e,6,i)}}function cs(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!B(e)){const l=f=>{const c=cs(f,t,!0);c&&(s=!0,me(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(ee(e)&&r.set(e,null),null):(H(a)?a.forEach(l=>o[l]=null):me(o,a),ee(e)&&r.set(e,o),o)}function xr(e,t){return!e||!mr(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,Gt(t))||W(e,t))}let ke=null,fs=null;function or(e){const t=ke;return ke=e,fs=e&&e.type.__scopeId||null,t}function bn(e,t=ke,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Sa(-1);const a=or(t);let o;try{o=e(...i)}finally{or(a),r._d&&Sa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Mr(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:f,renderCache:c,props:m,data:h,setupState:g,ctx:S,inheritAttrs:R}=e,F=or(e);let y,x;try{if(n.shapeFlag&4){const z=i||r,V=z;y=Be(f.call(V,z,c,m,g,h,S)),x=s}else{const z=t;y=Be(z.length>1?z(m,{attrs:s,slots:o,emit:l}):z(m,null)),x=t.props?s:vc(s)}}catch(z){ln.length=0,_r(z,e,1),y=se(yn)}let C=y;if(x&&R!==!1){const z=Object.keys(x),{shapeFlag:V}=C;z.length&&V&7&&(a&&z.some(Ei)&&(x=bc(x,a)),C=Vt(C,x))}return n.dirs&&(C=Vt(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),y=C,or(F),y}const vc=e=>{let t;for(const n in e)(n==="class"||n==="style"||mr(n))&&((t||(t={}))[n]=e[n]);return t},bc=(e,t)=>{const n={};for(const r in e)(!Ei(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function yc(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,f=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ga(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(o[h]!==r[h]&&!xr(f,h))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ga(r,o,f):!0:!!o;return!1}function ga(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!xr(n,a))return!0}return!1}function _c({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const us="components";function wr(e,t){return wc(us,e,!0,t)||e}const xc=Symbol.for("v-ndc");function wc(e,t,n=!0,r=!1){const i=ke||ye;if(i){const a=i.type;if(e===us){const s=_f(a,!1);if(s&&(s===t||s===We(t)||s===gr(We(t))))return a}const o=va(i[e]||a[e],t)||va(i.appContext[e],t);return!o&&r?a:o}}function va(e,t){return e&&(e[t]||e[We(t)]||e[gr(We(t))])}const Ec=e=>e.__isSuspense;function kc(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):hc(e)}const Ac=Symbol.for("v-scx"),Sc=()=>Qe(Ac),Dn={};function an(e,t,n){return ds(e,t,n)}function ds(e,t,{immediate:n,deep:r,flush:i,once:a,onTrack:o,onTrigger:s}=te){if(t&&a){const $=t;t=(...Z)=>{$(...Z),V()}}const l=ye,f=$=>r===!0?$:At($,r===!1?1:void 0);let c,m=!1,h=!1;if(Se(e)?(c=()=>e.value,m=ar(e)):rn(e)?(c=()=>f(e),m=!0):H(e)?(h=!0,m=e.some($=>rn($)||ar($)),c=()=>e.map($=>{if(Se($))return $.value;if(rn($))return f($);if(B($))return ht($,l,2)})):B(e)?t?c=()=>ht(e,l,2):c=()=>(g&&g(),Fe(e,l,3,[S])):c=Ie,t&&r){const $=c;c=()=>At($())}let g,S=$=>{g=C.onStop=()=>{ht($,l,4),g=C.onStop=void 0}},R;if(Ar)if(S=Ie,t?n&&Fe(t,l,3,[c(),h?[]:void 0,S]):c(),i==="sync"){const $=Sc();R=$.__watcherHandles||($.__watcherHandles=[])}else return Ie;let F=h?new Array(e.length).fill(Dn):Dn;const y=()=>{if(!(!C.active||!C.dirty))if(t){const $=C.run();(r||m||(h?$.some((Z,pe)=>pt(Z,F[pe])):pt($,F)))&&(g&&g(),Fe(t,l,3,[$,F===Dn?void 0:h&&F[0]===Dn?[]:F,S]),F=$)}else C.run()};y.allowRecurse=!!t;let x;i==="sync"?x=y:i==="post"?x=()=>Ee(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),x=()=>ji(y));const C=new Pi(c,Ie,x),z=Dl(),V=()=>{C.stop(),z&&ki(z.effects,C)};return t?n?y():F=C.run():i==="post"?Ee(C.run.bind(C),l&&l.suspense):C.run(),R&&R.push(V),V}function Oc(e,t,n){const r=this.proxy,i=le(e)?e.includes(".")?ms(r,e):()=>r[e]:e.bind(r,r);let a;B(t)?a=t:(a=t.handler,n=t);const o=Rn(this),s=ds(i,a.bind(r),n);return o(),s}function ms(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function At(e,t,n=0,r){if(!ee(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),Se(e))At(e.value,t,n,r);else if(H(e))for(let i=0;i<e.length;i++)At(e[i],t,n,r);else if(hr(e)||Dt(e))e.forEach(i=>{At(i,t,n,r)});else if(No(e))for(const i in e)At(e[i],t,n,r);return e}function Pc(e,t){if(ke===null)return e;const n=Sr(ke)||ke.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[a,o,s,l=te]=t[i];a&&(B(a)&&(a={mounted:a,updated:a}),a.deep&&At(o),r.push({dir:a,instance:n,value:o,oldValue:void 0,arg:s,modifiers:l}))}return e}function wt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(yt(),Fe(l,n,8,[e.el,s,e,t]),_t())}}/*! #__NO_SIDE_EFFECTS__ */function Fi(e,t){return B(e)?me({name:e.name},t,{setup:e}):e}const Jn=e=>!!e.type.__asyncLoader,hs=e=>e.type.__isKeepAlive;function Cc(e,t){ps(e,"a",t)}function Rc(e,t){ps(e,"da",t)}function ps(e,t,n=ye){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Er(t,r,n),n){let i=n.parent;for(;i&&i.parent;)hs(i.parent.vnode)&&Tc(r,t,n,i),i=i.parent}}function Tc(e,t,n,r){const i=Er(t,e,r,!0);gs(()=>{ki(r[t],i)},n)}function Er(e,t,n=ye,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;yt();const s=Rn(n),l=Fe(t,n,e,o);return s(),_t(),l});return r?i.unshift(a):i.push(a),a}}const nt=e=>(t,n=ye)=>(!Ar||e==="sp")&&Er(e,(...r)=>t(...r),n),Ic=nt("bm"),Nc=nt("m"),Mc=nt("bu"),Lc=nt("u"),jc=nt("bum"),gs=nt("um"),Fc=nt("sp"),$c=nt("rtg"),zc=nt("rtc");function Dc(e,t=ye){Er("ec",e,t)}function Hc(e,t,n,r){let i;const a=n&&n[r];if(H(e)||le(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(ee(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a&&a[s]));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];i[s]=t(e[f],f,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}const ei=e=>e?Ts(e)?Sr(e)||e.proxy:ei(e.parent):null,on=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ei(e.parent),$root:e=>ei(e.root),$emit:e=>e.emit,$options:e=>$i(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ji(e.update)}),$nextTick:e=>e.n||(e.n=as.bind(e.proxy)),$watch:e=>Oc.bind(e)}),Lr=(e,t)=>e!==te&&!e.__isScriptSetup&&W(e,t),Uc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Lr(r,t))return o[t]=1,r[t];if(i!==te&&W(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&W(f,t))return o[t]=3,a[t];if(n!==te&&W(n,t))return o[t]=4,n[t];ti&&(o[t]=0)}}const c=on[t];let m,h;if(c)return t==="$attrs"&&Ae(e.attrs,"get",""),c(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==te&&W(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,W(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Lr(i,t)?(i[t]=n,!0):r!==te&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==te&&W(e,o)||Lr(t,o)||(s=a[0])&&W(s,o)||W(r,o)||W(on,o)||W(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ba(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ti=!0;function Bc(e){const t=$i(e),n=e.proxy,r=e.ctx;ti=!1,t.beforeCreate&&ya(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:m,mounted:h,beforeUpdate:g,updated:S,activated:R,deactivated:F,beforeDestroy:y,beforeUnmount:x,destroyed:C,unmounted:z,render:V,renderTracked:$,renderTriggered:Z,errorCaptured:pe,serverPrefetch:ge,expose:Ce,inheritAttrs:it,components:xt,directives:ze,filters:Xt}=t;if(f&&Vc(f,r,null),o)for(const Q in o){const Y=o[Q];B(Y)&&(r[Q]=Y.bind(n))}if(i){const Q=i.call(n,n);ee(Q)&&(e.data=yr(Q))}if(ti=!0,a)for(const Q in a){const Y=a[Q],Ye=B(Y)?Y.bind(n,n):B(Y.get)?Y.get.bind(n,n):Ie,at=!B(Y)&&B(Y.set)?Y.set.bind(n):Ie,De=he({get:Ye,set:at});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>De.value,set:xe=>De.value=xe})}if(s)for(const Q in s)vs(s[Q],r,n,Q);if(l){const Q=B(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(Y=>{Zn(Y,Q[Y])})}c&&ya(c,e,"c");function fe(Q,Y){H(Y)?Y.forEach(Ye=>Q(Ye.bind(n))):Y&&Q(Y.bind(n))}if(fe(Ic,m),fe(Nc,h),fe(Mc,g),fe(Lc,S),fe(Cc,R),fe(Rc,F),fe(Dc,pe),fe(zc,$),fe($c,Z),fe(jc,x),fe(gs,z),fe(Fc,ge),H(Ce))if(Ce.length){const Q=e.exposed||(e.exposed={});Ce.forEach(Y=>{Object.defineProperty(Q,Y,{get:()=>n[Y],set:Ye=>n[Y]=Ye})})}else e.exposed||(e.exposed={});V&&e.render===Ie&&(e.render=V),it!=null&&(e.inheritAttrs=it),xt&&(e.components=xt),ze&&(e.directives=ze)}function Vc(e,t,n=Ie){H(e)&&(e=ni(e));for(const r in e){const i=e[r];let a;ee(i)?"default"in i?a=Qe(i.from||r,i.default,!0):a=Qe(i.from||r):a=Qe(i),Se(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function ya(e,t,n){Fe(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function vs(e,t,n,r){const i=r.includes(".")?ms(n,r):()=>n[r];if(le(e)){const a=t[e];B(a)&&an(i,a)}else if(B(e))an(i,e.bind(n));else if(ee(e))if(H(e))e.forEach(a=>vs(a,t,n,r));else{const a=B(e.handler)?e.handler.bind(n):t[e.handler];B(a)&&an(i,a,e)}}function $i(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(f=>sr(l,f,o,!0)),sr(l,t,o)),ee(t)&&a.set(t,l),l}function sr(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&sr(e,a,n,!0),i&&i.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Kc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Kc={data:_a,props:xa,emits:xa,methods:en,computed:en,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:en,directives:en,watch:Yc,provide:_a,inject:Wc};function _a(e,t){return t?e?function(){return me(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Wc(e,t){return en(ni(e),ni(t))}function ni(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function en(e,t){return e?me(Object.create(null),e,t):t}function xa(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:me(Object.create(null),ba(e),ba(t??{})):t}function Yc(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function bs(){return{app:null,config:{isNativeTag:kl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gc=0;function qc(e,t){return function(r,i=null){B(r)||(r=me({},r)),i!=null&&!ee(i)&&(i=null);const a=bs(),o=new WeakSet;let s=!1;const l=a.app={_uid:Gc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:wf,get config(){return a.config},set config(f){},use(f,...c){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...c)):B(f)&&(o.add(f),f(l,...c))),l},mixin(f){return a.mixins.includes(f)||a.mixins.push(f),l},component(f,c){return c?(a.components[f]=c,l):a.components[f]},directive(f,c){return c?(a.directives[f]=c,l):a.directives[f]},mount(f,c,m){if(!s){const h=se(r,i);return h.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,f):e(h,f,m),s=!0,l._container=f,f.__vue_app__=l,Sr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return a.provides[f]=c,l},runWithContext(f){const c=sn;sn=l;try{return f()}finally{sn=c}}};return l}}let sn=null;function Zn(e,t){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[e]=t}}function Qe(e,t,n=!1){const r=ye||ke;if(r||sn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:sn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&B(t)?t.call(r&&r.proxy):t}}const ys={},_s=()=>Object.create(ys),xs=e=>Object.getPrototypeOf(e)===ys;function Xc(e,t,n,r=!1){const i={},a=_s();e.propsDefaults=Object.create(null),ws(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Xo(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Qc(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=q(i),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(xr(e.emitsOptions,h))continue;const g=t[h];if(l)if(W(a,h))g!==a[h]&&(a[h]=g,f=!0);else{const S=We(h);i[S]=ri(l,s,S,g,e,!1)}else g!==a[h]&&(a[h]=g,f=!0)}}}else{ws(e,t,i,a)&&(f=!0);let c;for(const m in s)(!t||!W(t,m)&&((c=Gt(m))===m||!W(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(i[m]=ri(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!W(t,m))&&(delete a[m],f=!0)}f&&Xe(e.attrs,"set","")}function ws(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(nn(l))continue;const f=t[l];let c;i&&W(i,c=We(l))?!a||!a.includes(c)?n[c]=f:(s||(s={}))[c]=f:xr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(a){const l=q(n),f=s||te;for(let c=0;c<a.length;c++){const m=a[c];n[m]=ri(i,l,m,f[m],e,!W(f,m))}}return o}function ri(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const c=Rn(i);r=f[n]=l.call(null,t),c()}}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Gt(n))&&(r=!0))}return r}function Es(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!B(e)){const c=m=>{l=!0;const[h,g]=Es(m,t,!0);me(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!a&&!l)return ee(e)&&r.set(e,zt),zt;if(H(a))for(let c=0;c<a.length;c++){const m=We(a[c]);wa(m)&&(o[m]=te)}else if(a)for(const c in a){const m=We(c);if(wa(m)){const h=a[c],g=o[m]=H(h)||B(h)?{type:h}:me({},h);if(g){const S=Aa(Boolean,g.type),R=Aa(String,g.type);g[0]=S>-1,g[1]=R<0||S<R,(S>-1||W(g,"default"))&&s.push(m)}}}const f=[o,s];return ee(e)&&r.set(e,f),f}function wa(e){return e[0]!=="$"&&!nn(e)}function Ea(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function ka(e,t){return Ea(e)===Ea(t)}function Aa(e,t){return H(t)?t.findIndex(n=>ka(n,e)):B(t)&&ka(t,e)?0:-1}const ks=e=>e[0]==="_"||e==="$stable",zi=e=>H(e)?e.map(Be):[Be(e)],Jc=(e,t,n)=>{if(t._n)return t;const r=bn((...i)=>zi(t(...i)),n);return r._c=!1,r},As=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ks(i))continue;const a=e[i];if(B(a))t[i]=Jc(i,a,r);else if(a!=null){const o=zi(a);t[i]=()=>o}}},Ss=(e,t)=>{const n=zi(t);e.slots.default=()=>n},Zc=(e,t)=>{const n=e.slots=_s();if(e.vnode.shapeFlag&32){const r=t._;r?(me(n,t),Mo(n,"_",r)):As(t,n)}else t&&Ss(e,t)},ef=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=te;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(me(i,t),!n&&s===1&&delete i._):(a=!t.$stable,As(t,i)),o=t}else t&&(Ss(e,t),o={default:1});if(a)for(const s in i)!ks(s)&&o[s]==null&&delete i[s]};function ii(e,t,n,r,i=!1){if(H(e)){e.forEach((h,g)=>ii(h,t&&(H(t)?t[g]:t),n,r,i));return}if(Jn(r)&&!i)return;const a=r.shapeFlag&4?Sr(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,f=t&&t.r,c=s.refs===te?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(le(f)?(c[f]=null,W(m,f)&&(m[f]=null)):Se(f)&&(f.value=null)),B(l))ht(l,s,12,[o,c]);else{const h=le(l),g=Se(l);if(h||g){const S=()=>{if(e.f){const R=h?W(m,l)?m[l]:c[l]:l.value;i?H(R)&&ki(R,a):H(R)?R.includes(a)||R.push(a):h?(c[l]=[a],W(m,l)&&(m[l]=c[l])):(l.value=[a],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,W(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(S.id=-1,Ee(S,n)):S()}}}const Ee=kc;function tf(e){return nf(e)}function nf(e,t){const n=Lo();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:m,nextSibling:h,setScopeId:g=Ie,insertStaticContent:S}=e,R=(u,d,p,_=null,v=null,k=null,P=void 0,E=null,A=!!d.dynamicChildren)=>{if(u===d)return;u&&!Jt(u,d)&&(_=b(u),xe(u,v,k,!0),u=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:w,ref:N,shapeFlag:D}=d;switch(w){case kr:F(u,d,p,_);break;case yn:y(u,d,p,_);break;case er:u==null&&x(d,p,_,P);break;case Te:xt(u,d,p,_,v,k,P,E,A);break;default:D&1?V(u,d,p,_,v,k,P,E,A):D&6?ze(u,d,p,_,v,k,P,E,A):(D&64||D&128)&&w.process(u,d,p,_,v,k,P,E,A,L)}N!=null&&v&&ii(N,u&&u.ref,k,d||u,!d)},F=(u,d,p,_)=>{if(u==null)r(d.el=s(d.children),p,_);else{const v=d.el=u.el;d.children!==u.children&&f(v,d.children)}},y=(u,d,p,_)=>{u==null?r(d.el=l(d.children||""),p,_):d.el=u.el},x=(u,d,p,_)=>{[u.el,u.anchor]=S(u.children,d,p,_,u.el,u.anchor)},C=({el:u,anchor:d},p,_)=>{let v;for(;u&&u!==d;)v=h(u),r(u,p,_),u=v;r(d,p,_)},z=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=h(u),i(u),u=p;i(d)},V=(u,d,p,_,v,k,P,E,A)=>{d.type==="svg"?P="svg":d.type==="math"&&(P="mathml"),u==null?$(d,p,_,v,k,P,E,A):ge(u,d,v,k,P,E,A)},$=(u,d,p,_,v,k,P,E)=>{let A,w;const{props:N,shapeFlag:D,transition:j,dirs:U}=u;if(A=u.el=o(u.type,k,N&&N.is,N),D&8?c(A,u.children):D&16&&pe(u.children,A,null,_,v,jr(u,k),P,E),U&&wt(u,null,_,"created"),Z(A,u,u.scopeId,P,_),N){for(const J in N)J!=="value"&&!nn(J)&&a(A,J,null,N[J],k,u.children,_,v,ve);"value"in N&&a(A,"value",null,N.value,k),(w=N.onVnodeBeforeMount)&&Ue(w,_,u)}U&&wt(u,null,_,"beforeMount");const K=rf(v,j);K&&j.beforeEnter(A),r(A,d,p),((w=N&&N.onVnodeMounted)||K||U)&&Ee(()=>{w&&Ue(w,_,u),K&&j.enter(A),U&&wt(u,null,_,"mounted")},v)},Z=(u,d,p,_,v)=>{if(p&&g(u,p),_)for(let k=0;k<_.length;k++)g(u,_[k]);if(v){let k=v.subTree;if(d===k){const P=v.vnode;Z(u,P,P.scopeId,P.slotScopeIds,v.parent)}}},pe=(u,d,p,_,v,k,P,E,A=0)=>{for(let w=A;w<u.length;w++){const N=u[w]=E?ft(u[w]):Be(u[w]);R(null,N,d,p,_,v,k,P,E)}},ge=(u,d,p,_,v,k,P)=>{const E=d.el=u.el;let{patchFlag:A,dynamicChildren:w,dirs:N}=d;A|=u.patchFlag&16;const D=u.props||te,j=d.props||te;let U;if(p&&Et(p,!1),(U=j.onVnodeBeforeUpdate)&&Ue(U,p,d,u),N&&wt(d,u,p,"beforeUpdate"),p&&Et(p,!0),w?Ce(u.dynamicChildren,w,E,p,_,jr(d,v),k):P||Y(u,d,E,null,p,_,jr(d,v),k,!1),A>0){if(A&16)it(E,d,D,j,p,_,v);else if(A&2&&D.class!==j.class&&a(E,"class",null,j.class,v),A&4&&a(E,"style",D.style,j.style,v),A&8){const K=d.dynamicProps;for(let J=0;J<K.length;J++){const ae=K[J],ue=D[ae],Ne=j[ae];(Ne!==ue||ae==="value")&&a(E,ae,ue,Ne,v,u.children,p,_,ve)}}A&1&&u.children!==d.children&&c(E,d.children)}else!P&&w==null&&it(E,d,D,j,p,_,v);((U=j.onVnodeUpdated)||N)&&Ee(()=>{U&&Ue(U,p,d,u),N&&wt(d,u,p,"updated")},_)},Ce=(u,d,p,_,v,k,P)=>{for(let E=0;E<d.length;E++){const A=u[E],w=d[E],N=A.el&&(A.type===Te||!Jt(A,w)||A.shapeFlag&70)?m(A.el):p;R(A,w,N,null,_,v,k,P,!0)}},it=(u,d,p,_,v,k,P)=>{if(p!==_){if(p!==te)for(const E in p)!nn(E)&&!(E in _)&&a(u,E,p[E],null,P,d.children,v,k,ve);for(const E in _){if(nn(E))continue;const A=_[E],w=p[E];A!==w&&E!=="value"&&a(u,E,w,A,P,d.children,v,k,ve)}"value"in _&&a(u,"value",p.value,_.value,P)}},xt=(u,d,p,_,v,k,P,E,A)=>{const w=d.el=u?u.el:s(""),N=d.anchor=u?u.anchor:s("");let{patchFlag:D,dynamicChildren:j,slotScopeIds:U}=d;U&&(E=E?E.concat(U):U),u==null?(r(w,p,_),r(N,p,_),pe(d.children||[],p,N,v,k,P,E,A)):D>0&&D&64&&j&&u.dynamicChildren?(Ce(u.dynamicChildren,j,p,v,k,P,E),(d.key!=null||v&&d===v.subTree)&&Os(u,d,!0)):Y(u,d,p,N,v,k,P,E,A)},ze=(u,d,p,_,v,k,P,E,A)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?v.ctx.activate(d,p,_,P,A):Xt(d,p,_,v,k,P,A):It(u,d,A)},Xt=(u,d,p,_,v,k,P)=>{const E=u.component=pf(u,_,v);if(hs(u)&&(E.ctx.renderer=L),gf(E),E.asyncDep){if(v&&v.registerDep(E,fe),!u.el){const A=E.subTree=se(yn);y(null,A,d,p)}}else fe(E,u,d,p,v,k,P)},It=(u,d,p)=>{const _=d.component=u.component;if(yc(u,d,p))if(_.asyncDep&&!_.asyncResolved){Q(_,d,p);return}else _.next=d,mc(_.update),_.effect.dirty=!0,_.update();else d.el=u.el,_.vnode=d},fe=(u,d,p,_,v,k,P)=>{const E=()=>{if(u.isMounted){let{next:N,bu:D,u:j,parent:U,vnode:K}=u;{const Lt=Ps(u);if(Lt){N&&(N.el=K.el,Q(u,N,P)),Lt.asyncDep.then(()=>{u.isUnmounted||E()});return}}let J=N,ae;Et(u,!1),N?(N.el=K.el,Q(u,N,P)):N=K,D&&Xn(D),(ae=N.props&&N.props.onVnodeBeforeUpdate)&&Ue(ae,U,N,K),Et(u,!0);const ue=Mr(u),Ne=u.subTree;u.subTree=ue,R(Ne,ue,m(Ne.el),b(Ne),u,v,k),N.el=ue.el,J===null&&_c(u,ue.el),j&&Ee(j,v),(ae=N.props&&N.props.onVnodeUpdated)&&Ee(()=>Ue(ae,U,N,K),v)}else{let N;const{el:D,props:j}=d,{bm:U,m:K,parent:J}=u,ae=Jn(d);if(Et(u,!1),U&&Xn(U),!ae&&(N=j&&j.onVnodeBeforeMount)&&Ue(N,J,d),Et(u,!0),D&&ie){const ue=()=>{u.subTree=Mr(u),ie(D,u.subTree,u,v,null)};ae?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=Mr(u);R(null,ue,p,_,u,v,k),d.el=ue.el}if(K&&Ee(K,v),!ae&&(N=j&&j.onVnodeMounted)){const ue=d;Ee(()=>Ue(N,J,ue),v)}(d.shapeFlag&256||J&&Jn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&Ee(u.a,v),u.isMounted=!0,d=p=_=null}},A=u.effect=new Pi(E,Ie,()=>ji(w),u.scope),w=u.update=()=>{A.dirty&&A.run()};w.id=u.uid,Et(u,!0),w()},Q=(u,d,p)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,Qc(u,d.props,_,p),ef(u,d.children,p),yt(),pa(u),_t()},Y=(u,d,p,_,v,k,P,E,A=!1)=>{const w=u&&u.children,N=u?u.shapeFlag:0,D=d.children,{patchFlag:j,shapeFlag:U}=d;if(j>0){if(j&128){at(w,D,p,_,v,k,P,E,A);return}else if(j&256){Ye(w,D,p,_,v,k,P,E,A);return}}U&8?(N&16&&ve(w,v,k),D!==w&&c(p,D)):N&16?U&16?at(w,D,p,_,v,k,P,E,A):ve(w,v,k,!0):(N&8&&c(p,""),U&16&&pe(D,p,_,v,k,P,E,A))},Ye=(u,d,p,_,v,k,P,E,A)=>{u=u||zt,d=d||zt;const w=u.length,N=d.length,D=Math.min(w,N);let j;for(j=0;j<D;j++){const U=d[j]=A?ft(d[j]):Be(d[j]);R(u[j],U,p,null,v,k,P,E,A)}w>N?ve(u,v,k,!0,!1,D):pe(d,p,_,v,k,P,E,A,D)},at=(u,d,p,_,v,k,P,E,A)=>{let w=0;const N=d.length;let D=u.length-1,j=N-1;for(;w<=D&&w<=j;){const U=u[w],K=d[w]=A?ft(d[w]):Be(d[w]);if(Jt(U,K))R(U,K,p,null,v,k,P,E,A);else break;w++}for(;w<=D&&w<=j;){const U=u[D],K=d[j]=A?ft(d[j]):Be(d[j]);if(Jt(U,K))R(U,K,p,null,v,k,P,E,A);else break;D--,j--}if(w>D){if(w<=j){const U=j+1,K=U<N?d[U].el:_;for(;w<=j;)R(null,d[w]=A?ft(d[w]):Be(d[w]),p,K,v,k,P,E,A),w++}}else if(w>j)for(;w<=D;)xe(u[w],v,k,!0),w++;else{const U=w,K=w,J=new Map;for(w=K;w<=j;w++){const Oe=d[w]=A?ft(d[w]):Be(d[w]);Oe.key!=null&&J.set(Oe.key,w)}let ae,ue=0;const Ne=j-K+1;let Lt=!1,ra=0;const Qt=new Array(Ne);for(w=0;w<Ne;w++)Qt[w]=0;for(w=U;w<=D;w++){const Oe=u[w];if(ue>=Ne){xe(Oe,v,k,!0);continue}let He;if(Oe.key!=null)He=J.get(Oe.key);else for(ae=K;ae<=j;ae++)if(Qt[ae-K]===0&&Jt(Oe,d[ae])){He=ae;break}He===void 0?xe(Oe,v,k,!0):(Qt[He-K]=w+1,He>=ra?ra=He:Lt=!0,R(Oe,d[He],p,null,v,k,P,E,A),ue++)}const ia=Lt?af(Qt):zt;for(ae=ia.length-1,w=Ne-1;w>=0;w--){const Oe=K+w,He=d[Oe],aa=Oe+1<N?d[Oe+1].el:_;Qt[w]===0?R(null,He,p,aa,v,k,P,E,A):Lt&&(ae<0||w!==ia[ae]?De(He,p,aa,2):ae--)}}},De=(u,d,p,_,v=null)=>{const{el:k,type:P,transition:E,children:A,shapeFlag:w}=u;if(w&6){De(u.component.subTree,d,p,_);return}if(w&128){u.suspense.move(d,p,_);return}if(w&64){P.move(u,d,p,L);return}if(P===Te){r(k,d,p);for(let D=0;D<A.length;D++)De(A[D],d,p,_);r(u.anchor,d,p);return}if(P===er){C(u,d,p);return}if(_!==2&&w&1&&E)if(_===0)E.beforeEnter(k),r(k,d,p),Ee(()=>E.enter(k),v);else{const{leave:D,delayLeave:j,afterLeave:U}=E,K=()=>r(k,d,p),J=()=>{D(k,()=>{K(),U&&U()})};j?j(k,K,J):J()}else r(k,d,p)},xe=(u,d,p,_=!1,v=!1)=>{const{type:k,props:P,ref:E,children:A,dynamicChildren:w,shapeFlag:N,patchFlag:D,dirs:j}=u;if(E!=null&&ii(E,null,p,u,!0),N&256){d.ctx.deactivate(u);return}const U=N&1&&j,K=!Jn(u);let J;if(K&&(J=P&&P.onVnodeBeforeUnmount)&&Ue(J,d,u),N&6)Mn(u.component,p,_);else{if(N&128){u.suspense.unmount(p,_);return}U&&wt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,p,v,L,_):w&&(k!==Te||D>0&&D&64)?ve(w,d,p,!1,!0):(k===Te&&D&384||!v&&N&16)&&ve(A,d,p),_&&Nt(u)}(K&&(J=P&&P.onVnodeUnmounted)||U)&&Ee(()=>{J&&Ue(J,d,u),U&&wt(u,null,d,"unmounted")},p)},Nt=u=>{const{type:d,el:p,anchor:_,transition:v}=u;if(d===Te){Mt(p,_);return}if(d===er){z(u);return}const k=()=>{i(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:E}=v,A=()=>P(p,k);E?E(u.el,k,A):A()}else k()},Mt=(u,d)=>{let p;for(;u!==d;)p=h(u),i(u),u=p;i(d)},Mn=(u,d,p)=>{const{bum:_,scope:v,update:k,subTree:P,um:E}=u;_&&Xn(_),v.stop(),k&&(k.active=!1,xe(P,u,d,p)),E&&Ee(E,d),Ee(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ve=(u,d,p,_=!1,v=!1,k=0)=>{for(let P=k;P<u.length;P++)xe(u[P],d,p,_,v)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el);let I=!1;const O=(u,d,p)=>{u==null?d._vnode&&xe(d._vnode,null,null,!0):R(d._vnode||null,u,d,null,null,null,p),I||(I=!0,pa(),ss(),I=!1),d._vnode=u},L={p:R,um:xe,m:De,r:Nt,mt:Xt,mc:pe,pc:Y,pbc:Ce,n:b,o:e};let G,ie;return t&&([G,ie]=t(L)),{render:O,hydrate:G,createApp:qc(O,G)}}function jr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Os(e,t,n=!1){const r=e.children,i=t.children;if(H(r)&&H(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=ft(i[a]),s.el=o.el),n||Os(o,s)),s.type===kr&&(s.el=o.el)}}function af(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(i=n[n.length-1],e[i]<f){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<f?a=s+1:o=s;f<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Ps(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ps(t)}const of=e=>e.__isTeleport,Te=Symbol.for("v-fgt"),kr=Symbol.for("v-txt"),yn=Symbol.for("v-cmt"),er=Symbol.for("v-stc"),ln=[];let Le=null;function Ut(e=!1){ln.push(Le=e?null:[])}function sf(){ln.pop(),Le=ln[ln.length-1]||null}let _n=1;function Sa(e){_n+=e}function Cs(e){return e.dynamicChildren=_n>0?Le||zt:null,sf(),_n>0&&Le&&Le.push(e),e}function cn(e,t,n,r,i,a){return Cs(de(e,t,n,r,i,a,!0))}function lf(e,t,n,r,i){return Cs(se(e,t,n,r,i,!0))}function ai(e){return e?e.__v_isVNode===!0:!1}function Jt(e,t){return e.type===t.type&&e.key===t.key}const Rs=({key:e})=>e??null,tr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||Se(e)||B(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function de(e,t=null,n=null,r=0,i=null,a=e===Te?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Rs(t),ref:t&&tr(t),scopeId:fs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ke};return s?(Di(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=le(n)?8:16),_n>0&&!o&&Le&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Le.push(l),l}const se=cf;function cf(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===xc)&&(e=yn),ai(e)){const s=Vt(e,t,!0);return n&&Di(s,n),_n>0&&!a&&Le&&(s.shapeFlag&6?Le[Le.indexOf(e)]=s:Le.push(s)),s.patchFlag|=-2,s}if(xf(e)&&(e=e.__vccOpts),t){t=ff(t);let{class:s,style:l}=t;s&&!le(s)&&(t.class=Oi(s)),ee(l)&&(Jo(l)&&!H(l)&&(l=me({},l)),t.style=Si(l))}const o=le(e)?1:Ec(e)?128:of(e)?64:ee(e)?4:B(e)?2:0;return de(e,t,n,r,i,o,a,!0)}function ff(e){return e?Jo(e)||xs(e)?me({},e):e:null}function Vt(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?df(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Rs(s),ref:t&&t.ref?n&&i?H(i)?i.concat(tr(t)):[i,tr(t)]:tr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function xn(e=" ",t=0){return se(kr,null,e,t)}function uf(e,t){const n=se(er,null,e);return n.staticCount=t,n}function Be(e){return e==null||typeof e=="boolean"?se(yn):H(e)?se(Te,null,e.slice()):typeof e=="object"?ft(e):se(kr,null,String(e))}function ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function Di(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Di(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!xs(t)?t._ctx=ke:i===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),r&64?(n=16,t=[xn(t)]):n=8);e.children=t,e.shapeFlag|=n}function df(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Oi([t.class,r.class]));else if(i==="style")t.style=Si([t.style,r.style]);else if(mr(i)){const a=t[i],o=r[i];o&&a!==o&&!(H(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function Ue(e,t,n,r=null){Fe(e,t,7,[n,r])}const mf=bs();let hf=0;function pf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||mf,a={uid:hf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new $l(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Es(r,i),emitsOptions:cs(r,i),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=gc.bind(null,a),e.ce&&e.ce(a),a}let ye=null,lr,oi;{const e=Lo(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};lr=t("__VUE_INSTANCE_SETTERS__",n=>ye=n),oi=t("__VUE_SSR_SETTERS__",n=>Ar=n)}const Rn=e=>{const t=ye;return lr(e),e.scope.on(),()=>{e.scope.off(),lr(t)}},Oa=()=>{ye&&ye.scope.off(),lr(null)};function Ts(e){return e.vnode.shapeFlag&4}let Ar=!1;function gf(e,t=!1){t&&oi(t);const{props:n,children:r}=e.vnode,i=Ts(e);Xc(e,n,i,t),Zc(e,r);const a=i?vf(e,t):void 0;return t&&oi(!1),a}function vf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Uc);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?yf(e):null,a=Rn(e);yt();const o=ht(r,e,0,[e.props,i]);if(_t(),a(),To(o)){if(o.then(Oa,Oa),t)return o.then(s=>{Pa(e,s,t)}).catch(s=>{_r(s,e,0)});e.asyncDep=o}else Pa(e,o,t)}else Is(e,t)}function Pa(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=rs(t)),Is(e,n)}let Ca;function Is(e,t,n){const r=e.type;if(!e.render){if(!t&&Ca&&!r.render){const i=r.template||$i(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=me(me({isCustomElement:a,delimiters:s},o),l);r.render=Ca(i,f)}}e.render=r.render||Ie}{const i=Rn(e);yt();try{Bc(e)}finally{_t(),i()}}}const bf={get(e,t){return Ae(e,"get",""),e[t]}};function yf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,bf),slots:e.slots,emit:e.emit,expose:t}}function Sr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(rs(oc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in on)return on[n](e)},has(t,n){return n in t||n in on}}))}function _f(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function xf(e){return B(e)&&"__vccOpts"in e}const he=(e,t)=>sc(e,t,Ar);function Hi(e,t,n){const r=arguments.length;return r===2?ee(t)&&!H(t)?ai(t)?se(e,null,[t]):se(e,t):se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ai(n)&&(n=[n]),se(e,t,n))}const wf="3.4.25";/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ef="http://www.w3.org/2000/svg",kf="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,Ra=ut&&ut.createElement("template"),Af={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?ut.createElementNS(Ef,e):t==="mathml"?ut.createElementNS(kf,e):ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ra.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=Ra.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Sf=Symbol("_vtc");function Of(e,t,n){const r=e[Sf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ta=Symbol("_vod"),Pf=Symbol("_vsh"),Cf=Symbol(""),Rf=/(^|;)\s*display\s*:/;function Tf(e,t,n){const r=e.style,i=le(n);let a=!1;if(n&&!i){if(t)if(le(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&nr(r,s,"")}else for(const o in t)n[o]==null&&nr(r,o,"");for(const o in n)o==="display"&&(a=!0),nr(r,o,n[o])}else if(i){if(t!==n){const o=r[Cf];o&&(n+=";"+o),r.cssText=n,a=Rf.test(n)}}else t&&e.removeAttribute("style");Ta in e&&(e[Ta]=a?r.display:"",e[Pf]&&(r.display="none"))}const Ia=/\s*!important$/;function nr(e,t,n){if(H(n))n.forEach(r=>nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=If(e,t);Ia.test(n)?e.setProperty(Gt(r),n.replace(Ia,""),"important"):e[r]=n}}const Na=["Webkit","Moz","ms"],Fr={};function If(e,t){const n=Fr[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return Fr[t]=r;r=gr(r);for(let i=0;i<Na.length;i++){const a=Na[i]+r;if(a in e)return Fr[t]=a}return t}const Ma="http://www.w3.org/1999/xlink";function Nf(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ma,t.slice(6,t.length)):e.setAttributeNS(Ma,t,n);else{const a=Ll(t);n==null||a&&!jo(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Mf(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const f=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(f!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=jo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Ns(e,t,n,r){e.addEventListener(t,n,r)}function Lf(e,t,n,r){e.removeEventListener(t,n,r)}const La=Symbol("_vei");function jf(e,t,n,r,i=null){const a=e[La]||(e[La]={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=Ff(t);if(r){const f=a[t]=Df(r,i);Ns(e,s,f,l)}else o&&(Lf(e,s,o,l),a[t]=void 0)}}const ja=/(?:Once|Passive|Capture)$/;function Ff(e){let t;if(ja.test(e)){t={};let r;for(;r=e.match(ja);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gt(e.slice(2)),t]}let $r=0;const $f=Promise.resolve(),zf=()=>$r||($f.then(()=>$r=0),$r=Date.now());function Df(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Fe(Hf(r,n.value),t,5,[r])};return n.value=e,n.attached=zf(),n}function Hf(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Fa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Uf=(e,t,n,r,i,a,o,s,l)=>{const f=i==="svg";t==="class"?Of(e,r,f):t==="style"?Tf(e,n,r):mr(t)?Ei(t)||jf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bf(e,t,r,f))?Mf(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Nf(e,t,r,f))};function Bf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Fa(t)&&B(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Fa(t)&&le(n)?!1:t in e}const $a=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>Xn(t,n):t},zr=Symbol("_assign"),Vf={deep:!0,created(e,t,n){e[zr]=$a(n),Ns(e,"change",()=>{const r=e._modelValue,i=Kf(e),a=e.checked,o=e[zr];if(H(r)){const s=Fo(r,i),l=s!==-1;if(a&&!l)o(r.concat(i));else if(!a&&l){const f=[...r];f.splice(s,1),o(f)}}else if(hr(r)){const s=new Set(r);a?s.add(i):s.delete(i),o(s)}else o(Ms(e,a))})},mounted:za,beforeUpdate(e,t,n){e[zr]=$a(n),za(e,t,n)}};function za(e,{value:t,oldValue:n},r){e._modelValue=t,H(t)?e.checked=Fo(t,r.props.value)>-1:hr(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=vr(t,Ms(e,!0)))}function Kf(e){return"_value"in e?e._value:e.value}function Ms(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Wf=me({patchProp:Uf},Af);let Da;function Yf(){return Da||(Da=tf(Wf))}const Gf=(...e)=>{const t=Yf().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Xf(r);if(!i)return;const a=t._component;!B(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,qf(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function qf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Xf(e){return le(e)?document.querySelector(e):e}const Ls=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Qf={};function Jf(e,t){const n=wr("RouterView");return Ut(),lf(n)}const Zf=Ls(Qf,[["render",Jf]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof document<"u";function eu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function Dr(e,t){const n={};for(const r in t){const i=t[r];n[r]=$e(i)?i.map(e):e(i)}return n}const fn=()=>{},$e=Array.isArray,js=/#/g,tu=/&/g,nu=/\//g,ru=/=/g,iu=/\?/g,Fs=/\+/g,au=/%5B/g,ou=/%5D/g,$s=/%5E/g,su=/%60/g,zs=/%7B/g,lu=/%7C/g,Ds=/%7D/g,cu=/%20/g;function Ui(e){return encodeURI(""+e).replace(lu,"|").replace(au,"[").replace(ou,"]")}function fu(e){return Ui(e).replace(zs,"{").replace(Ds,"}").replace($s,"^")}function si(e){return Ui(e).replace(Fs,"%2B").replace(cu,"+").replace(js,"%23").replace(tu,"%26").replace(su,"`").replace(zs,"{").replace(Ds,"}").replace($s,"^")}function uu(e){return si(e).replace(ru,"%3D")}function du(e){return Ui(e).replace(js,"%23").replace(iu,"%3F")}function mu(e){return e==null?"":du(e).replace(nu,"%2F")}function wn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const hu=/\/$/,pu=e=>e.replace(hu,"");function Hr(e,t,n="/"){let r,i={},a="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),i=e(a)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=yu(r??t,n),{fullPath:r+(a&&"?")+a+o,path:r,query:i,hash:wn(o)}}function gu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ha(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function vu(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Kt(t.matched[r],n.matched[i])&&Hs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Kt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Hs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!bu(e[n],t[n]))return!1;return!0}function bu(e,t){return $e(e)?Ua(e,t):$e(t)?Ua(t,e):e===t}function Ua(e,t){return $e(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function yu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var un;(function(e){e.back="back",e.forward="forward",e.unknown=""})(un||(un={}));function _u(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),pu(e)}const xu=/^[^#]+#/;function wu(e,t){return e.replace(xu,"#")+t}function Eu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Or=()=>({left:window.scrollX,top:window.scrollY});function ku(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Eu(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ba(e,t){return(history.state?history.state.position-t:-1)+e}const li=new Map;function Au(e,t){li.set(e,t)}function Su(e){const t=li.get(e);return li.delete(e),t}let Ou=()=>location.protocol+"//"+location.host;function Us(e,t){const{pathname:n,search:r,hash:i}=t,a=e.indexOf("#");if(a>-1){let s=i.includes(e.slice(a))?e.slice(a).length:1,l=i.slice(s);return l[0]!=="/"&&(l="/"+l),Ha(l,"")}return Ha(n,e)+r+i}function Pu(e,t,n,r){let i=[],a=[],o=null;const s=({state:h})=>{const g=Us(e,location),S=n.value,R=t.value;let F=0;if(h){if(n.value=g,t.value=h,o&&o===S){o=null;return}F=R?h.position-R.position:0}else r(g);i.forEach(y=>{y(n.value,S,{delta:F,type:En.pop,direction:F?F>0?un.forward:un.back:un.unknown})})};function l(){o=n.value}function f(h){i.push(h);const g=()=>{const S=i.indexOf(h);S>-1&&i.splice(S,1)};return a.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(X({},h.state,{scroll:Or()}),"")}function m(){for(const h of a)h();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:f,destroy:m}}function Va(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Or():null}}function Cu(e){const{history:t,location:n}=window,r={value:Us(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(l,f,c){const m=e.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:Ou()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),i.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(l,f){const c=X({},t.state,Va(i.value.back,l,i.value.forward,!0),f,{position:i.value.position});a(l,c,!0),r.value=l}function s(l,f){const c=X({},i.value,t.state,{forward:l,scroll:Or()});a(c.current,c,!0);const m=X({},Va(r.value,l,null),{position:c.position+1},f);a(l,m,!1),r.value=l}return{location:r,state:i,push:s,replace:o}}function Ru(e){e=_u(e);const t=Cu(e),n=Pu(e,t.state,t.location,t.replace);function r(a,o=!0){o||n.pauseListeners(),history.go(a)}const i=X({location:"",base:e,go:r,createHref:wu.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Tu(e){return typeof e=="string"||e&&typeof e=="object"}function Bs(e){return typeof e=="string"||typeof e=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vs=Symbol("");var Ka;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ka||(Ka={}));function Wt(e,t){return X(new Error,{type:e,[Vs]:!0},t)}function Ge(e,t){return e instanceof Error&&Vs in e&&(t==null||!!(e.type&t))}const Wa="[^/]+?",Iu={sensitive:!1,strict:!1,start:!0,end:!0},Nu=/[.+*?^${}()[\]/\\]/g;function Mu(e,t){const n=X({},Iu,t),r=[];let i=n.start?"^":"";const a=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let m=0;m<f.length;m++){const h=f[m];let g=40+(n.sensitive?.25:0);if(h.type===0)m||(i+="/"),i+=h.value.replace(Nu,"\\$&"),g+=40;else if(h.type===1){const{value:S,repeatable:R,optional:F,regexp:y}=h;a.push({name:S,repeatable:R,optional:F});const x=y||Wa;if(x!==Wa){g+=10;try{new RegExp(`(${x})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${x}): `+z.message)}}let C=R?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(C=F&&f.length<2?`(?:/${C})`:"/"+C),F&&(C+="?"),i+=C,g+=20,F&&(g+=-8),R&&(g+=-20),x===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function s(f){const c=f.match(o),m={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",S=a[h-1];m[S.name]=g&&S.repeatable?g.split("/"):g}return m}function l(f){let c="",m=!1;for(const h of e){(!m||!c.endsWith("/"))&&(c+="/"),m=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:S,repeatable:R,optional:F}=g,y=S in f?f[S]:"";if($e(y)&&!R)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const x=$e(y)?y.join("/"):y;if(!x)if(F)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):m=!0);else throw new Error(`Missing required param "${S}"`);c+=x}}return c||"/"}return{re:o,score:r,keys:a,parse:s,stringify:l}}function Lu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ju(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const a=Lu(r[n],i[n]);if(a)return a;n++}if(Math.abs(i.length-r.length)===1){if(Ya(r))return 1;if(Ya(i))return-1}return i.length-r.length}function Ya(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Fu={type:0,value:""},$u=/[a-zA-Z0-9_]/;function zu(e){if(!e)return[[]];if(e==="/")return[[Fu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const i=[];let a;function o(){a&&i.push(a),a=[]}let s=0,l,f="",c="";function m(){f&&(n===0?a.push({type:0,value:f}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&m(),o()):l===":"?(m(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:$u.test(l)?h():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),m(),o(),i}function Du(e,t,n){const r=Mu(zu(e.path),n),i=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Hu(e,t){const n=[],r=new Map;t=Xa({strict:!1,end:!0,sensitive:!1},t);function i(c){return r.get(c)}function a(c,m,h){const g=!h,S=Uu(c);S.aliasOf=h&&h.record;const R=Xa(t,c),F=[S];if("alias"in c){const C=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of C)F.push(X({},S,{components:h?h.record.components:S.components,path:z,aliasOf:h?h.record:S}))}let y,x;for(const C of F){const{path:z}=C;if(m&&z[0]!=="/"){const V=m.record.path,$=V[V.length-1]==="/"?"":"/";C.path=m.record.path+(z&&$+z)}if(y=Du(C,m,R),h?h.alias.push(y):(x=x||y,x!==y&&x.alias.push(y),g&&c.name&&!qa(y)&&o(c.name)),S.children){const V=S.children;for(let $=0;$<V.length;$++)a(V[$],y,h&&h.children[$])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return x?()=>{o(x)}:fn}function o(c){if(Bs(c)){const m=r.get(c);m&&(r.delete(c),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(c);m>-1&&(n.splice(m,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let m=0;for(;m<n.length&&ju(c,n[m])>=0&&(c.record.path!==n[m].record.path||!Ks(c,n[m]));)m++;n.splice(m,0,c),c.record.name&&!qa(c)&&r.set(c.record.name,c)}function f(c,m){let h,g={},S,R;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Wt(1,{location:c});R=h.record.name,g=X(Ga(m.params,h.keys.filter(x=>!x.optional).concat(h.parent?h.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),c.params&&Ga(c.params,h.keys.map(x=>x.name))),S=h.stringify(g)}else if(c.path!=null)S=c.path,h=n.find(x=>x.re.test(S)),h&&(g=h.parse(S),R=h.record.name);else{if(h=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!h)throw Wt(1,{location:c,currentLocation:m});R=h.record.name,g=X({},m.params,c.params),S=h.stringify(g)}const F=[];let y=h;for(;y;)F.unshift(y.record),y=y.parent;return{name:R,path:S,params:g,matched:F,meta:Vu(F)}}return e.forEach(c=>a(c)),{addRoute:a,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:i}}function Ga(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Uu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Bu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Bu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function qa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Vu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Xa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ks(e,t){return t.children.some(n=>n===e||Ks(e,n))}function Ku(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const a=r[i].replace(Fs," "),o=a.indexOf("="),s=wn(o<0?a:a.slice(0,o)),l=o<0?null:wn(a.slice(o+1));if(s in t){let f=t[s];$e(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Qa(e){let t="";for(let n in e){const r=e[n];if(n=uu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(r)?r.map(a=>a&&si(a)):[r&&si(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Wu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=$e(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const Yu=Symbol(""),Ja=Symbol(""),Bi=Symbol(""),Ws=Symbol(""),ci=Symbol("");function Zt(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function dt(e,t,n,r,i,a=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,l)=>{const f=h=>{h===!1?l(Wt(4,{from:n,to:t})):h instanceof Error?l(h):Tu(h)?l(Wt(2,{from:t,to:h})):(o&&r.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),s())},c=a(()=>e.call(r&&r.instances[i],t,n,f));let m=Promise.resolve(c);e.length<3&&(m=m.then(f)),m.catch(h=>l(h))})}function Ur(e,t,n,r,i=a=>a()){const a=[];for(const o of e)for(const s in o.components){let l=o.components[s];if(!(t!=="beforeRouteEnter"&&!o.instances[s]))if(Gu(l)){const c=(l.__vccOpts||l)[t];c&&a.push(dt(c,n,r,o,s,i))}else{let f=l();a.push(()=>f.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`));const m=eu(c)?c.default:c;o.components[s]=m;const g=(m.__vccOpts||m)[t];return g&&dt(g,n,r,o,s,i)()}))}}return a}function Gu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Za(e){const t=Qe(Bi),n=Qe(Ws),r=he(()=>t.resolve(Re(e.to))),i=he(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],m=n.matched;if(!c||!m.length)return-1;const h=m.findIndex(Kt.bind(null,c));if(h>-1)return h;const g=eo(l[f-2]);return f>1&&eo(c)===g&&m[m.length-1].path!==g?m.findIndex(Kt.bind(null,l[f-2])):h}),a=he(()=>i.value>-1&&Ju(n.params,r.value.params)),o=he(()=>i.value>-1&&i.value===n.matched.length-1&&Hs(n.params,r.value.params));function s(l={}){return Qu(l)?t[Re(e.replace)?"replace":"push"](Re(e.to)).catch(fn):Promise.resolve()}return{route:r,href:he(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}const qu=Fi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Za,setup(e,{slots:t}){const n=yr(Za(e)),{options:r}=Qe(Bi),i=he(()=>({[to(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[to(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Hi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),Xu=qu;function Qu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ju(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!$e(i)||i.length!==r.length||r.some((a,o)=>a!==i[o]))return!1}return!0}function eo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const to=(e,t,n)=>e??t??n,Zu=Fi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Qe(ci),i=he(()=>e.route||r.value),a=Qe(Ja,0),o=he(()=>{let f=Re(a);const{matched:c}=i.value;let m;for(;(m=c[f])&&!m.components;)f++;return f}),s=he(()=>i.value.matched[o.value]);Zn(Ja,he(()=>o.value+1)),Zn(Yu,s),Zn(ci,i);const l=ts();return an(()=>[l.value,s.value,e.name],([f,c,m],[h,g,S])=>{c&&(c.instances[m]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Kt(c,g)||!h)&&(c.enterCallbacks[m]||[]).forEach(R=>R(f))},{flush:"post"}),()=>{const f=i.value,c=e.name,m=s.value,h=m&&m.components[c];if(!h)return no(n.default,{Component:h,route:f});const g=m.props[c],S=g?g===!0?f.params:typeof g=="function"?g(f):g:null,F=Hi(h,X({},S,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(m.instances[c]=null)},ref:l}));return no(n.default,{Component:F,route:f})||F}}});function no(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ed=Zu;function td(e){const t=Hu(e.routes,e),n=e.parseQuery||Ku,r=e.stringifyQuery||Qa,i=e.history,a=Zt(),o=Zt(),s=Zt(),l=lc(st);let f=st;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Dr.bind(null,b=>""+b),m=Dr.bind(null,mu),h=Dr.bind(null,wn);function g(b,I){let O,L;return Bs(b)?(O=t.getRecordMatcher(b),L=I):L=b,t.addRoute(L,O)}function S(b){const I=t.getRecordMatcher(b);I&&t.removeRoute(I)}function R(){return t.getRoutes().map(b=>b.record)}function F(b){return!!t.getRecordMatcher(b)}function y(b,I){if(I=X({},I||l.value),typeof b=="string"){const d=Hr(n,b,I.path),p=t.resolve({path:d.path},I),_=i.createHref(d.fullPath);return X(d,p,{params:h(p.params),hash:wn(d.hash),redirectedFrom:void 0,href:_})}let O;if(b.path!=null)O=X({},b,{path:Hr(n,b.path,I.path).path});else{const d=X({},b.params);for(const p in d)d[p]==null&&delete d[p];O=X({},b,{params:m(d)}),I.params=m(I.params)}const L=t.resolve(O,I),G=b.hash||"";L.params=c(h(L.params));const ie=gu(r,X({},b,{hash:fu(G),path:L.path})),u=i.createHref(ie);return X({fullPath:ie,hash:G,query:r===Qa?Wu(b.query):b.query||{}},L,{redirectedFrom:void 0,href:u})}function x(b){return typeof b=="string"?Hr(n,b,l.value.path):X({},b)}function C(b,I){if(f!==b)return Wt(8,{from:I,to:b})}function z(b){return Z(b)}function V(b){return z(X(x(b),{replace:!0}))}function $(b){const I=b.matched[b.matched.length-1];if(I&&I.redirect){const{redirect:O}=I;let L=typeof O=="function"?O(b):O;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),X({query:b.query,hash:b.hash,params:L.path!=null?{}:b.params},L)}}function Z(b,I){const O=f=y(b),L=l.value,G=b.state,ie=b.force,u=b.replace===!0,d=$(O);if(d)return Z(X(x(d),{state:typeof d=="object"?X({},G,d.state):G,force:ie,replace:u}),I||O);const p=O;p.redirectedFrom=I;let _;return!ie&&vu(r,L,O)&&(_=Wt(16,{to:p,from:L}),De(L,L,!0,!1)),(_?Promise.resolve(_):Ce(p,L)).catch(v=>Ge(v)?Ge(v,2)?v:at(v):Y(v,p,L)).then(v=>{if(v){if(Ge(v,2))return Z(X({replace:u},x(v.to),{state:typeof v.to=="object"?X({},G,v.to.state):G,force:ie}),I||p)}else v=xt(p,L,!0,u,G);return it(p,L,v),v})}function pe(b,I){const O=C(b,I);return O?Promise.reject(O):Promise.resolve()}function ge(b){const I=Mt.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(b):b()}function Ce(b,I){let O;const[L,G,ie]=nd(b,I);O=Ur(L.reverse(),"beforeRouteLeave",b,I);for(const d of L)d.leaveGuards.forEach(p=>{O.push(dt(p,b,I))});const u=pe.bind(null,b,I);return O.push(u),ve(O).then(()=>{O=[];for(const d of a.list())O.push(dt(d,b,I));return O.push(u),ve(O)}).then(()=>{O=Ur(G,"beforeRouteUpdate",b,I);for(const d of G)d.updateGuards.forEach(p=>{O.push(dt(p,b,I))});return O.push(u),ve(O)}).then(()=>{O=[];for(const d of ie)if(d.beforeEnter)if($e(d.beforeEnter))for(const p of d.beforeEnter)O.push(dt(p,b,I));else O.push(dt(d.beforeEnter,b,I));return O.push(u),ve(O)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),O=Ur(ie,"beforeRouteEnter",b,I,ge),O.push(u),ve(O))).then(()=>{O=[];for(const d of o.list())O.push(dt(d,b,I));return O.push(u),ve(O)}).catch(d=>Ge(d,8)?d:Promise.reject(d))}function it(b,I,O){s.list().forEach(L=>ge(()=>L(b,I,O)))}function xt(b,I,O,L,G){const ie=C(b,I);if(ie)return ie;const u=I===st,d=jt?history.state:{};O&&(L||u?i.replace(b.fullPath,X({scroll:u&&d&&d.scroll},G)):i.push(b.fullPath,G)),l.value=b,De(b,I,O,u),at()}let ze;function Xt(){ze||(ze=i.listen((b,I,O)=>{if(!Mn.listening)return;const L=y(b),G=$(L);if(G){Z(X(G,{replace:!0}),L).catch(fn);return}f=L;const ie=l.value;jt&&Au(Ba(ie.fullPath,O.delta),Or()),Ce(L,ie).catch(u=>Ge(u,12)?u:Ge(u,2)?(Z(u.to,L).then(d=>{Ge(d,20)&&!O.delta&&O.type===En.pop&&i.go(-1,!1)}).catch(fn),Promise.reject()):(O.delta&&i.go(-O.delta,!1),Y(u,L,ie))).then(u=>{u=u||xt(L,ie,!1),u&&(O.delta&&!Ge(u,8)?i.go(-O.delta,!1):O.type===En.pop&&Ge(u,20)&&i.go(-1,!1)),it(L,ie,u)}).catch(fn)}))}let It=Zt(),fe=Zt(),Q;function Y(b,I,O){at(b);const L=fe.list();return L.length?L.forEach(G=>G(b,I,O)):console.error(b),Promise.reject(b)}function Ye(){return Q&&l.value!==st?Promise.resolve():new Promise((b,I)=>{It.add([b,I])})}function at(b){return Q||(Q=!b,Xt(),It.list().forEach(([I,O])=>b?O(b):I()),It.reset()),b}function De(b,I,O,L){const{scrollBehavior:G}=e;if(!jt||!G)return Promise.resolve();const ie=!O&&Su(Ba(b.fullPath,0))||(L||!O)&&history.state&&history.state.scroll||null;return as().then(()=>G(b,I,ie)).then(u=>u&&ku(u)).catch(u=>Y(u,b,I))}const xe=b=>i.go(b);let Nt;const Mt=new Set,Mn={currentRoute:l,listening:!0,addRoute:g,removeRoute:S,hasRoute:F,getRoutes:R,resolve:y,options:e,push:z,replace:V,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:fe.add,isReady:Ye,install(b){const I=this;b.component("RouterLink",Xu),b.component("RouterView",ed),b.config.globalProperties.$router=I,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Re(l)}),jt&&!Nt&&l.value===st&&(Nt=!0,z(i.location).catch(G=>{}));const O={};for(const G in st)Object.defineProperty(O,G,{get:()=>l.value[G],enumerable:!0});b.provide(Bi,I),b.provide(Ws,Xo(O)),b.provide(ci,l);const L=b.unmount;Mt.add(b),b.unmount=function(){Mt.delete(b),Mt.size<1&&(f=st,ze&&ze(),ze=null,l.value=st,Nt=!1,Q=!1),L()}}};function ve(b){return b.reduce((I,O)=>I.then(()=>ge(O)),Promise.resolve())}return Mn}function nd(e,t){const n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const s=t.matched[o];s&&(e.matched.find(f=>Kt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Kt(f,l))||i.push(l))}return[n,r,i]}const rd={},id={class:"flex items-center justify-center h-screen"},ad={class:"text-center"},od=de("h1",{class:"font-bold text-4xl"},"TaskDo",-1),sd=de("h3",{class:"font-semibold"},"Manage You Task Checklist Easily",-1);function ld(e,t,n,r,i,a){const o=wr("RouterLink");return Ut(),cn("div",id,[de("div",ad,[od,sd,se(o,{class:"btn btn-secondary",to:{name:"home"}},{default:bn(()=>[xn(" Lets Start ")]),_:1})])])}const cd=Ls(rd,[["render",ld]]);function ro(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ro(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ro(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cr(e){"@babel/helpers - typeof";return cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cr(e)}function fd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function io(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ud(e,t,n){return t&&io(e.prototype,t),n&&io(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vi(e,t){return md(e)||pd(e,t)||Ys(e,t)||vd()}function Tn(e){return dd(e)||hd(e)||Ys(e)||gd()}function dd(e){if(Array.isArray(e))return fi(e)}function md(e){if(Array.isArray(e))return e}function hd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Ys(e,t){if(e){if(typeof e=="string")return fi(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fi(e,t)}}function fi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ao=function(){},Ki={},Gs={},qs=null,Xs={mark:ao,measure:ao};try{typeof window<"u"&&(Ki=window),typeof document<"u"&&(Gs=document),typeof MutationObserver<"u"&&(qs=MutationObserver),typeof performance<"u"&&(Xs=performance)}catch{}var bd=Ki.navigator||{},oo=bd.userAgent,so=oo===void 0?"":oo,gt=Ki,re=Gs,lo=qs,Hn=Xs;gt.document;var rt=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Qs=~so.indexOf("MSIE")||~so.indexOf("Trident/"),Un,Bn,Vn,Kn,Wn,Ze="___FONT_AWESOME___",ui=16,Js="fa",Zs="svg-inline--fa",Rt="data-fa-i2svg",di="data-fa-pseudo-element",yd="data-fa-pseudo-element-pending",Wi="data-prefix",Yi="data-icon",co="fontawesome-i2svg",_d="async",xd=["HTML","HEAD","STYLE","SCRIPT"],el=function(){try{return!0}catch{return!1}}(),ne="classic",oe="sharp",Gi=[ne,oe];function In(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ne]}})}var kn=In((Un={},ce(Un,ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ce(Un,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Un)),An=In((Bn={},ce(Bn,ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ce(Bn,oe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Bn)),Sn=In((Vn={},ce(Vn,ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ce(Vn,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Vn)),wd=In((Kn={},ce(Kn,ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ce(Kn,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Kn)),Ed=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,tl="fa-layers-text",kd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ad=In((Wn={},ce(Wn,ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ce(Wn,oe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Wn)),nl=[1,2,3,4,5,6,7,8,9,10],Sd=nl.concat([11,12,13,14,15,16,17,18,19,20]),Od=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],St={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},On=new Set;Object.keys(An[ne]).map(On.add.bind(On));Object.keys(An[oe]).map(On.add.bind(On));var Pd=[].concat(Gi,Tn(On),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",St.GROUP,St.SWAP_OPACITY,St.PRIMARY,St.SECONDARY]).concat(nl.map(function(e){return"".concat(e,"x")})).concat(Sd.map(function(e){return"w-".concat(e)})),dn=gt.FontAwesomeConfig||{};function Cd(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Rd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var Td=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Td.forEach(function(e){var t=Vi(e,2),n=t[0],r=t[1],i=Rd(Cd(n));i!=null&&(dn[r]=i)})}var rl={styleDefault:"solid",familyDefault:"classic",cssPrefix:Js,replacementClass:Zs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};dn.familyPrefix&&(dn.cssPrefix=dn.familyPrefix);var Yt=T(T({},rl),dn);Yt.autoReplaceSvg||(Yt.observeMutations=!1);var M={};Object.keys(rl).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Yt[e]=n,mn.forEach(function(r){return r(M)})},get:function(){return Yt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Yt.cssPrefix=t,mn.forEach(function(n){return n(M)})},get:function(){return Yt.cssPrefix}});gt.FontAwesomeConfig=M;var mn=[];function Id(e){return mn.push(e),function(){mn.splice(mn.indexOf(e),1)}}var lt=ui,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nd(e){if(!(!e||!rt)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return re.head.insertBefore(t,r),e}}var Md="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pn(){for(var e=12,t="";e-- >0;)t+=Md[Math.random()*62|0];return t}function qt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qi(e){return e.classList?qt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function il(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ld(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(il(e[n]),'" ')},"").trim()}function Pr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Xi(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function jd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:f}}function Fd(e){var t=e.transform,n=e.width,r=n===void 0?ui:n,i=e.height,a=i===void 0?ui:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Qs?l+="translate(".concat(t.x/lt-r/2,"em, ").concat(t.y/lt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/lt,"em), calc(-50% + ").concat(t.y/lt,"em)) "):l+="translate(".concat(t.x/lt,"em, ").concat(t.y/lt,"em) "),l+="scale(".concat(t.size/lt*(t.flipX?-1:1),", ").concat(t.size/lt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var $d=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function al(){var e=Js,t=Zs,n=M.cssPrefix,r=M.replacementClass,i=$d;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var fo=!1;function Br(){M.autoAddCss&&!fo&&(Nd(al()),fo=!0)}var zd={mixout:function(){return{dom:{css:al,insertCss:Br}}},hooks:function(){return{beforeDOMElementCreation:function(){Br()},beforeI2svg:function(){Br()}}}},et=gt||{};et[Ze]||(et[Ze]={});et[Ze].styles||(et[Ze].styles={});et[Ze].hooks||(et[Ze].hooks={});et[Ze].shims||(et[Ze].shims=[]);var je=et[Ze],ol=[],Dd=function e(){re.removeEventListener("DOMContentLoaded",e),fr=1,ol.map(function(t){return t()})},fr=!1;rt&&(fr=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),fr||re.addEventListener("DOMContentLoaded",Dd));function Hd(e){rt&&(fr?setTimeout(e,0):ol.push(e))}function Nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?il(e):"<".concat(t," ").concat(Ld(r),">").concat(a.map(Nn).join(""),"</").concat(t,">")}function uo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ud=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Vr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?Ud(n,i):n,l,f,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)f=a[l],c=s(c,t[f],f,t);return c};function Bd(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function mi(e){var t=Bd(e);return t.length===1?t[0].toString(16):null}function Vd(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function mo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function hi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=mo(t);typeof je.hooks.addPack=="function"&&!i?je.hooks.addPack(e,mo(t)):je.styles[e]=T(T({},je.styles[e]||{}),a),e==="fas"&&hi("fa",t)}var Yn,Gn,qn,Ft=je.styles,Kd=je.shims,Wd=(Yn={},ce(Yn,ne,Object.values(Sn[ne])),ce(Yn,oe,Object.values(Sn[oe])),Yn),Qi=null,sl={},ll={},cl={},fl={},ul={},Yd=(Gn={},ce(Gn,ne,Object.keys(kn[ne])),ce(Gn,oe,Object.keys(kn[oe])),Gn);function Gd(e){return~Pd.indexOf(e)}function qd(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Gd(i)?i:null}var dl=function(){var t=function(a){return Vr(Ft,function(o,s,l){return o[l]=Vr(s,a,{}),o},{})};sl=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),ll=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),ul=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Ft||M.autoFetchSvg,r=Vr(Kd,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});cl=r.names,fl=r.unicodes,Qi=Cr(M.styleDefault,{family:M.familyDefault})};Id(function(e){Qi=Cr(e.styleDefault,{family:M.familyDefault})});dl();function Ji(e,t){return(sl[e]||{})[t]}function Xd(e,t){return(ll[e]||{})[t]}function Ot(e,t){return(ul[e]||{})[t]}function ml(e){return cl[e]||{prefix:null,iconName:null}}function Qd(e){var t=fl[e],n=Ji("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vt(){return Qi}var Zi=function(){return{prefix:null,iconName:null,rest:[]}};function Cr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ne:n,i=kn[r][e],a=An[r][e]||An[r][i],o=e in je.styles?e:null;return a||o||null}var ho=(qn={},ce(qn,ne,Object.keys(Sn[ne])),ce(qn,oe,Object.keys(Sn[oe])),qn);function Rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ce(t,ne,"".concat(M.cssPrefix,"-").concat(ne)),ce(t,oe,"".concat(M.cssPrefix,"-").concat(oe)),t),o=null,s=ne;(e.includes(a[ne])||e.some(function(f){return ho[ne].includes(f)}))&&(s=ne),(e.includes(a[oe])||e.some(function(f){return ho[oe].includes(f)}))&&(s=oe);var l=e.reduce(function(f,c){var m=qd(M.cssPrefix,c);if(Ft[c]?(c=Wd[s].includes(c)?wd[s][c]:c,o=c,f.prefix=c):Yd[s].indexOf(c)>-1?(o=c,f.prefix=Cr(c,{family:s})):m?f.iconName=m:c!==M.replacementClass&&c!==a[ne]&&c!==a[oe]&&f.rest.push(c),!i&&f.prefix&&f.iconName){var h=o==="fa"?ml(f.iconName):{},g=Ot(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Ft.far&&Ft.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},Zi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===oe&&(Ft.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=vt()||"fas"),l}var Jd=function(){function e(){fd(this,e),this.definitions={}}return ud(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),hi(s,o[s]);var l=Sn[ne][s];l&&hi(l,o[s]),dl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),po=[],$t={},Bt={},Zd=Object.keys(Bt);function em(e,t){var n=t.mixoutsTo;return po=e,$t={},Object.keys(Bt).forEach(function(r){Zd.indexOf(r)===-1&&delete Bt[r]}),po.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),cr(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){$t[o]||($t[o]=[]),$t[o].push(a[o])})}r.provides&&r.provides(Bt)}),n}function pi(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=$t[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Tt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=$t[e]||[];i.forEach(function(a){a.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bt[e]?Bt[e].apply(null,t):void 0}function gi(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||vt();if(t)return t=Ot(n,t)||t,uo(hl.definitions,n,t)||uo(je.styles,n,t)}var hl=new Jd,tm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Tt("noAuto")},nm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(Tt("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Hd(function(){im({autoReplaceSvgRoot:n}),Tt("watch",t)})}},rm={icon:function(t){if(t===null)return null;if(cr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Cr(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Ed))){var i=Rr(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||vt(),iconName:Ot(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=vt();return{prefix:a,iconName:Ot(a,t)||t}}}},Pe={noAuto:tm,config:M,dom:nm,parse:rm,library:hl,findIconDefinition:gi,toHtml:Nn},im=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(je.styles).length>0||M.autoFetchSvg)&&rt&&M.autoReplaceSvg&&Pe.dom.i2svg({node:r})};function Tr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(rt){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function am(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Xi(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};i.style=Pr(T(T({},a),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function om(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},i),{},{id:o}),children:r}]}]}function ea(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,S=r.found?r:n,R=S.width,F=S.height,y=i==="fak",x=[M.replacementClass,a?"".concat(M.cssPrefix,"-").concat(a):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),C={children:[],attributes:T(T({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(F)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(R/F*16*.0625,"em")}:{};g&&(C.attributes[Rt]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Pn())},children:[l]}),delete C.attributes.title);var V=T(T({},C),{},{prefix:i,iconName:a,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:T(T({},z),m.styles)}),$=r.found&&n.found?tt("generateAbstractMask",V)||{children:[],attributes:{}}:tt("generateAbstractIcon",V)||{children:[],attributes:{}},Z=$.children,pe=$.attributes;return V.children=Z,V.attributes=pe,s?om(V):am(V)}function go(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=T(T(T({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(f[Rt]="");var c=T({},o.styles);Xi(i)&&(c.transform=Fd({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=Pr(c);m.length>0&&(f.style=m);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function sm(e){var t=e.content,n=e.title,r=e.extra,i=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Pr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Kr=je.styles;function vi(e){var t=e[0],n=e[1],r=e.slice(4),i=Vi(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(St.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(St.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(St.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var lm={found:!1,width:512,height:512};function cm(e,t){!el&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function bi(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=vt()),new Promise(function(r,i){if(tt("missingIconAbstract"),n==="fa"){var a=ml(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Kr[t]&&Kr[t][e]){var o=Kr[t][e];return r(vi(o))}cm(e,t),r(T(T({},lm),{},{icon:M.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var vo=function(){},yi=M.measurePerformance&&Hn&&Hn.mark&&Hn.measure?Hn:{mark:vo,measure:vo},tn='FA "6.5.2"',fm=function(t){return yi.mark("".concat(tn," ").concat(t," begins")),function(){return pl(t)}},pl=function(t){yi.mark("".concat(tn," ").concat(t," ends")),yi.measure("".concat(tn," ").concat(t),"".concat(tn," ").concat(t," begins"),"".concat(tn," ").concat(t," ends"))},ta={begin:fm,end:pl},rr=function(){};function bo(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function um(e){var t=e.getAttribute?e.getAttribute(Wi):null,n=e.getAttribute?e.getAttribute(Yi):null;return t&&n}function dm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function mm(){if(M.autoReplaceSvg===!0)return ir.replace;var e=ir[M.autoReplaceSvg];return e||ir.replace}function hm(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function pm(e){return re.createElement(e)}function gl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?hm:pm:n;if(typeof e=="string")return re.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(gl(o,{ceFn:r}))}),i}function gm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ir={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(gl(i),n)}),n.getAttribute(Rt)===null&&M.keepOriginalSource){var r=re.createComment(gm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~qi(n).indexOf(M.replacementClass))return ir.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Nn(s)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function yo(e){e()}function vl(e,t){var n=typeof t=="function"?t:rr;if(e.length===0)n();else{var r=yo;M.mutateApproach===_d&&(r=gt.requestAnimationFrame||yo),r(function(){var i=mm(),a=ta.begin("mutate");e.map(i),a(),n()})}}var na=!1;function bl(){na=!0}function _i(){na=!1}var ur=null;function _o(e){if(lo&&M.observeMutations){var t=e.treeCallback,n=t===void 0?rr:t,r=e.nodeCallback,i=r===void 0?rr:r,a=e.pseudoElementsCallback,o=a===void 0?rr:a,s=e.observeMutationsRoot,l=s===void 0?re:s;ur=new lo(function(f){if(!na){var c=vt();qt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!bo(m.addedNodes[0])&&(M.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&M.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&bo(m.target)&&~Od.indexOf(m.attributeName))if(m.attributeName==="class"&&um(m.target)){var h=Rr(qi(m.target)),g=h.prefix,S=h.iconName;m.target.setAttribute(Wi,g||c),S&&m.target.setAttribute(Yi,S)}else dm(m.target)&&i(m.target)})}}),rt&&ur.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vm(){ur&&ur.disconnect()}function bm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ym(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Rr(qi(e));return i.prefix||(i.prefix=vt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Xd(i.prefix,e.innerText)||Ji(i.prefix,mi(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function _m(e){var t=qt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function xm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ym(e),r=n.iconName,i=n.prefix,a=n.rest,o=_m(e),s=pi("parseNodeAttributes",{},e),l=t.styleParser?bm(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var wm=je.styles;function yl(e){var t=M.autoReplaceSvg==="nest"?xo(e,{styleParser:!1}):xo(e);return~t.extra.classes.indexOf(tl)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var bt=new Set;Gi.map(function(e){bt.add("fa-".concat(e))});Object.keys(kn[ne]).map(bt.add.bind(bt));Object.keys(kn[oe]).map(bt.add.bind(bt));bt=Tn(bt);function wo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=re.documentElement.classList,r=function(m){return n.add("".concat(co,"-").concat(m))},i=function(m){return n.remove("".concat(co,"-").concat(m))},a=M.autoFetchSvg?bt:Gi.map(function(c){return"fa-".concat(c)}).concat(Object.keys(wm));a.includes("fa")||a.push("fa");var o=[".".concat(tl,":not([").concat(Rt,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=qt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ta.begin("onTree"),f=s.reduce(function(c,m){try{var h=yl(m);h&&c.push(h)}catch(g){el||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(h){vl(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),m(h)})})}function Em(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yl(e).then(function(n){n&&vl([n],t)})}function km(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:gi(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:gi(i||{})),e(r,T(T({},n),{},{mask:i}))}}var Am=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ke:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,h=m===void 0?null:m,g=n.titleId,S=g===void 0?null:g,R=n.classes,F=R===void 0?[]:R,y=n.attributes,x=y===void 0?{}:y,C=n.styles,z=C===void 0?{}:C;if(t){var V=t.prefix,$=t.iconName,Z=t.icon;return Tr(T({type:"icon"},t),function(){return Tt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?x["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(S||Pn()):(x["aria-hidden"]="true",x.focusable="false")),ea({icons:{main:vi(Z),mask:l?vi(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:$,transform:T(T({},Ke),i),symbol:o,title:h,maskId:c,titleId:S,extra:{attributes:x,styles:z,classes:F}})})}},Sm={mixout:function(){return{icon:km(Am)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=wo,n.nodeCallback=Em,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?re:r,a=n.callback,o=a===void 0?function(){}:a;return wo(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,S){Promise.all([bi(i,s),c.iconName?bi(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var F=Vi(R,2),y=F[0],x=F[1];g([n,ea({icons:{main:y,mask:x},prefix:s,iconName:i,transform:l,symbol:f,maskId:m,title:a,titleId:o,extra:h,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Pr(s);l.length>0&&(i.style=l);var f;return Xi(o)&&(f=tt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(f||a.icon),{children:r,attributes:i}}}},Om={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Tr({type:"layer"},function(){Tt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Tn(a)).join(" ")},children:o}]})}}}},Pm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return Tr({type:"counter",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),sm({content:n.toString(),title:a,extra:{attributes:f,styles:m,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Tn(s))}})})}}}},Cm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ke:i,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Tr({type:"text",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),go({content:n,transform:T(T({},Ke),a),title:s,extra:{attributes:m,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Tn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Qs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,go({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Rm=new RegExp('"',"ug"),Eo=[1105920,1112319];function Tm(e){var t=e.replace(Rm,""),n=Vd(t,0),r=n>=Eo[0]&&n<=Eo[1],i=t.length===2?t[0]===t[1]:!1;return{value:mi(i?t[0]:t),isSecondary:r||i}}function ko(e,t){var n="".concat(yd).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=qt(e.children),o=a.filter(function(Z){return Z.getAttribute(di)===t})[0],s=gt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(kd),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?oe:ne,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?An[h][l[2].toLowerCase()]:Ad[h][f],S=Tm(m),R=S.value,F=S.isSecondary,y=l[0].startsWith("FontAwesome"),x=Ji(g,R),C=x;if(y){var z=Qd(R);z.iconName&&z.prefix&&(x=z.iconName,g=z.prefix)}if(x&&!F&&(!o||o.getAttribute(Wi)!==g||o.getAttribute(Yi)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var V=xm(),$=V.extra;$.attributes[di]=t,bi(x,g).then(function(Z){var pe=ea(T(T({},V),{},{icons:{main:Z,mask:Zi()},prefix:g,iconName:C,extra:$,watchable:!0})),ge=re.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=pe.map(function(Ce){return Nn(Ce)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Im(e){return Promise.all([ko(e,"::before"),ko(e,"::after")])}function Nm(e){return e.parentNode!==document.head&&!~xd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(di)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ao(e){if(rt)return new Promise(function(t,n){var r=qt(e.querySelectorAll("*")).filter(Nm).map(Im),i=ta.begin("searchPseudoElements");bl(),Promise.all(r).then(function(){i(),_i(),t()}).catch(function(){i(),_i(),n()})})}var Mm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ao,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?re:r;M.searchPseudoElements&&Ao(i)}}},So=!1,Lm={mixout:function(){return{dom:{unwatch:function(){bl(),So=!0}}}},hooks:function(){return{bootstrap:function(){_o(pi("mutationObserverCallbacks",{}))},noAuto:function(){vm()},watch:function(n){var r=n.observeMutationsRoot;So?_i():_o(pi("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Oo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},jm={mixout:function(){return{parse:{transform:function(n){return Oo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Oo(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),f="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:h};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Wr={x:0,y:0,width:"100%",height:"100%"};function Po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Fm(e){return e.tag==="g"?e.children:[e]}var $m={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Rr(i.split(" ").map(function(o){return o.trim()})):Zi();return a.prefix||(a.prefix=vt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,f=a.width,c=a.icon,m=o.width,h=o.icon,g=jd({transform:l,containerWidth:m,iconWidth:f}),S={tag:"rect",attributes:T(T({},Wr),{},{fill:"white"})},R=c.children?{children:c.children.map(Po)}:{},F={tag:"g",attributes:T({},g.inner),children:[Po(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},R))]},y={tag:"g",attributes:T({},g.outer),children:[F]},x="mask-".concat(s||Pn()),C="clip-".concat(s||Pn()),z={tag:"mask",attributes:T(T({},Wr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,y]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Fm(h)},z]};return r.push(V,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(x,")")},Wr)}),{children:r,attributes:i}}}},zm={provides:function(t){var n=!1;gt.matchMedia&&(n=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Dm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Hm=[zd,Sm,Om,Pm,Cm,Mm,Lm,jm,$m,zm,Dm];em(Hm,{mixoutsTo:Pe});Pe.noAuto;Pe.config;Pe.library;Pe.dom;var xi=Pe.parse;Pe.findIconDefinition;Pe.toHtml;var Um=Pe.icon;Pe.layer;Pe.text;Pe.counter;function Co(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Co(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Co(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dr(e){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dr(e)}function we(e,t,n){return t=Wm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Vm(e,t){if(e==null)return{};var n=Bm(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Km(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wm(e){var t=Km(e,"string");return typeof t=="symbol"?t:String(t)}var Ym=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_l={exports:{}};(function(e){(function(t){var n=function(y,x,C){if(!f(x)||m(x)||h(x)||g(x)||l(x))return x;var z,V=0,$=0;if(c(x))for(z=[],$=x.length;V<$;V++)z.push(n(y,x[V],C));else{z={};for(var Z in x)Object.prototype.hasOwnProperty.call(x,Z)&&(z[y(Z,C)]=n(y,x[Z],C))}return z},r=function(y,x){x=x||{};var C=x.separator||"_",z=x.split||/(?=[A-Z])/;return y.split(z).join(C)},i=function(y){return S(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(x,C){return C?C.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},a=function(y){var x=i(y);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(y,x){return r(y,x).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},f=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},S=function(y){return y=y-0,y===y},R=function(y,x){var C=x&&"process"in x?x.process:x;return typeof C!="function"?y:function(z,V){return C(z,y,V)}},F={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(y,x){return n(R(i,x),y)},decamelizeKeys:function(y,x){return n(R(o,x),y,x)},pascalizeKeys:function(y,x){return n(R(a,x),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(Ym)})(_l);var Gm=_l.exports,qm=["class","style"];function Xm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Gm.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function Qm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function xl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return xl(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Qm(c);break;case"style":l.style=Xm(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=Vm(n,qm);return Hi(e.tag,qe(qe(qe({},t),{},{class:i.class,style:qe(qe({},i.style),o)},i.attrs),s),r)}var wl=!1;try{wl=!0}catch{}function Jm(){if(!wl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Yr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function Zm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ro(e){if(e&&dr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(xi.icon)return xi.icon(e);if(e===null)return null;if(dr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Gr=Fi({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=he(function(){return Ro(t.icon)}),a=he(function(){return Yr("classes",Zm(t))}),o=he(function(){return Yr("transform",typeof t.transform=="string"?xi.transform(t.transform):t.transform)}),s=he(function(){return Yr("mask",Ro(t.mask))}),l=he(function(){return Um(i.value,qe(qe(qe(qe({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});an(l,function(c){if(!c)return Jm("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var f=he(function(){return l.value?xl(l.value.abstract[0],{},r):null});return function(){return f.value}}}),eh={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},th={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},nh={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};const rh={class:"flex justify-between mx-8 items-center mb-10"},ih=de("h2",{class:"text-xl font-medium text-slate-700"},"Hello",-1),ah=de("h1",{class:"text-4xl font-semibold text-slate-700"},"TaskDo",-1),oh={class:"items-center text-center"},sh={class:"text-secondary mb-4"},lh=["onClick"],ch={class:"text-slate-600 text-2xl"},fh=["onUpdate:modelValue"],uh={class:"font-medium"},dh={__name:"Homepage",setup(e){const t=ts([{id:1,name:"Morning Walk",completed:!0}]);function n(r){t.value=t.value.filter(i=>i.id!==r)}return(r,i)=>{const a=wr("RouterLink");return Ut(),cn(Te,null,[de("nav",rh,[ih,ah,se(a,{class:"text-secondary font-medium",to:{name:"index"}},{default:bn(()=>[xn("Logout")]),_:1})]),de("div",oh,[de("button",sh,[se(Re(Gr),{icon:Re(nh)},null,8,["icon"]),xn(" Add new task ")]),de("div",null,[(Ut(!0),cn(Te,null,Hc(t.value,o=>(Ut(),cn("div",{key:o.id,class:"flex justify-center items-center space-x-3"},[de("button",{class:"text-slate-600 text-2xl",onClick:s=>n(o.id)},[se(Re(Gr),{icon:Re(th)},null,8,["icon"])],8,lh),se(a,{class:"text-secondary font-medium",onClick:s=>r.editTask(o.id),to:{name:"edit",params:{taskId:o.id}}},{default:bn(()=>[de("button",ch,[se(Re(Gr),{icon:Re(eh)},null,8,["icon"])])]),_:2},1032,["onClick","to"]),Pc(de("input",{type:"checkbox","onUpdate:modelValue":s=>o.completed=s,class:"checkbox"},null,8,fh),[[Vf,o.completed]]),de("span",uh,Fl(o.name),1)]))),128))])])],64)}}},mh={class:"flex justify-between mx-8 items-center mb-10"},hh=de("h2",{class:"text-xl font-medium text-slate-700"},"Hello",-1),ph=de("h1",{class:"text-4xl font-semibold text-slate-700"},"TaskDo",-1),gh=uf('<div class="items-center text-center"><div><h1 class="text-x1 font-medium font-bold">Edit</h1><div class="flex justify-center items-center space-x-3"><input type="text" placeholder="Enter Edit" class="border border-gray-300 rounded px-2 py-1 mr-2 w-1/2"><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"> Save </button><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"> Cancel </button></div></div></div>',1),vh={__name:"EditView",setup(e){return(t,n)=>{const r=wr("RouterLink");return Ut(),cn(Te,null,[de("nav",mh,[hh,ph,se(r,{class:"text-secondary font-medium",to:{name:"index"}},{default:bn(()=>[xn(" Logout ")]),_:1})]),gh],64)}}},bh=td({history:Ru("/"),routes:[{path:"/home",name:"home",component:dh},{path:"/",name:"index",component:cd},{path:"/edit",name:"edit",component:vh}]}),El=Gf(Zf);El.use(bh);El.mount("#app");
