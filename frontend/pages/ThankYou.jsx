import React from 'react';
import { useRouter } from 'next/router';

const ThankYou = () => {
    const router = useRouter();
    const { billData } = router.query;
  
    const parsedBillData = billData ? JSON.parse(billData) : null;
  
    return (
        <>
            <section className='thankyou_bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-11 col-lg-8 thank_bgg m-auto">
                            <div className="text-center">
                                <div className="thankyou_img">
                                    <img src="/imgs/thankyou-img.png" alt="Thank You" />
                                </div>
                                <h4 className='mt-3 control_h44'>Thank you for booking your upcoming flight with Traveloways.</h4>
                                <p className="mt-2 font_12">We are extremely excited to have you onboard and appreciate your trust in us for all your travel needs.</p>
                                <p className="book_title_thank mt-4">Your Booking Id Is: <b>{parsedBillData?.bookingId}</b></p>
                                <a href="/" className='backhome'>
                                    <img src="/imgs/imgs2/arrow-ri.png" alt="Arrow" /> Go Back to Home Page <i className="fa-solid fa-angles-left"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ThankYou;