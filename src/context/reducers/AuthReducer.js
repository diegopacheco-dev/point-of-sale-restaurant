import { initialStateAuth } from "../states/AuthState";
import { LOGIN, LOGOUT } from "../types";

const AuthReducer = (state = initialStateAuth, { type, payload }) => {
  if (type === LOGIN) {
    return {
      ...state,
      ...payload,
      isAuth: true,
      loading: false,
    };
  }

  if (type === LOGOUT) {
    return {
      ...initialStateAuth,
    };
  }
};

export default AuthReducer;
