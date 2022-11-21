import { useContext, useReducer } from "react";
import { productReducer } from "../reducers/productsReducer";
import React from "react";

const ProductsProvider = React.createContext();
const initialState = {};

const ProductsContext = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductsProvider.Provider value={{ ...state }}>
      {children}
    </ProductsProvider.Provider>
  );
};

const useGlobalProductsContext = () => {
  return useContext(ProductsProvider);
};

export { ProductsContext, useGlobalProductsContext };
