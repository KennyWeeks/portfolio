import{s as ue,n as Q,r as ze,f as C,o as je,h as We}from"../chunks/scheduler.dfb2f7c0.js";import{S as de,i as he,g,s as A,h as m,j as b,f as _,c as D,k as r,l as W,a as $,x as i,y as ge,z as ke,m as F,n as q,A as we,B as Y,o as pe,r as se,u as re,v as ne,d as ae,t as le,w as ie}from"../chunks/index.97c92902.js";import{b as ye}from"../chunks/paths.df46ee71.js";function oe(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Ae(t,e,s){const n=t.slice();return n[8]=e[s],n}function De(t){let e,s,n=t[8]+"",c,u,a;return{c(){e=g("li"),s=g("a"),c=F(n),this.h()},l(f){e=m(f,"LI",{class:!0});var v=b(e);s=m(v,"A",{href:!0,class:!0});var w=b(s);c=q(w,n),w.forEach(_),v.forEach(_),this.h()},h(){r(s,"href","#"+t[8]),r(s,"class","svelte-r13pkl"),r(e,"class","svelte-r13pkl")},m(f,v){$(f,e,v),i(e,s),i(s,c),u||(a=ge(s,"click",t[7]),u=!0)},p:Q,d(f){f&&_(e),u=!1,a()}}}function Be(t){let e,s,n,c,u,a,f,v,w,y=oe(t[3]),d=[];for(let o=0;o<y.length;o+=1)d[o]=De(Ae(t,y,o));return{c(){e=g("button"),s=g("div"),n=A(),c=g("div"),u=A(),a=g("div"),f=g("ul");for(let o=0;o<d.length;o+=1)d[o].c();this.h()},l(o){e=m(o,"BUTTON",{id:!0,class:!0});var p=b(e);s=m(p,"DIV",{class:!0}),b(s).forEach(_),n=D(p),c=m(p,"DIV",{class:!0,style:!0}),b(c).forEach(_),p.forEach(_),u=D(o),a=m(o,"DIV",{id:!0,style:!0,class:!0});var l=b(a);f=m(l,"UL",{id:!0,style:!0,class:!0});var h=b(f);for(let I=0;I<d.length;I+=1)d[I].l(h);h.forEach(_),l.forEach(_),this.h()},h(){r(s,"class","menu_bar svelte-r13pkl"),r(c,"class","menu_bar svelte-r13pkl"),W(c,"margin-left",t[0]+"%"),W(c,"width",Ue+"%"),r(e,"id","menu"),r(e,"class","svelte-r13pkl"),r(f,"id","menu-options"),W(f,"visibility",t[2]=="100"?"visible":"hidden"),r(f,"class","svelte-r13pkl"),r(a,"id","background_menu"),W(a,"width",t[2]+(t[2]=="100"?"vw":"px")),W(a,"height",t[2]+(t[2]=="100"?"vh":"px")),W(a,"background-color",t[2]=="100"?"#f2f2f2":"transparent"),W(a,"top",t[2]=="100"?"0px":"15px"),W(a,"right",t[2]=="100"?"0px":"15px"),r(a,"class","svelte-r13pkl")},m(o,p){$(o,e,p),i(e,s),i(e,n),i(e,c),$(o,u,p),$(o,a,p),i(a,f);for(let l=0;l<d.length;l+=1)d[l]&&d[l].m(f,null);v||(w=[ge(e,"mouseenter",t[4]),ge(e,"mouseleave",t[5]),ge(e,"click",t[6])],v=!0)},p(o,[p]){if(p&1&&W(c,"margin-left",o[0]+"%"),p&15){y=oe(o[3]);let l;for(l=0;l<y.length;l+=1){const h=Ae(o,y,l);d[l]?d[l].p(h,p):(d[l]=De(h),d[l].c(),d[l].m(f,null))}for(;l<d.length;l+=1)d[l].d(1);d.length=y.length}p&4&&W(f,"visibility",o[2]=="100"?"visible":"hidden"),p&4&&W(a,"width",o[2]+(o[2]=="100"?"vw":"px")),p&4&&W(a,"height",o[2]+(o[2]=="100"?"vh":"px")),p&4&&W(a,"background-color",o[2]=="100"?"#f2f2f2":"transparent"),p&4&&W(a,"top",o[2]=="100"?"0px":"15px"),p&4&&W(a,"right",o[2]=="100"?"0px":"15px")},i:Q,o:Q,d(o){o&&(_(e),_(u),_(a)),ke(d,o),v=!1,ze(w)}}}let Ue=50;function $e(t,e,s){let n=50,c=-1,u="20";return[n,c,u,["landing","about","projects","contacts"],()=>{s(0,n=25)},()=>{console.log(n),s(0,n=c===-1?50:0)},()=>{s(0,n=c===-1?0:50),s(1,c*=-1),s(2,u=u=="20"?"100":"20")},()=>{s(0,n=c===-1?0:50),s(1,c*=-1),s(2,u=u=="20"?"100":"20")}]}class Fe extends de{constructor(e){super(),he(this,e,$e,Be,ue,{})}}function qe(t){let e,s,n,c,u,a=`I AM CURRENTLY NOT ACCEPTING ANY
        FREELANCE WORK, BUT FEEL FREE TO 
        MESSAGE ME AND VIEW OTHER PROJECTS`,f,v,w,y,d,o,p,l,h,I,k,E,L,M,S,j,N,R,z,X,B,J,O,U,Z;return{c(){e=g("div"),s=g("img"),c=A(),u=g("p"),u.textContent=a,f=A(),v=g("ul"),w=g("li"),y=g("span"),d=g("img"),p=F("LinkedIN"),l=A(),h=g("li"),I=g("span"),k=g("img"),L=F("Github"),M=A(),S=g("li"),j=g("span"),N=g("img"),z=F("Resume"),X=A(),B=g("li"),J=g("span"),O=g("img"),Z=F("Email"),this.h()},l(H){e=m(H,"DIV",{id:!0,class:!0});var P=b(e);s=m(P,"IMG",{src:!0,width:!0,alt:!0}),c=D(P),u=m(P,"P",{class:!0,["data-svelte-h"]:!0}),we(u)!=="svelte-1b4ln77"&&(u.textContent=a),f=D(P),v=m(P,"UL",{class:!0});var G=b(v);w=m(G,"LI",{class:!0});var T=b(w);y=m(T,"SPAN",{class:!0});var x=b(y);d=m(x,"IMG",{src:!0,alt:!0,width:!0}),x.forEach(_),p=q(T,"LinkedIN"),T.forEach(_),l=D(G),h=m(G,"LI",{class:!0});var K=b(h);I=m(K,"SPAN",{class:!0});var te=b(I);k=m(te,"IMG",{src:!0,alt:!0,width:!0}),te.forEach(_),L=q(K,"Github"),K.forEach(_),M=D(G),S=m(G,"LI",{class:!0});var fe=b(S);j=m(fe,"SPAN",{class:!0});var me=b(j);N=m(me,"IMG",{src:!0,alt:!0,width:!0}),me.forEach(_),z=q(fe,"Resume"),fe.forEach(_),X=D(G),B=m(G,"LI",{class:!0});var ve=b(B);J=m(ve,"SPAN",{class:!0});var ee=b(J);O=m(ee,"IMG",{src:!0,alt:!0,width:!0}),ee.forEach(_),Z=q(ve,"Email"),ve.forEach(_),G.forEach(_),P.forEach(_),this.h()},h(){C(s.src,n=t[0]+"/images/contact_header"+(t[1]<=810?"_no_overlay":"")+".png")||r(s,"src",n),r(s,"width","250px"),r(s,"alt","contact_header"),r(u,"class","svelte-1lire0z"),C(d.src,o=t[0]+"/images/linkedin"+(t[1]<=810?"_off_white":"")+".png")||r(d,"src",o),r(d,"alt","linkedin"),r(d,"width","20"),r(y,"class","svelte-1lire0z"),r(w,"class","svelte-1lire0z"),C(k.src,E=t[0]+"/images/octocat"+(t[1]<=810?"":"_off_black")+".png")||r(k,"src",E),r(k,"alt","github"),r(k,"width","25"),r(I,"class","svelte-1lire0z"),r(h,"class","svelte-1lire0z"),C(N.src,R=t[0]+"/images/resume"+(t[1]<=810?"_off_white":"")+".png")||r(N,"src",R),r(N,"alt","resume"),r(N,"width","20"),r(j,"class","svelte-1lire0z"),r(S,"class","svelte-1lire0z"),C(O.src,U=t[0]+"/images/gmail"+(t[1]<=810?"_off_white":"")+".png")||r(O,"src",U),r(O,"alt","gmail"),r(O,"width","20"),r(J,"class","svelte-1lire0z"),r(B,"class","svelte-1lire0z"),r(v,"class","svelte-1lire0z"),r(e,"id","contacts"),r(e,"class","svelte-1lire0z")},m(H,P){$(H,e,P),i(e,s),i(e,c),i(e,u),i(e,f),i(e,v),i(v,w),i(w,y),i(y,d),i(w,p),i(v,l),i(v,h),i(h,I),i(I,k),i(h,L),i(v,M),i(v,S),i(S,j),i(j,N),i(S,z),i(v,X),i(v,B),i(B,J),i(J,O),i(B,Z)},p(H,[P]){P&3&&!C(s.src,n=H[0]+"/images/contact_header"+(H[1]<=810?"_no_overlay":"")+".png")&&r(s,"src",n),P&3&&!C(d.src,o=H[0]+"/images/linkedin"+(H[1]<=810?"_off_white":"")+".png")&&r(d,"src",o),P&3&&!C(k.src,E=H[0]+"/images/octocat"+(H[1]<=810?"":"_off_black")+".png")&&r(k,"src",E),P&3&&!C(N.src,R=H[0]+"/images/resume"+(H[1]<=810?"_off_white":"")+".png")&&r(N,"src",R),P&3&&!C(O.src,U=H[0]+"/images/gmail"+(H[1]<=810?"_off_white":"")+".png")&&r(O,"src",U)},i:Q,o:Q,d(H){H&&_(e)}}}function Je(t,e,s){let{path:n=""}=e,{screenWidth:c}=e;return t.$$set=u=>{"path"in u&&s(0,n=u.path),"screenWidth"in u&&s(1,c=u.screenWidth)},[n,c]}class Qe extends de{constructor(e){super(),he(this,e,Je,qe,ue,{path:0,screenWidth:1})}}const Ke=[{title:"ThisMuch",date:"Jan 2023 - Jun 2023",description:"A react native app that allows users to take pictures of there receipts, and divide them with friends.",stack:["React Native","TypeScript","Nativewind CSS","PlanetScale","MySQL","AWS","Python3"]},{title:"Personal Portfolio",date:"June 2023 - July 2023",description:"My personal portfolio, where I will keep my projects hosted. I really needed one",stack:["SvelteKit","SASS","TypeScript","Github Pages"]},{title:"Demerit Tool",date:"Dec 2023",description:"This is a tool that I built for a friend that created a simulated version of his fire academy demerit slip. It allowed him to edit it anywhere, and print it anywhere.",stack:["SvelteJS","SASS","Javascript","Github Pages"]}],Me={project:Ke};var V={};function Ie(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}function He(){if(Ie()){var t=window.innerWidth,e=window.innerHeight,s=Math.min(t,e),n=Math.max(t,e);return s<=480&&n<=896}else return!1}function Ye(){return V.DevicePointingAccuracy==null&&(_e(),!Ee()&&!V.waitingForLoaded&&(V.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",_e))),V.DeviceCanHover}function ce(t){var e=window.matchMedia||window.webkitMatchmedia||window.mozMatchmedia||window.oMatchmedia;return e!=null&&e(t).matches}function Ee(){return document.readyState==="interactive"||document.readyState==="complete"}function Pe(){return V.AppRunsOnLegacyTouchDevice==null&&(V.AppRunsOnLegacyTouchDevice=!ce("(pointer:fine)")&&!ce("(pointer:coarse)")&&!ce("-moz-touch-enabled")&&("ontouchstart"in Window||(navigator.maxTouchPoints||0)>0||/touch|android|iphone|ipod|ipad/i.test(navigator.userAgent))),V.AppRunsOnLegacyTouchDevice}function Xe(t,e){return typeof t.item=="function"?t.item(e):t[e]}function Ze(t,e){for(var s=0,n=t.length;s<n;s++)if(e.test(Xe(t,s)))return!0;return!1}function Ne(){if(!V.MediaQueriesHaveBeenRewritten&&Pe())if(Ee()){for(var t=document.styleSheets,e=0,s=t.length;e<s;e++)for(var n=t[e].cssRules||t[e].rules,c=0,u=n.length;c<u;c++){var a=n[c];if(a.type===CSSRule.MEDIA_RULE&&Ze(a.media,/handheld/i)){var f=a.media;f.mediaText=f.mediaText.replace("handheld","screen")}}for(var v=document.getElementsByTagName("link"),e=0,s=v.length;e<s;e++){var w=v[e];/handheld/i.test(w.media)&&(w.media=w.media.replace("handheld","screen"))}V.MediaQueriesHaveBeenRewritten=!0}else window.addEventListener("DOMContentLoaded",Ne)}function be(){return V.DevicePointingAccuracy==null&&(_e(),!Ee()&&!V.waitingForLoaded&&(V.waitingForLoaded=!0,window.addEventListener("DOMContentLoaded",_e))),V.DevicePointingAccuracy}function _e(){V.DeviceCanHover=ce("(hover:hover)");var t="fine";switch(!0){case ce("(pointer:none)"):t="none";break;case ce("(pointer:coarse)"):case ce("-moz-touch-enabled"):case Pe():t="coarse";break}if(V.DevicePointingAccuracy=t,Ee()){var e=document.body.classList;if(t==="none"!==e.contains("noPointer")||t==="fine"!==e.contains("finePointer")||t==="coarse"!==e.contains("coarsePointer"))switch(document.body.classList.remove("noPointer","finePointer","coarsePointer"),t){case"none":document.body.classList.add("noPointer");break;case"fine":document.body.classList.add("finePointer");break;case"coarse":document.body.classList.add("coarsePointer");break}}}function Ge(t,e){if(typeof t!="function")throw new Error("handler function expected");V.EventHandlerRegistry==null&&(V.EventHandlerRegistry=[]);for(var s=V.EventHandlerRegistry,n=0,c=s.length;n<c;n++)if(s[n].Handler===t){s[n].onceOnly=e;return}s.push({Handler:t,onceOnly:e}),s.length===1&&st()}function Oe(t){V.EventHandlerRegistry==null&&(V.EventHandlerRegistry=[]);for(var e=V.EventHandlerRegistry,s=0,n=e.length;s<n;s++)if(e[s].Handler===t){e.splice(s,1);break}e.length===0&&rt()}function xe(t){Ge(t,!1)}function et(t){Ge(t,!0)}function tt(t){Oe(t)}function st(){V.AccuracyPoller=setInterval(function(){var t=be();_e(),be()!==t&&nt()},500)}function rt(){clearInterval(V.AccuracyPoller),V.AccuracyPoller=void 0}function nt(){V.EventHandlerRegistry==null&&(V.EventHandlerRegistry=[]);for(var t=V.EventHandlerRegistry,e=0,s=t.length;e<s;e++){var n=t[e],c=n.Handler,u=n.onceOnly;try{c(be())}catch(a){console.warn("PointingAccuracy observation function failed with",a)}u&&Oe(c)}}var Te={get isMobile(){return Ie()},get isPhone(){return He()},get isTablet(){return Ie()&&!He()},get isLegacyTouchDevice(){return Pe()},rewriteMediaQueriesOnLegacyTouchDevices:Ne,get PointingAccuracy(){return be()},get canHover(){return Ye()},onPointingAccuracyChanged:xe,oncePointingAccuracyChanged:et,offPointingAccuracyChanged:tt,get observesPointingAccuracy(){return V.AccuracyPoller!=null}};function Le(t,e,s){const n=t.slice();return n[3]=e[s],n[5]=s,n}function Se(t,e,s){const n=t.slice();return n[6]=e[s],n}function at(t,e,s){const n=t.slice();return n[9]=e[s],n[11]=s,n}function lt(t){let e;return{c(){e=g("div"),this.h()},l(s){e=m(s,"DIV",{class:!0}),b(e).forEach(_),this.h()},h(){r(e,"class","image_blip svelte-1ekcc4y")},m(s,n){$(s,e,n)},p:Q,d(s){s&&_(e)}}}function Re(t){let e,s=t[6]+"",n,c;return{c(){e=g("i"),n=F(s),c=F(", ")},l(u){e=m(u,"I",{});var a=b(e);n=q(a,s),c=q(a,", "),a.forEach(_)},m(u,a){$(u,e,a),i(e,n),i(e,c)},p:Q,d(u){u&&_(e)}}}function Ce(t){let e,s,n,c,u,a,f,v,w,y,d,o,p=t[3].title+"",l,h,I,k,E,L,M,S=t[3].description+"",j,N,R,z="<i>stack -</i>",X,B,J,O=oe(Array(10)),U=[];for(let P=0;P<O.length;P+=1)U[P]=lt(at(t,O,P));let Z=oe(t[3].stack),H=[];for(let P=0;P<Z.length;P+=1)H[P]=Re(Se(t,Z,P));return{c(){e=g("div"),s=g("div"),n=g("div"),c=g("div"),u=A();for(let P=0;P<U.length;P+=1)U[P].c();a=A(),f=g("div"),v=A(),w=g("div"),y=A(),d=g("div"),o=g("h3"),l=F(p),h=A(),I=g("span"),k=g("img"),L=A(),M=g("p"),j=F(S),N=A(),R=g("p"),R.innerHTML=z,X=A(),B=g("p");for(let P=0;P<H.length;P+=1)H[P].c();J=A(),this.h()},l(P){e=m(P,"DIV",{class:!0,style:!0});var G=b(e);s=m(G,"DIV",{class:!0});var T=b(s);n=m(T,"DIV",{class:!0});var x=b(n);c=m(x,"DIV",{class:!0}),b(c).forEach(_),u=D(x);for(let ee=0;ee<U.length;ee+=1)U[ee].l(x);x.forEach(_),a=D(T),f=m(T,"DIV",{class:!0,style:!0}),b(f).forEach(_),v=D(T),w=m(T,"DIV",{class:!0,style:!0}),b(w).forEach(_),T.forEach(_),y=D(G),d=m(G,"DIV",{class:!0,style:!0});var K=b(d);o=m(K,"H3",{class:!0});var te=b(o);l=q(te,p),h=D(te),I=m(te,"SPAN",{});var fe=b(I);k=m(fe,"IMG",{src:!0,alt:!0,width:!0,class:!0}),fe.forEach(_),te.forEach(_),L=D(K),M=m(K,"P",{class:!0});var me=b(M);j=q(me,S),me.forEach(_),N=D(K),R=m(K,"P",{class:!0,["data-svelte-h"]:!0}),we(R)!=="svelte-1rbsl10"&&(R.innerHTML=z),X=D(K),B=m(K,"P",{class:!0});var ve=b(B);for(let ee=0;ee<H.length;ee+=1)H[ee].l(ve);ve.forEach(_),K.forEach(_),J=D(G),G.forEach(_),this.h()},h(){r(c,"class","image_blip_mover svelte-1ekcc4y"),r(n,"class","image_tracker svelte-1ekcc4y"),r(f,"class","picture_mover svelte-1ekcc4y"),r(f,"style",Te.isMobile?"display:none;":""),r(w,"class","picture_mover svelte-1ekcc4y"),r(w,"style",Te.isMobile?"display:none;":""),r(s,"class","project_image svelte-1ekcc4y"),C(k.src,E=t[1]+"/images/octocat.png")||r(k,"src",E),r(k,"alt","octocat"),r(k,"width","20px"),r(k,"class","svelte-1ekcc4y"),r(o,"class","svelte-1ekcc4y"),r(M,"class","svelte-1ekcc4y"),r(R,"class","svelte-1ekcc4y"),r(B,"class","svelte-1ekcc4y"),r(d,"class","project_body svelte-1ekcc4y"),r(d,"style",t[5]%2==0?"right:0px;":"left:0px;"),r(e,"class","body_parts svelte-1ekcc4y"),W(e,"flex-direction",t[5]%2===1?"row-reverse":"row"),W(e,"margin-top",t[5]!==0?"50px":"0px")},m(P,G){$(P,e,G),i(e,s),i(s,n),i(n,c),i(n,u);for(let T=0;T<U.length;T+=1)U[T]&&U[T].m(n,null);i(s,a),i(s,f),i(s,v),i(s,w),i(e,y),i(e,d),i(d,o),i(o,l),i(o,h),i(o,I),i(I,k),i(d,L),i(d,M),i(M,j),i(d,N),i(d,R),i(d,X),i(d,B);for(let T=0;T<H.length;T+=1)H[T]&&H[T].m(B,null);i(e,J)},p(P,G){if(G&2&&!C(k.src,E=P[1]+"/images/octocat.png")&&r(k,"src",E),G&0){Z=oe(P[3].stack);let T;for(T=0;T<Z.length;T+=1){const x=Se(P,Z,T);H[T]?H[T].p(x,G):(H[T]=Re(x),H[T].c(),H[T].m(B,null))}for(;T<H.length;T+=1)H[T].d(1);H.length=Z.length}},d(P){P&&_(e),ke(U,P),ke(H,P)}}}function it(t){let e,s,n,c,u,a,f,v,w,y,d=oe(Me.project),o=[];for(let p=0;p<d.length;p+=1)o[p]=Ce(Le(t,d,p));return{c(){e=g("div"),s=g("div"),n=g("img"),u=A(),a=g("div"),f=g("div"),v=A(),w=g("div"),y=g("div");for(let p=0;p<o.length;p+=1)o[p].c();this.h()},l(p){e=m(p,"DIV",{id:!0,"data-scroll":!0,class:!0});var l=b(e);s=m(l,"DIV",{class:!0});var h=b(s);n=m(h,"IMG",{src:!0,width:!0,alt:!0,class:!0}),u=D(h),a=m(h,"DIV",{class:!0});var I=b(a);f=m(I,"DIV",{class:!0,style:!0});var k=b(f);k.forEach(_),I.forEach(_),h.forEach(_),v=D(l),w=m(l,"DIV",{id:!0,class:!0});var E=b(w);y=m(E,"DIV",{id:!0,class:!0});var L=b(y);for(let M=0;M<o.length;M+=1)o[M].l(L);L.forEach(_),E.forEach(_),l.forEach(_),this.h()},h(){C(n.src,c=t[1]+"/images/projects_header.png")||r(n,"src",c),r(n,"width","275px"),r(n,"alt","project_intro"),r(n,"class","svelte-1ekcc4y"),r(f,"class","github_icon svelte-1ekcc4y"),W(f,"background-image","url('"+t[1]+"/images/octocat.png')"),r(a,"class","github_link svelte-1ekcc4y"),r(s,"class","intro_block svelte-1ekcc4y"),r(y,"id","content-holder"),r(y,"class","svelte-1ekcc4y"),r(w,"id","projects_floating_tab"),r(w,"class","svelte-1ekcc4y"),Y(w,"full_width",t[0]>t[2]),Y(w,"partial_width",t[0]<=t[2]),r(e,"id","projects"),r(e,"data-scroll",t[0]),r(e,"class","svelte-1ekcc4y")},m(p,l){$(p,e,l),i(e,s),i(s,n),i(s,u),i(s,a),i(a,f),i(e,v),i(e,w),i(w,y);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(y,null)},p(p,[l]){if(l&2&&!C(n.src,c=p[1]+"/images/projects_header.png")&&r(n,"src",c),l&2&&W(f,"background-image","url('"+p[1]+"/images/octocat.png')"),l&2){d=oe(Me.project);let h;for(h=0;h<d.length;h+=1){const I=Le(p,d,h);o[h]?o[h].p(I,l):(o[h]=Ce(I),o[h].c(),o[h].m(y,null))}for(;h<o.length;h+=1)o[h].d(1);o.length=d.length}l&5&&Y(w,"full_width",p[0]>p[2]),l&5&&Y(w,"partial_width",p[0]<=p[2]),l&1&&r(e,"data-scroll",p[0])},i:Q,o:Q,d(p){p&&_(e),ke(o,p)}}}function ct(t,e,s){let{scroll:n=0}=e,c=0,{path:u=""}=e;return je(()=>{const a=document.getElementById("projects"),f=document.getElementsByTagName("body");s(0,n=f[0].scrollTop),s(2,c=a==null?void 0:a.offsetTop),console.log(a==null?void 0:a.offsetTop),console.log(n)}),t.$$set=a=>{"scroll"in a&&s(0,n=a.scroll),"path"in a&&s(1,u=a.path)},[n,u,c]}class ot extends de{constructor(e){super(),he(this,e,ct,it,ue,{scroll:0,path:1})}}function ut(t){let e,s,n,c,u,a,f,v,w,y,d,o,p,l,h,I=`<p class="svelte-1wawrok">I am a computer science
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
                        Masters in Computer Science</p></div>`,k,E,L,M,S,j,N;return{c(){e=g("div"),s=g("div"),n=g("img"),u=A(),a=g("div"),f=g("img"),w=A(),y=g("div"),d=g("div"),o=g("img"),l=A(),h=g("div"),h.innerHTML=I,k=A(),E=g("img"),M=A(),S=g("div"),j=g("img"),this.h()},l(R){e=m(R,"DIV",{id:!0,class:!0});var z=b(e);s=m(z,"DIV",{id:!0,class:!0});var X=b(s);n=m(X,"IMG",{src:!0,alt:!0,class:!0}),X.forEach(_),u=D(z),a=m(z,"DIV",{class:!0});var B=b(a);f=m(B,"IMG",{id:!0,src:!0,width:!0,alt:!0,class:!0}),B.forEach(_),w=D(z),y=m(z,"DIV",{id:!0,class:!0});var J=b(y);d=m(J,"DIV",{id:!0,class:!0});var O=b(d);o=m(O,"IMG",{src:!0,alt:!0,class:!0}),l=D(O),h=m(O,"DIV",{class:!0,["data-svelte-h"]:!0}),we(h)!=="svelte-1olwar1"&&(h.innerHTML=I),k=D(O),E=m(O,"IMG",{src:!0,alt:!0,class:!0}),O.forEach(_),J.forEach(_),M=D(z),S=m(z,"DIV",{class:!0});var U=b(S);j=m(U,"IMG",{id:!0,src:!0,width:!0,alt:!0,class:!0}),U.forEach(_),z.forEach(_),this.h()},h(){C(n.src,c=t[0]+"/images/about_ring.png")||r(n,"src",c),r(n,"alt","about ring"),r(n,"class","svelte-1wawrok"),r(s,"id","picture_of_me"),r(s,"class","svelte-1wawrok"),r(f,"id","about_intro"),C(f.src,v=t[0]+"/images/about_header.png")||r(f,"src",v),r(f,"width","200px"),r(f,"alt","contact_header"),r(f,"class","svelte-1wawrok"),r(a,"class","surrounding_image_intros svelte-1wawrok"),C(o.src,p=t[0]+"/images/pattern.svg")||r(o,"src",p),r(o,"alt","pattern"),r(o,"class","svelte-1wawrok"),r(h,"class","content_container svelte-1wawrok"),C(E.src,L=t[0]+"/images/pattern.svg")||r(E,"src",L),r(E,"alt","pattern"),r(E,"class","svelte-1wawrok"),r(d,"id","content_area"),r(d,"class","svelte-1wawrok"),r(y,"id","surrounding_area"),r(y,"class","svelte-1wawrok"),r(j,"id","projects_intro"),C(j.src,N=t[0]+"/images/projects_header.png")||r(j,"src",N),r(j,"width","275px"),r(j,"alt","contact_header"),r(j,"class","svelte-1wawrok"),r(S,"class","surrounding_image_intros svelte-1wawrok"),r(e,"id","about"),r(e,"class","svelte-1wawrok")},m(R,z){$(R,e,z),i(e,s),i(s,n),i(e,u),i(e,a),i(a,f),i(e,w),i(e,y),i(y,d),i(d,o),i(d,l),i(d,h),i(d,k),i(d,E),i(e,M),i(e,S),i(S,j)},p(R,[z]){z&1&&!C(n.src,c=R[0]+"/images/about_ring.png")&&r(n,"src",c),z&1&&!C(f.src,v=R[0]+"/images/about_header.png")&&r(f,"src",v),z&1&&!C(o.src,p=R[0]+"/images/pattern.svg")&&r(o,"src",p),z&1&&!C(E.src,L=R[0]+"/images/pattern.svg")&&r(E,"src",L),z&1&&!C(j.src,N=R[0]+"/images/projects_header.png")&&r(j,"src",N)},i:Q,o:Q,d(R){R&&_(e)}}}function dt(t,e,s){let{path:n=""}=e;return t.$$set=c=>{"path"in c&&s(0,n=c.path)},[n]}class ht extends de{constructor(e){super(),he(this,e,dt,ut,ue,{path:0})}}function ft(t){let e,s,n,c,u,a,f,v,w,y=":",d,o,p=t[3]<10?"0":"",l,h,I,k,E;return{c(){e=g("div"),s=g("p"),n=g("span"),c=F(t[0]),u=A(),a=g("span"),f=F(t[1]),v=A(),w=g("span"),w.textContent=y,d=A(),o=g("span"),l=F(p),h=F(t[3]),I=A(),k=g("span"),E=F(t[2]),this.h()},l(L){e=m(L,"DIV",{});var M=b(e);s=m(M,"P",{class:!0});var S=b(s);n=m(S,"SPAN",{class:!0});var j=b(n);c=q(j,t[0]),j.forEach(_),u=D(S),a=m(S,"SPAN",{class:!0});var N=b(a);f=q(N,t[1]),N.forEach(_),v=D(S),w=m(S,"SPAN",{class:!0,["data-svelte-h"]:!0}),we(w)!=="svelte-19v4cur"&&(w.textContent=y),d=D(S),o=m(S,"SPAN",{class:!0});var R=b(o);l=q(R,p),h=q(R,t[3]),R.forEach(_),I=D(S),k=m(S,"SPAN",{class:!0});var z=b(k);E=q(z,t[2]),z.forEach(_),S.forEach(_),M.forEach(_),this.h()},h(){r(n,"class","svelte-1vmh6yp"),r(a,"class","svelte-1vmh6yp"),r(w,"class","semi-colon svelte-1vmh6yp"),r(o,"class","svelte-1vmh6yp"),r(k,"class","svelte-1vmh6yp"),r(s,"class","svelte-1vmh6yp")},m(L,M){$(L,e,M),i(e,s),i(s,n),i(n,c),i(s,u),i(s,a),i(a,f),i(s,v),i(s,w),i(s,d),i(s,o),i(o,l),i(o,h),i(s,I),i(s,k),i(k,E)},p(L,[M]){M&1&&pe(c,L[0]),M&2&&pe(f,L[1]),M&8&&p!==(p=L[3]<10?"0":"")&&pe(l,p),M&8&&pe(h,L[3]),M&4&&pe(E,L[2])},i:Q,o:Q,d(L){L&&_(e)}}}function vt(t,e,s){let{otherRegion:n=0}=e,{region:c="Irvine"}=e,u=new Date;u.getDay();let a=u.getHours();a+=n,a=a>=24?a-24:a;let f=a>12?"PM":"AM";u.getUTCFullYear();let v=u.getMinutes();return setInterval(()=>{s(3,v+=1),s(3,v=v==60?0:v),s(1,a=v==60?a+1:a),s(1,a=a>=24?a-24:a),s(2,f=a>12?"PM":"AM")},6e4),t.$$set=w=>{"otherRegion"in w&&s(4,n=w.otherRegion),"region"in w&&s(0,c=w.region)},[c,a,f,v,n]}class Ve extends de{constructor(e){super(),he(this,e,vt,ft,ue,{otherRegion:4,region:0})}}function gt(t){let e,s,n,c,u,a,f,v,w,y,d,o='<span id="hi" class="svelte-3tk6w4">Hi,</span><br/> <span id="my" class="svelte-3tk6w4">my name is Kenny Weeks. </span><br/> <span id="welcome" class="svelte-3tk6w4">Welcome to my  ...</span>',p,l,h,I;return a=new Ve({}),v=new Ve({props:{otherRegion:10,region:"Bucharest"}}),{c(){e=g("div"),s=g("img"),c=A(),u=g("div"),se(a.$$.fragment),f=A(),se(v.$$.fragment),w=A(),y=g("div"),d=g("h3"),d.innerHTML=o,p=A(),l=g("img"),this.h()},l(k){e=m(k,"DIV",{id:!0,class:!0});var E=b(e);s=m(E,"IMG",{id:!0,alt:!0,src:!0,width:!0,class:!0}),c=D(E),u=m(E,"DIV",{id:!0,class:!0});var L=b(u);re(a.$$.fragment,L),f=D(L),re(v.$$.fragment,L),L.forEach(_),w=D(E),y=m(E,"DIV",{id:!0,class:!0});var M=b(y);d=m(M,"H3",{id:!0,class:!0,["data-svelte-h"]:!0}),we(d)!=="svelte-t6a2lj"&&(d.innerHTML=o),p=D(M),l=m(M,"IMG",{id:!0,src:!0,alt:!0,class:!0}),M.forEach(_),E.forEach(_),this.h()},h(){r(s,"id","wolf"),r(s,"alt","wolf"),C(s.src,n=t[0]+"/images/wolf.png")||r(s,"src",n),r(s,"width","80px"),r(s,"class","svelte-3tk6w4"),r(u,"id","clocks"),r(u,"class","svelte-3tk6w4"),Y(u,"layout_1_clocks",t[1]>t[2]),Y(u,"layout_2_clocks",t[1]<=t[2]),r(d,"id","intro_text"),r(d,"class","svelte-3tk6w4"),r(l,"id","portfolio_text"),C(l.src,h=t[0]+"/images/portfolio_title"+(t[1]>t[2],"_large")+".svg")||r(l,"src",h),r(l,"alt","portfolio_text"),r(l,"class","svelte-3tk6w4"),r(y,"id","intro"),r(y,"class","svelte-3tk6w4"),Y(y,"layout_2_intro",t[1]<=t[2]),Y(y,"layout_1_intro",t[1]>t[2]),r(e,"id","landing"),r(e,"class","svelte-3tk6w4")},m(k,E){$(k,e,E),i(e,s),i(e,c),i(e,u),ne(a,u,null),i(u,f),ne(v,u,null),i(e,w),i(e,y),i(y,d),i(y,p),i(y,l),I=!0},p(k,[E]){(!I||E&1&&!C(s.src,n=k[0]+"/images/wolf.png"))&&r(s,"src",n),(!I||E&6)&&Y(u,"layout_1_clocks",k[1]>k[2]),(!I||E&6)&&Y(u,"layout_2_clocks",k[1]<=k[2]),(!I||E&7&&!C(l.src,h=k[0]+"/images/portfolio_title"+(k[1]>k[2],"_large")+".svg"))&&r(l,"src",h),(!I||E&6)&&Y(y,"layout_2_intro",k[1]<=k[2]),(!I||E&6)&&Y(y,"layout_1_intro",k[1]>k[2])},i(k){I||(ae(a.$$.fragment,k),ae(v.$$.fragment,k),I=!0)},o(k){le(a.$$.fragment,k),le(v.$$.fragment,k),I=!1},d(k){k&&_(e),ie(a),ie(v)}}}function mt(t,e,s){let{path:n=""}=e,{screenWidth:c}=e,{screenHeight:u}=e;return je(()=>{let a=document.getElementById("hi"),f=document.getElementById("my"),v=document.getElementById("welcome"),w=document.getElementById("portfolio_text");setTimeout(()=>{a.style.opacity=1},500),setTimeout(()=>{f.style.opacity=1},1400),setTimeout(()=>{v.style.opacity=1},2500),setTimeout(()=>{w.style.opacity=1},3600)}),t.$$set=a=>{"path"in a&&s(0,n=a.path),"screenWidth"in a&&s(1,c=a.screenWidth),"screenHeight"in a&&s(2,u=a.screenHeight)},[n,c,u]}class pt extends de{constructor(e){super(),he(this,e,mt,gt,ue,{path:0,screenWidth:1,screenHeight:2})}}function _t(t){let e,s,n,c,u,a,f,v,w,y,d,o,p;return We(t[3]),s=new Fe({}),c=new pt({props:{path:ye,screenWidth:t[0],screenHeight:t[1]}}),a=new ht({props:{path:ye}}),v=new ot({props:{scroll:t[2],path:ye}}),y=new Qe({props:{path:ye,screenWidth:t[0]}}),{c(){e=A(),se(s.$$.fragment),n=A(),se(c.$$.fragment),u=A(),se(a.$$.fragment),f=A(),se(v.$$.fragment),w=A(),se(y.$$.fragment)},l(l){e=D(l),re(s.$$.fragment,l),n=D(l),re(c.$$.fragment,l),u=D(l),re(a.$$.fragment,l),f=D(l),re(v.$$.fragment,l),w=D(l),re(y.$$.fragment,l)},m(l,h){$(l,e,h),ne(s,l,h),$(l,n,h),ne(c,l,h),$(l,u,h),ne(a,l,h),$(l,f,h),ne(v,l,h),$(l,w,h),ne(y,l,h),d=!0,o||(p=[ge(window,"resize",t[3]),ge(document.body,"scroll",t[4])],o=!0)},p(l,[h]){const I={};h&1&&(I.screenWidth=l[0]),h&2&&(I.screenHeight=l[1]),c.$set(I);const k={};h&4&&(k.scroll=l[2]),v.$set(k);const E={};h&1&&(E.screenWidth=l[0]),y.$set(E)},i(l){d||(ae(s.$$.fragment,l),ae(c.$$.fragment,l),ae(a.$$.fragment,l),ae(v.$$.fragment,l),ae(y.$$.fragment,l),d=!0)},o(l){le(s.$$.fragment,l),le(c.$$.fragment,l),le(a.$$.fragment,l),le(v.$$.fragment,l),le(y.$$.fragment,l),d=!1},d(l){l&&(_(e),_(n),_(u),_(f),_(w)),ie(s,l),ie(c,l),ie(a,l),ie(v,l),ie(y,l),o=!1,ze(p)}}}function wt(t,e,s){let n,c,u=0;function a(){s(0,n=window.innerWidth),s(1,c=window.innerHeight)}return[n,c,u,a,v=>{s(2,u=v.target.scrollTop)}]}class Et extends de{constructor(e){super(),he(this,e,wt,_t,ue,{})}}export{Et as component};
