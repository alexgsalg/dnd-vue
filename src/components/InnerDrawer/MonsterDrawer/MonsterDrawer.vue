<template>
  <div class="container">
    <div class="box">
      <h4>Description:</h4>
      <div class="box_inner">
        <p v-for="(text, i) of data.desc" :key="i">
          {{ text }}
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>
    
    <div class="box" v-if="data.higher_level">
      <h5>Casted at higher level:</h5>
      <div class="box_inner">
        <p v-for="(text, i) of data.higher_level" :key="i">
          {{ text }}
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>
    
    <div class="box" v-if="data.classes">
      <h5>Used by:</h5>
      <div class="box_inner">
        <p>
          <span v-for="(text, i) of data.classes" :key="i">
            <template v-if="i > 0">,</template>
            {{ text.name }}
          </span>
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>
    
    <div class="box" v-if="data.damage">
      <h5>Damage:</h5>
      <div class="box_inner">
        <p>{{ data.damage.damage_type.name }}</p>
        <p v-if="data.damage.damage_at_character_level">
          <strong>Damage at character level</strong><br>
          <span v-for="(value, name, i) of data.damage.damage_at_character_level" :key="i">
            <template v-if="i > 0"> | </template>
            <strong>Level {{ name }}</strong>: {{ value }} 
          </span>
        </p>
        <p v-if="data.damage.damage_at_slot_level">
          <strong>Damage at slot level</strong><br>
          <span v-for="(value, name, i) of data.damage.damage_at_slot_level" :key="i">
            <template v-if="i > 0"> | </template>
            <strong>Level {{ name }}</strong>: {{ value }} 
          </span>
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>
    
    <div class="box" v-if="data.heal_at_slot_level">
      <h5>Heal at slot level:</h5>
      <div class="box_inner">
        <p>
          <span v-for="(value, name, i) of data.heal_at_slot_level" :key="i">
            <template v-if="i > 0"> | </template>
            <strong>Level {{ name }}</strong>: {{ value }} 
          </span>
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>
    
    <v-row class="d-flex mx-0 no_rowgap">
      <div class="box mb-0 pl-0 col-6" v-if="data.material">
        <h5>Materials needed:</h5>
        <div class="box_inner">
          <p>{{ data.material }}</p>
        </div>
      </div>
      
      <div class="box mb-0 pl-0 col-6" v-if="data.school">
        <h5>School:</h5>
        <div class="box_inner">
          <p>{{ data.school.name }}</p>
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
});
</script>
<style lang="scss">
@import './MonsterDrawer.scss';
</style>
