<template>
  <div class="container">
    <!-- Principle stats -->
    <v-row class="d-flex mx-0 mb-4 no_rowgap">
      <div class="highlight mb-0 pl-0 col-4" v-if="data.hit_points">
        <h4>Hit points</h4>
        <div class="highlight_data">
          <font-awesome-icon icon="fa-solid fa-heart" class="hitpoint" />
          <p>{{ data.hit_points }}</p>
        </div>
      </div>

      <div class="highlight mb-0 pl-0 col-4" v-if="data.armor_class">
        <h4>Armor Class</h4>
        <div class="highlight_data">
          <font-awesome-icon icon="fa-solid fa-shield-blank" class="hitpoint" />
          <p>{{ data.armor_class }}</p>
        </div>
      </div>

      <div class="highlight mb-0 pl-0 col-4" v-if="data.xp">
        <h4>Experience</h4>
        <div class="highlight_data">
          <font-awesome-icon icon="fas fa-bookmark" class="hitpoint" />
          <p>{{ data.xp }}</p>
        </div>
      </div>
    </v-row>
    <v-divider dark></v-divider>

    <!-- Monster info -->
    <div class="box mt-4">
      <h4>Monsters Stats:</h4>
      <div class="d-flex mx-0 no_rowgap">
        <div class="box_stats mb-0 pl-0 col-4 col-md-3" v-if="data.strength">
          <div class="box_inner">
            <h5>Strength</h5> 
            <span>{{ data.strength }}</span>
          </div>
        </div>
        <div class="box_stats mb-0 pl-0 col-4 col-md-3" v-if="data.intelligence">
          <div class="box_inner">
            <h5>Intelligence</h5> 
            <span>{{ data.intelligence }}</span>
          </div>
        </div>
        
        <div class="box_stats mb-0 pl-0 col-4 col-md-3" v-if="data.wisdom">
          <div class="box_inner">
            <h5>Wisdom</h5> 
            <span>{{ data.wisdom }}</span>
          </div>
        </div>
        
        <div class="box_stats mb-0 pl-0 col-4 col-md-3" v-if="data.charisma">
          <div class="box_inner">
            <h5>Charisma:</h5>
            <span>{{ data.charisma }}</span>
          </div>
        </div>
      </div>
    </div>
    <v-divider dark></v-divider>
    

    <div class=" mx-0 pt-3 no_rowgap">
      <div class="box pl-0" v-if="data.senses">
        <h4>Senses:</h4>
        <div class="box_inner">
          <span class="mb-2" v-for="(value, name, i) of data.senses" :key="i">
            <template> | </template>
            <strong>{{ name | toCapitalize }}:</strong> {{ value }} 
          </span>
        </div>
      </div>
      <div class="box pl-0" v-if="data.speed">
        <h4>Speed:</h4>
        <div class="box_inner">
          <span class="mb-2" v-for="(value, name, i) of data.speed" :key="i">
            <template> | </template>
            <strong>{{ name | toCapitalize }}:</strong> {{ value }} 
          </span>
        </div>
      </div>
      <div class="box pl-0" v-if="data.languages">
        <h4>Languages:</h4>
        <div class="box_inner">
          <span class="mb-2">
            <template> | </template>
            {{ data.languages }} 
          </span>
        </div>
      </div>
      
      <div class="box pl-0" v-if="data.proficiencies">
        <h4>Proficiencies:</h4>
        <div class="box_inner">
          <span class="mb-2" v-for="(item, i) of data.proficiencies" :key="i">
            <template> | </template>
            <strong>{{ item.proficiency.name | afterSemicolon }}:</strong> {{ item.value }} 
          </span>
        </div>
      </div>
      
      <div class="box pl-0" v-if="data.size">
        <h4>Size:</h4>
        <div class="box_inner">
          <span>{{ data.size }}</span>
        </div>
      </div>
    </div>
      <v-divider dark></v-divider>

    <v-row class="d-flex mx-0 pt-3 no_rowgap">
      <div class="box mb-0 pl-0 col-4 col-md-3" v-if="data.type">
        <h5>Type:</h5>
        <div class="box_inner">
          <p>{{ data.type | toCapitalize }}</p>
        </div>
      </div>
      <div class="box mb-0 pl-0 col-4 col-md-3" v-if="data.subtype">
        <h5>Subtype:</h5>
        <div class="box_inner">
          <p>{{ data.subtype }}</p>
        </div>
      </div>
      
      <div class="box mb-0 pl-0 col-4 col-md-3" v-if="data.alignment">
        <h5>Alignment:</h5>
        <div class="box_inner">
          <p>{{ data.alignment | toCapitalize }}</p>
        </div>
      </div>
      
      <div class="box mb-0 pl-0 col-4 col-md-3" v-if="data.size">
        <h5>Size:</h5>
        <div class="box_inner">
          <p>{{ data.size }}</p>
        </div>
      </div>
    </v-row>
      <v-divider dark></v-divider>
    
    <v-row class="d-flex mx-0 pt-3 mb-5">
      <div class="col-3 pl-0" v-if="data.level">
        <h5>Level to get:</h5>
        <p class="mb-0">Level {{ data.level }}</p>
      </div>
      <div class="col-3 pl-0" v-if="data.range">
        <h5>Spell range:</h5>
        <p class="mb-0">{{ data.range }}</p>
      </div>
      <div class="col-3 pl-0" v-if="data.ritual">
        <h5>Need Ritual:</h5>
        <p class="mb-0">{{ data.ritual }}</p>
      </div>
      <div class="col-3 pl-0" v-if="data.duration">
        <h5>Duration:</h5>
        <p class="mb-0">{{ data.duration }}</p>
      </div>
      <div class="col-3 pl-0">
        <h5>Concentration:</h5>
        <p class="mb-0">{{ data.concentration ? 'Yes' : 'No' }}</p>
      </div>
      <div class="col-3 pl-0" v-if="data.casting_time">
        <h5>Casting time:</h5>
        <p class="mb-0">{{ data.casting_time }}</p>
      </div>
      <div class="col-3 pl-0" v-if="data.components">
        <h5>Components:</h5>
        <p class="mb-0">
          <span v-for="(text, i) of data.components" :key="i">
            <template v-if="i > 0">,</template>
            {{ text }}
          </span>
        </p>
      </div>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MonsterDrawer",
  props: {
    data: Object,
  },
  data() {
    return {
      loading: false,
    };
  },

  mounted() {
    // 
  },
  filters: {
    toCapitalize(value) {
      const words = value.split(" ");
      for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      return words.join(" ");
    },
    afterSemicolon (value) {
      const words = value.substring(value.indexOf(":"));
      return words.substring(1);
    }
  }
});
</script>
<style lang="scss" scoped>
@import './MonsterDrawer.scss';
</style>
