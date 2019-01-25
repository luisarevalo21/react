import React, { Component } from "react";

class Gym extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { params } = this.props.match;

    console.log("this.props", this.props);
    return <h1>{params.location} </h1>;
    // return <h1>Hello world from gym</h1>;
  }
}

export default Gym;
