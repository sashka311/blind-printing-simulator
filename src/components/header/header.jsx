import React, { useEffect, useState } from "react";
import SvgSelector from "../SvgSelector";
import c from "./header.module.css";

const Header = ({ refresh }) => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    const components = ["body-background", "svg-color", "font-color", "focus-background", "border-color"];
    const root = document.getElementById("root");

    components.forEach((component) => {
      root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
    });
  }, [theme]);

  const handleSwitchFocusClick = (e) => {
    e.target.closest("#switch").querySelector(`.${c.circleSwitch}`).classList.toggle(c.active);
  };
  return (
    <div className={c.header}>
      <div className={c.wrapper}>
        <div className={c.changeMode}>Русский практика</div>
        <div className={c.reset}>
          <SvgSelector id="reset" />
        </div>
      </div>
      <div id={"switch"} onClick={handleSwitchFocusClick} className={c.focus}>
        <div className={c.circleSwitch}></div>
        <div className={c.textSwitch}>Focus</div>
      </div>

      <div onClick={changeTheme}> changeTheme</div>

      <div className={c.wrapper}>
        <div className={c.speed}>
          <div className={c.speedIcon}>{<SvgSelector id="speed" />}</div>
          <div className={c.speedValue}>222</div>
        </div>
        <div className={c.mistakes}>
          <div className={c.mistakesIcon}>
            <SvgSelector id="mistake" />
          </div>
          <div className={c.mistakesValue}>1.5%</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
