import{s as le,n as K,r as Pe,f as L,o as Me,h as Ce}from"../chunks/scheduler.dfb2f7c0.js";import{S as ae,i as re,g as m,s as C,h as _,j as k,f as y,c as A,k as t,l as W,a as $,x as r,y as ce,z as ve,m as O,n as J,A as se,B as F,o as ne,r as Q,u as X,v as Z,d as x,t as ee,w as te}from"../chunks/index.97c92902.js";import{b as oe}from"../chunks/paths.d5be2c4a.js";function ie(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function we(l,e,s){const c=l.slice();return c[7]=e[s],c}function ye(l){let e,s=l[7]+"",c;return{c(){e=m("li"),c=O(s),this.h()},l(o){e=_(o,"LI",{class:!0});var n=k(e);c=J(n,s),n.forEach(y),this.h()},h(){t(e,"class","svelte-30exis")},m(o,n){$(o,e,n),r(e,c)},p:K,d(o){o&&y(e)}}}function Ae(l){let e,s,c,o,n,a,I,p,g,d=ie(l[3]),f=[];for(let u=0;u<d.length;u+=1)f[u]=ye(we(l,d,u));return{c(){e=m("button"),s=m("div"),c=C(),o=m("div"),n=C(),a=m("div"),I=m("ul");for(let u=0;u<f.length;u+=1)f[u].c();this.h()},l(u){e=_(u,"BUTTON",{id:!0,class:!0});var h=k(e);s=_(h,"DIV",{class:!0}),k(s).forEach(y),c=A(h),o=_(h,"DIV",{class:!0,style:!0}),k(o).forEach(y),h.forEach(y),n=A(u),a=_(u,"DIV",{id:!0,style:!0,class:!0});var i=k(a);I=_(i,"UL",{id:!0,style:!0,class:!0});var v=k(I);for(let b=0;b<f.length;b+=1)f[b].l(v);v.forEach(y),i.forEach(y),this.h()},h(){t(s,"class","menu_bar svelte-30exis"),t(o,"class","menu_bar svelte-30exis"),W(o,"margin-left",l[0]+"%"),W(o,"width",De+"%"),t(e,"id","menu"),t(e,"class","svelte-30exis"),t(I,"id","menu-options"),W(I,"visibility",l[2]=="100"?"visible":"hidden"),t(I,"class","svelte-30exis"),t(a,"id","background_menu"),W(a,"width",l[2]+(l[2]=="100"?"vw":"px")),W(a,"height",l[2]+(l[2]=="100"?"vh":"px")),W(a,"background-color",l[2]=="100"?"#f2f2f2":"transparent"),W(a,"top",l[2]=="100"?"0px":"15px"),W(a,"right",l[2]=="100"?"0px":"15px"),t(a,"class","svelte-30exis")},m(u,h){$(u,e,h),r(e,s),r(e,c),r(e,o),$(u,n,h),$(u,a,h),r(a,I);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(I,null);p||(g=[ce(e,"mouseenter",l[4]),ce(e,"mouseleave",l[5]),ce(e,"click",l[6])],p=!0)},p(u,[h]){if(h&1&&W(o,"margin-left",u[0]+"%"),h&8){d=ie(u[3]);let i;for(i=0;i<d.length;i+=1){const v=we(u,d,i);f[i]?f[i].p(v,h):(f[i]=ye(v),f[i].c(),f[i].m(I,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=d.length}h&4&&W(I,"visibility",u[2]=="100"?"visible":"hidden"),h&4&&W(a,"width",u[2]+(u[2]=="100"?"vw":"px")),h&4&&W(a,"height",u[2]+(u[2]=="100"?"vh":"px")),h&4&&W(a,"background-color",u[2]=="100"?"#f2f2f2":"transparent"),h&4&&W(a,"top",u[2]=="100"?"0px":"15px"),h&4&&W(a,"right",u[2]=="100"?"0px":"15px")},i:K,o:K,d(u){u&&(y(e),y(n),y(a)),ve(f,u),p=!1,Pe(g)}}}let De=50;function Te(l,e,s){let c=50,o=-1,n="20";return[c,o,n,["landing","about","projects","contacts"],()=>{s(0,c=25)},()=>{console.log(c),s(0,c=o===-1?50:0)},()=>{s(0,c=o===-1?0:50),s(1,o*=-1),s(2,n=n=="20"?"100":"20")}]}class Ne extends ae{constructor(e){super(),re(this,e,Te,Ae,le,{})}}function Ve(l){let e,s,c,o,n,a=`I AM CURRENTLY NOT ACCEPTING ANY
        FREELANCE WORK, BUT FEEL FREE TO 
        MESSAGE ME AND VIEW OTHER PROJECTS`,I,p,g,d,f,u,h,i,v,b,S,G,D,j,V,N,E,P,T,w,M,B,z,H,q;return{c(){e=m("div"),s=m("img"),o=C(),n=m("p"),n.textContent=a,I=C(),p=m("ul"),g=m("li"),d=m("span"),f=m("img"),h=O("LinkedIN"),i=C(),v=m("li"),b=m("span"),S=m("img"),D=O("Github"),j=C(),V=m("li"),N=m("span"),E=m("img"),T=O("Resume"),w=C(),M=m("li"),B=m("span"),z=m("img"),q=O("Email"),this.h()},l(R){e=_(R,"DIV",{id:!0,class:!0});var U=k(e);s=_(U,"IMG",{src:!0,width:!0,alt:!0}),o=A(U),n=_(U,"P",{class:!0,["data-svelte-h"]:!0}),se(n)!=="svelte-1b4ln77"&&(n.textContent=a),I=A(U),p=_(U,"UL",{class:!0});var Y=k(p);g=_(Y,"LI",{class:!0});var ue=k(g);d=_(ue,"SPAN",{class:!0});var me=k(d);f=_(me,"IMG",{src:!0,alt:!0,width:!0}),me.forEach(y),h=J(ue,"LinkedIN"),ue.forEach(y),i=A(Y),v=_(Y,"LI",{class:!0});var he=k(v);b=_(he,"SPAN",{class:!0});var _e=k(b);S=_(_e,"IMG",{src:!0,alt:!0,width:!0}),_e.forEach(y),D=J(he,"Github"),he.forEach(y),j=A(Y),V=_(Y,"LI",{class:!0});var de=k(V);N=_(de,"SPAN",{class:!0});var pe=k(N);E=_(pe,"IMG",{src:!0,alt:!0,width:!0}),pe.forEach(y),T=J(de,"Resume"),de.forEach(y),w=A(Y),M=_(Y,"LI",{class:!0});var fe=k(M);B=_(fe,"SPAN",{class:!0});var ge=k(B);z=_(ge,"IMG",{src:!0,alt:!0,width:!0}),ge.forEach(y),q=J(fe,"Email"),fe.forEach(y),Y.forEach(y),U.forEach(y),this.h()},h(){L(s.src,c=l[0]+"/images/contact_header"+(l[1]<=810?"_no_overlay":"")+".png")||t(s,"src",c),t(s,"width","250px"),t(s,"alt","contact_header"),t(n,"class","svelte-1lire0z"),L(f.src,u=l[0]+"/images/linkedin"+(l[1]<=810?"_off_white":"")+".png")||t(f,"src",u),t(f,"alt","linkedin"),t(f,"width","20"),t(d,"class","svelte-1lire0z"),t(g,"class","svelte-1lire0z"),L(S.src,G=l[0]+"/images/octocat"+(l[1]<=810?"":"_off_black")+".png")||t(S,"src",G),t(S,"alt","github"),t(S,"width","25"),t(b,"class","svelte-1lire0z"),t(v,"class","svelte-1lire0z"),L(E.src,P=l[0]+"/images/resume"+(l[1]<=810?"_off_white":"")+".png")||t(E,"src",P),t(E,"alt","resume"),t(E,"width","20"),t(N,"class","svelte-1lire0z"),t(V,"class","svelte-1lire0z"),L(z.src,H=l[0]+"/images/gmail"+(l[1]<=810?"_off_white":"")+".png")||t(z,"src",H),t(z,"alt","gmail"),t(z,"width","20"),t(B,"class","svelte-1lire0z"),t(M,"class","svelte-1lire0z"),t(p,"class","svelte-1lire0z"),t(e,"id","contacts"),t(e,"class","svelte-1lire0z")},m(R,U){$(R,e,U),r(e,s),r(e,o),r(e,n),r(e,I),r(e,p),r(p,g),r(g,d),r(d,f),r(g,h),r(p,i),r(p,v),r(v,b),r(b,S),r(v,D),r(p,j),r(p,V),r(V,N),r(N,E),r(V,T),r(p,w),r(p,M),r(M,B),r(B,z),r(M,q)},p(R,[U]){U&3&&!L(s.src,c=R[0]+"/images/contact_header"+(R[1]<=810?"_no_overlay":"")+".png")&&t(s,"src",c),U&3&&!L(f.src,u=R[0]+"/images/linkedin"+(R[1]<=810?"_off_white":"")+".png")&&t(f,"src",u),U&3&&!L(S.src,G=R[0]+"/images/octocat"+(R[1]<=810?"":"_off_black")+".png")&&t(S,"src",G),U&3&&!L(E.src,P=R[0]+"/images/resume"+(R[1]<=810?"_off_white":"")+".png")&&t(E,"src",P),U&3&&!L(z.src,H=R[0]+"/images/gmail"+(R[1]<=810?"_off_white":"")+".png")&&t(z,"src",H)},i:K,o:K,d(R){R&&y(e)}}}function Ge(l,e,s){let{path:c=""}=e,{screenWidth:o}=e;return l.$$set=n=>{"path"in n&&s(0,c=n.path),"screenWidth"in n&&s(1,o=n.screenWidth)},[c,o]}class Le extends ae{constructor(e){super(),re(this,e,Ge,Ve,le,{path:0,screenWidth:1})}}const We=[{title:"ThisMuch",date:"Jan 2023 - Jun 2023",description:"A react native app that allows users to take pictures of there receipts, and divide them with friends.",stack:["React Native","TypeScript","Nativewind CSS","PlanetScale","MySQL","AWS","Python3"]},{title:"Personal Portfolio",date:"June 2023 - July 2023",description:"My personal portfolio, where I will keep my projects hosted. I really needed one",stack:["SvelteKit","SASS","TypeScript","Github Pages"]},{title:"Demerit Tool",date:"Dec 2023",description:"This is a tool that I built for a friend that created a simulated version of his fire academy demerit slip. It allowed him to edit it anywhere, and print it anywhere.",stack:["SvelteJS","SASS","Javascript","Github Pages"]}],Ee={project:We};function Ie(l,e,s){const c=l.slice();return c[3]=e[s],c[5]=s,c}function be(l,e,s){const c=l.slice();return c[6]=e[s],c}function je(l){let e,s=l[6]+"",c,o;return{c(){e=m("i"),c=O(s),o=O(", ")},l(n){e=_(n,"I",{});var a=k(e);c=J(a,s),o=J(a,", "),a.forEach(y)},m(n,a){$(n,e,a),r(e,c),r(e,o)},p:K,d(n){n&&y(e)}}}function ke(l){let e,s,c,o,n,a=l[3].title+"",I,p,g,d,f,u,h,i=l[3].description+"",v,b,S,G="<i>stack -</i>",D,j,V,N=ie(l[3].stack),E=[];for(let P=0;P<N.length;P+=1)E[P]=je(be(l,N,P));return{c(){e=m("div"),s=m("div"),c=C(),o=m("div"),n=m("h3"),I=O(a),p=C(),g=m("span"),d=m("img"),u=C(),h=m("p"),v=O(i),b=C(),S=m("p"),S.innerHTML=G,D=C(),j=m("p");for(let P=0;P<E.length;P+=1)E[P].c();V=C(),this.h()},l(P){e=_(P,"DIV",{class:!0,style:!0});var T=k(e);s=_(T,"DIV",{class:!0}),k(s).forEach(y),c=A(T),o=_(T,"DIV",{class:!0});var w=k(o);n=_(w,"H3",{class:!0});var M=k(n);I=J(M,a),p=A(M),g=_(M,"SPAN",{});var B=k(g);d=_(B,"IMG",{src:!0,alt:!0,width:!0,class:!0}),B.forEach(y),M.forEach(y),u=A(w),h=_(w,"P",{class:!0});var z=k(h);v=J(z,i),z.forEach(y),b=A(w),S=_(w,"P",{class:!0,["data-svelte-h"]:!0}),se(S)!=="svelte-1rbsl10"&&(S.innerHTML=G),D=A(w),j=_(w,"P",{class:!0});var H=k(j);for(let q=0;q<E.length;q+=1)E[q].l(H);H.forEach(y),w.forEach(y),V=A(T),T.forEach(y),this.h()},h(){t(s,"class","project_image svelte-185ep8x"),L(d.src,f=l[1]+"/images/octocat.png")||t(d,"src",f),t(d,"alt","octocat"),t(d,"width","20px"),t(d,"class","svelte-185ep8x"),t(n,"class","svelte-185ep8x"),t(h,"class","svelte-185ep8x"),t(S,"class","svelte-185ep8x"),t(j,"class","svelte-185ep8x"),t(o,"class","project_body svelte-185ep8x"),t(e,"class","body_parts svelte-185ep8x"),W(e,"flex-direction",l[5]%2===1?"row-reverse":"row"),W(e,"margin-top",l[5]!==0?"50px":"0px")},m(P,T){$(P,e,T),r(e,s),r(e,c),r(e,o),r(o,n),r(n,I),r(n,p),r(n,g),r(g,d),r(o,u),r(o,h),r(h,v),r(o,b),r(o,S),r(o,D),r(o,j);for(let w=0;w<E.length;w+=1)E[w]&&E[w].m(j,null);r(e,V)},p(P,T){if(T&2&&!L(d.src,f=P[1]+"/images/octocat.png")&&t(d,"src",f),T&0){N=ie(P[3].stack);let w;for(w=0;w<N.length;w+=1){const M=be(P,N,w);E[w]?E[w].p(M,T):(E[w]=je(M),E[w].c(),E[w].m(j,null))}for(;w<E.length;w+=1)E[w].d(1);E.length=N.length}},d(P){P&&y(e),ve(E,P)}}}function ze(l){let e,s,c,o,n,a,I,p,g,d,f=ie(Ee.project),u=[];for(let h=0;h<f.length;h+=1)u[h]=ke(Ie(l,f,h));return{c(){e=m("div"),s=m("div"),c=m("img"),n=C(),a=m("div"),I=m("div"),p=C(),g=m("div"),d=m("div");for(let h=0;h<u.length;h+=1)u[h].c();this.h()},l(h){e=_(h,"DIV",{id:!0,"data-scroll":!0,class:!0});var i=k(e);s=_(i,"DIV",{class:!0});var v=k(s);c=_(v,"IMG",{src:!0,width:!0,alt:!0,class:!0}),n=A(v),a=_(v,"DIV",{class:!0});var b=k(a);I=_(b,"DIV",{class:!0,style:!0});var S=k(I);S.forEach(y),b.forEach(y),v.forEach(y),p=A(i),g=_(i,"DIV",{id:!0,class:!0});var G=k(g);d=_(G,"DIV",{id:!0,class:!0});var D=k(d);for(let j=0;j<u.length;j+=1)u[j].l(D);D.forEach(y),G.forEach(y),i.forEach(y),this.h()},h(){L(c.src,o=l[1]+"/images/projects_header.png")||t(c,"src",o),t(c,"width","275px"),t(c,"alt","project_intro"),t(c,"class","svelte-185ep8x"),t(I,"class","github_icon svelte-185ep8x"),W(I,"background-image","url('"+l[1]+"/images/octocat.png')"),t(a,"class","github_link svelte-185ep8x"),t(s,"class","intro_block svelte-185ep8x"),t(d,"id","content-holder"),t(d,"class","svelte-185ep8x"),t(g,"id","projects_floating_tab"),t(g,"class","svelte-185ep8x"),F(g,"full_width",l[0]>l[2]),F(g,"partial_width",l[0]<=l[2]),t(e,"id","projects"),t(e,"data-scroll",l[0]),t(e,"class","svelte-185ep8x")},m(h,i){$(h,e,i),r(e,s),r(s,c),r(s,n),r(s,a),r(a,I),r(e,p),r(e,g),r(g,d);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(d,null)},p(h,[i]){if(i&2&&!L(c.src,o=h[1]+"/images/projects_header.png")&&t(c,"src",o),i&2&&W(I,"background-image","url('"+h[1]+"/images/octocat.png')"),i&2){f=ie(Ee.project);let v;for(v=0;v<f.length;v+=1){const b=Ie(h,f,v);u[v]?u[v].p(b,i):(u[v]=ke(b),u[v].c(),u[v].m(d,null))}for(;v<u.length;v+=1)u[v].d(1);u.length=f.length}i&5&&F(g,"full_width",h[0]>h[2]),i&5&&F(g,"partial_width",h[0]<=h[2]),i&1&&t(e,"data-scroll",h[0])},i:K,o:K,d(h){h&&y(e),ve(u,h)}}}function He(l,e,s){let{scroll:c=0}=e,o=0,{path:n=""}=e;return Me(()=>{const a=document.getElementById("projects"),I=document.getElementsByTagName("body");s(0,c=I[0].scrollTop),s(2,o=a==null?void 0:a.offsetTop),console.log(a==null?void 0:a.offsetTop),console.log(c)}),l.$$set=a=>{"scroll"in a&&s(0,c=a.scroll),"path"in a&&s(1,n=a.path)},[c,n,o]}class Re extends ae{constructor(e){super(),re(this,e,He,ze,le,{scroll:0,path:1})}}function $e(l){let e,s,c,o,n,a,I,p,g,d,f,u,h,i=`<p class="svelte-1cdyvcj">I am a computer science
                    graduate, currently attending
                    the University of California,
                    Irvine. I have a Bachelors of Science
                    in Computer Science from UNLV and two
                    minors in mathematics and physics. I’ve
                    been programming since high school, and I
                    enjoy working at the lowest level of a 
                    computer, specifically O.S. and compilers.</p> <div id="education" class="svelte-1cdyvcj"><p class="svelte-1cdyvcj">University of Nevada, Las Vegas<br/>
                        GPA: 3.657<br/>
                        Bachelors in Computer Science<br/>
                        Minors in Physics and Mathematics<br/></p> <hr class="svelte-1cdyvcj"/> <p class="svelte-1cdyvcj">University of California, Irvine<br/>
                        GPA: 3.9<br/>
                        Masters in Computer Science</p></div>`,v,b,S,G,D,j,V;return{c(){e=m("div"),s=m("div"),c=C(),o=m("div"),n=m("img"),I=C(),p=m("div"),g=m("div"),d=m("img"),u=C(),h=m("div"),h.innerHTML=i,v=C(),b=m("img"),G=C(),D=m("div"),j=m("img"),this.h()},l(N){e=_(N,"DIV",{id:!0,class:!0});var E=k(e);s=_(E,"DIV",{id:!0,class:!0}),k(s).forEach(y),c=A(E),o=_(E,"DIV",{class:!0});var P=k(o);n=_(P,"IMG",{id:!0,src:!0,width:!0,alt:!0,class:!0}),P.forEach(y),I=A(E),p=_(E,"DIV",{id:!0,class:!0});var T=k(p);g=_(T,"DIV",{id:!0,class:!0});var w=k(g);d=_(w,"IMG",{src:!0,alt:!0,class:!0}),u=A(w),h=_(w,"DIV",{class:!0,["data-svelte-h"]:!0}),se(h)!=="svelte-1olwar1"&&(h.innerHTML=i),v=A(w),b=_(w,"IMG",{src:!0,alt:!0,class:!0}),w.forEach(y),T.forEach(y),G=A(E),D=_(E,"DIV",{class:!0});var M=k(D);j=_(M,"IMG",{id:!0,src:!0,width:!0,alt:!0,class:!0}),M.forEach(y),E.forEach(y),this.h()},h(){t(s,"id","picture_of_me"),t(s,"class","svelte-1cdyvcj"),t(n,"id","about_intro"),L(n.src,a=l[0]+"/images/about_header.png")||t(n,"src",a),t(n,"width","200px"),t(n,"alt","contact_header"),t(n,"class","svelte-1cdyvcj"),t(o,"class","surrounding_image_intros svelte-1cdyvcj"),L(d.src,f=l[0]+"/images/pattern.svg")||t(d,"src",f),t(d,"alt","pattern"),t(d,"class","svelte-1cdyvcj"),t(h,"class","content_container svelte-1cdyvcj"),L(b.src,S=l[0]+"/images/pattern.svg")||t(b,"src",S),t(b,"alt","pattern"),t(b,"class","svelte-1cdyvcj"),t(g,"id","content_area"),t(g,"class","svelte-1cdyvcj"),t(p,"id","surrounding_area"),t(p,"class","svelte-1cdyvcj"),t(j,"id","projects_intro"),L(j.src,V=l[0]+"/images/projects_header.png")||t(j,"src",V),t(j,"width","275px"),t(j,"alt","contact_header"),t(j,"class","svelte-1cdyvcj"),t(D,"class","surrounding_image_intros svelte-1cdyvcj"),t(e,"id","about"),t(e,"class","svelte-1cdyvcj")},m(N,E){$(N,e,E),r(e,s),r(e,c),r(e,o),r(o,n),r(e,I),r(e,p),r(p,g),r(g,d),r(g,u),r(g,h),r(g,v),r(g,b),r(e,G),r(e,D),r(D,j)},p(N,[E]){E&1&&!L(n.src,a=N[0]+"/images/about_header.png")&&t(n,"src",a),E&1&&!L(d.src,f=N[0]+"/images/pattern.svg")&&t(d,"src",f),E&1&&!L(b.src,S=N[0]+"/images/pattern.svg")&&t(b,"src",S),E&1&&!L(j.src,V=N[0]+"/images/projects_header.png")&&t(j,"src",V)},i:K,o:K,d(N){N&&y(e)}}}function Be(l,e,s){let{path:c=""}=e;return l.$$set=o=>{"path"in o&&s(0,c=o.path)},[c]}class Ue extends ae{constructor(e){super(),re(this,e,Be,$e,le,{path:0})}}function Oe(l){let e,s,c,o,n,a,I,p,g,d=":",f,u,h=l[3]<10?"0":"",i,v,b,S,G;return{c(){e=m("div"),s=m("p"),c=m("span"),o=O(l[0]),n=C(),a=m("span"),I=O(l[1]),p=C(),g=m("span"),g.textContent=d,f=C(),u=m("span"),i=O(h),v=O(l[3]),b=C(),S=m("span"),G=O(l[2]),this.h()},l(D){e=_(D,"DIV",{});var j=k(e);s=_(j,"P",{class:!0});var V=k(s);c=_(V,"SPAN",{class:!0});var N=k(c);o=J(N,l[0]),N.forEach(y),n=A(V),a=_(V,"SPAN",{class:!0});var E=k(a);I=J(E,l[1]),E.forEach(y),p=A(V),g=_(V,"SPAN",{class:!0,["data-svelte-h"]:!0}),se(g)!=="svelte-19v4cur"&&(g.textContent=d),f=A(V),u=_(V,"SPAN",{class:!0});var P=k(u);i=J(P,h),v=J(P,l[3]),P.forEach(y),b=A(V),S=_(V,"SPAN",{class:!0});var T=k(S);G=J(T,l[2]),T.forEach(y),V.forEach(y),j.forEach(y),this.h()},h(){t(c,"class","svelte-1vmh6yp"),t(a,"class","svelte-1vmh6yp"),t(g,"class","semi-colon svelte-1vmh6yp"),t(u,"class","svelte-1vmh6yp"),t(S,"class","svelte-1vmh6yp"),t(s,"class","svelte-1vmh6yp")},m(D,j){$(D,e,j),r(e,s),r(s,c),r(c,o),r(s,n),r(s,a),r(a,I),r(s,p),r(s,g),r(s,f),r(s,u),r(u,i),r(u,v),r(s,b),r(s,S),r(S,G)},p(D,[j]){j&1&&ne(o,D[0]),j&2&&ne(I,D[1]),j&8&&h!==(h=D[3]<10?"0":"")&&ne(i,h),j&8&&ne(v,D[3]),j&4&&ne(G,D[2])},i:K,o:K,d(D){D&&y(e)}}}function Je(l,e,s){let{otherRegion:c=0}=e,{region:o="Irvine"}=e,n=new Date;n.getDay();let a=n.getHours();a+=c;let I=a>12?"PM":"AM";a=a>12?a-12:a,n.getUTCFullYear();let p=n.getMinutes();return setInterval(()=>{s(3,p+=1),s(3,p=p==60?0:p),s(1,a=p==60?a+1:a),s(2,I=a>12?"PM":"AM"),s(1,a=a>12?a-12:a)},6e4),l.$$set=g=>{"otherRegion"in g&&s(4,c=g.otherRegion),"region"in g&&s(0,o=g.region)},[o,a,I,p,c]}class Se extends ae{constructor(e){super(),re(this,e,Je,Oe,le,{otherRegion:4,region:0})}}function Fe(l){let e,s,c,o,n,a,I,p,g,d,f,u,h="Hi,",i,v,b,S="my name is Kenny Weeks. ",G,D,j,V="Welcome to my  ...",N,E,P,T;return a=new Se({}),p=new Se({props:{otherRegion:10,region:"Bucharest"}}),{c(){e=m("div"),s=m("img"),o=C(),n=m("div"),Q(a.$$.fragment),I=C(),Q(p.$$.fragment),g=C(),d=m("div"),f=m("h3"),u=m("span"),u.textContent=h,i=m("br"),v=C(),b=m("span"),b.textContent=S,G=m("br"),D=C(),j=m("span"),j.textContent=V,N=C(),E=m("img"),this.h()},l(w){e=_(w,"DIV",{id:!0,class:!0});var M=k(e);s=_(M,"IMG",{id:!0,alt:!0,src:!0,width:!0,class:!0}),o=A(M),n=_(M,"DIV",{id:!0,class:!0});var B=k(n);X(a.$$.fragment,B),I=A(B),X(p.$$.fragment,B),B.forEach(y),g=A(M),d=_(M,"DIV",{id:!0,class:!0});var z=k(d);f=_(z,"H3",{id:!0,style:!0,class:!0});var H=k(f);u=_(H,"SPAN",{id:!0,class:!0,["data-svelte-h"]:!0}),se(u)!=="svelte-x1wix2"&&(u.textContent=h),i=_(H,"BR",{}),v=A(H),b=_(H,"SPAN",{id:!0,class:!0,["data-svelte-h"]:!0}),se(b)!=="svelte-11ltsnn"&&(b.textContent=S),G=_(H,"BR",{}),D=A(H),j=_(H,"SPAN",{id:!0,class:!0,["data-svelte-h"]:!0}),se(j)!=="svelte-258gop"&&(j.textContent=V),H.forEach(y),N=A(z),E=_(z,"IMG",{id:!0,src:!0,alt:!0,class:!0}),z.forEach(y),M.forEach(y),this.h()},h(){t(s,"id","wolf"),t(s,"alt","wolf"),L(s.src,c=l[0]+"/images/wolf.png")||t(s,"src",c),t(s,"width","80px"),t(s,"class","svelte-amu7ty"),t(n,"id","clocks"),t(n,"class","svelte-amu7ty"),F(n,"layout_1_clocks",l[1]>l[2]),F(n,"layout_2_clocks",l[1]<=l[2]),t(u,"id","hi"),t(u,"class","svelte-amu7ty"),t(b,"id","my"),t(b,"class","svelte-amu7ty"),t(j,"id","welcome"),t(j,"class","svelte-amu7ty"),t(f,"id","intro_text"),W(f,"font-size",l[2]<=600?"30px":"5vw"),t(f,"class","svelte-amu7ty"),t(E,"id","portfolio_text"),L(E.src,P=l[0]+"/images/portfolio_title"+(l[1]>l[2]?"_large":"_small")+".svg")||t(E,"src",P),t(E,"alt","portfolio_text"),t(E,"class","svelte-amu7ty"),t(d,"id","intro"),t(d,"class","svelte-amu7ty"),F(d,"layout_2_intro",l[1]<=l[2]),F(d,"layout_1_intro",l[1]>l[2]),t(e,"id","landing"),t(e,"class","svelte-amu7ty")},m(w,M){$(w,e,M),r(e,s),r(e,o),r(e,n),Z(a,n,null),r(n,I),Z(p,n,null),r(e,g),r(e,d),r(d,f),r(f,u),r(f,i),r(f,v),r(f,b),r(f,G),r(f,D),r(f,j),r(d,N),r(d,E),T=!0},p(w,[M]){(!T||M&1&&!L(s.src,c=w[0]+"/images/wolf.png"))&&t(s,"src",c),(!T||M&6)&&F(n,"layout_1_clocks",w[1]>w[2]),(!T||M&6)&&F(n,"layout_2_clocks",w[1]<=w[2]),(!T||M&4)&&W(f,"font-size",w[2]<=600?"30px":"5vw"),(!T||M&7&&!L(E.src,P=w[0]+"/images/portfolio_title"+(w[1]>w[2]?"_large":"_small")+".svg"))&&t(E,"src",P),(!T||M&6)&&F(d,"layout_2_intro",w[1]<=w[2]),(!T||M&6)&&F(d,"layout_1_intro",w[1]>w[2])},i(w){T||(x(a.$$.fragment,w),x(p.$$.fragment,w),T=!0)},o(w){ee(a.$$.fragment,w),ee(p.$$.fragment,w),T=!1},d(w){w&&y(e),te(a),te(p)}}}function Ke(l,e,s){let{path:c=""}=e,{screenWidth:o}=e,{screenHeight:n}=e;return Me(()=>{let a=document.getElementById("hi"),I=document.getElementById("my"),p=document.getElementById("welcome"),g=document.getElementById("portfolio_text");setTimeout(()=>{a.style.opacity=1},500),setTimeout(()=>{I.style.opacity=1},1400),setTimeout(()=>{p.style.opacity=1},2500),setTimeout(()=>{g.style.opacity=1},3600)}),l.$$set=a=>{"path"in a&&s(0,c=a.path),"screenWidth"in a&&s(1,o=a.screenWidth),"screenHeight"in a&&s(2,n=a.screenHeight)},[c,o,n]}class Ye extends ae{constructor(e){super(),re(this,e,Ke,Fe,le,{path:0,screenWidth:1,screenHeight:2})}}function qe(l){let e,s,c,o,n,a,I,p,g,d,f,u,h;return Ce(l[3]),s=new Ne({}),o=new Ye({props:{path:oe,screenWidth:l[0],screenHeight:l[1]}}),a=new Ue({props:{path:oe}}),p=new Re({props:{scroll:l[2],path:oe}}),d=new Le({props:{path:oe,screenWidth:l[0]}}),{c(){e=C(),Q(s.$$.fragment),c=C(),Q(o.$$.fragment),n=C(),Q(a.$$.fragment),I=C(),Q(p.$$.fragment),g=C(),Q(d.$$.fragment)},l(i){e=A(i),X(s.$$.fragment,i),c=A(i),X(o.$$.fragment,i),n=A(i),X(a.$$.fragment,i),I=A(i),X(p.$$.fragment,i),g=A(i),X(d.$$.fragment,i)},m(i,v){$(i,e,v),Z(s,i,v),$(i,c,v),Z(o,i,v),$(i,n,v),Z(a,i,v),$(i,I,v),Z(p,i,v),$(i,g,v),Z(d,i,v),f=!0,u||(h=[ce(window,"resize",l[3]),ce(document.body,"scroll",l[4])],u=!0)},p(i,[v]){const b={};v&1&&(b.screenWidth=i[0]),v&2&&(b.screenHeight=i[1]),o.$set(b);const S={};v&4&&(S.scroll=i[2]),p.$set(S);const G={};v&1&&(G.screenWidth=i[0]),d.$set(G)},i(i){f||(x(s.$$.fragment,i),x(o.$$.fragment,i),x(a.$$.fragment,i),x(p.$$.fragment,i),x(d.$$.fragment,i),f=!0)},o(i){ee(s.$$.fragment,i),ee(o.$$.fragment,i),ee(a.$$.fragment,i),ee(p.$$.fragment,i),ee(d.$$.fragment,i),f=!1},d(i){i&&(y(e),y(c),y(n),y(I),y(g)),te(s,i),te(o,i),te(a,i),te(p,i),te(d,i),u=!1,Pe(h)}}}function Qe(l,e,s){let c,o,n=0;function a(){s(0,c=window.innerWidth),s(1,o=window.innerHeight)}return[c,o,n,a,p=>{s(2,n=p.target.scrollTop)}]}class et extends ae{constructor(e){super(),re(this,e,Qe,qe,le,{})}}export{et as component};
