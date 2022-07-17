import React, { useEffect, useState } from "react";
import SvgSelector from "../SvgSelector";
import { BsMoon, BsSun } from "react-icons/bs";
import c from "./Header.module.css";

const Header = ({ refresh, isFocused, setIsFocused, mistakesAmount, charactersAmount, seconds }) => {
  //dont know how do it with useEffect
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

    console.log(localStorage.getItem("theme") + " " + theme);
  };

  const mistakes = charactersAmount ? Math.round((mistakesAmount / charactersAmount) * 10000) / 100 + "%" : "-/-";
  const speed = charactersAmount ? Math.round((charactersAmount - mistakesAmount) / (seconds / 60)) : "-/-";

  useEffect(() => {
    const components = ["body-background", "svg-color", "font-color", "focus-background", "border-color"];
    const root = document.getElementById("root");

    components.forEach((component) => {
      root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    });
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const handleSwitchFocusClick = (e) => {
    setIsFocused(!isFocused);
  };

  return (
    <div className={c.header}>
      <div className={c.wrapper}>
        <div className={c.changeMode}>Русский практика</div>
        <div className={c.reset}>
          <SvgSelector id="reset" />
        </div>
      </div>

      {/*switch focus*/}
      <label className={isFocused ? c.switchFocus + " " + c.focused : c.switchFocus}>
        <input onClick={handleSwitchFocusClick} type="checkbox" />
        <span className={c.slider}>
          <div className={c.on}>Focus</div>
          <div className={c.off}>Focus</div>
        </span>
      </label>
      {/*switch changeTheme*/}
      <label className={c.switch}>
        <input checked={theme !== "light"} onClick={changeTheme} type="checkbox" />
        <span className={c.slider}>
          <div className={c.on}>
            <BsMoon />
          </div>
          <div className={c.off}>
            <BsSun />️
          </div>
        </span>
      </label>

      <div className={c.wrapperIcons}>
        <div className={c.speed}>
          {!isFocused && <div className={c.speedIcon}>{<SvgSelector id="speed" />}</div>}
          <div className={c.speedValue}>{speed}</div>
        </div>
        <div className={c.mistakes}>
          {!isFocused && (
            <div className={c.mistakesIcon}>
              <SvgSelector id={"mistake"} />
            </div>
          )}
          <div className={c.mistakesValue}>{mistakes}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
