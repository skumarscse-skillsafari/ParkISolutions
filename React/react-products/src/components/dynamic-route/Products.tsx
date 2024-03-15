import products from "../../data";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>Show more...</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
