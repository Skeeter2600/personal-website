<template>
    <section id="experience">
      <h1 
        class="title" 
        v-motion-slide-visible-once-bottom
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        style="opacity: 1"
        :duration="500"
      >
        Experience
      </h1>
  
      <ExperienceCard
          company="Evo Security"
          position="Associate Software Engineer"
          period="July 2024 - Present"
          :description="evoDescription"
          imageSrc="evo_security_logo.jpeg"
          websiteUrl="https://www.evosecurity.com/"
      />
  
      <ExperienceCard
          company="RIT"
          position="Course Assistant"
          period="August 2023 - May 2024"
          :description="ritDescription"
          imageSrc="RIT.png"
          websiteUrl="https://www.rit.edu/computing/"
      />
  
      <ExperienceCard
          company="Ecolab"
          position="Software Engineer Intern"
          period="January 2023 - May 2023"
          :description="ecolabDescription"
          imageSrc="Ecolab.jpg"
          websiteUrl="https://www.ecolab.com/"
      />
  
      <ExperienceCard
          company="Alpine Software"
          position="Software Developer Co-op"
          period="May 2022 - December 2022"
          :description="alpineDescription"
          imageSrc="alpinesoftware.jpg"
          websiteUrl="https://alpinesoftware.com/"
      />
    </section>
  </template>
  
  <script setup lang="ts">
    import ExperienceCard from "~/components/ExperienceCard.vue";
  
    const evoDescription = "● Redesigned and modernized the company's user portal using Vue/Nuxt, enhancing user experience and interface responsiveness.\n● Created and privately published GitHub packages to handle processing files for metadata and generating AI powered file analysis and virus safety reports.\n● Collaborated with an international team via daily meetings and using Jira to properly assign and manage project tasks and goals.";
    const ritDescription = "● Facilitated learning for 25+ software development and engineering students by leading technical discussions, hosting mentoring sessions, and providing constructive feedback on coursework.\n● Boosted student engagement and learning outcomes through responsive technical support, including answering questions during class and grading assignments with detailed feedback, resulting in 75% of students getting a B or better.";
    const ecolabDescription = "● Collaborated with a 25-person international team to enhance functionality and resolve system bugs for the Prep N Print application, improving user satisfaction by 20%\n● Demonstrated expertise in UI redesign using C# and Xamarin, ensuring compliance with requirements and elevating the user experience.\n● Pioneered the design of the user interface for a new company application using Figma, actively engaging stakeholders to gather inputs and incorporate 90% of their feedback through biweekly meetings.";
    const alpineDescription = "● Spearheaded the programming, maintenance, and support of existing applications using Delphi and SQL, ensuring seamless operations\n● Mentored a team of 4 interns, resulting in a 25% increase in their productivity and the successful completion of 15 additional projects weekly.\n● Collaborated closely with clients, expertly translating project requirements into comprehensive design specifications that aligned with client expectations, ensuring successful project delivery.";
  </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/main.scss';
  
    #experience {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
  
    .experience-container {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
  </style>