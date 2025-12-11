<template>
  <div 
    ref="buttonRef"
    class="magnetic-button"
    @click="scrollToContact"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
  >
    <div class="icon-container">
        <!-- SVG Icon mimicking bx-message-rounded-dots -->
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.889 5.516 5 6.992V22l4-4c.669.078 1.338.2 2 .2 5.514 0 10-3.589 10-8s-4.486-8-10-8zM7 12H5v-2h2v2zm5 0H9.999v-2H12v2zm5 0h-2v-2h2v2z"></path>
        </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const buttonRef = ref<HTMLElement | null>(null);
const position = ref({ x: 0, y: 0 });

const handleMouseMove = (e: MouseEvent) => {
  if (!buttonRef.value) return;
  
  const rect = buttonRef.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const distanceX = e.clientX - centerX;
  const distanceY = e.clientY - centerY;
  
  // Magnetic strength
  position.value = {
    x: distanceX * 0.4,
    y: distanceY * 0.4
  };
};

const handleMouseLeave = () => {
  position.value = { x: 0, y: 0 };
};

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const navHeight = document.getElementById('desktop-nav')?.offsetHeight || 80;
    const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
          
    window.scrollTo({
      top: targetPosition - navHeight - 20,
      behavior: 'smooth'
    });
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
  /* @include glass-effect; Removed for minimal style */
  background: transparent;
  border: 1px solid $clr-primary-a30; /* Minimal orange border */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    background: rgba(200, 106, 85, 0.1); /* Subtle orange tint on hover */
    box-shadow: 0 0 15px rgba(200, 106, 85, 0.3);
  }
}

.icon-container {
  color: $clr-primary-a30; /* Orange Icon */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
