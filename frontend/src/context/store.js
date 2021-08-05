import React, { createContext } from 'react';
import { useThunkReducer } from 'react-hook-thunk-reducer';
import { plantReducer, plantsReducer, reviewsReducer } from './reducers';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // ::: FETCH PLANTS :::
  const [plantsState, plantsDispatch] = useThunkReducer(plantsReducer, []);

  // ::: FETCH PLANT :::
  const [plantState, plantDispatch] = useThunkReducer(plantReducer, {});

  // ::: FETCH PLANT REVIEWS :::
  const [reviewsState, reviewsDispatch] = useThunkReducer(reviewsReducer, []);

  return (
    <Context.Provider
      value={{
        plantsState,
        plantsDispatch,
        plantState,
        plantDispatch,
        reviewsState,
        reviewsDispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
