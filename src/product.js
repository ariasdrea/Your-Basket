import React, { Component } from "react";
// import { connect } from "react-redux";
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

// const mapStateToProps = state => {
//   return {};
// };
//
// export default connect(mapStateToProps)(Product);
