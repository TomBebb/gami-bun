<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { MenuItemData } from "../../models";
import { useConfirmDetector } from "../../input";
import { ref } from "vue";
defineProps<{ item: MenuItemData; selected: boolean }>();
const link = ref<HTMLAnchorElement>();
useConfirmDetector(() => {
  console.info("Pressed!");
  link.value.click();
});
</script>

<template>
  <RouterLink
    :to="item.path"
    ref="link"
    class="flex items-center gap-2"
    :class="{ focus: selected }"
  >
    <Icon class="" :icon="item.icon" inline />
    <div class="flex-1">{{ item.name }}</div>
  </RouterLink>
</template>

<style scoped></style>
