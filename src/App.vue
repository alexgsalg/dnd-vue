<template>
  <v-app :class="{ open: drawerState }">
    <Header />
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
      <!-- <router-view /> -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header/Header.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    //
  }),
  computed: {
    drawerState(): boolean  {
      return this.$store.getters.getDrawerState
    },
  },

  mounted() {
    this.$store.dispatch("getSpellsAction");
  }
});
</script>

<style lang="scss">
@font-face {
  font-family: "Blaak";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: local("Blaak"),
   url('/fonts/BlaakRegular.ttf') format("ttf");
}
@font-face {
  font-family: "Blaak";
  font-weight: 700;
  font-style: normal;
  font-display: auto;
  src: local("Blaak"),
   url('/fonts/BlaakBold.ttf') format("ttf");
}

</style>
