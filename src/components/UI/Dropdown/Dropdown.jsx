import React, { useEffect } from "react";
import "./Dropdown.css";
import { languageName } from "../../Language";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { CSSTransition } from "react-transition-group";

const Dropdown = ({ language, isDropdownOpen, setIsDropdownOpen, setLanguage }) => {
  const handleToggleModal = (e) => {
    setIsDropdownOpen(!isDropdownOpen);
    e.stopPropagation();
  };

  const handleSetLanguageClick = (language, e) => {
    setLanguage(language);
    setIsDropdownOpen(false);
    e.stopPropagation();
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseDropdown);
  }, []);

  return (
    <div>
      <div className={"changeMode"} onClick={handleToggleModal}>
        {languageName(language)}
        <IoIosArrowDropdownCircle className={"dropdownIcon"} />
      </div>

      <CSSTransition in={isDropdownOpen} unmountOnExit timeout={300} classNames={"dropdown"}>
        <div className={"dropdownMenu"}>
          <div className={"dropdownMenuItem"} onClick={(e) => handleSetLanguageClick("ru", e)}>
            Russian
          </div>
          <div className={"dropdownMenuItem"} onClick={(e) => handleSetLanguageClick("en", e)}>
            English
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
