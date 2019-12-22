import React, { Component } from "react";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class ProgramsPage extends Component {
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
              PROGRAMS <span>LIST</span>
            </h1>

            <ul>
              <li>
                <a href="/" title="">
                  Home
                </a>
              </li>

              <li>
                <a href="/programs" title="">
                  Our Programs
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
                  <div className="remove-ext">
                    <div className="blog-post">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="image">
                            <img src="images/resource/blog1.jpg" alt="" />
                          </div>
                        </div>

                        <div className="col-md-7">
                          <div className="blog-detail">
                            <h3>SAMPLE HEADING</h3>

                            <p>
                              Aenen leo vene quam. Pellntes quie venenatis
                              vestib citur onecs.Suspendisse velit ante, aliquet
                              vel adipi cing auctor, tincidunt a diam. Lorem
                              ipsum dolor sit .
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="blog-post">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="blog-detail">
                            <h3>SAMPLE HEADING</h3>

                            <p>
                              Aenen leo vene quam. Pellntes quie venenatis
                              vestib citur onecs.Suspendisse velit ante, aliquet
                              vel adipi cing auctor, tincidunt a diam. Lorem
                              ipsum dolor sit .
                            </p>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="image">
                            <img src="images/resource/blog1.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="blog-post">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="image">
                            <img src="images/resource/blog2.jpg" alt="" />
                          </div>
                        </div>

                        <div className="col-md-7">
                          <div className="blog-detail">
                            <h3>SAMPLE HEADING</h3>

                            <p>
                              Aenen leo vene quam. Pellntes quie venenatis
                              vestib citur onecs.Suspendisse velit ante, aliquet
                              vel adipi cing auctor, tincidunt a diam. Lorem
                              ipsum dolor sit .
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="blog-post">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="blog-detail">
                            <h3>SAMPLE HEADING</h3>

                            <p>
                              Aenen leo vene quam. Pellntes quie venenatis
                              vestib citur onecs.Suspendisse velit ante, aliquet
                              vel adipi cing auctor, tincidunt a diam. Lorem
                              ipsum dolor sit .
                            </p>
                          </div>
                        </div>

                        <div className="col-md-5">
                          <div className="image">
                            <img src="images/resource/blog1.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="blog-post">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="image">
                            <img src="images/resource/blog4.jpg" alt="" />
                          </div>
                        </div>

                        <div className="col-md-7">
                          <div className="blog-detail">
                            <h3>SAMPLE HEADING</h3>

                            <p>
                              Aenen leo vene quam. Pellntes quie venenatis
                              vestib citur onecs.Suspendisse velit ante, aliquet
                              vel adipi cing auctor, tincidunt a diam. Lorem
                              ipsum dolor sit .
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

export default ProgramsPage;
