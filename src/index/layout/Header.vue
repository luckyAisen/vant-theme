<template>
  <n-space justify="space-between" align="center" class="app-header-container">
    <n-space class="header-logo">
      <router-link to="/"> {{ title }} </router-link>
      <span>（适用于 Vant 3）</span>
    </n-space>
    <n-space justify="space-between">
      <a
        v-for="link in outerLink"
        :key="link.name"
        :href="link.url"
        target="_blank"
      >
        {{ link.name }}
      </a>
    </n-space>
  </n-space>
</template>

<script lang="ts" setup>
import { NSpace } from "naive-ui";
import { TITLE as title, OUTERLINK as outerLink } from "@/utils/constant";
</script>
