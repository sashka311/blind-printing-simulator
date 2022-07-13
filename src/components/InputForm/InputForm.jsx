import React, { useState } from "react";
import c from "../InputForm/InputForm.module.css";
import Text from "./Text";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [expectedSymbol, setExpectedSymbol] = useState(0);

  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  };
  const textArr =
    "Lorem ipsum dolor sit amet, " +
    "consectetur adipisicing elit. Cumque " +
    "dolorum earum eveniet excepturi illo iusto, " +
    "magnam maiores molestias nulla ullam!";

  const checkInput = (e) => {
    console.log(e.key + " " + textArr[expectedSymbol]);
    if (e.key !== textArr[expectedSymbol] && e.key.length === 1) {
      setInputValue(inputValue.slice(0, -1));
    }
    if (e.key === textArr[expectedSymbol])
      setExpectedSymbol(expectedSymbol + 1);
  };
  return (
    <div>
      <input
        className={c.input}
        value={inputValue}
        onChange={handleInputOnChange}
        onKeyUp={checkInput}
        type="text"
      />
      <div className={c.text}>{textArr}</div>
    </div>
  );
};

export default InputForm;
