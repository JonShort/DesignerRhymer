import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home/Home';
import FullScreenQuote from '@/components/fullscreen-quote/FullScreenQuote';

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
      component: FullScreenQuote,
    },
  ],
});
