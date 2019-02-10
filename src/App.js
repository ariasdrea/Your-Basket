import React, { Component } from "react";
import "./App.css";
import Logo from "./logo.js";
import Info from "./info.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Logo-header">
          <Logo />
          <Info />
        </header>
      </div>
    );
  }
}

export default App;

//
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
