import{s as ie,n as J,r as Re,f as C,o as je,h as We}from"../chunks/scheduler.dfb2f7c0.js";import{S as ne,i as le,g as _,s as z,h as w,j as k,f as y,c as A,k as l,l as N,a as V,x as o,y as re,z as ye,m as B,n as U,A as oe,B as q,o as ue,r as Y,u as X,v as Z,d as x,t as ee,w as te}from"../chunks/index.97c92902.js";import{b as fe}from"../chunks/paths.47ccab18.js";function ce(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ze(t,e,s){const a=t.slice();return a[8]=e[s],a}function Ae(t){let e,s,a=t[8]+"",c,r,i;return{c(){e=_("li"),s=_("a"),c=B(a),this.h()},l(v){e=w(v,"LI",{class:!0});var d=k(e);s=w(d,"A",{href:!0,class:!0});var p=k(s);c=U(p,a),p.forEach(y),d.forEach(y),this.h()},h(){l(s,"href","#"+t[8]),l(s,"class","svelte-r13pkl"),l(e,"class","svelte-r13pkl")},m(v,d){V(v,e,d),o(e,s),o(s,c),r||(i=re(s,"click",t[7]),r=!0)},p:J,d(v){v&&y(e),r=!1,i()}}}function Ge(t){let e,s,a,c,r,i,v,d,p,m=ce(t[3]),f=[];for(let u=0;u<m.length;u+=1)f[u]=Ae(ze(t,m,u));return{c(){e=_("button"),s=_("div"),a=z(),c=_("div"),r=z(),i=_("div"),v=_("ul");for(let u=0;u<f.length;u+=1)f[u].c();this.h()},l(u){e=w(u,"BUTTON",{id:!0,class:!0});var h=k(e);s=w(h,"DIV",{class:!0}),k(s).forEach(y),a=A(h),c=w(h,"DIV",{class:!0,style:!0}),k(c).forEach(y),h.forEach(y),r=A(u),i=w(u,"DIV",{id:!0,style:!0,class:!0});var n=k(i);v=w(n,"UL",{id:!0,style:!0,class:!0});var g=k(v);for(let E=0;E<f.length;E+=1)f[E].l(g);g.forEach(y),n.forEach(y),this.h()},h(){l(s,"class","menu_bar svelte-r13pkl"),l(c,"class","menu_bar svelte-r13pkl"),N(c,"margin-left",t[0]+"%"),N(c,"width",Be+"%"),l(e,"id","menu"),l(e,"class","svelte-r13pkl"),l(v,"id","menu-options"),N(v,"visibility",t[2]=="100"?"visible":"hidden"),l(v,"class","svelte-r13pkl"),l(i,"id","background_menu"),N(i,"width",t[2]+(t[2]=="100"?"vw":"px")),N(i,"height",t[2]+(t[2]=="100"?"vh":"px")),N(i,"background-color",t[2]=="100"?"#f2f2f2":"transparent"),N(i,"top",t[2]=="100"?"0px":"15px"),N(i,"right",t[2]=="100"?"0px":"15px"),l(i,"class","svelte-r13pkl")},m(u,h){V(u,e,h),o(e,s),o(e,a),o(e,c),V(u,r,h),V(u,i,h),o(i,v);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(v,null);d||(p=[re(e,"mouseenter",t[4]),re(e,"mouseleave",t[5]),re(e,"click",t[6])],d=!0)},p(u,[h]){if(h&1&&N(c,"margin-left",u[0]+"%"),h&15){m=ce(u[3]);let n;for(n=0;n<m.length;n+=1){const g=ze(u,m,n);f[n]?f[n].p(g,h):(f[n]=Ae(g),f[n].c(),f[n].m(v,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=m.length}h&4&&N(v,"visibility",u[2]=="100"?"visible":"hidden"),h&4&&N(i,"width",u[2]+(u[2]=="100"?"vw":"px")),h&4&&N(i,"height",u[2]+(u[2]=="100"?"vh":"px")),h&4&&N(i,"background-color",u[2]=="100"?"#f2f2f2":"transparent"),h&4&&N(i,"top",u[2]=="100"?"0px":"15px"),h&4&&N(i,"right",u[2]=="100"?"0px":"15px")},i:J,o:J,d(u){u&&(y(e),y(r),y(i)),ye(f,u),d=!1,Re(p)}}}let Be=50;function Ue(t,e,s){let a=50,c=-1,r="20";return[a,c,r,["landing","about","projects","contacts"],()=>{s(0,a=25)},()=>{console.log(a),s(0,a=c===-1?50:0)},()=>{s(0,a=c===-1?0:50),s(1,c*=-1),s(2,r=r=="20"?"100":"20")},()=>{s(0,a=c===-1?0:50),s(1,c*=-1),s(2,r=r=="20"?"100":"20")}]}class $e extends ne{constructor(e){super(),le(this,e,Ue,Ge,ie,{})}}function Fe(t){let e,s,a,c,r,i=`I AM CURRENTLY NOT ACCEPTING ANY
        FREELANCE WORK, BUT FEEL FREE TO 
        MESSAGE ME AND VIEW OTHER PROJECTS`,v,d,p,m,f,u,h,n,g,E,b,I,D,T,H,$,j,S,L,O,P,W,F,K,ae;return{c(){e=_("div"),s=_("img"),c=z(),r=_("p"),r.textContent=i,v=z(),d=_("ul"),p=_("li"),m=_("span"),f=_("img"),h=B("LinkedIN"),n=z(),g=_("li"),E=_("span"),b=_("img"),D=B("Github"),T=z(),H=_("li"),$=_("span"),j=_("img"),L=B("Resume"),O=z(),P=_("li"),W=_("span"),F=_("img"),ae=B("Email"),this.h()},l(R){e=w(R,"DIV",{id:!0,class:!0});var G=k(e);s=w(G,"IMG",{src:!0,width:!0,alt:!0}),c=A(G),r=w(G,"P",{class:!0,["data-svelte-h"]:!0}),oe(r)!=="svelte-1b4ln77"&&(r.textContent=i),v=A(G),d=w(G,"UL",{class:!0});var Q=k(d);p=w(Q,"LI",{class:!0});var ve=k(p);m=w(ve,"SPAN",{class:!0});var ke=k(m);f=w(ke,"IMG",{src:!0,alt:!0,width:!0}),ke.forEach(y),h=U(ve,"LinkedIN"),ve.forEach(y),n=A(Q),g=w(Q,"LI",{class:!0});var me=k(g);E=w(me,"SPAN",{class:!0});var Ee=k(E);b=w(Ee,"IMG",{src:!0,alt:!0,width:!0}),Ee.forEach(y),D=U(me,"Github"),me.forEach(y),T=A(Q),H=w(Q,"LI",{class:!0});var pe=k(H);$=w(pe,"SPAN",{class:!0});var Ie=k($);j=w(Ie,"IMG",{src:!0,alt:!0,width:!0}),Ie.forEach(y),L=U(pe,"Resume"),pe.forEach(y),O=A(Q),P=w(Q,"LI",{class:!0});var _e=k(P);W=w(_e,"SPAN",{class:!0});var Pe=k(W);F=w(Pe,"IMG",{src:!0,alt:!0,width:!0}),Pe.forEach(y),ae=U(_e,"Email"),_e.forEach(y),Q.forEach(y),G.forEach(y),this.h()},h(){C(s.src,a=t[0]+"/images/contact_header"+(t[1]<=810?"_no_overlay":"_dark")+".png")||l(s,"src",a),l(s,"width","250px"),l(s,"alt","contact_header"),l(r,"class","svelte-1lire0z"),C(f.src,u=t[0]+"/images/linkedin"+(t[1]<=810?"_off_white":"")+".png")||l(f,"src",u),l(f,"alt","linkedin"),l(f,"width","20"),l(m,"class","svelte-1lire0z"),l(p,"class","svelte-1lire0z"),C(b.src,I=t[0]+"/images/octocat"+(t[1]<=810?"":"_off_black")+".png")||l(b,"src",I),l(b,"alt","github"),l(b,"width","25"),l(E,"class","svelte-1lire0z"),l(g,"class","svelte-1lire0z"),C(j.src,S=t[0]+"/images/resume"+(t[1]<=810?"_off_white":"")+".png")||l(j,"src",S),l(j,"alt","resume"),l(j,"width","20"),l($,"class","svelte-1lire0z"),l(H,"class","svelte-1lire0z"),C(F.src,K=t[0]+"/images/gmail"+(t[1]<=810?"_off_white":"")+".png")||l(F,"src",K),l(F,"alt","gmail"),l(F,"width","20"),l(W,"class","svelte-1lire0z"),l(P,"class","svelte-1lire0z"),l(d,"class","svelte-1lire0z"),l(e,"id","contacts"),l(e,"class","svelte-1lire0z")},m(R,G){V(R,e,G),o(e,s),o(e,c),o(e,r),o(e,v),o(e,d),o(d,p),o(p,m),o(m,f),o(p,h),o(d,n),o(d,g),o(g,E),o(E,b),o(g,D),o(d,T),o(d,H),o(H,$),o($,j),o(H,L),o(d,O),o(d,P),o(P,W),o(W,F),o(P,ae)},p(R,[G]){G&3&&!C(s.src,a=R[0]+"/images/contact_header"+(R[1]<=810?"_no_overlay":"_dark")+".png")&&l(s,"src",a),G&3&&!C(f.src,u=R[0]+"/images/linkedin"+(R[1]<=810?"_off_white":"")+".png")&&l(f,"src",u),G&3&&!C(b.src,I=R[0]+"/images/octocat"+(R[1]<=810?"":"_off_black")+".png")&&l(b,"src",I),G&3&&!C(j.src,S=R[0]+"/images/resume"+(R[1]<=810?"_off_white":"")+".png")&&l(j,"src",S),G&3&&!C(F.src,K=R[0]+"/images/gmail"+(R[1]<=810?"_off_white":"")+".png")&&l(F,"src",K)},i:J,o:J,d(R){R&&y(e)}}}function qe(t,e,s){let{path:a=""}=e,{screenWidth:c}=e;return t.$$set=r=>{"path"in r&&s(0,a=r.path),"screenWidth"in r&&s(1,c=r.screenWidth)},[a,c]}class Je extends ne{constructor(e){super(),le(this,e,qe,Fe,ie,{path:0,screenWidth:1})}}const Qe=[{title:"ThisMuch",date:"Jan 2023 - Jun 2023",description:"A react native app that allows users to take pictures of there receipts, and divide them with friends.",stack:["React Native","TypeScript","Nativewind CSS","PlanetScale","MySQL","AWS","Python3"]},{title:"Personal Portfolio",date:"June 2023 - July 2023",description:"My personal portfolio, where I will keep my projects hosted. I really needed one",stack:["SvelteKit","SASS","TypeScript","Github Pages"]},{title:"Demerit Tool",date:"Dec 2023",description:"This is a tool that I built for a friend that created a simulated version of his fire academy demerit slip. It allowed him to edit it anywhere, and print it anywhere.",stack:["SvelteJS","SASS","Javascript","Github Pages"]}],Me={project:Qe};var M={};function we(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}function Te(){if(we()){var t=window.innerWidth,e=window.innerHeight,s=Math.min(t,e),a=Math.max(t,e);return s<=480&&a<=896}else return!1}function Ke(){return M.DevicePointingAccuracy==null&&(de(),!ge()&&!M.waitingForLoaded&&(M.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",de))),M.DeviceCanHover}function se(t){var e=window.matchMedia||window.webkitMatchmedia||window.mozMatchmedia||window.oMatchmedia;return e!=null&&e(t).matches}function ge(){return document.readyState==="interactive"||document.readyState==="complete"}function be(){return M.AppRunsOnLegacyTouchDevice==null&&(M.AppRunsOnLegacyTouchDevice=!se("(pointer:fine)")&&!se("(pointer:coarse)")&&!se("-moz-touch-enabled")&&("ontouchstart"in Window||(navigator.maxTouchPoints||0)>0||/touch|android|iphone|ipod|ipad/i.test(navigator.userAgent))),M.AppRunsOnLegacyTouchDevice}function Ye(t,e){return typeof t.item=="function"?t.item(e):t[e]}function Xe(t,e){for(var s=0,a=t.length;s<a;s++)if(e.test(Ye(t,s)))return!0;return!1}function Ne(){if(!M.MediaQueriesHaveBeenRewritten&&be())if(ge()){for(var t=document.styleSheets,e=0,s=t.length;e<s;e++)for(var a=t[e].cssRules||t[e].rules,c=0,r=a.length;c<r;c++){var i=a[c];if(i.type===CSSRule.MEDIA_RULE&&Xe(i.media,/handheld/i)){var v=i.media;v.mediaText=v.mediaText.replace("handheld","screen")}}for(var d=document.getElementsByTagName("link"),e=0,s=d.length;e<s;e++){var p=d[e];/handheld/i.test(p.media)&&(p.media=p.media.replace("handheld","screen"))}M.MediaQueriesHaveBeenRewritten=!0}else window.addEventListener("DOMContentLoaded",Ne)}function he(){return M.DevicePointingAccuracy==null&&(de(),!ge()&&!M.waitingForLoaded&&(M.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",de))),M.DevicePointingAccuracy}function de(){M.DeviceCanHover=se("(hover:hover)");var t="fine";switch(!0){case se("(pointer:none)"):t="none";break;case se("(pointer:coarse)"):case se("-moz-touch-enabled"):case be():t="coarse";break}if(M.DevicePointingAccuracy=t,ge()){var e=document.body.classList;if(t==="none"!==e.contains("noPointer")||t==="fine"!==e.contains("finePointer")||t==="coarse"!==e.contains("coarsePointer"))switch(document.body.classList.remove("noPointer","finePointer","coarsePointer"),t){case"none":document.body.classList.add("noPointer");break;case"fine":document.body.classList.add("finePointer");break;case"coarse":document.body.classList.add("coarsePointer");break}}}function Ve(t,e){if(typeof t!="function")throw new Error("handler function expected");M.EventHandlerRegistry==null&&(M.EventHandlerRegistry=[]);for(var s=M.EventHandlerRegistry,a=0,c=s.length;a<c;a++)if(s[a].Handler===t){s[a].onceOnly=e;return}s.push({Handler:t,onceOnly:e}),s.length===1&&tt()}function Oe(t){M.EventHandlerRegistry==null&&(M.EventHandlerRegistry=[]);for(var e=M.EventHandlerRegistry,s=0,a=e.length;s<a;s++)if(e[s].Handler===t){e.splice(s,1);break}e.length===0&&st()}function Ze(t){Ve(t,!1)}function xe(t){Ve(t,!0)}function et(t){Oe(t)}function tt(){M.AccuracyPoller=setInterval(function(){var t=he();de(),he()!==t&&it()},500)}function st(){clearInterval(M.AccuracyPoller),M.AccuracyPoller=void 0}function it(){M.EventHandlerRegistry==null&&(M.EventHandlerRegistry=[]);for(var t=M.EventHandlerRegistry,e=0,s=t.length;e<s;e++){var a=t[e],c=a.Handler,r=a.onceOnly;try{c(he())}catch(i){console.warn("PointingAccuracy observation function failed with",i)}r&&Oe(c)}}var nt={get isMobile(){return we()},get isPhone(){return Te()},get isTablet(){return we()&&!Te()},get isLegacyTouchDevice(){return be()},rewriteMediaQueriesOnLegacyTouchDevices:Ne,get PointingAccuracy(){return he()},get canHover(){return Ke()},onPointingAccuracyChanged:Ze,oncePointingAccuracyChanged:xe,offPointingAccuracyChanged:et,get observesPointingAccuracy(){return M.AccuracyPoller!=null}};function De(t,e,s){const a=t.slice();return a[4]=e[s],a[6]=s,a}function He(t,e,s){const a=t.slice();return a[7]=e[s],a}function Se(t){let e,s=t[7]+"",a,c;return{c(){e=_("i"),a=B(s),c=B(", ")},l(r){e=w(r,"I",{});var i=k(e);a=U(i,s),c=U(i,", "),i.forEach(y)},m(r,i){V(r,e,i),o(e,a),o(e,c)},p:J,d(r){r&&y(e)}}}function Le(t){let e,s,a='<div class="main_image svelte-6eizup"></div> <div class="side_images svelte-6eizup"><div class="side_act_img svelte-6eizup"></div> <div class="side_act_img svelte-6eizup"></div> <div class="side_act_img svelte-6eizup"></div> <div class="side_act_img svelte-6eizup"></div></div>',c,r,i,v=t[4].title+"",d,p,m,f,u,h,n,g=t[4].description+"",E,b,I,D="<i>stack -</i>",T,H,$,j=ce(t[4].stack),S=[];for(let L=0;L<j.length;L+=1)S[L]=Se(He(t,j,L));return{c(){e=_("div"),s=_("div"),s.innerHTML=a,c=z(),r=_("div"),i=_("h3"),d=B(v),p=z(),m=_("span"),f=_("img"),h=z(),n=_("p"),E=B(g),b=z(),I=_("p"),I.innerHTML=D,T=z(),H=_("p");for(let L=0;L<S.length;L+=1)S[L].c();$=z(),this.h()},l(L){e=w(L,"DIV",{class:!0,style:!0});var O=k(e);s=w(O,"DIV",{class:!0,["data-svelte-h"]:!0}),oe(s)!=="svelte-1i41673"&&(s.innerHTML=a),c=A(O),r=w(O,"DIV",{class:!0,style:!0});var P=k(r);i=w(P,"H3",{class:!0});var W=k(i);d=U(W,v),p=A(W),m=w(W,"SPAN",{});var F=k(m);f=w(F,"IMG",{src:!0,alt:!0,width:!0,class:!0}),F.forEach(y),W.forEach(y),h=A(P),n=w(P,"P",{class:!0});var K=k(n);E=U(K,g),K.forEach(y),b=A(P),I=w(P,"P",{class:!0,["data-svelte-h"]:!0}),oe(I)!=="svelte-1rbsl10"&&(I.innerHTML=D),T=A(P),H=w(P,"P",{class:!0});var ae=k(H);for(let R=0;R<S.length;R+=1)S[R].l(ae);ae.forEach(y),P.forEach(y),$=A(O),O.forEach(y),this.h()},h(){l(s,"class","project_image svelte-6eizup"),C(f.src,u=t[1]+"/images/octocat.png")||l(f,"src",u),l(f,"alt","octocat"),l(f,"width","20px"),l(f,"class","svelte-6eizup"),l(i,"class","svelte-6eizup"),l(n,"class","svelte-6eizup"),l(I,"class","svelte-6eizup"),l(H,"class","svelte-6eizup"),l(r,"class","project_body svelte-6eizup"),l(r,"style",t[6]%2==0?"right:0px;":"left:0px;"),l(e,"class","body_parts svelte-6eizup"),N(e,"flex-direction",t[6]%2===1?"row-reverse":"row"),N(e,"margin-top",t[6]!==0?"50px":"0px")},m(L,O){V(L,e,O),o(e,s),o(e,c),o(e,r),o(r,i),o(i,d),o(i,p),o(i,m),o(m,f),o(r,h),o(r,n),o(n,E),o(r,b),o(r,I),o(r,T),o(r,H);for(let P=0;P<S.length;P+=1)S[P]&&S[P].m(H,null);o(e,$)},p(L,O){if(O&2&&!C(f.src,u=L[1]+"/images/octocat.png")&&l(f,"src",u),O&0){j=ce(L[4].stack);let P;for(P=0;P<j.length;P+=1){const W=He(L,j,P);S[P]?S[P].p(W,O):(S[P]=Se(W),S[P].c(),S[P].m(H,null))}for(;P<S.length;P+=1)S[P].d(1);S.length=j.length}},d(L){L&&y(e),ye(S,L)}}}function lt(t){let e,s,a,c,r,i,v,d,p,m,f=ce(Me.project),u=[];for(let h=0;h<f.length;h+=1)u[h]=Le(De(t,f,h));return{c(){e=_("div"),s=_("div"),a=_("img"),r=z(),i=_("div"),v=_("div"),d=z(),p=_("div"),m=_("div");for(let h=0;h<u.length;h+=1)u[h].c();this.h()},l(h){e=w(h,"DIV",{id:!0,"data-scroll":!0,class:!0});var n=k(e);s=w(n,"DIV",{class:!0});var g=k(s);a=w(g,"IMG",{src:!0,width:!0,alt:!0,class:!0}),r=A(g),i=w(g,"DIV",{class:!0});var E=k(i);v=w(E,"DIV",{class:!0,style:!0});var b=k(v);b.forEach(y),E.forEach(y),g.forEach(y),d=A(n),p=w(n,"DIV",{id:!0,class:!0});var I=k(p);m=w(I,"DIV",{id:!0,class:!0});var D=k(m);for(let T=0;T<u.length;T+=1)u[T].l(D);D.forEach(y),I.forEach(y),n.forEach(y),this.h()},h(){C(a.src,c=t[1]+"/images/project_header_dark.png")||l(a,"src",c),l(a,"width","275px"),l(a,"alt","project_intro"),l(a,"class","svelte-6eizup"),l(v,"class","github_icon svelte-6eizup"),N(v,"background-image","url('"+t[1]+"/images/octocat.png')"),l(i,"class","github_link svelte-6eizup"),l(s,"class","intro_block svelte-6eizup"),l(m,"id","content-holder"),l(m,"class","svelte-6eizup"),l(p,"id","projects_floating_tab"),l(p,"class","svelte-6eizup"),q(p,"full_width",t[0]>t[2]),q(p,"partial_width",t[0]<=t[2]),l(e,"id","projects"),l(e,"data-scroll",t[0]),l(e,"class","svelte-6eizup")},m(h,n){V(h,e,n),o(e,s),o(s,a),o(s,r),o(s,i),o(i,v),o(e,d),o(e,p),o(p,m);for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(m,null)},p(h,[n]){if(n&2&&!C(a.src,c=h[1]+"/images/project_header_dark.png")&&l(a,"src",c),n&2&&N(v,"background-image","url('"+h[1]+"/images/octocat.png')"),n&2){f=ce(Me.project);let g;for(g=0;g<f.length;g+=1){const E=De(h,f,g);u[g]?u[g].p(E,n):(u[g]=Le(E),u[g].c(),u[g].m(m,null))}for(;g<u.length;g+=1)u[g].d(1);u.length=f.length}n&5&&q(p,"full_width",h[0]>h[2]),n&5&&q(p,"partial_width",h[0]<=h[2]),n&1&&l(e,"data-scroll",h[0])},i:J,o:J,d(h){h&&y(e),ye(u,h)}}}function at(t,e,s){let{scroll:a=0}=e,c=0,{path:r=""}=e;return je(()=>{const i=document.getElementById("projects"),v=document.getElementsByTagName("body");s(0,a=v[0].scrollTop),s(2,c=i==null?void 0:i.offsetTop),console.log(i==null?void 0:i.offsetTop),console.log(a),nt.isMobile}),t.$$set=i=>{"scroll"in i&&s(0,a=i.scroll),"path"in i&&s(1,r=i.path)},[a,r,c]}class rt extends ne{constructor(e){super(),le(this,e,at,lt,ie,{scroll:0,path:1})}}function ot(t){let e,s,a,c,r,i,v,d,p,m,f,u=`<div class="content_section svelte-gukprm"><p class="svelte-gukprm">I am a computer science
                        graduate, currently attending
                        the University of California,
                        Irvine. I have a Bachelors of Science
                        in Computer Science from UNLV and two
                        minors in mathematics and physics. I’ve
                        been programming since high school, and I
                        enjoy working at the lowest level of a 
                        computer, specifically O.S. and compilers.</p></div> <div id="education" class="svelte-gukprm"><div id="in-edu" class="svelte-gukprm"><p class="svelte-gukprm">University of Nevada, Las Vegas<br/>
                            GPA: 3.657<br/>
                            Bachelors in Computer Science<br/>
                            Minors in Physics and Mathematics<br/></p> <p class="svelte-gukprm">University of California, Irvine<br/>
                            GPA: 3.9<br/>
                            Masters in Computer Science</p></div></div> <div id="skills" class="svelte-gukprm"></div>`;return{c(){e=_("div"),s=_("div"),a=_("img"),r=z(),i=_("div"),v=_("div"),d=_("img"),m=z(),f=_("div"),f.innerHTML=u,this.h()},l(h){e=w(h,"DIV",{id:!0,class:!0});var n=k(e);s=w(n,"DIV",{id:!0,class:!0});var g=k(s);a=w(g,"IMG",{src:!0,alt:!0,class:!0}),g.forEach(y),r=A(n),i=w(n,"DIV",{id:!0,class:!0});var E=k(i);v=w(E,"DIV",{id:!0,class:!0});var b=k(v);d=w(b,"IMG",{src:!0,alt:!0,class:!0}),m=A(b),f=w(b,"DIV",{class:!0,["data-svelte-h"]:!0}),oe(f)!=="svelte-sc7t5r"&&(f.innerHTML=u),b.forEach(y),E.forEach(y),n.forEach(y),this.h()},h(){C(a.src,c=t[0]+"/images/about_ring.png")||l(a,"src",c),l(a,"alt","about ring"),l(a,"class","svelte-gukprm"),l(s,"id","picture_of_me"),l(s,"class","svelte-gukprm"),C(d.src,p=t[0]+"/images/pattern.png")||l(d,"src",p),l(d,"alt","pattern"),l(d,"class","svelte-gukprm"),l(f,"class","content_container svelte-gukprm"),l(v,"id","content_area"),l(v,"class","svelte-gukprm"),l(i,"id","surrounding_area"),l(i,"class","svelte-gukprm"),l(e,"id","about"),l(e,"class","svelte-gukprm")},m(h,n){V(h,e,n),o(e,s),o(s,a),o(e,r),o(e,i),o(i,v),o(v,d),o(v,m),o(v,f)},p(h,[n]){n&1&&!C(a.src,c=h[0]+"/images/about_ring.png")&&l(a,"src",c),n&1&&!C(d.src,p=h[0]+"/images/pattern.png")&&l(d,"src",p)},i:J,o:J,d(h){h&&y(e)}}}function ct(t,e,s){let{path:a=""}=e;return t.$$set=c=>{"path"in c&&s(0,a=c.path)},[a]}class ut extends ne{constructor(e){super(),le(this,e,ct,ot,ie,{path:0})}}function dt(t){let e,s,a,c,r,i,v,d,p,m=":",f,u,h=t[3]<10?"0":"",n,g,E,b,I;return{c(){e=_("div"),s=_("p"),a=_("span"),c=B(t[0]),r=z(),i=_("span"),v=B(t[1]),d=z(),p=_("span"),p.textContent=m,f=z(),u=_("span"),n=B(h),g=B(t[3]),E=z(),b=_("span"),I=B(t[2]),this.h()},l(D){e=w(D,"DIV",{});var T=k(e);s=w(T,"P",{class:!0});var H=k(s);a=w(H,"SPAN",{class:!0});var $=k(a);c=U($,t[0]),$.forEach(y),r=A(H),i=w(H,"SPAN",{class:!0});var j=k(i);v=U(j,t[1]),j.forEach(y),d=A(H),p=w(H,"SPAN",{class:!0,["data-svelte-h"]:!0}),oe(p)!=="svelte-19v4cur"&&(p.textContent=m),f=A(H),u=w(H,"SPAN",{class:!0});var S=k(u);n=U(S,h),g=U(S,t[3]),S.forEach(y),E=A(H),b=w(H,"SPAN",{class:!0});var L=k(b);I=U(L,t[2]),L.forEach(y),H.forEach(y),T.forEach(y),this.h()},h(){l(a,"class","svelte-1vmh6yp"),l(i,"class","svelte-1vmh6yp"),l(p,"class","semi-colon svelte-1vmh6yp"),l(u,"class","svelte-1vmh6yp"),l(b,"class","svelte-1vmh6yp"),l(s,"class","svelte-1vmh6yp")},m(D,T){V(D,e,T),o(e,s),o(s,a),o(a,c),o(s,r),o(s,i),o(i,v),o(s,d),o(s,p),o(s,f),o(s,u),o(u,n),o(u,g),o(s,E),o(s,b),o(b,I)},p(D,[T]){T&1&&ue(c,D[0]),T&2&&ue(v,D[1]),T&8&&h!==(h=D[3]<10?"0":"")&&ue(n,h),T&8&&ue(g,D[3]),T&4&&ue(I,D[2])},i:J,o:J,d(D){D&&y(e)}}}function ft(t,e,s){let{otherRegion:a=0}=e,{region:c="Irvine"}=e,r=new Date;r.getDay();let i=r.getHours();i+=a,i=i>=24?i-24:i;let v=i>12?"PM":"AM";r.getUTCFullYear();let d=r.getMinutes();return setInterval(()=>{s(3,d+=1),s(3,d=d==60?0:d),s(1,i=d==60?i+1:i),s(1,i=i>=24?i-24:i),s(2,v=i>12?"PM":"AM")},6e4),t.$$set=p=>{"otherRegion"in p&&s(4,a=p.otherRegion),"region"in p&&s(0,c=p.region)},[c,i,v,d,a]}class Ce extends ne{constructor(e){super(),le(this,e,ft,dt,ie,{otherRegion:4,region:0})}}function ht(t){let e,s,a,c,r,i,v,d,p,m,f,u='<span id="hi" class="svelte-1fzjkas">Hi,</span><br/> <span id="my" class="svelte-1fzjkas">my name is Kenny Weeks. </span><br/> <span id="welcome" class="svelte-1fzjkas">Welcome to my  ...</span>',h,n,g,E;return i=new Ce({}),d=new Ce({props:{otherRegion:10,region:"Bucharest"}}),{c(){e=_("div"),s=_("img"),c=z(),r=_("div"),Y(i.$$.fragment),v=z(),Y(d.$$.fragment),p=z(),m=_("div"),f=_("h3"),f.innerHTML=u,h=z(),n=_("img"),this.h()},l(b){e=w(b,"DIV",{id:!0,class:!0});var I=k(e);s=w(I,"IMG",{id:!0,alt:!0,src:!0,width:!0,class:!0}),c=A(I),r=w(I,"DIV",{id:!0,class:!0});var D=k(r);X(i.$$.fragment,D),v=A(D),X(d.$$.fragment,D),D.forEach(y),p=A(I),m=w(I,"DIV",{id:!0,class:!0});var T=k(m);f=w(T,"H3",{id:!0,class:!0,["data-svelte-h"]:!0}),oe(f)!=="svelte-t6a2lj"&&(f.innerHTML=u),h=A(T),n=w(T,"IMG",{id:!0,src:!0,alt:!0,class:!0}),T.forEach(y),I.forEach(y),this.h()},h(){l(s,"id","wolf"),l(s,"alt","wolf"),C(s.src,a=t[0]+"/images/wolf.png")||l(s,"src",a),l(s,"width","80px"),l(s,"class","svelte-1fzjkas"),l(r,"id","clocks"),l(r,"class","svelte-1fzjkas"),q(r,"layout_1_clocks",t[1]>t[2]),q(r,"layout_2_clocks",t[1]<=t[2]),l(f,"id","intro_text"),l(f,"class","svelte-1fzjkas"),l(n,"id","portfolio_text"),C(n.src,g=t[0]+"/images/portfolio_title"+(t[1]>t[2],"_large")+".svg")||l(n,"src",g),l(n,"alt","portfolio_text"),l(n,"class","svelte-1fzjkas"),l(m,"id","intro"),l(m,"class","svelte-1fzjkas"),q(m,"layout_2_intro",t[1]<=t[2]),q(m,"layout_1_intro",t[1]>t[2]),l(e,"id","landing"),l(e,"class","svelte-1fzjkas")},m(b,I){V(b,e,I),o(e,s),o(e,c),o(e,r),Z(i,r,null),o(r,v),Z(d,r,null),o(e,p),o(e,m),o(m,f),o(m,h),o(m,n),E=!0},p(b,[I]){(!E||I&1&&!C(s.src,a=b[0]+"/images/wolf.png"))&&l(s,"src",a),(!E||I&6)&&q(r,"layout_1_clocks",b[1]>b[2]),(!E||I&6)&&q(r,"layout_2_clocks",b[1]<=b[2]),(!E||I&7&&!C(n.src,g=b[0]+"/images/portfolio_title"+(b[1]>b[2],"_large")+".svg"))&&l(n,"src",g),(!E||I&6)&&q(m,"layout_2_intro",b[1]<=b[2]),(!E||I&6)&&q(m,"layout_1_intro",b[1]>b[2])},i(b){E||(x(i.$$.fragment,b),x(d.$$.fragment,b),E=!0)},o(b){ee(i.$$.fragment,b),ee(d.$$.fragment,b),E=!1},d(b){b&&y(e),te(i),te(d)}}}function gt(t,e,s){let{path:a=""}=e,{screenWidth:c}=e,{screenHeight:r}=e;return je(()=>{let i=document.getElementById("hi"),v=document.getElementById("my"),d=document.getElementById("welcome"),p=document.getElementById("portfolio_text");setTimeout(()=>{i.style.opacity=1},500),setTimeout(()=>{v.style.opacity=1},1400),setTimeout(()=>{d.style.opacity=1},2500),setTimeout(()=>{p.style.opacity=1},3600);let m=document.getElementById("wolf");console.log("This is the wolf logo "+m.offsetTop),console.log("This is the height of the logo "+m.clientHeight);let f=document.getElementById("intro");console.log("This is where the intro begins "+f.offsetTop);let u=document.getElementById("intro_text");if(console.log("This is the where the text begins "+u.offsetTop),console.log(window.getComputedStyle(u).fontSize),window.innerHeight<500&&m.offsetTop+m.clientHeight>=f.offsetTop+u.offsetTop){let h=parseInt(window.getComputedStyle(u).fontSize);f.style.fontSize=h-10+"px"}}),t.$$set=i=>{"path"in i&&s(0,a=i.path),"screenWidth"in i&&s(1,c=i.screenWidth),"screenHeight"in i&&s(2,r=i.screenHeight)},[a,c,r]}class vt extends ne{constructor(e){super(),le(this,e,gt,ht,ie,{path:0,screenWidth:1,screenHeight:2})}}function mt(t){let e,s,a,c,r,i,v,d,p,m,f,u,h;return We(t[3]),s=new $e({}),c=new vt({props:{path:fe,screenWidth:t[0],screenHeight:t[1]}}),i=new ut({props:{path:fe}}),d=new rt({props:{scroll:t[2],path:fe}}),m=new Je({props:{path:fe,screenWidth:t[0]}}),{c(){e=z(),Y(s.$$.fragment),a=z(),Y(c.$$.fragment),r=z(),Y(i.$$.fragment),v=z(),Y(d.$$.fragment),p=z(),Y(m.$$.fragment)},l(n){e=A(n),X(s.$$.fragment,n),a=A(n),X(c.$$.fragment,n),r=A(n),X(i.$$.fragment,n),v=A(n),X(d.$$.fragment,n),p=A(n),X(m.$$.fragment,n)},m(n,g){V(n,e,g),Z(s,n,g),V(n,a,g),Z(c,n,g),V(n,r,g),Z(i,n,g),V(n,v,g),Z(d,n,g),V(n,p,g),Z(m,n,g),f=!0,u||(h=[re(window,"resize",t[3]),re(document.body,"scroll",t[4])],u=!0)},p(n,[g]){const E={};g&1&&(E.screenWidth=n[0]),g&2&&(E.screenHeight=n[1]),c.$set(E);const b={};g&4&&(b.scroll=n[2]),d.$set(b);const I={};g&1&&(I.screenWidth=n[0]),m.$set(I)},i(n){f||(x(s.$$.fragment,n),x(c.$$.fragment,n),x(i.$$.fragment,n),x(d.$$.fragment,n),x(m.$$.fragment,n),f=!0)},o(n){ee(s.$$.fragment,n),ee(c.$$.fragment,n),ee(i.$$.fragment,n),ee(d.$$.fragment,n),ee(m.$$.fragment,n),f=!1},d(n){n&&(y(e),y(a),y(r),y(v),y(p)),te(s,n),te(c,n),te(i,n),te(d,n),te(m,n),u=!1,Re(h)}}}function pt(t,e,s){let a,c,r=0;function i(){s(0,a=window.innerWidth),s(1,c=window.innerHeight)}return[a,c,r,i,d=>{s(2,r=d.target.scrollTop)}]}class bt extends ne{constructor(e){super(),le(this,e,pt,mt,ie,{})}}export{bt as component};
