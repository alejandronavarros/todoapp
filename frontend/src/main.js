import router from './router/index.js'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { sync } from 'vuex-router-sync'

// Sync Vue router and the Vuex store
sync(store, router)
Vue.use(BootstrapVue)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})