import React from "react";
import { useContext, useReducer, useEffect, useState } from "react";

const CartProvider = React.createContext();

const CartContext = ({ children }) => {
  return (
    <CartProvider.Provider value={"hello"}>{children}</CartProvider.Provider>
  );
};

const useGlobalCartContext = () => {
  return useReducer(CartProvider);
};

export { CartContext, useGlobalCartContext };
