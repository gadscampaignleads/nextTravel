import React from 'react' 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import Destination from '@/components/Destination';
import About from '@/components/About';
import Layout from '@/components/Layout';
import HotelSearch from '@/components/Search/HotelSearch';
export default function hotels() {
    return (
        <>
            <Layout title="Cheap Tickets: Flights, Hotels and Packages – Traveloways" description="Welcome to Traveloways">
                <section class="hero_see flex_props justify-content-center relative hero_see_hotel">
                    <div class="container-fluid container-xl">
                        <div class="row common_padding">

                            <div class="col-12 text-center white hero_see_minus">

                                <div class="sec_opti flex_props justify-content-center">
                                    <div class="sec_container">
                                        <img src="/imgs/images/customer-i.png" />
                                        <p>Secure payments</p>

                                    </div>
                                    <span>|</span>
                                    <div class="sec_container">
                                        <img src="/imgs/images/secure-i.png" />
                                        <p>Expert Assistances</p>

                                    </div>
                                </div>
                                <h1 class="banner_t mt-2 mt-sm-4">Where Every Journey Is Tailored For You! </h1>


                            </div>
                            <div className='hero_form_f p-0'>
                                <div className="col-12">
                                    <div class="text-center w_cc">
                                        <div class="tabs_btt flex_props justify-content-center">
                                            <a href="/">
                                                <div class="ac_icc">
                                                    <img src="/imgs/images/travelling-i.png" />
                                                </div>
                                                Flights
                                            </a>
                                            <a class="ac_btt" href="/hotels">
                                                <div class="ac_icc">
                                                    <img src="/imgs/images/hotel-i.png" />
                                                </div> Hotels
                                            </a>
                                            <a href="/packages">
                                                <div class="ac_icc">
                                                    <img src="/imgs/images/suitcase-luggage.png" />
                                                </div> Packages
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <HotelSearch />
                            </div>
                            <div class="swiper process_sliderr pro_al_hero pro_al_hero2 mt-5">
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
                                        1400: {
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

                        </div>
                    </div>
                </section>
                <Destination />

                <div className="mb-5">
                    <About />
                </div>
            </Layout>
        </>
    )
}
