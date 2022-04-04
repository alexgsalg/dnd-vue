<template>
  <div>
    <section class="hero">
      <h1 class="hero__title">Prepare to your campaign</h1>
      <p class="hero__subtitle">Search for D&D infomations to help your game.</p>
    </section>
    <v-container>
      <v-row>
        <v-col xl="4" lg="6" md="6" sm="12" cols="12" v-for="(card, i) of cards" :key="i">
          <v-card class="mx-auto" dark>
            <v-img
              :src="require(`@/assets/img/${card.cover}`)"
              height="150px"
            ></v-img>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
            <v-card-actions>
              <v-btn :to="card.route" class="btn">
                <font-awesome-icon :icon="['fas', card.icon]" class="icon alt" />
                {{ card.btnText }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {},
  data() {
    return {
      cards: [
        {
          title: 'Spells list',
          subtitle: 'Powerfull and usefull spells to use in you campaign',
          route: '/spells',
          icon: 'scroll',
          btnText: 'Go to list',
          cover: 'spell-bg.jpg'
        },
        {
          title: 'Monsters list',
          subtitle: 'Search all you need to know to beat them',
          route: '/monsters',
          icon: 'spaghetti-monster-flying',
          btnText: 'Go to list',
          cover: 'dragon.jpg'
        },
        {
          title: 'D&D Classes',
          subtitle: 'Choose carefully who you will become',
          route: '/classes',
          icon: 'fa-address-book',
          btnText: 'Search our heros',
          cover: 'wizard.jpg'
        },
        {
          title: 'D&D Races',
          subtitle: 'Understand your history',
          route: '/races',
          icon: 'fa-dragon',
          btnText: 'Know your legacy',
          cover: 'races.jpg'
        },
        {
          title: 'Characters list',
          subtitle: 'Powerfull and usefull spells to use in you campaign',
          route: '/characters',
          icon: 'fa-person-dots-from-line',
          btnText: 'Prepare yourself',
          cover: 'dnd.jpg'
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
@import './Home.scss';
</style>
