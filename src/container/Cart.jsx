import React, { useState, useEffect, Fragment } from "react";
import "./Cart.css";
import { formatNum } from "../utility/function";
import { Modal } from "react-responsive-modal";
import CartItem from "./components/CartItem";

import { connect } from "react-redux";
import { clearCart } from "../redux/Shopping/shopping-actions";

function Cart({ cart, clearCart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [openModal, setModal] = useState(0);

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

  const clear = () => {
    clearCart();
    setModal(0);
  };

  const clearDirect = () => {
    clearCart();
    window.location.replace("/");
  };

  return (
    <Fragment>
      <div className="container">
        <div className="cart-section">
          <div className="cart">
            <div className="cart-header">
              <div className="title">Keranjang</div>
              {cart.length > 0 ? (
                <div className="action" onClick={() => setModal(1)}>
                  <span>Kosongkan</span> <i class="bx bx-x-circle"></i>
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
              <span>Total Item : {totalItems} barang</span>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
