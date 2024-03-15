import { CartState } from "../Context/CartContext";
import Product from "../../ContextAPI/pages/Product";
import { Link } from "react-router-dom";

const Products = () => {
  // console.log(CartState()?.cart?.products);
  let products = CartState()?.cart?.products;
  // console.log(products);
  let cartLength = CartState()?.cart?.cart?.length;
  return (
    <div>
      <Link to="/cart">Cart ({cartLength})</Link>
      <hr />
      <h2>Products</h2>
      {products.map((product: any) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
