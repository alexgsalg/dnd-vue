<template>
  <div>
    <PageHeader :title="'Spells List'" :page="'spells'" :spanType="'count'">
      <span>({{ sktLoading ? 'Calculating' : spells.count }})</span>
    </PageHeader>
    <v-container>
      <div class="searchform">
        <h3 class="searchform__title">Search for your spells</h3>
        <fieldset class="searchform__field">
          <legend></legend>
          <input
            type="text"
            class="searchform__input"
            v-model="filter"
            placeholder="Search the spell name..."
          />
          <font-awesome-icon
            icon="fa-solid fa-magnifying-glass"
            class="searchform__icon alt"
          />
        </fieldset>
      </div>
      <div class="row">
        <list-card
          :cols="12"
          :sm="4"
          :md="4"
          :lg="4"
          :xl="3"
          v-for="item of filterSpells"
          dataType="spells"
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
          componentToLoad="spell_drawer"
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
  name: 'Spells',
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
    spells() {
      return this.$store.state.spells;
    },
    filterSpells() {
      return this.spells.results.filter((spell) => {
        return spell.name.toLowerCase().includes(this.filter.toLowerCase());
      });
    }
  },

  mounted() {
    if (!this.spells.loading) this.sktLoading = false;
    this.$store.dispatch('getSpellsAction');
  },

  methods: {
    cardClicked(item): void {
      this.dataToCard = {
        ...item,
        type: 'spell'
      };
      this.showDrawer = true;
      this.$store.commit('setDrawerState', true);
    },

    closeDrawer() {
      this.showDrawer = false;
    }
  }
});
</script>
<style lang="scss">
@import './Spells.scss';
</style>
