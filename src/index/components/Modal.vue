<template>
  <n-modal
    className="n-card n-modal modal-component"
    :title="modalTitle"
    :style="modalStyle"
    preset="card"
    :mask-closable="false"
    v-model:show="modalShow"
    @close="modalClose"
  >
    <n-form
      label-placement="left"
      :label-width="80"
      :model="formModel"
      :rules="formRules"
      ref="formRef"
    >
      <n-form-item label="主题名字" path="nameValue">
        <n-input
          placeholder=""
          maxlength="30"
          show-count
          clearable
          v-model:value="formModel.nameValue"
        />
      </n-form-item>
    </n-form>
    <template #footer>
      <div class="modal-component">
        <div class="modal-footer">
          <n-space>
            <n-button @click="modalClose">取消</n-button>
            <n-button type="primary" @click="modalValidate">取完了</n-button>
          </n-space>
        </div>
      </div>
    </template>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { NModal, NSpace, NForm, NFormItem, NInput, NButton } from "naive-ui";

interface Props {
  show?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
});

const $emit = defineEmits<{
  (e: "close"): void;
  (e: "confirm", name: string): void;
}>();

const formRef = ref();

const modalShow = ref(props.show);

const modalTitle = "取个名字呀~";

const modalStyle = {
  width: "600px",
};

const formModel = ref({
  nameValue: "",
});

const formRules = {
  nameValue: {
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
  $emit("confirm", formModel.value.nameValue);
  modalClose();
}

watchEffect(() => {
  modalShow.value = props.show;
  props.show && (formModel.value.nameValue = "");
});
</script>
