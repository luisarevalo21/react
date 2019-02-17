import React, { Component } from "react";
import Tabletop from "tabletop";
import { finished } from "stream";
import "../App.css";
let counter = 0;
let copyString = "";
let copyArray = [];

class Gym extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      sheet_id: "",
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
    console.log("insinde component did mount");
    Tabletop.init({
      key: "15mSqg-uGZTmQBEu_hqvNzaCiSPGi8JapuV46WmsDRvM",
      callback: this.showinfo
    });
  }

  showinfo = (data, tabletop) => {
    const { params } = this.props.match;
    this.setState({
      entries: tabletop
        .sheets(this.state.google_sheet[params.location])
        .toArray()
    });
  };

  // finishedEntries: this.state.entries[0].map(value => {
  //   <li>{value} </li>;
  // })

  // console.log("the data is the following ", this.state.entries[0][0]);

  // console.log(this.state.entries[0][0]);

  // settingSheetId = params => {
  //   let id = this.state;
  //   id.sheet_id = params.location;
  //   this.setState({ sheet_id: id });
  // };

  makeList(lines, counter) {
    console.log("lines is  ", lines);
    console.log("counter", counter);

    if (lines && lines[0]) {
      let finishedInstinct = [];
      let finishedMystic = [];
      let finishedValor = [];
      let date = lines[0][5];
      let time = lines[0][4];

      for (let i = 0; i < lines.length; i++) {
        copyString +=
          lines[i][0] + ", " + lines[i][1] + ", " + lines[i][3] + " \n";
      }
      console.log("copystring", copyString);

      function listify(lines, team) {
        if (lines.length === 0) {
          return "No " + team;
        }
        let finishedList = lines.map((value, i) => {
          if (
            value[6].trim() ===
            "My friend will play for me (enter their name in the comment)"
          ) {
            return (
              <li key={i}>
                {value[0].trim() +
                  ", " +
                  value[1].trim() +
                  ", " +
                  value[3].trim() +
                  ", " +
                  "via proxy"}{" "}
              </li>
            );
          } else if (
            value[6].trim() ===
            "I need someone to play for me (add your telegram name in the comments so an admin can contact you)"
          ) {
            return (
              <li key={i}>
                {value[0].trim() +
                  ", " +
                  value[1].trim() +
                  ", " +
                  value[3].trim() +
                  ", " +
                  "needs proxy"}
              </li>
            );
          } else {
            return (
              <li key={i}>
                {value[0].trim() +
                  ", " +
                  value[1].trim() +
                  ", " +
                  value[3].trim()}
              </li>
            );
          }
        });
        return finishedList;
      }
      //   <li key={i}>
      //     {value[0].trim() + ", " + value[1].trim() + ", " + value[3].trim()}
      //   </li>
      // ));

      function cmp(a, b) {
        if (a[3] < b[3]) {
          return -1;
        }
        if (a[3] > b[3]) {
          return 1;
        }
        return 0;
      }

      // if it doesnt work take away sort()
      finishedInstinct = lines
        .filter(entry => entry[2] === "Instinct")
        .sort(cmp);
      finishedMystic = lines.filter(entry => entry[2] === "Mystic").sort(cmp);
      finishedValor = lines.filter(entry => entry[2] === "Valor").sort(cmp);

      console.log("the lines value is ", finishedValor);

      if (finishedInstinct.length === 0) {
        copyString += "No Instncts" + " \n";
      }
      if (finishedMystic.length === 0) {
        copyString += "No Mystics" + " \n";
      }
      if (finishedValor.length === 0) {
        copyString += "No Valors" + " \n";
      }

      return (
        <div id="main-div">
          <div id="event-info">
            <span id="date">{date} </span>
            <span id="time">{time}</span>
          </div>

          <div className="w3-container" id="instinctContainer">
            <ul id="instinctList">{listify(finishedInstinct, "Instincts")} </ul>
          </div>
          <div className="w3-container" id="mysticContainer">
            <ul id="mysticList">{listify(finishedMystic, "Mystics")} </ul>
          </div>
          <div className="w3-container" id="valorContainer">
            <ul id="valorList">{listify(finishedValor, "Valors")}</ul>
          </div>
        </div>
      );
    }
    if (counter === 2) {
      return <p id="noEntries">No EX Raid Scheduled</p>;
    }
  }

  copyToClicpboard = e => {
    this.refs.input.select();
    document.execCommand("copy");
    return false;
  };
  render() {
    if (this.state.entries.length === 0) {
      counter++;
    }

    // console.log("finsihed entries ", finishedEntries[0]);
    // const mappedEntries = this.state.entries[0].map(data => {
    //   <li> {data}</li>;
    // });

    //   "Lamoine Park, Richmond (Cheese Park)"
    // ].toArray();
    // const ele = location["elements"];

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
    console.log(params.location);
    // console.log("printing it now", this.state.google_sheet[params.location]);
    // const finished = this.state.entries.map(data => {
    //   <li>{data}</li>;
    // });
    // console.log(finished);

    return (
      <div>
        <h1>{params.location} </h1>
        <p id="noEntries" />
        <div>{this.makeList(this.state.entries, counter)}</div>
        <textarea id="raidlist" ref="input" type="text" value={copyString} />
        <div className="form-group">
          <button
            type="button"
            className="racopy btn btn-primary"
            data-toggle="tooltip"
            title="Copied"
            data-clipboard-target="#raidlist"
            onClick={this.copyToClicpboard}
          >
            Copy
          </button>
        </div>
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
