<template>
  <div class="page-home">
    <h1 class="home-title">{{ title }}</h1>
    <div v-html="biref"></div>
    <p>
      <n-button type="primary" @click="toUse"> 去使用 </n-button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { NButton } from "naive-ui";
import { TITLE as title, BIREF as biref } from "@/utils/constant";

const $route = useRouter();

function toUse() {
  $route.push("/theme");
}
</script>
