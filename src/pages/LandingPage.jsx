import React, { Component } from "react";
import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Slider from "../components/Slider/Slider";
import About from "../components/Sections/About/About";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Responsive />
        <Slider />
        <About />
        <Footer />
        <FooterBottom />
      </div>
    );
  }
}

export default LandingPage;