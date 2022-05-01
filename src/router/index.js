import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Panier from '../views/PanierView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView,},
  { path: '/Panier', name: 'Panier', component: Panier,},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
