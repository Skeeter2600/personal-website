<template>
  <section id="education">
    <h1
      class="title"
      v-motion-slide-visible-once-bottom
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="200"
      style="opacity: 1"
      :duration="500"
    >
      Education
    </h1>
    <EducationCard
      school="Rochester Institute of Technology"
      degree="B.S. Software Engineering, Minor in Computer Engineering"
      period="August 2019 – May 2024"
      imageSrc="RIT.png"
      websiteUrl="https://www.rit.edu"
      :highlights="highlights"
      :links="links"
    />
  </section>
</template>

<script setup lang="ts">
import EducationCard from '~/components/EducationCard.vue';

const highlights = [
  '💻 Software Engineering',
  '📍 Rochester, NY',
  '🏫 Golisano College of Computing and Information Sciences',
];

const links = [
  {
    label: 'RIT Website',
    url: 'https://www.rit.edu',
    icon: '🌐',
  },
  {
    label: 'SE Program',
    url: 'https://www.rit.edu/study/software-engineering-bs',
    icon: '📚',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/ritcomputing/',
    icon: '💼',
  },
];
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

#education {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: $clr-light-a0;
  margin-bottom: 2rem;
  text-align: center;
}
</style>