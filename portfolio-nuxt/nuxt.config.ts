export default {
  target: "static",
  head: {
    title: "Beck Anderson - Software Engineer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Portfolio of Beck Anderson, a Software Engineer specializing in Vue, Nuxt, React, and full-stack development",
      },
      {
        name: "google-site-verification",
        content: "Bd8B5XOSW9b0oPrIETRfytp7jrYGM7oP00g-OVG8HhI",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/ico",
        href: "https://drive.google.com/file/d/1tNvKL8N7V9ZWX7UyeyqjEWRXrz8pjRBR/preview",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
      },
    ],
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  buildModules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["~/assets/scss/variables.scss"],
  },
  css: ["~/assets/scss/main.scss"],
  components: true,
  generate: {
    fallback: true,
  },
  plugins: ["~/plugins/vercel-analytics.client.ts"],
};
