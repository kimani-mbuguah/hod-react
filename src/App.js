import React, { Component } from "react"
import { Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"

class App extends Component {
  render() {
    return <Route exact path="/" component={LandingPage} />
  }
}

export default App
