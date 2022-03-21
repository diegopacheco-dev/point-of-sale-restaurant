import React, { createContext } from "react";
import useLocalStorageReducer from "../../hooks/useLocalStorageReducer";
import { CartActions } from "../actions/CartActions";
import CartReducer from "../reducers/CartReducer";

export const CartContext = createContext();

export const initialStateCart = {
  monto_total: 0,
  cliente: null,
  estado_pedido: "pendiente",
  fecha_creacion: "",
  monto_pagado: 0,
  items: [],
};

// ===== Componente Principal =====
const CartState = ({ children }) => {
  const [state, dispatch] = useLocalStorageReducer(
    "cart",
    CartReducer,
    initialStateCart
  );

  const cartStateProps = {
    ...state,
    // Funciones
    ...CartActions(state, dispatch),
  };

  return (
    <CartContext.Provider value={cartStateProps}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
