<template>
  <div class="console-panel-var">
    <n-collapse
      class="console-panel-var__collapse"
      display-directive="show"
      arrow-placement="right"
      :default-expanded-names="$props.expanded"
    >
      <n-collapse-item
        class="console-panel-var__group"
        v-for="(component, parentIndex) in $props.options"
        :key="component.value"
        :name="component.value"
        :id="`var-${component.value}`"
      >
        <template #header>
          <div class="console-panel-var__group-title">
            {{ component.label }}
          </div>
        </template>
        <template #arrow="arrow">
          <n-tooltip placement="top" trigger="hover">
            <template #trigger>
              <n-icon size="24px">
                <chevron-forward-circle-outline />
              </n-icon>
            </template>
            <span> {{ arrow.collapsed ? "展开" : "收起" }}样式变量 </span>
          </n-tooltip>
        </template>
        <template #header-extra>
          <n-tooltip placement="top" trigger="hover">
            <template #trigger>
              <router-link :to="component.value" active-class="active">
                <n-icon size="24px" @click.stop="">
                  <phone-portrait />
                </n-icon>
              </router-link>
            </template>
            <span> 显示示例 </span>
          </n-tooltip>
        </template>
        <div
          class="console-panel-var__group__item"
          v-for="(variables, index) in component.children"
          :key="variables.value"
        >
          <n-ellipsis class="console-panel-var__group__item-var-name">
            {{ variables.label }}
          </n-ellipsis>
          <variables-component
            :parentIndex="parentIndex"
            :type="variables.type"
            :index="index"
            :label="variables.label"
            :value="variables.value"
            @complete="(payload) => $emit('complete', payload)"
          />
        </div>
      </n-collapse-item>

      <!-- <n-collapse-item name="1" class="console-panel-var__collapse-group">
        <template v-slot:header>
          <div class="console-panel-var__collapse-group-title">Button 按钮</div>
        </template>
        <div>可以</div>
      </n-collapse-item> -->
    </n-collapse>
  </div>
</template>

<script lang="ts" setup>
// import { ref, watchEffect } from "vue";
import { NCollapse, NCollapseItem, NEllipsis, NTooltip, NIcon } from "naive-ui";
import { ChevronForwardCircleOutline, PhonePortrait } from "@vicons/ionicons5";
import VariablesComponent from "./VariablesComponent.vue";
import type { Style } from "@/utils/type";
import type { Props as VariablesProps } from "./VariablesComponent.vue";

interface Props {
  options: Style[];
  active: string;
  expanded: string[];
}

const $props = defineProps<Props>();

const $emit = defineEmits<{
  (e: "complete", payload: VariablesProps): void;
}>();

// const componentOption = ref<Style[]>();

// const expandedOption = ref<string[]>();

// watchEffect(() => {
//   componentOption.value = $props.options;
//   expandedOption.value = $props.expanded;
// });
</script>
