<template>
  <el-menu
    :default-active="activeMenu"
    :uniqueOpened="true"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    router
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'
import { useCssVarStore } from '@/stores/cssVar'
const cssStore = useCssVarStore()
const router = useRouter()

const backgroundColor = cssStore.cssVar.menuBg
const textColor = cssStore.cssVar.menuText
const activeTextColor = cssStore.cssVar.menuActiveText

const route = useRoute()
// 默认激活项
const activeMenu = computed(() => {
  const { path } = route
  return path
})

console.log('activeMenu', activeMenu.value)

const routes = computed(() => {
  const fRouters = filterRoutes(router.getRoutes())
  return generateMenus(fRouters)
})

console.log(JSON.stringify(routes.value))
</script>

<style lang="scss" scoped></style>
