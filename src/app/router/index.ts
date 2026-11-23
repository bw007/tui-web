import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/features/home/pages/HomePage.vue'
import MainLayout from '../layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'not-found',
          component: () => import('@/features/error/NotFoundPage.vue')
        }
      ]
    }
  ],
})

export default router
