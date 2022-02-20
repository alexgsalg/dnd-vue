<template>
  <v-card elevation="2" outlined class="col-1-3 card">
    <div class="card_header">
      <!-- Icon -->
      <div class="card_img">
        <v-img
          contain
          max-height="35"
          max-width="40"
          src="../../assets/img/book.png"
        ></v-img>
      </div>
      <v-card-title >{{ data.name }}</v-card-title>
    </div>
    <div class="card_footer">
    <button @click="onCardClick()" class="primary btn">{{ btnMsg }}</button>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { getSpell } from '../../services/spells';

enum MessageType {
  'spell' = 'What it does?',
  'monster' = 'Who is?',
  'character' = 'Gimme Stats'
}

export default Vue.extend({
  name: 'ListCard',
  components: {},
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      btnMsg: MessageType[this.data.type],
      formatData: Object
    };
  },

  mounted() {
    //
    getSpell(this.data.index)
      .then((resp) => resp.data)
      .then((data) => (this.formatData = data));
  },

  methods: {
    async onCardClick(): Promise<void> {
      // console.log(this.formatData)
      this.$emit('onCardClicked', this.formatData);
    }
  }
});
</script>
<style lang="scss">
@import './ListCard.scss';
</style>
