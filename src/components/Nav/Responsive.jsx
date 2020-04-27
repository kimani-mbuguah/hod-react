import React, { Component } from "react";

class Responsive extends Component {
  render() {
    return (
      <div>
        <div className="responsive-header">
          <div className="responsive-contact">
            <span>
              <p className="responsive-phone">
                <i className="fa fa-phone"></i> Call: +254-705-000-050
              </p>
              <p className="responsive-mail">
                <i className="fa fa-envelope"></i> hello@houseofdestiny.or.ke
              </p>
            </span>
            <a className="phone-btn active" href="#" title="">
              <i className="fa fa-phone"></i>
            </a>
            <a className="mail-btn" href="#" title="">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
          <div className="responsive-extras">
            <div className="responsive-social">
              <a href="#" title="">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" title="">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" title="">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" title="">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="responisve-bar">
            <div className="responsive-logo">
              <a href="#" title="">
                <img
                  src="/images/logo.png"
                  alt="The the house of destiny church logo"
                />
              </a>
            </div>
            <span className="responsive-btn">
              <i className="fa fa-list"></i>
            </span>
          </div>
        </div>
        <div className="responsive-menu">
          <ul>
            <li>
              <a href="/" title="">
                Home
              </a>
            </li>
            <li>
              <a href="/ministries" title="">
                Our Ministries
              </a>
            </li>
            <li>
              <a href="/programs" title="">
                Our Programs
              </a>
            </li>
            <li>
              <a href="events" title="">
                Events
              </a>
            </li>
            <li>
              <a href="/gallery" title="">
                Gallery
              </a>
            </li>
            <li>
              <a href="/about" title="">
                About
              </a>
            </li>
            <li>
              <a href="/contact" title="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Responsive;
