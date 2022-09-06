<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  />
  <svg
    v-else
    aria-hidden="true"
    class="svg-icon"
    :class="className"
    :width="props.size"
    :height="props.size"
  >
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
import { isExternal as external } from '@/utils/validate'
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: '#FFF',
  },
  size: {
    type: String,
    default: '1em',
  },
})

/**
 * 判断是否为外部图标
 */
const isExternal = computed(() => external(props.name))
console.log('外部图标', isExternal.value)
/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => ({
  mask: `url(${props.name}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.name}) no-repeat 50% 50%`,
}))

/**
 * 项目内图标
 */
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  width: 1em;
  height: 1em;
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
