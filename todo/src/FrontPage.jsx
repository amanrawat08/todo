import React from "react";
import "./style.css";
import portfolioImage from "./images/portfolio-free-portfolio-website-templates.jpg";
export function FrontPage() {
  return (
    <>
      <div className="frontpage">
        <div className="frontData">
          <h1>
            We are <span className="frontcreative">Creative</span>
          </h1>
          <div className="frontTxt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            cumque? Lorem ipsum, dolor sit amet
          </div>
          <button>Get Started</button>
        </div>
      </div>

      <div className="about">
        <div className="aboutTxt">
          <div className="aboutHeading">ABOUT US</div>
          <div className="about-small">
            Provide <span>Best FrontEnd Website</span> To Our Client
          </div>
          <div className="bigTxt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, ipsam? Nobis reprehenderit vel maxime minus aut
            sequi blanditiis recusandae corrupti. Animi amet incidunt
            perferendis, quo explicabo blanditiis voluptas similique pariatur.
          </div>
          <div className="socialBtn">
            <a className="gitlink">GitHub Account</a>
            <a className="gitlink">Linkdin Account</a>
          </div>
        </div>
        <div className="aboutimg">
          <img src={portfolioImage} alt="" />
        </div>
      </div>
    </>
  );
}
