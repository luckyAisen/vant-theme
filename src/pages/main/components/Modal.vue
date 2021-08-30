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
    <template #footer class="modal-component">
      <div class="modal-footer">
        <n-space>
          <n-button @click="modalClose">取消</n-button>
          <n-button type="primary" @click="modalValidate">取完了</n-button>
        </n-space>
      </div>
    </template>
  </n-modal>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watchEffect } from 'vue'
import { NModal, NSpace, NForm, NFormItem, NInput, NButton } from 'naive-ui'

export default defineComponent({
  name: 'ModalComponent',
  components: {
    NModal,
    NSpace,
    NForm,
    NFormItem,
    NInput,
    NButton
  },
  emits: ['close', 'confirm'],
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const formRef = ref()
    const modalShow = ref(props.show)
    const modalTitle = '取个名字呀~'
    const modalStyle = {
      width: '600px'
    }
    const formModel = reactive({
      nameValue: ''
    })
    const formRules = {
      nameValue: {
        required: true,
        message: '要输入主题名称哦~',
        trigger: ['input']
      }
    }
    const modalClose = () => {
      emit('close')
    }
    async function modalValidate() {
      await formRef.value.validate()
      emit('confirm', formModel)
      modalClose()
    }
    watchEffect(() => {
      modalShow.value = props.show
      props.show && (formModel.nameValue = '')
    })
    return {
      modalShow,
      modalTitle,
      modalStyle,
      formRef,
      formModel,
      formRules,
      modalClose,
      modalValidate
    }
  }
})
</script>
