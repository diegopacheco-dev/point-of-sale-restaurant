import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import AuthState from "./context/states/AuthState";
import CartState from "./context/states/CartState";
import RootRouter from "./routes/Navigation";

const App = () => {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <AuthState>
        <CartState>
          <HashRouter>
            <RootRouter />
          </HashRouter>
        </CartState>
      </AuthState>
    </Suspense>
  );
};

export default App;
