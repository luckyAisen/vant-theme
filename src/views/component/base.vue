<template>
  <div class="vant-block">
    <h1>颜色</h1>
    <van-row gutter="24">
      <van-col
        v-for="col in color"
        :key="col.value"
        class="color-wrapper"
        span="4"
      >
        <div :style="{ backgroundColor: col.value, ...col.style }">
          <p>{{ col.describe }}</p>
        </div>
      </van-col>
    </van-row>
  </div>

  <div class="vant-block">
    <h1>内边距</h1>
    <div class="block-padding" v-for="item in padding" :key="item">
      <p :style="{ paddingLeft: 'var(' + item + ')' }">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'asdasdbase',
  setup() {
    return {
      color: [
        {
          value: 'var(--van-red)',
          describe: '红色、默认色'
        },

        {
          value: 'var(--van-gray-1)',
          describe: '背景色'
        },
        {
          value: 'var(--van-gray-2)',
          describe: '背景色'
        },
        {
          value: 'var(--van-gray-3)',
          describe: '边框、线色'
        },
        {
          value: 'var(--van-gray-4)',
          describe: '边框、线色'
        },
        {
          value: 'var(--van-gray-5)',
          describe: '文字色，指 disable、提示文字等'
        },
        {
          value: 'var(--van-gray-6)',
          describe: '文字色，指辅助、说明文字'
        },
        {
          value: 'var(--van-gray-7)',
          describe: '文字色，指主文字2'
        },
        {
          value: 'var(--van-gray-8)',
          describe: '文字色，指主文字1'
        },

        {
          value: 'var(--van-red)',
          describe: '红色'
        },
        {
          value: 'var(--van-blue)',
          describe: '蓝色'
        },
        {
          value: 'var(--van-orange)',
          describe: '橙色'
        },
        {
          value: 'var(--van-orange-dark)',
          describe: '深橙色'
        },
        {
          value: 'var(--van-orange-light)',
          describe: '浅橙色'
        },
        {
          value: 'var(--van-green)',
          describe: '绿色'
        },
        {
          value: 'var(--van-gradient-red)',
          describe: '渐变红色',
          style: {
            background: 'var(--van-gradient-red)'
          }
        },
        {
          value: 'var(--van-gradient-orange)',
          describe: '渐变橙色',
          style: {
            background: 'var(--van-gradient-red)'
          }
        },

        {
          value: 'var(--van-primary-color)',
          describe: '主要色'
        },
        {
          value: 'var(--van-success-color)',
          describe: '成功色'
        },
        {
          value: 'var(--van-danger-color)',
          describe: '危险色'
        },
        {
          value: 'var(--van-warning-color)',
          describe: '警告色'
        },
        {
          value: 'var(--van-text-color)',
          describe: '字体色'
        },
        {
          value: 'var(--van-active-color)',
          describe: '激活色'
        },
        {
          value: 'var(--van-text-link-color)',
          describe: '文字链颜色'
        }
      ],
      padding: [
        '--van-padding-base',
        '--van-padding-xs',
        '--van-padding-sm',
        '--van-padding-md',
        '--van-padding-lg',
        '--van-padding-xl'
      ]
    }
  }
})
</script>

<style lang="less" scoped>
.color-wrapper {
  height: 114px;
  color: #000000;
  margin-bottom: 20px;

  div {
    border-radius: 8px;
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  .block-padding {
    p {
      padding: 0;
    }
  }
}
</style>
