import { getAuth, signOut } from "firebase/auth";
import { LOGIN, LOGOUT } from "../types";

// esta funcion es solo un contenedor para las acciones del authstate
export const AuthActions = (state, dispatch) => {
  const auth = getAuth();

  const loginAction = (user) => {
    dispatch({ type: LOGIN, payload: user });
  };

  const logoutAction = () => {
    signOut(auth)
      .then(() => {
        console.log("logout");
        dispatch({ type: LOGOUT });
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  };

  return { loginAction, logoutAction };
};
