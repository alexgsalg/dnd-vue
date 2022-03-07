<template>
<div class="fullheight">
  <PageHeader :title="'Character information'" :page="'characters'" :spanType="'count'">
    
    <v-tabs slot="tabs" class="side container" v-model="tab" hide-on-leave>
      <v-tab class="side_item" key="classes">
        <img src="../../assets/img/swords.png" class="side__img" alt="Classes icon">
        <a class="side__title">Classes</a>
      </v-tab>
      <v-tab class="side_item" key="races">
        <img src="../../assets/img/helmet.png" class="side__img" alt="Races icon">
        <a class="side__title">Races</a>
      </v-tab>
      <v-tab class="side_item" key="equipment">
        <img src="../../assets/img/armor.png" class="side__img" alt="alignments icon">
        <a class="side__title">alignments</a>
      </v-tab>
    </v-tabs>
  </PageHeader>
  <v-container>
    <v-tabs-items v-model="tab" class="content">
      <v-tab-item key="equipments">
        <div class="row">
          <list-card
            :cols="12"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="4"
            v-for="item of equipments.results"
            dataType="equipments"
            :key="item.index"
            :data="item"
            @onCardClicked="cardClicked($event)"
            :sktLoading="sktLoading"
          ></list-card>
        </div>
      </v-tab-item>
      <v-tab-item key="races">
        <div class="row">
          <list-card
            :cols="12"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="4"
            v-for="item of races.results"
            dataType="races"
            :key="item.index"
            :data="item"
            @onCardClicked="cardClicked($event)"
            :sktLoading="sktLoading"
          ></list-card>
        </div>
      </v-tab-item>
      <v-tab-item key="alignments">
        <div class="row">
          <list-card
            :cols="12"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="4"
            v-for="item of alignments.results"
            dataType="alignments"
            :key="item.index"
            :data="item"
            @onCardClicked="cardClicked($event)"
            :sktLoading="sktLoading"
          ></list-card>
        </div>
      </v-tab-item>
    </v-tabs-items>

    <Transition name="fade">
        <Drawer
          :dataToCard="dataToCard"
          :showDrawer="showDrawer"
          componentToLoad="monster_drawer"
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
  name: 'Characters',
  components: {
    PageHeader,
    ListCard,
    Drawer
    },
  data: () => ({
    dataToCard: ({} as CardData) || {},
    tab: null,
    showDrawer: false,
    sktLoading: true
  }),
  computed: {
    equipments() {
      return this.$store.state.equipments;
    },
    races() {
      return this.$store.state.races;
    },
    alignments() {
      return this.$store.state.alignments;
    },
  },

  mounted() {
    if (!this.equipments.loading) this.sktLoading = false;
  },

  methods: {
    cardClicked(item): void {
      this.dataToCard = item;
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
@import './Characters.scss';
</style>
