import Vue from "vue";
import VueRouter from "vue-router";
import { routerPaths } from "./routerPaths";

Vue.use(VueRouter);

/********** Module Include ***************/

const Home = () => import(/* webpackChunkName: "group-home" */ '../components/modules/HomeModule/HomeModule.vue')
const Registration = () => import(/* webpackChunkName: "group-registration" */ '../components/modules/RegistrationModule/RegistrationModule.vue')
const NotFoundModule = () => import(/* webpackChunkName: "group-not-found" */ '../components/modules/NotFoundModule/NotFoundModule.vue')


/********** End Module Include ***************/

/********** Module Routes Include ***************/



/********** End Module Routes Include ***************/

const routes = [
  {
    path: routerPaths.home,
    name: "Home",
    component: Home,
  },
  {
    path: routerPaths.registration,
    name: "Registration",
    component: Registration,
  },
  {
    path: '*',
    component: NotFoundModule,
  },
];

console.log(routes)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
