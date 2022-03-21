import React from "react";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";
import Heading from "../../01-atoms/Heading/Heading";
import "./styles.css";
import PropTypes from "prop-types";

const EditQuantity = ({
  cantidad = 0,
  idItem = "",
  UpdateQuantityItemAction = () => {},
}) => {
  return (
    <div className="edit-quantity">
      <ButtonIcon
        className="edit-quantity__active"
        action={() => {
          if (cantidad > 1) {
            UpdateQuantityItemAction("subtract", idItem);
          }
        }}
        nameIcon="chevron-down"
        type="secondary"
        sizeIcon="sm"
      />
      <Heading size="sm">{cantidad.toString()}</Heading>
      <ButtonIcon
        className="edit-quantity__active"
        action={() => UpdateQuantityItemAction("add", idItem)}
        nameIcon="chevron-up"
        type="secondary"
        sizeIcon="sm"
      />
    </div>
  );
};

export default EditQuantity;

EditQuantity.propTypes = {
  cantidad: PropTypes.number.isRequired,
};
