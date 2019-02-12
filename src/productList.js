import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { TableCell, TableRow, IconButton } from "@material-ui/core";
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
      ],
      subtotal: 0,
      vat: function() {
        return this.subtotal * 0.2;
      },
      total: function() {
        return this.subtotal + this.vat();
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.calculateSubtotal = this.calculateSubtotal.bind(this);
  }

  //Handles change in quantity input field by updating the state
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
    this.setState(
      {
        items: newItems
      },
      () => {
        this.calculateSubtotal();
      }
    );
  }

  handleDelete(e) {
    console.log("e.currentTarget.id:", e.currentTarget.id);
    console.log("typeof e.currentTarget.id:", typeof e.currentTarget.id);
    let deleteQty = this.state.items.map(item => {
      if (item.id == e.currentTarget.id) {
        console.log("hi");
      }
    });
  }

  componentDidMount() {
    return this.calculateSubtotal();
  }

  calculateSubtotal() {
    // console.log("hello");
    let sub = 0;
    //loops through the state and adds each cost value to the sub variable which then gets added/updated to the subtotal state property
    let calculateSub = this.state.items.map(item => {
      // console.log("this.state:", this.state);
      // console.log("item.cost:", item.cost());
      return (sub += item.cost());
    });
    // console.log("sub", sub);
    this.setState({
      subtotal: sub
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
        {/* Created a single table row that will dynamically generate additional rows as it loops through the state object*/}
        {this.state.items.map(item => {
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
                {/* Utilizing toFixed method to round integer to 2 decimal places*/}
                £{item.cost().toFixed(2)}
              </TableCell>
              {/* Delete Icon */}
              <IconButton
                id={item.id}
                className="delete-icon"
                aria-label="Delete"
                onClick={this.handleDelete}
              >
                <DeleteIcon />
              </IconButton>
            </TableRow>
          );
        })}
        <div>
          {/*SUBTOTAL ROW*/}
          <TableRow>
            <TableCell className="cost">Subtotal</TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell className="cost">
              £{this.state.subtotal.toFixed(2)}
            </TableCell>
          </TableRow>

          {/* VAT TAX ROW */}
          <TableRow>
            <TableCell className="cost">VAT @ 20%</TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell className="cost">
              £{this.state.vat().toFixed(2)}
            </TableCell>
          </TableRow>

          {/* TOTAL COST ROW */}
          <TableRow>
            <TableCell className="total-cost">Total Cost</TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell className="total-cost">
              £{this.state.total().toFixed(2)}
            </TableCell>
          </TableRow>
        </div>
      </div>
    );
  }
}
