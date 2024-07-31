import React from "react";
import "./todo.css";
import service from "./images/service.png";
import agree from "./images/agreement.png";
import portfolioImage from "./images/portfolio-free-portfolio-website-templates.jpg";

export default function Contract() {
  return (
    <div className="contract">
      <div className="conLeft">
        <div className="contractHeading">Contract us</div>
        <div className="leftItem">
          <img style={{ width: "80px" }} src={service} alt="" />
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "cursive",
              color: "blueviolet",
            }}
          >
            Talk For Your Website Design
          </div>
          <div style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi
            quae reiciendis.
          </div>
          <button className="contractus">Contract us</button>
        </div>
      </div>
      <div className="conRight">
        <div className="leftItem">
          <img style={{ width: "80px" }} src={agree} alt="" />
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "cursive",
              color: "blueviolet",
            }}
          >
            Contract Me To Hire..!!!
          </div>
          <div style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi
            quae reiciendis.
          </div>
          <button className="contractus">Contract us</button>
        </div>
      </div>
    </div>
  );
}
