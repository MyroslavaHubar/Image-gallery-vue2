import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router'; // підключаємо реальний роутер

import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
