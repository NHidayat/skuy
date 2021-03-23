import React from "react";
import { products } from "../data";
import { Remove, Star, Add } from "@material-ui/icons";
// import  from "@material-ui/icons/Add";
import NumberFormat from "react-number-format";

function Product(props) {
  const id = props.match.params.id;
  const data = products.find((x) => x.id === Number(id));

  return (
    <div className="container">
      <div className="product-detail">
        <div className="product-image">
          <img src={"/img/" + data.image} alt="product" />
        </div>
        <div className="product-info">
          <div className="product-name">{data.name}</div>
          <div className="product-rating">
            <Star />
            <span>
              {data.rating} <small>({data.numReviewer} Review)</small>
            </span>
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
              <button className="btn-qty">
                <Remove />
              </button>
              <span className="num-qty">1</span>
              <button className="btn-qty">
                <Add />
              </button>
            </div>
            <div className="sub-total">
              <NumberFormat
                value={data.price}
                thousandSeparator={true}
                prefix={"Rp"}
                displayType={"text"}
              />
            </div>
          </div>
          <div className="btn-section">
            <button className="btn btn-primary btn-full">+ Keranjang</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
