import { useReducer, useContext, createContext, useEffect } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContextState = createContext<any>(null);

const CartContext = ({ children }: any) => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatchCart({ type: "INIT_PRODUCTS", payload: data }));
  }, []);

  const [cart, dispatchCart] = useReducer(cartReducer, {
    cart: [],
    products: [],
  });

  return (
    <CartContextState.Provider value={{ cart, dispatchCart }}>
      {children}
    </CartContextState.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContextState);
};

export default CartContext;
