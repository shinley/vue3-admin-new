<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumData" :key="item.path">
      <!--不可点击-->
      <span class="no-redirect" v-if="index === breadcrumData.length - 1">
        {{ item.meta.title }}
      </span>
      <!--可点击-->
      <span class="redirect" @click="onLinkClick(item)" v-else>
        {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCssVarStore } from '../../stores/cssVar'

const cssStore = useCssVarStore()

const linkHoverColor = ref(cssStore.cssVar.menuBg)
// 生成数组数据
const breadcrumData = ref([])
const getBreadcrumData = () => {
  breadcrumData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}

// 监听路由变化
const route = useRoute()
watch(
  route,
  () => {
    getBreadcrumData()
  },
  {
    immediate: true, // 进入组件触发一次
  }
)

// 跳转点击事件
const router = useRouter()
const onLinkClick = (item) => {
  router.push(item.path)
}
</script>
<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .redirect {
    color: #666;
    font-weight: 600;
    cursor: pointer;
  }
  .redirect:hover {
    color: v-bind(linkHoverColor);
  }
}
</style>
