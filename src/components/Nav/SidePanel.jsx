import React, { Component } from "react";

class SidePanel extends Component {
  render() {
    return (
      <div>
        <div className="sidepanel">
          <span>
            <i className="fa fa-magic"></i>
          </span>

          <h4>CHOOSE YOUR COLOR:</h4>

          <div className="colors">
            <div>
              <a
                onClick="setActiveStyleSheet('color1'); return false;"
                className="color1"
              ></a>
            </div>

            <div>
              <a
                onClick="setActiveStyleSheet('color2'); return false;"
                className="color2"
              ></a>
            </div>

            <div>
              <a
                onClick="setActiveStyleSheet('color3'); return false;"
                className="color3"
              ></a>
            </div>

            <div>
              <a
                onClick="setActiveStyleSheet('color4'); return false;"
                className="color4"
              ></a>
            </div>

            <div>
              <a
                onClick="setActiveStyleSheet('color5'); return false;"
                className="color5"
              ></a>
            </div>
          </div>

          <div className="layout">
            <h4>HEADER SETTING:</h4>

            <div>
              <a href="#" className="sticky" title="">
                STICKY
              </a>
            </div>

            <div>
              <a href="#" className="non-sticky" title="">
                NORMAL
              </a>
            </div>
          </div>

          <div className="layout">
            <h4>CHOOSE YOUR HEADER:</h4>

            <div>
              <a href="index-2.html" className="header1-btn" title="">
                HEADER 1
              </a>
            </div>

            <div>
              <a href="index2.html" className="header2-btn" title="">
                HEADER 2
              </a>
            </div>

            <div>
              <a href="index3.html" className="header3-btn" title="">
                HEADER 3
              </a>
            </div>

            <div>
              <a href="index4.html" className="header4-btn" title="">
                HEADER 4
              </a>
            </div>

            <div>
              <a href="index5.html" className="header5-btn" title="">
                HEADER 5
              </a>
            </div>

            <div>
              <a href="index6.html" className="header6-btn" title="">
                HEADER 6
              </a>
            </div>

            <div>
              <a href="index7.html" className="header7-btn" title="">
                HEADER 7
              </a>
            </div>

            <div>
              <a href="index8.html" className="header8-btn" title="">
                HEADER 8
              </a>
            </div>

            <div>
              <a href="index9.html" className="header9-btn" title="">
                HEADER 9
              </a>
            </div>

            <div>
              <a href="index9.html" className="header9-btn" title="">
                HEADER 9
              </a>
            </div>
          </div>

          <div className="layout">
            <h4>CHOOSE YOUR LAYOUT:</h4>

            <div>
              <a href="#" className="wide" title="">
                WIDE
              </a>
            </div>

            <div>
              <a href="#" className="boxed" title="">
                BOXED
              </a>
            </div>
          </div>

          <div className="colors pattern">
            <h4>CHOOSE YOUR PATTERN:</h4>

            <div>
              <a className="pattern1" title=""></a>
            </div>

            <div>
              <a className="pattern2" title=""></a>
            </div>

            <div>
              <a className="pattern3" title=""></a>
            </div>

            <div>
              <a className="pattern4" title=""></a>
            </div>

            <div>
              <a className="pattern5" title=""></a>
            </div>

            <i>* Only For Boxed Layout</i>
          </div>
        </div>
      </div>
    );
  }
}

export default SidePanel;
