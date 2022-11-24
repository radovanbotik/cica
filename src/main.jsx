import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsContext } from "./context/ProductContext";
import { FilterContext } from "./context/FilterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsContext>
      <FilterContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterContext>
    </ProductsContext>
  </React.StrictMode>
);
