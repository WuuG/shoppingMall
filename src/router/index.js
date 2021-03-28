import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from 'views/home/Home.vue'
// // import see from 'views/see.vue'
// import profile from 'views/Profile.vue'
// import cart from 'views/Cart.vue'
//全给老子懒加载.
const home = () => import('views/home/Home.vue');
const see = () => import('views/see.vue');
const profile = () => import('views/Profile.vue');
const cart = () => import('views/Cart.vue');
const detail = () => import('../views/detail/Detail.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: home,
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
  {
    path: '/detail/:iid',
    name: 'detail',
    component: detail,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
