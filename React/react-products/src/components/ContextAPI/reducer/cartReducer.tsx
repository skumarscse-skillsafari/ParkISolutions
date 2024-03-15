const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INIT_PRODUCTS":
      // console.log(state);
      // console.log(action); // {cart:[], products: []}
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      // console.log(state);
      // console.log(action);
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((p: any) => +p.id !== +action.payload),
      };
    default:
      return state;
      break;
  }
};

export default cartReducer;
