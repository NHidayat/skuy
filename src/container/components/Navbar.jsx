import { Link } from "react-router-dom";
import "./Navbar.css";

import { connect } from "react-redux";

const Navbar = ({ cartCount }) => {
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
                <span className="badge">{cartCount}</span>
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
    cartCount: state.shop.cartCount,
  };
};
export default connect(mapStateToProps)(Navbar);
