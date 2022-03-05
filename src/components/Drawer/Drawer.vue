<template>
  <div class="drawer" :class="{ open: showDrawer }">
    <div class="drawer_body">
      <div class="drawer_header">
        <div>
          <button @click="onCloseDrawer()">
            <font-awesome-icon icon="fa-solid fa-angles-left" />
          </button>
          <span>Back to Spells list</span>
        </div>
        <h2>{{ this.dataToCard.name }}</h2>
      </div>
      <!-- If Spells Data -->
      <spell-drawer
        v-if="componentToLoad === 'spell_drawer'"
        :data="dataToCard"
      />
      <!-- If Monster Data -->
      <monster-drawer
        v-else-if="componentToLoad === 'monster_drawer'"
        :data="dataToCard"
      />
      <!-- If Character Data -->
      <character-drawer
        v-else-if="componentToLoad === 'character_drawer'"
        :data="dataToCard"
      />
    </div>
    <!-- Mask -->
    <span class="drawer_mask" @click="onCloseDrawer()"></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SpellDrawer from '../InnerDrawer/SpellDrawer/SpellDrawer.vue';
import MonsterDrawer from '../InnerDrawer/MonsterDrawer/MonsterDrawer.vue';

export default Vue.extend({
  components: {
    SpellDrawer,
    MonsterDrawer
  },
  name: 'Drawer',
  props: {
    componentToLoad: String,
    dataToCard: Object,
    showDrawer: Boolean
  },
  data() {
    return {
      loading: false,
      title: this.dataToCard.name,
      body: document.body
    };
  },

  computed: {
    drawerState(): boolean {
      return this.$store.state.drawerState;
    }
  },
  methods: {
    onCloseDrawer() {
      this.$store.commit('setDrawerState', false);
      this.$emit('onCloseDrawer', this.showDrawer);
    }
  },

  mounted() {
    //
  }
});
</script>
<style lang="scss">
@import './Drawer.scss';
</style>
