import React, { Component } from "react";
import { Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MinistriesListPage from "./pages/MinistriesListPage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/ministries" component={MinistriesListPage} />
      </div>
    );
  }
}

export default App;
