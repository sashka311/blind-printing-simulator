import React from "react";
import "../components/Keyboard/Keyboard.css";
const Line = ({ lineArr }) => {
  return (
    <div className="line">
      {lineArr.map((elem, index) => (
        <div
          key={index}
          data-value={elem.value.toLowerCase()}
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
