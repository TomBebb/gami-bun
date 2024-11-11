<script setup lang="ts">
import Menu from "./components/Menu.vue";
import { routes } from "./router";
</script>
<template>
  <div class="drawer drawer-open">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <RouterView />
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>

      <Menu
        class="menu bg-base-200 text-base-content min-h-full w-80 p-4"
        :items="routes"
      />
    </div>
  </div>
</template>
