import Vue from 'vue';
import Router from 'vue-router';

import Login from './components/Login.vue';
import Home from './components/Home.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!store.getters.isLoggedIn && to.name !== 'login') {
    console.log(`redirect to 'login' instead of '${to.name}'.`);
    next({ name: 'login' });
  } else {
    console.log(`proceed to '${to.name}' normally.`);
    next();
  }
});

export default router;
