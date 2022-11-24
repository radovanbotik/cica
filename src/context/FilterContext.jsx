import React from "react";
import { useContext, useReducer, useState, useEffect } from "react";
import { filterReducer } from "../reducers/filterReducer";
import { useGlobalProductsContext } from "./ProductContext";
import { RETRIEVE_PRODUCTS } from "../actions";

const FilterProvider = React.createContext();
const initialState = {
  retrieved_products: [],
  filtered_products: [],
  grid_view: true,
};

const FilterContext = ({ children }) => {
  const { products } = useGlobalProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    dispatch({ type: RETRIEVE_PRODUCTS, payload: products });
  }, [products]);
  return (
    <FilterProvider.Provider value={{ ...state }}>
      {children}
    </FilterProvider.Provider>
  );
};

const useGlobalFilterContext = () => {
  return useContext(FilterProvider);
};

export { FilterContext, useGlobalFilterContext };
