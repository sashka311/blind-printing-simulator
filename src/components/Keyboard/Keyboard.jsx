import React from "react";
import "./Keyboard.css";
import Line from "../Line";

const Keyboard = ({ isFocused }) => {
  const keyArray = [
    [
      { value: "`", code: "Backquote", sup: "~", className: "key" },
      { value: "1", code: "digit1", sup: "!", className: "key" },
      { value: "2", code: "digit2", sup: "@", className: "key" },
      { value: "3", code: "digit3", sup: "#", className: "key" },
      { value: "4", code: "digit4", sup: "$", className: "key" },
      { value: "5", code: "digit5", sup: "%", className: "key" },
      { value: "6", code: "digit6", sup: "^", className: "key" },
      { value: "7", code: "digit7", sup: "&", className: "key" },
      { value: "8", code: "digit8", sup: "*", className: "key" },
      { value: "9", code: "digit9", sup: "(", className: "key" },
      { value: "0", code: "Digit0", sup: ")", className: "key" },
      { value: "-", code: "Minus", sup: "_", className: "key" },
      { value: "=", code: "Equal", sup: "+", className: "key" },
      { value: "Backspace", code: "Backspace", sup: "", className: "key sys back" },
    ],
    [
      { value: "Tab", code: "Tab", sup: "", className: "key sys tab" },
      { value: "q", code: "KeyQ", sup: "", className: "key" },
      { value: "w", code: "KeyW", sup: "", className: "key" },
      { value: "e", code: "KeyE", sup: "", className: "key" },
      { value: "r", code: "KeyR", sup: "", className: "key" },
      { value: "t", code: "KeyT", sup: "", className: "key" },
      { value: "y", code: "KeyY", sup: "", className: "key" },
      { value: "u", code: "KeyU", sup: "", className: "key" },
      { value: "i", code: "KeyI", sup: "", className: "key" },
      { value: "o", code: "KeyO", sup: "", className: "key" },
      { value: "p", code: "KeyP", sup: "", className: "key" },
      { value: "[", code: "BracketLeft", sup: "{", className: "key" },
      { value: "]", code: "BracketRight", sup: "}", className: "key" },
      { value: "\\", code: "Backslash", sup: "|", className: "key" },
    ],
    [
      { value: "CapsLock", code: "CapsLock", sup: "", className: "key sys caps" },
      { value: "a", code: "KeyA", sup: "", className: "key" },
      { value: "s", code: "KeyS", sup: "", className: "key" },
      { value: "d", code: "KeyD", sup: "", className: "key" },
      { value: "f", code: "KeyF", sup: "", className: "key" },
      { value: "g", code: "KeyG", sup: "", className: "key" },
      { value: "h", code: "KeyH", sup: "", className: "key" },
      { value: "j", code: "KeyJ", sup: "", className: "key" },
      { value: "k", code: "KeyK", sup: "", className: "key" },
      { value: "l", code: "KeyL", sup: "", className: "key" },
      { value: ";", code: "Semicolon", sup: ":", className: "key" },
      { value: "'", code: "Quote", sup: '"', className: "key" },
      { value: "Enter", code: "Enter", sup: "", className: "key sys enter" },
    ],
    [
      { value: "Shift", code: "ShiftLeft", sup: "", className: "key sys shift" },
      { value: "z", code: "KeyZ", sup: "", className: "key" },
      { value: "x", code: "KeyX", sup: "", className: "key" },
      { value: "c", code: "KeyC", sup: "", className: "key" },
      { value: "v", code: "KeyV", sup: "", className: "key" },
      { value: "b", code: "KeyB", sup: "", className: "key" },
      { value: "n", code: "KeyN", sup: "", className: "key" },
      { value: "m", code: "KeyM", sup: "", className: "key" },
      { value: ",", code: "Comma", sup: "<", className: "key" },
      { value: ".", code: "Period", sup: ">", className: "key" },
      { value: "/", code: "Slash", sup: "?", className: "key" },
      { value: "Shift", code: "ShiftRight", sup: "", className: "key sys shift" },
    ],
    [{ value: " ", code: "Space", sup: "", className: "key sys space" }],
  ];

  const handleKeyOnKeyDown = (e) => {
    if (!e.target.type) return;

    const key = e.code.toLowerCase();
    const codeQuery = document.querySelector(`[data-code="${key}"]`);
    const supQuery = document.querySelector(`[data-sup="${key}"]`);

    const keyElement = codeQuery || supQuery;

    if (keyElement) keyElement.classList.add("active");
  };

  const handleKeyOnKeyUp = (e) => {
    if (!e.target.type) return;

    const key = e.code.toLowerCase();
    const codeQuery = document.querySelector(`[data-code="${key}"]`);
    const supQuery = document.querySelector(`[data-sup="${key}"]`);

    const keyElement = codeQuery || supQuery;

    if (keyElement) keyElement.classList.remove("active");
  };

  document.addEventListener("keydown", handleKeyOnKeyDown);
  document.addEventListener("keyup", handleKeyOnKeyUp);

  return (
    <div className="keyboard">
      {keyArray.map((keyRow, index) => (
        <Line lineArr={keyRow} key={index} />
      ))}
    </div>
  );
};

export default Keyboard;
