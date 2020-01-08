import React from "react";

const TextBox = ({ placeholder, value, setValue, className }) => (
  <input
    tabIndex="0"
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={e => setValue(e.target.value)}
  />
);

export default TextBox;
