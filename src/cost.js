import React, { Component } from "react";
// import { connect } from "react-redux";
import { TableCell, TableRow } from "@material-ui/core";

export default class Cost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TableRow>
          <TableCell className="cost"> Subtotal </TableCell>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell className="cost">price</TableCell>
        </TableRow>

        {/* VAT TAX ROW - Tax cost changes depending on selection */}
        <TableRow>
          <TableCell className="cost">VAT @ 20% </TableCell>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell className="cost"> price</TableCell>
        </TableRow>

        {/* TOTAL COST ROW*/}
        <TableRow>
          <TableCell className="total-cost">Total Cost</TableCell>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell className="total-cost">total </TableCell>
        </TableRow>
      </div>
    );
  }
}
