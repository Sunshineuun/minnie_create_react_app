// Page.js
import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/page/Login";
import NotFound from "./components/page/NotFound";

export default () => (
  <Router>
    <Switch>
      <Route path="/login" components={Login} />
      <Route path="/404" components={NotFound} />
    </Switch>
  </Router>
)
