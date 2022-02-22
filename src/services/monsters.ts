import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.dnd5eapi.co/api'
});

export const getAllMonsters = () => {
  return api.get('/monsters');
};

export const getMonster = (params: string) => {
  return api.get(`/monsters/${params}`);
};
