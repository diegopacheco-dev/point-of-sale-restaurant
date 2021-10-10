import React from "react";
import "./styles.css";
import CartArticle from "../../02-molecules/CartArticle/CartArticle";

const ListCartItems = (items = []) => {
  return (
    <div className="list-cart-items">
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
      <CartArticle name="product" price={20}/>
    </div>
  );
};

export default ListCartItems;
