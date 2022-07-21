import React, { useState } from "react";
import c from "./SettingsBar.module.css";
import { FiDelete } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import { BiColorFill } from "react-icons/bi";
const SettingsBar = ({ settings, setSettings }) => {
  const handleChangeAutoDeleteClick = () => {
    setSettings({ ...settings, autoDelete: !settings.autoDelete });
  };
  const handleChangeColorfulClick = () => {
    setSettings({ ...settings, colorful: !settings.colorful });
  };

  return (
    <div className={c.settingsBar}>
      <div className={c.elem} onClick={handleChangeColorfulClick} title={"Включить заливку клавиатуры"}>
        <BiColorFill className={c.icon} />
        <div className={settings.colorful ? c.deleteIcon : `${c.deleteIcon} ${c.active}`}>
          <TiDelete />
        </div>
      </div>
      <div className={c.elem} onClick={handleChangeAutoDeleteClick} title={"Включить автокоррекцию"}>
        <FiDelete className={c.icon} />
        <div className={settings.autoDelete ? c.deleteIcon : `${c.deleteIcon} ${c.active}`}>
          <TiDelete />
        </div>
      </div>
    </div>
  );
};

export default SettingsBar;
