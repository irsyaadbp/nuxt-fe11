// .storybook/preview.ts

import { setup, Preview } from "@storybook/vue3";

import { createPinia } from "pinia";
import vuetify from "../config/vuetify";

setup((app) => {
  //👇 Registers a global Pinia instance inside Storybook to be consumed by existing stories
  app.use(createPinia());
  app.use(vuetify);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // decorators: [
  //   (story) => ({
  //     components: { story },
  //     template: `
  //     <v-app>
  //       <v-main>
  //         <story />
  //       </v-main>
  //     </v-app>
  //     `,
  //   }),
  // ],
};

export default preview;
