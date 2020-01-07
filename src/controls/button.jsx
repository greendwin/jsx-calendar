import React from "react";
import clsx from "clsx";
import "./button.css";

const Button = ({ caption, onClick, className, children }) => (
  <div
    role="button"
    tabIndex="0"
    className={clsx("button", className)}
    onClick={e => {
      if (onClick) {
        onClick();
      }

      // consume this click
      e.stopPropagation();
    }}
  >
    {caption}
    {children}
  </div>
);

export default Button;
