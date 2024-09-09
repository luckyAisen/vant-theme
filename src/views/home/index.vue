<template>
  <div class="home bg-[--home-bg] flex flex-col">
    <VHeader transparent />
    <main class="min-h-screen flex-1 pt-[90px] pb-10">
      <div class="min-w-[--vt-page-min-width] max-w-7xl h-full mx-auto px-5 text-center">
        <!-- <h1 class="pb-10 text-6xl text-[--home-small-title]">Vant Theme</h1> -->
        <h2 class="pb-8 text-6xl text-[--home-big-title]">{{ $t('home_describe_1') }}</h2>
        <h2 class="pb-8 text-6xl text-[--home-big-title]">{{ $t('home_describe_2') }}</h2>
        <n-button type="primary" class="!mb-8" @click="pageToProject">
          {{ $t('home_see') }}
        </n-button>
        <img :src="img" draggable="false" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { AppEnum } from '@/enums';
import { useAppStore } from '@/stores/modules/app';

import VHeader from '@/components/Header/index.vue';
import enUSLightHome from '@/assets/img/en-us-light-home.png';
import enUSDarkHome from '@/assets/img/en-us-dark-home.png';
import zhCNLightHome from '@/assets/img/zh-cn-light-home.png';
import zhCNDarkHome from '@/assets/img/zh-cn-dark-home.png';

defineOptions({
  name: 'Home'
});

const router = useRouter();

const appStore = useAppStore();

const img = computed(() => {
  const imgMap = {
    [AppEnum.APP_LOCALE_EN_US]: {
      light: enUSLightHome,
      dark: enUSDarkHome
    },
    [AppEnum.APP_LOCALE_ZH_CN]: {
      light: zhCNLightHome,
      dark: zhCNDarkHome
    }
  };

  return imgMap[appStore.locale][appStore.theme];
});

const pageToProject = () => {
  router.push('/project');
};
</script>

<style lang="scss" scoped>
.home {
  --home-bg: #fbfaf8;
  --home-big-title: #050505;
  --home-small-title: #6c6b6a;
}

:root[theme='dark'] {
  .home {
    --home-bg: #17171a;
    --home-big-title: #ffffff;
    --home-small-title: #6f767e;
  }
}
</style>
