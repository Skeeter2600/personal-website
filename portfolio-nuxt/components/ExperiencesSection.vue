<template>
  <section id="experience" ref="sectionRef">
    <h1
      class="title"
      v-motion-slide-visible-once-bottom
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="100"
      style="opacity: 1"
      :duration="600"
    >
      Experience
    </h1>

    <div class="timeline-container">
      <ExperienceCard
        v-for="(exp, index) in experiences"
        :key="index"
        v-bind="exp"
        :side="index % 2 === 0 ? 'left' : 'right'"
        :index="index"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ExperienceCard from '~/components/ExperienceCard.vue';

const sectionRef = ref(null);

const experiences = [
  {
    company: 'Evo Security',
    period: 'July 2024 - Present',
    positions: [
      { title: 'Software Engineer I', period: 'Sept 2025 - Present' },
      { title: 'Associate Software Engineer', period: 'July 2024 - Sept 2025' },
    ],
    description:
      "● Owned and executed the end-to-end product delivery of an overhauled customer onboarding flow using Ruby on Rails and Vue, directly lowering friction and accelerating initial user activation metrics.\n● Designed and built custom internal GitHub packages for automated metadata processing and AI-powered file analysis reports, boosting platform file-safety visibility.\n● Maintained existing legacy React infrastructure while leading the complete UX modernization of the primary client portal using Nuxt and TypeScript, acting heavily on direct user feedback.\n● Collaborated with an international team via daily meetings, using Jira to properly assign and manage project tasks and goals, completing PR and QA reviews, and giving overall guidance to others",
    imageSrc: 'evo_security_logo.jpeg',
    websiteUrl: 'https://www.evosecurity.com/',
  },
  {
    company: 'Ecolab',
    position: 'Software Engineer Co-op',
    period: 'Jan 2023 - May 2023',
    description:
      "● Collaborated with a 25-person international team to enhance functionality and resolve system bugs for the Prep N Print application, improving user satisfaction by 20%\n● Demonstrated expertise in UI redesign using C# and Xamarin, ensuring compliance with requirements and elevating the user experience\n● Pioneered the design of the user interface for a new company application using Figma, actively engaging stakeholders to gather inputs and incorporate 90% of their feedback through biweekly meetings",
    imageSrc: 'Ecolab.jpg',
    websiteUrl: 'https://www.ecolab.com/',
  },
  {
    company: 'Alpine Software',
    position: 'Software Developer Co-op',
    period: 'May 2022 - Dec 2022',
    description:
      "● Spearheaded the programming, maintenance, and support of existing applications using Delphi and SQL, ensuring seamless operations\n● Mentored a team of 4 interns, resulting in a 25% increase in their productivity and the successful completion of 15 additional projects weekly\n● Collaborated closely with clients, expertly translating project requirements into comprehensive design specifications that aligned with client expectations, ensuring successful project delivery",
    imageSrc: 'alpinesoftware.jpg',
    websiteUrl: 'https://alpinesoftware.com/',
  },
];
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

#experience {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: $clr-light-a0;
  margin-bottom: 3rem;
  text-align: center;
}

.timeline-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      #c86a55 10%,
      #c86a55 90%,
      transparent
    );
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    &::before {
      left: 1.5rem;
    }
  }
}
</style>