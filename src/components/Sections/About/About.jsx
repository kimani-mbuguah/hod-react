import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section>
        <div className="block">
          <div className="container">
            <div className="row">
              <div className="title2">
                <span>Pellent Esque Tellus</span>

                <h2>
                  WANT <span>TO KNOW ABOUT US</span>
                </h2>
              </div>

              <div className="about">
                <div className="col-md-6 column">
                  <h4>
                    <i className="fa fa-bank"></i>NEXT ONLINE EXPERIENCE WITH US
                  </h4>

                  <p>
                    Aenean leo vene quam. Pellntes ique ornare sem eiusmodte
                    venenatis. Pellntes ique ornew vestibum. Cras mattis citur
                    exquisitely far then far purus. Duis sed odio sit amet
                    nibhwe vulputate cursus a sit amet mauris. Morbi accumsan
                    ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                    odio. Sed non mauris vitae erat consequat auctor.
                  </p>

                  <ul>
                    <li>
                      <i className="fa fa-check"></i> Cras dignissim lacus eget
                      urna fringilla placerat.
                    </li>

                    <li>
                      <i className="fa fa-check"></i> Interdum et malesuada
                      fames ac ante ipsum primis in faucibus.
                    </li>
                  </ul>

                  <ul className="nav nav-tabs" id="myTab">
                    <li className="col-md-4 active">
                      <a data-toggle="tab" href="#image1">
                        <img src="images/resource/about1.jpg" alt="" />
                      </a>
                    </li>

                    <li className="col-md-4">
                      <a data-toggle="tab" href="#image2">
                        <img src="images/resource/about2.jpg" alt="" />
                      </a>
                    </li>

                    <li className="col-md-4">
                      <a data-toggle="tab" href="#image3">
                        <img src="images/resource/about3.jpg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 column">
                  <div className="tab-content" id="myTabContent">
                    <div id="image1" className="tab-pane fade in active">
                      <img src="images/resource/about1-big.jpg" alt="" />
                    </div>

                    <div id="image2" className="tab-pane fade">
                      <img src="images/resource/about2-big.jpg" alt="" />
                    </div>

                    <div id="image3" className="tab-pane fade">
                      <img src="images/resource/about3-big.jpg" alt="" />
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
