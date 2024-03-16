import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
const Product = ({ product }: any) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state?.products);
  const [toggle, setToggle] = useState(false);
  function addProduct(e: any) {
    e.preventDefault();
    const product = products.find((p: any) => p.id === +e.target.id);
    dispatch(addToCart(product));
    setToggle((current) => !current);
  }

  function removeProduct(e: any) {
    dispatch(removeFromCart(e.target.id));
    setToggle((current) => !current);
  }
  return (
    <div>
      <h2>Title: {product.title}</h2>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <p>
        <img src={product.image} alt={product.title} height={100} width={100} />
      </p>
      <button onClick={toggle ? removeProduct : addProduct} id={product.id}>
        {toggle ? "Remove from cart" : "Add to cart"}
      </button>
      <hr />
    </div>
  );
};

export default Product;
