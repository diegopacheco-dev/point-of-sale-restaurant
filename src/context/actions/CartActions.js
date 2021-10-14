import { ADD, UPDATE_QUANTIFY, DELETE } from "../types";

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

  return { AddItemAction, UpdateQuantityItemAction, DeleteItemAction };
};
