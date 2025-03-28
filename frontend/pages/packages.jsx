import React from 'react'
import Layout from '@/components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules' 
import { DestinationPack } from '@/components/DestinationPack';
import { DestinationH } from '@/components/DestinationH';
export default function packages() {
  return (
    <Layout title="Cheap Tickets: Flights, Hotels and Packages – Traveloways" description="Welcome to Traveloways">
    <section class="hero_see flex_props justify-content-center relative package_herr">
        <div class="container-fluid container-xl">
            <div class="row common_padding">

                <div class="col-12 text-center white hero_see_minus">

                    <div>
                        <h1 class="banner_t mt-2 mt-sm-4 pack_tt">Where Every Journey Is Tailored For You! </h1>
                    </div>
                    <a href="/contact-us" class="book_pck">
                        <img src="/imgs/images/right-arrow.png" />
                        Book A Package</a>

                </div>
                <div className='hero_form_f p-0'>


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
    <div className="d-none d-lg-block">
        <DestinationPack />
    </div>
    <section class="container-fluid container-xl margin_top steps_cont_main">
        <div class="row">
            <div class="col-12">
                <div class="steps_gr">
                    <div class="steps_cont">
                        <div class="steps_icc">
                            <img src="/imgs/images/suitcase-luggage.png" />
                        </div>
                        <p class="start_j">Start Your Journey</p>
                        <p class="font_12 mt-1">Visit our site and enter your itinerary, needs and preferences</p>
                    </div>
                    <div class="steps_cont">
                        <div class="steps_icc">
                            <img src="/imgs/images/cheap-i.png" />
                        </div>
                        <p class="start_j">Fill In Your Details</p>
                        <p class="font_12 mt-1">Tell us about your dream itinerary so that we can curate it for you</p>
                    </div>
                    <div class="steps_cont">
                        <div class="steps_icc">
                            <img src="/imgs/images/secure-icon.png" />
                        </div>
                        <p class="start_j">Secure Your Spot</p>
                        <p class="font_12 mt-1">Tap on the search button to discover flights and receive your booking ID</p>
                    </div>
                    <div class="steps_cont">
                        <div class="steps_icc">
                            <img src="/imgs/images/confirmation-i.png" />
                        </div>
                        <p class="start_j">Confirmation On It’s Way</p>
                        <p class="font_12 mt-1">Our team will reach out to you shortly once the booking is confirmed. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="d-block d-lg-none">
        <DestinationPack />
    </div>
    <DestinationH />
</Layout>
  )
}
