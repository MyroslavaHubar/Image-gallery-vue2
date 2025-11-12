import Vue from 'vue';
import Vuex from 'vuex';
import Images from './modules/images';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    images: Images,
  },
});
