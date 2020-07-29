import Vue from 'vue'
import VueRouter from 'vue-router'
import Instrucoes from '../views/Instrucoes'
import Lobby from '../views/Lobby'
import Batalha from '../views/Batalha'

Vue.use(VueRouter)

const routes = [
  {
    path: '/instrucoes',
    name: 'instrucoes',
    component: Instrucoes
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: Lobby
  },
  {
    path: '/batalha',
    name: 'batalha',
    component: Batalha
  },
  {
    path: '*',
    redirect: '/lobby'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
