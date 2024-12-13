// src/router.js
import AboutView from '@/views/AboutView.vue';
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
    component: AboutView,
  },
  // Добавьте дополнительные маршруты здесь
];

const router = createRouter({
  history: createWebHistory(), // Используйте history API
  routes,d
});

export default router;
