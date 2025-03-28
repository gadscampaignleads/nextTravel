import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
function Destination() {
    return (
        <>
            <div className="d_n_n mt-4">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    modules={[Pagination]}

                    breakpoints={{
                        568: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        }
                    }}
                    className="air_slider"
                >
                    <SwiperSlide>
                        <div class="pro_container flex_props">
                            <div class="pro_img">
                                <img src="/imgs/images/deals-i.png" alt="Easy Booking" />
                            </div>
                            <div class="pro_content">
                                <p class="pro_tit">Easy Booking</p>
                                <p class="pro_p">Use our user-friendly platform for a seamless booking.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="pro_container flex_props">
                            <div class="pro_img">
                                <img src="/imgs/images/round-i.png" alt="Round" />
                            </div>
                            <div class="pro_content">
                                <p class="pro_tit">Round The Clock Assistance</p>
                                <p class="pro_p">Get 24/7 assistance with our dedicated team of customer service.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="pro_container flex_props">
                            <div class="pro_img">
                                <img src="/imgs/images/cust-i.png" />
                            </div>
                            <div class="pro_content">
                                <p class="pro_tit">Custom Made Packages</p>
                                <p class="pro_p">We offer tailored packages that fit within your budget and
                                    preference.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="pro_container flex_props">
                            <div class="pro_img">
                                <img src="/imgs/images/experts-i.png" />
                            </div>
                            <div class="pro_content">
                                <p class="pro_tit">Expert Guidance</p>
                                <p class="pro_p">Get expert guidance for all your travel needs with our dedicated
                                    professionals.</p>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
            <section class="container-fluid container-xl mt-5">
                <div class="row common_padding">
                    <div class="col-12 col-md-7 m-auto mb-3 mb-sm-4 text-center">
                        <h1 class="common_title">Popular Tourist Destinations</h1>

                    </div>
                    <div class="col-12">

                        <Swiper
                            spaceBetween={25}
                            slidesPerView={2}
                            modules={[Navigation]}
                            navigation={true}
                            breakpoints={{
                                568: {
                                    slidesPerView: 3,
                                    spaceBetween: 25,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 25,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 25,
                                },
                                1400: {
                                    slidesPerView: 5,
                                    spaceBetween: 25,
                                },
                            }}
                            className="air_slider"
                        >
                            <SwiperSlide>
                                <div class="pop_cont relative">
                                    <div class="pop_img">
                                        <img src="/imgs/images/aust-img.png" />
                                    </div>
                                    <div class="pop_content">
                                        <p class="flight_f">Flights to Australia</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="pop_cont relative">
                                    <div class="pop_img">
                                        <img src="/imgs/images/canada-img.png" />
                                    </div>
                                    <div class="pop_content">
                                        <p class="flight_f">Flights to Canada</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="pop_cont relative">
                                    <div class="pop_img">
                                        <img src="/imgs/images/france-img.png" />
                                    </div>
                                    <div class="pop_content">
                                        <p class="flight_f">Flights to France</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="pop_cont relative">
                                    <div class="pop_img">
                                        <img src="/imgs/images/hong.png" />
                                    </div>
                                    <div class="pop_content">
                                        <p class="flight_f">Flights to Hong Kong</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="pop_cont relative">
                                    <div class="pop_img">
                                        <img src="/imgs/images/uk-img.png" />
                                    </div>
                                    <div class="pop_content">
                                        <p class="flight_f">Flights to Uk</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="pop_cont relative">
                                    <div class="pop_img">
                                        <img src="/imgs/images/usa-img.png" />
                                    </div>
                                    <div class="pop_content">
                                        <p class="flight_f">Flights to USA</p>

                                    </div>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Destination