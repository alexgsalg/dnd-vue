import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dnd-vue-api.herokuapp.com'
});

export const getAllSpells = () => {
  return api.get('/api/v1/spells');
};
