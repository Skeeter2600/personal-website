<template>
  <div>
    <ClientOnly>
      <BackgroundParticles />
    </ClientOnly>
    <Header></Header>
    <NuxtPage />
    <MagneticContact />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
});
</script>
