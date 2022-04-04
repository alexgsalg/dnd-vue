import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dnd-vue-api.herokuapp.com'
});

export const getRaces = () => {
  return api.get('/api/v1/races');
};

export const getRacesById = (index) => {
  return api.get(`/api/v1/races/${index}`);
};
