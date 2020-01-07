import React from "react";
import clsx from "clsx";
import "./button.css";

const Button = ({ className, children }) => (
  <div role="button" tabIndex="0" className={clsx("button", className)}>
    {children}
  </div>
);

export default Button;
