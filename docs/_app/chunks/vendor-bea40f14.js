function _(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function M(){return Object.create(null)}function b(t){t.forEach(z)}function B(t){return typeof t=="function"}function I(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ut(t,n,e){t.$$.on_destroy.push(J(n,e))}function st(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],o=Math.max(n.dirty.length,c.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function ft(t,n,e,i,c,l){if(c){const o=L(n,e,i,l);t.p(o,c)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){return t&&B(t.destroy)?t.destroy:_}let E=!1;function K(){E=!0}function Q(){E=!1}function R(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:R(1,c,g=>n[e[g]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const l=[],o=[];let u=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);u>=r;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<o.length;r++){for(;s<l.length&&o[r].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[r],a)}}function U(t,n){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){E&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function mt(){return A(" ")}function pt(){return A("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,c=!1){Z(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,n,e,i){return O(t,c=>c.nodeName===n,c=>{const l=[];for(let o=0;o<c.attributes.length;o++){const u=c.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>c.removeAttribute(o))},()=>i(n))}function gt(t,n,e){return tt(t,n,e,X)}function nt(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function xt(t){return nt(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function wt(t,n){t.value=n==null?"":n}function Et(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let y;function p(t){y=t}function k(){if(!y)throw new Error("Function called outside component initialization");return y}function kt(t){k().$$.on_mount.push(t)}function jt(t){k().$$.after_update.push(t)}function Nt(t){k().$$.on_destroy.push(t)}function St(t,n){k().$$.context.set(t,n)}const m=[],T=[],$=[],q=[],P=Promise.resolve();let N=!1;function D(){N||(N=!0,P.then(F))}function At(){return D(),P}function S(t){$.push(t)}const j=new Set;let x=0;function F(){const t=y;do{for(;x<m.length;){const n=m[x];x++,p(n),et(n.$$)}for(p(null),m.length=0,x=0;T.length;)T.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];j.has(e)||(j.add(e),e())}$.length=0}while(m.length);for(;q.length;)q.pop()();N=!1,j.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const w=new Set;let d;function Ct(){d={r:0,c:[],p:d}}function vt(){d.r||b(d.c),d=d.p}function it(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Mt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Tt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const r in o)r in u||(i[r]=1);for(const r in u)c[r]||(e[r]=u[r],c[r]=1);t[l]=u}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function qt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:o,after_update:u}=t.$$;c&&c.m(n,e),i||S(()=>{const r=l.map(z).filter(B);o?o.push(...r):b(r),t.$$.on_mount=[]}),u.forEach(S)}function ct(t,n){const e=t.$$;e.fragment!==null&&(b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(m.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Lt(t,n,e,i,c,l,o,u=[-1]){const r=y;p(t);const s=t.$$={fragment:null,ctx:null,props:l,update:_,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...C)=>{const v=C.length?C[0]:g;return s.ctx&&c(s.ctx[f],s.ctx[f]=v)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](v),a&&ot(t,f)),g}):[],s.update(),a=!0,b(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){K();const f=Y(n.target);s.fragment&&s.fragment.l(f),f.forEach(V)}else s.fragment&&s.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),Q(),F()}p(r)}class Ot{$destroy(){ct(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function Pt(t,n=_){let e;const i=new Set;function c(u){if(I(t,u)&&(t=u,e)){const r=!h.length;for(const s of i)s[1](),h.push(s,t);if(r){for(let s=0;s<h.length;s+=2)h[s][0](h[s+1]);h.length=0}}}function l(u){c(u(t))}function o(u,r=_){const s=[u,r];return i.add(s),i.size===1&&(e=n(c)||_),u(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:o}}export{qt as A,ct as B,H as C,Pt as D,At as E,st as F,ft as G,at as H,lt as I,U as J,_ as K,Nt as L,ht as M,wt as N,yt as O,dt as P,b as Q,ut as R,Ot as S,T,Y as a,bt as b,gt as c,V as d,X as e,Et as f,_t as g,nt as h,Lt as i,$t as j,mt as k,pt as l,xt as m,Ct as n,Mt as o,vt as p,it as q,St as r,I as s,A as t,jt as u,kt as v,zt as w,Bt as x,rt as y,Tt as z};
