import React, { useContext, useState } from "react";
import ButtonShowCart from "../../01-atoms/Buttons/ButtonShowCart/ButtonShowCart";
import ChooseCategory from "../../03-organisms/ChooseCategory/ChooseCategory";
import ProductsContainer from "../../03-organisms/ProductsContainer/ProductsContainer";
import { CartContext } from "../../../context/states/CartState";
import "./styles.css";
import ShoppingCartBox from "../../03-organisms/ShoppingCartBox/ShoppingCartBox";
import { useFetchFirestore } from "../../../hooks/useFetchFirestore";

const PosPage = (props) => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [showOrderConfirmationBox, setShowOrderConfirmationBox] =
    useState(false);
  const [idCategoriaSeleccionada, setIdCategoriaSeleccionada] = useState(null);
  const { AddItemAction, items, cliente } = useContext(CartContext);

  // Consumiendo data categorias
  const { data: categorias, loading: loadingCategorias } =
    useFetchFirestore("categorias");

  // Consumiendo data productos
  const { data: productos, loading: loadingProductos } =
    useFetchFirestore("platos");

  const shoppingCartProps = {
    showShoppingCart,
    showOrderConfirmationBox,
    cliente,
    setShowShoppingCart,
    setShowOrderConfirmationBox,
  };

  return (
    <div className="pos-template">
      <div className="btn-showShoppingCart">
        <ButtonShowCart
          quantity={items?.length}
          action={() => setShowShoppingCart(true)}
        />
      </div>

      <div
        className="pos-template__main-container"
        onClick={() => setShowShoppingCart(false)}
      >
        <div className="header">
          <ChooseCategory
            seleccionarCategoria={setIdCategoriaSeleccionada}
            categorias={categorias}
            loading={loadingCategorias}
          />
        </div>

        <div className="body">
          <ProductsContainer
            productos={productos}
            loading={loadingProductos}
            AddItemAction={AddItemAction}
            idCategoriaSeleccionada={idCategoriaSeleccionada}
          />
        </div>
      </div>

      <ShoppingCartBox {...shoppingCartProps} />
    </div>
  );
};

export default PosPage;
