import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Gym from "./Gym";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      location: "",
      google_sheet: "",
      Locations: [
        { location: "EBF", title: "EBF", google_sheet: "sheet 1" },
        { location: "PVP", title: "PVP", google_sheet: "sheet 2" }
      ]
    };
  }
  componentDidMount() {}
  render() {
    // if (this.state.redirect === true) {
    //   console.log(this.state.location);
    //   return (
    //     <Gym
    //       location={this.state.location}
    //       google_sheet={this.state.google_sheet}
    //     />
    //   );
    // }
    const finishedList = this.state.Locations.map((value, i) => (
      <li onClick={() => this.handleClick(value)} key={i}>
        {" "}
        {value.location}
      </li>
    ));

    return <ul>{finishedList}</ul>;
  }

  handleClick(value) {
    console.log("value", value.location);
    this.setState({
      redirect: true,
      location: value.location,
      google_sheet: value.google_sheet
    });
  }
}

export default List;
