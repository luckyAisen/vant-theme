<template>
  <n-ellipsis class="console-component-title">
    {{ varName }}
  </n-ellipsis>
  <n-input type="text" v-model:value="model" @change="complete" />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { NInput, NEllipsis } from "naive-ui";
import useMainStore from "../stores";

interface Props {
  index: number;
  varName: string;
  varValue: string;
}

const $props = defineProps<Props>();

const $emit = defineEmits<{
  (e: "complete", payload: Props): void;
}>();

const $store = useMainStore();

const model = ref($props.varValue);

const complete = async (value: string) => {
  const { index, varName } = $props;
  const payload = {
    index,
    varName,
    varValue: value,
  };
  await $store.setComponentConsoleStyle(payload);
  $emit("complete", payload);
};

watchEffect(() => {
  model.value = $props.varValue;
});
</script>
