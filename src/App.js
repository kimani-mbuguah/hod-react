import React, { Component } from "react";
import { Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MinistriesListPage from "./pages/MinistriesListPage";
import ChildrenMinistryPage from "./pages/ChildrenMinistryPage";
import ProgramsPage from "./pages/ProgramsPage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/ministries" component={MinistriesListPage} />
        <Route exact path="/children" component={ChildrenMinistryPage} />
        <Route exact path="/programs" component={ProgramsPage} />
      </div>
    );
  }
}

export default App;
