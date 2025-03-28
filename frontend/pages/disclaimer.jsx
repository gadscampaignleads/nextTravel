import React from 'react'
import Layout from '@/components/Layout'
const disclaimer = () => {
  return (
    <Layout title="Cheap Tickets: Flights, Hotels and Packages – Traveloways" description="Welcome to Traveloways">
      <section className="common_banner_custt">
        <div className="container">
          <div className="row">

          </div>
        </div>
      </section>
      <section className="container-xl container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <p className="title_t">Disclaimer</p>
          </div>
        </div>
      </section>
      <section className="container-fluid container-xl mt-4 mb-5">
        <div className="row common_padding">
          <div className="col-12 spacing_m_p">
            <p>Traveloways is dedicated to provide an ideal and user-friendly platform for travel planning and bookings. However, the information, services, content, logo and trademarks on our website are intended for general informational purposes only. While we make every effort to ensure the accuracy and reliability of the information provided, we can not guarantee that all details are error-free, complete, or up-to-date at all times.</p>
            <p>We act as an intermediary between you and third-party service providers, such as airlines, hotels, and activity operators. As such, we are not responsible for any issues, damages, or losses that may arise from the services provided by these third parties. All travel arrangements, including flights, hotels, and activities, are subject to the terms and conditions set by the respective providers.
            </p>
            <p>Hence, it is your responsibility to cross check all the relevant details, including travel documents, visa requirements, and health advisories, before finalizing your booking. Under no circumstances shall we be held liable for any direct, indirect, or consequential damages resulting from the use of our website or services. By using Traveloways, you acknowledge and agree to the terms outlined in this disclaimer.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default disclaimer