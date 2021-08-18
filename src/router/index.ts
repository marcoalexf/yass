import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MatchScreen from '../features/Match/MatchScreen.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MatchScreen',
    component: MatchScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
