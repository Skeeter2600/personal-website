<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "DefaultLayout",
  components: { Header },
};
</script>
