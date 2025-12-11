<template>
    <div 
      v-motion-slide-visible-once-bottom
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
      :delay="200"
      style="opacity: 1"
      :duration="500"
      class="experience-card-body" 
    >
      <div class="content-img">
        <a v-if="websiteUrl" :href="websiteUrl" target="_blank" rel="noreferrer">
          <img :src="`/images/${imageSrc}`" :alt="company + ' Logo'" class="experience-card-image" />
        </a>
        <img v-else :src="`/images/${imageSrc}`" :alt="company + ' Logo'" class="experience-card-image" />
      </div>
      <div class="experience-card-text">
        <div class="experience-card-position-container">
          <h2 class="experience-position-info">{{ position }}</h2>
          <h2 class="experience-position-info">{{ period }}</h2>
        </div>
        <p class="experience-card-description">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    company: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    websiteUrl: {
      type: String,
      default: ''
    }
  });
  </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/main.scss';
  
    .experience-card-body {
      background-color: $clr-surface-a10;
      border: 1px solid $clr-primary-a30; /* Updated to Orange */
      margin: 25px 0;
      overflow: hidden;
      border-radius: 35px;
      border-width: 5px;
      display: flex;
      flex-direction: row;
      align-items: center; /* Vertically center content */
      justify-content: center;
      width: 100%;
      max-width: 1250px; /* Increased max-width */
      
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
    }
  
    .experience-card-image {
      height: auto;
      overflow: hidden;
      aspect-ratio: 1/1;
      width: 18rem; /* Increased size */
      max-width: 80%;
      display: flex;
      flex-shrink: 0; /* Prevent shrinking */
      object-fit: cover;
      justify-content: center;
      padding: 2rem;
      border-radius: 60px;
      background-color: $clr-surface-a10;
    }
  
    .experience-card-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      height: 100%;
      padding: 2rem; /* Restored padding */
      flex: 1; /* Take remaining space */
      width: auto;
      max-width: 100%;
      color: $clr-light-a0;
      background-color: $clr-surface-a10;
      
      @media (max-width: 768px) {
        padding: 1.5rem;
        text-align: center;
      }
    }
  
    .experience-card-position-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      background-color: $clr-surface-a10;
      margin-bottom: 1rem;
    }
  
    .experience-position-info {
      padding-bottom: .5rem;
      font-size: 1.5rem; /* Increased from 1.2rem */
      font-weight: 500;
      background-color: $clr-surface-a10;
      color: $clr-primary-a30;
    }
  
    .experience-card-description {
      display: flex;
      flex-direction: column;
      white-space: pre-line;
      background-color: $clr-surface-a10;
      font-size: 1.1rem; /* Increased from 0.95rem */
      line-height: 1.7; /* Slightly looser line-height */
      font-weight: 300;
      color: #d1d1d1;
    }
  
    .experience-card_link_boarder {
      display: flex;
      align-self: center;
      justify-content: center;
      gap: 1rem;
      margin: 1rem;
      background-color: #dfdfe5;
      border-radius: 2rem;
      height: 6vmin;
      width: 50%;
    }
  
    .experience-card-link-text {
      background-color: transparent;
      color: black;
      text-decoration: none;
      text-decoration-color: white;
      font-size: 2.5vmin;
      padding: 0.5rem;
    }
  </style>