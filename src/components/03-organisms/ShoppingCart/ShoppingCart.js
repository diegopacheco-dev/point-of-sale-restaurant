import React, { useContext } from "react";
import { CartContext } from "../../../context/states/CartState";
import Button from "../../01-atoms/Buttons/Button/Button";
import Heading from "../../01-atoms/Heading/Heading";
import ListCartItems from "../ListCartItems/ListCartItems";
import SearchAndAddCustomer from "../SearchAndAddCustomer/SearchAndAddCustomer";
import "./styles.css";

const ShoppingCart = () => {
  const { monto_total, items, DeleteItemAction } = useContext(CartContext);

  const action = () => alert("confirmar carrito");
  return (
    <div className="shopping-cart">
      <div className="shopping-cart__header">
        <Heading>Pedido</Heading>
        <SearchAndAddCustomer />
      </div>

      <div className="shopping-cart__body">
        <div className="shopping-cart__body__header">
          <Heading>Item</Heading>
          <Heading>Precio</Heading>
        </div>
        <div className="shopping-cart__body__container">
          <ListCartItems
            DeleteItemAction={DeleteItemAction}
            listItems={items}
          />
        </div>
      </div>

      <div className="shopping-cart__footer">
        <div className="shopping-cart__footer__header">
          <Heading>Total</Heading>
          <Heading>S/ {monto_total}</Heading>
        </div>

        <Button action={action}>Continuar</Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
