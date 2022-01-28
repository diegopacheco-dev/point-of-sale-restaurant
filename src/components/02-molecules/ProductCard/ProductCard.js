import React from "react";
import "./styles.css";
import Button from "../../01-atoms/Buttons/Button/Button";
import Heading from "../../01-atoms/Heading/Heading";
import Img from "../../01-atoms/Img/Img";

import PropTypes from "prop-types";

const ProductCard = ({ photo, name = "", price, stock = "", action }) => {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <Img src={photo} alt={name} />
      </div>
      <div className="product-card__info">
        <Heading>
          {name.substring(0, 30)}
          {name.length > 29 && "..."}
        </Heading>
        {/* <Heading>{`${name.substring(0, 17)}${
          nombre.length > 17 ? "..." : ""
        }`}</Heading> */}
        <Heading size="sm">S/{price}</Heading>
        {/* <Heading size="xs" color="light">
          {stock} disponibles
        </Heading> */}
        <Button action={action} size="sm">
          Añadir
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stock: PropTypes.number,
  action: PropTypes.func.isRequired,
};

export default ProductCard;
