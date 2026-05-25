<template>
  <div class="scroll-progress-track">
    <div class="scroll-progress-fill" :style="{ height: scrollPercent + '%' }" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollPercent = ref(0)

function updateScrollProgress() {
  const scrollY = window.scrollY
  const docHeight = document.documentElement.scrollHeight
  const viewportHeight = window.innerHeight
  const scrollable = docHeight - viewportHeight

  if (scrollable <= 0) {
    scrollPercent.value = 0
    return
  }

  scrollPercent.value = Math.min((scrollY / scrollable) * 100, 100)
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.scroll-progress-track {
  position: fixed;
  top: 0;
  right: 0;
  width: 3px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.08);
  z-index: 999;
  overflow: hidden;
}

.scroll-progress-fill {
  width: 100%;
  height: 0%;
  background: linear-gradient(
    to bottom,
    $clr-primary-a30,
    $clr-primary-a50
  );
  transition: height 0.1s ease-out;
  border-radius: 0 0 2px 2px;
  will-change: height;
}
</style>
