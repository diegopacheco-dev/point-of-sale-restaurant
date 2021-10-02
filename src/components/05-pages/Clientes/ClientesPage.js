import React from "react";
import DataTable from "../../03-organisms/DataTable/DataTable";
import ShowStats from "../../03-organisms/ShowStats/ShowStats";
import "../../04-templates/tablePage-template/styles.css";

const ClientesPage = () => {
  const data = {
    columns: [
      {
        label: "Nombre",
        field: "nombre",
        sort: "asc",
      },
      {
        label: "Fecha",
        field: "fecha",
        sort: "asc",
      },
      {
        label: "Cantidad Platos",
        field: "cantidad_platos",
        sort: "asc",
      },
      {
        label: "Total",
        field: "costo_total",
        sort: "asc",
      },
      {
        label: "Monto Pagado",
        field: "monto_pagado",
        sort: "asc",
      },
      {
        label: "Entrega",
        field: "estado_entrega",
        sort: "asc",
      },
      {
        label: "Acciones",
        field: "acciones",
        sort: "asc",
      },
    ],
    rows: [
      {
        nombre: "Diego",
        fecha: "10/05/2020",
        cantidad_platos: 30,
        costo_total: `S/ ${50}`,
        monto_pagado: `S/ ${30}`,
        estado_entrega: "entregado",
        acciones: <button>Hola mundo</button>,
      },
      {
        nombre: "Diego",
        fecha: "10/05/2020",
        cantidad_platos: 30,
        costo_total: `S/ ${50}`,
        monto_pagado: `S/ ${30}`,
        estado_entrega: "entregado",
        acciones: <button>Hola mundo</button>,
      },
      {
        nombre: "Diego",
        fecha: "10/05/2020",
        cantidad_platos: 30,
        costo_total: `S/ ${50}`,
        monto_pagado: `S/ ${30}`,
        estado_entrega: "entregado",
        acciones: <button>Hola mundo</button>,
      },
      {
        nombre: "Diego",
        fecha: "10/05/2020",
        cantidad_platos: 30,
        costo_total: `S/ ${50}`,
        monto_pagado: `S/ ${30}`,
        estado_entrega: "entregado",
        acciones: <button>Hola mundo</button>,
      },
    ],
  };
  return (
    <div className="table-page-template">
      <div className="table-page-template__col-1">
        <div className="header">
          <ShowStats />
        </div>
        <div className="body">
          <DataTable data={data} title="Lista de clientes" loading={false} />
        </div>
      </div>
      {/* <div className="table-page-template__col-2"></div> */}
    </div>
  );
};

export default ClientesPage;
