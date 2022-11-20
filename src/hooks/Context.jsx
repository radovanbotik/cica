import React from "react";
import { createContext } from "react";
import { useContext } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
  return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Context, useGlobalContext };
