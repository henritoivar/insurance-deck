<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

// `title` is a reserved Slidev frontmatter key, so it only arrives via `frontmatter`.
const props = withDefaults(defineProps<{
  badge: string
  subtitle?: string
  subtitleTone?: 'muted' | 'ink'
  panel?: 'white' | 'outlined' | 'light' | 'dark' | 'blue' | 'none'
  frontmatter?: Record<string, any>
}>(), {
  subtitleTone: 'muted',
  panel: 'light',
  frontmatter: () => ({}),
})

const { $page } = useSlideContext()
const pageLabel = computed(() => String($page.value).padStart(2, '0'))
const title = computed(() => props.frontmatter.title ?? '')
</script>

<template>
  <div class="insury-slide deck">
    <aside class="sidebar">
      <Dots class="sidebar-dots" />
      <header class="sidebar-header">
        <Badge>{{ props.badge }}</Badge>
        <h1 class="t-h1 sidebar-title">{{ title }}</h1>
        <p v-if="props.subtitle" class="t-body2" :class="props.subtitleTone === 'ink' ? 'c-ink' : 'c-muted'">
          {{ props.subtitle }}
        </p>
      </header>
      <footer class="sidebar-footer t-body3">
        <span>Insury</span>
        <span class="sidebar-rule" />
        <span>{{ pageLabel }}</span>
      </footer>
    </aside>
    <main class="panel" :class="`panel--${props.panel}`">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.sidebar {
  position: absolute;
  left: 24px;
  top: 24px;
  width: 520px;
  height: 1032px;
  padding: 64px 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  background: var(--c-surface);
  overflow: hidden;
}

.sidebar-dots {
  left: 0;
  top: 0;
  width: 520px;
  height: 489px;
  opacity: 0.05;
}

.sidebar-header {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.sidebar-title {
  white-space: pre-line;
}

.sidebar-footer {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--c-muted);
}

.sidebar-rule {
  flex: 1;
  height: 1px;
  background: repeating-linear-gradient(90deg, var(--c-muted) 0 4px, transparent 4px 8px);
}

.panel {
  position: absolute;
  left: 568px;
  top: 24px;
  width: 1328px;
  height: 1032px;
  border-radius: 16px;
  overflow: hidden;
}

.panel--white,
.panel--outlined { background: #fff; }
.panel--light { background: var(--c-surface); }
.panel--dark { background: var(--c-ink); }
.panel--blue { background: var(--c-primary); }

.panel--none {
  overflow: visible;
}

.panel--outlined::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid var(--c-border);
  border-radius: inherit;
  pointer-events: none;
}
</style>
