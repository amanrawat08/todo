import React, { useEffect, useState } from "react";

import "./todo.css";
import axios from "axios";
import recording from "./images/record.mp4";
export default function Todo() {
  const [inputTxt, setInputTxt] = useState("");
  const [listData, setListData] = useState([]);
  const [state, setState] = useState(0);
  const inputValue = (e) => {
    setInputTxt(e.target.value);
  };
  const reloading = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const addbtn = (e) => {
    fetch("http://localhost:3000/todo", {
      method: "post",
      body: JSON.stringify({
        name: inputTxt,
      }),
    });
    setState(state + 1);
    reloading();
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/todo")
      .then((res) => setListData(res.data));
  }, ["listData", "inputTxt"]);

  const deletebtn = (id) => {
    axios.delete(`http://localhost:3000/todo/${id}`, listData);
    setState(state - 1);
    reloading();
  };

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
            <div className="item" key={index}>
              <li className="item-txt">{item.name}</li>
              <i
                id="trash"
                onClick={() => deletebtn(item.id)}
                className="fa fa-trash"
                aria-hidden="true"
              ></i>
            </div>
          ))}
        </div>
        <div style={{ color: "white" }}>ar7541147@gmail.com</div>
      </div>

      <video
        style={{ width: "500px", height: "300px", borderRadius: "10px" }}
        src={recording}
        controls
        muted
        autoPlay
      ></video>
    </div>
  );
}
