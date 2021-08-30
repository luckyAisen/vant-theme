<template>
  <div class="vant-block">
    <h1>颜色</h1>
    <n-grid x-gap="24" :cols="4" class="block-color">
      <n-gi v-for="item in color" :key="item.value" class="block-color-item">
        <div :style="{ backgroundColor: item.value, ...item.style }">
          <p>{{ item.describe }}</p>
        </div>
      </n-gi>
    </n-grid>
  </div>

  <div class="vant-block">
    <h1>内边距</h1>
    <div class="block-padding" v-for="item in padding" :key="item">
      <p :style="{ paddingLeft: item.value }">
        {{ item.describe }}
      </p>
    </div>
  </div>

  <div class="vant-block">
    <h1>字体</h1>
    <div class="block-font" v-for="(item, index) in font" :key="item">
      <p
        :style="{
          [index === font.length - 1 ? 'fontWeight' : 'fontSize']: item.value
        }"
      >
        {{ item.describe }}
      </p>
    </div>
  </div>

  <div class="vant-block">
    <h1>行高</h1>
    <div class="block-line-height" v-for="item in lineHeight" :key="item">
      <p
        :style="{
          lineHeight: item.value
        }"
      >
        {{ item.describe }}
      </p>
    </div>
  </div>

  <div class="vant-block">
    <h1>边框</h1>
    <div class="block-border-width">
      <div class="border-width-item"></div>
    </div>
  </div>

  <div class="vant-block">
    <h1>圆角</h1>
    <n-grid x-gap="24" :cols="6" class="block-border-radius">
      <n-gi
        v-for="item in borderRadiusList"
        :key="item.value"
        class="block-border-radius-item"
      >
        <div
          :style="{
            borderRadius: item.value
          }"
        >
          <p>{{ item.describe }}</p>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NGrid, NGi } from 'naive-ui'
export default defineComponent({
  name: 'ColorBase',
  components: {
    NGrid,
    NGi
  },
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
            background: 'var(--van-gradient-orange)'
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
        {
          value: 'var(--van-padding-base)',
          describe: '基础'
        },
        {
          value: 'var(--van-padding-xs)',
          describe: '超小'
        },
        {
          value: 'var(--van-padding-sm)',
          describe: '小'
        },
        {
          value: 'var(--van-padding-md)',
          describe: '中等'
        },
        {
          value: 'var(--van-padding-lg)',
          describe: '大'
        }
      ],
      font: [
        {
          value: 'var(--van-font-size-xs)',
          describe: '超小'
        },
        {
          value: 'var(--van-font-size-sm)',
          describe: '小'
        },
        {
          value: 'var(--van-font-size-md)',
          describe: '中等'
        },
        {
          value: 'var(--van-font-size-lg)',
          describe: '大'
        },
        {
          value: 'var(--van-font-size-xs)',
          describe: '超小'
        },
        {
          value: 'var(--van-font-weight-bold)',
          describe: '粗细程度'
        }
      ],
      lineHeight: [
        {
          value: 'var(--van-line-height-xs)',
          describe: '超小'
        },
        {
          value: 'var(--van-line-height-sm)',
          describe: '小'
        },
        {
          value: 'var(--van-line-height-md)',
          describe: '中等'
        },
        {
          value: 'var(--van-line-height-lg)',
          describe: '大'
        }
      ],
      borderRadiusList: [
        {
          value: 'var(--van-border-radius-sm)',
          describe: '小'
        },
        {
          value: 'var(--van-border-radius-md)',
          describe: '中等'
        },
        {
          value: 'var(--van-border-radius-lg)',
          describe: '大'
        },
        {
          value: 'var(--van-border-radius-max)',
          describe: '最大'
        }
      ]
    }
  }
})
</script>

<style lang="less" scoped>
.vant-block {
  .block-color {
    .block-color-item {
      margin-bottom: 20px;

      div {
        color: #000000;
        border-radius: 8px;
        font-size: 14px;
        box-sizing: border-box;
        width: 100%;
        height: 114px;
        padding: 20px;
      }
    }
  }

  .block-padding {
    p {
      padding: 0;
    }
  }

  .block-line-height {
  }

  .block-border-width {
    .border-width-item {
      border-radius: 8px;
      font-size: 14px;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 20px;
      border-width: var(--van-border-width-base);
      border-color: var(--van-red);
      border-style: solid;
    }
  }

  .block-border-radius {
    .block-border-radius-item {
      margin-bottom: 20px;

      div {
        color: #000000;
        font-size: 14px;
        box-sizing: border-box;
        width: 100%;
        height: 114px;
        padding: 20px;
        background-color: var(--van-red);
      }
    }
  }
}
</style>
