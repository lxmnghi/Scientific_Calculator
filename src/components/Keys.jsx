import React from "react";

const Keys = ({handleButton}) => {
    const scikeys =["sin","cos","ln","log","tan","pi","e","^","!","√"];

    const basickeys = ["1","2","3","*","/","4","5","6", "-","(","7","8","9","+",")",".","0","DEL","AC","=",];

  return (
    <div className="keys">
      <div className="keys_scientific">
        {scikeys.map((item,index) => {
            return <button key={index} onClick={()=>handleButton(item)}>
                {item}</button>;
        })}
      </div>
      <div className="line"></div>
      <div className="keys_basic">
        {basickeys.map((item,index) => {
            return <button key={index} className={`${item >="0" && item <= "9" ? "number" :""}${item === "0" && "equal"
        }`}
        onClick={()=>handleButton(item)}>
            {item}</button>;
        })}
      </div>
    </div>
  );
};

export default Keys;
