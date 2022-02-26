<template>
  <div>
    <PageHeader 
      :title="'Spells List'" 
      :page="'spells'"
      :spanType="'count'">
      <span>({{ sktLoading ? 'Calculating' : spells.count }})</span>
    </PageHeader>
    <v-container>
      <div class="row">
        <list-card
          :lg="4"
          :md="6"
          :sm="12"
          v-for="item of spells.results"
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
  name: "Spells",
  components: {
    PageHeader,
    ListCard,
    Drawer,
  },
  data() {
    return {
      loading: false,
      dataToCard: ({} as CardData) || {},
      showDrawer: false,
      sktLoading: true,
    };
  },

  computed: {
    spells() {
      return this.$store.state.spells
    }
  },

  mounted() {
    if (!this.spells.loading) this.sktLoading = false
  },

  methods: {
    cardClicked(item): void {
      this.dataToCard = {
        ...item,
        type: "spell",
      };
      this.showDrawer = true;
      this.$store.commit('setDrawerState', true)
    },

    closeDrawer() {
      this.showDrawer = false;
    },

    // addType(spell): [] {
    //   return spell.map((s) => ({ ...s, type: "spell" }));
    // },
  },
});
</script>
<style lang="scss">
@import "./Spells.scss";
</style>

function mounted() {
  throw new Error('Function not implemented.');
}
