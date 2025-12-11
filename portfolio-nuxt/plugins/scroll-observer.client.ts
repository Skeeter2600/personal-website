export default defineNuxtPlugin((nuxtApp) => {
  const observeSections = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    const sections = document.querySelectorAll('section:not(#projects):not(#experience)');
    sections.forEach((section) => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });
  };

  nuxtApp.hook('page:finish', () => {
    // Small delay to ensure DOM is ready after transition
    setTimeout(observeSections, 100);
  });

  // Also run on initial mount
  if (process.client) {
    setTimeout(observeSections, 100);
  }
});
