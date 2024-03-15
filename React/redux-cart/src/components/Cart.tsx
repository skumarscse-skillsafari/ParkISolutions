import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state: any) => state.cart); // {products:[], cart: []}
  const dispatch = useDispatch();
  return (
    <div>
      {cart.map((product: any) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button onClick={() => dispatch(removeFromCart(product.id))}>
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
