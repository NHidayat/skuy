import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { formatNum } from "../../utility/function";
import StarRating from "./StarRating";

import { connect } from "react-redux";
import { loadCurrentItem } from "../../redux/Shopping/shopping-actions";

const CardProduct = ({ data, loadCurrentItem }) => {
  return (
    <Fragment>
      <div className="product-card" key={data.id}>
        <div className="card-image">
          <Link
            to={"/product/" + data.id}
            // onClick={() => loadCurrentItem(data)}
          >
            <img src={"img/" + data.image} alt="shoes" />
          </Link>
        </div>
        <div className="card-body">
          <Link
            to={"/product/" + data.id}
            onClick={() => loadCurrentItem(data)}
          >
            <div className="title">{data.name}</div>
          </Link>
          <span className="price">{formatNum(data.price)}</span>
          <div className="rating">
            <StarRating value={data.rating} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CardProduct);
