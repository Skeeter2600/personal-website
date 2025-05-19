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
          school="RIT"
          degree="B.S. Software Engineering"
          period="August 2019 - May 2024"
          imageSrc="RIT.png"
      />
    </section>
  </template>
  
  <script setup lang="ts">
  
  import EducationCard from "~/components/EducationCard.vue";
  </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/main.scss';
  
    #education {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
  
    .education-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 80rem;
    }
  </style>