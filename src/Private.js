import React from "react";
import { Redirect, Route } from "react-router";

const Private = ({ path, component: Component }) => {
  const isAuth = true;
  const loading = false;

  return loading ? (
    <h2>Cargando...</h2>
  ) : isAuth ? (
    <Route path={path} component={Component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default Private;
