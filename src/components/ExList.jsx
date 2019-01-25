import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import Gym from "./Gym";

class ExList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Exclusive_Gyms: ["EBF", "PVP"]
    };
  }
  componentDidMount() {}
  render() {
    const finishedList = this.state.Exclusive_Gyms.map((value, i) => (
      <li key={i}>
        <Link to={"/gym/" + value}>{value} </Link>
      </li>
    ));

    return <ul>{finishedList}</ul>;
  }
}

export default ExList;
