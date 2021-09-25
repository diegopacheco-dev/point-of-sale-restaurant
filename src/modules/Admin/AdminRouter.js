import React from "react";
import { Switch, Route } from "react-router";
import AdministrarPage from "../../components/05-pages/Administrar/AdministrarPage";
import ClientesPage from "../../components/05-pages/Clientes/ClientesPage";
import PedidosPage from "../../components/05-pages/Pedidos/PedidosPage";
import PosPage from "../../components/05-pages/POS/PosPage";
import MainLayout from "../../mainLayout";

const AdminRouter = () => {
  return (
    <>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={PosPage} />
          <Route path="/pedidos" component={PedidosPage} />
          <Route path="/clientes" component={ClientesPage} />
          <Route path="/administrar" component={AdministrarPage} />
        </Switch>
      </MainLayout>
    </>
  );
};

export default AdminRouter;
