import{s as Q,n as R,r as me,f as L,o as _e,h as ge}from"../chunks/scheduler.dfb2f7c0.js";import{S as X,i as Z,g,s as T,h as b,j as S,f as _,c as C,k as n,l as H,a as N,x as f,y as te,z as ae,m as B,n as U,A as Y,B as G,o as ee,r as q,u as O,v as J,d as z,t as F,w as K}from"../chunks/index.97c92902.js";import{b as se}from"../chunks/paths.8686d507.js";function x(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function oe(l,e,t){const o=l.slice();return o[7]=e[t],o}function ce(l){let e,t=l[7]+"",o;return{c(){e=g("li"),o=B(t),this.h()},l(r){e=b(r,"LI",{class:!0});var a=S(e);o=U(a,t),a.forEach(_),this.h()},h(){n(e,"class","svelte-1bof64a")},m(r,a){N(r,e,a),f(e,o)},p:R,d(r){r&&_(e)}}}function be(l){let e,t,o,r,a,s,p,u,v,h=x(l[3]),c=[];for(let d=0;d<h.length;d+=1)c[d]=ce(oe(l,h,d));return{c(){e=g("button"),t=g("div"),o=T(),r=g("div"),a=T(),s=g("div"),p=g("ul");for(let d=0;d<c.length;d+=1)c[d].c();this.h()},l(d){e=b(d,"BUTTON",{id:!0,class:!0});var m=S(e);t=b(m,"DIV",{class:!0}),S(t).forEach(_),o=C(m),r=b(m,"DIV",{class:!0,style:!0}),S(r).forEach(_),m.forEach(_),a=C(d),s=b(d,"DIV",{id:!0,style:!0,class:!0});var i=S(s);p=b(i,"UL",{id:!0,style:!0,class:!0});var y=S(p);for(let E=0;E<c.length;E+=1)c[E].l(y);y.forEach(_),i.forEach(_),this.h()},h(){n(t,"class","menu_bar svelte-1bof64a"),n(r,"class","menu_bar svelte-1bof64a"),H(r,"margin-left",l[0]+"%"),H(r,"width",we+"%"),n(e,"id","menu"),n(e,"class","svelte-1bof64a"),n(p,"id","menu-options"),H(p,"visibility",l[2]=="100"?"visible":"hidden"),n(p,"class","svelte-1bof64a"),n(s,"id","background_menu"),H(s,"width",l[2]+(l[2]=="100"?"vw":"px")),H(s,"height",l[2]+(l[2]=="100"?"vh":"px")),H(s,"background-color",l[2]=="100"?"#f2f2f2":"transparent"),H(s,"top",l[2]=="100"?"0px":"15px"),H(s,"right",l[2]=="100"?"0px":"15px"),n(s,"class","svelte-1bof64a")},m(d,m){N(d,e,m),f(e,t),f(e,o),f(e,r),N(d,a,m),N(d,s,m),f(s,p);for(let i=0;i<c.length;i+=1)c[i]&&c[i].m(p,null);u||(v=[te(e,"mouseenter",l[4]),te(e,"mouseleave",l[5]),te(e,"click",l[6])],u=!0)},p(d,[m]){if(m&1&&H(r,"margin-left",d[0]+"%"),m&8){h=x(d[3]);let i;for(i=0;i<h.length;i+=1){const y=oe(d,h,i);c[i]?c[i].p(y,m):(c[i]=ce(y),c[i].c(),c[i].m(p,null))}for(;i<c.length;i+=1)c[i].d(1);c.length=h.length}m&4&&H(p,"visibility",d[2]=="100"?"visible":"hidden"),m&4&&H(s,"width",d[2]+(d[2]=="100"?"vw":"px")),m&4&&H(s,"height",d[2]+(d[2]=="100"?"vh":"px")),m&4&&H(s,"background-color",d[2]=="100"?"#f2f2f2":"transparent"),m&4&&H(s,"top",d[2]=="100"?"0px":"15px"),m&4&&H(s,"right",d[2]=="100"?"0px":"15px")},i:R,o:R,d(d){d&&(_(e),_(a),_(s)),ae(c,d),u=!1,me(v)}}}let we=50;function ye(l,e,t){let o=50,r=-1,a="20";return[o,r,a,["landing","about","projects","contacts"],()=>{t(0,o=25)},()=>{console.log(o),t(0,o=r===-1?50:0)},()=>{t(0,o=r===-1?0:50),t(1,r*=-1),t(2,a=a=="20"?"100":"20")}]}class Ee extends X{constructor(e){super(),Z(this,e,ye,be,Q,{})}}function Ie(l){let e,t,o,r,a,s=`I AM CURRENTLY NOT ACCEPTING ANY
        FREELANCE WORK, BUT FEEL FREE TO 
        MESSAGE ME AND VIEW OTHER PROJECTS`,p,u,v='<li class="svelte-1pqv6vb">LinkedIN</li> <li class="svelte-1pqv6vb">Github</li> <li class="svelte-1pqv6vb">Resume</li> <li class="svelte-1pqv6vb">Email</li>';return{c(){e=g("div"),t=g("img"),r=T(),a=g("p"),a.textContent=s,p=T(),u=g("ul"),u.innerHTML=v,this.h()},l(h){e=b(h,"DIV",{id:!0,class:!0});var c=S(e);t=b(c,"IMG",{src:!0,width:!0,alt:!0}),r=C(c),a=b(c,"P",{class:!0,["data-svelte-h"]:!0}),Y(a)!=="svelte-1b4ln77"&&(a.textContent=s),p=C(c),u=b(c,"UL",{class:!0,["data-svelte-h"]:!0}),Y(u)!=="svelte-7uxyz0"&&(u.innerHTML=v),c.forEach(_),this.h()},h(){L(t.src,o=l[0]+"/images/contact_header.png")||n(t,"src",o),n(t,"width","250px"),n(t,"alt","contact_header"),n(a,"class","svelte-1pqv6vb"),n(u,"class","svelte-1pqv6vb"),n(e,"id","contacts"),n(e,"class","svelte-1pqv6vb")},m(h,c){N(h,e,c),f(e,t),f(e,r),f(e,a),f(e,p),f(e,u)},p(h,[c]){c&1&&!L(t.src,o=h[0]+"/images/contact_header.png")&&n(t,"src",o)},i:R,o:R,d(h){h&&_(e)}}}function ke(l,e,t){let{path:o=""}=e;return l.$$set=r=>{"path"in r&&t(0,o=r.path)},[o]}class Me extends X{constructor(e){super(),Z(this,e,ke,Ie,Q,{path:0})}}const Se=[{title:"ThisMuch",date:"Jan 2023 - Jun 2023",description:"A react native app that allows users to take pictures of there receipts, and divide them with friends.",stack:["React Native","TypeScript","Nativewind CSS","PlanetScale","MySQL","AWS","Python3"]},{title:"Personal Portfolio",date:"June 2023 - July 2023",description:"My personal portfolio, where I will keep my projects hosted. I really needed one",stack:["SvelteKit","SASS","TypeScript","Github Pages"]},{title:"Demerit Tool",date:"Dec 2023",description:"This is a tool that I built for a friend that created a simulated version of his fire academy demerit slip. It allowed him to edit it anywhere, and print it anywhere.",stack:["SvelteJS","SASS","Javascript","Github Pages"]}],ue={project:Se};function he(l,e,t){const o=l.slice();return o[3]=e[t],o[5]=t,o}function ve(l,e,t){const o=l.slice();return o[6]=e[t],o}function fe(l){let e,t=l[6]+"",o,r;return{c(){e=g("i"),o=B(t),r=B(", ")},l(a){e=b(a,"I",{});var s=S(e);o=U(s,t),r=U(s,", "),s.forEach(_)},m(a,s){N(a,e,s),f(e,o),f(e,r)},p:R,d(a){a&&_(e)}}}function de(l){let e,t,o,r,a,s=l[3].title+"",p,u,v,h,c,d,m,i=l[3].description+"",y,E,w,P="<i>stack -</i>",D,k,V,j=x(l[3].stack),I=[];for(let $=0;$<j.length;$+=1)I[$]=fe(ve(l,j,$));return{c(){e=g("div"),t=g("div"),o=T(),r=g("div"),a=g("h3"),p=B(s),u=T(),v=g("span"),h=g("img"),d=T(),m=g("p"),y=B(i),E=T(),w=g("p"),w.innerHTML=P,D=T(),k=g("p");for(let $=0;$<I.length;$+=1)I[$].c();V=T(),this.h()},l($){e=b($,"DIV",{class:!0,style:!0});var A=S(e);t=b(A,"DIV",{class:!0}),S(t).forEach(_),o=C(A),r=b(A,"DIV",{class:!0});var M=S(r);a=b(M,"H3",{class:!0});var W=S(a);p=U(W,s),u=C(W),v=b(W,"SPAN",{});var ne=S(v);h=b(ne,"IMG",{src:!0,alt:!0,width:!0}),ne.forEach(_),W.forEach(_),d=C(M),m=b(M,"P",{class:!0});var re=S(m);y=U(re,i),re.forEach(_),E=C(M),w=b(M,"P",{class:!0,["data-svelte-h"]:!0}),Y(w)!=="svelte-1rbsl10"&&(w.innerHTML=P),D=C(M),k=b(M,"P",{class:!0});var ie=S(k);for(let le=0;le<I.length;le+=1)I[le].l(ie);ie.forEach(_),M.forEach(_),V=C(A),A.forEach(_),this.h()},h(){n(t,"class","project_image svelte-1vkvnhs"),L(h.src,c=l[1]+"/images/octocat.png")||n(h,"src",c),n(h,"alt","octocat"),n(h,"width","20px"),n(a,"class","svelte-1vkvnhs"),n(m,"class","svelte-1vkvnhs"),n(w,"class","svelte-1vkvnhs"),n(k,"class","svelte-1vkvnhs"),n(r,"class","project_body svelte-1vkvnhs"),n(e,"class","body_parts svelte-1vkvnhs"),H(e,"flex-direction",l[5]%2===1?"row-reverse":"row"),H(e,"margin-top",l[5]!==0?"50px":"0px")},m($,A){N($,e,A),f(e,t),f(e,o),f(e,r),f(r,a),f(a,p),f(a,u),f(a,v),f(v,h),f(r,d),f(r,m),f(m,y),f(r,E),f(r,w),f(r,D),f(r,k);for(let M=0;M<I.length;M+=1)I[M]&&I[M].m(k,null);f(e,V)},p($,A){if(A&2&&!L(h.src,c=$[1]+"/images/octocat.png")&&n(h,"src",c),A&0){j=x($[3].stack);let M;for(M=0;M<j.length;M+=1){const W=ve($,j,M);I[M]?I[M].p(W,A):(I[M]=fe(W),I[M].c(),I[M].m(k,null))}for(;M<I.length;M+=1)I[M].d(1);I.length=j.length}},d($){$&&_(e),ae(I,$)}}}function Te(l){let e,t,o=`all my projects can be viewed on
        my github, and the links will be
        provided for each.`,r,a,s,p=x(ue.project),u=[];for(let v=0;v<p.length;v+=1)u[v]=de(he(l,p,v));return{c(){e=g("div"),t=g("h3"),t.textContent=o,r=T(),a=g("div"),s=g("div");for(let v=0;v<u.length;v+=1)u[v].c();this.h()},l(v){e=b(v,"DIV",{id:!0,"data-scroll":!0,class:!0});var h=S(e);t=b(h,"H3",{class:!0,["data-svelte-h"]:!0}),Y(t)!=="svelte-170lmg9"&&(t.textContent=o),r=C(h),a=b(h,"DIV",{id:!0,class:!0});var c=S(a);s=b(c,"DIV",{id:!0,class:!0});var d=S(s);for(let m=0;m<u.length;m+=1)u[m].l(d);d.forEach(_),c.forEach(_),h.forEach(_),this.h()},h(){n(t,"class","projects_tag svelte-1vkvnhs"),n(s,"id","content-holder"),n(s,"class","svelte-1vkvnhs"),n(a,"id","projects_floating_tab"),n(a,"class","svelte-1vkvnhs"),G(a,"full_width",l[0]>l[2]),G(a,"partial_width",l[0]<=l[2]),n(e,"id","projects"),n(e,"data-scroll",l[0]),n(e,"class","svelte-1vkvnhs")},m(v,h){N(v,e,h),f(e,t),f(e,r),f(e,a),f(a,s);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(s,null)},p(v,[h]){if(h&2){p=x(ue.project);let c;for(c=0;c<p.length;c+=1){const d=he(v,p,c);u[c]?u[c].p(d,h):(u[c]=de(d),u[c].c(),u[c].m(s,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=p.length}h&5&&G(a,"full_width",v[0]>v[2]),h&5&&G(a,"partial_width",v[0]<=v[2]),h&1&&n(e,"data-scroll",v[0])},i:R,o:R,d(v){v&&_(e),ae(u,v)}}}function Ce(l,e,t){let{scroll:o=0}=e,r=0,{path:a=""}=e;return _e(()=>{const s=document.getElementById("projects");t(2,r=s==null?void 0:s.offsetTop),console.log(s==null?void 0:s.offsetTop),console.log(o)}),l.$$set=s=>{"scroll"in s&&t(0,o=s.scroll),"path"in s&&t(1,a=s.path)},[o,a,r]}class Pe extends X{constructor(e){super(),Z(this,e,Ce,Te,Q,{scroll:0,path:1})}}function De(l){let e,t,o,r,a,s,p,u,v,h,c,d,m,i=`<p class="svelte-192cuba">I am a computer science
                    graduate, currently attending
                    the University of California,
                    Irvine. I have a Bachelors of Science
                    in Computer Science from UNLV and two
                    minors in mathematics and physics. I’ve
                    been programming since high school, and I
                    enjoy working at the lowest level of a 
                    computer, specifically O.S. and compilers.</p> <div id="education" class="svelte-192cuba"><p class="svelte-192cuba">University of Nevada, Las Vegas<br/>
                        GPA: 3.657<br/>
                        Bachelors in Computer Science<br/>
                        Minors in Physics and Mathematics<br/></p> <hr class="svelte-192cuba"/> <p class="svelte-192cuba">University of California, Irvine<br/>
                        GPA: 3.9<br/>
                        Masters in Computer Science</p></div>`,y,E,w,P,D,k,V;return{c(){e=g("div"),t=g("div"),o=T(),r=g("div"),a=g("img"),p=T(),u=g("div"),v=g("div"),h=g("img"),d=T(),m=g("div"),m.innerHTML=i,y=T(),E=g("img"),P=T(),D=g("div"),k=g("img"),this.h()},l(j){e=b(j,"DIV",{id:!0,class:!0});var I=S(e);t=b(I,"DIV",{id:!0,class:!0}),S(t).forEach(_),o=C(I),r=b(I,"DIV",{class:!0});var $=S(r);a=b($,"IMG",{id:!0,src:!0,width:!0,alt:!0,class:!0}),$.forEach(_),p=C(I),u=b(I,"DIV",{id:!0,class:!0});var A=S(u);v=b(A,"DIV",{id:!0,class:!0});var M=S(v);h=b(M,"IMG",{src:!0,alt:!0,class:!0}),d=C(M),m=b(M,"DIV",{class:!0,["data-svelte-h"]:!0}),Y(m)!=="svelte-1olwar1"&&(m.innerHTML=i),y=C(M),E=b(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(_),A.forEach(_),P=C(I),D=b(I,"DIV",{class:!0});var W=S(D);k=b(W,"IMG",{id:!0,src:!0,width:!0,alt:!0,class:!0}),W.forEach(_),I.forEach(_),this.h()},h(){n(t,"id","picture_of_me"),n(t,"class","svelte-192cuba"),n(a,"id","about_intro"),L(a.src,s=l[0]+"/images/about_header.png")||n(a,"src",s),n(a,"width","200px"),n(a,"alt","contact_header"),n(a,"class","svelte-192cuba"),n(r,"class","surrounding_image_intros svelte-192cuba"),L(h.src,c=l[0]+"/images/pattern.svg")||n(h,"src",c),n(h,"alt","pattern"),n(h,"class","svelte-192cuba"),n(m,"class","content_container svelte-192cuba"),L(E.src,w=l[0]+"/images/pattern.svg")||n(E,"src",w),n(E,"alt","pattern"),n(E,"class","svelte-192cuba"),n(v,"id","content_area"),n(v,"class","svelte-192cuba"),n(u,"id","surrounding_area"),n(u,"class","svelte-192cuba"),n(k,"id","projects_intro"),L(k.src,V=l[0]+"/images/projects_header.png")||n(k,"src",V),n(k,"width","275px"),n(k,"alt","contact_header"),n(k,"class","svelte-192cuba"),n(D,"class","surrounding_image_intros svelte-192cuba"),n(e,"id","about"),n(e,"class","svelte-192cuba")},m(j,I){N(j,e,I),f(e,t),f(e,o),f(e,r),f(r,a),f(e,p),f(e,u),f(u,v),f(v,h),f(v,d),f(v,m),f(v,y),f(v,E),f(e,P),f(e,D),f(D,k)},p(j,[I]){I&1&&!L(a.src,s=j[0]+"/images/about_header.png")&&n(a,"src",s),I&1&&!L(h.src,c=j[0]+"/images/pattern.svg")&&n(h,"src",c),I&1&&!L(E.src,w=j[0]+"/images/pattern.svg")&&n(E,"src",w),I&1&&!L(k.src,V=j[0]+"/images/projects_header.png")&&n(k,"src",V)},i:R,o:R,d(j){j&&_(e)}}}function $e(l,e,t){let{path:o=""}=e;return l.$$set=r=>{"path"in r&&t(0,o=r.path)},[o]}class je extends X{constructor(e){super(),Z(this,e,$e,De,Q,{path:0})}}function Ve(l){let e,t,o,r,a,s,p,u,v,h=":",c,d,m=l[3]<10?"0":"",i,y,E,w,P;return{c(){e=g("div"),t=g("p"),o=g("span"),r=B(l[0]),a=T(),s=g("span"),p=B(l[1]),u=T(),v=g("span"),v.textContent=h,c=T(),d=g("span"),i=B(m),y=B(l[3]),E=T(),w=g("span"),P=B(l[2]),this.h()},l(D){e=b(D,"DIV",{});var k=S(e);t=b(k,"P",{class:!0});var V=S(t);o=b(V,"SPAN",{class:!0});var j=S(o);r=U(j,l[0]),j.forEach(_),a=C(V),s=b(V,"SPAN",{class:!0});var I=S(s);p=U(I,l[1]),I.forEach(_),u=C(V),v=b(V,"SPAN",{class:!0,["data-svelte-h"]:!0}),Y(v)!=="svelte-19v4cur"&&(v.textContent=h),c=C(V),d=b(V,"SPAN",{class:!0});var $=S(d);i=U($,m),y=U($,l[3]),$.forEach(_),E=C(V),w=b(V,"SPAN",{class:!0});var A=S(w);P=U(A,l[2]),A.forEach(_),V.forEach(_),k.forEach(_),this.h()},h(){n(o,"class","svelte-1vmh6yp"),n(s,"class","svelte-1vmh6yp"),n(v,"class","semi-colon svelte-1vmh6yp"),n(d,"class","svelte-1vmh6yp"),n(w,"class","svelte-1vmh6yp"),n(t,"class","svelte-1vmh6yp")},m(D,k){N(D,e,k),f(e,t),f(t,o),f(o,r),f(t,a),f(t,s),f(s,p),f(t,u),f(t,v),f(t,c),f(t,d),f(d,i),f(d,y),f(t,E),f(t,w),f(w,P)},p(D,[k]){k&1&&ee(r,D[0]),k&2&&ee(p,D[1]),k&8&&m!==(m=D[3]<10?"0":"")&&ee(i,m),k&8&&ee(y,D[3]),k&4&&ee(P,D[2])},i:R,o:R,d(D){D&&_(e)}}}function Ae(l,e,t){let{otherRegion:o=0}=e,{region:r="Irvine"}=e,a=new Date;a.getDay();let s=a.getHours();s+=o;let p=s>12?"PM":"AM";s=s>12?s-12:s,a.getUTCFullYear();let u=a.getMinutes();return setInterval(()=>{t(3,u+=1),t(3,u=u==60?0:u),t(1,s=u==60?s+1:s),t(2,p=s>12?"PM":"AM"),t(1,s=s>12?s-12:s)},6e4),l.$$set=v=>{"otherRegion"in v&&t(4,o=v.otherRegion),"region"in v&&t(0,r=v.region)},[r,s,p,u,o]}class pe extends X{constructor(e){super(),Z(this,e,Ae,Ve,Q,{otherRegion:4,region:0})}}function He(l){let e,t,o,r,a,s,p,u,v,h,c,d='<span id="hi" class="svelte-1layo1n">Hi,</span><br/> <span id="my" class="svelte-1layo1n">my name is Kenny Weeks. </span><br/> <span id="welcome" class="svelte-1layo1n">Welcome to my  ...</span>',m,i,y,E;return s=new pe({}),u=new pe({props:{otherRegion:10,region:"Bucharest"}}),{c(){e=g("div"),t=g("img"),r=T(),a=g("div"),q(s.$$.fragment),p=T(),q(u.$$.fragment),v=T(),h=g("div"),c=g("h3"),c.innerHTML=d,m=T(),i=g("img"),this.h()},l(w){e=b(w,"DIV",{id:!0,class:!0});var P=S(e);t=b(P,"IMG",{id:!0,alt:!0,src:!0,width:!0,class:!0}),r=C(P),a=b(P,"DIV",{id:!0,class:!0});var D=S(a);O(s.$$.fragment,D),p=C(D),O(u.$$.fragment,D),D.forEach(_),v=C(P),h=b(P,"DIV",{id:!0,class:!0});var k=S(h);c=b(k,"H3",{id:!0,class:!0,["data-svelte-h"]:!0}),Y(c)!=="svelte-t6a2lj"&&(c.innerHTML=d),m=C(k),i=b(k,"IMG",{id:!0,src:!0,alt:!0,class:!0}),k.forEach(_),P.forEach(_),this.h()},h(){n(t,"id","wolf"),n(t,"alt","wolf"),L(t.src,o=l[0]+"/images/wolf.png")||n(t,"src",o),n(t,"width","80px"),n(t,"class","svelte-1layo1n"),n(a,"id","clocks"),n(a,"class","svelte-1layo1n"),G(a,"layout_1_clocks",l[1]>l[2]),G(a,"layout_2_clocks",l[1]<=l[2]),n(c,"id","intro_text"),n(c,"class","svelte-1layo1n"),n(i,"id","portfolio_text"),L(i.src,y=l[0]+"/images/portfolio_title"+(l[1]>l[2]?"_large":"_small")+".svg")||n(i,"src",y),n(i,"alt","portfolio_text"),n(i,"class","svelte-1layo1n"),n(h,"id","intro"),n(h,"class","svelte-1layo1n"),G(h,"layout_2_intro",l[1]<=l[2]),G(h,"layout_1_intro",l[1]>l[2]),n(e,"id","landing"),n(e,"class","svelte-1layo1n")},m(w,P){N(w,e,P),f(e,t),f(e,r),f(e,a),J(s,a,null),f(a,p),J(u,a,null),f(e,v),f(e,h),f(h,c),f(h,m),f(h,i),E=!0},p(w,[P]){(!E||P&1&&!L(t.src,o=w[0]+"/images/wolf.png"))&&n(t,"src",o),(!E||P&6)&&G(a,"layout_1_clocks",w[1]>w[2]),(!E||P&6)&&G(a,"layout_2_clocks",w[1]<=w[2]),(!E||P&7&&!L(i.src,y=w[0]+"/images/portfolio_title"+(w[1]>w[2]?"_large":"_small")+".svg"))&&n(i,"src",y),(!E||P&6)&&G(h,"layout_2_intro",w[1]<=w[2]),(!E||P&6)&&G(h,"layout_1_intro",w[1]>w[2])},i(w){E||(z(s.$$.fragment,w),z(u.$$.fragment,w),E=!0)},o(w){F(s.$$.fragment,w),F(u.$$.fragment,w),E=!1},d(w){w&&_(e),K(s),K(u)}}}function Le(l,e,t){let{path:o=""}=e,{screenWidth:r}=e,{screenHeight:a}=e;return _e(()=>{let s=document.getElementById("hi"),p=document.getElementById("my"),u=document.getElementById("welcome"),v=document.getElementById("portfolio_text");setTimeout(()=>{s.style.opacity=1},500),setTimeout(()=>{p.style.opacity=1},1400),setTimeout(()=>{u.style.opacity=1},2500),setTimeout(()=>{v.style.opacity=1},3600)}),l.$$set=s=>{"path"in s&&t(0,o=s.path),"screenWidth"in s&&t(1,r=s.screenWidth),"screenHeight"in s&&t(2,a=s.screenHeight)},[o,r,a]}class Ne extends X{constructor(e){super(),Z(this,e,Le,He,Q,{path:0,screenWidth:1,screenHeight:2})}}function Ge(l){let e,t,o,r,a,s,p,u,v,h,c,d,m;return ge(l[3]),t=new Ee({}),r=new Ne({props:{path:se,screenWidth:l[0],screenHeight:l[1]}}),s=new je({props:{path:se}}),u=new Pe({props:{scroll:l[2],path:se}}),h=new Me({props:{path:se}}),{c(){e=T(),q(t.$$.fragment),o=T(),q(r.$$.fragment),a=T(),q(s.$$.fragment),p=T(),q(u.$$.fragment),v=T(),q(h.$$.fragment)},l(i){e=C(i),O(t.$$.fragment,i),o=C(i),O(r.$$.fragment,i),a=C(i),O(s.$$.fragment,i),p=C(i),O(u.$$.fragment,i),v=C(i),O(h.$$.fragment,i)},m(i,y){N(i,e,y),J(t,i,y),N(i,o,y),J(r,i,y),N(i,a,y),J(s,i,y),N(i,p,y),J(u,i,y),N(i,v,y),J(h,i,y),c=!0,d||(m=[te(window,"resize",l[3]),te(document.body,"scroll",l[4])],d=!0)},p(i,[y]){const E={};y&1&&(E.screenWidth=i[0]),y&2&&(E.screenHeight=i[1]),r.$set(E);const w={};y&4&&(w.scroll=i[2]),u.$set(w)},i(i){c||(z(t.$$.fragment,i),z(r.$$.fragment,i),z(s.$$.fragment,i),z(u.$$.fragment,i),z(h.$$.fragment,i),c=!0)},o(i){F(t.$$.fragment,i),F(r.$$.fragment,i),F(s.$$.fragment,i),F(u.$$.fragment,i),F(h.$$.fragment,i),c=!1},d(i){i&&(_(e),_(o),_(a),_(p),_(v)),K(t,i),K(r,i),K(s,i),K(u,i),K(h,i),d=!1,me(m)}}}function Re(l,e,t){let o,r,a=0;function s(){t(0,o=window.innerWidth),t(1,r=window.innerHeight)}return[o,r,a,s,u=>{t(2,a=u.target.scrollTop)}]}class qe extends X{constructor(e){super(),Z(this,e,Re,Ge,Q,{})}}export{qe as component};
