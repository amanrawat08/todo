import React, { useEffect, useState } from "react";

import "./todo.css";
import axios from "axios";
export default function Todo() {
  const [inputTxt, setInputTxt] = useState("");
  const [listData, setListData] = useState([]);
  const inputValue = (e) => {
    setInputTxt(e.target.value);
  };
  const addbtn = (e) => {
    fetch("http://localhost:3000/todo", {
      method: "post",
      body: JSON.stringify({
        name: inputTxt,
      }),
    });

    window.location.reload();
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/todo")
      .then((res) => setListData(res.data));
    console.log(listData);
  });
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
          <button className="addbtn" onClick={addbtn}>
            Add
          </button>
        </div>
        <div className="todoitemsOuter">
          {listData.map((item, index) => (
            <div className="item">
              <div className="item-txt">{item.name}</div>
              <i id="trash" className="fa fa-trash" aria-hidden="true"></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
