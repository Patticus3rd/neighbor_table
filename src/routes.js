import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import App from "./containers/App";
import About from "./containers/about";
import Cuisine from "./containers/cuisine-detail";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/cuisine" component={Cuisine} />
      </Switch>
    </BrowserRouter>
  )
}
