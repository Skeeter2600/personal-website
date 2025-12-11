<template>
    <section id="contact">
      <h1 
        class="title" 
        v-motion-slide-visible-once-bottom
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        style="opacity: 1"
        :duration="500"
      >
        Contact Me
      </h1>
      <div 
        v-motion-slide-visible-once-bottom
        :duration="500"
        class="contact-info-upper-container"
      >
        <div class="contact-info-container">
          <img
            src="/images/email.svg"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:andersbe2600@gmail.com">andersbe2600@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src="/images/github.svg"
            alt="Github Icon"
            class="icon contact-icon"
          />
          <a href="https://github.com/Skeeter2600" target="_blank" rel="noreferrer">Github</a>
        </div>
  
        <div class="contact-info-container">
          <img
            src="/images/linkedin.svg"
            alt="LinkedIn Icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/beck-anderson-se/" target="_blank" rel="noreferrer">Linkedin</a></p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/main.scss';
  
    #contact {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
  
    .contact-info-upper-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        border-radius: 2rem;
        border-color: $clr-surface-a10;
        margin: 2rem 0 2rem 0;
        padding: 0.5rem;
        /* background-color: $clr-surface-a10; Removed */
        @include glass-effect;
    }
  
    .contact-info-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin: 1rem;
        background-color: transparent;
    }
  
    .contact-info-container p {
        background-color: transparent;
        font-size: 2vmin;
    }
  
    .contact-info-container a {
        color: $clr-surface-a50;
        text-decoration: none;
        position: relative;
        padding: 0.2rem 0;
        transition: color 0.3s ease;
        
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: $clr-primary-a30;
            transition: width 0.3s ease;
        }
        
        &:hover {
            color: $clr-light-a0;
            
            &::after {
                width: 100%;
            }
        }
    }
  
    .contact-icon {
        cursor: default;
        color: $clr-surface-a40;
        background-color: transparent;
    }
  
    .email-icon {
        height: 2.5rem;
    }
  </style>