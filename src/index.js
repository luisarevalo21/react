import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import ExList from "./components/ExList";
import Gym from "./components/Gym";

const Root = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ExList} />
        <Route path="/gym/:location" component={Gym} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
