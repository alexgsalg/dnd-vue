import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

Vue.component('font-awesome-icon', FontAwesomeIcon); // Register component globally
library.add(fas); // Include needed icons

Vue.use(Vuetify);

export default new Vuetify({
  options: {
    customProperties: true,
    theme: { disable: true },
    icons: {
      iconfont: 'fas'
    }
  }
});
