<template>
  <div
    class="timeline-card-wrapper"
    :class="side === 'left' ? 'side-left' : 'side-right'"
  >
    <!-- Timeline dot -->
    <span class="timeline-dot" />
    <!-- Date label next to dot -->
    <span class="timeline-date">{{ period }}</span>

    <!-- Card body -->
    <div
      class="experience-card-body"
      v-motion-slide-visible-once-bottom
      :initial="{ opacity: 0, y: 60 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="index * 100 + 200"
      style="opacity: 1"
      :duration="500"
    >
      <!-- Top row: logo + company name -->
      <div class="card-header">
        <a
          v-if="websiteUrl"
          :href="websiteUrl"
          target="_blank"
          rel="noreferrer"
          class="logo-link"
        >
          <img
            :src="`/images/${imageSrc}`"
            :alt="company + ' Logo'"
            class="company-logo clickable-logo"
          />
        </a>
        <img
          v-else
          :src="`/images/${imageSrc}`"
          :alt="company + ' Logo'"
          class="company-logo"
        />
        <h2 class="company-name">
          <a
            v-if="websiteUrl"
            :href="websiteUrl"
            target="_blank"
            rel="noreferrer"
          >
            {{ company }}
          </a>
          <template v-else>{{ company }}</template>
        </h2>
      </div>

      <!-- Positions (Support multiple roles inside one company) -->
      <div v-if="positions && positions.length" class="positions-list">
        <div 
          v-for="(pos, posIdx) in positions" 
          :key="posIdx" 
          class="position-item"
        >
          <p class="position-title">{{ pos.title }}</p>
          <p class="period">{{ pos.period }}</p>
        </div>
      </div>
      <div v-else>
        <!-- Position -->
        <p class="position-title">{{ position }}</p>
        <!-- Period -->
        <p class="period">{{ period }}</p>
      </div>

      <!-- Divider -->
      <hr class="card-divider" />

      <!-- Description -->
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    default: '',
  },
  period: {
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
  websiteUrl: {
    type: String,
    default: '',
  },
  side: {
    type: String,
    default: 'left',
  },
  index: {
    type: Number,
    default: 0,
  },
  positions: {
    type: Array as () => Array<{ title: string; period: string }>,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.timeline-card-wrapper {
  position: relative;
  margin-bottom: 3rem;
  width: calc(50% - 2.4rem);

  &.side-left {
    margin-right: calc(50% + 1.2rem);
  }

  &.side-right {
    margin-left: calc(50% + 1.2rem);
  }

  @media (max-width: 768px) {
    width: calc(100% - 3.5rem);
    margin-left: 3.5rem !important;
    margin-right: 0 !important;
  }
}

/* Timeline dot */
.timeline-dot {
  position: absolute;
  top: 1.5rem;
  left: calc(100% + 1.2rem - 7px);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #c86a55;
  border: 3px solid #121212;
  box-shadow: 0 0 0 3px rgba(200, 106, 85, 0.3);
  z-index: 1;
  transition: box-shadow 0.3s ease;

  .side-right & {
    left: calc(-1.2rem - 7px);
  }

  @media (max-width: 768px) {
    left: calc(-2rem - 7px) !important;
  }
}

.timeline-card-wrapper:hover .timeline-dot {
  box-shadow: 0 0 0 6px rgba(200, 106, 85, 0.25);
}

/* Date label beside dot */
.timeline-date {
  position: absolute;
  top: 1.3rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: $clr-primary-a30;
  white-space: nowrap;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: rgba(200, 106, 85, 0.1);
  border: 1px solid rgba(200, 106, 85, 0.25);
  border-radius: 999px;
  padding: 0.2rem 0.6rem;

  // Left card: date is to the right of the dot, past the center line
  .side-left & {
    left: calc(100% + 1.2rem + 14px + 0.5rem);
  }

  // Right card: date is to the left of the dot
  .side-right & {
    right: calc(100% + 1.2rem + 14px + 0.5rem);
  }

  // Hide on mobile — too cramped
  @media (max-width: 768px) {
    display: none;
  }
}

/* Card body */
.experience-card-body {
  background-color: $clr-surface-a10;
  border: 2px solid rgba(200, 106, 85, 0.3);
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(200, 106, 85, 0.6);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
}

/* Card header */
.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.logo-link {
  display: inline-flex;
  text-decoration: none;
}

.company-logo {
  height: 48px;
  width: auto;
  object-fit: contain;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px;
  flex-shrink: 0;
  border: 1px solid transparent;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &.clickable-logo:hover {
    border-color: rgba(200, 106, 85, 0.5);
    transform: scale(1.05);
  }
}

.company-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: $clr-light-a0;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: $clr-primary-a30;
    }
  }
}

/* Positions list */
.positions-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.position-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  .period {
    margin-bottom: 0;
  }
}

/* Position */
.position-title {
  color: $clr-primary-a30;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.1rem;
}

/* Period */
.period {
  font-size: 0.85rem;
  color: $clr-surface-a50;
  margin-bottom: 1rem;
}

/* Divider */
.card-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 0.75rem 0 1rem;
}

/* Description */
.description {
  white-space: pre-line;
  color: #d1d1d1;
  font-size: 0.95rem;
  line-height: 1.7;
  font-weight: 300;
}
</style>