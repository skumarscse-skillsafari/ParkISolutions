import products from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="products">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;
