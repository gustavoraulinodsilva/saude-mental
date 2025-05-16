import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import "./sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
