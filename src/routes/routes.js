import AdministrarPage from "../components/05-pages/Administrar/AdministrarPage";
import ClientesPage from "../components/05-pages/Clientes/ClientesPage";
import PedidosCliente from "../components/05-pages/DetalleCliente/PedidosCliente";
import DetallePedidoPage from "../components/05-pages/DetallePedido/DetallePedidoPage";
import PedidosPage from "../components/05-pages/Pedidos/PedidosPage";
import PosPage from "../components/05-pages/POS/PosPage";

export const routes = [
  {
    path: "/",
    Component: PosPage,
    name: "Vender",
  },
  {
    path: "/pedidos",
    Component: PedidosPage,
    name: "Pedidos",
  },
  {
    path: "/pedidos/detalle-pedido/:id",
    Component: DetallePedidoPage,
  },
  {
    path: "/clientes",
    Component: ClientesPage,
    name: "Pedidos",
  },
  {
    path: "/clientes/pedidos-cliente/:id",
    Component: PedidosCliente,
  },
  {
    path: "/administrar",
    Component: AdministrarPage,
    name: "Clientes",
  },
];
