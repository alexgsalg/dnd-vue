import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dnd-vue-api.herokuapp.com'
});

export const getAlignments = () => {
  return api.get('/api/v1/alignments');
};

export const getEquipments = () => {
  return api.get('/api/v1/equipments');
};

export const getRaces = () => {
  return api.get('/api/v1/races');
};
