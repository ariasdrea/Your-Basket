import React, { Component } from "react";
import "./App.css";
import Logo from "./logo";
import Info from "./info";
import Product from "./product";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

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
