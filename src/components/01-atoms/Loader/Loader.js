import React from "react";
import "./styles.css";

const Loader = ({ size = "md" }) => {
  return (
    <div className="loader-wrapper">
      <div className={`loader ${size}`}></div>
    </div>
  );
};

export default Loader;
