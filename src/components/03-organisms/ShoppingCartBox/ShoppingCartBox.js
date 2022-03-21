import React from "react";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";
import OrderConfirmationBox from "../OrderConfirmationBox/OrderConfirmationBox";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const ShoppingCartBox = ({showShoppingCart, showOrderConfirmationBox, cliente, setShowShoppingCart, setShowOrderConfirmationBox}) => {
  return (
    <div className={`pos-template__shoppingCart ${showShoppingCart && "show"}`}>
      <div className="btn-shoppingCart">
        <ButtonIcon nameIcon="x" action={() => setShowShoppingCart(false)} />
      </div>
      {showOrderConfirmationBox && cliente ? (
        <OrderConfirmationBox
          onToggle={() => setShowOrderConfirmationBox(false)}
        />
      ) : (
        <ShoppingCart action={() => setShowOrderConfirmationBox(true)} />
      )}
    </div>
  );
};

export default ShoppingCartBox;
