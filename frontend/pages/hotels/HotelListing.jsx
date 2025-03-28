import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useHotel } from '../../context/HotelContext.jsx';
import Layout from '../../Components/Layout.jsx';
import Link from 'next/link';
import { CurrencyContext } from '../../context/CurrencyContext.jsx';

const HotelListing = () => {
  const { currency, convertPrice } = useContext(CurrencyContext);
  const { hotels, loading, errorCode, fetchHotels } = useHotel();
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [filters, setFilters] = useState({ priceRange: [0, 0], sortBy: "Lowest", searchQuery: '' });
  const [minMaxPrice, setMinMaxPrice] = useState({ minPrice: 0, maxPrice: 0 });
  const [asidee, setAsidee] = useState(true);
  const router = useRouter();

  useEffect(() => {
   

    const params = new URLSearchParams(router.query);

    // Correctly retrieve the 'org' parameter
    const org = params.get('org');

    if (!org) {
      console.log(router.query);
      console.log(org);
      console.log("Please select all required fields origin");
      return;
    }

    fetchHotels(params.toString());
  }, [router.query]);

  useEffect(() => {
    if (hotels?.data?.hotels?.length > 0) {
      const prices = hotels?.data?.hotels
        .map((htl) => {
          const rawPrice = htl?.price;
          const numericPrice = parseFloat(rawPrice.replace(/[^0-9.-]+/g, ""));
          return convertPrice(numericPrice, currency);
        })
        .filter((price) => !isNaN(price));

      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      setMinMaxPrice({ minPrice, maxPrice });
      setFilters((prevFilters) => ({
        ...prevFilters,
        priceRange: [minPrice, maxPrice],
      }));

      setFilteredHotels(hotels?.data?.hotels);
    }
  }, [hotels, convertPrice, currency]);

  useEffect(() => {
    const handleFilter = () => {
      if (!hotels?.data?.hotels) return;
      let updatedHotels = hotels.data.hotels;

      updatedHotels = updatedHotels.filter((htl) => {
        const rawPrice = htl?.price;
        const numericPrice = parseFloat(rawPrice.replace(/[^0-9.-]+/g, ""));
        const convertedPrice = convertPrice(numericPrice, currency);
        return (
          convertedPrice >= filters.priceRange[0] &&
          convertedPrice <= filters.priceRange[1]
        );
      });

      if (filters.searchQuery) {
        updatedHotels = updatedHotels.filter((htl) =>
          htl?.name?.toLowerCase().includes(filters.searchQuery.toLowerCase())
        );
      }

      setFilteredHotels(updatedHotels);
    };

    handleFilter();
  }, [hotels?.data?.hotels, filters, convertPrice, currency]);

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value, 10);
    if (newMax >= filters.priceRange[0]) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        priceRange: [prevFilters.priceRange[0], newMax],
      }));
    }
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [minMaxPrice.minPrice, minMaxPrice.maxPrice],
      searchQuery: ''
    });

    setFilteredHotels(hotels?.data?.hotels);
  };

  return (
    <Layout>
      <section className="common_banner_custt">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      {errorCode ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
          <p style={{ color: "red", fontSize: "18px" }}>{errorCode}</p>
        </div>
      ) : loading ? (
        <div className='text-center ' style={{ height: "100vh", alignContent: "center" }}>
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <ul>
            <div className="hotel_listing">
              <section className="container-fluid container-xl">
                <div className="row common_padding">
                  <div className="col-12 col-lg-3 mt-4 mt-md-3">
                    <div className={asidee ? "" : "col-12 col-lg-3 remove_sp aside_cont_fixed pe-0 pe-lg-3 aside_cont_fixed_active"}>
                      <div className="align-items-center mb-2 gap-2 aside_boxx" onClick={() => setAsidee(!asidee)}>
                        <button className="close_short d-flex align-items-center justify-content-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                          </svg>
                        </button>
                        <p className="fil_title">Close Filter</p>
                      </div>
                      <div className="aside_flight aside_flight111 pe-0 pe-lg-4">
                        <div className='pro_namee'>
                          <label htmlFor="searchInput">Property Name</label>
                          <input
                            type="text"
                            id="searchInput"
                            value={filters.searchQuery}
                            onChange={(e) => setFilters((prevFilters) => ({ ...prevFilters, searchQuery: e.target.value }))}
                            placeholder="Search by name"
                            className="form-control"
                          />
                        </div>
                        <hr className="hr_c" />
                        <div className="price_range">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="title_fl fw6 mb-0 letter">Min</p>
                            <p className="fw6 font_12 letter">Max</p>
                          </div>
                          <label htmlFor="customRange1" className="form-label mt-1 mb-0 d-flex justify-content-between range_r">
                            <p>{currency} {filters.priceRange[0]}</p>
                            <p>{currency} {filters.priceRange[1]}</p>
                          </label>
                          <div style={{ position: "relative", height: "30px" }}>
                            <input
                              type="range"
                              min={minMaxPrice.minPrice}
                              max={minMaxPrice.maxPrice}
                              value={filters.priceRange[1]}
                              onChange={handleMaxChange}
                              style={{
                                position: "absolute",
                                top: "10px",
                                zIndex: "2",
                                width: "100%",
                                height: "16px",
                                borderRadius: "11px",
                                pointerEvents: "auto",
                              }}
                              className='range_cc'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-9 m-auto">
                    {filteredHotels ? (
                      filteredHotels.map((h, index) => (
                        <div key={index} className="hotel_container flex_prop gap-3 justify-content-between">
                          <div className="hotel_listing_gal relative">
                            <Swiper slidesPerView={1} modules={[Navigation]} navigation={true}>
                              {h?.images?.map((image, imgIndex) => (
                                <SwiperSlide key={imgIndex}>
                                  <div className="hotel_listing_gal_img">
                                    <img src={`${image}`} alt={`Hotel Image ${imgIndex + 1}`} />
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                            <a className='sav_up_hh'>
                              Save up to {h?.cug?.discount !== undefined && h?.cug?.discount !== null && h?.cug?.discount !== "" ? h.cug.discount : "15%"}
                            </a>
                          </div>
                          <div className="hotel_air_contt flex_prop justify-content-between">
                            <div className="hotel_listing_content">
                              <p className="hotel_t">{h?.name}</p>
                              <div className='hotel_listing_content_para'>
                                <p className="mt-2"><span className="stars_hote">{h?.stars == "0" ? " " : `${h?.stars} Star Hotel`} <img src="/imgs/images/star.png" /></span> | {h?.distance}</p>
                              </div>
                              <hr />
                              <div className="mt-3 am_a flex_prop gap-2 mb-2">
                                <button><img src="/imgs/imgs2/wi-fi-icon.png" alt="Wi-Fi" /> Wifi</button>
                                <button><img src="/imgs/imgs2/gym.png" alt="Gym" /> Gym</button>
                                <button><img src="/imgs/imgs2/wheelchair.png" alt="Wheel Chair" /> Wheel Chair</button>
                              </div>
                              <div className="flex_listing_hh">
                                {h?.rating?.value && (
                                  <>
                                    <p className="pl_ress">{h?.rating?.value} <span>(rating)</span></p>
                                    <p className="pl_ress">{h?.rating?.description}</p>
                                    <p className="pl_ress"><span>({h?.rating?.count} Reviews)</span></p>
                                  </>
                                )}
                              </div>
                              <div className="flex_listing_hh">
                                {h?.rateFeatures && h?.rateFeatures.map((feature, index) => (
                                  <div key={index} className="rate_feature">
                                    <p className='mt-3 pl_ress'>{feature?.key.replace(/_/g, ' ')}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="hotel_pricee text-end">
                              <div>
                                <p className="price_p_h">Lowest price we found for this hotel</p>
                                <p className="h_price_p my-1">{h?.price} <span>/night</span> </p>
                              </div>
                              <div className='text_s_e'>
                                <p className='font_14 mt-0 mt-md-2'> <strong>Total </strong>  {h?.priceDescription}</p>
                                <Link
                                  href={{
                                    pathname: `/HotelBooking/${h?.hotelId}`,
                                    query: {
                                      h: JSON.stringify(h),
                                      location: JSON.stringify(router.query)
                                    }
                                  }}
                                  className='select_bt_h mt-2'
                                >
                                  Select Hotel  <img src="/imgs/imgs2/right-arrow.png" alt="Select" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No hotels found.</p>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </ul>
        </div>
      )}
    </Layout>
  );
};

export default HotelListing;