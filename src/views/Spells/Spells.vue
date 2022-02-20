<template>
  <div>
    <PageHeader 
      :title="'Spells List'" 
      :page="'spells'"
      :spanType="'count'">
      <span>({{ count }})</span>
    </PageHeader>
    <v-container>
      <div class="row">
        <list-card
          v-for="item of results"
          :key="item.index"
          :data="item"
          @onCardClicked="cardClicked($event)"
        >
        </list-card>
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

import { getAllSpells } from '../../services/spells';
import { DefRes } from '../../models/response';
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
      spellList: {} as DefRes,
      results: [],
      count: Number,
      showDrawer: false,
    };
  },

  methods: {
    cardClicked(item): void {
      this.dataToCard = {
        ...item,
        type: "spell",
      };
      this.showDrawer = true;
    },

    closeDrawer() {
      this.showDrawer = false;
    },

    addType(spell): [] {
      return spell.map((s) => ({ ...s, type: "spell" }));
    },
  },

  mounted() {
    getAllSpells()
      .then((response) => response.data)
      .then((data) => {
        this.results = this.addType(data.results);
        this.count = data.count;
      });
  },
});
</script>
<style lang="scss">
@import "./Spells.scss";
</style>
