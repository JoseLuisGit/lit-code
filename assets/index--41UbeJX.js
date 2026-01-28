(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Kl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dt={},Ts=[],Nn=()=>{},wf=()=>!1,Co=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Zl=n=>n.startsWith("onUpdate:"),It=Object.assign,Jl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ad=Object.prototype.hasOwnProperty,st=(n,e)=>Ad.call(n,e),qe=Array.isArray,As=n=>Po(n)==="[object Map]",Rf=n=>Po(n)==="[object Set]",Ye=n=>typeof n=="function",bt=n=>typeof n=="string",Pi=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Cf=n=>(vt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),Pf=Object.prototype.toString,Po=n=>Pf.call(n),wd=n=>Po(n).slice(8,-1),Df=n=>Po(n)==="[object Object]",Ql=n=>bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,nr=Kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Do=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Rd=/-\w/g,pn=Do(n=>n.replace(Rd,e=>e.slice(1).toUpperCase())),Cd=/\B([A-Z])/g,Qi=Do(n=>n.replace(Cd,"-$1").toLowerCase()),Lo=Do(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ko=Do(n=>n?`on${Lo(n)}`:""),Ti=(n,e)=>!Object.is(n,e),no=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Lf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ec=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let zc;const Io=()=>zc||(zc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tc(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=bt(i)?Id(i):tc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(bt(n)||vt(n))return n}const Pd=/;(?![^(]*\))/g,Dd=/:([^]+)/,Ld=/\/\*[^]*?\*\//g;function Id(n){const e={};return n.replace(Ld,"").split(Pd).forEach(t=>{if(t){const i=t.split(Dd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ei(n){let e="";if(bt(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=ei(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nd=Kl(Ud);function If(n){return!!n||n===""}const Uf=n=>!!(n&&n.__v_isRef===!0),cn=n=>bt(n)?n:n==null?"":qe(n)||vt(n)&&(n.toString===Pf||!Ye(n.toString))?Uf(n)?cn(n.value):JSON.stringify(n,Nf,2):String(n),Nf=(n,e)=>Uf(e)?Nf(n,e.value):As(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Zo(i,r)+" =>"]=s,t),{})}:Rf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Zo(t))}:Pi(e)?Zo(e):vt(e)&&!qe(e)&&!Df(e)?String(e):e,Zo=(n,e="")=>{var t;return Pi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Kt;class Fd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){++this._on===1&&(this.prevScope=Kt,Kt=this)}off(){this._on>0&&--this._on===0&&(Kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Od(){return Kt}let gt;const Jo=new WeakSet;class Ff{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Jo.has(this)&&(Jo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vc(this),zf(this);const e=gt,t=yn;gt=this,yn=!0;try{return this.fn()}finally{Vf(this),gt=e,yn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sc(e);this.deps=this.depsTail=void 0,Vc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Jo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ha(this)&&this.run()}get dirty(){return Ha(this)}}let Of=0,ir,sr;function Bf(n,e=!1){if(n.flags|=8,e){n.next=sr,sr=n;return}n.next=ir,ir=n}function nc(){Of++}function ic(){if(--Of>0)return;if(sr){let e=sr;for(sr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ir;){let e=ir;for(ir=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function zf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),sc(i),Bd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Ha(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Hf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Hf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ur)||(n.globalVersion=ur,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ha(n))))return;n.flags|=2;const e=n.dep,t=gt,i=yn;gt=n,yn=!0;try{zf(n);const s=n.fn(n._value);(e.version===0||Ti(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{gt=t,yn=i,Vf(n),n.flags&=-3}}function sc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)sc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Bd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let yn=!0;const Gf=[];function ri(){Gf.push(yn),yn=!1}function oi(){const n=Gf.pop();yn=n===void 0?!0:n}function Vc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=gt;gt=void 0;try{e()}finally{gt=t}}}let ur=0;class zd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!gt||!yn||gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==gt)t=this.activeLink=new zd(gt,this),gt.deps?(t.prevDep=gt.depsTail,gt.depsTail.nextDep=t,gt.depsTail=t):gt.deps=gt.depsTail=t,kf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=gt.depsTail,t.nextDep=void 0,gt.depsTail.nextDep=t,gt.depsTail=t,gt.deps===t&&(gt.deps=i)}return t}trigger(e){this.version++,ur++,this.notify(e)}notify(e){nc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ic()}}}function kf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)kf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ga=new WeakMap,ji=Symbol(""),ka=Symbol(""),fr=Symbol("");function Ft(n,e,t){if(yn&&gt){let i=Ga.get(n);i||Ga.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new rc),s.map=i,s.key=t),s.track()}}function Zn(n,e,t,i,s,r){const o=Ga.get(n);if(!o){ur++;return}const a=l=>{l&&l.trigger()};if(nc(),e==="clear")o.forEach(a);else{const l=qe(n),c=l&&Ql(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===fr||!Pi(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(fr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ji)),As(n)&&a(o.get(ka)));break;case"delete":l||(a(o.get(ji)),As(n)&&a(o.get(ka)));break;case"set":As(n)&&a(o.get(ji));break}}ic()}function ns(n){const e=it(n);return e===n?e:(Ft(e,"iterate",fr),hn(n)?e:e.map(bn))}function Uo(n){return Ft(n=it(n),"iterate",fr),n}function xi(n,e){return ai(n)?Ds($i(n)?bn(e):e):bn(e)}const Vd={__proto__:null,[Symbol.iterator](){return Qo(this,Symbol.iterator,n=>xi(this,n))},concat(...n){return ns(this).concat(...n.map(e=>qe(e)?ns(e):e))},entries(){return Qo(this,"entries",n=>(n[1]=xi(this,n[1]),n))},every(n,e){return kn(this,"every",n,e,void 0,arguments)},filter(n,e){return kn(this,"filter",n,e,t=>t.map(i=>xi(this,i)),arguments)},find(n,e){return kn(this,"find",n,e,t=>xi(this,t),arguments)},findIndex(n,e){return kn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return kn(this,"findLast",n,e,t=>xi(this,t),arguments)},findLastIndex(n,e){return kn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return kn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ea(this,"includes",n)},indexOf(...n){return ea(this,"indexOf",n)},join(n){return ns(this).join(n)},lastIndexOf(...n){return ea(this,"lastIndexOf",n)},map(n,e){return kn(this,"map",n,e,void 0,arguments)},pop(){return Hs(this,"pop")},push(...n){return Hs(this,"push",n)},reduce(n,...e){return Hc(this,"reduce",n,e)},reduceRight(n,...e){return Hc(this,"reduceRight",n,e)},shift(){return Hs(this,"shift")},some(n,e){return kn(this,"some",n,e,void 0,arguments)},splice(...n){return Hs(this,"splice",n)},toReversed(){return ns(this).toReversed()},toSorted(n){return ns(this).toSorted(n)},toSpliced(...n){return ns(this).toSpliced(...n)},unshift(...n){return Hs(this,"unshift",n)},values(){return Qo(this,"values",n=>xi(this,n))}};function Qo(n,e,t){const i=Uo(n),s=i[e]();return i!==n&&!hn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Hd=Array.prototype;function kn(n,e,t,i,s,r){const o=Uo(n),a=o!==n&&!hn(n),l=o[e];if(l!==Hd[e]){const f=l.apply(n,r);return a?bn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,xi(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Hc(n,e,t,i){const s=Uo(n);let r=t;return s!==n&&(hn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,xi(n,a),l,n)}),s[e](r,...i)}function ea(n,e,t){const i=it(n);Ft(i,"iterate",fr);const s=i[e](...t);return(s===-1||s===!1)&&cc(t[0])?(t[0]=it(t[0]),i[e](...t)):s}function Hs(n,e,t=[]){ri(),nc();const i=it(n)[e].apply(n,t);return ic(),oi(),i}const Gd=Kl("__proto__,__v_isRef,__isVue"),Wf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Pi));function kd(n){Pi(n)||(n=String(n));const e=it(this);return Ft(e,"has",n),e.hasOwnProperty(n)}class Xf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Qd:$f:r?jf:qf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!s){let l;if(o&&(l=Vd[t]))return l;if(t==="hasOwnProperty")return kd}const a=Reflect.get(e,t,Lt(e)?e:i);if((Pi(t)?Wf.has(t):Gd(t))||(s||Ft(e,"get",t),r))return a;if(Lt(a)){const l=o&&Ql(t)?a:a.value;return s&&vt(l)?Xa(l):l}return vt(a)?s?Xa(a):ac(a):a}}class Yf extends Xf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=qe(e)&&Ql(t);if(!this._isShallow){const c=ai(r);if(!hn(i)&&!ai(i)&&(r=it(r),i=it(i)),!o&&Lt(r)&&!Lt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:st(e,t),l=Reflect.set(e,t,i,Lt(e)?e:s);return e===it(s)&&(a?Ti(i,r)&&Zn(e,"set",t,i):Zn(e,"add",t,i)),l}deleteProperty(e,t){const i=st(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Zn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Pi(t)||!Wf.has(t))&&Ft(e,"has",t),i}ownKeys(e){return Ft(e,"iterate",qe(e)?"length":ji),Reflect.ownKeys(e)}}class Wd extends Xf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Xd=new Yf,Yd=new Wd,qd=new Yf(!0);const Wa=n=>n,Ar=n=>Reflect.getPrototypeOf(n);function jd(n,e,t){return function(...i){const s=this.__v_raw,r=it(s),o=As(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Wa:e?Ds:bn;return!e&&Ft(r,"iterate",l?ka:ji),It(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function wr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function $d(n,e){const t={get(s){const r=this.__v_raw,o=it(r),a=it(s);n||(Ti(s,a)&&Ft(o,"get",s),Ft(o,"get",a));const{has:l}=Ar(o),c=e?Wa:n?Ds:bn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ft(it(s),"iterate",ji),s.size},has(s){const r=this.__v_raw,o=it(r),a=it(s);return n||(Ti(s,a)&&Ft(o,"has",s),Ft(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=it(a),c=e?Wa:n?Ds:bn;return!n&&Ft(l,"iterate",ji),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return It(t,n?{add:wr("add"),set:wr("set"),delete:wr("delete"),clear:wr("clear")}:{add(s){!e&&!hn(s)&&!ai(s)&&(s=it(s));const r=it(this);return Ar(r).has.call(r,s)||(r.add(s),Zn(r,"add",s,s)),this},set(s,r){!e&&!hn(r)&&!ai(r)&&(r=it(r));const o=it(this),{has:a,get:l}=Ar(o);let c=a.call(o,s);c||(s=it(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ti(r,u)&&Zn(o,"set",s,r):Zn(o,"add",s,r),this},delete(s){const r=it(this),{has:o,get:a}=Ar(r);let l=o.call(r,s);l||(s=it(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Zn(r,"delete",s,void 0),c},clear(){const s=it(this),r=s.size!==0,o=s.clear();return r&&Zn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=jd(s,n,e)}),t}function oc(n,e){const t=$d(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(st(t,s)&&s in i?t:i,s,r)}const Kd={get:oc(!1,!1)},Zd={get:oc(!1,!0)},Jd={get:oc(!0,!1)};const qf=new WeakMap,jf=new WeakMap,$f=new WeakMap,Qd=new WeakMap;function ep(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tp(n){return n.__v_skip||!Object.isExtensible(n)?0:ep(wd(n))}function ac(n){return ai(n)?n:lc(n,!1,Xd,Kd,qf)}function np(n){return lc(n,!1,qd,Zd,jf)}function Xa(n){return lc(n,!0,Yd,Jd,$f)}function lc(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=tp(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function $i(n){return ai(n)?$i(n.__v_raw):!!(n&&n.__v_isReactive)}function ai(n){return!!(n&&n.__v_isReadonly)}function hn(n){return!!(n&&n.__v_isShallow)}function cc(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function ip(n){return!st(n,"__v_skip")&&Object.isExtensible(n)&&Lf(n,"__v_skip",!0),n}const bn=n=>vt(n)?ac(n):n,Ds=n=>vt(n)?Xa(n):n;function Lt(n){return n?n.__v_isRef===!0:!1}function Fn(n){return sp(n,!1)}function sp(n,e){return Lt(n)?n:new rp(n,e)}class rp{constructor(e,t){this.dep=new rc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:bn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||hn(e)||ai(e);e=i?e:it(e),Ti(e,t)&&(this._rawValue=e,this._value=i?e:bn(e),this.dep.trigger())}}function Fe(n){return Lt(n)?n.value:n}const op={get:(n,e,t)=>e==="__v_raw"?n:Fe(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Lt(s)&&!Lt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Kf(n){return $i(n)?n:new Proxy(n,op)}class ap{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new rc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return Bf(this,!0),!0}get value(){const e=this.dep.track();return Hf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lp(n,e,t=!1){let i,s;return Ye(n)?i=n:(i=n.get,s=n.set),new ap(i,s,t)}const Rr={},mo=new WeakMap;let Gi;function cp(n,e=!1,t=Gi){if(t){let i=mo.get(t);i||mo.set(t,i=[]),i.push(n)}}function up(n,e,t=dt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=b=>s?b:hn(b)||s===!1||s===0?Jn(b,1):Jn(b);let u,f,d,p,_=!1,x=!1;if(Lt(n)?(f=()=>n.value,_=hn(n)):$i(n)?(f=()=>c(n),_=!0):qe(n)?(x=!0,_=n.some(b=>$i(b)||hn(b)),f=()=>n.map(b=>{if(Lt(b))return b.value;if($i(b))return c(b);if(Ye(b))return l?l(b,2):b()})):Ye(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){ri();try{d()}finally{oi()}}const b=Gi;Gi=u;try{return l?l(n,3,[p]):n(p)}finally{Gi=b}}:f=Nn,e&&s){const b=f,R=s===!0?1/0:s;f=()=>Jn(b(),R)}const m=Od(),h=()=>{u.stop(),m&&m.active&&Jl(m.effects,u)};if(r&&e){const b=e;e=(...R)=>{b(...R),h()}}let T=x?new Array(n.length).fill(Rr):Rr;const w=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const R=u.run();if(s||_||(x?R.some((D,L)=>Ti(D,T[L])):Ti(R,T))){d&&d();const D=Gi;Gi=u;try{const L=[R,T===Rr?void 0:x&&T[0]===Rr?[]:T,p];T=R,l?l(e,3,L):e(...L)}finally{Gi=D}}}else u.run()};return a&&a(w),u=new Ff(f),u.scheduler=o?()=>o(w,!1):w,p=b=>cp(b,!1,u),d=u.onStop=()=>{const b=mo.get(u);if(b){if(l)l(b,4);else for(const R of b)R();mo.delete(u)}},e?i?w(!0):T=u.run():o?o(w.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Jn(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Lt(n))Jn(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)Jn(n[i],e,t);else if(Rf(n)||As(n))n.forEach(i=>{Jn(i,e,t)});else if(Df(n)){for(const i in n)Jn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Jn(n[i],e,t)}return n}function vr(n,e,t,i){try{return i?n(...i):n()}catch(s){No(s,e,t)}}function zn(n,e,t,i){if(Ye(n)){const s=vr(n,e,t,i);return s&&Cf(s)&&s.catch(r=>{No(r,e,t)}),s}if(qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(zn(n[r],e,t,i));return s}}function No(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){ri(),vr(r,null,10,[n,l,c]),oi();return}}fp(n,t,s,i,o)}function fp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Xt=[];let Cn=-1;const ws=[];let vi=null,Es=0;const Zf=Promise.resolve();let go=null;function Jf(n){const e=go||Zf;return n?e.then(this?n.bind(this):n):e}function hp(n){let e=Cn+1,t=Xt.length;for(;e<t;){const i=e+t>>>1,s=Xt[i],r=hr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function uc(n){if(!(n.flags&1)){const e=hr(n),t=Xt[Xt.length-1];!t||!(n.flags&2)&&e>=hr(t)?Xt.push(n):Xt.splice(hp(e),0,n),n.flags|=1,Qf()}}function Qf(){go||(go=Zf.then(th))}function dp(n){qe(n)?ws.push(...n):vi&&n.id===-1?vi.splice(Es+1,0,n):n.flags&1||(ws.push(n),n.flags|=1),Qf()}function Gc(n,e,t=Cn+1){for(;t<Xt.length;t++){const i=Xt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Xt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function eh(n){if(ws.length){const e=[...new Set(ws)].sort((t,i)=>hr(t)-hr(i));if(ws.length=0,vi){vi.push(...e);return}for(vi=e,Es=0;Es<vi.length;Es++){const t=vi[Es];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}vi=null,Es=0}}const hr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function th(n){try{for(Cn=0;Cn<Xt.length;Cn++){const e=Xt[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Cn<Xt.length;Cn++){const e=Xt[Cn];e&&(e.flags&=-2)}Cn=-1,Xt.length=0,eh(),go=null,(Xt.length||ws.length)&&th()}}let sn=null,nh=null;function _o(n){const e=sn;return sn=n,nh=n&&n.type.__scopeId||null,e}function pp(n,e=sn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&nu(-1);const r=_o(e);let o;try{o=n(...s)}finally{_o(r),i._d&&nu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function mp(n,e){if(sn===null)return n;const t=Vo(sn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=dt]=e[s];r&&(Ye(r)&&(r={mounted:r,updated:r}),r.deep&&Jn(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ii(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ri(),zn(l,t,8,[n.el,a,n,e]),oi())}}function gp(n,e){if(Ot){let t=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===t&&(t=Ot.provides=Object.create(i)),t[n]=e}}function io(n,e,t=!1){const i=Sm();if(i||Rs){let s=Rs?Rs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const _p=Symbol.for("v-scx"),xp=()=>io(_p);function Ki(n,e,t){return ih(n,e,t)}function ih(n,e,t=dt){const{immediate:i,deep:s,flush:r,once:o}=t,a=It({},t),l=e&&i||!e&&r!=="post";let c;if(pr){if(r==="sync"){const p=xp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Nn,p.resume=Nn,p.pause=Nn,p}}const u=Ot;a.call=(p,_,x)=>zn(p,u,_,x);let f=!1;r==="post"?a.scheduler=p=>{Wt(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():uc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=up(n,e,a);return pr&&(c?c.push(d):l&&d()),d}function vp(n,e,t){const i=this.proxy,s=bt(n)?n.includes(".")?sh(i,n):()=>i[n]:n.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,t=e);const o=Mr(this),a=ih(s,r.bind(i),t);return o(),a}function sh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const rh=Symbol("_vte"),Sp=n=>n.__isTeleport,rr=n=>n&&(n.disabled||n.disabled===""),kc=n=>n&&(n.defer||n.defer===""),Wc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Xc=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Ya=(n,e)=>{const t=n&&n.to;return bt(t)?e?e(t):null:t},oh={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:p,querySelector:_,createText:x,createComment:m}}=c,h=rr(e.props);let{shapeFlag:T,children:w,dynamicChildren:b}=e;if(n==null){const R=e.el=x(""),D=e.anchor=x("");p(R,t,i),p(D,t,i);const L=(S,y)=>{T&16&&u(w,S,y,s,r,o,a,l)},V=()=>{const S=e.target=Ya(e.props,_),y=ah(S,e,x,p);S&&(o!=="svg"&&Wc(S)?o="svg":o!=="mathml"&&Xc(S)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(S),h||(L(S,y),so(e,!1)))};h&&(L(t,D),so(e,!0)),kc(e.props)?(e.el.__isMounted=!1,Wt(()=>{V(),delete e.el.__isMounted},r)):V()}else{if(kc(e.props)&&n.el.__isMounted===!1){Wt(()=>{oh.process(n,e,t,i,s,r,o,a,l,c)},r);return}e.el=n.el,e.targetStart=n.targetStart;const R=e.anchor=n.anchor,D=e.target=n.target,L=e.targetAnchor=n.targetAnchor,V=rr(n.props),S=V?t:D,y=V?R:L;if(o==="svg"||Wc(D)?o="svg":(o==="mathml"||Xc(D))&&(o="mathml"),b?(d(n.dynamicChildren,b,S,s,r,o,a),pc(n,e,!0)):l||f(n,e,S,y,s,r,o,a,!1),h)V?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Cr(e,t,R,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const I=e.target=Ya(e.props,_);I&&Cr(e,I,null,c,0)}else V&&Cr(e,D,L,c,1);so(e,h)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=n;if(f&&(s(c),s(u)),r&&s(l),o&16){const p=r||!rr(d);for(let _=0;_<a.length;_++){const x=a[_];i(x,e,t,p,!!x.dynamicChildren)}}},move:Cr,hydrate:Mp};function Cr(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=r===2;if(f&&i(o,e,t),(!f||rr(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,t,2);f&&i(a,e,t)}function Mp(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function d(x,m,h,T){m.anchor=f(o(x),m,a(x),t,i,s,r),m.targetStart=h,m.targetAnchor=T}const p=e.target=Ya(e.props,l),_=rr(e.props);if(p){const x=p._lpa||p.firstChild;if(e.shapeFlag&16)if(_)d(n,e,x,x&&o(x));else{e.anchor=o(n);let m=x;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||ah(p,e,u,c),f(x&&o(x),e,p,t,i,s,r)}so(e,_)}else _&&e.shapeFlag&16&&d(n,e,n,o(n));return e.anchor&&o(e.anchor)}const yp=oh;function so(n,e){const t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function ah(n,e,t,i){const s=e.targetStart=t(""),r=e.targetAnchor=t("");return s[rh]=r,n&&(i(s,n),i(r,n)),r}const Ep=Symbol("_leaveCb");function fc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,fc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Sr(n,e){return Ye(n)?It({name:n.name},e,{setup:n}):n}function lh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const xo=new WeakMap;function or(n,e,t,i,s=!1){if(qe(n)){n.forEach((_,x)=>or(_,e&&(qe(e)?e[x]:e),t,i,s));return}if(ar(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&or(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Vo(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,f=a.setupState,d=it(f),p=f===dt?wf:_=>st(d,_);if(c!=null&&c!==l){if(Yc(e),bt(c))u[c]=null,p(c)&&(f[c]=null);else if(Lt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(Ye(l))vr(l,a,12,[o,u]);else{const _=bt(l),x=Lt(l);if(_||x){const m=()=>{if(n.f){const h=_?p(l)?f[l]:u[l]:l.value;if(s)qe(h)&&Jl(h,r);else if(qe(h))h.includes(r)||h.push(r);else if(_)u[l]=[r],p(l)&&(f[l]=u[l]);else{const T=[r];l.value=T,n.k&&(u[n.k]=T)}}else _?(u[l]=o,p(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{m(),xo.delete(n)};h.id=-1,xo.set(n,h),Wt(h,t)}else Yc(n),m()}}}function Yc(n){const e=xo.get(n);e&&(e.flags|=8,xo.delete(n))}Io().requestIdleCallback;Io().cancelIdleCallback;const ar=n=>!!n.type.__asyncLoader,ch=n=>n.type.__isKeepAlive;function bp(n,e){uh(n,"a",e)}function Tp(n,e){uh(n,"da",e)}function uh(n,e,t=Ot){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Fo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ch(s.parent.vnode)&&Ap(i,e,t,s),s=s.parent}}function Ap(n,e,t,i){const s=Fo(e,n,i,!0);fh(()=>{Jl(i[e],s)},t)}function Fo(n,e,t=Ot,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ri();const a=Mr(t),l=zn(e,t,n,o);return a(),oi(),l});return i?s.unshift(r):s.push(r),r}}const fi=n=>(e,t=Ot)=>{(!pr||n==="sp")&&Fo(n,(...i)=>e(...i),t)},wp=fi("bm"),Rp=fi("m"),Cp=fi("bu"),Pp=fi("u"),Dp=fi("bum"),fh=fi("um"),Lp=fi("sp"),Ip=fi("rtg"),Up=fi("rtc");function Np(n,e=Ot){Fo("ec",n,e)}const Fp="components";function Op(n,e){return zp(Fp,n,!0,e)||n}const Bp=Symbol.for("v-ndc");function zp(n,e,t=!0,i=!1){const s=sn||Ot;if(s){const r=s.type;{const a=Tm(r,!1);if(a&&(a===e||a===pn(e)||a===Lo(pn(e))))return r}const o=qc(s[n]||r[n],e)||qc(s.appContext[n],e);return!o&&i?r:o}}function qc(n,e){return n&&(n[e]||n[pn(e)]||n[Lo(pn(e))])}function Vp(n,e,t,i){let s;const r=t,o=qe(n);if(o||bt(n)){const a=o&&$i(n);let l=!1,c=!1;a&&(l=!hn(n),c=ai(n),n=Uo(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Ds(bn(n[u])):bn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const qa=n=>n?Ph(n)?Vo(n):qa(n.parent):null,lr=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>qa(n.parent),$root:n=>qa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>dh(n),$forceUpdate:n=>n.f||(n.f=()=>{uc(n.update)}),$nextTick:n=>n.n||(n.n=Jf.bind(n.proxy)),$watch:n=>vp.bind(n)}),ta=(n,e)=>n!==dt&&!n.__isScriptSetup&&st(n,e),Hp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ta(i,e))return o[e]=1,i[e];if(s!==dt&&st(s,e))return o[e]=2,s[e];if(st(r,e))return o[e]=3,r[e];if(t!==dt&&st(t,e))return o[e]=4,t[e];ja&&(o[e]=0)}}const c=lr[e];let u,f;if(c)return e==="$attrs"&&Ft(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==dt&&st(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,st(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ta(s,e)?(s[e]=t,!0):i!==dt&&st(i,e)?(i[e]=t,!0):st(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==dt&&a[0]!=="$"&&st(n,a)||ta(e,a)||st(r,a)||st(i,a)||st(lr,a)||st(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:st(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function jc(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ja=!0;function Gp(n){const e=dh(n),t=n.proxy,i=n.ctx;ja=!1,e.beforeCreate&&$c(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:h,beforeUnmount:T,destroyed:w,unmounted:b,render:R,renderTracked:D,renderTriggered:L,errorCaptured:V,serverPrefetch:S,expose:y,inheritAttrs:I,components:K,directives:Y,filters:se}=e;if(c&&kp(c,i,null),o)for(const z in o){const te=o[z];Ye(te)&&(i[z]=te.bind(t))}if(s){const z=s.call(t,t);vt(z)&&(n.data=ac(z))}if(ja=!0,r)for(const z in r){const te=r[z],xe=Ye(te)?te.bind(t,t):Ye(te.get)?te.get.bind(t,t):Nn,ge=!Ye(te)&&Ye(te.set)?te.set.bind(t):Nn,Me=Sn({get:xe,set:ge});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>Me.value,set:ze=>Me.value=ze})}if(a)for(const z in a)hh(a[z],i,t,z);if(l){const z=Ye(l)?l.call(t):l;Reflect.ownKeys(z).forEach(te=>{gp(te,z[te])})}u&&$c(u,n,"c");function j(z,te){qe(te)?te.forEach(xe=>z(xe.bind(t))):te&&z(te.bind(t))}if(j(wp,f),j(Rp,d),j(Cp,p),j(Pp,_),j(bp,x),j(Tp,m),j(Np,V),j(Up,D),j(Ip,L),j(Dp,T),j(fh,b),j(Lp,S),qe(y))if(y.length){const z=n.exposed||(n.exposed={});y.forEach(te=>{Object.defineProperty(z,te,{get:()=>t[te],set:xe=>t[te]=xe,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Nn&&(n.render=R),I!=null&&(n.inheritAttrs=I),K&&(n.components=K),Y&&(n.directives=Y),S&&lh(n)}function kp(n,e,t=Nn){qe(n)&&(n=$a(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=io(s.from||i,s.default,!0):r=io(s.from||i):r=io(s),Lt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function $c(n,e,t){zn(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function hh(n,e,t,i){let s=i.includes(".")?sh(t,i):()=>t[i];if(bt(n)){const r=e[n];Ye(r)&&Ki(s,r)}else if(Ye(n))Ki(s,n.bind(t));else if(vt(n))if(qe(n))n.forEach(r=>hh(r,e,t,i));else{const r=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(r)&&Ki(s,r,n)}}function dh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>vo(l,c,o,!0)),vo(l,e,o)),vt(e)&&r.set(e,l),l}function vo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&vo(n,r,t,!0),s&&s.forEach(o=>vo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Wp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Wp={data:Kc,props:Zc,emits:Zc,methods:Qs,computed:Qs,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Qs,directives:Qs,watch:Yp,provide:Kc,inject:Xp};function Kc(n,e){return e?n?function(){return It(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function Xp(n,e){return Qs($a(n),$a(e))}function $a(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Gt(n,e){return n?[...new Set([].concat(n,e))]:e}function Qs(n,e){return n?It(Object.create(null),n,e):e}function Zc(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:It(Object.create(null),jc(n),jc(e??{})):e}function Yp(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const i in e)t[i]=Gt(n[i],e[i]);return t}function ph(){return{app:null,config:{isNativeTag:wf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qp=0;function jp(n,e){return function(i,s=null){Ye(i)||(i=It({},i)),s!=null&&!vt(s)&&(s=null);const r=ph(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:qp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:wm,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(c,...f)):Ye(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||dn(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Vo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(zn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Rs;Rs=c;try{return u()}finally{Rs=f}}};return c}}let Rs=null;const $p=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${pn(e)}Modifiers`]||n[`${Qi(e)}Modifiers`];function Kp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||dt;let s=t;const r=e.startsWith("update:"),o=r&&$p(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>bt(u)?u.trim():u)),o.number&&(s=t.map(ec)));let a,l=i[a=Ko(e)]||i[a=Ko(pn(e))];!l&&r&&(l=i[a=Ko(Qi(e))]),l&&zn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,zn(c,n,6,s)}}const Zp=new WeakMap;function mh(n,e,t=!1){const i=t?Zp:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ye(n)){const l=c=>{const u=mh(c,e,!0);u&&(a=!0,It(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(qe(r)?r.forEach(l=>o[l]=null):It(o,r),vt(n)&&i.set(n,o),o)}function Oo(n,e){return!n||!Co(e)?!1:(e=e.slice(2).replace(/Once$/,""),st(n,e[0].toLowerCase()+e.slice(1))||st(n,Qi(e))||st(n,e))}function Jc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:_,inheritAttrs:x}=n,m=_o(n);let h,T;try{if(t.shapeFlag&4){const b=s||i,R=b;h=Pn(c.call(R,b,u,f,p,d,_)),T=a}else{const b=e;h=Pn(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),T=e.props?a:Jp(a)}}catch(b){cr.length=0,No(b,n,1),h=dn(Ri)}let w=h;if(T&&x!==!1){const b=Object.keys(T),{shapeFlag:R}=w;b.length&&R&7&&(r&&b.some(Zl)&&(T=Qp(T,r)),w=Ls(w,T,!1,!0))}return t.dirs&&(w=Ls(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&fc(w,t.transition),h=w,_o(m),h}const Jp=n=>{let e;for(const t in n)(t==="class"||t==="style"||Co(t))&&((e||(e={}))[t]=n[t]);return e},Qp=(n,e)=>{const t={};for(const i in n)(!Zl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function em(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Qc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Oo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Qc(i,o,c):!0:!!o;return!1}function Qc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Oo(t,r))return!0}return!1}function tm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const gh={},_h=()=>Object.create(gh),xh=n=>Object.getPrototypeOf(n)===gh;function nm(n,e,t,i=!1){const s={},r=_h();n.propsDefaults=Object.create(null),vh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:np(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function im(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=it(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Oo(n.emitsOptions,d))continue;const p=e[d];if(l)if(st(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=pn(d);s[_]=Ka(l,a,_,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{vh(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!st(e,f)&&((u=Qi(f))===f||!st(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Ka(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!st(e,f))&&(delete r[f],c=!0)}c&&Zn(n.attrs,"set","")}function vh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(nr(l))continue;const c=e[l];let u;s&&st(s,u=pn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Oo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=it(t),c=a||dt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Ka(s,l,f,c[f],n,!st(c,f))}}return o}function Ka(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=st(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Mr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Qi(t))&&(i=!0))}return i}const sm=new WeakMap;function Sh(n,e,t=!1){const i=t?sm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ye(n)){const u=f=>{l=!0;const[d,p]=Sh(f,e,!0);It(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,Ts),Ts;if(qe(r))for(let u=0;u<r.length;u++){const f=pn(r[u]);eu(f)&&(o[f]=dt)}else if(r)for(const u in r){const f=pn(u);if(eu(f)){const d=r[u],p=o[f]=qe(d)||Ye(d)?{type:d}:It({},d),_=p.type;let x=!1,m=!0;if(qe(_))for(let h=0;h<_.length;++h){const T=_[h],w=Ye(T)&&T.name;if(w==="Boolean"){x=!0;break}else w==="String"&&(m=!1)}else x=Ye(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||st(p,"default"))&&a.push(f)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function eu(n){return n[0]!=="$"&&!nr(n)}const hc=n=>n==="_"||n==="_ctx"||n==="$stable",dc=n=>qe(n)?n.map(Pn):[Pn(n)],rm=(n,e,t)=>{if(e._n)return e;const i=pp((...s)=>dc(e(...s)),t);return i._c=!1,i},Mh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(hc(s))continue;const r=n[s];if(Ye(r))e[s]=rm(s,r,i);else if(r!=null){const o=dc(r);e[s]=()=>o}}},yh=(n,e)=>{const t=dc(e);n.slots.default=()=>t},Eh=(n,e,t)=>{for(const i in e)(t||!hc(i))&&(n[i]=e[i])},om=(n,e,t)=>{const i=n.slots=_h();if(n.vnode.shapeFlag&32){const s=e._;s?(Eh(i,e,t),t&&Lf(i,"_",s,!0)):Mh(e,i)}else e&&yh(n,e)},am=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Eh(s,e,t):(r=!e.$stable,Mh(e,s)),o=e}else e&&(yh(n,e),o={default:1});if(r)for(const a in s)!hc(a)&&o[a]==null&&delete s[a]},Wt=hm;function lm(n){return cm(n)}function cm(n,e){const t=Io();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Nn,insertStaticContent:_}=n,x=(A,C,B,J=null,W=null,ee=null,E=void 0,ae=null,re=!!C.dynamicChildren)=>{if(A===C)return;A&&!Gs(A,C)&&(J=X(A),ze(A,W,ee,!0),A=null),C.patchFlag===-2&&(re=!1,C.dynamicChildren=null);const{type:ne,ref:oe,shapeFlag:v}=C;switch(ne){case Bo:m(A,C,B,J);break;case Ri:h(A,C,B,J);break;case ia:A==null&&T(C,B,J,E);break;case xn:K(A,C,B,J,W,ee,E,ae,re);break;default:v&1?R(A,C,B,J,W,ee,E,ae,re):v&6?Y(A,C,B,J,W,ee,E,ae,re):(v&64||v&128)&&ne.process(A,C,B,J,W,ee,E,ae,re,de)}oe!=null&&W?or(oe,A&&A.ref,ee,C||A,!C):oe==null&&A&&A.ref!=null&&or(A.ref,null,ee,A,!0)},m=(A,C,B,J)=>{if(A==null)i(C.el=a(C.children),B,J);else{const W=C.el=A.el;C.children!==A.children&&c(W,C.children)}},h=(A,C,B,J)=>{A==null?i(C.el=l(C.children||""),B,J):C.el=A.el},T=(A,C,B,J)=>{[A.el,A.anchor]=_(A.children,C,B,J,A.el,A.anchor)},w=({el:A,anchor:C},B,J)=>{let W;for(;A&&A!==C;)W=d(A),i(A,B,J),A=W;i(C,B,J)},b=({el:A,anchor:C})=>{let B;for(;A&&A!==C;)B=d(A),s(A),A=B;s(C)},R=(A,C,B,J,W,ee,E,ae,re)=>{if(C.type==="svg"?E="svg":C.type==="math"&&(E="mathml"),A==null)D(C,B,J,W,ee,E,ae,re);else{const ne=A.el&&A.el._isVueCE?A.el:null;try{ne&&ne._beginPatch(),S(A,C,W,ee,E,ae,re)}finally{ne&&ne._endPatch()}}},D=(A,C,B,J,W,ee,E,ae)=>{let re,ne;const{props:oe,shapeFlag:v,transition:g,dirs:P}=A;if(re=A.el=o(A.type,ee,oe&&oe.is,oe),v&8?u(re,A.children):v&16&&V(A.children,re,null,J,W,na(A,ee),E,ae),P&&Ii(A,null,J,"created"),L(re,A,A.scopeId,E,J),oe){for(const Q in oe)Q!=="value"&&!nr(Q)&&r(re,Q,null,oe[Q],ee,J);"value"in oe&&r(re,"value",null,oe.value,ee),(ne=oe.onVnodeBeforeMount)&&wn(ne,J,A)}P&&Ii(A,null,J,"beforeMount");const k=um(W,g);k&&g.beforeEnter(re),i(re,C,B),((ne=oe&&oe.onVnodeMounted)||k||P)&&Wt(()=>{ne&&wn(ne,J,A),k&&g.enter(re),P&&Ii(A,null,J,"mounted")},W)},L=(A,C,B,J,W)=>{if(B&&p(A,B),J)for(let ee=0;ee<J.length;ee++)p(A,J[ee]);if(W){let ee=W.subTree;if(C===ee||Ah(ee.type)&&(ee.ssContent===C||ee.ssFallback===C)){const E=W.vnode;L(A,E,E.scopeId,E.slotScopeIds,W.parent)}}},V=(A,C,B,J,W,ee,E,ae,re=0)=>{for(let ne=re;ne<A.length;ne++){const oe=A[ne]=ae?Si(A[ne]):Pn(A[ne]);x(null,oe,C,B,J,W,ee,E,ae)}},S=(A,C,B,J,W,ee,E)=>{const ae=C.el=A.el;let{patchFlag:re,dynamicChildren:ne,dirs:oe}=C;re|=A.patchFlag&16;const v=A.props||dt,g=C.props||dt;let P;if(B&&Ui(B,!1),(P=g.onVnodeBeforeUpdate)&&wn(P,B,C,A),oe&&Ii(C,A,B,"beforeUpdate"),B&&Ui(B,!0),(v.innerHTML&&g.innerHTML==null||v.textContent&&g.textContent==null)&&u(ae,""),ne?y(A.dynamicChildren,ne,ae,B,J,na(C,W),ee):E||te(A,C,ae,null,B,J,na(C,W),ee,!1),re>0){if(re&16)I(ae,v,g,B,W);else if(re&2&&v.class!==g.class&&r(ae,"class",null,g.class,W),re&4&&r(ae,"style",v.style,g.style,W),re&8){const k=C.dynamicProps;for(let Q=0;Q<k.length;Q++){const G=k[Q],Ae=v[G],ue=g[G];(ue!==Ae||G==="value")&&r(ae,G,Ae,ue,W,B)}}re&1&&A.children!==C.children&&u(ae,C.children)}else!E&&ne==null&&I(ae,v,g,B,W);((P=g.onVnodeUpdated)||oe)&&Wt(()=>{P&&wn(P,B,C,A),oe&&Ii(C,A,B,"updated")},J)},y=(A,C,B,J,W,ee,E)=>{for(let ae=0;ae<C.length;ae++){const re=A[ae],ne=C[ae],oe=re.el&&(re.type===xn||!Gs(re,ne)||re.shapeFlag&198)?f(re.el):B;x(re,ne,oe,null,J,W,ee,E,!0)}},I=(A,C,B,J,W)=>{if(C!==B){if(C!==dt)for(const ee in C)!nr(ee)&&!(ee in B)&&r(A,ee,C[ee],null,W,J);for(const ee in B){if(nr(ee))continue;const E=B[ee],ae=C[ee];E!==ae&&ee!=="value"&&r(A,ee,ae,E,W,J)}"value"in B&&r(A,"value",C.value,B.value,W)}},K=(A,C,B,J,W,ee,E,ae,re)=>{const ne=C.el=A?A.el:a(""),oe=C.anchor=A?A.anchor:a("");let{patchFlag:v,dynamicChildren:g,slotScopeIds:P}=C;P&&(ae=ae?ae.concat(P):P),A==null?(i(ne,B,J),i(oe,B,J),V(C.children||[],B,oe,W,ee,E,ae,re)):v>0&&v&64&&g&&A.dynamicChildren&&A.dynamicChildren.length===g.length?(y(A.dynamicChildren,g,B,W,ee,E,ae),(C.key!=null||W&&C===W.subTree)&&pc(A,C,!0)):te(A,C,B,oe,W,ee,E,ae,re)},Y=(A,C,B,J,W,ee,E,ae,re)=>{C.slotScopeIds=ae,A==null?C.shapeFlag&512?W.ctx.activate(C,B,J,E,re):se(C,B,J,W,ee,E,re):ie(A,C,re)},se=(A,C,B,J,W,ee,E)=>{const ae=A.component=vm(A,J,W);if(ch(A)&&(ae.ctx.renderer=de),Mm(ae,!1,E),ae.asyncDep){if(W&&W.registerDep(ae,j,E),!A.el){const re=ae.subTree=dn(Ri);h(null,re,C,B),A.placeholder=re.el}}else j(ae,A,C,B,W,ee,E)},ie=(A,C,B)=>{const J=C.component=A.component;if(em(A,C,B))if(J.asyncDep&&!J.asyncResolved){z(J,C,B);return}else J.next=C,J.update();else C.el=A.el,J.vnode=C},j=(A,C,B,J,W,ee,E)=>{const ae=()=>{if(A.isMounted){let{next:v,bu:g,u:P,parent:k,vnode:Q}=A;{const Ue=bh(A);if(Ue){v&&(v.el=Q.el,z(A,v,E)),Ue.asyncDep.then(()=>{A.isUnmounted||ae()});return}}let G=v,Ae;Ui(A,!1),v?(v.el=Q.el,z(A,v,E)):v=Q,g&&no(g),(Ae=v.props&&v.props.onVnodeBeforeUpdate)&&wn(Ae,k,v,Q),Ui(A,!0);const ue=Jc(A),Ce=A.subTree;A.subTree=ue,x(Ce,ue,f(Ce.el),X(Ce),A,W,ee),v.el=ue.el,G===null&&tm(A,ue.el),P&&Wt(P,W),(Ae=v.props&&v.props.onVnodeUpdated)&&Wt(()=>wn(Ae,k,v,Q),W)}else{let v;const{el:g,props:P}=C,{bm:k,m:Q,parent:G,root:Ae,type:ue}=A,Ce=ar(C);Ui(A,!1),k&&no(k),!Ce&&(v=P&&P.onVnodeBeforeMount)&&wn(v,G,C),Ui(A,!0);{Ae.ce&&Ae.ce._def.shadowRoot!==!1&&Ae.ce._injectChildStyle(ue);const Ue=A.subTree=Jc(A);x(null,Ue,B,J,A,W,ee),C.el=Ue.el}if(Q&&Wt(Q,W),!Ce&&(v=P&&P.onVnodeMounted)){const Ue=C;Wt(()=>wn(v,G,Ue),W)}(C.shapeFlag&256||G&&ar(G.vnode)&&G.vnode.shapeFlag&256)&&A.a&&Wt(A.a,W),A.isMounted=!0,C=B=J=null}};A.scope.on();const re=A.effect=new Ff(ae);A.scope.off();const ne=A.update=re.run.bind(re),oe=A.job=re.runIfDirty.bind(re);oe.i=A,oe.id=A.uid,re.scheduler=()=>uc(oe),Ui(A,!0),ne()},z=(A,C,B)=>{C.component=A;const J=A.vnode.props;A.vnode=C,A.next=null,im(A,C.props,J,B),am(A,C.children,B),ri(),Gc(A),oi()},te=(A,C,B,J,W,ee,E,ae,re=!1)=>{const ne=A&&A.children,oe=A?A.shapeFlag:0,v=C.children,{patchFlag:g,shapeFlag:P}=C;if(g>0){if(g&128){ge(ne,v,B,J,W,ee,E,ae,re);return}else if(g&256){xe(ne,v,B,J,W,ee,E,ae,re);return}}P&8?(oe&16&&F(ne,W,ee),v!==ne&&u(B,v)):oe&16?P&16?ge(ne,v,B,J,W,ee,E,ae,re):F(ne,W,ee,!0):(oe&8&&u(B,""),P&16&&V(v,B,J,W,ee,E,ae,re))},xe=(A,C,B,J,W,ee,E,ae,re)=>{A=A||Ts,C=C||Ts;const ne=A.length,oe=C.length,v=Math.min(ne,oe);let g;for(g=0;g<v;g++){const P=C[g]=re?Si(C[g]):Pn(C[g]);x(A[g],P,B,null,W,ee,E,ae,re)}ne>oe?F(A,W,ee,!0,!1,v):V(C,B,J,W,ee,E,ae,re,v)},ge=(A,C,B,J,W,ee,E,ae,re)=>{let ne=0;const oe=C.length;let v=A.length-1,g=oe-1;for(;ne<=v&&ne<=g;){const P=A[ne],k=C[ne]=re?Si(C[ne]):Pn(C[ne]);if(Gs(P,k))x(P,k,B,null,W,ee,E,ae,re);else break;ne++}for(;ne<=v&&ne<=g;){const P=A[v],k=C[g]=re?Si(C[g]):Pn(C[g]);if(Gs(P,k))x(P,k,B,null,W,ee,E,ae,re);else break;v--,g--}if(ne>v){if(ne<=g){const P=g+1,k=P<oe?C[P].el:J;for(;ne<=g;)x(null,C[ne]=re?Si(C[ne]):Pn(C[ne]),B,k,W,ee,E,ae,re),ne++}}else if(ne>g)for(;ne<=v;)ze(A[ne],W,ee,!0),ne++;else{const P=ne,k=ne,Q=new Map;for(ne=k;ne<=g;ne++){const Ee=C[ne]=re?Si(C[ne]):Pn(C[ne]);Ee.key!=null&&Q.set(Ee.key,ne)}let G,Ae=0;const ue=g-k+1;let Ce=!1,Ue=0;const ce=new Array(ue);for(ne=0;ne<ue;ne++)ce[ne]=0;for(ne=P;ne<=v;ne++){const Ee=A[ne];if(Ae>=ue){ze(Ee,W,ee,!0);continue}let Pe;if(Ee.key!=null)Pe=Q.get(Ee.key);else for(G=k;G<=g;G++)if(ce[G-k]===0&&Gs(Ee,C[G])){Pe=G;break}Pe===void 0?ze(Ee,W,ee,!0):(ce[Pe-k]=ne+1,Pe>=Ue?Ue=Pe:Ce=!0,x(Ee,C[Pe],B,null,W,ee,E,ae,re),Ae++)}const Se=Ce?fm(ce):Ts;for(G=Se.length-1,ne=ue-1;ne>=0;ne--){const Ee=k+ne,Pe=C[Ee],_e=C[Ee+1],je=Ee+1<oe?_e.el||Th(_e):J;ce[ne]===0?x(null,Pe,B,je,W,ee,E,ae,re):Ce&&(G<0||ne!==Se[G]?Me(Pe,B,je,2):G--)}}},Me=(A,C,B,J,W=null)=>{const{el:ee,type:E,transition:ae,children:re,shapeFlag:ne}=A;if(ne&6){Me(A.component.subTree,C,B,J);return}if(ne&128){A.suspense.move(C,B,J);return}if(ne&64){E.move(A,C,B,de);return}if(E===xn){i(ee,C,B);for(let v=0;v<re.length;v++)Me(re[v],C,B,J);i(A.anchor,C,B);return}if(E===ia){w(A,C,B);return}if(J!==2&&ne&1&&ae)if(J===0)ae.beforeEnter(ee),i(ee,C,B),Wt(()=>ae.enter(ee),W);else{const{leave:v,delayLeave:g,afterLeave:P}=ae,k=()=>{A.ctx.isUnmounted?s(ee):i(ee,C,B)},Q=()=>{ee._isLeaving&&ee[Ep](!0),v(ee,()=>{k(),P&&P()})};g?g(ee,k,Q):Q()}else i(ee,C,B)},ze=(A,C,B,J=!1,W=!1)=>{const{type:ee,props:E,ref:ae,children:re,dynamicChildren:ne,shapeFlag:oe,patchFlag:v,dirs:g,cacheIndex:P}=A;if(v===-2&&(W=!1),ae!=null&&(ri(),or(ae,null,B,A,!0),oi()),P!=null&&(C.renderCache[P]=void 0),oe&256){C.ctx.deactivate(A);return}const k=oe&1&&g,Q=!ar(A);let G;if(Q&&(G=E&&E.onVnodeBeforeUnmount)&&wn(G,C,A),oe&6)ve(A.component,B,J);else{if(oe&128){A.suspense.unmount(B,J);return}k&&Ii(A,null,C,"beforeUnmount"),oe&64?A.type.remove(A,C,B,de,J):ne&&!ne.hasOnce&&(ee!==xn||v>0&&v&64)?F(ne,C,B,!1,!0):(ee===xn&&v&384||!W&&oe&16)&&F(re,C,B),J&&We(A)}(Q&&(G=E&&E.onVnodeUnmounted)||k)&&Wt(()=>{G&&wn(G,C,A),k&&Ii(A,null,C,"unmounted")},B)},We=A=>{const{type:C,el:B,anchor:J,transition:W}=A;if(C===xn){ft(B,J);return}if(C===ia){b(A);return}const ee=()=>{s(B),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(A.shapeFlag&1&&W&&!W.persisted){const{leave:E,delayLeave:ae}=W,re=()=>E(B,ee);ae?ae(A.el,ee,re):re()}else ee()},ft=(A,C)=>{let B;for(;A!==C;)B=d(A),s(A),A=B;s(C)},ve=(A,C,B)=>{const{bum:J,scope:W,job:ee,subTree:E,um:ae,m:re,a:ne}=A;tu(re),tu(ne),J&&no(J),W.stop(),ee&&(ee.flags|=8,ze(E,A,C,B)),ae&&Wt(ae,C),Wt(()=>{A.isUnmounted=!0},C)},F=(A,C,B,J=!1,W=!1,ee=0)=>{for(let E=ee;E<A.length;E++)ze(A[E],C,B,J,W)},X=A=>{if(A.shapeFlag&6)return X(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=d(A.anchor||A.el),B=C&&C[rh];return B?d(B):C};let Z=!1;const he=(A,C,B)=>{let J;A==null?C._vnode&&(ze(C._vnode,null,null,!0),J=C._vnode.component):x(C._vnode||null,A,C,null,null,null,B),C._vnode=A,Z||(Z=!0,Gc(J),eh(),Z=!1)},de={p:x,um:ze,m:Me,r:We,mt:se,mc:V,pc:te,pbc:y,n:X,o:n};return{render:he,hydrate:void 0,createApp:jp(he)}}function na({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ui({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function um(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function pc(n,e,t=!1){const i=n.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Si(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&pc(o,a)),a.type===Bo&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(n.type===xn?1:0)),a.type===Ri&&!a.el&&(a.el=o.el)}}function fm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function bh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bh(e)}function tu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Th(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Th(e.subTree):null}const Ah=n=>n.__isSuspense;function hm(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):dp(n)}const xn=Symbol.for("v-fgt"),Bo=Symbol.for("v-txt"),Ri=Symbol.for("v-cmt"),ia=Symbol.for("v-stc"),cr=[];let rn=null;function _t(n=!1){cr.push(rn=n?null:[])}function dm(){cr.pop(),rn=cr[cr.length-1]||null}let dr=1;function nu(n,e=!1){dr+=n,n<0&&rn&&e&&(rn.hasOnce=!0)}function wh(n){return n.dynamicChildren=dr>0?rn||Ts:null,dm(),dr>0&&rn&&rn.push(n),n}function yt(n,e,t,i,s,r){return wh(me(n,e,t,i,s,r,!0))}function zo(n,e,t,i,s){return wh(dn(n,e,t,i,s,!0))}function Rh(n){return n?n.__v_isVNode===!0:!1}function Gs(n,e){return n.type===e.type&&n.key===e.key}const Ch=({key:n})=>n??null,ro=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?bt(n)||Lt(n)||Ye(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function me(n,e=null,t=null,i=0,s=null,r=n===xn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ch(e),ref:e&&ro(e),scopeId:nh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:sn};return a?(mc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=bt(t)?8:16),dr>0&&!o&&rn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&rn.push(l),l}const dn=pm;function pm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Bp)&&(n=Ri),Rh(n)){const a=Ls(n,e,!0);return t&&mc(a,t),dr>0&&!r&&rn&&(a.shapeFlag&6?rn[rn.indexOf(n)]=a:rn.push(a)),a.patchFlag=-2,a}if(Am(n)&&(n=n.__vccOpts),e){e=mm(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=ei(a)),vt(l)&&(cc(l)&&!qe(l)&&(l=It({},l)),e.style=tc(l))}const o=bt(n)?1:Ah(n)?128:Sp(n)?64:vt(n)?4:Ye(n)?2:0;return me(n,e,t,i,s,o,r,!0)}function mm(n){return n?cc(n)||xh(n)?It({},n):n:null}function Ls(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?gm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ch(c),ref:e&&e.ref?t&&r?qe(r)?r.concat(ro(e)):[r,ro(e)]:ro(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ls(n.ssContent),ssFallback:n.ssFallback&&Ls(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&fc(u,l.clone(u)),u}function yi(n=" ",e=0){return dn(Bo,null,n,e)}function Ai(n="",e=!1){return e?(_t(),zo(Ri,null,n)):dn(Ri,null,n)}function Pn(n){return n==null||typeof n=="boolean"?dn(Ri):qe(n)?dn(xn,null,n.slice()):Rh(n)?Si(n):dn(Bo,null,String(n))}function Si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ls(n)}function mc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),mc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!xh(e)?e._ctx=sn:s===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),i&64?(t=16,e=[yi(e)]):t=8);n.children=e,n.shapeFlag|=t}function gm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ei([e.class,i.class]));else if(s==="style")e.style=tc([e.style,i.style]);else if(Co(s)){const r=e[s],o=i[s];o&&r!==o&&!(qe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function wn(n,e,t,i=null){zn(n,e,7,[t,i])}const _m=ph();let xm=0;function vm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||_m,r={uid:xm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sh(i,s),emitsOptions:mh(i,s),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Kp.bind(null,r),n.ce&&n.ce(r),r}let Ot=null;const Sm=()=>Ot||sn;let So,Za;{const n=Io(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};So=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),Za=e("__VUE_SSR_SETTERS__",t=>pr=t)}const Mr=n=>{const e=Ot;return So(n),n.scope.on(),()=>{n.scope.off(),So(e)}},iu=()=>{Ot&&Ot.scope.off(),So(null)};function Ph(n){return n.vnode.shapeFlag&4}let pr=!1;function Mm(n,e=!1,t=!1){e&&Za(e);const{props:i,children:s}=n.vnode,r=Ph(n);nm(n,i,r,e),om(n,s,t||e);const o=r?ym(n,e):void 0;return e&&Za(!1),o}function ym(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Hp);const{setup:i}=t;if(i){ri();const s=n.setupContext=i.length>1?bm(n):null,r=Mr(n),o=vr(i,n,0,[n.props,s]),a=Cf(o);if(oi(),r(),(a||n.sp)&&!ar(n)&&lh(n),a){if(o.then(iu,iu),e)return o.then(l=>{su(n,l)}).catch(l=>{No(l,n,0)});n.asyncDep=o}else su(n,o)}else Dh(n)}function su(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=Kf(e)),Dh(n)}function Dh(n,e,t){const i=n.type;n.render||(n.render=i.render||Nn);{const s=Mr(n);ri();try{Gp(n)}finally{oi(),s()}}}const Em={get(n,e){return Ft(n,"get",""),n[e]}};function bm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Em),slots:n.slots,emit:n.emit,expose:e}}function Vo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Kf(ip(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in lr)return lr[t](n)},has(e,t){return t in e||t in lr}})):n.proxy}function Tm(n,e=!0){return Ye(n)?n.displayName||n.name:n.name||e&&n.__name}function Am(n){return Ye(n)&&"__vccOpts"in n}const Sn=(n,e)=>lp(n,e,pr),wm="3.5.27";let Ja;const ru=typeof window<"u"&&window.trustedTypes;if(ru)try{Ja=ru.createPolicy("vue",{createHTML:n=>n})}catch{}const Lh=Ja?n=>Ja.createHTML(n):n=>n,Rm="http://www.w3.org/2000/svg",Cm="http://www.w3.org/1998/Math/MathML",$n=typeof document<"u"?document:null,ou=$n&&$n.createElement("template"),Pm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?$n.createElementNS(Rm,n):e==="mathml"?$n.createElementNS(Cm,n):t?$n.createElement(n,{is:t}):$n.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>$n.createTextNode(n),createComment:n=>$n.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>$n.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{ou.innerHTML=Lh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ou.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Dm=Symbol("_vtc");function Lm(n,e,t){const i=n[Dm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const au=Symbol("_vod"),Im=Symbol("_vsh"),Um=Symbol(""),Nm=/(?:^|;)\s*display\s*:/;function Fm(n,e,t){const i=n.style,s=bt(t);let r=!1;if(t&&!s){if(e)if(bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&oo(i,a,"")}else for(const o in e)t[o]==null&&oo(i,o,"");for(const o in t)o==="display"&&(r=!0),oo(i,o,t[o])}else if(s){if(e!==t){const o=i[Um];o&&(t+=";"+o),i.cssText=t,r=Nm.test(t)}}else e&&n.removeAttribute("style");au in n&&(n[au]=r?i.display:"",n[Im]&&(i.display="none"))}const lu=/\s*!important$/;function oo(n,e,t){if(qe(t))t.forEach(i=>oo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Om(n,e);lu.test(t)?n.setProperty(Qi(i),t.replace(lu,""),"important"):n[i]=t}}const cu=["Webkit","Moz","ms"],sa={};function Om(n,e){const t=sa[e];if(t)return t;let i=pn(e);if(i!=="filter"&&i in n)return sa[e]=i;i=Lo(i);for(let s=0;s<cu.length;s++){const r=cu[s]+i;if(r in n)return sa[e]=r}return e}const uu="http://www.w3.org/1999/xlink";function fu(n,e,t,i,s,r=Nd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(uu,e.slice(6,e.length)):n.setAttributeNS(uu,e,t):t==null||r&&!If(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Pi(t)?String(t):t)}function hu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Lh(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=If(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function bs(n,e,t,i){n.addEventListener(e,t,i)}function Bm(n,e,t,i){n.removeEventListener(e,t,i)}const du=Symbol("_vei");function zm(n,e,t,i,s=null){const r=n[du]||(n[du]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Vm(e);if(i){const c=r[e]=km(i,s);bs(n,a,c,l)}else o&&(Bm(n,a,o,l),r[e]=void 0)}}const pu=/(?:Once|Passive|Capture)$/;function Vm(n){let e;if(pu.test(n)){e={};let i;for(;i=n.match(pu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Qi(n.slice(2)),e]}let ra=0;const Hm=Promise.resolve(),Gm=()=>ra||(Hm.then(()=>ra=0),ra=Date.now());function km(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;zn(Wm(i,t.value),e,5,[i])};return t.value=n,t.attached=Gm(),t}function Wm(n,e){if(qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const mu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Xm=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Lm(n,i,o):e==="style"?Fm(n,t,i):Co(e)?Zl(e)||zm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ym(n,e,i,o))?(hu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!bt(i))?hu(n,pn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),fu(n,e,i,o))};function Ym(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&mu(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mu(e)&&bt(t)?!1:e in n}const gu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return qe(e)?t=>no(e,t):e};function qm(n){n.target.composing=!0}function _u(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const oa=Symbol("_assign");function xu(n,e,t){return e&&(n=n.trim()),t&&(n=ec(n)),n}const jm={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[oa]=gu(s);const r=i||s.props&&s.props.type==="number";bs(n,e?"change":"input",o=>{o.target.composing||n[oa](xu(n.value,t,r))}),(t||r)&&bs(n,"change",()=>{n.value=xu(n.value,t,r)}),e||(bs(n,"compositionstart",qm),bs(n,"compositionend",_u),bs(n,"change",_u))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[oa]=gu(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ec(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},$m=It({patchProp:Xm},Pm);let vu;function Km(){return vu||(vu=lm($m))}const Zm=((...n)=>{const e=Km().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Qm(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Jm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Jm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Qm(n){return bt(n)?document.querySelector(n):n}function Ih(n=""){const e=Fn(n),t=Fn(null),i=Fn(null),s=Sn(()=>!t.value&&e.value.trim()!==""),r=Sn(()=>t.value!==null),o=Sn(()=>e.value.trim()!=="");function a(){try{if(!o.value){t.value=null,i.value=null;return}i.value=JSON.parse(e.value),t.value=null}catch(f){t.value=f.message,i.value=null}}function l(){try{if(!o.value)return;const f=JSON.parse(e.value);e.value=JSON.stringify(f,null,2),t.value=null,i.value=f}catch(f){t.value=f.message}}function c(){e.value="",t.value=null,i.value=null}function u(f){e.value=f}return Ki(e,a,{immediate:!0}),{jsonText:e,errorMessage:t,parsedData:i,isValid:s,hasError:r,hasContent:o,formatJson:l,clearJson:c,setJsonText:u}}const eg={class:"flex flex-col h-full"},tg={class:"flex items-center justify-between mb-4"},ng={class:"flex gap-2"},ig={key:0,class:"mt-2 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm"},sg={key:1,class:"mt-2 p-2 bg-green-100 border border-green-300 rounded text-green-700 text-sm"},rg=Sr({__name:"JsonInput",props:{modelValue:{}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,{jsonText:s,errorMessage:r,isValid:o,hasContent:a,formatJson:l,clearJson:c,setJsonText:u}=Ih(t.modelValue);Ki(s,p=>{i("update:modelValue",p)});function f(){setTimeout(()=>{try{if(s.value.trim()){const p=JSON.parse(s.value);s.value=JSON.stringify(p,null,2)}}catch{}},0)}function d(){u(JSON.stringify({name:"John Doe",age:30,email:"john@example.com",address:{street:"123 Main St",city:"New York",country:"USA"},hobbies:["reading","coding","gaming"],isActive:!0},null,2))}return(p,_)=>(_t(),yt("div",eg,[me("div",tg,[_[3]||(_[3]=me("h2",{class:"text-xl font-bold text-gray-800"},"JSON Input",-1)),me("div",ng,[me("button",{onClick:d,class:"px-4 py-2 text-sm font-medium bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"}," Load Sample "),me("button",{onClick:_[0]||(_[0]=(...x)=>Fe(l)&&Fe(l)(...x)),class:"px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"}," Format "),me("button",{onClick:_[1]||(_[1]=(...x)=>Fe(c)&&Fe(c)(...x)),class:"px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"}," Clear ")])]),mp(me("textarea",{"onUpdate:modelValue":_[2]||(_[2]=x=>Lt(s)?s.value=x:null),onPaste:f,placeholder:"Paste or type your JSON here...",class:ei(["flex-1 w-full p-4 font-mono text-sm border-2 rounded-lg focus:outline-none focus:border-blue-500 resize-none",Fe(r)?"border-red-500 bg-red-50":"border-gray-300"])},null,34),[[jm,Fe(s)]]),Fe(r)?(_t(),yt("div",ig,[_[4]||(_[4]=me("strong",null,"Error:",-1)),yi(" "+cn(Fe(r)),1)])):Fe(a)&&Fe(o)?(_t(),yt("div",sg," Valid JSON ")):Ai("",!0)]))}}),Su=100;function og(n,e=0,t=2){const i=Fn(e<t),s=Sn(()=>n===null?"null":Array.isArray(n)?"array":typeof n),r=Sn(()=>s.value==="object"||s.value==="array"),o=Sn(()=>s.value==="array"&&Array.isArray(n)?n.length:s.value==="object"&&typeof n=="object"&&n!==null?Object.keys(n).length:0),a=Sn(()=>s.value==="array"&&Array.isArray(n)?n.map((_,x)=>({key:x,value:_})):s.value==="object"&&typeof n=="object"&&n!==null?Object.entries(n).map(([_,x])=>({key:_,value:x})):[]);function l(){r.value&&(i.value=!i.value)}function c(_){return{string:"text-green-600",number:"text-blue-600",boolean:"text-purple-600",null:"text-gray-500",array:"text-gray-800",object:"text-gray-800"}[_]}function u(_){return typeof _=="string"?_.length>Su?`"${_.slice(0,Su)}…"`:`"${_}"`:_===null?"null":String(_)}function f(){i.value=!0}function d(){i.value=!1}function p(_,x){return _==="array"?`Array[${x}]`:_==="object"?`Object{${x}}`:""}return{isExpanded:i,dataType:s,isExpandable:r,itemCount:o,entries:a,toggleExpand:l,getValueColor:c,formatValue:u,getTypeLabel:p,expandAll:f,collapseAll:d}}const ag={class:"json-node"},lg={key:0,class:"flex-shrink-0 w-4 h-4 mt-0.5 select-none text-gray-400 hover:text-gray-600"},cg={key:1,class:"flex-shrink-0 w-4 h-4 mt-0.5 flex items-center justify-center"},ug={key:2,class:"font-medium text-blue-800 flex-shrink-0"},fg={key:3,class:"text-gray-500 font-mono text-sm"},hg={class:"text-gray-400"},dg={class:"text-orange-600"},pg={class:"text-gray-400"},mg={key:0,class:"text-gray-400 ml-1"},gg={key:0,class:"ml-4 pl-3 border-l-2 border-blue-200 hover:border-blue-300 transition-colors"},_g=Sr({__name:"JsonNode",props:{data:{type:[String,Number,Boolean,null,Object]},name:{},isRoot:{type:Boolean,default:!1},depth:{default:0},initialExpandDepth:{default:2}},setup(n){const e=n,{isExpanded:t,dataType:i,isExpandable:s,itemCount:r,entries:o,toggleExpand:a,getValueColor:l,formatValue:c}=og(e.data,e.depth,e.initialExpandDepth);return(u,f)=>{const d=Op("JsonNode",!0);return _t(),yt("div",ag,[me("div",{class:ei(["flex items-start gap-2 py-0.5 hover:bg-blue-50 rounded px-2 -mx-2 transition-colors",{"cursor-pointer":Fe(s)}]),onClick:f[0]||(f[0]=(...p)=>Fe(a)&&Fe(a)(...p))},[Fe(s)?(_t(),yt("span",lg,[(_t(),yt("svg",{class:ei(["transition-transform duration-150",{"rotate-90":Fe(t)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...f[1]||(f[1]=[me("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1)])],2))])):(_t(),yt("span",cg,[me("span",{class:ei(["w-1.5 h-1.5 rounded-full",Fe(i)==="null"?"bg-gray-400":"bg-current "+Fe(l)(Fe(i))])},null,2)])),n.isRoot?Ai("",!0):(_t(),yt("span",ug,[yi(cn(n.name),1),f[2]||(f[2]=me("span",{class:"text-gray-400"},":",-1))])),Fe(s)?(_t(),yt("span",fg,[me("span",hg,cn(Fe(i)==="array"?"[":"{"),1),me("span",dg,cn(Fe(r)),1),me("span",pg,cn(Fe(i)==="array"?"]":"}"),1),Fe(t)?Ai("",!0):(_t(),yt("span",mg,"..."))])):(_t(),yt("span",{key:4,class:ei([Fe(l)(Fe(i)),"font-mono text-sm break-words max-w-md"])},cn(Fe(c)(n.data)),3))],2),Fe(s)&&Fe(t)?(_t(),yt("div",gg,[(_t(!0),yt(xn,null,Vp(Fe(o),p=>(_t(),zo(d,{key:p.key,data:p.value,name:String(p.key),depth:n.depth+1,initialExpandDepth:n.initialExpandDepth},null,8,["data","name","depth","initialExpandDepth"]))),128))])):Ai("",!0)])}}}),Uh=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},xg=Uh(_g,[["__scopeId","data-v-09e00554"]]);function vg(n){return n===null?"null":Array.isArray(n)?"array":typeof n=="object"?"object":typeof n=="string"?"string":typeof n=="number"?"number":typeof n=="boolean"?"boolean":"null"}function Sg(n,e){if(e==="object")return`{${Object.keys(n).length}}`;if(e==="array")return`[${n.length}]`;if(e==="string"){const t=n;return t.length>20?`"${t.slice(0,20)}..."`:`"${t}"`}return e==="null"?"null":String(n)}let Nh=0;function Fh(n,e,t){const i=vg(n),r={id:`node-${Nh++}`,name:e,value:Sg(n,i),type:i,children:[],isExpanded:t<2,depth:t};if(i==="object"||i==="array"){const o=i==="array"?n.map((a,l)=>({key:String(l),value:a})):Object.entries(n).map(([a,l])=>({key:a,value:l}));r.children=o.map(a=>Fh(a.value,a.key,t+1))}return r}function Mg(n){return Nh=0,Fh(n,"root",0)}const gc="182",ni={ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yg=0,Mu=1,Eg=2,ao=1,bg=2,er=3,Ci=0,Zt=1,Qn=2,ii=0,Cs=1,yu=2,Eu=3,bu=4,Tg=5,ki=100,Ag=101,wg=102,Rg=103,Cg=104,Pg=200,Dg=201,Lg=202,Ig=203,Qa=204,el=205,Ug=206,Ng=207,Fg=208,Og=209,Bg=210,zg=211,Vg=212,Hg=213,Gg=214,tl=0,nl=1,il=2,Is=3,sl=4,rl=5,ol=6,al=7,Oh=0,kg=1,Wg=2,On=0,Bh=1,zh=2,Vh=3,Hh=4,Gh=5,kh=6,Wh=7,Xh=300,Zi=301,Us=302,ll=303,cl=304,Ho=306,ul=1e3,ti=1001,fl=1002,Dt=1003,Xg=1004,Pr=1005,Pt=1006,aa=1007,Xi=1008,un=1009,Yh=1010,qh=1011,mr=1012,_c=1013,Vn=1014,In=1015,li=1016,xc=1017,vc=1018,gr=1020,jh=35902,$h=35899,Kh=1021,Zh=1022,Mn=1023,ci=1026,Yi=1027,Jh=1028,Sc=1029,Ns=1030,Mc=1031,yc=1033,lo=33776,co=33777,uo=33778,fo=33779,hl=35840,dl=35841,pl=35842,ml=35843,gl=36196,_l=37492,xl=37496,vl=37488,Sl=37489,Ml=37490,yl=37491,El=37808,bl=37809,Tl=37810,Al=37811,wl=37812,Rl=37813,Cl=37814,Pl=37815,Dl=37816,Ll=37817,Il=37818,Ul=37819,Nl=37820,Fl=37821,Ol=36492,Bl=36494,zl=36495,Vl=36283,Hl=36284,Gl=36285,kl=36286,Yg=3200,qg=0,jg=1,Mi="",ln="srgb",Fs="srgb-linear",Mo="linear",at="srgb",is=7680,Tu=519,$g=512,Kg=513,Zg=514,Ec=515,Jg=516,Qg=517,bc=518,e_=519,Wl=35044,Au="300 es",Un=2e3,yo=2001;function Qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function t_(){const n=Eo("canvas");return n.style.display="block",n}const wu={};function bo(...n){const e="THREE."+n.shift();console.log(e,...n)}function ke(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Qe(...n){const e="THREE."+n.shift();console.error(e,...n)}function _r(...n){const e=n.join(" ");e in wu||(wu[e]=!0,ke(...n))}function n_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ho=Math.PI/180,Xl=180/Math.PI;function wi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function i_(n,e){return(n%e+e)%e}function la(n,e,t){return(1-t)*n+t*e}function Ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const s_={DEG2RAD:ho};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ji{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==d||c!==p||u!==_){let m=l*d+c*p+u*_+f*x;m<0&&(d=-d,p=-p,_=-_,x=-x,m=-m);let h=1-a;if(m<.9995){const T=Math.acos(m),w=Math.sin(T);h=Math.sin(h*T)/w,a=Math.sin(a*T)/w,l=l*h+d*a,c=c*h+p*a,u=u*h+_*a,f=f*h+x*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+_*a,f=f*h+x*a;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*f+l*p-c*d,e[t+1]=l*_+u*d+c*f-a*p,e[t+2]=c*_+u*p+a*d-l*f,e[t+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new N,Ru=new Ji;class $e{constructor(e,t,i,s,r,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=s[0],m=s[3],h=s[6],T=s[1],w=s[4],b=s[7],R=s[2],D=s[5],L=s[8];return r[0]=o*x+a*T+l*R,r[3]=o*m+a*w+l*D,r[6]=o*h+a*b+l*L,r[1]=c*x+u*T+f*R,r[4]=c*m+u*w+f*D,r[7]=c*h+u*b+f*L,r[2]=d*x+p*T+_*R,r[5]=d*m+p*w+_*D,r[8]=d*h+p*b+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,_=t*f+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new $e,Cu=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r_(){const n={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Mo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fs]:{primaries:e,whitePoint:i,transfer:Mo,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}const tt=r_();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ss;class o_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=Eo("canvas")),ss.width=e.width,ss.height=e.height;const s=ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a_=0;class Tc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fa(s[o].image)):r.push(fa(s[o]))}else r=fa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?o_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let l_=0;const ha=new N;class Bt extends es{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=ti,s=ti,r=Pt,o=Xi,a=Mn,l=un,c=Bt.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=wi(),this.name="",this.source=new Tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ha).x}get height(){return this.source.getSize(ha).y}get depth(){return this.source.getSize(ha).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ul:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ul:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Xh;Bt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(p+1)/2,R=(h+1)/2,D=(u+d)/4,L=(f+x)/4,V=(_+m)/4;return w>b&&w>R?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=D/i,r=L/i):b>R?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=D/s,r=V/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=L/r,s=V/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(f-x)/T,this.z=(d-u)/T,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c_ extends es{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Bt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Tc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends c_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ed extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u_ extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Lr.subVectors(this.max,ks),rs.subVectors(e.a,ks),os.subVectors(e.b,ks),as.subVectors(e.c,ks),hi.subVectors(os,rs),di.subVectors(as,os),Ni.subVectors(rs,as);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Ni.z,Ni.y,hi.z,0,-hi.x,di.z,0,-di.x,Ni.z,0,-Ni.x,-hi.y,hi.x,0,-di.y,di.x,0,-Ni.y,Ni.x,0];return!da(t,rs,os,as,Lr)||(t=[1,0,0,0,1,0,0,0,1],!da(t,rs,os,as,Lr))?!1:(Ir.crossVectors(hi,di),t=[Ir.x,Ir.y,Ir.z],da(t,rs,os,as,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wn=[new N,new N,new N,new N,new N,new N,new N,new N],mn=new N,Dr=new yr,rs=new N,os=new N,as=new N,hi=new N,di=new N,Ni=new N,ks=new N,Lr=new N,Ir=new N,Fi=new N;function da(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Fi.fromArray(n,r);const a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),u=i.dot(Fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const f_=new yr,Ws=new N,pa=new N;class Go{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):f_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(pa)),this.expandByPoint(Ws.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xn=new N,ma=new N,Ur=new N,pi=new N,ga=new N,Nr=new N,_a=new N;class ko{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ma.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(ma);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=pi.dot(this.direction),l=-pi.dot(Ur),c=pi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ma).addScaledVector(Ur,d),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),s=Xn.dot(Xn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,s,r){ga.subVectors(t,e),Nr.subVectors(i,e),_a.crossVectors(ga,Nr);let o=this.direction.dot(_a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(Nr.crossVectors(pi,Nr));if(l<0)return null;const c=a*this.direction.dot(ga.cross(pi));if(c<0||l+c>o)return null;const u=-a*pi.dot(_a);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,s,r,o,a,l,c,u,f,d,p,_,x,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,p,_,x,m)}set(e,t,i,s,r,o,a,l,c,u,f,d,p,_,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,x=c*f;t[0]=d+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,x=c*f;t[0]=d-x*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-d*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+x,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h_,e,d_)}lookAt(e,t,i){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),mi.crossVectors(i,tn),mi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),mi.crossVectors(i,tn)),mi.normalize(),Fr.crossVectors(tn,mi),s[0]=mi.x,s[4]=Fr.x,s[8]=tn.x,s[1]=mi.y,s[5]=Fr.y,s[9]=tn.y,s[2]=mi.z,s[6]=Fr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],T=i[3],w=i[7],b=i[11],R=i[15],D=s[0],L=s[4],V=s[8],S=s[12],y=s[1],I=s[5],K=s[9],Y=s[13],se=s[2],ie=s[6],j=s[10],z=s[14],te=s[3],xe=s[7],ge=s[11],Me=s[15];return r[0]=o*D+a*y+l*se+c*te,r[4]=o*L+a*I+l*ie+c*xe,r[8]=o*V+a*K+l*j+c*ge,r[12]=o*S+a*Y+l*z+c*Me,r[1]=u*D+f*y+d*se+p*te,r[5]=u*L+f*I+d*ie+p*xe,r[9]=u*V+f*K+d*j+p*ge,r[13]=u*S+f*Y+d*z+p*Me,r[2]=_*D+x*y+m*se+h*te,r[6]=_*L+x*I+m*ie+h*xe,r[10]=_*V+x*K+m*j+h*ge,r[14]=_*S+x*Y+m*z+h*Me,r[3]=T*D+w*y+b*se+R*te,r[7]=T*L+w*I+b*ie+R*xe,r[11]=T*V+w*K+b*j+R*ge,r[15]=T*S+w*Y+b*z+R*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],h=e[15],T=l*p-c*d,w=a*p-c*f,b=a*d-l*f,R=o*p-c*u,D=o*d-l*u,L=o*f-a*u;return t*(x*T-m*w+h*b)-i*(_*T-m*R+h*D)+s*(_*w-x*R+h*L)-r*(_*b-x*D+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],h=e[15],T=f*m*c-x*d*c+x*l*p-a*m*p-f*l*h+a*d*h,w=_*d*c-u*m*c-_*l*p+o*m*p+u*l*h-o*d*h,b=u*x*c-_*f*c+_*a*p-o*x*p-u*a*h+o*f*h,R=_*f*l-u*x*l-_*a*d+o*x*d+u*a*m-o*f*m,D=t*T+i*w+s*b+r*R;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=T*L,e[1]=(x*d*r-f*m*r-x*s*p+i*m*p+f*s*h-i*d*h)*L,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*h+i*l*h)*L,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*p-i*l*p)*L,e[4]=w*L,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*h+t*d*h)*L,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*h-t*l*h)*L,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*L,e[8]=b*L,e[9]=(_*f*r-u*x*r-_*i*p+t*x*p+u*i*h-t*f*h)*L,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*h+t*a*h)*L,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*p-t*a*p)*L,e[12]=R*L,e[13]=(u*x*s-_*f*s+_*i*d-t*x*d-u*i*m+t*f*m)*L,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*m-t*a*m)*L,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,_=r*f,x=o*u,m=o*f,h=a*f,T=l*c,w=l*u,b=l*f,R=i.x,D=i.y,L=i.z;return s[0]=(1-(x+h))*R,s[1]=(p+b)*R,s[2]=(_-w)*R,s[3]=0,s[4]=(p-b)*D,s[5]=(1-(d+h))*D,s[6]=(m+T)*D,s[7]=0,s[8]=(_+w)*L,s[9]=(m-T)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=ls.set(s[0],s[1],s[2]).length();const o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),gn.copy(this);const c=1/r,u=1/o,f=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,t.setFromRotationMatrix(gn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Un,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let _,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===Un)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===yo)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Un,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s);let _,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===Un)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===yo)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ls=new N,gn=new xt,h_=new N(0,0,0),d_=new N(1,1,1),mi=new N,Fr=new N,tn=new N,Du=new xt,Lu=new Ji;class ui{constructor(e=0,t=0,i=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Du,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p_=0;const Iu=new N,cs=new Ji,Yn=new xt,Or=new N,Xs=new N,m_=new N,g_=new Ji,Uu=new N(1,0,0),Nu=new N(0,1,0),Fu=new N(0,0,1),Ou={type:"added"},__={type:"removed"},us={type:"childadded",child:null},xa={type:"childremoved",child:null};class Yt extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new N,t=new ui,i=new Ji,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new $e}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Uu,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uu,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Xs,Or,this.up):Yn.lookAt(Or,Xs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Yn),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ou),us.child=e,this.dispatchEvent(us),us.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(__),xa.child=e,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ou),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,m_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,g_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new N(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new N,qn=new N,va=new N,jn=new N,fs=new N,hs=new N,Bu=new N,Sa=new N,Ma=new N,ya=new N,Ea=new Et,ba=new Et,Ta=new Et;class fn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_n.subVectors(s,t),qn.subVectors(i,t),va.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(qn),l=_n.dot(va),c=qn.dot(qn),u=qn.dot(va),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ea.setScalar(0),ba.setScalar(0),Ta.setScalar(0),Ea.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,i),Ta.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ea,r.x),o.addScaledVector(ba,r.y),o.addScaledVector(Ta,r.z),o}static isFrontFacing(e,t,i,s){return _n.subVectors(i,t),qn.subVectors(e,t),_n.cross(qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),_n.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;fs.subVectors(s,i),hs.subVectors(r,i),Sa.subVectors(e,i);const l=fs.dot(Sa),c=hs.dot(Sa);if(l<=0&&c<=0)return t.copy(i);Ma.subVectors(e,s);const u=fs.dot(Ma),f=hs.dot(Ma);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(fs,o);ya.subVectors(e,r);const p=fs.dot(ya),_=hs.dot(ya);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(hs,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Bu.subVectors(r,s),a=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(Bu,a);const h=1/(m+x+d);return o=x*h,a=d*h,t.copy(i).addScaledVector(fs,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Aa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=i_(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Aa(o,r,e+1/3),this.g=Aa(o,r,e),this.b=Aa(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=td[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return tt.workingToColorSpace(Nt.copy(this),e),Math.round(Ze(Nt.r*255,0,255))*65536+Math.round(Ze(Nt.g*255,0,255))*256+Math.round(Ze(Nt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,s=Nt.g,r=Nt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=ln){tt.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,s=Nt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Br);const i=la(gi.h,Br.h,t),s=la(gi.s,Br.s,t),r=la(gi.l,Br.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new et;et.NAMES=td;let x_=0;class Bs extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Cs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=el,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qa&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class To extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new N,zr=new He;let v_=0;class En{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ln(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}}class nd extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class id extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}}let S_=0;const an=new xt,wa=new Yt,ds=new N,nn=new yr,Ys=new yr,Ct=new N;class Jt extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?id:nd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(nn.min,Ys.min),nn.expandByPoint(Ct),Ct.addVectors(nn.max,Ys.max),nn.expandByPoint(Ct)):(nn.expandByPoint(Ys.min),nn.expandByPoint(Ys.max))}nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),Ct.add(ds)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<i.count;V++)a[V]=new N,l[V]=new N;const c=new N,u=new N,f=new N,d=new He,p=new He,_=new He,x=new N,m=new N;function h(V,S,y){c.fromBufferAttribute(i,V),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,y),d.fromBufferAttribute(r,V),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,y),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),a[V].add(x),a[S].add(x),a[y].add(x),l[V].add(m),l[S].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let V=0,S=T.length;V<S;++V){const y=T[V],I=y.start,K=y.count;for(let Y=I,se=I+K;Y<se;Y+=3)h(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const w=new N,b=new N,R=new N,D=new N;function L(V){R.fromBufferAttribute(s,V),D.copy(R);const S=a[V];w.copy(S),w.sub(R.multiplyScalar(R.dot(S))).normalize(),b.crossVectors(D,S);const I=b.dot(l[V])<0?-1:1;o.setXYZW(V,w.x,w.y,w.z,I)}for(let V=0,S=T.length;V<S;++V){const y=T[V],I=y.start,K=y.count;for(let Y=I,se=I+K;Y<se;Y+=3)L(e.getX(Y+0)),L(e.getX(Y+1)),L(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new En(d,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zu=new xt,Oi=new ko,Vr=new Go,Vu=new N,Hr=new N,Gr=new N,kr=new N,Ra=new N,Wr=new N,Hu=new N,Xr=new N;class Tn extends Yt{constructor(e=new Jt,t=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Ra.fromBufferAttribute(f,e),o?Wr.addScaledVector(Ra,u):Wr.addScaledVector(Ra.sub(t),u))}t.add(Wr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(Vr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Vr,Vu)===null||Oi.origin.distanceToSquared(Vu)>(e.far-e.near)**2))&&(zu.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(zu),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=o[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,R=w;b<R;b+=3){const D=a.getX(b),L=a.getX(b+1),V=a.getX(b+2);s=Yr(this,h,e,i,c,u,f,D,L,V),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const T=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);s=Yr(this,o,e,i,c,u,f,T,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=o[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,R=w;b<R;b+=3){const D=b,L=b+1,V=b+2;s=Yr(this,h,e,i,c,u,f,D,L,V),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const T=m,w=m+1,b=m+2;s=Yr(this,o,e,i,c,u,f,T,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function M_(n,e,t,i,s,r,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ci,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:n}}function Yr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Hr),n.getVertexPosition(l,Gr),n.getVertexPosition(c,kr);const u=M_(n,e,t,i,Hr,Gr,kr,Hu);if(u){const f=new N;fn.getBarycoord(Hu,Hr,Gr,kr,f),s&&(u.uv=fn.getInterpolatedAttribute(s,a,l,c,f,new He)),r&&(u.uv1=fn.getInterpolatedAttribute(r,a,l,c,f,new He)),o&&(u.normal=fn.getInterpolatedAttribute(o,a,l,c,f,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};fn.getNormal(Hr,Gr,kr,d.normal),u.face=d,u.barycoord=f}return u}class Er extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function _(x,m,h,T,w,b,R,D,L,V,S){const y=b/L,I=R/V,K=b/2,Y=R/2,se=D/2,ie=L+1,j=V+1;let z=0,te=0;const xe=new N;for(let ge=0;ge<j;ge++){const Me=ge*I-Y;for(let ze=0;ze<ie;ze++){const We=ze*y-K;xe[x]=We*T,xe[m]=Me*w,xe[h]=se,c.push(xe.x,xe.y,xe.z),xe[x]=0,xe[m]=0,xe[h]=D>0?1:-1,u.push(xe.x,xe.y,xe.z),f.push(ze/L),f.push(1-ge/V),z+=1}}for(let ge=0;ge<V;ge++)for(let Me=0;Me<L;Me++){const ze=d+Me+ie*ge,We=d+Me+ie*(ge+1),ft=d+(Me+1)+ie*(ge+1),ve=d+(Me+1)+ie*ge;l.push(ze,We,ve),l.push(We,ft,ve),te+=6}a.addGroup(p,te,S),p+=te,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=Os(n[t]);for(const s in i)e[s]=i[s]}return e}function y_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const E_={clone:Os,merge:kt};var b_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rd extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new N,Gu=new He,ku=new He;class vn extends rd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,Gu,ku),t.subVectors(ku,Gu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ho*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class A_ extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(ps,ms,e,t);s.layers=this.layers,this.add(s);const r=new vn(ps,ms,e,t);r.layers=this.layers,this.add(r);const o=new vn(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new vn(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new vn(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new vn(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class od extends Bt{constructor(e=[],t=Zi,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ad extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new od(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Er(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:ii});r.uniforms.tEquirect.value=t;const o=new Tn(s,r),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Pt),new A_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class qi extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w_={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class R_ extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class C_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new N;class Ao{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ln(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ao(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yl extends Bs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gs;const qs=new N,_s=new N,xs=new N,vs=new He,js=new He,ld=new xt,qr=new N,$s=new N,jr=new N,Wu=new He,Pa=new He,Xu=new He;class Yu extends Yt{constructor(e=new Yl){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new C_(t,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new Ao(i,3,0,!1)),gs.setAttribute("uv",new Ao(i,2,3,!1))}this.geometry=gs,this.material=e,this.center=new He(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),ld.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-xs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;$r(qr.set(-.5,-.5,0),xs,o,_s,s,r),$r($s.set(.5,-.5,0),xs,o,_s,s,r),$r(jr.set(.5,.5,0),xs,o,_s,s,r),Wu.set(0,0),Pa.set(1,0),Xu.set(1,1);let a=e.ray.intersectTriangle(qr,$s,jr,!1,qs);if(a===null&&($r($s.set(-.5,.5,0),xs,o,_s,s,r),Pa.set(0,1),a=e.ray.intersectTriangle(qr,jr,$s,!1,qs),a===null))return;const l=e.ray.origin.distanceTo(qs);l<e.near||l>e.far||t.push({distance:l,point:qs.clone(),uv:fn.getInterpolation(qs,qr,$s,jr,Wu,Pa,Xu,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function $r(n,e,t,i,s,r){vs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(js.x=r*vs.x-s*vs.y,js.y=s*vs.x+r*vs.y):js.copy(vs),n.copy(e),n.x+=js.x,n.y+=js.y,n.applyMatrix4(ld)}class P_ extends Bt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Dt,u=Dt,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Da=new N,D_=new N,L_=new $e;class Kn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Da.subVectors(i,t).cross(D_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Da),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||L_.getNormalMatrix(e),s=this.coplanarPoint(Da).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Go,I_=new He(.5,.5),Kr=new N;class cd{constructor(e=new Kn,t=new Kn,i=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],p=r[7],_=r[8],x=r[9],m=r[10],h=r[11],T=r[12],w=r[13],b=r[14],R=r[15];if(s[0].setComponents(c-o,p-u,h-_,R-T).normalize(),s[1].setComponents(c+o,p+u,h+_,R+T).normalize(),s[2].setComponents(c+a,p+f,h+x,R+w).normalize(),s[3].setComponents(c-a,p-f,h-x,R-w).normalize(),i)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,p-d,h-m,R-b).normalize();else if(s[4].setComponents(c-l,p-d,h-m,R-b).normalize(),t===Un)s[5].setComponents(c+l,p+d,h+m,R+b).normalize();else if(t===yo)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const t=I_.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Kr.x=s.normal.x>0?e.max.x:e.min.x,Kr.y=s.normal.y>0?e.max.y:e.min.y,Kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ud extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wo=new N,Ro=new N,qu=new xt,Ks=new ko,Zr=new Go,La=new N,ju=new N;class $u extends Yt{constructor(e=new Jt,t=new ud){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)wo.fromBufferAttribute(t,s-1),Ro.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=wo.distanceTo(Ro);e.setAttribute("lineDistance",new zt(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;qu.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(qu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const h=u.getX(x),T=u.getX(x+1),w=Jr(this,e,Ks,l,h,T,x);w&&t.push(w)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),h=Jr(this,e,Ks,l,x,m,_-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const h=Jr(this,e,Ks,l,x,x+1,x);h&&t.push(h)}if(this.isLineLoop){const x=Jr(this,e,Ks,l,_-1,p,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(wo.fromBufferAttribute(a,s),Ro.fromBufferAttribute(a,r),t.distanceSqToSegment(wo,Ro,La,ju)>i)return;La.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(La);if(!(c<e.near||c>e.far))return{distance:c,point:ju.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Ku extends Bt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xr extends Bt{constructor(e,t,i=Vn,s,r,o,a=Dt,l=Dt,c,u=ci,f=1){if(u!==ci&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class U_ extends xr{constructor(e,t=Vn,i=Zi,s,r,o=Dt,a=Dt,l,c=ci){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fd extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wc extends Jt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new N,u=new He;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const p=i+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class N_{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new He:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new N,s=[],r=[],o=[],a=new N,l=new xt;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ze(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ze(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function F_(n,e){const t=1-n;return t*t*t*e}function O_(n,e){const t=1-n;return 3*t*t*n*e}function B_(n,e){return 3*(1-n)*n*n*e}function z_(n,e){return n*n*n*e}function Ia(n,e,t,i,s){return F_(n,e)+O_(n,t)+B_(n,i)+z_(n,s)}class V_ extends N_{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ia(e,s.x,r.x,o.x,a.x),Ia(e,s.y,r.y,o.y,a.y),Ia(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wo extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,p=[],_=[],x=[],m=[];for(let h=0;h<u;h++){const T=h*d-o;for(let w=0;w<c;w++){const b=w*f-r;_.push(b,-T,0),x.push(0,0,1),m.push(w/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<a;T++){const w=T+c*h,b=T+c*(h+1),R=T+1+c*(h+1),D=T+1+c*h;p.push(w,b,D),p.push(b,R,D)}this.setIndex(p),this.setAttribute("position",new zt(_,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rc extends Jt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let f=e;const d=(t-e)/s,p=new N,_=new He;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const h=r+m/i*o;p.x=f*Math.cos(h),p.y=f*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}f+=d}for(let x=0;x<s;x++){const m=x*(i+1);for(let h=0;h<i;h++){const T=h+m,w=T,b=T+i+1,R=T+i+2,D=T+1;a.push(w,b,D),a.push(b,R,D)}}this.setIndex(a),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class H_ extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class G_ extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k_ extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cc extends rd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class W_ extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zu=new xt;class X_{constructor(e,t,i=0,s=1/0){this.ray=new ko(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ac,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zu),this}intersectObject(e,t=!0,i=[]){return ql(e,this,i,t),i.sort(Ju),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ql(e[s],this,i,t);return i.sort(Ju),i}}function Ju(n,e){return n.distance-e.distance}function ql(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ql(r[o],e,t,!0)}}class Qu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Y_ extends es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ke("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ef(n,e,t,i){const s=q_(i);switch(t){case Kh:return n*e;case Jh:return n*e/s.components*s.byteLength;case Sc:return n*e/s.components*s.byteLength;case Ns:return n*e*2/s.components*s.byteLength;case Mc:return n*e*2/s.components*s.byteLength;case Zh:return n*e*3/s.components*s.byteLength;case Mn:return n*e*4/s.components*s.byteLength;case yc:return n*e*4/s.components*s.byteLength;case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:case ml:return Math.max(n,16)*Math.max(e,8)/4;case hl:case pl:return Math.max(n,8)*Math.max(e,8)/2;case gl:case _l:case vl:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xl:case Ml:case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ol:case Bl:case zl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vl:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gl:case kl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function q_(n){switch(n){case un:case Yh:return{byteLength:1,components:1};case mr:case qh:case li:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Vn:case _c:case In:return{byteLength:4,components:1};case jh:case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);function hd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function j_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var $_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,x0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T0="gl_FragColor = linearToOutputTexel( gl_FragColor );",A0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,H0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,G0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,q0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_x=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ex=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_v=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Av=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:$_,alphahash_pars_fragment:K_,alphamap_fragment:Z_,alphamap_pars_fragment:J_,alphatest_fragment:Q_,alphatest_pars_fragment:e0,aomap_fragment:t0,aomap_pars_fragment:n0,batching_pars_vertex:i0,batching_vertex:s0,begin_vertex:r0,beginnormal_vertex:o0,bsdfs:a0,iridescence_fragment:l0,bumpmap_pars_fragment:c0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:d0,color_fragment:p0,color_pars_fragment:m0,color_pars_vertex:g0,color_vertex:_0,common:x0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:S0,displacementmap_pars_vertex:M0,displacementmap_vertex:y0,emissivemap_fragment:E0,emissivemap_pars_fragment:b0,colorspace_fragment:T0,colorspace_pars_fragment:A0,envmap_fragment:w0,envmap_common_pars_fragment:R0,envmap_pars_fragment:C0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:H0,envmap_vertex:D0,fog_vertex:L0,fog_pars_vertex:I0,fog_fragment:U0,fog_pars_fragment:N0,gradientmap_pars_fragment:F0,lightmap_pars_fragment:O0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:z0,lights_pars_begin:V0,lights_toon_fragment:G0,lights_toon_pars_fragment:k0,lights_phong_fragment:W0,lights_phong_pars_fragment:X0,lights_physical_fragment:Y0,lights_physical_pars_fragment:q0,lights_fragment_begin:j0,lights_fragment_maps:$0,lights_fragment_end:K0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:ex,map_fragment:tx,map_pars_fragment:nx,map_particle_fragment:ix,map_particle_pars_fragment:sx,metalnessmap_fragment:rx,metalnessmap_pars_fragment:ox,morphinstance_vertex:ax,morphcolor_vertex:lx,morphnormal_vertex:cx,morphtarget_pars_vertex:ux,morphtarget_vertex:fx,normal_fragment_begin:hx,normal_fragment_maps:dx,normal_pars_fragment:px,normal_pars_vertex:mx,normal_vertex:gx,normalmap_pars_fragment:_x,clearcoat_normal_fragment_begin:xx,clearcoat_normal_fragment_maps:vx,clearcoat_pars_fragment:Sx,iridescence_pars_fragment:Mx,opaque_fragment:yx,packing:Ex,premultiplied_alpha_fragment:bx,project_vertex:Tx,dithering_fragment:Ax,dithering_pars_fragment:wx,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Dx,shadowmap_vertex:Lx,shadowmask_pars_fragment:Ix,skinbase_vertex:Ux,skinning_pars_vertex:Nx,skinning_vertex:Fx,skinnormal_vertex:Ox,specularmap_fragment:Bx,specularmap_pars_fragment:zx,tonemapping_fragment:Vx,tonemapping_pars_fragment:Hx,transmission_fragment:Gx,transmission_pars_fragment:kx,uv_pars_fragment:Wx,uv_pars_vertex:Xx,uv_vertex:Yx,worldpos_vertex:qx,background_vert:jx,background_frag:$x,backgroundCube_vert:Kx,backgroundCube_frag:Zx,cube_vert:Jx,cube_frag:Qx,depth_vert:ev,depth_frag:tv,distance_vert:nv,distance_frag:iv,equirect_vert:sv,equirect_frag:rv,linedashed_vert:ov,linedashed_frag:av,meshbasic_vert:lv,meshbasic_frag:cv,meshlambert_vert:uv,meshlambert_frag:fv,meshmatcap_vert:hv,meshmatcap_frag:dv,meshnormal_vert:pv,meshnormal_frag:mv,meshphong_vert:gv,meshphong_frag:_v,meshphysical_vert:xv,meshphysical_frag:vv,meshtoon_vert:Sv,meshtoon_frag:Mv,points_vert:yv,points_frag:Ev,shadow_vert:bv,shadow_frag:Tv,sprite_vert:Av,sprite_frag:wv},Te={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Dn={basic:{uniforms:kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:kt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:kt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new et(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:kt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:kt([Te.points,Te.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:kt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:kt([Te.common,Te.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:kt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:kt([Te.sprite,Te.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:kt([Te.common,Te.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:kt([Te.lights,Te.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Dn.physical={uniforms:kt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Qr={r:0,b:0,g:0},zi=new ui,Rv=new xt;function Cv(n,e,t,i,s,r,o){const a=new et(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function _(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function x(w){let b=!1;const R=_(w);R===null?h(a,l):R&&R.isColor&&(h(R,1),b=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,b){const R=_(b);R&&(R.isCubeTexture||R.mapping===Ho)?(u===void 0&&(u=new Tn(new Er(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Os(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,L,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zi.copy(b.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(zi)),u.material.toneMapped=tt.getTransfer(R.colorSpace)!==at,(f!==R||d!==R.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,d=R.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Tn(new Wo(2,2),new Hn({name:"BackgroundMaterial",uniforms:Os(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=tt.getTransfer(R.colorSpace)!==at,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=R,d=R.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function h(w,b){w.getRGB(Qr,sd(n)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,b,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),l=b,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,h(a,l)},render:x,addToRenderList:m,dispose:T}}function Pv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,I,K,Y,se){let ie=!1;const j=f(Y,K,I);r!==j&&(r=j,c(r.object)),ie=p(y,Y,K,se),ie&&_(y,Y,K,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,b(y,I,K,Y),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,I,K){const Y=K.wireframe===!0;let se=i[y.id];se===void 0&&(se={},i[y.id]=se);let ie=se[I.id];ie===void 0&&(ie={},se[I.id]=ie);let j=ie[Y];return j===void 0&&(j=d(l()),ie[Y]=j),j}function d(y){const I=[],K=[],Y=[];for(let se=0;se<t;se++)I[se]=0,K[se]=0,Y[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:K,attributeDivisors:Y,object:y,attributes:{},index:null}}function p(y,I,K,Y){const se=r.attributes,ie=I.attributes;let j=0;const z=K.getAttributes();for(const te in z)if(z[te].location>=0){const ge=se[te];let Me=ie[te];if(Me===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor)),ge===void 0||ge.attribute!==Me||Me&&ge.data!==Me.data)return!0;j++}return r.attributesNum!==j||r.index!==Y}function _(y,I,K,Y){const se={},ie=I.attributes;let j=0;const z=K.getAttributes();for(const te in z)if(z[te].location>=0){let ge=ie[te];ge===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor));const Me={};Me.attribute=ge,ge&&ge.data&&(Me.data=ge.data),se[te]=Me,j++}r.attributes=se,r.attributesNum=j,r.index=Y}function x(){const y=r.newAttributes;for(let I=0,K=y.length;I<K;I++)y[I]=0}function m(y){h(y,0)}function h(y,I){const K=r.newAttributes,Y=r.enabledAttributes,se=r.attributeDivisors;K[y]=1,Y[y]===0&&(n.enableVertexAttribArray(y),Y[y]=1),se[y]!==I&&(n.vertexAttribDivisor(y,I),se[y]=I)}function T(){const y=r.newAttributes,I=r.enabledAttributes;for(let K=0,Y=I.length;K<Y;K++)I[K]!==y[K]&&(n.disableVertexAttribArray(K),I[K]=0)}function w(y,I,K,Y,se,ie,j){j===!0?n.vertexAttribIPointer(y,I,K,se,ie):n.vertexAttribPointer(y,I,K,Y,se,ie)}function b(y,I,K,Y){x();const se=Y.attributes,ie=K.getAttributes(),j=I.defaultAttributeValues;for(const z in ie){const te=ie[z];if(te.location>=0){let xe=se[z];if(xe===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor)),xe!==void 0){const ge=xe.normalized,Me=xe.itemSize,ze=e.get(xe);if(ze===void 0)continue;const We=ze.buffer,ft=ze.type,ve=ze.bytesPerElement,F=ft===n.INT||ft===n.UNSIGNED_INT||xe.gpuType===_c;if(xe.isInterleavedBufferAttribute){const X=xe.data,Z=X.stride,he=xe.offset;if(X.isInstancedInterleavedBuffer){for(let de=0;de<te.locationSize;de++)h(te.location+de,X.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let de=0;de<te.locationSize;de++)m(te.location+de);n.bindBuffer(n.ARRAY_BUFFER,We);for(let de=0;de<te.locationSize;de++)w(te.location+de,Me/te.locationSize,ft,ge,Z*ve,(he+Me/te.locationSize*de)*ve,F)}else{if(xe.isInstancedBufferAttribute){for(let X=0;X<te.locationSize;X++)h(te.location+X,xe.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let X=0;X<te.locationSize;X++)m(te.location+X);n.bindBuffer(n.ARRAY_BUFFER,We);for(let X=0;X<te.locationSize;X++)w(te.location+X,Me/te.locationSize,ft,ge,Me*ve,Me/te.locationSize*X*ve,F)}}else if(j!==void 0){const ge=j[z];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(te.location,ge);break;case 3:n.vertexAttrib3fv(te.location,ge);break;case 4:n.vertexAttrib4fv(te.location,ge);break;default:n.vertexAttrib1fv(te.location,ge)}}}}T()}function R(){V();for(const y in i){const I=i[y];for(const K in I){const Y=I[K];for(const se in Y)u(Y[se].object),delete Y[se];delete I[K]}delete i[y]}}function D(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const K in I){const Y=I[K];for(const se in Y)u(Y[se].object),delete Y[se];delete I[K]}delete i[y.id]}function L(y){for(const I in i){const K=i[I];if(K[y.id]===void 0)continue;const Y=K[y.id];for(const se in Y)u(Y[se].object),delete Y[se];delete K[y.id]}}function V(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:V,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Dv(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*d[x];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Mn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const V=L===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==un&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==In&&!V)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:b,maxSamples:R,samples:D}}function Iv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Kn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,w=T*4;let b=h.clippingState||null;l.value=b,b=u(_,d,w,p);for(let R=0;R!==w;++R)b[R]=t[R];h.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let w=0,b=p;w!==x;++w,b+=4)o.copy(f[w]).applyMatrix4(T,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Uv(n){let e=new WeakMap;function t(o,a){return a===ll?o.mapping=Zi:a===cl&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ll||a===cl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ad(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const bi=4,tf=[.125,.215,.35,.446,.526,.582],Wi=20,Nv=256,Zs=new Cc,nf=new et;let Ua=null,Na=0,Fa=0,Oa=!1;const Fv=new N;class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Fv}=r;Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=Oa,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:li,format:Mn,colorSpace:Fs,depthBuffer:!1},s=rf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ov(r)),this._blurMaterial=zv(r,e,t),this._ggxMaterial=Bv(r,e,t)}return s}_compileMaterial(e){const t=new Tn(new Jt,e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,s,r){const l=new vn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(nf),f.toneMapping=On,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tn(new Er,new To({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let h=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,h=!0):(m.color.copy(nf),h=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const R=this._cubeSize;Ss(s,b*R,w>2?R:0,R,R),f.setRenderTarget(s),h&&f.render(x,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zi||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-bi?i-_+bi:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Ss(r,m,h,3*x,2*x),s.setRenderTarget(r),s.render(a,Zs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Ss(e,m,h,3*x,2*x),s.setRenderTarget(e),s.render(a,Zs)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Wi-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Wi;m>Wi&&ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const h=[];let T=0;for(let L=0;L<Wi;++L){const V=L/x,S=Math.exp(-V*V/2);h.push(S),L===0?T+=S:L<m&&(T+=2*S)}for(let L=0;L<h.length;L++)h[L]=h[L]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-i;const b=this._sizeLods[s],R=3*b*(s>w-bi?s-w+bi:0),D=4*(this._cubeSize-b);Ss(t,R,D,3*b,2*b),l.setRenderTarget(t),l.render(f,Zs)}}function Ov(n){const e=[],t=[],i=[];let s=n;const r=n-bi+1+tf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-bi?l=tf[o-n+bi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,h=1,T=new Float32Array(x*_*p),w=new Float32Array(m*_*p),b=new Float32Array(h*_*p);for(let D=0;D<p;D++){const L=D%3*2/3-1,V=D>2?0:-1,S=[L,V,0,L+2/3,V,0,L+2/3,V+1,0,L,V,0,L+2/3,V+1,0,L,V+1,0];T.set(S,x*_*D),w.set(d,m*_*D);const y=[D,D,D,D,D,D];b.set(y,h*_*D)}const R=new Jt;R.setAttribute("position",new En(T,x)),R.setAttribute("uv",new En(w,m)),R.setAttribute("faceIndex",new En(b,h)),i.push(new Tn(R,null)),s>bi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function rf(n,e,t){const i=new Bn(n,e,t);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Bv(n,e,t){return new Hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function zv(n,e,t){const i=new Float32Array(Wi),s=new N(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function of(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function af(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ll||l===cl,u=l===Zi||l===Us;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new sf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new sf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Hv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&_r("WebGLRenderer: "+i+" extension not supported."),s}}}function Gv(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let w=0,b=T.length;w<b;w+=3){const R=T[w+0],D=T[w+1],L=T[w+2];d.push(R,D,D,L,L,R)}}else if(_!==void 0){const T=_.array;x=_.version;for(let w=0,b=T.length/3-1;w<b;w+=3){const R=w+0,D=w+1,L=w+2;d.push(R,D,D,L,L,R)}}else return;const m=new(Qh(d)?id:nd)(d,1);m.version=x;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function kv(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,d*o,_),t.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function f(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,_);let h=0;for(let T=0;T<_;T++)h+=p[T]*x[T];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Wv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Xv(n,e,t){const i=new WeakMap,s=new Et;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){V.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let R=a.attributes.position.count*b,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*D*4*f),V=new ed(L,R,D,f);V.type=In,V.needsUpdate=!0;const S=b*4;for(let I=0;I<f;I++){const K=h[I],Y=T[I],se=w[I],ie=R*D*4*I;for(let j=0;j<K.count;j++){const z=j*S;_===!0&&(s.fromBufferAttribute(K,j),L[ie+z+0]=s.x,L[ie+z+1]=s.y,L[ie+z+2]=s.z,L[ie+z+3]=0),x===!0&&(s.fromBufferAttribute(Y,j),L[ie+z+4]=s.x,L[ie+z+5]=s.y,L[ie+z+6]=s.z,L[ie+z+7]=0),m===!0&&(s.fromBufferAttribute(se,j),L[ie+z+8]=s.x,L[ie+z+9]=s.y,L[ie+z+10]=s.z,L[ie+z+11]=se.itemSize===4?s.w:1)}}d={count:f,texture:V,size:new He(R,D)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Yv(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const qv={[Bh]:"LINEAR_TONE_MAPPING",[zh]:"REINHARD_TONE_MAPPING",[Vh]:"CINEON_TONE_MAPPING",[Hh]:"ACES_FILMIC_TONE_MAPPING",[kh]:"AGX_TONE_MAPPING",[Wh]:"NEUTRAL_TONE_MAPPING",[Gh]:"CUSTOM_TONE_MAPPING"};function jv(n,e,t,i,s){const r=new Bn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Bn(e,t,{type:li,depthBuffer:!1,stencilBuffer:!1}),a=new Jt;a.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new zt([0,2,0,0,2,0],2));const l=new H_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Tn(a,l),u=new Cc(-1,1,1,-1,0,1);let f=null,d=null,p=!1,_,x=null,m=[],h=!1;this.setSize=function(T,w){r.setSize(T,w),o.setSize(T,w);for(let b=0;b<m.length;b++){const R=m[b];R.setSize&&R.setSize(T,w)}},this.setEffects=function(T){m=T,h=m.length>0&&m[0].isRenderPass===!0;const w=r.width,b=r.height;for(let R=0;R<m.length;R++){const D=m[R];D.setSize&&D.setSize(w,b)}},this.begin=function(T,w){if(p||T.toneMapping===On&&m.length===0)return!1;if(x=w,w!==null){const b=w.width,R=w.height;(r.width!==b||r.height!==R)&&this.setSize(b,R)}return h===!1&&T.setRenderTarget(r),_=T.toneMapping,T.toneMapping=On,!0},this.hasRenderPass=function(){return h},this.end=function(T,w){T.toneMapping=_,p=!0;let b=r,R=o;for(let D=0;D<m.length;D++){const L=m[D];if(L.enabled!==!1&&(L.render(T,R,b,w),L.needsSwap!==!1)){const V=b;b=R,R=V}}if(f!==T.outputColorSpace||d!==T.toneMapping){f=T.outputColorSpace,d=T.toneMapping,l.defines={},tt.getTransfer(f)===at&&(l.defines.SRGB_TRANSFER="");const D=qv[d];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,T.setRenderTarget(x),T.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const dd=new Bt,jl=new xr(1,1),pd=new ed,md=new u_,gd=new od,lf=[],cf=[],uf=new Float32Array(16),ff=new Float32Array(9),hf=new Float32Array(4);function zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=lf[s];if(r===void 0&&(r=new Float32Array(s),lf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yo(n,e){let t=cf[e];t===void 0&&(t=new Int32Array(e),cf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $v(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function Jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function Qv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;hf.set(i),n.uniformMatrix2fv(this.addr,!1,hf),Rt(t,i)}}function eS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;ff.set(i),n.uniformMatrix3fv(this.addr,!1,ff),Rt(t,i)}}function tS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;uf.set(i),n.uniformMatrix4fv(this.addr,!1,uf),Rt(t,i)}}function nS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function oS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function cS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function uS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jl.compareFunction=t.isReversedDepthBuffer()?bc:Ec,r=jl):r=dd,t.setTexture2D(e||r,s)}function fS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||md,s)}function hS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||gd,s)}function dS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||pd,s)}function pS(n){switch(n){case 5126:return $v;case 35664:return Kv;case 35665:return Zv;case 35666:return Jv;case 35674:return Qv;case 35675:return eS;case 35676:return tS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return sS;case 35669:case 35673:return rS;case 5125:return oS;case 36294:return aS;case 36295:return lS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return dS}}function mS(n,e){n.uniform1fv(this.addr,e)}function gS(n,e){const t=zs(e,this.size,2);n.uniform2fv(this.addr,t)}function _S(n,e){const t=zs(e,this.size,3);n.uniform3fv(this.addr,t)}function xS(n,e){const t=zs(e,this.size,4);n.uniform4fv(this.addr,t)}function vS(n,e){const t=zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function SS(n,e){const t=zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function MS(n,e){const t=zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yS(n,e){n.uniform1iv(this.addr,e)}function ES(n,e){n.uniform2iv(this.addr,e)}function bS(n,e){n.uniform3iv(this.addr,e)}function TS(n,e){n.uniform4iv(this.addr,e)}function AS(n,e){n.uniform1uiv(this.addr,e)}function wS(n,e){n.uniform2uiv(this.addr,e)}function RS(n,e){n.uniform3uiv(this.addr,e)}function CS(n,e){n.uniform4uiv(this.addr,e)}function PS(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=jl:o=dd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function DS(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||md,r[o])}function LS(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||gd,r[o])}function IS(n,e,t){const i=this.cache,s=e.length,r=Yo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||pd,r[o])}function US(n){switch(n){case 5126:return mS;case 35664:return gS;case 35665:return _S;case 35666:return xS;case 35674:return vS;case 35675:return SS;case 35676:return MS;case 5124:case 35670:return yS;case 35667:case 35671:return ES;case 35668:case 35672:return bS;case 35669:case 35673:return TS;case 5125:return AS;case 36294:return wS;case 36295:return RS;case 36296:return CS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return DS;case 35680:case 36300:case 36308:case 36293:return LS;case 36289:case 36303:case 36311:case 36292:return IS}}class NS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pS(t.type)}}class FS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=US(t.type)}}class OS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function df(n,e){n.seq.push(e),n.map[e.id]=e}function BS(n,e,t){const i=n.name,s=i.length;for(Ba.lastIndex=0;;){const r=Ba.exec(i),o=Ba.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){df(t,c===void 0?new NS(a,n,e):new FS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new OS(a),df(t,f)),t=f}}}class po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);BS(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function pf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zS=37297;let VS=0;function HS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const mf=new $e;function GS(n){tt._getMatrix(mf,tt.workingColorSpace,n);const e=`mat3( ${mf.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Mo:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+HS(n.getShaderSource(e),a)}else return r}function kS(n,e){const t=GS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const WS={[Bh]:"Linear",[zh]:"Reinhard",[Vh]:"Cineon",[Hh]:"ACESFilmic",[kh]:"AgX",[Wh]:"Neutral",[Gh]:"Custom"};function XS(n,e){const t=WS[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eo=new N;function YS(){tt.getLuminanceCoefficients(eo);const n=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function jS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $S(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function tr(n){return n!==""}function _f(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KS=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(n){return n.replace(KS,JS)}const ZS=new Map;function JS(n,e){let t=Ke[e];if(t===void 0){const i=ZS.get(e);if(i!==void 0)t=Ke[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $l(t)}const QS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(n){return n.replace(QS,eM)}function eM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const tM={[ao]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function nM(n){return tM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iM={[Zi]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Ho]:"ENVMAP_TYPE_CUBE_UV"};function sM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":iM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const rM={[Us]:"ENVMAP_MODE_REFRACTION"};function oM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":rM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aM={[Oh]:"ENVMAP_BLENDING_MULTIPLY",[kg]:"ENVMAP_BLENDING_MIX",[Wg]:"ENVMAP_BLENDING_ADD"};function lM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":aM[n.combine]||"ENVMAP_BLENDING_NONE"}function cM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=nM(t),c=sM(t),u=oM(t),f=lM(t),d=cM(t),p=qS(t),_=jS(r),x=s.createProgram();let m,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(tr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(tr).join(`
`),h.length>0&&(h+=`
`)):(m=[Sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),h=[Sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ke.tonemapping_pars_fragment:"",t.toneMapping!==On?XS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,kS("linearToOutputTexel",t.outputColorSpace),YS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),o=$l(o),o=_f(o,t),o=xf(o,t),a=$l(a),a=_f(a,t),a=xf(a,t),o=vf(o),a=vf(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=T+m+o,b=T+h+a,R=pf(s,s.VERTEX_SHADER,w),D=pf(s,s.FRAGMENT_SHADER,b);s.attachShader(x,R),s.attachShader(x,D),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(I){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(x)||"",Y=s.getShaderInfoLog(R)||"",se=s.getShaderInfoLog(D)||"",ie=K.trim(),j=Y.trim(),z=se.trim();let te=!0,xe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,R,D);else{const ge=gf(s,R,"vertex"),Me=gf(s,D,"fragment");Qe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ie+`
`+ge+`
`+Me)}else ie!==""?ke("WebGLProgram: Program Info Log:",ie):(j===""||z==="")&&(xe=!1);xe&&(I.diagnostics={runnable:te,programLog:ie,vertexShader:{log:j,prefix:m},fragmentShader:{log:z,prefix:h}})}s.deleteShader(R),s.deleteShader(D),V=new po(s,x),S=$S(s,x)}let V;this.getUniforms=function(){return V===void 0&&L(this),V};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,zS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=D,this}let fM=0;class hM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new dM(e),t.set(e,i)),i}}class dM{constructor(e){this.id=fM++,this.code=e,this.usedTimes=0}}function pM(n,e,t,i,s,r,o){const a=new Ac,l=new hM,c=new Set,u=[],f=new Map,d=s.logarithmicDepthBuffer;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,I,K,Y){const se=K.fog,ie=Y.geometry,j=S.isMeshStandardMaterial?K.environment:null,z=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),te=z&&z.mapping===Ho?z.image.height:null,xe=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&ke("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ge=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Me=ge!==void 0?ge.length:0;let ze=0;ie.morphAttributes.position!==void 0&&(ze=1),ie.morphAttributes.normal!==void 0&&(ze=2),ie.morphAttributes.color!==void 0&&(ze=3);let We,ft,ve,F;if(xe){const rt=Dn[xe];We=rt.vertexShader,ft=rt.fragmentShader}else We=S.vertexShader,ft=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),F=l.getFragmentShaderID(S);const X=n.getRenderTarget(),Z=n.state.buffers.depth.getReversed(),he=Y.isInstancedMesh===!0,de=Y.isBatchedMesh===!0,Ve=!!S.map,A=!!S.matcap,C=!!z,B=!!S.aoMap,J=!!S.lightMap,W=!!S.bumpMap,ee=!!S.normalMap,E=!!S.displacementMap,ae=!!S.emissiveMap,re=!!S.metalnessMap,ne=!!S.roughnessMap,oe=S.anisotropy>0,v=S.clearcoat>0,g=S.dispersion>0,P=S.iridescence>0,k=S.sheen>0,Q=S.transmission>0,G=oe&&!!S.anisotropyMap,Ae=v&&!!S.clearcoatMap,ue=v&&!!S.clearcoatNormalMap,Ce=v&&!!S.clearcoatRoughnessMap,Ue=P&&!!S.iridescenceMap,ce=P&&!!S.iridescenceThicknessMap,Se=k&&!!S.sheenColorMap,Ee=k&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,_e=!!S.specularColorMap,je=!!S.specularIntensityMap,U=Q&&!!S.transmissionMap,Re=Q&&!!S.thicknessMap,pe=!!S.gradientMap,De=!!S.alphaMap,fe=S.alphaTest>0,le=!!S.alphaHash,ye=!!S.extensions;let Xe=On;S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const pt={shaderID:xe,shaderType:S.type,shaderName:S.name,vertexShader:We,fragmentShader:ft,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:F,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:de,batchingColor:de&&Y._colorsTexture!==null,instancing:he,instancingColor:he&&Y.instanceColor!==null,instancingMorph:he&&Y.morphTexture!==null,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Fs,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:A,envMap:C,envMapMode:C&&z.mapping,envMapCubeUVHeight:te,aoMap:B,lightMap:J,bumpMap:W,normalMap:ee,displacementMap:E,emissiveMap:ae,normalMapObjectSpace:ee&&S.normalMapType===jg,normalMapTangentSpace:ee&&S.normalMapType===qg,metalnessMap:re,roughnessMap:ne,anisotropy:oe,anisotropyMap:G,clearcoat:v,clearcoatMap:Ae,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ce,dispersion:g,iridescence:P,iridescenceMap:Ue,iridescenceThicknessMap:ce,sheen:k,sheenColorMap:Se,sheenRoughnessMap:Ee,specularMap:Pe,specularColorMap:_e,specularIntensityMap:je,transmission:Q,transmissionMap:U,thicknessMap:Re,gradientMap:pe,opaque:S.transparent===!1&&S.blending===Cs&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:fe,alphaHash:le,combine:S.combine,mapUv:Ve&&x(S.map.channel),aoMapUv:B&&x(S.aoMap.channel),lightMapUv:J&&x(S.lightMap.channel),bumpMapUv:W&&x(S.bumpMap.channel),normalMapUv:ee&&x(S.normalMap.channel),displacementMapUv:E&&x(S.displacementMap.channel),emissiveMapUv:ae&&x(S.emissiveMap.channel),metalnessMapUv:re&&x(S.metalnessMap.channel),roughnessMapUv:ne&&x(S.roughnessMap.channel),anisotropyMapUv:G&&x(S.anisotropyMap.channel),clearcoatMapUv:Ae&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(S.sheenRoughnessMap.channel),specularMapUv:Pe&&x(S.specularMap.channel),specularColorMapUv:_e&&x(S.specularColorMap.channel),specularIntensityMapUv:je&&x(S.specularIntensityMap.channel),transmissionMapUv:U&&x(S.transmissionMap.channel),thicknessMapUv:Re&&x(S.thicknessMap.channel),alphaMapUv:De&&x(S.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(ee||oe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ie.attributes.uv&&(Ve||De),fog:!!se,useFog:S.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Z,skinning:Y.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qn,flipSided:S.side===Zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ye&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&S.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function h(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(T(y,S),w(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function T(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function w(S,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){const y=_[S.type];let I;if(y){const K=Dn[y];I=E_.clone(K.uniforms)}else I=S.uniforms;return I}function R(S,y){let I=f.get(y);return I!==void 0?++I.usedTimes:(I=new uM(n,y,S,r),u.push(I),f.set(y,I)),I}function D(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),f.delete(S.cacheKey),S.destroy()}}function L(S){l.remove(S)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:R,releaseProgram:D,releaseShaderCache:L,programs:u,dispose:V}}function mM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function gM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Mf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,p,_,x,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function a(f,d,p,_,x,m){const h=o(f,d,p,_,x,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(f,d,p,_,x,m){const h=o(f,d,p,_,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||gM),i.length>1&&i.sort(d||Mf),s.length>1&&s.sort(d||Mf)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function _M(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new yf,n.set(i,[o])):s>=r.length?(o=new yf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new et};break;case"SpotLight":t={position:new N,direction:new N,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function vM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let SM=0;function MM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yM(n){const e=new xM,t=vM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new xt,o=new xt;function a(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,T=0,w=0,b=0,R=0,D=0,L=0;c.sort(MM);for(let S=0,y=c.length;S<y;S++){const I=c[S],K=I.color,Y=I.intensity,se=I.distance;let ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ns?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=K.r*Y,f+=K.g*Y,d+=K.b*Y;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],Y);L++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,te=t.get(I);te.shadowIntensity=z.intensity,te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,i.directionalShadow[p]=te,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=I.shadow.matrix,T++}i.directional[p]=j,p++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(K).multiplyScalar(Y),j.distance=se,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[x]=j;const z=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,z.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[x]=z.matrix,I.castShadow){const te=t.get(I);te.shadowIntensity=z.intensity,te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,i.spotShadow[x]=te,i.spotShadowMap[x]=ie,b++}x++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(K).multiplyScalar(Y),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=j,m++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const z=I.shadow,te=t.get(I);te.shadowIntensity=z.intensity,te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,te.shadowCameraNear=z.camera.near,te.shadowCameraFar=z.camera.far,i.pointShadow[_]=te,i.pointShadowMap[_]=ie,i.pointShadowMatrix[_]=I.shadow.matrix,w++}i.point[_]=j,_++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(Y),j.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[h]=j,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const V=i.hash;(V.directionalLength!==p||V.pointLength!==_||V.spotLength!==x||V.rectAreaLength!==m||V.hemiLength!==h||V.numDirectionalShadows!==T||V.numPointShadows!==w||V.numSpotShadows!==b||V.numSpotMaps!==R||V.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+R-D,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,V.directionalLength=p,V.pointLength=_,V.spotLength=x,V.rectAreaLength=m,V.hemiLength=h,V.numDirectionalShadows=T,V.numPointShadows=w,V.numSpotShadows=b,V.numSpotMaps=R,V.numLightProbes=L,i.version=SM++)}function l(c,u){let f=0,d=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const w=c[h];if(w.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(w.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Ef(n){const e=new yM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function EM(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ef(n),e.set(s,[a])):r>=o.length?(a=new Ef(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,AM=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],wM=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],bf=new xt,Js=new N,za=new N;function RM(n,e,t){let i=new cd;const s=new He,r=new He,o=new Et,a=new G_,l=new k_,c={},u=t.maxTextureSize,f={[Ci]:Zt,[Zt]:Ci,[Qn]:Qn},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:bM,fragmentShader:TM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Jt;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Tn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let h=this.type;this.render=function(D,L,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;D.type===bg&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),D.type=ao);const S=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),K=n.state;K.setBlending(ii),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Y=h!==this.type;Y&&L.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(ie=>ie.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,ie=D.length;se<ie;se++){const j=D[se],z=j.shadow;if(z===void 0){ke("WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const te=z.getFrameExtents();if(s.multiply(te),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,z.mapSize.y=r.y)),z.map===null||Y===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===er){if(j.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Bn(s.x,s.y,{format:Ns,type:li,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),z.map.texture.name=j.name+".shadowMap",z.map.depthTexture=new xr(s.x,s.y,In),z.map.depthTexture.name=j.name+".shadowMapDepth",z.map.depthTexture.format=ci,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dt,z.map.depthTexture.magFilter=Dt}else{j.isPointLight?(z.map=new ad(s.x),z.map.depthTexture=new U_(s.x,Vn)):(z.map=new Bn(s.x,s.y),z.map.depthTexture=new xr(s.x,s.y,Vn)),z.map.depthTexture.name=j.name+".shadowMap",z.map.depthTexture.format=ci;const ge=n.state.buffers.depth.getReversed();this.type===ao?(z.map.depthTexture.compareFunction=ge?bc:Ec,z.map.depthTexture.minFilter=Pt,z.map.depthTexture.magFilter=Pt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dt,z.map.depthTexture.magFilter=Dt)}z.camera.updateProjectionMatrix()}const xe=z.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<xe;ge++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(z.map),n.clear());const Me=z.getViewport(ge);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),K.viewport(o)}if(j.isPointLight){const Me=z.camera,ze=z.matrix,We=j.distance||Me.far;We!==Me.far&&(Me.far=We,Me.updateProjectionMatrix()),Js.setFromMatrixPosition(j.matrixWorld),Me.position.copy(Js),za.copy(Me.position),za.add(AM[ge]),Me.up.copy(wM[ge]),Me.lookAt(za),Me.updateMatrixWorld(),ze.makeTranslation(-Js.x,-Js.y,-Js.z),bf.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),z._frustum.setFromProjectionMatrix(bf,Me.coordinateSystem,Me.reversedDepth)}else z.updateMatrices(j);i=z.getFrustum(),b(L,V,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===er&&T(z,V),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(S,y,I)};function T(D,L){const V=e.update(x);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Bn(s.x,s.y,{format:Ns,type:li})),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(L,null,V,d,x,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(L,null,V,p,x,null)}function w(D,L,V,S){let y=null;const I=V.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)y=I;else if(y=V.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const K=y.uuid,Y=L.uuid;let se=c[K];se===void 0&&(se={},c[K]=se);let ie=se[Y];ie===void 0&&(ie=y.clone(),se[Y]=ie,L.addEventListener("dispose",R)),y=ie}if(y.visible=L.visible,y.wireframe=L.wireframe,S===er?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:f[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,V.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const K=n.properties.get(y);K.light=V}return y}function b(D,L,V,S,y){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===er)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,D.matrixWorld);const Y=e.update(D),se=D.material;if(Array.isArray(se)){const ie=Y.groups;for(let j=0,z=ie.length;j<z;j++){const te=ie[j],xe=se[te.materialIndex];if(xe&&xe.visible){const ge=w(D,xe,S,y);D.onBeforeShadow(n,D,L,V,Y,ge,te),n.renderBufferDirect(V,null,Y,ge,D,te),D.onAfterShadow(n,D,L,V,Y,ge,te)}}}else if(se.visible){const ie=w(D,se,S,y);D.onBeforeShadow(n,D,L,V,Y,ie,null),n.renderBufferDirect(V,null,Y,ie,D,null),D.onAfterShadow(n,D,L,V,Y,ie,null)}}const K=D.children;for(let Y=0,se=K.length;Y<se;Y++)b(K[Y],L,V,S,y)}function R(D){D.target.removeEventListener("dispose",R);for(const V in c){const S=c[V],y=D.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const CM={[tl]:nl,[il]:ol,[sl]:al,[Is]:rl,[nl]:tl,[ol]:il,[al]:sl,[rl]:Is};function PM(n,e){function t(){let U=!1;const Re=new Et;let pe=null;const De=new Et(0,0,0,0);return{setMask:function(fe){pe!==fe&&!U&&(n.colorMask(fe,fe,fe,fe),pe=fe)},setLocked:function(fe){U=fe},setClear:function(fe,le,ye,Xe,pt){pt===!0&&(fe*=Xe,le*=Xe,ye*=Xe),Re.set(fe,le,ye,Xe),De.equals(Re)===!1&&(n.clearColor(fe,le,ye,Xe),De.copy(Re))},reset:function(){U=!1,pe=null,De.set(-1,0,0,0)}}}function i(){let U=!1,Re=!1,pe=null,De=null,fe=null;return{setReversed:function(le){if(Re!==le){const ye=e.get("EXT_clip_control");le?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Re=le;const Xe=fe;fe=null,this.setClear(Xe)}},getReversed:function(){return Re},setTest:function(le){le?X(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(le){pe!==le&&!U&&(n.depthMask(le),pe=le)},setFunc:function(le){if(Re&&(le=CM[le]),De!==le){switch(le){case tl:n.depthFunc(n.NEVER);break;case nl:n.depthFunc(n.ALWAYS);break;case il:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case sl:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case ol:n.depthFunc(n.GREATER);break;case al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=le}},setLocked:function(le){U=le},setClear:function(le){fe!==le&&(Re&&(le=1-le),n.clearDepth(le),fe=le)},reset:function(){U=!1,pe=null,De=null,fe=null,Re=!1}}}function s(){let U=!1,Re=null,pe=null,De=null,fe=null,le=null,ye=null,Xe=null,pt=null;return{setTest:function(rt){U||(rt?X(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function(rt){Re!==rt&&!U&&(n.stencilMask(rt),Re=rt)},setFunc:function(rt,An,Gn){(pe!==rt||De!==An||fe!==Gn)&&(n.stencilFunc(rt,An,Gn),pe=rt,De=An,fe=Gn)},setOp:function(rt,An,Gn){(le!==rt||ye!==An||Xe!==Gn)&&(n.stencilOp(rt,An,Gn),le=rt,ye=An,Xe=Gn)},setLocked:function(rt){U=rt},setClear:function(rt){pt!==rt&&(n.clearStencil(rt),pt=rt)},reset:function(){U=!1,Re=null,pe=null,De=null,fe=null,le=null,ye=null,Xe=null,pt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,T=null,w=null,b=null,R=null,D=null,L=new et(0,0,0),V=0,S=!1,y=null,I=null,K=null,Y=null,se=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,z=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(te)[1]),j=z>=1):te.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),j=z>=2);let xe=null,ge={};const Me=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),We=new Et().fromArray(Me),ft=new Et().fromArray(ze);function ve(U,Re,pe,De){const fe=new Uint8Array(4),le=n.createTexture();n.bindTexture(U,le),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<pe;ye++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(Re+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return le}const F={};F[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),F[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),F[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(n.DEPTH_TEST),o.setFunc(Is),W(!1),ee(Mu),X(n.CULL_FACE),B(ii);function X(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Z(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function he(U,Re){return f[U]!==Re?(n.bindFramebuffer(U,Re),f[U]=Re,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Re),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function de(U,Re){let pe=p,De=!1;if(U){pe=d.get(Re),pe===void 0&&(pe=[],d.set(Re,pe));const fe=U.textures;if(pe.length!==fe.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let le=0,ye=fe.length;le<ye;le++)pe[le]=n.COLOR_ATTACHMENT0+le;pe.length=fe.length,De=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,De=!0);De&&n.drawBuffers(pe)}function Ve(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const A={[ki]:n.FUNC_ADD,[Ag]:n.FUNC_SUBTRACT,[wg]:n.FUNC_REVERSE_SUBTRACT};A[Rg]=n.MIN,A[Cg]=n.MAX;const C={[Pg]:n.ZERO,[Dg]:n.ONE,[Lg]:n.SRC_COLOR,[Qa]:n.SRC_ALPHA,[Bg]:n.SRC_ALPHA_SATURATE,[Fg]:n.DST_COLOR,[Ug]:n.DST_ALPHA,[Ig]:n.ONE_MINUS_SRC_COLOR,[el]:n.ONE_MINUS_SRC_ALPHA,[Og]:n.ONE_MINUS_DST_COLOR,[Ng]:n.ONE_MINUS_DST_ALPHA,[zg]:n.CONSTANT_COLOR,[Vg]:n.ONE_MINUS_CONSTANT_COLOR,[Hg]:n.CONSTANT_ALPHA,[Gg]:n.ONE_MINUS_CONSTANT_ALPHA};function B(U,Re,pe,De,fe,le,ye,Xe,pt,rt){if(U===ii){x===!0&&(Z(n.BLEND),x=!1);return}if(x===!1&&(X(n.BLEND),x=!0),U!==Tg){if(U!==m||rt!==S){if((h!==ki||b!==ki)&&(n.blendEquation(n.FUNC_ADD),h=ki,b=ki),rt)switch(U){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yu:n.blendFunc(n.ONE,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",U);break}else switch(U){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Eu:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bu:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",U);break}T=null,w=null,R=null,D=null,L.set(0,0,0),V=0,m=U,S=rt}return}fe=fe||Re,le=le||pe,ye=ye||De,(Re!==h||fe!==b)&&(n.blendEquationSeparate(A[Re],A[fe]),h=Re,b=fe),(pe!==T||De!==w||le!==R||ye!==D)&&(n.blendFuncSeparate(C[pe],C[De],C[le],C[ye]),T=pe,w=De,R=le,D=ye),(Xe.equals(L)===!1||pt!==V)&&(n.blendColor(Xe.r,Xe.g,Xe.b,pt),L.copy(Xe),V=pt),m=U,S=!1}function J(U,Re){U.side===Qn?Z(n.CULL_FACE):X(n.CULL_FACE);let pe=U.side===Zt;Re&&(pe=!pe),W(pe),U.blending===Cs&&U.transparent===!1?B(ii):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const De=U.stencilWrite;a.setTest(De),De&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function W(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function ee(U){U!==yg?(X(n.CULL_FACE),U!==I&&(U===Mu?n.cullFace(n.BACK):U===Eg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),I=U}function E(U){U!==K&&(j&&n.lineWidth(U),K=U)}function ae(U,Re,pe){U?(X(n.POLYGON_OFFSET_FILL),(Y!==Re||se!==pe)&&(n.polygonOffset(Re,pe),Y=Re,se=pe)):Z(n.POLYGON_OFFSET_FILL)}function re(U){U?X(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function ne(U){U===void 0&&(U=n.TEXTURE0+ie-1),xe!==U&&(n.activeTexture(U),xe=U)}function oe(U,Re,pe){pe===void 0&&(xe===null?pe=n.TEXTURE0+ie-1:pe=xe);let De=ge[pe];De===void 0&&(De={type:void 0,texture:void 0},ge[pe]=De),(De.type!==U||De.texture!==Re)&&(xe!==pe&&(n.activeTexture(pe),xe=pe),n.bindTexture(U,Re||F[U]),De.type=U,De.texture=Re)}function v(){const U=ge[xe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function k(){try{n.texSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Q(){try{n.texSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ue(){try{n.texStorage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Ce(){try{n.texStorage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Ue(){try{n.texImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ce(){try{n.texImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Se(U){We.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),We.copy(U))}function Ee(U){ft.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ft.copy(U))}function Pe(U,Re){let pe=c.get(Re);pe===void 0&&(pe=new WeakMap,c.set(Re,pe));let De=pe.get(U);De===void 0&&(De=n.getUniformBlockIndex(Re,U.name),pe.set(U,De))}function _e(U,Re){const De=c.get(Re).get(U);l.get(Re)!==De&&(n.uniformBlockBinding(Re,De,U.__bindingPointIndex),l.set(Re,De))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},xe=null,ge={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,T=null,w=null,b=null,R=null,D=null,L=new et(0,0,0),V=0,S=!1,y=null,I=null,K=null,Y=null,se=null,We.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:Z,bindFramebuffer:he,drawBuffers:de,useProgram:Ve,setBlending:B,setMaterial:J,setFlipSided:W,setCullFace:ee,setLineWidth:E,setPolygonOffset:ae,setScissorTest:re,activeTexture:ne,bindTexture:oe,unbindTexture:v,compressedTexImage2D:g,compressedTexImage3D:P,texImage2D:Ue,texImage3D:ce,updateUBOMapping:Pe,uniformBlockBinding:_e,texStorage2D:ue,texStorage3D:Ce,texSubImage2D:k,texSubImage3D:Q,compressedTexSubImage2D:G,compressedTexSubImage3D:Ae,scissor:Se,viewport:Ee,reset:je}}function DM(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(v,g){return p?new OffscreenCanvas(v,g):Eo("canvas")}function x(v,g,P){let k=1;const Q=oe(v);if((Q.width>P||Q.height>P)&&(k=P/Math.max(Q.width,Q.height)),k<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const G=Math.floor(k*Q.width),Ae=Math.floor(k*Q.height);f===void 0&&(f=_(G,Ae));const ue=g?_(G,Ae):f;return ue.width=G,ue.height=Ae,ue.getContext("2d").drawImage(v,0,0,G,Ae),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+G+"x"+Ae+")."),ue}else return"data"in v&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),v;return v}function m(v){return v.generateMipmaps}function h(v){n.generateMipmap(v)}function T(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(v,g,P,k,Q=!1){if(v!==null){if(n[v]!==void 0)return n[v];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let G=g;if(g===n.RED&&(P===n.FLOAT&&(G=n.R32F),P===n.HALF_FLOAT&&(G=n.R16F),P===n.UNSIGNED_BYTE&&(G=n.R8)),g===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.R8UI),P===n.UNSIGNED_SHORT&&(G=n.R16UI),P===n.UNSIGNED_INT&&(G=n.R32UI),P===n.BYTE&&(G=n.R8I),P===n.SHORT&&(G=n.R16I),P===n.INT&&(G=n.R32I)),g===n.RG&&(P===n.FLOAT&&(G=n.RG32F),P===n.HALF_FLOAT&&(G=n.RG16F),P===n.UNSIGNED_BYTE&&(G=n.RG8)),g===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.RG8UI),P===n.UNSIGNED_SHORT&&(G=n.RG16UI),P===n.UNSIGNED_INT&&(G=n.RG32UI),P===n.BYTE&&(G=n.RG8I),P===n.SHORT&&(G=n.RG16I),P===n.INT&&(G=n.RG32I)),g===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.RGB8UI),P===n.UNSIGNED_SHORT&&(G=n.RGB16UI),P===n.UNSIGNED_INT&&(G=n.RGB32UI),P===n.BYTE&&(G=n.RGB8I),P===n.SHORT&&(G=n.RGB16I),P===n.INT&&(G=n.RGB32I)),g===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),P===n.UNSIGNED_INT&&(G=n.RGBA32UI),P===n.BYTE&&(G=n.RGBA8I),P===n.SHORT&&(G=n.RGBA16I),P===n.INT&&(G=n.RGBA32I)),g===n.RGB&&(P===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),g===n.RGBA){const Ae=Q?Mo:tt.getTransfer(k);P===n.FLOAT&&(G=n.RGBA32F),P===n.HALF_FLOAT&&(G=n.RGBA16F),P===n.UNSIGNED_BYTE&&(G=Ae===at?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function b(v,g){let P;return v?g===null||g===Vn||g===gr?P=n.DEPTH24_STENCIL8:g===In?P=n.DEPTH32F_STENCIL8:g===mr&&(P=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Vn||g===gr?P=n.DEPTH_COMPONENT24:g===In?P=n.DEPTH_COMPONENT32F:g===mr&&(P=n.DEPTH_COMPONENT16),P}function R(v,g){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==Dt&&v.minFilter!==Pt?Math.log2(Math.max(g.width,g.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?g.mipmaps.length:1}function D(v){const g=v.target;g.removeEventListener("dispose",D),V(g),g.isVideoTexture&&u.delete(g)}function L(v){const g=v.target;g.removeEventListener("dispose",L),y(g)}function V(v){const g=i.get(v);if(g.__webglInit===void 0)return;const P=v.source,k=d.get(P);if(k){const Q=k[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(v),Object.keys(k).length===0&&d.delete(P)}i.remove(v)}function S(v){const g=i.get(v);n.deleteTexture(g.__webglTexture);const P=v.source,k=d.get(P);delete k[g.__cacheKey],o.memory.textures--}function y(v){const g=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let Q=0;Q<g.__webglFramebuffer[k].length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[k][Q]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=v.textures;for(let k=0,Q=P.length;k<Q;k++){const G=i.get(P[k]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(P[k])}i.remove(v)}let I=0;function K(){I=0}function Y(){const v=I;return v>=s.maxTextures&&ke("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),I+=1,v}function se(v){const g=[];return g.push(v.wrapS),g.push(v.wrapT),g.push(v.wrapR||0),g.push(v.magFilter),g.push(v.minFilter),g.push(v.anisotropy),g.push(v.internalFormat),g.push(v.format),g.push(v.type),g.push(v.generateMipmaps),g.push(v.premultiplyAlpha),g.push(v.flipY),g.push(v.unpackAlignment),g.push(v.colorSpace),g.join()}function ie(v,g){const P=i.get(v);if(v.isVideoTexture&&re(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&P.__version!==v.version){const k=v.image;if(k===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{F(P,v,g);return}}else v.isExternalTexture&&(P.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+g)}function j(v,g){const P=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){F(P,v,g);return}else v.isExternalTexture&&(P.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+g)}function z(v,g){const P=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){F(P,v,g);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+g)}function te(v,g){const P=i.get(v);if(v.isCubeDepthTexture!==!0&&v.version>0&&P.__version!==v.version){X(P,v,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+g)}const xe={[ul]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},ge={[Dt]:n.NEAREST,[Xg]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[Pt]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},Me={[$g]:n.NEVER,[e_]:n.ALWAYS,[Kg]:n.LESS,[Ec]:n.LEQUAL,[Zg]:n.EQUAL,[bc]:n.GEQUAL,[Jg]:n.GREATER,[Qg]:n.NOTEQUAL};function ze(v,g){if(g.type===In&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Pt||g.magFilter===aa||g.magFilter===Pr||g.magFilter===Xi||g.minFilter===Pt||g.minFilter===aa||g.minFilter===Pr||g.minFilter===Xi)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,xe[g.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,xe[g.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,xe[g.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,ge[g.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==Pr&&g.minFilter!==Xi||g.type===In&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function We(v,g){let P=!1;v.__webglInit===void 0&&(v.__webglInit=!0,g.addEventListener("dispose",D));const k=g.source;let Q=d.get(k);Q===void 0&&(Q={},d.set(k,Q));const G=se(g);if(G!==v.__cacheKey){Q[G]===void 0&&(Q[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Q[G].usedTimes++;const Ae=Q[v.__cacheKey];Ae!==void 0&&(Q[v.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(g)),v.__cacheKey=G,v.__webglTexture=Q[G].texture}return P}function ft(v,g,P){return Math.floor(Math.floor(v/P)/g)}function ve(v,g,P,k){const G=v.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,P,k,g.data);else{G.sort((ce,Se)=>ce.start-Se.start);let Ae=0;for(let ce=1;ce<G.length;ce++){const Se=G[Ae],Ee=G[ce],Pe=Se.start+Se.count,_e=ft(Ee.start,g.width,4),je=ft(Se.start,g.width,4);Ee.start<=Pe+1&&_e===je&&ft(Ee.start+Ee.count-1,g.width,4)===_e?Se.count=Math.max(Se.count,Ee.start+Ee.count-Se.start):(++Ae,G[Ae]=Ee)}G.length=Ae+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),Ue=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ce=0,Se=G.length;ce<Se;ce++){const Ee=G[ce],Pe=Math.floor(Ee.start/4),_e=Math.ceil(Ee.count/4),je=Pe%g.width,U=Math.floor(Pe/g.width),Re=_e,pe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,je,U,Re,pe,P,k,g.data)}v.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function F(v,g,P){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const Q=We(v,g),G=g.source;t.bindTexture(k,v.__webglTexture,n.TEXTURE0+P);const Ae=i.get(G);if(G.version!==Ae.__version||Q===!0){t.activeTexture(n.TEXTURE0+P);const ue=tt.getPrimaries(tt.workingColorSpace),Ce=g.colorSpace===Mi?null:tt.getPrimaries(g.colorSpace),Ue=g.colorSpace===Mi||ue===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ce=x(g.image,!1,s.maxTextureSize);ce=ne(g,ce);const Se=r.convert(g.format,g.colorSpace),Ee=r.convert(g.type);let Pe=w(g.internalFormat,Se,Ee,g.colorSpace,g.isVideoTexture);ze(k,g);let _e;const je=g.mipmaps,U=g.isVideoTexture!==!0,Re=Ae.__version===void 0||Q===!0,pe=G.dataReady,De=R(g,ce);if(g.isDepthTexture)Pe=b(g.format===Yi,g.type),Re&&(U?t.texStorage2D(n.TEXTURE_2D,1,Pe,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ce.width,ce.height,0,Se,Ee,null));else if(g.isDataTexture)if(je.length>0){U&&Re&&t.texStorage2D(n.TEXTURE_2D,De,Pe,je[0].width,je[0].height);for(let fe=0,le=je.length;fe<le;fe++)_e=je[fe],U?pe&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,_e.width,_e.height,Se,Ee,_e.data):t.texImage2D(n.TEXTURE_2D,fe,Pe,_e.width,_e.height,0,Se,Ee,_e.data);g.generateMipmaps=!1}else U?(Re&&t.texStorage2D(n.TEXTURE_2D,De,Pe,ce.width,ce.height),pe&&ve(g,ce,Se,Ee)):t.texImage2D(n.TEXTURE_2D,0,Pe,ce.width,ce.height,0,Se,Ee,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){U&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Pe,je[0].width,je[0].height,ce.depth);for(let fe=0,le=je.length;fe<le;fe++)if(_e=je[fe],g.format!==Mn)if(Se!==null)if(U){if(pe)if(g.layerUpdates.size>0){const ye=ef(_e.width,_e.height,g.format,g.type);for(const Xe of g.layerUpdates){const pt=_e.data.subarray(Xe*ye/_e.data.BYTES_PER_ELEMENT,(Xe+1)*ye/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,Xe,_e.width,_e.height,1,Se,pt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,ce.depth,Se,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,Pe,_e.width,_e.height,ce.depth,0,_e.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,ce.depth,Se,Ee,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,Pe,_e.width,_e.height,ce.depth,0,Se,Ee,_e.data)}else{U&&Re&&t.texStorage2D(n.TEXTURE_2D,De,Pe,je[0].width,je[0].height);for(let fe=0,le=je.length;fe<le;fe++)_e=je[fe],g.format!==Mn?Se!==null?U?pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,_e.width,_e.height,Se,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,Pe,_e.width,_e.height,0,_e.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?pe&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,_e.width,_e.height,Se,Ee,_e.data):t.texImage2D(n.TEXTURE_2D,fe,Pe,_e.width,_e.height,0,Se,Ee,_e.data)}else if(g.isDataArrayTexture)if(U){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Pe,ce.width,ce.height,ce.depth),pe)if(g.layerUpdates.size>0){const fe=ef(ce.width,ce.height,g.format,g.type);for(const le of g.layerUpdates){const ye=ce.data.subarray(le*fe/ce.data.BYTES_PER_ELEMENT,(le+1)*fe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,ce.width,ce.height,1,Se,Ee,ye)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Se,Ee,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ce.width,ce.height,ce.depth,0,Se,Ee,ce.data);else if(g.isData3DTexture)U?(Re&&t.texStorage3D(n.TEXTURE_3D,De,Pe,ce.width,ce.height,ce.depth),pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Se,Ee,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ce.width,ce.height,ce.depth,0,Se,Ee,ce.data);else if(g.isFramebufferTexture){if(Re)if(U)t.texStorage2D(n.TEXTURE_2D,De,Pe,ce.width,ce.height);else{let fe=ce.width,le=ce.height;for(let ye=0;ye<De;ye++)t.texImage2D(n.TEXTURE_2D,ye,Pe,fe,le,0,Se,Ee,null),fe>>=1,le>>=1}}else if(je.length>0){if(U&&Re){const fe=oe(je[0]);t.texStorage2D(n.TEXTURE_2D,De,Pe,fe.width,fe.height)}for(let fe=0,le=je.length;fe<le;fe++)_e=je[fe],U?pe&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Se,Ee,_e):t.texImage2D(n.TEXTURE_2D,fe,Pe,Se,Ee,_e);g.generateMipmaps=!1}else if(U){if(Re){const fe=oe(ce);t.texStorage2D(n.TEXTURE_2D,De,Pe,fe.width,fe.height)}pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ee,ce)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Se,Ee,ce);m(g)&&h(k),Ae.__version=G.version,g.onUpdate&&g.onUpdate(g)}v.__version=g.version}function X(v,g,P){if(g.image.length!==6)return;const k=We(v,g),Q=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+P);const G=i.get(Q);if(Q.version!==G.__version||k===!0){t.activeTexture(n.TEXTURE0+P);const Ae=tt.getPrimaries(tt.workingColorSpace),ue=g.colorSpace===Mi?null:tt.getPrimaries(g.colorSpace),Ce=g.colorSpace===Mi||Ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ue=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,Se=[];for(let le=0;le<6;le++)!Ue&&!ce?Se[le]=x(g.image[le],!0,s.maxCubemapSize):Se[le]=ce?g.image[le].image:g.image[le],Se[le]=ne(g,Se[le]);const Ee=Se[0],Pe=r.convert(g.format,g.colorSpace),_e=r.convert(g.type),je=w(g.internalFormat,Pe,_e,g.colorSpace),U=g.isVideoTexture!==!0,Re=G.__version===void 0||k===!0,pe=Q.dataReady;let De=R(g,Ee);ze(n.TEXTURE_CUBE_MAP,g);let fe;if(Ue){U&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,je,Ee.width,Ee.height);for(let le=0;le<6;le++){fe=Se[le].mipmaps;for(let ye=0;ye<fe.length;ye++){const Xe=fe[ye];g.format!==Mn?Pe!==null?U?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,0,0,Xe.width,Xe.height,Pe,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,je,Xe.width,Xe.height,0,Xe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,0,0,Xe.width,Xe.height,Pe,_e,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,je,Xe.width,Xe.height,0,Pe,_e,Xe.data)}}}else{if(fe=g.mipmaps,U&&Re){fe.length>0&&De++;const le=oe(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,je,le.width,le.height)}for(let le=0;le<6;le++)if(ce){U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Se[le].width,Se[le].height,Pe,_e,Se[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Se[le].width,Se[le].height,0,Pe,_e,Se[le].data);for(let ye=0;ye<fe.length;ye++){const pt=fe[ye].image[le].image;U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,0,0,pt.width,pt.height,Pe,_e,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,je,pt.width,pt.height,0,Pe,_e,pt.data)}}else{U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe,_e,Se[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Pe,_e,Se[le]);for(let ye=0;ye<fe.length;ye++){const Xe=fe[ye];U?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,0,0,Pe,_e,Xe.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,je,Pe,_e,Xe.image[le])}}}m(g)&&h(n.TEXTURE_CUBE_MAP),G.__version=Q.version,g.onUpdate&&g.onUpdate(g)}v.__version=g.version}function Z(v,g,P,k,Q,G){const Ae=r.convert(P.format,P.colorSpace),ue=r.convert(P.type),Ce=w(P.internalFormat,Ae,ue,P.colorSpace),Ue=i.get(g),ce=i.get(P);if(ce.__renderTarget=g,!Ue.__hasExternalTextures){const Se=Math.max(1,g.width>>G),Ee=Math.max(1,g.height>>G);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,G,Ce,Se,Ee,g.depth,0,Ae,ue,null):t.texImage2D(Q,G,Ce,Se,Ee,0,Ae,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),ae(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,Q,ce.__webglTexture,0,E(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,Q,ce.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(v,g,P){if(n.bindRenderbuffer(n.RENDERBUFFER,v),g.depthBuffer){const k=g.depthTexture,Q=k&&k.isDepthTexture?k.type:null,G=b(g.stencilBuffer,Q),Ae=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ae(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,E(g),G,g.width,g.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,E(g),G,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,G,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,v)}else{const k=g.textures;for(let Q=0;Q<k.length;Q++){const G=k[Q],Ae=r.convert(G.format,G.colorSpace),ue=r.convert(G.type),Ce=w(G.internalFormat,Ae,ue,G.colorSpace);ae(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,E(g),Ce,g.width,g.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,E(g),Ce,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(v,g,P){const k=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",D)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ze(n.TEXTURE_CUBE_MAP,g.depthTexture);const Ue=r.convert(g.depthTexture.format),ce=r.convert(g.depthTexture.type);let Se;g.depthTexture.format===ci?Se=n.DEPTH_COMPONENT24:g.depthTexture.format===Yi&&(Se=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Se,g.width,g.height,0,Ue,ce,null)}}else ie(g.depthTexture,0);const G=Q.__webglTexture,Ae=E(g),ue=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+P:n.TEXTURE_2D,Ce=g.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===ci)ae(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,ue,G,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,ue,G,0);else if(g.depthTexture.format===Yi)ae(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,ue,G,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,Ce,ue,G,0);else throw new Error("Unknown depthTexture format")}function Ve(v){const g=i.get(v),P=v.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==v.depthTexture){const k=v.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",Q)};k.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=k}if(v.depthTexture&&!g.__autoAllocateDepthBuffer)if(P)for(let k=0;k<6;k++)de(g.__webglFramebuffer[k],v,k);else{const k=v.texture.mipmaps;k&&k.length>0?de(g.__webglFramebuffer[0],v,0):de(g.__webglFramebuffer,v,0)}else if(P){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=n.createRenderbuffer(),he(g.__webglDepthbuffer[k],v,!1);else{const Q=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,G)}}else{const k=v.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),he(g.__webglDepthbuffer,v,!1);else{const Q=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(v,g,P){const k=i.get(v);g!==void 0&&Z(k.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Ve(v)}function C(v){const g=v.texture,P=i.get(v),k=i.get(g);v.addEventListener("dispose",L);const Q=v.textures,G=v.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,o.memory.textures++),G){P.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[ue]=[];for(let Ce=0;Ce<g.mipmaps.length;Ce++)P.__webglFramebuffer[ue][Ce]=n.createFramebuffer()}else P.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let ue=0;ue<g.mipmaps.length;ue++)P.__webglFramebuffer[ue]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ue=0,Ce=Q.length;ue<Ce;ue++){const Ue=i.get(Q[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&ae(v)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ue=0;ue<Q.length;ue++){const Ce=Q[ue];P.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ue]);const Ue=r.convert(Ce.format,Ce.colorSpace),ce=r.convert(Ce.type),Se=w(Ce.internalFormat,Ue,ce,Ce.colorSpace,v.isXRRenderTarget===!0),Ee=E(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Se,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,P.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),he(P.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),ze(n.TEXTURE_CUBE_MAP,g);for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ce=0;Ce<g.mipmaps.length;Ce++)Z(P.__webglFramebuffer[ue][Ce],v,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce);else Z(P.__webglFramebuffer[ue],v,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ue=0,Ce=Q.length;ue<Ce;ue++){const Ue=Q[ue],ce=i.get(Ue);let Se=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(Se=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,ce.__webglTexture),ze(Se,Ue),Z(P.__webglFramebuffer,v,Ue,n.COLOR_ATTACHMENT0+ue,Se,0),m(Ue)&&h(Se)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ue=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,k.__webglTexture),ze(ue,g),g.mipmaps&&g.mipmaps.length>0)for(let Ce=0;Ce<g.mipmaps.length;Ce++)Z(P.__webglFramebuffer[Ce],v,g,n.COLOR_ATTACHMENT0,ue,Ce);else Z(P.__webglFramebuffer,v,g,n.COLOR_ATTACHMENT0,ue,0);m(g)&&h(ue),t.unbindTexture()}v.depthBuffer&&Ve(v)}function B(v){const g=v.textures;for(let P=0,k=g.length;P<k;P++){const Q=g[P];if(m(Q)){const G=T(v),Ae=i.get(Q).__webglTexture;t.bindTexture(G,Ae),h(G),t.unbindTexture()}}}const J=[],W=[];function ee(v){if(v.samples>0){if(ae(v)===!1){const g=v.textures,P=v.width,k=v.height;let Q=n.COLOR_BUFFER_BIT;const G=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(v),ue=g.length>1;if(ue)for(let Ue=0;Ue<g.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Ce=v.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ue=0;Ue<g.length;Ue++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ue]);const ce=i.get(g[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,P,k,0,0,P,k,Q,n.NEAREST),l===!0&&(J.length=0,W.length=0,J.push(n.COLOR_ATTACHMENT0+Ue),v.depthBuffer&&v.resolveDepthBuffer===!1&&(J.push(G),W.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,W)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ue=0;Ue<g.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ue]);const ce=i.get(g[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const g=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function E(v){return Math.min(s.maxSamples,v.samples)}function ae(v){const g=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function re(v){const g=o.render.frame;u.get(v)!==g&&(u.set(v,g),v.update())}function ne(v,g){const P=v.colorSpace,k=v.format,Q=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||P!==Fs&&P!==Mi&&(tt.getTransfer(P)===at?(k!==Mn||Q!==un)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",P)),g}function oe(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=K,this.setTexture2D=ie,this.setTexture2DArray=j,this.setTexture3D=z,this.setTextureCube=te,this.rebindTextures=A,this.setupRenderTarget=C,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function LM(n,e){function t(i,s=Mi){let r;const o=tt.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yh)return n.BYTE;if(i===qh)return n.SHORT;if(i===mr)return n.UNSIGNED_SHORT;if(i===_c)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===Kh)return n.ALPHA;if(i===Zh)return n.RGB;if(i===Mn)return n.RGBA;if(i===ci)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===Jh)return n.RED;if(i===Sc)return n.RED_INTEGER;if(i===Ns)return n.RG;if(i===Mc)return n.RG_INTEGER;if(i===yc)return n.RGBA_INTEGER;if(i===lo||i===co||i===uo||i===fo)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===dl||i===pl||i===ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===_l||i===xl||i===vl||i===Sl||i===Ml||i===yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gl||i===_l)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===vl)return r.COMPRESSED_R11_EAC;if(i===Sl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ml)return r.COMPRESSED_RG11_EAC;if(i===yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===El||i===bl||i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===El)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Al)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Il)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ul)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ol||i===Bl||i===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ol)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vl||i===Hl||i===Gl||i===kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const IM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new fd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hn({vertexShader:IM,fragmentShader:UM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new Wo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FM extends es{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new NM,h={},T=t.getContextAttributes();let w=null,b=null;const R=[],D=[],L=new He;let V=null;const S=new vn;S.viewport=new Et;const y=new vn;y.viewport=new Et;const I=[S,y],K=new W_;let Y=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let X=R[F];return X===void 0&&(X=new Ca,R[F]=X),X.getTargetRaySpace()},this.getControllerGrip=function(F){let X=R[F];return X===void 0&&(X=new Ca,R[F]=X),X.getGripSpace()},this.getHand=function(F){let X=R[F];return X===void 0&&(X=new Ca,R[F]=X),X.getHandSpace()};function ie(F){const X=D.indexOf(F.inputSource);if(X===-1)return;const Z=R[X];Z!==void 0&&(Z.update(F.inputSource,F.frame,c||o),Z.dispatchEvent({type:F.type,data:F.inputSource}))}function j(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",z);for(let F=0;F<R.length;F++){const X=D[F];X!==null&&(D[F]=null,R[F].disconnect(X))}Y=null,se=null,m.reset();for(const F in h)delete h[F];e.setRenderTarget(w),p=null,d=null,f=null,s=null,b=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(V),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",j),s.addEventListener("inputsourceschange",z),T.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,he=null,de=null;T.depth&&(de=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=T.stencil?Yi:ci,he=T.stencil?gr:Vn);const Ve={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Bn(d.textureWidth,d.textureHeight,{format:Mn,type:un,depthTexture:new xr(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Z={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Bn(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(F){for(let X=0;X<F.removed.length;X++){const Z=F.removed[X],he=D.indexOf(Z);he>=0&&(D[he]=null,R[he].disconnect(Z))}for(let X=0;X<F.added.length;X++){const Z=F.added[X];let he=D.indexOf(Z);if(he===-1){for(let Ve=0;Ve<R.length;Ve++)if(Ve>=D.length){D.push(Z),he=Ve;break}else if(D[Ve]===null){D[Ve]=Z,he=Ve;break}if(he===-1)break}const de=R[he];de&&de.connect(Z)}}const te=new N,xe=new N;function ge(F,X,Z){te.setFromMatrixPosition(X.matrixWorld),xe.setFromMatrixPosition(Z.matrixWorld);const he=te.distanceTo(xe),de=X.projectionMatrix.elements,Ve=Z.projectionMatrix.elements,A=de[14]/(de[10]-1),C=de[14]/(de[10]+1),B=(de[9]+1)/de[5],J=(de[9]-1)/de[5],W=(de[8]-1)/de[0],ee=(Ve[8]+1)/Ve[0],E=A*W,ae=A*ee,re=he/(-W+ee),ne=re*-W;if(X.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ne),F.translateZ(re),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),de[10]===-1)F.projectionMatrix.copy(X.projectionMatrix),F.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const oe=A+re,v=C+re,g=E-ne,P=ae+(he-ne),k=B*C/v*oe,Q=J*C/v*oe;F.projectionMatrix.makePerspective(g,P,k,Q,oe,v),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function Me(F,X){X===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(X.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let X=F.near,Z=F.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),K.near=y.near=S.near=X,K.far=y.far=S.far=Z,(Y!==K.near||se!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),Y=K.near,se=K.far),K.layers.mask=F.layers.mask|6,S.layers.mask=K.layers.mask&3,y.layers.mask=K.layers.mask&5;const he=F.parent,de=K.cameras;Me(K,he);for(let Ve=0;Ve<de.length;Ve++)Me(de[Ve],he);de.length===2?ge(K,S,y):K.projectionMatrix.copy(S.projectionMatrix),ze(F,K,he)};function ze(F,X,Z){Z===null?F.matrix.copy(X.matrixWorld):(F.matrix.copy(Z.matrixWorld),F.matrix.invert(),F.matrix.multiply(X.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(X.projectionMatrix),F.projectionMatrixInverse.copy(X.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Xl*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(F){return h[F]};let We=null;function ft(F,X){if(u=X.getViewerPose(c||o),_=X,u!==null){const Z=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let he=!1;Z.length!==K.cameras.length&&(K.cameras.length=0,he=!0);for(let C=0;C<Z.length;C++){const B=Z[C];let J=null;if(p!==null)J=p.getViewport(B);else{const ee=f.getViewSubImage(d,B);J=ee.viewport,C===0&&(e.setRenderTargetTextures(b,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(b))}let W=I[C];W===void 0&&(W=new vn,W.layers.enable(C),W.viewport=new Et,I[C]=W),W.matrix.fromArray(B.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(B.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(J.x,J.y,J.width,J.height),C===0&&(K.matrix.copy(W.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),he===!0&&K.cameras.push(W)}const de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const C=f.getDepthInformation(Z[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(de&&de.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<Z.length;C++){const B=Z[C].camera;if(B){let J=h[B];J||(J=new fd,h[B]=J);const W=f.getCameraImage(B);J.sourceTexture=W}}}}for(let Z=0;Z<R.length;Z++){const he=D[Z],de=R[Z];he!==null&&de!==void 0&&de.update(he,X,c||o)}We&&We(F,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),_=null}const ve=new hd;ve.setAnimationLoop(ft),this.setAnimationLoop=function(F){We=F},this.dispose=function(){}}}const Vi=new ui,OM=new xt;function BM(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,sd(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,T,w,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,T,w):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Zt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Zt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const T=e.get(h),w=T.envMap,b=T.envMapRotation;w&&(m.envMap.value=w,Vi.copy(b),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(OM.makeRotationFromEuler(Vi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,T,w){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=w*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Zt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const T=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zM(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const b=w.program;i.uniformBlockBinding(T,b)}function c(T,w){let b=s[T.id];b===void 0&&(_(T),b=u(T),s[T.id]=b,T.addEventListener("dispose",m));const R=w.program;i.updateUBOMapping(T,R);const D=e.render.frame;r[T.id]!==D&&(d(T),r[T.id]=D)}function u(T){const w=f();T.__bindingPointIndex=w;const b=n.createBuffer(),R=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const w=s[T.id],b=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let D=0,L=b.length;D<L;D++){const V=Array.isArray(b[D])?b[D]:[b[D]];for(let S=0,y=V.length;S<y;S++){const I=V[S];if(p(I,D,S,R)===!0){const K=I.__offset,Y=Array.isArray(I.value)?I.value:[I.value];let se=0;for(let ie=0;ie<Y.length;ie++){const j=Y[ie],z=x(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,K+se,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,se),se+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,w,b,R){const D=T.value,L=w+"_"+b;if(R[L]===void 0)return typeof D=="number"||typeof D=="boolean"?R[L]=D:R[L]=D.clone(),!0;{const V=R[L];if(typeof D=="number"||typeof D=="boolean"){if(V!==D)return R[L]=D,!0}else if(V.equals(D)===!1)return V.copy(D),!0}return!1}function _(T){const w=T.uniforms;let b=0;const R=16;for(let L=0,V=w.length;L<V;L++){const S=Array.isArray(w[L])?w[L]:[w[L]];for(let y=0,I=S.length;y<I;y++){const K=S[y],Y=Array.isArray(K.value)?K.value:[K.value];for(let se=0,ie=Y.length;se<ie;se++){const j=Y[se],z=x(j),te=b%R,xe=te%z.boundary,ge=te+xe;b+=xe,ge!==0&&R-ge<z.storage&&(b+=R-ge),K.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=b,b+=z.storage}}}const D=b%R;return D>0&&(b+=R-D),T.__size=b,T.__cache={},this}function x(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function h(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}const VM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function HM(){return Rn===null&&(Rn=new P_(VM,16,16,Ns,li),Rn.name="DFG_LUT",Rn.minFilter=Pt,Rn.magFilter=Pt,Rn.wrapS=ti,Rn.wrapT=ti,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class GM{constructor(e={}){const{canvas:t=t_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=un}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=p,m=new Set([yc,Mc,Sc]),h=new Set([un,Vn,mr,gr,xc,vc]),T=new Uint32Array(4),w=new Int32Array(4);let b=null,R=null;const D=[],L=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let y=!1;this._outputColorSpace=ln;let I=0,K=0,Y=null,se=-1,ie=null;const j=new Et,z=new Et;let te=null;const xe=new et(0);let ge=0,Me=t.width,ze=t.height,We=1,ft=null,ve=null;const F=new Et(0,0,Me,ze),X=new Et(0,0,Me,ze);let Z=!1;const he=new cd;let de=!1,Ve=!1;const A=new xt,C=new N,B=new Et,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let W=!1;function ee(){return Y===null?We:1}let E=i;function ae(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gc}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",rt,!1),E===null){const O="webgl2";if(E=ae(O,M),E===null)throw ae(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Qe("WebGLRenderer: "+M.message),M}let re,ne,oe,v,g,P,k,Q,G,Ae,ue,Ce,Ue,ce,Se,Ee,Pe,_e,je,U,Re,pe,De,fe;function le(){re=new Hv(E),re.init(),pe=new LM(E,re),ne=new Lv(E,re,e,pe),oe=new PM(E,re),ne.reversedDepthBuffer&&d&&oe.buffers.depth.setReversed(!0),v=new Wv(E),g=new mM,P=new DM(E,re,oe,g,ne,pe,v),k=new Uv(S),Q=new Vv(S),G=new j_(E),De=new Pv(E,G),Ae=new Gv(E,G,v,De),ue=new Yv(E,Ae,G,v),je=new Xv(E,ne,P),Ee=new Iv(g),Ce=new pM(S,k,Q,re,ne,De,Ee),Ue=new BM(S,g),ce=new _M,Se=new EM(re),_e=new Cv(S,k,Q,oe,ue,_,l),Pe=new RM(S,ue,ne),fe=new zM(E,v,ne,oe),U=new Dv(E,re,v),Re=new kv(E,re,v),v.programs=Ce.programs,S.capabilities=ne,S.extensions=re,S.properties=g,S.renderLists=ce,S.shadowMap=Pe,S.state=oe,S.info=v}le(),x!==un&&(V=new jv(x,t.width,t.height,s,r));const ye=new FM(S,E);this.xr=ye,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const M=re.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=re.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(M){M!==void 0&&(We=M,this.setSize(Me,ze,!1))},this.getSize=function(M){return M.set(Me,ze)},this.setSize=function(M,O,$=!0){if(ye.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=M,ze=O,t.width=Math.floor(M*We),t.height=Math.floor(O*We),$===!0&&(t.style.width=M+"px",t.style.height=O+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Me*We,ze*We).floor()},this.setDrawingBufferSize=function(M,O,$){Me=M,ze=O,We=$,t.width=Math.floor(M*$),t.height=Math.floor(O*$),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(x===un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(F)},this.setViewport=function(M,O,$,q){M.isVector4?F.set(M.x,M.y,M.z,M.w):F.set(M,O,$,q),oe.viewport(j.copy(F).multiplyScalar(We).round())},this.getScissor=function(M){return M.copy(X)},this.setScissor=function(M,O,$,q){M.isVector4?X.set(M.x,M.y,M.z,M.w):X.set(M,O,$,q),oe.scissor(z.copy(X).multiplyScalar(We).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(M){oe.setScissorTest(Z=M)},this.setOpaqueSort=function(M){ft=M},this.setTransparentSort=function(M){ve=M},this.getClearColor=function(M){return M.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,$=!0){let q=0;if(M){let H=!1;if(Y!==null){const be=Y.texture.format;H=m.has(be)}if(H){const be=Y.texture.type,Le=h.has(be),we=_e.getClearColor(),Ie=_e.getClearAlpha(),Ne=we.r,Ge=we.g,Oe=we.b;Le?(T[0]=Ne,T[1]=Ge,T[2]=Oe,T[3]=Ie,E.clearBufferuiv(E.COLOR,0,T)):(w[0]=Ne,w[1]=Ge,w[2]=Oe,w[3]=Ie,E.clearBufferiv(E.COLOR,0,w))}else q|=E.COLOR_BUFFER_BIT}O&&(q|=E.DEPTH_BUFFER_BIT),$&&(q|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),_e.dispose(),ce.dispose(),Se.dispose(),g.dispose(),k.dispose(),Q.dispose(),ue.dispose(),De.dispose(),fe.dispose(),Ce.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Lc),ye.removeEventListener("sessionend",Ic),Di.stop()};function Xe(M){M.preventDefault(),bo("WebGLRenderer: Context Lost."),y=!0}function pt(){bo("WebGLRenderer: Context Restored."),y=!1;const M=v.autoReset,O=Pe.enabled,$=Pe.autoUpdate,q=Pe.needsUpdate,H=Pe.type;le(),v.autoReset=M,Pe.enabled=O,Pe.autoUpdate=$,Pe.needsUpdate=q,Pe.type=H}function rt(M){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function An(M){const O=M.target;O.removeEventListener("dispose",An),Gn(O)}function Gn(M){xd(M),g.remove(M)}function xd(M){const O=g.get(M).programs;O!==void 0&&(O.forEach(function($){Ce.releaseProgram($)}),M.isShaderMaterial&&Ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,$,q,H,be){O===null&&(O=J);const Le=H.isMesh&&H.matrixWorld.determinant()<0,we=Sd(M,O,$,q,H);oe.setMaterial(q,Le);let Ie=$.index,Ne=1;if(q.wireframe===!0){if(Ie=Ae.getWireframeAttribute($),Ie===void 0)return;Ne=2}const Ge=$.drawRange,Oe=$.attributes.position;let Je=Ge.start*Ne,lt=(Ge.start+Ge.count)*Ne;be!==null&&(Je=Math.max(Je,be.start*Ne),lt=Math.min(lt,(be.start+be.count)*Ne)),Ie!==null?(Je=Math.max(Je,0),lt=Math.min(lt,Ie.count)):Oe!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,Oe.count));const St=lt-Je;if(St<0||St===1/0)return;De.setup(H,q,we,$,Ie);let Mt,ht=U;if(Ie!==null&&(Mt=G.get(Ie),ht=Re,ht.setIndex(Mt)),H.isMesh)q.wireframe===!0?(oe.setLineWidth(q.wireframeLinewidth*ee()),ht.setMode(E.LINES)):ht.setMode(E.TRIANGLES);else if(H.isLine){let Be=q.linewidth;Be===void 0&&(Be=1),oe.setLineWidth(Be*ee()),H.isLineSegments?ht.setMode(E.LINES):H.isLineLoop?ht.setMode(E.LINE_LOOP):ht.setMode(E.LINE_STRIP)}else H.isPoints?ht.setMode(E.POINTS):H.isSprite&&ht.setMode(E.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)_r("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Be=H._multiDrawStarts,ot=H._multiDrawCounts,nt=H._multiDrawCount,Qt=Ie?G.get(Ie).bytesPerElement:1,ts=g.get(q).currentProgram.getUniforms();for(let en=0;en<nt;en++)ts.setValue(E,"_gl_DrawID",en),ht.render(Be[en]/Qt,ot[en])}else if(H.isInstancedMesh)ht.renderInstances(Je,St,H.count);else if($.isInstancedBufferGeometry){const Be=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ot=Math.min($.instanceCount,Be);ht.renderInstances(Je,St,ot)}else ht.render(Je,St)};function Dc(M,O,$){M.transparent===!0&&M.side===Qn&&M.forceSinglePass===!1?(M.side=Zt,M.needsUpdate=!0,Tr(M,O,$),M.side=Ci,M.needsUpdate=!0,Tr(M,O,$),M.side=Qn):Tr(M,O,$)}this.compile=function(M,O,$=null){$===null&&($=M),R=Se.get($),R.init(O),L.push(R),$.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),M!==$&&M.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),R.setupLights();const q=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const be=H.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){const we=be[Le];Dc(we,$,H),q.add(we)}else Dc(be,$,H),q.add(be)}),R=L.pop(),q},this.compileAsync=function(M,O,$=null){const q=this.compile(M,O,$);return new Promise(H=>{function be(){if(q.forEach(function(Le){g.get(Le).currentProgram.isReady()&&q.delete(Le)}),q.size===0){H(M);return}setTimeout(be,10)}re.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let qo=null;function vd(M){qo&&qo(M)}function Lc(){Di.stop()}function Ic(){Di.start()}const Di=new hd;Di.setAnimationLoop(vd),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(M){qo=M,ye.setAnimationLoop(M),M===null?Di.stop():Di.start()},ye.addEventListener("sessionstart",Lc),ye.addEventListener("sessionend",Ic),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const $=ye.enabled===!0&&ye.isPresenting===!0,q=V!==null&&(Y===null||$)&&V.begin(S,Y);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(O),O=ye.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,O,Y),R=Se.get(M,L.length),R.init(O),L.push(R),A.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),he.setFromProjectionMatrix(A,Un,O.reversedDepth),Ve=this.localClippingEnabled,de=Ee.init(this.clippingPlanes,Ve),b=ce.get(M,D.length),b.init(),D.push(b),ye.enabled===!0&&ye.isPresenting===!0){const Le=S.xr.getDepthSensingMesh();Le!==null&&jo(Le,O,-1/0,S.sortObjects)}jo(M,O,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(ft,ve),W=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,W&&_e.addToRenderList(b,M),this.info.render.frame++,de===!0&&Ee.beginShadows();const H=R.state.shadowsArray;if(Pe.render(H,M,O),de===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&V.hasRenderPass())===!1){const Le=b.opaque,we=b.transmissive;if(R.setupLights(),O.isArrayCamera){const Ie=O.cameras;if(we.length>0)for(let Ne=0,Ge=Ie.length;Ne<Ge;Ne++){const Oe=Ie[Ne];Nc(Le,we,M,Oe)}W&&_e.render(M);for(let Ne=0,Ge=Ie.length;Ne<Ge;Ne++){const Oe=Ie[Ne];Uc(b,M,Oe,Oe.viewport)}}else we.length>0&&Nc(Le,we,M,O),W&&_e.render(M),Uc(b,M,O)}Y!==null&&K===0&&(P.updateMultisampleRenderTarget(Y),P.updateRenderTargetMipmap(Y)),q&&V.end(S),M.isScene===!0&&M.onAfterRender(S,M,O),De.resetDefaultState(),se=-1,ie=null,L.pop(),L.length>0?(R=L[L.length-1],de===!0&&Ee.setGlobalState(S.clippingPlanes,R.state.camera)):R=null,D.pop(),D.length>0?b=D[D.length-1]:b=null};function jo(M,O,$,q){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)R.pushLight(M),M.castShadow&&R.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||he.intersectsSprite(M)){q&&B.setFromMatrixPosition(M.matrixWorld).applyMatrix4(A);const Le=ue.update(M),we=M.material;we.visible&&b.push(M,Le,we,$,B.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||he.intersectsObject(M))){const Le=ue.update(M),we=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),B.copy(M.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),B.copy(Le.boundingSphere.center)),B.applyMatrix4(M.matrixWorld).applyMatrix4(A)),Array.isArray(we)){const Ie=Le.groups;for(let Ne=0,Ge=Ie.length;Ne<Ge;Ne++){const Oe=Ie[Ne],Je=we[Oe.materialIndex];Je&&Je.visible&&b.push(M,Le,Je,$,B.z,Oe)}}else we.visible&&b.push(M,Le,we,$,B.z,null)}}const be=M.children;for(let Le=0,we=be.length;Le<we;Le++)jo(be[Le],O,$,q)}function Uc(M,O,$,q){const{opaque:H,transmissive:be,transparent:Le}=M;R.setupLightsView($),de===!0&&Ee.setGlobalState(S.clippingPlanes,$),q&&oe.viewport(j.copy(q)),H.length>0&&br(H,O,$),be.length>0&&br(be,O,$),Le.length>0&&br(Le,O,$),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Nc(M,O,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[q.id]===void 0){const Je=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[q.id]=new Bn(1,1,{generateMipmaps:!0,type:Je?li:un,minFilter:Xi,samples:ne.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const be=R.state.transmissionRenderTarget[q.id],Le=q.viewport||j;be.setSize(Le.z*S.transmissionResolutionScale,Le.w*S.transmissionResolutionScale);const we=S.getRenderTarget(),Ie=S.getActiveCubeFace(),Ne=S.getActiveMipmapLevel();S.setRenderTarget(be),S.getClearColor(xe),ge=S.getClearAlpha(),ge<1&&S.setClearColor(16777215,.5),S.clear(),W&&_e.render($);const Ge=S.toneMapping;S.toneMapping=On;const Oe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),R.setupLightsView(q),de===!0&&Ee.setGlobalState(S.clippingPlanes,q),br(M,$,q),P.updateMultisampleRenderTarget(be),P.updateRenderTargetMipmap(be),re.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let lt=0,St=O.length;lt<St;lt++){const Mt=O[lt],{object:ht,geometry:Be,material:ot,group:nt}=Mt;if(ot.side===Qn&&ht.layers.test(q.layers)){const Qt=ot.side;ot.side=Zt,ot.needsUpdate=!0,Fc(ht,$,q,Be,ot,nt),ot.side=Qt,ot.needsUpdate=!0,Je=!0}}Je===!0&&(P.updateMultisampleRenderTarget(be),P.updateRenderTargetMipmap(be))}S.setRenderTarget(we,Ie,Ne),S.setClearColor(xe,ge),Oe!==void 0&&(q.viewport=Oe),S.toneMapping=Ge}function br(M,O,$){const q=O.isScene===!0?O.overrideMaterial:null;for(let H=0,be=M.length;H<be;H++){const Le=M[H],{object:we,geometry:Ie,group:Ne}=Le;let Ge=Le.material;Ge.allowOverride===!0&&q!==null&&(Ge=q),we.layers.test($.layers)&&Fc(we,O,$,Ie,Ge,Ne)}}function Fc(M,O,$,q,H,be){M.onBeforeRender(S,O,$,q,H,be),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(S,O,$,q,M,be),H.transparent===!0&&H.side===Qn&&H.forceSinglePass===!1?(H.side=Zt,H.needsUpdate=!0,S.renderBufferDirect($,O,q,H,M,be),H.side=Ci,H.needsUpdate=!0,S.renderBufferDirect($,O,q,H,M,be),H.side=Qn):S.renderBufferDirect($,O,q,H,M,be),M.onAfterRender(S,O,$,q,H,be)}function Tr(M,O,$){O.isScene!==!0&&(O=J);const q=g.get(M),H=R.state.lights,be=R.state.shadowsArray,Le=H.state.version,we=Ce.getParameters(M,H.state,be,O,$),Ie=Ce.getProgramCacheKey(we);let Ne=q.programs;q.environment=M.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(M.isMeshStandardMaterial?Q:k).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",An),Ne=new Map,q.programs=Ne);let Ge=Ne.get(Ie);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===Le)return Bc(M,we),Ge}else we.uniforms=Ce.getUniforms(M),M.onBeforeCompile(we,S),Ge=Ce.acquireProgram(we,Ie),Ne.set(Ie,Ge),q.uniforms=we.uniforms;const Oe=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=Ee.uniform),Bc(M,we),q.needsLights=yd(M),q.lightsStateVersion=Le,q.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function Oc(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=po.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Bc(M,O){const $=g.get(M);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Sd(M,O,$,q,H){O.isScene!==!0&&(O=J),P.resetTextureUnits();const be=O.fog,Le=q.isMeshStandardMaterial?O.environment:null,we=Y===null?S.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Fs,Ie=(q.isMeshStandardMaterial?Q:k).get(q.envMap||Le),Ne=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ge=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Oe=!!$.morphAttributes.position,Je=!!$.morphAttributes.normal,lt=!!$.morphAttributes.color;let St=On;q.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(St=S.toneMapping);const Mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=Mt!==void 0?Mt.length:0,Be=g.get(q),ot=R.state.lights;if(de===!0&&(Ve===!0||M!==ie)){const Vt=M===ie&&q.id===se;Ee.setState(q,M,Vt)}let nt=!1;q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ot.state.version||Be.outputColorSpace!==we||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==Ie||q.fog===!0&&Be.fog!==be||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ee.numPlanes||Be.numIntersection!==Ee.numIntersection)||Be.vertexAlphas!==Ne||Be.vertexTangents!==Ge||Be.morphTargets!==Oe||Be.morphNormals!==Je||Be.morphColors!==lt||Be.toneMapping!==St||Be.morphTargetsCount!==ht)&&(nt=!0):(nt=!0,Be.__version=q.version);let Qt=Be.currentProgram;nt===!0&&(Qt=Tr(q,O,H));let ts=!1,en=!1,Vs=!1;const mt=Qt.getUniforms(),qt=Be.uniforms;if(oe.useProgram(Qt.program)&&(ts=!0,en=!0,Vs=!0),q.id!==se&&(se=q.id,en=!0),ts||ie!==M){oe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),mt.setValue(E,"projectionMatrix",M.projectionMatrix),mt.setValue(E,"viewMatrix",M.matrixWorldInverse);const jt=mt.map.cameraPosition;jt!==void 0&&jt.setValue(E,C.setFromMatrixPosition(M.matrixWorld)),ne.logarithmicDepthBuffer&&mt.setValue(E,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(E,"isOrthographic",M.isOrthographicCamera===!0),ie!==M&&(ie=M,en=!0,Vs=!0)}if(Be.needsLights&&(ot.state.directionalShadowMap.length>0&&mt.setValue(E,"directionalShadowMap",ot.state.directionalShadowMap,P),ot.state.spotShadowMap.length>0&&mt.setValue(E,"spotShadowMap",ot.state.spotShadowMap,P),ot.state.pointShadowMap.length>0&&mt.setValue(E,"pointShadowMap",ot.state.pointShadowMap,P)),H.isSkinnedMesh){mt.setOptional(E,H,"bindMatrix"),mt.setOptional(E,H,"bindMatrixInverse");const Vt=H.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),mt.setValue(E,"boneTexture",Vt.boneTexture,P))}H.isBatchedMesh&&(mt.setOptional(E,H,"batchingTexture"),mt.setValue(E,"batchingTexture",H._matricesTexture,P),mt.setOptional(E,H,"batchingIdTexture"),mt.setValue(E,"batchingIdTexture",H._indirectTexture,P),mt.setOptional(E,H,"batchingColorTexture"),H._colorsTexture!==null&&mt.setValue(E,"batchingColorTexture",H._colorsTexture,P));const on=$.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&je.update(H,$,Qt),(en||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,mt.setValue(E,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(qt.envMap.value=Ie,qt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(qt.envMapIntensity.value=O.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=HM()),en&&(mt.setValue(E,"toneMappingExposure",S.toneMappingExposure),Be.needsLights&&Md(qt,Vs),be&&q.fog===!0&&Ue.refreshFogUniforms(qt,be),Ue.refreshMaterialUniforms(qt,q,We,ze,R.state.transmissionRenderTarget[M.id]),po.upload(E,Oc(Be),qt,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(po.upload(E,Oc(Be),qt,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(E,"center",H.center),mt.setValue(E,"modelViewMatrix",H.modelViewMatrix),mt.setValue(E,"normalMatrix",H.normalMatrix),mt.setValue(E,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Vt=q.uniformsGroups;for(let jt=0,$o=Vt.length;jt<$o;jt++){const Li=Vt[jt];fe.update(Li,Qt),fe.bind(Li,Qt)}}return Qt}function Md(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function yd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(M,O,$){const q=g.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),g.get(M.texture).__webglTexture=O,g.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const $=g.get(M);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0};const Ed=E.createFramebuffer();this.setRenderTarget=function(M,O=0,$=0){Y=M,I=O,K=$;let q=null,H=!1,be=!1;if(M){const we=g.get(M);if(we.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(E.FRAMEBUFFER,we.__webglFramebuffer),j.copy(M.viewport),z.copy(M.scissor),te=M.scissorTest,oe.viewport(j),oe.scissor(z),oe.setScissorTest(te),se=-1;return}else if(we.__webglFramebuffer===void 0)P.setupRenderTarget(M);else if(we.__hasExternalTextures)P.rebindTextures(M,g.get(M.texture).__webglTexture,g.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ge=M.depthTexture;if(we.__boundDepthTexture!==Ge){if(Ge!==null&&g.has(Ge)&&(M.width!==Ge.image.width||M.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(M)}}const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);const Ne=g.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?q=Ne[O][$]:q=Ne[O],H=!0):M.samples>0&&P.useMultisampledRTT(M)===!1?q=g.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?q=Ne[$]:q=Ne,j.copy(M.viewport),z.copy(M.scissor),te=M.scissorTest}else j.copy(F).multiplyScalar(We).floor(),z.copy(X).multiplyScalar(We).floor(),te=Z;if($!==0&&(q=Ed),oe.bindFramebuffer(E.FRAMEBUFFER,q)&&oe.drawBuffers(M,q),oe.viewport(j),oe.scissor(z),oe.setScissorTest(te),H){const we=g.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,$)}else if(be){const we=O;for(let Ie=0;Ie<M.textures.length;Ie++){const Ne=g.get(M.textures[Ie]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,$,we)}}else if(M!==null&&$!==0){const we=g.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,we.__webglTexture,$)}se=-1},this.readRenderTargetPixels=function(M,O,$,q,H,be,Le,we=0){if(!(M&&M.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){oe.bindFramebuffer(E.FRAMEBUFFER,Ie);try{const Ne=M.textures[we],Ge=Ne.format,Oe=Ne.type;if(!ne.textureFormatReadable(Ge)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Oe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-q&&$>=0&&$<=M.height-H&&(M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+we),E.readPixels(O,$,q,H,pe.convert(Ge),pe.convert(Oe),be))}finally{const Ne=Y!==null?g.get(Y).__webglFramebuffer:null;oe.bindFramebuffer(E.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,O,$,q,H,be,Le,we=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie)if(O>=0&&O<=M.width-q&&$>=0&&$<=M.height-H){oe.bindFramebuffer(E.FRAMEBUFFER,Ie);const Ne=M.textures[we],Ge=Ne.format,Oe=Ne.type;if(!ne.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Je),E.bufferData(E.PIXEL_PACK_BUFFER,be.byteLength,E.STREAM_READ),M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+we),E.readPixels(O,$,q,H,pe.convert(Ge),pe.convert(Oe),0);const lt=Y!==null?g.get(Y).__webglFramebuffer:null;oe.bindFramebuffer(E.FRAMEBUFFER,lt);const St=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await n_(E,St,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Je),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,be),E.deleteBuffer(Je),E.deleteSync(St),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,$=0){const q=Math.pow(2,-$),H=Math.floor(M.image.width*q),be=Math.floor(M.image.height*q),Le=O!==null?O.x:0,we=O!==null?O.y:0;P.setTexture2D(M,0),E.copyTexSubImage2D(E.TEXTURE_2D,$,0,0,Le,we,H,be),oe.unbindTexture()};const bd=E.createFramebuffer(),Td=E.createFramebuffer();this.copyTextureToTexture=function(M,O,$=null,q=null,H=0,be=null){be===null&&(H!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=H,H=0):be=0);let Le,we,Ie,Ne,Ge,Oe,Je,lt,St;const Mt=M.isCompressedTexture?M.mipmaps[be]:M.image;if($!==null)Le=$.max.x-$.min.x,we=$.max.y-$.min.y,Ie=$.isBox3?$.max.z-$.min.z:1,Ne=$.min.x,Ge=$.min.y,Oe=$.isBox3?$.min.z:0;else{const on=Math.pow(2,-H);Le=Math.floor(Mt.width*on),we=Math.floor(Mt.height*on),M.isDataArrayTexture?Ie=Mt.depth:M.isData3DTexture?Ie=Math.floor(Mt.depth*on):Ie=1,Ne=0,Ge=0,Oe=0}q!==null?(Je=q.x,lt=q.y,St=q.z):(Je=0,lt=0,St=0);const ht=pe.convert(O.format),Be=pe.convert(O.type);let ot;O.isData3DTexture?(P.setTexture3D(O,0),ot=E.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(P.setTexture2DArray(O,0),ot=E.TEXTURE_2D_ARRAY):(P.setTexture2D(O,0),ot=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,O.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,O.unpackAlignment);const nt=E.getParameter(E.UNPACK_ROW_LENGTH),Qt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),ts=E.getParameter(E.UNPACK_SKIP_PIXELS),en=E.getParameter(E.UNPACK_SKIP_ROWS),Vs=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Mt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Mt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ne),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ge),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Oe);const mt=M.isDataArrayTexture||M.isData3DTexture,qt=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const on=g.get(M),Vt=g.get(O),jt=g.get(on.__renderTarget),$o=g.get(Vt.__renderTarget);oe.bindFramebuffer(E.READ_FRAMEBUFFER,jt.__webglFramebuffer),oe.bindFramebuffer(E.DRAW_FRAMEBUFFER,$o.__webglFramebuffer);for(let Li=0;Li<Ie;Li++)mt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,g.get(M).__webglTexture,H,Oe+Li),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,g.get(O).__webglTexture,be,St+Li)),E.blitFramebuffer(Ne,Ge,Le,we,Je,lt,Le,we,E.DEPTH_BUFFER_BIT,E.NEAREST);oe.bindFramebuffer(E.READ_FRAMEBUFFER,null),oe.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||g.has(M)){const on=g.get(M),Vt=g.get(O);oe.bindFramebuffer(E.READ_FRAMEBUFFER,bd),oe.bindFramebuffer(E.DRAW_FRAMEBUFFER,Td);for(let jt=0;jt<Ie;jt++)mt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,on.__webglTexture,H,Oe+jt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,on.__webglTexture,H),qt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Vt.__webglTexture,be,St+jt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Vt.__webglTexture,be),H!==0?E.blitFramebuffer(Ne,Ge,Le,we,Je,lt,Le,we,E.COLOR_BUFFER_BIT,E.NEAREST):qt?E.copyTexSubImage3D(ot,be,Je,lt,St+jt,Ne,Ge,Le,we):E.copyTexSubImage2D(ot,be,Je,lt,Ne,Ge,Le,we);oe.bindFramebuffer(E.READ_FRAMEBUFFER,null),oe.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else qt?M.isDataTexture||M.isData3DTexture?E.texSubImage3D(ot,be,Je,lt,St,Le,we,Ie,ht,Be,Mt.data):O.isCompressedArrayTexture?E.compressedTexSubImage3D(ot,be,Je,lt,St,Le,we,Ie,ht,Mt.data):E.texSubImage3D(ot,be,Je,lt,St,Le,we,Ie,ht,Be,Mt):M.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,be,Je,lt,Le,we,ht,Be,Mt.data):M.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,be,Je,lt,Mt.width,Mt.height,ht,Mt.data):E.texSubImage2D(E.TEXTURE_2D,be,Je,lt,Le,we,ht,Be,Mt);E.pixelStorei(E.UNPACK_ROW_LENGTH,nt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Qt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ts),E.pixelStorei(E.UNPACK_SKIP_ROWS,en),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Vs),be===0&&O.generateMipmaps&&E.generateMipmap(ot),oe.unbindTexture()},this.initRenderTarget=function(M){g.get(M).__webglFramebuffer===void 0&&P.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?P.setTextureCube(M,0):M.isData3DTexture?P.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?P.setTexture2DArray(M,0):P.setTexture2D(M,0),oe.unbindTexture()},this.resetState=function(){I=0,K=0,Y=null,oe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const Tf={type:"change"},Pc={type:"start"},_d={type:"end"},to=new ko,Af=new Kn,kM=Math.cos(70*s_.DEG2RAD),At=new N,$t=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Va=1e-6;class WM extends Y_{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ni.ROTATE,MIDDLE:ni.DOLLY,RIGHT:ni.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ji,this._lastTargetPosition=new N,this._quat=new Ji().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qu,this._sphericalDelta=new Qu,this._scale=1,this._panOffset=new N,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new N,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YM.bind(this),this._onPointerDown=XM.bind(this),this._onPointerUp=qM.bind(this),this._onContextMenu=ey.bind(this),this._onMouseWheel=KM.bind(this),this._onKeyDown=ZM.bind(this),this._onTouchStart=JM.bind(this),this._onTouchMove=QM.bind(this),this._onMouseDown=jM.bind(this),this._onMouseMove=$M.bind(this),this._interceptControlDown=ty.bind(this),this._interceptControlUp=ny.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tf),this.update(),this.state=ut.NONE}update(e=null){const t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$t:i>Math.PI&&(i-=$t),s<-Math.PI?s+=$t:s>Math.PI&&(s-=$t),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=At.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(to.origin.copy(this.object.position),to.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(to.direction))<kM?this.object.lookAt(this.target):(Af.setFromNormalAndCoplanarPoint(this.object.up,this.target),to.intersectPlane(Af,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Va||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Va||this._lastTargetPosition.distanceToSquared(this.target)>Va?(this.dispatchEvent(Tf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;At.copy(s).sub(this.target);let r=At.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new He,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function XM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function YM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function qM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_d),this.state=ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function jM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ut.DOLLY;break;case ni.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}break;case ni.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Pc)}function $M(n){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function KM(n){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(n.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_d))}function ZM(n){this.enabled!==!1&&this._handleKeyDown(n)}function JM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ut.TOUCH_ROTATE;break;case Ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ut.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Pc)}function QM(n){switch(this._trackPointer(n),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ut.NONE}}function ey(n){this.enabled!==!1&&n.preventDefault()}function ty(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ny(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ms={object:"#f97316",array:"#06b6d4",string:"#10b981",number:"#6366f1",boolean:"#ec4899",null:"#64748b"},Hi=.5,iy=6,ys=1.6;function sy(n){const e=Fn({isInitialized:!1,hoveredNode:null,zoomLevel:1,isDragging:!1});let t=null,i=null,s=null,r=null,o=null,a=new Map,l=null,c=null,u=null,f=null,d=!1,p=null,_=new Kn(new N(0,0,1),0),x=new N;const m=[];function h(ve,F=26,X="#ffffff"){const Z=document.createElement("canvas"),he=Z.getContext("2d");Z.width=512,Z.height=72,he.clearRect(0,0,Z.width,Z.height),he.fillStyle="rgba(15, 23, 42, 0.9)",he.beginPath(),he.roundRect(0,0,Z.width,Z.height,12),he.fill(),he.strokeStyle=X,he.lineWidth=3,he.beginPath(),he.roundRect(2,2,Z.width-4,Z.height-4,10),he.stroke(),he.font=`bold ${F}px "Segoe UI", system-ui, sans-serif`,he.fillStyle="#ffffff",he.textAlign="left",he.textBaseline="middle";const de=ve.length>22?ve.slice(0,22)+"...":ve;he.fillText(de,16,Z.height/2);const Ve=new Ku(Z);Ve.minFilter=Pt,Ve.magFilter=Pt;const A=new Yl({map:Ve,transparent:!0});m.push(A,Ve);const C=new Yu(A);return C.scale.set(5,.7,1),C}function T(ve,F){const X=document.createElement("canvas"),Z=X.getContext("2d");X.width=64,X.height=64,Z.fillStyle=F,Z.beginPath(),Z.arc(32,32,28,0,Math.PI*2),Z.fill(),Z.fillStyle="#ffffff",Z.font="bold 40px Arial",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(ve?"−":"+",32,30);const he=new Ku(X),de=new Yl({map:he,transparent:!0});m.push(de,he);const Ve=new Yu(de);return Ve.scale.set(.7,.7,1),Ve}function w(ve,F,X){const Z=Ms[ve.type]||Ms.null,he=new qi;he.position.set(F,X,0);const de=new wc(Hi,48),Ve=new To({color:new et(Z)});m.push(de,Ve);const A=new Tn(de,Ve);A.position.set(0,0,.1),he.add(A);const C=new Rc(Hi,Hi+.2,48),B=new To({color:new et(Z),transparent:!0,opacity:.5});m.push(C,B);const J=new Tn(C,B);J.position.set(0,0,0),he.add(J);const W=`${ve.name}: ${ve.value}`,ee=h(W,24,Z);ee.position.set(3.5,0,.1),he.add(ee);let E=null;ve.children.length>0&&(E=T(ve.isExpanded,Z),E.position.set(Hi+.5,Hi+.3,.2),he.add(E)),t?.add(he);const ae={group:he,mesh:A,node:ve,label:ee,expandIcon:E,glow:J,edges:[],worldX:F,worldY:X};return a.set(ve.id,ae),ae}function b(ve,F){const X=ve.worldX,Z=ve.worldY,he=F.worldX,de=F.worldY,Ve=Ms[ve.node.type]||Ms.null,A=X+(he-X)*.5,B=new V_(new N(X+Hi,Z,0),new N(A,Z,0),new N(A,de,0),new N(he-Hi,de,0)).getPoints(40),J=new Jt().setFromPoints(B),W=new ud({color:new et(Ve),transparent:!0,opacity:.7,linewidth:2});m.push(J,W);const ee=new $u(J,W);return l?.add(ee),ve.edges.push(ee),ee}function R(ve,F,X){const Z=new Map;function he(A){if(!A.isExpanded||A.children.length===0)return ys;let C=0;return A.children.forEach(B=>{C+=he(B)}),Math.max(ys,C)}function de(A,C,B){if(Z.set(A.id,{x:C,y:B}),!A.isExpanded||A.children.length===0)return ys;const J=C+iy;let W=B;const ee=A.children.map(ae=>he(ae)),E=ee.reduce((ae,re)=>ae+re,0);return W=B+(E-ys)/2,A.children.forEach((ae,re)=>{const ne=ee[re]??ys;de(ae,J,W-ne/2+ys/2),W-=ne}),E}return{height:de(ve,F,X),positions:Z}}function D(){if(!t||!f)return;a.forEach(Z=>{t?.remove(Z.group)}),a.clear(),l&&t.remove(l),l=new qi,t.add(l);const{positions:ve}=R(f,0,0);function F(Z){const he=ve.get(Z.id);he&&w(Z,he.x,he.y),Z.isExpanded&&Z.children.forEach(de=>F(de))}F(f);function X(Z){const he=a.get(Z.id);!he||!Z.isExpanded||Z.children.forEach(de=>{const Ve=a.get(de.id);Ve&&(b(he,Ve),X(de))})}X(f)}function L(ve){if(!n.value)return;f=ve;const F=n.value,X=F.clientWidth,Z=F.clientHeight,he=X/Z,de=12;i=new Cc(-de*he,de*he,de,-de,.1,1e3),i.position.set(6,0,50),t=new R_,t.background=new et(988970),s=new GM({antialias:!0,alpha:!0}),s.setSize(X,Z),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.appendChild(s.domElement),r=new WM(i,s.domElement),r.enableRotate=!1,r.enablePan=!0,r.enableZoom=!0,r.enableDamping=!0,r.dampingFactor=.1,r.minZoom=.2,r.maxZoom=5,r.mouseButtons={LEFT:ni.PAN,MIDDLE:ni.DOLLY,RIGHT:ni.PAN},r.touches={ONE:Ei.PAN,TWO:Ei.DOLLY_PAN},r.panSpeed=1.2,r.zoomSpeed=1,c=new X_,u=new He,l=new qi,t.add(l),D(),F.addEventListener("mousedown",y),F.addEventListener("mousemove",I),F.addEventListener("mouseup",K),F.addEventListener("click",se),window.addEventListener("resize",ie),e.value.isInitialized=!0,j()}function V(){if(!c||!i||!u)return null;c.setFromCamera(u,i);const ve=Array.from(a.values()).map(X=>X.mesh),F=c.intersectObjects(ve);if(F.length>0){const X=F[0]?.object;for(const[,Z]of a)if(Z.mesh===X)return Z}return null}function S(ve){if(!n.value||!u)return;const F=n.value.getBoundingClientRect();u.x=(ve.clientX-F.left)/F.width*2-1,u.y=-((ve.clientY-F.top)/F.height)*2+1}function y(ve){if(ve.button!==0)return;S(ve);const F=V();if(F&&c&&i){d=!0,p=F,e.value.isDragging=!0,r&&(r.enabled=!1);const X=new N;c.ray.intersectPlane(_,X),x.copy(X).sub(F.group.position),n.value&&(n.value.style.cursor="grabbing"),ve.preventDefault(),ve.stopPropagation()}}function I(ve){if(S(ve),d&&p&&c&&i){const X=new N;c.setFromCamera(u,i),c.ray.intersectPlane(_,X);const Z=X.sub(x);p.group.position.set(Z.x,Z.y,0),p.worldX=Z.x,p.worldY=Z.y,Y();return}const F=V();if(a.forEach(X=>{const Z=X.mesh.material,he=Ms[X.node.type]||Ms.null;Z.color.setStyle(he);const de=X.glow.material;de.opacity=.5}),F){F.mesh.material.color.setHex(16777215);const Z=F.glow.material;Z.opacity=.9,e.value.hoveredNode=F.node,n.value&&(n.value.style.cursor="grab")}else e.value.hoveredNode=null,n.value&&(n.value.style.cursor="default")}function K(){d&&(d=!1,p=null,e.value.isDragging=!1,r&&(r.enabled=!0),n.value&&(n.value.style.cursor="default"))}function Y(){if(!l)return;for(;l.children.length>0;){const F=l.children[0];F&&(l.remove(F),F instanceof $u&&F.geometry.dispose())}a.forEach(F=>{F.edges=[]});function ve(F){const X=a.get(F.id);!X||!F.isExpanded||F.children.forEach(Z=>{const he=a.get(Z.id);he&&(b(X,he),ve(Z))})}f&&ve(f)}function se(ve){if(e.value.isDragging)return;S(ve);const F=V();F&&F.node.children.length>0&&(F.node.isExpanded=!F.node.isExpanded,D())}function ie(){if(!n.value||!i||!s)return;const ve=n.value.clientWidth,F=n.value.clientHeight,X=ve/F,Z=12;i.left=-Z*X,i.right=Z*X,i.top=Z,i.bottom=-Z,i.updateProjectionMatrix(),s.setSize(ve,F)}function j(){!s||!t||!i||!r||(o=requestAnimationFrame(j),d||r.update(),i&&(e.value.zoomLevel=i.zoom),s.render(t,i))}function z(){i&&(i.zoom=Math.min(i.zoom*1.3,5),i.updateProjectionMatrix())}function te(){i&&(i.zoom=Math.max(i.zoom/1.3,.2),i.updateProjectionMatrix())}function xe(){r&&i&&(i.position.set(6,0,50),i.zoom=1,i.updateProjectionMatrix(),r.target.set(0,0,0),r.update(),D())}function ge(ve){ve.isExpanded=!0,ve.children.forEach(ge)}function Me(ve){ve.isExpanded=!1,ve.children.forEach(Me)}function ze(){f&&(ge(f),D())}function We(){f&&(Me(f),f.isExpanded=!0,D())}function ft(){o!==null&&cancelAnimationFrame(o),n.value&&(n.value.removeEventListener("mousedown",y),n.value.removeEventListener("mousemove",I),n.value.removeEventListener("mouseup",K),n.value.removeEventListener("click",se)),window.removeEventListener("resize",ie),m.forEach(ve=>ve.dispose()),m.length=0,s&&(s.dispose(),n.value&&s.domElement.parentNode===n.value&&n.value.removeChild(s.domElement)),r&&r.dispose(),t=null,i=null,s=null,r=null,a.clear(),l=null,c=null,u=null,f=null,d=!1,p=null,e.value.isInitialized=!1,e.value.hoveredNode=null,e.value.isDragging=!1}return{state:e,initialize:L,dispose:ft,zoomIn:z,zoomOut:te,resetView:xe,expandAll:ze,collapseAll:We}}const ry={key:0,class:"fixed inset-0 z-50 flex items-center justify-center"},oy={class:"relative z-10 w-[95vw] h-[90vh] bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700"},ay={class:"absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-slate-900 via-slate-900/95 to-transparent"},ly={class:"flex items-center gap-4"},cy={class:"flex items-center gap-2"},uy={class:"text-slate-300 text-sm px-2 min-w-[3.5rem] text-center font-medium"},fy={class:"flex items-center gap-2"},hy={key:0,class:"absolute bottom-4 left-4 z-20 bg-slate-800/95 text-white px-4 py-3 rounded-xl shadow-xl max-w-sm backdrop-blur-sm border border-slate-700"},dy={class:"flex items-center gap-2 mb-1"},py={class:"text-xs uppercase tracking-wider text-slate-400 font-medium"},my={class:"font-semibold text-white"},gy={class:"text-sm text-slate-300 mt-1 break-all line-clamp-3"},_y=Sr({__name:"JsonTreeModal",props:{isOpen:{type:Boolean},jsonData:{type:[String,Number,Boolean,null,Object]}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,s=Fn(null),{state:r,initialize:o,dispose:a,zoomIn:l,zoomOut:c,resetView:u,expandAll:f,collapseAll:d}=sy(s);function p(){a(),i("close")}function _(x){x.key==="Escape"&&p()}return Ki(()=>t.isOpen,async x=>{if(x&&t.jsonData!==null){await Jf();const m=Mg(t.jsonData);o(m),window.addEventListener("keydown",_)}else window.removeEventListener("keydown",_),a()}),(x,m)=>(_t(),zo(yp,{to:"body"},[n.isOpen?(_t(),yt("div",ry,[me("div",{class:"absolute inset-0 bg-black/70 backdrop-blur-sm",onClick:p}),me("div",oy,[me("div",ay,[me("div",ly,[m[8]||(m[8]=me("h2",{class:"text-white font-semibold text-lg"},"JSON Tree View",-1)),me("div",cy,[me("button",{class:"p-2 text-white bg-slate-600 hover:bg-slate-700 rounded-lg transition-colors",title:"Zoom Out",onClick:m[0]||(m[0]=(...h)=>Fe(c)&&Fe(c)(...h))},[...m[5]||(m[5]=[me("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[me("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"})],-1)])]),me("span",uy,cn(Math.round(Fe(r).zoomLevel*100))+"% ",1),me("button",{class:"p-2 text-white bg-slate-600 hover:bg-slate-700 rounded-lg transition-colors",title:"Zoom In",onClick:m[1]||(m[1]=(...h)=>Fe(l)&&Fe(l)(...h))},[...m[6]||(m[6]=[me("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[me("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"})],-1)])]),me("button",{class:"p-2 text-white bg-slate-600 hover:bg-slate-700 rounded-lg transition-colors",title:"Reset View",onClick:m[2]||(m[2]=(...h)=>Fe(u)&&Fe(u)(...h))},[...m[7]||(m[7]=[me("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[me("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])])]),me("div",fy,[me("button",{class:"px-4 py-2 text-white bg-slate-600 hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium",title:"Expand All Nodes",onClick:m[3]||(m[3]=(...h)=>Fe(f)&&Fe(f)(...h))}," Expand All "),me("button",{class:"px-4 py-2 text-white bg-slate-600 hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium",title:"Collapse All Nodes",onClick:m[4]||(m[4]=(...h)=>Fe(d)&&Fe(d)(...h))}," Collapse All ")])]),me("button",{class:"p-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors",onClick:p},[...m[9]||(m[9]=[me("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[me("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),m[10]||(m[10]=me("div",{class:"absolute bottom-4 right-4 z-20 text-slate-400 text-xs bg-slate-800/90 px-3 py-2 rounded-lg backdrop-blur-sm"},[me("span",{class:"text-slate-500"},"Drag background"),yi(" to pan "),me("span",{class:"mx-2 text-slate-600"},"|"),me("span",{class:"text-slate-500"},"Drag node"),yi(" to move "),me("span",{class:"mx-2 text-slate-600"},"|"),me("span",{class:"text-slate-500"},"Scroll"),yi(" to zoom "),me("span",{class:"mx-2 text-slate-600"},"|"),me("span",{class:"text-slate-500"},"Click node"),yi(" to expand ")],-1)),Fe(r).hoveredNode?(_t(),yt("div",hy,[me("div",dy,[me("span",{class:ei(["w-3 h-3 rounded-full",{"bg-orange-500":Fe(r).hoveredNode.type==="object","bg-cyan-500":Fe(r).hoveredNode.type==="array","bg-emerald-500":Fe(r).hoveredNode.type==="string","bg-indigo-500":Fe(r).hoveredNode.type==="number","bg-pink-500":Fe(r).hoveredNode.type==="boolean","bg-slate-500":Fe(r).hoveredNode.type==="null"}])},null,2),me("span",py,cn(Fe(r).hoveredNode.type),1)]),me("p",my,cn(Fe(r).hoveredNode.name),1),me("p",gy,cn(Fe(r).hoveredNode.value),1)])):Ai("",!0),me("div",{ref_key:"containerRef",ref:s,class:"w-full h-full"},null,512)])])):Ai("",!0)]))}}),xy=Uh(_y,[["__scopeId","data-v-df39a598"]]),vy={class:"flex flex-col h-full"},Sy={class:"mb-3 flex items-center justify-between flex-wrap gap-2"},My={key:0,class:"flex items-center gap-2"},yy={class:"flex-1 overflow-auto bg-white rounded-lg border border-gray-200 shadow-inner"},Ey={key:0,class:"p-4 text-red-600"},by={class:"flex items-start gap-3"},Ty={class:"text-sm mt-1 text-red-500"},Ay={key:1,class:"text-gray-400 text-center py-12 px-4"},wy={key:2,class:"p-4"},Ry=Sr({__name:"JsonViewer",props:{jsonText:{}},setup(n){const e=n,{parsedData:t,errorMessage:i,setJsonText:s}=Ih(e.jsonText);Ki(()=>e.jsonText,m=>{s(m)});const r=Sn(()=>t.value!==null),o=Sn(()=>i.value!==null),a=Sn(()=>!e.jsonText.trim()),l=Fn(!1),c=Fn(0),u=Fn(2);function f(){l.value=!0}function d(){l.value=!1}function p(){u.value=999,c.value++}function _(){u.value=0,c.value++}function x(){u.value=2,c.value++}return(m,h)=>(_t(),yt("div",vy,[me("div",Sy,[h[4]||(h[4]=me("h2",{class:"text-xl font-bold text-gray-800"},"JSON Viewer",-1)),r.value?(_t(),yt("div",My,[me("div",{class:"flex items-center gap-2"},[me("button",{class:"p-2 text-white font-medium bg-slate-600 hover:bg-slate-700 transition-colors rounded-lg",title:"Expandir todo",onClick:p},[...h[0]||(h[0]=[me("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[me("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"})],-1)])]),me("button",{class:"p-2 text-white font-medium bg-slate-600 hover:bg-slate-700 transition-colors rounded-lg",title:"Colapsar todo",onClick:_},[...h[1]||(h[1]=[me("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[me("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"})],-1)])]),me("button",{class:"p-2 text-white font-medium bg-slate-600 hover:bg-slate-700 transition-colors rounded-lg",title:"Resetear vista",onClick:x},[...h[2]||(h[2]=[me("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[me("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])])]),me("button",{class:"px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2",onClick:f},[...h[3]||(h[3]=[me("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[me("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"})],-1),yi(" 3D ",-1)])])])):Ai("",!0)]),me("div",yy,[o.value?(_t(),yt("div",Ey,[me("div",by,[h[6]||(h[6]=me("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 flex-shrink-0 mt-0.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[me("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),me("div",null,[h[5]||(h[5]=me("p",{class:"font-semibold"},"Error de sintaxis JSON",-1)),me("p",Ty,cn(Fe(i)),1)])])])):a.value?(_t(),yt("div",Ay,[...h[7]||(h[7]=[me("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12 mx-auto mb-3 text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[me("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})],-1),me("p",{class:"font-medium"},"Sin datos JSON",-1),me("p",{class:"text-sm mt-1"},"Ingresa JSON valido en el panel izquierdo",-1)])])):r.value?(_t(),yt("div",wy,[(_t(),zo(xg,{key:c.value,data:Fe(t),name:"root",isRoot:!0,depth:0,initialExpandDepth:u.value},null,8,["data","initialExpandDepth"]))])):Ai("",!0)]),dn(xy,{isOpen:l.value,jsonData:Fe(t),onClose:d},null,8,["isOpen","jsonData"])]))}}),Cy={class:"h-screen w-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6"},Py={class:"h-full max-w-[1600px] mx-auto flex flex-col"},Dy={class:"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden"},Ly={class:"bg-white rounded-xl shadow-lg p-6 flex flex-col overflow-hidden"},Iy={class:"bg-white rounded-xl shadow-lg p-6 flex flex-col overflow-hidden"},Uy=Sr({__name:"App",setup(n){const e=Fn("");return(t,i)=>(_t(),yt("div",Cy,[me("div",Py,[i[1]||(i[1]=me("header",{class:"mb-6"},[me("h1",{class:"text-4xl font-bold text-gray-800 text-center"}," JSON Visualizer "),me("p",{class:"text-center text-gray-600 mt-2"}," Visualiza JSON de forma interactiva en tiempo real ")],-1)),me("div",Dy,[me("div",Ly,[dn(rg,{modelValue:e.value,"onUpdate:modelValue":i[0]||(i[0]=s=>e.value=s)},null,8,["modelValue"])]),me("div",Iy,[dn(Ry,{jsonText:e.value},null,8,["jsonText"])])])])]))}});Zm(Uy).mount("#app");
