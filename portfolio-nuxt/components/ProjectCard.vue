<template>
  <div
    class="project-card-body"
    v-motion-slide-visible-once-bottom
    :initial="{ opacity: 0, y: 80 }"
    :enter="{ opacity: 1, y: 0 }"
    :delay="200"
    style="opacity: 1"
    :duration="500"
  >
    <!-- Image area with hover overlay -->
    <div class="image-wrapper">
      <img
        :src="`/images/${imageSrc}`"
        :alt="title + ' Image'"
        class="project-card-image"
      />

      <!-- Status badge -->
      <span
        v-if="status"
        class="status-badge"
        :class="`status-${status}`"
      >
        {{ status }}
      </span>

      <!-- Hover overlay -->
      <div class="hover-overlay">
        <p class="overlay-description">{{ description }}</p>
        <a
          v-if="linkUrl"
          :href="linkUrl"
          target="_blank"
          rel="noreferrer"
          class="nav-style-link overlay-link"
        >
          {{ linkText || 'View Project' }}
        </a>
      </div>
    </div>

    <!-- Bottom always-visible content -->
    <div class="project-card-bottom">
      <p class="project-card-tag">{{ tag }}</p>
      <h2 class="project-card-title">{{ title }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  linkUrl: {
    type: String,
    default: '',
  },
  linkText: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

/* ── Card shell ── */
.project-card-body {
  background-color: $clr-surface-a10;
  border: 2px solid rgba(200, 106, 85, 0.3);
  border-radius: 20px;
  overflow: hidden;
  max-width: 380px;
  width: 100%;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    border-color: rgba(200, 106, 85, 0.6);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
}

/* ── Image wrapper ── */
.image-wrapper {
  position: relative;
  overflow: hidden;
}

.project-card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.project-card-body:hover .project-card-image {
  transform: scale(1.05);
}

/* ── Status badge ── */
.status-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  border-radius: 999px;
  padding: 0.25rem 0.65rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 2;
  pointer-events: none;

  &.status-beta {
    background: rgba(200, 106, 85, 0.9);
    color: white;
    animation: pulse-ring 1.5s ease-out infinite;
  }

  &.status-live {
    background: rgba(34, 197, 94, 0.9);
    color: white;
  }

  &.status-open-source {
    background: rgba(99, 102, 241, 0.9);
    color: white;
  }
}

@keyframes pulse-ring {
  0% {
    box-shadow: 0 0 0 0 rgba(200, 106, 85, 0.6);
  }
  100% {
    box-shadow: 0 0 0 8px transparent;
  }
}

/* ── Hover overlay ── */
.hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(18, 18, 18, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.project-card-body:hover .hover-overlay {
  opacity: 1;
  transform: translateY(0);
}

.overlay-description {
  color: white;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.overlay-link {
  font-size: 0.85rem;
  padding: 0.45rem 1.1rem;
  white-space: nowrap;
}

/* ── Bottom section ── */
.project-card-bottom {
  padding: 1rem 1.25rem 1.25rem;
  background-color: $clr-surface-a10;
}

.project-card-tag {
  font-size: 0.8rem;
  font-weight: 500;
  color: $clr-primary-a30;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.35rem;
}

.project-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: $clr-light-a0;
}
</style>