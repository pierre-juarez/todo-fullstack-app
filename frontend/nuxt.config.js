export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Todo App",
    htmlAttrs: {
      lang: "es",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "@fortawesome/fontawesome-free/css/all.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/v-tooltip.js", "~/plugins/pinia.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // pinia
    "@nuxtjs/composition-api/module",
    "@pinia/nuxt", // [!code ++]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/dotenv"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    NUXT_API_BACKEND: process.env.API_BACKEND,
    NUXT_API_GRAPHQL: process.env.API_GRAPHQL,
  },
};
