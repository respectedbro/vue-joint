import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})