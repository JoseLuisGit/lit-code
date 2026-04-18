(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Pc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const gt={},Ls=[],Xn=()=>{},xf=()=>!1,Ja=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Dc=n=>n.startsWith("onUpdate:"),It=Object.assign,Lc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Dp=Object.prototype.hasOwnProperty,at=(n,e)=>Dp.call(n,e),Ge=Array.isArray,Is=n=>Za(n)==="[object Map]",yf=n=>Za(n)==="[object Set]",$e=n=>typeof n=="function",Tt=n=>typeof n=="string",Ii=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",Mf=n=>(Mt(n)||$e(n))&&$e(n.then)&&$e(n.catch),Sf=Object.prototype.toString,Za=n=>Sf.call(n),Lp=n=>Za(n).slice(8,-1),bf=n=>Za(n)==="[object Object]",Ic=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,hr=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Ip=/-\w/g,An=Qa(n=>n.replace(Ip,e=>e.slice(1).toUpperCase())),Np=/\B([A-Z])/g,Ni=Qa(n=>n.replace(Np,"-$1").toLowerCase()),eo=Qa(n=>n.charAt(0).toUpperCase()+n.slice(1)),bo=Qa(n=>n?`on${eo(n)}`:""),Ri=(n,e)=>!Object.is(n,e),Ma=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ef=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Nc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Up=n=>{const e=Tt(n)?Number(n):NaN;return isNaN(e)?n:e};let Su;const to=()=>Su||(Su=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function no(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Tt(i)?zp(i):no(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Tt(n)||Mt(n))return n}const Fp=/;(?![^(]*\))/g,Op=/:([^]+)/,Bp=/\/\*[^]*?\*\//g;function zp(n){const e={};return n.replace(Bp,"").split(Fp).forEach(t=>{if(t){const i=t.split(Op);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ae(n){let e="";if(Tt(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=Ae(n[t]);i&&(e+=i+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const kp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vp=Pc(kp);function Tf(n){return!!n||n===""}const wf=n=>!!(n&&n.__v_isRef===!0),Pt=n=>Tt(n)?n:n==null?"":Ge(n)||Mt(n)&&(n.toString===Sf||!$e(n.toString))?wf(n)?Pt(n.value):JSON.stringify(n,Af,2):String(n),Af=(n,e)=>wf(e)?Af(n,e.value):Is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Eo(i,r)+" =>"]=s,t),{})}:yf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Eo(t))}:Ii(e)?Eo(e):Mt(e)&&!Ge(e)&&!bf(e)?String(e):e,Eo=(n,e="")=>{var t;return Ii(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let rn;class Hp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rn,!e&&rn&&(this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=rn;try{return rn=this,e()}finally{rn=t}}}on(){++this._on===1&&(this.prevScope=rn,rn=this)}off(){this._on>0&&--this._on===0&&(rn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Gp(){return rn}let xt;const To=new WeakSet;class Cf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rn&&rn.active&&rn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,To.has(this)&&(To.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bu(this),Df(this);const e=xt,t=Ln;xt=this,Ln=!0;try{return this.fn()}finally{Lf(this),xt=e,Ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Oc(e);this.deps=this.depsTail=void 0,bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?To.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xl(this)&&this.run()}get dirty(){return xl(this)}}let Rf=0,fr,dr;function Pf(n,e=!1){if(n.flags|=8,e){n.next=dr,dr=n;return}n.next=fr,fr=n}function Uc(){Rf++}function Fc(){if(--Rf>0)return;if(dr){let e=dr;for(dr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;fr;){let e=fr;for(fr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Df(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Oc(i),Wp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function xl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(If(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function If(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Sr)||(n.globalVersion=Sr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!xl(n))))return;n.flags|=2;const e=n.dep,t=xt,i=Ln;xt=n,Ln=!0;try{Df(n);const s=n.fn(n._value);(e.version===0||Ri(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{xt=t,Ln=i,Lf(n),n.flags&=-3}}function Oc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Oc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Wp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ln=!0;const Nf=[];function hi(){Nf.push(Ln),Ln=!1}function fi(){const n=Nf.pop();Ln=n===void 0?!0:n}function bu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=xt;xt=void 0;try{e()}finally{xt=t}}}let Sr=0;class Xp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xt||!Ln||xt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==xt)t=this.activeLink=new Xp(xt,this),xt.deps?(t.prevDep=xt.depsTail,xt.depsTail.nextDep=t,xt.depsTail=t):xt.deps=xt.depsTail=t,Uf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=xt.depsTail,t.nextDep=void 0,xt.depsTail.nextDep=t,xt.depsTail=t,xt.deps===t&&(xt.deps=i)}return t}trigger(e){this.version++,Sr++,this.notify(e)}notify(e){Uc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Fc()}}}function Uf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Uf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const yl=new WeakMap,es=Symbol(""),Ml=Symbol(""),br=Symbol("");function Gt(n,e,t){if(Ln&&xt){let i=yl.get(n);i||yl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Bc),s.map=i,s.key=t),s.track()}}function oi(n,e,t,i,s,r){const a=yl.get(n);if(!a){Sr++;return}const o=l=>{l&&l.trigger()};if(Uc(),e==="clear")a.forEach(o);else{const l=Ge(n),c=l&&Ic(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,d)=>{(d==="length"||d===br||!Ii(d)&&d>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(br)),e){case"add":l?c&&o(a.get("length")):(o(a.get(es)),Is(n)&&o(a.get(Ml)));break;case"delete":l||(o(a.get(es)),Is(n)&&o(a.get(Ml)));break;case"set":Is(n)&&o(a.get(es));break}}Fc()}function ls(n){const e=rt(n);return e===n?e:(Gt(e,"iterate",br),wn(n)?e:e.map(In))}function io(n){return Gt(n=rt(n),"iterate",br),n}function Ei(n,e){return di(n)?ks(ts(n)?In(e):e):In(e)}const jp={__proto__:null,[Symbol.iterator](){return wo(this,Symbol.iterator,n=>Ei(this,n))},concat(...n){return ls(this).concat(...n.map(e=>Ge(e)?ls(e):e))},entries(){return wo(this,"entries",n=>(n[1]=Ei(this,n[1]),n))},every(n,e){return Jn(this,"every",n,e,void 0,arguments)},filter(n,e){return Jn(this,"filter",n,e,t=>t.map(i=>Ei(this,i)),arguments)},find(n,e){return Jn(this,"find",n,e,t=>Ei(this,t),arguments)},findIndex(n,e){return Jn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Jn(this,"findLast",n,e,t=>Ei(this,t),arguments)},findLastIndex(n,e){return Jn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Jn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ao(this,"includes",n)},indexOf(...n){return Ao(this,"indexOf",n)},join(n){return ls(this).join(n)},lastIndexOf(...n){return Ao(this,"lastIndexOf",n)},map(n,e){return Jn(this,"map",n,e,void 0,arguments)},pop(){return Js(this,"pop")},push(...n){return Js(this,"push",n)},reduce(n,...e){return Eu(this,"reduce",n,e)},reduceRight(n,...e){return Eu(this,"reduceRight",n,e)},shift(){return Js(this,"shift")},some(n,e){return Jn(this,"some",n,e,void 0,arguments)},splice(...n){return Js(this,"splice",n)},toReversed(){return ls(this).toReversed()},toSorted(n){return ls(this).toSorted(n)},toSpliced(...n){return ls(this).toSpliced(...n)},unshift(...n){return Js(this,"unshift",n)},values(){return wo(this,"values",n=>Ei(this,n))}};function wo(n,e,t){const i=io(n),s=i[e]();return i!==n&&!wn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Yp=Array.prototype;function Jn(n,e,t,i,s,r){const a=io(n),o=a!==n&&!wn(n),l=a[e];if(l!==Yp[e]){const h=l.apply(n,r);return o?In(h):h}let c=t;a!==n&&(o?c=function(h,d){return t.call(this,Ei(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Eu(n,e,t,i){const s=io(n);let r=t;return s!==n&&(wn(n)?t.length>3&&(r=function(a,o,l){return t.call(this,a,o,l,n)}):r=function(a,o,l){return t.call(this,a,Ei(n,o),l,n)}),s[e](r,...i)}function Ao(n,e,t){const i=rt(n);Gt(i,"iterate",br);const s=i[e](...t);return(s===-1||s===!1)&&Hc(t[0])?(t[0]=rt(t[0]),i[e](...t)):s}function Js(n,e,t=[]){hi(),Uc();const i=rt(n)[e].apply(n,t);return Fc(),fi(),i}const qp=Pc("__proto__,__v_isRef,__isVue"),Ff=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ii));function $p(n){Ii(n)||(n=String(n));const e=rt(this);return Gt(e,"has",n),e.hasOwnProperty(n)}class Of{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?rm:Vf:r?kf:zf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ge(e);if(!s){let l;if(a&&(l=jp[t]))return l;if(t==="hasOwnProperty")return $p}const o=Reflect.get(e,t,zt(e)?e:i);if((Ii(t)?Ff.has(t):qp(t))||(s||Gt(e,"get",t),r))return o;if(zt(o)){const l=a&&Ic(t)?o:o.value;return s&&Mt(l)?bl(l):l}return Mt(o)?s?bl(o):kc(o):o}}class Bf extends Of{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=Ge(e)&&Ic(t);if(!this._isShallow){const c=di(r);if(!wn(i)&&!di(i)&&(r=rt(r),i=rt(i)),!a&&zt(r)&&!zt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:at(e,t),l=Reflect.set(e,t,i,zt(e)?e:s);return e===rt(s)&&(o?Ri(i,r)&&oi(e,"set",t,i):oi(e,"add",t,i)),l}deleteProperty(e,t){const i=at(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&oi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Ii(t)||!Ff.has(t))&&Gt(e,"has",t),i}ownKeys(e){return Gt(e,"iterate",Ge(e)?"length":es),Reflect.ownKeys(e)}}class Kp extends Of{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Jp=new Bf,Zp=new Kp,Qp=new Bf(!0);const Sl=n=>n,Hr=n=>Reflect.getPrototypeOf(n);function em(n,e,t){return function(...i){const s=this.__v_raw,r=rt(s),a=Is(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Sl:e?ks:In;return!e&&Gt(r,"iterate",l?Ml:es),It(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function Gr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function tm(n,e){const t={get(s){const r=this.__v_raw,a=rt(r),o=rt(s);n||(Ri(s,o)&&Gt(a,"get",s),Gt(a,"get",o));const{has:l}=Hr(a),c=e?Sl:n?ks:In;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Gt(rt(s),"iterate",es),s.size},has(s){const r=this.__v_raw,a=rt(r),o=rt(s);return n||(Ri(s,o)&&Gt(a,"has",s),Gt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=rt(o),c=e?Sl:n?ks:In;return!n&&Gt(l,"iterate",es),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return It(t,n?{add:Gr("add"),set:Gr("set"),delete:Gr("delete"),clear:Gr("clear")}:{add(s){!e&&!wn(s)&&!di(s)&&(s=rt(s));const r=rt(this);return Hr(r).has.call(r,s)||(r.add(s),oi(r,"add",s,s)),this},set(s,r){!e&&!wn(r)&&!di(r)&&(r=rt(r));const a=rt(this),{has:o,get:l}=Hr(a);let c=o.call(a,s);c||(s=rt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Ri(r,u)&&oi(a,"set",s,r):oi(a,"add",s,r),this},delete(s){const r=rt(this),{has:a,get:o}=Hr(r);let l=a.call(r,s);l||(s=rt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&oi(r,"delete",s,void 0),c},clear(){const s=rt(this),r=s.size!==0,a=s.clear();return r&&oi(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=em(s,n,e)}),t}function zc(n,e){const t=tm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(at(t,s)&&s in i?t:i,s,r)}const nm={get:zc(!1,!1)},im={get:zc(!1,!0)},sm={get:zc(!0,!1)};const zf=new WeakMap,kf=new WeakMap,Vf=new WeakMap,rm=new WeakMap;function am(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function om(n){return n.__v_skip||!Object.isExtensible(n)?0:am(Lp(n))}function kc(n){return di(n)?n:Vc(n,!1,Jp,nm,zf)}function lm(n){return Vc(n,!1,Qp,im,kf)}function bl(n){return Vc(n,!0,Zp,sm,Vf)}function Vc(n,e,t,i,s){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=om(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:t);return s.set(n,o),o}function ts(n){return di(n)?ts(n.__v_raw):!!(n&&n.__v_isReactive)}function di(n){return!!(n&&n.__v_isReadonly)}function wn(n){return!!(n&&n.__v_isShallow)}function Hc(n){return n?!!n.__v_raw:!1}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function cm(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&Ef(n,"__v_skip",!0),n}const In=n=>Mt(n)?kc(n):n,ks=n=>Mt(n)?bl(n):n;function zt(n){return n?n.__v_isRef===!0:!1}function Dt(n){return um(n,!1)}function um(n,e){return zt(n)?n:new hm(n,e)}class hm{constructor(e,t){this.dep=new Bc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:rt(e),this._value=t?e:In(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||wn(e)||di(e);e=i?e:rt(e),Ri(e,t)&&(this._rawValue=e,this._value=i?e:In(e),this.dep.trigger())}}function ue(n){return zt(n)?n.value:n}const fm={get:(n,e,t)=>e==="__v_raw"?n:ue(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return zt(s)&&!zt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Hf(n){return ts(n)?n:new Proxy(n,fm)}class dm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Bc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return Pf(this,!0),!0}get value(){const e=this.dep.track();return If(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pm(n,e,t=!1){let i,s;return $e(n)?i=n:(i=n.get,s=n.set),new dm(i,s,t)}const Wr={},Fa=new WeakMap;let Yi;function mm(n,e=!1,t=Yi){if(t){let i=Fa.get(t);i||Fa.set(t,i=[]),i.push(n)}}function gm(n,e,t=gt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=b=>s?b:wn(b)||s===!1||s===0?li(b,1):li(b);let u,h,d,p,_=!1,v=!1;if(zt(n)?(h=()=>n.value,_=wn(n)):ts(n)?(h=()=>c(n),_=!0):Ge(n)?(v=!0,_=n.some(b=>ts(b)||wn(b)),h=()=>n.map(b=>{if(zt(b))return b.value;if(ts(b))return c(b);if($e(b))return l?l(b,2):b()})):$e(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){hi();try{d()}finally{fi()}}const b=Yi;Yi=u;try{return l?l(n,3,[p]):n(p)}finally{Yi=b}}:h=Xn,e&&s){const b=h,C=s===!0?1/0:s;h=()=>li(b(),C)}const m=Gp(),f=()=>{u.stop(),m&&m.active&&Lc(m.effects,u)};if(r&&e){const b=e;e=(...C)=>{b(...C),f()}}let T=v?new Array(n.length).fill(Wr):Wr;const A=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const C=u.run();if(s||_||(v?C.some((D,L)=>Ri(D,T[L])):Ri(C,T))){d&&d();const D=Yi;Yi=u;try{const L=[C,T===Wr?void 0:v&&T[0]===Wr?[]:T,p];T=C,l?l(e,3,L):e(...L)}finally{Yi=D}}}else u.run()};return o&&o(A),u=new Cf(h),u.scheduler=a?()=>a(A,!1):A,p=b=>mm(b,!1,u),d=u.onStop=()=>{const b=Fa.get(u);if(b){if(l)l(b,4);else for(const C of b)C();Fa.delete(u)}},e?i?A(!0):T=u.run():a?a(A.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function li(n,e=1/0,t){if(e<=0||!Mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,zt(n))li(n.value,e,t);else if(Ge(n))for(let i=0;i<n.length;i++)li(n[i],e,t);else if(yf(n)||Is(n))n.forEach(i=>{li(i,e,t)});else if(bf(n)){for(const i in n)li(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&li(n[i],e,t)}return n}function Ir(n,e,t,i){try{return i?n(...i):n()}catch(s){so(s,e,t)}}function Nn(n,e,t,i){if($e(n)){const s=Ir(n,e,t,i);return s&&Mf(s)&&s.catch(r=>{so(r,e,t)}),s}if(Ge(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Nn(n[r],e,t,i));return s}}function so(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||gt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){hi(),Ir(r,null,10,[n,l,c]),fi();return}}_m(n,t,s,i,a)}function _m(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Zt=[];let Bn=-1;const Ns=[];let Ti=null,Rs=0;const Gf=Promise.resolve();let Oa=null;function Wf(n){const e=Oa||Gf;return n?e.then(this?n.bind(this):n):e}function vm(n){let e=Bn+1,t=Zt.length;for(;e<t;){const i=e+t>>>1,s=Zt[i],r=Er(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Gc(n){if(!(n.flags&1)){const e=Er(n),t=Zt[Zt.length-1];!t||!(n.flags&2)&&e>=Er(t)?Zt.push(n):Zt.splice(vm(e),0,n),n.flags|=1,Xf()}}function Xf(){Oa||(Oa=Gf.then(Yf))}function xm(n){Ge(n)?Ns.push(...n):Ti&&n.id===-1?Ti.splice(Rs+1,0,n):n.flags&1||(Ns.push(n),n.flags|=1),Xf()}function Tu(n,e,t=Bn+1){for(;t<Zt.length;t++){const i=Zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function jf(n){if(Ns.length){const e=[...new Set(Ns)].sort((t,i)=>Er(t)-Er(i));if(Ns.length=0,Ti){Ti.push(...e);return}for(Ti=e,Rs=0;Rs<Ti.length;Rs++){const t=Ti[Rs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ti=null,Rs=0}}const Er=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Yf(n){try{for(Bn=0;Bn<Zt.length;Bn++){const e=Zt[Bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ir(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bn<Zt.length;Bn++){const e=Zt[Bn];e&&(e.flags&=-2)}Bn=-1,Zt.length=0,jf(),Oa=null,(Zt.length||Ns.length)&&Yf()}}let _n=null,qf=null;function Ba(n){const e=_n;return _n=n,qf=n&&n.type.__scopeId||null,e}function pr(n,e=_n,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Va(-1);const r=Ba(e);let a;try{a=n(...s)}finally{Ba(r),i._d&&Va(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ym(n,e){if(_n===null)return n;const t=co(_n),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=gt]=e[s];r&&($e(r)&&(r={mounted:r,updated:r}),r.deep&&li(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Oi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(hi(),Nn(l,t,8,[n.el,o,n,e]),fi())}}function Mm(n,e){if(Wt){let t=Wt.provides;const i=Wt.parent&&Wt.parent.provides;i===t&&(t=Wt.provides=Object.create(i)),t[n]=e}}function Sa(n,e,t=!1){const i=wd();if(i||Us){let s=Us?Us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&$e(e)?e.call(i&&i.proxy):e}}const Sm=Symbol.for("v-scx"),bm=()=>Sa(Sm);function ns(n,e,t){return $f(n,e,t)}function $f(n,e,t=gt){const{immediate:i,deep:s,flush:r,once:a}=t,o=It({},t),l=e&&i||!e&&r!=="post";let c;if(Ar){if(r==="sync"){const p=bm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Xn,p.resume=Xn,p.pause=Xn,p}}const u=Wt;o.call=(p,_,v)=>Nn(p,u,_,v);let h=!1;r==="post"?o.scheduler=p=>{Jt(p,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(p,_)=>{_?p():Gc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=gm(n,e,o);return Ar&&(c?c.push(d):l&&d()),d}function Em(n,e,t){const i=this.proxy,s=Tt(n)?n.includes(".")?Kf(i,n):()=>i[n]:n.bind(i,i);let r;$e(e)?r=e:(r=e.handler,t=e);const a=Fr(this),o=$f(s,r.bind(i),t);return a(),o}function Kf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Jf=Symbol("_vte"),Zf=n=>n.__isTeleport,mr=n=>n&&(n.disabled||n.disabled===""),wu=n=>n&&(n.defer||n.defer===""),Au=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Cu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,El=(n,e)=>{const t=n&&n.to;return Tt(t)?e?e(t):null:t},Qf={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,a,o,l,c){const{mc:u,pc:h,pbc:d,o:{insert:p,querySelector:_,createText:v,createComment:m}}=c,f=mr(e.props);let{shapeFlag:T,children:A,dynamicChildren:b}=e;if(n==null){const C=e.el=v(""),D=e.anchor=v("");p(C,t,i),p(D,t,i);const L=(x,S)=>{T&16&&u(A,x,S,s,r,a,o,l)},B=()=>{const x=e.target=El(e.props,_),S=ed(x,e,v,p);x&&(a!=="svg"&&Au(x)?a="svg":a!=="mathml"&&Cu(x)&&(a="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(x),f||(L(x,S),ba(e,!1)))};f&&(L(t,D),ba(e,!0)),wu(e.props)?(e.el.__isMounted=!1,Jt(()=>{B(),delete e.el.__isMounted},r)):B()}else{if(wu(e.props)&&n.el.__isMounted===!1){Jt(()=>{Qf.process(n,e,t,i,s,r,a,o,l,c)},r);return}e.el=n.el,e.targetStart=n.targetStart;const C=e.anchor=n.anchor,D=e.target=n.target,L=e.targetAnchor=n.targetAnchor,B=mr(n.props),x=B?t:D,S=B?C:L;if(a==="svg"||Au(D)?a="svg":(a==="mathml"||Cu(D))&&(a="mathml"),b?(d(n.dynamicChildren,b,x,s,r,a,o),qc(n,e,!0)):l||h(n,e,x,S,s,r,a,o,!1),f)B?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Xr(e,t,C,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const P=e.target=El(e.props,_);P&&Xr(e,P,null,c,0)}else B&&Xr(e,D,L,c,1);ba(e,f)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:a,children:o,anchor:l,targetStart:c,targetAnchor:u,target:h,props:d}=n;if(h&&(s(c),s(u)),r&&s(l),a&16){const p=r||!mr(d);for(let _=0;_<o.length;_++){const v=o[_];i(v,e,t,p,!!v.dynamicChildren)}}},move:Xr,hydrate:Tm};function Xr(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:a,anchor:o,shapeFlag:l,children:c,props:u}=n,h=r===2;if(h&&i(a,e,t),(!h||mr(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,t,2);h&&i(o,e,t)}function Tm(n,e,t,i,s,r,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:c,createText:u}},h){function d(v,m,f,T){m.anchor=h(a(v),m,o(v),t,i,s,r),m.targetStart=f,m.targetAnchor=T}const p=e.target=El(e.props,l),_=mr(e.props);if(p){const v=p._lpa||p.firstChild;if(e.shapeFlag&16)if(_)d(n,e,v,v&&a(v));else{e.anchor=a(n);let m=v;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,p._lpa=e.targetAnchor&&a(e.targetAnchor);break}}m=a(m)}e.targetAnchor||ed(p,e,u,c),h(v&&a(v),e,p,t,i,s,r)}ba(e,_)}else _&&e.shapeFlag&16&&d(n,e,n,a(n));return e.anchor&&a(e.anchor)}const Wc=Qf;function ba(n,e){const t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function ed(n,e,t,i){const s=e.targetStart=t(""),r=e.targetAnchor=t("");return s[Jf]=r,n&&(i(s,n),i(r,n)),r}const ri=Symbol("_leaveCb"),jr=Symbol("_enterCb");function wm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nr(()=>{n.isMounted=!0}),ld(()=>{n.isUnmounting=!0}),n}const bn=[Function,Array],td={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bn,onEnter:bn,onAfterEnter:bn,onEnterCancelled:bn,onBeforeLeave:bn,onLeave:bn,onAfterLeave:bn,onLeaveCancelled:bn,onBeforeAppear:bn,onAppear:bn,onAfterAppear:bn,onAppearCancelled:bn},nd=n=>{const e=n.subTree;return e.component?nd(e.component):e},Am={name:"BaseTransition",props:td,setup(n,{slots:e}){const t=wd(),i=wm();return()=>{const s=e.default&&rd(e.default(),!0);if(!s||!s.length)return;const r=id(s),a=rt(n),{mode:o}=a;if(i.isLeaving)return Co(r);const l=Ru(r);if(!l)return Co(r);let c=Tl(l,a,i,t,h=>c=h);l.type!==Qt&&Tr(l,c);let u=t.subTree&&Ru(t.subTree);if(u&&u.type!==Qt&&!qi(u,l)&&nd(t).type!==Qt){let h=Tl(u,a,i,t);if(Tr(u,h),o==="out-in"&&l.type!==Qt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},Co(r);o==="in-out"&&l.type!==Qt?h.delayLeave=(d,p,_)=>{const v=sd(i,u);v[String(u.key)]=u,d[ri]=()=>{p(),d[ri]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function id(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Qt){e=t;break}}return e}const Cm=Am;function sd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Tl(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:_,onLeaveCancelled:v,onBeforeAppear:m,onAppear:f,onAfterAppear:T,onAppearCancelled:A}=e,b=String(n.key),C=sd(t,n),D=(x,S)=>{x&&Nn(x,i,9,S)},L=(x,S)=>{const P=S[1];D(x,S),Ge(x)?x.every(N=>N.length<=1)&&P():x.length<=1&&P()},B={mode:a,persisted:o,beforeEnter(x){let S=l;if(!t.isMounted)if(r)S=m||l;else return;x[ri]&&x[ri](!0);const P=C[b];P&&qi(n,P)&&P.el[ri]&&P.el[ri](),D(S,[x])},enter(x){let S=c,P=u,N=h;if(!t.isMounted)if(r)S=f||c,P=T||u,N=A||h;else return;let V=!1;const se=x[jr]=re=>{V||(V=!0,re?D(N,[x]):D(P,[x]),B.delayedLeave&&B.delayedLeave(),x[jr]=void 0)};S?L(S,[x,se]):se()},leave(x,S){const P=String(n.key);if(x[jr]&&x[jr](!0),t.isUnmounting)return S();D(d,[x]);let N=!1;const V=x[ri]=se=>{N||(N=!0,S(),se?D(v,[x]):D(_,[x]),x[ri]=void 0,C[P]===n&&delete C[P])};C[P]=n,p?L(p,[x,V]):V()},clone(x){const S=Tl(x,e,t,i,s);return s&&s(S),S}};return B}function Co(n){if(ro(n))return n=Di(n),n.children=null,n}function Ru(n){if(!ro(n))return Zf(n.type)&&n.children?id(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&$e(t.default))return t.default()}}function Tr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Tr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function rd(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===an?(a.patchFlag&128&&s++,i=i.concat(rd(a.children,e,o))):(e||a.type!==Qt)&&i.push(o!=null?Di(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function qs(n,e){return $e(n)?It({name:n.name},e,{setup:n}):n}function ad(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const za=new WeakMap;function gr(n,e,t,i,s=!1){if(Ge(n)){n.forEach((_,v)=>gr(_,e&&(Ge(e)?e[v]:e),t,i,s));return}if(_r(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&gr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?co(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===gt?o.refs={}:o.refs,h=o.setupState,d=rt(h),p=h===gt?xf:_=>at(d,_);if(c!=null&&c!==l){if(Pu(e),Tt(c))u[c]=null,p(c)&&(h[c]=null);else if(zt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if($e(l))Ir(l,o,12,[a,u]);else{const _=Tt(l),v=zt(l);if(_||v){const m=()=>{if(n.f){const f=_?p(l)?h[l]:u[l]:l.value;if(s)Ge(f)&&Lc(f,r);else if(Ge(f))f.includes(r)||f.push(r);else if(_)u[l]=[r],p(l)&&(h[l]=u[l]);else{const T=[r];l.value=T,n.k&&(u[n.k]=T)}}else _?(u[l]=a,p(l)&&(h[l]=a)):v&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const f=()=>{m(),za.delete(n)};f.id=-1,za.set(n,f),Jt(f,t)}else Pu(n),m()}}}function Pu(n){const e=za.get(n);e&&(e.flags|=8,za.delete(n))}to().requestIdleCallback;to().cancelIdleCallback;const _r=n=>!!n.type.__asyncLoader,ro=n=>n.type.__isKeepAlive;function Rm(n,e){od(n,"a",e)}function Pm(n,e){od(n,"da",e)}function od(n,e,t=Wt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ao(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ro(s.parent.vnode)&&Dm(i,e,t,s),s=s.parent}}function Dm(n,e,t,i){const s=ao(e,n,i,!0);Ur(()=>{Lc(i[e],s)},t)}function ao(n,e,t=Wt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{hi();const o=Fr(t),l=Nn(e,t,n,a);return o(),fi(),l});return i?s.unshift(r):s.push(r),r}}const mi=n=>(e,t=Wt)=>{(!Ar||n==="sp")&&ao(n,(...i)=>e(...i),t)},Lm=mi("bm"),Nr=mi("m"),Im=mi("bu"),Nm=mi("u"),ld=mi("bum"),Ur=mi("um"),Um=mi("sp"),Fm=mi("rtg"),Om=mi("rtc");function Bm(n,e=Wt){ao("ec",n,e)}const zm="components";function km(n,e){return Hm(zm,n,!0,e)||n}const Vm=Symbol.for("v-ndc");function Hm(n,e,t=!0,i=!1){const s=_n||Wt;if(s){const r=s.type;{const o=wg(r,!1);if(o&&(o===e||o===An(e)||o===eo(An(e))))return r}const a=Du(s[n]||r[n],e)||Du(s.appContext[n],e);return!a&&i?r:a}}function Du(n,e){return n&&(n[e]||n[An(e)]||n[eo(An(e))])}function Xc(n,e,t,i){let s;const r=t,a=Ge(n);if(a||Tt(n)){const o=a&&ts(n);let l=!1,c=!1;o&&(l=!wn(n),c=di(n),n=io(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?ks(In(n[u])):In(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(Mt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const wl=n=>n?Ad(n)?co(n):wl(n.parent):null,vr=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wl(n.parent),$root:n=>wl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ud(n),$forceUpdate:n=>n.f||(n.f=()=>{Gc(n.update)}),$nextTick:n=>n.n||(n.n=Wf.bind(n.proxy)),$watch:n=>Em.bind(n)}),Ro=(n,e)=>n!==gt&&!n.__isScriptSetup&&at(n,e),Gm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ro(i,e))return a[e]=1,i[e];if(s!==gt&&at(s,e))return a[e]=2,s[e];if(at(r,e))return a[e]=3,r[e];if(t!==gt&&at(t,e))return a[e]=4,t[e];Al&&(a[e]=0)}}const c=vr[e];let u,h;if(c)return e==="$attrs"&&Gt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==gt&&at(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,at(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ro(s,e)?(s[e]=t,!0):i!==gt&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==gt&&o[0]!=="$"&&at(n,o)||Ro(e,o)||at(r,o)||at(i,o)||at(vr,o)||at(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Lu(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Al=!0;function Wm(n){const e=ud(n),t=n.proxy,i=n.ctx;Al=!1,e.beforeCreate&&Iu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:f,beforeUnmount:T,destroyed:A,unmounted:b,render:C,renderTracked:D,renderTriggered:L,errorCaptured:B,serverPrefetch:x,expose:S,inheritAttrs:P,components:N,directives:V,filters:se}=e;if(c&&Xm(c,i,null),a)for(const k in a){const ne=a[k];$e(ne)&&(i[k]=ne.bind(t))}if(s){const k=s.call(t,t);Mt(k)&&(n.data=kc(k))}if(Al=!0,r)for(const k in r){const ne=r[k],ve=$e(ne)?ne.bind(t,t):$e(ne.get)?ne.get.bind(t,t):Xn,_e=!$e(ne)&&$e(ne.set)?ne.set.bind(t):Xn,be=Lt({get:ve,set:_e});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>be.value,set:Ve=>be.value=Ve})}if(o)for(const k in o)cd(o[k],i,t,k);if(l){const k=$e(l)?l.call(t):l;Reflect.ownKeys(k).forEach(ne=>{Mm(ne,k[ne])})}u&&Iu(u,n,"c");function J(k,ne){Ge(ne)?ne.forEach(ve=>k(ve.bind(t))):ne&&k(ne.bind(t))}if(J(Lm,h),J(Nr,d),J(Im,p),J(Nm,_),J(Rm,v),J(Pm,m),J(Bm,B),J(Om,D),J(Fm,L),J(ld,T),J(Ur,b),J(Um,x),Ge(S))if(S.length){const k=n.exposed||(n.exposed={});S.forEach(ne=>{Object.defineProperty(k,ne,{get:()=>t[ne],set:ve=>t[ne]=ve,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Xn&&(n.render=C),P!=null&&(n.inheritAttrs=P),N&&(n.components=N),V&&(n.directives=V),x&&ad(n)}function Xm(n,e,t=Xn){Ge(n)&&(n=Cl(n));for(const i in n){const s=n[i];let r;Mt(s)?"default"in s?r=Sa(s.from||i,s.default,!0):r=Sa(s.from||i):r=Sa(s),zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function Iu(n,e,t){Nn(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function cd(n,e,t,i){let s=i.includes(".")?Kf(t,i):()=>t[i];if(Tt(n)){const r=e[n];$e(r)&&ns(s,r)}else if($e(n))ns(s,n.bind(t));else if(Mt(n))if(Ge(n))n.forEach(r=>cd(r,e,t,i));else{const r=$e(n.handler)?n.handler.bind(t):e[n.handler];$e(r)&&ns(s,r,n)}}function ud(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ka(l,c,a,!0)),ka(l,e,a)),Mt(e)&&r.set(e,l),l}function ka(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ka(n,r,t,!0),s&&s.forEach(a=>ka(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=jm[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const jm={data:Nu,props:Uu,emits:Uu,methods:lr,computed:lr,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:lr,directives:lr,watch:qm,provide:Nu,inject:Ym};function Nu(n,e){return e?n?function(){return It($e(n)?n.call(this,this):n,$e(e)?e.call(this,this):e)}:e:n}function Ym(n,e){return lr(Cl(n),Cl(e))}function Cl(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function $t(n,e){return n?[...new Set([].concat(n,e))]:e}function lr(n,e){return n?It(Object.create(null),n,e):e}function Uu(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:It(Object.create(null),Lu(n),Lu(e??{})):e}function qm(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const i in e)t[i]=$t(n[i],e[i]);return t}function hd(){return{app:null,config:{isNativeTag:xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $m=0;function Km(n,e){return function(i,s=null){$e(i)||(i=It({},i)),s!=null&&!Mt(s)&&(s=null);const r=hd(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:$m++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Rg,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&$e(u.install)?(a.add(u),u.install(c,...h)):$e(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||wt(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,co(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Nn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Us;Us=c;try{return u()}finally{Us=h}}};return c}}let Us=null;const Jm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${An(e)}Modifiers`]||n[`${Ni(e)}Modifiers`];function Zm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let s=t;const r=e.startsWith("update:"),a=r&&Jm(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Tt(u)?u.trim():u)),a.number&&(s=t.map(Nc)));let o,l=i[o=bo(e)]||i[o=bo(An(e))];!l&&r&&(l=i[o=bo(Ni(e))]),l&&Nn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Nn(c,n,6,s)}}const Qm=new WeakMap;function fd(n,e,t=!1){const i=t?Qm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!$e(n)){const l=c=>{const u=fd(c,e,!0);u&&(o=!0,It(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(Mt(n)&&i.set(n,null),null):(Ge(r)?r.forEach(l=>a[l]=null):It(a,r),Mt(n)&&i.set(n,a),a)}function oo(n,e){return!n||!Ja(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,Ni(e))||at(n,e))}function Fu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:_,inheritAttrs:v}=n,m=Ba(n);let f,T;try{if(t.shapeFlag&4){const b=s||i,C=b;f=zn(c.call(C,b,u,h,p,d,_)),T=o}else{const b=e;f=zn(b.length>1?b(h,{attrs:o,slots:a,emit:l}):b(h,null)),T=e.props?o:eg(o)}}catch(b){xr.length=0,so(b,n,1),f=wt(Qt)}let A=f;if(T&&v!==!1){const b=Object.keys(T),{shapeFlag:C}=A;b.length&&C&7&&(r&&b.some(Dc)&&(T=tg(T,r)),A=Di(A,T,!1,!0))}return t.dirs&&(A=Di(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&Tr(A,t.transition),f=A,Ba(m),f}const eg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ja(t))&&((e||(e={}))[t]=n[t]);return e},tg=(n,e)=>{const t={};for(const i in n)(!Dc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ng(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ou(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(a[d]!==i[d]&&!oo(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ou(i,a,c):!0:!!a;return!1}function Ou(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!oo(t,r))return!0}return!1}function ig({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const dd={},pd=()=>Object.create(dd),md=n=>Object.getPrototypeOf(n)===dd;function sg(n,e,t,i=!1){const s={},r=pd();n.propsDefaults=Object.create(null),gd(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:lm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function rg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=rt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(oo(n.emitsOptions,d))continue;const p=e[d];if(l)if(at(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=An(d);s[_]=Rl(l,o,_,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{gd(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!at(e,h)&&((u=Ni(h))===h||!at(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Rl(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!at(e,h))&&(delete r[h],c=!0)}c&&oi(n.attrs,"set","")}function gd(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(hr(l))continue;const c=e[l];let u;s&&at(s,u=An(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:oo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=rt(t),c=o||gt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Rl(s,l,h,c[h],n,!at(c,h))}}return a}function Rl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=at(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&$e(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Fr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Ni(t))&&(i=!0))}return i}const ag=new WeakMap;function _d(n,e,t=!1){const i=t?ag:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!$e(n)){const u=h=>{l=!0;const[d,p]=_d(h,e,!0);It(a,d),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Mt(n)&&i.set(n,Ls),Ls;if(Ge(r))for(let u=0;u<r.length;u++){const h=An(r[u]);Bu(h)&&(a[h]=gt)}else if(r)for(const u in r){const h=An(u);if(Bu(h)){const d=r[u],p=a[h]=Ge(d)||$e(d)?{type:d}:It({},d),_=p.type;let v=!1,m=!0;if(Ge(_))for(let f=0;f<_.length;++f){const T=_[f],A=$e(T)&&T.name;if(A==="Boolean"){v=!0;break}else A==="String"&&(m=!1)}else v=$e(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||at(p,"default"))&&o.push(h)}}const c=[a,o];return Mt(n)&&i.set(n,c),c}function Bu(n){return n[0]!=="$"&&!hr(n)}const jc=n=>n==="_"||n==="_ctx"||n==="$stable",Yc=n=>Ge(n)?n.map(zn):[zn(n)],og=(n,e,t)=>{if(e._n)return e;const i=pr((...s)=>Yc(e(...s)),t);return i._c=!1,i},vd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(jc(s))continue;const r=n[s];if($e(r))e[s]=og(s,r,i);else if(r!=null){const a=Yc(r);e[s]=()=>a}}},xd=(n,e)=>{const t=Yc(e);n.slots.default=()=>t},yd=(n,e,t)=>{for(const i in e)(t||!jc(i))&&(n[i]=e[i])},lg=(n,e,t)=>{const i=n.slots=pd();if(n.vnode.shapeFlag&32){const s=e._;s?(yd(i,e,t),t&&Ef(i,"_",s,!0)):vd(e,i)}else e&&xd(n,e)},cg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=gt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:yd(s,e,t):(r=!e.$stable,vd(e,s)),a=e}else e&&(xd(n,e),a={default:1});if(r)for(const o in s)!jc(o)&&a[o]==null&&delete s[o]},Jt=pg;function ug(n){return hg(n)}function hg(n,e){const t=to();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Xn,insertStaticContent:_}=n,v=(E,R,O,Y=null,H=null,$=null,w=void 0,oe=null,ee=!!R.dynamicChildren)=>{if(E===R)return;E&&!qi(E,R)&&(Y=ce(E),Ve(E,H,$,!0),E=null),R.patchFlag===-2&&(ee=!1,R.dynamicChildren=null);const{type:q,ref:ie,shapeFlag:y}=R;switch(q){case lo:m(E,R,O,Y);break;case Qt:f(E,R,O,Y);break;case Do:E==null&&T(R,O,Y,w);break;case an:N(E,R,O,Y,H,$,w,oe,ee);break;default:y&1?C(E,R,O,Y,H,$,w,oe,ee):y&6?V(E,R,O,Y,H,$,w,oe,ee):(y&64||y&128)&&q.process(E,R,O,Y,H,$,w,oe,ee,Q)}ie!=null&&H?gr(ie,E&&E.ref,$,R||E,!R):ie==null&&E&&E.ref!=null&&gr(E.ref,null,$,E,!0)},m=(E,R,O,Y)=>{if(E==null)i(R.el=o(R.children),O,Y);else{const H=R.el=E.el;R.children!==E.children&&c(H,R.children)}},f=(E,R,O,Y)=>{E==null?i(R.el=l(R.children||""),O,Y):R.el=E.el},T=(E,R,O,Y)=>{[E.el,E.anchor]=_(E.children,R,O,Y,E.el,E.anchor)},A=({el:E,anchor:R},O,Y)=>{let H;for(;E&&E!==R;)H=d(E),i(E,O,Y),E=H;i(R,O,Y)},b=({el:E,anchor:R})=>{let O;for(;E&&E!==R;)O=d(E),s(E),E=O;s(R)},C=(E,R,O,Y,H,$,w,oe,ee)=>{if(R.type==="svg"?w="svg":R.type==="math"&&(w="mathml"),E==null)D(R,O,Y,H,$,w,oe,ee);else{const q=E.el&&E.el._isVueCE?E.el:null;try{q&&q._beginPatch(),x(E,R,H,$,w,oe,ee)}finally{q&&q._endPatch()}}},D=(E,R,O,Y,H,$,w,oe)=>{let ee,q;const{props:ie,shapeFlag:y,transition:g,dirs:I}=E;if(ee=E.el=a(E.type,$,ie&&ie.is,ie),y&8?u(ee,E.children):y&16&&B(E.children,ee,null,Y,H,Po(E,$),w,oe),I&&Oi(E,null,Y,"created"),L(ee,E,E.scopeId,w,Y),ie){for(const te in ie)te!=="value"&&!hr(te)&&r(ee,te,null,ie[te],$,Y);"value"in ie&&r(ee,"value",null,ie.value,$),(q=ie.onVnodeBeforeMount)&&Fn(q,Y,E)}I&&Oi(E,null,Y,"beforeMount");const j=fg(H,g);j&&g.beforeEnter(ee),i(ee,R,O),((q=ie&&ie.onVnodeMounted)||j||I)&&Jt(()=>{q&&Fn(q,Y,E),j&&g.enter(ee),I&&Oi(E,null,Y,"mounted")},H)},L=(E,R,O,Y,H)=>{if(O&&p(E,O),Y)for(let $=0;$<Y.length;$++)p(E,Y[$]);if(H){let $=H.subTree;if(R===$||bd($.type)&&($.ssContent===R||$.ssFallback===R)){const w=H.vnode;L(E,w,w.scopeId,w.slotScopeIds,H.parent)}}},B=(E,R,O,Y,H,$,w,oe,ee=0)=>{for(let q=ee;q<E.length;q++){const ie=E[q]=oe?wi(E[q]):zn(E[q]);v(null,ie,R,O,Y,H,$,w,oe)}},x=(E,R,O,Y,H,$,w)=>{const oe=R.el=E.el;let{patchFlag:ee,dynamicChildren:q,dirs:ie}=R;ee|=E.patchFlag&16;const y=E.props||gt,g=R.props||gt;let I;if(O&&Bi(O,!1),(I=g.onVnodeBeforeUpdate)&&Fn(I,O,R,E),ie&&Oi(R,E,O,"beforeUpdate"),O&&Bi(O,!0),(y.innerHTML&&g.innerHTML==null||y.textContent&&g.textContent==null)&&u(oe,""),q?S(E.dynamicChildren,q,oe,O,Y,Po(R,H),$):w||ne(E,R,oe,null,O,Y,Po(R,H),$,!1),ee>0){if(ee&16)P(oe,y,g,O,H);else if(ee&2&&y.class!==g.class&&r(oe,"class",null,g.class,H),ee&4&&r(oe,"style",y.style,g.style,H),ee&8){const j=R.dynamicProps;for(let te=0;te<j.length;te++){const X=j[te],Ce=y[X],de=g[X];(de!==Ce||X==="value")&&r(oe,X,Ce,de,H,O)}}ee&1&&E.children!==R.children&&u(oe,R.children)}else!w&&q==null&&P(oe,y,g,O,H);((I=g.onVnodeUpdated)||ie)&&Jt(()=>{I&&Fn(I,O,R,E),ie&&Oi(R,E,O,"updated")},Y)},S=(E,R,O,Y,H,$,w)=>{for(let oe=0;oe<R.length;oe++){const ee=E[oe],q=R[oe],ie=ee.el&&(ee.type===an||!qi(ee,q)||ee.shapeFlag&198)?h(ee.el):O;v(ee,q,ie,null,Y,H,$,w,!0)}},P=(E,R,O,Y,H)=>{if(R!==O){if(R!==gt)for(const $ in R)!hr($)&&!($ in O)&&r(E,$,R[$],null,H,Y);for(const $ in O){if(hr($))continue;const w=O[$],oe=R[$];w!==oe&&$!=="value"&&r(E,$,oe,w,H,Y)}"value"in O&&r(E,"value",R.value,O.value,H)}},N=(E,R,O,Y,H,$,w,oe,ee)=>{const q=R.el=E?E.el:o(""),ie=R.anchor=E?E.anchor:o("");let{patchFlag:y,dynamicChildren:g,slotScopeIds:I}=R;I&&(oe=oe?oe.concat(I):I),E==null?(i(q,O,Y),i(ie,O,Y),B(R.children||[],O,ie,H,$,w,oe,ee)):y>0&&y&64&&g&&E.dynamicChildren&&E.dynamicChildren.length===g.length?(S(E.dynamicChildren,g,O,H,$,w,oe),(R.key!=null||H&&R===H.subTree)&&qc(E,R,!0)):ne(E,R,O,ie,H,$,w,oe,ee)},V=(E,R,O,Y,H,$,w,oe,ee)=>{R.slotScopeIds=oe,E==null?R.shapeFlag&512?H.ctx.activate(R,O,Y,w,ee):se(R,O,Y,H,$,w,ee):re(E,R,ee)},se=(E,R,O,Y,H,$,w)=>{const oe=E.component=Mg(E,Y,H);if(ro(E)&&(oe.ctx.renderer=Q),Sg(oe,!1,w),oe.asyncDep){if(H&&H.registerDep(oe,J,w),!E.el){const ee=oe.subTree=wt(Qt);f(null,ee,R,O),E.placeholder=ee.el}}else J(oe,E,R,O,H,$,w)},re=(E,R,O)=>{const Y=R.component=E.component;if(ng(E,R,O))if(Y.asyncDep&&!Y.asyncResolved){k(Y,R,O);return}else Y.next=R,Y.update();else R.el=E.el,Y.vnode=R},J=(E,R,O,Y,H,$,w)=>{const oe=()=>{if(E.isMounted){let{next:y,bu:g,u:I,parent:j,vnode:te}=E;{const Oe=Md(E);if(Oe){y&&(y.el=te.el,k(E,y,w)),Oe.asyncDep.then(()=>{E.isUnmounted||oe()});return}}let X=y,Ce;Bi(E,!1),y?(y.el=te.el,k(E,y,w)):y=te,g&&Ma(g),(Ce=y.props&&y.props.onVnodeBeforeUpdate)&&Fn(Ce,j,y,te),Bi(E,!0);const de=Fu(E),De=E.subTree;E.subTree=de,v(De,de,h(De.el),ce(De),E,H,$),y.el=de.el,X===null&&ig(E,de.el),I&&Jt(I,H),(Ce=y.props&&y.props.onVnodeUpdated)&&Jt(()=>Fn(Ce,j,y,te),H)}else{let y;const{el:g,props:I}=R,{bm:j,m:te,parent:X,root:Ce,type:de}=E,De=_r(R);Bi(E,!1),j&&Ma(j),!De&&(y=I&&I.onVnodeBeforeMount)&&Fn(y,X,R),Bi(E,!0);{Ce.ce&&Ce.ce._def.shadowRoot!==!1&&Ce.ce._injectChildStyle(de);const Oe=E.subTree=Fu(E);v(null,Oe,O,Y,E,H,$),R.el=Oe.el}if(te&&Jt(te,H),!De&&(y=I&&I.onVnodeMounted)){const Oe=R;Jt(()=>Fn(y,X,Oe),H)}(R.shapeFlag&256||X&&_r(X.vnode)&&X.vnode.shapeFlag&256)&&E.a&&Jt(E.a,H),E.isMounted=!0,R=O=Y=null}};E.scope.on();const ee=E.effect=new Cf(oe);E.scope.off();const q=E.update=ee.run.bind(ee),ie=E.job=ee.runIfDirty.bind(ee);ie.i=E,ie.id=E.uid,ee.scheduler=()=>Gc(ie),Bi(E,!0),q()},k=(E,R,O)=>{R.component=E;const Y=E.vnode.props;E.vnode=R,E.next=null,rg(E,R.props,Y,O),cg(E,R.children,O),hi(),Tu(E),fi()},ne=(E,R,O,Y,H,$,w,oe,ee=!1)=>{const q=E&&E.children,ie=E?E.shapeFlag:0,y=R.children,{patchFlag:g,shapeFlag:I}=R;if(g>0){if(g&128){_e(q,y,O,Y,H,$,w,oe,ee);return}else if(g&256){ve(q,y,O,Y,H,$,w,oe,ee);return}}I&8?(ie&16&&ae(q,H,$),y!==q&&u(O,y)):ie&16?I&16?_e(q,y,O,Y,H,$,w,oe,ee):ae(q,H,$,!0):(ie&8&&u(O,""),I&16&&B(y,O,Y,H,$,w,oe,ee))},ve=(E,R,O,Y,H,$,w,oe,ee)=>{E=E||Ls,R=R||Ls;const q=E.length,ie=R.length,y=Math.min(q,ie);let g;for(g=0;g<y;g++){const I=R[g]=ee?wi(R[g]):zn(R[g]);v(E[g],I,O,null,H,$,w,oe,ee)}q>ie?ae(E,H,$,!0,!1,y):B(R,O,Y,H,$,w,oe,ee,y)},_e=(E,R,O,Y,H,$,w,oe,ee)=>{let q=0;const ie=R.length;let y=E.length-1,g=ie-1;for(;q<=y&&q<=g;){const I=E[q],j=R[q]=ee?wi(R[q]):zn(R[q]);if(qi(I,j))v(I,j,O,null,H,$,w,oe,ee);else break;q++}for(;q<=y&&q<=g;){const I=E[y],j=R[g]=ee?wi(R[g]):zn(R[g]);if(qi(I,j))v(I,j,O,null,H,$,w,oe,ee);else break;y--,g--}if(q>y){if(q<=g){const I=g+1,j=I<ie?R[I].el:Y;for(;q<=g;)v(null,R[q]=ee?wi(R[q]):zn(R[q]),O,j,H,$,w,oe,ee),q++}}else if(q>g)for(;q<=y;)Ve(E[q],H,$,!0),q++;else{const I=q,j=q,te=new Map;for(q=j;q<=g;q++){const Ee=R[q]=ee?wi(R[q]):zn(R[q]);Ee.key!=null&&te.set(Ee.key,q)}let X,Ce=0;const de=g-j+1;let De=!1,Oe=0;const fe=new Array(de);for(q=0;q<de;q++)fe[q]=0;for(q=I;q<=y;q++){const Ee=E[q];if(Ce>=de){Ve(Ee,H,$,!0);continue}let Le;if(Ee.key!=null)Le=te.get(Ee.key);else for(X=j;X<=g;X++)if(fe[X-j]===0&&qi(Ee,R[X])){Le=X;break}Le===void 0?Ve(Ee,H,$,!0):(fe[Le-j]=q+1,Le>=Oe?Oe=Le:De=!0,v(Ee,R[Le],O,null,H,$,w,oe,ee),Ce++)}const ye=De?dg(fe):Ls;for(X=ye.length-1,q=de-1;q>=0;q--){const Ee=j+q,Le=R[Ee],xe=R[Ee+1],Ke=Ee+1<ie?xe.el||Sd(xe):Y;fe[q]===0?v(null,Le,O,Ke,H,$,w,oe,ee):De&&(X<0||q!==ye[X]?be(Le,O,Ke,2):X--)}}},be=(E,R,O,Y,H=null)=>{const{el:$,type:w,transition:oe,children:ee,shapeFlag:q}=E;if(q&6){be(E.component.subTree,R,O,Y);return}if(q&128){E.suspense.move(R,O,Y);return}if(q&64){w.move(E,R,O,Q);return}if(w===an){i($,R,O);for(let y=0;y<ee.length;y++)be(ee[y],R,O,Y);i(E.anchor,R,O);return}if(w===Do){A(E,R,O);return}if(Y!==2&&q&1&&oe)if(Y===0)oe.beforeEnter($),i($,R,O),Jt(()=>oe.enter($),H);else{const{leave:y,delayLeave:g,afterLeave:I}=oe,j=()=>{E.ctx.isUnmounted?s($):i($,R,O)},te=()=>{$._isLeaving&&$[ri](!0),y($,()=>{j(),I&&I()})};g?g($,j,te):te()}else i($,R,O)},Ve=(E,R,O,Y=!1,H=!1)=>{const{type:$,props:w,ref:oe,children:ee,dynamicChildren:q,shapeFlag:ie,patchFlag:y,dirs:g,cacheIndex:I}=E;if(y===-2&&(H=!1),oe!=null&&(hi(),gr(oe,null,O,E,!0),fi()),I!=null&&(R.renderCache[I]=void 0),ie&256){R.ctx.deactivate(E);return}const j=ie&1&&g,te=!_r(E);let X;if(te&&(X=w&&w.onVnodeBeforeUnmount)&&Fn(X,R,E),ie&6)ot(E.component,O,Y);else{if(ie&128){E.suspense.unmount(O,Y);return}j&&Oi(E,null,R,"beforeUnmount"),ie&64?E.type.remove(E,R,O,Q,Y):q&&!q.hasOnce&&($!==an||y>0&&y&64)?ae(q,R,O,!1,!0):($===an&&y&384||!H&&ie&16)&&ae(ee,R,O),Y&&je(E)}(te&&(X=w&&w.onVnodeUnmounted)||j)&&Jt(()=>{X&&Fn(X,R,E),j&&Oi(E,null,R,"unmounted")},O)},je=E=>{const{type:R,el:O,anchor:Y,transition:H}=E;if(R===an){ht(O,Y);return}if(R===Do){b(E);return}const $=()=>{s(O),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(E.shapeFlag&1&&H&&!H.persisted){const{leave:w,delayLeave:oe}=H,ee=()=>w(O,$);oe?oe(E.el,$,ee):ee()}else $()},ht=(E,R)=>{let O;for(;E!==R;)O=d(E),s(E),E=O;s(R)},ot=(E,R,O)=>{const{bum:Y,scope:H,job:$,subTree:w,um:oe,m:ee,a:q}=E;zu(ee),zu(q),Y&&Ma(Y),H.stop(),$&&($.flags|=8,Ve(w,E,R,O)),oe&&Jt(oe,R),Jt(()=>{E.isUnmounted=!0},R)},ae=(E,R,O,Y=!1,H=!1,$=0)=>{for(let w=$;w<E.length;w++)Ve(E[w],R,O,Y,H)},ce=E=>{if(E.shapeFlag&6)return ce(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const R=d(E.anchor||E.el),O=R&&R[Jf];return O?d(O):R};let Ie=!1;const he=(E,R,O)=>{let Y;E==null?R._vnode&&(Ve(R._vnode,null,null,!0),Y=R._vnode.component):v(R._vnode||null,E,R,null,null,null,O),R._vnode=E,Ie||(Ie=!0,Tu(Y),jf(),Ie=!1)},Q={p:v,um:Ve,m:be,r:je,mt:se,mc:B,pc:ne,pbc:S,n:ce,o:n};return{render:he,hydrate:void 0,createApp:Km(he)}}function Po({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Bi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function fg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function qc(n,e,t=!1){const i=n.children,s=e.children;if(Ge(i)&&Ge(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=wi(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&qc(a,o)),o.type===lo&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=r+(n.type===an?1:0)),o.type===Qt&&!o.el&&(o.el=a.el)}}function dg(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Md(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Md(e)}function zu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Sd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Sd(e.subTree):null}const bd=n=>n.__isSuspense;function pg(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):xm(n)}const an=Symbol.for("v-fgt"),lo=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),Do=Symbol.for("v-stc"),xr=[];let vn=null;function Xe(n=!1){xr.push(vn=n?null:[])}function mg(){xr.pop(),vn=xr[xr.length-1]||null}let wr=1;function Va(n,e=!1){wr+=n,n<0&&vn&&e&&(vn.hasOnce=!0)}function Ed(n){return n.dynamicChildren=wr>0?vn||Ls:null,mg(),wr>0&&vn&&vn.push(n),n}function Qe(n,e,t,i,s,r){return Ed(W(n,e,t,i,s,r,!0))}function Vs(n,e,t,i,s){return Ed(wt(n,e,t,i,s,!0))}function Ha(n){return n?n.__v_isVNode===!0:!1}function qi(n,e){return n.type===e.type&&n.key===e.key}const Td=({key:n})=>n??null,Ea=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||zt(n)||$e(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function W(n,e=null,t=null,i=0,s=null,r=n===an?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Td(e),ref:e&&Ea(e),scopeId:qf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return o?($c(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),wr>0&&!a&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const wt=gg;function gg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Vm)&&(n=Qt),Ha(n)){const o=Di(n,e,!0);return t&&$c(o,t),wr>0&&!r&&vn&&(o.shapeFlag&6?vn[vn.indexOf(n)]=o:vn.push(o)),o.patchFlag=-2,o}if(Ag(n)&&(n=n.__vccOpts),e){e=_g(e);let{class:o,style:l}=e;o&&!Tt(o)&&(e.class=Ae(o)),Mt(l)&&(Hc(l)&&!Ge(l)&&(l=It({},l)),e.style=no(l))}const a=Tt(n)?1:bd(n)?128:Zf(n)?64:Mt(n)?4:$e(n)?2:0;return W(n,e,t,i,s,a,r,!0)}function _g(n){return n?Hc(n)||md(n)?It({},n):n:null}function Di(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?vg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Td(c),ref:e&&e.ref?t&&r?Ge(r)?r.concat(Ea(e)):[r,Ea(e)]:Ea(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==an?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Di(n.ssContent),ssFallback:n.ssFallback&&Di(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Tr(u,l.clone(u)),u}function Fs(n=" ",e=0){return wt(lo,null,n,e)}function ln(n="",e=!1){return e?(Xe(),Vs(Qt,null,n)):wt(Qt,null,n)}function zn(n){return n==null||typeof n=="boolean"?wt(Qt):Ge(n)?wt(an,null,n.slice()):Ha(n)?wi(n):wt(lo,null,String(n))}function wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Di(n)}function $c(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),$c(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!md(e)?e._ctx=_n:s===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[Fs(e)]):t=8);n.children=e,n.shapeFlag|=t}function vg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ae([e.class,i.class]));else if(s==="style")e.style=no([e.style,i.style]);else if(Ja(s)){const r=e[s],a=i[s];a&&r!==a&&!(Ge(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Fn(n,e,t,i=null){Nn(n,e,7,[t,i])}const xg=hd();let yg=0;function Mg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||xg,r={uid:yg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_d(i,s),emitsOptions:fd(i,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Zm.bind(null,r),n.ce&&n.ce(r),r}let Wt=null;const wd=()=>Wt||_n;let Ga,Pl;{const n=to(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Ga=e("__VUE_INSTANCE_SETTERS__",t=>Wt=t),Pl=e("__VUE_SSR_SETTERS__",t=>Ar=t)}const Fr=n=>{const e=Wt;return Ga(n),n.scope.on(),()=>{n.scope.off(),Ga(e)}},ku=()=>{Wt&&Wt.scope.off(),Ga(null)};function Ad(n){return n.vnode.shapeFlag&4}let Ar=!1;function Sg(n,e=!1,t=!1){e&&Pl(e);const{props:i,children:s}=n.vnode,r=Ad(n);sg(n,i,r,e),lg(n,s,t||e);const a=r?bg(n,e):void 0;return e&&Pl(!1),a}function bg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Gm);const{setup:i}=t;if(i){hi();const s=n.setupContext=i.length>1?Tg(n):null,r=Fr(n),a=Ir(i,n,0,[n.props,s]),o=Mf(a);if(fi(),r(),(o||n.sp)&&!_r(n)&&ad(n),o){if(a.then(ku,ku),e)return a.then(l=>{Vu(n,l)}).catch(l=>{so(l,n,0)});n.asyncDep=a}else Vu(n,a)}else Cd(n)}function Vu(n,e,t){$e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=Hf(e)),Cd(n)}function Cd(n,e,t){const i=n.type;n.render||(n.render=i.render||Xn);{const s=Fr(n);hi();try{Wm(n)}finally{fi(),s()}}}const Eg={get(n,e){return Gt(n,"get",""),n[e]}};function Tg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Eg),slots:n.slots,emit:n.emit,expose:e}}function co(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Hf(cm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in vr)return vr[t](n)},has(e,t){return t in e||t in vr}})):n.proxy}function wg(n,e=!0){return $e(n)?n.displayName||n.name:n.name||e&&n.__name}function Ag(n){return $e(n)&&"__vccOpts"in n}const Lt=(n,e)=>pm(n,e,Ar);function Cg(n,e,t){try{Va(-1);const i=arguments.length;return i===2?Mt(e)&&!Ge(e)?Ha(e)?wt(n,null,[e]):wt(n,e):wt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ha(t)&&(t=[t]),wt(n,e,t))}finally{Va(1)}}const Rg="3.5.27";let Dl;const Hu=typeof window<"u"&&window.trustedTypes;if(Hu)try{Dl=Hu.createPolicy("vue",{createHTML:n=>n})}catch{}const Rd=Dl?n=>Dl.createHTML(n):n=>n,Pg="http://www.w3.org/2000/svg",Dg="http://www.w3.org/1998/Math/MathML",si=typeof document<"u"?document:null,Gu=si&&si.createElement("template"),Lg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?si.createElementNS(Pg,n):e==="mathml"?si.createElementNS(Dg,n):t?si.createElement(n,{is:t}):si.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>si.createTextNode(n),createComment:n=>si.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>si.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Gu.innerHTML=Rd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Gu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_i="transition",Zs="animation",Cr=Symbol("_vtc"),Pd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ig=It({},td,Pd),Ng=n=>(n.displayName="Transition",n.props=Ig,n),Ta=Ng((n,{slots:e})=>Cg(Cm,Ug(n),e)),zi=(n,e=[])=>{Ge(n)?n.forEach(t=>t(...e)):n&&n(...e)},Wu=n=>n?Ge(n)?n.some(e=>e.length>1):n.length>1:!1;function Ug(n){const e={};for(const N in n)N in Pd||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=Fg(s),v=_&&_[0],m=_&&_[1],{onBeforeEnter:f,onEnter:T,onEnterCancelled:A,onLeave:b,onLeaveCancelled:C,onBeforeAppear:D=f,onAppear:L=T,onAppearCancelled:B=A}=e,x=(N,V,se,re)=>{N._enterCancelled=re,ki(N,V?u:o),ki(N,V?c:a),se&&se()},S=(N,V)=>{N._isLeaving=!1,ki(N,h),ki(N,p),ki(N,d),V&&V()},P=N=>(V,se)=>{const re=N?L:T,J=()=>x(V,N,se);zi(re,[V,J]),Xu(()=>{ki(V,N?l:r),Zn(V,N?u:o),Wu(re)||ju(V,i,v,J)})};return It(e,{onBeforeEnter(N){zi(f,[N]),Zn(N,r),Zn(N,a)},onBeforeAppear(N){zi(D,[N]),Zn(N,l),Zn(N,c)},onEnter:P(!1),onAppear:P(!0),onLeave(N,V){N._isLeaving=!0;const se=()=>S(N,V);Zn(N,h),N._enterCancelled?(Zn(N,d),$u(N)):($u(N),Zn(N,d)),Xu(()=>{N._isLeaving&&(ki(N,h),Zn(N,p),Wu(b)||ju(N,i,m,se))}),zi(b,[N,se])},onEnterCancelled(N){x(N,!1,void 0,!0),zi(A,[N])},onAppearCancelled(N){x(N,!0,void 0,!0),zi(B,[N])},onLeaveCancelled(N){S(N),zi(C,[N])}})}function Fg(n){if(n==null)return null;if(Mt(n))return[Lo(n.enter),Lo(n.leave)];{const e=Lo(n);return[e,e]}}function Lo(n){return Up(n)}function Zn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Cr]||(n[Cr]=new Set)).add(e)}function ki(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Cr];t&&(t.delete(e),t.size||(n[Cr]=void 0))}function Xu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Og=0;function ju(n,e,t,i){const s=n._endId=++Og,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=Bg(n,e);if(!a)return i();const c=a+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=p=>{p.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},o+1),n.addEventListener(c,d)}function Bg(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${_i}Delay`),r=i(`${_i}Duration`),a=Yu(s,r),o=i(`${Zs}Delay`),l=i(`${Zs}Duration`),c=Yu(o,l);let u=null,h=0,d=0;e===_i?a>0&&(u=_i,h=a,d=r.length):e===Zs?c>0&&(u=Zs,h=c,d=l.length):(h=Math.max(a,c),u=h>0?a>c?_i:Zs:null,d=u?u===_i?r.length:l.length:0);const p=u===_i&&/\b(?:transform|all)(?:,|$)/.test(i(`${_i}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:p}}function Yu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>qu(t)+qu(n[i])))}function qu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function $u(n){return(n?n.ownerDocument:document).body.offsetHeight}function zg(n,e,t){const i=n[Cr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ku=Symbol("_vod"),kg=Symbol("_vsh"),Vg=Symbol(""),Hg=/(?:^|;)\s*display\s*:/;function Gg(n,e,t){const i=n.style,s=Tt(t);let r=!1;if(t&&!s){if(e)if(Tt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&wa(i,o,"")}else for(const a in e)t[a]==null&&wa(i,a,"");for(const a in t)a==="display"&&(r=!0),wa(i,a,t[a])}else if(s){if(e!==t){const a=i[Vg];a&&(t+=";"+a),i.cssText=t,r=Hg.test(t)}}else e&&n.removeAttribute("style");Ku in n&&(n[Ku]=r?i.display:"",n[kg]&&(i.display="none"))}const Ju=/\s*!important$/;function wa(n,e,t){if(Ge(t))t.forEach(i=>wa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Wg(n,e);Ju.test(t)?n.setProperty(Ni(i),t.replace(Ju,""),"important"):n[i]=t}}const Zu=["Webkit","Moz","ms"],Io={};function Wg(n,e){const t=Io[e];if(t)return t;let i=An(e);if(i!=="filter"&&i in n)return Io[e]=i;i=eo(i);for(let s=0;s<Zu.length;s++){const r=Zu[s]+i;if(r in n)return Io[e]=r}return e}const Qu="http://www.w3.org/1999/xlink";function eh(n,e,t,i,s,r=Vp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Qu,e.slice(6,e.length)):n.setAttributeNS(Qu,e,t):t==null||r&&!Tf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Ii(t)?String(t):t)}function th(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Rd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Tf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Ps(n,e,t,i){n.addEventListener(e,t,i)}function Xg(n,e,t,i){n.removeEventListener(e,t,i)}const nh=Symbol("_vei");function jg(n,e,t,i,s=null){const r=n[nh]||(n[nh]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Yg(e);if(i){const c=r[e]=Kg(i,s);Ps(n,o,c,l)}else a&&(Xg(n,o,a,l),r[e]=void 0)}}const ih=/(?:Once|Passive|Capture)$/;function Yg(n){let e;if(ih.test(n)){e={};let i;for(;i=n.match(ih);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ni(n.slice(2)),e]}let No=0;const qg=Promise.resolve(),$g=()=>No||(qg.then(()=>No=0),No=Date.now());function Kg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Nn(Jg(i,t.value),e,5,[i])};return t.value=n,t.attached=$g(),t}function Jg(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const sh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Zg=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?zg(n,i,a):e==="style"?Gg(n,t,i):Ja(e)?Dc(e)||jg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qg(n,e,i,a))?(th(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&eh(n,e,i,a,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Tt(i))?th(n,An(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),eh(n,e,i,a))};function Qg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&sh(e)&&$e(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sh(e)&&Tt(t)?!1:e in n}const rh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ge(e)?t=>Ma(e,t):e};function e0(n){n.target.composing=!0}function ah(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Uo=Symbol("_assign");function oh(n,e,t){return e&&(n=n.trim()),t&&(n=Nc(n)),n}const t0={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Uo]=rh(s);const r=i||s.props&&s.props.type==="number";Ps(n,e?"change":"input",a=>{a.target.composing||n[Uo](oh(n.value,t,r))}),(t||r)&&Ps(n,"change",()=>{n.value=oh(n.value,t,r)}),e||(Ps(n,"compositionstart",e0),Ps(n,"compositionend",ah),Ps(n,"change",ah))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[Uo]=rh(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Nc(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},n0=["ctrl","shift","alt","meta"],i0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>n0.some(t=>n[`${t}Key`]&&!e.includes(t))},s0=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<e.length;a++){const o=i0[e[a]];if(o&&o(s,e))return}return n(s,...r)}))},r0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Ni(s.key);if(e.some(a=>a===r||r0[a]===r))return n(s)}))},a0=It({patchProp:Zg},Lg);let ch;function o0(){return ch||(ch=ug(a0))}const l0=((...n)=>{const e=o0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=u0(i);if(!s)return;const r=e._component;!$e(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,c0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function c0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function u0(n){return Tt(n)?document.querySelector(n):n}function Dd(n=""){const e=Dt(n),t=Dt(null),i=Dt(null),s=Lt(()=>!t.value&&e.value.trim()!==""),r=Lt(()=>t.value!==null),a=Lt(()=>e.value.trim()!=="");function o(){try{if(!a.value){t.value=null,i.value=null;return}i.value=JSON.parse(e.value),t.value=null}catch(d){t.value=d.message,i.value=null}}function l(){try{if(!a.value)return;const d=JSON.parse(e.value);e.value=JSON.stringify(d,null,2),t.value=null,i.value=d}catch(d){t.value=d.message}}function c(){!a.value||!s.value||(e.value=JSON.stringify(JSON.parse(e.value)))}function u(){e.value="",t.value=null,i.value=null}function h(d){e.value=d}return ns(e,o,{immediate:!0}),{jsonText:e,errorMessage:t,parsedData:i,isValid:s,hasError:r,hasContent:a,formatJson:l,compactJson:c,clearJson:u,setJsonText:h}}function Fo(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h0(n,e){const t=/("(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|[{}[\],:])/g,{syntaxColors:i}=e.colors;let s="",r=0,a;for(;(a=t.exec(n))!==null;){const o=a[0];s+=Fo(n.slice(r,a.index));let l,c="400";o.startsWith('"')&&o.endsWith(":")?(l=i.key,c="600"):o.startsWith('"')?l=i.string:o==="true"||o==="false"?l=i.boolean:o==="null"?l=i.null:/^-?\d/.test(o)?l=i.number:l=i.punctuation,s+=`<span style="color:${l};font-weight:${c}">${Fo(o)}</span>`,r=a.index+o.length}return s+=Fo(n.slice(r)),s}function f0(n,e){return{highlightedHtml:Lt(()=>{const i=n();return i.trim()?h0(i,e()):""})}}const d0={class:"flex items-center justify-between mb-4"},p0={class:"flex items-center gap-2"},m0={class:"flex items-center gap-1.5"},g0=["disabled"],_0=["disabled"],v0=["disabled"],x0=["title","aria-label"],y0={key:0,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},M0={key:1,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},S0={class:"relative flex-1 overflow-hidden"},b0=["innerHTML"],E0={class:"mt-3 min-h-[2rem]"},T0={class:"flex-1 min-w-0"},w0=qs({__name:"JsonInput",props:{modelValue:{},theme:{}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,s=Lt(()=>t.theme.name==="dark"||t.theme.name==="midnight"),{jsonText:r,errorMessage:a,isValid:o,hasContent:l,formatJson:c,compactJson:u,clearJson:h,setJsonText:d}=Dd(t.modelValue),{highlightedHtml:p}=f0(()=>r.value,()=>t.theme),_=Dt(null),v=Dt(null),m=Dt(null),f=Dt(!1),T=Lt(()=>{const S=r.value.split(`
`);return Array.from({length:S.length},(P,N)=>N+1)});ns(r,S=>{i("update:modelValue",S)});function A(){_.value&&v.value&&(_.value.scrollTop=v.value.scrollTop),m.value&&v.value&&(m.value.scrollTop=v.value.scrollTop,m.value.scrollLeft=v.value.scrollLeft)}function b(){setTimeout(()=>{try{if(r.value.trim()){const S=JSON.parse(r.value);r.value=JSON.stringify(S,null,2)}}catch{}},0)}function C(){d(JSON.stringify({name:"John Doe",age:30,email:"john@example.com",address:{street:"123 Main St",city:"New York",country:"USA"},hobbies:["reading","coding","gaming"],isActive:!0},null,2))}async function D(){r.value&&await navigator.clipboard.writeText(r.value)}const L=Dt(!1);function B(){L.value=!L.value}function x(S){S.key==="Escape"&&L.value&&(L.value=!1)}return Nr(()=>window.addEventListener("keydown",x)),Ur(()=>window.removeEventListener("keydown",x)),(S,P)=>(Xe(),Vs(Wc,{to:"body",disabled:!L.value},[W("div",{class:Ae(L.value?"fixed inset-0 z-50 flex flex-col p-4 md:p-6":"flex flex-col h-full")},[L.value?(Xe(),Qe("div",{key:0,class:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:P[0]||(P[0]=N=>L.value=!1)})):ln("",!0),W("div",{class:Ae(L.value?["relative z-10 flex-1 flex flex-col min-h-0 rounded-2xl p-4 md:p-6 overflow-hidden",n.theme.colors.bgCard,n.theme.colors.shadow]:"flex flex-col h-full")},[W("div",d0,[W("div",p0,[W("div",{class:Ae(["w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",s.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"])},[...P[7]||(P[7]=[W("svg",{class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)])],2),W("h2",{class:Ae(["text-lg font-semibold transition-colors duration-300",n.theme.colors.textPrimary])},"Entrada",2)]),W("div",m0,[W("button",{onClick:C,class:Ae(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Cargar datos de ejemplo","aria-label":"Cargar datos de ejemplo"},[...P[8]||(P[8]=[W("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})],-1),W("span",{class:"hidden sm:inline"},"Ejemplo",-1)])],2),ue(l)?(Xe(),Qe("button",{key:0,onClick:D,class:Ae(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Copiar al portapapeles","aria-label":"Copiar JSON al portapapeles"},[...P[9]||(P[9]=[W("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1)])],2)):ln("",!0),W("button",{onClick:P[1]||(P[1]=(...N)=>ue(c)&&ue(c)(...N)),disabled:!ue(l),class:Ae(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",[n.theme.colors.accent,n.theme.colors.accentHover,"focus:ring-primary-500"]]),title:"Formatear JSON","aria-label":"Formatear JSON"},[...P[10]||(P[10]=[W("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1),W("span",{class:"hidden sm:inline"},"Formatear",-1)])],10,g0),W("button",{onClick:P[2]||(P[2]=(...N)=>ue(u)&&ue(u)(...N)),disabled:!ue(l)||!ue(o),class:Ae(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Compactar JSON","aria-label":"Compactar JSON"},[...P[11]||(P[11]=[W("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"})],-1),W("span",{class:"hidden sm:inline"},"Compacto",-1)])],10,_0),W("button",{onClick:P[3]||(P[3]=(...N)=>ue(h)&&ue(h)(...N)),disabled:!ue(l),class:Ae(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",s.value?"text-red-400 bg-red-900/30 hover:bg-red-900/50 focus:ring-red-500":"text-red-600 bg-red-50 hover:bg-red-100 focus:ring-red-300"]),title:"Limpiar contenido","aria-label":"Limpiar contenido"},[...P[12]||(P[12]=[W("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)])],10,v0),W("button",{onClick:B,class:Ae(["inline-flex items-center p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:L.value?"Salir de pantalla completa":"Pantalla completa","aria-label":L.value?"Salir de pantalla completa":"Pantalla completa"},[L.value?(Xe(),Qe("svg",M0,[...P[14]||(P[14]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9L4 4m0 0v4m0-4h4m6 0l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m6 0l5 5m0 0v-4m0 4h-4"},null,-1)])])):(Xe(),Qe("svg",y0,[...P[13]||(P[13]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"},null,-1)])]))],10,x0)])]),W("div",{class:Ae(["flex-1 flex rounded-xl overflow-hidden transition-all duration-200 ring-1",[ue(a)?s.value?"ring-red-500/50 bg-red-900/20":"ring-red-300 bg-red-50/50":f.value?s.value?"ring-primary-500 ring-2 bg-slate-800":"ring-primary-300 ring-2 bg-white":s.value?"ring-slate-600 bg-slate-800/50":"ring-gray-200 bg-surface-secondary"]])},[W("div",{ref_key:"lineNumbersRef",ref:_,class:Ae(["flex flex-col py-4 px-3 text-right select-none overflow-hidden border-r transition-colors",[ue(a)?s.value?"bg-red-900/30 border-red-800 text-red-400":"bg-red-100/50 border-red-200 text-red-400":s.value?"bg-slate-900/50 border-slate-700 text-slate-500":"bg-surface-tertiary border-gray-100 text-gray-400"]]),"aria-hidden":"true"},[(Xe(!0),Qe(an,null,Xc(T.value,N=>(Xe(),Qe("div",{key:N,class:"font-mono text-xs leading-5 tabular-nums"},Pt(N),1))),128))],2),W("div",S0,[W("pre",{ref_key:"preRef",ref:m,class:Ae(["absolute inset-0 m-0 p-4 font-mono text-sm leading-5 whitespace-pre-wrap break-words pointer-events-none overflow-hidden select-none",s.value?"text-slate-200":"text-gray-800"]),"aria-hidden":"true",innerHTML:ue(p)||""},null,10,b0),ym(W("textarea",{ref_key:"textareaRef",ref:v,"onUpdate:modelValue":P[4]||(P[4]=N=>zt(r)?r.value=N:null),onPaste:b,onScroll:A,onFocus:P[5]||(P[5]=N=>f.value=!0),onBlur:P[6]||(P[6]=N=>f.value=!1),placeholder:"Pega o escribe tu JSON aquí...",class:Ae(["absolute inset-0 w-full h-full p-4 font-mono text-sm leading-5 focus:outline-none resize-none bg-transparent whitespace-pre-wrap break-words",s.value?"placeholder:text-slate-500":"placeholder:text-gray-400"]),style:no({"-webkit-text-fill-color":"transparent",color:"transparent","caret-color":s.value?"#e2e8f0":"#374151"}),"aria-label":"Editor de JSON",spellcheck:"false"},null,38),[[t0,ue(r)]])])],2),W("div",E0,[ue(a)?(Xe(),Qe("div",{key:0,class:Ae(["flex items-start gap-2 p-3 border rounded-lg animate-fade-in",s.value?"bg-red-900/30 border-red-800":"bg-red-50 border-red-200"]),role:"alert"},[(Xe(),Qe("svg",{class:Ae(["w-4 h-4 flex-shrink-0 mt-0.5",s.value?"text-red-400":"text-red-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...P[15]||(P[15]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])],2)),W("div",T0,[W("p",{class:Ae(["text-sm font-medium",s.value?"text-red-300":"text-red-800"])},"Error de sintaxis",2),W("p",{class:Ae(["text-xs mt-0.5 truncate",s.value?"text-red-400":"text-red-600"])},Pt(ue(a)),3)])],2)):ue(l)&&ue(o)?(Xe(),Qe("div",{key:1,class:Ae(["flex items-center gap-2 p-3 border rounded-lg animate-fade-in",s.value?"bg-emerald-900/30 border-emerald-800":"bg-emerald-50 border-emerald-200"]),role:"status"},[(Xe(),Qe("svg",{class:Ae(["w-4 h-4",s.value?"text-emerald-400":"text-emerald-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...P[16]||(P[16]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])],2)),W("p",{class:Ae(["text-sm font-medium",s.value?"text-emerald-300":"text-emerald-700"])},"JSON válido",2),W("span",{class:Ae(["ml-auto text-xs tabular-nums",s.value?"text-emerald-400":"text-emerald-600"])},Pt(T.value.length)+" líneas",3)],2)):ln("",!0)])],2)],2)],8,["disabled"]))}}),uh=100;function A0(n,e=0,t=2){const i=Dt(e<t),s=Lt(()=>n===null?"null":Array.isArray(n)?"array":typeof n),r=Lt(()=>s.value==="object"||s.value==="array"),a=Lt(()=>s.value==="array"&&Array.isArray(n)?n.length:s.value==="object"&&typeof n=="object"&&n!==null?Object.keys(n).length:0),o=Lt(()=>s.value==="array"&&Array.isArray(n)?n.map((_,v)=>({key:v,value:_})):s.value==="object"&&typeof n=="object"&&n!==null?Object.entries(n).map(([_,v])=>({key:_,value:v})):[]);function l(){r.value&&(i.value=!i.value)}function c(_){return{string:"text-green-600",number:"text-blue-600",boolean:"text-purple-600",null:"text-gray-500",array:"text-gray-800",object:"text-gray-800"}[_]}function u(_){return typeof _=="string"?_.length>uh?`"${_.slice(0,uh)}…"`:`"${_}"`:_===null?"null":String(_)}function h(){i.value=!0}function d(){i.value=!1}function p(_,v){return _==="array"?`Array[${v}]`:_==="object"?`Object{${v}}`:""}return{isExpanded:i,dataType:s,isExpandable:r,itemCount:a,entries:o,toggleExpand:l,getValueColor:c,formatValue:u,getTypeLabel:p,expandAll:h,collapseAll:d}}const C0={class:"json-node group/node"},R0={class:"flex items-start gap-1.5"},P0=["role","aria-expanded","tabindex"],D0=["title"],L0={class:"tabular-nums"},I0=qs({__name:"JsonNode",props:{data:{type:[String,Number,Boolean,null,Object]},name:{},isRoot:{type:Boolean,default:!1},depth:{default:0},initialExpandDepth:{default:2},lineNumber:{default:1},theme:{}},setup(n){const e=n,t=Lt(()=>e.theme?.name==="dark"||e.theme?.name==="midnight"),i={string:"jsonString",number:"jsonNumber",boolean:"jsonBoolean",null:"jsonNull",object:"jsonObject",array:"jsonArray"},{isExpanded:s,dataType:r,isExpandable:a,itemCount:o,entries:l,toggleExpand:c,formatValue:u}=A0(e.data,e.depth,e.initialExpandDepth);function h(_){switch(_){case"object":return"{}";case"array":return"[]";case"string":return"Aa";case"number":return"#";case"boolean":return"◐";case"null":return"ø";default:return"·"}}function d(_){if(t.value)switch(_){case"object":return"bg-orange-900/50 text-orange-400";case"array":return"bg-cyan-900/50 text-cyan-400";case"string":return"bg-emerald-900/50 text-emerald-400";case"number":return"bg-blue-900/50 text-blue-400";case"boolean":return"bg-violet-900/50 text-violet-400";case"null":return"bg-slate-700 text-slate-400";default:return"bg-slate-700 text-slate-400"}switch(_){case"object":return"bg-orange-100 text-orange-700";case"array":return"bg-cyan-100 text-cyan-700";case"string":return"bg-emerald-100 text-emerald-700";case"number":return"bg-blue-100 text-blue-700";case"boolean":return"bg-violet-100 text-violet-700";case"null":return"bg-gray-100 text-gray-600";default:return"bg-gray-100 text-gray-600"}}function p(_){if(e.theme){const v=i[_];return v?e.theme.colors[v]:e.theme.colors.textSecondary}switch(_){case"string":return"text-emerald-600";case"number":return"text-blue-600";case"boolean":return"text-violet-600";case"null":return"text-gray-500";default:return"text-gray-800"}}return(_,v)=>{const m=km("JsonNode",!0);return Xe(),Qe("div",C0,[W("div",R0,[W("span",{class:Ae(["flex-shrink-0 w-8 text-right text-[10px] select-none font-mono mt-1 tabular-nums opacity-60 group-hover/node:opacity-100 transition-opacity",t.value?"text-slate-500":"text-gray-400"]),"aria-hidden":"true"},Pt(n.lineNumber),3),W("div",{class:Ae(["flex-1 flex items-start gap-1.5 py-1 px-2 -mx-2 rounded-lg transition-all",[ue(a)?t.value?"cursor-pointer hover:bg-slate-700/50":"cursor-pointer hover:bg-primary-50/70":t.value?"hover:bg-slate-700/30":"hover:bg-gray-50"]]),role:ue(a)?"button":void 0,"aria-expanded":ue(a)?ue(s):void 0,tabindex:ue(a)?0:void 0,onClick:v[0]||(v[0]=(...f)=>ue(c)&&ue(c)(...f)),onKeydown:[v[1]||(v[1]=lh((...f)=>ue(c)&&ue(c)(...f),["enter"])),v[2]||(v[2]=lh(s0((...f)=>ue(c)&&ue(c)(...f),["prevent"]),["space"]))]},[ue(a)?(Xe(),Qe("span",{key:0,class:Ae(["flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center rounded transition-colors",ue(s)?t.value?"text-primary-400":"text-primary-500":t.value?"text-slate-500 group-hover/node:text-slate-400":"text-gray-400 group-hover/node:text-gray-600"])},[(Xe(),Qe("svg",{class:Ae(["w-3.5 h-3.5 transition-transform duration-200 ease-out",{"rotate-90":ue(s)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[...v[3]||(v[3]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",d:"M9 5l7 7-7 7"},null,-1)])],2))],2)):(Xe(),Qe("span",{key:1,class:Ae(["flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center text-[9px] font-bold rounded",d(ue(r))]),title:ue(r)},Pt(h(ue(r))),11,D0)),n.isRoot?ln("",!0):(Xe(),Qe("span",{key:2,class:Ae(["font-medium flex-shrink-0",t.value?"text-primary-400":"text-primary-700"])},[Fs(' "'+Pt(n.name)+'"',1),W("span",{class:Ae([t.value?"text-slate-500":"text-gray-400","ml-0.5"])},":",2)],2)),ue(a)?(Xe(),Qe("span",{key:3,class:Ae(["font-mono text-sm flex items-center gap-1.5",t.value?"text-slate-400":"text-gray-600"])},[W("span",{class:Ae(["inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold",ue(r)==="array"?t.value?"bg-cyan-900/50 text-cyan-400":"bg-cyan-100 text-cyan-700":t.value?"bg-orange-900/50 text-orange-400":"bg-orange-100 text-orange-700"])},[Fs(Pt(ue(r)==="array"?"[]":"{}")+" ",1),W("span",L0,Pt(ue(o)),1)],2),ue(s)?ln("",!0):(Xe(),Qe("span",{key:0,class:Ae(["text-xs",t.value?"text-slate-500":"text-gray-400"])},"•••",2))],2)):(Xe(),Qe("span",{key:4,class:Ae([p(ue(r)),"font-mono text-sm break-words max-w-lg"])},Pt(ue(u)(n.data)),3))],42,P0)]),ue(a)&&ue(s)?(Xe(),Qe("div",{key:0,class:Ae(["ml-5 pl-3 border-l-2 transition-colors animate-fade-in",t.value?"border-slate-700 hover:border-slate-600":"border-primary-100 hover:border-primary-200"])},[(Xe(!0),Qe(an,null,Xc(ue(l),(f,T)=>(Xe(),Vs(m,{key:f.key,data:f.value,name:String(f.key),depth:n.depth+1,initialExpandDepth:n.initialExpandDepth,lineNumber:n.lineNumber+T+1,theme:n.theme},null,8,["data","name","depth","initialExpandDepth","lineNumber","theme"]))),128))],2)):ln("",!0)])}}}),Ld=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},N0=Ld(I0,[["__scopeId","data-v-e689d749"]]);function U0(n){return n===null?"null":Array.isArray(n)?"array":typeof n=="object"?"object":typeof n=="string"?"string":typeof n=="number"?"number":typeof n=="boolean"?"boolean":"null"}function F0(n,e){if(e==="object")return`{${Object.keys(n).length}}`;if(e==="array")return`[${n.length}]`;if(e==="string"){const t=n;return t.length>20?`"${t.slice(0,20)}..."`:`"${t}"`}return e==="null"?"null":String(n)}let Id=0;function Nd(n,e,t){const i=U0(n),r={id:`node-${Id++}`,name:e,value:F0(n,i),type:i,children:[],isExpanded:t<2,depth:t};if(i==="object"||i==="array"){const a=i==="array"?n.map((o,l)=>({key:String(l),value:o})):Object.entries(n).map(([o,l])=>({key:o,value:l}));r.children=a.map(o=>Nd(o.value,o.key,t+1))}return r}function O0(n){return Id=0,Nd(n,"root",0)}const Kc="182",Os={ROTATE:0,DOLLY:1,PAN:2},Ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},B0=0,hh=1,z0=2,Aa=1,Ud=2,cr=3,Li=0,cn=1,Vn=2,jn=0,Bs=1,Ll=2,fh=3,dh=4,k0=5,$i=100,V0=101,H0=102,G0=103,W0=104,X0=200,j0=201,Y0=202,q0=203,Il=204,Nl=205,$0=206,K0=207,J0=208,Z0=209,Q0=210,e_=211,t_=212,n_=213,i_=214,Ul=0,Fl=1,Ol=2,Hs=3,Bl=4,zl=5,kl=6,Vl=7,Fd=0,s_=1,r_=2,Yn=0,Od=1,Bd=2,zd=3,kd=4,Vd=5,Hd=6,Gd=7,Wd=300,is=301,Gs=302,Hl=303,Gl=304,uo=306,Wl=1e3,ci=1001,Xl=1002,Bt=1003,a_=1004,Yr=1005,Ot=1006,Oo=1007,Ji=1008,gn=1009,Xd=1010,jd=1011,Rr=1012,Jc=1013,qn=1014,Gn=1015,xn=1016,Zc=1017,Qc=1018,Pr=1020,Yd=35902,qd=35899,$d=1021,Kd=1022,Dn=1023,pi=1026,Zi=1027,Jd=1028,eu=1029,Ws=1030,tu=1031,nu=1033,Ca=33776,Ra=33777,Pa=33778,Da=33779,jl=35840,Yl=35841,ql=35842,$l=35843,Kl=36196,Jl=37492,Zl=37496,Ql=37488,ec=37489,tc=37490,nc=37491,ic=37808,sc=37809,rc=37810,ac=37811,oc=37812,lc=37813,cc=37814,uc=37815,hc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,_c=36492,vc=36494,xc=36495,yc=36283,Mc=36284,Sc=36285,bc=36286,o_=3200,Zd=0,l_=1,Ai="",mn="srgb",Xs="srgb-linear",Wa="linear",ut="srgb",cs=7680,ph=519,c_=512,u_=513,h_=514,iu=515,f_=516,d_=517,su=518,p_=519,Ec=35044,mh="300 es",Wn=2e3,Xa=2001;function Qd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function m_(){const n=ja("canvas");return n.style.display="block",n}const gh={};function Ya(...n){const e="THREE."+n.shift();console.log(e,...n)}function We(...n){const e="THREE."+n.shift();console.warn(e,...n)}function nt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Dr(...n){const e=n.join(" ");e in gh||(gh[e]=!0,We(...n))}function g_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],La=Math.PI/180,qa=180/Math.PI;function Pi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function __(n,e){return(n%e+e)%e}function Bo(n,e,t){return(1-t)*n+t*e}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const v_={DEG2RAD:La};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ss{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==_){let m=l*d+c*p+u*_+h*v;m<0&&(d=-d,p=-p,_=-_,v=-v,m=-m);let f=1-o;if(m<.9995){const T=Math.acos(m),A=Math.sin(T);f=Math.sin(f*T)/A,o=Math.sin(o*T)/A,l=l*f+d*o,c=c*f+p*o,u=u*f+_*o,h=h*f+v*o}else{l=l*f+d*o,c=c*f+p*o,u=u*f+_*o,h=h*f+v*o;const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-o*p,e[t+2]=c*_+u*p+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new U,_h=new ss;class Je{constructor(e,t,i,s,r,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],v=s[0],m=s[3],f=s[6],T=s[1],A=s[4],b=s[7],C=s[2],D=s[5],L=s[8];return r[0]=a*v+o*T+l*C,r[3]=a*m+o*A+l*D,r[6]=a*f+o*b+l*L,r[1]=c*v+u*T+h*C,r[4]=c*m+u*A+h*D,r[7]=c*f+u*b+h*L,r[2]=d*v+p*T+_*C,r[5]=d*m+p*A+_*D,r[8]=d*f+p*b+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,_=t*h+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ko.makeScale(e,t)),this}rotate(e){return this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new Je,vh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function x_(){const n={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Wa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xs]:{primaries:e,whitePoint:i,transfer:Wa,toXYZ:vh,fromXYZ:xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:vh,fromXYZ:xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const it=x_();function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class y_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=ja("canvas")),us.width=e.width,us.height=e.height;const s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M_=0;class ru{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vo(s[a].image)):r.push(Vo(s[a]))}else r=Vo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Vo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?y_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let S_=0;const Ho=new U;class jt extends rs{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=ci,s=ci,r=Ot,a=Ji,o=Dn,l=gn,c=jt.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Pi(),this.name="",this.source=new ru(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ho).x}get height(){return this.source.getSize(Ho).y}get depth(){return this.source.getSize(Ho).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wl:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wl:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Wd;jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,b=(p+1)/2,C=(f+1)/2,D=(u+d)/4,L=(h+v)/4,B=(_+m)/4;return A>b&&A>C?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=D/i,r=L/i):b>C?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=D/s,r=B/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=L/r,s=B/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-v)/T,this.z=(d-u)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b_ extends rs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new jt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ru(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends b_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ep extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E_ extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),$r.subVectors(this.max,Qs),hs.subVectors(e.a,Qs),fs.subVectors(e.b,Qs),ds.subVectors(e.c,Qs),vi.subVectors(fs,hs),xi.subVectors(ds,fs),Vi.subVectors(hs,ds);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Vi.z,Vi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Vi.z,0,-Vi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Vi.y,Vi.x,0];return!Go(t,hs,fs,ds,$r)||(t=[1,0,0,0,1,0,0,0,1],!Go(t,hs,fs,ds,$r))?!1:(Kr.crossVectors(vi,xi),t=[Kr.x,Kr.y,Kr.z],Go(t,hs,fs,ds,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new U,new U,new U,new U,new U,new U,new U,new U],Cn=new U,qr=new Or,hs=new U,fs=new U,ds=new U,vi=new U,xi=new U,Vi=new U,Qs=new U,$r=new U,Kr=new U,Hi=new U;function Go(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Hi.fromArray(n,r);const o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const T_=new Or,er=new U,Wo=new U;class ho{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):T_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);const t=er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(er,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(Wo)),this.expandByPoint(er.copy(e.center).sub(Wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ei=new U,Xo=new U,Jr=new U,yi=new U,jo=new U,Zr=new U,Yo=new U;class fo{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Xo.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Xo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=yi.dot(this.direction),l=-yi.dot(Jr),c=yi.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xo).addScaledVector(Jr,d),p}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,s,r){jo.subVectors(t,e),Zr.subVectors(i,e),Yo.crossVectors(jo,Zr);let a=this.direction.dot(Yo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);const l=o*this.direction.dot(Zr.crossVectors(yi,Zr));if(l<0)return null;const c=o*this.direction.dot(jo.cross(yi));if(c<0||l+c>a)return null;const u=-o*yi.dot(Yo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,s,r,a,o,l,c,u,h,d,p,_,v,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,p,_,v,m)}set(e,t,i,s,r,a,o,l,c,u,h,d,p,_,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,_=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,v=c*h;t[0]=d+v*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,_=o*u,v=o*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w_,e,A_)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Mi.crossVectors(i,dn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Mi.crossVectors(i,dn)),Mi.normalize(),Qr.crossVectors(dn,Mi),s[0]=Mi.x,s[4]=Qr.x,s[8]=dn.x,s[1]=Mi.y,s[5]=Qr.y,s[9]=dn.y,s[2]=Mi.z,s[6]=Qr.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],f=i[14],T=i[3],A=i[7],b=i[11],C=i[15],D=s[0],L=s[4],B=s[8],x=s[12],S=s[1],P=s[5],N=s[9],V=s[13],se=s[2],re=s[6],J=s[10],k=s[14],ne=s[3],ve=s[7],_e=s[11],be=s[15];return r[0]=a*D+o*S+l*se+c*ne,r[4]=a*L+o*P+l*re+c*ve,r[8]=a*B+o*N+l*J+c*_e,r[12]=a*x+o*V+l*k+c*be,r[1]=u*D+h*S+d*se+p*ne,r[5]=u*L+h*P+d*re+p*ve,r[9]=u*B+h*N+d*J+p*_e,r[13]=u*x+h*V+d*k+p*be,r[2]=_*D+v*S+m*se+f*ne,r[6]=_*L+v*P+m*re+f*ve,r[10]=_*B+v*N+m*J+f*_e,r[14]=_*x+v*V+m*k+f*be,r[3]=T*D+A*S+b*se+C*ne,r[7]=T*L+A*P+b*re+C*ve,r[11]=T*B+A*N+b*J+C*_e,r[15]=T*x+A*V+b*k+C*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],f=e[15],T=l*p-c*d,A=o*p-c*h,b=o*d-l*h,C=a*p-c*u,D=a*d-l*u,L=a*h-o*u;return t*(v*T-m*A+f*b)-i*(_*T-m*C+f*D)+s*(_*A-v*C+f*L)-r*(_*b-v*D+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],f=e[15],T=h*m*c-v*d*c+v*l*p-o*m*p-h*l*f+o*d*f,A=_*d*c-u*m*c-_*l*p+a*m*p+u*l*f-a*d*f,b=u*v*c-_*h*c+_*o*p-a*v*p-u*o*f+a*h*f,C=_*h*l-u*v*l-_*o*d+a*v*d+u*o*m-a*h*m,D=t*T+i*A+s*b+r*C;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return e[0]=T*L,e[1]=(v*d*r-h*m*r-v*s*p+i*m*p+h*s*f-i*d*f)*L,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*f+i*l*f)*L,e[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*p-i*l*p)*L,e[4]=A*L,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*f+t*d*f)*L,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*f-t*l*f)*L,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*L,e[8]=b*L,e[9]=(_*h*r-u*v*r-_*i*p+t*v*p+u*i*f-t*h*f)*L,e[10]=(a*v*r-_*o*r+_*i*c-t*v*c-a*i*f+t*o*f)*L,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*p-t*o*p)*L,e[12]=C*L,e[13]=(u*v*s-_*h*s+_*i*d-t*v*d-u*i*m+t*h*m)*L,e[14]=(_*o*s-a*v*s-_*i*l+t*v*l+a*i*m-t*o*m)*L,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*d+t*o*d)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,_=r*h,v=a*u,m=a*h,f=o*h,T=l*c,A=l*u,b=l*h,C=i.x,D=i.y,L=i.z;return s[0]=(1-(v+f))*C,s[1]=(p+b)*C,s[2]=(_-A)*C,s[3]=0,s[4]=(p-b)*D,s[5]=(1-(d+f))*D,s[6]=(m+T)*D,s[7]=0,s[8]=(_+A)*L,s[9]=(m-T)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=ps.set(s[0],s[1],s[2]).length();const a=ps.set(s[4],s[5],s[6]).length(),o=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Rn.copy(this);const c=1/r,u=1/a,h=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Wn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let _,v;if(l)_=r/(a-r),v=a*r/(a-r);else if(o===Wn)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Xa)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Wn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s);let _,v;if(l)_=1/(a-r),v=a/(a-r);else if(o===Wn)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===Xa)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ps=new U,Rn=new yt,w_=new U(0,0,0),A_=new U(1,1,1),Mi=new U,Qr=new U,dn=new U,yh=new yt,Mh=new ss;class $n{constructor(e=0,t=0,i=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class au{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C_=0;const Sh=new U,ms=new ss,ti=new yt,ea=new U,tr=new U,R_=new U,P_=new ss,bh=new U(1,0,0),Eh=new U(0,1,0),Th=new U(0,0,1),wh={type:"added"},D_={type:"removed"},gs={type:"childadded",child:null},qo={type:"childremoved",child:null};class Ct extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new U,t=new $n,i=new ss,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Je}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ea.copy(e):ea.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(tr,ea,this.up):ti.lookAt(ea,tr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ti),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wh),gs.child=e,this.dispatchEvent(gs),gs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D_),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wh),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,R_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,P_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new U(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new U,ni=new U,$o=new U,ii=new U,_s=new U,vs=new U,Ah=new U,Ko=new U,Jo=new U,Zo=new U,Qo=new Et,el=new Et,tl=new Et;class Tn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),ni.subVectors(i,t),$o.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(ni),l=Pn.dot($o),c=ni.dot(ni),u=ni.dot($o),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Qo.setScalar(0),el.setScalar(0),tl.setScalar(0),Qo.fromBufferAttribute(e,t),el.fromBufferAttribute(e,i),tl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Qo,r.x),a.addScaledVector(el,r.y),a.addScaledVector(tl,r.z),a}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),ni.subVectors(e,t),Pn.cross(ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Pn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;_s.subVectors(s,i),vs.subVectors(r,i),Ko.subVectors(e,i);const l=_s.dot(Ko),c=vs.dot(Ko);if(l<=0&&c<=0)return t.copy(i);Jo.subVectors(e,s);const u=_s.dot(Jo),h=vs.dot(Jo);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(_s,a);Zo.subVectors(e,r);const p=_s.dot(Zo),_=vs.dot(Zo);if(_>=0&&p<=_)return t.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(vs,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Ah.subVectors(r,s),o=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Ah,o);const f=1/(m+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(_s,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ta={h:0,s:0,l:0};function nl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=__(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=nl(a,r,e+1/3),this.g=nl(a,r,e),this.b=nl(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=mn){function i(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=tp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return it.workingToColorSpace(Ht.copy(this),e),Math.round(et(Ht.r*255,0,255))*65536+Math.round(et(Ht.g*255,0,255))*256+Math.round(et(Ht.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Ht.copy(this),t);const i=Ht.r,s=Ht.g,r=Ht.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=mn){it.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,s=Ht.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(ta);const i=Bo(Si.h,ta.h,t),s=Bo(Si.s,ta.s,t),r=Bo(Si.l,ta.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ye;Ye.NAMES=tp;let L_=0;class as extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Bs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Nl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Il&&(i.blendSrc=this.blendSrc),this.blendDst!==Nl&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class po extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new U,na=new Me;let I_=0;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ec,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}}class np extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ip extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kt extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let N_=0;const En=new yt,il=new Ct,xs=new U,pn=new Or,nr=new Or,Ft=new U;class en extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qd(e)?ip:np)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(pn.min,nr.min),pn.expandByPoint(Ft),Ft.addVectors(pn.max,nr.max),pn.expandByPoint(Ft)):(pn.expandByPoint(nr.min),pn.expandByPoint(nr.max))}pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(e,c),Ft.add(xs)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<i.count;B++)o[B]=new U,l[B]=new U;const c=new U,u=new U,h=new U,d=new Me,p=new Me,_=new Me,v=new U,m=new U;function f(B,x,S){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,B),p.fromBufferAttribute(r,x),_.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),o[B].add(v),o[x].add(v),o[S].add(v),l[B].add(m),l[x].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let B=0,x=T.length;B<x;++B){const S=T[B],P=S.start,N=S.count;for(let V=P,se=P+N;V<se;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new U,b=new U,C=new U,D=new U;function L(B){C.fromBufferAttribute(s,B),D.copy(C);const x=o[B];A.copy(x),A.sub(C.multiplyScalar(C.dot(x))).normalize(),b.crossVectors(D,x);const P=b.dot(l[B])<0?-1:1;a.setXYZW(B,A.x,A.y,A.z,P)}for(let B=0,x=T.length;B<x;++B){const S=T[B],P=S.start,N=S.count;for(let V=P,se=P+N;V<se;V+=3)L(e.getX(V+0)),L(e.getX(V+1)),L(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new yn(d,u,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ch=new yt,Gi=new fo,ia=new ho,Rh=new U,sa=new U,ra=new U,aa=new U,sl=new U,oa=new U,Ph=new U,la=new U;class Mn extends Ct{constructor(e=new en,t=new po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(sl.fromBufferAttribute(h,e),a?oa.addScaledVector(sl,u):oa.addScaledVector(sl.sub(t),u))}t.add(oa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(ia.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ia,Rh)===null||Gi.origin.distanceToSquared(Rh)>(e.far-e.near)**2))&&(Ch.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Ch),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=a[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,C=A;b<C;b+=3){const D=o.getX(b),L=o.getX(b+1),B=o.getX(b+2);s=ca(this,f,e,i,c,u,h,D,L,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const T=o.getX(m),A=o.getX(m+1),b=o.getX(m+2);s=ca(this,a,e,i,c,u,h,T,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=a[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,C=A;b<C;b+=3){const D=b,L=b+1,B=b+2;s=ca(this,f,e,i,c,u,h,D,L,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const T=m,A=m+1,b=m+2;s=ca(this,a,e,i,c,u,h,T,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function U_(n,e,t,i,s,r,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Li,o),l===null)return null;la.copy(o),la.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:n}}function ca(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,sa),n.getVertexPosition(l,ra),n.getVertexPosition(c,aa);const u=U_(n,e,t,i,sa,ra,aa,Ph);if(u){const h=new U;Tn.getBarycoord(Ph,sa,ra,aa,h),s&&(u.uv=Tn.getInterpolatedAttribute(s,o,l,c,h,new Me)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,o,l,c,h,new Me)),a&&(u.normal=Tn.getInterpolatedAttribute(a,o,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};Tn.getNormal(sa,ra,aa,d.normal),u.face=d,u.barycoord=h}return u}class Br extends en{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function _(v,m,f,T,A,b,C,D,L,B,x){const S=b/L,P=C/B,N=b/2,V=C/2,se=D/2,re=L+1,J=B+1;let k=0,ne=0;const ve=new U;for(let _e=0;_e<J;_e++){const be=_e*P-V;for(let Ve=0;Ve<re;Ve++){const je=Ve*S-N;ve[v]=je*T,ve[m]=be*A,ve[f]=se,c.push(ve.x,ve.y,ve.z),ve[v]=0,ve[m]=0,ve[f]=D>0?1:-1,u.push(ve.x,ve.y,ve.z),h.push(Ve/L),h.push(1-_e/B),k+=1}}for(let _e=0;_e<B;_e++)for(let be=0;be<L;be++){const Ve=d+be+re*_e,je=d+be+re*(_e+1),ht=d+(be+1)+re*(_e+1),ot=d+(be+1)+re*_e;l.push(Ve,je,ot),l.push(je,ht,ot),ne+=6}o.addGroup(p,ne,x),p+=ne,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=js(n[t]);for(const s in i)e[s]=i[s]}return e}function F_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const $a={clone:js,merge:Kt};var O_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O_,this.fragmentShader=B_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=F_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rp extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new U,Dh=new Me,Lh=new Me;class on extends rp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Dh,Lh),t.subVectors(Lh,Dh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(La*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ys=-90,Ms=1;class z_ extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(ys,Ms,e,t);s.layers=this.layers,this.add(s);const r=new on(ys,Ms,e,t);r.layers=this.layers,this.add(r);const a=new on(ys,Ms,e,t);a.layers=this.layers,this.add(a);const o=new on(ys,Ms,e,t);o.layers=this.layers,this.add(o);const l=new on(ys,Ms,e,t);l.layers=this.layers,this.add(l);const c=new on(ys,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ap extends jt{constructor(e=[],t=is,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class op extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ap(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Br(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:jn});r.uniforms.tEquirect.value=t;const a=new Mn(s,r),o=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Ot),new z_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Qi extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k_={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ou{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new ou(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class V_ extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class H_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ec,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new U;class Ka{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ka(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tc extends as{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ss;const ir=new U,bs=new U,Es=new U,Ts=new Me,sr=new Me,lp=new yt,ua=new U,rr=new U,ha=new U,Ih=new Me,al=new Me,Nh=new Me;class Uh extends Ct{constructor(e=new Tc){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new en;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new H_(t,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Ka(i,3,0,!1)),Ss.setAttribute("uv",new Ka(i,2,3,!1))}this.geometry=Ss,this.material=e,this.center=new Me(.5,.5),this.count=1}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),lp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Es.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;fa(ua.set(-.5,-.5,0),Es,a,bs,s,r),fa(rr.set(.5,-.5,0),Es,a,bs,s,r),fa(ha.set(.5,.5,0),Es,a,bs,s,r),Ih.set(0,0),al.set(1,0),Nh.set(1,1);let o=e.ray.intersectTriangle(ua,rr,ha,!1,ir);if(o===null&&(fa(rr.set(-.5,.5,0),Es,a,bs,s,r),al.set(0,1),o=e.ray.intersectTriangle(ua,ha,rr,!1,ir),o===null))return;const l=e.ray.origin.distanceTo(ir);l<e.near||l>e.far||t.push({distance:l,point:ir.clone(),uv:Tn.getInterpolation(ir,ua,rr,ha,Ih,al,Nh,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fa(n,e,t,i,s,r){Ts.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(sr.x=r*Ts.x-s*Ts.y,sr.y=s*Ts.x+r*Ts.y):sr.copy(Ts),n.copy(e),n.x+=sr.x,n.y+=sr.y,n.applyMatrix4(lp)}class G_ extends jt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Bt,u=Bt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ol=new U,W_=new U,X_=new Je;class ai{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ol.subVectors(i,t).cross(W_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ol),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||X_.getNormalMatrix(e),s=this.coplanarPoint(ol).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new ho,j_=new Me(.5,.5),da=new U;class lu{constructor(e=new ai,t=new ai,i=new ai,s=new ai,r=new ai,a=new ai){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],_=r[8],v=r[9],m=r[10],f=r[11],T=r[12],A=r[13],b=r[14],C=r[15];if(s[0].setComponents(c-a,p-u,f-_,C-T).normalize(),s[1].setComponents(c+a,p+u,f+_,C+T).normalize(),s[2].setComponents(c+o,p+h,f+v,C+A).normalize(),s[3].setComponents(c-o,p-h,f-v,C-A).normalize(),i)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,p-d,f-m,C-b).normalize();else if(s[4].setComponents(c-l,p-d,f-m,C-b).normalize(),t===Wn)s[5].setComponents(c+l,p+d,f+m,C+b).normalize();else if(t===Xa)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);const t=j_.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(da.x=s.normal.x>0?e.max.x:e.min.x,da.y=s.normal.y>0?e.max.y:e.min.y,da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cp extends as{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fh=new yt,wc=new fo,pa=new ho,ma=new U;class Y_ extends Ct{constructor(e=new en,t=new cp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;Fh.copy(s).invert(),wc.copy(e.ray).applyMatrix4(Fh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,v=p;_<v;_++){const m=c.getX(_);ma.fromBufferAttribute(h,m),Oh(ma,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,v=p;_<v;_++)ma.fromBufferAttribute(h,_),Oh(ma,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Oh(n,e,t,i,s,r,a){const o=wc.distanceSqToPoint(n);if(o<t){const l=new U;wc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bh extends jt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lr extends jt{constructor(e,t,i=qn,s,r,a,o=Bt,l=Bt,c,u=pi,h=1){if(u!==pi&&u!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ru(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class q_ extends Lr{constructor(e,t=qn,i=is,s,r,a=Bt,o=Bt,l,c=pi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class up extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Me:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,s=[],r=[],a=[],o=new U,l=new yt;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(et(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(et(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hp extends gi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Me){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $_ extends hp{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function cu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const ga=new U,ll=new cu,cl=new cu,ul=new cu;class K_ extends gi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(ga.subVectors(s[0],s[1]).add(s[0]),c=ga);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ga.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ga),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),ll.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,v,m),cl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,v,m),ul.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,v,m)}else this.curveType==="catmullrom"&&(ll.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),cl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ul.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(ll.calc(l),cl.calc(l),ul.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zh(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function J_(n,e){const t=1-n;return t*t*e}function Z_(n,e){return 2*(1-n)*n*e}function Q_(n,e){return n*n*e}function yr(n,e,t,i){return J_(n,e)+Z_(n,t)+Q_(n,i)}function ev(n,e){const t=1-n;return t*t*t*e}function tv(n,e){const t=1-n;return 3*t*t*n*e}function nv(n,e){return 3*(1-n)*n*n*e}function iv(n,e){return n*n*n*e}function Mr(n,e,t,i,s){return ev(n,e)+tv(n,t)+nv(n,i)+iv(n,s)}class sv extends gi{constructor(e=new Me,t=new Me,i=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Me){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Mr(e,s.x,r.x,a.x,o.x),Mr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fp extends gi{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Mr(e,s.x,r.x,a.x,o.x),Mr(e,s.y,r.y,a.y,o.y),Mr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rv extends gi{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class av extends gi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ov extends gi{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(e,s.x,r.x,a.x),yr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dp extends gi{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(yr(e,s.x,r.x,a.x),yr(e,s.y,r.y,a.y),yr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lv extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(zh(o,l.x,c.x,u.x,h.x),zh(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Me().fromArray(s))}return this}}var cv=Object.freeze({__proto__:null,ArcCurve:$_,CatmullRomCurve3:K_,CubicBezierCurve:sv,CubicBezierCurve3:fp,EllipseCurve:hp,LineCurve:rv,LineCurve3:av,QuadraticBezierCurve:ov,QuadraticBezierCurve3:dp,SplineCurve:lv});class mo extends en{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],_=[],v=[],m=[];for(let f=0;f<u;f++){const T=f*d-a;for(let A=0;A<c;A++){const b=A*h-r;_.push(b,-T,0),v.push(0,0,1),m.push(A/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const A=T+c*f,b=T+c*(f+1),C=T+1+c*(f+1),D=T+1+c*f;p.push(A,b,D),p.push(b,C,D)}this.setIndex(p),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.widthSegments,e.heightSegments)}}class uu extends en{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new U,d=new U,p=[],_=[],v=[],m=[];for(let f=0;f<=i;f++){const T=[],A=f/i;let b=0;f===0&&a===0?b=.5/t:f===i&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const D=C/t;h.x=-e*Math.cos(s+D*r)*Math.sin(a+A*o),h.y=e*Math.cos(a+A*o),h.z=e*Math.sin(s+D*r)*Math.sin(a+A*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(D+b,1-A),T.push(c++)}u.push(T)}for(let f=0;f<i;f++)for(let T=0;T<t;T++){const A=u[f][T+1],b=u[f][T],C=u[f+1][T],D=u[f+1][T+1];(f!==0||a>0)&&p.push(A,b,D),(f!==i-1||l<Math.PI)&&p.push(b,C,D)}this.setIndex(p),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hu extends en{constructor(e=new dp(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,l=new U,c=new Me;let u=new U;const h=[],d=[],p=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new kt(h,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(p,2));function v(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),T(),f()}function m(A){u=e.getPointAt(A/t,u);const b=a.normals[A],C=a.binormals[A];for(let D=0;D<=s;D++){const L=D/s*Math.PI*2,B=Math.sin(L),x=-Math.cos(L);l.x=x*b.x+B*C.x,l.y=x*b.y+B*C.y,l.z=x*b.z+B*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function f(){for(let A=1;A<=t;A++)for(let b=1;b<=s;b++){const C=(s+1)*(A-1)+(b-1),D=(s+1)*A+(b-1),L=(s+1)*A+b,B=(s+1)*(A-1)+b;_.push(C,D,B),_.push(D,L,B)}}function T(){for(let A=0;A<=t;A++)for(let b=0;b<=s;b++)c.x=A/t,c.y=b/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new hu(new cv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class uv extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hv extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fv extends hv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dv extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pv extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class go extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const hl=new yt,kh=new U,Vh=new U;class fu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lu,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(kh),Vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vh),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mv extends fu{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=qa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gv extends go{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new mv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class _v extends fu{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}}class vv extends go{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _v}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class _o extends rp{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xv extends fu{constructor(){super(new _o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yv extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new xv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Mv extends go{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sv extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Hh=new yt;class Ev{constructor(e,t,i=0,s=1/0){this.ray=new fo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new au,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(e,t=!0,i=[]){return Ac(e,this,i,t),i.sort(Gh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ac(e[s],this,i,t);return i.sort(Gh),i}}function Gh(n,e){return n.distance-e.distance}function Ac(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Ac(r[a],e,t,!0)}}class Wh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tv extends rs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){We("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Xh(n,e,t,i){const s=wv(i);switch(t){case $d:return n*e;case Jd:return n*e/s.components*s.byteLength;case eu:return n*e/s.components*s.byteLength;case Ws:return n*e*2/s.components*s.byteLength;case tu:return n*e*2/s.components*s.byteLength;case Kd:return n*e*3/s.components*s.byteLength;case Dn:return n*e*4/s.components*s.byteLength;case nu:return n*e*4/s.components*s.byteLength;case Ca:case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:case $l:return Math.max(n,16)*Math.max(e,8)/4;case jl:case ql:return Math.max(n,8)*Math.max(e,8)/2;case Kl:case Jl:case Ql:case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zl:case tc:case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _c:case vc:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yc:case Mc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sc:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wv(n){switch(n){case gn:case Xd:return{byteLength:1,components:1};case Rr:case jd:case xn:return{byteLength:2,components:1};case Zc:case Qc:return{byteLength:2,components:4};case qn:case Jc:case Gn:return{byteLength:4,components:1};case Yd:case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);function pp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Av(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],v=h[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Cv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rv=`#ifdef USE_ALPHAHASH
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
#endif`,Pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nv=`#ifdef USE_AOMAP
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
#endif`,Uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fv=`#ifdef USE_BATCHING
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
#endif`,Ov=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vv=`#ifdef USE_IRIDESCENCE
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
#endif`,Hv=`#ifdef USE_BUMPMAP
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
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jv=`#define PI 3.141592653589793
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
} // validated`,Zv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qv=`vec3 transformedNormal = objectNormal;
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
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
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
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xx=`uniform bool receiveShadow;
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
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tx=`PhysicalMaterial material;
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
#endif`,wx=`uniform sampler2D dfgLUT;
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
}`,Ax=`
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ox=`#if defined( USE_POINTS_UV )
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
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
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
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
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
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ny=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fy=`float getShadowMask() {
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
}`,dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,py=`#ifdef USE_SKINNING
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
#endif`,my=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,My=`#ifdef USE_TRANSMISSION
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
#endif`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cy=`uniform sampler2D t2D;
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`#include <common>
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
}`,Ny=`#if DEPTH_PACKING == 3200
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
}`,Uy=`#define DISTANCE
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
}`,Fy=`#define DISTANCE
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,By=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`uniform float scale;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Vy=`#include <common>
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Gy=`#define LAMBERT
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
}`,Wy=`#define LAMBERT
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
}`,Xy=`#define MATCAP
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
}`,jy=`#define MATCAP
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
}`,Yy=`#define NORMAL
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
}`,qy=`#define NORMAL
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
}`,$y=`#define PHONG
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
}`,Ky=`#define PHONG
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
}`,Jy=`#define STANDARD
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
}`,Zy=`#define STANDARD
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
}`,Qy=`#define TOON
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
}`,eM=`#define TOON
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
}`,tM=`uniform float size;
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
}`,nM=`uniform vec3 diffuse;
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
}`,iM=`#include <common>
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
}`,sM=`uniform vec3 color;
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
}`,rM=`uniform float rotation;
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
}`,aM=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Cv,alphahash_pars_fragment:Rv,alphamap_fragment:Pv,alphamap_pars_fragment:Dv,alphatest_fragment:Lv,alphatest_pars_fragment:Iv,aomap_fragment:Nv,aomap_pars_fragment:Uv,batching_pars_vertex:Fv,batching_vertex:Ov,begin_vertex:Bv,beginnormal_vertex:zv,bsdfs:kv,iridescence_fragment:Vv,bumpmap_pars_fragment:Hv,clipping_planes_fragment:Gv,clipping_planes_pars_fragment:Wv,clipping_planes_pars_vertex:Xv,clipping_planes_vertex:jv,color_fragment:Yv,color_pars_fragment:qv,color_pars_vertex:$v,color_vertex:Kv,common:Jv,cube_uv_reflection_fragment:Zv,defaultnormal_vertex:Qv,displacementmap_pars_vertex:ex,displacementmap_vertex:tx,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:sx,colorspace_pars_fragment:rx,envmap_fragment:ax,envmap_common_pars_fragment:ox,envmap_pars_fragment:lx,envmap_pars_vertex:cx,envmap_physical_pars_fragment:yx,envmap_vertex:ux,fog_vertex:hx,fog_pars_vertex:fx,fog_fragment:dx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:_x,lights_lambert_pars_fragment:vx,lights_pars_begin:xx,lights_toon_fragment:Mx,lights_toon_pars_fragment:Sx,lights_phong_fragment:bx,lights_phong_pars_fragment:Ex,lights_physical_fragment:Tx,lights_physical_pars_fragment:wx,lights_fragment_begin:Ax,lights_fragment_maps:Cx,lights_fragment_end:Rx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Ix,map_fragment:Nx,map_pars_fragment:Ux,map_particle_fragment:Fx,map_particle_pars_fragment:Ox,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:zx,morphinstance_vertex:kx,morphcolor_vertex:Vx,morphnormal_vertex:Hx,morphtarget_pars_vertex:Gx,morphtarget_vertex:Wx,normal_fragment_begin:Xx,normal_fragment_maps:jx,normal_pars_fragment:Yx,normal_pars_vertex:qx,normal_vertex:$x,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Qx,iridescence_pars_fragment:ey,opaque_fragment:ty,packing:ny,premultiplied_alpha_fragment:iy,project_vertex:sy,dithering_fragment:ry,dithering_pars_fragment:ay,roughnessmap_fragment:oy,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:uy,shadowmap_vertex:hy,shadowmask_pars_fragment:fy,skinbase_vertex:dy,skinning_pars_vertex:py,skinning_vertex:my,skinnormal_vertex:gy,specularmap_fragment:_y,specularmap_pars_fragment:vy,tonemapping_fragment:xy,tonemapping_pars_fragment:yy,transmission_fragment:My,transmission_pars_fragment:Sy,uv_pars_fragment:by,uv_pars_vertex:Ey,uv_vertex:Ty,worldpos_vertex:wy,background_vert:Ay,background_frag:Cy,backgroundCube_vert:Ry,backgroundCube_frag:Py,cube_vert:Dy,cube_frag:Ly,depth_vert:Iy,depth_frag:Ny,distance_vert:Uy,distance_frag:Fy,equirect_vert:Oy,equirect_frag:By,linedashed_vert:zy,linedashed_frag:ky,meshbasic_vert:Vy,meshbasic_frag:Hy,meshlambert_vert:Gy,meshlambert_frag:Wy,meshmatcap_vert:Xy,meshmatcap_frag:jy,meshnormal_vert:Yy,meshnormal_frag:qy,meshphong_vert:$y,meshphong_frag:Ky,meshphysical_vert:Jy,meshphysical_frag:Zy,meshtoon_vert:Qy,meshtoon_frag:eM,points_vert:tM,points_frag:nM,shadow_vert:iM,shadow_frag:sM,sprite_vert:rM,sprite_frag:aM},we={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},kn={basic:{uniforms:Kt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Kt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Kt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Kt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Kt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Kt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Kt([we.points,we.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Kt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Kt([we.common,we.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Kt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Kt([we.sprite,we.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Kt([we.common,we.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Kt([we.lights,we.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};kn.physical={uniforms:Kt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const _a={r:0,b:0,g:0},Xi=new $n,oM=new yt;function lM(n,e,t,i,s,r,a){const o=new Ye(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function v(A){let b=!1;const C=_(A);C===null?f(o,l):C&&C.isColor&&(f(C,1),b=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,b){const C=_(b);C&&(C.isCubeTexture||C.mapping===uo)?(u===void 0&&(u=new Mn(new Br(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:js(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Xi.copy(b.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oM.makeRotationFromEuler(Xi)),u.material.toneMapped=it.getTransfer(C.colorSpace)!==ut,(h!==C||d!==C.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Mn(new mo(2,2),new Xt({name:"BackgroundMaterial",uniforms:js(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=it.getTransfer(C.colorSpace)!==ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=C,d=C.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,b){A.getRGB(_a,sp(n)),i.buffers.color.setClear(_a.r,_a.g,_a.b,b,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,b=1){o.set(A),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(o,l)},render:v,addToRenderList:m,dispose:T}}function cM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(S,P,N,V,se){let re=!1;const J=h(V,N,P);r!==J&&(r=J,c(r.object)),re=p(S,V,N,se),re&&_(S,V,N,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,b(S,P,N,V),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,P,N){const V=N.wireframe===!0;let se=i[S.id];se===void 0&&(se={},i[S.id]=se);let re=se[P.id];re===void 0&&(re={},se[P.id]=re);let J=re[V];return J===void 0&&(J=d(l()),re[V]=J),J}function d(S){const P=[],N=[],V=[];for(let se=0;se<t;se++)P[se]=0,N[se]=0,V[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,P,N,V){const se=r.attributes,re=P.attributes;let J=0;const k=N.getAttributes();for(const ne in k)if(k[ne].location>=0){const _e=se[ne];let be=re[ne];if(be===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(be=S.instanceColor)),_e===void 0||_e.attribute!==be||be&&_e.data!==be.data)return!0;J++}return r.attributesNum!==J||r.index!==V}function _(S,P,N,V){const se={},re=P.attributes;let J=0;const k=N.getAttributes();for(const ne in k)if(k[ne].location>=0){let _e=re[ne];_e===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor));const be={};be.attribute=_e,_e&&_e.data&&(be.data=_e.data),se[ne]=be,J++}r.attributes=se,r.attributesNum=J,r.index=V}function v(){const S=r.newAttributes;for(let P=0,N=S.length;P<N;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const N=r.newAttributes,V=r.enabledAttributes,se=r.attributeDivisors;N[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),se[S]!==P&&(n.vertexAttribDivisor(S,P),se[S]=P)}function T(){const S=r.newAttributes,P=r.enabledAttributes;for(let N=0,V=P.length;N<V;N++)P[N]!==S[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function A(S,P,N,V,se,re,J){J===!0?n.vertexAttribIPointer(S,P,N,se,re):n.vertexAttribPointer(S,P,N,V,se,re)}function b(S,P,N,V){v();const se=V.attributes,re=N.getAttributes(),J=P.defaultAttributeValues;for(const k in re){const ne=re[k];if(ne.location>=0){let ve=se[k];if(ve===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ve!==void 0){const _e=ve.normalized,be=ve.itemSize,Ve=e.get(ve);if(Ve===void 0)continue;const je=Ve.buffer,ht=Ve.type,ot=Ve.bytesPerElement,ae=ht===n.INT||ht===n.UNSIGNED_INT||ve.gpuType===Jc;if(ve.isInterleavedBufferAttribute){const ce=ve.data,Ie=ce.stride,he=ve.offset;if(ce.isInstancedInterleavedBuffer){for(let Q=0;Q<ne.locationSize;Q++)f(ne.location+Q,ce.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Q=0;Q<ne.locationSize;Q++)m(ne.location+Q);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Q=0;Q<ne.locationSize;Q++)A(ne.location+Q,be/ne.locationSize,ht,_e,Ie*ot,(he+be/ne.locationSize*Q)*ot,ae)}else{if(ve.isInstancedBufferAttribute){for(let ce=0;ce<ne.locationSize;ce++)f(ne.location+ce,ve.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ce=0;ce<ne.locationSize;ce++)m(ne.location+ce);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ce=0;ce<ne.locationSize;ce++)A(ne.location+ce,be/ne.locationSize,ht,_e,be*ot,be/ne.locationSize*ce*ot,ae)}}else if(J!==void 0){const _e=J[k];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(ne.location,_e);break;case 3:n.vertexAttrib3fv(ne.location,_e);break;case 4:n.vertexAttrib4fv(ne.location,_e);break;default:n.vertexAttrib1fv(ne.location,_e)}}}}T()}function C(){B();for(const S in i){const P=i[S];for(const N in P){const V=P[N];for(const se in V)u(V[se].object),delete V[se];delete P[N]}delete i[S]}}function D(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const N in P){const V=P[N];for(const se in V)u(V[se].object),delete V[se];delete P[N]}delete i[S.id]}function L(S){for(const P in i){const N=i[P];if(N[S.id]===void 0)continue;const V=N[S.id];for(const se in V)u(V[se].object),delete V[se];delete N[S.id]}}function B(){x(),a=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function uM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*d[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function hM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Dn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const B=L===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==gn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Gn&&!B)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:b,maxSamples:C,samples:D}}function fM(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ai,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,A=T*4;let b=f.clippingState||null;l.value=b,b=u(_,d,A,p);for(let C=0;C!==A;++C)b[C]=t[C];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const f=p+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,b=p;A!==v;++A,b+=4)a.copy(h[A]).applyMatrix4(T,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function dM(n){let e=new WeakMap;function t(a,o){return o===Hl?a.mapping=is:o===Gl&&(a.mapping=Gs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hl||o===Gl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new op(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ci=4,jh=[.125,.215,.35,.446,.526,.582],Ki=20,pM=256,ar=new _o,Yh=new Ye;let fl=null,dl=0,pl=0,ml=!1;const mM=new U;class qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=mM}=r;fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,dl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:xn,format:Dn,colorSpace:Xs,depthBuffer:!1},s=$h(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gM(r)),this._blurMaterial=vM(r,e,t),this._ggxMaterial=_M(r,e,t)}return s}_compileMaterial(e){const t=new Mn(new en,e);this._renderer.compile(t,ar)}_sceneToCubeUV(e,t,i,s,r){const l=new on(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Yh),h.toneMapping=Yn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Br,new po({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let f=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,f=!0):(m.color.copy(Yh),f=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const C=this._cubeSize;ws(s,b*C,A>2?C:0,C,C),h.setRenderTarget(s),f&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===is||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ar)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,p=h*d,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-Ci?i-_+Ci:0),f=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,ws(r,m,f,3*v,2*v),s.setRenderTarget(r),s.render(o,ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ws(e,m,f,3*v,2*v),s.setRenderTarget(e),s.render(o,ar)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):Ki;m>Ki&&We(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const f=[];let T=0;for(let L=0;L<Ki;++L){const B=L/v,x=Math.exp(-B*B/2);f.push(x),L===0?T+=x:L<m&&(T+=2*x)}for(let L=0;L<f.length;L++)f[L]=f[L]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=_,d.mipInt.value=A-i;const b=this._sizeLods[s],C=3*b*(s>A-Ci?s-A+Ci:0),D=4*(this._cubeSize-b);ws(t,C,D,3*b,2*b),l.setRenderTarget(t),l.render(h,ar)}}function gM(n){const e=[],t=[],i=[];let s=n;const r=n-Ci+1+jh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Ci?l=jh[a-n+Ci-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,v=3,m=2,f=1,T=new Float32Array(v*_*p),A=new Float32Array(m*_*p),b=new Float32Array(f*_*p);for(let D=0;D<p;D++){const L=D%3*2/3-1,B=D>2?0:-1,x=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];T.set(x,v*_*D),A.set(d,m*_*D);const S=[D,D,D,D,D,D];b.set(S,f*_*D)}const C=new en;C.setAttribute("position",new yn(T,v)),C.setAttribute("uv",new yn(A,m)),C.setAttribute("faceIndex",new yn(b,f)),i.push(new Mn(C,null)),s>Ci&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function $h(n,e,t){const i=new un(n,e,t);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function _M(n,e,t){return new Xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function vM(n,e,t){const i=new Float32Array(Ki),s=new U(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Kh(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jh(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function vo(){return`

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
	`}function xM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hl||l===Gl,u=l===is||l===Gs;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new qh(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new qh(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function yM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Dr("WebGLRenderer: "+i+" extension not supported."),s}}}function MM(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,_=h.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let A=0,b=T.length;A<b;A+=3){const C=T[A+0],D=T[A+1],L=T[A+2];d.push(C,D,D,L,L,C)}}else if(_!==void 0){const T=_.array;v=_.version;for(let A=0,b=T.length/3-1;A<b;A+=3){const C=A+0,D=A+1,L=A+2;d.push(C,D,D,L,L,C)}}else return;const m=new(Qd(d)?ip:np)(d,1);m.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function SM(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),t.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,d*a,_),t.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,i,1)}function h(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,_);let f=0;for(let T=0;T<_;T++)f+=p[T]*v[T];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function bM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function EM(n,e,t){const i=new WeakMap,s=new Et;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){B.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let C=o.attributes.position.count*b,D=1;C>e.maxTextureSize&&(D=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*D*4*h),B=new ep(L,C,D,h);B.type=Gn,B.needsUpdate=!0;const x=b*4;for(let P=0;P<h;P++){const N=f[P],V=T[P],se=A[P],re=C*D*4*P;for(let J=0;J<N.count;J++){const k=J*x;_===!0&&(s.fromBufferAttribute(N,J),L[re+k+0]=s.x,L[re+k+1]=s.y,L[re+k+2]=s.z,L[re+k+3]=0),v===!0&&(s.fromBufferAttribute(V,J),L[re+k+4]=s.x,L[re+k+5]=s.y,L[re+k+6]=s.z,L[re+k+7]=0),m===!0&&(s.fromBufferAttribute(se,J),L[re+k+8]=s.x,L[re+k+9]=s.y,L[re+k+10]=s.z,L[re+k+11]=se.itemSize===4?s.w:1)}}d={count:h,texture:B,size:new Me(C,D)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function TM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const wM={[Od]:"LINEAR_TONE_MAPPING",[Bd]:"REINHARD_TONE_MAPPING",[zd]:"CINEON_TONE_MAPPING",[kd]:"ACES_FILMIC_TONE_MAPPING",[Hd]:"AGX_TONE_MAPPING",[Gd]:"NEUTRAL_TONE_MAPPING",[Vd]:"CUSTOM_TONE_MAPPING"};function AM(n,e,t,i,s){const r=new un(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),a=new un(e,t,{type:xn,depthBuffer:!1,stencilBuffer:!1}),o=new en;o.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new kt([0,2,0,0,2,0],2));const l=new uv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Mn(o,l),u=new _o(-1,1,1,-1,0,1);let h=null,d=null,p=!1,_,v=null,m=[],f=!1;this.setSize=function(T,A){r.setSize(T,A),a.setSize(T,A);for(let b=0;b<m.length;b++){const C=m[b];C.setSize&&C.setSize(T,A)}},this.setEffects=function(T){m=T,f=m.length>0&&m[0].isRenderPass===!0;const A=r.width,b=r.height;for(let C=0;C<m.length;C++){const D=m[C];D.setSize&&D.setSize(A,b)}},this.begin=function(T,A){if(p||T.toneMapping===Yn&&m.length===0)return!1;if(v=A,A!==null){const b=A.width,C=A.height;(r.width!==b||r.height!==C)&&this.setSize(b,C)}return f===!1&&T.setRenderTarget(r),_=T.toneMapping,T.toneMapping=Yn,!0},this.hasRenderPass=function(){return f},this.end=function(T,A){T.toneMapping=_,p=!0;let b=r,C=a;for(let D=0;D<m.length;D++){const L=m[D];if(L.enabled!==!1&&(L.render(T,C,b,A),L.needsSwap!==!1)){const B=b;b=C,C=B}}if(h!==T.outputColorSpace||d!==T.toneMapping){h=T.outputColorSpace,d=T.toneMapping,l.defines={},it.getTransfer(h)===ut&&(l.defines.SRGB_TRANSFER="");const D=wM[d];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,T.setRenderTarget(v),T.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const mp=new jt,Cc=new Lr(1,1),gp=new ep,_p=new E_,vp=new ap,Zh=[],Qh=[],ef=new Float32Array(16),tf=new Float32Array(9),nf=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Zh[s];if(r===void 0&&(r=new Float32Array(s),Zh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xo(n,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function CM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function PM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function LM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;nf.set(i),n.uniformMatrix2fv(this.addr,!1,nf),Ut(t,i)}}function IM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;tf.set(i),n.uniformMatrix3fv(this.addr,!1,tf),Ut(t,i)}}function NM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;ef.set(i),n.uniformMatrix4fv(this.addr,!1,ef),Ut(t,i)}}function UM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function zM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function GM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Cc.compareFunction=t.isReversedDepthBuffer()?su:iu,r=Cc):r=mp,t.setTexture2D(e||r,s)}function WM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_p,s)}function XM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||vp,s)}function jM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gp,s)}function YM(n){switch(n){case 5126:return CM;case 35664:return RM;case 35665:return PM;case 35666:return DM;case 35674:return LM;case 35675:return IM;case 35676:return NM;case 5124:case 35670:return UM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return kM;case 36295:return VM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return jM}}function qM(n,e){n.uniform1fv(this.addr,e)}function $M(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function KM(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function JM(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function ZM(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function QM(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function eS(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tS(n,e){n.uniform1iv(this.addr,e)}function nS(n,e){n.uniform2iv(this.addr,e)}function iS(n,e){n.uniform3iv(this.addr,e)}function sS(n,e){n.uniform4iv(this.addr,e)}function rS(n,e){n.uniform1uiv(this.addr,e)}function aS(n,e){n.uniform2uiv(this.addr,e)}function oS(n,e){n.uniform3uiv(this.addr,e)}function lS(n,e){n.uniform4uiv(this.addr,e)}function cS(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Cc:a=mp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function uS(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_p,r[a])}function hS(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vp,r[a])}function fS(n,e,t){const i=this.cache,s=e.length,r=xo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gp,r[a])}function dS(n){switch(n){case 5126:return qM;case 35664:return $M;case 35665:return KM;case 35666:return JM;case 35674:return ZM;case 35675:return QM;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return sS;case 5125:return rS;case 36294:return aS;case 36295:return oS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return uS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return fS}}class pS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=YM(t.type)}}class mS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dS(t.type)}}class gS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function sf(n,e){n.seq.push(e),n.map[e.id]=e}function _S(n,e,t){const i=n.name,s=i.length;for(gl.lastIndex=0;;){const r=gl.exec(i),a=gl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){sf(t,c===void 0?new pS(o,n,e):new mS(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new gS(o),sf(t,h)),t=h}}}class Ia{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_S(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function rf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vS=37297;let xS=0;function yS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const af=new Je;function MS(n){it._getMatrix(af,it.workingColorSpace,n);const e=`mat3( ${af.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Wa:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function of(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+yS(n.getShaderSource(e),o)}else return r}function SS(n,e){const t=MS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const bS={[Od]:"Linear",[Bd]:"Reinhard",[zd]:"Cineon",[kd]:"ACESFilmic",[Hd]:"AgX",[Gd]:"Neutral",[Vd]:"Custom"};function ES(n,e){const t=bS[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const va=new U;function TS(){it.getLuminanceCoefficients(va);const n=va.x.toFixed(4),e=va.y.toFixed(4),t=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function AS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ur(n){return n!==""}function lf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(RS,DS)}const PS=new Map;function DS(n,e){let t=Ze[e];if(t===void 0){const i=PS.get(e);if(i!==void 0)t=Ze[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}const LS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(n){return n.replace(LS,IS)}function IS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const NS={[Aa]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function US(n){return NS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FS={[is]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE_UV"};function OS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":FS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const BS={[Gs]:"ENVMAP_MODE_REFRACTION"};function zS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":BS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kS={[Fd]:"ENVMAP_BLENDING_MULTIPLY",[s_]:"ENVMAP_BLENDING_MIX",[r_]:"ENVMAP_BLENDING_ADD"};function VS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":kS[n.combine]||"ENVMAP_BLENDING_NONE"}function HS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function GS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=US(t),c=OS(t),u=zS(t),h=VS(t),d=HS(t),p=wS(t),_=AS(r),v=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ur).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ur).join(`
`),f.length>0&&(f+=`
`)):(m=[hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),f=[hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Yn?ES("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,SS("linearToOutputTexel",t.outputColorSpace),TS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=Rc(a),a=lf(a,t),a=cf(a,t),o=Rc(o),o=lf(o,t),o=cf(o,t),a=uf(a),o=uf(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=T+m+a,b=T+f+o,C=rf(s,s.VERTEX_SHADER,A),D=rf(s,s.FRAGMENT_SHADER,b);s.attachShader(v,C),s.attachShader(v,D),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(P){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(v)||"",V=s.getShaderInfoLog(C)||"",se=s.getShaderInfoLog(D)||"",re=N.trim(),J=V.trim(),k=se.trim();let ne=!0,ve=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,C,D);else{const _e=of(s,C,"vertex"),be=of(s,D,"fragment");nt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+re+`
`+_e+`
`+be)}else re!==""?We("WebGLProgram: Program Info Log:",re):(J===""||k==="")&&(ve=!1);ve&&(P.diagnostics={runnable:ne,programLog:re,vertexShader:{log:J,prefix:m},fragmentShader:{log:k,prefix:f}})}s.deleteShader(C),s.deleteShader(D),B=new Ia(s,v),x=CS(s,v)}let B;this.getUniforms=function(){return B===void 0&&L(this),B};let x;this.getAttributes=function(){return x===void 0&&L(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,vS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=D,this}let WS=0;class XS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jS(e),t.set(e,i)),i}}class jS{constructor(e){this.id=WS++,this.code=e,this.usedTimes=0}}function YS(n,e,t,i,s,r,a){const o=new au,l=new XS,c=new Set,u=[],h=new Map,d=s.logarithmicDepthBuffer;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,N,V){const se=N.fog,re=V.geometry,J=x.isMeshStandardMaterial?N.environment:null,k=(x.isMeshStandardMaterial?t:e).get(x.envMap||J),ne=k&&k.mapping===uo?k.image.height:null,ve=_[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const _e=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,be=_e!==void 0?_e.length:0;let Ve=0;re.morphAttributes.position!==void 0&&(Ve=1),re.morphAttributes.normal!==void 0&&(Ve=2),re.morphAttributes.color!==void 0&&(Ve=3);let je,ht,ot,ae;if(ve){const lt=kn[ve];je=lt.vertexShader,ht=lt.fragmentShader}else je=x.vertexShader,ht=x.fragmentShader,l.update(x),ot=l.getVertexShaderID(x),ae=l.getFragmentShaderID(x);const ce=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),he=V.isInstancedMesh===!0,Q=V.isBatchedMesh===!0,me=!!x.map,E=!!x.matcap,R=!!k,O=!!x.aoMap,Y=!!x.lightMap,H=!!x.bumpMap,$=!!x.normalMap,w=!!x.displacementMap,oe=!!x.emissiveMap,ee=!!x.metalnessMap,q=!!x.roughnessMap,ie=x.anisotropy>0,y=x.clearcoat>0,g=x.dispersion>0,I=x.iridescence>0,j=x.sheen>0,te=x.transmission>0,X=ie&&!!x.anisotropyMap,Ce=y&&!!x.clearcoatMap,de=y&&!!x.clearcoatNormalMap,De=y&&!!x.clearcoatRoughnessMap,Oe=I&&!!x.iridescenceMap,fe=I&&!!x.iridescenceThicknessMap,ye=j&&!!x.sheenColorMap,Ee=j&&!!x.sheenRoughnessMap,Le=!!x.specularMap,xe=!!x.specularColorMap,Ke=!!x.specularIntensityMap,F=te&&!!x.transmissionMap,Pe=te&&!!x.thicknessMap,ge=!!x.gradientMap,Ne=!!x.alphaMap,pe=x.alphaTest>0,le=!!x.alphaHash,Se=!!x.extensions;let qe=Yn;x.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(qe=n.toneMapping);const _t={shaderID:ve,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:ht,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Q,batchingColor:Q&&V._colorsTexture!==null,instancing:he,instancingColor:he&&V.instanceColor!==null,instancingMorph:he&&V.morphTexture!==null,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Xs,alphaToCoverage:!!x.alphaToCoverage,map:me,matcap:E,envMap:R,envMapMode:R&&k.mapping,envMapCubeUVHeight:ne,aoMap:O,lightMap:Y,bumpMap:H,normalMap:$,displacementMap:w,emissiveMap:oe,normalMapObjectSpace:$&&x.normalMapType===l_,normalMapTangentSpace:$&&x.normalMapType===Zd,metalnessMap:ee,roughnessMap:q,anisotropy:ie,anisotropyMap:X,clearcoat:y,clearcoatMap:Ce,clearcoatNormalMap:de,clearcoatRoughnessMap:De,dispersion:g,iridescence:I,iridescenceMap:Oe,iridescenceThicknessMap:fe,sheen:j,sheenColorMap:ye,sheenRoughnessMap:Ee,specularMap:Le,specularColorMap:xe,specularIntensityMap:Ke,transmission:te,transmissionMap:F,thicknessMap:Pe,gradientMap:ge,opaque:x.transparent===!1&&x.blending===Bs&&x.alphaToCoverage===!1,alphaMap:Ne,alphaTest:pe,alphaHash:le,combine:x.combine,mapUv:me&&v(x.map.channel),aoMapUv:O&&v(x.aoMap.channel),lightMapUv:Y&&v(x.lightMap.channel),bumpMapUv:H&&v(x.bumpMap.channel),normalMapUv:$&&v(x.normalMap.channel),displacementMapUv:w&&v(x.displacementMap.channel),emissiveMapUv:oe&&v(x.emissiveMap.channel),metalnessMapUv:ee&&v(x.metalnessMap.channel),roughnessMapUv:q&&v(x.roughnessMap.channel),anisotropyMapUv:X&&v(x.anisotropyMap.channel),clearcoatMapUv:Ce&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(x.sheenRoughnessMap.channel),specularMapUv:Le&&v(x.specularMap.channel),specularColorMapUv:xe&&v(x.specularColorMap.channel),specularIntensityMapUv:Ke&&v(x.specularIntensityMap.channel),transmissionMapUv:F&&v(x.transmissionMap.channel),thicknessMapUv:Pe&&v(x.thicknessMap.channel),alphaMapUv:Ne&&v(x.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&($||ie),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!re.attributes.uv&&(me||Ne),fog:!!se,useFog:x.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ie,skinning:V.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:me&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===ut,decodeVideoTextureEmissive:oe&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vn,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||Q)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function f(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(T(S,x),A(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function T(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function A(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function b(x){const S=_[x.type];let P;if(S){const N=kn[S];P=$a.clone(N.uniforms)}else P=x.uniforms;return P}function C(x,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new GS(n,S,x,r),u.push(P),h.set(S,P)),P}function D(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function L(x){l.remove(x)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:C,releaseProgram:D,releaseShaderCache:L,programs:u,dispose:B}}function qS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function $S(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ff(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function df(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,d,p,_,v,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:v,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function o(h,d,p,_,v,m){const f=a(h,d,p,_,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,_,v,m){const f=a(h,d,p,_,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||$S),i.length>1&&i.sort(d||ff),s.length>1&&s.sort(d||ff)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function KS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new df,n.set(i,[a])):s>=r.length?(a=new df,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function JS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ye};break;case"SpotLight":t={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function ZS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let QS=0;function eb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tb(n){const e=new JS,t=ZS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new yt,a=new yt;function o(c){let u=0,h=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,_=0,v=0,m=0,f=0,T=0,A=0,b=0,C=0,D=0,L=0;c.sort(eb);for(let x=0,S=c.length;x<S;x++){const P=c[x],N=P.color,V=P.intensity,se=P.distance;let re=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ws?re=P.shadow.map.texture:re=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=N.r*V,h+=N.g*V,d+=N.b*V;else if(P.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(P.sh.coefficients[J],V);L++}else if(P.isDirectionalLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,ne=t.get(P);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,i.directionalShadow[p]=ne,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=P.shadow.matrix,T++}i.directional[p]=J,p++}else if(P.isSpotLight){const J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(N).multiplyScalar(V),J.distance=se,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,i.spot[v]=J;const k=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,k.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[v]=k.matrix,P.castShadow){const ne=t.get(P);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,i.spotShadow[v]=ne,i.spotShadowMap[v]=re,b++}v++}else if(P.isRectAreaLight){const J=e.get(P);J.color.copy(N).multiplyScalar(V),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=J,m++}else if(P.isPointLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){const k=P.shadow,ne=t.get(P);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,ne.shadowCameraNear=k.camera.near,ne.shadowCameraFar=k.camera.far,i.pointShadow[_]=ne,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=P.shadow.matrix,A++}i.point[_]=J,_++}else if(P.isHemisphereLight){const J=e.get(P);J.skyColor.copy(P.color).multiplyScalar(V),J.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[f]=J,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const B=i.hash;(B.directionalLength!==p||B.pointLength!==_||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==f||B.numDirectionalShadows!==T||B.numPointShadows!==A||B.numSpotShadows!==b||B.numSpotMaps!==C||B.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+C-D,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=L,B.directionalLength=p,B.pointLength=_,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=f,B.numDirectionalShadows=T,B.numPointShadows=A,B.numSpotShadows=b,B.numSpotMaps=C,B.numLightProbes=L,i.version=QS++)}function l(c,u){let h=0,d=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const A=c[f];if(A.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(A.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function pf(n){const e=new tb(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function nb(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new pf(n),e.set(s,[o])):r>=a.length?(o=new pf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sb=`uniform sampler2D shadow_pass;
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
}`,rb=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ab=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],mf=new yt,or=new U,_l=new U;function ob(n,e,t){let i=new lu;const s=new Me,r=new Me,a=new Et,o=new dv,l=new pv,c={},u=t.maxTextureSize,h={[Li]:cn,[cn]:Li,[Vn]:Vn},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:ib,fragmentShader:sb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let f=this.type;this.render=function(D,L,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;D.type===Ud&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),D.type=Aa);const x=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(jn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const V=f!==this.type;V&&L.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(re=>re.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,re=D.length;se<re;se++){const J=D[se],k=J.shadow;if(k===void 0){We("WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ne=k.getFrameExtents();if(s.multiply(ne),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,k.mapSize.y=r.y)),k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===cr){if(J.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new un(s.x,s.y,{format:Ws,type:xn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),k.map.texture.name=J.name+".shadowMap",k.map.depthTexture=new Lr(s.x,s.y,Gn),k.map.depthTexture.name=J.name+".shadowMapDepth",k.map.depthTexture.format=pi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Bt,k.map.depthTexture.magFilter=Bt}else{J.isPointLight?(k.map=new op(s.x),k.map.depthTexture=new q_(s.x,qn)):(k.map=new un(s.x,s.y),k.map.depthTexture=new Lr(s.x,s.y,qn)),k.map.depthTexture.name=J.name+".shadowMap",k.map.depthTexture.format=pi;const _e=n.state.buffers.depth.getReversed();this.type===Aa?(k.map.depthTexture.compareFunction=_e?su:iu,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Bt,k.map.depthTexture.magFilter=Bt)}k.camera.updateProjectionMatrix()}const ve=k.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<ve;_e++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,_e),n.clear();else{_e===0&&(n.setRenderTarget(k.map),n.clear());const be=k.getViewport(_e);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),N.viewport(a)}if(J.isPointLight){const be=k.camera,Ve=k.matrix,je=J.distance||be.far;je!==be.far&&(be.far=je,be.updateProjectionMatrix()),or.setFromMatrixPosition(J.matrixWorld),be.position.copy(or),_l.copy(be.position),_l.add(rb[_e]),be.up.copy(ab[_e]),be.lookAt(_l),be.updateMatrixWorld(),Ve.makeTranslation(-or.x,-or.y,-or.z),mf.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),k._frustum.setFromProjectionMatrix(mf,be.coordinateSystem,be.reversedDepth)}else k.updateMatrices(J);i=k.getFrustum(),b(L,B,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===cr&&T(k,B),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(x,S,P)};function T(D,L){const B=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new un(s.x,s.y,{format:Ws,type:xn})),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(L,null,B,d,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(L,null,B,p,v,null)}function A(D,L,B,x){let S=null;const P=B.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(P!==void 0)S=P;else if(S=B.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const N=S.uuid,V=L.uuid;let se=c[N];se===void 0&&(se={},c[N]=se);let re=se[V];re===void 0&&(re=S.clone(),se[V]=re,L.addEventListener("dispose",C)),S=re}if(S.visible=L.visible,S.wireframe=L.wireframe,x===cr?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:h[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=B}return S}function b(D,L,B,x,S){if(D.visible===!1)return;if(D.layers.test(L.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===cr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,D.matrixWorld);const V=e.update(D),se=D.material;if(Array.isArray(se)){const re=V.groups;for(let J=0,k=re.length;J<k;J++){const ne=re[J],ve=se[ne.materialIndex];if(ve&&ve.visible){const _e=A(D,ve,x,S);D.onBeforeShadow(n,D,L,B,V,_e,ne),n.renderBufferDirect(B,null,V,_e,D,ne),D.onAfterShadow(n,D,L,B,V,_e,ne)}}}else if(se.visible){const re=A(D,se,x,S);D.onBeforeShadow(n,D,L,B,V,re,null),n.renderBufferDirect(B,null,V,re,D,null),D.onAfterShadow(n,D,L,B,V,re,null)}}const N=D.children;for(let V=0,se=N.length;V<se;V++)b(N[V],L,B,x,S)}function C(D){D.target.removeEventListener("dispose",C);for(const B in c){const x=c[B],S=D.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const lb={[Ul]:Fl,[Ol]:kl,[Bl]:Vl,[Hs]:zl,[Fl]:Ul,[kl]:Ol,[Vl]:Bl,[zl]:Hs};function cb(n,e){function t(){let F=!1;const Pe=new Et;let ge=null;const Ne=new Et(0,0,0,0);return{setMask:function(pe){ge!==pe&&!F&&(n.colorMask(pe,pe,pe,pe),ge=pe)},setLocked:function(pe){F=pe},setClear:function(pe,le,Se,qe,_t){_t===!0&&(pe*=qe,le*=qe,Se*=qe),Pe.set(pe,le,Se,qe),Ne.equals(Pe)===!1&&(n.clearColor(pe,le,Se,qe),Ne.copy(Pe))},reset:function(){F=!1,ge=null,Ne.set(-1,0,0,0)}}}function i(){let F=!1,Pe=!1,ge=null,Ne=null,pe=null;return{setReversed:function(le){if(Pe!==le){const Se=e.get("EXT_clip_control");le?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),Pe=le;const qe=pe;pe=null,this.setClear(qe)}},getReversed:function(){return Pe},setTest:function(le){le?ce(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(le){ge!==le&&!F&&(n.depthMask(le),ge=le)},setFunc:function(le){if(Pe&&(le=lb[le]),Ne!==le){switch(le){case Ul:n.depthFunc(n.NEVER);break;case Fl:n.depthFunc(n.ALWAYS);break;case Ol:n.depthFunc(n.LESS);break;case Hs:n.depthFunc(n.LEQUAL);break;case Bl:n.depthFunc(n.EQUAL);break;case zl:n.depthFunc(n.GEQUAL);break;case kl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=le}},setLocked:function(le){F=le},setClear:function(le){pe!==le&&(Pe&&(le=1-le),n.clearDepth(le),pe=le)},reset:function(){F=!1,ge=null,Ne=null,pe=null,Pe=!1}}}function s(){let F=!1,Pe=null,ge=null,Ne=null,pe=null,le=null,Se=null,qe=null,_t=null;return{setTest:function(lt){F||(lt?ce(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(lt){Pe!==lt&&!F&&(n.stencilMask(lt),Pe=lt)},setFunc:function(lt,Un,Kn){(ge!==lt||Ne!==Un||pe!==Kn)&&(n.stencilFunc(lt,Un,Kn),ge=lt,Ne=Un,pe=Kn)},setOp:function(lt,Un,Kn){(le!==lt||Se!==Un||qe!==Kn)&&(n.stencilOp(lt,Un,Kn),le=lt,Se=Un,qe=Kn)},setLocked:function(lt){F=lt},setClear:function(lt){_t!==lt&&(n.clearStencil(lt),_t=lt)},reset:function(){F=!1,Pe=null,ge=null,Ne=null,pe=null,le=null,Se=null,qe=null,_t=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,v=!1,m=null,f=null,T=null,A=null,b=null,C=null,D=null,L=new Ye(0,0,0),B=0,x=!1,S=null,P=null,N=null,V=null,se=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,k=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ne)[1]),J=k>=1):ne.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),J=k>=2);let ve=null,_e={};const be=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),je=new Et().fromArray(be),ht=new Et().fromArray(Ve);function ot(F,Pe,ge,Ne){const pe=new Uint8Array(4),le=n.createTexture();n.bindTexture(F,le),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<ge;Se++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Pe,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(Pe+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return le}const ae={};ae[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),a.setFunc(Hs),H(!1),$(hh),ce(n.CULL_FACE),O(jn);function ce(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ie(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function he(F,Pe){return h[F]!==Pe?(n.bindFramebuffer(F,Pe),h[F]=Pe,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Pe),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Q(F,Pe){let ge=p,Ne=!1;if(F){ge=d.get(Pe),ge===void 0&&(ge=[],d.set(Pe,ge));const pe=F.textures;if(ge.length!==pe.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Se=pe.length;le<Se;le++)ge[le]=n.COLOR_ATTACHMENT0+le;ge.length=pe.length,Ne=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(ge)}function me(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const E={[$i]:n.FUNC_ADD,[V0]:n.FUNC_SUBTRACT,[H0]:n.FUNC_REVERSE_SUBTRACT};E[G0]=n.MIN,E[W0]=n.MAX;const R={[X0]:n.ZERO,[j0]:n.ONE,[Y0]:n.SRC_COLOR,[Il]:n.SRC_ALPHA,[Q0]:n.SRC_ALPHA_SATURATE,[J0]:n.DST_COLOR,[$0]:n.DST_ALPHA,[q0]:n.ONE_MINUS_SRC_COLOR,[Nl]:n.ONE_MINUS_SRC_ALPHA,[Z0]:n.ONE_MINUS_DST_COLOR,[K0]:n.ONE_MINUS_DST_ALPHA,[e_]:n.CONSTANT_COLOR,[t_]:n.ONE_MINUS_CONSTANT_COLOR,[n_]:n.CONSTANT_ALPHA,[i_]:n.ONE_MINUS_CONSTANT_ALPHA};function O(F,Pe,ge,Ne,pe,le,Se,qe,_t,lt){if(F===jn){v===!0&&(Ie(n.BLEND),v=!1);return}if(v===!1&&(ce(n.BLEND),v=!0),F!==k0){if(F!==m||lt!==x){if((f!==$i||b!==$i)&&(n.blendEquation(n.FUNC_ADD),f=$i,b=$i),lt)switch(F){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFunc(n.ONE,n.ONE);break;case fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:nt("WebGLState: Invalid blending: ",F);break}else switch(F){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fh:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dh:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",F);break}T=null,A=null,C=null,D=null,L.set(0,0,0),B=0,m=F,x=lt}return}pe=pe||Pe,le=le||ge,Se=Se||Ne,(Pe!==f||pe!==b)&&(n.blendEquationSeparate(E[Pe],E[pe]),f=Pe,b=pe),(ge!==T||Ne!==A||le!==C||Se!==D)&&(n.blendFuncSeparate(R[ge],R[Ne],R[le],R[Se]),T=ge,A=Ne,C=le,D=Se),(qe.equals(L)===!1||_t!==B)&&(n.blendColor(qe.r,qe.g,qe.b,_t),L.copy(qe),B=_t),m=F,x=!1}function Y(F,Pe){F.side===Vn?Ie(n.CULL_FACE):ce(n.CULL_FACE);let ge=F.side===cn;Pe&&(ge=!ge),H(ge),F.blending===Bs&&F.transparent===!1?O(jn):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const Ne=F.stencilWrite;o.setTest(Ne),Ne&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function $(F){F!==B0?(ce(n.CULL_FACE),F!==P&&(F===hh?n.cullFace(n.BACK):F===z0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),P=F}function w(F){F!==N&&(J&&n.lineWidth(F),N=F)}function oe(F,Pe,ge){F?(ce(n.POLYGON_OFFSET_FILL),(V!==Pe||se!==ge)&&(n.polygonOffset(Pe,ge),V=Pe,se=ge)):Ie(n.POLYGON_OFFSET_FILL)}function ee(F){F?ce(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function q(F){F===void 0&&(F=n.TEXTURE0+re-1),ve!==F&&(n.activeTexture(F),ve=F)}function ie(F,Pe,ge){ge===void 0&&(ve===null?ge=n.TEXTURE0+re-1:ge=ve);let Ne=_e[ge];Ne===void 0&&(Ne={type:void 0,texture:void 0},_e[ge]=Ne),(Ne.type!==F||Ne.texture!==Pe)&&(ve!==ge&&(n.activeTexture(ge),ve=ge),n.bindTexture(F,Pe||ae[F]),Ne.type=F,Ne.texture=Pe)}function y(){const F=_e[ve];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function j(){try{n.texSubImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function te(){try{n.texSubImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function de(){try{n.texStorage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function De(){try{n.texStorage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function Oe(){try{n.texImage2D(...arguments)}catch(F){nt("WebGLState:",F)}}function fe(){try{n.texImage3D(...arguments)}catch(F){nt("WebGLState:",F)}}function ye(F){je.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),je.copy(F))}function Ee(F){ht.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ht.copy(F))}function Le(F,Pe){let ge=c.get(Pe);ge===void 0&&(ge=new WeakMap,c.set(Pe,ge));let Ne=ge.get(F);Ne===void 0&&(Ne=n.getUniformBlockIndex(Pe,F.name),ge.set(F,Ne))}function xe(F,Pe){const Ne=c.get(Pe).get(F);l.get(Pe)!==Ne&&(n.uniformBlockBinding(Pe,Ne,F.__bindingPointIndex),l.set(Pe,Ne))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ve=null,_e={},h={},d=new WeakMap,p=[],_=null,v=!1,m=null,f=null,T=null,A=null,b=null,C=null,D=null,L=new Ye(0,0,0),B=0,x=!1,S=null,P=null,N=null,V=null,se=null,je.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Ie,bindFramebuffer:he,drawBuffers:Q,useProgram:me,setBlending:O,setMaterial:Y,setFlipSided:H,setCullFace:$,setLineWidth:w,setPolygonOffset:oe,setScissorTest:ee,activeTexture:q,bindTexture:ie,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Oe,texImage3D:fe,updateUBOMapping:Le,uniformBlockBinding:xe,texStorage2D:de,texStorage3D:De,texSubImage2D:j,texSubImage3D:te,compressedTexSubImage2D:X,compressedTexSubImage3D:Ce,scissor:ye,viewport:Ee,reset:Ke}}function ub(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return p?new OffscreenCanvas(y,g):ja("canvas")}function v(y,g,I){let j=1;const te=ie(y);if((te.width>I||te.height>I)&&(j=I/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(j*te.width),Ce=Math.floor(j*te.height);h===void 0&&(h=_(X,Ce));const de=g?_(X,Ce):h;return de.width=X,de.height=Ce,de.getContext("2d").drawImage(y,0,0,X,Ce),We("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+X+"x"+Ce+")."),de}else return"data"in y&&We("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),y;return y}function m(y){return y.generateMipmaps}function f(y){n.generateMipmap(y)}function T(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(y,g,I,j,te=!1){if(y!==null){if(n[y]!==void 0)return n[y];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=g;if(g===n.RED&&(I===n.FLOAT&&(X=n.R32F),I===n.HALF_FLOAT&&(X=n.R16F),I===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.R8UI),I===n.UNSIGNED_SHORT&&(X=n.R16UI),I===n.UNSIGNED_INT&&(X=n.R32UI),I===n.BYTE&&(X=n.R8I),I===n.SHORT&&(X=n.R16I),I===n.INT&&(X=n.R32I)),g===n.RG&&(I===n.FLOAT&&(X=n.RG32F),I===n.HALF_FLOAT&&(X=n.RG16F),I===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RG8UI),I===n.UNSIGNED_SHORT&&(X=n.RG16UI),I===n.UNSIGNED_INT&&(X=n.RG32UI),I===n.BYTE&&(X=n.RG8I),I===n.SHORT&&(X=n.RG16I),I===n.INT&&(X=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGB8UI),I===n.UNSIGNED_SHORT&&(X=n.RGB16UI),I===n.UNSIGNED_INT&&(X=n.RGB32UI),I===n.BYTE&&(X=n.RGB8I),I===n.SHORT&&(X=n.RGB16I),I===n.INT&&(X=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),I===n.UNSIGNED_INT&&(X=n.RGBA32UI),I===n.BYTE&&(X=n.RGBA8I),I===n.SHORT&&(X=n.RGBA16I),I===n.INT&&(X=n.RGBA32I)),g===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),g===n.RGBA){const Ce=te?Wa:it.getTransfer(j);I===n.FLOAT&&(X=n.RGBA32F),I===n.HALF_FLOAT&&(X=n.RGBA16F),I===n.UNSIGNED_BYTE&&(X=Ce===ut?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(y,g){let I;return y?g===null||g===qn||g===Pr?I=n.DEPTH24_STENCIL8:g===Gn?I=n.DEPTH32F_STENCIL8:g===Rr&&(I=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===qn||g===Pr?I=n.DEPTH_COMPONENT24:g===Gn?I=n.DEPTH_COMPONENT32F:g===Rr&&(I=n.DEPTH_COMPONENT16),I}function C(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Bt&&y.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function D(y){const g=y.target;g.removeEventListener("dispose",D),B(g),g.isVideoTexture&&u.delete(g)}function L(y){const g=y.target;g.removeEventListener("dispose",L),S(g)}function B(y){const g=i.get(y);if(g.__webglInit===void 0)return;const I=y.source,j=d.get(I);if(j){const te=j[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&x(y),Object.keys(j).length===0&&d.delete(I)}i.remove(y)}function x(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const I=y.source,j=d.get(I);delete j[g.__cacheKey],a.memory.textures--}function S(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(g.__webglFramebuffer[j]))for(let te=0;te<g.__webglFramebuffer[j].length;te++)n.deleteFramebuffer(g.__webglFramebuffer[j][te]);else n.deleteFramebuffer(g.__webglFramebuffer[j]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[j])}else{if(Array.isArray(g.__webglFramebuffer))for(let j=0;j<g.__webglFramebuffer.length;j++)n.deleteFramebuffer(g.__webglFramebuffer[j]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let j=0;j<g.__webglColorRenderbuffer.length;j++)g.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=y.textures;for(let j=0,te=I.length;j<te;j++){const X=i.get(I[j]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(I[j])}i.remove(y)}let P=0;function N(){P=0}function V(){const y=P;return y>=s.maxTextures&&We("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),P+=1,y}function se(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function re(y,g){const I=i.get(y);if(y.isVideoTexture&&ee(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&I.__version!==y.version){const j=y.image;if(j===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(I,y,g);return}}else y.isExternalTexture&&(I.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function J(y,g){const I=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){ae(I,y,g);return}else y.isExternalTexture&&(I.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function k(y,g){const I=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){ae(I,y,g);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function ne(y,g){const I=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&I.__version!==y.version){ce(I,y,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const ve={[Wl]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[Xl]:n.MIRRORED_REPEAT},_e={[Bt]:n.NEAREST,[a_]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[Oo]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},be={[c_]:n.NEVER,[p_]:n.ALWAYS,[u_]:n.LESS,[iu]:n.LEQUAL,[h_]:n.EQUAL,[su]:n.GEQUAL,[f_]:n.GREATER,[d_]:n.NOTEQUAL};function Ve(y,g){if(g.type===Gn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ot||g.magFilter===Oo||g.magFilter===Yr||g.magFilter===Ji||g.minFilter===Ot||g.minFilter===Oo||g.minFilter===Yr||g.minFilter===Ji)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ve[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ve[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ve[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,_e[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,_e[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,be[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bt||g.minFilter!==Yr&&g.minFilter!==Ji||g.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function je(y,g){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",D));const j=g.source;let te=d.get(j);te===void 0&&(te={},d.set(j,te));const X=se(g);if(X!==y.__cacheKey){te[X]===void 0&&(te[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),te[X].usedTimes++;const Ce=te[y.__cacheKey];Ce!==void 0&&(te[y.__cacheKey].usedTimes--,Ce.usedTimes===0&&x(g)),y.__cacheKey=X,y.__webglTexture=te[X].texture}return I}function ht(y,g,I){return Math.floor(Math.floor(y/I)/g)}function ot(y,g,I,j){const X=y.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,I,j,g.data);else{X.sort((fe,ye)=>fe.start-ye.start);let Ce=0;for(let fe=1;fe<X.length;fe++){const ye=X[Ce],Ee=X[fe],Le=ye.start+ye.count,xe=ht(Ee.start,g.width,4),Ke=ht(ye.start,g.width,4);Ee.start<=Le+1&&xe===Ke&&ht(Ee.start+Ee.count-1,g.width,4)===xe?ye.count=Math.max(ye.count,Ee.start+Ee.count-ye.start):(++Ce,X[Ce]=Ee)}X.length=Ce+1;const de=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let fe=0,ye=X.length;fe<ye;fe++){const Ee=X[fe],Le=Math.floor(Ee.start/4),xe=Math.ceil(Ee.count/4),Ke=Le%g.width,F=Math.floor(Le/g.width),Pe=xe,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ke,F,Pe,ge,I,j,g.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function ae(y,g,I){let j=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(j=n.TEXTURE_3D);const te=je(y,g),X=g.source;t.bindTexture(j,y.__webglTexture,n.TEXTURE0+I);const Ce=i.get(X);if(X.version!==Ce.__version||te===!0){t.activeTexture(n.TEXTURE0+I);const de=it.getPrimaries(it.workingColorSpace),De=g.colorSpace===Ai?null:it.getPrimaries(g.colorSpace),Oe=g.colorSpace===Ai||de===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let fe=v(g.image,!1,s.maxTextureSize);fe=q(g,fe);const ye=r.convert(g.format,g.colorSpace),Ee=r.convert(g.type);let Le=A(g.internalFormat,ye,Ee,g.colorSpace,g.isVideoTexture);Ve(j,g);let xe;const Ke=g.mipmaps,F=g.isVideoTexture!==!0,Pe=Ce.__version===void 0||te===!0,ge=X.dataReady,Ne=C(g,fe);if(g.isDepthTexture)Le=b(g.format===Zi,g.type),Pe&&(F?t.texStorage2D(n.TEXTURE_2D,1,Le,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Le,fe.width,fe.height,0,ye,Ee,null));else if(g.isDataTexture)if(Ke.length>0){F&&Pe&&t.texStorage2D(n.TEXTURE_2D,Ne,Le,Ke[0].width,Ke[0].height);for(let pe=0,le=Ke.length;pe<le;pe++)xe=Ke[pe],F?ge&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,xe.width,xe.height,ye,Ee,xe.data):t.texImage2D(n.TEXTURE_2D,pe,Le,xe.width,xe.height,0,ye,Ee,xe.data);g.generateMipmaps=!1}else F?(Pe&&t.texStorage2D(n.TEXTURE_2D,Ne,Le,fe.width,fe.height),ge&&ot(g,fe,ye,Ee)):t.texImage2D(n.TEXTURE_2D,0,Le,fe.width,fe.height,0,ye,Ee,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){F&&Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Le,Ke[0].width,Ke[0].height,fe.depth);for(let pe=0,le=Ke.length;pe<le;pe++)if(xe=Ke[pe],g.format!==Dn)if(ye!==null)if(F){if(ge)if(g.layerUpdates.size>0){const Se=Xh(xe.width,xe.height,g.format,g.type);for(const qe of g.layerUpdates){const _t=xe.data.subarray(qe*Se/xe.data.BYTES_PER_ELEMENT,(qe+1)*Se/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,qe,xe.width,xe.height,1,ye,_t)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,xe.width,xe.height,fe.depth,ye,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Le,xe.width,xe.height,fe.depth,0,xe.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,xe.width,xe.height,fe.depth,ye,Ee,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Le,xe.width,xe.height,fe.depth,0,ye,Ee,xe.data)}else{F&&Pe&&t.texStorage2D(n.TEXTURE_2D,Ne,Le,Ke[0].width,Ke[0].height);for(let pe=0,le=Ke.length;pe<le;pe++)xe=Ke[pe],g.format!==Dn?ye!==null?F?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Le,xe.width,xe.height,0,xe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ge&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,xe.width,xe.height,ye,Ee,xe.data):t.texImage2D(n.TEXTURE_2D,pe,Le,xe.width,xe.height,0,ye,Ee,xe.data)}else if(g.isDataArrayTexture)if(F){if(Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Le,fe.width,fe.height,fe.depth),ge)if(g.layerUpdates.size>0){const pe=Xh(fe.width,fe.height,g.format,g.type);for(const le of g.layerUpdates){const Se=fe.data.subarray(le*pe/fe.data.BYTES_PER_ELEMENT,(le+1)*pe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,ye,Ee,Se)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ye,Ee,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,fe.width,fe.height,fe.depth,0,ye,Ee,fe.data);else if(g.isData3DTexture)F?(Pe&&t.texStorage3D(n.TEXTURE_3D,Ne,Le,fe.width,fe.height,fe.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ye,Ee,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Le,fe.width,fe.height,fe.depth,0,ye,Ee,fe.data);else if(g.isFramebufferTexture){if(Pe)if(F)t.texStorage2D(n.TEXTURE_2D,Ne,Le,fe.width,fe.height);else{let pe=fe.width,le=fe.height;for(let Se=0;Se<Ne;Se++)t.texImage2D(n.TEXTURE_2D,Se,Le,pe,le,0,ye,Ee,null),pe>>=1,le>>=1}}else if(Ke.length>0){if(F&&Pe){const pe=ie(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Ne,Le,pe.width,pe.height)}for(let pe=0,le=Ke.length;pe<le;pe++)xe=Ke[pe],F?ge&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ye,Ee,xe):t.texImage2D(n.TEXTURE_2D,pe,Le,ye,Ee,xe);g.generateMipmaps=!1}else if(F){if(Pe){const pe=ie(fe);t.texStorage2D(n.TEXTURE_2D,Ne,Le,pe.width,pe.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ee,fe)}else t.texImage2D(n.TEXTURE_2D,0,Le,ye,Ee,fe);m(g)&&f(j),Ce.__version=X.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ce(y,g,I){if(g.image.length!==6)return;const j=je(y,g),te=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+I);const X=i.get(te);if(te.version!==X.__version||j===!0){t.activeTexture(n.TEXTURE0+I);const Ce=it.getPrimaries(it.workingColorSpace),de=g.colorSpace===Ai?null:it.getPrimaries(g.colorSpace),De=g.colorSpace===Ai||Ce===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Oe=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,ye=[];for(let le=0;le<6;le++)!Oe&&!fe?ye[le]=v(g.image[le],!0,s.maxCubemapSize):ye[le]=fe?g.image[le].image:g.image[le],ye[le]=q(g,ye[le]);const Ee=ye[0],Le=r.convert(g.format,g.colorSpace),xe=r.convert(g.type),Ke=A(g.internalFormat,Le,xe,g.colorSpace),F=g.isVideoTexture!==!0,Pe=X.__version===void 0||j===!0,ge=te.dataReady;let Ne=C(g,Ee);Ve(n.TEXTURE_CUBE_MAP,g);let pe;if(Oe){F&&Pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,Ke,Ee.width,Ee.height);for(let le=0;le<6;le++){pe=ye[le].mipmaps;for(let Se=0;Se<pe.length;Se++){const qe=pe[Se];g.format!==Dn?Le!==null?F?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,qe.width,qe.height,Le,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,Ke,qe.width,qe.height,0,qe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,qe.width,qe.height,Le,xe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,Ke,qe.width,qe.height,0,Le,xe,qe.data)}}}else{if(pe=g.mipmaps,F&&Pe){pe.length>0&&Ne++;const le=ie(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,Ke,le.width,le.height)}for(let le=0;le<6;le++)if(fe){F?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ye[le].width,ye[le].height,Le,xe,ye[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,ye[le].width,ye[le].height,0,Le,xe,ye[le].data);for(let Se=0;Se<pe.length;Se++){const _t=pe[Se].image[le].image;F?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,_t.width,_t.height,Le,xe,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,Ke,_t.width,_t.height,0,Le,xe,_t.data)}}else{F?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le,xe,ye[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,Le,xe,ye[le]);for(let Se=0;Se<pe.length;Se++){const qe=pe[Se];F?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,Le,xe,qe.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,Ke,Le,xe,qe.image[le])}}}m(g)&&f(n.TEXTURE_CUBE_MAP),X.__version=te.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ie(y,g,I,j,te,X){const Ce=r.convert(I.format,I.colorSpace),de=r.convert(I.type),De=A(I.internalFormat,Ce,de,I.colorSpace),Oe=i.get(g),fe=i.get(I);if(fe.__renderTarget=g,!Oe.__hasExternalTextures){const ye=Math.max(1,g.width>>X),Ee=Math.max(1,g.height>>X);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,X,De,ye,Ee,g.depth,0,Ce,de,null):t.texImage2D(te,X,De,ye,Ee,0,Ce,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),oe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,te,fe.__webglTexture,0,w(g)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,te,fe.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(y,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const j=g.depthTexture,te=j&&j.isDepthTexture?j.type:null,X=b(g.stencilBuffer,te),Ce=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;oe(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(g),X,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(g),X,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,y)}else{const j=g.textures;for(let te=0;te<j.length;te++){const X=j[te],Ce=r.convert(X.format,X.colorSpace),de=r.convert(X.type),De=A(X.internalFormat,Ce,de,X.colorSpace);oe(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(g),De,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(g),De,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,De,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(y,g,I){const j=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(g.depthTexture);if(te.__renderTarget=g,(!te.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j){if(te.__webglInit===void 0&&(te.__webglInit=!0,g.depthTexture.addEventListener("dispose",D)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,g.depthTexture);const Oe=r.convert(g.depthTexture.format),fe=r.convert(g.depthTexture.type);let ye;g.depthTexture.format===pi?ye=n.DEPTH_COMPONENT24:g.depthTexture.format===Zi&&(ye=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ye,g.width,g.height,0,Oe,fe,null)}}else re(g.depthTexture,0);const X=te.__webglTexture,Ce=w(g),de=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,De=g.depthTexture.format===Zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===pi)oe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,de,X,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,De,de,X,0);else if(g.depthTexture.format===Zi)oe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,De,de,X,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,De,de,X,0);else throw new Error("Unknown depthTexture format")}function me(y){const g=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const j=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),j){const te=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),g.__depthDisposeCallback=te}g.__boundDepthTexture=j}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let j=0;j<6;j++)Q(g.__webglFramebuffer[j],y,j);else{const j=y.texture.mipmaps;j&&j.length>0?Q(g.__webglFramebuffer[0],y,0):Q(g.__webglFramebuffer,y,0)}else if(I){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]===void 0)g.__webglDepthbuffer[j]=n.createRenderbuffer(),he(g.__webglDepthbuffer[j],y,!1);else{const te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,X)}}else{const j=y.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),he(g.__webglDepthbuffer,y,!1);else{const te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function E(y,g,I){const j=i.get(y);g!==void 0&&Ie(j.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&me(y)}function R(y){const g=y.texture,I=i.get(y),j=i.get(g);y.addEventListener("dispose",L);const te=y.textures,X=y.isWebGLCubeRenderTarget===!0,Ce=te.length>1;if(Ce||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=g.version,a.memory.textures++),X){I.__webglFramebuffer=[];for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[de]=[];for(let De=0;De<g.mipmaps.length;De++)I.__webglFramebuffer[de][De]=n.createFramebuffer()}else I.__webglFramebuffer[de]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)I.__webglFramebuffer[de]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let de=0,De=te.length;de<De;de++){const Oe=i.get(te[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&oe(y)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const De=te[de];I.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[de]);const Oe=r.convert(De.format,De.colorSpace),fe=r.convert(De.type),ye=A(De.internalFormat,Oe,fe,De.colorSpace,y.isXRRenderTarget===!0),Ee=w(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ye,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,I.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),he(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,g);for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0)for(let De=0;De<g.mipmaps.length;De++)Ie(I.__webglFramebuffer[de][De],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De);else Ie(I.__webglFramebuffer[de],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(g)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let de=0,De=te.length;de<De;de++){const Oe=te[de],fe=i.get(Oe);let ye=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ye=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,fe.__webglTexture),Ve(ye,Oe),Ie(I.__webglFramebuffer,y,Oe,n.COLOR_ATTACHMENT0+de,ye,0),m(Oe)&&f(ye)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(de=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,j.__webglTexture),Ve(de,g),g.mipmaps&&g.mipmaps.length>0)for(let De=0;De<g.mipmaps.length;De++)Ie(I.__webglFramebuffer[De],y,g,n.COLOR_ATTACHMENT0,de,De);else Ie(I.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,de,0);m(g)&&f(de),t.unbindTexture()}y.depthBuffer&&me(y)}function O(y){const g=y.textures;for(let I=0,j=g.length;I<j;I++){const te=g[I];if(m(te)){const X=T(y),Ce=i.get(te).__webglTexture;t.bindTexture(X,Ce),f(X),t.unbindTexture()}}}const Y=[],H=[];function $(y){if(y.samples>0){if(oe(y)===!1){const g=y.textures,I=y.width,j=y.height;let te=n.COLOR_BUFFER_BIT;const X=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(y),de=g.length>1;if(de)for(let Oe=0;Oe<g.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const De=y.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Oe=0;Oe<g.length;Oe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Oe]);const fe=i.get(g[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,I,j,0,0,I,j,te,n.NEAREST),l===!0&&(Y.length=0,H.length=0,Y.push(n.COLOR_ATTACHMENT0+Oe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Y.push(X),H.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Oe=0;Oe<g.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Oe]);const fe=i.get(g[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function w(y){return Math.min(s.maxSamples,y.samples)}function oe(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ee(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function q(y,g){const I=y.colorSpace,j=y.format,te=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==Xs&&I!==Ai&&(it.getTransfer(I)===ut?(j!==Dn||te!==gn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",I)),g}function ie(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.setTexture2D=re,this.setTexture2DArray=J,this.setTexture3D=k,this.setTextureCube=ne,this.rebindTextures=E,this.setupRenderTarget=R,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hb(n,e){function t(i,s=Ai){let r;const a=it.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===Zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xd)return n.BYTE;if(i===jd)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===Jc)return n.INT;if(i===qn)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===$d)return n.ALPHA;if(i===Kd)return n.RGB;if(i===Dn)return n.RGBA;if(i===pi)return n.DEPTH_COMPONENT;if(i===Zi)return n.DEPTH_STENCIL;if(i===Jd)return n.RED;if(i===eu)return n.RED_INTEGER;if(i===Ws)return n.RG;if(i===tu)return n.RG_INTEGER;if(i===nu)return n.RGBA_INTEGER;if(i===Ca||i===Ra||i===Pa||i===Da)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===Yl||i===ql||i===$l)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kl||i===Jl||i===Zl||i===Ql||i===ec||i===tc||i===nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kl||i===Jl)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ql)return r.COMPRESSED_R11_EAC;if(i===ec)return r.COMPRESSED_SIGNED_R11_EAC;if(i===tc)return r.COMPRESSED_RG11_EAC;if(i===nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ic||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc||i===uc||i===hc||i===fc||i===dc||i===pc||i===mc||i===gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ic)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_c||i===vc||i===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===_c)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yc||i===Mc||i===Sc||i===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===yc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,db=`
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

}`;class pb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new up(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xt({vertexShader:fb,fragmentShader:db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mb extends rs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new pb,f={},T=t.getContextAttributes();let A=null,b=null;const C=[],D=[],L=new Me;let B=null;const x=new on;x.viewport=new Et;const S=new on;S.viewport=new Et;const P=[x,S],N=new Sv;let V=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ce=C[ae];return ce===void 0&&(ce=new rl,C[ae]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ae){let ce=C[ae];return ce===void 0&&(ce=new rl,C[ae]=ce),ce.getGripSpace()},this.getHand=function(ae){let ce=C[ae];return ce===void 0&&(ce=new rl,C[ae]=ce),ce.getHandSpace()};function re(ae){const ce=D.indexOf(ae.inputSource);if(ce===-1)return;const Ie=C[ce];Ie!==void 0&&(Ie.update(ae.inputSource,ae.frame,c||a),Ie.dispatchEvent({type:ae.type,data:ae.inputSource}))}function J(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",k);for(let ae=0;ae<C.length;ae++){const ce=D[ae];ce!==null&&(D[ae]=null,C[ae].disconnect(ce))}V=null,se=null,m.reset();for(const ae in f)delete f[ae];e.setRenderTarget(A),p=null,d=null,h=null,s=null,b=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",J),s.addEventListener("inputsourceschange",k),T.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,he=null,Q=null;T.depth&&(Q=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=T.stencil?Zi:pi,he=T.stencil?Pr:qn);const me={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new un(d.textureWidth,d.textureHeight,{format:Dn,type:gn,depthTexture:new Lr(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ie={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new un(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(ae){for(let ce=0;ce<ae.removed.length;ce++){const Ie=ae.removed[ce],he=D.indexOf(Ie);he>=0&&(D[he]=null,C[he].disconnect(Ie))}for(let ce=0;ce<ae.added.length;ce++){const Ie=ae.added[ce];let he=D.indexOf(Ie);if(he===-1){for(let me=0;me<C.length;me++)if(me>=D.length){D.push(Ie),he=me;break}else if(D[me]===null){D[me]=Ie,he=me;break}if(he===-1)break}const Q=C[he];Q&&Q.connect(Ie)}}const ne=new U,ve=new U;function _e(ae,ce,Ie){ne.setFromMatrixPosition(ce.matrixWorld),ve.setFromMatrixPosition(Ie.matrixWorld);const he=ne.distanceTo(ve),Q=ce.projectionMatrix.elements,me=Ie.projectionMatrix.elements,E=Q[14]/(Q[10]-1),R=Q[14]/(Q[10]+1),O=(Q[9]+1)/Q[5],Y=(Q[9]-1)/Q[5],H=(Q[8]-1)/Q[0],$=(me[8]+1)/me[0],w=E*H,oe=E*$,ee=he/(-H+$),q=ee*-H;if(ce.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(q),ae.translateZ(ee),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Q[10]===-1)ae.projectionMatrix.copy(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const ie=E+ee,y=R+ee,g=w-q,I=oe+(he-q),j=O*R/y*ie,te=Y*R/y*ie;ae.projectionMatrix.makePerspective(g,I,j,te,ie,y),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function be(ae,ce){ce===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ce.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let ce=ae.near,Ie=ae.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),N.near=S.near=x.near=ce,N.far=S.far=x.far=Ie,(V!==N.near||se!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,se=N.far),N.layers.mask=ae.layers.mask|6,x.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;const he=ae.parent,Q=N.cameras;be(N,he);for(let me=0;me<Q.length;me++)be(Q[me],he);Q.length===2?_e(N,x,S):N.projectionMatrix.copy(x.projectionMatrix),Ve(ae,N,he)};function Ve(ae,ce,Ie){Ie===null?ae.matrix.copy(ce.matrixWorld):(ae.matrix.copy(Ie.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ce.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=qa*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ae){l=ae,d!==null&&(d.fixedFoveation=ae),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ae)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(ae){return f[ae]};let je=null;function ht(ae,ce){if(u=ce.getViewerPose(c||a),_=ce,u!==null){const Ie=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let he=!1;Ie.length!==N.cameras.length&&(N.cameras.length=0,he=!0);for(let R=0;R<Ie.length;R++){const O=Ie[R];let Y=null;if(p!==null)Y=p.getViewport(O);else{const $=h.getViewSubImage(d,O);Y=$.viewport,R===0&&(e.setRenderTargetTextures(b,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(b))}let H=P[R];H===void 0&&(H=new on,H.layers.enable(R),H.viewport=new Et,P[R]=H),H.matrix.fromArray(O.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(O.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Y.x,Y.y,Y.width,Y.height),R===0&&(N.matrix.copy(H.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),he===!0&&N.cameras.push(H)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const R=h.getDepthInformation(Ie[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(Q&&Q.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let R=0;R<Ie.length;R++){const O=Ie[R].camera;if(O){let Y=f[O];Y||(Y=new up,f[O]=Y);const H=h.getCameraImage(O);Y.sourceTexture=H}}}}for(let Ie=0;Ie<C.length;Ie++){const he=D[Ie],Q=C[Ie];he!==null&&Q!==void 0&&Q.update(he,ce,c||a)}je&&je(ae,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const ot=new pp;ot.setAnimationLoop(ht),this.setAnimationLoop=function(ae){je=ae},this.dispose=function(){}}}const ji=new $n,gb=new yt;function _b(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,sp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,A,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),A=T.envMap,b=T.envMapRotation;A&&(m.envMap.value=A,ji.copy(b),ji.x*=-1,ji.y*=-1,ji.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(gb.makeRotationFromEuler(ji)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vb(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const b=A.program;i.uniformBlockBinding(T,b)}function c(T,A){let b=s[T.id];b===void 0&&(_(T),b=u(T),s[T.id]=b,T.addEventListener("dispose",m));const C=A.program;i.updateUBOMapping(T,C);const D=e.render.frame;r[T.id]!==D&&(d(T),r[T.id]=D)}function u(T){const A=h();T.__bindingPointIndex=A;const b=n.createBuffer(),C=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,b),b}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const A=s[T.id],b=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let D=0,L=b.length;D<L;D++){const B=Array.isArray(b[D])?b[D]:[b[D]];for(let x=0,S=B.length;x<S;x++){const P=B[x];if(p(P,D,x,C)===!0){const N=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let se=0;for(let re=0;re<V.length;re++){const J=V[re],k=v(J);typeof J=="number"||typeof J=="boolean"?(P.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,N+se,P.__data)):J.isMatrix3?(P.__data[0]=J.elements[0],P.__data[1]=J.elements[1],P.__data[2]=J.elements[2],P.__data[3]=0,P.__data[4]=J.elements[3],P.__data[5]=J.elements[4],P.__data[6]=J.elements[5],P.__data[7]=0,P.__data[8]=J.elements[6],P.__data[9]=J.elements[7],P.__data[10]=J.elements[8],P.__data[11]=0):(J.toArray(P.__data,se),se+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,A,b,C){const D=T.value,L=A+"_"+b;if(C[L]===void 0)return typeof D=="number"||typeof D=="boolean"?C[L]=D:C[L]=D.clone(),!0;{const B=C[L];if(typeof D=="number"||typeof D=="boolean"){if(B!==D)return C[L]=D,!0}else if(B.equals(D)===!1)return B.copy(D),!0}return!1}function _(T){const A=T.uniforms;let b=0;const C=16;for(let L=0,B=A.length;L<B;L++){const x=Array.isArray(A[L])?A[L]:[A[L]];for(let S=0,P=x.length;S<P;S++){const N=x[S],V=Array.isArray(N.value)?N.value:[N.value];for(let se=0,re=V.length;se<re;se++){const J=V[se],k=v(J),ne=b%C,ve=ne%k.boundary,_e=ne+ve;b+=ve,_e!==0&&C-_e<k.storage&&(b+=C-_e),N.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=k.storage}}}const D=b%C;return D>0&&(b+=C-D),T.__size=b,T.__cache={},this}function v(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):We("WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(const T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}const xb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function yb(){return On===null&&(On=new G_(xb,16,16,Ws,xn),On.name="DFG_LUT",On.minFilter=Ot,On.magFilter=Ot,On.wrapS=ci,On.wrapT=ci,On.generateMipmaps=!1,On.needsUpdate=!0),On}class Mb{constructor(e={}){const{canvas:t=m_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=gn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const v=p,m=new Set([nu,tu,eu]),f=new Set([gn,qn,Rr,Pr,Zc,Qc]),T=new Uint32Array(4),A=new Int32Array(4);let b=null,C=null;const D=[],L=[];let B=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=mn;let P=0,N=0,V=null,se=-1,re=null;const J=new Et,k=new Et;let ne=null;const ve=new Ye(0);let _e=0,be=t.width,Ve=t.height,je=1,ht=null,ot=null;const ae=new Et(0,0,be,Ve),ce=new Et(0,0,be,Ve);let Ie=!1;const he=new lu;let Q=!1,me=!1;const E=new yt,R=new U,O=new Et,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let H=!1;function $(){return V===null?je:1}let w=i;function oe(M,z){return t.getContext(M,z)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kc}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",lt,!1),w===null){const z="webgl2";if(w=oe(z,M),w===null)throw oe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw nt("WebGLRenderer: "+M.message),M}let ee,q,ie,y,g,I,j,te,X,Ce,de,De,Oe,fe,ye,Ee,Le,xe,Ke,F,Pe,ge,Ne,pe;function le(){ee=new yM(w),ee.init(),ge=new hb(w,ee),q=new hM(w,ee,e,ge),ie=new cb(w,ee),q.reversedDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),y=new bM(w),g=new qS,I=new ub(w,ee,ie,g,q,ge,y),j=new dM(x),te=new xM(x),X=new Av(w),Ne=new cM(w,X),Ce=new MM(w,X,y,Ne),de=new TM(w,Ce,X,y),Ke=new EM(w,q,I),Ee=new fM(g),De=new YS(x,j,te,ee,q,Ne,Ee),Oe=new _b(x,g),fe=new KS,ye=new nb(ee),xe=new lM(x,j,te,ie,de,_,l),Le=new ob(x,de,q),pe=new vb(w,y,q,ie),F=new uM(w,ee,y),Pe=new SM(w,ee,y),y.programs=De.programs,x.capabilities=q,x.extensions=ee,x.properties=g,x.renderLists=fe,x.shadowMap=Le,x.state=ie,x.info=y}le(),v!==gn&&(B=new AM(v,t.width,t.height,s,r));const Se=new mb(x,w);this.xr=Se,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return je},this.setPixelRatio=function(M){M!==void 0&&(je=M,this.setSize(be,Ve,!1))},this.getSize=function(M){return M.set(be,Ve)},this.setSize=function(M,z,Z=!0){if(Se.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}be=M,Ve=z,t.width=Math.floor(M*je),t.height=Math.floor(z*je),Z===!0&&(t.style.width=M+"px",t.style.height=z+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(be*je,Ve*je).floor()},this.setDrawingBufferSize=function(M,z,Z){be=M,Ve=z,je=Z,t.width=Math.floor(M*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,M,z)},this.setEffects=function(M){if(v===gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let z=0;z<M.length;z++)if(M[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(J)},this.getViewport=function(M){return M.copy(ae)},this.setViewport=function(M,z,Z,K){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,z,Z,K),ie.viewport(J.copy(ae).multiplyScalar(je).round())},this.getScissor=function(M){return M.copy(ce)},this.setScissor=function(M,z,Z,K){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,z,Z,K),ie.scissor(k.copy(ce).multiplyScalar(je).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(M){ie.setScissorTest(Ie=M)},this.setOpaqueSort=function(M){ht=M},this.setTransparentSort=function(M){ot=M},this.getClearColor=function(M){return M.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,Z=!0){let K=0;if(M){let G=!1;if(V!==null){const Te=V.texture.format;G=m.has(Te)}if(G){const Te=V.texture.type,Ue=f.has(Te),Re=xe.getClearColor(),Fe=xe.getClearAlpha(),Be=Re.r,He=Re.g,ze=Re.b;Ue?(T[0]=Be,T[1]=He,T[2]=ze,T[3]=Fe,w.clearBufferuiv(w.COLOR,0,T)):(A[0]=Be,A[1]=He,A[2]=ze,A[3]=Fe,w.clearBufferiv(w.COLOR,0,A))}else K|=w.COLOR_BUFFER_BIT}z&&(K|=w.DEPTH_BUFFER_BIT),Z&&(K|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),xe.dispose(),fe.dispose(),ye.dispose(),g.dispose(),j.dispose(),te.dispose(),de.dispose(),Ne.dispose(),pe.dispose(),De.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",mu),Se.removeEventListener("sessionend",gu),Ui.stop()};function qe(M){M.preventDefault(),Ya("WebGLRenderer: Context Lost."),S=!0}function _t(){Ya("WebGLRenderer: Context Restored."),S=!1;const M=y.autoReset,z=Le.enabled,Z=Le.autoUpdate,K=Le.needsUpdate,G=Le.type;le(),y.autoReset=M,Le.enabled=z,Le.autoUpdate=Z,Le.needsUpdate=K,Le.type=G}function lt(M){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Un(M){const z=M.target;z.removeEventListener("dispose",Un),Kn(z)}function Kn(M){bp(M),g.remove(M)}function bp(M){const z=g.get(M).programs;z!==void 0&&(z.forEach(function(Z){De.releaseProgram(Z)}),M.isShaderMaterial&&De.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,Z,K,G,Te){z===null&&(z=Y);const Ue=G.isMesh&&G.matrixWorld.determinant()<0,Re=Tp(M,z,Z,K,G);ie.setMaterial(K,Ue);let Fe=Z.index,Be=1;if(K.wireframe===!0){if(Fe=Ce.getWireframeAttribute(Z),Fe===void 0)return;Be=2}const He=Z.drawRange,ze=Z.attributes.position;let tt=He.start*Be,ft=(He.start+He.count)*Be;Te!==null&&(tt=Math.max(tt,Te.start*Be),ft=Math.min(ft,(Te.start+Te.count)*Be)),Fe!==null?(tt=Math.max(tt,0),ft=Math.min(ft,Fe.count)):ze!=null&&(tt=Math.max(tt,0),ft=Math.min(ft,ze.count));const St=ft-tt;if(St<0||St===1/0)return;Ne.setup(G,K,Re,Z,Fe);let bt,mt=F;if(Fe!==null&&(bt=X.get(Fe),mt=Pe,mt.setIndex(bt)),G.isMesh)K.wireframe===!0?(ie.setLineWidth(K.wireframeLinewidth*$()),mt.setMode(w.LINES)):mt.setMode(w.TRIANGLES);else if(G.isLine){let ke=K.linewidth;ke===void 0&&(ke=1),ie.setLineWidth(ke*$()),G.isLineSegments?mt.setMode(w.LINES):G.isLineLoop?mt.setMode(w.LINE_LOOP):mt.setMode(w.LINE_STRIP)}else G.isPoints?mt.setMode(w.POINTS):G.isSprite&&mt.setMode(w.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Dr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ke=G._multiDrawStarts,ct=G._multiDrawCounts,st=G._multiDrawCount,hn=Fe?X.get(Fe).bytesPerElement:1,os=g.get(K).currentProgram.getUniforms();for(let fn=0;fn<st;fn++)os.setValue(w,"_gl_DrawID",fn),mt.render(ke[fn]/hn,ct[fn])}else if(G.isInstancedMesh)mt.renderInstances(tt,St,G.count);else if(Z.isInstancedBufferGeometry){const ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ct=Math.min(Z.instanceCount,ke);mt.renderInstances(tt,St,ct)}else mt.render(tt,St)};function pu(M,z,Z){M.transparent===!0&&M.side===Vn&&M.forceSinglePass===!1?(M.side=cn,M.needsUpdate=!0,Vr(M,z,Z),M.side=Li,M.needsUpdate=!0,Vr(M,z,Z),M.side=Vn):Vr(M,z,Z)}this.compile=function(M,z,Z=null){Z===null&&(Z=M),C=ye.get(Z),C.init(z),L.push(C),Z.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(C.pushLight(G),G.castShadow&&C.pushShadow(G))}),M!==Z&&M.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(C.pushLight(G),G.castShadow&&C.pushShadow(G))}),C.setupLights();const K=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Te=G.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const Re=Te[Ue];pu(Re,Z,G),K.add(Re)}else pu(Te,Z,G),K.add(Te)}),C=L.pop(),K},this.compileAsync=function(M,z,Z=null){const K=this.compile(M,z,Z);return new Promise(G=>{function Te(){if(K.forEach(function(Ue){g.get(Ue).currentProgram.isReady()&&K.delete(Ue)}),K.size===0){G(M);return}setTimeout(Te,10)}ee.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let yo=null;function Ep(M){yo&&yo(M)}function mu(){Ui.stop()}function gu(){Ui.start()}const Ui=new pp;Ui.setAnimationLoop(Ep),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(M){yo=M,Se.setAnimationLoop(M),M===null?Ui.stop():Ui.start()},Se.addEventListener("sessionstart",mu),Se.addEventListener("sessionend",gu),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const Z=Se.enabled===!0&&Se.isPresenting===!0,K=B!==null&&(V===null||Z)&&B.begin(x,V);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(z),z=Se.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,z,V),C=ye.get(M,L.length),C.init(z),L.push(C),E.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),he.setFromProjectionMatrix(E,Wn,z.reversedDepth),me=this.localClippingEnabled,Q=Ee.init(this.clippingPlanes,me),b=fe.get(M,D.length),b.init(),D.push(b),Se.enabled===!0&&Se.isPresenting===!0){const Ue=x.xr.getDepthSensingMesh();Ue!==null&&Mo(Ue,z,-1/0,x.sortObjects)}Mo(M,z,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(ht,ot),H=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,H&&xe.addToRenderList(b,M),this.info.render.frame++,Q===!0&&Ee.beginShadows();const G=C.state.shadowsArray;if(Le.render(G,M,z),Q===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&B.hasRenderPass())===!1){const Ue=b.opaque,Re=b.transmissive;if(C.setupLights(),z.isArrayCamera){const Fe=z.cameras;if(Re.length>0)for(let Be=0,He=Fe.length;Be<He;Be++){const ze=Fe[Be];vu(Ue,Re,M,ze)}H&&xe.render(M);for(let Be=0,He=Fe.length;Be<He;Be++){const ze=Fe[Be];_u(b,M,ze,ze.viewport)}}else Re.length>0&&vu(Ue,Re,M,z),H&&xe.render(M),_u(b,M,z)}V!==null&&N===0&&(I.updateMultisampleRenderTarget(V),I.updateRenderTargetMipmap(V)),K&&B.end(x),M.isScene===!0&&M.onAfterRender(x,M,z),Ne.resetDefaultState(),se=-1,re=null,L.pop(),L.length>0?(C=L[L.length-1],Q===!0&&Ee.setGlobalState(x.clippingPlanes,C.state.camera)):C=null,D.pop(),D.length>0?b=D[D.length-1]:b=null};function Mo(M,z,Z,K){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||he.intersectsSprite(M)){K&&O.setFromMatrixPosition(M.matrixWorld).applyMatrix4(E);const Ue=de.update(M),Re=M.material;Re.visible&&b.push(M,Ue,Re,Z,O.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||he.intersectsObject(M))){const Ue=de.update(M),Re=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),O.copy(M.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),O.copy(Ue.boundingSphere.center)),O.applyMatrix4(M.matrixWorld).applyMatrix4(E)),Array.isArray(Re)){const Fe=Ue.groups;for(let Be=0,He=Fe.length;Be<He;Be++){const ze=Fe[Be],tt=Re[ze.materialIndex];tt&&tt.visible&&b.push(M,Ue,tt,Z,O.z,ze)}}else Re.visible&&b.push(M,Ue,Re,Z,O.z,null)}}const Te=M.children;for(let Ue=0,Re=Te.length;Ue<Re;Ue++)Mo(Te[Ue],z,Z,K)}function _u(M,z,Z,K){const{opaque:G,transmissive:Te,transparent:Ue}=M;C.setupLightsView(Z),Q===!0&&Ee.setGlobalState(x.clippingPlanes,Z),K&&ie.viewport(J.copy(K)),G.length>0&&kr(G,z,Z),Te.length>0&&kr(Te,z,Z),Ue.length>0&&kr(Ue,z,Z),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function vu(M,z,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[K.id]===void 0){const tt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[K.id]=new un(1,1,{generateMipmaps:!0,type:tt?xn:gn,minFilter:Ji,samples:q.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Te=C.state.transmissionRenderTarget[K.id],Ue=K.viewport||J;Te.setSize(Ue.z*x.transmissionResolutionScale,Ue.w*x.transmissionResolutionScale);const Re=x.getRenderTarget(),Fe=x.getActiveCubeFace(),Be=x.getActiveMipmapLevel();x.setRenderTarget(Te),x.getClearColor(ve),_e=x.getClearAlpha(),_e<1&&x.setClearColor(16777215,.5),x.clear(),H&&xe.render(Z);const He=x.toneMapping;x.toneMapping=Yn;const ze=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),C.setupLightsView(K),Q===!0&&Ee.setGlobalState(x.clippingPlanes,K),kr(M,Z,K),I.updateMultisampleRenderTarget(Te),I.updateRenderTargetMipmap(Te),ee.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ft=0,St=z.length;ft<St;ft++){const bt=z[ft],{object:mt,geometry:ke,material:ct,group:st}=bt;if(ct.side===Vn&&mt.layers.test(K.layers)){const hn=ct.side;ct.side=cn,ct.needsUpdate=!0,xu(mt,Z,K,ke,ct,st),ct.side=hn,ct.needsUpdate=!0,tt=!0}}tt===!0&&(I.updateMultisampleRenderTarget(Te),I.updateRenderTargetMipmap(Te))}x.setRenderTarget(Re,Fe,Be),x.setClearColor(ve,_e),ze!==void 0&&(K.viewport=ze),x.toneMapping=He}function kr(M,z,Z){const K=z.isScene===!0?z.overrideMaterial:null;for(let G=0,Te=M.length;G<Te;G++){const Ue=M[G],{object:Re,geometry:Fe,group:Be}=Ue;let He=Ue.material;He.allowOverride===!0&&K!==null&&(He=K),Re.layers.test(Z.layers)&&xu(Re,z,Z,Fe,He,Be)}}function xu(M,z,Z,K,G,Te){M.onBeforeRender(x,z,Z,K,G,Te),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(x,z,Z,K,M,Te),G.transparent===!0&&G.side===Vn&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,x.renderBufferDirect(Z,z,K,G,M,Te),G.side=Li,G.needsUpdate=!0,x.renderBufferDirect(Z,z,K,G,M,Te),G.side=Vn):x.renderBufferDirect(Z,z,K,G,M,Te),M.onAfterRender(x,z,Z,K,G,Te)}function Vr(M,z,Z){z.isScene!==!0&&(z=Y);const K=g.get(M),G=C.state.lights,Te=C.state.shadowsArray,Ue=G.state.version,Re=De.getParameters(M,G.state,Te,z,Z),Fe=De.getProgramCacheKey(Re);let Be=K.programs;K.environment=M.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(M.isMeshStandardMaterial?te:j).get(M.envMap||K.environment),K.envMapRotation=K.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",Un),Be=new Map,K.programs=Be);let He=Be.get(Fe);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===Ue)return Mu(M,Re),He}else Re.uniforms=De.getUniforms(M),M.onBeforeCompile(Re,x),He=De.acquireProgram(Re,Fe),Be.set(Fe,He),K.uniforms=Re.uniforms;const ze=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ze.clippingPlanes=Ee.uniform),Mu(M,Re),K.needsLights=Ap(M),K.lightsStateVersion=Ue,K.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=He,K.uniformsList=null,He}function yu(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=Ia.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function Mu(M,z){const Z=g.get(M);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Tp(M,z,Z,K,G){z.isScene!==!0&&(z=Y),I.resetTextureUnits();const Te=z.fog,Ue=K.isMeshStandardMaterial?z.environment:null,Re=V===null?x.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Xs,Fe=(K.isMeshStandardMaterial?te:j).get(K.envMap||Ue),Be=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,He=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!Z.morphAttributes.position,tt=!!Z.morphAttributes.normal,ft=!!Z.morphAttributes.color;let St=Yn;K.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(St=x.toneMapping);const bt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,mt=bt!==void 0?bt.length:0,ke=g.get(K),ct=C.state.lights;if(Q===!0&&(me===!0||M!==re)){const Yt=M===re&&K.id===se;Ee.setState(K,M,Yt)}let st=!1;K.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ct.state.version||ke.outputColorSpace!==Re||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isBatchedMesh&&ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==Fe||K.fog===!0&&ke.fog!==Te||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ee.numPlanes||ke.numIntersection!==Ee.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==He||ke.morphTargets!==ze||ke.morphNormals!==tt||ke.morphColors!==ft||ke.toneMapping!==St||ke.morphTargetsCount!==mt)&&(st=!0):(st=!0,ke.__version=K.version);let hn=ke.currentProgram;st===!0&&(hn=Vr(K,z,G));let os=!1,fn=!1,Ks=!1;const vt=hn.getUniforms(),tn=ke.uniforms;if(ie.useProgram(hn.program)&&(os=!0,fn=!0,Ks=!0),K.id!==se&&(se=K.id,fn=!0),os||re!==M){ie.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),vt.setValue(w,"projectionMatrix",M.projectionMatrix),vt.setValue(w,"viewMatrix",M.matrixWorldInverse);const nn=vt.map.cameraPosition;nn!==void 0&&nn.setValue(w,R.setFromMatrixPosition(M.matrixWorld)),q.logarithmicDepthBuffer&&vt.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),re!==M&&(re=M,fn=!0,Ks=!0)}if(ke.needsLights&&(ct.state.directionalShadowMap.length>0&&vt.setValue(w,"directionalShadowMap",ct.state.directionalShadowMap,I),ct.state.spotShadowMap.length>0&&vt.setValue(w,"spotShadowMap",ct.state.spotShadowMap,I),ct.state.pointShadowMap.length>0&&vt.setValue(w,"pointShadowMap",ct.state.pointShadowMap,I)),G.isSkinnedMesh){vt.setOptional(w,G,"bindMatrix"),vt.setOptional(w,G,"bindMatrixInverse");const Yt=G.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),vt.setValue(w,"boneTexture",Yt.boneTexture,I))}G.isBatchedMesh&&(vt.setOptional(w,G,"batchingTexture"),vt.setValue(w,"batchingTexture",G._matricesTexture,I),vt.setOptional(w,G,"batchingIdTexture"),vt.setValue(w,"batchingIdTexture",G._indirectTexture,I),vt.setOptional(w,G,"batchingColorTexture"),G._colorsTexture!==null&&vt.setValue(w,"batchingColorTexture",G._colorsTexture,I));const Sn=Z.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Ke.update(G,Z,hn),(fn||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,vt.setValue(w,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(tn.envMap.value=Fe,tn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(tn.envMapIntensity.value=z.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=yb()),fn&&(vt.setValue(w,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&wp(tn,Ks),Te&&K.fog===!0&&Oe.refreshFogUniforms(tn,Te),Oe.refreshMaterialUniforms(tn,K,je,Ve,C.state.transmissionRenderTarget[M.id]),Ia.upload(w,yu(ke),tn,I)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ia.upload(w,yu(ke),tn,I),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(w,"center",G.center),vt.setValue(w,"modelViewMatrix",G.modelViewMatrix),vt.setValue(w,"normalMatrix",G.normalMatrix),vt.setValue(w,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Yt=K.uniformsGroups;for(let nn=0,So=Yt.length;nn<So;nn++){const Fi=Yt[nn];pe.update(Fi,hn),pe.bind(Fi,hn)}}return hn}function wp(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Ap(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(M,z,Z){const K=g.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),g.get(M.texture).__webglTexture=z,g.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Z,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const Z=g.get(M);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0};const Cp=w.createFramebuffer();this.setRenderTarget=function(M,z=0,Z=0){V=M,P=z,N=Z;let K=null,G=!1,Te=!1;if(M){const Re=g.get(M);if(Re.__useDefaultFramebuffer!==void 0){ie.bindFramebuffer(w.FRAMEBUFFER,Re.__webglFramebuffer),J.copy(M.viewport),k.copy(M.scissor),ne=M.scissorTest,ie.viewport(J),ie.scissor(k),ie.setScissorTest(ne),se=-1;return}else if(Re.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(Re.__hasExternalTextures)I.rebindTextures(M,g.get(M.texture).__webglTexture,g.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const He=M.depthTexture;if(Re.__boundDepthTexture!==He){if(He!==null&&g.has(He)&&(M.width!==He.image.width||M.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Te=!0);const Be=g.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?K=Be[z][Z]:K=Be[z],G=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?K=g.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?K=Be[Z]:K=Be,J.copy(M.viewport),k.copy(M.scissor),ne=M.scissorTest}else J.copy(ae).multiplyScalar(je).floor(),k.copy(ce).multiplyScalar(je).floor(),ne=Ie;if(Z!==0&&(K=Cp),ie.bindFramebuffer(w.FRAMEBUFFER,K)&&ie.drawBuffers(M,K),ie.viewport(J),ie.scissor(k),ie.setScissorTest(ne),G){const Re=g.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,Z)}else if(Te){const Re=z;for(let Fe=0;Fe<M.textures.length;Fe++){const Be=g.get(M.textures[Fe]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,Z,Re)}}else if(M!==null&&Z!==0){const Re=g.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Re.__webglTexture,Z)}se=-1},this.readRenderTargetPixels=function(M,z,Z,K,G,Te,Ue,Re=0){if(!(M&&M.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){ie.bindFramebuffer(w.FRAMEBUFFER,Fe);try{const Be=M.textures[Re],He=Be.format,ze=Be.type;if(!q.textureFormatReadable(He)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(ze)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-K&&Z>=0&&Z<=M.height-G&&(M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Re),w.readPixels(z,Z,K,G,ge.convert(He),ge.convert(ze),Te))}finally{const Be=V!==null?g.get(V).__webglFramebuffer:null;ie.bindFramebuffer(w.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(M,z,Z,K,G,Te,Ue,Re=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe)if(z>=0&&z<=M.width-K&&Z>=0&&Z<=M.height-G){ie.bindFramebuffer(w.FRAMEBUFFER,Fe);const Be=M.textures[Re],He=Be.format,ze=Be.type;if(!q.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,tt),w.bufferData(w.PIXEL_PACK_BUFFER,Te.byteLength,w.STREAM_READ),M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Re),w.readPixels(z,Z,K,G,ge.convert(He),ge.convert(ze),0);const ft=V!==null?g.get(V).__webglFramebuffer:null;ie.bindFramebuffer(w.FRAMEBUFFER,ft);const St=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await g_(w,St,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,tt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Te),w.deleteBuffer(tt),w.deleteSync(St),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,Z=0){const K=Math.pow(2,-Z),G=Math.floor(M.image.width*K),Te=Math.floor(M.image.height*K),Ue=z!==null?z.x:0,Re=z!==null?z.y:0;I.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,Z,0,0,Ue,Re,G,Te),ie.unbindTexture()};const Rp=w.createFramebuffer(),Pp=w.createFramebuffer();this.copyTextureToTexture=function(M,z,Z=null,K=null,G=0,Te=null){Te===null&&(G!==0?(Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=G,G=0):Te=0);let Ue,Re,Fe,Be,He,ze,tt,ft,St;const bt=M.isCompressedTexture?M.mipmaps[Te]:M.image;if(Z!==null)Ue=Z.max.x-Z.min.x,Re=Z.max.y-Z.min.y,Fe=Z.isBox3?Z.max.z-Z.min.z:1,Be=Z.min.x,He=Z.min.y,ze=Z.isBox3?Z.min.z:0;else{const Sn=Math.pow(2,-G);Ue=Math.floor(bt.width*Sn),Re=Math.floor(bt.height*Sn),M.isDataArrayTexture?Fe=bt.depth:M.isData3DTexture?Fe=Math.floor(bt.depth*Sn):Fe=1,Be=0,He=0,ze=0}K!==null?(tt=K.x,ft=K.y,St=K.z):(tt=0,ft=0,St=0);const mt=ge.convert(z.format),ke=ge.convert(z.type);let ct;z.isData3DTexture?(I.setTexture3D(z,0),ct=w.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(I.setTexture2DArray(z,0),ct=w.TEXTURE_2D_ARRAY):(I.setTexture2D(z,0),ct=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,z.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,z.unpackAlignment);const st=w.getParameter(w.UNPACK_ROW_LENGTH),hn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),os=w.getParameter(w.UNPACK_SKIP_PIXELS),fn=w.getParameter(w.UNPACK_SKIP_ROWS),Ks=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,bt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,bt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Be),w.pixelStorei(w.UNPACK_SKIP_ROWS,He),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ze);const vt=M.isDataArrayTexture||M.isData3DTexture,tn=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const Sn=g.get(M),Yt=g.get(z),nn=g.get(Sn.__renderTarget),So=g.get(Yt.__renderTarget);ie.bindFramebuffer(w.READ_FRAMEBUFFER,nn.__webglFramebuffer),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,So.__webglFramebuffer);for(let Fi=0;Fi<Fe;Fi++)vt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,g.get(M).__webglTexture,G,ze+Fi),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,g.get(z).__webglTexture,Te,St+Fi)),w.blitFramebuffer(Be,He,Ue,Re,tt,ft,Ue,Re,w.DEPTH_BUFFER_BIT,w.NEAREST);ie.bindFramebuffer(w.READ_FRAMEBUFFER,null),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||g.has(M)){const Sn=g.get(M),Yt=g.get(z);ie.bindFramebuffer(w.READ_FRAMEBUFFER,Rp),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,Pp);for(let nn=0;nn<Fe;nn++)vt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Sn.__webglTexture,G,ze+nn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Sn.__webglTexture,G),tn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Yt.__webglTexture,Te,St+nn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Yt.__webglTexture,Te),G!==0?w.blitFramebuffer(Be,He,Ue,Re,tt,ft,Ue,Re,w.COLOR_BUFFER_BIT,w.NEAREST):tn?w.copyTexSubImage3D(ct,Te,tt,ft,St+nn,Be,He,Ue,Re):w.copyTexSubImage2D(ct,Te,tt,ft,Be,He,Ue,Re);ie.bindFramebuffer(w.READ_FRAMEBUFFER,null),ie.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else tn?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(ct,Te,tt,ft,St,Ue,Re,Fe,mt,ke,bt.data):z.isCompressedArrayTexture?w.compressedTexSubImage3D(ct,Te,tt,ft,St,Ue,Re,Fe,mt,bt.data):w.texSubImage3D(ct,Te,tt,ft,St,Ue,Re,Fe,mt,ke,bt):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Te,tt,ft,Ue,Re,mt,ke,bt.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Te,tt,ft,bt.width,bt.height,mt,bt.data):w.texSubImage2D(w.TEXTURE_2D,Te,tt,ft,Ue,Re,mt,ke,bt);w.pixelStorei(w.UNPACK_ROW_LENGTH,st),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,hn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,os),w.pixelStorei(w.UNPACK_SKIP_ROWS,fn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ks),Te===0&&z.generateMipmaps&&w.generateMipmap(ct),ie.unbindTexture()},this.initRenderTarget=function(M){g.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),ie.unbindTexture()},this.resetState=function(){P=0,N=0,V=null,ie.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const gf={type:"change"},du={type:"start"},xp={type:"end"},xa=new fo,_f=new ai,Sb=Math.cos(70*v_.DEG2RAD),Rt=new U,sn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vl=1e-6;class bb extends Tv{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Ds.ROTATE,TWO:Ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new ss,this._lastTargetPosition=new U,this._quat=new ss().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wh,this._sphericalDelta=new Wh,this._scale=1,this._panOffset=new U,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new U,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tb.bind(this),this._onPointerDown=Eb.bind(this),this._onPointerUp=wb.bind(this),this._onContextMenu=Ib.bind(this),this._onMouseWheel=Rb.bind(this),this._onKeyDown=Pb.bind(this),this._onTouchStart=Db.bind(this),this._onTouchMove=Lb.bind(this),this._onMouseDown=Ab.bind(this),this._onMouseMove=Cb.bind(this),this._interceptControlDown=Nb.bind(this),this._interceptControlUp=Ub.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gf),this.update(),this.state=pt.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Rt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xa.origin.copy(this.object.position),xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xa.direction))<Sb?this.object.lookAt(this.target):(_f.setFromNormalAndCoplanarPoint(this.object.up,this.target),xa.intersectPlane(_f,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vl||this._lastTargetPosition.distanceToSquared(this.target)>vl?(this.dispatchEvent(gf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Rt.copy(s).sub(this.target);let r=Rt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Eb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Tb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function wb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xp),this.state=pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ab(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pt.DOLLY;break;case Os.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}break;case Os.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(du)}function Cb(n){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Rb(n){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(n.preventDefault(),this.dispatchEvent(du),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(xp))}function Pb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Db(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pt.TOUCH_ROTATE;break;case Ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case Ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pt.TOUCH_DOLLY_PAN;break;case Ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(du)}function Lb(n){switch(this._trackPointer(n),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pt.NONE}}function Ib(n){this.enabled!==!1&&n.preventDefault()}function Nb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ub(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Na={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class zr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fb=new _o(-1,1,1,-1,0,1);class Ob extends en{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}}const Bb=new Ob;class yp{constructor(e){this._mesh=new Mn(Bb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class zb extends zr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$a.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vf extends zr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class kb extends zr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Vb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Me);this._width=i.width,this._height=i.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zb(Na),this.copyPass.material.blending=jn,this.clock=new bv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vf!==void 0&&(a instanceof vf?i=!0:a instanceof kb&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Hb extends zr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ye}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const Gb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ys extends zr{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new Ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,a,{type:xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new un(r,a,{type:xn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new un(r,a,{type:xn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=Gb;this.highPassUniforms=$a.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Me(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$a.clone(Na.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader,premultipliedAlpha:!0,blending:Ll,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ye,this._oldClearAlpha=1,this._basic=new po,this._fsQuad=new yp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ys.BlurDirectionX=new Me(1,0);Ys.BlurDirectionY=new Me(0,1);const ya={object:"#f97316",array:"#06b6d4",string:"#10b981",number:"#6366f1",boolean:"#ec4899",null:"#64748b"},Wb=.5,Xb=8,As=3;function jb(n){const e=Dt({isInitialized:!1,hoveredNode:null,zoomLevel:1,isDragging:!1,isAutoRotating:!0});let t=null,i=null,s=null,r=null,a=null,o=null,l=new Map,c=null,u=null,h=null,d=null,p=null,_=!1,v=null,m=new ai(new U(0,0,1),0),f=new U;const T=[];function A(he,Q=26,me="#ffffff"){const E=document.createElement("canvas"),R=E.getContext("2d");E.width=512,E.height=72,R.clearRect(0,0,E.width,E.height),R.fillStyle="rgba(15, 23, 42, 0.9)";const O=(ee,q,ie,y,g,I)=>{ee.beginPath(),ee.moveTo(q+I,ie),ee.lineTo(q+y-I,ie),ee.quadraticCurveTo(q+y,ie,q+y,ie+I),ee.lineTo(q+y,ie+g-I),ee.quadraticCurveTo(q+y,ie+g,q+y-I,ie+g),ee.lineTo(q+I,ie+g),ee.quadraticCurveTo(q,ie+g,q,ie+g-I),ee.lineTo(q,ie+I),ee.quadraticCurveTo(q,ie,q+I,ie),ee.closePath()};O(R,0,4,E.width,E.height-8,16),R.fill(),R.strokeStyle=me,R.lineWidth=4,O(R,2,6,E.width-4,E.height-12,14),R.stroke(),R.font=`bold ${Q}px Arial, sans-serif`,R.fillStyle="#ffffff",R.textAlign="left",R.textBaseline="middle";const Y=30,H=he.length>Y?he.slice(0,Y)+"...":he;R.fillText(H,24,E.height/2);const $=new Bh(E);$.colorSpace=mn,$.minFilter=Ot,$.magFilter=Ot,$.needsUpdate=!0;const w=new Tc({map:$,transparent:!0,depthWrite:!1,depthTest:!1});T.push(w,$);const oe=new Uh(w);return oe.scale.set(6,.85,1),oe.renderOrder=100,oe}function b(he,Q){const me=document.createElement("canvas"),E=me.getContext("2d");me.width=64,me.height=64,E.shadowColor=Q,E.shadowBlur=15,E.fillStyle=Q,E.beginPath(),E.arc(32,32,24,0,Math.PI*2),E.fill(),E.shadowBlur=0,E.fillStyle="#ffffff",E.font="bold 40px Arial",E.textAlign="center",E.textBaseline="middle",E.fillText(he?"−":"+",32,31);const R=new Bh(me),O=new Tc({map:R,transparent:!0,depthWrite:!1});T.push(O,R);const Y=new Uh(O);return Y.scale.set(.6,.6,1),Y}function C(he,Q,me){const E=ya[he.type]||ya.null,R=new Ye(E),O=new Qi;O.position.set(Q,me,0);const Y=new uu(Wb,32,32),H=new fv({color:R,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,emissive:R,emissiveIntensity:.2});T.push(Y,H);const $=new Mn(Y,H);$.castShadow=!0,$.receiveShadow=!0,O.add($);const w=new vv(R,0,8);w.position.set(0,0,1),O.add(w);const oe=`${he.name}: ${he.value}`,ee=A(oe,24,E);ee.position.set(4,0,0),O.add(ee);let q=null;he.children.length>0&&(q=b(he.isExpanded,E),q.position.set(0,-.8,.5),O.add(q)),t?.add(O);const ie={group:O,mesh:$,node:he,label:ee,expandIcon:q,glow:w,edges:[],worldX:Q,worldY:me};return l.set(he.id,ie),ie}function D(he,Q){const me=he.worldX,E=he.worldY,R=Q.worldX,O=Q.worldY,Y=ya[he.node.type]||ya.null,H=new Ye(Y),$=me+(R-me)*.5,w=new fp(new U(me,E,0),new U($,E,0),new U($,O,0),new U(R,O,0)),oe=new hu(w,20,.05,8,!1),ee=new po({color:H,transparent:!0,opacity:.4,side:Vn});T.push(oe,ee);const q=new Mn(oe,ee);return c?.add(q),he.edges.push(q),q}function L(he,Q,me){const E=new Map;function R(H){if(!H.isExpanded||H.children.length===0)return As;let $=0;return H.children.forEach(w=>{$+=R(w)}),Math.max(As,$)}function O(H,$,w){if(E.set(H.id,{x:$,y:w}),!H.isExpanded||H.children.length===0)return As;const oe=$+Xb,ee=H.children.map(y=>R(y)),q=ee.reduce((y,g)=>y+g,0);let ie=w+(q-As)/2;return H.children.forEach((y,g)=>{const I=ee[g]??As;O(y,oe,ie-I/2+As/2),ie-=I}),q}return{height:O(he,Q,me),positions:E}}function B(){if(!t||!p)return;if(l.forEach(E=>{t?.remove(E.group)}),l.clear(),c)for(;c.children.length>0;){const E=c.children[0];if(E){c.remove(E);const R=E;R.geometry&&R.geometry.dispose()}}const{positions:he}=L(p,0,0);function Q(E){const R=he.get(E.id);R&&C(E,R.x,R.y),E.isExpanded&&E.children.forEach(O=>Q(O))}Q(p);function me(E){const R=l.get(E.id);!R||!E.isExpanded||E.children.forEach(O=>{const Y=l.get(O.id);Y&&(D(R,Y),me(O))})}me(p)}function x(){const Q=new en,me=new Float32Array(1e3*3),E=new Float32Array(1e3*3),R=new Ye;for(let Y=0;Y<1e3;Y++){const H=(Math.random()-.5)*200,$=(Math.random()-.5)*200,w=(Math.random()-.5)*100-50;me[Y*3]=H,me[Y*3+1]=$,me[Y*3+2]=w,Math.random()>.5?R.setHex(6514417):R.setHex(1096065),E[Y*3]=R.r,E[Y*3+1]=R.g,E[Y*3+2]=R.b}Q.setAttribute("position",new yn(me,3)),Q.setAttribute("color",new yn(E,3));const O=new cp({size:.5,vertexColors:!0,transparent:!0,opacity:.6,sizeAttenuation:!0});T.push(Q,O),u=new Qi,u.add(new Y_(Q,O)),t?.add(u)}function S(he){if(!n.value)return;p=he;const Q=n.value,me=Q.clientWidth,E=Q.clientHeight;i=new on(60,me/E,.1,1e3),i.position.set(20,0,40),t=new V_,t.background=new Ye(132631),t.fog=new ou(132631,.008);const R=new Mv(16777215,.4);t.add(R);const O=new yv(16777215,.8);O.position.set(10,10,10),O.castShadow=!0,t.add(O);const Y=new gv(6514417,2);Y.position.set(-20,20,20),t.add(Y),s=new Mb({antialias:!0,alpha:!0,powerPreference:"high-performance"}),s.setSize(me,E),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Ud;const H=new Hb(t,i),$=new Ys(new Me(me,E),1.5,.4,.85);$.threshold=.2,$.strength=.8,$.radius=.5,r=new Vb(s),r.addPass(H),r.addPass($),Q.appendChild(s.domElement),a=new bb(i,s.domElement),a.enableDamping=!0,a.dampingFactor=.05,a.screenSpacePanning=!0,a.minDistance=5,a.maxDistance=200,a.maxPolarAngle=Math.PI/1.2,h=new Ev,d=new Me,c=new Qi,t.add(c),x(),B(),Q.addEventListener("mousedown",V),Q.addEventListener("mousemove",se),Q.addEventListener("mouseup",re),Q.addEventListener("click",k),window.addEventListener("resize",ne),e.value.isInitialized=!0,ve()}function P(){if(!h||!i||!d)return null;h.setFromCamera(d,i);const he=Array.from(l.values()).map(me=>me.mesh),Q=h.intersectObjects(he);if(Q.length>0){const me=Q[0]?.object;for(const[,E]of l)if(E.mesh===me)return E}return null}function N(he){if(!n.value||!d)return;const Q=n.value.getBoundingClientRect();d.x=(he.clientX-Q.left)/Q.width*2-1,d.y=-((he.clientY-Q.top)/Q.height)*2+1}function V(he){if(he.button!==0)return;N(he);const Q=P();if(Q&&h&&i){_=!0,v=Q,e.value.isDragging=!0,a&&(a.enabled=!1),m.setFromNormalAndCoplanarPoint(new U(0,0,1),Q.group.position);const me=new U;h.ray.intersectPlane(m,me)?f.copy(me).sub(Q.group.position):f.set(0,0,0),n.value&&(n.value.style.cursor="grabbing"),he.preventDefault(),he.stopPropagation()}}function se(he){if(N(he),_&&v&&h&&i){const me=new U;if(h.setFromCamera(d,i),h.ray.intersectPlane(m,me)){const E=me.sub(f);v.group.position.copy(E),v.group.position.z=0,v.worldX=E.x,v.worldY=E.y,J()}return}const Q=P();if(l.forEach(me=>{const E=me.mesh.material;me.node!==e.value.hoveredNode&&(me.glow.intensity=0,E.emissiveIntensity=.2,me.label.scale.set(6,.85,1),me.group.scale.setScalar(1))}),Q){const me=Q.mesh.material;me.emissiveIntensity=1,Q.glow.intensity=2,Q.group.scale.setScalar(1.1),Q.label.scale.set(7.5,1.05,1),e.value.hoveredNode=Q.node,n.value&&(n.value.style.cursor="pointer")}else e.value.hoveredNode=null,n.value&&(n.value.style.cursor="default")}function re(){_&&(_=!1,v=null,e.value.isDragging=!1,a&&(a.enabled=!0),n.value&&(n.value.style.cursor="default"))}function J(){if(!c)return;for(;c.children.length>0;){const Q=c.children[0];Q&&(c.remove(Q),Q instanceof Mn&&Q.geometry.dispose())}l.forEach(Q=>{Q.edges=[]});function he(Q){const me=l.get(Q.id);!me||!Q.isExpanded||Q.children.forEach(E=>{const R=l.get(E.id);R&&(D(me,R),he(E))})}p&&he(p)}function k(he){if(e.value.isDragging)return;N(he);const Q=P();Q&&Q.node.children.length>0&&(Q.node.isExpanded=!Q.node.isExpanded,B())}function ne(){if(!n.value||!i||!s||!r)return;const he=n.value.clientWidth,Q=n.value.clientHeight;i.aspect=he/Q,i.updateProjectionMatrix(),s.setSize(he,Q),r.setSize(he,Q)}function ve(){!s||!t||!i||!a||!r||(o=requestAnimationFrame(ve),_||a.update(),u&&(u.rotation.y+=5e-4),r.render())}function _e(){if(i&&a){const he=i.position.distanceTo(a.target),Q=Math.max(he*.8,a.minDistance),me=new U().subVectors(i.position,a.target).normalize();i.position.copy(a.target).add(me.multiplyScalar(Q)),a.update()}}function be(){if(i&&a){const he=i.position.distanceTo(a.target),Q=Math.min(he*1.25,a.maxDistance),me=new U().subVectors(i.position,a.target).normalize();i.position.copy(a.target).add(me.multiplyScalar(Q)),a.update()}}function Ve(){a&&i&&(i.position.set(20,0,40),a.target.set(0,0,0),a.update())}function je(he){he.isExpanded=!0,he.children.forEach(je)}function ht(he){he.isExpanded=!1,he.children.forEach(ht)}function ot(){p&&(je(p),B())}function ae(){p&&(ht(p),p.isExpanded=!0,B())}function ce(){a&&(a.autoRotate=!a.autoRotate,e.value.isAutoRotating=a.autoRotate)}function Ie(){o!==null&&cancelAnimationFrame(o),n.value&&(n.value.removeEventListener("mousedown",V),n.value.removeEventListener("mousemove",se),n.value.removeEventListener("mouseup",re),n.value.removeEventListener("click",k)),window.removeEventListener("resize",ne),T.forEach(he=>he.dispose()),T.length=0,s&&(s.dispose(),n.value&&s.domElement.parentNode===n.value&&n.value.removeChild(s.domElement)),a&&a.dispose(),t=null,i=null,s=null,r=null,a=null,l.clear(),c=null,h=null,d=null,p=null,_=!1,v=null,e.value.isInitialized=!1,e.value.hoveredNode=null,e.value.isDragging=!1}return{state:e,initialize:S,dispose:Ie,zoomIn:_e,zoomOut:be,resetView:Ve,expandAll:ot,collapseAll:ae,toggleAutoRotate:ce}}const Yb={key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},qb={key:0,class:"relative z-10 w-full max-w-[95vw] h-[90vh] bg-black/40 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10"},$b={class:"absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none"},Kb={class:"flex items-center gap-6 flex-wrap pointer-events-auto"},Jb={class:"flex items-center gap-2 p-1.5 bg-slate-950/50 backdrop-blur-md rounded-2xl ring-1 ring-white/10 shadow-xl"},Zb={class:"flex items-center gap-0.5 px-1"},Qb={class:"flex items-center gap-1"},eE={key:0,class:"absolute bottom-8 left-8 z-20 w-80 pointer-events-none"},tE={class:"bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group"},nE={class:"relative z-10"},iE={class:"flex items-center gap-3 mb-3"},sE={class:"text-[10px] uppercase tracking-widest text-slate-400 font-bold"},rE={class:"text-white font-bold text-lg leading-tight mb-1 truncate"},aE={class:"mt-3 bg-black/30 rounded-lg p-3 border border-white/5"},oE={class:"text-xs text-slate-300 font-mono break-all leading-relaxed max-h-32 overflow-hidden text-ellipsis"},lE={class:"absolute bottom-8 right-8 z-20 flex flex-col items-end gap-2 pointer-events-none"},cE={class:"bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-2 text-[10px] text-slate-400"},uE=qs({__name:"JsonTreeModal",props:{isOpen:{type:Boolean},jsonData:{type:[String,Number,Boolean,null,Object]}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,s=Dt(null),{state:r,initialize:a,dispose:o,zoomIn:l,zoomOut:c,resetView:u,expandAll:h,collapseAll:d,toggleAutoRotate:p}=jb(s);function _(){o(),i("close")}function v(m){m.key==="Escape"&&_()}return ns(()=>t.isOpen,async m=>{if(m&&t.jsonData!==null){await Wf();const f=O0(t.jsonData);a(f),window.addEventListener("keydown",v)}else window.removeEventListener("keydown",v),o()}),(m,f)=>(Xe(),Vs(Wc,{to:"body"},[wt(Ta,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:pr(()=>[n.isOpen?(Xe(),Qe("div",Yb,[W("div",{class:"absolute inset-0 bg-slate-950/90 backdrop-blur-md",onClick:_,"aria-hidden":"true"}),wt(Ta,{"enter-active-class":"transition-all duration-300 ease-out delay-100","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:pr(()=>[n.isOpen?(Xe(),Qe("div",qb,[W("header",$b,[W("div",Kb,[f[12]||(f[12]=W("div",{class:"flex items-center gap-3"},[W("div",{class:"w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-white/10 backdrop-blur-sm"},[W("svg",{class:"w-5 h-5 text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})])]),W("div",null,[W("h2",{id:"modal-title",class:"text-white font-bold text-xl tracking-tight"},"Cosmos JSON"),W("p",{class:"text-xs text-slate-400 font-medium tracking-wide uppercase"},"Explorador 3D")])],-1)),W("div",Jb,[W("div",Zb,[W("button",{class:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all",onClick:f[0]||(f[0]=(...T)=>ue(c)&&ue(c)(...T)),title:"Alejar"},[...f[6]||(f[6]=[W("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"})],-1)])]),W("button",{class:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all",onClick:f[1]||(f[1]=(...T)=>ue(l)&&ue(l)(...T)),title:"Acercar"},[...f[7]||(f[7]=[W("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1)])])]),f[10]||(f[10]=W("div",{class:"w-px h-6 bg-white/10"},null,-1)),W("button",{class:Ae(["p-2 rounded-xl transition-all flex items-center gap-2 px-3",ue(r).isAutoRotating?"bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/50":"text-slate-400 hover:text-white hover:bg-white/10"]),onClick:f[2]||(f[2]=(...T)=>ue(p)&&ue(p)(...T)),title:"Alternar rotación automática"},[(Xe(),Qe("svg",{class:Ae(["w-4 h-4",{"animate-spin-slow":ue(r).isAutoRotating}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...f[8]||(f[8]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)])],2)),f[9]||(f[9]=W("span",{class:"text-xs font-medium hidden sm:block"},"Girar",-1))],2),f[11]||(f[11]=W("div",{class:"w-px h-6 bg-white/10"},null,-1)),W("div",Qb,[W("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:f[3]||(f[3]=(...T)=>ue(h)&&ue(h)(...T))},"Expandir"),W("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:f[4]||(f[4]=(...T)=>ue(d)&&ue(d)(...T))},"Colapsar"),W("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:f[5]||(f[5]=(...T)=>ue(u)&&ue(u)(...T))},"Reset")])])]),W("button",{class:"pointer-events-auto p-2.5 text-slate-400 hover:text-white bg-slate-950/50 hover:bg-red-500/20 hover:text-red-200 rounded-full transition-all ring-1 ring-white/10 backdrop-blur-md",onClick:_},[...f[13]||(f[13]=[W("svg",{class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),wt(Ta,{"enter-active-class":"transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)","enter-from-class":"opacity-0 translate-y-4 scale-95","enter-to-class":"opacity-100 translate-y-0 scale-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100 translate-y-0 scale-100","leave-to-class":"opacity-0 translate-y-4 scale-95"},{default:pr(()=>[ue(r).hoveredNode?(Xe(),Qe("div",eE,[W("div",tE,[f[14]||(f[14]=W("div",{class:"absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 blur-3xl rounded-full group-hover:bg-primary-500/30 transition-colors"},null,-1)),W("div",nE,[W("div",iE,[W("div",{class:Ae(["w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]",{"text-orange-400 bg-orange-400":ue(r).hoveredNode.type==="object","text-cyan-400 bg-cyan-400":ue(r).hoveredNode.type==="array","text-emerald-400 bg-emerald-400":ue(r).hoveredNode.type==="string","text-blue-400 bg-blue-400":ue(r).hoveredNode.type==="number","text-pink-400 bg-pink-400":ue(r).hoveredNode.type==="boolean","text-slate-400 bg-slate-400":ue(r).hoveredNode.type==="null"}])},null,2),W("span",sE,Pt(ue(r).hoveredNode.type),1)]),W("h3",rE,Pt(ue(r).hoveredNode.name),1),W("div",aE,[W("p",oE,Pt(ue(r).hoveredNode.value),1)])])])])):ln("",!0)]),_:1}),W("div",lE,[W("div",cE,[f[15]||(f[15]=W("span",{class:"w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"},null,-1)),W("span",null,Pt(ue(r).zoomLevel?Math.round(ue(r).zoomLevel*100):0)+"% Zoom",1)])]),W("div",{ref_key:"containerRef",ref:s,class:"w-full h-full cursor-grab active:cursor-grabbing bg-slate-950"},null,512)])):ln("",!0)]),_:1})])):ln("",!0)]),_:1})]))}}),hE=Ld(uE,[["__scopeId","data-v-f0b10e93"]]),fE={class:"mb-4 flex items-center justify-between flex-wrap gap-2"},dE={class:"flex items-center gap-2"},pE={key:0,class:"flex items-center gap-1.5"},mE=["title","aria-label"],gE={key:0,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},_E={key:1,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},vE={key:0,class:"p-6 animate-fade-in",role:"alert"},xE={class:"flex-1 min-w-0"},yE={key:1,class:"flex flex-col items-center justify-center h-full py-16 px-6 animate-fade-in"},ME={key:2,class:"p-4 animate-fade-in"},SE=qs({__name:"JsonViewer",props:{jsonText:{},theme:{}},setup(n){const e=n,t=Lt(()=>e.theme.name==="dark"||e.theme.name==="midnight"),{parsedData:i,errorMessage:s,setJsonText:r}=Dd(e.jsonText);ns(()=>e.jsonText,b=>{r(b)});const a=Lt(()=>i.value!==null),o=Lt(()=>s.value!==null),l=Lt(()=>!e.jsonText.trim()),c=Dt(!1),u=Dt(0),h=Dt(2);function d(){c.value=!0}function p(){c.value=!1}function _(){h.value=999,u.value++}function v(){h.value=0,u.value++}function m(){h.value=2,u.value++}const f=Dt(!1);function T(){f.value=!f.value}function A(b){b.key==="Escape"&&f.value&&(f.value=!1)}return Nr(()=>window.addEventListener("keydown",A)),Ur(()=>window.removeEventListener("keydown",A)),(b,C)=>(Xe(),Vs(Wc,{to:"body",disabled:!f.value},[W("div",{class:Ae(f.value?"fixed inset-0 z-50 flex flex-col p-4 md:p-6":"flex flex-col h-full")},[f.value?(Xe(),Qe("div",{key:0,class:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:C[0]||(C[0]=D=>f.value=!1)})):ln("",!0),W("div",{class:Ae(f.value?["relative z-10 flex-1 flex flex-col min-h-0 rounded-2xl p-4 md:p-6 overflow-hidden",n.theme.colors.bgCard,n.theme.colors.shadow]:"flex flex-col h-full")},[W("div",fE,[W("div",dE,[W("div",{class:Ae(["w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",t.value?"bg-gradient-to-br from-cyan-400 to-cyan-500":"bg-gradient-to-br from-cyan-500 to-cyan-600"])},[...C[1]||(C[1]=[W("svg",{class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1)])],2),W("h2",{class:Ae(["text-lg font-semibold transition-colors duration-300",n.theme.colors.textPrimary])},"Visualizador",2)]),a.value?(Xe(),Qe("div",pE,[W("div",{class:Ae(["flex items-center gap-0.5 p-1 rounded-lg transition-colors duration-300",t.value?"bg-slate-700":"bg-gray-100"])},[W("button",{class:Ae(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Expandir todo","aria-label":"Expandir todos los nodos",onClick:_},[...C[2]||(C[2]=[W("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"})],-1)])],2),W("button",{class:Ae(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Colapsar todo","aria-label":"Colapsar todos los nodos",onClick:v},[...C[3]||(C[3]=[W("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"})],-1)])],2),W("button",{class:Ae(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Restablecer vista","aria-label":"Restablecer vista por defecto",onClick:m},[...C[4]||(C[4]=[W("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])],2)],2),W("button",{class:Ae(["inline-flex items-center gap-1.5 px-3 py-1.5 text-white text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 transition-all shadow-sm",t.value?"bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500":"bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"]),onClick:d,title:"Abrir visualización 3D","aria-label":"Abrir visualización 3D del árbol JSON"},[...C[5]||(C[5]=[W("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})],-1),W("span",null,"Vista 3D",-1)])],2),W("button",{onClick:T,class:Ae(["inline-flex items-center p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",t.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:f.value?"Salir de pantalla completa":"Pantalla completa","aria-label":f.value?"Salir de pantalla completa":"Pantalla completa"},[f.value?(Xe(),Qe("svg",_E,[...C[7]||(C[7]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9L4 4m0 0v4m0-4h4m6 0l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m6 0l5 5m0 0v-4m0 4h-4"},null,-1)])])):(Xe(),Qe("svg",gE,[...C[6]||(C[6]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"},null,-1)])]))],10,mE)])):ln("",!0)]),W("div",{class:Ae(["flex-1 overflow-auto rounded-xl ring-1 shadow-inner-soft transition-colors duration-300",t.value?"bg-slate-800/50 ring-slate-700":"bg-surface-secondary ring-gray-100"])},[o.value?(Xe(),Qe("div",vE,[W("div",{class:Ae(["flex items-start gap-4 p-4 border rounded-xl transition-colors duration-300",t.value?"bg-red-900/30 border-red-800":"bg-red-50 border-red-200"])},[W("div",{class:Ae(["w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300",t.value?"bg-red-900/50":"bg-red-100"])},[(Xe(),Qe("svg",{class:Ae(["w-5 h-5",t.value?"text-red-400":"text-red-600"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...C[8]||(C[8]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])],2))],2),W("div",xE,[W("p",{class:Ae(["font-semibold",t.value?"text-red-300":"text-red-800"])},"Error de sintaxis JSON",2),W("p",{class:Ae(["text-sm mt-1 break-words",t.value?"text-red-400":"text-red-600"])},Pt(ue(s)),3)])],2)])):l.value?(Xe(),Qe("div",yE,[W("div",{class:Ae(["w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300",t.value?"bg-gradient-to-br from-slate-700 to-slate-800":"bg-gradient-to-br from-gray-100 to-gray-200"])},[(Xe(),Qe("svg",{class:Ae(["w-10 h-10",t.value?"text-slate-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...C[9]||(C[9]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)])],2))],2),W("p",{class:Ae(["text-lg font-medium mb-1 transition-colors duration-300",t.value?"text-slate-300":"text-gray-700"])},"Sin datos JSON",2),W("p",{class:Ae(["text-sm text-center max-w-xs transition-colors duration-300",t.value?"text-slate-500":"text-gray-500"])}," Ingresa o pega JSON válido en el panel de entrada para visualizar su estructura ",2)])):a.value?(Xe(),Qe("div",ME,[(Xe(),Vs(N0,{key:u.value,data:ue(i),name:"root",isRoot:!0,depth:0,initialExpandDepth:h.value,lineNumber:1,theme:n.theme},null,8,["data","initialExpandDepth","theme"]))])):ln("",!0)],2),wt(hE,{isOpen:c.value,jsonData:ue(i),onClose:p},null,8,["isOpen","jsonData"])],2)],2)],8,["disabled"]))}}),Ua={light:{name:"light",label:"Claro",icon:"☀️",colors:{bgPrimary:"from-slate-50 via-primary-50/30 to-slate-100",bgSecondary:"bg-white/80",bgTertiary:"bg-slate-50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-soft-lg",textPrimary:"text-gray-900",textSecondary:"text-gray-700",textMuted:"text-gray-500",accent:"bg-primary-600",accentHover:"hover:bg-primary-700",accentLight:"bg-primary-100",success:"text-emerald-700",successLight:"bg-emerald-50 border-emerald-200",error:"text-red-700",errorLight:"bg-red-50 border-red-200",border:"border-gray-200",borderHover:"hover:border-gray-300",jsonString:"text-emerald-600",jsonNumber:"text-blue-600",jsonBoolean:"text-violet-600",jsonNull:"text-gray-500",jsonObject:"text-orange-600",jsonArray:"text-cyan-600",syntaxColors:{key:"#166534",string:"#16a34a",number:"#1d4ed8",boolean:"#6d28d9",null:"#6b7280",punctuation:"#9ca3af"},shadow:"shadow-soft",shadowLg:"shadow-soft-lg"}},dark:{name:"dark",label:"Oscuro",icon:"🌙",colors:{bgPrimary:"from-gray-900 via-gray-900 to-gray-950",bgSecondary:"bg-gray-800/90",bgTertiary:"bg-gray-900",bgCard:"bg-gray-800/90 backdrop-blur-sm",bgCardHover:"hover:bg-gray-800",textPrimary:"text-gray-100",textSecondary:"text-gray-300",textMuted:"text-gray-500",accent:"bg-primary-500",accentHover:"hover:bg-primary-400",accentLight:"bg-primary-900/50",success:"text-emerald-400",successLight:"bg-emerald-900/30 border-emerald-800",error:"text-red-400",errorLight:"bg-red-900/30 border-red-800",border:"border-gray-700",borderHover:"hover:border-gray-600",jsonString:"text-emerald-400",jsonNumber:"text-blue-400",jsonBoolean:"text-violet-400",jsonNull:"text-gray-500",jsonObject:"text-orange-400",jsonArray:"text-cyan-400",syntaxColors:{key:"#6ee7b7",string:"#34d399",number:"#60a5fa",boolean:"#a78bfa",null:"#6b7280",punctuation:"#4b5563"},shadow:"shadow-xl shadow-black/20",shadowLg:"shadow-2xl shadow-black/30"}},midnight:{name:"midnight",label:"Medianoche",icon:"🌌",colors:{bgPrimary:"from-slate-950 via-indigo-950 to-slate-950",bgSecondary:"bg-slate-900/90",bgTertiary:"bg-slate-950",bgCard:"bg-slate-900/80 backdrop-blur-sm",bgCardHover:"hover:bg-slate-800/80",textPrimary:"text-slate-100",textSecondary:"text-slate-300",textMuted:"text-slate-500",accent:"bg-indigo-500",accentHover:"hover:bg-indigo-400",accentLight:"bg-indigo-900/50",success:"text-teal-400",successLight:"bg-teal-900/30 border-teal-800",error:"text-rose-400",errorLight:"bg-rose-900/30 border-rose-800",border:"border-slate-700",borderHover:"hover:border-slate-600",jsonString:"text-teal-400",jsonNumber:"text-indigo-400",jsonBoolean:"text-purple-400",jsonNull:"text-slate-500",jsonObject:"text-amber-400",jsonArray:"text-sky-400",syntaxColors:{key:"#99f6e4",string:"#5eead4",number:"#818cf8",boolean:"#c084fc",null:"#64748b",punctuation:"#475569"},shadow:"shadow-xl shadow-indigo-950/50",shadowLg:"shadow-2xl shadow-indigo-950/60"}},forest:{name:"forest",label:"Bosque",icon:"🌲",colors:{bgPrimary:"from-emerald-50 via-green-50 to-teal-50",bgSecondary:"bg-white/80",bgTertiary:"bg-emerald-50/50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-lg hover:shadow-emerald-100",textPrimary:"text-emerald-950",textSecondary:"text-emerald-800",textMuted:"text-emerald-600",accent:"bg-emerald-600",accentHover:"hover:bg-emerald-700",accentLight:"bg-emerald-100",success:"text-green-700",successLight:"bg-green-50 border-green-200",error:"text-red-700",errorLight:"bg-red-50 border-red-200",border:"border-emerald-200",borderHover:"hover:border-emerald-300",jsonString:"text-green-600",jsonNumber:"text-teal-600",jsonBoolean:"text-lime-600",jsonNull:"text-emerald-400",jsonObject:"text-amber-600",jsonArray:"text-cyan-600",syntaxColors:{key:"#14532d",string:"#166534",number:"#134e4a",boolean:"#3f6212",null:"#6b7280",punctuation:"#6b7280"},shadow:"shadow-lg shadow-emerald-100",shadowLg:"shadow-xl shadow-emerald-200"}},sunset:{name:"sunset",label:"Atardecer",icon:"🌅",colors:{bgPrimary:"from-orange-50 via-rose-50 to-purple-50",bgSecondary:"bg-white/80",bgTertiary:"bg-orange-50/50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-lg hover:shadow-orange-100",textPrimary:"text-gray-900",textSecondary:"text-gray-700",textMuted:"text-gray-500",accent:"bg-orange-500",accentHover:"hover:bg-orange-600",accentLight:"bg-orange-100",success:"text-emerald-700",successLight:"bg-emerald-50 border-emerald-200",error:"text-rose-700",errorLight:"bg-rose-50 border-rose-200",border:"border-orange-200",borderHover:"hover:border-orange-300",jsonString:"text-rose-600",jsonNumber:"text-orange-600",jsonBoolean:"text-purple-600",jsonNull:"text-gray-500",jsonObject:"text-amber-600",jsonArray:"text-pink-600",syntaxColors:{key:"#881337",string:"#be123c",number:"#9a3412",boolean:"#6b21a8",null:"#6b7280",punctuation:"#9ca3af"},shadow:"shadow-lg shadow-orange-100",shadowLg:"shadow-xl shadow-orange-200"}}},Mp="json-visualizer-theme";function bE(){if(typeof window>"u")return"light";const n=localStorage.getItem(Mp);return n&&n in Ua?n:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const Cs=Dt(bE());function Sp(){const n=Lt(()=>Ua[Cs.value]),e=Lt(()=>Object.values(Ua));function t(s){Cs.value=s,localStorage.setItem(Mp,s),s==="dark"||s==="midnight"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function i(){const s=Object.keys(Ua),a=(s.indexOf(Cs.value)+1)%s.length,o=s[a];o&&t(o)}return typeof window<"u"&&(Cs.value==="dark"||Cs.value==="midnight")&&document.documentElement.classList.add("dark"),{currentTheme:n,currentThemeName:Cs,allThemes:e,setTheme:t,cycleTheme:i}}const EE=["aria-expanded"],TE={class:"text-lg","aria-hidden":"true"},wE={class:"text-sm font-medium hidden sm:inline"},AE={class:"p-1.5"},CE=["onClick","aria-selected"],RE={class:"text-xl flex-shrink-0","aria-hidden":"true"},PE={class:"flex-1 font-medium text-sm"},DE=qs({__name:"ThemeSelector",setup(n){const{currentTheme:e,allThemes:t,setTheme:i}=Sp(),s=Dt(!1),r=Dt(null);function a(){s.value=!s.value}function o(u){i(u),s.value=!1}function l(u){r.value&&!r.value.contains(u.target)&&(s.value=!1)}function c(u){u.key==="Escape"&&(s.value=!1)}return Nr(()=>{document.addEventListener("click",l),document.addEventListener("keydown",c)}),Ur(()=>{document.removeEventListener("click",l),document.removeEventListener("keydown",c)}),(u,h)=>(Xe(),Qe("div",{ref_key:"selectorRef",ref:r,class:"theme-selector relative"},[W("button",{onClick:a,class:Ae(["inline-flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",[ue(e).name==="dark"||ue(e).name==="midnight"?"bg-slate-800 text-slate-200 hover:bg-slate-700 focus:ring-slate-500":"bg-white/80 text-gray-700 hover:bg-white hover:shadow-md focus:ring-primary-500 shadow-soft"]]),"aria-expanded":s.value,"aria-haspopup":"listbox","aria-label":"Seleccionar tema",title:"Cambiar tema de color"},[W("span",TE,Pt(ue(e).icon),1),W("span",wE,Pt(ue(e).label),1),(Xe(),Qe("svg",{class:Ae(["w-4 h-4 transition-transform duration-200",{"rotate-180":s.value}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...h[0]||(h[0]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],10,EE),wt(Ta,{"enter-active-class":"transition-all duration-200 ease-out","enter-from-class":"opacity-0 scale-95 -translate-y-2","enter-to-class":"opacity-100 scale-100 translate-y-0","leave-active-class":"transition-all duration-150 ease-in","leave-from-class":"opacity-100 scale-100 translate-y-0","leave-to-class":"opacity-0 scale-95 -translate-y-2"},{default:pr(()=>[s.value?(Xe(),Qe("div",{key:0,class:Ae(["absolute right-0 mt-2 w-48 rounded-xl overflow-hidden z-50",[ue(e).name==="dark"||ue(e).name==="midnight"?"bg-slate-800 ring-1 ring-white/10 shadow-2xl":"bg-white ring-1 ring-black/5 shadow-xl"]]),role:"listbox","aria-label":"Temas disponibles"},[W("div",AE,[(Xe(!0),Qe(an,null,Xc(ue(t),d=>(Xe(),Qe("button",{key:d.name,onClick:p=>o(d.name),class:Ae(["w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 text-left",[d.name===ue(e).name?ue(e).name==="dark"||ue(e).name==="midnight"?"bg-slate-700 text-white":"bg-primary-50 text-primary-700":ue(e).name==="dark"||ue(e).name==="midnight"?"text-slate-300 hover:bg-slate-700 hover:text-white":"text-gray-700 hover:bg-gray-50"]]),role:"option","aria-selected":d.name===ue(e).name},[W("span",RE,Pt(d.icon),1),W("span",PE,Pt(d.label),1),d.name===ue(e).name?(Xe(),Qe("svg",{key:0,class:Ae(["w-4 h-4 flex-shrink-0",[ue(e).name==="dark"||ue(e).name==="midnight"?"text-primary-400":"text-primary-600"]]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...h[1]||(h[1]=[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])],2)):ln("",!0)],10,CE))),128))]),W("div",{class:Ae(["px-3 py-2 text-xs border-t",[ue(e).name==="dark"||ue(e).name==="midnight"?"border-slate-700 text-slate-500":"border-gray-100 text-gray-400"]])}," El tema se guarda automáticamente ",2)],2)):ln("",!0)]),_:1})],512))}}),LE={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},IE={class:"mb-6 md:mb-8"},NE={class:"flex items-center justify-between"},UE={class:"flex-1 text-center"},FE={class:"inline-flex items-center gap-3 mb-2"},OE={class:"flex justify-end w-32"},BE={class:"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-hidden"},zE={class:"mt-4 text-center"},kE=qs({__name:"App",setup(n){const e=Dt(""),{currentTheme:t}=Sp(),i=Lt(()=>t.value.name==="dark"||t.value.name==="midnight");return(s,r)=>(Xe(),Qe("div",{class:Ae(["min-h-screen w-full bg-gradient-to-br p-4 md:p-6 lg:p-8 transition-colors duration-300",ue(t).colors.bgPrimary])},[W("div",LE,[W("header",IE,[W("div",NE,[r[2]||(r[2]=W("div",{class:"w-32 hidden sm:block"},null,-1)),W("div",UE,[W("div",FE,[W("div",{class:Ae(["w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300",[i.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"]])},[...r[1]||(r[1]=[W("svg",{class:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[W("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})],-1)])],2),W("h1",{class:Ae(["text-3xl md:text-4xl font-bold bg-clip-text text-transparent transition-colors duration-300",[i.value?"bg-gradient-to-r from-white via-gray-200 to-white":"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"]])}," JSON Visualizer ",2)]),W("p",{class:Ae(["text-sm md:text-base font-medium transition-colors duration-300",ue(t).colors.textMuted])}," Visualiza y explora estructuras JSON de forma interactiva ",2)]),W("div",OE,[wt(DE)])])]),W("main",BE,[W("section",{class:Ae(["rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300",[ue(t).colors.bgCard,ue(t).colors.shadow,ue(t).colors.bgCardHover,i.value?"ring-1 ring-white/10":"border border-white/50"]]),"aria-label":"Panel de entrada JSON"},[wt(w0,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=a=>e.value=a),theme:ue(t)},null,8,["modelValue","theme"])],2),W("section",{class:Ae(["rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300",[ue(t).colors.bgCard,ue(t).colors.shadow,ue(t).colors.bgCardHover,i.value?"ring-1 ring-white/10":"border border-white/50"]]),"aria-label":"Panel de visualización JSON"},[wt(SE,{jsonText:e.value,theme:ue(t)},null,8,["jsonText","theme"])],2)]),W("footer",zE,[W("p",{class:Ae(["text-xs transition-colors duration-300",ue(t).colors.textMuted])},[r[3]||(r[3]=Fs(" Presiona ",-1)),W("kbd",{class:Ae(["px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300",i.value?"bg-slate-800 text-slate-400":"bg-gray-100 text-gray-500"])},"Ctrl",2),r[4]||(r[4]=Fs(" + ",-1)),W("kbd",{class:Ae(["px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300",i.value?"bg-slate-800 text-slate-400":"bg-gray-100 text-gray-500"])},"V",2),r[5]||(r[5]=Fs(" para pegar y formatear automáticamente ",-1))],2)])])],2))}});l0(kE).mount("#app");
