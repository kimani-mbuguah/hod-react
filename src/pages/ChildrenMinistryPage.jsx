import React, { Component } from "react";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class SingleMinistryPage extends Component {
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
              MINISTRIES <span>CHILDREN</span>
            </h1>

            <ul>
              <li>
                <a href="/" title="">
                  Home
                </a>
              </li>

              <li>
                <a href="/children" title="">
                  Children Ministry
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
                  <div class="service-block">
                    <div class="service-image">
                      <img src="images/resource/partnerships.jpg" alt="" />

                      <i class="fa fa-codepen"></i>
                    </div>

                    <h3>Children Ministry</h3>

                    <p>
                      Aenean leo vene quam. Pellntes ique ornare sem eius modte
                      venenatis vestibum. Cras mattis citugir purus. Aenean le
                      vene quam. Pellntes ique ornare seeim eiusmodte venenatis
                      vestibum. Cras mattis citur exquisitely fari then far
                      purus. Aenean leo vene quam. Pellntes ique ornare sem
                      eiusmodte venen. Et tollit utamur nam, dcum ullumo etiam
                      velit. Nescripserit. Sea ex utamur phaedrum, nisl no, no
                      reque sensibus duo. Meini coposae, paulo mediocrem etiam
                      neglegenur. Vis ut argum entum lorem ipsum dolor sit amet,
                      consectetur adipscing elit. Nulla convallis egestas
                      rhoncus. Doneofacilisis fermentum sem, ac viverra ante
                      lucus vel. Donec vel maurs quam. Lorem ipsum dolor sit
                      amet, consectetur adpiscing elit. Nulla convallis egestas
                      rhoncus. Donec facilisis ferme ntum sem, ac viverra ante
                      luctus vel. Donec vel maus quam.Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Nulla convallis egestas
                      rhoncus.
                    </p>

                    <blockquote>
                      <div
                        class="parallax"
                        style={{ background: "url(images/parallax2.jpg)" }}
                      ></div>
                      <i class="fa fa-quote-left"></i>Voluptate illum dolore ita
                      ipsum, quid deserunt singulis, labore admodum ita multos
                      malis ea nam nam tamen fore amet.
                      <i class="fa fa-quote-right"></i>
                    </blockquote>

                    <p>
                      Aenean leo vene quam. Pellntes ique ornare sem eius modte
                      venenatis vestibum. Cras mattis citugir purus. Aenean le
                      vene quam. Pellntes ique ornare seeim eiusmodte venenatis
                      vestibum. Cras mattis citur exquisitely fari then far
                      purus. Aenean leo vene quam. Pellntes ique{" "}
                    </p>
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

export default SingleMinistryPage;
