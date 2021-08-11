import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback } from '@okta/okta-vue'
import Dashboard from '../components/Dashboard.vue'
import { navigationGuard } from '@okta/okta-vue'


const router = createRouter({
  
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', component: Dashboard },
    // Handle the redirect from Okta using the Okta Vue SDK
    { path: '/login/callback', component: LoginCallback },
  ]
})
router.beforeEach(navigationGuard)

export default router