(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function gc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const gt={},Ir=[],Vn=()=>{},nh=()=>!1,Xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),_c=n=>n.startsWith("onUpdate:"),Pt=Object.assign,xc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},cp=Object.prototype.hasOwnProperty,at=(n,e)=>cp.call(n,e),Xe=Array.isArray,Ur=n=>jo(n)==="[object Map]",ih=n=>jo(n)==="[object Set]",qe=n=>typeof n=="function",Et=n=>typeof n=="string",Ui=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",rh=n=>(St(n)||qe(n))&&qe(n.then)&&qe(n.catch),sh=Object.prototype.toString,jo=n=>sh.call(n),up=n=>jo(n).slice(8,-1),oh=n=>jo(n)==="[object Object]",vc=n=>Et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,fs=gc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},fp=/-\w/g,Mn=Yo(n=>n.replace(fp,e=>e.slice(1).toUpperCase())),hp=/\B([A-Z])/g,Ni=Yo(n=>n.replace(hp,"-$1").toLowerCase()),qo=Yo(n=>n.charAt(0).toUpperCase()+n.slice(1)),da=Yo(n=>n?`on${qo(n)}`:""),Pi=(n,e)=>!Object.is(n,e),mo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ah=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Sc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},dp=n=>{const e=Et(n)?Number(n):NaN;return isNaN(e)?n:e};let au;const $o=()=>au||(au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mc(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Et(i)?_p(i):Mc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(n)||St(n))return n}const pp=/;(?![^(]*\))/g,mp=/:([^]+)/,gp=/\/\*[^]*?\*\//g;function _p(n){const e={};return n.replace(gp,"").split(pp).forEach(t=>{if(t){const i=t.split(mp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ue(n){let e="";if(Et(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=Ue(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const xp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vp=gc(xp);function lh(n){return!!n||n===""}const ch=n=>!!(n&&n.__v_isRef===!0),Rt=n=>Et(n)?n:n==null?"":Xe(n)||St(n)&&(n.toString===sh||!qe(n.toString))?ch(n)?Rt(n.value):JSON.stringify(n,uh,2):String(n),uh=(n,e)=>ch(e)?uh(n,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[pa(i,s)+" =>"]=r,t),{})}:ih(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>pa(t))}:Ui(e)?pa(e):St(e)&&!Xe(e)&&!oh(e)?String(e):e,pa=(n,e="")=>{var t;return Ui(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let nn;class Sp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=nn;try{return nn=this,e()}finally{nn=t}}}on(){++this._on===1&&(this.prevScope=nn,nn=this)}off(){this._on>0&&--this._on===0&&(nn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Mp(){return nn}let vt;const ma=new WeakSet;class fh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ma.has(this)&&(ma.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lu(this),ph(this);const e=vt,t=wn;vt=this,wn=!0;try{return this.fn()}finally{mh(this),vt=e,wn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ec(e);this.deps=this.depsTail=void 0,lu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ma.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ol(this)&&this.run()}get dirty(){return ol(this)}}let hh=0,hs,ds;function dh(n,e=!1){if(n.flags|=8,e){n.next=ds,ds=n;return}n.next=hs,hs=n}function yc(){hh++}function bc(){if(--hh>0)return;if(ds){let e=ds;for(ds=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;hs;){let e=hs;for(hs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ph(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function mh(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ec(i),yp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ol(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function gh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ss)||(n.globalVersion=Ss,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ol(n))))return;n.flags|=2;const e=n.dep,t=vt,i=wn;vt=n,wn=!0;try{ph(n);const r=n.fn(n._value);(e.version===0||Pi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{vt=t,wn=i,mh(n),n.flags&=-3}}function Ec(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ec(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function yp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let wn=!0;const _h=[];function ui(){_h.push(wn),wn=!1}function fi(){const n=_h.pop();wn=n===void 0?!0:n}function lu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=vt;vt=void 0;try{e()}finally{vt=t}}}let Ss=0;class bp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!vt||!wn||vt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==vt)t=this.activeLink=new bp(vt,this),vt.deps?(t.prevDep=vt.depsTail,vt.depsTail.nextDep=t,vt.depsTail=t):vt.deps=vt.depsTail=t,xh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=vt.depsTail,t.nextDep=void 0,vt.depsTail.nextDep=t,vt.depsTail=t,vt.deps===t&&(vt.deps=i)}return t}trigger(e){this.version++,Ss++,this.notify(e)}notify(e){yc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bc()}}}function xh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)xh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const al=new WeakMap,nr=Symbol(""),ll=Symbol(""),Ms=Symbol("");function kt(n,e,t){if(wn&&vt){let i=al.get(n);i||al.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Tc),r.map=i,r.key=t),r.track()}}function ii(n,e,t,i,r,s){const o=al.get(n);if(!o){Ss++;return}const a=l=>{l&&l.trigger()};if(yc(),e==="clear")o.forEach(a);else{const l=Xe(n),c=l&&vc(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Ms||!Ui(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Ms)),e){case"add":l?c&&a(o.get("length")):(a(o.get(nr)),Ur(n)&&a(o.get(ll)));break;case"delete":l||(a(o.get(nr)),Ur(n)&&a(o.get(ll)));break;case"set":Ur(n)&&a(o.get(nr));break}}bc()}function cr(n){const e=ot(n);return e===n?e:(kt(e,"iterate",Ms),vn(n)?e:e.map(Rn))}function Ko(n){return kt(n=ot(n),"iterate",Ms),n}function Ei(n,e){return hi(n)?kr(ir(n)?Rn(e):e):Rn(e)}const Ep={__proto__:null,[Symbol.iterator](){return ga(this,Symbol.iterator,n=>Ei(this,n))},concat(...n){return cr(this).concat(...n.map(e=>Xe(e)?cr(e):e))},entries(){return ga(this,"entries",n=>(n[1]=Ei(this,n[1]),n))},every(n,e){return Yn(this,"every",n,e,void 0,arguments)},filter(n,e){return Yn(this,"filter",n,e,t=>t.map(i=>Ei(this,i)),arguments)},find(n,e){return Yn(this,"find",n,e,t=>Ei(this,t),arguments)},findIndex(n,e){return Yn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Yn(this,"findLast",n,e,t=>Ei(this,t),arguments)},findLastIndex(n,e){return Yn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Yn(this,"forEach",n,e,void 0,arguments)},includes(...n){return _a(this,"includes",n)},indexOf(...n){return _a(this,"indexOf",n)},join(n){return cr(this).join(n)},lastIndexOf(...n){return _a(this,"lastIndexOf",n)},map(n,e){return Yn(this,"map",n,e,void 0,arguments)},pop(){return Kr(this,"pop")},push(...n){return Kr(this,"push",n)},reduce(n,...e){return cu(this,"reduce",n,e)},reduceRight(n,...e){return cu(this,"reduceRight",n,e)},shift(){return Kr(this,"shift")},some(n,e){return Yn(this,"some",n,e,void 0,arguments)},splice(...n){return Kr(this,"splice",n)},toReversed(){return cr(this).toReversed()},toSorted(n){return cr(this).toSorted(n)},toSpliced(...n){return cr(this).toSpliced(...n)},unshift(...n){return Kr(this,"unshift",n)},values(){return ga(this,"values",n=>Ei(this,n))}};function ga(n,e,t){const i=Ko(n),r=i[e]();return i!==n&&!vn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Tp=Array.prototype;function Yn(n,e,t,i,r,s){const o=Ko(n),a=o!==n&&!vn(n),l=o[e];if(l!==Tp[e]){const f=l.apply(n,s);return a?Rn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Ei(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function cu(n,e,t,i){const r=Ko(n);let s=t;return r!==n&&(vn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ei(n,a),l,n)}),r[e](s,...i)}function _a(n,e,t){const i=ot(n);kt(i,"iterate",Ms);const r=i[e](...t);return(r===-1||r===!1)&&Rc(t[0])?(t[0]=ot(t[0]),i[e](...t)):r}function Kr(n,e,t=[]){ui(),yc();const i=ot(n)[e].apply(n,t);return bc(),fi(),i}const Ap=gc("__proto__,__v_isRef,__isVue"),vh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ui));function wp(n){Ui(n)||(n=String(n));const e=ot(this);return kt(e,"has",n),e.hasOwnProperty(n)}class Sh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Op:Eh:s?bh:yh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Xe(e);if(!r){let l;if(o&&(l=Ep[t]))return l;if(t==="hasOwnProperty")return wp}const a=Reflect.get(e,t,Ot(e)?e:i);if((Ui(t)?vh.has(t):Ap(t))||(r||kt(e,"get",t),s))return a;if(Ot(a)){const l=o&&vc(t)?a:a.value;return r&&St(l)?ul(l):l}return St(a)?r?ul(a):wc(a):a}}class Mh extends Sh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Xe(e)&&vc(t);if(!this._isShallow){const c=hi(s);if(!vn(i)&&!hi(i)&&(s=ot(s),i=ot(i)),!o&&Ot(s)&&!Ot(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:at(e,t),l=Reflect.set(e,t,i,Ot(e)?e:r);return e===ot(r)&&(a?Pi(i,s)&&ii(e,"set",t,i):ii(e,"add",t,i)),l}deleteProperty(e,t){const i=at(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ii(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ui(t)||!vh.has(t))&&kt(e,"has",t),i}ownKeys(e){return kt(e,"iterate",Xe(e)?"length":nr),Reflect.ownKeys(e)}}class Cp extends Sh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Rp=new Mh,Pp=new Cp,Dp=new Mh(!0);const cl=n=>n,Os=n=>Reflect.getPrototypeOf(n);function Lp(n,e,t){return function(...i){const r=this.__v_raw,s=ot(r),o=Ur(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?cl:e?kr:Rn;return!e&&kt(s,"iterate",l?ll:nr),Pt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Bs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ip(n,e){const t={get(r){const s=this.__v_raw,o=ot(s),a=ot(r);n||(Pi(r,a)&&kt(o,"get",r),kt(o,"get",a));const{has:l}=Os(o),c=e?cl:n?kr:Rn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&kt(ot(r),"iterate",nr),r.size},has(r){const s=this.__v_raw,o=ot(s),a=ot(r);return n||(Pi(r,a)&&kt(o,"has",r),kt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ot(a),c=e?cl:n?kr:Rn;return!n&&kt(l,"iterate",nr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Pt(t,n?{add:Bs("add"),set:Bs("set"),delete:Bs("delete"),clear:Bs("clear")}:{add(r){!e&&!vn(r)&&!hi(r)&&(r=ot(r));const s=ot(this);return Os(s).has.call(s,r)||(s.add(r),ii(s,"add",r,r)),this},set(r,s){!e&&!vn(s)&&!hi(s)&&(s=ot(s));const o=ot(this),{has:a,get:l}=Os(o);let c=a.call(o,r);c||(r=ot(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Pi(s,u)&&ii(o,"set",r,s):ii(o,"add",r,s),this},delete(r){const s=ot(this),{has:o,get:a}=Os(s);let l=o.call(s,r);l||(r=ot(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ii(s,"delete",r,void 0),c},clear(){const r=ot(this),s=r.size!==0,o=r.clear();return s&&ii(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Lp(r,n,e)}),t}function Ac(n,e){const t=Ip(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(at(t,r)&&r in i?t:i,r,s)}const Up={get:Ac(!1,!1)},Np={get:Ac(!1,!0)},Fp={get:Ac(!0,!1)};const yh=new WeakMap,bh=new WeakMap,Eh=new WeakMap,Op=new WeakMap;function Bp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zp(n){return n.__v_skip||!Object.isExtensible(n)?0:Bp(up(n))}function wc(n){return hi(n)?n:Cc(n,!1,Rp,Up,yh)}function kp(n){return Cc(n,!1,Dp,Np,bh)}function ul(n){return Cc(n,!0,Pp,Fp,Eh)}function Cc(n,e,t,i,r){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=zp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function ir(n){return hi(n)?ir(n.__v_raw):!!(n&&n.__v_isReactive)}function hi(n){return!!(n&&n.__v_isReadonly)}function vn(n){return!!(n&&n.__v_isShallow)}function Rc(n){return n?!!n.__v_raw:!1}function ot(n){const e=n&&n.__v_raw;return e?ot(e):n}function Vp(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&ah(n,"__v_skip",!0),n}const Rn=n=>St(n)?wc(n):n,kr=n=>St(n)?ul(n):n;function Ot(n){return n?n.__v_isRef===!0:!1}function Ht(n){return Hp(n,!1)}function Hp(n,e){return Ot(n)?n:new Gp(n,e)}class Gp{constructor(e,t){this.dep=new Tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ot(e),this._value=t?e:Rn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||vn(e)||hi(e);e=i?e:ot(e),Pi(e,t)&&(this._rawValue=e,this._value=i?e:Rn(e),this.dep.trigger())}}function fe(n){return Ot(n)?n.value:n}const Wp={get:(n,e,t)=>e==="__v_raw"?n:fe(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ot(r)&&!Ot(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Th(n){return ir(n)?n:new Proxy(n,Wp)}class Xp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ss-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return dh(this,!0),!0}get value(){const e=this.dep.track();return gh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function jp(n,e,t=!1){let i,r;return qe(n)?i=n:(i=n.get,r=n.set),new Xp(i,r,t)}const zs={},Ro=new WeakMap;let $i;function Yp(n,e=!1,t=$i){if(t){let i=Ro.get(t);i||Ro.set(t,i=[]),i.push(n)}}function qp(n,e,t=gt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=b=>r?b:vn(b)||r===!1||r===0?ri(b,1):ri(b);let u,f,h,p,_=!1,x=!1;if(Ot(n)?(f=()=>n.value,_=vn(n)):ir(n)?(f=()=>c(n),_=!0):Xe(n)?(x=!0,_=n.some(b=>ir(b)||vn(b)),f=()=>n.map(b=>{if(Ot(b))return b.value;if(ir(b))return c(b);if(qe(b))return l?l(b,2):b()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ui();try{h()}finally{fi()}}const b=$i;$i=u;try{return l?l(n,3,[p]):n(p)}finally{$i=b}}:f=Vn,e&&r){const b=f,A=r===!0?1/0:r;f=()=>ri(b(),A)}const m=Mp(),d=()=>{u.stop(),m&&m.active&&xc(m.effects,u)};if(s&&e){const b=e;e=(...A)=>{b(...A),d()}}let T=x?new Array(n.length).fill(zs):zs;const C=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const A=u.run();if(r||_||(x?A.some((R,L)=>Pi(R,T[L])):Pi(A,T))){h&&h();const R=$i;$i=u;try{const L=[A,T===zs?void 0:x&&T[0]===zs?[]:T,p];T=A,l?l(e,3,L):e(...L)}finally{$i=R}}}else u.run()};return a&&a(C),u=new fh(f),u.scheduler=o?()=>o(C,!1):C,p=b=>Yp(b,!1,u),h=u.onStop=()=>{const b=Ro.get(u);if(b){if(l)l(b,4);else for(const A of b)A();Ro.delete(u)}},e?i?C(!0):T=u.run():o?o(C.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ri(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ot(n))ri(n.value,e,t);else if(Xe(n))for(let i=0;i<n.length;i++)ri(n[i],e,t);else if(ih(n)||Ur(n))n.forEach(i=>{ri(i,e,t)});else if(oh(n)){for(const i in n)ri(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ri(n[i],e,t)}return n}function Ds(n,e,t,i){try{return i?n(...i):n()}catch(r){Zo(r,e,t)}}function Pn(n,e,t,i){if(qe(n)){const r=Ds(n,e,t,i);return r&&rh(r)&&r.catch(s=>{Zo(s,e,t)}),r}if(Xe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Pn(n[s],e,t,i));return r}}function Zo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||gt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ui(),Ds(s,null,10,[n,l,c]),fi();return}}$p(n,t,r,i,o)}function $p(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Kt=[];let Nn=-1;const Nr=[];let Ti=null,Dr=0;const Ah=Promise.resolve();let Po=null;function wh(n){const e=Po||Ah;return n?e.then(this?n.bind(this):n):e}function Kp(n){let e=Nn+1,t=Kt.length;for(;e<t;){const i=e+t>>>1,r=Kt[i],s=ys(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Pc(n){if(!(n.flags&1)){const e=ys(n),t=Kt[Kt.length-1];!t||!(n.flags&2)&&e>=ys(t)?Kt.push(n):Kt.splice(Kp(e),0,n),n.flags|=1,Ch()}}function Ch(){Po||(Po=Ah.then(Ph))}function Zp(n){Xe(n)?Nr.push(...n):Ti&&n.id===-1?Ti.splice(Dr+1,0,n):n.flags&1||(Nr.push(n),n.flags|=1),Ch()}function uu(n,e,t=Nn+1){for(;t<Kt.length;t++){const i=Kt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Kt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Rh(n){if(Nr.length){const e=[...new Set(Nr)].sort((t,i)=>ys(t)-ys(i));if(Nr.length=0,Ti){Ti.push(...e);return}for(Ti=e,Dr=0;Dr<Ti.length;Dr++){const t=Ti[Dr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ti=null,Dr=0}}const ys=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ph(n){try{for(Nn=0;Nn<Kt.length;Nn++){const e=Kt[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ds(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<Kt.length;Nn++){const e=Kt[Nn];e&&(e.flags&=-2)}Nn=-1,Kt.length=0,Rh(),Po=null,(Kt.length||Nr.length)&&Ph()}}let fn=null,Dh=null;function Do(n){const e=fn;return fn=n,Dh=n&&n.type.__scopeId||null,e}function ps(n,e=fn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Uo(-1);const s=Do(e);let o;try{o=n(...r)}finally{Do(s),i._d&&Uo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Jp(n,e){if(fn===null)return n;const t=ia(fn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=gt]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&ri(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Bi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ui(),Pn(l,t,8,[n.el,a,n,e]),fi())}}function Qp(n,e){if(Vt){let t=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===t&&(t=Vt.provides=Object.create(i)),t[n]=e}}function go(n,e,t=!1){const i=cd();if(i||Fr){let r=Fr?Fr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const em=Symbol.for("v-scx"),tm=()=>go(em);function rr(n,e,t){return Lh(n,e,t)}function Lh(n,e,t=gt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Pt({},t),l=e&&i||!e&&s!=="post";let c;if(Ts){if(s==="sync"){const p=tm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Vn,p.resume=Vn,p.pause=Vn,p}}const u=Vt;a.call=(p,_,x)=>Pn(p,u,_,x);let f=!1;s==="post"?a.scheduler=p=>{$t(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():Pc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=qp(n,e,a);return Ts&&(c?c.push(h):l&&h()),h}function nm(n,e,t){const i=this.proxy,r=Et(n)?n.includes(".")?Ih(i,n):()=>i[n]:n.bind(i,i);let s;qe(e)?s=e:(s=e.handler,t=e);const o=Ls(this),a=Lh(r,s.bind(i),t);return o(),a}function Ih(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Uh=Symbol("_vte"),Nh=n=>n.__isTeleport,ms=n=>n&&(n.disabled||n.disabled===""),fu=n=>n&&(n.defer||n.defer===""),hu=n=>typeof SVGElement<"u"&&n instanceof SVGElement,du=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,fl=(n,e)=>{const t=n&&n.to;return Et(t)?e?e(t):null:t},Fh={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:p,querySelector:_,createText:x,createComment:m}}=c,d=ms(e.props);let{shapeFlag:T,children:C,dynamicChildren:b}=e;if(n==null){const A=e.el=x(""),R=e.anchor=x("");p(A,t,i),p(R,t,i);const L=(v,y)=>{T&16&&u(C,v,y,r,s,o,a,l)},z=()=>{const v=e.target=fl(e.props,_),y=Oh(v,e,x,p);v&&(o!=="svg"&&hu(v)?o="svg":o!=="mathml"&&du(v)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(v),d||(L(v,y),_o(e,!1)))};d&&(L(t,R),_o(e,!0)),fu(e.props)?(e.el.__isMounted=!1,$t(()=>{z(),delete e.el.__isMounted},s)):z()}else{if(fu(e.props)&&n.el.__isMounted===!1){$t(()=>{Fh.process(n,e,t,i,r,s,o,a,l,c)},s);return}e.el=n.el,e.targetStart=n.targetStart;const A=e.anchor=n.anchor,R=e.target=n.target,L=e.targetAnchor=n.targetAnchor,z=ms(n.props),v=z?t:R,y=z?A:L;if(o==="svg"||hu(R)?o="svg":(o==="mathml"||du(R))&&(o="mathml"),b?(h(n.dynamicChildren,b,v,r,s,o,a),Fc(n,e,!0)):l||f(n,e,v,y,r,s,o,a,!1),d)z?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):ks(e,t,A,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const I=e.target=fl(e.props,_);I&&ks(e,I,null,c,0)}else z&&ks(e,R,L,c,1);_o(e,d)}},remove(n,e,t,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:h}=n;if(f&&(r(c),r(u)),s&&r(l),o&16){const p=s||!ms(h);for(let _=0;_<a.length;_++){const x=a[_];i(x,e,t,p,!!x.dynamicChildren)}}},move:ks,hydrate:im};function ks(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=s===2;if(f&&i(o,e,t),(!f||ms(u))&&l&16)for(let h=0;h<c.length;h++)r(c[h],e,t,2);f&&i(a,e,t)}function im(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function h(x,m,d,T){m.anchor=f(o(x),m,a(x),t,i,r,s),m.targetStart=d,m.targetAnchor=T}const p=e.target=fl(e.props,l),_=ms(e.props);if(p){const x=p._lpa||p.firstChild;if(e.shapeFlag&16)if(_)h(n,e,x,x&&o(x));else{e.anchor=o(n);let m=x;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||Oh(p,e,u,c),f(x&&o(x),e,p,t,i,r,s)}_o(e,_)}else _&&e.shapeFlag&16&&h(n,e,n,o(n));return e.anchor&&o(e.anchor)}const rm=Fh;function _o(n,e){const t=n.ctx;if(t&&t.ut){let i,r;for(e?(i=n.el,r=n.anchor):(i=n.targetStart,r=n.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Oh(n,e,t,i){const r=e.targetStart=t(""),s=e.targetAnchor=t("");return r[Uh]=s,n&&(i(r,n),i(s,n)),s}const ti=Symbol("_leaveCb"),Vs=Symbol("_enterCb");function sm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dc(()=>{n.isMounted=!0}),Xh(()=>{n.isUnmounting=!0}),n}const pn=[Function,Array],Bh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pn,onEnter:pn,onAfterEnter:pn,onEnterCancelled:pn,onBeforeLeave:pn,onLeave:pn,onAfterLeave:pn,onLeaveCancelled:pn,onBeforeAppear:pn,onAppear:pn,onAfterAppear:pn,onAppearCancelled:pn},zh=n=>{const e=n.subTree;return e.component?zh(e.component):e},om={name:"BaseTransition",props:Bh,setup(n,{slots:e}){const t=cd(),i=sm();return()=>{const r=e.default&&Hh(e.default(),!0);if(!r||!r.length)return;const s=kh(r),o=ot(n),{mode:a}=o;if(i.isLeaving)return xa(s);const l=pu(s);if(!l)return xa(s);let c=hl(l,o,i,t,f=>c=f);l.type!==Zt&&bs(l,c);let u=t.subTree&&pu(t.subTree);if(u&&u.type!==Zt&&!Ki(u,l)&&zh(t).type!==Zt){let f=hl(u,o,i,t);if(bs(u,f),a==="out-in"&&l.type!==Zt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},xa(s);a==="in-out"&&l.type!==Zt?f.delayLeave=(h,p,_)=>{const x=Vh(i,u);x[String(u.key)]=u,h[ti]=()=>{p(),h[ti]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function kh(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Zt){e=t;break}}return e}const am=om;function Vh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function hl(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:m,onAppear:d,onAfterAppear:T,onAppearCancelled:C}=e,b=String(n.key),A=Vh(t,n),R=(v,y)=>{v&&Pn(v,i,9,y)},L=(v,y)=>{const I=y[1];R(v,y),Xe(v)?v.every(U=>U.length<=1)&&I():v.length<=1&&I()},z={mode:o,persisted:a,beforeEnter(v){let y=l;if(!t.isMounted)if(s)y=m||l;else return;v[ti]&&v[ti](!0);const I=A[b];I&&Ki(n,I)&&I.el[ti]&&I.el[ti](),R(y,[v])},enter(v){let y=c,I=u,U=f;if(!t.isMounted)if(s)y=d||c,I=T||u,U=C||f;else return;let H=!1;const ne=v[Vs]=ie=>{H||(H=!0,ie?R(U,[v]):R(I,[v]),z.delayedLeave&&z.delayedLeave(),v[Vs]=void 0)};y?L(y,[v,ne]):ne()},leave(v,y){const I=String(n.key);if(v[Vs]&&v[Vs](!0),t.isUnmounting)return y();R(h,[v]);let U=!1;const H=v[ti]=ne=>{U||(U=!0,y(),ne?R(x,[v]):R(_,[v]),v[ti]=void 0,A[I]===n&&delete A[I])};A[I]=n,p?L(p,[v,H]):H()},clone(v){const y=hl(v,e,t,i,r);return r&&r(y),y}};return z}function xa(n){if(Jo(n))return n=Li(n),n.children=null,n}function pu(n){if(!Jo(n))return Nh(n.type)&&n.children?kh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function bs(n,e){n.shapeFlag&6&&n.component?(n.transition=e,bs(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Hh(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===rn?(o.patchFlag&128&&r++,i=i.concat(Hh(o.children,e,a))):(e||o.type!==Zt)&&i.push(a!=null?Li(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function jr(n,e){return qe(n)?Pt({name:n.name},e,{setup:n}):n}function Gh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Lo=new WeakMap;function gs(n,e,t,i,r=!1){if(Xe(n)){n.forEach((_,x)=>gs(_,e&&(Xe(e)?e[x]:e),t,i,r));return}if(_s(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&gs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ia(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===gt?a.refs={}:a.refs,f=a.setupState,h=ot(f),p=f===gt?nh:_=>at(h,_);if(c!=null&&c!==l){if(mu(e),Et(c))u[c]=null,p(c)&&(f[c]=null);else if(Ot(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(qe(l))Ds(l,a,12,[o,u]);else{const _=Et(l),x=Ot(l);if(_||x){const m=()=>{if(n.f){const d=_?p(l)?f[l]:u[l]:l.value;if(r)Xe(d)&&xc(d,s);else if(Xe(d))d.includes(s)||d.push(s);else if(_)u[l]=[s],p(l)&&(f[l]=u[l]);else{const T=[s];l.value=T,n.k&&(u[n.k]=T)}}else _?(u[l]=o,p(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const d=()=>{m(),Lo.delete(n)};d.id=-1,Lo.set(n,d),$t(d,t)}else mu(n),m()}}}function mu(n){const e=Lo.get(n);e&&(e.flags|=8,Lo.delete(n))}$o().requestIdleCallback;$o().cancelIdleCallback;const _s=n=>!!n.type.__asyncLoader,Jo=n=>n.type.__isKeepAlive;function lm(n,e){Wh(n,"a",e)}function cm(n,e){Wh(n,"da",e)}function Wh(n,e,t=Vt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Qo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Jo(r.parent.vnode)&&um(i,e,t,r),r=r.parent}}function um(n,e,t,i){const r=Qo(e,n,i,!0);Lc(()=>{xc(i[e],r)},t)}function Qo(n,e,t=Vt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ui();const a=Ls(t),l=Pn(e,t,n,o);return a(),fi(),l});return i?r.unshift(s):r.push(s),s}}const gi=n=>(e,t=Vt)=>{(!Ts||n==="sp")&&Qo(n,(...i)=>e(...i),t)},fm=gi("bm"),Dc=gi("m"),hm=gi("bu"),dm=gi("u"),Xh=gi("bum"),Lc=gi("um"),pm=gi("sp"),mm=gi("rtg"),gm=gi("rtc");function _m(n,e=Vt){Qo("ec",n,e)}const xm="components";function vm(n,e){return Mm(xm,n,!0,e)||n}const Sm=Symbol.for("v-ndc");function Mm(n,e,t=!0,i=!1){const r=fn||Vt;if(r){const s=r.type;{const a=sg(s,!1);if(a&&(a===e||a===Mn(e)||a===qo(Mn(e))))return s}const o=gu(r[n]||s[n],e)||gu(r.appContext[n],e);return!o&&i?s:o}}function gu(n,e){return n&&(n[e]||n[Mn(e)]||n[qo(Mn(e))])}function Ic(n,e,t,i){let r;const s=t,o=Xe(n);if(o||Et(n)){const a=o&&ir(n);let l=!1,c=!1;a&&(l=!vn(n),c=hi(n),n=Ko(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?kr(Rn(n[u])):Rn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(St(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const dl=n=>n?ud(n)?ia(n):dl(n.parent):null,xs=Pt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>dl(n.parent),$root:n=>dl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Yh(n),$forceUpdate:n=>n.f||(n.f=()=>{Pc(n.update)}),$nextTick:n=>n.n||(n.n=wh.bind(n.proxy)),$watch:n=>nm.bind(n)}),va=(n,e)=>n!==gt&&!n.__isScriptSetup&&at(n,e),ym={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(va(i,e))return o[e]=1,i[e];if(r!==gt&&at(r,e))return o[e]=2,r[e];if(at(s,e))return o[e]=3,s[e];if(t!==gt&&at(t,e))return o[e]=4,t[e];pl&&(o[e]=0)}}const c=xs[e];let u,f;if(c)return e==="$attrs"&&kt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==gt&&at(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,at(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return va(r,e)?(r[e]=t,!0):i!==gt&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==gt&&a[0]!=="$"&&at(n,a)||va(e,a)||at(s,a)||at(i,a)||at(xs,a)||at(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _u(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let pl=!0;function bm(n){const e=Yh(n),t=n.proxy,i=n.ctx;pl=!1,e.beforeCreate&&xu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:T,destroyed:C,unmounted:b,render:A,renderTracked:R,renderTriggered:L,errorCaptured:z,serverPrefetch:v,expose:y,inheritAttrs:I,components:U,directives:H,filters:ne}=e;if(c&&Em(c,i,null),o)for(const V in o){const re=o[V];qe(re)&&(i[V]=re.bind(t))}if(r){const V=r.call(t,t);St(V)&&(n.data=wc(V))}if(pl=!0,s)for(const V in s){const re=s[V],ve=qe(re)?re.bind(t,t):qe(re.get)?re.get.bind(t,t):Vn,_e=!qe(re)&&qe(re.set)?re.set.bind(t):Vn,ye=Ut({get:ve,set:_e});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>ye.value,set:ke=>ye.value=ke})}if(a)for(const V in a)jh(a[V],i,t,V);if(l){const V=qe(l)?l.call(t):l;Reflect.ownKeys(V).forEach(re=>{Qp(re,V[re])})}u&&xu(u,n,"c");function K(V,re){Xe(re)?re.forEach(ve=>V(ve.bind(t))):re&&V(re.bind(t))}if(K(fm,f),K(Dc,h),K(hm,p),K(dm,_),K(lm,x),K(cm,m),K(_m,z),K(gm,R),K(mm,L),K(Xh,T),K(Lc,b),K(pm,v),Xe(y))if(y.length){const V=n.exposed||(n.exposed={});y.forEach(re=>{Object.defineProperty(V,re,{get:()=>t[re],set:ve=>t[re]=ve,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===Vn&&(n.render=A),I!=null&&(n.inheritAttrs=I),U&&(n.components=U),H&&(n.directives=H),v&&Gh(n)}function Em(n,e,t=Vn){Xe(n)&&(n=ml(n));for(const i in n){const r=n[i];let s;St(r)?"default"in r?s=go(r.from||i,r.default,!0):s=go(r.from||i):s=go(r),Ot(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function xu(n,e,t){Pn(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function jh(n,e,t,i){let r=i.includes(".")?Ih(t,i):()=>t[i];if(Et(n)){const s=e[n];qe(s)&&rr(r,s)}else if(qe(n))rr(r,n.bind(t));else if(St(n))if(Xe(n))n.forEach(s=>jh(s,e,t,i));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&rr(r,s,n)}}function Yh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Io(l,c,o,!0)),Io(l,e,o)),St(e)&&s.set(e,l),l}function Io(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Io(n,s,t,!0),r&&r.forEach(o=>Io(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Tm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Tm={data:vu,props:Su,emits:Su,methods:ls,computed:ls,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:ls,directives:ls,watch:wm,provide:vu,inject:Am};function vu(n,e){return e?n?function(){return Pt(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Am(n,e){return ls(ml(n),ml(e))}function ml(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Yt(n,e){return n?[...new Set([].concat(n,e))]:e}function ls(n,e){return n?Pt(Object.create(null),n,e):e}function Su(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:Pt(Object.create(null),_u(n),_u(e??{})):e}function wm(n,e){if(!n)return e;if(!e)return n;const t=Pt(Object.create(null),n);for(const i in e)t[i]=Yt(n[i],e[i]);return t}function qh(){return{app:null,config:{isNativeTag:nh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cm=0;function Rm(n,e){return function(i,r=null){qe(i)||(i=Pt({},i)),r!=null&&!St(r)&&(r=null);const s=qh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Cm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:lg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||At(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,ia(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Pn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Fr;Fr=c;try{return u()}finally{Fr=f}}};return c}}let Fr=null;const Pm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Mn(e)}Modifiers`]||n[`${Ni(e)}Modifiers`];function Dm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let r=t;const s=e.startsWith("update:"),o=s&&Pm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Et(u)?u.trim():u)),o.number&&(r=t.map(Sc)));let a,l=i[a=da(e)]||i[a=da(Mn(e))];!l&&s&&(l=i[a=da(Ni(e))]),l&&Pn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Pn(c,n,6,r)}}const Lm=new WeakMap;function $h(n,e,t=!1){const i=t?Lm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=$h(c,e,!0);u&&(a=!0,Pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(St(n)&&i.set(n,null),null):(Xe(s)?s.forEach(l=>o[l]=null):Pt(o,s),St(n)&&i.set(n,o),o)}function ea(n,e){return!n||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,Ni(e))||at(n,e))}function Mu(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:x}=n,m=Do(n);let d,T;try{if(t.shapeFlag&4){const b=r||i,A=b;d=Fn(c.call(A,b,u,f,p,h,_)),T=a}else{const b=e;d=Fn(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),T=e.props?a:Im(a)}}catch(b){vs.length=0,Zo(b,n,1),d=At(Zt)}let C=d;if(T&&x!==!1){const b=Object.keys(T),{shapeFlag:A}=C;b.length&&A&7&&(s&&b.some(_c)&&(T=Um(T,s)),C=Li(C,T,!1,!0))}return t.dirs&&(C=Li(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&bs(C,t.transition),d=C,Do(m),d}const Im=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xo(t))&&((e||(e={}))[t]=n[t]);return e},Um=(n,e)=>{const t={};for(const i in n)(!_c(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Nm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?yu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ea(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?yu(i,o,c):!0:!!o;return!1}function yu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ea(t,s))return!0}return!1}function Fm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Kh={},Zh=()=>Object.create(Kh),Jh=n=>Object.getPrototypeOf(n)===Kh;function Om(n,e,t,i=!1){const r={},s=Zh();n.propsDefaults=Object.create(null),Qh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:kp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Bm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=ot(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ea(n.emitsOptions,h))continue;const p=e[h];if(l)if(at(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=Mn(h);r[_]=gl(l,a,_,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Qh(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!at(e,f)&&((u=Ni(f))===f||!at(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=gl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!at(e,f))&&(delete s[f],c=!0)}c&&ii(n.attrs,"set","")}function Qh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(fs(l))continue;const c=e[l];let u;r&&at(r,u=Mn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ea(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ot(t),c=a||gt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=gl(r,l,f,c[f],n,!at(c,f))}}return o}function gl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ls(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ni(t))&&(i=!0))}return i}const zm=new WeakMap;function ed(n,e,t=!1){const i=t?zm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=f=>{l=!0;const[h,p]=ed(f,e,!0);Pt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return St(n)&&i.set(n,Ir),Ir;if(Xe(s))for(let u=0;u<s.length;u++){const f=Mn(s[u]);bu(f)&&(o[f]=gt)}else if(s)for(const u in s){const f=Mn(u);if(bu(f)){const h=s[u],p=o[f]=Xe(h)||qe(h)?{type:h}:Pt({},h),_=p.type;let x=!1,m=!0;if(Xe(_))for(let d=0;d<_.length;++d){const T=_[d],C=qe(T)&&T.name;if(C==="Boolean"){x=!0;break}else C==="String"&&(m=!1)}else x=qe(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||at(p,"default"))&&a.push(f)}}const c=[o,a];return St(n)&&i.set(n,c),c}function bu(n){return n[0]!=="$"&&!fs(n)}const Uc=n=>n==="_"||n==="_ctx"||n==="$stable",Nc=n=>Xe(n)?n.map(Fn):[Fn(n)],km=(n,e,t)=>{if(e._n)return e;const i=ps((...r)=>Nc(e(...r)),t);return i._c=!1,i},td=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Uc(r))continue;const s=n[r];if(qe(s))e[r]=km(r,s,i);else if(s!=null){const o=Nc(s);e[r]=()=>o}}},nd=(n,e)=>{const t=Nc(e);n.slots.default=()=>t},id=(n,e,t)=>{for(const i in e)(t||!Uc(i))&&(n[i]=e[i])},Vm=(n,e,t)=>{const i=n.slots=Zh();if(n.vnode.shapeFlag&32){const r=e._;r?(id(i,e,t),t&&ah(i,"_",r,!0)):td(e,i)}else e&&nd(n,e)},Hm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=gt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:id(r,e,t):(s=!e.$stable,td(e,r)),o=e}else e&&(nd(n,e),o={default:1});if(s)for(const a in r)!Uc(a)&&o[a]==null&&delete r[a]},$t=Ym;function Gm(n){return Wm(n)}function Wm(n,e){const t=$o();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Vn,insertStaticContent:_}=n,x=(w,P,k,Q=null,j=null,te=null,E=void 0,le=null,oe=!!P.dynamicChildren)=>{if(w===P)return;w&&!Ki(w,P)&&(Q=q(w),ke(w,j,te,!0),w=null),P.patchFlag===-2&&(oe=!1,P.dynamicChildren=null);const{type:se,ref:ae,shapeFlag:S}=P;switch(se){case ta:m(w,P,k,Q);break;case Zt:d(w,P,k,Q);break;case Ma:w==null&&T(P,k,Q,E);break;case rn:U(w,P,k,Q,j,te,E,le,oe);break;default:S&1?A(w,P,k,Q,j,te,E,le,oe):S&6?H(w,P,k,Q,j,te,E,le,oe):(S&64||S&128)&&se.process(w,P,k,Q,j,te,E,le,oe,me)}ae!=null&&j?gs(ae,w&&w.ref,te,P||w,!P):ae==null&&w&&w.ref!=null&&gs(w.ref,null,te,w,!0)},m=(w,P,k,Q)=>{if(w==null)i(P.el=a(P.children),k,Q);else{const j=P.el=w.el;P.children!==w.children&&c(j,P.children)}},d=(w,P,k,Q)=>{w==null?i(P.el=l(P.children||""),k,Q):P.el=w.el},T=(w,P,k,Q)=>{[w.el,w.anchor]=_(w.children,P,k,Q,w.el,w.anchor)},C=({el:w,anchor:P},k,Q)=>{let j;for(;w&&w!==P;)j=h(w),i(w,k,Q),w=j;i(P,k,Q)},b=({el:w,anchor:P})=>{let k;for(;w&&w!==P;)k=h(w),r(w),w=k;r(P)},A=(w,P,k,Q,j,te,E,le,oe)=>{if(P.type==="svg"?E="svg":P.type==="math"&&(E="mathml"),w==null)R(P,k,Q,j,te,E,le,oe);else{const se=w.el&&w.el._isVueCE?w.el:null;try{se&&se._beginPatch(),v(w,P,j,te,E,le,oe)}finally{se&&se._endPatch()}}},R=(w,P,k,Q,j,te,E,le)=>{let oe,se;const{props:ae,shapeFlag:S,transition:g,dirs:D}=w;if(oe=w.el=o(w.type,te,ae&&ae.is,ae),S&8?u(oe,w.children):S&16&&z(w.children,oe,null,Q,j,Sa(w,te),E,le),D&&Bi(w,null,Q,"created"),L(oe,w,w.scopeId,E,Q),ae){for(const ee in ae)ee!=="value"&&!fs(ee)&&s(oe,ee,null,ae[ee],te,Q);"value"in ae&&s(oe,"value",null,ae.value,te),(se=ae.onVnodeBeforeMount)&&In(se,Q,w)}D&&Bi(w,null,Q,"beforeMount");const X=Xm(j,g);X&&g.beforeEnter(oe),i(oe,P,k),((se=ae&&ae.onVnodeMounted)||X||D)&&$t(()=>{se&&In(se,Q,w),X&&g.enter(oe),D&&Bi(w,null,Q,"mounted")},j)},L=(w,P,k,Q,j)=>{if(k&&p(w,k),Q)for(let te=0;te<Q.length;te++)p(w,Q[te]);if(j){let te=j.subTree;if(P===te||od(te.type)&&(te.ssContent===P||te.ssFallback===P)){const E=j.vnode;L(w,E,E.scopeId,E.slotScopeIds,j.parent)}}},z=(w,P,k,Q,j,te,E,le,oe=0)=>{for(let se=oe;se<w.length;se++){const ae=w[se]=le?Ai(w[se]):Fn(w[se]);x(null,ae,P,k,Q,j,te,E,le)}},v=(w,P,k,Q,j,te,E)=>{const le=P.el=w.el;let{patchFlag:oe,dynamicChildren:se,dirs:ae}=P;oe|=w.patchFlag&16;const S=w.props||gt,g=P.props||gt;let D;if(k&&zi(k,!1),(D=g.onVnodeBeforeUpdate)&&In(D,k,P,w),ae&&Bi(P,w,k,"beforeUpdate"),k&&zi(k,!0),(S.innerHTML&&g.innerHTML==null||S.textContent&&g.textContent==null)&&u(le,""),se?y(w.dynamicChildren,se,le,k,Q,Sa(P,j),te):E||re(w,P,le,null,k,Q,Sa(P,j),te,!1),oe>0){if(oe&16)I(le,S,g,k,j);else if(oe&2&&S.class!==g.class&&s(le,"class",null,g.class,j),oe&4&&s(le,"style",S.style,g.style,j),oe&8){const X=P.dynamicProps;for(let ee=0;ee<X.length;ee++){const W=X[ee],we=S[W],he=g[W];(he!==we||W==="value")&&s(le,W,we,he,j,k)}}oe&1&&w.children!==P.children&&u(le,P.children)}else!E&&se==null&&I(le,S,g,k,j);((D=g.onVnodeUpdated)||ae)&&$t(()=>{D&&In(D,k,P,w),ae&&Bi(P,w,k,"updated")},Q)},y=(w,P,k,Q,j,te,E)=>{for(let le=0;le<P.length;le++){const oe=w[le],se=P[le],ae=oe.el&&(oe.type===rn||!Ki(oe,se)||oe.shapeFlag&198)?f(oe.el):k;x(oe,se,ae,null,Q,j,te,E,!0)}},I=(w,P,k,Q,j)=>{if(P!==k){if(P!==gt)for(const te in P)!fs(te)&&!(te in k)&&s(w,te,P[te],null,j,Q);for(const te in k){if(fs(te))continue;const E=k[te],le=P[te];E!==le&&te!=="value"&&s(w,te,le,E,j,Q)}"value"in k&&s(w,"value",P.value,k.value,j)}},U=(w,P,k,Q,j,te,E,le,oe)=>{const se=P.el=w?w.el:a(""),ae=P.anchor=w?w.anchor:a("");let{patchFlag:S,dynamicChildren:g,slotScopeIds:D}=P;D&&(le=le?le.concat(D):D),w==null?(i(se,k,Q),i(ae,k,Q),z(P.children||[],k,ae,j,te,E,le,oe)):S>0&&S&64&&g&&w.dynamicChildren&&w.dynamicChildren.length===g.length?(y(w.dynamicChildren,g,k,j,te,E,le),(P.key!=null||j&&P===j.subTree)&&Fc(w,P,!0)):re(w,P,k,ae,j,te,E,le,oe)},H=(w,P,k,Q,j,te,E,le,oe)=>{P.slotScopeIds=le,w==null?P.shapeFlag&512?j.ctx.activate(P,k,Q,E,oe):ne(P,k,Q,j,te,E,oe):ie(w,P,oe)},ne=(w,P,k,Q,j,te,E)=>{const le=w.component=eg(w,Q,j);if(Jo(w)&&(le.ctx.renderer=me),tg(le,!1,E),le.asyncDep){if(j&&j.registerDep(le,K,E),!w.el){const oe=le.subTree=At(Zt);d(null,oe,P,k),w.placeholder=oe.el}}else K(le,w,P,k,j,te,E)},ie=(w,P,k)=>{const Q=P.component=w.component;if(Nm(w,P,k))if(Q.asyncDep&&!Q.asyncResolved){V(Q,P,k);return}else Q.next=P,Q.update();else P.el=w.el,Q.vnode=P},K=(w,P,k,Q,j,te,E)=>{const le=()=>{if(w.isMounted){let{next:S,bu:g,u:D,parent:X,vnode:ee}=w;{const Fe=rd(w);if(Fe){S&&(S.el=ee.el,V(w,S,E)),Fe.asyncDep.then(()=>{w.isUnmounted||le()});return}}let W=S,we;zi(w,!1),S?(S.el=ee.el,V(w,S,E)):S=ee,g&&mo(g),(we=S.props&&S.props.onVnodeBeforeUpdate)&&In(we,X,S,ee),zi(w,!0);const he=Mu(w),Pe=w.subTree;w.subTree=he,x(Pe,he,f(Pe.el),q(Pe),w,j,te),S.el=he.el,W===null&&Fm(w,he.el),D&&$t(D,j),(we=S.props&&S.props.onVnodeUpdated)&&$t(()=>In(we,X,S,ee),j)}else{let S;const{el:g,props:D}=P,{bm:X,m:ee,parent:W,root:we,type:he}=w,Pe=_s(P);zi(w,!1),X&&mo(X),!Pe&&(S=D&&D.onVnodeBeforeMount)&&In(S,W,P),zi(w,!0);{we.ce&&we.ce._def.shadowRoot!==!1&&we.ce._injectChildStyle(he);const Fe=w.subTree=Mu(w);x(null,Fe,k,Q,w,j,te),P.el=Fe.el}if(ee&&$t(ee,j),!Pe&&(S=D&&D.onVnodeMounted)){const Fe=P;$t(()=>In(S,W,Fe),j)}(P.shapeFlag&256||W&&_s(W.vnode)&&W.vnode.shapeFlag&256)&&w.a&&$t(w.a,j),w.isMounted=!0,P=k=Q=null}};w.scope.on();const oe=w.effect=new fh(le);w.scope.off();const se=w.update=oe.run.bind(oe),ae=w.job=oe.runIfDirty.bind(oe);ae.i=w,ae.id=w.uid,oe.scheduler=()=>Pc(ae),zi(w,!0),se()},V=(w,P,k)=>{P.component=w;const Q=w.vnode.props;w.vnode=P,w.next=null,Bm(w,P.props,Q,k),Hm(w,P.children,k),ui(),uu(w),fi()},re=(w,P,k,Q,j,te,E,le,oe=!1)=>{const se=w&&w.children,ae=w?w.shapeFlag:0,S=P.children,{patchFlag:g,shapeFlag:D}=P;if(g>0){if(g&128){_e(se,S,k,Q,j,te,E,le,oe);return}else if(g&256){ve(se,S,k,Q,j,te,E,le,oe);return}}D&8?(ae&16&&O(se,j,te),S!==se&&u(k,S)):ae&16?D&16?_e(se,S,k,Q,j,te,E,le,oe):O(se,j,te,!0):(ae&8&&u(k,""),D&16&&z(S,k,Q,j,te,E,le,oe))},ve=(w,P,k,Q,j,te,E,le,oe)=>{w=w||Ir,P=P||Ir;const se=w.length,ae=P.length,S=Math.min(se,ae);let g;for(g=0;g<S;g++){const D=P[g]=oe?Ai(P[g]):Fn(P[g]);x(w[g],D,k,null,j,te,E,le,oe)}se>ae?O(w,j,te,!0,!1,S):z(P,k,Q,j,te,E,le,oe,S)},_e=(w,P,k,Q,j,te,E,le,oe)=>{let se=0;const ae=P.length;let S=w.length-1,g=ae-1;for(;se<=S&&se<=g;){const D=w[se],X=P[se]=oe?Ai(P[se]):Fn(P[se]);if(Ki(D,X))x(D,X,k,null,j,te,E,le,oe);else break;se++}for(;se<=S&&se<=g;){const D=w[S],X=P[g]=oe?Ai(P[g]):Fn(P[g]);if(Ki(D,X))x(D,X,k,null,j,te,E,le,oe);else break;S--,g--}if(se>S){if(se<=g){const D=g+1,X=D<ae?P[D].el:Q;for(;se<=g;)x(null,P[se]=oe?Ai(P[se]):Fn(P[se]),k,X,j,te,E,le,oe),se++}}else if(se>g)for(;se<=S;)ke(w[se],j,te,!0),se++;else{const D=se,X=se,ee=new Map;for(se=X;se<=g;se++){const Ee=P[se]=oe?Ai(P[se]):Fn(P[se]);Ee.key!=null&&ee.set(Ee.key,se)}let W,we=0;const he=g-X+1;let Pe=!1,Fe=0;const ue=new Array(he);for(se=0;se<he;se++)ue[se]=0;for(se=D;se<=S;se++){const Ee=w[se];if(we>=he){ke(Ee,j,te,!0);continue}let De;if(Ee.key!=null)De=ee.get(Ee.key);else for(W=X;W<=g;W++)if(ue[W-X]===0&&Ki(Ee,P[W])){De=W;break}De===void 0?ke(Ee,j,te,!0):(ue[De-X]=se+1,De>=Fe?Fe=De:Pe=!0,x(Ee,P[De],k,null,j,te,E,le,oe),we++)}const Me=Pe?jm(ue):Ir;for(W=Me.length-1,se=he-1;se>=0;se--){const Ee=X+se,De=P[Ee],xe=P[Ee+1],$e=Ee+1<ae?xe.el||sd(xe):Q;ue[se]===0?x(null,De,k,$e,j,te,E,le,oe):Pe&&(W<0||se!==Me[W]?ye(De,k,$e,2):W--)}}},ye=(w,P,k,Q,j=null)=>{const{el:te,type:E,transition:le,children:oe,shapeFlag:se}=w;if(se&6){ye(w.component.subTree,P,k,Q);return}if(se&128){w.suspense.move(P,k,Q);return}if(se&64){E.move(w,P,k,me);return}if(E===rn){i(te,P,k);for(let S=0;S<oe.length;S++)ye(oe[S],P,k,Q);i(w.anchor,P,k);return}if(E===Ma){C(w,P,k);return}if(Q!==2&&se&1&&le)if(Q===0)le.beforeEnter(te),i(te,P,k),$t(()=>le.enter(te),j);else{const{leave:S,delayLeave:g,afterLeave:D}=le,X=()=>{w.ctx.isUnmounted?r(te):i(te,P,k)},ee=()=>{te._isLeaving&&te[ti](!0),S(te,()=>{X(),D&&D()})};g?g(te,X,ee):ee()}else i(te,P,k)},ke=(w,P,k,Q=!1,j=!1)=>{const{type:te,props:E,ref:le,children:oe,dynamicChildren:se,shapeFlag:ae,patchFlag:S,dirs:g,cacheIndex:D}=w;if(S===-2&&(j=!1),le!=null&&(ui(),gs(le,null,k,w,!0),fi()),D!=null&&(P.renderCache[D]=void 0),ae&256){P.ctx.deactivate(w);return}const X=ae&1&&g,ee=!_s(w);let W;if(ee&&(W=E&&E.onVnodeBeforeUnmount)&&In(W,P,w),ae&6)Se(w.component,k,Q);else{if(ae&128){w.suspense.unmount(k,Q);return}X&&Bi(w,null,P,"beforeUnmount"),ae&64?w.type.remove(w,P,k,me,Q):se&&!se.hasOnce&&(te!==rn||S>0&&S&64)?O(se,P,k,!1,!0):(te===rn&&S&384||!j&&ae&16)&&O(oe,P,k),Q&&je(w)}(ee&&(W=E&&E.onVnodeUnmounted)||X)&&$t(()=>{W&&In(W,P,w),X&&Bi(w,null,P,"unmounted")},k)},je=w=>{const{type:P,el:k,anchor:Q,transition:j}=w;if(P===rn){pt(k,Q);return}if(P===Ma){b(w);return}const te=()=>{r(k),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(w.shapeFlag&1&&j&&!j.persisted){const{leave:E,delayLeave:le}=j,oe=()=>E(k,te);le?le(w.el,te,oe):oe()}else te()},pt=(w,P)=>{let k;for(;w!==P;)k=h(w),r(w),w=k;r(P)},Se=(w,P,k)=>{const{bum:Q,scope:j,job:te,subTree:E,um:le,m:oe,a:se}=w;Eu(oe),Eu(se),Q&&mo(Q),j.stop(),te&&(te.flags|=8,ke(E,w,P,k)),le&&$t(le,P),$t(()=>{w.isUnmounted=!0},P)},O=(w,P,k,Q=!1,j=!1,te=0)=>{for(let E=te;E<w.length;E++)ke(w[E],P,k,Q,j)},q=w=>{if(w.shapeFlag&6)return q(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const P=h(w.anchor||w.el),k=P&&P[Uh];return k?h(k):P};let J=!1;const pe=(w,P,k)=>{let Q;w==null?P._vnode&&(ke(P._vnode,null,null,!0),Q=P._vnode.component):x(P._vnode||null,w,P,null,null,null,k),P._vnode=w,J||(J=!0,uu(Q),Rh(),J=!1)},me={p:x,um:ke,m:ye,r:je,mt:ne,mc:z,pc:re,pbc:y,n:q,o:n};return{render:pe,hydrate:void 0,createApp:Rm(pe)}}function Sa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function zi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Xm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Fc(n,e,t=!1){const i=n.children,r=e.children;if(Xe(i)&&Xe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ai(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Fc(o,a)),a.type===ta&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===rn?1:0)),a.type===Zt&&!a.el&&(a.el=o.el)}}function jm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function rd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rd(e)}function Eu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function sd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?sd(e.subTree):null}const od=n=>n.__isSuspense;function Ym(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):Zp(n)}const rn=Symbol.for("v-fgt"),ta=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),vs=[];let hn=null;function Je(n=!1){vs.push(hn=n?null:[])}function qm(){vs.pop(),hn=vs[vs.length-1]||null}let Es=1;function Uo(n,e=!1){Es+=n,n<0&&hn&&e&&(hn.hasOnce=!0)}function ad(n){return n.dynamicChildren=Es>0?hn||Ir:null,qm(),Es>0&&hn&&hn.push(n),n}function tt(n,e,t,i,r,s){return ad(Y(n,e,t,i,r,s,!0))}function na(n,e,t,i,r){return ad(At(n,e,t,i,r,!0))}function No(n){return n?n.__v_isVNode===!0:!1}function Ki(n,e){return n.type===e.type&&n.key===e.key}const ld=({key:n})=>n??null,xo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Et(n)||Ot(n)||qe(n)?{i:fn,r:n,k:e,f:!!t}:n:null);function Y(n,e=null,t=null,i=0,r=null,s=n===rn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ld(e),ref:e&&xo(e),scopeId:Dh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:fn};return a?(Oc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Et(t)?8:16),Es>0&&!o&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const At=$m;function $m(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Sm)&&(n=Zt),No(n)){const a=Li(n,e,!0);return t&&Oc(a,t),Es>0&&!s&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag=-2,a}if(og(n)&&(n=n.__vccOpts),e){e=Km(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=Ue(a)),St(l)&&(Rc(l)&&!Xe(l)&&(l=Pt({},l)),e.style=Mc(l))}const o=Et(n)?1:od(n)?128:Nh(n)?64:St(n)?4:qe(n)?2:0;return Y(n,e,t,i,r,o,s,!0)}function Km(n){return n?Rc(n)||Jh(n)?Pt({},n):n:null}function Li(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Zm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ld(c),ref:e&&e.ref?t&&s?Xe(s)?s.concat(xo(e)):[s,xo(e)]:xo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Li(n.ssContent),ssFallback:n.ssFallback&&Li(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&bs(u,l.clone(u)),u}function Or(n=" ",e=0){return At(ta,null,n,e)}function Sn(n="",e=!1){return e?(Je(),na(Zt,null,n)):At(Zt,null,n)}function Fn(n){return n==null||typeof n=="boolean"?At(Zt):Xe(n)?At(rn,null,n.slice()):No(n)?Ai(n):At(ta,null,String(n))}function Ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Li(n)}function Oc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Oc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Jh(e)?e._ctx=fn:r===3&&fn&&(fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),i&64?(t=16,e=[Or(e)]):t=8);n.children=e,n.shapeFlag|=t}function Zm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ue([e.class,i.class]));else if(r==="style")e.style=Mc([e.style,i.style]);else if(Xo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Xe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function In(n,e,t,i=null){Pn(n,e,7,[t,i])}const Jm=qh();let Qm=0;function eg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Jm,s={uid:Qm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ed(i,r),emitsOptions:$h(i,r),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Dm.bind(null,s),n.ce&&n.ce(s),s}let Vt=null;const cd=()=>Vt||fn;let Fo,_l;{const n=$o(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Fo=e("__VUE_INSTANCE_SETTERS__",t=>Vt=t),_l=e("__VUE_SSR_SETTERS__",t=>Ts=t)}const Ls=n=>{const e=Vt;return Fo(n),n.scope.on(),()=>{n.scope.off(),Fo(e)}},Tu=()=>{Vt&&Vt.scope.off(),Fo(null)};function ud(n){return n.vnode.shapeFlag&4}let Ts=!1;function tg(n,e=!1,t=!1){e&&_l(e);const{props:i,children:r}=n.vnode,s=ud(n);Om(n,i,s,e),Vm(n,r,t||e);const o=s?ng(n,e):void 0;return e&&_l(!1),o}function ng(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ym);const{setup:i}=t;if(i){ui();const r=n.setupContext=i.length>1?rg(n):null,s=Ls(n),o=Ds(i,n,0,[n.props,r]),a=rh(o);if(fi(),s(),(a||n.sp)&&!_s(n)&&Gh(n),a){if(o.then(Tu,Tu),e)return o.then(l=>{Au(n,l)}).catch(l=>{Zo(l,n,0)});n.asyncDep=o}else Au(n,o)}else fd(n)}function Au(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=Th(e)),fd(n)}function fd(n,e,t){const i=n.type;n.render||(n.render=i.render||Vn);{const r=Ls(n);ui();try{bm(n)}finally{fi(),r()}}}const ig={get(n,e){return kt(n,"get",""),n[e]}};function rg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,ig),slots:n.slots,emit:n.emit,expose:e}}function ia(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Th(Vp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in xs)return xs[t](n)},has(e,t){return t in e||t in xs}})):n.proxy}function sg(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function og(n){return qe(n)&&"__vccOpts"in n}const Ut=(n,e)=>jp(n,e,Ts);function ag(n,e,t){try{Uo(-1);const i=arguments.length;return i===2?St(e)&&!Xe(e)?No(e)?At(n,null,[e]):At(n,e):At(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&No(t)&&(t=[t]),At(n,e,t))}finally{Uo(1)}}const lg="3.5.27";let xl;const wu=typeof window<"u"&&window.trustedTypes;if(wu)try{xl=wu.createPolicy("vue",{createHTML:n=>n})}catch{}const hd=xl?n=>xl.createHTML(n):n=>n,cg="http://www.w3.org/2000/svg",ug="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,Cu=ei&&ei.createElement("template"),fg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?ei.createElementNS(cg,n):e==="mathml"?ei.createElementNS(ug,n):t?ei.createElement(n,{is:t}):ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Cu.innerHTML=hd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Cu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_i="transition",Zr="animation",As=Symbol("_vtc"),dd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hg=Pt({},Bh,dd),dg=n=>(n.displayName="Transition",n.props=hg,n),vo=dg((n,{slots:e})=>ag(am,pg(n),e)),ki=(n,e=[])=>{Xe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Ru=n=>n?Xe(n)?n.some(e=>e.length>1):n.length>1:!1;function pg(n){const e={};for(const U in n)U in dd||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=mg(r),x=_&&_[0],m=_&&_[1],{onBeforeEnter:d,onEnter:T,onEnterCancelled:C,onLeave:b,onLeaveCancelled:A,onBeforeAppear:R=d,onAppear:L=T,onAppearCancelled:z=C}=e,v=(U,H,ne,ie)=>{U._enterCancelled=ie,Vi(U,H?u:a),Vi(U,H?c:o),ne&&ne()},y=(U,H)=>{U._isLeaving=!1,Vi(U,f),Vi(U,p),Vi(U,h),H&&H()},I=U=>(H,ne)=>{const ie=U?L:T,K=()=>v(H,U,ne);ki(ie,[H,K]),Pu(()=>{Vi(H,U?l:s),qn(H,U?u:a),Ru(ie)||Du(H,i,x,K)})};return Pt(e,{onBeforeEnter(U){ki(d,[U]),qn(U,s),qn(U,o)},onBeforeAppear(U){ki(R,[U]),qn(U,l),qn(U,c)},onEnter:I(!1),onAppear:I(!0),onLeave(U,H){U._isLeaving=!0;const ne=()=>y(U,H);qn(U,f),U._enterCancelled?(qn(U,h),Uu(U)):(Uu(U),qn(U,h)),Pu(()=>{U._isLeaving&&(Vi(U,f),qn(U,p),Ru(b)||Du(U,i,m,ne))}),ki(b,[U,ne])},onEnterCancelled(U){v(U,!1,void 0,!0),ki(C,[U])},onAppearCancelled(U){v(U,!0,void 0,!0),ki(z,[U])},onLeaveCancelled(U){y(U),ki(A,[U])}})}function mg(n){if(n==null)return null;if(St(n))return[ya(n.enter),ya(n.leave)];{const e=ya(n);return[e,e]}}function ya(n){return dp(n)}function qn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[As]||(n[As]=new Set)).add(e)}function Vi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[As];t&&(t.delete(e),t.size||(n[As]=void 0))}function Pu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let gg=0;function Du(n,e,t,i){const r=n._endId=++gg,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=_g(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function _g(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${_i}Delay`),s=i(`${_i}Duration`),o=Lu(r,s),a=i(`${Zr}Delay`),l=i(`${Zr}Duration`),c=Lu(a,l);let u=null,f=0,h=0;e===_i?o>0&&(u=_i,f=o,h=s.length):e===Zr?c>0&&(u=Zr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?_i:Zr:null,h=u?u===_i?s.length:l.length:0);const p=u===_i&&/\b(?:transform|all)(?:,|$)/.test(i(`${_i}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Lu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Iu(t)+Iu(n[i])))}function Iu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Uu(n){return(n?n.ownerDocument:document).body.offsetHeight}function xg(n,e,t){const i=n[As];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Nu=Symbol("_vod"),vg=Symbol("_vsh"),Sg=Symbol(""),Mg=/(?:^|;)\s*display\s*:/;function yg(n,e,t){const i=n.style,r=Et(t);let s=!1;if(t&&!r){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&So(i,a,"")}else for(const o in e)t[o]==null&&So(i,o,"");for(const o in t)o==="display"&&(s=!0),So(i,o,t[o])}else if(r){if(e!==t){const o=i[Sg];o&&(t+=";"+o),i.cssText=t,s=Mg.test(t)}}else e&&n.removeAttribute("style");Nu in n&&(n[Nu]=s?i.display:"",n[vg]&&(i.display="none"))}const Fu=/\s*!important$/;function So(n,e,t){if(Xe(t))t.forEach(i=>So(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=bg(n,e);Fu.test(t)?n.setProperty(Ni(i),t.replace(Fu,""),"important"):n[i]=t}}const Ou=["Webkit","Moz","ms"],ba={};function bg(n,e){const t=ba[e];if(t)return t;let i=Mn(e);if(i!=="filter"&&i in n)return ba[e]=i;i=qo(i);for(let r=0;r<Ou.length;r++){const s=Ou[r]+i;if(s in n)return ba[e]=s}return e}const Bu="http://www.w3.org/1999/xlink";function zu(n,e,t,i,r,s=vp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Bu,e.slice(6,e.length)):n.setAttributeNS(Bu,e,t):t==null||s&&!lh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ui(t)?String(t):t)}function ku(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?hd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=lh(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Lr(n,e,t,i){n.addEventListener(e,t,i)}function Eg(n,e,t,i){n.removeEventListener(e,t,i)}const Vu=Symbol("_vei");function Tg(n,e,t,i,r=null){const s=n[Vu]||(n[Vu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Ag(e);if(i){const c=s[e]=Rg(i,r);Lr(n,a,c,l)}else o&&(Eg(n,a,o,l),s[e]=void 0)}}const Hu=/(?:Once|Passive|Capture)$/;function Ag(n){let e;if(Hu.test(n)){e={};let i;for(;i=n.match(Hu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ni(n.slice(2)),e]}let Ea=0;const wg=Promise.resolve(),Cg=()=>Ea||(wg.then(()=>Ea=0),Ea=Date.now());function Rg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Pn(Pg(i,t.value),e,5,[i])};return t.value=n,t.attached=Cg(),t}function Pg(n,e){if(Xe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Gu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Dg=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?xg(n,i,o):e==="style"?yg(n,t,i):Xo(e)?_c(e)||Tg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Lg(n,e,i,o))?(ku(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zu(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Et(i))?ku(n,Mn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),zu(n,e,i,o))};function Lg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gu(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Gu(e)&&Et(t)?!1:e in n}const Wu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Xe(e)?t=>mo(e,t):e};function Ig(n){n.target.composing=!0}function Xu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ta=Symbol("_assign");function ju(n,e,t){return e&&(n=n.trim()),t&&(n=Sc(n)),n}const Ug={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Ta]=Wu(r);const s=i||r.props&&r.props.type==="number";Lr(n,e?"change":"input",o=>{o.target.composing||n[Ta](ju(n.value,t,s))}),(t||s)&&Lr(n,"change",()=>{n.value=ju(n.value,t,s)}),e||(Lr(n,"compositionstart",Ig),Lr(n,"compositionend",Xu),Lr(n,"change",Xu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Ta]=Wu(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Sc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Ng=["ctrl","shift","alt","meta"],Fg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Ng.some(t=>n[`${t}Key`]&&!e.includes(t))},Og=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=Fg[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},Bg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Yu=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(r=>{if(!("key"in r))return;const s=Ni(r.key);if(e.some(o=>o===s||Bg[o]===s))return n(r)}))},zg=Pt({patchProp:Dg},fg);let qu;function kg(){return qu||(qu=Gm(zg))}const Vg=((...n)=>{const e=kg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Gg(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Hg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Hg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Gg(n){return Et(n)?document.querySelector(n):n}function pd(n=""){const e=Ht(n),t=Ht(null),i=Ht(null),r=Ut(()=>!t.value&&e.value.trim()!==""),s=Ut(()=>t.value!==null),o=Ut(()=>e.value.trim()!=="");function a(){try{if(!o.value){t.value=null,i.value=null;return}i.value=JSON.parse(e.value),t.value=null}catch(f){t.value=f.message,i.value=null}}function l(){try{if(!o.value)return;const f=JSON.parse(e.value);e.value=JSON.stringify(f,null,2),t.value=null,i.value=f}catch(f){t.value=f.message}}function c(){e.value="",t.value=null,i.value=null}function u(f){e.value=f}return rr(e,a,{immediate:!0}),{jsonText:e,errorMessage:t,parsedData:i,isValid:r,hasError:s,hasContent:o,formatJson:l,clearJson:c,setJsonText:u}}const Wg={class:"flex flex-col h-full"},Xg={class:"flex items-center justify-between mb-4"},jg={class:"flex items-center gap-2"},Yg={class:"flex items-center gap-1.5"},qg=["disabled"],$g=["disabled"],Kg={class:"mt-3 min-h-[2rem]"},Zg={class:"flex-1 min-w-0"},Jg=jr({__name:"JsonInput",props:{modelValue:{},theme:{}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,r=Ut(()=>t.theme.name==="dark"||t.theme.name==="midnight"),{jsonText:s,errorMessage:o,isValid:a,hasContent:l,formatJson:c,clearJson:u,setJsonText:f}=pd(t.modelValue),h=Ht(null),p=Ht(null),_=Ht(!1),x=Ut(()=>{const b=s.value.split(`
`);return Array.from({length:b.length},(A,R)=>R+1)});rr(s,b=>{i("update:modelValue",b)});function m(){h.value&&p.value&&(h.value.scrollTop=p.value.scrollTop)}function d(){setTimeout(()=>{try{if(s.value.trim()){const b=JSON.parse(s.value);s.value=JSON.stringify(b,null,2)}}catch{}},0)}function T(){f(JSON.stringify({name:"John Doe",age:30,email:"john@example.com",address:{street:"123 Main St",city:"New York",country:"USA"},hobbies:["reading","coding","gaming"],isActive:!0},null,2))}async function C(){s.value&&await navigator.clipboard.writeText(s.value)}return(b,A)=>(Je(),tt("div",Wg,[Y("div",Xg,[Y("div",jg,[Y("div",{class:Ue(["w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",r.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"])},[...A[5]||(A[5]=[Y("svg",{class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)])],2),Y("h2",{class:Ue(["text-lg font-semibold transition-colors duration-300",n.theme.colors.textPrimary])},"Entrada",2)]),Y("div",Yg,[Y("button",{onClick:T,class:Ue(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",r.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Cargar datos de ejemplo","aria-label":"Cargar datos de ejemplo"},[...A[6]||(A[6]=[Y("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})],-1),Y("span",{class:"hidden sm:inline"},"Ejemplo",-1)])],2),fe(l)?(Je(),tt("button",{key:0,onClick:C,class:Ue(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",r.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Copiar al portapapeles","aria-label":"Copiar JSON al portapapeles"},[...A[7]||(A[7]=[Y("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1)])],2)):Sn("",!0),Y("button",{onClick:A[0]||(A[0]=(...R)=>fe(c)&&fe(c)(...R)),disabled:!fe(l),class:Ue(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",[n.theme.colors.accent,n.theme.colors.accentHover,"focus:ring-primary-500"]]),title:"Formatear JSON","aria-label":"Formatear JSON"},[...A[8]||(A[8]=[Y("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1),Y("span",{class:"hidden sm:inline"},"Formatear",-1)])],10,qg),Y("button",{onClick:A[1]||(A[1]=(...R)=>fe(u)&&fe(u)(...R)),disabled:!fe(l),class:Ue(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",r.value?"text-red-400 bg-red-900/30 hover:bg-red-900/50 focus:ring-red-500":"text-red-600 bg-red-50 hover:bg-red-100 focus:ring-red-300"]),title:"Limpiar contenido","aria-label":"Limpiar contenido"},[...A[9]||(A[9]=[Y("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)])],10,$g)])]),Y("div",{class:Ue(["flex-1 flex rounded-xl overflow-hidden transition-all duration-200 ring-1",[fe(o)?r.value?"ring-red-500/50 bg-red-900/20":"ring-red-300 bg-red-50/50":_.value?r.value?"ring-primary-500 ring-2 bg-slate-800":"ring-primary-300 ring-2 bg-white":r.value?"ring-slate-600 bg-slate-800/50":"ring-gray-200 bg-surface-secondary"]])},[Y("div",{ref_key:"lineNumbersRef",ref:h,class:Ue(["flex flex-col py-4 px-3 text-right select-none overflow-hidden border-r transition-colors",[fe(o)?r.value?"bg-red-900/30 border-red-800 text-red-400":"bg-red-100/50 border-red-200 text-red-400":r.value?"bg-slate-900/50 border-slate-700 text-slate-500":"bg-surface-tertiary border-gray-100 text-gray-400"]]),"aria-hidden":"true"},[(Je(!0),tt(rn,null,Ic(x.value,R=>(Je(),tt("div",{key:R,class:"font-mono text-xs leading-5 tabular-nums"},Rt(R),1))),128))],2),Jp(Y("textarea",{ref_key:"textareaRef",ref:p,"onUpdate:modelValue":A[2]||(A[2]=R=>Ot(s)?s.value=R:null),onPaste:d,onScroll:m,onFocus:A[3]||(A[3]=R=>_.value=!0),onBlur:A[4]||(A[4]=R=>_.value=!1),placeholder:"Pega o escribe tu JSON aquí...",class:Ue(["flex-1 p-4 font-mono text-sm leading-5 focus:outline-none resize-none bg-transparent transition-colors duration-300",[r.value?"text-slate-200 placeholder:text-slate-500":"text-gray-800 placeholder:text-gray-400"]]),"aria-label":"Editor de JSON",spellcheck:"false"},null,34),[[Ug,fe(s)]])],2),Y("div",Kg,[fe(o)?(Je(),tt("div",{key:0,class:Ue(["flex items-start gap-2 p-3 border rounded-lg animate-fade-in",r.value?"bg-red-900/30 border-red-800":"bg-red-50 border-red-200"]),role:"alert"},[(Je(),tt("svg",{class:Ue(["w-4 h-4 flex-shrink-0 mt-0.5",r.value?"text-red-400":"text-red-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...A[10]||(A[10]=[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])],2)),Y("div",Zg,[Y("p",{class:Ue(["text-sm font-medium",r.value?"text-red-300":"text-red-800"])},"Error de sintaxis",2),Y("p",{class:Ue(["text-xs mt-0.5 truncate",r.value?"text-red-400":"text-red-600"])},Rt(fe(o)),3)])],2)):fe(l)&&fe(a)?(Je(),tt("div",{key:1,class:Ue(["flex items-center gap-2 p-3 border rounded-lg animate-fade-in",r.value?"bg-emerald-900/30 border-emerald-800":"bg-emerald-50 border-emerald-200"]),role:"status"},[(Je(),tt("svg",{class:Ue(["w-4 h-4",r.value?"text-emerald-400":"text-emerald-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...A[11]||(A[11]=[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])],2)),Y("p",{class:Ue(["text-sm font-medium",r.value?"text-emerald-300":"text-emerald-700"])},"JSON válido",2),Y("span",{class:Ue(["ml-auto text-xs tabular-nums",r.value?"text-emerald-400":"text-emerald-600"])},Rt(x.value.length)+" líneas",3)],2)):Sn("",!0)])]))}}),$u=100;function Qg(n,e=0,t=2){const i=Ht(e<t),r=Ut(()=>n===null?"null":Array.isArray(n)?"array":typeof n),s=Ut(()=>r.value==="object"||r.value==="array"),o=Ut(()=>r.value==="array"&&Array.isArray(n)?n.length:r.value==="object"&&typeof n=="object"&&n!==null?Object.keys(n).length:0),a=Ut(()=>r.value==="array"&&Array.isArray(n)?n.map((_,x)=>({key:x,value:_})):r.value==="object"&&typeof n=="object"&&n!==null?Object.entries(n).map(([_,x])=>({key:_,value:x})):[]);function l(){s.value&&(i.value=!i.value)}function c(_){return{string:"text-green-600",number:"text-blue-600",boolean:"text-purple-600",null:"text-gray-500",array:"text-gray-800",object:"text-gray-800"}[_]}function u(_){return typeof _=="string"?_.length>$u?`"${_.slice(0,$u)}…"`:`"${_}"`:_===null?"null":String(_)}function f(){i.value=!0}function h(){i.value=!1}function p(_,x){return _==="array"?`Array[${x}]`:_==="object"?`Object{${x}}`:""}return{isExpanded:i,dataType:r,isExpandable:s,itemCount:o,entries:a,toggleExpand:l,getValueColor:c,formatValue:u,getTypeLabel:p,expandAll:f,collapseAll:h}}const e0={class:"json-node group/node"},t0={class:"flex items-start gap-1.5"},n0=["role","aria-expanded","tabindex"],i0=["title"],r0={class:"tabular-nums"},s0=jr({__name:"JsonNode",props:{data:{type:[String,Number,Boolean,null,Object]},name:{},isRoot:{type:Boolean,default:!1},depth:{default:0},initialExpandDepth:{default:2},lineNumber:{default:1},theme:{}},setup(n){const e=n,t=Ut(()=>e.theme?.name==="dark"||e.theme?.name==="midnight"),{isExpanded:i,dataType:r,isExpandable:s,itemCount:o,entries:a,toggleExpand:l,formatValue:c}=Qg(e.data,e.depth,e.initialExpandDepth);function u(p){switch(p){case"object":return"{}";case"array":return"[]";case"string":return"Aa";case"number":return"#";case"boolean":return"◐";case"null":return"ø";default:return"·"}}function f(p){if(t.value)switch(p){case"object":return"bg-orange-900/50 text-orange-400";case"array":return"bg-cyan-900/50 text-cyan-400";case"string":return"bg-emerald-900/50 text-emerald-400";case"number":return"bg-blue-900/50 text-blue-400";case"boolean":return"bg-violet-900/50 text-violet-400";case"null":return"bg-slate-700 text-slate-400";default:return"bg-slate-700 text-slate-400"}switch(p){case"object":return"bg-orange-100 text-orange-700";case"array":return"bg-cyan-100 text-cyan-700";case"string":return"bg-emerald-100 text-emerald-700";case"number":return"bg-blue-100 text-blue-700";case"boolean":return"bg-violet-100 text-violet-700";case"null":return"bg-gray-100 text-gray-600";default:return"bg-gray-100 text-gray-600"}}function h(p){if(e.theme)return e.theme.colors[`json${p.charAt(0).toUpperCase()+p.slice(1)}`]||e.theme.colors.textSecondary;switch(p){case"string":return"text-emerald-600";case"number":return"text-blue-600";case"boolean":return"text-violet-600";case"null":return"text-gray-500";default:return"text-gray-800"}}return(p,_)=>{const x=vm("JsonNode",!0);return Je(),tt("div",e0,[Y("div",t0,[Y("span",{class:Ue(["flex-shrink-0 w-8 text-right text-[10px] select-none font-mono mt-1 tabular-nums opacity-60 group-hover/node:opacity-100 transition-opacity",t.value?"text-slate-500":"text-gray-400"]),"aria-hidden":"true"},Rt(n.lineNumber),3),Y("div",{class:Ue(["flex-1 flex items-start gap-1.5 py-1 px-2 -mx-2 rounded-lg transition-all",[fe(s)?t.value?"cursor-pointer hover:bg-slate-700/50":"cursor-pointer hover:bg-primary-50/70":t.value?"hover:bg-slate-700/30":"hover:bg-gray-50"]]),role:fe(s)?"button":void 0,"aria-expanded":fe(s)?fe(i):void 0,tabindex:fe(s)?0:void 0,onClick:_[0]||(_[0]=(...m)=>fe(l)&&fe(l)(...m)),onKeydown:[_[1]||(_[1]=Yu((...m)=>fe(l)&&fe(l)(...m),["enter"])),_[2]||(_[2]=Yu(Og((...m)=>fe(l)&&fe(l)(...m),["prevent"]),["space"]))]},[fe(s)?(Je(),tt("span",{key:0,class:Ue(["flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center rounded transition-colors",fe(i)?t.value?"text-primary-400":"text-primary-500":t.value?"text-slate-500 group-hover/node:text-slate-400":"text-gray-400 group-hover/node:text-gray-600"])},[(Je(),tt("svg",{class:Ue(["w-3.5 h-3.5 transition-transform duration-200 ease-out",{"rotate-90":fe(i)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[..._[3]||(_[3]=[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",d:"M9 5l7 7-7 7"},null,-1)])],2))],2)):(Je(),tt("span",{key:1,class:Ue(["flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center text-[9px] font-bold rounded",f(fe(r))]),title:fe(r)},Rt(u(fe(r))),11,i0)),n.isRoot?Sn("",!0):(Je(),tt("span",{key:2,class:Ue(["font-medium flex-shrink-0",t.value?"text-primary-400":"text-primary-700"])},[Or(' "'+Rt(n.name)+'"',1),Y("span",{class:Ue([t.value?"text-slate-500":"text-gray-400","ml-0.5"])},":",2)],2)),fe(s)?(Je(),tt("span",{key:3,class:Ue(["font-mono text-sm flex items-center gap-1.5",t.value?"text-slate-400":"text-gray-600"])},[Y("span",{class:Ue(["inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold",fe(r)==="array"?t.value?"bg-cyan-900/50 text-cyan-400":"bg-cyan-100 text-cyan-700":t.value?"bg-orange-900/50 text-orange-400":"bg-orange-100 text-orange-700"])},[Or(Rt(fe(r)==="array"?"[]":"{}")+" ",1),Y("span",r0,Rt(fe(o)),1)],2),fe(i)?Sn("",!0):(Je(),tt("span",{key:0,class:Ue(["text-xs",t.value?"text-slate-500":"text-gray-400"])},"•••",2))],2)):(Je(),tt("span",{key:4,class:Ue([h(fe(r)),"font-mono text-sm break-words max-w-lg"])},Rt(fe(c)(n.data)),3))],42,n0)]),fe(s)&&fe(i)?(Je(),tt("div",{key:0,class:Ue(["ml-5 pl-3 border-l-2 transition-colors animate-fade-in",t.value?"border-slate-700 hover:border-slate-600":"border-primary-100 hover:border-primary-200"])},[(Je(!0),tt(rn,null,Ic(fe(a),(m,d)=>(Je(),na(x,{key:m.key,data:m.value,name:String(m.key),depth:n.depth+1,initialExpandDepth:n.initialExpandDepth,lineNumber:n.lineNumber+d+1,theme:n.theme},null,8,["data","name","depth","initialExpandDepth","lineNumber","theme"]))),128))],2)):Sn("",!0)])}}}),md=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},o0=md(s0,[["__scopeId","data-v-b0cb8cc8"]]);function a0(n){return n===null?"null":Array.isArray(n)?"array":typeof n=="object"?"object":typeof n=="string"?"string":typeof n=="number"?"number":typeof n=="boolean"?"boolean":"null"}function l0(n,e){if(e==="object")return`{${Object.keys(n).length}}`;if(e==="array")return`[${n.length}]`;if(e==="string"){const t=n;return t.length>20?`"${t.slice(0,20)}..."`:`"${t}"`}return e==="null"?"null":String(n)}let gd=0;function _d(n,e,t){const i=a0(n),s={id:`node-${gd++}`,name:e,value:l0(n,i),type:i,children:[],isExpanded:t<2,depth:t};if(i==="object"||i==="array"){const o=i==="array"?n.map((a,l)=>({key:String(l),value:a})):Object.entries(n).map(([a,l])=>({key:a,value:l}));s.children=o.map(a=>_d(a.value,a.key,t+1))}return s}function c0(n){return gd=0,_d(n,"root",0)}const Bc="182",ai={ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},u0=0,Ku=1,f0=2,Mo=1,h0=2,cs=3,Ii=0,sn=1,si=2,li=0,Br=1,Zu=2,Ju=3,Qu=4,d0=5,Zi=100,p0=101,m0=102,g0=103,_0=104,x0=200,v0=201,S0=202,M0=203,vl=204,Sl=205,y0=206,b0=207,E0=208,T0=209,A0=210,w0=211,C0=212,R0=213,P0=214,Ml=0,yl=1,bl=2,Vr=3,El=4,Tl=5,Al=6,wl=7,xd=0,D0=1,L0=2,Hn=0,vd=1,Sd=2,Md=3,yd=4,bd=5,Ed=6,Td=7,Ad=300,sr=301,Hr=302,Cl=303,Rl=304,ra=306,Pl=1e3,oi=1001,Dl=1002,Ft=1003,I0=1004,Hs=1005,Nt=1006,Aa=1007,Qi=1008,_n=1009,wd=1010,Cd=1011,ws=1012,zc=1013,Wn=1014,zn=1015,di=1016,kc=1017,Vc=1018,Cs=1020,Rd=35902,Pd=35899,Dd=1021,Ld=1022,An=1023,pi=1026,er=1027,Id=1028,Hc=1029,Gr=1030,Gc=1031,Wc=1033,yo=33776,bo=33777,Eo=33778,To=33779,Ll=35840,Il=35841,Ul=35842,Nl=35843,Fl=36196,Ol=37492,Bl=37496,zl=37488,kl=37489,Vl=37490,Hl=37491,Gl=37808,Wl=37809,Xl=37810,jl=37811,Yl=37812,ql=37813,$l=37814,Kl=37815,Zl=37816,Jl=37817,Ql=37818,ec=37819,tc=37820,nc=37821,ic=36492,rc=36494,sc=36495,oc=36283,ac=36284,lc=36285,cc=36286,U0=3200,N0=0,F0=1,wi="",gn="srgb",Wr="srgb-linear",Oo="linear",ut="srgb",ur=7680,ef=519,O0=512,B0=513,z0=514,Xc=515,k0=516,V0=517,jc=518,H0=519,uc=35044,tf="300 es",kn=2e3,Bo=2001;function Ud(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function G0(){const n=zo("canvas");return n.style.display="block",n}const nf={};function ko(...n){const e="THREE."+n.shift();console.log(e,...n)}function We(...n){const e="THREE."+n.shift();console.warn(e,...n)}function nt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Rs(...n){const e=n.join(" ");e in nf||(nf[e]=!0,We(...n))}function W0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ao=Math.PI/180,fc=180/Math.PI;function Di(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function X0(n,e){return(n%e+e)%e}function wa(n,e,t){return(1-t)*n+t*e}function Bn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const j0={DEG2RAD:Ao};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class or{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+f*x;m<0&&(h=-h,p=-p,_=-_,x=-x,m=-m);let d=1-a;if(m<.9995){const T=Math.acos(m),C=Math.sin(T);d=Math.sin(d*T)/C,a=Math.sin(a*T)/C,l=l*d+h*a,c=c*d+p*a,u=u*d+_*a,f=f*d+x*a}else{l=l*d+h*a,c=c*d+p*a,u=u*d+_*a,f=f*d+x*a;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new F,rf=new or;class Ke{constructor(e,t,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],x=r[0],m=r[3],d=r[6],T=r[1],C=r[4],b=r[7],A=r[2],R=r[5],L=r[8];return s[0]=o*x+a*T+l*A,s[3]=o*m+a*C+l*R,s[6]=o*d+a*b+l*L,s[1]=c*x+u*T+f*A,s[4]=c*m+u*C+f*R,s[7]=c*d+u*b+f*L,s[2]=h*x+p*T+_*A,s[5]=h*m+p*C+_*R,s[8]=h*d+p*b+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Ke,sf=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y0(){const n={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?Oo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wr]:{primaries:e,whitePoint:i,transfer:Oo,toXYZ:sf,fromXYZ:of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:sf,fromXYZ:of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),n}const rt=Y0();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fr;class q0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fr===void 0&&(fr=zo("canvas")),fr.width=e.width,fr.height=e.height;const r=fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ci(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $0=0;class Yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pa(r[o].image)):s.push(Pa(r[o]))}else s=Pa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Pa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?q0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let K0=0;const Da=new F;class Gt extends ar{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=oi,r=oi,s=Nt,o=Qi,a=An,l=_n,c=Gt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Di(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Da).x}get height(){return this.source.getSize(Da).y}get depth(){return this.source.getSize(Da).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pl:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pl:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Ad;Gt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,b=(p+1)/2,A=(d+1)/2,R=(u+h)/4,L=(f+x)/4,z=(_+m)/4;return C>b&&C>A?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=R/i,s=L/i):b>A?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=z/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=L/s,r=z/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(f-x)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z0 extends ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Gt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Z0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nd extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class J0 extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gs.copy(i.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Ws.subVectors(this.max,Jr),hr.subVectors(e.a,Jr),dr.subVectors(e.b,Jr),pr.subVectors(e.c,Jr),xi.subVectors(dr,hr),vi.subVectors(pr,dr),Hi.subVectors(hr,pr);let t=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Hi.y,Hi.x,0];return!La(t,hr,dr,pr,Ws)||(t=[1,0,0,0,1,0,0,0,1],!La(t,hr,dr,pr,Ws))?!1:(Xs.crossVectors(xi,vi),t=[Xs.x,Xs.y,Xs.z],La(t,hr,dr,pr,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new F,new F,new F,new F,new F,new F,new F,new F],yn=new F,Gs=new Is,hr=new F,dr=new F,pr=new F,xi=new F,vi=new F,Hi=new F,Jr=new F,Ws=new F,Xs=new F,Gi=new F;function La(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Gi.fromArray(n,s);const a=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Q0=new Is,Qr=new F,Ia=new F;class sa{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Q0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(Ia)),this.expandByPoint(Qr.copy(e.center).sub(Ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Kn=new F,Ua=new F,js=new F,Si=new F,Na=new F,Ys=new F,Fa=new F;class oa{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ua.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Ua);const s=e.distanceTo(t)*.5,o=-this.direction.dot(js),a=Si.dot(this.direction),l=-Si.dot(js),c=Si.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ua).addScaledVector(js,h),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,r,s){Na.subVectors(t,e),Ys.subVectors(i,e),Fa.crossVectors(Na,Ys);let o=this.direction.dot(Fa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(Ys.crossVectors(Si,Ys));if(l<0)return null;const c=a*this.direction.dot(Na.cross(Si));if(c<0||l+c>o)return null;const u=-a*Si.dot(Fa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/mr.setFromMatrixColumn(e,0).length(),s=1/mr.setFromMatrixColumn(e,1).length(),o=1/mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,x=c*f;t[0]=h+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e_,e,t_)}lookAt(e,t,i){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Mi.crossVectors(i,cn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Mi.crossVectors(i,cn)),Mi.normalize(),qs.crossVectors(cn,Mi),r[0]=Mi.x,r[4]=qs.x,r[8]=cn.x,r[1]=Mi.y,r[5]=qs.y,r[9]=cn.y,r[2]=Mi.z,r[6]=qs.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],T=i[3],C=i[7],b=i[11],A=i[15],R=r[0],L=r[4],z=r[8],v=r[12],y=r[1],I=r[5],U=r[9],H=r[13],ne=r[2],ie=r[6],K=r[10],V=r[14],re=r[3],ve=r[7],_e=r[11],ye=r[15];return s[0]=o*R+a*y+l*ne+c*re,s[4]=o*L+a*I+l*ie+c*ve,s[8]=o*z+a*U+l*K+c*_e,s[12]=o*v+a*H+l*V+c*ye,s[1]=u*R+f*y+h*ne+p*re,s[5]=u*L+f*I+h*ie+p*ve,s[9]=u*z+f*U+h*K+p*_e,s[13]=u*v+f*H+h*V+p*ye,s[2]=_*R+x*y+m*ne+d*re,s[6]=_*L+x*I+m*ie+d*ve,s[10]=_*z+x*U+m*K+d*_e,s[14]=_*v+x*H+m*V+d*ye,s[3]=T*R+C*y+b*ne+A*re,s[7]=T*L+C*I+b*ie+A*ve,s[11]=T*z+C*U+b*K+A*_e,s[15]=T*v+C*H+b*V+A*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15],T=l*p-c*h,C=a*p-c*f,b=a*h-l*f,A=o*p-c*u,R=o*h-l*u,L=o*f-a*u;return t*(x*T-m*C+d*b)-i*(_*T-m*A+d*R)+r*(_*C-x*A+d*L)-s*(_*b-x*R+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],T=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,C=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,b=u*x*c-_*f*c+_*a*p-o*x*p-u*a*d+o*f*d,A=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,R=t*T+i*C+r*b+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=T*L,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*L,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*L,e[4]=C*L,e[5]=(u*m*s-_*h*s+_*r*p-t*m*p-u*r*d+t*h*d)*L,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*d-t*l*d)*L,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*L,e[8]=b*L,e[9]=(_*f*s-u*x*s-_*i*p+t*x*p+u*i*d-t*f*d)*L,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*d+t*a*d)*L,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*L,e[12]=A*L,e[13]=(u*x*r-_*f*r+_*i*h-t*x*h-u*i*m+t*f*m)*L,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*L,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,x=o*u,m=o*f,d=a*f,T=l*c,C=l*u,b=l*f,A=i.x,R=i.y,L=i.z;return r[0]=(1-(x+d))*A,r[1]=(p+b)*A,r[2]=(_-C)*A,r[3]=0,r[4]=(p-b)*R,r[5]=(1-(h+d))*R,r[6]=(m+T)*R,r[7]=0,r[8]=(_+C)*L,r[9]=(m-T)*L,r[10]=(1-(h+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=mr.set(r[0],r[1],r[2]).length();const o=mr.set(r[4],r[5],r[6]).length(),a=mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),bn.copy(this);const c=1/s,u=1/o,f=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=kn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let _,x;if(l)_=s/(o-s),x=o*s/(o-s);else if(a===kn)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Bo)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=kn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,x;if(l)_=1/(o-s),x=o/(o-s);else if(a===kn)_=-2/(o-s),x=-(o+s)/(o-s);else if(a===Bo)_=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const mr=new F,bn=new Mt,e_=new F(0,0,0),t_=new F(1,1,1),Mi=new F,qs=new F,cn=new F,af=new Mt,lf=new or;class mi{constructor(e=0,t=0,i=0,r=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(af,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lf.setFromEuler(this),this.setFromQuaternion(lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n_=0;const cf=new F,gr=new or,Zn=new Mt,$s=new F,es=new F,i_=new F,r_=new or,uf=new F(1,0,0),ff=new F(0,1,0),hf=new F(0,0,1),df={type:"added"},s_={type:"removed"},_r={type:"childadded",child:null},Oa={type:"childremoved",child:null};class Jt extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new F,t=new mi,i=new or,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ke}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(uf,e)}rotateY(e){return this.rotateOnAxis(ff,e)}rotateZ(e){return this.rotateOnAxis(hf,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uf,e)}translateY(e){return this.translateOnAxis(ff,e)}translateZ(e){return this.translateOnAxis(hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$s.copy(e):$s.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(es,$s,this.up):Zn.lookAt($s,es,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(Zn),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(df),_r.child=e,this.dispatchEvent(_r),_r.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s_),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(df),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,i_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,r_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new F(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new F,Jn=new F,Ba=new F,Qn=new F,xr=new F,vr=new F,pf=new F,za=new F,ka=new F,Va=new F,Ha=new Tt,Ga=new Tt,Wa=new Tt;class xn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){En.subVectors(r,t),Jn.subVectors(i,t),Ba.subVectors(e,t);const o=En.dot(En),a=En.dot(Jn),l=En.dot(Ba),c=Jn.dot(Jn),u=Jn.dot(Ba),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ha.setScalar(0),Ga.setScalar(0),Wa.setScalar(0),Ha.fromBufferAttribute(e,t),Ga.fromBufferAttribute(e,i),Wa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ha,s.x),o.addScaledVector(Ga,s.y),o.addScaledVector(Wa,s.z),o}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),Jn.subVectors(e,t),En.cross(Jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),En.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;xr.subVectors(r,i),vr.subVectors(s,i),za.subVectors(e,i);const l=xr.dot(za),c=vr.dot(za);if(l<=0&&c<=0)return t.copy(i);ka.subVectors(e,r);const u=xr.dot(ka),f=vr.dot(ka);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(xr,o);Va.subVectors(e,s);const p=xr.dot(Va),_=vr.dot(Va);if(_>=0&&p<=_)return t.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(vr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return pf.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(pf,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(xr,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function Xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=X0(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Xa(o,s,e+1/3),this.g=Xa(o,s,e),this.b=Xa(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=gn){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const i=Fd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return rt.workingToColorSpace(zt.copy(this),e),Math.round(Qe(zt.r*255,0,255))*65536+Math.round(Qe(zt.g*255,0,255))*256+Math.round(Qe(zt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=gn){rt.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Ks);const i=wa(yi.h,Ks.h,t),r=wa(yi.s,Ks.s,t),s=wa(yi.l,Ks.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new it;it.NAMES=Fd;let o_=0;class Yr extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Br,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=Sl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vl&&(i.blendSrc=this.blendSrc),this.blendDst!==Sl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ef&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vo extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new F,Zs=new He;let a_=0;class Cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),e}}class Od extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bd extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let l_=0;const mn=new Mt,ja=new Jt,Sr=new F,un=new Is,ts=new Is,It=new F;class on extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ud(e)?Bd:Od)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(un.min,ts.min),un.expandByPoint(It),It.addVectors(un.max,ts.max),un.expandByPoint(It)):(un.expandByPoint(ts.min),un.expandByPoint(ts.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(e,c),It.add(Sr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new F,l[z]=new F;const c=new F,u=new F,f=new F,h=new He,p=new He,_=new He,x=new F,m=new F;function d(z,v,y){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,v),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,z),p.fromBufferAttribute(s,v),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),a[z].add(x),a[v].add(x),a[y].add(x),l[z].add(m),l[v].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let z=0,v=T.length;z<v;++z){const y=T[z],I=y.start,U=y.count;for(let H=I,ne=I+U;H<ne;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const C=new F,b=new F,A=new F,R=new F;function L(z){A.fromBufferAttribute(r,z),R.copy(A);const v=a[z];C.copy(v),C.sub(A.multiplyScalar(A.dot(v))).normalize(),b.crossVectors(R,v);const I=b.dot(l[z])<0?-1:1;o.setXYZW(z,C.x,C.y,C.z,I)}for(let z=0,v=T.length;z<v;++z){const y=T[z],I=y.start,U=y.count;for(let H=I,ne=I+U;H<ne;H+=3)L(e.getX(H+0)),L(e.getX(H+1)),L(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Cn(h,u,f)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mf=new Mt,Wi=new oa,Js=new sa,gf=new F,Qs=new F,eo=new F,to=new F,Ya=new F,no=new F,_f=new F,io=new F;class Dn extends Jt{constructor(e=new on,t=new Vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){no.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ya.fromBufferAttribute(f,e),o?no.addScaledVector(Ya,u):no.addScaledVector(Ya.sub(t),u))}t.add(no)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(Js.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Js,gf)===null||Wi.origin.distanceToSquared(gf)>(e.far-e.near)**2))&&(mf.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(mf),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],T=Math.max(m.start,p.start),C=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,A=C;b<A;b+=3){const R=a.getX(b),L=a.getX(b+1),z=a.getX(b+2);r=ro(this,d,e,i,c,u,f,R,L,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const T=a.getX(m),C=a.getX(m+1),b=a.getX(m+2);r=ro(this,o,e,i,c,u,f,T,C,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],T=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,A=C;b<A;b+=3){const R=b,L=b+1,z=b+2;r=ro(this,d,e,i,c,u,f,R,L,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const T=m,C=m+1,b=m+2;r=ro(this,o,e,i,c,u,f,T,C,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function c_(n,e,t,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ii,a),l===null)return null;io.copy(a),io.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:n}}function ro(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Qs),n.getVertexPosition(l,eo),n.getVertexPosition(c,to);const u=c_(n,e,t,i,Qs,eo,to,_f);if(u){const f=new F;xn.getBarycoord(_f,Qs,eo,to,f),r&&(u.uv=xn.getInterpolatedAttribute(r,a,l,c,f,new He)),s&&(u.uv1=xn.getInterpolatedAttribute(s,a,l,c,f,new He)),o&&(u.normal=xn.getInterpolatedAttribute(o,a,l,c,f,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};xn.getNormal(Qs,eo,to,h.normal),u.face=h,u.barycoord=f}return u}class Us extends on{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function _(x,m,d,T,C,b,A,R,L,z,v){const y=b/L,I=A/z,U=b/2,H=A/2,ne=R/2,ie=L+1,K=z+1;let V=0,re=0;const ve=new F;for(let _e=0;_e<K;_e++){const ye=_e*I-H;for(let ke=0;ke<ie;ke++){const je=ke*y-U;ve[x]=je*T,ve[m]=ye*C,ve[d]=ne,c.push(ve.x,ve.y,ve.z),ve[x]=0,ve[m]=0,ve[d]=R>0?1:-1,u.push(ve.x,ve.y,ve.z),f.push(ke/L),f.push(1-_e/z),V+=1}}for(let _e=0;_e<z;_e++)for(let ye=0;ye<L;ye++){const ke=h+ye+ie*_e,je=h+ye+ie*(_e+1),pt=h+(ye+1)+ie*(_e+1),Se=h+(ye+1)+ie*_e;l.push(ke,je,Se),l.push(je,pt,Se),re+=6}a.addGroup(p,re,v),p+=re,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Xr(n[t]);for(const r in i)e[r]=i[r]}return e}function u_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const f_={clone:Xr,merge:qt};var h_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h_,this.fragmentShader=d_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=u_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class kd extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new F,xf=new He,vf=new He;class Tn extends kd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fc*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,xf,vf),t.subVectors(vf,xf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mr=-90,yr=1;class p_ extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(Mr,yr,e,t);r.layers=this.layers,this.add(r);const s=new Tn(Mr,yr,e,t);s.layers=this.layers,this.add(s);const o=new Tn(Mr,yr,e,t);o.layers=this.layers,this.add(o);const a=new Tn(Mr,yr,e,t);a.layers=this.layers,this.add(a);const l=new Tn(Mr,yr,e,t);l.layers=this.layers,this.add(l);const c=new Tn(Mr,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Vd extends Gt{constructor(e=[],t=sr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hd extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Us(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:li});s.uniforms.tEquirect.value=t;const o=new Dn(r,s),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Nt),new p_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class tr extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m_={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class g_ extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class __{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uc,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new F;class Ho{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ko("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ho(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ko("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hc extends Yr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let br;const ns=new F,Er=new F,Tr=new F,Ar=new He,is=new He,Gd=new Mt,so=new F,rs=new F,oo=new F,Sf=new He,$a=new He,Mf=new He;class yf extends Jt{constructor(e=new hc){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new on;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new __(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Ho(i,3,0,!1)),br.setAttribute("uv",new Ho(i,2,3,!1))}this.geometry=br,this.material=e,this.center=new He(.5,.5),this.count=1}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Er.setFromMatrixScale(this.matrixWorld),Gd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Er.multiplyScalar(-Tr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ao(so.set(-.5,-.5,0),Tr,o,Er,r,s),ao(rs.set(.5,-.5,0),Tr,o,Er,r,s),ao(oo.set(.5,.5,0),Tr,o,Er,r,s),Sf.set(0,0),$a.set(1,0),Mf.set(1,1);let a=e.ray.intersectTriangle(so,rs,oo,!1,ns);if(a===null&&(ao(rs.set(-.5,.5,0),Tr,o,Er,r,s),$a.set(0,1),a=e.ray.intersectTriangle(so,oo,rs,!1,ns),a===null))return;const l=e.ray.origin.distanceTo(ns);l<e.near||l>e.far||t.push({distance:l,point:ns.clone(),uv:xn.getInterpolation(ns,so,rs,oo,Sf,$a,Mf,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ao(n,e,t,i,r,s){Ar.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(is.x=s*Ar.x-r*Ar.y,is.y=r*Ar.x+s*Ar.y):is.copy(Ar),n.copy(e),n.x+=is.x,n.y+=is.y,n.applyMatrix4(Gd)}class x_ extends Gt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Ft,u=Ft,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ka=new F,v_=new F,S_=new Ke;class ni{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ka.subVectors(i,t).cross(v_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ka),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||S_.getNormalMatrix(e),r=this.coplanarPoint(Ka).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new sa,M_=new He(.5,.5),lo=new F;class Wd{constructor(e=new ni,t=new ni,i=new ni,r=new ni,s=new ni,o=new ni){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],_=s[8],x=s[9],m=s[10],d=s[11],T=s[12],C=s[13],b=s[14],A=s[15];if(r[0].setComponents(c-o,p-u,d-_,A-T).normalize(),r[1].setComponents(c+o,p+u,d+_,A+T).normalize(),r[2].setComponents(c+a,p+f,d+x,A+C).normalize(),r[3].setComponents(c-a,p-f,d-x,A-C).normalize(),i)r[4].setComponents(l,h,m,b).normalize(),r[5].setComponents(c-l,p-h,d-m,A-b).normalize();else if(r[4].setComponents(c-l,p-h,d-m,A-b).normalize(),t===kn)r[5].setComponents(c+l,p+h,d+m,A+b).normalize();else if(t===Bo)r[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);const t=M_.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(lo.x=r.normal.x>0?e.max.x:e.min.x,lo.y=r.normal.y>0?e.max.y:e.min.y,lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xd extends Yr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Go=new F,Wo=new F,bf=new Mt,ss=new oa,co=new sa,Za=new F,Ef=new F;class Tf extends Jt{constructor(e=new on,t=new Xd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Go.fromBufferAttribute(t,r-1),Wo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Go.distanceTo(Wo);e.setAttribute("lineDistance",new Wt(i,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;bf.copy(r).invert(),ss.copy(e.ray).applyMatrix4(bf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=u.getX(x),T=u.getX(x+1),C=uo(this,e,ss,l,d,T,x);C&&t.push(C)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),d=uo(this,e,ss,l,x,m,_-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=uo(this,e,ss,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){const x=uo(this,e,ss,l,_-1,p,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function uo(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Go.fromBufferAttribute(a,r),Wo.fromBufferAttribute(a,s),t.distanceSqToSegment(Go,Wo,Za,Ef)>i)return;Za.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Za);if(!(c<e.near||c>e.far))return{distance:c,point:Ef.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Af extends Gt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ps extends Gt{constructor(e,t,i=Wn,r,s,o,a=Ft,l=Ft,c,u=pi,f=1){if(u!==pi&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class y_ extends Ps{constructor(e,t=Wn,i=sr,r,s,o=Ft,a=Ft,l,c=pi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jd extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $c extends on{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new F,u=new He;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const p=i+f/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class b_{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new He:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new F,r=[],s=[],o=[],a=new F,l=new Mt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Qe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Qe(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function E_(n,e){const t=1-n;return t*t*t*e}function T_(n,e){const t=1-n;return 3*t*t*n*e}function A_(n,e){return 3*(1-n)*n*n*e}function w_(n,e){return n*n*n*e}function Ja(n,e,t,i,r){return E_(n,e)+T_(n,t)+A_(n,i)+w_(n,r)}class C_ extends b_{constructor(e=new F,t=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ja(e,r.x,s.x,o.x,a.x),Ja(e,r.y,s.y,o.y,a.y),Ja(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class aa extends on{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const T=d*h-o;for(let C=0;C<c;C++){const b=C*f-s;_.push(b,-T,0),x.push(0,0,1),m.push(C/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const C=T+c*d,b=T+c*(d+1),A=T+1+c*(d+1),R=T+1+c*d;p.push(C,b,R),p.push(b,A,R)}this.setIndex(p),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kc extends on{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/r,p=new F,_=new He;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}f+=h}for(let x=0;x<r;x++){const m=x*(i+1);for(let d=0;d<i;d++){const T=d+m,C=T,b=T+i+1,A=T+i+2,R=T+1;a.push(C,b,R),a.push(b,A,R)}}this.setIndex(a),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class R_ extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class P_ extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class D_ extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zc extends kd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class L_ extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const wf=new Mt;class I_{constructor(e,t,i=0,r=1/0){this.ray=new oa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wf),this}intersectObject(e,t=!0,i=[]){return dc(e,this,i,t),i.sort(Cf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)dc(e[r],this,i,t);return i.sort(Cf),i}}function Cf(n,e){return n.distance-e.distance}function dc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)dc(s[o],e,t,!0)}}class Rf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class U_ extends ar{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){We("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pf(n,e,t,i){const r=N_(i);switch(t){case Dd:return n*e;case Id:return n*e/r.components*r.byteLength;case Hc:return n*e/r.components*r.byteLength;case Gr:return n*e*2/r.components*r.byteLength;case Gc:return n*e*2/r.components*r.byteLength;case Ld:return n*e*3/r.components*r.byteLength;case An:return n*e*4/r.components*r.byteLength;case Wc:return n*e*4/r.components*r.byteLength;case yo:case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:case Nl:return Math.max(n,16)*Math.max(e,8)/4;case Ll:case Ul:return Math.max(n,8)*Math.max(e,8)/2;case Fl:case Ol:case zl:case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bl:case Vl:case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ic:case rc:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case oc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lc:case cc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N_(n){switch(n){case _n:case wd:return{byteLength:1,components:1};case ws:case Cd:case di:return{byteLength:2,components:1};case kc:case Vc:return{byteLength:2,components:4};case Wn:case zc:case zn:return{byteLength:4,components:1};case Rd:case Pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);function Yd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function F_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var O_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B_=`#ifdef USE_ALPHAHASH
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
#endif`,z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G_=`#ifdef USE_AOMAP
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
#endif`,W_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X_=`#ifdef USE_BATCHING
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
#endif`,j_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K_=`#ifdef USE_IRIDESCENCE
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
#endif`,Z_=`#ifdef USE_BUMPMAP
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
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ox=`#define PI 3.141592653589793
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
} // validated`,ax=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lx=`vec3 transformedNormal = objectNormal;
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
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
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
}`,Tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cx=`uniform bool receiveShadow;
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
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
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
#endif`,Nx=`uniform sampler2D dfgLUT;
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
}`,Fx=`
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jx=`#if defined( USE_POINTS_UV )
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
#endif`,Yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`#ifdef USE_MORPHTARGETS
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
#endif`,Qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sv=`#ifdef USE_NORMALMAP
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
#endif`,ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mv=`float getShadowMask() {
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
}`,yv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,Ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tv=`#ifdef USE_SKINNING
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
#endif`,Av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pv=`#ifdef USE_TRANSMISSION
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
#endif`,Dv=`#ifdef USE_TRANSMISSION
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ov=`uniform sampler2D t2D;
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`#include <common>
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
}`,Gv=`#if DEPTH_PACKING == 3200
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
}`,Wv=`#define DISTANCE
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
}`,Xv=`#define DISTANCE
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`uniform float scale;
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
}`,$v=`uniform vec3 diffuse;
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
}`,Kv=`#include <common>
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Jv=`#define LAMBERT
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
}`,Qv=`#define LAMBERT
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
}`,eS=`#define MATCAP
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
}`,tS=`#define MATCAP
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
}`,nS=`#define NORMAL
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
}`,iS=`#define NORMAL
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
}`,rS=`#define PHONG
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
}`,sS=`#define PHONG
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
}`,oS=`#define STANDARD
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
}`,aS=`#define STANDARD
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
}`,lS=`#define TOON
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
}`,cS=`#define TOON
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
}`,uS=`uniform float size;
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
}`,fS=`uniform vec3 diffuse;
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
}`,hS=`#include <common>
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
}`,dS=`uniform vec3 color;
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
}`,pS=`uniform float rotation;
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
}`,mS=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:O_,alphahash_pars_fragment:B_,alphamap_fragment:z_,alphamap_pars_fragment:k_,alphatest_fragment:V_,alphatest_pars_fragment:H_,aomap_fragment:G_,aomap_pars_fragment:W_,batching_pars_vertex:X_,batching_vertex:j_,begin_vertex:Y_,beginnormal_vertex:q_,bsdfs:$_,iridescence_fragment:K_,bumpmap_pars_fragment:Z_,clipping_planes_fragment:J_,clipping_planes_pars_fragment:Q_,clipping_planes_pars_vertex:ex,clipping_planes_vertex:tx,color_fragment:nx,color_pars_fragment:ix,color_pars_vertex:rx,color_vertex:sx,common:ox,cube_uv_reflection_fragment:ax,defaultnormal_vertex:lx,displacementmap_pars_vertex:cx,displacementmap_vertex:ux,emissivemap_fragment:fx,emissivemap_pars_fragment:hx,colorspace_fragment:dx,colorspace_pars_fragment:px,envmap_fragment:mx,envmap_common_pars_fragment:gx,envmap_pars_fragment:_x,envmap_pars_vertex:xx,envmap_physical_pars_fragment:Rx,envmap_vertex:vx,fog_vertex:Sx,fog_pars_vertex:Mx,fog_fragment:yx,fog_pars_fragment:bx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:Tx,lights_lambert_fragment:Ax,lights_lambert_pars_fragment:wx,lights_pars_begin:Cx,lights_toon_fragment:Px,lights_toon_pars_fragment:Dx,lights_phong_fragment:Lx,lights_phong_pars_fragment:Ix,lights_physical_fragment:Ux,lights_physical_pars_fragment:Nx,lights_fragment_begin:Fx,lights_fragment_maps:Ox,lights_fragment_end:Bx,logdepthbuf_fragment:zx,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Hx,map_fragment:Gx,map_pars_fragment:Wx,map_particle_fragment:Xx,map_particle_pars_fragment:jx,metalnessmap_fragment:Yx,metalnessmap_pars_fragment:qx,morphinstance_vertex:$x,morphcolor_vertex:Kx,morphnormal_vertex:Zx,morphtarget_pars_vertex:Jx,morphtarget_vertex:Qx,normal_fragment_begin:ev,normal_fragment_maps:tv,normal_pars_fragment:nv,normal_pars_vertex:iv,normal_vertex:rv,normalmap_pars_fragment:sv,clearcoat_normal_fragment_begin:ov,clearcoat_normal_fragment_maps:av,clearcoat_pars_fragment:lv,iridescence_pars_fragment:cv,opaque_fragment:uv,packing:fv,premultiplied_alpha_fragment:hv,project_vertex:dv,dithering_fragment:pv,dithering_pars_fragment:mv,roughnessmap_fragment:gv,roughnessmap_pars_fragment:_v,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:vv,shadowmap_vertex:Sv,shadowmask_pars_fragment:Mv,skinbase_vertex:yv,skinning_pars_vertex:bv,skinning_vertex:Ev,skinnormal_vertex:Tv,specularmap_fragment:Av,specularmap_pars_fragment:wv,tonemapping_fragment:Cv,tonemapping_pars_fragment:Rv,transmission_fragment:Pv,transmission_pars_fragment:Dv,uv_pars_fragment:Lv,uv_pars_vertex:Iv,uv_vertex:Uv,worldpos_vertex:Nv,background_vert:Fv,background_frag:Ov,backgroundCube_vert:Bv,backgroundCube_frag:zv,cube_vert:kv,cube_frag:Vv,depth_vert:Hv,depth_frag:Gv,distance_vert:Wv,distance_frag:Xv,equirect_vert:jv,equirect_frag:Yv,linedashed_vert:qv,linedashed_frag:$v,meshbasic_vert:Kv,meshbasic_frag:Zv,meshlambert_vert:Jv,meshlambert_frag:Qv,meshmatcap_vert:eS,meshmatcap_frag:tS,meshnormal_vert:nS,meshnormal_frag:iS,meshphong_vert:rS,meshphong_frag:sS,meshphysical_vert:oS,meshphysical_frag:aS,meshtoon_vert:lS,meshtoon_frag:cS,points_vert:uS,points_frag:fS,shadow_vert:hS,shadow_frag:dS,sprite_vert:pS,sprite_frag:mS},Ae={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},On={basic:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:qt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:qt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new it(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:qt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:qt([Ae.points,Ae.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:qt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:qt([Ae.common,Ae.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:qt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:qt([Ae.sprite,Ae.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:qt([Ae.common,Ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:qt([Ae.lights,Ae.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};On.physical={uniforms:qt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const fo={r:0,b:0,g:0},ji=new mi,gS=new Mt;function _S(n,e,t,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function x(C){let b=!1;const A=_(C);A===null?d(a,l):A&&A.isColor&&(d(A,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(C,b){const A=_(b);A&&(A.isCubeTexture||A.mapping===ra)?(u===void 0&&(u=new Dn(new Us(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Xr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ji.copy(b.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gS.makeRotationFromEuler(ji)),u.material.toneMapped=rt.getTransfer(A.colorSpace)!==ut,(f!==A||h!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,p=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Dn(new aa(2,2),new Xn({name:"BackgroundMaterial",uniforms:Xr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=rt.getTransfer(A.colorSpace)!==ut,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,p=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function d(C,b){C.getRGB(fo,zd(n)),i.buffers.color.setClear(fo.r,fo.g,fo.b,b,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,b=1){a.set(C),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,d(a,l)},render:x,addToRenderList:m,dispose:T}}function xS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,I,U,H,ne){let ie=!1;const K=f(H,U,I);s!==K&&(s=K,c(s.object)),ie=p(y,H,U,ne),ie&&_(y,H,U,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,b(y,I,U,H),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,I,U){const H=U.wireframe===!0;let ne=i[y.id];ne===void 0&&(ne={},i[y.id]=ne);let ie=ne[I.id];ie===void 0&&(ie={},ne[I.id]=ie);let K=ie[H];return K===void 0&&(K=h(l()),ie[H]=K),K}function h(y){const I=[],U=[],H=[];for(let ne=0;ne<t;ne++)I[ne]=0,U[ne]=0,H[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,I,U,H){const ne=s.attributes,ie=I.attributes;let K=0;const V=U.getAttributes();for(const re in V)if(V[re].location>=0){const _e=ne[re];let ye=ie[re];if(ye===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),_e===void 0||_e.attribute!==ye||ye&&_e.data!==ye.data)return!0;K++}return s.attributesNum!==K||s.index!==H}function _(y,I,U,H){const ne={},ie=I.attributes;let K=0;const V=U.getAttributes();for(const re in V)if(V[re].location>=0){let _e=ie[re];_e===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor));const ye={};ye.attribute=_e,_e&&_e.data&&(ye.data=_e.data),ne[re]=ye,K++}s.attributes=ne,s.attributesNum=K,s.index=H}function x(){const y=s.newAttributes;for(let I=0,U=y.length;I<U;I++)y[I]=0}function m(y){d(y,0)}function d(y,I){const U=s.newAttributes,H=s.enabledAttributes,ne=s.attributeDivisors;U[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),ne[y]!==I&&(n.vertexAttribDivisor(y,I),ne[y]=I)}function T(){const y=s.newAttributes,I=s.enabledAttributes;for(let U=0,H=I.length;U<H;U++)I[U]!==y[U]&&(n.disableVertexAttribArray(U),I[U]=0)}function C(y,I,U,H,ne,ie,K){K===!0?n.vertexAttribIPointer(y,I,U,ne,ie):n.vertexAttribPointer(y,I,U,H,ne,ie)}function b(y,I,U,H){x();const ne=H.attributes,ie=U.getAttributes(),K=I.defaultAttributeValues;for(const V in ie){const re=ie[V];if(re.location>=0){let ve=ne[V];if(ve===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),ve!==void 0){const _e=ve.normalized,ye=ve.itemSize,ke=e.get(ve);if(ke===void 0)continue;const je=ke.buffer,pt=ke.type,Se=ke.bytesPerElement,O=pt===n.INT||pt===n.UNSIGNED_INT||ve.gpuType===zc;if(ve.isInterleavedBufferAttribute){const q=ve.data,J=q.stride,pe=ve.offset;if(q.isInstancedInterleavedBuffer){for(let me=0;me<re.locationSize;me++)d(re.location+me,q.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let me=0;me<re.locationSize;me++)m(re.location+me);n.bindBuffer(n.ARRAY_BUFFER,je);for(let me=0;me<re.locationSize;me++)C(re.location+me,ye/re.locationSize,pt,_e,J*Se,(pe+ye/re.locationSize*me)*Se,O)}else{if(ve.isInstancedBufferAttribute){for(let q=0;q<re.locationSize;q++)d(re.location+q,ve.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let q=0;q<re.locationSize;q++)m(re.location+q);n.bindBuffer(n.ARRAY_BUFFER,je);for(let q=0;q<re.locationSize;q++)C(re.location+q,ye/re.locationSize,pt,_e,ye*Se,ye/re.locationSize*q*Se,O)}}else if(K!==void 0){const _e=K[V];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(re.location,_e);break;case 3:n.vertexAttrib3fv(re.location,_e);break;case 4:n.vertexAttrib4fv(re.location,_e);break;default:n.vertexAttrib1fv(re.location,_e)}}}}T()}function A(){z();for(const y in i){const I=i[y];for(const U in I){const H=I[U];for(const ne in H)u(H[ne].object),delete H[ne];delete I[U]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const U in I){const H=I[U];for(const ne in H)u(H[ne].object),delete H[ne];delete I[U]}delete i[y.id]}function L(y){for(const I in i){const U=i[I];if(U[y.id]===void 0)continue;const H=U[y.id];for(const ne in H)u(H[ne].object),delete H[ne];delete U[y.id]}}function z(){v(),o=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function vS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function SS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==An&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const z=L===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==_n&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==zn&&!z)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:b,maxSamples:A,samples:R}}function MS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ni,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,C=T*4;let b=d.clippingState||null;l.value=b,b=u(_,h,C,p);for(let A=0;A!==C;++A)b[A]=t[A];d.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let C=0,b=p;C!==x;++C,b+=4)o.copy(f[C]).applyMatrix4(T,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function yS(n){let e=new WeakMap;function t(o,a){return a===Cl?o.mapping=sr:a===Rl&&(o.mapping=Hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cl||a===Rl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ri=4,Df=[.125,.215,.35,.446,.526,.582],Ji=20,bS=256,os=new Zc,Lf=new it;let Qa=null,el=0,tl=0,nl=!1;const ES=new F;class If{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=ES}=s;Qa=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:di,format:An,colorSpace:Wr,depthBuffer:!1},r=Uf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=TS(s)),this._blurMaterial=wS(s,e,t),this._ggxMaterial=AS(s,e,t)}return r}_compileMaterial(e){const t=new Dn(new on,e);this._renderer.compile(t,os)}_sceneToCubeUV(e,t,i,r,s){const l=new Tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Lf),f.toneMapping=Hn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new Us,new Vo({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let d=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,d=!0):(m.color.copy(Lf),d=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[C],s.y,s.z)):b===1?(l.up.set(0,0,c[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[C],s.z)):(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[C]));const A=this._cubeSize;wr(r,b*A,C>2?A:0,A,A),f.setRenderTarget(r),d&&f.render(x,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===sr||e.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,os)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Ri?i-_+Ri:0),d=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,wr(s,m,d,3*x,2*x),r.setRenderTarget(s),r.render(a,os),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,wr(e,m,d,3*x,2*x),r.setRenderTarget(e),r.render(a,os)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ji-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Ji;m>Ji&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const d=[];let T=0;for(let L=0;L<Ji;++L){const z=L/x,v=Math.exp(-z*z/2);d.push(v),L===0?T+=v:L<m&&(T+=2*v)}for(let L=0;L<d.length;L++)d[L]=d[L]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:C}=this;h.dTheta.value=_,h.mipInt.value=C-i;const b=this._sizeLods[r],A=3*b*(r>C-Ri?r-C+Ri:0),R=4*(this._cubeSize-b);wr(t,A,R,3*b,2*b),l.setRenderTarget(t),l.render(f,os)}}function TS(n){const e=[],t=[],i=[];let r=n;const s=n-Ri+1+Df.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ri?l=Df[o-n+Ri-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,d=1,T=new Float32Array(x*_*p),C=new Float32Array(m*_*p),b=new Float32Array(d*_*p);for(let R=0;R<p;R++){const L=R%3*2/3-1,z=R>2?0:-1,v=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];T.set(v,x*_*R),C.set(h,m*_*R);const y=[R,R,R,R,R,R];b.set(y,d*_*R)}const A=new on;A.setAttribute("position",new Cn(T,x)),A.setAttribute("uv",new Cn(C,m)),A.setAttribute("faceIndex",new Cn(b,d)),i.push(new Dn(A,null)),r>Ri&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Uf(n,e,t){const i=new Gn(n,e,t);return i.texture.mapping=ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AS(n,e,t){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:la(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function wS(n,e,t){const i=new Float32Array(Ji),r=new F(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:la(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Nf(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ff(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function la(){return`

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
	`}function CS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cl||l===Rl,u=l===sr||l===Hr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new If(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new If(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function RS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Rs("WebGLRenderer: "+i+" extension not supported."),r}}}function PS(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let C=0,b=T.length;C<b;C+=3){const A=T[C+0],R=T[C+1],L=T[C+2];h.push(A,R,R,L,L,A)}}else if(_!==void 0){const T=_.array;x=_.version;for(let C=0,b=T.length/3-1;C<b;C+=3){const A=C+0,R=C+1,L=C+2;h.push(A,R,R,L,L,A)}}else return;const m=new(Ud(h)?Bd:Od)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function DS(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function f(h,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,_);let d=0;for(let T=0;T<_;T++)d+=p[T]*x[T];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function LS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function IS(n,e,t){const i=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let A=a.attributes.position.count*b,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*R*4*f),z=new Nd(L,A,R,f);z.type=zn,z.needsUpdate=!0;const v=b*4;for(let I=0;I<f;I++){const U=d[I],H=T[I],ne=C[I],ie=A*R*4*I;for(let K=0;K<U.count;K++){const V=K*v;_===!0&&(r.fromBufferAttribute(U,K),L[ie+V+0]=r.x,L[ie+V+1]=r.y,L[ie+V+2]=r.z,L[ie+V+3]=0),x===!0&&(r.fromBufferAttribute(H,K),L[ie+V+4]=r.x,L[ie+V+5]=r.y,L[ie+V+6]=r.z,L[ie+V+7]=0),m===!0&&(r.fromBufferAttribute(ne,K),L[ie+V+8]=r.x,L[ie+V+9]=r.y,L[ie+V+10]=r.z,L[ie+V+11]=ne.itemSize===4?r.w:1)}}h={count:f,texture:z,size:new He(A,R)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function US(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const NS={[vd]:"LINEAR_TONE_MAPPING",[Sd]:"REINHARD_TONE_MAPPING",[Md]:"CINEON_TONE_MAPPING",[yd]:"ACES_FILMIC_TONE_MAPPING",[Ed]:"AGX_TONE_MAPPING",[Td]:"NEUTRAL_TONE_MAPPING",[bd]:"CUSTOM_TONE_MAPPING"};function FS(n,e,t,i,r){const s=new Gn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Gn(e,t,{type:di,depthBuffer:!1,stencilBuffer:!1}),a=new on;a.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const l=new R_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Dn(a,l),u=new Zc(-1,1,1,-1,0,1);let f=null,h=null,p=!1,_,x=null,m=[],d=!1;this.setSize=function(T,C){s.setSize(T,C),o.setSize(T,C);for(let b=0;b<m.length;b++){const A=m[b];A.setSize&&A.setSize(T,C)}},this.setEffects=function(T){m=T,d=m.length>0&&m[0].isRenderPass===!0;const C=s.width,b=s.height;for(let A=0;A<m.length;A++){const R=m[A];R.setSize&&R.setSize(C,b)}},this.begin=function(T,C){if(p||T.toneMapping===Hn&&m.length===0)return!1;if(x=C,C!==null){const b=C.width,A=C.height;(s.width!==b||s.height!==A)&&this.setSize(b,A)}return d===!1&&T.setRenderTarget(s),_=T.toneMapping,T.toneMapping=Hn,!0},this.hasRenderPass=function(){return d},this.end=function(T,C){T.toneMapping=_,p=!0;let b=s,A=o;for(let R=0;R<m.length;R++){const L=m[R];if(L.enabled!==!1&&(L.render(T,A,b,C),L.needsSwap!==!1)){const z=b;b=A,A=z}}if(f!==T.outputColorSpace||h!==T.toneMapping){f=T.outputColorSpace,h=T.toneMapping,l.defines={},rt.getTransfer(f)===ut&&(l.defines.SRGB_TRANSFER="");const R=NS[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,T.setRenderTarget(x),T.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const qd=new Gt,pc=new Ps(1,1),$d=new Nd,Kd=new J0,Zd=new Vd,Of=[],Bf=[],zf=new Float32Array(16),kf=new Float32Array(9),Vf=new Float32Array(4);function qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Of[r];if(s===void 0&&(s=new Float32Array(r),Of[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ca(n,e){let t=Bf[e];t===void 0&&(t=new Int32Array(e),Bf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function BS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function zS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function kS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function VS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Vf.set(i),n.uniformMatrix2fv(this.addr,!1,Vf),Lt(t,i)}}function HS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;kf.set(i),n.uniformMatrix3fv(this.addr,!1,kf),Lt(t,i)}}function GS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;zf.set(i),n.uniformMatrix4fv(this.addr,!1,zf),Lt(t,i)}}function WS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function XS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function jS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function YS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function qS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function KS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function ZS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function JS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(pc.compareFunction=t.isReversedDepthBuffer()?jc:Xc,s=pc):s=qd,t.setTexture2D(e||s,r)}function QS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Kd,r)}function eM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Zd,r)}function tM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$d,r)}function nM(n){switch(n){case 5126:return OS;case 35664:return BS;case 35665:return zS;case 35666:return kS;case 35674:return VS;case 35675:return HS;case 35676:return GS;case 5124:case 35670:return WS;case 35667:case 35671:return XS;case 35668:case 35672:return jS;case 35669:case 35673:return YS;case 5125:return qS;case 36294:return $S;case 36295:return KS;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return QS;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}function iM(n,e){n.uniform1fv(this.addr,e)}function rM(n,e){const t=qr(e,this.size,2);n.uniform2fv(this.addr,t)}function sM(n,e){const t=qr(e,this.size,3);n.uniform3fv(this.addr,t)}function oM(n,e){const t=qr(e,this.size,4);n.uniform4fv(this.addr,t)}function aM(n,e){const t=qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lM(n,e){const t=qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cM(n,e){const t=qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uM(n,e){n.uniform1iv(this.addr,e)}function fM(n,e){n.uniform2iv(this.addr,e)}function hM(n,e){n.uniform3iv(this.addr,e)}function dM(n,e){n.uniform4iv(this.addr,e)}function pM(n,e){n.uniform1uiv(this.addr,e)}function mM(n,e){n.uniform2uiv(this.addr,e)}function gM(n,e){n.uniform3uiv(this.addr,e)}function _M(n,e){n.uniform4uiv(this.addr,e)}function xM(n,e,t){const i=this.cache,r=e.length,s=ca(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=pc:o=qd;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function vM(n,e,t){const i=this.cache,r=e.length,s=ca(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Kd,s[o])}function SM(n,e,t){const i=this.cache,r=e.length,s=ca(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Zd,s[o])}function MM(n,e,t){const i=this.cache,r=e.length,s=ca(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||$d,s[o])}function yM(n){switch(n){case 5126:return iM;case 35664:return rM;case 35665:return sM;case 35666:return oM;case 35674:return aM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return uM;case 35667:case 35671:return fM;case 35668:case 35672:return hM;case 35669:case 35673:return dM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return MM}}class bM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nM(t.type)}}class EM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yM(t.type)}}class TM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function Hf(n,e){n.seq.push(e),n.map[e.id]=e}function AM(n,e,t){const i=n.name,r=i.length;for(il.lastIndex=0;;){const s=il.exec(i),o=il.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hf(t,c===void 0?new bM(a,n,e):new EM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new TM(a),Hf(t,f)),t=f}}}class wo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);AM(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Gf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const wM=37297;let CM=0;function RM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Wf=new Ke;function PM(n){rt._getMatrix(Wf,rt.workingColorSpace,n);const e=`mat3( ${Wf.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Oo:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+RM(n.getShaderSource(e),a)}else return s}function DM(n,e){const t=PM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const LM={[vd]:"Linear",[Sd]:"Reinhard",[Md]:"Cineon",[yd]:"ACESFilmic",[Ed]:"AgX",[Td]:"Neutral",[bd]:"Custom"};function IM(n,e){const t=LM[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ho=new F;function UM(){rt.getLuminanceCoefficients(ho);const n=ho.x.toFixed(4),e=ho.y.toFixed(4),t=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function FM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function us(n){return n!==""}function jf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BM=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(BM,kM)}const zM=new Map;function kM(n,e){let t=Ze[e];if(t===void 0){const i=zM.get(e);if(i!==void 0)t=Ze[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const VM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(n){return n.replace(VM,HM)}function HM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $f(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const GM={[Mo]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function WM(n){return GM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XM={[sr]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE_UV"};function jM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":XM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const YM={[Hr]:"ENVMAP_MODE_REFRACTION"};function qM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":YM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $M={[xd]:"ENVMAP_BLENDING_MULTIPLY",[D0]:"ENVMAP_BLENDING_MIX",[L0]:"ENVMAP_BLENDING_ADD"};function KM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":$M[n.combine]||"ENVMAP_BLENDING_NONE"}function ZM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function JM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=WM(t),c=jM(t),u=qM(t),f=KM(t),h=ZM(t),p=NM(t),_=FM(s),x=r.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(us).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(us).join(`
`),d.length>0&&(d+=`
`)):(m=[$f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),d=[$f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Hn?IM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,DM("linearToOutputTexel",t.outputColorSpace),UM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),o=mc(o),o=jf(o,t),o=Yf(o,t),a=mc(a),a=jf(a,t),a=Yf(a,t),o=qf(o),a=qf(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const C=T+m+o,b=T+d+a,A=Gf(r,r.VERTEX_SHADER,C),R=Gf(r,r.FRAGMENT_SHADER,b);r.attachShader(x,A),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(I){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(x)||"",H=r.getShaderInfoLog(A)||"",ne=r.getShaderInfoLog(R)||"",ie=U.trim(),K=H.trim(),V=ne.trim();let re=!0,ve=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,R);else{const _e=Xf(r,A,"vertex"),ye=Xf(r,R,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ie+`
`+_e+`
`+ye)}else ie!==""?We("WebGLProgram: Program Info Log:",ie):(K===""||V==="")&&(ve=!1);ve&&(I.diagnostics={runnable:re,programLog:ie,vertexShader:{log:K,prefix:m},fragmentShader:{log:V,prefix:d}})}r.deleteShader(A),r.deleteShader(R),z=new wo(r,x),v=OM(r,x)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let v;this.getAttributes=function(){return v===void 0&&L(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,wM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}let QM=0;class ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ty(e),t.set(e,i)),i}}class ty{constructor(e){this.id=QM++,this.code=e,this.usedTimes=0}}function ny(n,e,t,i,r,s,o){const a=new qc,l=new ey,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,I,U,H){const ne=U.fog,ie=H.geometry,K=v.isMeshStandardMaterial?U.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||K),re=V&&V.mapping===ra?V.image.height:null,ve=_[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const _e=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ye=_e!==void 0?_e.length:0;let ke=0;ie.morphAttributes.position!==void 0&&(ke=1),ie.morphAttributes.normal!==void 0&&(ke=2),ie.morphAttributes.color!==void 0&&(ke=3);let je,pt,Se,O;if(ve){const lt=On[ve];je=lt.vertexShader,pt=lt.fragmentShader}else je=v.vertexShader,pt=v.fragmentShader,l.update(v),Se=l.getVertexShaderID(v),O=l.getFragmentShaderID(v);const q=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),pe=H.isInstancedMesh===!0,me=H.isBatchedMesh===!0,Ve=!!v.map,w=!!v.matcap,P=!!V,k=!!v.aoMap,Q=!!v.lightMap,j=!!v.bumpMap,te=!!v.normalMap,E=!!v.displacementMap,le=!!v.emissiveMap,oe=!!v.metalnessMap,se=!!v.roughnessMap,ae=v.anisotropy>0,S=v.clearcoat>0,g=v.dispersion>0,D=v.iridescence>0,X=v.sheen>0,ee=v.transmission>0,W=ae&&!!v.anisotropyMap,we=S&&!!v.clearcoatMap,he=S&&!!v.clearcoatNormalMap,Pe=S&&!!v.clearcoatRoughnessMap,Fe=D&&!!v.iridescenceMap,ue=D&&!!v.iridescenceThicknessMap,Me=X&&!!v.sheenColorMap,Ee=X&&!!v.sheenRoughnessMap,De=!!v.specularMap,xe=!!v.specularColorMap,$e=!!v.specularIntensityMap,N=ee&&!!v.transmissionMap,Re=ee&&!!v.thicknessMap,ge=!!v.gradientMap,Le=!!v.alphaMap,de=v.alphaTest>0,ce=!!v.alphaHash,be=!!v.extensions;let Ye=Hn;v.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const _t={shaderID:ve,shaderType:v.type,shaderName:v.name,vertexShader:je,fragmentShader:pt,defines:v.defines,customVertexShaderID:Se,customFragmentShaderID:O,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:me,batchingColor:me&&H._colorsTexture!==null,instancing:pe,instancingColor:pe&&H.instanceColor!==null,instancingMorph:pe&&H.morphTexture!==null,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Wr,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:w,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:re,aoMap:k,lightMap:Q,bumpMap:j,normalMap:te,displacementMap:E,emissiveMap:le,normalMapObjectSpace:te&&v.normalMapType===F0,normalMapTangentSpace:te&&v.normalMapType===N0,metalnessMap:oe,roughnessMap:se,anisotropy:ae,anisotropyMap:W,clearcoat:S,clearcoatMap:we,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,dispersion:g,iridescence:D,iridescenceMap:Fe,iridescenceThicknessMap:ue,sheen:X,sheenColorMap:Me,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:xe,specularIntensityMap:$e,transmission:ee,transmissionMap:N,thicknessMap:Re,gradientMap:ge,opaque:v.transparent===!1&&v.blending===Br&&v.alphaToCoverage===!1,alphaMap:Le,alphaTest:de,alphaHash:ce,combine:v.combine,mapUv:Ve&&x(v.map.channel),aoMapUv:k&&x(v.aoMap.channel),lightMapUv:Q&&x(v.lightMap.channel),bumpMapUv:j&&x(v.bumpMap.channel),normalMapUv:te&&x(v.normalMap.channel),displacementMapUv:E&&x(v.displacementMap.channel),emissiveMapUv:le&&x(v.emissiveMap.channel),metalnessMapUv:oe&&x(v.metalnessMap.channel),roughnessMapUv:se&&x(v.roughnessMap.channel),anisotropyMapUv:W&&x(v.anisotropyMap.channel),clearcoatMapUv:we&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(v.sheenRoughnessMap.channel),specularMapUv:De&&x(v.specularMap.channel),specularColorMapUv:xe&&x(v.specularColorMap.channel),specularIntensityMapUv:$e&&x(v.specularIntensityMap.channel),transmissionMapUv:N&&x(v.transmissionMap.channel),thicknessMapUv:Re&&x(v.thicknessMap.channel),alphaMapUv:Le&&x(v.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(te||ae),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ie.attributes.uv&&(Ve||Le),fog:!!ne,useFog:v.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:J,skinning:H.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===ut,decodeVideoTextureEmissive:le&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===si,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:be&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&v.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function d(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)y.push(I),y.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(T(y,v),C(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function T(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function C(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const y=_[v.type];let I;if(y){const U=On[y];I=f_.clone(U.uniforms)}else I=v.uniforms;return I}function A(v,y){let I=f.get(y);return I!==void 0?++I.usedTimes:(I=new JM(n,y,v,s),u.push(I),f.set(y,I)),I}function R(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),f.delete(v.cacheKey),v.destroy()}}function L(v){l.remove(v)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:A,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:z}}function iy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function ry(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Kf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||ry),i.length>1&&i.sort(h||Kf),r.length>1&&r.sort(h||Kf)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function sy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Zf,n.set(i,[o])):r>=s.length?(o=new Zf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function oy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new it};break;case"SpotLight":t={position:new F,direction:new F,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function ay(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ly=0;function cy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function uy(n){const e=new oy,t=ay(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new Mt,o=new Mt;function a(c){let u=0,f=0,h=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,T=0,C=0,b=0,A=0,R=0,L=0;c.sort(cy);for(let v=0,y=c.length;v<y;v++){const I=c[v],U=I.color,H=I.intensity,ne=I.distance;let ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Gr?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=U.r*H,f+=U.g*H,h+=U.b*H;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],H);L++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,re=t.get(I);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,i.directionalShadow[p]=re,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=I.shadow.matrix,T++}i.directional[p]=K,p++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(U).multiplyScalar(H),K.distance=ne,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[x]=K;const V=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,V.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[x]=V.matrix,I.castShadow){const re=t.get(I);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,i.spotShadow[x]=re,i.spotShadowMap[x]=ie,b++}x++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(U).multiplyScalar(H),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=K,m++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const V=I.shadow,re=t.get(I);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,re.shadowCameraNear=V.camera.near,re.shadowCameraFar=V.camera.far,i.pointShadow[_]=re,i.pointShadowMap[_]=ie,i.pointShadowMatrix[_]=I.shadow.matrix,C++}i.point[_]=K,_++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(H),K.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[d]=K,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const z=i.hash;(z.directionalLength!==p||z.pointLength!==_||z.spotLength!==x||z.rectAreaLength!==m||z.hemiLength!==d||z.numDirectionalShadows!==T||z.numPointShadows!==C||z.numSpotShadows!==b||z.numSpotMaps!==A||z.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=b+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,z.directionalLength=p,z.pointLength=_,z.spotLength=x,z.rectAreaLength=m,z.hemiLength=d,z.numDirectionalShadows=T,z.numPointShadows=C,z.numSpotShadows=b,z.numSpotMaps=A,z.numLightProbes=L,i.version=ly++)}function l(c,u){let f=0,h=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const C=c[d];if(C.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(C.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(C.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(C.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(C.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),h++}else if(C.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Jf(n){const e=new uy(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function fy(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Jf(n),e.set(r,[a])):s>=o.length?(a=new Jf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dy=`uniform sampler2D shadow_pass;
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
}`,py=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],my=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Qf=new Mt,as=new F,rl=new F;function gy(n,e,t){let i=new Wd;const r=new He,s=new He,o=new Tt,a=new P_,l=new D_,c={},u=t.maxTextureSize,f={[Ii]:sn,[sn]:Ii,[si]:si},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:hy,fragmentShader:dy}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new on;_.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Dn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let d=this.type;this.render=function(R,L,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===h0&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Mo);const v=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(li),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=d!==this.type;H&&L.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(ie=>ie.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,ie=R.length;ne<ie;ne++){const K=R[ne],V=K.shadow;if(V===void 0){We("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const re=V.getFrameExtents();if(r.multiply(re),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,V.mapSize.y=s.y)),V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===cs){if(K.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Gn(r.x,r.y,{format:Gr,type:di,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new Ps(r.x,r.y,zn),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=pi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ft,V.map.depthTexture.magFilter=Ft}else{K.isPointLight?(V.map=new Hd(r.x),V.map.depthTexture=new y_(r.x,Wn)):(V.map=new Gn(r.x,r.y),V.map.depthTexture=new Ps(r.x,r.y,Wn)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=pi;const _e=n.state.buffers.depth.getReversed();this.type===Mo?(V.map.depthTexture.compareFunction=_e?jc:Xc,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ft,V.map.depthTexture.magFilter=Ft)}V.camera.updateProjectionMatrix()}const ve=V.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<ve;_e++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,_e),n.clear();else{_e===0&&(n.setRenderTarget(V.map),n.clear());const ye=V.getViewport(_e);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),U.viewport(o)}if(K.isPointLight){const ye=V.camera,ke=V.matrix,je=K.distance||ye.far;je!==ye.far&&(ye.far=je,ye.updateProjectionMatrix()),as.setFromMatrixPosition(K.matrixWorld),ye.position.copy(as),rl.copy(ye.position),rl.add(py[_e]),ye.up.copy(my[_e]),ye.lookAt(rl),ye.updateMatrixWorld(),ke.makeTranslation(-as.x,-as.y,-as.z),Qf.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Qf,ye.coordinateSystem,ye.reversedDepth)}else V.updateMatrices(K);i=V.getFrustum(),b(L,z,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===cs&&T(V,z),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(v,y,I)};function T(R,L){const z=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Gn(r.x,r.y,{format:Gr,type:di})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,z,h,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,z,p,x,null)}function C(R,L,z,v){let y=null;const I=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)y=I;else if(y=z.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const U=y.uuid,H=L.uuid;let ne=c[U];ne===void 0&&(ne={},c[U]=ne);let ie=ne[H];ie===void 0&&(ie=y.clone(),ne[H]=ie,L.addEventListener("dispose",A)),y=ie}if(y.visible=L.visible,y.wireframe=L.wireframe,v===cs?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:f[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,z.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=z}return y}function b(R,L,z,v,y){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===cs)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const H=e.update(R),ne=R.material;if(Array.isArray(ne)){const ie=H.groups;for(let K=0,V=ie.length;K<V;K++){const re=ie[K],ve=ne[re.materialIndex];if(ve&&ve.visible){const _e=C(R,ve,v,y);R.onBeforeShadow(n,R,L,z,H,_e,re),n.renderBufferDirect(z,null,H,_e,R,re),R.onAfterShadow(n,R,L,z,H,_e,re)}}}else if(ne.visible){const ie=C(R,ne,v,y);R.onBeforeShadow(n,R,L,z,H,ie,null),n.renderBufferDirect(z,null,H,ie,R,null),R.onAfterShadow(n,R,L,z,H,ie,null)}}const U=R.children;for(let H=0,ne=U.length;H<ne;H++)b(U[H],L,z,v,y)}function A(R){R.target.removeEventListener("dispose",A);for(const z in c){const v=c[z],y=R.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const _y={[Ml]:yl,[bl]:Al,[El]:wl,[Vr]:Tl,[yl]:Ml,[Al]:bl,[wl]:El,[Tl]:Vr};function xy(n,e){function t(){let N=!1;const Re=new Tt;let ge=null;const Le=new Tt(0,0,0,0);return{setMask:function(de){ge!==de&&!N&&(n.colorMask(de,de,de,de),ge=de)},setLocked:function(de){N=de},setClear:function(de,ce,be,Ye,_t){_t===!0&&(de*=Ye,ce*=Ye,be*=Ye),Re.set(de,ce,be,Ye),Le.equals(Re)===!1&&(n.clearColor(de,ce,be,Ye),Le.copy(Re))},reset:function(){N=!1,ge=null,Le.set(-1,0,0,0)}}}function i(){let N=!1,Re=!1,ge=null,Le=null,de=null;return{setReversed:function(ce){if(Re!==ce){const be=e.get("EXT_clip_control");ce?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Re=ce;const Ye=de;de=null,this.setClear(Ye)}},getReversed:function(){return Re},setTest:function(ce){ce?q(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(ce){ge!==ce&&!N&&(n.depthMask(ce),ge=ce)},setFunc:function(ce){if(Re&&(ce=_y[ce]),Le!==ce){switch(ce){case Ml:n.depthFunc(n.NEVER);break;case yl:n.depthFunc(n.ALWAYS);break;case bl:n.depthFunc(n.LESS);break;case Vr:n.depthFunc(n.LEQUAL);break;case El:n.depthFunc(n.EQUAL);break;case Tl:n.depthFunc(n.GEQUAL);break;case Al:n.depthFunc(n.GREATER);break;case wl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=ce}},setLocked:function(ce){N=ce},setClear:function(ce){de!==ce&&(Re&&(ce=1-ce),n.clearDepth(ce),de=ce)},reset:function(){N=!1,ge=null,Le=null,de=null,Re=!1}}}function r(){let N=!1,Re=null,ge=null,Le=null,de=null,ce=null,be=null,Ye=null,_t=null;return{setTest:function(lt){N||(lt?q(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(lt){Re!==lt&&!N&&(n.stencilMask(lt),Re=lt)},setFunc:function(lt,Ln,jn){(ge!==lt||Le!==Ln||de!==jn)&&(n.stencilFunc(lt,Ln,jn),ge=lt,Le=Ln,de=jn)},setOp:function(lt,Ln,jn){(ce!==lt||be!==Ln||Ye!==jn)&&(n.stencilOp(lt,Ln,jn),ce=lt,be=Ln,Ye=jn)},setLocked:function(lt){N=lt},setClear:function(lt){_t!==lt&&(n.clearStencil(lt),_t=lt)},reset:function(){N=!1,Re=null,ge=null,Le=null,de=null,ce=null,be=null,Ye=null,_t=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,T=null,C=null,b=null,A=null,R=null,L=new it(0,0,0),z=0,v=!1,y=null,I=null,U=null,H=null,ne=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(re)[1]),K=V>=1):re.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),K=V>=2);let ve=null,_e={};const ye=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),je=new Tt().fromArray(ye),pt=new Tt().fromArray(ke);function Se(N,Re,ge,Le){const de=new Uint8Array(4),ce=n.createTexture();n.bindTexture(N,ce),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<ge;be++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Re+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ce}const O={};O[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),O[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),O[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(n.DEPTH_TEST),o.setFunc(Vr),j(!1),te(Ku),q(n.CULL_FACE),k(li);function q(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function J(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function pe(N,Re){return f[N]!==Re?(n.bindFramebuffer(N,Re),f[N]=Re,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Re),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function me(N,Re){let ge=p,Le=!1;if(N){ge=h.get(Re),ge===void 0&&(ge=[],h.set(Re,ge));const de=N.textures;if(ge.length!==de.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,be=de.length;ce<be;ce++)ge[ce]=n.COLOR_ATTACHMENT0+ce;ge.length=de.length,Le=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Le=!0);Le&&n.drawBuffers(ge)}function Ve(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const w={[Zi]:n.FUNC_ADD,[p0]:n.FUNC_SUBTRACT,[m0]:n.FUNC_REVERSE_SUBTRACT};w[g0]=n.MIN,w[_0]=n.MAX;const P={[x0]:n.ZERO,[v0]:n.ONE,[S0]:n.SRC_COLOR,[vl]:n.SRC_ALPHA,[A0]:n.SRC_ALPHA_SATURATE,[E0]:n.DST_COLOR,[y0]:n.DST_ALPHA,[M0]:n.ONE_MINUS_SRC_COLOR,[Sl]:n.ONE_MINUS_SRC_ALPHA,[T0]:n.ONE_MINUS_DST_COLOR,[b0]:n.ONE_MINUS_DST_ALPHA,[w0]:n.CONSTANT_COLOR,[C0]:n.ONE_MINUS_CONSTANT_COLOR,[R0]:n.CONSTANT_ALPHA,[P0]:n.ONE_MINUS_CONSTANT_ALPHA};function k(N,Re,ge,Le,de,ce,be,Ye,_t,lt){if(N===li){x===!0&&(J(n.BLEND),x=!1);return}if(x===!1&&(q(n.BLEND),x=!0),N!==d0){if(N!==m||lt!==v){if((d!==Zi||b!==Zi)&&(n.blendEquation(n.FUNC_ADD),d=Zi,b=Zi),lt)switch(N){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zu:n.blendFunc(n.ONE,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:nt("WebGLState: Invalid blending: ",N);break}else switch(N){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ju:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qu:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",N);break}T=null,C=null,A=null,R=null,L.set(0,0,0),z=0,m=N,v=lt}return}de=de||Re,ce=ce||ge,be=be||Le,(Re!==d||de!==b)&&(n.blendEquationSeparate(w[Re],w[de]),d=Re,b=de),(ge!==T||Le!==C||ce!==A||be!==R)&&(n.blendFuncSeparate(P[ge],P[Le],P[ce],P[be]),T=ge,C=Le,A=ce,R=be),(Ye.equals(L)===!1||_t!==z)&&(n.blendColor(Ye.r,Ye.g,Ye.b,_t),L.copy(Ye),z=_t),m=N,v=!1}function Q(N,Re){N.side===si?J(n.CULL_FACE):q(n.CULL_FACE);let ge=N.side===sn;Re&&(ge=!ge),j(ge),N.blending===Br&&N.transparent===!1?k(li):k(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Le=N.stencilWrite;a.setTest(Le),Le&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),le(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function te(N){N!==u0?(q(n.CULL_FACE),N!==I&&(N===Ku?n.cullFace(n.BACK):N===f0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),I=N}function E(N){N!==U&&(K&&n.lineWidth(N),U=N)}function le(N,Re,ge){N?(q(n.POLYGON_OFFSET_FILL),(H!==Re||ne!==ge)&&(n.polygonOffset(Re,ge),H=Re,ne=ge)):J(n.POLYGON_OFFSET_FILL)}function oe(N){N?q(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function se(N){N===void 0&&(N=n.TEXTURE0+ie-1),ve!==N&&(n.activeTexture(N),ve=N)}function ae(N,Re,ge){ge===void 0&&(ve===null?ge=n.TEXTURE0+ie-1:ge=ve);let Le=_e[ge];Le===void 0&&(Le={type:void 0,texture:void 0},_e[ge]=Le),(Le.type!==N||Le.texture!==Re)&&(ve!==ge&&(n.activeTexture(ge),ve=ge),n.bindTexture(N,Re||O[N]),Le.type=N,Le.texture=Re)}function S(){const N=_e[ve];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function X(){try{n.texSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function ee(){try{n.texSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function he(){try{n.texStorage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function Pe(){try{n.texStorage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function Fe(){try{n.texImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function ue(){try{n.texImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function Me(N){je.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),je.copy(N))}function Ee(N){pt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),pt.copy(N))}function De(N,Re){let ge=c.get(Re);ge===void 0&&(ge=new WeakMap,c.set(Re,ge));let Le=ge.get(N);Le===void 0&&(Le=n.getUniformBlockIndex(Re,N.name),ge.set(N,Le))}function xe(N,Re){const Le=c.get(Re).get(N);l.get(Re)!==Le&&(n.uniformBlockBinding(Re,Le,N.__bindingPointIndex),l.set(Re,Le))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ve=null,_e={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,T=null,C=null,b=null,A=null,R=null,L=new it(0,0,0),z=0,v=!1,y=null,I=null,U=null,H=null,ne=null,je.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:q,disable:J,bindFramebuffer:pe,drawBuffers:me,useProgram:Ve,setBlending:k,setMaterial:Q,setFlipSided:j,setCullFace:te,setLineWidth:E,setPolygonOffset:le,setScissorTest:oe,activeTexture:se,bindTexture:ae,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:Fe,texImage3D:ue,updateUBOMapping:De,uniformBlockBinding:xe,texStorage2D:he,texStorage3D:Pe,texSubImage2D:X,texSubImage3D:ee,compressedTexSubImage2D:W,compressedTexSubImage3D:we,scissor:Me,viewport:Ee,reset:$e}}function vy(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return p?new OffscreenCanvas(S,g):zo("canvas")}function x(S,g,D){let X=1;const ee=ae(S);if((ee.width>D||ee.height>D)&&(X=D/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const W=Math.floor(X*ee.width),we=Math.floor(X*ee.height);f===void 0&&(f=_(W,we));const he=g?_(W,we):f;return he.width=W,he.height=we,he.getContext("2d").drawImage(S,0,0,W,we),We("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+W+"x"+we+")."),he}else return"data"in S&&We("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),S;return S}function m(S){return S.generateMipmaps}function d(S){n.generateMipmap(S)}function T(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(S,g,D,X,ee=!1){if(S!==null){if(n[S]!==void 0)return n[S];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=g;if(g===n.RED&&(D===n.FLOAT&&(W=n.R32F),D===n.HALF_FLOAT&&(W=n.R16F),D===n.UNSIGNED_BYTE&&(W=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.R8UI),D===n.UNSIGNED_SHORT&&(W=n.R16UI),D===n.UNSIGNED_INT&&(W=n.R32UI),D===n.BYTE&&(W=n.R8I),D===n.SHORT&&(W=n.R16I),D===n.INT&&(W=n.R32I)),g===n.RG&&(D===n.FLOAT&&(W=n.RG32F),D===n.HALF_FLOAT&&(W=n.RG16F),D===n.UNSIGNED_BYTE&&(W=n.RG8)),g===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RG8UI),D===n.UNSIGNED_SHORT&&(W=n.RG16UI),D===n.UNSIGNED_INT&&(W=n.RG32UI),D===n.BYTE&&(W=n.RG8I),D===n.SHORT&&(W=n.RG16I),D===n.INT&&(W=n.RG32I)),g===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RGB8UI),D===n.UNSIGNED_SHORT&&(W=n.RGB16UI),D===n.UNSIGNED_INT&&(W=n.RGB32UI),D===n.BYTE&&(W=n.RGB8I),D===n.SHORT&&(W=n.RGB16I),D===n.INT&&(W=n.RGB32I)),g===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),D===n.UNSIGNED_INT&&(W=n.RGBA32UI),D===n.BYTE&&(W=n.RGBA8I),D===n.SHORT&&(W=n.RGBA16I),D===n.INT&&(W=n.RGBA32I)),g===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),g===n.RGBA){const we=ee?Oo:rt.getTransfer(X);D===n.FLOAT&&(W=n.RGBA32F),D===n.HALF_FLOAT&&(W=n.RGBA16F),D===n.UNSIGNED_BYTE&&(W=we===ut?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function b(S,g){let D;return S?g===null||g===Wn||g===Cs?D=n.DEPTH24_STENCIL8:g===zn?D=n.DEPTH32F_STENCIL8:g===ws&&(D=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Wn||g===Cs?D=n.DEPTH_COMPONENT24:g===zn?D=n.DEPTH_COMPONENT32F:g===ws&&(D=n.DEPTH_COMPONENT16),D}function A(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ft&&S.minFilter!==Nt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function R(S){const g=S.target;g.removeEventListener("dispose",R),z(g),g.isVideoTexture&&u.delete(g)}function L(S){const g=S.target;g.removeEventListener("dispose",L),y(g)}function z(S){const g=i.get(S);if(g.__webglInit===void 0)return;const D=S.source,X=h.get(D);if(X){const ee=X[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&v(S),Object.keys(X).length===0&&h.delete(D)}i.remove(S)}function v(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const D=S.source,X=h.get(D);delete X[g.__cacheKey],o.memory.textures--}function y(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let ee=0;ee<g.__webglFramebuffer[X].length;ee++)n.deleteFramebuffer(g.__webglFramebuffer[X][ee]);else n.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)n.deleteFramebuffer(g.__webglFramebuffer[X]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=S.textures;for(let X=0,ee=D.length;X<ee;X++){const W=i.get(D[X]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(D[X])}i.remove(S)}let I=0;function U(){I=0}function H(){const S=I;return S>=r.maxTextures&&We("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),I+=1,S}function ne(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function ie(S,g){const D=i.get(S);if(S.isVideoTexture&&oe(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&D.__version!==S.version){const X=S.image;if(X===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{O(D,S,g);return}}else S.isExternalTexture&&(D.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function K(S,g){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){O(D,S,g);return}else S.isExternalTexture&&(D.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function V(S,g){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){O(D,S,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function re(S,g){const D=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&D.__version!==S.version){q(D,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const ve={[Pl]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},_e={[Ft]:n.NEAREST,[I0]:n.NEAREST_MIPMAP_NEAREST,[Hs]:n.NEAREST_MIPMAP_LINEAR,[Nt]:n.LINEAR,[Aa]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},ye={[O0]:n.NEVER,[H0]:n.ALWAYS,[B0]:n.LESS,[Xc]:n.LEQUAL,[z0]:n.EQUAL,[jc]:n.GEQUAL,[k0]:n.GREATER,[V0]:n.NOTEQUAL};function ke(S,g){if(g.type===zn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Nt||g.magFilter===Aa||g.magFilter===Hs||g.magFilter===Qi||g.minFilter===Nt||g.minFilter===Aa||g.minFilter===Hs||g.minFilter===Qi)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ve[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ve[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ve[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,_e[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,_e[g.minFilter]),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ye[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ft||g.minFilter!==Hs&&g.minFilter!==Qi||g.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function je(S,g){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",R));const X=g.source;let ee=h.get(X);ee===void 0&&(ee={},h.set(X,ee));const W=ne(g);if(W!==S.__cacheKey){ee[W]===void 0&&(ee[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),ee[W].usedTimes++;const we=ee[S.__cacheKey];we!==void 0&&(ee[S.__cacheKey].usedTimes--,we.usedTimes===0&&v(g)),S.__cacheKey=W,S.__webglTexture=ee[W].texture}return D}function pt(S,g,D){return Math.floor(Math.floor(S/D)/g)}function Se(S,g,D,X){const W=S.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,D,X,g.data);else{W.sort((ue,Me)=>ue.start-Me.start);let we=0;for(let ue=1;ue<W.length;ue++){const Me=W[we],Ee=W[ue],De=Me.start+Me.count,xe=pt(Ee.start,g.width,4),$e=pt(Me.start,g.width,4);Ee.start<=De+1&&xe===$e&&pt(Ee.start+Ee.count-1,g.width,4)===xe?Me.count=Math.max(Me.count,Ee.start+Ee.count-Me.start):(++we,W[we]=Ee)}W.length=we+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Pe=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ue=0,Me=W.length;ue<Me;ue++){const Ee=W[ue],De=Math.floor(Ee.start/4),xe=Math.ceil(Ee.count/4),$e=De%g.width,N=Math.floor(De/g.width),Re=xe,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,$e,N,Re,ge,D,X,g.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function O(S,g,D){let X=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=n.TEXTURE_3D);const ee=je(S,g),W=g.source;t.bindTexture(X,S.__webglTexture,n.TEXTURE0+D);const we=i.get(W);if(W.version!==we.__version||ee===!0){t.activeTexture(n.TEXTURE0+D);const he=rt.getPrimaries(rt.workingColorSpace),Pe=g.colorSpace===wi?null:rt.getPrimaries(g.colorSpace),Fe=g.colorSpace===wi||he===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ue=x(g.image,!1,r.maxTextureSize);ue=se(g,ue);const Me=s.convert(g.format,g.colorSpace),Ee=s.convert(g.type);let De=C(g.internalFormat,Me,Ee,g.colorSpace,g.isVideoTexture);ke(X,g);let xe;const $e=g.mipmaps,N=g.isVideoTexture!==!0,Re=we.__version===void 0||ee===!0,ge=W.dataReady,Le=A(g,ue);if(g.isDepthTexture)De=b(g.format===er,g.type),Re&&(N?t.texStorage2D(n.TEXTURE_2D,1,De,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,De,ue.width,ue.height,0,Me,Ee,null));else if(g.isDataTexture)if($e.length>0){N&&Re&&t.texStorage2D(n.TEXTURE_2D,Le,De,$e[0].width,$e[0].height);for(let de=0,ce=$e.length;de<ce;de++)xe=$e[de],N?ge&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,xe.width,xe.height,Me,Ee,xe.data):t.texImage2D(n.TEXTURE_2D,de,De,xe.width,xe.height,0,Me,Ee,xe.data);g.generateMipmaps=!1}else N?(Re&&t.texStorage2D(n.TEXTURE_2D,Le,De,ue.width,ue.height),ge&&Se(g,ue,Me,Ee)):t.texImage2D(n.TEXTURE_2D,0,De,ue.width,ue.height,0,Me,Ee,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){N&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,De,$e[0].width,$e[0].height,ue.depth);for(let de=0,ce=$e.length;de<ce;de++)if(xe=$e[de],g.format!==An)if(Me!==null)if(N){if(ge)if(g.layerUpdates.size>0){const be=Pf(xe.width,xe.height,g.format,g.type);for(const Ye of g.layerUpdates){const _t=xe.data.subarray(Ye*be/xe.data.BYTES_PER_ELEMENT,(Ye+1)*be/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,Ye,xe.width,xe.height,1,Me,_t)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,xe.width,xe.height,ue.depth,Me,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,De,xe.width,xe.height,ue.depth,0,xe.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,xe.width,xe.height,ue.depth,Me,Ee,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,De,xe.width,xe.height,ue.depth,0,Me,Ee,xe.data)}else{N&&Re&&t.texStorage2D(n.TEXTURE_2D,Le,De,$e[0].width,$e[0].height);for(let de=0,ce=$e.length;de<ce;de++)xe=$e[de],g.format!==An?Me!==null?N?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,xe.width,xe.height,Me,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,de,De,xe.width,xe.height,0,xe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ge&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,xe.width,xe.height,Me,Ee,xe.data):t.texImage2D(n.TEXTURE_2D,de,De,xe.width,xe.height,0,Me,Ee,xe.data)}else if(g.isDataArrayTexture)if(N){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,De,ue.width,ue.height,ue.depth),ge)if(g.layerUpdates.size>0){const de=Pf(ue.width,ue.height,g.format,g.type);for(const ce of g.layerUpdates){const be=ue.data.subarray(ce*de/ue.data.BYTES_PER_ELEMENT,(ce+1)*de/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,ue.width,ue.height,1,Me,Ee,be)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,Ee,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ue.width,ue.height,ue.depth,0,Me,Ee,ue.data);else if(g.isData3DTexture)N?(Re&&t.texStorage3D(n.TEXTURE_3D,Le,De,ue.width,ue.height,ue.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,Ee,ue.data)):t.texImage3D(n.TEXTURE_3D,0,De,ue.width,ue.height,ue.depth,0,Me,Ee,ue.data);else if(g.isFramebufferTexture){if(Re)if(N)t.texStorage2D(n.TEXTURE_2D,Le,De,ue.width,ue.height);else{let de=ue.width,ce=ue.height;for(let be=0;be<Le;be++)t.texImage2D(n.TEXTURE_2D,be,De,de,ce,0,Me,Ee,null),de>>=1,ce>>=1}}else if($e.length>0){if(N&&Re){const de=ae($e[0]);t.texStorage2D(n.TEXTURE_2D,Le,De,de.width,de.height)}for(let de=0,ce=$e.length;de<ce;de++)xe=$e[de],N?ge&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Me,Ee,xe):t.texImage2D(n.TEXTURE_2D,de,De,Me,Ee,xe);g.generateMipmaps=!1}else if(N){if(Re){const de=ae(ue);t.texStorage2D(n.TEXTURE_2D,Le,De,de.width,de.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ee,ue)}else t.texImage2D(n.TEXTURE_2D,0,De,Me,Ee,ue);m(g)&&d(X),we.__version=W.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function q(S,g,D){if(g.image.length!==6)return;const X=je(S,g),ee=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+D);const W=i.get(ee);if(ee.version!==W.__version||X===!0){t.activeTexture(n.TEXTURE0+D);const we=rt.getPrimaries(rt.workingColorSpace),he=g.colorSpace===wi?null:rt.getPrimaries(g.colorSpace),Pe=g.colorSpace===wi||we===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Fe=g.isCompressedTexture||g.image[0].isCompressedTexture,ue=g.image[0]&&g.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!Fe&&!ue?Me[ce]=x(g.image[ce],!0,r.maxCubemapSize):Me[ce]=ue?g.image[ce].image:g.image[ce],Me[ce]=se(g,Me[ce]);const Ee=Me[0],De=s.convert(g.format,g.colorSpace),xe=s.convert(g.type),$e=C(g.internalFormat,De,xe,g.colorSpace),N=g.isVideoTexture!==!0,Re=W.__version===void 0||X===!0,ge=ee.dataReady;let Le=A(g,Ee);ke(n.TEXTURE_CUBE_MAP,g);let de;if(Fe){N&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,$e,Ee.width,Ee.height);for(let ce=0;ce<6;ce++){de=Me[ce].mipmaps;for(let be=0;be<de.length;be++){const Ye=de[be];g.format!==An?De!==null?N?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,0,0,Ye.width,Ye.height,De,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,$e,Ye.width,Ye.height,0,Ye.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,0,0,Ye.width,Ye.height,De,xe,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be,$e,Ye.width,Ye.height,0,De,xe,Ye.data)}}}else{if(de=g.mipmaps,N&&Re){de.length>0&&Le++;const ce=ae(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,$e,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ue){N?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,De,xe,Me[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,$e,Me[ce].width,Me[ce].height,0,De,xe,Me[ce].data);for(let be=0;be<de.length;be++){const _t=de[be].image[ce].image;N?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,0,0,_t.width,_t.height,De,xe,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,$e,_t.width,_t.height,0,De,xe,_t.data)}}else{N?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,De,xe,Me[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,$e,De,xe,Me[ce]);for(let be=0;be<de.length;be++){const Ye=de[be];N?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,0,0,De,xe,Ye.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be+1,$e,De,xe,Ye.image[ce])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),W.__version=ee.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function J(S,g,D,X,ee,W){const we=s.convert(D.format,D.colorSpace),he=s.convert(D.type),Pe=C(D.internalFormat,we,he,D.colorSpace),Fe=i.get(g),ue=i.get(D);if(ue.__renderTarget=g,!Fe.__hasExternalTextures){const Me=Math.max(1,g.width>>W),Ee=Math.max(1,g.height>>W);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,W,Pe,Me,Ee,g.depth,0,we,he,null):t.texImage2D(ee,W,Pe,Me,Ee,0,we,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),le(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ee,ue.__webglTexture,0,E(g)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,ee,ue.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(S,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer){const X=g.depthTexture,ee=X&&X.isDepthTexture?X.type:null,W=b(g.stencilBuffer,ee),we=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;le(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,E(g),W,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,E(g),W,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,W,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,S)}else{const X=g.textures;for(let ee=0;ee<X.length;ee++){const W=X[ee],we=s.convert(W.format,W.colorSpace),he=s.convert(W.type),Pe=C(W.internalFormat,we,he,W.colorSpace);le(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,E(g),Pe,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,E(g),Pe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(S,g,D){const X=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(g.depthTexture);if(ee.__renderTarget=g,(!ee.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ke(n.TEXTURE_CUBE_MAP,g.depthTexture);const Fe=s.convert(g.depthTexture.format),ue=s.convert(g.depthTexture.type);let Me;g.depthTexture.format===pi?Me=n.DEPTH_COMPONENT24:g.depthTexture.format===er&&(Me=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Me,g.width,g.height,0,Fe,ue,null)}}else ie(g.depthTexture,0);const W=ee.__webglTexture,we=E(g),he=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Pe=g.depthTexture.format===er?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===pi)le(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,he,W,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,he,W,0);else if(g.depthTexture.format===er)le(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,he,W,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,he,W,0);else throw new Error("Unknown depthTexture format")}function Ve(S){const g=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const X=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const ee=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),g.__depthDisposeCallback=ee}g.__boundDepthTexture=X}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(D)for(let X=0;X<6;X++)me(g.__webglFramebuffer[X],S,X);else{const X=S.texture.mipmaps;X&&X.length>0?me(g.__webglFramebuffer[0],S,0):me(g.__webglFramebuffer,S,0)}else if(D){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=n.createRenderbuffer(),pe(g.__webglDepthbuffer[X],S,!1);else{const ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,W)}}else{const X=S.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),pe(g.__webglDepthbuffer,S,!1);else{const ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(S,g,D){const X=i.get(S);g!==void 0&&J(X.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Ve(S)}function P(S){const g=S.texture,D=i.get(S),X=i.get(g);S.addEventListener("dispose",L);const ee=S.textures,W=S.isWebGLCubeRenderTarget===!0,we=ee.length>1;if(we||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=g.version,o.memory.textures++),W){D.__webglFramebuffer=[];for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[he]=[];for(let Pe=0;Pe<g.mipmaps.length;Pe++)D.__webglFramebuffer[he][Pe]=n.createFramebuffer()}else D.__webglFramebuffer[he]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let he=0;he<g.mipmaps.length;he++)D.__webglFramebuffer[he]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(we)for(let he=0,Pe=ee.length;he<Pe;he++){const Fe=i.get(ee[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&le(S)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){const Pe=ee[he];D.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[he]);const Fe=s.convert(Pe.format,Pe.colorSpace),ue=s.convert(Pe.type),Me=C(Pe.internalFormat,Fe,ue,Pe.colorSpace,S.isXRRenderTarget===!0),Ee=E(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Me,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,D.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(D.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ke(n.TEXTURE_CUBE_MAP,g);for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0)for(let Pe=0;Pe<g.mipmaps.length;Pe++)J(D.__webglFramebuffer[he][Pe],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe);else J(D.__webglFramebuffer[he],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let he=0,Pe=ee.length;he<Pe;he++){const Fe=ee[he],ue=i.get(Fe);let Me=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Me=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ue.__webglTexture),ke(Me,Fe),J(D.__webglFramebuffer,S,Fe,n.COLOR_ATTACHMENT0+he,Me,0),m(Fe)&&d(Me)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(he=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,X.__webglTexture),ke(he,g),g.mipmaps&&g.mipmaps.length>0)for(let Pe=0;Pe<g.mipmaps.length;Pe++)J(D.__webglFramebuffer[Pe],S,g,n.COLOR_ATTACHMENT0,he,Pe);else J(D.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,he,0);m(g)&&d(he),t.unbindTexture()}S.depthBuffer&&Ve(S)}function k(S){const g=S.textures;for(let D=0,X=g.length;D<X;D++){const ee=g[D];if(m(ee)){const W=T(S),we=i.get(ee).__webglTexture;t.bindTexture(W,we),d(W),t.unbindTexture()}}}const Q=[],j=[];function te(S){if(S.samples>0){if(le(S)===!1){const g=S.textures,D=S.width,X=S.height;let ee=n.COLOR_BUFFER_BIT;const W=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(S),he=g.length>1;if(he)for(let Fe=0;Fe<g.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Pe=S.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Fe=0;Fe<g.length;Fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Fe]);const ue=i.get(g[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,D,X,0,0,D,X,ee,n.NEAREST),l===!0&&(Q.length=0,j.length=0,Q.push(n.COLOR_ATTACHMENT0+Fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Q.push(W),j.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Fe=0;Fe<g.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,we.__webglColorRenderbuffer[Fe]);const ue=i.get(g[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function E(S){return Math.min(r.maxSamples,S.samples)}function le(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function oe(S){const g=o.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function se(S,g){const D=S.colorSpace,X=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==Wr&&D!==wi&&(rt.getTransfer(D)===ut?(X!==An||ee!==_n)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",D)),g}function ae(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=ie,this.setTexture2DArray=K,this.setTexture3D=V,this.setTextureCube=re,this.rebindTextures=w,this.setupRenderTarget=P,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=J,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Sy(n,e){function t(i,r=wi){let s;const o=rt.getTransfer(r);if(i===_n)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wd)return n.BYTE;if(i===Cd)return n.SHORT;if(i===ws)return n.UNSIGNED_SHORT;if(i===zc)return n.INT;if(i===Wn)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===Dd)return n.ALPHA;if(i===Ld)return n.RGB;if(i===An)return n.RGBA;if(i===pi)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===Id)return n.RED;if(i===Hc)return n.RED_INTEGER;if(i===Gr)return n.RG;if(i===Gc)return n.RG_INTEGER;if(i===Wc)return n.RGBA_INTEGER;if(i===yo||i===bo||i===Eo||i===To)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===To)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Il||i===Ul||i===Nl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Il)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ul)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Vl||i===Hl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fl||i===Ol)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===zl)return s.COMPRESSED_R11_EAC;if(i===kl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Vl)return s.COMPRESSED_RG11_EAC;if(i===Hl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gl||i===Wl||i===Xl||i===jl||i===Yl||i===ql||i===$l||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ql)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ql)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===rc||i===sc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ic)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===ac||i===lc||i===cc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===oc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ac)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const My=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yy=`
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

}`;class by{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new jd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xn({vertexShader:My,fragmentShader:yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ey extends ar{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new by,d={},T=t.getContextAttributes();let C=null,b=null;const A=[],R=[],L=new He;let z=null;const v=new Tn;v.viewport=new Tt;const y=new Tn;y.viewport=new Tt;const I=[v,y],U=new L_;let H=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let q=A[O];return q===void 0&&(q=new qa,A[O]=q),q.getTargetRaySpace()},this.getControllerGrip=function(O){let q=A[O];return q===void 0&&(q=new qa,A[O]=q),q.getGripSpace()},this.getHand=function(O){let q=A[O];return q===void 0&&(q=new qa,A[O]=q),q.getHandSpace()};function ie(O){const q=R.indexOf(O.inputSource);if(q===-1)return;const J=A[q];J!==void 0&&(J.update(O.inputSource,O.frame,c||o),J.dispatchEvent({type:O.type,data:O.inputSource}))}function K(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",V);for(let O=0;O<A.length;O++){const q=R[O];q!==null&&(R[O]=null,A[O].disconnect(q))}H=null,ne=null,m.reset();for(const O in d)delete d[O];e.setRenderTarget(C),p=null,h=null,f=null,r=null,b=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",K),r.addEventListener("inputsourceschange",V),T.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,pe=null,me=null;T.depth&&(me=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=T.stencil?er:pi,pe=T.stencil?Cs:Wn);const Ve={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Gn(h.textureWidth,h.textureHeight,{format:An,type:_n,depthTexture:new Ps(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const J={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Gn(p.framebufferWidth,p.framebufferHeight,{format:An,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Se.setContext(r),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(O){for(let q=0;q<O.removed.length;q++){const J=O.removed[q],pe=R.indexOf(J);pe>=0&&(R[pe]=null,A[pe].disconnect(J))}for(let q=0;q<O.added.length;q++){const J=O.added[q];let pe=R.indexOf(J);if(pe===-1){for(let Ve=0;Ve<A.length;Ve++)if(Ve>=R.length){R.push(J),pe=Ve;break}else if(R[Ve]===null){R[Ve]=J,pe=Ve;break}if(pe===-1)break}const me=A[pe];me&&me.connect(J)}}const re=new F,ve=new F;function _e(O,q,J){re.setFromMatrixPosition(q.matrixWorld),ve.setFromMatrixPosition(J.matrixWorld);const pe=re.distanceTo(ve),me=q.projectionMatrix.elements,Ve=J.projectionMatrix.elements,w=me[14]/(me[10]-1),P=me[14]/(me[10]+1),k=(me[9]+1)/me[5],Q=(me[9]-1)/me[5],j=(me[8]-1)/me[0],te=(Ve[8]+1)/Ve[0],E=w*j,le=w*te,oe=pe/(-j+te),se=oe*-j;if(q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(se),O.translateZ(oe),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),me[10]===-1)O.projectionMatrix.copy(q.projectionMatrix),O.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const ae=w+oe,S=P+oe,g=E-se,D=le+(pe-se),X=k*P/S*ae,ee=Q*P/S*ae;O.projectionMatrix.makePerspective(g,D,X,ee,ae,S),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function ye(O,q){q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let q=O.near,J=O.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(J=m.depthFar)),U.near=y.near=v.near=q,U.far=y.far=v.far=J,(H!==U.near||ne!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,ne=U.far),U.layers.mask=O.layers.mask|6,v.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;const pe=O.parent,me=U.cameras;ye(U,pe);for(let Ve=0;Ve<me.length;Ve++)ye(me[Ve],pe);me.length===2?_e(U,v,y):U.projectionMatrix.copy(v.projectionMatrix),ke(O,U,pe)};function ke(O,q,J){J===null?O.matrix.copy(q.matrixWorld):(O.matrix.copy(J.matrixWorld),O.matrix.invert(),O.matrix.multiply(q.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(q.projectionMatrix),O.projectionMatrixInverse.copy(q.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=fc*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(O){return d[O]};let je=null;function pt(O,q){if(u=q.getViewerPose(c||o),_=q,u!==null){const J=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let pe=!1;J.length!==U.cameras.length&&(U.cameras.length=0,pe=!0);for(let P=0;P<J.length;P++){const k=J[P];let Q=null;if(p!==null)Q=p.getViewport(k);else{const te=f.getViewSubImage(h,k);Q=te.viewport,P===0&&(e.setRenderTargetTextures(b,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(b))}let j=I[P];j===void 0&&(j=new Tn,j.layers.enable(P),j.viewport=new Tt,I[P]=j),j.matrix.fromArray(k.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(k.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(U.matrix.copy(j.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),pe===!0&&U.cameras.push(j)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const P=f.getDepthInformation(J[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<J.length;P++){const k=J[P].camera;if(k){let Q=d[k];Q||(Q=new jd,d[k]=Q);const j=f.getCameraImage(k);Q.sourceTexture=j}}}}for(let J=0;J<A.length;J++){const pe=R[J],me=A[J];pe!==null&&me!==void 0&&me.update(pe,q,c||o)}je&&je(O,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const Se=new Yd;Se.setAnimationLoop(pt),this.setAnimationLoop=function(O){je=O},this.dispose=function(){}}}const Yi=new mi,Ty=new Mt;function Ay(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,zd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,C,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,C):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),C=T.envMap,b=T.envMapRotation;C&&(m.envMap.value=C,Yi.copy(b),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ty.makeRotationFromEuler(Yi)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,C){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=C*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wy(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,C){const b=C.program;i.uniformBlockBinding(T,b)}function c(T,C){let b=r[T.id];b===void 0&&(_(T),b=u(T),r[T.id]=b,T.addEventListener("dispose",m));const A=C.program;i.updateUBOMapping(T,A);const R=e.render.frame;s[T.id]!==R&&(h(T),s[T.id]=R)}function u(T){const C=f();T.__bindingPointIndex=C;const b=n.createBuffer(),A=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,b),b}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const C=r[T.id],b=T.uniforms,A=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let R=0,L=b.length;R<L;R++){const z=Array.isArray(b[R])?b[R]:[b[R]];for(let v=0,y=z.length;v<y;v++){const I=z[v];if(p(I,R,v,A)===!0){const U=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let ne=0;for(let ie=0;ie<H.length;ie++){const K=H[ie],V=x(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,U+ne,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,ne),ne+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,C,b,A){const R=T.value,L=C+"_"+b;if(A[L]===void 0)return typeof R=="number"||typeof R=="boolean"?A[L]=R:A[L]=R.clone(),!0;{const z=A[L];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return A[L]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function _(T){const C=T.uniforms;let b=0;const A=16;for(let L=0,z=C.length;L<z;L++){const v=Array.isArray(C[L])?C[L]:[C[L]];for(let y=0,I=v.length;y<I;y++){const U=v[y],H=Array.isArray(U.value)?U.value:[U.value];for(let ne=0,ie=H.length;ne<ie;ne++){const K=H[ne],V=x(K),re=b%A,ve=re%V.boundary,_e=re+ve;b+=ve,_e!==0&&A-_e<V.storage&&(b+=A-_e),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=V.storage}}}const R=b%A;return R>0&&(b+=A-R),T.__size=b,T.__cache={},this}function x(T){const C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):We("WebGLRenderer: Unsupported uniform value type.",T),C}function m(T){const C=T.target;C.removeEventListener("dispose",m);const b=o.indexOf(C.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const Cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function Ry(){return Un===null&&(Un=new x_(Cy,16,16,Gr,di),Un.name="DFG_LUT",Un.minFilter=Nt,Un.magFilter=Nt,Un.wrapS=oi,Un.wrapT=oi,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class Py{constructor(e={}){const{canvas:t=G0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=_n}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=p,m=new Set([Wc,Gc,Hc]),d=new Set([_n,Wn,ws,Cs,kc,Vc]),T=new Uint32Array(4),C=new Int32Array(4);let b=null,A=null;const R=[],L=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let y=!1;this._outputColorSpace=gn;let I=0,U=0,H=null,ne=-1,ie=null;const K=new Tt,V=new Tt;let re=null;const ve=new it(0);let _e=0,ye=t.width,ke=t.height,je=1,pt=null,Se=null;const O=new Tt(0,0,ye,ke),q=new Tt(0,0,ye,ke);let J=!1;const pe=new Wd;let me=!1,Ve=!1;const w=new Mt,P=new F,k=new Tt,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function te(){return H===null?je:1}let E=i;function le(M,B){return t.getContext(M,B)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",lt,!1),E===null){const B="webgl2";if(E=le(B,M),E===null)throw le(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw nt("WebGLRenderer: "+M.message),M}let oe,se,ae,S,g,D,X,ee,W,we,he,Pe,Fe,ue,Me,Ee,De,xe,$e,N,Re,ge,Le,de;function ce(){oe=new RS(E),oe.init(),ge=new Sy(E,oe),se=new SS(E,oe,e,ge),ae=new xy(E,oe),se.reversedDepthBuffer&&h&&ae.buffers.depth.setReversed(!0),S=new LS(E),g=new iy,D=new vy(E,oe,ae,g,se,ge,S),X=new yS(v),ee=new CS(v),W=new F_(E),Le=new xS(E,W),we=new PS(E,W,S,Le),he=new US(E,we,W,S),$e=new IS(E,se,D),Ee=new MS(g),Pe=new ny(v,X,ee,oe,se,Le,Ee),Fe=new Ay(v,g),ue=new sy,Me=new fy(oe),xe=new _S(v,X,ee,ae,he,_,l),De=new gy(v,he,se),de=new wy(E,S,se,ae),N=new vS(E,oe,S),Re=new DS(E,oe,S),S.programs=Pe.programs,v.capabilities=se,v.extensions=oe,v.properties=g,v.renderLists=ue,v.shadowMap=De,v.state=ae,v.info=S}ce(),x!==_n&&(z=new FS(x,t.width,t.height,r,s));const be=new Ey(v,E);this.xr=be,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const M=oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return je},this.setPixelRatio=function(M){M!==void 0&&(je=M,this.setSize(ye,ke,!1))},this.getSize=function(M){return M.set(ye,ke)},this.setSize=function(M,B,Z=!0){if(be.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=M,ke=B,t.width=Math.floor(M*je),t.height=Math.floor(B*je),Z===!0&&(t.style.width=M+"px",t.style.height=B+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(ye*je,ke*je).floor()},this.setDrawingBufferSize=function(M,B,Z){ye=M,ke=B,je=Z,t.width=Math.floor(M*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(x===_n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K)},this.getViewport=function(M){return M.copy(O)},this.setViewport=function(M,B,Z,$){M.isVector4?O.set(M.x,M.y,M.z,M.w):O.set(M,B,Z,$),ae.viewport(K.copy(O).multiplyScalar(je).round())},this.getScissor=function(M){return M.copy(q)},this.setScissor=function(M,B,Z,$){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,B,Z,$),ae.scissor(V.copy(q).multiplyScalar(je).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(M){ae.setScissorTest(J=M)},this.setOpaqueSort=function(M){pt=M},this.setTransparentSort=function(M){Se=M},this.getClearColor=function(M){return M.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,Z=!0){let $=0;if(M){let G=!1;if(H!==null){const Te=H.texture.format;G=m.has(Te)}if(G){const Te=H.texture.type,Ie=d.has(Te),Ce=xe.getClearColor(),Ne=xe.getClearAlpha(),Oe=Ce.r,Ge=Ce.g,Be=Ce.b;Ie?(T[0]=Oe,T[1]=Ge,T[2]=Be,T[3]=Ne,E.clearBufferuiv(E.COLOR,0,T)):(C[0]=Oe,C[1]=Ge,C[2]=Be,C[3]=Ne,E.clearBufferiv(E.COLOR,0,C))}else $|=E.COLOR_BUFFER_BIT}B&&($|=E.DEPTH_BUFFER_BIT),Z&&($|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),xe.dispose(),ue.dispose(),Me.dispose(),g.dispose(),X.dispose(),ee.dispose(),he.dispose(),Le.dispose(),de.dispose(),Pe.dispose(),be.dispose(),be.removeEventListener("sessionstart",eu),be.removeEventListener("sessionend",tu),Fi.stop()};function Ye(M){M.preventDefault(),ko("WebGLRenderer: Context Lost."),y=!0}function _t(){ko("WebGLRenderer: Context Restored."),y=!1;const M=S.autoReset,B=De.enabled,Z=De.autoUpdate,$=De.needsUpdate,G=De.type;ce(),S.autoReset=M,De.enabled=B,De.autoUpdate=Z,De.needsUpdate=$,De.type=G}function lt(M){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ln(M){const B=M.target;B.removeEventListener("dispose",Ln),jn(B)}function jn(M){tp(M),g.remove(M)}function tp(M){const B=g.get(M).programs;B!==void 0&&(B.forEach(function(Z){Pe.releaseProgram(Z)}),M.isShaderMaterial&&Pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,Z,$,G,Te){B===null&&(B=Q);const Ie=G.isMesh&&G.matrixWorld.determinant()<0,Ce=ip(M,B,Z,$,G);ae.setMaterial($,Ie);let Ne=Z.index,Oe=1;if($.wireframe===!0){if(Ne=we.getWireframeAttribute(Z),Ne===void 0)return;Oe=2}const Ge=Z.drawRange,Be=Z.attributes.position;let et=Ge.start*Oe,ft=(Ge.start+Ge.count)*Oe;Te!==null&&(et=Math.max(et,Te.start*Oe),ft=Math.min(ft,(Te.start+Te.count)*Oe)),Ne!==null?(et=Math.max(et,0),ft=Math.min(ft,Ne.count)):Be!=null&&(et=Math.max(et,0),ft=Math.min(ft,Be.count));const yt=ft-et;if(yt<0||yt===1/0)return;Le.setup(G,$,Ce,Z,Ne);let bt,mt=N;if(Ne!==null&&(bt=W.get(Ne),mt=Re,mt.setIndex(bt)),G.isMesh)$.wireframe===!0?(ae.setLineWidth($.wireframeLinewidth*te()),mt.setMode(E.LINES)):mt.setMode(E.TRIANGLES);else if(G.isLine){let ze=$.linewidth;ze===void 0&&(ze=1),ae.setLineWidth(ze*te()),G.isLineSegments?mt.setMode(E.LINES):G.isLineLoop?mt.setMode(E.LINE_LOOP):mt.setMode(E.LINE_STRIP)}else G.isPoints?mt.setMode(E.POINTS):G.isSprite&&mt.setMode(E.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Rs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ze=G._multiDrawStarts,ct=G._multiDrawCounts,st=G._multiDrawCount,an=Ne?W.get(Ne).bytesPerElement:1,lr=g.get($).currentProgram.getUniforms();for(let ln=0;ln<st;ln++)lr.setValue(E,"_gl_DrawID",ln),mt.render(ze[ln]/an,ct[ln])}else if(G.isInstancedMesh)mt.renderInstances(et,yt,G.count);else if(Z.isInstancedBufferGeometry){const ze=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ct=Math.min(Z.instanceCount,ze);mt.renderInstances(et,yt,ct)}else mt.render(et,yt)};function Qc(M,B,Z){M.transparent===!0&&M.side===si&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,Fs(M,B,Z),M.side=Ii,M.needsUpdate=!0,Fs(M,B,Z),M.side=si):Fs(M,B,Z)}this.compile=function(M,B,Z=null){Z===null&&(Z=M),A=Me.get(Z),A.init(B),L.push(A),Z.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),M!==Z&&M.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const $=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Te=G.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const Ce=Te[Ie];Qc(Ce,Z,G),$.add(Ce)}else Qc(Te,Z,G),$.add(Te)}),A=L.pop(),$},this.compileAsync=function(M,B,Z=null){const $=this.compile(M,B,Z);return new Promise(G=>{function Te(){if($.forEach(function(Ie){g.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){G(M);return}setTimeout(Te,10)}oe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ua=null;function np(M){ua&&ua(M)}function eu(){Fi.stop()}function tu(){Fi.start()}const Fi=new Yd;Fi.setAnimationLoop(np),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(M){ua=M,be.setAnimationLoop(M),M===null?Fi.stop():Fi.start()},be.addEventListener("sessionstart",eu),be.addEventListener("sessionend",tu),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const Z=be.enabled===!0&&be.isPresenting===!0,$=z!==null&&(H===null||Z)&&z.begin(v,H);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(B),B=be.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,B,H),A=Me.get(M,L.length),A.init(B),L.push(A),w.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),pe.setFromProjectionMatrix(w,kn,B.reversedDepth),Ve=this.localClippingEnabled,me=Ee.init(this.clippingPlanes,Ve),b=ue.get(M,R.length),b.init(),R.push(b),be.enabled===!0&&be.isPresenting===!0){const Ie=v.xr.getDepthSensingMesh();Ie!==null&&fa(Ie,B,-1/0,v.sortObjects)}fa(M,B,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(pt,Se),j=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,j&&xe.addToRenderList(b,M),this.info.render.frame++,me===!0&&Ee.beginShadows();const G=A.state.shadowsArray;if(De.render(G,M,B),me===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&z.hasRenderPass())===!1){const Ie=b.opaque,Ce=b.transmissive;if(A.setupLights(),B.isArrayCamera){const Ne=B.cameras;if(Ce.length>0)for(let Oe=0,Ge=Ne.length;Oe<Ge;Oe++){const Be=Ne[Oe];iu(Ie,Ce,M,Be)}j&&xe.render(M);for(let Oe=0,Ge=Ne.length;Oe<Ge;Oe++){const Be=Ne[Oe];nu(b,M,Be,Be.viewport)}}else Ce.length>0&&iu(Ie,Ce,M,B),j&&xe.render(M),nu(b,M,B)}H!==null&&U===0&&(D.updateMultisampleRenderTarget(H),D.updateRenderTargetMipmap(H)),$&&z.end(v),M.isScene===!0&&M.onAfterRender(v,M,B),Le.resetDefaultState(),ne=-1,ie=null,L.pop(),L.length>0?(A=L[L.length-1],me===!0&&Ee.setGlobalState(v.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?b=R[R.length-1]:b=null};function fa(M,B,Z,$){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||pe.intersectsSprite(M)){$&&k.setFromMatrixPosition(M.matrixWorld).applyMatrix4(w);const Ie=he.update(M),Ce=M.material;Ce.visible&&b.push(M,Ie,Ce,Z,k.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||pe.intersectsObject(M))){const Ie=he.update(M),Ce=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),k.copy(M.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),k.copy(Ie.boundingSphere.center)),k.applyMatrix4(M.matrixWorld).applyMatrix4(w)),Array.isArray(Ce)){const Ne=Ie.groups;for(let Oe=0,Ge=Ne.length;Oe<Ge;Oe++){const Be=Ne[Oe],et=Ce[Be.materialIndex];et&&et.visible&&b.push(M,Ie,et,Z,k.z,Be)}}else Ce.visible&&b.push(M,Ie,Ce,Z,k.z,null)}}const Te=M.children;for(let Ie=0,Ce=Te.length;Ie<Ce;Ie++)fa(Te[Ie],B,Z,$)}function nu(M,B,Z,$){const{opaque:G,transmissive:Te,transparent:Ie}=M;A.setupLightsView(Z),me===!0&&Ee.setGlobalState(v.clippingPlanes,Z),$&&ae.viewport(K.copy($)),G.length>0&&Ns(G,B,Z),Te.length>0&&Ns(Te,B,Z),Ie.length>0&&Ns(Ie,B,Z),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function iu(M,B,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){const et=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new Gn(1,1,{generateMipmaps:!0,type:et?di:_n,minFilter:Qi,samples:se.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Te=A.state.transmissionRenderTarget[$.id],Ie=$.viewport||K;Te.setSize(Ie.z*v.transmissionResolutionScale,Ie.w*v.transmissionResolutionScale);const Ce=v.getRenderTarget(),Ne=v.getActiveCubeFace(),Oe=v.getActiveMipmapLevel();v.setRenderTarget(Te),v.getClearColor(ve),_e=v.getClearAlpha(),_e<1&&v.setClearColor(16777215,.5),v.clear(),j&&xe.render(Z);const Ge=v.toneMapping;v.toneMapping=Hn;const Be=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),me===!0&&Ee.setGlobalState(v.clippingPlanes,$),Ns(M,Z,$),D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te),oe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ft=0,yt=B.length;ft<yt;ft++){const bt=B[ft],{object:mt,geometry:ze,material:ct,group:st}=bt;if(ct.side===si&&mt.layers.test($.layers)){const an=ct.side;ct.side=sn,ct.needsUpdate=!0,ru(mt,Z,$,ze,ct,st),ct.side=an,ct.needsUpdate=!0,et=!0}}et===!0&&(D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te))}v.setRenderTarget(Ce,Ne,Oe),v.setClearColor(ve,_e),Be!==void 0&&($.viewport=Be),v.toneMapping=Ge}function Ns(M,B,Z){const $=B.isScene===!0?B.overrideMaterial:null;for(let G=0,Te=M.length;G<Te;G++){const Ie=M[G],{object:Ce,geometry:Ne,group:Oe}=Ie;let Ge=Ie.material;Ge.allowOverride===!0&&$!==null&&(Ge=$),Ce.layers.test(Z.layers)&&ru(Ce,B,Z,Ne,Ge,Oe)}}function ru(M,B,Z,$,G,Te){M.onBeforeRender(v,B,Z,$,G,Te),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(v,B,Z,$,M,Te),G.transparent===!0&&G.side===si&&G.forceSinglePass===!1?(G.side=sn,G.needsUpdate=!0,v.renderBufferDirect(Z,B,$,G,M,Te),G.side=Ii,G.needsUpdate=!0,v.renderBufferDirect(Z,B,$,G,M,Te),G.side=si):v.renderBufferDirect(Z,B,$,G,M,Te),M.onAfterRender(v,B,Z,$,G,Te)}function Fs(M,B,Z){B.isScene!==!0&&(B=Q);const $=g.get(M),G=A.state.lights,Te=A.state.shadowsArray,Ie=G.state.version,Ce=Pe.getParameters(M,G.state,Te,B,Z),Ne=Pe.getProgramCacheKey(Ce);let Oe=$.programs;$.environment=M.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(M.isMeshStandardMaterial?ee:X).get(M.envMap||$.environment),$.envMapRotation=$.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Oe===void 0&&(M.addEventListener("dispose",Ln),Oe=new Map,$.programs=Oe);let Ge=Oe.get(Ne);if(Ge!==void 0){if($.currentProgram===Ge&&$.lightsStateVersion===Ie)return ou(M,Ce),Ge}else Ce.uniforms=Pe.getUniforms(M),M.onBeforeCompile(Ce,v),Ge=Pe.acquireProgram(Ce,Ne),Oe.set(Ne,Ge),$.uniforms=Ce.uniforms;const Be=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=Ee.uniform),ou(M,Ce),$.needsLights=sp(M),$.lightsStateVersion=Ie,$.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Ge,$.uniformsList=null,Ge}function su(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=wo.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function ou(M,B){const Z=g.get(M);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function ip(M,B,Z,$,G){B.isScene!==!0&&(B=Q),D.resetTextureUnits();const Te=B.fog,Ie=$.isMeshStandardMaterial?B.environment:null,Ce=H===null?v.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Wr,Ne=($.isMeshStandardMaterial?ee:X).get($.envMap||Ie),Oe=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!Z.morphAttributes.position,et=!!Z.morphAttributes.normal,ft=!!Z.morphAttributes.color;let yt=Hn;$.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(yt=v.toneMapping);const bt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,mt=bt!==void 0?bt.length:0,ze=g.get($),ct=A.state.lights;if(me===!0&&(Ve===!0||M!==ie)){const Xt=M===ie&&$.id===ne;Ee.setState($,M,Xt)}let st=!1;$.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ct.state.version||ze.outputColorSpace!==Ce||G.isBatchedMesh&&ze.batching===!1||!G.isBatchedMesh&&ze.batching===!0||G.isBatchedMesh&&ze.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ze.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ze.instancing===!1||!G.isInstancedMesh&&ze.instancing===!0||G.isSkinnedMesh&&ze.skinning===!1||!G.isSkinnedMesh&&ze.skinning===!0||G.isInstancedMesh&&ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ze.instancingMorph===!1&&G.morphTexture!==null||ze.envMap!==Ne||$.fog===!0&&ze.fog!==Te||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ee.numPlanes||ze.numIntersection!==Ee.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==Ge||ze.morphTargets!==Be||ze.morphNormals!==et||ze.morphColors!==ft||ze.toneMapping!==yt||ze.morphTargetsCount!==mt)&&(st=!0):(st=!0,ze.__version=$.version);let an=ze.currentProgram;st===!0&&(an=Fs($,B,G));let lr=!1,ln=!1,$r=!1;const xt=an.getUniforms(),Qt=ze.uniforms;if(ae.useProgram(an.program)&&(lr=!0,ln=!0,$r=!0),$.id!==ne&&(ne=$.id,ln=!0),lr||ie!==M){ae.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),xt.setValue(E,"projectionMatrix",M.projectionMatrix),xt.setValue(E,"viewMatrix",M.matrixWorldInverse);const en=xt.map.cameraPosition;en!==void 0&&en.setValue(E,P.setFromMatrixPosition(M.matrixWorld)),se.logarithmicDepthBuffer&&xt.setValue(E,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&xt.setValue(E,"isOrthographic",M.isOrthographicCamera===!0),ie!==M&&(ie=M,ln=!0,$r=!0)}if(ze.needsLights&&(ct.state.directionalShadowMap.length>0&&xt.setValue(E,"directionalShadowMap",ct.state.directionalShadowMap,D),ct.state.spotShadowMap.length>0&&xt.setValue(E,"spotShadowMap",ct.state.spotShadowMap,D),ct.state.pointShadowMap.length>0&&xt.setValue(E,"pointShadowMap",ct.state.pointShadowMap,D)),G.isSkinnedMesh){xt.setOptional(E,G,"bindMatrix"),xt.setOptional(E,G,"bindMatrixInverse");const Xt=G.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),xt.setValue(E,"boneTexture",Xt.boneTexture,D))}G.isBatchedMesh&&(xt.setOptional(E,G,"batchingTexture"),xt.setValue(E,"batchingTexture",G._matricesTexture,D),xt.setOptional(E,G,"batchingIdTexture"),xt.setValue(E,"batchingIdTexture",G._indirectTexture,D),xt.setOptional(E,G,"batchingColorTexture"),G._colorsTexture!==null&&xt.setValue(E,"batchingColorTexture",G._colorsTexture,D));const dn=Z.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&$e.update(G,Z,an),(ln||ze.receiveShadow!==G.receiveShadow)&&(ze.receiveShadow=G.receiveShadow,xt.setValue(E,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Qt.envMap.value=Ne,Qt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(Qt.envMapIntensity.value=B.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=Ry()),ln&&(xt.setValue(E,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&rp(Qt,$r),Te&&$.fog===!0&&Fe.refreshFogUniforms(Qt,Te),Fe.refreshMaterialUniforms(Qt,$,je,ke,A.state.transmissionRenderTarget[M.id]),wo.upload(E,su(ze),Qt,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(wo.upload(E,su(ze),Qt,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&xt.setValue(E,"center",G.center),xt.setValue(E,"modelViewMatrix",G.modelViewMatrix),xt.setValue(E,"normalMatrix",G.normalMatrix),xt.setValue(E,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Xt=$.uniformsGroups;for(let en=0,ha=Xt.length;en<ha;en++){const Oi=Xt[en];de.update(Oi,an),de.bind(Oi,an)}}return an}function rp(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function sp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(M,B,Z){const $=g.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),g.get(M.texture).__webglTexture=B,g.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){const Z=g.get(M);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0};const op=E.createFramebuffer();this.setRenderTarget=function(M,B=0,Z=0){H=M,I=B,U=Z;let $=null,G=!1,Te=!1;if(M){const Ce=g.get(M);if(Ce.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(E.FRAMEBUFFER,Ce.__webglFramebuffer),K.copy(M.viewport),V.copy(M.scissor),re=M.scissorTest,ae.viewport(K),ae.scissor(V),ae.setScissorTest(re),ne=-1;return}else if(Ce.__webglFramebuffer===void 0)D.setupRenderTarget(M);else if(Ce.__hasExternalTextures)D.rebindTextures(M,g.get(M.texture).__webglTexture,g.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ge=M.depthTexture;if(Ce.__boundDepthTexture!==Ge){if(Ge!==null&&g.has(Ge)&&(M.width!==Ge.image.width||M.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(M)}}const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Te=!0);const Oe=g.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?$=Oe[B][Z]:$=Oe[B],G=!0):M.samples>0&&D.useMultisampledRTT(M)===!1?$=g.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?$=Oe[Z]:$=Oe,K.copy(M.viewport),V.copy(M.scissor),re=M.scissorTest}else K.copy(O).multiplyScalar(je).floor(),V.copy(q).multiplyScalar(je).floor(),re=J;if(Z!==0&&($=op),ae.bindFramebuffer(E.FRAMEBUFFER,$)&&ae.drawBuffers(M,$),ae.viewport(K),ae.scissor(V),ae.setScissorTest(re),G){const Ce=g.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ce.__webglTexture,Z)}else if(Te){const Ce=B;for(let Ne=0;Ne<M.textures.length;Ne++){const Oe=g.get(M.textures[Ne]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,Z,Ce)}}else if(M!==null&&Z!==0){const Ce=g.get(M.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ce.__webglTexture,Z)}ne=-1},this.readRenderTargetPixels=function(M,B,Z,$,G,Te,Ie,Ce=0){if(!(M&&M.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){ae.bindFramebuffer(E.FRAMEBUFFER,Ne);try{const Oe=M.textures[Ce],Ge=Oe.format,Be=Oe.type;if(!se.textureFormatReadable(Ge)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Be)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-$&&Z>=0&&Z<=M.height-G&&(M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ce),E.readPixels(B,Z,$,G,ge.convert(Ge),ge.convert(Be),Te))}finally{const Oe=H!==null?g.get(H).__webglFramebuffer:null;ae.bindFramebuffer(E.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(M,B,Z,$,G,Te,Ie,Ce=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=g.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne)if(B>=0&&B<=M.width-$&&Z>=0&&Z<=M.height-G){ae.bindFramebuffer(E.FRAMEBUFFER,Ne);const Oe=M.textures[Ce],Ge=Oe.format,Be=Oe.type;if(!se.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,et),E.bufferData(E.PIXEL_PACK_BUFFER,Te.byteLength,E.STREAM_READ),M.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Ce),E.readPixels(B,Z,$,G,ge.convert(Ge),ge.convert(Be),0);const ft=H!==null?g.get(H).__webglFramebuffer:null;ae.bindFramebuffer(E.FRAMEBUFFER,ft);const yt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await W0(E,yt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,et),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Te),E.deleteBuffer(et),E.deleteSync(yt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,Z=0){const $=Math.pow(2,-Z),G=Math.floor(M.image.width*$),Te=Math.floor(M.image.height*$),Ie=B!==null?B.x:0,Ce=B!==null?B.y:0;D.setTexture2D(M,0),E.copyTexSubImage2D(E.TEXTURE_2D,Z,0,0,Ie,Ce,G,Te),ae.unbindTexture()};const ap=E.createFramebuffer(),lp=E.createFramebuffer();this.copyTextureToTexture=function(M,B,Z=null,$=null,G=0,Te=null){Te===null&&(G!==0?(Rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=G,G=0):Te=0);let Ie,Ce,Ne,Oe,Ge,Be,et,ft,yt;const bt=M.isCompressedTexture?M.mipmaps[Te]:M.image;if(Z!==null)Ie=Z.max.x-Z.min.x,Ce=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,Oe=Z.min.x,Ge=Z.min.y,Be=Z.isBox3?Z.min.z:0;else{const dn=Math.pow(2,-G);Ie=Math.floor(bt.width*dn),Ce=Math.floor(bt.height*dn),M.isDataArrayTexture?Ne=bt.depth:M.isData3DTexture?Ne=Math.floor(bt.depth*dn):Ne=1,Oe=0,Ge=0,Be=0}$!==null?(et=$.x,ft=$.y,yt=$.z):(et=0,ft=0,yt=0);const mt=ge.convert(B.format),ze=ge.convert(B.type);let ct;B.isData3DTexture?(D.setTexture3D(B,0),ct=E.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(D.setTexture2DArray(B,0),ct=E.TEXTURE_2D_ARRAY):(D.setTexture2D(B,0),ct=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,B.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,B.unpackAlignment);const st=E.getParameter(E.UNPACK_ROW_LENGTH),an=E.getParameter(E.UNPACK_IMAGE_HEIGHT),lr=E.getParameter(E.UNPACK_SKIP_PIXELS),ln=E.getParameter(E.UNPACK_SKIP_ROWS),$r=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,bt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,bt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Oe),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ge),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Be);const xt=M.isDataArrayTexture||M.isData3DTexture,Qt=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){const dn=g.get(M),Xt=g.get(B),en=g.get(dn.__renderTarget),ha=g.get(Xt.__renderTarget);ae.bindFramebuffer(E.READ_FRAMEBUFFER,en.__webglFramebuffer),ae.bindFramebuffer(E.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let Oi=0;Oi<Ne;Oi++)xt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,g.get(M).__webglTexture,G,Be+Oi),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,g.get(B).__webglTexture,Te,yt+Oi)),E.blitFramebuffer(Oe,Ge,Ie,Ce,et,ft,Ie,Ce,E.DEPTH_BUFFER_BIT,E.NEAREST);ae.bindFramebuffer(E.READ_FRAMEBUFFER,null),ae.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||g.has(M)){const dn=g.get(M),Xt=g.get(B);ae.bindFramebuffer(E.READ_FRAMEBUFFER,ap),ae.bindFramebuffer(E.DRAW_FRAMEBUFFER,lp);for(let en=0;en<Ne;en++)xt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,dn.__webglTexture,G,Be+en):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,dn.__webglTexture,G),Qt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Xt.__webglTexture,Te,yt+en):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Xt.__webglTexture,Te),G!==0?E.blitFramebuffer(Oe,Ge,Ie,Ce,et,ft,Ie,Ce,E.COLOR_BUFFER_BIT,E.NEAREST):Qt?E.copyTexSubImage3D(ct,Te,et,ft,yt+en,Oe,Ge,Ie,Ce):E.copyTexSubImage2D(ct,Te,et,ft,Oe,Ge,Ie,Ce);ae.bindFramebuffer(E.READ_FRAMEBUFFER,null),ae.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Qt?M.isDataTexture||M.isData3DTexture?E.texSubImage3D(ct,Te,et,ft,yt,Ie,Ce,Ne,mt,ze,bt.data):B.isCompressedArrayTexture?E.compressedTexSubImage3D(ct,Te,et,ft,yt,Ie,Ce,Ne,mt,bt.data):E.texSubImage3D(ct,Te,et,ft,yt,Ie,Ce,Ne,mt,ze,bt):M.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Te,et,ft,Ie,Ce,mt,ze,bt.data):M.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Te,et,ft,bt.width,bt.height,mt,bt.data):E.texSubImage2D(E.TEXTURE_2D,Te,et,ft,Ie,Ce,mt,ze,bt);E.pixelStorei(E.UNPACK_ROW_LENGTH,st),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,an),E.pixelStorei(E.UNPACK_SKIP_PIXELS,lr),E.pixelStorei(E.UNPACK_SKIP_ROWS,ln),E.pixelStorei(E.UNPACK_SKIP_IMAGES,$r),Te===0&&B.generateMipmaps&&E.generateMipmap(ct),ae.unbindTexture()},this.initRenderTarget=function(M){g.get(M).__webglFramebuffer===void 0&&D.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?D.setTextureCube(M,0):M.isData3DTexture?D.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?D.setTexture2DArray(M,0):D.setTexture2D(M,0),ae.unbindTexture()},this.resetState=function(){I=0,U=0,H=null,ae.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const eh={type:"change"},Jc={type:"start"},Jd={type:"end"},po=new oa,th=new ni,Dy=Math.cos(70*j0.DEG2RAD),Ct=new F,tn=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sl=1e-6;class Ly extends U_{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new or,this._lastTargetPosition=new F,this._quat=new or().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rf,this._sphericalDelta=new Rf,this._scale=1,this._panOffset=new F,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new F,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Uy.bind(this),this._onPointerDown=Iy.bind(this),this._onPointerUp=Ny.bind(this),this._onContextMenu=Hy.bind(this),this._onMouseWheel=By.bind(this),this._onKeyDown=zy.bind(this),this._onTouchStart=ky.bind(this),this._onTouchMove=Vy.bind(this),this._onMouseDown=Fy.bind(this),this._onMouseMove=Oy.bind(this),this._interceptControlDown=Gy.bind(this),this._interceptControlUp=Wy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eh),this.update(),this.state=dt.NONE}update(e=null){const t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),r<-Math.PI?r+=tn:r>Math.PI&&(r-=tn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ct.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(po.origin.copy(this.object.position),po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(po.direction))<Dy?this.object.lookAt(this.target):(th.setFromNormalAndCoplanarPoint(this.object.up,this.target),po.intersectPlane(th,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>sl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sl||this._lastTargetPosition.distanceToSquared(this.target)>sl?(this.dispatchEvent(eh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ct.copy(r).sub(this.target);let s=Ct.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new He,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Iy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Uy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ny(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jd),this.state=dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fy(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=dt.DOLLY;break;case ai.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}break;case ai.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Jc)}function Oy(n){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function By(n){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(n.preventDefault(),this.dispatchEvent(Jc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Jd))}function zy(n){this.enabled!==!1&&this._handleKeyDown(n)}function ky(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=dt.TOUCH_ROTATE;break;case Ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=dt.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Jc)}function Vy(n){switch(this._trackPointer(n),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=dt.NONE}}function Hy(n){this.enabled!==!1&&n.preventDefault()}function Gy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Cr={object:"#f97316",array:"#06b6d4",string:"#10b981",number:"#6366f1",boolean:"#ec4899",null:"#64748b"},qi=.5,Xy=6,Rr=1.6;function jy(n){const e=Ht({isInitialized:!1,hoveredNode:null,zoomLevel:1,isDragging:!1});let t=null,i=null,r=null,s=null,o=null,a=new Map,l=null,c=null,u=null,f=null,h=!1,p=null,_=new ni(new F(0,0,1),0),x=new F;const m=[];function d(Se,O=26,q="#ffffff"){const J=document.createElement("canvas"),pe=J.getContext("2d");J.width=512,J.height=72,pe.clearRect(0,0,J.width,J.height),pe.fillStyle="rgba(15, 23, 42, 0.9)",pe.beginPath(),pe.roundRect(0,0,J.width,J.height,12),pe.fill(),pe.strokeStyle=q,pe.lineWidth=3,pe.beginPath(),pe.roundRect(2,2,J.width-4,J.height-4,10),pe.stroke(),pe.font=`bold ${O}px "Segoe UI", system-ui, sans-serif`,pe.fillStyle="#ffffff",pe.textAlign="left",pe.textBaseline="middle";const me=Se.length>22?Se.slice(0,22)+"...":Se;pe.fillText(me,16,J.height/2);const Ve=new Af(J);Ve.minFilter=Nt,Ve.magFilter=Nt;const w=new hc({map:Ve,transparent:!0});m.push(w,Ve);const P=new yf(w);return P.scale.set(5,.7,1),P}function T(Se,O){const q=document.createElement("canvas"),J=q.getContext("2d");q.width=64,q.height=64,J.fillStyle=O,J.beginPath(),J.arc(32,32,28,0,Math.PI*2),J.fill(),J.fillStyle="#ffffff",J.font="bold 40px Arial",J.textAlign="center",J.textBaseline="middle",J.fillText(Se?"−":"+",32,30);const pe=new Af(q),me=new hc({map:pe,transparent:!0});m.push(me,pe);const Ve=new yf(me);return Ve.scale.set(.7,.7,1),Ve}function C(Se,O,q){const J=Cr[Se.type]||Cr.null,pe=new tr;pe.position.set(O,q,0);const me=new $c(qi,48),Ve=new Vo({color:new it(J)});m.push(me,Ve);const w=new Dn(me,Ve);w.position.set(0,0,.1),pe.add(w);const P=new Kc(qi,qi+.2,48),k=new Vo({color:new it(J),transparent:!0,opacity:.5});m.push(P,k);const Q=new Dn(P,k);Q.position.set(0,0,0),pe.add(Q);const j=`${Se.name}: ${Se.value}`,te=d(j,24,J);te.position.set(3.5,0,.1),pe.add(te);let E=null;Se.children.length>0&&(E=T(Se.isExpanded,J),E.position.set(qi+.5,qi+.3,.2),pe.add(E)),t?.add(pe);const le={group:pe,mesh:w,node:Se,label:te,expandIcon:E,glow:Q,edges:[],worldX:O,worldY:q};return a.set(Se.id,le),le}function b(Se,O){const q=Se.worldX,J=Se.worldY,pe=O.worldX,me=O.worldY,Ve=Cr[Se.node.type]||Cr.null,w=q+(pe-q)*.5,k=new C_(new F(q+qi,J,0),new F(w,J,0),new F(w,me,0),new F(pe-qi,me,0)).getPoints(40),Q=new on().setFromPoints(k),j=new Xd({color:new it(Ve),transparent:!0,opacity:.7,linewidth:2});m.push(Q,j);const te=new Tf(Q,j);return l?.add(te),Se.edges.push(te),te}function A(Se,O,q){const J=new Map;function pe(w){if(!w.isExpanded||w.children.length===0)return Rr;let P=0;return w.children.forEach(k=>{P+=pe(k)}),Math.max(Rr,P)}function me(w,P,k){if(J.set(w.id,{x:P,y:k}),!w.isExpanded||w.children.length===0)return Rr;const Q=P+Xy;let j=k;const te=w.children.map(le=>pe(le)),E=te.reduce((le,oe)=>le+oe,0);return j=k+(E-Rr)/2,w.children.forEach((le,oe)=>{const se=te[oe]??Rr;me(le,Q,j-se/2+Rr/2),j-=se}),E}return{height:me(Se,O,q),positions:J}}function R(){if(!t||!f)return;a.forEach(J=>{t?.remove(J.group)}),a.clear(),l&&t.remove(l),l=new tr,t.add(l);const{positions:Se}=A(f,0,0);function O(J){const pe=Se.get(J.id);pe&&C(J,pe.x,pe.y),J.isExpanded&&J.children.forEach(me=>O(me))}O(f);function q(J){const pe=a.get(J.id);!pe||!J.isExpanded||J.children.forEach(me=>{const Ve=a.get(me.id);Ve&&(b(pe,Ve),q(me))})}q(f)}function L(Se){if(!n.value)return;f=Se;const O=n.value,q=O.clientWidth,J=O.clientHeight,pe=q/J,me=12;i=new Zc(-me*pe,me*pe,me,-me,.1,1e3),i.position.set(6,0,50),t=new g_,t.background=new it(988970),r=new Py({antialias:!0,alpha:!0}),r.setSize(q,J),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.appendChild(r.domElement),s=new Ly(i,r.domElement),s.enableRotate=!1,s.enablePan=!0,s.enableZoom=!0,s.enableDamping=!0,s.dampingFactor=.1,s.minZoom=.2,s.maxZoom=5,s.mouseButtons={LEFT:ai.PAN,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},s.touches={ONE:Ci.PAN,TWO:Ci.DOLLY_PAN},s.panSpeed=1.2,s.zoomSpeed=1,c=new I_,u=new He,l=new tr,t.add(l),R(),O.addEventListener("mousedown",y),O.addEventListener("mousemove",I),O.addEventListener("mouseup",U),O.addEventListener("click",ne),window.addEventListener("resize",ie),e.value.isInitialized=!0,K()}function z(){if(!c||!i||!u)return null;c.setFromCamera(u,i);const Se=Array.from(a.values()).map(q=>q.mesh),O=c.intersectObjects(Se);if(O.length>0){const q=O[0]?.object;for(const[,J]of a)if(J.mesh===q)return J}return null}function v(Se){if(!n.value||!u)return;const O=n.value.getBoundingClientRect();u.x=(Se.clientX-O.left)/O.width*2-1,u.y=-((Se.clientY-O.top)/O.height)*2+1}function y(Se){if(Se.button!==0)return;v(Se);const O=z();if(O&&c&&i){h=!0,p=O,e.value.isDragging=!0,s&&(s.enabled=!1);const q=new F;c.ray.intersectPlane(_,q),x.copy(q).sub(O.group.position),n.value&&(n.value.style.cursor="grabbing"),Se.preventDefault(),Se.stopPropagation()}}function I(Se){if(v(Se),h&&p&&c&&i){const q=new F;c.setFromCamera(u,i),c.ray.intersectPlane(_,q);const J=q.sub(x);p.group.position.set(J.x,J.y,0),p.worldX=J.x,p.worldY=J.y,H();return}const O=z();if(a.forEach(q=>{const J=q.mesh.material,pe=Cr[q.node.type]||Cr.null;J.color.setStyle(pe);const me=q.glow.material;me.opacity=.5}),O){O.mesh.material.color.setHex(16777215);const J=O.glow.material;J.opacity=.9,e.value.hoveredNode=O.node,n.value&&(n.value.style.cursor="grab")}else e.value.hoveredNode=null,n.value&&(n.value.style.cursor="default")}function U(){h&&(h=!1,p=null,e.value.isDragging=!1,s&&(s.enabled=!0),n.value&&(n.value.style.cursor="default"))}function H(){if(!l)return;for(;l.children.length>0;){const O=l.children[0];O&&(l.remove(O),O instanceof Tf&&O.geometry.dispose())}a.forEach(O=>{O.edges=[]});function Se(O){const q=a.get(O.id);!q||!O.isExpanded||O.children.forEach(J=>{const pe=a.get(J.id);pe&&(b(q,pe),Se(J))})}f&&Se(f)}function ne(Se){if(e.value.isDragging)return;v(Se);const O=z();O&&O.node.children.length>0&&(O.node.isExpanded=!O.node.isExpanded,R())}function ie(){if(!n.value||!i||!r)return;const Se=n.value.clientWidth,O=n.value.clientHeight,q=Se/O,J=12;i.left=-J*q,i.right=J*q,i.top=J,i.bottom=-J,i.updateProjectionMatrix(),r.setSize(Se,O)}function K(){!r||!t||!i||!s||(o=requestAnimationFrame(K),h||s.update(),i&&(e.value.zoomLevel=i.zoom),r.render(t,i))}function V(){i&&(i.zoom=Math.min(i.zoom*1.3,5),i.updateProjectionMatrix())}function re(){i&&(i.zoom=Math.max(i.zoom/1.3,.2),i.updateProjectionMatrix())}function ve(){s&&i&&(i.position.set(6,0,50),i.zoom=1,i.updateProjectionMatrix(),s.target.set(0,0,0),s.update(),R())}function _e(Se){Se.isExpanded=!0,Se.children.forEach(_e)}function ye(Se){Se.isExpanded=!1,Se.children.forEach(ye)}function ke(){f&&(_e(f),R())}function je(){f&&(ye(f),f.isExpanded=!0,R())}function pt(){o!==null&&cancelAnimationFrame(o),n.value&&(n.value.removeEventListener("mousedown",y),n.value.removeEventListener("mousemove",I),n.value.removeEventListener("mouseup",U),n.value.removeEventListener("click",ne)),window.removeEventListener("resize",ie),m.forEach(Se=>Se.dispose()),m.length=0,r&&(r.dispose(),n.value&&r.domElement.parentNode===n.value&&n.value.removeChild(r.domElement)),s&&s.dispose(),t=null,i=null,r=null,s=null,a.clear(),l=null,c=null,u=null,f=null,h=!1,p=null,e.value.isInitialized=!1,e.value.hoveredNode=null,e.value.isDragging=!1}return{state:e,initialize:L,dispose:pt,zoomIn:V,zoomOut:re,resetView:ve,expandAll:ke,collapseAll:je}}const Yy={key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},qy={key:0,class:"relative z-10 w-full max-w-[95vw] h-[90vh] bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10"},$y={class:"absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-4 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-transparent"},Ky={class:"flex items-center gap-6 flex-wrap"},Zy={class:"flex items-center gap-1 p-1 bg-slate-800/80 rounded-xl ring-1 ring-white/5"},Jy={class:"text-slate-300 text-xs px-3 min-w-[3.5rem] text-center font-mono tabular-nums"},Qy={class:"flex items-center gap-1"},eb={key:0,class:"absolute bottom-5 left-5 z-20 bg-slate-800/95 text-white px-4 py-3 rounded-xl shadow-xl max-w-sm backdrop-blur-sm ring-1 ring-white/10"},tb={class:"flex items-center gap-2 mb-2"},nb={class:"text-[10px] uppercase tracking-wider text-slate-400 font-semibold"},ib={class:"font-semibold text-white text-sm"},rb={class:"text-xs text-slate-300 mt-1.5 break-all line-clamp-3 font-mono"},sb=jr({__name:"JsonTreeModal",props:{isOpen:{type:Boolean},jsonData:{type:[String,Number,Boolean,null,Object]}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,r=Ht(null),{state:s,initialize:o,dispose:a,zoomIn:l,zoomOut:c,resetView:u,expandAll:f,collapseAll:h}=jy(r);function p(){a(),i("close")}function _(x){x.key==="Escape"&&p()}return rr(()=>t.isOpen,async x=>{if(x&&t.jsonData!==null){await wh();const m=c0(t.jsonData);o(m),window.addEventListener("keydown",_)}else window.removeEventListener("keydown",_),a()}),(x,m)=>(Je(),na(rm,{to:"body"},[At(vo,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:ps(()=>[n.isOpen?(Je(),tt("div",Yy,[Y("div",{class:"absolute inset-0 bg-slate-950/80 backdrop-blur-md",onClick:p,"aria-hidden":"true"}),At(vo,{"enter-active-class":"transition-all duration-300 ease-out delay-100","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:ps(()=>[n.isOpen?(Je(),tt("div",qy,[Y("header",$y,[Y("div",Ky,[m[9]||(m[9]=Y("div",{class:"flex items-center gap-3"},[Y("div",{class:"w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20"},[Y("svg",{class:"w-5 h-5 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})])]),Y("h2",{id:"modal-title",class:"text-white font-semibold text-lg"},"Vista 3D del Árbol")],-1)),Y("div",Zy,[Y("button",{class:"p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",title:"Alejar","aria-label":"Alejar",onClick:m[0]||(m[0]=(...d)=>fe(c)&&fe(c)(...d))},[...m[5]||(m[5]=[Y("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"})],-1)])]),Y("span",Jy,Rt(Math.round(fe(s).zoomLevel*100))+"% ",1),Y("button",{class:"p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",title:"Acercar","aria-label":"Acercar",onClick:m[1]||(m[1]=(...d)=>fe(l)&&fe(l)(...d))},[...m[6]||(m[6]=[Y("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"})],-1)])]),m[8]||(m[8]=Y("div",{class:"w-px h-5 bg-slate-600 mx-1","aria-hidden":"true"},null,-1)),Y("button",{class:"p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",title:"Restablecer vista","aria-label":"Restablecer vista",onClick:m[2]||(m[2]=(...d)=>fe(u)&&fe(u)(...d))},[...m[7]||(m[7]=[Y("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])])]),Y("div",Qy,[Y("button",{class:"px-3 py-1.5 text-slate-300 text-xs font-medium bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-all ring-1 ring-white/5 focus:outline-none focus:ring-2 focus:ring-primary-500",title:"Expandir todos los nodos","aria-label":"Expandir todos los nodos",onClick:m[3]||(m[3]=(...d)=>fe(f)&&fe(f)(...d))}," Expandir "),Y("button",{class:"px-3 py-1.5 text-slate-300 text-xs font-medium bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-all ring-1 ring-white/5 focus:outline-none focus:ring-2 focus:ring-primary-500",title:"Colapsar todos los nodos","aria-label":"Colapsar todos los nodos",onClick:m[4]||(m[4]=(...d)=>fe(h)&&fe(h)(...d))}," Colapsar ")])]),Y("button",{class:"p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-red-600 rounded-lg transition-all ring-1 ring-white/5 focus:outline-none focus:ring-2 focus:ring-red-500",onClick:p,title:"Cerrar (Esc)","aria-label":"Cerrar modal"},[...m[10]||(m[10]=[Y("svg",{class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),m[11]||(m[11]=Y("div",{class:"absolute bottom-5 right-5 z-20 flex items-center gap-3 text-[11px] bg-slate-800/90 px-4 py-2.5 rounded-xl backdrop-blur-sm ring-1 ring-white/5"},[Y("div",{class:"flex items-center gap-1.5"},[Y("kbd",{class:"px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-[10px] font-mono"},"Arrastrar"),Y("span",{class:"text-slate-400"},"para mover")]),Y("div",{class:"w-px h-3 bg-slate-600","aria-hidden":"true"}),Y("div",{class:"flex items-center gap-1.5"},[Y("kbd",{class:"px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-[10px] font-mono"},"Scroll"),Y("span",{class:"text-slate-400"},"para zoom")]),Y("div",{class:"w-px h-3 bg-slate-600","aria-hidden":"true"}),Y("div",{class:"flex items-center gap-1.5"},[Y("kbd",{class:"px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-[10px] font-mono"},"Click"),Y("span",{class:"text-slate-400"},"para expandir")]),Y("div",{class:"w-px h-3 bg-slate-600","aria-hidden":"true"}),Y("div",{class:"flex items-center gap-1.5"},[Y("kbd",{class:"px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-[10px] font-mono"},"Esc"),Y("span",{class:"text-slate-400"},"para cerrar")])],-1)),At(vo,{"enter-active-class":"transition-all duration-200 ease-out","enter-from-class":"opacity-0 translate-y-2","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition-all duration-150 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-2"},{default:ps(()=>[fe(s).hoveredNode?(Je(),tt("div",eb,[Y("div",tb,[Y("span",{class:Ue(["w-3 h-3 rounded-full ring-2 ring-white/20",{"bg-orange-500":fe(s).hoveredNode.type==="object","bg-cyan-500":fe(s).hoveredNode.type==="array","bg-emerald-500":fe(s).hoveredNode.type==="string","bg-blue-500":fe(s).hoveredNode.type==="number","bg-violet-500":fe(s).hoveredNode.type==="boolean","bg-slate-500":fe(s).hoveredNode.type==="null"}]),"aria-hidden":"true"},null,2),Y("span",nb,Rt(fe(s).hoveredNode.type),1)]),Y("p",ib,Rt(fe(s).hoveredNode.name),1),Y("p",rb,Rt(fe(s).hoveredNode.value),1)])):Sn("",!0)]),_:1}),Y("div",{ref_key:"containerRef",ref:r,class:"w-full h-full cursor-grab active:cursor-grabbing"},null,512)])):Sn("",!0)]),_:1})])):Sn("",!0)]),_:1})]))}}),ob=md(sb,[["__scopeId","data-v-ffae2e7b"]]),ab={class:"flex flex-col h-full"},lb={class:"mb-4 flex items-center justify-between flex-wrap gap-2"},cb={class:"flex items-center gap-2"},ub={key:0,class:"flex items-center gap-1.5"},fb={key:0,class:"p-6 animate-fade-in",role:"alert"},hb={class:"flex-1 min-w-0"},db={key:1,class:"flex flex-col items-center justify-center h-full py-16 px-6 animate-fade-in"},pb={key:2,class:"p-4 animate-fade-in"},mb=jr({__name:"JsonViewer",props:{jsonText:{},theme:{}},setup(n){const e=n,t=Ut(()=>e.theme.name==="dark"||e.theme.name==="midnight"),{parsedData:i,errorMessage:r,setJsonText:s}=pd(e.jsonText);rr(()=>e.jsonText,d=>{s(d)});const o=Ut(()=>i.value!==null),a=Ut(()=>r.value!==null),l=Ut(()=>!e.jsonText.trim()),c=Ht(!1),u=Ht(0),f=Ht(2);function h(){c.value=!0}function p(){c.value=!1}function _(){f.value=999,u.value++}function x(){f.value=0,u.value++}function m(){f.value=2,u.value++}return(d,T)=>(Je(),tt("div",ab,[Y("div",lb,[Y("div",cb,[Y("div",{class:Ue(["w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",t.value?"bg-gradient-to-br from-cyan-400 to-cyan-500":"bg-gradient-to-br from-cyan-500 to-cyan-600"])},[...T[0]||(T[0]=[Y("svg",{class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1)])],2),Y("h2",{class:Ue(["text-lg font-semibold transition-colors duration-300",n.theme.colors.textPrimary])},"Visualizador",2)]),o.value?(Je(),tt("div",ub,[Y("div",{class:Ue(["flex items-center gap-0.5 p-1 rounded-lg transition-colors duration-300",t.value?"bg-slate-700":"bg-gray-100"])},[Y("button",{class:Ue(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Expandir todo","aria-label":"Expandir todos los nodos",onClick:_},[...T[1]||(T[1]=[Y("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"})],-1)])],2),Y("button",{class:Ue(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Colapsar todo","aria-label":"Colapsar todos los nodos",onClick:x},[...T[2]||(T[2]=[Y("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"})],-1)])],2),Y("button",{class:Ue(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Restablecer vista","aria-label":"Restablecer vista por defecto",onClick:m},[...T[3]||(T[3]=[Y("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])],2)],2),Y("button",{class:Ue(["inline-flex items-center gap-1.5 px-3 py-1.5 text-white text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 transition-all shadow-sm",t.value?"bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500":"bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"]),onClick:h,title:"Abrir visualización 3D","aria-label":"Abrir visualización 3D del árbol JSON"},[...T[4]||(T[4]=[Y("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})],-1),Y("span",null,"Vista 3D",-1)])],2)])):Sn("",!0)]),Y("div",{class:Ue(["flex-1 overflow-auto rounded-xl ring-1 shadow-inner-soft transition-colors duration-300",t.value?"bg-slate-800/50 ring-slate-700":"bg-surface-secondary ring-gray-100"])},[a.value?(Je(),tt("div",fb,[Y("div",{class:Ue(["flex items-start gap-4 p-4 border rounded-xl transition-colors duration-300",t.value?"bg-red-900/30 border-red-800":"bg-red-50 border-red-200"])},[Y("div",{class:Ue(["w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300",t.value?"bg-red-900/50":"bg-red-100"])},[(Je(),tt("svg",{class:Ue(["w-5 h-5",t.value?"text-red-400":"text-red-600"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...T[5]||(T[5]=[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])],2))],2),Y("div",hb,[Y("p",{class:Ue(["font-semibold",t.value?"text-red-300":"text-red-800"])},"Error de sintaxis JSON",2),Y("p",{class:Ue(["text-sm mt-1 break-words",t.value?"text-red-400":"text-red-600"])},Rt(fe(r)),3)])],2)])):l.value?(Je(),tt("div",db,[Y("div",{class:Ue(["w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300",t.value?"bg-gradient-to-br from-slate-700 to-slate-800":"bg-gradient-to-br from-gray-100 to-gray-200"])},[(Je(),tt("svg",{class:Ue(["w-10 h-10",t.value?"text-slate-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...T[6]||(T[6]=[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)])],2))],2),Y("p",{class:Ue(["text-lg font-medium mb-1 transition-colors duration-300",t.value?"text-slate-300":"text-gray-700"])},"Sin datos JSON",2),Y("p",{class:Ue(["text-sm text-center max-w-xs transition-colors duration-300",t.value?"text-slate-500":"text-gray-500"])}," Ingresa o pega JSON válido en el panel de entrada para visualizar su estructura ",2)])):o.value?(Je(),tt("div",pb,[(Je(),na(o0,{key:u.value,data:fe(i),name:"root",isRoot:!0,depth:0,initialExpandDepth:f.value,lineNumber:1,theme:n.theme},null,8,["data","initialExpandDepth","theme"]))])):Sn("",!0)],2),At(ob,{isOpen:c.value,jsonData:fe(i),onClose:p},null,8,["isOpen","jsonData"])]))}}),Co={light:{name:"light",label:"Claro",icon:"☀️",colors:{bgPrimary:"from-slate-50 via-primary-50/30 to-slate-100",bgSecondary:"bg-white/80",bgTertiary:"bg-slate-50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-soft-lg",textPrimary:"text-gray-900",textSecondary:"text-gray-700",textMuted:"text-gray-500",accent:"bg-primary-600",accentHover:"hover:bg-primary-700",accentLight:"bg-primary-100",success:"text-emerald-700",successLight:"bg-emerald-50 border-emerald-200",error:"text-red-700",errorLight:"bg-red-50 border-red-200",border:"border-gray-200",borderHover:"hover:border-gray-300",jsonString:"text-emerald-600",jsonNumber:"text-blue-600",jsonBoolean:"text-violet-600",jsonNull:"text-gray-500",jsonObject:"text-orange-600",jsonArray:"text-cyan-600",shadow:"shadow-soft",shadowLg:"shadow-soft-lg"}},dark:{name:"dark",label:"Oscuro",icon:"🌙",colors:{bgPrimary:"from-gray-900 via-gray-900 to-gray-950",bgSecondary:"bg-gray-800/90",bgTertiary:"bg-gray-900",bgCard:"bg-gray-800/90 backdrop-blur-sm",bgCardHover:"hover:bg-gray-800",textPrimary:"text-gray-100",textSecondary:"text-gray-300",textMuted:"text-gray-500",accent:"bg-primary-500",accentHover:"hover:bg-primary-400",accentLight:"bg-primary-900/50",success:"text-emerald-400",successLight:"bg-emerald-900/30 border-emerald-800",error:"text-red-400",errorLight:"bg-red-900/30 border-red-800",border:"border-gray-700",borderHover:"hover:border-gray-600",jsonString:"text-emerald-400",jsonNumber:"text-blue-400",jsonBoolean:"text-violet-400",jsonNull:"text-gray-500",jsonObject:"text-orange-400",jsonArray:"text-cyan-400",shadow:"shadow-xl shadow-black/20",shadowLg:"shadow-2xl shadow-black/30"}},midnight:{name:"midnight",label:"Medianoche",icon:"🌌",colors:{bgPrimary:"from-slate-950 via-indigo-950 to-slate-950",bgSecondary:"bg-slate-900/90",bgTertiary:"bg-slate-950",bgCard:"bg-slate-900/80 backdrop-blur-sm",bgCardHover:"hover:bg-slate-800/80",textPrimary:"text-slate-100",textSecondary:"text-slate-300",textMuted:"text-slate-500",accent:"bg-indigo-500",accentHover:"hover:bg-indigo-400",accentLight:"bg-indigo-900/50",success:"text-teal-400",successLight:"bg-teal-900/30 border-teal-800",error:"text-rose-400",errorLight:"bg-rose-900/30 border-rose-800",border:"border-slate-700",borderHover:"hover:border-slate-600",jsonString:"text-teal-400",jsonNumber:"text-indigo-400",jsonBoolean:"text-purple-400",jsonNull:"text-slate-500",jsonObject:"text-amber-400",jsonArray:"text-sky-400",shadow:"shadow-xl shadow-indigo-950/50",shadowLg:"shadow-2xl shadow-indigo-950/60"}},forest:{name:"forest",label:"Bosque",icon:"🌲",colors:{bgPrimary:"from-emerald-50 via-green-50 to-teal-50",bgSecondary:"bg-white/80",bgTertiary:"bg-emerald-50/50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-lg hover:shadow-emerald-100",textPrimary:"text-emerald-950",textSecondary:"text-emerald-800",textMuted:"text-emerald-600",accent:"bg-emerald-600",accentHover:"hover:bg-emerald-700",accentLight:"bg-emerald-100",success:"text-green-700",successLight:"bg-green-50 border-green-200",error:"text-red-700",errorLight:"bg-red-50 border-red-200",border:"border-emerald-200",borderHover:"hover:border-emerald-300",jsonString:"text-green-600",jsonNumber:"text-teal-600",jsonBoolean:"text-lime-600",jsonNull:"text-emerald-400",jsonObject:"text-amber-600",jsonArray:"text-cyan-600",shadow:"shadow-lg shadow-emerald-100",shadowLg:"shadow-xl shadow-emerald-200"}},sunset:{name:"sunset",label:"Atardecer",icon:"🌅",colors:{bgPrimary:"from-orange-50 via-rose-50 to-purple-50",bgSecondary:"bg-white/80",bgTertiary:"bg-orange-50/50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-lg hover:shadow-orange-100",textPrimary:"text-gray-900",textSecondary:"text-gray-700",textMuted:"text-gray-500",accent:"bg-orange-500",accentHover:"hover:bg-orange-600",accentLight:"bg-orange-100",success:"text-emerald-700",successLight:"bg-emerald-50 border-emerald-200",error:"text-rose-700",errorLight:"bg-rose-50 border-rose-200",border:"border-orange-200",borderHover:"hover:border-orange-300",jsonString:"text-rose-600",jsonNumber:"text-orange-600",jsonBoolean:"text-purple-600",jsonNull:"text-gray-500",jsonObject:"text-amber-600",jsonArray:"text-pink-600",shadow:"shadow-lg shadow-orange-100",shadowLg:"shadow-xl shadow-orange-200"}}},Qd="json-visualizer-theme";function gb(){if(typeof window>"u")return"light";const n=localStorage.getItem(Qd);return n&&n in Co?n:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const Pr=Ht(gb());function ep(){const n=Ut(()=>Co[Pr.value]),e=Ut(()=>Object.values(Co));function t(r){Pr.value=r,localStorage.setItem(Qd,r),r==="dark"||r==="midnight"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function i(){const r=Object.keys(Co),o=(r.indexOf(Pr.value)+1)%r.length,a=r[o];a&&t(a)}return typeof window<"u"&&(Pr.value==="dark"||Pr.value==="midnight")&&document.documentElement.classList.add("dark"),{currentTheme:n,currentThemeName:Pr,allThemes:e,setTheme:t,cycleTheme:i}}const _b=["aria-expanded"],xb={class:"text-lg","aria-hidden":"true"},vb={class:"text-sm font-medium hidden sm:inline"},Sb={class:"p-1.5"},Mb=["onClick","aria-selected"],yb={class:"text-xl flex-shrink-0","aria-hidden":"true"},bb={class:"flex-1 font-medium text-sm"},Eb=jr({__name:"ThemeSelector",setup(n){const{currentTheme:e,allThemes:t,setTheme:i}=ep(),r=Ht(!1),s=Ht(null);function o(){r.value=!r.value}function a(u){i(u),r.value=!1}function l(u){s.value&&!s.value.contains(u.target)&&(r.value=!1)}function c(u){u.key==="Escape"&&(r.value=!1)}return Dc(()=>{document.addEventListener("click",l),document.addEventListener("keydown",c)}),Lc(()=>{document.removeEventListener("click",l),document.removeEventListener("keydown",c)}),(u,f)=>(Je(),tt("div",{ref_key:"selectorRef",ref:s,class:"theme-selector relative"},[Y("button",{onClick:o,class:Ue(["inline-flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",[fe(e).name==="dark"||fe(e).name==="midnight"?"bg-slate-800 text-slate-200 hover:bg-slate-700 focus:ring-slate-500":"bg-white/80 text-gray-700 hover:bg-white hover:shadow-md focus:ring-primary-500 shadow-soft"]]),"aria-expanded":r.value,"aria-haspopup":"listbox","aria-label":"Seleccionar tema",title:"Cambiar tema de color"},[Y("span",xb,Rt(fe(e).icon),1),Y("span",vb,Rt(fe(e).label),1),(Je(),tt("svg",{class:Ue(["w-4 h-4 transition-transform duration-200",{"rotate-180":r.value}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...f[0]||(f[0]=[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],10,_b),At(vo,{"enter-active-class":"transition-all duration-200 ease-out","enter-from-class":"opacity-0 scale-95 -translate-y-2","enter-to-class":"opacity-100 scale-100 translate-y-0","leave-active-class":"transition-all duration-150 ease-in","leave-from-class":"opacity-100 scale-100 translate-y-0","leave-to-class":"opacity-0 scale-95 -translate-y-2"},{default:ps(()=>[r.value?(Je(),tt("div",{key:0,class:Ue(["absolute right-0 mt-2 w-48 rounded-xl overflow-hidden z-50",[fe(e).name==="dark"||fe(e).name==="midnight"?"bg-slate-800 ring-1 ring-white/10 shadow-2xl":"bg-white ring-1 ring-black/5 shadow-xl"]]),role:"listbox","aria-label":"Temas disponibles"},[Y("div",Sb,[(Je(!0),tt(rn,null,Ic(fe(t),h=>(Je(),tt("button",{key:h.name,onClick:p=>a(h.name),class:Ue(["w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 text-left",[h.name===fe(e).name?fe(e).name==="dark"||fe(e).name==="midnight"?"bg-slate-700 text-white":"bg-primary-50 text-primary-700":fe(e).name==="dark"||fe(e).name==="midnight"?"text-slate-300 hover:bg-slate-700 hover:text-white":"text-gray-700 hover:bg-gray-50"]]),role:"option","aria-selected":h.name===fe(e).name},[Y("span",yb,Rt(h.icon),1),Y("span",bb,Rt(h.label),1),h.name===fe(e).name?(Je(),tt("svg",{key:0,class:Ue(["w-4 h-4 flex-shrink-0",[fe(e).name==="dark"||fe(e).name==="midnight"?"text-primary-400":"text-primary-600"]]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...f[1]||(f[1]=[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])],2)):Sn("",!0)],10,Mb))),128))]),Y("div",{class:Ue(["px-3 py-2 text-xs border-t",[fe(e).name==="dark"||fe(e).name==="midnight"?"border-slate-700 text-slate-500":"border-gray-100 text-gray-400"]])}," El tema se guarda automáticamente ",2)],2)):Sn("",!0)]),_:1})],512))}}),Tb={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},Ab={class:"mb-6 md:mb-8"},wb={class:"flex items-center justify-between"},Cb={class:"flex-1 text-center"},Rb={class:"inline-flex items-center gap-3 mb-2"},Pb={class:"flex justify-end w-32"},Db={class:"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-hidden"},Lb={class:"mt-4 text-center"},Ib=jr({__name:"App",setup(n){const e=Ht(""),{currentTheme:t}=ep(),i=Ut(()=>t.value.name==="dark"||t.value.name==="midnight");return(r,s)=>(Je(),tt("div",{class:Ue(["min-h-screen w-full bg-gradient-to-br p-4 md:p-6 lg:p-8 transition-colors duration-300",fe(t).colors.bgPrimary])},[Y("div",Tb,[Y("header",Ab,[Y("div",wb,[s[2]||(s[2]=Y("div",{class:"w-32 hidden sm:block"},null,-1)),Y("div",Cb,[Y("div",Rb,[Y("div",{class:Ue(["w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300",[i.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"]])},[...s[1]||(s[1]=[Y("svg",{class:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})],-1)])],2),Y("h1",{class:Ue(["text-3xl md:text-4xl font-bold bg-clip-text text-transparent transition-colors duration-300",[i.value?"bg-gradient-to-r from-white via-gray-200 to-white":"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"]])}," JSON Visualizer ",2)]),Y("p",{class:Ue(["text-sm md:text-base font-medium transition-colors duration-300",fe(t).colors.textMuted])}," Visualiza y explora estructuras JSON de forma interactiva ",2)]),Y("div",Pb,[At(Eb)])])]),Y("main",Db,[Y("section",{class:Ue(["rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300",[fe(t).colors.bgCard,fe(t).colors.shadow,fe(t).colors.bgCardHover,i.value?"ring-1 ring-white/10":"border border-white/50"]]),"aria-label":"Panel de entrada JSON"},[At(Jg,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=o=>e.value=o),theme:fe(t)},null,8,["modelValue","theme"])],2),Y("section",{class:Ue(["rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300",[fe(t).colors.bgCard,fe(t).colors.shadow,fe(t).colors.bgCardHover,i.value?"ring-1 ring-white/10":"border border-white/50"]]),"aria-label":"Panel de visualización JSON"},[At(mb,{jsonText:e.value,theme:fe(t)},null,8,["jsonText","theme"])],2)]),Y("footer",Lb,[Y("p",{class:Ue(["text-xs transition-colors duration-300",fe(t).colors.textMuted])},[s[3]||(s[3]=Or(" Presiona ",-1)),Y("kbd",{class:Ue(["px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300",i.value?"bg-slate-800 text-slate-400":"bg-gray-100 text-gray-500"])},"Ctrl",2),s[4]||(s[4]=Or(" + ",-1)),Y("kbd",{class:Ue(["px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300",i.value?"bg-slate-800 text-slate-400":"bg-gray-100 text-gray-500"])},"V",2),s[5]||(s[5]=Or(" para pegar y formatear automáticamente ",-1))],2)])])],2))}});Vg(Ib).mount("#app");
