import React, { Component } from "react";
// import { connect } from "react-redux";
// import Subtotal from "./subtotal";
import { Table, TableCell, TableRow, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./product.css";

export default class Product extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Table className="product-table">
            <TableRow>
              <TableCell className="table-title">Product</TableCell>
              <TableCell className="table-title">Price</TableCell>
              <TableCell className="table-title">Qty</TableCell>
              <TableCell className="table-title">Cost</TableCell>
            </TableRow>

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
              <TableCell className="table-info">Cost</TableCell>
              <IconButton className="delete-icon" aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </TableRow>

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
              <IconButton className="delete-icon" aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </TableRow>

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
              <IconButton className="delete-icon" aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </TableRow>

            <TableRow />

            <TableRow>
              <TableCell className="cost"> Subtotal </TableCell>
              <TableCell> </TableCell>
              <TableCell> </TableCell>
              <TableCell className="cost">dynamic price</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="cost">VAT @ 20% </TableCell>
              <TableCell> </TableCell>
              <TableCell> </TableCell>
              <TableCell className="cost">dynamic price</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="total-cost">Total Cost</TableCell>
              <TableCell> </TableCell>
              <TableCell> </TableCell>
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

// <Table striped>
//   <thead>
//     <th>Product</th>
//     <th>Price</th>
//     <th>Qty</th>
//     <th>Cost</th>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Cotton T-Shirt, Medium</td>
//       <td>£1.99</td>
//       <td>
//
//         <input
//
//       </td>
//       <td>viried cost</td>
//     </tr>
//
//     <tr>
//       <td>Baseball Cap, One Size</td>
//       <td>£2.99</td>
//       <td>input field</td>
//       <td>viried cost</td>
//     </tr>
//
//     <tr>
//       <td>Swim Shorts, Medium</td>
//       <td>£3.99</td>
//       <td>input field</td>
//       <td>viried cost</td>
//     </tr>
//   </tbody>
// </Table>
