<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon class="hambur" :name="icon" color="gray"></svg-icon>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useAppStateStore } from '@/stores/app'
const appStore = useAppStateStore()

const toggleClick = () => {
  appStore.triggerSidebarOpened()
}
const icon = computed(() => {
  return appStore.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
</script>
<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
