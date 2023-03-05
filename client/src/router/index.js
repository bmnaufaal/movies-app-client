import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import BookmarkPage from '../views/BookmarkPage.vue'
import Navbar from '../components/Navbar.vue'
import DetailPage from '../views/DetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/movies',
      name: 'movies',
      component: HomePage
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: BookmarkPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/movies/:id',
      name: 'movies_detail',
      component: DetailPage
    },
    {
      path: '/bookmarks/:id',
      name: 'bookmarks_detail',
      component: DetailPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  if (to.name === 'login' && isAuthenticated) {
    next('/home')
  } else if (to.name === 'bookmarks' && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
