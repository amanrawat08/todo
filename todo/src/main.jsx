import React from "react";
import NavBar from "./NavBar";
import ReactDOM from "react-dom/client";
import { FrontPage } from "./FrontPage";
import Todo from "./service";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <FrontPage></FrontPage>
    <Todo />
  </React.StrictMode>
);
