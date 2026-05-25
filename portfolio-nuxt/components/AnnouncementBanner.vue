<template>
  <Transition name="banner">
    <div v-show="visible" class="announcement-banner">
      <div class="banner-inner">
        <div class="banner-content">
          <span class="pulse-dot" aria-hidden="true"></span>
          <span class="banner-text">🚀 Clepa is now in Beta!</span>
          <a
            href="https://clepahealth.com/waitlist"
            target="_blank"
            rel="noopener noreferrer"
            class="banner-link"
          >Sign up for early access →</a>
        </div>
        <button class="close-btn" aria-label="Dismiss announcement" @click="dismiss">×</button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'banner-dismissed'
const visible = ref(false)

onMounted(() => {
  if (localStorage.getItem(STORAGE_KEY) !== 'true') {
    visible.value = true
  }
})

function dismiss() {
  visible.value = false
  localStorage.setItem(STORAGE_KEY, 'true')
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.announcement-banner {
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(200, 106, 85, 0.15) 0%,
    rgba(200, 106, 85, 0.05) 100%
  );
  border-bottom: 1px solid rgba(200, 106, 85, 0.4);
  overflow: hidden;
  max-height: 60px;
  opacity: 1;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease;
}

.banner-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.5rem;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex: 1;
  justify-content: center;
  font-size: 0.9rem;
  color: $clr-light-a0;
  padding-right: 2rem; // offset for close button
}

.banner-text {
  font-weight: 500;
}

.banner-link {
  color: #c86a55;
  text-decoration: none;
  font-size: inherit;
  font-weight: 600;
  transition: text-decoration 0.15s ease;

  &:hover {
    text-decoration: underline;
  }
}

.pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #c86a55;
  flex-shrink: 0;
  animation: dot-pulse 1.5s ease-in-out infinite;
}

@keyframes dot-pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: $clr-surface-a50;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  transition: color 0.2s ease, background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: $clr-light-a0;
    background: rgba(255, 255, 255, 0.08);
  }
}

/* Transition for mount/unmount via <Transition name="banner"> */
.banner-enter-active {
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.35s ease;
}

.banner-leave-active {
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease;
}

.banner-enter-from,
.banner-leave-to {
  max-height: 0;
  opacity: 0;
}

.banner-enter-to,
.banner-leave-from {
  max-height: 60px;
  opacity: 1;
}

/* Responsive */
@media (max-width: 600px) {
  .banner-content {
    font-size: 0.78rem;
    gap: 0.45rem;
    padding-right: 1.8rem;
  }

  .banner-inner {
    padding: 0.6rem 1rem;
  }

  .close-btn {
    right: 0.75rem;
  }
}
</style>
