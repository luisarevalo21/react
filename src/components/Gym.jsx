import React, { Component } from "react";
import Tabletop from "tabletop";

class Gym extends Component {
  constructor(props) {
    super(props);
    this.state = {
      google_sheet: {
        "Ever Burning Flame": "sheet 1",
        "Everburning flame": "sheet 1",
        "Everburning flame": "sheet 1",
        "Everburning flame": "sheet 1",
        "Everburning flame": "sheet 1"
      }
    };
  }

  componentDidMount() {
    var publicSpreadsheetUrl =
      "https://docs.google.com/spreadsheets/d/15mSqg-uGZTmQBEu_hqvNzaCiSPGi8JapuV46WmsDRvM/edit?usp=sharing";

    function init() {
      Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        simpleSheet: true
      });
    }
    function showInfo(data, tabletop) {}
  }

  render() {
    const { params } = this.props.match;

    console.log("this.props", this.props);

    return <h1>{params.location} </h1>;
    // return <h1>Hello world from gym</h1>;
  }
}

export default Gym;
