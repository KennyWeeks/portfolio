import{s as Te,n as ue,r as Xe,f as J,o as Ye,b as Fe,h as Ke,i as _t}from"../chunks/scheduler.aa581e31.js";import{S as qe,i as Pe,g as h,s as E,h as v,j as b,f as u,c as y,k as t,l as ee,a as G,x as i,y as be,z as Ve,m as ce,n as oe,A as pe,B as ke,e as et,r as Se,u as Ce,v as He,d as Me,t as Ae,w as Le}from"../chunks/index.6f96b1e5.js";import{b as Re}from"../chunks/paths.e65c6e40.js";function fe(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function tt(s,e,l){const r=s.slice();return r[8]=e[l],r}function lt(s){let e,l,r=s[8]+"",c,a,n;return{c(){e=h("li"),l=h("a"),c=ce(r),this.h()},l(o){e=v(o,"LI",{class:!0});var d=b(e);l=v(d,"A",{href:!0,class:!0});var g=b(l);c=oe(g,r),g.forEach(u),d.forEach(u),this.h()},h(){t(l,"href","#"+s[8]),t(l,"class","svelte-c1gpx"),t(e,"class","svelte-c1gpx")},m(o,d){G(o,e,d),i(e,l),i(l,c),a||(n=be(l,"click",s[7]),a=!0)},p:ue,d(o){o&&u(e),a=!1,n()}}}function gt(s){let e,l,r,c,a,n,o,d,g,j=fe(s[3]),m=[];for(let f=0;f<j.length;f+=1)m[f]=lt(tt(s,j,f));return{c(){e=h("button"),l=h("div"),r=E(),c=h("div"),a=E(),n=h("div"),o=h("ul");for(let f=0;f<m.length;f+=1)m[f].c();this.h()},l(f){e=v(f,"BUTTON",{id:!0,class:!0});var w=b(e);l=v(w,"DIV",{class:!0}),b(l).forEach(u),r=y(w),c=v(w,"DIV",{class:!0,style:!0}),b(c).forEach(u),w.forEach(u),a=y(f),n=v(f,"DIV",{id:!0,style:!0,class:!0});var I=b(n);o=v(I,"UL",{id:!0,style:!0,class:!0});var _=b(o);for(let T=0;T<m.length;T+=1)m[T].l(_);_.forEach(u),I.forEach(u),this.h()},h(){t(l,"class","menu_bar svelte-c1gpx"),t(c,"class","menu_bar svelte-c1gpx"),ee(c,"margin-left",s[0]+"%"),ee(c,"width",pt+"%"),t(e,"id","menu"),t(e,"class","svelte-c1gpx"),t(o,"id","menu-options"),ee(o,"visibility",s[2]=="100"?"visible":"hidden"),t(o,"class","svelte-c1gpx"),t(n,"id","background_menu"),ee(n,"width",s[2]+(s[2]=="100"?"vw":"px")),ee(n,"height",s[2]+(s[2]=="100"?"vh":"px")),ee(n,"background-color",s[2]=="100"?"#f2f2f2":"transparent"),ee(n,"top",s[2]=="100"?"0px":"15px"),ee(n,"right",s[2]=="100"?"0px":"15px"),t(n,"class","svelte-c1gpx")},m(f,w){G(f,e,w),i(e,l),i(e,r),i(e,c),G(f,a,w),G(f,n,w),i(n,o);for(let I=0;I<m.length;I+=1)m[I]&&m[I].m(o,null);d||(g=[be(e,"mouseenter",s[4]),be(e,"mouseleave",s[5]),be(e,"click",s[6])],d=!0)},p(f,[w]){if(w&1&&ee(c,"margin-left",f[0]+"%"),w&15){j=fe(f[3]);let I;for(I=0;I<j.length;I+=1){const _=tt(f,j,I);m[I]?m[I].p(_,w):(m[I]=lt(_),m[I].c(),m[I].m(o,null))}for(;I<m.length;I+=1)m[I].d(1);m.length=j.length}w&4&&ee(o,"visibility",f[2]=="100"?"visible":"hidden"),w&4&&ee(n,"width",f[2]+(f[2]=="100"?"vw":"px")),w&4&&ee(n,"height",f[2]+(f[2]=="100"?"vh":"px")),w&4&&ee(n,"background-color",f[2]=="100"?"#f2f2f2":"transparent"),w&4&&ee(n,"top",f[2]=="100"?"0px":"15px"),w&4&&ee(n,"right",f[2]=="100"?"0px":"15px")},i:ue,o:ue,d(f){f&&(u(e),u(a),u(n)),Ve(m,f),d=!1,Xe(g)}}}let pt=50;function mt(s,e,l){let r=50,c=-1,a="20";return[r,c,a,["landing","about","projects","contacts"],()=>{l(0,r=25)},()=>{console.log(r),l(0,r=c===-1?50:0)},()=>{l(0,r=c===-1?0:50),l(1,c*=-1),l(2,a=a=="20"?"100":"20")},()=>{l(0,r=c===-1?0:50),l(1,c*=-1),l(2,a=a=="20"?"100":"20")}]}class bt extends qe{constructor(e){super(),Pe(this,e,mt,gt,Te,{})}}function kt(s){let e,l,r="contact",c,a,n="I am currently not accepting any freelance work, but feel free to message me and view other projects.",o,d,g,j,m,f,w,I,_,T,V,U,B,p,H,N,P,C,S,K,A,L,R,O,te;return{c(){e=h("div"),l=h("h3"),l.textContent=r,c=E(),a=h("p"),a.textContent=n,o=E(),d=h("ul"),g=h("li"),j=h("span"),m=h("img"),w=ce("LinkedIN"),I=E(),_=h("li"),T=h("span"),V=h("img"),B=ce("Github"),p=E(),H=h("li"),N=h("span"),P=h("img"),S=ce("Resume"),K=E(),A=h("li"),L=h("span"),R=h("img"),te=ce("Email"),this.h()},l(W){e=v(W,"DIV",{id:!0,class:!0});var M=b(e);l=v(M,"H3",{class:!0,"data-svelte-h":!0}),pe(l)!=="svelte-pzabku"&&(l.textContent=r),c=y(M),a=v(M,"P",{class:!0,"data-svelte-h":!0}),pe(a)!=="svelte-1i3lmvj"&&(a.textContent=n),o=y(M),d=v(M,"UL",{class:!0});var z=b(d);g=v(z,"LI",{class:!0});var le=b(g);j=v(le,"SPAN",{class:!0});var Q=b(j);m=v(Q,"IMG",{src:!0,alt:!0,width:!0}),Q.forEach(u),w=oe(le,"LinkedIN"),le.forEach(u),I=y(z),_=v(z,"LI",{class:!0});var ve=b(_);T=v(ve,"SPAN",{class:!0});var se=b(T);V=v(se,"IMG",{src:!0,alt:!0,width:!0}),se.forEach(u),B=oe(ve,"Github"),ve.forEach(u),p=y(z),H=v(z,"LI",{class:!0});var ie=b(H);N=v(ie,"SPAN",{class:!0});var ae=b(N);P=v(ae,"IMG",{src:!0,alt:!0,width:!0}),ae.forEach(u),S=oe(ie,"Resume"),ie.forEach(u),K=y(z),A=v(z,"LI",{class:!0});var X=b(A);L=v(X,"SPAN",{class:!0});var he=b(L);R=v(he,"IMG",{src:!0,alt:!0,width:!0}),he.forEach(u),te=oe(X,"Email"),X.forEach(u),z.forEach(u),M.forEach(u),this.h()},h(){t(l,"class","svelte-gobqkh"),t(a,"class","svelte-gobqkh"),J(m.src,f=s[0]+"/images/linkedin"+(s[1]<=1049?"_off_white":"")+".png")||t(m,"src",f),t(m,"alt","linkedin"),t(m,"width","20"),t(j,"class","svelte-gobqkh"),t(g,"class","svelte-gobqkh"),J(V.src,U=s[0]+"/images/octocat"+(s[1]<=1049?"":"_off_black")+".png")||t(V,"src",U),t(V,"alt","github"),t(V,"width","25"),t(T,"class","svelte-gobqkh"),t(_,"class","svelte-gobqkh"),J(P.src,C=s[0]+"/images/resume"+(s[1]<=1049?"_off_white":"")+".png")||t(P,"src",C),t(P,"alt","resume"),t(P,"width","20"),t(N,"class","svelte-gobqkh"),t(H,"class","svelte-gobqkh"),J(R.src,O=s[0]+"/images/gmail"+(s[1]<=1049?"_off_white":"")+".png")||t(R,"src",O),t(R,"alt","gmail"),t(R,"width","20"),t(L,"class","svelte-gobqkh"),t(A,"class","svelte-gobqkh"),t(d,"class","svelte-gobqkh"),t(e,"id","contacts"),t(e,"class","svelte-gobqkh")},m(W,M){G(W,e,M),i(e,l),i(e,c),i(e,a),i(e,o),i(e,d),i(d,g),i(g,j),i(j,m),i(g,w),i(d,I),i(d,_),i(_,T),i(T,V),i(_,B),i(d,p),i(d,H),i(H,N),i(N,P),i(H,S),i(d,K),i(d,A),i(A,L),i(L,R),i(A,te)},p(W,[M]){M&3&&!J(m.src,f=W[0]+"/images/linkedin"+(W[1]<=1049?"_off_white":"")+".png")&&t(m,"src",f),M&3&&!J(V.src,U=W[0]+"/images/octocat"+(W[1]<=1049?"":"_off_black")+".png")&&t(V,"src",U),M&3&&!J(P.src,C=W[0]+"/images/resume"+(W[1]<=1049?"_off_white":"")+".png")&&t(P,"src",C),M&3&&!J(R.src,O=W[0]+"/images/gmail"+(W[1]<=1049?"_off_white":"")+".png")&&t(R,"src",O)},i:ue,o:ue,d(W){W&&u(e)}}}function wt(s,e,l){let{path:r=""}=e,{screenWidth:c}=e;return s.$$set=a=>{"path"in a&&l(0,r=a.path),"screenWidth"in a&&l(1,c=a.screenWidth)},[r,c]}class It extends qe{constructor(e){super(),Pe(this,e,wt,kt,Te,{path:0,screenWidth:1})}}const Et=[{title:"ThisMuch",date:"Jan 2023 - Jun 2023",description:"A react native app that allows users to take pictures of there receipts, and divide them with friends.",stack:["React Native","TypeScript","Nativewind","PlanetScale","MySQL","AWS","Python3"]},{title:"Personal Portfolio",date:"June 2023 - July 2023",description:"My personal portfolio, where I will keep my projects hosted. I really needed one",stack:["SvelteKit","SASS","TypeScript","Github Pages"]},{title:"Demerit Tool",date:"Dec 2023",description:"This is a tool that I built for a friend that created a simulated version of his fire academy demerit slip. It allowed him to edit it anywhere, and print it anywhere.",stack:["SvelteJS","SASS","Javascript","Github Pages"]}],st={project:Et};Promise.resolve();function it(s,e,l){const r=s.slice();return r[10]=e[l],r[12]=l,r}function at(s,e,l){const r=s.slice();return r[13]=e[l],r[15]=l,r}function yt(s){let e,l,r=s[3][s[12]]+"",c;return{c(){e=h("button"),l=ce("stack "),c=ce(r)},l(a){e=v(a,"BUTTON",{});var n=b(e);l=oe(n,"stack "),c=oe(n,r),n.forEach(u)},m(a,n){G(a,e,n),i(e,l),i(e,c)},p:ue,d(a){a&&u(e)}}}function Dt(s){let e,l=fe(s[10].stack),r=[];for(let c=0;c<l.length;c+=1)r[c]=nt(at(s,l,c));return{c(){for(let c=0;c<r.length;c+=1)r[c].c();e=et()},l(c){for(let a=0;a<r.length;a+=1)r[a].l(c);e=et()},m(c,a){for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(c,a);G(c,e,a)},p(c,a){if(a&0){l=fe(c[10].stack);let n;for(n=0;n<l.length;n+=1){const o=at(c,l,n);r[n]?r[n].p(o,a):(r[n]=nt(o),r[n].c(),r[n].m(e.parentNode,e))}for(;n<r.length;n+=1)r[n].d(1);r.length=l.length}},d(c){c&&u(e),Ve(r,c)}}}function nt(s){let e,l=s[13]+"",r;return{c(){e=h("div"),r=ce(l),this.h()},l(c){e=v(c,"DIV",{class:!0});var a=b(e);r=oe(a,l),a.forEach(u),this.h()},h(){t(e,"class","tools svelte-1jfqpcm")},m(c,a){G(c,e,a),i(e,r)},p:ue,d(c){c&&u(e)}}}function rt(s){let e,l,r='<div class="main_image svelte-1jfqpcm"></div> <div class="move_right svelte-1jfqpcm"></div> <div class="side_images_container svelte-1jfqpcm"><div class="side_images svelte-1jfqpcm"><div class="side_act_img svelte-1jfqpcm"></div> <div class="side_act_img svelte-1jfqpcm"></div> <div class="side_act_img svelte-1jfqpcm"></div> <div class="side_act_img svelte-1jfqpcm"></div></div></div>',c,a,n,o,d=s[10].title+"",g,j,m,f,w,I,_,T=s[10].description+"",V,U,B,p;function H(C,S){return C[3][C[12]]===!1?Dt:yt}let P=H(s)(s);return{c(){e=h("div"),l=h("div"),l.innerHTML=r,c=E(),a=h("div"),n=h("div"),o=h("h3"),g=ce(d),j=E(),m=h("div"),f=h("img"),I=E(),_=h("p"),V=ce(T),U=E(),B=h("div"),P.c(),p=E(),this.h()},l(C){e=v(C,"DIV",{class:!0,style:!0});var S=b(e);l=v(S,"DIV",{class:!0,"data-svelte-h":!0}),pe(l)!=="svelte-1o8v4rt"&&(l.innerHTML=r),c=y(S),a=v(S,"DIV",{class:!0,style:!0});var K=b(a);n=v(K,"DIV",{class:!0});var A=b(n);o=v(A,"H3",{class:!0});var L=b(o);g=oe(L,d),L.forEach(u),j=y(A),m=v(A,"DIV",{class:!0});var R=b(m);f=v(R,"IMG",{src:!0,alt:!0,width:!0}),R.forEach(u),A.forEach(u),I=y(K),_=v(K,"P",{class:!0});var O=b(_);V=oe(O,T),O.forEach(u),U=y(K),B=v(K,"DIV",{class:!0});var te=b(B);P.l(te),te.forEach(u),K.forEach(u),p=y(S),S.forEach(u),this.h()},h(){t(l,"class","project_image svelte-1jfqpcm"),t(o,"class","svelte-1jfqpcm"),J(f.src,w=s[1]+"/images/octocat.png")||t(f,"src",w),t(f,"alt","octocat"),t(f,"width","25px"),t(m,"class","option_buttons svelte-1jfqpcm"),t(n,"class","body_title svelte-1jfqpcm"),t(_,"class","desc svelte-1jfqpcm"),t(B,"class","svelte-1jfqpcm"),t(a,"class","project_body svelte-1jfqpcm"),t(a,"style",(s[12]%2==0?"right:0px;":"left:0px;")+";"),t(e,"class","body_parts svelte-1jfqpcm"),ee(e,"flex-direction",s[12]%2===1?"row-reverse":"row"),ee(e,"margin-top",s[12]!==0?"80px":"0px")},m(C,S){G(C,e,S),i(e,l),i(e,c),i(e,a),i(a,n),i(n,o),i(o,g),i(n,j),i(n,m),i(m,f),i(a,I),i(a,_),i(_,V),i(a,U),i(a,B),P.m(B,null),i(e,p)},p(C,S){S&2&&!J(f.src,w=C[1]+"/images/octocat.png")&&t(f,"src",w),P.p(C,S)},d(C){C&&u(e),P.d()}}}function jt(s){let e,l,r,c=fe(st.project),a=[];for(let n=0;n<c.length;n+=1)a[n]=rt(it(s,c,n));return{c(){e=h("div"),l=h("div"),r=h("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=v(n,"DIV",{id:!0,class:!0});var o=b(e);l=v(o,"DIV",{id:!0,class:!0});var d=b(l);r=v(d,"DIV",{id:!0,class:!0});var g=b(r);for(let j=0;j<a.length;j+=1)a[j].l(g);g.forEach(u),d.forEach(u),o.forEach(u),this.h()},h(){t(r,"id","content-holder"),t(r,"class","svelte-1jfqpcm"),t(l,"id","projects_floating_tab"),t(l,"class","svelte-1jfqpcm"),ke(l,"full_width",s[0]>ze),ke(l,"partial_width",s[0]<=ze),t(e,"id","projects"),t(e,"class","svelte-1jfqpcm")},m(n,o){G(n,e,o),i(e,l),i(l,r);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(r,null);s[4](e)},p(n,[o]){if(o&10){c=fe(st.project);let d;for(d=0;d<c.length;d+=1){const g=it(n,c,d);a[d]?a[d].p(g,o):(a[d]=rt(g),a[d].c(),a[d].m(r,null))}for(;d<a.length;d+=1)a[d].d(1);a.length=c.length}o&1&&ke(l,"full_width",n[0]>ze),o&1&&ke(l,"partial_width",n[0]<=ze)},i:ue,o:ue,d(n){n&&u(e),Ve(a,n),s[4](null)}}}let ze=0;function Vt(s,e,l){let{scroll:r=0}=e,{path:c=""}=e,a=[!1,!1,!1];Array(a.length);let n,o={root:null,margin:"0px",threshold:.5};Ye(()=>{let g=new IntersectionObserver((m,f)=>{m.forEach(w=>{w.isIntersecting?w.target.style.opacity=1:console.log("Not there")})},o);document.querySelectorAll(".body_parts").forEach(m=>{g.observe(m)})});function d(g){Fe[g?"unshift":"push"](()=>{n=g,l(2,n)})}return s.$$set=g=>{"scroll"in g&&l(0,r=g.scroll),"path"in g&&l(1,c=g.path)},[r,c,n,a,d]}class Tt extends qe{constructor(e){super(),Pe(this,e,Vt,jt,Te,{scroll:0,path:1})}}const qt=["C","C++","Java","GoLang"],Pt=["Python","ReactJS","Svelte","Javascript","PHP"],St=["Adobe Illustrator","Adobe Photoshop","Adobe Premier","Figma"],je={programming_languages:qt,scripting_languages:Pt,design_tools:St};function ct(s,e,l){const r=s.slice();return r[5]=e[l],r}function ot(s,e,l){const r=s.slice();return r[5]=e[l],r}function dt(s,e,l){const r=s.slice();return r[5]=e[l],r}function ut(s){let e,l,r=s[5]+"",c,a;return{c(){e=h("div"),l=h("p"),c=ce(r),a=E(),this.h()},l(n){e=v(n,"DIV",{class:!0});var o=b(e);l=v(o,"P",{class:!0});var d=b(l);c=oe(d,r),d.forEach(u),a=y(o),o.forEach(u),this.h()},h(){t(l,"class","individual-skill svelte-akx6al"),t(e,"class","individual-skill-button svelte-akx6al")},m(n,o){G(n,e,o),i(e,l),i(l,c),i(e,a)},p:ue,d(n){n&&u(e)}}}function ht(s){let e,l,r=s[5]+"",c,a;return{c(){e=h("div"),l=h("p"),c=ce(r),a=E(),this.h()},l(n){e=v(n,"DIV",{class:!0});var o=b(e);l=v(o,"P",{class:!0});var d=b(l);c=oe(d,r),d.forEach(u),a=y(o),o.forEach(u),this.h()},h(){t(l,"class","individual-skill svelte-akx6al"),t(e,"class","individual-skill-button svelte-akx6al")},m(n,o){G(n,e,o),i(e,l),i(l,c),i(e,a)},p:ue,d(n){n&&u(e)}}}function vt(s){let e,l,r=s[5]+"",c,a;return{c(){e=h("div"),l=h("p"),c=ce(r),a=E(),this.h()},l(n){e=v(n,"DIV",{class:!0});var o=b(e);l=v(o,"P",{class:!0});var d=b(l);c=oe(d,r),d.forEach(u),a=y(o),o.forEach(u),this.h()},h(){t(l,"class","individual-skill svelte-akx6al"),t(e,"class","individual-skill-button svelte-akx6al")},m(n,o){G(n,e,o),i(e,l),i(l,c),i(e,a)},p:ue,d(n){n&&u(e)}}}function Ct(s){let e,l,r,c,a,n,o,d,g=`<div id="picture" class="svelte-akx6al"></div> <p class="svelte-akx6al">I am a computer science
                    graduate, currently attending
                    the University of California,
                    Irvine. I have a Bachelors of Science
                    in Computer Science from UNLV and two
                    minors in mathematics and physics. I’ve
                    been programming since high school, and I
                    enjoy working at the lowest level of a 
                    computer, specifically O.S. and compilers.</p>`,j,m,f,w,I,_,T,V,U='<span class="university svelte-akx6al">University of Nevada, Las Vegas</span><br/> <span class="gpa svelte-akx6al">GPA: 3.657</span><br/> <span class="major svelte-akx6al">Bachelors in Computer Science</span><br/> <span class="minor svelte-akx6al">Minors in Physics and Mathematics</span><br/>',B,p,H='<div class="in_ind_edu svelte-akx6al"><p class="svelte-akx6al"><span class="university svelte-akx6al">University of California, Irvine</span><br/> <span class="gpa svelte-akx6al">GPA: 3.9</span><br/> <span class="major svelte-akx6al">Masters in Computer Science</span></p></div>',N,P,C,S,K,A,L,R,O,te,W,M,z,le="compiled languages",Q,ve,se,ie,ae,X,he,q="Scripting languages",x,Ie,de,F,ne,we="Design tools",Qe,Ee=fe(je.programming_languages),Y=[];for(let D=0;D<Ee.length;D+=1)Y[D]=ut(dt(s,Ee,D));let ye=fe(je.scripting_languages),Z=[];for(let D=0;D<ye.length;D+=1)Z[D]=ht(ot(s,ye,D));let De=fe(je.design_tools),$=[];for(let D=0;D<De.length;D+=1)$[D]=vt(ct(s,De,D));return{c(){e=h("div"),l=h("div"),r=h("div"),c=h("img"),n=E(),o=h("div"),d=h("div"),d.innerHTML=g,j=E(),m=h("div"),f=h("div"),w=h("div"),I=h("img"),T=E(),V=h("p"),V.innerHTML=U,B=E(),p=h("div"),p.innerHTML=H,N=E(),P=h("div"),C=h("img"),K=E(),A=h("img"),R=E(),O=h("div"),te=h("div"),W=E(),M=h("div"),z=h("h3"),z.textContent=le,Q=E();for(let D=0;D<Y.length;D+=1)Y[D].c();ve=E(),se=h("div"),ie=h("div"),ae=E(),X=h("div"),he=h("h3"),he.textContent=q,x=E();for(let D=0;D<Z.length;D+=1)Z[D].c();Ie=E(),de=h("div"),F=h("div"),ne=h("h3"),ne.textContent=we,Qe=E();for(let D=0;D<$.length;D+=1)$[D].c();this.h()},l(D){e=v(D,"DIV",{id:!0,class:!0});var re=b(e);l=v(re,"DIV",{id:!0,class:!0});var k=b(l);r=v(k,"DIV",{id:!0,class:!0});var _e=b(r);c=v(_e,"IMG",{src:!0,alt:!0,class:!0}),_e.forEach(u),n=y(k),o=v(k,"DIV",{id:!0,class:!0});var xe=b(o);d=v(xe,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),pe(d)!=="svelte-15xxsno"&&(d.innerHTML=g),j=y(xe),m=v(xe,"DIV",{id:!0,class:!0});var We=b(m);f=v(We,"DIV",{class:!0});var Ze=b(f);w=v(Ze,"DIV",{class:!0});var Ge=b(w);I=v(Ge,"IMG",{src:!0,width:!0,alt:!0,class:!0}),T=y(Ge),V=v(Ge,"P",{class:!0,"data-svelte-h":!0}),pe(V)!=="svelte-1vrx1ux"&&(V.innerHTML=U),Ge.forEach(u),Ze.forEach(u),B=y(We),p=v(We,"DIV",{class:!0,"data-svelte-h":!0}),pe(p)!=="svelte-s4p050"&&(p.innerHTML=H),We.forEach(u),xe.forEach(u),N=y(k),P=v(k,"DIV",{id:!0,class:!0});var me=b(P);C=v(me,"IMG",{src:!0,height:!0,alt:!0,class:!0}),K=y(me),A=v(me,"IMG",{src:!0,width:!0,alt:!0,class:!0}),R=y(me),O=v(me,"DIV",{id:!0,class:!0});var Ne=b(O);te=v(Ne,"DIV",{class:!0}),b(te).forEach(u),W=y(Ne),M=v(Ne,"DIV",{class:!0});var Be=b(M);z=v(Be,"H3",{class:!0,"data-svelte-h":!0}),pe(z)!=="svelte-2twwtk"&&(z.textContent=le),Q=y(Be);for(let ge=0;ge<Y.length;ge+=1)Y[ge].l(Be);Be.forEach(u),Ne.forEach(u),ve=y(me),se=v(me,"DIV",{id:!0,class:!0});var Je=b(se);ie=v(Je,"DIV",{class:!0}),b(ie).forEach(u),ae=y(Je),X=v(Je,"DIV",{class:!0});var Ue=b(X);he=v(Ue,"H3",{class:!0,"data-svelte-h":!0}),pe(he)!=="svelte-1w2mk64"&&(he.textContent=q),x=y(Ue);for(let ge=0;ge<Z.length;ge+=1)Z[ge].l(Ue);Ue.forEach(u),Je.forEach(u),Ie=y(me),de=v(me,"DIV",{id:!0,class:!0});var $e=b(de);F=v($e,"DIV",{class:!0});var Oe=b(F);ne=v(Oe,"H3",{class:!0,"data-svelte-h":!0}),pe(ne)!=="svelte-9rx34d"&&(ne.textContent=we),Qe=y(Oe);for(let ge=0;ge<$.length;ge+=1)$[ge].l(Oe);Oe.forEach(u),$e.forEach(u),me.forEach(u),k.forEach(u),re.forEach(u),this.h()},h(){J(c.src,a=s[0]+"/images/about_ring.png")||t(c,"src",a),t(c,"alt","about ring"),t(c,"class","svelte-akx6al"),t(r,"id","about_image"),t(r,"class","svelte-akx6al"),t(d,"id","about-summary"),t(d,"class","svelte-akx6al"),J(I.src,_=s[0]+"/images/education.png")||t(I,"src",_),t(I,"width","200"),t(I,"alt","education-png-label"),t(I,"class","svelte-akx6al"),t(V,"class","svelte-akx6al"),t(w,"class","in_ind_edu svelte-akx6al"),t(f,"class","individual-edu svelte-akx6al"),t(p,"class","individual-edu svelte-akx6al"),t(m,"id","education"),t(m,"class","svelte-akx6al"),t(o,"id","about-summary-and-edu"),t(o,"class","svelte-akx6al"),J(C.src,S=s[0]+"/images/skills.png")||t(C,"src",S),t(C,"height","250"),t(C,"alt","skill-png-label"),t(C,"class","svelte-akx6al"),J(A.src,L=s[0]+"/images/skill_sideways.png")||t(A,"src",L),t(A,"width","130"),t(A,"alt","skill-sideways-label"),t(A,"class","svelte-akx6al"),t(te,"class","vert-divide svelte-akx6al"),t(z,"class","svelte-akx6al"),t(M,"class","individual-skill-contain svelte-akx6al"),t(O,"id","compiled"),t(O,"class","skills-body svelte-akx6al"),t(ie,"class","vert-divide svelte-akx6al"),t(he,"class","svelte-akx6al"),t(X,"class","individual-skill-contain svelte-akx6al"),t(se,"id","scripting"),t(se,"class","skills-body svelte-akx6al"),t(ne,"class","svelte-akx6al"),t(F,"class","individual-skill-contain svelte-akx6al"),t(de,"id","tools"),t(de,"class","skills-body svelte-akx6al"),t(P,"id","skills"),t(P,"class","svelte-akx6al"),t(l,"id","about-content-area"),t(l,"class","svelte-akx6al"),t(e,"id","about"),t(e,"class","svelte-akx6al")},m(D,re){G(D,e,re),i(e,l),i(l,r),i(r,c),i(l,n),i(l,o),i(o,d),s[3](d),i(o,j),i(o,m),i(m,f),i(f,w),i(w,I),i(w,T),i(w,V),i(m,B),i(m,p),i(l,N),i(l,P),i(P,C),i(P,K),i(P,A),i(P,R),i(P,O),i(O,te),i(O,W),i(O,M),i(M,z),i(M,Q);for(let k=0;k<Y.length;k+=1)Y[k]&&Y[k].m(M,null);i(P,ve),i(P,se),i(se,ie),i(se,ae),i(se,X),i(X,he),i(X,x);for(let k=0;k<Z.length;k+=1)Z[k]&&Z[k].m(X,null);i(P,Ie),i(P,de),i(de,F),i(F,ne),i(F,Qe);for(let k=0;k<$.length;k+=1)$[k]&&$[k].m(F,null);s[4](e)},p(D,[re]){if(re&1&&!J(c.src,a=D[0]+"/images/about_ring.png")&&t(c,"src",a),re&1&&!J(I.src,_=D[0]+"/images/education.png")&&t(I,"src",_),re&1&&!J(C.src,S=D[0]+"/images/skills.png")&&t(C,"src",S),re&1&&!J(A.src,L=D[0]+"/images/skill_sideways.png")&&t(A,"src",L),re&0){Ee=fe(je.programming_languages);let k;for(k=0;k<Ee.length;k+=1){const _e=dt(D,Ee,k);Y[k]?Y[k].p(_e,re):(Y[k]=ut(_e),Y[k].c(),Y[k].m(M,null))}for(;k<Y.length;k+=1)Y[k].d(1);Y.length=Ee.length}if(re&0){ye=fe(je.scripting_languages);let k;for(k=0;k<ye.length;k+=1){const _e=ot(D,ye,k);Z[k]?Z[k].p(_e,re):(Z[k]=ht(_e),Z[k].c(),Z[k].m(X,null))}for(;k<Z.length;k+=1)Z[k].d(1);Z.length=ye.length}if(re&0){De=fe(je.design_tools);let k;for(k=0;k<De.length;k+=1){const _e=ct(D,De,k);$[k]?$[k].p(_e,re):($[k]=vt(_e),$[k].c(),$[k].m(F,null))}for(;k<$.length;k+=1)$[k].d(1);$.length=De.length}},i:ue,o:ue,d(D){D&&u(e),s[3](null),Ve(Y,D),Ve(Z,D),Ve($,D),s[4](null)}}}function Ht(s,e,l){let{path:r=""}=e,c,a;Ye(()=>{});function n(d){Fe[d?"unshift":"push"](()=>{a=d,l(2,a)})}function o(d){Fe[d?"unshift":"push"](()=>{c=d,l(1,c)})}return s.$$set=d=>{"path"in d&&l(0,r=d.path)},[r,c,a,n,o]}class Mt extends qe{constructor(e){super(),Pe(this,e,Ht,Ct,Te,{path:0})}}function At(s){let e,l,r,c,a,n,o,d,g,j,m,f,w=":",I,_,T,V,U,B,p,H,N,P,C,S,K,A,L,R,O,te,W,M,z,le,Q,ve,se,ie,ae,X,he;return e=new bt({}),{c(){Se(e.$$.fragment),l=E(),r=h("div"),c=E(),a=h("div"),n=E(),o=h("div"),d=h("div"),g=h("p"),j=ce(s[8]),m=E(),f=h("span"),f.textContent=w,I=E(),_=ce(s[7]),T=E(),V=h("img"),B=E(),p=h("div"),H=h("h3"),N=h("span"),P=h("br"),C=E(),S=h("span"),K=h("br"),A=E(),L=h("span"),R=E(),O=h("br"),te=E(),W=h("object"),z=E(),le=h("div"),Q=h("img"),se=E(),ie=h("div"),this.h()},l(q){Ce(e.$$.fragment,q),l=y(q),r=v(q,"DIV",{id:!0}),b(r).forEach(u),c=y(q),a=v(q,"DIV",{id:!0}),b(a).forEach(u),n=y(q),o=v(q,"DIV",{id:!0,class:!0});var x=b(o);d=v(x,"DIV",{id:!0,class:!0});var Ie=b(d);g=v(Ie,"P",{class:!0});var de=b(g);j=oe(de,s[8]),m=y(de),f=v(de,"SPAN",{class:!0,"data-svelte-h":!0}),pe(f)!=="svelte-5vnx5k"&&(f.textContent=w),I=y(de),_=oe(de,s[7]),de.forEach(u),Ie.forEach(u),T=y(x),V=v(x,"IMG",{id:!0,alt:!0,src:!0,width:!0,class:!0}),B=y(x),p=v(x,"DIV",{id:!0,class:!0});var F=b(p);H=v(F,"H3",{id:!0,class:!0});var ne=b(H);N=v(ne,"SPAN",{id:!0,contenteditable:!0,class:!0}),b(N).forEach(u),P=v(ne,"BR",{}),C=y(ne),S=v(ne,"SPAN",{id:!0,contenteditable:!0,class:!0}),b(S).forEach(u),K=v(ne,"BR",{}),A=y(ne),L=v(ne,"SPAN",{id:!0,contenteditable:!0,class:!0}),b(L).forEach(u),ne.forEach(u),R=y(F),O=v(F,"BR",{}),te=y(F),W=v(F,"OBJECT",{data:!0,class:!0}),b(W).forEach(u),z=y(F),le=v(F,"DIV",{id:!0,class:!0});var we=b(le);Q=v(we,"IMG",{src:!0,width:!0,alt:!0,class:!0}),se=y(we),ie=v(we,"DIV",{id:!0,class:!0}),b(ie).forEach(u),we.forEach(u),F.forEach(u),x.forEach(u),this.h()},h(){t(r,"id","middle_line"),t(a,"id","bottom_line"),t(f,"class","svelte-ocx6tb"),t(g,"class","svelte-ocx6tb"),t(d,"id","clock"),t(d,"class","svelte-ocx6tb"),t(V,"id","wolf"),t(V,"alt","wolf"),J(V.src,U=s[0]+"/images/wolf.png")||t(V,"src",U),t(V,"width","80px"),t(V,"class","svelte-ocx6tb"),t(N,"id","hi"),t(N,"contenteditable","true"),t(N,"class","svelte-ocx6tb"),s[4]===void 0&&Ke(()=>s[10].call(N)),t(S,"id","my"),t(S,"contenteditable","true"),t(S,"class","svelte-ocx6tb"),s[5]===void 0&&Ke(()=>s[11].call(S)),t(L,"id","welcome"),t(L,"contenteditable","true"),t(L,"class","svelte-ocx6tb"),s[6]===void 0&&Ke(()=>s[12].call(L)),t(H,"id","intro_text"),t(H,"class","svelte-ocx6tb"),t(W,"data",M=s[0]+"/images/portfolio_made_header.svg"),t(W,"class","svelte-ocx6tb"),J(Q.src,ve=s[0]+"/images/mouse.png")||t(Q,"src",ve),t(Q,"width","25"),t(Q,"alt","mouse"),t(Q,"class","svelte-ocx6tb"),t(ie,"id","beacon_circle"),t(ie,"class","svelte-ocx6tb"),t(le,"id","move_into_website"),t(le,"class","svelte-ocx6tb"),t(p,"id","intro"),t(p,"class","svelte-ocx6tb"),ke(p,"layout_2_intro",s[1]<=s[2]),ke(p,"layout_1_intro",s[1]>s[2]),t(o,"id","landing"),t(o,"class","svelte-ocx6tb")},m(q,x){He(e,q,x),G(q,l,x),G(q,r,x),G(q,c,x),G(q,a,x),G(q,n,x),G(q,o,x),i(o,d),i(d,g),i(g,j),i(g,m),i(g,f),i(g,I),i(g,_),i(o,T),i(o,V),s[9](V),i(o,B),i(o,p),i(p,H),i(H,N),s[4]!==void 0&&(N.innerText=s[4]),i(H,P),i(H,C),i(H,S),s[5]!==void 0&&(S.innerText=s[5]),i(H,K),i(H,A),i(H,L),s[6]!==void 0&&(L.innerText=s[6]),i(p,R),i(p,O),i(p,te),i(p,W),i(p,z),i(p,le),i(le,Q),i(le,se),i(le,ie),ae=!0,X||(he=[be(N,"input",s[10]),be(S,"input",s[11]),be(L,"input",s[12])],X=!0)},p(q,[x]){(!ae||x&1&&!J(V.src,U=q[0]+"/images/wolf.png"))&&t(V,"src",U),x&16&&q[4]!==N.innerText&&(N.innerText=q[4]),x&32&&q[5]!==S.innerText&&(S.innerText=q[5]),x&64&&q[6]!==L.innerText&&(L.innerText=q[6]),(!ae||x&1&&M!==(M=q[0]+"/images/portfolio_made_header.svg"))&&t(W,"data",M),(!ae||x&1&&!J(Q.src,ve=q[0]+"/images/mouse.png"))&&t(Q,"src",ve),(!ae||x&6)&&ke(p,"layout_2_intro",q[1]<=q[2]),(!ae||x&6)&&ke(p,"layout_1_intro",q[1]>q[2])},i(q){ae||(Me(e.$$.fragment,q),ae=!0)},o(q){Ae(e.$$.fragment,q),ae=!1},d(q){q&&(u(l),u(r),u(c),u(a),u(n),u(o)),Le(e,q),s[9](null),X=!1,Xe(he)}}}let Lt="Hi,",xt="My name is Kenny Weeks.",ft="Welcome to my ...";function Wt(s,e,l){let{path:r=""}=e,{screenWidth:c}=e,{screenHeight:a}=e,n=new Date().getMinutes(),o=new Date().getHours(),d,g="",j="",m="",f=0;function w(p){f<p.length&&(console.log(p.charAt(f)),console.log(p),l(4,g+=p.charAt(f)),f+=1,setTimeout(()=>{w(p)},100))}function I(p){f<p.length&&(console.log(p.charAt(f)),console.log(p),l(5,j+=p.charAt(f)),f+=1,setTimeout(()=>{I(p)},100))}function _(p){f<p.length&&(console.log(p.charAt(f)),console.log(p),l(6,m+=p.charAt(f)),f+=1,setTimeout(()=>{_(p)},100))}Ye(()=>{document.getElementById("menu");let p=document.getElementById("intro");w(Lt),setTimeout(()=>{console.log("What"),f=0,I(xt)},400),setTimeout(()=>{console.log(ft),f=0,_(ft)},2900);let H=[...document.querySelectorAll(".cls-2")];console.log(H),window.addEventListener("resize",()=>{window.innerHeight<500&&(p.style.transform="scale("+.8*window.innerHeight/500+")"),window.innerHeight>=500&&(p.style.transform="scale(1.0)")}),(p.offsetTop<=d.offsetTop+d.clientHeight||p.offsetTop<=0)&&(p.style.transform="scale("+.8*window.innerHeight/500+")")}),_t(()=>{});function T(p){Fe[p?"unshift":"push"](()=>{d=p,l(3,d)})}function V(){g=this.innerText,l(4,g)}function U(){j=this.innerText,l(5,j)}function B(){m=this.innerText,l(6,m)}return s.$$set=p=>{"path"in p&&l(0,r=p.path),"screenWidth"in p&&l(1,c=p.screenWidth),"screenHeight"in p&&l(2,a=p.screenHeight)},[r,c,a,d,g,j,m,n,o,T,V,U,B]}class Gt extends qe{constructor(e){super(),Pe(this,e,Wt,At,Te,{path:0,screenWidth:1,screenHeight:2})}}function Nt(s){let e,l,r='<div id="page_tracker_cover" class="svelte-81jvpb"></div>',c,a,n,o,d,g,j,m,f,w,I;return Ke(s[4]),a=new Gt({props:{path:Re,screenWidth:s[0],screenHeight:s[1]}}),o=new Mt({props:{path:Re}}),g=new Tt({props:{scroll:s[2],path:Re}}),m=new It({props:{path:Re,screenWidth:s[0]}}),{c(){e=E(),l=h("div"),l.innerHTML=r,c=E(),Se(a.$$.fragment),n=E(),Se(o.$$.fragment),d=E(),Se(g.$$.fragment),j=E(),Se(m.$$.fragment),this.h()},l(_){e=y(_),l=v(_,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),pe(l)!=="svelte-1n0oh6n"&&(l.innerHTML=r),c=y(_),Ce(a.$$.fragment,_),n=y(_),Ce(o.$$.fragment,_),d=y(_),Ce(g.$$.fragment,_),j=y(_),Ce(m.$$.fragment,_),this.h()},h(){t(l,"id","page_tracker"),t(l,"class","svelte-81jvpb")},m(_,T){G(_,e,T),G(_,l,T),G(_,c,T),He(a,_,T),G(_,n,T),He(o,_,T),G(_,d,T),He(g,_,T),G(_,j,T),He(m,_,T),f=!0,w||(I=[be(window,"resize",s[4]),be(document.body,"scroll",s[5])],w=!0)},p(_,[T]){const V={};T&1&&(V.screenWidth=_[0]),T&2&&(V.screenHeight=_[1]),a.$set(V);const U={};T&4&&(U.scroll=_[2]),g.$set(U);const B={};T&1&&(B.screenWidth=_[0]),m.$set(B)},i(_){f||(Me(a.$$.fragment,_),Me(o.$$.fragment,_),Me(g.$$.fragment,_),Me(m.$$.fragment,_),f=!0)},o(_){Ae(a.$$.fragment,_),Ae(o.$$.fragment,_),Ae(g.$$.fragment,_),Ae(m.$$.fragment,_),f=!1},d(_){_&&(u(e),u(l),u(c),u(n),u(d),u(j)),Le(a,_),Le(o,_),Le(g,_),Le(m,_),w=!1,Xe(I)}}}function Bt(s,e,l){let{data:r}=e;console.log(r);let c,a,n=0;function o(){l(0,c=window.innerWidth),l(1,a=window.innerHeight)}const d=g=>{l(2,n=g.target.scrollTop)};return s.$$set=g=>{"data"in g&&l(3,r=g.data)},[c,a,n,r,o,d]}class Rt extends qe{constructor(e){super(),Pe(this,e,Bt,Nt,Te,{data:3})}}export{Rt as component};
