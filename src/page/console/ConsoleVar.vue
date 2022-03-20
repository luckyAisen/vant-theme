<template>
  <div class="console-panel-var">
    <div class="console-panel-var__container">
      <div
        class="console-panel-var-list"
        v-if="
          $props.options &&
          $props.options.children &&
          $props.options.children.length > 0
        "
      >
        <div
          class="console-panel-var__group__item"
          v-for="(variables, index) in $props.options.children"
          :key="`${variables.label}`"
        >
          <n-ellipsis class="console-panel-var__group__item-var-name">
            {{ variables.label }}
          </n-ellipsis>
          <variables-component
            :type="variables.type"
            :index="index"
            :label="variables.label"
            :value="variables.value"
            @complete="(payload) => $emit('complete', payload)"
          />
        </div>
      </div>
      <p class="console-panel-var-no-var" v-else>没有样式变量</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NEllipsis } from "naive-ui";
import VariablesComponent from "./VariablesComponent.vue";
import type { Style } from "@/utils/type";
import type { Props as VariablesProps } from "./VariablesComponent.vue";

interface Props {
  options: Style | undefined;
}

const $props = defineProps<Props>();

const $emit = defineEmits<{
  (e: "complete", payload: VariablesProps): void;
}>();
</script>
