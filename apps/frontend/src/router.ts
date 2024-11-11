import {
  createRouter,
  RouteRecordSingleView,
  createWebHistory,
} from "vue-router";
import LibraryView from "./components/views/LibraryView.vue";

export interface MyRouteRecordRaw extends RouteRecordSingleView {
  icon: string;
}
export const routes: MyRouteRecordRaw[] = [
  {
    path: "/",
    name: "Library",
    component: LibraryView,
    icon: "mdi:library",
  },
  {
    path: "/settings",
    name: "Settings",
    component: LibraryView,
    icon: "mdi:cog",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
