import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MatchScreen from '../features/Match/MatchScreen.vue';
import LoginScreen from '../features/Login/LoginScreen.vue';
import LogoutScreen from '../features/Logout/LogoutScreen.vue';
import { auth, authStateChange } from '../../firebase-config';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MatchScreen',
    component: MatchScreen,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginScreen,
  },
  {
    path: '/logout',
    name: 'LogoutScreen',
    component: LogoutScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const user = auth.currentUser;

  if (requiresAuth && !user) {
    next('/login');
  } else {
    next();
  }
})

export default router;
