<template>
  <div
    class="featured-card"
    :class="{ 'clickable-card': cardLinkUrl }"
    @click="onCardClick"
    v-motion-slide-visible-once-bottom
    :initial="{ opacity: 0, y: 80 }"
    :enter="{ opacity: 1, y: 0 }"
    :delay="200"
    style="opacity: 1"
    :duration="600"
  >
    <!-- Image side -->
    <div class="featured-image-wrapper">
      <img
        :src="`/images/${imageSrc}`"
        :alt="title + ' Image'"
        class="featured-image"
      />

      <!-- Status badge -->
      <span
        v-if="status"
        class="status-badge"
        :class="`status-${status}`"
      >
        {{ status }}
      </span>

      <!-- Subtle gradient overlay at bottom of image -->
      <div class="image-gradient" />
    </div>

    <!-- Content side -->
    <div class="featured-content">
      <h2 class="featured-title">{{ title }}</h2>

      <!-- Tech Stack with logos/icons -->
      <div v-if="techStack && techStack.length" class="tech-stack-row">
        <span
          v-for="tech in techStack"
          :key="getTechName(tech)"
          class="tech-chip"
          :title="getTechName(tech)"
        >
          <TechIcon :name="getTechName(tech)" />
          <span class="tech-name">{{ getTechName(tech) }}</span>
        </span>
      </div>

      <p class="featured-description">{{ description }}</p>

      <a
        v-if="linkUrl"
        :href="linkUrl"
        target="_blank"
        rel="noreferrer"
        class="nav-style-link featured-link"
      >
        <span>{{ linkText || 'View Project' }}</span>
        <i v-if="linkUrl.includes('github')" class="bx bxl-github link-icon"></i>
        <i v-else-if="linkUrl.includes('figma')" class="bx bxl-figma link-icon"></i>
        <i v-else class="bx bx-link-external link-icon"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import TechIcon from '~/components/TechIcon.vue';

interface TechItem {
  name: string;
  icon?: string;
}

const props = defineProps({
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
  cardLinkUrl: {
    type: String,
    default: '',
  },
  techStack: {
    type: Array as () => Array<TechItem | string>,
    default: () => [],
  },
});

const getTechName = (tech: TechItem | string): string => {
  return typeof tech === 'object' && tech.name ? tech.name : (tech as string);
};

const onCardClick = (e: MouseEvent) => {
  // Prevent navigating twice if user clicks the button link directly
  if ((e.target as HTMLElement).closest('.featured-link')) {
    return;
  }
  if (props.cardLinkUrl) {
    window.open(props.cardLinkUrl, '_blank', 'noopener,noreferrer');
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

/* -- Featured card shell -- */
.featured-card {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  background-color: $clr-surface-a10;
  border: 2px solid rgba(200, 106, 85, 0.4);
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 3rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &.clickable-card {
    cursor: pointer;
  }

  &:hover {
    border-color: rgba(200, 106, 85, 0.75);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

/* -- Image side -- */
.featured-image-wrapper {
  position: relative;
  flex: 0 0 45%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    max-height: 240px;
  }
}

.featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.featured-card:hover .featured-image {
  transform: scale(1.04);
}

.image-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    transparent 60%,
    $clr-surface-a10 100%
  );
  pointer-events: none;

  @media (max-width: 768px) {
    background: linear-gradient(
      to bottom,
      transparent 60%,
      $clr-surface-a10 100%
    );
  }
}

/* -- Status badge -- */
.status-badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  border-radius: 999px;
  padding: 0.25rem 0.65rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 2;

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

/* -- Content side -- */
.featured-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 2rem;
  gap: 0.75rem;

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem;
  }
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.featured-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: $clr-primary-a30;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tag-pill {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: $clr-surface-a50;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 0.15rem 0.65rem;
}

.featured-title {
  font-size: 2rem;
  font-weight: 800;
  color: $clr-light-a0;
  line-height: 1.2;
}

/* -- Tech Stack with logos/icons -- */
.tech-stack-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.tech-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #e2e2e2;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  padding: 0.22rem 0.55rem;
  transition: all 0.2s ease;

  :deep(.tech-icon-container) {
    color: $clr-primary-a30;
  }

  &:hover {
    background: rgba(200, 106, 85, 0.15);
    border-color: rgba(200, 106, 85, 0.4);
    color: $clr-light-a0;

    :deep(.tech-icon-container) {
      color: $clr-primary-a40;
    }
  }
}

.featured-description {
  font-size: 0.95rem;
  color: #d1d1d1;
  line-height: 1.7;
  font-weight: 300;
}

.featured-link {
  align-self: flex-start;
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  .link-icon {
    font-size: 1.05rem;
  }
}
</style>
