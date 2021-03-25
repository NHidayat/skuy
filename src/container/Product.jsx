import React, { useState } from "react";
import { formatNum } from "../utility/function";
import StarRating from "./components/StarRating";

import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/shopping-actions";

const Product = ({ currentItem, addToCart }) => {
  const [qty, setQty] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const changeQty = (e) => {
    if (e === "up") {
      setQty(qty + 1);
      setSubtotal(subtotal + currentItem.price);
    }
    if (e === "down") {
      if (qty > 0) {
        setQty(qty - 1);
        setSubtotal(subtotal - currentItem.price);
      }
    }
  };

  return (
    <div className="container">
      <div className="product-detail">
        <div className="product-image">
          <img src={"/img/" + currentItem.image} alt="product" />
        </div>
        <div className="product-info">
          <div className="product-name">{currentItem.name}</div>
          <div className="product-rating">
            <StarRating value={currentItem.rating} />
          </div>
          <div className="product-price">{formatNum(currentItem.price)}</div>
          <div className="product-description">
            <span>Description</span>
            <p>{currentItem.description}</p>
          </div>
        </div>
        <div className="product-action">
          <div className="title">
            <span>Atur jumlah</span>
          </div>
          <div className="quantity">
            <div className="qty">
              <button className="btn-qty" onClick={() => changeQty("down")}>
                <i className="bx bx-minus"></i>
              </button>
              <span className="num-qty">{qty}</span>
              <button className="btn-qty" onClick={() => changeQty("up")}>
                <i className="bx bx-plus"></i>
              </button>
            </div>
            <div className="sub-total">{formatNum(subtotal)}</div>
          </div>
          <div className="btn-section">
            {qty ? (
              <button
                onClick={() => addToCart(currentItem.id, qty)}
                className="btn btn-primary btn-full"
              >
                + Keranjang
              </button>
            ) : (
              <button className="btn btn-primary btn-full" disabled>
                + Keranjang
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, qty) => dispatch(addToCart(id, qty)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
