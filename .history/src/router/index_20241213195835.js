import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import { createMemoryHistory, createRouter } from 'vue-router'


const router = createRouter({
  routes: [{
    path: '/',
    component: HomeView
  }],
  history: createWebHistory()
})

export default router;
