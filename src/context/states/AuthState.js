import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useReducer } from "react";
import { AuthActions } from "../actions/AuthActions";
import AuthReducer from "../reducers/AuthReducer";

export const initialStateAuth = {
  isAuth: false,
  id: "",
  name: "",
  email: "",
};

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const authFirebase = getAuth();
  const [state, dispatch] = useReducer(AuthReducer, initialStateAuth);

  const authStateProps = {
    // Estados
    ...state,
    // funciones
    ...AuthActions(state, dispatch),
  };

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        authStateProps.loginAction({
          isAuth: true,
          id: user.uid,
          name: user.displayName,
          email: user.email,
        });
      } else {
        authStateProps.logoutAction();
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={authStateProps}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
