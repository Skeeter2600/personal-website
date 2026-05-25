<template>
  <div>
    <AnnouncementBanner />
    <ClientOnly>
      <BackgroundParticles />
    </ClientOnly>
    <Header />
    <NuxtPage />
    <ScrollProgressBar />
    <MagneticContact />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
