<template>
    <NuxtLayout name="page">
      <ClientOnly>
        <div>
          <AboutSection />
          <ExperiencesSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </ClientOnly>
    </NuxtLayout>
  </template>
  
  <script lang="ts">
    import {defineComponent} from "vue";
    import AboutSection from "~/components/AboutSection.vue";
    import EducationSection from "~/components/EducationSection.vue";
    import ProjectsSection from "~/components/ProjectsSection.vue";
    import ContactSection from "~/components/ContactSection.vue";
    import ExperiencesSection from "~/components/ExperiencesSection.vue";
  
    export default defineComponent({
      components: {ExperiencesSection, ContactSection, ProjectsSection, EducationSection, AboutSection}
    })
  
  </script>