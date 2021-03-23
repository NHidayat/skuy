import React, { Component } from "react";
import { Star, StarBorderOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Products.css";
import { products } from "../data";

class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="product-list">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="card-image">
                <img src={"img/" + item.image} alt="shoes" />
              </div>
              <div className="card-body">
                <div className="title">
                  <Link to="/a">{item.name}</Link>
                </div>
                <span className="price">Rp. {item.price}</span>
                <div className="rating">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StarBorderOutlined />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Product;
