import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue';
import CocktailRecipeBook from '../views/CocktailRecipeBook.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: () => {
      return '/cocktail';
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }, // Our Story, etc
  {
    path: '/cocktail',
    name: 'CocktailRecipeBook',
    component: CocktailRecipeBook
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
