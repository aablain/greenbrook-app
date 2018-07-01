import React, { Component } from "react";
import Home from "./Pages/Home";

import logo from "./logo.svg";
import "./Styles/Styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
