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

    <!-- Featured project — always visible -->
    <FeaturedProjectCard
      title="Clepa"
      tag="Professional"
      description="Clepa is an intelligent Telehealth ecosystem designed to bridge the gap between at-home recovery and clinical care. We provide a centralized platform for real-time vitals monitoring, medication adherence, and virtual care coordination—empowering healthcare providers to deliver proactive, continuous support that improves patient outcomes and reduces hospital readmissions."
      imageSrc="clepa.png"
      linkUrl="https://clepahealth.com/waitlist"
      linkText="Sign Up for Beta"
      status="beta"
      cardLinkUrl="https://clepahealth.com"
    />

    <!-- Project grid -->
    <div class="project-container">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        v-bind="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import FeaturedProjectCard from '~/components/FeaturedProjectCard.vue';
import ProjectCard from '~/components/ProjectCard.vue';

const projects = [
  {
    title: 'Simulation of Protein Synthesis',
    tag: 'Senior Project',
    description:
      'My senior project for my time at Rochester Institute of Technology. This has involved working on a team to redesign an existing product used by college students and professionals to simulate and analyze protein structure and function.',
    imageSrc: 'electrophoresis.jpg',
    linkUrl: 'https://amrmualla.github.io/SEProjectWebsite/',
    linkText: 'Project Website',
    status: 'live',
  },
  {
    title: 'World Construct',
    tag: 'Personal Project',
    description:
      'This application is intended to be used as a source to organize, sort and distribute information related to any setting, whether it be a D&D campaign or any other work.',
    imageSrc: 'world_construct.jpg',
    linkUrl: 'https://github.com/Skeeter2600/World-Construct',
    linkText: 'Repository',
    status: 'open-source',
  },
  {
    title: 'Recipe Cards',
    tag: 'Professional',
    description:
      'Individual assignment done during my time at Ecolab. Developed a prototype system for a potential future product. Worked with company stakeholders to ensure it was up to their standards and incorporated feedback from meetings.',
    imageSrc: 'RecipeCards.png',
    linkUrl:
      'https://www.figma.com/file/kpA8eZT3m52YhCRhdB1pXj/Recipe-Cards?type=design&node-id=0%3A1&mode=design&t=ZwAvFUGCapBK9Ynr-1',
    linkText: 'Figma Board',
    status: 'live',
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


/* ── Projects grid ── */
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
