import React from "react";
import SvgSelector from "../SvgSelector";
import c from "./header.module.css";

const Header = () => {
  return (
    <div className={c.header}>
      <div className={c.wrapper}>
        <div className={c.changeMode}>Русский практика</div>
        <div className={c.reset}>
          <SvgSelector id="reset" />
        </div>
      </div>
      <div className={c.focus}>Focus</div>
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
