import React from 'react'
import Layout from '@/components/Layout'
export default function refundpolicy() {
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
                        <p className="title_t">Refund Policy</p>
                    </div>
                </div>
            </section>
            <section className="container-fluid container-xl mt-4 mb-5">
                <div className="row common_padding">
                    <div className="col-12 spacing_m_p">
                        <p>At Traveloways, we strive to make your travel experience as convenient as possible. However, we understand that plans can change, and you may need to cancel or modify your bookings. Hence, our refund policy is designed to be fair and transparent, ensuring you know what to expect.</p>
                        <h4>Refund Eligibility</h4>
                        <ul>
                            <li>Please note refunds are subject to the terms and conditions of the service providers such as airlines, hotels, activity operators etc.</li>
                            <li>Some bookings may be non-refundable or have specific cancellation fees, as stated during the booking process.
                            </li>
                        </ul>
                        <h4>Cancellation Requests</h4>
                        <ul>
                            <li>To request a refund, please contact our customer service team or cancel through your booking agent, if applicable.</li>
                            <li>Refunds will only be processed after we receive confirmation from the service provider.</li>
                        </ul>
                        <h4>Processing Time</h4>
                        <p>Refunds, if approved, may take up to 7  to 10 business days to reflect in your account, depending on your payment method and bank processing times.
                        </p>
                        <h4>Fee and Exceptions</h4>
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Cancellation and Refunds </th>
                                        <th colspan="2">Ticket Cost Refund</th>
                                        <th colspan="2">Service Fees Refund</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>Domestic</td>
                                        <td>International</td>
                                        <td>Domestic</td>
                                        <td>International</td>
                                    </tr>
                                    <tr>
                                        <td>Within 24 Hours from the time the reservation was booked – US Origin Bookings</td>
                                        <td>  100%
                                        </td>
                                        <td>  100%
                                        </td>
                                        <td>  100%
                                        </td>
                                        <td>  100%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Same day before Midnight – NON US Origin</td>
                                        <td>  100%
                                        </td>
                                        <td>  100%
                                        </td>
                                        <td>  100%
                                        </td>
                                        <td>  100%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>After 24 Hours from the time the reservation was booked (*You will not get a refund of  ticket cost but you might receive a future credit that can be utilised for any air travel)
                                        </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4>Partial Refunds</h4>
                        <p>You will get a partial refund based on the provider’s policy if only a partial part of your booking is canceled.</p>
                        <h4>Non-Refundable Services
                        </h4>
                        <p>Some services, such as discounted or promotional bookings, may be non-refundable. Please review the terms and conditions before confirming your booking. </p>
                        <h4>Contact Us</h4>
                        <p>For any questions or assistance regarding refunds, please reach out to our customer service team at contact@traveloways.com
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
