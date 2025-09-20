import { createRouter, createWebHistory } from 'vue-router';
import home from './modules/home';
import { clearForLogout } from '../shared/utils/auth';
import { useRoute } from "vue-router";


const authMiddleware = () => {
  const route = useRoute()
  const token = localStorage.getItem("access_token");
  let routeAccess = route.path === "/dashboard"
  return !!token && routeAccess;
};


const routes = [
  {
    path: "/",
    name: "Main",
    redirect: { name: "homePage" },
    component: () => import("@/layouts/MainLayout.vue"),
    children: home,
    meta: { requiresAuth: true }, // 🔥 Auth tekshiruvi qo‘shildi
  },
];

// **Router yaratish**
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (!to.meta['savePosition']) {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    if (authMiddleware()) {
      clearForLogout();
      return { name: "Login", query: { redirect: to.fullPath } };
    }
  }
});

export default router;
