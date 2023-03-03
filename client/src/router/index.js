import { createRouter, createWebHistory } from 'vue-router'

import MoviesPage from '../views/MoviesPage.vue'
import LoginPage from '../views/LoginPage.vue'
import Navbar from '../views/Navbar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    },
    {
      path: '/movies',
      name: 'Movies',
      component: MoviesPage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    }
  ]
})

export default router
