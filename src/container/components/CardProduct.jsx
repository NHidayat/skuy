import React, { Component } from "react";
import { Star, StarBorderOutlined } from "@material-ui/icons";

class CardProduct extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="card-image">
          <img
            src="https://lh3.googleusercontent.com/proxy/COWFf1wAwq6p5cCYFoFiQdDOTGcHoB-ydiSsNpkAJsaphBoHqryrQF7xJxLQVAnWWpRAZC5fGMzhHSKIX3Of9ajAmr9169RMWZ1v_ciHJMCuG6g"
            alt="shoes"
          />
        </div>
        <div className="card-body">
          <div className="product-title">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </div>
          <span className="price">Rp. 650.000</span>
          <div className="rating">
            <Star />
            <Star />
            <Star />
            <Star />
            <StarBorderOutlined />
          </div>
        </div>
      </div>
    );
  }
}

export default CardProduct;
