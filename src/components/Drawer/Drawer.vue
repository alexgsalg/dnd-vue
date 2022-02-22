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
      <spell-drawer :data="dataToCard" />
    </div>
    <!-- Mask -->
    <span
      class="drawer_mask"
      @click="onCloseDrawer()"
    ></span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SpellDrawer from "../InnerDrawer/SpellDrawer/SpellDrawer.vue";

export default Vue.extend({
  components: { SpellDrawer },
  name: "Drawer",
  props: {
    dataToCard: Object,
    showDrawer: Boolean,
  },
  data() {
    return {
      loading: false,
      title: this.dataToCard.name,
      body: document.body,
    };
  },

  computed: {
    drawerState(): boolean  {
      return this.$store.state.drawerState
    },
  },
  methods: {
    onCloseDrawer() {
      this.$store.commit('setDrawerState', false)
      this.$emit("onCloseDrawer", this.showDrawer);
    },
  },

  mounted() {
    //
  },
});
</script>
<style lang="scss">
@import "./Drawer.scss";
</style>
