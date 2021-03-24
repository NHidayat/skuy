import React, { Fragment } from "react";

function StarRating(props) {
  return (
    <Fragment>
      <span style={{ marginRight: "8px" }}>{props.value}</span>
      {[...Array(parseInt(props.value)).keys()].map((x) => (
        <i className="bx bxs-star" key={x}></i>
      ))}
      {!Number.isInteger(props.value) && <i className="bx bxs-star-half"></i>}
    </Fragment>
  );
}

export default StarRating;
