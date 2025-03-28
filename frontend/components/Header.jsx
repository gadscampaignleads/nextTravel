import React, { useState } from 'react'

const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <>
              <header>
                <div className="container-fluid container-xl py-3">
                    <div className="row common_padding">
                        <div className="col-12">
                            <div className="flex_props justify-content-between">
                                <a className="logo_header" href = "/">
                                    <img src="/imgs/images/logo3.png" />
                                </a>
                                <div className="flex_props mange_b">
                                    <div className= {menu ? "nav_links nav_links_ac" : "nav_links"}>
                                        <ul className="flex_props relative">
                                            <div className="nav_headerr flex_props justify-content-between">
                                                <div className="navv_h_ig">
                                                    <img src="/imgs/images/logo3.png" />
                                                </div>
                                                <button className="close_navv" onClick={()=>{
                                                setMenu(!menu)
                                            }}>

                                                    <img src="/imgs/images/close-i.png" />
                                                </button>
                                            </div>
                                            <li><a href="/">Flights</a></li>
                                            <li><a href="/hotels">Hotels</a></li>
                                            <li><a href="/packages">Holiday Packages</a></li>
                                            <li><a href="/about">About Us</a></li>
                                            <li><a href="/contact">Contact Us</a></li>
                                            {/* <a href="tel:+1 888 212 0631" className="call_us_he">
                                                <img src="/imgs/images/ph-i.png" />
                                                Book Now - +1 888 212 0631</a> */}
                                        </ul>
                                    </div>
                                    <div className="flex_props">
                                        {/* <div className="nav_btns flex_props">
                                            <a className="nav_btns_m" href = "tel:+1 888 212 0631">Customer Service</a>
                                            <a href = "tel:+1 888 212 0631">Book Now - +1 888 212 0631</a>

                                        </div> */}
                                        <div className="nav_nav22 flex_props gap-2">
                                            {/* <div className="nav_call">
                                                <a className="nav_call_a flex_props">
                                                    <img src="/imgs/images/call-center-operator.png" />
                                                    <p>+1 888 212 0631</p>
                                                </a>
                                            </div> */}
                                            <button className="menu_btn" onClick={()=>{
                                                setMenu(!menu)
                                            }}>
                                                <img src="/imgs/images/menu-i.png" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header