import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Router from 'vue-router'
import shared from './shared'
import Vuex from 'vuex'
import store from './store'
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react-micro',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/react-micro',
    props: {shared},
  },
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app-vue',
    props: {shared},
  },
]);
// 启动 qiankun
start();
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(Router)
Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
