<template>
  <v-col 
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <v-skeleton-loader
      :transition-group="sktTransition"
      height="108"
      type="list-item-avatar-two-line, card"
      dark
      v-if="sktLoading"
    >
    </v-skeleton-loader>
    <v-card 
      elevation="2" 
      outlined 
      class="card"
      v-else
      >
      <div class="card_header">
        <!-- Icon -->
        <div class="card_img">
          <v-img
            contain
            max-height="100%"
            max-width="45%"
            src="../../assets/img/book.png"
          ></v-img>
        </div>
        <v-card-title >{{ data.name }}</v-card-title>
        <v-card-subtitle >{{ data.desc[0] | subtitleFormat }}</v-card-subtitle>
      </div>
      <div class="card_footer">
      <button @click="onCardClick()" class="btn">{{ btnMsg }}</button>
      </div>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';

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
    },
    sktLoading: Boolean,
    cols: Number,
    xl: Number,
    lg: Number,
    md: Number,
    sm: Number,
  },
  data() {
    return {
      btnMsg: MessageType[this.data.type],
      formatData: Object,
      subtitle: String,
      sktTransition: "scale-transition",
    };
  },

  mounted() {
    // 
  },

  methods: {
    async onCardClick(): Promise<void> {
      console.log(this.$props.data)
      this.$emit('onCardClicked', this.$props.data);
    }
  },
  filters: {
      subtitleFormat(desc: string): any {
        if (desc && desc.length > 70) {
          desc = desc.substring(0, 70) + '...';
          return desc
        }
        return desc
      }
    },
});
</script>
<style lang="scss">
@import './ListCard.scss';
</style>
