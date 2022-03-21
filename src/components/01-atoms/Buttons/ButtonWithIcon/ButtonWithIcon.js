import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const ButtonWithIcon = ({
  children = "Button",
  className = "",
  type = "categoria",
  onClick = () => {},
  id = "",
  idSelected = null,
  nameIcon = "ghost",
  sizeIcon = "md",
}) => {
  return (
    <div
      className={`buttonWidthIcon ${type} ${
        id === idSelected && "active"
      } ${className}`}
      onClick={onClick}
    >
      <i className={`icon bx bx-${nameIcon} bx-${sizeIcon}`}></i>
      <p>{children}</p>
    </div>
  );
};

export default ButtonWithIcon;

ButtonWithIcon.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["categoria", "menu"]).isRequired,
  onClick: PropTypes.func,
  id: PropTypes.string,
  idSelected: PropTypes.string,
  nameIcon: PropTypes.string,
  sizeIcon: PropTypes.oneOf(["sm", "md", "lg"]),
};
