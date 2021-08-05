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

// :::::::::::::::::::::::::::::: REVIEWS ::::::::::::::::::::::::::::::
export const reviewsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_REVIEWS':
      return [...action.payload];

    // case 'POST_PLANT_REVIEW':
    //   return [
    //     ...state,
    //     {
    //       created_at: action.payload.created_at,
    //       comment: action.payload.comment,
    //       rating: action.payload.rating,
    //       fk_user_id: action.payload.fk_user_id,
    //       fk_plant_id: action.payload.fk_plant_id,
    //     },
    //   ];

    default:
      return state;
  }
};
