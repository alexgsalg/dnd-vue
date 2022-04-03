<template>
  <div class="container">
    <!-- Principle info -->
    <v-row class="highlight mx-0 mb-4 no_rowgap">
      <div class="highlight_data mb-0" v-if="data.hit_die">
        <h4>Hit die per level:</h4>
        <div>
          <font-awesome-icon icon="fa-solid fa-dice" />
          <p>{{ data.hit_die }}</p>
        </div>
      </div>
    </v-row>
    <v-divider dark></v-divider>

    <div class="box mt-4" v-if="data.saving_throws">
      <h5>Saving throws:</h5>
      <div class="box_inner">
        <p>
          <span v-for="(text, i) of data.saving_throws" :key="i">
            <template v-if="i > 0">,</template>
            {{ text.name }}
          </span>
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>

    <div class="box" v-if="data.proficiency_choices">
      <h5>Proficiency Choices: ({{ data.proficiency_choices[0].choose }})</h5>
      <div class="box_inner">
        <p> <strong>Skills: </strong>
          <span v-for="(text, i) of data.proficiency_choices[0].from" :key="i">
            <template v-if="i > 0">, </template>
            {{ text.name | afterSemicolon }}
          </span>
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>

    <div class="box" v-if="data.proficiencies">
      <h5>Proficiency:</h5>
      <div class="box_inner">
        <p>
          <span v-for="(text, i) of data.proficiencies" :key="i">
            <template v-if="i > 0">, </template>
            {{ text.name }}
          </span>
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>

    <div class="box" v-if="data.starting_equipment">
      <h5>Starting equipment:</h5>
      <div class="box_inner">
        <p> <strong>Equipment: </strong>
          <span v-for="(item, i) of data.starting_equipment" :key="i">
            <template v-if="i > 0">, </template>
            {{ item.equipment.name }}({{ item.quantity }}) 
          </span>
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>

    <div class="box" v-if="data.starting_equipment_options">
      <h5>Other starting options:</h5>
      <div class="box_inner">
        <p v-for="(option, i) of data.starting_equipment_options" :key="i"> 
          <strong>Choose {{option.choose}} {{option.type | toCapitalize}} : </strong>
          <span v-for="(item, i) of option.from" :key="i">
            <template v-if="i > 0">, </template>
            <span v-for="(text, i) of item" :key="i">{{ text.name }}</span> ({{ item.quantity }})
          </span>
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>

    <div class="box" v-if="data.class_spells">
      <h5>Class Spells ({{ data.class_spells.length }}):</h5>
      <div class="box_inner">
        <p> 
          <span v-for="(spell, i) of data.class_spells" :key="i">
            <template v-if="i > 0">&nbsp; | &nbsp;</template>
            <strong>{{ spell.name }} </strong>on level {{spell.level}}
          </span>
        </p>
      </div>
      <v-divider dark></v-divider>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ClassesDrawer',
  props: {
    data: Object,
    loadData: Boolean
  },
  data() {
    return {
      loading: false
    };
  },

  watch: {
    loadData(newVal, oldVal) {
      if (newVal) console.log('data', this.data)
    },
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
@import './ClassesDrawer.scss';
</style>
