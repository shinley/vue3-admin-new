<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
    </template>
    <!--循环渲染-->
    <sidebar-item v-for="item in route.children" :key="item.path" :route="item">
      <menu-item :title="item.meta.title" :icon="item.meta.icon"></menu-item>
    </sidebar-item>
  </el-sub-menu>

  <el-menu-item v-else :index="route.path">
    <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
  </el-menu-item>
</template>
<script setup>
import MenuItem from './MenuItem.vue'
defineProps({
  route: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="scss" scoped></style>
