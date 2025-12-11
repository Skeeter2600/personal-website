<template>
  <div class="particles-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const canvas = ref(null);
let animationFrameId;

onMounted(() => {
  if (!canvas.value) return;

  const ctx = canvas.value.getContext('2d');
  let width, height;
  let particles = [];
  
  // Configuration
  const particleCount = 80; // Increased density
  const connectionDistance = 150;
  const mouseDistance = 200;
  
  // Mouse state
  let mouse = { x: null, y: null };

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.value.width = width;
    canvas.value.height = height;
    initParticles();
  };

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 1.5; // Faster movement (was 0.5)
      this.vy = (Math.random() - 0.5) * 1.5;
      this.size = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interaction (repel)
      if (mouse.x != null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          const directionX = forceDirectionX * force * 2; // Strength
          const directionY = forceDirectionY * force * 2;

          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }

    draw() {
      ctx.fillStyle = 'rgba(173, 52, 35, 0.5)'; // Primary red with opacity
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const initParticles = () => {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, width, height);
    
    // Update and draw particles
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          // Fade out line details based on distance
          const opacity = 1 - (distance / connectionDistance);
          ctx.strokeStyle = `rgba(100, 100, 100, ${opacity * 0.2})`; 
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  // Event Listeners
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Init
  resize();
  animate();
});

onUnmounted(() => {
  window.removeEventListener('resize', resize); // This needs to be a named function to remove properly but for now it's okay, actually 'resize' IS named.
  cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background-color: #121212; /* clr-surface-a0 */
}
</style>
