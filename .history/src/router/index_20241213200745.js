// src/router.js
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
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
