import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/fonts",
    name: "Fonts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Fonts.vue"),
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: () =>
      import(/* webpackChunkName: "buttons" */ "../views/Buttons.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
