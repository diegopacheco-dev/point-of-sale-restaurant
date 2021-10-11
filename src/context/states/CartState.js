import React, { createContext, useEffect, useReducer } from "react";
import useLocalStorageReducer from "../../hooks/useLocalStorageReducer";
import { CartActions } from "../actions/CartActions";
import CartReducer from "../reducers/CartReducer";
import { DELETE, UPDATE_MONTO_TOTAL } from "../types";

export const ShopContext = createContext();

export const initialStateCart = {
  items: [],
  monto_total: 0,
};

// ===== Componente Principal =====
const CartState = ({ children }) => {
  const [state, dispatch] = useLocalStorageReducer("cart", CartReducer, initialStateCart)
  // const [state, dispatch] = useReducer(
  //   CartReducer,
  //   (() => window.localStorage.getItem("cart") || initialStateCart)()
  // );

  const cartStateProps = {
    ...state,
    // Funciones
    ...CartActions(state, dispatch),
  };

  console.log("Estado ", state);

  return (
    <ShopContext.Provider value={cartStateProps}>
      {children}
    </ShopContext.Provider>
  );
};

export default CartState;
