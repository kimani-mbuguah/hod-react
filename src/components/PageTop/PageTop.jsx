import React, { Component } from "react";

class PageTop extends Component {
  s;
  render() {
    return (
      <div className="page-top">
        <div
          className="parallax"
          style={{ background: "url(images/parallax1.jpg)" }}
        ></div>
      </div>
    );
  }
}

export default PageTop;
