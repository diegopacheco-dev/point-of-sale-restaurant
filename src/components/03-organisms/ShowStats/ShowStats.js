import React from "react";
import "./styles.css";
import Heading from "../../01-atoms/Heading/Heading";
import StatsCard from "../../02-molecules/StatsCard/StatsCard";

const ShowStats = ({ orders = [], loading = false }) => {
  console.log("orders ", orders);
  const pedidos_totales = orders.length;
  const monto_vendido = orders.reduce(
    (monto, order) => monto + order.monto_total,
    0
  );
  const por_cobrar =
    monto_vendido -
    orders.reduce((monto, order) => monto + order.monto_pagado, 0);

  console.log(
    "pagado ",
    orders.reduce((acum, order) => acum + order.monto_pagado, 0)
  );

  return (
    <div className="show-stats vertical-space-1">
      <Heading size="lg">Pedidos</Heading>
      <div className="show-stats__container">
        <StatsCard number={pedidos_totales} title="Pedidos Totales" />
        <StatsCard number={monto_vendido} title="Monto Vendido" />
        <StatsCard number={por_cobrar} title="Por cobrar" />
      </div>
    </div>
  );
};

export default ShowStats;
