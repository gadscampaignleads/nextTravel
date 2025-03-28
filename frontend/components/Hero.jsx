import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import MainSearch from './Search/MainSearch'; 

function Hero() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("flights");

    useEffect(() => {
        // Set activeTab based on query string when component mounts
        const tab = router.query.tab;
        if (tab) {
            setActiveTab(tab);
        }
    }, [router.query]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);

        // Update the URL with the selected tab
        router.push({ pathname: '/', query: { tab } });
    };

    return (
        <>
            <section className="hero_see flex_props justify-content-center relative">
                <div className="container-fluid container-xl">
                    <div className="row common_padding">

                        <div className="col-12 text-center white hero_see_minus">

                            <div className="sec_opti flex_props justify-content-center">
                                <div className="sec_container">
                                    <img src="/imgs/images/customer-i.png" />
                                    <p>Expert Assistance</p>

                                </div>
                                <span>|</span>
                                <div className="sec_container">
                                    <img src="/imgs/images/secure-i.png" />
                                    <p>Secure payments</p>

                                </div>
                            </div>
                            <h1 className="banner_t mt-2 mt-sm-4">Where Every Journey Is Tailored For You! </h1>


                        </div>
                        <div className='hero_form_f p-0'>
                            <div className="col-12">
                                <div className="text-center w_cc">
                                    <div className="tabs_btt flex_props justify-content-center">
                                        <a href="/" className="ac_btt">
                                            <div className="ac_icc">
                                                <img src="/imgs/images/travelling-i.png" />
                                            </div>
                                            Flights
                                        </a>
                                        <a href="/hotels">
                                            <div className="ac_icc">
                                                <img src="/imgs/images/hotel-i.png" />
                                            </div> Hotels
                                        </a>
                                        <a href="/packages">
                                            <div className="ac_icc">
                                                <img src="/imgs/images/suitcase-luggage.png" />
                                            </div> Packages
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <MainSearch />
                            </div>
                        </div>
                        <div className="swiper process_sliderr pro_al_hero pro_al_hero2 mt-5">
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
                                    <div className="pro_container flex_props">
                                        <div className="pro_img">
                                            <img src="/imgs/images/deals-i.png" alt="Easy Booking" />
                                        </div>
                                        <div className="pro_content">
                                            <p className="pro_tit">Easy Booking</p>
                                            <p className="pro_p">Use our user-friendly platform for a seamless booking.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pro_container flex_props">
                                        <div className="pro_img">
                                            <img src="/imgs/images/round-i.png" alt="Round" />
                                        </div>
                                        <div className="pro_content">
                                            <p className="pro_tit">Round The Clock Assistance</p>
                                            <p className="pro_p">Get 24/7 assistance with our dedicated team of customer service.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pro_container flex_props">
                                        <div className="pro_img">
                                            <img src="/imgs/images/cust-i.png" />
                                        </div>
                                        <div className="pro_content">
                                            <p className="pro_tit">Custom Made Packages</p>
                                            <p className="pro_p">We offer tailored packages that fit within your budget and
                                                preference.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="pro_container flex_props">
                                        <div className="pro_img">
                                            <img src="/imgs/images/experts-i.png" />
                                        </div>
                                        <div className="pro_content">
                                            <p className="pro_tit">Expert Guidance</p>
                                            <p className="pro_p">Get expert guidance for all your travel needs with our dedicated
                                                professionals.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
