(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function zc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const bt={},ks=[],Yn=()=>{},Rd=()=>!1,oa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Vc=n=>n.startsWith("onUpdate:"),Ft=Object.assign,Hc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xp=Object.prototype.hasOwnProperty,ut=(n,e)=>Xp.call(n,e),$e=Array.isArray,zs=n=>aa(n)==="[object Map]",Pd=n=>aa(n)==="[object Set]",Qe=n=>typeof n=="function",Dt=n=>typeof n=="string",Vi=n=>typeof n=="symbol",wt=n=>n!==null&&typeof n=="object",Dd=n=>(wt(n)||Qe(n))&&Qe(n.then)&&Qe(n.catch),Ld=Object.prototype.toString,aa=n=>Ld.call(n),jp=n=>aa(n).slice(8,-1),Id=n=>aa(n)==="[object Object]",Gc=n=>Dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,vr=zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),la=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},$p=/-\w/g,Cn=la(n=>n.replace($p,e=>e.slice(1).toUpperCase())),Yp=/\B([A-Z])/g,Hi=la(n=>n.replace(Yp,"-$1").toLowerCase()),ca=la(n=>n.charAt(0).toUpperCase()+n.slice(1)),La=la(n=>n?`on${ca(n)}`:""),Oi=(n,e)=>!Object.is(n,e),Ao=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Nd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Wc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},qp=n=>{const e=Dt(n)?Number(n):NaN;return isNaN(e)?n:e};let Lu;const ua=()=>Lu||(Lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ui(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Dt(i)?Qp(i):Ui(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Dt(n)||wt(n))return n}const Kp=/;(?![^(]*\))/g,Jp=/:([^]+)/,Zp=/\/\*[^]*?\*\//g;function Qp(n){const e={};return n.replace(Zp,"").split(Kp).forEach(t=>{if(t){const i=t.split(Jp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function X(n){let e="";if(Dt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=X(n[t]);i&&(e+=i+" ")}else if(wt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const em="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tm=zc(em);function Ud(n){return!!n||n===""}const Fd=n=>!!(n&&n.__v_isRef===!0),qe=n=>Dt(n)?n:n==null?"":$e(n)||wt(n)&&(n.toString===Ld||!Qe(n.toString))?Fd(n)?qe(n.value):JSON.stringify(n,Od,2):String(n),Od=(n,e)=>Fd(e)?Od(n,e.value):zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ia(i,r)+" =>"]=s,t),{})}:Pd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ia(t))}:Vi(e)?Ia(e):wt(e)&&!$e(e)&&!Id(e)?String(e):e,Ia=(n,e="")=>{var t;return Vi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let an;class nm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=an,!e&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=an;try{return an=this,e()}finally{an=t}}}on(){++this._on===1&&(this.prevScope=an,an=this)}off(){this._on>0&&--this._on===0&&(an=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function im(){return an}let Et;const Na=new WeakSet;class Bd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,an&&an.active&&an.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Na.has(this)&&(Na.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Iu(this),Vd(this);const e=Et,t=Nn;Et=this,Nn=!0;try{return this.fn()}finally{Hd(this),Et=e,Nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$c(e);this.deps=this.depsTail=void 0,Iu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Na.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rl(this)&&this.run()}get dirty(){return Rl(this)}}let kd=0,xr,yr;function zd(n,e=!1){if(n.flags|=8,e){n.next=yr,yr=n;return}n.next=xr,xr=n}function Xc(){kd++}function jc(){if(--kd>0)return;if(yr){let e=yr;for(yr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;xr;){let e=xr;for(xr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Vd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),$c(i),sm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Rl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Gd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Rr)||(n.globalVersion=Rr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Rl(n))))return;n.flags|=2;const e=n.dep,t=Et,i=Nn;Et=n,Nn=!0;try{Vd(n);const s=n.fn(n._value);(e.version===0||Oi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,Nn=i,Hd(n),n.flags&=-3}}function $c(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)$c(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function sm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nn=!0;const Wd=[];function _i(){Wd.push(Nn),Nn=!1}function vi(){const n=Wd.pop();Nn=n===void 0?!0:n}function Iu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let Rr=0;class rm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!Nn||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new rm(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,Xd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,Rr++,this.notify(e)}notify(e){Xc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{jc()}}}function Xd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Xd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Pl=new WeakMap,ls=Symbol(""),Dl=Symbol(""),Pr=Symbol("");function Xt(n,e,t){if(Nn&&Et){let i=Pl.get(n);i||Pl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Yc),s.map=i,s.key=t),s.track()}}function hi(n,e,t,i,s,r){const o=Pl.get(n);if(!o){Rr++;return}const a=l=>{l&&l.trigger()};if(Xc(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&Gc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Pr||!Vi(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Pr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ls)),zs(n)&&a(o.get(Dl)));break;case"delete":l||(a(o.get(ls)),zs(n)&&a(o.get(Dl)));break;case"set":zs(n)&&a(o.get(ls));break}}jc()}function ms(n){const e=ct(n);return e===n?e:(Xt(e,"iterate",Pr),An(n)?e:e.map(Fn))}function ha(n){return Xt(n=ct(n),"iterate",Pr),n}function Di(n,e){return xi(n)?$s(cs(n)?Fn(e):e):Fn(e)}const om={__proto__:null,[Symbol.iterator](){return Ua(this,Symbol.iterator,n=>Di(this,n))},concat(...n){return ms(this).concat(...n.map(e=>$e(e)?ms(e):e))},entries(){return Ua(this,"entries",n=>(n[1]=Di(this,n[1]),n))},every(n,e){return ti(this,"every",n,e,void 0,arguments)},filter(n,e){return ti(this,"filter",n,e,t=>t.map(i=>Di(this,i)),arguments)},find(n,e){return ti(this,"find",n,e,t=>Di(this,t),arguments)},findIndex(n,e){return ti(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ti(this,"findLast",n,e,t=>Di(this,t),arguments)},findLastIndex(n,e){return ti(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ti(this,"forEach",n,e,void 0,arguments)},includes(...n){return Fa(this,"includes",n)},indexOf(...n){return Fa(this,"indexOf",n)},join(n){return ms(this).join(n)},lastIndexOf(...n){return Fa(this,"lastIndexOf",n)},map(n,e){return ti(this,"map",n,e,void 0,arguments)},pop(){return sr(this,"pop")},push(...n){return sr(this,"push",n)},reduce(n,...e){return Nu(this,"reduce",n,e)},reduceRight(n,...e){return Nu(this,"reduceRight",n,e)},shift(){return sr(this,"shift")},some(n,e){return ti(this,"some",n,e,void 0,arguments)},splice(...n){return sr(this,"splice",n)},toReversed(){return ms(this).toReversed()},toSorted(n){return ms(this).toSorted(n)},toSpliced(...n){return ms(this).toSpliced(...n)},unshift(...n){return sr(this,"unshift",n)},values(){return Ua(this,"values",n=>Di(this,n))}};function Ua(n,e,t){const i=ha(n),s=i[e]();return i!==n&&!An(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const am=Array.prototype;function ti(n,e,t,i,s,r){const o=ha(n),a=o!==n&&!An(n),l=o[e];if(l!==am[e]){const h=l.apply(n,r);return a?Fn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Di(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Nu(n,e,t,i){const s=ha(n);let r=t;return s!==n&&(An(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Di(n,a),l,n)}),s[e](r,...i)}function Fa(n,e,t){const i=ct(n);Xt(i,"iterate",Pr);const s=i[e](...t);return(s===-1||s===!1)&&Zc(t[0])?(t[0]=ct(t[0]),i[e](...t)):s}function sr(n,e,t=[]){_i(),Xc();const i=ct(n)[e].apply(n,t);return jc(),vi(),i}const lm=zc("__proto__,__v_isRef,__isVue"),jd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vi));function cm(n){Vi(n)||(n=String(n));const e=ct(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class $d{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?xm:Jd:r?Kd:qd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!s){let l;if(o&&(l=om[t]))return l;if(t==="hasOwnProperty")return cm}const a=Reflect.get(e,t,It(e)?e:i);if((Vi(t)?jd.has(t):lm(t))||(s||Xt(e,"get",t),r))return a;if(It(a)){const l=o&&Gc(t)?a:a.value;return s&&wt(l)?Il(l):l}return wt(a)?s?Il(a):Kc(a):a}}class Yd extends $d{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=$e(e)&&Gc(t);if(!this._isShallow){const c=xi(r);if(!An(i)&&!xi(i)&&(r=ct(r),i=ct(i)),!o&&It(r)&&!It(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:ut(e,t),l=Reflect.set(e,t,i,It(e)?e:s);return e===ct(s)&&(a?Oi(i,r)&&hi(e,"set",t,i):hi(e,"add",t,i)),l}deleteProperty(e,t){const i=ut(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&hi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Vi(t)||!jd.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",$e(e)?"length":ls),Reflect.ownKeys(e)}}class um extends $d{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const hm=new Yd,dm=new um,fm=new Yd(!0);const Ll=n=>n,$r=n=>Reflect.getPrototypeOf(n);function pm(n,e,t){return function(...i){const s=this.__v_raw,r=ct(s),o=zs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Ll:e?$s:Fn;return!e&&Xt(r,"iterate",l?Dl:ls),Ft(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Yr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function mm(n,e){const t={get(s){const r=this.__v_raw,o=ct(r),a=ct(s);n||(Oi(s,a)&&Xt(o,"get",s),Xt(o,"get",a));const{has:l}=$r(o),c=e?Ll:n?$s:Fn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xt(ct(s),"iterate",ls),s.size},has(s){const r=this.__v_raw,o=ct(r),a=ct(s);return n||(Oi(s,a)&&Xt(o,"has",s),Xt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ct(a),c=e?Ll:n?$s:Fn;return!n&&Xt(l,"iterate",ls),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ft(t,n?{add:Yr("add"),set:Yr("set"),delete:Yr("delete"),clear:Yr("clear")}:{add(s){!e&&!An(s)&&!xi(s)&&(s=ct(s));const r=ct(this);return $r(r).has.call(r,s)||(r.add(s),hi(r,"add",s,s)),this},set(s,r){!e&&!An(r)&&!xi(r)&&(r=ct(r));const o=ct(this),{has:a,get:l}=$r(o);let c=a.call(o,s);c||(s=ct(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Oi(r,u)&&hi(o,"set",s,r):hi(o,"add",s,r),this},delete(s){const r=ct(this),{has:o,get:a}=$r(r);let l=o.call(r,s);l||(s=ct(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&hi(r,"delete",s,void 0),c},clear(){const s=ct(this),r=s.size!==0,o=s.clear();return r&&hi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=pm(s,n,e)}),t}function qc(n,e){const t=mm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ut(t,s)&&s in i?t:i,s,r)}const gm={get:qc(!1,!1)},_m={get:qc(!1,!0)},vm={get:qc(!0,!1)};const qd=new WeakMap,Kd=new WeakMap,Jd=new WeakMap,xm=new WeakMap;function ym(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bm(n){return n.__v_skip||!Object.isExtensible(n)?0:ym(jp(n))}function Kc(n){return xi(n)?n:Jc(n,!1,hm,gm,qd)}function Mm(n){return Jc(n,!1,fm,_m,Kd)}function Il(n){return Jc(n,!0,dm,vm,Jd)}function Jc(n,e,t,i,s){if(!wt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=bm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function cs(n){return xi(n)?cs(n.__v_raw):!!(n&&n.__v_isReactive)}function xi(n){return!!(n&&n.__v_isReadonly)}function An(n){return!!(n&&n.__v_isShallow)}function Zc(n){return n?!!n.__v_raw:!1}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function Sm(n){return!ut(n,"__v_skip")&&Object.isExtensible(n)&&Nd(n,"__v_skip",!0),n}const Fn=n=>wt(n)?Kc(n):n,$s=n=>wt(n)?Il(n):n;function It(n){return n?n.__v_isRef===!0:!1}function We(n){return Em(n,!1)}function Em(n,e){return It(n)?n:new Tm(n,e)}class Tm{constructor(e,t){this.dep=new Yc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ct(e),this._value=t?e:Fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||An(e)||xi(e);e=i?e:ct(e),Oi(e,t)&&(this._rawValue=e,this._value=i?e:Fn(e),this.dep.trigger())}}function N(n){return It(n)?n.value:n}const wm={get:(n,e,t)=>e==="__v_raw"?n:N(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return It(s)&&!It(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Zd(n){return cs(n)?n:new Proxy(n,wm)}class Am{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Yc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return zd(this,!0),!0}get value(){const e=this.dep.track();return Gd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cm(n,e,t=!1){let i,s;return Qe(n)?i=n:(i=n.get,s=n.set),new Am(i,s,t)}const qr={},Vo=new WeakMap;let ts;function Rm(n,e=!1,t=ts){if(t){let i=Vo.get(t);i||Vo.set(t,i=[]),i.push(n)}}function Pm(n,e,t=bt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=b=>s?b:An(b)||s===!1||s===0?di(b,1):di(b);let u,h,f,p,g=!1,v=!1;if(It(n)?(h=()=>n.value,g=An(n)):cs(n)?(h=()=>c(n),g=!0):$e(n)?(v=!0,g=n.some(b=>cs(b)||An(b)),h=()=>n.map(b=>{if(It(b))return b.value;if(cs(b))return c(b);if(Qe(b))return l?l(b,2):b()})):Qe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){_i();try{f()}finally{vi()}}const b=ts;ts=u;try{return l?l(n,3,[p]):n(p)}finally{ts=b}}:h=Yn,e&&s){const b=h,E=s===!0?1/0:s;h=()=>di(b(),E)}const m=im(),d=()=>{u.stop(),m&&m.active&&Hc(m.effects,u)};if(r&&e){const b=e;e=(...E)=>{b(...E),d()}}let T=v?new Array(n.length).fill(qr):qr;const A=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const E=u.run();if(s||g||(v?E.some((P,I)=>Oi(P,T[I])):Oi(E,T))){f&&f();const P=ts;ts=u;try{const I=[E,T===qr?void 0:v&&T[0]===qr?[]:T,p];T=E,l?l(e,3,I):e(...I)}finally{ts=P}}}else u.run()};return a&&a(A),u=new Bd(h),u.scheduler=o?()=>o(A,!1):A,p=b=>Rm(b,!1,u),f=u.onStop=()=>{const b=Vo.get(u);if(b){if(l)l(b,4);else for(const E of b)E();Vo.delete(u)}},e?i?A(!0):T=u.run():o?o(A.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function di(n,e=1/0,t){if(e<=0||!wt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,It(n))di(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)di(n[i],e,t);else if(Pd(n)||zs(n))n.forEach(i=>{di(i,e,t)});else if(Id(n)){for(const i in n)di(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&di(n[i],e,t)}return n}function zr(n,e,t,i){try{return i?n(...i):n()}catch(s){da(s,e,t)}}function On(n,e,t,i){if(Qe(n)){const s=zr(n,e,t,i);return s&&Dd(s)&&s.catch(r=>{da(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(On(n[r],e,t,i));return s}}function da(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||bt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){_i(),zr(r,null,10,[n,l,c]),vi();return}}Dm(n,t,s,i,o)}function Dm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const en=[];let Vn=-1;const Vs=[];let Li=null,Fs=0;const Qd=Promise.resolve();let Ho=null;function ef(n){const e=Ho||Qd;return n?e.then(this?n.bind(this):n):e}function Lm(n){let e=Vn+1,t=en.length;for(;e<t;){const i=e+t>>>1,s=en[i],r=Dr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Qc(n){if(!(n.flags&1)){const e=Dr(n),t=en[en.length-1];!t||!(n.flags&2)&&e>=Dr(t)?en.push(n):en.splice(Lm(e),0,n),n.flags|=1,tf()}}function tf(){Ho||(Ho=Qd.then(sf))}function Im(n){$e(n)?Vs.push(...n):Li&&n.id===-1?Li.splice(Fs+1,0,n):n.flags&1||(Vs.push(n),n.flags|=1),tf()}function Uu(n,e,t=Vn+1){for(;t<en.length;t++){const i=en[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function nf(n){if(Vs.length){const e=[...new Set(Vs)].sort((t,i)=>Dr(t)-Dr(i));if(Vs.length=0,Li){Li.push(...e);return}for(Li=e,Fs=0;Fs<Li.length;Fs++){const t=Li[Fs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Li=null,Fs=0}}const Dr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function sf(n){try{for(Vn=0;Vn<en.length;Vn++){const e=en[Vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vn<en.length;Vn++){const e=en[Vn];e&&(e.flags&=-2)}Vn=-1,en.length=0,nf(),Ho=null,(en.length||Vs.length)&&sf()}}let _n=null,rf=null;function Go(n){const e=_n;return _n=n,rf=n&&n.type.__scopeId||null,e}function Hs(n,e=_n,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&$o(-1);const r=Go(e);let o;try{o=n(...s)}finally{Go(r),i._d&&$o(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Wo(n,e){if(_n===null)return n;const t=_a(_n),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=bt]=e[s];r&&(Qe(r)&&(r={mounted:r,updated:r}),r.deep&&di(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Xi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(_i(),On(l,t,8,[n.el,a,n,e]),vi())}}function Nm(n,e){if(jt){let t=jt.provides;const i=jt.parent&&jt.parent.provides;i===t&&(t=jt.provides=Object.create(i)),t[n]=e}}function Co(n,e,t=!1){const i=Of();if(i||Gs){let s=Gs?Gs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Qe(e)?e.call(i&&i.proxy):e}}const Um=Symbol.for("v-scx"),Fm=()=>Co(Um);function mi(n,e,t){return of(n,e,t)}function of(n,e,t=bt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ft({},t),l=e&&i||!e&&r!=="post";let c;if(Nr){if(r==="sync"){const p=Fm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Yn,p.resume=Yn,p.pause=Yn,p}}const u=jt;a.call=(p,g,v)=>On(p,u,g,v);let h=!1;r==="post"?a.scheduler=p=>{Qt(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Qc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Pm(n,e,a);return Nr&&(c?c.push(f):l&&f()),f}function Om(n,e,t){const i=this.proxy,s=Dt(n)?n.includes(".")?af(i,n):()=>i[n]:n.bind(i,i);let r;Qe(e)?r=e:(r=e.handler,t=e);const o=Vr(this),a=of(s,r.bind(i),t);return o(),a}function af(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const lf=Symbol("_vte"),cf=n=>n.__isTeleport,br=n=>n&&(n.disabled||n.disabled===""),Fu=n=>n&&(n.defer||n.defer===""),Ou=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Bu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Nl=(n,e)=>{const t=n&&n.to;return Dt(t)?e?e(t):null:t},uf={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:p,querySelector:g,createText:v,createComment:m}}=c,d=br(e.props);let{shapeFlag:T,children:A,dynamicChildren:b}=e;if(n==null){const E=e.el=v(""),P=e.anchor=v("");p(E,t,i),p(P,t,i);const I=(x,S)=>{T&16&&u(A,x,S,s,r,o,a,l)},V=()=>{const x=e.target=Nl(e.props,g),S=hf(x,e,v,p);x&&(o!=="svg"&&Ou(x)?o="svg":o!=="mathml"&&Bu(x)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(x),d||(I(x,S),Ro(e,!1)))};d&&(I(t,P),Ro(e,!0)),Fu(e.props)?(e.el.__isMounted=!1,Qt(()=>{V(),delete e.el.__isMounted},r)):V()}else{if(Fu(e.props)&&n.el.__isMounted===!1){Qt(()=>{uf.process(n,e,t,i,s,r,o,a,l,c)},r);return}e.el=n.el,e.targetStart=n.targetStart;const E=e.anchor=n.anchor,P=e.target=n.target,I=e.targetAnchor=n.targetAnchor,V=br(n.props),x=V?t:P,S=V?E:I;if(o==="svg"||Ou(P)?o="svg":(o==="mathml"||Bu(P))&&(o="mathml"),b?(f(n.dynamicChildren,b,x,s,r,o,a),iu(n,e,!0)):l||h(n,e,x,S,s,r,o,a,!1),d)V?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Kr(e,t,E,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const L=e.target=Nl(e.props,g);L&&Kr(e,L,null,c,0)}else V&&Kr(e,P,I,c,1);Ro(e,d)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:f}=n;if(h&&(s(c),s(u)),r&&s(l),o&16){const p=r||!br(f);for(let g=0;g<a.length;g++){const v=a[g];i(v,e,t,p,!!v.dynamicChildren)}}},move:Kr,hydrate:Bm};function Kr(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,h=r===2;if(h&&i(o,e,t),(!h||br(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,t,2);h&&i(a,e,t)}function Bm(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){function f(v,m,d,T){m.anchor=h(o(v),m,a(v),t,i,s,r),m.targetStart=d,m.targetAnchor=T}const p=e.target=Nl(e.props,l),g=br(e.props);if(p){const v=p._lpa||p.firstChild;if(e.shapeFlag&16)if(g)f(n,e,v,v&&o(v));else{e.anchor=o(n);let m=v;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||hf(p,e,u,c),h(v&&o(v),e,p,t,i,s,r)}Ro(e,g)}else g&&e.shapeFlag&16&&f(n,e,n,o(n));return e.anchor&&o(e.anchor)}const eu=uf;function Ro(n,e){const t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function hf(n,e,t,i){const s=e.targetStart=t(""),r=e.targetAnchor=t("");return s[lf]=r,n&&(i(s,n),i(r,n)),r}const ci=Symbol("_leaveCb"),Jr=Symbol("_enterCb");function km(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return er(()=>{n.isMounted=!0}),xf(()=>{n.isUnmounting=!0}),n}const En=[Function,Array],df={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:En,onEnter:En,onAfterEnter:En,onEnterCancelled:En,onBeforeLeave:En,onLeave:En,onAfterLeave:En,onLeaveCancelled:En,onBeforeAppear:En,onAppear:En,onAfterAppear:En,onAppearCancelled:En},ff=n=>{const e=n.subTree;return e.component?ff(e.component):e},zm={name:"BaseTransition",props:df,setup(n,{slots:e}){const t=Of(),i=km();return()=>{const s=e.default&&gf(e.default(),!0);if(!s||!s.length)return;const r=pf(s),o=ct(n),{mode:a}=o;if(i.isLeaving)return Oa(r);const l=ku(r);if(!l)return Oa(r);let c=Ul(l,o,i,t,h=>c=h);l.type!==tn&&Lr(l,c);let u=t.subTree&&ku(t.subTree);if(u&&u.type!==tn&&!ns(u,l)&&ff(t).type!==tn){let h=Ul(u,o,i,t);if(Lr(u,h),a==="out-in"&&l.type!==tn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},Oa(r);a==="in-out"&&l.type!==tn?h.delayLeave=(f,p,g)=>{const v=mf(i,u);v[String(u.key)]=u,f[ci]=()=>{p(),f[ci]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function pf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==tn){e=t;break}}return e}const Vm=zm;function mf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ul(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:m,onAppear:d,onAfterAppear:T,onAppearCancelled:A}=e,b=String(n.key),E=mf(t,n),P=(x,S)=>{x&&On(x,i,9,S)},I=(x,S)=>{const L=S[1];P(x,S),$e(x)?x.every(F=>F.length<=1)&&L():x.length<=1&&L()},V={mode:o,persisted:a,beforeEnter(x){let S=l;if(!t.isMounted)if(r)S=m||l;else return;x[ci]&&x[ci](!0);const L=E[b];L&&ns(n,L)&&L.el[ci]&&L.el[ci](),P(S,[x])},enter(x){let S=c,L=u,F=h;if(!t.isMounted)if(r)S=d||c,L=T||u,F=A||h;else return;let B=!1;const te=x[Jr]=ie=>{B||(B=!0,ie?P(F,[x]):P(L,[x]),V.delayedLeave&&V.delayedLeave(),x[Jr]=void 0)};S?I(S,[x,te]):te()},leave(x,S){const L=String(n.key);if(x[Jr]&&x[Jr](!0),t.isUnmounting)return S();P(f,[x]);let F=!1;const B=x[ci]=te=>{F||(F=!0,S(),te?P(v,[x]):P(g,[x]),x[ci]=void 0,E[L]===n&&delete E[L])};E[L]=n,p?I(p,[x,B]):B()},clone(x){const S=Ul(x,e,t,i,s);return s&&s(S),S}};return V}function Oa(n){if(fa(n))return n=ki(n),n.children=null,n}function ku(n){if(!fa(n))return cf(n.type)&&n.children?pf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Qe(t.default))return t.default()}}function Lr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Lr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function gf(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===At?(o.patchFlag&128&&s++,i=i.concat(gf(o.children,e,a))):(e||o.type!==tn)&&i.push(a!=null?ki(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Mn(n,e){return Qe(n)?Ft({name:n.name},e,{setup:n}):n}function _f(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Xo=new WeakMap;function Mr(n,e,t,i,s=!1){if($e(n)){n.forEach((g,v)=>Mr(g,e&&($e(e)?e[v]:e),t,i,s));return}if(Sr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Mr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?_a(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===bt?a.refs={}:a.refs,h=a.setupState,f=ct(h),p=h===bt?Rd:g=>ut(f,g);if(c!=null&&c!==l){if(zu(e),Dt(c))u[c]=null,p(c)&&(h[c]=null);else if(It(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(Qe(l))zr(l,a,12,[o,u]);else{const g=Dt(l),v=It(l);if(g||v){const m=()=>{if(n.f){const d=g?p(l)?h[l]:u[l]:l.value;if(s)$e(d)&&Hc(d,r);else if($e(d))d.includes(r)||d.push(r);else if(g)u[l]=[r],p(l)&&(h[l]=u[l]);else{const T=[r];l.value=T,n.k&&(u[n.k]=T)}}else g?(u[l]=o,p(l)&&(h[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{m(),Xo.delete(n)};d.id=-1,Xo.set(n,d),Qt(d,t)}else zu(n),m()}}}function zu(n){const e=Xo.get(n);e&&(e.flags|=8,Xo.delete(n))}ua().requestIdleCallback;ua().cancelIdleCallback;const Sr=n=>!!n.type.__asyncLoader,fa=n=>n.type.__isKeepAlive;function Hm(n,e){vf(n,"a",e)}function Gm(n,e){vf(n,"da",e)}function vf(n,e,t=jt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(pa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)fa(s.parent.vnode)&&Wm(i,e,t,s),s=s.parent}}function Wm(n,e,t,i){const s=pa(e,n,i,!0);tr(()=>{Hc(i[e],s)},t)}function pa(n,e,t=jt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{_i();const a=Vr(t),l=On(e,t,n,o);return a(),vi(),l});return i?s.unshift(r):s.push(r),r}}const bi=n=>(e,t=jt)=>{(!Nr||n==="sp")&&pa(n,(...i)=>e(...i),t)},Xm=bi("bm"),er=bi("m"),jm=bi("bu"),$m=bi("u"),xf=bi("bum"),tr=bi("um"),Ym=bi("sp"),qm=bi("rtg"),Km=bi("rtc");function Jm(n,e=jt){pa("ec",n,e)}const Zm="components";function Qm(n,e){return t0(Zm,n,!0,e)||n}const e0=Symbol.for("v-ndc");function t0(n,e,t=!0,i=!1){const s=_n||jt;if(s){const r=s.type;{const a=k0(r,!1);if(a&&(a===e||a===Cn(e)||a===ca(Cn(e))))return r}const o=Vu(s[n]||r[n],e)||Vu(s.appContext[n],e);return!o&&i?r:o}}function Vu(n,e){return n&&(n[e]||n[Cn(e)]||n[ca(Cn(e))])}function qn(n,e,t,i){let s;const r=t,o=$e(n);if(o||Dt(n)){const a=o&&cs(n);let l=!1,c=!1;a&&(l=!An(n),c=xi(n),n=ha(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?$s(Fn(n[u])):Fn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(wt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Fl=n=>n?Bf(n)?_a(n):Fl(n.parent):null,Er=Ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Fl(n.parent),$root:n=>Fl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>bf(n),$forceUpdate:n=>n.f||(n.f=()=>{Qc(n.update)}),$nextTick:n=>n.n||(n.n=ef.bind(n.proxy)),$watch:n=>Om.bind(n)}),Ba=(n,e)=>n!==bt&&!n.__isScriptSetup&&ut(n,e),n0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ba(i,e))return o[e]=1,i[e];if(s!==bt&&ut(s,e))return o[e]=2,s[e];if(ut(r,e))return o[e]=3,r[e];if(t!==bt&&ut(t,e))return o[e]=4,t[e];Ol&&(o[e]=0)}}const c=Er[e];let u,h;if(c)return e==="$attrs"&&Xt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==bt&&ut(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,ut(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ba(s,e)?(s[e]=t,!0):i!==bt&&ut(i,e)?(i[e]=t,!0):ut(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==bt&&a[0]!=="$"&&ut(n,a)||Ba(e,a)||ut(r,a)||ut(i,a)||ut(Er,a)||ut(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ut(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hu(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ol=!0;function i0(n){const e=bf(n),t=n.proxy,i=n.ctx;Ol=!1,e.beforeCreate&&Gu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:T,destroyed:A,unmounted:b,render:E,renderTracked:P,renderTriggered:I,errorCaptured:V,serverPrefetch:x,expose:S,inheritAttrs:L,components:F,directives:B,filters:te}=e;if(c&&s0(c,i,null),o)for(const W in o){const H=o[W];Qe(H)&&(i[W]=H.bind(t))}if(s){const W=s.call(t,t);wt(W)&&(n.data=Kc(W))}if(Ol=!0,r)for(const W in r){const H=r[W],pe=Qe(H)?H.bind(t,t):Qe(H.get)?H.get.bind(t,t):Yn,be=!Qe(H)&&Qe(H.set)?H.set.bind(t):Yn,we=Xe({get:pe,set:be});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>we.value,set:Ge=>we.value=Ge})}if(a)for(const W in a)yf(a[W],i,t,W);if(l){const W=Qe(l)?l.call(t):l;Reflect.ownKeys(W).forEach(H=>{Nm(H,W[H])})}u&&Gu(u,n,"c");function Q(W,H){$e(H)?H.forEach(pe=>W(pe.bind(t))):H&&W(H.bind(t))}if(Q(Xm,h),Q(er,f),Q(jm,p),Q($m,g),Q(Hm,v),Q(Gm,m),Q(Jm,V),Q(Km,P),Q(qm,I),Q(xf,T),Q(tr,b),Q(Ym,x),$e(S))if(S.length){const W=n.exposed||(n.exposed={});S.forEach(H=>{Object.defineProperty(W,H,{get:()=>t[H],set:pe=>t[H]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===Yn&&(n.render=E),L!=null&&(n.inheritAttrs=L),F&&(n.components=F),B&&(n.directives=B),x&&_f(n)}function s0(n,e,t=Yn){$e(n)&&(n=Bl(n));for(const i in n){const s=n[i];let r;wt(s)?"default"in s?r=Co(s.from||i,s.default,!0):r=Co(s.from||i):r=Co(s),It(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Gu(n,e,t){On($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function yf(n,e,t,i){let s=i.includes(".")?af(t,i):()=>t[i];if(Dt(n)){const r=e[n];Qe(r)&&mi(s,r)}else if(Qe(n))mi(s,n.bind(t));else if(wt(n))if($e(n))n.forEach(r=>yf(r,e,t,i));else{const r=Qe(n.handler)?n.handler.bind(t):e[n.handler];Qe(r)&&mi(s,r,n)}}function bf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>jo(l,c,o,!0)),jo(l,e,o)),wt(e)&&r.set(e,l),l}function jo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&jo(n,r,t,!0),s&&s.forEach(o=>jo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=r0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const r0={data:Wu,props:Xu,emits:Xu,methods:mr,computed:mr,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:mr,directives:mr,watch:a0,provide:Wu,inject:o0};function Wu(n,e){return e?n?function(){return Ft(Qe(n)?n.call(this,this):n,Qe(e)?e.call(this,this):e)}:e:n}function o0(n,e){return mr(Bl(n),Bl(e))}function Bl(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Jt(n,e){return n?[...new Set([].concat(n,e))]:e}function mr(n,e){return n?Ft(Object.create(null),n,e):e}function Xu(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Ft(Object.create(null),Hu(n),Hu(e??{})):e}function a0(n,e){if(!n)return e;if(!e)return n;const t=Ft(Object.create(null),n);for(const i in e)t[i]=Jt(n[i],e[i]);return t}function Mf(){return{app:null,config:{isNativeTag:Rd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let l0=0;function c0(n,e){return function(i,s=null){Qe(i)||(i=Ft({},i)),s!=null&&!wt(s)&&(s=null);const r=Mf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:l0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:H0,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Qe(u.install)?(o.add(u),u.install(c,...h)):Qe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||mt(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,_a(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Gs;Gs=c;try{return u()}finally{Gs=h}}};return c}}let Gs=null;const u0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Cn(e)}Modifiers`]||n[`${Hi(e)}Modifiers`];function h0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||bt;let s=t;const r=e.startsWith("update:"),o=r&&u0(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Dt(u)?u.trim():u)),o.number&&(s=t.map(Wc)));let a,l=i[a=La(e)]||i[a=La(Cn(e))];!l&&r&&(l=i[a=La(Hi(e))]),l&&On(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,s)}}const d0=new WeakMap;function Sf(n,e,t=!1){const i=t?d0:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Qe(n)){const l=c=>{const u=Sf(c,e,!0);u&&(a=!0,Ft(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(wt(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>o[l]=null):Ft(o,r),wt(n)&&i.set(n,o),o)}function ma(n,e){return!n||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ut(n,e[0].toLowerCase()+e.slice(1))||ut(n,Hi(e))||ut(n,e))}function ju(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:v}=n,m=Go(n);let d,T;try{if(t.shapeFlag&4){const b=s||i,E=b;d=Hn(c.call(E,b,u,h,p,f,g)),T=a}else{const b=e;d=Hn(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),T=e.props?a:f0(a)}}catch(b){Tr.length=0,da(b,n,1),d=mt(tn)}let A=d;if(T&&v!==!1){const b=Object.keys(T),{shapeFlag:E}=A;b.length&&E&7&&(r&&b.some(Vc)&&(T=p0(T,r)),A=ki(A,T,!1,!0))}return t.dirs&&(A=ki(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&Lr(A,t.transition),d=A,Go(m),d}const f0=n=>{let e;for(const t in n)(t==="class"||t==="style"||oa(t))&&((e||(e={}))[t]=n[t]);return e},p0=(n,e)=>{const t={};for(const i in n)(!Vc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function m0(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?$u(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!ma(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$u(i,o,c):!0:!!o;return!1}function $u(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ma(t,r))return!0}return!1}function g0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ef={},Tf=()=>Object.create(Ef),wf=n=>Object.getPrototypeOf(n)===Ef;function _0(n,e,t,i=!1){const s={},r=Tf();n.propsDefaults=Object.create(null),Af(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Mm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function v0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ct(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ma(n.emitsOptions,f))continue;const p=e[f];if(l)if(ut(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=Cn(f);s[g]=kl(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Af(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ut(e,h)&&((u=Hi(h))===h||!ut(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=kl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ut(e,h))&&(delete r[h],c=!0)}c&&hi(n.attrs,"set","")}function Af(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(vr(l))continue;const c=e[l];let u;s&&ut(s,u=Cn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ma(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ct(t),c=a||bt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=kl(s,l,h,c[h],n,!ut(c,h))}}return o}function kl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ut(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Vr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Hi(t))&&(i=!0))}return i}const x0=new WeakMap;function Cf(n,e,t=!1){const i=t?x0:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Qe(n)){const u=h=>{l=!0;const[f,p]=Cf(h,e,!0);Ft(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return wt(n)&&i.set(n,ks),ks;if($e(r))for(let u=0;u<r.length;u++){const h=Cn(r[u]);Yu(h)&&(o[h]=bt)}else if(r)for(const u in r){const h=Cn(u);if(Yu(h)){const f=r[u],p=o[h]=$e(f)||Qe(f)?{type:f}:Ft({},f),g=p.type;let v=!1,m=!0;if($e(g))for(let d=0;d<g.length;++d){const T=g[d],A=Qe(T)&&T.name;if(A==="Boolean"){v=!0;break}else A==="String"&&(m=!1)}else v=Qe(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||ut(p,"default"))&&a.push(h)}}const c=[o,a];return wt(n)&&i.set(n,c),c}function Yu(n){return n[0]!=="$"&&!vr(n)}const tu=n=>n==="_"||n==="_ctx"||n==="$stable",nu=n=>$e(n)?n.map(Hn):[Hn(n)],y0=(n,e,t)=>{if(e._n)return e;const i=Hs((...s)=>nu(e(...s)),t);return i._c=!1,i},Rf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(tu(s))continue;const r=n[s];if(Qe(r))e[s]=y0(s,r,i);else if(r!=null){const o=nu(r);e[s]=()=>o}}},Pf=(n,e)=>{const t=nu(e);n.slots.default=()=>t},Df=(n,e,t)=>{for(const i in e)(t||!tu(i))&&(n[i]=e[i])},b0=(n,e,t)=>{const i=n.slots=Tf();if(n.vnode.shapeFlag&32){const s=e._;s?(Df(i,e,t),t&&Nd(i,"_",s,!0)):Rf(e,i)}else e&&Pf(n,e)},M0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=bt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Df(s,e,t):(r=!e.$stable,Rf(e,s)),o=e}else e&&(Pf(n,e),o={default:1});if(r)for(const a in s)!tu(a)&&o[a]==null&&delete s[a]},Qt=A0;function S0(n){return E0(n)}function E0(n,e){const t=ua();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Yn,insertStaticContent:g}=n,v=(w,D,z,K=null,j=null,Z=null,C=void 0,ce=null,re=!!D.dynamicChildren)=>{if(w===D)return;w&&!ns(w,D)&&(K=de(w),Ge(w,j,Z,!0),w=null),D.patchFlag===-2&&(re=!1,D.dynamicChildren=null);const{type:J,ref:ae,shapeFlag:y}=D;switch(J){case ga:m(w,D,z,K);break;case tn:d(w,D,z,K);break;case za:w==null&&T(D,z,K,C);break;case At:F(w,D,z,K,j,Z,C,ce,re);break;default:y&1?E(w,D,z,K,j,Z,C,ce,re):y&6?B(w,D,z,K,j,Z,C,ce,re):(y&64||y&128)&&J.process(w,D,z,K,j,Z,C,ce,re,se)}ae!=null&&j?Mr(ae,w&&w.ref,Z,D||w,!D):ae==null&&w&&w.ref!=null&&Mr(w.ref,null,Z,w,!0)},m=(w,D,z,K)=>{if(w==null)i(D.el=a(D.children),z,K);else{const j=D.el=w.el;D.children!==w.children&&c(j,D.children)}},d=(w,D,z,K)=>{w==null?i(D.el=l(D.children||""),z,K):D.el=w.el},T=(w,D,z,K)=>{[w.el,w.anchor]=g(w.children,D,z,K,w.el,w.anchor)},A=({el:w,anchor:D},z,K)=>{let j;for(;w&&w!==D;)j=f(w),i(w,z,K),w=j;i(D,z,K)},b=({el:w,anchor:D})=>{let z;for(;w&&w!==D;)z=f(w),s(w),w=z;s(D)},E=(w,D,z,K,j,Z,C,ce,re)=>{if(D.type==="svg"?C="svg":D.type==="math"&&(C="mathml"),w==null)P(D,z,K,j,Z,C,ce,re);else{const J=w.el&&w.el._isVueCE?w.el:null;try{J&&J._beginPatch(),x(w,D,j,Z,C,ce,re)}finally{J&&J._endPatch()}}},P=(w,D,z,K,j,Z,C,ce)=>{let re,J;const{props:ae,shapeFlag:y,transition:_,dirs:U}=w;if(re=w.el=o(w.type,Z,ae&&ae.is,ae),y&8?u(re,w.children):y&16&&V(w.children,re,null,K,j,ka(w,Z),C,ce),U&&Xi(w,null,K,"created"),I(re,w,w.scopeId,C,K),ae){for(const oe in ae)oe!=="value"&&!vr(oe)&&r(re,oe,null,ae[oe],Z,K);"value"in ae&&r(re,"value",null,ae.value,Z),(J=ae.onVnodeBeforeMount)&&kn(J,K,w)}U&&Xi(w,null,K,"beforeMount");const q=T0(j,_);q&&_.beforeEnter(re),i(re,D,z),((J=ae&&ae.onVnodeMounted)||q||U)&&Qt(()=>{J&&kn(J,K,w),q&&_.enter(re),U&&Xi(w,null,K,"mounted")},j)},I=(w,D,z,K,j)=>{if(z&&p(w,z),K)for(let Z=0;Z<K.length;Z++)p(w,K[Z]);if(j){let Z=j.subTree;if(D===Z||Nf(Z.type)&&(Z.ssContent===D||Z.ssFallback===D)){const C=j.vnode;I(w,C,C.scopeId,C.slotScopeIds,j.parent)}}},V=(w,D,z,K,j,Z,C,ce,re=0)=>{for(let J=re;J<w.length;J++){const ae=w[J]=ce?Ii(w[J]):Hn(w[J]);v(null,ae,D,z,K,j,Z,C,ce)}},x=(w,D,z,K,j,Z,C)=>{const ce=D.el=w.el;let{patchFlag:re,dynamicChildren:J,dirs:ae}=D;re|=w.patchFlag&16;const y=w.props||bt,_=D.props||bt;let U;if(z&&ji(z,!1),(U=_.onVnodeBeforeUpdate)&&kn(U,z,D,w),ae&&Xi(D,w,z,"beforeUpdate"),z&&ji(z,!0),(y.innerHTML&&_.innerHTML==null||y.textContent&&_.textContent==null)&&u(ce,""),J?S(w.dynamicChildren,J,ce,z,K,ka(D,j),Z):C||H(w,D,ce,null,z,K,ka(D,j),Z,!1),re>0){if(re&16)L(ce,y,_,z,j);else if(re&2&&y.class!==_.class&&r(ce,"class",null,_.class,j),re&4&&r(ce,"style",y.style,_.style,j),re&8){const q=D.dynamicProps;for(let oe=0;oe<q.length;oe++){const Y=q[oe],Pe=y[Y],_e=_[Y];(_e!==Pe||Y==="value")&&r(ce,Y,Pe,_e,j,z)}}re&1&&w.children!==D.children&&u(ce,D.children)}else!C&&J==null&&L(ce,y,_,z,j);((U=_.onVnodeUpdated)||ae)&&Qt(()=>{U&&kn(U,z,D,w),ae&&Xi(D,w,z,"updated")},K)},S=(w,D,z,K,j,Z,C)=>{for(let ce=0;ce<D.length;ce++){const re=w[ce],J=D[ce],ae=re.el&&(re.type===At||!ns(re,J)||re.shapeFlag&198)?h(re.el):z;v(re,J,ae,null,K,j,Z,C,!0)}},L=(w,D,z,K,j)=>{if(D!==z){if(D!==bt)for(const Z in D)!vr(Z)&&!(Z in z)&&r(w,Z,D[Z],null,j,K);for(const Z in z){if(vr(Z))continue;const C=z[Z],ce=D[Z];C!==ce&&Z!=="value"&&r(w,Z,ce,C,j,K)}"value"in z&&r(w,"value",D.value,z.value,j)}},F=(w,D,z,K,j,Z,C,ce,re)=>{const J=D.el=w?w.el:a(""),ae=D.anchor=w?w.anchor:a("");let{patchFlag:y,dynamicChildren:_,slotScopeIds:U}=D;U&&(ce=ce?ce.concat(U):U),w==null?(i(J,z,K),i(ae,z,K),V(D.children||[],z,ae,j,Z,C,ce,re)):y>0&&y&64&&_&&w.dynamicChildren&&w.dynamicChildren.length===_.length?(S(w.dynamicChildren,_,z,j,Z,C,ce),(D.key!=null||j&&D===j.subTree)&&iu(w,D,!0)):H(w,D,z,ae,j,Z,C,ce,re)},B=(w,D,z,K,j,Z,C,ce,re)=>{D.slotScopeIds=ce,w==null?D.shapeFlag&512?j.ctx.activate(D,z,K,C,re):te(D,z,K,j,Z,C,re):ie(w,D,re)},te=(w,D,z,K,j,Z,C)=>{const ce=w.component=N0(w,K,j);if(fa(w)&&(ce.ctx.renderer=se),U0(ce,!1,C),ce.asyncDep){if(j&&j.registerDep(ce,Q,C),!w.el){const re=ce.subTree=mt(tn);d(null,re,D,z),w.placeholder=re.el}}else Q(ce,w,D,z,j,Z,C)},ie=(w,D,z)=>{const K=D.component=w.component;if(m0(w,D,z))if(K.asyncDep&&!K.asyncResolved){W(K,D,z);return}else K.next=D,K.update();else D.el=w.el,K.vnode=D},Q=(w,D,z,K,j,Z,C)=>{const ce=()=>{if(w.isMounted){let{next:y,bu:_,u:U,parent:q,vnode:oe}=w;{const ke=Lf(w);if(ke){y&&(y.el=oe.el,W(w,y,C)),ke.asyncDep.then(()=>{w.isUnmounted||ce()});return}}let Y=y,Pe;ji(w,!1),y?(y.el=oe.el,W(w,y,C)):y=oe,_&&Ao(_),(Pe=y.props&&y.props.onVnodeBeforeUpdate)&&kn(Pe,q,y,oe),ji(w,!0);const _e=ju(w),Ie=w.subTree;w.subTree=_e,v(Ie,_e,h(Ie.el),de(Ie),w,j,Z),y.el=_e.el,Y===null&&g0(w,_e.el),U&&Qt(U,j),(Pe=y.props&&y.props.onVnodeUpdated)&&Qt(()=>kn(Pe,q,y,oe),j)}else{let y;const{el:_,props:U}=D,{bm:q,m:oe,parent:Y,root:Pe,type:_e}=w,Ie=Sr(D);ji(w,!1),q&&Ao(q),!Ie&&(y=U&&U.onVnodeBeforeMount)&&kn(y,Y,D),ji(w,!0);{Pe.ce&&Pe.ce._def.shadowRoot!==!1&&Pe.ce._injectChildStyle(_e);const ke=w.subTree=ju(w);v(null,ke,z,K,w,j,Z),D.el=ke.el}if(oe&&Qt(oe,j),!Ie&&(y=U&&U.onVnodeMounted)){const ke=D;Qt(()=>kn(y,Y,ke),j)}(D.shapeFlag&256||Y&&Sr(Y.vnode)&&Y.vnode.shapeFlag&256)&&w.a&&Qt(w.a,j),w.isMounted=!0,D=z=K=null}};w.scope.on();const re=w.effect=new Bd(ce);w.scope.off();const J=w.update=re.run.bind(re),ae=w.job=re.runIfDirty.bind(re);ae.i=w,ae.id=w.uid,re.scheduler=()=>Qc(ae),ji(w,!0),J()},W=(w,D,z)=>{D.component=w;const K=w.vnode.props;w.vnode=D,w.next=null,v0(w,D.props,K,z),M0(w,D.children,z),_i(),Uu(w),vi()},H=(w,D,z,K,j,Z,C,ce,re=!1)=>{const J=w&&w.children,ae=w?w.shapeFlag:0,y=D.children,{patchFlag:_,shapeFlag:U}=D;if(_>0){if(_&128){be(J,y,z,K,j,Z,C,ce,re);return}else if(_&256){pe(J,y,z,K,j,Z,C,ce,re);return}}U&8?(ae&16&&le(J,j,Z),y!==J&&u(z,y)):ae&16?U&16?be(J,y,z,K,j,Z,C,ce,re):le(J,j,Z,!0):(ae&8&&u(z,""),U&16&&V(y,z,K,j,Z,C,ce,re))},pe=(w,D,z,K,j,Z,C,ce,re)=>{w=w||ks,D=D||ks;const J=w.length,ae=D.length,y=Math.min(J,ae);let _;for(_=0;_<y;_++){const U=D[_]=re?Ii(D[_]):Hn(D[_]);v(w[_],U,z,null,j,Z,C,ce,re)}J>ae?le(w,j,Z,!0,!1,y):V(D,z,K,j,Z,C,ce,re,y)},be=(w,D,z,K,j,Z,C,ce,re)=>{let J=0;const ae=D.length;let y=w.length-1,_=ae-1;for(;J<=y&&J<=_;){const U=w[J],q=D[J]=re?Ii(D[J]):Hn(D[J]);if(ns(U,q))v(U,q,z,null,j,Z,C,ce,re);else break;J++}for(;J<=y&&J<=_;){const U=w[y],q=D[_]=re?Ii(D[_]):Hn(D[_]);if(ns(U,q))v(U,q,z,null,j,Z,C,ce,re);else break;y--,_--}if(J>y){if(J<=_){const U=_+1,q=U<ae?D[U].el:K;for(;J<=_;)v(null,D[J]=re?Ii(D[J]):Hn(D[J]),z,q,j,Z,C,ce,re),J++}}else if(J>_)for(;J<=y;)Ge(w[J],j,Z,!0),J++;else{const U=J,q=J,oe=new Map;for(J=q;J<=_;J++){const Ae=D[J]=re?Ii(D[J]):Hn(D[J]);Ae.key!=null&&oe.set(Ae.key,J)}let Y,Pe=0;const _e=_-q+1;let Ie=!1,ke=0;const ge=new Array(_e);for(J=0;J<_e;J++)ge[J]=0;for(J=U;J<=y;J++){const Ae=w[J];if(Pe>=_e){Ge(Ae,j,Z,!0);continue}let Ne;if(Ae.key!=null)Ne=oe.get(Ae.key);else for(Y=q;Y<=_;Y++)if(ge[Y-q]===0&&ns(Ae,D[Y])){Ne=Y;break}Ne===void 0?Ge(Ae,j,Z,!0):(ge[Ne-q]=J+1,Ne>=ke?ke=Ne:Ie=!0,v(Ae,D[Ne],z,null,j,Z,C,ce,re),Pe++)}const Se=Ie?w0(ge):ks;for(Y=Se.length-1,J=_e-1;J>=0;J--){const Ae=q+J,Ne=D[Ae],Me=D[Ae+1],et=Ae+1<ae?Me.el||If(Me):K;ge[J]===0?v(null,Ne,z,et,j,Z,C,ce,re):Ie&&(Y<0||J!==Se[Y]?we(Ne,z,et,2):Y--)}}},we=(w,D,z,K,j=null)=>{const{el:Z,type:C,transition:ce,children:re,shapeFlag:J}=w;if(J&6){we(w.component.subTree,D,z,K);return}if(J&128){w.suspense.move(D,z,K);return}if(J&64){C.move(w,D,z,se);return}if(C===At){i(Z,D,z);for(let y=0;y<re.length;y++)we(re[y],D,z,K);i(w.anchor,D,z);return}if(C===za){A(w,D,z);return}if(K!==2&&J&1&&ce)if(K===0)ce.beforeEnter(Z),i(Z,D,z),Qt(()=>ce.enter(Z),j);else{const{leave:y,delayLeave:_,afterLeave:U}=ce,q=()=>{w.ctx.isUnmounted?s(Z):i(Z,D,z)},oe=()=>{Z._isLeaving&&Z[ci](!0),y(Z,()=>{q(),U&&U()})};_?_(Z,q,oe):oe()}else i(Z,D,z)},Ge=(w,D,z,K=!1,j=!1)=>{const{type:Z,props:C,ref:ce,children:re,dynamicChildren:J,shapeFlag:ae,patchFlag:y,dirs:_,cacheIndex:U}=w;if(y===-2&&(j=!1),ce!=null&&(_i(),Mr(ce,null,z,w,!0),vi()),U!=null&&(D.renderCache[U]=void 0),ae&256){D.ctx.deactivate(w);return}const q=ae&1&&_,oe=!Sr(w);let Y;if(oe&&(Y=C&&C.onVnodeBeforeUnmount)&&kn(Y,D,w),ae&6)ht(w.component,z,K);else{if(ae&128){w.suspense.unmount(z,K);return}q&&Xi(w,null,D,"beforeUnmount"),ae&64?w.type.remove(w,D,z,se,K):J&&!J.hasOnce&&(Z!==At||y>0&&y&64)?le(J,D,z,!1,!0):(Z===At&&y&384||!j&&ae&16)&&le(re,D,z),K&&Ke(w)}(oe&&(Y=C&&C.onVnodeUnmounted)||q)&&Qt(()=>{Y&&kn(Y,D,w),q&&Xi(w,null,D,"unmounted")},z)},Ke=w=>{const{type:D,el:z,anchor:K,transition:j}=w;if(D===At){gt(z,K);return}if(D===za){b(w);return}const Z=()=>{s(z),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(w.shapeFlag&1&&j&&!j.persisted){const{leave:C,delayLeave:ce}=j,re=()=>C(z,Z);ce?ce(w.el,Z,re):re()}else Z()},gt=(w,D)=>{let z;for(;w!==D;)z=f(w),s(w),w=z;s(D)},ht=(w,D,z)=>{const{bum:K,scope:j,job:Z,subTree:C,um:ce,m:re,a:J}=w;qu(re),qu(J),K&&Ao(K),j.stop(),Z&&(Z.flags|=8,Ge(C,w,D,z)),ce&&Qt(ce,D),Qt(()=>{w.isUnmounted=!0},D)},le=(w,D,z,K=!1,j=!1,Z=0)=>{for(let C=Z;C<w.length;C++)Ge(w[C],D,z,K,j)},de=w=>{if(w.shapeFlag&6)return de(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const D=f(w.anchor||w.el),z=D&&D[lf];return z?f(z):D};let Ue=!1;const fe=(w,D,z)=>{let K;w==null?D._vnode&&(Ge(D._vnode,null,null,!0),K=D._vnode.component):v(D._vnode||null,w,D,null,null,null,z),D._vnode=w,Ue||(Ue=!0,Uu(K),nf(),Ue=!1)},se={p:v,um:Ge,m:we,r:Ke,mt:te,mc:V,pc:H,pbc:S,n:de,o:n};return{render:fe,hydrate:void 0,createApp:c0(fe)}}function ka({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ji({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function T0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function iu(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ii(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&iu(o,a)),a.type===ga&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(n.type===At?1:0)),a.type===tn&&!a.el&&(a.el=o.el)}}function w0(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Lf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lf(e)}function qu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function If(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?If(e.subTree):null}const Nf=n=>n.__isSuspense;function A0(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):Im(n)}const At=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),Tr=[];let vn=null;function ue(n=!1){Tr.push(vn=n?null:[])}function C0(){Tr.pop(),vn=Tr[Tr.length-1]||null}let Ir=1;function $o(n,e=!1){Ir+=n,n<0&&vn&&e&&(vn.hasOnce=!0)}function Uf(n){return n.dynamicChildren=Ir>0?vn||ks:null,C0(),Ir>0&&vn&&vn.push(n),n}function me(n,e,t,i,s,r){return Uf(R(n,e,t,i,s,r,!0))}function Ln(n,e,t,i,s){return Uf(mt(n,e,t,i,s,!0))}function Yo(n){return n?n.__v_isVNode===!0:!1}function ns(n,e){return n.type===e.type&&n.key===e.key}const Ff=({key:n})=>n??null,Po=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Dt(n)||It(n)||Qe(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function R(n,e=null,t=null,i=0,s=null,r=n===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ff(e),ref:e&&Po(e),scopeId:rf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return a?(su(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Dt(t)?8:16),Ir>0&&!o&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const mt=R0;function R0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===e0)&&(n=tn),Yo(n)){const a=ki(n,e,!0);return t&&su(a,t),Ir>0&&!r&&vn&&(a.shapeFlag&6?vn[vn.indexOf(n)]=a:vn.push(a)),a.patchFlag=-2,a}if(z0(n)&&(n=n.__vccOpts),e){e=P0(e);let{class:a,style:l}=e;a&&!Dt(a)&&(e.class=X(a)),wt(l)&&(Zc(l)&&!$e(l)&&(l=Ft({},l)),e.style=Ui(l))}const o=Dt(n)?1:Nf(n)?128:cf(n)?64:wt(n)?4:Qe(n)?2:0;return R(n,e,t,i,s,o,r,!0)}function P0(n){return n?Zc(n)||wf(n)?Ft({},n):n:null}function ki(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?D0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ff(c),ref:e&&e.ref?t&&r?$e(r)?r.concat(Po(e)):[r,Po(e)]:Po(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==At?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ki(n.ssContent),ssFallback:n.ssFallback&&ki(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Lr(u,l.clone(u)),u}function Un(n=" ",e=0){return mt(ga,null,n,e)}function rt(n="",e=!1){return e?(ue(),Ln(tn,null,n)):mt(tn,null,n)}function Hn(n){return n==null||typeof n=="boolean"?mt(tn):$e(n)?mt(At,null,n.slice()):Yo(n)?Ii(n):mt(ga,null,String(n))}function Ii(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ki(n)}function su(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),su(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!wf(e)?e._ctx=_n:s===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[Un(e)]):t=8);n.children=e,n.shapeFlag|=t}function D0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=X([e.class,i.class]));else if(s==="style")e.style=Ui([e.style,i.style]);else if(oa(s)){const r=e[s],o=i[s];o&&r!==o&&!($e(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function kn(n,e,t,i=null){On(n,e,7,[t,i])}const L0=Mf();let I0=0;function N0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||L0,r={uid:I0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cf(i,s),emitsOptions:Sf(i,s),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=h0.bind(null,r),n.ce&&n.ce(r),r}let jt=null;const Of=()=>jt||_n;let qo,zl;{const n=ua(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};qo=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),zl=e("__VUE_SSR_SETTERS__",t=>Nr=t)}const Vr=n=>{const e=jt;return qo(n),n.scope.on(),()=>{n.scope.off(),qo(e)}},Ku=()=>{jt&&jt.scope.off(),qo(null)};function Bf(n){return n.vnode.shapeFlag&4}let Nr=!1;function U0(n,e=!1,t=!1){e&&zl(e);const{props:i,children:s}=n.vnode,r=Bf(n);_0(n,i,r,e),b0(n,s,t||e);const o=r?F0(n,e):void 0;return e&&zl(!1),o}function F0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,n0);const{setup:i}=t;if(i){_i();const s=n.setupContext=i.length>1?B0(n):null,r=Vr(n),o=zr(i,n,0,[n.props,s]),a=Dd(o);if(vi(),r(),(a||n.sp)&&!Sr(n)&&_f(n),a){if(o.then(Ku,Ku),e)return o.then(l=>{Ju(n,l)}).catch(l=>{da(l,n,0)});n.asyncDep=o}else Ju(n,o)}else kf(n)}function Ju(n,e,t){Qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:wt(e)&&(n.setupState=Zd(e)),kf(n)}function kf(n,e,t){const i=n.type;n.render||(n.render=i.render||Yn);{const s=Vr(n);_i();try{i0(n)}finally{vi(),s()}}}const O0={get(n,e){return Xt(n,"get",""),n[e]}};function B0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,O0),slots:n.slots,emit:n.emit,expose:e}}function _a(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Zd(Sm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Er)return Er[t](n)},has(e,t){return t in e||t in Er}})):n.proxy}function k0(n,e=!0){return Qe(n)?n.displayName||n.name:n.name||e&&n.__name}function z0(n){return Qe(n)&&"__vccOpts"in n}const Xe=(n,e)=>Cm(n,e,Nr);function V0(n,e,t){try{$o(-1);const i=arguments.length;return i===2?wt(e)&&!$e(e)?Yo(e)?mt(n,null,[e]):mt(n,e):mt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Yo(t)&&(t=[t]),mt(n,e,t))}finally{$o(1)}}const H0="3.5.27";let Vl;const Zu=typeof window<"u"&&window.trustedTypes;if(Zu)try{Vl=Zu.createPolicy("vue",{createHTML:n=>n})}catch{}const zf=Vl?n=>Vl.createHTML(n):n=>n,G0="http://www.w3.org/2000/svg",W0="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,Qu=li&&li.createElement("template"),X0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?li.createElementNS(G0,n):e==="mathml"?li.createElementNS(W0,n):t?li.createElement(n,{is:t}):li.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>li.createTextNode(n),createComment:n=>li.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>li.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Qu.innerHTML=zf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ei="transition",rr="animation",Ur=Symbol("_vtc"),Vf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},j0=Ft({},df,Vf),$0=n=>(n.displayName="Transition",n.props=j0,n),wr=$0((n,{slots:e})=>V0(Vm,Y0(n),e)),$i=(n,e=[])=>{$e(n)?n.forEach(t=>t(...e)):n&&n(...e)},eh=n=>n?$e(n)?n.some(e=>e.length>1):n.length>1:!1;function Y0(n){const e={};for(const F in n)F in Vf||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=q0(s),v=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:T,onEnterCancelled:A,onLeave:b,onLeaveCancelled:E,onBeforeAppear:P=d,onAppear:I=T,onAppearCancelled:V=A}=e,x=(F,B,te,ie)=>{F._enterCancelled=ie,Yi(F,B?u:a),Yi(F,B?c:o),te&&te()},S=(F,B)=>{F._isLeaving=!1,Yi(F,h),Yi(F,p),Yi(F,f),B&&B()},L=F=>(B,te)=>{const ie=F?I:T,Q=()=>x(B,F,te);$i(ie,[B,Q]),th(()=>{Yi(B,F?l:r),ni(B,F?u:a),eh(ie)||nh(B,i,v,Q)})};return Ft(e,{onBeforeEnter(F){$i(d,[F]),ni(F,r),ni(F,o)},onBeforeAppear(F){$i(P,[F]),ni(F,l),ni(F,c)},onEnter:L(!1),onAppear:L(!0),onLeave(F,B){F._isLeaving=!0;const te=()=>S(F,B);ni(F,h),F._enterCancelled?(ni(F,f),rh(F)):(rh(F),ni(F,f)),th(()=>{F._isLeaving&&(Yi(F,h),ni(F,p),eh(b)||nh(F,i,m,te))}),$i(b,[F,te])},onEnterCancelled(F){x(F,!1,void 0,!0),$i(A,[F])},onAppearCancelled(F){x(F,!0,void 0,!0),$i(V,[F])},onLeaveCancelled(F){S(F),$i(E,[F])}})}function q0(n){if(n==null)return null;if(wt(n))return[Va(n.enter),Va(n.leave)];{const e=Va(n);return[e,e]}}function Va(n){return qp(n)}function ni(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ur]||(n[Ur]=new Set)).add(e)}function Yi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ur];t&&(t.delete(e),t.size||(n[Ur]=void 0))}function th(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let K0=0;function nh(n,e,t,i){const s=n._endId=++K0,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=J0(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=p=>{p.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function J0(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${Ei}Delay`),r=i(`${Ei}Duration`),o=ih(s,r),a=i(`${rr}Delay`),l=i(`${rr}Duration`),c=ih(a,l);let u=null,h=0,f=0;e===Ei?o>0&&(u=Ei,h=o,f=r.length):e===rr?c>0&&(u=rr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Ei:rr:null,f=u?u===Ei?r.length:l.length:0);const p=u===Ei&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ei}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function ih(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>sh(t)+sh(n[i])))}function sh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function rh(n){return(n?n.ownerDocument:document).body.offsetHeight}function Z0(n,e,t){const i=n[Ur];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const oh=Symbol("_vod"),Q0=Symbol("_vsh"),eg=Symbol(""),tg=/(?:^|;)\s*display\s*:/;function ng(n,e,t){const i=n.style,s=Dt(t);let r=!1;if(t&&!s){if(e)if(Dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Do(i,a,"")}else for(const o in e)t[o]==null&&Do(i,o,"");for(const o in t)o==="display"&&(r=!0),Do(i,o,t[o])}else if(s){if(e!==t){const o=i[eg];o&&(t+=";"+o),i.cssText=t,r=tg.test(t)}}else e&&n.removeAttribute("style");oh in n&&(n[oh]=r?i.display:"",n[Q0]&&(i.display="none"))}const ah=/\s*!important$/;function Do(n,e,t){if($e(t))t.forEach(i=>Do(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ig(n,e);ah.test(t)?n.setProperty(Hi(i),t.replace(ah,""),"important"):n[i]=t}}const lh=["Webkit","Moz","ms"],Ha={};function ig(n,e){const t=Ha[e];if(t)return t;let i=Cn(e);if(i!=="filter"&&i in n)return Ha[e]=i;i=ca(i);for(let s=0;s<lh.length;s++){const r=lh[s]+i;if(r in n)return Ha[e]=r}return e}const ch="http://www.w3.org/1999/xlink";function uh(n,e,t,i,s,r=tm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ch,e.slice(6,e.length)):n.setAttributeNS(ch,e,t):t==null||r&&!Ud(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Vi(t)?String(t):t)}function hh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?zf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Ud(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Os(n,e,t,i){n.addEventListener(e,t,i)}function sg(n,e,t,i){n.removeEventListener(e,t,i)}const dh=Symbol("_vei");function rg(n,e,t,i,s=null){const r=n[dh]||(n[dh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=og(e);if(i){const c=r[e]=cg(i,s);Os(n,a,c,l)}else o&&(sg(n,a,o,l),r[e]=void 0)}}const fh=/(?:Once|Passive|Capture)$/;function og(n){let e;if(fh.test(n)){e={};let i;for(;i=n.match(fh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Hi(n.slice(2)),e]}let Ga=0;const ag=Promise.resolve(),lg=()=>Ga||(ag.then(()=>Ga=0),Ga=Date.now());function cg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;On(ug(i,t.value),e,5,[i])};return t.value=n,t.attached=lg(),t}function ug(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ph=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,hg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Z0(n,i,o):e==="style"?ng(n,t,i):oa(e)?Vc(e)||rg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dg(n,e,i,o))?(hh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&uh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Dt(i))?hh(n,Cn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),uh(n,e,i,o))};function dg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ph(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ph(e)&&Dt(t)?!1:e in n}const mh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>Ao(e,t):e};function fg(n){n.target.composing=!0}function gh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wa=Symbol("_assign");function _h(n,e,t){return e&&(n=n.trim()),t&&(n=Wc(n)),n}const Ko={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Wa]=mh(s);const r=i||s.props&&s.props.type==="number";Os(n,e?"change":"input",o=>{o.target.composing||n[Wa](_h(n.value,t,r))}),(t||r)&&Os(n,"change",()=>{n.value=_h(n.value,t,r)}),e||(Os(n,"compositionstart",fg),Os(n,"compositionend",gh),Os(n,"change",gh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Wa]=mh(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Wc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},pg=["ctrl","shift","alt","meta"],mg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>pg.some(t=>n[`${t}Key`]&&!e.includes(t))},Jo=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=mg[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},gg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zo=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Hi(s.key);if(e.some(o=>o===r||gg[o]===r))return n(s)}))},_g=Ft({patchProp:hg},X0);let vh;function vg(){return vh||(vh=S0(_g))}const xg=((...n)=>{const e=vg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=bg(i);if(!s)return;const r=e._component;!Qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,yg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function yg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bg(n){return Dt(n)?document.querySelector(n):n}const Lo={light:{name:"light",label:"Claro",icon:"☀️",colors:{bgPrimary:"from-slate-50 via-primary-50/30 to-slate-100",bgSecondary:"bg-white/80",bgTertiary:"bg-slate-50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-soft-lg",textPrimary:"text-gray-900",textSecondary:"text-gray-700",textMuted:"text-gray-500",accent:"bg-primary-600",accentHover:"hover:bg-primary-700",accentLight:"bg-primary-100",success:"text-emerald-700",successLight:"bg-emerald-50 border-emerald-200",error:"text-red-700",errorLight:"bg-red-50 border-red-200",border:"border-gray-200",borderHover:"hover:border-gray-300",jsonString:"text-emerald-600",jsonNumber:"text-blue-600",jsonBoolean:"text-violet-600",jsonNull:"text-gray-500",jsonObject:"text-orange-600",jsonArray:"text-cyan-600",syntaxColors:{key:"#166534",string:"#16a34a",number:"#1d4ed8",boolean:"#6d28d9",null:"#6b7280",punctuation:"#9ca3af"},shadow:"shadow-soft",shadowLg:"shadow-soft-lg"}},dark:{name:"dark",label:"Oscuro",icon:"🌙",colors:{bgPrimary:"from-gray-900 via-gray-900 to-gray-950",bgSecondary:"bg-gray-800/90",bgTertiary:"bg-gray-900",bgCard:"bg-gray-800/90 backdrop-blur-sm",bgCardHover:"hover:bg-gray-800",textPrimary:"text-gray-100",textSecondary:"text-gray-300",textMuted:"text-gray-500",accent:"bg-primary-500",accentHover:"hover:bg-primary-400",accentLight:"bg-primary-900/50",success:"text-emerald-400",successLight:"bg-emerald-900/30 border-emerald-800",error:"text-red-400",errorLight:"bg-red-900/30 border-red-800",border:"border-gray-700",borderHover:"hover:border-gray-600",jsonString:"text-emerald-400",jsonNumber:"text-blue-400",jsonBoolean:"text-violet-400",jsonNull:"text-gray-500",jsonObject:"text-orange-400",jsonArray:"text-cyan-400",syntaxColors:{key:"#6ee7b7",string:"#34d399",number:"#60a5fa",boolean:"#a78bfa",null:"#6b7280",punctuation:"#4b5563"},shadow:"shadow-xl shadow-black/20",shadowLg:"shadow-2xl shadow-black/30"}},midnight:{name:"midnight",label:"Medianoche",icon:"🌌",colors:{bgPrimary:"from-slate-950 via-indigo-950 to-slate-950",bgSecondary:"bg-slate-900/90",bgTertiary:"bg-slate-950",bgCard:"bg-slate-900/80 backdrop-blur-sm",bgCardHover:"hover:bg-slate-800/80",textPrimary:"text-slate-100",textSecondary:"text-slate-300",textMuted:"text-slate-500",accent:"bg-indigo-500",accentHover:"hover:bg-indigo-400",accentLight:"bg-indigo-900/50",success:"text-teal-400",successLight:"bg-teal-900/30 border-teal-800",error:"text-rose-400",errorLight:"bg-rose-900/30 border-rose-800",border:"border-slate-700",borderHover:"hover:border-slate-600",jsonString:"text-teal-400",jsonNumber:"text-indigo-400",jsonBoolean:"text-purple-400",jsonNull:"text-slate-500",jsonObject:"text-amber-400",jsonArray:"text-sky-400",syntaxColors:{key:"#99f6e4",string:"#5eead4",number:"#818cf8",boolean:"#c084fc",null:"#64748b",punctuation:"#475569"},shadow:"shadow-xl shadow-indigo-950/50",shadowLg:"shadow-2xl shadow-indigo-950/60"}},forest:{name:"forest",label:"Bosque",icon:"🌲",colors:{bgPrimary:"from-emerald-50 via-green-50 to-teal-50",bgSecondary:"bg-white/80",bgTertiary:"bg-emerald-50/50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-lg hover:shadow-emerald-100",textPrimary:"text-emerald-950",textSecondary:"text-emerald-800",textMuted:"text-emerald-600",accent:"bg-emerald-600",accentHover:"hover:bg-emerald-700",accentLight:"bg-emerald-100",success:"text-green-700",successLight:"bg-green-50 border-green-200",error:"text-red-700",errorLight:"bg-red-50 border-red-200",border:"border-emerald-200",borderHover:"hover:border-emerald-300",jsonString:"text-green-600",jsonNumber:"text-teal-600",jsonBoolean:"text-lime-600",jsonNull:"text-emerald-400",jsonObject:"text-amber-600",jsonArray:"text-cyan-600",syntaxColors:{key:"#14532d",string:"#166534",number:"#134e4a",boolean:"#3f6212",null:"#6b7280",punctuation:"#6b7280"},shadow:"shadow-lg shadow-emerald-100",shadowLg:"shadow-xl shadow-emerald-200"}},sunset:{name:"sunset",label:"Atardecer",icon:"🌅",colors:{bgPrimary:"from-orange-50 via-rose-50 to-purple-50",bgSecondary:"bg-white/80",bgTertiary:"bg-orange-50/50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-lg hover:shadow-orange-100",textPrimary:"text-gray-900",textSecondary:"text-gray-700",textMuted:"text-gray-500",accent:"bg-orange-500",accentHover:"hover:bg-orange-600",accentLight:"bg-orange-100",success:"text-emerald-700",successLight:"bg-emerald-50 border-emerald-200",error:"text-rose-700",errorLight:"bg-rose-50 border-rose-200",border:"border-orange-200",borderHover:"hover:border-orange-300",jsonString:"text-rose-600",jsonNumber:"text-orange-600",jsonBoolean:"text-purple-600",jsonNull:"text-gray-500",jsonObject:"text-amber-600",jsonArray:"text-pink-600",syntaxColors:{key:"#881337",string:"#be123c",number:"#9a3412",boolean:"#6b21a8",null:"#6b7280",punctuation:"#9ca3af"},shadow:"shadow-lg shadow-orange-100",shadowLg:"shadow-xl shadow-orange-200"}}},Hf="json-visualizer-theme";function Mg(){if(typeof window>"u")return"light";const n=localStorage.getItem(Hf);return n&&n in Lo?n:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const gs=We(Mg());function Mi(){const n=Xe(()=>Lo[gs.value]),e=Xe(()=>Object.values(Lo));function t(s){gs.value=s,localStorage.setItem(Hf,s),s==="dark"||s==="midnight"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function i(){const s=Object.keys(Lo),o=(s.indexOf(gs.value)+1)%s.length,a=s[o];a&&t(a)}return typeof window<"u"&&(gs.value==="dark"||gs.value==="midnight")&&document.documentElement.classList.add("dark"),{currentTheme:n,currentThemeName:gs,allThemes:e,setTheme:t,cycleTheme:i}}const Sg=["aria-expanded"],Eg={class:"text-lg","aria-hidden":"true"},Tg={class:"text-sm font-medium hidden sm:inline"},wg={class:"p-1.5"},Ag=["onClick","aria-selected"],Cg={class:"text-xl flex-shrink-0","aria-hidden":"true"},Rg={class:"flex-1 font-medium text-sm"},Gf=Mn({__name:"ThemeSelector",setup(n){const{currentTheme:e,allThemes:t,setTheme:i}=Mi(),s=We(!1),r=We(null);function o(){s.value=!s.value}function a(u){i(u),s.value=!1}function l(u){r.value&&!r.value.contains(u.target)&&(s.value=!1)}function c(u){u.key==="Escape"&&(s.value=!1)}return er(()=>{document.addEventListener("click",l),document.addEventListener("keydown",c)}),tr(()=>{document.removeEventListener("click",l),document.removeEventListener("keydown",c)}),(u,h)=>(ue(),me("div",{ref_key:"selectorRef",ref:r,class:"theme-selector relative"},[R("button",{onClick:o,class:X(["inline-flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",[N(e).name==="dark"||N(e).name==="midnight"?"bg-slate-800 text-slate-200 hover:bg-slate-700 focus:ring-slate-500":"bg-white/80 text-gray-700 hover:bg-white hover:shadow-md focus:ring-primary-500 shadow-soft"]]),"aria-expanded":s.value,"aria-haspopup":"listbox","aria-label":"Seleccionar tema",title:"Cambiar tema de color"},[R("span",Eg,qe(N(e).icon),1),R("span",Tg,qe(N(e).label),1),(ue(),me("svg",{class:X(["w-4 h-4 transition-transform duration-200",{"rotate-180":s.value}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...h[0]||(h[0]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],10,Sg),mt(wr,{"enter-active-class":"transition-all duration-200 ease-out","enter-from-class":"opacity-0 scale-95 -translate-y-2","enter-to-class":"opacity-100 scale-100 translate-y-0","leave-active-class":"transition-all duration-150 ease-in","leave-from-class":"opacity-100 scale-100 translate-y-0","leave-to-class":"opacity-0 scale-95 -translate-y-2"},{default:Hs(()=>[s.value?(ue(),me("div",{key:0,class:X(["absolute right-0 mt-2 w-48 rounded-xl overflow-hidden z-50",[N(e).name==="dark"||N(e).name==="midnight"?"bg-slate-800 ring-1 ring-white/10 shadow-2xl":"bg-white ring-1 ring-black/5 shadow-xl"]]),role:"listbox","aria-label":"Temas disponibles"},[R("div",wg,[(ue(!0),me(At,null,qn(N(t),f=>(ue(),me("button",{key:f.name,onClick:p=>a(f.name),class:X(["w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 text-left",[f.name===N(e).name?N(e).name==="dark"||N(e).name==="midnight"?"bg-slate-700 text-white":"bg-primary-50 text-primary-700":N(e).name==="dark"||N(e).name==="midnight"?"text-slate-300 hover:bg-slate-700 hover:text-white":"text-gray-700 hover:bg-gray-50"]]),role:"option","aria-selected":f.name===N(e).name},[R("span",Cg,qe(f.icon),1),R("span",Rg,qe(f.label),1),f.name===N(e).name?(ue(),me("svg",{key:0,class:X(["w-4 h-4 flex-shrink-0",[N(e).name==="dark"||N(e).name==="midnight"?"text-primary-400":"text-primary-600"]]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...h[1]||(h[1]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])],2)):rt("",!0)],10,Ag))),128))]),R("div",{class:X(["px-3 py-2 text-xs border-t",[N(e).name==="dark"||N(e).name==="midnight"?"border-slate-700 text-slate-500":"border-gray-100 text-gray-400"]])}," El tema se guarda automáticamente ",2)],2)):rt("",!0)]),_:1})],512))}}),Pg=[{id:"json-viewer",name:"JSON Viewer",description:"Visualize, format, and explore JSON data structures with an interactive tree view and 3D graph.",icon:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",iconViewBox:"0 0 24 24",status:"active",tags:["data","format","json"]},{id:"text-compare",name:"Text Compare",description:"Compare two texts side-by-side with line and character-level diff highlighting.",icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",iconViewBox:"0 0 24 24",status:"active",tags:["diff","text","compare"]},{id:"base64",name:"Base64",description:"Encode and decode text or files to/from Base64 with LF/CRLF line ending control.",icon:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",iconViewBox:"0 0 24 24",status:"active",tags:["encoding","base64","files"]},{id:"regex-tester",name:"Regex Tester",description:"Test and debug regular expressions with live match highlighting and group capture display.",icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",iconViewBox:"0 0 24 24",status:"coming-soon",tags:["regex","text"]},{id:"color-palette",name:"Color Palette",description:"Convert between HEX, RGB, and HSL color formats and build accessible color palettes.",icon:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",iconViewBox:"0 0 24 24",status:"active",tags:["design","color","converter"]}],Dg={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},Lg={class:"mb-8 md:mb-12"},Ig={class:"flex items-center justify-between"},Ng={class:"flex-1 text-center"},Ug={class:"inline-flex items-center gap-3 mb-2"},Fg={class:"flex justify-end w-32"},Og={class:"flex-1 overflow-y-auto"},Bg={class:"mb-4"},kg={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},zg=["title","role","tabindex","onClick","onKeydown"],Vg={class:"flex items-start justify-between"},Hg=["viewBox"],Gg=["d"],Wg={class:"flex-1"},Xg={class:"flex items-center justify-between"},jg={class:"flex flex-wrap gap-1"},$g={class:"mt-6 text-center"},Yg=Mn({__name:"HomeView",emits:["select-tool"],setup(n,{emit:e}){const t=e,{currentTheme:i}=Mi(),s=Xe(()=>i.value.name==="dark"||i.value.name==="midnight");function r(o){o.status==="active"&&t("select-tool",o.id)}return(o,a)=>(ue(),me("div",Dg,[R("header",Lg,[R("div",Ig,[a[1]||(a[1]=R("div",{class:"w-32 hidden sm:block"},null,-1)),R("div",Ng,[R("div",Ug,[R("div",{class:X(["w-11 h-11 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300",[s.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"]])},[...a[0]||(a[0]=[R("svg",{class:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})],-1)])],2),R("h1",{class:X(["text-3xl md:text-4xl font-bold bg-clip-text text-transparent transition-colors duration-300",[s.value?"bg-gradient-to-r from-white via-gray-200 to-white":"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"]])}," lit-code ",2)]),R("p",{class:X(["text-sm md:text-base font-medium transition-colors duration-300",N(i).colors.textMuted])}," A collection of developer tools ",2)]),R("div",Fg,[mt(Gf)])])]),R("main",Og,[R("div",Bg,[R("h2",{class:X(["text-xs font-semibold uppercase tracking-widest transition-colors duration-300",N(i).colors.textMuted])}," Developer Tools ",2)]),R("div",kg,[(ue(!0),me(At,null,qn(N(Pg),l=>(ue(),me("div",{key:l.id,class:X(["rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200",[N(i).colors.bgCard,N(i).colors.shadow,s.value?"ring-1 ring-white/10":"border border-white/50",l.status==="active"?[N(i).colors.bgCardHover,"cursor-pointer hover:ring-2 hover:ring-primary-500/60 hover:scale-[1.01]"]:"opacity-60 cursor-not-allowed"]]),title:l.status==="coming-soon"?"Coming soon":void 0,role:l.status==="active"?"button":void 0,tabindex:l.status==="active"?0:void 0,onClick:c=>r(l),onKeydown:[Zo(c=>r(l),["enter"]),Zo(Jo(c=>r(l),["prevent"]),["space"])]},[R("div",Vg,[R("div",{class:X(["w-11 h-11 rounded-xl flex items-center justify-center shadow-md transition-colors duration-300 flex-shrink-0",[s.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"]])},[(ue(),me("svg",{class:"w-5 h-5 text-white",fill:"none",viewBox:l.iconViewBox,stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:l.icon},null,8,Gg)],8,Hg))],2),l.status==="coming-soon"?(ue(),me("span",{key:0,class:X(["text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full",s.value?"bg-white/10 text-gray-400":"bg-gray-100 text-gray-500"])}," Coming soon ",2)):rt("",!0)]),R("div",Wg,[R("h3",{class:X(["font-semibold text-base mb-1 transition-colors duration-300",N(i).colors.textPrimary])},qe(l.name),3),R("p",{class:X(["text-xs leading-relaxed transition-colors duration-300",N(i).colors.textMuted])},qe(l.description),3)]),R("div",Xg,[R("div",jg,[(ue(!0),me(At,null,qn(l.tags,c=>(ue(),me("span",{key:c,class:X(["text-[10px] font-medium px-1.5 py-0.5 rounded transition-colors duration-300",s.value?"bg-white/10 text-gray-400":"bg-gray-100 text-gray-500"])},qe(c),3))),128))]),l.status==="active"?(ue(),me("svg",{key:0,class:X(["w-4 h-4 flex-shrink-0 transition-colors duration-300",N(i).colors.textMuted]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...a[2]||(a[2]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1)])],2)):rt("",!0)])],42,zg))),128))])]),R("footer",$g,[R("p",{class:X(["text-xs transition-colors duration-300",N(i).colors.textMuted])}," Select a tool to get started ",2)])]))}});function Wf(n=""){const e=We(n),t=We(null),i=We(null),s=Xe(()=>!t.value&&e.value.trim()!==""),r=Xe(()=>t.value!==null),o=Xe(()=>e.value.trim()!=="");function a(){try{if(!o.value){t.value=null,i.value=null;return}i.value=JSON.parse(e.value),t.value=null}catch(f){t.value=f.message,i.value=null}}function l(){try{if(!o.value)return;const f=JSON.parse(e.value);e.value=JSON.stringify(f,null,2),t.value=null,i.value=f}catch(f){t.value=f.message}}function c(){!o.value||!s.value||(e.value=JSON.stringify(JSON.parse(e.value)))}function u(){e.value="",t.value=null,i.value=null}function h(f){e.value=f}return mi(e,a,{immediate:!0}),{jsonText:e,errorMessage:t,parsedData:i,isValid:s,hasError:r,hasContent:o,formatJson:l,compactJson:c,clearJson:u,setJsonText:h}}function Xa(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qg(n,e){const t=/("(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|[{}[\],:])/g,{syntaxColors:i}=e.colors;let s="",r=0,o;for(;(o=t.exec(n))!==null;){const a=o[0];s+=Xa(n.slice(r,o.index));let l,c="400";a.startsWith('"')&&a.endsWith(":")?(l=i.key,c="600"):a.startsWith('"')?l=i.string:a==="true"||a==="false"?l=i.boolean:a==="null"?l=i.null:/^-?\d/.test(a)?l=i.number:l=i.punctuation,s+=`<span style="color:${l};font-weight:${c}">${Xa(a)}</span>`,r=o.index+a.length}return s+=Xa(n.slice(r)),s}function Kg(n,e){return{highlightedHtml:Xe(()=>{const i=n();return i.trim()?qg(i,e()):""})}}const Jg={class:"flex items-center justify-between mb-4"},Zg={class:"flex items-center gap-2"},Qg={class:"flex items-center gap-1.5"},e_=["disabled"],t_=["disabled"],n_=["disabled"],i_=["title","aria-label"],s_={key:0,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},r_={key:1,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},o_={class:"relative flex-1 overflow-hidden"},a_=["innerHTML"],l_={class:"mt-3 min-h-[2rem]"},c_={class:"flex-1 min-w-0"},u_=Mn({__name:"JsonInput",props:{modelValue:{},theme:{}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,s=Xe(()=>t.theme.name==="dark"||t.theme.name==="midnight"),{jsonText:r,errorMessage:o,isValid:a,hasContent:l,formatJson:c,compactJson:u,clearJson:h,setJsonText:f}=Wf(t.modelValue),{highlightedHtml:p}=Kg(()=>r.value,()=>t.theme),g=We(null),v=We(null),m=We(null),d=We(!1),T=Xe(()=>{const S=r.value.split(`
`);return Array.from({length:S.length},(L,F)=>F+1)});mi(r,S=>{i("update:modelValue",S)});function A(){g.value&&v.value&&(g.value.scrollTop=v.value.scrollTop),m.value&&v.value&&(m.value.scrollTop=v.value.scrollTop,m.value.scrollLeft=v.value.scrollLeft)}function b(){setTimeout(()=>{try{if(r.value.trim()){const S=JSON.parse(r.value);r.value=JSON.stringify(S,null,2)}}catch{}},0)}function E(){f(JSON.stringify({name:"John Doe",age:30,email:"john@example.com",address:{street:"123 Main St",city:"New York",country:"USA"},hobbies:["reading","coding","gaming"],isActive:!0},null,2))}async function P(){r.value&&await navigator.clipboard.writeText(r.value)}const I=We(!1);function V(){I.value=!I.value}function x(S){S.key==="Escape"&&I.value&&(I.value=!1)}return er(()=>window.addEventListener("keydown",x)),tr(()=>window.removeEventListener("keydown",x)),(S,L)=>(ue(),Ln(eu,{to:"body",disabled:!I.value},[R("div",{class:X(I.value?"fixed inset-0 z-50 flex flex-col p-4 md:p-6":"flex flex-col h-full")},[I.value?(ue(),me("div",{key:0,class:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:L[0]||(L[0]=F=>I.value=!1)})):rt("",!0),R("div",{class:X(I.value?["relative z-10 flex-1 flex flex-col min-h-0 rounded-2xl p-4 md:p-6 overflow-hidden",n.theme.colors.bgCard,n.theme.colors.shadow]:"flex flex-col h-full")},[R("div",Jg,[R("div",Zg,[R("div",{class:X(["w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",s.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"])},[...L[7]||(L[7]=[R("svg",{class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)])],2),R("h2",{class:X(["text-lg font-semibold transition-colors duration-300",n.theme.colors.textPrimary])},"Entrada",2)]),R("div",Qg,[R("button",{onClick:E,class:X(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Cargar datos de ejemplo","aria-label":"Cargar datos de ejemplo"},[...L[8]||(L[8]=[R("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})],-1),R("span",{class:"hidden sm:inline"},"Ejemplo",-1)])],2),N(l)?(ue(),me("button",{key:0,onClick:P,class:X(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Copiar al portapapeles","aria-label":"Copiar JSON al portapapeles"},[...L[9]||(L[9]=[R("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1)])],2)):rt("",!0),R("button",{onClick:L[1]||(L[1]=(...F)=>N(c)&&N(c)(...F)),disabled:!N(l),class:X(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",[n.theme.colors.accent,n.theme.colors.accentHover,"focus:ring-primary-500"]]),title:"Formatear JSON","aria-label":"Formatear JSON"},[...L[10]||(L[10]=[R("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1),R("span",{class:"hidden sm:inline"},"Formatear",-1)])],10,e_),R("button",{onClick:L[2]||(L[2]=(...F)=>N(u)&&N(u)(...F)),disabled:!N(l)||!N(a),class:X(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Compactar JSON","aria-label":"Compactar JSON"},[...L[11]||(L[11]=[R("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"})],-1),R("span",{class:"hidden sm:inline"},"Compacto",-1)])],10,t_),R("button",{onClick:L[3]||(L[3]=(...F)=>N(h)&&N(h)(...F)),disabled:!N(l),class:X(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",s.value?"text-red-400 bg-red-900/30 hover:bg-red-900/50 focus:ring-red-500":"text-red-600 bg-red-50 hover:bg-red-100 focus:ring-red-300"]),title:"Limpiar contenido","aria-label":"Limpiar contenido"},[...L[12]||(L[12]=[R("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)])],10,n_),R("button",{onClick:V,class:X(["inline-flex items-center p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:I.value?"Salir de pantalla completa":"Pantalla completa","aria-label":I.value?"Salir de pantalla completa":"Pantalla completa"},[I.value?(ue(),me("svg",r_,[...L[14]||(L[14]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9L4 4m0 0v4m0-4h4m6 0l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m6 0l5 5m0 0v-4m0 4h-4"},null,-1)])])):(ue(),me("svg",s_,[...L[13]||(L[13]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"},null,-1)])]))],10,i_)])]),R("div",{class:X(["flex-1 flex rounded-xl overflow-hidden transition-all duration-200 ring-1",[N(o)?s.value?"ring-red-500/50 bg-red-900/20":"ring-red-300 bg-red-50/50":d.value?s.value?"ring-primary-500 ring-2 bg-slate-800":"ring-primary-300 ring-2 bg-white":s.value?"ring-slate-600 bg-slate-800/50":"ring-gray-200 bg-surface-secondary"]])},[R("div",{ref_key:"lineNumbersRef",ref:g,class:X(["flex flex-col py-4 px-3 text-right select-none overflow-hidden border-r transition-colors",[N(o)?s.value?"bg-red-900/30 border-red-800 text-red-400":"bg-red-100/50 border-red-200 text-red-400":s.value?"bg-slate-900/50 border-slate-700 text-slate-500":"bg-surface-tertiary border-gray-100 text-gray-400"]]),"aria-hidden":"true"},[(ue(!0),me(At,null,qn(T.value,F=>(ue(),me("div",{key:F,class:"font-mono text-xs leading-5 tabular-nums"},qe(F),1))),128))],2),R("div",o_,[R("pre",{ref_key:"preRef",ref:m,class:X(["absolute inset-0 m-0 p-4 font-mono text-sm leading-5 whitespace-pre-wrap break-words pointer-events-none overflow-hidden select-none",s.value?"text-slate-200":"text-gray-800"]),"aria-hidden":"true",innerHTML:N(p)||""},null,10,a_),Wo(R("textarea",{ref_key:"textareaRef",ref:v,"onUpdate:modelValue":L[4]||(L[4]=F=>It(r)?r.value=F:null),onPaste:b,onScroll:A,onFocus:L[5]||(L[5]=F=>d.value=!0),onBlur:L[6]||(L[6]=F=>d.value=!1),placeholder:"Pega o escribe tu JSON aquí...",class:X(["absolute inset-0 w-full h-full p-4 font-mono text-sm leading-5 focus:outline-none resize-none bg-transparent whitespace-pre-wrap break-words",s.value?"placeholder:text-slate-500":"placeholder:text-gray-400"]),style:Ui({"-webkit-text-fill-color":"transparent",color:"transparent","caret-color":s.value?"#e2e8f0":"#374151"}),"aria-label":"Editor de JSON",spellcheck:"false"},null,38),[[Ko,N(r)]])])],2),R("div",l_,[N(o)?(ue(),me("div",{key:0,class:X(["flex items-start gap-2 p-3 border rounded-lg animate-fade-in",s.value?"bg-red-900/30 border-red-800":"bg-red-50 border-red-200"]),role:"alert"},[(ue(),me("svg",{class:X(["w-4 h-4 flex-shrink-0 mt-0.5",s.value?"text-red-400":"text-red-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...L[15]||(L[15]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])],2)),R("div",c_,[R("p",{class:X(["text-sm font-medium",s.value?"text-red-300":"text-red-800"])},"Error de sintaxis",2),R("p",{class:X(["text-xs mt-0.5 truncate",s.value?"text-red-400":"text-red-600"])},qe(N(o)),3)])],2)):N(l)&&N(a)?(ue(),me("div",{key:1,class:X(["flex items-center gap-2 p-3 border rounded-lg animate-fade-in",s.value?"bg-emerald-900/30 border-emerald-800":"bg-emerald-50 border-emerald-200"]),role:"status"},[(ue(),me("svg",{class:X(["w-4 h-4",s.value?"text-emerald-400":"text-emerald-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...L[16]||(L[16]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])],2)),R("p",{class:X(["text-sm font-medium",s.value?"text-emerald-300":"text-emerald-700"])},"JSON válido",2),R("span",{class:X(["ml-auto text-xs tabular-nums",s.value?"text-emerald-400":"text-emerald-600"])},qe(T.value.length)+" líneas",3)],2)):rt("",!0)])],2)],2)],8,["disabled"]))}});function h_(n,e=0,t=2){const i=We(e<t),s=Xe(()=>{const g=n();return g===null?"null":Array.isArray(g)?"array":typeof g}),r=Xe(()=>s.value==="object"||s.value==="array"),o=Xe(()=>{const g=n();return s.value==="array"&&Array.isArray(g)?g.length:s.value==="object"&&typeof g=="object"&&g!==null?Object.keys(g).length:0}),a=Xe(()=>{const g=n();return s.value==="array"&&Array.isArray(g)?g.map((v,m)=>({key:m,value:v})):s.value==="object"&&typeof g=="object"&&g!==null?Object.entries(g).map(([v,m])=>({key:v,value:m})):[]});function l(){r.value&&(i.value=!i.value)}function c(g){return{string:"text-green-600",number:"text-blue-600",boolean:"text-purple-600",null:"text-gray-500",array:"text-gray-800",object:"text-gray-800"}[g]}function u(g){return typeof g=="string"?`"${g}"`:g===null?"null":String(g)}function h(){i.value=!0}function f(){i.value=!1}function p(g,v){return g==="array"?`Array[${v}]`:g==="object"?`Object{${v}}`:""}return{isExpanded:i,dataType:s,isExpandable:r,itemCount:o,entries:a,toggleExpand:l,getValueColor:c,formatValue:u,getTypeLabel:p,expandAll:h,collapseAll:f}}const d_={class:"json-node group/node"},f_={class:"flex items-start gap-1.5"},p_=["role","aria-expanded","tabindex"],m_=["title"],g_={class:"tabular-nums"},__=Mn({__name:"JsonNode",props:{data:{type:[String,Number,Boolean,null,Object]},name:{},isRoot:{type:Boolean,default:!1},depth:{default:0},initialExpandDepth:{default:2},lineNumber:{default:1},theme:{}},setup(n){const e=n,t=Xe(()=>e.theme?.name==="dark"||e.theme?.name==="midnight"),i={string:"jsonString",number:"jsonNumber",boolean:"jsonBoolean",null:"jsonNull",object:"jsonObject",array:"jsonArray"},{isExpanded:s,dataType:r,isExpandable:o,itemCount:a,entries:l,toggleExpand:c,formatValue:u}=h_(()=>e.data,e.depth,e.initialExpandDepth);function h(g){switch(g){case"object":return"{}";case"array":return"[]";case"string":return"Aa";case"number":return"#";case"boolean":return"◐";case"null":return"ø";default:return"·"}}function f(g){if(t.value)switch(g){case"object":return"bg-orange-900/50 text-orange-400";case"array":return"bg-cyan-900/50 text-cyan-400";case"string":return"bg-emerald-900/50 text-emerald-400";case"number":return"bg-blue-900/50 text-blue-400";case"boolean":return"bg-violet-900/50 text-violet-400";case"null":return"bg-slate-700 text-slate-400";default:return"bg-slate-700 text-slate-400"}switch(g){case"object":return"bg-orange-100 text-orange-700";case"array":return"bg-cyan-100 text-cyan-700";case"string":return"bg-emerald-100 text-emerald-700";case"number":return"bg-blue-100 text-blue-700";case"boolean":return"bg-violet-100 text-violet-700";case"null":return"bg-gray-100 text-gray-600";default:return"bg-gray-100 text-gray-600"}}function p(g){if(e.theme){const v=i[g];return v?e.theme.colors[v]:e.theme.colors.textSecondary}switch(g){case"string":return"text-emerald-600";case"number":return"text-blue-600";case"boolean":return"text-violet-600";case"null":return"text-gray-500";default:return"text-gray-800"}}return(g,v)=>{const m=Qm("JsonNode",!0);return ue(),me("div",d_,[R("div",f_,[R("span",{class:X(["flex-shrink-0 w-8 text-right text-[10px] select-none font-mono mt-1 tabular-nums opacity-60 group-hover/node:opacity-100 transition-opacity",t.value?"text-slate-500":"text-gray-400"]),"aria-hidden":"true"},qe(n.lineNumber),3),R("div",{class:X(["flex-1 flex items-start gap-1.5 py-1 px-2 -mx-2 rounded-lg transition-all",[N(o)?t.value?"cursor-pointer hover:bg-slate-700/50":"cursor-pointer hover:bg-primary-50/70":t.value?"hover:bg-slate-700/30":"hover:bg-gray-50"]]),role:N(o)?"button":void 0,"aria-expanded":N(o)?N(s):void 0,tabindex:N(o)?0:void 0,onClick:v[0]||(v[0]=(...d)=>N(c)&&N(c)(...d)),onKeydown:[v[1]||(v[1]=Zo((...d)=>N(c)&&N(c)(...d),["enter"])),v[2]||(v[2]=Zo(Jo((...d)=>N(c)&&N(c)(...d),["prevent"]),["space"]))]},[N(o)?(ue(),me("span",{key:0,class:X(["flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center rounded transition-colors",N(s)?t.value?"text-primary-400":"text-primary-500":t.value?"text-slate-500 group-hover/node:text-slate-400":"text-gray-400 group-hover/node:text-gray-600"])},[(ue(),me("svg",{class:X(["w-3.5 h-3.5 transition-transform duration-200 ease-out",{"rotate-90":N(s)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[...v[3]||(v[3]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",d:"M9 5l7 7-7 7"},null,-1)])],2))],2)):(ue(),me("span",{key:1,class:X(["flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center text-[9px] font-bold rounded",f(N(r))]),title:N(r)},qe(h(N(r))),11,m_)),n.isRoot?rt("",!0):(ue(),me("span",{key:2,class:X(["font-medium flex-shrink-0",t.value?"text-primary-400":"text-primary-700"])},[Un(' "'+qe(n.name)+'"',1),R("span",{class:X([t.value?"text-slate-500":"text-gray-400","ml-0.5"])},":",2)],2)),N(o)?(ue(),me("span",{key:3,class:X(["font-mono text-sm flex items-center gap-1.5",t.value?"text-slate-400":"text-gray-600"])},[R("span",{class:X(["inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold",N(r)==="array"?t.value?"bg-cyan-900/50 text-cyan-400":"bg-cyan-100 text-cyan-700":t.value?"bg-orange-900/50 text-orange-400":"bg-orange-100 text-orange-700"])},[Un(qe(N(r)==="array"?"[]":"{}")+" ",1),R("span",g_,qe(N(a)),1)],2),N(s)?rt("",!0):(ue(),me("span",{key:0,class:X(["text-xs",t.value?"text-slate-500":"text-gray-400"])},"•••",2))],2)):(ue(),me("span",{key:4,class:X([p(N(r)),"font-mono text-sm break-all"])},qe(N(u)(n.data)),3))],42,p_)]),N(o)&&N(s)?(ue(),me("div",{key:0,class:X(["ml-5 pl-3 border-l-2 transition-colors animate-fade-in",t.value?"border-slate-700 hover:border-slate-600":"border-primary-100 hover:border-primary-200"])},[(ue(!0),me(At,null,qn(N(l),(d,T)=>(ue(),Ln(m,{key:d.key,data:d.value,name:String(d.key),depth:n.depth+1,initialExpandDepth:n.initialExpandDepth,lineNumber:n.lineNumber+T+1,theme:n.theme},null,8,["data","name","depth","initialExpandDepth","lineNumber","theme"]))),128))],2)):rt("",!0)])}}}),ru=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},v_=ru(__,[["__scopeId","data-v-008f3ba3"]]);function x_(n){return n===null?"null":Array.isArray(n)?"array":typeof n=="object"?"object":typeof n=="string"?"string":typeof n=="number"?"number":typeof n=="boolean"?"boolean":"null"}function y_(n,e){if(e==="object")return`{${Object.keys(n).length}}`;if(e==="array")return`[${n.length}]`;if(e==="string"){const t=n;return t.length>20?`"${t.slice(0,20)}..."`:`"${t}"`}return e==="null"?"null":String(n)}let Xf=0;function jf(n,e,t){const i=x_(n),r={id:`node-${Xf++}`,name:e,value:y_(n,i),type:i,children:[],isExpanded:t<2,depth:t};if(i==="object"||i==="array"){const o=i==="array"?n.map((a,l)=>({key:String(l),value:a})):Object.entries(n).map(([a,l])=>({key:a,value:l}));r.children=o.map(a=>jf(a.value,a.key,t+1))}return r}function b_(n){return Xf=0,jf(n,"root",0)}const ou="182",Ws={ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},M_=0,xh=1,S_=2,Io=1,$f=2,gr=3,zi=0,cn=1,Wn=2,Kn=0,Xs=1,Hl=2,yh=3,bh=4,E_=5,is=100,T_=101,w_=102,A_=103,C_=104,R_=200,P_=201,D_=202,L_=203,Gl=204,Wl=205,I_=206,N_=207,U_=208,F_=209,O_=210,B_=211,k_=212,z_=213,V_=214,Xl=0,jl=1,$l=2,Ys=3,Yl=4,ql=5,Kl=6,Jl=7,Yf=0,H_=1,G_=2,Jn=0,qf=1,Kf=2,Jf=3,Zf=4,Qf=5,ep=6,tp=7,np=300,us=301,qs=302,Zl=303,Ql=304,va=306,ec=1e3,fi=1001,tc=1002,Vt=1003,W_=1004,Zr=1005,zt=1006,ja=1007,rs=1008,gn=1009,ip=1010,sp=1011,Fr=1012,au=1013,Zn=1014,jn=1015,xn=1016,lu=1017,cu=1018,Or=1020,rp=35902,op=35899,ap=1021,lp=1022,In=1023,yi=1026,os=1027,cp=1028,uu=1029,Ks=1030,hu=1031,du=1033,No=33776,Uo=33777,Fo=33778,Oo=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37488,uc=37489,hc=37490,dc=37491,fc=37808,pc=37809,mc=37810,gc=37811,_c=37812,vc=37813,xc=37814,yc=37815,bc=37816,Mc=37817,Sc=37818,Ec=37819,Tc=37820,wc=37821,Ac=36492,Cc=36494,Rc=36495,Pc=36283,Dc=36284,Lc=36285,Ic=36286,X_=3200,up=0,j_=1,Ni="",mn="srgb",Js="srgb-linear",Qo="linear",pt="srgb",_s=7680,Mh=519,$_=512,Y_=513,q_=514,fu=515,K_=516,J_=517,pu=518,Z_=519,Nc=35044,Sh="300 es",$n=2e3,ea=2001;function hp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Q_(){const n=ta("canvas");return n.style.display="block",n}const Eh={};function na(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ye(...n){const e="THREE."+n.shift();console.warn(e,...n)}function ot(...n){const e="THREE."+n.shift();console.error(e,...n)}function Br(...n){const e=n.join(" ");e in Eh||(Eh[e]=!0,Ye(...n))}function ev(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bo=Math.PI/180,ia=180/Math.PI;function Bi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function tv(n,e){return(n%e+e)%e}function $a(n,e,t){return(1-t)*n+t*e}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nv={DEG2RAD:Bo};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=l*f+c*p+u*g+h*v;m<0&&(f=-f,p=-p,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){const T=Math.acos(m),A=Math.sin(T);d=Math.sin(d*T)/A,a=Math.sin(a*T)/A,l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a;const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new O,Th=new hs;class tt{constructor(e,t,i,s,r,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],T=s[1],A=s[4],b=s[7],E=s[2],P=s[5],I=s[8];return r[0]=o*v+a*T+l*E,r[3]=o*m+a*A+l*P,r[6]=o*d+a*b+l*I,r[1]=c*v+u*T+h*E,r[4]=c*m+u*A+h*P,r[7]=c*d+u*b+h*I,r[2]=f*v+p*T+g*E,r[5]=f*m+p*A+g*P,r[8]=f*d+p*b+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new tt,wh=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iv(){const n={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Js]:{primaries:e,whitePoint:i,transfer:Qo,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const at=iv();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vs;class sv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vs===void 0&&(vs=ta("canvas")),vs.width=e.width,vs.height=e.height;const s=vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rv=0;class mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ka(s[o].image)):r.push(Ka(s[o]))}else r=Ka(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let ov=0;const Ja=new O;class Yt extends ds{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=fi,s=fi,r=zt,o=rs,a=In,l=gn,c=Yt.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=Bi(),this.name="",this.source=new mu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ja).x}get height(){return this.source.getSize(Ja).y}get depth(){return this.source.getSize(Ja).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ec:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ec:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=np;Yt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,b=(p+1)/2,E=(d+1)/2,P=(u+f)/4,I=(h+v)/4,V=(g+m)/4;return A>b&&A>E?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=P/i,r=I/i):b>E?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=P/s,r=V/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=I/r,s=V/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class av extends ds{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Yt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new mu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends av{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dp extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lv extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),eo.subVectors(this.max,or),xs.subVectors(e.a,or),ys.subVectors(e.b,or),bs.subVectors(e.c,or),Ti.subVectors(ys,xs),wi.subVectors(bs,ys),qi.subVectors(xs,bs);let t=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-qi.z,qi.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,qi.z,0,-qi.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-qi.y,qi.x,0];return!Za(t,xs,ys,bs,eo)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,xs,ys,bs,eo))?!1:(to.crossVectors(Ti,wi),t=[to.x,to.y,to.z],Za(t,xs,ys,bs,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ii=[new O,new O,new O,new O,new O,new O,new O,new O],Rn=new O,Qr=new Hr,xs=new O,ys=new O,bs=new O,Ti=new O,wi=new O,qi=new O,or=new O,eo=new O,to=new O,Ki=new O;function Za(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cv=new Hr,ar=new O,Qa=new O;class xa{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ar,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Qa)),this.expandByPoint(ar.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const si=new O,el=new O,no=new O,Ai=new O,tl=new O,io=new O,nl=new O;class ya{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){el.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(el);const r=e.distanceTo(t)*.5,o=-this.direction.dot(no),a=Ai.dot(this.direction),l=-Ai.dot(no),c=Ai.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(el).addScaledVector(no,f),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,s,r){tl.subVectors(t,e),io.subVectors(i,e),nl.crossVectors(tl,io);let o=this.direction.dot(nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(io.crossVectors(Ai,io));if(l<0)return null;const c=a*this.direction.dot(tl.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(nl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,g,v,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uv,e,hv)}lookAt(e,t,i){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ci.crossVectors(i,fn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ci.crossVectors(i,fn)),Ci.normalize(),so.crossVectors(fn,Ci),s[0]=Ci.x,s[4]=so.x,s[8]=fn.x,s[1]=Ci.y,s[5]=so.y,s[9]=fn.y,s[2]=Ci.z,s[6]=so.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],T=i[3],A=i[7],b=i[11],E=i[15],P=s[0],I=s[4],V=s[8],x=s[12],S=s[1],L=s[5],F=s[9],B=s[13],te=s[2],ie=s[6],Q=s[10],W=s[14],H=s[3],pe=s[7],be=s[11],we=s[15];return r[0]=o*P+a*S+l*te+c*H,r[4]=o*I+a*L+l*ie+c*pe,r[8]=o*V+a*F+l*Q+c*be,r[12]=o*x+a*B+l*W+c*we,r[1]=u*P+h*S+f*te+p*H,r[5]=u*I+h*L+f*ie+p*pe,r[9]=u*V+h*F+f*Q+p*be,r[13]=u*x+h*B+f*W+p*we,r[2]=g*P+v*S+m*te+d*H,r[6]=g*I+v*L+m*ie+d*pe,r[10]=g*V+v*F+m*Q+d*be,r[14]=g*x+v*B+m*W+d*we,r[3]=T*P+A*S+b*te+E*H,r[7]=T*I+A*L+b*ie+E*pe,r[11]=T*V+A*F+b*Q+E*be,r[15]=T*x+A*B+b*W+E*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15],T=l*p-c*f,A=a*p-c*h,b=a*f-l*h,E=o*p-c*u,P=o*f-l*u,I=o*h-a*u;return t*(v*T-m*A+d*b)-i*(g*T-m*E+d*P)+s*(g*A-v*E+d*I)-r*(g*b-v*P+m*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],T=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,A=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,b=u*v*c-g*h*c+g*a*p-o*v*p-u*a*d+o*h*d,E=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,P=t*T+i*A+s*b+r*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=T*I,e[1]=(v*f*r-h*m*r-v*s*p+i*m*p+h*s*d-i*f*d)*I,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*d+i*l*d)*I,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*I,e[4]=A*I,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*I,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*I,e[8]=b*I,e[9]=(g*h*r-u*v*r-g*i*p+t*v*p+u*i*d-t*h*d)*I,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*d+t*a*d)*I,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*I,e[12]=E*I,e[13]=(u*v*s-g*h*s+g*i*f-t*v*f-u*i*m+t*h*m)*I,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*I,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,v=o*u,m=o*h,d=a*h,T=l*c,A=l*u,b=l*h,E=i.x,P=i.y,I=i.z;return s[0]=(1-(v+d))*E,s[1]=(p+b)*E,s[2]=(g-A)*E,s[3]=0,s[4]=(p-b)*P,s[5]=(1-(f+d))*P,s[6]=(m+T)*P,s[7]=0,s[8]=(g+A)*I,s[9]=(m-T)*I,s[10]=(1-(f+v))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Ms.set(s[0],s[1],s[2]).length();const o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Pn.copy(this);const c=1/r,u=1/o,h=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=$n,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ea)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=$n,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===$n)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===ea)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ms=new O,Pn=new Tt,uv=new O(0,0,0),hv=new O(1,1,1),Ci=new O,so=new O,fn=new O,Ch=new Tt,Rh=new hs;class Qn{constructor(e=0,t=0,i=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dv=0;const Ph=new O,Ss=new hs,ri=new Tt,ro=new O,lr=new O,fv=new O,pv=new hs,Dh=new O(1,0,0),Lh=new O(0,1,0),Ih=new O(0,0,1),Nh={type:"added"},mv={type:"removed"},Es={type:"childadded",child:null},il={type:"childremoved",child:null};class Nt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new O,t=new Qn,i=new hs,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new tt}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Dh,e)}rotateY(e){return this.rotateOnAxis(Lh,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Ph.copy(e).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dh,e)}translateY(e){return this.translateOnAxis(Lh,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(lr,ro,this.up):ri.lookAt(ro,lr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(ri),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nh),Es.child=e,this.dispatchEvent(Es),Es.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mv),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nh),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new O(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new O,oi=new O,sl=new O,ai=new O,Ts=new O,ws=new O,Uh=new O,rl=new O,ol=new O,al=new O,ll=new Pt,cl=new Pt,ul=new Pt;class wn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),oi.subVectors(i,t),sl.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(oi),l=Dn.dot(sl),c=oi.dot(oi),u=oi.dot(sl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ll.setScalar(0),cl.setScalar(0),ul.setScalar(0),ll.fromBufferAttribute(e,t),cl.fromBufferAttribute(e,i),ul.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ll,r.x),o.addScaledVector(cl,r.y),o.addScaledVector(ul,r.z),o}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),oi.subVectors(e,t),Dn.cross(oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Dn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ts.subVectors(s,i),ws.subVectors(r,i),rl.subVectors(e,i);const l=Ts.dot(rl),c=ws.dot(rl);if(l<=0&&c<=0)return t.copy(i);ol.subVectors(e,s);const u=Ts.dot(ol),h=ws.dot(ol);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ts,o);al.subVectors(e,r);const p=Ts.dot(al),g=ws.dot(al);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ws,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Uh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Uh,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(Ts,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},oo={h:0,s:0,l:0};function hl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=tv(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=hl(o,r,e+1/3),this.g=hl(o,r,e),this.b=hl(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=mn){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=fp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return at.workingToColorSpace(Wt.copy(this),e),Math.round(it(Wt.r*255,0,255))*65536+Math.round(it(Wt.g*255,0,255))*256+Math.round(it(Wt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=mn){at.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(oo);const i=$a(Ri.h,oo.h,t),s=$a(Ri.s,oo.s,t),r=$a(Ri.l,oo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Je;Je.NAMES=fp;let gv=0;class fs extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=Xs,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Wl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gl&&(i.blendSrc=this.blendSrc),this.blendDst!==Wl&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ba extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new O,ao=new Ee;let _v=0;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_v++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nc,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nc&&(e.usage=this.usage),e}}class pp extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mp extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ht extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vv=0;const Tn=new Tt,dl=new Nt,As=new O,pn=new Hr,cr=new Hr,kt=new O;class nn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hp(e)?mp:pp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(pn.min,cr.min),pn.expandByPoint(kt),kt.addVectors(pn.max,cr.max),pn.expandByPoint(kt)):(pn.expandByPoint(cr.min),pn.expandByPoint(cr.max))}pn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),kt.add(As)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<i.count;V++)a[V]=new O,l[V]=new O;const c=new O,u=new O,h=new O,f=new Ee,p=new Ee,g=new Ee,v=new O,m=new O;function d(V,x,S){c.fromBufferAttribute(i,V),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,V),p.fromBufferAttribute(r,x),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[V].add(v),a[x].add(v),a[S].add(v),l[V].add(m),l[x].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let V=0,x=T.length;V<x;++V){const S=T[V],L=S.start,F=S.count;for(let B=L,te=L+F;B<te;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const A=new O,b=new O,E=new O,P=new O;function I(V){E.fromBufferAttribute(s,V),P.copy(E);const x=a[V];A.copy(x),A.sub(E.multiplyScalar(E.dot(x))).normalize(),b.crossVectors(P,x);const L=b.dot(l[V])<0?-1:1;o.setXYZW(V,A.x,A.y,A.z,L)}for(let V=0,x=T.length;V<x;++V){const S=T[V],L=S.start,F=S.count;for(let B=L,te=L+F;B<te;B+=3)I(e.getX(B+0)),I(e.getX(B+1)),I(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new yn(f,u,h)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fh=new Tt,Ji=new ya,lo=new xa,Oh=new O,co=new O,uo=new O,ho=new O,fl=new O,fo=new O,Bh=new O,po=new O;class bn extends Nt{constructor(e=new nn,t=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(fl.fromBufferAttribute(h,e),o?fo.addScaledVector(fl,u):fo.addScaledVector(fl.sub(t),u))}t.add(fo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(lo.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(lo,Oh)===null||Ji.origin.distanceToSquared(Oh)>(e.far-e.near)**2))&&(Fh.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Fh),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,E=A;b<E;b+=3){const P=a.getX(b),I=a.getX(b+1),V=a.getX(b+2);s=mo(this,d,e,i,c,u,h,P,I,V),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const T=a.getX(m),A=a.getX(m+1),b=a.getX(m+2);s=mo(this,o,e,i,c,u,h,T,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,E=A;b<E;b+=3){const P=b,I=b+1,V=b+2;s=mo(this,d,e,i,c,u,h,P,I,V),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const T=m,A=m+1,b=m+2;s=mo(this,o,e,i,c,u,h,T,A,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function xv(n,e,t,i,s,r,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===zi,a),l===null)return null;po.copy(a),po.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:n}}function mo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,co),n.getVertexPosition(l,uo),n.getVertexPosition(c,ho);const u=xv(n,e,t,i,co,uo,ho,Bh);if(u){const h=new O;wn.getBarycoord(Bh,co,uo,ho,h),s&&(u.uv=wn.getInterpolatedAttribute(s,a,l,c,h,new Ee)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,l,c,h,new Ee)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};wn.getNormal(co,uo,ho,f.normal),u.face=f,u.barycoord=h}return u}class Gr extends nn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function g(v,m,d,T,A,b,E,P,I,V,x){const S=b/I,L=E/V,F=b/2,B=E/2,te=P/2,ie=I+1,Q=V+1;let W=0,H=0;const pe=new O;for(let be=0;be<Q;be++){const we=be*L-B;for(let Ge=0;Ge<ie;Ge++){const Ke=Ge*S-F;pe[v]=Ke*T,pe[m]=we*A,pe[d]=te,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[m]=0,pe[d]=P>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(Ge/I),h.push(1-be/V),W+=1}}for(let be=0;be<V;be++)for(let we=0;we<I;we++){const Ge=f+we+ie*be,Ke=f+we+ie*(be+1),gt=f+(we+1)+ie*(be+1),ht=f+(we+1)+ie*be;l.push(Ge,Ke,ht),l.push(Ke,gt,ht),H+=6}a.addGroup(p,H,x),p+=H,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Zs(n[t]);for(const s in i)e[s]=i[s]}return e}function yv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const sa={clone:Zs,merge:Zt};var bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bv,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=yv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _p extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new O,kh=new Ee,zh=new Ee;class ln extends _p{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,kh,zh),t.subVectors(zh,kh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Rs=1;class Sv extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Cs,Rs,e,t);s.layers=this.layers,this.add(s);const r=new ln(Cs,Rs,e,t);r.layers=this.layers,this.add(r);const o=new ln(Cs,Rs,e,t);o.layers=this.layers,this.add(o);const a=new ln(Cs,Rs,e,t);a.layers=this.layers,this.add(a);const l=new ln(Cs,Rs,e,t);l.layers=this.layers,this.add(l);const c=new ln(Cs,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vp extends Yt{constructor(e=[],t=us,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xp extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new vp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gr(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Kn});r.uniforms.tEquirect.value=t;const o=new bn(s,r),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=zt),new Sv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class as extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ev={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ev)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new as;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class _u{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(e),this.density=t}clone(){return new _u(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tv extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new O;class ra{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ra(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uc extends fs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ps;const ur=new O,Ds=new O,Ls=new O,Is=new Ee,hr=new Ee,yp=new Tt,go=new O,dr=new O,_o=new O,Vh=new Ee,ml=new Ee,Hh=new Ee;class Gh extends Nt{constructor(e=new Uc){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new nn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wv(t,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new ra(i,3,0,!1)),Ps.setAttribute("uv",new ra(i,2,3,!1))}this.geometry=Ps,this.material=e,this.center=new Ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),yp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Ls.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;vo(go.set(-.5,-.5,0),Ls,o,Ds,s,r),vo(dr.set(.5,-.5,0),Ls,o,Ds,s,r),vo(_o.set(.5,.5,0),Ls,o,Ds,s,r),Vh.set(0,0),ml.set(1,0),Hh.set(1,1);let a=e.ray.intersectTriangle(go,dr,_o,!1,ur);if(a===null&&(vo(dr.set(-.5,.5,0),Ls,o,Ds,s,r),ml.set(0,1),a=e.ray.intersectTriangle(go,_o,dr,!1,ur),a===null))return;const l=e.ray.origin.distanceTo(ur);l<e.near||l>e.far||t.push({distance:l,point:ur.clone(),uv:wn.getInterpolation(ur,go,dr,_o,Vh,ml,Hh,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vo(n,e,t,i,s,r){Is.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(hr.x=r*Is.x-s*Is.y,hr.y=s*Is.x+r*Is.y):hr.copy(Is),n.copy(e),n.x+=hr.x,n.y+=hr.y,n.applyMatrix4(yp)}class Av extends Yt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Vt,u=Vt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gl=new O,Cv=new O,Rv=new tt;class ui{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=gl.subVectors(i,t).cross(Cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rv.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new xa,Pv=new Ee(.5,.5),xo=new O;class vu{constructor(e=new ui,t=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],v=r[9],m=r[10],d=r[11],T=r[12],A=r[13],b=r[14],E=r[15];if(s[0].setComponents(c-o,p-u,d-g,E-T).normalize(),s[1].setComponents(c+o,p+u,d+g,E+T).normalize(),s[2].setComponents(c+a,p+h,d+v,E+A).normalize(),s[3].setComponents(c-a,p-h,d-v,E-A).normalize(),i)s[4].setComponents(l,f,m,b).normalize(),s[5].setComponents(c-l,p-f,d-m,E-b).normalize();else if(s[4].setComponents(c-l,p-f,d-m,E-b).normalize(),t===$n)s[5].setComponents(c+l,p+f,d+m,E+b).normalize();else if(t===ea)s[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);const t=Pv.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(xo.x=s.normal.x>0?e.max.x:e.min.x,xo.y=s.normal.y>0?e.max.y:e.min.y,xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bp extends fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wh=new Tt,Fc=new ya,yo=new xa,bo=new O;class Dv extends Nt{constructor(e=new nn,t=new bp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;Wh.copy(s).invert(),Fc.copy(e.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);bo.fromBufferAttribute(h,m),Xh(bo,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,v=p;g<v;g++)bo.fromBufferAttribute(h,g),Xh(bo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xh(n,e,t,i,s,r,o){const a=Fc.distanceSqToPoint(n);if(a<t){const l=new O;Fc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class jh extends Yt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kr extends Yt{constructor(e,t,i=Zn,s,r,o,a=Vt,l=Vt,c,u=yi,h=1){if(u!==yi&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lv extends kr{constructor(e,t=Zn,i=us,s,r,o=Vt,a=Vt,l,c=yi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mp extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ee:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new O,s=[],r=[],o=[],a=new O,l=new Tt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(it(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(it(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sp extends Si{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ee){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Iv extends Sp{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Mo=new O,_l=new xu,vl=new xu,xl=new xu;class Nv extends Si{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Mo.subVectors(s[0],s[1]).add(s[0]),c=Mo);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),_l.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),vl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),xl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),vl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),xl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(_l.calc(l),vl.calc(l),xl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $h(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Uv(n,e){const t=1-n;return t*t*e}function Fv(n,e){return 2*(1-n)*n*e}function Ov(n,e){return n*n*e}function Ar(n,e,t,i){return Uv(n,e)+Fv(n,t)+Ov(n,i)}function Bv(n,e){const t=1-n;return t*t*t*e}function kv(n,e){const t=1-n;return 3*t*t*n*e}function zv(n,e){return 3*(1-n)*n*n*e}function Vv(n,e){return n*n*n*e}function Cr(n,e,t,i,s){return Bv(n,e)+kv(n,t)+zv(n,i)+Vv(n,s)}class Hv extends Si{constructor(e=new Ee,t=new Ee,i=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ep extends Si{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y),Cr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gv extends Si{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wv extends Si{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xv extends Si{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ar(e,s.x,r.x,o.x),Ar(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tp extends Si{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ar(e,s.x,r.x,o.x),Ar(e,s.y,r.y,o.y),Ar(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jv extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set($h(a,l.x,c.x,u.x,h.x),$h(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}}var $v=Object.freeze({__proto__:null,ArcCurve:Iv,CatmullRomCurve3:Nv,CubicBezierCurve:Hv,CubicBezierCurve3:Ep,EllipseCurve:Sp,LineCurve:Gv,LineCurve3:Wv,QuadraticBezierCurve:Xv,QuadraticBezierCurve3:Tp,SplineCurve:jv});class Ma extends nn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const T=d*f-o;for(let A=0;A<c;A++){const b=A*h-r;g.push(b,-T,0),v.push(0,0,1),m.push(A/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const A=T+c*d,b=T+c*(d+1),E=T+1+c*(d+1),P=T+1+c*d;p.push(A,b,P),p.push(b,E,P)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class yu extends nn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,f=new O,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const T=[],A=d/i;let b=0;d===0&&o===0?b=.5/t:d===i&&l===Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){const P=E/t;h.x=-e*Math.cos(s+P*r)*Math.sin(o+A*a),h.y=e*Math.cos(o+A*a),h.z=e*Math.sin(s+P*r)*Math.sin(o+A*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(P+b,1-A),T.push(c++)}u.push(T)}for(let d=0;d<i;d++)for(let T=0;T<t;T++){const A=u[d][T+1],b=u[d][T],E=u[d+1][T],P=u[d+1][T+1];(d!==0||o>0)&&p.push(A,b,P),(d!==i-1||l<Math.PI)&&p.push(b,E,P)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bu extends nn{constructor(e=new Tp(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,l=new O,c=new Ee;let u=new O;const h=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function v(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),T(),d()}function m(A){u=e.getPointAt(A/t,u);const b=o.normals[A],E=o.binormals[A];for(let P=0;P<=s;P++){const I=P/s*Math.PI*2,V=Math.sin(I),x=-Math.cos(I);l.x=x*b.x+V*E.x,l.y=x*b.y+V*E.y,l.z=x*b.z+V*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let A=1;A<=t;A++)for(let b=1;b<=s;b++){const E=(s+1)*(A-1)+(b-1),P=(s+1)*A+(b-1),I=(s+1)*A+b,V=(s+1)*(A-1)+b;g.push(E,P,V),g.push(P,I,V)}}function T(){for(let A=0;A<=t;A++)for(let b=0;b<=s;b++)c.x=A/t,c.y=b/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new bu(new $v[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Yv extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qv extends fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kv extends qv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Jv extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zv extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sa extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const yl=new Tt,Yh=new O,qh=new O;class Mu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vu,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qh),t.updateMatrixWorld(),yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qv extends Mu{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ia*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ex extends Sa{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Qv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class tx extends Mu{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class nx extends Sa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new tx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ea extends _p{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ix extends Mu{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sx extends Sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new ix}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class rx extends Sa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ox extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ax{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Kh=new Tt;class lx{constructor(e,t,i=0,s=1/0){this.ray=new ya(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kh),this}intersectObject(e,t=!0,i=[]){return Oc(e,this,i,t),i.sort(Jh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Oc(e[s],this,i,t);return i.sort(Jh),i}}function Jh(n,e){return n.distance-e.distance}function Oc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Oc(r[o],e,t,!0)}}class Zh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cx extends ds{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Qh(n,e,t,i){const s=ux(i);switch(t){case ap:return n*e;case cp:return n*e/s.components*s.byteLength;case uu:return n*e/s.components*s.byteLength;case Ks:return n*e*2/s.components*s.byteLength;case hu:return n*e*2/s.components*s.byteLength;case lp:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case du:return n*e*4/s.components*s.byteLength;case No:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fo:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(n,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(n,8)*Math.max(e,8)/2;case oc:case ac:case cc:case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lc:case hc:case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ac:case Cc:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pc:case Dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lc:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ux(n){switch(n){case gn:case ip:return{byteLength:1,components:1};case Fr:case sp:case xn:return{byteLength:2,components:1};case lu:case cu:return{byteLength:2,components:4};case Zn:case au:case jn:return{byteLength:4,components:1};case rp:case op:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ou}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ou);function wp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function hx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fx=`#ifdef USE_ALPHAHASH
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
#endif`,px=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vx=`#ifdef USE_AOMAP
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
#endif`,xx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yx=`#ifdef USE_BATCHING
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
#endif`,bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ex=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tx=`#ifdef USE_IRIDESCENCE
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
#endif`,wx=`#ifdef USE_BUMPMAP
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ux=`#define PI 3.141592653589793
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
} // validated`,Fx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ox=`vec3 transformedNormal = objectNormal;
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
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qx=`#ifdef USE_GRADIENTMAP
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
}`,ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iy=`uniform bool receiveShadow;
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
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cy=`PhysicalMaterial material;
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
#endif`,uy=`uniform sampler2D dfgLUT;
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
}`,hy=`
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
#endif`,dy=`#if defined( RE_IndirectDiffuse )
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,py=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,my=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,by=`#if defined( USE_POINTS_UV )
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
#endif`,My=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ty=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`#ifdef USE_MORPHTARGETS
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
#endif`,Cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Py=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ny=`#ifdef USE_NORMALMAP
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
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,By=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ky=`float getShadowMask() {
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
}`,Jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
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
#endif`,tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#ifdef USE_TRANSMISSION
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`#include <common>
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
}`,vb=`#if DEPTH_PACKING == 3200
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
}`,xb=`#define DISTANCE
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
}`,yb=`#define DISTANCE
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
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`uniform float scale;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,wb=`uniform vec3 diffuse;
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
}`,Ab=`#define LAMBERT
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
}`,Cb=`#define LAMBERT
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
}`,Rb=`#define MATCAP
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
}`,Pb=`#define MATCAP
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
}`,Db=`#define NORMAL
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
}`,Lb=`#define NORMAL
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
}`,Ib=`#define PHONG
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
}`,Nb=`#define PHONG
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
}`,Ub=`#define STANDARD
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
}`,Fb=`#define STANDARD
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
}`,Ob=`#define TOON
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
}`,Bb=`#define TOON
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
}`,kb=`uniform float size;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Vb=`#include <common>
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
}`,Hb=`uniform vec3 color;
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
}`,Gb=`uniform float rotation;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:dx,alphahash_pars_fragment:fx,alphamap_fragment:px,alphamap_pars_fragment:mx,alphatest_fragment:gx,alphatest_pars_fragment:_x,aomap_fragment:vx,aomap_pars_fragment:xx,batching_pars_vertex:yx,batching_vertex:bx,begin_vertex:Mx,beginnormal_vertex:Sx,bsdfs:Ex,iridescence_fragment:Tx,bumpmap_pars_fragment:wx,clipping_planes_fragment:Ax,clipping_planes_pars_fragment:Cx,clipping_planes_pars_vertex:Rx,clipping_planes_vertex:Px,color_fragment:Dx,color_pars_fragment:Lx,color_pars_vertex:Ix,color_vertex:Nx,common:Ux,cube_uv_reflection_fragment:Fx,defaultnormal_vertex:Ox,displacementmap_pars_vertex:Bx,displacementmap_vertex:kx,emissivemap_fragment:zx,emissivemap_pars_fragment:Vx,colorspace_fragment:Hx,colorspace_pars_fragment:Gx,envmap_fragment:Wx,envmap_common_pars_fragment:Xx,envmap_pars_fragment:jx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:sy,envmap_vertex:Yx,fog_vertex:qx,fog_pars_vertex:Kx,fog_fragment:Jx,fog_pars_fragment:Zx,gradientmap_pars_fragment:Qx,lightmap_pars_fragment:ey,lights_lambert_fragment:ty,lights_lambert_pars_fragment:ny,lights_pars_begin:iy,lights_toon_fragment:ry,lights_toon_pars_fragment:oy,lights_phong_fragment:ay,lights_phong_pars_fragment:ly,lights_physical_fragment:cy,lights_physical_pars_fragment:uy,lights_fragment_begin:hy,lights_fragment_maps:dy,lights_fragment_end:fy,logdepthbuf_fragment:py,logdepthbuf_pars_fragment:my,logdepthbuf_pars_vertex:gy,logdepthbuf_vertex:_y,map_fragment:vy,map_pars_fragment:xy,map_particle_fragment:yy,map_particle_pars_fragment:by,metalnessmap_fragment:My,metalnessmap_pars_fragment:Sy,morphinstance_vertex:Ey,morphcolor_vertex:Ty,morphnormal_vertex:wy,morphtarget_pars_vertex:Ay,morphtarget_vertex:Cy,normal_fragment_begin:Ry,normal_fragment_maps:Py,normal_pars_fragment:Dy,normal_pars_vertex:Ly,normal_vertex:Iy,normalmap_pars_fragment:Ny,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Fy,clearcoat_pars_fragment:Oy,iridescence_pars_fragment:By,opaque_fragment:ky,packing:zy,premultiplied_alpha_fragment:Vy,project_vertex:Hy,dithering_fragment:Gy,dithering_pars_fragment:Wy,roughnessmap_fragment:Xy,roughnessmap_pars_fragment:jy,shadowmap_pars_fragment:$y,shadowmap_pars_vertex:Yy,shadowmap_vertex:qy,shadowmask_pars_fragment:Ky,skinbase_vertex:Jy,skinning_pars_vertex:Zy,skinning_vertex:Qy,skinnormal_vertex:eb,specularmap_fragment:tb,specularmap_pars_fragment:nb,tonemapping_fragment:ib,tonemapping_pars_fragment:sb,transmission_fragment:rb,transmission_pars_fragment:ob,uv_pars_fragment:ab,uv_pars_vertex:lb,uv_vertex:cb,worldpos_vertex:ub,background_vert:hb,background_frag:db,backgroundCube_vert:fb,backgroundCube_frag:pb,cube_vert:mb,cube_frag:gb,depth_vert:_b,depth_frag:vb,distance_vert:xb,distance_frag:yb,equirect_vert:bb,equirect_frag:Mb,linedashed_vert:Sb,linedashed_frag:Eb,meshbasic_vert:Tb,meshbasic_frag:wb,meshlambert_vert:Ab,meshlambert_frag:Cb,meshmatcap_vert:Rb,meshmatcap_frag:Pb,meshnormal_vert:Db,meshnormal_frag:Lb,meshphong_vert:Ib,meshphong_frag:Nb,meshphysical_vert:Ub,meshphysical_frag:Fb,meshtoon_vert:Ob,meshtoon_frag:Bb,points_vert:kb,points_frag:zb,shadow_vert:Vb,shadow_frag:Hb,sprite_vert:Gb,sprite_frag:Wb},Re={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Gn={basic:{uniforms:Zt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Zt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Je(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Zt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Zt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Zt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Je(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Zt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Zt([Re.points,Re.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Zt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Zt([Re.common,Re.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Zt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Zt([Re.sprite,Re.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Zt([Re.common,Re.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Zt([Re.lights,Re.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Gn.physical={uniforms:Zt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const So={r:0,b:0,g:0},Qi=new Qn,Xb=new Tt;function jb(n,e,t,i,s,r,o){const a=new Je(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function v(A){let b=!1;const E=g(A);E===null?d(a,l):E&&E.isColor&&(d(E,1),b=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,b){const E=g(b);E&&(E.isCubeTexture||E.mapping===va)?(u===void 0&&(u=new bn(new Gr(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Zs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(b.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(Qi)),u.material.toneMapped=at.getTransfer(E.colorSpace)!==pt,(h!==E||f!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new bn(new Ma(2,2),new $t({name:"BackgroundMaterial",uniforms:Zs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=at.getTransfer(E.colorSpace)!==pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,b){A.getRGB(So,gp(n)),i.buffers.color.setClear(So.r,So.g,So.b,b,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:v,addToRenderList:m,dispose:T}}function $b(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,L,F,B,te){let ie=!1;const Q=h(B,F,L);r!==Q&&(r=Q,c(r.object)),ie=p(S,B,F,te),ie&&g(S,B,F,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,b(S,L,F,B),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,L,F){const B=F.wireframe===!0;let te=i[S.id];te===void 0&&(te={},i[S.id]=te);let ie=te[L.id];ie===void 0&&(ie={},te[L.id]=ie);let Q=ie[B];return Q===void 0&&(Q=f(l()),ie[B]=Q),Q}function f(S){const L=[],F=[],B=[];for(let te=0;te<t;te++)L[te]=0,F[te]=0,B[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,L,F,B){const te=r.attributes,ie=L.attributes;let Q=0;const W=F.getAttributes();for(const H in W)if(W[H].location>=0){const be=te[H];let we=ie[H];if(we===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),be===void 0||be.attribute!==we||we&&be.data!==we.data)return!0;Q++}return r.attributesNum!==Q||r.index!==B}function g(S,L,F,B){const te={},ie=L.attributes;let Q=0;const W=F.getAttributes();for(const H in W)if(W[H].location>=0){let be=ie[H];be===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(be=S.instanceColor));const we={};we.attribute=be,be&&be.data&&(we.data=be.data),te[H]=we,Q++}r.attributes=te,r.attributesNum=Q,r.index=B}function v(){const S=r.newAttributes;for(let L=0,F=S.length;L<F;L++)S[L]=0}function m(S){d(S,0)}function d(S,L){const F=r.newAttributes,B=r.enabledAttributes,te=r.attributeDivisors;F[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),te[S]!==L&&(n.vertexAttribDivisor(S,L),te[S]=L)}function T(){const S=r.newAttributes,L=r.enabledAttributes;for(let F=0,B=L.length;F<B;F++)L[F]!==S[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function A(S,L,F,B,te,ie,Q){Q===!0?n.vertexAttribIPointer(S,L,F,te,ie):n.vertexAttribPointer(S,L,F,B,te,ie)}function b(S,L,F,B){v();const te=B.attributes,ie=F.getAttributes(),Q=L.defaultAttributeValues;for(const W in ie){const H=ie[W];if(H.location>=0){let pe=te[W];if(pe===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const be=pe.normalized,we=pe.itemSize,Ge=e.get(pe);if(Ge===void 0)continue;const Ke=Ge.buffer,gt=Ge.type,ht=Ge.bytesPerElement,le=gt===n.INT||gt===n.UNSIGNED_INT||pe.gpuType===au;if(pe.isInterleavedBufferAttribute){const de=pe.data,Ue=de.stride,fe=pe.offset;if(de.isInstancedInterleavedBuffer){for(let se=0;se<H.locationSize;se++)d(H.location+se,de.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let se=0;se<H.locationSize;se++)A(H.location+se,we/H.locationSize,gt,be,Ue*ht,(fe+we/H.locationSize*se)*ht,le)}else{if(pe.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)d(H.location+de,pe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let de=0;de<H.locationSize;de++)m(H.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let de=0;de<H.locationSize;de++)A(H.location+de,we/H.locationSize,gt,be,we*ht,we/H.locationSize*de*ht,le)}}else if(Q!==void 0){const be=Q[W];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(H.location,be);break;case 3:n.vertexAttrib3fv(H.location,be);break;case 4:n.vertexAttrib4fv(H.location,be);break;default:n.vertexAttrib1fv(H.location,be)}}}}T()}function E(){V();for(const S in i){const L=i[S];for(const F in L){const B=L[F];for(const te in B)u(B[te].object),delete B[te];delete L[F]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const F in L){const B=L[F];for(const te in B)u(B[te].object),delete B[te];delete L[F]}delete i[S.id]}function I(S){for(const L in i){const F=i[L];if(F[S.id]===void 0)continue;const B=F[S.id];for(const te in B)u(B[te].object),delete B[te];delete F[S.id]}}function V(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:V,resetDefaultState:x,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Yb(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==In&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const V=I===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==gn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==jn&&!V)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:b,maxSamples:E,samples:P}}function Kb(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ui,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,A=T*4;let b=d.clippingState||null;l.value=b,b=u(g,f,A,p);for(let E=0;E!==A;++E)b[E]=t[E];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,b=p;A!==v;++A,b+=4)o.copy(h[A]).applyMatrix4(T,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Jb(n){let e=new WeakMap;function t(o,a){return a===Zl?o.mapping=us:a===Ql&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zl||a===Ql)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Fi=4,ed=[.125,.215,.35,.446,.526,.582],ss=20,Zb=256,fr=new Ea,td=new Je;let bl=null,Ml=0,Sl=0,El=!1;const Qb=new O;class nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Qb}=r;bl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,Ml,Sl),this._renderer.xr.enabled=El,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:xn,format:In,colorSpace:Js,depthBuffer:!1},s=id(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eM(r)),this._blurMaterial=nM(r,e,t),this._ggxMaterial=tM(r,e,t)}return s}_compileMaterial(e){const t=new bn(new nn,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,i,s,r){const l=new ln(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(td),h.toneMapping=Jn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new Gr,new ba({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,d=!0):(m.color.copy(td),d=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const E=this._cubeSize;Ns(s,b*E,A>2?E:0,E,E),h.setRenderTarget(s),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===us||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ns(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,fr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Fi?i-g+Fi:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Ns(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(a,fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Ns(e,m,d,3*v,2*v),s.setRenderTarget(e),s.render(a,fr)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ss-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ss;m>ss&&Ye(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);const d=[];let T=0;for(let I=0;I<ss;++I){const V=I/v,x=Math.exp(-V*V/2);d.push(x),I===0?T+=x:I<m&&(T+=2*x)}for(let I=0;I<d.length;I++)d[I]=d[I]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-i;const b=this._sizeLods[s],E=3*b*(s>A-Fi?s-A+Fi:0),P=4*(this._cubeSize-b);Ns(t,E,P,3*b,2*b),l.setRenderTarget(t),l.render(h,fr)}}function eM(n){const e=[],t=[],i=[];let s=n;const r=n-Fi+1+ed.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Fi?l=ed[o-n+Fi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,T=new Float32Array(v*g*p),A=new Float32Array(m*g*p),b=new Float32Array(d*g*p);for(let P=0;P<p;P++){const I=P%3*2/3-1,V=P>2?0:-1,x=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];T.set(x,v*g*P),A.set(f,m*g*P);const S=[P,P,P,P,P,P];b.set(S,d*g*P)}const E=new nn;E.setAttribute("position",new yn(T,v)),E.setAttribute("uv",new yn(A,m)),E.setAttribute("faceIndex",new yn(b,d)),i.push(new bn(E,null)),s>Fi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function id(n,e,t){const i=new un(n,e,t);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tM(n,e,t){return new $t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function nM(n,e,t){const i=new Float32Array(ss),s=new O(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function sd(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function rd(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ta(){return`

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
	`}function iM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zl||l===Ql,u=l===us||l===qs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new nd(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new nd(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Br("WebGLRenderer: "+i+" extension not supported."),s}}}function rM(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let A=0,b=T.length;A<b;A+=3){const E=T[A+0],P=T[A+1],I=T[A+2];f.push(E,P,P,I,I,E)}}else if(g!==void 0){const T=g.array;v=g.version;for(let A=0,b=T.length/3-1;A<b;A+=3){const E=A+0,P=A+1,I=A+2;f.push(E,P,P,I,I,E)}}else return;const m=new(hp(f)?mp:pp)(f,1);m.version=v;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function oM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*v[T];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function aM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lM(n,e,t){const i=new WeakMap,s=new Pt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){V.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let E=a.attributes.position.count*b,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const I=new Float32Array(E*P*4*h),V=new dp(I,E,P,h);V.type=jn,V.needsUpdate=!0;const x=b*4;for(let L=0;L<h;L++){const F=d[L],B=T[L],te=A[L],ie=E*P*4*L;for(let Q=0;Q<F.count;Q++){const W=Q*x;g===!0&&(s.fromBufferAttribute(F,Q),I[ie+W+0]=s.x,I[ie+W+1]=s.y,I[ie+W+2]=s.z,I[ie+W+3]=0),v===!0&&(s.fromBufferAttribute(B,Q),I[ie+W+4]=s.x,I[ie+W+5]=s.y,I[ie+W+6]=s.z,I[ie+W+7]=0),m===!0&&(s.fromBufferAttribute(te,Q),I[ie+W+8]=s.x,I[ie+W+9]=s.y,I[ie+W+10]=s.z,I[ie+W+11]=te.itemSize===4?s.w:1)}}f={count:h,texture:V,size:new Ee(E,P)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function cM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const uM={[qf]:"LINEAR_TONE_MAPPING",[Kf]:"REINHARD_TONE_MAPPING",[Jf]:"CINEON_TONE_MAPPING",[Zf]:"ACES_FILMIC_TONE_MAPPING",[ep]:"AGX_TONE_MAPPING",[tp]:"NEUTRAL_TONE_MAPPING",[Qf]:"CUSTOM_TONE_MAPPING"};function hM(n,e,t,i,s){const r=new un(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new un(e,t,{type:xn,depthBuffer:!1,stencilBuffer:!1}),a=new nn;a.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const l=new Yv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new bn(a,l),u=new Ea(-1,1,1,-1,0,1);let h=null,f=null,p=!1,g,v=null,m=[],d=!1;this.setSize=function(T,A){r.setSize(T,A),o.setSize(T,A);for(let b=0;b<m.length;b++){const E=m[b];E.setSize&&E.setSize(T,A)}},this.setEffects=function(T){m=T,d=m.length>0&&m[0].isRenderPass===!0;const A=r.width,b=r.height;for(let E=0;E<m.length;E++){const P=m[E];P.setSize&&P.setSize(A,b)}},this.begin=function(T,A){if(p||T.toneMapping===Jn&&m.length===0)return!1;if(v=A,A!==null){const b=A.width,E=A.height;(r.width!==b||r.height!==E)&&this.setSize(b,E)}return d===!1&&T.setRenderTarget(r),g=T.toneMapping,T.toneMapping=Jn,!0},this.hasRenderPass=function(){return d},this.end=function(T,A){T.toneMapping=g,p=!0;let b=r,E=o;for(let P=0;P<m.length;P++){const I=m[P];if(I.enabled!==!1&&(I.render(T,E,b,A),I.needsSwap!==!1)){const V=b;b=E,E=V}}if(h!==T.outputColorSpace||f!==T.toneMapping){h=T.outputColorSpace,f=T.toneMapping,l.defines={},at.getTransfer(h)===pt&&(l.defines.SRGB_TRANSFER="");const P=uM[f];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,T.setRenderTarget(v),T.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Ap=new Yt,Bc=new kr(1,1),Cp=new dp,Rp=new lv,Pp=new vp,od=[],ad=[],ld=new Float32Array(16),cd=new Float32Array(9),ud=new Float32Array(4);function nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=od[s];if(r===void 0&&(r=new Float32Array(s),od[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wa(n,e){let t=ad[e];t===void 0&&(t=new Int32Array(e),ad[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function mM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function gM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;ud.set(i),n.uniformMatrix2fv(this.addr,!1,ud),Bt(t,i)}}function _M(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;cd.set(i),n.uniformMatrix3fv(this.addr,!1,cd),Bt(t,i)}}function vM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;ld.set(i),n.uniformMatrix4fv(this.addr,!1,ld),Bt(t,i)}}function xM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function SM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function AM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Bc.compareFunction=t.isReversedDepthBuffer()?pu:fu,r=Bc):r=Ap,t.setTexture2D(e||r,s)}function CM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Rp,s)}function RM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pp,s)}function PM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cp,s)}function DM(n){switch(n){case 5126:return dM;case 35664:return fM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return _M;case 35676:return vM;case 5124:case 35670:return xM;case 35667:case 35671:return yM;case 35668:case 35672:return bM;case 35669:case 35673:return MM;case 5125:return SM;case 36294:return EM;case 36295:return TM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return PM}}function LM(n,e){n.uniform1fv(this.addr,e)}function IM(n,e){const t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function NM(n,e){const t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function UM(n,e){const t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function FM(n,e){const t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function OM(n,e){const t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function BM(n,e){const t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kM(n,e){n.uniform1iv(this.addr,e)}function zM(n,e){n.uniform2iv(this.addr,e)}function VM(n,e){n.uniform3iv(this.addr,e)}function HM(n,e){n.uniform4iv(this.addr,e)}function GM(n,e){n.uniform1uiv(this.addr,e)}function WM(n,e){n.uniform2uiv(this.addr,e)}function XM(n,e){n.uniform3uiv(this.addr,e)}function jM(n,e){n.uniform4uiv(this.addr,e)}function $M(n,e,t){const i=this.cache,s=e.length,r=wa(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Bc:o=Ap;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function YM(n,e,t){const i=this.cache,s=e.length,r=wa(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Rp,r[o])}function qM(n,e,t){const i=this.cache,s=e.length,r=wa(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pp,r[o])}function KM(n,e,t){const i=this.cache,s=e.length,r=wa(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cp,r[o])}function JM(n){switch(n){case 5126:return LM;case 35664:return IM;case 35665:return NM;case 35666:return UM;case 35674:return FM;case 35675:return OM;case 35676:return BM;case 5124:case 35670:return kM;case 35667:case 35671:return zM;case 35668:case 35672:return VM;case 35669:case 35673:return HM;case 5125:return GM;case 36294:return WM;case 36295:return XM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return KM}}class ZM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=DM(t.type)}}class QM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JM(t.type)}}class eS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function hd(n,e){n.seq.push(e),n.map[e.id]=e}function tS(n,e,t){const i=n.name,s=i.length;for(Tl.lastIndex=0;;){const r=Tl.exec(i),o=Tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hd(t,c===void 0?new ZM(a,n,e):new QM(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new eS(a),hd(t,h)),t=h}}}class ko{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);tS(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function dd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const nS=37297;let iS=0;function sS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const fd=new tt;function rS(n){at._getMatrix(fd,at.workingColorSpace,n);const e=`mat3( ${fd.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case Qo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function pd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+sS(n.getShaderSource(e),a)}else return r}function oS(n,e){const t=rS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const aS={[qf]:"Linear",[Kf]:"Reinhard",[Jf]:"Cineon",[Zf]:"ACESFilmic",[ep]:"AgX",[tp]:"Neutral",[Qf]:"Custom"};function lS(n,e){const t=aS[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Eo=new O;function cS(){at.getLuminanceCoefficients(Eo);const n=Eo.x.toFixed(4),e=Eo.y.toFixed(4),t=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function hS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _r(n){return n!==""}function md(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fS=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace(fS,mS)}const pS=new Map;function mS(n,e){let t=nt[e];if(t===void 0){const i=pS.get(e);if(i!==void 0)t=nt[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kc(t)}const gS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(n){return n.replace(gS,_S)}function _S(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const vS={[Io]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function xS(n){return vS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yS={[us]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE_UV"};function bS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":yS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const MS={[qs]:"ENVMAP_MODE_REFRACTION"};function SS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":MS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ES={[Yf]:"ENVMAP_BLENDING_MULTIPLY",[H_]:"ENVMAP_BLENDING_MIX",[G_]:"ENVMAP_BLENDING_ADD"};function TS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ES[n.combine]||"ENVMAP_BLENDING_NONE"}function wS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function AS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xS(t),c=bS(t),u=SS(t),h=TS(t),f=wS(t),p=uS(t),g=hS(r),v=s.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),d.length>0&&(d+=`
`)):(m=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),d=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Jn?lS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,oS("linearToOutputTexel",t.outputColorSpace),cS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),o=kc(o),o=md(o,t),o=gd(o,t),a=kc(a),a=md(a,t),a=gd(a,t),o=_d(o),a=_d(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=T+m+o,b=T+d+a,E=dd(s,s.VERTEX_SHADER,A),P=dd(s,s.FRAGMENT_SHADER,b);s.attachShader(v,E),s.attachShader(v,P),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(L){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(E)||"",te=s.getShaderInfoLog(P)||"",ie=F.trim(),Q=B.trim(),W=te.trim();let H=!0,pe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,E,P);else{const be=pd(s,E,"vertex"),we=pd(s,P,"fragment");ot("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ie+`
`+be+`
`+we)}else ie!==""?Ye("WebGLProgram: Program Info Log:",ie):(Q===""||W==="")&&(pe=!1);pe&&(L.diagnostics={runnable:H,programLog:ie,vertexShader:{log:Q,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(E),s.deleteShader(P),V=new ko(s,v),x=dS(s,v)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,nS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=P,this}let CS=0;class RS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PS(e),t.set(e,i)),i}}class PS{constructor(e){this.id=CS++,this.code=e,this.usedTimes=0}}function DS(n,e,t,i,s,r,o){const a=new gu,l=new RS,c=new Set,u=[],h=new Map,f=s.logarithmicDepthBuffer;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,L,F,B){const te=F.fog,ie=B.geometry,Q=x.isMeshStandardMaterial?F.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||Q),H=W&&W.mapping===va?W.image.height:null,pe=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const be=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,we=be!==void 0?be.length:0;let Ge=0;ie.morphAttributes.position!==void 0&&(Ge=1),ie.morphAttributes.normal!==void 0&&(Ge=2),ie.morphAttributes.color!==void 0&&(Ge=3);let Ke,gt,ht,le;if(pe){const dt=Gn[pe];Ke=dt.vertexShader,gt=dt.fragmentShader}else Ke=x.vertexShader,gt=x.fragmentShader,l.update(x),ht=l.getVertexShaderID(x),le=l.getFragmentShaderID(x);const de=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),fe=B.isInstancedMesh===!0,se=B.isBatchedMesh===!0,xe=!!x.map,w=!!x.matcap,D=!!W,z=!!x.aoMap,K=!!x.lightMap,j=!!x.bumpMap,Z=!!x.normalMap,C=!!x.displacementMap,ce=!!x.emissiveMap,re=!!x.metalnessMap,J=!!x.roughnessMap,ae=x.anisotropy>0,y=x.clearcoat>0,_=x.dispersion>0,U=x.iridescence>0,q=x.sheen>0,oe=x.transmission>0,Y=ae&&!!x.anisotropyMap,Pe=y&&!!x.clearcoatMap,_e=y&&!!x.clearcoatNormalMap,Ie=y&&!!x.clearcoatRoughnessMap,ke=U&&!!x.iridescenceMap,ge=U&&!!x.iridescenceThicknessMap,Se=q&&!!x.sheenColorMap,Ae=q&&!!x.sheenRoughnessMap,Ne=!!x.specularMap,Me=!!x.specularColorMap,et=!!x.specularIntensityMap,k=oe&&!!x.transmissionMap,Le=oe&&!!x.thicknessMap,ye=!!x.gradientMap,Fe=!!x.alphaMap,ve=x.alphaTest>0,he=!!x.alphaHash,Te=!!x.extensions;let Ze=Jn;x.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const Mt={shaderID:pe,shaderType:x.type,shaderName:x.name,vertexShader:Ke,fragmentShader:gt,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:se,batchingColor:se&&B._colorsTexture!==null,instancing:fe,instancingColor:fe&&B.instanceColor!==null,instancingMorph:fe&&B.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Js,alphaToCoverage:!!x.alphaToCoverage,map:xe,matcap:w,envMap:D,envMapMode:D&&W.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:K,bumpMap:j,normalMap:Z,displacementMap:C,emissiveMap:ce,normalMapObjectSpace:Z&&x.normalMapType===j_,normalMapTangentSpace:Z&&x.normalMapType===up,metalnessMap:re,roughnessMap:J,anisotropy:ae,anisotropyMap:Y,clearcoat:y,clearcoatMap:Pe,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ie,dispersion:_,iridescence:U,iridescenceMap:ke,iridescenceThicknessMap:ge,sheen:q,sheenColorMap:Se,sheenRoughnessMap:Ae,specularMap:Ne,specularColorMap:Me,specularIntensityMap:et,transmission:oe,transmissionMap:k,thicknessMap:Le,gradientMap:ye,opaque:x.transparent===!1&&x.blending===Xs&&x.alphaToCoverage===!1,alphaMap:Fe,alphaTest:ve,alphaHash:he,combine:x.combine,mapUv:xe&&v(x.map.channel),aoMapUv:z&&v(x.aoMap.channel),lightMapUv:K&&v(x.lightMap.channel),bumpMapUv:j&&v(x.bumpMap.channel),normalMapUv:Z&&v(x.normalMap.channel),displacementMapUv:C&&v(x.displacementMap.channel),emissiveMapUv:ce&&v(x.emissiveMap.channel),metalnessMapUv:re&&v(x.metalnessMap.channel),roughnessMapUv:J&&v(x.roughnessMap.channel),anisotropyMapUv:Y&&v(x.anisotropyMap.channel),clearcoatMapUv:Pe&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(x.sheenRoughnessMap.channel),specularMapUv:Ne&&v(x.specularMap.channel),specularColorMapUv:Me&&v(x.specularColorMap.channel),specularIntensityMapUv:et&&v(x.specularIntensityMap.channel),transmissionMapUv:k&&v(x.transmissionMap.channel),thicknessMapUv:Le&&v(x.thicknessMap.channel),alphaMapUv:Fe&&v(x.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Z||ae),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ie.attributes.uv&&(xe||Fe),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ue,skinning:B.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:ce&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wn,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Te&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&x.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function d(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(T(S,x),A(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function T(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function A(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),x.push(a.mask)}function b(x){const S=g[x.type];let L;if(S){const F=Gn[S];L=sa.clone(F.uniforms)}else L=x.uniforms;return L}function E(x,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new AS(n,S,x,r),u.push(L),h.set(S,L)),L}function P(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function I(x){l.remove(x)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:E,releaseProgram:P,releaseShaderCache:I,programs:u,dispose:V}}function LS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function IS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,g,v,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||IS),i.length>1&&i.sort(f||xd),s.length>1&&s.sort(f||xd)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function NS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new yd,n.set(i,[o])):s>=r.length?(o=new yd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function US(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Je};break;case"SpotLight":t={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function FS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OS=0;function BS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kS(n){const e=new US,t=FS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new Tt,o=new Tt;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,T=0,A=0,b=0,E=0,P=0,I=0;c.sort(BS);for(let x=0,S=c.length;x<S;x++){const L=c[x],F=L.color,B=L.intensity,te=L.distance;let ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ks?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=F.r*B,h+=F.g*B,f+=F.b*B;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(L.sh.coefficients[Q],B);I++}else if(L.isDirectionalLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,H=t.get(L);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=L.shadow.matrix,T++}i.directional[p]=Q,p++}else if(L.isSpotLight){const Q=e.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(F).multiplyScalar(B),Q.distance=te,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,i.spot[v]=Q;const W=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,W.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[v]=W.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=ie,b++}v++}else if(L.isRectAreaLight){const Q=e.get(L);Q.color.copy(F).multiplyScalar(B),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Q,m++}else if(L.isPointLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){const W=L.shadow,H=t.get(L);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=L.shadow.matrix,A++}i.point[g]=Q,g++}else if(L.isHemisphereLight){const Q=e.get(L);Q.skyColor.copy(L.color).multiplyScalar(B),Q.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[d]=Q,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const V=i.hash;(V.directionalLength!==p||V.pointLength!==g||V.spotLength!==v||V.rectAreaLength!==m||V.hemiLength!==d||V.numDirectionalShadows!==T||V.numPointShadows!==A||V.numSpotShadows!==b||V.numSpotMaps!==E||V.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+E-P,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,V.directionalLength=p,V.pointLength=g,V.spotLength=v,V.rectAreaLength=m,V.hemiLength=d,V.numDirectionalShadows=T,V.numPointShadows=A,V.numSpotShadows=b,V.numSpotMaps=E,V.numLightProbes=I,i.version=OS++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const A=c[d];if(A.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(A.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function bd(n){const e=new kS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new bd(n),e.set(s,[a])):r>=o.length?(a=new bd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const VS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HS=`uniform sampler2D shadow_pass;
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
}`,GS=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],WS=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Md=new Tt,pr=new O,wl=new O;function XS(n,e,t){let i=new vu;const s=new Ee,r=new Ee,o=new Pt,a=new Jv,l=new Zv,c={},u=t.maxTextureSize,h={[zi]:cn,[cn]:zi,[Wn]:Wn},f=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:VS,fragmentShader:HS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let d=this.type;this.render=function(P,I,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;P.type===$f&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Io);const x=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Kn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=d!==this.type;B&&I.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(ie=>ie.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,ie=P.length;te<ie;te++){const Q=P[te],W=Q.shadow;if(W===void 0){Ye("WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const H=W.getFrameExtents();if(s.multiply(H),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,W.mapSize.y=r.y)),W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===gr){if(Q.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new un(s.x,s.y,{format:Ks,type:xn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),W.map.texture.name=Q.name+".shadowMap",W.map.depthTexture=new kr(s.x,s.y,jn),W.map.depthTexture.name=Q.name+".shadowMapDepth",W.map.depthTexture.format=yi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Vt,W.map.depthTexture.magFilter=Vt}else{Q.isPointLight?(W.map=new xp(s.x),W.map.depthTexture=new Lv(s.x,Zn)):(W.map=new un(s.x,s.y),W.map.depthTexture=new kr(s.x,s.y,Zn)),W.map.depthTexture.name=Q.name+".shadowMap",W.map.depthTexture.format=yi;const be=n.state.buffers.depth.getReversed();this.type===Io?(W.map.depthTexture.compareFunction=be?pu:fu,W.map.depthTexture.minFilter=zt,W.map.depthTexture.magFilter=zt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Vt,W.map.depthTexture.magFilter=Vt)}W.camera.updateProjectionMatrix()}const pe=W.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<pe;be++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,be),n.clear();else{be===0&&(n.setRenderTarget(W.map),n.clear());const we=W.getViewport(be);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),F.viewport(o)}if(Q.isPointLight){const we=W.camera,Ge=W.matrix,Ke=Q.distance||we.far;Ke!==we.far&&(we.far=Ke,we.updateProjectionMatrix()),pr.setFromMatrixPosition(Q.matrixWorld),we.position.copy(pr),wl.copy(we.position),wl.add(GS[be]),we.up.copy(WS[be]),we.lookAt(wl),we.updateMatrixWorld(),Ge.makeTranslation(-pr.x,-pr.y,-pr.z),Md.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Md,we.coordinateSystem,we.reversedDepth)}else W.updateMatrices(Q);i=W.getFrustum(),b(I,V,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===gr&&T(W,V),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(x,S,L)};function T(P,I){const V=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new un(s.x,s.y,{format:Ks,type:xn})),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(I,null,V,f,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(I,null,V,p,v,null)}function A(P,I,V,x){let S=null;const L=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)S=L;else if(S=V.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const F=S.uuid,B=I.uuid;let te=c[F];te===void 0&&(te={},c[F]=te);let ie=te[B];ie===void 0&&(ie=S.clone(),te[B]=ie,I.addEventListener("dispose",E)),S=ie}if(S.visible=I.visible,S.wireframe=I.wireframe,x===gr?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:h[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,V.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=V}return S}function b(P,I,V,x,S){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===gr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);const B=e.update(P),te=P.material;if(Array.isArray(te)){const ie=B.groups;for(let Q=0,W=ie.length;Q<W;Q++){const H=ie[Q],pe=te[H.materialIndex];if(pe&&pe.visible){const be=A(P,pe,x,S);P.onBeforeShadow(n,P,I,V,B,be,H),n.renderBufferDirect(V,null,B,be,P,H),P.onAfterShadow(n,P,I,V,B,be,H)}}}else if(te.visible){const ie=A(P,te,x,S);P.onBeforeShadow(n,P,I,V,B,ie,null),n.renderBufferDirect(V,null,B,ie,P,null),P.onAfterShadow(n,P,I,V,B,ie,null)}}const F=P.children;for(let B=0,te=F.length;B<te;B++)b(F[B],I,V,x,S)}function E(P){P.target.removeEventListener("dispose",E);for(const V in c){const x=c[V],S=P.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const jS={[Xl]:jl,[$l]:Kl,[Yl]:Jl,[Ys]:ql,[jl]:Xl,[Kl]:$l,[Jl]:Yl,[ql]:Ys};function $S(n,e){function t(){let k=!1;const Le=new Pt;let ye=null;const Fe=new Pt(0,0,0,0);return{setMask:function(ve){ye!==ve&&!k&&(n.colorMask(ve,ve,ve,ve),ye=ve)},setLocked:function(ve){k=ve},setClear:function(ve,he,Te,Ze,Mt){Mt===!0&&(ve*=Ze,he*=Ze,Te*=Ze),Le.set(ve,he,Te,Ze),Fe.equals(Le)===!1&&(n.clearColor(ve,he,Te,Ze),Fe.copy(Le))},reset:function(){k=!1,ye=null,Fe.set(-1,0,0,0)}}}function i(){let k=!1,Le=!1,ye=null,Fe=null,ve=null;return{setReversed:function(he){if(Le!==he){const Te=e.get("EXT_clip_control");he?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),Le=he;const Ze=ve;ve=null,this.setClear(Ze)}},getReversed:function(){return Le},setTest:function(he){he?de(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(he){ye!==he&&!k&&(n.depthMask(he),ye=he)},setFunc:function(he){if(Le&&(he=jS[he]),Fe!==he){switch(he){case Xl:n.depthFunc(n.NEVER);break;case jl:n.depthFunc(n.ALWAYS);break;case $l:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case ql:n.depthFunc(n.GEQUAL);break;case Kl:n.depthFunc(n.GREATER);break;case Jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=he}},setLocked:function(he){k=he},setClear:function(he){ve!==he&&(Le&&(he=1-he),n.clearDepth(he),ve=he)},reset:function(){k=!1,ye=null,Fe=null,ve=null,Le=!1}}}function s(){let k=!1,Le=null,ye=null,Fe=null,ve=null,he=null,Te=null,Ze=null,Mt=null;return{setTest:function(dt){k||(dt?de(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(dt){Le!==dt&&!k&&(n.stencilMask(dt),Le=dt)},setFunc:function(dt,Bn,ei){(ye!==dt||Fe!==Bn||ve!==ei)&&(n.stencilFunc(dt,Bn,ei),ye=dt,Fe=Bn,ve=ei)},setOp:function(dt,Bn,ei){(he!==dt||Te!==Bn||Ze!==ei)&&(n.stencilOp(dt,Bn,ei),he=dt,Te=Bn,Ze=ei)},setLocked:function(dt){k=dt},setClear:function(dt){Mt!==dt&&(n.clearStencil(dt),Mt=dt)},reset:function(){k=!1,Le=null,ye=null,Fe=null,ve=null,he=null,Te=null,Ze=null,Mt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,T=null,A=null,b=null,E=null,P=null,I=new Je(0,0,0),V=0,x=!1,S=null,L=null,F=null,B=null,te=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,W=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),Q=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Q=W>=2);let pe=null,be={};const we=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),Ke=new Pt().fromArray(we),gt=new Pt().fromArray(Ge);function ht(k,Le,ye,Fe){const ve=new Uint8Array(4),he=n.createTexture();n.bindTexture(k,he),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<ye;Te++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(Le+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return he}const le={};le[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(Ys),j(!1),Z(xh),de(n.CULL_FACE),z(Kn);function de(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Ue(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function fe(k,Le){return h[k]!==Le?(n.bindFramebuffer(k,Le),h[k]=Le,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function se(k,Le){let ye=p,Fe=!1;if(k){ye=f.get(Le),ye===void 0&&(ye=[],f.set(Le,ye));const ve=k.textures;if(ye.length!==ve.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Te=ve.length;he<Te;he++)ye[he]=n.COLOR_ATTACHMENT0+he;ye.length=ve.length,Fe=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(ye)}function xe(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const w={[is]:n.FUNC_ADD,[T_]:n.FUNC_SUBTRACT,[w_]:n.FUNC_REVERSE_SUBTRACT};w[A_]=n.MIN,w[C_]=n.MAX;const D={[R_]:n.ZERO,[P_]:n.ONE,[D_]:n.SRC_COLOR,[Gl]:n.SRC_ALPHA,[O_]:n.SRC_ALPHA_SATURATE,[U_]:n.DST_COLOR,[I_]:n.DST_ALPHA,[L_]:n.ONE_MINUS_SRC_COLOR,[Wl]:n.ONE_MINUS_SRC_ALPHA,[F_]:n.ONE_MINUS_DST_COLOR,[N_]:n.ONE_MINUS_DST_ALPHA,[B_]:n.CONSTANT_COLOR,[k_]:n.ONE_MINUS_CONSTANT_COLOR,[z_]:n.CONSTANT_ALPHA,[V_]:n.ONE_MINUS_CONSTANT_ALPHA};function z(k,Le,ye,Fe,ve,he,Te,Ze,Mt,dt){if(k===Kn){v===!0&&(Ue(n.BLEND),v=!1);return}if(v===!1&&(de(n.BLEND),v=!0),k!==E_){if(k!==m||dt!==x){if((d!==is||b!==is)&&(n.blendEquation(n.FUNC_ADD),d=is,b=is),dt)switch(k){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hl:n.blendFunc(n.ONE,n.ONE);break;case yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",k);break}else switch(k){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yh:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",k);break}T=null,A=null,E=null,P=null,I.set(0,0,0),V=0,m=k,x=dt}return}ve=ve||Le,he=he||ye,Te=Te||Fe,(Le!==d||ve!==b)&&(n.blendEquationSeparate(w[Le],w[ve]),d=Le,b=ve),(ye!==T||Fe!==A||he!==E||Te!==P)&&(n.blendFuncSeparate(D[ye],D[Fe],D[he],D[Te]),T=ye,A=Fe,E=he,P=Te),(Ze.equals(I)===!1||Mt!==V)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Mt),I.copy(Ze),V=Mt),m=k,x=!1}function K(k,Le){k.side===Wn?Ue(n.CULL_FACE):de(n.CULL_FACE);let ye=k.side===cn;Le&&(ye=!ye),j(ye),k.blending===Xs&&k.transparent===!1?z(Kn):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Fe=k.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(k){S!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),S=k)}function Z(k){k!==M_?(de(n.CULL_FACE),k!==L&&(k===xh?n.cullFace(n.BACK):k===S_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),L=k}function C(k){k!==F&&(Q&&n.lineWidth(k),F=k)}function ce(k,Le,ye){k?(de(n.POLYGON_OFFSET_FILL),(B!==Le||te!==ye)&&(n.polygonOffset(Le,ye),B=Le,te=ye)):Ue(n.POLYGON_OFFSET_FILL)}function re(k){k?de(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function J(k){k===void 0&&(k=n.TEXTURE0+ie-1),pe!==k&&(n.activeTexture(k),pe=k)}function ae(k,Le,ye){ye===void 0&&(pe===null?ye=n.TEXTURE0+ie-1:ye=pe);let Fe=be[ye];Fe===void 0&&(Fe={type:void 0,texture:void 0},be[ye]=Fe),(Fe.type!==k||Fe.texture!==Le)&&(pe!==ye&&(n.activeTexture(ye),pe=ye),n.bindTexture(k,Le||le[k]),Fe.type=k,Fe.texture=Le)}function y(){const k=be[pe];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function q(){try{n.texSubImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function oe(){try{n.texSubImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function _e(){try{n.texStorage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function Ie(){try{n.texStorage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function ke(){try{n.texImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function ge(){try{n.texImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function Se(k){Ke.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Ke.copy(k))}function Ae(k){gt.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),gt.copy(k))}function Ne(k,Le){let ye=c.get(Le);ye===void 0&&(ye=new WeakMap,c.set(Le,ye));let Fe=ye.get(k);Fe===void 0&&(Fe=n.getUniformBlockIndex(Le,k.name),ye.set(k,Fe))}function Me(k,Le){const Fe=c.get(Le).get(k);l.get(Le)!==Fe&&(n.uniformBlockBinding(Le,Fe,k.__bindingPointIndex),l.set(Le,Fe))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,be={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,T=null,A=null,b=null,E=null,P=null,I=new Je(0,0,0),V=0,x=!1,S=null,L=null,F=null,B=null,te=null,Ke.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Ue,bindFramebuffer:fe,drawBuffers:se,useProgram:xe,setBlending:z,setMaterial:K,setFlipSided:j,setCullFace:Z,setLineWidth:C,setPolygonOffset:ce,setScissorTest:re,activeTexture:J,bindTexture:ae,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:ke,texImage3D:ge,updateUBOMapping:Ne,uniformBlockBinding:Me,texStorage2D:_e,texStorage3D:Ie,texSubImage2D:q,texSubImage3D:oe,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pe,scissor:Se,viewport:Ae,reset:et}}function YS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return p?new OffscreenCanvas(y,_):ta("canvas")}function v(y,_,U){let q=1;const oe=ae(y);if((oe.width>U||oe.height>U)&&(q=U/Math.max(oe.width,oe.height)),q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Y=Math.floor(q*oe.width),Pe=Math.floor(q*oe.height);h===void 0&&(h=g(Y,Pe));const _e=_?g(Y,Pe):h;return _e.width=Y,_e.height=Pe,_e.getContext("2d").drawImage(y,0,0,Y,Pe),Ye("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Y+"x"+Pe+")."),_e}else return"data"in y&&Ye("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){n.generateMipmap(y)}function T(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(y,_,U,q,oe=!1){if(y!==null){if(n[y]!==void 0)return n[y];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Y=_;if(_===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),_===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RG8UI),U===n.UNSIGNED_SHORT&&(Y=n.RG16UI),U===n.UNSIGNED_INT&&(Y=n.RG32UI),U===n.BYTE&&(Y=n.RG8I),U===n.SHORT&&(Y=n.RG16I),U===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),U===n.UNSIGNED_INT&&(Y=n.RGB32UI),U===n.BYTE&&(Y=n.RGB8I),U===n.SHORT&&(Y=n.RGB16I),U===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),U===n.UNSIGNED_INT&&(Y=n.RGBA32UI),U===n.BYTE&&(Y=n.RGBA8I),U===n.SHORT&&(Y=n.RGBA16I),U===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){const Pe=oe?Qo:at.getTransfer(q);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=Pe===pt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(y,_){let U;return y?_===null||_===Zn||_===Or?U=n.DEPTH24_STENCIL8:_===jn?U=n.DEPTH32F_STENCIL8:_===Fr&&(U=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Zn||_===Or?U=n.DEPTH_COMPONENT24:_===jn?U=n.DEPTH_COMPONENT32F:_===Fr&&(U=n.DEPTH_COMPONENT16),U}function E(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Vt&&y.minFilter!==zt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function P(y){const _=y.target;_.removeEventListener("dispose",P),V(_),_.isVideoTexture&&u.delete(_)}function I(y){const _=y.target;_.removeEventListener("dispose",I),S(_)}function V(y){const _=i.get(y);if(_.__webglInit===void 0)return;const U=y.source,q=f.get(U);if(q){const oe=q[_.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&x(y),Object.keys(q).length===0&&f.delete(U)}i.remove(y)}function x(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const U=y.source,q=f.get(U);delete q[_.__cacheKey],o.memory.textures--}function S(y){const _=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let oe=0;oe<_.__webglFramebuffer[q].length;oe++)n.deleteFramebuffer(_.__webglFramebuffer[q][oe]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=y.textures;for(let q=0,oe=U.length;q<oe;q++){const Y=i.get(U[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(U[q])}i.remove(y)}let L=0;function F(){L=0}function B(){const y=L;return y>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),L+=1,y}function te(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function ie(y,_){const U=i.get(y);if(y.isVideoTexture&&re(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&U.__version!==y.version){const q=y.image;if(q===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{le(U,y,_);return}}else y.isExternalTexture&&(U.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function Q(y,_){const U=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){le(U,y,_);return}else y.isExternalTexture&&(U.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function W(y,_){const U=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){le(U,y,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function H(y,_){const U=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&U.__version!==y.version){de(U,y,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}const pe={[ec]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[tc]:n.MIRRORED_REPEAT},be={[Vt]:n.NEAREST,[W_]:n.NEAREST_MIPMAP_NEAREST,[Zr]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[ja]:n.LINEAR_MIPMAP_NEAREST,[rs]:n.LINEAR_MIPMAP_LINEAR},we={[$_]:n.NEVER,[Z_]:n.ALWAYS,[Y_]:n.LESS,[fu]:n.LEQUAL,[q_]:n.EQUAL,[pu]:n.GEQUAL,[K_]:n.GREATER,[J_]:n.NOTEQUAL};function Ge(y,_){if(_.type===jn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zt||_.magFilter===ja||_.magFilter===Zr||_.magFilter===rs||_.minFilter===zt||_.minFilter===ja||_.minFilter===Zr||_.minFilter===rs)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,pe[_.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,pe[_.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,pe[_.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,be[_.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,be[_.minFilter]),_.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==Zr&&_.minFilter!==rs||_.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ke(y,_){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",P));const q=_.source;let oe=f.get(q);oe===void 0&&(oe={},f.set(q,oe));const Y=te(_);if(Y!==y.__cacheKey){oe[Y]===void 0&&(oe[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),oe[Y].usedTimes++;const Pe=oe[y.__cacheKey];Pe!==void 0&&(oe[y.__cacheKey].usedTimes--,Pe.usedTimes===0&&x(_)),y.__cacheKey=Y,y.__webglTexture=oe[Y].texture}return U}function gt(y,_,U){return Math.floor(Math.floor(y/U)/_)}function ht(y,_,U,q){const Y=y.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,U,q,_.data);else{Y.sort((ge,Se)=>ge.start-Se.start);let Pe=0;for(let ge=1;ge<Y.length;ge++){const Se=Y[Pe],Ae=Y[ge],Ne=Se.start+Se.count,Me=gt(Ae.start,_.width,4),et=gt(Se.start,_.width,4);Ae.start<=Ne+1&&Me===et&&gt(Ae.start+Ae.count-1,_.width,4)===Me?Se.count=Math.max(Se.count,Ae.start+Ae.count-Se.start):(++Pe,Y[Pe]=Ae)}Y.length=Pe+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),Ie=n.getParameter(n.UNPACK_SKIP_PIXELS),ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ge=0,Se=Y.length;ge<Se;ge++){const Ae=Y[ge],Ne=Math.floor(Ae.start/4),Me=Math.ceil(Ae.count/4),et=Ne%_.width,k=Math.floor(Ne/_.width),Le=Me,ye=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,et),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,et,k,Le,ye,U,q,_.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}}function le(y,_,U){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const oe=Ke(y,_),Y=_.source;t.bindTexture(q,y.__webglTexture,n.TEXTURE0+U);const Pe=i.get(Y);if(Y.version!==Pe.__version||oe===!0){t.activeTexture(n.TEXTURE0+U);const _e=at.getPrimaries(at.workingColorSpace),Ie=_.colorSpace===Ni?null:at.getPrimaries(_.colorSpace),ke=_.colorSpace===Ni||_e===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ge=v(_.image,!1,s.maxTextureSize);ge=J(_,ge);const Se=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type);let Ne=A(_.internalFormat,Se,Ae,_.colorSpace,_.isVideoTexture);Ge(q,_);let Me;const et=_.mipmaps,k=_.isVideoTexture!==!0,Le=Pe.__version===void 0||oe===!0,ye=Y.dataReady,Fe=E(_,ge);if(_.isDepthTexture)Ne=b(_.format===os,_.type),Le&&(k?t.texStorage2D(n.TEXTURE_2D,1,Ne,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ge.width,ge.height,0,Se,Ae,null));else if(_.isDataTexture)if(et.length>0){k&&Le&&t.texStorage2D(n.TEXTURE_2D,Fe,Ne,et[0].width,et[0].height);for(let ve=0,he=et.length;ve<he;ve++)Me=et[ve],k?ye&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Me.width,Me.height,Se,Ae,Me.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Me.width,Me.height,0,Se,Ae,Me.data);_.generateMipmaps=!1}else k?(Le&&t.texStorage2D(n.TEXTURE_2D,Fe,Ne,ge.width,ge.height),ye&&ht(_,ge,Se,Ae)):t.texImage2D(n.TEXTURE_2D,0,Ne,ge.width,ge.height,0,Se,Ae,ge.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){k&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Ne,et[0].width,et[0].height,ge.depth);for(let ve=0,he=et.length;ve<he;ve++)if(Me=et[ve],_.format!==In)if(Se!==null)if(k){if(ye)if(_.layerUpdates.size>0){const Te=Qh(Me.width,Me.height,_.format,_.type);for(const Ze of _.layerUpdates){const Mt=Me.data.subarray(Ze*Te/Me.data.BYTES_PER_ELEMENT,(Ze+1)*Te/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Ze,Me.width,Me.height,1,Se,Mt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Me.width,Me.height,ge.depth,Se,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Me.width,Me.height,ge.depth,0,Me.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Me.width,Me.height,ge.depth,Se,Ae,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Me.width,Me.height,ge.depth,0,Se,Ae,Me.data)}else{k&&Le&&t.texStorage2D(n.TEXTURE_2D,Fe,Ne,et[0].width,et[0].height);for(let ve=0,he=et.length;ve<he;ve++)Me=et[ve],_.format!==In?Se!==null?k?ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Me.width,Me.height,Se,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ne,Me.width,Me.height,0,Me.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ye&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Me.width,Me.height,Se,Ae,Me.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Me.width,Me.height,0,Se,Ae,Me.data)}else if(_.isDataArrayTexture)if(k){if(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Ne,ge.width,ge.height,ge.depth),ye)if(_.layerUpdates.size>0){const ve=Qh(ge.width,ge.height,_.format,_.type);for(const he of _.layerUpdates){const Te=ge.data.subarray(he*ve/ge.data.BYTES_PER_ELEMENT,(he+1)*ve/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,ge.width,ge.height,1,Se,Ae,Te)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Se,Ae,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ge.width,ge.height,ge.depth,0,Se,Ae,ge.data);else if(_.isData3DTexture)k?(Le&&t.texStorage3D(n.TEXTURE_3D,Fe,Ne,ge.width,ge.height,ge.depth),ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Se,Ae,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ge.width,ge.height,ge.depth,0,Se,Ae,ge.data);else if(_.isFramebufferTexture){if(Le)if(k)t.texStorage2D(n.TEXTURE_2D,Fe,Ne,ge.width,ge.height);else{let ve=ge.width,he=ge.height;for(let Te=0;Te<Fe;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ne,ve,he,0,Se,Ae,null),ve>>=1,he>>=1}}else if(et.length>0){if(k&&Le){const ve=ae(et[0]);t.texStorage2D(n.TEXTURE_2D,Fe,Ne,ve.width,ve.height)}for(let ve=0,he=et.length;ve<he;ve++)Me=et[ve],k?ye&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Se,Ae,Me):t.texImage2D(n.TEXTURE_2D,ve,Ne,Se,Ae,Me);_.generateMipmaps=!1}else if(k){if(Le){const ve=ae(ge);t.texStorage2D(n.TEXTURE_2D,Fe,Ne,ve.width,ve.height)}ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ae,ge)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Se,Ae,ge);m(_)&&d(q),Pe.__version=Y.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function de(y,_,U){if(_.image.length!==6)return;const q=Ke(y,_),oe=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+U);const Y=i.get(oe);if(oe.version!==Y.__version||q===!0){t.activeTexture(n.TEXTURE0+U);const Pe=at.getPrimaries(at.workingColorSpace),_e=_.colorSpace===Ni?null:at.getPrimaries(_.colorSpace),Ie=_.colorSpace===Ni||Pe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ke=_.isCompressedTexture||_.image[0].isCompressedTexture,ge=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let he=0;he<6;he++)!ke&&!ge?Se[he]=v(_.image[he],!0,s.maxCubemapSize):Se[he]=ge?_.image[he].image:_.image[he],Se[he]=J(_,Se[he]);const Ae=Se[0],Ne=r.convert(_.format,_.colorSpace),Me=r.convert(_.type),et=A(_.internalFormat,Ne,Me,_.colorSpace),k=_.isVideoTexture!==!0,Le=Y.__version===void 0||q===!0,ye=oe.dataReady;let Fe=E(_,Ae);Ge(n.TEXTURE_CUBE_MAP,_);let ve;if(ke){k&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,et,Ae.width,Ae.height);for(let he=0;he<6;he++){ve=Se[he].mipmaps;for(let Te=0;Te<ve.length;Te++){const Ze=ve[Te];_.format!==In?Ne!==null?k?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,0,0,Ze.width,Ze.height,Ne,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,et,Ze.width,Ze.height,0,Ze.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,0,0,Ze.width,Ze.height,Ne,Me,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te,et,Ze.width,Ze.height,0,Ne,Me,Ze.data)}}}else{if(ve=_.mipmaps,k&&Le){ve.length>0&&Fe++;const he=ae(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,et,he.width,he.height)}for(let he=0;he<6;he++)if(ge){k?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Se[he].width,Se[he].height,Ne,Me,Se[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,et,Se[he].width,Se[he].height,0,Ne,Me,Se[he].data);for(let Te=0;Te<ve.length;Te++){const Mt=ve[Te].image[he].image;k?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,0,0,Mt.width,Mt.height,Ne,Me,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,et,Mt.width,Mt.height,0,Ne,Me,Mt.data)}}else{k?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne,Me,Se[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,et,Ne,Me,Se[he]);for(let Te=0;Te<ve.length;Te++){const Ze=ve[Te];k?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,0,0,Ne,Me,Ze.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te+1,et,Ne,Me,Ze.image[he])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),Y.__version=oe.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Ue(y,_,U,q,oe,Y){const Pe=r.convert(U.format,U.colorSpace),_e=r.convert(U.type),Ie=A(U.internalFormat,Pe,_e,U.colorSpace),ke=i.get(_),ge=i.get(U);if(ge.__renderTarget=_,!ke.__hasExternalTextures){const Se=Math.max(1,_.width>>Y),Ae=Math.max(1,_.height>>Y);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,Y,Ie,Se,Ae,_.depth,0,Pe,_e,null):t.texImage2D(oe,Y,Ie,Se,Ae,0,Pe,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),ce(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,oe,ge.__webglTexture,0,C(_)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,oe,ge.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(y,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,y),_.depthBuffer){const q=_.depthTexture,oe=q&&q.isDepthTexture?q.type:null,Y=b(_.stencilBuffer,oe),Pe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ce(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(_),Y,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,y)}else{const q=_.textures;for(let oe=0;oe<q.length;oe++){const Y=q[oe],Pe=r.convert(Y.format,Y.colorSpace),_e=r.convert(Y.type),Ie=A(Y.internalFormat,Pe,_e,Y.colorSpace);ce(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(_),Ie,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(_),Ie,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(y,_,U){const q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(_.depthTexture);if(oe.__renderTarget=_,(!oe.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),oe.__webglTexture===void 0){oe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,_.depthTexture);const ke=r.convert(_.depthTexture.format),ge=r.convert(_.depthTexture.type);let Se;_.depthTexture.format===yi?Se=n.DEPTH_COMPONENT24:_.depthTexture.format===os&&(Se=n.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Se,_.width,_.height,0,ke,ge,null)}}else ie(_.depthTexture,0);const Y=oe.__webglTexture,Pe=C(_),_e=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Ie=_.depthTexture.format===os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===yi)ce(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ie,_e,Y,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,Ie,_e,Y,0);else if(_.depthTexture.format===os)ce(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ie,_e,Y,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,Ie,_e,Y,0);else throw new Error("Unknown depthTexture format")}function xe(y){const _=i.get(y),U=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const q=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const oe=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",oe)};q.addEventListener("dispose",oe),_.__depthDisposeCallback=oe}_.__boundDepthTexture=q}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)se(_.__webglFramebuffer[q],y,q);else{const q=y.texture.mipmaps;q&&q.length>0?se(_.__webglFramebuffer[0],y,0):se(_.__webglFramebuffer,y,0)}else if(U){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),fe(_.__webglDepthbuffer[q],y,!1);else{const oe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Y)}}else{const q=y.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),fe(_.__webglDepthbuffer,y,!1);else{const oe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(y,_,U){const q=i.get(y);_!==void 0&&Ue(q.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&xe(y)}function D(y){const _=y.texture,U=i.get(y),q=i.get(_);y.addEventListener("dispose",I);const oe=y.textures,Y=y.isWebGLCubeRenderTarget===!0,Pe=oe.length>1;if(Pe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,o.memory.textures++),Y){U.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[_e]=[];for(let Ie=0;Ie<_.mipmaps.length;Ie++)U.__webglFramebuffer[_e][Ie]=n.createFramebuffer()}else U.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let _e=0;_e<_.mipmaps.length;_e++)U.__webglFramebuffer[_e]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let _e=0,Ie=oe.length;_e<Ie;_e++){const ke=i.get(oe[_e]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&ce(y)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let _e=0;_e<oe.length;_e++){const Ie=oe[_e];U.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[_e]);const ke=r.convert(Ie.format,Ie.colorSpace),ge=r.convert(Ie.type),Se=A(Ie.internalFormat,ke,ge,Ie.colorSpace,y.isXRRenderTarget===!0),Ae=C(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Se,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,U.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(U.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,_);for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Ue(U.__webglFramebuffer[_e][Ie],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie);else Ue(U.__webglFramebuffer[_e],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let _e=0,Ie=oe.length;_e<Ie;_e++){const ke=oe[_e],ge=i.get(ke);let Se=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Se=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,ge.__webglTexture),Ge(Se,ke),Ue(U.__webglFramebuffer,y,ke,n.COLOR_ATTACHMENT0+_e,Se,0),m(ke)&&d(Se)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(_e=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,q.__webglTexture),Ge(_e,_),_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Ue(U.__webglFramebuffer[Ie],y,_,n.COLOR_ATTACHMENT0,_e,Ie);else Ue(U.__webglFramebuffer,y,_,n.COLOR_ATTACHMENT0,_e,0);m(_)&&d(_e),t.unbindTexture()}y.depthBuffer&&xe(y)}function z(y){const _=y.textures;for(let U=0,q=_.length;U<q;U++){const oe=_[U];if(m(oe)){const Y=T(y),Pe=i.get(oe).__webglTexture;t.bindTexture(Y,Pe),d(Y),t.unbindTexture()}}}const K=[],j=[];function Z(y){if(y.samples>0){if(ce(y)===!1){const _=y.textures,U=y.width,q=y.height;let oe=n.COLOR_BUFFER_BIT;const Y=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(y),_e=_.length>1;if(_e)for(let ke=0;ke<_.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ie=y.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ke=0;ke<_.length;ke++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[ke]);const ge=i.get(_[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,U,q,0,0,U,q,oe,n.NEAREST),l===!0&&(K.length=0,j.length=0,K.push(n.COLOR_ATTACHMENT0+ke),y.depthBuffer&&y.resolveDepthBuffer===!1&&(K.push(Y),j.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let ke=0;ke<_.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[ke]);const ge=i.get(_[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function C(y){return Math.min(s.maxSamples,y.samples)}function ce(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function re(y){const _=o.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function J(y,_){const U=y.colorSpace,q=y.format,oe=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||U!==Js&&U!==Ni&&(at.getTransfer(U)===pt?(q!==In||oe!==gn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",U)),_}function ae(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=ie,this.setTexture2DArray=Q,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=w,this.setupRenderTarget=D,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qS(n,e){function t(i,s=Ni){let r;const o=at.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===lu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===op)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ip)return n.BYTE;if(i===sp)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===au)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===ap)return n.ALPHA;if(i===lp)return n.RGB;if(i===In)return n.RGBA;if(i===yi)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===cp)return n.RED;if(i===uu)return n.RED_INTEGER;if(i===Ks)return n.RG;if(i===hu)return n.RG_INTEGER;if(i===du)return n.RGBA_INTEGER;if(i===No||i===Uo||i===Fo||i===Oo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===dc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oc||i===ac)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===cc)return r.COMPRESSED_R11_EAC;if(i===uc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===hc)return r.COMPRESSED_RG11_EAC;if(i===dc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===bc||i===Mc||i===Sc||i===Ec||i===Tc||i===wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_c)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ac||i===Cc||i===Rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ac)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pc||i===Dc||i===Lc||i===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const KS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JS=`
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

}`;class ZS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Mp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $t({vertexShader:KS,fragmentShader:JS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new Ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QS extends ds{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new ZS,d={},T=t.getContextAttributes();let A=null,b=null;const E=[],P=[],I=new Ee;let V=null;const x=new ln;x.viewport=new Pt;const S=new ln;S.viewport=new Pt;const L=[x,S],F=new ox;let B=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let de=E[le];return de===void 0&&(de=new pl,E[le]=de),de.getTargetRaySpace()},this.getControllerGrip=function(le){let de=E[le];return de===void 0&&(de=new pl,E[le]=de),de.getGripSpace()},this.getHand=function(le){let de=E[le];return de===void 0&&(de=new pl,E[le]=de),de.getHandSpace()};function ie(le){const de=P.indexOf(le.inputSource);if(de===-1)return;const Ue=E[de];Ue!==void 0&&(Ue.update(le.inputSource,le.frame,c||o),Ue.dispatchEvent({type:le.type,data:le.inputSource}))}function Q(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",W);for(let le=0;le<E.length;le++){const de=P[le];de!==null&&(P[le]=null,E[le].disconnect(de))}B=null,te=null,m.reset();for(const le in d)delete d[le];e.setRenderTarget(A),p=null,f=null,h=null,s=null,b=null,ht.stop(),i.isPresenting=!1,e.setPixelRatio(V),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",W),T.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,fe=null,se=null;T.depth&&(se=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=T.stencil?os:yi,fe=T.stencil?Or:Zn);const xe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new un(f.textureWidth,f.textureHeight,{format:In,type:gn,depthTexture:new kr(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ue={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ue),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new un(p.framebufferWidth,p.framebufferHeight,{format:In,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ht.setContext(s),ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(le){for(let de=0;de<le.removed.length;de++){const Ue=le.removed[de],fe=P.indexOf(Ue);fe>=0&&(P[fe]=null,E[fe].disconnect(Ue))}for(let de=0;de<le.added.length;de++){const Ue=le.added[de];let fe=P.indexOf(Ue);if(fe===-1){for(let xe=0;xe<E.length;xe++)if(xe>=P.length){P.push(Ue),fe=xe;break}else if(P[xe]===null){P[xe]=Ue,fe=xe;break}if(fe===-1)break}const se=E[fe];se&&se.connect(Ue)}}const H=new O,pe=new O;function be(le,de,Ue){H.setFromMatrixPosition(de.matrixWorld),pe.setFromMatrixPosition(Ue.matrixWorld);const fe=H.distanceTo(pe),se=de.projectionMatrix.elements,xe=Ue.projectionMatrix.elements,w=se[14]/(se[10]-1),D=se[14]/(se[10]+1),z=(se[9]+1)/se[5],K=(se[9]-1)/se[5],j=(se[8]-1)/se[0],Z=(xe[8]+1)/xe[0],C=w*j,ce=w*Z,re=fe/(-j+Z),J=re*-j;if(de.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(J),le.translateZ(re),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),se[10]===-1)le.projectionMatrix.copy(de.projectionMatrix),le.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ae=w+re,y=D+re,_=C-J,U=ce+(fe-J),q=z*D/y*ae,oe=K*D/y*ae;le.projectionMatrix.makePerspective(_,U,q,oe,ae,y),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function we(le,de){de===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(de.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let de=le.near,Ue=le.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(Ue=m.depthFar)),F.near=S.near=x.near=de,F.far=S.far=x.far=Ue,(B!==F.near||te!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,te=F.far),F.layers.mask=le.layers.mask|6,x.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const fe=le.parent,se=F.cameras;we(F,fe);for(let xe=0;xe<se.length;xe++)we(se[xe],fe);se.length===2?be(F,x,S):F.projectionMatrix.copy(x.projectionMatrix),Ge(le,F,fe)};function Ge(le,de,Ue){Ue===null?le.matrix.copy(de.matrixWorld):(le.matrix.copy(Ue.matrixWorld),le.matrix.invert(),le.matrix.multiply(de.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(de.projectionMatrix),le.projectionMatrixInverse.copy(de.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=ia*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(le){l=le,f!==null&&(f.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(le){return d[le]};let Ke=null;function gt(le,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const Ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let fe=!1;Ue.length!==F.cameras.length&&(F.cameras.length=0,fe=!0);for(let D=0;D<Ue.length;D++){const z=Ue[D];let K=null;if(p!==null)K=p.getViewport(z);else{const Z=h.getViewSubImage(f,z);K=Z.viewport,D===0&&(e.setRenderTargetTextures(b,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(b))}let j=L[D];j===void 0&&(j=new ln,j.layers.enable(D),j.viewport=new Pt,L[D]=j),j.matrix.fromArray(z.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(z.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(K.x,K.y,K.width,K.height),D===0&&(F.matrix.copy(j.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),fe===!0&&F.cameras.push(j)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const D=h.getDepthInformation(Ue[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(se&&se.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let D=0;D<Ue.length;D++){const z=Ue[D].camera;if(z){let K=d[z];K||(K=new Mp,d[z]=K);const j=h.getCameraImage(z);K.sourceTexture=j}}}}for(let Ue=0;Ue<E.length;Ue++){const fe=P[Ue],se=E[Ue];fe!==null&&se!==void 0&&se.update(fe,de,c||o)}Ke&&Ke(le,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const ht=new wp;ht.setAnimationLoop(gt),this.setAnimationLoop=function(le){Ke=le},this.dispose=function(){}}}const es=new Qn,e1=new Tt;function t1(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,gp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,A,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),A=T.envMap,b=T.envMapRotation;A&&(m.envMap.value=A,es.copy(b),es.x*=-1,es.y*=-1,es.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(e1.makeRotationFromEuler(es)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function n1(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const b=A.program;i.uniformBlockBinding(T,b)}function c(T,A){let b=s[T.id];b===void 0&&(g(T),b=u(T),s[T.id]=b,T.addEventListener("dispose",m));const E=A.program;i.updateUBOMapping(T,E);const P=e.render.frame;r[T.id]!==P&&(f(T),r[T.id]=P)}function u(T){const A=h();T.__bindingPointIndex=A;const b=n.createBuffer(),E=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,E,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,b),b}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const A=s[T.id],b=T.uniforms,E=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let P=0,I=b.length;P<I;P++){const V=Array.isArray(b[P])?b[P]:[b[P]];for(let x=0,S=V.length;x<S;x++){const L=V[x];if(p(L,P,x,E)===!0){const F=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let te=0;for(let ie=0;ie<B.length;ie++){const Q=B[ie],W=v(Q);typeof Q=="number"||typeof Q=="boolean"?(L.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,F+te,L.__data)):Q.isMatrix3?(L.__data[0]=Q.elements[0],L.__data[1]=Q.elements[1],L.__data[2]=Q.elements[2],L.__data[3]=0,L.__data[4]=Q.elements[3],L.__data[5]=Q.elements[4],L.__data[6]=Q.elements[5],L.__data[7]=0,L.__data[8]=Q.elements[6],L.__data[9]=Q.elements[7],L.__data[10]=Q.elements[8],L.__data[11]=0):(Q.toArray(L.__data,te),te+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,A,b,E){const P=T.value,I=A+"_"+b;if(E[I]===void 0)return typeof P=="number"||typeof P=="boolean"?E[I]=P:E[I]=P.clone(),!0;{const V=E[I];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return E[I]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function g(T){const A=T.uniforms;let b=0;const E=16;for(let I=0,V=A.length;I<V;I++){const x=Array.isArray(A[I])?A[I]:[A[I]];for(let S=0,L=x.length;S<L;S++){const F=x[S],B=Array.isArray(F.value)?F.value:[F.value];for(let te=0,ie=B.length;te<ie;te++){const Q=B[te],W=v(Q),H=b%E,pe=H%W.boundary,be=H+pe;b+=pe,be!==0&&E-be<W.storage&&(b+=E-be),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=W.storage}}}const P=b%E;return P>0&&(b+=E-P),T.__size=b,T.__cache={},this}function v(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const b=o.indexOf(A.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}const i1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function s1(){return zn===null&&(zn=new Av(i1,16,16,Ks,xn),zn.name="DFG_LUT",zn.minFilter=zt,zn.magFilter=zt,zn.wrapS=fi,zn.wrapT=fi,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class r1{constructor(e={}){const{canvas:t=Q_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=gn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,m=new Set([du,hu,uu]),d=new Set([gn,Zn,Fr,Or,lu,cu]),T=new Uint32Array(4),A=new Int32Array(4);let b=null,E=null;const P=[],I=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=mn;let L=0,F=0,B=null,te=-1,ie=null;const Q=new Pt,W=new Pt;let H=null;const pe=new Je(0);let be=0,we=t.width,Ge=t.height,Ke=1,gt=null,ht=null;const le=new Pt(0,0,we,Ge),de=new Pt(0,0,we,Ge);let Ue=!1;const fe=new vu;let se=!1,xe=!1;const w=new Tt,D=new O,z=new Pt,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function Z(){return B===null?Ke:1}let C=i;function ce(M,G){return t.getContext(M,G)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ou}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",dt,!1),C===null){const G="webgl2";if(C=ce(G,M),C===null)throw ce(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw ot("WebGLRenderer: "+M.message),M}let re,J,ae,y,_,U,q,oe,Y,Pe,_e,Ie,ke,ge,Se,Ae,Ne,Me,et,k,Le,ye,Fe,ve;function he(){re=new sM(C),re.init(),ye=new qS(C,re),J=new qb(C,re,e,ye),ae=new $S(C,re),J.reversedDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),y=new aM(C),_=new LS,U=new YS(C,re,ae,_,J,ye,y),q=new Jb(x),oe=new iM(x),Y=new hx(C),Fe=new $b(C,Y),Pe=new rM(C,Y,y,Fe),_e=new cM(C,Pe,Y,y),et=new lM(C,J,U),Ae=new Kb(_),Ie=new DS(x,q,oe,re,J,Fe,Ae),ke=new t1(x,_),ge=new NS,Se=new zS(re),Me=new jb(x,q,oe,ae,_e,g,l),Ne=new XS(x,_e,J),ve=new n1(C,y,J,ae),k=new Yb(C,re,y),Le=new oM(C,re,y),y.programs=Ie.programs,x.capabilities=J,x.extensions=re,x.properties=_,x.renderLists=ge,x.shadowMap=Ne,x.state=ae,x.info=y}he(),v!==gn&&(V=new hM(v,t.width,t.height,s,r));const Te=new QS(x,C);this.xr=Te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=re.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=re.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ke},this.setPixelRatio=function(M){M!==void 0&&(Ke=M,this.setSize(we,Ge,!1))},this.getSize=function(M){return M.set(we,Ge)},this.setSize=function(M,G,ne=!0){if(Te.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}we=M,Ge=G,t.width=Math.floor(M*Ke),t.height=Math.floor(G*Ke),ne===!0&&(t.style.width=M+"px",t.style.height=G+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,M,G)},this.getDrawingBufferSize=function(M){return M.set(we*Ke,Ge*Ke).floor()},this.setDrawingBufferSize=function(M,G,ne){we=M,Ge=G,Ke=ne,t.width=Math.floor(M*ne),t.height=Math.floor(G*ne),this.setViewport(0,0,M,G)},this.setEffects=function(M){if(v===gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let G=0;G<M.length;G++)if(M[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,G,ne,ee){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,G,ne,ee),ae.viewport(Q.copy(le).multiplyScalar(Ke).round())},this.getScissor=function(M){return M.copy(de)},this.setScissor=function(M,G,ne,ee){M.isVector4?de.set(M.x,M.y,M.z,M.w):de.set(M,G,ne,ee),ae.scissor(W.copy(de).multiplyScalar(Ke).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(M){ae.setScissorTest(Ue=M)},this.setOpaqueSort=function(M){gt=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(M=!0,G=!0,ne=!0){let ee=0;if(M){let $=!1;if(B!==null){const Ce=B.texture.format;$=m.has(Ce)}if($){const Ce=B.texture.type,Oe=d.has(Ce),De=Me.getClearColor(),Be=Me.getClearAlpha(),ze=De.r,je=De.g,Ve=De.b;Oe?(T[0]=ze,T[1]=je,T[2]=Ve,T[3]=Be,C.clearBufferuiv(C.COLOR,0,T)):(A[0]=ze,A[1]=je,A[2]=Ve,A[3]=Be,C.clearBufferiv(C.COLOR,0,A))}else ee|=C.COLOR_BUFFER_BIT}G&&(ee|=C.DEPTH_BUFFER_BIT),ne&&(ee|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Me.dispose(),ge.dispose(),Se.dispose(),_.dispose(),q.dispose(),oe.dispose(),_e.dispose(),Fe.dispose(),ve.dispose(),Ie.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Tu),Te.removeEventListener("sessionend",wu),Gi.stop()};function Ze(M){M.preventDefault(),na("WebGLRenderer: Context Lost."),S=!0}function Mt(){na("WebGLRenderer: Context Restored."),S=!1;const M=y.autoReset,G=Ne.enabled,ne=Ne.autoUpdate,ee=Ne.needsUpdate,$=Ne.type;he(),y.autoReset=M,Ne.enabled=G,Ne.autoUpdate=ne,Ne.needsUpdate=ee,Ne.type=$}function dt(M){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Bn(M){const G=M.target;G.removeEventListener("dispose",Bn),ei(G)}function ei(M){Op(M),_.remove(M)}function Op(M){const G=_.get(M).programs;G!==void 0&&(G.forEach(function(ne){Ie.releaseProgram(ne)}),M.isShaderMaterial&&Ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,G,ne,ee,$,Ce){G===null&&(G=K);const Oe=$.isMesh&&$.matrixWorld.determinant()<0,De=kp(M,G,ne,ee,$);ae.setMaterial(ee,Oe);let Be=ne.index,ze=1;if(ee.wireframe===!0){if(Be=Pe.getWireframeAttribute(ne),Be===void 0)return;ze=2}const je=ne.drawRange,Ve=ne.attributes.position;let st=je.start*ze,_t=(je.start+je.count)*ze;Ce!==null&&(st=Math.max(st,Ce.start*ze),_t=Math.min(_t,(Ce.start+Ce.count)*ze)),Be!==null?(st=Math.max(st,0),_t=Math.min(_t,Be.count)):Ve!=null&&(st=Math.max(st,0),_t=Math.min(_t,Ve.count));const Ct=_t-st;if(Ct<0||Ct===1/0)return;Fe.setup($,ee,De,ne,Be);let Rt,yt=k;if(Be!==null&&(Rt=Y.get(Be),yt=Le,yt.setIndex(Rt)),$.isMesh)ee.wireframe===!0?(ae.setLineWidth(ee.wireframeLinewidth*Z()),yt.setMode(C.LINES)):yt.setMode(C.TRIANGLES);else if($.isLine){let He=ee.linewidth;He===void 0&&(He=1),ae.setLineWidth(He*Z()),$.isLineSegments?yt.setMode(C.LINES):$.isLineLoop?yt.setMode(C.LINE_LOOP):yt.setMode(C.LINE_STRIP)}else $.isPoints?yt.setMode(C.POINTS):$.isSprite&&yt.setMode(C.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Br("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))yt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const He=$._multiDrawStarts,ft=$._multiDrawCounts,lt=$._multiDrawCount,hn=Be?Y.get(Be).bytesPerElement:1,ps=_.get(ee).currentProgram.getUniforms();for(let dn=0;dn<lt;dn++)ps.setValue(C,"_gl_DrawID",dn),yt.render(He[dn]/hn,ft[dn])}else if($.isInstancedMesh)yt.renderInstances(st,Ct,$.count);else if(ne.isInstancedBufferGeometry){const He=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,ft=Math.min(ne.instanceCount,He);yt.renderInstances(st,Ct,ft)}else yt.render(st,Ct)};function Eu(M,G,ne){M.transparent===!0&&M.side===Wn&&M.forceSinglePass===!1?(M.side=cn,M.needsUpdate=!0,jr(M,G,ne),M.side=zi,M.needsUpdate=!0,jr(M,G,ne),M.side=Wn):jr(M,G,ne)}this.compile=function(M,G,ne=null){ne===null&&(ne=M),E=Se.get(ne),E.init(G),I.push(E),ne.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),M!==ne&&M.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights();const ee=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ce=$.material;if(Ce)if(Array.isArray(Ce))for(let Oe=0;Oe<Ce.length;Oe++){const De=Ce[Oe];Eu(De,ne,$),ee.add(De)}else Eu(Ce,ne,$),ee.add(Ce)}),E=I.pop(),ee},this.compileAsync=function(M,G,ne=null){const ee=this.compile(M,G,ne);return new Promise($=>{function Ce(){if(ee.forEach(function(Oe){_.get(Oe).currentProgram.isReady()&&ee.delete(Oe)}),ee.size===0){$(M);return}setTimeout(Ce,10)}re.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Ra=null;function Bp(M){Ra&&Ra(M)}function Tu(){Gi.stop()}function wu(){Gi.start()}const Gi=new wp;Gi.setAnimationLoop(Bp),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(M){Ra=M,Te.setAnimationLoop(M),M===null?Gi.stop():Gi.start()},Te.addEventListener("sessionstart",Tu),Te.addEventListener("sessionend",wu),this.render=function(M,G){if(G!==void 0&&G.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const ne=Te.enabled===!0&&Te.isPresenting===!0,ee=V!==null&&(B===null||ne)&&V.begin(x,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(G),G=Te.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,G,B),E=Se.get(M,I.length),E.init(G),I.push(E),w.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),fe.setFromProjectionMatrix(w,$n,G.reversedDepth),xe=this.localClippingEnabled,se=Ae.init(this.clippingPlanes,xe),b=ge.get(M,P.length),b.init(),P.push(b),Te.enabled===!0&&Te.isPresenting===!0){const Oe=x.xr.getDepthSensingMesh();Oe!==null&&Pa(Oe,G,-1/0,x.sortObjects)}Pa(M,G,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(gt,ht),j=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,j&&Me.addToRenderList(b,M),this.info.render.frame++,se===!0&&Ae.beginShadows();const $=E.state.shadowsArray;if(Ne.render($,M,G),se===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&V.hasRenderPass())===!1){const Oe=b.opaque,De=b.transmissive;if(E.setupLights(),G.isArrayCamera){const Be=G.cameras;if(De.length>0)for(let ze=0,je=Be.length;ze<je;ze++){const Ve=Be[ze];Cu(Oe,De,M,Ve)}j&&Me.render(M);for(let ze=0,je=Be.length;ze<je;ze++){const Ve=Be[ze];Au(b,M,Ve,Ve.viewport)}}else De.length>0&&Cu(Oe,De,M,G),j&&Me.render(M),Au(b,M,G)}B!==null&&F===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),ee&&V.end(x),M.isScene===!0&&M.onAfterRender(x,M,G),Fe.resetDefaultState(),te=-1,ie=null,I.pop(),I.length>0?(E=I[I.length-1],se===!0&&Ae.setGlobalState(x.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?b=P[P.length-1]:b=null};function Pa(M,G,ne,ee){if(M.visible===!1)return;if(M.layers.test(G.layers)){if(M.isGroup)ne=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(G);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||fe.intersectsSprite(M)){ee&&z.setFromMatrixPosition(M.matrixWorld).applyMatrix4(w);const Oe=_e.update(M),De=M.material;De.visible&&b.push(M,Oe,De,ne,z.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||fe.intersectsObject(M))){const Oe=_e.update(M),De=M.material;if(ee&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),z.copy(M.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),z.copy(Oe.boundingSphere.center)),z.applyMatrix4(M.matrixWorld).applyMatrix4(w)),Array.isArray(De)){const Be=Oe.groups;for(let ze=0,je=Be.length;ze<je;ze++){const Ve=Be[ze],st=De[Ve.materialIndex];st&&st.visible&&b.push(M,Oe,st,ne,z.z,Ve)}}else De.visible&&b.push(M,Oe,De,ne,z.z,null)}}const Ce=M.children;for(let Oe=0,De=Ce.length;Oe<De;Oe++)Pa(Ce[Oe],G,ne,ee)}function Au(M,G,ne,ee){const{opaque:$,transmissive:Ce,transparent:Oe}=M;E.setupLightsView(ne),se===!0&&Ae.setGlobalState(x.clippingPlanes,ne),ee&&ae.viewport(Q.copy(ee)),$.length>0&&Xr($,G,ne),Ce.length>0&&Xr(Ce,G,ne),Oe.length>0&&Xr(Oe,G,ne),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Cu(M,G,ne,ee){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ee.id]===void 0){const st=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ee.id]=new un(1,1,{generateMipmaps:!0,type:st?xn:gn,minFilter:rs,samples:J.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Ce=E.state.transmissionRenderTarget[ee.id],Oe=ee.viewport||Q;Ce.setSize(Oe.z*x.transmissionResolutionScale,Oe.w*x.transmissionResolutionScale);const De=x.getRenderTarget(),Be=x.getActiveCubeFace(),ze=x.getActiveMipmapLevel();x.setRenderTarget(Ce),x.getClearColor(pe),be=x.getClearAlpha(),be<1&&x.setClearColor(16777215,.5),x.clear(),j&&Me.render(ne);const je=x.toneMapping;x.toneMapping=Jn;const Ve=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),E.setupLightsView(ee),se===!0&&Ae.setGlobalState(x.clippingPlanes,ee),Xr(M,ne,ee),U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce),re.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let _t=0,Ct=G.length;_t<Ct;_t++){const Rt=G[_t],{object:yt,geometry:He,material:ft,group:lt}=Rt;if(ft.side===Wn&&yt.layers.test(ee.layers)){const hn=ft.side;ft.side=cn,ft.needsUpdate=!0,Ru(yt,ne,ee,He,ft,lt),ft.side=hn,ft.needsUpdate=!0,st=!0}}st===!0&&(U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce))}x.setRenderTarget(De,Be,ze),x.setClearColor(pe,be),Ve!==void 0&&(ee.viewport=Ve),x.toneMapping=je}function Xr(M,G,ne){const ee=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Ce=M.length;$<Ce;$++){const Oe=M[$],{object:De,geometry:Be,group:ze}=Oe;let je=Oe.material;je.allowOverride===!0&&ee!==null&&(je=ee),De.layers.test(ne.layers)&&Ru(De,G,ne,Be,je,ze)}}function Ru(M,G,ne,ee,$,Ce){M.onBeforeRender(x,G,ne,ee,$,Ce),M.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(x,G,ne,ee,M,Ce),$.transparent===!0&&$.side===Wn&&$.forceSinglePass===!1?($.side=cn,$.needsUpdate=!0,x.renderBufferDirect(ne,G,ee,$,M,Ce),$.side=zi,$.needsUpdate=!0,x.renderBufferDirect(ne,G,ee,$,M,Ce),$.side=Wn):x.renderBufferDirect(ne,G,ee,$,M,Ce),M.onAfterRender(x,G,ne,ee,$,Ce)}function jr(M,G,ne){G.isScene!==!0&&(G=K);const ee=_.get(M),$=E.state.lights,Ce=E.state.shadowsArray,Oe=$.state.version,De=Ie.getParameters(M,$.state,Ce,G,ne),Be=Ie.getProgramCacheKey(De);let ze=ee.programs;ee.environment=M.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(M.isMeshStandardMaterial?oe:q).get(M.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&M.envMap===null?G.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",Bn),ze=new Map,ee.programs=ze);let je=ze.get(Be);if(je!==void 0){if(ee.currentProgram===je&&ee.lightsStateVersion===Oe)return Du(M,De),je}else De.uniforms=Ie.getUniforms(M),M.onBeforeCompile(De,x),je=Ie.acquireProgram(De,Be),ze.set(Be,je),ee.uniforms=De.uniforms;const Ve=ee.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ve.clippingPlanes=Ae.uniform),Du(M,De),ee.needsLights=Vp(M),ee.lightsStateVersion=Oe,ee.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMap.value=$.state.directionalShadowMap,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotShadowMap.value=$.state.spotShadowMap,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMap.value=$.state.pointShadowMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.currentProgram=je,ee.uniformsList=null,je}function Pu(M){if(M.uniformsList===null){const G=M.currentProgram.getUniforms();M.uniformsList=ko.seqWithValue(G.seq,M.uniforms)}return M.uniformsList}function Du(M,G){const ne=_.get(M);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function kp(M,G,ne,ee,$){G.isScene!==!0&&(G=K),U.resetTextureUnits();const Ce=G.fog,Oe=ee.isMeshStandardMaterial?G.environment:null,De=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Js,Be=(ee.isMeshStandardMaterial?oe:q).get(ee.envMap||Oe),ze=ee.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,je=!!ne.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ve=!!ne.morphAttributes.position,st=!!ne.morphAttributes.normal,_t=!!ne.morphAttributes.color;let Ct=Jn;ee.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ct=x.toneMapping);const Rt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,yt=Rt!==void 0?Rt.length:0,He=_.get(ee),ft=E.state.lights;if(se===!0&&(xe===!0||M!==ie)){const qt=M===ie&&ee.id===te;Ae.setState(ee,M,qt)}let lt=!1;ee.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ft.state.version||He.outputColorSpace!==De||$.isBatchedMesh&&He.batching===!1||!$.isBatchedMesh&&He.batching===!0||$.isBatchedMesh&&He.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&He.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&He.instancing===!1||!$.isInstancedMesh&&He.instancing===!0||$.isSkinnedMesh&&He.skinning===!1||!$.isSkinnedMesh&&He.skinning===!0||$.isInstancedMesh&&He.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&He.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&He.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&He.instancingMorph===!1&&$.morphTexture!==null||He.envMap!==Be||ee.fog===!0&&He.fog!==Ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ae.numPlanes||He.numIntersection!==Ae.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==je||He.morphTargets!==Ve||He.morphNormals!==st||He.morphColors!==_t||He.toneMapping!==Ct||He.morphTargetsCount!==yt)&&(lt=!0):(lt=!0,He.__version=ee.version);let hn=He.currentProgram;lt===!0&&(hn=jr(ee,G,$));let ps=!1,dn=!1,ir=!1;const St=hn.getUniforms(),sn=He.uniforms;if(ae.useProgram(hn.program)&&(ps=!0,dn=!0,ir=!0),ee.id!==te&&(te=ee.id,dn=!0),ps||ie!==M){ae.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),St.setValue(C,"projectionMatrix",M.projectionMatrix),St.setValue(C,"viewMatrix",M.matrixWorldInverse);const rn=St.map.cameraPosition;rn!==void 0&&rn.setValue(C,D.setFromMatrixPosition(M.matrixWorld)),J.logarithmicDepthBuffer&&St.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&St.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),ie!==M&&(ie=M,dn=!0,ir=!0)}if(He.needsLights&&(ft.state.directionalShadowMap.length>0&&St.setValue(C,"directionalShadowMap",ft.state.directionalShadowMap,U),ft.state.spotShadowMap.length>0&&St.setValue(C,"spotShadowMap",ft.state.spotShadowMap,U),ft.state.pointShadowMap.length>0&&St.setValue(C,"pointShadowMap",ft.state.pointShadowMap,U)),$.isSkinnedMesh){St.setOptional(C,$,"bindMatrix"),St.setOptional(C,$,"bindMatrixInverse");const qt=$.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),St.setValue(C,"boneTexture",qt.boneTexture,U))}$.isBatchedMesh&&(St.setOptional(C,$,"batchingTexture"),St.setValue(C,"batchingTexture",$._matricesTexture,U),St.setOptional(C,$,"batchingIdTexture"),St.setValue(C,"batchingIdTexture",$._indirectTexture,U),St.setOptional(C,$,"batchingColorTexture"),$._colorsTexture!==null&&St.setValue(C,"batchingColorTexture",$._colorsTexture,U));const Sn=ne.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&et.update($,ne,hn),(dn||He.receiveShadow!==$.receiveShadow)&&(He.receiveShadow=$.receiveShadow,St.setValue(C,"receiveShadow",$.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(sn.envMap.value=Be,sn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(sn.envMapIntensity.value=G.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=s1()),dn&&(St.setValue(C,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&zp(sn,ir),Ce&&ee.fog===!0&&ke.refreshFogUniforms(sn,Ce),ke.refreshMaterialUniforms(sn,ee,Ke,Ge,E.state.transmissionRenderTarget[M.id]),ko.upload(C,Pu(He),sn,U)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ko.upload(C,Pu(He),sn,U),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&St.setValue(C,"center",$.center),St.setValue(C,"modelViewMatrix",$.modelViewMatrix),St.setValue(C,"normalMatrix",$.normalMatrix),St.setValue(C,"modelMatrix",$.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const qt=ee.uniformsGroups;for(let rn=0,Da=qt.length;rn<Da;rn++){const Wi=qt[rn];ve.update(Wi,hn),ve.bind(Wi,hn)}}return hn}function zp(M,G){M.ambientLightColor.needsUpdate=G,M.lightProbe.needsUpdate=G,M.directionalLights.needsUpdate=G,M.directionalLightShadows.needsUpdate=G,M.pointLights.needsUpdate=G,M.pointLightShadows.needsUpdate=G,M.spotLights.needsUpdate=G,M.spotLightShadows.needsUpdate=G,M.rectAreaLights.needsUpdate=G,M.hemisphereLights.needsUpdate=G}function Vp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,G,ne){const ee=_.get(M);ee.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=G,_.get(M.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ne,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,G){const ne=_.get(M);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0};const Hp=C.createFramebuffer();this.setRenderTarget=function(M,G=0,ne=0){B=M,L=G,F=ne;let ee=null,$=!1,Ce=!1;if(M){const De=_.get(M);if(De.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(C.FRAMEBUFFER,De.__webglFramebuffer),Q.copy(M.viewport),W.copy(M.scissor),H=M.scissorTest,ae.viewport(Q),ae.scissor(W),ae.setScissorTest(H),te=-1;return}else if(De.__webglFramebuffer===void 0)U.setupRenderTarget(M);else if(De.__hasExternalTextures)U.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const je=M.depthTexture;if(De.__boundDepthTexture!==je){if(je!==null&&_.has(je)&&(M.width!==je.image.width||M.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ce=!0);const ze=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?ee=ze[G][ne]:ee=ze[G],$=!0):M.samples>0&&U.useMultisampledRTT(M)===!1?ee=_.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?ee=ze[ne]:ee=ze,Q.copy(M.viewport),W.copy(M.scissor),H=M.scissorTest}else Q.copy(le).multiplyScalar(Ke).floor(),W.copy(de).multiplyScalar(Ke).floor(),H=Ue;if(ne!==0&&(ee=Hp),ae.bindFramebuffer(C.FRAMEBUFFER,ee)&&ae.drawBuffers(M,ee),ae.viewport(Q),ae.scissor(W),ae.setScissorTest(H),$){const De=_.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+G,De.__webglTexture,ne)}else if(Ce){const De=G;for(let Be=0;Be<M.textures.length;Be++){const ze=_.get(M.textures[Be]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Be,ze.__webglTexture,ne,De)}}else if(M!==null&&ne!==0){const De=_.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,De.__webglTexture,ne)}te=-1},this.readRenderTargetPixels=function(M,G,ne,ee,$,Ce,Oe,De=0){if(!(M&&M.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){ae.bindFramebuffer(C.FRAMEBUFFER,Be);try{const ze=M.textures[De],je=ze.format,Ve=ze.type;if(!J.textureFormatReadable(je)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ve)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=M.width-ee&&ne>=0&&ne<=M.height-$&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+De),C.readPixels(G,ne,ee,$,ye.convert(je),ye.convert(Ve),Ce))}finally{const ze=B!==null?_.get(B).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(M,G,ne,ee,$,Ce,Oe,De=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be)if(G>=0&&G<=M.width-ee&&ne>=0&&ne<=M.height-$){ae.bindFramebuffer(C.FRAMEBUFFER,Be);const ze=M.textures[De],je=ze.format,Ve=ze.type;if(!J.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,st),C.bufferData(C.PIXEL_PACK_BUFFER,Ce.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+De),C.readPixels(G,ne,ee,$,ye.convert(je),ye.convert(Ve),0);const _t=B!==null?_.get(B).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,_t);const Ct=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await ev(C,Ct,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,st),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ce),C.deleteBuffer(st),C.deleteSync(Ct),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,G=null,ne=0){const ee=Math.pow(2,-ne),$=Math.floor(M.image.width*ee),Ce=Math.floor(M.image.height*ee),Oe=G!==null?G.x:0,De=G!==null?G.y:0;U.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,ne,0,0,Oe,De,$,Ce),ae.unbindTexture()};const Gp=C.createFramebuffer(),Wp=C.createFramebuffer();this.copyTextureToTexture=function(M,G,ne=null,ee=null,$=0,Ce=null){Ce===null&&($!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=$,$=0):Ce=0);let Oe,De,Be,ze,je,Ve,st,_t,Ct;const Rt=M.isCompressedTexture?M.mipmaps[Ce]:M.image;if(ne!==null)Oe=ne.max.x-ne.min.x,De=ne.max.y-ne.min.y,Be=ne.isBox3?ne.max.z-ne.min.z:1,ze=ne.min.x,je=ne.min.y,Ve=ne.isBox3?ne.min.z:0;else{const Sn=Math.pow(2,-$);Oe=Math.floor(Rt.width*Sn),De=Math.floor(Rt.height*Sn),M.isDataArrayTexture?Be=Rt.depth:M.isData3DTexture?Be=Math.floor(Rt.depth*Sn):Be=1,ze=0,je=0,Ve=0}ee!==null?(st=ee.x,_t=ee.y,Ct=ee.z):(st=0,_t=0,Ct=0);const yt=ye.convert(G.format),He=ye.convert(G.type);let ft;G.isData3DTexture?(U.setTexture3D(G,0),ft=C.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(U.setTexture2DArray(G,0),ft=C.TEXTURE_2D_ARRAY):(U.setTexture2D(G,0),ft=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const lt=C.getParameter(C.UNPACK_ROW_LENGTH),hn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ps=C.getParameter(C.UNPACK_SKIP_PIXELS),dn=C.getParameter(C.UNPACK_SKIP_ROWS),ir=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Rt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Rt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,je),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ve);const St=M.isDataArrayTexture||M.isData3DTexture,sn=G.isDataArrayTexture||G.isData3DTexture;if(M.isDepthTexture){const Sn=_.get(M),qt=_.get(G),rn=_.get(Sn.__renderTarget),Da=_.get(qt.__renderTarget);ae.bindFramebuffer(C.READ_FRAMEBUFFER,rn.__webglFramebuffer),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,Da.__webglFramebuffer);for(let Wi=0;Wi<Be;Wi++)St&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(M).__webglTexture,$,Ve+Wi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(G).__webglTexture,Ce,Ct+Wi)),C.blitFramebuffer(ze,je,Oe,De,st,_t,Oe,De,C.DEPTH_BUFFER_BIT,C.NEAREST);ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||_.has(M)){const Sn=_.get(M),qt=_.get(G);ae.bindFramebuffer(C.READ_FRAMEBUFFER,Gp),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wp);for(let rn=0;rn<Be;rn++)St?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Sn.__webglTexture,$,Ve+rn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Sn.__webglTexture,$),sn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qt.__webglTexture,Ce,Ct+rn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qt.__webglTexture,Ce),$!==0?C.blitFramebuffer(ze,je,Oe,De,st,_t,Oe,De,C.COLOR_BUFFER_BIT,C.NEAREST):sn?C.copyTexSubImage3D(ft,Ce,st,_t,Ct+rn,ze,je,Oe,De):C.copyTexSubImage2D(ft,Ce,st,_t,ze,je,Oe,De);ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else sn?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(ft,Ce,st,_t,Ct,Oe,De,Be,yt,He,Rt.data):G.isCompressedArrayTexture?C.compressedTexSubImage3D(ft,Ce,st,_t,Ct,Oe,De,Be,yt,Rt.data):C.texSubImage3D(ft,Ce,st,_t,Ct,Oe,De,Be,yt,He,Rt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ce,st,_t,Oe,De,yt,He,Rt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ce,st,_t,Rt.width,Rt.height,yt,Rt.data):C.texSubImage2D(C.TEXTURE_2D,Ce,st,_t,Oe,De,yt,He,Rt);C.pixelStorei(C.UNPACK_ROW_LENGTH,lt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,hn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ps),C.pixelStorei(C.UNPACK_SKIP_ROWS,dn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ir),Ce===0&&G.generateMipmaps&&C.generateMipmap(ft),ae.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&U.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?U.setTextureCube(M,0):M.isData3DTexture?U.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?U.setTexture2DArray(M,0):U.setTexture2D(M,0),ae.unbindTexture()},this.resetState=function(){L=0,F=0,B=null,ae.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Sd={type:"change"},Su={type:"start"},Dp={type:"end"},To=new ya,Ed=new ui,o1=Math.cos(70*nv.DEG2RAD),Ut=new O,on=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Al=1e-6;class a1 extends cx{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new hs,this._lastTargetPosition=new O,this._quat=new hs().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zh,this._sphericalDelta=new Zh,this._scale=1,this._panOffset=new O,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new O,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c1.bind(this),this._onPointerDown=l1.bind(this),this._onPointerUp=u1.bind(this),this._onContextMenu=_1.bind(this),this._onMouseWheel=f1.bind(this),this._onKeyDown=p1.bind(this),this._onTouchStart=m1.bind(this),this._onTouchMove=g1.bind(this),this._onMouseDown=h1.bind(this),this._onMouseMove=d1.bind(this),this._interceptControlDown=v1.bind(this),this._interceptControlUp=x1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sd),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ut.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(To.origin.copy(this.object.position),To.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(To.direction))<o1?this.object.lookAt(this.target):(Ed.setFromNormalAndCoplanarPoint(this.object.up,this.target),To.intersectPlane(Ed,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Al||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Al||this._lastTargetPosition.distanceToSquared(this.target)>Al?(this.dispatchEvent(Sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ut.copy(s).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function l1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function c1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function u1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dp),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function h1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case Ws.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case Ws.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Su)}function d1(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function f1(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(Su),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Dp))}function p1(n){this.enabled!==!1&&this._handleKeyDown(n)}function m1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case Bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Su)}function g1(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function _1(n){this.enabled!==!1&&n.preventDefault()}function v1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const zo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Wr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const y1=new Ea(-1,1,1,-1,0,1);class b1 extends nn{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const M1=new b1;class Lp{constructor(e){this._mesh=new bn(M1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,y1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class S1 extends Wr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof $t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=sa.clone(e.uniforms),this.material=new $t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Lp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Td extends Wr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class E1 extends Wr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class T1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ee);this._width=i.width,this._height=i.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new S1(zo),this.copyPass.material.blending=Kn,this.clock=new ax}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Td!==void 0&&(o instanceof Td?i=!0:o instanceof E1&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class w1 extends Wr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Je}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const A1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Qs extends Wr{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new Je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,o,{type:xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new un(r,o,{type:xn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new un(r,o,{type:xn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=A1;this.highPassUniforms=sa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $t({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ee(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=sa.clone(zo.uniforms),this.blendMaterial=new $t({uniforms:this.copyUniforms,vertexShader:zo.vertexShader,fragmentShader:zo.fragmentShader,premultipliedAlpha:!0,blending:Hl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Je,this._oldClearAlpha=1,this._basic=new ba,this._fsQuad=new Lp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ee(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Qs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Qs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new $t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new $t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Qs.BlurDirectionX=new Ee(1,0);Qs.BlurDirectionY=new Ee(0,1);const wo={object:"#f97316",array:"#06b6d4",string:"#10b981",number:"#6366f1",boolean:"#ec4899",null:"#64748b"},C1=.5,R1=8,Us=3;function P1(n){const e=We({isInitialized:!1,hoveredNode:null,zoomLevel:1,isDragging:!1,isAutoRotating:!0});let t=null,i=null,s=null,r=null,o=null,a=null,l=new Map,c=null,u=null,h=null,f=null,p=null,g=!1,v=null,m=new ui(new O(0,0,1),0),d=new O;const T=[];function A(fe,se=26,xe="#ffffff"){const w=document.createElement("canvas"),D=w.getContext("2d");w.width=512,w.height=72,D.clearRect(0,0,w.width,w.height),D.fillStyle="rgba(15, 23, 42, 0.9)";const z=(re,J,ae,y,_,U)=>{re.beginPath(),re.moveTo(J+U,ae),re.lineTo(J+y-U,ae),re.quadraticCurveTo(J+y,ae,J+y,ae+U),re.lineTo(J+y,ae+_-U),re.quadraticCurveTo(J+y,ae+_,J+y-U,ae+_),re.lineTo(J+U,ae+_),re.quadraticCurveTo(J,ae+_,J,ae+_-U),re.lineTo(J,ae+U),re.quadraticCurveTo(J,ae,J+U,ae),re.closePath()};z(D,0,4,w.width,w.height-8,16),D.fill(),D.strokeStyle=xe,D.lineWidth=4,z(D,2,6,w.width-4,w.height-12,14),D.stroke(),D.font=`bold ${se}px Arial, sans-serif`,D.fillStyle="#ffffff",D.textAlign="left",D.textBaseline="middle";const K=30,j=fe.length>K?fe.slice(0,K)+"...":fe;D.fillText(j,24,w.height/2);const Z=new jh(w);Z.colorSpace=mn,Z.minFilter=zt,Z.magFilter=zt,Z.needsUpdate=!0;const C=new Uc({map:Z,transparent:!0,depthWrite:!1,depthTest:!1});T.push(C,Z);const ce=new Gh(C);return ce.scale.set(6,.85,1),ce.renderOrder=100,ce}function b(fe,se){const xe=document.createElement("canvas"),w=xe.getContext("2d");xe.width=64,xe.height=64,w.shadowColor=se,w.shadowBlur=15,w.fillStyle=se,w.beginPath(),w.arc(32,32,24,0,Math.PI*2),w.fill(),w.shadowBlur=0,w.fillStyle="#ffffff",w.font="bold 40px Arial",w.textAlign="center",w.textBaseline="middle",w.fillText(fe?"−":"+",32,31);const D=new jh(xe),z=new Uc({map:D,transparent:!0,depthWrite:!1});T.push(z,D);const K=new Gh(z);return K.scale.set(.6,.6,1),K}function E(fe,se,xe){const w=wo[fe.type]||wo.null,D=new Je(w),z=new as;z.position.set(se,xe,0);const K=new yu(C1,32,32),j=new Kv({color:D,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,emissive:D,emissiveIntensity:.2});T.push(K,j);const Z=new bn(K,j);Z.castShadow=!0,Z.receiveShadow=!0,z.add(Z);const C=new nx(D,0,8);C.position.set(0,0,1),z.add(C);const ce=`${fe.name}: ${fe.value}`,re=A(ce,24,w);re.position.set(4,0,0),z.add(re);let J=null;fe.children.length>0&&(J=b(fe.isExpanded,w),J.position.set(0,-.8,.5),z.add(J)),t?.add(z);const ae={group:z,mesh:Z,node:fe,label:re,expandIcon:J,glow:C,edges:[],worldX:se,worldY:xe};return l.set(fe.id,ae),ae}function P(fe,se){const xe=fe.worldX,w=fe.worldY,D=se.worldX,z=se.worldY,K=wo[fe.node.type]||wo.null,j=new Je(K),Z=xe+(D-xe)*.5,C=new Ep(new O(xe,w,0),new O(Z,w,0),new O(Z,z,0),new O(D,z,0)),ce=new bu(C,20,.05,8,!1),re=new ba({color:j,transparent:!0,opacity:.4,side:Wn});T.push(ce,re);const J=new bn(ce,re);return c?.add(J),fe.edges.push(J),J}function I(fe,se,xe){const w=new Map;function D(j){if(!j.isExpanded||j.children.length===0)return Us;let Z=0;return j.children.forEach(C=>{Z+=D(C)}),Math.max(Us,Z)}function z(j,Z,C){if(w.set(j.id,{x:Z,y:C}),!j.isExpanded||j.children.length===0)return Us;const ce=Z+R1,re=j.children.map(y=>D(y)),J=re.reduce((y,_)=>y+_,0);let ae=C+(J-Us)/2;return j.children.forEach((y,_)=>{const U=re[_]??Us;z(y,ce,ae-U/2+Us/2),ae-=U}),J}return{height:z(fe,se,xe),positions:w}}function V(){if(!t||!p)return;if(l.forEach(w=>{t?.remove(w.group)}),l.clear(),c)for(;c.children.length>0;){const w=c.children[0];if(w){c.remove(w);const D=w;D.geometry&&D.geometry.dispose()}}const{positions:fe}=I(p,0,0);function se(w){const D=fe.get(w.id);D&&E(w,D.x,D.y),w.isExpanded&&w.children.forEach(z=>se(z))}se(p);function xe(w){const D=l.get(w.id);!D||!w.isExpanded||w.children.forEach(z=>{const K=l.get(z.id);K&&(P(D,K),xe(z))})}xe(p)}function x(){const se=new nn,xe=new Float32Array(1e3*3),w=new Float32Array(1e3*3),D=new Je;for(let K=0;K<1e3;K++){const j=(Math.random()-.5)*200,Z=(Math.random()-.5)*200,C=(Math.random()-.5)*100-50;xe[K*3]=j,xe[K*3+1]=Z,xe[K*3+2]=C,Math.random()>.5?D.setHex(6514417):D.setHex(1096065),w[K*3]=D.r,w[K*3+1]=D.g,w[K*3+2]=D.b}se.setAttribute("position",new yn(xe,3)),se.setAttribute("color",new yn(w,3));const z=new bp({size:.5,vertexColors:!0,transparent:!0,opacity:.6,sizeAttenuation:!0});T.push(se,z),u=new as,u.add(new Dv(se,z)),t?.add(u)}function S(fe){if(!n.value)return;p=fe;const se=n.value,xe=se.clientWidth,w=se.clientHeight;i=new ln(60,xe/w,.1,1e3),i.position.set(20,0,40),t=new Tv,t.background=new Je(132631),t.fog=new _u(132631,.008);const D=new rx(16777215,.4);t.add(D);const z=new sx(16777215,.8);z.position.set(10,10,10),z.castShadow=!0,t.add(z);const K=new ex(6514417,2);K.position.set(-20,20,20),t.add(K),s=new r1({antialias:!0,alpha:!0,powerPreference:"high-performance"}),s.setSize(xe,w),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!0,s.shadowMap.type=$f;const j=new w1(t,i),Z=new Qs(new Ee(xe,w),1.5,.4,.85);Z.threshold=.2,Z.strength=.8,Z.radius=.5,r=new T1(s),r.addPass(j),r.addPass(Z),se.appendChild(s.domElement),o=new a1(i,s.domElement),o.enableDamping=!0,o.dampingFactor=.05,o.screenSpacePanning=!0,o.minDistance=5,o.maxDistance=200,o.maxPolarAngle=Math.PI/1.2,h=new lx,f=new Ee,c=new as,t.add(c),x(),V(),se.addEventListener("mousedown",B),se.addEventListener("mousemove",te),se.addEventListener("mouseup",ie),se.addEventListener("click",W),window.addEventListener("resize",H),e.value.isInitialized=!0,pe()}function L(){if(!h||!i||!f)return null;h.setFromCamera(f,i);const fe=Array.from(l.values()).map(xe=>xe.mesh),se=h.intersectObjects(fe);if(se.length>0){const xe=se[0]?.object;for(const[,w]of l)if(w.mesh===xe)return w}return null}function F(fe){if(!n.value||!f)return;const se=n.value.getBoundingClientRect();f.x=(fe.clientX-se.left)/se.width*2-1,f.y=-((fe.clientY-se.top)/se.height)*2+1}function B(fe){if(fe.button!==0)return;F(fe);const se=L();if(se&&h&&i){g=!0,v=se,e.value.isDragging=!0,o&&(o.enabled=!1),m.setFromNormalAndCoplanarPoint(new O(0,0,1),se.group.position);const xe=new O;h.ray.intersectPlane(m,xe)?d.copy(xe).sub(se.group.position):d.set(0,0,0),n.value&&(n.value.style.cursor="grabbing"),fe.preventDefault(),fe.stopPropagation()}}function te(fe){if(F(fe),g&&v&&h&&i){const xe=new O;if(h.setFromCamera(f,i),h.ray.intersectPlane(m,xe)){const w=xe.sub(d);v.group.position.copy(w),v.group.position.z=0,v.worldX=w.x,v.worldY=w.y,Q()}return}const se=L();if(l.forEach(xe=>{const w=xe.mesh.material;xe.node!==e.value.hoveredNode&&(xe.glow.intensity=0,w.emissiveIntensity=.2,xe.label.scale.set(6,.85,1),xe.group.scale.setScalar(1))}),se){const xe=se.mesh.material;xe.emissiveIntensity=1,se.glow.intensity=2,se.group.scale.setScalar(1.1),se.label.scale.set(7.5,1.05,1),e.value.hoveredNode=se.node,n.value&&(n.value.style.cursor="pointer")}else e.value.hoveredNode=null,n.value&&(n.value.style.cursor="default")}function ie(){g&&(g=!1,v=null,e.value.isDragging=!1,o&&(o.enabled=!0),n.value&&(n.value.style.cursor="default"))}function Q(){if(!c)return;for(;c.children.length>0;){const se=c.children[0];se&&(c.remove(se),se instanceof bn&&se.geometry.dispose())}l.forEach(se=>{se.edges=[]});function fe(se){const xe=l.get(se.id);!xe||!se.isExpanded||se.children.forEach(w=>{const D=l.get(w.id);D&&(P(xe,D),fe(w))})}p&&fe(p)}function W(fe){if(e.value.isDragging)return;F(fe);const se=L();se&&se.node.children.length>0&&(se.node.isExpanded=!se.node.isExpanded,V())}function H(){if(!n.value||!i||!s||!r)return;const fe=n.value.clientWidth,se=n.value.clientHeight;i.aspect=fe/se,i.updateProjectionMatrix(),s.setSize(fe,se),r.setSize(fe,se)}function pe(){!s||!t||!i||!o||!r||(a=requestAnimationFrame(pe),g||o.update(),u&&(u.rotation.y+=5e-4),r.render())}function be(){if(i&&o){const fe=i.position.distanceTo(o.target),se=Math.max(fe*.8,o.minDistance),xe=new O().subVectors(i.position,o.target).normalize();i.position.copy(o.target).add(xe.multiplyScalar(se)),o.update()}}function we(){if(i&&o){const fe=i.position.distanceTo(o.target),se=Math.min(fe*1.25,o.maxDistance),xe=new O().subVectors(i.position,o.target).normalize();i.position.copy(o.target).add(xe.multiplyScalar(se)),o.update()}}function Ge(){o&&i&&(i.position.set(20,0,40),o.target.set(0,0,0),o.update())}function Ke(fe){fe.isExpanded=!0,fe.children.forEach(Ke)}function gt(fe){fe.isExpanded=!1,fe.children.forEach(gt)}function ht(){p&&(Ke(p),V())}function le(){p&&(gt(p),p.isExpanded=!0,V())}function de(){o&&(o.autoRotate=!o.autoRotate,e.value.isAutoRotating=o.autoRotate)}function Ue(){a!==null&&cancelAnimationFrame(a),n.value&&(n.value.removeEventListener("mousedown",B),n.value.removeEventListener("mousemove",te),n.value.removeEventListener("mouseup",ie),n.value.removeEventListener("click",W)),window.removeEventListener("resize",H),T.forEach(fe=>fe.dispose()),T.length=0,s&&(s.dispose(),n.value&&s.domElement.parentNode===n.value&&n.value.removeChild(s.domElement)),o&&o.dispose(),t=null,i=null,s=null,r=null,o=null,l.clear(),c=null,h=null,f=null,p=null,g=!1,v=null,e.value.isInitialized=!1,e.value.hoveredNode=null,e.value.isDragging=!1}return{state:e,initialize:S,dispose:Ue,zoomIn:be,zoomOut:we,resetView:Ge,expandAll:ht,collapseAll:le,toggleAutoRotate:de}}const D1={key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},L1={key:0,class:"relative z-10 w-full max-w-[95vw] h-[90vh] bg-black/40 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10"},I1={class:"absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none"},N1={class:"flex items-center gap-6 flex-wrap pointer-events-auto"},U1={class:"flex items-center gap-2 p-1.5 bg-slate-950/50 backdrop-blur-md rounded-2xl ring-1 ring-white/10 shadow-xl"},F1={class:"flex items-center gap-0.5 px-1"},O1={class:"flex items-center gap-1"},B1={key:0,class:"absolute bottom-8 left-8 z-20 w-80 pointer-events-none"},k1={class:"bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group"},z1={class:"relative z-10"},V1={class:"flex items-center gap-3 mb-3"},H1={class:"text-[10px] uppercase tracking-widest text-slate-400 font-bold"},G1={class:"text-white font-bold text-lg leading-tight mb-1 truncate"},W1={class:"mt-3 bg-black/30 rounded-lg p-3 border border-white/5"},X1={class:"text-xs text-slate-300 font-mono break-all leading-relaxed max-h-32 overflow-hidden text-ellipsis"},j1={class:"absolute bottom-8 right-8 z-20 flex flex-col items-end gap-2 pointer-events-none"},$1={class:"bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-2 text-[10px] text-slate-400"},Y1=Mn({__name:"JsonTreeModal",props:{isOpen:{type:Boolean},jsonData:{type:[String,Number,Boolean,null,Object]}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,s=We(null),{state:r,initialize:o,dispose:a,zoomIn:l,zoomOut:c,resetView:u,expandAll:h,collapseAll:f,toggleAutoRotate:p}=P1(s);function g(){a(),i("close")}function v(m){m.key==="Escape"&&g()}return mi(()=>t.isOpen,async m=>{if(m&&t.jsonData!==null){await ef();const d=b_(t.jsonData);o(d),window.addEventListener("keydown",v)}else window.removeEventListener("keydown",v),a()}),(m,d)=>(ue(),Ln(eu,{to:"body"},[mt(wr,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:Hs(()=>[n.isOpen?(ue(),me("div",D1,[R("div",{class:"absolute inset-0 bg-slate-950/90 backdrop-blur-md",onClick:g,"aria-hidden":"true"}),mt(wr,{"enter-active-class":"transition-all duration-300 ease-out delay-100","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:Hs(()=>[n.isOpen?(ue(),me("div",L1,[R("header",I1,[R("div",N1,[d[12]||(d[12]=R("div",{class:"flex items-center gap-3"},[R("div",{class:"w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-white/10 backdrop-blur-sm"},[R("svg",{class:"w-5 h-5 text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})])]),R("div",null,[R("h2",{id:"modal-title",class:"text-white font-bold text-xl tracking-tight"},"Cosmos JSON"),R("p",{class:"text-xs text-slate-400 font-medium tracking-wide uppercase"},"Explorador 3D")])],-1)),R("div",U1,[R("div",F1,[R("button",{class:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all",onClick:d[0]||(d[0]=(...T)=>N(c)&&N(c)(...T)),title:"Alejar"},[...d[6]||(d[6]=[R("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"})],-1)])]),R("button",{class:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all",onClick:d[1]||(d[1]=(...T)=>N(l)&&N(l)(...T)),title:"Acercar"},[...d[7]||(d[7]=[R("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1)])])]),d[10]||(d[10]=R("div",{class:"w-px h-6 bg-white/10"},null,-1)),R("button",{class:X(["p-2 rounded-xl transition-all flex items-center gap-2 px-3",N(r).isAutoRotating?"bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/50":"text-slate-400 hover:text-white hover:bg-white/10"]),onClick:d[2]||(d[2]=(...T)=>N(p)&&N(p)(...T)),title:"Alternar rotación automática"},[(ue(),me("svg",{class:X(["w-4 h-4",{"animate-spin-slow":N(r).isAutoRotating}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...d[8]||(d[8]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)])],2)),d[9]||(d[9]=R("span",{class:"text-xs font-medium hidden sm:block"},"Girar",-1))],2),d[11]||(d[11]=R("div",{class:"w-px h-6 bg-white/10"},null,-1)),R("div",O1,[R("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:d[3]||(d[3]=(...T)=>N(h)&&N(h)(...T))},"Expandir"),R("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:d[4]||(d[4]=(...T)=>N(f)&&N(f)(...T))},"Colapsar"),R("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:d[5]||(d[5]=(...T)=>N(u)&&N(u)(...T))},"Reset")])])]),R("button",{class:"pointer-events-auto p-2.5 text-slate-400 hover:text-white bg-slate-950/50 hover:bg-red-500/20 hover:text-red-200 rounded-full transition-all ring-1 ring-white/10 backdrop-blur-md",onClick:g},[...d[13]||(d[13]=[R("svg",{class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),mt(wr,{"enter-active-class":"transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)","enter-from-class":"opacity-0 translate-y-4 scale-95","enter-to-class":"opacity-100 translate-y-0 scale-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100 translate-y-0 scale-100","leave-to-class":"opacity-0 translate-y-4 scale-95"},{default:Hs(()=>[N(r).hoveredNode?(ue(),me("div",B1,[R("div",k1,[d[14]||(d[14]=R("div",{class:"absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 blur-3xl rounded-full group-hover:bg-primary-500/30 transition-colors"},null,-1)),R("div",z1,[R("div",V1,[R("div",{class:X(["w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]",{"text-orange-400 bg-orange-400":N(r).hoveredNode.type==="object","text-cyan-400 bg-cyan-400":N(r).hoveredNode.type==="array","text-emerald-400 bg-emerald-400":N(r).hoveredNode.type==="string","text-blue-400 bg-blue-400":N(r).hoveredNode.type==="number","text-pink-400 bg-pink-400":N(r).hoveredNode.type==="boolean","text-slate-400 bg-slate-400":N(r).hoveredNode.type==="null"}])},null,2),R("span",H1,qe(N(r).hoveredNode.type),1)]),R("h3",G1,qe(N(r).hoveredNode.name),1),R("div",W1,[R("p",X1,qe(N(r).hoveredNode.value),1)])])])])):rt("",!0)]),_:1}),R("div",j1,[R("div",$1,[d[15]||(d[15]=R("span",{class:"w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"},null,-1)),R("span",null,qe(N(r).zoomLevel?Math.round(N(r).zoomLevel*100):0)+"% Zoom",1)])]),R("div",{ref_key:"containerRef",ref:s,class:"w-full h-full cursor-grab active:cursor-grabbing bg-slate-950"},null,512)])):rt("",!0)]),_:1})])):rt("",!0)]),_:1})]))}}),q1=ru(Y1,[["__scopeId","data-v-f0b10e93"]]),K1={class:"mb-4 flex items-center justify-between flex-wrap gap-2"},J1={class:"flex items-center gap-2"},Z1={key:0,class:"flex items-center gap-1.5"},Q1=["title","aria-label"],eE={key:0,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},tE={key:1,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},nE={key:0,class:"p-6 animate-fade-in",role:"alert"},iE={class:"flex-1 min-w-0"},sE={key:1,class:"flex flex-col items-center justify-center h-full py-16 px-6 animate-fade-in"},rE={key:2,class:"p-4 animate-fade-in"},oE=Mn({__name:"JsonViewer",props:{jsonText:{},theme:{}},setup(n){const e=n,t=Xe(()=>e.theme.name==="dark"||e.theme.name==="midnight"),{parsedData:i,errorMessage:s,setJsonText:r}=Wf(e.jsonText);mi(()=>e.jsonText,b=>{r(b)});const o=Xe(()=>i.value!==null),a=Xe(()=>s.value!==null),l=Xe(()=>!e.jsonText.trim()),c=We(!1),u=We(0),h=We(2);function f(){c.value=!0}function p(){c.value=!1}function g(){h.value=999,u.value++}function v(){h.value=0,u.value++}function m(){h.value=2,u.value++}const d=We(!1);function T(){d.value=!d.value}function A(b){b.key==="Escape"&&d.value&&(d.value=!1)}return er(()=>window.addEventListener("keydown",A)),tr(()=>window.removeEventListener("keydown",A)),(b,E)=>(ue(),Ln(eu,{to:"body",disabled:!d.value},[R("div",{class:X(d.value?"fixed inset-0 z-50 flex flex-col p-4 md:p-6":"flex flex-col h-full")},[d.value?(ue(),me("div",{key:0,class:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:E[0]||(E[0]=P=>d.value=!1)})):rt("",!0),R("div",{class:X(d.value?["relative z-10 flex-1 flex flex-col min-h-0 rounded-2xl p-4 md:p-6 overflow-hidden",n.theme.colors.bgCard,n.theme.colors.shadow]:"flex flex-col h-full")},[R("div",K1,[R("div",J1,[R("div",{class:X(["w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",t.value?"bg-gradient-to-br from-cyan-400 to-cyan-500":"bg-gradient-to-br from-cyan-500 to-cyan-600"])},[...E[1]||(E[1]=[R("svg",{class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1)])],2),R("h2",{class:X(["text-lg font-semibold transition-colors duration-300",n.theme.colors.textPrimary])},"Visualizador",2)]),o.value?(ue(),me("div",Z1,[R("div",{class:X(["flex items-center gap-0.5 p-1 rounded-lg transition-colors duration-300",t.value?"bg-slate-700":"bg-gray-100"])},[R("button",{class:X(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Expandir todo","aria-label":"Expandir todos los nodos",onClick:g},[...E[2]||(E[2]=[R("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"})],-1)])],2),R("button",{class:X(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Colapsar todo","aria-label":"Colapsar todos los nodos",onClick:v},[...E[3]||(E[3]=[R("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"})],-1)])],2),R("button",{class:X(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Restablecer vista","aria-label":"Restablecer vista por defecto",onClick:m},[...E[4]||(E[4]=[R("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])],2)],2),R("button",{class:X(["inline-flex items-center gap-1.5 px-3 py-1.5 text-white text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 transition-all shadow-sm",t.value?"bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500":"bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"]),onClick:f,title:"Abrir visualización 3D","aria-label":"Abrir visualización 3D del árbol JSON"},[...E[5]||(E[5]=[R("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})],-1),R("span",null,"Vista 3D",-1)])],2),R("button",{onClick:T,class:X(["inline-flex items-center p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",t.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:d.value?"Salir de pantalla completa":"Pantalla completa","aria-label":d.value?"Salir de pantalla completa":"Pantalla completa"},[d.value?(ue(),me("svg",tE,[...E[7]||(E[7]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9L4 4m0 0v4m0-4h4m6 0l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m6 0l5 5m0 0v-4m0 4h-4"},null,-1)])])):(ue(),me("svg",eE,[...E[6]||(E[6]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"},null,-1)])]))],10,Q1)])):rt("",!0)]),R("div",{class:X(["flex-1 overflow-auto rounded-xl ring-1 shadow-inner-soft transition-colors duration-300",t.value?"bg-slate-800/50 ring-slate-700":"bg-surface-secondary ring-gray-100"])},[a.value?(ue(),me("div",nE,[R("div",{class:X(["flex items-start gap-4 p-4 border rounded-xl transition-colors duration-300",t.value?"bg-red-900/30 border-red-800":"bg-red-50 border-red-200"])},[R("div",{class:X(["w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300",t.value?"bg-red-900/50":"bg-red-100"])},[(ue(),me("svg",{class:X(["w-5 h-5",t.value?"text-red-400":"text-red-600"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...E[8]||(E[8]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])],2))],2),R("div",iE,[R("p",{class:X(["font-semibold",t.value?"text-red-300":"text-red-800"])},"Error de sintaxis JSON",2),R("p",{class:X(["text-sm mt-1 break-words",t.value?"text-red-400":"text-red-600"])},qe(N(s)),3)])],2)])):l.value?(ue(),me("div",sE,[R("div",{class:X(["w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300",t.value?"bg-gradient-to-br from-slate-700 to-slate-800":"bg-gradient-to-br from-gray-100 to-gray-200"])},[(ue(),me("svg",{class:X(["w-10 h-10",t.value?"text-slate-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...E[9]||(E[9]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)])],2))],2),R("p",{class:X(["text-lg font-medium mb-1 transition-colors duration-300",t.value?"text-slate-300":"text-gray-700"])},"Sin datos JSON",2),R("p",{class:X(["text-sm text-center max-w-xs transition-colors duration-300",t.value?"text-slate-500":"text-gray-500"])}," Ingresa o pega JSON válido en el panel de entrada para visualizar su estructura ",2)])):o.value?(ue(),me("div",rE,[(ue(),Ln(v_,{key:u.value,data:N(i),name:"root",isRoot:!0,depth:0,initialExpandDepth:h.value,lineNumber:1,theme:n.theme},null,8,["data","initialExpandDepth","theme"]))])):rt("",!0)],2),mt(q1,{isOpen:c.value,jsonData:N(i),onClose:p},null,8,["isOpen","jsonData"])],2)],2)],8,["disabled"]))}}),aE={class:"mb-6 md:mb-8"},lE={class:"flex items-center justify-between"},cE={class:"w-32"},uE={class:"flex-1 text-center"},hE={class:"flex justify-end w-32"},Aa=Mn({__name:"ToolHeader",props:{toolName:{},toolDescription:{}},emits:["back"],setup(n){const{currentTheme:e}=Mi(),t=Xe(()=>e.value.name==="dark"||e.value.name==="midnight");return(i,s)=>(ue(),me("header",aE,[R("div",lE,[R("div",cE,[R("button",{class:X(["inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",[t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-800 hover:bg-black/5"]]),onClick:s[0]||(s[0]=r=>i.$emit("back")),"aria-label":"Go back to home"},[...s[1]||(s[1]=[R("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),Un(" Home ",-1)])],2)]),R("div",uE,[R("h1",{class:X(["text-2xl md:text-3xl font-bold bg-clip-text text-transparent transition-colors duration-300",[t.value?"bg-gradient-to-r from-white via-gray-200 to-white":"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"]])},qe(n.toolName),3),n.toolDescription?(ue(),me("p",{key:0,class:X(["text-xs md:text-sm font-medium mt-0.5 transition-colors duration-300",N(e).colors.textMuted])},qe(n.toolDescription),3)):rt("",!0)]),R("div",hE,[mt(Gf)])])]))}}),dE={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},fE={class:"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-hidden"},pE={class:"mt-4 text-center"},mE=Mn({__name:"JsonViewerView",emits:["back"],setup(n){const{currentTheme:e}=Mi(),t=We(""),i=Xe(()=>e.value.name==="dark"||e.value.name==="midnight");return(s,r)=>(ue(),me("div",dE,[mt(Aa,{"tool-name":"JSON Viewer","tool-description":"Visualize and explore JSON structures interactively",onBack:r[0]||(r[0]=o=>s.$emit("back"))}),R("main",fE,[R("section",{class:X(["rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300",[N(e).colors.bgCard,N(e).colors.shadow,N(e).colors.bgCardHover,i.value?"ring-1 ring-white/10":"border border-white/50"]]),"aria-label":"JSON input panel"},[mt(u_,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=o=>t.value=o),theme:N(e)},null,8,["modelValue","theme"])],2),R("section",{class:X(["rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300",[N(e).colors.bgCard,N(e).colors.shadow,N(e).colors.bgCardHover,i.value?"ring-1 ring-white/10":"border border-white/50"]]),"aria-label":"JSON viewer panel"},[mt(oE,{jsonText:t.value,theme:N(e)},null,8,["jsonText","theme"])],2)]),R("footer",pE,[R("p",{class:X(["text-xs transition-colors duration-300",N(e).colors.textMuted])},[r[2]||(r[2]=Un(" Press ",-1)),R("kbd",{class:X(["px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300",i.value?"bg-slate-800 text-slate-400":"bg-gray-100 text-gray-500"])},"Ctrl",2),r[3]||(r[3]=Un(" + ",-1)),R("kbd",{class:X(["px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300",i.value?"bg-slate-800 text-slate-400":"bg-gray-100 text-gray-500"])},"V",2),r[4]||(r[4]=Un(" to paste and auto-format ",-1))],2)])]))}}),gE={key:1,class:"min-w-full w-max"},_E={class:"px-2 pt-0.5 whitespace-pre"},vE={key:2},wd=Mn({__name:"DiffOutputPanel",props:{lines:{},currentPairIndex:{},side:{}},setup(n,{expose:e}){const t=We();e({scrollEl:t});const{currentTheme:i}=Mi(),s=Xe(()=>i.value.name==="dark"||i.value.name==="midnight");return(r,o)=>(ue(),me("div",{ref_key:"scrollEl",ref:t,class:X(["h-full overflow-auto font-mono text-sm rounded-xl transition-colors duration-300",[N(i).colors.bgCard,s.value?"ring-1 ring-white/10":"border border-white/50"]])},[n.lines.length===0?(ue(),me("div",{key:0,class:X(["h-full flex items-center justify-center flex-col gap-2 transition-colors duration-300",N(i).colors.textMuted])},[...o[0]||(o[0]=[R("svg",{class:"w-8 h-8 opacity-40",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})],-1),R("span",{class:"text-xs"},"No result",-1)])],2)):(ue(),me("div",gE,[(ue(!0),me(At,null,qn(n.lines,(a,l)=>(ue(),me("div",{key:l,class:X(["flex items-stretch min-h-[1.75rem] leading-7 w-full transition-colors duration-150",[a.type==="equal"?s.value?"bg-transparent text-gray-300":"bg-white/60 text-gray-700":a.type==="removed"?s.value?"bg-red-900/50 border-l-2 border-red-400 text-red-200":"bg-red-50 border-l-2 border-red-400 text-red-900":a.type==="added"?s.value?"bg-green-900/50 border-l-2 border-green-400 text-green-200":"bg-green-50 border-l-2 border-green-400 text-green-900":a.type==="modified"?s.value?"bg-yellow-900/40 border-l-2 border-yellow-400 text-yellow-100":"bg-yellow-50 border-l-2 border-amber-400 text-yellow-900":s.value?"bg-white/5 text-gray-500":"bg-gray-50/80 text-gray-300",l===n.currentPairIndex?s.value?"ring-1 ring-inset ring-primary-400/70":"ring-1 ring-inset ring-primary-500/50":""]])},[R("span",{class:X(["select-none w-10 flex-shrink-0 text-right pr-3 pt-0.5 text-[11px] transition-colors duration-300",[a.type==="empty"?"opacity-0":"",s.value?"text-gray-600":"text-gray-400"]])},qe(a.lineNumber??""),3),R("span",_E,[a.type==="empty"?(ue(),me("span",{key:0,class:X(["transition-colors duration-300",s.value?"text-gray-700":"text-gray-300"])},"···",2)):a.type==="modified"&&a.chars?(ue(!0),me(At,{key:1},qn(a.chars,(c,u)=>(ue(),me(At,{key:u},[n.side==="left"&&c.type!=="added"?(ue(),me("span",{key:0,class:X(c.type==="removed"?s.value?"bg-red-500/50 text-red-100 line-through":"bg-red-200 text-red-800 line-through":"")},qe(c.text),3)):n.side==="right"&&c.type!=="removed"?(ue(),me("span",{key:1,class:X(c.type==="added"?s.value?"bg-green-500/50 text-green-100":"bg-green-200 text-green-800":"")},qe(c.text),3)):rt("",!0)],64))),128)):(ue(),me("span",vE,qe(a.content),1))])],2))),128))]))],2))}});function Ip(n,e,t){const i=n.length,s=e.length,r=Array.from({length:i+1},()=>new Array(s+1).fill(0));for(let o=1;o<=i;o++)for(let a=1;a<=s;a++)r[o][a]=t(n[o-1],e[a-1])?r[o-1][a-1]+1:Math.max(r[o-1][a],r[o][a-1]);return r}function xE(n,e){const t=n.length,i=e.length,s=Ip(n,e,(l,c)=>l===c),r=[];let o=t,a=i;for(;o>0||a>0;)o>0&&a>0&&n[o-1]===e[a-1]?(r.unshift([n[o-1],e[a-1]]),o--,a--):a>0&&(o===0||s[o][a-1]>=s[o-1][a])?(r.unshift([null,e[a-1]]),a--):o>0&&(r.unshift([n[o-1],null]),o--);return r}function yE(n,e){const t=n.split(""),i=e.split("");if(t.length===0&&i.length===0)return[{type:"equal",text:""}];if(t.length===0)return i.map(u=>({type:"added",text:u}));if(i.length===0)return t.map(u=>({type:"removed",text:u}));const s=t.length,r=i.length,o=Ip(t,i,(u,h)=>u.toLowerCase()===h.toLowerCase()),a=[];let l=s,c=r;for(;l>0||c>0;)l>0&&c>0&&t[l-1].toLowerCase()===i[c-1].toLowerCase()?(a.unshift({type:"equal",text:t[l-1]}),l--,c--):c>0&&(l===0||o[l][c-1]>=o[l-1][c])?(a.unshift({type:"added",text:i[c-1]}),c--):l>0&&(a.unshift({type:"removed",text:t[l-1]}),l--);return a}function bE(n,e,t){const i=Math.min(n.length,e.length);for(let s=0;s<i;s++)t.push({type:"modified",chars:yE(n[s],e[s])});for(let s=i;s<n.length;s++)t.push({type:"removed",content:n[s]});for(let s=i;s<e.length;s++)t.push({type:"added",content:e[s]})}function ME(n,e){const t=n.split(`
`),i=e.split(`
`),s=xE(t,i),r=[];let o=0;for(;o<s.length;){const[a,l]=s[o];if(a!==null&&l!==null){r.push({type:"equal",content:a}),o++;continue}const c=[];for(;o<s.length&&s[o][0]!==null&&s[o][1]===null;)c.push(s[o][0]),o++;const u=[];for(;o<s.length&&s[o][0]===null&&s[o][1]!==null;)u.push(s[o][1]),o++;bE(c,u,r)}return r}function SE(n){const e={added:0,removed:0,modified:0,equal:0};for(const t of n)t.type==="modified"?e.modified++:t.content?.trim()&&e[t.type]++;return e}function EE(n){const e=[];let t=1,i=1;for(const s of n){const r=s.content??"";s.type==="equal"?e.push({left:{lineNumber:t++,type:"equal",content:r},right:{lineNumber:i++,type:"equal",content:r},isDiff:!1}):s.type==="removed"?e.push({left:{lineNumber:t++,type:"removed",content:r},right:{lineNumber:null,type:"empty"},isDiff:!0}):s.type==="added"?e.push({left:{lineNumber:null,type:"empty"},right:{lineNumber:i++,type:"added",content:r},isDiff:!0}):s.type==="modified"&&e.push({left:{lineNumber:t++,type:"modified",chars:s.chars},right:{lineNumber:i++,type:"modified",chars:s.chars},isDiff:!0})}return e}function TE(){const n=We(""),e=We(""),t=We([]),i=We({added:0,removed:0,modified:0,equal:0}),s=Xe(()=>t.value.length>0),r=Xe(()=>t.value.reduce((p,g,v)=>(g.isDiff&&p.push(v),p),[])),o=We(-1),a=Xe(()=>r.value[o.value]??-1),l=Xe(()=>t.value.map(p=>p.left)),c=Xe(()=>t.value.map(p=>p.right));function u(){if(!n.value.trim()&&!e.value.trim())return;const p=ME(n.value,e.value);t.value=EE(p),i.value=SE(p),o.value=r.value.length>0?0:-1}function h(){r.value.length!==0&&(o.value=(o.value+1)%r.value.length)}function f(){r.value.length!==0&&(o.value=(o.value-1+r.value.length)%r.value.length)}return{originalText:n,modifiedText:e,renderedPairs:t,stats:i,hasResult:s,diffIndices:r,currentDiffStep:o,currentPairIndex:a,leftLines:l,rightLines:c,compare:u,goToNext:h,goToPrev:f}}const wE={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},AE={class:"flex-1 flex flex-col gap-3 overflow-hidden"},CE={class:"grid grid-cols-1 lg:grid-cols-2 gap-3",style:{"flex-shrink":"0"}},RE={class:"flex flex-col gap-1"},PE={class:"flex flex-col gap-1"},DE={class:"flex items-center gap-3 flex-wrap flex-shrink-0"},LE={class:"flex items-center gap-2 text-xs font-medium"},IE={key:0,class:"flex items-center gap-1 ml-auto"},NE={class:"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 overflow-hidden"},UE=Mn({__name:"TextCompareView",emits:["back"],setup(n){const{currentTheme:e}=Mi(),t=Xe(()=>e.value.name==="dark"||e.value.name==="midnight"),{originalText:i,modifiedText:s,stats:r,hasResult:o,diffIndices:a,currentDiffStep:l,currentPairIndex:c,leftLines:u,rightLines:h,compare:f,goToNext:p,goToPrev:g}=TE(),v=We(),m=We();let d=!1;function T(){if(d)return;d=!0;const b=m.value?.scrollEl;b&&v.value?.scrollEl&&(b.scrollTop=v.value.scrollEl.scrollTop),d=!1}function A(){if(d)return;d=!0;const b=v.value?.scrollEl;b&&m.value?.scrollEl&&(b.scrollTop=m.value.scrollEl.scrollTop),d=!1}return er(()=>{v.value?.scrollEl?.addEventListener("scroll",T),m.value?.scrollEl?.addEventListener("scroll",A)}),tr(()=>{v.value?.scrollEl?.removeEventListener("scroll",T),m.value?.scrollEl?.removeEventListener("scroll",A)}),mi(c,b=>{if(b<0)return;const E=v.value?.scrollEl,P=m.value?.scrollEl;if(!E||!P)return;const I=28,V=Math.max(0,b*I-E.clientHeight/2+I/2);E.scrollTop=V,P.scrollTop=V}),(b,E)=>(ue(),me("div",wE,[mt(Aa,{"tool-name":"Text Compare","tool-description":"Compare two texts with line and character-level diff",onBack:E[0]||(E[0]=P=>b.$emit("back"))}),R("div",AE,[R("div",CE,[R("div",RE,[R("label",{class:X(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",N(e).colors.textMuted])},"Original",2),Wo(R("textarea",{"onUpdate:modelValue":E[1]||(E[1]=P=>It(i)?i.value=P:null),placeholder:"Paste original text here...",rows:"6",class:X(["w-full resize-none rounded-xl p-3 font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50",[N(e).colors.bgCard,N(e).colors.textPrimary,t.value?"ring-1 ring-white/10 placeholder:text-gray-600":"border border-white/50 placeholder:text-gray-300"]])},null,2),[[Ko,N(i)]])]),R("div",PE,[R("label",{class:X(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",N(e).colors.textMuted])},"Modified",2),Wo(R("textarea",{"onUpdate:modelValue":E[2]||(E[2]=P=>It(s)?s.value=P:null),placeholder:"Paste modified text here...",rows:"6",class:X(["w-full resize-none rounded-xl p-3 font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50",[N(e).colors.bgCard,N(e).colors.textPrimary,t.value?"ring-1 ring-white/10 placeholder:text-gray-600":"border border-white/50 placeholder:text-gray-300"]])},null,2),[[Ko,N(s)]])])]),R("div",DE,[R("button",{class:X(["px-4 py-1.5 rounded-lg text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",t.value?"bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500":"bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600"]),onClick:E[3]||(E[3]=(...P)=>N(f)&&N(f)(...P))}," Compare ",2),N(o)?(ue(),me(At,{key:0},[R("div",LE,[N(r).added>0?(ue(),me("span",{key:0,class:X(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-green-900/50 text-green-400":"bg-green-100 text-green-700"])},"+"+qe(N(r).added)+" added",3)):rt("",!0),N(r).removed>0?(ue(),me("span",{key:1,class:X(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-red-900/50 text-red-400":"bg-red-100 text-red-700"])},"-"+qe(N(r).removed)+" removed",3)):rt("",!0),N(r).modified>0?(ue(),me("span",{key:2,class:X(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-amber-900/50 text-amber-400":"bg-amber-100 text-amber-700"])},"~"+qe(N(r).modified)+" modified",3)):rt("",!0),N(r).equal>0?(ue(),me("span",{key:3,class:X(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-white/10 text-gray-400":"bg-gray-100 text-gray-500"])},"="+qe(N(r).equal)+" equal",3)):rt("",!0)]),N(a).length>0?(ue(),me("div",IE,[R("button",{class:X(["w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200",t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-800 hover:bg-black/5"]),"aria-label":"Previous diff",onClick:E[4]||(E[4]=(...P)=>N(g)&&N(g)(...P))},[...E[6]||(E[6]=[R("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1)])],2),R("span",{class:X(["text-xs font-mono px-2 transition-colors duration-300",N(e).colors.textMuted])},qe(N(l)+1)+" / "+qe(N(a).length),3),R("button",{class:X(["w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200",t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-800 hover:bg-black/5"]),"aria-label":"Next diff",onClick:E[5]||(E[5]=(...P)=>N(p)&&N(p)(...P))},[...E[7]||(E[7]=[R("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)])],2)])):rt("",!0)],64)):rt("",!0)]),R("div",NE,[mt(wd,{ref_key:"leftPanel",ref:v,lines:N(u),"current-pair-index":N(c),side:"left"},null,8,["lines","current-pair-index"]),mt(wd,{ref_key:"rightPanel",ref:m,lines:N(h),"current-pair-index":N(c),side:"right"},null,8,["lines","current-pair-index"])])])]))}}),FE=50*1024*1024;function OE(n,e){const t=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return e==="CRLF"?t.replace(/\n/g,`\r
`):t}function BE(n,e){const t=OE(n,e),i=new TextEncoder().encode(t);return btoa(Array.from(i,s=>String.fromCharCode(s)).join(""))}function kE(n){return new Promise((e,t)=>{const i=new FileReader;i.onload=()=>{const s=i.result;e(s.split(",")[1]??"")},i.onerror=()=>t(new Error("Failed to read file")),i.readAsDataURL(n)})}function zE(n){const e=atob(n.replace(/\s/g,"")),t=Uint8Array.from(e,i=>i.charCodeAt(0));return new TextDecoder().decode(t)}function VE(n){return new Promise((e,t)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=()=>t(new Error("Failed to read file")),i.readAsText(n)})}function HE(n,e){const t=new Blob([n],{type:"text/plain"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=e,s.click(),URL.revokeObjectURL(i)}function Np(n){return n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/(1024*1024)).toFixed(1)} MB`}function GE(){const n=We("encode"),e=We("text"),t=We("LF"),i=We(""),s=We(""),r=We(null),o=We(!1),a=We(null),l=We(!1),c=Xe(()=>s.value.length>0),u=Xe(()=>e.value==="text"?i.value.trim().length>0:r.value!==null),h=Xe(()=>n.value==="encode"&&e.value==="text"),f=Xe(()=>c.value&&(e.value==="file"||n.value==="decode")),p=Xe(()=>n.value==="encode"?r.value?`${r.value.name}.b64.txt`:"encoded.txt":r.value&&r.value.name.replace(/\.b64\.txt$|\.txt$/,"")||"decoded.txt");async function g(){a.value=null,s.value="",o.value=!0;try{if(n.value==="encode")e.value==="text"?s.value=BE(i.value,t.value):r.value&&(s.value=await kE(r.value));else{if(e.value==="file"&&r.value&&r.value.size>FE){a.value=`File too large (max 50 MB). Selected: ${Np(r.value.size)}`;return}const T=e.value==="text"?i.value:await VE(r.value);s.value=zE(T)}}catch{a.value=n.value==="decode"?"Invalid Base64 input — check the content and try again.":"Failed to encode the input."}finally{o.value=!1}}async function v(){s.value&&(await navigator.clipboard.writeText(s.value),l.value=!0,setTimeout(()=>{l.value=!1},2e3))}function m(){s.value&&HE(s.value,p.value)}function d(){i.value="",s.value="",r.value=null,a.value=null,l.value=!1}return mi([n,e],d),{mode:n,inputType:e,lineEnding:t,inputText:i,outputText:s,selectedFile:r,isProcessing:o,error:a,hasCopied:l,hasOutput:c,canProcess:u,showLineEnding:h,showDownload:f,outputFilename:p,process:g,copyOutput:v,downloadOutput:m,clearAll:d}}const WE={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},XE={class:"flex-1 flex flex-col gap-4 overflow-hidden"},jE={class:"flex justify-center flex-shrink-0"},$E={class:"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden"},YE={class:"flex items-center justify-between flex-shrink-0"},qE=["placeholder"],KE={key:0,class:"flex items-center gap-2 flex-shrink-0"},JE={class:"text-center"},ZE={class:"text-center"},QE={class:"flex flex-col gap-2 flex-shrink-0"},eT=["disabled"],tT={key:0},nT={key:1},iT={class:"flex items-center justify-between flex-shrink-0"},sT={class:"flex items-center gap-1"},rT={key:0,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},oT={key:1,class:"w-3.5 h-3.5 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},aT=["value"],lT={key:2,class:"flex-shrink-0 flex justify-end"},cT=Mn({__name:"Base64View",emits:["back"],setup(n){const{currentTheme:e}=Mi(),t=Xe(()=>e.value.name==="dark"||e.value.name==="midnight"),{mode:i,inputType:s,lineEnding:r,inputText:o,outputText:a,selectedFile:l,isProcessing:c,error:u,hasCopied:h,hasOutput:f,canProcess:p,showLineEnding:g,showDownload:v,process:m,copyOutput:d,downloadOutput:T,clearAll:A}=GE(),b=We(!1),E=We();function P(W){b.value=!1;const H=W.dataTransfer?.files[0];H&&(l.value=H)}function I(W){const H=W.target.files?.[0];H&&(l.value=H)}function V(){l.value=null,E.value&&(E.value.value="")}const x=Xe(()=>[e.value.colors.bgCard,e.value.colors.shadow,t.value?"ring-1 ring-white/10":"border border-white/50"]),S=Xe(()=>t.value?"bg-white/15 text-white":"bg-white text-gray-900 shadow-sm"),L=Xe(()=>t.value?"text-gray-400 hover:text-gray-200":"text-gray-500 hover:text-gray-800"),F=Xe(()=>t.value?"bg-white/15 text-white":"bg-primary-600 text-white"),B=Xe(()=>t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-700 hover:bg-black/5"),te=Xe(()=>t.value?"bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500":"bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600"),ie=Xe(()=>t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-700 hover:bg-black/5"),Q=Xe(()=>["w-full font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50 rounded-xl p-3",e.value.colors.bgCard,e.value.colors.textPrimary,t.value?"ring-1 ring-white/10 placeholder:text-gray-600":"border border-white/50 placeholder:text-gray-300"]);return(W,H)=>(ue(),me("div",WE,[mt(Aa,{"tool-name":"Base64","tool-description":"Encode and decode text or files to/from Base64",onBack:H[0]||(H[0]=pe=>W.$emit("back"))}),R("div",XE,[R("div",jE,[R("div",{class:X(["inline-flex rounded-xl p-1 gap-1 transition-colors duration-300",t.value?"bg-white/10":"bg-black/5"])},[R("button",{class:X(["px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200",N(i)==="encode"?S.value:L.value]),onClick:H[1]||(H[1]=pe=>i.value="encode")},"Encode",2),R("button",{class:X(["px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200",N(i)==="decode"?S.value:L.value]),onClick:H[2]||(H[2]=pe=>i.value="decode")},"Decode",2)],2)]),R("div",$E,[R("div",{class:X(["rounded-2xl p-4 md:p-5 flex flex-col gap-3 overflow-hidden transition-all duration-300",x.value])},[R("div",YE,[R("span",{class:X(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",N(e).colors.textMuted])},"Input",2),R("div",{class:X(["inline-flex rounded-lg p-0.5 gap-0.5 transition-colors duration-300",t.value?"bg-white/10":"bg-black/5"])},[R("button",{class:X(["px-3 py-1 rounded-md text-xs font-medium transition-all duration-200",N(s)==="text"?F.value:B.value]),onClick:H[3]||(H[3]=pe=>s.value="text")},"Text",2),R("button",{class:X(["px-3 py-1 rounded-md text-xs font-medium transition-all duration-200",N(s)==="file"?F.value:B.value]),onClick:H[4]||(H[4]=pe=>s.value="file")},"File",2)],2)]),N(s)==="text"?(ue(),me(At,{key:0},[Wo(R("textarea",{"onUpdate:modelValue":H[5]||(H[5]=pe=>It(o)?o.value=pe:null),placeholder:N(i)==="encode"?"Paste text to encode...":"Paste Base64 to decode...",class:X(["flex-1 resize-none",Q.value])},null,10,qE),[[Ko,N(o)]]),N(g)?(ue(),me("div",KE,[R("span",{class:X(["text-xs transition-colors duration-300",N(e).colors.textMuted])},"Line endings:",2),R("div",{class:X(["inline-flex rounded-lg p-0.5 gap-0.5",t.value?"bg-white/10":"bg-black/5"])},[R("button",{class:X(["px-2.5 py-0.5 rounded-md text-xs font-mono font-medium transition-all duration-200",N(r)==="LF"?F.value:B.value]),onClick:H[6]||(H[6]=pe=>r.value="LF")},"LF",2),R("button",{class:X(["px-2.5 py-0.5 rounded-md text-xs font-mono font-medium transition-all duration-200",N(r)==="CRLF"?F.value:B.value]),onClick:H[7]||(H[7]=pe=>r.value="CRLF")},"CRLF",2)],2)])):rt("",!0)],64)):(ue(),me(At,{key:1},[N(l)?(ue(),me("div",{key:1,class:X(["flex-1 rounded-xl flex flex-col items-center justify-center gap-3 p-6 transition-colors duration-300",t.value?"bg-white/5":"bg-gray-50"])},[(ue(),me("svg",{class:X(["w-12 h-12 transition-colors duration-300",t.value?"text-primary-400":"text-primary-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...H[17]||(H[17]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)])],2)),R("div",ZE,[R("p",{class:X(["text-sm font-medium truncate max-w-[200px] transition-colors duration-300",N(e).colors.textPrimary])},qe(N(l).name),3),R("p",{class:X(["text-xs mt-0.5 transition-colors duration-300",N(e).colors.textMuted])},qe(N(Np)(N(l).size)),3)]),R("button",{class:X(["text-xs px-3 py-1 rounded-lg transition-all duration-200",ie.value]),onClick:V},"Remove file",2)],2)):(ue(),me("div",{key:0,class:X(["flex-1 rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200",[b.value?t.value?"border-primary-400 bg-primary-900/20":"border-primary-500 bg-primary-50":t.value?"border-white/20 hover:border-white/40":"border-gray-200 hover:border-gray-300"]]),onDragover:H[8]||(H[8]=Jo(pe=>b.value=!0,["prevent"])),onDragleave:H[9]||(H[9]=pe=>b.value=!1),onDrop:Jo(P,["prevent"]),onClick:H[10]||(H[10]=pe=>E.value?.click())},[(ue(),me("svg",{class:X(["w-10 h-10 transition-colors duration-300",t.value?"text-gray-600":"text-gray-300"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...H[15]||(H[15]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"},null,-1)])],2)),R("div",JE,[R("p",{class:X(["text-sm font-medium transition-colors duration-300",N(e).colors.textSecondary])},[...H[16]||(H[16]=[Un("Drop file here or ",-1),R("span",{class:"text-primary-500"},"browse",-1)])],2),N(i)==="decode"?(ue(),me("p",{key:0,class:X(["text-xs mt-1 transition-colors duration-300",N(e).colors.textMuted])},"Max 50 MB",2)):rt("",!0)]),R("input",{ref_key:"fileInput",ref:E,type:"file",class:"hidden",onChange:I},null,544)],34))],64)),R("div",QE,[R("button",{class:X(["w-full py-2 rounded-xl text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100",te.value]),disabled:!N(p)||N(c),onClick:H[11]||(H[11]=(...pe)=>N(m)&&N(m)(...pe))},[N(c)?(ue(),me("span",tT,"Processing…")):(ue(),me("span",nT,qe(N(i)==="encode"?"Encode":"Decode"),1))],10,eT),N(u)?(ue(),me("p",{key:0,class:X(["text-xs px-3 py-2 rounded-lg transition-colors duration-300",t.value?"bg-red-900/40 text-red-300":"bg-red-50 text-red-700 border border-red-200"])},qe(N(u)),3)):rt("",!0)])],2),R("div",{class:X(["rounded-2xl p-4 md:p-5 flex flex-col gap-3 overflow-hidden transition-all duration-300",x.value])},[R("div",iT,[R("span",{class:X(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",N(e).colors.textMuted])},"Output",2),R("div",sT,[N(f)?(ue(),me("button",{key:0,class:X(["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200",ie.value]),onClick:H[12]||(H[12]=(...pe)=>N(d)&&N(d)(...pe))},[N(h)?(ue(),me("svg",oT,[...H[19]||(H[19]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])])):(ue(),me("svg",rT,[...H[18]||(H[18]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"},null,-1)])])),Un(" "+qe(N(h)?"Copied!":"Copy"),1)],2)):rt("",!0),N(v)?(ue(),me("button",{key:1,class:X(["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200",ie.value]),onClick:H[13]||(H[13]=(...pe)=>N(T)&&N(T)(...pe))},[...H[20]||(H[20]=[R("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})],-1),Un(" Download .txt ",-1)])],2)):rt("",!0),N(f)?(ue(),me("button",{key:2,class:X(["px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200",ie.value]),onClick:H[14]||(H[14]=(...pe)=>N(A)&&N(A)(...pe))},"Clear",2)):rt("",!0)])]),N(f)?rt("",!0):(ue(),me("div",{key:0,class:X(["flex-1 flex flex-col items-center justify-center gap-2 transition-colors duration-300",N(e).colors.textMuted])},[...H[21]||(H[21]=[R("svg",{class:"w-10 h-10 opacity-30",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),R("p",{class:"text-xs"},"Result will appear here",-1)])],2)),N(f)?(ue(),me("textarea",{key:1,value:N(a),readonly:"",class:X(["flex-1 resize-none",Q.value])},null,10,aT)):rt("",!0),N(f)?(ue(),me("div",lT,[R("span",{class:X(["text-[11px] transition-colors duration-300",N(e).colors.textMuted])},qe(N(a).length.toLocaleString())+" chars",3)])):rt("",!0)],2)])])]))}});function uT(n){let e=n.trim().replace(/^#/,"");e.length===3&&(e=e.split("").map(i=>i+i).join(""));const t=parseInt(e,16);return{r:t>>16&255,g:t>>8&255,b:t&255}}function Up(n,e,t){return"#"+[n,e,t].map(i=>i.toString(16).padStart(2,"0")).join("")}function hT(n,e,t){const i=n/255,s=e/255,r=t/255,o=Math.max(i,s,r),a=Math.min(i,s,r),l=(o+a)/2;if(o===a)return{h:0,s:0,l:Math.round(l*100)};const c=o-a,u=l>.5?c/(2-o-a):c/(o+a);let h=0;return o===i?h=((s-r)/c+(s<r?6:0))/6:o===s?h=((r-i)/c+2)/6:h=((i-s)/c+4)/6,{h:Math.round(h*360),s:Math.round(u*100),l:Math.round(l*100)}}function dT(n,e,t){const i=e/100,s=t/100,r=l=>(l+n/30)%12,o=i*Math.min(s,1-s),a=l=>s-o*Math.max(-1,Math.min(r(l)-3,Math.min(9-r(l),1)));return{r:Math.round(a(0)*255),g:Math.round(a(8)*255),b:Math.round(a(4)*255)}}function Fp(n,e,t){const i=hT(n,e,t);return{r:n,g:e,b:t,hex:Up(n,e,t),...i}}function Ca(n,e,t){const{r:i,g:s,b:r}=dT(n,e,t);return{h:n,s:e,l:t,r:i,g:s,b:r,hex:Up(i,s,r)}}function Ad(n){const{r:e,g:t,b:i}=uT(n);return Fp(e,t,i)}function pi(n,e){return Ca((n.h+e+360)%360,n.s,n.l)}function fT(n){return/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(n.trim())}function pT(n){const e=i=>{const s=i/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)};return .2126*e(n.r)+.7152*e(n.g)+.0722*e(n.b)>.179?"#000000":"#ffffff"}function Cl(n,e){return e==="hex"?n.hex:e==="rgb"?`rgb(${n.r}, ${n.g}, ${n.b})`:`hsl(${n.h}, ${n.s}%, ${n.l}%)`}function mT(n,e=5){return[.8,.6,.4,.25,.1].slice(0,e).map(t=>Ca(n.h,n.s,Math.max(2,Math.round(n.l*t))))}function gT(n,e=5){return[.2,.4,.6,.75,.9].slice(0,e).map(t=>Ca(n.h,n.s,Math.min(98,Math.round(n.l+(100-n.l)*t))))}function _T(n){return[pi(n,180)]}function vT(n){return[pi(n,-60),pi(n,-30),pi(n,30),pi(n,60)]}function xT(n){return[pi(n,120),pi(n,240)]}function yT(n){return[pi(n,150),pi(n,210)]}const Cd="#3b82f6";function bT(){const n=We(Ad(Cd)),e=We(Cd),t=We(n.value.r),i=We(n.value.g),s=We(n.value.b),r=We(n.value.h),o=We(n.value.s),a=We(n.value.l),l=We("hex"),c=We(null),u=Xe(()=>[{name:"Shades",description:"Darker variants",colors:mT(n.value)},{name:"Tints",description:"Lighter variants",colors:gT(n.value)},{name:"Complementary",description:"Opposite on the color wheel",colors:_T(n.value)},{name:"Analogous",description:"Adjacent colors (±30°, ±60°)",colors:vT(n.value)},{name:"Triadic",description:"Three evenly spaced colors (+120°, +240°)",colors:xT(n.value)},{name:"Split Complementary",description:"Near the complement (+150°, +210°)",colors:yT(n.value)}]);function h(d){e.value=d.hex,t.value=d.r,i.value=d.g,s.value=d.b,r.value=d.h,o.value=d.s,a.value=d.l}function f(d){const T=d.startsWith("#")?d:`#${d}`;if(!fT(T))return;const A=Ad(T);n.value=A,h(A)}function p(d,T,A){const b=P=>Math.min(255,Math.max(0,Math.round(P))),E=Fp(b(d),b(T),b(A));n.value=E,h(E)}function g(d,T,A){const b=(d%360+360)%360,E=Math.min(100,Math.max(0,T)),P=Math.min(100,Math.max(0,A)),I=Ca(b,E,P);n.value=I,h(I)}async function v(d,T){await navigator.clipboard.writeText(Cl(d,l.value)),c.value=T,setTimeout(()=>{c.value===T&&(c.value=null)},2e3)}async function m(d){const T=d.name.toLowerCase().replace(/\s+/g,"-"),A=d.colors.map((b,E)=>`--${T}-${E+1}: ${Cl(b,l.value)};`).join(`
`);await navigator.clipboard.writeText(A),c.value=`palette-${d.name}`,setTimeout(()=>{c.value===`palette-${d.name}`&&(c.value=null)},2e3)}return{baseColor:n,hexInput:e,rgbR:t,rgbG:i,rgbB:s,hslH:r,hslS:o,hslL:a,copyFormat:l,copiedKey:c,palettes:u,setFromHex:f,setFromRgb:p,setFromHsl:g,copySwatch:v,copyPalette:m,formatColor:Cl}}const MT={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},ST={class:"flex-1 flex flex-col gap-4 overflow-hidden"},ET={class:"flex items-center gap-5 flex-wrap"},TT={class:"flex items-center gap-3 flex-shrink-0"},wT={class:"relative"},AT=["value"],CT={class:"flex items-center gap-2"},RT=["value"],PT={class:"flex items-center gap-2"},DT=["value"],LT=["value"],IT=["value"],NT={class:"flex items-center gap-2"},UT={class:"flex items-center gap-1"},FT=["value"],OT={class:"flex items-center gap-1"},BT=["value"],kT={class:"flex items-center gap-1"},zT=["value"],VT={class:"flex-1 flex flex-col gap-0 overflow-hidden"},HT={class:"flex items-center justify-between mb-3 flex-shrink-0"},GT=["onClick"],WT={class:"flex-1 overflow-y-auto space-y-3 pr-1"},XT={class:"flex items-center justify-between mb-3"},jT=["onClick"],$T={key:0,class:"w-3 h-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},YT={key:1,class:"w-3 h-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},qT={class:"flex flex-wrap gap-3"},KT=["title","onClick"],JT=Mn({__name:"ColorPaletteView",emits:["back"],setup(n){const{currentTheme:e}=Mi(),t=Xe(()=>e.value.name==="dark"||e.value.name==="midnight"),{baseColor:i,hexInput:s,rgbR:r,rgbG:o,rgbB:a,hslH:l,hslS:c,hslL:u,copyFormat:h,copiedKey:f,palettes:p,setFromHex:g,setFromRgb:v,setFromHsl:m,copySwatch:d,copyPalette:T,formatColor:A}=bT(),b=Xe(()=>[e.value.colors.bgCard,e.value.colors.shadow,t.value?"ring-1 ring-white/10":"border border-white/50"]),E=Xe(()=>["rounded-lg px-2 py-1 text-sm font-mono outline-none transition-all duration-200","focus:ring-2 focus:ring-primary-500/50",e.value.colors.bgCard,e.value.colors.textPrimary,t.value?"ring-1 ring-white/10":"border border-gray-200"]),P=Xe(()=>t.value?"bg-white/15 text-white":"bg-white text-gray-900 shadow-sm"),I=Xe(()=>t.value?"text-gray-400 hover:text-gray-200":"text-gray-500 hover:text-gray-800"),V=Xe(()=>t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-700 hover:bg-black/5");function x(L){g(L.target.value)}function S(){s.value=i.value.hex}return(L,F)=>(ue(),me("div",MT,[mt(Aa,{"tool-name":"Color Palette","tool-description":"Convert HEX/RGB/HSL and generate color palettes",onBack:F[0]||(F[0]=B=>L.$emit("back"))}),R("div",ST,[R("div",{class:X(["rounded-2xl p-4 md:p-5 flex-shrink-0 transition-all duration-300",b.value])},[R("div",ET,[R("div",TT,[R("div",wT,[R("div",{class:"w-16 h-16 rounded-xl shadow-md cursor-pointer overflow-hidden flex-shrink-0 ring-2 ring-white/20",style:Ui({backgroundColor:N(i).hex})},[R("input",{type:"color",value:N(i).hex,class:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",onInput:F[1]||(F[1]=B=>N(g)(B.target.value))},null,40,AT)],4)]),R("div",null,[R("p",{class:X(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",N(e).colors.textMuted])},"Base Color",2),R("p",{class:X(["text-sm font-mono font-semibold mt-0.5 transition-colors duration-300",N(e).colors.textPrimary])},qe(N(i).hex),3)])]),R("div",{class:X(["hidden sm:block w-px h-12 flex-shrink-0 transition-colors duration-300",t.value?"bg-white/10":"bg-gray-200"])},null,2),R("div",CT,[R("span",{class:X(["text-xs font-semibold w-7 transition-colors duration-300",N(e).colors.textMuted])},"HEX",2),R("input",{type:"text",value:N(s),placeholder:"#3b82f6",class:X(["w-28",E.value]),onChange:x,onBlur:S},null,42,RT)]),R("div",PT,[R("span",{class:X(["text-xs font-semibold w-7 transition-colors duration-300",N(e).colors.textMuted])},"RGB",2),R("input",{type:"number",min:"0",max:"255",value:N(r),placeholder:"R",class:X(["w-14 text-center",E.value]),onChange:F[2]||(F[2]=B=>N(v)(+B.target.value,N(o),N(a)))},null,42,DT),R("input",{type:"number",min:"0",max:"255",value:N(o),placeholder:"G",class:X(["w-14 text-center",E.value]),onChange:F[3]||(F[3]=B=>N(v)(N(r),+B.target.value,N(a)))},null,42,LT),R("input",{type:"number",min:"0",max:"255",value:N(a),placeholder:"B",class:X(["w-14 text-center",E.value]),onChange:F[4]||(F[4]=B=>N(v)(N(r),N(o),+B.target.value))},null,42,IT)]),R("div",NT,[R("span",{class:X(["text-xs font-semibold w-7 transition-colors duration-300",N(e).colors.textMuted])},"HSL",2),R("div",UT,[R("input",{type:"number",min:"0",max:"360",value:N(l),placeholder:"H",class:X(["w-14 text-center",E.value]),onChange:F[5]||(F[5]=B=>N(m)(+B.target.value,N(c),N(u)))},null,42,FT),R("span",{class:X(["text-xs",N(e).colors.textMuted])},"°",2)]),R("div",OT,[R("input",{type:"number",min:"0",max:"100",value:N(c),placeholder:"S",class:X(["w-14 text-center",E.value]),onChange:F[6]||(F[6]=B=>N(m)(N(l),+B.target.value,N(u)))},null,42,BT),R("span",{class:X(["text-xs",N(e).colors.textMuted])},"%",2)]),R("div",kT,[R("input",{type:"number",min:"0",max:"100",value:N(u),placeholder:"L",class:X(["w-14 text-center",E.value]),onChange:F[7]||(F[7]=B=>N(m)(N(l),N(c),+B.target.value))},null,42,zT),R("span",{class:X(["text-xs",N(e).colors.textMuted])},"%",2)])])])],2),R("div",VT,[R("div",HT,[R("span",{class:X(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",N(e).colors.textMuted])},"Palettes",2),R("div",{class:X(["inline-flex rounded-lg p-0.5 gap-0.5 transition-colors duration-300",t.value?"bg-white/10":"bg-black/5"])},[(ue(),me(At,null,qn(["hex","rgb","hsl"],B=>R("button",{key:B,class:X(["px-3 py-1 rounded-md text-xs font-mono font-medium transition-all duration-200 uppercase",N(h)===B?P.value:I.value]),onClick:te=>h.value=B},qe(B),11,GT)),64))],2)]),R("div",WT,[(ue(!0),me(At,null,qn(N(p),B=>(ue(),me("div",{key:B.name,class:X(["rounded-2xl p-4 transition-all duration-300",b.value])},[R("div",XT,[R("div",null,[R("h3",{class:X(["text-sm font-semibold transition-colors duration-300",N(e).colors.textPrimary])},qe(B.name),3),R("p",{class:X(["text-xs transition-colors duration-300",N(e).colors.textMuted])},qe(B.description),3)]),R("button",{class:X(["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200",N(f)===`palette-${B.name}`?"text-green-500":V.value]),onClick:te=>N(T)(B)},[N(f)!==`palette-${B.name}`?(ue(),me("svg",$T,[...F[8]||(F[8]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"},null,-1)])])):(ue(),me("svg",YT,[...F[9]||(F[9]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])])),Un(" "+qe(N(f)===`palette-${B.name}`?"Copied!":"Copy as CSS vars"),1)],10,jT)]),R("div",qT,[(ue(!0),me(At,null,qn(B.colors,(te,ie)=>(ue(),me("button",{key:ie,class:"group flex flex-col items-center gap-1.5 focus:outline-none",title:`Click to copy ${N(A)(te,N(h))}`,onClick:Q=>N(d)(te,`${B.name}-${ie}`)},[R("div",{class:"w-14 h-14 rounded-xl shadow-md transition-all duration-150 group-hover:scale-105 group-hover:shadow-lg group-active:scale-95 relative overflow-hidden",style:Ui({backgroundColor:te.hex})},[N(f)===`${B.name}-${ie}`?(ue(),me("div",{key:0,class:"absolute inset-0 flex items-center justify-center",style:Ui({backgroundColor:te.hex})},[(ue(),me("svg",{class:"w-5 h-5",style:Ui({color:N(pT)(te)}),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...F[10]||(F[10]=[R("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",d:"M5 13l4 4L19 7"},null,-1)])],4))],4)):rt("",!0)],4),R("span",{class:X(["text-[10px] font-mono max-w-[56px] truncate transition-colors duration-300",N(f)===`${B.name}-${ie}`?"text-green-500":N(e).colors.textMuted])},qe(N(A)(te,N(h))),3)],8,KT))),128))])],2))),128))])])])]))}}),ZT=Mn({__name:"App",setup(n){const{currentTheme:e}=Mi(),t=We(null);function i(r){t.value=r}function s(){t.value=null}return(r,o)=>(ue(),me("div",{class:X(["min-h-screen w-full bg-gradient-to-br p-4 md:p-6 lg:p-8 transition-colors duration-300",N(e).colors.bgPrimary])},[mt(wr,{name:"view",mode:"out-in"},{default:Hs(()=>[t.value===null?(ue(),Ln(Yg,{key:"home",onSelectTool:i})):t.value==="json-viewer"?(ue(),Ln(mE,{key:"json-viewer",onBack:s})):t.value==="text-compare"?(ue(),Ln(UE,{key:"text-compare",onBack:s})):t.value==="base64"?(ue(),Ln(cT,{key:"base64",onBack:s})):t.value==="color-palette"?(ue(),Ln(JT,{key:"color-palette",onBack:s})):rt("",!0)]),_:1})],2))}}),QT=ru(ZT,[["__scopeId","data-v-7c7c0aaa"]]);xg(QT).mount("#app");
