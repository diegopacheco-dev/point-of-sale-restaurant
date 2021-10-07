import React, { createContext, useReducer } from "react";
import { AuthActions } from "../actions/AuthActions";
import AuthReducer from "../reducers/AuthReducer";

export const initialStateAuth = {
  isAuth: false,
  loading: false,
  id: "",
  name: "",
  email: "",
};

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(
    AuthReducer,
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : initialStateAuth
  );

  const authStateProps = {
    // Estados
    ...state,
    // funciones
    ...AuthActions(state, dispatch),
  };

  return (
    <AuthContext.Provider value={authStateProps}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
