import React, { useState, useRef } from "react";
import clsx from "clsx";

import "./button-text-box.css";

const KEY_ENTER = 13;
const KEY_UP = 38;
const KEY_DOWN = 40;

const ButtonTextBox = ({ value, setValue, className }) => {
  const ctrl = useRef();
  const [text, setText] = useState(value);

  return (
    <input
      ref={ctrl}
      type="text"
      tabIndex="0"
      className={clsx("button-textbox", className)}
      value={text}
      onChange={e => setText(e.target.value)}
      onKeyDown={e => {
        if (e.keyCode === KEY_ENTER) {
          setValue(text);

          if (ctrl.current) {
            // lose focus
            ctrl.current.blur();
          }
        }

        // process Up and Down to increment/decrement numbers
        if (e.keyCode !== KEY_UP && e.keyCode !== KEY_DOWN) {
          return;
        }

        const nmb = parseInt(text, 10);
        if (isNaN(nmb)) {
          return;
        }

        let next;
        if (e.keyCode === KEY_UP) {
          next = `${nmb + 1}`;
        } else if (e.keyCode === KEY_DOWN) {
          next = `${nmb - 1}`;
        }

        setText(next);
        setValue(next);
        e.preventDefault();
      }}
    />
  );
};

export default ButtonTextBox;
