import React, { Component } from "react";

class Mission extends Component {
  render() {
    return (
      <div>
        <section>
          <div class="block whitish">
            <div
              class="parallax"
              style={{
                background: "url(images/resource/next-steps-header-bg.jpg);"
              }}
            ></div>
            <div class="container">
              <div class="row">
                <div class="col-md-12 column">
                  <div class="welcome">
                    <h3>
                      <i class="fa fa-church"></i>OUR MISSION
                    </h3>
                    <p>Connecting People To Their DESTINY in CHRIST</p>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 column">
                  <div class="welcome">
                    <h3>
                      <i class="fa fa-church"></i>OUR VISION
                    </h3>
                    <p>
                      Relevant Relentless Church That Worship CHRIST In SPIRIT
                      And In Truth
                    </p>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 column">
                  <div class="welcome">
                    <h3>
                      <i class="fa fa-church"></i>OUR CORE VALUES
                    </h3>
                    <p>
                      People Centered<br></br>Teamwork<br></br>Transparency
                      <br></br>Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="block blackish">
            <div
              class="parallax"
              style={{ background: "url(images/two.jpg)" }}
            ></div>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="parallax-title">
                    <h3 class="special-text">
                      REACH <span>OUT</span>
                    </h3>
                    <p>
                      Don't suffer in silence <br /> The house of Destiny Church
                      Team is here for you.
                    </p>
                  </div>
                  <div class="prayer-request">
                    <a href="mailto:hello@houseofdestiny.or.ke">
                      <input type="submit" value="Request Prayers" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Mission;
