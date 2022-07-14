import React, { useEffect, useState } from "react";
import c from "../InputForm/InputForm.module.css";

const InputForm = ({ refresh }) => {
  const [inputValue, setInputValue] = useState("");
  const [expectedSymbol, setExpectedSymbol] = useState(0);
  const textArr = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dolore explicabo ipsa",
    "222",
    "444",
  ];
  const [error, setError] = useState(false);
  const [currentLine, setCurrentLine] = useState(textArr[Math.trunc(Math.random() * textArr.length)]);
  const checkedSymbols = currentLine.slice(0, expectedSymbol);
  const unCheckedSymbols = currentLine.slice(expectedSymbol, currentLine.length);

  //////////////////////////////////////////////////////////

  const showError = () => {
    setError(true);
    setTimeout(() => setError(false), 150);
  };
  const handleCheckInput = (e) => {
    //переход на новую строку
    if ((e.key === "Enter" || e.key === " ") && expectedSymbol === currentLine.length) {
      refresh(setInputValue, setExpectedSymbol, setCurrentLine, textArr);
      return;
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
      <div className={c.text}>
        <span className={c.checked}>{checkedSymbols}</span>
        {unCheckedSymbols}
      </div>
    </div>
  );
};

export default InputForm;
