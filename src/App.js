import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <List />
        </div>
      </Router>
    );
  }
}

export default App;
