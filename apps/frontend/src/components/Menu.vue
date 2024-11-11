<script lang="ts" setup>
import { MenuItemData } from "../models";
import MenuItem from "./MenuItem.vue";
import { ref } from "vue";
import { useDownDetector, useUpDetector } from "../input";
const props = defineProps<{
  items: MenuItemData[];
  children?: MenuItemData[];
}>();

const selectedIndex = ref<number>(0);
useDownDetector(
  () =>
    (selectedIndex.value = Math.min(
      props.items.length - 1,
      selectedIndex.value + 1
    ))
);
useUpDetector(
  () => (selectedIndex.value = Math.max(0, selectedIndex.value - 1))
);
</script>
<template>
  <ul class="menu bg-base-300 text-base-content">
    <MenuItem
      v-for="(item, index) in items"
      :item="item"
      :selected="index === selectedIndex"
    />
  </ul>
</template>
