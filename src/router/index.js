import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home/Home';
import Gill from '@/components/people/Gill';
import Short from '@/components/people/Short';

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
    {
      path: '/short',
      name: 'Short',
      component: Short,
    },
    {
      path: '/**',
      name: '404',
      component: Home,
    },
  ],
});
