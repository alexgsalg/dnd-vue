import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dnd-vue-api.herokuapp.com'
});

export const getAllMonsters = () => {
  return api.get('/monsters');
};
