import React, { createContext, useReducer } from "react";
import { CartActions } from "../actions/CartActions";
import CartReducer from "../reducers/CartReducer";

const ShopContext = createContext();

export const initialStateCart = {
  items: [],
};

const CartState = ({ children }) => {
  const [state, dispatch] = useReducer(
    CartReducer,
    localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : initialStateCart
  );

  const cartStateProps = {
    ...state,
    // Funciones
    ...CartActions(state, dispatch),
  };

  return (
    <ShopContext.Provider value={cartStateProps}>
      {children}
    </ShopContext.Provider>
  );
};

export default CartState;
