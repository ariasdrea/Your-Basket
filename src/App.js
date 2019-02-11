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

  handleClick() {}

  render() {
    return (
      <div className="App">
        <div>
          <Logo />
          <Info />
          <Product />
        </div>

        <div id="button-div">
          <button className="buy-btn" onClick={this.handleClick}>
            Buy Now ≫
          </button>
        </div>
        <footer>
          <strong>© 2013 AKQA Ltd.</strong> Registered in England: 2964394
        </footer>
      </div>
    );
  }
}
