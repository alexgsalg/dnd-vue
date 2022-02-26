import Vue from 'vue';
import Vuex from 'vuex';
import { getAllSpells } from '../services'

import * as getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    elBody: document.body,
    drawerState: false,
    spells: {results: [], count: Number, loading: false},
    // spells: [],
    characters: {results: [], count: Number},
    monsters: {results: [], count: Number}
  },
  getters,
  mutations: {
    setDrawerState(state, value) {
      state.drawerState = value;
      if ( value ) {
        state.elBody.classList.add('drawer-open');
      } else {
        state.elBody.classList.remove('drawer-open');
      }
    },
    SET_SPELLS(state, spells) {
      state.spells = spells;
    }
  },
  actions: {
    getSpellsAction({ commit }) {
      if(localStorage.spellList) { 
        // Get LocalStorage
        const results = JSON.parse(localStorage.getItem( 'spellList') );
        commit('SET_SPELLS', results);
      } else {
        getAllSpells()
          .then((response) => response.data)
          .then((data) => {
            const results =  {
              results: data.results.map((s) => ({ ...s, type: "spell" })),
              count: data.count,
              loading: false
            }
            commit('SET_SPELLS', results);
            // Set LocalStorage
            localStorage.setItem('spellList', JSON.stringify( results ));
          });
      }
    }
  },
  modules: {}
});
