<template>
  <div class="container">
    <!-- Principle info -->
    <v-row class="highlight mx-0 mb-4 no_rowgap">
      <div class="highlight_data mb-0" v-if="data.speed">
        <h4>Speed:</h4>
        <div>
          <font-awesome-icon icon="fa-solid fa-person-running" />
          <p>{{ data.speed }}</p>
        </div>
      </div>
      <div class="highlight_data mb-0" v-if="data.size">
        <h4>Size:</h4>
        <div>
          <font-awesome-icon icon="fa-solid fa-up-right-and-down-left-from-center" />
          <p>{{ data.size }}</p>
        </div>
      </div>
    </v-row>
    <v-divider dark></v-divider>

    <div class="box mt-4" v-if="data.size_description">
      <h4>{{ data.name }} size:</h4>
      <div class="box_inner">
        <p>{{ data.size_description }}</p>
      </div>
      <v-divider dark></v-divider>
    </div>

    <div class="box mt-4" v-if="data.age">
      <h4>Age:</h4>
      <div class="box_inner">
        <p>{{ data.age }}</p>
      </div>
      <v-divider dark></v-divider>
    </div>

    <div class="box mt-4" v-if="data.alignment">
      <h4>Alignment:</h4>
      <div class="box_inner">
        <p>{{ data.alignment }}</p>
      </div>
      <v-divider dark></v-divider>
    </div>

    <!-- Race stats -->
    <div class="box mt-4">
      <h4>{{ data.name }} ability bonus:</h4>
      <div class="stats mx-0 no_rowgap">
        <div
          v-for="(ability, i) of data.ability_bonuses" 
          :key="i" 
          class="stats_box mb-0 pl-0 "
        >
          <div class="box_inner">
            <h5>{{ ability.ability_score.name}}</h5>
            <span>+{{ ability.bonus }}</span>
          </div>
        </div>
      </div>
    </div>
    <v-divider dark></v-divider>

    <div class="box mt-4" v-if="data.language_desc">
      <h4>Language description:</h4>
      <div class="box_inner">
        <p>{{ data.language_desc }}</p>
      </div>
      <p><strong>Starting languages: </strong> 
        <span v-for="(language, i) of data.languages" :key="i">
          <template v-if="i > 0">, </template>
          {{ language.name }}
        </span>
      </p>
      <p v-if="data.language_options"><strong>Aditional languages:</strong>  ({{ data.language_options.choose }})
        <span v-for="(aditional, i) of data.language_options.from" :key="i">
          <template v-if="i > 0">, </template>
          {{ aditional.name }}
        </span>
      </p>
      <v-divider dark></v-divider>
    </div>

    <div class="box" v-if="data.starting_proficiency_options">
      <h4>Starting proficiency options: ({{ data.starting_proficiency_options.choose }})</h4>
      <div class="box_inner">
        <p><strong>Skills: </strong>
          <span v-for="(proficiency, i) of data.starting_proficiency_options.from" :key="i">
            <template v-if="i > 0">, </template>
            {{ proficiency.name | afterSemicolon }}
          </span>
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>

    <div class="box" v-if="data.traits && data.traits.length > 0">
      <h4>{{ data.name}} traits:</h4>
      <div class="box_inner">
        <p>
          <span v-for="(text, i) of data.traits" :key="i">
            <template v-if="i > 0">, </template>
            {{ text.name }}
          </span>
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>

    <div class="box" v-if="data.subraces && data.subraces.length > 0">
      <h4>{{ data.name}} subraces:</h4>
      <div class="box_inner">
        <p>
          <span v-for="(text, i) of data.subraces" :key="i">
            <template v-if="i > 0">, </template>
            {{ text.name }}
          </span>
        </p>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RacesDrawer',
  props: {
    data: Object,
    loadData: Boolean
  },
  data() {
    return {
      loading: false
    };
  },

  filters: {
    toCapitalize(value) {
      const words = value.split(' ');
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      return words.join(' ');
    },
    afterSemicolon(value) {
      const words = value.substring(value.indexOf(':'));
      return words.substring(1);
    }
  }
});
</script>
<style lang="scss">
@import './RacesDrawer.scss';
</style>
