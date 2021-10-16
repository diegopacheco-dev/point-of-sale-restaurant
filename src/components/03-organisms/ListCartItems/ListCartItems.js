import React, { useContext } from "react";
import "./styles.css";
import CartArticle from "../../02-molecules/CartArticle/CartArticle";
import { CartContext } from "../../../context/states/CartState";

const ListCartItems = () => {
  const { items } = useContext(CartContext);

  return (
    <div className="list-cart-items">
      {items?.map((item) => (
        <CartArticle key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListCartItems;
