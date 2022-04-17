import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import SwiperJS from '../views/SwiperJS.vue'
import VueCarousel3D from '../views/VueCarousel3D.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/swiper-JS',
  //   name: 'SwiperJS',
  //   component: SwiperJS
  // },
  {
    path: '/vue-carousel-3d',
    name: 'VueCarousel3D',
    component: VueCarousel3D
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
