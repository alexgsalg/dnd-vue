import Vue from 'vue';
import Vuex from 'vuex';
import { getAllSpells } from '../services'

import * as getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    elBody: document.body,
    drawerState: false,
    spells: {results: [], count: Number},
    characters: [],
    monsters: []
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
      console.log('change', state.drawerState)
    },
    SET_SPELLS(state, spells) {
      state.spells = {
        results: spells.results.map((s) => ({ ...s, type: "spell" })),
        count: spells.count
      }
    }
  },
  actions: {
    getSpellsAction({ commit }) {
      getAllSpells().then(response => {
        commit('SET_SPELLS', response.data)
      })
    }
  },
  modules: {}
});
