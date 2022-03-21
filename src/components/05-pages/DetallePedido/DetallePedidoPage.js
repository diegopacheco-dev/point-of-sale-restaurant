import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Heading from "../../01-atoms/Heading/Heading";
import DataTable from "../../03-organisms/DataTable/DataTable";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";
import "./styles.css";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";
import DeliveryTimeline from "../../02-molecules/deliveryTimeline/DeliveryTimeline";
import Swal from "sweetalert2";

const DetallePedidoPage = () => {
  const [reloadData, setReloadData] = useState(false);
  const history = useHistory();
  const { id } = useParams();
  const [pedido, setPedido] = useState({});
  const [loading, setLoading] = useState(false);

  const data = {
    columns: [
      {
        label: "Plato",
        field: "plato",
        sort: "asc",
      },
      {
        label: "Categoria",
        field: "categoria",
        sort: "asc",
      },
      {
        label: "Cantidad",
        field: "cantidad",
        sort: "asc",
      },
      {
        label: "Precio",
        field: "precio",
      },
      {
        label: "Total",
        field: "total",
      },
    ],
    rows: [],
  };

  const filas = pedido?.items?.map((plato) => ({
    plato: plato.nombre,
    categoria: plato.categoria.nombre,
    cantidad: plato.cantidad,
    precio: plato.precio,
    total: plato.cantidad * plato.precio,
  }));

  data.rows = filas?.length > 0 ? filas : [];

  const getPedido = async (id) => {
    try {
      setLoading(true);
      const response = await getDoc(doc(db, "pedidos", id));
      if (response.exists()) {
        setLoading(false);
        return {
          id: response.id,
          ...response.data(),
        };
      } else {
        setLoading(false);
        console.log("documento no encontrado");
        return "";
      }
    } catch (err) {
      setLoading(false);
      console.log("Error al traer el pedido ", err);
    }
  };

  const updateStatusDeliveryPedido = (pedido) => {
    Swal.fire({
      title: "Desea confirmar la entrega de este pedido",
      icon: "question",
      showCancelButton: true,
    }).then(async (rpta) => {
      if (rpta.isConfirmed) {
        try {
          await updateDoc(doc(db, "pedidos", pedido?.id), {
            ...pedido,
            estado_pedido: "entregado",
          });
          Swal.fire({
            title: "Pago actualizado exitosamente",
            icon: "success",
            timer: 2500,
          });
          setReloadData((prev) => !prev);
          setLoading(false);
        } catch (err) {
          console.log("Error al crear el cliente: ", err);
          setLoading(false);
        }
      }
    });
  };

  const pagarPedido = (pedido) => {
    Swal.fire({
      title: "Desea confirmar el pago de este pedido",
      icon: "question",
      showCancelButton: true,
    }).then(async (rpta) => {
      if (rpta.isConfirmed) {
        try {
          await updateDoc(doc(db, "pedidos", pedido?.id), {
            ...pedido,
            monto_pagado: pedido?.monto_total,
          });
          Swal.fire({
            title: "Pago actualizado exitosamente",
            icon: "success",
            timer: 2500,
          });
          setReloadData((prev) => !prev);
          setLoading(false);
        } catch (err) {
          console.log("Error al crear el cliente: ", err);
          setLoading(false);
        }
      }
    });
  };

  useEffect(() => {
    getPedido(id).then((data) => setPedido(data));
  }, [reloadData]);

  const fecha = new Date(pedido?.fecha_creacion?.seconds * 1000);

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
        <Heading>Detalle Pedido</Heading>
        <Heading>{fecha.toLocaleString().split(" ")[0]}</Heading>
      </div>

      {/* Top Container  */}
      <div className="body-top">
        <div className="delivery-status">
          <DeliveryTimeline
            estado={pedido?.estado_pedido}
            idPedido={pedido?.id}
            onAction={() => updateStatusDeliveryPedido(pedido)}
          />
        </div>

        <div className="cliente">
          {/* Cliente  */}
          <div className="">
            <div className="info">
              <Heading size="xs">Cliente: </Heading>

              <Heading size="sm">
                {pedido?.cliente?.nombre} {pedido?.cliente?.apellidos}
              </Heading>
            </div>

            <div className="info">
              <Heading size="xs">Celular: </Heading>

              <Heading size="sm">{pedido?.cliente?.celular}</Heading>
            </div>
          </div>

          {/* Status Pago  */}
          <div className="status-pago">
            {pedido?.monto_pagado === pedido?.monto_total ? (
              <div className="info">
                <Heading size="xs">Estado Pago: </Heading>
                <span className="badge-pedido pagado">Pagado</span>
              </div>
            ) : (
              <div className="info">
                <Heading size="xs">Estado Pago: </Heading>
                <button
                  style={{ outline: "none", border: "none" }}
                  className="badge-pedido debe pulse-button-pagar"
                  onClick={() => pagarPedido(pedido)}
                >
                  Pagar S/ {pedido?.monto_total - pedido?.monto_pagado}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Container  */}

      <div className="body-bottom">
        <DataTable data={data} title="Platos" loading={false} shadow={false} />
        <div className="total">
          <Heading size="xs">Total</Heading>
          <Heading size="lg">
            S/{" "}
            {Number.parseFloat(
              pedido?.monto_total ? pedido?.monto_total : 0
            ).toFixed(2)}
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default DetallePedidoPage;
