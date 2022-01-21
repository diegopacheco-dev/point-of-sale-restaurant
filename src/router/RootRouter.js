import { Switch, Route, Redirect } from "react-router-dom";
import AdministrarPage from "../components/05-pages/Administrar/AdministrarPage";
import ClientesPage from "../components/05-pages/Clientes/ClientesPage";
import PedidosCliente from "../components/05-pages/DetalleCliente/PedidosCliente";
import DetallePedidoPage from "../components/05-pages/DetallePedido/DetallePedidoPage";
import LoginPage from "../components/05-pages/Login/LoginPage";
import PedidosPage from "../components/05-pages/Pedidos/PedidosPage";
import PosPage from "../components/05-pages/POS/PosPage";
import CartState from "../context/states/CartState";
import useAuth from "../hooks/useAuth";
import MainLayout from "../mainLayout";

const LoginRoute = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Redirect to="/login" />
    </Switch>
  );
};

const PrivateRoute = () => {
  return (
    <CartState>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={PosPage} />
          <Route exact path="/pedidos" component={PedidosPage} />
          <Route
            exact
            path="/pedidos/detalle-pedido/:id"
            component={DetallePedidoPage}
          />
          <Route exact path="/clientes" component={ClientesPage} />
          <Route
            exact
            path="/clientes/pedidos-cliente/:id"
            component={PedidosCliente}
          />
          <Route exact path="/administrar" component={AdministrarPage} />
          <Redirect to="/" />
        </Switch>
      </MainLayout>
    </CartState>
  );
};

const RootRouter = () => {
  const { isAuth } = useAuth();

  return isAuth ? PrivateRoute() : LoginRoute();
};

export default RootRouter;
