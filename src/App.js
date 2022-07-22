import "./styles/index.css";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import Keyboard from "./components/Keyboard/Keyboard";
import { useEffect, useState } from "react";
import { currentTextLanguage } from "./components/Language";
function App() {
  const [isFocused, setIsFocused] = useState(false);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) ? JSON.parse(localStorage.getItem("theme")) : "light"
  );
  const [mistakesAmount, setMistakesAmount] = useState(0);
  const [charactersAmount, setCharactersAmount] = useState(0);
  const [seconds, setSeconds] = useState(1);

  const [language, setLanguage] = useState("ru");
  const [modal, setModal] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [textArr, setTextArr] = useState(currentTextLanguage(language));

  const [settings, setSettings] = useState({ colorful: false, autoDelete: true });
  const refresh = () => {
    setMistakesAmount(0);
    setCharactersAmount(0);
    setSeconds(1);
    setInputValue("");
    setCurrentText(textArr[Math.floor(Math.random() * textArr.length)]);
  };
  return (
    <div className="App">
      {/*<Modal setVisible={setModal} visible={modal} setLanguage={setLanguage} language={language} />*/}
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
        setLanguage={setLanguage}
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
        currentText={currentText}
        setCurrentText={setCurrentText}
        textArr={textArr}
        setTextArr={setTextArr}
        settings={settings}
      />
      {!isFocused && <Keyboard language={language} settings={settings} setSettings={setSettings} />}
    </div>
  );
}

export default App;
