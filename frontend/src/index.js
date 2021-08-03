import Vue from 'vue'
import Router from 'vue-router'
//import store from '../store'
import Dashboard from './components/Dashboard'
import Auth from '@okta/okta-vue'

Vue.use(Router)

Vue.use(Auth, {
  issuer: 'https://dev-97100115.okta.com/oauth2/default',
  client_id: '0oa1a54qw9rZaGgvE5d7',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard },
    // Handle the redirect from Okta using the Okta Vue SDK
    { path: '/implicit/callback', component: Auth.handleCallback() },
  ]
})

// Check the authentication status before router transitions
router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router