import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productsSlice";
import Product from "./Product";
const Products = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: any) => state.cart); // {products:[], cart: []}
  const { products, status } = useSelector((state: any) => state.products); // {products:[], cart: []}
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "error") {
    return <h2>Something went wrong...</h2>;
  }
  return (
    <div>
      <h2>Cart ({cart.length})</h2>
      <hr />
      {products.map((product: any) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
