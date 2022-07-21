import React, { useEffect, useState } from "react";
import { currentKeyboardLanguage } from "../Language";
import Line from "../Line";
import "./Keyboard.css";
import SettingsBar from "../SettingsBar/SettingsBar";

const Keyboard = ({ language, settings, setSettings }) => {
  const [keyArray, setKeyArray] = useState(currentKeyboardLanguage(language));
  const getKeyButton = (key) => {
    for (let i = 0; i < keyArray.length; i++) {
      for (let j = 0; j < keyArray[i].length; j++) {
        const keyButton = keyArray[i][j];
        if (keyButton.code.toLowerCase() === key) {
          return [i, j];
        }
      }
    }
    return [undefined, undefined];
  };

  const handleKeyOnKeyDown = (e) => {
    if (!e.target.type) return;
    const [i, j] = getKeyButton(e.code.toLowerCase());
    if (!keyArray[i]) return;
    let keyBoardClone = [...keyArray];
    keyBoardClone[i][j].className = `${keyBoardClone[i][j].className} active`;
    setKeyArray(keyBoardClone);

    //for cases when user pressed key but didnt raise it (changed focus)
    setTimeout(() => {
      keyBoardClone[i][j].className = keyBoardClone[i][j].className.replaceAll(" active", "");
      setKeyArray(keyBoardClone);
    }, 1000);
  };

  const handleKeyOnKeyUp = (e) => {
    if (!e.target.type) return;
    const [i, j] = getKeyButton(e.code.toLowerCase());
    if (!keyArray[i]) return;
    let keyBoardClone = [...keyArray];
    keyBoardClone[i][j].className = keyBoardClone[i][j].className.replaceAll(" active", "");
    setKeyArray(keyBoardClone);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyOnKeyDown);
    document.addEventListener("keyup", handleKeyOnKeyUp);
  }, []);

  useEffect(() => {
    setKeyArray(currentKeyboardLanguage(language));
  }, [language]);

  return (
    <>
      <SettingsBar settings={settings} setSettings={setSettings} />
      <div className="keyboard">
        {keyArray?.map((keyRow, index) => (
          <Line lineArr={keyRow} key={index} settings={settings} />
        ))}
      </div>
    </>
  );
};

export default Keyboard;
