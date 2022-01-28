import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import "./styles.css";
import styles from "./styles.module.css";
import Loader from "../../01-atoms/Loader/Loader";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState("");
  const history = useHistory();
  const { loginAction, isAuth } = useAuth();
  const auth = getAuth();
  const [formState, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, formState.email, formState.password)
      .then((rpta) => {
        if (rpta?.user) {
          console.log("login rpta : ", rpta);
          loginAction();
          history.push("/");
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err?.code === "auth/too-many-requests") {
          setMsgError("Demasiados intentos incorrectos, intente mas tarde");
        }
        if (
          err?.code === "auth/wrong-password" ||
          err?.code === "auth/user-not-found"
        ) {
          setMsgError("Email o password incorrectos");
        }
        console.log(err);
        setLoading(false);
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
            {msgError && <p className={styles.msgError}>{msgError}</p>}

            {!loading ? (
              <button className={styles.formButton} type="submit">
                Iniciar sesión
              </button>
            ) : null}
            {loading ? <Loader size="sm" /> : null}
          </form>
        </div>
      </div>
      <div className="loginBackground"></div>
    </div>
  );
};

export default LoginPage;
