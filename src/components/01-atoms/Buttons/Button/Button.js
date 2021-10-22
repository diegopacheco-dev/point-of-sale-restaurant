import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  size = "md",
  type = "primary",
  action = () => {},
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      onClick={action}
      className={`button ${size} ${type}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
};
