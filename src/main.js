import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuex from 'vuex';
import axios from 'axios';
Vue.prototype.$axios = axios;
Vue.use(Vuex);

import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI


Vue.config.productionTip = false

import store from './store';

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if(localStorage.getItem('Authorization')){
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
