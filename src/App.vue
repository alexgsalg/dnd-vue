<template>
  <v-app>
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
  })
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Raleway:wght@100;300;400;500;600;700&display=swap');
@import './sass/reset.scss';
@import './styles.scss';

</style>
