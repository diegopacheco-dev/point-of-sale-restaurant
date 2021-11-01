import React from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import Heading from "../../01-atoms/Heading/Heading";
import DataTable from "../../03-organisms/DataTable/DataTable";
import "./styles.css";

const DetallePedidoPage = () => {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();

  console.log("history state ", history.location.state);
  console.log("params ", params);
  console.log("location ", location);

  return (
    <div className="detalle-pedido">
      <Heading size="lg">Detalle Del Pedido</Heading>
      {/* CLIENTE  */}
      <div className="detalle-pedido__cliente">
        <Heading size="sm">Datos del Cliente</Heading>
        <div className="">
          <p>Nombre: </p>
          <Heading>Diego</Heading>
        </div>
        <div className="">
          <p>Apellidos: </p>
          <Heading>Pacheco Yave</Heading>
        </div>
        <div className="">
          <p>Celular: </p>
          <Heading>987 654 321</Heading>
        </div>
      </div>
      {/* STATUS DELIVERY  */}
      <div className="detalle-pedido__status-delivery">
        <Heading>Estado Delivery</Heading>
      </div>

      {/* LISTA DE PLATOS  */}
      <div className="detalle-pedido__lista-platos">
        <Heading>Lista de Platos</Heading>
        <DataTable />
      </div>
    </div>
  );
};

export default DetallePedidoPage;
