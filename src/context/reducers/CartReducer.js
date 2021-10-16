// lOS REDUCER RECIBEN EL STATE Y EL OBJETO QUE LE MANDA EL DISPATCH
import {
  ADD,
  DELETE,
  UPDATE_QUANTIFY,
  SET_CLIENTE_PEDIDO,
  SET_ESTADO_PEDIDO,
  SET_PAGAR_MONTO,
  CLEAN_SHOPPING_CART,
} from "../types";
import { initialStateCart } from "../states/CartState";

const calcularMontoTotal = (items) => {
  let nuevoMonto = items.reduce((suma, item) => {
    return (suma += item.precio * item.cantidad);
  }, 0);
  return nuevoMonto;
};

// ===== REDUCER =====
const CartReducer = (state, { type, payload }) => {
  if (type === ADD) {
    const { items } = state;

    let itemRepetido = items.find((item) => item.id === payload.id);

    if (itemRepetido) {
      itemRepetido.cantidad++;
      return {
        ...state,
        items: items,
        monto_total: calcularMontoTotal(items),
      };
    } else {
      items.push({
        nombre: payload.nombre,
        id: payload.id,
        categoria: payload.categoria_id,
        cantidad: 1,
        precio: payload.precio,
        imagen: payload.imagen,
      });

      return {
        ...state,
        items: items,
        monto_total: calcularMontoTotal(items),
      };
    }
  }
  if (type === DELETE) {
    let { items } = state;
    items = items.filter((item) => item.id !== payload);
    return {
      ...state,
      items: items,
      monto_total: calcularMontoTotal(items),
    };
  }
  if (type === UPDATE_QUANTIFY) {
    let { items } = state;
    let item = items.find((item) => item.id === payload.idItem);
    if (payload.operation === "add") {
      item.cantidad++;
    } else {
      if (item?.cantidad > 1) {
        item.cantidad--;
      }
    }
    return {
      ...state,
      items: items,
      monto_total: calcularMontoTotal(items),
      monto_pagado: 0,
    };
  }

  if (type === SET_CLIENTE_PEDIDO) {
    return {
      ...state,
      cliente: payload,
    };
  }

  if (type === SET_ESTADO_PEDIDO) {
    return {
      ...state,
      estado_pedido: payload,
    };
  }

  if (type === SET_PAGAR_MONTO) {
    return {
      ...state,
      monto_pagado: payload,
    };
  }

  if (type === CLEAN_SHOPPING_CART) {
    return { ...initialStateCart, items: [] };
  }
};

export default CartReducer;
