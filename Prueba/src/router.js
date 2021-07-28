import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Dashboard from './components/Dashboard'
import Auth from '@okta/okta-vue'

Vue.use(Router)

Vue.use(Auth, {
    // Replace this with your Okta domain:
    issuer: 'https://dev-97100115.okta.com/oauth2/default',
    // Replace this with the client ID of the Okta app you just created:
    client_id: '0oa1a54qw9rZaGgvE5d7',
    redirect_uri: 'http://localhost:5000/implicit/callback',
    scope: 'openid profile email'
  })

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard },
    { path: '/implicit/callback', component: Auth.handleCallback() },
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router