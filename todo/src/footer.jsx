import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="row">
        <div className="col">
          <div
            style={{
              fontSize: "40px",
              marginBottom: "50px",
              fontFamily: "cursive",
              color: "lightblue",
            }}
          >
            Todo
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id in
            asperiores accusantium nobis adipisci nam? Reiciendis omnis quia
            ipsam deserunt? Rerum sit eaque voluptas voluptates! Ex animi sint
            dolores nisi.
          </p>
        </div>
        <div className="col">
          <h3>
            Office
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>ITPL</p>
          <p>Whitefield, Banglore</p>
          <p>Karnataka, Pin 234324, India</p>
          <p className="email-id">amanrawat@gmail.com</p>
          <h4>+91 312433223</h4>
        </div>
        <div className="col">
          <h3>
            Links
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Contract us</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Newsletter
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form>
            <i className="fa fa-envelope"></i>

            <input type="text" placeholder="Enter your email id" required />
            <button type="submit">
              <i className="fa fa-arrow-right"></i>
            </button>
          </form>
          <div className="social-icons">
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-whatsapp"></i>
            <i className="fa fa-pinterest"></i>
          </div>
        </div>
        <hr />
        <p className="copyright">Rawat Boys 2024 - All Right Reserved</p>
      </footer>
    </>
  );
}
