<template>
  <v-card>
    <template v-if="title">
      <v-card-title>{{ title }}</v-card-title>
      <v-divider />
    </template>
    <v-card-text><slot /></v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
