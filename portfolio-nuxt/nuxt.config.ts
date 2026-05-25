export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  css: ["~/assets/scss/main.scss"],

  components: true,

  app: {
    head: {
      title: "Beck Anderson — Software Engineer",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // Primary SEO
        {
          name: "description",
          content:
            "Beck Anderson is a Software Engineer specializing in Vue, Nuxt, React, and full-stack development. Currently at Evo Security, building secure digital experiences.",
        },
        { name: "author", content: "Beck Anderson" },
        { name: "robots", content: "index, follow" },
        {
          name: "google-site-verification",
          content: "Bd8B5XOSW9b0oPrIETRfytp7jrYGM7oP00g-OVG8HhI",
        },

        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.beckanderson.com/" },
        {
          property: "og:title",
          content: "Beck Anderson — Software Engineer",
        },
        {
          property: "og:description",
          content:
            "Software Engineer specializing in Vue, Nuxt, React, and full-stack development. Currently at Evo Security.",
        },
        {
          property: "og:image",
          content: "https://www.beckanderson.com/images/profile_pic.jpg",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:locale", content: "en_US" },
        { property: "og:site_name", content: "Beck Anderson Portfolio" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://www.beckanderson.com/" },
        {
          name: "twitter:title",
          content: "Beck Anderson — Software Engineer",
        },
        {
          name: "twitter:description",
          content:
            "Software Engineer specializing in Vue, Nuxt, React, and full-stack development. Currently at Evo Security.",
        },
        {
          name: "twitter:image",
          content: "https://www.beckanderson.com/images/profile_pic.jpg",
        },
      ],
      link: [
        // Canonical
        { rel: "canonical", href: "https://www.beckanderson.com/" },

        // Favicon
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        // Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
        },
      ],
      script: [
        // JSON-LD Structured Data — Person schema
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Beck Anderson",
            jobTitle: "Software Engineer",
            url: "https://www.beckanderson.com/",
            image: "https://www.beckanderson.com/images/profile_pic.jpg",
            description:
              "Software Engineer specializing in Vue, Nuxt, React, and full-stack development. Currently at Evo Security.",
            worksFor: {
              "@type": "Organization",
              name: "Evo Security",
              url: "https://www.evosecurity.com/",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Rochester Institute of Technology",
              url: "https://www.rit.edu/",
            },
            sameAs: [
              "https://www.linkedin.com/in/beck-anderson-se/",
              "https://github.com/Skeeter2600",
            ],
            knowsAbout: [
              "Vue.js",
              "Nuxt.js",
              "React",
              "Python",
              "TypeScript",
              "SQL",
              "Software Engineering",
              "Full-Stack Development",
            ],
          }),
        },
      ],
    },
  },

});
