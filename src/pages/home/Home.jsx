import "../product/Product.css";
import CardProduct from "../../components/CardProduct";

import { connect } from "react-redux";

const Home = ({ products }) => {
  return (
    <div className="container">
      <div className="product-list">
        {products.map((item) => (
          <CardProduct data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
export default connect(mapStateToProps)(Home);
