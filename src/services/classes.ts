import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dnd-vue-api.herokuapp.com'
});

export const getClasses = () => {
  return api.get('/api/v1/classes');
};

export const getSpellsByClasse = (selectedClass) => {
  return api.get(`/classes/${selectedClass}/spells`);
};
