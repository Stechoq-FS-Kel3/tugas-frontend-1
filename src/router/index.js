import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/pages/Homepage.vue";
import Index from "@/pages/Index.vue";

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
