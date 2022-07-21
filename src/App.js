import "./styles/index.css";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import Keyboard from "./components/Keyboard/Keyboard";
import { useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";
import { currentTextLanguage } from "./components/Language";
function App() {
  const [isFocused, setIsFocused] = useState(false);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
  const [mistakesAmount, setMistakesAmount] = useState(0);
  const [charactersAmount, setCharactersAmount] = useState(0);
  const [seconds, setSeconds] = useState(1);

  const [language, setLanguage] = useState("en");
  const [modal, setModal] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [currentLine, setCurrentLine] = useState("");
  const [textArr, setTextArr] = useState(currentTextLanguage(language));
  const refresh = () => {
    setMistakesAmount(0);
    setCharactersAmount(0);
    setSeconds(1);
    setInputValue("");
    setCurrentLine(textArr[Math.floor(Math.random() * textArr.length)]);
  };

  return (
    <div className="App">
      <Modal setVisible={setModal} visible={modal} setLanguage={setLanguage} language={language} />
      <Header
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        refresh={refresh}
        mistakesAmount={mistakesAmount}
        charactersAmount={charactersAmount}
        seconds={seconds}
        theme={theme}
        setTheme={setTheme}
        modal={modal}
        setModal={setModal}
        language={language}
      />
      <InputForm
        refresh={refresh}
        mistakesAmount={mistakesAmount}
        setMistakesAmount={setMistakesAmount}
        charactersAmount={charactersAmount}
        setCharactersAmount={setCharactersAmount}
        setSeconds={setSeconds}
        language={language}
        setInputValue={setInputValue}
        inputValue={inputValue}
        currentLine={currentLine}
        setCurrentLine={setCurrentLine}
        textArr={textArr}
        setTextArr={setTextArr}
      />
      {!isFocused && <Keyboard language={language} />}
    </div>
  );
}

export default App;
