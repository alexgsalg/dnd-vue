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

    <v-row class="d-flex mx-0 pt-3 no_rowgap">
      <div class="box mb-0 pl-0 col-4 col-md-3" v-if="data.type">
        <h5>Type:</h5>
        <div class="box_inner">
          <p>{{ data.type }}</p>
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
    }
  }
});
</script>
<style lang="scss">
@import './MonsterDrawer.scss';
</style>
