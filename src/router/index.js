import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/Index.vue";
import Homepage from "@/pages/Homepage.vue";
import EditView from "@/pages/EditView.vue";

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
    {
      path: "/edit",
      name: "edit",
      component: EditView,
    },
  ],
});

export default router;
