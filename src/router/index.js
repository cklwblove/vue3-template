import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
  {
    component: () => import('@/views/hello/index.vue'),
    name: 'hello',
    path: '/hello'
  },
  {
    component: () => import('@/views/svgIcons/index.vue'),
    name: 'svgIcons',
    path: '/svgIcons'
  },
  {
    path: '/',
    redirect: '/hello'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
