import { useContext } from "react";
import { AuthContext } from "../context/states/AuthState";

const useAuth = () => {
  const { loginAction, isAuth, logoutAction } = useContext(AuthContext);
  return { loginAction, isAuth, logoutAction }; 
};

export default useAuth;
