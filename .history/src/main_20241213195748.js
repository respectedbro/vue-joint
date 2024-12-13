import './assets/main.css'

import { createApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
// import router from './router'









const app = createApp(App)
app.use(router)
app.mount('#app')
