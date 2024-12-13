// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Импортируйте ваши компоненты
import About from './views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // Добавьте дополнительные маршруты здесь
];

const router = createRouter({
  history: createWebHistory(), // Используйте history API
  routes,
});

export default router;
