import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { collection, doc, getDoc, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";
import Heading from "../../01-atoms/Heading/Heading";
import DataTable from "../../03-organisms/DataTable/DataTable";
import Button from "../../01-atoms/Buttons/Button/Button";
import "./styles.css";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";

const PedidosCliente = () => {
  const history = useHistory();
  const { id: clienteId } = useParams();
  const [cliente, setCliente] = useState("");
  const [loadingPedidos, setLoadingPedidos] = useState(false);
  const [pedidosCliente, setPedidosCliente] = useState([]);

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

  const getClienteData = async () => {
    const response = await getDoc(doc(db, "clientes", clienteId));
    if (response.exists()) {
      return {
        id: response.id,
        ...response.data(),
      };
    } else {
      console.log("documento no encontrado");
      return "";
    }
  };

  const getPedidosCliente = async (cliente) => {
    try {
      setLoadingPedidos(true);
      const { docs } = await getDocs(collection(db, "pedidos"));
      const data = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("todos los pedidos ", data);
      if (Array.isArray(data)) {
        const pedidos = data.filter(
          (pedido) => pedido?.cliente?.id === cliente?.id
        );
        generarDataTablaPedidos(pedidos);
      }
      setLoadingPedidos(false);
    } catch (err) {
      console.log("Error: ", err);
      setLoadingPedidos(false);
    }
  };

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
    setPedidosCliente(data);
  };

  useEffect(() => {
    getClienteData().then((data) => {
      setCliente(data);
      getPedidosCliente(data);
    });
  }, []);

  console.log("cliente data ", cliente);

  return (
    <div className="detalle-page">
      <span className="btn-back">
        <ButtonIcon
          action={() => history.goBack()}
          nameIcon="left-arrow-circle"
        />
      </span>
      {/* Header  */}
      <div className="header">
        <div className="title">
          <Heading align="center">
            Pedidos: {cliente?.nombre} {cliente?.apellidos}
          </Heading>
        </div>
        <div className="header-info">
          {/* <p>Cliente: </p>
          <Heading size="sm">
            {cliente?.nombre} {cliente?.apellidos}
          </Heading> */}
          <p>Celular: </p>
          <Heading size="sm">{cliente?.celular}</Heading>
        </div>
      </div>

      <div className="body">
        <DataTable data={pedidosCliente} loading={loadingPedidos} />
      </div>
    </div>
  );
};

export default PedidosCliente;
