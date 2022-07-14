import React from "react";
import "../components/Keyboard/Keyboard.css";
const Line = ({ lineArr }) => {
  return (
    <div className="line">
      {lineArr.map((elem, index) => (
        <div
          key={index}
          data-code={elem.code ? elem.code.toLowerCase() : elem.code}
          data-sup={elem.sup}
          className={elem.className}
        >
          {elem.value}
          {elem.sup && (
            <div className="sup">
              <sup>{elem.sup}</sup>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Line;
