import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import TermsPage from '../pages/TermsPage.vue'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage.vue'
import DataDeletionPage from '../pages/DataDeletionPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import { legalPaths } from '../data/site'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
  routes: [
    { path: '/', component: HomePage },
    { path: legalPaths.terms, component: TermsPage },
    { path: legalPaths.privacy, component: PrivacyPolicyPage },
    { path: legalPaths.dataDeletion, component: DataDeletionPage },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
  ],
})

export default router
