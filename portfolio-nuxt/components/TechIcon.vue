<template>
  <span class="tech-icon-container">
    <!-- Nuxt SVG -->
    <svg
      v-if="isNuxt"
      class="tech-svg-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8.53 19.5H1.47a.97.97 0 0 1-.84-1.45l7.06-12.23a.97.97 0 0 1 1.68 0l2.36 4.09-1.68 2.91-1.52-2.64-4.7 8.14h10.37l-1.68 2.91zm6.94 0h-4.22l4.89-8.48 4.89 8.48h-4.22l-1.34-2.32-1.34 2.32zm8.53-1.45L16.94 5.82a.97.97 0 0 0-1.68 0L13.1 9.56l1.68 2.91 1.32-2.29 5.37 9.3H18.9l1.68 2.91h2.55a.97.97 0 0 0 .84-1.45z" />
    </svg>

    <!-- SQLite SVG -->
    <svg
      v-else-if="isSQLite"
      class="tech-svg-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.97 0 8 1.48 8 2s-3.03 2-8 2-8-1.48-8-2 3.03-2 8-2zm0 16c-4.97 0-8-1.48-8-2v-2.23c2.08 1.37 5.09 2.23 8 2.23s5.92-.86 8-2.23V18c0 .52-3.03 2-8 2zm0-5c-4.97 0-8-1.48-8-2v-2.23c2.08 1.37 5.09 2.23 8 2.23s5.92-.86 8-2.23V13c0 .52-3.03 2-8 2zm0-5c-4.97 0-8-1.48-8-2V5.77C6.08 7.14 9.09 8 12 8s5.92-.86 8-2.23V8c0 .52-3.03 2-8 2z" />
    </svg>

    <!-- Electron SVG -->
    <svg
      v-else-if="isElectron"
      class="tech-svg-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>

    <!-- Boxicons / Devicon Font Icon -->
    <i v-else :class="iconClass" aria-hidden="true"></i>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  name: string;
}>();

const normalized = computed(() => (props.name || '').trim());

const isNuxt = computed(() => /^nuxt/i.test(normalized.value));
const isSQLite = computed(() => /^sqlite/i.test(normalized.value));
const isElectron = computed(() => /^electron/i.test(normalized.value));

const iconClass = computed(() => {
  const n = normalized.value;
  const map: Record<string, string> = {
    // Vue
    'Vue.js': 'bx bxl-vuejs',
    'Vue': 'bx bxl-vuejs',
    'Vue 3': 'bx bxl-vuejs',
    // React
    'React Native': 'bx bxl-react',
    'React': 'bx bxl-react',
    // TypeScript & JavaScript
    'TypeScript': 'bx bxl-typescript',
    'JavaScript': 'bx bxl-javascript',
    // Node.js
    'Node.js': 'bx bxl-nodejs',
    'Node': 'bx bxl-nodejs',
    // Styling & Web
    'SCSS': 'bx bxl-sass',
    'Sass': 'bx bxl-sass',
    'Tailwind': 'bx bxl-tailwind-css',
    'CSS3': 'bx bxl-css3',
    'CSS': 'bx bxl-css3',
    'HTML5': 'bx bxl-html5',
    'HTML': 'bx bxl-html5',
    // Database
    'PostgreSQL': 'bx bxl-postgresql',
    'SQL': 'bx bx-data',
    'SQLite': 'devicon-sqlite-plain',
    // Design & Tools
    'Figma': 'bx bxl-figma',
    'Python': 'bx bxl-python',
    'Docker': 'bx bxl-docker',
    'GitHub': 'bx bxl-github',
    'Ruby on Rails': 'devicon-ruby-plain',
    'Ruby': 'bx bxl-ruby',
    'FastAPI': 'devicon-fastapi-plain',
    'GCP': 'devicon-googlecloud-plain',
    'Firebase': 'bx bxl-firebase',
    'Javascript': 'bx bxl-javascript',
    'Flutter': 'bx bxl-flutter',
    'Dart': 'devicon-dart-plain',
    
  };

  return map[n] || 'bx bx-code-alt';
});
</script>

<style lang="scss" scoped>
.tech-icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.tech-svg-icon {
  width: 1rem;
  height: 1rem;
  display: inline-block;
  vertical-align: middle;
}

i {
  font-size: 1rem;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
}
</style>
