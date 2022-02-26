import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dnd-vue-api.herokuapp.com'
});

export const getAllMonsters = () => {
  return api.get('/monsters');
};

// export const getMonster = (params: string) => {
//   return api.get(`/monsters/${params}`);
// };
