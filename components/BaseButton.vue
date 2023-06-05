<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import "~/assets/styles/button.scss";

const props = defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: function (value: string) {
      return ["small", "medium", "large"].includes(value);
    },
  },
  backgroundColor: {
    type: String,
  },
});
const emits = defineEmits(["click"]);

const classes = computed(() => ({
  button: true,
  "button--primary": props.primary,
  "button--secondary": !props.primary,
  [`button--${props.size || "medium"}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
function onClick() {
  emits("click");
}
</script>
