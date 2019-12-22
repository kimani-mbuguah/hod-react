import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="block blackish">
            <div
              className="parallax"
              style={{ background: "url(images/parallax5.jpg)" }}
            ></div>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="widget">
                    <div className="about">
                      <img src="images/logo.png" alt="" />

                      <span>We Give Best Services</span>

                      <p>
                        Homemade cream cheese mints These are amazing! Made them
                        last Christmas!!- must try!
                      </p>

                      <div className="contact">
                        <ul>
                          <li>
                            <span>
                              <i className="fa fa-phone"></i>Phone :
                            </span>{" "}
                            ( +185 557 89 89 ) ( +185 557 89 89 )
                          </li>

                          <li>
                            <span>
                              <i className="fa fa-envelope"></i>Email:
                            </span>{" "}
                            Contactchurch@simple.com
                          </li>

                          <li>
                            <span>
                              <i className="fa fa-home"></i>Address:
                            </span>{" "}
                            Home Fronts 27# street 7 Road Green
                          </li>
                        </ul>
                      </div>

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
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="widget">
                    <div className="widget-title">
                      <h4>Quick Message</h4>
                    </div>

                    <div className="quick-message">
                      <div id="message"></div>

                      <form
                        method="post"
                        action="https://html.webinane.com/deeds/contact.php"
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
        </footer>
      </div>
    );
  }
}

export default Footer;
