import { VuetifyOptions, createVuetify } from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
export const config: VuetifyOptions = {
  ssr: true,
  components,
  directives,
};

const vuetify = createVuetify(config);

export default vuetify;
