<template>
  <div class="app-attrs-container">
    <div class="attrs-container">
      <div
        class="attr-component"
        v-for="(component, index) in currentAttrsGroup"
        :key="component.varName"
      >
        <ColorPicker
          :index="index"
          :var-name="component.varName"
          :var-value="component.varValue"
          v-if="component.component === 'n-color-picker'"
        />

        <AttrInput
          :index="index"
          :var-name="component.varName"
          :var-value="component.varValue"
          v-if="component.component === 'n-input'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import AttrInput from '@/components/Input.vue'
import ColorPicker from '@/components/ColorPicker.vue'

export default defineComponent({
  name: 'Console',
  components: {
    AttrInput,
    ColorPicker
  },
  computed: {
    ...mapGetters(['currentAttrsGroup'])
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['transform'])
  },
  created() {
    // this.transform("Base");
  }
})
</script>

<style lang="less" scope>
.app-attrs-container {
  width: 500px;
  z-index: 1;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;
  .attrs-container {
    padding: 24px;
    .attr-component {
      margin-bottom: 12px;
    }
  }
}
</style>
