import { Link } from "react-router-dom";
import { CartState } from "../Context/CartContext";

const Cart = () => {
  console.log(CartState()?.cart?.cart);
  const cartData = CartState().cart.cart;
  const dispatch = CartState().dispatchCart;
  return (
    <div>
      <Link to="/">Back to products</Link>
      <hr />
      {cartData.map((data: any) => {
        return (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>
              <img src={data.image} alt={data.title} height={100} width={100} />
            </p>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: data.id })
              }
            >
              Remove from cart
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
