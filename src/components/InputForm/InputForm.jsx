import React, { useState } from "react";
import c from "../InputForm/InputForm.module.css";

const InputForm = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        className={c.input}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
      />
      <div className={c.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
        officiis optio possimus praesentium repellat, repellendus. Eaque et modi
        necessitatibus qui? Lorem ipsum dolor sit amet, consectetur adipisicing
      </div>
    </div>
  );
};

export default InputForm;
