import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'views/Home.vue'
import see from 'views/see.vue'
import profile from 'views/Profile.vue'
import cart from 'views/Cart.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/see',
    name: 'see',
    component: see,
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
