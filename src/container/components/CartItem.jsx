import React, { Fragment, useState } from "react";
import { formatNum } from "../../utility/function";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
} from "../../redux/Shopping/shopping-actions";

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(itemData.qty);

  const handleChange = (e) => {
    if (e === "up") {
      setInput(input + 1);
      adjustQty(itemData.id, input + 1);
    } else {
      if (input > 1) {
        setInput(input - 1);
        adjustQty(itemData.id, input - 1);
      }
    }
  };

  return (
    <Fragment>
      <div className="remove-item">
        <i
          className="bx bx-trash"
          onClick={() => removeFromCart(itemData.id)}
        ></i>
      </div>
      <div className="cart-item">
        <div className="item-image">
          <img src={"/img/" + itemData.image} alt="" />
        </div>
        <div className="item-body">
          <span className="title">{itemData.name}</span>
          <span className="price">{formatNum(itemData.price)}</span>
        </div>
        <div className="item-action">
          <button className="btn-qty" onClick={() => handleChange("down")}>
            <i className="bx bx-minus"></i>
          </button>
          <span className="num-qty">{input}</span>
          <button className="btn-qty" onClick={() => handleChange("up")}>
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
