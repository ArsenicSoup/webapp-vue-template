import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { UswdsVue } from 'uswds-vue';
import store from './store';

Vue.config.productionTip = false
Vue.use(UswdsVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
