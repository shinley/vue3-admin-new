<template>
  <div
    class="app-wrapper"
    :class="[sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <!--左侧menu-->
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />

    <div class="main-container">
      <div class="fixed-header">
        <!--顶部navbar-->
        <Navbar />
      </div>
      <!--内容区-->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'

// 导入scss变量， 必须要在文件中加 module
import variables from '@/styles/variables.module.scss'

import { useAppStateStore } from '@/stores/app'

const appStore = useAppStateStore()

const sidebarOpened = computed(() => {
  return appStore.sidebarOpened
})

console.log(variables.menuBg)
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
