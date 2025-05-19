<template>
  <div>
    <Header></Header>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
  head() {
    return {
      script: [
        {
          hid: "vercel-analytics",
          src: "/_vercel/insights/script.js",
          defer: true,
        },
      ],
    };
  },
});
</script>
