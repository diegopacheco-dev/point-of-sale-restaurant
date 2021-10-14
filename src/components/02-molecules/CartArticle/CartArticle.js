import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import Img from "../../01-atoms/Img/Img";
import Heading from "../../01-atoms/Heading/Heading";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";
import EditQuantity from "../EditQuantity/EditQuantity";

const CartArticle = ({
  name = "nombre del producto",
  id = "",
  price = 27,
  deleteItemAction,
}) => {
  return (
    <div className="cart-article">
      <div className="cart-article__img">
        <Img
          src="https://firebasestorage.googleapis.com/v0/b/pos-jorge-demo-portafolio.appspot.com/o/images%2Funnamed.png?alt=media&token=355e57b7-ce01-4b6a-b559-c47f02b45be6"
          alt=""
        />
      </div>

      <div className="cart-article__info">
        <div>
          <Heading size="xs">{name}</Heading>
          <ButtonIcon
            nameIcon="x"
            sizeIcon="sm"
            action={() => deleteItemAction(id)}
          />
        </div>

        <div>
          <EditQuantity cantidad={15} />
          <Heading size="sm" color="light">
            S/{price.toString()}
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default CartArticle;

CartArticle.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
