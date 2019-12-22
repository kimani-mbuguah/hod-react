import React, { Component } from "react";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class EventSinglePage extends Component {
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
              EVENTS <span>SINGLE</span>
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
                    <img src="images/resource/sermon-single.jpg" alt="" />

                    <h2>Francis Chan - Passion 2013 - God Is Faithful</h2>

                    <div className="meta">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> November 01, 2013
                        </li>
                      </ul>
                    </div>

                    <div className="event-info">
                      <div className="col-md-6">
                        <div className="map">
                          <iframe src="https://www.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=uk&amp;aq=&amp;sll=18.312811,-4.306641&amp;sspn=46.292419,86.572266&amp;ie=UTF8&amp;hq=&amp;hnear=United+Kingdom&amp;ll=52.352119,-2.647705&amp;spn=0.685471,1.352692&amp;t=p&amp;z=10&amp;output=embed"></iframe>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <ul>
                          <li>
                            <i className="fa fa-map-marker"></i> South
                            Lanarkshire, UK
                          </li>

                          <li>
                            <i className="fa fa-heart"></i> 24 Likes
                          </li>

                          <li>
                            <i className="fa fa-clock-o"></i> 11:00am - 9:00pm
                          </li>

                          <li>
                            <i className="fa fa-comment"></i> 3 Comments
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p>
                    Aenean leo vene quam. Pellntes ique ornare sem eius modte
                    venenatis vestibum. Cras mattis itugir purus. Aenean le vene
                    quam. Pellntes ique ornare seeim eiusmodte venenatis
                    vestibum. Cras mattis citur exquisitely fari then far purus.
                    Aenean leo vene quam. Pellntes ique ornare sem eiusmodte
                    venen. Et tollit utamur nam, dcum ullumo etiam velit. Ne
                    scripserit. Sea ex utamur phaedrum, nisl no, no reque
                    sensibus duo. Meini coposae, paulo mediocrem etiam negleg
                    enur. Vis ut argum entum lorem ipsum dolor sit amet,
                    consectetur adipscing elit. Nulla convallis egestas rhoncus.
                    Don eofacilisis fermentum sem, ac viverra ante lucus vel.
                    Donec vel maurs quam. Lorem ipsum dolor sit amet, consect
                    etur adpiscing elit. Nulla convallis egestas rhoncus. Donec
                    facilisis ferme ntum sem, ac viverra ante luctus vel. Donec
                    vel maus quam.Lorem ipsum dolor sit amet, consectetur
                    dipiscing elit. Nulla convallis egestas rhoncus.{" "}
                  </p>
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

export default EventSinglePage;
