import axios from 'axios';

const api = axios.create({
  baseURL: 'https://plinplant-server.herokuapp.com',
});

export default api;
