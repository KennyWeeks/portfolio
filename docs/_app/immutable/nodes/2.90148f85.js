import{s as de,n as Y,r as je,f as R,o as Ne,h as Be}from"../chunks/scheduler.dfb2f7c0.js";import{S as fe,i as he,g,s as A,h as m,j as k,f as _,c as D,k as i,l as B,a as U,x as a,y as me,z as ke,m as q,n as J,A as we,B as Z,o as _e,r as ie,u as le,v as ne,d as re,t as ae,w as ce}from"../chunks/index.97c92902.js";import{b as be}from"../chunks/paths.bba25827.js";function ue(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Me(t,e,s){const l=t.slice();return l[8]=e[s],l}function He(t){let e,s,l=t[8]+"",c,o,r;return{c(){e=g("li"),s=g("a"),c=q(l),this.h()},l(u){e=m(u,"LI",{class:!0});var h=k(e);s=m(h,"A",{href:!0,class:!0});var w=k(s);c=J(w,l),w.forEach(_),h.forEach(_),this.h()},h(){i(s,"href","#"+t[8]),i(s,"class","svelte-r13pkl"),i(e,"class","svelte-r13pkl")},m(u,h){U(u,e,h),a(e,s),a(s,c),o||(r=me(s,"click",t[7]),o=!0)},p:Y,d(u){u&&_(e),o=!1,r()}}}function Ue(t){let e,s,l,c,o,r,u,h,w,y=ue(t[3]),p=[];for(let d=0;d<y.length;d+=1)p[d]=He(Me(t,y,d));return{c(){e=g("button"),s=g("div"),l=A(),c=g("div"),o=A(),r=g("div"),u=g("ul");for(let d=0;d<p.length;d+=1)p[d].c();this.h()},l(d){e=m(d,"BUTTON",{id:!0,class:!0});var f=k(e);s=m(f,"DIV",{class:!0}),k(s).forEach(_),l=D(f),c=m(f,"DIV",{class:!0,style:!0}),k(c).forEach(_),f.forEach(_),o=D(d),r=m(d,"DIV",{id:!0,style:!0,class:!0});var n=k(r);u=m(n,"UL",{id:!0,style:!0,class:!0});var v=k(u);for(let I=0;I<p.length;I+=1)p[I].l(v);v.forEach(_),n.forEach(_),this.h()},h(){i(s,"class","menu_bar svelte-r13pkl"),i(c,"class","menu_bar svelte-r13pkl"),B(c,"margin-left",t[0]+"%"),B(c,"width",Fe+"%"),i(e,"id","menu"),i(e,"class","svelte-r13pkl"),i(u,"id","menu-options"),B(u,"visibility",t[2]=="100"?"visible":"hidden"),i(u,"class","svelte-r13pkl"),i(r,"id","background_menu"),B(r,"width",t[2]+(t[2]=="100"?"vw":"px")),B(r,"height",t[2]+(t[2]=="100"?"vh":"px")),B(r,"background-color",t[2]=="100"?"#f2f2f2":"transparent"),B(r,"top",t[2]=="100"?"0px":"15px"),B(r,"right",t[2]=="100"?"0px":"15px"),i(r,"class","svelte-r13pkl")},m(d,f){U(d,e,f),a(e,s),a(e,l),a(e,c),U(d,o,f),U(d,r,f),a(r,u);for(let n=0;n<p.length;n+=1)p[n]&&p[n].m(u,null);h||(w=[me(e,"mouseenter",t[4]),me(e,"mouseleave",t[5]),me(e,"click",t[6])],h=!0)},p(d,[f]){if(f&1&&B(c,"margin-left",d[0]+"%"),f&15){y=ue(d[3]);let n;for(n=0;n<y.length;n+=1){const v=Me(d,y,n);p[n]?p[n].p(v,f):(p[n]=He(v),p[n].c(),p[n].m(u,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=y.length}f&4&&B(u,"visibility",d[2]=="100"?"visible":"hidden"),f&4&&B(r,"width",d[2]+(d[2]=="100"?"vw":"px")),f&4&&B(r,"height",d[2]+(d[2]=="100"?"vh":"px")),f&4&&B(r,"background-color",d[2]=="100"?"#f2f2f2":"transparent"),f&4&&B(r,"top",d[2]=="100"?"0px":"15px"),f&4&&B(r,"right",d[2]=="100"?"0px":"15px")},i:Y,o:Y,d(d){d&&(_(e),_(o),_(r)),ke(p,d),h=!1,je(w)}}}let Fe=50;function $e(t,e,s){let l=50,c=-1,o="20";return[l,c,o,["landing","about","projects","contacts"],()=>{s(0,l=25)},()=>{console.log(l),s(0,l=c===-1?50:0)},()=>{s(0,l=c===-1?0:50),s(1,c*=-1),s(2,o=o=="20"?"100":"20")},()=>{s(0,l=c===-1?0:50),s(1,c*=-1),s(2,o=o=="20"?"100":"20")}]}class qe extends fe{constructor(e){super(),he(this,e,$e,Ue,de,{})}}function Je(t){let e,s,l,c,o,r=`I AM CURRENTLY NOT ACCEPTING ANY
        FREELANCE WORK, BUT FEEL FREE TO 
        MESSAGE ME AND VIEW OTHER PROJECTS`,u,h,w,y,p,d,f,n,v,I,b,E,P,T,L,S,W,N,V,$,Q,K,G,x,ve;return{c(){e=g("div"),s=g("img"),c=A(),o=g("p"),o.textContent=r,u=A(),h=g("ul"),w=g("li"),y=g("span"),p=g("img"),f=q("LinkedIN"),n=A(),v=g("li"),I=g("span"),b=g("img"),P=q("Github"),T=A(),L=g("li"),S=g("span"),W=g("img"),V=q("Resume"),$=A(),Q=g("li"),K=g("span"),G=g("img"),ve=q("Email"),this.h()},l(z){e=m(z,"DIV",{id:!0,class:!0});var O=k(e);s=m(O,"IMG",{src:!0,width:!0,alt:!0}),c=D(O),o=m(O,"P",{class:!0,["data-svelte-h"]:!0}),we(o)!=="svelte-1b4ln77"&&(o.textContent=r),u=D(O),h=m(O,"UL",{class:!0});var j=k(h);w=m(j,"LI",{class:!0});var M=k(w);y=m(M,"SPAN",{class:!0});var F=k(y);p=m(F,"IMG",{src:!0,alt:!0,width:!0}),F.forEach(_),f=J(M,"LinkedIN"),M.forEach(_),n=D(j),v=m(j,"LI",{class:!0});var H=k(v);I=m(H,"SPAN",{class:!0});var ee=k(I);b=m(ee,"IMG",{src:!0,alt:!0,width:!0}),ee.forEach(_),P=J(H,"Github"),H.forEach(_),T=D(j),L=m(j,"LI",{class:!0});var X=k(L);S=m(X,"SPAN",{class:!0});var te=k(S);W=m(te,"IMG",{src:!0,alt:!0,width:!0}),te.forEach(_),V=J(X,"Resume"),X.forEach(_),$=D(j),Q=m(j,"LI",{class:!0});var ge=k(Q);K=m(ge,"SPAN",{class:!0});var pe=k(K);G=m(pe,"IMG",{src:!0,alt:!0,width:!0}),pe.forEach(_),ve=J(ge,"Email"),ge.forEach(_),j.forEach(_),O.forEach(_),this.h()},h(){R(s.src,l=t[0]+"/images/contact_header"+(t[1]<=810?"_no_overlay":"")+".png")||i(s,"src",l),i(s,"width","250px"),i(s,"alt","contact_header"),i(o,"class","svelte-1lire0z"),R(p.src,d=t[0]+"/images/linkedin"+(t[1]<=810?"_off_white":"")+".png")||i(p,"src",d),i(p,"alt","linkedin"),i(p,"width","20"),i(y,"class","svelte-1lire0z"),i(w,"class","svelte-1lire0z"),R(b.src,E=t[0]+"/images/octocat"+(t[1]<=810?"":"_off_black")+".png")||i(b,"src",E),i(b,"alt","github"),i(b,"width","25"),i(I,"class","svelte-1lire0z"),i(v,"class","svelte-1lire0z"),R(W.src,N=t[0]+"/images/resume"+(t[1]<=810?"_off_white":"")+".png")||i(W,"src",N),i(W,"alt","resume"),i(W,"width","20"),i(S,"class","svelte-1lire0z"),i(L,"class","svelte-1lire0z"),R(G.src,x=t[0]+"/images/gmail"+(t[1]<=810?"_off_white":"")+".png")||i(G,"src",x),i(G,"alt","gmail"),i(G,"width","20"),i(K,"class","svelte-1lire0z"),i(Q,"class","svelte-1lire0z"),i(h,"class","svelte-1lire0z"),i(e,"id","contacts"),i(e,"class","svelte-1lire0z")},m(z,O){U(z,e,O),a(e,s),a(e,c),a(e,o),a(e,u),a(e,h),a(h,w),a(w,y),a(y,p),a(w,f),a(h,n),a(h,v),a(v,I),a(I,b),a(v,P),a(h,T),a(h,L),a(L,S),a(S,W),a(L,V),a(h,$),a(h,Q),a(Q,K),a(K,G),a(Q,ve)},p(z,[O]){O&3&&!R(s.src,l=z[0]+"/images/contact_header"+(z[1]<=810?"_no_overlay":"")+".png")&&i(s,"src",l),O&3&&!R(p.src,d=z[0]+"/images/linkedin"+(z[1]<=810?"_off_white":"")+".png")&&i(p,"src",d),O&3&&!R(b.src,E=z[0]+"/images/octocat"+(z[1]<=810?"":"_off_black")+".png")&&i(b,"src",E),O&3&&!R(W.src,N=z[0]+"/images/resume"+(z[1]<=810?"_off_white":"")+".png")&&i(W,"src",N),O&3&&!R(G.src,x=z[0]+"/images/gmail"+(z[1]<=810?"_off_white":"")+".png")&&i(G,"src",x)},i:Y,o:Y,d(z){z&&_(e)}}}function Qe(t,e,s){let{path:l=""}=e,{screenWidth:c}=e;return t.$$set=o=>{"path"in o&&s(0,l=o.path),"screenWidth"in o&&s(1,c=o.screenWidth)},[l,c]}class Ke extends fe{constructor(e){super(),he(this,e,Qe,Je,de,{path:0,screenWidth:1})}}const Ye=[{title:"ThisMuch",date:"Jan 2023 - Jun 2023",description:"A react native app that allows users to take pictures of there receipts, and divide them with friends.",stack:["React Native","TypeScript","Nativewind CSS","PlanetScale","MySQL","AWS","Python3"]},{title:"Personal Portfolio",date:"June 2023 - July 2023",description:"My personal portfolio, where I will keep my projects hosted. I really needed one",stack:["SvelteKit","SASS","TypeScript","Github Pages"]},{title:"Demerit Tool",date:"Dec 2023",description:"This is a tool that I built for a friend that created a simulated version of his fire academy demerit slip. It allowed him to edit it anywhere, and print it anywhere.",stack:["SvelteJS","SASS","Javascript","Github Pages"]}],Te={project:Ye};var C={};function Pe(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}function Le(){if(Pe()){var t=window.innerWidth,e=window.innerHeight,s=Math.min(t,e),l=Math.max(t,e);return s<=480&&l<=896}else return!1}function Xe(){return C.DevicePointingAccuracy==null&&(ye(),!Ie()&&!C.waitingForLoaded&&(C.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",ye))),C.DeviceCanHover}function oe(t){var e=window.matchMedia||window.webkitMatchmedia||window.mozMatchmedia||window.oMatchmedia;return e!=null&&e(t).matches}function Ie(){return document.readyState==="interactive"||document.readyState==="complete"}function Ae(){return C.AppRunsOnLegacyTouchDevice==null&&(C.AppRunsOnLegacyTouchDevice=!oe("(pointer:fine)")&&!oe("(pointer:coarse)")&&!oe("-moz-touch-enabled")&&("ontouchstart"in Window||(navigator.maxTouchPoints||0)>0||/touch|android|iphone|ipod|ipad/i.test(navigator.userAgent))),C.AppRunsOnLegacyTouchDevice}function Ze(t,e){return typeof t.item=="function"?t.item(e):t[e]}function xe(t,e){for(var s=0,l=t.length;s<l;s++)if(e.test(Ze(t,s)))return!0;return!1}function Ge(){if(!C.MediaQueriesHaveBeenRewritten&&Ae())if(Ie()){for(var t=document.styleSheets,e=0,s=t.length;e<s;e++)for(var l=t[e].cssRules||t[e].rules,c=0,o=l.length;c<o;c++){var r=l[c];if(r.type===CSSRule.MEDIA_RULE&&xe(r.media,/handheld/i)){var u=r.media;u.mediaText=u.mediaText.replace("handheld","screen")}}for(var h=document.getElementsByTagName("link"),e=0,s=h.length;e<s;e++){var w=h[e];/handheld/i.test(w.media)&&(w.media=w.media.replace("handheld","screen"))}C.MediaQueriesHaveBeenRewritten=!0}else window.addEventListener("DOMContentLoaded",Ge)}function Ee(){return C.DevicePointingAccuracy==null&&(ye(),!Ie()&&!C.waitingForLoaded&&(C.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",ye))),C.DevicePointingAccuracy}function ye(){C.DeviceCanHover=oe("(hover:hover)");var t="fine";switch(!0){case oe("(pointer:none)"):t="none";break;case oe("(pointer:coarse)"):case oe("-moz-touch-enabled"):case Ae():t="coarse";break}if(C.DevicePointingAccuracy=t,Ie()){var e=document.body.classList;if(t==="none"!==e.contains("noPointer")||t==="fine"!==e.contains("finePointer")||t==="coarse"!==e.contains("coarsePointer"))switch(document.body.classList.remove("noPointer","finePointer","coarsePointer"),t){case"none":document.body.classList.add("noPointer");break;case"fine":document.body.classList.add("finePointer");break;case"coarse":document.body.classList.add("coarsePointer");break}}}function Oe(t,e){if(typeof t!="function")throw new Error("handler function expected");C.EventHandlerRegistry==null&&(C.EventHandlerRegistry=[]);for(var s=C.EventHandlerRegistry,l=0,c=s.length;l<c;l++)if(s[l].Handler===t){s[l].onceOnly=e;return}s.push({Handler:t,onceOnly:e}),s.length===1&&it()}function We(t){C.EventHandlerRegistry==null&&(C.EventHandlerRegistry=[]);for(var e=C.EventHandlerRegistry,s=0,l=e.length;s<l;s++)if(e[s].Handler===t){e.splice(s,1);break}e.length===0&&lt()}function et(t){Oe(t,!1)}function tt(t){Oe(t,!0)}function st(t){We(t)}function it(){C.AccuracyPoller=setInterval(function(){var t=Ee();ye(),Ee()!==t&&nt()},500)}function lt(){clearInterval(C.AccuracyPoller),C.AccuracyPoller=void 0}function nt(){C.EventHandlerRegistry==null&&(C.EventHandlerRegistry=[]);for(var t=C.EventHandlerRegistry,e=0,s=t.length;e<s;e++){var l=t[e],c=l.Handler,o=l.onceOnly;try{c(Ee())}catch(r){console.warn("PointingAccuracy observation function failed with",r)}o&&We(c)}}var rt={get isMobile(){return Pe()},get isPhone(){return Le()},get isTablet(){return Pe()&&!Le()},get isLegacyTouchDevice(){return Ae()},rewriteMediaQueriesOnLegacyTouchDevices:Ge,get PointingAccuracy(){return Ee()},get canHover(){return Xe()},onPointingAccuracyChanged:et,oncePointingAccuracyChanged:tt,offPointingAccuracyChanged:st,get observesPointingAccuracy(){return C.AccuracyPoller!=null}};function Se(t,e,s){const l=t.slice();return l[4]=e[s],l[6]=s,l}function Re(t,e,s){const l=t.slice();return l[7]=e[s],l}function at(t,e,s){const l=t.slice();return l[10]=e[s],l[12]=s,l}function ct(t){let e;return{c(){e=g("div"),this.h()},l(s){e=m(s,"DIV",{class:!0}),k(e).forEach(_),this.h()},h(){i(e,"class","image_blip svelte-1ekcc4y")},m(s,l){U(s,e,l)},p:Y,d(s){s&&_(e)}}}function Ce(t){let e,s=t[7]+"",l,c;return{c(){e=g("i"),l=q(s),c=q(", ")},l(o){e=m(o,"I",{});var r=k(e);l=J(r,s),c=J(r,", "),r.forEach(_)},m(o,r){U(o,e,r),a(e,l),a(e,c)},p:Y,d(o){o&&_(e)}}}function Ve(t){let e,s,l,c,o,r,u,h,w,y,p,d,f,n,v=t[4].title+"",I,b,E,P,T,L,S,W=t[4].description+"",N,V,$,Q="<i>stack -</i>",K,G,x,ve=ue(Array(10)),z=[];for(let M=0;M<ve.length;M+=1)z[M]=ct(at(t,ve,M));let O=ue(t[4].stack),j=[];for(let M=0;M<O.length;M+=1)j[M]=Ce(Re(t,O,M));return{c(){e=g("div"),s=g("div"),l=g("div"),c=g("div"),o=A();for(let M=0;M<z.length;M+=1)z[M].c();r=A(),u=g("div"),w=A(),y=g("div"),d=A(),f=g("div"),n=g("h3"),I=q(v),b=A(),E=g("span"),P=g("img"),L=A(),S=g("p"),N=q(W),V=A(),$=g("p"),$.innerHTML=Q,K=A(),G=g("p");for(let M=0;M<j.length;M+=1)j[M].c();x=A(),this.h()},l(M){e=m(M,"DIV",{class:!0,style:!0});var F=k(e);s=m(F,"DIV",{class:!0});var H=k(s);l=m(H,"DIV",{class:!0});var ee=k(l);c=m(ee,"DIV",{class:!0}),k(c).forEach(_),o=D(ee);for(let se=0;se<z.length;se+=1)z[se].l(ee);ee.forEach(_),r=D(H),u=m(H,"DIV",{class:!0,style:!0}),k(u).forEach(_),w=D(H),y=m(H,"DIV",{class:!0,style:!0}),k(y).forEach(_),H.forEach(_),d=D(F),f=m(F,"DIV",{class:!0,style:!0});var X=k(f);n=m(X,"H3",{class:!0});var te=k(n);I=J(te,v),b=D(te),E=m(te,"SPAN",{});var ge=k(E);P=m(ge,"IMG",{src:!0,alt:!0,width:!0,class:!0}),ge.forEach(_),te.forEach(_),L=D(X),S=m(X,"P",{class:!0});var pe=k(S);N=J(pe,W),pe.forEach(_),V=D(X),$=m(X,"P",{class:!0,["data-svelte-h"]:!0}),we($)!=="svelte-1rbsl10"&&($.innerHTML=Q),K=D(X),G=m(X,"P",{class:!0});var De=k(G);for(let se=0;se<j.length;se+=1)j[se].l(De);De.forEach(_),X.forEach(_),x=D(F),F.forEach(_),this.h()},h(){i(c,"class","image_blip_mover svelte-1ekcc4y"),i(l,"class","image_tracker svelte-1ekcc4y"),i(u,"class","picture_mover svelte-1ekcc4y"),i(u,"style",h=t[2]?"display:none;":""),i(y,"class","picture_mover svelte-1ekcc4y"),i(y,"style",p=t[2]?"display:none;":""),i(s,"class","project_image svelte-1ekcc4y"),R(P.src,T=t[1]+"/images/octocat.png")||i(P,"src",T),i(P,"alt","octocat"),i(P,"width","20px"),i(P,"class","svelte-1ekcc4y"),i(n,"class","svelte-1ekcc4y"),i(S,"class","svelte-1ekcc4y"),i($,"class","svelte-1ekcc4y"),i(G,"class","svelte-1ekcc4y"),i(f,"class","project_body svelte-1ekcc4y"),i(f,"style",t[6]%2==0?"right:0px;":"left:0px;"),i(e,"class","body_parts svelte-1ekcc4y"),B(e,"flex-direction",t[6]%2===1?"row-reverse":"row"),B(e,"margin-top",t[6]!==0?"50px":"0px")},m(M,F){U(M,e,F),a(e,s),a(s,l),a(l,c),a(l,o);for(let H=0;H<z.length;H+=1)z[H]&&z[H].m(l,null);a(s,r),a(s,u),a(s,w),a(s,y),a(e,d),a(e,f),a(f,n),a(n,I),a(n,b),a(n,E),a(E,P),a(f,L),a(f,S),a(S,N),a(f,V),a(f,$),a(f,K),a(f,G);for(let H=0;H<j.length;H+=1)j[H]&&j[H].m(G,null);a(e,x)},p(M,F){if(F&4&&h!==(h=M[2]?"display:none;":"")&&i(u,"style",h),F&4&&p!==(p=M[2]?"display:none;":"")&&i(y,"style",p),F&2&&!R(P.src,T=M[1]+"/images/octocat.png")&&i(P,"src",T),F&0){O=ue(M[4].stack);let H;for(H=0;H<O.length;H+=1){const ee=Re(M,O,H);j[H]?j[H].p(ee,F):(j[H]=Ce(ee),j[H].c(),j[H].m(G,null))}for(;H<j.length;H+=1)j[H].d(1);j.length=O.length}},d(M){M&&_(e),ke(z,M),ke(j,M)}}}function ot(t){let e,s,l,c,o,r,u,h,w,y,p=ue(Te.project),d=[];for(let f=0;f<p.length;f+=1)d[f]=Ve(Se(t,p,f));return{c(){e=g("div"),s=g("div"),l=g("img"),o=A(),r=g("div"),u=g("div"),h=A(),w=g("div"),y=g("div");for(let f=0;f<d.length;f+=1)d[f].c();this.h()},l(f){e=m(f,"DIV",{id:!0,"data-scroll":!0,class:!0});var n=k(e);s=m(n,"DIV",{class:!0});var v=k(s);l=m(v,"IMG",{src:!0,width:!0,alt:!0,class:!0}),o=D(v),r=m(v,"DIV",{class:!0});var I=k(r);u=m(I,"DIV",{class:!0,style:!0});var b=k(u);b.forEach(_),I.forEach(_),v.forEach(_),h=D(n),w=m(n,"DIV",{id:!0,class:!0});var E=k(w);y=m(E,"DIV",{id:!0,class:!0});var P=k(y);for(let T=0;T<d.length;T+=1)d[T].l(P);P.forEach(_),E.forEach(_),n.forEach(_),this.h()},h(){R(l.src,c=t[1]+"/images/projects_header.png")||i(l,"src",c),i(l,"width","275px"),i(l,"alt","project_intro"),i(l,"class","svelte-1ekcc4y"),i(u,"class","github_icon svelte-1ekcc4y"),B(u,"background-image","url('"+t[1]+"/images/octocat.png')"),i(r,"class","github_link svelte-1ekcc4y"),i(s,"class","intro_block svelte-1ekcc4y"),i(y,"id","content-holder"),i(y,"class","svelte-1ekcc4y"),i(w,"id","projects_floating_tab"),i(w,"class","svelte-1ekcc4y"),Z(w,"full_width",t[0]>t[3]),Z(w,"partial_width",t[0]<=t[3]),i(e,"id","projects"),i(e,"data-scroll",t[0]),i(e,"class","svelte-1ekcc4y")},m(f,n){U(f,e,n),a(e,s),a(s,l),a(s,o),a(s,r),a(r,u),a(e,h),a(e,w),a(w,y);for(let v=0;v<d.length;v+=1)d[v]&&d[v].m(y,null)},p(f,[n]){if(n&2&&!R(l.src,c=f[1]+"/images/projects_header.png")&&i(l,"src",c),n&2&&B(u,"background-image","url('"+f[1]+"/images/octocat.png')"),n&6){p=ue(Te.project);let v;for(v=0;v<p.length;v+=1){const I=Se(f,p,v);d[v]?d[v].p(I,n):(d[v]=Ve(I),d[v].c(),d[v].m(y,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=p.length}n&9&&Z(w,"full_width",f[0]>f[3]),n&9&&Z(w,"partial_width",f[0]<=f[3]),n&1&&i(e,"data-scroll",f[0])},i:Y,o:Y,d(f){f&&_(e),ke(d,f)}}}function ut(t,e,s){let{scroll:l=0}=e,c=!1,o=0,{path:r=""}=e;return Ne(()=>{const u=document.getElementById("projects"),h=document.getElementsByTagName("body");s(0,l=h[0].scrollTop),s(3,o=u==null?void 0:u.offsetTop),console.log(u==null?void 0:u.offsetTop),console.log(l),s(2,c=rt.isMobile)}),t.$$set=u=>{"scroll"in u&&s(0,l=u.scroll),"path"in u&&s(1,r=u.path)},[l,r,c,o]}class dt extends fe{constructor(e){super(),he(this,e,ut,ot,de,{scroll:0,path:1})}}function ft(t){let e,s,l,c,o,r,u,h,w,y,p,d,f,n,v,I=`<div class="content_section svelte-1bi78sc"><p class="svelte-1bi78sc">I am a computer science
                        graduate, currently attending
                        the University of California,
                        Irvine. I have a Bachelors of Science
                        in Computer Science from UNLV and two
                        minors in mathematics and physics. I’ve
                        been programming since high school, and I
                        enjoy working at the lowest level of a 
                        computer, specifically O.S. and compilers.</p></div> <div id="education" class="svelte-1bi78sc"><div id="in-edu" class="svelte-1bi78sc"><p class="svelte-1bi78sc">University of Nevada, Las Vegas<br/>
                            GPA: 3.657<br/>
                            Bachelors in Computer Science<br/>
                            Minors in Physics and Mathematics<br/></p> <p class="svelte-1bi78sc">University of California, Irvine<br/>
                            GPA: 3.9<br/>
                            Masters in Computer Science</p></div></div> <div id="skills" class="svelte-1bi78sc"></div>`,b,E,P,T,L,S,W;return{c(){e=g("div"),s=g("div"),l=g("img"),o=A(),r=g("div"),u=g("img"),w=A(),y=g("div"),p=g("div"),d=g("img"),n=A(),v=g("div"),v.innerHTML=I,b=A(),E=g("img"),T=A(),L=g("div"),S=g("img"),this.h()},l(N){e=m(N,"DIV",{id:!0,class:!0});var V=k(e);s=m(V,"DIV",{id:!0,class:!0});var $=k(s);l=m($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(_),o=D(V),r=m(V,"DIV",{class:!0});var Q=k(r);u=m(Q,"IMG",{id:!0,src:!0,width:!0,alt:!0,class:!0}),Q.forEach(_),w=D(V),y=m(V,"DIV",{id:!0,class:!0});var K=k(y);p=m(K,"DIV",{id:!0,class:!0});var G=k(p);d=m(G,"IMG",{src:!0,alt:!0,class:!0}),n=D(G),v=m(G,"DIV",{class:!0,["data-svelte-h"]:!0}),we(v)!=="svelte-sc7t5r"&&(v.innerHTML=I),b=D(G),E=m(G,"IMG",{src:!0,alt:!0,class:!0}),G.forEach(_),K.forEach(_),T=D(V),L=m(V,"DIV",{class:!0});var x=k(L);S=m(x,"IMG",{id:!0,src:!0,width:!0,alt:!0,class:!0}),x.forEach(_),V.forEach(_),this.h()},h(){R(l.src,c=t[0]+"/images/about_ring.png")||i(l,"src",c),i(l,"alt","about ring"),i(l,"class","svelte-1bi78sc"),i(s,"id","picture_of_me"),i(s,"class","svelte-1bi78sc"),i(u,"id","about_intro"),R(u.src,h=t[0]+"/images/about_header.png")||i(u,"src",h),i(u,"width","200px"),i(u,"alt","contact_header"),i(u,"class","svelte-1bi78sc"),i(r,"class","surrounding_image_intros svelte-1bi78sc"),R(d.src,f=t[0]+"/images/pattern.svg")||i(d,"src",f),i(d,"alt","pattern"),i(d,"class","svelte-1bi78sc"),i(v,"class","content_container svelte-1bi78sc"),R(E.src,P=t[0]+"/images/pattern.svg")||i(E,"src",P),i(E,"alt","pattern"),i(E,"class","svelte-1bi78sc"),i(p,"id","content_area"),i(p,"class","svelte-1bi78sc"),i(y,"id","surrounding_area"),i(y,"class","svelte-1bi78sc"),i(S,"id","projects_intro"),R(S.src,W=t[0]+"/images/projects_header.png")||i(S,"src",W),i(S,"width","275px"),i(S,"alt","contact_header"),i(S,"class","svelte-1bi78sc"),i(L,"class","surrounding_image_intros svelte-1bi78sc"),i(e,"id","about"),i(e,"class","svelte-1bi78sc")},m(N,V){U(N,e,V),a(e,s),a(s,l),a(e,o),a(e,r),a(r,u),a(e,w),a(e,y),a(y,p),a(p,d),a(p,n),a(p,v),a(p,b),a(p,E),a(e,T),a(e,L),a(L,S)},p(N,[V]){V&1&&!R(l.src,c=N[0]+"/images/about_ring.png")&&i(l,"src",c),V&1&&!R(u.src,h=N[0]+"/images/about_header.png")&&i(u,"src",h),V&1&&!R(d.src,f=N[0]+"/images/pattern.svg")&&i(d,"src",f),V&1&&!R(E.src,P=N[0]+"/images/pattern.svg")&&i(E,"src",P),V&1&&!R(S.src,W=N[0]+"/images/projects_header.png")&&i(S,"src",W)},i:Y,o:Y,d(N){N&&_(e)}}}function ht(t,e,s){let{path:l=""}=e;return t.$$set=c=>{"path"in c&&s(0,l=c.path)},[l]}class vt extends fe{constructor(e){super(),he(this,e,ht,ft,de,{path:0})}}function gt(t){let e,s,l,c,o,r,u,h,w,y=":",p,d,f=t[3]<10?"0":"",n,v,I,b,E;return{c(){e=g("div"),s=g("p"),l=g("span"),c=q(t[0]),o=A(),r=g("span"),u=q(t[1]),h=A(),w=g("span"),w.textContent=y,p=A(),d=g("span"),n=q(f),v=q(t[3]),I=A(),b=g("span"),E=q(t[2]),this.h()},l(P){e=m(P,"DIV",{});var T=k(e);s=m(T,"P",{class:!0});var L=k(s);l=m(L,"SPAN",{class:!0});var S=k(l);c=J(S,t[0]),S.forEach(_),o=D(L),r=m(L,"SPAN",{class:!0});var W=k(r);u=J(W,t[1]),W.forEach(_),h=D(L),w=m(L,"SPAN",{class:!0,["data-svelte-h"]:!0}),we(w)!=="svelte-19v4cur"&&(w.textContent=y),p=D(L),d=m(L,"SPAN",{class:!0});var N=k(d);n=J(N,f),v=J(N,t[3]),N.forEach(_),I=D(L),b=m(L,"SPAN",{class:!0});var V=k(b);E=J(V,t[2]),V.forEach(_),L.forEach(_),T.forEach(_),this.h()},h(){i(l,"class","svelte-1vmh6yp"),i(r,"class","svelte-1vmh6yp"),i(w,"class","semi-colon svelte-1vmh6yp"),i(d,"class","svelte-1vmh6yp"),i(b,"class","svelte-1vmh6yp"),i(s,"class","svelte-1vmh6yp")},m(P,T){U(P,e,T),a(e,s),a(s,l),a(l,c),a(s,o),a(s,r),a(r,u),a(s,h),a(s,w),a(s,p),a(s,d),a(d,n),a(d,v),a(s,I),a(s,b),a(b,E)},p(P,[T]){T&1&&_e(c,P[0]),T&2&&_e(u,P[1]),T&8&&f!==(f=P[3]<10?"0":"")&&_e(n,f),T&8&&_e(v,P[3]),T&4&&_e(E,P[2])},i:Y,o:Y,d(P){P&&_(e)}}}function mt(t,e,s){let{otherRegion:l=0}=e,{region:c="Irvine"}=e,o=new Date;o.getDay();let r=o.getHours();r+=l,r=r>=24?r-24:r;let u=r>12?"PM":"AM";o.getUTCFullYear();let h=o.getMinutes();return setInterval(()=>{s(3,h+=1),s(3,h=h==60?0:h),s(1,r=h==60?r+1:r),s(1,r=r>=24?r-24:r),s(2,u=r>12?"PM":"AM")},6e4),t.$$set=w=>{"otherRegion"in w&&s(4,l=w.otherRegion),"region"in w&&s(0,c=w.region)},[c,r,u,h,l]}class ze extends fe{constructor(e){super(),he(this,e,mt,gt,de,{otherRegion:4,region:0})}}function pt(t){let e,s,l,c,o,r,u,h,w,y,p,d='<span id="hi" class="svelte-3tk6w4">Hi,</span><br/> <span id="my" class="svelte-3tk6w4">my name is Kenny Weeks. </span><br/> <span id="welcome" class="svelte-3tk6w4">Welcome to my  ...</span>',f,n,v,I;return r=new ze({}),h=new ze({props:{otherRegion:10,region:"Bucharest"}}),{c(){e=g("div"),s=g("img"),c=A(),o=g("div"),ie(r.$$.fragment),u=A(),ie(h.$$.fragment),w=A(),y=g("div"),p=g("h3"),p.innerHTML=d,f=A(),n=g("img"),this.h()},l(b){e=m(b,"DIV",{id:!0,class:!0});var E=k(e);s=m(E,"IMG",{id:!0,alt:!0,src:!0,width:!0,class:!0}),c=D(E),o=m(E,"DIV",{id:!0,class:!0});var P=k(o);le(r.$$.fragment,P),u=D(P),le(h.$$.fragment,P),P.forEach(_),w=D(E),y=m(E,"DIV",{id:!0,class:!0});var T=k(y);p=m(T,"H3",{id:!0,class:!0,["data-svelte-h"]:!0}),we(p)!=="svelte-t6a2lj"&&(p.innerHTML=d),f=D(T),n=m(T,"IMG",{id:!0,src:!0,alt:!0,class:!0}),T.forEach(_),E.forEach(_),this.h()},h(){i(s,"id","wolf"),i(s,"alt","wolf"),R(s.src,l=t[0]+"/images/wolf.png")||i(s,"src",l),i(s,"width","80px"),i(s,"class","svelte-3tk6w4"),i(o,"id","clocks"),i(o,"class","svelte-3tk6w4"),Z(o,"layout_1_clocks",t[1]>t[2]),Z(o,"layout_2_clocks",t[1]<=t[2]),i(p,"id","intro_text"),i(p,"class","svelte-3tk6w4"),i(n,"id","portfolio_text"),R(n.src,v=t[0]+"/images/portfolio_title"+(t[1]>t[2],"_large")+".svg")||i(n,"src",v),i(n,"alt","portfolio_text"),i(n,"class","svelte-3tk6w4"),i(y,"id","intro"),i(y,"class","svelte-3tk6w4"),Z(y,"layout_2_intro",t[1]<=t[2]),Z(y,"layout_1_intro",t[1]>t[2]),i(e,"id","landing"),i(e,"class","svelte-3tk6w4")},m(b,E){U(b,e,E),a(e,s),a(e,c),a(e,o),ne(r,o,null),a(o,u),ne(h,o,null),a(e,w),a(e,y),a(y,p),a(y,f),a(y,n),I=!0},p(b,[E]){(!I||E&1&&!R(s.src,l=b[0]+"/images/wolf.png"))&&i(s,"src",l),(!I||E&6)&&Z(o,"layout_1_clocks",b[1]>b[2]),(!I||E&6)&&Z(o,"layout_2_clocks",b[1]<=b[2]),(!I||E&7&&!R(n.src,v=b[0]+"/images/portfolio_title"+(b[1]>b[2],"_large")+".svg"))&&i(n,"src",v),(!I||E&6)&&Z(y,"layout_2_intro",b[1]<=b[2]),(!I||E&6)&&Z(y,"layout_1_intro",b[1]>b[2])},i(b){I||(re(r.$$.fragment,b),re(h.$$.fragment,b),I=!0)},o(b){ae(r.$$.fragment,b),ae(h.$$.fragment,b),I=!1},d(b){b&&_(e),ce(r),ce(h)}}}function _t(t,e,s){let{path:l=""}=e,{screenWidth:c}=e,{screenHeight:o}=e;return Ne(()=>{let r=document.getElementById("hi"),u=document.getElementById("my"),h=document.getElementById("welcome"),w=document.getElementById("portfolio_text");setTimeout(()=>{r.style.opacity=1},500),setTimeout(()=>{u.style.opacity=1},1400),setTimeout(()=>{h.style.opacity=1},2500),setTimeout(()=>{w.style.opacity=1},3600)}),t.$$set=r=>{"path"in r&&s(0,l=r.path),"screenWidth"in r&&s(1,c=r.screenWidth),"screenHeight"in r&&s(2,o=r.screenHeight)},[l,c,o]}class yt extends fe{constructor(e){super(),he(this,e,_t,pt,de,{path:0,screenWidth:1,screenHeight:2})}}function wt(t){let e,s,l,c,o,r,u,h,w,y,p,d,f;return Be(t[3]),s=new qe({}),c=new yt({props:{path:be,screenWidth:t[0],screenHeight:t[1]}}),r=new vt({props:{path:be}}),h=new dt({props:{scroll:t[2],path:be}}),y=new Ke({props:{path:be,screenWidth:t[0]}}),{c(){e=A(),ie(s.$$.fragment),l=A(),ie(c.$$.fragment),o=A(),ie(r.$$.fragment),u=A(),ie(h.$$.fragment),w=A(),ie(y.$$.fragment)},l(n){e=D(n),le(s.$$.fragment,n),l=D(n),le(c.$$.fragment,n),o=D(n),le(r.$$.fragment,n),u=D(n),le(h.$$.fragment,n),w=D(n),le(y.$$.fragment,n)},m(n,v){U(n,e,v),ne(s,n,v),U(n,l,v),ne(c,n,v),U(n,o,v),ne(r,n,v),U(n,u,v),ne(h,n,v),U(n,w,v),ne(y,n,v),p=!0,d||(f=[me(window,"resize",t[3]),me(document.body,"scroll",t[4])],d=!0)},p(n,[v]){const I={};v&1&&(I.screenWidth=n[0]),v&2&&(I.screenHeight=n[1]),c.$set(I);const b={};v&4&&(b.scroll=n[2]),h.$set(b);const E={};v&1&&(E.screenWidth=n[0]),y.$set(E)},i(n){p||(re(s.$$.fragment,n),re(c.$$.fragment,n),re(r.$$.fragment,n),re(h.$$.fragment,n),re(y.$$.fragment,n),p=!0)},o(n){ae(s.$$.fragment,n),ae(c.$$.fragment,n),ae(r.$$.fragment,n),ae(h.$$.fragment,n),ae(y.$$.fragment,n),p=!1},d(n){n&&(_(e),_(l),_(o),_(u),_(w)),ce(s,n),ce(c,n),ce(r,n),ce(h,n),ce(y,n),d=!1,je(f)}}}function bt(t,e,s){let l,c,o=0;function r(){s(0,l=window.innerWidth),s(1,c=window.innerHeight)}return[l,c,o,r,h=>{s(2,o=h.target.scrollTop)}]}class Pt extends fe{constructor(e){super(),he(this,e,bt,wt,de,{})}}export{Pt as component};
