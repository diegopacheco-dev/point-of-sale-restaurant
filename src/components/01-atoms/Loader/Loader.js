import React from "react";
import "./styles.css";

const Loader = ({ size = "md", ...props }) => {
  return (
    <div className="loader-wrapper" {...props}>
      <div className={`loader ${size}`}></div>
    </div>
  );
};

export default Loader;
