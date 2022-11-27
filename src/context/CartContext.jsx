import React from "react";
import { useContext, useReducer, useEffect, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  CHANGE_PRODUCT_AMOUNT,
} from "../actions.js";

const CartProvider = React.createContext();

const getLocalStorage = () => {
  if (localStorage.getItem("cart")) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_item_amount: 0,
  total_value_amount: 0,
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, color, productAmount, name, price, image, stock) => {
    console.log(id, color, productAmount, name, price, image, stock);
    dispatch({
      type: ADD_TO_CART,
      payload: { id, color, productAmount, name, price, image, stock },
    });
  };
  const removeFromCart = id => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };
  const changeAmount = (id, action) => {
    dispatch({ type: CHANGE_PRODUCT_AMOUNT, payload: { id, action } });
  };
  const emptyCart = () => {
    localStorage.clear();
    dispatch({ type: EMPTY_CART, payload: initialState });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartProvider.Provider
      value={{ ...state, addToCart, removeFromCart, changeAmount, emptyCart }}
    >
      {children}
    </CartProvider.Provider>
  );
};

const useGlobalCartContext = () => {
  return useContext(CartProvider);
};

export { CartContext, useGlobalCartContext };
