import { ADD, UPDATE_QUANTIFY, DELETE, SET_CLIENTE_PEDIDO } from "../types";

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

  return { AddItemAction, UpdateQuantityItemAction, DeleteItemAction, SetClientePedido };
};
