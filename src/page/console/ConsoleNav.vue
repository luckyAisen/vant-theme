<template>
  <div class="console-panel-nav">
    <div
      class="console-panel-nav__group"
      v-for="component in $props.options"
      :key="component.value"
    >
      <div class="console-panel-nav__group-title">{{ component.label }}</div>
      <div
        class="console-panel-nav__group-item"
        v-for="menu in component.children"
        :key="menu.value"
        :id="`nav-${menu.value}`"
      >
        <router-link :to="menu.value" active-class="active">
          {{ menu.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Menu } from "@/utils/type";
import { RouterLink } from "vue-router";

type Props = {
  options: Menu[];
};

const $props = defineProps<Props>();
</script>
