import React, { createContext, useReducer, useContext } from 'react';
import ShopReducer from './ShopReducer';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(ShopReducer, {});

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
