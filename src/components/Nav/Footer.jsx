import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withRouter } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { sendEmail } from "../../actions/emailActions";

class Footer extends Component {
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
        <footer>
          <div className="block blackish">
            <div
              className="parallax"
              style={{ background: "url(images/one.jpg)" }}
            ></div>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="widget">
                    <div className="about">
                      <img src="images/logo.png" alt="" />

                      <span>The House Of Destiny Church</span>

                      <p>Connecting People To Their Destiny In Christ</p>

                      <div className="contact">
                        <ul>
                          <li>
                            <span>
                              <i className="fa fa-phone"></i>Phone :
                            </span>{" "}
                            ( +254 705 000 050 )
                          </li>

                          <li>
                            <span>
                              <i className="fa fa-envelope"></i>Email:
                            </span>{" "}
                            hello@houseofdestiny.or.ke
                          </li>

                          <li>
                            <span>
                              <i className="fa fa-home"></i>Address:
                            </span>{" "}
                            Kerugoya, Kenya
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

                      <form onSubmit={this.onSubmit} >
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
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {
  sendEmail: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const enhance = compose(connect(mapStateToProps, { sendEmail }));

export default enhance(withRouter(Footer));
