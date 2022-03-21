<template>
  <div class="vant-theme-header">
    <div class="vant-theme-header__top">
      <a class="vant-theme-header__logo" :href="APP_BASE_URL">
        <img :src="$props.schemeColor === 'dark' ? darkLogo : lightLogo" />
        <span class="vant-theme-header__title">{{ $props.title }}</span>
        <span class="vant-theme-header__subtitle">
          （{{ $props.subtitle }}）
        </span>
      </a>
      <ul class="vant-theme-header__top-nav">
        <li
          v-for="(item, index) in $props.links"
          :key="index"
          class="vant-theme-header__top-nav-item"
        >
          <a class="vant-theme-header__link" target="_blank" :href="item.url">
            <img
              v-if="item.lightLogo"
              :src="
                $props.schemeColor === 'dark' ? item.lightLogo : item.darkLogo
              "
            />
          </a>
        </li>

        <li
          class="vant-theme-header__top-nav-item"
          @click="$emit('switch-scheme-color')"
        >
          <a class="vant-theme-header__link" target="_blank">
            <img v-if="$props.schemeColor === 'dark'" :src="lightThemePng" />
            <img v-else :src="darkThemePng" />
          </a>
        </li>

        <li ref="versionRef" class="vant-theme-header__top-nav-item">
          <span
            class="vant-theme-header__cube vant-theme-header__version"
            @click="toggleVersionPop"
          >
            {{ version }}
            <transition name="vant-theme-dropdown">
              <div v-if="showVersionPop" class="vant-theme-header__version-pop">
                <div
                  v-for="(item, index) in $props.versionList"
                  :key="index"
                  class="vant-theme-header__version-pop-item"
                  :class="{
                    disabled: item.disabled && version !== item.key,
                    active: version === item.key,
                  }"
                  @click="$emit('switch-version', item)"
                >
                  {{ `${item.title}（${item.subtitle}）` }}
                </div>
              </div>
            </transition>
          </span>
        </li>

        <!-- <li
          v-if="langLabel && langLink"
          class="vant-theme-header__top-nav-item"
        >
          <a class="vant-theme-header__cube" :href="langLink">
            {{ langLabel }}
          </a>
        </li>
        -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { APP_BASE_URL } from "@/utils/constant";
import type { AppHeaderLinks, SchemeColor, VersionInfo } from "@/utils/type";

export interface Props {
  title: string;
  subtitle: string;
  links: AppHeaderLinks[];
  schemeColor: SchemeColor;
  version: string;
  versionList: VersionInfo[];
}

const $props = defineProps<Props>();

const $emit = defineEmits<{
  (e: "switch-scheme-color"): void;
  (e: "switch-version", info: VersionInfo): void;
}>();

const lightLogo = `${APP_BASE_URL}logo.png`;

const darkLogo = `${APP_BASE_URL}logo-dark.png`;

const lightThemePng = `${APP_BASE_URL}light-theme.png`;

const darkThemePng = `${APP_BASE_URL}dark-theme.png`;

const showVersionPop = ref(false);

const versionRef = ref();

const toggleVersionPop = () => {
  const val = !showVersionPop.value;

  const action = val ? "add" : "remove";
  document.body[`${action}EventListener`]("click", checkHideVersionPop);

  showVersionPop.value = val;
};

const checkHideVersionPop = (event: Event) => {
  if (!versionRef.value.contains(event.target)) {
    showVersionPop.value = false;
  }
};
</script>
