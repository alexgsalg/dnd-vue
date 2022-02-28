<template>
  <v-container>
    <v-row>
      <v-col 
        lg="4" md="6" sm="12" 
        v-for="(card, i) of cards" 
        :key="i"
      >
        <v-card class="mx-auto" dark >
          <v-img
            :src="require(`@/assets/img/${card.cover}`)"
            height="100px"
          ></v-img>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
          <v-card-actions>
            <v-btn :to="card.route" class="btn">
              <font-awesome-icon :icon="['fas', card.icon]" class="icon alt"/>
              {{ card.btnText }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
  data() {
    return {
      cards: [
        {title: 'Spells list', subtitle: 'Powerfull and usefull spells to use in you campaign', route: '/spells', icon: 'scroll', btnText: 'Go to list', cover: 'spell-bg.jpg'},
        {title: 'Monsters list', subtitle: 'Search all you need to know to beat them', route: '/monsters', icon: 'spaghetti-monster-flying', btnText: 'Go to list', cover: 'dragon.jpg'},
        {title: 'Characters list', subtitle: 'Powerfull and usefull spells to use in you campaign', route: '/characters', icon: 'fa-person-dots-from-line', btnText: 'See our heros', cover: 'dragon.jpg'},
      ]
    }
  },
});
</script>

<style lang="scss">
  @import './Home.scss';
</style>
