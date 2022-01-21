import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DataTable from "../../03-organisms/DataTable/DataTable";
import ShowStats from "../../03-organisms/ShowStats/ShowStats";
import Button from "../../01-atoms/Buttons/Button/Button";
import { getDocs, collection } from "firebase/firestore";
import "../../04-templates/tablePage-template/styles.css";
import { db } from "../../../firebase/firebase";
import Heading from "../../01-atoms/Heading/Heading";
import ModalDetallePedido from "../../03-organisms/ModalDetallePedido/ModalDetallePedido";

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
      field: "acciones",
    },
  ],
  rows: [],
};

const PedidosPage = () => {
  const history = useHistory();
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpenModalPedido, setIsOpenModalPedido] = useState(false);
  const onToggleModalPedido = () => setIsOpenModalPedido(!isOpenModalPedido);
  const [dataPedidos, setDataPedidos] = useState();

  const generarDataTablaPedidos = (pedidos) => {
    const filas = pedidos.map((pedido) => {
      const goToDetail = (pedido) =>
        history.push(`/pedidos/detalle-pedido/${pedido?.id}`, "hola mundo");
      const fecha = new Date(pedido?.fecha_creacion?.seconds * 1000);
      return {
        nombre: `${pedido?.cliente?.nombre} ${pedido.cliente?.apellidos}`,
        fecha: fecha.toLocaleString().split(" ")[0],
        hora: fecha.toLocaleString().split(" ")[1],
        cantidad_platos: pedido.items.length,
        costo_total: `S/ ${pedido.monto_total}`,
        monto_pagado: `S/ ${pedido.monto_pagado}`,
        estado_entrega: pedido.estado_pedido,
        acciones: (
          <Button
            action={() => goToDetail(pedido)}
            size="sm"
            style={{ width: "8rem" }}
          >
            Ver detalle
          </Button>
        ),
      };
    });

    data.rows = filas.length > 0 ? filas : [];
    console.log("data ", data);
    setDataPedidos(data);
  };

  useEffect(() => {
    const getPedidos = async () => {
      try {
        setLoading(true);
        const { docs } = await getDocs(collection(db, "pedidos"));
        const data = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (Array.isArray(data)) {
          setPedidos(data);
          generarDataTablaPedidos(data);
        }
        setLoading(false);
      } catch (err) {
        console.log("Error: ", err);
        setLoading(false);
      }
    };
    getPedidos();
  }, []);

  const generateStats = () => {
    const pedidos_totales = pedidos?.length;
    const monto_vendido = pedidos?.reduce(
      (monto, pedido) => monto + pedido.monto_total,
      0
    );
    const por_cobrar =
      monto_vendido -
      pedidos?.reduce((monto, pedido) => monto + pedido.monto_pagado, 0);

    const stats = [
      {
        number: pedidos_totales,
        label: "Pedidos Totales",
      },
      {
        number: `S/ ${monto_vendido}`,
        label: "Monto Vendido",
      },
      {
        number: `S/ ${por_cobrar}`,
        label: "Por Cobrar",
      },
    ];
    return stats;
  };

  return (
    <>
      <ModalDetallePedido
        onToggle={onToggleModalPedido}
        isOpen={isOpenModalPedido}
      />
      <div className="table-page-template">
        <div className="table-page-template__col-1">
          <div className="header">
            <Heading size="lg">Pedidos</Heading>

            <ShowStats stats={generateStats()} />
          </div>
          <div className="body">
            <DataTable
              shadow={false}
              title="Lista de Pedidos"
              data={dataPedidos}
              loading={loading}
            />
          </div>
        </div>
        <div className="table-page-template__col-2">
          {/* "<div style={{ height: "45rem", backgroundColor: "lightgray" }}>
          <h2>Aside</h2>
        </div>" */}
        </div>
      </div>
    </>
  );
};

export default PedidosPage;
