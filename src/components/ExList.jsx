import React, { Component } from "react";

import { Link } from "react-router-dom";

class ExList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Exclusive_Gyms: [
        "Can You Hear There (Woodfield)",
        "Country Club Vist Park Dedication Plaque",
        "Ever Burning Flame (Fernandez Park)",
        "Fountain of the Bells",
        "Hazel Downer Thorton Memorial Grove (Dog Park)",
        "Lamoine (Cheese) Park",
        "Lefty Gomez",
        "Pinole Point Business Park Fountain A",
        "Pinole Rotary Club (Louis Francis)",
        "Pinole Valley Park",
        "Playground (Refugio)",
        "Starbucks (Richmond Parkway)",
        "Starbucks (San Pablo Dam Road)"
      ]
    };
  }
  componentDidMount() {}
  render() {
    const finishedList = this.state.Exclusive_Gyms.map((value, i) => (
      <li key={i}>
        <Link to={"/gym/" + value}>{value} </Link>
      </li>
    ));

    return (
      <div>
        {/* //add a navbar */}
        <h1 className="header">Ex Raid Gyms</h1>
        <ul>{finishedList}</ul>
      </div>
    );
  }
}

export default ExList;
