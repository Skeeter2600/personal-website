<template>
    <section id="projects">
      <h1 
        class="title" 
        v-motion-slide-visible-once-bottom
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        style="opacity: 1"
        :duration="500"
      >
        Projects
      </h1>
      <div class="project-container">
        <ProjectCard
          title="Simulation of Protein Synthesis"
          tag="Senior Project"
          :description="proteinDescription"
          imageSrc="electrophoresis.jpg"
          linkUrl="https://amrmualla.github.io/SEProjectWebsite/"
          linkText="Project Website"
        />
  
        <ProjectCard
          title="World Construct"
          tag="Personal Project"
          :description="worldConstructDescription"
          imageSrc="world_construct.jpg"
          linkUrl="https://github.com/Skeeter2600/World-Construct"
          linkText="Repository"
        />
  
        <ProjectCard
          title="Recipe Cards"
          tag="Professional"
          :description="recipeCardsDescription"
          imageSrc="RecipeCards.png"
          linkUrl="https://www.figma.com/file/kpA8eZT3m52YhCRhdB1pXj/Recipe-Cards?type=design&node-id=0%3A1&mode=design&t=ZwAvFUGCapBK9Ynr-1"
          linkText="Figma Board"
        />
  
        <ProjectCard
          title="Reddit Sentiment Analysis"
          tag="Education"
          :description="redditDescription"
          imageSrc="reddit.png"
        />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
    const proteinDescription = "My senior project for my time at Rochester Institute of Technology. This has involved working on a team to redesign an existing product used by college students and professionals to simulate and analyze protein structure and function.";
  
    const worldConstructDescription = "This application is intended to be used as a source to organize, sort and distribute information related to any setting, whether it be a D&D campaign or any other work.";
  
    const recipeCardsDescription = "Individual assignment done during my time at Ecolab. Developed a prototype system for a potential future product. Worked with company stakeholders to ensure it was up to their standards and incorporated feedback from meetings.";
  
    const redditDescription = "Built from the ground up an application to process the user sentiment of posts on Reddit. Worked together in a team of 5 individuals using Git and AWS Technologies, including DynamoDB, AWS Comprehend, API Gateway, and Terraform.";
  </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/main.scss';
  
    #projects {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
  
    .project-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3rem;
    }
  </style>