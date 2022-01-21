import React from "react";
import { HashRouter } from "react-router-dom";
import AuthState from "./context/states/AuthState";
import RootRouter from "./router/RootRouter";

const App = () => {
  return (
    <AuthState>
      <HashRouter>
        <RootRouter />
      </HashRouter>
    </AuthState>
  );
};

export default App;
