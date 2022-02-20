<template>
  <div class="drawer">
    <div class="drawer_body" :class="{ open: showDrawer }">
      <div class="drawer_header">
        <div>
          <button @click="onCloseDrawer()">
            <font-awesome-icon icon="fa-solid fa-angles-left" />
          </button>
          <span>Spells list</span>
        </div>
        <h2>{{ this.dataToCard.name }}</h2>
      </div>
      <!-- If Spells Data -->
      <spell-drawer :data="dataToCard" />
    </div>
    <!-- Mask -->
    <span
      class="drawer_mask"
      :class="{ open: showDrawer }"
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
    };
  },

  methods: {
    onCloseDrawer() {
      this.$emit("onCloseDrawer", this.showDrawer);
    },
  },

  mounted() {
    console.log(this.showDrawer);
    // getAllModal().then((response) => this.spellList = response.data)
  },
});
</script>
<style lang="scss">
@import "./Drawer.scss";
</style>
