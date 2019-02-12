import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { TableCell, TableRow, IconButton } from "@material-ui/core";
import Cost from "./cost";
import "./productList.css";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Cotton T-Shirt, Medium",
          price: 1.99,
          qty: 1,
          cost: function() {
            return this.price * this.qty;
          }
        },
        {
          id: 1,
          title: "Baseball Cap, One Size",
          price: 2.99,
          qty: 2,
          cost: function() {
            return this.price * this.qty;
          }
        },
        {
          id: 2,
          title: "Swim Shorts, Medium",
          price: 3.99,
          qty: 1,
          cost: function() {
            return this.price * this.qty;
          }
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // change the qty of the input in the state and update/reflect the cost
  // make the state of that specific row change (how to change the cost for the input field that has a specific id)
  handleChange(e) {
    let newItems = this.state.items.map(item => {
      // utilizing the comparison operator because typeof e.target.id is a string
      if (item.id == e.target.id) {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          qty: parseInt(e.target.value),
          cost: item.cost
        };
      } else {
        return item;
      }
    });
    this.setState({
      items: newItems
    });
  }

  render() {
    return (
      <div className="product-container">
        <TableRow>
          <TableCell className="table-title">Product</TableCell>
          <TableCell className="table-title">Price</TableCell>
          <TableCell className="table-title">Qty</TableCell>
          <TableCell className="table-title">Cost</TableCell>
        </TableRow>

        {this.state.items.map((item, key) => {
          return (
            <TableRow>
              <TableCell className="table-info">{item.title}</TableCell>
              <TableCell className="table-info">£{item.price}</TableCell>
              <TableCell className="table-info">
                <form>
                  <input
                    className="quantity"
                    id={item.id}
                    onChange={this.handleChange}
                    defaultValue={item.qty}
                    type="number"
                    min="1"
                    max="10"
                  />
                </form>
              </TableCell>
              <TableCell className="table-info">
                {/* utilizing toFixed method to round integer to 2 decimal places*/}
                £{item.cost().toFixed(2)}
              </TableCell>
              {/* Delete Icon */}
              <IconButton
                className="delete-icon"
                aria-label="Delete"
                onClick={this.handleDelete}
              >
                <DeleteIcon />
              </IconButton>
            </TableRow>
          );
        })}
        <Cost />
      </div>
    );
  }
}
