<template>
  <div class="app-menu-container">
    <div class="menu-container">
      <div class="menu-group" v-for="group in menuList" :key="group.name">
        <div class="menu-group-title">{{ group.name }}</div>
        <div class="menu-children">
          <div class="menu-item" v-for="item in group.children" :key="item.id">
            <router-link
              :to="{ name: item.id }"
              class="menu-item-link"
              active-class="menu-item-link-active"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Menu',
  components: {},
  computed: {
    ...mapGetters(['menuList'])
  },
  data() {
    return {}
  }
})
</script>

<style lang="less" scope>
.app-menu-container {
  width: 240px;
  z-index: 1;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;

  .menu-container {
    padding: 24px;

    .menu-group {
      .menu-group-title {
        color: #455a64;
        font-weight: 600;
        font-size: 15px;
        line-height: 28px;
        padding: 12px 12px 12px 0;
      }
      .menu-children {
        .menu-item {
          font-size: 14px;
          line-height: 20px;
          padding: 12px 12px 12px 0;
          .menu-item-link {
            color: #455a64;
            &:hover {
              color: var(--app-primary-color);
            }
          }
          .menu-item-link-active {
            color: var(--app-primary-color);
          }
        }
      }
    }
  }
}
</style>
