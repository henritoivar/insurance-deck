<script setup lang="ts">
withDefaults(defineProps<{
  fade?: 'down' | 'up'
}>(), {
  fade: 'down',
})
</script>

<template>
  <div class="dots" :class="`dots--${fade}`" aria-hidden="true" />
</template>

<style scoped>
.dots {
  position: absolute;
  pointer-events: none;
  background-image: radial-gradient(circle at center, #0b22d2 2.5px, transparent 2.8px);
  background-size: 9px 9.79px;
}

.dots--down {
  mask-image: linear-gradient(to bottom, #000 0%, transparent 100%);
}

.dots--up {
  mask-image: linear-gradient(to top, #000 0%, transparent 100%);
}
</style>
