import Vue from 'vue'
import App from './components/App.vue'
import router from './index.js'
import store from './store'
import { sync } from 'vuex-router-sync'

// Sync Vue router and the Vuex store
sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})