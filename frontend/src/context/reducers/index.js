// :::::::::::::::::::::::::::::: PLANTS ::::::::::::::::::::::::::::::
export const plantsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PLANTS':
      return [...action.payload];

    default:
      return state;
  }
};

export const plantReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PLANT':
      return { ...action.payload };

    default:
      return state;
  }
};
