import React from "react";
//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import "tachyons";
//import {robots} from './robots.jsx'

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <div>
    <App />
  </div>
  //</StrictMode>
);
