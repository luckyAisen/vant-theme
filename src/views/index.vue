<template>
  <div class="index">
    <h1 className="text-5xl font-bold">{{ $t('hello') }}</h1>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Index'
});
</script>

<style lang="scss" scoped>
.index {
}
</style>
