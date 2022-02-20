<template>
  <!-- </header> -->
  <v-app-bar app class="header" dark>
      <div class="header_nav">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
      <nav class="header_nav">
        <router-link class="nav_link" to="/" exact>Home</router-link>
        <router-link class="nav_link" to="/spells">Spells</router-link>
        <router-link class="nav_link" to="/monsters">Monsters</router-link>
        <router-link class="nav_link" to="/characters">Characters</router-link>
        <router-link class="nav_link" to="/roleplay">Roleplay</router-link>
      </nav>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return {};
  }
});
</script>
<style lang="scss">
@import './Header.scss';
</style>
