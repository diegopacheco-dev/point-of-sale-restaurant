import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import Img from "../../01-atoms/Img/Img";
import Heading from "../../01-atoms/Heading/Heading";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";

const CartArticle = () => {
  return (
    <div className="cart-article">

      <div className="cart-article__img">
        <Img src="https://firebasestorage.googleapis.com/v0/b/pos-jorge-demo-portafolio.appspot.com/o/images%2Funnamed.png?alt=media&token=355e57b7-ce01-4b6a-b559-c47f02b45be6" alt="" />
      </div>

      <div className="cart-article__info">
        <div>
          <Heading size="xs">Frapuchino frapuchino</Heading>
          <ButtonIcon nameIcon="x" action="" sizeIcon="sm" action={() => alert("hola mundo")}/>
        </div>

        <div>
          <ButtonIcon nameIcon="chevron-down"/>
          <Heading size="">x2</Heading>
          <ButtonIcon nameIcon="chevron-up"/>
          <Heading size="" color="light">S/10</Heading>
        </div>
      </div>

    </div>
  );
};

export default CartArticle;
