import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
const router = createRouter({
  routes: [{
    path: '/',
    component: HomeView
  }],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')