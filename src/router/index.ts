import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/football-clubs",
      name: "FootballClubs",
      component: () => import("@/views/FootBallClubs.vue"),
    },
    {
      path: "/club-detail",
      name: "ClubDetail",
      component: () => import("@/views/ClubDetail.vue"),
    },
    {
      path: "/player-info",
      name: "PlayerInfo",
      component: () => import("@/views/PlayerInfo.vue"),
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
});

export default router;
