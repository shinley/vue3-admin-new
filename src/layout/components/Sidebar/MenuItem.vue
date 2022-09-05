<template>
  <div class="menu-item">
    <!--element icon-->
    <!--非element icon-->
    <svg-icon :name="icon"></svg-icon>
    <span>{{ title }}</span>

    <!--文本-->
  </div>
</template>
<script setup>
import SvgIcon from '../../../components/SvgIcon/index.vue'
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>
<style lang="scss" scoped></style>
