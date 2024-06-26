import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/Index.vue";
import Homepage from "@/pages/Homepage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Homepage,
    },
    {
      path: "/",
      name: "index",
      component: Index,
    },
  ],
});

export default router;
