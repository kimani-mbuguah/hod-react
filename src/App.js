import React, { Component } from "react";
import { Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MinistriesListPage from "./pages/MinistriesListPage";
import SingleMinistryPage from "./pages/SingleMinistryPage";
import ProgramsPage from "./pages/ProgramsPage";
import EventsPage from "./pages/EventsPage";
import EventSingePage from "./pages/EventSinglePage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LivePage from "./pages/LivePage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/ministries" component={MinistriesListPage} />
        <Route exact path="/single-ministry" component={SingleMinistryPage} />
        <Route exact path="/programs" component={ProgramsPage} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/event-single" component={EventSingePage} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/online" component={LivePage} />
      </div>
    );
  }
}

export default App;
