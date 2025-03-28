import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';

const Searching = () => {
  const router = useRouter();
  const {
    adults,
    infants,
    children,
    source,
    destination,
    date,
    rtnDate,
    trpType,
    classes,
  } = router.query;

  // Extracting codes and airports from source and destination
  const originCode = source?.split('-')[0];
  const originAirport = source?.substring(source.indexOf('-') + 1);
  const destCode = destination?.split('-')[0];
  const destAirport = destination?.substring(destination.indexOf('-') + 1);

  return (
    <>
      <section className="container-fluid container-xl">
        <div className="row common_padding">
          <div className="col-12 col-xl-8 text-center m-auto bg_search_cheap">
            <h4 className="search_tt">Searching Cheapest Flights for you...</h4>

            <div className="search_contt flex_prop justify-content-between">
              <div className="search_bb">
                <p className="search_code">{originCode}</p>
                <p className="search_airport">{originAirport}</p>
              </div>
              <span className="loader"></span>
              <div className="search_bb">
                <p className="search_code">{destCode}</p>
                <p className="search_airport">{destAirport}</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="dates_all">
                Departure: {moment(new Date(date)).format('MMM-DD-YYYY')}
                {trpType === 'roundtrip' && (
                  <>
                    , Return Date: {moment(new Date(rtnDate)).format('MMM-DD-YYYY')}
                  </>
                )}
                , {adults}: Adults, {infants}: Infants, {children}: Children
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Searching;
