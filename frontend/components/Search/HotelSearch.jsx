import React, { useCallback, useEffect, useState } from 'react';
import DatePicker from "react-multi-date-picker";
import { useRouter } from 'next/router'; // Replace useNavigate with useRouter
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { format } from "date-fns";
import debounce from 'lodash.debounce';
import toast from 'react-hot-toast';

const HotelSearch = () => {
    const [value, setValue] = useState(new Date());
    const [valueTo, setValueTo] = useState(new Date());
    const [adult, setAdults] = useState(1);
    const [rooms, setRooms] = useState(1);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);
    const [totalR, setRTotal] = useState(adult);
    const [pass, setPass] = useState(false);
    const [classR, setClassR] = useState('');
    const [tripType, setTripType] = useState("oneWay");
    const [keyword, setKeyword] = useState('');
    const [locations, setLocations] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [showSuggestionsDest, setShowSuggestionsDest] = useState(false);
    const [dkeyword, setDkeyword] = useState('');
    const [destinations, setDestinations] = useState([]);
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date(new Date().setDate(new Date().getDate() + 7)));
    const [errorMessage, setErrorMessage] = useState(''); // State to manage error message
    const router = useRouter(); // Use useRouter instead of useNavigate
    const locationCache = {};

    // useEffect(() => {
    //     const fetchUserLocation = async () => {
    //         try {
    //             const cachedLocation = locationCache["userLocation"];
    //             if (cachedLocation) {
    //                 setLocations(cachedLocation);
    //                 setKeyword(cachedLocation[0]);
    //                 return;
    //             }
    //             const response = await axios.get(`http://ip-api.com/json`);
    //             const locationResponse = await axios.get(`/api/v1/flights/locations?keyword=${response.data.city}`);
    //             const fetchedLocations = locationResponse.data;
    //             setLocations(fetchedLocations);

    //             locationCache["userLocation"] = fetchedLocations;

    //             if (fetchedLocations.length > 0) {
    //                 setKeyword(fetchedLocations[0]);
    //             }
    //         } catch (error) {
    //             console.error("Unable to retrieve your location. Please try again later.", error);
    //         }
    //     };

    //     fetchUserLocation();
    // }, []);

    const fetchLocations = useCallback(
        debounce(async (value) => {
            if (value.length >= 3) {
                try {
                    const { data: fetchedLocations } = await axios.get(`/api/v1/flights/locations?keyword=${value}`);
                    setLocations(fetchedLocations);
                    setShowSuggestions(true);
                } catch (error) {
                    console.error("Error fetching locations:", error);
                }
            } else {
                setShowSuggestions(false);
            }
        }, 500),
        []
    );

    const handleInputChange = useCallback((event) => {
        const value = event.target.value;
        setKeyword(value);
        setShowSuggestionsDest(false);
        fetchLocations(value);
    }, [fetchLocations]);

    const handleSuggestionClick = (location) => {
        setKeyword(location);
        setShowSuggestions(false);
    };

    const handleInputBlur = () => {
        const isValid = locations.some((location) => location === keyword);
        if (!isValid && locations.length > 0) {
            setKeyword(locations[0]);
        }
        setShowSuggestions(false);
    };

    const handleInputFocus = () => {
        setKeyword('');
        setDestinations([]);
        setShowSuggestions(false);
    };

    const handleInputChange2 = async (event) => {
        const value = event.target.value;
        setDkeyword(value);
        setShowSuggestions(false);

        if (value.length >= 1) {
            try {
                const response = await axios.get(`/api/v1/flights/locations?keyword=${value}`);
                setDestinations(response.data);
                setShowSuggestionsDest(true);
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        } else {
            setShowSuggestionsDest(false);
        }
    };

    const handleSuggestionClick2 = (location) => {
        setDkeyword(location);
        setShowSuggestionsDest(false);
    };

    const handleInputBlur2 = () => {
        const isValid = destinations.some((location) => location === dkeyword);
        if (!isValid && destinations.length > 0) {
            setDkeyword(destinations[0]);
        }
        setShowSuggestionsDest(false);
    };

    const handleInputFocus2 = () => {
        setDkeyword('');
        setDestinations([]);
        setShowSuggestionsDest(false);
    };

    const handleSearch = (event) => {
        event.preventDefault();

        if (keyword && dkeyword && keyword === dkeyword) {
            toast.error("Source and destination cannot be the same!", {
                style: {
                    background: "#000",
                    color: "#fff",
                },
            });
            return;
        }

        if (tripType === "roundtrip" && date >= date2) {
            toast.error("Departure date cannot be later than or equal to return date.");
            return;
        }
        setErrorMessage('');
        setKeyword(event.target.keyword || keyword);
        setDkeyword(event.target.dkeyword || dkeyword);
        setDate(event.target.date || date);

        // Use router.push instead of navigate
        router.push(`/hotels/HotelListing?org=${keyword}&checkin=${date}&checkout=${date2}&adt=${adult}&chd=${child}&ift=${infant}&rooms=${rooms}`);
    };

    useEffect(() => {
        setValueTo(value);
        setRTotal(() => {
            return adult + child + infant;
        });
        const formCheckElements = document.querySelectorAll('.form_check_h label');

        const handleClick = (formCheckElement) => {
            setClassR(formCheckElement.innerHTML);
        };

        formCheckElements.forEach((formCheck1) => {
            formCheck1.addEventListener('click', () => handleClick(formCheck1));
        });

        return () => {
            formCheckElements.forEach((formCheck1) => {
                formCheck1.removeEventListener('click', () => handleClick(formCheck1));
            });
        };

    }, [value, adult, child, infant, classR]);

    return (
        <>
        <div className="col-12 col-xxl-9 m-auto">

            <form onSubmit={handleSearch}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                    }
                }}>

                <div className="row form_search_us form_contrainer_s align-items-center">

                    <div className="form_holdd text-start relative form_holdd_dess">

                        <label htmlFor="">Where To?</label>
                        <input type="text" onChange={handleInputChange} value={keyword} onBlur={handleInputBlur} onFocus={handleInputFocus} className="form-control" required placeholder='' />
                        <div className="listing_airport_ul">
                            {showSuggestions && (
                                <ul className='autoSugge-ul'>
                                    {locations.map((location) => (
                                        <>

                                            <li className='autoSuggestData cursor-pointer' onClick={() => handleSuggestionClick(location)}>
                                                <span className="listing_airport_icon">
                                                    <img src="/imgs/airline-img.png" />
                                                </span>
                                                <span>{location}</span>
                                            </li>
                                        </>
                                    ))}
                                </ul>
                            )}
                        </div>

                    </div>



                    <div className="form_holdd form_holdd_semi text-start date_d">

                        <label htmlFor='dDate'>CheckIn Date?</label>
                        <DatePicker
                            value={date}
                            onChange={setDate}
                            minDate={new Date()}
                            maxDate={tripType === "roundtrip" ? date2 : undefined}
                            format="MMM-DD-YYYY"
                        />
                    </div>



                    <div className="form_holdd form_holdd_semi text-start date_d_r">

                        <label htmlFor="">CheckOut Date?</label>
                        <DatePicker
                            value={date2}
                            onChange={(date) => setDate2(date)}
                            minDate={date}
                            format="MMM-DD-YYYY"
                        />

                    </div>

                    <div className="form_holdd text-start border_n form_holddPass">
                        <div className="form_h_semi form_h_semi222 input_aa inpt_aa_flight inpt_aa_flight_flight">
                            <label for="">Passengers & Class</label>
                            <div
                                className="pass_all_main pass_all_main_hotel"
                                onClick={() => {
                                    setPass(!pass);
                                }}
                            >
                                <div className="pass_inn">
                                    <span className="pass_numm1 pass_numm1_flight">{totalR}</span>
                                    Guests
                                </div>
                                <div className="pass_inn">
                                    <span className="pass_numm1 pass_numm1_flight">{rooms} </span>
                                    Rooms
                                </div>


                            </div>
                            <div
                                className={
                                    pass
                                        ? "passenger_modal passenger_modal_flight passenger_modal_active"
                                        : "passenger_modal passenger_modal_flight"
                                }
                            >
                                <div
                                    className="close_bb_modd close_bb_modd_flight"
                                    onClick={() => {
                                        setPass(!pass);
                                    }}
                                >
                                    <img src="/imgs/imgs2/close-i.png" />
                                </div>

                                {/* Rooms */}


                                {/* Adults */}
                                <div className="passenger_mod_main">
                                    <div className="pass_container_1">
                                        <p className="pass_para_p">
                                            <span className="para1_mod_title">Rooms </span>
                                            <span className="add_cont_inf add_cont_inf_flight">{rooms}</span>
                                        </p>
                                        <p className="color-grey font_cs"></p>
                                        <div className="pass_btnss d-flex">
                                            <div
                                                className="add_inf_min_flight pass_btnssbt"
                                                onClick={() => {
                                                    setRooms((prev) => (prev > 0 ? prev - 1 : prev));
                                                }}
                                            >
                                                <FiMinus />
                                            </div>
                                            <div
                                                className="add_inf_add add_inf_add_flight pass_btnssbt"
                                                onClick={() => {
                                                    setRooms((prev) => (prev < 5 ? prev + 1 : prev));
                                                }}
                                            >
                                                <FaPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pass_container_1">
                                        <p className="pass_para_p">
                                            <span className="para1_mod_title">Adults - </span>
                                            <span className="add_cont add_cont_flight">{adult}</span>
                                        </p>
                                        <div className="pass_btnss d-flex">
                                            <div
                                                className="adult_min adult_min_flight pass_btnssbt"
                                                onClick={() => {
                                                    setAdults((prev) => (prev > 0 ? prev - 1 : prev));
                                                }}
                                            >
                                                <FiMinus />
                                            </div>
                                            <div
                                                className="adult_add adult_add_flight pass_btnssbt"
                                                onClick={() => {
                                                    setAdults((prev) => (prev < 10 ? prev + 1 : prev));
                                                }}
                                            >
                                                <FaPlus />
                                            </div>
                                        </div>
                                    </div>




                                    {/* Children */}
                                    <div className="pass_container_1">
                                        <p className="pass_para_p">
                                            <span className="para1_mod_title">Children - </span>
                                            <span className="add_cont_child add_cont_child_flight">{child}</span>
                                        </p>
                                        <p className="color-grey font_cs">2- 12 Years</p>
                                        <div className="pass_btnss d-flex">
                                            <div
                                                className="add_child_min add_child_min_flight pass_btnssbt"
                                                onClick={() => {
                                                    setChild((prev) => (prev > 0 ? prev - 1 : prev));
                                                }}
                                            >
                                                <FiMinus />
                                            </div>
                                            <div className="add_child_add add_child_add_flight pass_btnssbt"
                                                onClick={() => {
                                                    setChild((prev) => (prev < 10 ? prev + 1 : prev));
                                                }}
                                            >
                                                <FaPlus />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Infants */}
                                    <div className="pass_container_1">
                                        <p className="pass_para_p">
                                            <span className="para1_mod_title">Infants - </span>
                                            <span className="add_cont_inf add_cont_inf_flight">{infant}</span>
                                        </p>
                                        <p className="color-grey font_cs">0- 23 Months</p>
                                        <div className="pass_btnss d-flex">
                                            <div
                                                className="add_inf_min_flight pass_btnssbt"
                                                onClick={() => {
                                                    setInfant((prev) => (prev > 0 ? prev - 1 : prev));
                                                }}
                                            >
                                                <FiMinus />
                                            </div>
                                            <div
                                                className="add_inf_add add_inf_add_flight pass_btnssbt"
                                                onClick={() => {
                                                    setInfant((prev) => (prev < 2 ? prev + 1 : prev));
                                                }}
                                            >
                                                <FaPlus />
                                            </div>
                                        </div>
                                    </div>




                                </div>



                                <button
                                    className="appl_btn appl_btn_flight"
                                    type="button"
                                    onClick={() => {
                                        setPass(!pass);
                                    }}
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="form_holdd form_search text-end">

                        <button className='search_btt' type='submit'>
                            <p>Search Flight</p>
                            <img src="/imgs/images/search-i.png" />
                        </button>

                    </div>

                </div>



            </form>
        </div>
    </>
    );
};

export default HotelSearch;