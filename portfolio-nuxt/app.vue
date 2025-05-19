<template>
    <div>
      <Header></Header>
      <NuxtPage />
    </div>
  </template>
  
  <script lang="ts">
    import {defineComponent} from "vue";

    export default defineComponent({
      name: 'DefaultLayout'
    })
  </script>