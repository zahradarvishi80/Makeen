import React from "react";
import ReactDOM from "react-dom";
import "./Css/index.css";
// import Home from "./Home";
import "./Css/tailwind.css";
import "./assets/fonts/Blacck.ttf";
import "./assets/fonts/Bold.ttf";
import "./assets/fonts/ExtraBlack.ttf";
import "./assets/fonts/ExtraBold.ttf";
import "./assets/fonts/Light.ttf";
import "./assets/fonts/Medium.ttf";
import "./assets/fonts/Regular.ttf";
import "./assets/fonts/Thin.ttf";

import { BrowserRouter } from "react-router-dom";
// import Home from "./Home";
import App from "./App";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
