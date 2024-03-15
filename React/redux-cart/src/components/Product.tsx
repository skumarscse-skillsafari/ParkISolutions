import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { useState } from "react";
const Product = ({ product }: any) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button
        onClick={
          toggle
            ? () => {
                dispatch(removeFromCart(product.id));
                setToggle((current) => !current);
              }
            : () => {
                dispatch(addToCart(product));
                setToggle((current) => !current);
              }
        }
      >
        {toggle ? "Remove from cart" : "Add to cart"}
      </button>
      <hr />
    </div>
  );
};

export default Product;
