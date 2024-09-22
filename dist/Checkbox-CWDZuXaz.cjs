"use strict";var V=Object.defineProperty;var z=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var f=(e,t,n)=>z(e,typeof t!="symbol"?t+"":t,n);function k(){}function R(e){return e()}function P(){return Object.create(null)}function w(e){e.forEach(R)}function D(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function U(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function Y(e,t,n){const s=q(e);if(!s.getElementById(t)){const r=g("style");r.id=t,r.textContent=n,G(s,r)}}function q(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function G(e,t){return p(e.head||e,t),t.sheet}function H(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function K(){return I(" ")}function S(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.data!==t&&(e.data=t)}function X(e,t,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:s})}function Z(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}let x;function y(e){x=e}function tt(){if(!x)throw new Error("Function called outside component initialization");return x}function et(){const e=tt();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=X(t,n,{cancelable:s});return r.slice().forEach(o=>{o.call(e,i)}),!i.defaultPrevented}return!0}}const _=[],B=[];let m=[];const M=[],nt=Promise.resolve();let C=!1;function st(){C||(C=!0,nt.then(b))}function O(e){m.push(e)}const v=new Set;let h=0;function b(){if(h!==0)return;const e=x;do{try{for(;h<_.length;){const t=_[h];h++,y(t),it(t.$$)}}catch(t){throw _.length=0,h=0,t}for(y(null),_.length=0,h=0;B.length;)B.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];v.has(n)||(v.add(n),n())}m.length=0}while(_.length);for(;M.length;)M.pop()();C=!1,v.clear(),y(e)}function it(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}function rt(e){const t=[],n=[];m.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),m=t}const ct=new Set;function ot(e,t){e&&e.i&&(ct.delete(e),e.i(t))}function lt(e,t,n){const{fragment:s,after_update:r}=e.$$;s&&s.m(t,n),O(()=>{const i=e.$$.on_mount.map(R).filter(D);e.$$.on_destroy?e.$$.on_destroy.push(...i):w(i),e.$$.on_mount=[]}),r.forEach(O)}function ut(e,t){const n=e.$$;n.fragment!==null&&(rt(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function at(e,t){e.$$.dirty[0]===-1&&(_.push(e),st(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ft(e,t,n,s,r,i,o=null,u=[-1]){const l=x;y(e);const c=e.$$={fragment:null,ctx:[],props:i,update:k,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:P(),dirty:u,skip_bound:!1,root:t.target||l.$$.root};o&&o(c.root);let a=!1;if(c.ctx=n?n(e,t.props||{},(d,A,...N)=>{const L=N.length?N[0]:A;return c.ctx&&r(c.ctx[d],c.ctx[d]=L)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](L),a&&at(e,d)),A}):[],c.update(),a=!0,w(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const d=Q(t.target);c.fragment&&c.fragment.l(d),d.forEach(j)}else c.fragment&&c.fragment.c();t.intro&&ot(e.$$.fragment),lt(e,t.target,t.anchor),b()}y(l)}let T;typeof HTMLElement=="function"&&(T=class extends HTMLElement{constructor(t,n,s){super();f(this,"$$ctor");f(this,"$$s");f(this,"$$c");f(this,"$$cn",!1);f(this,"$$d",{});f(this,"$$r",!1);f(this,"$$p_d",{});f(this,"$$l",{});f(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=n,s&&this.attachShadow({mode:"open"})}addEventListener(t,n,s){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const r=this.$$c.$on(t,n);this.$$l_u.set(n,r)}super.addEventListener(t,n,s)}removeEventListener(t,n,s){if(super.removeEventListener(t,n,s),this.$$c){const r=this.$$l_u.get(n);r&&(r(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(i){return()=>{let o;return{c:function(){o=g("slot"),i!=="default"&&$(o,"name",i)},m:function(c,a){H(c,o,a)},d:function(c){c&&j(o)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},s=Z(this);for(const i of this.$$s)i in s&&(n[i]=[t(i)]);for(const i of this.attributes){const o=this.$$g_p(i.name);o in this.$$d||(this.$$d[o]=E(o,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const r=()=>{this.$$r=!0;for(const i in this.$$p_d)if(this.$$d[i]=this.$$c.$$.ctx[this.$$c.$$.props[i]],this.$$p_d[i].reflect){const o=E(i,this.$$d[i],this.$$p_d,"toAttribute");o==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,o)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(const i in this.$$l)for(const o of this.$$l[i]){const u=this.$$c.$on(i,o);this.$$l_u.set(o,u)}this.$$l={}}}attributeChangedCallback(t,n,s){var r;this.$$r||(t=this.$$g_p(t),this.$$d[t]=E(t,s,this.$$p_d,"toProp"),(r=this.$$c)==null||r.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function E(e,t,n,s){var i;const r=(i=n[e])==null?void 0:i.type;if(t=r==="Boolean"&&typeof t!="boolean"?t!=null:t,!s||!n[e])return t;if(s==="toAttribute")switch(r){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(r){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function dt(e,t,n,s,r,i){let o=class extends T{constructor(){super(e,n,r),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(u=>(t[u].attribute||u).toLowerCase())}};return Object.keys(t).forEach(u=>{Object.defineProperty(o.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(l){var c;l=E(u,l,t),this.$$d[u]=l,(c=this.$$c)==null||c.$set({[u]:l})}})}),s.forEach(u=>{Object.defineProperty(o.prototype,u,{get(){var l;return(l=this.$$c)==null?void 0:l[u]}})}),e.element=o,o}class $t{constructor(){f(this,"$$");f(this,"$$set")}$destroy(){ut(this,1),this.$destroy=k}$on(t,n){if(!D(n))return k;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!U(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ht="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ht);function _t(e){Y(e,"svelte-s82n7r",'.garnet.svelte-s82n7r{display:flex;align-items:center;font-family:Arial, Helvetica, sans-serif}input[type="checkbox"].svelte-s82n7r{-webkit-appearance:none;appearance:none;margin:0;font:inherit;color:currentColor;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;transform:translateY(-1px);display:grid;place-content:center}input[type="checkbox"].svelte-s82n7r::before{content:"";width:10px;height:10px;clip-path:polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);transform:scale(0);transform-origin:bottom left;transition:120ms transform ease-in-out;box-shadow:inset 16px 16px #733635}input[type="checkbox"].svelte-s82n7r:checked::before{transform:scale(1)}input[type="checkbox"].svelte-s82n7r:disabled{color:#959495;cursor:not-allowed;opacity:0.4}label.svelte-s82n7r{margin-left:5px;user-select:none}')}function bt(e){let t,n,s,r,i,o,u;return{c(){t=g("div"),n=g("input"),s=K(),r=g("label"),i=I(e[1]),$(n,"type","checkbox"),$(n,"id",e[3]),n.disabled=e[2],$(n,"class","svelte-s82n7r"),$(r,"for","name"),$(r,"class","svelte-s82n7r"),$(t,"class","garnet svelte-s82n7r")},m(l,c){H(l,t,c),p(t,n),n.checked=e[0],p(t,s),p(t,r),p(r,i),o||(u=[S(n,"change",e[5]),S(n,"change",e[4])],o=!0)},p(l,[c]){c&8&&$(n,"id",l[3]),c&4&&(n.disabled=l[2]),c&1&&(n.checked=l[0]),c&2&&W(i,l[1])},i:k,o:k,d(l){l&&j(t),o=!1,w(u)}}}function mt(e,t,n){let{checked:s=!1}=t,{label:r="Checkbox"}=t,{disabled:i=!1}=t,{id:o="name"}=t;const u=et();function l(a){const{checked:d}=a.target;u("change",{checked:d})}function c(){s=this.checked,n(0,s)}return e.$$set=a=>{"checked"in a&&n(0,s=a.checked),"label"in a&&n(1,r=a.label),"disabled"in a&&n(2,i=a.disabled),"id"in a&&n(3,o=a.id)},[s,r,i,o,l,c]}class J extends $t{constructor(t){super(),ft(this,t,mt,bt,F,{checked:0,label:1,disabled:2,id:3},_t)}get checked(){return this.$$.ctx[0]}set checked(t){this.$$set({checked:t}),b()}get label(){return this.$$.ctx[1]}set label(t){this.$$set({label:t}),b()}get disabled(){return this.$$.ctx[2]}set disabled(t){this.$$set({disabled:t}),b()}get id(){return this.$$.ctx[3]}set id(t){this.$$set({id:t}),b()}}customElements.define("garnet-checkbox",dt(J,{checked:{type:"Boolean"},label:{},disabled:{type:"Boolean"},id:{}},[],[],!0));module.exports=J;
