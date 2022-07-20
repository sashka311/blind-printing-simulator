import React from "react";
import c from "../Modal/Modal.module.css";

const Modal = ({ visible, setVisible, setLanguage }) => {
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
        <div onClick={(e) => handleSetLanguageClick("ru", e)}>Russian layout</div>
        <div onClick={(e) => handleSetLanguageClick("en", e)}>English layout</div>
      </div>
    </div>
  );
};

export default Modal;
