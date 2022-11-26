import React from "react";
import { useContext, useReducer, useEffect, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { ADD_TO_CART } from "../actions.js";

const CartProvider = React.createContext();
const initialState = {
  cart: [],
  total_item_amount: 0,
  total_value_amount: 0,
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };
  return (
    <CartProvider.Provider value={{ ...state, addToCart }}>
      {children}
    </CartProvider.Provider>
  );
};

const useGlobalCartContext = () => {
  return useReducer(CartProvider);
};

export { CartContext, useGlobalCartContext };
