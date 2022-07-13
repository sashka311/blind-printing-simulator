import React, { useEffect, useState } from "react";
import c from "../InputForm/InputForm.module.css";
import Text from "./Text";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [expectedSymbol, setExpectedSymbol] = useState(0);
  const textArr = ["123", "222", "444"];

  const [error, setError] = useState(false);
  const [currentLine, setCurrentLine] = useState(textArr[Math.floor(Math.random() * textArr.length)]);

  const showError = () => {
    setError(true);
    setTimeout(() => setError(false), 150);
  };

  const refresh = () => {
    setInputValue("");
    setExpectedSymbol(0);
    setCurrentLine(textArr[Math.floor(Math.random() * textArr.length)]);
  };

  const handleCheckInput = (e) => {
    //переход на новую строку
    if ((e.key === "Enter" || e.key === "Space") && expectedSymbol === currentLine.length) {
      refresh();
    }

    if (e.key !== currentLine[expectedSymbol] && e.key.length === 1) {
      showError();
      setInputValue(inputValue.slice(0, -1));
    }
    if (e.key === currentLine[expectedSymbol]) {
      setExpectedSymbol(expectedSymbol + 1);
    }
  };
  const handleBackspaceKeyDown = (e) => {
    if (e.key === "Backspace" && expectedSymbol > 0) {
      setExpectedSymbol(expectedSymbol - 1);
    }
  };
  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        className={error ? c.inputError : c.input}
        value={inputValue}
        onChange={handleInputOnChange}
        onKeyDown={handleBackspaceKeyDown}
        onKeyUp={handleCheckInput}
        type="text"
      />
      <Text
        inputValue={inputValue}
        setInputValue={setInputValue}
        expectedSymbol={expectedSymbol}
        setExpectedSymbol={setExpectedSymbol}
        textArr={textArr}
        currentLine={currentLine}
      />
    </div>
  );
};

export default InputForm;
