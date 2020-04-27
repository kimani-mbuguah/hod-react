import React, { Component } from "react";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class GalleryPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Responsive />
        <div className="page-top">
          <div
            className="parallax"
            style={{ background: "url(images/four.jpg)" }}
          ></div>

          <div className="container">
            <h1>
              OUR <span>GALLERY</span>
            </h1>

            <ul>
              <li>
                <a href="/" title="">
                  Home
                </a>
              </li>

              <li>
                <a href="/gallery" title="">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section>
          <div className="block">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="remove-ext">
                    <div className="row">
                      <div className="mas-gallery">
                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/one.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/one.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/two.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/two.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/three.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/three.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/four.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/four" title="">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>




                  <div className="remove-ext">
                    <div className="row">
                      <div className="mas-gallery">
                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/five.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/five.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/eight.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/eight.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/nine.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/nine.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/ten.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/ten.jpg" title="">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="remove-ext">
                    <div className="row">
                      <div className="mas-gallery">
                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/eleven.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/eleven.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/twelve.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/twelve.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/thirteen.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/thirteen.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/fourteen.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/fourteen.jpg" title="">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="remove-ext">
                    <div className="row">
                      <div className="mas-gallery">
                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/15.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/15.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/sixteen.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/sixteen.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/seventeen.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/seventeen.jpg" title="HOD">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="gallery lightbox">
                            <img src="images/eighteen.jpg" alt="" />

                            <div className="gallery-title">
                              <i className="fa fa-picture-o"></i>

                              <h3>H.O.D</h3>
                            </div>

                            <ul>
                              <li>
                                <a href="images/eighteen.jpg" title="">
                                  <img src="images/logo.png" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 
                  <div className="theme-pagination">
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

export default GalleryPage;
