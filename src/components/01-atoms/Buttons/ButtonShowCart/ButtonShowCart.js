import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import "./styles.css";

const ButtonShowCart = ({ action, quantity = 0 }) => {
  return (
    <div onClick={action} className="button-show-cart">
      <i class="bx bx-cart bx-sm"></i>
      <span className="quantity">{quantity}</span>
    </div>
  );
};

export default ButtonShowCart;
