import { VuetifyOptions, createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const icons = {
  defaultSet: "mdi",
  aliases,
  sets: {
    mdi,
  },
};

export const config: VuetifyOptions = {
  ssr: true,
  icons,
};

const vuetify = createVuetify(config);

export default vuetify;
