import React from 'react'

function Offer() {
  return (
    <div className="col-7 col-xl-2 ps-0 ps-xl-4 mt-3 mt-xl-0 d-none d-xl-block ">
    <a href="tel:+1(888)211-9619" className='offer_container_asidee relative'>
      <div className="lets_imgg">
        <img src="/imgs/images/aeroplan-imgg2.png" />
      </div>
      <div className="lets_cc">
        <p className="offer_t">Let us help you book your trip!</p>
        <p className="mt-2 font_12">Saving 15% or more with Early 2025 Deals.</p>
        <ul className="co_ul">
          <li>Get personalized travel help from our live agents</li>
          <li>Receive instant booking confirmation</li>
          <li>Enjoy 24-hour cancellation options</li>
        </ul>
        <div className="text-center mt-3">
          {/* <p className='offer_faress_v flex_prop gap-1 justify-content-center'>
            <img src="imgs/call-only.png" />
            +1(888)211-9619</p> */}
          <p className='font_12'>Available 24/7</p>
        </div>
      </div>
    </a>
  </div>
  )
}

export default Offer