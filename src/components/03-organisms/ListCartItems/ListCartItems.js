import React from "react";
import "./styles.css";
import CartArticle from "../../02-molecules/CartArticle/CartArticle";

const ListCartItems = ({ listItems = [], DeleteItemAction = () => {} }) => {
  return (
    <div className="list-cart-items">
      {listItems.map((item) => (
        <CartArticle
          key={item.id}
          // onClick={() => DeleteItemAction(item.id)}
          deleteItemAction={DeleteItemAction}
          name={item.nombre}
          id={item.id}
          price={item.precio}
        />
      ))}
    </div>
  );
};

export default ListCartItems;
