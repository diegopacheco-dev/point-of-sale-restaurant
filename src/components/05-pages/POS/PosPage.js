import React, { useContext, useState } from "react";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";
import ButtonShowCart from "../../01-atoms/Buttons/ButtonShowCart/ButtonShowCart";
import ChooseCategory from "../../03-organisms/ChooseCategory/ChooseCategory";
import ProductsContainer from "../../03-organisms/ProductsContainer/ProductsContainer";
import ShoppingCart from "../../03-organisms/ShoppingCart/ShoppingCart";
import { CartContext } from "../../../context/states/CartState";
import '../../04-templates/pos-template/styles.css';

const PosPage = (props) => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [idCategoriaSeleccionada, setIdCategoriaSeleccionada] = useState(null);
  const { AddItemAction, items} = useContext(CartContext);

  console.log("CATEGORIA SELECCIONADA", idCategoriaSeleccionada);
  // const seleccionarCategoria = (id) => setIdCategoriaSeleccionada(id);

  return (
    <div className="pos-template">
      <div className="btn-showShoppingCart">
        <ButtonShowCart
          quantity={items.length}
          action={() => setShowShoppingCart(true)}
        />
      </div>

      <div className="pos-template__main-container">
        <div className="header">
          <ChooseCategory seleccionarCategoria={setIdCategoriaSeleccionada} />
        </div>

        <div className="body">
          <ProductsContainer
            AddItemAction={AddItemAction}
            idCategoriaSeleccionada={idCategoriaSeleccionada}
          />
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
