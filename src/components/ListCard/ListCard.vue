<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg" :xl="xl">
    <v-skeleton-loader
      :transition-group="sktTransition"
      height="108"
      type="list-item-avatar-two-line, card"
      dark
      v-if="sktLoading"
    >
    </v-skeleton-loader>
    <v-card elevation="2" outlined class="card" v-else>
      <div class="card_header">
        <!-- Icon -->
        <div class="card_img">
          <v-img
            contain
            max-height="100%"
            max-width="45%"
            :src="require(`../../assets/img/${cardIcon}`)"
          ></v-img>
        </div>
        <v-card-title>{{ data.name }}</v-card-title>
        <v-card-subtitle v-if="dataType === 'spells'">{{
          data.desc[0] | subtitleFormat
        }}</v-card-subtitle>
        <v-card-subtitle v-else-if="dataType === 'monsters'"
          ><span>AC: </span>{{ data.armor_class }} | <span>XP: </span
          >{{ data.xp }}
        </v-card-subtitle>
        <v-card-subtitle v-else
          ><span>Alignment: </span>{{ data.alignment }}</v-card-subtitle
        >
      </div>
      <div class="card_footer">
        <button @click="onCardClick()" class="btn">
          {{ btnMsg || 'Gimme the stats' }}
        </button>
      </div>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue';

enum MessageType {
  'spells' = 'What it does?',
  'monsters' = 'Monster stats',
  'characters' = 'Gimme Stats'
}
enum IconType {
  'spells' = 'book.png',
  'monsters' = 'hand.png',
  'alignments' = 'armor.png',
  'classes' = 'swords.png',
  'races' = 'helmet.png'
}

export default Vue.extend({
  name: 'ListCard',
  components: {},
  props: {
    dataType: String,
    data: {
      type: Object
    },
    sktLoading: Boolean,
    cols: Number,
    xl: Number,
    lg: Number,
    md: Number,
    sm: Number
  },
  data() {
    return {
      btnMsg: MessageType[this.dataType],
      cardIcon: IconType[this.dataType],
      formatData: Object,
      sktTransition: 'scale-transition'
    };
  },

  mounted() {
    //
  },

  methods: {
    async onCardClick(): Promise<void> {
      console.log(this.$props.data);
      this.$emit('onCardClicked', this.$props.data);
    }
  },
  filters: {
    subtitleFormat(desc: string): any {
      if (desc && desc.length > 70) {
        desc = desc.substring(0, 70) + '...';
        return desc;
      }
      return desc;
    }
  }
});
</script>
<style lang="scss">
@import './ListCard.scss';
</style>
