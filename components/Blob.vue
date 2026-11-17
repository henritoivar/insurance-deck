<script setup lang="ts">
import { computed } from 'vue'

// x/y/size describe the glow's bounding box in the parent, as measured in Figma.
// blur is the Figma layer-blur radius; CSS blur() takes roughly half of it.
const props = withDefaults(defineProps<{
  x: number
  y: number
  size?: number
  color: string
  opacity?: number
  blur?: number
}>(), {
  size: 807,
  opacity: 0.7,
  blur: 464,
})

const style = computed(() => {
  const d = props.size * 0.68
  const offset = (props.size - d) / 2
  return {
    left: `${props.x + offset}px`,
    top: `${props.y + offset}px`,
    width: `${d}px`,
    height: `${d}px`,
    background: props.color,
    opacity: props.opacity,
    filter: `blur(${props.blur / 2}px)`,
  }
})
</script>

<template>
  <div class="blob" :style="style" aria-hidden="true" />
</template>

<style scoped>
.blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
</style>
