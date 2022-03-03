import { createRouter, createWebHistory } from 'vue-router'
import PainelView from '../views/PainelView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PainelView
  },
  {
    path: '/chaves',
    name: 'chaves',
    component: () => import('../views/ChaveView.vue')
  },
  {
    path: '/salas',
    name: 'salas',
    component: () => import('../views/SalaView.vue')
  },
  {
    path: '/tablets',
    name: 'tablets',
    component: () => import('../views/TabletView.vue')
  },
  {
    path: '/laptops',
    name: 'laptops',
    component: () => import('../views/LaptopView.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
