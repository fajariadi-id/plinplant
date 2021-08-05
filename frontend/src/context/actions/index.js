import api from '../../helper/axios';

// :::::::::::::::::::::::::::::: PLANTS ::::::::::::::::::::::::::::::
export const getPlants = () => async (dispatch) => {
  const res = await api.get('/api/plants');

  dispatch({ type: 'GET_PLANTS', payload: res.data.data });
};

export const getPlant = (id) => async (dispatch) => {
  const res = await api.get(`/api/plants/${id}`);

  dispatch({ type: 'GET_PLANT', payload: res.data.data[0] });
};

// :::::::::::::::::::::::::::::: PLANTS ::::::::::::::::::::::::::::::
export const getReviews = (id) => async (dispatch) => {
  const res = await api.get(`/api/reviews/${id}`);

  dispatch({ type: 'GET_REVIEWS', payload: res.data.data });
};
