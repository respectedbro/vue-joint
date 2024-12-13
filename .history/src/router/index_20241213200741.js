// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

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
