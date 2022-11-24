import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsContext } from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsContext>
  </React.StrictMode>
);
