import React from 'react'
import Layout from '@/components/Layout'
export default function contact() {
    return (
        <>
           <Layout title="Cheap Tickets: Flights, Hotels and Packages – Traveloways" description="Welcome to Traveloways">
        <section className="common_banner_custt">
          <div className="container">
            <div className="row">

            </div>
          </div>
        </section>
        <div className="deals_s relative pt-5 mb-5">
          <section className="container-fluid container-xl">
            <div className="row justify-content-center common_padding align-items-center">
              <div className="col-12 col-md-7 col-xl-6 pe-0 pe-md-4">
                <div className="get_contt">
                  <p className="get_in">Get in Touch with Us</p>
                  <h1 className="banner_1 send_mess">Send us a Message</h1>
                  <div className="form_holdd_contact mt-2">
                    <div className="row">
                      <div className="col-6">
                        <div className="form_control_c">
                          <label for="">First Name</label>
                          <input type="text" placeholder="Enter Your Name" className="form-control form_contact" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form_control_c">
                          <label for="">Last Name</label>
                          <input type="text" placeholder="Enter Your Name" className="form-control form_contact" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form_control_c">
                          <label for="">Your Email</label>
                          <input type="text" placeholder="Enter Your Email" className="form-control form_contact" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form_control_c">
                          <label for="">Your Phone Number</label>
                          <input type="text" placeholder="Enter Your Phone Number"
                            className="form-control form_contact" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form_control_c">
                          <label for="">Your Message</label>
                          <textarea rows="3" className="form-control form_contact"
                            placeholder="Message" ></textarea>
                        </div>
                      </div>
                      <div className="col-12 text-end mt-2">
                        <div className="form_control_c">
                          <button className="sub_btn_contact">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 col-xl-4 ps-0 ps-md-4 mt-4 mt-xl-0">
                <div className="form_cont white">
                  <h4>Hi! We are always here to Help You</h4>
                  <div className="mt-2">
                    <div className="form_help">
                      <div className="form_help_cont flex_props gap-2">
                        <div className="form_ic">
                          <img src="/imgs/images/mail-i.png" />
                        </div>
                        <div>
                          <p className="form_ti">Email Address</p>
                          <p className="font_14">contact@traveloways.com</p>
                        </div>
                      </div>
                      {/* <div className="form_help_cont flex_props gap-2">
                        <div className="form_ic">
                          <img src="/imgs/images/call-i.png" />
                        </div>
                        <div>
                          <p className="form_ti">Phone Number</p>
                          <p className="font_14">+1 888 212 0631</p>
                        </div>
                      </div> */}
                      <div className="form_help_cont flex_props gap-2">
                        <div className="form_ic">
                          <img src="/imgs/images/location-pin-i.png" />
                        </div>
                        <div>
                          <p className="form_ti">Address</p>
                          <p className="font_14">311 SAINT THOMAS DR NEWPORT NEWS, VA 23606</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* <div className="form_social">
                      <h5 className="my-3">Follow Us at</h5>
                      <ul className="flex_props flex-wrap">
                        <li><a href="#">
                          <img src="/imgs/imgs2/facebook-logo.png" />
                        </a> Facebook</li>
                        <li><a href="#">
                          <img src="/imgs/imgs2/twitter-logo.png" />
                        </a> Twitter</li>
                        <li><a href="#">
                          <img src="/imgs/imgs2/instagram-logo.png" />
                        </a>Instagram</li>
                        <li><a href="#">
                          <img src="/imgs/imgs2/youtube-logo.png" />
                        </a>YouTube</li>
                        <li><a href="#">
                          <img src="/imgs/imgs2/pinterest-logo.png" />
                        </a>Pinterest</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
        </>
    )
}
