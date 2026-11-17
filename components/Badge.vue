<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'blue' | 'pink'
  size?: 'lg' | 'sm'
}>(), {
  variant: 'blue',
  size: 'lg',
})
</script>

<template>
  <span class="badge" :class="[`badge--${variant}`, `badge--${size}`]">
    <svg class="badge-mark" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.6714 0.141059C10.3456 -0.0470197 9.94421 -0.0470197 9.61835 0.141059L4.61328 3.02885L14.4009 8.66729V20.0833L19.394 17.2033C19.7139 17.0192 19.9106 16.6822 19.9106 16.3158V5.47192L10.6714 0.141059Z" fill="white" />
      <path d="M4.62358 6.05586L0 8.67525L7.2662 12.86V21.3333L11.8798 18.7179C12.1163 18.5807 12.2633 18.33 12.2633 18.0596V10.0114L5.40444 6.05586C5.16403 5.91676 4.864 5.91676 4.62358 6.05586Z" fill="white" />
      <path d="M5.06648 19.7521V14.0353L0.111084 16.8937L5.06648 19.7521Z" fill="white" />
    </svg>
    <span class="badge-label"><slot /></span>
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  border-radius: 12px;
  color: #fff;
  font-family: var(--f-head);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

.badge--blue {
  background: var(--g-blue);
}

.badge--pink {
  background: var(--g-pink);
}

.badge--lg {
  height: 48px;
  padding: 12px 20px;
  gap: 12px;
  font-size: 20px;
}

.badge--lg .badge-mark {
  width: 20px;
  height: 24px;
}

.badge--sm {
  height: 40px;
  padding: 10px 16px;
  gap: 10px;
  font-size: 16px;
}

.badge--sm .badge-mark {
  width: 16.67px;
  height: 20px;
}

.badge-mark {
  flex: none;
}
</style>
