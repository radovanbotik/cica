import React from "react";
import { useContext, useReducer, useState, useEffect } from "react";
import { filterReducer } from "../reducers/filterReducer";
import { useGlobalProductsContext } from "./ProductContext";
import {
  RETRIEVE_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  SET_SORT,
  SORT,
} from "../actions";

const FilterProvider = React.createContext();
const initialState = {
  retrieved_products: [],
  filtered_products: [],
  grid_view: true,
  sort_by: "price-lowest-to-highest",
};

const FilterContext = ({ children }) => {
  const { products } = useGlobalProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    dispatch({ type: RETRIEVE_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: SORT });
  }, [products, state.sort_by]);

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };
  const setSort = e => {
    const value = e.target.value;
    dispatch({ type: SET_SORT, payload: value });
  };
  return (
    <FilterProvider.Provider
      value={{ ...state, setGridView, setListView, setSort }}
    >
      {children}
    </FilterProvider.Provider>
  );
};

const useGlobalFilterContext = () => {
  return useContext(FilterProvider);
};

export { FilterContext, useGlobalFilterContext };
