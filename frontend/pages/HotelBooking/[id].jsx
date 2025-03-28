import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import { useRouter } from 'next/router';
import { CurrencyContext } from '../../context/CurrencyContext';
import axios from 'axios';
import toast from "react-hot-toast";
import DatePicker from "react-multi-date-picker";

const HotelBooking = () => {
    const router = useRouter();
    const { currency, convertPrice } = useContext(CurrencyContext);

    const [bookingPop, setBookingPop] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        mobile: "",
        dob: "",
        cardHolderName: "",
        cardNumber: "",
        cardDetails: "",
        address: "",
        country: "",
        state: "",
        city: "",
        postalCode: "",
    });
    const [travelD, travelDSet] = useState(true);
    const [hBookingData, setHBookingData] = useState(null);
    const [locationData, setLocationData] = useState(null);

    // Parse query parameters on mount
    useEffect(() => {
        if (router.query.h) {
            try {
                const parsedHBookingData = JSON.parse(router.query.h);
                setHBookingData(parsedHBookingData);
            } catch (error) {
                console.error("Error parsing hBookingData:", error);
            }
        }

        if (router.query.location) {
            try {
                const parsedLocationData = JSON.parse(router.query.location);
                setLocationData(parsedLocationData);
            } catch (error) {
                console.error("Error parsing location data:", error);
            }
        }
    }, [router.query]);

    const priceDesc = hBookingData?.priceDescription;

    const extractDays = (priceDescription) => {
        if (!priceDescription) {
            return null; // Return null if priceDescription is undefined or null
        }
        const match = priceDescription.match(/(\d+)\s+nights/);
        return match ? parseInt(match[1], 10) : null;
    };

    const totalDays = priceDesc ? extractDays(priceDesc) : 0; // Ensure priceDesc is checked before calling extractDays

    const extractNumericValue = (priceString) => {
        if (!priceString) return 0; // Return 0 if priceString is undefined or null
        const numericValue = priceString.replace(/[^0-9.-]+/g, "");
        return parseFloat(numericValue) || 0; // Return 0 if parsing fails
    };

    const numericPrice = extractNumericValue(hBookingData?.price || "0");

    const totalPrice = numericPrice * totalDays;

    // Handle input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const { email, cardNumber, cardDetails, cardHolderName } = formData;

        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            toast.error("Please enter a valid email address.");
            return false;
        }

        // Card number validation
        if (!/^\d{16}$/.test(cardNumber)) {
            toast.error("Card number must be 16 digits.");
            return false;
        }

        // Cardholder name validation
        if (!cardHolderName.trim()) {
            toast.error("Cardholder name is required.");
            return false;
        }

        return true;
    };

    const finalData = {
        ...formData,
        org: locationData?.org,
        adult: locationData?.adt,
        child: locationData?.chd,
        infant: locationData?.ift,
        rooms: locationData?.rooms,
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (validateForm()) {
                const { data } = await axios.post('/api/v1/hotels/travel/getbill', finalData);

                router.push({
                    pathname: "/ThankYou",
                    query: { billData: JSON.stringify(data) },
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Failed to submit the form. Please try again.");
        }
    };


    return (
        <>
            <Layout title="Cheap Tickets: Flights, Hotels and Packages – Traveloways" description="welcome to Traveloways" >
                <section className="common_banner_custt">
                    <div className="container">
                        <div className="row">

                        </div>
                    </div>
                </section>

                <form className='listing_body' onSubmit={handleSubmit}>

                    <section className="banner_booking">
                        <div className="container-fluid container-xl">
                            <div className="row">
                                {/* Corrected Section */}
                                <div className="col-12 flex_me d-flex d-lg-none">
                                    <div className='bagde_cust flex_prop justify-content-center'>
                                        <div className="badge_icon">
                                            <img src="/imgs/right-chevron.png" />
                                        </div>
                                        <span>Payment and booking</span>
                                    </div>
                                    <div className='price_summ' onClick={() => {
                                        travelDSet(!travelD);
                                    }}>
                                        <p className='total_prr'>Total Price Summary</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="booking_cont container-fluid container-xl py-4 py-sm-5 booking_cont_widd">
                        <div className="row justify-content-center common_padding">

                            <div className="col-12 col-lg-9 col-xl-9 pe-0 pe-lg-3" >
                                <div className="boking_header" >
                                    <div className="booking_main">
                                        <div className='booking_title'>
                                            <div className="book_semi1">
                                                <img src="/imgs/personal-icon.png" />
                                                Passenger Detail
                                            </div>
                                            <span>(Please provide the Following details to complete your booking)</span>
                                        </div>
                                        <div className="mt-4 booking_main_m">
                                            <div className="row form_booking_f">
                                                <div className="col-12 col-sm-6">
                                                    <div className="form_booking">
                                                        <label htmlFor="">Title <span>*</span></label>
                                                        <div className="form_input">
                                                            <select name="" id="middleName" value={formData.middleName} onChange={handleInputChange} required className='form-select form-control'>
                                                                <option value="mr">Mr.</option>
                                                                <option value="mrs. /miss /ms.">Mrs. / Miss / Ms.</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form_booking">
                                                        <label htmlFor="">First name <span>*</span></label>
                                                        <div className="form_input">
                                                            <input type="text" id="firstName" value={formData.firstName}
                                                                onChange={handleInputChange}
                                                                required placeholder='Enter Your Name' className='form-control' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form_booking">
                                                        <label htmlFor="">Last name <span>*</span></label>
                                                        <div className="form_input">
                                                            <input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} required placeholder='Enter Your Name' className='form-control' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <div className="row form_booking">
                                                        <div className="col-12">
                                                            <label htmlFor="">Date of birth <span>*</span></label>
                                                        </div>
                                                        <div className="col-12 form_input_minus_m">

                                                            <div className="form_input form_input_minus">
                                                                <input type="date" id="dob" value={formData.dob} onChange={handleInputChange} required placeholder='YYYY' className='form-control' maxLength={4} />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="booking_main booking_main1">
                                        <div className='booking_title'>
                                            <div className="book_semi1">
                                                <img src="/imgs/adult-icon.png" />
                                                Contact Information
                                            </div>
                                            <span>(Enter your email and phone number and we will send you a booking)</span>
                                        </div>
                                        <div className="mt-4 booking_main_m">
                                            <div className="row form_booking_f">
                                                <div className="col-6">
                                                    <div className="form_booking">
                                                        <label htmlFor="">E-mail <span>*</span></label>
                                                        <div className="form_input">

                                                            <input type="tesxt" id="email" value={formData.email} onChange={handleInputChange} required placeholder='Enter Your Email' className='form-control' />

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-6">
                                                        <div className="form_booking">
                                                            <label htmlFor="">Re-enter e-mail * <span>*</span></label>
                                                            <div className="form_input">
                                                                <input type="text" placeholder='Enter Your Email' className='form-control' />
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                <div className="col-6">
                                                    <div className="form_booking">
                                                        <label htmlFor="">Phone number <span>*</span></label>
                                                        <div className="form_input">
                                                            <input
                                                                type="Number"
                                                                maxLength="10"
                                                                id="mobile"
                                                                value={formData.mobile}
                                                                onChange={handleInputChange}
                                                                required
                                                                placeholder="Enter Your Number"
                                                                className="form-control"
                                                                pattern="\d*" // Allows only numbers
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-6">
                                                        <div className="form_booking">
                                                            <label htmlFor="">Alternate Phone number <span>*</span></label>
                                                            <div className="form_input">
                                                                <input type="text" placeholder='Enter Your Number' className='form-control' />
                                                            </div>
                                                        </div>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="booking_main booking_main1">
                                        <div className='booking_title'>
                                            <div className="book_semi1">
                                                <img src="/imgs/pay-icon.png" />
                                                Payment Details </div>  </div>
                                        <div className="mt-4 booking_main_m">
                                            <div className="row form_booking_f">
                                                <div className="col-12">
                                                    <div className="form_booking">
                                                        <label htmlFor="">Card Number <span>*</span></label>
                                                        <div className="form_input">
                                                            <input type="number" id="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required className='form-control' maxLength={16} placeholder='Credit / Debit Card Number' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form_booking">
                                                        <label htmlFor="">Card Holder Name <span>*</span></label>
                                                        <div className="form_input">
                                                            <input type="text" id="cardHolderName" value={formData.cardHolderName} onChange={handleInputChange} required placeholder='Enter Card Holder Name' className='form-control' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form_booking">
                                                                <label htmlFor="">Month <span>*</span></label>
                                                                <div className="form_input">
                                                                    <select name="" required className='form-select form-control'>
                                                                        <option value="1">Jan</option>
                                                                        <option value="2">Feb</option>
                                                                        <option value="3">Mar</option>
                                                                        <option value="4">Apr</option>
                                                                        <option value="5">May</option>
                                                                        <option value="6">Jun</option>
                                                                        <option value="7">Jul</option>
                                                                        <option value="8">Aug</option>
                                                                        <option value="9">Sep</option>
                                                                        <option value="10">Oct</option>
                                                                        <option value="11">Nov</option>
                                                                        <option value="12">Dec</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form_booking">
                                                                <label htmlFor="">Year <span>*</span></label>
                                                                <div className="form_input">
                                                                    <select name="" required className='form-select form-control'>
                                                                        <option value="2025">2025</option>
                                                                        <option value="2026">2026</option>
                                                                        <option value="2027">2027</option>
                                                                        <option value="2028">2028</option>
                                                                        <option value="2029">2029</option>
                                                                        <option value="2030">2030</option>
                                                                        <option value="2031">2031</option>
                                                                        <option value="2032">2032</option>
                                                                        <option value="2033">2033</option>
                                                                        <option value="2034">2034</option>
                                                                        <option value="2035">2035</option>
                                                                        <option value="2036">2036</option>
                                                                        <option value="2037">2037</option>
                                                                        <option value="2038">2038</option>
                                                                        <option value="2039">2039</option>
                                                                        <option value="2040">2040</option>
                                                                        <option value="2041">2041</option>
                                                                        <option value="2042">2042</option>
                                                                        <option value="2043">2043</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="col-6">
                                                    <div className="form_booking">
                                                        <label htmlFor="">CVV <span>*</span></label>
                                                        <div className="form_input">
                                                            <input type="number" id="cardDetails" value={formData.cardDetails} onChange={handleInputChange} required placeholder='Enter Your CVV Number' className='form-control' />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="booking_main booking_main1">
                                        <div className='booking_title'>
                                            <div className="book_semi1">
                                                <img src="/imgs/bill-payment.png" />
                                                Billing Details </div>  </div>
                                        <div className="mt-4 booking_main_m">
                                            <div className="row form_booking_f">
                                                <div className="col-12 col-sm-3">
                                                    <div className="form_booking">
                                                        <label htmlFor="">Country <span>*</span></label>
                                                        <div className="form_input">
                                                            <select name="" id="country" value={formData.country}
                                                                onChange={handleInputChange} required className='form-select form-control'>
                                                                <option value="US">United States</option>
                                                                <option value="CA">Canada</option>
                                                                <option value="UK">United Kingdom</option>
                                                                <option value="0" disabled="disabled">---------------------------------</option>
                                                                <option value="AD">Andorra, Principality of</option>
                                                                <option value="AE">United Arab Emirates</option>
                                                                <option value="AF">Afghanistan, Islamic State of</option>
                                                                <option value="AG">Antigua and Barbuda</option>
                                                                <option value="AI">Anguilla</option>
                                                                <option value="AL">Albania</option>
                                                                <option value="AM">Armenia</option>
                                                                <option value="AN">Netherlands Antilles</option>
                                                                <option value="AO">Angola</option>
                                                                <option value="AQ">Antarctica</option>
                                                                <option value="AR">Argentina</option>
                                                                <option value="AS">American Samoa</option>
                                                                <option value="AT">Austria</option>
                                                                <option value="AU">Australia</option>
                                                                <option value="AW">Aruba</option>
                                                                <option value="AZ">Azerbaidjan</option>
                                                                <option value="BA">Bosnia-Herzegovina</option>
                                                                <option value="BB">Barbados</option>
                                                                <option value="BD">Bangladesh</option>
                                                                <option value="BE">Belgium</option>
                                                                <option value="BF">Burkina Faso</option>
                                                                <option value="BG">Bulgaria</option>
                                                                <option value="BH">Bahrain</option>
                                                                <option value="BI">Burundi</option>
                                                                <option value="BJ">Benin</option>
                                                                <option value="BM">Bermuda</option>
                                                                <option value="BN">Brunei Darussalam</option>
                                                                <option value="BO">Bolivia</option>
                                                                <option value="BR">Brazil</option>
                                                                <option value="BS">Bahamas</option>
                                                                <option value="BT">Bhutan</option>
                                                                <option value="BV">Bouvet Island</option>
                                                                <option value="BW">Botswana</option>
                                                                <option value="BY">Belarus</option>
                                                                <option value="BZ">Belize</option>
                                                                <option value="CC">Cocos (Keeling) Islands</option>
                                                                <option value="CD">Congo, The Democratic Republic of the</option>
                                                                <option value="CF">Central African Republic</option>
                                                                <option value="CG">Congo</option>
                                                                <option value="CH">Switzerland</option>
                                                                <option value="CI">Ivory Coast (Cote D'Ivoire)</option>
                                                                <option value="CK">Cook Islands</option>
                                                                <option value="CL">Chile</option>
                                                                <option value="CM">Cameroon</option>
                                                                <option value="CN">China</option>
                                                                <option value="CO">Colombia</option>
                                                                <option value="CR">Costa Rica</option>
                                                                <option value="CU">Cuba</option>
                                                                <option value="CV">Cape Verde</option>
                                                                <option value="CX">Christmas Island</option>
                                                                <option value="CY">Cyprus</option>
                                                                <option value="CZ">Czech Republic</option>
                                                                <option value="DE">Germany</option>
                                                                <option value="DJ">Djibouti</option>
                                                                <option value="DK">Denmark</option>
                                                                <option value="DM">Dominica</option>
                                                                <option value="DO">Dominican Republic</option>
                                                                <option value="DZ">Algeria</option>
                                                                <option value="EC">Ecuador</option>
                                                                <option value="EE">Estonia</option>
                                                                <option value="EG">Egypt</option>
                                                                <option value="EH">Western Sahara</option>
                                                                <option value="ER">Eritrea</option>
                                                                <option value="ES">Spain</option>
                                                                <option value="ET">Ethiopia</option>
                                                                <option value="FI">Finland</option>
                                                                <option value="FJ">Fiji</option>
                                                                <option value="FK">Falkland Islands</option>
                                                                <option value="FM">Micronesia</option>
                                                                <option value="FO">Faroe Islands</option>
                                                                <option value="FR">France</option>
                                                                <option value="FX">France (European Territory)</option>
                                                                <option value="GA">Gabon</option>
                                                                <option value="GB">Great Britain</option>
                                                                <option value="GD">Grenada</option>
                                                                <option value="GE">Georgia</option>
                                                                <option value="GF">French Guyana</option>
                                                                <option value="GH">Ghana</option>
                                                                <option value="GI">Gibraltar</option>
                                                                <option value="GL">Greenland</option>
                                                                <option value="GM">Gambia</option>
                                                                <option value="GN">Guinea</option>
                                                                <option value="GP">Guadeloupe (French)</option>
                                                                <option value="GQ">Equatorial Guinea</option>
                                                                <option value="GR">Greece</option>
                                                                <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                                <option value="GT">Guatemala</option>
                                                                <option value="GU">Guam (USA)</option>
                                                                <option value="GW">Guinea Bissau</option>
                                                                <option value="GY">Guyana</option>
                                                                <option value="HK">Hong Kong</option>
                                                                <option value="HM">Heard and McDonald Islands</option>
                                                                <option value="HN">Honduras</option>
                                                                <option value="HR">Croatia</option>
                                                                <option value="HT">Haiti</option>
                                                                <option value="HU">Hungary</option>
                                                                <option value="ID">Indonesia</option>
                                                                <option value="IE">Ireland</option>
                                                                <option value="IL">Israel</option>
                                                                <option selected="selected" value="IN">India</option>
                                                                <option value="IO">British Indian Ocean Territory</option>
                                                                <option value="IQ">Iraq</option>
                                                                <option value="IR">Iran</option>
                                                                <option value="IS">Iceland</option>
                                                                <option value="IT">Italy</option>
                                                                <option value="JM">Jamaica</option>
                                                                <option value="JO">Jordan</option>
                                                                <option value="JP">Japan</option>
                                                                <option value="KE">Kenya</option>
                                                                <option value="KG">Kyrgyz Republic (Kyrgyzstan)</option>
                                                                <option value="KH">Cambodia, Kingdom of</option>
                                                                <option value="KI">Kiribati</option>
                                                                <option value="KM">Comoros</option>
                                                                <option value="KN">Saint Kitts &amp; Nevis Anguilla</option>
                                                                <option value="KP">North Korea</option>
                                                                <option value="KR">South Korea</option>
                                                                <option value="KW">Kuwait</option>
                                                                <option value="KY">Cayman Islands</option>
                                                                <option value="KZ">Kazakhstan</option>
                                                                <option value="LA">Laos</option>
                                                                <option value="LB">Lebanon</option>
                                                                <option value="LC">Saint Lucia</option>
                                                                <option value="LI">Liechtenstein</option>
                                                                <option value="LK">Sri Lanka</option>
                                                                <option value="LR">Liberia</option>
                                                                <option value="LS">Lesotho</option>
                                                                <option value="LT">Lithuania</option>
                                                                <option value="LU">Luxembourg</option>
                                                                <option value="LV">Latvia</option>
                                                                <option value="LY">Libya</option>
                                                                <option value="MA">Morocco</option>
                                                                <option value="MC">Monaco</option>
                                                                <option value="MD">Moldova</option>
                                                                <option value="MG">Madagascar</option>
                                                                <option value="MH">Marshall Islands</option>
                                                                <option value="MK">Macedonia</option>
                                                                <option value="ML">Mali</option>
                                                                <option value="MM">Myanmar</option>
                                                                <option value="MN">Mongolia</option>
                                                                <option value="MO">Macau</option>
                                                                <option value="MP">Northern Mariana Islands</option>
                                                                <option value="MQ">Martinique (French)</option>
                                                                <option value="MR">Mauritania</option>
                                                                <option value="MS">Montserrat</option>
                                                                <option value="MT">Malta</option>
                                                                <option value="MU">Mauritius</option>
                                                                <option value="MV">Maldives</option>
                                                                <option value="MW">Malawi</option>
                                                                <option value="MX">Mexico</option>
                                                                <option value="MY">Malaysia</option>
                                                                <option value="MZ">Mozambique</option>
                                                                <option value="NA">Namibia</option>
                                                                <option value="NC">New Caledonia (French)</option>
                                                                <option value="NE">Niger</option>
                                                                <option value="NF">Norfolk Island</option>
                                                                <option value="NG">Nigeria</option>
                                                                <option value="NI">Nicaragua</option>
                                                                <option value="NL">Netherlands</option>
                                                                <option value="NO">Norway</option>
                                                                <option value="NP">Nepal</option>
                                                                <option value="NR">Nauru</option>
                                                                <option value="NT">Neutral Zone</option>
                                                                <option value="NU">Niue</option>
                                                                <option value="NZ">New Zealand</option>
                                                                <option value="OM">Oman</option>
                                                                <option value="PA">Panama</option>
                                                                <option value="PE">Peru</option>
                                                                <option value="PF">Polynesia (French)</option>
                                                                <option value="PG">Papua New Guinea</option>
                                                                <option value="PH">Philippines</option>
                                                                <option value="PK">Pakistan</option>
                                                                <option value="PL">Poland</option>
                                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                                <option value="PN">Pitcairn Island</option>
                                                                <option value="PR">Puerto Rico</option>
                                                                <option value="PT">Portugal</option>
                                                                <option value="PW">Palau</option>
                                                                <option value="PY">Paraguay</option>
                                                                <option value="QA">Qatar</option>
                                                                <option value="RE">Reunion (French)</option>
                                                                <option value="RO">Romania</option>
                                                                <option value="RU">Russian Federation</option>
                                                                <option value="RW">Rwanda</option>
                                                                <option value="SA">Saudi Arabia</option>
                                                                <option value="SB">Solomon Islands</option>
                                                                <option value="SC">Seychelles</option>
                                                                <option value="SD">Sudan</option>
                                                                <option value="SE">Sweden</option>
                                                                <option value="SG">Singapore</option>
                                                                <option value="SH">Saint Helena</option>
                                                                <option value="SI">Slovenia</option>
                                                                <option value="SJ">Svalbard and Jan Mayen Islands</option>
                                                                <option value="SK">Slovak Republic</option>
                                                                <option value="SL">Sierra Leone</option>
                                                                <option value="SM">San Marino</option>
                                                                <option value="SN">Senegal</option>
                                                                <option value="SO">Somalia</option>
                                                                <option value="SR">Suriname</option>
                                                                <option value="ST">Saint Tome (Sao Tome) and Principe</option>
                                                                <option value="SU">Former USSR</option>
                                                                <option value="SV">El Salvador</option>
                                                                <option value="SY">Syria</option>
                                                                <option value="SZ">Swaziland</option>
                                                                <option value="TC">Turks and Caicos Islands</option>
                                                                <option value="TD">Chad</option>
                                                                <option value="TF">French Southern Territories</option>
                                                                <option value="TG">Togo</option>
                                                                <option value="TH">Thailand</option>
                                                                <option value="TJ">Tadjikistan</option>
                                                                <option value="TK">Tokelau</option>
                                                                <option value="TM">Turkmenistan</option>
                                                                <option value="TN">Tunisia</option>
                                                                <option value="TO">Tonga</option>
                                                                <option value="TP">East Timor</option>
                                                                <option value="TR">Turkey</option>
                                                                <option value="TT">Trinidad and Tobago</option>
                                                                <option value="TV">Tuvalu</option>
                                                                <option value="TW">Taiwan</option>
                                                                <option value="TZ">Tanzania</option>
                                                                <option value="UA">Ukraine</option>
                                                                <option value="UG">Uganda</option>
                                                                <option value="UM">USA Minor Outlying Islands</option>
                                                                <option value="UY">Uruguay</option>
                                                                <option value="UZ">Uzbekistan</option>
                                                                <option value="VA">Holy See (Vatican City State)</option>
                                                                <option value="VC">Saint Vincent &amp; Grenadines</option>
                                                                <option value="VE">Venezuela</option>
                                                                <option value="VG">Virgin Islands (British)</option>
                                                                <option value="VI">Virgin Islands (USA)</option>
                                                                <option value="VN">Vietnam</option>
                                                                <option value="VU">Vanuatu</option>
                                                                <option value="WF">Wallis and Futuna Islands</option>
                                                                <option value="WS">Samoa</option>
                                                                <option value="YE">Yemen</option>
                                                                <option value="YT">Mayotte</option>
                                                                <option value="YU">Yugoslavia</option>
                                                                <option value="ZA">South Africa</option>
                                                                <option value="ZM">Zambia</option>
                                                                <option value="ZR">Zaire</option>
                                                                <option value="ZW">Zimbabwe</option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <div className="form_booking">
                                                        <label htmlFor="">Address <span>*</span></label>
                                                        <div className="form_input">
                                                            <input type="text" id="address" value={formData.address} onChange={handleInputChange} required className='form-control' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-4">
                                                    <div className="form_booking">
                                                        <label htmlFor="">City town <span>*</span></label>
                                                        <div className="form_input">
                                                            <input type="text" id="city" value={formData.city} onChange={handleInputChange} required className='form-control' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-4">
                                                    <div className="form_booking">
                                                        <label htmlFor="">State/Province <span>*</span></label>
                                                        <div className="form_input">
                                                            <input type="text" id="state" value={formData.state} onChange={handleInputChange} required className='form-control' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-4">
                                                    <div className="form_booking">
                                                        <label htmlFor="">ZIP/Postal code <span>*</span></label>
                                                        <div className="form_input">
                                                            <input type="text" id="postalCode" value={formData.postalCode} onChange={handleInputChange} required className='form-control' />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="row align-items-center mt-3">
                                        <div className="col-12 col-md-8 col-lg-9">
                                            <div className="form_booking flex_props gap-2">
                                                <p className="secure_tit">
                                                    <img src="/imgs/protect.png" />
                                                </p>
                                                <div>
                                                    <p>We use 128-bit secure encryption providing you a SAFE payment environment</p>
                                                    <p className='font_12'>By Continuing, you agree to the Rules, <a href="/terms-conditions"> Terms and Conditions</a>and <a href="/privacy-policy">Privacy Policy </a> of Traveloways</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <div className="form_booking">
                                                <button type="submit" value="submit" className="book_btn_booking">Confirm & Book<i className="fa-solid fa-arrow-right-to-bracket"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={travelD ? "col-12 col-lg-3 ps-0 ps-lg-3 price_bg" : "col-12 col-lg-3 ps-0 ps-lg-3 price_bg price_bg_active"}>
                                <button className="close_price_sum">

                                    Travel Details
                                    <div className="close_travel_det_d" onClick={() => {
                                        travelDSet(!travelD)
                                    }}>
                                        <img src="/imgs/imgs2/cancel.png" />
                                    </div>
                                </button>


                                {/* <a className="booking_helpp_cont flex_prop relative" href="tel:+1 888 212 0631">
                                    <div className="agent_ii">
                                        <img src="/imgs/images/agent_icon1.png" />
                                    </div>
                                    <div>
                                        <p className='need_p'>Need help with your booking?</p>
                                        <p className='num_agent_li'>+1 888 212 0631</p>
                                    </div>
                                    <div className='icon_float_lang flex_prop'>
                                        <img src="/imgs/imgs2/es-i.png" className='icon_float_lang11_img' />
                                        <img src="/imgs/imgs2/en-ii.png" className='icon_float_lang2' />
                                    </div>
                                </a> */}
                                <div className="pass_detail_price p-0 mt-0">
                                    <div className="pass_de_cont mb-2 p-0">
                                        <h4 className='price_s'>Price Summary</h4>
                                    </div>
                                    <div className="pass_de_cont">
                                        <p>Hotel</p>
                                        <p> {currency}</p>
                                    </div>
                                    <div className="pass_de_cont">
                                        <ul>
                                            {/* <li>
                                                <p>Adult x {adt}</p>
                                                <p>{currency} {convertPrice(flight?.price_dropdown?.base_fare * adt, currency)}</p>
                                            </li>
                                            <li>
                                                <p>Child x {chd}</p>
                                                <p>{currency}  {convertPrice(flight?.price_dropdown?.base_fare * chd, currency)}</p>
                                            </li>
                                            <li>
                                                <p>Infant x {ift}</p>
                                                <p>{currency} {convertPrice(flight?.price_dropdown?.base_fare * ift, currency)}</p>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <hr className="pass_hrr" />
                                    <div className="pass_de_cont">
                                        <p>Taxes and fees</p>
                                        {/* <p>{flight?.price_dropdown?.fees}</p> */}
                                        {/* <p>{currency}  {convertPrice(flight?.price_dropdown?.fees, currency)}</p> */}
                                    </div>
                                    <div className="pass_de_cont">
                                        <ul>
                                            <li>
                                                <p>Service fee</p>
                                                <p>$ 0.00</p>
                                            </li>
                                            <li>
                                                <p>1 room x {totalDays} night</p>
                                                <p> ${totalPrice}.00</p>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* <div className="pass_de_cont">
                                            <p>Additional services</p>
                                            <p>0.00 </p>
                                        </div>
                                        <div className="pass_de_cont">
                                            <ul>
                                                <li>
                                                    <p>Additional services</p>
                                                    <p>0.00 </p>
                                                </li>
    
    
                                            </ul>
                                        </div> */}

                                    <div className="pass_de_cont grand_totat">
                                        <p> Total</p>

                                        <p>${totalPrice} </p>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </form>

            </Layout>
        </>
    );
};

export default HotelBooking;