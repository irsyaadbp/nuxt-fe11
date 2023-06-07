import BaseCard from "../components/BaseCard.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof BaseCard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Example/BaseCard",
  component: BaseCard,
  tags: ["autodocs"],
  render: (args) => {
    return {
      components: {
        BaseCard,
      },
      // setup() {
      //   return { args };
      // },
      template: `
      <base-card v-bind="$props">
        <template v-if="${"default" in args}" v-slot>${args.default}</template>
      </base-card>
      `,
    };
  },
  argTypes: {
    default: {
      control: "text",
    },
  },
  args: {
    default: "Slot Default"
  }
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    default: `<h1>Testing</h1>`,
  },
};
