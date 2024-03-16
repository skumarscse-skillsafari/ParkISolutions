import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { initProducts } from "../features/productsSlice";
import Product from "./Product";
import { getProducts } from "../features/productsSlice";
const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { products, status } = useSelector((state: any) => state?.products);
  const { cart } = useSelector((state: any) => state?.cart);
  console.log(products);

  if (status === "loading") return <h2>Loading....</h2>;
  if (status === "error") return <h2>Something went wrong....</h2>;
  return (
    <div>
      <Link to="/cart">Cart ({cart.length})</Link>
      <hr />
      <h2>Products</h2>

      {products.map((product: any) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
