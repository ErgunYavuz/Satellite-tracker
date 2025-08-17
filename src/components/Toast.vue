<script setup>
import { computed } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false },
  type: { type: String, default: 'info' },
  message: { type: String, default: '' }
})

const toastClass = computed(() => `toast toast-${props.type}`)
</script>

<template>
  <Transition name="toast-fade" appear>
    <div v-if="show" :class="toastClass">
      {{ message }}
    </div>
  </Transition>
</template>

<style scoped>
.toast {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  border-radius: 6px;
  color: white;
  z-index: 1000;
}

.toast-error { background: rgba(220, 38, 38, 0.9); }
.toast-info { background: rgba(59, 130, 246, 0.9); }
.toast-success { background: rgba(34, 197, 94, 0.9); }

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 250ms ease, transform 250ms ease;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>
