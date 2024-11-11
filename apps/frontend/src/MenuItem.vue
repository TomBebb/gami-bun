<script setup lang="ts">
import { MenuItemData } from "./models";
import MenuItemInner from "./MenuItemInner.vue";
defineProps<{ item: MenuItemData; selected: boolean }>();
</script>

<template>
  <li>
    <details open v-if="item.children?.length">
      <summary>
        <MenuItemInner :item="item" :selected />
      </summary>
      <ul>
        <MenuItem v-for="child in item.children" :item="child" :selected />
      </ul>
    </details>
    <MenuItemInner v-else :item="item" :selected />
  </li>
</template>
