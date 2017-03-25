import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home/Home';
import Gill from '@/components/people/Gill';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/gill',
      name: 'Gill',
      component: Gill,
    },
  ],
});
