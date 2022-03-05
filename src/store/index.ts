import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';

import { getAllSpells, getAllMonsters } from '../services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    elBody: document.body,
    drawerState: false,
    spells: { results: [], count: Number, loading: false },
    monsters: { results: [], count: Number, loading: false },
    characters: { results: [], count: Number, loading: false }
  },
  getters,
  mutations: {
    setDrawerState(state, value) {
      state.drawerState = value;
      if (value) {
        state.elBody.classList.add('drawer-open');
      } else {
        state.elBody.classList.remove('drawer-open');
      }
    },
    SET_SPELLS(state, spells) {
      state.spells = spells;
    },
    SET_MONSTERS(state, monsters) {
      state.monsters = monsters;
    }
  },
  actions: {
    getSpellsAction({ commit }) {
      if (localStorage.spellList) {
        // Get LocalStorage
        const results = JSON.parse(localStorage.getItem('spellList'));
        commit('SET_SPELLS', results);
      } else {
        getAllSpells()
          .then((response) => response.data)
          .then((data) => {
            const results = {
              results: data.results.map((s) => ({ ...s, itemType: 'spells' })),
              count: data.count,
              loading: false
            };
            commit('SET_SPELLS', results);
            console.log(results);
            // Set LocalStorage
            localStorage.setItem('spellList', JSON.stringify(results));
          });
      }
    },
    getMonstersAction({ commit }) {
      if (localStorage.monsterList) {
        // Get LocalStorage
        const results = JSON.parse(localStorage.getItem('monsterList'));
        commit('SET_MONSTERS', results);
      } else {
        getAllMonsters()
          .then((response) => response.data)
          .then((data) => {
            const results = {
              results: data.results.map((m) => ({
                ...m,
                itemType: 'monsters'
              })),
              count: data.count,
              loading: false
            };
            commit('SET_MONSTERS', results);
            console.log(results);
            // Set LocalStorage
            localStorage.setItem('monsterList', JSON.stringify(results));
          });
      }
    }
  },
  modules: {}
});
