import React, { useEffect, useState } from "react";
import DataTable from "../../03-organisms/DataTable/DataTable";
import ShowStats from "../../03-organisms/ShowStats/ShowStats";
import { getDocs, collection, query } from "firebase/firestore";
import "../../04-templates/tablePage-template/styles.css";
import { db } from "../../../firebase/firebase";

const PedidosPage = () => {
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
        label: "Hora",
        field: "hora",
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
    rows: [],
  };

  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(false);

  const filas = pedidos.map((pedido) => {
    const fecha = new Date(pedido?.fecha_creacion?.seconds * 1000);
    return {
      nombre: `${pedido?.cliente?.nombre} ${pedido.cliente?.apellidos}`,
      fecha: fecha.toLocaleString().split(" ")[0],
      hora: fecha.toLocaleString().split(" ")[1],
      cantidad_platos: pedido.items.length,
      costo_total: `S/ ${pedido.monto_total}`,
      monto_pagado: `S/ ${pedido.monto_pagado}`,
      estado_entrega: pedido.estado_pedido,
      acciones: <button>Ver detalle</button>,
    };
  });

  data.rows = filas.length > 0 ? filas : [];

  useEffect(() => {
    const getPedidos = async () => {
      try {
        setLoading(true);
        const { docs } = await getDocs(collection(db, "pedidos"));
        const data = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPedidos(data);
        setLoading(false);
      } catch (err) {
        console.log("Error: ", err);
        setLoading(false);
      }
    };
    getPedidos();
  }, []);

  return (
    <div className="table-page-template">
      <div className="table-page-template__col-1">
        <div className="header">
          <ShowStats />
        </div>
        <div className="body">
          <DataTable title="Lista de Pedidos" data={data} loading={false} />
        </div>
      </div>
      <div className="table-page-template__col-2">
        {/* "<div style={{ height: "45rem", backgroundColor: "lightgray" }}>
          <h2>Aside</h2>
        </div>" */}
      </div>
    </div>
  );
};

export default PedidosPage;
