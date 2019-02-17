import React, { Component } from "react";
import Tabletop from "tabletop";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../img/ep-logo-green.png";
import { Grid, Row, Col, Navbar } from "react-bootstrap";
// let logoStyle = {
//   margin: "1.25rem 0 1.5rem 0",
//   padding: "1rem 0.75rem",
//   line-height: "28px",
//   min-height: "60px",
//   border-radius: "0.25rem"
// };
class ExList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_gyms: new Array(13).fill(false),
      google_sheet: {
        "Can You Hear There (Woodfield)":
          "Can You Hear There, Hercules (Lupine Road, Park)",
        "Country Club Vist Park Dedication Plaque":
          "Country Club Vist Park Dedication Plaque, Richmond",
        "Ever Burning Flame (Fernandez Park)":
          "Ever Burning Flame, Pinole (Fernandez Park)",
        "Fountain of the Bells": "Fountain of the Bells, San Pablo",
        "Hazel Downer Thorton Memorial Grove (Dog Park)":
          "Hazel Downer Thorton Memorial Grove, Pinole (Pinole Valley dog park)",
        "Lamoine (Cheese) Park": "Lamoine Park, Richmond (Cheese Park)",
        "Lefty Gomez": "Lefty Gomez Plaque, Rodeo",
        "Pinole Point Business Park Fountain A":
          "Pt. Pinole Business Park Fountain, Richmond",
        "Pinole Rotary Club (Louis Francis)":
          "Pinole Rotary Club, Pinole (Marlesta Rd)",
        "Pinole Valley Park": "Pinole Valley Park, Pinole",
        "Playground (Refugio)": "Playground, Hercules (Refugio Park)",
        "Starbucks (Richmond Parkway)": "Starbucks, Richmond Parkway location",
        "Starbucks (San Pablo Dam Road)":
          "Starbucks, San Pablo Dam Rd. location (El Sob/San Pablo)"
      },
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
  componentDidMount() {
    this.checkGyms();
  }
  checkGyms() {
    console.log("inside check gyms");
    Tabletop.init({
      key: "15mSqg-uGZTmQBEu_hqvNzaCiSPGi8JapuV46WmsDRvM",
      callback: (data, tabletop) => {
        const active = this.state.Exclusive_Gyms.map(
          (gym, index) =>
            tabletop.sheets(this.state.google_sheet[gym]).toArray().length !== 0
        );
        this.setState({ active_gyms: active });
      }
    });
  }

  render() {
    const finishedList = this.state.Exclusive_Gyms.map((value, i) => (
      <li key={i}>
        <Link
          className={this.state.active_gyms[i] ? "newStyle" : ""}
          to={"/gym/" + value}
        >
          {value}
        </Link>
      </li>
    ));

    return (
      <div>
        <Grid className="row align-items-center">
          <Row>
            <Col className="myGrid">
              <a href="https://epicpancake.com/">
                <img alt="logo here" />
              </a>
            </Col>
            <Col>
              <a
                className="btn btn-primary racopy radonate"
                href="https://www.paypal.me/theepicpancake"
              >
                Donate
              </a>
            </Col>
          </Row>
        </Grid>

        {/* <div className="row align-items-center">
          <div className="col-8">
            <div className="ralogo">
              <a href="https://epicpancake.com/">
                <img alt="Logo" />
              </a>
            </div>
            <div className="col-4">
              <div className="form-group">
                <a
                  className="btn btn-primary racopy radonate"
                  href="https://www.paypal.me/theepicpancake"
                  role="button"
                  target="_blank"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <h1 className="header">Ex Raid Gyms</h1>
        <ul id="location-list" className="w3-container">
          {finishedList}
        </ul>
        <div className="form-group">
          <a href="https://goo.gl/forms/5fhu41K2qYhgkeTx2">
            <button type="button" className="racopy btn btn-primary">
              Sign Up
            </button>
          </a>
        </div>
        <a href="http://telegra.ph/PokeRaiderBot-09-16" target="_blank">
          To learn more about @PokeRaiderBot and what commands you can use,
          click here.
        </a>
      </div>
    );
  }
}

export default ExList;
