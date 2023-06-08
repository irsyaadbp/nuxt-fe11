import { VuetifyOptions, createVuetify } from "vuetify";

export const config: VuetifyOptions = {
  ssr: true,
};

const vuetify = createVuetify(config);

export default vuetify;
