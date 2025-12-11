<template>
    <div 
      class="project-card-body" 
      v-motion-slide-visible-once-bottom
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="200"
      style="opacity: 1"
      :duration="500"
    >
      <div class="content-img">
        <a v-if="linkUrl" :href="linkUrl" target="_blank" rel="noreferrer">
          <img :src="`/images/${imageSrc}`" :alt="title + ' Image'" class="project-card-image" />
        </a>
        <img v-else :src="`/images/${imageSrc}`" :alt="title + ' Image'" class="project-card-image" />
      </div>
      <div class="project-card-text">
        <p class="project-card-tag">{{ tag }}</p>
        <h2 class="project-card-title">{{ title }}</h2>
        <p class="project-card-description">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  defineProps({
    title: String,
    tag: String,
    description: String,
    imageSrc: String,
    linkUrl: String,
    linkText: {
      type: String,
      default: ''
    }
  });
  </script>
  
<style lang="scss" scoped>
    @import '@/assets/scss/main.scss';
  
    .project-card-body {
      background-color: $clr-surface-a10;
      border: 5px solid $clr-primary-a30; /* Updated to Orange */
      margin: 25px 0;
      overflow: hidden;
      width: 100%;
      max-width: 600px; /* Sensible desktop max width */
      border-radius: 35px;
      
      @media (min-width: 1024px) {
         max-width: 40%;
         min-width: 350px;
      }
    }
  
    .content-img {
       width: 100%;
    }

    .content-img a {
        width: 100%;
        display: block;
    }

    .project-card-image {
      border-bottom: 4px solid $clr-primary-a30; /* Updated to Orange */
      width: 100%;
      aspect-ratio: 16/9; /* Restored aspect ratio */
      overflow: hidden;
      object-fit: cover;
      display: flex;
      justify-content: center;
      background-color: $clr-surface-a10; 
    }
  
    .project-card-tag {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $clr-surface-a10;
      font-weight: 500;
      font-size: 0.9rem;
      color: $clr-primary-a30;
    }
  
    .project-card-title {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $clr-surface-a10;
      color: $clr-light-a0;
      padding: 0.5rem 1rem;
      font-size: 1.5rem; /* Increased size */
    }
  
    .project-card-text {
      display: flex;
      text-align: center;
      flex-direction: column;
      align-content: center;
      height: 100%;
      background-color: $clr-surface-a10;
      padding: 1rem; /* Restore some padding */
    }
  
    .project-card-description {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 1.1rem; /* Increased from 0.95rem */
      line-height: 1.7;
      margin: .5rem;
      margin-bottom: 2rem;
      background-color: $clr-surface-a10;
      color: #d1d1d1; /* Lighter/Softer white */
      font-weight: 300;
    }
  
    .project-link-container {
      display: flex;
      align-self: center;
      justify-content: center;
      margin: 1.5rem 0;
      background-color: transparent;
    }
  </style>