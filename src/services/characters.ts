import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dnd-vue-api.herokuapp.com'
});

export const getAlignments = () => {
  return api.get('/alignments');
};

export const getEquipments = () => {
  return api.get('/equipments');
};

export const getRaces = () => {
  return api.get('/races');
};
