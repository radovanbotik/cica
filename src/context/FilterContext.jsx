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
  SET_CONTROLS,
  FILTER_RESULTS,
} from "../actions";

const FilterProvider = React.createContext();
const initialState = {
  retrieved_products: [],
  filtered_products: [],
  grid_view: true,
  sort_by: "price-lowest-to-highest",
  controls: {
    search: "",
    category: "everything",
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

const FilterContext = ({ children }) => {
  //product context
  const { products } = useGlobalProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);

  //retrieving products from product context
  useEffect(() => {
    dispatch({ type: RETRIEVE_PRODUCTS, payload: products });
  }, [products]);

  //whenever products || sort order || sort(filter) controls => changes fire sort
  useEffect(() => {
    dispatch({ type: FILTER_RESULTS });
    dispatch({ type: SORT });
  }, [products, state.sort_by, state.controls]);

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

  const setControls = e => {
    //will dynamically change
    let controlName = e.target.name;
    let controlValue = e.target.value;
    if (controlName === "category") {
      controlValue = e.target.textContent;
    }
    dispatch({
      type: SET_CONTROLS,
      payload: { controlName, controlValue },
    });
  };
  const restoreDefaultControls = () => {};
  return (
    <FilterProvider.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        setSort,
        setControls,
        restoreDefaultControls,
      }}
    >
      {children}
    </FilterProvider.Provider>
  );
};

const useGlobalFilterContext = () => {
  return useContext(FilterProvider);
};

export { FilterContext, useGlobalFilterContext };
