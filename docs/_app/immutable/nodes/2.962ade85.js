import{s as de,n as Y,r as je,f as R,o as Ne,h as Be}from"../chunks/scheduler.dfb2f7c0.js";import{S as fe,i as he,g,s as A,h as m,j as b,f as _,c as D,k as r,l as B,a as U,x as i,y as me,z as be,m as q,n as J,A as ye,B as Z,o as _e,r as re,u as le,v as ne,d as ae,t as ie,w as ce}from"../chunks/index.97c92902.js";import{b as ke}from"../chunks/paths.28c44b2c.js";function ue(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Me(t,e,s){const l=t.slice();return l[8]=e[s],l}function He(t){let e,s,l=t[8]+"",c,o,a;return{c(){e=g("li"),s=g("a"),c=q(l),this.h()},l(u){e=m(u,"LI",{class:!0});var h=b(e);s=m(h,"A",{href:!0,class:!0});var y=b(s);c=J(y,l),y.forEach(_),h.forEach(_),this.h()},h(){r(s,"href","#"+t[8]),r(s,"class","svelte-r13pkl"),r(e,"class","svelte-r13pkl")},m(u,h){U(u,e,h),i(e,s),i(s,c),o||(a=me(s,"click",t[7]),o=!0)},p:Y,d(u){u&&_(e),o=!1,a()}}}function Ue(t){let e,s,l,c,o,a,u,h,y,w=ue(t[3]),p=[];for(let d=0;d<w.length;d+=1)p[d]=He(Me(t,w,d));return{c(){e=g("button"),s=g("div"),l=A(),c=g("div"),o=A(),a=g("div"),u=g("ul");for(let d=0;d<p.length;d+=1)p[d].c();this.h()},l(d){e=m(d,"BUTTON",{id:!0,class:!0});var f=b(e);s=m(f,"DIV",{class:!0}),b(s).forEach(_),l=D(f),c=m(f,"DIV",{class:!0,style:!0}),b(c).forEach(_),f.forEach(_),o=D(d),a=m(d,"DIV",{id:!0,style:!0,class:!0});var n=b(a);u=m(n,"UL",{id:!0,style:!0,class:!0});var v=b(u);for(let I=0;I<p.length;I+=1)p[I].l(v);v.forEach(_),n.forEach(_),this.h()},h(){r(s,"class","menu_bar svelte-r13pkl"),r(c,"class","menu_bar svelte-r13pkl"),B(c,"margin-left",t[0]+"%"),B(c,"width",Fe+"%"),r(e,"id","menu"),r(e,"class","svelte-r13pkl"),r(u,"id","menu-options"),B(u,"visibility",t[2]=="100"?"visible":"hidden"),r(u,"class","svelte-r13pkl"),r(a,"id","background_menu"),B(a,"width",t[2]+(t[2]=="100"?"vw":"px")),B(a,"height",t[2]+(t[2]=="100"?"vh":"px")),B(a,"background-color",t[2]=="100"?"#f2f2f2":"transparent"),B(a,"top",t[2]=="100"?"0px":"15px"),B(a,"right",t[2]=="100"?"0px":"15px"),r(a,"class","svelte-r13pkl")},m(d,f){U(d,e,f),i(e,s),i(e,l),i(e,c),U(d,o,f),U(d,a,f),i(a,u);for(let n=0;n<p.length;n+=1)p[n]&&p[n].m(u,null);h||(y=[me(e,"mouseenter",t[4]),me(e,"mouseleave",t[5]),me(e,"click",t[6])],h=!0)},p(d,[f]){if(f&1&&B(c,"margin-left",d[0]+"%"),f&15){w=ue(d[3]);let n;for(n=0;n<w.length;n+=1){const v=Me(d,w,n);p[n]?p[n].p(v,f):(p[n]=He(v),p[n].c(),p[n].m(u,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=w.length}f&4&&B(u,"visibility",d[2]=="100"?"visible":"hidden"),f&4&&B(a,"width",d[2]+(d[2]=="100"?"vw":"px")),f&4&&B(a,"height",d[2]+(d[2]=="100"?"vh":"px")),f&4&&B(a,"background-color",d[2]=="100"?"#f2f2f2":"transparent"),f&4&&B(a,"top",d[2]=="100"?"0px":"15px"),f&4&&B(a,"right",d[2]=="100"?"0px":"15px")},i:Y,o:Y,d(d){d&&(_(e),_(o),_(a)),be(p,d),h=!1,je(y)}}}let Fe=50;function $e(t,e,s){let l=50,c=-1,o="20";return[l,c,o,["landing","about","projects","contacts"],()=>{s(0,l=25)},()=>{console.log(l),s(0,l=c===-1?50:0)},()=>{s(0,l=c===-1?0:50),s(1,c*=-1),s(2,o=o=="20"?"100":"20")},()=>{s(0,l=c===-1?0:50),s(1,c*=-1),s(2,o=o=="20"?"100":"20")}]}class qe extends fe{constructor(e){super(),he(this,e,$e,Ue,de,{})}}function Je(t){let e,s,l,c,o,a=`I AM CURRENTLY NOT ACCEPTING ANY
        FREELANCE WORK, BUT FEEL FREE TO 
        MESSAGE ME AND VIEW OTHER PROJECTS`,u,h,y,w,p,d,f,n,v,I,k,E,P,T,L,S,W,N,V,$,Q,K,G,x,ve;return{c(){e=g("div"),s=g("img"),c=A(),o=g("p"),o.textContent=a,u=A(),h=g("ul"),y=g("li"),w=g("span"),p=g("img"),f=q("LinkedIN"),n=A(),v=g("li"),I=g("span"),k=g("img"),P=q("Github"),T=A(),L=g("li"),S=g("span"),W=g("img"),V=q("Resume"),$=A(),Q=g("li"),K=g("span"),G=g("img"),ve=q("Email"),this.h()},l(z){e=m(z,"DIV",{id:!0,class:!0});var O=b(e);s=m(O,"IMG",{src:!0,width:!0,alt:!0}),c=D(O),o=m(O,"P",{class:!0,["data-svelte-h"]:!0}),ye(o)!=="svelte-1b4ln77"&&(o.textContent=a),u=D(O),h=m(O,"UL",{class:!0});var j=b(h);y=m(j,"LI",{class:!0});var M=b(y);w=m(M,"SPAN",{class:!0});var F=b(w);p=m(F,"IMG",{src:!0,alt:!0,width:!0}),F.forEach(_),f=J(M,"LinkedIN"),M.forEach(_),n=D(j),v=m(j,"LI",{class:!0});var H=b(v);I=m(H,"SPAN",{class:!0});var ee=b(I);k=m(ee,"IMG",{src:!0,alt:!0,width:!0}),ee.forEach(_),P=J(H,"Github"),H.forEach(_),T=D(j),L=m(j,"LI",{class:!0});var X=b(L);S=m(X,"SPAN",{class:!0});var te=b(S);W=m(te,"IMG",{src:!0,alt:!0,width:!0}),te.forEach(_),V=J(X,"Resume"),X.forEach(_),$=D(j),Q=m(j,"LI",{class:!0});var ge=b(Q);K=m(ge,"SPAN",{class:!0});var pe=b(K);G=m(pe,"IMG",{src:!0,alt:!0,width:!0}),pe.forEach(_),ve=J(ge,"Email"),ge.forEach(_),j.forEach(_),O.forEach(_),this.h()},h(){R(s.src,l=t[0]+"/images/contact_header"+(t[1]<=810?"_no_overlay":"")+".png")||r(s,"src",l),r(s,"width","250px"),r(s,"alt","contact_header"),r(o,"class","svelte-1lire0z"),R(p.src,d=t[0]+"/images/linkedin"+(t[1]<=810?"_off_white":"")+".png")||r(p,"src",d),r(p,"alt","linkedin"),r(p,"width","20"),r(w,"class","svelte-1lire0z"),r(y,"class","svelte-1lire0z"),R(k.src,E=t[0]+"/images/octocat"+(t[1]<=810?"":"_off_black")+".png")||r(k,"src",E),r(k,"alt","github"),r(k,"width","25"),r(I,"class","svelte-1lire0z"),r(v,"class","svelte-1lire0z"),R(W.src,N=t[0]+"/images/resume"+(t[1]<=810?"_off_white":"")+".png")||r(W,"src",N),r(W,"alt","resume"),r(W,"width","20"),r(S,"class","svelte-1lire0z"),r(L,"class","svelte-1lire0z"),R(G.src,x=t[0]+"/images/gmail"+(t[1]<=810?"_off_white":"")+".png")||r(G,"src",x),r(G,"alt","gmail"),r(G,"width","20"),r(K,"class","svelte-1lire0z"),r(Q,"class","svelte-1lire0z"),r(h,"class","svelte-1lire0z"),r(e,"id","contacts"),r(e,"class","svelte-1lire0z")},m(z,O){U(z,e,O),i(e,s),i(e,c),i(e,o),i(e,u),i(e,h),i(h,y),i(y,w),i(w,p),i(y,f),i(h,n),i(h,v),i(v,I),i(I,k),i(v,P),i(h,T),i(h,L),i(L,S),i(S,W),i(L,V),i(h,$),i(h,Q),i(Q,K),i(K,G),i(Q,ve)},p(z,[O]){O&3&&!R(s.src,l=z[0]+"/images/contact_header"+(z[1]<=810?"_no_overlay":"")+".png")&&r(s,"src",l),O&3&&!R(p.src,d=z[0]+"/images/linkedin"+(z[1]<=810?"_off_white":"")+".png")&&r(p,"src",d),O&3&&!R(k.src,E=z[0]+"/images/octocat"+(z[1]<=810?"":"_off_black")+".png")&&r(k,"src",E),O&3&&!R(W.src,N=z[0]+"/images/resume"+(z[1]<=810?"_off_white":"")+".png")&&r(W,"src",N),O&3&&!R(G.src,x=z[0]+"/images/gmail"+(z[1]<=810?"_off_white":"")+".png")&&r(G,"src",x)},i:Y,o:Y,d(z){z&&_(e)}}}function Qe(t,e,s){let{path:l=""}=e,{screenWidth:c}=e;return t.$$set=o=>{"path"in o&&s(0,l=o.path),"screenWidth"in o&&s(1,c=o.screenWidth)},[l,c]}class Ke extends fe{constructor(e){super(),he(this,e,Qe,Je,de,{path:0,screenWidth:1})}}const Ye=[{title:"ThisMuch",date:"Jan 2023 - Jun 2023",description:"A react native app that allows users to take pictures of there receipts, and divide them with friends.",stack:["React Native","TypeScript","Nativewind CSS","PlanetScale","MySQL","AWS","Python3"]},{title:"Personal Portfolio",date:"June 2023 - July 2023",description:"My personal portfolio, where I will keep my projects hosted. I really needed one",stack:["SvelteKit","SASS","TypeScript","Github Pages"]},{title:"Demerit Tool",date:"Dec 2023",description:"This is a tool that I built for a friend that created a simulated version of his fire academy demerit slip. It allowed him to edit it anywhere, and print it anywhere.",stack:["SvelteJS","SASS","Javascript","Github Pages"]}],Te={project:Ye};var C={};function Pe(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}function Le(){if(Pe()){var t=window.innerWidth,e=window.innerHeight,s=Math.min(t,e),l=Math.max(t,e);return s<=480&&l<=896}else return!1}function Xe(){return C.DevicePointingAccuracy==null&&(we(),!Ie()&&!C.waitingForLoaded&&(C.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",we))),C.DeviceCanHover}function oe(t){var e=window.matchMedia||window.webkitMatchmedia||window.mozMatchmedia||window.oMatchmedia;return e!=null&&e(t).matches}function Ie(){return document.readyState==="interactive"||document.readyState==="complete"}function Ae(){return C.AppRunsOnLegacyTouchDevice==null&&(C.AppRunsOnLegacyTouchDevice=!oe("(pointer:fine)")&&!oe("(pointer:coarse)")&&!oe("-moz-touch-enabled")&&("ontouchstart"in Window||(navigator.maxTouchPoints||0)>0||/touch|android|iphone|ipod|ipad/i.test(navigator.userAgent))),C.AppRunsOnLegacyTouchDevice}function Ze(t,e){return typeof t.item=="function"?t.item(e):t[e]}function xe(t,e){for(var s=0,l=t.length;s<l;s++)if(e.test(Ze(t,s)))return!0;return!1}function Ge(){if(!C.MediaQueriesHaveBeenRewritten&&Ae())if(Ie()){for(var t=document.styleSheets,e=0,s=t.length;e<s;e++)for(var l=t[e].cssRules||t[e].rules,c=0,o=l.length;c<o;c++){var a=l[c];if(a.type===CSSRule.MEDIA_RULE&&xe(a.media,/handheld/i)){var u=a.media;u.mediaText=u.mediaText.replace("handheld","screen")}}for(var h=document.getElementsByTagName("link"),e=0,s=h.length;e<s;e++){var y=h[e];/handheld/i.test(y.media)&&(y.media=y.media.replace("handheld","screen"))}C.MediaQueriesHaveBeenRewritten=!0}else window.addEventListener("DOMContentLoaded",Ge)}function Ee(){return C.DevicePointingAccuracy==null&&(we(),!Ie()&&!C.waitingForLoaded&&(C.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",we))),C.DevicePointingAccuracy}function we(){C.DeviceCanHover=oe("(hover:hover)");var t="fine";switch(!0){case oe("(pointer:none)"):t="none";break;case oe("(pointer:coarse)"):case oe("-moz-touch-enabled"):case Ae():t="coarse";break}if(C.DevicePointingAccuracy=t,Ie()){var e=document.body.classList;if(t==="none"!==e.contains("noPointer")||t==="fine"!==e.contains("finePointer")||t==="coarse"!==e.contains("coarsePointer"))switch(document.body.classList.remove("noPointer","finePointer","coarsePointer"),t){case"none":document.body.classList.add("noPointer");break;case"fine":document.body.classList.add("finePointer");break;case"coarse":document.body.classList.add("coarsePointer");break}}}function Oe(t,e){if(typeof t!="function")throw new Error("handler function expected");C.EventHandlerRegistry==null&&(C.EventHandlerRegistry=[]);for(var s=C.EventHandlerRegistry,l=0,c=s.length;l<c;l++)if(s[l].Handler===t){s[l].onceOnly=e;return}s.push({Handler:t,onceOnly:e}),s.length===1&&rt()}function We(t){C.EventHandlerRegistry==null&&(C.EventHandlerRegistry=[]);for(var e=C.EventHandlerRegistry,s=0,l=e.length;s<l;s++)if(e[s].Handler===t){e.splice(s,1);break}e.length===0&&lt()}function et(t){Oe(t,!1)}function tt(t){Oe(t,!0)}function st(t){We(t)}function rt(){C.AccuracyPoller=setInterval(function(){var t=Ee();we(),Ee()!==t&&nt()},500)}function lt(){clearInterval(C.AccuracyPoller),C.AccuracyPoller=void 0}function nt(){C.EventHandlerRegistry==null&&(C.EventHandlerRegistry=[]);for(var t=C.EventHandlerRegistry,e=0,s=t.length;e<s;e++){var l=t[e],c=l.Handler,o=l.onceOnly;try{c(Ee())}catch(a){console.warn("PointingAccuracy observation function failed with",a)}o&&We(c)}}var at={get isMobile(){return Pe()},get isPhone(){return Le()},get isTablet(){return Pe()&&!Le()},get isLegacyTouchDevice(){return Ae()},rewriteMediaQueriesOnLegacyTouchDevices:Ge,get PointingAccuracy(){return Ee()},get canHover(){return Xe()},onPointingAccuracyChanged:et,oncePointingAccuracyChanged:tt,offPointingAccuracyChanged:st,get observesPointingAccuracy(){return C.AccuracyPoller!=null}};function Se(t,e,s){const l=t.slice();return l[4]=e[s],l[6]=s,l}function Re(t,e,s){const l=t.slice();return l[7]=e[s],l}function it(t,e,s){const l=t.slice();return l[10]=e[s],l[12]=s,l}function ct(t){let e;return{c(){e=g("div"),this.h()},l(s){e=m(s,"DIV",{class:!0}),b(e).forEach(_),this.h()},h(){r(e,"class","image_blip svelte-1ekcc4y")},m(s,l){U(s,e,l)},p:Y,d(s){s&&_(e)}}}function Ce(t){let e,s=t[7]+"",l,c;return{c(){e=g("i"),l=q(s),c=q(", ")},l(o){e=m(o,"I",{});var a=b(e);l=J(a,s),c=J(a,", "),a.forEach(_)},m(o,a){U(o,e,a),i(e,l),i(e,c)},p:Y,d(o){o&&_(e)}}}function Ve(t){let e,s,l,c,o,a,u,h,y,w,p,d,f,n,v=t[4].title+"",I,k,E,P,T,L,S,W=t[4].description+"",N,V,$,Q="<i>stack -</i>",K,G,x,ve=ue(Array(10)),z=[];for(let M=0;M<ve.length;M+=1)z[M]=ct(it(t,ve,M));let O=ue(t[4].stack),j=[];for(let M=0;M<O.length;M+=1)j[M]=Ce(Re(t,O,M));return{c(){e=g("div"),s=g("div"),l=g("div"),c=g("div"),o=A();for(let M=0;M<z.length;M+=1)z[M].c();a=A(),u=g("div"),y=A(),w=g("div"),d=A(),f=g("div"),n=g("h3"),I=q(v),k=A(),E=g("span"),P=g("img"),L=A(),S=g("p"),N=q(W),V=A(),$=g("p"),$.innerHTML=Q,K=A(),G=g("p");for(let M=0;M<j.length;M+=1)j[M].c();x=A(),this.h()},l(M){e=m(M,"DIV",{class:!0,style:!0});var F=b(e);s=m(F,"DIV",{class:!0});var H=b(s);l=m(H,"DIV",{class:!0});var ee=b(l);c=m(ee,"DIV",{class:!0}),b(c).forEach(_),o=D(ee);for(let se=0;se<z.length;se+=1)z[se].l(ee);ee.forEach(_),a=D(H),u=m(H,"DIV",{class:!0,style:!0}),b(u).forEach(_),y=D(H),w=m(H,"DIV",{class:!0,style:!0}),b(w).forEach(_),H.forEach(_),d=D(F),f=m(F,"DIV",{class:!0,style:!0});var X=b(f);n=m(X,"H3",{class:!0});var te=b(n);I=J(te,v),k=D(te),E=m(te,"SPAN",{});var ge=b(E);P=m(ge,"IMG",{src:!0,alt:!0,width:!0,class:!0}),ge.forEach(_),te.forEach(_),L=D(X),S=m(X,"P",{class:!0});var pe=b(S);N=J(pe,W),pe.forEach(_),V=D(X),$=m(X,"P",{class:!0,["data-svelte-h"]:!0}),ye($)!=="svelte-1rbsl10"&&($.innerHTML=Q),K=D(X),G=m(X,"P",{class:!0});var De=b(G);for(let se=0;se<j.length;se+=1)j[se].l(De);De.forEach(_),X.forEach(_),x=D(F),F.forEach(_),this.h()},h(){r(c,"class","image_blip_mover svelte-1ekcc4y"),r(l,"class","image_tracker svelte-1ekcc4y"),r(u,"class","picture_mover svelte-1ekcc4y"),r(u,"style",h=t[2]?"display:none;":""),r(w,"class","picture_mover svelte-1ekcc4y"),r(w,"style",p=t[2]?"display:none;":""),r(s,"class","project_image svelte-1ekcc4y"),R(P.src,T=t[1]+"/images/octocat.png")||r(P,"src",T),r(P,"alt","octocat"),r(P,"width","20px"),r(P,"class","svelte-1ekcc4y"),r(n,"class","svelte-1ekcc4y"),r(S,"class","svelte-1ekcc4y"),r($,"class","svelte-1ekcc4y"),r(G,"class","svelte-1ekcc4y"),r(f,"class","project_body svelte-1ekcc4y"),r(f,"style",t[6]%2==0?"right:0px;":"left:0px;"),r(e,"class","body_parts svelte-1ekcc4y"),B(e,"flex-direction",t[6]%2===1?"row-reverse":"row"),B(e,"margin-top",t[6]!==0?"50px":"0px")},m(M,F){U(M,e,F),i(e,s),i(s,l),i(l,c),i(l,o);for(let H=0;H<z.length;H+=1)z[H]&&z[H].m(l,null);i(s,a),i(s,u),i(s,y),i(s,w),i(e,d),i(e,f),i(f,n),i(n,I),i(n,k),i(n,E),i(E,P),i(f,L),i(f,S),i(S,N),i(f,V),i(f,$),i(f,K),i(f,G);for(let H=0;H<j.length;H+=1)j[H]&&j[H].m(G,null);i(e,x)},p(M,F){if(F&4&&h!==(h=M[2]?"display:none;":"")&&r(u,"style",h),F&4&&p!==(p=M[2]?"display:none;":"")&&r(w,"style",p),F&2&&!R(P.src,T=M[1]+"/images/octocat.png")&&r(P,"src",T),F&0){O=ue(M[4].stack);let H;for(H=0;H<O.length;H+=1){const ee=Re(M,O,H);j[H]?j[H].p(ee,F):(j[H]=Ce(ee),j[H].c(),j[H].m(G,null))}for(;H<j.length;H+=1)j[H].d(1);j.length=O.length}},d(M){M&&_(e),be(z,M),be(j,M)}}}function ot(t){let e,s,l,c,o,a,u,h,y,w,p=ue(Te.project),d=[];for(let f=0;f<p.length;f+=1)d[f]=Ve(Se(t,p,f));return{c(){e=g("div"),s=g("div"),l=g("img"),o=A(),a=g("div"),u=g("div"),h=A(),y=g("div"),w=g("div");for(let f=0;f<d.length;f+=1)d[f].c();this.h()},l(f){e=m(f,"DIV",{id:!0,"data-scroll":!0,class:!0});var n=b(e);s=m(n,"DIV",{class:!0});var v=b(s);l=m(v,"IMG",{src:!0,width:!0,alt:!0,class:!0}),o=D(v),a=m(v,"DIV",{class:!0});var I=b(a);u=m(I,"DIV",{class:!0,style:!0});var k=b(u);k.forEach(_),I.forEach(_),v.forEach(_),h=D(n),y=m(n,"DIV",{id:!0,class:!0});var E=b(y);w=m(E,"DIV",{id:!0,class:!0});var P=b(w);for(let T=0;T<d.length;T+=1)d[T].l(P);P.forEach(_),E.forEach(_),n.forEach(_),this.h()},h(){R(l.src,c=t[1]+"/images/projects_header.png")||r(l,"src",c),r(l,"width","275px"),r(l,"alt","project_intro"),r(l,"class","svelte-1ekcc4y"),r(u,"class","github_icon svelte-1ekcc4y"),B(u,"background-image","url('"+t[1]+"/images/octocat.png')"),r(a,"class","github_link svelte-1ekcc4y"),r(s,"class","intro_block svelte-1ekcc4y"),r(w,"id","content-holder"),r(w,"class","svelte-1ekcc4y"),r(y,"id","projects_floating_tab"),r(y,"class","svelte-1ekcc4y"),Z(y,"full_width",t[0]>t[3]),Z(y,"partial_width",t[0]<=t[3]),r(e,"id","projects"),r(e,"data-scroll",t[0]),r(e,"class","svelte-1ekcc4y")},m(f,n){U(f,e,n),i(e,s),i(s,l),i(s,o),i(s,a),i(a,u),i(e,h),i(e,y),i(y,w);for(let v=0;v<d.length;v+=1)d[v]&&d[v].m(w,null)},p(f,[n]){if(n&2&&!R(l.src,c=f[1]+"/images/projects_header.png")&&r(l,"src",c),n&2&&B(u,"background-image","url('"+f[1]+"/images/octocat.png')"),n&6){p=ue(Te.project);let v;for(v=0;v<p.length;v+=1){const I=Se(f,p,v);d[v]?d[v].p(I,n):(d[v]=Ve(I),d[v].c(),d[v].m(w,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=p.length}n&9&&Z(y,"full_width",f[0]>f[3]),n&9&&Z(y,"partial_width",f[0]<=f[3]),n&1&&r(e,"data-scroll",f[0])},i:Y,o:Y,d(f){f&&_(e),be(d,f)}}}function ut(t,e,s){let{scroll:l=0}=e,c=!1,o=0,{path:a=""}=e;return Ne(()=>{const u=document.getElementById("projects"),h=document.getElementsByTagName("body");s(0,l=h[0].scrollTop),s(3,o=u==null?void 0:u.offsetTop),console.log(u==null?void 0:u.offsetTop),console.log(l),s(2,c=at.isMobile)}),t.$$set=u=>{"scroll"in u&&s(0,l=u.scroll),"path"in u&&s(1,a=u.path)},[l,a,c,o]}class dt extends fe{constructor(e){super(),he(this,e,ut,ot,de,{scroll:0,path:1})}}function ft(t){let e,s,l,c,o,a,u,h,y,w,p,d,f,n,v,I=`<p class="svelte-1wawrok">I am a computer science
                    graduate, currently attending
                    the University of California,
                    Irvine. I have a Bachelors of Science
                    in Computer Science from UNLV and two
                    minors in mathematics and physics. I’ve
                    been programming since high school, and I
                    enjoy working at the lowest level of a 
                    computer, specifically O.S. and compilers.</p> <div id="education" class="svelte-1wawrok"><p class="svelte-1wawrok">University of Nevada, Las Vegas<br/>
                        GPA: 3.657<br/>
                        Bachelors in Computer Science<br/>
                        Minors in Physics and Mathematics<br/></p> <hr class="svelte-1wawrok"/> <p class="svelte-1wawrok">University of California, Irvine<br/>
                        GPA: 3.9<br/>
                        Masters in Computer Science</p></div>`,k,E,P,T,L,S,W;return{c(){e=g("div"),s=g("div"),l=g("img"),o=A(),a=g("div"),u=g("img"),y=A(),w=g("div"),p=g("div"),d=g("img"),n=A(),v=g("div"),v.innerHTML=I,k=A(),E=g("img"),T=A(),L=g("div"),S=g("img"),this.h()},l(N){e=m(N,"DIV",{id:!0,class:!0});var V=b(e);s=m(V,"DIV",{id:!0,class:!0});var $=b(s);l=m($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(_),o=D(V),a=m(V,"DIV",{class:!0});var Q=b(a);u=m(Q,"IMG",{id:!0,src:!0,width:!0,alt:!0,class:!0}),Q.forEach(_),y=D(V),w=m(V,"DIV",{id:!0,class:!0});var K=b(w);p=m(K,"DIV",{id:!0,class:!0});var G=b(p);d=m(G,"IMG",{src:!0,alt:!0,class:!0}),n=D(G),v=m(G,"DIV",{class:!0,["data-svelte-h"]:!0}),ye(v)!=="svelte-1olwar1"&&(v.innerHTML=I),k=D(G),E=m(G,"IMG",{src:!0,alt:!0,class:!0}),G.forEach(_),K.forEach(_),T=D(V),L=m(V,"DIV",{class:!0});var x=b(L);S=m(x,"IMG",{id:!0,src:!0,width:!0,alt:!0,class:!0}),x.forEach(_),V.forEach(_),this.h()},h(){R(l.src,c=t[0]+"/images/about_ring.png")||r(l,"src",c),r(l,"alt","about ring"),r(l,"class","svelte-1wawrok"),r(s,"id","picture_of_me"),r(s,"class","svelte-1wawrok"),r(u,"id","about_intro"),R(u.src,h=t[0]+"/images/about_header.png")||r(u,"src",h),r(u,"width","200px"),r(u,"alt","contact_header"),r(u,"class","svelte-1wawrok"),r(a,"class","surrounding_image_intros svelte-1wawrok"),R(d.src,f=t[0]+"/images/pattern.svg")||r(d,"src",f),r(d,"alt","pattern"),r(d,"class","svelte-1wawrok"),r(v,"class","content_container svelte-1wawrok"),R(E.src,P=t[0]+"/images/pattern.svg")||r(E,"src",P),r(E,"alt","pattern"),r(E,"class","svelte-1wawrok"),r(p,"id","content_area"),r(p,"class","svelte-1wawrok"),r(w,"id","surrounding_area"),r(w,"class","svelte-1wawrok"),r(S,"id","projects_intro"),R(S.src,W=t[0]+"/images/projects_header.png")||r(S,"src",W),r(S,"width","275px"),r(S,"alt","contact_header"),r(S,"class","svelte-1wawrok"),r(L,"class","surrounding_image_intros svelte-1wawrok"),r(e,"id","about"),r(e,"class","svelte-1wawrok")},m(N,V){U(N,e,V),i(e,s),i(s,l),i(e,o),i(e,a),i(a,u),i(e,y),i(e,w),i(w,p),i(p,d),i(p,n),i(p,v),i(p,k),i(p,E),i(e,T),i(e,L),i(L,S)},p(N,[V]){V&1&&!R(l.src,c=N[0]+"/images/about_ring.png")&&r(l,"src",c),V&1&&!R(u.src,h=N[0]+"/images/about_header.png")&&r(u,"src",h),V&1&&!R(d.src,f=N[0]+"/images/pattern.svg")&&r(d,"src",f),V&1&&!R(E.src,P=N[0]+"/images/pattern.svg")&&r(E,"src",P),V&1&&!R(S.src,W=N[0]+"/images/projects_header.png")&&r(S,"src",W)},i:Y,o:Y,d(N){N&&_(e)}}}function ht(t,e,s){let{path:l=""}=e;return t.$$set=c=>{"path"in c&&s(0,l=c.path)},[l]}class vt extends fe{constructor(e){super(),he(this,e,ht,ft,de,{path:0})}}function gt(t){let e,s,l,c,o,a,u,h,y,w=":",p,d,f=t[3]<10?"0":"",n,v,I,k,E;return{c(){e=g("div"),s=g("p"),l=g("span"),c=q(t[0]),o=A(),a=g("span"),u=q(t[1]),h=A(),y=g("span"),y.textContent=w,p=A(),d=g("span"),n=q(f),v=q(t[3]),I=A(),k=g("span"),E=q(t[2]),this.h()},l(P){e=m(P,"DIV",{});var T=b(e);s=m(T,"P",{class:!0});var L=b(s);l=m(L,"SPAN",{class:!0});var S=b(l);c=J(S,t[0]),S.forEach(_),o=D(L),a=m(L,"SPAN",{class:!0});var W=b(a);u=J(W,t[1]),W.forEach(_),h=D(L),y=m(L,"SPAN",{class:!0,["data-svelte-h"]:!0}),ye(y)!=="svelte-19v4cur"&&(y.textContent=w),p=D(L),d=m(L,"SPAN",{class:!0});var N=b(d);n=J(N,f),v=J(N,t[3]),N.forEach(_),I=D(L),k=m(L,"SPAN",{class:!0});var V=b(k);E=J(V,t[2]),V.forEach(_),L.forEach(_),T.forEach(_),this.h()},h(){r(l,"class","svelte-1vmh6yp"),r(a,"class","svelte-1vmh6yp"),r(y,"class","semi-colon svelte-1vmh6yp"),r(d,"class","svelte-1vmh6yp"),r(k,"class","svelte-1vmh6yp"),r(s,"class","svelte-1vmh6yp")},m(P,T){U(P,e,T),i(e,s),i(s,l),i(l,c),i(s,o),i(s,a),i(a,u),i(s,h),i(s,y),i(s,p),i(s,d),i(d,n),i(d,v),i(s,I),i(s,k),i(k,E)},p(P,[T]){T&1&&_e(c,P[0]),T&2&&_e(u,P[1]),T&8&&f!==(f=P[3]<10?"0":"")&&_e(n,f),T&8&&_e(v,P[3]),T&4&&_e(E,P[2])},i:Y,o:Y,d(P){P&&_(e)}}}function mt(t,e,s){let{otherRegion:l=0}=e,{region:c="Irvine"}=e,o=new Date;o.getDay();let a=o.getHours();a+=l,a=a>=24?a-24:a;let u=a>12?"PM":"AM";o.getUTCFullYear();let h=o.getMinutes();return setInterval(()=>{s(3,h+=1),s(3,h=h==60?0:h),s(1,a=h==60?a+1:a),s(1,a=a>=24?a-24:a),s(2,u=a>12?"PM":"AM")},6e4),t.$$set=y=>{"otherRegion"in y&&s(4,l=y.otherRegion),"region"in y&&s(0,c=y.region)},[c,a,u,h,l]}class ze extends fe{constructor(e){super(),he(this,e,mt,gt,de,{otherRegion:4,region:0})}}function pt(t){let e,s,l,c,o,a,u,h,y,w,p,d='<span id="hi" class="svelte-3tk6w4">Hi,</span><br/> <span id="my" class="svelte-3tk6w4">my name is Kenny Weeks. </span><br/> <span id="welcome" class="svelte-3tk6w4">Welcome to my  ...</span>',f,n,v,I;return a=new ze({}),h=new ze({props:{otherRegion:10,region:"Bucharest"}}),{c(){e=g("div"),s=g("img"),c=A(),o=g("div"),re(a.$$.fragment),u=A(),re(h.$$.fragment),y=A(),w=g("div"),p=g("h3"),p.innerHTML=d,f=A(),n=g("img"),this.h()},l(k){e=m(k,"DIV",{id:!0,class:!0});var E=b(e);s=m(E,"IMG",{id:!0,alt:!0,src:!0,width:!0,class:!0}),c=D(E),o=m(E,"DIV",{id:!0,class:!0});var P=b(o);le(a.$$.fragment,P),u=D(P),le(h.$$.fragment,P),P.forEach(_),y=D(E),w=m(E,"DIV",{id:!0,class:!0});var T=b(w);p=m(T,"H3",{id:!0,class:!0,["data-svelte-h"]:!0}),ye(p)!=="svelte-t6a2lj"&&(p.innerHTML=d),f=D(T),n=m(T,"IMG",{id:!0,src:!0,alt:!0,class:!0}),T.forEach(_),E.forEach(_),this.h()},h(){r(s,"id","wolf"),r(s,"alt","wolf"),R(s.src,l=t[0]+"/images/wolf.png")||r(s,"src",l),r(s,"width","80px"),r(s,"class","svelte-3tk6w4"),r(o,"id","clocks"),r(o,"class","svelte-3tk6w4"),Z(o,"layout_1_clocks",t[1]>t[2]),Z(o,"layout_2_clocks",t[1]<=t[2]),r(p,"id","intro_text"),r(p,"class","svelte-3tk6w4"),r(n,"id","portfolio_text"),R(n.src,v=t[0]+"/images/portfolio_title"+(t[1]>t[2],"_large")+".svg")||r(n,"src",v),r(n,"alt","portfolio_text"),r(n,"class","svelte-3tk6w4"),r(w,"id","intro"),r(w,"class","svelte-3tk6w4"),Z(w,"layout_2_intro",t[1]<=t[2]),Z(w,"layout_1_intro",t[1]>t[2]),r(e,"id","landing"),r(e,"class","svelte-3tk6w4")},m(k,E){U(k,e,E),i(e,s),i(e,c),i(e,o),ne(a,o,null),i(o,u),ne(h,o,null),i(e,y),i(e,w),i(w,p),i(w,f),i(w,n),I=!0},p(k,[E]){(!I||E&1&&!R(s.src,l=k[0]+"/images/wolf.png"))&&r(s,"src",l),(!I||E&6)&&Z(o,"layout_1_clocks",k[1]>k[2]),(!I||E&6)&&Z(o,"layout_2_clocks",k[1]<=k[2]),(!I||E&7&&!R(n.src,v=k[0]+"/images/portfolio_title"+(k[1]>k[2],"_large")+".svg"))&&r(n,"src",v),(!I||E&6)&&Z(w,"layout_2_intro",k[1]<=k[2]),(!I||E&6)&&Z(w,"layout_1_intro",k[1]>k[2])},i(k){I||(ae(a.$$.fragment,k),ae(h.$$.fragment,k),I=!0)},o(k){ie(a.$$.fragment,k),ie(h.$$.fragment,k),I=!1},d(k){k&&_(e),ce(a),ce(h)}}}function _t(t,e,s){let{path:l=""}=e,{screenWidth:c}=e,{screenHeight:o}=e;return Ne(()=>{let a=document.getElementById("hi"),u=document.getElementById("my"),h=document.getElementById("welcome"),y=document.getElementById("portfolio_text");setTimeout(()=>{a.style.opacity=1},500),setTimeout(()=>{u.style.opacity=1},1400),setTimeout(()=>{h.style.opacity=1},2500),setTimeout(()=>{y.style.opacity=1},3600)}),t.$$set=a=>{"path"in a&&s(0,l=a.path),"screenWidth"in a&&s(1,c=a.screenWidth),"screenHeight"in a&&s(2,o=a.screenHeight)},[l,c,o]}class wt extends fe{constructor(e){super(),he(this,e,_t,pt,de,{path:0,screenWidth:1,screenHeight:2})}}function yt(t){let e,s,l,c,o,a,u,h,y,w,p,d,f;return Be(t[3]),s=new qe({}),c=new wt({props:{path:ke,screenWidth:t[0],screenHeight:t[1]}}),a=new vt({props:{path:ke}}),h=new dt({props:{scroll:t[2],path:ke}}),w=new Ke({props:{path:ke,screenWidth:t[0]}}),{c(){e=A(),re(s.$$.fragment),l=A(),re(c.$$.fragment),o=A(),re(a.$$.fragment),u=A(),re(h.$$.fragment),y=A(),re(w.$$.fragment)},l(n){e=D(n),le(s.$$.fragment,n),l=D(n),le(c.$$.fragment,n),o=D(n),le(a.$$.fragment,n),u=D(n),le(h.$$.fragment,n),y=D(n),le(w.$$.fragment,n)},m(n,v){U(n,e,v),ne(s,n,v),U(n,l,v),ne(c,n,v),U(n,o,v),ne(a,n,v),U(n,u,v),ne(h,n,v),U(n,y,v),ne(w,n,v),p=!0,d||(f=[me(window,"resize",t[3]),me(document.body,"scroll",t[4])],d=!0)},p(n,[v]){const I={};v&1&&(I.screenWidth=n[0]),v&2&&(I.screenHeight=n[1]),c.$set(I);const k={};v&4&&(k.scroll=n[2]),h.$set(k);const E={};v&1&&(E.screenWidth=n[0]),w.$set(E)},i(n){p||(ae(s.$$.fragment,n),ae(c.$$.fragment,n),ae(a.$$.fragment,n),ae(h.$$.fragment,n),ae(w.$$.fragment,n),p=!0)},o(n){ie(s.$$.fragment,n),ie(c.$$.fragment,n),ie(a.$$.fragment,n),ie(h.$$.fragment,n),ie(w.$$.fragment,n),p=!1},d(n){n&&(_(e),_(l),_(o),_(u),_(y)),ce(s,n),ce(c,n),ce(a,n),ce(h,n),ce(w,n),d=!1,je(f)}}}function kt(t,e,s){let l,c,o=0;function a(){s(0,l=window.innerWidth),s(1,c=window.innerHeight)}return[l,c,o,a,h=>{s(2,o=h.target.scrollTop)}]}class Pt extends fe{constructor(e){super(),he(this,e,kt,yt,de,{})}}export{Pt as component};
