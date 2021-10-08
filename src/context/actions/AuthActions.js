import { LOGIN, LOGOUT } from "../types";

// esta funcion es solo un contenedor para las acciones del authstate
export const AuthActions = (state, dispatch) => {
  const LoginAction = (user) => {
    localStorage.setItem("user", JSON.stringify({ ...user, isAuth: true }));
    dispatch({ type: LOGIN, payload: user });
  };

  const LogoutAction = () => {
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT });
  };

  return { LoginAction, LogoutAction };
};
