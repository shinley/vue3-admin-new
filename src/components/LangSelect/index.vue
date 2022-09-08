<template>
  <el-dropdown
    class="international"
    trigger="click"
    @command="handleSetLanguage"
  >
    <div>
      <el-tooltip content="国际化" :effect="effect">
        <svg-icon class="svgicon" name="language"></svg-icon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup>
import { computed } from 'vue'
import { useAppStateStore } from '../../stores/app'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: function (value) {
      return ['dark', 'light'].indexOf(value) !== -1
    },
  },
})

const appStore = useAppStateStore()
const language = computed(() => appStore.language)

const i18n = useI18n()
// 切换语言的方法
const handleSetLanguage = (lang) => {
  // 切换i18n的locale
  i18n.locale.value = lang
  // 修改全局状态
  appStore.setLanguage(lang)
  // 提未
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
}
</script>
<style lang="scss" scoped></style>
