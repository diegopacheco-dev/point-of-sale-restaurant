import React, { useState } from "react";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";
import ChooseCategory from "../../03-organisms/ChooseCategory/ChooseCategory";
import ProductsContainer from "../../03-organisms/ProductsContainer/ProductsContainer";
import ShoppingCart from "../../03-organisms/ShoppingCart/ShoppingCart";
import "./styles.css";

const PosPage = (props) => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  return (
    <div className="pos-template">
      <div className="btn-showShoppingCart">
        <button onClick={() => setShowShoppingCart(true)}>Mostrar</button>
      </div>

      <div className="pos-template__main-container">
        <div className="header">
          <ChooseCategory />
        </div>

        <div className="body">
          <ProductsContainer />
        </div>
      </div>

      <div
        className={`pos-template__shoppingCart ${showShoppingCart && "show"}`}
      >
        <div className="btn-shoppingCart">
          <ButtonIcon nameIcon="x" action={() => setShowShoppingCart(false)} />
        </div>
        <ShoppingCart />
      </div>
    </div>
  );
};

export default PosPage;