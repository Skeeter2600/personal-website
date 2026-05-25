<template>
  <NuxtLayout>
    <ClientOnly>
      <AboutSection />
      <ExperiencesSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </ClientOnly>
  </NuxtLayout>
</template>

<script setup lang="ts">
import AboutSection from "~/components/AboutSection.vue";
import EducationSection from "~/components/EducationSection.vue";
import ProjectsSection from "~/components/ProjectsSection.vue";
import ContactSection from "~/components/ContactSection.vue";
import ExperiencesSection from "~/components/ExperiencesSection.vue";

useSeoMeta({
  title: "Beck Anderson — Software Engineer",
  description:
    "Beck Anderson is a Software Engineer specializing in Vue, Nuxt, React, and full-stack development. Currently at Evo Security.",
});
</script>