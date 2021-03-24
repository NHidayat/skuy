import React, { useState } from "react";
import { products } from "../data";
import NumberFormat from "react-number-format";
import StarRating from "./components/StarRating";

function Product(props) {
  const id = props.match.params.id;
  const data = products.find((x) => x.id === Number(id));
  const [qty, setQty] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const changeQty = (e) => {
    if (e === "up") {
      setQty(qty + 1);
      setSubtotal(subtotal + data.price);
    }
    if (e === "down") {
      if (qty > 0) {
        setQty(qty - 1);
        setSubtotal(subtotal - data.price);
      }
    }
  };

  return (
    <div className="container">
      <div className="product-detail">
        <div className="product-image">
          <img src={"/img/" + data.image} alt="product" />
        </div>
        <div className="product-info">
          <div className="product-name">{data.name}</div>
          <div className="product-rating">
            <StarRating value={data.rating} />
          </div>
          <div className="product-price">
            <NumberFormat
              value={data.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp"}
            />
          </div>
          <div className="product-description">
            <span>Description</span>
            <p>{data.description}</p>
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
            <div className="sub-total">
              <NumberFormat
                value={subtotal}
                thousandSeparator={true}
                prefix={"Rp"}
                displayType={"text"}
              />
            </div>
          </div>
          <div className="btn-section">
            {qty ? (
              <button className="btn btn-primary btn-full">+ Keranjang</button>
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
}

export default Product;
