import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/states/CartState";
import Button from "../../01-atoms/Buttons/Button/Button";
import Heading from "../../01-atoms/Heading/Heading";
import CustomerCard from "../../02-molecules/CustomerCard/CustomerCard";
import ListCartItems from "../ListCartItems/ListCartItems";
import SearchAndAddCustomer from "../SearchAndAddCustomer/SearchAndAddCustomer";
import "./styles.css";

const ShoppingCart = ({ action }) => {
  const [areaError, setAreaError] = useState(null);
  const { monto_total, cliente, SetClientePedido, items } =
    useContext(CartContext);

  // ======== FALTA IMPLEMENTAR SEÑALAR EL AREA DE ERROR =========
  const handleConfirmPedido = () => {
    setAreaError(null);
    // validamos el carrito lleno y el cliente seleccionado
    if (items.length === 0) {
      setAreaError("carrito");
      return;
    }
    if (!cliente) {
      setAreaError("cliente");
      return;
    }
    action();
  };

  useEffect(() => {
    // reseteamos el areaError con cada cambio del carrito y nombre
    setAreaError(null);
  }, [items?.length, cliente]);

  return (
    <div className="shopping-cart">
      <div className="shopping-cart__header">
        <Heading align="center">Pedido</Heading>
        <div>
          <Heading size="xs">Cliente</Heading>
          {cliente ? (
            <CustomerCard
              name={`${cliente.nombre} ${cliente.apellidos}`}
              SetClientePedido={SetClientePedido}
              cliente={cliente}
            />
          ) : (
            <SearchAndAddCustomer
              // isAlert={areaError === "cliente" ? true : false}
              SetClientePedido={SetClientePedido}
            />
          )}
        </div>
      </div>

      <div className="shopping-cart__body">
        <div className="shopping-cart__body__header">
          <Heading size="sm">Item</Heading>
          <Heading size="sm">Precio</Heading>
        </div>
        <div className="shopping-cart__body__container">
          {items.length === 0 && <p className="empty-cart">Carrito vacío</p>}
          <ListCartItems />
        </div>
      </div>

      <div className="shopping-cart__footer">
        <div className="shopping-cart__footer__header">
          <Heading size="sm">Total</Heading>
          <Heading size="sm">S/ {monto_total}</Heading>
        </div>
        <Button
          disabled={items.length < 1 || !cliente}
          action={handleConfirmPedido}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
