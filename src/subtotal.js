import React, { Component } from "react";
import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";

export default class Subtotal extends Component {
  render() {
    return (
      <div>
        <TableRow id="sub-table">
          <TableCell className="table-title">Subtotal</TableCell>
          <TableCell className="table-title">subtotal price </TableCell>
        </TableRow>
      </div>
    );
  }
}
