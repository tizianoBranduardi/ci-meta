import axios from 'axios';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/styles.css';
import store from '@/store/index';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  store,
  axios,
  router,
  render: (h) => h(App),
}).$mount('#app');
