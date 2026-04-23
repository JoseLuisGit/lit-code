(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function jc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const bt={},Xs=[],Kn=()=>{},zd=()=>!1,fa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Yc=n=>n.startsWith("onUpdate:"),Ot=Object.assign,qc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},sm=Object.prototype.hasOwnProperty,dt=(n,e)=>sm.call(n,e),Je=Array.isArray,$s=n=>pa(n)==="[object Map]",Vd=n=>pa(n)==="[object Set]",tt=n=>typeof n=="function",Lt=n=>typeof n=="string",Wi=n=>typeof n=="symbol",At=n=>n!==null&&typeof n=="object",Hd=n=>(At(n)||tt(n))&&tt(n.then)&&tt(n.catch),Gd=Object.prototype.toString,pa=n=>Gd.call(n),rm=n=>pa(n).slice(8,-1),Wd=n=>pa(n)==="[object Object]",Kc=n=>Lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Tr=jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},om=/-\w/g,Dn=ma(n=>n.replace(om,e=>e.slice(1).toUpperCase())),am=/\B([A-Z])/g,Xi=ma(n=>n.replace(am,"-$1").toLowerCase()),ga=ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ba=ma(n=>n?`on${ga(n)}`:""),zi=(n,e)=>!Object.is(n,e),Fo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Xd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Jc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},lm=n=>{const e=Lt(n)?Number(n):NaN;return isNaN(e)?n:e};let ku;const va=()=>ku||(ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gi(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Lt(i)?dm(i):gi(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Lt(n)||At(n))return n}const cm=/;(?![^(]*\))/g,um=/:([^]+)/,hm=/\/\*[^]*?\*\//g;function dm(n){const e={};return n.replace(hm,"").split(cm).forEach(t=>{if(t){const i=t.split(um);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function B(n){let e="";if(Lt(n))e=n;else if(Je(n))for(let t=0;t<n.length;t++){const i=B(n[t]);i&&(e+=i+" ")}else if(At(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const fm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pm=jc(fm);function $d(n){return!!n||n===""}const jd=n=>!!(n&&n.__v_isRef===!0),$e=n=>Lt(n)?n:n==null?"":Je(n)||At(n)&&(n.toString===Gd||!tt(n.toString))?jd(n)?$e(n.value):JSON.stringify(n,Yd,2):String(n),Yd=(n,e)=>jd(e)?Yd(n,e.value):$s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[ka(i,r)+" =>"]=s,t),{})}:Vd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ka(t))}:Wi(e)?ka(e):At(e)&&!Je(e)&&!Wd(e)?String(e):e,ka=(n,e="")=>{var t;return Wi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let ln;class mm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ln,!e&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ln;try{return ln=this,e()}finally{ln=t}}}on(){++this._on===1&&(this.prevScope=ln,ln=this)}off(){this._on>0&&--this._on===0&&(ln=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function gm(){return ln}let wt;const za=new WeakSet;class qd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ln&&ln.active&&ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,za.has(this)&&(za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zu(this),Zd(this);const e=wt,t=Fn;wt=this,Fn=!0;try{return this.fn()}finally{Qd(this),wt=e,Fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eu(e);this.deps=this.depsTail=void 0,zu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fl(this)&&this.run()}get dirty(){return Fl(this)}}let Kd=0,Ar,Cr;function Jd(n,e=!1){if(n.flags|=8,e){n.next=Cr,Cr=n;return}n.next=Ar,Ar=n}function Zc(){Kd++}function Qc(){if(--Kd>0)return;if(Cr){let e=Cr;for(Cr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ar;){let e=Ar;for(Ar=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Zd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),eu(i),vm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Fl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ef(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ef(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Or)||(n.globalVersion=Or,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Fl(n))))return;n.flags|=2;const e=n.dep,t=wt,i=Fn;wt=n,Fn=!0;try{Zd(n);const s=n.fn(n._value);(e.version===0||zi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{wt=t,Fn=i,Qd(n),n.flags&=-3}}function eu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)eu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function vm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Fn=!0;const tf=[];function yi(){tf.push(Fn),Fn=!1}function bi(){const n=tf.pop();Fn=n===void 0?!0:n}function zu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=wt;wt=void 0;try{e()}finally{wt=t}}}let Or=0;class xm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!wt||!Fn||wt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==wt)t=this.activeLink=new xm(wt,this),wt.deps?(t.prevDep=wt.depsTail,wt.depsTail.nextDep=t,wt.depsTail=t):wt.deps=wt.depsTail=t,nf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=wt.depsTail,t.nextDep=void 0,wt.depsTail.nextDep=t,wt.depsTail=t,wt.deps===t&&(wt.deps=i)}return t}trigger(e){this.version++,Or++,this.notify(e)}notify(e){Zc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Qc()}}}function nf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)nf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ol=new WeakMap,hs=Symbol(""),Bl=Symbol(""),Br=Symbol("");function $t(n,e,t){if(Fn&&wt){let i=Ol.get(n);i||Ol.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new tu),s.map=i,s.key=t),s.track()}}function pi(n,e,t,i,s,r){const o=Ol.get(n);if(!o){Or++;return}const a=l=>{l&&l.trigger()};if(Zc(),e==="clear")o.forEach(a);else{const l=Je(n),c=l&&Kc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Br||!Wi(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Br)),e){case"add":l?c&&a(o.get("length")):(a(o.get(hs)),$s(n)&&a(o.get(Bl)));break;case"delete":l||(a(o.get(hs)),$s(n)&&a(o.get(Bl)));break;case"set":$s(n)&&a(o.get(hs));break}}Qc()}function ys(n){const e=ht(n);return e===n?e:($t(e,"iterate",Br),Pn(n)?e:e.map(Bn))}function xa(n){return $t(n=ht(n),"iterate",Br),n}function Ii(n,e){return Mi(n)?Qs(ds(n)?Bn(e):e):Bn(e)}const _m={__proto__:null,[Symbol.iterator](){return Va(this,Symbol.iterator,n=>Ii(this,n))},concat(...n){return ys(this).concat(...n.map(e=>Je(e)?ys(e):e))},entries(){return Va(this,"entries",n=>(n[1]=Ii(this,n[1]),n))},every(n,e){return si(this,"every",n,e,void 0,arguments)},filter(n,e){return si(this,"filter",n,e,t=>t.map(i=>Ii(this,i)),arguments)},find(n,e){return si(this,"find",n,e,t=>Ii(this,t),arguments)},findIndex(n,e){return si(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return si(this,"findLast",n,e,t=>Ii(this,t),arguments)},findLastIndex(n,e){return si(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return si(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ha(this,"includes",n)},indexOf(...n){return Ha(this,"indexOf",n)},join(n){return ys(this).join(n)},lastIndexOf(...n){return Ha(this,"lastIndexOf",n)},map(n,e){return si(this,"map",n,e,void 0,arguments)},pop(){return ur(this,"pop")},push(...n){return ur(this,"push",n)},reduce(n,...e){return Vu(this,"reduce",n,e)},reduceRight(n,...e){return Vu(this,"reduceRight",n,e)},shift(){return ur(this,"shift")},some(n,e){return si(this,"some",n,e,void 0,arguments)},splice(...n){return ur(this,"splice",n)},toReversed(){return ys(this).toReversed()},toSorted(n){return ys(this).toSorted(n)},toSpliced(...n){return ys(this).toSpliced(...n)},unshift(...n){return ur(this,"unshift",n)},values(){return Va(this,"values",n=>Ii(this,n))}};function Va(n,e,t){const i=xa(n),s=i[e]();return i!==n&&!Pn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const ym=Array.prototype;function si(n,e,t,i,s,r){const o=xa(n),a=o!==n&&!Pn(n),l=o[e];if(l!==ym[e]){const h=l.apply(n,r);return a?Bn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Ii(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Vu(n,e,t,i){const s=xa(n);let r=t;return s!==n&&(Pn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Ii(n,a),l,n)}),s[e](r,...i)}function Ha(n,e,t){const i=ht(n);$t(i,"iterate",Br);const s=i[e](...t);return(s===-1||s===!1)&&ru(t[0])?(t[0]=ht(t[0]),i[e](...t)):s}function ur(n,e,t=[]){yi(),Zc();const i=ht(n)[e].apply(n,t);return Qc(),bi(),i}const bm=jc("__proto__,__v_isRef,__isVue"),sf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wi));function Mm(n){Wi(n)||(n=String(n));const e=ht(this);return $t(e,"has",n),e.hasOwnProperty(n)}class rf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Lm:cf:r?lf:af).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Je(e);if(!s){let l;if(o&&(l=_m[t]))return l;if(t==="hasOwnProperty")return Mm}const a=Reflect.get(e,t,Dt(e)?e:i);if((Wi(t)?sf.has(t):bm(t))||(s||$t(e,"get",t),r))return a;if(Dt(a)){const l=o&&Kc(t)?a:a.value;return s&&At(l)?zl(l):l}return At(a)?s?zl(a):iu(a):a}}class of extends rf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Je(e)&&Kc(t);if(!this._isShallow){const c=Mi(r);if(!Pn(i)&&!Mi(i)&&(r=ht(r),i=ht(i)),!o&&Dt(r)&&!Dt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:dt(e,t),l=Reflect.set(e,t,i,Dt(e)?e:s);return e===ht(s)&&(a?zi(i,r)&&pi(e,"set",t,i):pi(e,"add",t,i)),l}deleteProperty(e,t){const i=dt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&pi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Wi(t)||!sf.has(t))&&$t(e,"has",t),i}ownKeys(e){return $t(e,"iterate",Je(e)?"length":hs),Reflect.ownKeys(e)}}class Sm extends rf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Em=new of,wm=new Sm,Tm=new of(!0);const kl=n=>n,no=n=>Reflect.getPrototypeOf(n);function Am(n,e,t){return function(...i){const s=this.__v_raw,r=ht(s),o=$s(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?kl:e?Qs:Bn;return!e&&$t(r,"iterate",l?Bl:hs),Ot(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function io(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Cm(n,e){const t={get(s){const r=this.__v_raw,o=ht(r),a=ht(s);n||(zi(s,a)&&$t(o,"get",s),$t(o,"get",a));const{has:l}=no(o),c=e?kl:n?Qs:Bn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&$t(ht(s),"iterate",hs),s.size},has(s){const r=this.__v_raw,o=ht(r),a=ht(s);return n||(zi(s,a)&&$t(o,"has",s),$t(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ht(a),c=e?kl:n?Qs:Bn;return!n&&$t(l,"iterate",hs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ot(t,n?{add:io("add"),set:io("set"),delete:io("delete"),clear:io("clear")}:{add(s){!e&&!Pn(s)&&!Mi(s)&&(s=ht(s));const r=ht(this);return no(r).has.call(r,s)||(r.add(s),pi(r,"add",s,s)),this},set(s,r){!e&&!Pn(r)&&!Mi(r)&&(r=ht(r));const o=ht(this),{has:a,get:l}=no(o);let c=a.call(o,s);c||(s=ht(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?zi(r,u)&&pi(o,"set",s,r):pi(o,"add",s,r),this},delete(s){const r=ht(this),{has:o,get:a}=no(r);let l=o.call(r,s);l||(s=ht(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&pi(r,"delete",s,void 0),c},clear(){const s=ht(this),r=s.size!==0,o=s.clear();return r&&pi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Am(s,n,e)}),t}function nu(n,e){const t=Cm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(dt(t,s)&&s in i?t:i,s,r)}const Rm={get:nu(!1,!1)},Pm={get:nu(!1,!0)},Dm={get:nu(!0,!1)};const af=new WeakMap,lf=new WeakMap,cf=new WeakMap,Lm=new WeakMap;function Im(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nm(n){return n.__v_skip||!Object.isExtensible(n)?0:Im(rm(n))}function iu(n){return Mi(n)?n:su(n,!1,Em,Rm,af)}function Um(n){return su(n,!1,Tm,Pm,lf)}function zl(n){return su(n,!0,wm,Dm,cf)}function su(n,e,t,i,s){if(!At(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Nm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function ds(n){return Mi(n)?ds(n.__v_raw):!!(n&&n.__v_isReactive)}function Mi(n){return!!(n&&n.__v_isReadonly)}function Pn(n){return!!(n&&n.__v_isShallow)}function ru(n){return n?!!n.__v_raw:!1}function ht(n){const e=n&&n.__v_raw;return e?ht(e):n}function Fm(n){return!dt(n,"__v_skip")&&Object.isExtensible(n)&&Xd(n,"__v_skip",!0),n}const Bn=n=>At(n)?iu(n):n,Qs=n=>At(n)?zl(n):n;function Dt(n){return n?n.__v_isRef===!0:!1}function ke(n){return Om(n,!1)}function Om(n,e){return Dt(n)?n:new Bm(n,e)}class Bm{constructor(e,t){this.dep=new tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ht(e),this._value=t?e:Bn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Pn(e)||Mi(e);e=i?e:ht(e),zi(e,t)&&(this._rawValue=e,this._value=i?e:Bn(e),this.dep.trigger())}}function S(n){return Dt(n)?n.value:n}const km={get:(n,e,t)=>e==="__v_raw"?n:S(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Dt(s)&&!Dt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function uf(n){return ds(n)?n:new Proxy(n,km)}class zm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Or-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return Jd(this,!0),!0}get value(){const e=this.dep.track();return ef(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vm(n,e,t=!1){let i,s;return tt(n)?i=n:(i=n.get,s=n.set),new zm(i,s,t)}const so={},Ko=new WeakMap;let ss;function Hm(n,e=!1,t=ss){if(t){let i=Ko.get(t);i||Ko.set(t,i=[]),i.push(n)}}function Gm(n,e,t=bt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:Pn(M)||s===!1||s===0?mi(M,1):mi(M);let u,h,f,p,g=!1,x=!1;if(Dt(n)?(h=()=>n.value,g=Pn(n)):ds(n)?(h=()=>c(n),g=!0):Je(n)?(x=!0,g=n.some(M=>ds(M)||Pn(M)),h=()=>n.map(M=>{if(Dt(M))return M.value;if(ds(M))return c(M);if(tt(M))return l?l(M,2):M()})):tt(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){yi();try{f()}finally{bi()}}const M=ss;ss=u;try{return l?l(n,3,[p]):n(p)}finally{ss=M}}:h=Kn,e&&s){const M=h,E=s===!0?1/0:s;h=()=>mi(M(),E)}const m=gm(),d=()=>{u.stop(),m&&m.active&&qc(m.effects,u)};if(r&&e){const M=e;e=(...E)=>{M(...E),d()}}let A=x?new Array(n.length).fill(so):so;const R=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const E=u.run();if(s||g||(x?E.some((I,N)=>zi(I,A[N])):zi(E,A))){f&&f();const I=ss;ss=u;try{const N=[E,A===so?void 0:x&&A[0]===so?[]:A,p];A=E,l?l(e,3,N):e(...N)}finally{ss=I}}}else u.run()};return a&&a(R),u=new qd(h),u.scheduler=o?()=>o(R,!1):R,p=M=>Hm(M,!1,u),f=u.onStop=()=>{const M=Ko.get(u);if(M){if(l)l(M,4);else for(const E of M)E();Ko.delete(u)}},e?i?R(!0):A=u.run():o?o(R.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function mi(n,e=1/0,t){if(e<=0||!At(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Dt(n))mi(n.value,e,t);else if(Je(n))for(let i=0;i<n.length;i++)mi(n[i],e,t);else if(Vd(n)||$s(n))n.forEach(i=>{mi(i,e,t)});else if(Wd(n)){for(const i in n)mi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&mi(n[i],e,t)}return n}function Yr(n,e,t,i){try{return i?n(...i):n()}catch(s){_a(s,e,t)}}function kn(n,e,t,i){if(tt(n)){const s=Yr(n,e,t,i);return s&&Hd(s)&&s.catch(r=>{_a(r,e,t)}),s}if(Je(n)){const s=[];for(let r=0;r<n.length;r++)s.push(kn(n[r],e,t,i));return s}}function _a(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||bt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){yi(),Yr(r,null,10,[n,l,c]),bi();return}}Wm(n,t,s,i,o)}function Wm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const tn=[];let Gn=-1;const js=[];let Ni=null,Vs=0;const hf=Promise.resolve();let Jo=null;function df(n){const e=Jo||hf;return n?e.then(this?n.bind(this):n):e}function Xm(n){let e=Gn+1,t=tn.length;for(;e<t;){const i=e+t>>>1,s=tn[i],r=kr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function ou(n){if(!(n.flags&1)){const e=kr(n),t=tn[tn.length-1];!t||!(n.flags&2)&&e>=kr(t)?tn.push(n):tn.splice(Xm(e),0,n),n.flags|=1,ff()}}function ff(){Jo||(Jo=hf.then(mf))}function $m(n){Je(n)?js.push(...n):Ni&&n.id===-1?Ni.splice(Vs+1,0,n):n.flags&1||(js.push(n),n.flags|=1),ff()}function Hu(n,e,t=Gn+1){for(;t<tn.length;t++){const i=tn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;tn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function pf(n){if(js.length){const e=[...new Set(js)].sort((t,i)=>kr(t)-kr(i));if(js.length=0,Ni){Ni.push(...e);return}for(Ni=e,Vs=0;Vs<Ni.length;Vs++){const t=Ni[Vs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ni=null,Vs=0}}const kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function mf(n){try{for(Gn=0;Gn<tn.length;Gn++){const e=tn[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Yr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<tn.length;Gn++){const e=tn[Gn];e&&(e.flags&=-2)}Gn=-1,tn.length=0,pf(),Jo=null,(tn.length||js.length)&&mf()}}let _n=null,gf=null;function Zo(n){const e=_n;return _n=n,gf=n&&n.type.__scopeId||null,e}function Ys(n,e=_n,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ta(-1);const r=Zo(e);let o;try{o=n(...s)}finally{Zo(r),i._d&&ta(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Bi(n,e){if(_n===null)return n;const t=Ea(_n),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=bt]=e[s];r&&(tt(r)&&(r={mounted:r,updated:r}),r.deep&&mi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Yi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(yi(),kn(l,t,8,[n.el,a,n,e]),bi())}}function jm(n,e){if(jt){let t=jt.provides;const i=jt.parent&&jt.parent.provides;i===t&&(t=jt.provides=Object.create(i)),t[n]=e}}function Oo(n,e,t=!1){const i=Yf();if(i||qs){let s=qs?qs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&tt(e)?e.call(i&&i.proxy):e}}const Ym=Symbol.for("v-scx"),qm=()=>Oo(Ym);function Jn(n,e,t){return vf(n,e,t)}function vf(n,e,t=bt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ot({},t),l=e&&i||!e&&r!=="post";let c;if(Hr){if(r==="sync"){const p=qm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Kn,p.resume=Kn,p.pause=Kn,p}}const u=jt;a.call=(p,g,x)=>kn(p,u,g,x);let h=!1;r==="post"?a.scheduler=p=>{en(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():ou(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Gm(n,e,a);return Hr&&(c?c.push(f):l&&f()),f}function Km(n,e,t){const i=this.proxy,s=Lt(n)?n.includes(".")?xf(i,n):()=>i[n]:n.bind(i,i);let r;tt(e)?r=e:(r=e.handler,t=e);const o=qr(this),a=vf(s,r.bind(i),t);return o(),a}function xf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const _f=Symbol("_vte"),yf=n=>n.__isTeleport,Rr=n=>n&&(n.disabled||n.disabled===""),Gu=n=>n&&(n.defer||n.defer===""),Wu=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Xu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Vl=(n,e)=>{const t=n&&n.to;return Lt(t)?e?e(t):null:t},bf={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:p,querySelector:g,createText:x,createComment:m}}=c,d=Rr(e.props);let{shapeFlag:A,children:R,dynamicChildren:M}=e;if(n==null){const E=e.el=x(""),I=e.anchor=x("");p(E,t,i),p(I,t,i);const N=(y,w)=>{A&16&&u(R,y,w,s,r,o,a,l)},H=()=>{const y=e.target=Vl(e.props,g),w=Mf(y,e,x,p);y&&(o!=="svg"&&Wu(y)?o="svg":o!=="mathml"&&Xu(y)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),d||(N(y,w),Bo(e,!1)))};d&&(N(t,I),Bo(e,!0)),Gu(e.props)?(e.el.__isMounted=!1,en(()=>{H(),delete e.el.__isMounted},r)):H()}else{if(Gu(e.props)&&n.el.__isMounted===!1){en(()=>{bf.process(n,e,t,i,s,r,o,a,l,c)},r);return}e.el=n.el,e.targetStart=n.targetStart;const E=e.anchor=n.anchor,I=e.target=n.target,N=e.targetAnchor=n.targetAnchor,H=Rr(n.props),y=H?t:I,w=H?E:N;if(o==="svg"||Wu(I)?o="svg":(o==="mathml"||Xu(I))&&(o="mathml"),M?(f(n.dynamicChildren,M,y,s,r,o,a),uu(n,e,!0)):l||h(n,e,y,w,s,r,o,a,!1),d)H?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):ro(e,t,E,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const U=e.target=Vl(e.props,g);U&&ro(e,U,null,c,0)}else H&&ro(e,I,N,c,1);Bo(e,d)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:f}=n;if(h&&(s(c),s(u)),r&&s(l),o&16){const p=r||!Rr(f);for(let g=0;g<a.length;g++){const x=a[g];i(x,e,t,p,!!x.dynamicChildren)}}},move:ro,hydrate:Jm};function ro(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,h=r===2;if(h&&i(o,e,t),(!h||Rr(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,t,2);h&&i(a,e,t)}function Jm(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){function f(x,m,d,A){m.anchor=h(o(x),m,a(x),t,i,s,r),m.targetStart=d,m.targetAnchor=A}const p=e.target=Vl(e.props,l),g=Rr(e.props);if(p){const x=p._lpa||p.firstChild;if(e.shapeFlag&16)if(g)f(n,e,x,x&&o(x));else{e.anchor=o(n);let m=x;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||Mf(p,e,u,c),h(x&&o(x),e,p,t,i,s,r)}Bo(e,g)}else g&&e.shapeFlag&16&&f(n,e,n,o(n));return e.anchor&&o(e.anchor)}const au=bf;function Bo(n,e){const t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Mf(n,e,t,i){const s=e.targetStart=t(""),r=e.targetAnchor=t("");return s[_f]=r,n&&(i(s,n),i(r,n)),r}const di=Symbol("_leaveCb"),oo=Symbol("_enterCb");function Zm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ms(()=>{n.isMounted=!0}),Pf(()=>{n.isUnmounting=!0}),n}const wn=[Function,Array],Sf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wn,onEnter:wn,onAfterEnter:wn,onEnterCancelled:wn,onBeforeLeave:wn,onLeave:wn,onAfterLeave:wn,onLeaveCancelled:wn,onBeforeAppear:wn,onAppear:wn,onAfterAppear:wn,onAppearCancelled:wn},Ef=n=>{const e=n.subTree;return e.component?Ef(e.component):e},Qm={name:"BaseTransition",props:Sf,setup(n,{slots:e}){const t=Yf(),i=Zm();return()=>{const s=e.default&&Af(e.default(),!0);if(!s||!s.length)return;const r=wf(s),o=ht(n),{mode:a}=o;if(i.isLeaving)return Ga(r);const l=$u(r);if(!l)return Ga(r);let c=Hl(l,o,i,t,h=>c=h);l.type!==nn&&zr(l,c);let u=t.subTree&&$u(t.subTree);if(u&&u.type!==nn&&!rs(u,l)&&Ef(t).type!==nn){let h=Hl(u,o,i,t);if(zr(u,h),a==="out-in"&&l.type!==nn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},Ga(r);a==="in-out"&&l.type!==nn?h.delayLeave=(f,p,g)=>{const x=Tf(i,u);x[String(u.key)]=u,f[di]=()=>{p(),f[di]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function wf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==nn){e=t;break}}return e}const e0=Qm;function Tf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Hl(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:m,onAppear:d,onAfterAppear:A,onAppearCancelled:R}=e,M=String(n.key),E=Tf(t,n),I=(y,w)=>{y&&kn(y,i,9,w)},N=(y,w)=>{const U=w[1];I(y,w),Je(y)?y.every(F=>F.length<=1)&&U():y.length<=1&&U()},H={mode:o,persisted:a,beforeEnter(y){let w=l;if(!t.isMounted)if(r)w=m||l;else return;y[di]&&y[di](!0);const U=E[M];U&&rs(n,U)&&U.el[di]&&U.el[di](),I(w,[y])},enter(y){let w=c,U=u,F=h;if(!t.isMounted)if(r)w=d||c,U=A||u,F=R||h;else return;let z=!1;const Q=y[oo]=te=>{z||(z=!0,te?I(F,[y]):I(U,[y]),H.delayedLeave&&H.delayedLeave(),y[oo]=void 0)};w?N(w,[y,Q]):Q()},leave(y,w){const U=String(n.key);if(y[oo]&&y[oo](!0),t.isUnmounting)return w();I(f,[y]);let F=!1;const z=y[di]=Q=>{F||(F=!0,w(),Q?I(x,[y]):I(g,[y]),y[di]=void 0,E[U]===n&&delete E[U])};E[U]=n,p?N(p,[y,z]):z()},clone(y){const w=Hl(y,e,t,i,s);return s&&s(w),w}};return H}function Ga(n){if(ya(n))return n=Hi(n),n.children=null,n}function $u(n){if(!ya(n))return yf(n.type)&&n.children?wf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&tt(t.default))return t.default()}}function zr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,zr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Af(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Mt?(o.patchFlag&128&&s++,i=i.concat(Af(o.children,e,a))):(e||o.type!==nn)&&i.push(a!=null?Hi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function dn(n,e){return tt(n)?Ot({name:n.name},e,{setup:n}):n}function Cf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Qo=new WeakMap;function Pr(n,e,t,i,s=!1){if(Je(n)){n.forEach((g,x)=>Pr(g,e&&(Je(e)?e[x]:e),t,i,s));return}if(Dr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Pr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ea(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===bt?a.refs={}:a.refs,h=a.setupState,f=ht(h),p=h===bt?zd:g=>dt(f,g);if(c!=null&&c!==l){if(ju(e),Lt(c))u[c]=null,p(c)&&(h[c]=null);else if(Dt(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(tt(l))Yr(l,a,12,[o,u]);else{const g=Lt(l),x=Dt(l);if(g||x){const m=()=>{if(n.f){const d=g?p(l)?h[l]:u[l]:l.value;if(s)Je(d)&&qc(d,r);else if(Je(d))d.includes(r)||d.push(r);else if(g)u[l]=[r],p(l)&&(h[l]=u[l]);else{const A=[r];l.value=A,n.k&&(u[n.k]=A)}}else g?(u[l]=o,p(l)&&(h[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{m(),Qo.delete(n)};d.id=-1,Qo.set(n,d),en(d,t)}else ju(n),m()}}}function ju(n){const e=Qo.get(n);e&&(e.flags|=8,Qo.delete(n))}va().requestIdleCallback;va().cancelIdleCallback;const Dr=n=>!!n.type.__asyncLoader,ya=n=>n.type.__isKeepAlive;function t0(n,e){Rf(n,"a",e)}function n0(n,e){Rf(n,"da",e)}function Rf(n,e,t=jt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ba(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ya(s.parent.vnode)&&i0(i,e,t,s),s=s.parent}}function i0(n,e,t,i){const s=ba(e,n,i,!0);gs(()=>{qc(i[e],s)},t)}function ba(n,e,t=jt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{yi();const a=qr(t),l=kn(e,t,n,o);return a(),bi(),l});return i?s.unshift(r):s.push(r),r}}const Ei=n=>(e,t=jt)=>{(!Hr||n==="sp")&&ba(n,(...i)=>e(...i),t)},s0=Ei("bm"),ms=Ei("m"),r0=Ei("bu"),o0=Ei("u"),Pf=Ei("bum"),gs=Ei("um"),a0=Ei("sp"),l0=Ei("rtg"),c0=Ei("rtc");function u0(n,e=jt){ba("ec",n,e)}const h0="components";function d0(n,e){return p0(h0,n,!0,e)||n}const f0=Symbol.for("v-ndc");function p0(n,e,t=!0,i=!1){const s=_n||jt;if(s){const r=s.type;{const a=Z0(r,!1);if(a&&(a===e||a===Dn(e)||a===ga(Dn(e))))return r}const o=Yu(s[n]||r[n],e)||Yu(s.appContext[n],e);return!o&&i?r:o}}function Yu(n,e){return n&&(n[e]||n[Dn(e)]||n[ga(Dn(e))])}function On(n,e,t,i){let s;const r=t,o=Je(n);if(o||Lt(n)){const a=o&&ds(n);let l=!1,c=!1;a&&(l=!Pn(n),c=Mi(n),n=xa(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Qs(Bn(n[u])):Bn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(At(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Gl=n=>n?qf(n)?Ea(n):Gl(n.parent):null,Lr=Ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Gl(n.parent),$root:n=>Gl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Lf(n),$forceUpdate:n=>n.f||(n.f=()=>{ou(n.update)}),$nextTick:n=>n.n||(n.n=df.bind(n.proxy)),$watch:n=>Km.bind(n)}),Wa=(n,e)=>n!==bt&&!n.__isScriptSetup&&dt(n,e),m0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Wa(i,e))return o[e]=1,i[e];if(s!==bt&&dt(s,e))return o[e]=2,s[e];if(dt(r,e))return o[e]=3,r[e];if(t!==bt&&dt(t,e))return o[e]=4,t[e];Wl&&(o[e]=0)}}const c=Lr[e];let u,h;if(c)return e==="$attrs"&&$t(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==bt&&dt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,dt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Wa(s,e)?(s[e]=t,!0):i!==bt&&dt(i,e)?(i[e]=t,!0):dt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==bt&&a[0]!=="$"&&dt(n,a)||Wa(e,a)||dt(r,a)||dt(i,a)||dt(Lr,a)||dt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:dt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function qu(n){return Je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Wl=!0;function g0(n){const e=Lf(n),t=n.proxy,i=n.ctx;Wl=!1,e.beforeCreate&&Ku(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:R,unmounted:M,render:E,renderTracked:I,renderTriggered:N,errorCaptured:H,serverPrefetch:y,expose:w,inheritAttrs:U,components:F,directives:z,filters:Q}=e;if(c&&v0(c,i,null),o)for(const X in o){const W=o[X];tt(W)&&(i[X]=W.bind(t))}if(s){const X=s.call(t,t);At(X)&&(n.data=iu(X))}if(Wl=!0,r)for(const X in r){const W=r[X],ge=tt(W)?W.bind(t,t):tt(W.get)?W.get.bind(t,t):Kn,be=!tt(W)&&tt(W.set)?W.set.bind(t):Kn,Se=He({get:ge,set:be});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>Se.value,set:de=>Se.value=de})}if(a)for(const X in a)Df(a[X],i,t,X);if(l){const X=tt(l)?l.call(t):l;Reflect.ownKeys(X).forEach(W=>{jm(W,X[W])})}u&&Ku(u,n,"c");function K(X,W){Je(W)?W.forEach(ge=>X(ge.bind(t))):W&&X(W.bind(t))}if(K(s0,h),K(ms,f),K(r0,p),K(o0,g),K(t0,x),K(n0,m),K(u0,H),K(c0,I),K(l0,N),K(Pf,A),K(gs,M),K(a0,y),Je(w))if(w.length){const X=n.exposed||(n.exposed={});w.forEach(W=>{Object.defineProperty(X,W,{get:()=>t[W],set:ge=>t[W]=ge,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===Kn&&(n.render=E),U!=null&&(n.inheritAttrs=U),F&&(n.components=F),z&&(n.directives=z),y&&Cf(n)}function v0(n,e,t=Kn){Je(n)&&(n=Xl(n));for(const i in n){const s=n[i];let r;At(s)?"default"in s?r=Oo(s.from||i,s.default,!0):r=Oo(s.from||i):r=Oo(s),Dt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ku(n,e,t){kn(Je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Df(n,e,t,i){let s=i.includes(".")?xf(t,i):()=>t[i];if(Lt(n)){const r=e[n];tt(r)&&Jn(s,r)}else if(tt(n))Jn(s,n.bind(t));else if(At(n))if(Je(n))n.forEach(r=>Df(r,e,t,i));else{const r=tt(n.handler)?n.handler.bind(t):e[n.handler];tt(r)&&Jn(s,r,n)}}function Lf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>ea(l,c,o,!0)),ea(l,e,o)),At(e)&&r.set(e,l),l}function ea(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&ea(n,r,t,!0),s&&s.forEach(o=>ea(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=x0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const x0={data:Ju,props:Zu,emits:Zu,methods:Sr,computed:Sr,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:Sr,directives:Sr,watch:y0,provide:Ju,inject:_0};function Ju(n,e){return e?n?function(){return Ot(tt(n)?n.call(this,this):n,tt(e)?e.call(this,this):e)}:e:n}function _0(n,e){return Sr(Xl(n),Xl(e))}function Xl(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Zt(n,e){return n?[...new Set([].concat(n,e))]:e}function Sr(n,e){return n?Ot(Object.create(null),n,e):e}function Zu(n,e){return n?Je(n)&&Je(e)?[...new Set([...n,...e])]:Ot(Object.create(null),qu(n),qu(e??{})):e}function y0(n,e){if(!n)return e;if(!e)return n;const t=Ot(Object.create(null),n);for(const i in e)t[i]=Zt(n[i],e[i]);return t}function If(){return{app:null,config:{isNativeTag:zd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let b0=0;function M0(n,e){return function(i,s=null){tt(i)||(i=Ot({},i)),s!=null&&!At(s)&&(s=null);const r=If(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:b0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:tg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&tt(u.install)?(o.add(u),u.install(c,...h)):tt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||ft(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Ea(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(kn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=qs;qs=c;try{return u()}finally{qs=h}}};return c}}let qs=null;const S0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Dn(e)}Modifiers`]||n[`${Xi(e)}Modifiers`];function E0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||bt;let s=t;const r=e.startsWith("update:"),o=r&&S0(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Lt(u)?u.trim():u)),o.number&&(s=t.map(Jc)));let a,l=i[a=Ba(e)]||i[a=Ba(Dn(e))];!l&&r&&(l=i[a=Ba(Xi(e))]),l&&kn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,kn(c,n,6,s)}}const w0=new WeakMap;function Nf(n,e,t=!1){const i=t?w0:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!tt(n)){const l=c=>{const u=Nf(c,e,!0);u&&(a=!0,Ot(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(At(n)&&i.set(n,null),null):(Je(r)?r.forEach(l=>o[l]=null):Ot(o,r),At(n)&&i.set(n,o),o)}function Ma(n,e){return!n||!fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(n,e[0].toLowerCase()+e.slice(1))||dt(n,Xi(e))||dt(n,e))}function Qu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:x}=n,m=Zo(n);let d,A;try{if(t.shapeFlag&4){const M=s||i,E=M;d=Wn(c.call(E,M,u,h,p,f,g)),A=a}else{const M=e;d=Wn(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),A=e.props?a:T0(a)}}catch(M){Ir.length=0,_a(M,n,1),d=ft(nn)}let R=d;if(A&&x!==!1){const M=Object.keys(A),{shapeFlag:E}=R;M.length&&E&7&&(r&&M.some(Yc)&&(A=A0(A,r)),R=Hi(R,A,!1,!0))}return t.dirs&&(R=Hi(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition&&zr(R,t.transition),d=R,Zo(m),d}const T0=n=>{let e;for(const t in n)(t==="class"||t==="style"||fa(t))&&((e||(e={}))[t]=n[t]);return e},A0=(n,e)=>{const t={};for(const i in n)(!Yc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function C0(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?eh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Ma(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?eh(i,o,c):!0:!!o;return!1}function eh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Ma(t,r))return!0}return!1}function R0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Uf={},Ff=()=>Object.create(Uf),Of=n=>Object.getPrototypeOf(n)===Uf;function P0(n,e,t,i=!1){const s={},r=Ff();n.propsDefaults=Object.create(null),Bf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Um(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function D0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ht(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ma(n.emitsOptions,f))continue;const p=e[f];if(l)if(dt(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=Dn(f);s[g]=$l(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Bf(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!dt(e,h)&&((u=Xi(h))===h||!dt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=$l(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!dt(e,h))&&(delete r[h],c=!0)}c&&pi(n.attrs,"set","")}function Bf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Tr(l))continue;const c=e[l];let u;s&&dt(s,u=Dn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ma(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ht(t),c=a||bt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=$l(s,l,h,c[h],n,!dt(c,h))}}return o}function $l(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&tt(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=qr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Xi(t))&&(i=!0))}return i}const L0=new WeakMap;function kf(n,e,t=!1){const i=t?L0:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!tt(n)){const u=h=>{l=!0;const[f,p]=kf(h,e,!0);Ot(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return At(n)&&i.set(n,Xs),Xs;if(Je(r))for(let u=0;u<r.length;u++){const h=Dn(r[u]);th(h)&&(o[h]=bt)}else if(r)for(const u in r){const h=Dn(u);if(th(h)){const f=r[u],p=o[h]=Je(f)||tt(f)?{type:f}:Ot({},f),g=p.type;let x=!1,m=!0;if(Je(g))for(let d=0;d<g.length;++d){const A=g[d],R=tt(A)&&A.name;if(R==="Boolean"){x=!0;break}else R==="String"&&(m=!1)}else x=tt(g)&&g.name==="Boolean";p[0]=x,p[1]=m,(x||dt(p,"default"))&&a.push(h)}}const c=[o,a];return At(n)&&i.set(n,c),c}function th(n){return n[0]!=="$"&&!Tr(n)}const lu=n=>n==="_"||n==="_ctx"||n==="$stable",cu=n=>Je(n)?n.map(Wn):[Wn(n)],I0=(n,e,t)=>{if(e._n)return e;const i=Ys((...s)=>cu(e(...s)),t);return i._c=!1,i},zf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(lu(s))continue;const r=n[s];if(tt(r))e[s]=I0(s,r,i);else if(r!=null){const o=cu(r);e[s]=()=>o}}},Vf=(n,e)=>{const t=cu(e);n.slots.default=()=>t},Hf=(n,e,t)=>{for(const i in e)(t||!lu(i))&&(n[i]=e[i])},N0=(n,e,t)=>{const i=n.slots=Ff();if(n.vnode.shapeFlag&32){const s=e._;s?(Hf(i,e,t),t&&Xd(i,"_",s,!0)):zf(e,i)}else e&&Vf(n,e)},U0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=bt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Hf(s,e,t):(r=!e.$stable,zf(e,s)),o=e}else e&&(Vf(n,e),o={default:1});if(r)for(const a in s)!lu(a)&&o[a]==null&&delete s[a]},en=z0;function F0(n){return O0(n)}function O0(n,e){const t=va();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Kn,insertStaticContent:g}=n,x=(C,D,L,V=null,j=null,ee=null,P=void 0,fe=null,oe=!!D.dynamicChildren)=>{if(C===D)return;C&&!rs(C,D)&&(V=ue(C),de(C,j,ee,!0),C=null),D.patchFlag===-2&&(oe=!1,D.dynamicChildren=null);const{type:Z,ref:le,shapeFlag:b}=D;switch(Z){case Sa:m(C,D,L,V);break;case nn:d(C,D,L,V);break;case $a:C==null&&A(D,L,V,P);break;case Mt:F(C,D,L,V,j,ee,P,fe,oe);break;default:b&1?E(C,D,L,V,j,ee,P,fe,oe):b&6?z(C,D,L,V,j,ee,P,fe,oe):(b&64||b&128)&&Z.process(C,D,L,V,j,ee,P,fe,oe,ne)}le!=null&&j?Pr(le,C&&C.ref,ee,D||C,!D):le==null&&C&&C.ref!=null&&Pr(C.ref,null,ee,C,!0)},m=(C,D,L,V)=>{if(C==null)i(D.el=a(D.children),L,V);else{const j=D.el=C.el;D.children!==C.children&&c(j,D.children)}},d=(C,D,L,V)=>{C==null?i(D.el=l(D.children||""),L,V):D.el=C.el},A=(C,D,L,V)=>{[C.el,C.anchor]=g(C.children,D,L,V,C.el,C.anchor)},R=({el:C,anchor:D},L,V)=>{let j;for(;C&&C!==D;)j=f(C),i(C,L,V),C=j;i(D,L,V)},M=({el:C,anchor:D})=>{let L;for(;C&&C!==D;)L=f(C),s(C),C=L;s(D)},E=(C,D,L,V,j,ee,P,fe,oe)=>{if(D.type==="svg"?P="svg":D.type==="math"&&(P="mathml"),C==null)I(D,L,V,j,ee,P,fe,oe);else{const Z=C.el&&C.el._isVueCE?C.el:null;try{Z&&Z._beginPatch(),y(C,D,j,ee,P,fe,oe)}finally{Z&&Z._endPatch()}}},I=(C,D,L,V,j,ee,P,fe)=>{let oe,Z;const{props:le,shapeFlag:b,transition:v,dirs:O}=C;if(oe=C.el=o(C.type,ee,le&&le.is,le),b&8?u(oe,C.children):b&16&&H(C.children,oe,null,V,j,Xa(C,ee),P,fe),O&&Yi(C,null,V,"created"),N(oe,C,C.scopeId,P,V),le){for(const ae in le)ae!=="value"&&!Tr(ae)&&r(oe,ae,null,le[ae],ee,V);"value"in le&&r(oe,"value",null,le.value,ee),(Z=le.onVnodeBeforeMount)&&Vn(Z,V,C)}O&&Yi(C,null,V,"beforeMount");const J=B0(j,v);J&&v.beforeEnter(oe),i(oe,D,L),((Z=le&&le.onVnodeMounted)||J||O)&&en(()=>{Z&&Vn(Z,V,C),J&&v.enter(oe),O&&Yi(C,null,V,"mounted")},j)},N=(C,D,L,V,j)=>{if(L&&p(C,L),V)for(let ee=0;ee<V.length;ee++)p(C,V[ee]);if(j){let ee=j.subTree;if(D===ee||Xf(ee.type)&&(ee.ssContent===D||ee.ssFallback===D)){const P=j.vnode;N(C,P,P.scopeId,P.slotScopeIds,j.parent)}}},H=(C,D,L,V,j,ee,P,fe,oe=0)=>{for(let Z=oe;Z<C.length;Z++){const le=C[Z]=fe?Ui(C[Z]):Wn(C[Z]);x(null,le,D,L,V,j,ee,P,fe)}},y=(C,D,L,V,j,ee,P)=>{const fe=D.el=C.el;let{patchFlag:oe,dynamicChildren:Z,dirs:le}=D;oe|=C.patchFlag&16;const b=C.props||bt,v=D.props||bt;let O;if(L&&qi(L,!1),(O=v.onVnodeBeforeUpdate)&&Vn(O,L,D,C),le&&Yi(D,C,L,"beforeUpdate"),L&&qi(L,!0),(b.innerHTML&&v.innerHTML==null||b.textContent&&v.textContent==null)&&u(fe,""),Z?w(C.dynamicChildren,Z,fe,L,V,Xa(D,j),ee):P||W(C,D,fe,null,L,V,Xa(D,j),ee,!1),oe>0){if(oe&16)U(fe,b,v,L,j);else if(oe&2&&b.class!==v.class&&r(fe,"class",null,v.class,j),oe&4&&r(fe,"style",b.style,v.style,j),oe&8){const J=D.dynamicProps;for(let ae=0;ae<J.length;ae++){const q=J[ae],Ie=b[q],_e=v[q];(_e!==Ie||q==="value")&&r(fe,q,Ie,_e,j,L)}}oe&1&&C.children!==D.children&&u(fe,D.children)}else!P&&Z==null&&U(fe,b,v,L,j);((O=v.onVnodeUpdated)||le)&&en(()=>{O&&Vn(O,L,D,C),le&&Yi(D,C,L,"updated")},V)},w=(C,D,L,V,j,ee,P)=>{for(let fe=0;fe<D.length;fe++){const oe=C[fe],Z=D[fe],le=oe.el&&(oe.type===Mt||!rs(oe,Z)||oe.shapeFlag&198)?h(oe.el):L;x(oe,Z,le,null,V,j,ee,P,!0)}},U=(C,D,L,V,j)=>{if(D!==L){if(D!==bt)for(const ee in D)!Tr(ee)&&!(ee in L)&&r(C,ee,D[ee],null,j,V);for(const ee in L){if(Tr(ee))continue;const P=L[ee],fe=D[ee];P!==fe&&ee!=="value"&&r(C,ee,fe,P,j,V)}"value"in L&&r(C,"value",D.value,L.value,j)}},F=(C,D,L,V,j,ee,P,fe,oe)=>{const Z=D.el=C?C.el:a(""),le=D.anchor=C?C.anchor:a("");let{patchFlag:b,dynamicChildren:v,slotScopeIds:O}=D;O&&(fe=fe?fe.concat(O):O),C==null?(i(Z,L,V),i(le,L,V),H(D.children||[],L,le,j,ee,P,fe,oe)):b>0&&b&64&&v&&C.dynamicChildren&&C.dynamicChildren.length===v.length?(w(C.dynamicChildren,v,L,j,ee,P,fe),(D.key!=null||j&&D===j.subTree)&&uu(C,D,!0)):W(C,D,L,le,j,ee,P,fe,oe)},z=(C,D,L,V,j,ee,P,fe,oe)=>{D.slotScopeIds=fe,C==null?D.shapeFlag&512?j.ctx.activate(D,L,V,P,oe):Q(D,L,V,j,ee,P,oe):te(C,D,oe)},Q=(C,D,L,V,j,ee,P)=>{const fe=C.component=j0(C,V,j);if(ya(C)&&(fe.ctx.renderer=ne),Y0(fe,!1,P),fe.asyncDep){if(j&&j.registerDep(fe,K,P),!C.el){const oe=fe.subTree=ft(nn);d(null,oe,D,L),C.placeholder=oe.el}}else K(fe,C,D,L,j,ee,P)},te=(C,D,L)=>{const V=D.component=C.component;if(C0(C,D,L))if(V.asyncDep&&!V.asyncResolved){X(V,D,L);return}else V.next=D,V.update();else D.el=C.el,V.vnode=D},K=(C,D,L,V,j,ee,P)=>{const fe=()=>{if(C.isMounted){let{next:b,bu:v,u:O,parent:J,vnode:ae}=C;{const We=Gf(C);if(We){b&&(b.el=ae.el,X(C,b,P)),We.asyncDep.then(()=>{C.isUnmounted||fe()});return}}let q=b,Ie;qi(C,!1),b?(b.el=ae.el,X(C,b,P)):b=ae,v&&Fo(v),(Ie=b.props&&b.props.onVnodeBeforeUpdate)&&Vn(Ie,J,b,ae),qi(C,!0);const _e=Qu(C),Fe=C.subTree;C.subTree=_e,x(Fe,_e,h(Fe.el),ue(Fe),C,j,ee),b.el=_e.el,q===null&&R0(C,_e.el),O&&en(O,j),(Ie=b.props&&b.props.onVnodeUpdated)&&en(()=>Vn(Ie,J,b,ae),j)}else{let b;const{el:v,props:O}=D,{bm:J,m:ae,parent:q,root:Ie,type:_e}=C,Fe=Dr(D);qi(C,!1),J&&Fo(J),!Fe&&(b=O&&O.onVnodeBeforeMount)&&Vn(b,q,D),qi(C,!0);{Ie.ce&&Ie.ce._def.shadowRoot!==!1&&Ie.ce._injectChildStyle(_e);const We=C.subTree=Qu(C);x(null,We,L,V,C,j,ee),D.el=We.el}if(ae&&en(ae,j),!Fe&&(b=O&&O.onVnodeMounted)){const We=D;en(()=>Vn(b,q,We),j)}(D.shapeFlag&256||q&&Dr(q.vnode)&&q.vnode.shapeFlag&256)&&C.a&&en(C.a,j),C.isMounted=!0,D=L=V=null}};C.scope.on();const oe=C.effect=new qd(fe);C.scope.off();const Z=C.update=oe.run.bind(oe),le=C.job=oe.runIfDirty.bind(oe);le.i=C,le.id=C.uid,oe.scheduler=()=>ou(le),qi(C,!0),Z()},X=(C,D,L)=>{D.component=C;const V=C.vnode.props;C.vnode=D,C.next=null,D0(C,D.props,V,L),U0(C,D.children,L),yi(),Hu(C),bi()},W=(C,D,L,V,j,ee,P,fe,oe=!1)=>{const Z=C&&C.children,le=C?C.shapeFlag:0,b=D.children,{patchFlag:v,shapeFlag:O}=D;if(v>0){if(v&128){be(Z,b,L,V,j,ee,P,fe,oe);return}else if(v&256){ge(Z,b,L,V,j,ee,P,fe,oe);return}}O&8?(le&16&&ie(Z,j,ee),b!==Z&&u(L,b)):le&16?O&16?be(Z,b,L,V,j,ee,P,fe,oe):ie(Z,j,ee,!0):(le&8&&u(L,""),O&16&&H(b,L,V,j,ee,P,fe,oe))},ge=(C,D,L,V,j,ee,P,fe,oe)=>{C=C||Xs,D=D||Xs;const Z=C.length,le=D.length,b=Math.min(Z,le);let v;for(v=0;v<b;v++){const O=D[v]=oe?Ui(D[v]):Wn(D[v]);x(C[v],O,L,null,j,ee,P,fe,oe)}Z>le?ie(C,j,ee,!0,!1,b):H(D,L,V,j,ee,P,fe,oe,b)},be=(C,D,L,V,j,ee,P,fe,oe)=>{let Z=0;const le=D.length;let b=C.length-1,v=le-1;for(;Z<=b&&Z<=v;){const O=C[Z],J=D[Z]=oe?Ui(D[Z]):Wn(D[Z]);if(rs(O,J))x(O,J,L,null,j,ee,P,fe,oe);else break;Z++}for(;Z<=b&&Z<=v;){const O=C[b],J=D[v]=oe?Ui(D[v]):Wn(D[v]);if(rs(O,J))x(O,J,L,null,j,ee,P,fe,oe);else break;b--,v--}if(Z>b){if(Z<=v){const O=v+1,J=O<le?D[O].el:V;for(;Z<=v;)x(null,D[Z]=oe?Ui(D[Z]):Wn(D[Z]),L,J,j,ee,P,fe,oe),Z++}}else if(Z>v)for(;Z<=b;)de(C[Z],j,ee,!0),Z++;else{const O=Z,J=Z,ae=new Map;for(Z=J;Z<=v;Z++){const Pe=D[Z]=oe?Ui(D[Z]):Wn(D[Z]);Pe.key!=null&&ae.set(Pe.key,Z)}let q,Ie=0;const _e=v-J+1;let Fe=!1,We=0;const ve=new Array(_e);for(Z=0;Z<_e;Z++)ve[Z]=0;for(Z=O;Z<=b;Z++){const Pe=C[Z];if(Ie>=_e){de(Pe,j,ee,!0);continue}let Oe;if(Pe.key!=null)Oe=ae.get(Pe.key);else for(q=J;q<=v;q++)if(ve[q-J]===0&&rs(Pe,D[q])){Oe=q;break}Oe===void 0?de(Pe,j,ee,!0):(ve[Oe-J]=Z+1,Oe>=We?We=Oe:Fe=!0,x(Pe,D[Oe],L,null,j,ee,P,fe,oe),Ie++)}const Ae=Fe?k0(ve):Xs;for(q=Ae.length-1,Z=_e-1;Z>=0;Z--){const Pe=J+Z,Oe=D[Pe],we=D[Pe+1],it=Pe+1<le?we.el||Wf(we):V;ve[Z]===0?x(null,Oe,L,it,j,ee,P,fe,oe):Fe&&(q<0||Z!==Ae[q]?Se(Oe,L,it,2):q--)}}},Se=(C,D,L,V,j=null)=>{const{el:ee,type:P,transition:fe,children:oe,shapeFlag:Z}=C;if(Z&6){Se(C.component.subTree,D,L,V);return}if(Z&128){C.suspense.move(D,L,V);return}if(Z&64){P.move(C,D,L,ne);return}if(P===Mt){i(ee,D,L);for(let b=0;b<oe.length;b++)Se(oe[b],D,L,V);i(C.anchor,D,L);return}if(P===$a){R(C,D,L);return}if(V!==2&&Z&1&&fe)if(V===0)fe.beforeEnter(ee),i(ee,D,L),en(()=>fe.enter(ee),j);else{const{leave:b,delayLeave:v,afterLeave:O}=fe,J=()=>{C.ctx.isUnmounted?s(ee):i(ee,D,L)},ae=()=>{ee._isLeaving&&ee[di](!0),b(ee,()=>{J(),O&&O()})};v?v(ee,J,ae):ae()}else i(ee,D,L)},de=(C,D,L,V=!1,j=!1)=>{const{type:ee,props:P,ref:fe,children:oe,dynamicChildren:Z,shapeFlag:le,patchFlag:b,dirs:v,cacheIndex:O}=C;if(b===-2&&(j=!1),fe!=null&&(yi(),Pr(fe,null,L,C,!0),bi()),O!=null&&(D.renderCache[O]=void 0),le&256){D.ctx.deactivate(C);return}const J=le&1&&v,ae=!Dr(C);let q;if(ae&&(q=P&&P.onVnodeBeforeUnmount)&&Vn(q,D,C),le&6)qe(C.component,L,V);else{if(le&128){C.suspense.unmount(L,V);return}J&&Yi(C,null,D,"beforeUnmount"),le&64?C.type.remove(C,D,L,ne,V):Z&&!Z.hasOnce&&(ee!==Mt||b>0&&b&64)?ie(Z,D,L,!1,!0):(ee===Mt&&b&384||!j&&le&16)&&ie(oe,D,L),V&&Te(C)}(ae&&(q=P&&P.onVnodeUnmounted)||J)&&en(()=>{q&&Vn(q,D,C),J&&Yi(C,null,D,"unmounted")},L)},Te=C=>{const{type:D,el:L,anchor:V,transition:j}=C;if(D===Mt){Ge(L,V);return}if(D===$a){M(C);return}const ee=()=>{s(L),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(C.shapeFlag&1&&j&&!j.persisted){const{leave:P,delayLeave:fe}=j,oe=()=>P(L,ee);fe?fe(C.el,ee,oe):oe()}else ee()},Ge=(C,D)=>{let L;for(;C!==D;)L=f(C),s(C),C=L;s(D)},qe=(C,D,L)=>{const{bum:V,scope:j,job:ee,subTree:P,um:fe,m:oe,a:Z}=C;nh(oe),nh(Z),V&&Fo(V),j.stop(),ee&&(ee.flags|=8,de(P,C,D,L)),fe&&en(fe,D),en(()=>{C.isUnmounted=!0},D)},ie=(C,D,L,V=!1,j=!1,ee=0)=>{for(let P=ee;P<C.length;P++)de(C[P],D,L,V,j)},ue=C=>{if(C.shapeFlag&6)return ue(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const D=f(C.anchor||C.el),L=D&&D[_f];return L?f(L):D};let Ee=!1;const pe=(C,D,L)=>{let V;C==null?D._vnode&&(de(D._vnode,null,null,!0),V=D._vnode.component):x(D._vnode||null,C,D,null,null,null,L),D._vnode=C,Ee||(Ee=!0,Hu(V),pf(),Ee=!1)},ne={p:x,um:de,m:Se,r:Te,mt:Q,mc:H,pc:W,pbc:w,n:ue,o:n};return{render:pe,hydrate:void 0,createApp:M0(pe)}}function Xa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function B0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function uu(n,e,t=!1){const i=n.children,s=e.children;if(Je(i)&&Je(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ui(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&uu(o,a)),a.type===Sa&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(n.type===Mt?1:0)),a.type===nn&&!a.el&&(a.el=o.el)}}function k0(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Gf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gf(e)}function nh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Wf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Wf(e.subTree):null}const Xf=n=>n.__isSuspense;function z0(n,e){e&&e.pendingBranch?Je(n)?e.effects.push(...n):e.effects.push(n):$m(n)}const Mt=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),nn=Symbol.for("v-cmt"),$a=Symbol.for("v-stc"),Ir=[];let yn=null;function ce(n=!1){Ir.push(yn=n?null:[])}function V0(){Ir.pop(),yn=Ir[Ir.length-1]||null}let Vr=1;function ta(n,e=!1){Vr+=n,n<0&&yn&&e&&(yn.hasOnce=!0)}function $f(n){return n.dynamicChildren=Vr>0?yn||Xs:null,V0(),Vr>0&&yn&&yn.push(n),n}function he(n,e,t,i,s,r){return $f(_(n,e,t,i,s,r,!0))}function Cn(n,e,t,i,s){return $f(ft(n,e,t,i,s,!0))}function na(n){return n?n.__v_isVNode===!0:!1}function rs(n,e){return n.type===e.type&&n.key===e.key}const jf=({key:n})=>n??null,ko=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Lt(n)||Dt(n)||tt(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function _(n,e=null,t=null,i=0,s=null,r=n===Mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&jf(e),ref:e&&ko(e),scopeId:gf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return a?(hu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Lt(t)?8:16),Vr>0&&!o&&yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&yn.push(l),l}const ft=H0;function H0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===f0)&&(n=nn),na(n)){const a=Hi(n,e,!0);return t&&hu(a,t),Vr>0&&!r&&yn&&(a.shapeFlag&6?yn[yn.indexOf(n)]=a:yn.push(a)),a.patchFlag=-2,a}if(Q0(n)&&(n=n.__vccOpts),e){e=G0(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=B(a)),At(l)&&(ru(l)&&!Je(l)&&(l=Ot({},l)),e.style=gi(l))}const o=Lt(n)?1:Xf(n)?128:yf(n)?64:At(n)?4:tt(n)?2:0;return _(n,e,t,i,s,o,r,!0)}function G0(n){return n?ru(n)||Of(n)?Ot({},n):n:null}function Hi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?W0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&jf(c),ref:e&&e.ref?t&&r?Je(r)?r.concat(ko(e)):[r,ko(e)]:ko(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hi(n.ssContent),ssFallback:n.ssFallback&&Hi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&zr(u,l.clone(u)),u}function It(n=" ",e=0){return ft(Sa,null,n,e)}function nt(n="",e=!1){return e?(ce(),Cn(nn,null,n)):ft(nn,null,n)}function Wn(n){return n==null||typeof n=="boolean"?ft(nn):Je(n)?ft(Mt,null,n.slice()):na(n)?Ui(n):ft(Sa,null,String(n))}function Ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hi(n)}function hu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Je(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),hu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Of(e)?e._ctx=_n:s===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[It(e)]):t=8);n.children=e,n.shapeFlag|=t}function W0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=B([e.class,i.class]));else if(s==="style")e.style=gi([e.style,i.style]);else if(fa(s)){const r=e[s],o=i[s];o&&r!==o&&!(Je(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Vn(n,e,t,i=null){kn(n,e,7,[t,i])}const X0=If();let $0=0;function j0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||X0,r={uid:$0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new mm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(i,s),emitsOptions:Nf(i,s),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=E0.bind(null,r),n.ce&&n.ce(r),r}let jt=null;const Yf=()=>jt||_n;let ia,jl;{const n=va(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ia=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),jl=e("__VUE_SSR_SETTERS__",t=>Hr=t)}const qr=n=>{const e=jt;return ia(n),n.scope.on(),()=>{n.scope.off(),ia(e)}},ih=()=>{jt&&jt.scope.off(),ia(null)};function qf(n){return n.vnode.shapeFlag&4}let Hr=!1;function Y0(n,e=!1,t=!1){e&&jl(e);const{props:i,children:s}=n.vnode,r=qf(n);P0(n,i,r,e),N0(n,s,t||e);const o=r?q0(n,e):void 0;return e&&jl(!1),o}function q0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,m0);const{setup:i}=t;if(i){yi();const s=n.setupContext=i.length>1?J0(n):null,r=qr(n),o=Yr(i,n,0,[n.props,s]),a=Hd(o);if(bi(),r(),(a||n.sp)&&!Dr(n)&&Cf(n),a){if(o.then(ih,ih),e)return o.then(l=>{sh(n,l)}).catch(l=>{_a(l,n,0)});n.asyncDep=o}else sh(n,o)}else Kf(n)}function sh(n,e,t){tt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:At(e)&&(n.setupState=uf(e)),Kf(n)}function Kf(n,e,t){const i=n.type;n.render||(n.render=i.render||Kn);{const s=qr(n);yi();try{g0(n)}finally{bi(),s()}}}const K0={get(n,e){return $t(n,"get",""),n[e]}};function J0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,K0),slots:n.slots,emit:n.emit,expose:e}}function Ea(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(uf(Fm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Lr)return Lr[t](n)},has(e,t){return t in e||t in Lr}})):n.proxy}function Z0(n,e=!0){return tt(n)?n.displayName||n.name:n.name||e&&n.__name}function Q0(n){return tt(n)&&"__vccOpts"in n}const He=(n,e)=>Vm(n,e,Hr);function eg(n,e,t){try{ta(-1);const i=arguments.length;return i===2?At(e)&&!Je(e)?na(e)?ft(n,null,[e]):ft(n,e):ft(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&na(t)&&(t=[t]),ft(n,e,t))}finally{ta(1)}}const tg="3.5.27";let Yl;const rh=typeof window<"u"&&window.trustedTypes;if(rh)try{Yl=rh.createPolicy("vue",{createHTML:n=>n})}catch{}const Jf=Yl?n=>Yl.createHTML(n):n=>n,ng="http://www.w3.org/2000/svg",ig="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,oh=hi&&hi.createElement("template"),sg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?hi.createElementNS(ng,n):e==="mathml"?hi.createElementNS(ig,n):t?hi.createElement(n,{is:t}):hi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>hi.createTextNode(n),createComment:n=>hi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{oh.innerHTML=Jf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=oh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ti="transition",hr="animation",Gr=Symbol("_vtc"),Zf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rg=Ot({},Sf,Zf),og=n=>(n.displayName="Transition",n.props=rg,n),Nr=og((n,{slots:e})=>eg(e0,ag(n),e)),Ki=(n,e=[])=>{Je(n)?n.forEach(t=>t(...e)):n&&n(...e)},ah=n=>n?Je(n)?n.some(e=>e.length>1):n.length>1:!1;function ag(n){const e={};for(const F in n)F in Zf||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=lg(s),x=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:A,onEnterCancelled:R,onLeave:M,onLeaveCancelled:E,onBeforeAppear:I=d,onAppear:N=A,onAppearCancelled:H=R}=e,y=(F,z,Q,te)=>{F._enterCancelled=te,Ji(F,z?u:a),Ji(F,z?c:o),Q&&Q()},w=(F,z)=>{F._isLeaving=!1,Ji(F,h),Ji(F,p),Ji(F,f),z&&z()},U=F=>(z,Q)=>{const te=F?N:A,K=()=>y(z,F,Q);Ki(te,[z,K]),lh(()=>{Ji(z,F?l:r),ri(z,F?u:a),ah(te)||ch(z,i,x,K)})};return Ot(e,{onBeforeEnter(F){Ki(d,[F]),ri(F,r),ri(F,o)},onBeforeAppear(F){Ki(I,[F]),ri(F,l),ri(F,c)},onEnter:U(!1),onAppear:U(!0),onLeave(F,z){F._isLeaving=!0;const Q=()=>w(F,z);ri(F,h),F._enterCancelled?(ri(F,f),dh(F)):(dh(F),ri(F,f)),lh(()=>{F._isLeaving&&(Ji(F,h),ri(F,p),ah(M)||ch(F,i,m,Q))}),Ki(M,[F,Q])},onEnterCancelled(F){y(F,!1,void 0,!0),Ki(R,[F])},onAppearCancelled(F){y(F,!0,void 0,!0),Ki(H,[F])},onLeaveCancelled(F){w(F),Ki(E,[F])}})}function lg(n){if(n==null)return null;if(At(n))return[ja(n.enter),ja(n.leave)];{const e=ja(n);return[e,e]}}function ja(n){return lm(n)}function ri(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Gr]||(n[Gr]=new Set)).add(e)}function Ji(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Gr];t&&(t.delete(e),t.size||(n[Gr]=void 0))}function lh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let cg=0;function ch(n,e,t,i){const s=n._endId=++cg,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=ug(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=p=>{p.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function ug(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${Ti}Delay`),r=i(`${Ti}Duration`),o=uh(s,r),a=i(`${hr}Delay`),l=i(`${hr}Duration`),c=uh(a,l);let u=null,h=0,f=0;e===Ti?o>0&&(u=Ti,h=o,f=r.length):e===hr?c>0&&(u=hr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Ti:hr:null,f=u?u===Ti?r.length:l.length:0);const p=u===Ti&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ti}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function uh(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>hh(t)+hh(n[i])))}function hh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function dh(n){return(n?n.ownerDocument:document).body.offsetHeight}function hg(n,e,t){const i=n[Gr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const sa=Symbol("_vod"),Qf=Symbol("_vsh"),fh={name:"show",beforeMount(n,{value:e},{transition:t}){n[sa]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):dr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),dr(n,!0),i.enter(n)):i.leave(n,()=>{dr(n,!1)}):dr(n,e))},beforeUnmount(n,{value:e}){dr(n,e)}};function dr(n,e){n.style.display=e?n[sa]:"none",n[Qf]=!e}const dg=Symbol(""),fg=/(?:^|;)\s*display\s*:/;function pg(n,e,t){const i=n.style,s=Lt(t);let r=!1;if(t&&!s){if(e)if(Lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&zo(i,a,"")}else for(const o in e)t[o]==null&&zo(i,o,"");for(const o in t)o==="display"&&(r=!0),zo(i,o,t[o])}else if(s){if(e!==t){const o=i[dg];o&&(t+=";"+o),i.cssText=t,r=fg.test(t)}}else e&&n.removeAttribute("style");sa in n&&(n[sa]=r?i.display:"",n[Qf]&&(i.display="none"))}const ph=/\s*!important$/;function zo(n,e,t){if(Je(t))t.forEach(i=>zo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=mg(n,e);ph.test(t)?n.setProperty(Xi(i),t.replace(ph,""),"important"):n[i]=t}}const mh=["Webkit","Moz","ms"],Ya={};function mg(n,e){const t=Ya[e];if(t)return t;let i=Dn(e);if(i!=="filter"&&i in n)return Ya[e]=i;i=ga(i);for(let s=0;s<mh.length;s++){const r=mh[s]+i;if(r in n)return Ya[e]=r}return e}const gh="http://www.w3.org/1999/xlink";function vh(n,e,t,i,s,r=pm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(gh,e.slice(6,e.length)):n.setAttributeNS(gh,e,t):t==null||r&&!$d(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Wi(t)?String(t):t)}function xh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Jf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=$d(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Hs(n,e,t,i){n.addEventListener(e,t,i)}function gg(n,e,t,i){n.removeEventListener(e,t,i)}const _h=Symbol("_vei");function vg(n,e,t,i,s=null){const r=n[_h]||(n[_h]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=xg(e);if(i){const c=r[e]=bg(i,s);Hs(n,a,c,l)}else o&&(gg(n,a,o,l),r[e]=void 0)}}const yh=/(?:Once|Passive|Capture)$/;function xg(n){let e;if(yh.test(n)){e={};let i;for(;i=n.match(yh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xi(n.slice(2)),e]}let qa=0;const _g=Promise.resolve(),yg=()=>qa||(_g.then(()=>qa=0),qa=Date.now());function bg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;kn(Mg(i,t.value),e,5,[i])};return t.value=n,t.attached=yg(),t}function Mg(n,e){if(Je(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const bh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Sg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?hg(n,i,o):e==="style"?pg(n,t,i):fa(e)?Yc(e)||vg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Eg(n,e,i,o))?(xh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&vh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Lt(i))?xh(n,Dn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),vh(n,e,i,o))};function Eg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&bh(e)&&tt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bh(e)&&Lt(t)?!1:e in n}const Mh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Je(e)?t=>Fo(e,t):e};function wg(n){n.target.composing=!0}function Sh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ka=Symbol("_assign");function Eh(n,e,t){return e&&(n=n.trim()),t&&(n=Jc(n)),n}const er={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ka]=Mh(s);const r=i||s.props&&s.props.type==="number";Hs(n,e?"change":"input",o=>{o.target.composing||n[Ka](Eh(n.value,t,r))}),(t||r)&&Hs(n,"change",()=>{n.value=Eh(n.value,t,r)}),e||(Hs(n,"compositionstart",wg),Hs(n,"compositionend",Sh),Hs(n,"change",Sh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ka]=Mh(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Jc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},Tg=["ctrl","shift","alt","meta"],Ag={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Tg.some(t=>n[`${t}Key`]&&!e.includes(t))},tr=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=Ag[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},Cg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ra=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Xi(s.key);if(e.some(o=>o===r||Cg[o]===r))return n(s)}))},Rg=Ot({patchProp:Sg},sg);let wh;function Pg(){return wh||(wh=F0(Rg))}const Dg=((...n)=>{const e=Pg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Ig(i);if(!s)return;const r=e._component;!tt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Lg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Lg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ig(n){return Lt(n)?document.querySelector(n):n}const Vo={light:{name:"light",label:"Claro",icon:"☀️",colors:{bgPrimary:"from-slate-50 via-primary-50/30 to-slate-100",bgSecondary:"bg-white/80",bgTertiary:"bg-slate-50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-soft-lg",textPrimary:"text-gray-900",textSecondary:"text-gray-700",textMuted:"text-gray-500",accent:"bg-primary-600",accentHover:"hover:bg-primary-700",accentLight:"bg-primary-100",success:"text-emerald-700",successLight:"bg-emerald-50 border-emerald-200",error:"text-red-700",errorLight:"bg-red-50 border-red-200",border:"border-gray-200",borderHover:"hover:border-gray-300",jsonString:"text-emerald-600",jsonNumber:"text-blue-600",jsonBoolean:"text-violet-600",jsonNull:"text-gray-500",jsonObject:"text-orange-600",jsonArray:"text-cyan-600",syntaxColors:{key:"#166534",string:"#16a34a",number:"#1d4ed8",boolean:"#6d28d9",null:"#6b7280",punctuation:"#9ca3af"},shadow:"shadow-soft",shadowLg:"shadow-soft-lg"}},dark:{name:"dark",label:"Oscuro",icon:"🌙",colors:{bgPrimary:"from-gray-900 via-gray-900 to-gray-950",bgSecondary:"bg-gray-800/90",bgTertiary:"bg-gray-900",bgCard:"bg-gray-800/90 backdrop-blur-sm",bgCardHover:"hover:bg-gray-800",textPrimary:"text-gray-100",textSecondary:"text-gray-300",textMuted:"text-gray-500",accent:"bg-primary-500",accentHover:"hover:bg-primary-400",accentLight:"bg-primary-900/50",success:"text-emerald-400",successLight:"bg-emerald-900/30 border-emerald-800",error:"text-red-400",errorLight:"bg-red-900/30 border-red-800",border:"border-gray-700",borderHover:"hover:border-gray-600",jsonString:"text-emerald-400",jsonNumber:"text-blue-400",jsonBoolean:"text-violet-400",jsonNull:"text-gray-500",jsonObject:"text-orange-400",jsonArray:"text-cyan-400",syntaxColors:{key:"#6ee7b7",string:"#34d399",number:"#60a5fa",boolean:"#a78bfa",null:"#6b7280",punctuation:"#4b5563"},shadow:"shadow-xl shadow-black/20",shadowLg:"shadow-2xl shadow-black/30"}},midnight:{name:"midnight",label:"Medianoche",icon:"🌌",colors:{bgPrimary:"from-slate-950 via-indigo-950 to-slate-950",bgSecondary:"bg-slate-900/90",bgTertiary:"bg-slate-950",bgCard:"bg-slate-900/80 backdrop-blur-sm",bgCardHover:"hover:bg-slate-800/80",textPrimary:"text-slate-100",textSecondary:"text-slate-300",textMuted:"text-slate-500",accent:"bg-indigo-500",accentHover:"hover:bg-indigo-400",accentLight:"bg-indigo-900/50",success:"text-teal-400",successLight:"bg-teal-900/30 border-teal-800",error:"text-rose-400",errorLight:"bg-rose-900/30 border-rose-800",border:"border-slate-700",borderHover:"hover:border-slate-600",jsonString:"text-teal-400",jsonNumber:"text-indigo-400",jsonBoolean:"text-purple-400",jsonNull:"text-slate-500",jsonObject:"text-amber-400",jsonArray:"text-sky-400",syntaxColors:{key:"#99f6e4",string:"#5eead4",number:"#818cf8",boolean:"#c084fc",null:"#64748b",punctuation:"#475569"},shadow:"shadow-xl shadow-indigo-950/50",shadowLg:"shadow-2xl shadow-indigo-950/60"}},forest:{name:"forest",label:"Bosque",icon:"🌲",colors:{bgPrimary:"from-emerald-50 via-green-50 to-teal-50",bgSecondary:"bg-white/80",bgTertiary:"bg-emerald-50/50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-lg hover:shadow-emerald-100",textPrimary:"text-emerald-950",textSecondary:"text-emerald-800",textMuted:"text-emerald-600",accent:"bg-emerald-600",accentHover:"hover:bg-emerald-700",accentLight:"bg-emerald-100",success:"text-green-700",successLight:"bg-green-50 border-green-200",error:"text-red-700",errorLight:"bg-red-50 border-red-200",border:"border-emerald-200",borderHover:"hover:border-emerald-300",jsonString:"text-green-600",jsonNumber:"text-teal-600",jsonBoolean:"text-lime-600",jsonNull:"text-emerald-400",jsonObject:"text-amber-600",jsonArray:"text-cyan-600",syntaxColors:{key:"#14532d",string:"#166534",number:"#134e4a",boolean:"#3f6212",null:"#6b7280",punctuation:"#6b7280"},shadow:"shadow-lg shadow-emerald-100",shadowLg:"shadow-xl shadow-emerald-200"}},sunset:{name:"sunset",label:"Atardecer",icon:"🌅",colors:{bgPrimary:"from-orange-50 via-rose-50 to-purple-50",bgSecondary:"bg-white/80",bgTertiary:"bg-orange-50/50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-lg hover:shadow-orange-100",textPrimary:"text-gray-900",textSecondary:"text-gray-700",textMuted:"text-gray-500",accent:"bg-orange-500",accentHover:"hover:bg-orange-600",accentLight:"bg-orange-100",success:"text-emerald-700",successLight:"bg-emerald-50 border-emerald-200",error:"text-rose-700",errorLight:"bg-rose-50 border-rose-200",border:"border-orange-200",borderHover:"hover:border-orange-300",jsonString:"text-rose-600",jsonNumber:"text-orange-600",jsonBoolean:"text-purple-600",jsonNull:"text-gray-500",jsonObject:"text-amber-600",jsonArray:"text-pink-600",syntaxColors:{key:"#881337",string:"#be123c",number:"#9a3412",boolean:"#6b21a8",null:"#6b7280",punctuation:"#9ca3af"},shadow:"shadow-lg shadow-orange-100",shadowLg:"shadow-xl shadow-orange-200"}}},ep="json-visualizer-theme";function Ng(){if(typeof window>"u")return"light";const n=localStorage.getItem(ep);return n&&n in Vo?n:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const bs=ke(Ng());function ni(){const n=He(()=>Vo[bs.value]),e=He(()=>Object.values(Vo));function t(s){bs.value=s,localStorage.setItem(ep,s),s==="dark"||s==="midnight"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function i(){const s=Object.keys(Vo),o=(s.indexOf(bs.value)+1)%s.length,a=s[o];a&&t(a)}return typeof window<"u"&&(bs.value==="dark"||bs.value==="midnight")&&document.documentElement.classList.add("dark"),{currentTheme:n,currentThemeName:bs,allThemes:e,setTheme:t,cycleTheme:i}}const Ug=["aria-expanded"],Fg={class:"text-lg","aria-hidden":"true"},Og={class:"text-sm font-medium hidden sm:inline"},Bg={class:"p-1.5"},kg=["onClick","aria-selected"],zg={class:"text-xl flex-shrink-0","aria-hidden":"true"},Vg={class:"flex-1 font-medium text-sm"},tp=dn({__name:"ThemeSelector",setup(n){const{currentTheme:e,allThemes:t,setTheme:i}=ni(),s=ke(!1),r=ke(null);function o(){s.value=!s.value}function a(u){i(u),s.value=!1}function l(u){r.value&&!r.value.contains(u.target)&&(s.value=!1)}function c(u){u.key==="Escape"&&(s.value=!1)}return ms(()=>{document.addEventListener("click",l),document.addEventListener("keydown",c)}),gs(()=>{document.removeEventListener("click",l),document.removeEventListener("keydown",c)}),(u,h)=>(ce(),he("div",{ref_key:"selectorRef",ref:r,class:"theme-selector relative"},[_("button",{onClick:o,class:B(["inline-flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",[S(e).name==="dark"||S(e).name==="midnight"?"bg-slate-800 text-slate-200 hover:bg-slate-700 focus:ring-slate-500":"bg-white/80 text-gray-700 hover:bg-white hover:shadow-md focus:ring-primary-500 shadow-soft"]]),"aria-expanded":s.value,"aria-haspopup":"listbox","aria-label":"Seleccionar tema",title:"Cambiar tema de color"},[_("span",Fg,$e(S(e).icon),1),_("span",Og,$e(S(e).label),1),(ce(),he("svg",{class:B(["w-4 h-4 transition-transform duration-200",{"rotate-180":s.value}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...h[0]||(h[0]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],10,Ug),ft(Nr,{"enter-active-class":"transition-all duration-200 ease-out","enter-from-class":"opacity-0 scale-95 -translate-y-2","enter-to-class":"opacity-100 scale-100 translate-y-0","leave-active-class":"transition-all duration-150 ease-in","leave-from-class":"opacity-100 scale-100 translate-y-0","leave-to-class":"opacity-0 scale-95 -translate-y-2"},{default:Ys(()=>[s.value?(ce(),he("div",{key:0,class:B(["absolute right-0 mt-2 w-48 rounded-xl overflow-hidden z-50",[S(e).name==="dark"||S(e).name==="midnight"?"bg-slate-800 ring-1 ring-white/10 shadow-2xl":"bg-white ring-1 ring-black/5 shadow-xl"]]),role:"listbox","aria-label":"Temas disponibles"},[_("div",Bg,[(ce(!0),he(Mt,null,On(S(t),f=>(ce(),he("button",{key:f.name,onClick:p=>a(f.name),class:B(["w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 text-left",[f.name===S(e).name?S(e).name==="dark"||S(e).name==="midnight"?"bg-slate-700 text-white":"bg-primary-50 text-primary-700":S(e).name==="dark"||S(e).name==="midnight"?"text-slate-300 hover:bg-slate-700 hover:text-white":"text-gray-700 hover:bg-gray-50"]]),role:"option","aria-selected":f.name===S(e).name},[_("span",zg,$e(f.icon),1),_("span",Vg,$e(f.label),1),f.name===S(e).name?(ce(),he("svg",{key:0,class:B(["w-4 h-4 flex-shrink-0",[S(e).name==="dark"||S(e).name==="midnight"?"text-primary-400":"text-primary-600"]]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...h[1]||(h[1]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])],2)):nt("",!0)],10,kg))),128))]),_("div",{class:B(["px-3 py-2 text-xs border-t",[S(e).name==="dark"||S(e).name==="midnight"?"border-slate-700 text-slate-500":"border-gray-100 text-gray-400"]])}," El tema se guarda automáticamente ",2)],2)):nt("",!0)]),_:1})],512))}}),Hg=[{id:"json-viewer",name:"JSON Viewer",description:"Visualize, format, and explore JSON data structures with an interactive tree view and 3D graph.",icon:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",iconViewBox:"0 0 24 24",status:"active",tags:["data","format","json"]},{id:"text-compare",name:"Text Compare",description:"Compare two texts side-by-side with line and character-level diff highlighting.",icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",iconViewBox:"0 0 24 24",status:"active",tags:["diff","text","compare"]},{id:"base64",name:"Base64",description:"Encode and decode text or files to/from Base64 with LF/CRLF line ending control.",icon:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",iconViewBox:"0 0 24 24",status:"active",tags:["encoding","base64","files"]},{id:"image-editor",name:"Image Editor",description:"Crop, flip, and rotate images with interactive canvas controls and precise numeric inputs.",icon:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",iconViewBox:"0 0 24 24",status:"active",tags:["image","edit","crop"]},{id:"regex-tester",name:"Regex Tester",description:"Test and debug regular expressions with live match highlighting and group capture display.",icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",iconViewBox:"0 0 24 24",status:"coming-soon",tags:["regex","text"]},{id:"color-palette",name:"Color Palette",description:"Convert between HEX, RGB, and HSL color formats and build accessible color palettes.",icon:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",iconViewBox:"0 0 24 24",status:"active",tags:["design","color","converter"]}],Gg={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},Wg={class:"mb-8 md:mb-12"},Xg={class:"flex items-center justify-between"},$g={class:"flex-1 text-center"},jg={class:"inline-flex items-center gap-3 mb-2"},Yg={class:"flex justify-end w-32"},qg={class:"flex-1 overflow-y-auto"},Kg={class:"mb-4"},Jg={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},Zg=["title","role","tabindex","onClick","onKeydown"],Qg={class:"flex items-start justify-between"},ev=["viewBox"],tv=["d"],nv={class:"flex-1"},iv={class:"flex items-center justify-between"},sv={class:"flex flex-wrap gap-1"},rv={class:"mt-6 text-center"},ov=dn({__name:"HomeView",emits:["select-tool"],setup(n,{emit:e}){const t=e,{currentTheme:i}=ni(),s=He(()=>i.value.name==="dark"||i.value.name==="midnight");function r(o){o.status==="active"&&t("select-tool",o.id)}return(o,a)=>(ce(),he("div",Gg,[_("header",Wg,[_("div",Xg,[a[1]||(a[1]=_("div",{class:"w-32 hidden sm:block"},null,-1)),_("div",$g,[_("div",jg,[_("div",{class:B(["w-11 h-11 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300",[s.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"]])},[...a[0]||(a[0]=[_("svg",{class:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})],-1)])],2),_("h1",{class:B(["text-3xl md:text-4xl font-bold bg-clip-text text-transparent transition-colors duration-300",[s.value?"bg-gradient-to-r from-white via-gray-200 to-white":"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"]])}," lit-code ",2)]),_("p",{class:B(["text-sm md:text-base font-medium transition-colors duration-300",S(i).colors.textMuted])}," A collection of developer tools ",2)]),_("div",Yg,[ft(tp)])])]),_("main",qg,[_("div",Kg,[_("h2",{class:B(["text-xs font-semibold uppercase tracking-widest transition-colors duration-300",S(i).colors.textMuted])}," Developer Tools ",2)]),_("div",Jg,[(ce(!0),he(Mt,null,On(S(Hg),l=>(ce(),he("div",{key:l.id,class:B(["rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200",[S(i).colors.bgCard,S(i).colors.shadow,s.value?"ring-1 ring-white/10":"border border-white/50",l.status==="active"?[S(i).colors.bgCardHover,"cursor-pointer hover:ring-2 hover:ring-primary-500/60 hover:scale-[1.01]"]:"opacity-60 cursor-not-allowed"]]),title:l.status==="coming-soon"?"Coming soon":void 0,role:l.status==="active"?"button":void 0,tabindex:l.status==="active"?0:void 0,onClick:c=>r(l),onKeydown:[ra(c=>r(l),["enter"]),ra(tr(c=>r(l),["prevent"]),["space"])]},[_("div",Qg,[_("div",{class:B(["w-11 h-11 rounded-xl flex items-center justify-center shadow-md transition-colors duration-300 flex-shrink-0",[s.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"]])},[(ce(),he("svg",{class:"w-5 h-5 text-white",fill:"none",viewBox:l.iconViewBox,stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:l.icon},null,8,tv)],8,ev))],2),l.status==="coming-soon"?(ce(),he("span",{key:0,class:B(["text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full",s.value?"bg-white/10 text-gray-400":"bg-gray-100 text-gray-500"])}," Coming soon ",2)):nt("",!0)]),_("div",nv,[_("h3",{class:B(["font-semibold text-base mb-1 transition-colors duration-300",S(i).colors.textPrimary])},$e(l.name),3),_("p",{class:B(["text-xs leading-relaxed transition-colors duration-300",S(i).colors.textMuted])},$e(l.description),3)]),_("div",iv,[_("div",sv,[(ce(!0),he(Mt,null,On(l.tags,c=>(ce(),he("span",{key:c,class:B(["text-[10px] font-medium px-1.5 py-0.5 rounded transition-colors duration-300",s.value?"bg-white/10 text-gray-400":"bg-gray-100 text-gray-500"])},$e(c),3))),128))]),l.status==="active"?(ce(),he("svg",{key:0,class:B(["w-4 h-4 flex-shrink-0 transition-colors duration-300",S(i).colors.textMuted]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...a[2]||(a[2]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1)])],2)):nt("",!0)])],42,Zg))),128))])]),_("footer",rv,[_("p",{class:B(["text-xs transition-colors duration-300",S(i).colors.textMuted])}," Select a tool to get started ",2)])]))}});function np(n=""){const e=ke(n),t=ke(null),i=ke(null),s=He(()=>!t.value&&e.value.trim()!==""),r=He(()=>t.value!==null),o=He(()=>e.value.trim()!=="");function a(){try{if(!o.value){t.value=null,i.value=null;return}i.value=JSON.parse(e.value),t.value=null}catch(f){t.value=f.message,i.value=null}}function l(){try{if(!o.value)return;const f=JSON.parse(e.value);e.value=JSON.stringify(f,null,2),t.value=null,i.value=f}catch(f){t.value=f.message}}function c(){!o.value||!s.value||(e.value=JSON.stringify(JSON.parse(e.value)))}function u(){e.value="",t.value=null,i.value=null}function h(f){e.value=f}return Jn(e,a,{immediate:!0}),{jsonText:e,errorMessage:t,parsedData:i,isValid:s,hasError:r,hasContent:o,formatJson:l,compactJson:c,clearJson:u,setJsonText:h}}function Ja(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function av(n,e){const t=/("(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|[{}[\],:])/g,{syntaxColors:i}=e.colors;let s="",r=0,o;for(;(o=t.exec(n))!==null;){const a=o[0];s+=Ja(n.slice(r,o.index));let l,c="400";a.startsWith('"')&&a.endsWith(":")?(l=i.key,c="600"):a.startsWith('"')?l=i.string:a==="true"||a==="false"?l=i.boolean:a==="null"?l=i.null:/^-?\d/.test(a)?l=i.number:l=i.punctuation,s+=`<span style="color:${l};font-weight:${c}">${Ja(a)}</span>`,r=o.index+a.length}return s+=Ja(n.slice(r)),s}function ip(n,e){return{highlightedHtml:He(()=>{const i=n();return i.trim()?av(i,e()):""})}}const lv={class:"flex items-center justify-between mb-4"},cv={class:"flex items-center gap-2"},uv={class:"flex items-center gap-1.5"},hv=["disabled"],dv=["disabled"],fv=["disabled"],pv=["title","aria-label"],mv={key:0,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},gv={key:1,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},vv={class:"relative flex-1 overflow-hidden"},xv=["innerHTML"],_v={class:"mt-3 min-h-[2rem]"},yv={class:"flex-1 min-w-0"},bv=dn({__name:"JsonInput",props:{modelValue:{},theme:{}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,s=He(()=>t.theme.name==="dark"||t.theme.name==="midnight"),{jsonText:r,errorMessage:o,isValid:a,hasContent:l,formatJson:c,compactJson:u,clearJson:h,setJsonText:f}=np(t.modelValue),{highlightedHtml:p}=ip(()=>r.value,()=>t.theme),g=ke(null),x=ke(null),m=ke(null),d=ke(!1),A=He(()=>{const w=r.value.split(`
`);return Array.from({length:w.length},(U,F)=>F+1)});Jn(r,w=>{i("update:modelValue",w)});function R(){g.value&&x.value&&(g.value.scrollTop=x.value.scrollTop),m.value&&x.value&&(m.value.scrollTop=x.value.scrollTop,m.value.scrollLeft=x.value.scrollLeft)}function M(){setTimeout(()=>{try{if(r.value.trim()){const w=JSON.parse(r.value);r.value=JSON.stringify(w,null,2)}}catch{}},0)}function E(){f(JSON.stringify({name:"John Doe",age:30,email:"john@example.com",address:{street:"123 Main St",city:"New York",country:"USA"},hobbies:["reading","coding","gaming"],isActive:!0},null,2))}async function I(){r.value&&await navigator.clipboard.writeText(r.value)}const N=ke(!1);function H(){N.value=!N.value}function y(w){w.key==="Escape"&&N.value&&(N.value=!1)}return ms(()=>window.addEventListener("keydown",y)),gs(()=>window.removeEventListener("keydown",y)),(w,U)=>(ce(),Cn(au,{to:"body",disabled:!N.value},[_("div",{class:B(N.value?"fixed inset-0 z-50 flex flex-col p-4 md:p-6":"flex flex-col h-full")},[N.value?(ce(),he("div",{key:0,class:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:U[0]||(U[0]=F=>N.value=!1)})):nt("",!0),_("div",{class:B(N.value?["relative z-10 flex-1 flex flex-col min-h-0 rounded-2xl p-4 md:p-6 overflow-hidden",n.theme.colors.bgCard,n.theme.colors.shadow]:"flex flex-col h-full")},[_("div",lv,[_("div",cv,[_("div",{class:B(["w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",s.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"])},[...U[7]||(U[7]=[_("svg",{class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)])],2),_("h2",{class:B(["text-lg font-semibold transition-colors duration-300",n.theme.colors.textPrimary])},"Entrada",2)]),_("div",uv,[_("button",{onClick:E,class:B(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Cargar datos de ejemplo","aria-label":"Cargar datos de ejemplo"},[...U[8]||(U[8]=[_("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})],-1),_("span",{class:"hidden sm:inline"},"Ejemplo",-1)])],2),S(l)?(ce(),he("button",{key:0,onClick:I,class:B(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Copiar al portapapeles","aria-label":"Copiar JSON al portapapeles"},[...U[9]||(U[9]=[_("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1)])],2)):nt("",!0),_("button",{onClick:U[1]||(U[1]=(...F)=>S(c)&&S(c)(...F)),disabled:!S(l),class:B(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",[n.theme.colors.accent,n.theme.colors.accentHover,"focus:ring-primary-500"]]),title:"Formatear JSON","aria-label":"Formatear JSON"},[...U[10]||(U[10]=[_("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1),_("span",{class:"hidden sm:inline"},"Formatear",-1)])],10,hv),_("button",{onClick:U[2]||(U[2]=(...F)=>S(u)&&S(u)(...F)),disabled:!S(l)||!S(a),class:B(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Compactar JSON","aria-label":"Compactar JSON"},[...U[11]||(U[11]=[_("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"})],-1),_("span",{class:"hidden sm:inline"},"Compacto",-1)])],10,dv),_("button",{onClick:U[3]||(U[3]=(...F)=>S(h)&&S(h)(...F)),disabled:!S(l),class:B(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",s.value?"text-red-400 bg-red-900/30 hover:bg-red-900/50 focus:ring-red-500":"text-red-600 bg-red-50 hover:bg-red-100 focus:ring-red-300"]),title:"Limpiar contenido","aria-label":"Limpiar contenido"},[...U[12]||(U[12]=[_("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)])],10,fv),_("button",{onClick:H,class:B(["inline-flex items-center p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:N.value?"Salir de pantalla completa":"Pantalla completa","aria-label":N.value?"Salir de pantalla completa":"Pantalla completa"},[N.value?(ce(),he("svg",gv,[...U[14]||(U[14]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9L4 4m0 0v4m0-4h4m6 0l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m6 0l5 5m0 0v-4m0 4h-4"},null,-1)])])):(ce(),he("svg",mv,[...U[13]||(U[13]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"},null,-1)])]))],10,pv)])]),_("div",{class:B(["flex-1 flex rounded-xl overflow-hidden transition-all duration-200 ring-1",[S(o)?s.value?"ring-red-500/50 bg-red-900/20":"ring-red-300 bg-red-50/50":d.value?s.value?"ring-primary-500 ring-2 bg-slate-800":"ring-primary-300 ring-2 bg-white":s.value?"ring-slate-600 bg-slate-800/50":"ring-gray-200 bg-surface-secondary"]])},[_("div",{ref_key:"lineNumbersRef",ref:g,class:B(["flex flex-col py-4 px-3 text-right select-none overflow-hidden border-r transition-colors",[S(o)?s.value?"bg-red-900/30 border-red-800 text-red-400":"bg-red-100/50 border-red-200 text-red-400":s.value?"bg-slate-900/50 border-slate-700 text-slate-500":"bg-surface-tertiary border-gray-100 text-gray-400"]]),"aria-hidden":"true"},[(ce(!0),he(Mt,null,On(A.value,F=>(ce(),he("div",{key:F,class:"font-mono text-xs leading-5 tabular-nums"},$e(F),1))),128))],2),_("div",vv,[_("pre",{ref_key:"preRef",ref:m,class:B(["absolute inset-0 m-0 p-4 font-mono text-sm leading-5 whitespace-pre-wrap break-words pointer-events-none overflow-hidden select-none",s.value?"text-slate-200":"text-gray-800"]),"aria-hidden":"true",innerHTML:S(p)||""},null,10,xv),Bi(_("textarea",{ref_key:"textareaRef",ref:x,"onUpdate:modelValue":U[4]||(U[4]=F=>Dt(r)?r.value=F:null),onPaste:M,onScroll:R,onFocus:U[5]||(U[5]=F=>d.value=!0),onBlur:U[6]||(U[6]=F=>d.value=!1),placeholder:"Pega o escribe tu JSON aquí...",class:B(["absolute inset-0 w-full h-full p-4 font-mono text-sm leading-5 focus:outline-none resize-none bg-transparent whitespace-pre-wrap break-words",s.value?"placeholder:text-slate-500":"placeholder:text-gray-400"]),style:gi({"-webkit-text-fill-color":"transparent",color:"transparent","caret-color":s.value?"#e2e8f0":"#374151"}),"aria-label":"Editor de JSON",spellcheck:"false"},null,38),[[er,S(r)]])])],2),_("div",_v,[S(o)?(ce(),he("div",{key:0,class:B(["flex items-start gap-2 p-3 border rounded-lg animate-fade-in",s.value?"bg-red-900/30 border-red-800":"bg-red-50 border-red-200"]),role:"alert"},[(ce(),he("svg",{class:B(["w-4 h-4 flex-shrink-0 mt-0.5",s.value?"text-red-400":"text-red-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...U[15]||(U[15]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])],2)),_("div",yv,[_("p",{class:B(["text-sm font-medium",s.value?"text-red-300":"text-red-800"])},"Error de sintaxis",2),_("p",{class:B(["text-xs mt-0.5 truncate",s.value?"text-red-400":"text-red-600"])},$e(S(o)),3)])],2)):S(l)&&S(a)?(ce(),he("div",{key:1,class:B(["flex items-center gap-2 p-3 border rounded-lg animate-fade-in",s.value?"bg-emerald-900/30 border-emerald-800":"bg-emerald-50 border-emerald-200"]),role:"status"},[(ce(),he("svg",{class:B(["w-4 h-4",s.value?"text-emerald-400":"text-emerald-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...U[16]||(U[16]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])],2)),_("p",{class:B(["text-sm font-medium",s.value?"text-emerald-300":"text-emerald-700"])},"JSON válido",2),_("span",{class:B(["ml-auto text-xs tabular-nums",s.value?"text-emerald-400":"text-emerald-600"])},$e(A.value.length)+" líneas",3)],2)):nt("",!0)])],2)],2)],8,["disabled"]))}});function Mv(n,e=0,t=2){const i=ke(e<t),s=He(()=>{const g=n();return g===null?"null":Array.isArray(g)?"array":typeof g}),r=He(()=>s.value==="object"||s.value==="array"),o=He(()=>{const g=n();return s.value==="array"&&Array.isArray(g)?g.length:s.value==="object"&&typeof g=="object"&&g!==null?Object.keys(g).length:0}),a=He(()=>{const g=n();return s.value==="array"&&Array.isArray(g)?g.map((x,m)=>({key:m,value:x})):s.value==="object"&&typeof g=="object"&&g!==null?Object.entries(g).map(([x,m])=>({key:x,value:m})):[]});function l(){r.value&&(i.value=!i.value)}function c(g){return{string:"text-green-600",number:"text-blue-600",boolean:"text-purple-600",null:"text-gray-500",array:"text-gray-800",object:"text-gray-800"}[g]}function u(g){return typeof g=="string"?`"${g}"`:g===null?"null":String(g)}function h(){i.value=!0}function f(){i.value=!1}function p(g,x){return g==="array"?`Array[${x}]`:g==="object"?`Object{${x}}`:""}return{isExpanded:i,dataType:s,isExpandable:r,itemCount:o,entries:a,toggleExpand:l,getValueColor:c,formatValue:u,getTypeLabel:p,expandAll:h,collapseAll:f}}const Sv={class:"json-node group/node"},Ev={class:"flex items-start gap-1.5"},wv=["role","aria-expanded","tabindex"],Tv=["title"],Av={class:"tabular-nums"},Cv=dn({__name:"JsonNode",props:{data:{type:[String,Number,Boolean,null,Object]},name:{},isRoot:{type:Boolean,default:!1},depth:{default:0},initialExpandDepth:{default:2},lineNumber:{default:1},theme:{}},setup(n){const e=n,t=He(()=>e.theme?.name==="dark"||e.theme?.name==="midnight"),i={string:"jsonString",number:"jsonNumber",boolean:"jsonBoolean",null:"jsonNull",object:"jsonObject",array:"jsonArray"},{isExpanded:s,dataType:r,isExpandable:o,itemCount:a,entries:l,toggleExpand:c,formatValue:u}=Mv(()=>e.data,e.depth,e.initialExpandDepth);function h(g){switch(g){case"object":return"{}";case"array":return"[]";case"string":return"Aa";case"number":return"#";case"boolean":return"◐";case"null":return"ø";default:return"·"}}function f(g){if(t.value)switch(g){case"object":return"bg-orange-900/50 text-orange-400";case"array":return"bg-cyan-900/50 text-cyan-400";case"string":return"bg-emerald-900/50 text-emerald-400";case"number":return"bg-blue-900/50 text-blue-400";case"boolean":return"bg-violet-900/50 text-violet-400";case"null":return"bg-slate-700 text-slate-400";default:return"bg-slate-700 text-slate-400"}switch(g){case"object":return"bg-orange-100 text-orange-700";case"array":return"bg-cyan-100 text-cyan-700";case"string":return"bg-emerald-100 text-emerald-700";case"number":return"bg-blue-100 text-blue-700";case"boolean":return"bg-violet-100 text-violet-700";case"null":return"bg-gray-100 text-gray-600";default:return"bg-gray-100 text-gray-600"}}function p(g){if(e.theme){const x=i[g];return x?e.theme.colors[x]:e.theme.colors.textSecondary}switch(g){case"string":return"text-emerald-600";case"number":return"text-blue-600";case"boolean":return"text-violet-600";case"null":return"text-gray-500";default:return"text-gray-800"}}return(g,x)=>{const m=d0("JsonNode",!0);return ce(),he("div",Sv,[_("div",Ev,[_("span",{class:B(["flex-shrink-0 w-8 text-right text-[10px] select-none font-mono mt-1 tabular-nums opacity-60 group-hover/node:opacity-100 transition-opacity",t.value?"text-slate-500":"text-gray-400"]),"aria-hidden":"true"},$e(n.lineNumber),3),_("div",{class:B(["flex-1 flex items-start gap-1.5 py-1 px-2 -mx-2 rounded-lg transition-all",[S(o)?t.value?"cursor-pointer hover:bg-slate-700/50":"cursor-pointer hover:bg-primary-50/70":t.value?"hover:bg-slate-700/30":"hover:bg-gray-50"]]),role:S(o)?"button":void 0,"aria-expanded":S(o)?S(s):void 0,tabindex:S(o)?0:void 0,onClick:x[0]||(x[0]=(...d)=>S(c)&&S(c)(...d)),onKeydown:[x[1]||(x[1]=ra((...d)=>S(c)&&S(c)(...d),["enter"])),x[2]||(x[2]=ra(tr((...d)=>S(c)&&S(c)(...d),["prevent"]),["space"]))]},[S(o)?(ce(),he("span",{key:0,class:B(["flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center rounded transition-colors",S(s)?t.value?"text-primary-400":"text-primary-500":t.value?"text-slate-500 group-hover/node:text-slate-400":"text-gray-400 group-hover/node:text-gray-600"])},[(ce(),he("svg",{class:B(["w-3.5 h-3.5 transition-transform duration-200 ease-out",{"rotate-90":S(s)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[...x[3]||(x[3]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",d:"M9 5l7 7-7 7"},null,-1)])],2))],2)):(ce(),he("span",{key:1,class:B(["flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center text-[9px] font-bold rounded",f(S(r))]),title:S(r)},$e(h(S(r))),11,Tv)),n.isRoot?nt("",!0):(ce(),he("span",{key:2,class:B(["font-medium flex-shrink-0",t.value?"text-primary-400":"text-primary-700"])},[It(' "'+$e(n.name)+'"',1),_("span",{class:B([t.value?"text-slate-500":"text-gray-400","ml-0.5"])},":",2)],2)),S(o)?(ce(),he("span",{key:3,class:B(["font-mono text-sm flex items-center gap-1.5",t.value?"text-slate-400":"text-gray-600"])},[_("span",{class:B(["inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold",S(r)==="array"?t.value?"bg-cyan-900/50 text-cyan-400":"bg-cyan-100 text-cyan-700":t.value?"bg-orange-900/50 text-orange-400":"bg-orange-100 text-orange-700"])},[It($e(S(r)==="array"?"[]":"{}")+" ",1),_("span",Av,$e(S(a)),1)],2),S(s)?nt("",!0):(ce(),he("span",{key:0,class:B(["text-xs",t.value?"text-slate-500":"text-gray-400"])},"•••",2))],2)):(ce(),he("span",{key:4,class:B([p(S(r)),"font-mono text-sm break-all"])},$e(S(u)(n.data)),3))],42,wv)]),S(o)&&S(s)?(ce(),he("div",{key:0,class:B(["ml-5 pl-3 border-l-2 transition-colors animate-fade-in",t.value?"border-slate-700 hover:border-slate-600":"border-primary-100 hover:border-primary-200"])},[(ce(!0),he(Mt,null,On(S(l),(d,A)=>(ce(),Cn(m,{key:d.key,data:d.value,name:String(d.key),depth:n.depth+1,initialExpandDepth:n.initialExpandDepth,lineNumber:n.lineNumber+A+1,theme:n.theme},null,8,["data","name","depth","initialExpandDepth","lineNumber","theme"]))),128))],2)):nt("",!0)])}}}),du=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Rv=du(Cv,[["__scopeId","data-v-008f3ba3"]]);function Pv(n){return n===null?"null":Array.isArray(n)?"array":typeof n=="object"?"object":typeof n=="string"?"string":typeof n=="number"?"number":typeof n=="boolean"?"boolean":"null"}function Dv(n,e){if(e==="object")return`{${Object.keys(n).length}}`;if(e==="array")return`[${n.length}]`;if(e==="string"){const t=n;return t.length>20?`"${t.slice(0,20)}..."`:`"${t}"`}return e==="null"?"null":String(n)}let sp=0;function rp(n,e,t){const i=Pv(n),r={id:`node-${sp++}`,name:e,value:Dv(n,i),type:i,children:[],isExpanded:t<2,depth:t};if(i==="object"||i==="array"){const o=i==="array"?n.map((a,l)=>({key:String(l),value:a})):Object.entries(n).map(([a,l])=>({key:a,value:l}));r.children=o.map(a=>rp(a.value,a.key,t+1))}return r}function Lv(n){return sp=0,rp(n,"root",0)}const fu="182",Ks={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iv=0,Th=1,Nv=2,Ho=1,op=2,Er=3,Gi=0,un=1,$n=2,Zn=0,Js=1,ql=2,Ah=3,Ch=4,Uv=5,os=100,Fv=101,Ov=102,Bv=103,kv=104,zv=200,Vv=201,Hv=202,Gv=203,Kl=204,Jl=205,Wv=206,Xv=207,$v=208,jv=209,Yv=210,qv=211,Kv=212,Jv=213,Zv=214,Zl=0,Ql=1,ec=2,nr=3,tc=4,nc=5,ic=6,sc=7,ap=0,Qv=1,ex=2,Qn=0,lp=1,cp=2,up=3,hp=4,dp=5,fp=6,pp=7,mp=300,fs=301,ir=302,rc=303,oc=304,wa=306,ac=1e3,vi=1001,lc=1002,Ht=1003,tx=1004,ao=1005,Vt=1006,Za=1007,ls=1008,xn=1009,gp=1010,vp=1011,Wr=1012,pu=1013,ei=1014,Yn=1015,bn=1016,mu=1017,gu=1018,Xr=1020,xp=35902,_p=35899,yp=1021,bp=1022,Un=1023,Si=1026,cs=1027,Mp=1028,vu=1029,sr=1030,xu=1031,_u=1033,Go=33776,Wo=33777,Xo=33778,$o=33779,cc=35840,uc=35841,hc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37488,vc=37489,xc=37490,_c=37491,yc=37808,bc=37809,Mc=37810,Sc=37811,Ec=37812,wc=37813,Tc=37814,Ac=37815,Cc=37816,Rc=37817,Pc=37818,Dc=37819,Lc=37820,Ic=37821,Nc=36492,Uc=36494,Fc=36495,Oc=36283,Bc=36284,kc=36285,zc=36286,nx=3200,Sp=0,ix=1,Oi="",vn="srgb",rr="srgb-linear",oa="linear",gt="srgb",Ms=7680,Rh=519,sx=512,rx=513,ox=514,yu=515,ax=516,lx=517,bu=518,cx=519,Vc=35044,Ph="300 es",qn=2e3,aa=2001;function Ep(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ux(){const n=la("canvas");return n.style.display="block",n}const Dh={};function ca(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ze(...n){const e="THREE."+n.shift();console.warn(e,...n)}function lt(...n){const e="THREE."+n.shift();console.error(e,...n)}function $r(...n){const e=n.join(" ");e in Dh||(Dh[e]=!0,Ze(...n))}function hx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,ua=180/Math.PI;function Vi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function dx(n,e){return(n%e+e)%e}function Qa(n,e,t){return(1-t)*n+t*e}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fx={DEG2RAD:jo};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ps{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=l*f+c*p+u*g+h*x;m<0&&(f=-f,p=-p,g=-g,x=-x,m=-m);let d=1-a;if(m<.9995){const A=Math.acos(m),R=Math.sin(A);d=Math.sin(d*A)/R,a=Math.sin(a*A)/R,l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+x*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+x*a;const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new k,Lh=new ps;class st{constructor(e,t,i,s,r,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],d=s[6],A=s[1],R=s[4],M=s[7],E=s[2],I=s[5],N=s[8];return r[0]=o*x+a*A+l*E,r[3]=o*m+a*R+l*I,r[6]=o*d+a*M+l*N,r[1]=c*x+u*A+h*E,r[4]=c*m+u*R+h*I,r[7]=c*d+u*M+h*N,r[2]=f*x+p*A+g*E,r[5]=f*m+p*R+g*I,r[8]=f*d+p*M+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new st,Ih=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function px(){const n={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[rr]:{primaries:e,whitePoint:i,transfer:oa,toXYZ:Ih,fromXYZ:Nh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Ih,fromXYZ:Nh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}const ct=px();function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ss;class mx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=la("canvas")),Ss.width=e.width,Ss.height=e.height;const s=Ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=la("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_i(t[i]/255)*255):t[i]=_i(t[i]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gx=0;class Mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function nl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let vx=0;const il=new k;class qt extends vs{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=vi,s=vi,r=Vt,o=ls,a=Un,l=xn,c=qt.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Vi(),this.name="",this.source=new Mu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ac:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ac:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=mp;qt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,M=(p+1)/2,E=(d+1)/2,I=(u+f)/4,N=(h+x)/4,H=(g+m)/4;return R>M&&R>E?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=I/i,r=N/i):M>E?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=I/s,r=H/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=N/r,s=H/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-x)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xx extends vs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new qt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends xx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wp extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _x extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),co.subVectors(this.max,fr),Es.subVectors(e.a,fr),ws.subVectors(e.b,fr),Ts.subVectors(e.c,fr),Ai.subVectors(ws,Es),Ci.subVectors(Ts,ws),Zi.subVectors(Es,Ts);let t=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-Zi.z,Zi.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,Zi.z,0,-Zi.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-Zi.y,Zi.x,0];return!sl(t,Es,ws,Ts,co)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,Es,ws,Ts,co))?!1:(uo.crossVectors(Ai,Ci),t=[uo.x,uo.y,uo.z],sl(t,Es,ws,Ts,co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new k,new k,new k,new k,new k,new k,new k,new k],Ln=new k,lo=new Kr,Es=new k,ws=new k,Ts=new k,Ai=new k,Ci=new k,Zi=new k,fr=new k,co=new k,uo=new k,Qi=new k;function sl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=i.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const yx=new Kr,pr=new k,rl=new k;class Ta{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(rl)),this.expandByPoint(pr.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ai=new k,ol=new k,ho=new k,Ri=new k,al=new k,fo=new k,ll=new k;class Aa{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ol.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(ol);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=Ri.dot(this.direction),l=-Ri.dot(ho),c=Ri.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ol).addScaledVector(ho,f),p}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,s,r){al.subVectors(t,e),fo.subVectors(i,e),ll.crossVectors(al,fo);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(fo.crossVectors(Ri,fo));if(l<0)return null;const c=a*this.direction.dot(al.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(ll);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bx,e,Mx)}lookAt(e,t,i){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Pi.crossVectors(i,mn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Pi.crossVectors(i,mn)),Pi.normalize(),po.crossVectors(mn,Pi),s[0]=Pi.x,s[4]=po.x,s[8]=mn.x,s[1]=Pi.y,s[5]=po.y,s[9]=mn.y,s[2]=Pi.z,s[6]=po.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],A=i[3],R=i[7],M=i[11],E=i[15],I=s[0],N=s[4],H=s[8],y=s[12],w=s[1],U=s[5],F=s[9],z=s[13],Q=s[2],te=s[6],K=s[10],X=s[14],W=s[3],ge=s[7],be=s[11],Se=s[15];return r[0]=o*I+a*w+l*Q+c*W,r[4]=o*N+a*U+l*te+c*ge,r[8]=o*H+a*F+l*K+c*be,r[12]=o*y+a*z+l*X+c*Se,r[1]=u*I+h*w+f*Q+p*W,r[5]=u*N+h*U+f*te+p*ge,r[9]=u*H+h*F+f*K+p*be,r[13]=u*y+h*z+f*X+p*Se,r[2]=g*I+x*w+m*Q+d*W,r[6]=g*N+x*U+m*te+d*ge,r[10]=g*H+x*F+m*K+d*be,r[14]=g*y+x*z+m*X+d*Se,r[3]=A*I+R*w+M*Q+E*W,r[7]=A*N+R*U+M*te+E*ge,r[11]=A*H+R*F+M*K+E*be,r[15]=A*y+R*z+M*X+E*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15],A=l*p-c*f,R=a*p-c*h,M=a*f-l*h,E=o*p-c*u,I=o*f-l*u,N=o*h-a*u;return t*(x*A-m*R+d*M)-i*(g*A-m*E+d*I)+s*(g*R-x*E+d*N)-r*(g*M-x*I+m*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],A=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,R=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,M=u*x*c-g*h*c+g*a*p-o*x*p-u*a*d+o*h*d,E=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,I=t*A+i*R+s*M+r*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return e[0]=A*N,e[1]=(x*f*r-h*m*r-x*s*p+i*m*p+h*s*d-i*f*d)*N,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*N,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*N,e[4]=R*N,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*N,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*N,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*N,e[8]=M*N,e[9]=(g*h*r-u*x*r-g*i*p+t*x*p+u*i*d-t*h*d)*N,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*d+t*a*d)*N,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*N,e[12]=E*N,e[13]=(u*x*s-g*h*s+g*i*f-t*x*f-u*i*m+t*h*m)*N,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*N,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,x=o*u,m=o*h,d=a*h,A=l*c,R=l*u,M=l*h,E=i.x,I=i.y,N=i.z;return s[0]=(1-(x+d))*E,s[1]=(p+M)*E,s[2]=(g-R)*E,s[3]=0,s[4]=(p-M)*I,s[5]=(1-(f+d))*I,s[6]=(m+A)*I,s[7]=0,s[8]=(g+R)*N,s[9]=(m-A)*N,s[10]=(1-(f+x))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=As.set(s[0],s[1],s[2]).length();const o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),In.copy(this);const c=1/r,u=1/o,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=qn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===aa)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===qn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===aa)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const As=new k,In=new Tt,bx=new k(0,0,0),Mx=new k(1,1,1),Pi=new k,po=new k,mn=new k,Uh=new Tt,Fh=new ps;class ti{constructor(e=0,t=0,i=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sx=0;const Oh=new k,Cs=new ps,li=new Tt,mo=new k,mr=new k,Ex=new k,wx=new ps,Bh=new k(1,0,0),kh=new k(0,1,0),zh=new k(0,0,1),Vh={type:"added"},Tx={type:"removed"},Rs={type:"childadded",child:null},cl={type:"childremoved",child:null};class Ut extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new k,t=new ti,i=new ps,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new st}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(kh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(kh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mo.copy(e):mo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(mr,mo,this.up):li.lookAt(mo,mr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(li),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tx),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vh),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Ex),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,wx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new k(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new k,ci=new k,ul=new k,ui=new k,Ps=new k,Ds=new k,Hh=new k,hl=new k,dl=new k,fl=new k,pl=new Pt,ml=new Pt,gl=new Pt;class Rn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),ci.subVectors(i,t),ul.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(ci),l=Nn.dot(ul),c=ci.dot(ci),u=ci.dot(ul),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,i),gl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),ci.subVectors(e,t),Nn.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,i),Ds.subVectors(r,i),hl.subVectors(e,i);const l=Ps.dot(hl),c=Ds.dot(hl);if(l<=0&&c<=0)return t.copy(i);dl.subVectors(e,s);const u=Ps.dot(dl),h=Ds.dot(dl);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ps,o);fl.subVectors(e,r);const p=Ps.dot(fl),g=Ds.dot(fl);if(g>=0&&p<=g)return t.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ds,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Hh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Hh,a);const d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(Ps,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},go={h:0,s:0,l:0};function vl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=dx(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=vl(o,r,e+1/3),this.g=vl(o,r,e),this.b=vl(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=vn){function i(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=Tp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return ct.workingToColorSpace(Xt.copy(this),e),Math.round(ot(Xt.r*255,0,255))*65536+Math.round(ot(Xt.g*255,0,255))*256+Math.round(ot(Xt.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Xt.copy(this),t);const i=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=vn){ct.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,s=Xt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(go);const i=Qa(Di.h,go.h,t),s=Qa(Di.s,go.s,t),r=Qa(Di.l,go.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Qe;Qe.NAMES=Tp;let Ax=0;class xs extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Js,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=Jl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Jl&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ca extends xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new k,vo=new Ce;let Cx=0;class Mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vc,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}}class Ap extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cp extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gt extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Rx=0;const Tn=new Tt,xl=new Ut,Ls=new k,gn=new Kr,gr=new Kr,zt=new k;class sn extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ep(e)?Cp:Ap)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(gn.min,gr.min),gn.expandByPoint(zt),zt.addVectors(gn.max,gr.max),gn.expandByPoint(zt)):(gn.expandByPoint(gr.min),gn.expandByPoint(gr.max))}gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),zt.add(Ls)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<i.count;H++)a[H]=new k,l[H]=new k;const c=new k,u=new k,h=new k,f=new Ce,p=new Ce,g=new Ce,x=new k,m=new k;function d(H,y,w){c.fromBufferAttribute(i,H),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,w),f.fromBufferAttribute(r,H),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,w),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(U),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[H].add(x),a[y].add(x),a[w].add(x),l[H].add(m),l[y].add(m),l[w].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let H=0,y=A.length;H<y;++H){const w=A[H],U=w.start,F=w.count;for(let z=U,Q=U+F;z<Q;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const R=new k,M=new k,E=new k,I=new k;function N(H){E.fromBufferAttribute(s,H),I.copy(E);const y=a[H];R.copy(y),R.sub(E.multiplyScalar(E.dot(y))).normalize(),M.crossVectors(I,y);const U=M.dot(l[H])<0?-1:1;o.setXYZW(H,R.x,R.y,R.z,U)}for(let H=0,y=A.length;H<y;++H){const w=A[H],U=w.start,F=w.count;for(let z=U,Q=U+F;z<Q;z+=3)N(e.getX(z+0)),N(e.getX(z+1)),N(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Mn(f,u,h)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gh=new Tt,es=new Aa,xo=new Ta,Wh=new k,_o=new k,yo=new k,bo=new k,_l=new k,Mo=new k,Xh=new k,So=new k;class Sn extends Ut{constructor(e=new sn,t=new Ca){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(_l.fromBufferAttribute(h,e),o?Mo.addScaledVector(_l,u):Mo.addScaledVector(_l.sub(t),u))}t.add(Mo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(xo.containsPoint(es.origin)===!1&&(es.intersectSphere(xo,Wh)===null||es.origin.distanceToSquared(Wh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),es.copy(e.ray).applyMatrix4(Gh),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),R=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,E=R;M<E;M+=3){const I=a.getX(M),N=a.getX(M+1),H=a.getX(M+2);s=Eo(this,d,e,i,c,u,h,I,N,H),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const A=a.getX(m),R=a.getX(m+1),M=a.getX(m+2);s=Eo(this,o,e,i,c,u,h,A,R,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=o[m.materialIndex],A=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,E=R;M<E;M+=3){const I=M,N=M+1,H=M+2;s=Eo(this,d,e,i,c,u,h,I,N,H),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const A=m,R=m+1,M=m+2;s=Eo(this,o,e,i,c,u,h,A,R,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Px(n,e,t,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Gi,a),l===null)return null;So.copy(a),So.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(So);return c<t.near||c>t.far?null:{distance:c,point:So.clone(),object:n}}function Eo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,_o),n.getVertexPosition(l,yo),n.getVertexPosition(c,bo);const u=Px(n,e,t,i,_o,yo,bo,Xh);if(u){const h=new k;Rn.getBarycoord(Xh,_o,yo,bo,h),s&&(u.uv=Rn.getInterpolatedAttribute(s,a,l,c,h,new Ce)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,a,l,c,h,new Ce)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Rn.getNormal(_o,yo,bo,f.normal),u.face=f,u.barycoord=h}return u}class Jr extends sn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function g(x,m,d,A,R,M,E,I,N,H,y){const w=M/N,U=E/H,F=M/2,z=E/2,Q=I/2,te=N+1,K=H+1;let X=0,W=0;const ge=new k;for(let be=0;be<K;be++){const Se=be*U-z;for(let de=0;de<te;de++){const Te=de*w-F;ge[x]=Te*A,ge[m]=Se*R,ge[d]=Q,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[d]=I>0?1:-1,u.push(ge.x,ge.y,ge.z),h.push(de/N),h.push(1-be/H),X+=1}}for(let be=0;be<H;be++)for(let Se=0;Se<N;Se++){const de=f+Se+te*be,Te=f+Se+te*(be+1),Ge=f+(Se+1)+te*(be+1),qe=f+(Se+1)+te*be;l.push(de,Te,qe),l.push(Te,Ge,qe),W+=6}a.addGroup(p,W,y),p+=W,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=or(n[t]);for(const s in i)e[s]=i[s]}return e}function Dx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const ha={clone:or,merge:Qt};var Lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lx,this.fragmentShader=Ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pp extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new k,$h=new Ce,jh=new Ce;class cn extends Pp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,$h,jh),t.subVectors(jh,$h)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Ns=1;class Nx extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Is,Ns,e,t);s.layers=this.layers,this.add(s);const r=new cn(Is,Ns,e,t);r.layers=this.layers,this.add(r);const o=new cn(Is,Ns,e,t);o.layers=this.layers,this.add(o);const a=new cn(Is,Ns,e,t);a.layers=this.layers,this.add(a);const l=new cn(Is,Ns,e,t);l.layers=this.layers,this.add(l);const c=new cn(Is,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Dp extends qt{constructor(e=[],t=fs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lp extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Dp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jr(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Zn});r.uniforms.tEquirect.value=t;const o=new Sn(s,r),a=t.minFilter;return t.minFilter===ls&&(t.minFilter=Vt),new Nx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class us extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ux={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Eu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=t}clone(){return new Eu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fx extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ox{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new k;class da{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=jn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new da(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hc extends xs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Us;const vr=new k,Fs=new k,Os=new k,Bs=new Ce,xr=new Ce,Ip=new Tt,wo=new k,_r=new k,To=new k,Yh=new Ce,bl=new Ce,qh=new Ce;class Kh extends Ut{constructor(e=new Hc){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new sn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ox(t,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new da(i,3,0,!1)),Us.setAttribute("uv",new da(i,2,3,!1))}this.geometry=Us,this.material=e,this.center=new Ce(.5,.5),this.count=1}raycast(e,t){e.camera===null&&lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Ip.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Os.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Ao(wo.set(-.5,-.5,0),Os,o,Fs,s,r),Ao(_r.set(.5,-.5,0),Os,o,Fs,s,r),Ao(To.set(.5,.5,0),Os,o,Fs,s,r),Yh.set(0,0),bl.set(1,0),qh.set(1,1);let a=e.ray.intersectTriangle(wo,_r,To,!1,vr);if(a===null&&(Ao(_r.set(-.5,.5,0),Os,o,Fs,s,r),bl.set(0,1),a=e.ray.intersectTriangle(wo,To,_r,!1,vr),a===null))return;const l=e.ray.origin.distanceTo(vr);l<e.near||l>e.far||t.push({distance:l,point:vr.clone(),uv:Rn.getInterpolation(vr,wo,_r,To,Yh,bl,qh,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ao(n,e,t,i,s,r){Bs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(xr.x=r*Bs.x-s*Bs.y,xr.y=s*Bs.x+r*Bs.y):xr.copy(Bs),n.copy(e),n.x+=xr.x,n.y+=xr.y,n.applyMatrix4(Ip)}class Bx extends qt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Ht,u=Ht,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ml=new k,kx=new k,zx=new st;class fi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ml.subVectors(i,t).cross(kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ml),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zx.getNormalMatrix(e),s=this.coplanarPoint(Ml).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Ta,Vx=new Ce(.5,.5),Co=new k;class wu{constructor(e=new fi,t=new fi,i=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],A=r[12],R=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-o,p-u,d-g,E-A).normalize(),s[1].setComponents(c+o,p+u,d+g,E+A).normalize(),s[2].setComponents(c+a,p+h,d+x,E+R).normalize(),s[3].setComponents(c-a,p-h,d-x,E-R).normalize(),i)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,p-f,d-m,E-M).normalize();else if(s[4].setComponents(c-l,p-f,d-m,E-M).normalize(),t===qn)s[5].setComponents(c+l,p+f,d+m,E+M).normalize();else if(t===aa)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=Vx.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Co.x=s.normal.x>0?e.max.x:e.min.x,Co.y=s.normal.y>0?e.max.y:e.min.y,Co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Np extends xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jh=new Tt,Gc=new Aa,Ro=new Ta,Po=new k;class Hx extends Ut{constructor(e=new sn,t=new Np){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;Jh.copy(s).invert(),Gc.copy(e.ray).applyMatrix4(Jh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){const m=c.getX(g);Po.fromBufferAttribute(h,m),Zh(Po,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Po.fromBufferAttribute(h,g),Zh(Po,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zh(n,e,t,i,s,r,o){const a=Gc.distanceSqToPoint(n);if(a<t){const l=new k;Gc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Qh extends qt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jr extends qt{constructor(e,t,i=ei,s,r,o,a=Ht,l=Ht,c,u=Si,h=1){if(u!==Si&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gx extends jr{constructor(e,t=ei,i=fs,s,r,o=Ht,a=Ht,l,c=Si){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Up extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ce:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new k,s=[],r=[],o=[],a=new k,l=new Tt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ot(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ot(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fp extends wi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Wx extends Fp{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Do=new k,Sl=new Tu,El=new Tu,wl=new Tu;class Xx extends wi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Do.subVectors(s[0],s[1]).add(s[0]),c=Do);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Do.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Do),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Sl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),El.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),wl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),El.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),wl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Sl.calc(l),El.calc(l),wl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ed(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function $x(n,e){const t=1-n;return t*t*e}function jx(n,e){return 2*(1-n)*n*e}function Yx(n,e){return n*n*e}function Ur(n,e,t,i){return $x(n,e)+jx(n,t)+Yx(n,i)}function qx(n,e){const t=1-n;return t*t*t*e}function Kx(n,e){const t=1-n;return 3*t*t*n*e}function Jx(n,e){return 3*(1-n)*n*n*e}function Zx(n,e){return n*n*n*e}function Fr(n,e,t,i,s){return qx(n,e)+Kx(n,t)+Jx(n,i)+Zx(n,s)}class Qx extends wi{constructor(e=new Ce,t=new Ce,i=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ce){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Op extends wi{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Fr(e,s.x,r.x,o.x,a.x),Fr(e,s.y,r.y,o.y,a.y),Fr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class e_ extends wi{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class t_ extends wi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class n_ extends wi{constructor(e=new Ce,t=new Ce,i=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ce){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(e,s.x,r.x,o.x),Ur(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bp extends wi{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(e,s.x,r.x,o.x),Ur(e,s.y,r.y,o.y),Ur(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i_ extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(ed(a,l.x,c.x,u.x,h.x),ed(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}}var s_=Object.freeze({__proto__:null,ArcCurve:Wx,CatmullRomCurve3:Xx,CubicBezierCurve:Qx,CubicBezierCurve3:Op,EllipseCurve:Fp,LineCurve:e_,LineCurve3:t_,QuadraticBezierCurve:n_,QuadraticBezierCurve3:Bp,SplineCurve:i_});class Ra extends sn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const A=d*f-o;for(let R=0;R<c;R++){const M=R*h-r;g.push(M,-A,0),x.push(0,0,1),m.push(R/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const R=A+c*d,M=A+c*(d+1),E=A+1+c*(d+1),I=A+1+c*d;p.push(R,M,I),p.push(M,E,I)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class Au extends sn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new k,f=new k,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){const A=[],R=d/i;let M=0;d===0&&o===0?M=.5/t:d===i&&l===Math.PI&&(M=-.5/t);for(let E=0;E<=t;E++){const I=E/t;h.x=-e*Math.cos(s+I*r)*Math.sin(o+R*a),h.y=e*Math.cos(o+R*a),h.z=e*Math.sin(s+I*r)*Math.sin(o+R*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(I+M,1-R),A.push(c++)}u.push(A)}for(let d=0;d<i;d++)for(let A=0;A<t;A++){const R=u[d][A+1],M=u[d][A],E=u[d+1][A],I=u[d+1][A+1];(d!==0||o>0)&&p.push(R,M,I),(d!==i-1||l<Math.PI)&&p.push(M,E,I)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cu extends sn{constructor(e=new Bp(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new k,l=new k,c=new Ce;let u=new k;const h=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(p,2));function x(){for(let R=0;R<t;R++)m(R);m(r===!1?t:0),A(),d()}function m(R){u=e.getPointAt(R/t,u);const M=o.normals[R],E=o.binormals[R];for(let I=0;I<=s;I++){const N=I/s*Math.PI*2,H=Math.sin(N),y=-Math.cos(N);l.x=y*M.x+H*E.x,l.y=y*M.y+H*E.y,l.z=y*M.z+H*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let R=1;R<=t;R++)for(let M=1;M<=s;M++){const E=(s+1)*(R-1)+(M-1),I=(s+1)*R+(M-1),N=(s+1)*R+M,H=(s+1)*(R-1)+M;g.push(E,I,H),g.push(I,N,H)}}function A(){for(let R=0;R<=t;R++)for(let M=0;M<=s;M++)c.x=R/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Cu(new s_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class r_ extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o_ extends xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sp,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class a_ extends o_{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class l_ extends xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c_ extends xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pa extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Tl=new Tt,td=new k,nd=new k;class Ru{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wu,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;td.setFromMatrixPosition(e.matrixWorld),t.position.copy(td),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class u_ extends Ru{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ua*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class h_ extends Pa{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new u_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class d_ extends Ru{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class f_ extends Pa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new d_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Da extends Pp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class p_ extends Ru{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m_ extends Pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new p_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class g_ extends Pa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class v_ extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class x_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const id=new Tt;class __{constructor(e,t,i=0,s=1/0){this.ray=new Aa(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Su,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return id.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(id),this}intersectObject(e,t=!0,i=[]){return Wc(e,this,i,t),i.sort(sd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Wc(e[s],this,i,t);return i.sort(sd),i}}function sd(n,e){return n.distance-e.distance}function Wc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Wc(r[o],e,t,!0)}}class rd{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class y_ extends vs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ze("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function od(n,e,t,i){const s=b_(i);switch(t){case yp:return n*e;case Mp:return n*e/s.components*s.byteLength;case vu:return n*e/s.components*s.byteLength;case sr:return n*e*2/s.components*s.byteLength;case xu:return n*e*2/s.components*s.byteLength;case bp:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case _u:return n*e*4/s.components*s.byteLength;case Go:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:case dc:return Math.max(n,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(n,8)*Math.max(e,8)/2;case fc:case pc:case gc:case vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mc:case xc:case _c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Nc:case Uc:case Fc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Oc:case Bc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kc:case zc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b_(n){switch(n){case xn:case gp:return{byteLength:1,components:1};case Wr:case vp:case bn:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case ei:case pu:case Yn:return{byteLength:4,components:1};case xp:case _p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);function kp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function M_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var S_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E_=`#ifdef USE_ALPHAHASH
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
#endif`,w_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
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
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D_=`#ifdef USE_BATCHING
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
#endif`,L_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F_=`#ifdef USE_IRIDESCENCE
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
#endif`,O_=`#ifdef USE_BUMPMAP
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$_=`#define PI 3.141592653589793
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
} // validated`,j_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y_=`vec3 transformedNormal = objectNormal;
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
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",ey=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uy=`#ifdef USE_GRADIENTMAP
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
}`,hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,py=`uniform bool receiveShadow;
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
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
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
#endif`,by=`uniform sampler2D dfgLUT;
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
}`,My=`
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
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ly=`#if defined( USE_POINTS_UV )
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
#endif`,Iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
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
#endif`,ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
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
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ab=`float getShadowMask() {
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
}`,lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cb=`#ifdef USE_SKINNING
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
#endif`,ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gb=`#ifdef USE_TRANSMISSION
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
#endif`,vb=`#ifdef USE_TRANSMISSION
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sb=`uniform sampler2D t2D;
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
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`#include <common>
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
}`,Rb=`#if DEPTH_PACKING == 3200
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
}`,Pb=`#define DISTANCE
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
}`,Db=`#define DISTANCE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`uniform float scale;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Fb=`#include <common>
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
}`,Ob=`uniform vec3 diffuse;
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
}`,Bb=`#define LAMBERT
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
}`,kb=`#define LAMBERT
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
}`,zb=`#define MATCAP
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
}`,Vb=`#define MATCAP
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
}`,Hb=`#define NORMAL
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
}`,Gb=`#define NORMAL
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
}`,Wb=`#define PHONG
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
}`,Xb=`#define PHONG
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
}`,$b=`#define STANDARD
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
}`,jb=`#define STANDARD
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
}`,Yb=`#define TOON
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
}`,qb=`#define TOON
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
}`,Kb=`uniform float size;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,Zb=`#include <common>
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
}`,Qb=`uniform vec3 color;
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
}`,eM=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:S_,alphahash_pars_fragment:E_,alphamap_fragment:w_,alphamap_pars_fragment:T_,alphatest_fragment:A_,alphatest_pars_fragment:C_,aomap_fragment:R_,aomap_pars_fragment:P_,batching_pars_vertex:D_,batching_vertex:L_,begin_vertex:I_,beginnormal_vertex:N_,bsdfs:U_,iridescence_fragment:F_,bumpmap_pars_fragment:O_,clipping_planes_fragment:B_,clipping_planes_pars_fragment:k_,clipping_planes_pars_vertex:z_,clipping_planes_vertex:V_,color_fragment:H_,color_pars_fragment:G_,color_pars_vertex:W_,color_vertex:X_,common:$_,cube_uv_reflection_fragment:j_,defaultnormal_vertex:Y_,displacementmap_pars_vertex:q_,displacementmap_vertex:K_,emissivemap_fragment:J_,emissivemap_pars_fragment:Z_,colorspace_fragment:Q_,colorspace_pars_fragment:ey,envmap_fragment:ty,envmap_common_pars_fragment:ny,envmap_pars_fragment:iy,envmap_pars_vertex:sy,envmap_physical_pars_fragment:my,envmap_vertex:ry,fog_vertex:oy,fog_pars_vertex:ay,fog_fragment:ly,fog_pars_fragment:cy,gradientmap_pars_fragment:uy,lightmap_pars_fragment:hy,lights_lambert_fragment:dy,lights_lambert_pars_fragment:fy,lights_pars_begin:py,lights_toon_fragment:gy,lights_toon_pars_fragment:vy,lights_phong_fragment:xy,lights_phong_pars_fragment:_y,lights_physical_fragment:yy,lights_physical_pars_fragment:by,lights_fragment_begin:My,lights_fragment_maps:Sy,lights_fragment_end:Ey,logdepthbuf_fragment:wy,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:Ay,logdepthbuf_vertex:Cy,map_fragment:Ry,map_pars_fragment:Py,map_particle_fragment:Dy,map_particle_pars_fragment:Ly,metalnessmap_fragment:Iy,metalnessmap_pars_fragment:Ny,morphinstance_vertex:Uy,morphcolor_vertex:Fy,morphnormal_vertex:Oy,morphtarget_pars_vertex:By,morphtarget_vertex:ky,normal_fragment_begin:zy,normal_fragment_maps:Vy,normal_pars_fragment:Hy,normal_pars_vertex:Gy,normal_vertex:Wy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:jy,clearcoat_pars_fragment:Yy,iridescence_pars_fragment:qy,opaque_fragment:Ky,packing:Jy,premultiplied_alpha_fragment:Zy,project_vertex:Qy,dithering_fragment:eb,dithering_pars_fragment:tb,roughnessmap_fragment:nb,roughnessmap_pars_fragment:ib,shadowmap_pars_fragment:sb,shadowmap_pars_vertex:rb,shadowmap_vertex:ob,shadowmask_pars_fragment:ab,skinbase_vertex:lb,skinning_pars_vertex:cb,skinning_vertex:ub,skinnormal_vertex:hb,specularmap_fragment:db,specularmap_pars_fragment:fb,tonemapping_fragment:pb,tonemapping_pars_fragment:mb,transmission_fragment:gb,transmission_pars_fragment:vb,uv_pars_fragment:xb,uv_pars_vertex:_b,uv_vertex:yb,worldpos_vertex:bb,background_vert:Mb,background_frag:Sb,backgroundCube_vert:Eb,backgroundCube_frag:wb,cube_vert:Tb,cube_frag:Ab,depth_vert:Cb,depth_frag:Rb,distance_vert:Pb,distance_frag:Db,equirect_vert:Lb,equirect_frag:Ib,linedashed_vert:Nb,linedashed_frag:Ub,meshbasic_vert:Fb,meshbasic_frag:Ob,meshlambert_vert:Bb,meshlambert_frag:kb,meshmatcap_vert:zb,meshmatcap_frag:Vb,meshnormal_vert:Hb,meshnormal_frag:Gb,meshphong_vert:Wb,meshphong_frag:Xb,meshphysical_vert:$b,meshphysical_frag:jb,meshtoon_vert:Yb,meshtoon_frag:qb,points_vert:Kb,points_frag:Jb,shadow_vert:Zb,shadow_frag:Qb,sprite_vert:eM,sprite_frag:tM},Le={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Xn={basic:{uniforms:Qt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Qt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Qe(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Qt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Qt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Qt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Qe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Qt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Qt([Le.points,Le.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Qt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Qt([Le.common,Le.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Qt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Qt([Le.sprite,Le.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Qt([Le.common,Le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Qt([Le.lights,Le.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Xn.physical={uniforms:Qt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Lo={r:0,b:0,g:0},ns=new ti,nM=new Tt;function iM(n,e,t,i,s,r,o){const a=new Qe(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(R){let M=R.isScene===!0?R.background:null;return M&&M.isTexture&&(M=(R.backgroundBlurriness>0?t:e).get(M)),M}function x(R){let M=!1;const E=g(R);E===null?d(a,l):E&&E.isColor&&(d(E,1),M=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(R,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===wa)?(u===void 0&&(u=new Sn(new Jr(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:or(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,N,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ns.copy(M.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(ns)),u.material.toneMapped=ct.getTransfer(E.colorSpace)!==gt,(h!==E||f!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,p=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Sn(new Ra(2,2),new Yt({name:"BackgroundMaterial",uniforms:or(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ct.getTransfer(E.colorSpace)!==gt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,p=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function d(R,M){R.getRGB(Lo,Rp(n)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,M,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,M=1){a.set(R),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,d(a,l)},render:x,addToRenderList:m,dispose:A}}function sM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(w,U,F,z,Q){let te=!1;const K=h(z,F,U);r!==K&&(r=K,c(r.object)),te=p(w,z,F,Q),te&&g(w,z,F,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,M(w,U,F,z),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function h(w,U,F){const z=F.wireframe===!0;let Q=i[w.id];Q===void 0&&(Q={},i[w.id]=Q);let te=Q[U.id];te===void 0&&(te={},Q[U.id]=te);let K=te[z];return K===void 0&&(K=f(l()),te[z]=K),K}function f(w){const U=[],F=[],z=[];for(let Q=0;Q<t;Q++)U[Q]=0,F[Q]=0,z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:z,object:w,attributes:{},index:null}}function p(w,U,F,z){const Q=r.attributes,te=U.attributes;let K=0;const X=F.getAttributes();for(const W in X)if(X[W].location>=0){const be=Q[W];let Se=te[W];if(Se===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor)),be===void 0||be.attribute!==Se||Se&&be.data!==Se.data)return!0;K++}return r.attributesNum!==K||r.index!==z}function g(w,U,F,z){const Q={},te=U.attributes;let K=0;const X=F.getAttributes();for(const W in X)if(X[W].location>=0){let be=te[W];be===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(be=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(be=w.instanceColor));const Se={};Se.attribute=be,be&&be.data&&(Se.data=be.data),Q[W]=Se,K++}r.attributes=Q,r.attributesNum=K,r.index=z}function x(){const w=r.newAttributes;for(let U=0,F=w.length;U<F;U++)w[U]=0}function m(w){d(w,0)}function d(w,U){const F=r.newAttributes,z=r.enabledAttributes,Q=r.attributeDivisors;F[w]=1,z[w]===0&&(n.enableVertexAttribArray(w),z[w]=1),Q[w]!==U&&(n.vertexAttribDivisor(w,U),Q[w]=U)}function A(){const w=r.newAttributes,U=r.enabledAttributes;for(let F=0,z=U.length;F<z;F++)U[F]!==w[F]&&(n.disableVertexAttribArray(F),U[F]=0)}function R(w,U,F,z,Q,te,K){K===!0?n.vertexAttribIPointer(w,U,F,Q,te):n.vertexAttribPointer(w,U,F,z,Q,te)}function M(w,U,F,z){x();const Q=z.attributes,te=F.getAttributes(),K=U.defaultAttributeValues;for(const X in te){const W=te[X];if(W.location>=0){let ge=Q[X];if(ge===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),ge!==void 0){const be=ge.normalized,Se=ge.itemSize,de=e.get(ge);if(de===void 0)continue;const Te=de.buffer,Ge=de.type,qe=de.bytesPerElement,ie=Ge===n.INT||Ge===n.UNSIGNED_INT||ge.gpuType===pu;if(ge.isInterleavedBufferAttribute){const ue=ge.data,Ee=ue.stride,pe=ge.offset;if(ue.isInstancedInterleavedBuffer){for(let ne=0;ne<W.locationSize;ne++)d(W.location+ne,ue.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ne=0;ne<W.locationSize;ne++)m(W.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let ne=0;ne<W.locationSize;ne++)R(W.location+ne,Se/W.locationSize,Ge,be,Ee*qe,(pe+Se/W.locationSize*ne)*qe,ie)}else{if(ge.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)d(W.location+ue,ge.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ue=0;ue<W.locationSize;ue++)m(W.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let ue=0;ue<W.locationSize;ue++)R(W.location+ue,Se/W.locationSize,Ge,be,Se*qe,Se/W.locationSize*ue*qe,ie)}}else if(K!==void 0){const be=K[X];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(W.location,be);break;case 3:n.vertexAttrib3fv(W.location,be);break;case 4:n.vertexAttrib4fv(W.location,be);break;default:n.vertexAttrib1fv(W.location,be)}}}}A()}function E(){H();for(const w in i){const U=i[w];for(const F in U){const z=U[F];for(const Q in z)u(z[Q].object),delete z[Q];delete U[F]}delete i[w]}}function I(w){if(i[w.id]===void 0)return;const U=i[w.id];for(const F in U){const z=U[F];for(const Q in z)u(z[Q].object),delete z[Q];delete U[F]}delete i[w.id]}function N(w){for(const U in i){const F=i[U];if(F[w.id]===void 0)continue;const z=F[w.id];for(const Q in z)u(z[Q].object),delete z[Q];delete F[w.id]}}function H(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function rM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Un&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const H=N===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==xn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Yn&&!H)}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:M,maxSamples:E,samples:I}}function aM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new fi,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,R=A*4;let M=d.clippingState||null;l.value=M,M=u(g,f,R,p);for(let E=0;E!==R;++E)M[E]=t[E];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let R=0,M=p;R!==x;++R,M+=4)o.copy(h[R]).applyMatrix4(A,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function lM(n){let e=new WeakMap;function t(o,a){return a===rc?o.mapping=fs:a===oc&&(o.mapping=ir),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===rc||a===oc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ki=4,ad=[.125,.215,.35,.446,.526,.582],as=20,cM=256,yr=new Da,ld=new Qe;let Al=null,Cl=0,Rl=0,Pl=!1;const uM=new k;class cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=uM}=r;Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Al,Cl,Rl),this._renderer.xr.enabled=Pl,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:bn,format:Un,colorSpace:rr,depthBuffer:!1},s=ud(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hM(r)),this._blurMaterial=fM(r,e,t),this._ggxMaterial=dM(r,e,t)}return s}_compileMaterial(e){const t=new Sn(new sn,e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,i,s,r){const l=new cn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(ld),h.toneMapping=Qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new Jr,new Ca({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let d=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,d=!0):(m.color.copy(ld),d=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));const E=this._cubeSize;ks(s,M*E,R>2?E:0,E,E),h.setRenderTarget(s),d&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===fs||e.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ks(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,yr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-ki?i-g+ki:0),d=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,ks(r,m,d,3*x,2*x),s.setRenderTarget(r),s.render(a,yr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ks(e,m,d,3*x,2*x),s.setRenderTarget(e),s.render(a,yr)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*as-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):as;m>as&&Ze(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const d=[];let A=0;for(let N=0;N<as;++N){const H=N/x,y=Math.exp(-H*H/2);d.push(y),N===0?A+=y:N<m&&(A+=2*y)}for(let N=0;N<d.length;N++)d[N]=d[N]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:R}=this;f.dTheta.value=g,f.mipInt.value=R-i;const M=this._sizeLods[s],E=3*M*(s>R-ki?s-R+ki:0),I=4*(this._cubeSize-M);ks(t,E,I,3*M,2*M),l.setRenderTarget(t),l.render(h,yr)}}function hM(n){const e=[],t=[],i=[];let s=n;const r=n-ki+1+ad.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ki?l=ad[o-n+ki-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,A=new Float32Array(x*g*p),R=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let I=0;I<p;I++){const N=I%3*2/3-1,H=I>2?0:-1,y=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];A.set(y,x*g*I),R.set(f,m*g*I);const w=[I,I,I,I,I,I];M.set(w,d*g*I)}const E=new sn;E.setAttribute("position",new Mn(A,x)),E.setAttribute("uv",new Mn(R,m)),E.setAttribute("faceIndex",new Mn(M,d)),i.push(new Sn(E,null)),s>ki&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ud(n,e,t){const i=new hn(n,e,t);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function dM(n,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:La(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function fM(n,e,t){const i=new Float32Array(as),s=new k(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:La(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function hd(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function dd(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function La(){return`

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
	`}function pM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===rc||l===oc,u=l===fs||l===ir;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new cd(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new cd(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function mM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&$r("WebGLRenderer: "+i+" extension not supported."),s}}}function gM(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let R=0,M=A.length;R<M;R+=3){const E=A[R+0],I=A[R+1],N=A[R+2];f.push(E,I,I,N,N,E)}}else if(g!==void 0){const A=g.array;x=g.version;for(let R=0,M=A.length/3-1;R<M;R+=3){const E=R+0,I=R+1,N=R+2;f.push(E,I,I,N,N,E)}}else return;const m=new(Ep(f)?Cp:Ap)(f,1);m.version=x;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function vM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*x[A];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _M(n,e,t){const i=new WeakMap,s=new Pt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let w=function(){H.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var p=w;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let E=a.attributes.position.count*M,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const N=new Float32Array(E*I*4*h),H=new wp(N,E,I,h);H.type=Yn,H.needsUpdate=!0;const y=M*4;for(let U=0;U<h;U++){const F=d[U],z=A[U],Q=R[U],te=E*I*4*U;for(let K=0;K<F.count;K++){const X=K*y;g===!0&&(s.fromBufferAttribute(F,K),N[te+X+0]=s.x,N[te+X+1]=s.y,N[te+X+2]=s.z,N[te+X+3]=0),x===!0&&(s.fromBufferAttribute(z,K),N[te+X+4]=s.x,N[te+X+5]=s.y,N[te+X+6]=s.z,N[te+X+7]=0),m===!0&&(s.fromBufferAttribute(Q,K),N[te+X+8]=s.x,N[te+X+9]=s.y,N[te+X+10]=s.z,N[te+X+11]=Q.itemSize===4?s.w:1)}}f={count:h,texture:H,size:new Ce(E,I)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function yM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const bM={[lp]:"LINEAR_TONE_MAPPING",[cp]:"REINHARD_TONE_MAPPING",[up]:"CINEON_TONE_MAPPING",[hp]:"ACES_FILMIC_TONE_MAPPING",[fp]:"AGX_TONE_MAPPING",[pp]:"NEUTRAL_TONE_MAPPING",[dp]:"CUSTOM_TONE_MAPPING"};function MM(n,e,t,i,s){const r=new hn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new hn(e,t,{type:bn,depthBuffer:!1,stencilBuffer:!1}),a=new sn;a.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const l=new r_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Sn(a,l),u=new Da(-1,1,1,-1,0,1);let h=null,f=null,p=!1,g,x=null,m=[],d=!1;this.setSize=function(A,R){r.setSize(A,R),o.setSize(A,R);for(let M=0;M<m.length;M++){const E=m[M];E.setSize&&E.setSize(A,R)}},this.setEffects=function(A){m=A,d=m.length>0&&m[0].isRenderPass===!0;const R=r.width,M=r.height;for(let E=0;E<m.length;E++){const I=m[E];I.setSize&&I.setSize(R,M)}},this.begin=function(A,R){if(p||A.toneMapping===Qn&&m.length===0)return!1;if(x=R,R!==null){const M=R.width,E=R.height;(r.width!==M||r.height!==E)&&this.setSize(M,E)}return d===!1&&A.setRenderTarget(r),g=A.toneMapping,A.toneMapping=Qn,!0},this.hasRenderPass=function(){return d},this.end=function(A,R){A.toneMapping=g,p=!0;let M=r,E=o;for(let I=0;I<m.length;I++){const N=m[I];if(N.enabled!==!1&&(N.render(A,E,M,R),N.needsSwap!==!1)){const H=M;M=E,E=H}}if(h!==A.outputColorSpace||f!==A.toneMapping){h=A.outputColorSpace,f=A.toneMapping,l.defines={},ct.getTransfer(h)===gt&&(l.defines.SRGB_TRANSFER="");const I=bM[f];I&&(l.defines[I]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,A.setRenderTarget(x),A.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const zp=new qt,Xc=new jr(1,1),Vp=new wp,Hp=new _x,Gp=new Dp,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),vd=new Float32Array(4);function lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ia(n,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function SM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function AM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;vd.set(i),n.uniformMatrix2fv(this.addr,!1,vd),kt(t,i)}}function CM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;gd.set(i),n.uniformMatrix3fv(this.addr,!1,gd),kt(t,i)}}function RM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;md.set(i),n.uniformMatrix4fv(this.addr,!1,md),kt(t,i)}}function PM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function NM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function BM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xc.compareFunction=t.isReversedDepthBuffer()?bu:yu,r=Xc):r=zp,t.setTexture2D(e||r,s)}function kM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hp,s)}function zM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Gp,s)}function VM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Vp,s)}function HM(n){switch(n){case 5126:return SM;case 35664:return EM;case 35665:return wM;case 35666:return TM;case 35674:return AM;case 35675:return CM;case 35676:return RM;case 5124:case 35670:return PM;case 35667:case 35671:return DM;case 35668:case 35672:return LM;case 35669:case 35673:return IM;case 5125:return NM;case 36294:return UM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return VM}}function GM(n,e){n.uniform1fv(this.addr,e)}function WM(n,e){const t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function XM(n,e){const t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function $M(n,e){const t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function jM(n,e){const t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YM(n,e){const t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qM(n,e){const t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KM(n,e){n.uniform1iv(this.addr,e)}function JM(n,e){n.uniform2iv(this.addr,e)}function ZM(n,e){n.uniform3iv(this.addr,e)}function QM(n,e){n.uniform4iv(this.addr,e)}function eS(n,e){n.uniform1uiv(this.addr,e)}function tS(n,e){n.uniform2uiv(this.addr,e)}function nS(n,e){n.uniform3uiv(this.addr,e)}function iS(n,e){n.uniform4uiv(this.addr,e)}function sS(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Xc:o=zp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function rS(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hp,r[o])}function oS(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gp,r[o])}function aS(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Vp,r[o])}function lS(n){switch(n){case 5126:return GM;case 35664:return WM;case 35665:return XM;case 35666:return $M;case 35674:return jM;case 35675:return YM;case 35676:return qM;case 5124:case 35670:return KM;case 35667:case 35671:return JM;case 35668:case 35672:return ZM;case 35669:case 35673:return QM;case 5125:return eS;case 36294:return tS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return sS;case 35679:case 36299:case 36307:return rS;case 35680:case 36300:case 36308:case 36293:return oS;case 36289:case 36303:case 36311:case 36292:return aS}}class cS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HM(t.type)}}class uS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lS(t.type)}}class hS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function xd(n,e){n.seq.push(e),n.map[e.id]=e}function dS(n,e,t){const i=n.name,s=i.length;for(Dl.lastIndex=0;;){const r=Dl.exec(i),o=Dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xd(t,c===void 0?new cS(a,n,e):new uS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new hS(a),xd(t,h)),t=h}}}class Yo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);dS(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function _d(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const fS=37297;let pS=0;function mS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const yd=new st;function gS(n){ct._getMatrix(yd,ct.workingColorSpace,n);const e=`mat3( ${yd.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case oa:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+mS(n.getShaderSource(e),a)}else return r}function vS(n,e){const t=gS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const xS={[lp]:"Linear",[cp]:"Reinhard",[up]:"Cineon",[hp]:"ACESFilmic",[fp]:"AgX",[pp]:"Neutral",[dp]:"Custom"};function _S(n,e){const t=xS[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Io=new k;function yS(){ct.getLuminanceCoefficients(Io);const n=Io.x.toFixed(4),e=Io.y.toFixed(4),t=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function MS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function SS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wr(n){return n!==""}function Md(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ES=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(n){return n.replace(ES,TS)}const wS=new Map;function TS(n,e){let t=rt[e];if(t===void 0){const i=wS.get(e);if(i!==void 0)t=rt[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $c(t)}const AS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(n){return n.replace(AS,CS)}function CS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const RS={[Ho]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function PS(n){return RS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const DS={[fs]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE",[wa]:"ENVMAP_TYPE_CUBE_UV"};function LS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":DS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const IS={[ir]:"ENVMAP_MODE_REFRACTION"};function NS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":IS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const US={[ap]:"ENVMAP_BLENDING_MULTIPLY",[Qv]:"ENVMAP_BLENDING_MIX",[ex]:"ENVMAP_BLENDING_ADD"};function FS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":US[n.combine]||"ENVMAP_BLENDING_NONE"}function OS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function BS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=PS(t),c=LS(t),u=NS(t),h=FS(t),f=OS(t),p=bS(t),g=MS(r),x=s.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),d.length>0&&(d+=`
`)):(m=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),d=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Qn?_S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,vS("linearToOutputTexel",t.outputColorSpace),yS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=$c(o),o=Md(o,t),o=Sd(o,t),a=$c(a),a=Md(a,t),a=Sd(a,t),o=Ed(o),a=Ed(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=A+m+o,M=A+d+a,E=_d(s,s.VERTEX_SHADER,R),I=_d(s,s.FRAGMENT_SHADER,M);s.attachShader(x,E),s.attachShader(x,I),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function N(U){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(E)||"",Q=s.getShaderInfoLog(I)||"",te=F.trim(),K=z.trim(),X=Q.trim();let W=!0,ge=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,E,I);else{const be=bd(s,E,"vertex"),Se=bd(s,I,"fragment");lt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+te+`
`+be+`
`+Se)}else te!==""?Ze("WebGLProgram: Program Info Log:",te):(K===""||X==="")&&(ge=!1);ge&&(U.diagnostics={runnable:W,programLog:te,vertexShader:{log:K,prefix:m},fragmentShader:{log:X,prefix:d}})}s.deleteShader(E),s.deleteShader(I),H=new Yo(s,x),y=SS(s,x)}let H;this.getUniforms=function(){return H===void 0&&N(this),H};let y;this.getAttributes=function(){return y===void 0&&N(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,fS)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=I,this}let kS=0;class zS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new VS(e),t.set(e,i)),i}}class VS{constructor(e){this.id=kS++,this.code=e,this.usedTimes=0}}function HS(n,e,t,i,s,r,o){const a=new Su,l=new zS,c=new Set,u=[],h=new Map,f=s.logarithmicDepthBuffer;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,w,U,F,z){const Q=F.fog,te=z.geometry,K=y.isMeshStandardMaterial?F.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),W=X&&X.mapping===wa?X.image.height:null,ge=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&Ze("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const be=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Se=be!==void 0?be.length:0;let de=0;te.morphAttributes.position!==void 0&&(de=1),te.morphAttributes.normal!==void 0&&(de=2),te.morphAttributes.color!==void 0&&(de=3);let Te,Ge,qe,ie;if(ge){const pt=Xn[ge];Te=pt.vertexShader,Ge=pt.fragmentShader}else Te=y.vertexShader,Ge=y.fragmentShader,l.update(y),qe=l.getVertexShaderID(y),ie=l.getFragmentShaderID(y);const ue=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),pe=z.isInstancedMesh===!0,ne=z.isBatchedMesh===!0,xe=!!y.map,C=!!y.matcap,D=!!X,L=!!y.aoMap,V=!!y.lightMap,j=!!y.bumpMap,ee=!!y.normalMap,P=!!y.displacementMap,fe=!!y.emissiveMap,oe=!!y.metalnessMap,Z=!!y.roughnessMap,le=y.anisotropy>0,b=y.clearcoat>0,v=y.dispersion>0,O=y.iridescence>0,J=y.sheen>0,ae=y.transmission>0,q=le&&!!y.anisotropyMap,Ie=b&&!!y.clearcoatMap,_e=b&&!!y.clearcoatNormalMap,Fe=b&&!!y.clearcoatRoughnessMap,We=O&&!!y.iridescenceMap,ve=O&&!!y.iridescenceThicknessMap,Ae=J&&!!y.sheenColorMap,Pe=J&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,we=!!y.specularColorMap,it=!!y.specularIntensityMap,G=ae&&!!y.transmissionMap,Ue=ae&&!!y.thicknessMap,Me=!!y.gradientMap,Be=!!y.alphaMap,ye=y.alphaTest>0,me=!!y.alphaHash,Re=!!y.extensions;let et=Qn;y.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(et=n.toneMapping);const St={shaderID:ge,shaderType:y.type,shaderName:y.name,vertexShader:Te,fragmentShader:Ge,defines:y.defines,customVertexShaderID:qe,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ne,batchingColor:ne&&z._colorsTexture!==null,instancing:pe,instancingColor:pe&&z.instanceColor!==null,instancingMorph:pe&&z.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:rr,alphaToCoverage:!!y.alphaToCoverage,map:xe,matcap:C,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:V,bumpMap:j,normalMap:ee,displacementMap:P,emissiveMap:fe,normalMapObjectSpace:ee&&y.normalMapType===ix,normalMapTangentSpace:ee&&y.normalMapType===Sp,metalnessMap:oe,roughnessMap:Z,anisotropy:le,anisotropyMap:q,clearcoat:b,clearcoatMap:Ie,clearcoatNormalMap:_e,clearcoatRoughnessMap:Fe,dispersion:v,iridescence:O,iridescenceMap:We,iridescenceThicknessMap:ve,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:Pe,specularMap:Oe,specularColorMap:we,specularIntensityMap:it,transmission:ae,transmissionMap:G,thicknessMap:Ue,gradientMap:Me,opaque:y.transparent===!1&&y.blending===Js&&y.alphaToCoverage===!1,alphaMap:Be,alphaTest:ye,alphaHash:me,combine:y.combine,mapUv:xe&&x(y.map.channel),aoMapUv:L&&x(y.aoMap.channel),lightMapUv:V&&x(y.lightMap.channel),bumpMapUv:j&&x(y.bumpMap.channel),normalMapUv:ee&&x(y.normalMap.channel),displacementMapUv:P&&x(y.displacementMap.channel),emissiveMapUv:fe&&x(y.emissiveMap.channel),metalnessMapUv:oe&&x(y.metalnessMap.channel),roughnessMapUv:Z&&x(y.roughnessMap.channel),anisotropyMapUv:q&&x(y.anisotropyMap.channel),clearcoatMapUv:Ie&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:_e&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(y.sheenRoughnessMap.channel),specularMapUv:Oe&&x(y.specularMap.channel),specularColorMapUv:we&&x(y.specularColorMap.channel),specularIntensityMapUv:it&&x(y.specularIntensityMap.channel),transmissionMapUv:G&&x(y.transmissionMap.channel),thicknessMapUv:Ue&&x(y.thicknessMap.channel),alphaMapUv:Be&&x(y.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(ee||le),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(xe||Be),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:de,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:xe&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:fe&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$n,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function d(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)w.push(U),w.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(A(w,y),R(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function A(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function R(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const w=g[y.type];let U;if(w){const F=Xn[w];U=ha.clone(F.uniforms)}else U=y.uniforms;return U}function E(y,w){let U=h.get(w);return U!==void 0?++U.usedTimes:(U=new BS(n,w,y,r),u.push(U),h.set(w,U)),U}function I(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function N(y){l.remove(y)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:E,releaseProgram:I,releaseShaderCache:N,programs:u,dispose:H}}function GS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function WS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Td(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ad(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,p,g,x,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,g,x,m){const d=o(h,f,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,x,m){const d=o(h,f,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||WS),i.length>1&&i.sort(f||Td),s.length>1&&s.sort(f||Td)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function XS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ad,n.set(i,[o])):s>=r.length?(o=new Ad,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function $S(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Qe};break;case"SpotLight":t={position:new k,direction:new k,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function jS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let YS=0;function qS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KS(n){const e=new $S,t=jS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new Tt,o=new Tt;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,A=0,R=0,M=0,E=0,I=0,N=0;c.sort(qS);for(let y=0,w=c.length;y<w;y++){const U=c[y],F=U.color,z=U.intensity,Q=U.distance;let te=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===sr?te=U.shadow.map.texture:te=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=F.r*z,h+=F.g*z,f+=F.b*z;else if(U.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(U.sh.coefficients[K],z);N++}else if(U.isDirectionalLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const X=U.shadow,W=t.get(U);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=U.shadow.matrix,A++}i.directional[p]=K,p++}else if(U.isSpotLight){const K=e.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(F).multiplyScalar(z),K.distance=Q,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,i.spot[x]=K;const X=U.shadow;if(U.map&&(i.spotLightMap[E]=U.map,E++,X.updateMatrices(U),U.castShadow&&I++),i.spotLightMatrix[x]=X.matrix,U.castShadow){const W=t.get(U);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=te,M++}x++}else if(U.isRectAreaLight){const K=e.get(U);K.color.copy(F).multiplyScalar(z),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=K,m++}else if(U.isPointLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),K.distance=U.distance,K.decay=U.decay,U.castShadow){const X=U.shadow,W=t.get(U);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=U.shadow.matrix,R++}i.point[g]=K,g++}else if(U.isHemisphereLight){const K=e.get(U);K.skyColor.copy(U.color).multiplyScalar(z),K.groundColor.copy(U.groundColor).multiplyScalar(z),i.hemi[d]=K,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const H=i.hash;(H.directionalLength!==p||H.pointLength!==g||H.spotLength!==x||H.rectAreaLength!==m||H.hemiLength!==d||H.numDirectionalShadows!==A||H.numPointShadows!==R||H.numSpotShadows!==M||H.numSpotMaps!==E||H.numLightProbes!==N)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=M+E-I,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=N,H.directionalLength=p,H.pointLength=g,H.spotLength=x,H.rectAreaLength=m,H.hemiLength=d,H.numDirectionalShadows=A,H.numPointShadows=R,H.numSpotShadows=M,H.numSpotMaps=E,H.numLightProbes=N,i.version=YS++)}function l(c,u){let h=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const R=c[d];if(R.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(R.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(R.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(R.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(R.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),f++}else if(R.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Cd(n){const e=new KS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function JS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Cd(n),e.set(s,[a])):r>=o.length?(a=new Cd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const ZS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QS=`uniform sampler2D shadow_pass;
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
}`,e1=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],t1=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Rd=new Tt,br=new k,Ll=new k;function n1(n,e,t){let i=new wu;const s=new Ce,r=new Ce,o=new Pt,a=new l_,l=new c_,c={},u=t.maxTextureSize,h={[Gi]:un,[un]:Gi,[$n]:$n},f=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:ZS,fragmentShader:QS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Sn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let d=this.type;this.render=function(I,N,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;I.type===op&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Ho);const y=n.getRenderTarget(),w=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Zn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=d!==this.type;z&&N.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(te=>te.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,te=I.length;Q<te;Q++){const K=I[Q],X=K.shadow;if(X===void 0){Ze("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const W=X.getFrameExtents();if(s.multiply(W),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Er){if(K.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new hn(s.x,s.y,{format:sr,type:bn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),X.map.texture.name=K.name+".shadowMap",X.map.depthTexture=new jr(s.x,s.y,Yn),X.map.depthTexture.name=K.name+".shadowMapDepth",X.map.depthTexture.format=Si,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ht,X.map.depthTexture.magFilter=Ht}else{K.isPointLight?(X.map=new Lp(s.x),X.map.depthTexture=new Gx(s.x,ei)):(X.map=new hn(s.x,s.y),X.map.depthTexture=new jr(s.x,s.y,ei)),X.map.depthTexture.name=K.name+".shadowMap",X.map.depthTexture.format=Si;const be=n.state.buffers.depth.getReversed();this.type===Ho?(X.map.depthTexture.compareFunction=be?bu:yu,X.map.depthTexture.minFilter=Vt,X.map.depthTexture.magFilter=Vt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ht,X.map.depthTexture.magFilter=Ht)}X.camera.updateProjectionMatrix()}const ge=X.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<ge;be++){if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,be),n.clear();else{be===0&&(n.setRenderTarget(X.map),n.clear());const Se=X.getViewport(be);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),F.viewport(o)}if(K.isPointLight){const Se=X.camera,de=X.matrix,Te=K.distance||Se.far;Te!==Se.far&&(Se.far=Te,Se.updateProjectionMatrix()),br.setFromMatrixPosition(K.matrixWorld),Se.position.copy(br),Ll.copy(Se.position),Ll.add(e1[be]),Se.up.copy(t1[be]),Se.lookAt(Ll),Se.updateMatrixWorld(),de.makeTranslation(-br.x,-br.y,-br.z),Rd.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Rd,Se.coordinateSystem,Se.reversedDepth)}else X.updateMatrices(K);i=X.getFrustum(),M(N,H,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===Er&&A(X,H),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,w,U)};function A(I,N){const H=e.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new hn(s.x,s.y,{format:sr,type:bn})),f.uniforms.shadow_pass.value=I.map.depthTexture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(N,null,H,f,x,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(N,null,H,p,x,null)}function R(I,N,H,y){let w=null;const U=H.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)w=U;else if(w=H.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const F=w.uuid,z=N.uuid;let Q=c[F];Q===void 0&&(Q={},c[F]=Q);let te=Q[z];te===void 0&&(te=w.clone(),Q[z]=te,N.addEventListener("dispose",E)),w=te}if(w.visible=N.visible,w.wireframe=N.wireframe,y===Er?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:h[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,H.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=n.properties.get(w);F.light=H}return w}function M(I,N,H,y,w){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Er)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,I.matrixWorld);const z=e.update(I),Q=I.material;if(Array.isArray(Q)){const te=z.groups;for(let K=0,X=te.length;K<X;K++){const W=te[K],ge=Q[W.materialIndex];if(ge&&ge.visible){const be=R(I,ge,y,w);I.onBeforeShadow(n,I,N,H,z,be,W),n.renderBufferDirect(H,null,z,be,I,W),I.onAfterShadow(n,I,N,H,z,be,W)}}}else if(Q.visible){const te=R(I,Q,y,w);I.onBeforeShadow(n,I,N,H,z,te,null),n.renderBufferDirect(H,null,z,te,I,null),I.onAfterShadow(n,I,N,H,z,te,null)}}const F=I.children;for(let z=0,Q=F.length;z<Q;z++)M(F[z],N,H,y,w)}function E(I){I.target.removeEventListener("dispose",E);for(const H in c){const y=c[H],w=I.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}const i1={[Zl]:Ql,[ec]:ic,[tc]:sc,[nr]:nc,[Ql]:Zl,[ic]:ec,[sc]:tc,[nc]:nr};function s1(n,e){function t(){let G=!1;const Ue=new Pt;let Me=null;const Be=new Pt(0,0,0,0);return{setMask:function(ye){Me!==ye&&!G&&(n.colorMask(ye,ye,ye,ye),Me=ye)},setLocked:function(ye){G=ye},setClear:function(ye,me,Re,et,St){St===!0&&(ye*=et,me*=et,Re*=et),Ue.set(ye,me,Re,et),Be.equals(Ue)===!1&&(n.clearColor(ye,me,Re,et),Be.copy(Ue))},reset:function(){G=!1,Me=null,Be.set(-1,0,0,0)}}}function i(){let G=!1,Ue=!1,Me=null,Be=null,ye=null;return{setReversed:function(me){if(Ue!==me){const Re=e.get("EXT_clip_control");me?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Ue=me;const et=ye;ye=null,this.setClear(et)}},getReversed:function(){return Ue},setTest:function(me){me?ue(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(me){Me!==me&&!G&&(n.depthMask(me),Me=me)},setFunc:function(me){if(Ue&&(me=i1[me]),Be!==me){switch(me){case Zl:n.depthFunc(n.NEVER);break;case Ql:n.depthFunc(n.ALWAYS);break;case ec:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case tc:n.depthFunc(n.EQUAL);break;case nc:n.depthFunc(n.GEQUAL);break;case ic:n.depthFunc(n.GREATER);break;case sc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Be=me}},setLocked:function(me){G=me},setClear:function(me){ye!==me&&(Ue&&(me=1-me),n.clearDepth(me),ye=me)},reset:function(){G=!1,Me=null,Be=null,ye=null,Ue=!1}}}function s(){let G=!1,Ue=null,Me=null,Be=null,ye=null,me=null,Re=null,et=null,St=null;return{setTest:function(pt){G||(pt?ue(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(pt){Ue!==pt&&!G&&(n.stencilMask(pt),Ue=pt)},setFunc:function(pt,zn,ii){(Me!==pt||Be!==zn||ye!==ii)&&(n.stencilFunc(pt,zn,ii),Me=pt,Be=zn,ye=ii)},setOp:function(pt,zn,ii){(me!==pt||Re!==zn||et!==ii)&&(n.stencilOp(pt,zn,ii),me=pt,Re=zn,et=ii)},setLocked:function(pt){G=pt},setClear:function(pt){St!==pt&&(n.clearStencil(pt),St=pt)},reset:function(){G=!1,Ue=null,Me=null,Be=null,ye=null,me=null,Re=null,et=null,St=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,R=null,M=null,E=null,I=null,N=new Qe(0,0,0),H=0,y=!1,w=null,U=null,F=null,z=null,Q=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,X=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=X>=2);let ge=null,be={};const Se=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Te=new Pt().fromArray(Se),Ge=new Pt().fromArray(de);function qe(G,Ue,Me,Be){const ye=new Uint8Array(4),me=n.createTexture();n.bindTexture(G,me),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<Me;Re++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ue,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(Ue+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return me}const ie={};ie[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(nr),j(!1),ee(Th),ue(n.CULL_FACE),L(Zn);function ue(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Ee(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function pe(G,Ue){return h[G]!==Ue?(n.bindFramebuffer(G,Ue),h[G]=Ue,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ue),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ue),!0):!1}function ne(G,Ue){let Me=p,Be=!1;if(G){Me=f.get(Ue),Me===void 0&&(Me=[],f.set(Ue,Me));const ye=G.textures;if(Me.length!==ye.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Re=ye.length;me<Re;me++)Me[me]=n.COLOR_ATTACHMENT0+me;Me.length=ye.length,Be=!0}}else Me[0]!==n.BACK&&(Me[0]=n.BACK,Be=!0);Be&&n.drawBuffers(Me)}function xe(G){return g!==G?(n.useProgram(G),g=G,!0):!1}const C={[os]:n.FUNC_ADD,[Fv]:n.FUNC_SUBTRACT,[Ov]:n.FUNC_REVERSE_SUBTRACT};C[Bv]=n.MIN,C[kv]=n.MAX;const D={[zv]:n.ZERO,[Vv]:n.ONE,[Hv]:n.SRC_COLOR,[Kl]:n.SRC_ALPHA,[Yv]:n.SRC_ALPHA_SATURATE,[$v]:n.DST_COLOR,[Wv]:n.DST_ALPHA,[Gv]:n.ONE_MINUS_SRC_COLOR,[Jl]:n.ONE_MINUS_SRC_ALPHA,[jv]:n.ONE_MINUS_DST_COLOR,[Xv]:n.ONE_MINUS_DST_ALPHA,[qv]:n.CONSTANT_COLOR,[Kv]:n.ONE_MINUS_CONSTANT_COLOR,[Jv]:n.CONSTANT_ALPHA,[Zv]:n.ONE_MINUS_CONSTANT_ALPHA};function L(G,Ue,Me,Be,ye,me,Re,et,St,pt){if(G===Zn){x===!0&&(Ee(n.BLEND),x=!1);return}if(x===!1&&(ue(n.BLEND),x=!0),G!==Uv){if(G!==m||pt!==y){if((d!==os||M!==os)&&(n.blendEquation(n.FUNC_ADD),d=os,M=os),pt)switch(G){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFunc(n.ONE,n.ONE);break;case Ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ch:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",G);break}else switch(G){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ah:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ch:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",G);break}A=null,R=null,E=null,I=null,N.set(0,0,0),H=0,m=G,y=pt}return}ye=ye||Ue,me=me||Me,Re=Re||Be,(Ue!==d||ye!==M)&&(n.blendEquationSeparate(C[Ue],C[ye]),d=Ue,M=ye),(Me!==A||Be!==R||me!==E||Re!==I)&&(n.blendFuncSeparate(D[Me],D[Be],D[me],D[Re]),A=Me,R=Be,E=me,I=Re),(et.equals(N)===!1||St!==H)&&(n.blendColor(et.r,et.g,et.b,St),N.copy(et),H=St),m=G,y=!1}function V(G,Ue){G.side===$n?Ee(n.CULL_FACE):ue(n.CULL_FACE);let Me=G.side===un;Ue&&(Me=!Me),j(Me),G.blending===Js&&G.transparent===!1?L(Zn):L(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const Be=G.stencilWrite;a.setTest(Be),Be&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),fe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(G){w!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),w=G)}function ee(G){G!==Iv?(ue(n.CULL_FACE),G!==U&&(G===Th?n.cullFace(n.BACK):G===Nv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),U=G}function P(G){G!==F&&(K&&n.lineWidth(G),F=G)}function fe(G,Ue,Me){G?(ue(n.POLYGON_OFFSET_FILL),(z!==Ue||Q!==Me)&&(n.polygonOffset(Ue,Me),z=Ue,Q=Me)):Ee(n.POLYGON_OFFSET_FILL)}function oe(G){G?ue(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function Z(G){G===void 0&&(G=n.TEXTURE0+te-1),ge!==G&&(n.activeTexture(G),ge=G)}function le(G,Ue,Me){Me===void 0&&(ge===null?Me=n.TEXTURE0+te-1:Me=ge);let Be=be[Me];Be===void 0&&(Be={type:void 0,texture:void 0},be[Me]=Be),(Be.type!==G||Be.texture!==Ue)&&(ge!==Me&&(n.activeTexture(Me),ge=Me),n.bindTexture(G,Ue||ie[G]),Be.type=G,Be.texture=Ue)}function b(){const G=be[ge];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(G){lt("WebGLState:",G)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(G){lt("WebGLState:",G)}}function J(){try{n.texSubImage2D(...arguments)}catch(G){lt("WebGLState:",G)}}function ae(){try{n.texSubImage3D(...arguments)}catch(G){lt("WebGLState:",G)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(G){lt("WebGLState:",G)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(G){lt("WebGLState:",G)}}function _e(){try{n.texStorage2D(...arguments)}catch(G){lt("WebGLState:",G)}}function Fe(){try{n.texStorage3D(...arguments)}catch(G){lt("WebGLState:",G)}}function We(){try{n.texImage2D(...arguments)}catch(G){lt("WebGLState:",G)}}function ve(){try{n.texImage3D(...arguments)}catch(G){lt("WebGLState:",G)}}function Ae(G){Te.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Te.copy(G))}function Pe(G){Ge.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ge.copy(G))}function Oe(G,Ue){let Me=c.get(Ue);Me===void 0&&(Me=new WeakMap,c.set(Ue,Me));let Be=Me.get(G);Be===void 0&&(Be=n.getUniformBlockIndex(Ue,G.name),Me.set(G,Be))}function we(G,Ue){const Be=c.get(Ue).get(G);l.get(Ue)!==Be&&(n.uniformBlockBinding(Ue,Be,G.__bindingPointIndex),l.set(Ue,Be))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,be={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,R=null,M=null,E=null,I=null,N=new Qe(0,0,0),H=0,y=!1,w=null,U=null,F=null,z=null,Q=null,Te.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Ee,bindFramebuffer:pe,drawBuffers:ne,useProgram:xe,setBlending:L,setMaterial:V,setFlipSided:j,setCullFace:ee,setLineWidth:P,setPolygonOffset:fe,setScissorTest:oe,activeTexture:Z,bindTexture:le,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:We,texImage3D:ve,updateUBOMapping:Oe,uniformBlockBinding:we,texStorage2D:_e,texStorage3D:Fe,texSubImage2D:J,texSubImage3D:ae,compressedTexSubImage2D:q,compressedTexSubImage3D:Ie,scissor:Ae,viewport:Pe,reset:it}}function r1(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return p?new OffscreenCanvas(b,v):la("canvas")}function x(b,v,O){let J=1;const ae=le(b);if((ae.width>O||ae.height>O)&&(J=O/Math.max(ae.width,ae.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(J*ae.width),Ie=Math.floor(J*ae.height);h===void 0&&(h=g(q,Ie));const _e=v?g(q,Ie):h;return _e.width=q,_e.height=Ie,_e.getContext("2d").drawImage(b,0,0,q,Ie),Ze("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+q+"x"+Ie+")."),_e}else return"data"in b&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){n.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(b,v,O,J,ae=!1){if(b!==null){if(n[b]!==void 0)return n[b];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=v;if(v===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),v===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){const Ie=ae?oa:ct.getTransfer(J);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=Ie===gt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(b,v){let O;return b?v===null||v===ei||v===Xr?O=n.DEPTH24_STENCIL8:v===Yn?O=n.DEPTH32F_STENCIL8:v===Wr&&(O=n.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ei||v===Xr?O=n.DEPTH_COMPONENT24:v===Yn?O=n.DEPTH_COMPONENT32F:v===Wr&&(O=n.DEPTH_COMPONENT16),O}function E(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ht&&b.minFilter!==Vt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function I(b){const v=b.target;v.removeEventListener("dispose",I),H(v),v.isVideoTexture&&u.delete(v)}function N(b){const v=b.target;v.removeEventListener("dispose",N),w(v)}function H(b){const v=i.get(b);if(v.__webglInit===void 0)return;const O=b.source,J=f.get(O);if(J){const ae=J[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&y(b),Object.keys(J).length===0&&f.delete(O)}i.remove(b)}function y(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const O=b.source,J=f.get(O);delete J[v.__cacheKey],o.memory.textures--}function w(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let ae=0;ae<v.__webglFramebuffer[J].length;ae++)n.deleteFramebuffer(v.__webglFramebuffer[J][ae]);else n.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)n.deleteFramebuffer(v.__webglFramebuffer[J]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=b.textures;for(let J=0,ae=O.length;J<ae;J++){const q=i.get(O[J]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(O[J])}i.remove(b)}let U=0;function F(){U=0}function z(){const b=U;return b>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),U+=1,b}function Q(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function te(b,v){const O=i.get(b);if(b.isVideoTexture&&oe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const J=b.image;if(J===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(O,b,v);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function K(b,v){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ie(O,b,v);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function X(b,v){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ie(O,b,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function W(b,v){const O=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&O.__version!==b.version){ue(O,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const ge={[ac]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[lc]:n.MIRRORED_REPEAT},be={[Ht]:n.NEAREST,[tx]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},Se={[sx]:n.NEVER,[cx]:n.ALWAYS,[rx]:n.LESS,[yu]:n.LEQUAL,[ox]:n.EQUAL,[bu]:n.GEQUAL,[ax]:n.GREATER,[lx]:n.NOTEQUAL};function de(b,v){if(v.type===Yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Vt||v.magFilter===Za||v.magFilter===ao||v.magFilter===ls||v.minFilter===Vt||v.minFilter===Za||v.minFilter===ao||v.minFilter===ls)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ge[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ge[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ge[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,be[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,be[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ht||v.minFilter!==ao&&v.minFilter!==ls||v.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Te(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",I));const J=v.source;let ae=f.get(J);ae===void 0&&(ae={},f.set(J,ae));const q=Q(v);if(q!==b.__cacheKey){ae[q]===void 0&&(ae[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ae[q].usedTimes++;const Ie=ae[b.__cacheKey];Ie!==void 0&&(ae[b.__cacheKey].usedTimes--,Ie.usedTimes===0&&y(v)),b.__cacheKey=q,b.__webglTexture=ae[q].texture}return O}function Ge(b,v,O){return Math.floor(Math.floor(b/O)/v)}function qe(b,v,O,J){const q=b.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,O,J,v.data);else{q.sort((ve,Ae)=>ve.start-Ae.start);let Ie=0;for(let ve=1;ve<q.length;ve++){const Ae=q[Ie],Pe=q[ve],Oe=Ae.start+Ae.count,we=Ge(Pe.start,v.width,4),it=Ge(Ae.start,v.width,4);Pe.start<=Oe+1&&we===it&&Ge(Pe.start+Pe.count-1,v.width,4)===we?Ae.count=Math.max(Ae.count,Pe.start+Pe.count-Ae.start):(++Ie,q[Ie]=Pe)}q.length=Ie+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),Fe=n.getParameter(n.UNPACK_SKIP_PIXELS),We=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ve=0,Ae=q.length;ve<Ae;ve++){const Pe=q[ve],Oe=Math.floor(Pe.start/4),we=Math.ceil(Pe.count/4),it=Oe%v.width,G=Math.floor(Oe/v.width),Ue=we,Me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,it),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,it,G,Ue,Me,O,J,v.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,We)}}function ie(b,v,O){let J=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=n.TEXTURE_3D);const ae=Te(b,v),q=v.source;t.bindTexture(J,b.__webglTexture,n.TEXTURE0+O);const Ie=i.get(q);if(q.version!==Ie.__version||ae===!0){t.activeTexture(n.TEXTURE0+O);const _e=ct.getPrimaries(ct.workingColorSpace),Fe=v.colorSpace===Oi?null:ct.getPrimaries(v.colorSpace),We=v.colorSpace===Oi||_e===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ve=x(v.image,!1,s.maxTextureSize);ve=Z(v,ve);const Ae=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type);let Oe=R(v.internalFormat,Ae,Pe,v.colorSpace,v.isVideoTexture);de(J,v);let we;const it=v.mipmaps,G=v.isVideoTexture!==!0,Ue=Ie.__version===void 0||ae===!0,Me=q.dataReady,Be=E(v,ve);if(v.isDepthTexture)Oe=M(v.format===cs,v.type),Ue&&(G?t.texStorage2D(n.TEXTURE_2D,1,Oe,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ve.width,ve.height,0,Ae,Pe,null));else if(v.isDataTexture)if(it.length>0){G&&Ue&&t.texStorage2D(n.TEXTURE_2D,Be,Oe,it[0].width,it[0].height);for(let ye=0,me=it.length;ye<me;ye++)we=it[ye],G?Me&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,we.width,we.height,Ae,Pe,we.data):t.texImage2D(n.TEXTURE_2D,ye,Oe,we.width,we.height,0,Ae,Pe,we.data);v.generateMipmaps=!1}else G?(Ue&&t.texStorage2D(n.TEXTURE_2D,Be,Oe,ve.width,ve.height),Me&&qe(v,ve,Ae,Pe)):t.texImage2D(n.TEXTURE_2D,0,Oe,ve.width,ve.height,0,Ae,Pe,ve.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){G&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Oe,it[0].width,it[0].height,ve.depth);for(let ye=0,me=it.length;ye<me;ye++)if(we=it[ye],v.format!==Un)if(Ae!==null)if(G){if(Me)if(v.layerUpdates.size>0){const Re=od(we.width,we.height,v.format,v.type);for(const et of v.layerUpdates){const St=we.data.subarray(et*Re/we.data.BYTES_PER_ELEMENT,(et+1)*Re/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,et,we.width,we.height,1,Ae,St)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,ve.depth,Ae,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,Oe,we.width,we.height,ve.depth,0,we.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,ve.depth,Ae,Pe,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,Oe,we.width,we.height,ve.depth,0,Ae,Pe,we.data)}else{G&&Ue&&t.texStorage2D(n.TEXTURE_2D,Be,Oe,it[0].width,it[0].height);for(let ye=0,me=it.length;ye<me;ye++)we=it[ye],v.format!==Un?Ae!==null?G?Me&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,Oe,we.width,we.height,0,we.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Me&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,we.width,we.height,Ae,Pe,we.data):t.texImage2D(n.TEXTURE_2D,ye,Oe,we.width,we.height,0,Ae,Pe,we.data)}else if(v.isDataArrayTexture)if(G){if(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Oe,ve.width,ve.height,ve.depth),Me)if(v.layerUpdates.size>0){const ye=od(ve.width,ve.height,v.format,v.type);for(const me of v.layerUpdates){const Re=ve.data.subarray(me*ye/ve.data.BYTES_PER_ELEMENT,(me+1)*ye/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,ve.width,ve.height,1,Ae,Pe,Re)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ae,Pe,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ve.width,ve.height,ve.depth,0,Ae,Pe,ve.data);else if(v.isData3DTexture)G?(Ue&&t.texStorage3D(n.TEXTURE_3D,Be,Oe,ve.width,ve.height,ve.depth),Me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ae,Pe,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ve.width,ve.height,ve.depth,0,Ae,Pe,ve.data);else if(v.isFramebufferTexture){if(Ue)if(G)t.texStorage2D(n.TEXTURE_2D,Be,Oe,ve.width,ve.height);else{let ye=ve.width,me=ve.height;for(let Re=0;Re<Be;Re++)t.texImage2D(n.TEXTURE_2D,Re,Oe,ye,me,0,Ae,Pe,null),ye>>=1,me>>=1}}else if(it.length>0){if(G&&Ue){const ye=le(it[0]);t.texStorage2D(n.TEXTURE_2D,Be,Oe,ye.width,ye.height)}for(let ye=0,me=it.length;ye<me;ye++)we=it[ye],G?Me&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ae,Pe,we):t.texImage2D(n.TEXTURE_2D,ye,Oe,Ae,Pe,we);v.generateMipmaps=!1}else if(G){if(Ue){const ye=le(ve);t.texStorage2D(n.TEXTURE_2D,Be,Oe,ye.width,ye.height)}Me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Pe,ve)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Ae,Pe,ve);m(v)&&d(J),Ie.__version=q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ue(b,v,O){if(v.image.length!==6)return;const J=Te(b,v),ae=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const q=i.get(ae);if(ae.version!==q.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const Ie=ct.getPrimaries(ct.workingColorSpace),_e=v.colorSpace===Oi?null:ct.getPrimaries(v.colorSpace),Fe=v.colorSpace===Oi||Ie===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const We=v.isCompressedTexture||v.image[0].isCompressedTexture,ve=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let me=0;me<6;me++)!We&&!ve?Ae[me]=x(v.image[me],!0,s.maxCubemapSize):Ae[me]=ve?v.image[me].image:v.image[me],Ae[me]=Z(v,Ae[me]);const Pe=Ae[0],Oe=r.convert(v.format,v.colorSpace),we=r.convert(v.type),it=R(v.internalFormat,Oe,we,v.colorSpace),G=v.isVideoTexture!==!0,Ue=q.__version===void 0||J===!0,Me=ae.dataReady;let Be=E(v,Pe);de(n.TEXTURE_CUBE_MAP,v);let ye;if(We){G&&Ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,it,Pe.width,Pe.height);for(let me=0;me<6;me++){ye=Ae[me].mipmaps;for(let Re=0;Re<ye.length;Re++){const et=ye[Re];v.format!==Un?Oe!==null?G?Me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,et.width,et.height,Oe,et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,it,et.width,et.height,0,et.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,et.width,et.height,Oe,we,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,it,et.width,et.height,0,Oe,we,et.data)}}}else{if(ye=v.mipmaps,G&&Ue){ye.length>0&&Be++;const me=le(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,it,me.width,me.height)}for(let me=0;me<6;me++)if(ve){G?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ae[me].width,Ae[me].height,Oe,we,Ae[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,it,Ae[me].width,Ae[me].height,0,Oe,we,Ae[me].data);for(let Re=0;Re<ye.length;Re++){const St=ye[Re].image[me].image;G?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,St.width,St.height,Oe,we,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,it,St.width,St.height,0,Oe,we,St.data)}}else{G?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Oe,we,Ae[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,it,Oe,we,Ae[me]);for(let Re=0;Re<ye.length;Re++){const et=ye[Re];G?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,Oe,we,et.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,it,Oe,we,et.image[me])}}}m(v)&&d(n.TEXTURE_CUBE_MAP),q.__version=ae.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ee(b,v,O,J,ae,q){const Ie=r.convert(O.format,O.colorSpace),_e=r.convert(O.type),Fe=R(O.internalFormat,Ie,_e,O.colorSpace),We=i.get(v),ve=i.get(O);if(ve.__renderTarget=v,!We.__hasExternalTextures){const Ae=Math.max(1,v.width>>q),Pe=Math.max(1,v.height>>q);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,q,Fe,Ae,Pe,v.depth,0,Ie,_e,null):t.texImage2D(ae,q,Fe,Ae,Pe,0,Ie,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),fe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ae,ve.__webglTexture,0,P(v)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ae,ve.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(b,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const J=v.depthTexture,ae=J&&J.isDepthTexture?J.type:null,q=M(v.stencilBuffer,ae),Ie=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(v),q,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(v),q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,b)}else{const J=v.textures;for(let ae=0;ae<J.length;ae++){const q=J[ae],Ie=r.convert(q.format,q.colorSpace),_e=r.convert(q.type),Fe=R(q.internalFormat,Ie,_e,q.colorSpace);fe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(v),Fe,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(v),Fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ne(b,v,O){const J=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(v.depthTexture);if(ae.__renderTarget=v,(!ae.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,v.depthTexture.addEventListener("dispose",I)),ae.__webglTexture===void 0){ae.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),de(n.TEXTURE_CUBE_MAP,v.depthTexture);const We=r.convert(v.depthTexture.format),ve=r.convert(v.depthTexture.type);let Ae;v.depthTexture.format===Si?Ae=n.DEPTH_COMPONENT24:v.depthTexture.format===cs&&(Ae=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ae,v.width,v.height,0,We,ve,null)}}else te(v.depthTexture,0);const q=ae.__webglTexture,Ie=P(v),_e=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,Fe=v.depthTexture.format===cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Si)fe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Fe,_e,q,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,Fe,_e,q,0);else if(v.depthTexture.format===cs)fe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Fe,_e,q,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,Fe,_e,q,0);else throw new Error("Unknown depthTexture format")}function xe(b){const v=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const J=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",ae)};J.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=J}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let J=0;J<6;J++)ne(v.__webglFramebuffer[J],b,J);else{const J=b.texture.mipmaps;J&&J.length>0?ne(v.__webglFramebuffer[0],b,0):ne(v.__webglFramebuffer,b,0)}else if(O){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=n.createRenderbuffer(),pe(v.__webglDepthbuffer[J],b,!1);else{const ae=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,q)}}else{const J=b.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),pe(v.__webglDepthbuffer,b,!1);else{const ae=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(b,v,O){const J=i.get(b);v!==void 0&&Ee(J.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&xe(b)}function D(b){const v=b.texture,O=i.get(b),J=i.get(v);b.addEventListener("dispose",N);const ae=b.textures,q=b.isWebGLCubeRenderTarget===!0,Ie=ae.length>1;if(Ie||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=v.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[_e]=[];for(let Fe=0;Fe<v.mipmaps.length;Fe++)O.__webglFramebuffer[_e][Fe]=n.createFramebuffer()}else O.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let _e=0;_e<v.mipmaps.length;_e++)O.__webglFramebuffer[_e]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let _e=0,Fe=ae.length;_e<Fe;_e++){const We=i.get(ae[_e]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&fe(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _e=0;_e<ae.length;_e++){const Fe=ae[_e];O.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[_e]);const We=r.convert(Fe.format,Fe.colorSpace),ve=r.convert(Fe.type),Ae=R(Fe.internalFormat,We,ve,Fe.colorSpace,b.isXRRenderTarget===!0),Pe=P(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ae,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,O.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),de(n.TEXTURE_CUBE_MAP,v);for(let _e=0;_e<6;_e++)if(v.mipmaps&&v.mipmaps.length>0)for(let Fe=0;Fe<v.mipmaps.length;Fe++)Ee(O.__webglFramebuffer[_e][Fe],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe);else Ee(O.__webglFramebuffer[_e],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(v)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let _e=0,Fe=ae.length;_e<Fe;_e++){const We=ae[_e],ve=i.get(We);let Ae=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ve.__webglTexture),de(Ae,We),Ee(O.__webglFramebuffer,b,We,n.COLOR_ATTACHMENT0+_e,Ae,0),m(We)&&d(Ae)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_e=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,J.__webglTexture),de(_e,v),v.mipmaps&&v.mipmaps.length>0)for(let Fe=0;Fe<v.mipmaps.length;Fe++)Ee(O.__webglFramebuffer[Fe],b,v,n.COLOR_ATTACHMENT0,_e,Fe);else Ee(O.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,_e,0);m(v)&&d(_e),t.unbindTexture()}b.depthBuffer&&xe(b)}function L(b){const v=b.textures;for(let O=0,J=v.length;O<J;O++){const ae=v[O];if(m(ae)){const q=A(b),Ie=i.get(ae).__webglTexture;t.bindTexture(q,Ie),d(q),t.unbindTexture()}}}const V=[],j=[];function ee(b){if(b.samples>0){if(fe(b)===!1){const v=b.textures,O=b.width,J=b.height;let ae=n.COLOR_BUFFER_BIT;const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(b),_e=v.length>1;if(_e)for(let We=0;We<v.length;We++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Fe=b.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let We=0;We<v.length;We++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[We]);const ve=i.get(v[We]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,ae,n.NEAREST),l===!0&&(V.length=0,j.length=0,V.push(n.COLOR_ATTACHMENT0+We),b.depthBuffer&&b.resolveDepthBuffer===!1&&(V.push(q),j.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let We=0;We<v.length;We++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[We]);const ve=i.get(v[We]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function P(b){return Math.min(s.maxSamples,b.samples)}function fe(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function oe(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function Z(b,v){const O=b.colorSpace,J=b.format,ae=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==rr&&O!==Oi&&(ct.getTransfer(O)===gt?(J!==Un||ae!==xn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",O)),v}function le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=te,this.setTexture2DArray=K,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=C,this.setupRenderTarget=D,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function o1(n,e){function t(i,s=Oi){let r;const o=ct.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_p)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gp)return n.BYTE;if(i===vp)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===pu)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===bn)return n.HALF_FLOAT;if(i===yp)return n.ALPHA;if(i===bp)return n.RGB;if(i===Un)return n.RGBA;if(i===Si)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===Mp)return n.RED;if(i===vu)return n.RED_INTEGER;if(i===sr)return n.RG;if(i===xu)return n.RG_INTEGER;if(i===_u)return n.RGBA_INTEGER;if(i===Go||i===Wo||i===Xo||i===$o)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===hc||i===dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fc||i===pc||i===mc||i===gc||i===vc||i===xc||i===_c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fc||i===pc)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===gc)return r.COMPRESSED_R11_EAC;if(i===vc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xc)return r.COMPRESSED_RG11_EAC;if(i===_c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yc||i===bc||i===Mc||i===Sc||i===Ec||i===wc||i===Tc||i===Ac||i===Cc||i===Rc||i===Pc||i===Dc||i===Lc||i===Ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ec)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ac)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ic)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nc||i===Uc||i===Fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Nc)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oc||i===Bc||i===kc||i===zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`;class c1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Up(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yt({vertexShader:a1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u1 extends vs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new c1,d={},A=t.getContextAttributes();let R=null,M=null;const E=[],I=[],N=new Ce;let H=null;const y=new cn;y.viewport=new Pt;const w=new cn;w.viewport=new Pt;const U=[y,w],F=new v_;let z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ue=E[ie];return ue===void 0&&(ue=new yl,E[ie]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ie){let ue=E[ie];return ue===void 0&&(ue=new yl,E[ie]=ue),ue.getGripSpace()},this.getHand=function(ie){let ue=E[ie];return ue===void 0&&(ue=new yl,E[ie]=ue),ue.getHandSpace()};function te(ie){const ue=I.indexOf(ie.inputSource);if(ue===-1)return;const Ee=E[ue];Ee!==void 0&&(Ee.update(ie.inputSource,ie.frame,c||o),Ee.dispatchEvent({type:ie.type,data:ie.inputSource}))}function K(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",X);for(let ie=0;ie<E.length;ie++){const ue=I[ie];ue!==null&&(I[ie]=null,E[ie].disconnect(ue))}z=null,Q=null,m.reset();for(const ie in d)delete d[ie];e.setRenderTarget(R),p=null,f=null,h=null,s=null,M=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(H),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",K),s.addEventListener("inputsourceschange",X),A.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(N),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,pe=null,ne=null;A.depth&&(ne=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=A.stencil?cs:Si,pe=A.stencil?Xr:ei);const xe={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new hn(f.textureWidth,f.textureHeight,{format:Un,type:xn,depthTexture:new jr(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ee={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new hn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(ie){for(let ue=0;ue<ie.removed.length;ue++){const Ee=ie.removed[ue],pe=I.indexOf(Ee);pe>=0&&(I[pe]=null,E[pe].disconnect(Ee))}for(let ue=0;ue<ie.added.length;ue++){const Ee=ie.added[ue];let pe=I.indexOf(Ee);if(pe===-1){for(let xe=0;xe<E.length;xe++)if(xe>=I.length){I.push(Ee),pe=xe;break}else if(I[xe]===null){I[xe]=Ee,pe=xe;break}if(pe===-1)break}const ne=E[pe];ne&&ne.connect(Ee)}}const W=new k,ge=new k;function be(ie,ue,Ee){W.setFromMatrixPosition(ue.matrixWorld),ge.setFromMatrixPosition(Ee.matrixWorld);const pe=W.distanceTo(ge),ne=ue.projectionMatrix.elements,xe=Ee.projectionMatrix.elements,C=ne[14]/(ne[10]-1),D=ne[14]/(ne[10]+1),L=(ne[9]+1)/ne[5],V=(ne[9]-1)/ne[5],j=(ne[8]-1)/ne[0],ee=(xe[8]+1)/xe[0],P=C*j,fe=C*ee,oe=pe/(-j+ee),Z=oe*-j;if(ue.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Z),ie.translateZ(oe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ne[10]===-1)ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const le=C+oe,b=D+oe,v=P-Z,O=fe+(pe-Z),J=L*D/b*le,ae=V*D/b*le;ie.projectionMatrix.makePerspective(v,O,J,ae,le,b),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Se(ie,ue){ue===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ue.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ue=ie.near,Ee=ie.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),F.near=w.near=y.near=ue,F.far=w.far=y.far=Ee,(z!==F.near||Q!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,Q=F.far),F.layers.mask=ie.layers.mask|6,y.layers.mask=F.layers.mask&3,w.layers.mask=F.layers.mask&5;const pe=ie.parent,ne=F.cameras;Se(F,pe);for(let xe=0;xe<ne.length;xe++)Se(ne[xe],pe);ne.length===2?be(F,y,w):F.projectionMatrix.copy(y.projectionMatrix),de(ie,F,pe)};function de(ie,ue,Ee){Ee===null?ie.matrix.copy(ue.matrixWorld):(ie.matrix.copy(Ee.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ue.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ua*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(ie){return d[ie]};let Te=null;function Ge(ie,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let pe=!1;Ee.length!==F.cameras.length&&(F.cameras.length=0,pe=!0);for(let D=0;D<Ee.length;D++){const L=Ee[D];let V=null;if(p!==null)V=p.getViewport(L);else{const ee=h.getViewSubImage(f,L);V=ee.viewport,D===0&&(e.setRenderTargetTextures(M,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(M))}let j=U[D];j===void 0&&(j=new cn,j.layers.enable(D),j.viewport=new Pt,U[D]=j),j.matrix.fromArray(L.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(L.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(V.x,V.y,V.width,V.height),D===0&&(F.matrix.copy(j.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),pe===!0&&F.cameras.push(j)}const ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const D=h.getDepthInformation(Ee[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(ne&&ne.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let D=0;D<Ee.length;D++){const L=Ee[D].camera;if(L){let V=d[L];V||(V=new Up,d[L]=V);const j=h.getCameraImage(L);V.sourceTexture=j}}}}for(let Ee=0;Ee<E.length;Ee++){const pe=I[Ee],ne=E[Ee];pe!==null&&ne!==void 0&&ne.update(pe,ue,c||o)}Te&&Te(ie,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const qe=new kp;qe.setAnimationLoop(Ge),this.setAnimationLoop=function(ie){Te=ie},this.dispose=function(){}}}const is=new ti,h1=new Tt;function d1(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Rp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,R,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,R):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===un&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===un&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),R=A.envMap,M=A.envMapRotation;R&&(m.envMap.value=R,is.copy(M),is.x*=-1,is.y*=-1,is.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(h1.makeRotationFromEuler(is)),m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,R){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=R*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function f1(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,R){const M=R.program;i.uniformBlockBinding(A,M)}function c(A,R){let M=s[A.id];M===void 0&&(g(A),M=u(A),s[A.id]=M,A.addEventListener("dispose",m));const E=R.program;i.updateUBOMapping(A,E);const I=e.render.frame;r[A.id]!==I&&(f(A),r[A.id]=I)}function u(A){const R=h();A.__bindingPointIndex=R;const M=n.createBuffer(),E=A.__size,I=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,E,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,M),M}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const R=s[A.id],M=A.uniforms,E=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let I=0,N=M.length;I<N;I++){const H=Array.isArray(M[I])?M[I]:[M[I]];for(let y=0,w=H.length;y<w;y++){const U=H[y];if(p(U,I,y,E)===!0){const F=U.__offset,z=Array.isArray(U.value)?U.value:[U.value];let Q=0;for(let te=0;te<z.length;te++){const K=z[te],X=x(K);typeof K=="number"||typeof K=="boolean"?(U.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,F+Q,U.__data)):K.isMatrix3?(U.__data[0]=K.elements[0],U.__data[1]=K.elements[1],U.__data[2]=K.elements[2],U.__data[3]=0,U.__data[4]=K.elements[3],U.__data[5]=K.elements[4],U.__data[6]=K.elements[5],U.__data[7]=0,U.__data[8]=K.elements[6],U.__data[9]=K.elements[7],U.__data[10]=K.elements[8],U.__data[11]=0):(K.toArray(U.__data,Q),Q+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,R,M,E){const I=A.value,N=R+"_"+M;if(E[N]===void 0)return typeof I=="number"||typeof I=="boolean"?E[N]=I:E[N]=I.clone(),!0;{const H=E[N];if(typeof I=="number"||typeof I=="boolean"){if(H!==I)return E[N]=I,!0}else if(H.equals(I)===!1)return H.copy(I),!0}return!1}function g(A){const R=A.uniforms;let M=0;const E=16;for(let N=0,H=R.length;N<H;N++){const y=Array.isArray(R[N])?R[N]:[R[N]];for(let w=0,U=y.length;w<U;w++){const F=y[w],z=Array.isArray(F.value)?F.value:[F.value];for(let Q=0,te=z.length;Q<te;Q++){const K=z[Q],X=x(K),W=M%E,ge=W%X.boundary,be=W+ge;M+=ge,be!==0&&E-be<X.storage&&(M+=E-be),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=X.storage}}}const I=M%E;return I>0&&(M+=E-I),A.__size=M,A.__cache={},this}function x(A){const R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=48,R.storage=48):A.isMatrix4?(R.boundary=64,R.storage=64):A.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",A),R}function m(A){const R=A.target;R.removeEventListener("dispose",m);const M=o.indexOf(R.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function d(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}const p1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function m1(){return Hn===null&&(Hn=new Bx(p1,16,16,sr,bn),Hn.name="DFG_LUT",Hn.minFilter=Vt,Hn.magFilter=Vt,Hn.wrapS=vi,Hn.wrapT=vi,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class g1{constructor(e={}){const{canvas:t=ux(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=xn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=p,m=new Set([_u,xu,vu]),d=new Set([xn,ei,Wr,Xr,mu,gu]),A=new Uint32Array(4),R=new Int32Array(4);let M=null,E=null;const I=[],N=[];let H=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=vn;let U=0,F=0,z=null,Q=-1,te=null;const K=new Pt,X=new Pt;let W=null;const ge=new Qe(0);let be=0,Se=t.width,de=t.height,Te=1,Ge=null,qe=null;const ie=new Pt(0,0,Se,de),ue=new Pt(0,0,Se,de);let Ee=!1;const pe=new wu;let ne=!1,xe=!1;const C=new Tt,D=new k,L=new Pt,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function ee(){return z===null?Te:1}let P=i;function fe(T,$){return t.getContext(T,$)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fu}`),t.addEventListener("webglcontextlost",et,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",pt,!1),P===null){const $="webgl2";if(P=fe($,T),P===null)throw fe($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw lt("WebGLRenderer: "+T.message),T}let oe,Z,le,b,v,O,J,ae,q,Ie,_e,Fe,We,ve,Ae,Pe,Oe,we,it,G,Ue,Me,Be,ye;function me(){oe=new mM(P),oe.init(),Me=new o1(P,oe),Z=new oM(P,oe,e,Me),le=new s1(P,oe),Z.reversedDepthBuffer&&f&&le.buffers.depth.setReversed(!0),b=new xM(P),v=new GS,O=new r1(P,oe,le,v,Z,Me,b),J=new lM(y),ae=new pM(y),q=new M_(P),Be=new sM(P,q),Ie=new gM(P,q,b,Be),_e=new yM(P,Ie,q,b),it=new _M(P,Z,O),Pe=new aM(v),Fe=new HS(y,J,ae,oe,Z,Be,Pe),We=new d1(y,v),ve=new XS,Ae=new JS(oe),we=new iM(y,J,ae,le,_e,g,l),Oe=new n1(y,_e,Z),ye=new f1(P,b,Z,le),G=new rM(P,oe,b),Ue=new vM(P,oe,b),b.programs=Fe.programs,y.capabilities=Z,y.extensions=oe,y.properties=v,y.renderLists=ve,y.shadowMap=Oe,y.state=le,y.info=b}me(),x!==xn&&(H=new MM(x,t.width,t.height,s,r));const Re=new u1(y,P);this.xr=Re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(T){T!==void 0&&(Te=T,this.setSize(Se,de,!1))},this.getSize=function(T){return T.set(Se,de)},this.setSize=function(T,$,re=!0){if(Re.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=T,de=$,t.width=Math.floor(T*Te),t.height=Math.floor($*Te),re===!0&&(t.style.width=T+"px",t.style.height=$+"px"),H!==null&&H.setSize(t.width,t.height),this.setViewport(0,0,T,$)},this.getDrawingBufferSize=function(T){return T.set(Se*Te,de*Te).floor()},this.setDrawingBufferSize=function(T,$,re){Se=T,de=$,Te=re,t.width=Math.floor(T*re),t.height=Math.floor($*re),this.setViewport(0,0,T,$)},this.setEffects=function(T){if(x===xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let $=0;$<T.length;$++)if(T[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(ie)},this.setViewport=function(T,$,re,se){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,$,re,se),le.viewport(K.copy(ie).multiplyScalar(Te).round())},this.getScissor=function(T){return T.copy(ue)},this.setScissor=function(T,$,re,se){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,$,re,se),le.scissor(X.copy(ue).multiplyScalar(Te).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(T){le.setScissorTest(Ee=T)},this.setOpaqueSort=function(T){Ge=T},this.setTransparentSort=function(T){qe=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(T=!0,$=!0,re=!0){let se=0;if(T){let Y=!1;if(z!==null){const De=z.texture.format;Y=m.has(De)}if(Y){const De=z.texture.type,ze=d.has(De),Ne=we.getClearColor(),Ve=we.getClearAlpha(),Xe=Ne.r,Ke=Ne.g,je=Ne.b;ze?(A[0]=Xe,A[1]=Ke,A[2]=je,A[3]=Ve,P.clearBufferuiv(P.COLOR,0,A)):(R[0]=Xe,R[1]=Ke,R[2]=je,R[3]=Ve,P.clearBufferiv(P.COLOR,0,R))}else se|=P.COLOR_BUFFER_BIT}$&&(se|=P.DEPTH_BUFFER_BIT),re&&(se|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",et,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),we.dispose(),ve.dispose(),Ae.dispose(),v.dispose(),J.dispose(),ae.dispose(),_e.dispose(),Be.dispose(),ye.dispose(),Fe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Lu),Re.removeEventListener("sessionend",Iu),$i.stop()};function et(T){T.preventDefault(),ca("WebGLRenderer: Context Lost."),w=!0}function St(){ca("WebGLRenderer: Context Restored."),w=!1;const T=b.autoReset,$=Oe.enabled,re=Oe.autoUpdate,se=Oe.needsUpdate,Y=Oe.type;me(),b.autoReset=T,Oe.enabled=$,Oe.autoUpdate=re,Oe.needsUpdate=se,Oe.type=Y}function pt(T){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function zn(T){const $=T.target;$.removeEventListener("dispose",zn),ii($)}function ii(T){Kp(T),v.remove(T)}function Kp(T){const $=v.get(T).programs;$!==void 0&&($.forEach(function(re){Fe.releaseProgram(re)}),T.isShaderMaterial&&Fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,$,re,se,Y,De){$===null&&($=V);const ze=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=Zp(T,$,re,se,Y);le.setMaterial(se,ze);let Ve=re.index,Xe=1;if(se.wireframe===!0){if(Ve=Ie.getWireframeAttribute(re),Ve===void 0)return;Xe=2}const Ke=re.drawRange,je=re.attributes.position;let at=Ke.start*Xe,vt=(Ke.start+Ke.count)*Xe;De!==null&&(at=Math.max(at,De.start*Xe),vt=Math.min(vt,(De.start+De.count)*Xe)),Ve!==null?(at=Math.max(at,0),vt=Math.min(vt,Ve.count)):je!=null&&(at=Math.max(at,0),vt=Math.min(vt,je.count));const Ct=vt-at;if(Ct<0||Ct===1/0)return;Be.setup(Y,se,Ne,re,Ve);let Rt,yt=G;if(Ve!==null&&(Rt=q.get(Ve),yt=Ue,yt.setIndex(Rt)),Y.isMesh)se.wireframe===!0?(le.setLineWidth(se.wireframeLinewidth*ee()),yt.setMode(P.LINES)):yt.setMode(P.TRIANGLES);else if(Y.isLine){let Ye=se.linewidth;Ye===void 0&&(Ye=1),le.setLineWidth(Ye*ee()),Y.isLineSegments?yt.setMode(P.LINES):Y.isLineLoop?yt.setMode(P.LINE_LOOP):yt.setMode(P.LINE_STRIP)}else Y.isPoints?yt.setMode(P.POINTS):Y.isSprite&&yt.setMode(P.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)$r("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))yt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ye=Y._multiDrawStarts,mt=Y._multiDrawCounts,ut=Y._multiDrawCount,fn=Ve?q.get(Ve).bytesPerElement:1,_s=v.get(se).currentProgram.getUniforms();for(let pn=0;pn<ut;pn++)_s.setValue(P,"_gl_DrawID",pn),yt.render(Ye[pn]/fn,mt[pn])}else if(Y.isInstancedMesh)yt.renderInstances(at,Ct,Y.count);else if(re.isInstancedBufferGeometry){const Ye=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,mt=Math.min(re.instanceCount,Ye);yt.renderInstances(at,Ct,mt)}else yt.render(at,Ct)};function Du(T,$,re){T.transparent===!0&&T.side===$n&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,to(T,$,re),T.side=Gi,T.needsUpdate=!0,to(T,$,re),T.side=$n):to(T,$,re)}this.compile=function(T,$,re=null){re===null&&(re=T),E=Ae.get(re),E.init($),N.push(E),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),T!==re&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights();const se=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const De=Y.material;if(De)if(Array.isArray(De))for(let ze=0;ze<De.length;ze++){const Ne=De[ze];Du(Ne,re,Y),se.add(Ne)}else Du(De,re,Y),se.add(De)}),E=N.pop(),se},this.compileAsync=function(T,$,re=null){const se=this.compile(T,$,re);return new Promise(Y=>{function De(){if(se.forEach(function(ze){v.get(ze).currentProgram.isReady()&&se.delete(ze)}),se.size===0){Y(T);return}setTimeout(De,10)}oe.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Ua=null;function Jp(T){Ua&&Ua(T)}function Lu(){$i.stop()}function Iu(){$i.start()}const $i=new kp;$i.setAnimationLoop(Jp),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(T){Ua=T,Re.setAnimationLoop(T),T===null?$i.stop():$i.start()},Re.addEventListener("sessionstart",Lu),Re.addEventListener("sessionend",Iu),this.render=function(T,$){if($!==void 0&&$.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const re=Re.enabled===!0&&Re.isPresenting===!0,se=H!==null&&(z===null||re)&&H.begin(y,z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera($),$=Re.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,$,z),E=Ae.get(T,N.length),E.init($),N.push(E),C.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),pe.setFromProjectionMatrix(C,qn,$.reversedDepth),xe=this.localClippingEnabled,ne=Pe.init(this.clippingPlanes,xe),M=ve.get(T,I.length),M.init(),I.push(M),Re.enabled===!0&&Re.isPresenting===!0){const ze=y.xr.getDepthSensingMesh();ze!==null&&Fa(ze,$,-1/0,y.sortObjects)}Fa(T,$,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(Ge,qe),j=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,j&&we.addToRenderList(M,T),this.info.render.frame++,ne===!0&&Pe.beginShadows();const Y=E.state.shadowsArray;if(Oe.render(Y,T,$),ne===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&H.hasRenderPass())===!1){const ze=M.opaque,Ne=M.transmissive;if(E.setupLights(),$.isArrayCamera){const Ve=$.cameras;if(Ne.length>0)for(let Xe=0,Ke=Ve.length;Xe<Ke;Xe++){const je=Ve[Xe];Uu(ze,Ne,T,je)}j&&we.render(T);for(let Xe=0,Ke=Ve.length;Xe<Ke;Xe++){const je=Ve[Xe];Nu(M,T,je,je.viewport)}}else Ne.length>0&&Uu(ze,Ne,T,$),j&&we.render(T),Nu(M,T,$)}z!==null&&F===0&&(O.updateMultisampleRenderTarget(z),O.updateRenderTargetMipmap(z)),se&&H.end(y),T.isScene===!0&&T.onAfterRender(y,T,$),Be.resetDefaultState(),Q=-1,te=null,N.pop(),N.length>0?(E=N[N.length-1],ne===!0&&Pe.setGlobalState(y.clippingPlanes,E.state.camera)):E=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function Fa(T,$,re,se){if(T.visible===!1)return;if(T.layers.test($.layers)){if(T.isGroup)re=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update($);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||pe.intersectsSprite(T)){se&&L.setFromMatrixPosition(T.matrixWorld).applyMatrix4(C);const ze=_e.update(T),Ne=T.material;Ne.visible&&M.push(T,ze,Ne,re,L.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||pe.intersectsObject(T))){const ze=_e.update(T),Ne=T.material;if(se&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),L.copy(T.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),L.copy(ze.boundingSphere.center)),L.applyMatrix4(T.matrixWorld).applyMatrix4(C)),Array.isArray(Ne)){const Ve=ze.groups;for(let Xe=0,Ke=Ve.length;Xe<Ke;Xe++){const je=Ve[Xe],at=Ne[je.materialIndex];at&&at.visible&&M.push(T,ze,at,re,L.z,je)}}else Ne.visible&&M.push(T,ze,Ne,re,L.z,null)}}const De=T.children;for(let ze=0,Ne=De.length;ze<Ne;ze++)Fa(De[ze],$,re,se)}function Nu(T,$,re,se){const{opaque:Y,transmissive:De,transparent:ze}=T;E.setupLightsView(re),ne===!0&&Pe.setGlobalState(y.clippingPlanes,re),se&&le.viewport(K.copy(se)),Y.length>0&&eo(Y,$,re),De.length>0&&eo(De,$,re),ze.length>0&&eo(ze,$,re),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Uu(T,$,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[se.id]===void 0){const at=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[se.id]=new hn(1,1,{generateMipmaps:!0,type:at?bn:xn,minFilter:ls,samples:Z.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const De=E.state.transmissionRenderTarget[se.id],ze=se.viewport||K;De.setSize(ze.z*y.transmissionResolutionScale,ze.w*y.transmissionResolutionScale);const Ne=y.getRenderTarget(),Ve=y.getActiveCubeFace(),Xe=y.getActiveMipmapLevel();y.setRenderTarget(De),y.getClearColor(ge),be=y.getClearAlpha(),be<1&&y.setClearColor(16777215,.5),y.clear(),j&&we.render(re);const Ke=y.toneMapping;y.toneMapping=Qn;const je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),E.setupLightsView(se),ne===!0&&Pe.setGlobalState(y.clippingPlanes,se),eo(T,re,se),O.updateMultisampleRenderTarget(De),O.updateRenderTargetMipmap(De),oe.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let vt=0,Ct=$.length;vt<Ct;vt++){const Rt=$[vt],{object:yt,geometry:Ye,material:mt,group:ut}=Rt;if(mt.side===$n&&yt.layers.test(se.layers)){const fn=mt.side;mt.side=un,mt.needsUpdate=!0,Fu(yt,re,se,Ye,mt,ut),mt.side=fn,mt.needsUpdate=!0,at=!0}}at===!0&&(O.updateMultisampleRenderTarget(De),O.updateRenderTargetMipmap(De))}y.setRenderTarget(Ne,Ve,Xe),y.setClearColor(ge,be),je!==void 0&&(se.viewport=je),y.toneMapping=Ke}function eo(T,$,re){const se=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,De=T.length;Y<De;Y++){const ze=T[Y],{object:Ne,geometry:Ve,group:Xe}=ze;let Ke=ze.material;Ke.allowOverride===!0&&se!==null&&(Ke=se),Ne.layers.test(re.layers)&&Fu(Ne,$,re,Ve,Ke,Xe)}}function Fu(T,$,re,se,Y,De){T.onBeforeRender(y,$,re,se,Y,De),T.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(y,$,re,se,T,De),Y.transparent===!0&&Y.side===$n&&Y.forceSinglePass===!1?(Y.side=un,Y.needsUpdate=!0,y.renderBufferDirect(re,$,se,Y,T,De),Y.side=Gi,Y.needsUpdate=!0,y.renderBufferDirect(re,$,se,Y,T,De),Y.side=$n):y.renderBufferDirect(re,$,se,Y,T,De),T.onAfterRender(y,$,re,se,Y,De)}function to(T,$,re){$.isScene!==!0&&($=V);const se=v.get(T),Y=E.state.lights,De=E.state.shadowsArray,ze=Y.state.version,Ne=Fe.getParameters(T,Y.state,De,$,re),Ve=Fe.getProgramCacheKey(Ne);let Xe=se.programs;se.environment=T.isMeshStandardMaterial?$.environment:null,se.fog=$.fog,se.envMap=(T.isMeshStandardMaterial?ae:J).get(T.envMap||se.environment),se.envMapRotation=se.environment!==null&&T.envMap===null?$.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",zn),Xe=new Map,se.programs=Xe);let Ke=Xe.get(Ve);if(Ke!==void 0){if(se.currentProgram===Ke&&se.lightsStateVersion===ze)return Bu(T,Ne),Ke}else Ne.uniforms=Fe.getUniforms(T),T.onBeforeCompile(Ne,y),Ke=Fe.acquireProgram(Ne,Ve),Xe.set(Ve,Ke),se.uniforms=Ne.uniforms;const je=se.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=Pe.uniform),Bu(T,Ne),se.needsLights=em(T),se.lightsStateVersion=ze,se.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),se.currentProgram=Ke,se.uniformsList=null,Ke}function Ou(T){if(T.uniformsList===null){const $=T.currentProgram.getUniforms();T.uniformsList=Yo.seqWithValue($.seq,T.uniforms)}return T.uniformsList}function Bu(T,$){const re=v.get(T);re.outputColorSpace=$.outputColorSpace,re.batching=$.batching,re.batchingColor=$.batchingColor,re.instancing=$.instancing,re.instancingColor=$.instancingColor,re.instancingMorph=$.instancingMorph,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function Zp(T,$,re,se,Y){$.isScene!==!0&&($=V),O.resetTextureUnits();const De=$.fog,ze=se.isMeshStandardMaterial?$.environment:null,Ne=z===null?y.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:rr,Ve=(se.isMeshStandardMaterial?ae:J).get(se.envMap||ze),Xe=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ke=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),je=!!re.morphAttributes.position,at=!!re.morphAttributes.normal,vt=!!re.morphAttributes.color;let Ct=Qn;se.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ct=y.toneMapping);const Rt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,yt=Rt!==void 0?Rt.length:0,Ye=v.get(se),mt=E.state.lights;if(ne===!0&&(xe===!0||T!==te)){const Kt=T===te&&se.id===Q;Pe.setState(se,T,Kt)}let ut=!1;se.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==mt.state.version||Ye.outputColorSpace!==Ne||Y.isBatchedMesh&&Ye.batching===!1||!Y.isBatchedMesh&&Ye.batching===!0||Y.isBatchedMesh&&Ye.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ye.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ye.instancing===!1||!Y.isInstancedMesh&&Ye.instancing===!0||Y.isSkinnedMesh&&Ye.skinning===!1||!Y.isSkinnedMesh&&Ye.skinning===!0||Y.isInstancedMesh&&Ye.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ye.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ye.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ye.instancingMorph===!1&&Y.morphTexture!==null||Ye.envMap!==Ve||se.fog===!0&&Ye.fog!==De||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Pe.numPlanes||Ye.numIntersection!==Pe.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==Ke||Ye.morphTargets!==je||Ye.morphNormals!==at||Ye.morphColors!==vt||Ye.toneMapping!==Ct||Ye.morphTargetsCount!==yt)&&(ut=!0):(ut=!0,Ye.__version=se.version);let fn=Ye.currentProgram;ut===!0&&(fn=to(se,$,Y));let _s=!1,pn=!1,cr=!1;const Et=fn.getUniforms(),rn=Ye.uniforms;if(le.useProgram(fn.program)&&(_s=!0,pn=!0,cr=!0),se.id!==Q&&(Q=se.id,pn=!0),_s||te!==T){le.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Et.setValue(P,"projectionMatrix",T.projectionMatrix),Et.setValue(P,"viewMatrix",T.matrixWorldInverse);const on=Et.map.cameraPosition;on!==void 0&&on.setValue(P,D.setFromMatrixPosition(T.matrixWorld)),Z.logarithmicDepthBuffer&&Et.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Et.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),te!==T&&(te=T,pn=!0,cr=!0)}if(Ye.needsLights&&(mt.state.directionalShadowMap.length>0&&Et.setValue(P,"directionalShadowMap",mt.state.directionalShadowMap,O),mt.state.spotShadowMap.length>0&&Et.setValue(P,"spotShadowMap",mt.state.spotShadowMap,O),mt.state.pointShadowMap.length>0&&Et.setValue(P,"pointShadowMap",mt.state.pointShadowMap,O)),Y.isSkinnedMesh){Et.setOptional(P,Y,"bindMatrix"),Et.setOptional(P,Y,"bindMatrixInverse");const Kt=Y.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Et.setValue(P,"boneTexture",Kt.boneTexture,O))}Y.isBatchedMesh&&(Et.setOptional(P,Y,"batchingTexture"),Et.setValue(P,"batchingTexture",Y._matricesTexture,O),Et.setOptional(P,Y,"batchingIdTexture"),Et.setValue(P,"batchingIdTexture",Y._indirectTexture,O),Et.setOptional(P,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Et.setValue(P,"batchingColorTexture",Y._colorsTexture,O));const En=re.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&it.update(Y,re,fn),(pn||Ye.receiveShadow!==Y.receiveShadow)&&(Ye.receiveShadow=Y.receiveShadow,Et.setValue(P,"receiveShadow",Y.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(rn.envMap.value=Ve,rn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&$.environment!==null&&(rn.envMapIntensity.value=$.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=m1()),pn&&(Et.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ye.needsLights&&Qp(rn,cr),De&&se.fog===!0&&We.refreshFogUniforms(rn,De),We.refreshMaterialUniforms(rn,se,Te,de,E.state.transmissionRenderTarget[T.id]),Yo.upload(P,Ou(Ye),rn,O)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Yo.upload(P,Ou(Ye),rn,O),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Et.setValue(P,"center",Y.center),Et.setValue(P,"modelViewMatrix",Y.modelViewMatrix),Et.setValue(P,"normalMatrix",Y.normalMatrix),Et.setValue(P,"modelMatrix",Y.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Kt=se.uniformsGroups;for(let on=0,Oa=Kt.length;on<Oa;on++){const ji=Kt[on];ye.update(ji,fn),ye.bind(ji,fn)}}return fn}function Qp(T,$){T.ambientLightColor.needsUpdate=$,T.lightProbe.needsUpdate=$,T.directionalLights.needsUpdate=$,T.directionalLightShadows.needsUpdate=$,T.pointLights.needsUpdate=$,T.pointLightShadows.needsUpdate=$,T.spotLights.needsUpdate=$,T.spotLightShadows.needsUpdate=$,T.rectAreaLights.needsUpdate=$,T.hemisphereLights.needsUpdate=$}function em(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,$,re){const se=v.get(T);se.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),v.get(T.texture).__webglTexture=$,v.get(T.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,$){const re=v.get(T);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0};const tm=P.createFramebuffer();this.setRenderTarget=function(T,$=0,re=0){z=T,U=$,F=re;let se=null,Y=!1,De=!1;if(T){const Ne=v.get(T);if(Ne.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(P.FRAMEBUFFER,Ne.__webglFramebuffer),K.copy(T.viewport),X.copy(T.scissor),W=T.scissorTest,le.viewport(K),le.scissor(X),le.setScissorTest(W),Q=-1;return}else if(Ne.__webglFramebuffer===void 0)O.setupRenderTarget(T);else if(Ne.__hasExternalTextures)O.rebindTextures(T,v.get(T.texture).__webglTexture,v.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ke=T.depthTexture;if(Ne.__boundDepthTexture!==Ke){if(Ke!==null&&v.has(Ke)&&(T.width!==Ke.image.width||T.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);const Xe=v.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[$])?se=Xe[$][re]:se=Xe[$],Y=!0):T.samples>0&&O.useMultisampledRTT(T)===!1?se=v.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?se=Xe[re]:se=Xe,K.copy(T.viewport),X.copy(T.scissor),W=T.scissorTest}else K.copy(ie).multiplyScalar(Te).floor(),X.copy(ue).multiplyScalar(Te).floor(),W=Ee;if(re!==0&&(se=tm),le.bindFramebuffer(P.FRAMEBUFFER,se)&&le.drawBuffers(T,se),le.viewport(K),le.scissor(X),le.setScissorTest(W),Y){const Ne=v.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ne.__webglTexture,re)}else if(De){const Ne=$;for(let Ve=0;Ve<T.textures.length;Ve++){const Xe=v.get(T.textures[Ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ve,Xe.__webglTexture,re,Ne)}}else if(T!==null&&re!==0){const Ne=v.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ne.__webglTexture,re)}Q=-1},this.readRenderTargetPixels=function(T,$,re,se,Y,De,ze,Ne=0){if(!(T&&T.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){le.bindFramebuffer(P.FRAMEBUFFER,Ve);try{const Xe=T.textures[Ne],Ke=Xe.format,je=Xe.type;if(!Z.textureFormatReadable(Ke)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(je)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=T.width-se&&re>=0&&re<=T.height-Y&&(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ne),P.readPixels($,re,se,Y,Me.convert(Ke),Me.convert(je),De))}finally{const Xe=z!==null?v.get(z).__webglFramebuffer:null;le.bindFramebuffer(P.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(T,$,re,se,Y,De,ze,Ne=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve)if($>=0&&$<=T.width-se&&re>=0&&re<=T.height-Y){le.bindFramebuffer(P.FRAMEBUFFER,Ve);const Xe=T.textures[Ne],Ke=Xe.format,je=Xe.type;if(!Z.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,at),P.bufferData(P.PIXEL_PACK_BUFFER,De.byteLength,P.STREAM_READ),T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ne),P.readPixels($,re,se,Y,Me.convert(Ke),Me.convert(je),0);const vt=z!==null?v.get(z).__webglFramebuffer:null;le.bindFramebuffer(P.FRAMEBUFFER,vt);const Ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await hx(P,Ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,at),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,De),P.deleteBuffer(at),P.deleteSync(Ct),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,$=null,re=0){const se=Math.pow(2,-re),Y=Math.floor(T.image.width*se),De=Math.floor(T.image.height*se),ze=$!==null?$.x:0,Ne=$!==null?$.y:0;O.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,re,0,0,ze,Ne,Y,De),le.unbindTexture()};const nm=P.createFramebuffer(),im=P.createFramebuffer();this.copyTextureToTexture=function(T,$,re=null,se=null,Y=0,De=null){De===null&&(Y!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=Y,Y=0):De=0);let ze,Ne,Ve,Xe,Ke,je,at,vt,Ct;const Rt=T.isCompressedTexture?T.mipmaps[De]:T.image;if(re!==null)ze=re.max.x-re.min.x,Ne=re.max.y-re.min.y,Ve=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,Ke=re.min.y,je=re.isBox3?re.min.z:0;else{const En=Math.pow(2,-Y);ze=Math.floor(Rt.width*En),Ne=Math.floor(Rt.height*En),T.isDataArrayTexture?Ve=Rt.depth:T.isData3DTexture?Ve=Math.floor(Rt.depth*En):Ve=1,Xe=0,Ke=0,je=0}se!==null?(at=se.x,vt=se.y,Ct=se.z):(at=0,vt=0,Ct=0);const yt=Me.convert($.format),Ye=Me.convert($.type);let mt;$.isData3DTexture?(O.setTexture3D($,0),mt=P.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(O.setTexture2DArray($,0),mt=P.TEXTURE_2D_ARRAY):(O.setTexture2D($,0),mt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,$.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,$.unpackAlignment);const ut=P.getParameter(P.UNPACK_ROW_LENGTH),fn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),_s=P.getParameter(P.UNPACK_SKIP_PIXELS),pn=P.getParameter(P.UNPACK_SKIP_ROWS),cr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Rt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ke),P.pixelStorei(P.UNPACK_SKIP_IMAGES,je);const Et=T.isDataArrayTexture||T.isData3DTexture,rn=$.isDataArrayTexture||$.isData3DTexture;if(T.isDepthTexture){const En=v.get(T),Kt=v.get($),on=v.get(En.__renderTarget),Oa=v.get(Kt.__renderTarget);le.bindFramebuffer(P.READ_FRAMEBUFFER,on.__webglFramebuffer),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,Oa.__webglFramebuffer);for(let ji=0;ji<Ve;ji++)Et&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get(T).__webglTexture,Y,je+ji),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get($).__webglTexture,De,Ct+ji)),P.blitFramebuffer(Xe,Ke,ze,Ne,at,vt,ze,Ne,P.DEPTH_BUFFER_BIT,P.NEAREST);le.bindFramebuffer(P.READ_FRAMEBUFFER,null),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||v.has(T)){const En=v.get(T),Kt=v.get($);le.bindFramebuffer(P.READ_FRAMEBUFFER,nm),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,im);for(let on=0;on<Ve;on++)Et?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,En.__webglTexture,Y,je+on):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,En.__webglTexture,Y),rn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kt.__webglTexture,De,Ct+on):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kt.__webglTexture,De),Y!==0?P.blitFramebuffer(Xe,Ke,ze,Ne,at,vt,ze,Ne,P.COLOR_BUFFER_BIT,P.NEAREST):rn?P.copyTexSubImage3D(mt,De,at,vt,Ct+on,Xe,Ke,ze,Ne):P.copyTexSubImage2D(mt,De,at,vt,Xe,Ke,ze,Ne);le.bindFramebuffer(P.READ_FRAMEBUFFER,null),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else rn?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(mt,De,at,vt,Ct,ze,Ne,Ve,yt,Ye,Rt.data):$.isCompressedArrayTexture?P.compressedTexSubImage3D(mt,De,at,vt,Ct,ze,Ne,Ve,yt,Rt.data):P.texSubImage3D(mt,De,at,vt,Ct,ze,Ne,Ve,yt,Ye,Rt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,De,at,vt,ze,Ne,yt,Ye,Rt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,De,at,vt,Rt.width,Rt.height,yt,Rt.data):P.texSubImage2D(P.TEXTURE_2D,De,at,vt,ze,Ne,yt,Ye,Rt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ut),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_s),P.pixelStorei(P.UNPACK_SKIP_ROWS,pn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,cr),De===0&&$.generateMipmaps&&P.generateMipmap(mt),le.unbindTexture()},this.initRenderTarget=function(T){v.get(T).__webglFramebuffer===void 0&&O.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?O.setTextureCube(T,0):T.isData3DTexture?O.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?O.setTexture2DArray(T,0):O.setTexture2D(T,0),le.unbindTexture()},this.resetState=function(){U=0,F=0,z=null,le.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const Pd={type:"change"},Pu={type:"start"},Wp={type:"end"},No=new Aa,Dd=new fi,v1=Math.cos(70*fx.DEG2RAD),Ft=new k,an=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Il=1e-6;class x1 extends y_{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new ps,this._lastTargetPosition=new k,this._quat=new ps().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rd,this._sphericalDelta=new rd,this._scale=1,this._panOffset=new k,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new k,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=y1.bind(this),this._onPointerDown=_1.bind(this),this._onPointerUp=b1.bind(this),this._onContextMenu=C1.bind(this),this._onMouseWheel=E1.bind(this),this._onKeyDown=w1.bind(this),this._onTouchStart=T1.bind(this),this._onTouchMove=A1.bind(this),this._onMouseDown=M1.bind(this),this._onMouseMove=S1.bind(this),this._interceptControlDown=R1.bind(this),this._interceptControlUp=P1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pd),this.update(),this.state=_t.NONE}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(No.origin.copy(this.object.position),No.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(No.direction))<v1?this.object.lookAt(this.target):(Dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),No.intersectPlane(Dd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Il||this._lastTargetPosition.distanceToSquared(this.target)>Il?(this.dispatchEvent(Pd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function y1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function b1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wp),this.state=_t.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function M1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_t.DOLLY;break;case Ks.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}break;case Ks.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Pu)}function S1(n){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function E1(n){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(n.preventDefault(),this.dispatchEvent(Pu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Wp))}function w1(n){this.enabled!==!1&&this._handleKeyDown(n)}function T1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_t.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_t.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Pu)}function A1(n){switch(this._trackPointer(n),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_t.NONE}}function C1(n){this.enabled!==!1&&n.preventDefault()}function R1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function P1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const qo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Zr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const D1=new Da(-1,1,1,-1,0,1);class L1 extends sn{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const I1=new L1;class Xp{constructor(e){this._mesh=new Sn(I1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,D1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class N1 extends Zr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ha.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ld extends Zr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class U1 extends Zr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class F1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ce);this._width=i.width,this._height=i.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new N1(qo),this.copyPass.material.blending=Zn,this.clock=new x_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ld!==void 0&&(o instanceof Ld?i=!0:o instanceof U1&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class O1 extends Zr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const B1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ar extends Zr{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Qe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,o,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new hn(r,o,{type:bn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new hn(r,o,{type:bn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=B1;this.highPassUniforms=ha.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ha.clone(qo.uniforms),this.blendMaterial=new Yt({uniforms:this.copyUniforms,vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader,premultipliedAlpha:!0,blending:ql,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qe,this._oldClearAlpha=1,this._basic=new Ca,this._fsQuad=new Xp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ar.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ar.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ar.BlurDirectionX=new Ce(1,0);ar.BlurDirectionY=new Ce(0,1);const Uo={object:"#f97316",array:"#06b6d4",string:"#10b981",number:"#6366f1",boolean:"#ec4899",null:"#64748b"},k1=.5,z1=8,zs=3;function V1(n){const e=ke({isInitialized:!1,hoveredNode:null,zoomLevel:1,isDragging:!1,isAutoRotating:!0});let t=null,i=null,s=null,r=null,o=null,a=null,l=new Map,c=null,u=null,h=null,f=null,p=null,g=!1,x=null,m=new fi(new k(0,0,1),0),d=new k;const A=[];function R(pe,ne=26,xe="#ffffff"){const C=document.createElement("canvas"),D=C.getContext("2d");C.width=512,C.height=72,D.clearRect(0,0,C.width,C.height),D.fillStyle="rgba(15, 23, 42, 0.9)";const L=(oe,Z,le,b,v,O)=>{oe.beginPath(),oe.moveTo(Z+O,le),oe.lineTo(Z+b-O,le),oe.quadraticCurveTo(Z+b,le,Z+b,le+O),oe.lineTo(Z+b,le+v-O),oe.quadraticCurveTo(Z+b,le+v,Z+b-O,le+v),oe.lineTo(Z+O,le+v),oe.quadraticCurveTo(Z,le+v,Z,le+v-O),oe.lineTo(Z,le+O),oe.quadraticCurveTo(Z,le,Z+O,le),oe.closePath()};L(D,0,4,C.width,C.height-8,16),D.fill(),D.strokeStyle=xe,D.lineWidth=4,L(D,2,6,C.width-4,C.height-12,14),D.stroke(),D.font=`bold ${ne}px Arial, sans-serif`,D.fillStyle="#ffffff",D.textAlign="left",D.textBaseline="middle";const V=30,j=pe.length>V?pe.slice(0,V)+"...":pe;D.fillText(j,24,C.height/2);const ee=new Qh(C);ee.colorSpace=vn,ee.minFilter=Vt,ee.magFilter=Vt,ee.needsUpdate=!0;const P=new Hc({map:ee,transparent:!0,depthWrite:!1,depthTest:!1});A.push(P,ee);const fe=new Kh(P);return fe.scale.set(6,.85,1),fe.renderOrder=100,fe}function M(pe,ne){const xe=document.createElement("canvas"),C=xe.getContext("2d");xe.width=64,xe.height=64,C.shadowColor=ne,C.shadowBlur=15,C.fillStyle=ne,C.beginPath(),C.arc(32,32,24,0,Math.PI*2),C.fill(),C.shadowBlur=0,C.fillStyle="#ffffff",C.font="bold 40px Arial",C.textAlign="center",C.textBaseline="middle",C.fillText(pe?"−":"+",32,31);const D=new Qh(xe),L=new Hc({map:D,transparent:!0,depthWrite:!1});A.push(L,D);const V=new Kh(L);return V.scale.set(.6,.6,1),V}function E(pe,ne,xe){const C=Uo[pe.type]||Uo.null,D=new Qe(C),L=new us;L.position.set(ne,xe,0);const V=new Au(k1,32,32),j=new a_({color:D,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,emissive:D,emissiveIntensity:.2});A.push(V,j);const ee=new Sn(V,j);ee.castShadow=!0,ee.receiveShadow=!0,L.add(ee);const P=new f_(D,0,8);P.position.set(0,0,1),L.add(P);const fe=`${pe.name}: ${pe.value}`,oe=R(fe,24,C);oe.position.set(4,0,0),L.add(oe);let Z=null;pe.children.length>0&&(Z=M(pe.isExpanded,C),Z.position.set(0,-.8,.5),L.add(Z)),t?.add(L);const le={group:L,mesh:ee,node:pe,label:oe,expandIcon:Z,glow:P,edges:[],worldX:ne,worldY:xe};return l.set(pe.id,le),le}function I(pe,ne){const xe=pe.worldX,C=pe.worldY,D=ne.worldX,L=ne.worldY,V=Uo[pe.node.type]||Uo.null,j=new Qe(V),ee=xe+(D-xe)*.5,P=new Op(new k(xe,C,0),new k(ee,C,0),new k(ee,L,0),new k(D,L,0)),fe=new Cu(P,20,.05,8,!1),oe=new Ca({color:j,transparent:!0,opacity:.4,side:$n});A.push(fe,oe);const Z=new Sn(fe,oe);return c?.add(Z),pe.edges.push(Z),Z}function N(pe,ne,xe){const C=new Map;function D(j){if(!j.isExpanded||j.children.length===0)return zs;let ee=0;return j.children.forEach(P=>{ee+=D(P)}),Math.max(zs,ee)}function L(j,ee,P){if(C.set(j.id,{x:ee,y:P}),!j.isExpanded||j.children.length===0)return zs;const fe=ee+z1,oe=j.children.map(b=>D(b)),Z=oe.reduce((b,v)=>b+v,0);let le=P+(Z-zs)/2;return j.children.forEach((b,v)=>{const O=oe[v]??zs;L(b,fe,le-O/2+zs/2),le-=O}),Z}return{height:L(pe,ne,xe),positions:C}}function H(){if(!t||!p)return;if(l.forEach(C=>{t?.remove(C.group)}),l.clear(),c)for(;c.children.length>0;){const C=c.children[0];if(C){c.remove(C);const D=C;D.geometry&&D.geometry.dispose()}}const{positions:pe}=N(p,0,0);function ne(C){const D=pe.get(C.id);D&&E(C,D.x,D.y),C.isExpanded&&C.children.forEach(L=>ne(L))}ne(p);function xe(C){const D=l.get(C.id);!D||!C.isExpanded||C.children.forEach(L=>{const V=l.get(L.id);V&&(I(D,V),xe(L))})}xe(p)}function y(){const ne=new sn,xe=new Float32Array(1e3*3),C=new Float32Array(1e3*3),D=new Qe;for(let V=0;V<1e3;V++){const j=(Math.random()-.5)*200,ee=(Math.random()-.5)*200,P=(Math.random()-.5)*100-50;xe[V*3]=j,xe[V*3+1]=ee,xe[V*3+2]=P,Math.random()>.5?D.setHex(6514417):D.setHex(1096065),C[V*3]=D.r,C[V*3+1]=D.g,C[V*3+2]=D.b}ne.setAttribute("position",new Mn(xe,3)),ne.setAttribute("color",new Mn(C,3));const L=new Np({size:.5,vertexColors:!0,transparent:!0,opacity:.6,sizeAttenuation:!0});A.push(ne,L),u=new us,u.add(new Hx(ne,L)),t?.add(u)}function w(pe){if(!n.value)return;p=pe;const ne=n.value,xe=ne.clientWidth,C=ne.clientHeight;i=new cn(60,xe/C,.1,1e3),i.position.set(20,0,40),t=new Fx,t.background=new Qe(132631),t.fog=new Eu(132631,.008);const D=new g_(16777215,.4);t.add(D);const L=new m_(16777215,.8);L.position.set(10,10,10),L.castShadow=!0,t.add(L);const V=new h_(6514417,2);V.position.set(-20,20,20),t.add(V),s=new g1({antialias:!0,alpha:!0,powerPreference:"high-performance"}),s.setSize(xe,C),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!0,s.shadowMap.type=op;const j=new O1(t,i),ee=new ar(new Ce(xe,C),1.5,.4,.85);ee.threshold=.2,ee.strength=.8,ee.radius=.5,r=new F1(s),r.addPass(j),r.addPass(ee),ne.appendChild(s.domElement),o=new x1(i,s.domElement),o.enableDamping=!0,o.dampingFactor=.05,o.screenSpacePanning=!0,o.minDistance=5,o.maxDistance=200,o.maxPolarAngle=Math.PI/1.2,h=new __,f=new Ce,c=new us,t.add(c),y(),H(),ne.addEventListener("mousedown",z),ne.addEventListener("mousemove",Q),ne.addEventListener("mouseup",te),ne.addEventListener("click",X),window.addEventListener("resize",W),e.value.isInitialized=!0,ge()}function U(){if(!h||!i||!f)return null;h.setFromCamera(f,i);const pe=Array.from(l.values()).map(xe=>xe.mesh),ne=h.intersectObjects(pe);if(ne.length>0){const xe=ne[0]?.object;for(const[,C]of l)if(C.mesh===xe)return C}return null}function F(pe){if(!n.value||!f)return;const ne=n.value.getBoundingClientRect();f.x=(pe.clientX-ne.left)/ne.width*2-1,f.y=-((pe.clientY-ne.top)/ne.height)*2+1}function z(pe){if(pe.button!==0)return;F(pe);const ne=U();if(ne&&h&&i){g=!0,x=ne,e.value.isDragging=!0,o&&(o.enabled=!1),m.setFromNormalAndCoplanarPoint(new k(0,0,1),ne.group.position);const xe=new k;h.ray.intersectPlane(m,xe)?d.copy(xe).sub(ne.group.position):d.set(0,0,0),n.value&&(n.value.style.cursor="grabbing"),pe.preventDefault(),pe.stopPropagation()}}function Q(pe){if(F(pe),g&&x&&h&&i){const xe=new k;if(h.setFromCamera(f,i),h.ray.intersectPlane(m,xe)){const C=xe.sub(d);x.group.position.copy(C),x.group.position.z=0,x.worldX=C.x,x.worldY=C.y,K()}return}const ne=U();if(l.forEach(xe=>{const C=xe.mesh.material;xe.node!==e.value.hoveredNode&&(xe.glow.intensity=0,C.emissiveIntensity=.2,xe.label.scale.set(6,.85,1),xe.group.scale.setScalar(1))}),ne){const xe=ne.mesh.material;xe.emissiveIntensity=1,ne.glow.intensity=2,ne.group.scale.setScalar(1.1),ne.label.scale.set(7.5,1.05,1),e.value.hoveredNode=ne.node,n.value&&(n.value.style.cursor="pointer")}else e.value.hoveredNode=null,n.value&&(n.value.style.cursor="default")}function te(){g&&(g=!1,x=null,e.value.isDragging=!1,o&&(o.enabled=!0),n.value&&(n.value.style.cursor="default"))}function K(){if(!c)return;for(;c.children.length>0;){const ne=c.children[0];ne&&(c.remove(ne),ne instanceof Sn&&ne.geometry.dispose())}l.forEach(ne=>{ne.edges=[]});function pe(ne){const xe=l.get(ne.id);!xe||!ne.isExpanded||ne.children.forEach(C=>{const D=l.get(C.id);D&&(I(xe,D),pe(C))})}p&&pe(p)}function X(pe){if(e.value.isDragging)return;F(pe);const ne=U();ne&&ne.node.children.length>0&&(ne.node.isExpanded=!ne.node.isExpanded,H())}function W(){if(!n.value||!i||!s||!r)return;const pe=n.value.clientWidth,ne=n.value.clientHeight;i.aspect=pe/ne,i.updateProjectionMatrix(),s.setSize(pe,ne),r.setSize(pe,ne)}function ge(){!s||!t||!i||!o||!r||(a=requestAnimationFrame(ge),g||o.update(),u&&(u.rotation.y+=5e-4),r.render())}function be(){if(i&&o){const pe=i.position.distanceTo(o.target),ne=Math.max(pe*.8,o.minDistance),xe=new k().subVectors(i.position,o.target).normalize();i.position.copy(o.target).add(xe.multiplyScalar(ne)),o.update()}}function Se(){if(i&&o){const pe=i.position.distanceTo(o.target),ne=Math.min(pe*1.25,o.maxDistance),xe=new k().subVectors(i.position,o.target).normalize();i.position.copy(o.target).add(xe.multiplyScalar(ne)),o.update()}}function de(){o&&i&&(i.position.set(20,0,40),o.target.set(0,0,0),o.update())}function Te(pe){pe.isExpanded=!0,pe.children.forEach(Te)}function Ge(pe){pe.isExpanded=!1,pe.children.forEach(Ge)}function qe(){p&&(Te(p),H())}function ie(){p&&(Ge(p),p.isExpanded=!0,H())}function ue(){o&&(o.autoRotate=!o.autoRotate,e.value.isAutoRotating=o.autoRotate)}function Ee(){a!==null&&cancelAnimationFrame(a),n.value&&(n.value.removeEventListener("mousedown",z),n.value.removeEventListener("mousemove",Q),n.value.removeEventListener("mouseup",te),n.value.removeEventListener("click",X)),window.removeEventListener("resize",W),A.forEach(pe=>pe.dispose()),A.length=0,s&&(s.dispose(),n.value&&s.domElement.parentNode===n.value&&n.value.removeChild(s.domElement)),o&&o.dispose(),t=null,i=null,s=null,r=null,o=null,l.clear(),c=null,h=null,f=null,p=null,g=!1,x=null,e.value.isInitialized=!1,e.value.hoveredNode=null,e.value.isDragging=!1}return{state:e,initialize:w,dispose:Ee,zoomIn:be,zoomOut:Se,resetView:de,expandAll:qe,collapseAll:ie,toggleAutoRotate:ue}}const H1={key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},G1={key:0,class:"relative z-10 w-full max-w-[95vw] h-[90vh] bg-black/40 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10"},W1={class:"absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none"},X1={class:"flex items-center gap-6 flex-wrap pointer-events-auto"},$1={class:"flex items-center gap-2 p-1.5 bg-slate-950/50 backdrop-blur-md rounded-2xl ring-1 ring-white/10 shadow-xl"},j1={class:"flex items-center gap-0.5 px-1"},Y1={class:"flex items-center gap-1"},q1={key:0,class:"absolute bottom-8 left-8 z-20 w-80 pointer-events-none"},K1={class:"bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group"},J1={class:"relative z-10"},Z1={class:"flex items-center gap-3 mb-3"},Q1={class:"text-[10px] uppercase tracking-widest text-slate-400 font-bold"},eE={class:"text-white font-bold text-lg leading-tight mb-1 truncate"},tE={class:"mt-3 bg-black/30 rounded-lg p-3 border border-white/5"},nE={class:"text-xs text-slate-300 font-mono break-all leading-relaxed max-h-32 overflow-hidden text-ellipsis"},iE={class:"absolute bottom-8 right-8 z-20 flex flex-col items-end gap-2 pointer-events-none"},sE={class:"bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-2 text-[10px] text-slate-400"},rE=dn({__name:"JsonTreeModal",props:{isOpen:{type:Boolean},jsonData:{type:[String,Number,Boolean,null,Object]}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,s=ke(null),{state:r,initialize:o,dispose:a,zoomIn:l,zoomOut:c,resetView:u,expandAll:h,collapseAll:f,toggleAutoRotate:p}=V1(s);function g(){a(),i("close")}function x(m){m.key==="Escape"&&g()}return Jn(()=>t.isOpen,async m=>{if(m&&t.jsonData!==null){await df();const d=Lv(t.jsonData);o(d),window.addEventListener("keydown",x)}else window.removeEventListener("keydown",x),a()}),(m,d)=>(ce(),Cn(au,{to:"body"},[ft(Nr,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:Ys(()=>[n.isOpen?(ce(),he("div",H1,[_("div",{class:"absolute inset-0 bg-slate-950/90 backdrop-blur-md",onClick:g,"aria-hidden":"true"}),ft(Nr,{"enter-active-class":"transition-all duration-300 ease-out delay-100","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:Ys(()=>[n.isOpen?(ce(),he("div",G1,[_("header",W1,[_("div",X1,[d[12]||(d[12]=_("div",{class:"flex items-center gap-3"},[_("div",{class:"w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-white/10 backdrop-blur-sm"},[_("svg",{class:"w-5 h-5 text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})])]),_("div",null,[_("h2",{id:"modal-title",class:"text-white font-bold text-xl tracking-tight"},"Cosmos JSON"),_("p",{class:"text-xs text-slate-400 font-medium tracking-wide uppercase"},"Explorador 3D")])],-1)),_("div",$1,[_("div",j1,[_("button",{class:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all",onClick:d[0]||(d[0]=(...A)=>S(c)&&S(c)(...A)),title:"Alejar"},[...d[6]||(d[6]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"})],-1)])]),_("button",{class:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all",onClick:d[1]||(d[1]=(...A)=>S(l)&&S(l)(...A)),title:"Acercar"},[...d[7]||(d[7]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1)])])]),d[10]||(d[10]=_("div",{class:"w-px h-6 bg-white/10"},null,-1)),_("button",{class:B(["p-2 rounded-xl transition-all flex items-center gap-2 px-3",S(r).isAutoRotating?"bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/50":"text-slate-400 hover:text-white hover:bg-white/10"]),onClick:d[2]||(d[2]=(...A)=>S(p)&&S(p)(...A)),title:"Alternar rotación automática"},[(ce(),he("svg",{class:B(["w-4 h-4",{"animate-spin-slow":S(r).isAutoRotating}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...d[8]||(d[8]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)])],2)),d[9]||(d[9]=_("span",{class:"text-xs font-medium hidden sm:block"},"Girar",-1))],2),d[11]||(d[11]=_("div",{class:"w-px h-6 bg-white/10"},null,-1)),_("div",Y1,[_("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:d[3]||(d[3]=(...A)=>S(h)&&S(h)(...A))},"Expandir"),_("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:d[4]||(d[4]=(...A)=>S(f)&&S(f)(...A))},"Colapsar"),_("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:d[5]||(d[5]=(...A)=>S(u)&&S(u)(...A))},"Reset")])])]),_("button",{class:"pointer-events-auto p-2.5 text-slate-400 hover:text-white bg-slate-950/50 hover:bg-red-500/20 hover:text-red-200 rounded-full transition-all ring-1 ring-white/10 backdrop-blur-md",onClick:g},[...d[13]||(d[13]=[_("svg",{class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),ft(Nr,{"enter-active-class":"transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)","enter-from-class":"opacity-0 translate-y-4 scale-95","enter-to-class":"opacity-100 translate-y-0 scale-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100 translate-y-0 scale-100","leave-to-class":"opacity-0 translate-y-4 scale-95"},{default:Ys(()=>[S(r).hoveredNode?(ce(),he("div",q1,[_("div",K1,[d[14]||(d[14]=_("div",{class:"absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 blur-3xl rounded-full group-hover:bg-primary-500/30 transition-colors"},null,-1)),_("div",J1,[_("div",Z1,[_("div",{class:B(["w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]",{"text-orange-400 bg-orange-400":S(r).hoveredNode.type==="object","text-cyan-400 bg-cyan-400":S(r).hoveredNode.type==="array","text-emerald-400 bg-emerald-400":S(r).hoveredNode.type==="string","text-blue-400 bg-blue-400":S(r).hoveredNode.type==="number","text-pink-400 bg-pink-400":S(r).hoveredNode.type==="boolean","text-slate-400 bg-slate-400":S(r).hoveredNode.type==="null"}])},null,2),_("span",Q1,$e(S(r).hoveredNode.type),1)]),_("h3",eE,$e(S(r).hoveredNode.name),1),_("div",tE,[_("p",nE,$e(S(r).hoveredNode.value),1)])])])])):nt("",!0)]),_:1}),_("div",iE,[_("div",sE,[d[15]||(d[15]=_("span",{class:"w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"},null,-1)),_("span",null,$e(S(r).zoomLevel?Math.round(S(r).zoomLevel*100):0)+"% Zoom",1)])]),_("div",{ref_key:"containerRef",ref:s,class:"w-full h-full cursor-grab active:cursor-grabbing bg-slate-950"},null,512)])):nt("",!0)]),_:1})])):nt("",!0)]),_:1})]))}}),oE=du(rE,[["__scopeId","data-v-f0b10e93"]]),aE={class:"mb-4 flex items-center justify-between flex-wrap gap-2"},lE={class:"flex items-center gap-2"},cE={key:0,class:"flex items-center gap-1.5"},uE=["title","aria-label"],hE={key:0,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},dE={key:1,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},fE={key:0,class:"p-6 animate-fade-in",role:"alert"},pE={class:"flex-1 min-w-0"},mE={key:1,class:"flex flex-col items-center justify-center h-full py-16 px-6 animate-fade-in"},gE={key:2,class:"p-4 animate-fade-in"},vE=dn({__name:"JsonViewer",props:{jsonText:{},theme:{}},setup(n){const e=n,t=He(()=>e.theme.name==="dark"||e.theme.name==="midnight"),{parsedData:i,errorMessage:s,setJsonText:r}=np(e.jsonText);Jn(()=>e.jsonText,M=>{r(M)});const o=He(()=>i.value!==null),a=He(()=>s.value!==null),l=He(()=>!e.jsonText.trim()),c=ke(!1),u=ke(0),h=ke(2);function f(){c.value=!0}function p(){c.value=!1}function g(){h.value=999,u.value++}function x(){h.value=0,u.value++}function m(){h.value=2,u.value++}const d=ke(!1);function A(){d.value=!d.value}function R(M){M.key==="Escape"&&d.value&&(d.value=!1)}return ms(()=>window.addEventListener("keydown",R)),gs(()=>window.removeEventListener("keydown",R)),(M,E)=>(ce(),Cn(au,{to:"body",disabled:!d.value},[_("div",{class:B(d.value?"fixed inset-0 z-50 flex flex-col p-4 md:p-6":"flex flex-col h-full")},[d.value?(ce(),he("div",{key:0,class:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:E[0]||(E[0]=I=>d.value=!1)})):nt("",!0),_("div",{class:B(d.value?["relative z-10 flex-1 flex flex-col min-h-0 rounded-2xl p-4 md:p-6 overflow-hidden",n.theme.colors.bgCard,n.theme.colors.shadow]:"flex flex-col h-full")},[_("div",aE,[_("div",lE,[_("div",{class:B(["w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",t.value?"bg-gradient-to-br from-cyan-400 to-cyan-500":"bg-gradient-to-br from-cyan-500 to-cyan-600"])},[...E[1]||(E[1]=[_("svg",{class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1)])],2),_("h2",{class:B(["text-lg font-semibold transition-colors duration-300",n.theme.colors.textPrimary])},"Visualizador",2)]),o.value?(ce(),he("div",cE,[_("div",{class:B(["flex items-center gap-0.5 p-1 rounded-lg transition-colors duration-300",t.value?"bg-slate-700":"bg-gray-100"])},[_("button",{class:B(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Expandir todo","aria-label":"Expandir todos los nodos",onClick:g},[...E[2]||(E[2]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"})],-1)])],2),_("button",{class:B(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Colapsar todo","aria-label":"Colapsar todos los nodos",onClick:x},[...E[3]||(E[3]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"})],-1)])],2),_("button",{class:B(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Restablecer vista","aria-label":"Restablecer vista por defecto",onClick:m},[...E[4]||(E[4]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])],2)],2),_("button",{class:B(["inline-flex items-center gap-1.5 px-3 py-1.5 text-white text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 transition-all shadow-sm",t.value?"bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500":"bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"]),onClick:f,title:"Abrir visualización 3D","aria-label":"Abrir visualización 3D del árbol JSON"},[...E[5]||(E[5]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})],-1),_("span",null,"Vista 3D",-1)])],2),_("button",{onClick:A,class:B(["inline-flex items-center p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",t.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:d.value?"Salir de pantalla completa":"Pantalla completa","aria-label":d.value?"Salir de pantalla completa":"Pantalla completa"},[d.value?(ce(),he("svg",dE,[...E[7]||(E[7]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9L4 4m0 0v4m0-4h4m6 0l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m6 0l5 5m0 0v-4m0 4h-4"},null,-1)])])):(ce(),he("svg",hE,[...E[6]||(E[6]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"},null,-1)])]))],10,uE)])):nt("",!0)]),_("div",{class:B(["flex-1 overflow-auto rounded-xl ring-1 shadow-inner-soft transition-colors duration-300",t.value?"bg-slate-800/50 ring-slate-700":"bg-surface-secondary ring-gray-100"])},[a.value?(ce(),he("div",fE,[_("div",{class:B(["flex items-start gap-4 p-4 border rounded-xl transition-colors duration-300",t.value?"bg-red-900/30 border-red-800":"bg-red-50 border-red-200"])},[_("div",{class:B(["w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300",t.value?"bg-red-900/50":"bg-red-100"])},[(ce(),he("svg",{class:B(["w-5 h-5",t.value?"text-red-400":"text-red-600"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...E[8]||(E[8]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])],2))],2),_("div",pE,[_("p",{class:B(["font-semibold",t.value?"text-red-300":"text-red-800"])},"Error de sintaxis JSON",2),_("p",{class:B(["text-sm mt-1 break-words",t.value?"text-red-400":"text-red-600"])},$e(S(s)),3)])],2)])):l.value?(ce(),he("div",mE,[_("div",{class:B(["w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300",t.value?"bg-gradient-to-br from-slate-700 to-slate-800":"bg-gradient-to-br from-gray-100 to-gray-200"])},[(ce(),he("svg",{class:B(["w-10 h-10",t.value?"text-slate-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...E[9]||(E[9]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)])],2))],2),_("p",{class:B(["text-lg font-medium mb-1 transition-colors duration-300",t.value?"text-slate-300":"text-gray-700"])},"Sin datos JSON",2),_("p",{class:B(["text-sm text-center max-w-xs transition-colors duration-300",t.value?"text-slate-500":"text-gray-500"])}," Ingresa o pega JSON válido en el panel de entrada para visualizar su estructura ",2)])):o.value?(ce(),he("div",gE,[(ce(),Cn(Rv,{key:u.value,data:S(i),name:"root",isRoot:!0,depth:0,initialExpandDepth:h.value,lineNumber:1,theme:n.theme},null,8,["data","initialExpandDepth","theme"]))])):nt("",!0)],2),ft(oE,{isOpen:c.value,jsonData:S(i),onClose:p},null,8,["isOpen","jsonData"])],2)],2)],8,["disabled"]))}}),xE={class:"mb-6 md:mb-8"},_E={class:"flex items-center justify-between"},yE={class:"w-32"},bE={class:"flex-1 text-center"},ME={class:"flex justify-end w-32"},Qr=dn({__name:"ToolHeader",props:{toolName:{},toolDescription:{}},emits:["back"],setup(n){const{currentTheme:e}=ni(),t=He(()=>e.value.name==="dark"||e.value.name==="midnight");return(i,s)=>(ce(),he("header",xE,[_("div",_E,[_("div",yE,[_("button",{class:B(["inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",[t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-800 hover:bg-black/5"]]),onClick:s[0]||(s[0]=r=>i.$emit("back")),"aria-label":"Go back to home"},[...s[1]||(s[1]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),It(" Home ",-1)])],2)]),_("div",bE,[_("h1",{class:B(["text-2xl md:text-3xl font-bold bg-clip-text text-transparent transition-colors duration-300",[t.value?"bg-gradient-to-r from-white via-gray-200 to-white":"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"]])},$e(n.toolName),3),n.toolDescription?(ce(),he("p",{key:0,class:B(["text-xs md:text-sm font-medium mt-0.5 transition-colors duration-300",S(e).colors.textMuted])},$e(n.toolDescription),3)):nt("",!0)]),_("div",ME,[ft(tp)])])]))}}),SE={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},EE={class:"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-hidden"},wE={class:"mt-4 text-center"},TE=dn({__name:"JsonViewerView",emits:["back"],setup(n){const{currentTheme:e}=ni(),t=ke(""),i=He(()=>e.value.name==="dark"||e.value.name==="midnight");return(s,r)=>(ce(),he("div",SE,[ft(Qr,{"tool-name":"JSON Viewer","tool-description":"Visualize and explore JSON structures interactively",onBack:r[0]||(r[0]=o=>s.$emit("back"))}),_("main",EE,[_("section",{class:B(["rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300",[S(e).colors.bgCard,S(e).colors.shadow,S(e).colors.bgCardHover,i.value?"ring-1 ring-white/10":"border border-white/50"]]),"aria-label":"JSON input panel"},[ft(bv,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=o=>t.value=o),theme:S(e)},null,8,["modelValue","theme"])],2),_("section",{class:B(["rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300",[S(e).colors.bgCard,S(e).colors.shadow,S(e).colors.bgCardHover,i.value?"ring-1 ring-white/10":"border border-white/50"]]),"aria-label":"JSON viewer panel"},[ft(vE,{jsonText:t.value,theme:S(e)},null,8,["jsonText","theme"])],2)]),_("footer",wE,[_("p",{class:B(["text-xs transition-colors duration-300",S(e).colors.textMuted])},[r[2]||(r[2]=It(" Press ",-1)),_("kbd",{class:B(["px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300",i.value?"bg-slate-800 text-slate-400":"bg-gray-100 text-gray-500"])},"Ctrl",2),r[3]||(r[3]=It(" + ",-1)),_("kbd",{class:B(["px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300",i.value?"bg-slate-800 text-slate-400":"bg-gray-100 text-gray-500"])},"V",2),r[4]||(r[4]=It(" to paste and auto-format ",-1))],2)])]))}}),AE={key:1,class:"min-w-full w-max"},CE={class:"px-2 pt-0.5 whitespace-pre"},RE={key:2},Id=dn({__name:"DiffOutputPanel",props:{lines:{},currentPairIndex:{},side:{}},setup(n,{expose:e}){const t=ke();e({scrollEl:t});const{currentTheme:i}=ni(),s=He(()=>i.value.name==="dark"||i.value.name==="midnight");return(r,o)=>(ce(),he("div",{ref_key:"scrollEl",ref:t,class:B(["h-full overflow-auto font-mono text-sm rounded-xl transition-colors duration-300",[S(i).colors.bgCard,s.value?"ring-1 ring-white/10":"border border-white/50"]])},[n.lines.length===0?(ce(),he("div",{key:0,class:B(["h-full flex items-center justify-center flex-col gap-2 transition-colors duration-300",S(i).colors.textMuted])},[...o[0]||(o[0]=[_("svg",{class:"w-8 h-8 opacity-40",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})],-1),_("span",{class:"text-xs"},"No result",-1)])],2)):(ce(),he("div",AE,[(ce(!0),he(Mt,null,On(n.lines,(a,l)=>(ce(),he("div",{key:l,class:B(["flex items-stretch min-h-[1.75rem] leading-7 w-full transition-colors duration-150",[a.type==="equal"?s.value?"bg-transparent text-gray-300":"bg-white/60 text-gray-700":a.type==="removed"?s.value?"bg-red-900/50 border-l-2 border-red-400 text-red-200":"bg-red-50 border-l-2 border-red-400 text-red-900":a.type==="added"?s.value?"bg-green-900/50 border-l-2 border-green-400 text-green-200":"bg-green-50 border-l-2 border-green-400 text-green-900":a.type==="modified"?s.value?"bg-yellow-900/40 border-l-2 border-yellow-400 text-yellow-100":"bg-yellow-50 border-l-2 border-amber-400 text-yellow-900":s.value?"bg-white/5 text-gray-500":"bg-gray-50/80 text-gray-300",l===n.currentPairIndex?s.value?"ring-1 ring-inset ring-primary-400/70":"ring-1 ring-inset ring-primary-500/50":""]])},[_("span",{class:B(["select-none w-10 flex-shrink-0 text-right pr-3 pt-0.5 text-[11px] transition-colors duration-300",[a.type==="empty"?"opacity-0":"",s.value?"text-gray-600":"text-gray-400"]])},$e(a.lineNumber??""),3),_("span",CE,[a.type==="empty"?(ce(),he("span",{key:0,class:B(["transition-colors duration-300",s.value?"text-gray-700":"text-gray-300"])},"···",2)):a.type==="modified"&&a.chars?(ce(!0),he(Mt,{key:1},On(a.chars,(c,u)=>(ce(),he(Mt,{key:u},[n.side==="left"&&c.type!=="added"?(ce(),he("span",{key:0,class:B(c.type==="removed"?s.value?"bg-red-500/50 text-red-100 line-through":"bg-red-200 text-red-800 line-through":"")},$e(c.text),3)):n.side==="right"&&c.type!=="removed"?(ce(),he("span",{key:1,class:B(c.type==="added"?s.value?"bg-green-500/50 text-green-100":"bg-green-200 text-green-800":"")},$e(c.text),3)):nt("",!0)],64))),128)):(ce(),he("span",RE,$e(a.content),1))])],2))),128))]))],2))}});function $p(n,e,t){const i=n.length,s=e.length,r=Array.from({length:i+1},()=>new Array(s+1).fill(0));for(let o=1;o<=i;o++)for(let a=1;a<=s;a++)r[o][a]=t(n[o-1],e[a-1])?r[o-1][a-1]+1:Math.max(r[o-1][a],r[o][a-1]);return r}function PE(n,e){const t=n.length,i=e.length,s=$p(n,e,(l,c)=>l===c),r=[];let o=t,a=i;for(;o>0||a>0;)o>0&&a>0&&n[o-1]===e[a-1]?(r.unshift([n[o-1],e[a-1]]),o--,a--):a>0&&(o===0||s[o][a-1]>=s[o-1][a])?(r.unshift([null,e[a-1]]),a--):o>0&&(r.unshift([n[o-1],null]),o--);return r}function DE(n,e){const t=n.split(""),i=e.split("");if(t.length===0&&i.length===0)return[{type:"equal",text:""}];if(t.length===0)return i.map(u=>({type:"added",text:u}));if(i.length===0)return t.map(u=>({type:"removed",text:u}));const s=t.length,r=i.length,o=$p(t,i,(u,h)=>u.toLowerCase()===h.toLowerCase()),a=[];let l=s,c=r;for(;l>0||c>0;)l>0&&c>0&&t[l-1].toLowerCase()===i[c-1].toLowerCase()?(a.unshift({type:"equal",text:t[l-1]}),l--,c--):c>0&&(l===0||o[l][c-1]>=o[l-1][c])?(a.unshift({type:"added",text:i[c-1]}),c--):l>0&&(a.unshift({type:"removed",text:t[l-1]}),l--);return a}function LE(n,e,t){const i=Math.min(n.length,e.length);for(let s=0;s<i;s++)t.push({type:"modified",chars:DE(n[s],e[s])});for(let s=i;s<n.length;s++)t.push({type:"removed",content:n[s]});for(let s=i;s<e.length;s++)t.push({type:"added",content:e[s]})}function IE(n,e){const t=n.split(`
`),i=e.split(`
`),s=PE(t,i),r=[];let o=0;for(;o<s.length;){const[a,l]=s[o];if(a!==null&&l!==null){r.push({type:"equal",content:a}),o++;continue}const c=[];for(;o<s.length&&s[o][0]!==null&&s[o][1]===null;)c.push(s[o][0]),o++;const u=[];for(;o<s.length&&s[o][0]===null&&s[o][1]!==null;)u.push(s[o][1]),o++;LE(c,u,r)}return r}function NE(n){const e={added:0,removed:0,modified:0,equal:0};for(const t of n)t.type==="modified"?e.modified++:t.content?.trim()&&e[t.type]++;return e}function UE(n){const e=[];let t=1,i=1;for(const s of n){const r=s.content??"";s.type==="equal"?e.push({left:{lineNumber:t++,type:"equal",content:r},right:{lineNumber:i++,type:"equal",content:r},isDiff:!1}):s.type==="removed"?e.push({left:{lineNumber:t++,type:"removed",content:r},right:{lineNumber:null,type:"empty"},isDiff:!0}):s.type==="added"?e.push({left:{lineNumber:null,type:"empty"},right:{lineNumber:i++,type:"added",content:r},isDiff:!0}):s.type==="modified"&&e.push({left:{lineNumber:t++,type:"modified",chars:s.chars},right:{lineNumber:i++,type:"modified",chars:s.chars},isDiff:!0})}return e}function FE(){const n=ke(""),e=ke(""),t=ke([]),i=ke({added:0,removed:0,modified:0,equal:0}),s=He(()=>t.value.length>0),r=He(()=>t.value.reduce((p,g,x)=>(g.isDiff&&p.push(x),p),[])),o=ke(-1),a=He(()=>r.value[o.value]??-1),l=He(()=>t.value.map(p=>p.left)),c=He(()=>t.value.map(p=>p.right));function u(){if(!n.value.trim()&&!e.value.trim())return;const p=IE(n.value,e.value);t.value=UE(p),i.value=NE(p),o.value=r.value.length>0?0:-1}function h(){r.value.length!==0&&(o.value=(o.value+1)%r.value.length)}function f(){r.value.length!==0&&(o.value=(o.value-1+r.value.length)%r.value.length)}return{originalText:n,modifiedText:e,renderedPairs:t,stats:i,hasResult:s,diffIndices:r,currentDiffStep:o,currentPairIndex:a,leftLines:l,rightLines:c,compare:u,goToNext:h,goToPrev:f}}const OE={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},BE={class:"flex-1 flex flex-col gap-3 overflow-hidden"},kE={class:"grid grid-cols-1 lg:grid-cols-2 gap-3",style:{"flex-shrink":"0"}},zE={class:"flex flex-col gap-1"},VE={class:"flex flex-col gap-1"},HE={class:"flex items-center gap-3 flex-wrap flex-shrink-0"},GE={class:"flex items-center gap-2 text-xs font-medium"},WE={key:0,class:"flex items-center gap-1 ml-auto"},XE={class:"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 overflow-hidden"},$E=dn({__name:"TextCompareView",emits:["back"],setup(n){const{currentTheme:e}=ni(),t=He(()=>e.value.name==="dark"||e.value.name==="midnight"),{originalText:i,modifiedText:s,stats:r,hasResult:o,diffIndices:a,currentDiffStep:l,currentPairIndex:c,leftLines:u,rightLines:h,compare:f,goToNext:p,goToPrev:g}=FE(),x=ke(),m=ke();let d=!1;function A(){if(d)return;d=!0;const M=m.value?.scrollEl;M&&x.value?.scrollEl&&(M.scrollTop=x.value.scrollEl.scrollTop),d=!1}function R(){if(d)return;d=!0;const M=x.value?.scrollEl;M&&m.value?.scrollEl&&(M.scrollTop=m.value.scrollEl.scrollTop),d=!1}return ms(()=>{x.value?.scrollEl?.addEventListener("scroll",A),m.value?.scrollEl?.addEventListener("scroll",R)}),gs(()=>{x.value?.scrollEl?.removeEventListener("scroll",A),m.value?.scrollEl?.removeEventListener("scroll",R)}),Jn(c,M=>{if(M<0)return;const E=x.value?.scrollEl,I=m.value?.scrollEl;if(!E||!I)return;const N=28,H=Math.max(0,M*N-E.clientHeight/2+N/2);E.scrollTop=H,I.scrollTop=H}),(M,E)=>(ce(),he("div",OE,[ft(Qr,{"tool-name":"Text Compare","tool-description":"Compare two texts with line and character-level diff",onBack:E[0]||(E[0]=I=>M.$emit("back"))}),_("div",BE,[_("div",kE,[_("div",zE,[_("label",{class:B(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",S(e).colors.textMuted])},"Original",2),Bi(_("textarea",{"onUpdate:modelValue":E[1]||(E[1]=I=>Dt(i)?i.value=I:null),placeholder:"Paste original text here...",rows:"6",class:B(["w-full resize-none rounded-xl p-3 font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50",[S(e).colors.bgCard,S(e).colors.textPrimary,t.value?"ring-1 ring-white/10 placeholder:text-gray-600":"border border-white/50 placeholder:text-gray-300"]])},null,2),[[er,S(i)]])]),_("div",VE,[_("label",{class:B(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",S(e).colors.textMuted])},"Modified",2),Bi(_("textarea",{"onUpdate:modelValue":E[2]||(E[2]=I=>Dt(s)?s.value=I:null),placeholder:"Paste modified text here...",rows:"6",class:B(["w-full resize-none rounded-xl p-3 font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50",[S(e).colors.bgCard,S(e).colors.textPrimary,t.value?"ring-1 ring-white/10 placeholder:text-gray-600":"border border-white/50 placeholder:text-gray-300"]])},null,2),[[er,S(s)]])])]),_("div",HE,[_("button",{class:B(["px-4 py-1.5 rounded-lg text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",t.value?"bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500":"bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600"]),onClick:E[3]||(E[3]=(...I)=>S(f)&&S(f)(...I))}," Compare ",2),S(o)?(ce(),he(Mt,{key:0},[_("div",GE,[S(r).added>0?(ce(),he("span",{key:0,class:B(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-green-900/50 text-green-400":"bg-green-100 text-green-700"])},"+"+$e(S(r).added)+" added",3)):nt("",!0),S(r).removed>0?(ce(),he("span",{key:1,class:B(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-red-900/50 text-red-400":"bg-red-100 text-red-700"])},"-"+$e(S(r).removed)+" removed",3)):nt("",!0),S(r).modified>0?(ce(),he("span",{key:2,class:B(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-amber-900/50 text-amber-400":"bg-amber-100 text-amber-700"])},"~"+$e(S(r).modified)+" modified",3)):nt("",!0),S(r).equal>0?(ce(),he("span",{key:3,class:B(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-white/10 text-gray-400":"bg-gray-100 text-gray-500"])},"="+$e(S(r).equal)+" equal",3)):nt("",!0)]),S(a).length>0?(ce(),he("div",WE,[_("button",{class:B(["w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200",t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-800 hover:bg-black/5"]),"aria-label":"Previous diff",onClick:E[4]||(E[4]=(...I)=>S(g)&&S(g)(...I))},[...E[6]||(E[6]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1)])],2),_("span",{class:B(["text-xs font-mono px-2 transition-colors duration-300",S(e).colors.textMuted])},$e(S(l)+1)+" / "+$e(S(a).length),3),_("button",{class:B(["w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200",t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-800 hover:bg-black/5"]),"aria-label":"Next diff",onClick:E[5]||(E[5]=(...I)=>S(p)&&S(p)(...I))},[...E[7]||(E[7]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)])],2)])):nt("",!0)],64)):nt("",!0)]),_("div",XE,[ft(Id,{ref_key:"leftPanel",ref:x,lines:S(u),"current-pair-index":S(c),side:"left"},null,8,["lines","current-pair-index"]),ft(Id,{ref_key:"rightPanel",ref:m,lines:S(h),"current-pair-index":S(c),side:"right"},null,8,["lines","current-pair-index"])])])]))}}),jE=50*1024*1024;function YE(n,e){const t=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return e==="CRLF"?t.replace(/\n/g,`\r
`):t}function qE(n,e){const t=YE(n,e),i=new TextEncoder().encode(t);return btoa(Array.from(i,s=>String.fromCharCode(s)).join(""))}function KE(n){return new Promise((e,t)=>{const i=new FileReader;i.onload=()=>{const s=i.result;e(s.split(",")[1]??"")},i.onerror=()=>t(new Error("Failed to read file")),i.readAsDataURL(n)})}function JE(n){const e=atob(n.replace(/\s/g,"")),t=Uint8Array.from(e,i=>i.charCodeAt(0));return new TextDecoder().decode(t)}function ZE(n){return new Promise((e,t)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=()=>t(new Error("Failed to read file")),i.readAsText(n)})}function QE(n,e){const t=new Blob([n],{type:"text/plain"}),i=URL.createObjectURL(t),s=document.createElement("a");s.href=i,s.download=e,s.click(),URL.revokeObjectURL(i)}function jp(n){return n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/(1024*1024)).toFixed(1)} MB`}function ew(){const n=ke("encode"),e=ke("text"),t=ke("LF"),i=ke(""),s=ke(""),r=ke(null),o=ke(!1),a=ke(null),l=ke(!1),c=He(()=>s.value.length>0),u=He(()=>e.value==="text"?i.value.trim().length>0:r.value!==null),h=He(()=>n.value==="encode"&&e.value==="text"),f=He(()=>c.value&&(e.value==="file"||n.value==="decode")),p=He(()=>n.value==="encode"?r.value?`${r.value.name}.b64.txt`:"encoded.txt":r.value&&r.value.name.replace(/\.b64\.txt$|\.txt$/,"")||"decoded.txt");async function g(){a.value=null,s.value="",o.value=!0;try{if(n.value==="encode")e.value==="text"?s.value=qE(i.value,t.value):r.value&&(s.value=await KE(r.value));else{if(e.value==="file"&&r.value&&r.value.size>jE){a.value=`File too large (max 50 MB). Selected: ${jp(r.value.size)}`;return}const A=e.value==="text"?i.value:await ZE(r.value);s.value=JE(A)}}catch{a.value=n.value==="decode"?"Invalid Base64 input — check the content and try again.":"Failed to encode the input."}finally{o.value=!1}}async function x(){s.value&&(await navigator.clipboard.writeText(s.value),l.value=!0,setTimeout(()=>{l.value=!1},2e3))}function m(){s.value&&QE(s.value,p.value)}function d(){i.value="",s.value="",r.value=null,a.value=null,l.value=!1}return Jn([n,e],d),{mode:n,inputType:e,lineEnding:t,inputText:i,outputText:s,selectedFile:r,isProcessing:o,error:a,hasCopied:l,hasOutput:c,canProcess:u,showLineEnding:h,showDownload:f,outputFilename:p,process:g,copyOutput:x,downloadOutput:m,clearAll:d}}const tw={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},nw={class:"flex-1 flex flex-col gap-4 overflow-hidden"},iw={class:"flex justify-center flex-shrink-0"},sw={class:"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden"},rw={class:"flex items-center justify-between flex-shrink-0"},ow=["placeholder"],aw={key:0,class:"flex items-center gap-2 flex-shrink-0"},lw={class:"text-center"},cw={class:"text-center"},uw={class:"flex flex-col gap-2 flex-shrink-0"},hw=["disabled"],dw={key:0},fw={key:1},pw={class:"flex items-center justify-between flex-shrink-0"},mw={class:"flex items-center gap-1"},gw={key:0,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},vw={key:1,class:"w-3.5 h-3.5 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},xw=["value"],_w={key:2,class:"flex-shrink-0 flex justify-end"},yw=dn({__name:"Base64View",emits:["back"],setup(n){const{currentTheme:e}=ni(),t=He(()=>e.value.name==="dark"||e.value.name==="midnight"),{mode:i,inputType:s,lineEnding:r,inputText:o,outputText:a,selectedFile:l,isProcessing:c,error:u,hasCopied:h,hasOutput:f,canProcess:p,showLineEnding:g,showDownload:x,process:m,copyOutput:d,downloadOutput:A,clearAll:R}=ew(),M=ke(!1),E=ke();function I(X){M.value=!1;const W=X.dataTransfer?.files[0];W&&(l.value=W)}function N(X){const W=X.target.files?.[0];W&&(l.value=W)}function H(){l.value=null,E.value&&(E.value.value="")}const y=He(()=>[e.value.colors.bgCard,e.value.colors.shadow,t.value?"ring-1 ring-white/10":"border border-white/50"]),w=He(()=>t.value?"bg-white/15 text-white":"bg-white text-gray-900 shadow-sm"),U=He(()=>t.value?"text-gray-400 hover:text-gray-200":"text-gray-500 hover:text-gray-800"),F=He(()=>t.value?"bg-white/15 text-white":"bg-primary-600 text-white"),z=He(()=>t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-700 hover:bg-black/5"),Q=He(()=>t.value?"bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500":"bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600"),te=He(()=>t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-700 hover:bg-black/5"),K=He(()=>["w-full font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50 rounded-xl p-3",e.value.colors.bgCard,e.value.colors.textPrimary,t.value?"ring-1 ring-white/10 placeholder:text-gray-600":"border border-white/50 placeholder:text-gray-300"]);return(X,W)=>(ce(),he("div",tw,[ft(Qr,{"tool-name":"Base64","tool-description":"Encode and decode text or files to/from Base64",onBack:W[0]||(W[0]=ge=>X.$emit("back"))}),_("div",nw,[_("div",iw,[_("div",{class:B(["inline-flex rounded-xl p-1 gap-1 transition-colors duration-300",t.value?"bg-white/10":"bg-black/5"])},[_("button",{class:B(["px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200",S(i)==="encode"?w.value:U.value]),onClick:W[1]||(W[1]=ge=>i.value="encode")},"Encode",2),_("button",{class:B(["px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200",S(i)==="decode"?w.value:U.value]),onClick:W[2]||(W[2]=ge=>i.value="decode")},"Decode",2)],2)]),_("div",sw,[_("div",{class:B(["rounded-2xl p-4 md:p-5 flex flex-col gap-3 overflow-hidden transition-all duration-300",y.value])},[_("div",rw,[_("span",{class:B(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",S(e).colors.textMuted])},"Input",2),_("div",{class:B(["inline-flex rounded-lg p-0.5 gap-0.5 transition-colors duration-300",t.value?"bg-white/10":"bg-black/5"])},[_("button",{class:B(["px-3 py-1 rounded-md text-xs font-medium transition-all duration-200",S(s)==="text"?F.value:z.value]),onClick:W[3]||(W[3]=ge=>s.value="text")},"Text",2),_("button",{class:B(["px-3 py-1 rounded-md text-xs font-medium transition-all duration-200",S(s)==="file"?F.value:z.value]),onClick:W[4]||(W[4]=ge=>s.value="file")},"File",2)],2)]),S(s)==="text"?(ce(),he(Mt,{key:0},[Bi(_("textarea",{"onUpdate:modelValue":W[5]||(W[5]=ge=>Dt(o)?o.value=ge:null),placeholder:S(i)==="encode"?"Paste text to encode...":"Paste Base64 to decode...",class:B(["flex-1 resize-none",K.value])},null,10,ow),[[er,S(o)]]),S(g)?(ce(),he("div",aw,[_("span",{class:B(["text-xs transition-colors duration-300",S(e).colors.textMuted])},"Line endings:",2),_("div",{class:B(["inline-flex rounded-lg p-0.5 gap-0.5",t.value?"bg-white/10":"bg-black/5"])},[_("button",{class:B(["px-2.5 py-0.5 rounded-md text-xs font-mono font-medium transition-all duration-200",S(r)==="LF"?F.value:z.value]),onClick:W[6]||(W[6]=ge=>r.value="LF")},"LF",2),_("button",{class:B(["px-2.5 py-0.5 rounded-md text-xs font-mono font-medium transition-all duration-200",S(r)==="CRLF"?F.value:z.value]),onClick:W[7]||(W[7]=ge=>r.value="CRLF")},"CRLF",2)],2)])):nt("",!0)],64)):(ce(),he(Mt,{key:1},[S(l)?(ce(),he("div",{key:1,class:B(["flex-1 rounded-xl flex flex-col items-center justify-center gap-3 p-6 transition-colors duration-300",t.value?"bg-white/5":"bg-gray-50"])},[(ce(),he("svg",{class:B(["w-12 h-12 transition-colors duration-300",t.value?"text-primary-400":"text-primary-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...W[17]||(W[17]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)])],2)),_("div",cw,[_("p",{class:B(["text-sm font-medium truncate max-w-[200px] transition-colors duration-300",S(e).colors.textPrimary])},$e(S(l).name),3),_("p",{class:B(["text-xs mt-0.5 transition-colors duration-300",S(e).colors.textMuted])},$e(S(jp)(S(l).size)),3)]),_("button",{class:B(["text-xs px-3 py-1 rounded-lg transition-all duration-200",te.value]),onClick:H},"Remove file",2)],2)):(ce(),he("div",{key:0,class:B(["flex-1 rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200",[M.value?t.value?"border-primary-400 bg-primary-900/20":"border-primary-500 bg-primary-50":t.value?"border-white/20 hover:border-white/40":"border-gray-200 hover:border-gray-300"]]),onDragover:W[8]||(W[8]=tr(ge=>M.value=!0,["prevent"])),onDragleave:W[9]||(W[9]=ge=>M.value=!1),onDrop:tr(I,["prevent"]),onClick:W[10]||(W[10]=ge=>E.value?.click())},[(ce(),he("svg",{class:B(["w-10 h-10 transition-colors duration-300",t.value?"text-gray-600":"text-gray-300"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...W[15]||(W[15]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"},null,-1)])],2)),_("div",lw,[_("p",{class:B(["text-sm font-medium transition-colors duration-300",S(e).colors.textSecondary])},[...W[16]||(W[16]=[It("Drop file here or ",-1),_("span",{class:"text-primary-500"},"browse",-1)])],2),S(i)==="decode"?(ce(),he("p",{key:0,class:B(["text-xs mt-1 transition-colors duration-300",S(e).colors.textMuted])},"Max 50 MB",2)):nt("",!0)]),_("input",{ref_key:"fileInput",ref:E,type:"file",class:"hidden",onChange:N},null,544)],34))],64)),_("div",uw,[_("button",{class:B(["w-full py-2 rounded-xl text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100",Q.value]),disabled:!S(p)||S(c),onClick:W[11]||(W[11]=(...ge)=>S(m)&&S(m)(...ge))},[S(c)?(ce(),he("span",dw,"Processing…")):(ce(),he("span",fw,$e(S(i)==="encode"?"Encode":"Decode"),1))],10,hw),S(u)?(ce(),he("p",{key:0,class:B(["text-xs px-3 py-2 rounded-lg transition-colors duration-300",t.value?"bg-red-900/40 text-red-300":"bg-red-50 text-red-700 border border-red-200"])},$e(S(u)),3)):nt("",!0)])],2),_("div",{class:B(["rounded-2xl p-4 md:p-5 flex flex-col gap-3 overflow-hidden transition-all duration-300",y.value])},[_("div",pw,[_("span",{class:B(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",S(e).colors.textMuted])},"Output",2),_("div",mw,[S(f)?(ce(),he("button",{key:0,class:B(["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200",te.value]),onClick:W[12]||(W[12]=(...ge)=>S(d)&&S(d)(...ge))},[S(h)?(ce(),he("svg",vw,[...W[19]||(W[19]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])])):(ce(),he("svg",gw,[...W[18]||(W[18]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"},null,-1)])])),It(" "+$e(S(h)?"Copied!":"Copy"),1)],2)):nt("",!0),S(x)?(ce(),he("button",{key:1,class:B(["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200",te.value]),onClick:W[13]||(W[13]=(...ge)=>S(A)&&S(A)(...ge))},[...W[20]||(W[20]=[_("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})],-1),It(" Download .txt ",-1)])],2)):nt("",!0),S(f)?(ce(),he("button",{key:2,class:B(["px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200",te.value]),onClick:W[14]||(W[14]=(...ge)=>S(R)&&S(R)(...ge))},"Clear",2)):nt("",!0)])]),S(f)?nt("",!0):(ce(),he("div",{key:0,class:B(["flex-1 flex flex-col items-center justify-center gap-2 transition-colors duration-300",S(e).colors.textMuted])},[...W[21]||(W[21]=[_("svg",{class:"w-10 h-10 opacity-30",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),_("p",{class:"text-xs"},"Result will appear here",-1)])],2)),S(f)?(ce(),he("textarea",{key:1,value:S(a),readonly:"",class:B(["flex-1 resize-none",K.value])},null,10,xw)):nt("",!0),S(f)?(ce(),he("div",_w,[_("span",{class:B(["text-[11px] transition-colors duration-300",S(e).colors.textMuted])},$e(S(a).length.toLocaleString())+" chars",3)])):nt("",!0)],2)])])]))}});function bw(n){let e=n.trim().replace(/^#/,"");e.length===3&&(e=e.split("").map(i=>i+i).join(""));const t=parseInt(e,16);return{r:t>>16&255,g:t>>8&255,b:t&255}}function Yp(n,e,t){return"#"+[n,e,t].map(i=>i.toString(16).padStart(2,"0")).join("")}function Mw(n,e,t){const i=n/255,s=e/255,r=t/255,o=Math.max(i,s,r),a=Math.min(i,s,r),l=(o+a)/2;if(o===a)return{h:0,s:0,l:Math.round(l*100)};const c=o-a,u=l>.5?c/(2-o-a):c/(o+a);let h=0;return o===i?h=((s-r)/c+(s<r?6:0))/6:o===s?h=((r-i)/c+2)/6:h=((i-s)/c+4)/6,{h:Math.round(h*360),s:Math.round(u*100),l:Math.round(l*100)}}function Sw(n,e,t){const i=e/100,s=t/100,r=l=>(l+n/30)%12,o=i*Math.min(s,1-s),a=l=>s-o*Math.max(-1,Math.min(r(l)-3,Math.min(9-r(l),1)));return{r:Math.round(a(0)*255),g:Math.round(a(8)*255),b:Math.round(a(4)*255)}}function qp(n,e,t){const i=Mw(n,e,t);return{r:n,g:e,b:t,hex:Yp(n,e,t),...i}}function Na(n,e,t){const{r:i,g:s,b:r}=Sw(n,e,t);return{h:n,s:e,l:t,r:i,g:s,b:r,hex:Yp(i,s,r)}}function Nd(n){const{r:e,g:t,b:i}=bw(n);return qp(e,t,i)}function xi(n,e){return Na((n.h+e+360)%360,n.s,n.l)}function Ew(n){return/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(n.trim())}function ww(n){const e=i=>{const s=i/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)};return .2126*e(n.r)+.7152*e(n.g)+.0722*e(n.b)>.179?"#000000":"#ffffff"}function Nl(n,e){return e==="hex"?n.hex:e==="rgb"?`rgb(${n.r}, ${n.g}, ${n.b})`:`hsl(${n.h}, ${n.s}%, ${n.l}%)`}function Tw(n,e=5){return[.8,.6,.4,.25,.1].slice(0,e).map(t=>Na(n.h,n.s,Math.max(2,Math.round(n.l*t))))}function Aw(n,e=5){return[.2,.4,.6,.75,.9].slice(0,e).map(t=>Na(n.h,n.s,Math.min(98,Math.round(n.l+(100-n.l)*t))))}function Cw(n){return[xi(n,180)]}function Rw(n){return[xi(n,-60),xi(n,-30),xi(n,30),xi(n,60)]}function Pw(n){return[xi(n,120),xi(n,240)]}function Dw(n){return[xi(n,150),xi(n,210)]}const Ud="#3b82f6";function Lw(){const n=ke(Nd(Ud)),e=ke(Ud),t=ke(n.value.r),i=ke(n.value.g),s=ke(n.value.b),r=ke(n.value.h),o=ke(n.value.s),a=ke(n.value.l),l=ke("hex"),c=ke(null),u=He(()=>[{name:"Shades",description:"Darker variants",colors:Tw(n.value)},{name:"Tints",description:"Lighter variants",colors:Aw(n.value)},{name:"Complementary",description:"Opposite on the color wheel",colors:Cw(n.value)},{name:"Analogous",description:"Adjacent colors (±30°, ±60°)",colors:Rw(n.value)},{name:"Triadic",description:"Three evenly spaced colors (+120°, +240°)",colors:Pw(n.value)},{name:"Split Complementary",description:"Near the complement (+150°, +210°)",colors:Dw(n.value)}]);function h(d){e.value=d.hex,t.value=d.r,i.value=d.g,s.value=d.b,r.value=d.h,o.value=d.s,a.value=d.l}function f(d){const A=d.startsWith("#")?d:`#${d}`;if(!Ew(A))return;const R=Nd(A);n.value=R,h(R)}function p(d,A,R){const M=I=>Math.min(255,Math.max(0,Math.round(I))),E=qp(M(d),M(A),M(R));n.value=E,h(E)}function g(d,A,R){const M=(d%360+360)%360,E=Math.min(100,Math.max(0,A)),I=Math.min(100,Math.max(0,R)),N=Na(M,E,I);n.value=N,h(N)}async function x(d,A){await navigator.clipboard.writeText(Nl(d,l.value)),c.value=A,setTimeout(()=>{c.value===A&&(c.value=null)},2e3)}async function m(d){const A=d.name.toLowerCase().replace(/\s+/g,"-"),R=d.colors.map((M,E)=>`--${A}-${E+1}: ${Nl(M,l.value)};`).join(`
`);await navigator.clipboard.writeText(R),c.value=`palette-${d.name}`,setTimeout(()=>{c.value===`palette-${d.name}`&&(c.value=null)},2e3)}return{baseColor:n,hexInput:e,rgbR:t,rgbG:i,rgbB:s,hslH:r,hslS:o,hslL:a,copyFormat:l,copiedKey:c,palettes:u,setFromHex:f,setFromRgb:p,setFromHsl:g,copySwatch:x,copyPalette:m,formatColor:Nl}}const Iw={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},Nw={class:"flex-1 flex flex-col gap-4 overflow-hidden"},Uw={class:"flex items-center gap-5 flex-wrap"},Fw={class:"flex items-center gap-3 flex-shrink-0"},Ow={class:"relative"},Bw=["value"],kw={class:"flex items-center gap-2"},zw=["value"],Vw={class:"flex items-center gap-2"},Hw=["value"],Gw=["value"],Ww=["value"],Xw={class:"flex items-center gap-2"},$w={class:"flex items-center gap-1"},jw=["value"],Yw={class:"flex items-center gap-1"},qw=["value"],Kw={class:"flex items-center gap-1"},Jw=["value"],Zw={class:"flex-1 flex flex-col gap-0 overflow-hidden"},Qw={class:"flex items-center justify-between mb-3 flex-shrink-0"},eT=["onClick"],tT={class:"flex-1 overflow-y-auto space-y-3 pr-1"},nT={class:"flex items-center justify-between mb-3"},iT=["onClick"],sT={key:0,class:"w-3 h-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},rT={key:1,class:"w-3 h-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},oT={class:"flex flex-wrap gap-3"},aT=["title","onClick"],lT=dn({__name:"ColorPaletteView",emits:["back"],setup(n){const{currentTheme:e}=ni(),t=He(()=>e.value.name==="dark"||e.value.name==="midnight"),{baseColor:i,hexInput:s,rgbR:r,rgbG:o,rgbB:a,hslH:l,hslS:c,hslL:u,copyFormat:h,copiedKey:f,palettes:p,setFromHex:g,setFromRgb:x,setFromHsl:m,copySwatch:d,copyPalette:A,formatColor:R}=Lw(),M=He(()=>[e.value.colors.bgCard,e.value.colors.shadow,t.value?"ring-1 ring-white/10":"border border-white/50"]),E=He(()=>["rounded-lg px-2 py-1 text-sm font-mono outline-none transition-all duration-200","focus:ring-2 focus:ring-primary-500/50",e.value.colors.bgCard,e.value.colors.textPrimary,t.value?"ring-1 ring-white/10":"border border-gray-200"]),I=He(()=>t.value?"bg-white/15 text-white":"bg-white text-gray-900 shadow-sm"),N=He(()=>t.value?"text-gray-400 hover:text-gray-200":"text-gray-500 hover:text-gray-800"),H=He(()=>t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-700 hover:bg-black/5");function y(U){g(U.target.value)}function w(){s.value=i.value.hex}return(U,F)=>(ce(),he("div",Iw,[ft(Qr,{"tool-name":"Color Palette","tool-description":"Convert HEX/RGB/HSL and generate color palettes",onBack:F[0]||(F[0]=z=>U.$emit("back"))}),_("div",Nw,[_("div",{class:B(["rounded-2xl p-4 md:p-5 flex-shrink-0 transition-all duration-300",M.value])},[_("div",Uw,[_("div",Fw,[_("div",Ow,[_("div",{class:"w-16 h-16 rounded-xl shadow-md cursor-pointer overflow-hidden flex-shrink-0 ring-2 ring-white/20",style:gi({backgroundColor:S(i).hex})},[_("input",{type:"color",value:S(i).hex,class:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",onInput:F[1]||(F[1]=z=>S(g)(z.target.value))},null,40,Bw)],4)]),_("div",null,[_("p",{class:B(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",S(e).colors.textMuted])},"Base Color",2),_("p",{class:B(["text-sm font-mono font-semibold mt-0.5 transition-colors duration-300",S(e).colors.textPrimary])},$e(S(i).hex),3)])]),_("div",{class:B(["hidden sm:block w-px h-12 flex-shrink-0 transition-colors duration-300",t.value?"bg-white/10":"bg-gray-200"])},null,2),_("div",kw,[_("span",{class:B(["text-xs font-semibold w-7 transition-colors duration-300",S(e).colors.textMuted])},"HEX",2),_("input",{type:"text",value:S(s),placeholder:"#3b82f6",class:B(["w-28",E.value]),onChange:y,onBlur:w},null,42,zw)]),_("div",Vw,[_("span",{class:B(["text-xs font-semibold w-7 transition-colors duration-300",S(e).colors.textMuted])},"RGB",2),_("input",{type:"number",min:"0",max:"255",value:S(r),placeholder:"R",class:B(["w-14 text-center",E.value]),onChange:F[2]||(F[2]=z=>S(x)(+z.target.value,S(o),S(a)))},null,42,Hw),_("input",{type:"number",min:"0",max:"255",value:S(o),placeholder:"G",class:B(["w-14 text-center",E.value]),onChange:F[3]||(F[3]=z=>S(x)(S(r),+z.target.value,S(a)))},null,42,Gw),_("input",{type:"number",min:"0",max:"255",value:S(a),placeholder:"B",class:B(["w-14 text-center",E.value]),onChange:F[4]||(F[4]=z=>S(x)(S(r),S(o),+z.target.value))},null,42,Ww)]),_("div",Xw,[_("span",{class:B(["text-xs font-semibold w-7 transition-colors duration-300",S(e).colors.textMuted])},"HSL",2),_("div",$w,[_("input",{type:"number",min:"0",max:"360",value:S(l),placeholder:"H",class:B(["w-14 text-center",E.value]),onChange:F[5]||(F[5]=z=>S(m)(+z.target.value,S(c),S(u)))},null,42,jw),_("span",{class:B(["text-xs",S(e).colors.textMuted])},"°",2)]),_("div",Yw,[_("input",{type:"number",min:"0",max:"100",value:S(c),placeholder:"S",class:B(["w-14 text-center",E.value]),onChange:F[6]||(F[6]=z=>S(m)(S(l),+z.target.value,S(u)))},null,42,qw),_("span",{class:B(["text-xs",S(e).colors.textMuted])},"%",2)]),_("div",Kw,[_("input",{type:"number",min:"0",max:"100",value:S(u),placeholder:"L",class:B(["w-14 text-center",E.value]),onChange:F[7]||(F[7]=z=>S(m)(S(l),S(c),+z.target.value))},null,42,Jw),_("span",{class:B(["text-xs",S(e).colors.textMuted])},"%",2)])])])],2),_("div",Zw,[_("div",Qw,[_("span",{class:B(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",S(e).colors.textMuted])},"Palettes",2),_("div",{class:B(["inline-flex rounded-lg p-0.5 gap-0.5 transition-colors duration-300",t.value?"bg-white/10":"bg-black/5"])},[(ce(),he(Mt,null,On(["hex","rgb","hsl"],z=>_("button",{key:z,class:B(["px-3 py-1 rounded-md text-xs font-mono font-medium transition-all duration-200 uppercase",S(h)===z?I.value:N.value]),onClick:Q=>h.value=z},$e(z),11,eT)),64))],2)]),_("div",tT,[(ce(!0),he(Mt,null,On(S(p),z=>(ce(),he("div",{key:z.name,class:B(["rounded-2xl p-4 transition-all duration-300",M.value])},[_("div",nT,[_("div",null,[_("h3",{class:B(["text-sm font-semibold transition-colors duration-300",S(e).colors.textPrimary])},$e(z.name),3),_("p",{class:B(["text-xs transition-colors duration-300",S(e).colors.textMuted])},$e(z.description),3)]),_("button",{class:B(["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200",S(f)===`palette-${z.name}`?"text-green-500":H.value]),onClick:Q=>S(A)(z)},[S(f)!==`palette-${z.name}`?(ce(),he("svg",sT,[...F[8]||(F[8]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"},null,-1)])])):(ce(),he("svg",rT,[...F[9]||(F[9]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])])),It(" "+$e(S(f)===`palette-${z.name}`?"Copied!":"Copy as CSS vars"),1)],10,iT)]),_("div",oT,[(ce(!0),he(Mt,null,On(z.colors,(Q,te)=>(ce(),he("button",{key:te,class:"group flex flex-col items-center gap-1.5 focus:outline-none",title:`Click to copy ${S(R)(Q,S(h))}`,onClick:K=>S(d)(Q,`${z.name}-${te}`)},[_("div",{class:"w-14 h-14 rounded-xl shadow-md transition-all duration-150 group-hover:scale-105 group-hover:shadow-lg group-active:scale-95 relative overflow-hidden",style:gi({backgroundColor:Q.hex})},[S(f)===`${z.name}-${te}`?(ce(),he("div",{key:0,class:"absolute inset-0 flex items-center justify-center",style:gi({backgroundColor:Q.hex})},[(ce(),he("svg",{class:"w-5 h-5",style:gi({color:S(ww)(Q)}),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...F[10]||(F[10]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",d:"M5 13l4 4L19 7"},null,-1)])],4))],4)):nt("",!0)],4),_("span",{class:B(["text-[10px] font-mono max-w-[56px] truncate transition-colors duration-300",S(f)===`${z.name}-${te}`?"text-green-500":S(e).colors.textMuted])},$e(S(R)(Q,S(h))),3)],8,aT))),128))])],2))),128))])])])]))}});function cT(n){return new Promise((e,t)=>{const i=URL.createObjectURL(n),s=new Image;s.onload=()=>{const r=document.createElement("canvas");r.width=s.naturalWidth,r.height=s.naturalHeight,r.getContext("2d").drawImage(s,0,0),URL.revokeObjectURL(i),e(r)},s.onerror=()=>{URL.revokeObjectURL(i),t(new Error("Failed to load image"))},s.src=i})}function Ws(n,e,t){const i=Math.max(0,Math.min(n.x,e-1)),s=Math.max(0,Math.min(n.y,t-1)),r=Math.max(i+1,Math.min(n.endX,e)),o=Math.max(s+1,Math.min(n.endY,t));return{x:i,y:s,endX:r,endY:o}}function uT(n,e){const{x:t,y:i,endX:s,endY:r}=Ws(e,n.width,n.height),o=document.createElement("canvas");return o.width=s-t,o.height=r-i,o.getContext("2d").drawImage(n,t,i,o.width,o.height,0,0,o.width,o.height),o}function hT(n,e,t){const i=document.createElement("canvas");i.width=n.width,i.height=n.height;const s=i.getContext("2d");return s.translate(e?n.width:0,t?n.height:0),s.scale(e?-1:1,t?-1:1),s.drawImage(n,0,0),i}function dT(n,e,t,i,s){let{x:r,y:o,endX:a,endY:l}=n;if(i){const c=e-a;a=e-r,r=c}if(s){const c=t-l;l=t-o,o=c}return{x:r,y:o,endX:a,endY:l}}function fT(n,e,t,i){const s=i*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=e*Math.abs(r)+t*Math.abs(o),l=e*Math.abs(o)+t*Math.abs(r),c=[[n.x,n.y],[n.endX,n.y],[n.x,n.endY],[n.endX,n.endY]].map(([u,h])=>[(u-e/2)*r-(h-t/2)*o+a/2,(u-e/2)*o+(h-t/2)*r+l/2]);return{x:Math.round(Math.min(...c.map(u=>u[0]))),y:Math.round(Math.min(...c.map(u=>u[1]))),endX:Math.round(Math.max(...c.map(u=>u[0]))),endY:Math.round(Math.max(...c.map(u=>u[1])))}}function pT(n,e){const t=e*Math.PI/180,i=Math.abs(Math.cos(t)),s=Math.abs(Math.sin(t)),r=Math.round(n.width*i+n.height*s),o=Math.round(n.width*s+n.height*i),a=document.createElement("canvas");a.width=r,a.height=o;const l=a.getContext("2d");return l.translate(r/2,o/2),l.rotate(t),l.drawImage(n,-n.width/2,-n.height/2),a}function Mr(n,e,t){const i=Math.min(t.width/e.width,t.height/e.height),s=(t.width-e.width*i)/2,r=(t.height-e.height*i)/2;return{x:Math.round(n.x*i+s),y:Math.round(n.y*i+r),endX:Math.round(n.endX*i+s),endY:Math.round(n.endY*i+r),scale:i,offsetX:s,offsetY:r}}function mT(n,e){const t=e.getContext("2d");t.clearRect(0,0,e.width,e.height);const i=Math.min(e.width/n.width,e.height/n.height),s=n.width*i,r=n.height*i,o=(e.width-s)/2,a=(e.height-r)/2;t.drawImage(n,o,a,s,r)}function Fd(n,e,t=!1){const i=n.getContext("2d"),{x:s,y:r,endX:o,endY:a}=e;i.fillStyle=t?"rgba(0,0,0,0.25)":"rgba(0,0,0,0.45)",i.fillRect(0,0,n.width,r),i.fillRect(0,a,n.width,n.height-a),i.fillRect(0,r,s,a-r),i.fillRect(o,r,n.width-o,a-r),i.strokeStyle=t?"rgba(99,102,241,0.8)":"rgba(255,255,255,0.9)",i.lineWidth=1.5,i.setLineDash([5,4]),i.strokeRect(s+.5,r+.5,o-s-1,a-r-1),i.setLineDash([]),i.fillStyle=t?"rgba(99,102,241,1)":"#ffffff";const l=10,c=l/2;i.fillRect(s-c,r-c,l,l),i.fillRect(o-c,r-c,l,l),i.fillRect(s-c,a-c,l,l),i.fillRect(o-c,a-c,l,l);const u=Math.round((s+o)/2),h=Math.round((r+a)/2);i.fillRect(u-10,r-c,20,l),i.fillRect(u-10,a-c,20,l),i.fillRect(s-c,h-10,l,20),i.fillRect(o-c,h-10,l,20)}async function gT(n,e,t,i=.9){const s=t==="jpeg"?"image/jpeg":"image/png",r=n.toDataURL(s,i),o=document.createElement("a");o.href=r,o.download=e,o.click()}const Fi=2,vT=10,xT=4,An=vT/2+xT,_T={nw:[!0,!0,!1,!1],ne:[!1,!0,!0,!1],sw:[!0,!1,!1,!0],se:[!1,!1,!0,!0],n:[!1,!0,!1,!1],s:[!1,!1,!1,!0],w:[!0,!1,!1,!1],e:[!1,!1,!0,!1]};function Od(n){const e=document.createElement("canvas");return e.width=n.width,e.height=n.height,e.getContext("2d").drawImage(n,0,0),e}function Bd(){return`${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function kd(n,e,t){const{x:i,y:s,endX:r,endY:o}=t,a=(i+r)/2,l=(s+o)/2;return Math.max(Math.abs(n-i),Math.abs(e-s))<=An?"nw":Math.max(Math.abs(n-r),Math.abs(e-s))<=An?"ne":Math.max(Math.abs(n-i),Math.abs(e-o))<=An?"sw":Math.max(Math.abs(n-r),Math.abs(e-o))<=An?"se":Math.max(Math.abs(n-a),Math.abs(e-s))<=An?"n":Math.max(Math.abs(n-a),Math.abs(e-o))<=An?"s":Math.max(Math.abs(n-i),Math.abs(e-l))<=An?"w":Math.max(Math.abs(n-r),Math.abs(e-l))<=An?"e":n>i+An&&n<r-An&&e>s+An&&e<o-An?"move":null}function yT(n,e,t,i,s){const r=n.endX-n.x,o=n.endY-n.y;let a=n.x+e,l=n.y+t,c=a+r,u=l+o;return a<0&&(a=0,c=r),l<0&&(l=0,u=o),c>i&&(c=i,a=i-r),u>s&&(u=s,l=s-o),{x:a,y:l,endX:c,endY:u}}function bT(n,e,t,i,s,r,o){const a=e/s,l=t/s;if(n==="move")return yT(i,a,l,r,o);const[c,u,h,f]=_T[n];let{x:p,y:g,endX:x,endY:m}=i;return c&&(p+=a),u&&(g+=l),h&&(x+=a),f&&(m+=l),x-p<Fi&&(c?p=x-Fi:x=p+Fi),m-g<Fi&&(u?g=m-Fi:m=g+Fi),Ws({x:p,y:g,endX:x,endY:m},r,o)}function MT(n,e){const t={};let i=!1,s=!1,r=0;for(const o of n)o.type==="load"?t.file=o.params.filename:o.type==="flip"?(o.params.horizontal&&(i=!i),o.params.vertical&&(s=!s)):o.type==="rotate"?r=((r+o.params.degrees)%360+360)%360:o.type==="crop"&&(t.crop={...o.params,status:o.status});return e&&(t.dimensions=e),(i||s)&&(t.flip={horizontal:i,vertical:s}),r!==0&&(t.rotation={degrees:r}),t}function ST(){const n=ke(null),e=ke(null),t=ke(null),i=ke(null),s=ke(!1),r=ke(null),o=He(()=>n.value?{w:n.value.width,h:n.value.height}:null),a=ke(!1),l=ke(null),c=ke(null),u=ke(null),h=ke(null),f=ke(null),p=ke(0),g=ke("png"),x=ke(90),m=ke([]),d=ke(!1),A=He(()=>!n.value||!t.value?1:n.value.width/t.value.width),R=He(()=>{if(!a.value)return"default";const de={nw:"nw-resize",ne:"ne-resize",sw:"sw-resize",se:"se-resize",n:"n-resize",s:"s-resize",w:"w-resize",e:"e-resize",move:"move"};return h.value?de[h.value]??"crosshair":"crosshair"}),M=He(()=>JSON.stringify(m.value,null,2)),E=He(()=>m.value.length===0?"{}":JSON.stringify(MT(m.value,o.value),null,2));function I(de,Te,Ge){m.value.push({id:Bd(),type:de,params:Te,status:Ge,timestamp:new Date().toISOString()})}function N(){if(!n.value||!t.value)return;mT(n.value,t.value);const de=t.value,Te=n.value;a.value&&l.value?Fd(de,Mr(l.value,Te,de),!1):c.value&&Fd(de,Mr(c.value,Te,de),!0)}async function H(de){if(!de.type.startsWith("image/")){r.value="File must be an image (PNG, JPEG, WebP, GIF)";return}s.value=!0,r.value=null;try{const Te=await cT(de);n.value=Te,e.value=Od(Te),i.value=de,a.value=!1,l.value=null,c.value=null,u.value=null,f.value=null,m.value=[],I("load",{filename:de.name,width:Te.width,height:Te.height},"applied"),N()}catch{r.value="Failed to load image"}finally{s.value=!1}}function y(de){c.value=de;const Te=m.value.findIndex(Ge=>Ge.type==="crop"&&Ge.status==="pending");Te>=0&&(m.value[Te]={...m.value[Te],params:{...de},timestamp:new Date().toISOString()})}function w(de,Te){if(!n.value)return;const Ge=n.value.width,qe=n.value.height;if(n.value=hT(n.value,de,Te),l.value=null,c.value){const ie=dT(c.value,Ge,qe,de,Te);y(Ws(ie,n.value.width,n.value.height)),a.value&&(l.value={...c.value})}I("flip",{horizontal:de,vertical:Te},"applied"),N()}function U(de){if(!n.value)return;const Te=n.value.width,Ge=n.value.height;if(n.value=pT(n.value,de),l.value=null,c.value){const qe=fT(c.value,Te,Ge,de);y(Ws(qe,n.value.width,n.value.height)),a.value&&(l.value={...c.value})}I("rotate",{degrees:de},"applied"),N()}function F(){if(!l.value)return;c.value={...l.value};const de=m.value.findIndex(Ge=>Ge.type==="crop"&&Ge.status==="pending"),Te={id:de>=0?m.value[de].id:Bd(),type:"crop",params:{...l.value},status:"pending",timestamp:new Date().toISOString()};de>=0?m.value[de]=Te:m.value.push(Te),N()}function z(){c.value=null,m.value=m.value.filter(de=>!(de.type==="crop"&&de.status==="pending")),N()}function Q(){a.value=!a.value,a.value?c.value&&(l.value={...c.value}):(l.value=null,u.value=null,f.value=null,h.value=null),N()}function te(){l.value=null,c.value=null,a.value=!1,u.value=null,f.value=null,h.value=null,m.value=m.value.filter(de=>!(de.type==="crop"&&de.status==="pending")),N()}function K(){e.value&&(n.value=Od(e.value),l.value=null,c.value=null,a.value=!1,u.value=null,f.value=null,h.value=null,p.value=0,m.value=[],N())}async function X(){if(!n.value||!i.value)return;const de=c.value?uT(n.value,c.value):n.value,Te=i.value.name.replace(/\.[^.]+$/,""),Ge=g.value;await gT(de,`${Te}-edited.${Ge}`,g.value,x.value/100)}function W(de){if(!a.value||!n.value||!t.value)return;const Te=t.value.getBoundingClientRect(),Ge=de.clientX-Te.left,qe=de.clientY-Te.top;if(l.value){const D=Mr(l.value,n.value,t.value),L=kd(Ge,qe,D);if(L!==null){u.value={zone:L,startMouseX:Ge,startMouseY:qe,startBox:{...l.value}};return}}const ie=t.value,ue=n.value,Ee=Math.min(ie.width/ue.width,ie.height/ue.height),pe=(ie.width-ue.width*Ee)/2,ne=(ie.height-ue.height*Ee)/2,xe=Math.round((Ge-pe)/Ee),C=Math.round((qe-ne)/Ee);f.value={x:xe,y:C},l.value={x:xe,y:C,endX:xe+1,endY:C+1}}function ge(de){if(!t.value||!n.value)return;const Te=t.value.getBoundingClientRect(),Ge=de.clientX-Te.left,qe=de.clientY-Te.top;if(u.value&&l.value){const ie=u.value,ue=Mr(ie.startBox,n.value,t.value);l.value=bT(ie.zone,Ge-ie.startMouseX,qe-ie.startMouseY,ie.startBox,ue.scale,n.value.width,n.value.height),N();return}if(f.value){const ie=t.value,ue=n.value,Ee=Math.min(ie.width/ue.width,ie.height/ue.height),pe=(ie.width-ue.width*Ee)/2,ne=(ie.height-ue.height*Ee)/2,xe=Math.round((Ge-pe)/Ee),C=Math.round((qe-ne)/Ee),D=f.value;l.value=Ws({x:Math.min(D.x,xe),y:Math.min(D.y,C),endX:Math.max(D.x,xe),endY:Math.max(D.y,C)},ue.width,ue.height),N();return}if(a.value&&l.value){const ie=Mr(l.value,n.value,t.value);h.value=kd(Ge,qe,ie)}}function be(){if(u.value=null,h.value=null,f.value=null,l.value){const{x:de,y:Te,endX:Ge,endY:qe}=l.value;Ge-de<Fi&&qe-Te<Fi&&(l.value=null,N())}}function Se(de){n.value&&(l.value=Ws(de,n.value.width,n.value.height),N())}return{displayCanvasEl:t,selectedFile:i,isLoading:s,error:r,imageSize:o,isCropMode:a,cropBox:l,pendingCropBox:c,canvasCursor:R,customAngle:p,exportFormat:g,exportQuality:x,actionPipeline:m,actionPipelineJson:M,pipelineSummaryJson:E,isActionPanelOpen:d,loadFile:H,render:N,applyFlip:w,applyRotation:U,confirmCrop:F,cancelConfirmedCrop:z,toggleCropMode:Q,resetCrop:te,resetAll:K,download:X,onCropMouseDown:W,onCropMouseMove:ge,onCropMouseUp:be,updateCropBoxFromInputs:Se,displayScale:A}}const ET={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},wT={class:"flex-1 grid lg:grid-cols-[1fr_280px] gap-4 overflow-hidden min-h-0"},TT={class:"text-center"},AT={key:3,class:"absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-sm font-medium bg-red-500/90 text-white"},CT={class:"block"},RT=["disabled"],PT={class:"mt-3 grid grid-cols-2 gap-2"},DT={class:"block"},LT=["value"],IT={class:"block"},NT=["value"],UT={class:"block"},FT=["value"],OT={class:"block"},BT=["value"],kT={class:"mt-2 flex gap-2"},zT={key:2,class:"mt-2"},VT={class:"flex gap-2"},HT=["disabled"],GT=["disabled"],WT={class:"flex gap-2 mb-2"},XT=["disabled"],$T=["disabled"],jT=["disabled"],YT={class:"flex gap-2 items-end"},qT={class:"flex-1"},KT=["disabled"],JT=["onClick"],ZT={key:0,class:"mb-3"},QT={class:"flex justify-between mb-1"},e2=["disabled"],t2=["disabled"],n2={class:"flex items-center gap-2"},i2=["innerHTML"],Ul="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",s2=dn({__name:"ImageEditorView",emits:["back"],setup(n){const{currentTheme:e}=ni(),t=He(()=>e.value.name==="dark"||e.value.name==="midnight"),{displayCanvasEl:i,selectedFile:s,isLoading:r,error:o,imageSize:a,isCropMode:l,cropBox:c,pendingCropBox:u,canvasCursor:h,customAngle:f,exportFormat:p,exportQuality:g,actionPipeline:x,pipelineSummaryJson:m,isActionPanelOpen:d,loadFile:A,render:R,applyFlip:M,applyRotation:E,confirmCrop:I,cancelConfirmedCrop:N,toggleCropMode:H,resetCrop:y,resetAll:w,download:U,onCropMouseDown:F,onCropMouseMove:z,onCropMouseUp:Q,updateCropBoxFromInputs:te}=ST(),K=ke(!1),X=ke(null),{highlightedHtml:W}=ip(()=>m.value,()=>e.value),ge=He(()=>[e.value.colors.bgCard,e.value.colors.shadow,t.value?"ring-1 ring-white/10":"border border-white/50"]),be=He(()=>["rounded-lg px-2 py-1 text-sm font-mono outline-none transition-all duration-200","focus:ring-2 focus:ring-primary-500/50 w-full",e.value.colors.bgCard,e.value.colors.textPrimary,t.value?"ring-1 ring-white/10":"border border-gray-200"]),Se=He(()=>`${Ul} bg-primary-500 hover:bg-primary-600 text-white`),de=He(()=>`${Ul} ${t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-700 hover:bg-black/5"}`),Te=He(()=>`${Ul} ${t.value?"text-red-400 hover:text-red-200 hover:bg-red-900/20":"text-red-500 hover:text-red-700 hover:bg-red-50"}`),Ge=He(()=>`text-xs font-semibold uppercase tracking-wide mb-2 transition-colors duration-300 ${e.value.colors.textMuted}`),qe=He(()=>`my-3 border-t ${t.value?"border-white/10":"border-gray-200"}`);function ie(D){const L=D.target.files?.[0];L&&A(L)}function ue(D){K.value=!1;const L=D.dataTransfer?.files[0];L&&A(L)}function Ee(D){c.value&&te({...c.value,x:Number(D)})}function pe(D){c.value&&te({...c.value,y:Number(D)})}function ne(D){c.value&&te({...c.value,endX:Number(D)})}function xe(D){c.value&&te({...c.value,endY:Number(D)})}let C=null;return ms(()=>{X.value&&(C=new ResizeObserver(()=>{!i.value||!X.value||(i.value.width=X.value.clientWidth,i.value.height=X.value.clientHeight,R())}),C.observe(X.value))}),gs(()=>C?.disconnect()),Jn(a,()=>R()),(D,L)=>(ce(),he("div",ET,[ft(Qr,{"tool-name":"Image Editor","tool-description":"Crop, flip, and rotate images with interactive canvas controls",onBack:L[0]||(L[0]=V=>D.$emit("back"))}),_("div",wT,[_("div",{ref_key:"canvasContainer",ref:X,class:B(["relative rounded-2xl overflow-hidden transition-all duration-300 flex items-center justify-center min-h-0",ge.value]),onDragover:L[5]||(L[5]=tr(V=>K.value=!0,["prevent"])),onDragleave:L[6]||(L[6]=V=>K.value=!1),onDrop:tr(ue,["prevent"])},[!S(a)&&!S(r)?(ce(),he("label",{key:0,class:B(["absolute inset-0 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200",K.value?"opacity-100":"opacity-70 hover:opacity-100"])},[_("div",{class:B(["w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-dashed transition-colors duration-200",K.value?"border-primary-400 bg-primary-500/10":t.value?"border-white/20":"border-gray-300"])},[(ce(),he("svg",{class:B(["w-8 h-8",S(e).colors.textMuted]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...L[26]||(L[26]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"},null,-1)])],2))],2),_("div",TT,[_("p",{class:B(["text-sm font-medium",S(e).colors.textPrimary])},[...L[27]||(L[27]=[It(" Drop image or ",-1),_("span",{class:"text-primary-500 underline"},"browse",-1)])],2),_("p",{class:B(["text-xs mt-1",S(e).colors.textMuted])},"PNG, JPEG, WebP, GIF",2)]),_("input",{type:"file",accept:"image/*",class:"sr-only",onChange:ie},null,32)],2)):S(r)?(ce(),he("div",{key:1,class:B(["flex items-center gap-2",S(e).colors.textMuted])},[...L[28]||(L[28]=[_("svg",{class:"w-5 h-5 animate-spin",fill:"none",viewBox:"0 0 24 24"},[_("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),_("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})],-1),_("span",{class:"text-sm"},"Loading…",-1)])],2)):nt("",!0),Bi(_("canvas",{ref_key:"displayCanvasEl",ref:i,class:"w-full h-full block select-none",style:gi({cursor:S(l)?S(h):"default"}),onMousedown:L[1]||(L[1]=(...V)=>S(F)&&S(F)(...V)),onMousemove:L[2]||(L[2]=(...V)=>S(z)&&S(z)(...V)),onMouseup:L[3]||(L[3]=(...V)=>S(Q)&&S(Q)(...V)),onMouseleave:L[4]||(L[4]=(...V)=>S(Q)&&S(Q)(...V))},null,36),[[fh,S(a)]]),S(a)?(ce(),he("div",{key:2,class:B(["absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-mono transition-colors duration-300",t.value?"bg-black/40 text-gray-300":"bg-white/60 text-gray-600"])},$e(S(a).w)+" × "+$e(S(a).h),3)):nt("",!0),S(o)?(ce(),he("div",AT,$e(S(o)),1)):nt("",!0)],34),_("div",{class:B(["rounded-2xl p-4 flex flex-col gap-0 overflow-y-auto transition-all duration-300",ge.value])},[_("div",null,[_("p",{class:B(Ge.value)},"Load",2),_("label",CT,[_("span",{class:B([de.value,"w-full cursor-pointer text-center"])},[L[29]||(L[29]=_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1)),It(" "+$e(S(s)?"Replace Image":"Open Image"),1)],2),_("input",{type:"file",accept:"image/*",class:"sr-only",onChange:ie},null,32)]),S(s)?(ce(),he("p",{key:0,class:B(["mt-1.5 text-xs truncate",S(e).colors.textMuted])},$e(S(s).name),3)):nt("",!0)]),_("div",{class:B(qe.value)},null,2),_("div",null,[_("p",{class:B(Ge.value)},"Crop",2),_("button",{class:B([S(l)?Se.value:de.value,"w-full"]),disabled:!S(a),onClick:L[7]||(L[7]=(...V)=>S(H)&&S(H)(...V))},[L[30]||(L[30]=_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"})],-1)),It(" "+$e(S(l)?"Crop Mode: ON":"Crop Mode: OFF"),1)],10,RT),S(l)&&!S(c)?(ce(),he("p",{key:0,class:B(["mt-1.5 text-xs",S(e).colors.textMuted])}," Drag on the image to select a crop area ",2)):nt("",!0),S(l)&&S(c)?(ce(),he(Mt,{key:1},[_("div",PT,[_("label",DT,[_("span",{class:B(["text-[10px] font-mono mb-0.5 block",S(e).colors.textMuted])},"X",2),_("input",{type:"number",min:"0",value:S(c)?.x??0,class:B(be.value),onChange:L[8]||(L[8]=V=>Ee(V.target.value))},null,42,LT)]),_("label",IT,[_("span",{class:B(["text-[10px] font-mono mb-0.5 block",S(e).colors.textMuted])},"Y",2),_("input",{type:"number",min:"0",value:S(c)?.y??0,class:B(be.value),onChange:L[9]||(L[9]=V=>pe(V.target.value))},null,42,NT)]),_("label",UT,[_("span",{class:B(["text-[10px] font-mono mb-0.5 block",S(e).colors.textMuted])},"End X",2),_("input",{type:"number",min:"1",value:S(c)?.endX??S(a)?.w??0,class:B(be.value),onChange:L[10]||(L[10]=V=>ne(V.target.value))},null,42,FT)]),_("label",OT,[_("span",{class:B(["text-[10px] font-mono mb-0.5 block",S(e).colors.textMuted])},"End Y",2),_("input",{type:"number",min:"1",value:S(c)?.endY??S(a)?.h??0,class:B(be.value),onChange:L[11]||(L[11]=V=>xe(V.target.value))},null,42,BT)])]),_("div",kT,[_("button",{class:B([Se.value,"flex-1"]),onClick:L[12]||(L[12]=(...V)=>S(I)&&S(I)(...V))}," Confirm Crop ",2),_("button",{class:B([de.value,"flex-1"]),onClick:L[13]||(L[13]=(...V)=>S(y)&&S(y)(...V))},"Reset",2)])],64)):nt("",!0),S(u)&&!S(l)?(ce(),he("div",zT,[_("div",{class:B(["flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs mb-2",t.value?"bg-indigo-500/15 text-indigo-300":"bg-indigo-50 text-indigo-600"])},[...L[31]||(L[31]=[_("span",{class:"w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"},null,-1),It(" Crop pending — applies on download ",-1)])],2),_("button",{class:B([de.value,"w-full text-xs"]),onClick:L[14]||(L[14]=(...V)=>S(N)&&S(N)(...V))}," Clear Crop ",2)])):nt("",!0)]),_("div",{class:B(qe.value)},null,2),_("div",null,[_("p",{class:B(Ge.value)},"Flip",2),_("div",VT,[_("button",{class:B([de.value,"flex-1"]),disabled:!S(a),onClick:L[15]||(L[15]=V=>S(M)(!0,!1))},[...L[32]||(L[32]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})],-1),It(" Horizontal ",-1)])],10,HT),_("button",{class:B([de.value,"flex-1"]),disabled:!S(a),onClick:L[16]||(L[16]=V=>S(M)(!1,!0))},[...L[33]||(L[33]=[_("svg",{class:"w-4 h-4 rotate-90",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})],-1),It(" Vertical ",-1)])],10,GT)])]),_("div",{class:B(qe.value)},null,2),_("div",null,[_("p",{class:B(Ge.value)},"Rotate",2),_("div",WT,[_("button",{class:B([de.value,"flex-1"]),disabled:!S(a),onClick:L[17]||(L[17]=V=>S(E)(-90))},[...L[34]||(L[34]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"})],-1),It(" 90° CCW ",-1)])],10,XT),_("button",{class:B([de.value,"flex-1"]),disabled:!S(a),onClick:L[18]||(L[18]=V=>S(E)(90))},[...L[35]||(L[35]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 10H11a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"})],-1),It(" 90° CW ",-1)])],10,$T)]),_("button",{class:B([de.value,"w-full mb-2"]),disabled:!S(a),onClick:L[19]||(L[19]=V=>S(E)(180))}," 180° ",10,jT),_("div",YT,[_("div",qT,[_("label",{class:B(["text-[10px] font-mono mb-0.5 block",S(e).colors.textMuted])},"Custom (°)",2),Bi(_("input",{"onUpdate:modelValue":L[20]||(L[20]=V=>Dt(f)?f.value=V:null),type:"number",class:B(be.value),placeholder:"45"},null,2),[[er,S(f),void 0,{number:!0}]])]),_("button",{class:B([de.value,"mb-px"]),disabled:!S(a),onClick:L[21]||(L[21]=V=>S(E)(S(f)))},"Apply",10,KT)])]),_("div",{class:B(qe.value)},null,2),_("div",null,[_("p",{class:B(Ge.value)},"Export",2),_("div",{class:B(["inline-flex rounded-lg p-0.5 gap-0.5 mb-3 self-start",t.value?"bg-white/10":"bg-black/5"])},[(ce(),he(Mt,null,On(["png","jpeg"],V=>_("button",{key:V,class:B(["px-3 py-1 rounded-md text-xs font-mono font-medium transition-all duration-200 uppercase",S(p)===V?t.value?"bg-white/15 text-white":"bg-white text-gray-900 shadow-sm":t.value?"text-gray-400 hover:text-gray-200":"text-gray-500 hover:text-gray-800"]),onClick:j=>p.value=V},$e(V),11,JT)),64))],2),S(p)==="jpeg"?(ce(),he("div",ZT,[_("div",QT,[_("label",{class:B(["text-[10px] font-mono",S(e).colors.textMuted])},"Quality",2),_("span",{class:B(["text-[10px] font-mono",S(e).colors.textMuted])},$e(S(g))+"%",3)]),Bi(_("input",{"onUpdate:modelValue":L[22]||(L[22]=V=>Dt(g)?g.value=V:null),type:"range",min:"10",max:"100",step:"5",class:"w-full accent-primary-500"},null,512),[[er,S(g),void 0,{number:!0}]])])):nt("",!0),_("button",{class:B([Se.value,"w-full mb-2"]),disabled:!S(a),onClick:L[23]||(L[23]=(...V)=>S(U)&&S(U)(...V))},[...L[36]||(L[36]=[_("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})],-1),It(" Download ",-1)])],10,e2),_("button",{class:B([Te.value,"w-full"]),disabled:!S(a),onClick:L[24]||(L[24]=(...V)=>S(w)&&S(w)(...V))}," Reset All ",10,t2)]),_("div",{class:B(qe.value)},null,2),_("div",{class:B(["rounded-xl overflow-hidden",t.value?"bg-white/5":"bg-black/[0.03]"])},[_("button",{class:B(["w-full flex items-center justify-between px-3 py-2 text-xs font-medium",S(e).colors.textSecondary??S(e).colors.textMuted]),onClick:L[25]||(L[25]=V=>d.value=!S(d))},[_("span",n2,[L[37]||(L[37]=_("span",{class:"font-mono opacity-50"},"{ }",-1)),L[38]||(L[38]=It(" Action Pipeline ",-1)),_("span",{class:B(["px-1.5 py-0.5 rounded-full font-mono text-[10px]",t.value?"bg-white/10 text-gray-400":"bg-black/5 text-gray-500"])},$e(S(x).length),3)]),(ce(),he("svg",{class:B(["w-3.5 h-3.5 transition-transform duration-200",S(d)?"rotate-180":""]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...L[39]||(L[39]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],2),Bi(_("div",{class:B(["border-t",t.value?"border-white/10":"border-black/5"])},[_("pre",{class:B(["p-3 text-[11px] font-mono overflow-x-auto max-h-52 overflow-y-auto leading-relaxed",S(e).colors.textMuted]),innerHTML:S(W)||"[]"},null,10,i2)],2),[[fh,S(d)]])],2)],2)])]))}}),r2=dn({__name:"App",setup(n){const{currentTheme:e}=ni(),t=ke(null);function i(r){t.value=r}function s(){t.value=null}return(r,o)=>(ce(),he("div",{class:B(["min-h-screen w-full bg-gradient-to-br p-4 md:p-6 lg:p-8 transition-colors duration-300",S(e).colors.bgPrimary])},[ft(Nr,{name:"view",mode:"out-in"},{default:Ys(()=>[t.value===null?(ce(),Cn(ov,{key:"home",onSelectTool:i})):t.value==="json-viewer"?(ce(),Cn(TE,{key:"json-viewer",onBack:s})):t.value==="text-compare"?(ce(),Cn($E,{key:"text-compare",onBack:s})):t.value==="base64"?(ce(),Cn(yw,{key:"base64",onBack:s})):t.value==="color-palette"?(ce(),Cn(lT,{key:"color-palette",onBack:s})):t.value==="image-editor"?(ce(),Cn(s2,{key:"image-editor",onBack:s})):nt("",!0)]),_:1})],2))}}),o2=du(r2,[["__scopeId","data-v-876c09b1"]]);Dg(o2).mount("#app");
