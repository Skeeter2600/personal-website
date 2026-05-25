<template>
  <section id="about" class="about-section">
    <div
      class="bento-grid"
      v-motion-slide-visible-once-bottom
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="200"
      style="opacity: 1"
      :duration="500"
    >
      <!-- Box A: Profile Photo -->
      <div class="bento-box box-a">
        <img
          src="/images/profile_pic.jpg"
          alt="Beck Anderson profile photo"
          class="profile-photo"
        />
      </div>

      <!-- Box B: Name + Bio -->
      <div class="bento-box box-b">
        <span class="hello-label">Hello, I'm</span>
        <h1 class="name-heading">Beck Anderson</h1>
        <p class="bio-text">
          Software Engineer at Evo Security, building secure digital experiences.
          RIT '24 graduate specializing in Vue, Nuxt, React, and full-stack development.
        </p>
      </div>

      <!-- Box C: Current Status -->
      <div class="bento-box box-c">
        <span class="section-label">Currently</span>

        <div class="company-block">
          <div class="company-name-row">
            <span class="shield-icon" aria-hidden="true">🛡️</span>
            <span class="company-name-text">Evo Security</span>
          </div>
          <p class="role-title">Software Engineer I</p>
          <div class="company-meta">
            <span class="meta-pill">📍 Remote</span>
            <span class="meta-pill">💼 Full-time</span>
          </div>
        </div>

        <hr class="box-divider" />

        <p class="company-blurb">
          Building secure, scalable authentication and identity solutions for MSPs and IT teams.
        </p>

        <a
          href="https://www.evosecurity.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="company-link"
        >
          Visit Evo Security →
        </a>
      </div>

      <!-- Box D: Tech Stack -->
      <div class="bento-box box-d">
        <span class="section-label" style="margin-bottom: 0.75rem; display: block;">Tech Stack</span>
        <div class="tech-grid">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="tech-pill"
          >{{ tech }}</span>
        </div>
      </div>

      <!-- Box E: Resume -->
      <div class="bento-box box-e">
        <span class="section-label" style="margin-bottom: 0.5rem; display: block;">Resume</span>
        <p class="resume-desc">Want the full picture? Download my resume for a detailed look at my experience, skills, and education.</p>
        <a
          href="/files/Beck_Anderson_Resume.pdf"
          download
          class="resume-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const techStack = [
  'Vue',
  'Nuxt',
  'React',
  'Python',
  'Ruby on Rails',
  'SQL',
  'TypeScript',
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.about-section {
  width: 100%;
  padding: 4rem 2rem;
  box-sizing: border-box;
}

/* ── Bento Grid ── */
.bento-grid {
  display: grid;
  grid-template-columns: 320px 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ── Base Bento Box ── */
.bento-box {
  @include glass-effect;
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .section-label {
    font-size: 0.75rem;
    color: $clr-surface-a50;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
  }
}

/* ── Box A: Profile Photo ── */
.box-a {
  grid-column: 1;
  grid-row: 1 / 3;
  padding: 0;
  border: 2px solid rgba(200, 106, 85, 0.3);
  overflow: hidden;

  .profile-photo {
    width: 100%;
    height: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border-radius: 16px;
    display: block;
  }
}

/* ── Box B: Name + Bio ── */
.box-b {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .hello-label {
    font-size: 0.9rem;
    color: $clr-primary-a30;
    font-weight: 500;
    letter-spacing: 0.03em;
  }

  .name-heading {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.1;
    color: $clr-light-a0;
  }

  .bio-text {
    color: $clr-surface-tonal-a50;
    font-size: 0.95rem;
    line-height: 1.7;
    margin: 0.25rem 0 0;
  }
}

/* ── Box C: Current Status ── */
.box-c {
  grid-column: 3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  .company-block {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 100%;
  }

  .company-name-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .shield-icon {
    font-size: 1.4rem;
    line-height: 1;
  }

  .company-name-text {
    font-size: 1.3rem;
    font-weight: 800;
    color: $clr-light-a0;
    letter-spacing: -0.01em;
  }

  .role-title {
    font-size: 0.88rem;
    font-weight: 600;
    color: $clr-primary-a30;
    margin: 0;
    padding-left: 1.9rem; // aligned under company name
  }

  .company-meta {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    padding-left: 1.9rem;
    margin-top: 0.2rem;
  }

  .meta-pill {
    font-size: 0.72rem;
    font-weight: 500;
    color: $clr-surface-tonal-a50;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 999px;
    padding: 0.2rem 0.6rem;
  }

  .box-divider {
    width: 100%;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    margin: 0;
  }

  .company-blurb {
    font-size: 0.85rem;
    color: $clr-surface-tonal-a50;
    line-height: 1.65;
    margin: 0;
  }

  .company-link {
    font-size: 0.8rem;
    font-weight: 600;
    color: $clr-primary-a30;
    text-decoration: none;
    transition: color 0.2s ease;
    margin-top: auto;

    &:hover {
      color: $clr-primary-a50;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
}

.status-pill {
  border-radius: 999px;
  padding: 0.5rem 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

/* ── Box D: Tech Stack ── */
.box-d {
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;

  .tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-pill {
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 999px;
    padding: 0.3rem 0.85rem;
    font-size: 0.8rem;
    color: $clr-light-a0;
    font-weight: 500;
    cursor: default;
    transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;

    &:hover {
      background: rgba(200, 106, 85, 0.12);
      border-color: rgba(200, 106, 85, 0.5);
      color: $clr-primary-a40;
    }
  }
}

/* ── Box E: Resume ── */
.box-e {
  grid-column: 3;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  .resume-desc {
    font-size: 0.85rem;
    color: $clr-surface-tonal-a50;
    line-height: 1.65;
    margin: 0;
  }

  .resume-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.75rem 1.25rem;
    background: $clr-primary-a30;
    color: $clr-light-a0;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 10px;
    border: 2px solid $clr-primary-a30;
    box-sizing: border-box;
    transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
    margin-top: auto;

    &:hover {
      background: $clr-primary-a20;
      border-color: $clr-primary-a20;
      box-shadow: 0 4px 20px rgba(200, 106, 85, 0.35);
      transform: translateY(-1px);
      text-decoration: none;
      color: $clr-light-a0;
    }

    svg {
      flex-shrink: 0;
    }
  }
}

/* ── Shimmer animation ── */
@keyframes shimmer-text {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

/* ── Mobile: single column stack ── */
@media (max-width: 767px) {
  .about-section {
    padding: 3rem 1rem;
  }

  .bento-grid {
    grid-template-columns: 1fr;
    grid-template-rows: unset;
  }

  .box-a {
    grid-column: 1;
    grid-row: unset;

    .profile-photo {
      aspect-ratio: 4 / 3;
    }
  }

  .box-b {
    grid-column: 1;
    grid-row: unset;

    .name-heading {
      font-size: 2rem;
    }
  }

  .box-c,
  .box-d,
  .box-e {
    grid-column: 1;
    grid-row: unset;
  }

  .box-e .resume-btn {
    width: 100%;
  }
}
</style>