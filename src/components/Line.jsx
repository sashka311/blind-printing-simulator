import React from "react";
import "../components/Keyboard/Keyboard.css";
const Line = ({ lineArr, settings }) => {
  return (
    <div className="line">
      {lineArr.map((elem, index) => (
        <div
          key={index}
          data-code={elem.code.toLowerCase()}
          data-sup={elem.sup}
          className={settings.colorful ? `${elem.className} colored` : elem.className}
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
