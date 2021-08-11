import { createApp } from "vue";
import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue from '@okta/okta-vue'
import App from "./components/App.vue";
import Router from "./router/index.js";
import Store from "./store";


const oktaAuth = new OktaAuth({
    issuer: 'https://dev-97100115.okta.com/oauth2/default/',
    clientId: '0oa1a54qw9rZaGgvE5d7',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email']
  })

  const app = createApp(App)
  app.use(Router)
  app.use(OktaVue, { oktaAuth })
  app.use(Store)
  app.mount('#app')
