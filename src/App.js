import "./styles/index.css";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import Keyboard from "./components/Keyboard/Keyboard";
import { useEffect, useState } from "react";
function App() {
  const [isFocused, setIsFocused] = useState(false);
  const [mistakesAmount, setMistakesAmount] = useState(0);
  const [charactersAmount, setCharactersAmount] = useState(0);
  const [seconds, setSeconds] = useState(1);

  const refresh = (setInputValue, setCurrentLine, textArr) => {
    setInputValue("");
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
        setSeconds={setSeconds}
      />
      {!isFocused && <Keyboard />}
    </div>
  );
}

export default App;
