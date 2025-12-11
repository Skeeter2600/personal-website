<template>
  <section id="experience" ref="sectionRef">
    <h1 class="title">Experience</h1>

    <div class="experience-container">
      <ExperienceCard
        v-for="(exp, index) in experiences"
        :key="index"
        v-bind="exp"
        class="stagger-enter"
        :class="`stagger-delay-${index + 1}`"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ExperienceCard from "~/components/ExperienceCard.vue";

const sectionRef = ref(null);

const experiences = [
  {
    company: "Evo Security",
    position: "Software Engineer I",
    period: "July 2024 - Present",
    description: "● Redesigned and modernized the company's user portal using Vue/Nuxt, enhancing user experience and interface responsiveness.\n● Created and privately published GitHub packages to handle processing files for metadata and generating AI powered file analysis and virus safety reports.\n● Collaborated with an international team via daily meetings and using Jira to properly assign and manage project tasks and goals.",
    imageSrc: "evo_security_logo.jpeg",
    websiteUrl: "https://www.evosecurity.com/"
  },
  {
    company: "RIT",
    position: "Course Assistant",
    period: "August 2023 - May 2024",
    description: "● Facilitated learning for 25+ software development and engineering students by leading technical discussions, hosting mentoring sessions, and providing constructive feedback on coursework.\n● Boosted student engagement and learning outcomes through responsive technical support, including answering questions during class and grading assignments with detailed feedback, resulting in 75% of students getting a B or better.",
    imageSrc: "RIT.png",
    websiteUrl: "https://www.rit.edu/computing/"
  },
  {
    company: "Ecolab",
    position: "Software Engineer Intern",
    period: "January 2023 - May 2023",
    description: "● Collaborated with a 25-person international team to enhance functionality and resolve system bugs for the Prep N Print application, improving user satisfaction by 20%\n● Demonstrated expertise in UI redesign using C# and Xamarin, ensuring compliance with requirements and elevating the user experience.\n● Pioneered the design of the user interface for a new company application using Figma, actively engaging stakeholders to gather inputs and incorporate 90% of their feedback through biweekly meetings.",
    imageSrc: "Ecolab.jpg",
    websiteUrl: "https://www.ecolab.com/"
  },
  {
    company: "Alpine Software",
    position: "Software Developer Co-op",
    period: "May 2022 - December 2022",
    description: "● Spearheaded the programming, maintenance, and support of existing applications using Delphi and SQL, ensuring seamless operations\n● Mentored a team of 4 interns, resulting in a 25% increase in their productivity and the successful completion of 15 additional projects weekly.\n● Collaborated closely with clients, expertly translating project requirements into comprehensive design specifications that aligned with client expectations, ensuring successful project delivery.",
    imageSrc: "alpinesoftware.jpg",
    websiteUrl: "https://alpinesoftware.com/"
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

  #experience {
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

  #experience.is-visible .title {
    opacity: 1;
    transform: translateY(0);
  }

  .experience-container {
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
  }
  
  #experience.is-visible :deep(.stagger-enter) {
    animation-play-state: running;
  }
</style>