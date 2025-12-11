<template>
  <section id="projects" ref="sectionRef">
    <h1 class="title">Projects</h1>
    <div class="project-container">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
        class="stagger-enter"
        :class="`stagger-delay-${index + 1}`"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const sectionRef = ref(null);

const projects = [
  {
    title: "Clepa",
    tag: "Professional",
    description: "Clepa is an intelligent Telehealth ecosystem designed to bridge the gap between at-home recovery and clinical care. We provide a centralized platform for real-time vitals monitoring, medication adherence, and virtual care coordination—empowering healthcare providers to deliver proactive, continuous support that improves patient outcomes and reduces hospital readmissions.",
    imageSrc: "clepa.png",
    linkUrl: "https://clepahealth.com",
    linkText: "Clepa Health"
  },
  {
    title: "Simulation of Protein Synthesis",
    tag: "Senior Project",
    description: "My senior project for my time at Rochester Institute of Technology. This has involved working on a team to redesign an existing product used by college students and professionals to simulate and analyze protein structure and function.",
    imageSrc: "electrophoresis.jpg",
    linkUrl: "https://amrmualla.github.io/SEProjectWebsite/",
    linkText: "Project Website"
  },
  {
    title: "World Construct",
    tag: "Personal Project",
    description: "This application is intended to be used as a source to organize, sort and distribute information related to any setting, whether it be a D&D campaign or any other work.",
    imageSrc: "world_construct.jpg",
    linkUrl: "https://github.com/Skeeter2600/World-Construct",
    linkText: "Repository"
  },
  {
    title: "Recipe Cards",
    tag: "Professional",
    description: "Individual assignment done during my time at Ecolab. Developed a prototype system for a potential future product. Worked with company stakeholders to ensure it was up to their standards and incorporated feedback from meetings.",
    imageSrc: "RecipeCards.png",
    linkUrl: "https://www.figma.com/file/kpA8eZT3m52YhCRhdB1pXj/Recipe-Cards?type=design&node-id=0%3A1&mode=design&t=ZwAvFUGCapBK9Ynr-1",
    linkText: "Figma Board"
  }
];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/main.scss';

  #projects {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
  }

  .title {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  /* Trigger animation */
  #projects.is-visible .title {
    opacity: 1;
    transform: translateY(0);
  }

  .project-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      gap: 3rem;
  }
  
  #projects.is-visible :deep(.stagger-enter) {
    animation-play-state: running;
  }
</style>
