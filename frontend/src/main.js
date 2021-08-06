import router from './router/index.js'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { sync } from 'vuex-router-sync'
import Oktavue from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'

// Sync Vue router and the Vuex store
sync(store, router)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
const auth = new OktaAuth({
  issuer: 'https://dev-97100115.okta.com/oauth2/default',
  client_id: '0oa1a54qw9rZaGgvE5d7',
  redirect_uri: window.location.origin + 'implicit/callback',
  scopes: 'openid profile email'
})
Vue.use(Oktavue,  { auth })

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})