import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import compose from "recompose/compose";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class SingleMinistryPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { ministry } = this.props.ministry;
    let image;

    if (ministry.name == "CHILDREN MINISTRY") {
      image = "images/five.jpg";
    } else if (ministry.name == "YOUTH MINISTRY") {
      image = "images/four.jpg";
    } else if (ministry.name == "FAMILY MINISTRY") {
      image = "images/seventeen.jpg";
    } else if (ministry.name == "MEN MINISTRY") {
      image = "images/twelve.jpg";
    } else if (ministry.name == "WOMEN MINISTRY") {
      image = "images/eighteen.jpg";
    }

    if (ministry != null) {
      return (
        <div>
          <Header />
          <Responsive />
          <div className="page-top">
            <div
              className="parallax"
              style={{ background: `url(${image})` }}
            ></div>

            <div className="container">
              <h1>
                <span>{ministry.name}</span>
              </h1>

              <ul>
                <li>
                  <a href="/" title="">
                    Home
                  </a>
                </li>

                <li>
                  <a href="/ministries" title="">
                    Ministries
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <section>
            <div className="block">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 column">
                    <div className="service-block">
                      <div className="service-image">
                        <img src={`${image}`} alt="" />

                        <i className="fa fa-codepen"></i>
                      </div>

                      <h3>{ministry.name}</h3>
                      <p>{ministry.detail}</p>
                      {ministry.name == "CHILDREN MINISTRY" ? (
                        <div>
                          <br></br>
                          <h3>Children Outreach Programs</h3>
                          <br></br>
                          <div class="row">
                            <div class="col-md-12  column">
                              <div class="simple-text">
                                <h4>Vacation Bible School</h4>
                                <p>
                                  The one-week program is held every school
                                  holiday with the aim of intentionally
                                  investing in children. Children engage in
                                  interesting activities that equip them with
                                  life skills even as they go through bible
                                  lessons.
                                </p>
                              </div>
                            </div>

                            <div class="space"></div>
                            <div class="col-md-12  column">
                              <div class="simple-text">
                                <h4>African Child Prayer Day</h4>
                                <p>
                                  In partnership with Childnet Tuamke, children
                                  congregate at the church for the annual
                                  African Child Prayer Day (ACPD). Held in the
                                  month of October, the event is aimed at
                                  reaching out to children all over the world.
                                </p>
                              </div>
                            </div>

                            <div class="space"></div>
                            <div class="col-md-12  column">
                              <div class="simple-text">
                                <h4>Operations Christmas Child</h4>
                                <p>
                                  Through Operations Christmas Child (OCC), an
                                  international organization, the church has
                                  reached many children who have had a once in a
                                  lifetime experience where they receive gifts.
                                  This is followed by The Greatest Gift Journey
                                  (TGJ) program that invites children to know
                                  and follow Jesus.
                                </p>
                              </div>
                            </div>

                            <div class="space"></div>
                            <div class="col-md-12  column">
                              <div class="simple-text">
                                <h4>Children Visits</h4>
                                <p>
                                  Every Saturday, we visit the Child of God
                                  children home in Mururi town where we minister
                                  to them. We have impacted the lives of
                                  children in the underprivileged community. We
                                  also reach out to children in various
                                  institutions in our community such as Good
                                  Faith Children home and St. Elizabeth School
                                  among others.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
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
    } else {
      return <Redirect to="/ministries" />;
    }
  }
}

const mapStateToProps = (state) => ({
  ministry: state.ministriesData,
});

const enhance = compose(connect(mapStateToProps));

export default enhance(withRouter(SingleMinistryPage));
