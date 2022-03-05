<template>
  <div class="pageheader" :class="page">
    <v-container>
      <h2 class="pageheader__title">{{ title }}</h2>
      <slot v-if="spanType === 'count'" class="pageheader__count"></slot>
    </v-container>
    <slot name="tabs" class="pageheader__tabs"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PageHeader',
  props: {
    title: String,
    spanType: String,
    page: String
  }
});
</script>

<style lang="scss">
@import './PageHeader.scss';
</style>
