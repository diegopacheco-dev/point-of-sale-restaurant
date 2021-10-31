import React from "react";
import { Switch, Route } from "react-router";
import AdministrarPage from "../../components/05-pages/Administrar/AdministrarPage";
import ClientesPage from "../../components/05-pages/Clientes/ClientesPage";
import PedidosPage from "../../components/05-pages/Pedidos/PedidosPage";
import PosPage from "../../components/05-pages/POS/PosPage";
import MainLayout from "../../mainLayout";
import CartState from "../../context/states/CartState";
import DetallePedidoPage from "../../components/05-pages/DetallePedido/DetallePedidoPage";

const AdminRouter = () => {
  return (
    <>
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
            <Route exact path="/administrar" component={AdministrarPage} />
          </Switch>
        </MainLayout>
      </CartState>
    </>
  );
};

export default AdminRouter;
