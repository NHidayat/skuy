import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

import { connect } from "react-redux";
import CartItem from "./components/CartItem";
import { formatNum } from "../utility/function";

function Cart({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let price = 0;
    let items = 0;
    cart.forEach((item) => {
      price += item.qty * item.price;
      items += item.qty;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, setTotalPrice, totalItems, totalItems]);

  return (
    <div className="container">
      <div className="cart-section">
        <div className="cart">
          <div className="cart-header">
            <span>Keranjang</span>
          </div>
          <div className="cart-body">
            <div className="list-item">
              {cart.map((item) => (
                <CartItem key={item.id} itemData={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="calculation-box">
          <div className="box-header">
            <span className="title">Ringkasan Belanja</span>
          </div>
          <div className="box-body">
            <span>Total Item : {totalItems} barang</span>
          </div>
          <div className="box-footer">
            <div className="total">
              <span className="title">Total Harga</span>
              <span className="title">{formatNum(totalPrice)}</span>
            </div>
            <div className="btn-section">
              <Link to={"#"} className="btn btn-primary btn-full btn-lg">
                Beli Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
