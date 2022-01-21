import React from "react";
import Swal from "sweetalert2";
import Heading from "../../01-atoms/Heading/Heading";
import "./styles.css";

const DeliveryTimeline = ({ idPedido, estado, onAction = () => {} }) => {
  return (
    <div className="mb-4">
      <Heading size="md" align="center">
        Estado de la entrega
      </Heading>
      <div className="mt-4 d-flex justify-content-center">
        <div className="item-status">
          <p className="item-status-icon status-icon--active mb-1">
            <i className="bx bx-sm bxs-basket"></i>
          </p>
          <p className="status-caption status-caption--active">
            Orden <br /> Generada
          </p>
        </div>

        <div className="regla-status regla-status--active" />

        <div className="item-status">
          <p className="item-status-icon status-icon--active mb-1">
            <i className="bx bx-sm bxs-cart"></i>
          </p>

          <p className="status-caption status-caption--active">Pendiente</p>
        </div>

        <div
          className={
            estado === "entregado"
              ? "regla-status regla-status--active"
              : "regla-status"
          }
        />

        <div
          className="item-status"
          onClick={
            estado !== "entregado" ? onAction : undefined
          }
        >
          <p
            className={
              estado === "entregado"
                ? "item-status-icon status-icon--active mb-1"
                : "item-status-icon pulse-button mb-1 shadow"
            }
          >
            <i className="bx bx-md bx-check"></i>
          </p>

          <p
            className={
              estado === "entregado"
                ? "status-caption status-caption--active"
                : "status-caption"
            }
          >
            Entregado
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTimeline;
