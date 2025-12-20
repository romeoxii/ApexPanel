import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import { useUserStore } from '../stores/user.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/Home.vue'),
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/products.vue'),
          meta: { requireAuth: true },
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('../views/users.vue'),
          meta: { requireAuth: true, requireRole: 'admin' },
        },
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'signup',
          name: 'signup',
          component: () => import('../views/auth/signup.vue'),
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/login.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to) => {
  const userStore = useUserStore()
  // if ((to.name === 'login' || to.name === 'signup') && userStore.isAuthenticated) {
  //   return '/'
  // }

  if (to.meta.requireAuth && !userStore.isAuthenticated) {
    return '/auth/signup'
  }

  if (to.meta.requireRole && userStore.user?.role !== to.meta.requireRole) {
    return '/'
  }
})

export default router
