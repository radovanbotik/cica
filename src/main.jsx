import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./hooks/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
