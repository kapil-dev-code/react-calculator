import React from "react";
import "./keypad.css";

export default function Keypad(props) {
  //for key code goto keycode.info site
  //key code use for code of key and label use for what view on screen
  const keys = [
    { keycode: 103, label: "7" },
    { keycode: 104, label: "8" },
    { keycode: 105, label: "9" },
    { keycode: 100, label: "4" },
    { keycode: 101, label: "5" },
    { keycode: 102, label: "6" },
    { keycode: 97, label: "1" },
    { keycode: 98, label: "2" },
    { keycode: 99, label: "3" },
    { keycode: 96, label: "0" },
    { keycode: 190, label: "." },
    { keycode: 13, label: "=" },
  ];
  /* level for calculator front end and value for label execution */
  const symbols = [
    {
      label: "Del",
      keycode: 8,
      value: "backspace",
    },
    {
      label: "÷", //alt key using
      keycode: 111,
      value: "/",
    },
    {
      label: "×",
      keycode: 56,
      value: "*",
    },
    {
      label: "-",
      keycode: 109,
      value: "-",
    },
    {
      label: "+",
      keycode: 107,
      value: "+",
    },
  ];

  return (
    <div className="keypad">
      <div className="keypad_keys">
        {keys.map((item, index) => (
          <p
            onClick={() => props.handleKeyPress(item.keycode, item.label)}
            key={index}
          >
            {item.label}
          </p>
        ))}
      </div>
      <div className="keypad_symbols">
        {symbols.map((item, index) => (
          <p
            onClick={() => props.handleKeyPress(item.keycode, item.value)}
            key={index}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
}
