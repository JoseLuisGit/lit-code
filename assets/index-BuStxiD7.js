(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Uc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const vt={},Os=[],jn=()=>{},Sf=()=>!1,ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Fc=n=>n.startsWith("onUpdate:"),Ft=Object.assign,Oc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Op=Object.prototype.hasOwnProperty,at=(n,e)=>Op.call(n,e),Xe=Array.isArray,Bs=n=>na(n)==="[object Map]",Ef=n=>na(n)==="[object Set]",Ke=n=>typeof n=="function",Pt=n=>typeof n=="string",Fi=n=>typeof n=="symbol",Tt=n=>n!==null&&typeof n=="object",Tf=n=>(Tt(n)||Ke(n))&&Ke(n.then)&&Ke(n.catch),wf=Object.prototype.toString,na=n=>wf.call(n),Bp=n=>na(n).slice(8,-1),Af=n=>na(n)==="[object Object]",Bc=n=>Pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,gr=Uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},kp=/-\w/g,An=ia(n=>n.replace(kp,e=>e.slice(1).toUpperCase())),zp=/\B([A-Z])/g,Oi=ia(n=>n.replace(zp,"-$1").toLowerCase()),sa=ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),wa=ia(n=>n?`on${sa(n)}`:""),Di=(n,e)=>!Object.is(n,e),To=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Cf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},kc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Vp=n=>{const e=Pt(n)?Number(n):NaN;return isNaN(e)?n:e};let Au;const ra=()=>Au||(Au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oa(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Pt(i)?Xp(i):oa(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Pt(n)||Tt(n))return n}const Hp=/;(?![^(]*\))/g,Gp=/:([^]+)/,Wp=/\/\*[^]*?\*\//g;function Xp(n){const e={};return n.replace(Wp,"").split(Hp).forEach(t=>{if(t){const i=t.split(Gp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ue(n){let e="";if(Pt(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=ue(n[t]);i&&(e+=i+" ")}else if(Tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yp=Uc(jp);function Rf(n){return!!n||n===""}const Pf=n=>!!(n&&n.__v_isRef===!0),it=n=>Pt(n)?n:n==null?"":Xe(n)||Tt(n)&&(n.toString===wf||!Ke(n.toString))?Pf(n)?it(n.value):JSON.stringify(n,Df,2):String(n),Df=(n,e)=>Pf(e)?Df(n,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Aa(i,r)+" =>"]=s,t),{})}:Ef(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Aa(t))}:Fi(e)?Aa(e):Tt(e)&&!Xe(e)&&!Af(e)?String(e):e,Aa=(n,e="")=>{var t;return Fi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let an;class qp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=an,!e&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=an;try{return an=this,e()}finally{an=t}}}on(){++this._on===1&&(this.prevScope=an,an=this)}off(){this._on>0&&--this._on===0&&(an=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $p(){return an}let St;const Ca=new WeakSet;class Lf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,an&&an.active&&an.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cu(this),Uf(this);const e=St,t=Ln;St=this,Ln=!0;try{return this.fn()}finally{Ff(this),St=e,Ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hc(e);this.deps=this.depsTail=void 0,Cu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ml(this)&&this.run()}get dirty(){return Ml(this)}}let If=0,_r,xr;function Nf(n,e=!1){if(n.flags|=8,e){n.next=xr,xr=n;return}n.next=_r,_r=n}function zc(){If++}function Vc(){if(--If>0)return;if(xr){let e=xr;for(xr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;_r;){let e=_r;for(_r=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Uf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ff(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Hc(i),Kp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Ml(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Of(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Of(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ar)||(n.globalVersion=Ar,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ml(n))))return;n.flags|=2;const e=n.dep,t=St,i=Ln;St=n,Ln=!0;try{Uf(n);const s=n.fn(n._value);(e.version===0||Di(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{St=t,Ln=i,Ff(n),n.flags&=-3}}function Hc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Hc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Kp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ln=!0;const Bf=[];function di(){Bf.push(Ln),Ln=!1}function pi(){const n=Bf.pop();Ln=n===void 0?!0:n}function Cu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=St;St=void 0;try{e()}finally{St=t}}}let Ar=0;class Jp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!St||!Ln||St===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==St)t=this.activeLink=new Jp(St,this),St.deps?(t.prevDep=St.depsTail,St.depsTail.nextDep=t,St.depsTail=t):St.deps=St.depsTail=t,kf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=St.depsTail,t.nextDep=void 0,St.depsTail.nextDep=t,St.depsTail=t,St.deps===t&&(St.deps=i)}return t}trigger(e){this.version++,Ar++,this.notify(e)}notify(e){zc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Vc()}}}function kf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)kf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Sl=new WeakMap,is=Symbol(""),El=Symbol(""),Cr=Symbol("");function Xt(n,e,t){if(Ln&&St){let i=Sl.get(n);i||Sl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Gc),s.map=i,s.key=t),s.track()}}function li(n,e,t,i,s,r){const o=Sl.get(n);if(!o){Ar++;return}const a=l=>{l&&l.trigger()};if(zc(),e==="clear")o.forEach(a);else{const l=Xe(n),c=l&&Bc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Cr||!Fi(d)&&d>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Cr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(is)),Bs(n)&&a(o.get(El)));break;case"delete":l||(a(o.get(is)),Bs(n)&&a(o.get(El)));break;case"set":Bs(n)&&a(o.get(is));break}}Vc()}function ds(n){const e=ot(n);return e===n?e:(Xt(e,"iterate",Cr),wn(n)?e:e.map(In))}function aa(n){return Xt(n=ot(n),"iterate",Cr),n}function wi(n,e){return mi(n)?Xs(ss(n)?In(e):e):In(e)}const Zp={__proto__:null,[Symbol.iterator](){return Ra(this,Symbol.iterator,n=>wi(this,n))},concat(...n){return ds(this).concat(...n.map(e=>Xe(e)?ds(e):e))},entries(){return Ra(this,"entries",n=>(n[1]=wi(this,n[1]),n))},every(n,e){return Zn(this,"every",n,e,void 0,arguments)},filter(n,e){return Zn(this,"filter",n,e,t=>t.map(i=>wi(this,i)),arguments)},find(n,e){return Zn(this,"find",n,e,t=>wi(this,t),arguments)},findIndex(n,e){return Zn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Zn(this,"findLast",n,e,t=>wi(this,t),arguments)},findLastIndex(n,e){return Zn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Zn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Pa(this,"includes",n)},indexOf(...n){return Pa(this,"indexOf",n)},join(n){return ds(this).join(n)},lastIndexOf(...n){return Pa(this,"lastIndexOf",n)},map(n,e){return Zn(this,"map",n,e,void 0,arguments)},pop(){return nr(this,"pop")},push(...n){return nr(this,"push",n)},reduce(n,...e){return Ru(this,"reduce",n,e)},reduceRight(n,...e){return Ru(this,"reduceRight",n,e)},shift(){return nr(this,"shift")},some(n,e){return Zn(this,"some",n,e,void 0,arguments)},splice(...n){return nr(this,"splice",n)},toReversed(){return ds(this).toReversed()},toSorted(n){return ds(this).toSorted(n)},toSpliced(...n){return ds(this).toSpliced(...n)},unshift(...n){return nr(this,"unshift",n)},values(){return Ra(this,"values",n=>wi(this,n))}};function Ra(n,e,t){const i=aa(n),s=i[e]();return i!==n&&!wn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Qp=Array.prototype;function Zn(n,e,t,i,s,r){const o=aa(n),a=o!==n&&!wn(n),l=o[e];if(l!==Qp[e]){const h=l.apply(n,r);return a?In(h):h}let c=t;o!==n&&(a?c=function(h,d){return t.call(this,wi(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ru(n,e,t,i){const s=aa(n);let r=t;return s!==n&&(wn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,wi(n,a),l,n)}),s[e](r,...i)}function Pa(n,e,t){const i=ot(n);Xt(i,"iterate",Cr);const s=i[e](...t);return(s===-1||s===!1)&&Yc(t[0])?(t[0]=ot(t[0]),i[e](...t)):s}function nr(n,e,t=[]){di(),zc();const i=ot(n)[e].apply(n,t);return Vc(),pi(),i}const em=Uc("__proto__,__v_isRef,__isVue"),zf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fi));function tm(n){Fi(n)||(n=String(n));const e=ot(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class Vf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?hm:Xf:r?Wf:Gf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Xe(e);if(!s){let l;if(o&&(l=Zp[t]))return l;if(t==="hasOwnProperty")return tm}const a=Reflect.get(e,t,Ut(e)?e:i);if((Fi(t)?zf.has(t):em(t))||(s||Xt(e,"get",t),r))return a;if(Ut(a)){const l=o&&Bc(t)?a:a.value;return s&&Tt(l)?wl(l):l}return Tt(a)?s?wl(a):Xc(a):a}}class Hf extends Vf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Xe(e)&&Bc(t);if(!this._isShallow){const c=mi(r);if(!wn(i)&&!mi(i)&&(r=ot(r),i=ot(i)),!o&&Ut(r)&&!Ut(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:at(e,t),l=Reflect.set(e,t,i,Ut(e)?e:s);return e===ot(s)&&(a?Di(i,r)&&li(e,"set",t,i):li(e,"add",t,i)),l}deleteProperty(e,t){const i=at(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&li(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Fi(t)||!zf.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",Xe(e)?"length":is),Reflect.ownKeys(e)}}class nm extends Vf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const im=new Hf,sm=new nm,rm=new Hf(!0);const Tl=n=>n,Xr=n=>Reflect.getPrototypeOf(n);function om(n,e,t){return function(...i){const s=this.__v_raw,r=ot(s),o=Bs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Tl:e?Xs:In;return!e&&Xt(r,"iterate",l?El:is),Ft(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function jr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function am(n,e){const t={get(s){const r=this.__v_raw,o=ot(r),a=ot(s);n||(Di(s,a)&&Xt(o,"get",s),Xt(o,"get",a));const{has:l}=Xr(o),c=e?Tl:n?Xs:In;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xt(ot(s),"iterate",is),s.size},has(s){const r=this.__v_raw,o=ot(r),a=ot(s);return n||(Di(s,a)&&Xt(o,"has",s),Xt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ot(a),c=e?Tl:n?Xs:In;return!n&&Xt(l,"iterate",is),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ft(t,n?{add:jr("add"),set:jr("set"),delete:jr("delete"),clear:jr("clear")}:{add(s){!e&&!wn(s)&&!mi(s)&&(s=ot(s));const r=ot(this);return Xr(r).has.call(r,s)||(r.add(s),li(r,"add",s,s)),this},set(s,r){!e&&!wn(r)&&!mi(r)&&(r=ot(r));const o=ot(this),{has:a,get:l}=Xr(o);let c=a.call(o,s);c||(s=ot(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Di(r,u)&&li(o,"set",s,r):li(o,"add",s,r),this},delete(s){const r=ot(this),{has:o,get:a}=Xr(r);let l=o.call(r,s);l||(s=ot(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&li(r,"delete",s,void 0),c},clear(){const s=ot(this),r=s.size!==0,o=s.clear();return r&&li(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=om(s,n,e)}),t}function Wc(n,e){const t=am(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(at(t,s)&&s in i?t:i,s,r)}const lm={get:Wc(!1,!1)},cm={get:Wc(!1,!0)},um={get:Wc(!0,!1)};const Gf=new WeakMap,Wf=new WeakMap,Xf=new WeakMap,hm=new WeakMap;function fm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dm(n){return n.__v_skip||!Object.isExtensible(n)?0:fm(Bp(n))}function Xc(n){return mi(n)?n:jc(n,!1,im,lm,Gf)}function pm(n){return jc(n,!1,rm,cm,Wf)}function wl(n){return jc(n,!0,sm,um,Xf)}function jc(n,e,t,i,s){if(!Tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=dm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function ss(n){return mi(n)?ss(n.__v_raw):!!(n&&n.__v_isReactive)}function mi(n){return!!(n&&n.__v_isReadonly)}function wn(n){return!!(n&&n.__v_isShallow)}function Yc(n){return n?!!n.__v_raw:!1}function ot(n){const e=n&&n.__v_raw;return e?ot(e):n}function mm(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&Cf(n,"__v_skip",!0),n}const In=n=>Tt(n)?Xc(n):n,Xs=n=>Tt(n)?wl(n):n;function Ut(n){return n?n.__v_isRef===!0:!1}function gt(n){return gm(n,!1)}function gm(n,e){return Ut(n)?n:new _m(n,e)}class _m{constructor(e,t){this.dep=new Gc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ot(e),this._value=t?e:In(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||wn(e)||mi(e);e=i?e:ot(e),Di(e,t)&&(this._rawValue=e,this._value=i?e:In(e),this.dep.trigger())}}function $(n){return Ut(n)?n.value:n}const xm={get:(n,e,t)=>e==="__v_raw"?n:$(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ut(s)&&!Ut(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function jf(n){return ss(n)?n:new Proxy(n,xm)}class vm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Gc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&St!==this)return Nf(this,!0),!0}get value(){const e=this.dep.track();return Of(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ym(n,e,t=!1){let i,s;return Ke(n)?i=n:(i=n.get,s=n.set),new vm(i,s,t)}const Yr={},ko=new WeakMap;let Ki;function bm(n,e=!1,t=Ki){if(t){let i=ko.get(t);i||ko.set(t,i=[]),i.push(n)}}function Mm(n,e,t=vt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:wn(M)||s===!1||s===0?ci(M,1):ci(M);let u,h,d,p,_=!1,x=!1;if(Ut(n)?(h=()=>n.value,_=wn(n)):ss(n)?(h=()=>c(n),_=!0):Xe(n)?(x=!0,_=n.some(M=>ss(M)||wn(M)),h=()=>n.map(M=>{if(Ut(M))return M.value;if(ss(M))return c(M);if(Ke(M))return l?l(M,2):M()})):Ke(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){di();try{d()}finally{pi()}}const M=Ki;Ki=u;try{return l?l(n,3,[p]):n(p)}finally{Ki=M}}:h=jn,e&&s){const M=h,T=s===!0?1/0:s;h=()=>ci(M(),T)}const m=$p(),f=()=>{u.stop(),m&&m.active&&Oc(m.effects,u)};if(r&&e){const M=e;e=(...T)=>{M(...T),f()}}let w=x?new Array(n.length).fill(Yr):Yr;const C=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const T=u.run();if(s||_||(x?T.some((P,L)=>Di(P,w[L])):Di(T,w))){d&&d();const P=Ki;Ki=u;try{const L=[T,w===Yr?void 0:x&&w[0]===Yr?[]:w,p];w=T,l?l(e,3,L):e(...L)}finally{Ki=P}}}else u.run()};return a&&a(C),u=new Lf(h),u.scheduler=o?()=>o(C,!1):C,p=M=>bm(M,!1,u),d=u.onStop=()=>{const M=ko.get(u);if(M){if(l)l(M,4);else for(const T of M)T();ko.delete(u)}},e?i?C(!0):w=u.run():o?o(C.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function ci(n,e=1/0,t){if(e<=0||!Tt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ut(n))ci(n.value,e,t);else if(Xe(n))for(let i=0;i<n.length;i++)ci(n[i],e,t);else if(Ef(n)||Bs(n))n.forEach(i=>{ci(i,e,t)});else if(Af(n)){for(const i in n)ci(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ci(n[i],e,t)}return n}function Br(n,e,t,i){try{return i?n(...i):n()}catch(s){la(s,e,t)}}function Nn(n,e,t,i){if(Ke(n)){const s=Br(n,e,t,i);return s&&Tf(s)&&s.catch(r=>{la(r,e,t)}),s}if(Xe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Nn(n[r],e,t,i));return s}}function la(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){di(),Br(r,null,10,[n,l,c]),pi();return}}Sm(n,t,s,i,o)}function Sm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const en=[];let kn=-1;const ks=[];let Ai=null,Ns=0;const Yf=Promise.resolve();let zo=null;function qf(n){const e=zo||Yf;return n?e.then(this?n.bind(this):n):e}function Em(n){let e=kn+1,t=en.length;for(;e<t;){const i=e+t>>>1,s=en[i],r=Rr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function qc(n){if(!(n.flags&1)){const e=Rr(n),t=en[en.length-1];!t||!(n.flags&2)&&e>=Rr(t)?en.push(n):en.splice(Em(e),0,n),n.flags|=1,$f()}}function $f(){zo||(zo=Yf.then(Jf))}function Tm(n){Xe(n)?ks.push(...n):Ai&&n.id===-1?Ai.splice(Ns+1,0,n):n.flags&1||(ks.push(n),n.flags|=1),$f()}function Pu(n,e,t=kn+1){for(;t<en.length;t++){const i=en[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Kf(n){if(ks.length){const e=[...new Set(ks)].sort((t,i)=>Rr(t)-Rr(i));if(ks.length=0,Ai){Ai.push(...e);return}for(Ai=e,Ns=0;Ns<Ai.length;Ns++){const t=Ai[Ns];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ai=null,Ns=0}}const Rr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Jf(n){try{for(kn=0;kn<en.length;kn++){const e=en[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Br(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<en.length;kn++){const e=en[kn];e&&(e.flags&=-2)}kn=-1,en.length=0,Kf(),zo=null,(en.length||ks.length)&&Jf()}}let _n=null,Zf=null;function Vo(n){const e=_n;return _n=n,Zf=n&&n.type.__scopeId||null,e}function zs(n,e=_n,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Wo(-1);const r=Vo(e);let o;try{o=n(...s)}finally{Vo(r),i._d&&Wo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Al(n,e){if(_n===null)return n;const t=da(_n),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=vt]=e[s];r&&(Ke(r)&&(r={mounted:r,updated:r}),r.deep&&ci(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function zi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(di(),Nn(l,t,8,[n.el,a,n,e]),pi())}}function wm(n,e){if(jt){let t=jt.provides;const i=jt.parent&&jt.parent.provides;i===t&&(t=jt.provides=Object.create(i)),t[n]=e}}function wo(n,e,t=!1){const i=Pd();if(i||Vs){let s=Vs?Vs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ke(e)?e.call(i&&i.proxy):e}}const Am=Symbol.for("v-scx"),Cm=()=>wo(Am);function Li(n,e,t){return Qf(n,e,t)}function Qf(n,e,t=vt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ft({},t),l=e&&i||!e&&r!=="post";let c;if(Lr){if(r==="sync"){const p=Cm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=jn,p.resume=jn,p.pause=jn,p}}const u=jt;a.call=(p,_,x)=>Nn(p,u,_,x);let h=!1;r==="post"?a.scheduler=p=>{Qt(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,_)=>{_?p():qc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Mm(n,e,a);return Lr&&(c?c.push(d):l&&d()),d}function Rm(n,e,t){const i=this.proxy,s=Pt(n)?n.includes(".")?ed(i,n):()=>i[n]:n.bind(i,i);let r;Ke(e)?r=e:(r=e.handler,t=e);const o=kr(this),a=Qf(s,r.bind(i),t);return o(),a}function ed(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const td=Symbol("_vte"),nd=n=>n.__isTeleport,vr=n=>n&&(n.disabled||n.disabled===""),Du=n=>n&&(n.defer||n.defer===""),Lu=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Iu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Cl=(n,e)=>{const t=n&&n.to;return Pt(t)?e?e(t):null:t},id={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:p,querySelector:_,createText:x,createComment:m}}=c,f=vr(e.props);let{shapeFlag:w,children:C,dynamicChildren:M}=e;if(n==null){const T=e.el=x(""),P=e.anchor=x("");p(T,t,i),p(P,t,i);const L=(v,S)=>{w&16&&u(C,v,S,s,r,o,a,l)},k=()=>{const v=e.target=Cl(e.props,_),S=sd(v,e,x,p);v&&(o!=="svg"&&Lu(v)?o="svg":o!=="mathml"&&Iu(v)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(v),f||(L(v,S),Ao(e,!1)))};f&&(L(t,P),Ao(e,!0)),Du(e.props)?(e.el.__isMounted=!1,Qt(()=>{k(),delete e.el.__isMounted},r)):k()}else{if(Du(e.props)&&n.el.__isMounted===!1){Qt(()=>{id.process(n,e,t,i,s,r,o,a,l,c)},r);return}e.el=n.el,e.targetStart=n.targetStart;const T=e.anchor=n.anchor,P=e.target=n.target,L=e.targetAnchor=n.targetAnchor,k=vr(n.props),v=k?t:P,S=k?T:L;if(o==="svg"||Lu(P)?o="svg":(o==="mathml"||Iu(P))&&(o="mathml"),M?(d(n.dynamicChildren,M,v,s,r,o,a),Zc(n,e,!0)):l||h(n,e,v,S,s,r,o,a,!1),f)k?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):qr(e,t,T,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const D=e.target=Cl(e.props,_);D&&qr(e,D,null,c,0)}else k&&qr(e,P,L,c,1);Ao(e,f)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:d}=n;if(h&&(s(c),s(u)),r&&s(l),o&16){const p=r||!vr(d);for(let _=0;_<a.length;_++){const x=a[_];i(x,e,t,p,!!x.dynamicChildren)}}},move:qr,hydrate:Pm};function qr(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,h=r===2;if(h&&i(o,e,t),(!h||vr(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,t,2);h&&i(a,e,t)}function Pm(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){function d(x,m,f,w){m.anchor=h(o(x),m,a(x),t,i,s,r),m.targetStart=f,m.targetAnchor=w}const p=e.target=Cl(e.props,l),_=vr(e.props);if(p){const x=p._lpa||p.firstChild;if(e.shapeFlag&16)if(_)d(n,e,x,x&&o(x));else{e.anchor=o(n);let m=x;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||sd(p,e,u,c),h(x&&o(x),e,p,t,i,s,r)}Ao(e,_)}else _&&e.shapeFlag&16&&d(n,e,n,o(n));return e.anchor&&o(e.anchor)}const $c=id;function Ao(n,e){const t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function sd(n,e,t,i){const s=e.targetStart=t(""),r=e.targetAnchor=t("");return s[td]=r,n&&(i(s,n),i(r,n)),r}const oi=Symbol("_leaveCb"),$r=Symbol("_enterCb");function Dm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zs(()=>{n.isMounted=!0}),fd(()=>{n.isUnmounting=!0}),n}const Sn=[Function,Array],rd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},od=n=>{const e=n.subTree;return e.component?od(e.component):e},Lm={name:"BaseTransition",props:rd,setup(n,{slots:e}){const t=Pd(),i=Dm();return()=>{const s=e.default&&cd(e.default(),!0);if(!s||!s.length)return;const r=ad(s),o=ot(n),{mode:a}=o;if(i.isLeaving)return Da(r);const l=Nu(r);if(!l)return Da(r);let c=Rl(l,o,i,t,h=>c=h);l.type!==tn&&Pr(l,c);let u=t.subTree&&Nu(t.subTree);if(u&&u.type!==tn&&!Ji(u,l)&&od(t).type!==tn){let h=Rl(u,o,i,t);if(Pr(u,h),a==="out-in"&&l.type!==tn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},Da(r);a==="in-out"&&l.type!==tn?h.delayLeave=(d,p,_)=>{const x=ld(i,u);x[String(u.key)]=u,d[oi]=()=>{p(),d[oi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function ad(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==tn){e=t;break}}return e}const Im=Lm;function ld(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Rl(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:m,onAppear:f,onAfterAppear:w,onAppearCancelled:C}=e,M=String(n.key),T=ld(t,n),P=(v,S)=>{v&&Nn(v,i,9,S)},L=(v,S)=>{const D=S[1];P(v,S),Xe(v)?v.every(N=>N.length<=1)&&D():v.length<=1&&D()},k={mode:o,persisted:a,beforeEnter(v){let S=l;if(!t.isMounted)if(r)S=m||l;else return;v[oi]&&v[oi](!0);const D=T[M];D&&Ji(n,D)&&D.el[oi]&&D.el[oi](),P(S,[v])},enter(v){let S=c,D=u,N=h;if(!t.isMounted)if(r)S=f||c,D=w||u,N=C||h;else return;let H=!1;const re=v[$r]=oe=>{H||(H=!0,oe?P(N,[v]):P(D,[v]),k.delayedLeave&&k.delayedLeave(),v[$r]=void 0)};S?L(S,[v,re]):re()},leave(v,S){const D=String(n.key);if(v[$r]&&v[$r](!0),t.isUnmounting)return S();P(d,[v]);let N=!1;const H=v[oi]=re=>{N||(N=!0,S(),re?P(x,[v]):P(_,[v]),v[oi]=void 0,T[D]===n&&delete T[D])};T[D]=n,p?L(p,[v,H]):H()},clone(v){const S=Rl(v,e,t,i,s);return s&&s(S),S}};return k}function Da(n){if(ca(n))return n=Ni(n),n.children=null,n}function Nu(n){if(!ca(n))return nd(n.type)&&n.children?ad(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ke(t.default))return t.default()}}function Pr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Pr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function cd(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Lt?(o.patchFlag&128&&s++,i=i.concat(cd(o.children,e,a))):(e||o.type!==tn)&&i.push(a!=null?Ni(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Un(n,e){return Ke(n)?Ft({name:n.name},e,{setup:n}):n}function ud(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Ho=new WeakMap;function yr(n,e,t,i,s=!1){if(Xe(n)){n.forEach((_,x)=>yr(_,e&&(Xe(e)?e[x]:e),t,i,s));return}if(br(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&yr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?da(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,h=a.setupState,d=ot(h),p=h===vt?Sf:_=>at(d,_);if(c!=null&&c!==l){if(Uu(e),Pt(c))u[c]=null,p(c)&&(h[c]=null);else if(Ut(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(Ke(l))Br(l,a,12,[o,u]);else{const _=Pt(l),x=Ut(l);if(_||x){const m=()=>{if(n.f){const f=_?p(l)?h[l]:u[l]:l.value;if(s)Xe(f)&&Oc(f,r);else if(Xe(f))f.includes(r)||f.push(r);else if(_)u[l]=[r],p(l)&&(h[l]=u[l]);else{const w=[r];l.value=w,n.k&&(u[n.k]=w)}}else _?(u[l]=o,p(l)&&(h[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const f=()=>{m(),Ho.delete(n)};f.id=-1,Ho.set(n,f),Qt(f,t)}else Uu(n),m()}}}function Uu(n){const e=Ho.get(n);e&&(e.flags|=8,Ho.delete(n))}ra().requestIdleCallback;ra().cancelIdleCallback;const br=n=>!!n.type.__asyncLoader,ca=n=>n.type.__isKeepAlive;function Nm(n,e){hd(n,"a",e)}function Um(n,e){hd(n,"da",e)}function hd(n,e,t=jt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ua(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ca(s.parent.vnode)&&Fm(i,e,t,s),s=s.parent}}function Fm(n,e,t,i){const s=ua(e,n,i,!0);Qs(()=>{Oc(i[e],s)},t)}function ua(n,e,t=jt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{di();const a=kr(t),l=Nn(e,t,n,o);return a(),pi(),l});return i?s.unshift(r):s.push(r),r}}const _i=n=>(e,t=jt)=>{(!Lr||n==="sp")&&ua(n,(...i)=>e(...i),t)},Om=_i("bm"),Zs=_i("m"),Bm=_i("bu"),km=_i("u"),fd=_i("bum"),Qs=_i("um"),zm=_i("sp"),Vm=_i("rtg"),Hm=_i("rtc");function Gm(n,e=jt){ua("ec",n,e)}const Wm="components";function Xm(n,e){return Ym(Wm,n,!0,e)||n}const jm=Symbol.for("v-ndc");function Ym(n,e,t=!0,i=!1){const s=_n||jt;if(s){const r=s.type;{const a=D0(r,!1);if(a&&(a===e||a===An(e)||a===sa(An(e))))return r}const o=Fu(s[n]||r[n],e)||Fu(s.appContext[n],e);return!o&&i?r:o}}function Fu(n,e){return n&&(n[e]||n[An(e)]||n[sa(An(e))])}function os(n,e,t,i){let s;const r=t,o=Xe(n);if(o||Pt(n)){const a=o&&ss(n);let l=!1,c=!1;a&&(l=!wn(n),c=mi(n),n=aa(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Xs(In(n[u])):In(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Tt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Pl=n=>n?Dd(n)?da(n):Pl(n.parent):null,Mr=Ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pl(n.parent),$root:n=>Pl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>pd(n),$forceUpdate:n=>n.f||(n.f=()=>{qc(n.update)}),$nextTick:n=>n.n||(n.n=qf.bind(n.proxy)),$watch:n=>Rm.bind(n)}),La=(n,e)=>n!==vt&&!n.__isScriptSetup&&at(n,e),qm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(La(i,e))return o[e]=1,i[e];if(s!==vt&&at(s,e))return o[e]=2,s[e];if(at(r,e))return o[e]=3,r[e];if(t!==vt&&at(t,e))return o[e]=4,t[e];Dl&&(o[e]=0)}}const c=Mr[e];let u,h;if(c)return e==="$attrs"&&Xt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==vt&&at(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,at(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return La(s,e)?(s[e]=t,!0):i!==vt&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==vt&&a[0]!=="$"&&at(n,a)||La(e,a)||at(r,a)||at(i,a)||at(Mr,a)||at(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ou(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Dl=!0;function $m(n){const e=pd(n),t=n.proxy,i=n.ctx;Dl=!1,e.beforeCreate&&Bu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:f,beforeUnmount:w,destroyed:C,unmounted:M,render:T,renderTracked:P,renderTriggered:L,errorCaptured:k,serverPrefetch:v,expose:S,inheritAttrs:D,components:N,directives:H,filters:re}=e;if(c&&Km(c,i,null),o)for(const V in o){const ie=o[V];Ke(ie)&&(i[V]=ie.bind(t))}if(s){const V=s.call(t,t);Tt(V)&&(n.data=Xc(V))}if(Dl=!0,r)for(const V in r){const ie=r[V],ve=Ke(ie)?ie.bind(t,t):Ke(ie.get)?ie.get.bind(t,t):jn,xe=!Ke(ie)&&Ke(ie.set)?ie.set.bind(t):jn,Ee=_t({get:ve,set:xe});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Ge=>Ee.value=Ge})}if(a)for(const V in a)dd(a[V],i,t,V);if(l){const V=Ke(l)?l.call(t):l;Reflect.ownKeys(V).forEach(ie=>{wm(ie,V[ie])})}u&&Bu(u,n,"c");function Z(V,ie){Xe(ie)?ie.forEach(ve=>V(ve.bind(t))):ie&&V(ie.bind(t))}if(Z(Om,h),Z(Zs,d),Z(Bm,p),Z(km,_),Z(Nm,x),Z(Um,m),Z(Gm,k),Z(Hm,P),Z(Vm,L),Z(fd,w),Z(Qs,M),Z(zm,v),Xe(S))if(S.length){const V=n.exposed||(n.exposed={});S.forEach(ie=>{Object.defineProperty(V,ie,{get:()=>t[ie],set:ve=>t[ie]=ve,enumerable:!0})})}else n.exposed||(n.exposed={});T&&n.render===jn&&(n.render=T),D!=null&&(n.inheritAttrs=D),N&&(n.components=N),H&&(n.directives=H),v&&ud(n)}function Km(n,e,t=jn){Xe(n)&&(n=Ll(n));for(const i in n){const s=n[i];let r;Tt(s)?"default"in s?r=wo(s.from||i,s.default,!0):r=wo(s.from||i):r=wo(s),Ut(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Bu(n,e,t){Nn(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function dd(n,e,t,i){let s=i.includes(".")?ed(t,i):()=>t[i];if(Pt(n)){const r=e[n];Ke(r)&&Li(s,r)}else if(Ke(n))Li(s,n.bind(t));else if(Tt(n))if(Xe(n))n.forEach(r=>dd(r,e,t,i));else{const r=Ke(n.handler)?n.handler.bind(t):e[n.handler];Ke(r)&&Li(s,r,n)}}function pd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Go(l,c,o,!0)),Go(l,e,o)),Tt(e)&&r.set(e,l),l}function Go(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Go(n,r,t,!0),s&&s.forEach(o=>Go(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Jm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Jm={data:ku,props:zu,emits:zu,methods:dr,computed:dr,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:dr,directives:dr,watch:Qm,provide:ku,inject:Zm};function ku(n,e){return e?n?function(){return Ft(Ke(n)?n.call(this,this):n,Ke(e)?e.call(this,this):e)}:e:n}function Zm(n,e){return dr(Ll(n),Ll(e))}function Ll(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Jt(n,e){return n?[...new Set([].concat(n,e))]:e}function dr(n,e){return n?Ft(Object.create(null),n,e):e}function zu(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:Ft(Object.create(null),Ou(n),Ou(e??{})):e}function Qm(n,e){if(!n)return e;if(!e)return n;const t=Ft(Object.create(null),n);for(const i in e)t[i]=Jt(n[i],e[i]);return t}function md(){return{app:null,config:{isNativeTag:Sf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let e0=0;function t0(n,e){return function(i,s=null){Ke(i)||(i=Ft({},i)),s!=null&&!Tt(s)&&(s=null);const r=md(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:e0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:N0,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ke(u.install)?(o.add(u),u.install(c,...h)):Ke(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||yt(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,da(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Vs;Vs=c;try{return u()}finally{Vs=h}}};return c}}let Vs=null;const n0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${An(e)}Modifiers`]||n[`${Oi(e)}Modifiers`];function i0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||vt;let s=t;const r=e.startsWith("update:"),o=r&&n0(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Pt(u)?u.trim():u)),o.number&&(s=t.map(kc)));let a,l=i[a=wa(e)]||i[a=wa(An(e))];!l&&r&&(l=i[a=wa(Oi(e))]),l&&Nn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Nn(c,n,6,s)}}const s0=new WeakMap;function gd(n,e,t=!1){const i=t?s0:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ke(n)){const l=c=>{const u=gd(c,e,!0);u&&(a=!0,Ft(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Tt(n)&&i.set(n,null),null):(Xe(r)?r.forEach(l=>o[l]=null):Ft(o,r),Tt(n)&&i.set(n,o),o)}function ha(n,e){return!n||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,Oi(e))||at(n,e))}function Vu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:_,inheritAttrs:x}=n,m=Vo(n);let f,w;try{if(t.shapeFlag&4){const M=s||i,T=M;f=zn(c.call(T,M,u,h,p,d,_)),w=a}else{const M=e;f=zn(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),w=e.props?a:r0(a)}}catch(M){Sr.length=0,la(M,n,1),f=yt(tn)}let C=f;if(w&&x!==!1){const M=Object.keys(w),{shapeFlag:T}=C;M.length&&T&7&&(r&&M.some(Fc)&&(w=o0(w,r)),C=Ni(C,w,!1,!0))}return t.dirs&&(C=Ni(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&Pr(C,t.transition),f=C,Vo(m),f}const r0=n=>{let e;for(const t in n)(t==="class"||t==="style"||ta(t))&&((e||(e={}))[t]=n[t]);return e},o0=(n,e)=>{const t={};for(const i in n)(!Fc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function a0(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Hu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!ha(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Hu(i,o,c):!0:!!o;return!1}function Hu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ha(t,r))return!0}return!1}function l0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const _d={},xd=()=>Object.create(_d),vd=n=>Object.getPrototypeOf(n)===_d;function c0(n,e,t,i=!1){const s={},r=xd();n.propsDefaults=Object.create(null),yd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:pm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function u0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ot(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ha(n.emitsOptions,d))continue;const p=e[d];if(l)if(at(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=An(d);s[_]=Il(l,a,_,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{yd(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!at(e,h)&&((u=Oi(h))===h||!at(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Il(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!at(e,h))&&(delete r[h],c=!0)}c&&li(n.attrs,"set","")}function yd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(gr(l))continue;const c=e[l];let u;s&&at(s,u=An(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ha(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ot(t),c=a||vt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Il(s,l,h,c[h],n,!at(c,h))}}return o}function Il(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ke(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=kr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Oi(t))&&(i=!0))}return i}const h0=new WeakMap;function bd(n,e,t=!1){const i=t?h0:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ke(n)){const u=h=>{l=!0;const[d,p]=bd(h,e,!0);Ft(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Tt(n)&&i.set(n,Os),Os;if(Xe(r))for(let u=0;u<r.length;u++){const h=An(r[u]);Gu(h)&&(o[h]=vt)}else if(r)for(const u in r){const h=An(u);if(Gu(h)){const d=r[u],p=o[h]=Xe(d)||Ke(d)?{type:d}:Ft({},d),_=p.type;let x=!1,m=!0;if(Xe(_))for(let f=0;f<_.length;++f){const w=_[f],C=Ke(w)&&w.name;if(C==="Boolean"){x=!0;break}else C==="String"&&(m=!1)}else x=Ke(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||at(p,"default"))&&a.push(h)}}const c=[o,a];return Tt(n)&&i.set(n,c),c}function Gu(n){return n[0]!=="$"&&!gr(n)}const Kc=n=>n==="_"||n==="_ctx"||n==="$stable",Jc=n=>Xe(n)?n.map(zn):[zn(n)],f0=(n,e,t)=>{if(e._n)return e;const i=zs((...s)=>Jc(e(...s)),t);return i._c=!1,i},Md=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Kc(s))continue;const r=n[s];if(Ke(r))e[s]=f0(s,r,i);else if(r!=null){const o=Jc(r);e[s]=()=>o}}},Sd=(n,e)=>{const t=Jc(e);n.slots.default=()=>t},Ed=(n,e,t)=>{for(const i in e)(t||!Kc(i))&&(n[i]=e[i])},d0=(n,e,t)=>{const i=n.slots=xd();if(n.vnode.shapeFlag&32){const s=e._;s?(Ed(i,e,t),t&&Cf(i,"_",s,!0)):Md(e,i)}else e&&Sd(n,e)},p0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Ed(s,e,t):(r=!e.$stable,Md(e,s)),o=e}else e&&(Sd(n,e),o={default:1});if(r)for(const a in s)!Kc(a)&&o[a]==null&&delete s[a]},Qt=v0;function m0(n){return g0(n)}function g0(n,e){const t=ra();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=jn,insertStaticContent:_}=n,x=(E,R,B,Y=null,G=null,K=null,A=void 0,le=null,te=!!R.dynamicChildren)=>{if(E===R)return;E&&!Ji(E,R)&&(Y=he(E),Ge(E,G,K,!0),E=null),R.patchFlag===-2&&(te=!1,R.dynamicChildren=null);const{type:q,ref:se,shapeFlag:y}=R;switch(q){case fa:m(E,R,B,Y);break;case tn:f(E,R,B,Y);break;case Na:E==null&&w(R,B,Y,A);break;case Lt:N(E,R,B,Y,G,K,A,le,te);break;default:y&1?T(E,R,B,Y,G,K,A,le,te):y&6?H(E,R,B,Y,G,K,A,le,te):(y&64||y&128)&&q.process(E,R,B,Y,G,K,A,le,te,ee)}se!=null&&G?yr(se,E&&E.ref,K,R||E,!R):se==null&&E&&E.ref!=null&&yr(E.ref,null,K,E,!0)},m=(E,R,B,Y)=>{if(E==null)i(R.el=a(R.children),B,Y);else{const G=R.el=E.el;R.children!==E.children&&c(G,R.children)}},f=(E,R,B,Y)=>{E==null?i(R.el=l(R.children||""),B,Y):R.el=E.el},w=(E,R,B,Y)=>{[E.el,E.anchor]=_(E.children,R,B,Y,E.el,E.anchor)},C=({el:E,anchor:R},B,Y)=>{let G;for(;E&&E!==R;)G=d(E),i(E,B,Y),E=G;i(R,B,Y)},M=({el:E,anchor:R})=>{let B;for(;E&&E!==R;)B=d(E),s(E),E=B;s(R)},T=(E,R,B,Y,G,K,A,le,te)=>{if(R.type==="svg"?A="svg":R.type==="math"&&(A="mathml"),E==null)P(R,B,Y,G,K,A,le,te);else{const q=E.el&&E.el._isVueCE?E.el:null;try{q&&q._beginPatch(),v(E,R,G,K,A,le,te)}finally{q&&q._endPatch()}}},P=(E,R,B,Y,G,K,A,le)=>{let te,q;const{props:se,shapeFlag:y,transition:g,dirs:I}=E;if(te=E.el=o(E.type,K,se&&se.is,se),y&8?u(te,E.children):y&16&&k(E.children,te,null,Y,G,Ia(E,K),A,le),I&&zi(E,null,Y,"created"),L(te,E,E.scopeId,A,Y),se){for(const ne in se)ne!=="value"&&!gr(ne)&&r(te,ne,null,se[ne],K,Y);"value"in se&&r(te,"value",null,se.value,K),(q=se.onVnodeBeforeMount)&&On(q,Y,E)}I&&zi(E,null,Y,"beforeMount");const j=_0(G,g);j&&g.beforeEnter(te),i(te,R,B),((q=se&&se.onVnodeMounted)||j||I)&&Qt(()=>{q&&On(q,Y,E),j&&g.enter(te),I&&zi(E,null,Y,"mounted")},G)},L=(E,R,B,Y,G)=>{if(B&&p(E,B),Y)for(let K=0;K<Y.length;K++)p(E,Y[K]);if(G){let K=G.subTree;if(R===K||Ad(K.type)&&(K.ssContent===R||K.ssFallback===R)){const A=G.vnode;L(E,A,A.scopeId,A.slotScopeIds,G.parent)}}},k=(E,R,B,Y,G,K,A,le,te=0)=>{for(let q=te;q<E.length;q++){const se=E[q]=le?Ci(E[q]):zn(E[q]);x(null,se,R,B,Y,G,K,A,le)}},v=(E,R,B,Y,G,K,A)=>{const le=R.el=E.el;let{patchFlag:te,dynamicChildren:q,dirs:se}=R;te|=E.patchFlag&16;const y=E.props||vt,g=R.props||vt;let I;if(B&&Vi(B,!1),(I=g.onVnodeBeforeUpdate)&&On(I,B,R,E),se&&zi(R,E,B,"beforeUpdate"),B&&Vi(B,!0),(y.innerHTML&&g.innerHTML==null||y.textContent&&g.textContent==null)&&u(le,""),q?S(E.dynamicChildren,q,le,B,Y,Ia(R,G),K):A||ie(E,R,le,null,B,Y,Ia(R,G),K,!1),te>0){if(te&16)D(le,y,g,B,G);else if(te&2&&y.class!==g.class&&r(le,"class",null,g.class,G),te&4&&r(le,"style",y.style,g.style,G),te&8){const j=R.dynamicProps;for(let ne=0;ne<j.length;ne++){const X=j[ne],Re=y[X],pe=g[X];(pe!==Re||X==="value")&&r(le,X,Re,pe,G,B)}}te&1&&E.children!==R.children&&u(le,R.children)}else!A&&q==null&&D(le,y,g,B,G);((I=g.onVnodeUpdated)||se)&&Qt(()=>{I&&On(I,B,R,E),se&&zi(R,E,B,"updated")},Y)},S=(E,R,B,Y,G,K,A)=>{for(let le=0;le<R.length;le++){const te=E[le],q=R[le],se=te.el&&(te.type===Lt||!Ji(te,q)||te.shapeFlag&198)?h(te.el):B;x(te,q,se,null,Y,G,K,A,!0)}},D=(E,R,B,Y,G)=>{if(R!==B){if(R!==vt)for(const K in R)!gr(K)&&!(K in B)&&r(E,K,R[K],null,G,Y);for(const K in B){if(gr(K))continue;const A=B[K],le=R[K];A!==le&&K!=="value"&&r(E,K,le,A,G,Y)}"value"in B&&r(E,"value",R.value,B.value,G)}},N=(E,R,B,Y,G,K,A,le,te)=>{const q=R.el=E?E.el:a(""),se=R.anchor=E?E.anchor:a("");let{patchFlag:y,dynamicChildren:g,slotScopeIds:I}=R;I&&(le=le?le.concat(I):I),E==null?(i(q,B,Y),i(se,B,Y),k(R.children||[],B,se,G,K,A,le,te)):y>0&&y&64&&g&&E.dynamicChildren&&E.dynamicChildren.length===g.length?(S(E.dynamicChildren,g,B,G,K,A,le),(R.key!=null||G&&R===G.subTree)&&Zc(E,R,!0)):ie(E,R,B,se,G,K,A,le,te)},H=(E,R,B,Y,G,K,A,le,te)=>{R.slotScopeIds=le,E==null?R.shapeFlag&512?G.ctx.activate(R,B,Y,A,te):re(R,B,Y,G,K,A,te):oe(E,R,te)},re=(E,R,B,Y,G,K,A)=>{const le=E.component=w0(E,Y,G);if(ca(E)&&(le.ctx.renderer=ee),A0(le,!1,A),le.asyncDep){if(G&&G.registerDep(le,Z,A),!E.el){const te=le.subTree=yt(tn);f(null,te,R,B),E.placeholder=te.el}}else Z(le,E,R,B,G,K,A)},oe=(E,R,B)=>{const Y=R.component=E.component;if(a0(E,R,B))if(Y.asyncDep&&!Y.asyncResolved){V(Y,R,B);return}else Y.next=R,Y.update();else R.el=E.el,Y.vnode=R},Z=(E,R,B,Y,G,K,A)=>{const le=()=>{if(E.isMounted){let{next:y,bu:g,u:I,parent:j,vnode:ne}=E;{const ke=Td(E);if(ke){y&&(y.el=ne.el,V(E,y,A)),ke.asyncDep.then(()=>{E.isUnmounted||le()});return}}let X=y,Re;Vi(E,!1),y?(y.el=ne.el,V(E,y,A)):y=ne,g&&To(g),(Re=y.props&&y.props.onVnodeBeforeUpdate)&&On(Re,j,y,ne),Vi(E,!0);const pe=Vu(E),Le=E.subTree;E.subTree=pe,x(Le,pe,h(Le.el),he(Le),E,G,K),y.el=pe.el,X===null&&l0(E,pe.el),I&&Qt(I,G),(Re=y.props&&y.props.onVnodeUpdated)&&Qt(()=>On(Re,j,y,ne),G)}else{let y;const{el:g,props:I}=R,{bm:j,m:ne,parent:X,root:Re,type:pe}=E,Le=br(R);Vi(E,!1),j&&To(j),!Le&&(y=I&&I.onVnodeBeforeMount)&&On(y,X,R),Vi(E,!0);{Re.ce&&Re.ce._def.shadowRoot!==!1&&Re.ce._injectChildStyle(pe);const ke=E.subTree=Vu(E);x(null,ke,B,Y,E,G,K),R.el=ke.el}if(ne&&Qt(ne,G),!Le&&(y=I&&I.onVnodeMounted)){const ke=R;Qt(()=>On(y,X,ke),G)}(R.shapeFlag&256||X&&br(X.vnode)&&X.vnode.shapeFlag&256)&&E.a&&Qt(E.a,G),E.isMounted=!0,R=B=Y=null}};E.scope.on();const te=E.effect=new Lf(le);E.scope.off();const q=E.update=te.run.bind(te),se=E.job=te.runIfDirty.bind(te);se.i=E,se.id=E.uid,te.scheduler=()=>qc(se),Vi(E,!0),q()},V=(E,R,B)=>{R.component=E;const Y=E.vnode.props;E.vnode=R,E.next=null,u0(E,R.props,Y,B),p0(E,R.children,B),di(),Pu(E),pi()},ie=(E,R,B,Y,G,K,A,le,te=!1)=>{const q=E&&E.children,se=E?E.shapeFlag:0,y=R.children,{patchFlag:g,shapeFlag:I}=R;if(g>0){if(g&128){xe(q,y,B,Y,G,K,A,le,te);return}else if(g&256){ve(q,y,B,Y,G,K,A,le,te);return}}I&8?(se&16&&ae(q,G,K),y!==q&&u(B,y)):se&16?I&16?xe(q,y,B,Y,G,K,A,le,te):ae(q,G,K,!0):(se&8&&u(B,""),I&16&&k(y,B,Y,G,K,A,le,te))},ve=(E,R,B,Y,G,K,A,le,te)=>{E=E||Os,R=R||Os;const q=E.length,se=R.length,y=Math.min(q,se);let g;for(g=0;g<y;g++){const I=R[g]=te?Ci(R[g]):zn(R[g]);x(E[g],I,B,null,G,K,A,le,te)}q>se?ae(E,G,K,!0,!1,y):k(R,B,Y,G,K,A,le,te,y)},xe=(E,R,B,Y,G,K,A,le,te)=>{let q=0;const se=R.length;let y=E.length-1,g=se-1;for(;q<=y&&q<=g;){const I=E[q],j=R[q]=te?Ci(R[q]):zn(R[q]);if(Ji(I,j))x(I,j,B,null,G,K,A,le,te);else break;q++}for(;q<=y&&q<=g;){const I=E[y],j=R[g]=te?Ci(R[g]):zn(R[g]);if(Ji(I,j))x(I,j,B,null,G,K,A,le,te);else break;y--,g--}if(q>y){if(q<=g){const I=g+1,j=I<se?R[I].el:Y;for(;q<=g;)x(null,R[q]=te?Ci(R[q]):zn(R[q]),B,j,G,K,A,le,te),q++}}else if(q>g)for(;q<=y;)Ge(E[q],G,K,!0),q++;else{const I=q,j=q,ne=new Map;for(q=j;q<=g;q++){const we=R[q]=te?Ci(R[q]):zn(R[q]);we.key!=null&&ne.set(we.key,q)}let X,Re=0;const pe=g-j+1;let Le=!1,ke=0;const de=new Array(pe);for(q=0;q<pe;q++)de[q]=0;for(q=I;q<=y;q++){const we=E[q];if(Re>=pe){Ge(we,G,K,!0);continue}let Ie;if(we.key!=null)Ie=ne.get(we.key);else for(X=j;X<=g;X++)if(de[X-j]===0&&Ji(we,R[X])){Ie=X;break}Ie===void 0?Ge(we,G,K,!0):(de[Ie-j]=q+1,Ie>=ke?ke=Ie:Le=!0,x(we,R[Ie],B,null,G,K,A,le,te),Re++)}const be=Le?x0(de):Os;for(X=be.length-1,q=pe-1;q>=0;q--){const we=j+q,Ie=R[we],ye=R[we+1],Je=we+1<se?ye.el||wd(ye):Y;de[q]===0?x(null,Ie,B,Je,G,K,A,le,te):Le&&(X<0||q!==be[X]?Ee(Ie,B,Je,2):X--)}}},Ee=(E,R,B,Y,G=null)=>{const{el:K,type:A,transition:le,children:te,shapeFlag:q}=E;if(q&6){Ee(E.component.subTree,R,B,Y);return}if(q&128){E.suspense.move(R,B,Y);return}if(q&64){A.move(E,R,B,ee);return}if(A===Lt){i(K,R,B);for(let y=0;y<te.length;y++)Ee(te[y],R,B,Y);i(E.anchor,R,B);return}if(A===Na){C(E,R,B);return}if(Y!==2&&q&1&&le)if(Y===0)le.beforeEnter(K),i(K,R,B),Qt(()=>le.enter(K),G);else{const{leave:y,delayLeave:g,afterLeave:I}=le,j=()=>{E.ctx.isUnmounted?s(K):i(K,R,B)},ne=()=>{K._isLeaving&&K[oi](!0),y(K,()=>{j(),I&&I()})};g?g(K,j,ne):ne()}else i(K,R,B)},Ge=(E,R,B,Y=!1,G=!1)=>{const{type:K,props:A,ref:le,children:te,dynamicChildren:q,shapeFlag:se,patchFlag:y,dirs:g,cacheIndex:I}=E;if(y===-2&&(G=!1),le!=null&&(di(),yr(le,null,B,E,!0),pi()),I!=null&&(R.renderCache[I]=void 0),se&256){R.ctx.deactivate(E);return}const j=se&1&&g,ne=!br(E);let X;if(ne&&(X=A&&A.onVnodeBeforeUnmount)&&On(X,R,E),se&6)lt(E.component,B,Y);else{if(se&128){E.suspense.unmount(B,Y);return}j&&zi(E,null,R,"beforeUnmount"),se&64?E.type.remove(E,R,B,ee,Y):q&&!q.hasOnce&&(K!==Lt||y>0&&y&64)?ae(q,R,B,!1,!0):(K===Lt&&y&384||!G&&se&16)&&ae(te,R,B),Y&&Ye(E)}(ne&&(X=A&&A.onVnodeUnmounted)||j)&&Qt(()=>{X&&On(X,R,E),j&&zi(E,null,R,"unmounted")},B)},Ye=E=>{const{type:R,el:B,anchor:Y,transition:G}=E;if(R===Lt){ft(B,Y);return}if(R===Na){M(E);return}const K=()=>{s(B),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(E.shapeFlag&1&&G&&!G.persisted){const{leave:A,delayLeave:le}=G,te=()=>A(B,K);le?le(E.el,K,te):te()}else K()},ft=(E,R)=>{let B;for(;E!==R;)B=d(E),s(E),E=B;s(R)},lt=(E,R,B)=>{const{bum:Y,scope:G,job:K,subTree:A,um:le,m:te,a:q}=E;Wu(te),Wu(q),Y&&To(Y),G.stop(),K&&(K.flags|=8,Ge(A,E,R,B)),le&&Qt(le,R),Qt(()=>{E.isUnmounted=!0},R)},ae=(E,R,B,Y=!1,G=!1,K=0)=>{for(let A=K;A<E.length;A++)Ge(E[A],R,B,Y,G)},he=E=>{if(E.shapeFlag&6)return he(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const R=d(E.anchor||E.el),B=R&&R[td];return B?d(B):R};let Ne=!1;const fe=(E,R,B)=>{let Y;E==null?R._vnode&&(Ge(R._vnode,null,null,!0),Y=R._vnode.component):x(R._vnode||null,E,R,null,null,null,B),R._vnode=E,Ne||(Ne=!0,Pu(Y),Kf(),Ne=!1)},ee={p:x,um:Ge,m:Ee,r:Ye,mt:re,mc:k,pc:ie,pbc:S,n:he,o:n};return{render:fe,hydrate:void 0,createApp:t0(fe)}}function Ia({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Vi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function _0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Zc(n,e,t=!1){const i=n.children,s=e.children;if(Xe(i)&&Xe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ci(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Zc(o,a)),a.type===fa&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(n.type===Lt?1:0)),a.type===tn&&!a.el&&(a.el=o.el)}}function x0(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Td(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Td(e)}function Wu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function wd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?wd(e.subTree):null}const Ad=n=>n.__isSuspense;function v0(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):Tm(n)}const Lt=Symbol.for("v-fgt"),fa=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Na=Symbol.for("v-stc"),Sr=[];let xn=null;function Te(n=!1){Sr.push(xn=n?null:[])}function y0(){Sr.pop(),xn=Sr[Sr.length-1]||null}let Dr=1;function Wo(n,e=!1){Dr+=n,n<0&&xn&&e&&(xn.hasOnce=!0)}function Cd(n){return n.dynamicChildren=Dr>0?xn||Os:null,y0(),Dr>0&&xn&&xn.push(n),n}function Ue(n,e,t,i,s,r){return Cd(F(n,e,t,i,s,r,!0))}function hi(n,e,t,i,s){return Cd(yt(n,e,t,i,s,!0))}function Xo(n){return n?n.__v_isVNode===!0:!1}function Ji(n,e){return n.type===e.type&&n.key===e.key}const Rd=({key:n})=>n??null,Co=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Pt(n)||Ut(n)||Ke(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function F(n,e=null,t=null,i=0,s=null,r=n===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Rd(e),ref:e&&Co(e),scopeId:Zf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return a?(Qc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Pt(t)?8:16),Dr>0&&!o&&xn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&xn.push(l),l}const yt=b0;function b0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===jm)&&(n=tn),Xo(n)){const a=Ni(n,e,!0);return t&&Qc(a,t),Dr>0&&!r&&xn&&(a.shapeFlag&6?xn[xn.indexOf(n)]=a:xn.push(a)),a.patchFlag=-2,a}if(L0(n)&&(n=n.__vccOpts),e){e=M0(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=ue(a)),Tt(l)&&(Yc(l)&&!Xe(l)&&(l=Ft({},l)),e.style=oa(l))}const o=Pt(n)?1:Ad(n)?128:nd(n)?64:Tt(n)?4:Ke(n)?2:0;return F(n,e,t,i,s,o,r,!0)}function M0(n){return n?Yc(n)||vd(n)?Ft({},n):n:null}function Ni(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?S0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Rd(c),ref:e&&e.ref?t&&r?Xe(r)?r.concat(Co(e)):[r,Co(e)]:Co(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Lt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ni(n.ssContent),ssFallback:n.ssFallback&&Ni(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Pr(u,l.clone(u)),u}function rs(n=" ",e=0){return yt(fa,null,n,e)}function wt(n="",e=!1){return e?(Te(),hi(tn,null,n)):yt(tn,null,n)}function zn(n){return n==null||typeof n=="boolean"?yt(tn):Xe(n)?yt(Lt,null,n.slice()):Xo(n)?Ci(n):yt(fa,null,String(n))}function Ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ni(n)}function Qc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Qc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!vd(e)?e._ctx=_n:s===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[rs(e)]):t=8);n.children=e,n.shapeFlag|=t}function S0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ue([e.class,i.class]));else if(s==="style")e.style=oa([e.style,i.style]);else if(ta(s)){const r=e[s],o=i[s];o&&r!==o&&!(Xe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function On(n,e,t,i=null){Nn(n,e,7,[t,i])}const E0=md();let T0=0;function w0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||E0,r={uid:T0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bd(i,s),emitsOptions:gd(i,s),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=i0.bind(null,r),n.ce&&n.ce(r),r}let jt=null;const Pd=()=>jt||_n;let jo,Nl;{const n=ra(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};jo=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),Nl=e("__VUE_SSR_SETTERS__",t=>Lr=t)}const kr=n=>{const e=jt;return jo(n),n.scope.on(),()=>{n.scope.off(),jo(e)}},Xu=()=>{jt&&jt.scope.off(),jo(null)};function Dd(n){return n.vnode.shapeFlag&4}let Lr=!1;function A0(n,e=!1,t=!1){e&&Nl(e);const{props:i,children:s}=n.vnode,r=Dd(n);c0(n,i,r,e),d0(n,s,t||e);const o=r?C0(n,e):void 0;return e&&Nl(!1),o}function C0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,qm);const{setup:i}=t;if(i){di();const s=n.setupContext=i.length>1?P0(n):null,r=kr(n),o=Br(i,n,0,[n.props,s]),a=Tf(o);if(pi(),r(),(a||n.sp)&&!br(n)&&ud(n),a){if(o.then(Xu,Xu),e)return o.then(l=>{ju(n,l)}).catch(l=>{la(l,n,0)});n.asyncDep=o}else ju(n,o)}else Ld(n)}function ju(n,e,t){Ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Tt(e)&&(n.setupState=jf(e)),Ld(n)}function Ld(n,e,t){const i=n.type;n.render||(n.render=i.render||jn);{const s=kr(n);di();try{$m(n)}finally{pi(),s()}}}const R0={get(n,e){return Xt(n,"get",""),n[e]}};function P0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,R0),slots:n.slots,emit:n.emit,expose:e}}function da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(jf(mm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Mr)return Mr[t](n)},has(e,t){return t in e||t in Mr}})):n.proxy}function D0(n,e=!0){return Ke(n)?n.displayName||n.name:n.name||e&&n.__name}function L0(n){return Ke(n)&&"__vccOpts"in n}const _t=(n,e)=>ym(n,e,Lr);function I0(n,e,t){try{Wo(-1);const i=arguments.length;return i===2?Tt(e)&&!Xe(e)?Xo(e)?yt(n,null,[e]):yt(n,e):yt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Xo(t)&&(t=[t]),yt(n,e,t))}finally{Wo(1)}}const N0="3.5.27";let Ul;const Yu=typeof window<"u"&&window.trustedTypes;if(Yu)try{Ul=Yu.createPolicy("vue",{createHTML:n=>n})}catch{}const Id=Ul?n=>Ul.createHTML(n):n=>n,U0="http://www.w3.org/2000/svg",F0="http://www.w3.org/1998/Math/MathML",ri=typeof document<"u"?document:null,qu=ri&&ri.createElement("template"),O0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ri.createElementNS(U0,n):e==="mathml"?ri.createElementNS(F0,n):t?ri.createElement(n,{is:t}):ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ri.createTextNode(n),createComment:n=>ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{qu.innerHTML=Id(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},vi="transition",ir="animation",Ir=Symbol("_vtc"),Nd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},B0=Ft({},rd,Nd),k0=n=>(n.displayName="Transition",n.props=B0,n),Er=k0((n,{slots:e})=>I0(Im,z0(n),e)),Hi=(n,e=[])=>{Xe(n)?n.forEach(t=>t(...e)):n&&n(...e)},$u=n=>n?Xe(n)?n.some(e=>e.length>1):n.length>1:!1;function z0(n){const e={};for(const N in n)N in Nd||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=V0(s),x=_&&_[0],m=_&&_[1],{onBeforeEnter:f,onEnter:w,onEnterCancelled:C,onLeave:M,onLeaveCancelled:T,onBeforeAppear:P=f,onAppear:L=w,onAppearCancelled:k=C}=e,v=(N,H,re,oe)=>{N._enterCancelled=oe,Gi(N,H?u:a),Gi(N,H?c:o),re&&re()},S=(N,H)=>{N._isLeaving=!1,Gi(N,h),Gi(N,p),Gi(N,d),H&&H()},D=N=>(H,re)=>{const oe=N?L:w,Z=()=>v(H,N,re);Hi(oe,[H,Z]),Ku(()=>{Gi(H,N?l:r),Qn(H,N?u:a),$u(oe)||Ju(H,i,x,Z)})};return Ft(e,{onBeforeEnter(N){Hi(f,[N]),Qn(N,r),Qn(N,o)},onBeforeAppear(N){Hi(P,[N]),Qn(N,l),Qn(N,c)},onEnter:D(!1),onAppear:D(!0),onLeave(N,H){N._isLeaving=!0;const re=()=>S(N,H);Qn(N,h),N._enterCancelled?(Qn(N,d),eh(N)):(eh(N),Qn(N,d)),Ku(()=>{N._isLeaving&&(Gi(N,h),Qn(N,p),$u(M)||Ju(N,i,m,re))}),Hi(M,[N,re])},onEnterCancelled(N){v(N,!1,void 0,!0),Hi(C,[N])},onAppearCancelled(N){v(N,!0,void 0,!0),Hi(k,[N])},onLeaveCancelled(N){S(N),Hi(T,[N])}})}function V0(n){if(n==null)return null;if(Tt(n))return[Ua(n.enter),Ua(n.leave)];{const e=Ua(n);return[e,e]}}function Ua(n){return Vp(n)}function Qn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ir]||(n[Ir]=new Set)).add(e)}function Gi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ir];t&&(t.delete(e),t.size||(n[Ir]=void 0))}function Ku(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let H0=0;function Ju(n,e,t,i){const s=n._endId=++H0,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=G0(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=p=>{p.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function G0(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${vi}Delay`),r=i(`${vi}Duration`),o=Zu(s,r),a=i(`${ir}Delay`),l=i(`${ir}Duration`),c=Zu(a,l);let u=null,h=0,d=0;e===vi?o>0&&(u=vi,h=o,d=r.length):e===ir?c>0&&(u=ir,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?vi:ir:null,d=u?u===vi?r.length:l.length:0);const p=u===vi&&/\b(?:transform|all)(?:,|$)/.test(i(`${vi}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:p}}function Zu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Qu(t)+Qu(n[i])))}function Qu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function eh(n){return(n?n.ownerDocument:document).body.offsetHeight}function W0(n,e,t){const i=n[Ir];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const th=Symbol("_vod"),X0=Symbol("_vsh"),j0=Symbol(""),Y0=/(?:^|;)\s*display\s*:/;function q0(n,e,t){const i=n.style,s=Pt(t);let r=!1;if(t&&!s){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ro(i,a,"")}else for(const o in e)t[o]==null&&Ro(i,o,"");for(const o in t)o==="display"&&(r=!0),Ro(i,o,t[o])}else if(s){if(e!==t){const o=i[j0];o&&(t+=";"+o),i.cssText=t,r=Y0.test(t)}}else e&&n.removeAttribute("style");th in n&&(n[th]=r?i.display:"",n[X0]&&(i.display="none"))}const nh=/\s*!important$/;function Ro(n,e,t){if(Xe(t))t.forEach(i=>Ro(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=$0(n,e);nh.test(t)?n.setProperty(Oi(i),t.replace(nh,""),"important"):n[i]=t}}const ih=["Webkit","Moz","ms"],Fa={};function $0(n,e){const t=Fa[e];if(t)return t;let i=An(e);if(i!=="filter"&&i in n)return Fa[e]=i;i=sa(i);for(let s=0;s<ih.length;s++){const r=ih[s]+i;if(r in n)return Fa[e]=r}return e}const sh="http://www.w3.org/1999/xlink";function rh(n,e,t,i,s,r=Yp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(sh,e.slice(6,e.length)):n.setAttributeNS(sh,e,t):t==null||r&&!Rf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Fi(t)?String(t):t)}function oh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Id(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Rf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Us(n,e,t,i){n.addEventListener(e,t,i)}function K0(n,e,t,i){n.removeEventListener(e,t,i)}const ah=Symbol("_vei");function J0(n,e,t,i,s=null){const r=n[ah]||(n[ah]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Z0(e);if(i){const c=r[e]=tg(i,s);Us(n,a,c,l)}else o&&(K0(n,a,o,l),r[e]=void 0)}}const lh=/(?:Once|Passive|Capture)$/;function Z0(n){let e;if(lh.test(n)){e={};let i;for(;i=n.match(lh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Oi(n.slice(2)),e]}let Oa=0;const Q0=Promise.resolve(),eg=()=>Oa||(Q0.then(()=>Oa=0),Oa=Date.now());function tg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Nn(ng(i,t.value),e,5,[i])};return t.value=n,t.attached=eg(),t}function ng(n,e){if(Xe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ch=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ig=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?W0(n,i,o):e==="style"?q0(n,t,i):ta(e)?Fc(e)||J0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sg(n,e,i,o))?(oh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Pt(i))?oh(n,An(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),rh(n,e,i,o))};function sg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ch(e)&&Ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ch(e)&&Pt(t)?!1:e in n}const uh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Xe(e)?t=>To(e,t):e};function rg(n){n.target.composing=!0}function hh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ba=Symbol("_assign");function fh(n,e,t){return e&&(n=n.trim()),t&&(n=kc(n)),n}const Fl={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Ba]=uh(s);const r=i||s.props&&s.props.type==="number";Us(n,e?"change":"input",o=>{o.target.composing||n[Ba](fh(n.value,t,r))}),(t||r)&&Us(n,"change",()=>{n.value=fh(n.value,t,r)}),e||(Us(n,"compositionstart",rg),Us(n,"compositionend",hh),Us(n,"change",hh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ba]=uh(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?kc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},og=["ctrl","shift","alt","meta"],ag={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>og.some(t=>n[`${t}Key`]&&!e.includes(t))},Ud=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=ag[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},lg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Yo=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Oi(s.key);if(e.some(o=>o===r||lg[o]===r))return n(s)}))},cg=Ft({patchProp:ig},O0);let dh;function ug(){return dh||(dh=m0(cg))}const hg=((...n)=>{const e=ug().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=dg(i);if(!s)return;const r=e._component;!Ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,fg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function fg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function dg(n){return Pt(n)?document.querySelector(n):n}const Po={light:{name:"light",label:"Claro",icon:"☀️",colors:{bgPrimary:"from-slate-50 via-primary-50/30 to-slate-100",bgSecondary:"bg-white/80",bgTertiary:"bg-slate-50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-soft-lg",textPrimary:"text-gray-900",textSecondary:"text-gray-700",textMuted:"text-gray-500",accent:"bg-primary-600",accentHover:"hover:bg-primary-700",accentLight:"bg-primary-100",success:"text-emerald-700",successLight:"bg-emerald-50 border-emerald-200",error:"text-red-700",errorLight:"bg-red-50 border-red-200",border:"border-gray-200",borderHover:"hover:border-gray-300",jsonString:"text-emerald-600",jsonNumber:"text-blue-600",jsonBoolean:"text-violet-600",jsonNull:"text-gray-500",jsonObject:"text-orange-600",jsonArray:"text-cyan-600",syntaxColors:{key:"#166534",string:"#16a34a",number:"#1d4ed8",boolean:"#6d28d9",null:"#6b7280",punctuation:"#9ca3af"},shadow:"shadow-soft",shadowLg:"shadow-soft-lg"}},dark:{name:"dark",label:"Oscuro",icon:"🌙",colors:{bgPrimary:"from-gray-900 via-gray-900 to-gray-950",bgSecondary:"bg-gray-800/90",bgTertiary:"bg-gray-900",bgCard:"bg-gray-800/90 backdrop-blur-sm",bgCardHover:"hover:bg-gray-800",textPrimary:"text-gray-100",textSecondary:"text-gray-300",textMuted:"text-gray-500",accent:"bg-primary-500",accentHover:"hover:bg-primary-400",accentLight:"bg-primary-900/50",success:"text-emerald-400",successLight:"bg-emerald-900/30 border-emerald-800",error:"text-red-400",errorLight:"bg-red-900/30 border-red-800",border:"border-gray-700",borderHover:"hover:border-gray-600",jsonString:"text-emerald-400",jsonNumber:"text-blue-400",jsonBoolean:"text-violet-400",jsonNull:"text-gray-500",jsonObject:"text-orange-400",jsonArray:"text-cyan-400",syntaxColors:{key:"#6ee7b7",string:"#34d399",number:"#60a5fa",boolean:"#a78bfa",null:"#6b7280",punctuation:"#4b5563"},shadow:"shadow-xl shadow-black/20",shadowLg:"shadow-2xl shadow-black/30"}},midnight:{name:"midnight",label:"Medianoche",icon:"🌌",colors:{bgPrimary:"from-slate-950 via-indigo-950 to-slate-950",bgSecondary:"bg-slate-900/90",bgTertiary:"bg-slate-950",bgCard:"bg-slate-900/80 backdrop-blur-sm",bgCardHover:"hover:bg-slate-800/80",textPrimary:"text-slate-100",textSecondary:"text-slate-300",textMuted:"text-slate-500",accent:"bg-indigo-500",accentHover:"hover:bg-indigo-400",accentLight:"bg-indigo-900/50",success:"text-teal-400",successLight:"bg-teal-900/30 border-teal-800",error:"text-rose-400",errorLight:"bg-rose-900/30 border-rose-800",border:"border-slate-700",borderHover:"hover:border-slate-600",jsonString:"text-teal-400",jsonNumber:"text-indigo-400",jsonBoolean:"text-purple-400",jsonNull:"text-slate-500",jsonObject:"text-amber-400",jsonArray:"text-sky-400",syntaxColors:{key:"#99f6e4",string:"#5eead4",number:"#818cf8",boolean:"#c084fc",null:"#64748b",punctuation:"#475569"},shadow:"shadow-xl shadow-indigo-950/50",shadowLg:"shadow-2xl shadow-indigo-950/60"}},forest:{name:"forest",label:"Bosque",icon:"🌲",colors:{bgPrimary:"from-emerald-50 via-green-50 to-teal-50",bgSecondary:"bg-white/80",bgTertiary:"bg-emerald-50/50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-lg hover:shadow-emerald-100",textPrimary:"text-emerald-950",textSecondary:"text-emerald-800",textMuted:"text-emerald-600",accent:"bg-emerald-600",accentHover:"hover:bg-emerald-700",accentLight:"bg-emerald-100",success:"text-green-700",successLight:"bg-green-50 border-green-200",error:"text-red-700",errorLight:"bg-red-50 border-red-200",border:"border-emerald-200",borderHover:"hover:border-emerald-300",jsonString:"text-green-600",jsonNumber:"text-teal-600",jsonBoolean:"text-lime-600",jsonNull:"text-emerald-400",jsonObject:"text-amber-600",jsonArray:"text-cyan-600",syntaxColors:{key:"#14532d",string:"#166534",number:"#134e4a",boolean:"#3f6212",null:"#6b7280",punctuation:"#6b7280"},shadow:"shadow-lg shadow-emerald-100",shadowLg:"shadow-xl shadow-emerald-200"}},sunset:{name:"sunset",label:"Atardecer",icon:"🌅",colors:{bgPrimary:"from-orange-50 via-rose-50 to-purple-50",bgSecondary:"bg-white/80",bgTertiary:"bg-orange-50/50",bgCard:"bg-white/80 backdrop-blur-sm",bgCardHover:"hover:shadow-lg hover:shadow-orange-100",textPrimary:"text-gray-900",textSecondary:"text-gray-700",textMuted:"text-gray-500",accent:"bg-orange-500",accentHover:"hover:bg-orange-600",accentLight:"bg-orange-100",success:"text-emerald-700",successLight:"bg-emerald-50 border-emerald-200",error:"text-rose-700",errorLight:"bg-rose-50 border-rose-200",border:"border-orange-200",borderHover:"hover:border-orange-300",jsonString:"text-rose-600",jsonNumber:"text-orange-600",jsonBoolean:"text-purple-600",jsonNull:"text-gray-500",jsonObject:"text-amber-600",jsonArray:"text-pink-600",syntaxColors:{key:"#881337",string:"#be123c",number:"#9a3412",boolean:"#6b21a8",null:"#6b7280",punctuation:"#9ca3af"},shadow:"shadow-lg shadow-orange-100",shadowLg:"shadow-xl shadow-orange-200"}}},Fd="json-visualizer-theme";function pg(){if(typeof window>"u")return"light";const n=localStorage.getItem(Fd);return n&&n in Po?n:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}const ps=gt(pg());function cs(){const n=_t(()=>Po[ps.value]),e=_t(()=>Object.values(Po));function t(s){ps.value=s,localStorage.setItem(Fd,s),s==="dark"||s==="midnight"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function i(){const s=Object.keys(Po),o=(s.indexOf(ps.value)+1)%s.length,a=s[o];a&&t(a)}return typeof window<"u"&&(ps.value==="dark"||ps.value==="midnight")&&document.documentElement.classList.add("dark"),{currentTheme:n,currentThemeName:ps,allThemes:e,setTheme:t,cycleTheme:i}}const mg=["aria-expanded"],gg={class:"text-lg","aria-hidden":"true"},_g={class:"text-sm font-medium hidden sm:inline"},xg={class:"p-1.5"},vg=["onClick","aria-selected"],yg={class:"text-xl flex-shrink-0","aria-hidden":"true"},bg={class:"flex-1 font-medium text-sm"},Od=Un({__name:"ThemeSelector",setup(n){const{currentTheme:e,allThemes:t,setTheme:i}=cs(),s=gt(!1),r=gt(null);function o(){s.value=!s.value}function a(u){i(u),s.value=!1}function l(u){r.value&&!r.value.contains(u.target)&&(s.value=!1)}function c(u){u.key==="Escape"&&(s.value=!1)}return Zs(()=>{document.addEventListener("click",l),document.addEventListener("keydown",c)}),Qs(()=>{document.removeEventListener("click",l),document.removeEventListener("keydown",c)}),(u,h)=>(Te(),Ue("div",{ref_key:"selectorRef",ref:r,class:"theme-selector relative"},[F("button",{onClick:o,class:ue(["inline-flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",[$(e).name==="dark"||$(e).name==="midnight"?"bg-slate-800 text-slate-200 hover:bg-slate-700 focus:ring-slate-500":"bg-white/80 text-gray-700 hover:bg-white hover:shadow-md focus:ring-primary-500 shadow-soft"]]),"aria-expanded":s.value,"aria-haspopup":"listbox","aria-label":"Seleccionar tema",title:"Cambiar tema de color"},[F("span",gg,it($(e).icon),1),F("span",_g,it($(e).label),1),(Te(),Ue("svg",{class:ue(["w-4 h-4 transition-transform duration-200",{"rotate-180":s.value}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...h[0]||(h[0]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],10,mg),yt(Er,{"enter-active-class":"transition-all duration-200 ease-out","enter-from-class":"opacity-0 scale-95 -translate-y-2","enter-to-class":"opacity-100 scale-100 translate-y-0","leave-active-class":"transition-all duration-150 ease-in","leave-from-class":"opacity-100 scale-100 translate-y-0","leave-to-class":"opacity-0 scale-95 -translate-y-2"},{default:zs(()=>[s.value?(Te(),Ue("div",{key:0,class:ue(["absolute right-0 mt-2 w-48 rounded-xl overflow-hidden z-50",[$(e).name==="dark"||$(e).name==="midnight"?"bg-slate-800 ring-1 ring-white/10 shadow-2xl":"bg-white ring-1 ring-black/5 shadow-xl"]]),role:"listbox","aria-label":"Temas disponibles"},[F("div",xg,[(Te(!0),Ue(Lt,null,os($(t),d=>(Te(),Ue("button",{key:d.name,onClick:p=>a(d.name),class:ue(["w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 text-left",[d.name===$(e).name?$(e).name==="dark"||$(e).name==="midnight"?"bg-slate-700 text-white":"bg-primary-50 text-primary-700":$(e).name==="dark"||$(e).name==="midnight"?"text-slate-300 hover:bg-slate-700 hover:text-white":"text-gray-700 hover:bg-gray-50"]]),role:"option","aria-selected":d.name===$(e).name},[F("span",yg,it(d.icon),1),F("span",bg,it(d.label),1),d.name===$(e).name?(Te(),Ue("svg",{key:0,class:ue(["w-4 h-4 flex-shrink-0",[$(e).name==="dark"||$(e).name==="midnight"?"text-primary-400":"text-primary-600"]]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...h[1]||(h[1]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])],2)):wt("",!0)],10,vg))),128))]),F("div",{class:ue(["px-3 py-2 text-xs border-t",[$(e).name==="dark"||$(e).name==="midnight"?"border-slate-700 text-slate-500":"border-gray-100 text-gray-400"]])}," El tema se guarda automáticamente ",2)],2)):wt("",!0)]),_:1})],512))}}),Mg=[{id:"json-viewer",name:"JSON Viewer",description:"Visualize, format, and explore JSON data structures with an interactive tree view and 3D graph.",icon:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",iconViewBox:"0 0 24 24",status:"active",tags:["data","format","json"]},{id:"text-compare",name:"Text Compare",description:"Compare two texts side-by-side with line and character-level diff highlighting.",icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",iconViewBox:"0 0 24 24",status:"active",tags:["diff","text","compare"]},{id:"base64",name:"Base64 Encoder",description:"Encode and decode Base64 strings instantly with support for files and plain text.",icon:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",iconViewBox:"0 0 24 24",status:"coming-soon",tags:["encoding","format"]},{id:"regex-tester",name:"Regex Tester",description:"Test and debug regular expressions with live match highlighting and group capture display.",icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",iconViewBox:"0 0 24 24",status:"coming-soon",tags:["regex","text"]},{id:"color-palette",name:"Color Palette",description:"Convert between HEX, RGB, and HSL color formats and build accessible color palettes.",icon:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",iconViewBox:"0 0 24 24",status:"coming-soon",tags:["design","color"]}],Sg={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},Eg={class:"mb-8 md:mb-12"},Tg={class:"flex items-center justify-between"},wg={class:"flex-1 text-center"},Ag={class:"inline-flex items-center gap-3 mb-2"},Cg={class:"flex justify-end w-32"},Rg={class:"flex-1 overflow-y-auto"},Pg={class:"mb-4"},Dg={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},Lg=["title","role","tabindex","onClick","onKeydown"],Ig={class:"flex items-start justify-between"},Ng=["viewBox"],Ug=["d"],Fg={class:"flex-1"},Og={class:"flex items-center justify-between"},Bg={class:"flex flex-wrap gap-1"},kg={class:"mt-6 text-center"},zg=Un({__name:"HomeView",emits:["select-tool"],setup(n,{emit:e}){const t=e,{currentTheme:i}=cs(),s=_t(()=>i.value.name==="dark"||i.value.name==="midnight");function r(o){o.status==="active"&&t("select-tool",o.id)}return(o,a)=>(Te(),Ue("div",Sg,[F("header",Eg,[F("div",Tg,[a[1]||(a[1]=F("div",{class:"w-32 hidden sm:block"},null,-1)),F("div",wg,[F("div",Ag,[F("div",{class:ue(["w-11 h-11 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300",[s.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"]])},[...a[0]||(a[0]=[F("svg",{class:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})],-1)])],2),F("h1",{class:ue(["text-3xl md:text-4xl font-bold bg-clip-text text-transparent transition-colors duration-300",[s.value?"bg-gradient-to-r from-white via-gray-200 to-white":"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"]])}," lit-code ",2)]),F("p",{class:ue(["text-sm md:text-base font-medium transition-colors duration-300",$(i).colors.textMuted])}," A collection of developer tools ",2)]),F("div",Cg,[yt(Od)])])]),F("main",Rg,[F("div",Pg,[F("h2",{class:ue(["text-xs font-semibold uppercase tracking-widest transition-colors duration-300",$(i).colors.textMuted])}," Developer Tools ",2)]),F("div",Dg,[(Te(!0),Ue(Lt,null,os($(Mg),l=>(Te(),Ue("div",{key:l.id,class:ue(["rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200",[$(i).colors.bgCard,$(i).colors.shadow,s.value?"ring-1 ring-white/10":"border border-white/50",l.status==="active"?[$(i).colors.bgCardHover,"cursor-pointer hover:ring-2 hover:ring-primary-500/60 hover:scale-[1.01]"]:"opacity-60 cursor-not-allowed"]]),title:l.status==="coming-soon"?"Coming soon":void 0,role:l.status==="active"?"button":void 0,tabindex:l.status==="active"?0:void 0,onClick:c=>r(l),onKeydown:[Yo(c=>r(l),["enter"]),Yo(Ud(c=>r(l),["prevent"]),["space"])]},[F("div",Ig,[F("div",{class:ue(["w-11 h-11 rounded-xl flex items-center justify-center shadow-md transition-colors duration-300 flex-shrink-0",[s.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"]])},[(Te(),Ue("svg",{class:"w-5 h-5 text-white",fill:"none",viewBox:l.iconViewBox,stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:l.icon},null,8,Ug)],8,Ng))],2),l.status==="coming-soon"?(Te(),Ue("span",{key:0,class:ue(["text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full",s.value?"bg-white/10 text-gray-400":"bg-gray-100 text-gray-500"])}," Coming soon ",2)):wt("",!0)]),F("div",Fg,[F("h3",{class:ue(["font-semibold text-base mb-1 transition-colors duration-300",$(i).colors.textPrimary])},it(l.name),3),F("p",{class:ue(["text-xs leading-relaxed transition-colors duration-300",$(i).colors.textMuted])},it(l.description),3)]),F("div",Og,[F("div",Bg,[(Te(!0),Ue(Lt,null,os(l.tags,c=>(Te(),Ue("span",{key:c,class:ue(["text-[10px] font-medium px-1.5 py-0.5 rounded transition-colors duration-300",s.value?"bg-white/10 text-gray-400":"bg-gray-100 text-gray-500"])},it(c),3))),128))]),l.status==="active"?(Te(),Ue("svg",{key:0,class:ue(["w-4 h-4 flex-shrink-0 transition-colors duration-300",$(i).colors.textMuted]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...a[2]||(a[2]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1)])],2)):wt("",!0)])],42,Lg))),128))])]),F("footer",kg,[F("p",{class:ue(["text-xs transition-colors duration-300",$(i).colors.textMuted])}," Select a tool to get started ",2)])]))}});function Bd(n=""){const e=gt(n),t=gt(null),i=gt(null),s=_t(()=>!t.value&&e.value.trim()!==""),r=_t(()=>t.value!==null),o=_t(()=>e.value.trim()!=="");function a(){try{if(!o.value){t.value=null,i.value=null;return}i.value=JSON.parse(e.value),t.value=null}catch(d){t.value=d.message,i.value=null}}function l(){try{if(!o.value)return;const d=JSON.parse(e.value);e.value=JSON.stringify(d,null,2),t.value=null,i.value=d}catch(d){t.value=d.message}}function c(){!o.value||!s.value||(e.value=JSON.stringify(JSON.parse(e.value)))}function u(){e.value="",t.value=null,i.value=null}function h(d){e.value=d}return Li(e,a,{immediate:!0}),{jsonText:e,errorMessage:t,parsedData:i,isValid:s,hasError:r,hasContent:o,formatJson:l,compactJson:c,clearJson:u,setJsonText:h}}function ka(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vg(n,e){const t=/("(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|[{}[\],:])/g,{syntaxColors:i}=e.colors;let s="",r=0,o;for(;(o=t.exec(n))!==null;){const a=o[0];s+=ka(n.slice(r,o.index));let l,c="400";a.startsWith('"')&&a.endsWith(":")?(l=i.key,c="600"):a.startsWith('"')?l=i.string:a==="true"||a==="false"?l=i.boolean:a==="null"?l=i.null:/^-?\d/.test(a)?l=i.number:l=i.punctuation,s+=`<span style="color:${l};font-weight:${c}">${ka(a)}</span>`,r=o.index+a.length}return s+=ka(n.slice(r)),s}function Hg(n,e){return{highlightedHtml:_t(()=>{const i=n();return i.trim()?Vg(i,e()):""})}}const Gg={class:"flex items-center justify-between mb-4"},Wg={class:"flex items-center gap-2"},Xg={class:"flex items-center gap-1.5"},jg=["disabled"],Yg=["disabled"],qg=["disabled"],$g=["title","aria-label"],Kg={key:0,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},Jg={key:1,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},Zg={class:"relative flex-1 overflow-hidden"},Qg=["innerHTML"],e_={class:"mt-3 min-h-[2rem]"},t_={class:"flex-1 min-w-0"},n_=Un({__name:"JsonInput",props:{modelValue:{},theme:{}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,s=_t(()=>t.theme.name==="dark"||t.theme.name==="midnight"),{jsonText:r,errorMessage:o,isValid:a,hasContent:l,formatJson:c,compactJson:u,clearJson:h,setJsonText:d}=Bd(t.modelValue),{highlightedHtml:p}=Hg(()=>r.value,()=>t.theme),_=gt(null),x=gt(null),m=gt(null),f=gt(!1),w=_t(()=>{const S=r.value.split(`
`);return Array.from({length:S.length},(D,N)=>N+1)});Li(r,S=>{i("update:modelValue",S)});function C(){_.value&&x.value&&(_.value.scrollTop=x.value.scrollTop),m.value&&x.value&&(m.value.scrollTop=x.value.scrollTop,m.value.scrollLeft=x.value.scrollLeft)}function M(){setTimeout(()=>{try{if(r.value.trim()){const S=JSON.parse(r.value);r.value=JSON.stringify(S,null,2)}}catch{}},0)}function T(){d(JSON.stringify({name:"John Doe",age:30,email:"john@example.com",address:{street:"123 Main St",city:"New York",country:"USA"},hobbies:["reading","coding","gaming"],isActive:!0},null,2))}async function P(){r.value&&await navigator.clipboard.writeText(r.value)}const L=gt(!1);function k(){L.value=!L.value}function v(S){S.key==="Escape"&&L.value&&(L.value=!1)}return Zs(()=>window.addEventListener("keydown",v)),Qs(()=>window.removeEventListener("keydown",v)),(S,D)=>(Te(),hi($c,{to:"body",disabled:!L.value},[F("div",{class:ue(L.value?"fixed inset-0 z-50 flex flex-col p-4 md:p-6":"flex flex-col h-full")},[L.value?(Te(),Ue("div",{key:0,class:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:D[0]||(D[0]=N=>L.value=!1)})):wt("",!0),F("div",{class:ue(L.value?["relative z-10 flex-1 flex flex-col min-h-0 rounded-2xl p-4 md:p-6 overflow-hidden",n.theme.colors.bgCard,n.theme.colors.shadow]:"flex flex-col h-full")},[F("div",Gg,[F("div",Wg,[F("div",{class:ue(["w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",s.value?"bg-gradient-to-br from-primary-400 to-primary-500":"bg-gradient-to-br from-primary-500 to-primary-600"])},[...D[7]||(D[7]=[F("svg",{class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)])],2),F("h2",{class:ue(["text-lg font-semibold transition-colors duration-300",n.theme.colors.textPrimary])},"Entrada",2)]),F("div",Xg,[F("button",{onClick:T,class:ue(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Cargar datos de ejemplo","aria-label":"Cargar datos de ejemplo"},[...D[8]||(D[8]=[F("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})],-1),F("span",{class:"hidden sm:inline"},"Ejemplo",-1)])],2),$(l)?(Te(),Ue("button",{key:0,onClick:P,class:ue(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Copiar al portapapeles","aria-label":"Copiar JSON al portapapeles"},[...D[9]||(D[9]=[F("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1)])],2)):wt("",!0),F("button",{onClick:D[1]||(D[1]=(...N)=>$(c)&&$(c)(...N)),disabled:!$(l),class:ue(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",[n.theme.colors.accent,n.theme.colors.accentHover,"focus:ring-primary-500"]]),title:"Formatear JSON","aria-label":"Formatear JSON"},[...D[10]||(D[10]=[F("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1),F("span",{class:"hidden sm:inline"},"Formatear",-1)])],10,jg),F("button",{onClick:D[2]||(D[2]=(...N)=>$(u)&&$(u)(...N)),disabled:!$(l)||!$(a),class:ue(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:"Compactar JSON","aria-label":"Compactar JSON"},[...D[11]||(D[11]=[F("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"})],-1),F("span",{class:"hidden sm:inline"},"Compacto",-1)])],10,Yg),F("button",{onClick:D[3]||(D[3]=(...N)=>$(h)&&$(h)(...N)),disabled:!$(l),class:ue(["inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed",s.value?"text-red-400 bg-red-900/30 hover:bg-red-900/50 focus:ring-red-500":"text-red-600 bg-red-50 hover:bg-red-100 focus:ring-red-300"]),title:"Limpiar contenido","aria-label":"Limpiar contenido"},[...D[12]||(D[12]=[F("svg",{class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)])],10,qg),F("button",{onClick:k,class:ue(["inline-flex items-center p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",s.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:L.value?"Salir de pantalla completa":"Pantalla completa","aria-label":L.value?"Salir de pantalla completa":"Pantalla completa"},[L.value?(Te(),Ue("svg",Jg,[...D[14]||(D[14]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9L4 4m0 0v4m0-4h4m6 0l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m6 0l5 5m0 0v-4m0 4h-4"},null,-1)])])):(Te(),Ue("svg",Kg,[...D[13]||(D[13]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"},null,-1)])]))],10,$g)])]),F("div",{class:ue(["flex-1 flex rounded-xl overflow-hidden transition-all duration-200 ring-1",[$(o)?s.value?"ring-red-500/50 bg-red-900/20":"ring-red-300 bg-red-50/50":f.value?s.value?"ring-primary-500 ring-2 bg-slate-800":"ring-primary-300 ring-2 bg-white":s.value?"ring-slate-600 bg-slate-800/50":"ring-gray-200 bg-surface-secondary"]])},[F("div",{ref_key:"lineNumbersRef",ref:_,class:ue(["flex flex-col py-4 px-3 text-right select-none overflow-hidden border-r transition-colors",[$(o)?s.value?"bg-red-900/30 border-red-800 text-red-400":"bg-red-100/50 border-red-200 text-red-400":s.value?"bg-slate-900/50 border-slate-700 text-slate-500":"bg-surface-tertiary border-gray-100 text-gray-400"]]),"aria-hidden":"true"},[(Te(!0),Ue(Lt,null,os(w.value,N=>(Te(),Ue("div",{key:N,class:"font-mono text-xs leading-5 tabular-nums"},it(N),1))),128))],2),F("div",Zg,[F("pre",{ref_key:"preRef",ref:m,class:ue(["absolute inset-0 m-0 p-4 font-mono text-sm leading-5 whitespace-pre-wrap break-words pointer-events-none overflow-hidden select-none",s.value?"text-slate-200":"text-gray-800"]),"aria-hidden":"true",innerHTML:$(p)||""},null,10,Qg),Al(F("textarea",{ref_key:"textareaRef",ref:x,"onUpdate:modelValue":D[4]||(D[4]=N=>Ut(r)?r.value=N:null),onPaste:M,onScroll:C,onFocus:D[5]||(D[5]=N=>f.value=!0),onBlur:D[6]||(D[6]=N=>f.value=!1),placeholder:"Pega o escribe tu JSON aquí...",class:ue(["absolute inset-0 w-full h-full p-4 font-mono text-sm leading-5 focus:outline-none resize-none bg-transparent whitespace-pre-wrap break-words",s.value?"placeholder:text-slate-500":"placeholder:text-gray-400"]),style:oa({"-webkit-text-fill-color":"transparent",color:"transparent","caret-color":s.value?"#e2e8f0":"#374151"}),"aria-label":"Editor de JSON",spellcheck:"false"},null,38),[[Fl,$(r)]])])],2),F("div",e_,[$(o)?(Te(),Ue("div",{key:0,class:ue(["flex items-start gap-2 p-3 border rounded-lg animate-fade-in",s.value?"bg-red-900/30 border-red-800":"bg-red-50 border-red-200"]),role:"alert"},[(Te(),Ue("svg",{class:ue(["w-4 h-4 flex-shrink-0 mt-0.5",s.value?"text-red-400":"text-red-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...D[15]||(D[15]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])],2)),F("div",t_,[F("p",{class:ue(["text-sm font-medium",s.value?"text-red-300":"text-red-800"])},"Error de sintaxis",2),F("p",{class:ue(["text-xs mt-0.5 truncate",s.value?"text-red-400":"text-red-600"])},it($(o)),3)])],2)):$(l)&&$(a)?(Te(),Ue("div",{key:1,class:ue(["flex items-center gap-2 p-3 border rounded-lg animate-fade-in",s.value?"bg-emerald-900/30 border-emerald-800":"bg-emerald-50 border-emerald-200"]),role:"status"},[(Te(),Ue("svg",{class:ue(["w-4 h-4",s.value?"text-emerald-400":"text-emerald-500"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...D[16]||(D[16]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])],2)),F("p",{class:ue(["text-sm font-medium",s.value?"text-emerald-300":"text-emerald-700"])},"JSON válido",2),F("span",{class:ue(["ml-auto text-xs tabular-nums",s.value?"text-emerald-400":"text-emerald-600"])},it(w.value.length)+" líneas",3)],2)):wt("",!0)])],2)],2)],8,["disabled"]))}});function i_(n,e=0,t=2){const i=gt(e<t),s=_t(()=>{const _=n();return _===null?"null":Array.isArray(_)?"array":typeof _}),r=_t(()=>s.value==="object"||s.value==="array"),o=_t(()=>{const _=n();return s.value==="array"&&Array.isArray(_)?_.length:s.value==="object"&&typeof _=="object"&&_!==null?Object.keys(_).length:0}),a=_t(()=>{const _=n();return s.value==="array"&&Array.isArray(_)?_.map((x,m)=>({key:m,value:x})):s.value==="object"&&typeof _=="object"&&_!==null?Object.entries(_).map(([x,m])=>({key:x,value:m})):[]});function l(){r.value&&(i.value=!i.value)}function c(_){return{string:"text-green-600",number:"text-blue-600",boolean:"text-purple-600",null:"text-gray-500",array:"text-gray-800",object:"text-gray-800"}[_]}function u(_){return typeof _=="string"?`"${_}"`:_===null?"null":String(_)}function h(){i.value=!0}function d(){i.value=!1}function p(_,x){return _==="array"?`Array[${x}]`:_==="object"?`Object{${x}}`:""}return{isExpanded:i,dataType:s,isExpandable:r,itemCount:o,entries:a,toggleExpand:l,getValueColor:c,formatValue:u,getTypeLabel:p,expandAll:h,collapseAll:d}}const s_={class:"json-node group/node"},r_={class:"flex items-start gap-1.5"},o_=["role","aria-expanded","tabindex"],a_=["title"],l_={class:"tabular-nums"},c_=Un({__name:"JsonNode",props:{data:{type:[String,Number,Boolean,null,Object]},name:{},isRoot:{type:Boolean,default:!1},depth:{default:0},initialExpandDepth:{default:2},lineNumber:{default:1},theme:{}},setup(n){const e=n,t=_t(()=>e.theme?.name==="dark"||e.theme?.name==="midnight"),i={string:"jsonString",number:"jsonNumber",boolean:"jsonBoolean",null:"jsonNull",object:"jsonObject",array:"jsonArray"},{isExpanded:s,dataType:r,isExpandable:o,itemCount:a,entries:l,toggleExpand:c,formatValue:u}=i_(()=>e.data,e.depth,e.initialExpandDepth);function h(_){switch(_){case"object":return"{}";case"array":return"[]";case"string":return"Aa";case"number":return"#";case"boolean":return"◐";case"null":return"ø";default:return"·"}}function d(_){if(t.value)switch(_){case"object":return"bg-orange-900/50 text-orange-400";case"array":return"bg-cyan-900/50 text-cyan-400";case"string":return"bg-emerald-900/50 text-emerald-400";case"number":return"bg-blue-900/50 text-blue-400";case"boolean":return"bg-violet-900/50 text-violet-400";case"null":return"bg-slate-700 text-slate-400";default:return"bg-slate-700 text-slate-400"}switch(_){case"object":return"bg-orange-100 text-orange-700";case"array":return"bg-cyan-100 text-cyan-700";case"string":return"bg-emerald-100 text-emerald-700";case"number":return"bg-blue-100 text-blue-700";case"boolean":return"bg-violet-100 text-violet-700";case"null":return"bg-gray-100 text-gray-600";default:return"bg-gray-100 text-gray-600"}}function p(_){if(e.theme){const x=i[_];return x?e.theme.colors[x]:e.theme.colors.textSecondary}switch(_){case"string":return"text-emerald-600";case"number":return"text-blue-600";case"boolean":return"text-violet-600";case"null":return"text-gray-500";default:return"text-gray-800"}}return(_,x)=>{const m=Xm("JsonNode",!0);return Te(),Ue("div",s_,[F("div",r_,[F("span",{class:ue(["flex-shrink-0 w-8 text-right text-[10px] select-none font-mono mt-1 tabular-nums opacity-60 group-hover/node:opacity-100 transition-opacity",t.value?"text-slate-500":"text-gray-400"]),"aria-hidden":"true"},it(n.lineNumber),3),F("div",{class:ue(["flex-1 flex items-start gap-1.5 py-1 px-2 -mx-2 rounded-lg transition-all",[$(o)?t.value?"cursor-pointer hover:bg-slate-700/50":"cursor-pointer hover:bg-primary-50/70":t.value?"hover:bg-slate-700/30":"hover:bg-gray-50"]]),role:$(o)?"button":void 0,"aria-expanded":$(o)?$(s):void 0,tabindex:$(o)?0:void 0,onClick:x[0]||(x[0]=(...f)=>$(c)&&$(c)(...f)),onKeydown:[x[1]||(x[1]=Yo((...f)=>$(c)&&$(c)(...f),["enter"])),x[2]||(x[2]=Yo(Ud((...f)=>$(c)&&$(c)(...f),["prevent"]),["space"]))]},[$(o)?(Te(),Ue("span",{key:0,class:ue(["flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center rounded transition-colors",$(s)?t.value?"text-primary-400":"text-primary-500":t.value?"text-slate-500 group-hover/node:text-slate-400":"text-gray-400 group-hover/node:text-gray-600"])},[(Te(),Ue("svg",{class:ue(["w-3.5 h-3.5 transition-transform duration-200 ease-out",{"rotate-90":$(s)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[...x[3]||(x[3]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",d:"M9 5l7 7-7 7"},null,-1)])],2))],2)):(Te(),Ue("span",{key:1,class:ue(["flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center text-[9px] font-bold rounded",d($(r))]),title:$(r)},it(h($(r))),11,a_)),n.isRoot?wt("",!0):(Te(),Ue("span",{key:2,class:ue(["font-medium flex-shrink-0",t.value?"text-primary-400":"text-primary-700"])},[rs(' "'+it(n.name)+'"',1),F("span",{class:ue([t.value?"text-slate-500":"text-gray-400","ml-0.5"])},":",2)],2)),$(o)?(Te(),Ue("span",{key:3,class:ue(["font-mono text-sm flex items-center gap-1.5",t.value?"text-slate-400":"text-gray-600"])},[F("span",{class:ue(["inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold",$(r)==="array"?t.value?"bg-cyan-900/50 text-cyan-400":"bg-cyan-100 text-cyan-700":t.value?"bg-orange-900/50 text-orange-400":"bg-orange-100 text-orange-700"])},[rs(it($(r)==="array"?"[]":"{}")+" ",1),F("span",l_,it($(a)),1)],2),$(s)?wt("",!0):(Te(),Ue("span",{key:0,class:ue(["text-xs",t.value?"text-slate-500":"text-gray-400"])},"•••",2))],2)):(Te(),Ue("span",{key:4,class:ue([p($(r)),"font-mono text-sm break-all"])},it($(u)(n.data)),3))],42,o_)]),$(o)&&$(s)?(Te(),Ue("div",{key:0,class:ue(["ml-5 pl-3 border-l-2 transition-colors animate-fade-in",t.value?"border-slate-700 hover:border-slate-600":"border-primary-100 hover:border-primary-200"])},[(Te(!0),Ue(Lt,null,os($(l),(f,w)=>(Te(),hi(m,{key:f.key,data:f.value,name:String(f.key),depth:n.depth+1,initialExpandDepth:n.initialExpandDepth,lineNumber:n.lineNumber+w+1,theme:n.theme},null,8,["data","name","depth","initialExpandDepth","lineNumber","theme"]))),128))],2)):wt("",!0)])}}}),eu=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},u_=eu(c_,[["__scopeId","data-v-008f3ba3"]]);function h_(n){return n===null?"null":Array.isArray(n)?"array":typeof n=="object"?"object":typeof n=="string"?"string":typeof n=="number"?"number":typeof n=="boolean"?"boolean":"null"}function f_(n,e){if(e==="object")return`{${Object.keys(n).length}}`;if(e==="array")return`[${n.length}]`;if(e==="string"){const t=n;return t.length>20?`"${t.slice(0,20)}..."`:`"${t}"`}return e==="null"?"null":String(n)}let kd=0;function zd(n,e,t){const i=h_(n),r={id:`node-${kd++}`,name:e,value:f_(n,i),type:i,children:[],isExpanded:t<2,depth:t};if(i==="object"||i==="array"){const o=i==="array"?n.map((a,l)=>({key:String(l),value:a})):Object.entries(n).map(([a,l])=>({key:a,value:l}));r.children=o.map(a=>zd(a.value,a.key,t+1))}return r}function d_(n){return kd=0,zd(n,"root",0)}const tu="182",Hs={ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},p_=0,ph=1,m_=2,Do=1,Vd=2,pr=3,Ui=0,cn=1,Hn=2,Yn=0,Gs=1,Ol=2,mh=3,gh=4,g_=5,Zi=100,__=101,x_=102,v_=103,y_=104,b_=200,M_=201,S_=202,E_=203,Bl=204,kl=205,T_=206,w_=207,A_=208,C_=209,R_=210,P_=211,D_=212,L_=213,I_=214,zl=0,Vl=1,Hl=2,js=3,Gl=4,Wl=5,Xl=6,jl=7,Hd=0,N_=1,U_=2,qn=0,Gd=1,Wd=2,Xd=3,jd=4,Yd=5,qd=6,$d=7,Kd=300,as=301,Ys=302,Yl=303,ql=304,pa=306,$l=1e3,ui=1001,Kl=1002,Vt=1003,F_=1004,Kr=1005,zt=1006,za=1007,es=1008,gn=1009,Jd=1010,Zd=1011,Nr=1012,nu=1013,$n=1014,Wn=1015,vn=1016,iu=1017,su=1018,Ur=1020,Qd=35902,ep=35899,tp=1021,np=1022,Dn=1023,gi=1026,ts=1027,ip=1028,ru=1029,qs=1030,ou=1031,au=1033,Lo=33776,Io=33777,No=33778,Uo=33779,Jl=35840,Zl=35841,Ql=35842,ec=35843,tc=36196,nc=37492,ic=37496,sc=37488,rc=37489,oc=37490,ac=37491,lc=37808,cc=37809,uc=37810,hc=37811,fc=37812,dc=37813,pc=37814,mc=37815,gc=37816,_c=37817,xc=37818,vc=37819,yc=37820,bc=37821,Mc=36492,Sc=36494,Ec=36495,Tc=36283,wc=36284,Ac=36285,Cc=36286,O_=3200,sp=0,B_=1,Ri="",mn="srgb",$s="srgb-linear",qo="linear",ht="srgb",ms=7680,_h=519,k_=512,z_=513,V_=514,lu=515,H_=516,G_=517,cu=518,W_=519,Rc=35044,xh="300 es",Xn=2e3,$o=2001;function rp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function X_(){const n=Ko("canvas");return n.style.display="block",n}const vh={};function Jo(...n){const e="THREE."+n.shift();console.log(e,...n)}function je(...n){const e="THREE."+n.shift();console.warn(e,...n)}function nt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Fr(...n){const e=n.join(" ");e in vh||(vh[e]=!0,je(...n))}function j_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fo=Math.PI/180,Zo=180/Math.PI;function Ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Y_(n,e){return(n%e+e)%e}function Va(n,e,t){return(1-t)*n+t*e}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const q_={DEG2RAD:Fo};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ls{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||l!==d||c!==p||u!==_){let m=l*d+c*p+u*_+h*x;m<0&&(d=-d,p=-p,_=-_,x=-x,m=-m);let f=1-a;if(m<.9995){const w=Math.acos(m),C=Math.sin(w);f=Math.sin(f*w)/C,a=Math.sin(a*w)/C,l=l*f+d*a,c=c*f+p*a,u=u*f+_*a,h=h*f+x*a}else{l=l*f+d*a,c=c*f+p*a,u=u*f+_*a,h=h*f+x*a;const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-a*p,e[t+2]=c*_+u*p+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new U,yh=new ls;class Ze{constructor(e,t,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],x=s[0],m=s[3],f=s[6],w=s[1],C=s[4],M=s[7],T=s[2],P=s[5],L=s[8];return r[0]=o*x+a*w+l*T,r[3]=o*m+a*C+l*P,r[6]=o*f+a*M+l*L,r[1]=c*x+u*w+h*T,r[4]=c*m+u*C+h*P,r[7]=c*f+u*M+h*L,r[2]=d*x+p*w+_*T,r[5]=d*m+p*C+_*P,r[8]=d*f+p*M+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,_=t*h+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new Ze,bh=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $_(){const n={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$s]:{primaries:e,whitePoint:i,transfer:qo,toXYZ:bh,fromXYZ:Mh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:bh,fromXYZ:Mh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const st=$_();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gs;class K_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=Ko("canvas")),gs.width=e.width,gs.height=e.height;const s=gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ko("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J_=0;class uu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wa(s[o].image)):r.push(Wa(s[o]))}else r=Wa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?K_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let Z_=0;const Xa=new U;class qt extends us{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=ui,s=ui,r=zt,o=es,a=Dn,l=gn,c=qt.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Ii(),this.name="",this.source=new uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xa).x}get height(){return this.source.getSize(Xa).y}get depth(){return this.source.getSize(Xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $l:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $l:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Kd;qt.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,M=(p+1)/2,T=(f+1)/2,P=(u+d)/4,L=(h+x)/4,k=(_+m)/4;return C>M&&C>T?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=P/i,r=L/i):M>T?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=P/s,r=k/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=L/r,s=k/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(h-x)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Q_ extends us{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new qt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new uu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Q_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class op extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ex extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Zr.subVectors(this.max,sr),_s.subVectors(e.a,sr),xs.subVectors(e.b,sr),vs.subVectors(e.c,sr),yi.subVectors(xs,_s),bi.subVectors(vs,xs),Wi.subVectors(_s,vs);let t=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-Wi.z,Wi.y,yi.z,0,-yi.x,bi.z,0,-bi.x,Wi.z,0,-Wi.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-Wi.y,Wi.x,0];return!ja(t,_s,xs,vs,Zr)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,_s,xs,vs,Zr))?!1:(Qr.crossVectors(yi,bi),t=[Qr.x,Qr.y,Qr.z],ja(t,_s,xs,vs,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new U,new U,new U,new U,new U,new U,new U,new U],Cn=new U,Jr=new zr,_s=new U,xs=new U,vs=new U,yi=new U,bi=new U,Wi=new U,sr=new U,Zr=new U,Qr=new U,Xi=new U;function ja(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Xi.fromArray(n,r);const a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),u=i.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tx=new zr,rr=new U,Ya=new U;class ma{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Ya)),this.expandByPoint(rr.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ti=new U,qa=new U,eo=new U,Mi=new U,$a=new U,to=new U,Ka=new U;class ga{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qa.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(qa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(eo),a=Mi.dot(this.direction),l=-Mi.dot(eo),c=Mi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qa).addScaledVector(eo,d),p}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){$a.subVectors(t,e),to.subVectors(i,e),Ka.crossVectors($a,to);let o=this.direction.dot(Ka),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(to.crossVectors(Mi,to));if(l<0)return null;const c=a*this.direction.dot($a.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(Ka);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,i,s,r,o,a,l,c,u,h,d,p,_,x,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,p,_,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,d,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,x=c*h;t[0]=d+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,x=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nx,e,ix)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Si.crossVectors(i,dn),Si.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Si.crossVectors(i,dn)),Si.normalize(),no.crossVectors(dn,Si),s[0]=Si.x,s[4]=no.x,s[8]=dn.x,s[1]=Si.y,s[5]=no.y,s[9]=dn.y,s[2]=Si.z,s[6]=no.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],f=i[14],w=i[3],C=i[7],M=i[11],T=i[15],P=s[0],L=s[4],k=s[8],v=s[12],S=s[1],D=s[5],N=s[9],H=s[13],re=s[2],oe=s[6],Z=s[10],V=s[14],ie=s[3],ve=s[7],xe=s[11],Ee=s[15];return r[0]=o*P+a*S+l*re+c*ie,r[4]=o*L+a*D+l*oe+c*ve,r[8]=o*k+a*N+l*Z+c*xe,r[12]=o*v+a*H+l*V+c*Ee,r[1]=u*P+h*S+d*re+p*ie,r[5]=u*L+h*D+d*oe+p*ve,r[9]=u*k+h*N+d*Z+p*xe,r[13]=u*v+h*H+d*V+p*Ee,r[2]=_*P+x*S+m*re+f*ie,r[6]=_*L+x*D+m*oe+f*ve,r[10]=_*k+x*N+m*Z+f*xe,r[14]=_*v+x*H+m*V+f*Ee,r[3]=w*P+C*S+M*re+T*ie,r[7]=w*L+C*D+M*oe+T*ve,r[11]=w*k+C*N+M*Z+T*xe,r[15]=w*v+C*H+M*V+T*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15],w=l*p-c*d,C=a*p-c*h,M=a*d-l*h,T=o*p-c*u,P=o*d-l*u,L=o*h-a*u;return t*(x*w-m*C+f*M)-i*(_*w-m*T+f*P)+s*(_*C-x*T+f*L)-r*(_*M-x*P+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],w=h*m*c-x*d*c+x*l*p-a*m*p-h*l*f+a*d*f,C=_*d*c-u*m*c-_*l*p+o*m*p+u*l*f-o*d*f,M=u*x*c-_*h*c+_*a*p-o*x*p-u*a*f+o*h*f,T=_*h*l-u*x*l-_*a*d+o*x*d+u*a*m-o*h*m,P=t*w+i*C+s*M+r*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=w*L,e[1]=(x*d*r-h*m*r-x*s*p+i*m*p+h*s*f-i*d*f)*L,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*f+i*l*f)*L,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*L,e[4]=C*L,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*f+t*d*f)*L,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*f-t*l*f)*L,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*L,e[8]=M*L,e[9]=(_*h*r-u*x*r-_*i*p+t*x*p+u*i*f-t*h*f)*L,e[10]=(o*x*r-_*a*r+_*i*c-t*x*c-o*i*f+t*a*f)*L,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*L,e[12]=T*L,e[13]=(u*x*s-_*h*s+_*i*d-t*x*d-u*i*m+t*h*m)*L,e[14]=(_*a*s-o*x*s-_*i*l+t*x*l+o*i*m-t*a*m)*L,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,_=r*h,x=o*u,m=o*h,f=a*h,w=l*c,C=l*u,M=l*h,T=i.x,P=i.y,L=i.z;return s[0]=(1-(x+f))*T,s[1]=(p+M)*T,s[2]=(_-C)*T,s[3]=0,s[4]=(p-M)*P,s[5]=(1-(d+f))*P,s[6]=(m+w)*P,s[7]=0,s[8]=(_+C)*L,s[9]=(m-w)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=ys.set(s[0],s[1],s[2]).length();const o=ys.set(s[4],s[5],s[6]).length(),a=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Rn.copy(this);const c=1/r,u=1/o,h=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Xn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let _,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===Xn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===$o)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Xn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s);let _,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===Xn)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===$o)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ys=new U,Rn=new Et,nx=new U(0,0,0),ix=new U(1,1,1),Si=new U,no=new U,dn=new U,Sh=new Et,Eh=new ls;class Kn{constructor(e=0,t=0,i=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sx=0;const Th=new U,bs=new ls,ni=new Et,io=new U,or=new U,rx=new U,ox=new ls,wh=new U(1,0,0),Ah=new U(0,1,0),Ch=new U(0,0,1),Rh={type:"added"},ax={type:"removed"},Ms={type:"childadded",child:null},Ja={type:"childremoved",child:null};class It extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new U,t=new Kn,i=new ls,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?io.copy(e):io.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(or,io,this.up):ni.lookAt(io,or,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ni),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ax),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,ox,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}It.DEFAULT_UP=new U(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new U,ii=new U,Za=new U,si=new U,Ss=new U,Es=new U,Ph=new U,Qa=new U,el=new U,tl=new U,nl=new Rt,il=new Rt,sl=new Rt;class Tn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),ii.subVectors(i,t),Za.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ii),l=Pn.dot(Za),c=ii.dot(ii),u=ii.dot(Za),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,i),sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(nl,r.x),o.addScaledVector(il,r.y),o.addScaledVector(sl,r.z),o}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),ii.subVectors(e,t),Pn.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Pn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ss.subVectors(s,i),Es.subVectors(r,i),Qa.subVectors(e,i);const l=Ss.dot(Qa),c=Es.dot(Qa);if(l<=0&&c<=0)return t.copy(i);el.subVectors(e,s);const u=Ss.dot(el),h=Es.dot(el);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ss,o);tl.subVectors(e,r);const p=Ss.dot(tl),_=Es.dot(tl);if(_>=0&&p<=_)return t.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Es,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Ph.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Ph,a);const f=1/(m+x+d);return o=x*f,a=d*f,t.copy(i).addScaledVector(Ss,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},so={h:0,s:0,l:0};function rl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Y_(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=rl(o,r,e+1/3),this.g=rl(o,r,e),this.b=rl(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=mn){function i(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=ap[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return st.workingToColorSpace(Wt.copy(this),e),Math.round(et(Wt.r*255,0,255))*65536+Math.round(et(Wt.g*255,0,255))*256+Math.round(et(Wt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=mn){st.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(so);const i=Va(Ei.h,so.h,t),s=Va(Ei.s,so.s,t),r=Va(Ei.l,so.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new qe;qe.NAMES=ap;let lx=0;class hs extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Gs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=kl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bl&&(i.blendSrc=this.blendSrc),this.blendDst!==kl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _a extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new U,ro=new Me;let cx=0;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}}class lp extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cp extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ht extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ux=0;const En=new Et,ol=new It,Ts=new U,pn=new zr,ar=new zr,kt=new U;class nn extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?cp:lp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(pn.min,ar.min),pn.expandByPoint(kt),kt.addVectors(pn.max,ar.max),pn.expandByPoint(kt)):(pn.expandByPoint(ar.min),pn.expandByPoint(ar.max))}pn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),kt.add(Ts)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new U,l[k]=new U;const c=new U,u=new U,h=new U,d=new Me,p=new Me,_=new Me,x=new U,m=new U;function f(k,v,S){c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,k),p.fromBufferAttribute(r,v),_.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(d),_.sub(d);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),a[k].add(x),a[v].add(x),a[S].add(x),l[k].add(m),l[v].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let k=0,v=w.length;k<v;++k){const S=w[k],D=S.start,N=S.count;for(let H=D,re=D+N;H<re;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const C=new U,M=new U,T=new U,P=new U;function L(k){T.fromBufferAttribute(s,k),P.copy(T);const v=a[k];C.copy(v),C.sub(T.multiplyScalar(T.dot(v))).normalize(),M.crossVectors(P,v);const D=M.dot(l[k])<0?-1:1;o.setXYZW(k,C.x,C.y,C.z,D)}for(let k=0,v=w.length;k<v;++k){const S=w[k],D=S.start,N=S.count;for(let H=D,re=D+N;H<re;H+=3)L(e.getX(H+0)),L(e.getX(H+1)),L(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new yn(d,u,h)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dh=new Et,ji=new ga,oo=new ma,Lh=new U,ao=new U,lo=new U,co=new U,al=new U,uo=new U,Ih=new U,ho=new U;class bn extends It{constructor(e=new nn,t=new _a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(al.fromBufferAttribute(h,e),o?uo.addScaledVector(al,u):uo.addScaledVector(al.sub(t),u))}t.add(uo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(oo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(oo,Lh)===null||ji.origin.distanceToSquared(Lh)>(e.far-e.near)**2))&&(Dh.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],w=Math.max(m.start,p.start),C=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,T=C;M<T;M+=3){const P=a.getX(M),L=a.getX(M+1),k=a.getX(M+2);s=fo(this,f,e,i,c,u,h,P,L,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const w=a.getX(m),C=a.getX(m+1),M=a.getX(m+2);s=fo(this,o,e,i,c,u,h,w,C,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],w=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,T=C;M<T;M+=3){const P=M,L=M+1,k=M+2;s=fo(this,f,e,i,c,u,h,P,L,k),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const w=m,C=m+1,M=m+2;s=fo(this,o,e,i,c,u,h,w,C,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function hx(n,e,t,i,s,r,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ui,a),l===null)return null;ho.copy(a),ho.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:n}}function fo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ao),n.getVertexPosition(l,lo),n.getVertexPosition(c,co);const u=hx(n,e,t,i,ao,lo,co,Ih);if(u){const h=new U;Tn.getBarycoord(Ih,ao,lo,co,h),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,l,c,h,new Me)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,l,c,h,new Me)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};Tn.getNormal(ao,lo,co,d.normal),u.face=d,u.barycoord=h}return u}class Vr extends nn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function _(x,m,f,w,C,M,T,P,L,k,v){const S=M/L,D=T/k,N=M/2,H=T/2,re=P/2,oe=L+1,Z=k+1;let V=0,ie=0;const ve=new U;for(let xe=0;xe<Z;xe++){const Ee=xe*D-H;for(let Ge=0;Ge<oe;Ge++){const Ye=Ge*S-N;ve[x]=Ye*w,ve[m]=Ee*C,ve[f]=re,c.push(ve.x,ve.y,ve.z),ve[x]=0,ve[m]=0,ve[f]=P>0?1:-1,u.push(ve.x,ve.y,ve.z),h.push(Ge/L),h.push(1-xe/k),V+=1}}for(let xe=0;xe<k;xe++)for(let Ee=0;Ee<L;Ee++){const Ge=d+Ee+oe*xe,Ye=d+Ee+oe*(xe+1),ft=d+(Ee+1)+oe*(xe+1),lt=d+(Ee+1)+oe*xe;l.push(Ge,Ye,lt),l.push(Ye,ft,lt),ie+=6}a.addGroup(p,ie,v),p+=ie,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Ks(n[t]);for(const s in i)e[s]=i[s]}return e}function fx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function up(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Qo={clone:Ks,merge:Zt};var dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dx,this.fragmentShader=px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hp extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new U,Nh=new Me,Uh=new Me;class ln extends hp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Nh,Uh),t.subVectors(Uh,Nh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,As=1;class mx extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(ws,As,e,t);s.layers=this.layers,this.add(s);const r=new ln(ws,As,e,t);r.layers=this.layers,this.add(r);const o=new ln(ws,As,e,t);o.layers=this.layers,this.add(o);const a=new ln(ws,As,e,t);a.layers=this.layers,this.add(a);const l=new ln(ws,As,e,t);l.layers=this.layers,this.add(l);const c=new ln(ws,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class fp extends qt{constructor(e=[],t=as,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dp extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vr(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Yn});r.uniforms.tEquirect.value=t;const o=new bn(s,r),a=t.minFilter;return t.minFilter===es&&(t.minFilter=zt),new mx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class ns extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gx={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class fu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new fu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _x extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new U;class ea{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Jo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ea(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Jo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pc extends hs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Cs;const lr=new U,Rs=new U,Ps=new U,Ds=new Me,cr=new Me,pp=new Et,po=new U,ur=new U,mo=new U,Fh=new Me,cl=new Me,Oh=new Me;class Bh extends It{constructor(e=new Pc){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new nn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xx(t,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new ea(i,3,0,!1)),Cs.setAttribute("uv",new ea(i,2,3,!1))}this.geometry=Cs,this.material=e,this.center=new Me(.5,.5),this.count=1}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),pp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Ps.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;go(po.set(-.5,-.5,0),Ps,o,Rs,s,r),go(ur.set(.5,-.5,0),Ps,o,Rs,s,r),go(mo.set(.5,.5,0),Ps,o,Rs,s,r),Fh.set(0,0),cl.set(1,0),Oh.set(1,1);let a=e.ray.intersectTriangle(po,ur,mo,!1,lr);if(a===null&&(go(ur.set(-.5,.5,0),Ps,o,Rs,s,r),cl.set(0,1),a=e.ray.intersectTriangle(po,mo,ur,!1,lr),a===null))return;const l=e.ray.origin.distanceTo(lr);l<e.near||l>e.far||t.push({distance:l,point:lr.clone(),uv:Tn.getInterpolation(lr,po,ur,mo,Fh,cl,Oh,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function go(n,e,t,i,s,r){Ds.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(cr.x=r*Ds.x-s*Ds.y,cr.y=s*Ds.x+r*Ds.y):cr.copy(Ds),n.copy(e),n.x+=cr.x,n.y+=cr.y,n.applyMatrix4(pp)}class vx extends qt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Vt,u=Vt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ul=new U,yx=new U,bx=new Ze;class ai{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ul.subVectors(i,t).cross(yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bx.getNormalMatrix(e),s=this.coplanarPoint(ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new ma,Mx=new Me(.5,.5),_o=new U;class du{constructor(e=new ai,t=new ai,i=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],_=r[8],x=r[9],m=r[10],f=r[11],w=r[12],C=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-o,p-u,f-_,T-w).normalize(),s[1].setComponents(c+o,p+u,f+_,T+w).normalize(),s[2].setComponents(c+a,p+h,f+x,T+C).normalize(),s[3].setComponents(c-a,p-h,f-x,T-C).normalize(),i)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,p-d,f-m,T-M).normalize();else if(s[4].setComponents(c-l,p-d,f-m,T-M).normalize(),t===Xn)s[5].setComponents(c+l,p+d,f+m,T+M).normalize();else if(t===$o)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);const t=Mx.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(_o.x=s.normal.x>0?e.max.x:e.min.x,_o.y=s.normal.y>0?e.max.y:e.min.y,_o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mp extends hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kh=new Et,Dc=new ga,xo=new ma,vo=new U;class Sx extends It{constructor(e=new nn,t=new mp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;kh.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,x=p;_<x;_++){const m=c.getX(_);vo.fromBufferAttribute(h,m),zh(vo,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,x=p;_<x;_++)vo.fromBufferAttribute(h,_),zh(vo,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zh(n,e,t,i,s,r,o){const a=Dc.distanceSqToPoint(n);if(a<t){const l=new U;Dc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Vh extends qt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Or extends qt{constructor(e,t,i=$n,s,r,o,a=Vt,l=Vt,c,u=gi,h=1){if(u!==gi&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ex extends Or{constructor(e,t=$n,i=as,s,r,o=Vt,a=Vt,l,c=gi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gp extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,p=(o-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Me:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,s=[],r=[],o=[],a=new U,l=new Et;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(et(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(et(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _p extends xi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Me){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Tx extends _p{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const yo=new U,hl=new pu,fl=new pu,dl=new pu;class wx extends xi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(yo.subVectors(s[0],s[1]).add(s[0]),c=yo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=yo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),hl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,x,m),fl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,x,m),dl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),fl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),dl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(hl.calc(l),fl.calc(l),dl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Ax(n,e){const t=1-n;return t*t*e}function Cx(n,e){return 2*(1-n)*n*e}function Rx(n,e){return n*n*e}function Tr(n,e,t,i){return Ax(n,e)+Cx(n,t)+Rx(n,i)}function Px(n,e){const t=1-n;return t*t*t*e}function Dx(n,e){const t=1-n;return 3*t*t*n*e}function Lx(n,e){return 3*(1-n)*n*n*e}function Ix(n,e){return n*n*n*e}function wr(n,e,t,i,s){return Px(n,e)+Dx(n,t)+Lx(n,i)+Ix(n,s)}class Nx extends xi{constructor(e=new Me,t=new Me,i=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Me){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xp extends xi{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y),wr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ux extends xi{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fx extends xi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ox extends xi{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Tr(e,s.x,r.x,o.x),Tr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vp extends xi{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Tr(e,s.x,r.x,o.x),Tr(e,s.y,r.y,o.y),Tr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bx extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Hh(a,l.x,c.x,u.x,h.x),Hh(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Me().fromArray(s))}return this}}var kx=Object.freeze({__proto__:null,ArcCurve:Tx,CatmullRomCurve3:wx,CubicBezierCurve:Nx,CubicBezierCurve3:xp,EllipseCurve:_p,LineCurve:Ux,LineCurve3:Fx,QuadraticBezierCurve:Ox,QuadraticBezierCurve3:vp,SplineCurve:Bx});class xa extends nn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],_=[],x=[],m=[];for(let f=0;f<u;f++){const w=f*d-o;for(let C=0;C<c;C++){const M=C*h-r;_.push(M,-w,0),x.push(0,0,1),m.push(C/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const C=w+c*f,M=w+c*(f+1),T=w+1+c*(f+1),P=w+1+c*f;p.push(C,M,P),p.push(M,T,P)}this.setIndex(p),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.widthSegments,e.heightSegments)}}class mu extends nn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,d=new U,p=[],_=[],x=[],m=[];for(let f=0;f<=i;f++){const w=[],C=f/i;let M=0;f===0&&o===0?M=.5/t:f===i&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){const P=T/t;h.x=-e*Math.cos(s+P*r)*Math.sin(o+C*a),h.y=e*Math.cos(o+C*a),h.z=e*Math.sin(s+P*r)*Math.sin(o+C*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(P+M,1-C),w.push(c++)}u.push(w)}for(let f=0;f<i;f++)for(let w=0;w<t;w++){const C=u[f][w+1],M=u[f][w],T=u[f+1][w],P=u[f+1][w+1];(f!==0||o>0)&&p.push(C,M,P),(f!==i-1||l<Math.PI)&&p.push(M,T,P)}this.setIndex(p),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gu extends nn{constructor(e=new vp(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,l=new U,c=new Me;let u=new U;const h=[],d=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(p,2));function x(){for(let C=0;C<t;C++)m(C);m(r===!1?t:0),w(),f()}function m(C){u=e.getPointAt(C/t,u);const M=o.normals[C],T=o.binormals[C];for(let P=0;P<=s;P++){const L=P/s*Math.PI*2,k=Math.sin(L),v=-Math.cos(L);l.x=v*M.x+k*T.x,l.y=v*M.y+k*T.y,l.z=v*M.z+k*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function f(){for(let C=1;C<=t;C++)for(let M=1;M<=s;M++){const T=(s+1)*(C-1)+(M-1),P=(s+1)*C+(M-1),L=(s+1)*C+M,k=(s+1)*(C-1)+M;_.push(T,P,k),_.push(P,L,k)}}function w(){for(let C=0;C<=t;C++)for(let M=0;M<=s;M++)c.x=C/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gu(new kx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class zx extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vx extends hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sp,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hx extends Vx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gx extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wx extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class va extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const pl=new Et,Gh=new U,Wh=new U;class _u{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new du,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wh),t.updateMatrixWorld(),pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xx extends _u{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Zo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jx extends va{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Yx extends _u{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class qx extends va{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Yx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ya extends hp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $x extends _u{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kx extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new $x}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Jx extends va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zx extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Xh=new Et;class ev{constructor(e,t,i=0,s=1/0){this.ray=new ga(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xh),this}intersectObject(e,t=!0,i=[]){return Lc(e,this,i,t),i.sort(jh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Lc(e[s],this,i,t);return i.sort(jh),i}}function jh(n,e){return n.distance-e.distance}function Lc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Lc(r[o],e,t,!0)}}class Yh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tv extends us{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){je("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function qh(n,e,t,i){const s=nv(i);switch(t){case tp:return n*e;case ip:return n*e/s.components*s.byteLength;case ru:return n*e/s.components*s.byteLength;case qs:return n*e*2/s.components*s.byteLength;case ou:return n*e*2/s.components*s.byteLength;case np:return n*e*3/s.components*s.byteLength;case Dn:return n*e*4/s.components*s.byteLength;case au:return n*e*4/s.components*s.byteLength;case Lo:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case No:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zl:case ec:return Math.max(n,16)*Math.max(e,8)/4;case Jl:case Ql:return Math.max(n,8)*Math.max(e,8)/2;case tc:case nc:case sc:case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ic:case oc:case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Mc:case Sc:case Ec:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tc:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ac:case Cc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nv(n){switch(n){case gn:case Jd:return{byteLength:1,components:1};case Nr:case Zd:case vn:return{byteLength:2,components:1};case iu:case su:return{byteLength:2,components:4};case $n:case nu:case Wn:return{byteLength:4,components:1};case Qd:case ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);function yp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function iv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rv=`#ifdef USE_ALPHAHASH
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
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uv=`#ifdef USE_AOMAP
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
#endif`,hv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fv=`#ifdef USE_BATCHING
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
#endif`,dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_v=`#ifdef USE_IRIDESCENCE
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
#endif`,xv=`#ifdef USE_BUMPMAP
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Av=`#define PI 3.141592653589793
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
} // validated`,Cv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rv=`vec3 transformedNormal = objectNormal;
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
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xv=`#ifdef USE_GRADIENTMAP
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
}`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$v=`uniform bool receiveShadow;
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
#endif`,Kv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
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
#endif`,ny=`uniform sampler2D dfgLUT;
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
}`,iy=`
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dy=`#if defined( USE_POINTS_UV )
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
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
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
#endif`,yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wy=`#ifdef USE_NORMALMAP
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
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hy=`float getShadowMask() {
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
}`,Gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,Yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ky=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,Zy=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sb=`uniform sampler2D t2D;
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
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`#include <common>
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
}`,ub=`#if DEPTH_PACKING == 3200
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
}`,hb=`#define DISTANCE
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
}`,fb=`#define DISTANCE
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`uniform float scale;
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
}`,gb=`uniform vec3 diffuse;
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
}`,_b=`#include <common>
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
}`,xb=`uniform vec3 diffuse;
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
}`,vb=`#define LAMBERT
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
}`,yb=`#define LAMBERT
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
}`,bb=`#define MATCAP
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
}`,Mb=`#define MATCAP
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
}`,Sb=`#define NORMAL
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
}`,Eb=`#define NORMAL
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
}`,Tb=`#define PHONG
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
}`,wb=`#define PHONG
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
}`,Ab=`#define STANDARD
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
}`,Cb=`#define STANDARD
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
}`,Rb=`#define TOON
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
}`,Pb=`#define TOON
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
}`,Db=`uniform float size;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Nb=`uniform vec3 color;
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
}`,Ub=`uniform float rotation;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:sv,alphahash_pars_fragment:rv,alphamap_fragment:ov,alphamap_pars_fragment:av,alphatest_fragment:lv,alphatest_pars_fragment:cv,aomap_fragment:uv,aomap_pars_fragment:hv,batching_pars_vertex:fv,batching_vertex:dv,begin_vertex:pv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:_v,bumpmap_pars_fragment:xv,clipping_planes_fragment:vv,clipping_planes_pars_fragment:yv,clipping_planes_pars_vertex:bv,clipping_planes_vertex:Mv,color_fragment:Sv,color_pars_fragment:Ev,color_pars_vertex:Tv,color_vertex:wv,common:Av,cube_uv_reflection_fragment:Cv,defaultnormal_vertex:Rv,displacementmap_pars_vertex:Pv,displacementmap_vertex:Dv,emissivemap_fragment:Lv,emissivemap_pars_fragment:Iv,colorspace_fragment:Nv,colorspace_pars_fragment:Uv,envmap_fragment:Fv,envmap_common_pars_fragment:Ov,envmap_pars_fragment:Bv,envmap_pars_vertex:kv,envmap_physical_pars_fragment:Kv,envmap_vertex:zv,fog_vertex:Vv,fog_pars_vertex:Hv,fog_fragment:Gv,fog_pars_fragment:Wv,gradientmap_pars_fragment:Xv,lightmap_pars_fragment:jv,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:qv,lights_pars_begin:$v,lights_toon_fragment:Jv,lights_toon_pars_fragment:Zv,lights_phong_fragment:Qv,lights_phong_pars_fragment:ey,lights_physical_fragment:ty,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:sy,lights_fragment_end:ry,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:ly,logdepthbuf_vertex:cy,map_fragment:uy,map_pars_fragment:hy,map_particle_fragment:fy,map_particle_pars_fragment:dy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:_y,morphnormal_vertex:xy,morphtarget_pars_vertex:vy,morphtarget_vertex:yy,normal_fragment_begin:by,normal_fragment_maps:My,normal_pars_fragment:Sy,normal_pars_vertex:Ey,normal_vertex:Ty,normalmap_pars_fragment:wy,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Ry,iridescence_pars_fragment:Py,opaque_fragment:Dy,packing:Ly,premultiplied_alpha_fragment:Iy,project_vertex:Ny,dithering_fragment:Uy,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:zy,shadowmap_vertex:Vy,shadowmask_pars_fragment:Hy,skinbase_vertex:Gy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:jy,specularmap_fragment:Yy,specularmap_pars_fragment:qy,tonemapping_fragment:$y,tonemapping_pars_fragment:Ky,transmission_fragment:Jy,transmission_pars_fragment:Zy,uv_pars_fragment:Qy,uv_pars_vertex:eb,uv_vertex:tb,worldpos_vertex:nb,background_vert:ib,background_frag:sb,backgroundCube_vert:rb,backgroundCube_frag:ob,cube_vert:ab,cube_frag:lb,depth_vert:cb,depth_frag:ub,distance_vert:hb,distance_frag:fb,equirect_vert:db,equirect_frag:pb,linedashed_vert:mb,linedashed_frag:gb,meshbasic_vert:_b,meshbasic_frag:xb,meshlambert_vert:vb,meshlambert_frag:yb,meshmatcap_vert:bb,meshmatcap_frag:Mb,meshnormal_vert:Sb,meshnormal_frag:Eb,meshphong_vert:Tb,meshphong_frag:wb,meshphysical_vert:Ab,meshphysical_frag:Cb,meshtoon_vert:Rb,meshtoon_frag:Pb,points_vert:Db,points_frag:Lb,shadow_vert:Ib,shadow_frag:Nb,sprite_vert:Ub,sprite_frag:Fb},Ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Vn={basic:{uniforms:Zt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Zt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Zt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Zt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Zt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Zt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Zt([Ce.points,Ce.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Zt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Zt([Ce.common,Ce.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Zt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Zt([Ce.sprite,Ce.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Zt([Ce.common,Ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Zt([Ce.lights,Ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Vn.physical={uniforms:Zt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const bo={r:0,b:0,g:0},qi=new Kn,Ob=new Et;function Bb(n,e,t,i,s,r,o){const a=new qe(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(C){let M=C.isScene===!0?C.background:null;return M&&M.isTexture&&(M=(C.backgroundBlurriness>0?t:e).get(M)),M}function x(C){let M=!1;const T=_(C);T===null?f(a,l):T&&T.isColor&&(f(T,1),M=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(C,M){const T=_(M);T&&(T.isCubeTexture||T.mapping===pa)?(u===void 0&&(u=new bn(new Vr(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Ks(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qi.copy(M.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(qi)),u.material.toneMapped=st.getTransfer(T.colorSpace)!==ht,(h!==T||d!==T.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,p=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new bn(new xa(2,2),new Yt({name:"BackgroundMaterial",uniforms:Ks(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=st.getTransfer(T.colorSpace)!==ht,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,p=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function f(C,M){C.getRGB(bo,up(n)),i.buffers.color.setClear(bo.r,bo.g,bo.b,M,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,M=1){a.set(C),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,f(a,l)},render:x,addToRenderList:m,dispose:w}}function kb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(S,D,N,H,re){let oe=!1;const Z=h(H,N,D);r!==Z&&(r=Z,c(r.object)),oe=p(S,H,N,re),oe&&_(S,H,N,re),re!==null&&e.update(re,n.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,M(S,D,N,H),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,D,N){const H=N.wireframe===!0;let re=i[S.id];re===void 0&&(re={},i[S.id]=re);let oe=re[D.id];oe===void 0&&(oe={},re[D.id]=oe);let Z=oe[H];return Z===void 0&&(Z=d(l()),oe[H]=Z),Z}function d(S){const D=[],N=[],H=[];for(let re=0;re<t;re++)D[re]=0,N[re]=0,H[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,D,N,H){const re=r.attributes,oe=D.attributes;let Z=0;const V=N.getAttributes();for(const ie in V)if(V[ie].location>=0){const xe=re[ie];let Ee=oe[ie];if(Ee===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),xe===void 0||xe.attribute!==Ee||Ee&&xe.data!==Ee.data)return!0;Z++}return r.attributesNum!==Z||r.index!==H}function _(S,D,N,H){const re={},oe=D.attributes;let Z=0;const V=N.getAttributes();for(const ie in V)if(V[ie].location>=0){let xe=oe[ie];xe===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor));const Ee={};Ee.attribute=xe,xe&&xe.data&&(Ee.data=xe.data),re[ie]=Ee,Z++}r.attributes=re,r.attributesNum=Z,r.index=H}function x(){const S=r.newAttributes;for(let D=0,N=S.length;D<N;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){const N=r.newAttributes,H=r.enabledAttributes,re=r.attributeDivisors;N[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),re[S]!==D&&(n.vertexAttribDivisor(S,D),re[S]=D)}function w(){const S=r.newAttributes,D=r.enabledAttributes;for(let N=0,H=D.length;N<H;N++)D[N]!==S[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function C(S,D,N,H,re,oe,Z){Z===!0?n.vertexAttribIPointer(S,D,N,re,oe):n.vertexAttribPointer(S,D,N,H,re,oe)}function M(S,D,N,H){x();const re=H.attributes,oe=N.getAttributes(),Z=D.defaultAttributeValues;for(const V in oe){const ie=oe[V];if(ie.location>=0){let ve=re[V];if(ve===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ve!==void 0){const xe=ve.normalized,Ee=ve.itemSize,Ge=e.get(ve);if(Ge===void 0)continue;const Ye=Ge.buffer,ft=Ge.type,lt=Ge.bytesPerElement,ae=ft===n.INT||ft===n.UNSIGNED_INT||ve.gpuType===nu;if(ve.isInterleavedBufferAttribute){const he=ve.data,Ne=he.stride,fe=ve.offset;if(he.isInstancedInterleavedBuffer){for(let ee=0;ee<ie.locationSize;ee++)f(ie.location+ee,he.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ee=0;ee<ie.locationSize;ee++)m(ie.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ee=0;ee<ie.locationSize;ee++)C(ie.location+ee,Ee/ie.locationSize,ft,xe,Ne*lt,(fe+Ee/ie.locationSize*ee)*lt,ae)}else{if(ve.isInstancedBufferAttribute){for(let he=0;he<ie.locationSize;he++)f(ie.location+he,ve.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let he=0;he<ie.locationSize;he++)m(ie.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let he=0;he<ie.locationSize;he++)C(ie.location+he,Ee/ie.locationSize,ft,xe,Ee*lt,Ee/ie.locationSize*he*lt,ae)}}else if(Z!==void 0){const xe=Z[V];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(ie.location,xe);break;case 3:n.vertexAttrib3fv(ie.location,xe);break;case 4:n.vertexAttrib4fv(ie.location,xe);break;default:n.vertexAttrib1fv(ie.location,xe)}}}}w()}function T(){k();for(const S in i){const D=i[S];for(const N in D){const H=D[N];for(const re in H)u(H[re].object),delete H[re];delete D[N]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const N in D){const H=D[N];for(const re in H)u(H[re].object),delete H[re];delete D[N]}delete i[S.id]}function L(S){for(const D in i){const N=i[D];if(N[S.id]===void 0)continue;const H=N[S.id];for(const re in H)u(H[re].object),delete H[re];delete N[S.id]}}function k(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function zb(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*d[x];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Dn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const k=L===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==gn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Wn&&!k)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:M,maxSamples:T,samples:P}}function Hb(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ai,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,C=w*4;let M=f.clippingState||null;l.value=M,M=u(_,d,C,p);for(let T=0;T!==C;++T)M[T]=t[T];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const f=p+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,M=p;C!==x;++C,M+=4)o.copy(h[C]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Gb(n){let e=new WeakMap;function t(o,a){return a===Yl?o.mapping=as:a===ql&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yl||a===ql)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Pi=4,$h=[.125,.215,.35,.446,.526,.582],Qi=20,Wb=256,hr=new ya,Kh=new qe;let ml=null,gl=0,_l=0,xl=!1;const Xb=new U;class Jh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Xb}=r;ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,_l),this._renderer.xr.enabled=xl,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:vn,format:Dn,colorSpace:$s,depthBuffer:!1},s=Zh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jb(r)),this._blurMaterial=qb(r,e,t),this._ggxMaterial=Yb(r,e,t)}return s}_compileMaterial(e){const t=new bn(new nn,e);this._renderer.compile(t,hr)}_sceneToCubeUV(e,t,i,s,r){const l=new ln(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Kh),h.toneMapping=qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new Vr,new _a({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let f=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,f=!0):(m.color.copy(Kh),f=!0);for(let C=0;C<6;C++){const M=C%3;M===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[C],r.y,r.z)):M===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[C]));const T=this._cubeSize;Ls(s,M*T,C>2?T:0,T,T),h.setRenderTarget(s),f&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===as||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ls(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,hr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,p=h*d,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Pi?i-_+Pi:0),f=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Ls(r,m,f,3*x,2*x),s.setRenderTarget(r),s.render(a,hr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Ls(e,m,f,3*x,2*x),s.setRenderTarget(e),s.render(a,hr)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Qi-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Qi;m>Qi&&je(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const f=[];let w=0;for(let L=0;L<Qi;++L){const k=L/x,v=Math.exp(-k*k/2);f.push(v),L===0?w+=v:L<m&&(w+=2*v)}for(let L=0;L<f.length;L++)f[L]=f[L]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:C}=this;d.dTheta.value=_,d.mipInt.value=C-i;const M=this._sizeLods[s],T=3*M*(s>C-Pi?s-C+Pi:0),P=4*(this._cubeSize-M);Ls(t,T,P,3*M,2*M),l.setRenderTarget(t),l.render(h,hr)}}function jb(n){const e=[],t=[],i=[];let s=n;const r=n-Pi+1+$h.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Pi?l=$h[o-n+Pi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,f=1,w=new Float32Array(x*_*p),C=new Float32Array(m*_*p),M=new Float32Array(f*_*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,k=P>2?0:-1,v=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];w.set(v,x*_*P),C.set(d,m*_*P);const S=[P,P,P,P,P,P];M.set(S,f*_*P)}const T=new nn;T.setAttribute("position",new yn(w,x)),T.setAttribute("uv",new yn(C,m)),T.setAttribute("faceIndex",new yn(M,f)),i.push(new bn(T,null)),s>Pi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Zh(n,e,t){const i=new un(n,e,t);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Yb(n,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function qb(n,e,t){const i=new Float32Array(Qi),s=new U(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ba(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Qh(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ef(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ba(){return`

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
	`}function $b(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yl||l===ql,u=l===as||l===Ys;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Jh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Jh(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Kb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Fr("WebGLRenderer: "+i+" extension not supported."),s}}}function Jb(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let C=0,M=w.length;C<M;C+=3){const T=w[C+0],P=w[C+1],L=w[C+2];d.push(T,P,P,L,L,T)}}else if(_!==void 0){const w=_.array;x=_.version;for(let C=0,M=w.length/3-1;C<M;C+=3){const T=C+0,P=C+1,L=C+2;d.push(T,P,P,L,L,T)}}else return;const m=new(rp(d)?cp:lp)(d,1);m.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Zb(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,d*o,_),t.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,i,1)}function h(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,_);let f=0;for(let w=0;w<_;w++)f+=p[w]*x[w];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Qb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function eM(n,e,t){const i=new WeakMap,s=new Rt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){k.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let T=a.attributes.position.count*M,P=1;T>e.maxTextureSize&&(P=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const L=new Float32Array(T*P*4*h),k=new op(L,T,P,h);k.type=Wn,k.needsUpdate=!0;const v=M*4;for(let D=0;D<h;D++){const N=f[D],H=w[D],re=C[D],oe=T*P*4*D;for(let Z=0;Z<N.count;Z++){const V=Z*v;_===!0&&(s.fromBufferAttribute(N,Z),L[oe+V+0]=s.x,L[oe+V+1]=s.y,L[oe+V+2]=s.z,L[oe+V+3]=0),x===!0&&(s.fromBufferAttribute(H,Z),L[oe+V+4]=s.x,L[oe+V+5]=s.y,L[oe+V+6]=s.z,L[oe+V+7]=0),m===!0&&(s.fromBufferAttribute(re,Z),L[oe+V+8]=s.x,L[oe+V+9]=s.y,L[oe+V+10]=s.z,L[oe+V+11]=re.itemSize===4?s.w:1)}}d={count:h,texture:k,size:new Me(T,P)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function tM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const nM={[Gd]:"LINEAR_TONE_MAPPING",[Wd]:"REINHARD_TONE_MAPPING",[Xd]:"CINEON_TONE_MAPPING",[jd]:"ACES_FILMIC_TONE_MAPPING",[qd]:"AGX_TONE_MAPPING",[$d]:"NEUTRAL_TONE_MAPPING",[Yd]:"CUSTOM_TONE_MAPPING"};function iM(n,e,t,i,s){const r=new un(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new un(e,t,{type:vn,depthBuffer:!1,stencilBuffer:!1}),a=new nn;a.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const l=new zx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new bn(a,l),u=new ya(-1,1,1,-1,0,1);let h=null,d=null,p=!1,_,x=null,m=[],f=!1;this.setSize=function(w,C){r.setSize(w,C),o.setSize(w,C);for(let M=0;M<m.length;M++){const T=m[M];T.setSize&&T.setSize(w,C)}},this.setEffects=function(w){m=w,f=m.length>0&&m[0].isRenderPass===!0;const C=r.width,M=r.height;for(let T=0;T<m.length;T++){const P=m[T];P.setSize&&P.setSize(C,M)}},this.begin=function(w,C){if(p||w.toneMapping===qn&&m.length===0)return!1;if(x=C,C!==null){const M=C.width,T=C.height;(r.width!==M||r.height!==T)&&this.setSize(M,T)}return f===!1&&w.setRenderTarget(r),_=w.toneMapping,w.toneMapping=qn,!0},this.hasRenderPass=function(){return f},this.end=function(w,C){w.toneMapping=_,p=!0;let M=r,T=o;for(let P=0;P<m.length;P++){const L=m[P];if(L.enabled!==!1&&(L.render(w,T,M,C),L.needsSwap!==!1)){const k=M;M=T,T=k}}if(h!==w.outputColorSpace||d!==w.toneMapping){h=w.outputColorSpace,d=w.toneMapping,l.defines={},st.getTransfer(h)===ht&&(l.defines.SRGB_TRANSFER="");const P=nM[d];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,w.setRenderTarget(x),w.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const bp=new qt,Ic=new Or(1,1),Mp=new op,Sp=new ex,Ep=new fp,tf=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),of=new Float32Array(4);function er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=tf[s];if(r===void 0&&(r=new Float32Array(s),tf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ma(n,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function lM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;of.set(i),n.uniformMatrix2fv(this.addr,!1,of),Bt(t,i)}}function cM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;rf.set(i),n.uniformMatrix3fv(this.addr,!1,rf),Bt(t,i)}}function uM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;sf.set(i),n.uniformMatrix4fv(this.addr,!1,sf),Bt(t,i)}}function hM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function mM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function vM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ic.compareFunction=t.isReversedDepthBuffer()?cu:lu,r=Ic):r=bp,t.setTexture2D(e||r,s)}function yM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Sp,s)}function bM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ep,s)}function MM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Mp,s)}function SM(n){switch(n){case 5126:return sM;case 35664:return rM;case 35665:return oM;case 35666:return aM;case 35674:return lM;case 35675:return cM;case 35676:return uM;case 5124:case 35670:return hM;case 35667:case 35671:return fM;case 35668:case 35672:return dM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return _M;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return vM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return MM}}function EM(n,e){n.uniform1fv(this.addr,e)}function TM(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function wM(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function AM(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function CM(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function RM(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function PM(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function DM(n,e){n.uniform1iv(this.addr,e)}function LM(n,e){n.uniform2iv(this.addr,e)}function IM(n,e){n.uniform3iv(this.addr,e)}function NM(n,e){n.uniform4iv(this.addr,e)}function UM(n,e){n.uniform1uiv(this.addr,e)}function FM(n,e){n.uniform2uiv(this.addr,e)}function OM(n,e){n.uniform3uiv(this.addr,e)}function BM(n,e){n.uniform4uiv(this.addr,e)}function kM(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ic:o=bp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function zM(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sp,r[o])}function VM(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ep,r[o])}function HM(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mp,r[o])}function GM(n){switch(n){case 5126:return EM;case 35664:return TM;case 35665:return wM;case 35666:return AM;case 35674:return CM;case 35675:return RM;case 35676:return PM;case 5124:case 35670:return DM;case 35667:case 35671:return LM;case 35668:case 35672:return IM;case 35669:case 35673:return NM;case 5125:return UM;case 36294:return FM;case 36295:return OM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return HM}}class WM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SM(t.type)}}class XM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GM(t.type)}}class jM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function af(n,e){n.seq.push(e),n.map[e.id]=e}function YM(n,e,t){const i=n.name,s=i.length;for(vl.lastIndex=0;;){const r=vl.exec(i),o=vl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){af(t,c===void 0?new WM(a,n,e):new XM(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new jM(a),af(t,h)),t=h}}}class Oo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);YM(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function lf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qM=37297;let $M=0;function KM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const cf=new Ze;function JM(n){st._getMatrix(cf,st.workingColorSpace,n);const e=`mat3( ${cf.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case qo:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function uf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+KM(n.getShaderSource(e),a)}else return r}function ZM(n,e){const t=JM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const QM={[Gd]:"Linear",[Wd]:"Reinhard",[Xd]:"Cineon",[jd]:"ACESFilmic",[qd]:"AgX",[$d]:"Neutral",[Yd]:"Custom"};function eS(n,e){const t=QM[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mo=new U;function tS(){st.getLuminanceCoefficients(Mo);const n=Mo.x.toFixed(4),e=Mo.y.toFixed(4),t=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function iS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function mr(n){return n!==""}function hf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ff(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(n){return n.replace(rS,aS)}const oS=new Map;function aS(n,e){let t=Qe[e];if(t===void 0){const i=oS.get(e);if(i!==void 0)t=Qe[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}const lS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(lS,cS)}function cS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const uS={[Do]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function hS(n){return uS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fS={[as]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE_UV"};function dS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":fS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const pS={[Ys]:"ENVMAP_MODE_REFRACTION"};function mS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":pS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gS={[Hd]:"ENVMAP_BLENDING_MULTIPLY",[N_]:"ENVMAP_BLENDING_MIX",[U_]:"ENVMAP_BLENDING_ADD"};function _S(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":gS[n.combine]||"ENVMAP_BLENDING_NONE"}function xS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=hS(t),c=dS(t),u=mS(t),h=_S(t),d=xS(t),p=nS(t),_=iS(r),x=s.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(mr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(mr).join(`
`),f.length>0&&(f+=`
`)):(m=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),f=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==qn?eS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,ZM("linearToOutputTexel",t.outputColorSpace),tS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=Nc(o),o=hf(o,t),o=ff(o,t),a=Nc(a),a=hf(a,t),a=ff(a,t),o=df(o),a=df(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const C=w+m+o,M=w+f+a,T=lf(s,s.VERTEX_SHADER,C),P=lf(s,s.FRAGMENT_SHADER,M);s.attachShader(x,T),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(D){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(T)||"",re=s.getShaderInfoLog(P)||"",oe=N.trim(),Z=H.trim(),V=re.trim();let ie=!0,ve=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,P);else{const xe=uf(s,T,"vertex"),Ee=uf(s,P,"fragment");nt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+oe+`
`+xe+`
`+Ee)}else oe!==""?je("WebGLProgram: Program Info Log:",oe):(Z===""||V==="")&&(ve=!1);ve&&(D.diagnostics={runnable:ie,programLog:oe,vertexShader:{log:Z,prefix:m},fragmentShader:{log:V,prefix:f}})}s.deleteShader(T),s.deleteShader(P),k=new Oo(s,x),v=sS(s,x)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let v;this.getAttributes=function(){return v===void 0&&L(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,qM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$M++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=P,this}let yS=0;class bS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new MS(e),t.set(e,i)),i}}class MS{constructor(e){this.id=yS++,this.code=e,this.usedTimes=0}}function SS(n,e,t,i,s,r,o){const a=new hu,l=new bS,c=new Set,u=[],h=new Map,d=s.logarithmicDepthBuffer;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,D,N,H){const re=N.fog,oe=H.geometry,Z=v.isMeshStandardMaterial?N.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),ie=V&&V.mapping===pa?V.image.height:null,ve=_[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&je("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const xe=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ee=xe!==void 0?xe.length:0;let Ge=0;oe.morphAttributes.position!==void 0&&(Ge=1),oe.morphAttributes.normal!==void 0&&(Ge=2),oe.morphAttributes.color!==void 0&&(Ge=3);let Ye,ft,lt,ae;if(ve){const ct=Vn[ve];Ye=ct.vertexShader,ft=ct.fragmentShader}else Ye=v.vertexShader,ft=v.fragmentShader,l.update(v),lt=l.getVertexShaderID(v),ae=l.getFragmentShaderID(v);const he=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),fe=H.isInstancedMesh===!0,ee=H.isBatchedMesh===!0,ge=!!v.map,E=!!v.matcap,R=!!V,B=!!v.aoMap,Y=!!v.lightMap,G=!!v.bumpMap,K=!!v.normalMap,A=!!v.displacementMap,le=!!v.emissiveMap,te=!!v.metalnessMap,q=!!v.roughnessMap,se=v.anisotropy>0,y=v.clearcoat>0,g=v.dispersion>0,I=v.iridescence>0,j=v.sheen>0,ne=v.transmission>0,X=se&&!!v.anisotropyMap,Re=y&&!!v.clearcoatMap,pe=y&&!!v.clearcoatNormalMap,Le=y&&!!v.clearcoatRoughnessMap,ke=I&&!!v.iridescenceMap,de=I&&!!v.iridescenceThicknessMap,be=j&&!!v.sheenColorMap,we=j&&!!v.sheenRoughnessMap,Ie=!!v.specularMap,ye=!!v.specularColorMap,Je=!!v.specularIntensityMap,O=ne&&!!v.transmissionMap,De=ne&&!!v.thicknessMap,_e=!!v.gradientMap,Fe=!!v.alphaMap,me=v.alphaTest>0,ce=!!v.alphaHash,Se=!!v.extensions;let $e=qn;v.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&($e=n.toneMapping);const bt={shaderID:ve,shaderType:v.type,shaderName:v.name,vertexShader:Ye,fragmentShader:ft,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:ee,batchingColor:ee&&H._colorsTexture!==null,instancing:fe,instancingColor:fe&&H.instanceColor!==null,instancingMorph:fe&&H.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:$s,alphaToCoverage:!!v.alphaToCoverage,map:ge,matcap:E,envMap:R,envMapMode:R&&V.mapping,envMapCubeUVHeight:ie,aoMap:B,lightMap:Y,bumpMap:G,normalMap:K,displacementMap:A,emissiveMap:le,normalMapObjectSpace:K&&v.normalMapType===B_,normalMapTangentSpace:K&&v.normalMapType===sp,metalnessMap:te,roughnessMap:q,anisotropy:se,anisotropyMap:X,clearcoat:y,clearcoatMap:Re,clearcoatNormalMap:pe,clearcoatRoughnessMap:Le,dispersion:g,iridescence:I,iridescenceMap:ke,iridescenceThicknessMap:de,sheen:j,sheenColorMap:be,sheenRoughnessMap:we,specularMap:Ie,specularColorMap:ye,specularIntensityMap:Je,transmission:ne,transmissionMap:O,thicknessMap:De,gradientMap:_e,opaque:v.transparent===!1&&v.blending===Gs&&v.alphaToCoverage===!1,alphaMap:Fe,alphaTest:me,alphaHash:ce,combine:v.combine,mapUv:ge&&x(v.map.channel),aoMapUv:B&&x(v.aoMap.channel),lightMapUv:Y&&x(v.lightMap.channel),bumpMapUv:G&&x(v.bumpMap.channel),normalMapUv:K&&x(v.normalMap.channel),displacementMapUv:A&&x(v.displacementMap.channel),emissiveMapUv:le&&x(v.emissiveMap.channel),metalnessMapUv:te&&x(v.metalnessMap.channel),roughnessMapUv:q&&x(v.roughnessMap.channel),anisotropyMapUv:X&&x(v.anisotropyMap.channel),clearcoatMapUv:Re&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(v.sheenRoughnessMap.channel),specularMapUv:Ie&&x(v.specularMap.channel),specularColorMapUv:ye&&x(v.specularColorMap.channel),specularIntensityMapUv:Je&&x(v.specularIntensityMap.channel),transmissionMapUv:O&&x(v.transmissionMap.channel),thicknessMapUv:De&&x(v.thicknessMap.channel),alphaMapUv:Fe&&x(v.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(K||se),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!oe.attributes.uv&&(ge||Fe),fog:!!re,useFog:v.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:H.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:ge&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===ht,decodeVideoTextureEmissive:le&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Hn,flipSided:v.side===cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Se&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&v.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function f(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(w(S,v),C(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function w(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function C(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const S=_[v.type];let D;if(S){const N=Vn[S];D=Qo.clone(N.uniforms)}else D=v.uniforms;return D}function T(v,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new vS(n,S,v,r),u.push(D),h.set(S,D)),D}function P(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function L(v){l.remove(v)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:T,releaseProgram:P,releaseShaderCache:L,programs:u,dispose:k}}function ES(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function TS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,p,_,x,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,_,x,m){const f=o(h,d,p,_,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,_,x,m){const f=o(h,d,p,_,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||TS),i.length>1&&i.sort(d||mf),s.length>1&&s.sort(d||mf)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function wS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new gf,n.set(i,[o])):s>=r.length?(o=new gf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function AS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new qe};break;case"SpotLight":t={position:new U,direction:new U,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function CS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RS=0;function PS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function DS(n){const e=new AS,t=CS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new Et,o=new Et;function a(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,w=0,C=0,M=0,T=0,P=0,L=0;c.sort(PS);for(let v=0,S=c.length;v<S;v++){const D=c[v],N=D.color,H=D.intensity,re=D.distance;let oe=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===qs?oe=D.shadow.map.texture:oe=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=N.r*H,h+=N.g*H,d+=N.b*H;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],H);L++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const V=D.shadow,ie=t.get(D);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=D.shadow.matrix,w++}i.directional[p]=Z,p++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(N).multiplyScalar(H),Z.distance=re,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[x]=Z;const V=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,V.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[x]=V.matrix,D.castShadow){const ie=t.get(D);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,i.spotShadow[x]=ie,i.spotShadowMap[x]=oe,M++}x++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(N).multiplyScalar(H),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Z,m++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const V=D.shadow,ie=t.get(D);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,ie.shadowCameraNear=V.camera.near,ie.shadowCameraFar=V.camera.far,i.pointShadow[_]=ie,i.pointShadowMap[_]=oe,i.pointShadowMatrix[_]=D.shadow.matrix,C++}i.point[_]=Z,_++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(H),Z.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[f]=Z,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const k=i.hash;(k.directionalLength!==p||k.pointLength!==_||k.spotLength!==x||k.rectAreaLength!==m||k.hemiLength!==f||k.numDirectionalShadows!==w||k.numPointShadows!==C||k.numSpotShadows!==M||k.numSpotMaps!==T||k.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=M+T-P,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,k.directionalLength=p,k.pointLength=_,k.spotLength=x,k.rectAreaLength=m,k.hemiLength=f,k.numDirectionalShadows=w,k.numPointShadows=C,k.numSpotShadows=M,k.numSpotMaps=T,k.numLightProbes=L,i.version=RS++)}function l(c,u){let h=0,d=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const C=c[f];if(C.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(C.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(C.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(C.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(C.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),d++}else if(C.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function _f(n){const e=new DS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function LS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new _f(n),e.set(s,[a])):r>=o.length?(a=new _f(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const IS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NS=`uniform sampler2D shadow_pass;
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
}`,US=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],FS=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],xf=new Et,fr=new U,yl=new U;function OS(n,e,t){let i=new du;const s=new Me,r=new Me,o=new Rt,a=new Gx,l=new Wx,c={},u=t.maxTextureSize,h={[Ui]:cn,[cn]:Ui,[Hn]:Hn},d=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:IS,fragmentShader:NS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new bn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let f=this.type;this.render=function(P,L,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;P.type===Vd&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Do);const v=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Yn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=f!==this.type;H&&L.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(oe=>oe.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,oe=P.length;re<oe;re++){const Z=P[re],V=Z.shadow;if(V===void 0){je("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ie=V.getFrameExtents();if(s.multiply(ie),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y)),V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===pr){if(Z.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new un(s.x,s.y,{format:qs,type:vn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new Or(s.x,s.y,Wn),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=gi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt}else{Z.isPointLight?(V.map=new dp(s.x),V.map.depthTexture=new Ex(s.x,$n)):(V.map=new un(s.x,s.y),V.map.depthTexture=new Or(s.x,s.y,$n)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=gi;const xe=n.state.buffers.depth.getReversed();this.type===Do?(V.map.depthTexture.compareFunction=xe?cu:lu,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt)}V.camera.updateProjectionMatrix()}const ve=V.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<ve;xe++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,xe),n.clear();else{xe===0&&(n.setRenderTarget(V.map),n.clear());const Ee=V.getViewport(xe);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),N.viewport(o)}if(Z.isPointLight){const Ee=V.camera,Ge=V.matrix,Ye=Z.distance||Ee.far;Ye!==Ee.far&&(Ee.far=Ye,Ee.updateProjectionMatrix()),fr.setFromMatrixPosition(Z.matrixWorld),Ee.position.copy(fr),yl.copy(Ee.position),yl.add(US[xe]),Ee.up.copy(FS[xe]),Ee.lookAt(yl),Ee.updateMatrixWorld(),Ge.makeTranslation(-fr.x,-fr.y,-fr.z),xf.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),V._frustum.setFromProjectionMatrix(xf,Ee.coordinateSystem,Ee.reversedDepth)}else V.updateMatrices(Z);i=V.getFrustum(),M(L,k,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===pr&&w(V,k),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(v,S,D)};function w(P,L){const k=e.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new un(s.x,s.y,{format:qs,type:vn})),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(L,null,k,d,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(L,null,k,p,x,null)}function C(P,L,k,v){let S=null;const D=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)S=D;else if(S=k.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const N=S.uuid,H=L.uuid;let re=c[N];re===void 0&&(re={},c[N]=re);let oe=re[H];oe===void 0&&(oe=S.clone(),re[H]=oe,L.addEventListener("dispose",T)),S=oe}if(S.visible=L.visible,S.wireframe=L.wireframe,v===pr?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:h[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,k.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=k}return S}function M(P,L,k,v,S){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===pr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const H=e.update(P),re=P.material;if(Array.isArray(re)){const oe=H.groups;for(let Z=0,V=oe.length;Z<V;Z++){const ie=oe[Z],ve=re[ie.materialIndex];if(ve&&ve.visible){const xe=C(P,ve,v,S);P.onBeforeShadow(n,P,L,k,H,xe,ie),n.renderBufferDirect(k,null,H,xe,P,ie),P.onAfterShadow(n,P,L,k,H,xe,ie)}}}else if(re.visible){const oe=C(P,re,v,S);P.onBeforeShadow(n,P,L,k,H,oe,null),n.renderBufferDirect(k,null,H,oe,P,null),P.onAfterShadow(n,P,L,k,H,oe,null)}}const N=P.children;for(let H=0,re=N.length;H<re;H++)M(N[H],L,k,v,S)}function T(P){P.target.removeEventListener("dispose",T);for(const k in c){const v=c[k],S=P.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const BS={[zl]:Vl,[Hl]:Xl,[Gl]:jl,[js]:Wl,[Vl]:zl,[Xl]:Hl,[jl]:Gl,[Wl]:js};function kS(n,e){function t(){let O=!1;const De=new Rt;let _e=null;const Fe=new Rt(0,0,0,0);return{setMask:function(me){_e!==me&&!O&&(n.colorMask(me,me,me,me),_e=me)},setLocked:function(me){O=me},setClear:function(me,ce,Se,$e,bt){bt===!0&&(me*=$e,ce*=$e,Se*=$e),De.set(me,ce,Se,$e),Fe.equals(De)===!1&&(n.clearColor(me,ce,Se,$e),Fe.copy(De))},reset:function(){O=!1,_e=null,Fe.set(-1,0,0,0)}}}function i(){let O=!1,De=!1,_e=null,Fe=null,me=null;return{setReversed:function(ce){if(De!==ce){const Se=e.get("EXT_clip_control");ce?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),De=ce;const $e=me;me=null,this.setClear($e)}},getReversed:function(){return De},setTest:function(ce){ce?he(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(ce){_e!==ce&&!O&&(n.depthMask(ce),_e=ce)},setFunc:function(ce){if(De&&(ce=BS[ce]),Fe!==ce){switch(ce){case zl:n.depthFunc(n.NEVER);break;case Vl:n.depthFunc(n.ALWAYS);break;case Hl:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case Gl:n.depthFunc(n.EQUAL);break;case Wl:n.depthFunc(n.GEQUAL);break;case Xl:n.depthFunc(n.GREATER);break;case jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=ce}},setLocked:function(ce){O=ce},setClear:function(ce){me!==ce&&(De&&(ce=1-ce),n.clearDepth(ce),me=ce)},reset:function(){O=!1,_e=null,Fe=null,me=null,De=!1}}}function s(){let O=!1,De=null,_e=null,Fe=null,me=null,ce=null,Se=null,$e=null,bt=null;return{setTest:function(ct){O||(ct?he(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(ct){De!==ct&&!O&&(n.stencilMask(ct),De=ct)},setFunc:function(ct,Fn,Jn){(_e!==ct||Fe!==Fn||me!==Jn)&&(n.stencilFunc(ct,Fn,Jn),_e=ct,Fe=Fn,me=Jn)},setOp:function(ct,Fn,Jn){(ce!==ct||Se!==Fn||$e!==Jn)&&(n.stencilOp(ct,Fn,Jn),ce=ct,Se=Fn,$e=Jn)},setLocked:function(ct){O=ct},setClear:function(ct){bt!==ct&&(n.clearStencil(ct),bt=ct)},reset:function(){O=!1,De=null,_e=null,Fe=null,me=null,ce=null,Se=null,$e=null,bt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,w=null,C=null,M=null,T=null,P=null,L=new qe(0,0,0),k=0,v=!1,S=null,D=null,N=null,H=null,re=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,V=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Z=V>=1):ie.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Z=V>=2);let ve=null,xe={};const Ee=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),Ye=new Rt().fromArray(Ee),ft=new Rt().fromArray(Ge);function lt(O,De,_e,Fe){const me=new Uint8Array(4),ce=n.createTexture();n.bindTexture(O,ce),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<_e;Se++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(De,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(De+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return ce}const ae={};ae[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(js),G(!1),K(ph),he(n.CULL_FACE),B(Yn);function he(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Ne(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function fe(O,De){return h[O]!==De?(n.bindFramebuffer(O,De),h[O]=De,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=De),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=De),!0):!1}function ee(O,De){let _e=p,Fe=!1;if(O){_e=d.get(De),_e===void 0&&(_e=[],d.set(De,_e));const me=O.textures;if(_e.length!==me.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Se=me.length;ce<Se;ce++)_e[ce]=n.COLOR_ATTACHMENT0+ce;_e.length=me.length,Fe=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(_e)}function ge(O){return _!==O?(n.useProgram(O),_=O,!0):!1}const E={[Zi]:n.FUNC_ADD,[__]:n.FUNC_SUBTRACT,[x_]:n.FUNC_REVERSE_SUBTRACT};E[v_]=n.MIN,E[y_]=n.MAX;const R={[b_]:n.ZERO,[M_]:n.ONE,[S_]:n.SRC_COLOR,[Bl]:n.SRC_ALPHA,[R_]:n.SRC_ALPHA_SATURATE,[A_]:n.DST_COLOR,[T_]:n.DST_ALPHA,[E_]:n.ONE_MINUS_SRC_COLOR,[kl]:n.ONE_MINUS_SRC_ALPHA,[C_]:n.ONE_MINUS_DST_COLOR,[w_]:n.ONE_MINUS_DST_ALPHA,[P_]:n.CONSTANT_COLOR,[D_]:n.ONE_MINUS_CONSTANT_COLOR,[L_]:n.CONSTANT_ALPHA,[I_]:n.ONE_MINUS_CONSTANT_ALPHA};function B(O,De,_e,Fe,me,ce,Se,$e,bt,ct){if(O===Yn){x===!0&&(Ne(n.BLEND),x=!1);return}if(x===!1&&(he(n.BLEND),x=!0),O!==g_){if(O!==m||ct!==v){if((f!==Zi||M!==Zi)&&(n.blendEquation(n.FUNC_ADD),f=Zi,M=Zi),ct)switch(O){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFunc(n.ONE,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:nt("WebGLState: Invalid blending: ",O);break}else switch(O){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case mh:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",O);break}w=null,C=null,T=null,P=null,L.set(0,0,0),k=0,m=O,v=ct}return}me=me||De,ce=ce||_e,Se=Se||Fe,(De!==f||me!==M)&&(n.blendEquationSeparate(E[De],E[me]),f=De,M=me),(_e!==w||Fe!==C||ce!==T||Se!==P)&&(n.blendFuncSeparate(R[_e],R[Fe],R[ce],R[Se]),w=_e,C=Fe,T=ce,P=Se),($e.equals(L)===!1||bt!==k)&&(n.blendColor($e.r,$e.g,$e.b,bt),L.copy($e),k=bt),m=O,v=!1}function Y(O,De){O.side===Hn?Ne(n.CULL_FACE):he(n.CULL_FACE);let _e=O.side===cn;De&&(_e=!_e),G(_e),O.blending===Gs&&O.transparent===!1?B(Yn):B(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Fe=O.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function K(O){O!==p_?(he(n.CULL_FACE),O!==D&&(O===ph?n.cullFace(n.BACK):O===m_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),D=O}function A(O){O!==N&&(Z&&n.lineWidth(O),N=O)}function le(O,De,_e){O?(he(n.POLYGON_OFFSET_FILL),(H!==De||re!==_e)&&(n.polygonOffset(De,_e),H=De,re=_e)):Ne(n.POLYGON_OFFSET_FILL)}function te(O){O?he(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function q(O){O===void 0&&(O=n.TEXTURE0+oe-1),ve!==O&&(n.activeTexture(O),ve=O)}function se(O,De,_e){_e===void 0&&(ve===null?_e=n.TEXTURE0+oe-1:_e=ve);let Fe=xe[_e];Fe===void 0&&(Fe={type:void 0,texture:void 0},xe[_e]=Fe),(Fe.type!==O||Fe.texture!==De)&&(ve!==_e&&(n.activeTexture(_e),ve=_e),n.bindTexture(O,De||ae[O]),Fe.type=O,Fe.texture=De)}function y(){const O=xe[ve];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function j(){try{n.texSubImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function ne(){try{n.texSubImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function pe(){try{n.texStorage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function Le(){try{n.texStorage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function ke(){try{n.texImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function de(){try{n.texImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function be(O){Ye.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ye.copy(O))}function we(O){ft.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ft.copy(O))}function Ie(O,De){let _e=c.get(De);_e===void 0&&(_e=new WeakMap,c.set(De,_e));let Fe=_e.get(O);Fe===void 0&&(Fe=n.getUniformBlockIndex(De,O.name),_e.set(O,Fe))}function ye(O,De){const Fe=c.get(De).get(O);l.get(De)!==Fe&&(n.uniformBlockBinding(De,Fe,O.__bindingPointIndex),l.set(De,Fe))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ve=null,xe={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,f=null,w=null,C=null,M=null,T=null,P=null,L=new qe(0,0,0),k=0,v=!1,S=null,D=null,N=null,H=null,re=null,Ye.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Ne,bindFramebuffer:fe,drawBuffers:ee,useProgram:ge,setBlending:B,setMaterial:Y,setFlipSided:G,setCullFace:K,setLineWidth:A,setPolygonOffset:le,setScissorTest:te,activeTexture:q,bindTexture:se,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:ke,texImage3D:de,updateUBOMapping:Ie,uniformBlockBinding:ye,texStorage2D:pe,texStorage3D:Le,texSubImage2D:j,texSubImage3D:ne,compressedTexSubImage2D:X,compressedTexSubImage3D:Re,scissor:be,viewport:we,reset:Je}}function zS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return p?new OffscreenCanvas(y,g):Ko("canvas")}function x(y,g,I){let j=1;const ne=se(y);if((ne.width>I||ne.height>I)&&(j=I/Math.max(ne.width,ne.height)),j<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(j*ne.width),Re=Math.floor(j*ne.height);h===void 0&&(h=_(X,Re));const pe=g?_(X,Re):h;return pe.width=X,pe.height=Re,pe.getContext("2d").drawImage(y,0,0,X,Re),je("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+X+"x"+Re+")."),pe}else return"data"in y&&je("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),y;return y}function m(y){return y.generateMipmaps}function f(y){n.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(y,g,I,j,ne=!1){if(y!==null){if(n[y]!==void 0)return n[y];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=g;if(g===n.RED&&(I===n.FLOAT&&(X=n.R32F),I===n.HALF_FLOAT&&(X=n.R16F),I===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.R8UI),I===n.UNSIGNED_SHORT&&(X=n.R16UI),I===n.UNSIGNED_INT&&(X=n.R32UI),I===n.BYTE&&(X=n.R8I),I===n.SHORT&&(X=n.R16I),I===n.INT&&(X=n.R32I)),g===n.RG&&(I===n.FLOAT&&(X=n.RG32F),I===n.HALF_FLOAT&&(X=n.RG16F),I===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RG8UI),I===n.UNSIGNED_SHORT&&(X=n.RG16UI),I===n.UNSIGNED_INT&&(X=n.RG32UI),I===n.BYTE&&(X=n.RG8I),I===n.SHORT&&(X=n.RG16I),I===n.INT&&(X=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGB8UI),I===n.UNSIGNED_SHORT&&(X=n.RGB16UI),I===n.UNSIGNED_INT&&(X=n.RGB32UI),I===n.BYTE&&(X=n.RGB8I),I===n.SHORT&&(X=n.RGB16I),I===n.INT&&(X=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),I===n.UNSIGNED_INT&&(X=n.RGBA32UI),I===n.BYTE&&(X=n.RGBA8I),I===n.SHORT&&(X=n.RGBA16I),I===n.INT&&(X=n.RGBA32I)),g===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),g===n.RGBA){const Re=ne?qo:st.getTransfer(j);I===n.FLOAT&&(X=n.RGBA32F),I===n.HALF_FLOAT&&(X=n.RGBA16F),I===n.UNSIGNED_BYTE&&(X=Re===ht?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(y,g){let I;return y?g===null||g===$n||g===Ur?I=n.DEPTH24_STENCIL8:g===Wn?I=n.DEPTH32F_STENCIL8:g===Nr&&(I=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===$n||g===Ur?I=n.DEPTH_COMPONENT24:g===Wn?I=n.DEPTH_COMPONENT32F:g===Nr&&(I=n.DEPTH_COMPONENT16),I}function T(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Vt&&y.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function P(y){const g=y.target;g.removeEventListener("dispose",P),k(g),g.isVideoTexture&&u.delete(g)}function L(y){const g=y.target;g.removeEventListener("dispose",L),S(g)}function k(y){const g=i.get(y);if(g.__webglInit===void 0)return;const I=y.source,j=d.get(I);if(j){const ne=j[g.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&v(y),Object.keys(j).length===0&&d.delete(I)}i.remove(y)}function v(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const I=y.source,j=d.get(I);delete j[g.__cacheKey],o.memory.textures--}function S(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(g.__webglFramebuffer[j]))for(let ne=0;ne<g.__webglFramebuffer[j].length;ne++)n.deleteFramebuffer(g.__webglFramebuffer[j][ne]);else n.deleteFramebuffer(g.__webglFramebuffer[j]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[j])}else{if(Array.isArray(g.__webglFramebuffer))for(let j=0;j<g.__webglFramebuffer.length;j++)n.deleteFramebuffer(g.__webglFramebuffer[j]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let j=0;j<g.__webglColorRenderbuffer.length;j++)g.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=y.textures;for(let j=0,ne=I.length;j<ne;j++){const X=i.get(I[j]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(I[j])}i.remove(y)}let D=0;function N(){D=0}function H(){const y=D;return y>=s.maxTextures&&je("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),D+=1,y}function re(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function oe(y,g){const I=i.get(y);if(y.isVideoTexture&&te(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&I.__version!==y.version){const j=y.image;if(j===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(I,y,g);return}}else y.isExternalTexture&&(I.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function Z(y,g){const I=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){ae(I,y,g);return}else y.isExternalTexture&&(I.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function V(y,g){const I=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){ae(I,y,g);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function ie(y,g){const I=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&I.__version!==y.version){he(I,y,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const ve={[$l]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[Kl]:n.MIRRORED_REPEAT},xe={[Vt]:n.NEAREST,[F_]:n.NEAREST_MIPMAP_NEAREST,[Kr]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[za]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},Ee={[k_]:n.NEVER,[W_]:n.ALWAYS,[z_]:n.LESS,[lu]:n.LEQUAL,[V_]:n.EQUAL,[cu]:n.GEQUAL,[H_]:n.GREATER,[G_]:n.NOTEQUAL};function Ge(y,g){if(g.type===Wn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===zt||g.magFilter===za||g.magFilter===Kr||g.magFilter===es||g.minFilter===zt||g.minFilter===za||g.minFilter===Kr||g.minFilter===es)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ve[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ve[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ve[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,xe[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,xe[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Vt||g.minFilter!==Kr&&g.minFilter!==es||g.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(y,g){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",P));const j=g.source;let ne=d.get(j);ne===void 0&&(ne={},d.set(j,ne));const X=re(g);if(X!==y.__cacheKey){ne[X]===void 0&&(ne[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),ne[X].usedTimes++;const Re=ne[y.__cacheKey];Re!==void 0&&(ne[y.__cacheKey].usedTimes--,Re.usedTimes===0&&v(g)),y.__cacheKey=X,y.__webglTexture=ne[X].texture}return I}function ft(y,g,I){return Math.floor(Math.floor(y/I)/g)}function lt(y,g,I,j){const X=y.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,I,j,g.data);else{X.sort((de,be)=>de.start-be.start);let Re=0;for(let de=1;de<X.length;de++){const be=X[Re],we=X[de],Ie=be.start+be.count,ye=ft(we.start,g.width,4),Je=ft(be.start,g.width,4);we.start<=Ie+1&&ye===Je&&ft(we.start+we.count-1,g.width,4)===ye?be.count=Math.max(be.count,we.start+we.count-be.start):(++Re,X[Re]=we)}X.length=Re+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let de=0,be=X.length;de<be;de++){const we=X[de],Ie=Math.floor(we.start/4),ye=Math.ceil(we.count/4),Je=Ie%g.width,O=Math.floor(Ie/g.width),De=ye,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Je,O,De,_e,I,j,g.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}}function ae(y,g,I){let j=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(j=n.TEXTURE_3D);const ne=Ye(y,g),X=g.source;t.bindTexture(j,y.__webglTexture,n.TEXTURE0+I);const Re=i.get(X);if(X.version!==Re.__version||ne===!0){t.activeTexture(n.TEXTURE0+I);const pe=st.getPrimaries(st.workingColorSpace),Le=g.colorSpace===Ri?null:st.getPrimaries(g.colorSpace),ke=g.colorSpace===Ri||pe===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let de=x(g.image,!1,s.maxTextureSize);de=q(g,de);const be=r.convert(g.format,g.colorSpace),we=r.convert(g.type);let Ie=C(g.internalFormat,be,we,g.colorSpace,g.isVideoTexture);Ge(j,g);let ye;const Je=g.mipmaps,O=g.isVideoTexture!==!0,De=Re.__version===void 0||ne===!0,_e=X.dataReady,Fe=T(g,de);if(g.isDepthTexture)Ie=M(g.format===ts,g.type),De&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ie,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ie,de.width,de.height,0,be,we,null));else if(g.isDataTexture)if(Je.length>0){O&&De&&t.texStorage2D(n.TEXTURE_2D,Fe,Ie,Je[0].width,Je[0].height);for(let me=0,ce=Je.length;me<ce;me++)ye=Je[me],O?_e&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ye.width,ye.height,be,we,ye.data):t.texImage2D(n.TEXTURE_2D,me,Ie,ye.width,ye.height,0,be,we,ye.data);g.generateMipmaps=!1}else O?(De&&t.texStorage2D(n.TEXTURE_2D,Fe,Ie,de.width,de.height),_e&&lt(g,de,be,we)):t.texImage2D(n.TEXTURE_2D,0,Ie,de.width,de.height,0,be,we,de.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){O&&De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Ie,Je[0].width,Je[0].height,de.depth);for(let me=0,ce=Je.length;me<ce;me++)if(ye=Je[me],g.format!==Dn)if(be!==null)if(O){if(_e)if(g.layerUpdates.size>0){const Se=qh(ye.width,ye.height,g.format,g.type);for(const $e of g.layerUpdates){const bt=ye.data.subarray($e*Se/ye.data.BYTES_PER_ELEMENT,($e+1)*Se/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,$e,ye.width,ye.height,1,be,bt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ye.width,ye.height,de.depth,be,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Ie,ye.width,ye.height,de.depth,0,ye.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,ye.width,ye.height,de.depth,be,we,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Ie,ye.width,ye.height,de.depth,0,be,we,ye.data)}else{O&&De&&t.texStorage2D(n.TEXTURE_2D,Fe,Ie,Je[0].width,Je[0].height);for(let me=0,ce=Je.length;me<ce;me++)ye=Je[me],g.format!==Dn?be!==null?O?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Ie,ye.width,ye.height,0,ye.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?_e&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ye.width,ye.height,be,we,ye.data):t.texImage2D(n.TEXTURE_2D,me,Ie,ye.width,ye.height,0,be,we,ye.data)}else if(g.isDataArrayTexture)if(O){if(De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Ie,de.width,de.height,de.depth),_e)if(g.layerUpdates.size>0){const me=qh(de.width,de.height,g.format,g.type);for(const ce of g.layerUpdates){const Se=de.data.subarray(ce*me/de.data.BYTES_PER_ELEMENT,(ce+1)*me/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,de.width,de.height,1,be,we,Se)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,be,we,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,de.width,de.height,de.depth,0,be,we,de.data);else if(g.isData3DTexture)O?(De&&t.texStorage3D(n.TEXTURE_3D,Fe,Ie,de.width,de.height,de.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,be,we,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,de.width,de.height,de.depth,0,be,we,de.data);else if(g.isFramebufferTexture){if(De)if(O)t.texStorage2D(n.TEXTURE_2D,Fe,Ie,de.width,de.height);else{let me=de.width,ce=de.height;for(let Se=0;Se<Fe;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ie,me,ce,0,be,we,null),me>>=1,ce>>=1}}else if(Je.length>0){if(O&&De){const me=se(Je[0]);t.texStorage2D(n.TEXTURE_2D,Fe,Ie,me.width,me.height)}for(let me=0,ce=Je.length;me<ce;me++)ye=Je[me],O?_e&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,be,we,ye):t.texImage2D(n.TEXTURE_2D,me,Ie,be,we,ye);g.generateMipmaps=!1}else if(O){if(De){const me=se(de);t.texStorage2D(n.TEXTURE_2D,Fe,Ie,me.width,me.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,we,de)}else t.texImage2D(n.TEXTURE_2D,0,Ie,be,we,de);m(g)&&f(j),Re.__version=X.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function he(y,g,I){if(g.image.length!==6)return;const j=Ye(y,g),ne=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+I);const X=i.get(ne);if(ne.version!==X.__version||j===!0){t.activeTexture(n.TEXTURE0+I);const Re=st.getPrimaries(st.workingColorSpace),pe=g.colorSpace===Ri?null:st.getPrimaries(g.colorSpace),Le=g.colorSpace===Ri||Re===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const ke=g.isCompressedTexture||g.image[0].isCompressedTexture,de=g.image[0]&&g.image[0].isDataTexture,be=[];for(let ce=0;ce<6;ce++)!ke&&!de?be[ce]=x(g.image[ce],!0,s.maxCubemapSize):be[ce]=de?g.image[ce].image:g.image[ce],be[ce]=q(g,be[ce]);const we=be[0],Ie=r.convert(g.format,g.colorSpace),ye=r.convert(g.type),Je=C(g.internalFormat,Ie,ye,g.colorSpace),O=g.isVideoTexture!==!0,De=X.__version===void 0||j===!0,_e=ne.dataReady;let Fe=T(g,we);Ge(n.TEXTURE_CUBE_MAP,g);let me;if(ke){O&&De&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,Je,we.width,we.height);for(let ce=0;ce<6;ce++){me=be[ce].mipmaps;for(let Se=0;Se<me.length;Se++){const $e=me[Se];g.format!==Dn?Ie!==null?O?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se,0,0,$e.width,$e.height,Ie,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se,Je,$e.width,$e.height,0,$e.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se,0,0,$e.width,$e.height,Ie,ye,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se,Je,$e.width,$e.height,0,Ie,ye,$e.data)}}}else{if(me=g.mipmaps,O&&De){me.length>0&&Fe++;const ce=se(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,Je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(de){O?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,be[ce].width,be[ce].height,Ie,ye,be[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,be[ce].width,be[ce].height,0,Ie,ye,be[ce].data);for(let Se=0;Se<me.length;Se++){const bt=me[Se].image[ce].image;O?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se+1,0,0,bt.width,bt.height,Ie,ye,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se+1,Je,bt.width,bt.height,0,Ie,ye,bt.data)}}else{O?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ie,ye,be[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,Ie,ye,be[ce]);for(let Se=0;Se<me.length;Se++){const $e=me[Se];O?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se+1,0,0,Ie,ye,$e.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se+1,Je,Ie,ye,$e.image[ce])}}}m(g)&&f(n.TEXTURE_CUBE_MAP),X.__version=ne.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ne(y,g,I,j,ne,X){const Re=r.convert(I.format,I.colorSpace),pe=r.convert(I.type),Le=C(I.internalFormat,Re,pe,I.colorSpace),ke=i.get(g),de=i.get(I);if(de.__renderTarget=g,!ke.__hasExternalTextures){const be=Math.max(1,g.width>>X),we=Math.max(1,g.height>>X);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,X,Le,be,we,g.depth,0,Re,pe,null):t.texImage2D(ne,X,Le,be,we,0,Re,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),le(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ne,de.__webglTexture,0,A(g)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ne,de.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(y,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const j=g.depthTexture,ne=j&&j.isDepthTexture?j.type:null,X=M(g.stencilBuffer,ne),Re=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;le(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(g),X,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(g),X,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,y)}else{const j=g.textures;for(let ne=0;ne<j.length;ne++){const X=j[ne],Re=r.convert(X.format,X.colorSpace),pe=r.convert(X.type),Le=C(X.internalFormat,Re,pe,X.colorSpace);le(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(g),Le,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(g),Le,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Le,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ee(y,g,I){const j=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(g.depthTexture);if(ne.__renderTarget=g,(!ne.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,g.depthTexture);const ke=r.convert(g.depthTexture.format),de=r.convert(g.depthTexture.type);let be;g.depthTexture.format===gi?be=n.DEPTH_COMPONENT24:g.depthTexture.format===ts&&(be=n.DEPTH24_STENCIL8);for(let we=0;we<6;we++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,be,g.width,g.height,0,ke,de,null)}}else oe(g.depthTexture,0);const X=ne.__webglTexture,Re=A(g),pe=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,Le=g.depthTexture.format===ts?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===gi)le(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,pe,X,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,Le,pe,X,0);else if(g.depthTexture.format===ts)le(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,pe,X,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,Le,pe,X,0);else throw new Error("Unknown depthTexture format")}function ge(y){const g=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const j=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),j){const ne=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,j.removeEventListener("dispose",ne)};j.addEventListener("dispose",ne),g.__depthDisposeCallback=ne}g.__boundDepthTexture=j}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let j=0;j<6;j++)ee(g.__webglFramebuffer[j],y,j);else{const j=y.texture.mipmaps;j&&j.length>0?ee(g.__webglFramebuffer[0],y,0):ee(g.__webglFramebuffer,y,0)}else if(I){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]===void 0)g.__webglDepthbuffer[j]=n.createRenderbuffer(),fe(g.__webglDepthbuffer[j],y,!1);else{const ne=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,X)}}else{const j=y.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),fe(g.__webglDepthbuffer,y,!1);else{const ne=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function E(y,g,I){const j=i.get(y);g!==void 0&&Ne(j.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ge(y)}function R(y){const g=y.texture,I=i.get(y),j=i.get(g);y.addEventListener("dispose",L);const ne=y.textures,X=y.isWebGLCubeRenderTarget===!0,Re=ne.length>1;if(Re||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=g.version,o.memory.textures++),X){I.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[pe]=[];for(let Le=0;Le<g.mipmaps.length;Le++)I.__webglFramebuffer[pe][Le]=n.createFramebuffer()}else I.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)I.__webglFramebuffer[pe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Re)for(let pe=0,Le=ne.length;pe<Le;pe++){const ke=i.get(ne[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&le(y)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<ne.length;pe++){const Le=ne[pe];I.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);const ke=r.convert(Le.format,Le.colorSpace),de=r.convert(Le.type),be=C(Le.internalFormat,ke,de,Le.colorSpace,y.isXRRenderTarget===!0),we=A(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,be,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)Ne(I.__webglFramebuffer[pe][Le],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le);else Ne(I.__webglFramebuffer[pe],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(g)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let pe=0,Le=ne.length;pe<Le;pe++){const ke=ne[pe],de=i.get(ke);let be=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(be=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,de.__webglTexture),Ge(be,ke),Ne(I.__webglFramebuffer,y,ke,n.COLOR_ATTACHMENT0+pe,be,0),m(ke)&&f(be)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(pe=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,j.__webglTexture),Ge(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)Ne(I.__webglFramebuffer[Le],y,g,n.COLOR_ATTACHMENT0,pe,Le);else Ne(I.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,pe,0);m(g)&&f(pe),t.unbindTexture()}y.depthBuffer&&ge(y)}function B(y){const g=y.textures;for(let I=0,j=g.length;I<j;I++){const ne=g[I];if(m(ne)){const X=w(y),Re=i.get(ne).__webglTexture;t.bindTexture(X,Re),f(X),t.unbindTexture()}}}const Y=[],G=[];function K(y){if(y.samples>0){if(le(y)===!1){const g=y.textures,I=y.width,j=y.height;let ne=n.COLOR_BUFFER_BIT;const X=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(y),pe=g.length>1;if(pe)for(let ke=0;ke<g.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Le=y.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ke=0;ke<g.length;ke++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[ke]);const de=i.get(g[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,I,j,0,0,I,j,ne,n.NEAREST),l===!0&&(Y.length=0,G.length=0,Y.push(n.COLOR_ATTACHMENT0+ke),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Y.push(X),G.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ke=0;ke<g.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,Re.__webglColorRenderbuffer[ke]);const de=i.get(g[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function A(y){return Math.min(s.maxSamples,y.samples)}function le(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function te(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function q(y,g){const I=y.colorSpace,j=y.format,ne=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==$s&&I!==Ri&&(st.getTransfer(I)===ht?(j!==Dn||ne!==gn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",I)),g}function se(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=ie,this.rebindTextures=E,this.setupRenderTarget=R,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function VS(n,e){function t(i,s=Ri){let r;const o=st.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===iu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===su)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ep)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jd)return n.BYTE;if(i===Zd)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===nu)return n.INT;if(i===$n)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===vn)return n.HALF_FLOAT;if(i===tp)return n.ALPHA;if(i===np)return n.RGB;if(i===Dn)return n.RGBA;if(i===gi)return n.DEPTH_COMPONENT;if(i===ts)return n.DEPTH_STENCIL;if(i===ip)return n.RED;if(i===ru)return n.RED_INTEGER;if(i===qs)return n.RG;if(i===ou)return n.RG_INTEGER;if(i===au)return n.RGBA_INTEGER;if(i===Lo||i===Io||i===No||i===Uo)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jl||i===Zl||i===Ql||i===ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tc||i===nc)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ic)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===sc)return r.COMPRESSED_R11_EAC;if(i===rc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===oc)return r.COMPRESSED_RG11_EAC;if(i===ac)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lc||i===cc||i===uc||i===hc||i===fc||i===dc||i===pc||i===mc||i===gc||i===_c||i===xc||i===vc||i===yc||i===bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mc||i===Sc||i===Ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Mc)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tc||i===wc||i===Ac||i===Cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const HS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GS=`
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

}`;class WS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new gp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yt({vertexShader:HS,fragmentShader:GS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XS extends us{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new WS,f={},w=t.getContextAttributes();let C=null,M=null;const T=[],P=[],L=new Me;let k=null;const v=new ln;v.viewport=new Rt;const S=new ln;S.viewport=new Rt;const D=[v,S],N=new Zx;let H=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let he=T[ae];return he===void 0&&(he=new ll,T[ae]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ae){let he=T[ae];return he===void 0&&(he=new ll,T[ae]=he),he.getGripSpace()},this.getHand=function(ae){let he=T[ae];return he===void 0&&(he=new ll,T[ae]=he),he.getHandSpace()};function oe(ae){const he=P.indexOf(ae.inputSource);if(he===-1)return;const Ne=T[he];Ne!==void 0&&(Ne.update(ae.inputSource,ae.frame,c||o),Ne.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Z(){s.removeEventListener("select",oe),s.removeEventListener("selectstart",oe),s.removeEventListener("selectend",oe),s.removeEventListener("squeeze",oe),s.removeEventListener("squeezestart",oe),s.removeEventListener("squeezeend",oe),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",V);for(let ae=0;ae<T.length;ae++){const he=P[ae];he!==null&&(P[ae]=null,T[ae].disconnect(he))}H=null,re=null,m.reset();for(const ae in f)delete f[ae];e.setRenderTarget(C),p=null,d=null,h=null,s=null,M=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){a=ae,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",oe),s.addEventListener("selectstart",oe),s.addEventListener("selectend",oe),s.addEventListener("squeeze",oe),s.addEventListener("squeezestart",oe),s.addEventListener("squeezeend",oe),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",V),w.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,fe=null,ee=null;w.depth&&(ee=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ne=w.stencil?ts:gi,fe=w.stencil?Ur:$n);const ge={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new un(d.textureWidth,d.textureHeight,{format:Dn,type:gn,depthTexture:new Or(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ne={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new un(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(ae){for(let he=0;he<ae.removed.length;he++){const Ne=ae.removed[he],fe=P.indexOf(Ne);fe>=0&&(P[fe]=null,T[fe].disconnect(Ne))}for(let he=0;he<ae.added.length;he++){const Ne=ae.added[he];let fe=P.indexOf(Ne);if(fe===-1){for(let ge=0;ge<T.length;ge++)if(ge>=P.length){P.push(Ne),fe=ge;break}else if(P[ge]===null){P[ge]=Ne,fe=ge;break}if(fe===-1)break}const ee=T[fe];ee&&ee.connect(Ne)}}const ie=new U,ve=new U;function xe(ae,he,Ne){ie.setFromMatrixPosition(he.matrixWorld),ve.setFromMatrixPosition(Ne.matrixWorld);const fe=ie.distanceTo(ve),ee=he.projectionMatrix.elements,ge=Ne.projectionMatrix.elements,E=ee[14]/(ee[10]-1),R=ee[14]/(ee[10]+1),B=(ee[9]+1)/ee[5],Y=(ee[9]-1)/ee[5],G=(ee[8]-1)/ee[0],K=(ge[8]+1)/ge[0],A=E*G,le=E*K,te=fe/(-G+K),q=te*-G;if(he.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(q),ae.translateZ(te),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),ee[10]===-1)ae.projectionMatrix.copy(he.projectionMatrix),ae.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const se=E+te,y=R+te,g=A-q,I=le+(fe-q),j=B*R/y*se,ne=Y*R/y*se;ae.projectionMatrix.makePerspective(g,I,j,ne,se,y),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function Ee(ae,he){he===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(he.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let he=ae.near,Ne=ae.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(Ne=m.depthFar)),N.near=S.near=v.near=he,N.far=S.far=v.far=Ne,(H!==N.near||re!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,re=N.far),N.layers.mask=ae.layers.mask|6,v.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;const fe=ae.parent,ee=N.cameras;Ee(N,fe);for(let ge=0;ge<ee.length;ge++)Ee(ee[ge],fe);ee.length===2?xe(N,v,S):N.projectionMatrix.copy(v.projectionMatrix),Ge(ae,N,fe)};function Ge(ae,he,Ne){Ne===null?ae.matrix.copy(he.matrixWorld):(ae.matrix.copy(Ne.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(he.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(he.projectionMatrix),ae.projectionMatrixInverse.copy(he.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Zo*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ae){l=ae,d!==null&&(d.fixedFoveation=ae),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ae)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(ae){return f[ae]};let Ye=null;function ft(ae,he){if(u=he.getViewerPose(c||o),_=he,u!==null){const Ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let fe=!1;Ne.length!==N.cameras.length&&(N.cameras.length=0,fe=!0);for(let R=0;R<Ne.length;R++){const B=Ne[R];let Y=null;if(p!==null)Y=p.getViewport(B);else{const K=h.getViewSubImage(d,B);Y=K.viewport,R===0&&(e.setRenderTargetTextures(M,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(M))}let G=D[R];G===void 0&&(G=new ln,G.layers.enable(R),G.viewport=new Rt,D[R]=G),G.matrix.fromArray(B.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(B.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Y.x,Y.y,Y.width,Y.height),R===0&&(N.matrix.copy(G.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),fe===!0&&N.cameras.push(G)}const ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const R=h.getDepthInformation(Ne[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(ee&&ee.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let R=0;R<Ne.length;R++){const B=Ne[R].camera;if(B){let Y=f[B];Y||(Y=new gp,f[B]=Y);const G=h.getCameraImage(B);Y.sourceTexture=G}}}}for(let Ne=0;Ne<T.length;Ne++){const fe=P[Ne],ee=T[Ne];fe!==null&&ee!==void 0&&ee.update(fe,he,c||o)}Ye&&Ye(ae,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const lt=new yp;lt.setAnimationLoop(ft),this.setAnimationLoop=function(ae){Ye=ae},this.dispose=function(){}}}const $i=new Kn,jS=new Et;function YS(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,up(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,C,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,C):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),C=w.envMap,M=w.envMapRotation;C&&(m.envMap.value=C,$i.copy(M),$i.x*=-1,$i.y*=-1,$i.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(jS.makeRotationFromEuler($i)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=C*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,C){const M=C.program;i.uniformBlockBinding(w,M)}function c(w,C){let M=s[w.id];M===void 0&&(_(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",m));const T=C.program;i.updateUBOMapping(w,T);const P=e.render.frame;r[w.id]!==P&&(d(w),r[w.id]=P)}function u(w){const C=h();w.__bindingPointIndex=C;const M=n.createBuffer(),T=w.__size,P=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,M),M}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const C=s[w.id],M=w.uniforms,T=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let P=0,L=M.length;P<L;P++){const k=Array.isArray(M[P])?M[P]:[M[P]];for(let v=0,S=k.length;v<S;v++){const D=k[v];if(p(D,P,v,T)===!0){const N=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let re=0;for(let oe=0;oe<H.length;oe++){const Z=H[oe],V=x(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,N+re,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,re),re+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,C,M,T){const P=w.value,L=C+"_"+M;if(T[L]===void 0)return typeof P=="number"||typeof P=="boolean"?T[L]=P:T[L]=P.clone(),!0;{const k=T[L];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return T[L]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function _(w){const C=w.uniforms;let M=0;const T=16;for(let L=0,k=C.length;L<k;L++){const v=Array.isArray(C[L])?C[L]:[C[L]];for(let S=0,D=v.length;S<D;S++){const N=v[S],H=Array.isArray(N.value)?N.value:[N.value];for(let re=0,oe=H.length;re<oe;re++){const Z=H[re],V=x(Z),ie=M%T,ve=ie%V.boundary,xe=ie+ve;M+=ve,xe!==0&&T-xe<V.storage&&(M+=T-xe),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=V.storage}}}const P=M%T;return P>0&&(M+=T-P),w.__size=M,w.__cache={},this}function x(w){const C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",w),C}function m(w){const C=w.target;C.removeEventListener("dispose",m);const M=o.indexOf(C.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function f(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}const $S=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function KS(){return Bn===null&&(Bn=new vx($S,16,16,qs,vn),Bn.name="DFG_LUT",Bn.minFilter=zt,Bn.magFilter=zt,Bn.wrapS=ui,Bn.wrapT=ui,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class JS{constructor(e={}){const{canvas:t=X_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=gn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=p,m=new Set([au,ou,ru]),f=new Set([gn,$n,Nr,Ur,iu,su]),w=new Uint32Array(4),C=new Int32Array(4);let M=null,T=null;const P=[],L=[];let k=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=mn;let D=0,N=0,H=null,re=-1,oe=null;const Z=new Rt,V=new Rt;let ie=null;const ve=new qe(0);let xe=0,Ee=t.width,Ge=t.height,Ye=1,ft=null,lt=null;const ae=new Rt(0,0,Ee,Ge),he=new Rt(0,0,Ee,Ge);let Ne=!1;const fe=new du;let ee=!1,ge=!1;const E=new Et,R=new U,B=new Rt,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let G=!1;function K(){return H===null?Ye:1}let A=i;function le(b,z){return t.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tu}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",ct,!1),A===null){const z="webgl2";if(A=le(z,b),A===null)throw le(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw nt("WebGLRenderer: "+b.message),b}let te,q,se,y,g,I,j,ne,X,Re,pe,Le,ke,de,be,we,Ie,ye,Je,O,De,_e,Fe,me;function ce(){te=new Kb(A),te.init(),_e=new VS(A,te),q=new Vb(A,te,e,_e),se=new kS(A,te),q.reversedDepthBuffer&&d&&se.buffers.depth.setReversed(!0),y=new Qb(A),g=new ES,I=new zS(A,te,se,g,q,_e,y),j=new Gb(v),ne=new $b(v),X=new iv(A),Fe=new kb(A,X),Re=new Jb(A,X,y,Fe),pe=new tM(A,Re,X,y),Je=new eM(A,q,I),we=new Hb(g),Le=new SS(v,j,ne,te,q,Fe,we),ke=new YS(v,g),de=new wS,be=new LS(te),ye=new Bb(v,j,ne,se,pe,_,l),Ie=new OS(v,pe,q),me=new qS(A,y,q,se),O=new zb(A,te,y),De=new Zb(A,te,y),y.programs=Le.programs,v.capabilities=q,v.extensions=te,v.properties=g,v.renderLists=de,v.shadowMap=Ie,v.state=se,v.info=y}ce(),x!==gn&&(k=new iM(x,t.width,t.height,s,r));const Se=new XS(v,A);this.xr=Se,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ye},this.setPixelRatio=function(b){b!==void 0&&(Ye=b,this.setSize(Ee,Ge,!1))},this.getSize=function(b){return b.set(Ee,Ge)},this.setSize=function(b,z,Q=!0){if(Se.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=b,Ge=z,t.width=Math.floor(b*Ye),t.height=Math.floor(z*Ye),Q===!0&&(t.style.width=b+"px",t.style.height=z+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(Ee*Ye,Ge*Ye).floor()},this.setDrawingBufferSize=function(b,z,Q){Ee=b,Ge=z,Ye=Q,t.width=Math.floor(b*Q),t.height=Math.floor(z*Q),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(x===gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Z)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,z,Q,J){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,z,Q,J),se.viewport(Z.copy(ae).multiplyScalar(Ye).round())},this.getScissor=function(b){return b.copy(he)},this.setScissor=function(b,z,Q,J){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,z,Q,J),se.scissor(V.copy(he).multiplyScalar(Ye).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(b){se.setScissorTest(Ne=b)},this.setOpaqueSort=function(b){ft=b},this.setTransparentSort=function(b){lt=b},this.getClearColor=function(b){return b.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,Q=!0){let J=0;if(b){let W=!1;if(H!==null){const Ae=H.texture.format;W=m.has(Ae)}if(W){const Ae=H.texture.type,Oe=f.has(Ae),Pe=ye.getClearColor(),Be=ye.getClearAlpha(),ze=Pe.r,We=Pe.g,Ve=Pe.b;Oe?(w[0]=ze,w[1]=We,w[2]=Ve,w[3]=Be,A.clearBufferuiv(A.COLOR,0,w)):(C[0]=ze,C[1]=We,C[2]=Ve,C[3]=Be,A.clearBufferiv(A.COLOR,0,C))}else J|=A.COLOR_BUFFER_BIT}z&&(J|=A.DEPTH_BUFFER_BIT),Q&&(J|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),ye.dispose(),de.dispose(),be.dispose(),g.dispose(),j.dispose(),ne.dispose(),pe.dispose(),Fe.dispose(),me.dispose(),Le.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",yu),Se.removeEventListener("sessionend",bu),Bi.stop()};function $e(b){b.preventDefault(),Jo("WebGLRenderer: Context Lost."),S=!0}function bt(){Jo("WebGLRenderer: Context Restored."),S=!1;const b=y.autoReset,z=Ie.enabled,Q=Ie.autoUpdate,J=Ie.needsUpdate,W=Ie.type;ce(),y.autoReset=b,Ie.enabled=z,Ie.autoUpdate=Q,Ie.needsUpdate=J,Ie.type=W}function ct(b){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Fn(b){const z=b.target;z.removeEventListener("dispose",Fn),Jn(z)}function Jn(b){Rp(b),g.remove(b)}function Rp(b){const z=g.get(b).programs;z!==void 0&&(z.forEach(function(Q){Le.releaseProgram(Q)}),b.isShaderMaterial&&Le.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Q,J,W,Ae){z===null&&(z=Y);const Oe=W.isMesh&&W.matrixWorld.determinant()<0,Pe=Dp(b,z,Q,J,W);se.setMaterial(J,Oe);let Be=Q.index,ze=1;if(J.wireframe===!0){if(Be=Re.getWireframeAttribute(Q),Be===void 0)return;ze=2}const We=Q.drawRange,Ve=Q.attributes.position;let tt=We.start*ze,dt=(We.start+We.count)*ze;Ae!==null&&(tt=Math.max(tt,Ae.start*ze),dt=Math.min(dt,(Ae.start+Ae.count)*ze)),Be!==null?(tt=Math.max(tt,0),dt=Math.min(dt,Be.count)):Ve!=null&&(tt=Math.max(tt,0),dt=Math.min(dt,Ve.count));const At=dt-tt;if(At<0||At===1/0)return;Fe.setup(W,J,Pe,Q,Be);let Ct,xt=O;if(Be!==null&&(Ct=X.get(Be),xt=De,xt.setIndex(Ct)),W.isMesh)J.wireframe===!0?(se.setLineWidth(J.wireframeLinewidth*K()),xt.setMode(A.LINES)):xt.setMode(A.TRIANGLES);else if(W.isLine){let He=J.linewidth;He===void 0&&(He=1),se.setLineWidth(He*K()),W.isLineSegments?xt.setMode(A.LINES):W.isLineLoop?xt.setMode(A.LINE_LOOP):xt.setMode(A.LINE_STRIP)}else W.isPoints?xt.setMode(A.POINTS):W.isSprite&&xt.setMode(A.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Fr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const He=W._multiDrawStarts,ut=W._multiDrawCounts,rt=W._multiDrawCount,hn=Be?X.get(Be).bytesPerElement:1,fs=g.get(J).currentProgram.getUniforms();for(let fn=0;fn<rt;fn++)fs.setValue(A,"_gl_DrawID",fn),xt.render(He[fn]/hn,ut[fn])}else if(W.isInstancedMesh)xt.renderInstances(tt,At,W.count);else if(Q.isInstancedBufferGeometry){const He=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ut=Math.min(Q.instanceCount,He);xt.renderInstances(tt,At,ut)}else xt.render(tt,At)};function vu(b,z,Q){b.transparent===!0&&b.side===Hn&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,Wr(b,z,Q),b.side=Ui,b.needsUpdate=!0,Wr(b,z,Q),b.side=Hn):Wr(b,z,Q)}this.compile=function(b,z,Q=null){Q===null&&(Q=b),T=be.get(Q),T.init(z),L.push(T),Q.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),b!==Q&&b.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const J=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let Oe=0;Oe<Ae.length;Oe++){const Pe=Ae[Oe];vu(Pe,Q,W),J.add(Pe)}else vu(Ae,Q,W),J.add(Ae)}),T=L.pop(),J},this.compileAsync=function(b,z,Q=null){const J=this.compile(b,z,Q);return new Promise(W=>{function Ae(){if(J.forEach(function(Oe){g.get(Oe).currentProgram.isReady()&&J.delete(Oe)}),J.size===0){W(b);return}setTimeout(Ae,10)}te.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Sa=null;function Pp(b){Sa&&Sa(b)}function yu(){Bi.stop()}function bu(){Bi.start()}const Bi=new yp;Bi.setAnimationLoop(Pp),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(b){Sa=b,Se.setAnimationLoop(b),b===null?Bi.stop():Bi.start()},Se.addEventListener("sessionstart",yu),Se.addEventListener("sessionend",bu),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const Q=Se.enabled===!0&&Se.isPresenting===!0,J=k!==null&&(H===null||Q)&&k.begin(v,H);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(z),z=Se.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,z,H),T=be.get(b,L.length),T.init(z),L.push(T),E.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),fe.setFromProjectionMatrix(E,Xn,z.reversedDepth),ge=this.localClippingEnabled,ee=we.init(this.clippingPlanes,ge),M=de.get(b,P.length),M.init(),P.push(M),Se.enabled===!0&&Se.isPresenting===!0){const Oe=v.xr.getDepthSensingMesh();Oe!==null&&Ea(Oe,z,-1/0,v.sortObjects)}Ea(b,z,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(ft,lt),G=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,G&&ye.addToRenderList(M,b),this.info.render.frame++,ee===!0&&we.beginShadows();const W=T.state.shadowsArray;if(Ie.render(W,b,z),ee===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&k.hasRenderPass())===!1){const Oe=M.opaque,Pe=M.transmissive;if(T.setupLights(),z.isArrayCamera){const Be=z.cameras;if(Pe.length>0)for(let ze=0,We=Be.length;ze<We;ze++){const Ve=Be[ze];Su(Oe,Pe,b,Ve)}G&&ye.render(b);for(let ze=0,We=Be.length;ze<We;ze++){const Ve=Be[ze];Mu(M,b,Ve,Ve.viewport)}}else Pe.length>0&&Su(Oe,Pe,b,z),G&&ye.render(b),Mu(M,b,z)}H!==null&&N===0&&(I.updateMultisampleRenderTarget(H),I.updateRenderTargetMipmap(H)),J&&k.end(v),b.isScene===!0&&b.onAfterRender(v,b,z),Fe.resetDefaultState(),re=-1,oe=null,L.pop(),L.length>0?(T=L[L.length-1],ee===!0&&we.setGlobalState(v.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function Ea(b,z,Q,J){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||fe.intersectsSprite(b)){J&&B.setFromMatrixPosition(b.matrixWorld).applyMatrix4(E);const Oe=pe.update(b),Pe=b.material;Pe.visible&&M.push(b,Oe,Pe,Q,B.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||fe.intersectsObject(b))){const Oe=pe.update(b),Pe=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),B.copy(b.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),B.copy(Oe.boundingSphere.center)),B.applyMatrix4(b.matrixWorld).applyMatrix4(E)),Array.isArray(Pe)){const Be=Oe.groups;for(let ze=0,We=Be.length;ze<We;ze++){const Ve=Be[ze],tt=Pe[Ve.materialIndex];tt&&tt.visible&&M.push(b,Oe,tt,Q,B.z,Ve)}}else Pe.visible&&M.push(b,Oe,Pe,Q,B.z,null)}}const Ae=b.children;for(let Oe=0,Pe=Ae.length;Oe<Pe;Oe++)Ea(Ae[Oe],z,Q,J)}function Mu(b,z,Q,J){const{opaque:W,transmissive:Ae,transparent:Oe}=b;T.setupLightsView(Q),ee===!0&&we.setGlobalState(v.clippingPlanes,Q),J&&se.viewport(Z.copy(J)),W.length>0&&Gr(W,z,Q),Ae.length>0&&Gr(Ae,z,Q),Oe.length>0&&Gr(Oe,z,Q),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Su(b,z,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){const tt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new un(1,1,{generateMipmaps:!0,type:tt?vn:gn,minFilter:es,samples:q.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const Ae=T.state.transmissionRenderTarget[J.id],Oe=J.viewport||Z;Ae.setSize(Oe.z*v.transmissionResolutionScale,Oe.w*v.transmissionResolutionScale);const Pe=v.getRenderTarget(),Be=v.getActiveCubeFace(),ze=v.getActiveMipmapLevel();v.setRenderTarget(Ae),v.getClearColor(ve),xe=v.getClearAlpha(),xe<1&&v.setClearColor(16777215,.5),v.clear(),G&&ye.render(Q);const We=v.toneMapping;v.toneMapping=qn;const Ve=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),ee===!0&&we.setGlobalState(v.clippingPlanes,J),Gr(b,Q,J),I.updateMultisampleRenderTarget(Ae),I.updateRenderTargetMipmap(Ae),te.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let dt=0,At=z.length;dt<At;dt++){const Ct=z[dt],{object:xt,geometry:He,material:ut,group:rt}=Ct;if(ut.side===Hn&&xt.layers.test(J.layers)){const hn=ut.side;ut.side=cn,ut.needsUpdate=!0,Eu(xt,Q,J,He,ut,rt),ut.side=hn,ut.needsUpdate=!0,tt=!0}}tt===!0&&(I.updateMultisampleRenderTarget(Ae),I.updateRenderTargetMipmap(Ae))}v.setRenderTarget(Pe,Be,ze),v.setClearColor(ve,xe),Ve!==void 0&&(J.viewport=Ve),v.toneMapping=We}function Gr(b,z,Q){const J=z.isScene===!0?z.overrideMaterial:null;for(let W=0,Ae=b.length;W<Ae;W++){const Oe=b[W],{object:Pe,geometry:Be,group:ze}=Oe;let We=Oe.material;We.allowOverride===!0&&J!==null&&(We=J),Pe.layers.test(Q.layers)&&Eu(Pe,z,Q,Be,We,ze)}}function Eu(b,z,Q,J,W,Ae){b.onBeforeRender(v,z,Q,J,W,Ae),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(v,z,Q,J,b,Ae),W.transparent===!0&&W.side===Hn&&W.forceSinglePass===!1?(W.side=cn,W.needsUpdate=!0,v.renderBufferDirect(Q,z,J,W,b,Ae),W.side=Ui,W.needsUpdate=!0,v.renderBufferDirect(Q,z,J,W,b,Ae),W.side=Hn):v.renderBufferDirect(Q,z,J,W,b,Ae),b.onAfterRender(v,z,Q,J,W,Ae)}function Wr(b,z,Q){z.isScene!==!0&&(z=Y);const J=g.get(b),W=T.state.lights,Ae=T.state.shadowsArray,Oe=W.state.version,Pe=Le.getParameters(b,W.state,Ae,z,Q),Be=Le.getProgramCacheKey(Pe);let ze=J.programs;J.environment=b.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(b.isMeshStandardMaterial?ne:j).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",Fn),ze=new Map,J.programs=ze);let We=ze.get(Be);if(We!==void 0){if(J.currentProgram===We&&J.lightsStateVersion===Oe)return wu(b,Pe),We}else Pe.uniforms=Le.getUniforms(b),b.onBeforeCompile(Pe,v),We=Le.acquireProgram(Pe,Be),ze.set(Be,We),J.uniforms=Pe.uniforms;const Ve=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=we.uniform),wu(b,Pe),J.needsLights=Ip(b),J.lightsStateVersion=Oe,J.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.directionalShadowMap.value=W.state.directionalShadowMap,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotShadowMap.value=W.state.spotShadowMap,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMap.value=W.state.pointShadowMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=We,J.uniformsList=null,We}function Tu(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Oo.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function wu(b,z){const Q=g.get(b);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function Dp(b,z,Q,J,W){z.isScene!==!0&&(z=Y),I.resetTextureUnits();const Ae=z.fog,Oe=J.isMeshStandardMaterial?z.environment:null,Pe=H===null?v.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:$s,Be=(J.isMeshStandardMaterial?ne:j).get(J.envMap||Oe),ze=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,We=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ve=!!Q.morphAttributes.position,tt=!!Q.morphAttributes.normal,dt=!!Q.morphAttributes.color;let At=qn;J.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(At=v.toneMapping);const Ct=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,xt=Ct!==void 0?Ct.length:0,He=g.get(J),ut=T.state.lights;if(ee===!0&&(ge===!0||b!==oe)){const $t=b===oe&&J.id===re;we.setState(J,b,$t)}let rt=!1;J.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ut.state.version||He.outputColorSpace!==Pe||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isBatchedMesh&&He.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&He.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null||He.envMap!==Be||J.fog===!0&&He.fog!==Ae||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==we.numPlanes||He.numIntersection!==we.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==We||He.morphTargets!==Ve||He.morphNormals!==tt||He.morphColors!==dt||He.toneMapping!==At||He.morphTargetsCount!==xt)&&(rt=!0):(rt=!0,He.__version=J.version);let hn=He.currentProgram;rt===!0&&(hn=Wr(J,z,W));let fs=!1,fn=!1,tr=!1;const Mt=hn.getUniforms(),sn=He.uniforms;if(se.useProgram(hn.program)&&(fs=!0,fn=!0,tr=!0),J.id!==re&&(re=J.id,fn=!0),fs||oe!==b){se.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Mt.setValue(A,"projectionMatrix",b.projectionMatrix),Mt.setValue(A,"viewMatrix",b.matrixWorldInverse);const rn=Mt.map.cameraPosition;rn!==void 0&&rn.setValue(A,R.setFromMatrixPosition(b.matrixWorld)),q.logarithmicDepthBuffer&&Mt.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Mt.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),oe!==b&&(oe=b,fn=!0,tr=!0)}if(He.needsLights&&(ut.state.directionalShadowMap.length>0&&Mt.setValue(A,"directionalShadowMap",ut.state.directionalShadowMap,I),ut.state.spotShadowMap.length>0&&Mt.setValue(A,"spotShadowMap",ut.state.spotShadowMap,I),ut.state.pointShadowMap.length>0&&Mt.setValue(A,"pointShadowMap",ut.state.pointShadowMap,I)),W.isSkinnedMesh){Mt.setOptional(A,W,"bindMatrix"),Mt.setOptional(A,W,"bindMatrixInverse");const $t=W.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Mt.setValue(A,"boneTexture",$t.boneTexture,I))}W.isBatchedMesh&&(Mt.setOptional(A,W,"batchingTexture"),Mt.setValue(A,"batchingTexture",W._matricesTexture,I),Mt.setOptional(A,W,"batchingIdTexture"),Mt.setValue(A,"batchingIdTexture",W._indirectTexture,I),Mt.setOptional(A,W,"batchingColorTexture"),W._colorsTexture!==null&&Mt.setValue(A,"batchingColorTexture",W._colorsTexture,I));const Mn=Q.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Je.update(W,Q,hn),(fn||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,Mt.setValue(A,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(sn.envMap.value=Be,sn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(sn.envMapIntensity.value=z.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=KS()),fn&&(Mt.setValue(A,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Lp(sn,tr),Ae&&J.fog===!0&&ke.refreshFogUniforms(sn,Ae),ke.refreshMaterialUniforms(sn,J,Ye,Ge,T.state.transmissionRenderTarget[b.id]),Oo.upload(A,Tu(He),sn,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Oo.upload(A,Tu(He),sn,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Mt.setValue(A,"center",W.center),Mt.setValue(A,"modelViewMatrix",W.modelViewMatrix),Mt.setValue(A,"normalMatrix",W.normalMatrix),Mt.setValue(A,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const $t=J.uniformsGroups;for(let rn=0,Ta=$t.length;rn<Ta;rn++){const ki=$t[rn];me.update(ki,hn),me.bind(ki,hn)}}return hn}function Lp(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Ip(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(b,z,Q){const J=g.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),g.get(b.texture).__webglTexture=z,g.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const Q=g.get(b);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0};const Np=A.createFramebuffer();this.setRenderTarget=function(b,z=0,Q=0){H=b,D=z,N=Q;let J=null,W=!1,Ae=!1;if(b){const Pe=g.get(b);if(Pe.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(A.FRAMEBUFFER,Pe.__webglFramebuffer),Z.copy(b.viewport),V.copy(b.scissor),ie=b.scissorTest,se.viewport(Z),se.scissor(V),se.setScissorTest(ie),re=-1;return}else if(Pe.__webglFramebuffer===void 0)I.setupRenderTarget(b);else if(Pe.__hasExternalTextures)I.rebindTextures(b,g.get(b.texture).__webglTexture,g.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const We=b.depthTexture;if(Pe.__boundDepthTexture!==We){if(We!==null&&g.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ae=!0);const ze=g.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?J=ze[z][Q]:J=ze[z],W=!0):b.samples>0&&I.useMultisampledRTT(b)===!1?J=g.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?J=ze[Q]:J=ze,Z.copy(b.viewport),V.copy(b.scissor),ie=b.scissorTest}else Z.copy(ae).multiplyScalar(Ye).floor(),V.copy(he).multiplyScalar(Ye).floor(),ie=Ne;if(Q!==0&&(J=Np),se.bindFramebuffer(A.FRAMEBUFFER,J)&&se.drawBuffers(b,J),se.viewport(Z),se.scissor(V),se.setScissorTest(ie),W){const Pe=g.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,Q)}else if(Ae){const Pe=z;for(let Be=0;Be<b.textures.length;Be++){const ze=g.get(b.textures[Be]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Be,ze.__webglTexture,Q,Pe)}}else if(b!==null&&Q!==0){const Pe=g.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Pe.__webglTexture,Q)}re=-1},this.readRenderTargetPixels=function(b,z,Q,J,W,Ae,Oe,Pe=0){if(!(b&&b.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=g.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){se.bindFramebuffer(A.FRAMEBUFFER,Be);try{const ze=b.textures[Pe],We=ze.format,Ve=ze.type;if(!q.textureFormatReadable(We)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Ve)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-J&&Q>=0&&Q<=b.height-W&&(b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Pe),A.readPixels(z,Q,J,W,_e.convert(We),_e.convert(Ve),Ae))}finally{const ze=H!==null?g.get(H).__webglFramebuffer:null;se.bindFramebuffer(A.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,z,Q,J,W,Ae,Oe,Pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=g.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be)if(z>=0&&z<=b.width-J&&Q>=0&&Q<=b.height-W){se.bindFramebuffer(A.FRAMEBUFFER,Be);const ze=b.textures[Pe],We=ze.format,Ve=ze.type;if(!q.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,tt),A.bufferData(A.PIXEL_PACK_BUFFER,Ae.byteLength,A.STREAM_READ),b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Pe),A.readPixels(z,Q,J,W,_e.convert(We),_e.convert(Ve),0);const dt=H!==null?g.get(H).__webglFramebuffer:null;se.bindFramebuffer(A.FRAMEBUFFER,dt);const At=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await j_(A,At,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,tt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Ae),A.deleteBuffer(tt),A.deleteSync(At),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,Q=0){const J=Math.pow(2,-Q),W=Math.floor(b.image.width*J),Ae=Math.floor(b.image.height*J),Oe=z!==null?z.x:0,Pe=z!==null?z.y:0;I.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,Q,0,0,Oe,Pe,W,Ae),se.unbindTexture()};const Up=A.createFramebuffer(),Fp=A.createFramebuffer();this.copyTextureToTexture=function(b,z,Q=null,J=null,W=0,Ae=null){Ae===null&&(W!==0?(Fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=W,W=0):Ae=0);let Oe,Pe,Be,ze,We,Ve,tt,dt,At;const Ct=b.isCompressedTexture?b.mipmaps[Ae]:b.image;if(Q!==null)Oe=Q.max.x-Q.min.x,Pe=Q.max.y-Q.min.y,Be=Q.isBox3?Q.max.z-Q.min.z:1,ze=Q.min.x,We=Q.min.y,Ve=Q.isBox3?Q.min.z:0;else{const Mn=Math.pow(2,-W);Oe=Math.floor(Ct.width*Mn),Pe=Math.floor(Ct.height*Mn),b.isDataArrayTexture?Be=Ct.depth:b.isData3DTexture?Be=Math.floor(Ct.depth*Mn):Be=1,ze=0,We=0,Ve=0}J!==null?(tt=J.x,dt=J.y,At=J.z):(tt=0,dt=0,At=0);const xt=_e.convert(z.format),He=_e.convert(z.type);let ut;z.isData3DTexture?(I.setTexture3D(z,0),ut=A.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(I.setTexture2DArray(z,0),ut=A.TEXTURE_2D_ARRAY):(I.setTexture2D(z,0),ut=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,z.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,z.unpackAlignment);const rt=A.getParameter(A.UNPACK_ROW_LENGTH),hn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),fs=A.getParameter(A.UNPACK_SKIP_PIXELS),fn=A.getParameter(A.UNPACK_SKIP_ROWS),tr=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ct.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ct.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ze),A.pixelStorei(A.UNPACK_SKIP_ROWS,We),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ve);const Mt=b.isDataArrayTexture||b.isData3DTexture,sn=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const Mn=g.get(b),$t=g.get(z),rn=g.get(Mn.__renderTarget),Ta=g.get($t.__renderTarget);se.bindFramebuffer(A.READ_FRAMEBUFFER,rn.__webglFramebuffer),se.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ta.__webglFramebuffer);for(let ki=0;ki<Be;ki++)Mt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,g.get(b).__webglTexture,W,Ve+ki),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,g.get(z).__webglTexture,Ae,At+ki)),A.blitFramebuffer(ze,We,Oe,Pe,tt,dt,Oe,Pe,A.DEPTH_BUFFER_BIT,A.NEAREST);se.bindFramebuffer(A.READ_FRAMEBUFFER,null),se.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||g.has(b)){const Mn=g.get(b),$t=g.get(z);se.bindFramebuffer(A.READ_FRAMEBUFFER,Up),se.bindFramebuffer(A.DRAW_FRAMEBUFFER,Fp);for(let rn=0;rn<Be;rn++)Mt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Mn.__webglTexture,W,Ve+rn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Mn.__webglTexture,W),sn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,$t.__webglTexture,Ae,At+rn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,$t.__webglTexture,Ae),W!==0?A.blitFramebuffer(ze,We,Oe,Pe,tt,dt,Oe,Pe,A.COLOR_BUFFER_BIT,A.NEAREST):sn?A.copyTexSubImage3D(ut,Ae,tt,dt,At+rn,ze,We,Oe,Pe):A.copyTexSubImage2D(ut,Ae,tt,dt,ze,We,Oe,Pe);se.bindFramebuffer(A.READ_FRAMEBUFFER,null),se.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else sn?b.isDataTexture||b.isData3DTexture?A.texSubImage3D(ut,Ae,tt,dt,At,Oe,Pe,Be,xt,He,Ct.data):z.isCompressedArrayTexture?A.compressedTexSubImage3D(ut,Ae,tt,dt,At,Oe,Pe,Be,xt,Ct.data):A.texSubImage3D(ut,Ae,tt,dt,At,Oe,Pe,Be,xt,He,Ct):b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Ae,tt,dt,Oe,Pe,xt,He,Ct.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Ae,tt,dt,Ct.width,Ct.height,xt,Ct.data):A.texSubImage2D(A.TEXTURE_2D,Ae,tt,dt,Oe,Pe,xt,He,Ct);A.pixelStorei(A.UNPACK_ROW_LENGTH,rt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,hn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,fs),A.pixelStorei(A.UNPACK_SKIP_ROWS,fn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,tr),Ae===0&&z.generateMipmaps&&A.generateMipmap(ut),se.unbindTexture()},this.initRenderTarget=function(b){g.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),se.unbindTexture()},this.resetState=function(){D=0,N=0,H=null,se.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const vf={type:"change"},xu={type:"start"},Tp={type:"end"},So=new ga,yf=new ai,ZS=Math.cos(70*q_.DEG2RAD),Nt=new U,on=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bl=1e-6;class QS extends tv{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hs.ROTATE,MIDDLE:Hs.DOLLY,RIGHT:Hs.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new ls,this._lastTargetPosition=new U,this._quat=new ls().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yh,this._sphericalDelta=new Yh,this._scale=1,this._panOffset=new U,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new U,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tE.bind(this),this._onPointerDown=eE.bind(this),this._onPointerUp=nE.bind(this),this._onContextMenu=cE.bind(this),this._onMouseWheel=rE.bind(this),this._onKeyDown=oE.bind(this),this._onTouchStart=aE.bind(this),this._onTouchMove=lE.bind(this),this._onMouseDown=iE.bind(this),this._onMouseMove=sE.bind(this),this._interceptControlDown=uE.bind(this),this._interceptControlUp=hE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vf),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Nt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(So.origin.copy(this.object.position),So.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(So.direction))<ZS?this.object.lookAt(this.target):(yf.setFromNormalAndCoplanarPoint(this.object.up,this.target),So.intersectPlane(yf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bl||this._lastTargetPosition.distanceToSquared(this.target)>bl?(this.dispatchEvent(vf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Nt.copy(s).sub(this.target);let r=Nt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function eE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function tE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function nE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tp),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function iE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case Hs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case Hs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(xu)}function sE(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function rE(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(xu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Tp))}function oE(n){this.enabled!==!1&&this._handleKeyDown(n)}function aE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case Fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(xu)}function lE(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function cE(n){this.enabled!==!1&&n.preventDefault()}function uE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Hr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fE=new ya(-1,1,1,-1,0,1);class dE extends nn{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const pE=new dE;class wp{constructor(e){this._mesh=new bn(pE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class mE extends Hr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qo.clone(e.uniforms),this.material=new Yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new wp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class bf extends Hr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class gE extends Hr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _E{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Me);this._width=i.width,this._height=i.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mE(Bo),this.copyPass.material.blending=Yn,this.clock=new Qx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bf!==void 0&&(o instanceof bf?i=!0:o instanceof gE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xE extends Hr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new qe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const vE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Js extends Hr{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new qe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,o,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new un(r,o,{type:vn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new un(r,o,{type:vn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=vE;this.highPassUniforms=Qo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qo.clone(Bo.uniforms),this.blendMaterial=new Yt({uniforms:this.copyUniforms,vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader,premultipliedAlpha:!0,blending:Ol,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new qe,this._oldClearAlpha=1,this._basic=new _a,this._fsQuad=new wp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Js.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Js.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}}Js.BlurDirectionX=new Me(1,0);Js.BlurDirectionY=new Me(0,1);const Eo={object:"#f97316",array:"#06b6d4",string:"#10b981",number:"#6366f1",boolean:"#ec4899",null:"#64748b"},yE=.5,bE=8,Is=3;function ME(n){const e=gt({isInitialized:!1,hoveredNode:null,zoomLevel:1,isDragging:!1,isAutoRotating:!0});let t=null,i=null,s=null,r=null,o=null,a=null,l=new Map,c=null,u=null,h=null,d=null,p=null,_=!1,x=null,m=new ai(new U(0,0,1),0),f=new U;const w=[];function C(fe,ee=26,ge="#ffffff"){const E=document.createElement("canvas"),R=E.getContext("2d");E.width=512,E.height=72,R.clearRect(0,0,E.width,E.height),R.fillStyle="rgba(15, 23, 42, 0.9)";const B=(te,q,se,y,g,I)=>{te.beginPath(),te.moveTo(q+I,se),te.lineTo(q+y-I,se),te.quadraticCurveTo(q+y,se,q+y,se+I),te.lineTo(q+y,se+g-I),te.quadraticCurveTo(q+y,se+g,q+y-I,se+g),te.lineTo(q+I,se+g),te.quadraticCurveTo(q,se+g,q,se+g-I),te.lineTo(q,se+I),te.quadraticCurveTo(q,se,q+I,se),te.closePath()};B(R,0,4,E.width,E.height-8,16),R.fill(),R.strokeStyle=ge,R.lineWidth=4,B(R,2,6,E.width-4,E.height-12,14),R.stroke(),R.font=`bold ${ee}px Arial, sans-serif`,R.fillStyle="#ffffff",R.textAlign="left",R.textBaseline="middle";const Y=30,G=fe.length>Y?fe.slice(0,Y)+"...":fe;R.fillText(G,24,E.height/2);const K=new Vh(E);K.colorSpace=mn,K.minFilter=zt,K.magFilter=zt,K.needsUpdate=!0;const A=new Pc({map:K,transparent:!0,depthWrite:!1,depthTest:!1});w.push(A,K);const le=new Bh(A);return le.scale.set(6,.85,1),le.renderOrder=100,le}function M(fe,ee){const ge=document.createElement("canvas"),E=ge.getContext("2d");ge.width=64,ge.height=64,E.shadowColor=ee,E.shadowBlur=15,E.fillStyle=ee,E.beginPath(),E.arc(32,32,24,0,Math.PI*2),E.fill(),E.shadowBlur=0,E.fillStyle="#ffffff",E.font="bold 40px Arial",E.textAlign="center",E.textBaseline="middle",E.fillText(fe?"−":"+",32,31);const R=new Vh(ge),B=new Pc({map:R,transparent:!0,depthWrite:!1});w.push(B,R);const Y=new Bh(B);return Y.scale.set(.6,.6,1),Y}function T(fe,ee,ge){const E=Eo[fe.type]||Eo.null,R=new qe(E),B=new ns;B.position.set(ee,ge,0);const Y=new mu(yE,32,32),G=new Hx({color:R,metalness:.1,roughness:.2,clearcoat:1,clearcoatRoughness:.1,emissive:R,emissiveIntensity:.2});w.push(Y,G);const K=new bn(Y,G);K.castShadow=!0,K.receiveShadow=!0,B.add(K);const A=new qx(R,0,8);A.position.set(0,0,1),B.add(A);const le=`${fe.name}: ${fe.value}`,te=C(le,24,E);te.position.set(4,0,0),B.add(te);let q=null;fe.children.length>0&&(q=M(fe.isExpanded,E),q.position.set(0,-.8,.5),B.add(q)),t?.add(B);const se={group:B,mesh:K,node:fe,label:te,expandIcon:q,glow:A,edges:[],worldX:ee,worldY:ge};return l.set(fe.id,se),se}function P(fe,ee){const ge=fe.worldX,E=fe.worldY,R=ee.worldX,B=ee.worldY,Y=Eo[fe.node.type]||Eo.null,G=new qe(Y),K=ge+(R-ge)*.5,A=new xp(new U(ge,E,0),new U(K,E,0),new U(K,B,0),new U(R,B,0)),le=new gu(A,20,.05,8,!1),te=new _a({color:G,transparent:!0,opacity:.4,side:Hn});w.push(le,te);const q=new bn(le,te);return c?.add(q),fe.edges.push(q),q}function L(fe,ee,ge){const E=new Map;function R(G){if(!G.isExpanded||G.children.length===0)return Is;let K=0;return G.children.forEach(A=>{K+=R(A)}),Math.max(Is,K)}function B(G,K,A){if(E.set(G.id,{x:K,y:A}),!G.isExpanded||G.children.length===0)return Is;const le=K+bE,te=G.children.map(y=>R(y)),q=te.reduce((y,g)=>y+g,0);let se=A+(q-Is)/2;return G.children.forEach((y,g)=>{const I=te[g]??Is;B(y,le,se-I/2+Is/2),se-=I}),q}return{height:B(fe,ee,ge),positions:E}}function k(){if(!t||!p)return;if(l.forEach(E=>{t?.remove(E.group)}),l.clear(),c)for(;c.children.length>0;){const E=c.children[0];if(E){c.remove(E);const R=E;R.geometry&&R.geometry.dispose()}}const{positions:fe}=L(p,0,0);function ee(E){const R=fe.get(E.id);R&&T(E,R.x,R.y),E.isExpanded&&E.children.forEach(B=>ee(B))}ee(p);function ge(E){const R=l.get(E.id);!R||!E.isExpanded||E.children.forEach(B=>{const Y=l.get(B.id);Y&&(P(R,Y),ge(B))})}ge(p)}function v(){const ee=new nn,ge=new Float32Array(1e3*3),E=new Float32Array(1e3*3),R=new qe;for(let Y=0;Y<1e3;Y++){const G=(Math.random()-.5)*200,K=(Math.random()-.5)*200,A=(Math.random()-.5)*100-50;ge[Y*3]=G,ge[Y*3+1]=K,ge[Y*3+2]=A,Math.random()>.5?R.setHex(6514417):R.setHex(1096065),E[Y*3]=R.r,E[Y*3+1]=R.g,E[Y*3+2]=R.b}ee.setAttribute("position",new yn(ge,3)),ee.setAttribute("color",new yn(E,3));const B=new mp({size:.5,vertexColors:!0,transparent:!0,opacity:.6,sizeAttenuation:!0});w.push(ee,B),u=new ns,u.add(new Sx(ee,B)),t?.add(u)}function S(fe){if(!n.value)return;p=fe;const ee=n.value,ge=ee.clientWidth,E=ee.clientHeight;i=new ln(60,ge/E,.1,1e3),i.position.set(20,0,40),t=new _x,t.background=new qe(132631),t.fog=new fu(132631,.008);const R=new Jx(16777215,.4);t.add(R);const B=new Kx(16777215,.8);B.position.set(10,10,10),B.castShadow=!0,t.add(B);const Y=new jx(6514417,2);Y.position.set(-20,20,20),t.add(Y),s=new JS({antialias:!0,alpha:!0,powerPreference:"high-performance"}),s.setSize(ge,E),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!0,s.shadowMap.type=Vd;const G=new xE(t,i),K=new Js(new Me(ge,E),1.5,.4,.85);K.threshold=.2,K.strength=.8,K.radius=.5,r=new _E(s),r.addPass(G),r.addPass(K),ee.appendChild(s.domElement),o=new QS(i,s.domElement),o.enableDamping=!0,o.dampingFactor=.05,o.screenSpacePanning=!0,o.minDistance=5,o.maxDistance=200,o.maxPolarAngle=Math.PI/1.2,h=new ev,d=new Me,c=new ns,t.add(c),v(),k(),ee.addEventListener("mousedown",H),ee.addEventListener("mousemove",re),ee.addEventListener("mouseup",oe),ee.addEventListener("click",V),window.addEventListener("resize",ie),e.value.isInitialized=!0,ve()}function D(){if(!h||!i||!d)return null;h.setFromCamera(d,i);const fe=Array.from(l.values()).map(ge=>ge.mesh),ee=h.intersectObjects(fe);if(ee.length>0){const ge=ee[0]?.object;for(const[,E]of l)if(E.mesh===ge)return E}return null}function N(fe){if(!n.value||!d)return;const ee=n.value.getBoundingClientRect();d.x=(fe.clientX-ee.left)/ee.width*2-1,d.y=-((fe.clientY-ee.top)/ee.height)*2+1}function H(fe){if(fe.button!==0)return;N(fe);const ee=D();if(ee&&h&&i){_=!0,x=ee,e.value.isDragging=!0,o&&(o.enabled=!1),m.setFromNormalAndCoplanarPoint(new U(0,0,1),ee.group.position);const ge=new U;h.ray.intersectPlane(m,ge)?f.copy(ge).sub(ee.group.position):f.set(0,0,0),n.value&&(n.value.style.cursor="grabbing"),fe.preventDefault(),fe.stopPropagation()}}function re(fe){if(N(fe),_&&x&&h&&i){const ge=new U;if(h.setFromCamera(d,i),h.ray.intersectPlane(m,ge)){const E=ge.sub(f);x.group.position.copy(E),x.group.position.z=0,x.worldX=E.x,x.worldY=E.y,Z()}return}const ee=D();if(l.forEach(ge=>{const E=ge.mesh.material;ge.node!==e.value.hoveredNode&&(ge.glow.intensity=0,E.emissiveIntensity=.2,ge.label.scale.set(6,.85,1),ge.group.scale.setScalar(1))}),ee){const ge=ee.mesh.material;ge.emissiveIntensity=1,ee.glow.intensity=2,ee.group.scale.setScalar(1.1),ee.label.scale.set(7.5,1.05,1),e.value.hoveredNode=ee.node,n.value&&(n.value.style.cursor="pointer")}else e.value.hoveredNode=null,n.value&&(n.value.style.cursor="default")}function oe(){_&&(_=!1,x=null,e.value.isDragging=!1,o&&(o.enabled=!0),n.value&&(n.value.style.cursor="default"))}function Z(){if(!c)return;for(;c.children.length>0;){const ee=c.children[0];ee&&(c.remove(ee),ee instanceof bn&&ee.geometry.dispose())}l.forEach(ee=>{ee.edges=[]});function fe(ee){const ge=l.get(ee.id);!ge||!ee.isExpanded||ee.children.forEach(E=>{const R=l.get(E.id);R&&(P(ge,R),fe(E))})}p&&fe(p)}function V(fe){if(e.value.isDragging)return;N(fe);const ee=D();ee&&ee.node.children.length>0&&(ee.node.isExpanded=!ee.node.isExpanded,k())}function ie(){if(!n.value||!i||!s||!r)return;const fe=n.value.clientWidth,ee=n.value.clientHeight;i.aspect=fe/ee,i.updateProjectionMatrix(),s.setSize(fe,ee),r.setSize(fe,ee)}function ve(){!s||!t||!i||!o||!r||(a=requestAnimationFrame(ve),_||o.update(),u&&(u.rotation.y+=5e-4),r.render())}function xe(){if(i&&o){const fe=i.position.distanceTo(o.target),ee=Math.max(fe*.8,o.minDistance),ge=new U().subVectors(i.position,o.target).normalize();i.position.copy(o.target).add(ge.multiplyScalar(ee)),o.update()}}function Ee(){if(i&&o){const fe=i.position.distanceTo(o.target),ee=Math.min(fe*1.25,o.maxDistance),ge=new U().subVectors(i.position,o.target).normalize();i.position.copy(o.target).add(ge.multiplyScalar(ee)),o.update()}}function Ge(){o&&i&&(i.position.set(20,0,40),o.target.set(0,0,0),o.update())}function Ye(fe){fe.isExpanded=!0,fe.children.forEach(Ye)}function ft(fe){fe.isExpanded=!1,fe.children.forEach(ft)}function lt(){p&&(Ye(p),k())}function ae(){p&&(ft(p),p.isExpanded=!0,k())}function he(){o&&(o.autoRotate=!o.autoRotate,e.value.isAutoRotating=o.autoRotate)}function Ne(){a!==null&&cancelAnimationFrame(a),n.value&&(n.value.removeEventListener("mousedown",H),n.value.removeEventListener("mousemove",re),n.value.removeEventListener("mouseup",oe),n.value.removeEventListener("click",V)),window.removeEventListener("resize",ie),w.forEach(fe=>fe.dispose()),w.length=0,s&&(s.dispose(),n.value&&s.domElement.parentNode===n.value&&n.value.removeChild(s.domElement)),o&&o.dispose(),t=null,i=null,s=null,r=null,o=null,l.clear(),c=null,h=null,d=null,p=null,_=!1,x=null,e.value.isInitialized=!1,e.value.hoveredNode=null,e.value.isDragging=!1}return{state:e,initialize:S,dispose:Ne,zoomIn:xe,zoomOut:Ee,resetView:Ge,expandAll:lt,collapseAll:ae,toggleAutoRotate:he}}const SE={key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title"},EE={key:0,class:"relative z-10 w-full max-w-[95vw] h-[90vh] bg-black/40 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10"},TE={class:"absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none"},wE={class:"flex items-center gap-6 flex-wrap pointer-events-auto"},AE={class:"flex items-center gap-2 p-1.5 bg-slate-950/50 backdrop-blur-md rounded-2xl ring-1 ring-white/10 shadow-xl"},CE={class:"flex items-center gap-0.5 px-1"},RE={class:"flex items-center gap-1"},PE={key:0,class:"absolute bottom-8 left-8 z-20 w-80 pointer-events-none"},DE={class:"bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group"},LE={class:"relative z-10"},IE={class:"flex items-center gap-3 mb-3"},NE={class:"text-[10px] uppercase tracking-widest text-slate-400 font-bold"},UE={class:"text-white font-bold text-lg leading-tight mb-1 truncate"},FE={class:"mt-3 bg-black/30 rounded-lg p-3 border border-white/5"},OE={class:"text-xs text-slate-300 font-mono break-all leading-relaxed max-h-32 overflow-hidden text-ellipsis"},BE={class:"absolute bottom-8 right-8 z-20 flex flex-col items-end gap-2 pointer-events-none"},kE={class:"bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-2 text-[10px] text-slate-400"},zE=Un({__name:"JsonTreeModal",props:{isOpen:{type:Boolean},jsonData:{type:[String,Number,Boolean,null,Object]}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,s=gt(null),{state:r,initialize:o,dispose:a,zoomIn:l,zoomOut:c,resetView:u,expandAll:h,collapseAll:d,toggleAutoRotate:p}=ME(s);function _(){a(),i("close")}function x(m){m.key==="Escape"&&_()}return Li(()=>t.isOpen,async m=>{if(m&&t.jsonData!==null){await qf();const f=d_(t.jsonData);o(f),window.addEventListener("keydown",x)}else window.removeEventListener("keydown",x),a()}),(m,f)=>(Te(),hi($c,{to:"body"},[yt(Er,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:zs(()=>[n.isOpen?(Te(),Ue("div",SE,[F("div",{class:"absolute inset-0 bg-slate-950/90 backdrop-blur-md",onClick:_,"aria-hidden":"true"}),yt(Er,{"enter-active-class":"transition-all duration-300 ease-out delay-100","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:zs(()=>[n.isOpen?(Te(),Ue("div",EE,[F("header",TE,[F("div",wE,[f[12]||(f[12]=F("div",{class:"flex items-center gap-3"},[F("div",{class:"w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-white/10 backdrop-blur-sm"},[F("svg",{class:"w-5 h-5 text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})])]),F("div",null,[F("h2",{id:"modal-title",class:"text-white font-bold text-xl tracking-tight"},"Cosmos JSON"),F("p",{class:"text-xs text-slate-400 font-medium tracking-wide uppercase"},"Explorador 3D")])],-1)),F("div",AE,[F("div",CE,[F("button",{class:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all",onClick:f[0]||(f[0]=(...w)=>$(c)&&$(c)(...w)),title:"Alejar"},[...f[6]||(f[6]=[F("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"})],-1)])]),F("button",{class:"p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all",onClick:f[1]||(f[1]=(...w)=>$(l)&&$(l)(...w)),title:"Acercar"},[...f[7]||(f[7]=[F("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1)])])]),f[10]||(f[10]=F("div",{class:"w-px h-6 bg-white/10"},null,-1)),F("button",{class:ue(["p-2 rounded-xl transition-all flex items-center gap-2 px-3",$(r).isAutoRotating?"bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/50":"text-slate-400 hover:text-white hover:bg-white/10"]),onClick:f[2]||(f[2]=(...w)=>$(p)&&$(p)(...w)),title:"Alternar rotación automática"},[(Te(),Ue("svg",{class:ue(["w-4 h-4",{"animate-spin-slow":$(r).isAutoRotating}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...f[8]||(f[8]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)])],2)),f[9]||(f[9]=F("span",{class:"text-xs font-medium hidden sm:block"},"Girar",-1))],2),f[11]||(f[11]=F("div",{class:"w-px h-6 bg-white/10"},null,-1)),F("div",RE,[F("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:f[3]||(f[3]=(...w)=>$(h)&&$(h)(...w))},"Expandir"),F("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:f[4]||(f[4]=(...w)=>$(d)&&$(d)(...w))},"Colapsar"),F("button",{class:"px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all",onClick:f[5]||(f[5]=(...w)=>$(u)&&$(u)(...w))},"Reset")])])]),F("button",{class:"pointer-events-auto p-2.5 text-slate-400 hover:text-white bg-slate-950/50 hover:bg-red-500/20 hover:text-red-200 rounded-full transition-all ring-1 ring-white/10 backdrop-blur-md",onClick:_},[...f[13]||(f[13]=[F("svg",{class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),yt(Er,{"enter-active-class":"transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)","enter-from-class":"opacity-0 translate-y-4 scale-95","enter-to-class":"opacity-100 translate-y-0 scale-100","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100 translate-y-0 scale-100","leave-to-class":"opacity-0 translate-y-4 scale-95"},{default:zs(()=>[$(r).hoveredNode?(Te(),Ue("div",PE,[F("div",DE,[f[14]||(f[14]=F("div",{class:"absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 blur-3xl rounded-full group-hover:bg-primary-500/30 transition-colors"},null,-1)),F("div",LE,[F("div",IE,[F("div",{class:ue(["w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]",{"text-orange-400 bg-orange-400":$(r).hoveredNode.type==="object","text-cyan-400 bg-cyan-400":$(r).hoveredNode.type==="array","text-emerald-400 bg-emerald-400":$(r).hoveredNode.type==="string","text-blue-400 bg-blue-400":$(r).hoveredNode.type==="number","text-pink-400 bg-pink-400":$(r).hoveredNode.type==="boolean","text-slate-400 bg-slate-400":$(r).hoveredNode.type==="null"}])},null,2),F("span",NE,it($(r).hoveredNode.type),1)]),F("h3",UE,it($(r).hoveredNode.name),1),F("div",FE,[F("p",OE,it($(r).hoveredNode.value),1)])])])])):wt("",!0)]),_:1}),F("div",BE,[F("div",kE,[f[15]||(f[15]=F("span",{class:"w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"},null,-1)),F("span",null,it($(r).zoomLevel?Math.round($(r).zoomLevel*100):0)+"% Zoom",1)])]),F("div",{ref_key:"containerRef",ref:s,class:"w-full h-full cursor-grab active:cursor-grabbing bg-slate-950"},null,512)])):wt("",!0)]),_:1})])):wt("",!0)]),_:1})]))}}),VE=eu(zE,[["__scopeId","data-v-f0b10e93"]]),HE={class:"mb-4 flex items-center justify-between flex-wrap gap-2"},GE={class:"flex items-center gap-2"},WE={key:0,class:"flex items-center gap-1.5"},XE=["title","aria-label"],jE={key:0,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},YE={key:1,class:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},qE={key:0,class:"p-6 animate-fade-in",role:"alert"},$E={class:"flex-1 min-w-0"},KE={key:1,class:"flex flex-col items-center justify-center h-full py-16 px-6 animate-fade-in"},JE={key:2,class:"p-4 animate-fade-in"},ZE=Un({__name:"JsonViewer",props:{jsonText:{},theme:{}},setup(n){const e=n,t=_t(()=>e.theme.name==="dark"||e.theme.name==="midnight"),{parsedData:i,errorMessage:s,setJsonText:r}=Bd(e.jsonText);Li(()=>e.jsonText,M=>{r(M)});const o=_t(()=>i.value!==null),a=_t(()=>s.value!==null),l=_t(()=>!e.jsonText.trim()),c=gt(!1),u=gt(0),h=gt(2);function d(){c.value=!0}function p(){c.value=!1}function _(){h.value=999,u.value++}function x(){h.value=0,u.value++}function m(){h.value=2,u.value++}const f=gt(!1);function w(){f.value=!f.value}function C(M){M.key==="Escape"&&f.value&&(f.value=!1)}return Zs(()=>window.addEventListener("keydown",C)),Qs(()=>window.removeEventListener("keydown",C)),(M,T)=>(Te(),hi($c,{to:"body",disabled:!f.value},[F("div",{class:ue(f.value?"fixed inset-0 z-50 flex flex-col p-4 md:p-6":"flex flex-col h-full")},[f.value?(Te(),Ue("div",{key:0,class:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:T[0]||(T[0]=P=>f.value=!1)})):wt("",!0),F("div",{class:ue(f.value?["relative z-10 flex-1 flex flex-col min-h-0 rounded-2xl p-4 md:p-6 overflow-hidden",n.theme.colors.bgCard,n.theme.colors.shadow]:"flex flex-col h-full")},[F("div",HE,[F("div",GE,[F("div",{class:ue(["w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",t.value?"bg-gradient-to-br from-cyan-400 to-cyan-500":"bg-gradient-to-br from-cyan-500 to-cyan-600"])},[...T[1]||(T[1]=[F("svg",{class:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1)])],2),F("h2",{class:ue(["text-lg font-semibold transition-colors duration-300",n.theme.colors.textPrimary])},"Visualizador",2)]),o.value?(Te(),Ue("div",WE,[F("div",{class:ue(["flex items-center gap-0.5 p-1 rounded-lg transition-colors duration-300",t.value?"bg-slate-700":"bg-gray-100"])},[F("button",{class:ue(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Expandir todo","aria-label":"Expandir todos los nodos",onClick:_},[...T[2]||(T[2]=[F("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"})],-1)])],2),F("button",{class:ue(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Colapsar todo","aria-label":"Colapsar todos los nodos",onClick:x},[...T[3]||(T[3]=[F("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"})],-1)])],2),F("button",{class:ue(["p-1.5 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500",t.value?"text-slate-300 hover:text-white hover:bg-slate-600":"text-gray-600 hover:text-gray-900 hover:bg-white"]),title:"Restablecer vista","aria-label":"Restablecer vista por defecto",onClick:m},[...T[4]||(T[4]=[F("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1)])],2)],2),F("button",{class:ue(["inline-flex items-center gap-1.5 px-3 py-1.5 text-white text-xs font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 transition-all shadow-sm",t.value?"bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500":"bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"]),onClick:d,title:"Abrir visualización 3D","aria-label":"Abrir visualización 3D del árbol JSON"},[...T[5]||(T[5]=[F("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"})],-1),F("span",null,"Vista 3D",-1)])],2),F("button",{onClick:w,class:ue(["inline-flex items-center p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",t.value?"text-slate-300 bg-slate-700 hover:bg-slate-600 focus:ring-slate-500":"text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"]),title:f.value?"Salir de pantalla completa":"Pantalla completa","aria-label":f.value?"Salir de pantalla completa":"Pantalla completa"},[f.value?(Te(),Ue("svg",YE,[...T[7]||(T[7]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9L4 4m0 0v4m0-4h4m6 0l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m6 0l5 5m0 0v-4m0 4h-4"},null,-1)])])):(Te(),Ue("svg",jE,[...T[6]||(T[6]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"},null,-1)])]))],10,XE)])):wt("",!0)]),F("div",{class:ue(["flex-1 overflow-auto rounded-xl ring-1 shadow-inner-soft transition-colors duration-300",t.value?"bg-slate-800/50 ring-slate-700":"bg-surface-secondary ring-gray-100"])},[a.value?(Te(),Ue("div",qE,[F("div",{class:ue(["flex items-start gap-4 p-4 border rounded-xl transition-colors duration-300",t.value?"bg-red-900/30 border-red-800":"bg-red-50 border-red-200"])},[F("div",{class:ue(["w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300",t.value?"bg-red-900/50":"bg-red-100"])},[(Te(),Ue("svg",{class:ue(["w-5 h-5",t.value?"text-red-400":"text-red-600"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...T[8]||(T[8]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])],2))],2),F("div",$E,[F("p",{class:ue(["font-semibold",t.value?"text-red-300":"text-red-800"])},"Error de sintaxis JSON",2),F("p",{class:ue(["text-sm mt-1 break-words",t.value?"text-red-400":"text-red-600"])},it($(s)),3)])],2)])):l.value?(Te(),Ue("div",KE,[F("div",{class:ue(["w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300",t.value?"bg-gradient-to-br from-slate-700 to-slate-800":"bg-gradient-to-br from-gray-100 to-gray-200"])},[(Te(),Ue("svg",{class:ue(["w-10 h-10",t.value?"text-slate-500":"text-gray-400"]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[...T[9]||(T[9]=[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)])],2))],2),F("p",{class:ue(["text-lg font-medium mb-1 transition-colors duration-300",t.value?"text-slate-300":"text-gray-700"])},"Sin datos JSON",2),F("p",{class:ue(["text-sm text-center max-w-xs transition-colors duration-300",t.value?"text-slate-500":"text-gray-500"])}," Ingresa o pega JSON válido en el panel de entrada para visualizar su estructura ",2)])):o.value?(Te(),Ue("div",JE,[(Te(),hi(u_,{key:u.value,data:$(i),name:"root",isRoot:!0,depth:0,initialExpandDepth:h.value,lineNumber:1,theme:n.theme},null,8,["data","initialExpandDepth","theme"]))])):wt("",!0)],2),yt(VE,{isOpen:c.value,jsonData:$(i),onClose:p},null,8,["isOpen","jsonData"])],2)],2)],8,["disabled"]))}}),QE={class:"mb-6 md:mb-8"},eT={class:"flex items-center justify-between"},tT={class:"w-32"},nT={class:"flex-1 text-center"},iT={class:"flex justify-end w-32"},Ap=Un({__name:"ToolHeader",props:{toolName:{},toolDescription:{}},emits:["back"],setup(n){const{currentTheme:e}=cs(),t=_t(()=>e.value.name==="dark"||e.value.name==="midnight");return(i,s)=>(Te(),Ue("header",QE,[F("div",eT,[F("div",tT,[F("button",{class:ue(["inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",[t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-800 hover:bg-black/5"]]),onClick:s[0]||(s[0]=r=>i.$emit("back")),"aria-label":"Go back to home"},[...s[1]||(s[1]=[F("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})],-1),rs(" Home ",-1)])],2)]),F("div",nT,[F("h1",{class:ue(["text-2xl md:text-3xl font-bold bg-clip-text text-transparent transition-colors duration-300",[t.value?"bg-gradient-to-r from-white via-gray-200 to-white":"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"]])},it(n.toolName),3),n.toolDescription?(Te(),Ue("p",{key:0,class:ue(["text-xs md:text-sm font-medium mt-0.5 transition-colors duration-300",$(e).colors.textMuted])},it(n.toolDescription),3)):wt("",!0)]),F("div",iT,[yt(Od)])])]))}}),sT={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},rT={class:"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-hidden"},oT={class:"mt-4 text-center"},aT=Un({__name:"JsonViewerView",emits:["back"],setup(n){const{currentTheme:e}=cs(),t=gt(""),i=_t(()=>e.value.name==="dark"||e.value.name==="midnight");return(s,r)=>(Te(),Ue("div",sT,[yt(Ap,{"tool-name":"JSON Viewer","tool-description":"Visualize and explore JSON structures interactively",onBack:r[0]||(r[0]=o=>s.$emit("back"))}),F("main",rT,[F("section",{class:ue(["rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300",[$(e).colors.bgCard,$(e).colors.shadow,$(e).colors.bgCardHover,i.value?"ring-1 ring-white/10":"border border-white/50"]]),"aria-label":"JSON input panel"},[yt(n_,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=o=>t.value=o),theme:$(e)},null,8,["modelValue","theme"])],2),F("section",{class:ue(["rounded-2xl p-4 md:p-6 flex flex-col overflow-hidden transition-all duration-300",[$(e).colors.bgCard,$(e).colors.shadow,$(e).colors.bgCardHover,i.value?"ring-1 ring-white/10":"border border-white/50"]]),"aria-label":"JSON viewer panel"},[yt(ZE,{jsonText:t.value,theme:$(e)},null,8,["jsonText","theme"])],2)]),F("footer",oT,[F("p",{class:ue(["text-xs transition-colors duration-300",$(e).colors.textMuted])},[r[2]||(r[2]=rs(" Press ",-1)),F("kbd",{class:ue(["px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300",i.value?"bg-slate-800 text-slate-400":"bg-gray-100 text-gray-500"])},"Ctrl",2),r[3]||(r[3]=rs(" + ",-1)),F("kbd",{class:ue(["px-1.5 py-0.5 rounded font-mono text-[10px] transition-colors duration-300",i.value?"bg-slate-800 text-slate-400":"bg-gray-100 text-gray-500"])},"V",2),r[4]||(r[4]=rs(" to paste and auto-format ",-1))],2)])]))}}),lT={key:1,class:"min-w-full w-max"},cT={class:"px-2 pt-0.5 whitespace-pre"},uT={key:2},Mf=Un({__name:"DiffOutputPanel",props:{lines:{},currentPairIndex:{},side:{}},setup(n,{expose:e}){const t=gt();e({scrollEl:t});const{currentTheme:i}=cs(),s=_t(()=>i.value.name==="dark"||i.value.name==="midnight");return(r,o)=>(Te(),Ue("div",{ref_key:"scrollEl",ref:t,class:ue(["h-full overflow-auto font-mono text-sm rounded-xl transition-colors duration-300",[$(i).colors.bgCard,s.value?"ring-1 ring-white/10":"border border-white/50"]])},[n.lines.length===0?(Te(),Ue("div",{key:0,class:ue(["h-full flex items-center justify-center flex-col gap-2 transition-colors duration-300",$(i).colors.textMuted])},[...o[0]||(o[0]=[F("svg",{class:"w-8 h-8 opacity-40",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})],-1),F("span",{class:"text-xs"},"No result",-1)])],2)):(Te(),Ue("div",lT,[(Te(!0),Ue(Lt,null,os(n.lines,(a,l)=>(Te(),Ue("div",{key:l,class:ue(["flex items-stretch min-h-[1.75rem] leading-7 w-full transition-colors duration-150",[a.type==="equal"?s.value?"bg-transparent text-gray-300":"bg-white/60 text-gray-700":a.type==="removed"?s.value?"bg-red-900/50 border-l-2 border-red-400 text-red-200":"bg-red-50 border-l-2 border-red-400 text-red-900":a.type==="added"?s.value?"bg-green-900/50 border-l-2 border-green-400 text-green-200":"bg-green-50 border-l-2 border-green-400 text-green-900":a.type==="modified"?s.value?"bg-yellow-900/40 border-l-2 border-yellow-400 text-yellow-100":"bg-yellow-50 border-l-2 border-amber-400 text-yellow-900":s.value?"bg-white/5 text-gray-500":"bg-gray-50/80 text-gray-300",l===n.currentPairIndex?s.value?"ring-1 ring-inset ring-primary-400/70":"ring-1 ring-inset ring-primary-500/50":""]])},[F("span",{class:ue(["select-none w-10 flex-shrink-0 text-right pr-3 pt-0.5 text-[11px] transition-colors duration-300",[a.type==="empty"?"opacity-0":"",s.value?"text-gray-600":"text-gray-400"]])},it(a.lineNumber??""),3),F("span",cT,[a.type==="empty"?(Te(),Ue("span",{key:0,class:ue(["transition-colors duration-300",s.value?"text-gray-700":"text-gray-300"])},"···",2)):a.type==="modified"&&a.chars?(Te(!0),Ue(Lt,{key:1},os(a.chars,(c,u)=>(Te(),Ue(Lt,{key:u},[n.side==="left"&&c.type!=="added"?(Te(),Ue("span",{key:0,class:ue(c.type==="removed"?s.value?"bg-red-500/50 text-red-100 line-through":"bg-red-200 text-red-800 line-through":"")},it(c.text),3)):n.side==="right"&&c.type!=="removed"?(Te(),Ue("span",{key:1,class:ue(c.type==="added"?s.value?"bg-green-500/50 text-green-100":"bg-green-200 text-green-800":"")},it(c.text),3)):wt("",!0)],64))),128)):(Te(),Ue("span",uT,it(a.content),1))])],2))),128))]))],2))}});function Cp(n,e,t){const i=n.length,s=e.length,r=Array.from({length:i+1},()=>new Array(s+1).fill(0));for(let o=1;o<=i;o++)for(let a=1;a<=s;a++)r[o][a]=t(n[o-1],e[a-1])?r[o-1][a-1]+1:Math.max(r[o-1][a],r[o][a-1]);return r}function hT(n,e){const t=n.length,i=e.length,s=Cp(n,e,(l,c)=>l===c),r=[];let o=t,a=i;for(;o>0||a>0;)o>0&&a>0&&n[o-1]===e[a-1]?(r.unshift([n[o-1],e[a-1]]),o--,a--):a>0&&(o===0||s[o][a-1]>=s[o-1][a])?(r.unshift([null,e[a-1]]),a--):o>0&&(r.unshift([n[o-1],null]),o--);return r}function fT(n,e){const t=n.split(""),i=e.split("");if(t.length===0&&i.length===0)return[{type:"equal",text:""}];if(t.length===0)return i.map(u=>({type:"added",text:u}));if(i.length===0)return t.map(u=>({type:"removed",text:u}));const s=t.length,r=i.length,o=Cp(t,i,(u,h)=>u.toLowerCase()===h.toLowerCase()),a=[];let l=s,c=r;for(;l>0||c>0;)l>0&&c>0&&t[l-1].toLowerCase()===i[c-1].toLowerCase()?(a.unshift({type:"equal",text:t[l-1]}),l--,c--):c>0&&(l===0||o[l][c-1]>=o[l-1][c])?(a.unshift({type:"added",text:i[c-1]}),c--):l>0&&(a.unshift({type:"removed",text:t[l-1]}),l--);return a}function dT(n,e,t){const i=Math.min(n.length,e.length);for(let s=0;s<i;s++)t.push({type:"modified",chars:fT(n[s],e[s])});for(let s=i;s<n.length;s++)t.push({type:"removed",content:n[s]});for(let s=i;s<e.length;s++)t.push({type:"added",content:e[s]})}function pT(n,e){const t=n.split(`
`),i=e.split(`
`),s=hT(t,i),r=[];let o=0;for(;o<s.length;){const[a,l]=s[o];if(a!==null&&l!==null){r.push({type:"equal",content:a}),o++;continue}const c=[];for(;o<s.length&&s[o][0]!==null&&s[o][1]===null;)c.push(s[o][0]),o++;const u=[];for(;o<s.length&&s[o][0]===null&&s[o][1]!==null;)u.push(s[o][1]),o++;dT(c,u,r)}return r}function mT(n){const e={added:0,removed:0,modified:0,equal:0};for(const t of n)t.type==="modified"?e.modified++:t.content?.trim()&&e[t.type]++;return e}function gT(n){const e=[];let t=1,i=1;for(const s of n){const r=s.content??"";s.type==="equal"?e.push({left:{lineNumber:t++,type:"equal",content:r},right:{lineNumber:i++,type:"equal",content:r},isDiff:!1}):s.type==="removed"?e.push({left:{lineNumber:t++,type:"removed",content:r},right:{lineNumber:null,type:"empty"},isDiff:!0}):s.type==="added"?e.push({left:{lineNumber:null,type:"empty"},right:{lineNumber:i++,type:"added",content:r},isDiff:!0}):s.type==="modified"&&e.push({left:{lineNumber:t++,type:"modified",chars:s.chars},right:{lineNumber:i++,type:"modified",chars:s.chars},isDiff:!0})}return e}function _T(){const n=gt(""),e=gt(""),t=gt([]),i=gt({added:0,removed:0,modified:0,equal:0}),s=_t(()=>t.value.length>0),r=_t(()=>t.value.reduce((p,_,x)=>(_.isDiff&&p.push(x),p),[])),o=gt(-1),a=_t(()=>r.value[o.value]??-1),l=_t(()=>t.value.map(p=>p.left)),c=_t(()=>t.value.map(p=>p.right));function u(){if(!n.value.trim()&&!e.value.trim())return;const p=pT(n.value,e.value);t.value=gT(p),i.value=mT(p),o.value=r.value.length>0?0:-1}function h(){r.value.length!==0&&(o.value=(o.value+1)%r.value.length)}function d(){r.value.length!==0&&(o.value=(o.value-1+r.value.length)%r.value.length)}return{originalText:n,modifiedText:e,renderedPairs:t,stats:i,hasResult:s,diffIndices:r,currentDiffStep:o,currentPairIndex:a,leftLines:l,rightLines:c,compare:u,goToNext:h,goToPrev:d}}const xT={class:"h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1800px] mx-auto flex flex-col"},vT={class:"flex-1 flex flex-col gap-3 overflow-hidden"},yT={class:"grid grid-cols-1 lg:grid-cols-2 gap-3",style:{"flex-shrink":"0"}},bT={class:"flex flex-col gap-1"},MT={class:"flex flex-col gap-1"},ST={class:"flex items-center gap-3 flex-wrap flex-shrink-0"},ET={class:"flex items-center gap-2 text-xs font-medium"},TT={key:0,class:"flex items-center gap-1 ml-auto"},wT={class:"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 overflow-hidden"},AT=Un({__name:"TextCompareView",emits:["back"],setup(n){const{currentTheme:e}=cs(),t=_t(()=>e.value.name==="dark"||e.value.name==="midnight"),{originalText:i,modifiedText:s,stats:r,hasResult:o,diffIndices:a,currentDiffStep:l,currentPairIndex:c,leftLines:u,rightLines:h,compare:d,goToNext:p,goToPrev:_}=_T(),x=gt(),m=gt();let f=!1;function w(){if(f)return;f=!0;const M=m.value?.scrollEl;M&&x.value?.scrollEl&&(M.scrollTop=x.value.scrollEl.scrollTop),f=!1}function C(){if(f)return;f=!0;const M=x.value?.scrollEl;M&&m.value?.scrollEl&&(M.scrollTop=m.value.scrollEl.scrollTop),f=!1}return Zs(()=>{x.value?.scrollEl?.addEventListener("scroll",w),m.value?.scrollEl?.addEventListener("scroll",C)}),Qs(()=>{x.value?.scrollEl?.removeEventListener("scroll",w),m.value?.scrollEl?.removeEventListener("scroll",C)}),Li(c,M=>{if(M<0)return;const T=x.value?.scrollEl,P=m.value?.scrollEl;if(!T||!P)return;const L=28,k=Math.max(0,M*L-T.clientHeight/2+L/2);T.scrollTop=k,P.scrollTop=k}),(M,T)=>(Te(),Ue("div",xT,[yt(Ap,{"tool-name":"Text Compare","tool-description":"Compare two texts with line and character-level diff",onBack:T[0]||(T[0]=P=>M.$emit("back"))}),F("div",vT,[F("div",yT,[F("div",bT,[F("label",{class:ue(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",$(e).colors.textMuted])},"Original",2),Al(F("textarea",{"onUpdate:modelValue":T[1]||(T[1]=P=>Ut(i)?i.value=P:null),placeholder:"Paste original text here...",rows:"6",class:ue(["w-full resize-none rounded-xl p-3 font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50",[$(e).colors.bgCard,$(e).colors.textPrimary,t.value?"ring-1 ring-white/10 placeholder:text-gray-600":"border border-white/50 placeholder:text-gray-300"]])},null,2),[[Fl,$(i)]])]),F("div",MT,[F("label",{class:ue(["text-xs font-semibold uppercase tracking-wide transition-colors duration-300",$(e).colors.textMuted])},"Modified",2),Al(F("textarea",{"onUpdate:modelValue":T[2]||(T[2]=P=>Ut(s)?s.value=P:null),placeholder:"Paste modified text here...",rows:"6",class:ue(["w-full resize-none rounded-xl p-3 font-mono text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/50",[$(e).colors.bgCard,$(e).colors.textPrimary,t.value?"ring-1 ring-white/10 placeholder:text-gray-600":"border border-white/50 placeholder:text-gray-300"]])},null,2),[[Fl,$(s)]])])]),F("div",ST,[F("button",{class:ue(["px-4 py-1.5 rounded-lg text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]",t.value?"bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500":"bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600"]),onClick:T[3]||(T[3]=(...P)=>$(d)&&$(d)(...P))}," Compare ",2),$(o)?(Te(),Ue(Lt,{key:0},[F("div",ET,[$(r).added>0?(Te(),Ue("span",{key:0,class:ue(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-green-900/50 text-green-400":"bg-green-100 text-green-700"])},"+"+it($(r).added)+" added",3)):wt("",!0),$(r).removed>0?(Te(),Ue("span",{key:1,class:ue(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-red-900/50 text-red-400":"bg-red-100 text-red-700"])},"-"+it($(r).removed)+" removed",3)):wt("",!0),$(r).modified>0?(Te(),Ue("span",{key:2,class:ue(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-amber-900/50 text-amber-400":"bg-amber-100 text-amber-700"])},"~"+it($(r).modified)+" modified",3)):wt("",!0),$(r).equal>0?(Te(),Ue("span",{key:3,class:ue(["px-2 py-0.5 rounded-full transition-colors duration-300",t.value?"bg-white/10 text-gray-400":"bg-gray-100 text-gray-500"])},"="+it($(r).equal)+" equal",3)):wt("",!0)]),$(a).length>0?(Te(),Ue("div",TT,[F("button",{class:ue(["w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200",t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-800 hover:bg-black/5"]),"aria-label":"Previous diff",onClick:T[4]||(T[4]=(...P)=>$(_)&&$(_)(...P))},[...T[6]||(T[6]=[F("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1)])],2),F("span",{class:ue(["text-xs font-mono px-2 transition-colors duration-300",$(e).colors.textMuted])},it($(l)+1)+" / "+it($(a).length),3),F("button",{class:ue(["w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200",t.value?"text-gray-400 hover:text-gray-200 hover:bg-white/10":"text-gray-500 hover:text-gray-800 hover:bg-black/5"]),"aria-label":"Next diff",onClick:T[5]||(T[5]=(...P)=>$(p)&&$(p)(...P))},[...T[7]||(T[7]=[F("svg",{class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)])],2)])):wt("",!0)],64)):wt("",!0)]),F("div",wT,[yt(Mf,{ref_key:"leftPanel",ref:x,lines:$(u),"current-pair-index":$(c),side:"left"},null,8,["lines","current-pair-index"]),yt(Mf,{ref_key:"rightPanel",ref:m,lines:$(h),"current-pair-index":$(c),side:"right"},null,8,["lines","current-pair-index"])])])]))}}),CT=Un({__name:"App",setup(n){const{currentTheme:e}=cs(),t=gt(null);function i(r){t.value=r}function s(){t.value=null}return(r,o)=>(Te(),Ue("div",{class:ue(["min-h-screen w-full bg-gradient-to-br p-4 md:p-6 lg:p-8 transition-colors duration-300",$(e).colors.bgPrimary])},[yt(Er,{name:"view",mode:"out-in"},{default:zs(()=>[t.value===null?(Te(),hi(zg,{key:"home",onSelectTool:i})):t.value==="json-viewer"?(Te(),hi(aT,{key:"json-viewer",onBack:s})):t.value==="text-compare"?(Te(),hi(AT,{key:"text-compare",onBack:s})):wt("",!0)]),_:1})],2))}}),RT=eu(CT,[["__scopeId","data-v-1f7b124f"]]);hg(RT).mount("#app");
