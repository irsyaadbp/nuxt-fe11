import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt FE11",
    },
  },
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "storeToRefs"],
      },
    ],
    async (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        setTimeout(() => {
          config.plugins?.push(vuetify());
        }, 5000);
      });
    },
  ],
});
