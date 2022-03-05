<template>
  <v-app :class="{ open: drawerState }">
    <Header />
    <v-main>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </transition>
      <!-- <router-view /> -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header/Header.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    //
  }),
  computed: {
    drawerState(): boolean {
      return this.$store.getters.getDrawerState;
    }
  },

  mounted() {
    this.$store.dispatch('getSpellsAction');
    this.$store.dispatch('getMonstersAction');
  }
});
</script>

<style lang="scss">
@font-face {
  font-family: 'Blaak';
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: local('Blaak'), url('/fonts/BlaakRegular.ttf') format('ttf');
}
@font-face {
  font-family: 'Blaak';
  font-weight: 700;
  font-style: normal;
  font-display: auto;
  src: local('Blaak'), url('/fonts/BlaakBold.ttf') format('ttf');
}
</style>
