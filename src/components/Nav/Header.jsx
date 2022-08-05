import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header2">
          <div className="topbar">
            <div className="container">
              <div className="header-timer">
                <p>Youth Connect</p>
                <ul className="headercounter">
                  <li>
                    {" "}
                    <span>Every Thursday</span>
                    <p>6:00 P.M To 7:30 P.M</p>
                  </li>
                </ul>
              </div>
              <p>
                <i className="fa fa-mobile"></i> Call: +254-705-000-050
              </p>

              <p>
                <i className="fa fa-envelope"></i> hello@houseofdestiny.or.ke
              </p>

              <ul className="social-media">
              
              
                <li>
                  <a title="" href="https://web.facebook.com/pages/category/Religious-organization/The-House-of-Destiny-Ministries-Kerugoya-709596639109960/?_rdc=1&_rdr">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
              <div className="cart-dropdown">
                <p>
                  <i className="fa fa-list"></i> <span>Services</span>
                </p>
                <ul>
                  <li className="item-number">
                    Main Service - Sundays 9:00 AM to 12:00 PM
                  </li>
                  <li className="item-number">
                    Prayers - Tuesdays 6:00 PM to 7:30 PM
                  </li>
                  <li className="item-number">
                    Praise And Worship Training - Mondays, Wednesdays and
                    Fridays from 7:30 PM
                  </li>
                  <li className="item-number">
                    Youth Connect - Thursdays 6:00 PM to 7:30 PM
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <nav className="style1">
            <div className="container">
              <div className="logo">
                <a href="#" title="">
                  <img src="/images/logo.png" alt="" />
                </a>
              </div>

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
                  <a href="/events" title="">
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
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
