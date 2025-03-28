import React from 'react'

const Footer = () => {
    return (
        <>
           <footer className="footer_f pt-4 pb-3">
                <div className="container-fluid container-xl">
                    <div className="row common_padding">
                        <div className="col-12 mb-3">
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                    {/* <h5>Subscribe To Our Newsletter </h5>
                                    <p className="font_14 mt-1 mt-sm-1">Learn about our exclusive deals, offers, and discounts.</p>
                                    <div className="form_subr mt-2 flex_props">
                                        <input type="email" placeholder="Enter your Email" className="form-control" />
                                        <button>Subscribe</button>
                                    </div>
                                    <p className="font_12 mt-2">To receive better insights, subscribe to our Newsletter. Enter the details and stay up-to-date.</p> */}
                                    <div className="footer_l">
                                        <img src = "/imgs/images/logo-b.png" />
                                    </div>
                                    <p className="font_14 mt-1 mt-sm-1">Traveloways operates as an autonomous third party site. Under no circumstances are we associated or partnered with any specific airline, hotel or travel service provider. Each information available on the website is for general use only and might not be accurate all the time. Therefore, you are advised to confirm all the travel details with the relevant service providers before making any booking. </p>
                                </div>
                                <div className="col-12 col-lg-8 ps-0 ps-lg-5 mt-4 mt-lg-0">
                                    <div className="row justify-content-between">
                                        <div className="col-6 col-md-4 col-lg-2">
                                            <p className="footer_t">Important Links</p>
                                            <ul className="footer_ul mt-2">
                                                <li><a href="/">Flights</a></li>
                                                <li><a href="/hotels">Hotels</a></li>
                                                <li><a href="/packages">Holiday Packages</a></li>
                                                <li><a href="/about">About Us</a></li> 
                                                <li><a href="/cookie-policy">Cookie Policy</a></li> 
                                            
                                            </ul>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3">
                                            <p className="footer_t">Explore Destinations</p>
                                            <ul className="footer_ul mt-2">
                                                <li><a href="/destination/las-vegas">Flight to Las Vegas</a></li>
                                                <li><a href="/destination/los-angeles">Flight to Los Angeles</a></li>
                                                <li><a href="/destination/phoenix">Flight to Phoenix</a></li>
                                                <li><a href="/destination/miami">Flight to Miami</a></li>
                                                <li><a href="/destination/atlanta">Flight to Atlanta</a></li> 
                                            </ul>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 mt-3 mt-lg-0">
                                            <p className="footer_t">About Company</p>
                                            <ul className="footer_ul mt-2"> 
                                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                                <li><a href="/terms-conditions">Terms & Conditions</a></li>
                                                <li><a href="/disclaimer">Disclaimer</a></li>
                                                <li><a href="/cancellation-policy">Refund Policy</a></li>
                                                <li><a href="/refund-policy">Cancellation Policy</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 mt-3 mt-lg-0">
                                            <p className="footer_t">Latest Destinations</p>
                                            <ul className="footer_ul mt-2">
                                                <li><a href="/destination/fort-lauderdale">Flight to Fort Lauderdale</a></li> 
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-2" />
                        {/* <div className="col-12 text-center">
                            <p className="font_12">At Traveloways, we take the stress out of travel planning and make it easy for you to create unforgettable memories. You can come, customize your preferred packaged deal, and find peace in one of the most amazing destinations across the globe. Come explore the world with us without any worries! </p>
                        </div> */}
                        <div className="col-12 mt-3">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-7">
                                    <div className="footer_img">
                                        <img src="/imgs/images/icon-footer.png" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5 text-center text-lg-end mt-2 mt-lg-0">
                                    <p className="font_14">Traveloways Ltd © 2025 All rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer