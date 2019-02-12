import React, { Component } from "react";
import ProductList from "./productList";
import "./product.css";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="product-div">
          <ProductList />
        </div>
      </div>
    );
  }
}
