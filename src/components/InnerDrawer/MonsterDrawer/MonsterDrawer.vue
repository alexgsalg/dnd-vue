<template>
  <div class="container">
    <p class="features">
      {{ data.size }} {{ `, ${data.type}` }} {{ `, ${data.alignment}` }}
    </p>
    <!-- Principle info -->
    <v-row class="highlight mx-0 mb-4 no_rowgap">
      <div class="highlight_data mb-0" v-if="data.hit_points">
        <h4>Hit points</h4>
        <div>
          <font-awesome-icon icon="fa-solid fa-heart" />
          <p>{{ data.hit_points }}</p>
        </div>
      </div>

      <div class="highlight_data mb-0" v-if="data.armor_class">
        <h4>Armor Class</h4>
        <div>
          <font-awesome-icon icon="fa-solid fa-shield-blank" />
          <p>{{ data.armor_class }}</p>
        </div>
      </div>

      <div class="highlight_data mb-0" v-if="data.xp">
        <h4>Experience</h4>
        <div>
          <font-awesome-icon icon="fas fa-bookmark"/>
          <p>{{ data.xp }}</p>
        </div>
      </div>

      <div class="highlight_data mb-0" v-if="data.challenge_rating">
        <h4>Challenge</h4>
        <div>
          <p>{{ data.challenge_rating }}</p>
        </div>
      </div>
    </v-row>
    <v-divider dark></v-divider>

    <!-- Monster stats -->
    <div class="box mt-4">
      <h4>Monsters Stats:</h4>
      <div class="stats mx-0 no_rowgap">
        <div class="stats_box mb-0 pl-0 " v-if="data.strength">
          <div class="box_inner">
            <h5>Strength</h5>
            <span>{{ data.strength }}</span>
          </div>
        </div>

        <div
          class="stats_box mb-0 pl-0 "
          v-if="data.intelligence"
        >
          <div class="box_inner">
            <h5>Intelligence</h5>
            <span>{{ data.intelligence }}</span>
          </div>
        </div>
        
        <div
          class="stats_box mb-0 pl-0 "
          v-if="data.constitution"
        >
          <div class="box_inner">
            <h5>Constitution</h5>
            <span>{{ data.constitution }}</span>
          </div>
        </div>

        <div
          class="stats_box mb-0 pl-0 "
          v-if="data.dexterity"
        >
          <div class="box_inner">
            <h5>Dexterity</h5>
            <span>{{ data.dexterity }}</span>
          </div>
        </div>

        <div class="stats_box mb-0 pl-0 " v-if="data.wisdom">
          <div class="box_inner">
            <h5>Wisdom</h5>
            <span>{{ data.wisdom }}</span>
          </div>
        </div>

        <div class="stats_box mb-0 pl-0 " v-if="data.charisma">
          <div class="box_inner">
            <h5>Charisma:</h5>
            <span>{{ data.charisma }}</span>
          </div>
        </div>
      </div>
    </div>
    <v-divider dark></v-divider>

    <div class="mx-0 pt-3 no_rowgap">
      <div class="box pl-0" v-if="data.senses">
        <h4>Senses:</h4>
        <div class="box_inner">
          <span class="mb-2" v-for="(value, name, i) of data.senses" :key="i">
            <template v-if="i > 0"> | </template>
            <template v-else>- </template>
            <strong>{{ name | toCapitalize }}:</strong> {{ value }}
          </span>
        </div>
      </div>
      <div class="box pl-0" v-if="data.speed">
        <h4>Speed:</h4>
        <div class="box_inner">
          <span class="mb-2" v-for="(value, name, i) of data.speed" :key="i">
            <template v-if="i > 0"> | </template>
            <template v-else>- </template>
            <strong>{{ name | toCapitalize }}:</strong> {{ value }}
          </span>
        </div>
      </div>
      <div class="box pl-0" v-if="data.languages">
        <h4>Languages:</h4>
        <div class="box_inner">
          <span class="mb-2">
            - {{ data.languages }}
          </span>
        </div>
      </div>

      <div class="box pl-0" v-if="data.proficiencies">
        <h4>Proficiencies:</h4>
        <div class="box_inner">
          <span class="mb-2" v-for="(item, i) of data.proficiencies" :key="i">
            <template v-if="i > 0"> | </template>
            <template v-else>- </template>
            <strong>{{ item.proficiency.name | afterSemicolon }}:</strong>
            {{ item.value }}
          </span>
        </div>
      </div>
    </div>
    <v-divider dark></v-divider>

    <div class="box mx-0 pt-3 pl-0" v-if="data.special_abilities">
      <h4>Special abilities:</h4>
      <div class="box_inner">
        <p class="mb-2" v-for="(item, i) of data.special_abilities" :key="i">
          <strong>- {{ item.name }}:</strong>
          <span v-if="item.usage"
            >({{ item.usage.times }} {{ item.usage.type }})</span
          >
          {{ item.desc }}
        </p>
      </div>
    </div>
    <v-divider dark></v-divider>

    <div class="box mx-0 pt-3 pl-0" v-if="data.actions">
      <h4>Actions:</h4>
      <div class="box_inner">
        <p class="mb-2" v-for="(item, i) of data.actions" :key="i">
          <strong>- {{ item.name }}:</strong> {{ item.desc }}
        </p>
      </div>
    </div>
    <v-divider dark></v-divider>

    <div class="box mx-0 pt-3 pl-0" v-if="data.legendary_actions">
      <h4>Legendary actions:</h4>
      <div class="box_inner">
        <p class="mb-2" v-for="(item, i) of data.legendary_actions" :key="i">
          <strong>- {{ item.name }}:</strong> {{ item.desc }}
        </p>
      </div>
    </div>
    <v-divider dark></v-divider>


  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MonsterDrawer',
  props: {
    data: Object
  },
  data() {
    return {
      loading: false
    };
  },

  mounted() {
    //
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
    // sanitizeText (value) {
    //   const words = value.substring(value.indexOf(":"));
    //   if (value.indexOf("_")) return
    //   return words.substring(1);
    // }
  }
});
</script>
<style lang="scss" scoped>
@import './MonsterDrawer.scss';
</style>
