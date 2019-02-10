import React from "react";
import "./info.css";

export default function Info() {
  return (
    <div className="basket-container">
      <h1 className="basket-info">Your Basket </h1>
      <p className="basket-info">
        Items you have added to your basket are shown below.
      </p>
      <p className="basket-info">
        Adjust the quanitites or remove items before continuing your purchase.
      </p>
    </div>
  );
}
