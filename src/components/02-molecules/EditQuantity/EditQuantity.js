import React from "react";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";
import Heading from "../../01-atoms/Heading/Heading";
import './styles.css';
import PropTypes from 'prop-types';

const EditQuantity = ({cantidad=0, action}) => {
    action = () => alert("hola mundo");

  return (
    <div className="edit-quantity">
      <ButtonIcon action={() => action("add")} nameIcon="chevron-down" type="secondary" sizeIcon="sm"/>
      <Heading size="">{cantidad}</Heading>
      <ButtonIcon action={() => action("subtract")} nameIcon="chevron-up" type="secondary" sizeIcon="sm"/>
    </div>
  );
};

export default EditQuantity;

EditQuantity.propTypes = {
    cantidad: PropTypes.number.isRequired,
}