import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000/';

import DefaultLayout from './layounts/DefaultLayout'
import AuthLayout from './layounts/AuthLayout'

Vue.component('default-layout', DefaultLayout)
Vue.component('auth-layout', AuthLayout)

const moment = require('moment')
Vue.use(require('vue-moment'), {
  moment
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
