import React, { useEffect, useState, useRef } from "react";
import c from "../InputForm/InputForm.module.css";
import { currentTextLanguage } from "../Language";

const InputForm = ({
  refresh,
  mistakesAmount,
  setMistakesAmount,
  charactersAmount,
  setCharactersAmount,
  setSeconds,
  language,
  setInputValue,
  inputValue,
  currentText,
  setCurrentText,
  textArr,
  setTextArr,
  settings,
}) => {
  const [error, setError] = useState(false);

  const [stopwatchId, setStopwatchId] = useState(null);
  const [symbols, setSymbol] = useState({
    checkedSymbols: "",
    unCheckedSymbols: "",
  });

  const CHARS_IN_ROW = 78;
  const AMOUNT_OF_LINES = 3;

  useEffect(() => {
    setCurrentText(textArr[Math.trunc(Math.random() * textArr.length)]);
  }, []);

  useEffect(() => {
    setTextArr(currentTextLanguage(language));
  }, [language]);

  useEffect(() => {
    refresh();
  }, [textArr]);

  useEffect(() => {
    const currentSymbol = inputValue.length;
    setSymbol({
      checkedSymbols: currentText.slice(0, currentSymbol),
      unCheckedSymbols: currentText.slice(currentSymbol, CHARS_IN_ROW * AMOUNT_OF_LINES),
    });
    if (inputValue.length === CHARS_IN_ROW && !error) {
      setInputValue("");
      setCurrentText(currentText.slice(CHARS_IN_ROW));
    }
  }, [inputValue, currentText, language]);

  const showError = () => {
    setError(true);
    setTimeout(() => setError(false), 150);
  };

  const handleInputOnChange = (e) => {
    if (e.nativeEvent.data && inputValue.length === currentText.length && !error) {
      refresh();
      return;
    }
    if (inputValue === symbols.checkedSymbols) {
      setError(false);
    }
    if (e.nativeEvent.data) {
      setCharactersAmount(charactersAmount + 1);
    }
    if (e.nativeEvent.data !== currentText[inputValue.length] && e.nativeEvent.data) {
      setError(true);
      setMistakesAmount(mistakesAmount + 1);
      setCharactersAmount(charactersAmount + 1);

      if (settings.autoDelete) {
        return;
      }
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
