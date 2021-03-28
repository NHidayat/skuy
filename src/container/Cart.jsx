import React, { useState, Fragment, useEffect } from "react";
import "./Cart.css";
import { formatNum } from "../utility/function";
import { Modal } from "react-responsive-modal";
import CartItem from "./components/CartItem";

import { connect } from "react-redux";
import { clearCart, selectedAll } from "../redux/Shopping/shopping-actions";

function Cart({
  cart,
  clearCart,
  cartCount,
  totalPrice,
  selectedAll,
  removeSelectedItem,
}) {
  const [openModal, setModal] = useState(0);
  const [allSelect, setAllSelect] = useState(true);

  useEffect(() => {
    let selected = [];
    cart.forEach((e) => {
      e.selected === true && selected.push(e);
    });
    selected.length === cart.length ? setAllSelect(true) : setAllSelect(false);
  }, [cart]);

  const clear = () => {
    clearCart();
    setModal(0);
  };

  const clearDirect = () => {
    clearCart();
    window.location.replace("/");
  };

  const handleSelectAll = (e) => {
    selectedAll(e.target.checked);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="cart-section">
          <div className="cart">
            <div className="cart-header">
              <div className="title">Keranjang</div>
              {cart.length > 0 ? (
                <div className="action">
                  <div>
                    <input
                      type="checkbox"
                      onChange={(e) => handleSelectAll(e)}
                      id="selectAll"
                      checked={allSelect}
                    />{" "}
                    <label htmlFor="selectAll">Pilih semua</label>
                  </div>
                  <div onClick={() => setModal(true)}>
                    <span>Kosongkan</span> <i className="bx bx-x-circle"></i>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="cart-body">
              <div className="list-item">
                {cart.length > 0 ? (
                  cart.map((item) => <CartItem key={item.id} itemData={item} />)
                ) : (
                  <div className="empty-cart-body">
                    Keranjangnya masih kosong nih
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="calculation-box">
            <div className="box-header">
              <span className="title">Ringkasan Belanja</span>
            </div>
            <div className="box-body">
              <span>Total Item : {cartCount} barang</span>
            </div>
            <div className="box-footer">
              <div className="total">
                <span className="title">Total Harga</span>
                <span className="title">{formatNum(totalPrice)}</span>
              </div>
              <div className="btn-section">
                {totalPrice ? (
                  <button
                    className="btn btn-primary btn-full btn-lg"
                    onClick={() => clearDirect()}
                  >
                    Beli Sekarang
                  </button>
                ) : (
                  <button className="btn btn-primary btn-full btn-lg" disabled>
                    Beli Sekarang
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="custom-modal"
        open={openModal}
        closeIcon={"x"}
        onClose={() => setModal(0)}
        center
      >
        <div className="custom-modal-header">
          <h5>Keranjangnya dikosongin nih?</h5>
        </div>
        <div className="custom-modal-btn">
          <button onClick={() => setModal(0)} className="btn btn-primary">
            Tidak
          </button>{" "}
          <button className="btn btn-o-primary" onClick={() => clear()}>
            iya
          </button>
        </div>
      </Modal>
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    cartCount: state.shop.cartCount,
    totalPrice: state.shop.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
    selectedAll: (value) => dispatch(selectedAll(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
