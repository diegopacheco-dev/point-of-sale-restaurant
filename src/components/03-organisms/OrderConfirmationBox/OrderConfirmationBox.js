import React, { useContext, useEffect } from "react";
import "./styles.css";
import Button from "../../01-atoms/Buttons/Button/Button";
import Heading from "../../01-atoms/Heading/Heading";
import ButtonWithIcon from "../../01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon";
import ListCartItems from "../ListCartItems/ListCartItems";
import { CartContext } from "../../../context/states/CartState";

const OrderConfirmationBox = ({ onToggle = () => {} }) => {
  const { items, monto_total } = useContext(CartContext);

  useEffect(() => {
    if (items.length === 0) {
      onToggle();
    }
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
          <Button size="sm">Pendiente</Button>
          <Button size="sm" type="secondary">
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
          <ButtonWithIcon type="categoria">Pagar</ButtonWithIcon>
          <input type="number" value="0" className="pay-fraction" />
        </div>

        <div className="confirmation-buttons">
          <Button action={onToggle} type="secondary">
            Cancelar
          </Button>
          <Button>Confirmar</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationBox;
