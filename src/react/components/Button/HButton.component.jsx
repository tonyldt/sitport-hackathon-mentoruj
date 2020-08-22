import React from "react";
import "./HButton.styles.scss";

const HButton = ({ children }) => {
  return (
    <button className="HButton">
      { children }
    </button>
  );
};

export default HButton;