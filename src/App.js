import "./styles/index.css";
import Header from "./components/header/header";
import InputForm from "./components/InputForm/InputForm";
import Keyboard from "./components/Keyboard/Keyboard";
import { useState } from "react";
function App() {
  const refresh = (setInputValue, setExpectedSymbol, setCurrentLine, textArr) => {
    setInputValue("");
    setExpectedSymbol(0);
    setCurrentLine(textArr[Math.floor(Math.random() * textArr.length)]);
  };
  return (
    <div className="App">
      <Header refresh={refresh} />
      <InputForm refresh={refresh} />
      <Keyboard />
    </div>
  );
}

export default App;
