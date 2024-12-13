import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
