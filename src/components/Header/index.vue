<template>
  <header class="bg-[--vt-color-bg-1]">
    <div class="max-w-7xl mx-auto px-5 flex items-center justify-between h-[--vt-header-height]">
      <div class="flex items-center flex-1">
        <router-link to="/" class="flex items-center">
          <img src="/logo.png" alt="Logo" class="h-[36px]" draggable="false" />
          <h1 class="text-2xl text-[--vt-color-text-4] pl-[--vt-size-1]">Vant Theme</h1>
        </router-link>
      </div>
      <div class="flex items-center gap-1.5">
        <n-button
          quaternary
          :focusable="false"
          style="--n-height: 30px; --n-padding: 0 6px; --n-color-hover: var(--vt-color-fill-3)"
          @click="onSwitchLocale"
        >
          <template #icon>
            <n-icon>
              <LocaleSvg />
            </n-icon>
          </template>
        </n-button>

        <n-button
          quaternary
          :focusable="false"
          style="--n-height: 30px; --n-padding: 0 6px; --n-color-hover: var(--vt-color-fill-3)"
          @click="onSwitchTheme"
        >
          <template #icon>
            <n-icon size="var(--vt-font-size-5)" class="cursor-pointer">
              <ThemeIcon />
            </n-icon>
          </template>
        </n-button>

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
import { Moon, Sunny, LogoGithub } from '@vicons/ionicons5';
import LocaleSvg from '@/components/LocaleSvg/index.vue';
import { useLocaleStore } from '@/stores/modules/locale';
import { useThemeStore } from '@/stores/modules/theme';

const localeStore = useLocaleStore();

const locale = computed(() => localeStore.locale);

const onSwitchLocale = () => {
  const nextLocale = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN';
  localeStore.setLocale(nextLocale);
};

const themeStore = useThemeStore();

const theme = computed(() => themeStore.theme);

const ThemeIcon = computed(() => (theme.value === 'dark' ? Moon : Sunny));

const onSwitchTheme = () => {
  const nextTheme = theme.value === 'dark' ? 'light' : 'dark';
  themeStore.setTheme(nextTheme);
};

defineOptions({
  name: 'VHeader'
});
</script>
