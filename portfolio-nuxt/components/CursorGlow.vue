<template>
  <div
    v-if="isPointerFine"
    class="cursor-glow"
    :style="{
      transform: `translate(calc(${renderX}px - 50%), calc(${renderY}px - 50%))`,
    }"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isPointerFine = ref(false)

const mouseX = ref(0)
const mouseY = ref(0)
const renderX = ref(0)
const renderY = ref(0)

let rafId: number | null = null

const LERP_FACTOR = 0.1

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

function animate() {
  renderX.value = lerp(renderX.value, mouseX.value, LERP_FACTOR)
  renderY.value = lerp(renderY.value, mouseY.value, LERP_FACTOR)
  rafId = requestAnimationFrame(animate)
}

function onMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

onMounted(() => {
  const mq = window.matchMedia('(pointer: fine)')
  isPointerFine.value = mq.matches

  if (isPointerFine.value) {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    rafId = requestAnimationFrame(animate)
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
})
</script>

<style scoped>
.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  background: radial-gradient(
    circle at center,
    rgba(200, 106, 85, 0.14) 0%,
    rgba(200, 106, 85, 0.07) 35%,
    transparent 70%
  );
  will-change: transform;
}
</style>
