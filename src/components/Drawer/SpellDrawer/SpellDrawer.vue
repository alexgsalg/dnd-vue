<template>
  <div class="container">
    <div class="row">
      <!-- {{ data.desc }} -->
      <p v-for="(text, i) of data.desc" :key="i">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Drawer',
  props: {
    data: Object,
  },
  data() {
    return {
      loading: false,
    }
  },

  methods: {
    // 
  },

  mounted() {
    // getAllModal().then((response) => this.spellList = response.data)
  },

});
</script>
<style lang="scss">
// @import './SpellDrawer.scss';
</style>
