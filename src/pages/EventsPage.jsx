import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withRouter } from "react-router-dom";

import { getEvents } from "../actions/eventsActions";
import { viewEvent } from "../actions/eventsActions";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    const { events } = this.props.eventsData;
    let eventsData;
    if (events) {
      eventsData = events.map((event, i) => {
        return (
          <div className="col-md-6" key={i}>
            <div className="category-box">
              <div className="category-block">
                <div className="category-img">
                  <img src={`images/${event.image}`} alt="" />

                  <ul>
                    <li className="date">
                      <a href="#" title="">
                        <i className="fa fa-calendar-o"></i> {event.date}
                      </a>
                    </li>

                    <li className="time">
                      <a href="#" title="">
                        <i className="fa fa-clock-o"></i> {event.time}
                      </a>
                    </li>
                  </ul>
                </div>

                <h3>{event.title}</h3>

                <span>
                  <i className="fa fa-map-marker"></i> The House of Destiny
                  Church Kerugoya
                </span>
                <button
                  className="button center"
                  onClick={() => {
                    this.props.viewEvent(event.name, this.props.history);
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
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
              EVENTS <span>LIST</span>
            </h1>

            <ul>
              <li>
                <a href="/" title="">
                  Home
                </a>
              </li>

              <li>
                <a href="/events" title="">
                  Our Events
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
                  <div className="events-gridview remove-ext">
                    <div className="row">{eventsData}</div>
                  </div>

                  {/* <div className="theme-pagination">
                    <ul className="pagination">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-left"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#">1</a>
                      </li>

                      <li>
                        <a href="#">2</a>
                      </li>

                      <li>
                        <a href="#">3</a>
                      </li>

                      <li>
                        <a href="#">4</a>
                      </li>

                      <li>
                        <a href="#">5</a>
                      </li>

                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
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

EventsPage.propTypes = {
  eventsData: PropTypes.object,
  getEvents: PropTypes.func,
  viewEvent: PropTypes.func
};

const mapStateToProps = state => ({
  eventsData: state.eventsData
});

const enhance = compose(connect(mapStateToProps, { getEvents, viewEvent }));

export default enhance(withRouter(EventsPage));
