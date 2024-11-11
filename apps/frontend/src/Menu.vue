<script lang="ts" setup>
import { MenuItem } from "./models";
import { Icon } from "@iconify/vue";
defineProps<{ items: MenuItem[] }>();
</script>
<template>
  <ul
    class="menu bg-base-200 rounded-s-box w-56 [&>*]:border-y [&>*]:border-[0.1px] border-y-base-100"
  >
    <li v-for="item in items">
      <a class="grid grid-cols-12">
        <Icon class="col-span-3" :icon="item.icon" inline />
        <div class="col-span-9">{{ item.name }}</div>
      </a>
    </li>
  </ul>
</template>
