import React from "react";
import ReactDOM from "react-dom";
import "@neo4j-ndl/base/lib/neo4j-ds-styles.css";
import "./assets/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { URLPattern } from "urlpattern-polyfill";

(window as any).URLPattern = URLPattern;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
