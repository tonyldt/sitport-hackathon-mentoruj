import React from "react";
import "./Button.styles.scss";

const Button = ({ children }) => {
  return (
    <button className="Button">
            { children }
    </button>
  );
};

export default Button;