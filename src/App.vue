<template>
  <NavBar />
  <div class="app-main-container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  }
})
</script>

<style lang="less">
:root {
  --app-text-color: #1f2225;
  --app-primary-color: #8e3c00;
  --app-main-container: 64px;
}
html {
  height: 100%;
}
body {
  height: 100%;
  color: var(--app-text-color);
  font-size: 16px;
  background-color: #ffffff;
}
#app {
  height: 100%;
  overflow: hidden;
}
a {
  color: var(--app-text-color);
  &:hover {
    color: var(--app-primary-color);
  }
}
.app-main-container {
  width: 100%;
  height: calc(100% - var(--app-main-container));
}
</style>
