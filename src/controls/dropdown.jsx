import React, { useState, useRef } from "react";
import clsx from "clsx";
import Button from "./button";

import "./dropdown.css";

const Dropdown = ({ value, setValue, options, className }) => {
  const [showOptions, setShowOptions] = useState(false);
  const lastValue = useRef(value);

  if (showOptions && value !== lastValue.current) {
    // hide options if value was changed outside of this control
    setShowOptions(false);
  }

  lastValue.current = value;

  return (
    <div
      className={clsx(
        "dropdown",
        { "dropdown-active": showOptions },
        className
      )}
    >
      <Button
        caption={value}
        className={"dropdown-button"}
        onClick={() => setShowOptions(s => !s)}
      />
      {showOptions && (
        <div className="dropdown-options">
          {options.map(name => (
            <Button
              key={name}
              caption={name}
              className={clsx("dropdown-item", {
                "dropdown-item-selected": name === value
              })}
              onClick={() => {
                setShowOptions(false);
                setValue(name);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
