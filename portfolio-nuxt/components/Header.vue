<template>
    <nav id="desktop-nav">
      <div class="logo">Beck Anderson</div>
      <div class="nav-container">
        <ul class="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  
  onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = (this as HTMLElement).getAttribute('href');
        if (!targetId) return;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const navElement = document.getElementById('desktop-nav');
          const navHeight = navElement ? navElement.offsetHeight : 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
            top: targetPosition - navHeight - 20, // Additional 20px buffer
            behavior: 'smooth'
          });
        }
      });
    });
  });
  </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/main.scss';
  
    #desktop-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include glass-effect;
      padding: 1.5rem 5%;
      height: auto;
      /* background-color: $clr-surface-a10; Removed for glass effect */
      border-radius: 0 0 1.5rem 1.5rem;
      /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); Handled by glass mixin */
      width: 90%;
      max-width: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      
      /* Sticky positioning */
      position: sticky;
      top: 0;
      z-index: 1000;
    }
  
    .logo {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      color: $clr-light-a0;
      background-color: transparent;
      position: relative;
      padding-left: 0.5rem;
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.25rem;
        bottom: 0.25rem;
        width: 3px;
        background-color: $clr-primary-a30;
        border-radius: 3px;
      }
    }
  
    .nav-container {
      background-color: transparent;
    }
  
    .nav-links {
      display: flex;
      gap: 2.5rem;
      list-style: none;
      background-color: transparent;
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
      
      li {
        background-color: transparent;
      }
      
      a {
        color: $clr-surface-a50;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        position: relative;
        padding: 0.5rem 0;
        background-color: transparent;
        transition: color 0.3s ease;
        white-space: nowrap;
        
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
          text-decoration: none;
          
          &::after {
            width: 100%;
          }
        }
      }
    }
  
    @media (max-width: 900px) {
      #desktop-nav {
        padding: 1rem 5%;
      }
      
      .nav-links {
        gap: 1.2rem;
        
        a {
          font-size: 0.9rem;
        }
      }
      
      :global(section) {
        scroll-margin-top: 80px;
      }
    }
  
    @media (max-width: 700px) {
      #desktop-nav {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 2%;
      }
      
      .nav-links {
        gap: 1rem;
        justify-content: center;
        
        a {
          font-size: 0.85rem;
        }
      }
      
      :global(section) {
        scroll-margin-top: 120px;
      }
    }
  </style>