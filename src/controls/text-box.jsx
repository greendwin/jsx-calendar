import React from "react";
import clsx from "clsx";

const TextBox = ({ placeholder, value, setValue, className }) => (
  <input
    tabIndex="0"
    className={clsx("text-box", className)}
    placeholder={placeholder}
    value={value}
    onChange={e => setValue(e.target.value)}
  />
);

export default TextBox;
