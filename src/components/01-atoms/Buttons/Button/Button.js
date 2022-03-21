import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  size = "md",
  variant = "primary",
  action = () => {},
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      onClick={action}
      {...props}
      className={`button ${size} ${variant} ${
        disabled && "disabled"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
