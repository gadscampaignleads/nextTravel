(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3947],{7268:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return r(7703)}])},7685:(e,t,r)=>{"use strict";r.d(t,{l$:()=>ec,Ay:()=>ed});var i,o=r(4232);let a={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||a,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(e,t)=>{let r="",i="",o="";for(let a in e){let s=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+s+";":i+="f"==a[1]?d(s,a):a+"{"+d(s,"k"==a[1]?"":t)+"}":"object"==typeof s?i+=d(s,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=s&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=d.p?d.p(a,s):a+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+i},u={},p=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+p(e[r]);return t}return e},m=(e,t,r,i,o)=>{let a=p(e),s=u[a]||(u[a]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(a));if(!u[s]){let t=a!==e?e:(e=>{let t,r,i=[{}];for(;t=n.exec(e.replace(l,""));)t[4]?i.shift():t[3]?(r=t[3].replace(c," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(c," ").trim();return i[0]})(e);u[s]=d(o?{["@keyframes "+s]:t}:t,r?"":"."+s)}let m=r&&u.g?u.g:null;return r&&(u.g=u[s]),((e,t,r,i)=>{i?t.data=t.data.replace(i,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(u[s],t,i,m),s},h=(e,t,r)=>e.reduce((e,i,o)=>{let a=t[o];if(a&&a.call){let e=a(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+i+(null==a?"":a)},"");function f(e){let t=this||{},r=e.call?e(t.p):e;return m(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,s(t.target),t.g,t.o,t.k)}f.bind({g:1});let y,g,x,v=f.bind({k:1});function b(e,t){let r=this||{};return function(){let i=arguments;function o(a,s){let n=Object.assign({},a),l=n.className||o.className;r.p=Object.assign({theme:g&&g()},n),r.o=/ *go\d+/.test(l),n.className=f.apply(r,i)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),x&&c[0]&&x(n),y(c,n)}return t?t(o):o}}var w=e=>"function"==typeof e,j=(e,t)=>w(e)?e(t):e,k=(()=>{let e=0;return()=>(++e).toString()})(),E=(()=>{let e;return()=>{if(void 0===e&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),N=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return N(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},T=[],P={toasts:[],pausedAt:void 0},_=e=>{P=N(P,e),T.forEach(e=>{e(P)})},$={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=(e={})=>{let[t,r]=(0,o.useState)(P),i=(0,o.useRef)(P);(0,o.useEffect)(()=>(i.current!==P&&r(P),T.push(r),()=>{let e=T.indexOf(r);e>-1&&T.splice(e,1)}),[]);let a=t.toasts.map(t=>{var r,i,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(i=e[t.type])?void 0:i.duration)||(null==e?void 0:e.duration)||$[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:a}},I=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||k()}),A=e=>(t,r)=>{let i=I(t,e,r);return _({type:2,toast:i}),i.id},D=(e,t)=>A("blank")(e,t);D.error=A("error"),D.success=A("success"),D.loading=A("loading"),D.custom=A("custom"),D.dismiss=e=>{_({type:3,toastId:e})},D.remove=e=>_({type:4,toastId:e}),D.promise=(e,t,r)=>{let i=D.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?j(t.success,e):void 0;return o?D.success(o,{id:i,...r,...null==r?void 0:r.success}):D.dismiss(i),e}).catch(e=>{let o=t.error?j(t.error,e):void 0;o?D.error(o,{id:i,...r,...null==r?void 0:r.error}):D.dismiss(i)}),e};var O=(e,t)=>{_({type:1,toast:{id:e,height:t}})},z=()=>{_({type:5,time:Date.now()})},W=new Map,F=1e3,H=(e,t=F)=>{if(W.has(e))return;let r=setTimeout(()=>{W.delete(e),_({type:4,toastId:e})},t);W.set(e,r)},S=e=>{let{toasts:t,pausedAt:r}=C(e);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),i=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&D.dismiss(t.id);return}return setTimeout(()=>D.dismiss(t.id),r)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[t,r]);let i=(0,o.useCallback)(()=>{r&&_({type:6,time:Date.now()})},[r]),a=(0,o.useCallback)((e,r)=>{let{reverseOrder:i=!1,gutter:o=8,defaultPosition:a}=r||{},s=t.filter(t=>(t.position||a)===(e.position||a)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...i?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return(0,o.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)H(e.id,e.removeDelay);else{let t=W.get(e.id);t&&(clearTimeout(t),W.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:O,startPause:z,endPause:i,calculateOffset:a}}},L=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,R=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Y=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,q=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Y} 1s linear infinite;
`,B=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,X=v`
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
}`,Z=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${X} 0.2s ease-out forwards;
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
`,G=b("div")`
  position: absolute;
`,J=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Q=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,V=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return void 0!==t?"string"==typeof t?o.createElement(Q,null,t):t:"blank"===r?null:o.createElement(J,null,o.createElement(q,{...i}),"loading"!==r&&o.createElement(G,null,"error"===r?o.createElement(U,{...i}):o.createElement(Z,{...i})))},ee=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,et=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,er=b("div")`
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
`,ei=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,eo=(e,t)=>{let r=e.includes("top")?1:-1,[i,o]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ee(r),et(r)];return{animation:t?`${v(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ea=o.memo(({toast:e,position:t,style:r,children:i})=>{let a=e.height?eo(e.position||t||"top-center",e.visible):{opacity:0},s=o.createElement(V,{toast:e}),n=o.createElement(ei,{...e.ariaProps},j(e.message,e));return o.createElement(er,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof i?i({icon:s,message:n}):o.createElement(o.Fragment,null,s,n))});i=o.createElement,d.p=void 0,y=i,g=void 0,x=void 0;var es=({id:e,className:t,style:r,onHeightUpdate:i,children:a})=>{let s=o.useCallback(t=>{if(t){let r=()=>{i(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return o.createElement("div",{ref:s,className:t,style:r},a)},en=(e,t)=>{let r=e.includes("top"),i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...i}},el=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ec=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:a,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:c}=S(r);return o.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let s=r.position||t,n=en(s,c.calculateOffset(r,{reverseOrder:e,gutter:i,defaultPosition:t}));return o.createElement(es,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?el:"",style:n},"custom"===r.type?j(r.message,r):a?a(r):o.createElement(ea,{toast:r,position:s}))}))},ed=D},7703:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var i=r(7876);r(4232);var o=r(5398);function a(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.A,{title:"Cheap Tickets: Flights, Hotels and Packages – Traveloways",description:"Welcome to Traveloways",children:[(0,i.jsx)("section",{className:"common_banner_custt",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row"})})}),(0,i.jsx)("section",{className:"container-xl container-fluid",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12 text-center",children:(0,i.jsx)("p",{className:"title_t",children:"Privacy Policy"})})})}),(0,i.jsx)("section",{className:"container-fluid container-xl mt-4 mb-5",children:(0,i.jsx)("div",{className:"row common_padding",children:(0,i.jsxs)("div",{className:"col-12 spacing_m_p",children:[(0,i.jsx)("p",{children:"At Traveloways, we are committed to protect your privacy and ensure the security of your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our website and services. By accessing or using Traveloways, you agree to the terms outlined in this policy."}),(0,i.jsx)("h4",{children:"Information Collection"}),(0,i.jsx)("p",{children:"We mainly collect the following types of information:"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Personal Information: Name, email address, phone number, payment details, and travel preferences."}),(0,i.jsx)("li",{children:"Booking Information: Flight details, hotel bookings, and activity reservations."}),(0,i.jsx)("li",{children:"Technical Information: IP address, browser type, device information, and browsing behavior."}),(0,i.jsx)("li",{children:"Location Data: If you enable location services, we may collect your geographic location to provide relevant travel options"})]}),(0,i.jsx)("h4",{children:"Information Usage "}),(0,i.jsx)("p",{children:"We use your information for the following purposes:"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"To process and manage your bookings and reservations."}),(0,i.jsx)("li",{children:"  To personalize your travel experience and provide tailored recommendations."}),(0,i.jsx)("li",{children:" To communicate with you about your bookings, updates, and promotional offers."}),(0,i.jsx)("li",{children:"  To improve our website, services, and customer support."}),(0,i.jsx)("li",{children:"  To comply with legal obligations and protect from fraudulent activities."})]}),(0,i.jsx)("h4",{children:"Sharing Your Information"}),(0,i.jsx)("p",{children:"We do not sell or rent your personal information to any third parties. However, we may share your data with:"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[" ",(0,i.jsx)("b",{children:"Service Providers:"})," Airlines, hotels, and activity providers to fulfill your bookings."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Payment Processors:"})," To securely process your payments."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("b",{children:"Legal Authorities:"})," If required by law or to protect our rights and safety."]})]}),(0,i.jsx)("h4",{children:"Data Security"}),(0,i.jsx)("p",{children:"We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. This includes encryption, secure servers, and regular security audits. However, no online platform can guarantee absolute security, and you share information at your own risk."}),(0,i.jsx)("h4",{children:"Your Rights"}),(0,i.jsx)("p",{children:"While using the platform of Traveloways you have the right to:"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Access, update, or delete your personal information."}),(0,i.jsx)("li",{children:"Move out of marketing communications."}),(0,i.jsx)("li",{children:"Remove your consent for data processing, where applicable."}),(0,i.jsx)("li",{children:"To exercise these rights, please contact us at contact@traveloways."})]}),(0,i.jsx)("h4",{children:"Cookies and Tracking"}),(0,i.jsx)("p",{children:"We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can manage your cookie preferences through your browser settings. "}),(0,i.jsx)("h4",{children:"Third-Party Links"}),(0,i.jsx)("p",{children:"Our website may contain links to third-party sites. We are not responsible for their privacy practices, and we encourage you to review their policies before sharing any information."}),(0,i.jsx)("h4",{children:"Changes to This Policy"}),(0,i.jsx)("p",{children:"We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of the revised policy."}),(0,i.jsx)("h4",{children:"Contact Us"}),(0,i.jsx)("p",{children:"If you have any query or concern about our privacy policy then please contact us at contact@traveloways.com."})]})})})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[5398,636,6593,8792],()=>t(7268)),_N_E=e.O()}]);