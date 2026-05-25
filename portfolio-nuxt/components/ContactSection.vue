<template>
  <section id="contact" class="contact-section">
    <div class="contact-inner">
      <h1 class="title">Get In Touch</h1>
      <p class="subtitle">
        Whether you're looking to collaborate, hire, or just chat — my inbox is always open.
      </p>

      <div
        class="cards-row"
        v-motion-slide-visible-once-bottom
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        style="opacity: 1"
        :duration="500"
      >
        <a
          v-for="card in contactCards"
          :key="card.label"
          :href="card.href"
          :target="card.target ?? undefined"
          :rel="card.target === '_blank' ? 'noopener noreferrer' : undefined"
          class="contact-card"
        >
          <img :src="card.icon" :alt="card.label + ' icon'" class="card-icon" />
          <span class="card-label">{{ card.label }}</span>
          <span class="card-link">{{ card.linkText }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const contactCards = [
  {
    icon: '/images/email.svg',
    label: 'Email',
    linkText: 'andersbe2600@gmail.com',
    href: 'mailto:andersbe2600@gmail.com',
    target: null,
  },
  {
    icon: '/images/github.svg',
    label: 'GitHub',
    linkText: '@Skeeter2600',
    href: 'https://github.com/Skeeter2600',
    target: '_blank',
  },
  {
    icon: '/images/linkedin.svg',
    label: 'LinkedIn',
    linkText: 'beck-anderson-se',
    href: 'https://www.linkedin.com/in/beck-anderson-se/',
    target: '_blank',
  },
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.contact-section {
  width: 100%;
  padding: 5rem 2rem;
  box-sizing: border-box;
}

.contact-inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

/* ── Heading ── */
.title {
  font-size: 2.8rem;
  font-weight: 700;
  color: $clr-light-a0;
  margin: 0;
  letter-spacing: -0.01em;
}

.subtitle {
  font-size: 1rem;
  color: $clr-surface-tonal-a50;
  line-height: 1.7;
  max-width: 520px;
  margin: 0;
}

/* ── Cards Row ── */
.cards-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  width: 100%;
  margin-top: 0.5rem;
}

/* ── Contact Card ── */
.contact-card {
  @include glass-effect;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  min-width: 200px;
  flex: 1 1 200px;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(200, 106, 85, 0.2);
    border-color: rgba(200, 106, 85, 0.4);
  }

  .card-icon {
    height: 3rem;
    width: auto;
    display: block;
  }

  .card-label {
    font-size: 0.85rem;
    color: $clr-surface-a50;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: 500;
  }

  .card-link {
    font-size: 0.88rem;
    color: $clr-primary-a30;
    font-weight: 600;
    word-break: break-all;
    text-align: center;
  }
}


/* ── Mobile ── */
@media (max-width: 700px) {
  .contact-section {
    padding: 3.5rem 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .cards-row {
    gap: 1rem;
  }

  .contact-card {
    min-width: 140px;
    flex: 1 1 140px;
    max-width: none;
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 380px) {
  .contact-card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>