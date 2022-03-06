<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import useMainStore from "./stores";

const $store = useMainStore();

const init = async () => {
  await $store.init();
};

init();
</script>
