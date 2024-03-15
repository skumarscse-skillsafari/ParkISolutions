import { useState } from "react";
import { CartState } from "../Context/CartContext";
const Product = ({ product }: any) => {
  // CartState() // {cart: {cart:..., products:...}, dispatchCart}
  // CartState().dispatchCart
  const dispatch = CartState()?.dispatchCart;
  const [add, setAdd] = useState(false);
  //   console.log(CartState());
  function addToCart() {
    dispatch({ type: "ADD_TO_CART", payload: product });
    setAdd((current) => !current);
  }
  function removeFromCart(e: any) {
    e.preventDefault();
    console.log(e.target.id);
    dispatch({ type: "REMOVE_FROM_CART", payload: e.target.id });
    setAdd((current) => !current);
  }
  return (
    <div>
      <h2>Product</h2>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>
        <img src={product.image} alt={product.title} height={100} width={100} />
      </p>
      <button onClick={add ? removeFromCart : addToCart} id={product.id}>
        {add ? "Remove from cart" : "Add to cart"}
      </button>
      <hr />
    </div>
  );
};

export default Product;
