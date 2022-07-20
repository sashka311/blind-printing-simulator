import React from "react";
import c from "../Modal/Modal.module.css";

const Modal = ({ visible, setVisible, setLanguage, language }) => {
  const rootClasses = [c.modalWrapper];

  if (visible) {
    rootClasses.push(c.active);
  }

  const handleSetLanguageClick = (language, e) => {
    e.stopPropagation();
    setLanguage(language);
    setVisible(false);
  };

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={c.modal} onClick={(e) => e.stopPropagation()}>
        <div onClick={(e) => handleSetLanguageClick("ru", e)}>ru</div>
        <div onClick={(e) => handleSetLanguageClick("en", e)}>en</div>
      </div>
    </div>
  );
};

export default Modal;
