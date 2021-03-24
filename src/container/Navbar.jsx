import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
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
                <i class="bx bxs-shopping-bag-alt"></i>
              </Link>
              <span className="badge">2</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
