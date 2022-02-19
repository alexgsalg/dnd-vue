<template>
  <main>
    <div class="container">
      <h2>Spells list</h2>
      <p>Count: {{ count }}</p>
      <div class="row">
        <list-card
          v-for="item of results"
          :key="item.index"
          :data="item"
          @onCardClicked="cardClicked($event)"
        >
        </list-card>
      </div>
    </div>
      <!-- v-if="showDrawer"  -->
    <Drawer 
      :dataToCard="dataToCard" 
      :showDrawer="showDrawer"
      @onCloseDrawer="closeDrawer()" 
    />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import ListCard from '../../components/ListCard/ListCard.vue';
import Drawer from '../../components/Drawer/Drawer.vue';

import { getAllSpells } from '../../services/spells';
import { DefRes } from '../../models/response';

type CardData = {
  id: string;
  name: string;
  url: string;
  type: string;
};

export default Vue.extend({
  name: 'Spells',
  components: {
    ListCard,
    Drawer
  },
  data() {
    return {
      loading: false,
      dataToCard: ({} as CardData) || {},
      spellList: {} as DefRes,
      results: [],
      count: Number,
      showDrawer: false
    };
  },

  methods: {
    cardClicked(item): void {
      this.dataToCard = {
        ...item, type: 'spell' 
      };
      this.showDrawer = true
    },

    closeDrawer() {
      this.showDrawer = false
    },

    addType(spell): [] {
      return spell.map((s) => ({ ...s, type: 'spell' }));
    }
  },

  mounted() {
    getAllSpells()
      .then((response) => response.data)
      .then((data) => {
        this.results = this.addType(data.results);
        this.count = data.count;
      });
  }
});
</script>
<style lang="scss">
@import './Spells.scss';
</style>
