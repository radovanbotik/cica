import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsContext } from "./context/ProductContext";
import { FilterContext } from "./context/FilterContext";
import { CartContext } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsContext>
      <FilterContext>
        <CartContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartContext>
      </FilterContext>
    </ProductsContext>
  </React.StrictMode>
);
