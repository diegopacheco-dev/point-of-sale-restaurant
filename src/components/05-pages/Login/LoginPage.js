import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import "./styles.css";

const LoginPage = () => {
  const history = useHistory();
  const { loginAction, isAuth } = useAuth();
  const auth = getAuth();
  const [formState, setForm] = useState({
    email: "",
    password: "",
  });

  console.log("******** isAuth login ", isAuth);

  const handleChange = (e) => {
    setForm({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formState.email, formState.password)
      .then((rpta) => {
        if (rpta?.user) {
          console.log("login rpta : ", rpta);
          loginAction();
          history.push("/");
        }
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  };

  return (
    <div className="loginContainer">
      <div className="loginSection">
        <div className="loginWrapper">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label
                className="label-form"
                htmlFor="email"
                placeholder="usuario@gmail.com"
              >
                Email
              </label>
              <input
                className="input-form"
                onChange={handleChange}
                id="email"
                type="email"
                required
              />
            </div>
            <div className="form-group">
              <label className="label-form" htmlFor="password">
                Password
              </label>
              <input
                className="input-form"
                onChange={handleChange}
                id="password"
                type="password"
                required
              />
            </div>
            <button className="form-button" type="submit">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
      <div className="loginBackground"></div>
    </div>
  );
};

export default LoginPage;
