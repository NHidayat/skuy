import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    cart.forEach((item) => {
      items += item.qty;
    });
    setTotalItems(items);
  }, [cart, totalItems, totalItems]);

  return (
    <nav className="header">
      <div className="container">
        <div className="navbar">
          <div className="nav-logo">
            <Link to="/">
              <h2>Skuy</h2>
            </Link>
          </div>
          <div className="nav-menu">
            <div className="menu-item">
              <Link to="/cart" title="Lihat Keranjang">
                <i className="bx bxs-shopping-bag-alt"></i>
                <span className="badge">{totalItems}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Navbar);
