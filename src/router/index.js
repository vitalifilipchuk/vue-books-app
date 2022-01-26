import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/********** Module Include ***************/
const Home = () => import(/* webpackChunkName: "group-home" */ '../components/modules/HomeModule/HomeModule.vue')
const Registration = () => import(/* webpackChunkName: "group-registration" */ '../components/modules/RegistrationModule/RegistrationModule.vue')

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Registration",
    component: Registration,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
