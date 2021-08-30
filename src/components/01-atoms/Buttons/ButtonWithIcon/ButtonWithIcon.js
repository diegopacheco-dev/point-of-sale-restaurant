import React from "react";
import './styles.css'
import 'boxicons'

const ButtonWithIcon = ({
  name = "Button",
  type="",
  onClick,
  id="",
  idSelected="",
  nameIcon="ghost",
  sizeIcon="md",
}) => {
  return (
    <div
    className={`buttonWidthIcon ${type.length > 0 && type}`}
    onClick={onClick}
    >
      <box-icon name={nameIcon} size={sizeIcon}></box-icon>
      <p>{name}</p>
    </div>
  );
};

export default ButtonWithIcon;
