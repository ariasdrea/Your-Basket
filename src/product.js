import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Product);
