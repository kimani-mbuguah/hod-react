import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import IframeResizer from "iframe-resizer-react";

import { sendEmail } from "../actions/emailActions";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class LivePage extends Component {
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
                  <div className="title2">
                    <h2>
                      LIVE <span>SERVICE</span>
                    </h2>
                  </div>

                  <div className="row">
                    <div className="col-md-12 column">
                      <iframe
                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F709596639109960%2Fvideos%2F242776416777170%2F&show_text=0&width=560"
                        width="560"
                        height="600"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameborder="0"
                        allowTransparency="true"
                        allowFullScreen="true"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="block">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title2">
                    <h2>
                      OTHER <span>SERVICES</span>
                    </h2>
                  </div>
                  <div className="remove-ext">
                    <div className="row">
                      <div className="mas-gallery">
                        <div className="col-md-6">
                          <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F709596639109960%2Fvideos%2F288275795501724%2F&show_text=0&width=560"
                            width="560"
                            height="315"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameborder="0"
                            allowTransparency="true"
                            allowFullScreen="true"
                          ></iframe>
                        </div>

                        <div className="col-md-6">
                          <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F709596639109960%2Fvideos%2F1083176355383708%2F&show_text=0&width=560"
                            width="560"
                            height="315"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameborder="0"
                            allowTransparency="true"
                            allowFullScreen="true"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <div className="row">
                      <div className="mas-gallery">
                        <div className="col-md-6">
                          <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F709596639109960%2Fvideos%2F652650042191293%2F&show_text=0&width=560"
                            width="560"
                            height="315"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameborder="0"
                            allowTransparency="true"
                            allowFullScreen="true"
                          ></iframe>
                        </div>

                        <div className="col-md-6">
                          <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F709596639109960%2Fvideos%2F1147202312280435%2F&show_text=0&width=560"
                            width="560"
                            height="315"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameborder="0"
                            allowTransparency="true"
                            allowFullScreen="true"
                          ></iframe>
                        </div>
                      </div>
                    </div>

                    <br></br>

                    <div className="row">
                      <div className="mas-gallery">
                        <div className="col-md-6">
                          <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F709596639109960%2Fvideos%2F576818739588338%2F&show_text=0&width=560"
                            width="560"
                            height="315"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameborder="0"
                            allowTransparency="true"
                            allowFullScreen="true"
                          ></iframe>
                        </div>

                        <div className="col-md-6">
                          <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F709596639109960%2Fvideos%2F291619785155471%2F&show_text=0&width=560"
                            width="560"
                            height="315"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameborder="0"
                            allowTransparency="true"
                            allowFullScreen="true"
                          ></iframe>
                        </div>
                      </div>
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
                        <p>http://www.houseofdestiny.or.ke</p>
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

LivePage.propTypes = {
  sendEmail: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const enhance = compose(connect(mapStateToProps, { sendEmail }));

export default enhance(withRouter(LivePage));
