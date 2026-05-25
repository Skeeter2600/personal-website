<template>
  <div
    class="education-card"
    v-motion-slide-visible-once-bottom
    :initial="{ opacity: 0, y: 80 }"
    :enter="{ opacity: 1, y: 0 }"
    :delay="200"
    style="opacity: 1"
    :duration="500"
  >
    <!-- Top row: logo + core info -->
    <div class="edu-top">
      <!-- Logo -->
      <div class="edu-logo-wrapper">
        <img
          :src="`/images/${imageSrc}`"
          :alt="school + ' Logo'"
          class="edu-logo"
        />
      </div>

      <!-- Main info -->
      <div class="edu-info">
        <span class="edu-label">Education</span>

        <a
          v-if="websiteUrl"
          :href="websiteUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="edu-school-link"
        >
          {{ school }}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
        <h2 v-else class="edu-school">{{ school }}</h2>

        <p class="edu-degree">{{ degree }}</p>
        <p class="edu-period">📅 {{ period }}</p>
      </div>
    </div>

    <!-- Highlights / quick facts -->
    <div v-if="highlights && highlights.length" class="edu-highlights">
      <span
        v-for="hl in highlights"
        :key="hl"
        class="highlight-chip"
      >{{ hl }}</span>
    </div>

    <!-- Divider -->
    <hr class="edu-divider" />

    <!-- Links row -->
    <div class="edu-links">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="edu-link-btn"
      >
        <span v-html="link.icon" aria-hidden="true" class="link-icon"></span>
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  school: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  period: {
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
  highlights: {
    type: Array as () => string[],
    default: () => [],
  },
  links: {
    type: Array as () => { label: string; url: string; icon: string }[],
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.education-card {
  @include glass-effect;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 24px;
  padding: 2.25rem 2.5rem;
  width: 100%;
  max-width: 860px;
  border: 2px solid rgba(200, 106, 85, 0.3);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  box-sizing: border-box;

  &:hover {
    border-color: rgba(200, 106, 85, 0.6);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.35);
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    padding: 1.75rem 1.25rem;
    gap: 1.25rem;
  }
}

/* ── Top row ── */
.edu-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 1.25rem;
  }
}

/* Logo */
.edu-logo-wrapper {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 88px;
    height: 88px;
    border-radius: 16px;
  }
}

.edu-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1rem;
  box-sizing: border-box;
}

/* Info */
.edu-info {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.edu-label {
  font-size: 0.72rem;
  font-weight: 700;
  color: $clr-primary-a30;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.edu-school-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 1.9rem;
  font-weight: 800;
  color: $clr-light-a0;
  text-decoration: none;
  line-height: 1.15;
  transition: color 0.2s ease;

  &:hover {
    color: $clr-primary-a40;
    text-decoration: none;
  }

  svg {
    opacity: 0.5;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }
}

.edu-school {
  font-size: 1.9rem;
  font-weight: 800;
  color: $clr-light-a0;
  margin: 0;
  line-height: 1.15;
}

.edu-degree {
  font-size: 1.05rem;
  color: $clr-surface-tonal-a50;
  font-weight: 500;
  margin: 0;
}

.edu-period {
  font-size: 0.82rem;
  color: $clr-surface-a50;
  margin: 0;
}

/* ── Highlights ── */
.edu-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 600px) {
    justify-content: center;
  }
}

.highlight-chip {
  font-size: 0.78rem;
  font-weight: 500;
  color: $clr-light-a0;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
}

/* ── Divider ── */
.edu-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 0;
}

/* ── Links row ── */
.edu-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 600px) {
    justify-content: center;
  }
}

.edu-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: $clr-primary-a30;
  text-decoration: none;
  background: rgba(200, 106, 85, 0.08);
  border: 1px solid rgba(200, 106, 85, 0.25);
  border-radius: 8px;
  padding: 0.4rem 0.9rem;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(200, 106, 85, 0.18);
    border-color: rgba(200, 106, 85, 0.5);
    color: $clr-primary-a50;
    text-decoration: none;
  }
}

.link-icon {
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1;
}
</style>