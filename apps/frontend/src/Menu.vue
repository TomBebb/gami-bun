<script lang="ts" setup>
import { MenuItemData } from "./models";
import MenuItem from "./MenuItem.vue";
defineProps<{ items: MenuItemData[]; children?: MenuItemData[] }>();
</script>
<template>
  <ul class="menu bg-base-200 text-base-content">
    <MenuItem v-for="item in items" :item="item" />
  </ul>
</template>
