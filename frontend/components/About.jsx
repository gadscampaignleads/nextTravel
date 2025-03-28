import React from 'react'

function About() {
    return (
        <>
            <section className="container-fluid container-xl margin_top steps_cont_main">
                <div className="row">
                    <div className="col-12">
                        <div className="steps_gr">
                            <div className="steps_cont">
                                <div className="steps_icc">
                                    <img src="/imgs/images/suitcase-luggage.png" />
                                </div>
                                <p className="start_j">Start Your Journey</p>
                                <p className="font_12 mt-1">Visit our site and enter your itinerary, needs and preferences</p>
                            </div>
                            <div className="steps_cont">
                                <div className="steps_icc">
                                    <img src="/imgs/images/cheap-i.png" />
                                </div>
                                <p className="start_j">Fill In Your Details</p>
                                <p className="font_12 mt-1">Tell us about your dream itinerary so that we can curate it for you</p>
                            </div>
                            <div className="steps_cont">
                                <div className="steps_icc">
                                    <img src="/imgs/images/secure-icon.png" />
                                </div>
                                <p className="start_j">Secure Your Spot</p>
                                <p className="font_12 mt-1">Tap on the search button to discover flights and receive your booking ID</p>
                            </div>
                            <div className="steps_cont">
                                <div className="steps_icc">
                                    <img src="/imgs/images/confirmation-i.png" />
                                </div>
                                <p className="start_j">Confirmation On It’s Way</p>
                                <p className="font_12 mt-1">Our team will reach out to you shortly once the booking is confirmed. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid container-xl margin_top">
                <div className="row common_padding">
                    <div className="col-12 bg_contt m-auto">
                        <div className="row">
                            <div className="col-12 text-start text-md-center mb-2 mb-sm-4">
                                <p className="semi_title mb-2">Fly with us to your next destination...</p>
                                <h1 className="common_title">Explore Seamless Adventures with Traveloways</h1>
                            </div>
                            <div className="col-12 col-lg-7 pe-0 pe-lg-3">

                                <p className="mt-0 mt-sm-3 font_13">Traveloways is your one-stop destination for exploring the world one place at a time. We are dedicated to making your travel experience as hassle-free and smooth as possible. From flights and hotels to other curated activities, we offer a wide array of options to suit your needs.</p>
                                <p className="mt-4 font_13">As every journey is unique in its way therefore we at Traveloways strive to cater to a number of travel styles and preferences. So if you are planning a family vacation, weekend getaway with friends or a solo trip use our user-friendly platform and expert resources to navigate the world at ease.
                                </p>
                                <p className="mt-4 font_13">Join us today as we embark on this exciting journey together. Explore new places, savor delicious food, and cherish lifelong memories. Let Traveloways be your reliable companion to turn your travel dreams into reality.
                                </p>
                                <p className="mt-4 font_13">Born out of a passion for seamless journeys and unforgettable
                                    adventures, Traveloways is your ultimate travel partner. We’re here to make your dream
                                    destinations </p>
                            </div>
                            <div className="col-12 col-lg-5 ps-0 ps-lg-3 mt-4 mt-lg-0">
                                <div className="flight_imgg">
                                    <img src="/imgs/images/flight-img.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About