<template>
  <v-layout row class="mt-10 align-center">
    <v-col cols="12" class="text-center">
      <v-progress-circular
        indeterminate
        color="accent"
        size="80"
        width="6"
      ></v-progress-circular>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  name: "Loader",
};
</script>