import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AuthView from "../views/AuthView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
