import axios from 'axios';

const api = axios.create({
  baseURL: "https://www.dnd5eapi.co/api",
 });

export const getAllSpells = () => {
  return api.get('/spells');
};

export const getSpell = (params: string) => {
  return api.get(`/spells/${params}`);
};
