import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withRouter, Redirect } from "react-router-dom";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class EventSinglePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { event } = this.props.eventsData;
    if (!event) {
      return <Redirect to="/events" />;
    }
    return (
      <div>
        <Header />
        <Responsive />
        <div className="page-top">
          <div
            className="parallax"
            style={{ background: "url(images/two.jpg)" }}
          ></div>

          <div className="container">
            <h1>
              <span>{event.title}</span>
            </h1>

            <ul>
              <li>
                <a href="/" title="">
                  Home
                </a>
              </li>

              <li>
                <a href="/events" title="">
                  Events
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
                  <div className="single-page">
                    <img style={{width: "100%", height: 700}} src={`images/${event.image}`} alt="" />

                    <div className="meta">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> {event.date}
                        </li>
                      </ul>
                    </div>

                    <div className="event-info">
                      <div className="col-md-6">
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

                      <div className="col-md-6">
                        <ul>
                          <li>
                            <i className="fa fa-map-marker"></i> The House of
                            Destiny Church
                          </li>

                          <li>
                            <i className="fa fa-clock-o"></i> {event.time}
                          </li>

                          <li>
                            <p>{event.about}</p>
                          </li>
                        </ul>
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

EventSinglePage.propTypes = {
  eventsData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  eventsData: state.eventsData,
});

const enhance = compose(connect(mapStateToProps));

export default enhance(withRouter(EventSinglePage));
