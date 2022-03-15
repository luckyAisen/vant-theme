<template>
  <n-ellipsis class="console-component-title">
    {{ varName }}
  </n-ellipsis>
  <n-color-picker
    :modes="['hex', 'rgb']"
    v-model:value="model"
    @complete="complete"
  />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { NEllipsis, NColorPicker } from "naive-ui";

interface Props {
  index: number;
  varName: string;
  varValue: string;
}

const $props = defineProps<Props>();

const $emit = defineEmits<{
  (e: "complete", itemStyle: Props): void;
}>();

const model = ref($props.varValue);

const complete = async (value: string) => {
  const { index, varName } = $props;
  const payload = {
    index,
    varName,
    varValue: value,
  };
  $emit("complete", payload);
};

watchEffect(() => {
  model.value = $props.varValue;
});
</script>
