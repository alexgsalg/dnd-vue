import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Spells from '../views/Spells/Spells.vue';
import Monsters from '../views/Monsters/Monsters.vue';
import Characters from '../views/Characters/Characters.vue';
import Classes from '../views/Classes/Classes.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/spells',
    name: 'Spells',
    component: Spells
  },
  {
    path: '/monsters',
    name: 'Monsters',
    component: Monsters
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/classes',
    name: 'Classes',
    component: Classes
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: 'about' */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
