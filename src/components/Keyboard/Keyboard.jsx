import React from "react";
import "./Keyboard.css";
import Line from "../Line";

const Keyboard = () => {
  const keyArray = [
    [
      { value: "`", sup: "~", className: "key" },
      { value: "1", sup: "!", className: "key" },
      { value: "2", sup: "@", className: "key" },
      { value: "3", sup: "#", className: "key" },
      { value: "4", sup: "$", className: "key" },
      { value: "5", sup: "%", className: "key" },
      { value: "6", sup: "^", className: "key" },
      { value: "7", sup: "&", className: "key" },
      { value: "8", sup: "*", className: "key" },
      { value: "9", sup: "(", className: "key" },
      { value: "0", sup: ")", className: "key" },
      { value: "-", sup: "_", className: "key" },
      { value: "=", sup: "+", className: "key" },
      { value: "Backspace", sup: "", className: "key sys back" },
    ],
    [
      { value: "Tab", sup: "", className: "key sys tab" },
      { value: "q", sup: "", className: "key" },
      { value: "w", sup: "", className: "key" },
      { value: "e", sup: "", className: "key" },
      { value: "r", sup: "", className: "key" },
      { value: "t", sup: "", className: "key" },
      { value: "y", sup: "", className: "key" },
      { value: "u", sup: "", className: "key" },
      { value: "i", sup: "", className: "key" },
      { value: "o", sup: "", className: "key" },
      { value: "p", sup: "", className: "key" },
      { value: "[", sup: "{", className: "key" },
      { value: "]", sup: "}", className: "key" },
      { value: "1", sup: "|", className: "key" },
    ],
    [
      { value: "CapsLock", sup: "", className: "key sys caps" },
      { value: "a", sup: "", className: "key" },
      { value: "s", sup: "", className: "key" },
      { value: "d", sup: "", className: "key" },
      { value: "f", sup: "", className: "key" },
      { value: "g", sup: "", className: "key" },
      { value: "h", sup: "", className: "key" },
      { value: "j", sup: "", className: "key" },
      { value: "k", sup: "", className: "key" },
      { value: "l", sup: "", className: "key" },
      { value: ";", sup: ":", className: "key" },
      { value: "'", sup: '"', className: "key" },
      { value: "Enter", sup: "", className: "key sys enter" },
    ],
    [
      { value: "Shift", sup: "", className: "key sys shift" },
      { value: "z", sup: "", className: "key" },
      { value: "x", sup: "", className: "key" },
      { value: "c", sup: "", className: "key" },
      { value: "v", sup: "", className: "key" },
      { value: "b", sup: "", className: "key" },
      { value: "n", sup: "", className: "key" },
      { value: "m", sup: "", className: "key" },
      { value: ",", sup: "<", className: "key" },
      { value: ".", sup: ">", className: "key" },
      { value: "/", sup: "?", className: "key" },
      { value: "Shift", sup: "", className: "key sys shift" },
    ],
    [{ value: " ", sup: "", className: "key sys space" }],
  ];

  //govno
  const handleKeyOnKeyDown = (e) => {
    if (!e.target.type) return;

    let key = document.querySelector(`[data-value="${e.key.toLowerCase()}"]`);

    if (!key) {
      key = document.querySelector(`[data-sup="${e.key.toLowerCase()}"]`);
    }
    if (key) key.classList.add("active");
  };
  const handleKeyOnKeyUp = (e) => {
    if (!e.target.type) return;

    let key = document.querySelector(`[data-value="${e.key.toLowerCase()}"]`);

    if (!key) {
      key = document.querySelector(`[data-sup="${e.key.toLowerCase()}"]`);
    }

    if (key) key.classList.remove("active");
  };
  document.addEventListener("keydown", handleKeyOnKeyDown);
  document.addEventListener("keyup", handleKeyOnKeyUp);

  return (
    <div className="keyboard">
      <Line lineArr={keyArray[0]} />
      <Line lineArr={keyArray[1]} />
      <Line lineArr={keyArray[2]} />
      <Line lineArr={keyArray[3]} />
      <Line lineArr={keyArray[4]} />
    </div>
  );
};

export default Keyboard;
