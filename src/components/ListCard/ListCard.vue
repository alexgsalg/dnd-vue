<template>
    <article 
      class="col-1-3"
    >
    <!-- Icon -->
    <p>{{ data.name }}</p>
    <button @click="onCardClick()">{{ btnMsg }}</button>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import { getSpell } from '../../services/spells'

enum MessageType {
  'spell' = 'What it does?',
  'monster' = 'Who is?',
  'character' = 'Gimme Stats',
};

export default Vue.extend({
  name: 'ListCard',
  components: {},
  props: {
    data: {
      type: Object
    },
  },
  data() {
    return {
      btnMsg: MessageType[this.data.type],
      formatData: Object
    }
  },

  mounted() {
    // 
    getSpell(this.data.index)
      .then(resp => resp.data)
      .then(data => this.formatData = data)
    },

  methods: {
    async onCardClick(): Promise<void> {
      // console.log(this.formatData)
      this.$emit('onCardClicked', this.formatData);
    }
  },
});
</script>
<style lang="scss">
// @import './Spells.scss';
</style>
