import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const ButtonIcon = ({
  nameIcon = "",
  type = "primary",
  sizeIcon = "md",
  className = "",
  action = () => {},
}) => {
  return (
    <i
      onClick={action}
      className={`button-icon ${type} icon bx bx-${nameIcon} bx-${sizeIcon} ${className}`}
    ></i>
  );
};

export default ButtonIcon;

ButtonIcon.propTypes = {
  nameIcon: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  sizeIcon: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.string,
};
