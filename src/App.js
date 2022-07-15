import "./styles/index.css";
import Header from "./components/header/header";
import InputForm from "./components/InputForm/InputForm";
import Keyboard from "./components/Keyboard/Keyboard";
import { useEffect, useState } from "react";
function App() {
  const [isFocused, setIsFocused] = useState(false);
  const [mistakesAmount, setMistakesAmount] = useState(0);
  const [charactersAmount, setCharactersAmount] = useState(0);
  const [seconds, setSeconds] = useState(1);

  const refresh = (setInputValue, setExpectedSymbol, setCurrentLine, textArr) => {
    setInputValue("");
    setExpectedSymbol(0);
    setCurrentLine(textArr[Math.floor(Math.random() * textArr.length)]);
  };
  return (
    <div className="App">
      <Header
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        refresh={refresh}
        mistakesAmount={mistakesAmount}
        charactersAmount={charactersAmount}
        seconds={seconds}
      />
      <InputForm
        refresh={refresh}
        mistakesAmount={mistakesAmount}
        setMistakesAmount={setMistakesAmount}
        charactersAmount={charactersAmount}
        setCharactersAmount={setCharactersAmount}
        seconds={seconds}
        setSeconds={setSeconds}
      />
      {!isFocused && <Keyboard isFocused={isFocused} />}
    </div>
  );
}

export default App;
