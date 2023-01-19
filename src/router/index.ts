import { route } from 'quasar/wrappers';
import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'exact-active-link',
});

export default route(function (/* { store, ssrContext } */) {
  return router;
});
