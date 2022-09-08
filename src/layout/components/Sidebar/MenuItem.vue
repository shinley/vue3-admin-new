<template>
  <div class="menu-item">
    <!--element icon-->
    <!--非element icon-->
    <span class="icon">
      <svg-icon class="svgicon" :name="icon"></svg-icon>
    </span>

    <span>{{ generateTitle(title) }}</span>
    <!--文本-->
  </div>
</template>
<script setup>
import { generateTitle } from '@/utils/i18n'
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
<style lang="scss" scoped>
.svgicon {
  width: 1.3em;
  height: 1.3em;
}
</style>
