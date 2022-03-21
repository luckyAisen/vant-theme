<template>
  <div class="console-panel-nav">
    <n-spin :show="$props.loading">
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
    </n-spin>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { NSpin } from "naive-ui";
import type { Menu } from "@/utils/type";

type Props = {
  options: Menu[];
  loading: boolean;
};

const $props = defineProps<Props>();
</script>
