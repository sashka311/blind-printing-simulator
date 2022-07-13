import React, { useState } from "react";
import c from "../InputForm/InputForm.module.css";

const Text = ({
  inputValue,
  setInputValue,
  expectedSymbol,
  setExpectedSymbol,
  textArr,
  currentLine,
}) => {
  const checkedSymbols = currentLine.slice(0, expectedSymbol);
  const unCheckedSymbols = currentLine.slice(
    expectedSymbol,
    currentLine.length
  );
  return (
    <div>
      <span className={c.checked}>{checkedSymbols}</span>
      {unCheckedSymbols}¶
    </div>
  );
};

export default Text;
