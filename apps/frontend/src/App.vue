<script setup lang="ts">
import Drawer from "./Menu.vue";
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
      },
    ]"
  />
</template>
