<template>
  <header class="header">
    <!-- logo -->
    <router-link class="header_logo" to="/">
      <!-- <img alt="Vue logo" src="../../assets/logo.png" /> -->
      <h1>PocketRoll</h1>
    </router-link>
    <!-- menu -->
    <nav class="header_nav">
      <router-link class="nav_link" to="/" exact>Home</router-link>
      <router-link class="nav_link" to="/spells">Spells</router-link>
      <router-link class="nav_link" to="/monsters">Monsters</router-link>
      <router-link class="nav_link" to="/characters">Characters</router-link>
      <router-link class="nav_link" to="/roleplay">Roleplay</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return { };
  }
});
</script>
<style lang="scss">
@import './Header.scss';
</style>
