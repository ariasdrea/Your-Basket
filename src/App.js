import React, { Component } from "react";
import "./App.css";
import Logo from "./logo";
import Info from "./info";
import Product from "./product";
import Subtotal from "./subtotal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Info />
        <Product />
      </div>
    );
  }
}

export default App;

// <Subtotal />;

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
