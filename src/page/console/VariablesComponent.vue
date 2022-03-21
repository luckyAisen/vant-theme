<template>
  <n-input
    v-if="$props.type === 'n-input'"
    type="text"
    v-model:value="model"
    @change="complete"
  />
  <n-color-picker
    v-if="$props.type === 'n-color-picker'"
    :modes="['rgb', 'hex', 'hsl', 'hsv']"
    v-model:value="model"
    @complete="complete"
  />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { NInput, NColorPicker } from "naive-ui";
import type { VariablesComponent } from "@/utils/type";

export interface Props {
  type: VariablesComponent | undefined;
  index: number;
  label: string;
  value: string;
}

const $props = defineProps<Props>();

const $emit = defineEmits<{
  (e: "complete", payload: Props): void;
}>();

const model = ref($props.value);

const complete = async (value: string) => {
  const { type, index, label } = $props;
  const payload = {
    type,
    index,
    label,
    value,
  };
  $emit("complete", payload);
};

watchEffect(() => {
  model.value = $props.value;
});
</script>
