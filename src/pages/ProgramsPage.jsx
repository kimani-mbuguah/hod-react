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
          <div class="block">
            <div class="container">
              <div class="row">
                <div class="col-md-12 column">
                  <div class="remove-ext">
                    <div class="blog-post">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="image">
                            <img src="images/resource/blog1.jpg" alt="" />
                          </div>
                        </div>

                        <div class="col-md-7">
                          <div class="blog-detail">
                            <h3>
                              <a href="blog-single.html" title="">
                                Why Donate Us
                              </a>
                            </h3>

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

                    <div class="blog-post">
                      <div class="row">
                        <div class="col-md-7">
                          <div class="blog-detail">
                            <h3>
                              <a href="blog-single.html" title="">
                                Why Donate Us
                              </a>
                            </h3>

                            <p>
                              Aenen leo vene quam. Pellntes quie venenatis
                              vestib citur onecs.Suspendisse velit ante, aliquet
                              vel adipi cing auctor, tincidunt a diam. Lorem
                              ipsum dolor sit .
                            </p>
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="image">
                            <img src="images/resource/blog1.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="blog-post">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="image">
                            <img src="images/resource/blog2.jpg" alt="" />
                          </div>
                        </div>

                        <div class="col-md-7">
                          <div class="blog-detail">
                            <h3>
                              <a href="blog-single.html" title="">
                                Stop Waiting For Heaven
                              </a>
                            </h3>

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

                    <div class="blog-post">
                      <div class="row">
                        <div class="col-md-7">
                          <div class="blog-detail">
                            <h3>
                              <a href="blog-single.html" title="">
                                How To Get More From Your Group
                              </a>
                            </h3>

                            <p>
                              Aenen leo vene quam. Pellntes quie venenatis
                              vestib citur onecs.Suspendisse velit ante, aliquet
                              vel adipi cing auctor, tincidunt a diam. Lorem
                              ipsum dolor sit .
                            </p>
                          </div>
                        </div>

                        <div class="col-md-5">
                          <div class="image">
                            <img src="images/resource/blog1.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="blog-post">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="image">
                            <img src="images/resource/blog4.jpg" alt="" />
                          </div>
                        </div>

                        <div class="col-md-7">
                          <div class="blog-detail">
                            <h3>
                              <a href="blog-single.html" title="">
                                Week 5: What Will Heaven Be Like?
                              </a>
                            </h3>

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
