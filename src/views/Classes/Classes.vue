<template>
  <div>
    <PageHeader :title="'D&D Classes'" :page="'classes'" :spanType="'count'">
      <span>({{ sktLoading ? 'Calculating' : classes.count }})</span>
    </PageHeader>
    <v-container>
      <div class="row">
        <list-card
          :cols="12"
          :sm="4"
          :md="4"
          :lg="4"
          :xl="3"
          v-for="item of filterClasses"
          dataType="classes"
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
          componentToLoad="classes_drawer"
          @onCloseDrawer="closeDrawer()"
        />
      </Transition>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getSpellsByClasse } from '../../services';
import PageHeader from '../../components/PageHeader/PageHeader.vue';
import ListCard from '../../components/ListCard/ListCard.vue';
import Drawer from '../../components/Drawer/Drawer.vue';

import { CardData } from '../../models/cards';

export default Vue.extend({
  name: 'Classes',
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
    classes() {
      return this.$store.state.classes;
    },
    filterClasses() {
      return this.classes.results.filter((classItem) => {
        return classItem.name.toLowerCase().includes(this.filter.toLowerCase());
      });
    }
  },

  mounted() {
    if (!this.classes.loading) this.sktLoading = false;
    this.$store.dispatch('getClassesAction');
    
  },

  methods: {
    async cardClicked(item): Promise<void> {
      await getSpellsByClasse(item.index).then((response) => {
        item.class_spells = response.data.results || [];
        this.dataToCard = item;
        this.showDrawer = true;
        this.$store.commit('setDrawerState', true);
      })
    },

    closeDrawer() {
      this.showDrawer = false;
    },
  }
});
</script>

<style lang="scss">
@import './Classes.scss';
</style>
