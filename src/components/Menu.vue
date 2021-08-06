<template>
  <div class="page-preview-menu-container">
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
import { menuList } from '@/config'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuComponent',
  setup() {
    return {
      menuList
    }
  }
})
</script>
