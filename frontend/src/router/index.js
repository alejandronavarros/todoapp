import Vue from 'vue'
import Router from 'vue-router'
//import store from '../store'
import Dashboard from '@/components/Dashboard'
import Oktavue from '@okta/okta-vue'
import { OktaAuth } from '@okta/okta-auth-js'

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-97100115.okta.com/oauth2/default',
  client_id: '0oa1a54qw9rZaGgvE5d7',
  redirect_uri: window.location.origin + 'implicit/callback',
  scopes: 'openid profile email'
})
Vue.use(Oktavue,  { oktaAuth })

Vue.use(Router)


let router =  new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component : Dashboard},
    // Handle the redirect from Okta using the Okta Vue SDK
    { path: '/implicit/callback', component: Oktavue.handleCallback() },
  ]
})

// Check the authentication status before router transitions
Router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router;
