import React from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Pop = ({ bookingPop, setBookingPop, flight, onClose }) => {

    const location = useLocation();

    const currentLocation = useLocation();

    // Determine if the button should be visible or hidden
    const isListingPage = currentLocation.pathname.includes('search-results');
    const isBookingPage = currentLocation.pathname.includes('flight-details');

    const [searchParams] = useSearchParams();
    const tripType = searchParams.get("trpType");



    const paramNames = ["adults", "infants", "children", "source", "destination", "date", "classes"];
    const params = new URLSearchParams(location?.search);


    const { adults: adults, infants: infants, children: children, source: source, destination: destination, date: date } = Object.fromEntries(
        paramNames.map((key) => [key, params.get(key)])
    );


    const getTimeAndDate = (dateTimeString) => {
        const date = new Date(dateTimeString);
        return {
            time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            date: date.toLocaleDateString(),
        };
    };

    function formatDuration(duration) {
        const regex = /PT(?:(\d+)H)?(?:(\d+)M)?/;
        const match = duration.match(regex);
        const hours = match[1] ? `${match[1]} hour${match[1] > 1 ? 's' : ''}` : '';
        const minutes = match[2] ? `${match[2]} minute${match[2] > 1 ? 's' : ''}` : '';

        return [hours, minutes].filter(Boolean).join(' ');
    }



    return (
        <>
            <div className={bookingPop ? "pop_up_one pop_up_one_ac" : "pop_up_one"}>
                <section className="pop_modal_sm">
                    <div className="pop_main relative">

                        <div className="pop_head flex_props gap-2">
                            <button onClick={onClose}><img src = "/imgs/imgs2/cancel.png" /></button>
                            <p>Flight details</p>

                        </div>
                        <div className="pop_body">


                            {/* one way start */}

                            <div className="pop_headd">
                                Depart : {source}| {flight?.cityFrom}
                            </div>


                            {flight?.outboundFlights && (

                                <>
                                    {(() => {
                                        const routeArray = Object.values(flight.outboundFlights);

                                        const chunkArray = (array, chunkSize) => {
                                            if (chunkSize <= 1) {
                                                throw new Error("Chunk size must be greater than 1");
                                            }

                                            const chunks = [];
                                            let i = 0;

                                            while (i < array.length) {
                                                let chunk = array.slice(i, i + chunkSize);

                                                if (i + chunkSize > array.length) {
                                                    const lastElement = chunk[chunk.length - 1];
                                                    while (chunk.length < chunkSize) {
                                                        chunk.push(lastElement);
                                                    }
                                                }

                                                chunks.push(chunk);

                                                i += chunkSize - 1;
                                            }

                                            return chunks;
                                        };

                                        const chunkRoundData = chunkArray(routeArray, 2);

                                        return (
                                            <>
                                                {chunkRoundData.map((routeData, index) => (
                                                    <>

                                                        <div key={index} >
                                                            {routeData.map((route, innerIndex) => {
                                                                // Track the previously displayed layover duration
                                                                const showLayover =
                                                                    innerIndex > 0 &&
                                                                    route?.duration_layover !== routeData[innerIndex - 1]?.duration_layover;

                                                                return (
                                                                    <>

                                                                        <div className="pop_main_bo flex_props">

                                                                            {index === chunkRoundData.length - 1 && innerIndex === routeData.length - 1

                                                                                ? <>
                                                                                    <div className='hei_pop pop_time_all'>

                                                                                        {/* {route && (() => {
                                                                                            const departure = getTimeAndDate(route?.local_arrival);
                                                                                            return (
                                                                                                <div className="">
                                                                                                    <p className="num_de">
                                                                                                        {departure.time}
                                                                                                    </p>
                                                                                                    <p className="num_de"> {departure.date}</p>
                                                                                                </div>
                                                                                            );
                                                                                        })()} */}

                                                                                    </div>

                                                                                </>
                                                                                // Check if it's the last index
                                                                                : <>

                                                                                    <div className='hei_pop pop_time_all'>

                                                                                        {innerIndex == 0 && route?.flight_no && (
                                                                                            <>

                                                                                                {route && (() => {
                                                                                                    const departure = getTimeAndDate(route?.local_departure);
                                                                                                    return (

                                                                                                        <div>
                                                                                                            <p className="num_de">{departure.time}</p>
                                                                                                            <p className='num_de'>{departure.date}</p>
                                                                                                        </div>

                                                                                                    );
                                                                                                })()}


                                                                                            </>
                                                                                        )
                                                                                        }

                                                                                        {innerIndex == 0 && route?.flight_no && (
                                                                                            <>

                                                                                                {route && (() => {
                                                                                                    const arrival = getTimeAndDate(route?.local_arrival);
                                                                                                    return (

                                                                                                        <div>
                                                                                                            <p className="num_de">{arrival.time}</p>
                                                                                                            <p className='num_de'>{arrival.date}</p>
                                                                                                        </div>

                                                                                                    );
                                                                                                })()}


                                                                                            </>
                                                                                        )
                                                                                        }







                                                                                    </div>

                                                                                </>}


                                                                            {innerIndex >= 0 && innerIndex < 1 && (

                                                                                <div >

                                                                                    <span className="pop_stopss"></span>

                                                                                </div>

                                                                            )}






                                                                            <div className="hei_pop pop_dess">

                                                                                {index === chunkRoundData.length - 1 && innerIndex === routeData.length - 1

                                                                                    ? <>
                                                                                        <div className='hei_pop pop_time_all'>

                                                                                            {/* {route && (() => {
                                                                                                const departure = getTimeAndDate(route?.local_arrival);
                                                                                                return (
                                                                                                    <div className="">
                                                                                                        <p className="num_de">
                                                                                                            {route?.cityTo}({route?.cityCodeTo})
                                                                                                        </p>

                                                                                                    </div>
                                                                                                );
                                                                                            })()} */}

                                                                                        </div>

                                                                                    </>
                                                                                    // Check if it's the last index
                                                                                    : <>

                                                                                        <div className='hei_pop pop_time_all'>

                                                                                            {innerIndex == 0 && route?.flight_no && (
                                                                                                <>

                                                                                                    {route && (() => {
                                                                                                        const departure = getTimeAndDate(route?.local_departure);
                                                                                                        return (

                                                                                                            <div>
                                                                                                                <p className="num_de">
                                                                                                                    {route?.cityFrom}({route?.cityCodeFrom})
                                                                                                                </p>
                                                                                                                <p className="num_de">
                                                                                                                    Flight no :  {route?.flight_no}
                                                                                                                </p>

                                                                                                                <p className="num_de">
                                                                                                                    Time:  {Math.floor(route?.durationInMinutes / 60)}h:{route?.durationInMinutes % 60}m
                                                                                                                </p>
                                                                                                            </div>

                                                                                                        );
                                                                                                    })()}


                                                                                                </>
                                                                                            )
                                                                                            }

                                                                                            {innerIndex == 0 && route?.flight_no && (
                                                                                                <>

                                                                                                    {route && (() => {
                                                                                                        const arrival = getTimeAndDate(route?.local_arrival);
                                                                                                        return (

                                                                                                            <div>
                                                                                                                <p className="num_de">
                                                                                                                    {route?.cityTo}({route?.cityCodeTo})
                                                                                                                </p>
                                                                                                            </div>

                                                                                                        );
                                                                                                    })()}


                                                                                                </>
                                                                                            )
                                                                                            }







                                                                                        </div>

                                                                                    </>}


                                                                            </div>


                                                                            <div className="hei_pop pop_dess">
                                                                                {innerIndex >= 0 && innerIndex < 1 && (

                                                                                    <div className='pop_dess1'>
                                                                                        <p className="num_de">{route?.airlineName}</p>
                                                                                        <p className="num_de"> {route?.airline} - {route?.flight_no}</p>
                                                                                        <p className='num_de num_de1 my-1'>Operated by {route?.airline}</p>
                                                                                        <p className="num_de class_c">
                                                                                            Class - {(() => {
                                                                                                switch (route?.fare_category) {
                                                                                                    case 'M':
                                                                                                        return 'Economy';
                                                                                                    case 'W':
                                                                                                        return 'Premium Economy';
                                                                                                    case 'C':
                                                                                                        return 'Business';
                                                                                                    case 'F':
                                                                                                        return 'First';
                                                                                                    default:
                                                                                                        return 'Unknown Class';
                                                                                                }
                                                                                            })()}
                                                                                        </p>

                                                                                    </div>

                                                                                )}


                                                                            </div>

                                                                        </div>

                                                                        <div
                                                                            className={`lay_over_c relative lay_over_c_pop ${!showLayover ? "hidden" : ""}`}
                                                                            key={`${index}-${innerIndex}`}
                                                                        >
                                                                            {showLayover && (
                                                                                <>
                                                                                    <span>Layover: </span>
                                                                                    {(() => {
                                                                                        const previousArrival =
                                                                                            innerIndex > 0 && routeData[innerIndex - 1]?.local_arrival
                                                                                                ? getTimeAndDate(routeData[innerIndex - 1].local_arrival).time
                                                                                                : null;

                                                                                        const currentDeparture =
                                                                                            route?.local_departure
                                                                                                ? getTimeAndDate(route.local_departure).time
                                                                                                : null;

                                                                                        if (previousArrival && currentDeparture) {
                                                                                            // Parse the time strings to Date objects
                                                                                            const previousArrivalDate = new Date(routeData[innerIndex - 1].local_arrival);
                                                                                            const currentDepartureDate = new Date(route.local_departure);

                                                                                            // Calculate the difference in milliseconds
                                                                                            const differenceInMillis = previousArrivalDate - currentDepartureDate;

                                                                                            // Convert milliseconds to hours and minutes
                                                                                            const totalMinutes = Math.abs(Math.floor(differenceInMillis / (1000 * 60)));
                                                                                            const hours = Math.floor(totalMinutes / 60);
                                                                                            const minutes = totalMinutes % 60;

                                                                                            return (
                                                                                                <>
                                                                                                    <span>{previousArrival} to {currentDeparture}</span>
                                                                                                    <span> Layover : {hours}h {minutes}m</span>
                                                                                                </>
                                                                                            );
                                                                                        }
                                                                                        return <span>No layover data available</span>;
                                                                                    })()}
                                                                                </>
                                                                            )}
                                                                        </div>






                                                                    </>
                                                                );
                                                            })}
                                                        </div>



                                                    </>
                                                ))}

                                            </>
                                        );


                                    })()}
                                </>

                            )}

                            {/* one way end */}



                            {/* roundtrip start */}



                            {tripType == "roundtrip" && (

                                <div className="pop_headd">
                                    Return :  {destination} |  {flight?.cityTo}
                                </div>


                            )

                            }


                            {flight?.inboundFlights && (

                                <>
                                    {(() => {
                                        const routeArray = Object.values(flight.inboundFlights);

                                        const chunkArray = (array, chunkSize) => {
                                            if (chunkSize <= 1) {
                                                throw new Error("Chunk size must be greater than 1");
                                            }

                                            const chunks = [];
                                            let i = 0;

                                            while (i < array.length) {
                                                let chunk = array.slice(i, i + chunkSize);

                                                if (i + chunkSize > array.length) {
                                                    const lastElement = chunk[chunk.length - 1];
                                                    while (chunk.length < chunkSize) {
                                                        chunk.push(lastElement);
                                                    }
                                                }

                                                chunks.push(chunk);

                                                i += chunkSize - 1;
                                            }

                                            return chunks;
                                        };

                                        const chunkRoundData = chunkArray(routeArray, 2);

                                        return (
                                            <>
                                                {chunkRoundData.map((routeData, index) => (
                                                    <>

                                                        <div key={index} >
                                                            {routeData.map((route, innerIndex) => {
                                                                // Track the previously displayed layover duration
                                                                const showLayover =
                                                                    innerIndex > 0 &&
                                                                    route?.duration_layover !== routeData[innerIndex - 1]?.duration_layover;

                                                                return (
                                                                    <>

                                                                        <div className="pop_main_bo flex_props">

                                                                            {index === chunkRoundData.length - 1 && innerIndex === routeData.length - 1

                                                                                ? <>
                                                                                    <div className='hei_pop pop_time_all'>

                                                                                        {/* {route && (() => {
                                                            const departure = getTimeAndDate(route?.local_arrival);
                                                            return (
                                                                <div className="">
                                                                    <p className="num_de">
                                                                        {departure.time}
                                                                    </p>
                                                                    <p className="num_de"> {departure.date}</p>
                                                                </div>
                                                            );
                                                        })()} */}

                                                                                    </div>

                                                                                </>
                                                                                // Check if it's the last index
                                                                                : <>

                                                                                    <div className='hei_pop pop_time_all'>

                                                                                        {innerIndex == 0 && route?.flight_no && (
                                                                                            <>

                                                                                                {route && (() => {
                                                                                                    const departure = getTimeAndDate(route?.local_departure);
                                                                                                    return (

                                                                                                        <div>
                                                                                                            <p className="num_de">{departure.time}</p>
                                                                                                            <p className='num_de'>{departure.date}</p>
                                                                                                        </div>

                                                                                                    );
                                                                                                })()}


                                                                                            </>
                                                                                        )
                                                                                        }

                                                                                        {innerIndex == 0 && route?.flight_no && (
                                                                                            <>

                                                                                                {route && (() => {
                                                                                                    const arrival = getTimeAndDate(route?.local_arrival);
                                                                                                    return (

                                                                                                        <div>
                                                                                                            <p className="num_de">{arrival.time}</p>
                                                                                                            <p className='num_de'>{arrival.date}</p>
                                                                                                        </div>

                                                                                                    );
                                                                                                })()}


                                                                                            </>
                                                                                        )
                                                                                        }







                                                                                    </div>

                                                                                </>}


                                                                            {innerIndex >= 0 && innerIndex < 1 && (

                                                                                <div >

                                                                                    <span className="pop_stopss"></span>

                                                                                </div>

                                                                            )}






                                                                            <div className="hei_pop pop_dess">

                                                                                {index === chunkRoundData.length - 1 && innerIndex === routeData.length - 1

                                                                                    ? <>
                                                                                        <div className='hei_pop pop_time_all'>

                                                                                            {/* {route && (() => {
                                                                const departure = getTimeAndDate(route?.local_arrival);
                                                                return (
                                                                    <div className="">
                                                                        <p className="num_de">
                                                                            {route?.cityTo}({route?.cityCodeTo})
                                                                        </p>

                                                                    </div>
                                                                );
                                                            })()} */}

                                                                                        </div>

                                                                                    </>
                                                                                    // Check if it's the last index
                                                                                    : <>

                                                                                        <div className='hei_pop pop_time_all'>

                                                                                            {innerIndex == 0 && route?.flight_no && (
                                                                                                <>

                                                                                                    {route && (() => {
                                                                                                        const departure = getTimeAndDate(route?.local_departure);
                                                                                                        return (

                                                                                                            <div>
                                                                                                                <p className="num_de">
                                                                                                                    {route?.cityFrom}({route?.cityCodeFrom})
                                                                                                                </p>
                                                                                                                <p className="num_de">
                                                                                                                    Flight no :  {route?.flight_no}
                                                                                                                </p>

                                                                                                                <p className="num_de">
                                                                                                                    Time:  {Math.floor(route?.durationInMinutes / 60)}h:{route?.durationInMinutes % 60}m
                                                                                                                </p>
                                                                                                            </div>

                                                                                                        );
                                                                                                    })()}


                                                                                                </>
                                                                                            )
                                                                                            }

                                                                                            {innerIndex == 0 && route?.flight_no && (
                                                                                                <>

                                                                                                    {route && (() => {
                                                                                                        const arrival = getTimeAndDate(route?.local_arrival);
                                                                                                        return (

                                                                                                            <div>
                                                                                                                <p className="num_de">
                                                                                                                    {route?.cityTo}({route?.cityCodeTo})
                                                                                                                </p>
                                                                                                            </div>

                                                                                                        );
                                                                                                    })()}


                                                                                                </>
                                                                                            )
                                                                                            }







                                                                                        </div>

                                                                                    </>}


                                                                            </div>


                                                                            <div className="hei_pop pop_dess">
                                                                                {innerIndex >= 0 && innerIndex < 1 && (

                                                                                    <div className='pop_dess1'>
                                                                                        <p className="num_de">{route?.airlineName}</p>
                                                                                        <p className="num_de"> {route?.airline} - {route?.flight_no}</p>
                                                                                        <p className='num_de num_de1 my-1'>Operated by {route?.airline}</p>
                                                                                        <p className="num_de class_c">
                                                                                            Class - {(() => {
                                                                                                switch (route?.fare_category) {
                                                                                                    case 'M':
                                                                                                        return 'Economy';
                                                                                                    case 'W':
                                                                                                        return 'Premium Economy';
                                                                                                    case 'C':
                                                                                                        return 'Business';
                                                                                                    case 'F':
                                                                                                        return 'First';
                                                                                                    default:
                                                                                                        return 'Unknown Class';
                                                                                                }
                                                                                            })()}
                                                                                        </p>

                                                                                    </div>

                                                                                )}


                                                                            </div>

                                                                        </div>

                                                                        <div
                                                                            className={`lay_over_c relative lay_over_c_pop ${!showLayover ? "hidden" : ""}`}
                                                                            key={`${index}-${innerIndex}`}
                                                                        >
                                                                            {showLayover && (
                                                                                <>
                                                                                    <span>Layover: </span>
                                                                                    {(() => {
                                                                                        const previousArrival =
                                                                                            innerIndex > 0 && routeData[innerIndex - 1]?.local_arrival
                                                                                                ? getTimeAndDate(routeData[innerIndex - 1].local_arrival).time
                                                                                                : null;

                                                                                        const currentDeparture =
                                                                                            route?.local_departure
                                                                                                ? getTimeAndDate(route.local_departure).time
                                                                                                : null;

                                                                                        if (previousArrival && currentDeparture) {
                                                                                            // Parse the time strings to Date objects
                                                                                            const previousArrivalDate = new Date(routeData[innerIndex - 1].local_arrival);
                                                                                            const currentDepartureDate = new Date(route.local_departure);

                                                                                            // Calculate the difference in milliseconds
                                                                                            const differenceInMillis = previousArrivalDate - currentDepartureDate;

                                                                                            // Convert milliseconds to hours and minutes
                                                                                            const totalMinutes = Math.abs(Math.floor(differenceInMillis / (1000 * 60)));
                                                                                            const hours = Math.floor(totalMinutes / 60);
                                                                                            const minutes = totalMinutes % 60;

                                                                                            return (
                                                                                                <>
                                                                                                    <span>{previousArrival} to {currentDeparture}</span>
                                                                                                    <span> Layover : {hours}h {minutes}m</span>
                                                                                                </>
                                                                                            );
                                                                                        }
                                                                                        return <span>No layover data available</span>;
                                                                                    })()}
                                                                                </>
                                                                            )}
                                                                        </div>






                                                                    </>
                                                                );
                                                            })}
                                                        </div>



                                                    </>
                                                ))}

                                            </>
                                        );


                                    })()}
                                </>

                            )}


                            {/* roundtrip end */}


                        </div >
                        {/* 
                        <div className="select_all_pop flex_props justify-content-between">
                            <div className="select_all_pop_i">
                                <p className='select_pprr'>{flight?.price_dropdown?.base_fare}</p>
                                <p className='font_14'> Price per 1 passenger </p>
                            </div>
                            <Link className='select_ff' to={`/flight-details/${flight?.id}`} state={{ flight, location }} >Select Fare <i className="fa-solid fa-circle-arrow-right"></i></Link>
                        </div> */}



                        {isListingPage && (

                            <div className="select_all_pop flex_props justify-content-between">
                                <div className="select_all_pop_i">
                                    <p className="select_pprr">{flight?.price_dropdown?.base_fare}</p>
                                    <p className="font_14">Price per 1 passenger</p>
                                </div>
                                <Link
                                    className="select_ff"
                                    to={`/flight-details/${flight?.id}`}
                                    state={{ flight, location }}
                                >
                                    Select Fare <i className="fa-solid fa-circle-arrow-right"></i>
                                </Link>
                            </div>

                        )}
                        {isBookingPage && (

                            <div className="select_all_pop flex_props justify-content-between">
                                <div className="select_all_pop_i ">
                                    <p className="select_pprr">{flight?.price_dropdown?.base_fare}</p>
                                    <p className="font_14">Price per 1 passenger</p>
                                </div>
                                <button className="select_ff" onClick={onClose}>

                                    Continue <i className="fa-solid fa-circle-arrow-right"></i>
                                </button>
                            </div>

                            // <button className="select_ff" style={{ display: 'none' }}>
                            //     {/* Button Hidden */}
                            // </button>
                        )}


                    </div>
                </section >
            </div >
        </>
    )
}