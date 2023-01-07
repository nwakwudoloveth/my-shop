import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HomeView from '../views/home-view.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/list.vue'),
    },

    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter(to, from, next) {
        if (store.state.user) return next('/')
        return next()
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter(to, from, next) {
        if (store.state.user) return next('/')
        return next()
      },
    },

    {
      path: '/products/:id',
      name: 'Detail',
      component: () => import('../views/product-detail.vue'),
    },

    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/cart.vue'),
    },
  ],
})

export default router
