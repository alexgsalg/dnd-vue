<template>
  <v-app-bar app dark class="header">
    <div class="header_logo">
      <h1 class="header__title">D<span>&</span>D Vue</h1>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down header_nav">
      <router-link
        class="nav_link"
        v-for="(item, i) of navList"
        :key="i"
        :to="item.route"
        exact
      >
        <font-awesome-icon :icon="item.icon" class="icon alt" />
        {{ item.name }}
      </router-link>
    </v-toolbar-items>

    <v-app-bar-nav-icon
      @click="drawer = true"
      class="hidden-md-and-up"
    ></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" absolute temporary class="mobile_nav">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in navList"
            :key="i"
            :to="item.route"
            class="nav_link"
          >
            <v-list-item-icon>
              <font-awesome-icon :icon="['fas', item.icon]" class="icon alt" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data: () => ({
    drawer: false,
    navList: [
      { name: 'Home', route: '/', icon: 'beer' },
      { name: 'Spells', route: '/spells', icon: 'scroll' },
      {
        name: 'Monsters',
        route: '/monsters',
        icon: 'spaghetti-monster-flying'
      },
      {
        name: 'Classes',
        route: '/classes',
        icon: 'fa-address-book'
      },
      {
        name: 'Races',
        route: '/races',
        icon: 'fa-dragon'
      },
      {
        name: 'Characters',
        route: '/characters',
        icon: 'fa-person-dots-from-line'
      }
    ]
  })
});
</script>
<style lang="scss">
@import './Header.scss';
</style>
