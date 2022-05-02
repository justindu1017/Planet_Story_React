import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ClientPage from "./Components/client/ClientPage";
import BadgePage from "./Components/badge/BadgePage";
import EditPage from "./Components/server/EditPage";
import PlanetHistoryPage from "./Components/planetHistory/PlanetHistoryPage";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={ClientPage} />
          <Route path="/badge" exact component={BadgePage} />
          <Route path="/planetHistory" exact component={PlanetHistoryPage} />
          <Route path="/BE_Edit" exact component={EditPage} />
        </Switch>
      </Router>
    );
  }
}
