function Steps() {
    return (
        <>
            <section className="container-fluid mt-5">
                <div className="row align-items-center common_padding">
                    <div className="col-12 col-lg-5 pe-0 pe-lg-3">
                        <div className="ab_altt relative">
                            <img src="/imgs/images/ab-img1.png" />
                            <div className="ab_content_a white">
                                <p className="ab_tt">Discover Hidden Gems Along With Great Deals</p>
                                <p className="mt-2 font_14">Uncover some of the best-hidden destinations and famous places with
                                    Traveloways. We offer simple booking options along with great services and offers to make
                                    your journey worth remembering. Get in touch today to fly to your favorite destination.</p>
                                <a href="/about" className="know_btt"><img src="/imgs/images/arrow-right.png" /> Know More About Us</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-7 px-0 px-lg-4 mt-4 mt-lg-0">
                        <div className="mb-4">
                            <h3 className="common_title">Explore Different Destinations With Us</h3>
                        </div>
                        <div className="destination_grid">
                            <div className="destination_container relative">
                                <img src="/imgs/images/canada-destination.png" />
                                <div className="destination_cc">
                                    <p className="des_title1">Travel to Phoenix</p>
                                    <p className="mt-2 font_12">Born out of a passion for seamless journeys and unforgettable
                                        adventures...</p>
                                    <a href="/destination/phoenix" className="knowmore_btt">View more Details <img src="/imgs/images/arrow-right.png" /> </a>
                                </div>
                            </div>
                            <div className="destination_container relative destination_container2">
                                <img src="/imgs/images/los-angeles-destination.png" />
                                <div className="destination_cc">
                                    <p className="des_title1">Travel to Los Angeles</p>
                                    <p className="mt-2 font_12">Orn out of a passion for seamless journeys and unforgettable
                                        adventures, Traveloways is your ultimate travel partner. We’re here...</p>
                                    <a href="/destination/los-angeles" className="knowmore_btt">View more Details <img src="/imgs/images/arrow-right.png" /> </a>
                                </div>
                            </div>


                        </div>
                        <div className="destination_container relative destination_container3 mt-4">
                            <img src="/imgs/images/las-vegas-destination.png" />
                            <div className="destination_cc destination_cc2 flex_props justify-content-between">
                                <div>
                                    <p className="des_title1 des_title11">Travel to Las Vegas</p>
                                    <p className="mt-2 font_12">Make a reservation to Las Vegas and explore the amusing nightlife...
                                    </p>
                                </div>
                                <a href="/destination/las-vegas" className="knowmore_btt">View more Details <img src="/imgs/images/arrow-right.png" /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Steps