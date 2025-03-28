(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4239],{6922:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a(8667)}])},7685:(e,t,a)=>{"use strict";a.d(t,{l$:()=>ed,Ay:()=>ec});var r,o=a(4232);let i={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||i,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,c=(e,t)=>{let a="",r="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+s+";":r+="f"==i[1]?c(s,i):i+"{"+c(s,"k"==i[1]?"":t)+"}":"object"==typeof s?r+=c(s,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=c.p?c.p(i,s):i+":"+s+";")}return a+(t&&o?t+"{"+o+"}":o)+r},u={},p=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+p(e[a]);return t}return e},m=(e,t,a,r,o)=>{let i=p(e),s=u[i]||(u[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!u[s]){let t=i!==e?e:(e=>{let t,a,r=[{}];for(;t=n.exec(e.replace(l,""));)t[4]?r.shift():t[3]?(a=t[3].replace(d," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(d," ").trim();return r[0]})(e);u[s]=c(o?{["@keyframes "+s]:t}:t,a?"":"."+s)}let m=a&&u.g?u.g:null;return a&&(u.g=u[s]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(u[s],t,r,m),s},f=(e,t,a)=>e.reduce((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function h(e){let t=this||{},a=e.call?e(t.p):e;return m(a.unshift?a.raw?f(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,s(t.target),t.g,t.o,t.k)}h.bind({g:1});let y,g,v,b=h.bind({k:1});function x(e,t){let a=this||{};return function(){let r=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;a.p=Object.assign({theme:g&&g()},n),a.o=/ *go\d+/.test(l),n.className=h.apply(a,r)+(l?" "+l:""),t&&(n.ref=s);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),y(d,n)}return t?t(o):o}}var w=e=>"function"==typeof e,j=(e,t)=>w(e)?e(t):e,k=(()=>{let e=0;return()=>(++e).toString()})(),E=(()=>{let e;return()=>{if(void 0===e&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),N=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return N(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},_=[],$={toasts:[],pausedAt:void 0},O=e=>{$=N($,e),_.forEach(e=>{e($)})},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=(e={})=>{let[t,a]=(0,o.useState)($),r=(0,o.useRef)($);(0,o.useEffect)(()=>(r.current!==$&&a($),_.push(a),()=>{let e=_.indexOf(a);e>-1&&_.splice(e,1)}),[]);let i=t.toasts.map(t=>{var a,r,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||T[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:i}},A=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||k()}),D=e=>(t,a)=>{let r=A(t,e,a);return O({type:2,toast:r}),r.id},P=(e,t)=>D("blank")(e,t);P.error=D("error"),P.success=D("success"),P.loading=D("loading"),P.custom=D("custom"),P.dismiss=e=>{O({type:3,toastId:e})},P.remove=e=>O({type:4,toastId:e}),P.promise=(e,t,a)=>{let r=P.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?j(t.success,e):void 0;return o?P.success(o,{id:r,...a,...null==a?void 0:a.success}):P.dismiss(r),e}).catch(e=>{let o=t.error?j(t.error,e):void 0;o?P.error(o,{id:r,...a,...null==a?void 0:a.error}):P.dismiss(r)}),e};var z=(e,t)=>{O({type:1,toast:{id:e,height:t}})},W=()=>{O({type:5,time:Date.now()})},I=new Map,F=1e3,S=(e,t=F)=>{if(I.has(e))return;let a=setTimeout(()=>{I.delete(e),O({type:4,toastId:e})},t);I.set(e,a)},M=e=>{let{toasts:t,pausedAt:a}=C(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&P.dismiss(t.id);return}return setTimeout(()=>P.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,o.useCallback)(()=>{a&&O({type:6,time:Date.now()})},[a]),i=(0,o.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=a||{},s=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return(0,o.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)S(e.id,e.removeDelay);else{let t=I.get(e.id);t&&(clearTimeout(t),I.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:z,startPause:W,endPause:r,calculateOffset:i}}},H=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q} 0.15s ease-out forwards;
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
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,X=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${R} 1s linear infinite;
`,Y=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=b`
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
}`,G=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
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
`,V=x("div")`
  position: absolute;
`,Z=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${J} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Q=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(K,null,t):t:"blank"===a?null:o.createElement(Z,null,o.createElement(X,{...r}),"loading"!==a&&o.createElement(V,null,"error"===a?o.createElement(U,{...r}):o.createElement(G,{...r})))},ee=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,et=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ea=x("div")`
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
`,er=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,eo=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ee(a),et(a)];return{animation:t?`${b(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ei=o.memo(({toast:e,position:t,style:a,children:r})=>{let i=e.height?eo(e.position||t||"top-center",e.visible):{opacity:0},s=o.createElement(Q,{toast:e}),n=o.createElement(er,{...e.ariaProps},j(e.message,e));return o.createElement(ea,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof r?r({icon:s,message:n}):o.createElement(o.Fragment,null,s,n))});r=o.createElement,c.p=void 0,y=r,g=void 0,v=void 0;var es=({id:e,className:t,style:a,onHeightUpdate:r,children:i})=>{let s=o.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:s,className:t,style:a},i)},en=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},el=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ed=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:i,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:d}=M(a);return o.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let s=a.position||t,n=en(s,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(es,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?el:"",style:n},"custom"===a.type?j(a.message,a):i?i(a):o.createElement(ei,{toast:a,position:s}))}))},ec=P},8667:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(7876);a(4232);var o=a(5398);function i(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.A,{title:"Cheap Tickets: Flights, Hotels and Packages – Traveloways",description:"Welcome to Traveloways",children:[(0,r.jsx)("section",{className:"common_banner_custt",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row"})})}),(0,r.jsx)("section",{className:"container-xl container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-12 text-center",children:(0,r.jsx)("p",{className:"title_t",children:"About Us"})})})}),(0,r.jsx)("section",{className:"container-fluid container-xl mt-4 mb-5",children:(0,r.jsx)("div",{className:"row common_padding",children:(0,r.jsxs)("div",{className:"col-12 spacing_m_p",children:[(0,r.jsx)("p",{children:"Welcome to Traveloways, your ultimate travel partner to discover the world like never before. We are sincere about making travel simple, enjoyable and accessible to all. Whatever, your travel needs are, Traveloways is there to help you out. As a reliable source for traveling we aim at being transparent with our offerings. Irrespective of your destination and occasion, we are here to offer you a travel at unbeatable prices that matches your preference."}),(0,r.jsx)("h4",{children:"Why Choose Traveloways?"}),(0,r.jsx)("p",{children:"We at Traveloways understand that planning a trip can be exhausting in itself hence we have come up with a simplified process. With a wide range of flights, hotels, user-friendly platform and round the clock service we connect you to the world at a much faster and secure way. Search for your dream destination and fly with us. As a reliable platform for traveling we aim to be transparent with the prices and offer numerous deals and discounts to make your booking a breeze. Choose a process which is cost and time effective."}),(0,r.jsx)("h5",{children:"Personalized Services"}),(0,r.jsx)("p",{children:"Every traveler has a different need and in order to cater to that we offer tailored services to match your style, budget, and preference. From handpicked accommodations to curated activities, we ensure every detail of your trip reflects your individuality."}),(0,r.jsx)("h5",{children:"Inexpensive Prices"}),(0,r.jsx)("p",{children:"Traveling shouldn’t break the bank. At Traveloways, we’re committed to providing you with the best deals on flights, hotels and packages. Our platform makes it easy to find affordable options without compromising on quality."}),(0,r.jsx)("h5",{children:"24/7 Customer Support "}),(0,r.jsx)("p",{children:"Your journey doesn’t end at booking. Our dedicated team is available around the clock to assist you with any queries or changes or cancellations. Whether it’s a last-minute update or travel advice, we’re here to support you at every step on the way. you at every step on the way"}),(0,r.jsx)("h5",{children:"Our Vision and Mission"}),(0,r.jsx)("p",{children:"At Traveloways, We are dedicated  to provide exceptional services at affordable prices. We aim to empower travelers by making exploration seamless, affordable, and unforgettable."}),(0,r.jsx)("p",{children:"Our mission is to ensure that each journey is worth remembering. With our passenger-first approach and dedication to quality, we make sure that all your travel dreams become a reality. Get ready for your next adventure with us."})]})})})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[5398,636,6593,8792],()=>t(6922)),_N_E=e.O()}]);