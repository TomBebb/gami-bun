<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { MenuItemData } from "./models";
defineProps<{ item: MenuItemData }>();
</script>

<template>
  <li>
    <details open v-if="item.children?.length">
      <summary>
        <menu-item :item="{ ...item, children: undefined }" />
      </summary>
      <ul>
        <MenuItem v-for="child in item.children" :item="child" />
      </ul>
    </details>
    <a v-else href="/" class="flex items-center gap-2">
      <Icon class="" :icon="item.icon" inline />
      <div class="flex-1">{{ item.name }}</div>
    </a>
  </li>
</template>
