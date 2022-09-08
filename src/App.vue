<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>
<script setup>
import { computed } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useAppStateStore } from './stores/app'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const appStore = useAppStateStore()
const locale = computed(() => {
  return appStore.language === 'en' ? en : zhCn
})
</script>

<style scoped></style>
