import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';

import { getAllSpells, getAllMonsters, getAlignments, getClasses, getRaces } from '../services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    elBody: document.body,
    drawerState: false,
    spells: { results: [], count: Number, loading: false },
    monsters: { results: [], count: Number, loading: false },
    classes: { results: [], count: Number, loading: false },
    races: { results: [], count: Number, loading: false },
    alignments: { results: [], count: Number, loading: false }
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
    },
    SET_CLASSES(state, classes) {
      state.classes = classes;
    },
    SET_RACES(state, races) {
      state.races = races;
    },
    SET_ALIGNMENTS(state, alignments) {
      state.alignments = alignments;
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
    },
    getClassesAction({ commit }) {
      if (localStorage.classesList) {
        // Get LocalStorage
        const results = JSON.parse(localStorage.getItem('classesList'));
        commit('SET_CLASSES', results);
      } else {
        getClasses()
          .then((response) => response.data)
          .then((data) => {
            const results = {
              results: data.results.map((m) => ({
                ...m,
                itemType: 'classes'
              })),
              count: data.count,
              loading: false
            };
            commit('SET_CLASSES', results);
            console.log(results);
            // Set LocalStorage
            localStorage.setItem('classesList', JSON.stringify(results));
          });
      }
    },
    getAlignmentsAction({ commit }) {
      if (localStorage.alignmentsList) {
        // Get LocalStorage
        const results = JSON.parse(localStorage.getItem('alignmentsList'));
        commit('SET_ALIGNMENTS', results);
      } else {
        getAlignments()
          .then((response) => response.data)
          .then((data) => {
            const results = {
              results: data.results.map((m) => ({
                ...m,
                itemType: 'alignments'
              })),
              count: data.count,
              loading: false
            };
            commit('SET_ALIGNMENTS', results);
            console.log(results);
            // Set LocalStorage
            localStorage.setItem('alignmentsList', JSON.stringify(results));
          });
      }
    },
    getRacesAction({ commit }) {
      if (localStorage.racesList) {
        // Get LocalStorage
        const results = JSON.parse(localStorage.getItem('racesList'));
        commit('SET_RACES', results);
      } else {
        getRaces()
          .then((response) => response.data)
          .then((data) => {
            const results = {
              results: data.results.map((m) => ({
                ...m,
                itemType: 'races'
              })),
              count: data.count,
              loading: false
            };
            commit('SET_RACES', results);
            console.log(results);
            // Set LocalStorage
            localStorage.setItem('racesList', JSON.stringify(results));
          });
      }
    },
  },
  modules: {}
});
