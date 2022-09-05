<template>
  <el-menu
    :uniqueOpened="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!--子集menu-->
    <el-sub-menu index="1">
      <template #title>
        <svg-icon name="location" color="yellow" size="20"></svg-icon>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项一</el-menu-item>
      <el-menu-item index="1-2">选项二</el-menu-item>
    </el-sub-menu>

    <!--具体菜单项-->
    <el-menu-item index="2">
      <svg-icon name="location" color="#FFF" size="20"></svg-icon>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'

const router = useRouter()

const routes = computed(() => {
  const fRouters = filterRoutes(router.getRoutes())
  return generateMenus(fRouters)
})

console.log(JSON.stringify(routes.value))
</script>

<style lang="scss" scoped></style>
