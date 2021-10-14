// lOS REDUCER RECIBEN EL STATE Y EL OBJETO QUE LE MANDA EL DISPATCH
import { ADD, DELETE } from "../types";

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
    const { items } = state;
    const itemsActualizado = items.filter((item) => item.id !== payload);
    return {
      ...state,
      items: itemsActualizado,
      monto_total: calcularMontoTotal(itemsActualizado),
    };
  }
};

export default CartReducer;
