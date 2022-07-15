import React, { useEffect, useState } from "react";
import SvgSelector from "../SvgSelector";
import c from "./header.module.css";

const Header = ({ refresh, isFocused, setIsFocused, mistakesAmount, charactersAmount, seconds }) => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const mistakes = charactersAmount ? Math.round((mistakesAmount / charactersAmount) * 10000) / 100 + "%" : "-/-";
  const speed = charactersAmount ? Math.round((charactersAmount - mistakesAmount) / (seconds / 60)) : "-/-";
  useEffect(() => {
    const components = ["body-background", "svg-color", "font-color", "focus-background", "border-color"];
    const root = document.getElementById("root");

    components.forEach((component) => {
      root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    });
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
        <input onClick={changeTheme} type="checkbox" />
        <span className={c.slider}>
          <div className={c.on}>🌙</div>
          <div className={c.off}>☀️</div>
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
              <SvgSelector id="mistake" />
            </div>
          )}
          <div className={c.mistakesValue}>{mistakes}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
