<script setup lang="ts">
import Drawer from "./components/Menu.vue";
</script>
<template>
  <Drawer
    :items="[
      {
        icon: 'mdi:library',
        name: 'Games',
      },
      {
        icon: 'mdi:cog',
        name: 'Settings',
        children: [],
      },
      { name: 'Appearance', icon: 'mdi:cog' },
    ]"
  />
  <RouterView />
</template>
