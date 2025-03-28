(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{7685:(e,s,t)=>{"use strict";t.d(s,{l$:()=>ec,Ay:()=>ed});var i,r=t(4232);let a={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||a,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,s)=>{let t="",i="",r="";for(let a in e){let o=e[a];"@"==a[0]?"i"==a[1]?t=a+" "+o+";":i+="f"==a[1]?d(o,a):a+"{"+d(o,"k"==a[1]?"":s)+"}":"object"==typeof o?i+=d(o,s?s.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,s=>/&/.test(s)?s.replace(/&/g,e):e?e+" "+s:s)):a):null!=o&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=d.p?d.p(a,o):a+":"+o+";")}return t+(s&&r?s+"{"+r+"}":r)+i},p={},m=e=>{if("object"==typeof e){let s="";for(let t in e)s+=t+m(e[t]);return s}return e},u=(e,s,t,i,r)=>{let a=m(e),o=p[a]||(p[a]=(e=>{let s=0,t=11;for(;s<e.length;)t=101*t+e.charCodeAt(s++)>>>0;return"go"+t})(a));if(!p[o]){let s=a!==e?e:(e=>{let s,t,i=[{}];for(;s=n.exec(e.replace(l,""));)s[4]?i.shift():s[3]?(t=s[3].replace(c," ").trim(),i.unshift(i[0][t]=i[0][t]||{})):i[0][s[1]]=s[2].replace(c," ").trim();return i[0]})(e);p[o]=d(r?{["@keyframes "+o]:s}:s,t?"":"."+o)}let u=t&&p.g?p.g:null;return t&&(p.g=p[o]),((e,s,t,i)=>{i?s.data=s.data.replace(i,e):-1===s.data.indexOf(e)&&(s.data=t?e+s.data:s.data+e)})(p[o],s,i,u),o},g=(e,s,t)=>e.reduce((e,i,r)=>{let a=s[r];if(a&&a.call){let e=a(t),s=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=s?"."+s:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+i+(null==a?"":a)},"");function h(e){let s=this||{},t=e.call?e(s.p):e;return u(t.unshift?t.raw?g(t,[].slice.call(arguments,1),s.p):t.reduce((e,t)=>Object.assign(e,t&&t.call?t(s.p):t),{}):t,o(s.target),s.g,s.o,s.k)}h.bind({g:1});let f,x,v,y=h.bind({k:1});function j(e,s){let t=this||{};return function(){let i=arguments;function r(a,o){let n=Object.assign({},a),l=n.className||r.className;t.p=Object.assign({theme:x&&x()},n),t.o=/ *go\d+/.test(l),n.className=h.apply(t,i)+(l?" "+l:""),s&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),f(c,n)}return s?s(r):r}}var b=e=>"function"==typeof e,_=(e,s)=>b(e)?e(s):e,w=(()=>{let e=0;return()=>(++e).toString()})(),k=(()=>{let e;return()=>{if(void 0===e&&"u">typeof window){let s=matchMedia("(prefers-reduced-motion: reduce)");e=!s||s.matches}return e}})(),E=(e,s)=>{switch(s.type){case 0:return{...e,toasts:[s.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===s.toast.id?{...e,...s.toast}:e)};case 2:let{toast:t}=s;return E(e,{type:+!!e.toasts.find(e=>e.id===t.id),toast:t});case 3:let{toastId:i}=s;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===s.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==s.toastId)};case 5:return{...e,pausedAt:s.time};case 6:let r=s.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},D=[],T={toasts:[],pausedAt:void 0},P=e=>{T=E(T,e),D.forEach(e=>{e(T)})},N={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=(e={})=>{let[s,t]=(0,r.useState)(T),i=(0,r.useRef)(T);(0,r.useEffect)(()=>(i.current!==T&&t(T),D.push(t),()=>{let e=D.indexOf(t);e>-1&&D.splice(e,1)}),[]);let a=s.toasts.map(s=>{var t,i,r;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||(null==(t=e[s.type])?void 0:t.removeDelay)||(null==e?void 0:e.removeDelay),duration:s.duration||(null==(i=e[s.type])?void 0:i.duration)||(null==e?void 0:e.duration)||N[s.type],style:{...e.style,...null==(r=e[s.type])?void 0:r.style,...s.style}}});return{...s,toasts:a}},O=(e,s="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:s,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...t,id:(null==t?void 0:t.id)||w()}),C=e=>(s,t)=>{let i=O(s,e,t);return P({type:2,toast:i}),i.id},A=(e,s)=>C("blank")(e,s);A.error=C("error"),A.success=C("success"),A.loading=C("loading"),A.custom=C("custom"),A.dismiss=e=>{P({type:3,toastId:e})},A.remove=e=>P({type:4,toastId:e}),A.promise=(e,s,t)=>{let i=A.loading(s.loading,{...t,...null==t?void 0:t.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=s.success?_(s.success,e):void 0;return r?A.success(r,{id:i,...t,...null==t?void 0:t.success}):A.dismiss(i),e}).catch(e=>{let r=s.error?_(s.error,e):void 0;r?A.error(r,{id:i,...t,...null==t?void 0:t.error}):A.dismiss(i)}),e};var F=(e,s)=>{P({type:1,toast:{id:e,height:s}})},I=()=>{P({type:5,time:Date.now()})},z=new Map,S=1e3,V=(e,s=S)=>{if(z.has(e))return;let t=setTimeout(()=>{z.delete(e),P({type:4,toastId:e})},s);z.set(e,t)},W=e=>{let{toasts:s,pausedAt:t}=$(e);(0,r.useEffect)(()=>{if(t)return;let e=Date.now(),i=s.map(s=>{if(s.duration===1/0)return;let t=(s.duration||0)+s.pauseDuration-(e-s.createdAt);if(t<0){s.visible&&A.dismiss(s.id);return}return setTimeout(()=>A.dismiss(s.id),t)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[s,t]);let i=(0,r.useCallback)(()=>{t&&P({type:6,time:Date.now()})},[t]),a=(0,r.useCallback)((e,t)=>{let{reverseOrder:i=!1,gutter:r=8,defaultPosition:a}=t||{},o=s.filter(s=>(s.position||a)===(e.position||a)&&s.height),n=o.findIndex(s=>s.id===e.id),l=o.filter((e,s)=>s<n&&e.visible).length;return o.filter(e=>e.visible).slice(...i?[l+1]:[0,l]).reduce((e,s)=>e+(s.height||0)+r,0)},[s]);return(0,r.useEffect)(()=>{s.forEach(e=>{if(e.dismissed)V(e.id,e.removeDelay);else{let s=z.get(e.id);s&&(clearTimeout(s),z.delete(e.id))}})},[s]),{toasts:s,handlers:{updateHeight:F,startPause:I,endPause:i,calculateOffset:a}}},B=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,q=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M} 0.15s ease-out forwards;
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
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,R=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,U=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=y`
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
}`,G=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
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
`,J=j("div")`
  position: absolute;
`,K=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Q=({toast:e})=>{let{icon:s,type:t,iconTheme:i}=e;return void 0!==s?"string"==typeof s?r.createElement(Z,null,s):s:"blank"===t?null:r.createElement(K,null,r.createElement(R,{...i}),"loading"!==t&&r.createElement(J,null,"error"===t?r.createElement(q,{...i}):r.createElement(G,{...i})))},ee=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,et=j("div")`
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
`,ei=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,er=(e,s)=>{let t=e.includes("top")?1:-1,[i,r]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ee(t),es(t)];return{animation:s?`${y(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ea=r.memo(({toast:e,position:s,style:t,children:i})=>{let a=e.height?er(e.position||s||"top-center",e.visible):{opacity:0},o=r.createElement(Q,{toast:e}),n=r.createElement(ei,{...e.ariaProps},_(e.message,e));return r.createElement(et,{className:e.className,style:{...a,...t,...e.style}},"function"==typeof i?i({icon:o,message:n}):r.createElement(r.Fragment,null,o,n))});i=r.createElement,d.p=void 0,f=i,x=void 0,v=void 0;var eo=({id:e,className:s,style:t,onHeightUpdate:i,children:a})=>{let o=r.useCallback(s=>{if(s){let t=()=>{i(e,s.getBoundingClientRect().height)};t(),new MutationObserver(t).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return r.createElement("div",{ref:o,className:s,style:t},a)},en=(e,s)=>{let t=e.includes("top"),i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${s*(t?1:-1)}px)`,...t?{top:0}:{bottom:0},...i}},el=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ec=({reverseOrder:e,position:s="top-center",toastOptions:t,gutter:i,children:a,containerStyle:o,containerClassName:n})=>{let{toasts:l,handlers:c}=W(t);return r.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(t=>{let o=t.position||s,n=en(o,c.calculateOffset(t,{reverseOrder:e,gutter:i,defaultPosition:s}));return r.createElement(eo,{id:t.id,key:t.id,onHeightUpdate:c.updateHeight,className:t.visible?el:"",style:n},"custom"===t.type?_(t.message,t):a?a(t):r.createElement(ea,{toast:t,position:o}))}))},ed=A},8321:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var i=t(7876);t(4232);var r=t(5398),a=t(7888);t(1781),t(5479);var o=t(9365);let n=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{class:"container-fluid mt-5",children:(0,i.jsxs)("div",{class:"row align-items-center common_padding",children:[(0,i.jsx)("div",{class:"col-12 col-lg-5 pe-0 pe-lg-3 d-none d-lg-block",children:(0,i.jsxs)("div",{class:"ab_altt relative",children:[(0,i.jsx)("img",{src:"/imgs/images/hong-image.webp"}),(0,i.jsxs)("div",{class:"ab_content_a destination_cc_pack",children:[(0,i.jsx)("p",{class:"ab_tt",children:"Discover Hong Kong"}),(0,i.jsx)("p",{class:"mt-2 font_14",children:"Uncover some of the best-hidden destinations and famous places with Traveloways. We offer simple booking options along with great services and offers to make your journey worth remembering. Get in touch today to fly to your favorite destination."}),(0,i.jsxs)("a",{href:"/tour/hong-kong",class:"know_btt",children:[(0,i.jsx)("img",{src:"/imgs/images/arrow-right.png"})," View More Details"]})]})]})}),(0,i.jsxs)("div",{class:"col-12 col-lg-7 px-0 px-lg-4",children:[(0,i.jsx)("div",{class:"mb-4",children:(0,i.jsx)("h3",{class:"common_title",children:"Explore Different Destinations With Us"})}),(0,i.jsxs)("div",{class:"destination_grid",children:[(0,i.jsxs)("div",{class:"destination_container relative",children:[(0,i.jsx)("img",{src:"/imgs/images/packages/dubai-image.webp"}),(0,i.jsxs)("div",{class:"destination_cc",children:[(0,i.jsx)("p",{class:"des_title1",children:"Pacakge to Dubai"}),(0,i.jsx)("p",{class:"mt-2 font_12",children:"Born out of a passion for seamless journeys and unforgettable adventures..."}),(0,i.jsxs)("a",{href:"/tour/dubai",class:"knowmore_btt",children:["View more Details ",(0,i.jsx)("img",{src:"/imgs/images/arrow-right.png"})," "]})]})]}),(0,i.jsxs)("div",{class:"destination_container relative destination_container2",children:[(0,i.jsx)("img",{src:"/imgs/images/packages/turkey-image.webp"}),(0,i.jsxs)("div",{class:"destination_cc",children:[(0,i.jsx)("p",{class:"des_title1",children:"Pacakge to Turkey"}),(0,i.jsx)("p",{class:"mt-2 font_12",children:"Orn out of a passion for seamless journeys and unforgettable adventures, Traveloways is your ultimate travel partner. We’re here..."}),(0,i.jsxs)("a",{href:"/tour/turkey",class:"knowmore_btt",children:["View more Details ",(0,i.jsx)("img",{src:"/imgs/images/arrow-right.png"})," "]})]})]})]}),(0,i.jsxs)("div",{class:"destination_grid mt-4",children:[(0,i.jsxs)("div",{class:"destination_container relative destination_container2",children:[(0,i.jsx)("img",{src:"/imgs/images/packages/poland-img.webp"}),(0,i.jsxs)("div",{class:"destination_cc",children:[(0,i.jsx)("p",{class:"des_title1",children:"Pacakge to Poland"}),(0,i.jsx)("p",{class:"mt-2 font_12",children:"Orn out of a passion for seamless journeys and unforgettable adventures, Traveloways is your ultimate travel partner. We’re here..."}),(0,i.jsxs)("a",{href:"/tour/poland",class:"knowmore_btt",children:["View more Details ",(0,i.jsx)("img",{src:"/imgs/images/arrow-right.png"})," "]})]})]}),(0,i.jsxs)("div",{class:"destination_container relative",children:[(0,i.jsx)("img",{src:"/imgs/images/packages/kenya-image.webp"}),(0,i.jsxs)("div",{class:"destination_cc",children:[(0,i.jsx)("p",{class:"des_title1",children:"Pacakge to Kenya"}),(0,i.jsx)("p",{class:"mt-2 font_12",children:"Born out of a passion for seamless journeys and unforgettable adventures..."}),(0,i.jsxs)("a",{href:"/tour/kenya",class:"knowmore_btt",children:["View more Details ",(0,i.jsx)("img",{src:"/imgs/images/arrow-right.png"})," "]})]})]})]})]})]})})}),l=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{class:"container-fluid container-xl margin_top mb-5",children:(0,i.jsx)("div",{class:"row common_padding",children:(0,i.jsx)("div",{class:"col-12 bg_contt m-auto",children:(0,i.jsxs)("div",{class:"row",children:[(0,i.jsxs)("div",{class:"col-12 text-start text-md-center mb-2 mb-sm-4",children:[(0,i.jsx)("p",{class:"semi_title mb-2",children:"Fly with us to your next destination..."}),(0,i.jsx)("h1",{class:"common_title",children:"Explore Seamless Adventures with Traveloways"})]}),(0,i.jsxs)("div",{class:"col-12 col-lg-7 pe-0 pe-lg-3",children:[(0,i.jsx)("p",{class:"mt-0 mt-sm-3 font_13",children:"Traveloways is your one-stop destination for exploring the world one place at a time. We are dedicated to making your travel experience as hassle-free and smooth as possible. From flights and hotels to other curated activities, we offer a wide array of options to suit your needs."}),(0,i.jsx)("p",{class:"mt-4 font_13",children:"As every journey is unique in its way therefore we at Traveloways strive to cater to a number of travel styles and preferences. So if you are planning a family vacation, weekend getaway with friends or a solo trip use our user-friendly platform and expert resources to navigate the world at ease."}),(0,i.jsx)("p",{class:"mt-4 font_13",children:"Join us today as we embark on this exciting journey together. Explore new places, savor delicious food, and cherish lifelong memories. Let Traveloways be your reliable companion to turn your travel dreams into reality."}),(0,i.jsx)("p",{class:"mt-4 font_13",children:"Born out of a passion for seamless journeys and unforgettable adventures, Traveloways is your ultimate travel partner. We’re here to make your dream destinations "})]}),(0,i.jsx)("div",{class:"col-12 col-lg-5 ps-0 ps-lg-3 mt-4 mt-lg-0",children:(0,i.jsx)("div",{class:"flight_imgg",children:(0,i.jsx)("img",{src:"/imgs/images/flight-img.png"})})})]})})})})});function c(){return(0,i.jsxs)(r.A,{title:"Cheap Tickets: Flights, Hotels and Packages – Traveloways",description:"Welcome to Traveloways",children:[(0,i.jsx)("section",{class:"hero_see flex_props justify-content-center relative package_herr",children:(0,i.jsx)("div",{class:"container-fluid container-xl",children:(0,i.jsxs)("div",{class:"row common_padding",children:[(0,i.jsxs)("div",{class:"col-12 text-center white hero_see_minus",children:[(0,i.jsx)("div",{children:(0,i.jsx)("h1",{class:"banner_t mt-2 mt-sm-4 pack_tt",children:"Where Every Journey Is Tailored For You! "})}),(0,i.jsxs)("a",{href:"/contact-us",class:"book_pck",children:[(0,i.jsx)("img",{src:"/imgs/images/right-arrow.png"}),"Book A Package"]})]}),(0,i.jsx)("div",{className:"hero_form_f p-0"}),(0,i.jsx)("div",{class:"swiper process_sliderr pro_al_hero pro_al_hero2 mt-5",children:(0,i.jsxs)(a.RC,{spaceBetween:20,slidesPerView:1,modules:[o.dK],breakpoints:{568:{slidesPerView:2},992:{slidesPerView:3},1400:{slidesPerView:4,spaceBetween:25}},className:"air_slider",children:[(0,i.jsx)(a.qr,{children:(0,i.jsxs)("div",{class:"pro_container flex_props",children:[(0,i.jsx)("div",{class:"pro_img",children:(0,i.jsx)("img",{src:"/imgs/images/deals-i.png",alt:"Easy Booking"})}),(0,i.jsxs)("div",{class:"pro_content",children:[(0,i.jsx)("p",{class:"pro_tit",children:"Easy Booking"}),(0,i.jsx)("p",{class:"pro_p",children:"Use our user-friendly platform for a seamless booking."})]})]})}),(0,i.jsx)(a.qr,{children:(0,i.jsxs)("div",{class:"pro_container flex_props",children:[(0,i.jsx)("div",{class:"pro_img",children:(0,i.jsx)("img",{src:"/imgs/images/round-i.png",alt:"Round"})}),(0,i.jsxs)("div",{class:"pro_content",children:[(0,i.jsx)("p",{class:"pro_tit",children:"Round The Clock Assistance"}),(0,i.jsx)("p",{class:"pro_p",children:"Get 24/7 assistance with our dedicated team of customer service."})]})]})}),(0,i.jsx)(a.qr,{children:(0,i.jsxs)("div",{class:"pro_container flex_props",children:[(0,i.jsx)("div",{class:"pro_img",children:(0,i.jsx)("img",{src:"/imgs/images/cust-i.png"})}),(0,i.jsxs)("div",{class:"pro_content",children:[(0,i.jsx)("p",{class:"pro_tit",children:"Custom Made Packages"}),(0,i.jsx)("p",{class:"pro_p",children:"We offer tailored packages that fit within your budget and preference."})]})]})}),(0,i.jsx)(a.qr,{children:(0,i.jsxs)("div",{class:"pro_container flex_props",children:[(0,i.jsx)("div",{class:"pro_img",children:(0,i.jsx)("img",{src:"/imgs/images/experts-i.png"})}),(0,i.jsxs)("div",{class:"pro_content",children:[(0,i.jsx)("p",{class:"pro_tit",children:"Expert Guidance"}),(0,i.jsx)("p",{class:"pro_p",children:"Get expert guidance for all your travel needs with our dedicated professionals."})]})]})})]})})]})})}),(0,i.jsx)("div",{className:"d-none d-lg-block",children:(0,i.jsx)(n,{})}),(0,i.jsx)("section",{class:"container-fluid container-xl margin_top steps_cont_main",children:(0,i.jsx)("div",{class:"row",children:(0,i.jsx)("div",{class:"col-12",children:(0,i.jsxs)("div",{class:"steps_gr",children:[(0,i.jsxs)("div",{class:"steps_cont",children:[(0,i.jsx)("div",{class:"steps_icc",children:(0,i.jsx)("img",{src:"/imgs/images/suitcase-luggage.png"})}),(0,i.jsx)("p",{class:"start_j",children:"Start Your Journey"}),(0,i.jsx)("p",{class:"font_12 mt-1",children:"Visit our site and enter your itinerary, needs and preferences"})]}),(0,i.jsxs)("div",{class:"steps_cont",children:[(0,i.jsx)("div",{class:"steps_icc",children:(0,i.jsx)("img",{src:"/imgs/images/cheap-i.png"})}),(0,i.jsx)("p",{class:"start_j",children:"Fill In Your Details"}),(0,i.jsx)("p",{class:"font_12 mt-1",children:"Tell us about your dream itinerary so that we can curate it for you"})]}),(0,i.jsxs)("div",{class:"steps_cont",children:[(0,i.jsx)("div",{class:"steps_icc",children:(0,i.jsx)("img",{src:"/imgs/images/secure-icon.png"})}),(0,i.jsx)("p",{class:"start_j",children:"Secure Your Spot"}),(0,i.jsx)("p",{class:"font_12 mt-1",children:"Tap on the search button to discover flights and receive your booking ID"})]}),(0,i.jsxs)("div",{class:"steps_cont",children:[(0,i.jsx)("div",{class:"steps_icc",children:(0,i.jsx)("img",{src:"/imgs/images/confirmation-i.png"})}),(0,i.jsx)("p",{class:"start_j",children:"Confirmation On It’s Way"}),(0,i.jsx)("p",{class:"font_12 mt-1",children:"Our team will reach out to you shortly once the booking is confirmed. "})]})]})})})}),(0,i.jsx)("div",{className:"d-block d-lg-none",children:(0,i.jsx)(n,{})}),(0,i.jsx)(l,{})]})}},9500:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/packages",function(){return t(8321)}])}},e=>{var s=s=>e(e.s=s);e.O(0,[3070,5398,636,6593,8792],()=>s(9500)),_N_E=e.O()}]);