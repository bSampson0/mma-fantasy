import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fighters from '../views/Fighters.vue'
import Standings from '../views/Standings.vue'
import Teams from '../views/Teams.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/fighters',
    name: 'Fighters',
    component: Fighters,
  },
  {
    path: '/standings',
    name: 'Standings',
    component: Standings,
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
