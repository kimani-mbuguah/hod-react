import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { sendEmail } from "../actions/emailActions";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      comments: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (
      this.state.name === "" ||
      this.state.comments === "" ||
      this.state.email === ""
    ) {
      toast.error("Pleas fill all fields !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      const emailData = {
        email: this.state.email,
        name: this.state.name,
        comments: this.state.comments,
      };

      this.props.sendEmail(emailData).then((success) => {
        this.setState({
          name: "",
          email: "",
          comments: "",
        });

        toast.success("Message Sent !", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    }
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <Header />
        <Responsive />
        <div className="page-top">
          <div
            className="parallax"
            style={{ background: "url(images/three.jpg)" }}
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
                    <iframe
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=the%20house%20of%20destiny&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
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
                      
                    </div>
                    <div className="col-md-6 column">
                      <h4>FILL IN THE FORM BELOW</h4>
                      <div className="space"></div>
                      <div id="message"></div>
                      <form onSubmit={this.onSubmit} className="theme-form">
                        <input
                          name="name"
                          className="half-field form-control"
                          type="text"
                          id="name"
                          value={this.state.name}
                          onChange={this.onChange}
                          placeholder="Name"
                        />

                        <input
                          name="email"
                          className="half-field form-control"
                          type="text"
                          value={this.state.email}
                          onChange={this.onChange}
                          id="email"
                          placeholder="Email"
                        />

                        <textarea
                          name="comments"
                          className="form-control"
                          id="comments"
                          value={this.state.comments}
                          onChange={this.onChange}
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
                        <p>Kerugoya-Kutus Road</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="info-block">
                        <i className="fa fa-info"></i>
                        <p>https://houseofdestiny.or.ke</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="info-block">
                        <i className="fa fa-envelope-o"></i>
                        <p>hello@houseofdestiny.or.ke</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="info-block">
                        <i className="fa fa-mobile"></i>
                        <p>+254 705 000 050</p>
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

ContactPage.propTypes = {
  sendEmail: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const enhance = compose(connect(mapStateToProps, { sendEmail }));

export default enhance(withRouter(ContactPage));
