import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ClientPage from "./Components/client/ClientPage";
import BadgePage from "./Components/badge/BadgePage";
import EditPage from "./Components/server/EditPage";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={ClientPage} />
          <Route path="/badge" exact component={BadgePage} />
          <Route path="/BE_Edit" exact component={EditPage} />
        </Switch>
      </Router>
    );
  }
}
