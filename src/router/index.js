import { createRouter, createWebHistory } from 'vue-router';

import Informacion from '@/modules/informacion.vue';
import Login from '@/modules/login.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },

  {
    path: '/informacion',
    name: 'informacion',
    component: Informacion
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
