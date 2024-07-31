import React, { useState } from "react";
import "./todo.css";
export default function Todo() {
  const [inputTxt, setInputTxt] = useState("");
  const inputValue = (e) => {
    setInputTxt(e.target.value);
  };
  const addbtn = (e) => {};
  return (
    <div className="todoOuter">
      <div className="formOuter">
        <div className="todoHead">T0DO LIST</div>
        <div className="inputdiv">
          <input
            type="text"
            placeholder="Enter The Task"
            onChange={inputValue}
          />
          <button onClick={addbtn}>Add</button>
        </div>
        <div className="todoitemsOuter">
          <div className="item">
            <div className="item-txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              numquam.
            </div>
            <i id="trash" className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
