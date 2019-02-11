import React, { Component } from "react";
// import { connect } from "react-redux";
import { Table, TableCell, TableRow, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./product.css";

export default class Product extends Component {
  constructor(props) {
    super();
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.deleteQuantity = this.deleteQuantity.bind(this);
  }

  handleChange() {}

  deleteQuantity() {}

  render() {
    return (
      <div>
        <div>
          <Table className="product-table">
            {/* Table Titles */}
            <TableRow>
              <TableCell className="table-title">Product</TableCell>
              <TableCell className="table-title">Price</TableCell>
              <TableCell className="table-title">Qty</TableCell>
              <TableCell className="table-title">Cost</TableCell>
            </TableRow>

            {/* Row for Cotton T-Shirt (Item #1) */}
            <TableRow>
              <TableCell className="table-info">
                Cotton T-Shirt, Medium
              </TableCell>
              <TableCell className="table-info">£1.99</TableCell>
              <TableCell className="table-info">
                <form>
                  <input
                    className="quantity-change"
                    onChange={this.handleChange}
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                  />
                </form>
              </TableCell>
              <TableCell className="table-info">{this.price}</TableCell>
              {/* Delete Icon */}
              <IconButton
                className="delete-icon"
                aria-label="Delete"
                onClick={this.deleteQuantity}
              >
                <DeleteIcon />
              </IconButton>
            </TableRow>

            {/* Row for Baseball Cap (Item #2) */}
            <TableRow id="striped-row">
              <TableCell className="table-info">
                Baseball Cap, One Size
              </TableCell>
              <TableCell className="table-info">£2.99</TableCell>
              <TableCell className="table-info">
                <form>
                  <input
                    className="quantity-change"
                    onChange={this.handleChange}
                    type="number"
                    placeholder="2"
                    min="1"
                    max="10"
                  />
                </form>
              </TableCell>
              <TableCell className="table-info">Varied Cost</TableCell>
              {/* Delete Icon */}
              <IconButton
                className="delete-icon"
                aria-label="Delete"
                onClick={this.deleteQuantity}
              >
                <DeleteIcon />
              </IconButton>
            </TableRow>

            {/* Row for Swim Shorts (Item #3) */}
            <TableRow>
              <TableCell className="table-info">Swim Shorts, Medium</TableCell>
              <TableCell className="table-info">£3.99</TableCell>
              <TableCell className="table-info">
                <form>
                  <input
                    className="quantity-change"
                    onChange={this.handleChange}
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                  />
                </form>
              </TableCell>
              <TableCell className="table-info">Varied Cost</TableCell>
              {/* Delete Icon */}
              <IconButton
                className="delete-icon"
                aria-label="Delete"
                onClick={this.deleteQuantity}
              >
                <DeleteIcon />
              </IconButton>
            </TableRow>

            {/* This row adds a space */}
            <TableRow />

            {/* SUBTOTAL ROW - Price changes depending on selection */}
            <TableRow>
              <TableCell className="cost"> Subtotal </TableCell>
              <TableCell />
              <TableCell />
              <TableCell className="cost">dynamic price</TableCell>
            </TableRow>

            {/* VAT TAX ROW - Tax cost changes depending on selection */}
            <TableRow>
              <TableCell className="cost">VAT @ 20% </TableCell>
              <TableCell />
              <TableCell />
              <TableCell className="cost">dynamic price</TableCell>
            </TableRow>

            {/* TOTAL COST ROW*/}
            <TableRow>
              <TableCell className="total-cost">Total Cost</TableCell>
              <TableCell />
              <TableCell />
              <TableCell className="total-cost">total price</TableCell>
            </TableRow>
          </Table>
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
