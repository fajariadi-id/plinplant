// :::::::::::::::::::::::::::::: PLANTS ::::::::::::::::::::::::::::::
export const plantsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PLANTS':
      return [...action.payload];

    default:
      return state;
  }
};
