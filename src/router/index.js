import Vue from "vue";
import VueRouter from "vue-router";
import Connect from '../views/Connect'
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Connect Account',
    component: Connect
  }
]
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router