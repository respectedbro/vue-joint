/*************  ✨ Codeium Command 🌟  *************/
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'


const isServer = typeof window === 'undefined'
const history = isServer ? createMemoryHistory() : createWebHistory()
import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history,

  routes,
})
/******  f4f7a07a-fd29-47d7-bab7-0ed2c5e73a43  *******/