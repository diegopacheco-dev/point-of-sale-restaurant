import { initialStateAuth } from "../states/AuthState";
import { LOGIN, LOGOUT } from "../types";

const AuthReducer = (state = initialStateAuth, { type, payload }) => {
  if (type === LOGIN) {
    return {
      ...state,
      ...payload,
      isAuth: true,
    };
  }

  if (type === LOGOUT) {
    return {
      ...initialStateAuth,
    };
  }
};

export default AuthReducer;
