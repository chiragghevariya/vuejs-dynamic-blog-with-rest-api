import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';

import '../node_modules/nprogress/nprogress.css';
import Notifications from 'vue-notification'

import FrontCommonLayout from './layout/FrontCommonLayout.vue'
import CustomeLayout from './layout/CustomeLayout.vue'
import BlogListing from './view/blog/BlogListing.vue'
import BlogDetail from './view/blog/BlogDetail.vue'

import Home from './view/Home.vue'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Notifications);

Vue.component('front-main-layout',FrontCommonLayout);
Vue.component('custome-layout',CustomeLayout);

const routes = [
  {
    name: 'Home',
    path: '/',
    component:Home,
  },
  {
    name: 'BlogListing',
    path: '/blog',
    component:BlogListing,
  },
  {
    name: 'BlogDetail',
    path: '/blog/:slug',
    component:BlogDetail,
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

export default router; 