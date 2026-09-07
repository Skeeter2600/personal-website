<template>
  <nav id="desktop-nav">
    <div class="logo">Beck Anderson</div>
    <div class="nav-container">
      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.href)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const navItems = [
  { href: '#about',     id: 'about',     label: 'About Me'   },
  { href: '#experience',id: 'experience',label: 'Experience' },
  { href: '#education', id: 'education', label: 'Education'  },
  { href: '#projects',  id: 'projects',  label: 'Projects'   },
  { href: '#contact',   id: 'contact',   label: 'Contact'    },
];

const activeSection = ref('about');
let isScrollingTo = false;
let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
let ticking = false;

function updateActiveSection() {
  if (isScrollingTo) return;

  const scrollY = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // If scrolled close to the bottom of the page, activate the last nav item
  if (scrollY + windowHeight >= documentHeight - 60) {
    activeSection.value = navItems[navItems.length - 1].id;
    return;
  }

  const navElement = document.getElementById('desktop-nav');
  const navHeight = navElement ? navElement.offsetHeight : 80;
  const offset = navHeight + 80;

  // Find the last section whose top is at or above the threshold offset
  let current = navItems[0].id;
  for (const item of navItems) {
    const el = document.getElementById(item.id);
    if (el) {
      const top = el.getBoundingClientRect().top;
      if (top <= offset) {
        current = item.id;
      }
    }
  }
  activeSection.value = current;
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateActiveSection();
      ticking = false;
    });
    ticking = true;
  }
}

function scrollTo(href: string) {
  const targetId = href;
  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;

  const id = href.replace('#', '');
  activeSection.value = id;
  isScrollingTo = true;

  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    isScrollingTo = false;
    updateActiveSection();
  }, 800);

  const navElement = document.getElementById('desktop-nav');
  const navHeight = navElement ? navElement.offsetHeight : 80;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: targetPosition - navHeight - 20, behavior: 'smooth' });
}

onMounted(() => {
  nextTick(() => {
    updateActiveSection();
  });
  setTimeout(updateActiveSection, 150);
  setTimeout(updateActiveSection, 500);

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);
  if (scrollTimeout) clearTimeout(scrollTimeout);
});
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/main.scss';

  #desktop-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include glass-effect;
    padding: 1.25rem 5%;
    height: auto;
    border-radius: 0 0 1.5rem 1.5rem;
    width: 90%;
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: padding 0.3s ease;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: $clr-light-a0;
    background-color: transparent;
    position: relative;
    padding-left: 0.75rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.2rem;
      bottom: 0.2rem;
      width: 3px;
      background: linear-gradient(to bottom, $clr-primary-a30, $clr-primary-a50);
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
      font-size: 0.95rem;
      font-weight: 500;
      position: relative;
      padding: 0.4rem 0;
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
        background: linear-gradient(90deg, $clr-primary-a30, $clr-primary-a50);
        border-radius: 2px;
        transition: width 0.3s ease;
      }

      &:hover,
      &.active {
        color: $clr-light-a0;
        text-decoration: none;

        &::after {
          width: 100%;
        }
      }

      &.active {
        color: $clr-primary-a40;
      }
    }
  }

  @media (max-width: 900px) {
    #desktop-nav { padding: 1rem 5%; }
    .nav-links {
      gap: 1.2rem;
      a { font-size: 0.875rem; }
    }
  }

  @media (max-width: 700px) {
    #desktop-nav {
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem 2%;
    }
    .nav-links {
      gap: 0.9rem;
      justify-content: center;
      a { font-size: 0.82rem; }
    }
    :global(section) { scroll-margin-top: 120px; }
  }
</style>