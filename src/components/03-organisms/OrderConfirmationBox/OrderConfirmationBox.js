import React, { useContext, useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";
import "./styles.css";
import Button from "../../01-atoms/Buttons/Button/Button";
import Heading from "../../01-atoms/Heading/Heading";
import ButtonWithIcon from "../../01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon";
import ListCartItems from "../ListCartItems/ListCartItems";
import { CartContext } from "../../../context/states/CartState";
import Swal from "sweetalert2";
import Loader from "../../01-atoms/Loader/Loader";

const OrderConfirmationBox = ({ onToggle = () => {} }) => {
  const {
    items,
    cliente,
    monto_total,
    monto_pagado,
    estado_pedido,
    SetEstadoPedidoAction,
    SetPagarMontoAction,
    cleanShoppingCartAction,
  } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const handleChangeInputPagarMonto = (e) => {
    if (e.target.value >= 0 && e.target.value <= monto_total) {
      const num = e.target.value.replace(/^0/, (c) => "");
      SetPagarMontoAction(+num);
    }
  };

  const crearPedido = () => {
    Swal.fire({
      title: "Desea crear el pedido?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#814c3b",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then(async (rpta) => {
      if (rpta.isConfirmed) {
        setLoading(true);
        try {
          const docRef = await addDoc(collection(db, "pedidos"), {
            cliente,
            estado_pedido,
            monto_total,
            monto_pagado,
            items,
            fecha_creacion: serverTimestamp(),
          });
          if (docRef.id) {
            cleanShoppingCartAction();
            onToggle();
            Swal.fire({
              title: "Pedido creado exitosamente",
              icon: "success",
              timer: 2500,
            });
          }
          setLoading(false);
        } catch (err) {
          console.log("Error al crear el pedido: ", err);
          setLoading(false);
        }
      }
    });
  };


  // Controla que el componente no se muestre cuando haya 0 items en el carrito
  useEffect(() => {
    let mounted = true;
    if (mounted && items.length === 0) {
      onToggle();
    }
    return () => {
      mounted = false;
    };
  }, [items.length, onToggle]);

  return (
    <div className="order-confirmation-box">
      <div className="order-confirmation-box__header">
        <Heading>Confirmar Órden</Heading>
      </div>

      <div className="order-confirmation-box__body">
        <ListCartItems />
      </div>

      <div className="order-confirmation-box__footer">
        <Heading size="sm">Estado de Pedido</Heading>
        <div className="status-order-buttons">
          <Button
            action={() => SetEstadoPedidoAction("pendiente")}
            size="sm"
            variant={`${estado_pedido === "entregado" ? "secondary" : "primary"}`}
          >
            Pendiente
          </Button>
          <Button
            action={() => SetEstadoPedidoAction("entregado")}
            size="sm"
            variant={estado_pedido === "entregado" ? "primary" : "secondary"}
          >
            Entregado
          </Button>
        </div>
        <div className="order-total">
          <Heading size="sm">Total</Heading>
          <Heading size="sm">S/ {monto_total.toString()}</Heading>
        </div>
        <Heading size="sm" align="center">
          Pagar
        </Heading>
        <div className="pay-buttons">
          <ButtonWithIcon
            id="pagarCompleto"
            idSelected={monto_pagado === monto_total ? "pagarCompleto" : ""}
            onClick={() => SetPagarMontoAction(monto_total)}
            type="categoria"
          >
            Pagar S/{monto_total}
          </ButtonWithIcon>
          <input
            type="number"
            className={`pay-fraction ${monto_pagado >= 0 ? "active" : ""}`}
            value={monto_pagado}
            onChange={handleChangeInputPagarMonto}
            min="0"
          />
        </div>

        <div className="confirmation-buttons">
          {loading ? <Loader size="sm" /> : null}
          {!loading ? (
            <>
              <Button action={onToggle} variant="secondary">
                Cancelar
              </Button>
              <Button action={crearPedido}>Confirmar</Button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationBox;
