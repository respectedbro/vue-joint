import './assets/main.css'

import { createApp } from 'vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
// import router from './router'



const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createHistory(),
  routes,
})


// const router = createRouter({
//   routes: [{
//     path: '/',
//     component: HomeView
//   }],
//   history: createWebHistory()
// })


const app = createApp(App)
app.use(router)
app.mount('#app')
