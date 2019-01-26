import React, { Component } from "react";
import Tabletop from "tabletop";

class Gym extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
      }
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "15mSqg-uGZTmQBEu_hqvNzaCiSPGi8JapuV46WmsDRvM",
      callback: data => {
        console.log("data ", data);
      }
    });
  }

  //   componentDidMount() {
  //     var publicSpreadsheetUrl =
  //       "https://docs.google.com/spreadsheets/d/15mSqg-uGZTmQBEu_hqvNzaCiSPGi8JapuV46WmsDRvM/edit?usp=sharing";

  //     function init() {
  //       Tabletop.init({
  //         key: publicSpreadsheetUrl,
  //         callback: showInfo,
  //         simpleSheet: true
  //       });
  //     }
  //     function showInfo(data, tabletop) {}
  //   }

  render() {
    console.log(
      "the data is ",
      this.state.data[("Lamoine Park, Richmond (Cheese Park)", "elements")]
    );
    // const { data } = this.state;

    // const example = .map((data, i) => <li key={i}> data</li>);
    // const gsjon = require("google-spreadsheet-to-json");

    // gsjson({
    //   spreadsheetId: "15mSqg-uGZTmQBEu_hqvNzaCiSPGi8JapuV46WmsDRvM"
    //   // other options...
    // })
    //   .then(function(result) {
    //     console.log(result.length);
    //     console.log(result);
    //   })
    //   .catch(function(err) {
    //     console.log(err.message);
    //     console.log(err.stack);
    //   });
    const { params } = this.props.match;

    return (
      <div>
        {/* <ul> {d}</ul> */}
        <h1>{params.location} </h1>
      </div>
    );
  }
}

// const { params } = this.props.match;

// return (
//   <div>
//     {/* <ul> {d}</ul> */}
//     <h1>{params.location} </h1>
//   </div>
// );
// return <h1>Hello world from gym</h1>;

export default Gym;
