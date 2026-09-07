<template>
  <section id="projects">
    <h1
      class="title"
      v-motion-slide-visible-once-bottom
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="100"
      style="opacity: 1"
      :duration="600"
    >
      Projects
    </h1>

    <!-- Featured project � always visible -->
    <FeaturedProjectCard
      v-bind="featuredProject"
    />

    <!-- Project grid -->
    <div class="project-container">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import FeaturedProjectCard from '~/components/FeaturedProjectCard.vue';
import ProjectCard from '~/components/ProjectCard.vue';

const featuredProject = {
  title: 'Riffhouse',
  tag: 'Professional',
  description:
    'Riffhouse is a lightweight, cross-platform music streaming client that connects to your self-hosted Jellyfin media server. No subscriptions, no tracking, no ads—just your music library, your way. Stream your personal collection anywhere, offline-first caching, integrated podcasts, and built-in Android Auto support.',
  imageSrc: 'riffhouse.svg',
  linkUrl: 'https://github.com/Skeeter2600/Riffhouse',
  linkText: 'View on GitHub',
  status: 'open-source',
  cardLinkUrl: 'https://github.com/Skeeter2600/Riffhouse',
  techStack: ['SQLite', 'Flutter', 'Dart'],
};

const projects = [
  {
    title: 'Clepa',
    tag: 'Professional',
    description:
      'Intelligent telehealth platform providing real-time vitals monitoring, medication adherence, and virtual care coordination.',
    imageSrc: 'clepa.png',
    linkUrl: 'https://clepahealth.com',
    linkText: 'Website',
    status: 'beta',
    cardLinkUrl: 'https://clepahealth.com',
    techStack: ['Vue.js', 'Firebase', 'TypeScript', 'Python', 'FastAPI', 'GCP'],
  },
  {
    title: 'Simulation of Protein Synthesis',
    tag: 'Senior Project',
    description:
      'Simulation suite redesigned for students and researchers to model and analyze protein structure and function.',
    imageSrc: 'electrophoresis.jpg',
    linkUrl: 'https://amrmualla.github.io/SEProjectWebsite/',
    linkText: 'Project Website',
    status: 'live',
    techStack: ['React', 'Python', 'FastAPI', 'Javascript'],
  },
  {
    title: 'World Construct',
    tag: 'Personal Project',
    description:
      'Interactive worldbuilding tool to organize, map, and distribute lore and campaign settings.',
    imageSrc: 'world_construct.jpg',
    linkUrl: 'https://github.com/Skeeter2600/World-Construct',
    linkText: 'Repository',
    status: 'open-source',
    techStack: ['JavaFX', 'PostgreSQL', 'Python'],
  },
  {
    title: 'Recipe Cards',
    tag: 'Professional',
    description:
      'Product prototype developed at Ecolab featuring stakeholder-validated workflows and interactive UI components.',
    imageSrc: 'RecipeCards.png',
    linkUrl:
      'https://www.figma.com/file/kpA8eZT3m52YhCRhdB1pXj/Recipe-Cards?type=design&node-id=0%3A1&mode=design&t=ZwAvFUGCapBK9Ynr-1',
    linkText: 'Figma Board',
    status: 'live',
    techStack: ['Figma'],
  },
];
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

#projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: $clr-light-a0;
  margin-bottom: 2rem;
  text-align: center;
}

/* -- Projects grid -- */
.project-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
