import React, { createContext } from 'react';
import { useThunkReducer } from 'react-hook-thunk-reducer';
import { plantReducer, plantsReducer } from './reducers';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // ::: FETCH PLANTS :::
  const [plantsState, plantsDispatch] = useThunkReducer(plantsReducer, []);

  // ::: FETCH PLANT :::
  const [plantState, plantDispatch] = useThunkReducer(plantReducer, {});

  return (
    <Context.Provider
      value={{ plantsState, plantsDispatch, plantState, plantDispatch }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
