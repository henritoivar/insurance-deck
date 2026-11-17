<script setup lang="ts">
import { computed } from 'vue'

const icons = {
  'oversight': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.17157 9.82843C5.42143 9.07828 5 8.06087 5 7C5 5.93913 5.42143 4.92172 6.17157 4.17157C6.92172 3.42143 7.93913 3 9 3C10.0609 3 11.0783 3.42143 11.8284 4.17157C12.5786 4.92172 13 5.93913 13 7C13 8.06087 12.5786 9.07828 11.8284 9.82843C11.0783 10.5786 10.0609 11 9 11C7.93913 11 6.92172 10.5786 6.17157 9.82843Z"/><path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"/><path d="M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15"/></svg>',
  'record': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H18C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7956 12 18 12H6C5.20435 12 4.44129 11.6839 3.87868 11.1213C3.31607 10.5587 3 9.79565 3 9V7Z"/><path d="M3 15C3 14.2044 3.31607 13.4413 3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H18C18.7956 12 19.5587 12.3161 20.1213 12.8787C20.6839 13.4413 21 14.2044 21 15V17C21 17.7956 20.6839 18.5587 20.1213 19.1213C19.5587 19.6839 18.7956 20 18 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V15Z"/><path d="M7 8V8.01"/><path d="M7 16V16.01"/></svg>',
  'transparency': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"/><path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"/><path d="M9 15L11 17L15 13"/></svg>',
  'accuracy': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.767 15.12C13.1054 14.8759 12.5031 14.4942 12 14C11.0654 13.0839 9.80876 12.5707 8.5 12.5707C7.19124 12.5707 5.93464 13.0839 5 14V5.00003C5.93464 4.08389 7.19124 3.57074 8.5 3.57074C9.80876 3.57074 11.0654 4.08389 12 5.00003C12.9346 5.91616 14.1912 6.42931 15.5 6.42931C16.8088 6.42931 18.0654 5.91616 19 5.00003V13.5"/><path d="M5 21V14"/><path d="M15 19L17 21L21 17"/></svg>',
  'privacy': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M12 11v3"/><circle cx="12" cy="9.5" r="0.5" fill="currentColor" stroke="none"/></svg>',
  'equals': '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.334 16.667H31.667"/><path d="M8.334 23.333H31.667"/></svg>',
  'times': '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M30 10L10 30"/><path d="M10 10L30 30"/></svg>',
  'plus': '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 8.333V31.667"/><path d="M8.334 20H31.667"/></svg>',
  'check': '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.666 16L13.333 22.667L26.666 9.333"/></svg>',
  'cross': '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8L8 24"/><path d="M8 8L24 24"/></svg>',
  'quote': '<svg width="96" height="96" viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M56 52H72C73.0609 52 74.0783 52.4214 74.8284 53.1716C75.5786 53.9217 76 54.9391 76 56V68C76 69.0609 75.5786 70.0783 74.8284 70.8284C74.0783 71.5786 73.0609 72 72 72H60C58.9391 72 57.9217 71.5786 57.1716 70.8284C56.4214 70.0783 56 69.0609 56 68V44C56 33.3333 61.3333 26.6667 72 24"/><path d="M20 52H36C37.0609 52 38.0783 52.4214 38.8284 53.1716C39.5786 53.9217 40 54.9391 40 56V68C40 69.0609 39.5786 70.0783 38.8284 70.8284C38.0783 71.5786 37.0609 72 36 72H24C22.9391 72 21.9217 71.5786 21.1716 70.8284C20.4214 70.0783 20 69.0609 20 68V44C20 33.3333 25.3333 26.6667 36 24"/></svg>',
  'arrow-circle': '<svg width="77" height="77" viewBox="0 0 77 77" fill="none"><circle cx="38.5" cy="38.5" r="37.5" fill="#040D1E"/><circle cx="38.5" cy="38.5" r="38" stroke="#D4D4D4" stroke-opacity="0.2"/><g stroke="#864CCE" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5698 38.5004H22.8198M30.3198 38.5004H34.0698M41.5698 38.5004H56.5698"/><path d="M46.5698 48.5004L56.5698 38.5004"/><path d="M46.5698 28.5004L56.5698 38.5004"/></g></svg>',
} as const

const props = defineProps<{
  name: keyof typeof icons
}>()

const svg = computed(() => icons[props.name])
</script>

<template>
  <span class="icon" aria-hidden="true" v-html="svg" />
</template>

<style scoped>
.icon {
  display: inline-flex;
  flex: none;
  line-height: 0;
}
</style>
