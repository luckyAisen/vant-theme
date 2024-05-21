<template>
  <header :class="containerClass">
    <div
      class="max-w-7xl mx-auto min-w-[--vt-header-min-width] h-[--vt-header-height] px-5 flex items-center justify-between"
    >
      <div class="flex items-center flex-1">
        <router-link to="/" class="flex items-center">
          <img src="/logo.png" alt="Logo" class="h-[36px]" draggable="false" />
          <h1 class="text-2xl text-[--vt-color-text-4] pl-[--vt-size-1]">Vant Theme</h1>
        </router-link>
      </div>
      <div class="flex items-center gap-1.5">
        <SwitchLocale type="icon" />
        <SwitchTheme type="icon" />

        <a href="https://github.com/Aisen60/vant-theme" target="_blank">
          <n-button
            quaternary
            :focusable="false"
            style="--n-height: 30px; --n-padding: 0 6px; --n-color-hover: var(--vt-color-fill-3)"
          >
            <template #icon>
              <n-icon size="var(--vt-font-size-5)" class="cursor-pointer">
                <LogoGithub />
              </n-icon>
            </template>
          </n-button>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { LogoGithub } from '@vicons/ionicons5';
import SwitchLocale from '@/components/SwitchLocale/index.vue';
import SwitchTheme from '@/components/SwitchTheme/index.vue';

defineOptions({
  name: 'VHeader'
});

const props = withDefaults(
  defineProps<{
    transparent: boolean;
  }>(),
  {
    transparent: false
  }
);

const containerClass = computed(() => {
  const classes = ['v-header'];
  classes.unshift(props.transparent ? 'bg-transparent' : 'bg-[--vt-color-bg-1]');
  return classes;
});
</script>

<style lang="scss" scoped>
.v-header {
  --vt-header-height: 58px;
  --vt-header-min-width: var(--vt-page-min-width);
}
</style>
