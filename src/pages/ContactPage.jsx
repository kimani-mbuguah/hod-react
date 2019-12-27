import React, { Component } from "react";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Responsive />
        <div className="page-top">
          <div
            className="parallax"
            style={{ background: "url(images/parallax1.jpg)" }}
          ></div>

          <div className="container">
            <h1>
              CONTACT <span>US</span>
            </h1>

            <ul>
              <li>
                <a href="/" title="">
                  Home
                </a>
              </li>

              <li>
                <a href="/gallery" title="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section>
          <div className="block">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="map">
                    <iframe src="https://www.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=uk&amp;aq=&amp;sll=18.312811,-4.306641&amp;sspn=46.292419,86.572266&amp;ie=UTF8&amp;hq=&amp;hnear=United+Kingdom&amp;ll=52.352119,-2.647705&amp;spn=0.685471,1.352692&amp;t=p&amp;z=10&amp;output=embed"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="block remove-gap">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title2">
                    <span>Pellent Esque Tellus</span>
                    <h2>
                      LET'S <span>GET IN TOUCH</span>
                    </h2>
                  </div>

                  <div className="row">
                    <div className="col-md-6 column">
                      <h4>CONTACT INFORMATION</h4>
                      <div className="space"></div>
                      <p>
                        There are many ways for you to connect with us by
                        contacting our ministry. Reach out to us by phone, email
                        or through social media and let us know how we can help.
                      </p>
                      <div className="space"></div>
                      <p>
                        To contact The House of Destiny Church by email, fill
                        out the form below with your question or comment and
                        submit. Your email will be forwarded to the appropriate
                        department for a response. Thank you for contacting us!
                      </p>
                      <div className="space"></div>
                      <ul className="social-media">
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 column">
                      <h4>FILL IN THE FORM BELOW</h4>
                      <div className="space"></div>
                      <div id="message"></div>
                      <form
                        className="theme-form"
                        method="post"
                        action="contact.php"
                        name="contactform"
                        id="contactform"
                      >
                        <input
                          name="name"
                          className="half-field form-control"
                          type="text"
                          id="name"
                          placeholder="Name"
                        />
                        <input
                          name="email"
                          className="half-field form-control"
                          type="text"
                          id="email"
                          placeholder="Email"
                        />
                        <textarea
                          name="comments"
                          className="form-control"
                          id="comments"
                          placeholder="Description"
                        ></textarea>
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LelmzAUAAAAAHBE2SJeRMfnzYVxH9RMGQstUij2"
                        ></div>
                        <input
                          className="submit"
                          type="submit"
                          id="submit"
                          value="SUBMIT"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="block remove-gap">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="contact-info">
                    <div className="col-md-3">
                      <div className="info-block">
                        <i className="fa fa-home"></i>
                        <p>310 South Jurack Avenue</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="info-block">
                        <i className="fa fa-info"></i>
                        <p>www.themes.webinane.com</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="info-block">
                        <i className="fa fa-envelope-o"></i>
                        <p>youremail@yourdomain.com</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="info-block">
                        <i className="fa fa-mobile"></i>
                        <p>(000) +123 123 1235</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FooterBottom />
      </div>
    );
  }
}

export default ContactPage;
