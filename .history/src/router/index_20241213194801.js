
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'


const isServer = typeof window === 'undefined'
const history = isServer ? createMemoryHistory() : createWebHistory()


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history,
  routes,
})
