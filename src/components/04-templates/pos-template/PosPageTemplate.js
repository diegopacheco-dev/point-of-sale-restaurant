import React, { useState } from "react";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";
import "./styles.css";

const PosPageTemplate = (props) => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  return (
    <div className="pos-template">
      <div className="btn-showShoppingCart">
        <button onClick={() => setShowShoppingCart(true)}>Mostrar</button>
      </div>

      <div className="pos-template__main-container">
        <div className="header">
          <div style={{ height: "10rem", backgroundColor: "lightgray" }}>
            <h2>Header</h2>
          </div>
        </div>

        <div className="body">
          <div style={{ height: "45rem", backgroundColor: "lightgray" }}>
            <h2>Body</h2>
          </div>
        </div>
      </div>

      <div
        className={`pos-template__shoppingCart ${showShoppingCart && "show"}`}
      >
        <h2>Carrito</h2>
        <div className="btn-shoppingCart">
          <ButtonIcon nameIcon="x" action={() => setShowShoppingCart(false)} />
        </div>
      </div>
    </div>
  );
};

export default PosPageTemplate;
