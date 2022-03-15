<template>
  <n-modal
    v-model:show="modalShow"
    :title="modalTitle"
    :style="{
      width: '600px',
    }"
    preset="card"
    :mask-closable="false"
    @close="modalClose"
  >
    <n-form
      label-placement="left"
      :label-width="80"
      :model="formModel"
      :rules="formRules"
      ref="formRef"
    >
      <n-form-item label="主题名词" path="name">
        <n-input
          v-model:value="formModel.name"
          placeholder=""
          maxlength="30"
          show-count
          clearable
        />
      </n-form-item>
      <n-form-item label="主题描述">
        <n-input
          placeholder=""
          v-model:value="formModel.describe"
          type="textarea"
          size="small"
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
          clearable
        />
      </n-form-item>
    </n-form>
    <template #footer>
      <n-space justify="end">
        <n-button @click="modalClose">取消</n-button>
        <n-button type="info" @click="modalValidate">确定</n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { NModal, NSpace, NForm, NFormItem, NInput, NButton } from "naive-ui";
import type { ModalValue } from "@/utils/type";

export type TypeProps = "add" | "edit" | "copy";

export type Props = {
  type: TypeProps;
  show?: boolean;
};

const $props = defineProps<Props>();

const $emit = defineEmits<{
  (e: "close"): void;
  (e: "confirm", info: ModalValue): void;
}>();

const modalShow = ref($props.show);

const modalTitle = ref();

const formRef = ref();

const formModel = ref<ModalValue>({
  name: "",
  describe: "",
});

const formRules = {
  name: {
    required: true,
    message: "要输入主题名称哦~",
    trigger: ["input"],
  },
};

const modalClose = () => {
  $emit("close");
};

async function modalValidate() {
  await formRef.value.validate();
  $emit("confirm", formModel.value);
  modalClose();
}

watchEffect(() => {
  const titleMap = {
    add: "新增主题",
    edit: "修改主题",
    copy: "复制主题",
  };
  modalTitle.value = titleMap[$props.type] || undefined;
  modalShow.value = $props.show;
  formModel.value.name = "";
  formModel.value.describe = "";
});
</script>
