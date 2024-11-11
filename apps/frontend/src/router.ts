import { createRouter, createMemoryHistory, RouteRecordRaw } from "vue-router";
import LibraryView from "./components/views/LibraryView.vue";
export const routes: RouteRecordRaw[] = [
  { path: "/", name: "Library", component: LibraryView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
