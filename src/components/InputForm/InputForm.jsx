import React, { useEffect, useState, useRef } from "react";
import c from "../InputForm/InputForm.module.css";

const InputForm = ({
  refresh,
  mistakesAmount,
  setMistakesAmount,
  charactersAmount,
  setCharactersAmount,
  setSeconds,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [currentLine, setCurrentLine] = useState("");
  const [stopwatchId, setStopwatchId] = useState(null);
  const [symbols, setSymbol] = useState({
    checkedSymbols: "",
    unCheckedSymbols: "",
  });

  const textArr = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam dolore explicabo ipsa",
    "222",
    "444",
  ];

  useEffect(() => {
    setCurrentLine(textArr[Math.trunc(Math.random() * textArr.length)]);
  }, []);

  useEffect(() => {
    const currentSymbol = inputValue.length;
    setSymbol({
      checkedSymbols: currentLine.slice(0, currentSymbol),
      unCheckedSymbols: currentLine.slice(currentSymbol, currentLine.length),
    });
  }, [inputValue, currentLine]);

  const showError = () => {
    setError(true);
    setTimeout(() => setError(false), 150);
  };

  const handleInputOnChange = (e) => {
    if (e.nativeEvent.data && inputValue.length === currentLine.length) {
      refresh(setInputValue, setCurrentLine, textArr);
      return;
    }
    setCharactersAmount(charactersAmount + 1);
    if (e.nativeEvent.data !== currentLine[inputValue.length] && e.nativeEvent.data) {
      showError();
      setMistakesAmount(mistakesAmount + 1);
      setCharactersAmount(charactersAmount + 1);

      e.preventDefault();
      return;
    }
    setInputValue(e.target.value);
  };

  const handleStartStopwatch = () => {
    const stopWatch = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    setStopwatchId(stopWatch);
  };

  const handleStopStopwatch = () => {
    clearInterval(stopwatchId);
  };

  return (
    <div>
      <input
        onFocus={handleStartStopwatch}
        onBlur={handleStopStopwatch}
        className={error ? c.inputError : c.input}
        value={inputValue}
        onChange={handleInputOnChange}
        type="text"
      />
      <div className={c.text}>
        <span className={c.checked}>{symbols.checkedSymbols}</span>
        {symbols.unCheckedSymbols}
      </div>
    </div>
  );
};

export default InputForm;
