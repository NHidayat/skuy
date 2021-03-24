import "./Product.css";
import { Link } from "react-router-dom";
import { products } from "../data";
import NumberFormat from "react-number-format";
import StarRating from "./components/StarRating";

function Home(props) {
  return (
    <div className="container">
      <div className="product-list">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="card-image">
              <Link to={"/product/" + item.id}>
                <img src={"img/" + item.image} alt="shoes" />
              </Link>
            </div>
            <div className="card-body">
              <Link to={"/product/" + item.id}>
                <div className="title">{item.name}</div>
              </Link>
              <span className="price">
                <NumberFormat
                  value={item.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp"}
                />
              </span>
              <div className="rating">
                <StarRating value={item.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
