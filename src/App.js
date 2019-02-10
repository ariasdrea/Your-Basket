import React, { Component } from "react";
import "./App.css";
import Logo from "./logo";
import Info from "./info";
import Product from "./product";
// import Subtotal from "./subtotal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Logo />
          <Info />
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
