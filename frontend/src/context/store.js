import React, { createContext } from 'react';
import { useThunkReducer } from 'react-hook-thunk-reducer';
import { plantsReducer } from './reducers';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // ::: FETCH TABLE PLANT :::
  const [plantsState, plantsDispatch] = useThunkReducer(plantsReducer, []);

  return (
    <Context.Provider value={{ plantsState, plantsDispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
