import React, { useEffect, useState } from "react";
import { formatNum } from "../../utility/function";
import StarRating from "../../components/StarRating";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../redux/Shopping/shopping-actions";
import { Link } from "react-router-dom";

const Product = ({ currentItem, addToCart, productId, loadCurrentItem }) => {
  const [qty, setQty] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [openModal, setModal] = useState(false);

  useEffect(() => {
    loadCurrentItem(productId);
  }, [loadCurrentItem, productId]);

  const add = (id, qty) => {
    addToCart(id, qty);
    setModal(true);
  };

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
      {currentItem && (
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
                  onClick={() => add(currentItem.id, qty)}
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
      )}
      <Modal
        className="custom-modal"
        open={openModal}
        onClose={() => setModal(false)}
        closeIcon={"x"}
        center
      >
        <div className="custom-modal-header">
          <img src="/cart-success.png" alt="" />
          <h3>Dimasukkan ke Keranjang Anda</h3>
        </div>
        <div className="custom-modal-btn">
          <button onClick={() => setModal(false)} className="btn btn-o-primary">
            Lanjut Belanja
          </button>{" "}
          <Link to="/cart" className="btn btn-primary" on>
            Cek Keranjang
          </Link>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    currentItem: state.shop.currentItem,
    productId: id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, qty) => dispatch(addToCart(id, qty)),
    loadCurrentItem: (id) => dispatch(loadCurrentItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
