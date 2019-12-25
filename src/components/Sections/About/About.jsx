import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section>
        <div className="block">
          <div className="container">
            <div className="row">
              <div className="title2">
                <h2>
                  ABOUT <span>US</span>
                </h2>
              </div>

              <div className="about">
                <div className="col-md-6 column">
                  <h4>
                    <i className="fa fa-bank"></i>NEXT ONLINE EXPERIENCE WITH US
                  </h4>

                  <p>
                    Since its inception in 2013, the House of Destiny Ministries
                    has been a vibrant home for its members. At the heart of the
                    ministry is a love for people which is embodied in its
                    vision bearer, Pastor Frank Mbugua who has over 20 years’
                    experience as a pastor. Together with his wife, Pastor Carol
                    Mbugua, they are dedicated to connecting people to their
                    Destiny in Christ. Located along the Kutus – Kerugoya
                    highway next to Facing Mt. Kenya Boys, the Sunday Service
                    starts with a prayer session from 9 30am to 10am. It is
                    followed by the main service until 12 noon. You are welcome
                    to come pray, praise, worship and hear the word of God as
                    you experience the love from our church community.
                  </p>

                  <ul className="nav nav-tabs" id="myTab">
                    <li className="col-md-4 active">
                      <a data-toggle="tab" href="#image1">
                        <img src="images/resource/bg1.jpg" alt="" />
                      </a>
                    </li>

                    <li className="col-md-4">
                      <a data-toggle="tab" href="#image2">
                        <img src="images/resource/bg2-569x345.jpg" alt="" />
                      </a>
                    </li>

                    <li className="col-md-4">
                      <a data-toggle="tab" href="#image3">
                        <img src="images/resource/bg3-569x345.jpg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 column">
                  <div className="tab-content" id="myTabContent">
                    <div id="image1" className="tab-pane fade in active">
                      <img src="images/resource/bg1.jpg" alt="" />
                    </div>

                    <div id="image2" className="tab-pane fade">
                      <img src="images/resource/bg2-569x345.jpg" alt="" />
                    </div>

                    <div id="image3" className="tab-pane fade">
                      <img src="images/resource/bg3-569x345.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
