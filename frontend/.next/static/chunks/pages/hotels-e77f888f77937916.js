(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2017],{808:(s,e,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hotels",function(){return a(1748)}])},1748:(s,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>f});var i=a(7876),l=a(4232),c=a(7888);a(1781),a(5479);var n=a(9365),r=a(9222),t=a(2365),d=a(5398),o=a(4651),_=a(9099),h=a(1040),m=a(6670),p=a(5544),x=a(9149),j=a.n(x),g=a(7685);let u=()=>{let[s,e]=(0,l.useState)(new Date),[a,c]=(0,l.useState)(new Date),[n,r]=(0,l.useState)(1),[t,d]=(0,l.useState)(1),[x,u]=(0,l.useState)(0),[f,v]=(0,l.useState)(0),[N,b]=(0,l.useState)(n),[k,w]=(0,l.useState)(!1),[y,C]=(0,l.useState)(""),[S,D]=(0,l.useState)("oneWay"),[E,A]=(0,l.useState)(""),[F,P]=(0,l.useState)([]),[Y,M]=(0,l.useState)(!1),[T,G]=(0,l.useState)(!1),[L,q]=(0,l.useState)(""),[O,R]=(0,l.useState)([]),[B,W]=(0,l.useState)(new Date),[H,Q]=(0,l.useState)(new Date(new Date().setDate(new Date().getDate()+7))),[V,I]=(0,l.useState)(""),K=(0,_.useRouter)(),X=(0,l.useCallback)(j()(async s=>{if(s.length>=3)try{let{data:e}=await h.A.get("/api/v1/flights/locations?keyword=".concat(s));P(e),M(!0)}catch(s){console.error("Error fetching locations:",s)}else M(!1)},500),[]),J=(0,l.useCallback)(s=>{let e=s.target.value;A(e),G(!1),X(e)},[X]),U=s=>{A(s),M(!1)};return(0,l.useEffect)(()=>{c(s),b(()=>n+x+f);let e=document.querySelectorAll(".form_check_h label"),a=s=>{C(s.innerHTML)};return e.forEach(s=>{s.addEventListener("click",()=>a(s))}),()=>{e.forEach(s=>{s.removeEventListener("click",()=>a(s))})}},[s,n,x,f,y]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"col-12 col-xxl-9 m-auto",children:(0,i.jsx)("form",{onSubmit:s=>{if(s.preventDefault(),E&&L&&E===L){g.Ay.error("Source and destination cannot be the same!",{style:{background:"#000",color:"#fff"}});return}if("roundtrip"===S&&B>=H){g.Ay.error("Departure date cannot be later than or equal to return date.");return}I(""),A(s.target.keyword||E),q(s.target.dkeyword||L),W(s.target.date||B),K.push("/hotels/HotelListing?org=".concat(E,"&checkin=").concat(B,"&checkout=").concat(H,"&adt=").concat(n,"&chd=").concat(x,"&ift=").concat(f,"&rooms=").concat(t))},onKeyDown:s=>{"Enter"===s.key&&s.preventDefault()},children:(0,i.jsxs)("div",{className:"row form_search_us form_contrainer_s align-items-center",children:[(0,i.jsxs)("div",{className:"form_holdd text-start relative form_holdd_dess",children:[(0,i.jsx)("label",{htmlFor:"",children:"Where To?"}),(0,i.jsx)("input",{type:"text",onChange:J,value:E,onBlur:()=>{!F.some(s=>s===E)&&F.length>0&&A(F[0]),M(!1)},onFocus:()=>{A(""),R([]),M(!1)},className:"form-control",required:!0,placeholder:""}),(0,i.jsx)("div",{className:"listing_airport_ul",children:Y&&(0,i.jsx)("ul",{className:"autoSugge-ul",children:F.map(s=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("li",{className:"autoSuggestData cursor-pointer",onClick:()=>U(s),children:[(0,i.jsx)("span",{className:"listing_airport_icon",children:(0,i.jsx)("img",{src:"/imgs/airline-img.png"})}),(0,i.jsx)("span",{children:s})]})}))})})]}),(0,i.jsxs)("div",{className:"form_holdd form_holdd_semi text-start date_d",children:[(0,i.jsx)("label",{htmlFor:"dDate",children:"CheckIn Date?"}),(0,i.jsx)(o.Ay,{value:B,onChange:W,minDate:new Date,maxDate:"roundtrip"===S?H:void 0,format:"MMM-DD-YYYY"})]}),(0,i.jsxs)("div",{className:"form_holdd form_holdd_semi text-start date_d_r",children:[(0,i.jsx)("label",{htmlFor:"",children:"CheckOut Date?"}),(0,i.jsx)(o.Ay,{value:H,onChange:s=>Q(s),minDate:B,format:"MMM-DD-YYYY"})]}),(0,i.jsx)("div",{className:"form_holdd text-start border_n form_holddPass",children:(0,i.jsxs)("div",{className:"form_h_semi form_h_semi222 input_aa inpt_aa_flight inpt_aa_flight_flight",children:[(0,i.jsx)("label",{for:"",children:"Passengers & Class"}),(0,i.jsxs)("div",{className:"pass_all_main pass_all_main_hotel",onClick:()=>{w(!k)},children:[(0,i.jsxs)("div",{className:"pass_inn",children:[(0,i.jsx)("span",{className:"pass_numm1 pass_numm1_flight",children:N}),"Guests"]}),(0,i.jsxs)("div",{className:"pass_inn",children:[(0,i.jsxs)("span",{className:"pass_numm1 pass_numm1_flight",children:[t," "]}),"Rooms"]})]}),(0,i.jsxs)("div",{className:k?"passenger_modal passenger_modal_flight passenger_modal_active":"passenger_modal passenger_modal_flight",children:[(0,i.jsx)("div",{className:"close_bb_modd close_bb_modd_flight",onClick:()=>{w(!k)},children:(0,i.jsx)("img",{src:"/imgs/imgs2/close-i.png"})}),(0,i.jsxs)("div",{className:"passenger_mod_main",children:[(0,i.jsxs)("div",{className:"pass_container_1",children:[(0,i.jsxs)("p",{className:"pass_para_p",children:[(0,i.jsx)("span",{className:"para1_mod_title",children:"Rooms "}),(0,i.jsx)("span",{className:"add_cont_inf add_cont_inf_flight",children:t})]}),(0,i.jsx)("p",{className:"color-grey font_cs"}),(0,i.jsxs)("div",{className:"pass_btnss d-flex",children:[(0,i.jsx)("div",{className:"add_inf_min_flight pass_btnssbt",onClick:()=>{d(s=>s>0?s-1:s)},children:(0,i.jsx)(p.QLg,{})}),(0,i.jsx)("div",{className:"add_inf_add add_inf_add_flight pass_btnssbt",onClick:()=>{d(s=>s<5?s+1:s)},children:(0,i.jsx)(m.OiG,{})})]})]}),(0,i.jsxs)("div",{className:"pass_container_1",children:[(0,i.jsxs)("p",{className:"pass_para_p",children:[(0,i.jsx)("span",{className:"para1_mod_title",children:"Adults - "}),(0,i.jsx)("span",{className:"add_cont add_cont_flight",children:n})]}),(0,i.jsxs)("div",{className:"pass_btnss d-flex",children:[(0,i.jsx)("div",{className:"adult_min adult_min_flight pass_btnssbt",onClick:()=>{r(s=>s>0?s-1:s)},children:(0,i.jsx)(p.QLg,{})}),(0,i.jsx)("div",{className:"adult_add adult_add_flight pass_btnssbt",onClick:()=>{r(s=>s<10?s+1:s)},children:(0,i.jsx)(m.OiG,{})})]})]}),(0,i.jsxs)("div",{className:"pass_container_1",children:[(0,i.jsxs)("p",{className:"pass_para_p",children:[(0,i.jsx)("span",{className:"para1_mod_title",children:"Children - "}),(0,i.jsx)("span",{className:"add_cont_child add_cont_child_flight",children:x})]}),(0,i.jsx)("p",{className:"color-grey font_cs",children:"2- 12 Years"}),(0,i.jsxs)("div",{className:"pass_btnss d-flex",children:[(0,i.jsx)("div",{className:"add_child_min add_child_min_flight pass_btnssbt",onClick:()=>{u(s=>s>0?s-1:s)},children:(0,i.jsx)(p.QLg,{})}),(0,i.jsx)("div",{className:"add_child_add add_child_add_flight pass_btnssbt",onClick:()=>{u(s=>s<10?s+1:s)},children:(0,i.jsx)(m.OiG,{})})]})]}),(0,i.jsxs)("div",{className:"pass_container_1",children:[(0,i.jsxs)("p",{className:"pass_para_p",children:[(0,i.jsx)("span",{className:"para1_mod_title",children:"Infants - "}),(0,i.jsx)("span",{className:"add_cont_inf add_cont_inf_flight",children:f})]}),(0,i.jsx)("p",{className:"color-grey font_cs",children:"0- 23 Months"}),(0,i.jsxs)("div",{className:"pass_btnss d-flex",children:[(0,i.jsx)("div",{className:"add_inf_min_flight pass_btnssbt",onClick:()=>{v(s=>s>0?s-1:s)},children:(0,i.jsx)(p.QLg,{})}),(0,i.jsx)("div",{className:"add_inf_add add_inf_add_flight pass_btnssbt",onClick:()=>{v(s=>s<2?s+1:s)},children:(0,i.jsx)(m.OiG,{})})]})]})]}),(0,i.jsx)("button",{className:"appl_btn appl_btn_flight",type:"button",onClick:()=>{w(!k)},children:"Apply"})]})]})}),(0,i.jsx)("div",{className:"form_holdd form_search text-end",children:(0,i.jsxs)("button",{className:"search_btt",type:"submit",children:[(0,i.jsx)("p",{children:"Search Flight"}),(0,i.jsx)("img",{src:"/imgs/images/search-i.png"})]})})]})})})})};function f(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(d.A,{title:"Cheap Tickets: Flights, Hotels and Packages – Traveloways",description:"Welcome to Traveloways",children:[(0,i.jsx)("section",{class:"hero_see flex_props justify-content-center relative hero_see_hotel",children:(0,i.jsx)("div",{class:"container-fluid container-xl",children:(0,i.jsxs)("div",{class:"row common_padding",children:[(0,i.jsxs)("div",{class:"col-12 text-center white hero_see_minus",children:[(0,i.jsxs)("div",{class:"sec_opti flex_props justify-content-center",children:[(0,i.jsxs)("div",{class:"sec_container",children:[(0,i.jsx)("img",{src:"/imgs/images/customer-i.png"}),(0,i.jsx)("p",{children:"Secure payments"})]}),(0,i.jsx)("span",{children:"|"}),(0,i.jsxs)("div",{class:"sec_container",children:[(0,i.jsx)("img",{src:"/imgs/images/secure-i.png"}),(0,i.jsx)("p",{children:"Expert Assistances"})]})]}),(0,i.jsx)("h1",{class:"banner_t mt-2 mt-sm-4",children:"Where Every Journey Is Tailored For You! "})]}),(0,i.jsxs)("div",{className:"hero_form_f p-0",children:[(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("div",{class:"text-center w_cc",children:(0,i.jsxs)("div",{class:"tabs_btt flex_props justify-content-center",children:[(0,i.jsxs)("a",{href:"/",children:[(0,i.jsx)("div",{class:"ac_icc",children:(0,i.jsx)("img",{src:"/imgs/images/travelling-i.png"})}),"Flights"]}),(0,i.jsxs)("a",{class:"ac_btt",href:"/hotels",children:[(0,i.jsx)("div",{class:"ac_icc",children:(0,i.jsx)("img",{src:"/imgs/images/hotel-i.png"})})," Hotels"]}),(0,i.jsxs)("a",{href:"/packages",children:[(0,i.jsx)("div",{class:"ac_icc",children:(0,i.jsx)("img",{src:"/imgs/images/suitcase-luggage.png"})})," Packages"]})]})})}),(0,i.jsx)(u,{})]}),(0,i.jsx)("div",{class:"swiper process_sliderr pro_al_hero pro_al_hero2 mt-5",children:(0,i.jsxs)(c.RC,{spaceBetween:20,slidesPerView:1,modules:[n.dK],breakpoints:{568:{slidesPerView:2},992:{slidesPerView:3},1400:{slidesPerView:4,spaceBetween:25}},className:"air_slider",children:[(0,i.jsx)(c.qr,{children:(0,i.jsxs)("div",{class:"pro_container flex_props",children:[(0,i.jsx)("div",{class:"pro_img",children:(0,i.jsx)("img",{src:"/imgs/images/deals-i.png",alt:"Easy Booking"})}),(0,i.jsxs)("div",{class:"pro_content",children:[(0,i.jsx)("p",{class:"pro_tit",children:"Easy Booking"}),(0,i.jsx)("p",{class:"pro_p",children:"Use our user-friendly platform for a seamless booking."})]})]})}),(0,i.jsx)(c.qr,{children:(0,i.jsxs)("div",{class:"pro_container flex_props",children:[(0,i.jsx)("div",{class:"pro_img",children:(0,i.jsx)("img",{src:"/imgs/images/round-i.png",alt:"Round"})}),(0,i.jsxs)("div",{class:"pro_content",children:[(0,i.jsx)("p",{class:"pro_tit",children:"Round The Clock Assistance"}),(0,i.jsx)("p",{class:"pro_p",children:"Get 24/7 assistance with our dedicated team of customer service."})]})]})}),(0,i.jsx)(c.qr,{children:(0,i.jsxs)("div",{class:"pro_container flex_props",children:[(0,i.jsx)("div",{class:"pro_img",children:(0,i.jsx)("img",{src:"/imgs/images/cust-i.png"})}),(0,i.jsxs)("div",{class:"pro_content",children:[(0,i.jsx)("p",{class:"pro_tit",children:"Custom Made Packages"}),(0,i.jsx)("p",{class:"pro_p",children:"We offer tailored packages that fit within your budget and preference."})]})]})}),(0,i.jsx)(c.qr,{children:(0,i.jsxs)("div",{class:"pro_container flex_props",children:[(0,i.jsx)("div",{class:"pro_img",children:(0,i.jsx)("img",{src:"/imgs/images/experts-i.png"})}),(0,i.jsxs)("div",{class:"pro_content",children:[(0,i.jsx)("p",{class:"pro_tit",children:"Expert Guidance"}),(0,i.jsx)("p",{class:"pro_p",children:"Get expert guidance for all your travel needs with our dedicated professionals."})]})]})})]})})]})})}),(0,i.jsx)(r.A,{}),(0,i.jsx)("div",{className:"mb-5",children:(0,i.jsx)(t.A,{})})]})})}}},s=>{var e=e=>s(s.s=e);s.O(0,[8585,7141,2513,6340,3070,5398,2282,636,6593,8792],()=>e(808)),_N_E=s.O()}]);