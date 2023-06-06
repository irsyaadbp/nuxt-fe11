import { defineSetupVue3 } from "@histoire/plugin-vue";
import vuetify from "~/config/vuetify";
export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(vuetify);
});
