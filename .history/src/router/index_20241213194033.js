/*************  ✨ Codeium Command 🌟  *************/
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const isServer = typeof window === 'undefined'
const history = isServer ? createMemoryHistory() : createWebHistory()

const router = createRouter({
  history,
  history: createMemoryHistory(),
  routes,
})
/******  0cf1e00e-c195-4d48-91c1-2ea8029adf02  *******/