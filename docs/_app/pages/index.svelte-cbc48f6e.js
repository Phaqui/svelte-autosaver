import{L as la,D as nn,S as Zs,i as xs,s as ea,e as a,t as r,k as _,c as l,a as o,h as i,d as n,m as y,b as d,g as w,J as e,j as De,K as Qs,M as ra,w as Kt,x as Qt,N as $,y as Gt,O as ke,P as Se,q as Xt,o as Yt,B as Zt,Q as ia,R as wt,T as xt}from"../chunks/vendor-bea40f14.js";const oa={autosave:(s,c)=>({destroy:()=>{}}),save_manually:()=>{},dirty:nn(!1),last_saved:nn(new Date),set_dirty:s=>{}};function en({save_fn:s,save_after:c,save_every:f}){if(!va())return oa;let u=null,v=null,b=nn(!1),m=nn(new Date),h=new Map,P=new Set,S=new Set;c||(c=6*1e3),f||(f=30*1e3);function I(){for(let[k,D]of h.entries())D();window.clearTimeout(u),window.clearTimeout(v)}la(I);function J(k,D){let g,U;if(g=k.getAttribute("name"),h.has(k))throw new Error("autosave: action applied to already watched dom element");if(typeof D!="undefined")if(ua(D)){if("name"in D)if(typeof D.name=="string"&&D.name.length>0)g=D.name;else throw new TypeError("params.name must be non-empty string")}else throw new TypeError("params must be an object");if(g){if(S.has(g))throw new Error(`autosaver: duplicate name ("${g}")`);S.add(g),U=()=>T(g)}else U=()=>T();h.set(k,B);function B(){h.delete(k),P.has(g)&&console.warn(`autosaver: field with name "${g}" was removed from the DOM while dirty`),S.delete(g),k.removeEventListener("input",U)}if(k instanceof HTMLInputElement||k instanceof HTMLTextAreaElement)k.addEventListener("input",U);else throw new Error("autosave: can only be used on input or textarea elements");return{destroy:B}}async function q(){console.debug("internal:_save()",P);let k;S.size>0?(console.assert(P.size>0,"_save() called with empty dirty_fields"),k=await s(P)):k=await s(),k===!0&&(P.clear(),m.set(new Date),b.set(!1))}async function j(){await q(),window.clearTimeout(v),window.clearTimeout(u),v=null,u=null}async function K(){u=null,await q()}async function W(){v&&(window.clearTimeout(v),v=null),u&&(window.clearTimeout(u),u=null),await q()}function T(k){k&&(console.assert(typeof k=="string","dirty_fields set added something that was not a string"),P.add(k)),b.set(!0),v&&window.clearTimeout(v),v=window.setTimeout(j,c),u||(u=window.setTimeout(K,f))}const z={subscribe:b.subscribe},L={subscribe:m.subscribe};return{autosave:J,save_manually:W,dirty:z,last_saved:L,set_dirty:T}}function ua(s){return!!s&&Object.getPrototypeOf(s)===Object.prototype}function va(){return typeof window!="undefined"&&typeof window.document!="undefined"}function Gs(s,c,f){const u=s.slice();return u[2]=c[f].value,u[3]=c[f].num,u}function Xs(s){let c,f=s[3]+"",u;return{c(){c=a("span"),u=r(f),this.h()},l(v){c=l(v,"SPAN",{class:!0});var b=o(c);u=i(b,f),b.forEach(n),this.h()},h(){d(c,"class","num svelte-1b7l1jn")},m(v,b){w(v,c,b),e(c,u)},p(v,b){b&1&&f!==(f=v[3]+"")&&De(u,f)},d(v){v&&n(c)}}}function Ys(s){let c,f,u=s[2]+"",v,b,m,h=s[3]>1&&Xs(s);return{c(){c=a("article"),f=a("span"),v=r(u),b=_(),h&&h.c(),m=_(),this.h()},l(P){c=l(P,"ARTICLE",{class:!0});var S=o(c);f=l(S,"SPAN",{class:!0});var I=o(f);v=i(I,u),I.forEach(n),b=y(S),h&&h.l(S),m=y(S),S.forEach(n),this.h()},h(){d(f,"class","value svelte-1b7l1jn"),d(c,"class","svelte-1b7l1jn")},m(P,S){w(P,c,S),e(c,f),e(f,v),e(c,b),h&&h.m(c,null),e(c,m)},p(P,S){S&1&&u!==(u=P[2]+"")&&De(v,u),P[3]>1?h?h.p(P,S):(h=Xs(P),h.c(),h.m(c,m)):h&&(h.d(1),h=null)},d(P){P&&n(c),h&&h.d()}}}function ca(s){let c,f=s[0],u=[];for(let v=0;v<f.length;v+=1)u[v]=Ys(Gs(s,f,v));return{c(){c=a("main");for(let v=0;v<u.length;v+=1)u[v].c();this.h()},l(v){c=l(v,"MAIN",{class:!0});var b=o(c);for(let m=0;m<u.length;m+=1)u[m].l(b);b.forEach(n),this.h()},h(){d(c,"class","svelte-1b7l1jn")},m(v,b){w(v,c,b);for(let m=0;m<u.length;m+=1)u[m].m(c,null)},p(v,[b]){if(b&1){f=v[0];let m;for(m=0;m<f.length;m+=1){const h=Gs(v,f,m);u[m]?u[m].p(h,b):(u[m]=Ys(h),u[m].c(),u[m].m(c,null))}for(;m<u.length;m+=1)u[m].d(1);u.length=f.length}},i:Qs,o:Qs,d(v){v&&n(c),ra(u,v)}}}function fa(s){if(typeof s=="undefined")return"<undefined>";if(typeof s=="string")return s;if(s.constructor===Set)return pa(s)}function pa(s){return typeof s=="undefined"?"<undefined>":s.size===0?"<empty Set>":`<Set [ ${[...s.keys()].map(c=>`'${c}'`).join(", ")} ]>`}function da(s,c,f){let u=[];function v(...b){const m=u[u.length-1],h=b.map(fa).join(" ");m?m.type==="string"&&m.value===h?m.num++:u.push({type:"string",value:h,num:1}):u.push({type:"string",value:h,num:1}),f(0,u)}return[u,v]}class tn extends Zs{constructor(c){super();xs(this,c,da,ca,ea,{log:1})}get log(){return this.$$.ctx[1]}}function ma(s){let c,f,u,v,b,m,h,P,S,I,J,q,j,K,W,T,z,L,k,D,g,U,B,it,Q,ot,ue,Ie,ut,ve,Ne,Te,ce,vt,ct,fe,ft,pt,pe,dt,mt,de,ht,_t,yt,C,M,E,sn,gt,an,Ae,ln,Et,rn,me,on,$e,G,bt,Ve,un,kt,qe,vn,Pt,X,je,Pe,cn,Re,fn,pn,dn,he,Y,He,mn,St,hn,_e,_n,ye,yn,We,Z,Dt,Le,wn,It,R,gn,En,bn,kn,Pn,Sn,Dn,Nt,x,Ue,A,In,Be,Nn,Tn,Me,An,$n,Oe,Vn,qn,ze,jn,Rn,Ce,Hn,Wn,Ln,we,ee,Fe,Un,Tt,Bn,te,Mn,ne,On,Je,se,At,Ke,zn,$t,Qe,Cn,Vt,ae,Ge,V,Fn,Xe,Jn,Kn,Ye,Qn,Gn,Ze,Xn,xe,Yn,et,Zn,xn,es,ge,O,tt,ts,qt,ns,le,ss,re,as,nt,ls,rs,st,ie,oe,is,ps,ta={};G=new tn({props:ta}),s[27](G);let na={};Z=new tn({props:na}),s[30](Z);let sa={};se=new tn({props:sa}),s[33](se);let aa={};return ie=new tn({props:aa}),s[36](ie),{c(){c=a("h1"),f=r("Welcome to @phaqui/autosaver"),u=_(),v=a("p"),b=r(`Watch your text inputs and textareas, and trigger a function on inactivty,
    or after a period of longer, continous activity.`),m=_(),h=a("h2"),P=r("Installing"),S=_(),I=a("div"),J=r("npm i -D @phaqui/autosaver"),q=_(),j=a("h2"),K=r("Basic use"),W=_(),T=a("p"),z=r(`Instantiate the autosaver, specifying the function to call as the 'save_fn'.
    Also demonstrated here are setting custom times in milliseconds for when to
    consider inactivity (save_after) and non-stop-activity (save_every). These
    default to six 6 and 30 seconds, respectively.`),L=_(),k=a("div"),D=a("div"),g=a("pre"),U=r(`<script lang="ts">
    import autosaver from "@phaqui/autosaver";

    let text = "";

    `),B=a("span"),it=r(`const autosaver_opts = {
        save_fn: `),Q=a("span"),ot=r("save"),ue=a("span"),Ie=r(`,
        save_after: 1*1000,
        save_every: 3*1000,
    }`),ut=r(`
    `),ve=a("span"),Ne=r("const {\xA0autosave, dirty, last_saved }\xA0= autosaver(autosaver_opts);"),Te=r(`

    `),ce=a("span"),vt=r(`async function save() {
        console.log("saving now");

        // Notice: return true to indicate that the save was successful,
        // so the $dirty and $last_saved stores reflects that
        return true;
    }`),ct=r(`
<\/script>

<p>dirty? `),fe=a("span"),ft=r("{$dirty}"),pt=r(`</p>
<p>last saved: `),pe=a("span"),dt=r("{$last_saved}"),mt=r(`</p>
<input bind:value={text} `),de=a("span"),ht=r("use:autosave"),_t=r(`>
        `),yt=_(),C=a("div"),M=a("div"),E=a("p"),sn=r("Dirty? "),gt=r(s[11]),an=_(),Ae=a("p"),ln=r("Last saved: "),Et=r(s[12]),rn=_(),me=a("input"),on=_(),$e=a("div"),Kt(G.$$.fragment),bt=_(),Ve=a("h2"),un=r("Watch multiple elements at the same time"),kt=_(),qe=a("p"),vn=r(`The action can be applied to multiple elements, and will track them all,
    calling the save method when any of them are changed.`),Pt=_(),X=a("div"),je=a("div"),Pe=a("pre"),cn=r(`<script lang="ts">
    import autosaver from "@phaqui/autosaver";

    let firstname = "", lastname = "";

    const autosaver_opts = {
        save_fn: save,
        save_after: 1*1000,
        save_every: 3*1000,
    }
    const {\xA0autosave, dirty }\xA0= autosaver(autosaver);

    async function save() {
        console.log("saving now");
        return true;
    }
<\/script>

<p>dirty? {$dirty}</p>
<p>last saved: {$last_saved}</p>
<input bind:value={firstname} use:autosave>
`),Re=a("span"),fn=r("<input bind:value={lastname} use:autosave>"),pn=r(`
        `),dn=_(),he=a("div"),Y=a("div"),He=a("p"),mn=r("Dirty? "),St=r(s[13]),hn=_(),_e=a("input"),_n=_(),ye=a("input"),yn=_(),We=a("div"),Kt(Z.$$.fragment),Dt=_(),Le=a("h2"),wn=r("Which fields changed?"),It=_(),R=a("p"),gn=r(`If the element has no 'name' attribute, and no custom name is set in the
    action params, the autosaver will not track which elements are dirty, and
    just call the save_fn without any arguments.
    `),En=a("br"),bn=_(),kn=a("br"),Pn=r(`
    However, if the element has a name attribute (or a "name" is given in the
    params to the action, then save_fn will be called with a set containing
    the names of the elements that was changed.
    `),Sn=a("br"),Dn=r(`Note: Passing the name in the action param will take presence over the
    name set as an attribute, if both are found.`),Nt=_(),x=a("div"),Ue=a("div"),A=a("pre"),In=r(`<script lang="ts">
    import autosaver from "@phaqui/autosaver";

    let firstname = "", lastname = "";

    const autosaver_opts = {
        save_fn: save,
        save_after: 1*1000,
        save_every: 3*1000,
    }
    const {\xA0autosave, dirty }\xA0= autosaver(autosaver);

    async function save(`),Be=a("span"),Nn=r("dirty_fields: Set<string>"),Tn=r(`) {
        console.log("saving now, `),Me=a("span"),An=r('dirty fields:", dirty_fields'),$n=r(`);
        return true;
    }
<\/script>

<p>dirty? {$dirty}</p>
<input `),Oe=a("span"),Vn=r('name="firstname"'),qn=r(` bind:value={firstname} use:autosave>
<input `),ze=a("span"),jn=r('name="lastname"'),Rn=r(" bind:value={lastname} use:autosave"),Ce=a("span"),Hn=r('={{ name: "overridden-name" }}'),Wn=r(`>
        `),Ln=_(),we=a("div"),ee=a("div"),Fe=a("p"),Un=r("Dirty? "),Tt=r(s[14]),Bn=_(),te=a("input"),Mn=_(),ne=a("input"),On=_(),Je=a("div"),Kt(se.$$.fragment),At=_(),Ke=a("h2"),zn=r("Save manually"),$t=_(),Qe=a("p"),Cn=r(`Whenever you need to issue a save manually, use the provided save_manually
    function instead of calling your save_fn directly, so that the dirty- and
    last_saved stores are updated.`),Vt=_(),ae=a("div"),Ge=a("div"),V=a("pre"),Fn=r(`
<script lang="ts">
    import autosaver from "@phaqui/autosaver";

    let firstname = "", lastname = "";

    `),Xe=a("span"),Jn=r(`// Notice: For this example, using default times
    // (saves after 6s of inactivity, save every 30s of activity)`),Kn=r(`
    const autosaver_opts = { save_fn: save };
    const { autosave, dirty, `),Ye=a("span"),Qn=r("save_manually"),Gn=r(` } = autosaver(autosaver);

    async function save(dirty_fields: Set<string>) {
        console.log("saving now, dirty fields:", dirty_fields);
        return true;
    }
<\/script>

<p>dirty? {$dirty}</p>
<input name="firstname" bind:value={firstname} use:autosave>
<input name="lastname" bind:value={lastname} use:autosave={{ name: "overridden-name" }}>
`),Ze=a("span"),Xn=r("<button on:click={"),xe=a("span"),Yn=r("save_manually"),et=a("span"),Zn=r("}>save now</button>"),xn=r(`
        `),es=_(),ge=a("div"),O=a("div"),tt=a("p"),ts=r("Dirty? "),qt=r(s[15]),ns=_(),le=a("input"),ss=_(),re=a("input"),as=_(),nt=a("button"),ls=r("Save now"),rs=_(),st=a("div"),Kt(ie.$$.fragment),this.h()},l(t){c=l(t,"H1",{});var p=o(c);f=i(p,"Welcome to @phaqui/autosaver"),p.forEach(n),u=y(t),v=l(t,"P",{});var jt=o(v);b=i(jt,`Watch your text inputs and textareas, and trigger a function on inactivty,
    or after a period of longer, continous activity.`),jt.forEach(n),m=y(t),h=l(t,"H2",{});var Rt=o(h);P=i(Rt,"Installing"),Rt.forEach(n),S=y(t),I=l(t,"DIV",{class:!0});var Ht=o(I);J=i(Ht,"npm i -D @phaqui/autosaver"),Ht.forEach(n),q=y(t),j=l(t,"H2",{});var Wt=o(j);K=i(Wt,"Basic use"),Wt.forEach(n),W=y(t),T=l(t,"P",{});var ds=o(T);z=i(ds,`Instantiate the autosaver, specifying the function to call as the 'save_fn'.
    Also demonstrated here are setting custom times in milliseconds for when to
    consider inactivity (save_after) and non-stop-activity (save_every). These
    default to six 6 and 30 seconds, respectively.`),ds.forEach(n),L=y(t),k=l(t,"DIV",{class:!0});var Lt=o(k);D=l(Lt,"DIV",{class:!0});var ms=o(D);g=l(ms,"PRE",{});var N=o(g);U=i(N,`<script lang="ts">
    import autosaver from "@phaqui/autosaver";

    let text = "";

    `),B=l(N,"SPAN",{class:!0});var hs=o(B);it=i(hs,`const autosaver_opts = {
        save_fn: `),hs.forEach(n),Q=l(N,"SPAN",{class:!0});var _s=o(Q);ot=i(_s,"save"),_s.forEach(n),ue=l(N,"SPAN",{class:!0});var ys=o(ue);Ie=i(ys,`,
        save_after: 1*1000,
        save_every: 3*1000,
    }`),ys.forEach(n),ut=i(N,`
    `),ve=l(N,"SPAN",{class:!0});var ws=o(ve);Ne=i(ws,"const {\xA0autosave, dirty, last_saved }\xA0= autosaver(autosaver_opts);"),ws.forEach(n),Te=i(N,`

    `),ce=l(N,"SPAN",{class:!0});var gs=o(ce);vt=i(gs,`async function save() {
        console.log("saving now");

        // Notice: return true to indicate that the save was successful,
        // so the $dirty and $last_saved stores reflects that
        return true;
    }`),gs.forEach(n),ct=i(N,`
<\/script>

<p>dirty? `),fe=l(N,"SPAN",{class:!0});var Es=o(fe);ft=i(Es,"{$dirty}"),Es.forEach(n),pt=i(N,`</p>
<p>last saved: `),pe=l(N,"SPAN",{class:!0});var bs=o(pe);dt=i(bs,"{$last_saved}"),bs.forEach(n),mt=i(N,`</p>
<input bind:value={text} `),de=l(N,"SPAN",{class:!0});var ks=o(de);ht=i(ks,"use:autosave"),ks.forEach(n),_t=i(N,`>
        `),N.forEach(n),ms.forEach(n),yt=y(Lt),C=l(Lt,"DIV",{class:!0});var Ut=o(C);M=l(Ut,"DIV",{});var at=o(M);E=l(at,"P",{});var os=o(E);sn=i(os,"Dirty? "),gt=i(os,s[11]),os.forEach(n),an=y(at),Ae=l(at,"P",{});var us=o(Ae);ln=i(us,"Last saved: "),Et=i(us,s[12]),us.forEach(n),rn=y(at),me=l(at,"INPUT",{}),at.forEach(n),on=y(Ut),$e=l(Ut,"DIV",{class:!0});var Ps=o($e);Qt(G.$$.fragment,Ps),Ps.forEach(n),Ut.forEach(n),Lt.forEach(n),bt=y(t),Ve=l(t,"H2",{});var Ss=o(Ve);un=i(Ss,"Watch multiple elements at the same time"),Ss.forEach(n),kt=y(t),qe=l(t,"P",{});var Ds=o(qe);vn=i(Ds,`The action can be applied to multiple elements, and will track them all,
    calling the save method when any of them are changed.`),Ds.forEach(n),Pt=y(t),X=l(t,"DIV",{class:!0});var Bt=o(X);je=l(Bt,"DIV",{class:!0});var Is=o(je);Pe=l(Is,"PRE",{});var Mt=o(Pe);cn=i(Mt,`<script lang="ts">
    import autosaver from "@phaqui/autosaver";

    let firstname = "", lastname = "";

    const autosaver_opts = {
        save_fn: save,
        save_after: 1*1000,
        save_every: 3*1000,
    }
    const {\xA0autosave, dirty }\xA0= autosaver(autosaver);

    async function save() {
        console.log("saving now");
        return true;
    }
<\/script>

<p>dirty? {$dirty}</p>
<p>last saved: {$last_saved}</p>
<input bind:value={firstname} use:autosave>
`),Re=l(Mt,"SPAN",{class:!0});var Ns=o(Re);fn=i(Ns,"<input bind:value={lastname} use:autosave>"),Ns.forEach(n),pn=i(Mt,`
        `),Mt.forEach(n),Is.forEach(n),dn=y(Bt),he=l(Bt,"DIV",{class:!0});var Ot=o(he);Y=l(Ot,"DIV",{});var lt=o(Y);He=l(lt,"P",{});var vs=o(He);mn=i(vs,"Dirty? "),St=i(vs,s[13]),vs.forEach(n),hn=y(lt),_e=l(lt,"INPUT",{}),_n=y(lt),ye=l(lt,"INPUT",{}),lt.forEach(n),yn=y(Ot),We=l(Ot,"DIV",{class:!0});var Ts=o(We);Qt(Z.$$.fragment,Ts),Ts.forEach(n),Ot.forEach(n),Bt.forEach(n),Dt=y(t),Le=l(t,"H2",{});var As=o(Le);wn=i(As,"Which fields changed?"),As.forEach(n),It=y(t),R=l(t,"P",{});var Ee=o(R);gn=i(Ee,`If the element has no 'name' attribute, and no custom name is set in the
    action params, the autosaver will not track which elements are dirty, and
    just call the save_fn without any arguments.
    `),En=l(Ee,"BR",{}),bn=y(Ee),kn=l(Ee,"BR",{}),Pn=i(Ee,`
    However, if the element has a name attribute (or a "name" is given in the
    params to the action, then save_fn will be called with a set containing
    the names of the elements that was changed.
    `),Sn=l(Ee,"BR",{}),Dn=i(Ee,`Note: Passing the name in the action param will take presence over the
    name set as an attribute, if both are found.`),Ee.forEach(n),Nt=y(t),x=l(t,"DIV",{class:!0});var zt=o(x);Ue=l(zt,"DIV",{class:!0});var $s=o(Ue);A=l($s,"PRE",{});var H=o(A);In=i(H,`<script lang="ts">
    import autosaver from "@phaqui/autosaver";

    let firstname = "", lastname = "";

    const autosaver_opts = {
        save_fn: save,
        save_after: 1*1000,
        save_every: 3*1000,
    }
    const {\xA0autosave, dirty }\xA0= autosaver(autosaver);

    async function save(`),Be=l(H,"SPAN",{class:!0});var Vs=o(Be);Nn=i(Vs,"dirty_fields: Set<string>"),Vs.forEach(n),Tn=i(H,`) {
        console.log("saving now, `),Me=l(H,"SPAN",{class:!0});var qs=o(Me);An=i(qs,'dirty fields:", dirty_fields'),qs.forEach(n),$n=i(H,`);
        return true;
    }
<\/script>

<p>dirty? {$dirty}</p>
<input `),Oe=l(H,"SPAN",{class:!0});var js=o(Oe);Vn=i(js,'name="firstname"'),js.forEach(n),qn=i(H,` bind:value={firstname} use:autosave>
<input `),ze=l(H,"SPAN",{class:!0});var Rs=o(ze);jn=i(Rs,'name="lastname"'),Rs.forEach(n),Rn=i(H," bind:value={lastname} use:autosave"),Ce=l(H,"SPAN",{class:!0});var Hs=o(Ce);Hn=i(Hs,'={{ name: "overridden-name" }}'),Hs.forEach(n),Wn=i(H,`>
        `),H.forEach(n),$s.forEach(n),Ln=y(zt),we=l(zt,"DIV",{class:!0});var Ct=o(we);ee=l(Ct,"DIV",{});var rt=o(ee);Fe=l(rt,"P",{});var cs=o(Fe);Un=i(cs,"Dirty? "),Tt=i(cs,s[14]),cs.forEach(n),Bn=y(rt),te=l(rt,"INPUT",{name:!0}),Mn=y(rt),ne=l(rt,"INPUT",{name:!0}),rt.forEach(n),On=y(Ct),Je=l(Ct,"DIV",{class:!0});var Ws=o(Je);Qt(se.$$.fragment,Ws),Ws.forEach(n),Ct.forEach(n),zt.forEach(n),At=y(t),Ke=l(t,"H2",{});var Ls=o(Ke);zn=i(Ls,"Save manually"),Ls.forEach(n),$t=y(t),Qe=l(t,"P",{});var Us=o(Qe);Cn=i(Us,`Whenever you need to issue a save manually, use the provided save_manually
    function instead of calling your save_fn directly, so that the dirty- and
    last_saved stores are updated.`),Us.forEach(n),Vt=y(t),ae=l(t,"DIV",{class:!0});var Ft=o(ae);Ge=l(Ft,"DIV",{class:!0});var Bs=o(Ge);V=l(Bs,"PRE",{});var F=o(V);Fn=i(F,`
<script lang="ts">
    import autosaver from "@phaqui/autosaver";

    let firstname = "", lastname = "";

    `),Xe=l(F,"SPAN",{class:!0});var Ms=o(Xe);Jn=i(Ms,`// Notice: For this example, using default times
    // (saves after 6s of inactivity, save every 30s of activity)`),Ms.forEach(n),Kn=i(F,`
    const autosaver_opts = { save_fn: save };
    const { autosave, dirty, `),Ye=l(F,"SPAN",{class:!0});var Os=o(Ye);Qn=i(Os,"save_manually"),Os.forEach(n),Gn=i(F,` } = autosaver(autosaver);

    async function save(dirty_fields: Set<string>) {
        console.log("saving now, dirty fields:", dirty_fields);
        return true;
    }
<\/script>

<p>dirty? {$dirty}</p>
<input name="firstname" bind:value={firstname} use:autosave>
<input name="lastname" bind:value={lastname} use:autosave={{ name: "overridden-name" }}>
`),Ze=l(F,"SPAN",{class:!0});var zs=o(Ze);Xn=i(zs,"<button on:click={"),zs.forEach(n),xe=l(F,"SPAN",{class:!0});var Cs=o(xe);Yn=i(Cs,"save_manually"),Cs.forEach(n),et=l(F,"SPAN",{class:!0});var Fs=o(et);Zn=i(Fs,"}>save now</button>"),Fs.forEach(n),xn=i(F,`
        `),F.forEach(n),Bs.forEach(n),es=y(Ft),ge=l(Ft,"DIV",{class:!0});var Jt=o(ge);O=l(Jt,"DIV",{});var be=o(O);tt=l(be,"P",{});var fs=o(tt);ts=i(fs,"Dirty? "),qt=i(fs,s[15]),fs.forEach(n),ns=y(be),le=l(be,"INPUT",{name:!0}),ss=y(be),re=l(be,"INPUT",{name:!0}),as=y(be),nt=l(be,"BUTTON",{});var Js=o(nt);ls=i(Js,"Save now"),Js.forEach(n),be.forEach(n),rs=y(Jt),st=l(Jt,"DIV",{class:!0});var Ks=o(st);Qt(ie.$$.fragment,Ks),Ks.forEach(n),Jt.forEach(n),Ft.forEach(n),this.h()},h(){d(I,"class","terminal svelte-1yhm4kn"),d(B,"class","green svelte-1yhm4kn"),d(Q,"class","orange svelte-1yhm4kn"),d(ue,"class","green svelte-1yhm4kn"),d(ve,"class","green svelte-1yhm4kn"),d(ce,"class","orange svelte-1yhm4kn"),d(fe,"class","green svelte-1yhm4kn"),d(pe,"class","green svelte-1yhm4kn"),d(de,"class","green svelte-1yhm4kn"),d(D,"class","code svelte-1yhm4kn"),d($e,"class","console svelte-1yhm4kn"),d(C,"class","output svelte-1yhm4kn"),d(k,"class","example svelte-1yhm4kn"),d(Re,"class","green svelte-1yhm4kn"),d(je,"class","code svelte-1yhm4kn"),d(We,"class","console svelte-1yhm4kn"),d(he,"class","output svelte-1yhm4kn"),d(X,"class","example svelte-1yhm4kn"),d(Be,"class","green svelte-1yhm4kn"),d(Me,"class","green svelte-1yhm4kn"),d(Oe,"class","green svelte-1yhm4kn"),d(ze,"class","green svelte-1yhm4kn"),d(Ce,"class","green svelte-1yhm4kn"),d(Ue,"class","code svelte-1yhm4kn"),d(te,"name","firstname"),d(ne,"name","lastname"),d(Je,"class","console svelte-1yhm4kn"),d(we,"class","output svelte-1yhm4kn"),d(x,"class","example svelte-1yhm4kn"),d(Xe,"class","light-red svelte-1yhm4kn"),d(Ye,"class","orange svelte-1yhm4kn"),d(Ze,"class","green svelte-1yhm4kn"),d(xe,"class","orange svelte-1yhm4kn"),d(et,"class","green svelte-1yhm4kn"),d(Ge,"class","code svelte-1yhm4kn"),d(le,"name","firstname"),d(re,"name","lastname"),d(st,"class","console svelte-1yhm4kn"),d(ge,"class","output svelte-1yhm4kn"),d(ae,"class","example svelte-1yhm4kn")},m(t,p){w(t,c,p),e(c,f),w(t,u,p),w(t,v,p),e(v,b),w(t,m,p),w(t,h,p),e(h,P),w(t,S,p),w(t,I,p),e(I,J),w(t,q,p),w(t,j,p),e(j,K),w(t,W,p),w(t,T,p),e(T,z),w(t,L,p),w(t,k,p),e(k,D),e(D,g),e(g,U),e(g,B),e(B,it),e(g,Q),e(Q,ot),e(g,ue),e(ue,Ie),e(g,ut),e(g,ve),e(ve,Ne),e(g,Te),e(g,ce),e(ce,vt),e(g,ct),e(g,fe),e(fe,ft),e(g,pt),e(g,pe),e(pe,dt),e(g,mt),e(g,de),e(de,ht),e(g,_t),e(k,yt),e(k,C),e(C,M),e(M,E),e(E,sn),e(E,gt),e(M,an),e(M,Ae),e(Ae,ln),e(Ae,Et),e(M,rn),e(M,me),$(me,s[6]),e(C,on),e(C,$e),Gt(G,$e,null),w(t,bt,p),w(t,Ve,p),e(Ve,un),w(t,kt,p),w(t,qe,p),e(qe,vn),w(t,Pt,p),w(t,X,p),e(X,je),e(je,Pe),e(Pe,cn),e(Pe,Re),e(Re,fn),e(Pe,pn),e(X,dn),e(X,he),e(he,Y),e(Y,He),e(He,mn),e(He,St),e(Y,hn),e(Y,_e),$(_e,s[0]),e(Y,_n),e(Y,ye),$(ye,s[1]),e(he,yn),e(he,We),Gt(Z,We,null),w(t,Dt,p),w(t,Le,p),e(Le,wn),w(t,It,p),w(t,R,p),e(R,gn),e(R,En),e(R,bn),e(R,kn),e(R,Pn),e(R,Sn),e(R,Dn),w(t,Nt,p),w(t,x,p),e(x,Ue),e(Ue,A),e(A,In),e(A,Be),e(Be,Nn),e(A,Tn),e(A,Me),e(Me,An),e(A,$n),e(A,Oe),e(Oe,Vn),e(A,qn),e(A,ze),e(ze,jn),e(A,Rn),e(A,Ce),e(Ce,Hn),e(A,Wn),e(x,Ln),e(x,we),e(we,ee),e(ee,Fe),e(Fe,Un),e(Fe,Tt),e(ee,Bn),e(ee,te),$(te,s[2]),e(ee,Mn),e(ee,ne),$(ne,s[3]),e(we,On),e(we,Je),Gt(se,Je,null),w(t,At,p),w(t,Ke,p),e(Ke,zn),w(t,$t,p),w(t,Qe,p),e(Qe,Cn),w(t,Vt,p),w(t,ae,p),e(ae,Ge),e(Ge,V),e(V,Fn),e(V,Xe),e(Xe,Jn),e(V,Kn),e(V,Ye),e(Ye,Qn),e(V,Gn),e(V,Ze),e(Ze,Xn),e(V,xe),e(xe,Yn),e(V,et),e(et,Zn),e(V,xn),e(ae,es),e(ae,ge),e(ge,O),e(O,tt),e(tt,ts),e(tt,qt),e(O,ns),e(O,le),$(le,s[4]),e(O,ss),e(O,re),$(re,s[5]),e(O,as),e(O,nt),e(nt,ls),e(ge,rs),e(ge,st),Gt(ie,st,null),oe=!0,is||(ps=[ke(me,"input",s[26]),Se(s[16].call(null,me)),ke(_e,"input",s[28]),Se(s[19].call(null,_e)),ke(ye,"input",s[29]),Se(s[19].call(null,ye)),ke(te,"input",s[31]),Se(s[21].call(null,te)),ke(ne,"input",s[32]),Se(s[21].call(null,ne,{name:"overridden-name"})),ke(le,"input",s[34]),Se(s[23].call(null,le)),ke(re,"input",s[35]),Se(s[23].call(null,re,{name:"overriden-name"})),ke(nt,"click",s[25])],is=!0)},p(t,p){(!oe||p[0]&2048)&&De(gt,t[11]),(!oe||p[0]&4096)&&De(Et,t[12]),p[0]&64&&me.value!==t[6]&&$(me,t[6]);const jt={};G.$set(jt),(!oe||p[0]&8192)&&De(St,t[13]),p[0]&1&&_e.value!==t[0]&&$(_e,t[0]),p[0]&2&&ye.value!==t[1]&&$(ye,t[1]);const Rt={};Z.$set(Rt),(!oe||p[0]&16384)&&De(Tt,t[14]),p[0]&4&&te.value!==t[2]&&$(te,t[2]),p[0]&8&&ne.value!==t[3]&&$(ne,t[3]);const Ht={};se.$set(Ht),(!oe||p[0]&32768)&&De(qt,t[15]),p[0]&16&&le.value!==t[4]&&$(le,t[4]),p[0]&32&&re.value!==t[5]&&$(re,t[5]);const Wt={};ie.$set(Wt)},i(t){oe||(Xt(G.$$.fragment,t),Xt(Z.$$.fragment,t),Xt(se.$$.fragment,t),Xt(ie.$$.fragment,t),oe=!0)},o(t){Yt(G.$$.fragment,t),Yt(Z.$$.fragment,t),Yt(se.$$.fragment,t),Yt(ie.$$.fragment,t),oe=!1},d(t){t&&n(c),t&&n(u),t&&n(v),t&&n(m),t&&n(h),t&&n(S),t&&n(I),t&&n(q),t&&n(j),t&&n(W),t&&n(T),t&&n(L),t&&n(k),s[27](null),Zt(G),t&&n(bt),t&&n(Ve),t&&n(kt),t&&n(qe),t&&n(Pt),t&&n(X),s[30](null),Zt(Z),t&&n(Dt),t&&n(Le),t&&n(It),t&&n(R),t&&n(Nt),t&&n(x),s[33](null),Zt(se),t&&n(At),t&&n(Ke),t&&n($t),t&&n(Qe),t&&n(Vt),t&&n(ae),s[36](null),Zt(ie),is=!1,ia(ps)}}}const ya=!0;function ha(s,c,f){let u,v,b,m,h,P="",S="",I="",J="",q="",j="",K="",W,T,z,L;const k={save_fn:ce,save_after:1e3,save_every:3e3},{autosave:D,dirty:g,last_saved:U}=en(k);wt(s,g,E=>f(11,u=E)),wt(s,U,E=>f(12,v=E));const B={save_fn:vt,save_after:1*1e3,save_every:3*1e3},{autosave:it,dirty:Q}=en(B);wt(s,Q,E=>f(13,b=E));const ot={save_fn:ct,save_after:1*1e3,save_every:3*1e3},{autosave:ue,dirty:Ie}=en(ot);wt(s,Ie,E=>f(14,m=E));const ut={save_fn:fe},{autosave:ve,dirty:Ne,save_manually:Te}=en(ut);wt(s,Ne,E=>f(15,h=E)),Te();async function ce(){return W.log("saving now"),!0}async function vt(){return T.log("saving now"),!0}async function ct(E){return z.log("saving now, dirty fields:",E),!0}async function fe(E){return L.log("saving now, dirty fields:",E),!0}function ft(){K=this.value,f(6,K)}function pt(E){xt[E?"unshift":"push"](()=>{W=E,f(7,W)})}function pe(){P=this.value,f(0,P)}function dt(){S=this.value,f(1,S)}function mt(E){xt[E?"unshift":"push"](()=>{T=E,f(8,T)})}function de(){I=this.value,f(2,I)}function ht(){J=this.value,f(3,J)}function _t(E){xt[E?"unshift":"push"](()=>{z=E,f(9,z)})}function yt(){q=this.value,f(4,q)}function C(){j=this.value,f(5,j)}function M(E){xt[E?"unshift":"push"](()=>{L=E,f(10,L)})}return[P,S,I,J,q,j,K,W,T,z,L,u,v,b,m,h,D,g,U,it,Q,ue,Ie,ve,Ne,Te,ft,pt,pe,dt,mt,de,ht,_t,yt,C,M]}class wa extends Zs{constructor(c){super();xs(this,c,ha,ma,ea,{},null,[-1,-1])}}export{wa as default,ya as prerender};
