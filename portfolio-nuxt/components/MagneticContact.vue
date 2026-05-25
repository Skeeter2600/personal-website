<template>
  <Transition name="bubble">
    <div
      v-if="!contactVisible"
      ref="buttonRef"
      class="magnetic-button"
      @click="scrollToContact"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
      aria-label="Go to contact section"
      role="button"
      tabindex="0"
    >
      <div class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.889 5.516 5 6.992V22l4-4c.669.078 1.338.2 2 .2 5.514 0 10-3.589 10-8s-4.486-8-10-8zM7 12H5v-2h2v2zm5 0H9.999v-2H12v2zm5 0h-2v-2h2v2z"/>
        </svg>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const buttonRef = ref<HTMLElement | null>(null);
const position = ref({ x: 0, y: 0 });
const contactVisible = ref(false);

// ── Intersection observer ──────────────────────────────────────────────────
let observer: IntersectionObserver | null = null;

onMounted(() => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    observer = new IntersectionObserver(
      ([entry]) => {
        contactVisible.value = entry.isIntersecting;
      },
      // Trigger when at least 20% of the section scrolls into view
      { threshold: 0.2 },
    );
    observer.observe(contactSection);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});

// ── Magnetic movement ──────────────────────────────────────────────────────
const handleMouseMove = (e: MouseEvent) => {
  if (!buttonRef.value) return;
  const rect = buttonRef.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  position.value = {
    x: (e.clientX - centerX) * 0.4,
    y: (e.clientY - centerY) * 0.4,
  };
};

const handleMouseLeave = () => {
  position.value = { x: 0, y: 0 };
};

// ── Click → scroll ─────────────────────────────────────────────────────────
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const navHeight = document.getElementById('desktop-nav')?.offsetHeight || 80;
    const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: targetPosition - navHeight - 20, behavior: 'smooth' });
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.magnetic-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: transparent;
  border: 1px solid $clr-primary-a30;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1),
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: rgba(200, 106, 85, 0.1);
    box-shadow: 0 0 15px rgba(200, 106, 85, 0.3);
  }
}

.icon-container {
  color: $clr-primary-a30;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Fade + scale transition when contact section enters/leaves */
.bubble-enter-active,
.bubble-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.bubble-enter-from,
.bubble-leave-to {
  opacity: 0;
  transform: scale(0.6) translate(0, 0) !important;
}

.bubble-enter-to,
.bubble-leave-from {
  opacity: 1;
}
</style>
