import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dnd-vue-api.herokuapp.com'
});

export const getAlignments = () => {
  return api.get('/alignments');
};

export const getClasses = () => {
  return api.get('/classes');
};

export const getRaces = () => {
  return api.get('/races');
};
