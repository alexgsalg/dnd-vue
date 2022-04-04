<template>
  <div>
    <PageHeader :title="'D&D Races'" :page="'races'" :spanType="'count'">
      <span>({{ sktLoading ? 'Calculating' : races.count }})</span>
    </PageHeader>
    <v-container>
      <div class="row">
        <list-card
          :cols="12"
          :sm="4"
          :md="4"
          :lg="4"
          :xl="3"
          v-for="item of filterRaces"
          dataType="races"
          :key="item.index"
          :data="item"
          @onCardClicked="cardClicked($event)"
          :sktLoading="sktLoading"
        ></list-card>
      </div>

      <Transition name="fade">
        <Drawer
          :dataToCard="dataToCard"
          :showDrawer="showDrawer"
          componentToLoad="races_drawer"
          @onCloseDrawer="closeDrawer()"
        />
      </Transition>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '../../components/PageHeader/PageHeader.vue';
import ListCard from '../../components/ListCard/ListCard.vue';
import Drawer from '../../components/Drawer/Drawer.vue';

import { CardData } from '../../models/cards';

export default Vue.extend({
  name: 'Races',
  components: {
    PageHeader,
    ListCard,
    Drawer
  },
  data() {
    return {
      filter: '',
      loading: false,
      dataToCard: ({} as CardData) || {},
      showDrawer: false,
      sktLoading: true
    };
  },

  computed: {
    races() {
      return this.$store.state.races;
    },
    filterRaces() {
      return this.races.results.filter((raceItem) => {
        return raceItem.name.toLowerCase().includes(this.filter.toLowerCase());
      });
    }
  },

  mounted() {
    if (!this.races.loading) this.sktLoading = false;
    this.$store.dispatch('getRacesAction');
    
  },

  methods: {
    cardClicked(item): void {
      this.dataToCard = item;
      this.showDrawer = true;
      this.$store.commit('setDrawerState', true);
    },

    closeDrawer() {
      this.showDrawer = false;
    },
  }
});
</script>

<style lang="scss">
@import './Races.scss';
</style>
