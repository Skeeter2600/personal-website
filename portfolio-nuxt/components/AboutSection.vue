<template>
    <section id="about">
      <div 
        v-motion-slide-visible-once-bottom
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        style="opacity: 1"
        :duration="500"
        class="about_container" 
      >
        <img class="profile_pic" src="/images/profile_pic.jpg" alt="Beck Anderson Headshot" />
        <div class="section__text">
          <p class="section__text__p1">Hello World! I'm</p>
          <h1 class="title">Beck Anderson</h1>
          <p>
            I am currently an Associate Software Engineer at Evo Security, helping create a more secure digital world.
            In May of 2024, I graduated from the Rochester Institute of Technology with a major in Software
            Engineering with a minor in Computer Engineering. Throughout my time in school and in industry,
            I have had countless opportunities to demonstrate the skills that I have learned, ranging from coding
            languages (Python, Java, SQL, and more), various technologies (Vue, Nuxt, React, API Development, SQL), and
            learning the methodologies and practices used in the real world.
            Feel free to connect if you want to learn more about me, or just to build both of our networks!
          </p>
          <div class="resume-button">
            <a class="nav-style-link" href="/files/Beck_Anderson_Resume.pdf" download>Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>  
  </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/main.scss';
  
    #about {
      display: flex;
      justify-content: center;
    }
  
    .about_container {
      gap: 5rem;
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: transparent;
      justify-content: center;
      transform: translateY(20px);
    }
  
    .profile_pic {
      display: flex;
      height: 50vmin;
      width: 50vmin;
      margin: auto 0;
      background-color: $clr-primary-a10;
      border: 5px solid $clr-primary-a0;
      border-radius: 35px;
    }
  
    .section__text {
      align-self: center;
      text-align: center;
      align-content: center;
      background-color: transparent;
      width: 60vmin;
    }
  
    .section__text p {
      font-weight: 600;
    }
  
    .section__text__p1 {
      text-align: center;
    }
  
    .section__text__p2 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }
  
    .resume-button {
      display: flex;
      justify-content: center;
      margin: 2rem 0;
      background-color: transparent;
    }
  </style>