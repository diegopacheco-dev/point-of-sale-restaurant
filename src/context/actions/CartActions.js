import {
  ADD,
  UPDATE_QUANTIFY,
  DELETE,
  SET_CLIENTE_PEDIDO,
  SET_ESTADO_PEDIDO,
  SET_PAGAR_MONTO,
  CLEAN_SHOPPING_CART,
} from "../types";

export const CartActions = (state, dispatch) => {
  const AddItemAction = (objItem) => {
    dispatch({ type: ADD, payload: objItem });
  };

  const UpdateQuantityItemAction = (operation, idItem) => {
    dispatch({ type: UPDATE_QUANTIFY, payload: { operation, idItem } });
  };

  const DeleteItemAction = (idItem) => {
    dispatch({ type: DELETE, payload: idItem });
  };

  const SetClientePedido = (objCliente) => {
    dispatch({ type: SET_CLIENTE_PEDIDO, payload: objCliente });
  };

  const SetEstadoPedidoAction = (estado) => {
    dispatch({ type: SET_ESTADO_PEDIDO, payload: estado });
  };

  const SetPagarMontoAction = (monto) => {
    dispatch({ type: SET_PAGAR_MONTO, payload: monto });
  };

  const cleanShoppingCartAction = () => {
    dispatch({ type: CLEAN_SHOPPING_CART });
  };

  return {
    AddItemAction,
    UpdateQuantityItemAction,
    DeleteItemAction,
    SetClientePedido,
    SetEstadoPedidoAction,
    SetPagarMontoAction,
    cleanShoppingCartAction,
  };
};
