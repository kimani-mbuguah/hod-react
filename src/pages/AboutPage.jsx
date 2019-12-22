import React, { Component } from "react";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class AboutPage extends Component {
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
              ABOUT <span>US</span>
            </h1>

            <ul>
              <li>
                <a href="/" title="">
                  Home
                </a>
              </li>

              <li>
                <a href="/gallery" title="">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section>
          <div className="block">
            <div className="container">
              <div className="row">
                <div className="col-md-6 column">
                  <div className="simple-text">
                    <h3>WHO WE ARE AND WHAT IS OUR MISSION?</h3>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elt.
                      Aioielit lorem, in lacinia libero lacina ac. Pellente sque
                      vulputat eusmod, nulla dolor placerat eiest, et adipiscing
                      urn aom. Aioielit lorem, in lacinia libero lacina ac.
                      Pellente sque lacinia libero lacina ac. Pellente sque
                      vulputa teuismod, nulla dolor placerat eiest, et
                      adipiscing urna metuis. Moli viourem sit amet, Lorem ipsum
                      dolor sit amet, elt.{" "}
                      <a href="#" title="">
                        Aioielit lorem
                      </a>
                      , in lacinia libero lacina ac. Pellente sque vulput ate
                      uismod.
                    </p>

                    <a className="button" href="#" title="">
                      DONATE NOW
                    </a>
                  </div>
                </div>

                <div className="col-md-6 column">
                  <div className="video">
                    <div className="video-img lightbox">
                      <img src="images/resource/video.jpg" alt="" />

                      <a
                        href="http://vimeo.com/44867610"
                        title=""
                        data-poptrox="vimeo"
                      >
                        <i className="fa fa-play"></i>
                      </a>
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
                  <div className="title">
                    <span>Pellent Esque Tellus</span>

                    <h2>
                      MEET <span>OUR STAFF</span>
                    </h2>
                  </div>

                  <div className="row">
                    <div className="team-carousel">
                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team1.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>
                              <a href="team-single.html" title="">
                                BOB SMITH
                              </a>
                            </h3>

                            <span>SENIOR PASTOR</span>

                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team2.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>
                              <a href="team-single.html" title="">
                                LEOMA KITN
                              </a>
                            </h3>

                            <span>SENIOR PASTOR</span>

                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team3.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>
                              <a href="team-single.html" title="">
                                RIFF KALE
                              </a>
                            </h3>

                            <span>SENIOR PASTOR</span>

                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team4.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>
                              <a href="team-single.html" title="">
                                TOM FOBE
                              </a>
                            </h3>

                            <span>SENIOR PASTOR</span>

                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team5.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>
                              <a href="team-single.html" title="">
                                SEIMN LINEO
                              </a>
                            </h3>

                            <span>SENIOR PASTOR</span>

                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team6.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>
                              <a href="team-single.html" title="">
                                KOJEO SLORM
                              </a>
                            </h3>

                            <span>SENIOR PASTOR</span>

                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
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

export default AboutPage;