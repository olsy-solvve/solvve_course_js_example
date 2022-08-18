import { createRouter, createWebHistory } from "vue-router";

import Home from "@/features/Home.vue";
import Auth from "@/features/Auth.vue";
import Page404 from "@/features/errors/e404.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/auth", component: Auth },
    { path: "/home", component: Home },
    { path: "/", component: Page404 },
  ],
});
