(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9064],{5634:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/tours/poland",function(){return a(9284)}])},7685:(e,t,a)=>{"use strict";a.d(t,{l$:()=>ec,Ay:()=>ed});var r,o=a(4232);let i={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,t)=>{let a="",r="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+s+";":r+="f"==i[1]?d(s,i):i+"{"+d(s,"k"==i[1]?"":t)+"}":"object"==typeof s?r+=d(s,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=d.p?d.p(i,s):i+":"+s+";")}return a+(t&&o?t+"{"+o+"}":o)+r},u={},p=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+p(e[a]);return t}return e},m=(e,t,a,r,o)=>{let i=p(e),s=u[i]||(u[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!u[s]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=n.exec(e.replace(l,""));)t[4]?r.shift():t[3]?(a=t[3].replace(c," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(c," ").trim();return r[0]})(e);u[s]=d(o?{["@keyframes "+s]:t}:t,a?"":"."+s)}let m=a&&u.g?u.g:null;return a&&(u.g=u[s]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(u[s],t,r,m),s},h=(e,t,a)=>e.reduce((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function f(e){let t=this||{},a=e.call?e(t.p):e;return m(a.unshift?a.raw?h(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,s(t.target),t.g,t.o,t.k)}f.bind({g:1});let y,g,x,v=f.bind({k:1});function b(e,t){let a=this||{};return function(){let r=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;a.p=Object.assign({theme:g&&g()},n),a.o=/ *go\d+/.test(l),n.className=f.apply(a,r)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),x&&c[0]&&x(n),y(c,n)}return t?t(o):o}}var k=e=>"function"==typeof e,w=(e,t)=>k(e)?e(t):e,j=(()=>{let e=0;return()=>(++e).toString()})(),N=(()=>{let e;return()=>{if(void 0===e&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),_=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return _(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},P=[],E={toasts:[],pausedAt:void 0},T=e=>{E=_(E,e),P.forEach(e=>{e(E)})},C={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[t,a]=(0,o.useState)(E),r=(0,o.useRef)(E);(0,o.useEffect)(()=>(r.current!==E&&a(E),P.push(a),()=>{let e=P.indexOf(a);e>-1&&P.splice(e,1)}),[]);let i=t.toasts.map(t=>{var a,r,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||C[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:i}},$=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||j()}),O=e=>(t,a)=>{let r=$(t,e,a);return T({type:2,toast:r}),r.id},z=(e,t)=>O("blank")(e,t);z.error=O("error"),z.success=O("success"),z.loading=O("loading"),z.custom=O("custom"),z.dismiss=e=>{T({type:3,toastId:e})},z.remove=e=>T({type:4,toastId:e}),z.promise=(e,t,a)=>{let r=z.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?w(t.success,e):void 0;return o?z.success(o,{id:r,...a,...null==a?void 0:a.success}):z.dismiss(r),e}).catch(e=>{let o=t.error?w(t.error,e):void 0;o?z.error(o,{id:r,...a,...null==a?void 0:a.error}):z.dismiss(r)}),e};var A=(e,t)=>{T({type:1,toast:{id:e,height:t}})},M=()=>{T({type:5,time:Date.now()})},q=new Map,F=1e3,S=(e,t=F)=>{if(q.has(e))return;let a=setTimeout(()=>{q.delete(e),T({type:4,toastId:e})},t);q.set(e,a)},W=e=>{let{toasts:t,pausedAt:a}=D(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&z.dismiss(t.id);return}return setTimeout(()=>z.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,o.useCallback)(()=>{a&&T({type:6,time:Date.now()})},[a]),i=(0,o.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=a||{},s=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return(0,o.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)S(e.id,e.removeDelay);else{let t=q.get(e.id);t&&(clearTimeout(t),q.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:A,startPause:M,endPause:r,calculateOffset:i}}},I=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,H=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Y} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,K=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${K} 1s linear infinite;
`,G=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Q=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,R=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${G} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Q} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,U=b("div")`
  position: absolute;
`,X=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${V} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(Z,null,t):t:"blank"===a?null:o.createElement(X,null,o.createElement(L,{...r}),"loading"!==a&&o.createElement(U,null,"error"===a?o.createElement(B,{...r}):o.createElement(R,{...r})))},ee=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,et=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ea=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,er=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,eo=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ee(a),et(a)];return{animation:t?`${v(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ei=o.memo(({toast:e,position:t,style:a,children:r})=>{let i=e.height?eo(e.position||t||"top-center",e.visible):{opacity:0},s=o.createElement(J,{toast:e}),n=o.createElement(er,{...e.ariaProps},w(e.message,e));return o.createElement(ea,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof r?r({icon:s,message:n}):o.createElement(o.Fragment,null,s,n))});r=o.createElement,d.p=void 0,y=r,g=void 0,x=void 0;var es=({id:e,className:t,style:a,onHeightUpdate:r,children:i})=>{let s=o.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:s,className:t,style:a},i)},en=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:N()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},el=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ec=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:i,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:c}=W(a);return o.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let s=a.position||t,n=en(s,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(es,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?el:"",style:n},"custom"===a.type?w(a.message,a):i?i(a):o.createElement(ei,{toast:a,position:s}))}))},ed=z},9284:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(7876);a(4232);var o=a(2508);function i(){return(0,r.jsxs)(o.A,{title:"Cheap Tickets: Flights, Hotels and Packages – Traveloways",description:"Welcome to Traveloways",children:[(0,r.jsx)("section",{className:"hero_see pack_ss_p poland_bg",children:(0,r.jsx)("div",{className:"container-fluid container-xl",children:(0,r.jsxs)("div",{className:"row justify-content-center align-items-center common_padding",children:[(0,r.jsx)("div",{className:"col-12 col-md-6 pe-0 pe-md-4 white",children:(0,r.jsxs)("div",{className:"des_stt_pacc relative",children:[(0,r.jsx)("h5",{className:"title_d",children:"Explore Poland With Our Holiday Packages "}),(0,r.jsx)("p",{className:"mt-1 com_cc",children:"Compare upto 3 quotes for free..."}),(0,r.jsx)("p",{className:"starting_f mt-3",children:"Starting From $899.00"})]})}),(0,r.jsx)("div",{className:"col-12 col-md-5 ps-0 ps-md-4 mt-4 mt-md-0",children:(0,r.jsxs)("form",{className:"row form_pack_h",children:[(0,r.jsxs)("div",{className:"col-12 text-center",children:[(0,r.jsx)("p",{className:"fw-600 want_tt",children:"Want to Go For A Memorable Holiday?"}),(0,r.jsx)("p",{className:"font_12 mt-1",children:"Provide Your Details to Know Best Holiday Deals"})]}),(0,r.jsx)("div",{className:"col-12 pack_forms mt-2",children:(0,r.jsxs)("div",{className:"pack_inn",children:[(0,r.jsx)("label",{htmlFor:"packn",children:"Package Name"}),(0,r.jsx)("input",{type:"text",placeholder:"Package Name",id:"packn",className:"form-control"})]})}),(0,r.jsx)("div",{className:"col-6 pack_forms mt-2 pe-2",children:(0,r.jsxs)("div",{className:"pack_inn",children:[(0,r.jsx)("label",{htmlFor:"packn",children:"Name"}),(0,r.jsx)("input",{type:"text",placeholder:"Enter Your Name",id:"packn",className:"form-control",required:!0})]})}),(0,r.jsx)("div",{className:"col-6 pack_forms mt-2 ps-2",children:(0,r.jsxs)("div",{className:"pack_inn",children:[(0,r.jsx)("label",{htmlFor:"packn",children:"Email"}),(0,r.jsx)("input",{type:"text",placeholder:"Enter Your Email",id:"packn",className:"form-control",required:!0})]})}),(0,r.jsx)("div",{className:"col-12 pack_forms mt-2",children:(0,r.jsxs)("div",{className:"pack_inn",children:[(0,r.jsx)("label",{htmlFor:"packn",children:"Phone"}),(0,r.jsx)("input",{type:"text",placeholder:"Enter Your Number",id:"packn",className:"form-control",required:!0})]})}),(0,r.jsx)("div",{className:"col-12 mt-3",children:(0,r.jsx)("button",{className:"send_eqq",children:" Get Free Package Quotes"})})]})})]})})}),(0,r.jsx)("section",{className:"container-fluid container-xl mt-4 mb-5 spacing_m_p space_hh_mm",children:(0,r.jsx)("div",{className:"row common_padding",children:(0,r.jsxs)("div",{className:"col-12",children:[(0,r.jsx)("p",{children:"Looking for an unconventional place to travel this year? If yes then book your tickets for Poland with Traveloways. As a captivating land filled with rich history and natural beauty, Poland has a number of hidden destinations to explore. The tourist attractions in Poland are truly remarkable, offering a blend of rich culture, stunning landscapes, and unforgettable experiences. Witness charming medieval towns to breathtaking national parks and create wonderful memories ahead."}),(0,r.jsx)("p",{children:"Be ready to explore a world of wonder as you visit iconic sites like the majestic Wawel Castle in Krak\xf3w, the vibrant Market Square, and the serene beauty of the Tatra Mountains. Explore different destinations and picturesque scenery which will leave you in complete surprise. Choose to book your Poland vacation packages with Travelwoays and enrich your travel experience."}),(0,r.jsx)("p",{children:"With exceptional services and great value, you can enjoy everything this beautiful country has to offer without breaking the bank. Secure your latest holiday package to Poland and make memories that will last forever. Your dream vacation awaits!"}),(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"3 Nights/4 Days Poland Tour Package -"})," Enjoy a tailor-made itinerary for your 3 nights and 4 days Poland Tour Package with Traveloways."]})}),(0,r.jsx)("h5",{children:"Enjoy Your Poland Staycation"}),(0,r.jsx)("p",{children:"If you want to make your Poland trip exciting, then consider booking services with Traveloways. Our holiday packages are designed to offer exciting services for travelers. So, if you are looking for pocket-friendly trips or eccentric gateways, then consider Traveloways Poland Vacation packages, which are suited to everyone's requirements. Book your tickets today to discover the city's breathtaking architecture and fascinating history. "}),(0,r.jsx)("h5",{children:"3 Nights/4 Days Poland Tour Package"}),(0,r.jsx)("p",{children:"If you're in search of an unforgettable vacation in Poland, look no further! Traveloways is there to provide you a thoughtfully crafted itinerary for all your travel adventures in this stunning country."}),(0,r.jsx)("p",{children:"Our 3 Nights/4 Days Poland tour package is one of the best deals available, offering fantastic value for your money. The package is known for its essential services, such as visa processing, travel insurance, and return airport transfers, ensuring a smooth and hassle-free experience."}),(0,r.jsx)("p",{children:"During your trip, you'll have the chance to visit iconic landmarks like the magnificent Wawel Castle in Krak\xf3w, the historic Old Town of Warsaw, and the charming Market Square in Gdańsk. You can also take a poignant tour of the Auschwitz-Birkenau Memorial and Museum, where you can reflect on Poland's significant history."}),(0,r.jsx)("p",{children:"With a variety of exciting activities and memorable experiences, your journey through Poland will be truly remarkable. Don't miss out on this amazing Poland tour package—book today and create lasting memories with your loved ones!"}),(0,r.jsx)("h5",{children:"Conclusion "}),(0,r.jsx)("p",{children:"Book your tickets today with Traveloways Poland tour packages and enjoy a visit to the land of historic architecture, cultural significance, and traditional food. Take a tour of the city's iconic museums, royal castles, and old town, all at a reasonable price. Contact our experts in terms of any concerns or query related to the trip. "}),(0,r.jsx)("h5",{children:"FAQs "}),(0,r.jsxs)("div",{className:"faqs_c",children:[(0,r.jsx)("h5",{children:"1. What is the best time to book a Poland holiday package? "}),(0,r.jsx)("p",{children:"The best time to book a Poland holiday package is May and September because that is the time when the weather is pleasant with mild to warm temperatures. "}),(0,r.jsx)("h5",{children:"2. Where can I book a Poland holiday package?"}),(0,r.jsx)("p",{children:"Travelers can book a Poland holiday package by using the Traveloways platform. "}),(0,r.jsx)("h5",{children:"3. What are the major attractions in Krakow?"}),(0,r.jsx)("p",{children:"Some of the major attractions in Krakow are Main Market Square, Kazimierz, Podgorze, and Wawel Castle."}),(0,r.jsx)("p",{})]})]})})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[2508,636,6593,8792],()=>t(5634)),_N_E=e.O()}]);