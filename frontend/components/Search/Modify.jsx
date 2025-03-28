import React, { useCallback, useEffect, useState } from 'react';
import DatePicker from "react-multi-date-picker";
import { useRouter } from 'next/router';
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import moment from "moment";
import toast from 'react-hot-toast';
import debounce from 'lodash.debounce';

function Modify() {
    const [value, setValue] = useState(new Date());
    const [valueTo, setValueTo] = useState(new Date());
    const [adult, setAdults] = useState(1);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);
    const [totalR, setRTotal] = useState(adult);
    const [pass, setPass] = useState(false);
    const [classR, setClassR] = useState('');
    const [tripType, setTripType] = useState("oneWay");
    const [keyword, setKeyword] = useState();
    const [locations, setLocations] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [dkeyword, setDkeyword] = useState();
    const [destinations, setDestinations] = useState([]);
    const [date, setDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date(new Date().setDate(new Date().getDate() + 7)));
    const [showSuggestionsDest, setShowSuggestionsDest] = useState(false);
    const router = useRouter();

    // Origin
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

    // Destination
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

        router.push(
            `/flights/AirlinesListing?source=${keyword}&destination=${dkeyword}&date=${date}&rtnDate=${returnDate}&trpType=${tripType}&adults=${adult}&children=${child}&infants=${infant}&tpassenger=${totalR}&classType=${classR}`
        );
    };

    const usePopulateStateFromParams = () => {
        useEffect(() => {
            const { source, destination, date, rtnDate, trpType, adults, children, infants, classType, tpassenger } = router.query;

            const formattedDate = date ? moment(new Date(date)).format("MMM-DD-YYYY") : "";
            const returnFormattedDate = rtnDate ? moment(new Date(rtnDate)).format("MMM-DD-YYYY") : "";

            setKeyword(source || "");
            setDkeyword(destination || "");
            setDate(formattedDate || new Date());
            setReturnDate(returnFormattedDate || new Date(new Date().setDate(new Date().getDate() + 7)));
            setTripType(trpType || "oneWay");
            setAdults(parseInt(adults || "1"));
            setChild(parseInt(children || "0"));
            setInfant(parseInt(infants || "0"));
            setClassR(classType || "");
            setRTotal(parseInt(tpassenger || "0"));
        }, [router.query]);
    };

    usePopulateStateFromParams();

    useEffect(() => {
        setValueTo(value);
        setRTotal(() => adult + child + infant);
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
            <section className="container-fluid modify_bg">
                <div className="container-fluid container-xl">
                    <div className="row common_padding modify_s">
                        <div className="col-12 col-lg-11 m-auto">
                            <div className="row">
                                <div class="col-12 flex_props relative justify-content-start justify-content-md-start flex_wrr">
                                    <div className="tabb_bt flex_props tabs_ways tabs_ways_modify">
                                        <button
                                            onClick={() => setTripType("roundtrip")}
                                            className={tripType === "roundtrip" ? "active" : ""}
                                        >
                                            <img src="/imgs/dot-i.png" alt="dot-icon" /> Round Way
                                        </button>
                                        <button
                                            className={tripType === "oneWay" ? "selected" : ""}
                                            onClick={() => setTripType("oneWay")}
                                        >
                                            <img src="/imgs/dot-i.png" alt="dot" />
                                            One Way</button>


                                    </div>
                                </div>

                            </div>

                            <form onSubmit={handleSearch} onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                }
                            }}>




                                <div className="row form_search_us align-items-center">
                                    <div className="form_holdd text-start relative">

                                        <label htmlFor="">Where from</label>
                                        <input type="text" value={keyword} onChange={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus} className="form-control" required />


                                        <div className="listing_airport_ul">
                                            {showSuggestions && (
                                                <ul className='autoSugge-ul'>
                                                    {locations.map((location) => (
                                                        <>
                                                            <li className='autoSuggestData cursor-pointer' onClick={() => handleSuggestionClick(location)}>
                                                                <span className="p-0 m-0 text-dark cursor-pointer">{location}</span>
                                                            </li>
                                                        </>
                                                    ))}
                                                </ul>

                                            )}
                                        </div>

                                    </div>
                                    <div className="form_holdd text-start relative">

                                        <label htmlFor=""> Where To?</label>
                                        <input type="text" onChange={handleInputChange2} value={dkeyword} onBlur={handleInputBlur2} onFocus={handleInputFocus2} className="form-control" required />



                                        <div className="listing_airport_ul">
                                            {showSuggestionsDest && (
                                                <ul className='autoSugge-ul'>
                                                    {destinations.map((location) => (
                                                        <>
                                                            <li className='autoSuggestData cursor-pointer' onClick={() => handleSuggestionClick2(location)}>
                                                                <span className="p-0 m-0 text-dark cursor-pointer">{location}</span>
                                                            </li>
                                                        </>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form_holdd form_holdd_semi text-start date_d">

                                        <label htmlFor='dDate'>Departure Date?</label>
                                        <DatePicker
                                            value={date}
                                            onChange={setDate}
                                            minDate={new Date()}
                                            maxDate={returnDate} // Disable dates later than the return date
                                            format="MMM-DD-YYYY"
                                        />


                                    </div>

                                    {tripType === "roundtrip" ? (
                                        <div className="form_holdd form_holdd_semi text-start date_d_r">

                                            <label htmlFor=""> Return Date?</label>
                                            <DatePicker
                                                value={returnDate}
                                                onChange={(date) => setReturnDate(date)}
                                                minDate={date}
                                                format="MMM-DD-YYYY"
                                            />
                                            <p className="small_de">MMM/DD/YYYY</p>

                                        </div>
                                    ) : (
                                        <div className="form_holdd form_holdd_semi text-start date_d_r">

                                            <label htmlFor="">Return Date?</label>
                                            <DatePicker
                                                id="roundtrip"
                                                name="tripType"
                                                checked={tripType === "roundtrip"}
                                                value={tripType === "roundtrip" ? returnDate : null}
                                                onChange={(date) => {
                                                    setTripType("roundtrip");
                                                    setReturnDate(date);
                                                }}
                                                minDate={date}
                                                format="MMM-DD-YYYY"
                                            />

                                        </div>
                                    )}


                                    <div className="form_holdd text-start border_n">
                                        <div className="form_h_semi form_h_semi222 input_aa inpt_aa_flight inpt_aa_flight_flight">
                                            <label for="">Passengers & Class</label>
                                            <div
                                                className="pass_all_main"
                                                onClick={() => {
                                                    setPass(!pass);
                                                }}
                                            >
                                                <div className="pass_inn">
                                                    <span className="pass_numm1 pass_numm1_flight">{totalR}</span>
                                                    Passenger
                                                </div>
                                                <p className="className_holdd color-grey">{classR}</p>
                                                <input type="hidden" name="adt" value={adult} id="adult" />
                                                <input type="hidden" name="chd" value={child} id="child" />
                                                <input type="hidden" name="inf" value={infant} id="infant" />
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
                                                <div className="passenger_mod_main">
                                                    {/* Adults */}
                                                    <div className="pass_container_1">
                                                        <p className="pass_para_p">
                                                            <span className="para1_mod_title">Adults - </span>
                                                            <span className="add_cont add_cont_flight">{adult}</span>
                                                        </p>
                                                        <div className="pass_btnss d-flex">
                                                            <div
                                                                className="adult_min adult_min_flight pass_btnssbt"
                                                                onClick={() => {
                                                                    setAdults((prev) => (prev > 1 ? prev - 1 : prev));
                                                                }}
                                                            >
                                                                <FiMinus />
                                                            </div>
                                                            <div
                                                                className="adult_add adult_add_flight pass_btnssbt"
                                                                onClick={() => {
                                                                    setAdults((prev) => prev + 1);
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
                                                            <div
                                                                className="add_child_add add_child_add_flight pass_btnssbt"
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

                                                {/* Class Selection */}
                                                <div className="form_check_h">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="cabin"
                                                            id="flexRadioDefault1"
                                                            value="Economy"
                                                            checked={classR === "Economy"}
                                                            onChange={() => setClassR("Economy")}
                                                        />
                                                        <label
                                                            className="form-check-label form_h_semi2222"
                                                            htmlFor="flexRadioDefault1"
                                                        >
                                                            Economy
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="cabin"
                                                            id="flexRadioDefault2"
                                                            value="Premium Economy"
                                                            checked={classR === "Premium Economy"}
                                                            onChange={() => setClassR("Premium Economy")}
                                                        />
                                                        <label
                                                            className="form-check-label form_h_semi2222"
                                                            htmlFor="flexRadioDefault2"
                                                        >
                                                            Premium Economy
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="cabin"
                                                            id="flexRadioDefault3"
                                                            value="Business"
                                                            checked={classR === "Business"}
                                                            onChange={() => setClassR("Business")}
                                                        />
                                                        <label
                                                            className="form-check-label form_h_semi2222"
                                                            htmlFor="flexRadioDefault3"
                                                        >
                                                            Business
                                                        </label>
                                                    </div>
                                                </div>

                                                <button
                                                    className="appl_btn appl_btn_flight"
                                                    type="button"
                                                    onClick={() => {
                                                        setPass(!pass);
                                                    }}
                                                >
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form_holdd form_search text-end">

                                        <button className='search_btt search_btt2' type='submit'>
                                            <p>Search Flight</p>
                                            <img src="/imgs/images/search-i.png" />
                                        </button>

                                    </div>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Modify;