import React, { useContext } from "react";
import "./styles.css";
import Img from "../../01-atoms/Img/Img";
import Heading from "../../01-atoms/Heading/Heading";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";
import EditQuantity from "../EditQuantity/EditQuantity";
import { CartContext } from "../../../context/states/CartState";

const CartArticle = ({ item }) => {
  const { UpdateQuantityItemAction, DeleteItemAction } =
    useContext(CartContext);

  return (
    <div className="cart-article">
      <div className="cart-article__img">
        <Img src={item.imagen} alt="" />
      </div>

      <div className="cart-article__info">
        <div>
          <Heading size="xs">{item.nombre}</Heading>
          <ButtonIcon
            className="btn-delete-active"
            nameIcon="x"
            sizeIcon="sm"
            action={() => DeleteItemAction(item.id)}
          />
        </div>

        <div>
          <EditQuantity
            cantidad={item.cantidad}
            idItem={item.id}
            UpdateQuantityItemAction={UpdateQuantityItemAction}
          />
          <Heading size="sm" color="light">
            S/{item.precio.toString()}
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default CartArticle;
